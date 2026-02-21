import * as THREE from 'three';
import { extractLightUniforms } from '../engine/lighting.js';

export function createTexturedMaterial(atlasTexture, lightingData) {
  const lu = extractLightUniforms(lightingData);

  const mat = new THREE.ShaderMaterial({
    fog: true,
    lights: true,
    wireframe: false,
    side: THREE.DoubleSide,
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      THREE.UniformsLib.lights,
      {
        terrainAtlas: { value: atlasTexture },
        ambientColor: { value: lu.ambientColor },
        numLights: { value: lu.numLights },
        diffuseColor0: { value: lu.diffuseColors[0] },
        diffuseColor1: { value: lu.diffuseColors[1] },
        diffuseColor2: { value: lu.diffuseColors[2] },
        lightDir0: { value: lu.lightDirs[0] },
        lightDir1: { value: lu.lightDirs[1] },
        lightDir2: { value: lu.lightDirs[2] },
      }
    ]),
    vertexShader: `
      attribute vec2 baseUV;
      attribute vec2 blendUV;
      attribute vec2 extraUV;
      attribute float blendAlpha;
      attribute float extraAlpha;

      varying vec2 vBaseUV;
      varying vec2 vBlendUV;
      varying vec2 vExtraUV;
      varying float vBlendAlpha;
      varying float vExtraAlpha;
      varying vec3 vNormal;
      varying vec3 vWorldPos;

      #include <common>
      #include <fog_pars_vertex>
      #include <shadowmap_pars_vertex>

      void main() {
        vBaseUV = baseUV;
        vBlendUV = blendUV;
        vExtraUV = extraUV;
        vBlendAlpha = blendAlpha;
        vExtraAlpha = extraAlpha;

        vec3 transformedNormal = normalMatrix * normal;
        vNormal = transformedNormal;

        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPosition.xyz;

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        #include <shadowmap_vertex>
        #include <fog_vertex>
      }
    `,
    fragmentShader: `
      uniform sampler2D terrainAtlas;
      uniform vec3 ambientColor;
      uniform int numLights;
      uniform vec3 diffuseColor0;
      uniform vec3 diffuseColor1;
      uniform vec3 diffuseColor2;
      uniform vec3 lightDir0;
      uniform vec3 lightDir1;
      uniform vec3 lightDir2;

      varying vec2 vBaseUV;
      varying vec2 vBlendUV;
      varying vec2 vExtraUV;
      varying float vBlendAlpha;
      varying float vExtraAlpha;
      varying vec3 vNormal;
      varying vec3 vWorldPos;

      #include <common>
      #include <packing>
      #include <fog_pars_fragment>
      #include <shadowmap_pars_fragment>

      void main() {
        vec4 color = texture2D(terrainAtlas, vBaseUV);

        if (vBlendAlpha > 0.01) {
          vec4 blend = texture2D(terrainAtlas, vBlendUV);
          color = mix(color, blend, vBlendAlpha);
        }
        if (vExtraAlpha > 0.01) {
          vec4 extra = texture2D(terrainAtlas, vExtraUV);
          color = mix(color, extra, vExtraAlpha);
        }

        vec3 n = normalize(vNormal);

        float shadow = 1.0;
        #if NUM_DIR_LIGHT_SHADOWS > 0
          DirectionalLightShadow dirShadow = directionalLightShadows[0];
          float s = getShadow(
            directionalShadowMap[0],
            dirShadow.shadowMapSize,
            dirShadow.shadowBias,
            dirShadow.shadowRadius,
            vDirectionalShadowCoord[0]
          );
          shadow = s;
        #endif

        vec3 shade = ambientColor;

        float NdotL;
        NdotL = clamp(dot(n, lightDir0), 0.0, 1.0);
        shade += diffuseColor0 * NdotL * shadow;

        if (numLights > 1) {
          NdotL = clamp(dot(n, lightDir1), 0.0, 1.0);
          shade += diffuseColor1 * NdotL;
        }
        if (numLights > 2) {
          NdotL = clamp(dot(n, lightDir2), 0.0, 1.0);
          shade += diffuseColor2 * NdotL;
        }

        shade = clamp(shade, 0.0, 1.0);

        gl_FragColor = vec4(color.rgb * shade, 1.0);

        #include <fog_fragment>
      }
    `,
  });
  return mat;
}

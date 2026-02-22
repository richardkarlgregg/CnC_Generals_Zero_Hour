(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="164",$c=0,qo=1,jc=2,Kc=0,Xl=1,Zc=2,dn=3,_n=0,Ie=1,ve=2,In=0,Ai=1,Ws=2,$o=3,jo=4,Jc=5,Yn=100,Qc=101,th=102,eh=103,nh=104,ih=200,sh=201,rh=202,oh=203,io=204,so=205,ah=206,lh=207,ch=208,hh=209,uh=210,dh=211,fh=212,ph=213,mh=214,gh=0,_h=1,xh=2,Xs=3,vh=4,Mh=5,Sh=6,yh=7,cr=0,Eh=1,Th=2,gn=0,Ah=1,bh=2,wh=3,Ch=4,Rh=5,Lh=6,Ph=7,Yl=300,Li=301,Pi=302,ro=303,oo=304,hr=306,fn=1e3,$n=1001,ao=1002,Le=1003,Dh=1004,fs=1005,Ae=1006,xr=1007,qe=1008,Un=1009,Ih=1010,Uh=1011,ql=1012,$l=1013,Di=1014,Ln=1015,ur=1016,jl=1017,Kl=1018,os=1020,Nh=35902,Oh=1021,Fh=1022,Pe=1023,Bh=1024,zh=1025,bi=1026,ns=1027,kh=1028,Zl=1029,Gh=1030,Jl=1031,Ql=1033,vr=33776,Mr=33777,Sr=33778,yr=33779,Ko=35840,Zo=35841,Jo=35842,Qo=35843,ta=36196,ea=37492,na=37496,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,la=37813,ca=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,Er=36492,_a=36494,xa=36495,Hh=36283,va=36284,Ma=36285,Sa=36286,Vh=3200,Wh=3201,To=0,Xh=1,Rn="",Je="srgb",vn="srgb-linear",Ao="display-p3",dr="display-p3-linear",Ys="linear",Qt="srgb",qs="rec709",$s="p3",ni=7680,ya=519,Yh=512,qh=513,$h=514,tc=515,jh=516,Kh=517,Zh=518,Jh=519,Ea=35044,Ta="300 es",pn=2e3,js=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tr=Math.PI/180,lo=180/Math.PI;function as(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Qh(i,t){return(i%t+t)%t}function Ar(i,t,e){return(1-e)*i+e*t}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,o,a,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],x=s[4],M=s[7],w=s[2],E=s[5],A=s[8];return r[0]=o*_+a*v+l*w,r[3]=o*m+a*x+l*E,r[6]=o*p+a*M+l*A,r[1]=c*_+d*v+h*w,r[4]=c*m+d*x+h*E,r[7]=c*p+d*M+h*A,r[2]=u*_+f*v+g*w,r[5]=u*m+f*x+g*E,r[8]=u*p+f*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,u=a*l-d*r,f=c*r-o*l,g=e*h+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-d*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(d*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new It;function ec(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tu(){const i=Ks("canvas");return i.style.display="block",i}const Aa={};function eu(i){i in Aa||(Aa[i]=!0,console.warn(i))}const ba=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wa=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[vn]:{transfer:Ys,primaries:qs,toReference:i=>i,fromReference:i=>i},[Je]:{transfer:Qt,primaries:qs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[dr]:{transfer:Ys,primaries:$s,toReference:i=>i.applyMatrix3(wa),fromReference:i=>i.applyMatrix3(ba)},[Ao]:{transfer:Qt,primaries:$s,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wa),fromReference:i=>i.applyMatrix3(ba).convertLinearToSRGB()}},nu=new Set([vn,dr]),qt={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ps[t].toReference,s=ps[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ps[i].primaries},getTransfer:function(i){return i===Rn?Ys:ps[i].transfer}};function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class iu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Ks("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let su=0;class nc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cr(s[o].image)):r.push(Cr(s[o]))}else r=Cr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ru=0;class we extends Oi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=$n,s=$n,r=Ae,o=qe,a=Pe,l=Un,c=we.DEFAULT_ANISOTROPY,d=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=as(),this.name="",this.source=new nc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fn:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fn:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Yl;we.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,w=(p+1)/2,E=(d+u)/4,A=(h+_)/4,L=(g+m)/4;return x>M&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=A/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=L/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=L/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(u-d)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ou extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ic extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==u||c!==f||d!==g){let m=1-a;const p=l*u+c*f+d*g+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),E=Math.atan2(w,p*v);m=Math.sin(m*E)/w,a=Math.sin(a*E)/w}const M=a*v;if(l=l*m+u*M,c=c*m+f*M,d=d*m+g*M,h=h*m+_*M,m===1-a){const w=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=w,c*=w,d*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+d*h+l*f-c*u,t[e+1]=l*g+d*u+c*h-a*f,t[e+2]=c*g+d*f+a*u-l*h,t[e+3]=d*g-a*h-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),h=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ca.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ca.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new O,Ca=new Fi;class ls{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,We):We.fromBufferAttribute(r,o),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),gs.subVectors(this.max,Wi),si.subVectors(t.a,Wi),ri.subVectors(t.b,Wi),oi.subVectors(t.c,Wi),Sn.subVectors(ri,si),yn.subVectors(oi,ri),On.subVectors(si,oi);let e=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-On.z,On.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-On.y,On.x,0];return!Lr(e,si,ri,oi,gs)||(e=[1,0,0,0,1,0,0,0,1],!Lr(e,si,ri,oi,gs))?!1:(_s.crossVectors(Sn,yn),e=[_s.x,_s.y,_s.z],Lr(e,si,ri,oi,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new O,new O,new O,new O,new O,new O,new O,new O],We=new O,ms=new ls,si=new O,ri=new O,oi=new O,Sn=new O,yn=new O,On=new O,Wi=new O,gs=new O,_s=new O,Fn=new O;function Lr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fn.fromArray(i,r);const a=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),l=t.dot(Fn),c=e.dot(Fn),d=n.dot(Fn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const lu=new ls,Xi=new O,Pr=new O;class bo{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(Pr)),this.expandByPoint(Xi.copy(t.center).sub(Pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new O,Dr=new O,xs=new O,En=new O,Ir=new O,vs=new O,Ur=new O;class sc{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Dr.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Dr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xs),a=En.dot(this.direction),l=-En.dot(xs),c=En.lengthSq(),d=Math.abs(1-o*o);let h,u,f,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Dr).addScaledVector(xs,u),f}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){Ir.subVectors(e,t),vs.subVectors(n,t),Ur.crossVectors(Ir,vs);let o=this.direction.dot(Ur),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const l=a*this.direction.dot(vs.crossVectors(En,vs));if(l<0)return null;const c=a*this.direction.dot(Ir.cross(En));if(c<0||l+c>o)return null;const d=-a*En.dot(Ur);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,d,h,u,f,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,h,u,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,d,h,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ai.setFromMatrixColumn(t,0).length(),r=1/ai.setFromMatrixColumn(t,1).length(),o=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=o*d,f=o*h,g=a*d,_=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*d,f=l*h,g=c*d,_=c*h;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*d,f=l*h,g=c*d,_=c*h;e[0]=u-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*d,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*d,f=o*h,g=a*d,_=a*h;e[0]=l*d,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*d,e[4]=_-u*h,e[8]=g*h+f,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*h+g,e[10]=u-_*h}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+_,e[5]=o*d,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*d,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cu,t,hu)}lookAt(t,e,n){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Tn.crossVectors(n,Ne),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Tn.crossVectors(n,Ne)),Tn.normalize(),Ms.crossVectors(Ne,Tn),s[0]=Tn.x,s[4]=Ms.x,s[8]=Ne.x,s[1]=Tn.y,s[5]=Ms.y,s[9]=Ne.y,s[2]=Tn.z,s[6]=Ms.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],M=n[11],w=n[15],E=s[0],A=s[4],L=s[8],y=s[12],S=s[1],I=s[5],z=s[9],P=s[13],W=s[2],X=s[6],Q=s[10],et=s[14],H=s[3],it=s[7],q=s[11],dt=s[15];return r[0]=o*E+a*S+l*W+c*H,r[4]=o*A+a*I+l*X+c*it,r[8]=o*L+a*z+l*Q+c*q,r[12]=o*y+a*P+l*et+c*dt,r[1]=d*E+h*S+u*W+f*H,r[5]=d*A+h*I+u*X+f*it,r[9]=d*L+h*z+u*Q+f*q,r[13]=d*y+h*P+u*et+f*dt,r[2]=g*E+_*S+m*W+p*H,r[6]=g*A+_*I+m*X+p*it,r[10]=g*L+_*z+m*Q+p*q,r[14]=g*y+_*P+m*et+p*dt,r[3]=v*E+x*S+M*W+w*H,r[7]=v*A+x*I+M*X+w*it,r[11]=v*L+x*z+M*Q+w*q,r[15]=v*y+x*P+M*et+w*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*u+n*c*u+s*a*f-n*l*f)+_*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*d-r*l*d)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*d-n*c*d)+p*(-s*a*d-e*l*h+e*a*u+s*o*h-n*o*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=h*m*c-_*u*c+_*l*f-a*m*f-h*l*p+a*u*p,x=g*u*c-d*m*c-g*l*f+o*m*f+d*l*p-o*u*p,M=d*_*c-g*h*c+g*a*f-o*_*f-d*a*p+o*h*p,w=g*h*l-d*_*l-g*a*u+o*_*u+d*a*m-o*h*m,E=e*v+n*x+s*M+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(_*u*r-h*m*r-_*s*f+n*m*f+h*s*p-n*u*p)*A,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(h*l*r-a*u*r-h*s*c+n*u*c+a*s*f-n*l*f)*A,t[4]=x*A,t[5]=(d*m*r-g*u*r+g*s*f-e*m*f-d*s*p+e*u*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*u*r-d*l*r+d*s*c-e*u*c-o*s*f+e*l*f)*A,t[8]=M*A,t[9]=(g*h*r-d*_*r-g*n*f+e*_*f+d*n*p-e*h*p)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(d*a*r-o*h*r-d*n*c+e*h*c+o*n*f-e*a*f)*A,t[12]=w*A,t[13]=(d*_*s-g*h*s+g*n*u-e*_*u-d*n*m+e*h*m)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*h*s-d*a*s+d*n*l-e*h*l-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,h=a+a,u=r*c,f=r*d,g=r*h,_=o*d,m=o*h,p=a*h,v=l*c,x=l*d,M=l*h,w=n.x,E=n.y,A=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+M)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+x)*A,s[9]=(m-v)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ai.set(s[0],s[1],s[2]).length();const o=ai.set(s[4],s[5],s[6]).length(),a=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xe.copy(this);const c=1/r,d=1/o,h=1/a;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=d,Xe.elements[5]*=d,Xe.elements[6]*=d,Xe.elements[8]*=h,Xe.elements[9]*=h,Xe.elements[10]*=h,e.setFromRotationMatrix(Xe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(a===pn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===js)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pn){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(o-r),u=(e+t)*c,f=(n+s)*d;let g,_;if(a===pn)g=(o+r)*h,_=-2*h;else if(a===js)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new O,Xe=new ne,cu=new O(0,0,0),hu=new O(1,1,1),Tn=new O,Ms=new O,Ne=new O,Ra=new ne,La=new Fi;class je{constructor(t=0,e=0,n=0,s=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ra.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ra,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return La.setFromEuler(this),this.setFromQuaternion(La,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uu=0;const Pa=new O,li=new Fi,cn=new ne,Ss=new O,Yi=new O,du=new O,fu=new Fi,Da=new O(1,0,0),Ia=new O(0,1,0),Ua=new O(0,0,1),Na={type:"added"},pu={type:"removed"},ci={type:"childadded",child:null},Nr={type:"childremoved",child:null};class fe extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new O,e=new je,n=new Fi,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new It}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(Da,t)}rotateY(t){return this.rotateOnAxis(Ia,t)}rotateZ(t){return this.rotateOnAxis(Ua,t)}translateOnAxis(t,e){return Pa.copy(t).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Da,t)}translateY(t){return this.translateOnAxis(Ia,t)}translateZ(t){return this.translateOnAxis(Ua,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Yi,Ss,this.up):cn.lookAt(Ss,Yi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(cn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Na),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pu),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Na),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new O(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new O,hn=new O,Or=new O,un=new O,hi=new O,ui=new O,Oa=new O,Fr=new O,Br=new O,zr=new O;class en{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),hn.subVectors(n,e),Or.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(hn),l=Ye.dot(Or),c=hn.dot(hn),d=hn.dot(Or),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l)}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),hn.subVectors(t,e),Ye.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ye.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;hi.subVectors(s,n),ui.subVectors(r,n),Fr.subVectors(t,n);const l=hi.dot(Fr),c=ui.dot(Fr);if(l<=0&&c<=0)return e.copy(n);Br.subVectors(t,s);const d=hi.dot(Br),h=ui.dot(Br);if(d>=0&&h<=d)return e.copy(s);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(hi,o);zr.subVectors(t,r);const f=hi.dot(zr),g=ui.dot(zr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ui,a);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return Oa.subVectors(r,s),a=(h-d)/(h-d+(f-g)),e.copy(s).addScaledVector(Oa,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},ys={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Qh(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kr(o,r,t+1/3),this.g=kr(o,r,t),this.b=kr(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=rc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return qt.fromWorkingColorSpace(xe.copy(this),t),Math.round(Re(xe.r*255,0,255))*65536+Math.round(Re(xe.g*255,0,255))*256+Math.round(Re(xe.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,s=xe.g,r=xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Je){qt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,s=xe.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(ys);const n=Ar(An.h,ys.h,e),s=Ar(An.s,ys.s,e),r=Ar(An.l,ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new vt;vt.NAMES=rc;let mu=0;class Bi extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Ai,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jn extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new O,Es=new Gt;class ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ea,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return eu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),t}}class oc extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ac extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gu=0;const ze=new ne,Gr=new fe,di=new O,Oe=new ls,qi=new ls,he=new O;class Ke extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?ac:oc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Gr.lookAt(t),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(Oe.min,qi.min),Oe.expandByPoint(he),he.addVectors(Oe.max,qi.max),Oe.expandByPoint(he)):(Oe.expandByPoint(qi.min),Oe.expandByPoint(qi.max))}Oe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)he.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(he));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)he.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(t,c),he.add(di)),s=Math.max(s,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new O,l[L]=new O;const c=new O,d=new O,h=new O,u=new Gt,f=new Gt,g=new Gt,_=new O,m=new O;function p(L,y,S){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),d.sub(c),h.sub(c),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(I),a[L].add(_),a[y].add(_),a[S].add(_),l[L].add(m),l[y].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,y=v.length;L<y;++L){const S=v[L],I=S.start,z=S.count;for(let P=I,W=I+z;P<W;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const x=new O,M=new O,w=new O,E=new O;function A(L){w.fromBufferAttribute(s,L),E.copy(w);const y=a[L];x.copy(y),x.sub(w.multiplyScalar(w.dot(y))).normalize(),M.crossVectors(E,y);const I=M.dot(l[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,I)}for(let L=0,y=v.length;L<y;++L){const S=v[L],I=S.start,z=S.count;for(let P=I,W=I+z;P<W;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,d=new O,h=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new ae(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new ne,Bn=new sc,Ts=new bo,Ba=new O,fi=new O,pi=new O,mi=new O,Hr=new O,As=new O,bs=new Gt,ws=new Gt,Cs=new Gt,za=new O,ka=new O,Ga=new O,Rs=new O,Ls=new O;class be extends fe{constructor(t=new Ke,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(Hr.fromBufferAttribute(h,t),o?As.addScaledVector(Hr,d):As.addScaledVector(Hr.sub(e),d))}e.add(As)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(Ts.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Ts,Ba)===null||Bn.origin.distanceToSquared(Ba)>(t.far-t.near)**2))&&(Fa.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=x;M<w;M+=3){const E=a.getX(M),A=a.getX(M+1),L=a.getX(M+2);s=Ps(this,p,t,n,c,d,h,E,A,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=Ps(this,o,t,n,c,d,h,v,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=x;M<w;M+=3){const E=M,A=M+1,L=M+2;s=Ps(this,p,t,n,c,d,h,E,A,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,M=m+2;s=Ps(this,o,t,n,c,d,h,v,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _u(i,t,e,n,s,r,o,a){let l;if(t.side===Ie?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_n,a),l===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ls);return c<e.near||c>e.far?null:{distance:c,point:Ls.clone(),object:i}}function Ps(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fi),i.getVertexPosition(l,pi),i.getVertexPosition(c,mi);const d=_u(i,t,e,n,fi,pi,mi,Rs);if(d){s&&(bs.fromBufferAttribute(s,a),ws.fromBufferAttribute(s,l),Cs.fromBufferAttribute(s,c),d.uv=en.getInterpolation(Rs,fi,pi,mi,bs,ws,Cs,new Gt)),r&&(bs.fromBufferAttribute(r,a),ws.fromBufferAttribute(r,l),Cs.fromBufferAttribute(r,c),d.uv1=en.getInterpolation(Rs,fi,pi,mi,bs,ws,Cs,new Gt)),o&&(za.fromBufferAttribute(o,a),ka.fromBufferAttribute(o,l),Ga.fromBufferAttribute(o,c),d.normal=en.getInterpolation(Rs,fi,pi,mi,za,ka,Ga,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};en.getNormal(fi,pi,mi,h.normal),d.face=h}return d}class zi extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(h,2));function g(_,m,p,v,x,M,w,E,A,L,y){const S=M/A,I=w/L,z=M/2,P=w/2,W=E/2,X=A+1,Q=L+1;let et=0,H=0;const it=new O;for(let q=0;q<Q;q++){const dt=q*I-P;for(let Rt=0;Rt<X;Rt++){const _t=Rt*S-z;it[_]=_t*v,it[m]=dt*x,it[p]=W,c.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=E>0?1:-1,d.push(it.x,it.y,it.z),h.push(Rt/A),h.push(1-q/L),et+=1}}for(let q=0;q<L;q++)for(let dt=0;dt<A;dt++){const Rt=u+dt+X*q,_t=u+dt+X*(q+1),V=u+(dt+1)+X*(q+1),tt=u+(dt+1)+X*q;l.push(Rt,_t,tt),l.push(_t,V,tt),H+=6}a.addGroup(f,H,y),f+=H,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const s in n)t[s]=n[s]}return t}function xu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const cc={clone:Ii,merge:Ee};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=Mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=xu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hc extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new O,Ha=new Gt,Va=new Gt;class ke extends hc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,Ha,Va),e.subVectors(Va,Ha)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class Su extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(gi,_i,t,e);s.layers=this.layers,this.add(s);const r=new ke(gi,_i,t,e);r.layers=this.layers,this.add(r);const o=new ke(gi,_i,t,e);o.layers=this.layers,this.add(o);const a=new ke(gi,_i,t,e);a.layers=this.layers,this.add(a);const l=new ke(gi,_i,t,e);l.layers=this.layers,this.add(l);const c=new ke(gi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uc extends we{constructor(t,e,n,s,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yu extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ae}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zi(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:In});r.uniforms.tEquirect.value=e;const o=new be(s,r),a=e.minFilter;return e.minFilter===qe&&(e.minFilter=Ae),new Su(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Vr=new O,Eu=new O,Tu=new It;class Vn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vr.subVectors(n,e).cross(Eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tu.getNormalMatrix(t),s=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new bo,Ds=new O;class Co{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],h=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,u-c,m-f,M-p).normalize(),n[1].setComponents(l+r,u+c,m+f,M+p).normalize(),n[2].setComponents(l+o,u+d,m+g,M+v).normalize(),n[3].setComponents(l-o,u-d,m-g,M-v).normalize(),n[4].setComponents(l-a,u-h,m-_,M-x).normalize(),e===pn)n[5].setComponents(l+a,u+h,m+_,M+x).normalize();else if(e===js)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ds.x=s.normal.x>0?t.max.x:t.min.x,Ds.y=s.normal.y>0?t.max.y:t.min.y,Ds.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Au(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l._updateRange,u=l.updateRanges;if(i.bindBuffer(c,a),h.count===-1&&u.length===0&&i.bufferSubData(c,0,d),u.length!==0){for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class cs extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,h=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const v=p*u-o;for(let x=0;x<c;x++){const M=x*h-r;g.push(M,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,M=v+c*(p+1),w=v+1+c*(p+1),E=v+1+c*p;f.push(x,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ku=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ad=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ff=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,If=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:bu,alphahash_pars_fragment:wu,alphamap_fragment:Cu,alphamap_pars_fragment:Ru,alphatest_fragment:Lu,alphatest_pars_fragment:Pu,aomap_fragment:Du,aomap_pars_fragment:Iu,batching_pars_vertex:Uu,batching_vertex:Nu,begin_vertex:Ou,beginnormal_vertex:Fu,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:Yu,color_pars_vertex:qu,color_vertex:$u,common:ju,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ju,displacementmap_vertex:Qu,emissivemap_fragment:td,emissivemap_pars_fragment:ed,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:sd,envmap_common_pars_fragment:rd,envmap_pars_fragment:od,envmap_pars_vertex:ad,envmap_physical_pars_fragment:xd,envmap_vertex:ld,fog_vertex:cd,fog_pars_vertex:hd,fog_fragment:ud,fog_pars_fragment:dd,gradientmap_pars_fragment:fd,lightmap_pars_fragment:pd,lights_lambert_fragment:md,lights_lambert_pars_fragment:gd,lights_pars_begin:_d,lights_toon_fragment:vd,lights_toon_pars_fragment:Md,lights_phong_fragment:Sd,lights_phong_pars_fragment:yd,lights_physical_fragment:Ed,lights_physical_pars_fragment:Td,lights_fragment_begin:Ad,lights_fragment_maps:bd,lights_fragment_end:wd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Pd,map_fragment:Dd,map_pars_fragment:Id,map_particle_fragment:Ud,map_particle_pars_fragment:Nd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Fd,morphinstance_vertex:Bd,morphcolor_vertex:zd,morphnormal_vertex:kd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Hd,normal_fragment_begin:Vd,normal_fragment_maps:Wd,normal_pars_fragment:Xd,normal_pars_vertex:Yd,normal_vertex:qd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:Jd,opaque_fragment:Qd,packing:tf,premultiplied_alpha_fragment:ef,project_vertex:nf,dithering_fragment:sf,dithering_pars_fragment:rf,roughnessmap_fragment:of,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:cf,shadowmap_vertex:hf,shadowmask_pars_fragment:uf,skinbase_vertex:df,skinning_pars_vertex:ff,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:xf,tonemapping_pars_fragment:vf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:yf,uv_pars_vertex:Ef,uv_vertex:Tf,worldpos_vertex:Af,background_vert:bf,background_frag:wf,backgroundCube_vert:Cf,backgroundCube_frag:Rf,cube_vert:Lf,cube_frag:Pf,depth_vert:Df,depth_frag:If,distanceRGBA_vert:Uf,distanceRGBA_frag:Nf,equirect_vert:Of,equirect_frag:Ff,linedashed_vert:Bf,linedashed_frag:zf,meshbasic_vert:kf,meshbasic_frag:Gf,meshlambert_vert:Hf,meshlambert_frag:Vf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:Yf,meshnormal_frag:qf,meshphong_vert:$f,meshphong_frag:jf,meshphysical_vert:Kf,meshphysical_frag:Zf,meshtoon_vert:Jf,meshtoon_frag:Qf,points_vert:tp,points_frag:ep,shadow_vert:np,shadow_frag:ip,sprite_vert:sp,sprite_frag:rp},ot={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Qe={basic:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ee([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ee([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ee([ot.points,ot.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ee([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ee([ot.common,ot.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ee([ot.sprite,ot.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ee([ot.common,ot.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ee([ot.lights,ot.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Qe.physical={uniforms:Ee([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Is={r:0,b:0,g:0},kn=new je,op=new ne;function ap(i,t,e,n,s,r,o){const a=new vt(0);let l=r===!0?0:1,c,d,h=null,u=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const M=g(v);M===null?p(a,l):M&&M.isColor&&(p(M,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function m(v,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===hr)?(d===void 0&&(d=new be(new zi(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ii(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),kn.copy(x.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(op.makeRotationFromEuler(kn)),d.material.toneMapped=qt.getTransfer(M.colorSpace)!==Qt,(h!==M||u!==M.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new be(new cs(2,2),new xn({name:"BackgroundMaterial",uniforms:Ii(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qt.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(Is,lc(i)),n.buffers.color.setClear(Is.r,Is.g,Is.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(S,I,z,P,W){let X=!1;const Q=h(P,z,I);r!==Q&&(r=Q,c(r.object)),X=f(S,P,z,W),X&&g(S,P,z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(S,I,z,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function d(S){return i.deleteVertexArray(S)}function h(S,I,z){const P=z.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let X=W[I.id];X===void 0&&(X={},W[I.id]=X);let Q=X[P];return Q===void 0&&(Q=u(l()),X[P]=Q),Q}function u(S){const I=[],z=[],P=[];for(let W=0;W<e;W++)I[W]=0,z[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:P,object:S,attributes:{},index:null}}function f(S,I,z,P){const W=r.attributes,X=I.attributes;let Q=0;const et=z.getAttributes();for(const H in et)if(et[H].location>=0){const q=W[H];let dt=X[H];if(dt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),q===void 0||q.attribute!==dt||dt&&q.data!==dt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==P}function g(S,I,z,P){const W={},X=I.attributes;let Q=0;const et=z.getAttributes();for(const H in et)if(et[H].location>=0){let q=X[H];q===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const dt={};dt.attribute=q,q&&q.data&&(dt.data=q.data),W[H]=dt,Q++}r.attributes=W,r.attributesNum=Q,r.index=P}function _(){const S=r.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const z=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;z[S]=1,P[S]===0&&(i.enableVertexAttribArray(S),P[S]=1),W[S]!==I&&(i.vertexAttribDivisor(S,I),W[S]=I)}function v(){const S=r.newAttributes,I=r.enabledAttributes;for(let z=0,P=I.length;z<P;z++)I[z]!==S[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function x(S,I,z,P,W,X,Q){Q===!0?i.vertexAttribIPointer(S,I,z,W,X):i.vertexAttribPointer(S,I,z,P,W,X)}function M(S,I,z,P){_();const W=P.attributes,X=z.getAttributes(),Q=I.defaultAttributeValues;for(const et in X){const H=X[et];if(H.location>=0){let it=W[et];if(it===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const q=it.normalized,dt=it.itemSize,Rt=t.get(it);if(Rt===void 0)continue;const _t=Rt.buffer,V=Rt.type,tt=Rt.bytesPerElement,ft=V===i.INT||V===i.UNSIGNED_INT||it.gpuType===$l;if(it.isInterleavedBufferAttribute){const rt=it.data,At=rt.stride,wt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let U=0;U<H.locationSize;U++)p(H.location+U,rt.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let U=0;U<H.locationSize;U++)m(H.location+U);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let U=0;U<H.locationSize;U++)x(H.location+U,dt/H.locationSize,V,q,At*tt,(wt+dt/H.locationSize*U)*tt,ft)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt,it.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let rt=0;rt<H.locationSize;rt++)x(H.location+rt,dt/H.locationSize,V,q,dt*tt,dt/H.locationSize*rt*tt,ft)}}else if(Q!==void 0){const q=Q[et];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(H.location,q);break;case 3:i.vertexAttrib3fv(H.location,q);break;case 4:i.vertexAttrib4fv(H.location,q);break;default:i.vertexAttrib1fv(H.location,q)}}}}v()}function w(){L();for(const S in n){const I=n[S];for(const z in I){const P=I[z];for(const W in P)d(P[W].object),delete P[W];delete I[z]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const z in I){const P=I[z];for(const W in P)d(P[W].object),delete P[W];delete I[z]}delete n[S.id]}function A(S){for(const I in n){const z=n[I];if(z[S.id]===void 0)continue;const P=z[S.id];for(const W in P)d(P[W].object),delete P[W];delete z[S.id]}}function L(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function cp(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function a(c,d,h){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<h;f++)this.render(c[f],d[f]);else{u.multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let g=0;g<h;g++)f+=d[g];e.update(f,n,1)}}function l(c,d,h,u){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Pe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ln&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:M,maxSamples:w}}function up(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Vn,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const v=r?0:n,x=v*4;let M=p.clippingState||null;l.value=M,M=d(g,u,x,f);for(let w=0;w!==x;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function dp(i){let t=new WeakMap;function e(o,a){return a===ro?o.mapping=Li:a===oo&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ro||a===oo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yu(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class fc extends hc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,Wa=[.125,.215,.35,.446,.526,.582],qn=20,Wr=new fc,Xa=new vt;let Xr=null,Yr=0,qr=0,$r=!1;const Wn=(1+Math.sqrt(5))/2,xi=1/Wn,Ya=[new O(-Wn,xi,0),new O(Wn,xi,0),new O(-xi,0,Wn),new O(xi,0,Wn),new O(0,Wn,-xi),new O(0,Wn,xi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,Yr,qr),this._renderer.xr.enabled=$r,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:ur,format:Pe,colorSpace:vn,depthBuffer:!1},s=$a(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$a(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fp(r)),this._blurMaterial=pp(r,t,e)}return s}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,s){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Xa),d.toneMapping=gn,d.autoClear=!1;const f=new jn({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new be(new zi,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Xa),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Us(s,v*x,p>2?x:0,x,x),d.setRenderTarget(s),_&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Li||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ya[(s-r-1)%Ya.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new be(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qn-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const p=[];let v=0;for(let A=0;A<qn;++A){const L=A/_,y=Math.exp(-L*L/2);p.push(y),A===0?v+=y:A<m&&(v+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const M=this._sizeLods[s],w=3*M*(s>x-Ei?s-x+Ei:0),E=4*(this._cubeSize-M);Us(e,w,E,3*M,2*M),l.setRenderTarget(e),l.render(h,Wr)}}function fp(i){const t=[],e=[],n=[];let s=i;const r=i-Ei+1+Wa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ei?l=Wa[o-i+Ei-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,L=E>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];v.set(y,_*g*E),x.set(u,m*g*E);const S=[E,E,E,E,E,E];M.set(S,p*g*E)}const w=new Ke;w.setAttribute("position",new ae(v,_)),w.setAttribute("uv",new ae(x,m)),w.setAttribute("faceIndex",new ae(M,p)),t.push(w),s>Ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $a(i,t,e){const n=new Qn(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pp(i,t,e){const n=new Float32Array(qn),s=new O(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ja(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ka(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ro||l===oo,d=l===Li||l===Pi;if(c||d){let h=t.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new qa(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&s(f)?(e===null&&(e=new qa(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _p(i,t,e,n){const s={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){const w=v[x+0],E=v[x+1],A=v[x+2];u.push(w,E,E,A,A,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const w=x+0,E=x+1,A=x+2;u.push(w,E,E,A,A,w)}}else return;const m=new(ec(u)?ac:oc)(u,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function xp(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function d(u,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(u[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}}function h(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v];for(let v=0;v<_.length;v++)e.update(p,n,_[v])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function vp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mp(i,t,e){const n=new WeakMap,s=new ue;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let w=a.attributes.position.count*M,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const A=new Float32Array(w*E*4*h),L=new ic(A,w,E,h);L.type=Ln,L.needsUpdate=!0;const y=M*4;for(let I=0;I<h;I++){const z=p[I],P=v[I],W=x[I],X=w*E*4*I;for(let Q=0;Q<z.count;Q++){const et=Q*y;g===!0&&(s.fromBufferAttribute(z,Q),A[X+et+0]=s.x,A[X+et+1]=s.y,A[X+et+2]=s.z,A[X+et+3]=0),_===!0&&(s.fromBufferAttribute(P,Q),A[X+et+4]=s.x,A[X+et+5]=s.y,A[X+et+6]=s.z,A[X+et+7]=0),m===!0&&(s.fromBufferAttribute(W,Q),A[X+et+8]=s.x,A[X+et+9]=s.y,A[X+et+10]=s.z,A[X+et+11]=W.itemSize===4?s.w:1)}}u={count:h,texture:L,size:new Gt(w,E)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class pc extends we{constructor(t,e,n,s,r,o,a,l,c,d){if(d=d!==void 0?d:bi,d!==bi&&d!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===bi&&(n=Di),n===void 0&&d===ns&&(n=os),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mc=new we,gc=new pc(1,1);gc.compareFunction=tc;const _c=new ic,xc=new au,vc=new uc,Za=[],Ja=[],Qa=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Za[s];if(r===void 0&&(r=new Float32Array(s),Za[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fr(i,t){let e=Ja[t];e===void 0&&(e=new Int32Array(t),Ja[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),ce(e,n)}}function wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;tl.set(n),i.uniformMatrix3fv(this.addr,!1,tl),ce(e,n)}}function Cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Qa.set(n),i.uniformMatrix4fv(this.addr,!1,Qa),ce(e,n)}}function Rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function Ip(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function Fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?gc:mc;e.setTexture2D(t||r,s)}function Bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xc,s)}function zp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vc,s)}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_c,s)}function Gp(i){switch(i){case 5126:return yp;case 35664:return Ep;case 35665:return Tp;case 35666:return Ap;case 35674:return bp;case 35675:return wp;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Lp;case 35668:case 35672:return Pp;case 35669:case 35673:return Dp;case 5125:return Ip;case 36294:return Up;case 36295:return Np;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}function Hp(i,t){i.uniform1fv(this.addr,t)}function Vp(i,t){const e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Wp(i,t){const e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function Xp(i,t){const e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Yp(i,t){const e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qp(i,t){const e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $p(i,t){const e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jp(i,t){i.uniform1iv(this.addr,t)}function Kp(i,t){i.uniform2iv(this.addr,t)}function Zp(i,t){i.uniform3iv(this.addr,t)}function Jp(i,t){i.uniform4iv(this.addr,t)}function Qp(i,t){i.uniform1uiv(this.addr,t)}function tm(i,t){i.uniform2uiv(this.addr,t)}function em(i,t){i.uniform3uiv(this.addr,t)}function nm(i,t){i.uniform4uiv(this.addr,t)}function im(i,t,e){const n=this.cache,s=t.length,r=fr(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||mc,r[o])}function sm(i,t,e){const n=this.cache,s=t.length,r=fr(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xc,r[o])}function rm(i,t,e){const n=this.cache,s=t.length,r=fr(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vc,r[o])}function om(i,t,e){const n=this.cache,s=t.length,r=fr(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_c,r[o])}function am(i){switch(i){case 5126:return Hp;case 35664:return Vp;case 35665:return Wp;case 35666:return Xp;case 35674:return Yp;case 35675:return qp;case 35676:return $p;case 5124:case 35670:return jp;case 35667:case 35671:return Kp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return om}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gp(e.type)}}class cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=am(e.type)}}class hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function nl(i,t){i.seq.push(t),i.map[t.id]=t}function um(i,t,e){const n=i.name,s=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),o=jr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nl(e,c===void 0?new lm(a,i,t):new cm(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new hm(a),nl(e,h)),e=h}}}class zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);um(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dm=37297;let fm=0;function pm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function mm(i){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i);let n;switch(t===e?n="":t===$s&&e===qs?n="LinearDisplayP3ToLinearSRGB":t===qs&&e===$s&&(n="LinearSRGBToLinearDisplayP3"),i){case vn:case dr:return[n,"LinearTransferOETF"];case Je:case Ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+pm(i.getShaderSource(t),o)}else return s}function gm(i,t){const e=mm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _m(i,t){let e;switch(t){case Ah:e="Linear";break;case bh:e="Reinhard";break;case wh:e="OptimizedCineon";break;case Ch:e="ACESFilmic";break;case Lh:e="AgX";break;case Ph:e="Neutral";break;case Rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function vm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qi(i){return i!==""}function rl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(Sm,Em)}const ym=new Map;function Em(i,t){let e=Ot[t];if(e===void 0){const n=ym.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(i){return i.replace(Tm,Am)}function Am(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function wm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Pi:t="ENVMAP_TYPE_CUBE";break;case hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Rm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cr:t="ENVMAP_BLENDING_MULTIPLY";break;case Eh:t="ENVMAP_BLENDING_MIX";break;case Th:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bm(e),c=wm(e),d=Cm(e),h=Rm(e),u=Lm(e),f=xm(e),g=vm(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),p.length>0&&(p+=`
`)):(m=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),p=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==gn?_m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,gm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),o=co(o),o=rl(o,e),o=ol(o,e),a=co(a),a=rl(a,e),a=ol(a,e),o=al(o),a=al(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,M=v+p+a,w=il(s,s.VERTEX_SHADER,x),E=il(s,s.FRAGMENT_SHADER,M);s.attachShader(_,w),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(w).trim(),W=s.getShaderInfoLog(E).trim();let X=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,E);else{const et=sl(s,w,"vertex"),H=sl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+et+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(P===""||W==="")&&(Q=!1);Q&&(I.diagnostics={runnable:X,programLog:z,vertexShader:{log:P,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(E),L=new zs(s,_),y=Mm(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,dm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let Dm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Um(t),e.set(t,n)),n}}class Um{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}}function Nm(i,t,e,n,s,r,o){const a=new wo,l=new Im,c=new Set,d=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,I,z,P){const W=z.fog,X=P.geometry,Q=y.isMeshStandardMaterial?z.environment:null,et=(y.isMeshStandardMaterial?e:t).get(y.envMap||Q),H=et&&et.mapping===hr?et.image.height:null,it=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=q!==void 0?q.length:0;let Rt=0;X.morphAttributes.position!==void 0&&(Rt=1),X.morphAttributes.normal!==void 0&&(Rt=2),X.morphAttributes.color!==void 0&&(Rt=3);let _t,V,tt,ft;if(it){const Yt=Qe[it];_t=Yt.vertexShader,V=Yt.fragmentShader}else _t=y.vertexShader,V=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),ft=l.getFragmentShaderID(y);const rt=i.getRenderTarget(),At=P.isInstancedMesh===!0,wt=P.isBatchedMesh===!0,U=!!y.map,Mt=!!y.matcap,nt=!!et,Ct=!!y.aoMap,St=!!y.lightMap,Ut=!!y.bumpMap,bt=!!y.normalMap,kt=!!y.displacementMap,te=!!y.emissiveMap,R=!!y.metalnessMap,T=!!y.roughnessMap,G=y.anisotropy>0,j=y.clearcoat>0,Z=y.dispersion>0,J=y.iridescence>0,xt=y.sheen>0,lt=y.transmission>0,at=G&&!!y.anisotropyMap,Dt=j&&!!y.clearcoatMap,st=j&&!!y.clearcoatNormalMap,yt=j&&!!y.clearcoatRoughnessMap,Vt=J&&!!y.iridescenceMap,Et=J&&!!y.iridescenceThicknessMap,pt=xt&&!!y.sheenColorMap,Ft=xt&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,se=!!y.specularColorMap,Bt=!!y.specularIntensityMap,D=lt&&!!y.transmissionMap,K=lt&&!!y.thicknessMap,$=!!y.gradientMap,ct=!!y.alphaMap,ut=y.alphaTest>0,Wt=!!y.alphaHash,Jt=!!y.extensions;let ie=gn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ie=i.toneMapping);const pe={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:_t,fragmentShader:V,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:wt,instancing:At,instancingColor:At&&P.instanceColor!==null,instancingMorph:At&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:vn,alphaToCoverage:!!y.alphaToCoverage,map:U,matcap:Mt,envMap:nt,envMapMode:nt&&et.mapping,envMapCubeUVHeight:H,aoMap:Ct,lightMap:St,bumpMap:Ut,normalMap:bt,displacementMap:u&&kt,emissiveMap:te,normalMapObjectSpace:bt&&y.normalMapType===Xh,normalMapTangentSpace:bt&&y.normalMapType===To,metalnessMap:R,roughnessMap:T,anisotropy:G,anisotropyMap:at,clearcoat:j,clearcoatMap:Dt,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:Z,iridescence:J,iridescenceMap:Vt,iridescenceThicknessMap:Et,sheen:xt,sheenColorMap:pt,sheenRoughnessMap:Ft,specularMap:Ht,specularColorMap:se,specularIntensityMap:Bt,transmission:lt,transmissionMap:D,thicknessMap:K,gradientMap:$,opaque:y.transparent===!1&&y.blending===Ai&&y.alphaToCoverage===!1,alphaMap:ct,alphaTest:ut,alphaHash:Wt,combine:y.combine,mapUv:U&&_(y.map.channel),aoMapUv:Ct&&_(y.aoMap.channel),lightMapUv:St&&_(y.lightMap.channel),bumpMapUv:Ut&&_(y.bumpMap.channel),normalMapUv:bt&&_(y.normalMap.channel),displacementMapUv:kt&&_(y.displacementMap.channel),emissiveMapUv:te&&_(y.emissiveMap.channel),metalnessMapUv:R&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:at&&_(y.anisotropyMap.channel),clearcoatMapUv:Dt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(y.sheenRoughnessMap.channel),specularMapUv:Ht&&_(y.specularMap.channel),specularColorMapUv:se&&_(y.specularColorMap.channel),specularIntensityMapUv:Bt&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:K&&_(y.thicknessMap.channel),alphaMapUv:ct&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(bt||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(U||ct),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,useLegacyLights:i._useLegacyLights,decodeVideoTexture:U&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ve,flipSided:y.side===Ie,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Jt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Jt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(v(S,y),x(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function M(y){const S=g[y.type];let I;if(S){const z=Qe[S];I=cc.clone(z.uniforms)}else I=y.uniforms;return I}function w(y,S){let I;for(let z=0,P=d.length;z<P;z++){const W=d[z];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new Pm(i,S,y,r),d.push(I)),I}function E(y){if(--y.usedTimes===0){const S=d.indexOf(y);d[S]=d[d.length-1],d.pop(),y.destroy()}}function A(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:d,dispose:L}}function Om(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Fm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,u,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,u){e.length>1&&e.sort(h||Fm),n.length>1&&n.sort(u||cl),s.length>1&&s.sort(u||cl)}function d(){for(let h=t,u=i.length;h<u;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function Bm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new hl,i.set(n,[o])):s>=r.length?(o=new hl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new vt};break;case"SpotLight":e={position:new O,direction:new O,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function km(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gm=0;function Hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vm(i){const t=new zm,e=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new ne,o=new ne;function a(c,d){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let g=0,_=0,m=0,p=0,v=0,x=0,M=0,w=0,E=0,A=0,L=0;c.sort(Hm);const y=d===!0?Math.PI:1;for(let I=0,z=c.length;I<z;I++){const P=c[I],W=P.color,X=P.intensity,Q=P.distance,et=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*X*y,u+=W.g*X*y,f+=W.b*X*y;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],X);L++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const it=P.shadow,q=e.get(P);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=P.shadow.matrix,x++}n.directional[g]=H,g++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(W).multiplyScalar(X*y),H.distance=Q,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[m]=H;const it=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,it.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[m]=it.matrix,P.castShadow){const q=e.get(P);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,n.spotShadow[m]=q,n.spotShadowMap[m]=et,w++}m++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(W).multiplyScalar(X),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=H,p++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),H.distance=P.distance,H.decay=P.decay,P.castShadow){const it=P.shadow,q=e.get(P);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,q.shadowCameraNear=it.camera.near,q.shadowCameraFar=it.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=et,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=H,_++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(X*y),H.groundColor.copy(P.groundColor).multiplyScalar(X*y),n.hemi[v]=H,v++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==g||S.pointLength!==_||S.spotLength!==m||S.rectAreaLength!==p||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==M||S.numSpotShadows!==w||S.numSpotMaps!==E||S.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=_,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,S.directionalLength=g,S.pointLength=_,S.spotLength=m,S.rectAreaLength=p,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=M,S.numSpotShadows=w,S.numSpotMaps=E,S.numLightProbes=L,n.version=Gm++)}function l(c,d){let h=0,u=0,f=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ul(i){const t=new Vm(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(d){t.setup(e,d)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ul(i),t.set(s,[a])):r>=o.length?(a=new ul(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xm extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ym extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jm(i,t,e){let n=new Co;const s=new Gt,r=new Gt,o=new ue,a=new Xm({depthPacking:Wh}),l=new Ym,c={},d=e.maxTextureSize,h={[_n]:Ie,[Ie]:_n,[ve]:ve},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:qm,fragmentShader:$m}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let p=this.type;this.render=function(E,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(In),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const P=p!==dn&&this.type===dn,W=p===dn&&this.type!==dn;for(let X=0,Q=E.length;X<Q;X++){const et=E[X],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||P===!0||W===!0){const dt=this.type!==dn?{minFilter:Le,magFilter:Le}:{};H.map!==null&&H.map.dispose(),H.map=new Qn(s.x,s.y,dt),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const q=H.getViewportCount();for(let dt=0;dt<q;dt++){const Rt=H.getViewport(dt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(o),H.updateMatrices(et,dt),n=H.getFrustum(),M(A,L,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===dn&&v(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,I)};function v(E,A){const L=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qn(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,L,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,L,f,_,null)}function x(E,A,L,y){let S=null;const I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,P=A.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let X=W[P];X===void 0&&(X=S.clone(),W[P]=X,A.addEventListener("dispose",w)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,y===dn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=L}return S}function M(E,A,L,y,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===dn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const P=t.update(E),W=E.material;if(Array.isArray(W)){const X=P.groups;for(let Q=0,et=X.length;Q<et;Q++){const H=X[Q],it=W[H.materialIndex];if(it&&it.visible){const q=x(E,it,y,S);E.onBeforeShadow(i,E,A,L,P,q,H),i.renderBufferDirect(L,null,P,q,E,H),E.onAfterShadow(i,E,A,L,P,q,H)}}}else if(W.visible){const X=x(E,W,y,S);E.onBeforeShadow(i,E,A,L,P,X,null),i.renderBufferDirect(L,null,P,X,E,null),E.onAfterShadow(i,E,A,L,P,X,null)}}const z=E.children;for(let P=0,W=z.length;P<W;P++)M(z[P],A,L,y,S)}function w(E){E.target.removeEventListener("dispose",w);for(const L in c){const y=c[L],S=E.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function Km(i){function t(){let D=!1;const K=new ue;let $=null;const ct=new ue(0,0,0,0);return{setMask:function(ut){$!==ut&&!D&&(i.colorMask(ut,ut,ut,ut),$=ut)},setLocked:function(ut){D=ut},setClear:function(ut,Wt,Jt,ie,pe){pe===!0&&(ut*=ie,Wt*=ie,Jt*=ie),K.set(ut,Wt,Jt,ie),ct.equals(K)===!1&&(i.clearColor(ut,Wt,Jt,ie),ct.copy(K))},reset:function(){D=!1,$=null,ct.set(-1,0,0,0)}}}function e(){let D=!1,K=null,$=null,ct=null;return{setTest:function(ut){ut?ft(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(ut){K!==ut&&!D&&(i.depthMask(ut),K=ut)},setFunc:function(ut){if($!==ut){switch(ut){case gh:i.depthFunc(i.NEVER);break;case _h:i.depthFunc(i.ALWAYS);break;case xh:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case vh:i.depthFunc(i.EQUAL);break;case Mh:i.depthFunc(i.GEQUAL);break;case Sh:i.depthFunc(i.GREATER);break;case yh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ct!==ut&&(i.clearDepth(ut),ct=ut)},reset:function(){D=!1,K=null,$=null,ct=null}}}function n(){let D=!1,K=null,$=null,ct=null,ut=null,Wt=null,Jt=null,ie=null,pe=null;return{setTest:function(Yt){D||(Yt?ft(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Yt){K!==Yt&&!D&&(i.stencilMask(Yt),K=Yt)},setFunc:function(Yt,Ze,Se){($!==Yt||ct!==Ze||ut!==Se)&&(i.stencilFunc(Yt,Ze,Se),$=Yt,ct=Ze,ut=Se)},setOp:function(Yt,Ze,Se){(Wt!==Yt||Jt!==Ze||ie!==Se)&&(i.stencilOp(Yt,Ze,Se),Wt=Yt,Jt=Ze,ie=Se)},setLocked:function(Yt){D=Yt},setClear:function(Yt){pe!==Yt&&(i.clearStencil(Yt),pe=Yt)},reset:function(){D=!1,K=null,$=null,ct=null,ut=null,Wt=null,Jt=null,ie=null,pe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,u=[],f=null,g=!1,_=null,m=null,p=null,v=null,x=null,M=null,w=null,E=new vt(0,0,0),A=0,L=!1,y=null,S=null,I=null,z=null,P=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(et)[1]),X=Q>=1):et.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),X=Q>=2);let H=null,it={};const q=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Rt=new ue().fromArray(q),_t=new ue().fromArray(dt);function V(D,K,$,ct){const ut=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(D,Wt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<$;Jt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(K+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return Wt}const tt={};tt[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),r.setFunc(Xs),Ut(!1),bt(qo),ft(i.CULL_FACE),Ct(In);function ft(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function rt(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function At(D,K){return d[D]!==K?(i.bindFramebuffer(D,K),d[D]=K,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function wt(D,K){let $=u,ct=!1;if(D){$=h.get(K),$===void 0&&($=[],h.set(K,$));const ut=D.textures;if($.length!==ut.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,Jt=ut.length;Wt<Jt;Wt++)$[Wt]=i.COLOR_ATTACHMENT0+Wt;$.length=ut.length,ct=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ct=!0);ct&&i.drawBuffers($)}function U(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const Mt={[Yn]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[th]:i.FUNC_REVERSE_SUBTRACT};Mt[eh]=i.MIN,Mt[nh]=i.MAX;const nt={[ih]:i.ZERO,[sh]:i.ONE,[rh]:i.SRC_COLOR,[io]:i.SRC_ALPHA,[uh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[ah]:i.DST_ALPHA,[oh]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[lh]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[ph]:i.CONSTANT_ALPHA,[mh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(D,K,$,ct,ut,Wt,Jt,ie,pe,Yt){if(D===In){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),D!==Jc){if(D!==_||Yt!==L){if((m!==Yn||x!==Yn)&&(i.blendEquation(i.FUNC_ADD),m=Yn,x=Yn),Yt)switch(D){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ws:i.blendFunc(i.ONE,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ws:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,v=null,M=null,w=null,E.set(0,0,0),A=0,_=D,L=Yt}return}ut=ut||K,Wt=Wt||$,Jt=Jt||ct,(K!==m||ut!==x)&&(i.blendEquationSeparate(Mt[K],Mt[ut]),m=K,x=ut),($!==p||ct!==v||Wt!==M||Jt!==w)&&(i.blendFuncSeparate(nt[$],nt[ct],nt[Wt],nt[Jt]),p=$,v=ct,M=Wt,w=Jt),(ie.equals(E)===!1||pe!==A)&&(i.blendColor(ie.r,ie.g,ie.b,pe),E.copy(ie),A=pe),_=D,L=!1}function St(D,K){D.side===ve?rt(i.CULL_FACE):ft(i.CULL_FACE);let $=D.side===Ie;K&&($=!$),Ut($),D.blending===Ai&&D.transparent===!1?Ct(In):Ct(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const ct=D.stencilWrite;o.setTest(ct),ct&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function bt(D){D!==$c?(ft(i.CULL_FACE),D!==S&&(D===qo?i.cullFace(i.BACK):D===jc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),S=D}function kt(D){D!==I&&(X&&i.lineWidth(D),I=D)}function te(D,K,$){D?(ft(i.POLYGON_OFFSET_FILL),(z!==K||P!==$)&&(i.polygonOffset(K,$),z=K,P=$)):rt(i.POLYGON_OFFSET_FILL)}function R(D){D?ft(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+W-1),H!==D&&(i.activeTexture(D),H=D)}function G(D,K,$){$===void 0&&(H===null?$=i.TEXTURE0+W-1:$=H);let ct=it[$];ct===void 0&&(ct={type:void 0,texture:void 0},it[$]=ct),(ct.type!==D||ct.texture!==K)&&(H!==$&&(i.activeTexture($),H=$),i.bindTexture(D,K||tt[D]),ct.type=D,ct.texture=K)}function j(){const D=it[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(D){Rt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Rt.copy(D))}function Ft(D){_t.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),_t.copy(D))}function Ht(D,K){let $=l.get(K);$===void 0&&($=new WeakMap,l.set(K,$));let ct=$.get(D);ct===void 0&&(ct=i.getUniformBlockIndex(K,D.name),$.set(D,ct))}function se(D,K){const ct=l.get(K).get(D);a.get(K)!==ct&&(i.uniformBlockBinding(K,ct,D.__bindingPointIndex),a.set(K,ct))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,it={},d={},h=new WeakMap,u=[],f=null,g=!1,_=null,m=null,p=null,v=null,x=null,M=null,w=null,E=new vt(0,0,0),A=0,L=!1,y=null,S=null,I=null,z=null,P=null,Rt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ft,disable:rt,bindFramebuffer:At,drawBuffers:wt,useProgram:U,setBlending:Ct,setMaterial:St,setFlipSided:Ut,setCullFace:bt,setLineWidth:kt,setPolygonOffset:te,setScissorTest:R,activeTexture:T,bindTexture:G,unbindTexture:j,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:Vt,texImage3D:Et,updateUBOMapping:Ht,uniformBlockBinding:se,texStorage2D:st,texStorage3D:yt,texSubImage2D:xt,texSubImage3D:lt,compressedTexSubImage2D:at,compressedTexSubImage3D:Dt,scissor:pt,viewport:Ft,reset:Bt}}function Zm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return f?new OffscreenCanvas(R,T):Ks("canvas")}function _(R,T,G){let j=1;const Z=te(R);if((Z.width>G||Z.height>G)&&(j=G/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(j*Z.width),xt=Math.floor(j*Z.height);h===void 0&&(h=g(J,xt));const lt=T?g(J,xt):h;return lt.width=J,lt.height=xt,lt.getContext("2d").drawImage(R,0,0,J,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+xt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Le&&R.minFilter!==Ae}function p(R){i.generateMipmap(R)}function v(R,T,G,j,Z=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=T;if(T===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),T===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),T===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),T===i.RGBA){const xt=Z?Ys:qt.getTransfer(j);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=xt===Qt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Le&&R.minFilter!==Ae?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function M(R){const T=R.target;T.removeEventListener("dispose",M),E(T),T.isVideoTexture&&d.delete(T)}function w(R){const T=R.target;T.removeEventListener("dispose",w),L(T)}function E(R){const T=n.get(R);if(T.__webglInit===void 0)return;const G=R.source,j=u.get(G);if(j){const Z=j[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(R),Object.keys(j).length===0&&u.delete(G)}n.remove(R)}function A(R){const T=n.get(R);i.deleteTexture(T.__webglTexture);const G=R.source,j=u.get(G);delete j[T.__cacheKey],o.memory.textures--}function L(R){const T=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let Z=0;Z<T.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)i.deleteFramebuffer(T.__webglFramebuffer[j]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=R.textures;for(let j=0,Z=G.length;j<Z;j++){const J=n.get(G[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(R)}let y=0;function S(){y=0}function I(){const R=y;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),y+=1,R}function z(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function P(R,T){const G=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(G,R,T);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function W(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Rt(G,R,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function X(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Rt(G,R,T);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function Q(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){_t(G,R,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const et={[fn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},H={[Le]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[qe]:i.LINEAR_MIPMAP_LINEAR},it={[Yh]:i.NEVER,[Jh]:i.ALWAYS,[qh]:i.LESS,[tc]:i.LEQUAL,[$h]:i.EQUAL,[Zh]:i.GEQUAL,[jh]:i.GREATER,[Kh]:i.NOTEQUAL};function q(R,T){if(T.type===Ln&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ae||T.magFilter===xr||T.magFilter===fs||T.magFilter===qe||T.minFilter===Ae||T.minFilter===xr||T.minFilter===fs||T.minFilter===qe)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,H[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,H[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Le||T.minFilter!==fs&&T.minFilter!==qe||T.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function dt(R,T){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",M));const j=T.source;let Z=u.get(j);Z===void 0&&(Z={},u.set(j,Z));const J=z(T);if(J!==R.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Z[J].usedTimes++;const xt=Z[R.__cacheKey];xt!==void 0&&(Z[R.__cacheKey].usedTimes--,xt.usedTimes===0&&A(T)),R.__cacheKey=J,R.__webglTexture=Z[J].texture}return G}function Rt(R,T,G){let j=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=i.TEXTURE_3D);const Z=dt(R,T),J=T.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+G);const xt=n.get(J);if(J.version!==xt.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);const lt=qt.getPrimaries(qt.workingColorSpace),at=T.colorSpace===Rn?null:qt.getPrimaries(T.colorSpace),Dt=T.colorSpace===Rn||lt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let st=_(T.image,!1,s.maxTextureSize);st=kt(T,st);const yt=r.convert(T.format,T.colorSpace),Vt=r.convert(T.type);let Et=v(T.internalFormat,yt,Vt,T.colorSpace,T.isVideoTexture);q(j,T);let pt;const Ft=T.mipmaps,Ht=T.isVideoTexture!==!0,se=xt.__version===void 0||Z===!0,Bt=J.dataReady,D=x(T,st);if(T.isDepthTexture)Et=i.DEPTH_COMPONENT16,T.type===Ln?Et=i.DEPTH_COMPONENT32F:T.type===Di?Et=i.DEPTH_COMPONENT24:T.type===os&&(Et=i.DEPTH24_STENCIL8),se&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Et,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Et,st.width,st.height,0,yt,Vt,null));else if(T.isDataTexture)if(Ft.length>0){Ht&&se&&e.texStorage2D(i.TEXTURE_2D,D,Et,Ft[0].width,Ft[0].height);for(let K=0,$=Ft.length;K<$;K++)pt=Ft[K],Ht?Bt&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,yt,Vt,pt.data):e.texImage2D(i.TEXTURE_2D,K,Et,pt.width,pt.height,0,yt,Vt,pt.data);T.generateMipmaps=!1}else Ht?(se&&e.texStorage2D(i.TEXTURE_2D,D,Et,st.width,st.height),Bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,yt,Vt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Et,st.width,st.height,0,yt,Vt,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ht&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,Et,Ft[0].width,Ft[0].height,st.depth);for(let K=0,$=Ft.length;K<$;K++)pt=Ft[K],T.format!==Pe?yt!==null?Ht?Bt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,st.depth,yt,pt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Et,pt.width,pt.height,st.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,st.depth,yt,Vt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Et,pt.width,pt.height,st.depth,0,yt,Vt,pt.data)}else{Ht&&se&&e.texStorage2D(i.TEXTURE_2D,D,Et,Ft[0].width,Ft[0].height);for(let K=0,$=Ft.length;K<$;K++)pt=Ft[K],T.format!==Pe?yt!==null?Ht?Bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,yt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Bt&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,yt,Vt,pt.data):e.texImage2D(i.TEXTURE_2D,K,Et,pt.width,pt.height,0,yt,Vt,pt.data)}else if(T.isDataArrayTexture)Ht?(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,Et,st.width,st.height,st.depth),Bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,yt,Vt,st.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,st.width,st.height,st.depth,0,yt,Vt,st.data);else if(T.isData3DTexture)Ht?(se&&e.texStorage3D(i.TEXTURE_3D,D,Et,st.width,st.height,st.depth),Bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,yt,Vt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Et,st.width,st.height,st.depth,0,yt,Vt,st.data);else if(T.isFramebufferTexture){if(se)if(Ht)e.texStorage2D(i.TEXTURE_2D,D,Et,st.width,st.height);else{let K=st.width,$=st.height;for(let ct=0;ct<D;ct++)e.texImage2D(i.TEXTURE_2D,ct,Et,K,$,0,yt,Vt,null),K>>=1,$>>=1}}else if(Ft.length>0){if(Ht&&se){const K=te(Ft[0]);e.texStorage2D(i.TEXTURE_2D,D,Et,K.width,K.height)}for(let K=0,$=Ft.length;K<$;K++)pt=Ft[K],Ht?Bt&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,yt,Vt,pt):e.texImage2D(i.TEXTURE_2D,K,Et,yt,Vt,pt);T.generateMipmaps=!1}else if(Ht){if(se){const K=te(st);e.texStorage2D(i.TEXTURE_2D,D,Et,K.width,K.height)}Bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Vt,st)}else e.texImage2D(i.TEXTURE_2D,0,Et,yt,Vt,st);m(T)&&p(j),xt.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function _t(R,T,G){if(T.image.length!==6)return;const j=dt(R,T),Z=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const J=n.get(Z);if(Z.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+G);const xt=qt.getPrimaries(qt.workingColorSpace),lt=T.colorSpace===Rn?null:qt.getPrimaries(T.colorSpace),at=T.colorSpace===Rn||xt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Dt=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,yt=[];for(let $=0;$<6;$++)!Dt&&!st?yt[$]=_(T.image[$],!0,s.maxCubemapSize):yt[$]=st?T.image[$].image:T.image[$],yt[$]=kt(T,yt[$]);const Vt=yt[0],Et=r.convert(T.format,T.colorSpace),pt=r.convert(T.type),Ft=v(T.internalFormat,Et,pt,T.colorSpace),Ht=T.isVideoTexture!==!0,se=J.__version===void 0||j===!0,Bt=Z.dataReady;let D=x(T,Vt);q(i.TEXTURE_CUBE_MAP,T);let K;if(Dt){Ht&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ft,Vt.width,Vt.height);for(let $=0;$<6;$++){K=yt[$].mipmaps;for(let ct=0;ct<K.length;ct++){const ut=K[ct];T.format!==Pe?Et!==null?Ht?Bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ut.width,ut.height,Et,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ut.width,ut.height,Et,pt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Ft,ut.width,ut.height,0,Et,pt,ut.data)}}}else{if(K=T.mipmaps,Ht&&se){K.length>0&&D++;const $=te(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ft,$.width,$.height)}for(let $=0;$<6;$++)if(st){Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,yt[$].width,yt[$].height,Et,pt,yt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,yt[$].width,yt[$].height,0,Et,pt,yt[$].data);for(let ct=0;ct<K.length;ct++){const Wt=K[ct].image[$].image;Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Wt.width,Wt.height,Et,pt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Ft,Wt.width,Wt.height,0,Et,pt,Wt.data)}}else{Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Et,pt,yt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,Et,pt,yt[$]);for(let ct=0;ct<K.length;ct++){const ut=K[ct];Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Et,pt,ut.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Ft,Et,pt,ut.image[$])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),J.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function V(R,T,G,j,Z,J){const xt=r.convert(G.format,G.colorSpace),lt=r.convert(G.type),at=v(G.internalFormat,xt,lt,G.colorSpace);if(!n.get(T).__hasExternalTextures){const st=Math.max(1,T.width>>J),yt=Math.max(1,T.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,J,at,st,yt,T.depth,0,xt,lt,null):e.texImage2D(Z,J,at,st,yt,0,xt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,n.get(G).__webglTexture,0,St(T)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,n.get(G).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(R,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let j=i.DEPTH_COMPONENT24;if(G||Ut(T)){const Z=T.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Ln?j=i.DEPTH_COMPONENT32F:Z.type===Di&&(j=i.DEPTH_COMPONENT24));const J=St(T);Ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,j,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const j=St(T);G&&Ut(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,T.width,T.height):Ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const j=T.textures;for(let Z=0;Z<j.length;Z++){const J=j[Z],xt=r.convert(J.format,J.colorSpace),lt=r.convert(J.type),at=v(J.internalFormat,xt,lt,J.colorSpace),Dt=St(T);G&&Ut(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,at,T.width,T.height):Ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,at,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,at,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),P(T.depthTexture,0);const j=n.get(T.depthTexture).__webglTexture,Z=St(T);if(T.depthTexture.format===bi)Ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(T.depthTexture.format===ns)Ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function rt(R){const T=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ft(T.__webglFramebuffer,R)}else if(G){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]=i.createRenderbuffer(),tt(T.__webglDepthbuffer[j],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),tt(T.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(R,T,G){const j=n.get(R);T!==void 0&&V(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&rt(R)}function wt(R){const T=R.texture,G=n.get(R),j=n.get(T);R.addEventListener("dispose",w);const Z=R.textures,J=R.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=T.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let at=0;at<T.mipmaps.length;at++)G.__webglFramebuffer[lt][at]=i.createFramebuffer()}else G.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)G.__webglFramebuffer[lt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(xt)for(let lt=0,at=Z.length;lt<at;lt++){const Dt=n.get(Z[lt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ut(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const at=Z[lt];G.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const Dt=r.convert(at.format,at.colorSpace),st=r.convert(at.type),yt=v(at.internalFormat,Dt,st,at.colorSpace,R.isXRRenderTarget===!0),Vt=St(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),q(i.TEXTURE_CUBE_MAP,T);for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)V(G.__webglFramebuffer[lt][at],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,at);else V(G.__webglFramebuffer[lt],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,at=Z.length;lt<at;lt++){const Dt=Z[lt],st=n.get(Dt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),q(i.TEXTURE_2D,Dt),V(G.__webglFramebuffer,R,Dt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Dt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),q(lt,T),T.mipmaps&&T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)V(G.__webglFramebuffer[at],R,T,i.COLOR_ATTACHMENT0,lt,at);else V(G.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,lt,0);m(T)&&p(lt),e.unbindTexture()}R.depthBuffer&&rt(R)}function U(R){const T=R.textures;for(let G=0,j=T.length;G<j;G++){const Z=T[G];if(m(Z)){const J=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(Z).__webglTexture;e.bindTexture(J,xt),p(J),e.unbindTexture()}}}const Mt=[],nt=[];function Ct(R){if(R.samples>0){if(Ut(R)===!1){const T=R.textures,G=R.width,j=R.height;let Z=i.COLOR_BUFFER_BIT;const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),lt=T.length>1;if(lt)for(let at=0;at<T.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let at=0;at<T.length;at++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[at]);const Dt=n.get(T[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,Z,i.NEAREST),l===!0&&(Mt.length=0,nt.length=0,Mt.push(i.COLOR_ATTACHMENT0+at),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Mt.push(J),nt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let at=0;at<T.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,xt.__webglColorRenderbuffer[at]);const Dt=n.get(T[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function St(R){return Math.min(s.maxSamples,R.samples)}function Ut(R){const T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(R){const T=o.render.frame;d.get(R)!==T&&(d.set(R,T),R.update())}function kt(R,T){const G=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==vn&&G!==Rn&&(qt.getTransfer(G)===Qt?(j!==Pe||Z!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=P,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=At,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Ut}function Jm(i,t){function e(n,s=Rn){let r;const o=qt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.BYTE;if(n===Uh)return i.SHORT;if(n===ql)return i.UNSIGNED_SHORT;if(n===$l)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Fh)return i.RGB;if(n===Pe)return i.RGBA;if(n===Bh)return i.LUMINANCE;if(n===zh)return i.LUMINANCE_ALPHA;if(n===bi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===Jl)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===vr||n===Mr||n===Sr||n===yr)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Zo||n===Jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ta||n===ea)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===_a||n===xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hh||n===va||n===Ma||n===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Qm extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class nn extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new we,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new xn({vertexShader:eg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new be(new cs(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class sg extends Oi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const _=new ig,m=e.getContextAttributes();let p=null,v=null;const x=[],M=[],w=new Gt;let E=null;const A=new ke;A.layers.enable(1),A.viewport=new ue;const L=new ke;L.layers.enable(2),L.viewport=new ue;const y=[A,L],S=new Qm;S.layers.enable(1),S.layers.enable(2);let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let tt=x[V];return tt===void 0&&(tt=new Kr,x[V]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(V){let tt=x[V];return tt===void 0&&(tt=new Kr,x[V]=tt),tt.getGripSpace()},this.getHand=function(V){let tt=x[V];return tt===void 0&&(tt=new Kr,x[V]=tt),tt.getHandSpace()};function P(V){const tt=M.indexOf(V.inputSource);if(tt===-1)return;const ft=x[tt];ft!==void 0&&(ft.update(V.inputSource,V.frame,c||o),ft.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let V=0;V<x.length;V++){const tt=M[V];tt!==null&&(M[V]=null,x[V].disconnect(tt))}I=null,z=null,_.reset(),t.setRenderTarget(p),f=null,u=null,h=null,s=null,v=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qn(f.framebufferWidth,f.framebufferHeight,{format:Pe,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,ft=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?ns:bi,ft=m.stencil?os:Di);const At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(At),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Qn(u.textureWidth,u.textureHeight,{format:Pe,type:Un,depthTexture:new pc(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(V){for(let tt=0;tt<V.removed.length;tt++){const ft=V.removed[tt],rt=M.indexOf(ft);rt>=0&&(M[rt]=null,x[rt].disconnect(ft))}for(let tt=0;tt<V.added.length;tt++){const ft=V.added[tt];let rt=M.indexOf(ft);if(rt===-1){for(let wt=0;wt<x.length;wt++)if(wt>=M.length){M.push(ft),rt=wt;break}else if(M[wt]===null){M[wt]=ft,rt=wt;break}if(rt===-1)break}const At=x[rt];At&&At.connect(ft)}}const Q=new O,et=new O;function H(V,tt,ft){Q.setFromMatrixPosition(tt.matrixWorld),et.setFromMatrixPosition(ft.matrixWorld);const rt=Q.distanceTo(et),At=tt.projectionMatrix.elements,wt=ft.projectionMatrix.elements,U=At[14]/(At[10]-1),Mt=At[14]/(At[10]+1),nt=(At[9]+1)/At[5],Ct=(At[9]-1)/At[5],St=(At[8]-1)/At[0],Ut=(wt[8]+1)/wt[0],bt=U*St,kt=U*Ut,te=rt/(-St+Ut),R=te*-St;tt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(R),V.translateZ(te),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const T=U+te,G=Mt+te,j=bt-R,Z=kt+(rt-R),J=nt*Mt/G*T,xt=Ct*Mt/G*T;V.projectionMatrix.makePerspective(j,Z,J,xt,T,G),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function it(V,tt){tt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(tt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),S.near=L.near=A.near=V.near,S.far=L.far=A.far=V.far,(I!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,z=S.far,A.near=I,A.far=z,L.near=I,L.far=z,A.updateProjectionMatrix(),L.updateProjectionMatrix(),V.updateProjectionMatrix());const tt=V.parent,ft=S.cameras;it(S,tt);for(let rt=0;rt<ft.length;rt++)it(ft[rt],tt);ft.length===2?H(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),q(V,S,tt)};function q(V,tt,ft){ft===null?V.matrix.copy(tt.matrixWorld):(V.matrix.copy(ft.matrixWorld),V.matrix.invert(),V.matrix.multiply(tt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(tt.projectionMatrix),V.projectionMatrixInverse.copy(tt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=lo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let dt=null;function Rt(V,tt){if(d=tt.getViewerPose(c||o),g=tt,d!==null){const ft=d.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let rt=!1;ft.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let wt=0;wt<ft.length;wt++){const U=ft[wt];let Mt=null;if(f!==null)Mt=f.getViewport(U);else{const Ct=h.getViewSubImage(u,U);Mt=Ct.viewport,wt===0&&(t.setRenderTargetTextures(v,Ct.colorTexture,u.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(v))}let nt=y[wt];nt===void 0&&(nt=new ke,nt.layers.enable(wt),nt.viewport=new ue,y[wt]=nt),nt.matrix.fromArray(U.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(U.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),wt===0&&(S.matrix.copy(nt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(nt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const wt=h.getDepthInformation(ft[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,s.renderState)}}for(let ft=0;ft<x.length;ft++){const rt=M[ft],At=x[ft];rt!==null&&At!==void 0&&At.update(rt,tt,c||o)}_.render(t,S),dt&&dt(V,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const _t=new dc;_t.setAnimationLoop(Rt),this.setAnimationLoop=function(V){dt=V},this.dispose=function(){}}}const Gn=new je,rg=new ne;function og(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),x=v.envMap,M=v.envMapRotation;if(x&&(m.envMap.value=x,Gn.copy(M),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Gn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const w=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*w,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ag(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=s[v.id];M===void 0&&(g(v),M=d(v),s[v.id]=M,v.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(v,w);const E=t.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function d(v){const x=h();v.__bindingPointIndex=x;const M=i.createBuffer(),w=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=s[v.id],M=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=M.length;E<A;E++){const L=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,S=L.length;y<S;y++){const I=L[y];if(f(I,E,y,w)===!0){const z=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let X=0;X<P.length;X++){const Q=P[X],et=_(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,z+W,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,W),W+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,M,w){const E=v.value,A=x+"_"+M;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{const L=w[A];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return w[A]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(v){const x=v.uniforms;let M=0;const w=16;for(let A=0,L=x.length;A<L;A++){const y=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,I=y.length;S<I;S++){const z=y[S],P=Array.isArray(z.value)?z.value:[z.value];for(let W=0,X=P.length;W<X;W++){const Q=P[W],et=_(Q),H=M%w;H!==0&&w-H<et.boundary&&(M+=w-H),z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=et.storage}}}const E=M%w;return E>0&&(M+=w-E),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class lg{constructor(t={}){const{canvas:e=tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this._useLegacyLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;const x=this;let M=!1,w=0,E=0,A=null,L=-1,y=null;const S=new ue,I=new ue;let z=null;const P=new vt(0);let W=0,X=e.width,Q=e.height,et=1,H=null,it=null;const q=new ue(0,0,X,Q),dt=new ue(0,0,X,Q);let Rt=!1;const _t=new Co;let V=!1,tt=!1;const ft=new ne,rt=new O,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return A===null?et:1}let U=n;function Mt(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",$,!1),U===null){const N="webgl2";if(U=Mt(N,b),U===null)throw Mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let nt,Ct,St,Ut,bt,kt,te,R,T,G,j,Z,J,xt,lt,at,Dt,st,yt,Vt,Et,pt,Ft,Ht;function se(){nt=new gp(U),nt.init(),pt=new Jm(U,nt),Ct=new hp(U,nt,t,pt),St=new Km(U),Ut=new vp(U),bt=new Om,kt=new Zm(U,nt,St,bt,Ct,pt,Ut),te=new dp(x),R=new mp(x),T=new Au(U),Ft=new lp(U,T),G=new _p(U,T,Ut,Ft),j=new Sp(U,G,T,Ut),yt=new Mp(U,Ct,kt),at=new up(bt),Z=new Nm(x,te,R,nt,Ct,Ft,at),J=new og(x,bt),xt=new Bm,lt=new Wm(nt),st=new ap(x,te,R,St,j,u,l),Dt=new jm(x,j,Ct),Ht=new ag(U,Ut,Ct,St),Vt=new cp(U,nt,Ut),Et=new xp(U,nt,Ut),Ut.programs=Z.programs,x.capabilities=Ct,x.extensions=nt,x.properties=bt,x.renderLists=xt,x.shadowMap=Dt,x.state=St,x.info=Ut}se();const Bt=new sg(x,U);this.xr=Bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(X,Q,!1))},this.getSize=function(b){return b.set(X,Q)},this.setSize=function(b,N,k=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,Q=N,e.width=Math.floor(b*et),e.height=Math.floor(N*et),k===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*et,Q*et).floor()},this.setDrawingBufferSize=function(b,N,k){X=b,Q=N,et=k,e.width=Math.floor(b*k),e.height=Math.floor(N*k),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,N,k,F){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,N,k,F),St.viewport(S.copy(q).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(dt)},this.setScissor=function(b,N,k,F){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,N,k,F),St.scissor(I.copy(dt).multiplyScalar(et).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){St.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(b=!0,N=!0,k=!0){let F=0;if(b){let B=!1;if(A!==null){const ht=A.texture.format;B=ht===Ql||ht===Jl||ht===Zl}if(B){const ht=A.texture.type,mt=ht===Un||ht===Di||ht===ql||ht===os||ht===jl||ht===Kl,gt=st.getClearColor(),Tt=st.getClearAlpha(),Lt=gt.r,Nt=gt.g,zt=gt.b;mt?(f[0]=Lt,f[1]=Nt,f[2]=zt,f[3]=Tt,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Lt,g[1]=Nt,g[2]=zt,g[3]=Tt,U.clearBufferiv(U.COLOR,0,g))}else F|=U.COLOR_BUFFER_BIT}N&&(F|=U.DEPTH_BUFFER_BIT),k&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",$,!1),xt.dispose(),lt.dispose(),bt.dispose(),te.dispose(),R.dispose(),j.dispose(),Ft.dispose(),Ht.dispose(),Z.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Yt),Bt.removeEventListener("sessionend",Ze),Se.stop()};function D(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Ut.autoReset,N=Dt.enabled,k=Dt.autoUpdate,F=Dt.needsUpdate,B=Dt.type;se(),Ut.autoReset=b,Dt.enabled=N,Dt.autoUpdate=k,Dt.needsUpdate=F,Dt.type=B}function $(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const N=b.target;N.removeEventListener("dispose",ct),ut(N)}function ut(b){Wt(b),bt.remove(b)}function Wt(b){const N=bt.get(b).programs;N!==void 0&&(N.forEach(function(k){Z.releaseProgram(k)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,k,F,B,ht){N===null&&(N=At);const mt=B.isMesh&&B.matrixWorld.determinant()<0,gt=Wc(b,N,k,F,B);St.setMaterial(F,mt);let Tt=k.index,Lt=1;if(F.wireframe===!0){if(Tt=G.getWireframeAttribute(k),Tt===void 0)return;Lt=2}const Nt=k.drawRange,zt=k.attributes.position;let re=Nt.start*Lt,me=(Nt.start+Nt.count)*Lt;ht!==null&&(re=Math.max(re,ht.start*Lt),me=Math.min(me,(ht.start+ht.count)*Lt)),Tt!==null?(re=Math.max(re,0),me=Math.min(me,Tt.count)):zt!=null&&(re=Math.max(re,0),me=Math.min(me,zt.count));const Ue=me-re;if(Ue<0||Ue===1/0)return;Ft.setup(B,F,gt,k,Tt);let on,Xt=Vt;if(Tt!==null&&(on=T.get(Tt),Xt=Et,Xt.setIndex(on)),B.isMesh)F.wireframe===!0?(St.setLineWidth(F.wireframeLinewidth*wt()),Xt.setMode(U.LINES)):Xt.setMode(U.TRIANGLES);else if(B.isLine){let Pt=F.linewidth;Pt===void 0&&(Pt=1),St.setLineWidth(Pt*wt()),B.isLineSegments?Xt.setMode(U.LINES):B.isLineLoop?Xt.setMode(U.LINE_LOOP):Xt.setMode(U.LINE_STRIP)}else B.isPoints?Xt.setMode(U.POINTS):B.isSprite&&Xt.setMode(U.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?Xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):Xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Xt.renderInstances(re,Ue,B.count);else if(k.isInstancedBufferGeometry){const Pt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Gi=Math.min(k.instanceCount,Pt);Xt.renderInstances(re,Ue,Gi)}else Xt.render(re,Ue)};function Jt(b,N,k){b.transparent===!0&&b.side===ve&&b.forceSinglePass===!1?(b.side=Ie,b.needsUpdate=!0,ds(b,N,k),b.side=_n,b.needsUpdate=!0,ds(b,N,k),b.side=ve):ds(b,N,k)}this.compile=function(b,N,k=null){k===null&&(k=b),m=lt.get(k),m.init(N),v.push(m),k.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==k&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);const F=new Set;return b.traverse(function(B){const ht=B.material;if(ht)if(Array.isArray(ht))for(let mt=0;mt<ht.length;mt++){const gt=ht[mt];Jt(gt,k,B),F.add(gt)}else Jt(ht,k,B),F.add(ht)}),v.pop(),m=null,F},this.compileAsync=function(b,N,k=null){const F=this.compile(b,N,k);return new Promise(B=>{function ht(){if(F.forEach(function(mt){bt.get(mt).currentProgram.isReady()&&F.delete(mt)}),F.size===0){B(b);return}setTimeout(ht,10)}nt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ie=null;function pe(b){ie&&ie(b)}function Yt(){Se.stop()}function Ze(){Se.start()}const Se=new dc;Se.setAnimationLoop(pe),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(b){ie=b,Bt.setAnimationLoop(b),b===null?Se.stop():Se.start()},Bt.addEventListener("sessionstart",Yt),Bt.addEventListener("sessionend",Ze),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(N),N=Bt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,A),m=lt.get(b,v.length),m.init(N),v.push(m),ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_t.setFromProjectionMatrix(ft),tt=this.localClippingEnabled,V=at.init(this.clippingPlanes,tt),_=xt.get(b,p.length),_.init(),p.push(_),zo(b,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,it);const k=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1;k&&st.addToRenderList(_,b),this.info.render.frame++,V===!0&&at.beginShadows();const F=m.state.shadowsArray;Dt.render(F,b,N),V===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,ht=_.transmissive;if(m.setupLights(x._useLegacyLights),N.isArrayCamera){const mt=N.cameras;if(ht.length>0)for(let gt=0,Tt=mt.length;gt<Tt;gt++){const Lt=mt[gt];Go(B,ht,b,Lt)}k&&st.render(b);for(let gt=0,Tt=mt.length;gt<Tt;gt++){const Lt=mt[gt];ko(_,b,Lt,Lt.viewport)}}else ht.length>0&&Go(B,ht,b,N),k&&st.render(b),ko(_,b,N);A!==null&&(kt.updateMultisampleRenderTarget(A),kt.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,N),Ft.resetDefaultState(),L=-1,y=null,v.pop(),v.length>0?(m=v[v.length-1],V===!0&&at.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function zo(b,N,k,F){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||_t.intersectsSprite(b)){F&&rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ft);const mt=j.update(b),gt=b.material;gt.visible&&_.push(b,mt,gt,k,rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||_t.intersectsObject(b))){const mt=j.update(b),gt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),rt.copy(mt.boundingSphere.center)),rt.applyMatrix4(b.matrixWorld).applyMatrix4(ft)),Array.isArray(gt)){const Tt=mt.groups;for(let Lt=0,Nt=Tt.length;Lt<Nt;Lt++){const zt=Tt[Lt],re=gt[zt.materialIndex];re&&re.visible&&_.push(b,mt,re,k,rt.z,zt)}}else gt.visible&&_.push(b,mt,gt,k,rt.z,null)}}const ht=b.children;for(let mt=0,gt=ht.length;mt<gt;mt++)zo(ht[mt],N,k,F)}function ko(b,N,k,F){const B=b.opaque,ht=b.transmissive,mt=b.transparent;m.setupLightsView(k),V===!0&&at.setGlobalState(x.clippingPlanes,k),F&&St.viewport(S.copy(F)),B.length>0&&us(B,N,k),ht.length>0&&us(ht,N,k),mt.length>0&&us(mt,N,k),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Go(b,N,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[F.id]===void 0&&(m.state.transmissionRenderTarget[F.id]=new Qn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ur:Un,minFilter:qe,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ht=m.state.transmissionRenderTarget[F.id],mt=F.viewport||S;ht.setSize(mt.z,mt.w);const gt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(P),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear();const Tt=x.toneMapping;x.toneMapping=gn;const Lt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),m.setupLightsView(F),V===!0&&at.setGlobalState(x.clippingPlanes,F),us(b,k,F),kt.updateMultisampleRenderTarget(ht),kt.updateRenderTargetMipmap(ht),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let zt=0,re=N.length;zt<re;zt++){const me=N[zt],Ue=me.object,on=me.geometry,Xt=me.material,Pt=me.group;if(Xt.side===ve&&Ue.layers.test(F.layers)){const Gi=Xt.side;Xt.side=Ie,Xt.needsUpdate=!0,Ho(Ue,k,F,on,Xt,Pt),Xt.side=Gi,Xt.needsUpdate=!0,Nt=!0}}Nt===!0&&(kt.updateMultisampleRenderTarget(ht),kt.updateRenderTargetMipmap(ht))}x.setRenderTarget(gt),x.setClearColor(P,W),Lt!==void 0&&(F.viewport=Lt),x.toneMapping=Tt}function us(b,N,k){const F=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ht=b.length;B<ht;B++){const mt=b[B],gt=mt.object,Tt=mt.geometry,Lt=F===null?mt.material:F,Nt=mt.group;gt.layers.test(k.layers)&&Ho(gt,N,k,Tt,Lt,Nt)}}function Ho(b,N,k,F,B,ht){b.onBeforeRender(x,N,k,F,B,ht),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,N,k,F,b,ht),B.transparent===!0&&B.side===ve&&B.forceSinglePass===!1?(B.side=Ie,B.needsUpdate=!0,x.renderBufferDirect(k,N,F,B,b,ht),B.side=_n,B.needsUpdate=!0,x.renderBufferDirect(k,N,F,B,b,ht),B.side=ve):x.renderBufferDirect(k,N,F,B,b,ht),b.onAfterRender(x,N,k,F,B,ht)}function ds(b,N,k){N.isScene!==!0&&(N=At);const F=bt.get(b),B=m.state.lights,ht=m.state.shadowsArray,mt=B.state.version,gt=Z.getParameters(b,B.state,ht,N,k),Tt=Z.getProgramCacheKey(gt);let Lt=F.programs;F.environment=b.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(b.isMeshStandardMaterial?R:te).get(b.envMap||F.environment),F.envMapRotation=F.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",ct),Lt=new Map,F.programs=Lt);let Nt=Lt.get(Tt);if(Nt!==void 0){if(F.currentProgram===Nt&&F.lightsStateVersion===mt)return Wo(b,gt),Nt}else gt.uniforms=Z.getUniforms(b),b.onBuild(k,gt,x),b.onBeforeCompile(gt,x),Nt=Z.acquireProgram(gt,Tt),Lt.set(Tt,Nt),F.uniforms=gt.uniforms;const zt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=at.uniform),Wo(b,gt),F.needsLights=Yc(b),F.lightsStateVersion=mt,F.needsLights&&(zt.ambientLightColor.value=B.state.ambient,zt.lightProbe.value=B.state.probe,zt.directionalLights.value=B.state.directional,zt.directionalLightShadows.value=B.state.directionalShadow,zt.spotLights.value=B.state.spot,zt.spotLightShadows.value=B.state.spotShadow,zt.rectAreaLights.value=B.state.rectArea,zt.ltc_1.value=B.state.rectAreaLTC1,zt.ltc_2.value=B.state.rectAreaLTC2,zt.pointLights.value=B.state.point,zt.pointLightShadows.value=B.state.pointShadow,zt.hemisphereLights.value=B.state.hemi,zt.directionalShadowMap.value=B.state.directionalShadowMap,zt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,zt.spotShadowMap.value=B.state.spotShadowMap,zt.spotLightMatrix.value=B.state.spotLightMatrix,zt.spotLightMap.value=B.state.spotLightMap,zt.pointShadowMap.value=B.state.pointShadowMap,zt.pointShadowMatrix.value=B.state.pointShadowMatrix),F.currentProgram=Nt,F.uniformsList=null,Nt}function Vo(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=zs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Wo(b,N){const k=bt.get(b);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Wc(b,N,k,F,B){N.isScene!==!0&&(N=At),kt.resetTextureUnits();const ht=N.fog,mt=F.isMeshStandardMaterial?N.environment:null,gt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vn,Tt=(F.isMeshStandardMaterial?R:te).get(F.envMap||mt),Lt=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),zt=!!k.morphAttributes.position,re=!!k.morphAttributes.normal,me=!!k.morphAttributes.color;let Ue=gn;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ue=x.toneMapping);const on=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Xt=on!==void 0?on.length:0,Pt=bt.get(F),Gi=m.state.lights;if(V===!0&&(tt===!0||b!==y)){const Be=b===y&&F.id===L;at.setState(F,b,Be)}let ee=!1;F.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Gi.state.version||Pt.outputColorSpace!==gt||B.isBatchedMesh&&Pt.batching===!1||!B.isBatchedMesh&&Pt.batching===!0||B.isInstancedMesh&&Pt.instancing===!1||!B.isInstancedMesh&&Pt.instancing===!0||B.isSkinnedMesh&&Pt.skinning===!1||!B.isSkinnedMesh&&Pt.skinning===!0||B.isInstancedMesh&&Pt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pt.instancingMorph===!1&&B.morphTexture!==null||Pt.envMap!==Tt||F.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==at.numPlanes||Pt.numIntersection!==at.numIntersection)||Pt.vertexAlphas!==Lt||Pt.vertexTangents!==Nt||Pt.morphTargets!==zt||Pt.morphNormals!==re||Pt.morphColors!==me||Pt.toneMapping!==Ue||Pt.morphTargetsCount!==Xt)&&(ee=!0):(ee=!0,Pt.__version=F.version);let Nn=Pt.currentProgram;ee===!0&&(Nn=ds(F,N,B));let Xo=!1,Hi=!1,mr=!1;const ge=Nn.getUniforms(),Mn=Pt.uniforms;if(St.useProgram(Nn.program)&&(Xo=!0,Hi=!0,mr=!0),F.id!==L&&(L=F.id,Hi=!0),Xo||y!==b){ge.setValue(U,"projectionMatrix",b.projectionMatrix),ge.setValue(U,"viewMatrix",b.matrixWorldInverse);const Be=ge.map.cameraPosition;Be!==void 0&&Be.setValue(U,rt.setFromMatrixPosition(b.matrixWorld)),Ct.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ge.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Hi=!0,mr=!0)}if(B.isSkinnedMesh){ge.setOptional(U,B,"bindMatrix"),ge.setOptional(U,B,"bindMatrixInverse");const Be=B.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ge.setValue(U,"boneTexture",Be.boneTexture,kt))}B.isBatchedMesh&&(ge.setOptional(U,B,"batchingTexture"),ge.setValue(U,"batchingTexture",B._matricesTexture,kt));const gr=k.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&yt.update(B,k,Nn),(Hi||Pt.receiveShadow!==B.receiveShadow)&&(Pt.receiveShadow=B.receiveShadow,ge.setValue(U,"receiveShadow",B.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Mn.envMap.value=Tt,Mn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&N.environment!==null&&(Mn.envMapIntensity.value=N.environmentIntensity),Hi&&(ge.setValue(U,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&Xc(Mn,mr),ht&&F.fog===!0&&J.refreshFogUniforms(Mn,ht),J.refreshMaterialUniforms(Mn,F,et,Q,m.state.transmissionRenderTarget[b.id]),zs.upload(U,Vo(Pt),Mn,kt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(zs.upload(U,Vo(Pt),Mn,kt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ge.setValue(U,"center",B.center),ge.setValue(U,"modelViewMatrix",B.modelViewMatrix),ge.setValue(U,"normalMatrix",B.normalMatrix),ge.setValue(U,"modelMatrix",B.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Be=F.uniformsGroups;for(let _r=0,qc=Be.length;_r<qc;_r++){const Yo=Be[_r];Ht.update(Yo,Nn),Ht.bind(Yo,Nn)}}return Nn}function Xc(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Yc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,N,k){bt.get(b.texture).__webglTexture=N,bt.get(b.depthTexture).__webglTexture=k;const F=bt.get(b);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=k===void 0,F.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const k=bt.get(b);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,k=0){A=b,w=N,E=k;let F=!0,B=null,ht=!1,mt=!1;if(b){const Tt=bt.get(b);Tt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(U.FRAMEBUFFER,null),F=!1):Tt.__webglFramebuffer===void 0?kt.setupRenderTarget(b):Tt.__hasExternalTextures&&kt.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);const Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(mt=!0);const Nt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?B=Nt[N][k]:B=Nt[N],ht=!0):b.samples>0&&kt.useMultisampledRTT(b)===!1?B=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[k]:B=Nt,S.copy(b.viewport),I.copy(b.scissor),z=b.scissorTest}else S.copy(q).multiplyScalar(et).floor(),I.copy(dt).multiplyScalar(et).floor(),z=Rt;if(St.bindFramebuffer(U.FRAMEBUFFER,B)&&F&&St.drawBuffers(b,B),St.viewport(S),St.scissor(I),St.setScissorTest(z),ht){const Tt=bt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Tt.__webglTexture,k)}else if(mt){const Tt=bt.get(b.texture),Lt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,k||0,Lt)}L=-1},this.readRenderTargetPixels=function(b,N,k,F,B,ht,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(gt=gt[mt]),gt){St.bindFramebuffer(U.FRAMEBUFFER,gt);try{const Tt=b.texture,Lt=Tt.format,Nt=Tt.type;if(!Ct.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-F&&k>=0&&k<=b.height-B&&U.readPixels(N,k,F,B,pt.convert(Lt),pt.convert(Nt),ht)}finally{const Tt=A!==null?bt.get(A).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(b,N,k=0){const F=Math.pow(2,-k),B=Math.floor(N.image.width*F),ht=Math.floor(N.image.height*F);kt.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,b.x,b.y,B,ht),St.unbindTexture()},this.copyTextureToTexture=function(b,N,k,F=0){const B=N.image.width,ht=N.image.height,mt=pt.convert(k.format),gt=pt.convert(k.type);kt.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,b.x,b.y,B,ht,mt,gt,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,mt,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,F,b.x,b.y,mt,gt,N.image),F===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(b,N,k,F,B=0){const ht=b.max.x-b.min.x,mt=b.max.y-b.min.y,gt=b.max.z-b.min.z,Tt=pt.convert(F.format),Lt=pt.convert(F.type);let Nt;if(F.isData3DTexture)kt.setTexture3D(F,0),Nt=U.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)kt.setTexture2DArray(F,0),Nt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const zt=U.getParameter(U.UNPACK_ROW_LENGTH),re=U.getParameter(U.UNPACK_IMAGE_HEIGHT),me=U.getParameter(U.UNPACK_SKIP_PIXELS),Ue=U.getParameter(U.UNPACK_SKIP_ROWS),on=U.getParameter(U.UNPACK_SKIP_IMAGES),Xt=k.isCompressedTexture?k.mipmaps[B]:k.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),k.isDataTexture||k.isData3DTexture?U.texSubImage3D(Nt,B,N.x,N.y,N.z,ht,mt,gt,Tt,Lt,Xt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,B,N.x,N.y,N.z,ht,mt,gt,Tt,Xt.data):U.texSubImage3D(Nt,B,N.x,N.y,N.z,ht,mt,gt,Tt,Lt,Xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),U.pixelStorei(U.UNPACK_SKIP_PIXELS,me),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,on),B===0&&F.generateMipmaps&&U.generateMipmap(Nt),St.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?kt.setTextureCube(b,0):b.isData3DTexture?kt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?kt.setTexture2DArray(b,0):kt.setTexture2D(b,0),St.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,St.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ao?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===dr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Lo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new Lo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cg extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zs extends we{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Le,d=Le,h,u){super(null,o,a,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po extends Ke{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],d=[];let h=t;const u=(e-t)/s,f=new O,g=new Gt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,d.push(g.x,g.y)}h+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,M=v+n+1,w=v+n+2,E=v+1;a.push(x,M,E),a.push(M,w,E)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class hg extends Bi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new vt(16777215),this.specular=new vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pn extends Bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mc extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Zr=new ne,dl=new O,fl=new O;class ug{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(dl),fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fl),e.updateMatrixWorld(),Zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dg extends ug{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends Mc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pg extends Mc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const pl=new ne;class mg{constructor(t,e,n=0,s=1/0){this.ray=new sc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pl),this}intersectObject(t,e=!0,n=[]){return ho(t,this,n,e),n.sort(ml),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ho(t[s],this,n,e);return n.sort(ml),n}}function ml(i,t){return i.distance-t.distance}function ho(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)ho(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const C={renderer:null,scene:null,camera:null,terrainMesh:null,terrainGeo:null,terrainMatColored:null,terrainMatTextured:null,objectMarkers:new nn,roadMesh:null,waterPlane:null,sunLight:null,currentMapData:null,currentHeightScale:1,colorMode:"terrain",terrainAtlas:null,terrainAtlasTex:null,units:new Map,selectedUnits:[],hotkeySquads:new Array(10).fill(null),messageStream:null,pathfinder:null,gameLoop:null},$t=10,$e=$t/16,Sc=2,yc=4,Ec=Sc|yc,gg=8,_g=64,xg=48,uo=8,vg=$e/8,tn=0,Do=1,Io=2,Js=3,Tc=4,Uo=5,Qs=6,Mg=1.5,fo=.5,Sg=1.03,tr=.5,de=64,Ns=3,Os=1e4,Zt=10,Kn=10,ts=14,gl=2e3,_l=16,Ti=4,yg=30,Eg=180,Tg=60,Ag=90,Kt=new Map,Ui=new Map,Zn=new Map,bg=new Set([".tga",".dds",".bmp",".jpg",".jpeg",".png",".w3d",".wak",".wnd",".ini",".str",".csf",".xml"]);function xl(i){var e;const t=(e=i.toLowerCase().match(/\.[^.]+$/))==null?void 0:e[0];return t?bg.has(t):!1}function po(i,t){const e=i.toLowerCase().replace(/\\/g,"/"),n={buffer:t,offset:0,size:t.byteLength};return Kt.set(e,n),Zn.set(e,n),e}function wg(i,t){var s;const e=i.toLowerCase(),n=[];for(const[r]of Kt)(r.endsWith("/"+e)||r===e)&&n.push(po(r,t));if(n.length===0){const r=((s=e.match(/\.[^.]+$/))==null?void 0:s[0])||"";let o;[".tga",".dds",".bmp"].includes(r)?o=`art/terrain/${e}`:r===".w3d"||r===".wak"?o=`art/w3d/${e}`:r===".ini"?o=`data/ini/${e}`:o=e,n.push(po(o,t)),console.log(`No BIG match for "${e}", added at inferred path: ${o}`)}else console.log(`Overriding ${n.length} BIG entry(s) for "${e}":`,n);return n}function Cg(i,t){const e=new DataView(i),n=new Uint8Array(i),s=String.fromCharCode(n[0],n[1],n[2],n[3]);if(s!=="BIGF"&&s!=="BIG4")throw new Error("Not a BIG archive file");const r=e.getUint32(8,!1);let o=16,a=0;for(let l=0;l<r;l++){const c=e.getUint32(o,!1),d=e.getUint32(o+4,!1);o+=8;let h="";for(;n[o]!==0;)h+=String.fromCharCode(n[o++]);o++;const u=h.toLowerCase().replace(/\\/g,"/");Kt.set(u,{buffer:i,offset:c,size:d}),a++}console.log(`BIG "${t}": ${a} files added to pool (${Kt.size} total)`),bc(),Lg()}function ti(i){return Kt.get(i.toLowerCase().replace(/\\/g,"/"))}function Ac(i){const t=ti(i);return t?new Uint8Array(t.buffer,t.offset,t.size):null}function bc(){const i=["data/ini/terrain.ini","data/ini/default/terrain.ini"];for(const t of i){const e=Ac(t);if(!e)continue;const n=new TextDecoder("ascii").decode(e);Rg(n),console.log(`Parsed ${t}: ${Ui.size} terrain type mappings`)}}function Rg(i){const t=i.split(/\r?\n/);let e=null;for(const n of t){const s=n.replace(/;.*$/,"").trim();if(!s)continue;const r=s.match(/^Terrain\s+(\S+)/i);if(r){e=r[1];continue}if(/^End$/i.test(s)){e=null;continue}if(e){const o=s.match(/^Texture\s*=\s*(\S+)/i);o&&Ui.set(e.toLowerCase(),o[1].toLowerCase())}}}function Lg(){const i=[];for(const[t]of Kt)t.startsWith("art/terrain/")&&t.endsWith(".tga")&&i.push(t);if(i.sort(),i.length>0){console.groupCollapsed(`Terrain TGAs in BIG pool (${i.length})`);for(const t of i)console.log(t);console.groupEnd()}}function Pg(){const i=Array.from(Kt.keys()).sort(),t=Zn.size;console.groupCollapsed(`All files in pool (${i.length} total, ${t} overrides)`);for(const e of i){const n=Kt.get(e),s=Zn.has(e);console.log(`${s?"[OVERRIDE] ":""}${e}  (${n.size} bytes)`)}return console.groupEnd(),i}function Dg(i){const t=i.replace(/\.tga$/i,"").toLowerCase(),e=Ui.get(t);if(e){const o=`art/terrain/${e}`;if(ti(o))return o}const n=`art/terrain/${t}.tga`;if(ti(n))return n;let s=null,r=0;for(const[o]of Kt){if(!o.startsWith("art/terrain/")||!o.endsWith(".tga"))continue;const a=o.slice(12,-4);if(a===t){s=o;break}let l=0;if(t.includes(a)||a.includes(t))l=3;else{const c=u=>u.replace(/type\d*/gi,"").replace(/\d+$/,""),d=c(t),h=c(a);d&&h&&(d.includes(h)||h.includes(d))&&(l=2)}l>r&&(r=l,s=o)}return s&&r>=2?(console.log(`Fuzzy matched "${t}" → "${s}"`),s):null}const Ig={AsphaltType1:3815998,AsphaltType2:4868686,Concrete:8026746,Pavement:6974062,RoadType1:5592405,RoadType2:5197647,Dirt:9139029,DirtType2:8020804,DirtType3:7034165,DirtRoad:10126181,CliffType1:7035723,CliffType2:5983035,Sand:12757358,SandType2:12099168,SandType3:13941882,SandDunes:14270591,Desert:13151082,DesertSand:13152368,Grass:4880944,GrassType2:3828260,GrassType3:5933626,GrassTall:4157480,GrassField:4880944,TallGrass:4157480,ShortGrass:5933626,MediumGrass:4880944,Rock:6974046,RockType2:5921358,RockType3:8026734,Snow:14212326,SnowType2:13159638,Ice:11061472,Water:2121888,WaterEdge:4229808,Mud:5917232,MudType2:6969920,Swamp:3824170,Urban:5921376,UrbanType2:4868688,Field:6986304,Farmland:8030778,GrassRock:5929546,BlendRock:6974037,Tundra:9083536};function wc(i){if(!i)return 8421472;const t=i.replace(/\.tga$/i,"");for(const[s,r]of Object.entries(Ig))if(t.toLowerCase().includes(s.toLowerCase()))return r;let e=0;for(let s=0;s<t.length;s++)e=(e<<5)-e+t.charCodeAt(s)|0;const n=Math.abs(e)%360;return Ug(n,.35,.45)}function Ug(i,t,e){const n=(1-Math.abs(2*e-1))*t,s=n*(1-Math.abs(i/60%2-1)),r=e-n/2;let o,a,l;return i<60?(o=n,a=s,l=0):i<120?(o=s,a=n,l=0):i<180?(o=0,a=n,l=s):i<240?(o=0,a=s,l=n):i<300?(o=s,a=0,l=n):(o=n,a=0,l=s),Math.round((o+r)*255)<<16|Math.round((a+r)*255)<<8|Math.round((l+r)*255)}function No(i,t){const e=C.currentMapData.heightMap,n=e.width,s=e.height,r=e.borderSize,o=i/$t+r,a=s-1-r-t/$t,l=Math.max(0,Math.min(n-1,Math.floor(o))),c=Math.max(0,Math.min(s-1,Math.floor(a))),d=o-l,h=a-c,u=Math.min(l+1,n-1),f=Math.min(c+1,s-1),g=e.data[c*n+l],_=e.data[c*n+u],m=e.data[f*n+l],p=e.data[f*n+u];return(g*(1-d)*(1-h)+_*d*(1-h)+m*(1-d)*h+p*d*h)*$e}function Cc(i,t){if(!C.currentMapData||!C.currentMapData.heightMap)return 0;const e=C.currentMapData.heightMap,n=e.borderSize,r=(e.height-2*n-1)*$t-t;return No(i,r)}const Fs=1,vl=2;function er(i){const t=[0,0,0,0];let e=!1;return i.horiz&&(e=!!(i.inverted&vl),i.inverted&Fs?(t[0]=255,t[3]=255):(t[1]=255,t[2]=255)),i.vert&&(e=!!(i.inverted&vl),i.inverted&Fs?(t[0]=255,t[1]=255):(t[2]=255,t[3]=255)),i.rightDiagonal&&(i.inverted&Fs?(t[1]=255,i.longDiagonal&&(t[0]=255,t[2]=255)):(e=!0,t[2]=255,i.longDiagonal&&(t[1]=255,t[3]=255))),i.leftDiagonal&&(i.inverted&Fs?(e=!0,t[0]=255,i.longDiagonal&&(t[1]=255,t[3]=255)):(t[3]=255,i.longDiagonal&&(t[0]=255,t[2]=255))),i.customBlendEdgeClass>=0&&(t[0]=t[1]=t[2]=t[3]=0,e=!1),{alphas:t,needFlip:e}}function is(i,t,e){const n=i>>2;for(const s of t.textureClasses)if(!(s.firstTile<0)&&n>=s.firstTile&&n<s.firstTile+s.numTiles){e.setHex(wc(s.name));const r=((i&3)-1.5)*.015;e.r=Math.max(0,Math.min(1,e.r+r)),e.g=Math.max(0,Math.min(1,e.g+r)),e.b=Math.max(0,Math.min(1,e.b+r));return}e.setHex(8421472)}function Rc(i,t,e,n,s,r){const o=e.data[i];if(C.colorMode==="height"){const a=s>n?(o-n)/(s-n):.5;a<.15?r.setRGB(.15,.35,.15):a<.35?r.lerpColors(new vt(.15,.35,.15),new vt(.5,.65,.25),(a-.15)/.2):a<.6?r.lerpColors(new vt(.5,.65,.25),new vt(.65,.55,.35),(a-.35)/.25):a<.8?r.lerpColors(new vt(.65,.55,.35),new vt(.55,.5,.45),(a-.6)/.2):r.lerpColors(new vt(.55,.5,.45),new vt(.9,.9,.92),(a-.8)/.2)}else C.colorMode==="normal"?r.setRGB(.6,.55,.45):t&&i<t.tileNdxes.length?is(t.tileNdxes[i],t,r):r.setHex(8421472)}function Ng(){if(!C.terrainMesh||!C.currentMapData)return;if(C.colorMode==="texture"&&C.terrainMatTextured){C.terrainMesh.material=C.terrainMatTextured,C.terrainMesh.material.wireframe=C.terrainMatColored.wireframe;return}C.terrainMesh.material=C.terrainMatColored;const i=C.currentMapData.heightMap,t=C.currentMapData.blendTileData,e=i.width,n=i.height,s=e-1,r=n-1;let o=255,a=0;for(let f=0;f<i.data.length;f++)i.data[f]<o&&(o=i.data[f]),i.data[f]>a&&(a=i.data[f]);const l=C.terrainGeo.getAttribute("color"),c=new vt,d=new vt,h=new vt,u=new vt;for(let f=0;f<r;f++)for(let g=0;g<s;g++){const m=(f*s+g)*4,p=f*e+g;Rc(p,t,i,o,a,c);let v=null;if(t&&p<t.blendTileNdxes.length){const M=t.blendTileNdxes[p];M>0&&t.blendedTiles&&M<t.blendedTiles.length&&(v=er(t.blendedTiles[M]).alphas,is(t.blendedTiles[M].blendNdx,t,d))}let x=null;if(t&&t.extraBlendTileNdxes&&p<t.extraBlendTileNdxes.length){const M=t.extraBlendTileNdxes[p];M>0&&t.blendedTiles&&M<t.blendedTiles.length&&(x=er(t.blendedTiles[M]).alphas,is(t.blendedTiles[M].blendNdx,t,h))}for(let M=0;M<4;M++)u.copy(c),v&&v[M]>0&&u.lerp(d,v[M]/255),x&&x[M]>0&&u.lerp(h,x[M]/255),l.setXYZ(m+M,u.r,u.g,u.b)}l.needsUpdate=!0}function Og(i){if(!C.terrainMesh||!C.currentMapData)return;const t=C.currentMapData.heightMap,e=t.width,n=t.height,s=e-1,r=n-1,o=C.terrainGeo.getAttribute("position"),a=[0,1,1,0],l=[0,0,1,1];for(let c=0;c<r;c++)for(let d=0;d<s;d++){const u=(c*s+d)*4;for(let f=0;f<4;f++){const g=d+a[f],_=c+l[f],m=t.data[_*e+g];o.setY(u+f,m*$e*i)}}o.needsUpdate=!0,C.terrainGeo.computeVertexNormals()}function Fg(i,t,e,n,s,r){let o=0;for(const u of i)for(const f of u.points)o=Math.max(o,f.z*$e);o===0&&(o=20);const a=Math.max(n,s)*$t*1.5,l=t*$t/2,c=e*$t/2,d=new cs(a,a),h=new hg({color:1725046,transparent:!0,opacity:.55,shininess:60,specular:2245734,side:ve});C.waterPlane=new be(d,h),C.waterPlane.rotation.x=-Math.PI/2,C.waterPlane.position.set(l,o,c),C.scene.add(C.waterPlane)}function Oo(i){const t={ambient:{r:.5,g:.39,b:.3},diffuse:{r:.9,g:.71,b:.6},lightPos:{x:-.96,y:.05,z:-.29}},e=(i==null?void 0:i.terrainLights)||[t],n=(i==null?void 0:i.objectLights)||e,s=new O(e[0].ambient.r,e[0].ambient.g,e[0].ambient.b),r=Math.min(e.length,Ns),o=[],a=[];for(let u=0;u<Ns;u++)if(u<r){const f=e[u].lightPos,g=e[u].diffuse;o.push(new O(g.r,g.g,g.b)),a.push(new O(-f.x,-f.z,f.y).normalize())}else o.push(new O(0,0,0)),a.push(new O(0,1,0));const l=Math.min(n.length,Ns),c=new O(n[0].ambient.r,n[0].ambient.g,n[0].ambient.b),d=[],h=[];for(let u=0;u<Ns;u++)if(u<l){const f=n[u].lightPos,g=n[u].diffuse;d.push(new O(g.r,g.g,g.b)),h.push(new O(-f.x,-f.z,f.y).normalize())}else d.push(new O(0,0,0)),h.push(new O(0,1,0));return{ambientColor:s,diffuseColors:o,lightDirs:a,numLights:r,objAmbientColor:c,objDiffuseColors:d,objLightDirs:h,objNumLights:l}}function Lc(i,t,e,n,s){var u;const{scene:r}=C;C.sunLight&&(r.remove(C.sunLight.target),(u=C.sunLight.shadow)!=null&&u.map&&C.sunLight.shadow.map.dispose());const o=[];r.traverse(f=>{(f.isAmbientLight||f.isDirectionalLight)&&o.push(f)}),o.forEach(f=>{r.remove(f),f.dispose()}),C.sunLight=null;const a=Oo(i);r.add(new pg(new vt(a.objAmbientColor.x,a.objAmbientColor.y,a.objAmbientColor.z),1));const l=t*$t/2,c=e*$t/2,h=Math.max(t,e)*$t*.55;for(let f=0;f<a.objNumLights;f++){const g=a.objDiffuseColors[f],_=a.objLightDirs[f];if(g.x+g.y+g.z<.001)continue;const m=new fg(new vt(g.x,g.y,g.z),1);m.position.set(l+_.x*Os,_.y*Os,c+_.z*Os),f===0&&(m.castShadow=!0,m.shadow.mapSize.width=4096,m.shadow.mapSize.height=4096,m.shadow.camera.left=-h,m.shadow.camera.right=h,m.shadow.camera.top=h,m.shadow.camera.bottom=-h,m.shadow.camera.near=1,m.shadow.camera.far=Os*2,m.shadow.bias=0,m.shadow.normalBias=0,m.target.position.set(l,0,c),r.add(m.target),C.sunLight=m),r.add(m)}}function Bg(i){if(!C.currentMapData||!C.currentMapData.lighting)return;const t=C.currentMapData.lighting.entries;if(!t||i<0||i>=t.length)return;const e=t[i],n=Oo(e);if(C.terrainMatTextured){const h=C.terrainMatTextured.uniforms;h.ambientColor.value.copy(n.ambientColor),h.numLights.value=n.numLights,h.diffuseColor0.value.copy(n.diffuseColors[0]),h.diffuseColor1.value.copy(n.diffuseColors[1]),h.diffuseColor2.value.copy(n.diffuseColors[2]),h.lightDir0.value.copy(n.lightDirs[0]),h.lightDir1.value.copy(n.lightDirs[1]),h.lightDir2.value.copy(n.lightDirs[2])}const s=C.currentMapData.heightMap,r=s.borderSize,o=s.width-2*r,a=s.height-2*r;let l=255,c=0;for(let h=0;h<s.data.length;h++)s.data[h]<l&&(l=s.data[h]),s.data[h]>c&&(c=s.data[h]);Lc(e,o,a),Pc(i===3),C.terrainMatTextured&&(C.terrainMatTextured.needsUpdate=!0),C.terrainMatColored&&(C.terrainMatColored.needsUpdate=!0)}function Pc(i){C.objectMarkers.traverse(t=>{t.isMesh&&t.userData.isLightMesh&&(t.visible=i)})}const Te=Object.freeze({MSG_MOUSE_LEFT_CLICK:1,MSG_MOUSE_LEFT_DOUBLE_CLICK:2,MSG_AREA_SELECTION:3,MSG_CREATE_SELECTED_GROUP:4,MSG_CREATE_SELECTED_GROUP_NO_SOUND:5,MSG_DESTROY_SELECTED_GROUP:6,MSG_REMOVE_FROM_SELECTED_GROUP:7,MSG_DO_MOVETO:100,MSG_DO_ATTACKMOVETO:101,MSG_DO_FORCEMOVETO:102,MSG_ADD_WAYPOINT:103,MSG_DO_STOP:104,MSG_DO_ATTACK_OBJECT:105,MSG_DO_FORCE_ATTACK_OBJECT:106,MSG_DO_FORCE_ATTACK_GROUND:107,MSG_DO_GUARD_POSITION:108,MSG_DO_GUARD_OBJECT:109,MSG_DO_SCATTER:110,MSG_CREATE_TEAM0:200,MSG_CREATE_TEAM1:201,MSG_CREATE_TEAM2:202,MSG_CREATE_TEAM3:203,MSG_CREATE_TEAM4:204,MSG_CREATE_TEAM5:205,MSG_CREATE_TEAM6:206,MSG_CREATE_TEAM7:207,MSG_CREATE_TEAM8:208,MSG_CREATE_TEAM9:209,MSG_SELECT_TEAM0:210,MSG_SELECT_TEAM1:211,MSG_SELECT_TEAM2:212,MSG_SELECT_TEAM3:213,MSG_SELECT_TEAM4:214,MSG_SELECT_TEAM5:215,MSG_SELECT_TEAM6:216,MSG_SELECT_TEAM7:217,MSG_SELECT_TEAM8:218,MSG_SELECT_TEAM9:219,MSG_ADD_TEAM0:220,MSG_ADD_TEAM1:221,MSG_ADD_TEAM2:222,MSG_ADD_TEAM3:223,MSG_ADD_TEAM4:224,MSG_ADD_TEAM5:225,MSG_ADD_TEAM6:226,MSG_ADD_TEAM7:227,MSG_ADD_TEAM8:228,MSG_ADD_TEAM9:229});class zg{constructor(t){this.type=t,this.args=[],this.consumed=!1}appendLocationArgument(t){return this.args.push({type:"location",location:{x:t.x,y:t.y,z:t.z}}),this}appendObjectIdArgument(t){return this.args.push({type:"objectId",objectId:t}),this}appendPixelRegionArgument(t){return this.args.push({type:"pixelRegion",pixelRegion:{...t}}),this}appendIntArgument(t){return this.args.push({type:"int",value:t}),this}appendBoolArgument(t){return this.args.push({type:"bool",value:t}),this}getArgument(t){return this.args[t]||null}getType(){return this.type}destroy(){this.consumed=!0}}class kg{constructor(){this.messages=[]}appendMessage(t){const e=new zg(t);return this.messages.push(e),e}getMessages(){return this.messages}consumeMessages(){const t=this.messages.filter(e=>!e.consumed);return this.messages=[],t}clear(){this.messages=[]}}const nr=new mg,ir=new Gt,vi=new O;function Dc(i,t){const{camera:e,objectMarkers:n}=C;if(!e||!n)return null;ir.set(i/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),nr.setFromCamera(ir,e);const s=[];n.children.forEach(l=>{l.traverse(c=>{c.isMesh&&s.push(c)})});const r=nr.intersectObjects(s,!1);let o=null,a=null;for(const l of r){const c=Vg(l.object);if(c&&(a||(a=c),!o&&c.isMobile()&&(o=c),o))break}return o||a}function Gg(i,t){const{camera:e,terrainMesh:n}=C;if(!e||!n)return null;ir.set(i/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),nr.setFromCamera(ir,e);const s=nr.intersectObject(n,!1);if(s.length>0){const r=s[0].point;return{x:r.x,y:r.y,z:r.z}}return null}function Hg(i,t,e,n){const{camera:s}=C;if(!s)return[];const r=Math.min(i,e),o=Math.min(t,n),a=Math.max(i,e),l=Math.max(t,n),c=window.innerWidth,d=window.innerHeight,h=[];for(const u of C.units.values()){if(!u.mesh.visible||(vi.set(u.position.x,u.position.y,u.position.z),vi.project(s),vi.z<0||vi.z>1))continue;const f=(vi.x*.5+.5)*c,g=(-vi.y*.5+.5)*d;f>=r&&f<=a&&g>=o&&g<=l&&h.push(u)}return h}function mo(i,t){return!(!i||!i.isSelectable()||!i.mesh.visible||t&&(i.isStructure()||!i.isLocallyControlled()))}function Vg(i){let t=i;for(;t;){if(t.userData&&t.userData.unit)return t.userData.unit;t=t.parent}return null}let ss=!1;function Wg(){return ss}function Xg(i,t,e){if(C.selectedUnits.length===0)return;const n=Dc(i,t);if(n&&!n.selected&&n.isSelectable()){C.messageStream.appendMessage(Te.MSG_DO_ATTACK_OBJECT).appendObjectIdArgument(n.id);return}const s=Gg(i,t);s&&(e?C.messageStream.appendMessage(Te.MSG_ADD_WAYPOINT).appendLocationArgument(s):ss?(C.messageStream.appendMessage(Te.MSG_DO_ATTACKMOVETO).appendLocationArgument(s),ss=!1):C.messageStream.appendMessage(Te.MSG_DO_MOVETO).appendLocationArgument(s))}function Yg(i){if(C.selectedUnits.length===0)return!1;switch(i){case"KeyS":return C.messageStream.appendMessage(Te.MSG_DO_STOP),!0;case"KeyA":return ss=!ss,!0;case"KeyG":return!0;case"KeyX":return C.messageStream.appendMessage(Te.MSG_DO_SCATTER),!0}return!1}function Mi(i,t,e){return`url("data:image/svg+xml,${encodeURIComponent(i)}") ${t} ${e}, auto`}const wn=(()=>{const i=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <defs><linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f0d060"/><stop offset="50%" stop-color="#c89820"/>
      <stop offset="100%" stop-color="#8a6810"/></linearGradient></defs>
    <path d="M3 1 L3 27 L8.5 21 L14 30 L18 28 L12.5 19 L20 19 Z" fill="url(#ag)" stroke="#1a1400" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M5 5 L5 23 L9 19 L13.5 26.5 L15.5 25.5 L11 18 L17 18 Z" fill="none" stroke="rgba(255,240,180,0.4)" stroke-width="0.5"/>
  </svg>`,t=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <line x1="16" y1="1" x2="16" y2="11" stroke="#33ff33" stroke-width="2" opacity="0.8"/>
    <line x1="16" y1="21" x2="16" y2="31" stroke="#33ff33" stroke-width="2" opacity="0.8"/>
    <line x1="1" y1="16" x2="11" y2="16" stroke="#33ff33" stroke-width="2" opacity="0.8"/>
    <line x1="21" y1="16" x2="31" y2="16" stroke="#33ff33" stroke-width="2" opacity="0.8"/>
    <circle cx="16" cy="16" r="1.5" fill="none" stroke="#33ff33" stroke-width="1" opacity="0.8"/>
  </svg>`,e=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <polygon points="16,2 28,28 16,22 4,28" fill="#33ff33" stroke="#115511" stroke-width="1.5" stroke-linejoin="round" opacity="0.9"/>
    <polygon points="16,6 24,25 16,20 8,25" fill="none" stroke="rgba(200,255,200,0.4)" stroke-width="0.5"/>
  </svg>`,n=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <line x1="16" y1="2" x2="16" y2="12" stroke="#ff3333" stroke-width="2.5" opacity="0.9"/>
    <line x1="16" y1="20" x2="16" y2="30" stroke="#ff3333" stroke-width="2.5" opacity="0.9"/>
    <line x1="2" y1="16" x2="12" y2="16" stroke="#ff3333" stroke-width="2.5" opacity="0.9"/>
    <line x1="20" y1="16" x2="30" y2="16" stroke="#ff3333" stroke-width="2.5" opacity="0.9"/>
    <circle cx="16" cy="16" r="6" fill="none" stroke="#ff3333" stroke-width="1.5" opacity="0.7"/>
    <circle cx="16" cy="16" r="1.5" fill="#ff3333" opacity="0.9"/>
  </svg>`,s=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <line x1="16" y1="2" x2="16" y2="12" stroke="#ffaa33" stroke-width="2.5" opacity="0.9"/>
    <line x1="16" y1="20" x2="16" y2="30" stroke="#ffaa33" stroke-width="2.5" opacity="0.9"/>
    <line x1="2" y1="16" x2="12" y2="16" stroke="#ffaa33" stroke-width="2.5" opacity="0.9"/>
    <line x1="20" y1="16" x2="30" y2="16" stroke="#ffaa33" stroke-width="2.5" opacity="0.9"/>
    <circle cx="16" cy="16" r="6" fill="none" stroke="#ffaa33" stroke-width="1.5" opacity="0.7"/>
    <polygon points="16,10 19,14 13,14" fill="#ffaa33" opacity="0.9"/>
  </svg>`;function r(l){const h=l*Math.PI/180,u=Math.cos(h),f=Math.sin(h),g=16-u*6,_=16-f*6,m=16+u*3,p=16+f*3,v=16+u*13,x=16+f*13,M=6,w=16+u*3,E=16+f*3,A=w+-f*M,L=E+u*M,y=w- -f*M,S=E-u*M;return`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0d060"/><stop offset="100%" stop-color="#a07818"/></linearGradient></defs>
      <line x1="${g.toFixed(1)}" y1="${_.toFixed(1)}" x2="${m.toFixed(1)}" y2="${p.toFixed(1)}" stroke="#1a1400" stroke-width="5" stroke-linecap="round"/>
      <line x1="${g.toFixed(1)}" y1="${_.toFixed(1)}" x2="${m.toFixed(1)}" y2="${p.toFixed(1)}" stroke="url(#sg)" stroke-width="3" stroke-linecap="round"/>
      <polygon points="${v.toFixed(1)},${x.toFixed(1)} ${A.toFixed(1)},${L.toFixed(1)} ${y.toFixed(1)},${S.toFixed(1)}" fill="url(#sg)" stroke="#1a1400" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`}const a=[0,45,90,135,180,225,270,315].map(l=>Mi(r(l),16,16));return{arrow:Mi(i,3,1),select:Mi(t,16,16),move:Mi(e,16,16),attack:Mi(n,16,16),attackMove:Mi(s,16,16),scroll:a}})();let Si="";function qg(i){if(!i)return;let t;if(Y.isPanning||Y.isRotating){const e=Y.mousePos,n=window.innerWidth/2,s=window.innerHeight/2,r=e.x-n,o=e.y-s,a=(Math.atan2(o,r)*180/Math.PI+360)%360,l=Math.round(a/45)%8;t="scroll"+l,t!==Si&&(i.style.cursor=wn.scroll[l],Si=t);return}if(Y.isDragSelecting&&Y.wasDragSelecting)t="select";else{let e=-1;if(Y.edgeScrollEnabled){const n=window.innerWidth,s=window.innerHeight,r=Y.mousePos;let o=0,a=0;if(r.x<=Dn&&(o=-1),r.x>=n-Dn&&(o=1),r.y<=Dn&&(a=-1),r.y>=s-Dn&&(a=1),o!==0||a!==0){const l=(Math.atan2(a,o)*180/Math.PI+360)%360;e=Math.round(l/45)%8}}if(e>=0){t="scroll"+e,t!==Si&&(i.style.cursor=wn.scroll[e],Si=t);return}C.selectedUnits&&C.selectedUnits.length>0?Wg()?t="attackMove":t="move":t="arrow"}if(t!==Si){const e={select:wn.select,move:wn.move,attack:wn.attack,attackMove:wn.attackMove,arrow:wn.arrow};i.style.cursor=e[t]||wn.arrow,Si=t}}const $g=24,jg=.8,Kg=.5,Zg=.35,$i=new Map;let Bs=0;const Jg=120,Qg="7px monospace";let Ci=[],go=0;function t_(){const i=[()=>`0x${(Math.random()*16777215|0).toString(16).toUpperCase().padStart(6,"0")}`,()=>`${Math.random()*360|0}.${(Math.random()*100|0).toString().padStart(2,"0")}°`,()=>`R:${(Math.random()*999|0).toString().padStart(3,"0")}`,()=>`${(Math.random()*100|0).toFixed(0)}%`,()=>`ID:${(Math.random()*9999|0).toString().padStart(4,"0")}`,()=>`T+${(Math.random()*99|0).toFixed(0)}s`,()=>`${Math.random()*255|0}.${Math.random()*255|0}.${Math.random()*255|0}`,()=>`SIG ${(Math.random()*10).toFixed(2)}`,()=>`BRG ${Math.random()*360|0}`,()=>`${String.fromCharCode(65+Math.random()*26|0)}${String.fromCharCode(65+Math.random()*26|0)}-${Math.random()*99|0}`,()=>`DST ${Math.random()*500|0}m`,()=>`PWR ${(Math.random()*100|0).toFixed(0)}kW`,()=>`FRQ ${(20+Math.random()*80|0).toFixed(0)}MHz`,()=>`ALT ${Math.random()*200|0}`,()=>`VEL ${(Math.random()*60|0).toFixed(1)}`];return i[Math.random()*i.length|0]()}function e_(i,t,e,n,s){if(s-go<Jg)return;go=s;const r=e-i,o=n-t;if(r<30||o<30)return;const a=Math.random()*4|0;let l,c,d;const h=4;switch(a){case 0:l=i+Math.random()*r,c=t-h,d="bottom";break;case 1:l=i+Math.random()*r,c=n+h,d="top";break;case 2:l=i-h,c=t+Math.random()*o,d="right";break;case 3:l=e+h,c=t+Math.random()*o,d="left";break}Ci.push({text:t_(),x:l,y:c,align:d,born:s,life:800+Math.random()*1200}),Ci.length>18&&Ci.shift()}function n_(i,t){i.font=Qg,Ci=Ci.filter(e=>{const n=t-e.born;if(n>e.life)return!1;const s=Math.min(1,n/200),r=Math.max(0,1-(n-(e.life-300))/300),o=Math.min(s,r)*.7;if(o<=0)return!1;switch(i.fillStyle=`rgba(51, 255, 51, ${o.toFixed(3)})`,e.align){case"bottom":i.textAlign="center",i.textBaseline="bottom";break;case"top":i.textAlign="center",i.textBaseline="top";break;case"right":i.textAlign="right",i.textBaseline="middle";break;case"left":i.textAlign="left",i.textBaseline="middle";break}return i.fillText(e.text,e.x,e.y),!0})}function ks(i){const t=Hs;if(!t)return;if(!i){t.style.display="none",$i.clear(),Bs=0,Ci=[],go=0;return}const e=Math.min(Y.dragStart.x,Y.dragEnd.x),n=Math.min(Y.dragStart.y,Y.dragEnd.y),s=Math.max(Y.dragStart.x,Y.dragEnd.x),r=Math.max(Y.dragStart.y,Y.dragEnd.y),o=s-e,a=r-n;if(o<2||a<2)return;const{camera:l,objectMarkers:c}=C,d=window.devicePixelRatio||1,h=window.innerWidth,u=window.innerHeight;t.width=h*d,t.height=u*d,t.style.width=h+"px",t.style.height=u+"px",t.style.display="block";const f=t.getContext("2d");f.setTransform(d,0,0,d,0,0),f.clearRect(0,0,h,u);const g=[];if(l&&c.visible){const E=new O;c.children.forEach(A=>{var I,z;if(!A.visible)return;const L=(I=A.userData)==null?void 0:I.kindOf,y=(((z=A.userData)==null?void 0:z.name)||"").toLowerCase();(L?L.has("VEHICLE")||L.has("INFANTRY")||L.has("AIRCRAFT")||L.has("HUGE_VEHICLE"):y.includes("vehicle")||y.includes("infantry")||y.includes("tank")||y.includes("humvee")||y.includes("soldier")||y.includes("ranger")||y.includes("missile")||y.includes("raptor")||y.includes("comanche")||y.includes("crusader")||y.includes("paladin")||y.includes("ambulance"))&&A.traverse(P=>{if(!P.isMesh||!P.geometry)return;const W=P.geometry.attributes.position;if(!W)return;const X=Math.max(1,Math.floor(W.count/24));for(let Q=0;Q<W.count;Q+=X)E.set(W.getX(Q),W.getY(Q),W.getZ(Q)),P.localToWorld(E),E.project(l),E.z>0&&E.z<1&&g.push((E.x*.5+.5)*h,(-E.y*.5+.5)*u)})})}const _=performance.now(),m=Bs?Math.min((_-Bs)/1e3,.1):.016;Bs=_;const p=$g,v=Math.ceil(o/p),x=Math.ceil(a/p),M=new Set;for(let E=0;E<g.length;E+=2){const A=g[E],L=g[E+1];if(A<e||A>=s||L<n||L>=r)continue;const y=Math.floor((A-e)/p),S=Math.floor((L-n)/p);M.add(`${y},${S}`)}const w=new Set;for(let E=0;E<x;E++)for(let A=0;A<v;A++){const L=e+A*p,y=n+E*p,S=Math.min(p,s-L),I=Math.min(p,r-y),z=M.has(`${A},${E}`),P=`${A},${E}`;w.add(P);let W=$i.get(P)||0;W=z?Math.min(Zg,W+jg*m):Math.max(0,W-Kg*m),$i.set(P,W),W>.001&&(f.fillStyle=`rgba(51, 255, 51, ${W.toFixed(3)})`,f.fillRect(L,y,S,I)),f.strokeStyle="rgba(51, 255, 51, 0.3)",f.lineWidth=.5,f.strokeRect(L+.5,y+.5,S-1,I-1)}for(const E of $i.keys())w.has(E)||$i.delete(E);f.strokeStyle="rgba(51, 255, 51, 0.6)",f.lineWidth=2,f.strokeRect(e,n,o,a),e_(e,n,s,r,_),n_(f,_)}const i_=3407667,Ml=8,s_=32;let Gs=null,_o=null,Ve=null;function Ic(){Gs||(Gs=new Po(Ml*.7,Ml,s_),Gs.rotateX(-Math.PI/2)),_o||(_o=new jn({color:i_,transparent:!0,opacity:.5,side:ve,depthWrite:!1})),Ve||(Ve=new nn,Ve.name="selectionIndicators",C.scene&&C.scene.add(Ve))}function Ri(i){if(!i||i.selected)return;Ic(),i.selected=!0,C.selectedUnits.push(i);const t=new be(Gs,_o);t.position.set(i.position.x,i.position.y+.3,i.position.z),t.userData.unitId=i.id,Ve.add(t),i.selectionIndicator=t}function r_(i){if(!i||!i.selected)return;i.selected=!1;const t=C.selectedUnits.indexOf(i);t!==-1&&C.selectedUnits.splice(t,1),i.selectionIndicator&&Ve&&(Ve.remove(i.selectionIndicator),i.selectionIndicator=null)}function es(){for(const i of C.selectedUnits)i.selected=!1,i.selectionIndicator&&Ve&&(Ve.remove(i.selectionIndicator),i.selectionIndicator=null);C.selectedUnits.length=0}function o_(i){const{camera:t}=C;if(!t||!i)return;const e=i.name.toLowerCase(),n=new O,s=window.innerWidth,r=window.innerHeight;for(const o of C.units.values()){if(o.selected||!o.isSelectable()||!o.isLocallyControlled()||o.name.toLowerCase()!==e||(n.set(o.position.x,o.position.y,o.position.z),n.project(t),n.z<0||n.z>1))continue;const a=(n.x*.5+.5)*s,l=(-n.y*.5+.5)*r;a<0||a>s||l<0||l>r||Ri(o)}}function a_(){for(const i of C.selectedUnits)i.selectionIndicator&&i.selectionIndicator.position.set(i.position.x,i.position.y+.3,i.position.z)}function l_(){Ic(),Ve&&C.scene&&!Ve.parent&&C.scene.add(Ve)}const c_=10,h_=20;let Sl=0,Jr=-1,yl=0,El=0,Tl=0;const u_=400,Al=6;let xo=0;function d_(){xo++}function f_(i,t,e){const n=Y.wasDragSelecting,s=Y.dragStartX,r=Y.dragStartY;n?m_(s,r,i,t,e):p_(i,t,e)}function p_(i,t,e){const n=performance.now(),s=Math.abs(i-El),r=Math.abs(t-Tl),o=n-yl<u_&&s<Al&&r<Al;yl=n,El=i,Tl=t;const a=Dc(i,t);if(o&&a&&mo(a,!1)){e||es(),Ri(a),o_(a),vo(!0);return}if(a&&mo(a,!1))e?a.selected?r_(a):Ri(a):(es(),Ri(a)),vo(!e);else if(!e){if(C.selectedUnits.length===0)return;es(),__()}}function m_(i,t,e,n,s){const o=Hg(i,t,e,n).filter(a=>mo(a,!0));if(o.length!==0){s||es();for(const a of o)Ri(a);vo(!s)}}function g_(i,t,e){if(i<0||i>=c_)return;if(t&&!e){C.hotkeySquads[i]=C.selectedUnits.slice();return}if(t&&e){const o=[...C.hotkeySquads[i]||[]];for(const a of C.selectedUnits)o.includes(a)||o.push(a);C.hotkeySquads[i]=o;return}const n=C.hotkeySquads[i];if(!n||n.length===0)return;if(Jr===i&&xo-Sl<h_){const r=n[n.length-1];r&&r.mesh&&Y.target.set(r.position.x,r.position.y,r.position.z),Jr=-1;return}Sl=xo,Jr=i,e||es();const s=n.filter(r=>C.units.has(r.id));C.hotkeySquads[i]=s;for(const r of s)Ri(r)}function vo(i){if(!C.messageStream)return;const t=C.messageStream.appendMessage(Te.MSG_CREATE_SELECTED_GROUP);t.appendBoolArgument(i);for(const e of C.selectedUnits)t.appendObjectIdArgument(e.id)}function __(){C.messageStream&&C.messageStream.appendMessage(Te.MSG_DESTROY_SELECTED_GROUP).appendBoolArgument(!0)}const pr=-37*Math.PI/180,x_=5,Fo=800,Uc=250,bl=20,v_=.005,M_=1.5,S_=8,Dn=3,wl=.3,y_=.85,Y={target:new O,yaw:Math.PI*.75,pitch:pr,height:Uc,velocity:new O,isPanning:!1,isRotating:!1,middleDown:!1,panAnchor:{x:0,y:0},rotAnchor:{x:0,y:0},rotAnchorYaw:0,rotAnchorPitch:0,keys:{},mousePos:{x:0,y:0},isDragSelecting:!1,wasDragSelecting:!1,dragStart:{x:0,y:0},dragEnd:{x:0,y:0},dragStartX:0,dragStartY:0,edgeScrollEnabled:!1,rightDown:!1,rightAnchor:{x:0,y:0},rightWasDrag:!1};let Hs=null;function E_(i){i.addEventListener("contextmenu",t=>t.preventDefault()),i.addEventListener("mousedown",t=>{t.button===2?(Y.isPanning=!0,Y.panAnchor={x:t.clientX,y:t.clientY},Y.rightDown=!0,Y.rightAnchor={x:t.clientX,y:t.clientY},Y.rightWasDrag=!1):t.button===1?(t.preventDefault(),Y.middleDown=!0,Y.isRotating=!0,Y.rotAnchor={x:t.clientX,y:t.clientY},Y.rotAnchorYaw=Y.yaw,Y.rotAnchorPitch=Y.pitch):t.button===0&&(Y.isDragSelecting=!0,Y.wasDragSelecting=!1,Y.dragStart={x:t.clientX,y:t.clientY},Y.dragEnd={x:t.clientX,y:t.clientY},Y.dragStartX=t.clientX,Y.dragStartY=t.clientY,ks(!1))}),window.addEventListener("mousemove",t=>{if(Y.mousePos={x:t.clientX,y:t.clientY},Y.isPanning){const e=t.clientX-Y.panAnchor.x,n=t.clientY-Y.panAnchor.y;Y.panAnchor={x:t.clientX,y:t.clientY};const s=Y.height*M_/window.innerHeight,r=Math.sin(Y.yaw),o=Math.cos(Y.yaw);if(Y.target.x-=(e*o+n*r)*s,Y.target.z-=(-e*r+n*o)*s,Y.rightDown){const a=Math.abs(t.clientX-Y.rightAnchor.x),l=Math.abs(t.clientY-Y.rightAnchor.y);(a>Ti||l>Ti)&&(Y.rightWasDrag=!0)}}if(Y.isRotating){const e=t.clientX-Y.rotAnchor.x;Y.yaw=Y.rotAnchorYaw-e*v_}if(Y.isDragSelecting){Y.dragEnd={x:t.clientX,y:t.clientY};const e=Math.abs(Y.dragEnd.x-Y.dragStart.x),n=Math.abs(Y.dragEnd.y-Y.dragStart.y);(e>Ti||n>Ti)&&(Y.wasDragSelecting=!0,ks(!0))}}),window.addEventListener("mouseup",t=>{if(t.button===2&&(Y.isPanning=!1,Y.rightDown&&!Y.rightWasDrag&&Xg(t.clientX,t.clientY,t.shiftKey),Y.rightDown=!1),t.button===1){if(Y.middleReleaseTime=performance.now(),Y.middleDown=!1,!Y.isRotating)return;Y.isRotating=!1;const e=Math.abs(t.clientX-Y.rotAnchor.x),n=Math.abs(t.clientY-Y.rotAnchor.y);e<3&&n<3&&(Y.pitch=pr,Y.yaw=Math.PI*.75,Y.height=Uc)}t.button===0&&(Y.isDragSelecting=!1,ks(!1),f_(t.clientX,t.clientY,t.shiftKey))}),i.addEventListener("wheel",t=>{if(t.preventDefault(),t.buttons&4||Y.middleDown||performance.now()-(Y.middleReleaseTime||0)<150)return;const e=t.deltaY>0?bl:-bl,n=Math.max(.5,Y.height/200);Y.height=Math.max(x_,Math.min(Fo,Y.height+e*n))},{passive:!1}),window.addEventListener("keydown",t=>{if(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA")return;Y.keys[t.code]=!0;const e=t.code.match(/^Digit(\d)$/);if(e){const n=parseInt(e[1]);g_(n,t.ctrlKey,t.shiftKey);return}!t.ctrlKey&&!t.altKey&&Yg(t.code)}),window.addEventListener("keyup",t=>{Y.keys[t.code]=!1}),Hs=document.createElement("canvas"),Hs.style.cssText="position:fixed;top:0;left:0;pointer-events:none;display:none;z-index:100;",document.body.appendChild(Hs)}function T_(){const{camera:i,renderer:t}=C,e=Y.keys;let n=0,s=0;(e.KeyW||e.ArrowUp)&&(s-=1),(e.KeyS||e.ArrowDown)&&(s+=1),(e.KeyA||e.ArrowLeft)&&(n-=1),(e.KeyD||e.ArrowRight)&&(n+=1);let r=0,o=0;if(Y.edgeScrollEnabled){const c=window.innerWidth,d=window.innerHeight,h=Y.mousePos;h.x<=Dn&&(r-=1),h.x>=c-Dn&&(r+=1),h.y<=Dn&&(o-=1),h.y>=d-Dn&&(o+=1)}if(n!==0||s!==0||r!==0||o!==0){const c=S_*(Y.height/200),d=Math.sin(Y.yaw),h=Math.cos(Y.yaw),u=n+r*wl,f=s+o*wl;Y.velocity.x+=(u*h+f*d)*c,Y.velocity.z+=(-u*d+f*h)*c}Y.target.add(Y.velocity),Y.velocity.multiplyScalar(y_);const l=Y.height/Math.sin(-Y.pitch)*Math.cos(-Y.pitch);if(i.position.set(Y.target.x+Math.sin(Y.yaw)*l,Y.target.y+Y.height,Y.target.z+Math.cos(Y.yaw)*l),i.lookAt(Y.target),qg(t==null?void 0:t.domElement),Y.isDragSelecting){const c=Math.abs(Y.dragEnd.x-Y.dragStart.x),d=Math.abs(Y.dragEnd.y-Y.dragStart.y);(c>Ti||d>Ti)&&ks(!0)}}const mn=new Map,ei=new Map,sr=new Map,hs=new Map;function A_(){mn.clear(),ei.clear(),sr.clear();const i=[];for(const[t]of Kt)(t.startsWith("data/ini/")&&t.endsWith(".ini")||t.includes("object")&&t.endsWith(".ini"))&&i.push(t);i.sort(),console.groupCollapsed(`Object INI: scanning ${i.length} INI files`);for(const t of i){const e=Kt.get(t);if(!e)continue;const n=mn.size;try{const s=new Uint8Array(e.buffer,e.offset,e.size),r=new TextDecoder("ascii").decode(s);b_(r);const o=mn.size-n;o>0&&console.log(`  ${t}: +${o} mappings`)}catch(s){console.warn(`  ${t}: PARSE ERROR`,s)}}console.groupEnd(),console.log(`Object INI: ${mn.size} object→model mappings, ${ei.size} KindOf entries, ${sr.size} GeometryInfo entries`)}function b_(i){const t=i.split(/\r?\n/);let e=0;function n(){for(;e<t.length;){const h=t[e++].replace(/;.*$/,"").replace(/\/\/.*$/,"").trim();if(h)return h}return null}let s;for(;(s=n())!==null;){const d=s.match(/^(?:Object|ObjectReskin)\s+(\S+)/i);d&&r(d[1].toLowerCase())}function r(d){let h=null,u;for(;(u=n())!==null;){if(/^End$/i.test(u)){h&&sr.set(d,h);return}const f=u.match(/^\s*KindOf\s*=\s*(.+)/i);if(f&&!ei.has(d)){ei.set(d,new Set(f[1].trim().split(/\s+/).map(x=>x.toUpperCase())));continue}const g=u.match(/^\s*Geometry\s*=\s*(\S+)/i);if(g){h||(h={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),h.type=g[1].toUpperCase();continue}const _=u.match(/^\s*GeometryMajorRadius\s*=\s*([\d.]+)/i);if(_){h||(h={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),h.majorRadius=parseFloat(_[1]);continue}const m=u.match(/^\s*GeometryMinorRadius\s*=\s*([\d.]+)/i);if(m){h||(h={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),h.minorRadius=parseFloat(m[1]);continue}const p=u.match(/^\s*GeometryHeight\s*=\s*([\d.]+)/i);if(p){h||(h={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),h.height=parseFloat(p[1]);continue}const v=u.match(/^\s*GeometryIsSmall\s*=\s*(\S+)/i);if(v){h||(h={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),h.isSmall=/^yes$/i.test(v[1]);continue}if(/^\s*Draw\s*=\s*W3D/i.test(u)){o(d);continue}if(c(u)){l();continue}}}function o(d){let h;for(;(h=n())!==null;){if(/^End$/i.test(h))return;if(/^\s*(?:Default)?ConditionState\b/i.test(h)){a(d);continue}if(/^\s*TransitionState\b/i.test(h)||c(h)){l();continue}if(!mn.has(d)){const u=h.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);u&&mn.set(d,u[1].toLowerCase())}}}function a(d){let h;for(;(h=n())!==null;){if(/^End$/i.test(h))return;if(!mn.has(d)){const u=h.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);u&&mn.set(d,u[1].toLowerCase())}}}function l(){let d;for(;(d=n())!==null;){if(/^End$/i.test(d))return;(c(d)||/^\s*(?:Default)?ConditionState\b/i.test(d)||/^\s*TransitionState\b/i.test(d))&&l()}}function c(d){return!!(/\bModuleTag\b/i.test(d)||/^\s*(?:Draw|ArmorSet|WeaponSet|LocomotorSet|CommandSet|UpgradeSet|UnitSpecificSounds)\s*=/i.test(d)||/^\s*(?:ArmorSet|WeaponSet|LocomotorSet|UnitSpecificSounds)\s*$/i.test(d))}}function w_(){hs.clear();const i=["data/ini/roads.ini","data/ini/default/roads.ini"];for(const t of i){const e=Kt.get(t);if(!e)continue;const n=new Uint8Array(e.buffer,e.offset,e.size),s=new TextDecoder("ascii").decode(n);C_(s)}}function C_(i){const t=i.split(/\r?\n/);let e=null,n=!1,s=uo,r=1,o="";for(const a of t){const l=a.replace(/;.*$/,"").trim();if(l){if(/^Road\s+/i.test(l))e=l.replace(/^Road\s+/i,"").trim(),n=!0,s=uo,r=1,o="";else if(/^Bridge\s+/i.test(l))n=!1;else if(/^End$/i.test(l)&&n&&e)hs.set(e.toLowerCase(),{roadWidth:s,roadWidthInTexture:r,texture:o}),e=null;else if(n&&e){const c=l.match(/^Texture\s*=\s*(.+)/i);c&&(o=c[1].trim());const d=l.match(/^RoadWidth\s*=\s*([\d.]+)/i);d&&(s=parseFloat(d[1]));const h=l.match(/^RoadWidthInTexture\s*=\s*([\d.]+)/i);h&&(r=parseFloat(h[1]))}}}}const De=new Map,Vs=new Map;function R_(){De.clear();for(const[i]of Kt){if(!i.endsWith(".w3d"))continue;const t=i.split("/"),e=t[t.length-1].replace(/\.w3d$/,"");De.has(e)||De.set(e,i)}console.log(`W3D index: ${De.size} models available`)}function ji(i){return De.has(i)?De.get(i):null}function Qr(i){return i.replace(/\d+$/,"")}function Cl(i){const t=i.toLowerCase();if(Vs.has(t))return Vs.get(t);let e=null;const n=mn.get(t);if(n){const s=n.includes(".")?n.split(".")[0]:n;e=ji(s)}if(e||(e=ji(t)),!e){const s=[["tree","tr"],["tree",""],["civ","cf"],["civ","c"],["civ",""],["mes","mes"],["asia","as"],["euro","eu"]];for(const[r,o]of s){if(!t.startsWith(r))continue;const a=t.slice(r.length);if(e=ji(o+a),e)break;const l=Qr(o+a);if(l!==o+a){for(const[c,d]of De)if(Qr(c)===l){e=d;break}if(e)break}}}if(!e){const s={america:"a",china:"c",gla:"g",civilian:"c",europe:"eu"},r={vehicle:"v",infantry:"i",structure:"",building:"",tech:""};for(const[o,a]of Object.entries(s)){if(!t.startsWith(o))continue;let l=t.slice(o.length);for(const[c,d]of Object.entries(r)){if(!l.startsWith(c))continue;const h=l.slice(c.length),u=a+d+h;if(e=ji(u),e)break}if(e||(e=ji(a+l),e))break}}if(!e){const s=t.replace(/^(?:america|china|gla|civilian|europe|tree|civ|mes)/,"").replace(/^(?:vehicle|infantry|structure|building)/,"");if(s.length>=3){const r=Qr(s);let o=0;for(const[a,l]of De){if(a.includes(s)){e=l;break}r.length>=3&&a.includes(r)&&r.length>o&&(o=r.length,e=l)}}}if(!e){const s=n?` (INI→"${n}")`:" (no INI mapping)",r=[],o=t.replace(/^(?:tree|civ|mes|america|china|gla|civilian|europe)/,"").replace(/\d+$/,"");if(o.length>=3){for(const[l]of De)if(l.includes(o)&&r.push(l),r.length>=5)break}const a=r.length>0?` Similar W3D: [${r.join(", ")}]`:"";console.warn(`W3D not found: "${i}"${s}${a}`)}return Vs.set(t,e),e}function rr(i,t){return Math.sqrt(i*i+t*t)}function sn(i,t,e,n){return i*e+t*n}function Mo(i,t,e,n){return i*n-t*e}function Ge(i,t){const e=rr(i,t);return e<1e-9?{x:0,y:0}:{x:i/e,y:t/e}}function So(i,t,e){const n=Math.cos(e),s=Math.sin(e);return{x:i*n-t*s,y:i*s+t*n}}function He(i,t){return Math.abs(i.x-t.x)<tr&&Math.abs(i.y-t.y)<tr}function Nc(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e];if(!(n.flags&Sc))continue;const s=i[e+1];if(!(s.flags&yc))continue;const r=n.name.toLowerCase(),o=hs.get(r),a=o?o.roadWidth:uo,l=o?o.roadWidthInTexture:1,c=!!(n.flags&gg),h=!!(n.flags&_g)?fo:Mg;t.push({pt1:{x:n.x,y:n.y,count:0,last:!0},pt2:{x:s.x,y:s.y,count:0,last:!0},name:n.name,typeName:r,halfWidth:a*l/2,widthInTexture:l,scale:a,type:tn,isAngled:c,curveRadius:h}),e++}return t}function L_(i){for(let o=i.length-1;o>0;o--){const a=i[o];if(a.type===tn)for(let l=0;l<o;l++){const c=i[l];c.type===tn&&c.typeName===a.typeName&&(He(c.pt1,a.pt1)&&(c.pt1.count++,a.pt1.count++,c.pt1.last=!1),He(c.pt1,a.pt2)&&(c.pt1.count++,a.pt2.count++,c.pt1.last=!1),He(c.pt2,a.pt1)&&(c.pt2.count++,a.pt1.count++,c.pt2.last=!1),He(c.pt2,a.pt2)&&(c.pt2.count++,a.pt2.count++,c.pt2.last=!1))}}const t=[],e=i.length;for(let o=0;o<e;o++){const a=i[o];a.type===tn&&(a.pt1.count===2&&(t.push({x:a.pt1.x,y:a.pt1.y}),Rl(i,a.pt1,o)),a.pt2.count===2&&(t.push({x:a.pt2.x,y:a.pt2.y}),Rl(i,a.pt2,o)),a.pt1.count===3&&(t.push({x:a.pt1.x,y:a.pt1.y}),Ll(i,a.pt1,o)),a.pt2.count===3&&(t.push({x:a.pt2.x,y:a.pt2.y}),Ll(i,a.pt2,o)))}function n(o){for(const a of t)if(Math.abs(o.x-a.x)<tr&&Math.abs(o.y-a.y)<tr)return!0;return!1}const s=i.length;let r=-1;for(let o=0;o<s;o++)i[o].type===tn&&(o<s-1&&i[o+1].type===tn&&i[o].typeName===i[o+1].typeName&&He(i[o].pt1,i[o+1].pt2)&&i[o].pt1.count===1&&i[o+1].pt2.count===1&&!n(i[o].pt1)?(Pl(i,o,o+1),r<0&&(r=o)):r>=0&&(i[o].type===tn&&i[o].typeName===i[r].typeName&&He(i[o].pt1,i[r].pt2)&&i[r].pt2.count===1&&i[o].pt1.count===1&&!n(i[o].pt1)&&Pl(i,o,r),r=-1));return i}function Oc(i,t,e,n){const s=[];for(let r=0;r<i.length;r++){if(r===e)continue;const o=i[r];o.typeName===n&&(He(o.pt1,t)?s.push({seg:o,centerPt:o.pt1,remotePt:o.pt2,idx:r}):He(o.pt2,t)&&s.push({seg:o,centerPt:o.pt2,remotePt:o.pt1,idx:r}))}return s}function Fc(i,t,e,n){for(const s of i)s.typeName===e&&(He(s.pt1,t)&&(s.pt1.count=n),He(s.pt2,t)&&(s.pt2.count=n))}function Rl(i,t,e){const n={x:t.x,y:t.y},s=i[e],r=Oc(i,n,e,s.typeName);if(r.length<2)return;const o=He(s.pt1,n)?s.pt2:s.pt1,a=r[0].remotePt,l=r[1].remotePt,c=Ge(o.x-n.x,o.y-n.y),d=Ge(a.x-n.x,a.y-n.y),h=Ge(l.x-n.x,l.y-n.y),u=sn(c.x,c.y,d.x,d.y),f=sn(c.x,c.y,h.x,h.y),g=sn(h.x,h.y,d.x,d.y);let _,m;u<=f&&u<=g?(_={x:d.x-c.x,y:d.y-c.y},m=h):f<=g?(_={x:h.x-c.x,y:h.y-c.y},m=d):(_={x:d.x-h.x,y:d.y-h.y},m=c);const p=Ge(_.x,_.y),v=Mo(p.x,p.y,m.x,m.y)<0?-Math.PI/2:Math.PI/2,x={x:p.x*.5*s.scale,y:p.y*.5*s.scale},M=So(x.x,x.y,v),E=Math.abs(sn(p.x,p.y,m.x,m.y))>.5;let A;E?A=Mo(M.x,M.y,m.x,m.y)>0?Qs:Uo:A=Io,Fc(i,n,s.typeName,-3),i.push({pt1:{x:n.x,y:n.y,count:-3,last:!0},pt2:{x:n.x+M.x,y:n.y+M.y,count:0,last:!0},name:s.name,typeName:s.typeName,halfWidth:s.halfWidth,widthInTexture:s.widthInTexture,scale:s.scale,type:A,isAngled:!1,curveRadius:s.curveRadius})}function Ll(i,t,e){const n={x:t.x,y:t.y},s=i[e],r=Oc(i,n,e,s.typeName);if(r.length<3)return;const l=[He(s.pt1,n)?s.pt2:s.pt1,r[0].remotePt,r[1].remotePt,r[2].remotePt].map(g=>Ge(g.x-n.x,g.y-n.y));let c=2,d=0,h=1;for(let g=0;g<4;g++)for(let _=g+1;_<4;_++){const m=sn(l[g].x,l[g].y,l[_].x,l[_].y);m<c&&(c=m,d=g,h=_)}const u=Ge(l[d].x-l[h].x,l[d].y-l[h].y),f={x:u.x*.5*s.scale,y:u.y*.5*s.scale};Fc(i,n,s.typeName,-3),i.push({pt1:{x:n.x,y:n.y,count:-3,last:!0},pt2:{x:n.x+f.x,y:n.y+f.y,count:0,last:!0},name:s.name,typeName:s.typeName,halfWidth:s.halfWidth,widthInTexture:s.widthInTexture,scale:s.scale,type:Js,isAngled:!1,curveRadius:s.curveRadius})}function Pl(i,t,e){const n=i[t],s=i[e];if(n.isAngled)return;const r=Ge(n.pt2.x-n.pt1.x,n.pt2.y-n.pt1.y),o=Ge(s.pt2.x-s.pt1.x,s.pt2.y-s.pt1.y),a=sn(r.x,r.y,o.x,o.y),l=Mo(r.x,r.y,o.x,o.y),d=Math.acos(Math.max(-1,Math.min(1,a)))/(Math.PI/6);if(d<.9)return;const h=n.curveRadius*n.scale;let u,f,g,_,m=r,p=o;l>0?(u=n.pt1,f=n.pt2,g=s.pt1,_=s.pt2):(_=n.pt1,g=n.pt2,f=s.pt1,u=s.pt2,m=Ge(f.x-u.x,f.y-u.y),p=Ge(_.x-g.x,_.y-g.y));const v=m.y*h,x=-m.x*h,M=p.y*h,w=-p.x*h,E=u.x+v,A=u.y+x,L=f.x+v,y=f.y+x,S=g.x+M,I=g.y+w,z=_.x+M,P=_.y+w,W=L-E,X=y-A,Q=z-S,et=P-I,H=W*et-X*Q;if(Math.abs(H)<1e-6)return;const it=((S-E)*et-(I-A)*Q)/H,q=E+W*it,dt=A+X*it,Rt=q-M,_t=dt-w,V=q-v,tt=dt-x;if(sn(p.x,p.y,Rt-g.x,_t-g.y)<.5||sn(m.x,m.y,f.x-V,f.y-tt)<.5)return;const At=-Math.PI/6;let wt=Rt,U=_t;const Mt=Ge(g.x-Rt,g.y-_t),nt=-Mt.y*h,Ct=Mt.x*h,St=wt+nt,Ut=U+Ct,bt=Math.max(1,Math.floor(d));for(let kt=0;kt<bt;kt++){const te=wt-St,R=U-Ut,T=So(te,R,At),G=St+T.x,j=Ut+T.y,Z=Ge(wt-St,U-Ut),J=So(Z.x,Z.y,At),xt=-J.y,lt=J.x,at=G+xt*n.scale,Dt=j+lt*n.scale;i.push({pt1:{x:G,y:j,count:0,last:!0},pt2:{x:at,y:Dt,count:0,last:!0},name:n.name,typeName:n.typeName,halfWidth:n.halfWidth,widthInTexture:n.widthInTexture,scale:n.scale,type:Do,isAngled:!1,curveRadius:n.curveRadius}),wt=G,U=j}}function Bo(i){const t=document.getElementById("error-toast");t.textContent=i,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),5e3)}function Dl(i,t){var l,c,d,h;const e=i.heightMap,n=document.getElementById("panel"),s=document.getElementById("info-grid");n.style.display="block",document.getElementById("toolbar").style.display="flex";const r=[["Playable Area",`${t.playW} × ${t.playH}`],["Full Grid",`${e.width} × ${e.height}`],["Border",`${e.borderSize}`],["Height Range",`${t.minH} – ${t.maxH}`],["Objects",`${i.objects.filter(u=>!(u.flags&Ec)).length}${De.size>0?` (${De.size} W3D available)`:""}`],["Roads",`${Nc(i.objects).length} segments`],["Terrain Types",`${((l=i.blendTileData)==null?void 0:l.textureClasses.length)||0}`],["Water Areas",`${i.polygonTriggers.filter(u=>u.isWaterArea).length}`],["Textures",C.terrainAtlas?`Atlas ${C.terrainAtlas.atlasW}x${C.terrainAtlas.atlasH}`:Kt.size>0?"BIG loaded, textures missing":"Drop Terrain.big"],["Time of Day",["Morning","Afternoon","Evening","Night"][((c=i.lighting)==null?void 0:c.todIndex)??1]]];s.innerHTML=r.map(([u,f])=>`<span class="label">${u}</span><span class="value">${f}</span>`).join("");const o=document.getElementById("time-of-day");o.value=String(((d=i.lighting)==null?void 0:d.todIndex)??1);const a=document.getElementById("terrain-legend");if((h=i.blendTileData)!=null&&h.textureClasses){const u=i.blendTileData.textureClasses;a.innerHTML='<div style="color:#8b949e;font-size:12px;margin-bottom:6px">Terrain Types</div>'+u.map(f=>{const _="#"+wc(f.name).toString(16).padStart(6,"0"),m=f.name.replace(/\.tga$/i,"");return`<div class="item"><div class="swatch" style="background:${_}"></div>${m}</div>`}).join("")}}function P_(i){let t=0,e=i[t++]<<8|i[t++],n=!!(e&32768),s=n?4:3;e&256&&(t+=s);let r=0;n?r=i[t++]<<24|i[t++]<<16|i[t++]<<8|i[t++]:r=i[t++]<<16|i[t++]<<8|i[t++];const o=new Uint8Array(r);let a=0;for(;;){let l=i[t++];if(!(l&128)){let d=i[t++],h=l&3;for(;h--;)o[a++]=i[t++];let u=a-1-(((l&96)<<3)+d);h=((l&28)>>2)+3-1;do o[a++]=o[u++];while(h--);continue}if(!(l&64)){let d=i[t++],h=i[t++],u=d>>6;for(;u--;)o[a++]=i[t++];let f=a-1-(((d&63)<<8)+h);u=(l&63)+4-1;do o[a++]=o[f++];while(u--);continue}if(!(l&32)){let d=i[t++],h=i[t++],u=i[t++],f=l&3;for(;f--;)o[a++]=i[t++];let g=a-1-(((l&16)>>4<<16)+(d<<8)+h);f=((l&12)>>2<<8)+u+5-1;do o[a++]=o[g++];while(f--);continue}let c=((l&31)<<2)+4;if(c<=112){for(;c--;)o[a++]=i[t++];continue}for(c=l&3;c--;)o[a++]=i[t++];break}return o}async function D_(i){const t=new Uint8Array(i);if(t.length<8)return t;const e=String.fromCharCode(t[0],t[1],t[2],t[3]);if(e==="EAR\0")return P_(t.subarray(8));if(e.startsWith("ZL")&&t[3]===0)try{const n=t.subarray(8),s=new DecompressionStream("deflate"),a=new Blob([n]).stream().pipeThrough(s).getReader(),l=[];for(;;){const{done:u,value:f}=await a.read();if(u)break;l.push(f)}const c=l.reduce((u,f)=>u+f.length,0),d=new Uint8Array(c);let h=0;for(const u of l)d.set(u,h),h+=u.length;return d}catch(n){return Bo("Failed to decompress ZLib-compressed map: "+n.message),null}return t}class I_{constructor(t){t instanceof Uint8Array?(this.buffer=t.buffer,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.bytes=t):(this.buffer=t,this.view=new DataView(t),this.bytes=new Uint8Array(t)),this.pos=0}get eof(){return this.pos>=this.bytes.length}get remaining(){return this.bytes.length-this.pos}readUInt32(){const t=this.view.getUint32(this.pos,!0);return this.pos+=4,t}readInt32(){const t=this.view.getInt32(this.pos,!0);return this.pos+=4,t}readUInt16(){const t=this.view.getUint16(this.pos,!0);return this.pos+=2,t}readInt16(){const t=this.view.getInt16(this.pos,!0);return this.pos+=2,t}readFloat32(){const t=this.view.getFloat32(this.pos,!0);return this.pos+=4,t}readByte(){return this.bytes[this.pos++]}readBytes(t){const e=this.bytes.subarray(this.pos,this.pos+t);return this.pos+=t,e}readInt16Array(t){const e=new Int16Array(t);for(let n=0;n<t;n++)e[n]=this.view.getInt16(this.pos,!0),this.pos+=2;return e}readAsciiString(){const t=this.readUInt16();if(t===0)return"";const e=this.readBytes(t);let n="";for(let s=0;s<t;s++)n+=String.fromCharCode(e[s]);return n}readUnicodeString(){const t=this.readUInt16();if(t===0)return"";let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(this.readUInt16());return e}readDict(t){const e=this.readUInt16(),n={};for(let s=0;s<e;s++){const r=this.readInt32(),o=r&255,a=r>>>8,l=t[a]||`key_${a}`;switch(o){case 1:n[l]=!!this.readByte();break;case 2:n[l]=this.readInt32();break;case 3:n[l]=this.readFloat32();break;case 4:n[l]=this.readAsciiString();break;case 5:n[l]=this.readUnicodeString();break;default:throw new Error(`Unknown dict type ${o}`)}}return n}seek(t){this.pos=t}skip(t){this.pos+=t}tell(){return this.pos}}function U_(i){const t=new I_(i),e=t.readBytes(4);if(String.fromCharCode(e[0],e[1],e[2],e[3])!=="CkMp")throw new Error("Invalid map file: missing CkMp header");const n=t.readInt32(),s={};for(let o=0;o<n;o++){const a=t.readByte();let l="";for(let d=0;d<a;d++)l+=String.fromCharCode(t.readByte());const c=t.readUInt32();s[c]=l}const r={heightMap:null,blendTileData:null,objects:[],lighting:null,polygonTriggers:[],worldInfo:{}};for(;!t.eof&&t.remaining>=10;){const o=t.readUInt32(),a=t.readUInt16(),l=t.readInt32(),c=s[o]||`unknown_${o}`,h=t.tell()+l;try{c==="HeightMapData"?r.heightMap=N_(t,a):c==="BlendTileData"?r.blendTileData=O_(t,a,r.heightMap):c==="ObjectsList"?F_(t,a,h,s,r):c==="GlobalLighting"?r.lighting=z_(t,a):c==="PolygonTriggers"?k_(t,a,h,r):c==="WorldInfo"&&G_(t,a,h,s,r)}catch(u){console.warn(`Error parsing chunk '${c}':`,u)}t.seek(h)}return r}function N_(i,t){const e=i.readInt32(),n=i.readInt32();let s=0,r=[];if(t>=3&&(s=i.readInt32()),t>=4){const c=i.readInt32();for(let d=0;d<c;d++)r.push({x:i.readInt32(),y:i.readInt32()})}else r.push({x:e-2*s,y:n-2*s});const o=i.readInt32();if(o!==e*n)throw new Error(`Height data size mismatch: ${o} vs ${e}x${n}`);const a=i.readBytes(o),l=new Uint8Array(o);return l.set(a),{width:e,height:n,borderSize:s,boundaries:r,data:l}}function O_(i,t,e){if(!e)return null;const n=e.width*e.height,s=i.readInt32();s!==n&&console.warn(`Blend tile data size mismatch: ${s} vs ${n}`);const r=i.readInt16Array(s),o=i.readInt16Array(s);let a=null;if(t>=6&&(a=i.readInt16Array(s)),t>=5&&i.readInt16Array(s),t>=7){const p=Math.floor((e.width+1)/8),v=e.height*p;i.skip(v)}const l=i.readInt32(),c=i.readInt32();let d=1;t>=5&&(d=i.readInt32());const h=i.readInt32(),u=[];for(let p=0;p<h;p++){const v=i.readInt32(),x=i.readInt32(),M=i.readInt32();i.readInt32();const w=i.readAsciiString();u.push({firstTile:v,numTiles:x,width:M,name:w})}let f=0;const g=[];if(t>=4){i.readInt32(),f=i.readInt32();for(let p=0;p<f;p++){const v=i.readInt32(),x=i.readInt32(),M=i.readInt32(),w=i.readAsciiString();g.push({firstTile:v,numTiles:x,width:M,name:w})}}const _=2061107200,m=[null];for(let p=1;p<c;p++){const v=i.readInt32(),x=i.readByte(),M=i.readByte(),w=i.readByte(),E=i.readByte(),A=i.readByte();let L=0;t>=3&&(L=i.readByte());let y=-1;t>=4&&(y=i.readInt32());const S=i.readUInt32();S!==_&&console.warn(`Blend tile sentinel mismatch at index ${p}: 0x${S.toString(16)}`),m.push({blendNdx:v,horiz:x,vert:M,rightDiagonal:w,leftDiagonal:E,inverted:A,longDiagonal:L,customBlendEdgeClass:y})}if(t>=5)for(let p=1;p<d;p++)i.skip(38);return{tileNdxes:r,blendTileNdxes:o,extraBlendTileNdxes:a,numBitmapTiles:l,numBlendedTiles:c,blendedTiles:m,textureClasses:u,edgeTextureClasses:g}}function F_(i,t,e,n,s){for(;i.tell()<e&&i.remaining>=10;){const r=i.readUInt32(),o=i.readUInt16(),a=i.readInt32(),l=n[r]||"",c=i.tell()+a;if(l==="Object")try{const d=B_(i,o,n);d&&s.objects.push(d)}catch(d){console.warn("Error parsing object:",d)}i.seek(c)}}function B_(i,t,e){const n=i.readFloat32(),s=i.readFloat32(),r=i.readFloat32(),o=i.readFloat32(),a=i.readInt32(),l=i.readAsciiString();let c={};if(t>=2)try{c=i.readDict(e)}catch{}return t<=2?{x:n,y:s,z:0,angle:o,flags:a,name:l,dict:c}:{x:n,y:s,z:r,angle:o,flags:a,name:l,dict:c}}function z_(i,t){try{let s=function(){return{ambient:{r:i.readFloat32(),g:i.readFloat32(),b:i.readFloat32()},diffuse:{r:i.readFloat32(),g:i.readFloat32(),b:i.readFloat32()},lightPos:{x:i.readFloat32(),y:i.readFloat32(),z:i.readFloat32()}}};var e=s;const n=i.readInt32(),r=[];for(let a=0;a<4;a++){const l=s(),c=s();let d=null,h=null,u=null,f=null;t>=2&&(d=s(),h=s()),t>=3&&(u=s(),f=s()),r.push({terrainLights:[l,u,f].filter(Boolean),objectLights:[c,d,h].filter(Boolean)})}const o=Math.max(0,Math.min(3,(n||1)-1));return{timeOfDay:n,todIndex:o,entries:r,...r[o]}}catch{return null}}function k_(i,t,e,n){try{const s=i.readInt32();for(let r=0;r<s&&i.tell()<e;r++){const o={};o.name=i.readAsciiString(),o.id=i.readInt32(),o.isWaterArea=!1,o.isRiver=!1,t>=2&&(o.isWaterArea=!!i.readByte()),t>=3&&(o.isRiver=!!i.readByte(),o.riverStart=i.readInt32());const a=i.readInt32();o.points=[];for(let l=0;l<a;l++)o.points.push({x:i.readInt32(),y:i.readInt32(),z:i.readInt32()});n.polygonTriggers.push(o)}}catch{}}function G_(i,t,e,n,s){try{s.worldInfo=i.readDict(n)}catch{}}const Fe=Object.freeze({AICMD_MOVE_TO_POSITION:0,AICMD_MOVE_TO_OBJECT:1,AICMD_IDLE:5,AICMD_FOLLOW_WAYPOINT_PATH:6,AICMD_FOLLOW_PATH:9,AICMD_ATTACK_OBJECT:12,AICMD_FORCE_ATTACK_OBJECT:13,AICMD_ATTACK_POSITION:15,AICMD_ATTACKMOVE_TO_POSITION:16,AICMD_GUARD_POSITION:30,AICMD_GUARD_OBJECT:31,AICMD_FOLLOW_PATH_APPEND:50}),jt=Object.freeze({AI_IDLE:0,AI_MOVE_TO:1,AI_FOLLOW_PATH:6,AI_WAIT:8,AI_ATTACK_POSITION:9,AI_ATTACK_OBJECT:10,AI_FORCE_ATTACK_OBJECT:11,AI_DEAD:13,AI_GUARD:16,AI_ATTACK_MOVE_TO:30,AI_MOVE_OUT_OF_THE_WAY:85}),rn=Object.freeze({CMD_FROM_PLAYER:0,CMD_FROM_SCRIPT:1,CMD_FROM_AI:2});class yi{constructor(t,e){this.cmd=t,this.cmdSource=e,this.pos=null,this.targetId=null,this.intValue=0}}function H_(){if(!C.messageStream)return;const i=C.messageStream.consumeMessages();for(const t of i)switch(t.getType()){case Te.MSG_DO_MOVETO:V_(t);break;case Te.MSG_ADD_WAYPOINT:X_(t);break;case Te.MSG_DO_ATTACKMOVETO:Y_(t);break;case Te.MSG_DO_STOP:Il();break;case Te.MSG_DO_ATTACK_OBJECT:q_(t);break;case Te.MSG_DO_GUARD_POSITION:$_(t);break;case Te.MSG_DO_SCATTER:Il();break}}function V_(i,t){const e=i.getArgument(0);if(!e)return;const n=e.location,s=C.selectedUnits.filter(r=>r.ai&&r.isMobile());if(s.length!==0){if(s.length===1){s[0].ai.aiMoveToPosition(n,rn.CMD_FROM_PLAYER);return}if(C.pathfinder&&C.pathfinder.grid)for(const r of s)C.pathfinder.grid.clearUnitGoal(r.id);s.sort((r,o)=>{const a=or(r.position,n),l=or(o.position,n);return a-l});for(const r of s){const o=Bc(r,n,s);C.pathfinder&&C.pathfinder.grid&&C.pathfinder.grid.updateUnitGoal(r.id,o.x,o.z),r.ai.aiMoveToPosition(o,rn.CMD_FROM_PLAYER)}}}function Bc(i,t,e){let n=0,s=0;for(const d of e)n+=d.position.x,s+=d.position.z;n/=e.length,s/=e.length;let r=i.position.x-n,o=i.position.z-s;const a=50,l=Math.sqrt(r*r+o*o);l>a&&(r=r/l*a,o=o/l*a);const c={x:t.x+r,y:t.y||0,z:t.z+o};return W_(i,c)}function W_(i,t,e){const n=C.pathfinder?C.pathfinder.grid:null;if(!n)return t;const s=i.ai?i.ai.locomotor.collisionRadius:5,{radius:r,centerInCell:o}=n.getRadiusAndCenter(s),a=n.worldToCell(t.x,t.z);if(Ki(n,a.x,a.y,i.id,r,o))return t;const l=400;let c=0,d=a.x,h=a.y;for(let u=1;c<l;u++){for(let f=0;f<u&&c<l;f++)if(d++,c++,Ki(n,d,h,i.id,r,o)){const g=n.cellToWorld(d,h);return{x:g.x,y:t.y,z:g.z}}for(let f=0;f<u&&c<l;f++)if(h--,c++,Ki(n,d,h,i.id,r,o)){const g=n.cellToWorld(d,h);return{x:g.x,y:t.y,z:g.z}}u++;for(let f=0;f<u&&c<l;f++)if(d--,c++,Ki(n,d,h,i.id,r,o)){const g=n.cellToWorld(d,h);return{x:g.x,y:t.y,z:g.z}}for(let f=0;f<u&&c<l;f++)if(h++,c++,Ki(n,d,h,i.id,r,o)){const g=n.cellToWorld(d,h);return{x:g.x,y:t.y,z:g.z}}}return t}function Ki(i,t,e,n,s,r){if(t<0||t>=i.width||e<0||e>=i.height||!i.checkMovementBlock(t,e,n,s,r))return!1;const o=e*i.width+t,a=i.unitGoal[o];return!(a!==0&&a!==n)}function X_(i,t){const e=i.getArgument(0);if(!e)return;const n=e.location;for(const s of C.selectedUnits)!s.ai||!s.isMobile()||s.ai.queueWaypoint(n)}function Y_(i){const t=i.getArgument(0);if(!t)return;const e=t.location,n=C.selectedUnits.filter(s=>s.ai&&s.isMobile());if(n.length<=1){for(const s of n)s.ai.aiAttackMoveToPosition(e,rn.CMD_FROM_PLAYER);return}if(C.pathfinder&&C.pathfinder.grid)for(const s of n)C.pathfinder.grid.clearUnitGoal(s.id);n.sort((s,r)=>or(s.position,e)-or(r.position,e));for(const s of n){const r=Bc(s,e,n);C.pathfinder&&C.pathfinder.grid&&C.pathfinder.grid.updateUnitGoal(s.id,r.x,r.z),s.ai.aiAttackMoveToPosition(r,rn.CMD_FROM_PLAYER)}}function Il(){for(const i of C.selectedUnits)i.ai&&i.ai.aiIdle(rn.CMD_FROM_PLAYER)}function q_(i){const t=i.getArgument(0);if(!t)return;const e=t.objectId,n=C.units.get(e);if(n)for(const s of C.selectedUnits)!s.ai||!s.isMobile()||s.ai.aiMoveToPosition(n.position,rn.CMD_FROM_PLAYER)}function $_(i){const t=i.getArgument(0);if(!t)return;const e=t.location;for(const n of C.selectedUnits)n.ai&&n.ai.aiGuardPosition(e,rn.CMD_FROM_PLAYER)}function or(i,t){const e=i.x-t.x,n=i.z-t.z;return e*e+n*n}const ye=Object.freeze({CELL_CLEAR:0,CELL_WATER:1,CELL_CLIFF:2,CELL_RUBBLE:3,CELL_OBSTACLE:4,CELL_IMPASSABLE:5}),Zi=Object.freeze({NO_UNITS:0,UNIT_GOAL:1,UNIT_PRESENT_MOVING:2,UNIT_PRESENT_FIXED:3}),j_=.6,to=15,Ul=25,Nl=8;class K_{constructor(){this.cells=null,this.width=0,this.height=0,this.zones=null,this.nextZoneId=1,this.unitPos=null,this.unitGoal=null,this.unitPresence=null}buildFromHeightmap(t,e,n){const s=t,r=s.width,o=s.height,a=s.borderSize,l=r-2*a,c=o-2*a;this.playH=c,this.width=Math.floor(l*$t/Zt),this.height=Math.floor(c*$t/Zt);const d=this.width*this.height;this.cells=new Uint8Array(d),this.cells.fill(ye.CELL_CLEAR),this.unitPos=new Int32Array(d),this.unitGoal=new Int32Array(d),this.unitPresence=new Uint8Array(d),this._unitPosCell=new Map,this._unitGoalCell=new Map;for(let h=0;h<this.height;h++)for(let u=0;u<this.width;u++){const f=u*Zt+Zt/2,g=h*Zt+Zt/2,_=(c-1)*$t-g,m=this.classifyCell(f,_,s,a);this.cells[h*this.width+u]=m}n&&this.classifyObjectFootprints(n,c),this.buildZones()}classifyCell(t,e,n,s){const r=t/$t+s,o=n.height-1-s-e/$t,a=Math.floor(r),l=Math.floor(o);if(a<0||l<0||a>=n.width-1||l>=n.height-1)return ye.CELL_IMPASSABLE;const c=n.data[l*n.width+a]*$e,d=n.data[l*n.width+(a+1)]*$e,h=n.data[(l+1)*n.width+a]*$e,u=n.data[(l+1)*n.width+(a+1)]*$e,f=Math.max(c,d,h,u),g=Math.min(c,d,h,u);return(f-g)/Zt>j_?ye.CELL_CLIFF:ye.CELL_CLEAR}classifyObjectFootprints(t,e){let n=0,s=0;for(const r of t){const o=r.name.toLowerCase(),a=ei.get(o),l=sr.get(o);if(a){if(a.has("MINE")||a.has("PROJECTILE")||a.has("BRIDGE_TOWER")||!a.has("STRUCTURE"))continue}else if(!this._looksLikeStructure(o))continue;if(l&&l.isSmall)continue;let c="CYLINDER",d=to,h=to;l?(c=l.type,d=l.majorRadius||to,h=l.minorRadius||d):a&&(a.has("HUGE")||a.has("TECH_BUILDING")||a.has("SUPPLY_SOURCE")?(d=Ul,h=Ul):a.has("DEFENSIVE_WALL")&&(d=Nl,h=Nl));const u=r.x,f=(e-1)*$t-r.y;n++,c==="BOX"?s+=this._markBoxFootprint(u,f,d,h,r.angle||0):s+=this._markCircularFootprint(u,f,d)}console.log(`Pathfind obstacles: ${n} objects, ${s} cells marked`)}_looksLikeStructure(t){return t.includes("commandcenter")||t.includes("barracks")||t.includes("warfactory")||t.includes("airfield")||t.includes("supplyc")||t.includes("supplystash")||t.includes("palace")||t.includes("bunker")||t.includes("tunnel")||t.includes("techbuilding")||t.includes("stinger")||t.includes("patriot")||t.includes("gattling")||t.includes("tower")||t.includes("hackinternet")||t.includes("stratcenter")||t.includes("particlecannon")||t.includes("nucmissile")||t.includes("scudstorm")}_markBoxFootprint(t,e,n,s,r){const o=Zt*.5,a=Math.cos(r),l=Math.sin(r),c=Math.ceil(2*n/o),d=Math.ceil(2*s/o),h=t-n*a-s*l,u=e+s*a-n*l,f=2*n*a/Math.max(c,1),g=-(2*n*l)/Math.max(c,1),_=2*s*l/Math.max(d,1),m=2*s*a/Math.max(d,1);let p=0;const v=new Set;for(let x=0;x<=d;x++)for(let M=0;M<=c;M++){const w=h+f*M+_*x,E=u+g*M+m*x,A=Math.floor((w+.5)/Zt),L=Math.floor((E+.5)/Zt);if(A<0||A>=this.width||L<0||L>=this.height)continue;const y=L*this.width+A;v.has(y)||(v.add(y),this.cells[y]=ye.CELL_OBSTACLE,p++)}return p}_markCircularFootprint(t,e,n){const s=t/Zt,r=e/Zt,o=n/Zt+.4,a=o*o,l=Math.floor(.5+(t-n)/Zt)-1,c=Math.floor(.5+(e-n)/Zt)-1,d=l+Math.ceil(2*o)+2,h=c+Math.ceil(2*o)+2;let u=0;for(let f=c;f<h;f++)for(let g=l;g<d;g++){if(g<0||g>=this.width||f<0||f>=this.height)continue;const _=g+.5-s,m=f+.5-r;_*_+m*m<=a&&(this.cells[f*this.width+g]=ye.CELL_OBSTACLE,u++)}return u}updateUnitPos(t,e,n,s){const r=this.worldToCell(e,n);if(r.x<0||r.x>=this.width||r.y<0||r.y>=this.height){this.clearUnitPos(t);return}const o=r.y*this.width+r.x,a=this._unitPosCell.get(t),l=s?Zi.UNIT_PRESENT_MOVING:Zi.UNIT_PRESENT_FIXED;a===o&&this.unitPresence[o]===l||(this.clearUnitPos(t),this.unitPos[o]=t,this.unitPresence[o]=l,this._unitPosCell.set(t,o))}updateUnitGoal(t,e,n){const s=this.worldToCell(e,n);if(s.x<0||s.x>=this.width||s.y<0||s.y>=this.height){this.clearUnitGoal(t);return}const r=s.y*this.width+s.x;this._unitGoalCell.get(t)!==r&&(this.clearUnitGoal(t),this.unitGoal[r]=t,this._unitGoalCell.set(t,r))}clearUnitPos(t){const e=this._unitPosCell.get(t);e!==void 0&&(this.unitPos[e]===t&&(this.unitPos[e]=0,this.unitPresence[e]=Zi.NO_UNITS),this._unitPosCell.delete(t))}clearUnitGoal(t){const e=this._unitGoalCell.get(t);e!==void 0&&(this.unitGoal[e]===t&&(this.unitGoal[e]=0),this._unitGoalCell.delete(t))}removeUnitFromGrid(t){this.clearUnitPos(t),this.clearUnitGoal(t)}getRadiusAndCenter(t){let n=2*t;n>Zt&&n<2*Zt&&(n=2*Zt);let s=Math.floor(n/Zt+.3),r=!1;return s===0&&(s=1),s&1&&(r=!0),s=Math.floor(s/2),s>2&&(s=2,r=!0),{radius:s,centerInCell:r}}checkMovementBlock(t,e,n,s,r){const o=r?s+1:s;for(let a=e-s;a<e+o;a++)for(let l=t-s;l<t+o;l++){if(l<0||l>=this.width||a<0||a>=this.height)return!1;const c=a*this.width+l,d=this.cells[c];if(d===ye.CELL_OBSTACLE||d===ye.CELL_IMPASSABLE||d===ye.CELL_CLIFF)return!1;const h=this.unitPos[c];if(h!==0&&h!==n&&this.unitPresence[c]===Zi.UNIT_PRESENT_FIXED)return!1}return!0}isCellPassableForUnit(t,e,n){if(t<0||t>=this.width||e<0||e>=this.height)return!1;const s=e*this.width+t,r=this.cells[s];if(r===ye.CELL_OBSTACLE||r===ye.CELL_IMPASSABLE||r===ye.CELL_CLIFF)return!1;const o=this.unitPos[s];return!(o!==0&&o!==n&&this.unitPresence[s]===Zi.UNIT_PRESENT_FIXED)}buildZones(){this.zones=new Int32Array(this.width*this.height),this.zones.fill(0),this.nextZoneId=1;for(let t=0;t<this.height;t++)for(let e=0;e<this.width;e++){const n=t*this.width+e;this.zones[n]===0&&this.isCellPassable(this.cells[n])&&this.floodFillZone(e,t,this.nextZoneId++)}}floodFillZone(t,e,n){const s=[[t,e]];for(;s.length>0;){const[r,o]=s.pop();if(r<0||r>=this.width||o<0||o>=this.height)continue;const a=o*this.width+r;this.zones[a]===0&&this.isCellPassable(this.cells[a])&&(this.zones[a]=n,s.push([r+1,o],[r-1,o],[r,o+1],[r,o-1]))}}isCellPassable(t){return t===ye.CELL_CLEAR||t===ye.CELL_RUBBLE}getCell(t,e){return t<0||t>=this.width||e<0||e>=this.height?ye.CELL_IMPASSABLE:this.cells[e*this.width+t]}getZone(t,e){return t<0||t>=this.width||e<0||e>=this.height?0:this.zones[e*this.width+t]}worldToCell(t,e){return{x:Math.floor(t/Zt),y:Math.floor(e/Zt)}}cellToWorld(t,e){return{x:t*Zt+Zt/2,z:e*Zt+Zt/2}}}class Ol{constructor(t,e,n){this.pos={x:t,y:e,z:n},this.next=null,this.prev=null,this.nextOptimized=null,this.canOptimize=!0}}class Z_{constructor(){this.head=null,this.tail=null,this.currentNode=null,this.nodeCount=0}prependNode(t,e,n){const s=new Ol(t,e,n);return this.head?(s.next=this.head,this.head.prev=s,this.head=s):(this.head=s,this.tail=s),this.nodeCount++,s}appendNode(t,e,n){const s=new Ol(t,e,n);return this.tail?(s.prev=this.tail,this.tail.next=s,this.tail=s):(this.head=s,this.tail=s),this.nodeCount++,s}optimize(t,e=0,n=!1,s=0){if(!this.head||this.nodeCount<2){this.head&&(this.head.nextOptimized=null,this.currentNode=this.head);return}let r=this.head;for(this.currentNode=this.head;r&&r.next;){let o=r.next,a=r.next.next;for(;a&&o.canOptimize;){if(t&&J_(t,r.pos,a.pos,e,n,s))o=a;else break;a=a.next}r.nextOptimized=o;const l=o.pos.x-r.pos.x,c=o.pos.z-r.pos.z;r.nextOptDist=Math.sqrt(l*l+c*c),r.nextOptDist>.001?(r.nextOptDirX=l/r.nextOptDist,r.nextOptDirZ=c/r.nextOptDist):(r.nextOptDirX=0,r.nextOptDirZ=0),r=o}r&&(r.nextOptimized=null)}getStart(){return this.head}}function J_(i,t,e,n,s,r=0){const o=i.worldToCell(t.x,t.z),a=i.worldToCell(e.x,e.z);let l=o.x,c=o.y;const d=a.x,h=a.y,u=Math.abs(d-l),f=Math.abs(h-c),g=l<d?1:-1,_=c<h?1:-1;let m=u-f;for(;;){if(!i.checkMovementBlock(l,c,r,n,s))return!1;if(l===d&&c===h)break;const p=2*m;p>-f&&(m-=f,l+=g),p<u&&(m+=u,c+=_)}return!0}const Ji=[{dx:1,dy:0,cost:Kn},{dx:0,dy:1,cost:Kn},{dx:-1,dy:0,cost:Kn},{dx:0,dy:-1,cost:Kn},{dx:1,dy:1,cost:ts},{dx:-1,dy:1,cost:ts},{dx:-1,dy:-1,cost:ts},{dx:1,dy:-1,cost:ts}],Q_=1,t0=2,e0=4;class n0{constructor(){this.reset()}reset(){this.totalCost=1/0,this.costSoFar=0,this.parentX=-1,this.parentY=-1,this.parentDir=-1,this.onOpen=!1,this.onClosed=!1}}class i0{constructor(){this.data=[]}push(t){this.data.push(t),this._bubbleUp(this.data.length-1)}pop(){const t=this.data[0],e=this.data.pop();return this.data.length>0&&(this.data[0]=e,this._sinkDown(0)),t}get size(){return this.data.length}clear(){this.data.length=0}_bubbleUp(t){const e=this.data[t];for(;t>0;){const n=t-1>>1,s=this.data[n];if(e.totalCost>=s.totalCost)break;this.data[n]=e,this.data[t]=s,t=n}}_sinkDown(t){const e=this.data.length,n=this.data[t];for(;;){let s=2*t+1,r=2*t+2,o=t;if(s<e&&this.data[s].totalCost<this.data[o].totalCost&&(o=s),r<e&&this.data[r].totalCost<this.data[o].totalCost&&(o=r),o===t)break;this.data[t]=this.data[o],this.data[o]=n,t=o}}}class s0{constructor(t){this.grid=t,this.pathQueue=[],this.cellInfoPool=new Map,this.openList=new i0}queueForPath(t){this.pathQueue.includes(t)||this.pathQueue.push(t)}processPathfindQueue(){let t=gl;for(;this.pathQueue.length>0&&t>0;){const e=this.pathQueue.shift(),n=C.units.get(e);!n||!n.ai||!n.ai.waitingForPath||(n.ai.doPathfind(this),t-=500)}}findPath(t,e,n){const s=this.grid;if(!s)return null;const r=s.worldToCell(t.x,t.z),o=s.worldToCell(e.x,e.z),a=n?n.id:0,l=n&&n.ai?n.ai.locomotor.collisionRadius:5,{radius:c,centerInCell:d}=s.getRadiusAndCenter(l);let h=s.getZone(r.x,r.y);const u=s.getZone(o.x,o.y);if(h===0){const f=this._findNearestPassableCell(r.x,r.y);if(!f)return null;r=f,h=s.getZone(f.x,f.y)}return h!==u||h===0?this.findClosestPath(t,e,n,r,o,c,d):this.internalFindPath(r,o,t,e,a,c,d)}findClosestPath(t,e,n,s,r,o,a){const l=this.grid,c=l.getZone(s.x,s.y);let d=1/0,h=r.x,u=r.y;const f=20;for(let p=-f;p<=f;p++)for(let v=-f;v<=f;v++){const x=r.x+v,M=r.y+p;if(l.getZone(x,M)===c){const w=v*v+p*p;w<d&&(d=w,h=x,u=M)}}if(d===1/0)return null;const g={x:h,y:u},_=l.cellToWorld(h,u),m=n?n.id:0;return this.internalFindPath(s,g,t,{x:_.x,y:0,z:_.z},m,o,a)}internalFindPath(t,e,n,s,r=0,o=0,a=!1){const l=this.grid;this.cellInfoPool.clear(),this.openList.clear();const c=(f,g)=>{const _=g*l.width+f;let m=this.cellInfoPool.get(_);return m||(m=new n0,this.cellInfoPool.set(_,m)),m},d=c(t.x,t.y);d.costSoFar=0,d.totalCost=Fl(t.x,t.y,e.x,e.y),d.onOpen=!0,this.openList.push({x:t.x,y:t.y,totalCost:d.totalCost});let h=0;const u=gl;for(;this.openList.size>0&&h<u;){const f=this.openList.pop(),g=f.x,_=f.y,m=c(g,_);if(!m.onClosed){if(m.onClosed=!0,m.onOpen=!1,h++,g===e.x&&_===e.y)return this.buildActualPath(c,t,e,n,s,o,a,r);for(let p=0;p<8;p++){const v=g+Ji[p].dx,x=_+Ji[p].dy;if(v<0||v>=l.width||x<0||x>=l.height||!l.checkMovementBlock(v,x,r,o,a)||p>=4&&(!l.checkMovementBlock(g+Ji[p].dx,_,r,o,a)||!l.checkMovementBlock(g,_+Ji[p].dy,r,o,a)))continue;const M=c(v,x);if(M.onClosed)continue;let w=Ji[p].cost;const E=x*l.width+v;if(l.unitPresence[E]!==0&&l.unitPos[E]!==r&&(w+=Kn*3),m.parentDir>=0){const L=Math.abs(p-m.parentDir),y=Math.min(L,8-L);y===1?w+=Q_:y===2?w+=t0:y>=3&&(w+=e0)}const A=m.costSoFar+w;(A<M.costSoFar||!M.onOpen)&&(M.costSoFar=A,M.totalCost=A+Fl(v,x,e.x,e.y),M.parentX=g,M.parentY=_,M.parentDir=p,M.onOpen=!0,this.openList.push({x:v,y:x,totalCost:M.totalCost}))}}}return null}buildActualPath(t,e,n,s,r,o,a,l=0){const c=this.grid,d=new Z_;let h=n.x,u=n.y;const f=new Set;for(;!(h===e.x&&u===e.y);){const g=u*c.width+h;if(f.has(g))break;f.add(g);const _=c.cellToWorld(h,u),m=Bl(_.x,_.z);d.prependNode(_.x,m,_.z);const p=t(h,u);if(p.parentX<0)break;h=p.parentX,u=p.parentY}return d.prependNode(s.x,s.y,s.z),d.tail&&r&&(d.tail.pos.x=r.x,d.tail.pos.z=r.z,d.tail.pos.y=Bl(r.x,r.z)),d.optimize(c,o,a,l),d}_findNearestPassableCell(t,e){const n=this.grid;for(let s=1;s<=10;s++)for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++){if(Math.abs(o)!==s&&Math.abs(r)!==s)continue;const a=t+o,l=e+r;if(!(a<0||a>=n.width||l<0||l>=n.height)&&n.getZone(a,l)>0)return{x:a,y:l}}return null}isLinePassable(t,e,n,s,r,o=0){const a=t.worldToCell(e.x,e.z),l=t.worldToCell(n.x,n.z);let c=a.x,d=a.y;const h=l.x,u=l.y,f=Math.abs(h-c),g=Math.abs(u-d),_=c<h?1:-1,m=d<u?1:-1;let p=f-g;for(;;){if(!t.checkMovementBlock(c,d,o,s,r))return!1;if(c===h&&d===u)break;const v=2*p;v>-g&&(p-=g,c+=_),v<f&&(p+=f,d+=m)}return!0}getMoveAwayFromPath(t,e){const n=this.grid;if(!n)return null;const s=t.position,r=e.position,o=s.x-r.x,a=s.z-r.z,l=Math.sqrt(o*o+a*a);if(l<.001)return null;const c=o/l,d=a/l,h=t.ai?t.ai.locomotor.collisionRadius:5,{radius:u,centerInCell:f}=n.getRadiusAndCenter(h),g=Zt*2;for(let _=g;_<=g*4;_+=g){const m=[{x:s.x+c*_,z:s.z+d*_},{x:s.x+d*_,z:s.z-c*_},{x:s.x-d*_,z:s.z+c*_}];for(const p of m){const v=n.worldToCell(p.x,p.z);if(n.checkMovementBlock(v.x,v.y,t.id,u,f)){const x=n.worldToCell(s.x,s.z),M=v;return this.internalFindPath(x,M,s,{x:p.x,y:s.y,z:p.z},t.id,u,f)}}}return null}}function Fl(i,t,e,n){const s=Math.abs(i-e),r=Math.abs(t-n);return Kn*(s+r)+(ts-2*Kn)*Math.min(s,r)}function Bl(i,t){try{return Cc(i,t)}catch{return 0}}class r0{constructor(t){this.aiUpdate=t,this.currentState=jt.AI_IDLE,this.goalPosition=null,this.goalObjectId=null}setState(t){this.currentState=t,this.onEnterState(t)}getState(){return this.currentState}clear(){const t=this.aiUpdate;t.currentPath=null,t.waitingForPath=!1,t.requestedDestination=null,t.locomotor.stop(),this.currentState=jt.AI_IDLE,this.goalPosition=null,this.goalObjectId=null}onEnterState(t){const e=this.aiUpdate;switch(t){case jt.AI_MOVE_TO:e.requestPath(this.goalPosition);break;case jt.AI_ATTACK_MOVE_TO:e.requestPath(this.goalPosition);break;case jt.AI_IDLE:e.onIdle();break;case jt.AI_MOVE_OUT_OF_THE_WAY:e.requestPath(this.goalPosition);break}}update(t){switch(this.aiUpdate,this.currentState){case jt.AI_IDLE:break;case jt.AI_MOVE_TO:this.updateMoveTo(t);break;case jt.AI_ATTACK_MOVE_TO:this.updateMoveTo(t);break;case jt.AI_GUARD:break;case jt.AI_DEAD:break;case jt.AI_MOVE_OUT_OF_THE_WAY:this.updateMoveOutOfTheWay(t);break}}updateMoveOutOfTheWay(t){const e=this.aiUpdate;if(e.moveOutOfWayTimer--,e.moveOutOfWayTimer<=0){e.currentPath=null,e.locomotor.stop(),this.setState(jt.AI_IDLE);return}if(e.waitingForPath)return;if(!e.currentPath){this.setState(jt.AI_IDLE);return}e.locomotor.followPath(e.currentPath,e.unit,t)&&(e.currentPath=null,this.setState(jt.AI_IDLE))}updateMoveTo(t){const e=this.aiUpdate;if(e.waitingForPath)return;if(!e.currentPath){this.setState(jt.AI_IDLE);return}if(e.locomotor.followPath(e.currentPath,e.unit,t))if(e.currentPath=null,e.executingWaypointQueue&&e.waypointIndex<e.waypointCount){const s=e.waypointQueue[e.waypointIndex++];this.goalPosition=s,e.requestPath(s)}else e.executingWaypointQueue=!1,this.setState(jt.AI_IDLE)}}const Hn=Object.freeze({LOCO_LEGS:0,LOCO_WHEELS:1,LOCO_TREADS:2,LOCO_HOVER:3,LOCO_THRUST:4,LOCO_WINGS:5}),o0=4,a0=8,zl=5,l0=5;class c0{constructor(t){this.unit=t,this.appearance=this.inferAppearance(t),this.maxSpeed=yg,this.turnRate=Eg*Math.PI/180,this.acceleration=Tg,this.braking=Ag,this.currentSpeed=0,this.currentPathNode=null,this.stopped=!0,this.collisionRadius=this.inferCollisionRadius(t),this.velocityX=0,this.velocityZ=0}inferAppearance(t){return t.kindOf?t.kindOf.has("AIRCRAFT")?Hn.LOCO_WINGS:t.kindOf.has("VEHICLE")||t.kindOf.has("HUGE_VEHICLE")?Hn.LOCO_TREADS:(t.kindOf.has("INFANTRY"),Hn.LOCO_LEGS):Hn.LOCO_LEGS}inferCollisionRadius(t){return t.kindOf?t.kindOf.has("INFANTRY")?o0:t.kindOf.has("VEHICLE")||t.kindOf.has("HUGE_VEHICLE")?a0:zl:zl}stop(){this.currentSpeed=0,this.currentPathNode=null,this.stopped=!0,this.velocityX=0,this.velocityZ=0}followPath(t,e,n){if(!t||!t.head)return!0;this.currentPathNode||(this.currentPathNode=t.head,this.stopped=!1,this.currentPathNode.nextOptimized?this.currentPathNode=this.currentPathNode.nextOptimized:this.currentPathNode.next&&(this.currentPathNode=this.currentPathNode.next));const s=this.currentPathNode;if(!s)return!0;const r=e.position,o=s.pos.x-r.x,a=s.pos.z-r.z,l=Math.sqrt(o*o+a*a);if(l<3)return s.nextOptimized?(this.currentPathNode=s.nextOptimized,!1):s.next?(this.currentPathNode=s.next,!1):(this.stop(),!0);const d=Math.atan2(o,a);let h=d-e.rotation;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;const u=this.turnRate*n;if(Math.abs(h)>u?e.rotation+=Math.sign(h)*u:e.rotation=d,e.ai.blockedFrames>0)this.currentSpeed*=.5,this.currentSpeed<1&&(this.currentSpeed=0),this.velocityX=Math.sin(e.rotation)*this.currentSpeed,this.velocityZ=Math.cos(e.rotation)*this.currentSpeed,r.x+=this.velocityX*n,r.z+=this.velocityZ*n;else{let g=1;const _=Math.abs(h)/Math.PI;this.appearance===Hn.LOCO_TREADS||this.appearance===Hn.LOCO_WHEELS?g=Math.max(.3,1-_*.7):g=Math.max(.5,1-_*.5);const m=this.currentSpeed*this.currentSpeed/(2*this.braking),v=l<m+5?Math.max(5,this.maxSpeed*(l/(m+5))):this.maxSpeed*g;this.currentSpeed<v?this.currentSpeed=Math.min(v,this.currentSpeed+this.acceleration*n):this.currentSpeed=Math.max(v,this.currentSpeed-this.braking*n),this.velocityX=Math.sin(e.rotation)*this.currentSpeed,this.velocityZ=Math.cos(e.rotation)*this.currentSpeed;const x=r.x+this.velocityX*n,M=r.z+this.velocityZ*n;if(this.checkGridCollision(x,M)){const w=!this.checkGridCollision(x,r.z),E=!this.checkGridCollision(r.x,M);w&&!E?r.x=x:E&&!w?r.z=M:(this.currentSpeed*=.1,e.ai.blockedFrames++,e.ai.isBlocked=!0)}else r.x=x,r.z=M}try{r.y=Cc(r.x,r.z)}catch{}return!1}checkGridCollision(t,e){const n=C.pathfinder;if(!n||!n.grid)return!1;const s=n.grid,{radius:r,centerInCell:o}=s.getRadiusAndCenter(this.collisionRadius),a=s.worldToCell(t,e);return!s.checkMovementBlock(a.x,a.y,this.unit.id,r,o)}}function h0(){const i=[];for(const t of C.units.values())t.ai&&t.isMobile()&&t.mesh.visible&&i.push(t);for(let t=0;t<i.length;t++){const e=i[t],n=e.ai.locomotor.collisionRadius;for(let s=t+1;s<i.length;s++){const r=i[s],o=r.ai.locomotor.collisionRadius,a=r.position.x-e.position.x,l=r.position.z-e.position.z,c=a*a+l*l,d=n+o;if(c>=d*d)continue;let h=Math.sqrt(c),u=a,f=l;if(h<1){h=1;const M=(e.id*7+r.id*13)%100/100*Math.PI*2;u=Math.cos(M),f=Math.sin(M)}const g=d-h,_=-Math.min(g,l0),m=_*u/h,p=_*f/h,v=!e.ai.locomotor.stopped,x=!r.ai.locomotor.stopped;e.position.x+=m*.5,e.position.z+=p*.5,r.position.x-=m*.5,r.position.z-=p*.5,v&&!x&&(e.ai.isBlocked=!0,e.ai.blockedFrames===0&&(e.ai.blockedFrames=1)),x&&!v&&(r.ai.isBlocked=!0,r.ai.blockedFrames===0&&(r.ai.blockedFrames=1))}}}let Cn=null;function u0(i){Cn=i}class d0{constructor(t){this.unit=t,this.stateMachine=new r0(this),this.locomotor=new c0(t),this.currentPath=null,this.waitingForPath=!1,this.requestedDestination=null,this.lastCommandSource=rn.CMD_FROM_PLAYER,this.waypointQueue=new Array(_l),this.waypointCount=0,this.waypointIndex=0,this.executingWaypointQueue=!1,this.blockedFrames=0,this.isBlocked=!1,this.isBlockedAndStuck=!1,this.repathCooldown=0,this.moveOutOfWayTimer=0,this._savedState=null,this._savedGoal=null}aiDoCommand(t){switch(t.cmd){case Fe.AICMD_MOVE_TO_POSITION:this.privateMoveToPosition(t.pos,t.cmdSource);break;case Fe.AICMD_IDLE:this.privateIdle(t.cmdSource);break;case Fe.AICMD_ATTACK_OBJECT:this.privateAttackObject(t.targetId,t.cmdSource);break;case Fe.AICMD_FORCE_ATTACK_OBJECT:this.privateForceAttackObject(t.targetId,t.cmdSource);break;case Fe.AICMD_ATTACKMOVE_TO_POSITION:this.privateAttackMoveToPosition(t.pos,t.cmdSource);break;case Fe.AICMD_GUARD_POSITION:this.privateGuardPosition(t.pos,t.cmdSource);break;case Fe.AICMD_FOLLOW_PATH_APPEND:this.privateFollowPathAppend(t.pos,t.cmdSource);break}}aiMoveToPosition(t,e){const n=new yi(Fe.AICMD_MOVE_TO_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiIdle(t){const e=new yi(Fe.AICMD_IDLE,t||rn.CMD_FROM_PLAYER);this.aiDoCommand(e)}aiAttackMoveToPosition(t,e){const n=new yi(Fe.AICMD_ATTACKMOVE_TO_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiAttackObject(t,e){const n=new yi(Fe.AICMD_ATTACK_OBJECT,e);n.targetId=t,this.aiDoCommand(n)}aiGuardPosition(t,e){const n=new yi(Fe.AICMD_GUARD_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiFollowPathAppend(t,e){const n=new yi(Fe.AICMD_FOLLOW_PATH_APPEND,e);n.pos={...t},this.aiDoCommand(n)}aiMoveAwayFromUnit(t){if(this.unit.isMobile()&&!(this.lastCommandSource===rn.CMD_FROM_PLAYER&&this.stateMachine.getState()!==jt.AI_IDLE)&&Cn){const e=Cn.getMoveAwayFromPath(this.unit,t);if(e){this.stateMachine.clear(),this.currentPath=e,this.waitingForPath=!1,this.blockedFrames=0,this.isBlocked=!1,this.moveOutOfWayTimer=300,this.stateMachine.currentState=jt.AI_MOVE_OUT_OF_THE_WAY;return}}}privateMoveToPosition(t,e){this.unit.isMobile()&&(this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.blockedFrames=0,this.isBlocked=!1,this.lastCommandSource=e,this.executingWaypointQueue=!1,this.waypointCount=0,this.stateMachine.setState(jt.AI_MOVE_TO))}privateIdle(t){this.stateMachine.clear(),this.currentPath=null,this.waitingForPath=!1,this.lastCommandSource=t,this.executingWaypointQueue=!1,this.locomotor.stop()}privateAttackObject(t,e){this.lastCommandSource=e,this.stateMachine.goalObjectId=t,this.stateMachine.setState(jt.AI_ATTACK_OBJECT)}privateForceAttackObject(t,e){this.lastCommandSource=e,this.stateMachine.goalObjectId=t,this.stateMachine.setState(jt.AI_FORCE_ATTACK_OBJECT)}privateAttackMoveToPosition(t,e){this.unit.isMobile()&&(this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.blockedFrames=0,this.isBlocked=!1,this.lastCommandSource=e,this.executingWaypointQueue=!1,this.waypointCount=0,this.stateMachine.setState(jt.AI_ATTACK_MOVE_TO))}privateGuardPosition(t,e){this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.lastCommandSource=e,this.stateMachine.setState(jt.AI_GUARD)}privateFollowPathAppend(t,e){this.unit.isMobile()&&(this.queueWaypoint(t),this.lastCommandSource=e)}queueWaypoint(t){return this.waypointCount<_l?(this.waypointQueue[this.waypointCount++]={...t},!0):!1}clearWaypointQueue(){this.waypointCount=0,this.waypointIndex=0,this.executingWaypointQueue=!1}executeWaypointQueue(){if(this.waypointCount>0){this.waypointIndex=0,this.executingWaypointQueue=!0;const t=this.waypointQueue[this.waypointIndex++];this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.stateMachine.setState(jt.AI_MOVE_TO)}}requestPath(t){t&&(this.requestedDestination={...t},this.waitingForPath=!0,this.currentPath=null,Cn&&Cn.queueForPath(this.unit.id))}doPathfind(t){if(!this.requestedDestination){this.waitingForPath=!1;return}const e=this.unit.position,n=this.requestedDestination,s=t.findPath(e,n,this.unit);this.currentPath=s,this.waitingForPath=!1,this.requestedDestination=null}onIdle(){this.locomotor.stop()}update(t){this.updateGridOccupancy(),this.handleBlocked(),this.stateMachine.update(t),this.unit.syncMeshFromPosition(),this.repathCooldown>0&&this.repathCooldown--}updateGridOccupancy(){if(!Cn||!Cn.grid)return;const t=Cn.grid,e=!this.locomotor.stopped;t.updateUnitPos(this.unit.id,this.unit.position.x,this.unit.position.z,e),this.stateMachine.goalPosition&&t.updateUnitGoal(this.unit.id,this.stateMachine.goalPosition.x,this.stateMachine.goalPosition.z)}handleBlocked(){this.blockedFrames>15&&this.blockedFrames<=30&&this.askBlockerToMove(),this.blockedFrames>30&&this.repathCooldown<=0&&(this.isBlockedAndStuck=!0,this.stateMachine.goalPosition&&this.stateMachine.getState()!==jt.AI_IDLE&&(this.blockedFrames=0,this.isBlocked=!1,this.isBlockedAndStuck=!1,this.repathCooldown=60,this.requestPath(this.stateMachine.goalPosition)))}askBlockerToMove(){const t=this.unit.position,e=this.locomotor.collisionRadius;let n=1/0,s=null;for(const r of C.units.values()){if(r.id===this.unit.id||!r.ai||!r.isMobile()||!r.ai.locomotor.stopped)continue;const o=t.x-r.position.x,a=t.z-r.position.z,l=Math.sqrt(o*o+a*a),c=e+r.ai.locomotor.collisionRadius;l<c*1.5&&l<n&&(n=l,s=r)}s&&s.ai.stateMachine.getState()===jt.AI_IDLE&&s.ai.aiMoveAwayFromUnit(this.unit)}}let ar=!1;function f0(){if(ar)return;C.messageStream=new kg,l_();for(const t of C.units.values())t.isMobile()&&(t.ai=new d0(t));const i=C.currentMapData;if(i&&i.heightMap){const t=new K_;t.buildFromHeightmap(i.heightMap,i.waterAreas||[],i.objects||[]),C.pathfinder=new s0(t),u0(C.pathfinder),console.log(`Pathfinding grid: ${t.width}x${t.height} cells, ${t.nextZoneId-1} zones`)}ar=!0,console.log(`Game systems initialized: ${C.units.size} units (${p0()} mobile)`)}function p0(){let i=0;for(const t of C.units.values())t.isMobile()&&i++;return i}function m0(i){if(ar){d_(),H_(),C.pathfinder&&C.pathfinder.processPathfindQueue(),h0();for(const t of C.units.values())t.ai&&(t.ai.isBlocked?t.ai.blockedFrames++:t.ai.blockedFrames=0,t.ai.isBlocked=!1,t.ai.update(i));a_()}}function g0(){ar=!1,C.messageStream=null,C.pathfinder=null,C.selectedUnits.length=0,C.hotkeySquads.fill(null)}let yo=0;function _0(){const i=document.getElementById("canvas");C.renderer=new lg({canvas:i,antialias:!0}),C.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.renderer.setSize(window.innerWidth,window.innerHeight),C.renderer.setClearColor(7048366),C.renderer.shadowMap.enabled=!0,C.renderer.shadowMap.type=Kc,C.renderer.toneMapping=gn,C.renderer.outputColorSpace=vn,C.scene=new cg,C.scene.fog=new Lo(7048366,12e-5),C.camera=new ke(50,window.innerWidth/window.innerHeight,1,5e4),E_(C.renderer.domElement),window.addEventListener("resize",()=>{C.camera.aspect=window.innerWidth/window.innerHeight,C.camera.updateProjectionMatrix(),C.renderer.setSize(window.innerWidth,window.innerHeight)}),yo=performance.now(),zc()}function zc(){requestAnimationFrame(zc);const i=performance.now(),t=Math.min((i-yo)/1e3,.1);yo=i,T_(),m0(t),C.renderer.render(C.scene,C.camera)}function rs(i){const t=i instanceof Uint8Array?i:new Uint8Array(i),e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=t[0],s=t[1],r=t[2],o=e.getInt16(12,!0),a=e.getInt16(14,!0),l=t[16],c=t[17];if(s!==0)throw new Error("Indexed TGA not supported");const d=Math.floor((l+7)/8);if(d<3||d>4)throw new Error(`Unsupported pixel depth: ${l}`);const h=!!(r&8);if((r&7)!==2)throw new Error(`Unsupported image type: ${r}`);const u=!!(c&32);let f=18+n;const g=new Uint8Array(o*a*4);if(h){let _=0;for(;_<o*a;){const m=t[f++],p=(m&127)+1;if(m&128){const v=t[f++],x=t[f++],M=t[f++],w=d===4?t[f++]:255;for(let E=0;E<p;E++){const A=_++*4;g[A]=M,g[A+1]=x,g[A+2]=v,g[A+3]=w}}else for(let v=0;v<p;v++){const x=_++*4;g[x]=t[f+2],g[x+1]=t[f+1],g[x+2]=t[f],g[x+3]=d===4?t[f+3]:255,f+=d}}}else for(let _=0;_<o*a;_++){const m=_*4;g[m]=t[f+2],g[m+1]=t[f+1],g[m+2]=t[f],g[m+3]=d===4?t[f+3]:255,f+=d}if(u){const _=o*4,m=new Uint8Array(_);for(let p=0;p<Math.floor(a/2);p++){const v=p*_,x=(a-1-p)*_;m.set(g.subarray(v,v+_)),g.set(g.subarray(x,x+_),v),g.set(m,x)}}return{width:o,height:a,pixels:g}}function x0(i){const t=i.blendTileData;if(!t||Kt.size===0)return null;const e=[];let n=0,s=0,r=0;function o(g){const _=Dg(g.name);if(!_){console.warn(`Texture not found for "${g.name}" (tried INI mapping, exact, and fuzzy)`),r++;return}const m=Ac(_);if(!m){r++;return}let p;try{p=rs(m)}catch(w){console.warn(`Failed to parse TGA ${_}:`,w);return}const v=Math.floor(p.width/de),x=Math.floor(p.height/de),M=Math.min(v*x,g.numTiles);for(let w=0;w<x&&w*v<M;w++)for(let E=0;E<v&&w*v+E<M;E++){const A=E+v*w,L=g.firstTile+A,y=new Uint8Array(de*de*4);for(let S=0;S<de;S++){const z=((w*de+S)*p.width+E*de)*4,P=S*de*4;y.set(p.pixels.subarray(z,z+de*4),P)}e[L]=y,L>n&&(n=L)}}for(const g of t.textureClasses)o(g),s++;for(const g of t.edgeTextureClasses||[])o(g),s++;if(console.log(`Texture classes: ${s-r} loaded, ${r} missing`),n===0)return null;const a=n+1,l=Math.ceil(Math.sqrt(a)),c=l*de,h=Math.ceil(a/l)*de,u=new Uint8Array(c*h*4);for(let g=0;g<u.length;g+=4)u[g]=128,u[g+1]=128,u[g+2]=96,u[g+3]=255;const f=[];for(let g=0;g<=n;g++){const _=g%l,m=Math.floor(g/l),p=_*de,v=m*de;if(f[g]={x:p,y:v},e[g])for(let x=0;x<de;x++){const M=x*de*4,w=((v+x)*c+p)*4;u.set(e[g].subarray(M,M+de*4),w)}}return console.log(`Atlas built: ${c}x${h}, ${a} tiles, ${l} per row`),{atlasPixels:u,atlasW:c,atlasH:h,tilePositions:f}}function eo(i,t,e){const n=i>>2,s=i&3,r=s&1,o=s>>1&1,a=e.tilePositions[n];if(!a)return[0,0];const l=de/2,c=a.x+(r?l:0),d=a.y+(o?l:0),h=.5,u=(c+h)/e.atlasW,f=(c+l-h)/e.atlasW,g=(d+h)/e.atlasH,_=(d+l-h)/e.atlasH;switch(t){case 0:return[u,g];case 1:return[f,g];case 2:return[f,_];case 3:return[u,_]}}function v0(i,t){const e=Oo(t);return new xn({fog:!0,lights:!0,wireframe:!1,side:ve,uniforms:cc.merge([ot.fog,ot.lights,{terrainAtlas:{value:i},ambientColor:{value:e.ambientColor},numLights:{value:e.numLights},diffuseColor0:{value:e.diffuseColors[0]},diffuseColor1:{value:e.diffuseColors[1]},diffuseColor2:{value:e.diffuseColors[2]},lightDir0:{value:e.lightDirs[0]},lightDir1:{value:e.lightDirs[1]},lightDir2:{value:e.lightDirs[2]}}]),vertexShader:`
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
    `,fragmentShader:`
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
    `})}function lr(i){const t=i instanceof Uint8Array?i:new Uint8Array(i),e=new DataView(t.buffer,t.byteOffset,t.byteLength);if(e.getUint32(0,!0)!==542327876)throw new Error("Not a DDS file");const s=e.getUint32(12,!0),r=e.getUint32(16,!0),o=e.getUint32(80,!0),a=String.fromCharCode(t[84],t[85],t[86],t[87]),l=4,c=64,d=1,u=t.subarray(128);if(o&l){if(a==="DXT1")return S0(u,r,s);if(a==="DXT3")return y0(u,r,s);if(a==="DXT5")return E0(u,r,s);throw new Error("Unsupported DDS FourCC: "+a)}if(o&c){const f=e.getUint32(88,!0),g=e.getUint32(92,!0),_=e.getUint32(96,!0),m=e.getUint32(100,!0),p=o&d?e.getUint32(104,!0):0;return M0(u,r,s,f,g,_,m,p)}throw new Error("Unsupported DDS pixel format")}function M0(i,t,e,n,s,r,o,a){const l=n/8,c=new Uint8Array(t*e*4);new DataView(i.buffer,i.byteOffset,i.byteLength);function d(_){if(!_)return{shift:0,bits:0};let m=0,p=_;for(;p&&!(p&1);)m++,p>>=1;let v=0;for(;p&1;)v++,p>>=1;return{shift:m,bits:v}}const h=d(s),u=d(r),f=d(o),g=d(a);for(let _=0;_<t*e;_++){let m=0;const p=_*l;for(let A=0;A<l;A++)m|=i[p+A]<<A*8;const v=h.bits?(m>>h.shift&(1<<h.bits)-1)*255/((1<<h.bits)-1):0,x=u.bits?(m>>u.shift&(1<<u.bits)-1)*255/((1<<u.bits)-1):0,M=f.bits?(m>>f.shift&(1<<f.bits)-1)*255/((1<<f.bits)-1):0,w=g.bits?(m>>g.shift&(1<<g.bits)-1)*255/((1<<g.bits)-1):255,E=_*4;c[E]=v,c[E+1]=x,c[E+2]=M,c[E+3]=w}return{width:t,height:e,pixels:c}}function Ni(i){return[(i>>11&31)*255/31|0,(i>>5&63)*255/63|0,(i&31)*255/31|0]}function S0(i,t,e){const n=new Uint8Array(t*e*4),s=t+3>>2,r=e+3>>2;let o=0;for(let a=0;a<r;a++)for(let l=0;l<s;l++){const c=i[o]|i[o+1]<<8,d=i[o+2]|i[o+3]<<8,h=Ni(c),u=Ni(d),f=[h,u];c>d?(f[2]=[(2*h[0]+u[0])/3|0,(2*h[1]+u[1])/3|0,(2*h[2]+u[2])/3|0],f[3]=[(h[0]+2*u[0])/3|0,(h[1]+2*u[1])/3|0,(h[2]+2*u[2])/3|0]):(f[2]=[(h[0]+u[0])/2|0,(h[1]+u[1])/2|0,(h[2]+u[2])/2|0],f[3]=[0,0,0]);const g=i[o+4]|i[o+5]<<8|i[o+6]<<16|i[o+7]<<24;for(let _=0;_<4;_++)for(let m=0;m<4;m++){const p=l*4+m,v=a*4+_;if(p>=t||v>=e)continue;const x=(v*t+p)*4,M=g>>(_*4+m)*2&3;n[x]=f[M][0],n[x+1]=f[M][1],n[x+2]=f[M][2],n[x+3]=c<=d&&M===3?0:255}o+=8}return{width:t,height:e,pixels:n}}function y0(i,t,e){const n=new Uint8Array(t*e*4),s=t+3>>2,r=e+3>>2;let o=0;for(let a=0;a<r;a++)for(let l=0;l<s;l++){const c=[];for(let m=0;m<8;m++)c.push(i[o+m]);o+=8;const d=i[o]|i[o+1]<<8,h=i[o+2]|i[o+3]<<8,u=Ni(d),f=Ni(h),g=[u,f,[(2*u[0]+f[0])/3|0,(2*u[1]+f[1])/3|0,(2*u[2]+f[2])/3|0],[(u[0]+2*f[0])/3|0,(u[1]+2*f[1])/3|0,(u[2]+2*f[2])/3|0]],_=i[o+4]|i[o+5]<<8|i[o+6]<<16|i[o+7]<<24;for(let m=0;m<4;m++)for(let p=0;p<4;p++){const v=l*4+p,x=a*4+m;if(v>=t||x>=e)continue;const M=(x*t+v)*4,w=_>>(m*4+p)*2&3;n[M]=g[w][0],n[M+1]=g[w][1],n[M+2]=g[w][2];const E=m*4+p,A=c[E>>1];n[M+3]=(E&1?A>>4:A&15)*17}o+=8}return{width:t,height:e,pixels:n}}function E0(i,t,e){const n=new Uint8Array(t*e*4),s=t+3>>2,r=e+3>>2;let o=0;for(let a=0;a<r;a++)for(let l=0;l<s;l++){const c=i[o],d=i[o+1],h=[c,d];if(c>d)for(let x=1;x<=6;x++)h.push(((6-x)*c+x*d+3)/7|0);else{for(let x=1;x<=4;x++)h.push(((4-x)*c+x*d+2)/5|0);h.push(0,255)}let u=0n;for(let x=0;x<6;x++)u|=BigInt(i[o+2+x])<<BigInt(x*8);o+=8;const f=i[o]|i[o+1]<<8,g=i[o+2]|i[o+3]<<8,_=Ni(f),m=Ni(g),p=[_,m,[(2*_[0]+m[0])/3|0,(2*_[1]+m[1])/3|0,(2*_[2]+m[2])/3|0],[(_[0]+2*m[0])/3|0,(_[1]+2*m[1])/3|0,(_[2]+2*m[2])/3|0]],v=i[o+4]|i[o+5]<<8|i[o+6]<<16|i[o+7]<<24;for(let x=0;x<4;x++)for(let M=0;M<4;M++){const w=l*4+M,E=a*4+x;if(w>=t||E>=e)continue;const A=(E*t+w)*4,L=v>>(x*4+M)*2&3;n[A]=p[L][0],n[A+1]=p[L][1],n[A+2]=p[L][2];const y=x*4+M;n[A+3]=h[Number(u>>BigInt(y*3)&7n)]}o+=8}return{width:t,height:e,pixels:n}}function T0(i){const t=i.pt1,e=i.pt2.x-i.pt1.x,n=i.pt2.y-i.pt1.y,s=rr(e,n);let r,o,a,l;s<.01?(r=1,o=0,a=0,l=1):(r=e/s,o=n/s,a=-o,l=r);const c=i.scale,d=i.widthInTexture;let h,u,f,g,_;switch(i.type){case tn:{h=0,u=85/512,f=c,g=c;const m=i.halfWidth;_={bl:{x:i.pt1.x-a*m,y:i.pt1.y-l*m},tl:{x:i.pt1.x+a*m,y:i.pt1.y+l*m},br:{x:i.pt2.x-a*m,y:i.pt2.y-l*m},tr:{x:i.pt2.x+a*m,y:i.pt2.y+l*m}};break}case Io:case Js:{h=425/512,u=i.type===Js?425/512:255/512,f=c,g=c;const m=c*Sg/2,p=d*c/2,v=p+m,x=t.x-r*p,M=t.y-o*p;_={bl:{x:x-a*m,y:M-l*m},br:{x:x+r*v-a*m,y:M+o*v-l*m},tr:{x:x+r*v+a*m,y:M+o*v+l*m},tl:{x:x+a*m,y:M+l*m}};break}case Do:{h=4/512,u=i.curveRadius===fo?425/512:255/512,f=c,g=c;const m=d*c/2,p=r*c,v=o*c,x=a*m,M=l*m;if(i.curveRadius===fo){let w=t.x-x,E=t.y-M,A=w+p*.5,L=E+v*.5,y=A+2*x,S=L+2*M,I=w+2*x,z=E+2*M;A+=p*.1+x*.2,L+=v*.1+M*.2,w-=x*.1+p*.02,E-=M*.1+v*.02,I-=p*.02,z-=v*.02,y-=p*.4,S-=v*.4,y+=x*.2,S+=M*.2,_={bl:{x:w,y:E},br:{x:A,y:L},tr:{x:y,y:S},tl:{x:I,y:z}}}else{let w=t.x-x,E=t.y-M,A=w+p,L=E+v,y=A+2*x,S=L+2*M,I=w+2*x,z=E+2*M;A+=p*.1+x*.4,L+=v*.1+M*.4,w-=x*.2+p*.02,E-=M*.2+v*.02,I-=p*.02,z-=v*.02,y-=p*.4,S-=v*.4,y+=x*.4,S+=M*.4,_={bl:{x:w,y:E},br:{x:A,y:L},tr:{x:y,y:S},tl:{x:I,y:z}}}break}case Tc:{h=255/512,u=226/512,f=c,g=c;const m=c,p=r*m*1.59,v=o*m*1.59,x=a*m,M=l*m,w=t.x+x*.29-p*.5,E=t.y+M*.29-v*.5;_={tl:{x:w,y:E},bl:{x:w-x*1.08,y:E-M*1.08},br:{x:w-x*1.08+p,y:E-M*1.08+v},tr:{x:w+p,y:E+v}};break}case Uo:case Qs:{h=202/512,u=364/512,f=c,g=c;const m=c,p=r*m,v=o*m;let x=a*m*1.35,M=l*m*1.35;const w=i.type===Qs,E=w?.2:.8,A=t.x-x*E-p*d/2,L=t.y-M*E-v*d/2,y=p*d/2+p*1.2,S=v*d/2+v*1.2;_={bl:{x:A,y:L},br:{x:A+y,y:L+S},tr:{x:A+y+x,y:L+S+M},tl:{x:A+x,y:L+M}},w&&(x=-x,M=-M);break}default:return null}return{corners:_,uOff:h,vOff:u,uScale:f,vScale:g,loc:t,rvx:r,rvy:o,rnx:a,rny:l}}function A0(i,t){const e=T0(i);if(!e)return null;const{corners:n,uOff:s,vOff:r,uScale:o,vScale:a,loc:l,rvx:c,rvy:d,rnx:h,rny:u}=e,f=rr((n.br.x-n.bl.x+n.tr.x-n.tl.x)/2,(n.br.y-n.bl.y+n.tr.y-n.tl.y)/2),g=rr((n.tl.x-n.bl.x+n.tr.x-n.br.x)/2,(n.tl.y-n.bl.y+n.tr.y-n.br.y)/2),_=Math.max(2,Math.ceil(f/$t)+1),m=Math.max(2,Math.ceil(g/$t)+1),p=[],v=[],x=[];for(let M=0;M<_;M++){const w=M/(_-1);for(let E=0;E<m;E++){const A=E/(m-1),L=n.bl.x*(1-w)*(1-A)+n.br.x*w*(1-A)+n.tl.x*(1-w)*A+n.tr.x*w*A,y=n.bl.y*(1-w)*(1-A)+n.br.y*w*(1-A)+n.tl.y*(1-w)*A+n.tr.y*w*A,S=No(L,y)+vg;p.push(L,S,(t-1)*$t-y);const I=L-l.x,z=y-l.y;v.push(s+sn(c,d,I,z)/(o*4),r-sn(h,u,I,z)/(a*4))}}for(let M=0;M<_-1;M++)for(let w=0;w<m-1;w++){const E=M*m+w;x.push(E,E+1,E+m,E+1,E+m+1,E+m)}return{positions:p,uvs:v,indices:x}}function kc(i,t){if(!i)return null;const e=t&&t.flipDDS,n=i.replace(/\.[^.]+$/,"").toLowerCase(),s=n.includes("/")?n.split("/").pop():n,r=[i,n+".dds",n+".tga","art/textures/"+i,"art/textures/"+n+".dds","art/textures/"+n+".tga","art/textures/"+s+".dds","art/textures/"+s+".tga"];for(const o of r){const a=ti(o);if(a)try{const l=new Uint8Array(a.buffer,a.offset,a.size),c=a.size>4&&l[0]===68&&l[1]===68&&l[2]===83&&l[3]===32,d=c?lr(l):rs(l),h=new Zs(d.pixels,d.width,d.height,Pe);return e&&c&&(h.flipY=!0),h.wrapS=fn,h.wrapT=fn,h.magFilter=Ae,h.minFilter=qe,h.generateMipmaps=!0,h.needsUpdate=!0,h}catch(l){console.warn("Failed to load texture:",o,l)}}if(s)for(const[o]of Kt){const a=o.replace(/\.[^.]+$/,"");if((a.includes("/")?a.split("/").pop():a)===s){const c=Kt.get(o);try{const d=new Uint8Array(c.buffer,c.offset,c.size),h=c.size>4&&d[0]===68&&d[1]===68&&d[2]===83&&d[3]===32,u=h?lr(d):rs(d),f=new Zs(u.pixels,u.width,u.height,Pe);return e&&h&&(f.flipY=!0),f.wrapS=fn,f.wrapT=fn,f.magFilter=Ae,f.minFilter=qe,f.generateMipmaps=!0,f.needsUpdate=!0,f}catch{}}}return null}function b0(i,t){if(!i)return null;const e=t&&t.flipDDS,n=i.replace(/\.[^.]+$/,"").toLowerCase(),s=n.includes("/")?n.split("/").pop():n,r=[i,n+".dds",n+".tga","art/textures/"+i,"art/textures/"+n+".dds","art/textures/"+n+".tga","art/textures/"+s+".dds","art/textures/"+s+".tga"];function o(a,l){const c=a.pixels;for(let h=0;h<c.length;h+=4){const u=c[h]*.299+c[h+1]*.587+c[h+2]*.114;c[h+3]=Math.min(255,u*2|0)}const d=new Zs(c,a.width,a.height,Pe);return e&&l&&(d.flipY=!0),d.wrapS=fn,d.wrapT=fn,d.magFilter=Ae,d.minFilter=qe,d.generateMipmaps=!0,d.needsUpdate=!0,d}for(const a of r){const l=ti(a);if(l)try{const c=new Uint8Array(l.buffer,l.offset,l.size),d=l.size>4&&c[0]===68&&c[1]===68&&c[2]===83&&c[3]===32;return o(d?lr(c):rs(c),d)}catch(c){console.warn("Failed to load luminance-alpha texture:",a,c)}}if(s)for(const[a]of Kt){const l=a.replace(/\.[^.]+$/,"");if((l.includes("/")?l.split("/").pop():l)===s){const d=Kt.get(a);try{const h=new Uint8Array(d.buffer,d.offset,d.size),u=d.size>4&&h[0]===68&&h[1]===68&&h[2]===83&&h[3]===32;return o(u?lr(h):rs(h),u)}catch{}}}return null}const w0=[tn,Do,Io,Js,Tc,Uo,Qs];function C0(i,t,e){if(!i||i.length===0)return null;const n=t-2*e,s=new Map;for(const c of i){const d=c.typeName+"|"+c.type;s.has(d)||s.set(d,{typeName:c.typeName,segType:c.type,segs:[]}),s.get(d).segs.push(c)}const r=new Map;function o(c){if(r.has(c))return r.get(c);const d=hs.get(c),h=d&&d.texture?kc(d.texture):null;return r.set(c,h),h}const a=new nn;let l=10;for(const c of w0){for(const[,d]of s){if(d.segType!==c)continue;const h=[],u=[],f=[];let g=0;for(const x of d.segs){const M=A0(x,n);if(M){h.push(...M.positions),u.push(...M.uvs);for(const w of M.indices)f.push(w+g);g+=M.positions.length/3}}if(h.length===0)continue;const _=new Ke;_.setAttribute("position",new Me(h,3)),_.setAttribute("uv",new Me(u,2)),_.setIndex(f),_.computeVertexNormals();const m=o(d.typeName),p=new Pn({color:m?16777215:6710886,map:m||null,transparent:!0,alphaTest:m?.1:0,depthWrite:!1,side:ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),v=new be(_,p);v.receiveShadow=!0,v.castShadow=!1,v.renderOrder=l,a.add(v)}l++}return a.children.length>0?a:null}const R0=0,L0=31,P0=2,D0=3,I0=32,U0=48,N0=49,O0=50,F0=56,B0=41,z0=59,k0=72,kl=74,G0=256,H0=257,V0=258,W0=1792,X0=1793,Y0=1794,q0=1796,$0=14,j0=8960,K0=8961,Z0=8962,J0=8963,Q0=1,tx=4080,ex=4096,nx=16777216,ix=16711680,sx=131072,rx=2;function Gl(i){const t=new DataView(i),e=[];let n=null,s=null;function r(d,h,u){let f=d;for(;f+8<=h;){const g=t.getUint32(f,!0),m=t.getUint32(f+4,!0)&2147483647,p=f+8,v=Math.min(p+m,h);f=v,u(g,p,v,m)}}function o(d,h){let u="";for(let f=0;f<h;f++){const g=t.getUint8(d+f);if(g===0)break;u+=String.fromCharCode(g)}return u}function a(d,h){const u={name:"",attrs:0,vertices:null,normals:null,triangles:null,uvs:null,vertexColors:null,textureNames:[],numVerts:0,numTris:0,boneLinks:null,shaders:null};function f(m,p){r(m,p,(v,x,M,w)=>{v===N0&&r(x,M,(E,A,L,y)=>{E===O0&&u.textureNames.push(o(A,y))})})}function g(m,p){r(m,p,(v,x,M,w)=>{if(v===kl&&!u.uvs){const E=w/8;u.numVerts&&E!==u.numVerts&&console.warn(`W3D "${u.name}": UV count (${E}) != vertex count (${u.numVerts})`),u.uvs=new Float32Array(E*2);for(let A=0;A<E;A++)u.uvs[A*2]=t.getFloat32(x+A*8,!0),u.uvs[A*2+1]=t.getFloat32(x+A*8+4,!0)}})}function _(m,p){r(m,p,(v,x,M,w)=>{if(v===k0)g(x,M);else if(v===kl&&!u.uvs){const E=w/8;u.numVerts&&E!==u.numVerts&&console.warn(`W3D "${u.name}": UV count (${E}) != vertex count (${u.numVerts})`),u.uvs=new Float32Array(E*2);for(let A=0;A<E;A++)u.uvs[A*2]=t.getFloat32(x+A*8,!0),u.uvs[A*2+1]=t.getFloat32(x+A*8+4,!0)}else if(v===z0&&!u.vertexColors){const E=Math.min(w/4,u.numVerts||w/4);u.vertexColors=new Float32Array(E*4);for(let A=0;A<E;A++)u.vertexColors[A*4]=t.getUint8(x+A*4)/255,u.vertexColors[A*4+1]=t.getUint8(x+A*4+1)/255,u.vertexColors[A*4+2]=t.getUint8(x+A*4+2)/255,u.vertexColors[A*4+3]=t.getUint8(x+A*4+3)/255}})}return r(d,h,(m,p,v,x)=>{switch(m){case L0:{u.attrs=t.getUint32(p+4,!0),u.name=o(p+8,16),u.numTris=t.getUint32(p+40,!0),u.numVerts=t.getUint32(p+44,!0);break}case P0:{const M=Math.min(x/12,u.numVerts||x/12);u.vertices=new Float32Array(M*3);for(let w=0;w<M;w++)u.vertices[w*3]=t.getFloat32(p+w*12,!0),u.vertices[w*3+1]=t.getFloat32(p+w*12+4,!0),u.vertices[w*3+2]=t.getFloat32(p+w*12+8,!0);break}case D0:{const M=Math.min(x/12,u.numVerts||x/12);u.normals=new Float32Array(M*3);for(let w=0;w<M;w++)u.normals[w*3]=t.getFloat32(p+w*12,!0),u.normals[w*3+1]=t.getFloat32(p+w*12+4,!0),u.normals[w*3+2]=t.getFloat32(p+w*12+8,!0);break}case I0:{const M=Math.min(x/32,u.numTris||x/32);u.triangles=new Uint32Array(M*3);for(let w=0;w<M;w++)u.triangles[w*3]=t.getUint32(p+w*32,!0),u.triangles[w*3+1]=t.getUint32(p+w*32+4,!0),u.triangles[w*3+2]=t.getUint32(p+w*32+8,!0);break}case $0:{const M=Math.min(x/8,u.numVerts||x/8);u.boneLinks=new Uint16Array(M);for(let w=0;w<M;w++)u.boneLinks[w]=t.getUint16(p+w*8,!0);break}case B0:{const M=Math.floor(x/16);u.shaders=[];for(let w=0;w<M;w++){const E=p+w*16;u.shaders.push({depthMask:t.getUint8(E+1),destBlend:t.getUint8(E+3),srcBlend:t.getUint8(E+7),alphaTest:t.getUint8(E+12)})}break}case U0:f(p,v);break;case F0:case j0:case K0:case Z0:case J0:_(p,v);break}}),u}function l(d,h){const u={name:"",pivots:[]};return r(d,h,(f,g,_,m)=>{if(f===H0)u.name=o(g+4,16),u.numPivots=t.getUint32(g+20,!0);else if(f===V0){const p=Math.floor(m/60);for(let v=0;v<p;v++){const x=g+v*60;u.pivots.push({name:o(x,16),parentIdx:t.getUint32(x+16,!0),translation:[t.getFloat32(x+20,!0),t.getFloat32(x+24,!0),t.getFloat32(x+28,!0)],rotation:[t.getFloat32(x+44,!0),t.getFloat32(x+48,!0),t.getFloat32(x+52,!0),t.getFloat32(x+56,!0)]})}}}),u}function c(d,h){const u={name:"",hierarchy:"",lods:[]};return r(d,h,(f,g,_,m)=>{if(f===X0)u.name=o(g+8,16),u.hierarchy=o(g+24,16);else if(f===Y0){const p=[];r(g,_,(v,x,M,w)=>{v===q0&&p.push({boneIdx:t.getUint32(x,!0),name:o(x+4,w-4)})}),u.lods.push(p)}}),u}return r(0,i.byteLength,(d,h,u)=>{d===R0?e.push(a(h,u)):d===G0?n=l(h,u):d===W0&&(s=c(h,u))}),{meshes:e,hierarchy:n,hlod:s}}const Xn=new Map,Jn=new Map;function ox(i){if(!i.vertices||!i.triangles)return null;const t=new Ke;t.setAttribute("position",new Me(i.vertices,3)),i.normals&&t.setAttribute("normal",new Me(i.normals,3)),i.uvs&&t.setAttribute("uv",new Me(i.uvs,2));const e=!!i.vertexColors;if(e){const c=i.vertexColors,d=new Float32Array(c.length/4*3);for(let h=0;h<c.length/4;h++)d[h*3]=c[h*4],d[h*3+1]=c[h*4+1],d[h*3+2]=c[h*4+2];t.setAttribute("color",new Me(d,3))}t.setIndex(new ae(i.triangles,1)),i.normals||t.computeVertexNormals();const n=!!(i.attrs&nx),s=i.name.toLowerCase(),r=s.includes("light")||s.includes("glow")||s.includes("muzzle")||s.includes("fxfire")||s.includes("flame")||s.includes("beacon");let o;const a=i.textureNames[0];if(a){const c=r?lx(a):ax(a);if(c)if(r)o=new jn({map:c,transparent:!0,depthWrite:!1,blending:Ws,side:ve,vertexColors:e});else if(n)o=new jn({map:c,transparent:!0,depthWrite:!1,vertexColors:e});else{const d=i.shaders&&i.shaders[0],h=d&&d.alphaTest===1,u=d&&d.srcBlend===2&&d.destBlend===5,f=h||u;o=new Pn({map:c,transparent:f,alphaTest:h?.376:0,depthWrite:d?d.depthMask!==0:!0,side:f?ve:_n,vertexColors:e})}else r&&console.warn("Missing light texture:",a,"for mesh:",i.name)}o||(r?o=new jn({color:16777130,transparent:!0,opacity:.6,depthWrite:!1,blending:Ws,vertexColors:e}):o=n?new jn({color:e?16777215:16777164,vertexColors:e}):new Pn({color:e?16777215:13421772,vertexColors:e}));const l=new be(t,o);return l.userData.isPrelitUnlit=n,l}function ax(i){const t=i.toLowerCase().replace(/\.[^.]+$/,"");if(Jn.has(t))return Jn.get(t);const e=kc(i,{flipDDS:!0});return Jn.set(t,e),e}function lx(i){const t="lum_"+i.toLowerCase().replace(/\.[^.]+$/,"");if(Jn.has(t))return Jn.get(t);const e=b0(i,{flipDDS:!0});return Jn.set(t,e),e}function cx(i){const t=i.toLowerCase();if(Xn.has(t))return Xn.get(t);const e=ti(i);if(!e)return Xn.set(t,null),null;try{const n=Gl(e.buffer.slice(e.offset,e.offset+e.size));if(n.meshes.length===0)return Xn.set(t,null),null;if(!n.hierarchy&&n.hlod&&n.hlod.hierarchy){const h=n.hlod.hierarchy.toLowerCase(),u=De.get(h);if(u){const f=ti(u);if(f)try{const g=Gl(f.buffer.slice(f.offset,f.offset+f.size));g.hierarchy&&(n.hierarchy=g.hierarchy)}catch{}}}const s=new Map;if(n.hlod&&n.hlod.lods.length>0){const h=n.hlod.lods[n.hlod.lods.length-1];for(const u of h){const f=u.name.split("."),g=f.length>1?f[1].toLowerCase():f[0].toLowerCase();s.set(g,u.boneIdx)}}const r=[],o=new nn;if(o.rotation.x=-Math.PI/2,n.hierarchy&&n.hierarchy.pivots.length>0){for(let h=0;h<n.hierarchy.pivots.length;h++){const u=n.hierarchy.pivots[h],f=new fe;if(f.name=u.name,h>0){f.position.set(u.translation[0],u.translation[1],u.translation[2]);const g=u.rotation;(g[0]!==0||g[1]!==0||g[2]!==0||g[3]!==1)&&f.quaternion.set(g[0],g[1],g[2],g[3])}r.push(f)}for(let h=0;h<n.hierarchy.pivots.length;h++){const u=n.hierarchy.pivots[h].parentIdx;u===4294967295||u>=r.length?o.add(r[h]):r[u].add(r[h])}}const a=[];if(n.hierarchy)for(let h=0;h<n.hierarchy.pivots.length;h++){const u=new ne;if(h===0)u.identity();else{const f=n.hierarchy.pivots[h],g=new ne;g.compose(new O(f.translation[0],f.translation[1],f.translation[2]),new Fi(f.rotation[0],f.rotation[1],f.rotation[2],f.rotation[3]),new O(1,1,1));const _=f.parentIdx;_!==4294967295&&_<a.length?u.multiplyMatrices(a[_],g):u.copy(g)}a.push(u)}let l=0;for(const h of n.meshes){const u=h.name.toLowerCase();if(u.includes("shadow")||u.includes("collision")||h.attrs&ex||h.attrs&(Q0|tx))continue;const f=h.boneLinks&&h.boneLinks.length>0&&((h.attrs&ix)===sx||h.attrs&rx);if(f&&a.length>0){const m=h.vertices,p=h.normals,v=h.boneLinks,x=new O,M=new O,w=new It;for(let E=0;E<v.length&&E*3+2<m.length;E++){const A=v[E];A<a.length&&(x.set(m[E*3],m[E*3+1],m[E*3+2]),x.applyMatrix4(a[A]),m[E*3]=x.x,m[E*3+1]=x.y,m[E*3+2]=x.z,p&&(w.getNormalMatrix(a[A]),M.set(p[E*3],p[E*3+1],p[E*3+2]),M.applyMatrix3(w).normalize(),p[E*3]=M.x,p[E*3+1]=M.y,p[E*3+2]=M.z))}}const g=u.includes("light")||u.includes("glow")||u.includes("muzzle")||u.includes("fxfire")||u.includes("flame")||u.includes("beacon"),_=ox(h);if(_){if(_.castShadow=!g&&!_.userData.isPrelitUnlit,_.receiveShadow=!g,_.userData.isLightMesh=g,g&&(_.renderOrder=100),f)o.add(_);else{const m=s.get(u);m!==void 0&&m<r.length?r[m].add(_):o.add(_)}l++}}const c=new nn;c.add(o);const d=l>0?c:null;return Xn.set(t,d),d}catch(n){return console.warn("Failed to parse W3D:",i,n),Xn.set(t,null),null}}const no=-Math.PI/2;let Gc=1;class Hl{constructor(t,e,n){this.id=Gc++,this.name=e,this.kindOf=n||new Set,this.mesh=t,this.position={x:t.position.x,y:t.position.y,z:t.position.z},this.rotation=(t.rotation.y||0)-no,this.selected=!1,this.selectionIndicator=null,this.ai=null,t.userData.unitId=this.id,t.userData.unit=this}isSelectable(){return this.kindOf.has("UNSELECTABLE")?!1:(!this.kindOf.has("SELECTABLE")&&this.kindOf.size>0,!0)}isMobile(){return!(this.kindOf.has("STRUCTURE")||this.kindOf.has("IMMOBILE"))}isLocallyControlled(){return!0}isUnit(){return this.kindOf.has("VEHICLE")||this.kindOf.has("INFANTRY")||this.kindOf.has("AIRCRAFT")||this.kindOf.has("HUGE_VEHICLE")}isStructure(){return this.kindOf.has("STRUCTURE")}syncPositionFromMesh(){this.position.x=this.mesh.position.x,this.position.y=this.mesh.position.y,this.position.z=this.mesh.position.z,this.rotation=this.mesh.rotation.y-no}syncMeshFromPosition(){this.mesh.position.x=this.position.x,this.mesh.position.y=this.position.y,this.mesh.position.z=this.position.z,this.mesh.rotation.y=this.rotation+no}}function hx(){Gc=1}function ux(i,t,e,n){var m,p;if(!i||i.length===0)return;C.units.clear(),hx();const s=De.size>0,r=new zi(6,6,6),o=new Pn({color:16729156}),a=new Pn({color:4500223}),l=new Pn({color:16755268}),c=new Pn({color:11184810}),d=e-2*n,u=i.filter(v=>!(v.flags&256)&&!(v.flags&Ec)&&!(v.flags&xg)&&!v.name.startsWith("*")).slice(0,5e3);let f=0,g=0;for(const v of u){const x=v.x,M=(d-1)*$t-v.y,w=v.z&&Math.abs(v.z)>.1?v.z*$e:No(v.x,v.y);let E=!1;if(s){const A=Cl(v.name);if(A){const L=cx(A);if(L){const y=L.clone();y.position.set(x,w,M),v.angle&&(y.rotation.y=v.angle),y.traverse(z=>{z.isMesh&&(z.castShadow=!0,z.receiveShadow=!0)});const S=ei.get(v.name.toLowerCase());y.userData={name:v.name,w3d:A,kindOf:S||null},C.objectMarkers.add(y);const I=new Hl(y,v.name,S);C.units.set(I.id,I),f++,E=!0}}}if(!E){let A=c;const L=v.name.toLowerCase();L.includes("structure")||L.includes("building")||L.includes("commandcenter")||L.includes("barracks")||L.includes("factory")||L.includes("power")||L.includes("supply")||L.includes("techbuilding")?A=o:L.includes("vehicle")||L.includes("infantry")||L.includes("tank")||L.includes("unit")||L.includes("soldier")?A=a:(L.includes("civilian")||L.includes("civ"))&&(A=l);const y=new be(r,A);y.castShadow=!0,y.receiveShadow=!0,y.position.set(x,w+3,M);const S=ei.get(v.name.toLowerCase());y.userData={name:v.name,kindOf:S||null},C.objectMarkers.add(y);const I=new Hl(y,v.name,S);C.units.set(I.id,I),g++}}if(s&&(console.log(`Objects: ${f} W3D models loaded, ${g} fallback cubes`),g>0)){const v=new Map;for(const x of u)Cl(x.name)||v.set(x.name,(v.get(x.name)||0)+1);if(v.size>0){console.groupCollapsed(`Unresolved objects (${v.size} unique names)`);for(const[x,M]of[...v].sort((w,E)=>E[1]-w[1]))console.log(`  ${x} (x${M})`);console.groupEnd()}}const _=((p=(m=C.currentMapData)==null?void 0:m.lighting)==null?void 0:p.todIndex)??1;Pc(_===3)}function Vl(i){C.currentMapData=i;const t=i.heightMap;if(!t)throw new Error("No heightmap data found in map file");const{scene:e}=C;for(C.terrainMesh&&(e.remove(C.terrainMesh),C.terrainMesh.geometry.dispose(),C.terrainMesh.material.dispose()),C.terrainMatColored&&(C.terrainMatColored.dispose(),C.terrainMatColored=null),C.terrainMatTextured&&(C.terrainMatTextured.dispose(),C.terrainMatTextured=null),C.terrainAtlasTex&&(C.terrainAtlasTex.dispose(),C.terrainAtlasTex=null),C.terrainAtlas=null,e.remove(C.objectMarkers),C.objectMarkers.traverse(q=>{q.geometry&&q.geometry.dispose(),q.material&&(q.material.map&&q.material.map.dispose(),q.material.dispose())}),C.objectMarkers=new nn,Xn.clear(),Jn.clear(),Vs.clear(),C.roadMesh&&(e.remove(C.roadMesh),C.roadMesh.traverse(q=>{q.geometry&&q.geometry.dispose(),q.material&&(q.material.map&&q.material.map.dispose(),q.material.dispose())}),C.roadMesh=null),C.waterPlane&&(e.remove(C.waterPlane),C.waterPlane.geometry.dispose(),C.waterPlane.material.dispose(),C.waterPlane=null);e.children.length>0;)e.remove(e.children[0]);const n=t.width,s=t.height,r=t.borderSize,o=i.blendTileData;Kt.size>0&&o&&(C.terrainAtlas=x0(i),C.terrainAtlas&&(C.terrainAtlasTex=new Zs(C.terrainAtlas.atlasPixels,C.terrainAtlas.atlasW,C.terrainAtlas.atlasH,Pe),C.terrainAtlasTex.flipY=!1,C.terrainAtlasTex.magFilter=Ae,C.terrainAtlasTex.minFilter=qe,C.terrainAtlasTex.generateMipmaps=!0,C.terrainAtlasTex.needsUpdate=!0));const a=n-1,l=s-1,c=a*l,d=c*4,h=new Float32Array(d*3),u=new Float32Array(d*3),f=new Uint32Array(c*6),g=new Float32Array(d*2),_=new Float32Array(d*2),m=new Float32Array(d*2),p=new Float32Array(d),v=new Float32Array(d);let x=255,M=0;for(let q=0;q<t.data.length;q++)t.data[q]<x&&(x=t.data[q]),t.data[q]>M&&(M=t.data[q]);const w=new vt,E=new vt,A=new vt,L=new vt,y=[0,1,1,0],S=[0,0,1,1];for(let q=0;q<l;q++)for(let dt=0;dt<a;dt++){const Rt=q*a+dt,_t=Rt*4;for(let Mt=0;Mt<4;Mt++){const nt=dt+y[Mt],Ct=q+S[Mt],St=Ct*n+nt,Ut=t.data[St],bt=(_t+Mt)*3;h[bt]=(nt-r)*$t,h[bt+1]=Ut*$e,h[bt+2]=(s-1-Ct-r)*$t}const V=q*n+dt;Rc(V,o,t,x,M,w);let tt=null,ft=0,rt=!1;if(o&&V<o.blendTileNdxes.length){const Mt=o.blendTileNdxes[V];if(Mt>0&&o.blendedTiles&&Mt<o.blendedTiles.length){const nt=o.blendedTiles[Mt],Ct=er(nt);tt=Ct.alphas,rt=Ct.needFlip,ft=nt.blendNdx,is(nt.blendNdx,o,E)}}let At=null,wt=0;if(o&&o.extraBlendTileNdxes&&V<o.extraBlendTileNdxes.length){const Mt=o.extraBlendTileNdxes[V];if(Mt>0&&o.blendedTiles&&Mt<o.blendedTiles.length){const nt=o.blendedTiles[Mt];At=er(nt).alphas,wt=nt.blendNdx,is(nt.blendNdx,o,A)}}for(let Mt=0;Mt<4;Mt++){L.copy(w),tt&&tt[Mt]>0&&L.lerp(E,tt[Mt]/255),At&&At[Mt]>0&&L.lerp(A,At[Mt]/255);const nt=(_t+Mt)*3;u[nt]=L.r,u[nt+1]=L.g,u[nt+2]=L.b}if(C.terrainAtlas&&o){const Mt=o.tileNdxes[V];for(let nt=0;nt<4;nt++){const Ct=eo(Mt,nt,C.terrainAtlas);g[(_t+nt)*2]=Ct[0],g[(_t+nt)*2+1]=Ct[1]}if(tt)for(let nt=0;nt<4;nt++){const Ct=eo(ft,nt,C.terrainAtlas);_[(_t+nt)*2]=Ct[0],_[(_t+nt)*2+1]=Ct[1],p[_t+nt]=tt[nt]/255}if(At)for(let nt=0;nt<4;nt++){const Ct=eo(wt,nt,C.terrainAtlas);m[(_t+nt)*2]=Ct[0],m[(_t+nt)*2+1]=Ct[1],v[_t+nt]=At[nt]/255}}const U=Rt*6;rt?(f[U]=_t+1,f[U+1]=_t+3,f[U+2]=_t,f[U+3]=_t+1,f[U+4]=_t+2,f[U+5]=_t+3):(f[U]=_t,f[U+1]=_t+1,f[U+2]=_t+2,f[U+3]=_t,f[U+4]=_t+2,f[U+5]=_t+3)}C.terrainGeo=new Ke,C.terrainGeo.setAttribute("position",new ae(h,3)),C.terrainGeo.setAttribute("color",new ae(u,3)),C.terrainGeo.setIndex(new ae(f,1)),C.terrainAtlas&&(C.terrainGeo.setAttribute("baseUV",new ae(g,2)),C.terrainGeo.setAttribute("blendUV",new ae(_,2)),C.terrainGeo.setAttribute("extraUV",new ae(m,2)),C.terrainGeo.setAttribute("blendAlpha",new ae(p,1)),C.terrainGeo.setAttribute("extraAlpha",new ae(v,1))),C.terrainGeo.computeVertexNormals(),C.terrainMatColored=new Pn({vertexColors:!0,flatShading:!1,side:ve}),C.terrainAtlas&&C.terrainAtlasTex&&(C.terrainMatTextured=v0(C.terrainAtlasTex,i.lighting),C.colorMode="texture",document.getElementById("color-mode").value="texture");const I=n-2*r,z=s-2*r;Lc(i.lighting,I,z);const P=C.colorMode==="texture"&&C.terrainMatTextured?C.terrainMatTextured:C.terrainMatColored;C.terrainMesh=new be(C.terrainGeo,P),C.terrainMesh.receiveShadow=!0,C.terrainMesh.castShadow=!1,e.add(C.terrainMesh);const W=i.polygonTriggers.filter(q=>q.isWaterArea);W.length>0&&Fg(W,I,z,n,s),Kt.size>0&&w_();const X=Nc(i.objects);if(X.length>0){L_(X);const q=X.filter(dt=>dt.type!==tn).length;console.log(`Roads: ${X.length} total (${X.length-q} straight, ${q} junctions), ${hs.size} types from INI`),C.roadMesh=C0(X,s,r),C.roadMesh&&e.add(C.roadMesh)}Kt.size>0&&(R_(),De.size>0&&A_()),ux(i.objects,n,s,r),e.add(C.objectMarkers);const Q=I*$t/2,et=z*$t/2,H=(x+M)/2*$e,it=Math.max(I,z)*$t;return Y.target.set(Q,H,et),Y.height=Math.min(Fo,it*.35),Y.yaw=Math.PI*.75,Y.pitch=pr,Y.velocity.set(0,0,0),g0(),f0(),{drawW:n,drawH:s,playW:I,playH:z,minH:x,maxH:M}}function dx(i){return new Promise((t,e)=>{const n=[];function s(){i.readEntries(r=>{r.length===0?t(n):(n.push(...r),s())},e)}s()})}function Hc(i){return new Promise((t,e)=>i.file(t,e))}async function Vc(i,t,e){const n=await dx(i.createReader());for(const s of n)if(s.isDirectory)await Vc(s,`${t}/${s.name}`,e);else{const r=s.name.toLowerCase();if(r.endsWith(".big")||r.endsWith(".map"))continue;const o=await Hc(s);e.push({path:`${t}/${o.name}`,file:o})}}async function Wl(i){var e,n;const t=document.getElementById("loading");t.classList.add("active");try{const s=[],r=[];let o=null;const a=[];let l=!1;if(i.items)for(let h=0;h<i.items.length;h++){const u=(n=(e=i.items[h]).webkitGetAsEntry)==null?void 0:n.call(e);u&&(a.push(u),u.isDirectory&&(l=!0))}if(l){document.querySelector("#loading p").textContent="Scanning dropped files...",await new Promise(h=>setTimeout(h,50));for(const h of a)if(h.isDirectory)await Vc(h,h.name,r);else{const u=await Hc(h),f=await u.slice(0,4).arrayBuffer(),g=String.fromCharCode(...new Uint8Array(f));g==="BIGF"||g==="BIG4"?s.push(u):xl(u.name)?r.push({path:null,file:u}):o=u}}else{const h=Array.from(i.files);for(const u of h){const f=await u.slice(0,4).arrayBuffer(),g=String.fromCharCode(...new Uint8Array(f));g==="BIGF"||g==="BIG4"?s.push(u):xl(u.name)?r.push({path:null,file:u}):o=u}}for(const h of s){document.querySelector("#loading p").textContent=`Loading ${h.name}...`,await new Promise(f=>setTimeout(f,50));const u=await h.arrayBuffer();Cg(u,h.name),document.getElementById("btn-list-big").style.display=""}let c=0;if(r.length>0){document.querySelector("#loading p").textContent=`Adding ${r.length} override file(s)...`,await new Promise(u=>setTimeout(u,50));let h=!1;for(const{path:u,file:f}of r){const g=await f.arrayBuffer();if(u)po(u,g),c++,u.toLowerCase().endsWith(".ini")&&(h=!0);else{const _=wg(f.name,g);c+=_.length,f.name.toLowerCase().endsWith(".ini")&&(h=!0)}}h&&bc(),document.getElementById("btn-list-big").style.display="",console.log(`Added ${c} loose override file(s) to pool`)}if((s.length>0||c>0)&&C.currentMapData&&C.scene){document.querySelector("#loading p").textContent="Rebuilding terrain...",await new Promise(u=>setTimeout(u,50));const h=Vl(C.currentMapData);Dl(C.currentMapData,h)}if(o){document.querySelector("#loading p").textContent="Parsing map file...",await new Promise(m=>setTimeout(m,50));const h=await o.arrayBuffer();let u=await D_(h);if(!u){t.classList.remove("active");return}await new Promise(m=>setTimeout(m,50));const f=U_(u);C.scene||_0();const g=Vl(f);document.getElementById("drop-overlay").classList.add("hidden"),document.getElementById("viewer").classList.add("active");const _=o.name.replace(/\.map$/i,"");document.getElementById("map-name").textContent=_,Dl(f,g),console.log("Map loaded:",f)}else if(Kt.size>0&&!C.currentMapData){document.getElementById("drop-overlay").classList.remove("hidden");const h=Ui.size>0,u=Zn.size;let f=`BIG loaded (${Kt.size} files`;h?f+=`, ${Ui.size} terrain mappings`:f+=", no Terrain.ini found — also drop ini.big",f+=")",u>0&&(f+=` + ${u} override(s)`),f+=" — now drop a .map file",document.querySelector("#drop-zone p").textContent=f}else c>0&&!C.currentMapData&&Kt.size===Zn.size&&(document.querySelector("#drop-zone p").textContent=`${Zn.size} override file(s) ready — drop .big files and/or a .map file`)}catch(s){console.error("Failed to load:",s),Bo(`Failed to load: ${s.message}`)}finally{document.querySelector("#loading p").textContent="Parsing map file...",t.classList.remove("active")}}function fx(){const i=document.getElementById("drop-zone"),t=document.getElementById("drop-overlay");document.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation()}),document.addEventListener("drop",e=>{e.preventDefault(),e.stopPropagation()}),t.addEventListener("dragenter",()=>i.classList.add("drag-over")),t.addEventListener("dragleave",e=>{t.contains(e.relatedTarget)||i.classList.remove("drag-over")}),t.addEventListener("drop",e=>{var n,s;i.classList.remove("drag-over"),((s=(n=e.dataTransfer)==null?void 0:n.files)==null?void 0:s.length)>0&&Wl(e.dataTransfer)}),document.getElementById("viewer").addEventListener("drop",e=>{var n,s;e.preventDefault(),((s=(n=e.dataTransfer)==null?void 0:n.files)==null?void 0:s.length)>0&&Wl(e.dataTransfer)}),document.getElementById("viewer").addEventListener("dragover",e=>e.preventDefault()),document.getElementById("toggle-wireframe").addEventListener("click",function(){this.classList.toggle("active");const e=this.classList.contains("active");C.terrainMatColored&&(C.terrainMatColored.wireframe=e),C.terrainMatTextured&&(C.terrainMatTextured.wireframe=e)}),document.getElementById("toggle-objects").addEventListener("click",function(){this.classList.toggle("active"),C.objectMarkers.visible=this.classList.contains("active")}),document.getElementById("toggle-water").addEventListener("click",function(){this.classList.toggle("active"),C.waterPlane&&(C.waterPlane.visible=this.classList.contains("active"))}),document.getElementById("toggle-roads").addEventListener("click",function(){this.classList.toggle("active"),C.roadMesh&&(C.roadMesh.visible=this.classList.contains("active"))}),document.getElementById("toggle-shadows").addEventListener("click",function(){this.classList.toggle("active");const e=this.classList.contains("active");C.renderer.shadowMap.enabled=e,C.sunLight&&(C.sunLight.castShadow=e),C.terrainMatColored&&(C.terrainMatColored.needsUpdate=!0),C.terrainMatTextured&&(C.terrainMatTextured.needsUpdate=!0)}),document.getElementById("toggle-edge-scroll").addEventListener("click",function(){this.classList.toggle("active"),Y.edgeScrollEnabled=this.classList.contains("active")}),document.getElementById("height-scale").addEventListener("input",function(){C.currentHeightScale=parseFloat(this.value),document.getElementById("height-scale-value").textContent=C.currentHeightScale.toFixed(1)+"x",Og(C.currentHeightScale)}),document.getElementById("color-mode").addEventListener("change",function(){C.colorMode=this.value,Ng()}),document.getElementById("time-of-day").addEventListener("change",function(){Bg(parseInt(this.value))}),document.getElementById("btn-reset-camera").addEventListener("click",()=>{if(!C.currentMapData)return;const e=C.currentMapData.heightMap,n=e.borderSize,s=e.width-2*n,r=e.height-2*n,o=s*$t/2,a=r*$t/2,l=Math.max(s,r)*$t;Y.target.set(o,0,a),Y.height=Math.min(Fo,l*.35),Y.yaw=Math.PI*.75,Y.pitch=pr,Y.velocity.set(0,0,0)}),document.getElementById("btn-load-new").addEventListener("click",()=>{document.getElementById("drop-overlay").classList.remove("hidden")}),document.getElementById("btn-list-big").addEventListener("click",()=>{if(Kt.size===0){Bo("No files loaded");return}const n=Pg().filter(o=>o.startsWith("art/terrain/")&&o.endsWith(".tga")),s=Zn.size;let r=`${Kt.size} files in pool.
${n.length} terrain TGAs.
${Ui.size} INI terrain mappings.`;s>0&&(r+=`
${s} loose file override(s) (marked [OVERRIDE] in console).`),r+=`

Full list logged to browser console (F12).`,alert(r)})}fx();

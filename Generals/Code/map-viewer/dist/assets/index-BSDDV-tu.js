(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="164",zc=0,Ga=1,Gc=2,kc=0,Fl=1,Hc=2,hn=3,pn=0,Pe=1,xe=2,Ln=0,Ei=1,ks=2,ka=3,Ha=4,Vc=5,Vn=100,Wc=101,Xc=102,Yc=103,qc=104,$c=200,jc=201,Kc=202,Zc=203,Kr=204,Zr=205,Jc=206,Qc=207,th=208,eh=209,nh=210,ih=211,sh=212,rh=213,ah=214,oh=0,lh=1,ch=2,Hs=3,hh=4,uh=5,dh=6,fh=7,sr=0,ph=1,mh=2,fn=0,gh=1,_h=2,xh=3,vh=4,Mh=5,Sh=6,yh=7,Bl=300,Ci=301,Ri=302,Jr=303,Qr=304,rr=306,un=1e3,Xn=1001,ta=1002,Ce=1003,Eh=1004,hs=1005,Ee=1006,fr=1007,Ye=1008,Pn=1009,Th=1010,Ah=1011,zl=1012,Gl=1013,Li=1014,wn=1015,ar=1016,kl=1017,Hl=1018,is=1020,bh=35902,wh=1021,Ch=1022,Re=1023,Rh=1024,Lh=1025,Ti=1026,Qi=1027,Ph=1028,Vl=1029,Dh=1030,Wl=1031,Xl=1033,pr=33776,mr=33777,gr=33778,_r=33779,Va=35840,Wa=35841,Xa=35842,Ya=35843,qa=36196,$a=37492,ja=37496,Ka=37808,Za=37809,Ja=37810,Qa=37811,to=37812,eo=37813,no=37814,io=37815,so=37816,ro=37817,ao=37818,oo=37819,lo=37820,co=37821,xr=36492,ho=36494,uo=36495,Ih=36283,fo=36284,po=36285,mo=36286,Uh=3200,Nh=3201,_a=0,Oh=1,bn="",Ze="srgb",gn="srgb-linear",xa="display-p3",or="display-p3-linear",Vs="linear",Zt="srgb",Ws="rec709",Xs="p3",Qn=7680,go=519,Fh=512,Bh=513,zh=514,Yl=515,Gh=516,kh=517,Hh=518,Vh=519,_o=35044,xo="300 es",dn=2e3,Ys=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,ea=180/Math.PI;function ss(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Wh(i,t){return(i%t+t)%t}function Mr(i,t,e){return(1-e)*i+e*t}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,l,h){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],u=n[7],c=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],x=s[4],M=s[7],w=s[2],E=s[5],A=s[8];return r[0]=a*_+o*v+l*w,r[3]=a*p+o*x+l*E,r[6]=a*m+o*M+l*A,r[1]=h*_+d*v+u*w,r[4]=h*p+d*x+u*E,r[7]=h*m+d*M+u*A,r[2]=c*_+f*v+g*w,r[5]=c*p+f*x+g*E,r[8]=c*m+f*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8];return e*a*d-e*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],u=d*a-o*h,c=o*l-d*r,f=h*r-a*l,g=e*u+n*c+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*h-d*n)*_,t[2]=(o*n-s*a)*_,t[3]=c*_,t[4]=(d*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new It;function ql(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xh(){const i=qs("canvas");return i.style.display="block",i}const vo={};function Yh(i){i in vo||(vo[i]=!0,console.warn(i))}const Mo=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),So=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[gn]:{transfer:Vs,primaries:Ws,toReference:i=>i,fromReference:i=>i},[Ze]:{transfer:Zt,primaries:Ws,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[or]:{transfer:Vs,primaries:Xs,toReference:i=>i.applyMatrix3(So),fromReference:i=>i.applyMatrix3(Mo)},[xa]:{transfer:Zt,primaries:Xs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(So),fromReference:i=>i.applyMatrix3(Mo).convertLinearToSRGB()}},qh=new Set([gn,or]),qt={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=us[t].toReference,s=us[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return us[i].primaries},getTransfer:function(i){return i===bn?Vs:us[i].transfer}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ti;class $h{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=qs("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jh=0;class $l{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Er(s[a].image)):r.push(Er(s[a]))}else r=Er(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$h.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kh=0;class Ae extends Ni{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Xn,s=Xn,r=Ee,a=Ye,o=Re,l=Pn,h=Ae.DEFAULT_ANISOTROPY,d=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=ss(),this.name="",this.source=new $l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case un:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case un:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Bl;Ae.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],d=l[4],u=l[8],c=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(d-c)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+c)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,M=(f+1)/2,w=(m+1)/2,E=(d+c)/4,A=(u+_)/4,L=(g+p)/4;return x>M&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=A/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=L/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=L/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(c-d)*(c-d));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(c-d)/v,this.w=Math.acos((h+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zh extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $l(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Zh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jl extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jh extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],u=n[s+3];const c=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=c,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==c||h!==f||d!==g){let p=1-o;const m=l*c+h*f+d*g+u*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const w=Math.sqrt(x),E=Math.atan2(w,m*v);p=Math.sin(p*E)/w,o=Math.sin(o*E)/w}const M=o*v;if(l=l*p+c*M,h=h*p+f*M,d=d*p+g*M,u=u*p+_*M,p===1-o){const w=1/Math.sqrt(l*l+h*h+d*d+u*u);l*=w,h*=w,d*=w,u*=w}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a],c=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+d*u+l*f-h*c,t[e+1]=l*g+d*c+h*u-o*f,t[e+2]=h*g+d*f+o*c-l*u,t[e+3]=d*g-o*u-l*c-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),u=o(r/2),c=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=c*d*u+h*f*g,this._y=h*f*u-c*d*g,this._z=h*d*g+c*f*u,this._w=h*d*u-c*f*g;break;case"YXZ":this._x=c*d*u+h*f*g,this._y=h*f*u-c*d*g,this._z=h*d*g-c*f*u,this._w=h*d*u+c*f*g;break;case"ZXY":this._x=c*d*u-h*f*g,this._y=h*f*u+c*d*g,this._z=h*d*g+c*f*u,this._w=h*d*u-c*f*g;break;case"ZYX":this._x=c*d*u-h*f*g,this._y=h*f*u+c*d*g,this._z=h*d*g-c*f*u,this._w=h*d*u+c*f*g;break;case"YZX":this._x=c*d*u+h*f*g,this._y=h*f*u+c*d*g,this._z=h*d*g-c*f*u,this._w=h*d*u-c*f*g;break;case"XZY":this._x=c*d*u-h*f*g,this._y=h*f*u-c*d*g,this._z=h*d*g+c*f*u,this._w=h*d*u+c*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],d=e[6],u=e[10],c=n+o+u;if(c>0){const f=.5/Math.sqrt(c+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),u=Math.sin((1-e)*d)/h,c=Math.sin(e*d)/h;return this._w=a*u+this._w*c,this._x=n*u+this._x*c,this._y=s*u+this._y*c,this._z=r*u+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),d=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*h+a*u-o*d,this.y=n+l*d+o*h-r*u,this.z=s+l*u+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new O,yo=new Oi;class rs{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(r,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),fs.subVectors(this.max,Vi),ei.subVectors(t.a,Vi),ni.subVectors(t.b,Vi),ii.subVectors(t.c,Vi),xn.subVectors(ni,ei),vn.subVectors(ii,ni),In.subVectors(ei,ii);let e=[0,-xn.z,xn.y,0,-vn.z,vn.y,0,-In.z,In.y,xn.z,0,-xn.x,vn.z,0,-vn.x,In.z,0,-In.x,-xn.y,xn.x,0,-vn.y,vn.x,0,-In.y,In.x,0];return!Ar(e,ei,ni,ii,fs)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,ei,ni,ii,fs))?!1:(ps.crossVectors(xn,vn),e=[ps.x,ps.y,ps.z],Ar(e,ei,ni,ii,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new O,new O,new O,new O,new O,new O,new O,new O],Ve=new O,ds=new rs,ei=new O,ni=new O,ii=new O,xn=new O,vn=new O,In=new O,Vi=new O,fs=new O,ps=new O,Un=new O;function Ar(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Un.fromArray(i,r);const o=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),l=t.dot(Un),h=e.dot(Un),d=n.dot(Un);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const Qh=new rs,Wi=new O,br=new O;class va{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(br)),this.expandByPoint(Wi.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new O,wr=new O,ms=new O,Mn=new O,Cr=new O,gs=new O,Rr=new O;class Kl{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wr.copy(t).add(e).multiplyScalar(.5),ms.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(wr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ms),o=Mn.dot(this.direction),l=-Mn.dot(ms),h=Mn.lengthSq(),d=Math.abs(1-a*a);let u,c,f,g;if(d>0)if(u=a*l-o,c=a*o-l,g=r*d,u>=0)if(c>=-g)if(c<=g){const _=1/d;u*=_,c*=_,f=u*(u+a*c+2*o)+c*(a*u+c+2*l)+h}else c=r,u=Math.max(0,-(a*c+o)),f=-u*u+c*(c+2*l)+h;else c=-r,u=Math.max(0,-(a*c+o)),f=-u*u+c*(c+2*l)+h;else c<=-g?(u=Math.max(0,-(-a*r+o)),c=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+c*(c+2*l)+h):c<=g?(u=0,c=Math.min(Math.max(-r,-l),r),f=c*(c+2*l)+h):(u=Math.max(0,-(a*r+o)),c=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+c*(c+2*l)+h);else c=a>0?-r:r,u=Math.max(0,-(a*c+o)),f=-u*u+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wr).addScaledVector(ms,c),f}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),s=an.dot(an)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,s=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,s=(t.min.x-c.x)*h),d>=0?(r=(t.min.y-c.y)*d,a=(t.max.y-c.y)*d):(r=(t.max.y-c.y)*d,a=(t.min.y-c.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-c.z)*u,l=(t.max.z-c.z)*u):(o=(t.max.z-c.z)*u,l=(t.min.z-c.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,s,r){Cr.subVectors(e,t),gs.subVectors(n,t),Rr.crossVectors(Cr,gs);let a=this.direction.dot(Rr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,t);const l=o*this.direction.dot(gs.crossVectors(Mn,gs));if(l<0)return null;const h=o*this.direction.dot(Cr.cross(Mn));if(h<0||l+h>a)return null;const d=-o*Mn.dot(Rr);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,l,h,d,u,c,f,g,_,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,d,u,c,f,g,_,p)}set(t,e,n,s,r,a,o,l,h,d,u,c,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=d,m[10]=u,m[14]=c,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const c=a*d,f=a*u,g=o*d,_=o*u;e[0]=l*d,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=c-_*h,e[9]=-o*l,e[2]=_-c*h,e[6]=g+f*h,e[10]=a*l}else if(t.order==="YXZ"){const c=l*d,f=l*u,g=h*d,_=h*u;e[0]=c+_*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=f*o-g,e[6]=_+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*d,f=l*u,g=h*d,_=h*u;e[0]=c-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*d,e[9]=_-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*d,f=a*u,g=o*d,_=o*u;e[0]=l*d,e[4]=g*h-f,e[8]=c*h+_,e[1]=l*u,e[5]=_*h+c,e[9]=f*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*d,e[4]=_-c*u,e[8]=g*u+f,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-h*d,e[6]=f*u+g,e[10]=c-_*u}else if(t.order==="XZY"){const c=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*d,e[4]=-u,e[8]=h*d,e[1]=c*u+_,e[5]=a*d,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*d,e[10]=_*u+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tu,t,eu)}lookAt(t,e,n){const s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Sn.crossVectors(n,Ie),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Sn.crossVectors(n,Ie)),Sn.normalize(),_s.crossVectors(Ie,Sn),s[0]=Sn.x,s[4]=_s.x,s[8]=Ie.x,s[1]=Sn.y,s[5]=_s.y,s[9]=Ie.y,s[2]=Sn.z,s[6]=_s.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],u=n[5],c=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],x=n[7],M=n[11],w=n[15],E=s[0],A=s[4],L=s[8],y=s[12],S=s[1],I=s[5],z=s[9],P=s[13],W=s[2],X=s[6],Q=s[10],et=s[14],H=s[3],it=s[7],q=s[11],dt=s[15];return r[0]=a*E+o*S+l*W+h*H,r[4]=a*A+o*I+l*X+h*it,r[8]=a*L+o*z+l*Q+h*q,r[12]=a*y+o*P+l*et+h*dt,r[1]=d*E+u*S+c*W+f*H,r[5]=d*A+u*I+c*X+f*it,r[9]=d*L+u*z+c*Q+f*q,r[13]=d*y+u*P+c*et+f*dt,r[2]=g*E+_*S+p*W+m*H,r[6]=g*A+_*I+p*X+m*it,r[10]=g*L+_*z+p*Q+m*q,r[14]=g*y+_*P+p*et+m*dt,r[3]=v*E+x*S+M*W+w*H,r[7]=v*A+x*I+M*X+w*it,r[11]=v*L+x*z+M*Q+w*q,r[15]=v*y+x*P+M*et+w*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],d=t[2],u=t[6],c=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*h*u-r*o*c+n*h*c+s*o*f-n*l*f)+_*(+e*l*f-e*h*c+r*a*c-s*a*f+s*h*d-r*l*d)+p*(+e*h*u-e*o*f-r*a*u+n*a*f+r*o*d-n*h*d)+m*(-s*o*d-e*l*u+e*o*c+s*a*u-n*a*c+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],u=t[9],c=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=u*p*h-_*c*h+_*l*f-o*p*f-u*l*m+o*c*m,x=g*c*h-d*p*h-g*l*f+a*p*f+d*l*m-a*c*m,M=d*_*h-g*u*h+g*o*f-a*_*f-d*o*m+a*u*m,w=g*u*l-d*_*l-g*o*c+a*_*c+d*o*p-a*u*p,E=e*v+n*x+s*M+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(_*c*r-u*p*r-_*s*f+n*p*f+u*s*m-n*c*m)*A,t[2]=(o*p*r-_*l*r+_*s*h-n*p*h-o*s*m+n*l*m)*A,t[3]=(u*l*r-o*c*r-u*s*h+n*c*h+o*s*f-n*l*f)*A,t[4]=x*A,t[5]=(d*p*r-g*c*r+g*s*f-e*p*f-d*s*m+e*c*m)*A,t[6]=(g*l*r-a*p*r-g*s*h+e*p*h+a*s*m-e*l*m)*A,t[7]=(a*c*r-d*l*r+d*s*h-e*c*h-a*s*f+e*l*f)*A,t[8]=M*A,t[9]=(g*u*r-d*_*r-g*n*f+e*_*f+d*n*m-e*u*m)*A,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*m+e*o*m)*A,t[11]=(d*o*r-a*u*r-d*n*h+e*u*h+a*n*f-e*o*f)*A,t[12]=w*A,t[13]=(d*_*s-g*u*s+g*n*c-e*_*c-d*n*p+e*u*p)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*p-e*o*p)*A,t[15]=(a*u*s-d*o*s+d*n*l-e*u*l-a*n*c+e*o*c)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,d=a+a,u=o+o,c=r*h,f=r*d,g=r*u,_=a*d,p=a*u,m=o*u,v=l*h,x=l*d,M=l*u,w=n.x,E=n.y,A=n.z;return s[0]=(1-(_+m))*w,s[1]=(f+M)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(c+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(g+x)*A,s[9]=(p-v)*A,s[10]=(1-(c+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const a=si.set(s[4],s[5],s[6]).length(),o=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);const h=1/r,d=1/a,u=1/o;return We.elements[0]*=h,We.elements[1]*=h,We.elements[2]*=h,We.elements[4]*=d,We.elements[5]*=d,We.elements[6]*=d,We.elements[8]*=u,We.elements[9]*=u,We.elements[10]*=u,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=dn){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),c=(n+s)/(n-s);let f,g;if(o===dn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ys)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=dn){const l=this.elements,h=1/(e-t),d=1/(n-s),u=1/(a-r),c=(e+t)*h,f=(n+s)*d;let g,_;if(o===dn)g=(a+r)*u,_=-2*u;else if(o===Ys)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new O,We=new te,tu=new O(0,0,0),eu=new O(1,1,1),Sn=new O,_s=new O,Ie=new O,Eo=new te,To=new Oi;class $e{constructor(t=0,e=0,n=0,s=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],u=s[2],c=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return To.setFromEuler(this),this.setFromQuaternion(To,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class Ma{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nu=0;const Ao=new O,ri=new Oi,on=new te,xs=new O,Xi=new O,iu=new O,su=new Oi,bo=new O(1,0,0),wo=new O(0,1,0),Co=new O(0,0,1),Ro={type:"added"},ru={type:"removed"},ai={type:"childadded",child:null},Lr={type:"childremoved",child:null};class de extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new O,e=new $e,n=new Oi,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new It}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(bo,t)}rotateY(t){return this.rotateOnAxis(wo,t)}rotateZ(t){return this.rotateOnAxis(Co,t)}translateOnAxis(t,e){return Ao.copy(t).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bo,t)}translateY(t){return this.translateOnAxis(wo,t)}translateZ(t){return this.translateOnAxis(Co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Xi,xs,this.up):on.lookAt(xs,Xi,this.up),this.quaternion.setFromRotationMatrix(on),s&&(on.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(on),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ro),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ru),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ro),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,iu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),u=a(t.shapes),c=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),c.length>0&&(n.skeletons=c),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new O(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new O,ln=new O,Pr=new O,cn=new O,oi=new O,li=new O,Lo=new O,Dr=new O,Ir=new O,Ur=new O;class tn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),ln.subVectors(n,e),Pr.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(ln),l=Xe.dot(Pr),h=ln.dot(ln),d=ln.dot(Pr),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const c=1/u,f=(h*l-o*d)*c,g=(a*d-o*l)*c;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),ln.subVectors(t,e),Xe.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Xe.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;oi.subVectors(s,n),li.subVectors(r,n),Dr.subVectors(t,n);const l=oi.dot(Dr),h=li.dot(Dr);if(l<=0&&h<=0)return e.copy(n);Ir.subVectors(t,s);const d=oi.dot(Ir),u=li.dot(Ir);if(d>=0&&u<=d)return e.copy(s);const c=l*u-d*h;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(oi,a);Ur.subVectors(t,r);const f=oi.dot(Ur),g=li.dot(Ur);if(g>=0&&f<=g)return e.copy(r);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(li,o);const p=d*g-f*u;if(p<=0&&u-d>=0&&f-g>=0)return Lo.subVectors(r,s),o=(u-d)/(u-d+(f-g)),e.copy(s).addScaledVector(Lo,o);const m=1/(p+_+c);return a=_*m,o=c*m,e.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Nr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Wh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Nr(a,r,t+1/3),this.g=Nr(a,r,t),this.b=Nr(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Zl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return qt.fromWorkingColorSpace(_e.copy(this),t),Math.round(we(_e.r*255,0,255))*65536+Math.round(we(_e.g*255,0,255))*256+Math.round(we(_e.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,s=_e.g,r=_e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=Ze){qt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,s=_e.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(vs);const n=Mr(yn.h,vs.h,e),s=Mr(yn.s,vs.s,e),r=Mr(yn.l,vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new vt;vt.NAMES=Zl;let au=0;class Fi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Ei,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=Zr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kr&&(n.blendSrc=this.blendSrc),this.blendDst!==Zr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yn extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new O,Ms=new kt;class re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Yh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_o&&(t.usage=this.usage),t}}class Jl extends re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ql extends re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ou=0;const Be=new te,Or=new de,ci=new O,Ue=new rs,Yi=new rs,le=new O;class je extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ql(t)?Ql:Jl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Or.lookAt(t),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(le.addVectors(Ue.min,Yi.min),Ue.expandByPoint(le),le.addVectors(Ue.max,Yi.max),Ue.expandByPoint(le)):(Ue.expandByPoint(Yi.min),Ue.expandByPoint(Yi.max))}Ue.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)le.fromBufferAttribute(o,h),l&&(ci.fromBufferAttribute(t,h),le.add(ci)),s=Math.max(s,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new re(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new O,l[L]=new O;const h=new O,d=new O,u=new O,c=new kt,f=new kt,g=new kt,_=new O,p=new O;function m(L,y,S){h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),c.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),d.sub(h),u.sub(h),f.sub(c),g.sub(c);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(I),o[L].add(_),o[y].add(_),o[S].add(_),l[L].add(p),l[y].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,y=v.length;L<y;++L){const S=v[L],I=S.start,z=S.count;for(let P=I,W=I+z;P<W;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const x=new O,M=new O,w=new O,E=new O;function A(L){w.fromBufferAttribute(s,L),E.copy(w);const y=o[L];x.copy(y),x.sub(w.multiplyScalar(w.dot(y))).normalize(),M.crossVectors(E,y);const I=M.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,I)}for(let L=0,y=v.length;L<y;++L){const S=v[L],I=S.start,z=S.count;for(let P=I,W=I+z;P<W;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,f=n.count;c<f;c++)n.setXYZ(c,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,h=new O,d=new O,u=new O;if(t)for(let c=0,f=t.count;c<f;c+=3){const g=t.getX(c+0),_=t.getX(c+1),p=t.getX(c+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),o.add(d),l.add(d),h.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let c=0,f=e.count;c<f;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(o,l){const h=o.array,d=o.itemSize,u=o.normalized,c=new h.constructor(l.length*d);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let m=0;m<d;m++)c[g++]=h[f++]}return new re(c,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,u=h.length;d<u;d++){const c=h[d],f=t(c,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let u=0,c=h.length;u<c;u++){const f=h[u];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],u=r[h];for(let c=0,f=u.length;c<f;c++)d.push(u[c].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new te,Nn=new Kl,Ss=new va,Do=new O,hi=new O,ui=new O,di=new O,Fr=new O,ys=new O,Es=new kt,Ts=new kt,As=new kt,Io=new O,Uo=new O,No=new O,bs=new O,ws=new O;class Te extends de{constructor(t=new je,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ys.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],u=r[l];d!==0&&(Fr.fromBufferAttribute(u,t),a?ys.addScaledVector(Fr,d):ys.addScaledVector(Fr.sub(e),d))}e.add(ys)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(Ss.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Ss,Do)===null||Nn.origin.distanceToSquared(Do)>(t.far-t.near)**2))&&(Po.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(Po),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,c=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const p=c[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,w=x;M<w;M+=3){const E=o.getX(M),A=o.getX(M+1),L=o.getX(M+2);s=Cs(this,m,t,n,h,d,u,E,A,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);s=Cs(this,a,t,n,h,d,u,v,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const p=c[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,w=x;M<w;M+=3){const E=M,A=M+1,L=M+2;s=Cs(this,m,t,n,h,d,u,E,A,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,x=p+1,M=p+2;s=Cs(this,a,t,n,h,d,u,v,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function lu(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pn,o),l===null)return null;ws.copy(o),ws.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ws);return h<e.near||h>e.far?null:{distance:h,point:ws.clone(),object:i}}function Cs(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,hi),i.getVertexPosition(l,ui),i.getVertexPosition(h,di);const d=lu(i,t,e,n,hi,ui,di,bs);if(d){s&&(Es.fromBufferAttribute(s,o),Ts.fromBufferAttribute(s,l),As.fromBufferAttribute(s,h),d.uv=tn.getInterpolation(bs,hi,ui,di,Es,Ts,As,new kt)),r&&(Es.fromBufferAttribute(r,o),Ts.fromBufferAttribute(r,l),As.fromBufferAttribute(r,h),d.uv1=tn.getInterpolation(bs,hi,ui,di,Es,Ts,As,new kt)),a&&(Io.fromBufferAttribute(a,o),Uo.fromBufferAttribute(a,l),No.fromBufferAttribute(a,h),d.normal=tn.getInterpolation(bs,hi,ui,di,Io,Uo,No,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new O,materialIndex:0};tn.getNormal(hi,ui,di,u.normal),d.face=u}return d}class Bi extends je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],u=[];let c=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(u,2));function g(_,p,m,v,x,M,w,E,A,L,y){const S=M/A,I=w/L,z=M/2,P=w/2,W=E/2,X=A+1,Q=L+1;let et=0,H=0;const it=new O;for(let q=0;q<Q;q++){const dt=q*I-P;for(let Rt=0;Rt<X;Rt++){const _t=Rt*S-z;it[_]=_t*v,it[p]=dt*x,it[m]=W,h.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[m]=E>0?1:-1,d.push(it.x,it.y,it.z),u.push(Rt/A),u.push(1-q/L),et+=1}}for(let q=0;q<L;q++)for(let dt=0;dt<A;dt++){const Rt=c+dt+X*q,_t=c+dt+X*(q+1),V=c+(dt+1)+X*(q+1),tt=c+(dt+1)+X*q;l.push(Rt,_t,tt),l.push(_t,V,tt),H+=6}o.addGroup(f,H,y),f+=H,c+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){const t={};for(let e=0;e<i.length;e++){const n=Pi(i[e]);for(const s in n)t[s]=n[s]}return t}function cu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const ec={clone:Pi,merge:Se};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nc extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new O,Oo=new kt,Fo=new kt;class ze extends nc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,Oo,Fo),e.subVectors(Fo,Oo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,pi=1;class du extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(fi,pi,t,e);s.layers=this.layers,this.add(s);const r=new ze(fi,pi,t,e);r.layers=this.layers,this.add(r);const a=new ze(fi,pi,t,e);a.layers=this.layers,this.add(a);const o=new ze(fi,pi,t,e);o.layers=this.layers,this.add(o);const l=new ze(fi,pi,t,e);l.layers=this.layers,this.add(l);const h=new ze(fi,pi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,u=t.getRenderTarget(),c=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(u,c,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ic extends Ae{constructor(t,e,n,s,r,a,o,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fu extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ic(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bi(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Ln});r.uniforms.tEquirect.value=e;const a=new Te(s,r),o=e.minFilter;return e.minFilter===Ye&&(e.minFilter=Ee),new du(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Br=new O,pu=new O,mu=new It;class Gn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Br.subVectors(n,e).cross(pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Br),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mu.getNormalMatrix(t),s=this.coplanarPoint(Br).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new va,Rs=new O;class Sa{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],d=s[5],u=s[6],c=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],v=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,c-h,p-f,M-m).normalize(),n[1].setComponents(l+r,c+h,p+f,M+m).normalize(),n[2].setComponents(l+a,c+d,p+g,M+v).normalize(),n[3].setComponents(l-a,c-d,p-g,M-v).normalize(),n[4].setComponents(l-o,c-u,p-_,M-x).normalize(),e===dn)n[5].setComponents(l+o,c+u,p+_,M+x).normalize();else if(e===Ys)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Rs.x=s.normal.x>0?t.max.x:t.min.x,Rs.y=s.normal.y>0?t.max.y:t.min.y,Rs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gu(i){const t=new WeakMap;function e(o,l){const h=o.array,d=o.usage,u=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,d),o.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,h){const d=l.array,u=l._updateRange,c=l.updateRanges;if(i.bindBuffer(h,o),u.count===-1&&c.length===0&&i.bufferSubData(h,0,d),c.length!==0){for(let f=0,g=c.length;f<g;f++){const _=c[f];i.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class as extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,u=t/o,c=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<d;m++){const v=m*c-a;for(let x=0;x<h;x++){const M=x*u-r;g.push(M,-v,0),_.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const x=v+h*m,M=v+h*(m+1),w=v+1+h*(m+1),E=v+1+h*m;f.push(x,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.width,t.height,t.widthSegments,t.heightSegments)}}var _u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xu=`#ifdef USE_ALPHAHASH
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
#endif`,vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Su=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eu=`#ifdef USE_AOMAP
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
#endif`,Tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Au=`#ifdef USE_BATCHING
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
#endif`,bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lu=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gu=`#define PI 3.141592653589793
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
} // validated`,ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hu=`vec3 transformedNormal = objectNormal;
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
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",$u=`
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
}`,ju=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
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
}`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
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
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
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
#endif`,md=`struct PhysicalMaterial {
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
}`,gd=`
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bd=`#if defined( USE_POINTS_UV )
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
#endif`,wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ld=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
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
#endif`,Dd=`#ifdef USE_MORPHTARGETS
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
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ef=`float getShadowMask() {
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
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#ifdef USE_TRANSMISSION
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xf=`uniform sampler2D t2D;
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
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
}`,Tf=`#if DEPTH_PACKING == 3200
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
}`,Af=`#define DISTANCE
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
}`,bf=`#define DISTANCE
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
}`,If=`#define LAMBERT
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
}`,Uf=`#define LAMBERT
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
}`,Nf=`#define MATCAP
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
}`,Of=`#define MATCAP
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
}`,Ff=`#define NORMAL
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
}`,Bf=`#define NORMAL
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
}`,zf=`#define PHONG
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
}`,Gf=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Vf=`#define TOON
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
}`,Wf=`#define TOON
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
}`,Xf=`uniform float size;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,$f=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:_u,alphahash_pars_fragment:xu,alphamap_fragment:vu,alphamap_pars_fragment:Mu,alphatest_fragment:Su,alphatest_pars_fragment:yu,aomap_fragment:Eu,aomap_pars_fragment:Tu,batching_pars_vertex:Au,batching_vertex:bu,begin_vertex:wu,beginnormal_vertex:Cu,bsdfs:Ru,iridescence_fragment:Lu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Du,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Nu,color_fragment:Ou,color_pars_fragment:Fu,color_pars_vertex:Bu,color_vertex:zu,common:Gu,cube_uv_reflection_fragment:ku,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:Yu,colorspace_fragment:qu,colorspace_pars_fragment:$u,envmap_fragment:ju,envmap_common_pars_fragment:Ku,envmap_pars_fragment:Zu,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:cd,envmap_vertex:Qu,fog_vertex:td,fog_pars_vertex:ed,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:sd,lightmap_pars_fragment:rd,lights_lambert_fragment:ad,lights_lambert_pars_fragment:od,lights_pars_begin:ld,lights_toon_fragment:hd,lights_toon_pars_fragment:ud,lights_phong_fragment:dd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:xd,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:Md,logdepthbuf_pars_vertex:Sd,logdepthbuf_vertex:yd,map_fragment:Ed,map_pars_fragment:Td,map_particle_fragment:Ad,map_particle_pars_fragment:bd,metalnessmap_fragment:wd,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Rd,morphcolor_vertex:Ld,morphnormal_vertex:Pd,morphtarget_pars_vertex:Dd,morphtarget_vertex:Id,normal_fragment_begin:Ud,normal_fragment_maps:Nd,normal_pars_fragment:Od,normal_pars_vertex:Fd,normal_vertex:Bd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:Yd,project_vertex:qd,dithering_fragment:$d,dithering_pars_fragment:jd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:tf,shadowmask_pars_fragment:ef,skinbase_vertex:nf,skinning_pars_vertex:sf,skinning_vertex:rf,skinnormal_vertex:af,specularmap_fragment:of,specularmap_pars_fragment:lf,tonemapping_fragment:cf,tonemapping_pars_fragment:hf,transmission_fragment:uf,transmission_pars_fragment:df,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,worldpos_vertex:gf,background_vert:_f,background_frag:xf,backgroundCube_vert:vf,backgroundCube_frag:Mf,cube_vert:Sf,cube_frag:yf,depth_vert:Ef,depth_frag:Tf,distanceRGBA_vert:Af,distanceRGBA_frag:bf,equirect_vert:wf,equirect_frag:Cf,linedashed_vert:Rf,linedashed_frag:Lf,meshbasic_vert:Pf,meshbasic_frag:Df,meshlambert_vert:If,meshlambert_frag:Uf,meshmatcap_vert:Nf,meshmatcap_frag:Of,meshnormal_vert:Ff,meshnormal_frag:Bf,meshphong_vert:zf,meshphong_frag:Gf,meshphysical_vert:kf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:Wf,points_vert:Xf,points_frag:Yf,shadow_vert:qf,shadow_frag:$f,sprite_vert:jf,sprite_frag:Kf},at={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Je={basic:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Se([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Se([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Se([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Se([at.points,at.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Se([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Se([at.common,at.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Se([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Se([at.sprite,at.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Se([at.common,at.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Se([at.lights,at.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Je.physical={uniforms:Se([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Ls={r:0,b:0,g:0},Fn=new $e,Zf=new te;function Jf(i,t,e,n,s,r,a){const o=new vt(0);let l=r===!0?0:1,h,d,u=null,c=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const M=g(v);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function p(v,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===rr)?(d===void 0&&(d=new Te(new Bi(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Pi(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Fn.copy(x.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(Fn)),d.material.toneMapped=qt.getTransfer(M.colorSpace)!==Zt,(u!==M||c!==M.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=M,c=M.version,f=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new Te(new as(2,2),new mn({name:"BackgroundMaterial",uniforms:Pi(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=qt.getTransfer(M.colorSpace)!==Zt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||c!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,c=M.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function m(v,x){v.getRGB(Ls,tc(i)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:_,addToRenderList:p}}function Qf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(S,I,z,P,W){let X=!1;const Q=u(P,z,I);r!==Q&&(r=Q,h(r.object)),X=f(S,P,z,W),X&&g(S,P,z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(S,I,z,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function d(S){return i.deleteVertexArray(S)}function u(S,I,z){const P=z.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let X=W[I.id];X===void 0&&(X={},W[I.id]=X);let Q=X[P];return Q===void 0&&(Q=c(l()),X[P]=Q),Q}function c(S){const I=[],z=[],P=[];for(let W=0;W<e;W++)I[W]=0,z[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:P,object:S,attributes:{},index:null}}function f(S,I,z,P){const W=r.attributes,X=I.attributes;let Q=0;const et=z.getAttributes();for(const H in et)if(et[H].location>=0){const q=W[H];let dt=X[H];if(dt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),q===void 0||q.attribute!==dt||dt&&q.data!==dt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==P}function g(S,I,z,P){const W={},X=I.attributes;let Q=0;const et=z.getAttributes();for(const H in et)if(et[H].location>=0){let q=X[H];q===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const dt={};dt.attribute=q,q&&q.data&&(dt.data=q.data),W[H]=dt,Q++}r.attributes=W,r.attributesNum=Q,r.index=P}function _(){const S=r.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function p(S){m(S,0)}function m(S,I){const z=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;z[S]=1,P[S]===0&&(i.enableVertexAttribArray(S),P[S]=1),W[S]!==I&&(i.vertexAttribDivisor(S,I),W[S]=I)}function v(){const S=r.newAttributes,I=r.enabledAttributes;for(let z=0,P=I.length;z<P;z++)I[z]!==S[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function x(S,I,z,P,W,X,Q){Q===!0?i.vertexAttribIPointer(S,I,z,W,X):i.vertexAttribPointer(S,I,z,P,W,X)}function M(S,I,z,P){_();const W=P.attributes,X=z.getAttributes(),Q=I.defaultAttributeValues;for(const et in X){const H=X[et];if(H.location>=0){let it=W[et];if(it===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const q=it.normalized,dt=it.itemSize,Rt=t.get(it);if(Rt===void 0)continue;const _t=Rt.buffer,V=Rt.type,tt=Rt.bytesPerElement,ft=V===i.INT||V===i.UNSIGNED_INT||it.gpuType===Gl;if(it.isInterleavedBufferAttribute){const rt=it.data,At=rt.stride,wt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let U=0;U<H.locationSize;U++)m(H.location+U,rt.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let U=0;U<H.locationSize;U++)p(H.location+U);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let U=0;U<H.locationSize;U++)x(H.location+U,dt/H.locationSize,V,q,At*tt,(wt+dt/H.locationSize*U)*tt,ft)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt,it.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let rt=0;rt<H.locationSize;rt++)x(H.location+rt,dt/H.locationSize,V,q,dt*tt,dt/H.locationSize*rt*tt,ft)}}else if(Q!==void 0){const q=Q[et];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(H.location,q);break;case 3:i.vertexAttrib3fv(H.location,q);break;case 4:i.vertexAttrib4fv(H.location,q);break;default:i.vertexAttrib1fv(H.location,q)}}}}v()}function w(){L();for(const S in n){const I=n[S];for(const z in I){const P=I[z];for(const W in P)d(P[W].object),delete P[W];delete I[z]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const z in I){const P=I[z];for(const W in P)d(P[W].object),delete P[W];delete I[z]}delete n[S.id]}function A(S){for(const I in n){const z=n[I];if(z[S.id]===void 0)continue;const P=z[S.id];for(const W in P)d(P[W].object),delete P[W];delete z[S.id]}}function L(){y(),a=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function tp(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function a(h,d,u){u!==0&&(i.drawArraysInstanced(n,h,d,u),e.update(d,n,u))}function o(h,d,u){if(u===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let f=0;f<u;f++)this.render(h[f],d[f]);else{c.multiDrawArraysWEBGL(n,h,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];e.update(f,n,1)}}function l(h,d,u,c){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)a(h[g],d[g],c[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,d,0,c,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];for(let _=0;_<c.length;_++)e.update(g,n,c[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ep(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Re&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const A=E===ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Pn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wn&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const u=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:M,maxSamples:w}}function np(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Gn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,c){const f=u.length!==0||c||n!==0||s;return s=c,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,c){e=d(u,c,0)},this.setState=function(u,c,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):h();else{const v=r?0:n,x=v*4;let M=m.clippingState||null;l.value=M,M=d(g,c,x,f);for(let w=0;w!==x;++w)M[w]=e[w];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,c,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,v=c.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ip(i){let t=new WeakMap;function e(a,o){return o===Jr?a.mapping=Ci:o===Qr&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jr||o===Qr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new fu(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class rc extends nc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,Bo=[.125,.215,.35,.446,.526,.582],Wn=20,zr=new rc,zo=new vt;let Gr=null,kr=0,Hr=0,Vr=!1;const kn=(1+Math.sqrt(5))/2,mi=1/kn,Go=[new O(-kn,mi,0),new O(kn,mi,0),new O(-mi,0,kn),new O(mi,0,kn),new O(0,kn,-mi),new O(0,kn,mi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Gr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gr,kr,Hr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:ar,format:Re,colorSpace:gn,depthBuffer:!1},s=Ho(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sp(r)),this._blurMaterial=rp(r,t,e)}return s}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,s){const o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,c=d.toneMapping;d.getClearColor(zo),d.toneMapping=fn,d.autoClear=!1;const f=new Yn({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new Te(new Bi,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(zo),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));const x=this._cubeSize;Ps(s,v*x,m>2?x:0,x,x),d.setRenderTarget(s),_&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=c,d.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ci||t.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Go[(s-r-1)%Go.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Te(this._lodPlanes[s],h),c=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wn-1),_=r/g,p=isFinite(r)?1+Math.floor(d*_):Wn;p>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const m=[];let v=0;for(let A=0;A<Wn;++A){const L=A/_,y=Math.exp(-L*L/2);m.push(y),A===0?v+=y:A<p&&(v+=2*y)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;c.envMap.value=t.texture,c.samples.value=p,c.weights.value=m,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:x}=this;c.dTheta.value=g,c.mipInt.value=x-n;const M=this._sizeLods[s],w=3*M*(s>x-Mi?s-x+Mi:0),E=4*(this._cubeSize-M);Ps(e,w,E,3*M,2*M),l.setRenderTarget(e),l.render(u,zr)}}function sp(i){const t=[],e=[],n=[];let s=i;const r=i-Mi+1+Bo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Mi?l=Bo[a-i+Mi-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,u=1+h,c=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),x=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,L=E>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];v.set(y,_*g*E),x.set(c,p*g*E);const S=[E,E,E,E,E,E];M.set(S,m*g*E)}const w=new je;w.setAttribute("position",new re(v,_)),w.setAttribute("uv",new re(x,p)),w.setAttribute("faceIndex",new re(M,m)),t.push(w),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ho(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rp(i,t,e){const n=new Float32Array(Wn),s=new O(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Vo(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Wo(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ya(){return`

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
	`}function ap(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Jr||l===Qr,d=l===Ci||l===Ri;if(h||d){let u=t.get(o);const c=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new ko(i)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return h&&f&&f.height>0||d&&f&&s(f)?(e===null&&(e=new ko(i)),u=h?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function op(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lp(i,t,e,n){const s={},r=new WeakMap;function a(u){const c=u.target;c.index!==null&&t.remove(c.index);for(const g in c.attributes)t.remove(c.attributes[g]);for(const g in c.morphAttributes){const _=c.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}c.removeEventListener("dispose",a),delete s[c.id];const f=r.get(c);f&&(t.remove(f),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(u,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function l(u){const c=u.attributes;for(const g in c)t.update(c[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function h(u){const c=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){const w=v[x+0],E=v[x+1],A=v[x+2];c.push(w,E,E,A,A,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const w=x+0,E=x+1,A=x+2;c.push(w,E,E,A,A,w)}}else return;const p=new(ql(c)?Ql:Jl)(c,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function d(u){const c=r.get(u);if(c){const f=u.index;f!==null&&c.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function cp(i,t,e){let n;function s(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,f){i.drawElements(n,f,r,c*a),e.update(f,n,1)}function h(c,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,c*a,g),e.update(f,n,g))}function d(c,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(c[p]/a,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,r,c,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}}function u(c,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)h(c[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,c,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v];for(let v=0;v<_.length;v++)e.update(m,n,_[v])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function hp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function up(i,t,e){const n=new WeakMap,s=new he;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==u){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;c!==void 0&&c.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let w=o.attributes.position.count*M,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const A=new Float32Array(w*E*4*u),L=new jl(A,w,E,u);L.type=wn,L.needsUpdate=!0;const y=M*4;for(let I=0;I<u;I++){const z=m[I],P=v[I],W=x[I],X=w*E*4*I;for(let Q=0;Q<z.count;Q++){const et=Q*y;g===!0&&(s.fromBufferAttribute(z,Q),A[X+et+0]=s.x,A[X+et+1]=s.y,A[X+et+2]=s.z,A[X+et+3]=0),_===!0&&(s.fromBufferAttribute(P,Q),A[X+et+4]=s.x,A[X+et+5]=s.y,A[X+et+6]=s.z,A[X+et+7]=0),p===!0&&(s.fromBufferAttribute(W,Q),A[X+et+8]=s.x,A[X+et+9]=s.y,A[X+et+10]=s.z,A[X+et+11]=W.itemSize===4?s.w:1)}}c={count:u,texture:L,size:new kt(w,E)},n.set(o,c),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<h.length;p++)g+=h[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function dp(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return u}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class ac extends Ae{constructor(t,e,n,s,r,a,o,l,h,d){if(d=d!==void 0?d:Ti,d!==Ti&&d!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ti&&(n=Li),n===void 0&&d===Qi&&(n=is),super(null,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const oc=new Ae,lc=new ac(1,1);lc.compareFunction=Yl;const cc=new jl,hc=new Jh,uc=new ic,Xo=[],Yo=[],qo=new Float32Array(16),$o=new Float32Array(9),jo=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xo[s];if(r===void 0&&(r=new Float32Array(s),Xo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lr(i,t){let e=Yo[t];e===void 0&&(e=new Int32Array(t),Yo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;jo.set(n),i.uniformMatrix2fv(this.addr,!1,jo),oe(e,n)}}function xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;$o.set(n),i.uniformMatrix3fv(this.addr,!1,$o),oe(e,n)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;qo.set(n),i.uniformMatrix4fv(this.addr,!1,qo),oe(e,n)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?lc:oc;e.setTexture2D(t||r,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hc,s)}function Lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uc,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cc,s)}function Dp(i){switch(i){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return xp;case 35676:return vp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return yp;case 35669:case 35673:return Ep;case 5125:return Tp;case 36294:return Ap;case 36295:return bp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Ip(i,t){i.uniform1fv(this.addr,t)}function Up(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Np(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Op(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bp(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zp(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gp(i,t){i.uniform1iv(this.addr,t)}function kp(i,t){i.uniform2iv(this.addr,t)}function Hp(i,t){i.uniform3iv(this.addr,t)}function Vp(i,t){i.uniform4iv(this.addr,t)}function Wp(i,t){i.uniform1uiv(this.addr,t)}function Xp(i,t){i.uniform2uiv(this.addr,t)}function Yp(i,t){i.uniform3uiv(this.addr,t)}function qp(i,t){i.uniform4uiv(this.addr,t)}function $p(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||oc,r[a])}function jp(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hc,r[a])}function Kp(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uc,r[a])}function Zp(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cc,r[a])}function Jp(i){switch(i){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Op;case 35674:return Fp;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return Gp;case 35667:case 35671:return kp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Xp;case 36295:return Yp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dp(e.type)}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jp(e.type)}}class em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function Ko(i,t){i.seq.push(t),i.map[t.id]=t}function nm(i,t,e){const n=i.name,s=n.length;for(Wr.lastIndex=0;;){const r=Wr.exec(n),a=Wr.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Ko(e,h===void 0?new Qp(o,i,t):new tm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new em(o),Ko(e,u)),e=u}}}class Os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);nm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Zo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const im=37297;let sm=0;function rm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function am(i){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i);let n;switch(t===e?n="":t===Xs&&e===Ws?n="LinearDisplayP3ToLinearSRGB":t===Ws&&e===Xs&&(n="LinearSRGBToLinearDisplayP3"),i){case gn:case or:return[n,"LinearTransferOETF"];case Ze:case xa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Jo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rm(i.getShaderSource(t),a)}else return s}function om(i,t){const e=am(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lm(i,t){let e;switch(t){case gh:e="Linear";break;case _h:e="Reinhard";break;case xh:e="OptimizedCineon";break;case vh:e="ACESFilmic";break;case Sh:e="AgX";break;case yh:e="Neutral";break;case Mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function hm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ki(i){return i!==""}function Qo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(i){return i.replace(dm,pm)}const fm=new Map;function pm(i,t){let e=Ot[t];if(e===void 0){const n=fm.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return na(e)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(i){return i.replace(mm,gm)}function gm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _m(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function xm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Ri:t="ENVMAP_TYPE_CUBE";break;case rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ri:t="ENVMAP_MODE_REFRACTION";break}return t}function Mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sr:t="ENVMAP_BLENDING_MULTIPLY";break;case ph:t="ENVMAP_BLENDING_MIX";break;case mh:t="ENVMAP_BLENDING_ADD";break}return t}function Sm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ym(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_m(e),h=xm(e),d=vm(e),u=Mm(e),c=Sm(e),f=cm(e),g=hm(r),_=s.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),m.length>0&&(m+=`
`)):(p=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),m=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==fn?lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),a=na(a),a=Qo(a,e),a=tl(a,e),o=na(o),o=Qo(o,e),o=tl(o,e),a=el(a),o=el(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+p+a,M=v+m+o,w=Zo(s,s.VERTEX_SHADER,x),E=Zo(s,s.FRAGMENT_SHADER,M);s.attachShader(_,w),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(w).trim(),W=s.getShaderInfoLog(E).trim();let X=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,E);else{const et=Jo(s,w,"vertex"),H=Jo(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+et+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(P===""||W==="")&&(Q=!1);Q&&(I.diagnostics={runnable:X,programLog:z,vertexShader:{log:P,prefix:p},fragmentShader:{log:W,prefix:m}})}s.deleteShader(w),s.deleteShader(E),L=new Os(s,_),y=um(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,im)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let Em=0;class Tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Am(t),e.set(t,n)),n}}class Am{constructor(t){this.id=Em++,this.code=t,this.usedTimes=0}}function bm(i,t,e,n,s,r,a){const o=new Ma,l=new Tm,h=new Set,d=[],u=s.logarithmicDepthBuffer,c=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return h.add(y),y===0?"uv":`uv${y}`}function p(y,S,I,z,P){const W=z.fog,X=P.geometry,Q=y.isMeshStandardMaterial?z.environment:null,et=(y.isMeshStandardMaterial?e:t).get(y.envMap||Q),H=et&&et.mapping===rr?et.image.height:null,it=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=q!==void 0?q.length:0;let Rt=0;X.morphAttributes.position!==void 0&&(Rt=1),X.morphAttributes.normal!==void 0&&(Rt=2),X.morphAttributes.color!==void 0&&(Rt=3);let _t,V,tt,ft;if(it){const Yt=Je[it];_t=Yt.vertexShader,V=Yt.fragmentShader}else _t=y.vertexShader,V=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),ft=l.getFragmentShaderID(y);const rt=i.getRenderTarget(),At=P.isInstancedMesh===!0,wt=P.isBatchedMesh===!0,U=!!y.map,Mt=!!y.matcap,nt=!!et,Ct=!!y.aoMap,St=!!y.lightMap,Ut=!!y.bumpMap,bt=!!y.normalMap,Gt=!!y.displacementMap,Jt=!!y.emissiveMap,R=!!y.metalnessMap,T=!!y.roughnessMap,k=y.anisotropy>0,j=y.clearcoat>0,Z=y.dispersion>0,J=y.iridescence>0,xt=y.sheen>0,lt=y.transmission>0,ot=k&&!!y.anisotropyMap,Dt=j&&!!y.clearcoatMap,st=j&&!!y.clearcoatNormalMap,yt=j&&!!y.clearcoatRoughnessMap,Vt=J&&!!y.iridescenceMap,Et=J&&!!y.iridescenceThicknessMap,pt=xt&&!!y.sheenColorMap,Ft=xt&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,ne=!!y.specularColorMap,Bt=!!y.specularIntensityMap,D=lt&&!!y.transmissionMap,K=lt&&!!y.thicknessMap,$=!!y.gradientMap,ct=!!y.alphaMap,ut=y.alphaTest>0,Wt=!!y.alphaHash,Kt=!!y.extensions;let ee=fn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ee=i.toneMapping);const fe={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:_t,fragmentShader:V,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:wt,instancing:At,instancingColor:At&&P.instanceColor!==null,instancingMorph:At&&P.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:gn,alphaToCoverage:!!y.alphaToCoverage,map:U,matcap:Mt,envMap:nt,envMapMode:nt&&et.mapping,envMapCubeUVHeight:H,aoMap:Ct,lightMap:St,bumpMap:Ut,normalMap:bt,displacementMap:c&&Gt,emissiveMap:Jt,normalMapObjectSpace:bt&&y.normalMapType===Oh,normalMapTangentSpace:bt&&y.normalMapType===_a,metalnessMap:R,roughnessMap:T,anisotropy:k,anisotropyMap:ot,clearcoat:j,clearcoatMap:Dt,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:Z,iridescence:J,iridescenceMap:Vt,iridescenceThicknessMap:Et,sheen:xt,sheenColorMap:pt,sheenRoughnessMap:Ft,specularMap:Ht,specularColorMap:ne,specularIntensityMap:Bt,transmission:lt,transmissionMap:D,thicknessMap:K,gradientMap:$,opaque:y.transparent===!1&&y.blending===Ei&&y.alphaToCoverage===!1,alphaMap:ct,alphaTest:ut,alphaHash:Wt,combine:y.combine,mapUv:U&&_(y.map.channel),aoMapUv:Ct&&_(y.aoMap.channel),lightMapUv:St&&_(y.lightMap.channel),bumpMapUv:Ut&&_(y.bumpMap.channel),normalMapUv:bt&&_(y.normalMap.channel),displacementMapUv:Gt&&_(y.displacementMap.channel),emissiveMapUv:Jt&&_(y.emissiveMap.channel),metalnessMapUv:R&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:ot&&_(y.anisotropyMap.channel),clearcoatMapUv:Dt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(y.sheenRoughnessMap.channel),specularMapUv:Ht&&_(y.specularMap.channel),specularColorMapUv:ne&&_(y.specularColorMap.channel),specularIntensityMapUv:Bt&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:K&&_(y.thicknessMap.channel),alphaMapUv:ct&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(bt||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(U||ct),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:U&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===Zt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xe,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Kt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return fe.vertexUv1s=h.has(1),fe.vertexUv2s=h.has(2),fe.vertexUv3s=h.has(3),h.clear(),fe}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(v(S,y),x(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),y.push(o.mask)}function M(y){const S=g[y.type];let I;if(S){const z=Je[S];I=ec.clone(z.uniforms)}else I=y.uniforms;return I}function w(y,S){let I;for(let z=0,P=d.length;z<P;z++){const W=d[z];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new ym(i,S,y,r),d.push(I)),I}function E(y){if(--y.usedTimes===0){const S=d.indexOf(y);d[S]=d[d.length-1],d.pop(),y.destroy()}}function A(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:d,dispose:L}}function wm(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function il(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,c,f,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:c,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=c,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function o(u,c,f,g,_,p){const m=a(u,c,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,c,f,g,_,p){const m=a(u,c,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function h(u,c){e.length>1&&e.sort(u||Cm),n.length>1&&n.sort(c||il),s.length>1&&s.sort(c||il)}function d(){for(let u=t,c=i.length;u<c;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:h}}function Rm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new sl,i.set(n,[a])):s>=r.length?(a=new sl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new vt};break;case"SpotLight":e={position:new O,direction:new O,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dm=0;function Im(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Um(i){const t=new Lm,e=Pm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new O);const s=new O,r=new te,a=new te;function o(h,d){let u=0,c=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let g=0,_=0,p=0,m=0,v=0,x=0,M=0,w=0,E=0,A=0,L=0;h.sort(Im);const y=d===!0?Math.PI:1;for(let I=0,z=h.length;I<z;I++){const P=h[I],W=P.color,X=P.intensity,Q=P.distance,et=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=W.r*X*y,c+=W.g*X*y,f+=W.b*X*y;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],X);L++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const it=P.shadow,q=e.get(P);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=P.shadow.matrix,x++}n.directional[g]=H,g++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(W).multiplyScalar(X*y),H.distance=Q,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[p]=H;const it=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,it.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[p]=it.matrix,P.castShadow){const q=e.get(P);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,n.spotShadow[p]=q,n.spotShadowMap[p]=et,w++}p++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(W).multiplyScalar(X),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*y),H.distance=P.distance,H.decay=P.decay,P.castShadow){const it=P.shadow,q=e.get(P);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,q.shadowCameraNear=it.camera.near,q.shadowCameraFar=it.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=et,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=H,_++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(X*y),H.groundColor.copy(P.groundColor).multiplyScalar(X*y),n.hemi[v]=H,v++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==g||S.pointLength!==_||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==M||S.numSpotShadows!==w||S.numSpotMaps!==E||S.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=_,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,S.directionalLength=g,S.pointLength=_,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=M,S.numSpotShadows=w,S.numSpotMaps=E,S.numLightProbes=L,n.version=Dm++)}function l(h,d){let u=0,c=0,f=0,g=0,_=0;const p=d.matrixWorldInverse;for(let m=0,v=h.length;m<v;m++){const x=h[m];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=n.point[c];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),c++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function rl(i){const t=new Um(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(d){t.setup(e,d)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new rl(i),t.set(s,[o])):r>=a.length?(o=new rl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Om extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fm extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
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
}`;function Gm(i,t,e){let n=new Sa;const s=new kt,r=new kt,a=new he,o=new Om({depthPacking:Nh}),l=new Fm,h={},d=e.maxTextureSize,u={[pn]:Pe,[Pe]:pn,[xe]:xe},c=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Bm,fragmentShader:zm}),f=c.clone();f.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(g,c),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let m=this.type;this.render=function(E,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ln),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const P=m!==hn&&this.type===hn,W=m===hn&&this.type!==hn;for(let X=0,Q=E.length;X<Q;X++){const et=E[X],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||P===!0||W===!0){const dt=this.type!==hn?{minFilter:Ce,magFilter:Ce}:{};H.map!==null&&H.map.dispose(),H.map=new Kn(s.x,s.y,dt),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const q=H.getViewportCount();for(let dt=0;dt<q;dt++){const Rt=H.getViewport(dt);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(a),H.updateMatrices(et,dt),n=H.getFrustum(),M(A,L,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===hn&&v(H,L),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(y,S,I)};function v(E,A){const L=t.update(_);c.defines.VSM_SAMPLES!==E.blurSamples&&(c.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Kn(s.x,s.y)),c.uniforms.shadow_pass.value=E.map.texture,c.uniforms.resolution.value=E.mapSize,c.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,L,c,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,L,f,_,null)}function x(E,A,L,y){let S=null;const I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,P=A.uuid;let W=h[z];W===void 0&&(W={},h[z]=W);let X=W[P];X===void 0&&(X=S.clone(),W[P]=X,A.addEventListener("dispose",w)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,y===hn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=L}return S}function M(E,A,L,y,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===hn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const P=t.update(E),W=E.material;if(Array.isArray(W)){const X=P.groups;for(let Q=0,et=X.length;Q<et;Q++){const H=X[Q],it=W[H.materialIndex];if(it&&it.visible){const q=x(E,it,y,S);E.onBeforeShadow(i,E,A,L,P,q,H),i.renderBufferDirect(L,null,P,q,E,H),E.onAfterShadow(i,E,A,L,P,q,H)}}}else if(W.visible){const X=x(E,W,y,S);E.onBeforeShadow(i,E,A,L,P,X,null),i.renderBufferDirect(L,null,P,X,E,null),E.onAfterShadow(i,E,A,L,P,X,null)}}const z=E.children;for(let P=0,W=z.length;P<W;P++)M(z[P],A,L,y,S)}function w(E){E.target.removeEventListener("dispose",w);for(const L in h){const y=h[L],S=E.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function km(i){function t(){let D=!1;const K=new he;let $=null;const ct=new he(0,0,0,0);return{setMask:function(ut){$!==ut&&!D&&(i.colorMask(ut,ut,ut,ut),$=ut)},setLocked:function(ut){D=ut},setClear:function(ut,Wt,Kt,ee,fe){fe===!0&&(ut*=ee,Wt*=ee,Kt*=ee),K.set(ut,Wt,Kt,ee),ct.equals(K)===!1&&(i.clearColor(ut,Wt,Kt,ee),ct.copy(K))},reset:function(){D=!1,$=null,ct.set(-1,0,0,0)}}}function e(){let D=!1,K=null,$=null,ct=null;return{setTest:function(ut){ut?ft(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(ut){K!==ut&&!D&&(i.depthMask(ut),K=ut)},setFunc:function(ut){if($!==ut){switch(ut){case oh:i.depthFunc(i.NEVER);break;case lh:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case hh:i.depthFunc(i.EQUAL);break;case uh:i.depthFunc(i.GEQUAL);break;case dh:i.depthFunc(i.GREATER);break;case fh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ct!==ut&&(i.clearDepth(ut),ct=ut)},reset:function(){D=!1,K=null,$=null,ct=null}}}function n(){let D=!1,K=null,$=null,ct=null,ut=null,Wt=null,Kt=null,ee=null,fe=null;return{setTest:function(Yt){D||(Yt?ft(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Yt){K!==Yt&&!D&&(i.stencilMask(Yt),K=Yt)},setFunc:function(Yt,Ke,Me){($!==Yt||ct!==Ke||ut!==Me)&&(i.stencilFunc(Yt,Ke,Me),$=Yt,ct=Ke,ut=Me)},setOp:function(Yt,Ke,Me){(Wt!==Yt||Kt!==Ke||ee!==Me)&&(i.stencilOp(Yt,Ke,Me),Wt=Yt,Kt=Ke,ee=Me)},setLocked:function(Yt){D=Yt},setClear:function(Yt){fe!==Yt&&(i.clearStencil(Yt),fe=Yt)},reset:function(){D=!1,K=null,$=null,ct=null,ut=null,Wt=null,Kt=null,ee=null,fe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,c=[],f=null,g=!1,_=null,p=null,m=null,v=null,x=null,M=null,w=null,E=new vt(0,0,0),A=0,L=!1,y=null,S=null,I=null,z=null,P=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(et)[1]),X=Q>=1):et.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),X=Q>=2);let H=null,it={};const q=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Rt=new he().fromArray(q),_t=new he().fromArray(dt);function V(D,K,$,ct){const ut=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(D,Wt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<$;Kt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(K+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return Wt}const tt={};tt[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),r.setFunc(Hs),Ut(!1),bt(Ga),ft(i.CULL_FACE),Ct(Ln);function ft(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function rt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function At(D,K){return d[D]!==K?(i.bindFramebuffer(D,K),d[D]=K,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function wt(D,K){let $=c,ct=!1;if(D){$=u.get(K),$===void 0&&($=[],u.set(K,$));const ut=D.textures;if($.length!==ut.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,Kt=ut.length;Wt<Kt;Wt++)$[Wt]=i.COLOR_ATTACHMENT0+Wt;$.length=ut.length,ct=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ct=!0);ct&&i.drawBuffers($)}function U(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const Mt={[Vn]:i.FUNC_ADD,[Wc]:i.FUNC_SUBTRACT,[Xc]:i.FUNC_REVERSE_SUBTRACT};Mt[Yc]=i.MIN,Mt[qc]=i.MAX;const nt={[$c]:i.ZERO,[jc]:i.ONE,[Kc]:i.SRC_COLOR,[Kr]:i.SRC_ALPHA,[nh]:i.SRC_ALPHA_SATURATE,[th]:i.DST_COLOR,[Jc]:i.DST_ALPHA,[Zc]:i.ONE_MINUS_SRC_COLOR,[Zr]:i.ONE_MINUS_SRC_ALPHA,[eh]:i.ONE_MINUS_DST_COLOR,[Qc]:i.ONE_MINUS_DST_ALPHA,[ih]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[rh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(D,K,$,ct,ut,Wt,Kt,ee,fe,Yt){if(D===Ln){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),D!==Vc){if(D!==_||Yt!==L){if((p!==Vn||x!==Vn)&&(i.blendEquation(i.FUNC_ADD),p=Vn,x=Vn),Yt)switch(D){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ks:i.blendFunc(i.ONE,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ks:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,v=null,M=null,w=null,E.set(0,0,0),A=0,_=D,L=Yt}return}ut=ut||K,Wt=Wt||$,Kt=Kt||ct,(K!==p||ut!==x)&&(i.blendEquationSeparate(Mt[K],Mt[ut]),p=K,x=ut),($!==m||ct!==v||Wt!==M||Kt!==w)&&(i.blendFuncSeparate(nt[$],nt[ct],nt[Wt],nt[Kt]),m=$,v=ct,M=Wt,w=Kt),(ee.equals(E)===!1||fe!==A)&&(i.blendColor(ee.r,ee.g,ee.b,fe),E.copy(ee),A=fe),_=D,L=!1}function St(D,K){D.side===xe?rt(i.CULL_FACE):ft(i.CULL_FACE);let $=D.side===Pe;K&&($=!$),Ut($),D.blending===Ei&&D.transparent===!1?Ct(Ln):Ct(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const ct=D.stencilWrite;a.setTest(ct),ct&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Jt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function bt(D){D!==zc?(ft(i.CULL_FACE),D!==S&&(D===Ga?i.cullFace(i.BACK):D===Gc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),S=D}function Gt(D){D!==I&&(X&&i.lineWidth(D),I=D)}function Jt(D,K,$){D?(ft(i.POLYGON_OFFSET_FILL),(z!==K||P!==$)&&(i.polygonOffset(K,$),z=K,P=$)):rt(i.POLYGON_OFFSET_FILL)}function R(D){D?ft(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+W-1),H!==D&&(i.activeTexture(D),H=D)}function k(D,K,$){$===void 0&&(H===null?$=i.TEXTURE0+W-1:$=H);let ct=it[$];ct===void 0&&(ct={type:void 0,texture:void 0},it[$]=ct),(ct.type!==D||ct.texture!==K)&&(H!==$&&(i.activeTexture($),H=$),i.bindTexture(D,K||tt[D]),ct.type=D,ct.texture=K)}function j(){const D=it[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(D){Rt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Rt.copy(D))}function Ft(D){_t.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),_t.copy(D))}function Ht(D,K){let $=l.get(K);$===void 0&&($=new WeakMap,l.set(K,$));let ct=$.get(D);ct===void 0&&(ct=i.getUniformBlockIndex(K,D.name),$.set(D,ct))}function ne(D,K){const ct=l.get(K).get(D);o.get(K)!==ct&&(i.uniformBlockBinding(K,ct,D.__bindingPointIndex),o.set(K,ct))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,it={},d={},u=new WeakMap,c=[],f=null,g=!1,_=null,p=null,m=null,v=null,x=null,M=null,w=null,E=new vt(0,0,0),A=0,L=!1,y=null,S=null,I=null,z=null,P=null,Rt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ft,disable:rt,bindFramebuffer:At,drawBuffers:wt,useProgram:U,setBlending:Ct,setMaterial:St,setFlipSided:Ut,setCullFace:bt,setLineWidth:Gt,setPolygonOffset:Jt,setScissorTest:R,activeTexture:T,bindTexture:k,unbindTexture:j,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:Vt,texImage3D:Et,updateUBOMapping:Ht,uniformBlockBinding:ne,texStorage2D:st,texStorage3D:yt,texSubImage2D:xt,texSubImage3D:lt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Dt,scissor:pt,viewport:Ft,reset:Bt}}function Hm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,d=new WeakMap;let u;const c=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return f?new OffscreenCanvas(R,T):qs("canvas")}function _(R,T,k){let j=1;const Z=Jt(R);if((Z.width>k||Z.height>k)&&(j=k/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(j*Z.width),xt=Math.floor(j*Z.height);u===void 0&&(u=g(J,xt));const lt=T?g(J,xt):u;return lt.width=J,lt.height=xt,lt.getContext("2d").drawImage(R,0,0,J,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+xt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Ce&&R.minFilter!==Ee}function m(R){i.generateMipmap(R)}function v(R,T,k,j,Z=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=T;if(T===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),T===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),T===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),T===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),T===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),T===i.RGBA){const xt=Z?Vs:qt.getTransfer(j);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=xt===Zt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(R,T){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ce&&R.minFilter!==Ee?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function M(R){const T=R.target;T.removeEventListener("dispose",M),E(T),T.isVideoTexture&&d.delete(T)}function w(R){const T=R.target;T.removeEventListener("dispose",w),L(T)}function E(R){const T=n.get(R);if(T.__webglInit===void 0)return;const k=R.source,j=c.get(k);if(j){const Z=j[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(R),Object.keys(j).length===0&&c.delete(k)}n.remove(R)}function A(R){const T=n.get(R);i.deleteTexture(T.__webglTexture);const k=R.source,j=c.get(k);delete j[T.__cacheKey],a.memory.textures--}function L(R){const T=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let Z=0;Z<T.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)i.deleteFramebuffer(T.__webglFramebuffer[j]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const k=R.textures;for(let j=0,Z=k.length;j<Z;j++){const J=n.get(k[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(R)}let y=0;function S(){y=0}function I(){const R=y;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),y+=1,R}function z(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function P(R,T){const k=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(k,R,T);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+T)}function W(R,T){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Rt(k,R,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+T)}function X(R,T){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Rt(k,R,T);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+T)}function Q(R,T){const k=n.get(R);if(R.version>0&&k.__version!==R.version){_t(k,R,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+T)}const et={[un]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},H={[Ce]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[hs]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[fr]:i.LINEAR_MIPMAP_NEAREST,[Ye]:i.LINEAR_MIPMAP_LINEAR},it={[Fh]:i.NEVER,[Vh]:i.ALWAYS,[Bh]:i.LESS,[Yl]:i.LEQUAL,[zh]:i.EQUAL,[Hh]:i.GEQUAL,[Gh]:i.GREATER,[kh]:i.NOTEQUAL};function q(R,T){if(T.type===wn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ee||T.magFilter===fr||T.magFilter===hs||T.magFilter===Ye||T.minFilter===Ee||T.minFilter===fr||T.minFilter===hs||T.minFilter===Ye)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,H[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,H[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ce||T.minFilter!==hs&&T.minFilter!==Ye||T.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function dt(R,T){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",M));const j=T.source;let Z=c.get(j);Z===void 0&&(Z={},c.set(j,Z));const J=z(T);if(J!==R.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[J].usedTimes++;const xt=Z[R.__cacheKey];xt!==void 0&&(Z[R.__cacheKey].usedTimes--,xt.usedTimes===0&&A(T)),R.__cacheKey=J,R.__webglTexture=Z[J].texture}return k}function Rt(R,T,k){let j=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=i.TEXTURE_3D);const Z=dt(R,T),J=T.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+k);const xt=n.get(J);if(J.version!==xt.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);const lt=qt.getPrimaries(qt.workingColorSpace),ot=T.colorSpace===bn?null:qt.getPrimaries(T.colorSpace),Dt=T.colorSpace===bn||lt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let st=_(T.image,!1,s.maxTextureSize);st=Gt(T,st);const yt=r.convert(T.format,T.colorSpace),Vt=r.convert(T.type);let Et=v(T.internalFormat,yt,Vt,T.colorSpace,T.isVideoTexture);q(j,T);let pt;const Ft=T.mipmaps,Ht=T.isVideoTexture!==!0,ne=xt.__version===void 0||Z===!0,Bt=J.dataReady,D=x(T,st);if(T.isDepthTexture)Et=i.DEPTH_COMPONENT16,T.type===wn?Et=i.DEPTH_COMPONENT32F:T.type===Li?Et=i.DEPTH_COMPONENT24:T.type===is&&(Et=i.DEPTH24_STENCIL8),ne&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Et,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Et,st.width,st.height,0,yt,Vt,null));else if(T.isDataTexture)if(Ft.length>0){Ht&&ne&&e.texStorage2D(i.TEXTURE_2D,D,Et,Ft[0].width,Ft[0].height);for(let K=0,$=Ft.length;K<$;K++)pt=Ft[K],Ht?Bt&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,yt,Vt,pt.data):e.texImage2D(i.TEXTURE_2D,K,Et,pt.width,pt.height,0,yt,Vt,pt.data);T.generateMipmaps=!1}else Ht?(ne&&e.texStorage2D(i.TEXTURE_2D,D,Et,st.width,st.height),Bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,yt,Vt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Et,st.width,st.height,0,yt,Vt,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ht&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,Et,Ft[0].width,Ft[0].height,st.depth);for(let K=0,$=Ft.length;K<$;K++)pt=Ft[K],T.format!==Re?yt!==null?Ht?Bt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,st.depth,yt,pt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Et,pt.width,pt.height,st.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,st.depth,yt,Vt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Et,pt.width,pt.height,st.depth,0,yt,Vt,pt.data)}else{Ht&&ne&&e.texStorage2D(i.TEXTURE_2D,D,Et,Ft[0].width,Ft[0].height);for(let K=0,$=Ft.length;K<$;K++)pt=Ft[K],T.format!==Re?yt!==null?Ht?Bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,yt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Bt&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,yt,Vt,pt.data):e.texImage2D(i.TEXTURE_2D,K,Et,pt.width,pt.height,0,yt,Vt,pt.data)}else if(T.isDataArrayTexture)Ht?(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,Et,st.width,st.height,st.depth),Bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,yt,Vt,st.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,st.width,st.height,st.depth,0,yt,Vt,st.data);else if(T.isData3DTexture)Ht?(ne&&e.texStorage3D(i.TEXTURE_3D,D,Et,st.width,st.height,st.depth),Bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,yt,Vt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Et,st.width,st.height,st.depth,0,yt,Vt,st.data);else if(T.isFramebufferTexture){if(ne)if(Ht)e.texStorage2D(i.TEXTURE_2D,D,Et,st.width,st.height);else{let K=st.width,$=st.height;for(let ct=0;ct<D;ct++)e.texImage2D(i.TEXTURE_2D,ct,Et,K,$,0,yt,Vt,null),K>>=1,$>>=1}}else if(Ft.length>0){if(Ht&&ne){const K=Jt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,D,Et,K.width,K.height)}for(let K=0,$=Ft.length;K<$;K++)pt=Ft[K],Ht?Bt&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,yt,Vt,pt):e.texImage2D(i.TEXTURE_2D,K,Et,yt,Vt,pt);T.generateMipmaps=!1}else if(Ht){if(ne){const K=Jt(st);e.texStorage2D(i.TEXTURE_2D,D,Et,K.width,K.height)}Bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Vt,st)}else e.texImage2D(i.TEXTURE_2D,0,Et,yt,Vt,st);p(T)&&m(j),xt.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function _t(R,T,k){if(T.image.length!==6)return;const j=dt(R,T),Z=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const J=n.get(Z);if(Z.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+k);const xt=qt.getPrimaries(qt.workingColorSpace),lt=T.colorSpace===bn?null:qt.getPrimaries(T.colorSpace),ot=T.colorSpace===bn||xt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const Dt=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,yt=[];for(let $=0;$<6;$++)!Dt&&!st?yt[$]=_(T.image[$],!0,s.maxCubemapSize):yt[$]=st?T.image[$].image:T.image[$],yt[$]=Gt(T,yt[$]);const Vt=yt[0],Et=r.convert(T.format,T.colorSpace),pt=r.convert(T.type),Ft=v(T.internalFormat,Et,pt,T.colorSpace),Ht=T.isVideoTexture!==!0,ne=J.__version===void 0||j===!0,Bt=Z.dataReady;let D=x(T,Vt);q(i.TEXTURE_CUBE_MAP,T);let K;if(Dt){Ht&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ft,Vt.width,Vt.height);for(let $=0;$<6;$++){K=yt[$].mipmaps;for(let ct=0;ct<K.length;ct++){const ut=K[ct];T.format!==Re?Et!==null?Ht?Bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ut.width,ut.height,Et,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ut.width,ut.height,Et,pt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Ft,ut.width,ut.height,0,Et,pt,ut.data)}}}else{if(K=T.mipmaps,Ht&&ne){K.length>0&&D++;const $=Jt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ft,$.width,$.height)}for(let $=0;$<6;$++)if(st){Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,yt[$].width,yt[$].height,Et,pt,yt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,yt[$].width,yt[$].height,0,Et,pt,yt[$].data);for(let ct=0;ct<K.length;ct++){const Wt=K[ct].image[$].image;Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Wt.width,Wt.height,Et,pt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Ft,Wt.width,Wt.height,0,Et,pt,Wt.data)}}else{Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Et,pt,yt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,Et,pt,yt[$]);for(let ct=0;ct<K.length;ct++){const ut=K[ct];Ht?Bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Et,pt,ut.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Ft,Et,pt,ut.image[$])}}}p(T)&&m(i.TEXTURE_CUBE_MAP),J.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function V(R,T,k,j,Z,J){const xt=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),ot=v(k.internalFormat,xt,lt,k.colorSpace);if(!n.get(T).__hasExternalTextures){const st=Math.max(1,T.width>>J),yt=Math.max(1,T.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,J,ot,st,yt,T.depth,0,xt,lt,null):e.texImage2D(Z,J,ot,st,yt,0,xt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ut(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,n.get(k).__webglTexture,0,St(T)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,n.get(k).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(R,T,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let j=i.DEPTH_COMPONENT24;if(k||Ut(T)){const Z=T.depthTexture;Z&&Z.isDepthTexture&&(Z.type===wn?j=i.DEPTH_COMPONENT32F:Z.type===Li&&(j=i.DEPTH_COMPONENT24));const J=St(T);Ut(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,j,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const j=St(T);k&&Ut(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,T.width,T.height):Ut(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const j=T.textures;for(let Z=0;Z<j.length;Z++){const J=j[Z],xt=r.convert(J.format,J.colorSpace),lt=r.convert(J.type),ot=v(J.internalFormat,xt,lt,J.colorSpace),Dt=St(T);k&&Ut(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,ot,T.width,T.height):Ut(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,ot,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ot,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),P(T.depthTexture,0);const j=n.get(T.depthTexture).__webglTexture,Z=St(T);if(T.depthTexture.format===Ti)Ut(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(T.depthTexture.format===Qi)Ut(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function rt(R){const T=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ft(T.__webglFramebuffer,R)}else if(k){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]=i.createRenderbuffer(),tt(T.__webglDepthbuffer[j],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),tt(T.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(R,T,k){const j=n.get(R);T!==void 0&&V(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&rt(R)}function wt(R){const T=R.texture,k=n.get(R),j=n.get(T);R.addEventListener("dispose",w);const Z=R.textures,J=R.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=T.version,a.memory.textures++),J){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let ot=0;ot<T.mipmaps.length;ot++)k.__webglFramebuffer[lt][ot]=i.createFramebuffer()}else k.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)k.__webglFramebuffer[lt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(xt)for(let lt=0,ot=Z.length;lt<ot;lt++){const Dt=n.get(Z[lt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ut(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const ot=Z[lt];k.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const Dt=r.convert(ot.format,ot.colorSpace),st=r.convert(ot.type),yt=v(ot.internalFormat,Dt,st,ot.colorSpace,R.isXRRenderTarget===!0),Vt=St(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),q(i.TEXTURE_CUBE_MAP,T);for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)V(k.__webglFramebuffer[lt][ot],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ot);else V(k.__webglFramebuffer[lt],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(T)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,ot=Z.length;lt<ot;lt++){const Dt=Z[lt],st=n.get(Dt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),q(i.TEXTURE_2D,Dt),V(k.__webglFramebuffer,R,Dt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),p(Dt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),q(lt,T),T.mipmaps&&T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)V(k.__webglFramebuffer[ot],R,T,i.COLOR_ATTACHMENT0,lt,ot);else V(k.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,lt,0);p(T)&&m(lt),e.unbindTexture()}R.depthBuffer&&rt(R)}function U(R){const T=R.textures;for(let k=0,j=T.length;k<j;k++){const Z=T[k];if(p(Z)){const J=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(Z).__webglTexture;e.bindTexture(J,xt),m(J),e.unbindTexture()}}}const Mt=[],nt=[];function Ct(R){if(R.samples>0){if(Ut(R)===!1){const T=R.textures,k=R.width,j=R.height;let Z=i.COLOR_BUFFER_BIT;const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),lt=T.length>1;if(lt)for(let ot=0;ot<T.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ot=0;ot<T.length;ot++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ot]);const Dt=n.get(T[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,Z,i.NEAREST),l===!0&&(Mt.length=0,nt.length=0,Mt.push(i.COLOR_ATTACHMENT0+ot),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Mt.push(J),nt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ot=0;ot<T.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ot]);const Dt=n.get(T[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function St(R){return Math.min(s.maxSamples,R.samples)}function Ut(R){const T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(R){const T=a.render.frame;d.get(R)!==T&&(d.set(R,T),R.update())}function Gt(R,T){const k=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==gn&&k!==bn&&(qt.getTransfer(k)===Zt?(j!==Re||Z!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function Jt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=P,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=At,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Ut}function Vm(i,t){function e(n,s=bn){let r;const a=qt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.BYTE;if(n===Ah)return i.SHORT;if(n===zl)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===Re)return i.RGBA;if(n===Rh)return i.LUMINANCE;if(n===Lh)return i.LUMINANCE_ALPHA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Ph)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Dh)return i.RG;if(n===Wl)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Wa||n===Xa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===$a||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===$a)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ka||n===Za||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===to)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xr||n===ho||n===uo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xr)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===fo||n===po||n===mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Wm extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class en extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xm={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(h,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const d=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],c=d.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&c>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
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

}`;class $m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new mn({vertexShader:Ym,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Te(new as(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class jm extends Ni{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,u=null,c=null,f=null,g=null;const _=new $m,p=e.getContextAttributes();let m=null,v=null;const x=[],M=[],w=new kt;let E=null;const A=new ze;A.layers.enable(1),A.viewport=new he;const L=new ze;L.layers.enable(2),L.viewport=new he;const y=[A,L],S=new Wm;S.layers.enable(1),S.layers.enable(2);let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let tt=x[V];return tt===void 0&&(tt=new Xr,x[V]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(V){let tt=x[V];return tt===void 0&&(tt=new Xr,x[V]=tt),tt.getGripSpace()},this.getHand=function(V){let tt=x[V];return tt===void 0&&(tt=new Xr,x[V]=tt),tt.getHandSpace()};function P(V){const tt=M.indexOf(V.inputSource);if(tt===-1)return;const ft=x[tt];ft!==void 0&&(ft.update(V.inputSource,V.frame,h||a),ft.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let V=0;V<x.length;V++){const tt=M[V];tt!==null&&(M[V]=null,x[V].disconnect(tt))}I=null,z=null,_.reset(),t.setRenderTarget(m),f=null,c=null,u=null,s=null,v=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return c!==null?c:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kn(f.framebufferWidth,f.framebufferHeight,{format:Re,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,ft=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Qi:Ti,ft=p.stencil?is:Li);const At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),c=u.createProjectionLayer(At),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),v=new Kn(c.textureWidth,c.textureHeight,{format:Re,type:Pn,depthTexture:new ac(c.textureWidth,c.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(V){for(let tt=0;tt<V.removed.length;tt++){const ft=V.removed[tt],rt=M.indexOf(ft);rt>=0&&(M[rt]=null,x[rt].disconnect(ft))}for(let tt=0;tt<V.added.length;tt++){const ft=V.added[tt];let rt=M.indexOf(ft);if(rt===-1){for(let wt=0;wt<x.length;wt++)if(wt>=M.length){M.push(ft),rt=wt;break}else if(M[wt]===null){M[wt]=ft,rt=wt;break}if(rt===-1)break}const At=x[rt];At&&At.connect(ft)}}const Q=new O,et=new O;function H(V,tt,ft){Q.setFromMatrixPosition(tt.matrixWorld),et.setFromMatrixPosition(ft.matrixWorld);const rt=Q.distanceTo(et),At=tt.projectionMatrix.elements,wt=ft.projectionMatrix.elements,U=At[14]/(At[10]-1),Mt=At[14]/(At[10]+1),nt=(At[9]+1)/At[5],Ct=(At[9]-1)/At[5],St=(At[8]-1)/At[0],Ut=(wt[8]+1)/wt[0],bt=U*St,Gt=U*Ut,Jt=rt/(-St+Ut),R=Jt*-St;tt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(R),V.translateZ(Jt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const T=U+Jt,k=Mt+Jt,j=bt-R,Z=Gt+(rt-R),J=nt*Mt/k*T,xt=Ct*Mt/k*T;V.projectionMatrix.makePerspective(j,Z,J,xt,T,k),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function it(V,tt){tt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(tt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),S.near=L.near=A.near=V.near,S.far=L.far=A.far=V.far,(I!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,z=S.far,A.near=I,A.far=z,L.near=I,L.far=z,A.updateProjectionMatrix(),L.updateProjectionMatrix(),V.updateProjectionMatrix());const tt=V.parent,ft=S.cameras;it(S,tt);for(let rt=0;rt<ft.length;rt++)it(ft[rt],tt);ft.length===2?H(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),q(V,S,tt)};function q(V,tt,ft){ft===null?V.matrix.copy(tt.matrixWorld):(V.matrix.copy(ft.matrixWorld),V.matrix.invert(),V.matrix.multiply(tt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(tt.projectionMatrix),V.projectionMatrixInverse.copy(tt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ea*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(c===null&&f===null))return l},this.setFoveation=function(V){l=V,c!==null&&(c.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let dt=null;function Rt(V,tt){if(d=tt.getViewerPose(h||a),g=tt,d!==null){const ft=d.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let rt=!1;ft.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let wt=0;wt<ft.length;wt++){const U=ft[wt];let Mt=null;if(f!==null)Mt=f.getViewport(U);else{const Ct=u.getViewSubImage(c,U);Mt=Ct.viewport,wt===0&&(t.setRenderTargetTextures(v,Ct.colorTexture,c.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(v))}let nt=y[wt];nt===void 0&&(nt=new ze,nt.layers.enable(wt),nt.viewport=new he,y[wt]=nt),nt.matrix.fromArray(U.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(U.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),wt===0&&(S.matrix.copy(nt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(nt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const wt=u.getDepthInformation(ft[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,s.renderState)}}for(let ft=0;ft<x.length;ft++){const rt=M[ft],At=x[ft];rt!==null&&At!==void 0&&At.update(rt,tt,h||a)}_.render(t,S),dt&&dt(V,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const _t=new sc;_t.setAnimationLoop(Rt),this.setAnimationLoop=function(V){dt=V},this.dispose=function(){}}}const Bn=new $e,Km=new te;function Zm(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,tc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),d(p,m)):m.isMeshStandardMaterial?(r(p,m),c(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),x=v.envMap,M=v.envMapRotation;if(x&&(p.envMap.value=x,Bn.copy(M),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),p.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Bn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const w=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*w,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function c(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function h(v,x){let M=s[v.id];M===void 0&&(g(v),M=d(v),s[v.id]=M,v.addEventListener("dispose",p));const w=x.program;n.updateUBOMapping(v,w);const E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function d(v){const x=u();v.__bindingPointIndex=x;const M=i.createBuffer(),w=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const x=s[v.id],M=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=M.length;E<A;E++){const L=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,S=L.length;y<S;y++){const I=L[y];if(f(I,E,y,w)===!0){const z=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let X=0;X<P.length;X++){const Q=P[X],et=_(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,z+W,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,W),W+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,M,w){const E=v.value,A=x+"_"+M;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{const L=w[A];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return w[A]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(v){const x=v.uniforms;let M=0;const w=16;for(let A=0,L=x.length;A<L;A++){const y=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,I=y.length;S<I;S++){const z=y[S],P=Array.isArray(z.value)?z.value:[z.value];for(let W=0,X=P.length;W<X;W++){const Q=P[W],et=_(Q),H=M%w;H!==0&&w-H<et.boundary&&(M+=w-H),z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=et.storage}}}const E=M%w;return E>0&&(M+=w-E),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:h,dispose:m}}class Qm{constructor(t={}){const{canvas:e=Xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const x=this;let M=!1,w=0,E=0,A=null,L=-1,y=null;const S=new he,I=new he;let z=null;const P=new vt(0);let W=0,X=e.width,Q=e.height,et=1,H=null,it=null;const q=new he(0,0,X,Q),dt=new he(0,0,X,Q);let Rt=!1;const _t=new Sa;let V=!1,tt=!1;const ft=new te,rt=new O,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return A===null?et:1}let U=n;function Mt(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",$,!1),U===null){const N="webgl2";if(U=Mt(N,b),U===null)throw Mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let nt,Ct,St,Ut,bt,Gt,Jt,R,T,k,j,Z,J,xt,lt,ot,Dt,st,yt,Vt,Et,pt,Ft,Ht;function ne(){nt=new op(U),nt.init(),pt=new Vm(U,nt),Ct=new ep(U,nt,t,pt),St=new km(U),Ut=new hp(U),bt=new wm,Gt=new Hm(U,nt,St,bt,Ct,pt,Ut),Jt=new ip(x),R=new ap(x),T=new gu(U),Ft=new Qf(U,T),k=new lp(U,T,Ut,Ft),j=new dp(U,k,T,Ut),yt=new up(U,Ct,Gt),ot=new np(bt),Z=new bm(x,Jt,R,nt,Ct,Ft,ot),J=new Zm(x,bt),xt=new Rm,lt=new Nm(nt),st=new Jf(x,Jt,R,St,j,c,l),Dt=new Gm(x,j,Ct),Ht=new Jm(U,Ut,Ct,St),Vt=new tp(U,nt,Ut),Et=new cp(U,nt,Ut),Ut.programs=Z.programs,x.capabilities=Ct,x.extensions=nt,x.properties=bt,x.renderLists=xt,x.shadowMap=Dt,x.state=St,x.info=Ut}ne();const Bt=new jm(x,U);this.xr=Bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(X,Q,!1))},this.getSize=function(b){return b.set(X,Q)},this.setSize=function(b,N,G=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,Q=N,e.width=Math.floor(b*et),e.height=Math.floor(N*et),G===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*et,Q*et).floor()},this.setDrawingBufferSize=function(b,N,G){X=b,Q=N,et=G,e.width=Math.floor(b*G),e.height=Math.floor(N*G),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,N,G,F){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,N,G,F),St.viewport(S.copy(q).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(dt)},this.setScissor=function(b,N,G,F){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,N,G,F),St.scissor(I.copy(dt).multiplyScalar(et).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){St.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(b=!0,N=!0,G=!0){let F=0;if(b){let B=!1;if(A!==null){const ht=A.texture.format;B=ht===Xl||ht===Wl||ht===Vl}if(B){const ht=A.texture.type,mt=ht===Pn||ht===Li||ht===zl||ht===is||ht===kl||ht===Hl,gt=st.getClearColor(),Tt=st.getClearAlpha(),Lt=gt.r,Nt=gt.g,zt=gt.b;mt?(f[0]=Lt,f[1]=Nt,f[2]=zt,f[3]=Tt,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Lt,g[1]=Nt,g[2]=zt,g[3]=Tt,U.clearBufferiv(U.COLOR,0,g))}else F|=U.COLOR_BUFFER_BIT}N&&(F|=U.DEPTH_BUFFER_BIT),G&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",$,!1),xt.dispose(),lt.dispose(),bt.dispose(),Jt.dispose(),R.dispose(),j.dispose(),Ft.dispose(),Ht.dispose(),Z.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Yt),Bt.removeEventListener("sessionend",Ke),Me.stop()};function D(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Ut.autoReset,N=Dt.enabled,G=Dt.autoUpdate,F=Dt.needsUpdate,B=Dt.type;ne(),Ut.autoReset=b,Dt.enabled=N,Dt.autoUpdate=G,Dt.needsUpdate=F,Dt.type=B}function $(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const N=b.target;N.removeEventListener("dispose",ct),ut(N)}function ut(b){Wt(b),bt.remove(b)}function Wt(b){const N=bt.get(b).programs;N!==void 0&&(N.forEach(function(G){Z.releaseProgram(G)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,G,F,B,ht){N===null&&(N=At);const mt=B.isMesh&&B.matrixWorld.determinant()<0,gt=Nc(b,N,G,F,B);St.setMaterial(F,mt);let Tt=G.index,Lt=1;if(F.wireframe===!0){if(Tt=k.getWireframeAttribute(G),Tt===void 0)return;Lt=2}const Nt=G.drawRange,zt=G.attributes.position;let ie=Nt.start*Lt,pe=(Nt.start+Nt.count)*Lt;ht!==null&&(ie=Math.max(ie,ht.start*Lt),pe=Math.min(pe,(ht.start+ht.count)*Lt)),Tt!==null?(ie=Math.max(ie,0),pe=Math.min(pe,Tt.count)):zt!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,zt.count));const De=pe-ie;if(De<0||De===1/0)return;Ft.setup(B,F,gt,G,Tt);let sn,Xt=Vt;if(Tt!==null&&(sn=T.get(Tt),Xt=Et,Xt.setIndex(sn)),B.isMesh)F.wireframe===!0?(St.setLineWidth(F.wireframeLinewidth*wt()),Xt.setMode(U.LINES)):Xt.setMode(U.TRIANGLES);else if(B.isLine){let Pt=F.linewidth;Pt===void 0&&(Pt=1),St.setLineWidth(Pt*wt()),B.isLineSegments?Xt.setMode(U.LINES):B.isLineLoop?Xt.setMode(U.LINE_LOOP):Xt.setMode(U.LINE_STRIP)}else B.isPoints?Xt.setMode(U.POINTS):B.isSprite&&Xt.setMode(U.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?Xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):Xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Xt.renderInstances(ie,De,B.count);else if(G.isInstancedBufferGeometry){const Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Gi=Math.min(G.instanceCount,Pt);Xt.renderInstances(ie,De,Gi)}else Xt.render(ie,De)};function Kt(b,N,G){b.transparent===!0&&b.side===xe&&b.forceSinglePass===!1?(b.side=Pe,b.needsUpdate=!0,cs(b,N,G),b.side=pn,b.needsUpdate=!0,cs(b,N,G),b.side=xe):cs(b,N,G)}this.compile=function(b,N,G=null){G===null&&(G=b),p=lt.get(G),p.init(N),v.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(x._useLegacyLights);const F=new Set;return b.traverse(function(B){const ht=B.material;if(ht)if(Array.isArray(ht))for(let mt=0;mt<ht.length;mt++){const gt=ht[mt];Kt(gt,G,B),F.add(gt)}else Kt(ht,G,B),F.add(ht)}),v.pop(),p=null,F},this.compileAsync=function(b,N,G=null){const F=this.compile(b,N,G);return new Promise(B=>{function ht(){if(F.forEach(function(mt){bt.get(mt).currentProgram.isReady()&&F.delete(mt)}),F.size===0){B(b);return}setTimeout(ht,10)}nt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ee=null;function fe(b){ee&&ee(b)}function Yt(){Me.stop()}function Ke(){Me.start()}const Me=new sc;Me.setAnimationLoop(fe),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(b){ee=b,Bt.setAnimationLoop(b),b===null?Me.stop():Me.start()},Bt.addEventListener("sessionstart",Yt),Bt.addEventListener("sessionend",Ke),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(N),N=Bt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,A),p=lt.get(b,v.length),p.init(N),v.push(p),ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_t.setFromProjectionMatrix(ft),tt=this.localClippingEnabled,V=ot.init(this.clippingPlanes,tt),_=xt.get(b,m.length),_.init(),m.push(_),Da(b,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,it);const G=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1;G&&st.addToRenderList(_,b),this.info.render.frame++,V===!0&&ot.beginShadows();const F=p.state.shadowsArray;Dt.render(F,b,N),V===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,ht=_.transmissive;if(p.setupLights(x._useLegacyLights),N.isArrayCamera){const mt=N.cameras;if(ht.length>0)for(let gt=0,Tt=mt.length;gt<Tt;gt++){const Lt=mt[gt];Ua(B,ht,b,Lt)}G&&st.render(b);for(let gt=0,Tt=mt.length;gt<Tt;gt++){const Lt=mt[gt];Ia(_,b,Lt,Lt.viewport)}}else ht.length>0&&Ua(B,ht,b,N),G&&st.render(b),Ia(_,b,N);A!==null&&(Gt.updateMultisampleRenderTarget(A),Gt.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,N),Ft.resetDefaultState(),L=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],V===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Da(b,N,G,F){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||_t.intersectsSprite(b)){F&&rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ft);const mt=j.update(b),gt=b.material;gt.visible&&_.push(b,mt,gt,G,rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||_t.intersectsObject(b))){const mt=j.update(b),gt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),rt.copy(mt.boundingSphere.center)),rt.applyMatrix4(b.matrixWorld).applyMatrix4(ft)),Array.isArray(gt)){const Tt=mt.groups;for(let Lt=0,Nt=Tt.length;Lt<Nt;Lt++){const zt=Tt[Lt],ie=gt[zt.materialIndex];ie&&ie.visible&&_.push(b,mt,ie,G,rt.z,zt)}}else gt.visible&&_.push(b,mt,gt,G,rt.z,null)}}const ht=b.children;for(let mt=0,gt=ht.length;mt<gt;mt++)Da(ht[mt],N,G,F)}function Ia(b,N,G,F){const B=b.opaque,ht=b.transmissive,mt=b.transparent;p.setupLightsView(G),V===!0&&ot.setGlobalState(x.clippingPlanes,G),F&&St.viewport(S.copy(F)),B.length>0&&ls(B,N,G),ht.length>0&&ls(ht,N,G),mt.length>0&&ls(mt,N,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ua(b,N,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new Kn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ar:Pn,minFilter:Ye,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ht=p.state.transmissionRenderTarget[F.id],mt=F.viewport||S;ht.setSize(mt.z,mt.w);const gt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(P),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear();const Tt=x.toneMapping;x.toneMapping=fn;const Lt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),V===!0&&ot.setGlobalState(x.clippingPlanes,F),ls(b,G,F),Gt.updateMultisampleRenderTarget(ht),Gt.updateRenderTargetMipmap(ht),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let zt=0,ie=N.length;zt<ie;zt++){const pe=N[zt],De=pe.object,sn=pe.geometry,Xt=pe.material,Pt=pe.group;if(Xt.side===xe&&De.layers.test(F.layers)){const Gi=Xt.side;Xt.side=Pe,Xt.needsUpdate=!0,Na(De,G,F,sn,Xt,Pt),Xt.side=Gi,Xt.needsUpdate=!0,Nt=!0}}Nt===!0&&(Gt.updateMultisampleRenderTarget(ht),Gt.updateRenderTargetMipmap(ht))}x.setRenderTarget(gt),x.setClearColor(P,W),Lt!==void 0&&(F.viewport=Lt),x.toneMapping=Tt}function ls(b,N,G){const F=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ht=b.length;B<ht;B++){const mt=b[B],gt=mt.object,Tt=mt.geometry,Lt=F===null?mt.material:F,Nt=mt.group;gt.layers.test(G.layers)&&Na(gt,N,G,Tt,Lt,Nt)}}function Na(b,N,G,F,B,ht){b.onBeforeRender(x,N,G,F,B,ht),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,N,G,F,b,ht),B.transparent===!0&&B.side===xe&&B.forceSinglePass===!1?(B.side=Pe,B.needsUpdate=!0,x.renderBufferDirect(G,N,F,B,b,ht),B.side=pn,B.needsUpdate=!0,x.renderBufferDirect(G,N,F,B,b,ht),B.side=xe):x.renderBufferDirect(G,N,F,B,b,ht),b.onAfterRender(x,N,G,F,B,ht)}function cs(b,N,G){N.isScene!==!0&&(N=At);const F=bt.get(b),B=p.state.lights,ht=p.state.shadowsArray,mt=B.state.version,gt=Z.getParameters(b,B.state,ht,N,G),Tt=Z.getProgramCacheKey(gt);let Lt=F.programs;F.environment=b.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(b.isMeshStandardMaterial?R:Jt).get(b.envMap||F.environment),F.envMapRotation=F.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",ct),Lt=new Map,F.programs=Lt);let Nt=Lt.get(Tt);if(Nt!==void 0){if(F.currentProgram===Nt&&F.lightsStateVersion===mt)return Fa(b,gt),Nt}else gt.uniforms=Z.getUniforms(b),b.onBuild(G,gt,x),b.onBeforeCompile(gt,x),Nt=Z.acquireProgram(gt,Tt),Lt.set(Tt,Nt),F.uniforms=gt.uniforms;const zt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=ot.uniform),Fa(b,gt),F.needsLights=Fc(b),F.lightsStateVersion=mt,F.needsLights&&(zt.ambientLightColor.value=B.state.ambient,zt.lightProbe.value=B.state.probe,zt.directionalLights.value=B.state.directional,zt.directionalLightShadows.value=B.state.directionalShadow,zt.spotLights.value=B.state.spot,zt.spotLightShadows.value=B.state.spotShadow,zt.rectAreaLights.value=B.state.rectArea,zt.ltc_1.value=B.state.rectAreaLTC1,zt.ltc_2.value=B.state.rectAreaLTC2,zt.pointLights.value=B.state.point,zt.pointLightShadows.value=B.state.pointShadow,zt.hemisphereLights.value=B.state.hemi,zt.directionalShadowMap.value=B.state.directionalShadowMap,zt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,zt.spotShadowMap.value=B.state.spotShadowMap,zt.spotLightMatrix.value=B.state.spotLightMatrix,zt.spotLightMap.value=B.state.spotLightMap,zt.pointShadowMap.value=B.state.pointShadowMap,zt.pointShadowMatrix.value=B.state.pointShadowMatrix),F.currentProgram=Nt,F.uniformsList=null,Nt}function Oa(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Os.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Fa(b,N){const G=bt.get(b);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Nc(b,N,G,F,B){N.isScene!==!0&&(N=At),Gt.resetTextureUnits();const ht=N.fog,mt=F.isMeshStandardMaterial?N.environment:null,gt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gn,Tt=(F.isMeshStandardMaterial?R:Jt).get(F.envMap||mt),Lt=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),zt=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,pe=!!G.morphAttributes.color;let De=fn;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(De=x.toneMapping);const sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Xt=sn!==void 0?sn.length:0,Pt=bt.get(F),Gi=p.state.lights;if(V===!0&&(tt===!0||b!==y)){const Fe=b===y&&F.id===L;ot.setState(F,b,Fe)}let Qt=!1;F.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Gi.state.version||Pt.outputColorSpace!==gt||B.isBatchedMesh&&Pt.batching===!1||!B.isBatchedMesh&&Pt.batching===!0||B.isInstancedMesh&&Pt.instancing===!1||!B.isInstancedMesh&&Pt.instancing===!0||B.isSkinnedMesh&&Pt.skinning===!1||!B.isSkinnedMesh&&Pt.skinning===!0||B.isInstancedMesh&&Pt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pt.instancingMorph===!1&&B.morphTexture!==null||Pt.envMap!==Tt||F.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ot.numPlanes||Pt.numIntersection!==ot.numIntersection)||Pt.vertexAlphas!==Lt||Pt.vertexTangents!==Nt||Pt.morphTargets!==zt||Pt.morphNormals!==ie||Pt.morphColors!==pe||Pt.toneMapping!==De||Pt.morphTargetsCount!==Xt)&&(Qt=!0):(Qt=!0,Pt.__version=F.version);let Dn=Pt.currentProgram;Qt===!0&&(Dn=cs(F,N,B));let Ba=!1,ki=!1,hr=!1;const me=Dn.getUniforms(),_n=Pt.uniforms;if(St.useProgram(Dn.program)&&(Ba=!0,ki=!0,hr=!0),F.id!==L&&(L=F.id,ki=!0),Ba||y!==b){me.setValue(U,"projectionMatrix",b.projectionMatrix),me.setValue(U,"viewMatrix",b.matrixWorldInverse);const Fe=me.map.cameraPosition;Fe!==void 0&&Fe.setValue(U,rt.setFromMatrixPosition(b.matrixWorld)),Ct.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&me.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,ki=!0,hr=!0)}if(B.isSkinnedMesh){me.setOptional(U,B,"bindMatrix"),me.setOptional(U,B,"bindMatrixInverse");const Fe=B.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),me.setValue(U,"boneTexture",Fe.boneTexture,Gt))}B.isBatchedMesh&&(me.setOptional(U,B,"batchingTexture"),me.setValue(U,"batchingTexture",B._matricesTexture,Gt));const ur=G.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&yt.update(B,G,Dn),(ki||Pt.receiveShadow!==B.receiveShadow)&&(Pt.receiveShadow=B.receiveShadow,me.setValue(U,"receiveShadow",B.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(_n.envMap.value=Tt,_n.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&N.environment!==null&&(_n.envMapIntensity.value=N.environmentIntensity),ki&&(me.setValue(U,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&Oc(_n,hr),ht&&F.fog===!0&&J.refreshFogUniforms(_n,ht),J.refreshMaterialUniforms(_n,F,et,Q,p.state.transmissionRenderTarget[b.id]),Os.upload(U,Oa(Pt),_n,Gt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Os.upload(U,Oa(Pt),_n,Gt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&me.setValue(U,"center",B.center),me.setValue(U,"modelViewMatrix",B.modelViewMatrix),me.setValue(U,"normalMatrix",B.normalMatrix),me.setValue(U,"modelMatrix",B.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Fe=F.uniformsGroups;for(let dr=0,Bc=Fe.length;dr<Bc;dr++){const za=Fe[dr];Ht.update(za,Dn),Ht.bind(za,Dn)}}return Dn}function Oc(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Fc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,N,G){bt.get(b.texture).__webglTexture=N,bt.get(b.depthTexture).__webglTexture=G;const F=bt.get(b);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=G===void 0,F.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const G=bt.get(b);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,G=0){A=b,w=N,E=G;let F=!0,B=null,ht=!1,mt=!1;if(b){const Tt=bt.get(b);Tt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(U.FRAMEBUFFER,null),F=!1):Tt.__webglFramebuffer===void 0?Gt.setupRenderTarget(b):Tt.__hasExternalTextures&&Gt.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);const Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(mt=!0);const Nt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?B=Nt[N][G]:B=Nt[N],ht=!0):b.samples>0&&Gt.useMultisampledRTT(b)===!1?B=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[G]:B=Nt,S.copy(b.viewport),I.copy(b.scissor),z=b.scissorTest}else S.copy(q).multiplyScalar(et).floor(),I.copy(dt).multiplyScalar(et).floor(),z=Rt;if(St.bindFramebuffer(U.FRAMEBUFFER,B)&&F&&St.drawBuffers(b,B),St.viewport(S),St.scissor(I),St.setScissorTest(z),ht){const Tt=bt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Tt.__webglTexture,G)}else if(mt){const Tt=bt.get(b.texture),Lt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,G||0,Lt)}L=-1},this.readRenderTargetPixels=function(b,N,G,F,B,ht,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(gt=gt[mt]),gt){St.bindFramebuffer(U.FRAMEBUFFER,gt);try{const Tt=b.texture,Lt=Tt.format,Nt=Tt.type;if(!Ct.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-F&&G>=0&&G<=b.height-B&&U.readPixels(N,G,F,B,pt.convert(Lt),pt.convert(Nt),ht)}finally{const Tt=A!==null?bt.get(A).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(b,N,G=0){const F=Math.pow(2,-G),B=Math.floor(N.image.width*F),ht=Math.floor(N.image.height*F);Gt.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,b.x,b.y,B,ht),St.unbindTexture()},this.copyTextureToTexture=function(b,N,G,F=0){const B=N.image.width,ht=N.image.height,mt=pt.convert(G.format),gt=pt.convert(G.type);Gt.setTexture2D(G,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,b.x,b.y,B,ht,mt,gt,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,mt,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,F,b.x,b.y,mt,gt,N.image),F===0&&G.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(b,N,G,F,B=0){const ht=b.max.x-b.min.x,mt=b.max.y-b.min.y,gt=b.max.z-b.min.z,Tt=pt.convert(F.format),Lt=pt.convert(F.type);let Nt;if(F.isData3DTexture)Gt.setTexture3D(F,0),Nt=U.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Gt.setTexture2DArray(F,0),Nt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const zt=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pe=U.getParameter(U.UNPACK_SKIP_PIXELS),De=U.getParameter(U.UNPACK_SKIP_ROWS),sn=U.getParameter(U.UNPACK_SKIP_IMAGES),Xt=G.isCompressedTexture?G.mipmaps[B]:G.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?U.texSubImage3D(Nt,B,N.x,N.y,N.z,ht,mt,gt,Tt,Lt,Xt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,B,N.x,N.y,N.z,ht,mt,gt,Tt,Xt.data):U.texSubImage3D(Nt,B,N.x,N.y,N.z,ht,mt,gt,Tt,Lt,Xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pe),U.pixelStorei(U.UNPACK_SKIP_ROWS,De),U.pixelStorei(U.UNPACK_SKIP_IMAGES,sn),B===0&&F.generateMipmaps&&U.generateMipmap(Nt),St.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Gt.setTextureCube(b,0):b.isData3DTexture?Gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Gt.setTexture2DArray(b,0):Gt.setTexture2D(b,0),St.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,St.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xa?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===or?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ea{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new Ea(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tg extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $s extends Ae{constructor(t=null,e=1,n=1,s,r,a,o,l,h=Ce,d=Ce,u,c){super(null,a,o,l,h,d,s,r,u,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta extends je{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],d=[];let u=t;const c=(e-t)/s,f=new O,g=new kt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=r+p/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,d.push(g.x,g.y)}u+=c}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const v=m+p,x=v,M=v+n+1,w=v+n+2,E=v+1;o.push(x,M,E),o.push(M,w,E)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class eg extends Fi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new vt(16777215),this.specular=new vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cn extends Fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dc extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Yr=new te,al=new O,ol=new O;class ng{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;al.setFromMatrixPosition(t.matrixWorld),e.position.copy(al),ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ol),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ig extends ng{constructor(){super(new rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sg extends dc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new ig}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rg extends dc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ll=new te;class ag{constructor(t,e,n=0,s=1/0){this.ray=new Kl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ll.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ll),this}intersectObject(t,e=!0,n=[]){return ia(t,this,n,e),n.sort(cl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ia(t[s],this,n,e);return n.sort(cl),n}}function cl(i,t){return i.distance-t.distance}function ia(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)ia(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);const C={renderer:null,scene:null,camera:null,terrainMesh:null,terrainGeo:null,terrainMatColored:null,terrainMatTextured:null,objectMarkers:new en,roadMesh:null,waterPlane:null,sunLight:null,currentMapData:null,currentHeightScale:1,colorMode:"terrain",terrainAtlas:null,terrainAtlasTex:null,units:new Map,selectedUnits:[],hotkeySquads:new Array(10).fill(null),messageStream:null,pathfinder:null,gameLoop:null},$t=10,qe=$t/16,fc=2,pc=4,mc=fc|pc,og=8,lg=64,cg=48,sa=8,hg=qe/8,Qe=0,Aa=1,ba=2,js=3,gc=4,wa=5,Ks=6,ug=1.5,ra=.5,dg=1.03,Zs=.5,ue=64,Ds=3,Is=1e4,Ne=10,Si=10,Zi=14,hl=2e3,ul=16,yi=4,fg=30,pg=180,mg=60,gg=90,jt=new Map,Di=new Map,$n=new Map,_g=new Set([".tga",".dds",".bmp",".jpg",".jpeg",".png",".w3d",".wak",".wnd",".ini",".str",".csf",".xml"]);function dl(i){var e;const t=(e=i.toLowerCase().match(/\.[^.]+$/))==null?void 0:e[0];return t?_g.has(t):!1}function aa(i,t){const e=i.toLowerCase().replace(/\\/g,"/"),n={buffer:t,offset:0,size:t.byteLength};return jt.set(e,n),$n.set(e,n),e}function xg(i,t){var s;const e=i.toLowerCase(),n=[];for(const[r]of jt)(r.endsWith("/"+e)||r===e)&&n.push(aa(r,t));if(n.length===0){const r=((s=e.match(/\.[^.]+$/))==null?void 0:s[0])||"";let a;[".tga",".dds",".bmp"].includes(r)?a=`art/terrain/${e}`:r===".w3d"||r===".wak"?a=`art/w3d/${e}`:r===".ini"?a=`data/ini/${e}`:a=e,n.push(aa(a,t)),console.log(`No BIG match for "${e}", added at inferred path: ${a}`)}else console.log(`Overriding ${n.length} BIG entry(s) for "${e}":`,n);return n}function vg(i,t){const e=new DataView(i),n=new Uint8Array(i),s=String.fromCharCode(n[0],n[1],n[2],n[3]);if(s!=="BIGF"&&s!=="BIG4")throw new Error("Not a BIG archive file");const r=e.getUint32(8,!1);let a=16,o=0;for(let l=0;l<r;l++){const h=e.getUint32(a,!1),d=e.getUint32(a+4,!1);a+=8;let u="";for(;n[a]!==0;)u+=String.fromCharCode(n[a++]);a++;const c=u.toLowerCase().replace(/\\/g,"/");jt.set(c,{buffer:i,offset:h,size:d}),o++}console.log(`BIG "${t}": ${o} files added to pool (${jt.size} total)`),xc(),Sg()}function Zn(i){return jt.get(i.toLowerCase().replace(/\\/g,"/"))}function _c(i){const t=Zn(i);return t?new Uint8Array(t.buffer,t.offset,t.size):null}function xc(){const i=["data/ini/terrain.ini","data/ini/default/terrain.ini"];for(const t of i){const e=_c(t);if(!e)continue;const n=new TextDecoder("ascii").decode(e);Mg(n),console.log(`Parsed ${t}: ${Di.size} terrain type mappings`)}}function Mg(i){const t=i.split(/\r?\n/);let e=null;for(const n of t){const s=n.replace(/;.*$/,"").trim();if(!s)continue;const r=s.match(/^Terrain\s+(\S+)/i);if(r){e=r[1];continue}if(/^End$/i.test(s)){e=null;continue}if(e){const a=s.match(/^Texture\s*=\s*(\S+)/i);a&&Di.set(e.toLowerCase(),a[1].toLowerCase())}}}function Sg(){const i=[];for(const[t]of jt)t.startsWith("art/terrain/")&&t.endsWith(".tga")&&i.push(t);if(i.sort(),i.length>0){console.groupCollapsed(`Terrain TGAs in BIG pool (${i.length})`);for(const t of i)console.log(t);console.groupEnd()}}function yg(){const i=Array.from(jt.keys()).sort(),t=$n.size;console.groupCollapsed(`All files in pool (${i.length} total, ${t} overrides)`);for(const e of i){const n=jt.get(e),s=$n.has(e);console.log(`${s?"[OVERRIDE] ":""}${e}  (${n.size} bytes)`)}return console.groupEnd(),i}function Eg(i){const t=i.replace(/\.tga$/i,"").toLowerCase(),e=Di.get(t);if(e){const a=`art/terrain/${e}`;if(Zn(a))return a}const n=`art/terrain/${t}.tga`;if(Zn(n))return n;let s=null,r=0;for(const[a]of jt){if(!a.startsWith("art/terrain/")||!a.endsWith(".tga"))continue;const o=a.slice(12,-4);if(o===t){s=a;break}let l=0;if(t.includes(o)||o.includes(t))l=3;else{const h=c=>c.replace(/type\d*/gi,"").replace(/\d+$/,""),d=h(t),u=h(o);d&&u&&(d.includes(u)||u.includes(d))&&(l=2)}l>r&&(r=l,s=a)}return s&&r>=2?(console.log(`Fuzzy matched "${t}" → "${s}"`),s):null}const Tg={AsphaltType1:3815998,AsphaltType2:4868686,Concrete:8026746,Pavement:6974062,RoadType1:5592405,RoadType2:5197647,Dirt:9139029,DirtType2:8020804,DirtType3:7034165,DirtRoad:10126181,CliffType1:7035723,CliffType2:5983035,Sand:12757358,SandType2:12099168,SandType3:13941882,SandDunes:14270591,Desert:13151082,DesertSand:13152368,Grass:4880944,GrassType2:3828260,GrassType3:5933626,GrassTall:4157480,GrassField:4880944,TallGrass:4157480,ShortGrass:5933626,MediumGrass:4880944,Rock:6974046,RockType2:5921358,RockType3:8026734,Snow:14212326,SnowType2:13159638,Ice:11061472,Water:2121888,WaterEdge:4229808,Mud:5917232,MudType2:6969920,Swamp:3824170,Urban:5921376,UrbanType2:4868688,Field:6986304,Farmland:8030778,GrassRock:5929546,BlendRock:6974037,Tundra:9083536};function vc(i){if(!i)return 8421472;const t=i.replace(/\.tga$/i,"");for(const[s,r]of Object.entries(Tg))if(t.toLowerCase().includes(s.toLowerCase()))return r;let e=0;for(let s=0;s<t.length;s++)e=(e<<5)-e+t.charCodeAt(s)|0;const n=Math.abs(e)%360;return Ag(n,.35,.45)}function Ag(i,t,e){const n=(1-Math.abs(2*e-1))*t,s=n*(1-Math.abs(i/60%2-1)),r=e-n/2;let a,o,l;return i<60?(a=n,o=s,l=0):i<120?(a=s,o=n,l=0):i<180?(a=0,o=n,l=s):i<240?(a=0,o=s,l=n):i<300?(a=s,o=0,l=n):(a=n,o=0,l=s),Math.round((a+r)*255)<<16|Math.round((o+r)*255)<<8|Math.round((l+r)*255)}function Ca(i,t){const e=C.currentMapData.heightMap,n=e.width,s=e.height,r=e.borderSize,a=i/$t+r,o=s-1-r-t/$t,l=Math.max(0,Math.min(n-1,Math.floor(a))),h=Math.max(0,Math.min(s-1,Math.floor(o))),d=a-l,u=o-h,c=Math.min(l+1,n-1),f=Math.min(h+1,s-1),g=e.data[h*n+l],_=e.data[h*n+c],p=e.data[f*n+l],m=e.data[f*n+c];return(g*(1-d)*(1-u)+_*d*(1-u)+p*(1-d)*u+m*d*u)*qe}function Mc(i,t){if(!C.currentMapData||!C.currentMapData.heightMap)return 0;const e=C.currentMapData.heightMap,n=e.borderSize,r=(e.height-2*n-1)*$t-t;return Ca(i,r)}const Us=1,fl=2;function Js(i){const t=[0,0,0,0];let e=!1;return i.horiz&&(e=!!(i.inverted&fl),i.inverted&Us?(t[0]=255,t[3]=255):(t[1]=255,t[2]=255)),i.vert&&(e=!!(i.inverted&fl),i.inverted&Us?(t[0]=255,t[1]=255):(t[2]=255,t[3]=255)),i.rightDiagonal&&(i.inverted&Us?(t[1]=255,i.longDiagonal&&(t[0]=255,t[2]=255)):(e=!0,t[2]=255,i.longDiagonal&&(t[1]=255,t[3]=255))),i.leftDiagonal&&(i.inverted&Us?(e=!0,t[0]=255,i.longDiagonal&&(t[1]=255,t[3]=255)):(t[3]=255,i.longDiagonal&&(t[0]=255,t[2]=255))),i.customBlendEdgeClass>=0&&(t[0]=t[1]=t[2]=t[3]=0,e=!1),{alphas:t,needFlip:e}}function ts(i,t,e){const n=i>>2;for(const s of t.textureClasses)if(!(s.firstTile<0)&&n>=s.firstTile&&n<s.firstTile+s.numTiles){e.setHex(vc(s.name));const r=((i&3)-1.5)*.015;e.r=Math.max(0,Math.min(1,e.r+r)),e.g=Math.max(0,Math.min(1,e.g+r)),e.b=Math.max(0,Math.min(1,e.b+r));return}e.setHex(8421472)}function Sc(i,t,e,n,s,r){const a=e.data[i];if(C.colorMode==="height"){const o=s>n?(a-n)/(s-n):.5;o<.15?r.setRGB(.15,.35,.15):o<.35?r.lerpColors(new vt(.15,.35,.15),new vt(.5,.65,.25),(o-.15)/.2):o<.6?r.lerpColors(new vt(.5,.65,.25),new vt(.65,.55,.35),(o-.35)/.25):o<.8?r.lerpColors(new vt(.65,.55,.35),new vt(.55,.5,.45),(o-.6)/.2):r.lerpColors(new vt(.55,.5,.45),new vt(.9,.9,.92),(o-.8)/.2)}else C.colorMode==="normal"?r.setRGB(.6,.55,.45):t&&i<t.tileNdxes.length?ts(t.tileNdxes[i],t,r):r.setHex(8421472)}function bg(){if(!C.terrainMesh||!C.currentMapData)return;if(C.colorMode==="texture"&&C.terrainMatTextured){C.terrainMesh.material=C.terrainMatTextured,C.terrainMesh.material.wireframe=C.terrainMatColored.wireframe;return}C.terrainMesh.material=C.terrainMatColored;const i=C.currentMapData.heightMap,t=C.currentMapData.blendTileData,e=i.width,n=i.height,s=e-1,r=n-1;let a=255,o=0;for(let f=0;f<i.data.length;f++)i.data[f]<a&&(a=i.data[f]),i.data[f]>o&&(o=i.data[f]);const l=C.terrainGeo.getAttribute("color"),h=new vt,d=new vt,u=new vt,c=new vt;for(let f=0;f<r;f++)for(let g=0;g<s;g++){const p=(f*s+g)*4,m=f*e+g;Sc(m,t,i,a,o,h);let v=null;if(t&&m<t.blendTileNdxes.length){const M=t.blendTileNdxes[m];M>0&&t.blendedTiles&&M<t.blendedTiles.length&&(v=Js(t.blendedTiles[M]).alphas,ts(t.blendedTiles[M].blendNdx,t,d))}let x=null;if(t&&t.extraBlendTileNdxes&&m<t.extraBlendTileNdxes.length){const M=t.extraBlendTileNdxes[m];M>0&&t.blendedTiles&&M<t.blendedTiles.length&&(x=Js(t.blendedTiles[M]).alphas,ts(t.blendedTiles[M].blendNdx,t,u))}for(let M=0;M<4;M++)c.copy(h),v&&v[M]>0&&c.lerp(d,v[M]/255),x&&x[M]>0&&c.lerp(u,x[M]/255),l.setXYZ(p+M,c.r,c.g,c.b)}l.needsUpdate=!0}function wg(i){if(!C.terrainMesh||!C.currentMapData)return;const t=C.currentMapData.heightMap,e=t.width,n=t.height,s=e-1,r=n-1,a=C.terrainGeo.getAttribute("position"),o=[0,1,1,0],l=[0,0,1,1];for(let h=0;h<r;h++)for(let d=0;d<s;d++){const c=(h*s+d)*4;for(let f=0;f<4;f++){const g=d+o[f],_=h+l[f],p=t.data[_*e+g];a.setY(c+f,p*qe*i)}}a.needsUpdate=!0,C.terrainGeo.computeVertexNormals()}function Cg(i,t,e,n,s,r){let a=0;for(const c of i)for(const f of c.points)a=Math.max(a,f.z*qe);a===0&&(a=20);const o=Math.max(n,s)*$t*1.5,l=t*$t/2,h=e*$t/2,d=new as(o,o),u=new eg({color:1725046,transparent:!0,opacity:.55,shininess:60,specular:2245734,side:xe});C.waterPlane=new Te(d,u),C.waterPlane.rotation.x=-Math.PI/2,C.waterPlane.position.set(l,a,h),C.scene.add(C.waterPlane)}function Ra(i){const t={ambient:{r:.5,g:.39,b:.3},diffuse:{r:.9,g:.71,b:.6},lightPos:{x:-.96,y:.05,z:-.29}},e=(i==null?void 0:i.terrainLights)||[t],n=(i==null?void 0:i.objectLights)||e,s=new O(e[0].ambient.r,e[0].ambient.g,e[0].ambient.b),r=Math.min(e.length,Ds),a=[],o=[];for(let c=0;c<Ds;c++)if(c<r){const f=e[c].lightPos,g=e[c].diffuse;a.push(new O(g.r,g.g,g.b)),o.push(new O(-f.x,-f.z,f.y).normalize())}else a.push(new O(0,0,0)),o.push(new O(0,1,0));const l=Math.min(n.length,Ds),h=new O(n[0].ambient.r,n[0].ambient.g,n[0].ambient.b),d=[],u=[];for(let c=0;c<Ds;c++)if(c<l){const f=n[c].lightPos,g=n[c].diffuse;d.push(new O(g.r,g.g,g.b)),u.push(new O(-f.x,-f.z,f.y).normalize())}else d.push(new O(0,0,0)),u.push(new O(0,1,0));return{ambientColor:s,diffuseColors:a,lightDirs:o,numLights:r,objAmbientColor:h,objDiffuseColors:d,objLightDirs:u,objNumLights:l}}function yc(i,t,e,n,s){var c;const{scene:r}=C;C.sunLight&&(r.remove(C.sunLight.target),(c=C.sunLight.shadow)!=null&&c.map&&C.sunLight.shadow.map.dispose());const a=[];r.traverse(f=>{(f.isAmbientLight||f.isDirectionalLight)&&a.push(f)}),a.forEach(f=>{r.remove(f),f.dispose()}),C.sunLight=null;const o=Ra(i);r.add(new rg(new vt(o.objAmbientColor.x,o.objAmbientColor.y,o.objAmbientColor.z),1));const l=t*$t/2,h=e*$t/2,u=Math.max(t,e)*$t*.55;for(let f=0;f<o.objNumLights;f++){const g=o.objDiffuseColors[f],_=o.objLightDirs[f];if(g.x+g.y+g.z<.001)continue;const p=new sg(new vt(g.x,g.y,g.z),1);p.position.set(l+_.x*Is,_.y*Is,h+_.z*Is),f===0&&(p.castShadow=!0,p.shadow.mapSize.width=4096,p.shadow.mapSize.height=4096,p.shadow.camera.left=-u,p.shadow.camera.right=u,p.shadow.camera.top=u,p.shadow.camera.bottom=-u,p.shadow.camera.near=1,p.shadow.camera.far=Is*2,p.shadow.bias=0,p.shadow.normalBias=0,p.target.position.set(l,0,h),r.add(p.target),C.sunLight=p),r.add(p)}}function Rg(i){if(!C.currentMapData||!C.currentMapData.lighting)return;const t=C.currentMapData.lighting.entries;if(!t||i<0||i>=t.length)return;const e=t[i],n=Ra(e);if(C.terrainMatTextured){const u=C.terrainMatTextured.uniforms;u.ambientColor.value.copy(n.ambientColor),u.numLights.value=n.numLights,u.diffuseColor0.value.copy(n.diffuseColors[0]),u.diffuseColor1.value.copy(n.diffuseColors[1]),u.diffuseColor2.value.copy(n.diffuseColors[2]),u.lightDir0.value.copy(n.lightDirs[0]),u.lightDir1.value.copy(n.lightDirs[1]),u.lightDir2.value.copy(n.lightDirs[2])}const s=C.currentMapData.heightMap,r=s.borderSize,a=s.width-2*r,o=s.height-2*r;let l=255,h=0;for(let u=0;u<s.data.length;u++)s.data[u]<l&&(l=s.data[u]),s.data[u]>h&&(h=s.data[u]);yc(e,a,o),Ec(i===3),C.terrainMatTextured&&(C.terrainMatTextured.needsUpdate=!0),C.terrainMatColored&&(C.terrainMatColored.needsUpdate=!0)}function Ec(i){C.objectMarkers.traverse(t=>{t.isMesh&&t.userData.isLightMesh&&(t.visible=i)})}const ye=Object.freeze({MSG_MOUSE_LEFT_CLICK:1,MSG_MOUSE_LEFT_DOUBLE_CLICK:2,MSG_AREA_SELECTION:3,MSG_CREATE_SELECTED_GROUP:4,MSG_CREATE_SELECTED_GROUP_NO_SOUND:5,MSG_DESTROY_SELECTED_GROUP:6,MSG_REMOVE_FROM_SELECTED_GROUP:7,MSG_DO_MOVETO:100,MSG_DO_ATTACKMOVETO:101,MSG_DO_FORCEMOVETO:102,MSG_ADD_WAYPOINT:103,MSG_DO_STOP:104,MSG_DO_ATTACK_OBJECT:105,MSG_DO_FORCE_ATTACK_OBJECT:106,MSG_DO_FORCE_ATTACK_GROUND:107,MSG_DO_GUARD_POSITION:108,MSG_DO_GUARD_OBJECT:109,MSG_DO_SCATTER:110,MSG_CREATE_TEAM0:200,MSG_CREATE_TEAM1:201,MSG_CREATE_TEAM2:202,MSG_CREATE_TEAM3:203,MSG_CREATE_TEAM4:204,MSG_CREATE_TEAM5:205,MSG_CREATE_TEAM6:206,MSG_CREATE_TEAM7:207,MSG_CREATE_TEAM8:208,MSG_CREATE_TEAM9:209,MSG_SELECT_TEAM0:210,MSG_SELECT_TEAM1:211,MSG_SELECT_TEAM2:212,MSG_SELECT_TEAM3:213,MSG_SELECT_TEAM4:214,MSG_SELECT_TEAM5:215,MSG_SELECT_TEAM6:216,MSG_SELECT_TEAM7:217,MSG_SELECT_TEAM8:218,MSG_SELECT_TEAM9:219,MSG_ADD_TEAM0:220,MSG_ADD_TEAM1:221,MSG_ADD_TEAM2:222,MSG_ADD_TEAM3:223,MSG_ADD_TEAM4:224,MSG_ADD_TEAM5:225,MSG_ADD_TEAM6:226,MSG_ADD_TEAM7:227,MSG_ADD_TEAM8:228,MSG_ADD_TEAM9:229});class Lg{constructor(t){this.type=t,this.args=[],this.consumed=!1}appendLocationArgument(t){return this.args.push({type:"location",location:{x:t.x,y:t.y,z:t.z}}),this}appendObjectIdArgument(t){return this.args.push({type:"objectId",objectId:t}),this}appendPixelRegionArgument(t){return this.args.push({type:"pixelRegion",pixelRegion:{...t}}),this}appendIntArgument(t){return this.args.push({type:"int",value:t}),this}appendBoolArgument(t){return this.args.push({type:"bool",value:t}),this}getArgument(t){return this.args[t]||null}getType(){return this.type}destroy(){this.consumed=!0}}class Pg{constructor(){this.messages=[]}appendMessage(t){const e=new Lg(t);return this.messages.push(e),e}getMessages(){return this.messages}consumeMessages(){const t=this.messages.filter(e=>!e.consumed);return this.messages=[],t}clear(){this.messages=[]}}const Qs=new ag,tr=new kt,gi=new O;function Tc(i,t){const{camera:e,objectMarkers:n}=C;if(!e||!n)return null;tr.set(i/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Qs.setFromCamera(tr,e);const s=[];n.children.forEach(a=>{a.traverse(o=>{o.isMesh&&s.push(o)})});const r=Qs.intersectObjects(s,!1);for(const a of r){const o=Ug(a.object);if(o)return o}return null}function Dg(i,t){const{camera:e,terrainMesh:n}=C;if(!e||!n)return null;tr.set(i/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Qs.setFromCamera(tr,e);const s=Qs.intersectObject(n,!1);if(s.length>0){const r=s[0].point;return{x:r.x,y:r.y,z:r.z}}return null}function Ig(i,t,e,n){const{camera:s}=C;if(!s)return[];const r=Math.min(i,e),a=Math.min(t,n),o=Math.max(i,e),l=Math.max(t,n),h=window.innerWidth,d=window.innerHeight,u=[];for(const c of C.units.values()){if(!c.mesh.visible||(gi.set(c.position.x,c.position.y,c.position.z),gi.project(s),gi.z<0||gi.z>1))continue;const f=(gi.x*.5+.5)*h,g=(-gi.y*.5+.5)*d;f>=r&&f<=o&&g>=a&&g<=l&&u.push(c)}return u}function oa(i,t){return!(!i||!i.isSelectable()||!i.mesh.visible||t&&(i.isStructure()||!i.isLocallyControlled()))}function Ug(i){let t=i;for(;t;){if(t.userData&&t.userData.unit)return t.userData.unit;t=t.parent}return null}let es=!1;function Ng(){return es}function Og(i,t,e){if(C.selectedUnits.length===0)return;const n=Tc(i,t);if(n&&!n.selected&&n.isSelectable()){C.messageStream.appendMessage(ye.MSG_DO_ATTACK_OBJECT).appendObjectIdArgument(n.id);return}const s=Dg(i,t);s&&(e?C.messageStream.appendMessage(ye.MSG_ADD_WAYPOINT).appendLocationArgument(s):es?(C.messageStream.appendMessage(ye.MSG_DO_ATTACKMOVETO).appendLocationArgument(s),es=!1):C.messageStream.appendMessage(ye.MSG_DO_MOVETO).appendLocationArgument(s))}function Fg(i){if(C.selectedUnits.length===0)return!1;switch(i){case"KeyS":return C.messageStream.appendMessage(ye.MSG_DO_STOP),!0;case"KeyA":return es=!es,!0;case"KeyG":return!0;case"KeyX":return C.messageStream.appendMessage(ye.MSG_DO_SCATTER),!0}return!1}function _i(i,t,e){return`url("data:image/svg+xml,${encodeURIComponent(i)}") ${t} ${e}, auto`}const Tn=(()=>{const i=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
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
  </svg>`;function r(l){const u=l*Math.PI/180,c=Math.cos(u),f=Math.sin(u),g=16-c*6,_=16-f*6,p=16+c*3,m=16+f*3,v=16+c*13,x=16+f*13,M=6,w=16+c*3,E=16+f*3,A=w+-f*M,L=E+c*M,y=w- -f*M,S=E-c*M;return`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0d060"/><stop offset="100%" stop-color="#a07818"/></linearGradient></defs>
      <line x1="${g.toFixed(1)}" y1="${_.toFixed(1)}" x2="${p.toFixed(1)}" y2="${m.toFixed(1)}" stroke="#1a1400" stroke-width="5" stroke-linecap="round"/>
      <line x1="${g.toFixed(1)}" y1="${_.toFixed(1)}" x2="${p.toFixed(1)}" y2="${m.toFixed(1)}" stroke="url(#sg)" stroke-width="3" stroke-linecap="round"/>
      <polygon points="${v.toFixed(1)},${x.toFixed(1)} ${A.toFixed(1)},${L.toFixed(1)} ${y.toFixed(1)},${S.toFixed(1)}" fill="url(#sg)" stroke="#1a1400" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`}const o=[0,45,90,135,180,225,270,315].map(l=>_i(r(l),16,16));return{arrow:_i(i,3,1),select:_i(t,16,16),move:_i(e,16,16),attack:_i(n,16,16),attackMove:_i(s,16,16),scroll:o}})();let xi="";function Bg(i){if(!i)return;let t;if(Y.isPanning||Y.isRotating){const e=Y.mousePos,n=window.innerWidth/2,s=window.innerHeight/2,r=e.x-n,a=e.y-s,o=(Math.atan2(a,r)*180/Math.PI+360)%360,l=Math.round(o/45)%8;t="scroll"+l,t!==xi&&(i.style.cursor=Tn.scroll[l],xi=t);return}if(Y.isDragSelecting&&Y.wasDragSelecting)t="select";else{let e=-1;if(Y.edgeScrollEnabled){const n=window.innerWidth,s=window.innerHeight,r=Y.mousePos;let a=0,o=0;if(r.x<=Rn&&(a=-1),r.x>=n-Rn&&(a=1),r.y<=Rn&&(o=-1),r.y>=s-Rn&&(o=1),a!==0||o!==0){const l=(Math.atan2(o,a)*180/Math.PI+360)%360;e=Math.round(l/45)%8}}if(e>=0){t="scroll"+e,t!==xi&&(i.style.cursor=Tn.scroll[e],xi=t);return}C.selectedUnits&&C.selectedUnits.length>0?Ng()?t="attackMove":t="move":t="arrow"}if(t!==xi){const e={select:Tn.select,move:Tn.move,attack:Tn.attack,attackMove:Tn.attackMove,arrow:Tn.arrow};i.style.cursor=e[t]||Tn.arrow,xi=t}}const zg=24,Gg=.8,kg=.5,Hg=.35,qi=new Map;let Ns=0;const Vg=120,Wg="7px monospace";let bi=[],la=0;function Xg(){const i=[()=>`0x${(Math.random()*16777215|0).toString(16).toUpperCase().padStart(6,"0")}`,()=>`${Math.random()*360|0}.${(Math.random()*100|0).toString().padStart(2,"0")}°`,()=>`R:${(Math.random()*999|0).toString().padStart(3,"0")}`,()=>`${(Math.random()*100|0).toFixed(0)}%`,()=>`ID:${(Math.random()*9999|0).toString().padStart(4,"0")}`,()=>`T+${(Math.random()*99|0).toFixed(0)}s`,()=>`${Math.random()*255|0}.${Math.random()*255|0}.${Math.random()*255|0}`,()=>`SIG ${(Math.random()*10).toFixed(2)}`,()=>`BRG ${Math.random()*360|0}`,()=>`${String.fromCharCode(65+Math.random()*26|0)}${String.fromCharCode(65+Math.random()*26|0)}-${Math.random()*99|0}`,()=>`DST ${Math.random()*500|0}m`,()=>`PWR ${(Math.random()*100|0).toFixed(0)}kW`,()=>`FRQ ${(20+Math.random()*80|0).toFixed(0)}MHz`,()=>`ALT ${Math.random()*200|0}`,()=>`VEL ${(Math.random()*60|0).toFixed(1)}`];return i[Math.random()*i.length|0]()}function Yg(i,t,e,n,s){if(s-la<Vg)return;la=s;const r=e-i,a=n-t;if(r<30||a<30)return;const o=Math.random()*4|0;let l,h,d;const u=4;switch(o){case 0:l=i+Math.random()*r,h=t-u,d="bottom";break;case 1:l=i+Math.random()*r,h=n+u,d="top";break;case 2:l=i-u,h=t+Math.random()*a,d="right";break;case 3:l=e+u,h=t+Math.random()*a,d="left";break}bi.push({text:Xg(),x:l,y:h,align:d,born:s,life:800+Math.random()*1200}),bi.length>18&&bi.shift()}function qg(i,t){i.font=Wg,bi=bi.filter(e=>{const n=t-e.born;if(n>e.life)return!1;const s=Math.min(1,n/200),r=Math.max(0,1-(n-(e.life-300))/300),a=Math.min(s,r)*.7;if(a<=0)return!1;switch(i.fillStyle=`rgba(51, 255, 51, ${a.toFixed(3)})`,e.align){case"bottom":i.textAlign="center",i.textBaseline="bottom";break;case"top":i.textAlign="center",i.textBaseline="top";break;case"right":i.textAlign="right",i.textBaseline="middle";break;case"left":i.textAlign="left",i.textBaseline="middle";break}return i.fillText(e.text,e.x,e.y),!0})}function Fs(i){const t=zs;if(!t)return;if(!i){t.style.display="none",qi.clear(),Ns=0,bi=[],la=0;return}const e=Math.min(Y.dragStart.x,Y.dragEnd.x),n=Math.min(Y.dragStart.y,Y.dragEnd.y),s=Math.max(Y.dragStart.x,Y.dragEnd.x),r=Math.max(Y.dragStart.y,Y.dragEnd.y),a=s-e,o=r-n;if(a<2||o<2)return;const{camera:l,objectMarkers:h}=C,d=window.devicePixelRatio||1,u=window.innerWidth,c=window.innerHeight;t.width=u*d,t.height=c*d,t.style.width=u+"px",t.style.height=c+"px",t.style.display="block";const f=t.getContext("2d");f.setTransform(d,0,0,d,0,0),f.clearRect(0,0,u,c);const g=[];if(l&&h.visible){const E=new O;h.children.forEach(A=>{var I,z;if(!A.visible)return;const L=(I=A.userData)==null?void 0:I.kindOf,y=(((z=A.userData)==null?void 0:z.name)||"").toLowerCase();(L?L.has("VEHICLE")||L.has("INFANTRY")||L.has("AIRCRAFT")||L.has("HUGE_VEHICLE"):y.includes("vehicle")||y.includes("infantry")||y.includes("tank")||y.includes("humvee")||y.includes("soldier")||y.includes("ranger")||y.includes("missile")||y.includes("raptor")||y.includes("comanche")||y.includes("crusader")||y.includes("paladin")||y.includes("ambulance"))&&A.traverse(P=>{if(!P.isMesh||!P.geometry)return;const W=P.geometry.attributes.position;if(!W)return;const X=Math.max(1,Math.floor(W.count/24));for(let Q=0;Q<W.count;Q+=X)E.set(W.getX(Q),W.getY(Q),W.getZ(Q)),P.localToWorld(E),E.project(l),E.z>0&&E.z<1&&g.push((E.x*.5+.5)*u,(-E.y*.5+.5)*c)})})}const _=performance.now(),p=Ns?Math.min((_-Ns)/1e3,.1):.016;Ns=_;const m=zg,v=Math.ceil(a/m),x=Math.ceil(o/m),M=new Set;for(let E=0;E<g.length;E+=2){const A=g[E],L=g[E+1];if(A<e||A>=s||L<n||L>=r)continue;const y=Math.floor((A-e)/m),S=Math.floor((L-n)/m);M.add(`${y},${S}`)}const w=new Set;for(let E=0;E<x;E++)for(let A=0;A<v;A++){const L=e+A*m,y=n+E*m,S=Math.min(m,s-L),I=Math.min(m,r-y),z=M.has(`${A},${E}`),P=`${A},${E}`;w.add(P);let W=qi.get(P)||0;W=z?Math.min(Hg,W+Gg*p):Math.max(0,W-kg*p),qi.set(P,W),W>.001&&(f.fillStyle=`rgba(51, 255, 51, ${W.toFixed(3)})`,f.fillRect(L,y,S,I)),f.strokeStyle="rgba(51, 255, 51, 0.3)",f.lineWidth=.5,f.strokeRect(L+.5,y+.5,S-1,I-1)}for(const E of qi.keys())w.has(E)||qi.delete(E);f.strokeStyle="rgba(51, 255, 51, 0.6)",f.lineWidth=2,f.strokeRect(e,n,a,o),Yg(e,n,s,r,_),qg(f,_)}const $g=3407667,pl=8,jg=32;let Bs=null,ca=null,He=null;function Ac(){Bs||(Bs=new Ta(pl*.7,pl,jg),Bs.rotateX(-Math.PI/2)),ca||(ca=new Yn({color:$g,transparent:!0,opacity:.5,side:xe,depthWrite:!1})),He||(He=new en,He.name="selectionIndicators",C.scene&&C.scene.add(He))}function wi(i){if(!i||i.selected)return;Ac(),i.selected=!0,C.selectedUnits.push(i);const t=new Te(Bs,ca);t.position.set(i.position.x,i.position.y+.3,i.position.z),t.userData.unitId=i.id,He.add(t),i.selectionIndicator=t}function Kg(i){if(!i||!i.selected)return;i.selected=!1;const t=C.selectedUnits.indexOf(i);t!==-1&&C.selectedUnits.splice(t,1),i.selectionIndicator&&He&&(He.remove(i.selectionIndicator),i.selectionIndicator=null)}function Ji(){for(const i of C.selectedUnits)i.selected=!1,i.selectionIndicator&&He&&(He.remove(i.selectionIndicator),i.selectionIndicator=null);C.selectedUnits.length=0}function Zg(i){const{camera:t}=C;if(!t||!i)return;const e=i.name.toLowerCase(),n=new O,s=window.innerWidth,r=window.innerHeight;for(const a of C.units.values()){if(a.selected||!a.isSelectable()||!a.isLocallyControlled()||a.name.toLowerCase()!==e||(n.set(a.position.x,a.position.y,a.position.z),n.project(t),n.z<0||n.z>1))continue;const o=(n.x*.5+.5)*s,l=(-n.y*.5+.5)*r;o<0||o>s||l<0||l>r||wi(a)}}function Jg(){for(const i of C.selectedUnits)i.selectionIndicator&&i.selectionIndicator.position.set(i.position.x,i.position.y+.3,i.position.z)}function Qg(){Ac(),He&&C.scene&&!He.parent&&C.scene.add(He)}const t_=10,e_=20;let ml=0,qr=-1,gl=0,_l=0,xl=0;const n_=400,vl=6;let ha=0;function i_(){ha++}function s_(i,t,e){const n=Y.wasDragSelecting,s=Y.dragStartX,r=Y.dragStartY;n?a_(s,r,i,t,e):r_(i,t,e)}function r_(i,t,e){const n=performance.now(),s=Math.abs(i-_l),r=Math.abs(t-xl),a=n-gl<n_&&s<vl&&r<vl;gl=n,_l=i,xl=t;const o=Tc(i,t);if(a&&o&&oa(o,!1)){e||Ji(),wi(o),Zg(o),ua(!0);return}if(o&&oa(o,!1))e?o.selected?Kg(o):wi(o):(Ji(),wi(o)),ua(!e);else if(!e){if(C.selectedUnits.length===0)return;Ji(),l_()}}function a_(i,t,e,n,s){const a=Ig(i,t,e,n).filter(o=>oa(o,!0));if(a.length!==0){s||Ji();for(const o of a)wi(o);ua(!s)}}function o_(i,t,e){if(i<0||i>=t_)return;if(t&&!e){C.hotkeySquads[i]=C.selectedUnits.slice();return}if(t&&e){const a=[...C.hotkeySquads[i]||[]];for(const o of C.selectedUnits)a.includes(o)||a.push(o);C.hotkeySquads[i]=a;return}const n=C.hotkeySquads[i];if(!n||n.length===0)return;if(qr===i&&ha-ml<e_){const r=n[n.length-1];r&&r.mesh&&Y.target.set(r.position.x,r.position.y,r.position.z),qr=-1;return}ml=ha,qr=i,e||Ji();const s=n.filter(r=>C.units.has(r.id));C.hotkeySquads[i]=s;for(const r of s)wi(r)}function ua(i){if(!C.messageStream)return;const t=C.messageStream.appendMessage(ye.MSG_CREATE_SELECTED_GROUP);t.appendBoolArgument(i);for(const e of C.selectedUnits)t.appendObjectIdArgument(e.id)}function l_(){C.messageStream&&C.messageStream.appendMessage(ye.MSG_DESTROY_SELECTED_GROUP).appendBoolArgument(!0)}const cr=-37*Math.PI/180,c_=5,La=800,bc=250,Ml=20,h_=.005,u_=1.5,d_=8,Rn=3,Sl=.3,f_=.85,Y={target:new O,yaw:Math.PI*.75,pitch:cr,height:bc,velocity:new O,isPanning:!1,isRotating:!1,middleDown:!1,panAnchor:{x:0,y:0},rotAnchor:{x:0,y:0},rotAnchorYaw:0,rotAnchorPitch:0,keys:{},mousePos:{x:0,y:0},isDragSelecting:!1,wasDragSelecting:!1,dragStart:{x:0,y:0},dragEnd:{x:0,y:0},dragStartX:0,dragStartY:0,edgeScrollEnabled:!1,rightDown:!1,rightAnchor:{x:0,y:0},rightWasDrag:!1};let zs=null;function p_(i){i.addEventListener("contextmenu",t=>t.preventDefault()),i.addEventListener("mousedown",t=>{t.button===2?(Y.isPanning=!0,Y.panAnchor={x:t.clientX,y:t.clientY},Y.rightDown=!0,Y.rightAnchor={x:t.clientX,y:t.clientY},Y.rightWasDrag=!1):t.button===1?(t.preventDefault(),Y.middleDown=!0,Y.isRotating=!0,Y.rotAnchor={x:t.clientX,y:t.clientY},Y.rotAnchorYaw=Y.yaw,Y.rotAnchorPitch=Y.pitch):t.button===0&&(Y.isDragSelecting=!0,Y.wasDragSelecting=!1,Y.dragStart={x:t.clientX,y:t.clientY},Y.dragEnd={x:t.clientX,y:t.clientY},Y.dragStartX=t.clientX,Y.dragStartY=t.clientY,Fs(!1))}),window.addEventListener("mousemove",t=>{if(Y.mousePos={x:t.clientX,y:t.clientY},Y.isPanning){const e=t.clientX-Y.panAnchor.x,n=t.clientY-Y.panAnchor.y;Y.panAnchor={x:t.clientX,y:t.clientY};const s=Y.height*u_/window.innerHeight,r=Math.sin(Y.yaw),a=Math.cos(Y.yaw);if(Y.target.x-=(e*a+n*r)*s,Y.target.z-=(-e*r+n*a)*s,Y.rightDown){const o=Math.abs(t.clientX-Y.rightAnchor.x),l=Math.abs(t.clientY-Y.rightAnchor.y);(o>yi||l>yi)&&(Y.rightWasDrag=!0)}}if(Y.isRotating){const e=t.clientX-Y.rotAnchor.x;Y.yaw=Y.rotAnchorYaw-e*h_}if(Y.isDragSelecting){Y.dragEnd={x:t.clientX,y:t.clientY};const e=Math.abs(Y.dragEnd.x-Y.dragStart.x),n=Math.abs(Y.dragEnd.y-Y.dragStart.y);(e>yi||n>yi)&&(Y.wasDragSelecting=!0,Fs(!0))}}),window.addEventListener("mouseup",t=>{if(t.button===2&&(Y.isPanning=!1,Y.rightDown&&!Y.rightWasDrag&&Og(t.clientX,t.clientY,t.shiftKey),Y.rightDown=!1),t.button===1){if(Y.middleReleaseTime=performance.now(),Y.middleDown=!1,!Y.isRotating)return;Y.isRotating=!1;const e=Math.abs(t.clientX-Y.rotAnchor.x),n=Math.abs(t.clientY-Y.rotAnchor.y);e<3&&n<3&&(Y.pitch=cr,Y.yaw=Math.PI*.75,Y.height=bc)}t.button===0&&(Y.isDragSelecting=!1,Fs(!1),s_(t.clientX,t.clientY,t.shiftKey))}),i.addEventListener("wheel",t=>{if(t.preventDefault(),t.buttons&4||Y.middleDown||performance.now()-(Y.middleReleaseTime||0)<150)return;const e=t.deltaY>0?Ml:-Ml,n=Math.max(.5,Y.height/200);Y.height=Math.max(c_,Math.min(La,Y.height+e*n))},{passive:!1}),window.addEventListener("keydown",t=>{if(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA")return;Y.keys[t.code]=!0;const e=t.code.match(/^Digit(\d)$/);if(e){const n=parseInt(e[1]);o_(n,t.ctrlKey,t.shiftKey);return}!t.ctrlKey&&!t.altKey&&Fg(t.code)}),window.addEventListener("keyup",t=>{Y.keys[t.code]=!1}),zs=document.createElement("canvas"),zs.style.cssText="position:fixed;top:0;left:0;pointer-events:none;display:none;z-index:100;",document.body.appendChild(zs)}function m_(){const{camera:i,renderer:t}=C,e=Y.keys;let n=0,s=0;(e.KeyW||e.ArrowUp)&&(s-=1),(e.KeyS||e.ArrowDown)&&(s+=1),(e.KeyA||e.ArrowLeft)&&(n-=1),(e.KeyD||e.ArrowRight)&&(n+=1);let r=0,a=0;if(Y.edgeScrollEnabled){const h=window.innerWidth,d=window.innerHeight,u=Y.mousePos;u.x<=Rn&&(r-=1),u.x>=h-Rn&&(r+=1),u.y<=Rn&&(a-=1),u.y>=d-Rn&&(a+=1)}if(n!==0||s!==0||r!==0||a!==0){const h=d_*(Y.height/200),d=Math.sin(Y.yaw),u=Math.cos(Y.yaw),c=n+r*Sl,f=s+a*Sl;Y.velocity.x+=(c*u+f*d)*h,Y.velocity.z+=(-c*d+f*u)*h}Y.target.add(Y.velocity),Y.velocity.multiplyScalar(f_);const l=Y.height/Math.sin(-Y.pitch)*Math.cos(-Y.pitch);if(i.position.set(Y.target.x+Math.sin(Y.yaw)*l,Y.target.y+Y.height,Y.target.z+Math.cos(Y.yaw)*l),i.lookAt(Y.target),Bg(t==null?void 0:t.domElement),Y.isDragSelecting){const h=Math.abs(Y.dragEnd.x-Y.dragStart.x),d=Math.abs(Y.dragEnd.y-Y.dragStart.y);(h>yi||d>yi)&&Fs(!0)}}const qn=new Map,Ii=new Map,os=new Map;function g_(){qn.clear(),Ii.clear();const i=[];for(const[t]of jt)(t.startsWith("data/ini/")&&t.endsWith(".ini")||t.includes("object")&&t.endsWith(".ini"))&&i.push(t);i.sort(),console.groupCollapsed(`Object INI: scanning ${i.length} INI files`);for(const t of i){const e=jt.get(t);if(!e)continue;const n=qn.size;try{const s=new Uint8Array(e.buffer,e.offset,e.size),r=new TextDecoder("ascii").decode(s);__(r);const a=qn.size-n;a>0&&console.log(`  ${t}: +${a} mappings`)}catch(s){console.warn(`  ${t}: PARSE ERROR`,s)}}console.groupEnd(),console.log(`Object INI: ${qn.size} object→model mappings, ${Ii.size} KindOf entries`)}function __(i){const t=i.split(/\r?\n/);let e=null,n=!1,s=!1;for(const r of t){const a=r.replace(/;.*$/,"").replace(/\/\/.*$/,"").trim();if(!a)continue;const o=a.match(/^(?:Object|ObjectReskin)\s+(\S+)/i);if(o){e=o[1].toLowerCase(),n=!1,s=!1;continue}if(!e)continue;if(/^End$/i.test(a)){s?s=!1:n&&(n=!1);continue}const l=a.match(/^\s*KindOf\s*=\s*(.+)/i);if(l&&!Ii.has(e)){const h=new Set(l[1].trim().split(/\s+/).map(d=>d.toUpperCase()));Ii.set(e,h)}if(/^\s*Draw\s*=\s*W3D/i.test(a)){n=!0;continue}if(n&&/^\s*(?:Default)?ConditionState/i.test(a)){s=!0;continue}if(n&&!qn.has(e)){const h=a.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);h&&qn.set(e,h[1].toLowerCase())}}}function x_(){os.clear();const i=["data/ini/roads.ini","data/ini/default/roads.ini"];for(const t of i){const e=jt.get(t);if(!e)continue;const n=new Uint8Array(e.buffer,e.offset,e.size),s=new TextDecoder("ascii").decode(n);v_(s)}}function v_(i){const t=i.split(/\r?\n/);let e=null,n=!1,s=sa,r=1,a="";for(const o of t){const l=o.replace(/;.*$/,"").trim();if(l){if(/^Road\s+/i.test(l))e=l.replace(/^Road\s+/i,"").trim(),n=!0,s=sa,r=1,a="";else if(/^Bridge\s+/i.test(l))n=!1;else if(/^End$/i.test(l)&&n&&e)os.set(e.toLowerCase(),{roadWidth:s,roadWidthInTexture:r,texture:a}),e=null;else if(n&&e){const h=l.match(/^Texture\s*=\s*(.+)/i);h&&(a=h[1].trim());const d=l.match(/^RoadWidth\s*=\s*([\d.]+)/i);d&&(s=parseFloat(d[1]));const u=l.match(/^RoadWidthInTexture\s*=\s*([\d.]+)/i);u&&(r=parseFloat(u[1]))}}}}const Le=new Map,Gs=new Map;function M_(){Le.clear();for(const[i]of jt){if(!i.endsWith(".w3d"))continue;const t=i.split("/"),e=t[t.length-1].replace(/\.w3d$/,"");Le.has(e)||Le.set(e,i)}console.log(`W3D index: ${Le.size} models available`)}function $i(i){return Le.has(i)?Le.get(i):null}function $r(i){return i.replace(/\d+$/,"")}function yl(i){const t=i.toLowerCase();if(Gs.has(t))return Gs.get(t);let e=null;const n=qn.get(t);if(n){const s=n.includes(".")?n.split(".")[0]:n;e=$i(s)}if(e||(e=$i(t)),!e){const s=[["tree","tr"],["tree",""],["civ","cf"],["civ","c"],["civ",""],["mes","mes"],["asia","as"],["euro","eu"]];for(const[r,a]of s){if(!t.startsWith(r))continue;const o=t.slice(r.length);if(e=$i(a+o),e)break;const l=$r(a+o);if(l!==a+o){for(const[h,d]of Le)if($r(h)===l){e=d;break}if(e)break}}}if(!e){const s={america:"a",china:"c",gla:"g",civilian:"c",europe:"eu"},r={vehicle:"v",infantry:"i",structure:"",building:"",tech:""};for(const[a,o]of Object.entries(s)){if(!t.startsWith(a))continue;let l=t.slice(a.length);for(const[h,d]of Object.entries(r)){if(!l.startsWith(h))continue;const u=l.slice(h.length),c=o+d+u;if(e=$i(c),e)break}if(e||(e=$i(o+l),e))break}}if(!e){const s=t.replace(/^(?:america|china|gla|civilian|europe|tree|civ|mes)/,"").replace(/^(?:vehicle|infantry|structure|building)/,"");if(s.length>=3){const r=$r(s);let a=0;for(const[o,l]of Le){if(o.includes(s)){e=l;break}r.length>=3&&o.includes(r)&&r.length>a&&(a=r.length,e=l)}}}if(!e){const s=n?` (INI→"${n}")`:" (no INI mapping)",r=[],a=t.replace(/^(?:tree|civ|mes|america|china|gla|civilian|europe)/,"").replace(/\d+$/,"");if(a.length>=3){for(const[l]of Le)if(l.includes(a)&&r.push(l),r.length>=5)break}const o=r.length>0?` Similar W3D: [${r.join(", ")}]`:"";console.warn(`W3D not found: "${i}"${s}${o}`)}return Gs.set(t,e),e}function er(i,t){return Math.sqrt(i*i+t*t)}function nn(i,t,e,n){return i*e+t*n}function da(i,t,e,n){return i*n-t*e}function Ge(i,t){const e=er(i,t);return e<1e-9?{x:0,y:0}:{x:i/e,y:t/e}}function fa(i,t,e){const n=Math.cos(e),s=Math.sin(e);return{x:i*n-t*s,y:i*s+t*n}}function ke(i,t){return Math.abs(i.x-t.x)<Zs&&Math.abs(i.y-t.y)<Zs}function wc(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e];if(!(n.flags&fc))continue;const s=i[e+1];if(!(s.flags&pc))continue;const r=n.name.toLowerCase(),a=os.get(r),o=a?a.roadWidth:sa,l=a?a.roadWidthInTexture:1,h=!!(n.flags&og),u=!!(n.flags&lg)?ra:ug;t.push({pt1:{x:n.x,y:n.y,count:0,last:!0},pt2:{x:s.x,y:s.y,count:0,last:!0},name:n.name,typeName:r,halfWidth:o*l/2,widthInTexture:l,scale:o,type:Qe,isAngled:h,curveRadius:u}),e++}return t}function S_(i){for(let a=i.length-1;a>0;a--){const o=i[a];if(o.type===Qe)for(let l=0;l<a;l++){const h=i[l];h.type===Qe&&h.typeName===o.typeName&&(ke(h.pt1,o.pt1)&&(h.pt1.count++,o.pt1.count++,h.pt1.last=!1),ke(h.pt1,o.pt2)&&(h.pt1.count++,o.pt2.count++,h.pt1.last=!1),ke(h.pt2,o.pt1)&&(h.pt2.count++,o.pt1.count++,h.pt2.last=!1),ke(h.pt2,o.pt2)&&(h.pt2.count++,o.pt2.count++,h.pt2.last=!1))}}const t=[],e=i.length;for(let a=0;a<e;a++){const o=i[a];o.type===Qe&&(o.pt1.count===2&&(t.push({x:o.pt1.x,y:o.pt1.y}),El(i,o.pt1,a)),o.pt2.count===2&&(t.push({x:o.pt2.x,y:o.pt2.y}),El(i,o.pt2,a)),o.pt1.count===3&&(t.push({x:o.pt1.x,y:o.pt1.y}),Tl(i,o.pt1,a)),o.pt2.count===3&&(t.push({x:o.pt2.x,y:o.pt2.y}),Tl(i,o.pt2,a)))}function n(a){for(const o of t)if(Math.abs(a.x-o.x)<Zs&&Math.abs(a.y-o.y)<Zs)return!0;return!1}const s=i.length;let r=-1;for(let a=0;a<s;a++)i[a].type===Qe&&(a<s-1&&i[a+1].type===Qe&&i[a].typeName===i[a+1].typeName&&ke(i[a].pt1,i[a+1].pt2)&&i[a].pt1.count===1&&i[a+1].pt2.count===1&&!n(i[a].pt1)?(Al(i,a,a+1),r<0&&(r=a)):r>=0&&(i[a].type===Qe&&i[a].typeName===i[r].typeName&&ke(i[a].pt1,i[r].pt2)&&i[r].pt2.count===1&&i[a].pt1.count===1&&!n(i[a].pt1)&&Al(i,a,r),r=-1));return i}function Cc(i,t,e,n){const s=[];for(let r=0;r<i.length;r++){if(r===e)continue;const a=i[r];a.typeName===n&&(ke(a.pt1,t)?s.push({seg:a,centerPt:a.pt1,remotePt:a.pt2,idx:r}):ke(a.pt2,t)&&s.push({seg:a,centerPt:a.pt2,remotePt:a.pt1,idx:r}))}return s}function Rc(i,t,e,n){for(const s of i)s.typeName===e&&(ke(s.pt1,t)&&(s.pt1.count=n),ke(s.pt2,t)&&(s.pt2.count=n))}function El(i,t,e){const n={x:t.x,y:t.y},s=i[e],r=Cc(i,n,e,s.typeName);if(r.length<2)return;const a=ke(s.pt1,n)?s.pt2:s.pt1,o=r[0].remotePt,l=r[1].remotePt,h=Ge(a.x-n.x,a.y-n.y),d=Ge(o.x-n.x,o.y-n.y),u=Ge(l.x-n.x,l.y-n.y),c=nn(h.x,h.y,d.x,d.y),f=nn(h.x,h.y,u.x,u.y),g=nn(u.x,u.y,d.x,d.y);let _,p;c<=f&&c<=g?(_={x:d.x-h.x,y:d.y-h.y},p=u):f<=g?(_={x:u.x-h.x,y:u.y-h.y},p=d):(_={x:d.x-u.x,y:d.y-u.y},p=h);const m=Ge(_.x,_.y),v=da(m.x,m.y,p.x,p.y)<0?-Math.PI/2:Math.PI/2,x={x:m.x*.5*s.scale,y:m.y*.5*s.scale},M=fa(x.x,x.y,v),E=Math.abs(nn(m.x,m.y,p.x,p.y))>.5;let A;E?A=da(M.x,M.y,p.x,p.y)>0?Ks:wa:A=ba,Rc(i,n,s.typeName,-3),i.push({pt1:{x:n.x,y:n.y,count:-3,last:!0},pt2:{x:n.x+M.x,y:n.y+M.y,count:0,last:!0},name:s.name,typeName:s.typeName,halfWidth:s.halfWidth,widthInTexture:s.widthInTexture,scale:s.scale,type:A,isAngled:!1,curveRadius:s.curveRadius})}function Tl(i,t,e){const n={x:t.x,y:t.y},s=i[e],r=Cc(i,n,e,s.typeName);if(r.length<3)return;const l=[ke(s.pt1,n)?s.pt2:s.pt1,r[0].remotePt,r[1].remotePt,r[2].remotePt].map(g=>Ge(g.x-n.x,g.y-n.y));let h=2,d=0,u=1;for(let g=0;g<4;g++)for(let _=g+1;_<4;_++){const p=nn(l[g].x,l[g].y,l[_].x,l[_].y);p<h&&(h=p,d=g,u=_)}const c=Ge(l[d].x-l[u].x,l[d].y-l[u].y),f={x:c.x*.5*s.scale,y:c.y*.5*s.scale};Rc(i,n,s.typeName,-3),i.push({pt1:{x:n.x,y:n.y,count:-3,last:!0},pt2:{x:n.x+f.x,y:n.y+f.y,count:0,last:!0},name:s.name,typeName:s.typeName,halfWidth:s.halfWidth,widthInTexture:s.widthInTexture,scale:s.scale,type:js,isAngled:!1,curveRadius:s.curveRadius})}function Al(i,t,e){const n=i[t],s=i[e];if(n.isAngled)return;const r=Ge(n.pt2.x-n.pt1.x,n.pt2.y-n.pt1.y),a=Ge(s.pt2.x-s.pt1.x,s.pt2.y-s.pt1.y),o=nn(r.x,r.y,a.x,a.y),l=da(r.x,r.y,a.x,a.y),d=Math.acos(Math.max(-1,Math.min(1,o)))/(Math.PI/6);if(d<.9)return;const u=n.curveRadius*n.scale;let c,f,g,_,p=r,m=a;l>0?(c=n.pt1,f=n.pt2,g=s.pt1,_=s.pt2):(_=n.pt1,g=n.pt2,f=s.pt1,c=s.pt2,p=Ge(f.x-c.x,f.y-c.y),m=Ge(_.x-g.x,_.y-g.y));const v=p.y*u,x=-p.x*u,M=m.y*u,w=-m.x*u,E=c.x+v,A=c.y+x,L=f.x+v,y=f.y+x,S=g.x+M,I=g.y+w,z=_.x+M,P=_.y+w,W=L-E,X=y-A,Q=z-S,et=P-I,H=W*et-X*Q;if(Math.abs(H)<1e-6)return;const it=((S-E)*et-(I-A)*Q)/H,q=E+W*it,dt=A+X*it,Rt=q-M,_t=dt-w,V=q-v,tt=dt-x;if(nn(m.x,m.y,Rt-g.x,_t-g.y)<.5||nn(p.x,p.y,f.x-V,f.y-tt)<.5)return;const At=-Math.PI/6;let wt=Rt,U=_t;const Mt=Ge(g.x-Rt,g.y-_t),nt=-Mt.y*u,Ct=Mt.x*u,St=wt+nt,Ut=U+Ct,bt=Math.max(1,Math.floor(d));for(let Gt=0;Gt<bt;Gt++){const Jt=wt-St,R=U-Ut,T=fa(Jt,R,At),k=St+T.x,j=Ut+T.y,Z=Ge(wt-St,U-Ut),J=fa(Z.x,Z.y,At),xt=-J.y,lt=J.x,ot=k+xt*n.scale,Dt=j+lt*n.scale;i.push({pt1:{x:k,y:j,count:0,last:!0},pt2:{x:ot,y:Dt,count:0,last:!0},name:n.name,typeName:n.typeName,halfWidth:n.halfWidth,widthInTexture:n.widthInTexture,scale:n.scale,type:Aa,isAngled:!1,curveRadius:n.curveRadius}),wt=k,U=j}}function Pa(i){const t=document.getElementById("error-toast");t.textContent=i,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),5e3)}function bl(i,t){var l,h,d,u;const e=i.heightMap,n=document.getElementById("panel"),s=document.getElementById("info-grid");n.style.display="block",document.getElementById("toolbar").style.display="flex";const r=[["Playable Area",`${t.playW} × ${t.playH}`],["Full Grid",`${e.width} × ${e.height}`],["Border",`${e.borderSize}`],["Height Range",`${t.minH} – ${t.maxH}`],["Objects",`${i.objects.filter(c=>!(c.flags&mc)).length}${Le.size>0?` (${Le.size} W3D available)`:""}`],["Roads",`${wc(i.objects).length} segments`],["Terrain Types",`${((l=i.blendTileData)==null?void 0:l.textureClasses.length)||0}`],["Water Areas",`${i.polygonTriggers.filter(c=>c.isWaterArea).length}`],["Textures",C.terrainAtlas?`Atlas ${C.terrainAtlas.atlasW}x${C.terrainAtlas.atlasH}`:jt.size>0?"BIG loaded, textures missing":"Drop Terrain.big"],["Time of Day",["Morning","Afternoon","Evening","Night"][((h=i.lighting)==null?void 0:h.todIndex)??1]]];s.innerHTML=r.map(([c,f])=>`<span class="label">${c}</span><span class="value">${f}</span>`).join("");const a=document.getElementById("time-of-day");a.value=String(((d=i.lighting)==null?void 0:d.todIndex)??1);const o=document.getElementById("terrain-legend");if((u=i.blendTileData)!=null&&u.textureClasses){const c=i.blendTileData.textureClasses;o.innerHTML='<div style="color:#8b949e;font-size:12px;margin-bottom:6px">Terrain Types</div>'+c.map(f=>{const _="#"+vc(f.name).toString(16).padStart(6,"0"),p=f.name.replace(/\.tga$/i,"");return`<div class="item"><div class="swatch" style="background:${_}"></div>${p}</div>`}).join("")}}function y_(i){let t=0,e=i[t++]<<8|i[t++],n=!!(e&32768),s=n?4:3;e&256&&(t+=s);let r=0;n?r=i[t++]<<24|i[t++]<<16|i[t++]<<8|i[t++]:r=i[t++]<<16|i[t++]<<8|i[t++];const a=new Uint8Array(r);let o=0;for(;;){let l=i[t++];if(!(l&128)){let d=i[t++],u=l&3;for(;u--;)a[o++]=i[t++];let c=o-1-(((l&96)<<3)+d);u=((l&28)>>2)+3-1;do a[o++]=a[c++];while(u--);continue}if(!(l&64)){let d=i[t++],u=i[t++],c=d>>6;for(;c--;)a[o++]=i[t++];let f=o-1-(((d&63)<<8)+u);c=(l&63)+4-1;do a[o++]=a[f++];while(c--);continue}if(!(l&32)){let d=i[t++],u=i[t++],c=i[t++],f=l&3;for(;f--;)a[o++]=i[t++];let g=o-1-(((l&16)>>4<<16)+(d<<8)+u);f=((l&12)>>2<<8)+c+5-1;do a[o++]=a[g++];while(f--);continue}let h=((l&31)<<2)+4;if(h<=112){for(;h--;)a[o++]=i[t++];continue}for(h=l&3;h--;)a[o++]=i[t++];break}return a}async function E_(i){const t=new Uint8Array(i);if(t.length<8)return t;const e=String.fromCharCode(t[0],t[1],t[2],t[3]);if(e==="EAR\0")return y_(t.subarray(8));if(e.startsWith("ZL")&&t[3]===0)try{const n=t.subarray(8),s=new DecompressionStream("deflate"),o=new Blob([n]).stream().pipeThrough(s).getReader(),l=[];for(;;){const{done:c,value:f}=await o.read();if(c)break;l.push(f)}const h=l.reduce((c,f)=>c+f.length,0),d=new Uint8Array(h);let u=0;for(const c of l)d.set(c,u),u+=c.length;return d}catch(n){return Pa("Failed to decompress ZLib-compressed map: "+n.message),null}return t}class T_{constructor(t){t instanceof Uint8Array?(this.buffer=t.buffer,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.bytes=t):(this.buffer=t,this.view=new DataView(t),this.bytes=new Uint8Array(t)),this.pos=0}get eof(){return this.pos>=this.bytes.length}get remaining(){return this.bytes.length-this.pos}readUInt32(){const t=this.view.getUint32(this.pos,!0);return this.pos+=4,t}readInt32(){const t=this.view.getInt32(this.pos,!0);return this.pos+=4,t}readUInt16(){const t=this.view.getUint16(this.pos,!0);return this.pos+=2,t}readInt16(){const t=this.view.getInt16(this.pos,!0);return this.pos+=2,t}readFloat32(){const t=this.view.getFloat32(this.pos,!0);return this.pos+=4,t}readByte(){return this.bytes[this.pos++]}readBytes(t){const e=this.bytes.subarray(this.pos,this.pos+t);return this.pos+=t,e}readInt16Array(t){const e=new Int16Array(t);for(let n=0;n<t;n++)e[n]=this.view.getInt16(this.pos,!0),this.pos+=2;return e}readAsciiString(){const t=this.readUInt16();if(t===0)return"";const e=this.readBytes(t);let n="";for(let s=0;s<t;s++)n+=String.fromCharCode(e[s]);return n}readUnicodeString(){const t=this.readUInt16();if(t===0)return"";let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(this.readUInt16());return e}readDict(t){const e=this.readUInt16(),n={};for(let s=0;s<e;s++){const r=this.readInt32(),a=r&255,o=r>>>8,l=t[o]||`key_${o}`;switch(a){case 1:n[l]=!!this.readByte();break;case 2:n[l]=this.readInt32();break;case 3:n[l]=this.readFloat32();break;case 4:n[l]=this.readAsciiString();break;case 5:n[l]=this.readUnicodeString();break;default:throw new Error(`Unknown dict type ${a}`)}}return n}seek(t){this.pos=t}skip(t){this.pos+=t}tell(){return this.pos}}function A_(i){const t=new T_(i),e=t.readBytes(4);if(String.fromCharCode(e[0],e[1],e[2],e[3])!=="CkMp")throw new Error("Invalid map file: missing CkMp header");const n=t.readInt32(),s={};for(let a=0;a<n;a++){const o=t.readByte();let l="";for(let d=0;d<o;d++)l+=String.fromCharCode(t.readByte());const h=t.readUInt32();s[h]=l}const r={heightMap:null,blendTileData:null,objects:[],lighting:null,polygonTriggers:[],worldInfo:{}};for(;!t.eof&&t.remaining>=10;){const a=t.readUInt32(),o=t.readUInt16(),l=t.readInt32(),h=s[a]||`unknown_${a}`,u=t.tell()+l;try{h==="HeightMapData"?r.heightMap=b_(t,o):h==="BlendTileData"?r.blendTileData=w_(t,o,r.heightMap):h==="ObjectsList"?C_(t,o,u,s,r):h==="GlobalLighting"?r.lighting=L_(t,o):h==="PolygonTriggers"?P_(t,o,u,r):h==="WorldInfo"&&D_(t,o,u,s,r)}catch(c){console.warn(`Error parsing chunk '${h}':`,c)}t.seek(u)}return r}function b_(i,t){const e=i.readInt32(),n=i.readInt32();let s=0,r=[];if(t>=3&&(s=i.readInt32()),t>=4){const h=i.readInt32();for(let d=0;d<h;d++)r.push({x:i.readInt32(),y:i.readInt32()})}else r.push({x:e-2*s,y:n-2*s});const a=i.readInt32();if(a!==e*n)throw new Error(`Height data size mismatch: ${a} vs ${e}x${n}`);const o=i.readBytes(a),l=new Uint8Array(a);return l.set(o),{width:e,height:n,borderSize:s,boundaries:r,data:l}}function w_(i,t,e){if(!e)return null;const n=e.width*e.height,s=i.readInt32();s!==n&&console.warn(`Blend tile data size mismatch: ${s} vs ${n}`);const r=i.readInt16Array(s),a=i.readInt16Array(s);let o=null;if(t>=6&&(o=i.readInt16Array(s)),t>=5&&i.readInt16Array(s),t>=7){const m=Math.floor((e.width+1)/8),v=e.height*m;i.skip(v)}const l=i.readInt32(),h=i.readInt32();let d=1;t>=5&&(d=i.readInt32());const u=i.readInt32(),c=[];for(let m=0;m<u;m++){const v=i.readInt32(),x=i.readInt32(),M=i.readInt32();i.readInt32();const w=i.readAsciiString();c.push({firstTile:v,numTiles:x,width:M,name:w})}let f=0;const g=[];if(t>=4){i.readInt32(),f=i.readInt32();for(let m=0;m<f;m++){const v=i.readInt32(),x=i.readInt32(),M=i.readInt32(),w=i.readAsciiString();g.push({firstTile:v,numTiles:x,width:M,name:w})}}const _=2061107200,p=[null];for(let m=1;m<h;m++){const v=i.readInt32(),x=i.readByte(),M=i.readByte(),w=i.readByte(),E=i.readByte(),A=i.readByte();let L=0;t>=3&&(L=i.readByte());let y=-1;t>=4&&(y=i.readInt32());const S=i.readUInt32();S!==_&&console.warn(`Blend tile sentinel mismatch at index ${m}: 0x${S.toString(16)}`),p.push({blendNdx:v,horiz:x,vert:M,rightDiagonal:w,leftDiagonal:E,inverted:A,longDiagonal:L,customBlendEdgeClass:y})}if(t>=5)for(let m=1;m<d;m++)i.skip(38);return{tileNdxes:r,blendTileNdxes:a,extraBlendTileNdxes:o,numBitmapTiles:l,numBlendedTiles:h,blendedTiles:p,textureClasses:c,edgeTextureClasses:g}}function C_(i,t,e,n,s){for(;i.tell()<e&&i.remaining>=10;){const r=i.readUInt32(),a=i.readUInt16(),o=i.readInt32(),l=n[r]||"",h=i.tell()+o;if(l==="Object")try{const d=R_(i,a,n);d&&s.objects.push(d)}catch(d){console.warn("Error parsing object:",d)}i.seek(h)}}function R_(i,t,e){const n=i.readFloat32(),s=i.readFloat32(),r=i.readFloat32(),a=i.readFloat32(),o=i.readInt32(),l=i.readAsciiString();let h={};if(t>=2)try{h=i.readDict(e)}catch{}return t<=2?{x:n,y:s,z:0,angle:a,flags:o,name:l,dict:h}:{x:n,y:s,z:r,angle:a,flags:o,name:l,dict:h}}function L_(i,t){try{let s=function(){return{ambient:{r:i.readFloat32(),g:i.readFloat32(),b:i.readFloat32()},diffuse:{r:i.readFloat32(),g:i.readFloat32(),b:i.readFloat32()},lightPos:{x:i.readFloat32(),y:i.readFloat32(),z:i.readFloat32()}}};var e=s;const n=i.readInt32(),r=[];for(let o=0;o<4;o++){const l=s(),h=s();let d=null,u=null,c=null,f=null;t>=2&&(d=s(),u=s()),t>=3&&(c=s(),f=s()),r.push({terrainLights:[l,c,f].filter(Boolean),objectLights:[h,d,u].filter(Boolean)})}const a=Math.max(0,Math.min(3,(n||1)-1));return{timeOfDay:n,todIndex:a,entries:r,...r[a]}}catch{return null}}function P_(i,t,e,n){try{const s=i.readInt32();for(let r=0;r<s&&i.tell()<e;r++){const a={};a.name=i.readAsciiString(),a.id=i.readInt32(),a.isWaterArea=!1,a.isRiver=!1,t>=2&&(a.isWaterArea=!!i.readByte()),t>=3&&(a.isRiver=!!i.readByte(),a.riverStart=i.readInt32());const o=i.readInt32();a.points=[];for(let l=0;l<o;l++)a.points.push({x:i.readInt32(),y:i.readInt32(),z:i.readInt32()});n.polygonTriggers.push(a)}}catch{}}function D_(i,t,e,n,s){try{s.worldInfo=i.readDict(n)}catch{}}const Oe=Object.freeze({AICMD_MOVE_TO_POSITION:0,AICMD_MOVE_TO_OBJECT:1,AICMD_IDLE:5,AICMD_FOLLOW_WAYPOINT_PATH:6,AICMD_FOLLOW_PATH:9,AICMD_ATTACK_OBJECT:12,AICMD_FORCE_ATTACK_OBJECT:13,AICMD_ATTACK_POSITION:15,AICMD_ATTACKMOVE_TO_POSITION:16,AICMD_GUARD_POSITION:30,AICMD_GUARD_OBJECT:31,AICMD_FOLLOW_PATH_APPEND:50}),ce=Object.freeze({AI_IDLE:0,AI_MOVE_TO:1,AI_FOLLOW_PATH:6,AI_WAIT:8,AI_ATTACK_POSITION:9,AI_ATTACK_OBJECT:10,AI_FORCE_ATTACK_OBJECT:11,AI_DEAD:13,AI_GUARD:16,AI_ATTACK_MOVE_TO:30}),Jn=Object.freeze({CMD_FROM_PLAYER:0,CMD_FROM_SCRIPT:1,CMD_FROM_AI:2});class vi{constructor(t,e){this.cmd=t,this.cmdSource=e,this.pos=null,this.targetId=null,this.intValue=0}}function I_(){if(!C.messageStream)return;const i=C.messageStream.consumeMessages();for(const t of i)switch(t.getType()){case ye.MSG_DO_MOVETO:wl(t,!1);break;case ye.MSG_ADD_WAYPOINT:wl(t,!0);break;case ye.MSG_DO_ATTACKMOVETO:U_(t);break;case ye.MSG_DO_STOP:Cl();break;case ye.MSG_DO_ATTACK_OBJECT:N_(t);break;case ye.MSG_DO_GUARD_POSITION:O_(t);break;case ye.MSG_DO_SCATTER:Cl();break}}function wl(i,t){const e=i.getArgument(0);if(!e)return;const n=e.location;for(const s of C.selectedUnits)!s.ai||!s.isMobile()||(t?s.ai.queueWaypoint(n):s.ai.aiMoveToPosition(n,Jn.CMD_FROM_PLAYER))}function U_(i){const t=i.getArgument(0);if(!t)return;const e=t.location;for(const n of C.selectedUnits)!n.ai||!n.isMobile()||n.ai.aiAttackMoveToPosition(e,Jn.CMD_FROM_PLAYER)}function Cl(){for(const i of C.selectedUnits)i.ai&&i.ai.aiIdle(Jn.CMD_FROM_PLAYER)}function N_(i){const t=i.getArgument(0);if(!t)return;const e=t.objectId,n=C.units.get(e);if(n)for(const s of C.selectedUnits)!s.ai||!s.isMobile()||s.ai.aiMoveToPosition(n.position,Jn.CMD_FROM_PLAYER)}function O_(i){const t=i.getArgument(0);if(!t)return;const e=t.location;for(const n of C.selectedUnits)n.ai&&n.ai.aiGuardPosition(e,Jn.CMD_FROM_PLAYER)}const An=Object.freeze({CELL_CLEAR:0,CELL_WATER:1,CELL_CLIFF:2,CELL_RUBBLE:3,CELL_OBSTACLE:4,CELL_IMPASSABLE:5}),F_=.6;class B_{constructor(){this.cells=null,this.width=0,this.height=0,this.zones=null,this.nextZoneId=1}buildFromHeightmap(t,e,n){const s=t,r=s.width,a=s.height,o=s.borderSize,l=r-2*o,h=a-2*o;this.playH=h,this.width=Math.floor(l*$t/Ne),this.height=Math.floor(h*$t/Ne),this.cells=new Uint8Array(this.width*this.height),this.cells.fill(An.CELL_CLEAR);for(let d=0;d<this.height;d++)for(let u=0;u<this.width;u++){const c=u*Ne+Ne/2,f=d*Ne+Ne/2,g=(h-1)*$t-f,_=this.classifyCell(c,g,s,o);this.cells[d*this.width+u]=_}n&&this.classifyObjectFootprints(n,h),this.buildZones()}classifyCell(t,e,n,s){const r=t/$t+s,a=n.height-1-s-e/$t,o=Math.floor(r),l=Math.floor(a);if(o<0||l<0||o>=n.width-1||l>=n.height-1)return An.CELL_IMPASSABLE;const h=n.data[l*n.width+o]*qe,d=n.data[l*n.width+(o+1)]*qe,u=n.data[(l+1)*n.width+o]*qe,c=n.data[(l+1)*n.width+(o+1)]*qe,f=Math.max(h,d,u,c),g=Math.min(h,d,u,c);return(f-g)/Ne>F_?An.CELL_CLIFF:An.CELL_CLEAR}classifyObjectFootprints(t,e){for(const n of t){const s=n.name.toLowerCase();if(!(s.includes("structure")||s.includes("building")||s.includes("commandcenter")||s.includes("barracks")||s.includes("factory")||s.includes("power")||s.includes("supply")||s.includes("techbuilding")))continue;const a=n.x,o=(e-1)*$t-n.y,l=2,h=this.worldToCell(a,o);for(let d=-l;d<=l;d++)for(let u=-l;u<=l;u++){const c=h.x+u,f=h.y+d;c>=0&&c<this.width&&f>=0&&f<this.height&&(this.cells[f*this.width+c]=An.CELL_OBSTACLE)}}}buildZones(){this.zones=new Int32Array(this.width*this.height),this.zones.fill(0),this.nextZoneId=1;for(let t=0;t<this.height;t++)for(let e=0;e<this.width;e++){const n=t*this.width+e;this.zones[n]===0&&this.isCellPassable(this.cells[n])&&this.floodFillZone(e,t,this.nextZoneId++)}}floodFillZone(t,e,n){const s=[[t,e]];for(;s.length>0;){const[r,a]=s.pop();if(r<0||r>=this.width||a<0||a>=this.height)continue;const o=a*this.width+r;this.zones[o]===0&&this.isCellPassable(this.cells[o])&&(this.zones[o]=n,s.push([r+1,a],[r-1,a],[r,a+1],[r,a-1]))}}isCellPassable(t){return t===An.CELL_CLEAR||t===An.CELL_RUBBLE}getCell(t,e){return t<0||t>=this.width||e<0||e>=this.height?An.CELL_IMPASSABLE:this.cells[e*this.width+t]}getZone(t,e){return t<0||t>=this.width||e<0||e>=this.height?0:this.zones[e*this.width+t]}worldToCell(t,e){return{x:Math.floor(t/Ne),y:Math.floor(e/Ne)}}cellToWorld(t,e){return{x:t*Ne+Ne/2,z:e*Ne+Ne/2}}}class Rl{constructor(t,e,n){this.pos={x:t,y:e,z:n},this.next=null,this.prev=null,this.nextOptimized=null,this.canOptimize=!0}}class z_{constructor(){this.head=null,this.tail=null,this.currentNode=null,this.nodeCount=0}prependNode(t,e,n){const s=new Rl(t,e,n);return this.head?(s.next=this.head,this.head.prev=s,this.head=s):(this.head=s,this.tail=s),this.nodeCount++,s}appendNode(t,e,n){const s=new Rl(t,e,n);return this.tail?(s.prev=this.tail,this.tail.next=s,this.tail=s):(this.head=s,this.tail=s),this.nodeCount++,s}optimize(t){if(!this.head||this.nodeCount<2){this.head&&(this.head.nextOptimized=null,this.currentNode=this.head);return}let e=this.head;for(this.currentNode=this.head;e&&e.next;){let n=e.next,s=e.next.next;for(;s&&n.canOptimize;){if(t&&G_(t,e.pos,s.pos))n=s;else break;s=s.next}e.nextOptimized=n;const r=n.pos.x-e.pos.x,a=n.pos.z-e.pos.z;e.nextOptDist=Math.sqrt(r*r+a*a),e.nextOptDist>.001?(e.nextOptDirX=r/e.nextOptDist,e.nextOptDirZ=a/e.nextOptDist):(e.nextOptDirX=0,e.nextOptDirZ=0),e=n}e&&(e.nextOptimized=null)}getStart(){return this.head}}function G_(i,t,e){const n=i.worldToCell(t.x,t.z),s=i.worldToCell(e.x,e.z);let r=n.x,a=n.y;const o=s.x,l=s.y,h=Math.abs(o-r),d=Math.abs(l-a),u=r<o?1:-1,c=a<l?1:-1;let f=h-d;for(;;){if(!i.isCellPassable(i.getCell(r,a)))return!1;if(r===o&&a===l)break;const g=2*f;g>-d&&(f-=d,r+=u),g<h&&(f+=h,a+=c)}return!0}const ji=[{dx:1,dy:0,cost:Si},{dx:0,dy:1,cost:Si},{dx:-1,dy:0,cost:Si},{dx:0,dy:-1,cost:Si},{dx:1,dy:1,cost:Zi},{dx:-1,dy:1,cost:Zi},{dx:-1,dy:-1,cost:Zi},{dx:1,dy:-1,cost:Zi}],k_=1,H_=2,V_=4;class W_{constructor(){this.reset()}reset(){this.totalCost=1/0,this.costSoFar=0,this.parentX=-1,this.parentY=-1,this.parentDir=-1,this.onOpen=!1,this.onClosed=!1}}class X_{constructor(){this.data=[]}push(t){this.data.push(t),this._bubbleUp(this.data.length-1)}pop(){const t=this.data[0],e=this.data.pop();return this.data.length>0&&(this.data[0]=e,this._sinkDown(0)),t}get size(){return this.data.length}clear(){this.data.length=0}_bubbleUp(t){const e=this.data[t];for(;t>0;){const n=t-1>>1,s=this.data[n];if(e.totalCost>=s.totalCost)break;this.data[n]=e,this.data[t]=s,t=n}}_sinkDown(t){const e=this.data.length,n=this.data[t];for(;;){let s=2*t+1,r=2*t+2,a=t;if(s<e&&this.data[s].totalCost<this.data[a].totalCost&&(a=s),r<e&&this.data[r].totalCost<this.data[a].totalCost&&(a=r),a===t)break;this.data[t]=this.data[a],this.data[a]=n,t=a}}}class Y_{constructor(t){this.grid=t,this.pathQueue=[],this.cellInfoPool=new Map,this.openList=new X_}queueForPath(t){this.pathQueue.includes(t)||this.pathQueue.push(t)}processPathfindQueue(){let t=hl;for(;this.pathQueue.length>0&&t>0;){const e=this.pathQueue.shift(),n=C.units.get(e);!n||!n.ai||!n.ai.waitingForPath||(n.ai.doPathfind(this),t-=500)}}findPath(t,e,n){const s=this.grid;if(!s)return null;const r=s.worldToCell(t.x,t.z),a=s.worldToCell(e.x,e.z),o=s.getZone(r.x,r.y),l=s.getZone(a.x,a.y);return o!==l||o===0?this.findClosestPath(t,e,n,r,a):this.internalFindPath(r,a,t,e)}findClosestPath(t,e,n,s,r){const a=this.grid,o=a.getZone(s.x,s.y);let l=1/0,h=r.x,d=r.y;const u=20;for(let g=-u;g<=u;g++)for(let _=-u;_<=u;_++){const p=r.x+_,m=r.y+g;if(a.getZone(p,m)===o){const v=_*_+g*g;v<l&&(l=v,h=p,d=m)}}if(l===1/0)return null;const c={x:h,y:d},f=a.cellToWorld(h,d);return this.internalFindPath(s,c,t,{x:f.x,y:0,z:f.z})}internalFindPath(t,e,n,s){const r=this.grid;this.cellInfoPool.clear(),this.openList.clear();const a=(d,u)=>{const c=u*r.width+d;let f=this.cellInfoPool.get(c);return f||(f=new W_,this.cellInfoPool.set(c,f)),f},o=a(t.x,t.y);o.costSoFar=0,o.totalCost=Ll(t.x,t.y,e.x,e.y),o.onOpen=!0,this.openList.push({x:t.x,y:t.y,totalCost:o.totalCost});let l=0;const h=hl;for(;this.openList.size>0&&l<h;){const d=this.openList.pop(),u=d.x,c=d.y,f=a(u,c);if(!f.onClosed){if(f.onClosed=!0,f.onOpen=!1,l++,u===e.x&&c===e.y)return this.buildActualPath(a,t,e,n,s);for(let g=0;g<8;g++){const _=u+ji[g].dx,p=c+ji[g].dy;if(_<0||_>=r.width||p<0||p>=r.height)continue;const m=r.getCell(_,p);if(!r.isCellPassable(m))continue;if(g>=4){const w=r.getCell(u+ji[g].dx,c),E=r.getCell(u,c+ji[g].dy);if(!r.isCellPassable(w)||!r.isCellPassable(E))continue}const v=a(_,p);if(v.onClosed)continue;let x=ji[g].cost;if(f.parentDir>=0){const w=Math.abs(g-f.parentDir),E=Math.min(w,8-w);E===1?x+=k_:E===2?x+=H_:E>=3&&(x+=V_)}const M=f.costSoFar+x;(M<v.costSoFar||!v.onOpen)&&(v.costSoFar=M,v.totalCost=M+Ll(_,p,e.x,e.y),v.parentX=u,v.parentY=c,v.parentDir=g,v.onOpen=!0,this.openList.push({x:_,y:p,totalCost:v.totalCost}))}}}return null}buildActualPath(t,e,n,s,r){const a=this.grid,o=new z_;let l=n.x,h=n.y;const d=new Set;for(;!(l===e.x&&h===e.y);){const u=h*a.width+l;if(d.has(u))break;d.add(u);const c=a.cellToWorld(l,h),f=Pl(c.x,c.z);o.prependNode(c.x,f,c.z);const g=t(l,h);if(g.parentX<0)break;l=g.parentX,h=g.parentY}return o.prependNode(s.x,s.y,s.z),o.tail&&r&&(o.tail.pos.x=r.x,o.tail.pos.z=r.z,o.tail.pos.y=Pl(r.x,r.z)),o.optimize(a),o}}function Ll(i,t,e,n){const s=Math.abs(i-e),r=Math.abs(t-n);return Si*(s+r)+(Zi-2*Si)*Math.min(s,r)}function Pl(i,t){try{return Mc(i,t)}catch{return 0}}class q_{constructor(t){this.aiUpdate=t,this.currentState=ce.AI_IDLE,this.goalPosition=null,this.goalObjectId=null}setState(t){this.currentState=t,this.onEnterState(t)}getState(){return this.currentState}clear(){this.currentState=ce.AI_IDLE,this.goalPosition=null,this.goalObjectId=null}onEnterState(t){const e=this.aiUpdate;switch(t){case ce.AI_MOVE_TO:e.requestPath(this.goalPosition);break;case ce.AI_ATTACK_MOVE_TO:e.requestPath(this.goalPosition);break;case ce.AI_IDLE:e.onIdle();break}}update(t){switch(this.aiUpdate,this.currentState){case ce.AI_IDLE:break;case ce.AI_MOVE_TO:this.updateMoveTo(t);break;case ce.AI_ATTACK_MOVE_TO:this.updateMoveTo(t);break;case ce.AI_GUARD:break;case ce.AI_DEAD:break}}updateMoveTo(t){const e=this.aiUpdate;if(e.waitingForPath)return;if(!e.currentPath){this.setState(ce.AI_IDLE);return}if(e.locomotor.followPath(e.currentPath,e.unit,t))if(e.currentPath=null,e.executingWaypointQueue&&e.waypointIndex<e.waypointCount){const s=e.waypointQueue[e.waypointIndex++];this.goalPosition=s,e.requestPath(s)}else e.executingWaypointQueue=!1,this.setState(ce.AI_IDLE)}}const zn=Object.freeze({LOCO_LEGS:0,LOCO_WHEELS:1,LOCO_TREADS:2,LOCO_HOVER:3,LOCO_THRUST:4,LOCO_WINGS:5});class $_{constructor(t){this.unit=t,this.appearance=this.inferAppearance(t),this.maxSpeed=fg,this.turnRate=pg*Math.PI/180,this.acceleration=mg,this.braking=gg,this.currentSpeed=0,this.currentPathNode=null,this.stopped=!0}inferAppearance(t){return t.kindOf?t.kindOf.has("AIRCRAFT")?zn.LOCO_WINGS:t.kindOf.has("VEHICLE")||t.kindOf.has("HUGE_VEHICLE")?zn.LOCO_TREADS:(t.kindOf.has("INFANTRY"),zn.LOCO_LEGS):zn.LOCO_LEGS}stop(){this.currentSpeed=0,this.currentPathNode=null,this.stopped=!0}followPath(t,e,n){if(!t||!t.head)return!0;this.currentPathNode||(this.currentPathNode=t.head,this.stopped=!1,this.currentPathNode.nextOptimized?this.currentPathNode=this.currentPathNode.nextOptimized:this.currentPathNode.next&&(this.currentPathNode=this.currentPathNode.next));const s=this.currentPathNode;if(!s)return!0;const r=e.position,a=s.pos.x-r.x,o=s.pos.z-r.z,l=Math.sqrt(a*a+o*o);if(l<3)return s.nextOptimized?(this.currentPathNode=s.nextOptimized,!1):s.next?(this.currentPathNode=s.next,!1):(this.stop(),!0);const d=Math.atan2(a,o);let u=d-e.rotation;for(;u>Math.PI;)u-=2*Math.PI;for(;u<-Math.PI;)u+=2*Math.PI;const c=this.turnRate*n;Math.abs(u)>c?e.rotation+=Math.sign(u)*c:e.rotation=d;let f=1;const g=Math.abs(u)/Math.PI;this.appearance===zn.LOCO_TREADS||this.appearance===zn.LOCO_WHEELS?f=Math.max(.3,1-g*.7):f=Math.max(.5,1-g*.5);const _=this.currentSpeed*this.currentSpeed/(2*this.braking),m=l<_+5?Math.max(5,this.maxSpeed*(l/(_+5))):this.maxSpeed*f;this.currentSpeed<m?this.currentSpeed=Math.min(m,this.currentSpeed+this.acceleration*n):this.currentSpeed=Math.max(m,this.currentSpeed-this.braking*n);const v=Math.sin(e.rotation)*this.currentSpeed*n,x=Math.cos(e.rotation)*this.currentSpeed*n;r.x+=v,r.z+=x;try{r.y=Mc(r.x,r.z)}catch{}return!1}}let pa=null;function j_(i){pa=i}class K_{constructor(t){this.unit=t,this.stateMachine=new q_(this),this.locomotor=new $_(t),this.currentPath=null,this.waitingForPath=!1,this.requestedDestination=null,this.lastCommandSource=Jn.CMD_FROM_PLAYER,this.waypointQueue=new Array(ul),this.waypointCount=0,this.waypointIndex=0,this.executingWaypointQueue=!1,this.blockedFrames=0,this.isBlocked=!1}aiDoCommand(t){switch(t.cmd){case Oe.AICMD_MOVE_TO_POSITION:this.privateMoveToPosition(t.pos,t.cmdSource);break;case Oe.AICMD_IDLE:this.privateIdle(t.cmdSource);break;case Oe.AICMD_ATTACK_OBJECT:this.privateAttackObject(t.targetId,t.cmdSource);break;case Oe.AICMD_FORCE_ATTACK_OBJECT:this.privateForceAttackObject(t.targetId,t.cmdSource);break;case Oe.AICMD_ATTACKMOVE_TO_POSITION:this.privateAttackMoveToPosition(t.pos,t.cmdSource);break;case Oe.AICMD_GUARD_POSITION:this.privateGuardPosition(t.pos,t.cmdSource);break;case Oe.AICMD_FOLLOW_PATH_APPEND:this.privateFollowPathAppend(t.pos,t.cmdSource);break}}aiMoveToPosition(t,e){const n=new vi(Oe.AICMD_MOVE_TO_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiIdle(t){const e=new vi(Oe.AICMD_IDLE,t||Jn.CMD_FROM_PLAYER);this.aiDoCommand(e)}aiAttackMoveToPosition(t,e){const n=new vi(Oe.AICMD_ATTACKMOVE_TO_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiAttackObject(t,e){const n=new vi(Oe.AICMD_ATTACK_OBJECT,e);n.targetId=t,this.aiDoCommand(n)}aiGuardPosition(t,e){const n=new vi(Oe.AICMD_GUARD_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiFollowPathAppend(t,e){const n=new vi(Oe.AICMD_FOLLOW_PATH_APPEND,e);n.pos={...t},this.aiDoCommand(n)}privateMoveToPosition(t,e){this.unit.isMobile()&&(this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.blockedFrames=0,this.isBlocked=!1,this.lastCommandSource=e,this.executingWaypointQueue=!1,this.waypointCount=0,this.stateMachine.setState(ce.AI_MOVE_TO))}privateIdle(t){this.stateMachine.clear(),this.currentPath=null,this.waitingForPath=!1,this.lastCommandSource=t,this.executingWaypointQueue=!1,this.locomotor.stop()}privateAttackObject(t,e){this.lastCommandSource=e,this.stateMachine.goalObjectId=t,this.stateMachine.setState(ce.AI_ATTACK_OBJECT)}privateForceAttackObject(t,e){this.lastCommandSource=e,this.stateMachine.goalObjectId=t,this.stateMachine.setState(ce.AI_FORCE_ATTACK_OBJECT)}privateAttackMoveToPosition(t,e){this.unit.isMobile()&&(this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.blockedFrames=0,this.isBlocked=!1,this.lastCommandSource=e,this.executingWaypointQueue=!1,this.waypointCount=0,this.stateMachine.setState(ce.AI_ATTACK_MOVE_TO))}privateGuardPosition(t,e){this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.lastCommandSource=e,this.stateMachine.setState(ce.AI_GUARD)}privateFollowPathAppend(t,e){this.unit.isMobile()&&(this.queueWaypoint(t),this.lastCommandSource=e)}queueWaypoint(t){return this.waypointCount<ul?(this.waypointQueue[this.waypointCount++]={...t},!0):!1}clearWaypointQueue(){this.waypointCount=0,this.waypointIndex=0,this.executingWaypointQueue=!1}executeWaypointQueue(){if(this.waypointCount>0){this.waypointIndex=0,this.executingWaypointQueue=!0;const t=this.waypointQueue[this.waypointIndex++];this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.stateMachine.setState(ce.AI_MOVE_TO)}}requestPath(t){t&&(this.requestedDestination={...t},this.waitingForPath=!0,this.currentPath=null,pa&&pa.queueForPath(this.unit.id))}doPathfind(t){if(!this.requestedDestination){this.waitingForPath=!1;return}const e=this.unit.position,n=this.requestedDestination,s=t.findPath(e,n,this.unit);this.currentPath=s,this.waitingForPath=!1,this.requestedDestination=null}onIdle(){this.locomotor.stop()}update(t){this.stateMachine.update(t),this.unit.syncMeshFromPosition()}}let nr=!1;function Z_(){if(nr)return;C.messageStream=new Pg,Qg();for(const t of C.units.values())t.isMobile()&&(t.ai=new K_(t));const i=C.currentMapData;if(i&&i.heightMap){const t=new B_;t.buildFromHeightmap(i.heightMap,i.waterAreas||[],i.objects||[]),C.pathfinder=new Y_(t),j_(C.pathfinder),console.log(`Pathfinding grid: ${t.width}x${t.height} cells, ${t.nextZoneId-1} zones`)}nr=!0,console.log(`Game systems initialized: ${C.units.size} units (${J_()} mobile)`)}function J_(){let i=0;for(const t of C.units.values())t.isMobile()&&i++;return i}function Q_(i){if(nr){i_(),I_(),C.pathfinder&&C.pathfinder.processPathfindQueue();for(const t of C.units.values())t.ai&&t.ai.update(i);Jg()}}function t0(){nr=!1,C.messageStream=null,C.pathfinder=null,C.selectedUnits.length=0,C.hotkeySquads.fill(null)}let ma=0;function e0(){const i=document.getElementById("canvas");C.renderer=new Qm({canvas:i,antialias:!0}),C.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.renderer.setSize(window.innerWidth,window.innerHeight),C.renderer.setClearColor(7048366),C.renderer.shadowMap.enabled=!0,C.renderer.shadowMap.type=kc,C.renderer.toneMapping=fn,C.renderer.outputColorSpace=gn,C.scene=new tg,C.scene.fog=new Ea(7048366,12e-5),C.camera=new ze(50,window.innerWidth/window.innerHeight,1,5e4),p_(C.renderer.domElement),window.addEventListener("resize",()=>{C.camera.aspect=window.innerWidth/window.innerHeight,C.camera.updateProjectionMatrix(),C.renderer.setSize(window.innerWidth,window.innerHeight)}),ma=performance.now(),Lc()}function Lc(){requestAnimationFrame(Lc);const i=performance.now(),t=Math.min((i-ma)/1e3,.1);ma=i,m_(),Q_(t),C.renderer.render(C.scene,C.camera)}function ns(i){const t=i instanceof Uint8Array?i:new Uint8Array(i),e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=t[0],s=t[1],r=t[2],a=e.getInt16(12,!0),o=e.getInt16(14,!0),l=t[16],h=t[17];if(s!==0)throw new Error("Indexed TGA not supported");const d=Math.floor((l+7)/8);if(d<3||d>4)throw new Error(`Unsupported pixel depth: ${l}`);const u=!!(r&8);if((r&7)!==2)throw new Error(`Unsupported image type: ${r}`);const c=!!(h&32);let f=18+n;const g=new Uint8Array(a*o*4);if(u){let _=0;for(;_<a*o;){const p=t[f++],m=(p&127)+1;if(p&128){const v=t[f++],x=t[f++],M=t[f++],w=d===4?t[f++]:255;for(let E=0;E<m;E++){const A=_++*4;g[A]=M,g[A+1]=x,g[A+2]=v,g[A+3]=w}}else for(let v=0;v<m;v++){const x=_++*4;g[x]=t[f+2],g[x+1]=t[f+1],g[x+2]=t[f],g[x+3]=d===4?t[f+3]:255,f+=d}}}else for(let _=0;_<a*o;_++){const p=_*4;g[p]=t[f+2],g[p+1]=t[f+1],g[p+2]=t[f],g[p+3]=d===4?t[f+3]:255,f+=d}if(c){const _=a*4,p=new Uint8Array(_);for(let m=0;m<Math.floor(o/2);m++){const v=m*_,x=(o-1-m)*_;p.set(g.subarray(v,v+_)),g.set(g.subarray(x,x+_),v),g.set(p,x)}}return{width:a,height:o,pixels:g}}function n0(i){const t=i.blendTileData;if(!t||jt.size===0)return null;const e=[];let n=0,s=0,r=0;function a(g){const _=Eg(g.name);if(!_){console.warn(`Texture not found for "${g.name}" (tried INI mapping, exact, and fuzzy)`),r++;return}const p=_c(_);if(!p){r++;return}let m;try{m=ns(p)}catch(w){console.warn(`Failed to parse TGA ${_}:`,w);return}const v=Math.floor(m.width/ue),x=Math.floor(m.height/ue),M=Math.min(v*x,g.numTiles);for(let w=0;w<x&&w*v<M;w++)for(let E=0;E<v&&w*v+E<M;E++){const A=E+v*w,L=g.firstTile+A,y=new Uint8Array(ue*ue*4);for(let S=0;S<ue;S++){const z=((w*ue+S)*m.width+E*ue)*4,P=S*ue*4;y.set(m.pixels.subarray(z,z+ue*4),P)}e[L]=y,L>n&&(n=L)}}for(const g of t.textureClasses)a(g),s++;for(const g of t.edgeTextureClasses||[])a(g),s++;if(console.log(`Texture classes: ${s-r} loaded, ${r} missing`),n===0)return null;const o=n+1,l=Math.ceil(Math.sqrt(o)),h=l*ue,u=Math.ceil(o/l)*ue,c=new Uint8Array(h*u*4);for(let g=0;g<c.length;g+=4)c[g]=128,c[g+1]=128,c[g+2]=96,c[g+3]=255;const f=[];for(let g=0;g<=n;g++){const _=g%l,p=Math.floor(g/l),m=_*ue,v=p*ue;if(f[g]={x:m,y:v},e[g])for(let x=0;x<ue;x++){const M=x*ue*4,w=((v+x)*h+m)*4;c.set(e[g].subarray(M,M+ue*4),w)}}return console.log(`Atlas built: ${h}x${u}, ${o} tiles, ${l} per row`),{atlasPixels:c,atlasW:h,atlasH:u,tilePositions:f}}function jr(i,t,e){const n=i>>2,s=i&3,r=s&1,a=s>>1&1,o=e.tilePositions[n];if(!o)return[0,0];const l=ue/2,h=o.x+(r?l:0),d=o.y+(a?l:0),u=.5,c=(h+u)/e.atlasW,f=(h+l-u)/e.atlasW,g=(d+u)/e.atlasH,_=(d+l-u)/e.atlasH;switch(t){case 0:return[c,g];case 1:return[f,g];case 2:return[f,_];case 3:return[c,_]}}function i0(i,t){const e=Ra(t);return new mn({fog:!0,lights:!0,wireframe:!1,side:xe,uniforms:ec.merge([at.fog,at.lights,{terrainAtlas:{value:i},ambientColor:{value:e.ambientColor},numLights:{value:e.numLights},diffuseColor0:{value:e.diffuseColors[0]},diffuseColor1:{value:e.diffuseColors[1]},diffuseColor2:{value:e.diffuseColors[2]},lightDir0:{value:e.lightDirs[0]},lightDir1:{value:e.lightDirs[1]},lightDir2:{value:e.lightDirs[2]}}]),vertexShader:`
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
    `})}function ir(i){const t=i instanceof Uint8Array?i:new Uint8Array(i),e=new DataView(t.buffer,t.byteOffset,t.byteLength);if(e.getUint32(0,!0)!==542327876)throw new Error("Not a DDS file");const s=e.getUint32(12,!0),r=e.getUint32(16,!0),a=e.getUint32(80,!0),o=String.fromCharCode(t[84],t[85],t[86],t[87]),l=4,h=64,d=1,c=t.subarray(128);if(a&l){if(o==="DXT1")return r0(c,r,s);if(o==="DXT3")return a0(c,r,s);if(o==="DXT5")return o0(c,r,s);throw new Error("Unsupported DDS FourCC: "+o)}if(a&h){const f=e.getUint32(88,!0),g=e.getUint32(92,!0),_=e.getUint32(96,!0),p=e.getUint32(100,!0),m=a&d?e.getUint32(104,!0):0;return s0(c,r,s,f,g,_,p,m)}throw new Error("Unsupported DDS pixel format")}function s0(i,t,e,n,s,r,a,o){const l=n/8,h=new Uint8Array(t*e*4);new DataView(i.buffer,i.byteOffset,i.byteLength);function d(_){if(!_)return{shift:0,bits:0};let p=0,m=_;for(;m&&!(m&1);)p++,m>>=1;let v=0;for(;m&1;)v++,m>>=1;return{shift:p,bits:v}}const u=d(s),c=d(r),f=d(a),g=d(o);for(let _=0;_<t*e;_++){let p=0;const m=_*l;for(let A=0;A<l;A++)p|=i[m+A]<<A*8;const v=u.bits?(p>>u.shift&(1<<u.bits)-1)*255/((1<<u.bits)-1):0,x=c.bits?(p>>c.shift&(1<<c.bits)-1)*255/((1<<c.bits)-1):0,M=f.bits?(p>>f.shift&(1<<f.bits)-1)*255/((1<<f.bits)-1):0,w=g.bits?(p>>g.shift&(1<<g.bits)-1)*255/((1<<g.bits)-1):255,E=_*4;h[E]=v,h[E+1]=x,h[E+2]=M,h[E+3]=w}return{width:t,height:e,pixels:h}}function Ui(i){return[(i>>11&31)*255/31|0,(i>>5&63)*255/63|0,(i&31)*255/31|0]}function r0(i,t,e){const n=new Uint8Array(t*e*4),s=t+3>>2,r=e+3>>2;let a=0;for(let o=0;o<r;o++)for(let l=0;l<s;l++){const h=i[a]|i[a+1]<<8,d=i[a+2]|i[a+3]<<8,u=Ui(h),c=Ui(d),f=[u,c];h>d?(f[2]=[(2*u[0]+c[0])/3|0,(2*u[1]+c[1])/3|0,(2*u[2]+c[2])/3|0],f[3]=[(u[0]+2*c[0])/3|0,(u[1]+2*c[1])/3|0,(u[2]+2*c[2])/3|0]):(f[2]=[(u[0]+c[0])/2|0,(u[1]+c[1])/2|0,(u[2]+c[2])/2|0],f[3]=[0,0,0]);const g=i[a+4]|i[a+5]<<8|i[a+6]<<16|i[a+7]<<24;for(let _=0;_<4;_++)for(let p=0;p<4;p++){const m=l*4+p,v=o*4+_;if(m>=t||v>=e)continue;const x=(v*t+m)*4,M=g>>(_*4+p)*2&3;n[x]=f[M][0],n[x+1]=f[M][1],n[x+2]=f[M][2],n[x+3]=h<=d&&M===3?0:255}a+=8}return{width:t,height:e,pixels:n}}function a0(i,t,e){const n=new Uint8Array(t*e*4),s=t+3>>2,r=e+3>>2;let a=0;for(let o=0;o<r;o++)for(let l=0;l<s;l++){const h=[];for(let p=0;p<8;p++)h.push(i[a+p]);a+=8;const d=i[a]|i[a+1]<<8,u=i[a+2]|i[a+3]<<8,c=Ui(d),f=Ui(u),g=[c,f,[(2*c[0]+f[0])/3|0,(2*c[1]+f[1])/3|0,(2*c[2]+f[2])/3|0],[(c[0]+2*f[0])/3|0,(c[1]+2*f[1])/3|0,(c[2]+2*f[2])/3|0]],_=i[a+4]|i[a+5]<<8|i[a+6]<<16|i[a+7]<<24;for(let p=0;p<4;p++)for(let m=0;m<4;m++){const v=l*4+m,x=o*4+p;if(v>=t||x>=e)continue;const M=(x*t+v)*4,w=_>>(p*4+m)*2&3;n[M]=g[w][0],n[M+1]=g[w][1],n[M+2]=g[w][2];const E=p*4+m,A=h[E>>1];n[M+3]=(E&1?A>>4:A&15)*17}a+=8}return{width:t,height:e,pixels:n}}function o0(i,t,e){const n=new Uint8Array(t*e*4),s=t+3>>2,r=e+3>>2;let a=0;for(let o=0;o<r;o++)for(let l=0;l<s;l++){const h=i[a],d=i[a+1],u=[h,d];if(h>d)for(let x=1;x<=6;x++)u.push(((6-x)*h+x*d+3)/7|0);else{for(let x=1;x<=4;x++)u.push(((4-x)*h+x*d+2)/5|0);u.push(0,255)}let c=0n;for(let x=0;x<6;x++)c|=BigInt(i[a+2+x])<<BigInt(x*8);a+=8;const f=i[a]|i[a+1]<<8,g=i[a+2]|i[a+3]<<8,_=Ui(f),p=Ui(g),m=[_,p,[(2*_[0]+p[0])/3|0,(2*_[1]+p[1])/3|0,(2*_[2]+p[2])/3|0],[(_[0]+2*p[0])/3|0,(_[1]+2*p[1])/3|0,(_[2]+2*p[2])/3|0]],v=i[a+4]|i[a+5]<<8|i[a+6]<<16|i[a+7]<<24;for(let x=0;x<4;x++)for(let M=0;M<4;M++){const w=l*4+M,E=o*4+x;if(w>=t||E>=e)continue;const A=(E*t+w)*4,L=v>>(x*4+M)*2&3;n[A]=m[L][0],n[A+1]=m[L][1],n[A+2]=m[L][2];const y=x*4+M;n[A+3]=u[Number(c>>BigInt(y*3)&7n)]}a+=8}return{width:t,height:e,pixels:n}}function l0(i){const t=i.pt1,e=i.pt2.x-i.pt1.x,n=i.pt2.y-i.pt1.y,s=er(e,n);let r,a,o,l;s<.01?(r=1,a=0,o=0,l=1):(r=e/s,a=n/s,o=-a,l=r);const h=i.scale,d=i.widthInTexture;let u,c,f,g,_;switch(i.type){case Qe:{u=0,c=85/512,f=h,g=h;const p=i.halfWidth;_={bl:{x:i.pt1.x-o*p,y:i.pt1.y-l*p},tl:{x:i.pt1.x+o*p,y:i.pt1.y+l*p},br:{x:i.pt2.x-o*p,y:i.pt2.y-l*p},tr:{x:i.pt2.x+o*p,y:i.pt2.y+l*p}};break}case ba:case js:{u=425/512,c=i.type===js?425/512:255/512,f=h,g=h;const p=h*dg/2,m=d*h/2,v=m+p,x=t.x-r*m,M=t.y-a*m;_={bl:{x:x-o*p,y:M-l*p},br:{x:x+r*v-o*p,y:M+a*v-l*p},tr:{x:x+r*v+o*p,y:M+a*v+l*p},tl:{x:x+o*p,y:M+l*p}};break}case Aa:{u=4/512,c=i.curveRadius===ra?425/512:255/512,f=h,g=h;const p=d*h/2,m=r*h,v=a*h,x=o*p,M=l*p;if(i.curveRadius===ra){let w=t.x-x,E=t.y-M,A=w+m*.5,L=E+v*.5,y=A+2*x,S=L+2*M,I=w+2*x,z=E+2*M;A+=m*.1+x*.2,L+=v*.1+M*.2,w-=x*.1+m*.02,E-=M*.1+v*.02,I-=m*.02,z-=v*.02,y-=m*.4,S-=v*.4,y+=x*.2,S+=M*.2,_={bl:{x:w,y:E},br:{x:A,y:L},tr:{x:y,y:S},tl:{x:I,y:z}}}else{let w=t.x-x,E=t.y-M,A=w+m,L=E+v,y=A+2*x,S=L+2*M,I=w+2*x,z=E+2*M;A+=m*.1+x*.4,L+=v*.1+M*.4,w-=x*.2+m*.02,E-=M*.2+v*.02,I-=m*.02,z-=v*.02,y-=m*.4,S-=v*.4,y+=x*.4,S+=M*.4,_={bl:{x:w,y:E},br:{x:A,y:L},tr:{x:y,y:S},tl:{x:I,y:z}}}break}case gc:{u=255/512,c=226/512,f=h,g=h;const p=h,m=r*p*1.59,v=a*p*1.59,x=o*p,M=l*p,w=t.x+x*.29-m*.5,E=t.y+M*.29-v*.5;_={tl:{x:w,y:E},bl:{x:w-x*1.08,y:E-M*1.08},br:{x:w-x*1.08+m,y:E-M*1.08+v},tr:{x:w+m,y:E+v}};break}case wa:case Ks:{u=202/512,c=364/512,f=h,g=h;const p=h,m=r*p,v=a*p;let x=o*p*1.35,M=l*p*1.35;const w=i.type===Ks,E=w?.2:.8,A=t.x-x*E-m*d/2,L=t.y-M*E-v*d/2,y=m*d/2+m*1.2,S=v*d/2+v*1.2;_={bl:{x:A,y:L},br:{x:A+y,y:L+S},tr:{x:A+y+x,y:L+S+M},tl:{x:A+x,y:L+M}},w&&(x=-x,M=-M);break}default:return null}return{corners:_,uOff:u,vOff:c,uScale:f,vScale:g,loc:t,rvx:r,rvy:a,rnx:o,rny:l}}function c0(i,t){const e=l0(i);if(!e)return null;const{corners:n,uOff:s,vOff:r,uScale:a,vScale:o,loc:l,rvx:h,rvy:d,rnx:u,rny:c}=e,f=er((n.br.x-n.bl.x+n.tr.x-n.tl.x)/2,(n.br.y-n.bl.y+n.tr.y-n.tl.y)/2),g=er((n.tl.x-n.bl.x+n.tr.x-n.br.x)/2,(n.tl.y-n.bl.y+n.tr.y-n.br.y)/2),_=Math.max(2,Math.ceil(f/$t)+1),p=Math.max(2,Math.ceil(g/$t)+1),m=[],v=[],x=[];for(let M=0;M<_;M++){const w=M/(_-1);for(let E=0;E<p;E++){const A=E/(p-1),L=n.bl.x*(1-w)*(1-A)+n.br.x*w*(1-A)+n.tl.x*(1-w)*A+n.tr.x*w*A,y=n.bl.y*(1-w)*(1-A)+n.br.y*w*(1-A)+n.tl.y*(1-w)*A+n.tr.y*w*A,S=Ca(L,y)+hg;m.push(L,S,(t-1)*$t-y);const I=L-l.x,z=y-l.y;v.push(s+nn(h,d,I,z)/(a*4),r-nn(u,c,I,z)/(o*4))}}for(let M=0;M<_-1;M++)for(let w=0;w<p-1;w++){const E=M*p+w;x.push(E,E+1,E+p,E+1,E+p+1,E+p)}return{positions:m,uvs:v,indices:x}}function Pc(i,t){if(!i)return null;const e=t&&t.flipDDS,n=i.replace(/\.[^.]+$/,"").toLowerCase(),s=n.includes("/")?n.split("/").pop():n,r=[i,n+".dds",n+".tga","art/textures/"+i,"art/textures/"+n+".dds","art/textures/"+n+".tga","art/textures/"+s+".dds","art/textures/"+s+".tga"];for(const a of r){const o=Zn(a);if(o)try{const l=new Uint8Array(o.buffer,o.offset,o.size),h=o.size>4&&l[0]===68&&l[1]===68&&l[2]===83&&l[3]===32,d=h?ir(l):ns(l),u=new $s(d.pixels,d.width,d.height,Re);return e&&h&&(u.flipY=!0),u.wrapS=un,u.wrapT=un,u.magFilter=Ee,u.minFilter=Ye,u.generateMipmaps=!0,u.needsUpdate=!0,u}catch(l){console.warn("Failed to load texture:",a,l)}}if(s)for(const[a]of jt){const o=a.replace(/\.[^.]+$/,"");if((o.includes("/")?o.split("/").pop():o)===s){const h=jt.get(a);try{const d=new Uint8Array(h.buffer,h.offset,h.size),u=h.size>4&&d[0]===68&&d[1]===68&&d[2]===83&&d[3]===32,c=u?ir(d):ns(d),f=new $s(c.pixels,c.width,c.height,Re);return e&&u&&(f.flipY=!0),f.wrapS=un,f.wrapT=un,f.magFilter=Ee,f.minFilter=Ye,f.generateMipmaps=!0,f.needsUpdate=!0,f}catch{}}}return null}function h0(i,t){if(!i)return null;const e=t&&t.flipDDS,n=i.replace(/\.[^.]+$/,"").toLowerCase(),s=n.includes("/")?n.split("/").pop():n,r=[i,n+".dds",n+".tga","art/textures/"+i,"art/textures/"+n+".dds","art/textures/"+n+".tga","art/textures/"+s+".dds","art/textures/"+s+".tga"];function a(o,l){const h=o.pixels;for(let u=0;u<h.length;u+=4){const c=h[u]*.299+h[u+1]*.587+h[u+2]*.114;h[u+3]=Math.min(255,c*2|0)}const d=new $s(h,o.width,o.height,Re);return e&&l&&(d.flipY=!0),d.wrapS=un,d.wrapT=un,d.magFilter=Ee,d.minFilter=Ye,d.generateMipmaps=!0,d.needsUpdate=!0,d}for(const o of r){const l=Zn(o);if(l)try{const h=new Uint8Array(l.buffer,l.offset,l.size),d=l.size>4&&h[0]===68&&h[1]===68&&h[2]===83&&h[3]===32;return a(d?ir(h):ns(h),d)}catch(h){console.warn("Failed to load luminance-alpha texture:",o,h)}}if(s)for(const[o]of jt){const l=o.replace(/\.[^.]+$/,"");if((l.includes("/")?l.split("/").pop():l)===s){const d=jt.get(o);try{const u=new Uint8Array(d.buffer,d.offset,d.size),c=d.size>4&&u[0]===68&&u[1]===68&&u[2]===83&&u[3]===32;return a(c?ir(u):ns(u),c)}catch{}}}return null}const u0=[Qe,Aa,ba,js,gc,wa,Ks];function d0(i,t,e){if(!i||i.length===0)return null;const n=t-2*e,s=new Map;for(const h of i){const d=h.typeName+"|"+h.type;s.has(d)||s.set(d,{typeName:h.typeName,segType:h.type,segs:[]}),s.get(d).segs.push(h)}const r=new Map;function a(h){if(r.has(h))return r.get(h);const d=os.get(h),u=d&&d.texture?Pc(d.texture):null;return r.set(h,u),u}const o=new en;let l=10;for(const h of u0){for(const[,d]of s){if(d.segType!==h)continue;const u=[],c=[],f=[];let g=0;for(const x of d.segs){const M=c0(x,n);if(M){u.push(...M.positions),c.push(...M.uvs);for(const w of M.indices)f.push(w+g);g+=M.positions.length/3}}if(u.length===0)continue;const _=new je;_.setAttribute("position",new ve(u,3)),_.setAttribute("uv",new ve(c,2)),_.setIndex(f),_.computeVertexNormals();const p=a(d.typeName),m=new Cn({color:p?16777215:6710886,map:p||null,transparent:!0,alphaTest:p?.1:0,depthWrite:!1,side:xe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),v=new Te(_,m);v.receiveShadow=!0,v.castShadow=!1,v.renderOrder=l,o.add(v)}l++}return o.children.length>0?o:null}const f0=0,p0=31,m0=2,g0=3,_0=32,x0=48,v0=49,M0=50,S0=56,y0=41,E0=59,T0=72,Dl=74,A0=256,b0=257,w0=258,C0=1792,R0=1793,L0=1794,P0=1796,D0=14,I0=8960,U0=8961,N0=8962,O0=8963,F0=1,B0=4080,z0=4096,G0=16777216,k0=16711680,H0=131072,V0=2;function Il(i){const t=new DataView(i),e=[];let n=null,s=null;function r(d,u,c){let f=d;for(;f+8<=u;){const g=t.getUint32(f,!0),p=t.getUint32(f+4,!0)&2147483647,m=f+8,v=Math.min(m+p,u);f=v,c(g,m,v,p)}}function a(d,u){let c="";for(let f=0;f<u;f++){const g=t.getUint8(d+f);if(g===0)break;c+=String.fromCharCode(g)}return c}function o(d,u){const c={name:"",attrs:0,vertices:null,normals:null,triangles:null,uvs:null,vertexColors:null,textureNames:[],numVerts:0,numTris:0,boneLinks:null,shaders:null};function f(p,m){r(p,m,(v,x,M,w)=>{v===v0&&r(x,M,(E,A,L,y)=>{E===M0&&c.textureNames.push(a(A,y))})})}function g(p,m){r(p,m,(v,x,M,w)=>{if(v===Dl&&!c.uvs){const E=w/8;c.numVerts&&E!==c.numVerts&&console.warn(`W3D "${c.name}": UV count (${E}) != vertex count (${c.numVerts})`),c.uvs=new Float32Array(E*2);for(let A=0;A<E;A++)c.uvs[A*2]=t.getFloat32(x+A*8,!0),c.uvs[A*2+1]=t.getFloat32(x+A*8+4,!0)}})}function _(p,m){r(p,m,(v,x,M,w)=>{if(v===T0)g(x,M);else if(v===Dl&&!c.uvs){const E=w/8;c.numVerts&&E!==c.numVerts&&console.warn(`W3D "${c.name}": UV count (${E}) != vertex count (${c.numVerts})`),c.uvs=new Float32Array(E*2);for(let A=0;A<E;A++)c.uvs[A*2]=t.getFloat32(x+A*8,!0),c.uvs[A*2+1]=t.getFloat32(x+A*8+4,!0)}else if(v===E0&&!c.vertexColors){const E=Math.min(w/4,c.numVerts||w/4);c.vertexColors=new Float32Array(E*4);for(let A=0;A<E;A++)c.vertexColors[A*4]=t.getUint8(x+A*4)/255,c.vertexColors[A*4+1]=t.getUint8(x+A*4+1)/255,c.vertexColors[A*4+2]=t.getUint8(x+A*4+2)/255,c.vertexColors[A*4+3]=t.getUint8(x+A*4+3)/255}})}return r(d,u,(p,m,v,x)=>{switch(p){case p0:{c.attrs=t.getUint32(m+4,!0),c.name=a(m+8,16),c.numTris=t.getUint32(m+40,!0),c.numVerts=t.getUint32(m+44,!0);break}case m0:{const M=Math.min(x/12,c.numVerts||x/12);c.vertices=new Float32Array(M*3);for(let w=0;w<M;w++)c.vertices[w*3]=t.getFloat32(m+w*12,!0),c.vertices[w*3+1]=t.getFloat32(m+w*12+4,!0),c.vertices[w*3+2]=t.getFloat32(m+w*12+8,!0);break}case g0:{const M=Math.min(x/12,c.numVerts||x/12);c.normals=new Float32Array(M*3);for(let w=0;w<M;w++)c.normals[w*3]=t.getFloat32(m+w*12,!0),c.normals[w*3+1]=t.getFloat32(m+w*12+4,!0),c.normals[w*3+2]=t.getFloat32(m+w*12+8,!0);break}case _0:{const M=Math.min(x/32,c.numTris||x/32);c.triangles=new Uint32Array(M*3);for(let w=0;w<M;w++)c.triangles[w*3]=t.getUint32(m+w*32,!0),c.triangles[w*3+1]=t.getUint32(m+w*32+4,!0),c.triangles[w*3+2]=t.getUint32(m+w*32+8,!0);break}case D0:{const M=Math.min(x/8,c.numVerts||x/8);c.boneLinks=new Uint16Array(M);for(let w=0;w<M;w++)c.boneLinks[w]=t.getUint16(m+w*8,!0);break}case y0:{const M=Math.floor(x/16);c.shaders=[];for(let w=0;w<M;w++){const E=m+w*16;c.shaders.push({depthMask:t.getUint8(E+1),destBlend:t.getUint8(E+3),srcBlend:t.getUint8(E+7),alphaTest:t.getUint8(E+12)})}break}case x0:f(m,v);break;case S0:case I0:case U0:case N0:case O0:_(m,v);break}}),c}function l(d,u){const c={name:"",pivots:[]};return r(d,u,(f,g,_,p)=>{if(f===b0)c.name=a(g+4,16),c.numPivots=t.getUint32(g+20,!0);else if(f===w0){const m=Math.floor(p/60);for(let v=0;v<m;v++){const x=g+v*60;c.pivots.push({name:a(x,16),parentIdx:t.getUint32(x+16,!0),translation:[t.getFloat32(x+20,!0),t.getFloat32(x+24,!0),t.getFloat32(x+28,!0)],rotation:[t.getFloat32(x+44,!0),t.getFloat32(x+48,!0),t.getFloat32(x+52,!0),t.getFloat32(x+56,!0)]})}}}),c}function h(d,u){const c={name:"",hierarchy:"",lods:[]};return r(d,u,(f,g,_,p)=>{if(f===R0)c.name=a(g+8,16),c.hierarchy=a(g+24,16);else if(f===L0){const m=[];r(g,_,(v,x,M,w)=>{v===P0&&m.push({boneIdx:t.getUint32(x,!0),name:a(x+4,w-4)})}),c.lods.push(m)}}),c}return r(0,i.byteLength,(d,u,c)=>{d===f0?e.push(o(u,c)):d===A0?n=l(u,c):d===C0&&(s=h(u,c))}),{meshes:e,hierarchy:n,hlod:s}}const Hn=new Map,jn=new Map;function W0(i){if(!i.vertices||!i.triangles)return null;const t=new je;t.setAttribute("position",new ve(i.vertices,3)),i.normals&&t.setAttribute("normal",new ve(i.normals,3)),i.uvs&&t.setAttribute("uv",new ve(i.uvs,2));const e=!!i.vertexColors;if(e){const h=i.vertexColors,d=new Float32Array(h.length/4*3);for(let u=0;u<h.length/4;u++)d[u*3]=h[u*4],d[u*3+1]=h[u*4+1],d[u*3+2]=h[u*4+2];t.setAttribute("color",new ve(d,3))}t.setIndex(new re(i.triangles,1)),i.normals||t.computeVertexNormals();const n=!!(i.attrs&G0),s=i.name.toLowerCase(),r=s.includes("light")||s.includes("glow")||s.includes("muzzle")||s.includes("fxfire")||s.includes("flame")||s.includes("beacon");let a;const o=i.textureNames[0];if(o){const h=r?Y0(o):X0(o);if(h)if(r)a=new Yn({map:h,transparent:!0,depthWrite:!1,blending:ks,side:xe,vertexColors:e});else if(n)a=new Yn({map:h,transparent:!0,depthWrite:!1,vertexColors:e});else{const d=i.shaders&&i.shaders[0],u=d&&d.alphaTest===1,c=d&&d.srcBlend===2&&d.destBlend===5,f=u||c;a=new Cn({map:h,transparent:f,alphaTest:u?.376:0,depthWrite:d?d.depthMask!==0:!0,side:f?xe:pn,vertexColors:e})}else r&&console.warn("Missing light texture:",o,"for mesh:",i.name)}a||(r?a=new Yn({color:16777130,transparent:!0,opacity:.6,depthWrite:!1,blending:ks,vertexColors:e}):a=n?new Yn({color:e?16777215:16777164,vertexColors:e}):new Cn({color:e?16777215:13421772,vertexColors:e}));const l=new Te(t,a);return l.userData.isPrelitUnlit=n,l}function X0(i){const t=i.toLowerCase().replace(/\.[^.]+$/,"");if(jn.has(t))return jn.get(t);const e=Pc(i,{flipDDS:!0});return jn.set(t,e),e}function Y0(i){const t="lum_"+i.toLowerCase().replace(/\.[^.]+$/,"");if(jn.has(t))return jn.get(t);const e=h0(i,{flipDDS:!0});return jn.set(t,e),e}function q0(i){const t=i.toLowerCase();if(Hn.has(t))return Hn.get(t);const e=Zn(i);if(!e)return Hn.set(t,null),null;try{const n=Il(e.buffer.slice(e.offset,e.offset+e.size));if(n.meshes.length===0)return Hn.set(t,null),null;if(!n.hierarchy&&n.hlod&&n.hlod.hierarchy){const u=n.hlod.hierarchy.toLowerCase(),c=Le.get(u);if(c){const f=Zn(c);if(f)try{const g=Il(f.buffer.slice(f.offset,f.offset+f.size));g.hierarchy&&(n.hierarchy=g.hierarchy)}catch{}}}const s=new Map;if(n.hlod&&n.hlod.lods.length>0){const u=n.hlod.lods[n.hlod.lods.length-1];for(const c of u){const f=c.name.split("."),g=f.length>1?f[1].toLowerCase():f[0].toLowerCase();s.set(g,c.boneIdx)}}const r=[],a=new en;if(a.rotation.x=-Math.PI/2,n.hierarchy&&n.hierarchy.pivots.length>0){for(let u=0;u<n.hierarchy.pivots.length;u++){const c=n.hierarchy.pivots[u],f=new de;if(f.name=c.name,u>0){f.position.set(c.translation[0],c.translation[1],c.translation[2]);const g=c.rotation;(g[0]!==0||g[1]!==0||g[2]!==0||g[3]!==1)&&f.quaternion.set(g[0],g[1],g[2],g[3])}r.push(f)}for(let u=0;u<n.hierarchy.pivots.length;u++){const c=n.hierarchy.pivots[u].parentIdx;c===4294967295||c>=r.length?a.add(r[u]):r[c].add(r[u])}}const o=[];if(n.hierarchy)for(let u=0;u<n.hierarchy.pivots.length;u++){const c=new te;if(u===0)c.identity();else{const f=n.hierarchy.pivots[u],g=new te;g.compose(new O(f.translation[0],f.translation[1],f.translation[2]),new Oi(f.rotation[0],f.rotation[1],f.rotation[2],f.rotation[3]),new O(1,1,1));const _=f.parentIdx;_!==4294967295&&_<o.length?c.multiplyMatrices(o[_],g):c.copy(g)}o.push(c)}let l=0;for(const u of n.meshes){const c=u.name.toLowerCase();if(c.includes("shadow")||c.includes("collision")||u.attrs&z0||u.attrs&(F0|B0))continue;const f=u.boneLinks&&u.boneLinks.length>0&&((u.attrs&k0)===H0||u.attrs&V0);if(f&&o.length>0){const p=u.vertices,m=u.normals,v=u.boneLinks,x=new O,M=new O,w=new It;for(let E=0;E<v.length&&E*3+2<p.length;E++){const A=v[E];A<o.length&&(x.set(p[E*3],p[E*3+1],p[E*3+2]),x.applyMatrix4(o[A]),p[E*3]=x.x,p[E*3+1]=x.y,p[E*3+2]=x.z,m&&(w.getNormalMatrix(o[A]),M.set(m[E*3],m[E*3+1],m[E*3+2]),M.applyMatrix3(w).normalize(),m[E*3]=M.x,m[E*3+1]=M.y,m[E*3+2]=M.z))}}const g=c.includes("light")||c.includes("glow")||c.includes("muzzle")||c.includes("fxfire")||c.includes("flame")||c.includes("beacon"),_=W0(u);if(_){if(_.castShadow=!g&&!_.userData.isPrelitUnlit,_.receiveShadow=!g,_.userData.isLightMesh=g,g&&(_.renderOrder=100),f)a.add(_);else{const p=s.get(c);p!==void 0&&p<r.length?r[p].add(_):a.add(_)}l++}}const h=new en;h.add(a);const d=l>0?h:null;return Hn.set(t,d),d}catch(n){return console.warn("Failed to parse W3D:",i,n),Hn.set(t,null),null}}let Dc=1;class Ul{constructor(t,e,n){this.id=Dc++,this.name=e,this.kindOf=n||new Set,this.mesh=t,this.position={x:t.position.x,y:t.position.y,z:t.position.z},this.rotation=t.rotation.y||0,this.selected=!1,this.selectionIndicator=null,this.ai=null,t.userData.unitId=this.id,t.userData.unit=this}isSelectable(){return this.kindOf.has("UNSELECTABLE")?!1:(!this.kindOf.has("SELECTABLE")&&this.kindOf.size>0,!0)}isMobile(){return!(this.kindOf.has("STRUCTURE")||this.kindOf.has("IMMOBILE"))}isLocallyControlled(){return!0}isUnit(){return this.kindOf.has("VEHICLE")||this.kindOf.has("INFANTRY")||this.kindOf.has("AIRCRAFT")||this.kindOf.has("HUGE_VEHICLE")}isStructure(){return this.kindOf.has("STRUCTURE")}syncPositionFromMesh(){this.position.x=this.mesh.position.x,this.position.y=this.mesh.position.y,this.position.z=this.mesh.position.z,this.rotation=this.mesh.rotation.y}syncMeshFromPosition(){this.mesh.position.x=this.position.x,this.mesh.position.y=this.position.y,this.mesh.position.z=this.position.z,this.mesh.rotation.y=this.rotation}}function $0(){Dc=1}function j0(i,t,e,n){var p,m;if(!i||i.length===0)return;C.units.clear(),$0();const s=Le.size>0,r=new Bi(6,6,6),a=new Cn({color:16729156}),o=new Cn({color:4500223}),l=new Cn({color:16755268}),h=new Cn({color:11184810}),d=e-2*n,c=i.filter(v=>!(v.flags&256)&&!(v.flags&mc)&&!(v.flags&cg)&&!v.name.startsWith("*")).slice(0,5e3);let f=0,g=0;for(const v of c){const x=v.x,M=(d-1)*$t-v.y,w=v.z&&Math.abs(v.z)>.1?v.z*qe:Ca(v.x,v.y);let E=!1;if(s){const A=yl(v.name);if(A){const L=q0(A);if(L){const y=L.clone();y.position.set(x,w,M),v.angle&&(y.rotation.y=v.angle),y.traverse(z=>{z.isMesh&&(z.castShadow=!0,z.receiveShadow=!0)});const S=Ii.get(v.name.toLowerCase());y.userData={name:v.name,w3d:A,kindOf:S||null},C.objectMarkers.add(y);const I=new Ul(y,v.name,S);C.units.set(I.id,I),f++,E=!0}}}if(!E){let A=h;const L=v.name.toLowerCase();L.includes("structure")||L.includes("building")||L.includes("commandcenter")||L.includes("barracks")||L.includes("factory")||L.includes("power")||L.includes("supply")||L.includes("techbuilding")?A=a:L.includes("vehicle")||L.includes("infantry")||L.includes("tank")||L.includes("unit")||L.includes("soldier")?A=o:(L.includes("civilian")||L.includes("civ"))&&(A=l);const y=new Te(r,A);y.castShadow=!0,y.receiveShadow=!0,y.position.set(x,w+3,M);const S=Ii.get(v.name.toLowerCase());y.userData={name:v.name,kindOf:S||null},C.objectMarkers.add(y);const I=new Ul(y,v.name,S);C.units.set(I.id,I),g++}}if(s&&(console.log(`Objects: ${f} W3D models loaded, ${g} fallback cubes`),g>0)){const v=new Map;for(const x of c)yl(x.name)||v.set(x.name,(v.get(x.name)||0)+1);if(v.size>0){console.groupCollapsed(`Unresolved objects (${v.size} unique names)`);for(const[x,M]of[...v].sort((w,E)=>E[1]-w[1]))console.log(`  ${x} (x${M})`);console.groupEnd()}}const _=((m=(p=C.currentMapData)==null?void 0:p.lighting)==null?void 0:m.todIndex)??1;Ec(_===3)}function Nl(i){C.currentMapData=i;const t=i.heightMap;if(!t)throw new Error("No heightmap data found in map file");const{scene:e}=C;for(C.terrainMesh&&(e.remove(C.terrainMesh),C.terrainMesh.geometry.dispose(),C.terrainMesh.material.dispose()),C.terrainMatColored&&(C.terrainMatColored.dispose(),C.terrainMatColored=null),C.terrainMatTextured&&(C.terrainMatTextured.dispose(),C.terrainMatTextured=null),C.terrainAtlasTex&&(C.terrainAtlasTex.dispose(),C.terrainAtlasTex=null),C.terrainAtlas=null,e.remove(C.objectMarkers),C.objectMarkers.traverse(q=>{q.geometry&&q.geometry.dispose(),q.material&&(q.material.map&&q.material.map.dispose(),q.material.dispose())}),C.objectMarkers=new en,Hn.clear(),jn.clear(),Gs.clear(),C.roadMesh&&(e.remove(C.roadMesh),C.roadMesh.traverse(q=>{q.geometry&&q.geometry.dispose(),q.material&&(q.material.map&&q.material.map.dispose(),q.material.dispose())}),C.roadMesh=null),C.waterPlane&&(e.remove(C.waterPlane),C.waterPlane.geometry.dispose(),C.waterPlane.material.dispose(),C.waterPlane=null);e.children.length>0;)e.remove(e.children[0]);const n=t.width,s=t.height,r=t.borderSize,a=i.blendTileData;jt.size>0&&a&&(C.terrainAtlas=n0(i),C.terrainAtlas&&(C.terrainAtlasTex=new $s(C.terrainAtlas.atlasPixels,C.terrainAtlas.atlasW,C.terrainAtlas.atlasH,Re),C.terrainAtlasTex.flipY=!1,C.terrainAtlasTex.magFilter=Ee,C.terrainAtlasTex.minFilter=Ye,C.terrainAtlasTex.generateMipmaps=!0,C.terrainAtlasTex.needsUpdate=!0));const o=n-1,l=s-1,h=o*l,d=h*4,u=new Float32Array(d*3),c=new Float32Array(d*3),f=new Uint32Array(h*6),g=new Float32Array(d*2),_=new Float32Array(d*2),p=new Float32Array(d*2),m=new Float32Array(d),v=new Float32Array(d);let x=255,M=0;for(let q=0;q<t.data.length;q++)t.data[q]<x&&(x=t.data[q]),t.data[q]>M&&(M=t.data[q]);const w=new vt,E=new vt,A=new vt,L=new vt,y=[0,1,1,0],S=[0,0,1,1];for(let q=0;q<l;q++)for(let dt=0;dt<o;dt++){const Rt=q*o+dt,_t=Rt*4;for(let Mt=0;Mt<4;Mt++){const nt=dt+y[Mt],Ct=q+S[Mt],St=Ct*n+nt,Ut=t.data[St],bt=(_t+Mt)*3;u[bt]=(nt-r)*$t,u[bt+1]=Ut*qe,u[bt+2]=(s-1-Ct-r)*$t}const V=q*n+dt;Sc(V,a,t,x,M,w);let tt=null,ft=0,rt=!1;if(a&&V<a.blendTileNdxes.length){const Mt=a.blendTileNdxes[V];if(Mt>0&&a.blendedTiles&&Mt<a.blendedTiles.length){const nt=a.blendedTiles[Mt],Ct=Js(nt);tt=Ct.alphas,rt=Ct.needFlip,ft=nt.blendNdx,ts(nt.blendNdx,a,E)}}let At=null,wt=0;if(a&&a.extraBlendTileNdxes&&V<a.extraBlendTileNdxes.length){const Mt=a.extraBlendTileNdxes[V];if(Mt>0&&a.blendedTiles&&Mt<a.blendedTiles.length){const nt=a.blendedTiles[Mt];At=Js(nt).alphas,wt=nt.blendNdx,ts(nt.blendNdx,a,A)}}for(let Mt=0;Mt<4;Mt++){L.copy(w),tt&&tt[Mt]>0&&L.lerp(E,tt[Mt]/255),At&&At[Mt]>0&&L.lerp(A,At[Mt]/255);const nt=(_t+Mt)*3;c[nt]=L.r,c[nt+1]=L.g,c[nt+2]=L.b}if(C.terrainAtlas&&a){const Mt=a.tileNdxes[V];for(let nt=0;nt<4;nt++){const Ct=jr(Mt,nt,C.terrainAtlas);g[(_t+nt)*2]=Ct[0],g[(_t+nt)*2+1]=Ct[1]}if(tt)for(let nt=0;nt<4;nt++){const Ct=jr(ft,nt,C.terrainAtlas);_[(_t+nt)*2]=Ct[0],_[(_t+nt)*2+1]=Ct[1],m[_t+nt]=tt[nt]/255}if(At)for(let nt=0;nt<4;nt++){const Ct=jr(wt,nt,C.terrainAtlas);p[(_t+nt)*2]=Ct[0],p[(_t+nt)*2+1]=Ct[1],v[_t+nt]=At[nt]/255}}const U=Rt*6;rt?(f[U]=_t+1,f[U+1]=_t+3,f[U+2]=_t,f[U+3]=_t+1,f[U+4]=_t+2,f[U+5]=_t+3):(f[U]=_t,f[U+1]=_t+1,f[U+2]=_t+2,f[U+3]=_t,f[U+4]=_t+2,f[U+5]=_t+3)}C.terrainGeo=new je,C.terrainGeo.setAttribute("position",new re(u,3)),C.terrainGeo.setAttribute("color",new re(c,3)),C.terrainGeo.setIndex(new re(f,1)),C.terrainAtlas&&(C.terrainGeo.setAttribute("baseUV",new re(g,2)),C.terrainGeo.setAttribute("blendUV",new re(_,2)),C.terrainGeo.setAttribute("extraUV",new re(p,2)),C.terrainGeo.setAttribute("blendAlpha",new re(m,1)),C.terrainGeo.setAttribute("extraAlpha",new re(v,1))),C.terrainGeo.computeVertexNormals(),C.terrainMatColored=new Cn({vertexColors:!0,flatShading:!1,side:xe}),C.terrainAtlas&&C.terrainAtlasTex&&(C.terrainMatTextured=i0(C.terrainAtlasTex,i.lighting),C.colorMode="texture",document.getElementById("color-mode").value="texture");const I=n-2*r,z=s-2*r;yc(i.lighting,I,z);const P=C.colorMode==="texture"&&C.terrainMatTextured?C.terrainMatTextured:C.terrainMatColored;C.terrainMesh=new Te(C.terrainGeo,P),C.terrainMesh.receiveShadow=!0,C.terrainMesh.castShadow=!1,e.add(C.terrainMesh);const W=i.polygonTriggers.filter(q=>q.isWaterArea);W.length>0&&Cg(W,I,z,n,s),jt.size>0&&x_();const X=wc(i.objects);if(X.length>0){S_(X);const q=X.filter(dt=>dt.type!==Qe).length;console.log(`Roads: ${X.length} total (${X.length-q} straight, ${q} junctions), ${os.size} types from INI`),C.roadMesh=d0(X,s,r),C.roadMesh&&e.add(C.roadMesh)}jt.size>0&&(M_(),Le.size>0&&g_()),j0(i.objects,n,s,r),e.add(C.objectMarkers);const Q=I*$t/2,et=z*$t/2,H=(x+M)/2*qe,it=Math.max(I,z)*$t;return Y.target.set(Q,H,et),Y.height=Math.min(La,it*.35),Y.yaw=Math.PI*.75,Y.pitch=cr,Y.velocity.set(0,0,0),t0(),Z_(),{drawW:n,drawH:s,playW:I,playH:z,minH:x,maxH:M}}function K0(i){return new Promise((t,e)=>{const n=[];function s(){i.readEntries(r=>{r.length===0?t(n):(n.push(...r),s())},e)}s()})}function Ic(i){return new Promise((t,e)=>i.file(t,e))}async function Uc(i,t,e){const n=await K0(i.createReader());for(const s of n)if(s.isDirectory)await Uc(s,`${t}/${s.name}`,e);else{const r=s.name.toLowerCase();if(r.endsWith(".big")||r.endsWith(".map"))continue;const a=await Ic(s);e.push({path:`${t}/${a.name}`,file:a})}}async function Ol(i){var e,n;const t=document.getElementById("loading");t.classList.add("active");try{const s=[],r=[];let a=null;const o=[];let l=!1;if(i.items)for(let u=0;u<i.items.length;u++){const c=(n=(e=i.items[u]).webkitGetAsEntry)==null?void 0:n.call(e);c&&(o.push(c),c.isDirectory&&(l=!0))}if(l){document.querySelector("#loading p").textContent="Scanning dropped files...",await new Promise(u=>setTimeout(u,50));for(const u of o)if(u.isDirectory)await Uc(u,u.name,r);else{const c=await Ic(u),f=await c.slice(0,4).arrayBuffer(),g=String.fromCharCode(...new Uint8Array(f));g==="BIGF"||g==="BIG4"?s.push(c):dl(c.name)?r.push({path:null,file:c}):a=c}}else{const u=Array.from(i.files);for(const c of u){const f=await c.slice(0,4).arrayBuffer(),g=String.fromCharCode(...new Uint8Array(f));g==="BIGF"||g==="BIG4"?s.push(c):dl(c.name)?r.push({path:null,file:c}):a=c}}for(const u of s){document.querySelector("#loading p").textContent=`Loading ${u.name}...`,await new Promise(f=>setTimeout(f,50));const c=await u.arrayBuffer();vg(c,u.name),document.getElementById("btn-list-big").style.display=""}let h=0;if(r.length>0){document.querySelector("#loading p").textContent=`Adding ${r.length} override file(s)...`,await new Promise(c=>setTimeout(c,50));let u=!1;for(const{path:c,file:f}of r){const g=await f.arrayBuffer();if(c)aa(c,g),h++,c.toLowerCase().endsWith(".ini")&&(u=!0);else{const _=xg(f.name,g);h+=_.length,f.name.toLowerCase().endsWith(".ini")&&(u=!0)}}u&&xc(),document.getElementById("btn-list-big").style.display="",console.log(`Added ${h} loose override file(s) to pool`)}if((s.length>0||h>0)&&C.currentMapData&&C.scene){document.querySelector("#loading p").textContent="Rebuilding terrain...",await new Promise(c=>setTimeout(c,50));const u=Nl(C.currentMapData);bl(C.currentMapData,u)}if(a){document.querySelector("#loading p").textContent="Parsing map file...",await new Promise(p=>setTimeout(p,50));const u=await a.arrayBuffer();let c=await E_(u);if(!c){t.classList.remove("active");return}await new Promise(p=>setTimeout(p,50));const f=A_(c);C.scene||e0();const g=Nl(f);document.getElementById("drop-overlay").classList.add("hidden"),document.getElementById("viewer").classList.add("active");const _=a.name.replace(/\.map$/i,"");document.getElementById("map-name").textContent=_,bl(f,g),console.log("Map loaded:",f)}else if(jt.size>0&&!C.currentMapData){document.getElementById("drop-overlay").classList.remove("hidden");const u=Di.size>0,c=$n.size;let f=`BIG loaded (${jt.size} files`;u?f+=`, ${Di.size} terrain mappings`:f+=", no Terrain.ini found — also drop ini.big",f+=")",c>0&&(f+=` + ${c} override(s)`),f+=" — now drop a .map file",document.querySelector("#drop-zone p").textContent=f}else h>0&&!C.currentMapData&&jt.size===$n.size&&(document.querySelector("#drop-zone p").textContent=`${$n.size} override file(s) ready — drop .big files and/or a .map file`)}catch(s){console.error("Failed to load:",s),Pa(`Failed to load: ${s.message}`)}finally{document.querySelector("#loading p").textContent="Parsing map file...",t.classList.remove("active")}}function Z0(){const i=document.getElementById("drop-zone"),t=document.getElementById("drop-overlay");document.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation()}),document.addEventListener("drop",e=>{e.preventDefault(),e.stopPropagation()}),t.addEventListener("dragenter",()=>i.classList.add("drag-over")),t.addEventListener("dragleave",e=>{t.contains(e.relatedTarget)||i.classList.remove("drag-over")}),t.addEventListener("drop",e=>{var n,s;i.classList.remove("drag-over"),((s=(n=e.dataTransfer)==null?void 0:n.files)==null?void 0:s.length)>0&&Ol(e.dataTransfer)}),document.getElementById("viewer").addEventListener("drop",e=>{var n,s;e.preventDefault(),((s=(n=e.dataTransfer)==null?void 0:n.files)==null?void 0:s.length)>0&&Ol(e.dataTransfer)}),document.getElementById("viewer").addEventListener("dragover",e=>e.preventDefault()),document.getElementById("toggle-wireframe").addEventListener("click",function(){this.classList.toggle("active");const e=this.classList.contains("active");C.terrainMatColored&&(C.terrainMatColored.wireframe=e),C.terrainMatTextured&&(C.terrainMatTextured.wireframe=e)}),document.getElementById("toggle-objects").addEventListener("click",function(){this.classList.toggle("active"),C.objectMarkers.visible=this.classList.contains("active")}),document.getElementById("toggle-water").addEventListener("click",function(){this.classList.toggle("active"),C.waterPlane&&(C.waterPlane.visible=this.classList.contains("active"))}),document.getElementById("toggle-roads").addEventListener("click",function(){this.classList.toggle("active"),C.roadMesh&&(C.roadMesh.visible=this.classList.contains("active"))}),document.getElementById("toggle-shadows").addEventListener("click",function(){this.classList.toggle("active");const e=this.classList.contains("active");C.renderer.shadowMap.enabled=e,C.sunLight&&(C.sunLight.castShadow=e),C.terrainMatColored&&(C.terrainMatColored.needsUpdate=!0),C.terrainMatTextured&&(C.terrainMatTextured.needsUpdate=!0)}),document.getElementById("toggle-edge-scroll").addEventListener("click",function(){this.classList.toggle("active"),Y.edgeScrollEnabled=this.classList.contains("active")}),document.getElementById("height-scale").addEventListener("input",function(){C.currentHeightScale=parseFloat(this.value),document.getElementById("height-scale-value").textContent=C.currentHeightScale.toFixed(1)+"x",wg(C.currentHeightScale)}),document.getElementById("color-mode").addEventListener("change",function(){C.colorMode=this.value,bg()}),document.getElementById("time-of-day").addEventListener("change",function(){Rg(parseInt(this.value))}),document.getElementById("btn-reset-camera").addEventListener("click",()=>{if(!C.currentMapData)return;const e=C.currentMapData.heightMap,n=e.borderSize,s=e.width-2*n,r=e.height-2*n,a=s*$t/2,o=r*$t/2,l=Math.max(s,r)*$t;Y.target.set(a,0,o),Y.height=Math.min(La,l*.35),Y.yaw=Math.PI*.75,Y.pitch=cr,Y.velocity.set(0,0,0)}),document.getElementById("btn-load-new").addEventListener("click",()=>{document.getElementById("drop-overlay").classList.remove("hidden")}),document.getElementById("btn-list-big").addEventListener("click",()=>{if(jt.size===0){Pa("No files loaded");return}const n=yg().filter(a=>a.startsWith("art/terrain/")&&a.endsWith(".tga")),s=$n.size;let r=`${jt.size} files in pool.
${n.length} terrain TGAs.
${Di.size} INI terrain mappings.`;s>0&&(r+=`
${s} loose file override(s) (marked [OVERRIDE] in console).`),r+=`

Full list logged to browser console (F12).`,alert(r)})}Z0();

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="164",eg={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ng={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,ec=1,ff=2,ig=3,pf=0,jc=1,mf=2,Tn=3,Nn=0,We=1,Ce=2,Jn=0,Xi=1,br=2,nc=3,ic=4,gf=5,mi=100,_f=101,xf=102,yf=103,vf=104,Mf=200,Sf=201,bf=202,wf=203,ga=204,_a=205,Af=206,Ef=207,Tf=208,Cf=209,Rf=210,If=211,Pf=212,Lf=213,Df=214,Uf=0,Nf=1,Of=2,wr=3,Ff=4,Bf=5,zf=6,kf=7,$r=0,Gf=1,Hf=2,Ln=0,Vf=1,Wf=2,Xf=3,Yf=4,qf=5,$f=6,Zf=7,sc="attached",Kf="detached",Da=300,jn=301,_i=302,Ar=303,Er=304,Xs=306,Mn=1e3,dn=1001,Tr=1002,Ee=1003,Qc=1004,sg=1004,Ps=1005,rg=1005,ue=1006,xr=1007,og=1007,$e=1008,ag=1008,Qn=1009,Jf=1010,jf=1011,th=1012,eh=1013,Ji=1014,fn=1015,Zr=1016,nh=1017,ih=1018,Ys=1020,Qf=35902,tp=1021,ep=1022,Re=1023,np=1024,ip=1025,Yi=1026,zs=1027,sh=1028,rh=1029,sp=1030,oh=1031,ah=1033,ra=33776,oa=33777,aa=33778,la=33779,rc=35840,oc=35841,ac=35842,lc=35843,cc=36196,hc=37492,uc=37496,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,_c=37813,xc=37814,yc=37815,vc=37816,Mc=37817,Sc=37818,bc=37819,wc=37820,Ac=37821,ca=36492,Ec=36494,Tc=36495,rp=36283,Cc=36284,Rc=36285,Ic=36286,op=2200,ap=2201,lp=2202,Cr=2300,Rr=2301,ha=2302,ki=2400,Gi=2401,Ir=2402,Ua=2500,lh=2501,lg=0,cg=1,hg=2,cp=3200,hp=3201,xi=0,up=1,Xn="",cn="srgb",On="srgb-linear",Na="display-p3",Kr="display-p3-linear",Pr="linear",ae="srgb",Lr="rec709",Dr="p3",ug=0,Oi=7680,dg=7681,fg=7682,pg=7683,mg=34055,gg=34056,_g=5386,xg=512,yg=513,vg=514,Mg=515,Sg=516,bg=517,wg=518,Pc=519,dp=512,fp=513,pp=514,ch=515,mp=516,gp=517,_p=518,xp=519,Ur=35044,Ag=35048,Eg=35040,Tg=35045,Cg=35049,Rg=35041,Ig=35046,Pg=35050,Lg=35042,Dg="100",Lc="300 es",Rn=2e3,Nr=2001;class ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iu=1234567;const qi=Math.PI/180,ks=180/Math.PI;function rn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function me(s,t,e){return Math.max(t,Math.min(e,s))}function hh(s,t){return(s%t+t)%t}function Ug(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ng(s,t,e){return s!==t?(e-s)/(t-s):0}function yr(s,t,e){return(1-e)*s+e*t}function Og(s,t,e,n){return yr(s,t,1-Math.exp(-e*n))}function Fg(s,t=1){return t-Math.abs(hh(s,t*2)-t)}function Bg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function zg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function kg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Gg(s,t){return s+Math.random()*(t-s)}function Hg(s){return s*(.5-Math.random())}function Vg(s){s!==void 0&&(iu=s);let t=iu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wg(s){return s*qi}function Xg(s){return s*ks}function Yg(s){return(s&s-1)===0&&s!==0}function qg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $g(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zg(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Kg={DEG2RAD:qi,RAD2DEG:ks,generateUUID:rn,clamp:me,euclideanModulo:hh,mapLinear:Ug,inverseLerp:Ng,lerp:yr,damp:Og,pingpong:Fg,smoothstep:Bg,smootherstep:zg,randInt:kg,randFloat:Gg,randFloatSpread:Hg,seededRandom:Vg,degToRad:Wg,radToDeg:Xg,isPowerOfTwo:Yg,ceilPowerOfTwo:qg,floorPowerOfTwo:$g,setQuaternionFromProperEuler:Zg,normalize:Gt,denormalize:Ve};class j{constructor(t=0,e=0){j.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],x=i[4],v=i[7],A=i[2],M=i[5],w=i[8];return r[0]=o*_+a*y+l*A,r[3]=o*g+a*x+l*M,r[6]=o*m+a*v+l*w,r[1]=c*_+h*y+u*A,r[4]=c*g+h*x+u*M,r[7]=c*m+h*v+u*w,r[2]=d*_+f*y+p*A,r[5]=d*g+f*x+p*M,r[8]=d*m+f*v+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hl.makeScale(t,e)),this}rotate(t){return this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new Bt;function yp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const Jg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ls(s,t){return new Jg[s](t)}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vp(){const s=Or("canvas");return s.style.display="block",s}const su={};function Mp(s){s in su||(su[s]=!0,console.warn(s))}const ru=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ou=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[On]:{transfer:Pr,primaries:Lr,toReference:s=>s,fromReference:s=>s},[cn]:{transfer:ae,primaries:Lr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Kr]:{transfer:Pr,primaries:Dr,toReference:s=>s.applyMatrix3(ou),fromReference:s=>s.applyMatrix3(ru)},[Na]:{transfer:ae,primaries:Dr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ou),fromReference:s=>s.applyMatrix3(ru).convertLinearToSRGB()}},jg=new Set([On,Kr]),ne={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!jg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=lo[t].toReference,i=lo[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return lo[s].primaries},getTransfer:function(s){return s===Xn?Pr:lo[s].transfer}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ul(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let rs;class Sp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=Or("canvas")),rs.width=t.width,rs.height=t.height;const n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Os(e[n]/255)*255):e[n]=Os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qg=0;class Hi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=rn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(dl(i[o].image)):r.push(dl(i[o]))}else r=dl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function dl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class ge extends ni{constructor(t=ge.DEFAULT_IMAGE,e=ge.DEFAULT_MAPPING,n=dn,i=dn,r=ue,o=$e,a=Re,l=Qn,c=ge.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=rn(),this.name="",this.source=new Hi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Da)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mn:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mn:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ge.DEFAULT_IMAGE=null;ge.DEFAULT_MAPPING=Da;ge.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,A=(m+1)/2,M=(h+d)/4,w=(u+_)/4,C=(p+g)/4;return x>v&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=M/n,r=w/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=M/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bp extends ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends bp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oa extends ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e0 extends bn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Oa(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class uh extends ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n0 extends bn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new uh(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Xe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),M=Math.atan2(A,m*y);g=Math.sin(g*M)/A,a=Math.sin(a*M)/A}const v=a*y;if(l=l*g+d*v,c=c*g+f*v,h=h*g+p*v,u=u*g+_*v,g===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(au.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fl.copy(this).projectOnVector(t),this.sub(fl)}reflect(t){return this.sub(fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new R,au=new Xe;class Ye{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),ho.subVectors(this.max,Qs),os.subVectors(t.a,Qs),as.subVectors(t.b,Qs),ls.subVectors(t.c,Qs),si.subVectors(as,os),ri.subVectors(ls,as),bi.subVectors(os,ls);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-bi.z,bi.y,si.z,0,-si.x,ri.z,0,-ri.x,bi.z,0,-bi.x,-si.y,si.x,0,-ri.y,ri.x,0,-bi.y,bi.x,0];return!pl(e,os,as,ls,ho)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,os,as,ls,ho))?!1:(uo.crossVectors(si,ri),e=[uo.x,uo.y,uo.z],pl(e,os,as,ls,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new R,new R,new R,new R,new R,new R,new R,new R],_n=new R,co=new Ye,os=new R,as=new R,ls=new R,si=new R,ri=new R,bi=new R,Qs=new R,ho=new R,uo=new R,wi=new R;function pl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const i0=new Ye,tr=new R,ml=new R;class Oe{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):i0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(ml)),this.expandByPoint(tr.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new R,gl=new R,fo=new R,oi=new R,_l=new R,po=new R,xl=new R;class qs{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gl.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(gl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=oi.dot(this.direction),l=-oi.dot(fo),c=oi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gl).addScaledVector(fo,d),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,r){_l.subVectors(e,t),po.subVectors(n,t),xl.crossVectors(_l,po);let o=this.direction.dot(xl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const l=a*this.direction.dot(po.crossVectors(oi,po));if(l<0)return null;const c=a*this.direction.dot(_l.cross(oi));if(c<0||l+c>o)return null;const h=-a*oi.dot(xl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,g){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,g)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s0,t,r0)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ai.crossVectors(n,je),ai.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ai.crossVectors(n,je)),ai.normalize(),mo.crossVectors(je,ai),i[0]=ai.x,i[4]=mo.x,i[8]=je.x,i[1]=ai.y,i[5]=mo.y,i[9]=je.y,i[2]=ai.z,i[6]=mo.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],x=n[7],v=n[11],A=n[15],M=i[0],w=i[4],C=i[8],b=i[12],S=i[1],L=i[5],F=i[9],D=i[13],k=i[2],X=i[6],Q=i[10],rt=i[14],W=i[3],at=i[7],q=i[11],mt=i[15];return r[0]=o*M+a*S+l*k+c*W,r[4]=o*w+a*L+l*X+c*at,r[8]=o*C+a*F+l*Q+c*q,r[12]=o*b+a*D+l*rt+c*mt,r[1]=h*M+u*S+d*k+f*W,r[5]=h*w+u*L+d*X+f*at,r[9]=h*C+u*F+d*Q+f*q,r[13]=h*b+u*D+d*rt+f*mt,r[2]=p*M+_*S+g*k+m*W,r[6]=p*w+_*L+g*X+m*at,r[10]=p*C+_*F+g*Q+m*q,r[14]=p*b+_*D+g*rt+m*mt,r[3]=y*M+x*S+v*k+A*W,r[7]=y*w+x*L+v*X+A*at,r[11]=y*C+x*F+v*Q+A*q,r[15]=y*b+x*D+v*rt+A*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=u*g*c-_*d*c+_*l*f-a*g*f-u*l*m+a*d*m,x=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,v=h*_*c-p*u*c+p*a*f-o*_*f-h*a*m+o*u*m,A=p*u*l-h*_*l-p*a*d+o*_*d+h*a*g-o*u*g,M=e*y+n*x+i*v+r*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return t[0]=y*w,t[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*m-n*d*m)*w,t[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*m+n*l*m)*w,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*w,t[4]=x*w,t[5]=(h*g*r-p*d*r+p*i*f-e*g*f-h*i*m+e*d*m)*w,t[6]=(p*l*r-o*g*r-p*i*c+e*g*c+o*i*m-e*l*m)*w,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*w,t[8]=v*w,t[9]=(p*u*r-h*_*r-p*n*f+e*_*f+h*n*m-e*u*m)*w,t[10]=(o*_*r-p*a*r+p*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*w,t[12]=A*w,t[13]=(h*_*i-p*u*i+p*n*d-e*_*d-h*n*g+e*u*g)*w,t[14]=(p*a*i-o*_*i-p*n*l+e*_*l+o*n*g-e*a*g)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,y=l*c,x=l*h,v=l*u,A=n.x,M=n.y,w=n.z;return i[0]=(1-(_+m))*A,i[1]=(f+v)*A,i[2]=(p-x)*A,i[3]=0,i[4]=(f-v)*M,i[5]=(1-(d+m))*M,i[6]=(g+y)*M,i[7]=0,i[8]=(p+x)*w,i[9]=(g-y)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=cs.set(i[0],i[1],i[2]).length();const o=cs.set(i[4],i[5],i[6]).length(),a=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);const c=1/r,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Rn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,p;if(a===Rn)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Nr)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Rn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h;let p,_;if(a===Rn)p=(o+r)*u,_=-2*u;else if(a===Nr)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new R,xn=new It,s0=new R(0,0,0),r0=new R(1,1,1),ai=new R,mo=new R,je=new R,lu=new It,cu=new Xe;class on{constructor(t=0,e=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let o0=0;const hu=new R,hs=new Xe,Gn=new It,go=new R,er=new R,a0=new R,l0=new Xe,uu=new R(1,0,0),du=new R(0,1,0),fu=new R(0,0,1),pu={type:"added"},c0={type:"removed"},us={type:"childadded",child:null},yl={type:"childremoved",child:null};class Jt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const t=new R,e=new on,n=new Xe,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new Bt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(er,go,this.up):Gn.lookAt(go,er,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Gn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pu),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(c0),yl.child=t,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pu),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,a0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,l0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Jt.DEFAULT_UP=new R(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new R,Hn=new R,vl=new R,Vn=new R,ds=new R,fs=new R,mu=new R,Ml=new R,Sl=new R,bl=new R;class en{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){yn.subVectors(i,e),Hn.subVectors(n,e),vl.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(Hn),l=yn.dot(vl),c=Hn.dot(Hn),h=Hn.dot(vl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Hn.subVectors(t,e),yn.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ds.subVectors(i,n),fs.subVectors(r,n),Ml.subVectors(t,n);const l=ds.dot(Ml),c=fs.dot(Ml);if(l<=0&&c<=0)return e.copy(n);Sl.subVectors(t,i);const h=ds.dot(Sl),u=fs.dot(Sl);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);bl.subVectors(t,r);const f=ds.dot(bl),p=fs.dot(bl);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(fs,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return mu.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(mu,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},_o={h:0,s:0,l:0};function wl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=hh(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wl(o,r,t+1/3),this.g=wl(o,r,t),this.b=wl(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=wp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=ul(t.r),this.g=ul(t.g),this.b=ul(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return ne.fromWorkingColorSpace(Ue.copy(this),t),Math.round(me(Ue.r*255,0,255))*65536+Math.round(me(Ue.g*255,0,255))*256+Math.round(me(Ue.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,r=Ue.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=cn){ne.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(_o);const n=yr(li.h,_o.h,e),i=yr(li.s,_o.s,e),r=yr(li.l,_o.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new ct;ct.NAMES=wp;let h0=0;class Fe extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=Xi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nn extends Fe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yn=u0();function u0(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function qe(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=me(s,-65504,65504),Yn.floatView[0]=s;const t=Yn.uint32View[0],e=t>>23&511;return Yn.baseTable[e]+((t&8388607)>>Yn.shiftTable[e])}function mr(s){const t=s>>10;return Yn.uint32View[0]=Yn.mantissaTable[Yn.offsetTable[t]+(s&1023)]+Yn.exponentTable[t],Yn.floatView[0]}const d0={toHalfFloat:qe,fromHalfFloat:mr},ve=new R,xo=new j;class qt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ur,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Mp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ve(e,this.array)),e}setX(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ve(e,this.array)),e}setY(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ve(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ve(e,this.array)),e}setW(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ur&&(t.usage=this.usage),t}}class f0 extends qt{constructor(t,e,n){super(new Int8Array(t),e,n)}}class p0 extends qt{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class m0 extends qt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class g0 extends qt{constructor(t,e,n){super(new Int16Array(t),e,n)}}class dh extends qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _0 extends qt{constructor(t,e,n){super(new Int32Array(t),e,n)}}class fh extends qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class x0 extends qt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=mr(this.array[t*this.itemSize]);return this.normalized&&(e=Ve(e,this.array)),e}setX(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize]=qe(e),this}getY(t){let e=mr(this.array[t*this.itemSize+1]);return this.normalized&&(e=Ve(e,this.array)),e}setY(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+1]=qe(e),this}getZ(t){let e=mr(this.array[t*this.itemSize+2]);return this.normalized&&(e=Ve(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+2]=qe(e),this}getW(t){let e=mr(this.array[t*this.itemSize+3]);return this.normalized&&(e=Ve(e,this.array)),e}setW(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+3]=qe(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array)),this.array[t+0]=qe(e),this.array[t+1]=qe(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[t+0]=qe(e),this.array[t+1]=qe(n),this.array[t+2]=qe(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[t+0]=qe(e),this.array[t+1]=qe(n),this.array[t+2]=qe(i),this.array[t+3]=qe(r),this}}class yt extends qt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let y0=0;const ln=new It,Al=new Jt,ps=new R,Qe=new Ye,nr=new Ye,we=new R;class Ot extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yp(t)?fh:dh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Qe.min,nr.min),Qe.expandByPoint(we),we.addVectors(Qe.max,nr.max),Qe.expandByPoint(we)):(Qe.expandByPoint(nr.min),Qe.expandByPoint(nr.max))}Qe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),we.add(ps)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new R,l[C]=new R;const c=new R,h=new R,u=new R,d=new j,f=new j,p=new j,_=new R,g=new R;function m(C,b,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),a[C].add(_),a[b].add(_),a[S].add(_),l[C].add(g),l[b].add(g),l[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,b=y.length;C<b;++C){const S=y[C],L=S.start,F=S.count;for(let D=L,k=L+F;D<k;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new R,v=new R,A=new R,M=new R;function w(C){A.fromBufferAttribute(i,C),M.copy(A);const b=a[C];x.copy(b),x.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(M,b);const L=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,b=y.length;C<b;++C){const S=y[C],L=S.start,F=S.count;for(let D=L,k=L+F;D<k;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ot,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new It,Ai=new qs,yo=new Oe,_u=new R,ms=new R,gs=new R,_s=new R,El=new R,vo=new R,Mo=new j,So=new j,bo=new j,xu=new R,yu=new R,vu=new R,wo=new R,Ao=new R;class le extends Jt{constructor(t=new Ot,e=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(El.fromBufferAttribute(u,t),o?vo.addScaledVector(El,h):vo.addScaledVector(El.sub(e),h))}e.add(vo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(yo.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(yo,_u)===null||Ai.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(gu.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,A=x;v<A;v+=3){const M=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);i=Eo(this,m,t,n,c,h,u,M,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);i=Eo(this,o,t,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,A=x;v<A;v+=3){const M=v,w=v+1,C=v+2;i=Eo(this,m,t,n,c,h,u,M,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=g,x=g+1,v=g+2;i=Eo(this,o,t,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function v0(s,t,e,n,i,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Nn,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ao);return c<e.near||c>e.far?null:{distance:c,point:Ao.clone(),object:s}}function Eo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ms),s.getVertexPosition(l,gs),s.getVertexPosition(c,_s);const h=v0(s,t,e,n,ms,gs,_s,wo);if(h){i&&(Mo.fromBufferAttribute(i,a),So.fromBufferAttribute(i,l),bo.fromBufferAttribute(i,c),h.uv=en.getInterpolation(wo,ms,gs,_s,Mo,So,bo,new j)),r&&(Mo.fromBufferAttribute(r,a),So.fromBufferAttribute(r,l),bo.fromBufferAttribute(r,c),h.uv1=en.getInterpolation(wo,ms,gs,_s,Mo,So,bo,new j)),o&&(xu.fromBufferAttribute(o,a),yu.fromBufferAttribute(o,l),vu.fromBufferAttribute(o,c),h.normal=en.getInterpolation(wo,ms,gs,_s,xu,yu,vu,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};en.getNormal(ms,gs,_s,u.normal),h.face=u}return h}class yi extends Ot{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function p(_,g,m,y,x,v,A,M,w,C,b){const S=v/w,L=A/C,F=v/2,D=A/2,k=M/2,X=w+1,Q=C+1;let rt=0,W=0;const at=new R;for(let q=0;q<Q;q++){const mt=q*L-D;for(let Ut=0;Ut<X;Ut++){const At=Ut*S-F;at[_]=At*y,at[g]=mt*x,at[m]=k,c.push(at.x,at.y,at.z),at[_]=0,at[g]=0,at[m]=M>0?1:-1,h.push(at.x,at.y,at.z),u.push(Ut/w),u.push(1-q/C),rt+=1}}for(let q=0;q<C;q++)for(let mt=0;mt<w;mt++){const Ut=d+mt+X*q,At=d+mt+X*(q+1),Y=d+(mt+1)+X*(q+1),ot=d+(mt+1)+X*q;l.push(Ut,At,ot),l.push(At,Y,ot),W+=6}a.addGroup(f,W,b),f+=W,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=Gs(s[e]);for(const i in n)t[i]=n[i]}return t}function M0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ap(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const ph={clone:Gs,merge:Ge};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Fe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=M0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ba extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new R,Mu=new j,Su=new j;class Ae extends Ba{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Mu,Su),e.subVectors(Su,Mu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,ys=1;class Ep extends Jt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ae(xs,ys,t,e);i.layers=this.layers,this.add(i);const r=new Ae(xs,ys,t,e);r.layers=this.layers,this.add(r);const o=new Ae(xs,ys,t,e);o.layers=this.layers,this.add(o);const a=new Ae(xs,ys,t,e);a.layers=this.layers,this.add(a);const l=new Ae(xs,ys,t,e);l.layers=this.layers,this.add(l);const c=new Ae(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Jr extends ge{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:jn,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tp extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yi(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Jn});r.uniforms.tEquirect.value=e;const o=new le(i,r),a=e.minFilter;return e.minFilter===$e&&(e.minFilter=ue),new Ep(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Tl=new R,w0=new R,A0=new Bt;class pi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Tl.subVectors(n,e).cross(w0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||A0.getNormalMatrix(t),i=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Oe,To=new R;class jr{constructor(t=new pi,e=new pi,n=new pi,i=new pi,r=new pi,o=new pi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],_=i[10],g=i[11],m=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,g-f,v-m).normalize(),n[1].setComponents(l+r,d+c,g+f,v+m).normalize(),n[2].setComponents(l+o,d+h,g+p,v+y).normalize(),n[3].setComponents(l-o,d-h,g-p,v-y).normalize(),n[4].setComponents(l-a,d-u,g-_,v-x).normalize(),e===Rn)n[5].setComponents(l+a,d+u,g+_,v+x).normalize();else if(e===Nr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(To.x=i.normal.x>0?t.max.x:t.min.x,To.y=i.normal.y>0?t.max.y:t.min.y,To.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cp(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function E0(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,a),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let f=0,p=d.length;f<p;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class ns extends Ot{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*d-o;for(let x=0;x<c;x++){const v=x*u-r;p.push(v,-y,0),_.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,v=y+c*(m+1),A=y+1+c*(m+1),M=y+1+c*m;f.push(x,v,M),f.push(v,A,M)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.width,t.height,t.widthSegments,t.heightSegments)}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`
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
}`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p_=`#ifdef USE_GRADIENTMAP
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
}`,m_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x_=`uniform bool receiveShadow;
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
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,A_=`struct PhysicalMaterial {
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
}`,E_=`
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G_=`#ifdef USE_MORPHNORMALS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
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
#endif`,V_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mx=`#ifdef USE_SKINNING
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
#endif`,gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Dx=`#if DEPTH_PACKING == 3200
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
}`,Ux=`#define DISTANCE
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
}`,Nx=`#define DISTANCE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
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
}`,zx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Hx=`#define LAMBERT
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
}`,Vx=`#define LAMBERT
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define MATCAP
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
}`,Yx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
}`,$x=`#define PHONG
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
}`,Zx=`#define PHONG
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
}`,Kx=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
}`,jx=`#define TOON
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
}`,Qx=`#define TOON
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
}`,ty=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,sy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:T0,alphahash_pars_fragment:C0,alphamap_fragment:R0,alphamap_pars_fragment:I0,alphatest_fragment:P0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:U0,batching_pars_vertex:N0,batching_vertex:O0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:k0,bumpmap_pars_fragment:G0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:Y0,color_pars_fragment:q0,color_pars_vertex:$0,color_vertex:Z0,common:K0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Q0,displacementmap_vertex:t_,emissivemap_fragment:e_,emissivemap_pars_fragment:n_,colorspace_fragment:i_,colorspace_pars_fragment:s_,envmap_fragment:r_,envmap_common_pars_fragment:o_,envmap_pars_fragment:a_,envmap_pars_vertex:l_,envmap_physical_pars_fragment:y_,envmap_vertex:c_,fog_vertex:h_,fog_pars_vertex:u_,fog_fragment:d_,fog_pars_fragment:f_,gradientmap_pars_fragment:p_,lightmap_pars_fragment:m_,lights_lambert_fragment:g_,lights_lambert_pars_fragment:__,lights_pars_begin:x_,lights_toon_fragment:v_,lights_toon_pars_fragment:M_,lights_phong_fragment:S_,lights_phong_pars_fragment:b_,lights_physical_fragment:w_,lights_physical_pars_fragment:A_,lights_fragment_begin:E_,lights_fragment_maps:T_,lights_fragment_end:C_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:L_,map_fragment:D_,map_pars_fragment:U_,map_particle_fragment:N_,map_particle_pars_fragment:O_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:B_,morphinstance_vertex:z_,morphcolor_vertex:k_,morphnormal_vertex:G_,morphtarget_pars_vertex:H_,morphtarget_vertex:V_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:Y_,normal_pars_vertex:q_,normal_vertex:$_,normalmap_pars_fragment:Z_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Q_,opaque_fragment:tx,packing:ex,premultiplied_alpha_fragment:nx,project_vertex:ix,dithering_fragment:sx,dithering_pars_fragment:rx,roughnessmap_fragment:ox,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:lx,shadowmap_pars_vertex:cx,shadowmap_vertex:hx,shadowmask_pars_fragment:ux,skinbase_vertex:dx,skinning_pars_vertex:fx,skinning_vertex:px,skinnormal_vertex:mx,specularmap_fragment:gx,specularmap_pars_fragment:_x,tonemapping_fragment:xx,tonemapping_pars_fragment:yx,transmission_fragment:vx,transmission_pars_fragment:Mx,uv_pars_fragment:Sx,uv_pars_vertex:bx,uv_vertex:wx,worldpos_vertex:Ax,background_vert:Ex,background_frag:Tx,backgroundCube_vert:Cx,backgroundCube_frag:Rx,cube_vert:Ix,cube_frag:Px,depth_vert:Lx,depth_frag:Dx,distanceRGBA_vert:Ux,distanceRGBA_frag:Nx,equirect_vert:Ox,equirect_frag:Fx,linedashed_vert:Bx,linedashed_frag:zx,meshbasic_vert:kx,meshbasic_frag:Gx,meshlambert_vert:Hx,meshlambert_frag:Vx,meshmatcap_vert:Wx,meshmatcap_frag:Xx,meshnormal_vert:Yx,meshnormal_frag:qx,meshphong_vert:$x,meshphong_frag:Zx,meshphysical_vert:Kx,meshphysical_frag:Jx,meshtoon_vert:jx,meshtoon_frag:Qx,points_vert:ty,points_frag:ey,shadow_vert:ny,shadow_frag:iy,sprite_vert:sy,sprite_frag:ry},dt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},vn={basic:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ge([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ge([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ge([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ge([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ge([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ge([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ge([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ge([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ge([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ge([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ge([dt.lights,dt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};vn.physical={uniforms:Ge([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Co={r:0,b:0,g:0},Ti=new on,oy=new It;function ay(s,t,e,n,i,r,o){const a=new ct(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const v=p(y);v===null?m(a,l):v&&v.isColor&&(m(v,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function g(y,x){const v=p(x);v&&(v.isCubeTexture||v.mapping===Xs)?(h===void 0&&(h=new le(new yi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Gs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(Ti)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==ae,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new le(new ns(2,2),new gn({name:"BackgroundMaterial",uniforms:Gs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ne.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Co,Ap(s)),n.buffers.color.setClear(Co.r,Co.g,Co.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:g}}function ly(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,L,F,D,k){let X=!1;const Q=u(D,F,L);r!==Q&&(r=Q,c(r.object)),X=f(S,D,F,k),X&&p(S,D,F,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(S,L,F,D),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,L,F){const D=F.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let X=k[L.id];X===void 0&&(X={},k[L.id]=X);let Q=X[D];return Q===void 0&&(Q=d(l()),X[D]=Q),Q}function d(S){const L=[],F=[],D=[];for(let k=0;k<e;k++)L[k]=0,F[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:S,attributes:{},index:null}}function f(S,L,F,D){const k=r.attributes,X=L.attributes;let Q=0;const rt=F.getAttributes();for(const W in rt)if(rt[W].location>=0){const q=k[W];let mt=X[W];if(mt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor)),q===void 0||q.attribute!==mt||mt&&q.data!==mt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==D}function p(S,L,F,D){const k={},X=L.attributes;let Q=0;const rt=F.getAttributes();for(const W in rt)if(rt[W].location>=0){let q=X[W];q===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const mt={};mt.attribute=q,q&&q.data&&(mt.data=q.data),k[W]=mt,Q++}r.attributes=k,r.attributesNum=Q,r.index=D}function _(){const S=r.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function g(S){m(S,0)}function m(S,L){const F=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;F[S]=1,D[S]===0&&(s.enableVertexAttribArray(S),D[S]=1),k[S]!==L&&(s.vertexAttribDivisor(S,L),k[S]=L)}function y(){const S=r.newAttributes,L=r.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==S[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function x(S,L,F,D,k,X,Q){Q===!0?s.vertexAttribIPointer(S,L,F,k,X):s.vertexAttribPointer(S,L,F,D,k,X)}function v(S,L,F,D){_();const k=D.attributes,X=F.getAttributes(),Q=L.defaultAttributeValues;for(const rt in X){const W=X[rt];if(W.location>=0){let at=k[rt];if(at===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){const q=at.normalized,mt=at.itemSize,Ut=t.get(at);if(Ut===void 0)continue;const At=Ut.buffer,Y=Ut.type,ot=Ut.bytesPerElement,vt=Y===s.INT||Y===s.UNSIGNED_INT||at.gpuType===eh;if(at.isInterleavedBufferAttribute){const lt=at.data,Pt=lt.stride,Nt=at.offset;if(lt.isInstancedInterleavedBuffer){for(let U=0;U<W.locationSize;U++)m(W.location+U,lt.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let U=0;U<W.locationSize;U++)g(W.location+U);s.bindBuffer(s.ARRAY_BUFFER,At);for(let U=0;U<W.locationSize;U++)x(W.location+U,mt/W.locationSize,Y,q,Pt*ot,(Nt+mt/W.locationSize*U)*ot,vt)}else{if(at.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt,at.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let lt=0;lt<W.locationSize;lt++)g(W.location+lt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let lt=0;lt<W.locationSize;lt++)x(W.location+lt,mt/W.locationSize,Y,q,mt*ot,mt/W.locationSize*lt*ot,vt)}}else if(Q!==void 0){const q=Q[rt];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(W.location,q);break;case 3:s.vertexAttrib3fv(W.location,q);break;case 4:s.vertexAttrib4fv(W.location,q);break;default:s.vertexAttrib1fv(W.location,q)}}}}y()}function A(){C();for(const S in n){const L=n[S];for(const F in L){const D=L[F];for(const k in D)h(D[k].object),delete D[k];delete L[F]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const F in L){const D=L[F];for(const k in D)h(D[k].object),delete D[k];delete L[F]}delete n[S.id]}function w(S){for(const L in n){const F=n[L];if(F[S.id]===void 0)continue;const D=F[S.id];for(const k in D)h(D[k].object),delete D[k];delete F[S.id]}}function C(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function cy(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<d.length;_++)e.update(p,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==Re&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const w=M===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Qn&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==fn&&!w)}function l(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:v,maxSamples:A}}function uy(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new pi,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,x=y*4;let v=m.clippingState||null;l.value=v,v=h(p,d,x,f);for(let A=0;A!==x;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function dy(s){let t=new WeakMap;function e(o,a){return a===Ar?o.mapping=jn:a===Er&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ar||a===Er)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Tp(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class za extends Ba{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ds=4,bu=[.125,.215,.35,.446,.526,.582],zi=20,Cl=new za,wu=new ct;let Rl=null,Il=0,Pl=0,Ll=!1;const Fi=(1+Math.sqrt(5))/2,vs=1/Fi,Au=[new R(-Fi,vs,0),new R(Fi,vs,0),new R(-vs,0,Fi),new R(vs,0,Fi),new R(0,Fi,-vs),new R(0,Fi,vs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Rl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Il,Pl),this._renderer.xr.enabled=Ll,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jn||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ue,minFilter:ue,generateMipmaps:!1,type:Zr,format:Re,colorSpace:On,depthBuffer:!1},i=Eu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fy(r)),this._blurMaterial=py(r,t,e)}return i}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,n,i){const a=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wu),h.toneMapping=Ln,h.autoClear=!1;const f=new nn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),p=new le(new yi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(wu),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Ro(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===jn||t.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Cl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Au[(i-r-1)%Au.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):zi;g>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const m=[];let y=0;for(let w=0;w<zi;++w){const C=w/_,b=Math.exp(-C*C/2);m.push(b),w===0?y+=b:w<g&&(y+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const v=this._sizeLods[i],A=3*v*(i>x-Ds?i-x+Ds:0),M=4*(this._cubeSize-v);Ro(e,A,M,3*v,2*v),l.setRenderTarget(e),l.render(u,Cl)}}function fy(s){const t=[],e=[],n=[];let i=s;const r=s-Ds+1+bu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ds?l=bu[o-s+Ds-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*f),x=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let M=0;M<f;M++){const w=M%3*2/3-1,C=M>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(b,_*p*M),x.set(d,g*p*M);const S=[M,M,M,M,M,M];v.set(S,m*p*M)}const A=new Ot;A.setAttribute("position",new qt(y,_)),A.setAttribute("uv",new qt(x,g)),A.setAttribute("faceIndex",new qt(v,m)),t.push(A),i>Ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Eu(s,t,e){const n=new bn(s,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function py(s,t,e){const n=new Float32Array(zi),i=new R(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Tu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Cu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function my(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ar||l===Er,h=l===jn||l===_i;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Dc(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Dc(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gy(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _y(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const A=y[x+0],M=y[x+1],w=y[x+2];d.push(A,M,M,w,w,A)}}else if(p!==void 0){const y=p.array;_=p.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const A=x+0,M=x+1,w=x+2;d.push(A,M,M,w,w,A)}}else return;const g=new(yp(d)?fh:dh)(d,1);g.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xy(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<p;g++)this.render(d[g]/o,f[g]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}}function u(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function vy(s,t,e){const n=new WeakMap,i=new ie;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let A=a.attributes.position.count*v,M=1;A>t.maxTextureSize&&(M=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*M*4*u),C=new Oa(w,A,M,u);C.type=fn,C.needsUpdate=!0;const b=v*4;for(let L=0;L<u;L++){const F=m[L],D=y[L],k=x[L],X=A*M*4*L;for(let Q=0;Q<F.count;Q++){const rt=Q*b;p===!0&&(i.fromBufferAttribute(F,Q),w[X+rt+0]=i.x,w[X+rt+1]=i.y,w[X+rt+2]=i.z,w[X+rt+3]=0),_===!0&&(i.fromBufferAttribute(D,Q),w[X+rt+4]=i.x,w[X+rt+5]=i.y,w[X+rt+6]=i.z,w[X+rt+7]=0),g===!0&&(i.fromBufferAttribute(k,Q),w[X+rt+8]=i.x,w[X+rt+9]=i.y,w[X+rt+10]=i.z,w[X+rt+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new j(A,M)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function My(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class gh extends ge{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Yi,h!==Yi&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=Ji),n===void 0&&h===zs&&(n=Ys),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rp=new ge,Ip=new gh(1,1);Ip.compareFunction=ch;const Pp=new Oa,Lp=new uh,Dp=new Jr,Ru=[],Iu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Du=new Float32Array(4);function $s(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ru[i];if(r===void 0&&(r=new Float32Array(i),Ru[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ka(s,t){let e=Iu[t];e===void 0&&(e=new Int32Array(t),Iu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Sy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function by(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function wy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function Ay(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function Ey(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Du.set(n),s.uniformMatrix2fv(this.addr,!1,Du),be(e,n)}}function Ty(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Lu.set(n),s.uniformMatrix3fv(this.addr,!1,Lu),be(e,n)}}function Cy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Pu.set(n),s.uniformMatrix4fv(this.addr,!1,Pu),be(e,n)}}function Ry(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Iy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function Py(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function Ly(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function Dy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Uy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function Ny(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function Oy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function Fy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Ip:Rp;e.setTexture2D(t||r,i)}function By(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Lp,i)}function zy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Dp,i)}function ky(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pp,i)}function Gy(s){switch(s){case 5126:return Sy;case 35664:return by;case 35665:return wy;case 35666:return Ay;case 35674:return Ey;case 35675:return Ty;case 35676:return Cy;case 5124:case 35670:return Ry;case 35667:case 35671:return Iy;case 35668:case 35672:return Py;case 35669:case 35673:return Ly;case 5125:return Dy;case 36294:return Uy;case 36295:return Ny;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return ky}}function Hy(s,t){s.uniform1fv(this.addr,t)}function Vy(s,t){const e=$s(t,this.size,2);s.uniform2fv(this.addr,e)}function Wy(s,t){const e=$s(t,this.size,3);s.uniform3fv(this.addr,e)}function Xy(s,t){const e=$s(t,this.size,4);s.uniform4fv(this.addr,e)}function Yy(s,t){const e=$s(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function qy(s,t){const e=$s(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function $y(s,t){const e=$s(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Zy(s,t){s.uniform1iv(this.addr,t)}function Ky(s,t){s.uniform2iv(this.addr,t)}function Jy(s,t){s.uniform3iv(this.addr,t)}function jy(s,t){s.uniform4iv(this.addr,t)}function Qy(s,t){s.uniform1uiv(this.addr,t)}function tv(s,t){s.uniform2uiv(this.addr,t)}function ev(s,t){s.uniform3uiv(this.addr,t)}function nv(s,t){s.uniform4uiv(this.addr,t)}function iv(s,t,e){const n=this.cache,i=t.length,r=ka(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Rp,r[o])}function sv(s,t,e){const n=this.cache,i=t.length,r=ka(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Lp,r[o])}function rv(s,t,e){const n=this.cache,i=t.length,r=ka(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Dp,r[o])}function ov(s,t,e){const n=this.cache,i=t.length,r=ka(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Pp,r[o])}function av(s){switch(s){case 5126:return Hy;case 35664:return Vy;case 35665:return Wy;case 35666:return Xy;case 35674:return Yy;case 35675:return qy;case 35676:return $y;case 5124:case 35670:return Zy;case 35667:case 35671:return Ky;case 35668:case 35672:return Jy;case 35669:case 35673:return jy;case 5125:return Qy;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return ov}}class lv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gy(e.type)}}class cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}}class hv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function Uu(s,t){s.seq.push(t),s.map[t.id]=t}function uv(s,t,e){const n=s.name,i=n.length;for(Dl.lastIndex=0;;){const r=Dl.exec(n),o=Dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Uu(e,c===void 0?new lv(a,s,t):new cv(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new hv(a),Uu(e,u)),e=u}}}class ua{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);uv(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Nu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const dv=37297;let fv=0;function pv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function mv(s){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(s);let n;switch(t===e?n="":t===Dr&&e===Lr?n="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Dr&&(n="LinearSRGBToLinearDisplayP3"),s){case On:case Kr:return[n,"LinearTransferOETF"];case cn:case Na:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ou(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+pv(s.getShaderSource(t),o)}else return i}function gv(s,t){const e=mv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _v(s,t){let e;switch(t){case Vf:e="Linear";break;case Wf:e="Reinhard";break;case Xf:e="OptimizedCineon";break;case Yf:e="ACESFilmic";break;case $f:e="AgX";break;case Zf:e="Neutral";break;case qf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function xv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function yv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function gr(s){return s!==""}function Fu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(s){return s.replace(Mv,bv)}const Sv=new Map;function bv(s,t){let e=Ht[t];if(e===void 0){const n=Sv.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uc(e)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(s){return s.replace(wv,Av)}function Av(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ku(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ev(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===mf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Tv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case jn:case _i:t="ENVMAP_TYPE_CUBE";break;case Xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function Rv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $r:t="ENVMAP_BLENDING_MULTIPLY";break;case Gf:t="ENVMAP_BLENDING_MIX";break;case Hf:t="ENVMAP_BLENDING_ADD";break}return t}function Iv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ev(e),c=Tv(e),h=Cv(e),u=Rv(e),d=Iv(e),f=xv(e),p=yv(r),_=i.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(g=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Ln?_v("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,gv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=Uc(o),o=Fu(o,e),o=Bu(o,e),a=Uc(a),a=Fu(a,e),a=Bu(a,e),o=zu(o),a=zu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+g+o,v=y+m+a,A=Nu(i,i.VERTEX_SHADER,x),M=Nu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,M),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(M).trim();let X=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,M);else{const rt=Ou(i,A,"vertex"),W=Ou(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+rt+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||k==="")&&(Q=!1);Q&&(L.diagnostics={runnable:X,programLog:F,vertexShader:{log:D,prefix:g},fragmentShader:{log:k,prefix:m}})}i.deleteShader(A),i.deleteShader(M),C=new ua(i,_),b=vv(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,dv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}let Lv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uv(t),e.set(t,n)),n}}class Uv{constructor(t){this.id=Lv++,this.code=t,this.usedTimes=0}}function Nv(s,t,e,n,i,r,o){const a=new Fa,l=new Dv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,F,D){const k=F.fog,X=D.geometry,Q=b.isMeshStandardMaterial?F.environment:null,rt=(b.isMeshStandardMaterial?e:t).get(b.envMap||Q),W=rt&&rt.mapping===Xs?rt.image.height:null,at=p[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=q!==void 0?q.length:0;let Ut=0;X.morphAttributes.position!==void 0&&(Ut=1),X.morphAttributes.normal!==void 0&&(Ut=2),X.morphAttributes.color!==void 0&&(Ut=3);let At,Y,ot,vt;if(at){const ee=vn[at];At=ee.vertexShader,Y=ee.fragmentShader}else At=b.vertexShader,Y=b.fragmentShader,l.update(b),ot=l.getVertexShaderID(b),vt=l.getFragmentShaderID(b);const lt=s.getRenderTarget(),Pt=D.isInstancedMesh===!0,Nt=D.isBatchedMesh===!0,U=!!b.map,bt=!!b.matcap,B=!!rt,tt=!!b.aoMap,Z=!!b.lightMap,ht=!!b.bumpMap,nt=!!b.normalMap,xt=!!b.displacementMap,Rt=!!b.emissiveMap,P=!!b.metalnessMap,E=!!b.roughnessMap,z=b.anisotropy>0,K=b.clearcoat>0,it=b.dispersion>0,et=b.iridescence>0,Et=b.sheen>0,pt=b.transmission>0,ft=z&&!!b.anisotropyMap,Ft=K&&!!b.clearcoatMap,ut=K&&!!b.clearcoatNormalMap,Ct=K&&!!b.clearcoatRoughnessMap,$t=et&&!!b.iridescenceMap,Lt=et&&!!b.iridescenceThicknessMap,St=Et&&!!b.sheenColorMap,Wt=Et&&!!b.sheenRoughnessMap,Zt=!!b.specularMap,_e=!!b.specularColorMap,Xt=!!b.specularIntensityMap,N=pt&&!!b.transmissionMap,st=pt&&!!b.thicknessMap,J=!!b.gradientMap,gt=!!b.alphaMap,Mt=b.alphaTest>0,jt=!!b.alphaHash,ce=!!b.extensions;let fe=Ln;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(fe=s.toneMapping);const Ie={shaderID:at,shaderType:b.type,shaderName:b.name,vertexShader:At,fragmentShader:Y,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:vt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Nt,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:On,alphaToCoverage:!!b.alphaToCoverage,map:U,matcap:bt,envMap:B,envMapMode:B&&rt.mapping,envMapCubeUVHeight:W,aoMap:tt,lightMap:Z,bumpMap:ht,normalMap:nt,displacementMap:d&&xt,emissiveMap:Rt,normalMapObjectSpace:nt&&b.normalMapType===up,normalMapTangentSpace:nt&&b.normalMapType===xi,metalnessMap:P,roughnessMap:E,anisotropy:z,anisotropyMap:ft,clearcoat:K,clearcoatMap:Ft,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ct,dispersion:it,iridescence:et,iridescenceMap:$t,iridescenceThicknessMap:Lt,sheen:Et,sheenColorMap:St,sheenRoughnessMap:Wt,specularMap:Zt,specularColorMap:_e,specularIntensityMap:Xt,transmission:pt,transmissionMap:N,thicknessMap:st,gradientMap:J,opaque:b.transparent===!1&&b.blending===Xi&&b.alphaToCoverage===!1,alphaMap:gt,alphaTest:Mt,alphaHash:jt,combine:b.combine,mapUv:U&&_(b.map.channel),aoMapUv:tt&&_(b.aoMap.channel),lightMapUv:Z&&_(b.lightMap.channel),bumpMapUv:ht&&_(b.bumpMap.channel),normalMapUv:nt&&_(b.normalMap.channel),displacementMapUv:xt&&_(b.displacementMap.channel),emissiveMapUv:Rt&&_(b.emissiveMap.channel),metalnessMapUv:P&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:ft&&_(b.anisotropyMap.channel),clearcoatMapUv:Ft&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(b.sheenRoughnessMap.channel),specularMapUv:Zt&&_(b.specularMap.channel),specularColorMapUv:_e&&_(b.specularColorMap.channel),specularIntensityMapUv:Xt&&_(b.specularIntensityMap.channel),transmissionMapUv:N&&_(b.transmissionMap.channel),thicknessMapUv:st&&_(b.thicknessMap.channel),alphaMapUv:gt&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(nt||z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(U||gt),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:U&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ce,flipSided:b.side===We,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ce&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(S,b),x(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),b.push(a.mask)}function v(b){const S=p[b.type];let L;if(S){const F=vn[S];L=ph.clone(F.uniforms)}else L=b.uniforms;return L}function A(b,S){let L;for(let F=0,D=h.length;F<D;F++){const k=h[F];if(k.cacheKey===S){L=k,++L.usedTimes;break}}return L===void 0&&(L=new Pv(s,S,b,r),h.push(L)),L}function M(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:C}}function Ov(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Fv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Gu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,p,_,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Fv),n.length>1&&n.sort(d||Gu),i.length>1&&i.sort(d||Gu)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Bv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Hu,s.set(n,[o])):i>=r.length?(o=new Hu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ct};break;case"SpotLight":e={position:new R,direction:new R,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function kv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Gv=0;function Hv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vv(s){const t=new zv,e=kv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new It,o=new It;function a(c,h){let u=0,d=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,_=0,g=0,m=0,y=0,x=0,v=0,A=0,M=0,w=0,C=0;c.sort(Hv);const b=h===!0?Math.PI:1;for(let L=0,F=c.length;L<F;L++){const D=c[L],k=D.color,X=D.intensity,Q=D.distance,rt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*X*b,d+=k.g*X*b,f+=k.b*X*b;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],X);C++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const at=D.shadow,q=e.get(D);q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=rt,n.directionalShadowMatrix[p]=D.shadow.matrix,x++}n.directional[p]=W,p++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(k).multiplyScalar(X*b),W.distance=Q,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[g]=W;const at=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,at.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[g]=at.matrix,D.castShadow){const q=e.get(D);q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=rt,A++}g++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(k).multiplyScalar(X),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*b),W.distance=D.distance,W.decay=D.decay,D.castShadow){const at=D.shadow,q=e.get(D);q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,q.shadowCameraNear=at.camera.near,q.shadowCameraFar=at.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=rt,n.pointShadowMatrix[_]=D.shadow.matrix,v++}n.point[_]=W,_++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(X*b),W.groundColor.copy(D.groundColor).multiplyScalar(X*b),n.hemi[y]=W,y++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==p||S.pointLength!==_||S.spotLength!==g||S.rectAreaLength!==m||S.hemiLength!==y||S.numDirectionalShadows!==x||S.numPointShadows!==v||S.numSpotShadows!==A||S.numSpotMaps!==M||S.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=A+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,S.directionalLength=p,S.pointLength=_,S.spotLength=g,S.rectAreaLength=m,S.hemiLength=y,S.numDirectionalShadows=x,S.numPointShadows=v,S.numSpotShadows=A,S.numSpotMaps=M,S.numLightProbes=C,n.version=Gv++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Vu(s){const t=new Vv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(h){t.setup(e,h)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Vu(s),t.set(i,[a])):r>=o.length?(a=new Vu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class _h extends Fe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xh extends Fe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`;function qv(s,t,e){let n=new jr;const i=new j,r=new j,o=new ie,a=new _h({depthPacking:hp}),l=new xh,c={},h=e.maxTextureSize,u={[Nn]:We,[We]:Nn,[Ce]:Ce},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:Xv,fragmentShader:Yv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ot;p.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new le(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let m=this.type;this.render=function(M,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Jn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=m!==Tn&&this.type===Tn,k=m===Tn&&this.type!==Tn;for(let X=0,Q=M.length;X<Q;X++){const rt=M[X],W=rt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const at=W.getFrameExtents();if(i.multiply(at),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/at.x),i.x=r.x*at.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/at.y),i.y=r.y*at.y,W.mapSize.y=r.y)),W.map===null||D===!0||k===!0){const mt=this.type!==Tn?{minFilter:Ee,magFilter:Ee}:{};W.map!==null&&W.map.dispose(),W.map=new bn(i.x,i.y,mt),W.map.texture.name=rt.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const q=W.getViewportCount();for(let mt=0;mt<q;mt++){const Ut=W.getViewport(mt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),F.viewport(o),W.updateMatrices(rt,mt),n=W.getFrustum(),v(w,C,W.camera,rt,this.type)}W.isPointLightShadow!==!0&&this.type===Tn&&y(W,C),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(b,S,L)};function y(M,w){const C=t.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new bn(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,C,f,_,null)}function x(M,w,C,b){let S=null;const L=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=S.uuid,D=w.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let X=k[D];X===void 0&&(X=S.clone(),k[D]=X,w.addEventListener("dispose",A)),S=X}if(S.visible=w.visible,S.wireframe=w.wireframe,b===Tn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=s.properties.get(S);F.light=C}return S}function v(M,w,C,b,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Tn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const D=t.update(M),k=M.material;if(Array.isArray(k)){const X=D.groups;for(let Q=0,rt=X.length;Q<rt;Q++){const W=X[Q],at=k[W.materialIndex];if(at&&at.visible){const q=x(M,at,b,S);M.onBeforeShadow(s,M,w,C,D,q,W),s.renderBufferDirect(C,null,D,q,M,W),M.onAfterShadow(s,M,w,C,D,q,W)}}}else if(k.visible){const X=x(M,k,b,S);M.onBeforeShadow(s,M,w,C,D,X,null),s.renderBufferDirect(C,null,D,X,M,null),M.onAfterShadow(s,M,w,C,D,X,null)}}const F=M.children;for(let D=0,k=F.length;D<k;D++)v(F[D],w,C,b,S)}function A(M){M.target.removeEventListener("dispose",A);for(const C in c){const b=c[C],S=M.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function $v(s){function t(){let N=!1;const st=new ie;let J=null;const gt=new ie(0,0,0,0);return{setMask:function(Mt){J!==Mt&&!N&&(s.colorMask(Mt,Mt,Mt,Mt),J=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,jt,ce,fe,Ie){Ie===!0&&(Mt*=fe,jt*=fe,ce*=fe),st.set(Mt,jt,ce,fe),gt.equals(st)===!1&&(s.clearColor(Mt,jt,ce,fe),gt.copy(st))},reset:function(){N=!1,J=null,gt.set(-1,0,0,0)}}}function e(){let N=!1,st=null,J=null,gt=null;return{setTest:function(Mt){Mt?vt(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(Mt){st!==Mt&&!N&&(s.depthMask(Mt),st=Mt)},setFunc:function(Mt){if(J!==Mt){switch(Mt){case Uf:s.depthFunc(s.NEVER);break;case Nf:s.depthFunc(s.ALWAYS);break;case Of:s.depthFunc(s.LESS);break;case wr:s.depthFunc(s.LEQUAL);break;case Ff:s.depthFunc(s.EQUAL);break;case Bf:s.depthFunc(s.GEQUAL);break;case zf:s.depthFunc(s.GREATER);break;case kf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=Mt}},setLocked:function(Mt){N=Mt},setClear:function(Mt){gt!==Mt&&(s.clearDepth(Mt),gt=Mt)},reset:function(){N=!1,st=null,J=null,gt=null}}}function n(){let N=!1,st=null,J=null,gt=null,Mt=null,jt=null,ce=null,fe=null,Ie=null;return{setTest:function(ee){N||(ee?vt(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(ee){st!==ee&&!N&&(s.stencilMask(ee),st=ee)},setFunc:function(ee,En,ze){(J!==ee||gt!==En||Mt!==ze)&&(s.stencilFunc(ee,En,ze),J=ee,gt=En,Mt=ze)},setOp:function(ee,En,ze){(jt!==ee||ce!==En||fe!==ze)&&(s.stencilOp(ee,En,ze),jt=ee,ce=En,fe=ze)},setLocked:function(ee){N=ee},setClear:function(ee){Ie!==ee&&(s.clearStencil(ee),Ie=ee)},reset:function(){N=!1,st=null,J=null,gt=null,Mt=null,jt=null,ce=null,fe=null,Ie=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,y=null,x=null,v=null,A=null,M=new ct(0,0,0),w=0,C=!1,b=null,S=null,L=null,F=null,D=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const rt=s.getParameter(s.VERSION);rt.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(rt)[1]),X=Q>=1):rt.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),X=Q>=2);let W=null,at={};const q=s.getParameter(s.SCISSOR_BOX),mt=s.getParameter(s.VIEWPORT),Ut=new ie().fromArray(q),At=new ie().fromArray(mt);function Y(N,st,J,gt){const Mt=new Uint8Array(4),jt=s.createTexture();s.bindTexture(N,jt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ce=0;ce<J;ce++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(st+ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return jt}const ot={};ot[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(s.DEPTH_TEST),r.setFunc(wr),ht(!1),nt(ec),vt(s.CULL_FACE),tt(Jn);function vt(N){c[N]!==!0&&(s.enable(N),c[N]=!0)}function lt(N){c[N]!==!1&&(s.disable(N),c[N]=!1)}function Pt(N,st){return h[N]!==st?(s.bindFramebuffer(N,st),h[N]=st,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=st),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Nt(N,st){let J=d,gt=!1;if(N){J=u.get(st),J===void 0&&(J=[],u.set(st,J));const Mt=N.textures;if(J.length!==Mt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,ce=Mt.length;jt<ce;jt++)J[jt]=s.COLOR_ATTACHMENT0+jt;J.length=Mt.length,gt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,gt=!0);gt&&s.drawBuffers(J)}function U(N){return f!==N?(s.useProgram(N),f=N,!0):!1}const bt={[mi]:s.FUNC_ADD,[_f]:s.FUNC_SUBTRACT,[xf]:s.FUNC_REVERSE_SUBTRACT};bt[yf]=s.MIN,bt[vf]=s.MAX;const B={[Mf]:s.ZERO,[Sf]:s.ONE,[bf]:s.SRC_COLOR,[ga]:s.SRC_ALPHA,[Rf]:s.SRC_ALPHA_SATURATE,[Tf]:s.DST_COLOR,[Af]:s.DST_ALPHA,[wf]:s.ONE_MINUS_SRC_COLOR,[_a]:s.ONE_MINUS_SRC_ALPHA,[Cf]:s.ONE_MINUS_DST_COLOR,[Ef]:s.ONE_MINUS_DST_ALPHA,[If]:s.CONSTANT_COLOR,[Pf]:s.ONE_MINUS_CONSTANT_COLOR,[Lf]:s.CONSTANT_ALPHA,[Df]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(N,st,J,gt,Mt,jt,ce,fe,Ie,ee){if(N===Jn){p===!0&&(lt(s.BLEND),p=!1);return}if(p===!1&&(vt(s.BLEND),p=!0),N!==gf){if(N!==_||ee!==C){if((g!==mi||x!==mi)&&(s.blendEquation(s.FUNC_ADD),g=mi,x=mi),ee)switch(N){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case br:s.blendFunc(s.ONE,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case br:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,y=null,v=null,A=null,M.set(0,0,0),w=0,_=N,C=ee}return}Mt=Mt||st,jt=jt||J,ce=ce||gt,(st!==g||Mt!==x)&&(s.blendEquationSeparate(bt[st],bt[Mt]),g=st,x=Mt),(J!==m||gt!==y||jt!==v||ce!==A)&&(s.blendFuncSeparate(B[J],B[gt],B[jt],B[ce]),m=J,y=gt,v=jt,A=ce),(fe.equals(M)===!1||Ie!==w)&&(s.blendColor(fe.r,fe.g,fe.b,Ie),M.copy(fe),w=Ie),_=N,C=!1}function Z(N,st){N.side===Ce?lt(s.CULL_FACE):vt(s.CULL_FACE);let J=N.side===We;st&&(J=!J),ht(J),N.blending===Xi&&N.transparent===!1?tt(Jn):tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),i.setMask(N.colorWrite);const gt=N.stencilWrite;o.setTest(gt),gt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(N){b!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),b=N)}function nt(N){N!==df?(vt(s.CULL_FACE),N!==S&&(N===ec?s.cullFace(s.BACK):N===ff?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),S=N}function xt(N){N!==L&&(X&&s.lineWidth(N),L=N)}function Rt(N,st,J){N?(vt(s.POLYGON_OFFSET_FILL),(F!==st||D!==J)&&(s.polygonOffset(st,J),F=st,D=J)):lt(s.POLYGON_OFFSET_FILL)}function P(N){N?vt(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function E(N){N===void 0&&(N=s.TEXTURE0+k-1),W!==N&&(s.activeTexture(N),W=N)}function z(N,st,J){J===void 0&&(W===null?J=s.TEXTURE0+k-1:J=W);let gt=at[J];gt===void 0&&(gt={type:void 0,texture:void 0},at[J]=gt),(gt.type!==N||gt.texture!==st)&&(W!==J&&(s.activeTexture(J),W=J),s.bindTexture(N,st||ot[N]),gt.type=N,gt.texture=st)}function K(){const N=at[W];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function it(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(N){Ut.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Ut.copy(N))}function Wt(N){At.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),At.copy(N))}function Zt(N,st){let J=l.get(st);J===void 0&&(J=new WeakMap,l.set(st,J));let gt=J.get(N);gt===void 0&&(gt=s.getUniformBlockIndex(st,N.name),J.set(N,gt))}function _e(N,st){const gt=l.get(st).get(N);a.get(st)!==gt&&(s.uniformBlockBinding(st,gt,N.__bindingPointIndex),a.set(st,gt))}function Xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},W=null,at={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,y=null,x=null,v=null,A=null,M=new ct(0,0,0),w=0,C=!1,b=null,S=null,L=null,F=null,D=null,Ut.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:vt,disable:lt,bindFramebuffer:Pt,drawBuffers:Nt,useProgram:U,setBlending:tt,setMaterial:Z,setFlipSided:ht,setCullFace:nt,setLineWidth:xt,setPolygonOffset:Rt,setScissorTest:P,activeTexture:E,bindTexture:z,unbindTexture:K,compressedTexImage2D:it,compressedTexImage3D:et,texImage2D:$t,texImage3D:Lt,updateUBOMapping:Zt,uniformBlockBinding:_e,texStorage2D:ut,texStorage3D:Ct,texSubImage2D:Et,texSubImage3D:pt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Ft,scissor:St,viewport:Wt,reset:Xt}}function Zv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,E){return f?new OffscreenCanvas(P,E):Or("canvas")}function _(P,E,z){let K=1;const it=Rt(P);if((it.width>z||it.height>z)&&(K=z/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(K*it.width),Et=Math.floor(K*it.height);u===void 0&&(u=p(et,Et));const pt=E?p(et,Et):u;return pt.width=et,pt.height=Et,pt.getContext("2d").drawImage(P,0,0,et,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+et+"x"+Et+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==Ee&&P.minFilter!==ue}function m(P){s.generateMipmap(P)}function y(P,E,z,K,it=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=E;if(E===s.RED&&(z===s.FLOAT&&(et=s.R32F),z===s.HALF_FLOAT&&(et=s.R16F),z===s.UNSIGNED_BYTE&&(et=s.R8)),E===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(et=s.R8UI),z===s.UNSIGNED_SHORT&&(et=s.R16UI),z===s.UNSIGNED_INT&&(et=s.R32UI),z===s.BYTE&&(et=s.R8I),z===s.SHORT&&(et=s.R16I),z===s.INT&&(et=s.R32I)),E===s.RG&&(z===s.FLOAT&&(et=s.RG32F),z===s.HALF_FLOAT&&(et=s.RG16F),z===s.UNSIGNED_BYTE&&(et=s.RG8)),E===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(et=s.RG8UI),z===s.UNSIGNED_SHORT&&(et=s.RG16UI),z===s.UNSIGNED_INT&&(et=s.RG32UI),z===s.BYTE&&(et=s.RG8I),z===s.SHORT&&(et=s.RG16I),z===s.INT&&(et=s.RG32I)),E===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),E===s.RGBA){const Et=it?Pr:ne.getTransfer(K);z===s.FLOAT&&(et=s.RGBA32F),z===s.HALF_FLOAT&&(et=s.RGBA16F),z===s.UNSIGNED_BYTE&&(et=Et===ae?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ee&&P.minFilter!==ue?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function v(P){const E=P.target;E.removeEventListener("dispose",v),M(E),E.isVideoTexture&&h.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),C(E)}function M(P){const E=n.get(P);if(E.__webglInit===void 0)return;const z=P.source,K=d.get(z);if(K){const it=K[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(P),Object.keys(K).length===0&&d.delete(z)}n.remove(P)}function w(P){const E=n.get(P);s.deleteTexture(E.__webglTexture);const z=P.source,K=d.get(z);delete K[E.__cacheKey],o.memory.textures--}function C(P){const E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let it=0;it<E.__webglFramebuffer[K].length;it++)s.deleteFramebuffer(E.__webglFramebuffer[K][it]);else s.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)s.deleteFramebuffer(E.__webglFramebuffer[K]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=P.textures;for(let K=0,it=z.length;K<it;K++){const et=n.get(z[K]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(P)}let b=0;function S(){b=0}function L(){const P=b;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),b+=1,P}function F(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function D(P,E){const z=n.get(P);if(P.isVideoTexture&&nt(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(z,P,E);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+E)}function k(P,E){const z=n.get(P);if(P.version>0&&z.__version!==P.version){Ut(z,P,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+E)}function X(P,E){const z=n.get(P);if(P.version>0&&z.__version!==P.version){Ut(z,P,E);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+E)}function Q(P,E){const z=n.get(P);if(P.version>0&&z.__version!==P.version){At(z,P,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+E)}const rt={[Mn]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},W={[Ee]:s.NEAREST,[Qc]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[ue]:s.LINEAR,[xr]:s.LINEAR_MIPMAP_NEAREST,[$e]:s.LINEAR_MIPMAP_LINEAR},at={[dp]:s.NEVER,[xp]:s.ALWAYS,[fp]:s.LESS,[ch]:s.LEQUAL,[pp]:s.EQUAL,[_p]:s.GEQUAL,[mp]:s.GREATER,[gp]:s.NOTEQUAL};function q(P,E){if(E.type===fn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ue||E.magFilter===xr||E.magFilter===Ps||E.magFilter===$e||E.minFilter===ue||E.minFilter===xr||E.minFilter===Ps||E.minFilter===$e)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,rt[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,rt[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,rt[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,W[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ee||E.minFilter!==Ps&&E.minFilter!==$e||E.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function mt(P,E){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",v));const K=E.source;let it=d.get(K);it===void 0&&(it={},d.set(K,it));const et=F(E);if(et!==P.__cacheKey){it[et]===void 0&&(it[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),it[et].usedTimes++;const Et=it[P.__cacheKey];Et!==void 0&&(it[P.__cacheKey].usedTimes--,Et.usedTimes===0&&w(E)),P.__cacheKey=et,P.__webglTexture=it[et].texture}return z}function Ut(P,E,z){let K=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=s.TEXTURE_3D);const it=mt(P,E),et=E.source;e.bindTexture(K,P.__webglTexture,s.TEXTURE0+z);const Et=n.get(et);if(et.version!==Et.__version||it===!0){e.activeTexture(s.TEXTURE0+z);const pt=ne.getPrimaries(ne.workingColorSpace),ft=E.colorSpace===Xn?null:ne.getPrimaries(E.colorSpace),Ft=E.colorSpace===Xn||pt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ut=_(E.image,!1,i.maxTextureSize);ut=xt(E,ut);const Ct=r.convert(E.format,E.colorSpace),$t=r.convert(E.type);let Lt=y(E.internalFormat,Ct,$t,E.colorSpace,E.isVideoTexture);q(K,E);let St;const Wt=E.mipmaps,Zt=E.isVideoTexture!==!0,_e=Et.__version===void 0||it===!0,Xt=et.dataReady,N=x(E,ut);if(E.isDepthTexture)Lt=s.DEPTH_COMPONENT16,E.type===fn?Lt=s.DEPTH_COMPONENT32F:E.type===Ji?Lt=s.DEPTH_COMPONENT24:E.type===Ys&&(Lt=s.DEPTH24_STENCIL8),_e&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,Lt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Lt,ut.width,ut.height,0,Ct,$t,null));else if(E.isDataTexture)if(Wt.length>0){Zt&&_e&&e.texStorage2D(s.TEXTURE_2D,N,Lt,Wt[0].width,Wt[0].height);for(let st=0,J=Wt.length;st<J;st++)St=Wt[st],Zt?Xt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,St.width,St.height,Ct,$t,St.data):e.texImage2D(s.TEXTURE_2D,st,Lt,St.width,St.height,0,Ct,$t,St.data);E.generateMipmaps=!1}else Zt?(_e&&e.texStorage2D(s.TEXTURE_2D,N,Lt,ut.width,ut.height),Xt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,Ct,$t,ut.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,ut.width,ut.height,0,Ct,$t,ut.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,N,Lt,Wt[0].width,Wt[0].height,ut.depth);for(let st=0,J=Wt.length;st<J;st++)St=Wt[st],E.format!==Re?Ct!==null?Zt?Xt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,St.width,St.height,ut.depth,Ct,St.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Lt,St.width,St.height,ut.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?Xt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,St.width,St.height,ut.depth,Ct,$t,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Lt,St.width,St.height,ut.depth,0,Ct,$t,St.data)}else{Zt&&_e&&e.texStorage2D(s.TEXTURE_2D,N,Lt,Wt[0].width,Wt[0].height);for(let st=0,J=Wt.length;st<J;st++)St=Wt[st],E.format!==Re?Ct!==null?Zt?Xt&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,St.width,St.height,Ct,St.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Lt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?Xt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,St.width,St.height,Ct,$t,St.data):e.texImage2D(s.TEXTURE_2D,st,Lt,St.width,St.height,0,Ct,$t,St.data)}else if(E.isDataArrayTexture)Zt?(_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,N,Lt,ut.width,ut.height,ut.depth),Xt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Ct,$t,ut.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,ut.width,ut.height,ut.depth,0,Ct,$t,ut.data);else if(E.isData3DTexture)Zt?(_e&&e.texStorage3D(s.TEXTURE_3D,N,Lt,ut.width,ut.height,ut.depth),Xt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Ct,$t,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,ut.width,ut.height,ut.depth,0,Ct,$t,ut.data);else if(E.isFramebufferTexture){if(_e)if(Zt)e.texStorage2D(s.TEXTURE_2D,N,Lt,ut.width,ut.height);else{let st=ut.width,J=ut.height;for(let gt=0;gt<N;gt++)e.texImage2D(s.TEXTURE_2D,gt,Lt,st,J,0,Ct,$t,null),st>>=1,J>>=1}}else if(Wt.length>0){if(Zt&&_e){const st=Rt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,N,Lt,st.width,st.height)}for(let st=0,J=Wt.length;st<J;st++)St=Wt[st],Zt?Xt&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,Ct,$t,St):e.texImage2D(s.TEXTURE_2D,st,Lt,Ct,$t,St);E.generateMipmaps=!1}else if(Zt){if(_e){const st=Rt(ut);e.texStorage2D(s.TEXTURE_2D,N,Lt,st.width,st.height)}Xt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct,$t,ut)}else e.texImage2D(s.TEXTURE_2D,0,Lt,Ct,$t,ut);g(E)&&m(K),Et.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function At(P,E,z){if(E.image.length!==6)return;const K=mt(P,E),it=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);const et=n.get(it);if(it.version!==et.__version||K===!0){e.activeTexture(s.TEXTURE0+z);const Et=ne.getPrimaries(ne.workingColorSpace),pt=E.colorSpace===Xn?null:ne.getPrimaries(E.colorSpace),ft=E.colorSpace===Xn||Et===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ft=E.isCompressedTexture||E.image[0].isCompressedTexture,ut=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let J=0;J<6;J++)!Ft&&!ut?Ct[J]=_(E.image[J],!0,i.maxCubemapSize):Ct[J]=ut?E.image[J].image:E.image[J],Ct[J]=xt(E,Ct[J]);const $t=Ct[0],Lt=r.convert(E.format,E.colorSpace),St=r.convert(E.type),Wt=y(E.internalFormat,Lt,St,E.colorSpace),Zt=E.isVideoTexture!==!0,_e=et.__version===void 0||K===!0,Xt=it.dataReady;let N=x(E,$t);q(s.TEXTURE_CUBE_MAP,E);let st;if(Ft){Zt&&_e&&e.texStorage2D(s.TEXTURE_CUBE_MAP,N,Wt,$t.width,$t.height);for(let J=0;J<6;J++){st=Ct[J].mipmaps;for(let gt=0;gt<st.length;gt++){const Mt=st[gt];E.format!==Re?Lt!==null?Zt?Xt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,Mt.width,Mt.height,Lt,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,Wt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?Xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,Mt.width,Mt.height,Lt,St,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,Wt,Mt.width,Mt.height,0,Lt,St,Mt.data)}}}else{if(st=E.mipmaps,Zt&&_e){st.length>0&&N++;const J=Rt(Ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,N,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(ut){Zt?Xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct[J].width,Ct[J].height,Lt,St,Ct[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Ct[J].width,Ct[J].height,0,Lt,St,Ct[J].data);for(let gt=0;gt<st.length;gt++){const jt=st[gt].image[J].image;Zt?Xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,jt.width,jt.height,Lt,St,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,Wt,jt.width,jt.height,0,Lt,St,jt.data)}}else{Zt?Xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,St,Ct[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Lt,St,Ct[J]);for(let gt=0;gt<st.length;gt++){const Mt=st[gt];Zt?Xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,Lt,St,Mt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,Wt,Lt,St,Mt.image[J])}}}g(E)&&m(s.TEXTURE_CUBE_MAP),et.__version=it.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Y(P,E,z,K,it,et){const Et=r.convert(z.format,z.colorSpace),pt=r.convert(z.type),ft=y(z.internalFormat,Et,pt,z.colorSpace);if(!n.get(E).__hasExternalTextures){const ut=Math.max(1,E.width>>et),Ct=Math.max(1,E.height>>et);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,et,ft,ut,Ct,E.depth,0,Et,pt,null):e.texImage2D(it,et,ft,ut,Ct,0,Et,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ht(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,it,n.get(z).__webglTexture,0,Z(E)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,it,n.get(z).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(P,E,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let K=s.DEPTH_COMPONENT24;if(z||ht(E)){const it=E.depthTexture;it&&it.isDepthTexture&&(it.type===fn?K=s.DEPTH_COMPONENT32F:it.type===Ji&&(K=s.DEPTH_COMPONENT24));const et=Z(E);ht(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,K,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,K,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,K,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const K=Z(E);z&&ht(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,E.width,E.height):ht(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const K=E.textures;for(let it=0;it<K.length;it++){const et=K[it],Et=r.convert(et.format,et.colorSpace),pt=r.convert(et.type),ft=y(et.internalFormat,Et,pt,et.colorSpace),Ft=Z(E);z&&ht(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,ft,E.width,E.height):ht(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft,ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ft,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),D(E.depthTexture,0);const K=n.get(E.depthTexture).__webglTexture,it=Z(E);if(E.depthTexture.format===Yi)ht(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(E.depthTexture.format===zs)ht(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function lt(P){const E=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,P)}else if(z){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]=s.createRenderbuffer(),ot(E.__webglDepthbuffer[K],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),ot(E.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(P,E,z){const K=n.get(P);E!==void 0&&Y(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&lt(P)}function Nt(P){const E=P.texture,z=n.get(P),K=n.get(E);P.addEventListener("dispose",A);const it=P.textures,et=P.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=E.version,o.memory.textures++),et){z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[pt]=[];for(let ft=0;ft<E.mipmaps.length;ft++)z.__webglFramebuffer[pt][ft]=s.createFramebuffer()}else z.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let pt=0;pt<E.mipmaps.length;pt++)z.__webglFramebuffer[pt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Et)for(let pt=0,ft=it.length;pt<ft;pt++){const Ft=n.get(it[pt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ht(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){const ft=it[pt];z.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[pt]);const Ft=r.convert(ft.format,ft.colorSpace),ut=r.convert(ft.type),Ct=y(ft.internalFormat,Ft,ut,ft.colorSpace,P.isXRRenderTarget===!0),$t=Z(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Ct,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,z.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),q(s.TEXTURE_CUBE_MAP,E);for(let pt=0;pt<6;pt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)Y(z.__webglFramebuffer[pt][ft],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ft);else Y(z.__webglFramebuffer[pt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(E)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let pt=0,ft=it.length;pt<ft;pt++){const Ft=it[pt],ut=n.get(Ft);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),q(s.TEXTURE_2D,Ft),Y(z.__webglFramebuffer,P,Ft,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),g(Ft)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),q(pt,E),E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)Y(z.__webglFramebuffer[ft],P,E,s.COLOR_ATTACHMENT0,pt,ft);else Y(z.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,pt,0);g(E)&&m(pt),e.unbindTexture()}P.depthBuffer&&lt(P)}function U(P){const E=P.textures;for(let z=0,K=E.length;z<K;z++){const it=E[z];if(g(it)){const et=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Et=n.get(it).__webglTexture;e.bindTexture(et,Et),m(et),e.unbindTexture()}}}const bt=[],B=[];function tt(P){if(P.samples>0){if(ht(P)===!1){const E=P.textures,z=P.width,K=P.height;let it=s.COLOR_BUFFER_BIT;const et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(P),pt=E.length>1;if(pt)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const Ft=n.get(E[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,z,K,0,0,z,K,it,s.NEAREST),l===!0&&(bt.length=0,B.length=0,bt.push(s.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.resolveDepthBuffer===!1&&(bt.push(et),B.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const Ft=n.get(E[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Z(P){return Math.min(i.maxSamples,P.samples)}function ht(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function nt(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function xt(P,E){const z=P.colorSpace,K=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==On&&z!==Xn&&(ne.getTransfer(z)===ae?(K!==Re||it!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=S,this.setTexture2D=D,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=Pt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ht}function Up(s,t){function e(n,i=Xn){let r;const o=ne.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===nh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jf)return s.BYTE;if(n===jf)return s.SHORT;if(n===th)return s.UNSIGNED_SHORT;if(n===eh)return s.INT;if(n===Ji)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===Zr)return s.HALF_FLOAT;if(n===tp)return s.ALPHA;if(n===ep)return s.RGB;if(n===Re)return s.RGBA;if(n===np)return s.LUMINANCE;if(n===ip)return s.LUMINANCE_ALPHA;if(n===Yi)return s.DEPTH_COMPONENT;if(n===zs)return s.DEPTH_STENCIL;if(n===sh)return s.RED;if(n===rh)return s.RED_INTEGER;if(n===sp)return s.RG;if(n===oh)return s.RG_INTEGER;if(n===ah)return s.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===la)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===oc||n===ac||n===lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===hc||n===uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===hc)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===wc||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===Ec||n===Tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rp||n===Cc||n===Rc||n===Ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Np extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sn extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kv={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
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

}`;class Qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ge,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new gn({vertexShader:Jv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new le(new ns(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class tM extends ni{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=new Qv,g=e.getContextAttributes();let m=null,y=null;const x=[],v=[],A=new j;let M=null;const w=new Ae;w.layers.enable(1),w.viewport=new ie;const C=new Ae;C.layers.enable(2),C.viewport=new ie;const b=[w,C],S=new Np;S.layers.enable(1),S.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ot=x[Y];return ot===void 0&&(ot=new Ul,x[Y]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Y){let ot=x[Y];return ot===void 0&&(ot=new Ul,x[Y]=ot),ot.getGripSpace()},this.getHand=function(Y){let ot=x[Y];return ot===void 0&&(ot=new Ul,x[Y]=ot),ot.getHandSpace()};function D(Y){const ot=v.indexOf(Y.inputSource);if(ot===-1)return;const vt=x[ot];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||o),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<x.length;Y++){const ot=v[Y];ot!==null&&(v[Y]=null,x[Y].disconnect(ot))}L=null,F=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",k),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:Re,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,vt=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?zs:Yi,vt=g.stencil?Ys:Ji);const Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new bn(d.textureWidth,d.textureHeight,{format:Re,type:Qn,depthTexture:new gh(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(Y){for(let ot=0;ot<Y.removed.length;ot++){const vt=Y.removed[ot],lt=v.indexOf(vt);lt>=0&&(v[lt]=null,x[lt].disconnect(vt))}for(let ot=0;ot<Y.added.length;ot++){const vt=Y.added[ot];let lt=v.indexOf(vt);if(lt===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=v.length){v.push(vt),lt=Nt;break}else if(v[Nt]===null){v[Nt]=vt,lt=Nt;break}if(lt===-1)break}const Pt=x[lt];Pt&&Pt.connect(vt)}}const Q=new R,rt=new R;function W(Y,ot,vt){Q.setFromMatrixPosition(ot.matrixWorld),rt.setFromMatrixPosition(vt.matrixWorld);const lt=Q.distanceTo(rt),Pt=ot.projectionMatrix.elements,Nt=vt.projectionMatrix.elements,U=Pt[14]/(Pt[10]-1),bt=Pt[14]/(Pt[10]+1),B=(Pt[9]+1)/Pt[5],tt=(Pt[9]-1)/Pt[5],Z=(Pt[8]-1)/Pt[0],ht=(Nt[8]+1)/Nt[0],nt=U*Z,xt=U*ht,Rt=lt/(-Z+ht),P=Rt*-Z;ot.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(P),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const E=U+Rt,z=bt+Rt,K=nt-P,it=xt+(lt-P),et=B*bt/z*E,Et=tt*bt/z*E;Y.projectionMatrix.makePerspective(K,it,et,Et,E,z),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function at(Y,ot){ot===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ot.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),S.near=C.near=w.near=Y.near,S.far=C.far=w.far=Y.far,(L!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,F=S.far,w.near=L,w.far=F,C.near=L,C.far=F,w.updateProjectionMatrix(),C.updateProjectionMatrix(),Y.updateProjectionMatrix());const ot=Y.parent,vt=S.cameras;at(S,ot);for(let lt=0;lt<vt.length;lt++)at(vt[lt],ot);vt.length===2?W(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),q(Y,S,ot)};function q(Y,ot,vt){vt===null?Y.matrix.copy(ot.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ot.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ks*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null};let mt=null;function Ut(Y,ot){if(h=ot.getViewerPose(c||o),p=ot,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let lt=!1;vt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let Nt=0;Nt<vt.length;Nt++){const U=vt[Nt];let bt=null;if(f!==null)bt=f.getViewport(U);else{const tt=u.getViewSubImage(d,U);bt=tt.viewport,Nt===0&&(t.setRenderTargetTextures(y,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(y))}let B=b[Nt];B===void 0&&(B=new Ae,B.layers.enable(Nt),B.viewport=new ie,b[Nt]=B),B.matrix.fromArray(U.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(U.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(bt.x,bt.y,bt.width,bt.height),Nt===0&&(S.matrix.copy(B.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(B)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Nt=u.getDepthInformation(vt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,i.renderState)}}for(let vt=0;vt<x.length;vt++){const lt=v[vt],Pt=x[vt];lt!==null&&Pt!==void 0&&Pt.update(lt,ot,c||o)}_.render(t,S),mt&&mt(Y,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}const At=new Cp;At.setAnimationLoop(Ut),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}}const Ci=new on,eM=new It;function nM(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ap(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===We&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===We&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,v=y.envMapRotation;if(x&&(g.envMap.value=x,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(Ci)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const A=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*A,e(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iM(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(p(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",g));const A=x.program;n.updateUBOMapping(y,A);const M=t.render.frame;r[y.id]!==M&&(d(y),r[y.id]=M)}function h(y){const x=u();y.__bindingPointIndex=x;const v=s.createBuffer(),A=y.__size,M=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],v=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let M=0,w=v.length;M<w;M++){const C=Array.isArray(v[M])?v[M]:[v[M]];for(let b=0,S=C.length;b<S;b++){const L=C[b];if(f(L,M,b,A)===!0){const F=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let X=0;X<D.length;X++){const Q=D[X],rt=_(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,F+k,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,k),k+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,v,A){const M=y.value,w=x+"_"+v;if(A[w]===void 0)return typeof M=="number"||typeof M=="boolean"?A[w]=M:A[w]=M.clone(),!0;{const C=A[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[w]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function p(y){const x=y.uniforms;let v=0;const A=16;for(let w=0,C=x.length;w<C;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,L=b.length;S<L;S++){const F=b[S],D=Array.isArray(F.value)?F.value:[F.value];for(let k=0,X=D.length;k<X;k++){const Q=D[k],rt=_(Q),W=v%A;W!==0&&A-W<rt.boundary&&(v+=A-W),F.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=rt.storage}}}const M=v%A;return M>0&&(v+=A-M),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Op{constructor(t={}){const{canvas:e=vp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this._useLegacyLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;const x=this;let v=!1,A=0,M=0,w=null,C=-1,b=null;const S=new ie,L=new ie;let F=null;const D=new ct(0);let k=0,X=e.width,Q=e.height,rt=1,W=null,at=null;const q=new ie(0,0,X,Q),mt=new ie(0,0,X,Q);let Ut=!1;const At=new jr;let Y=!1,ot=!1;const vt=new It,lt=new R,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return w===null?rt:1}let U=n;function bt(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${La}`),e.addEventListener("webglcontextlost",N,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",J,!1),U===null){const O="webgl2";if(U=bt(O,T),U===null)throw bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let B,tt,Z,ht,nt,xt,Rt,P,E,z,K,it,et,Et,pt,ft,Ft,ut,Ct,$t,Lt,St,Wt,Zt;function _e(){B=new gy(U),B.init(),St=new Up(U,B),tt=new hy(U,B,t,St),Z=new $v(U),ht=new yy(U),nt=new Ov,xt=new Zv(U,B,Z,nt,tt,St,ht),Rt=new dy(x),P=new my(x),E=new E0(U),Wt=new ly(U,E),z=new _y(U,E,ht,Wt),K=new My(U,z,E,ht),Ct=new vy(U,tt,xt),ft=new uy(nt),it=new Nv(x,Rt,P,B,tt,Wt,ft),et=new nM(x,nt),Et=new Bv,pt=new Wv(B),ut=new ay(x,Rt,P,Z,K,d,l),Ft=new qv(x,K,tt),Zt=new iM(U,ht,tt,Z),$t=new cy(U,B,ht),Lt=new xy(U,B,ht),ht.programs=it.programs,x.capabilities=tt,x.extensions=B,x.properties=nt,x.renderLists=Et,x.shadowMap=Ft,x.state=Z,x.info=ht}_e();const Xt=new tM(x,U);this.xr=Xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=B.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=B.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(T){T!==void 0&&(rt=T,this.setSize(X,Q,!1))},this.getSize=function(T){return T.set(X,Q)},this.setSize=function(T,O,V=!0){if(Xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Q=O,e.width=Math.floor(T*rt),e.height=Math.floor(O*rt),V===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(X*rt,Q*rt).floor()},this.setDrawingBufferSize=function(T,O,V){X=T,Q=O,rt=V,e.width=Math.floor(T*V),e.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,O,V,G){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,O,V,G),Z.viewport(S.copy(q).multiplyScalar(rt).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,O,V,G){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,O,V,G),Z.scissor(L.copy(mt).multiplyScalar(rt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(T){Z.setScissorTest(Ut=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(T=!0,O=!0,V=!0){let G=0;if(T){let H=!1;if(w!==null){const _t=w.texture.format;H=_t===ah||_t===oh||_t===rh}if(H){const _t=w.texture.type,wt=_t===Qn||_t===Ji||_t===th||_t===Ys||_t===nh||_t===ih,Tt=ut.getClearColor(),Dt=ut.getClearAlpha(),zt=Tt.r,Vt=Tt.g,Yt=Tt.b;wt?(f[0]=zt,f[1]=Vt,f[2]=Yt,f[3]=Dt,U.clearBufferuiv(U.COLOR,0,f)):(p[0]=zt,p[1]=Vt,p[2]=Yt,p[3]=Dt,U.clearBufferiv(U.COLOR,0,p))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT),V&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",N,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Et.dispose(),pt.dispose(),nt.dispose(),Rt.dispose(),P.dispose(),K.dispose(),Wt.dispose(),Zt.dispose(),it.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",ee),Xt.removeEventListener("sessionend",En),ze.stop()};function N(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=ht.autoReset,O=Ft.enabled,V=Ft.autoUpdate,G=Ft.needsUpdate,H=Ft.type;_e(),ht.autoReset=T,Ft.enabled=O,Ft.autoUpdate=V,Ft.needsUpdate=G,Ft.type=H}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){const O=T.target;O.removeEventListener("dispose",gt),Mt(O)}function Mt(T){jt(T),nt.remove(T)}function jt(T){const O=nt.get(T).programs;O!==void 0&&(O.forEach(function(V){it.releaseProgram(V)}),T.isShaderMaterial&&it.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,G,H,_t){O===null&&(O=Pt);const wt=H.isMesh&&H.matrixWorld.determinant()<0,Tt=Jm(T,O,V,G,H);Z.setMaterial(G,wt);let Dt=V.index,zt=1;if(G.wireframe===!0){if(Dt=z.getWireframeAttribute(V),Dt===void 0)return;zt=2}const Vt=V.drawRange,Yt=V.attributes.position;let ye=Vt.start*zt,Pe=(Vt.start+Vt.count)*zt;_t!==null&&(ye=Math.max(ye,_t.start*zt),Pe=Math.min(Pe,(_t.start+_t.count)*zt)),Dt!==null?(ye=Math.max(ye,0),Pe=Math.min(Pe,Dt.count)):Yt!=null&&(ye=Math.max(ye,0),Pe=Math.min(Pe,Yt.count));const Je=Pe-ye;if(Je<0||Je===1/0)return;Wt.setup(H,G,Tt,V,Dt);let Bn,te=$t;if(Dt!==null&&(Bn=E.get(Dt),te=Lt,te.setIndex(Bn)),H.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*Nt()),te.setMode(U.LINES)):te.setMode(U.TRIANGLES);else if(H.isLine){let kt=G.linewidth;kt===void 0&&(kt=1),Z.setLineWidth(kt*Nt()),H.isLineSegments?te.setMode(U.LINES):H.isLineLoop?te.setMode(U.LINE_LOOP):te.setMode(U.LINE_STRIP)}else H.isPoints?te.setMode(U.POINTS):H.isSprite&&te.setMode(U.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?te.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):te.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)te.renderInstances(ye,Je,H.count);else if(V.isInstancedBufferGeometry){const kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Js=Math.min(V.instanceCount,kt);te.renderInstances(ye,Je,Js)}else te.render(ye,Je)};function ce(T,O,V){T.transparent===!0&&T.side===Ce&&T.forceSinglePass===!1?(T.side=We,T.needsUpdate=!0,ao(T,O,V),T.side=Nn,T.needsUpdate=!0,ao(T,O,V),T.side=Ce):ao(T,O,V)}this.compile=function(T,O,V=null){V===null&&(V=T),g=pt.get(V),g.init(O),y.push(g),V.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights(x._useLegacyLights);const G=new Set;return T.traverse(function(H){const _t=H.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){const Tt=_t[wt];ce(Tt,V,H),G.add(Tt)}else ce(_t,V,H),G.add(_t)}),y.pop(),g=null,G},this.compileAsync=function(T,O,V=null){const G=this.compile(T,O,V);return new Promise(H=>{function _t(){if(G.forEach(function(wt){nt.get(wt).currentProgram.isReady()&&G.delete(wt)}),G.size===0){H(T);return}setTimeout(_t,10)}B.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let fe=null;function Ie(T){fe&&fe(T)}function ee(){ze.stop()}function En(){ze.start()}const ze=new Cp;ze.setAnimationLoop(Ie),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(T){fe=T,Xt.setAnimationLoop(T),T===null?ze.stop():ze.start()},Xt.addEventListener("sessionstart",ee),Xt.addEventListener("sessionend",En),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(O),O=Xt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,w),g=pt.get(T,y.length),g.init(O),y.push(g),vt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),At.setFromProjectionMatrix(vt),ot=this.localClippingEnabled,Y=ft.init(this.clippingPlanes,ot),_=Et.get(T,m.length),_.init(),m.push(_),Zh(T,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,at);const V=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1;V&&ut.addToRenderList(_,T),this.info.render.frame++,Y===!0&&ft.beginShadows();const G=g.state.shadowsArray;Ft.render(G,T,O),Y===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,_t=_.transmissive;if(g.setupLights(x._useLegacyLights),O.isArrayCamera){const wt=O.cameras;if(_t.length>0)for(let Tt=0,Dt=wt.length;Tt<Dt;Tt++){const zt=wt[Tt];Jh(H,_t,T,zt)}V&&ut.render(T);for(let Tt=0,Dt=wt.length;Tt<Dt;Tt++){const zt=wt[Tt];Kh(_,T,zt,zt.viewport)}}else _t.length>0&&Jh(H,_t,T,O),V&&ut.render(T),Kh(_,T,O);w!==null&&(xt.updateMultisampleRenderTarget(w),xt.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,O),Wt.resetDefaultState(),C=-1,b=null,y.pop(),y.length>0?(g=y[y.length-1],Y===!0&&ft.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Zh(T,O,V,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||At.intersectsSprite(T)){G&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(vt);const wt=K.update(T),Tt=T.material;Tt.visible&&_.push(T,wt,Tt,V,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||At.intersectsObject(T))){const wt=K.update(T),Tt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),lt.copy(wt.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(vt)),Array.isArray(Tt)){const Dt=wt.groups;for(let zt=0,Vt=Dt.length;zt<Vt;zt++){const Yt=Dt[zt],ye=Tt[Yt.materialIndex];ye&&ye.visible&&_.push(T,wt,ye,V,lt.z,Yt)}}else Tt.visible&&_.push(T,wt,Tt,V,lt.z,null)}}const _t=T.children;for(let wt=0,Tt=_t.length;wt<Tt;wt++)Zh(_t[wt],O,V,G)}function Kh(T,O,V,G){const H=T.opaque,_t=T.transmissive,wt=T.transparent;g.setupLightsView(V),Y===!0&&ft.setGlobalState(x.clippingPlanes,V),G&&Z.viewport(S.copy(G)),H.length>0&&oo(H,O,V),_t.length>0&&oo(_t,O,V),wt.length>0&&oo(wt,O,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Jh(T,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new bn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Zr:Qn,minFilter:$e,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const _t=g.state.transmissionRenderTarget[G.id],wt=G.viewport||S;_t.setSize(wt.z,wt.w);const Tt=x.getRenderTarget();x.setRenderTarget(_t),x.getClearColor(D),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear();const Dt=x.toneMapping;x.toneMapping=Ln;const zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),Y===!0&&ft.setGlobalState(x.clippingPlanes,G),oo(T,V,G),xt.updateMultisampleRenderTarget(_t),xt.updateRenderTargetMipmap(_t),B.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Yt=0,ye=O.length;Yt<ye;Yt++){const Pe=O[Yt],Je=Pe.object,Bn=Pe.geometry,te=Pe.material,kt=Pe.group;if(te.side===Ce&&Je.layers.test(G.layers)){const Js=te.side;te.side=We,te.needsUpdate=!0,jh(Je,V,G,Bn,te,kt),te.side=Js,te.needsUpdate=!0,Vt=!0}}Vt===!0&&(xt.updateMultisampleRenderTarget(_t),xt.updateRenderTargetMipmap(_t))}x.setRenderTarget(Tt),x.setClearColor(D,k),zt!==void 0&&(G.viewport=zt),x.toneMapping=Dt}function oo(T,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let H=0,_t=T.length;H<_t;H++){const wt=T[H],Tt=wt.object,Dt=wt.geometry,zt=G===null?wt.material:G,Vt=wt.group;Tt.layers.test(V.layers)&&jh(Tt,O,V,Dt,zt,Vt)}}function jh(T,O,V,G,H,_t){T.onBeforeRender(x,O,V,G,H,_t),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,O,V,G,T,_t),H.transparent===!0&&H.side===Ce&&H.forceSinglePass===!1?(H.side=We,H.needsUpdate=!0,x.renderBufferDirect(V,O,G,H,T,_t),H.side=Nn,H.needsUpdate=!0,x.renderBufferDirect(V,O,G,H,T,_t),H.side=Ce):x.renderBufferDirect(V,O,G,H,T,_t),T.onAfterRender(x,O,V,G,H,_t)}function ao(T,O,V){O.isScene!==!0&&(O=Pt);const G=nt.get(T),H=g.state.lights,_t=g.state.shadowsArray,wt=H.state.version,Tt=it.getParameters(T,H.state,_t,O,V),Dt=it.getProgramCacheKey(Tt);let zt=G.programs;G.environment=T.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(T.isMeshStandardMaterial?P:Rt).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",gt),zt=new Map,G.programs=zt);let Vt=zt.get(Dt);if(Vt!==void 0){if(G.currentProgram===Vt&&G.lightsStateVersion===wt)return tu(T,Tt),Vt}else Tt.uniforms=it.getUniforms(T),T.onBuild(V,Tt,x),T.onBeforeCompile(Tt,x),Vt=it.acquireProgram(Tt,Dt),zt.set(Dt,Vt),G.uniforms=Tt.uniforms;const Yt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=ft.uniform),tu(T,Tt),G.needsLights=Qm(T),G.lightsStateVersion=wt,G.needsLights&&(Yt.ambientLightColor.value=H.state.ambient,Yt.lightProbe.value=H.state.probe,Yt.directionalLights.value=H.state.directional,Yt.directionalLightShadows.value=H.state.directionalShadow,Yt.spotLights.value=H.state.spot,Yt.spotLightShadows.value=H.state.spotShadow,Yt.rectAreaLights.value=H.state.rectArea,Yt.ltc_1.value=H.state.rectAreaLTC1,Yt.ltc_2.value=H.state.rectAreaLTC2,Yt.pointLights.value=H.state.point,Yt.pointLightShadows.value=H.state.pointShadow,Yt.hemisphereLights.value=H.state.hemi,Yt.directionalShadowMap.value=H.state.directionalShadowMap,Yt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Yt.spotShadowMap.value=H.state.spotShadowMap,Yt.spotLightMatrix.value=H.state.spotLightMatrix,Yt.spotLightMap.value=H.state.spotLightMap,Yt.pointShadowMap.value=H.state.pointShadowMap,Yt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Vt,G.uniformsList=null,Vt}function Qh(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ua.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function tu(T,O){const V=nt.get(T);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Jm(T,O,V,G,H){O.isScene!==!0&&(O=Pt),xt.resetTextureUnits();const _t=O.fog,wt=G.isMeshStandardMaterial?O.environment:null,Tt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:On,Dt=(G.isMeshStandardMaterial?P:Rt).get(G.envMap||wt),zt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Vt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Yt=!!V.morphAttributes.position,ye=!!V.morphAttributes.normal,Pe=!!V.morphAttributes.color;let Je=Ln;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Je=x.toneMapping);const Bn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Bn!==void 0?Bn.length:0,kt=nt.get(G),Js=g.state.lights;if(Y===!0&&(ot===!0||T!==b)){const an=T===b&&G.id===C;ft.setState(G,T,an)}let he=!1;G.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Js.state.version||kt.outputColorSpace!==Tt||H.isBatchedMesh&&kt.batching===!1||!H.isBatchedMesh&&kt.batching===!0||H.isInstancedMesh&&kt.instancing===!1||!H.isInstancedMesh&&kt.instancing===!0||H.isSkinnedMesh&&kt.skinning===!1||!H.isSkinnedMesh&&kt.skinning===!0||H.isInstancedMesh&&kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&kt.instancingMorph===!1&&H.morphTexture!==null||kt.envMap!==Dt||G.fog===!0&&kt.fog!==_t||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ft.numPlanes||kt.numIntersection!==ft.numIntersection)||kt.vertexAlphas!==zt||kt.vertexTangents!==Vt||kt.morphTargets!==Yt||kt.morphNormals!==ye||kt.morphColors!==Pe||kt.toneMapping!==Je||kt.morphTargetsCount!==te)&&(he=!0):(he=!0,kt.__version=G.version);let Si=kt.currentProgram;he===!0&&(Si=ao(G,O,H));let eu=!1,js=!1,al=!1;const Le=Si.getUniforms(),ii=kt.uniforms;if(Z.useProgram(Si.program)&&(eu=!0,js=!0,al=!0),G.id!==C&&(C=G.id,js=!0),eu||b!==T){Le.setValue(U,"projectionMatrix",T.projectionMatrix),Le.setValue(U,"viewMatrix",T.matrixWorldInverse);const an=Le.map.cameraPosition;an!==void 0&&an.setValue(U,lt.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&Le.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Le.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,js=!0,al=!0)}if(H.isSkinnedMesh){Le.setOptional(U,H,"bindMatrix"),Le.setOptional(U,H,"bindMatrixInverse");const an=H.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Le.setValue(U,"boneTexture",an.boneTexture,xt))}H.isBatchedMesh&&(Le.setOptional(U,H,"batchingTexture"),Le.setValue(U,"batchingTexture",H._matricesTexture,xt));const ll=V.morphAttributes;if((ll.position!==void 0||ll.normal!==void 0||ll.color!==void 0)&&Ct.update(H,V,Si),(js||kt.receiveShadow!==H.receiveShadow)&&(kt.receiveShadow=H.receiveShadow,Le.setValue(U,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ii.envMap.value=Dt,ii.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(ii.envMapIntensity.value=O.environmentIntensity),js&&(Le.setValue(U,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&jm(ii,al),_t&&G.fog===!0&&et.refreshFogUniforms(ii,_t),et.refreshMaterialUniforms(ii,G,rt,Q,g.state.transmissionRenderTarget[T.id]),ua.upload(U,Qh(kt),ii,xt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ua.upload(U,Qh(kt),ii,xt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Le.setValue(U,"center",H.center),Le.setValue(U,"modelViewMatrix",H.modelViewMatrix),Le.setValue(U,"normalMatrix",H.normalMatrix),Le.setValue(U,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const an=G.uniformsGroups;for(let cl=0,tg=an.length;cl<tg;cl++){const nu=an[cl];Zt.update(nu,Si),Zt.bind(nu,Si)}}return Si}function jm(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Qm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,O,V){nt.get(T.texture).__webglTexture=O,nt.get(T.depthTexture).__webglTexture=V;const G=nt.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const V=nt.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,V=0){w=T,A=O,M=V;let G=!0,H=null,_t=!1,wt=!1;if(T){const Dt=nt.get(T);Dt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):Dt.__webglFramebuffer===void 0?xt.setupRenderTarget(T):Dt.__hasExternalTextures&&xt.rebindTextures(T,nt.get(T.texture).__webglTexture,nt.get(T.depthTexture).__webglTexture);const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);const Vt=nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?H=Vt[O][V]:H=Vt[O],_t=!0):T.samples>0&&xt.useMultisampledRTT(T)===!1?H=nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[V]:H=Vt,S.copy(T.viewport),L.copy(T.scissor),F=T.scissorTest}else S.copy(q).multiplyScalar(rt).floor(),L.copy(mt).multiplyScalar(rt).floor(),F=Ut;if(Z.bindFramebuffer(U.FRAMEBUFFER,H)&&G&&Z.drawBuffers(T,H),Z.viewport(S),Z.scissor(L),Z.setScissorTest(F),_t){const Dt=nt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,V)}else if(wt){const Dt=nt.get(T.texture),zt=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.__webglTexture,V||0,zt)}C=-1},this.readRenderTargetPixels=function(T,O,V,G,H,_t,wt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Tt=Tt[wt]),Tt){Z.bindFramebuffer(U.FRAMEBUFFER,Tt);try{const Dt=T.texture,zt=Dt.format,Vt=Dt.type;if(!tt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&V>=0&&V<=T.height-H&&U.readPixels(O,V,G,H,St.convert(zt),St.convert(Vt),_t)}finally{const Dt=w!==null?nt.get(w).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(T,O,V=0){const G=Math.pow(2,-V),H=Math.floor(O.image.width*G),_t=Math.floor(O.image.height*G);xt.setTexture2D(O,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,T.x,T.y,H,_t),Z.unbindTexture()},this.copyTextureToTexture=function(T,O,V,G=0){const H=O.image.width,_t=O.image.height,wt=St.convert(V.format),Tt=St.convert(V.type);xt.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,T.x,T.y,H,_t,wt,Tt,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,wt,O.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,T.x,T.y,wt,Tt,O.image),G===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,O,V,G,H=0){const _t=T.max.x-T.min.x,wt=T.max.y-T.min.y,Tt=T.max.z-T.min.z,Dt=St.convert(G.format),zt=St.convert(G.type);let Vt;if(G.isData3DTexture)xt.setTexture3D(G,0),Vt=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)xt.setTexture2DArray(G,0),Vt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Yt=U.getParameter(U.UNPACK_ROW_LENGTH),ye=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Pe=U.getParameter(U.UNPACK_SKIP_PIXELS),Je=U.getParameter(U.UNPACK_SKIP_ROWS),Bn=U.getParameter(U.UNPACK_SKIP_IMAGES),te=V.isCompressedTexture?V.mipmaps[H]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,te.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,te.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,T.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,T.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(Vt,H,O.x,O.y,O.z,_t,wt,Tt,Dt,zt,te.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Vt,H,O.x,O.y,O.z,_t,wt,Tt,Dt,te.data):U.texSubImage3D(Vt,H,O.x,O.y,O.z,_t,wt,Tt,Dt,zt,te),U.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Pe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bn),H===0&&G.generateMipmaps&&U.generateMipmap(Vt),Z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xt.setTextureCube(T,0):T.isData3DTexture?xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xt.setTexture2DArray(T,0):xt.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){A=0,M=0,w=null,Z.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Na?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===Kr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Qr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new Qr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ga{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=n}clone(){return new Ga(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yh extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ha{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ur,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Mp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new R;class ji{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Gt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Gt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Gt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Gt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ve(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ve(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ve(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ve(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ji(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vh extends Fe{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ms;const ir=new R,Ss=new R,bs=new R,ws=new j,sr=new j,Fp=new It,Io=new R,rr=new R,Po=new R,Wu=new j,Nl=new j,Xu=new j;class Bp extends Jt{constructor(t=new vh){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Ot;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ha(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new ji(n,3,0,!1)),Ms.setAttribute("uv",new ji(n,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Fp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-bs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Lo(Io.set(-.5,-.5,0),bs,o,Ss,i,r),Lo(rr.set(.5,-.5,0),bs,o,Ss,i,r),Lo(Po.set(.5,.5,0),bs,o,Ss,i,r),Wu.set(0,0),Nl.set(1,0),Xu.set(1,1);let a=t.ray.intersectTriangle(Io,rr,Po,!1,ir);if(a===null&&(Lo(rr.set(-.5,.5,0),bs,o,Ss,i,r),Nl.set(0,1),a=t.ray.intersectTriangle(Io,Po,rr,!1,ir),a===null))return;const l=t.ray.origin.distanceTo(ir);l<t.near||l>t.far||e.push({distance:l,point:ir.clone(),uv:en.getInterpolation(ir,Io,rr,Po,Wu,Nl,Xu,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lo(s,t,e,n,i,r){ws.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(sr.x=r*ws.x-i*ws.y,sr.y=i*ws.x+r*ws.y):sr.copy(ws),s.copy(t),s.x+=sr.x,s.y+=sr.y,s.applyMatrix4(Fp)}const Do=new R,Yu=new R;class zp extends Jt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Do.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Do);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Do.setFromMatrixPosition(t.matrixWorld),Yu.setFromMatrixPosition(this.matrixWorld);const n=Do.distanceTo(Yu)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const qu=new R,$u=new ie,Zu=new ie,sM=new R,Ku=new It,Uo=new R,Ol=new Oe,Ju=new It,Fl=new qs;class kp extends le{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sc,this.bindMatrix=new It,this.bindMatrixInverse=new It,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ye),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Uo),this.boundingBox.expandByPoint(Uo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oe),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Uo),this.boundingSphere.expandByPoint(Uo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(i),t.ray.intersectsSphere(Ol)!==!1&&(Ju.copy(i).invert(),Fl.copy(t.ray).applyMatrix4(Ju),!(this.boundingBox!==null&&Fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Fl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ie,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===sc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;$u.fromBufferAttribute(i.attributes.skinIndex,t),Zu.fromBufferAttribute(i.attributes.skinWeight,t),qu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Zu.getComponent(r);if(o!==0){const a=$u.getComponent(r);Ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(sM.copy(qu).applyMatrix4(Ku),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Mh extends Jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mn extends ge{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ee,h=Ee,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ju=new It,rM=new It;class Va{constructor(t=[],e=[]){this.uuid=rn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new It)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new It;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:rM;ju.multiplyMatrices(a,e[r]),ju.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Va(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new mn(e,t,t,Re,fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mh),this.bones.push(o),this.boneInverses.push(new It().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Hs extends qt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const As=new It,Qu=new It,No=[],td=new Ye,oM=new It,or=new le,ar=new Oe;class Gp extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,oM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ye),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),td.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(td)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),ar.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,As),Qu.multiplyMatrices(n,As),or.matrixWorld=Qu,or.raycast(t,No);for(let o=0,a=No.length;o<a;o++){const l=No[o];l.instanceId=r,l.object=this,e.push(l)}No.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mn(new Float32Array(i*this.count),i,this.count,sh,fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function aM(s,t){return s.z-t.z}function lM(s,t){return t.z-s.z}class cM{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const r=n[this.index];i.push(r),this.index++,r.start=t.start,r.count=t.count,r.z=e}reset(){this.list.length=0,this.index=0}}const Es="batchId",hi=new It,ed=new It,hM=new It,nd=new It,Bl=new jr,Oo=new Ye,Ri=new Oe,lr=new R,zl=new cM,Ne=new le,Fo=[];function uM(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}class Hp extends le{get maxGeometryCount(){return this._maxGeometryCount}constructor(t,e,n=e*2,i){super(new Ot,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxGeometryCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new mn(e,t,t,Re,fn);this._matricesTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in t.attributes){const l=t.getAttribute(a),{array:c,itemSize:h,normalized:u}=l,d=new c.constructor(n*h),f=new qt(d,h,u);e.setAttribute(a,f)}if(t.getIndex()!==null){const a=n>65536?new Uint32Array(r):new Uint16Array(r);e.setIndex(new qt(a,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);e.setAttribute(Es,new qt(o,1)),this._geometryInitialized=!0}}_validateGeometry(t){if(t.getAttribute(Es))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Es}"`);const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(n===Es)continue;if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);const t=this._geometryCount,e=this.boundingBox,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,hi),this.getBoundingBoxAt(i,Oo).applyMatrix4(hi),e.union(Oo))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oe);const t=this._geometryCount,e=this.boundingSphere,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,hi),this.getBoundingSphereAt(i,Ri).applyMatrix4(hi),e.union(Ri))}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=t.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._visibility,d=this._active,f=this._matricesTexture,p=this._matricesTexture.image.data;u.push(!0),d.push(!0);const _=this._geometryCount;this._geometryCount++,hM.toArray(p,_*16),f.needsUpdate=!0,o.push(i),a.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Ye,sphereInitialized:!1,sphere:new Oe});const g=this.geometry.getAttribute(Es);for(let m=0;m<i.vertexCount;m++)g.setX(i.vertexStart+m,_);return g.needsUpdate=!0,this.setGeometryAt(_,t),_}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(i&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.vertexCount;for(const f in n.attributes){if(f===Es)continue;const p=e.getAttribute(f),_=n.getAttribute(f);uM(p,_,l);const g=p.itemSize;for(let m=p.count,y=c;m<y;m++){const x=l+m;for(let v=0;v<g;v++)_.setComponent(x,v,0)}_.needsUpdate=!0,_.addUpdateRange(l*g,c*g)}if(i){const f=a.indexStart;for(let p=0;p<o.count;p++)r.setX(f+p,l+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)r.setX(f+p,l);r.needsUpdate=!0,r.addUpdateRange(f,a.indexCount)}const h=this._bounds[t];e.boundingBox!==null?(h.box.copy(e.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,e.boundingSphere!==null?(h.sphere.copy(e.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[t],d=e.getAttribute("position");return u.count=i?o.count:d.count,this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._active;return t>=e.length||e[t]===!1?this:(e[t]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(t){return this._multiDrawInstances===null?null:this._multiDrawInstances[t]}setInstanceCountAt(t,e){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[t]=e,t}getBoundingBoxAt(t,e){if(this._active[t]===!1)return null;const i=this._bounds[t],r=i.box,o=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const a=o.index,l=o.attributes.position,c=this._drawRanges[t];for(let h=c.start,u=c.start+c.count;h<u;h++){let d=h;a&&(d=a.getX(d)),r.expandByPoint(lr.fromBufferAttribute(l,d))}i.boxInitialized=!0}return e.copy(r),e}getBoundingSphereAt(t,e){if(this._active[t]===!1)return null;const i=this._bounds[t],r=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(t,Oo),Oo.getCenter(r.center);const a=o.index,l=o.attributes.position,c=this._drawRanges[t];let h=0;for(let u=c.start,d=c.start+c.count;u<d;u++){let f=u;a&&(f=a.getX(f)),lr.fromBufferAttribute(l,f),h=Math.max(h,r.center.distanceToSquared(lr))}r.radius=Math.sqrt(h),i.sphereInitialized=!0}return e.copy(r),e}setMatrixAt(t,e){const n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,o=this._geometryCount;return t>=o||n[t]===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return t>=r||n[t]===!1?null:e.fromArray(i,t*16)}setVisibleAt(t,e){const n=this._visibility,i=this._active,r=this._geometryCount;return t>=r||i[t]===!1||n[t]===e?this:(n[t]=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._visibility,n=this._active,i=this._geometryCount;return t>=i||n[t]===!1?!1:e[t]}raycast(t,e){const n=this._visibility,i=this._active,r=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,l=this.geometry;Ne.material=this.material,Ne.geometry.index=l.index,Ne.geometry.attributes=l.attributes,Ne.geometry.boundingBox===null&&(Ne.geometry.boundingBox=new Ye),Ne.geometry.boundingSphere===null&&(Ne.geometry.boundingSphere=new Oe);for(let c=0;c<o;c++){if(!n[c]||!i[c])continue;const h=r[c];Ne.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(c,Ne.matrixWorld).premultiply(a),this.getBoundingBoxAt(c,Ne.geometry.boundingBox),this.getBoundingSphereAt(c,Ne.geometry.boundingSphere),Ne.raycast(t,Fo);for(let u=0,d=Fo.length;u<d;u++){const f=Fo[u];f.object=this,f.batchId=c,e.push(f)}Fo.length=0}Ne.material=null,Ne.geometry.index=null,Ne.geometry.attributes={},Ne.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._visibility=t._visibility.slice(),this._active=t._active.slice(),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxGeometryCount=t._maxGeometryCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled;f&&(nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Bl.setFromProjectionMatrix(nd,t.coordinateSystem));let p=0;if(this.sortObjects){ed.copy(this.matrixWorld).invert(),lr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ed);for(let m=0,y=c.length;m<y;m++)if(c[m]&&l[m]){this.getMatrixAt(m,hi),this.getBoundingSphereAt(m,Ri).applyMatrix4(hi);let x=!1;if(f&&(x=!Bl.intersectsSphere(Ri)),!x){const v=lr.distanceTo(Ri.center);zl.push(d[m],v)}}const _=zl.list,g=this.customSort;g===null?_.sort(r.transparent?lM:aM):g.call(this,_,n);for(let m=0,y=_.length;m<y;m++){const x=_[m];h[p]=x.start*a,u[p]=x.count,p++}zl.reset()}else for(let _=0,g=c.length;_<g;_++)if(c[_]&&l[_]){let m=!1;if(f&&(this.getMatrixAt(_,hi),this.getBoundingSphereAt(_,Ri).applyMatrix4(hi),m=!Bl.intersectsSphere(Ri)),!m){const y=d[_];h[p]=y.start*a,u[p]=y.count,p++}}this._multiDrawCount=p,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}}class Be extends Fe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xa=new R,ya=new R,id=new It,cr=new qs,Bo=new Oe,kl=new R,sd=new R;class ti extends Jt{constructor(t=new Ot,e=new Be){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)xa.fromBufferAttribute(e,i-1),ya.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xa.distanceTo(ya);t.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;id.copy(i).invert(),cr.copy(t.ray).applyMatrix4(id);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){const m=h.getX(_),y=h.getX(_+1),x=zo(this,t,cr,l,m,y);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=zo(this,t,cr,l,_,g);m&&e.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){const m=zo(this,t,cr,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=zo(this,t,cr,l,p-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zo(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(xa.fromBufferAttribute(o,i),ya.fromBufferAttribute(o,r),e.distanceSqToSegment(xa,ya,kl,sd)>n)return;kl.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(kl);if(!(l<t.near||l>t.far))return{distance:l,point:sd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const rd=new R,od=new R;class Fn extends ti{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)rd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rd.distanceTo(od);t.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vp extends ti{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Sh extends Fe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ad=new It,Nc=new qs,ko=new Oe,Go=new R;class Wp extends Jt{constructor(t=new Ot,e=new Sh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;ad.copy(i).invert(),Nc.copy(t.ray).applyMatrix4(ad);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const g=c.getX(p);Go.fromBufferAttribute(u,g),ld(Go,g,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Go.fromBufferAttribute(u,p),ld(Go,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ld(s,t,e,n,i,r,o){const a=Nc.distanceSqToPoint(s);if(a<e){const l=new R;Nc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class dM extends ge{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:ue,this.magFilter=r!==void 0?r:ue,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class fM extends ge{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ee,this.minFilter=Ee,this.generateMipmaps=!1,this.needsUpdate=!0}}class Wa extends ge{constructor(t,e,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class pM extends Wa{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=dn}}class mM extends Wa{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,jn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class gM extends ge{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new j:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],o=[],a=new R,l=new It;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(me(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(me(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xa extends wn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new j){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xp extends Xa{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ho=new R,Gl=new bh,Hl=new bh,Vl=new bh;class Yp extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ho.subVectors(i[0],i[1]).add(i[0]),c=Ho);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ho.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Gl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),Hl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),Vl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Hl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Gl.calc(l),Hl.calc(l),Vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cd(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function _M(s,t){const e=1-s;return e*e*t}function xM(s,t){return 2*(1-s)*s*t}function yM(s,t){return s*s*t}function vr(s,t,e,n){return _M(s,t)+xM(s,e)+yM(s,n)}function vM(s,t){const e=1-s;return e*e*e*t}function MM(s,t){const e=1-s;return 3*e*e*s*t}function SM(s,t){return 3*(1-s)*s*s*t}function bM(s,t){return s*s*s*t}function Mr(s,t,e,n,i){return vM(s,t)+MM(s,e)+SM(s,n)+bM(s,i)}class wh extends wn{constructor(t=new j,e=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new j){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,i.x,r.x,o.x,a.x),Mr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qp extends wn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,i.x,r.x,o.x,a.x),Mr(t,i.y,r.y,o.y,a.y),Mr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ah extends wn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $p extends wn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends wn{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(vr(t,i.x,r.x,o.x),vr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends wn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(vr(t,i.x,r.x,o.x),vr(t,i.y,r.y,o.y),vr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(cd(a,l.x,c.x,h.x,u.x),cd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new j().fromArray(i))}return this}}var va=Object.freeze({__proto__:null,ArcCurve:Xp,CatmullRomCurve3:Yp,CubicBezierCurve:wh,CubicBezierCurve3:qp,EllipseCurve:Xa,LineCurve:Ah,LineCurve3:$p,QuadraticBezierCurve:Eh,QuadraticBezierCurve3:Th,SplineCurve:Ch});class Zp extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new va[i.type]().fromJSON(i))}return this}}let Fr=class extends Zp{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ah(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Eh(this.currentPoint.clone(),new j(t,e),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new wh(this.currentPoint.clone(),new j(t,e),new j(n,i),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ch(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Xa(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class to extends Ot{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=me(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,d=new j,f=new R,p=new R,_=new R;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let y=0;y<=e;y++){const x=n+y*h*i,v=Math.sin(x),A=Math.cos(x);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*v,u.y=t[M].y,u.z=t[M].x*A,o.push(u.x,u.y,u.z),d.x=y/e,d.y=M/(t.length-1),a.push(d.x,d.y);const w=l[3*M+0]*v,C=l[3*M+1],b=l[3*M+0]*A;c.push(w,C,b)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const v=x+y*t.length,A=v,M=v+t.length,w=v+t.length+1,C=v+1;r.push(A,M,C),r.push(w,C,M)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.points,t.segments,t.phiStart,t.phiLength)}}class Ya extends to{constructor(t=1,e=1,n=4,i=8){const r=new Fr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Ya(t.radius,t.length,t.capSegments,t.radialSegments)}}class qa extends Ot{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new R,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zs extends Ot{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function y(){const v=new R,A=new R;let M=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,L=S*(e-t)+t;for(let F=0;F<=i;F++){const D=F/i,k=D*l+a,X=Math.sin(k),Q=Math.cos(k);A.x=L*X,A.y=-S*n+g,A.z=L*Q,u.push(A.x,A.y,A.z),v.set(X,w,Q).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-S),b.push(p++)}_.push(b)}for(let C=0;C<i;C++)for(let b=0;b<r;b++){const S=_[b][C],L=_[b+1][C],F=_[b+1][C+1],D=_[b][C+1];h.push(S,L,D),h.push(L,F,D),M+=6}c.addGroup(m,M,0),m+=M}function x(v){const A=p,M=new j,w=new R;let C=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),p++;const L=p;for(let F=0;F<=i;F++){const k=F/i*l+a,X=Math.cos(k),Q=Math.sin(k);w.x=b*Q,w.y=g*S,w.z=b*X,u.push(w.x,w.y,w.z),d.push(0,S,0),M.x=X*.5+.5,M.y=Q*.5*S+.5,f.push(M.x,M.y),p++}for(let F=0;F<i;F++){const D=A+F,k=L+F;v===!0?h.push(k,k+1,D):h.push(k+1,k,D),C+=3}c.addGroup(m,C,v===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $a extends Zs{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new $a(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vi extends Ot{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new R,v=new R,A=new R;for(let M=0;M<e.length;M+=3)f(e[M+0],x),f(e[M+1],v),f(e[M+2],A),l(x,v,A,y)}function l(y,x,v,A){const M=A+1,w=[];for(let C=0;C<=M;C++){w[C]=[];const b=y.clone().lerp(v,C/M),S=x.clone().lerp(v,C/M),L=M-C;for(let F=0;F<=L;F++)F===0&&C===M?w[C][F]=b:w[C][F]=b.clone().lerp(S,F/L)}for(let C=0;C<M;C++)for(let b=0;b<2*(M-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(w[C][S+1]),d(w[C+1][S]),d(w[C][S])):(d(w[C][S+1]),d(w[C+1][S+1]),d(w[C+1][S]))}}function c(y){const x=new R;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const y=new R;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;o.push(v,1-A)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],A=o[y+4],M=Math.max(x,v,A),w=Math.min(x,v,A);M>.9&&w<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function p(){const y=new R,x=new R,v=new R,A=new R,M=new j,w=new j,C=new j;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),M.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),A.copy(y).add(x).add(v).divideScalar(3);const L=g(A);_(M,S+0,y,L),_(w,S+2,x,L),_(C,S+4,v,L)}}function _(y,x,v,A){A<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.vertices,t.indices,t.radius,t.details)}}class Za extends vi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Za(t.radius,t.detail)}}const Vo=new R,Wo=new R,Wl=new R,Xo=new en;class Kp extends Ot{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(qi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=Xo;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Xo.getNormal(Wl),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=u[y],A=u[x],M=Xo[h[y]],w=Xo[h[x]],C=`${v}_${A}`,b=`${A}_${v}`;b in d&&d[b]?(Wl.dot(d[b].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(w.x,w.y,w.z)),d[b]=null):C in d||(d[C]={index0:c[y],index1:c[x],normal:Wl.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];Vo.fromBufferAttribute(a,_),Wo.fromBufferAttribute(a,g),f.push(Vo.x,Vo.y,Vo.z),f.push(Wo.x,Wo.y,Wo.z)}this.setAttribute("position",new yt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $i extends Fr{constructor(t){super(t),this.uuid=rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Fr().fromJSON(i))}return this}}const wM={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Jp(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=RM(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let p=e;p<i;p+=e)u=s[p],d=s[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Br(r,o,e,a,l,f,0),o}};function Jp(s,t,e,n,i){let r,o;if(i===kM(s,t,e,n)>0)for(r=t;r<e;r+=n)o=hd(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=hd(r,s[r],s[r+1],o);return o&&Ka(o,o.next)&&(kr(o),o=o.next),o}function Qi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ka(e,e.next)||de(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Br(s,t,e,n,i,r,o){if(!s)return;!o&&r&&UM(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?EM(s,n,i,r):AM(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),kr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=TM(Qi(s),t,e),Br(s,t,e,n,i,r,2)):o===2&&CM(s,t,e,n,i,r):Br(Qi(s),t,e,n,i,r,1);break}}}function AM(s){const t=s.prev,e=s,n=s.next;if(de(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Us(i,a,r,l,o,c,p.x,p.y)&&de(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function EM(s,t,e,n){const i=s.prev,r=s,o=s.next;if(de(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Oc(f,p,t,e,n),y=Oc(_,g,t,e,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=m&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Us(a,h,l,u,c,d,x.x,x.y)&&de(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Us(a,h,l,u,c,d,v.x,v.y)&&de(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Us(a,h,l,u,c,d,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Us(a,h,l,u,c,d,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function TM(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ka(i,r)&&jp(i,n,n.next,r)&&zr(i,r)&&zr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),kr(n),kr(n.next),n=s=r),n=n.next}while(n!==s);return Qi(n)}function CM(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&FM(o,a)){let l=Qp(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Br(o,t,e,n,i,r,0),Br(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function RM(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Jp(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(OM(c));for(i.sort(IM),r=0;r<i.length;r++)e=PM(i[r],e);return e}function IM(s,t){return s.x-t.x}function PM(s,t){const e=LM(s,t);if(!e)return t;const n=Qp(e,s);return Qi(n,n.next),Qi(e,e.next)}function LM(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Us(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),zr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&DM(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function DM(s,t){return de(s.prev,s,t.prev)<0&&de(t.next,s,s.next)<0}function UM(s,t,e,n){let i=s;do i.z===0&&(i.z=Oc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,NM(i)}function NM(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Oc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function OM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Us(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function FM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!BM(s,t)&&(zr(s,t)&&zr(t,s)&&zM(s,t)&&(de(s.prev,s,t.prev)||de(s,t.prev,t))||Ka(s,t)&&de(s.prev,s,s.next)>0&&de(t.prev,t,t.next)>0)}function de(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ka(s,t){return s.x===t.x&&s.y===t.y}function jp(s,t,e,n){const i=qo(de(s,t,e)),r=qo(de(s,t,n)),o=qo(de(e,n,s)),a=qo(de(e,n,t));return!!(i!==r&&o!==a||i===0&&Yo(s,e,t)||r===0&&Yo(s,n,t)||o===0&&Yo(e,s,n)||a===0&&Yo(e,t,n))}function Yo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function qo(s){return s>0?1:s<0?-1:0}function BM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&jp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function zr(s,t){return de(s.prev,s,s.next)<0?de(s,t,s.next)>=0&&de(s,s.prev,t)>=0:de(s,t,s.prev)<0||de(s,s.next,t)<0}function zM(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Qp(s,t){const e=new Fc(s.i,s.x,s.y),n=new Fc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hd(s,t,e,n){const i=new Fc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kM(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Dn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];ud(t),dd(n,t);let o=t.length;e.forEach(ud);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,dd(n,e[l]);const a=wM.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ud(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function dd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ja extends Ot{constructor(t=new $i([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new yt(i,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:GM;let x,v=!1,A,M,w,C;m&&(x=m.getSpacedPoints(h),v=!0,d=!1,A=m.computeFrenetFrames(h,!1),M=new R,w=new R,C=new R),d||(g=0,f=0,p=0,_=0);const b=a.extractPoints(c);let S=b.shape;const L=b.holes;if(!Dn.isClockWise(S)){S=S.reverse();for(let B=0,tt=L.length;B<tt;B++){const Z=L[B];Dn.isClockWise(Z)&&(L[B]=Z.reverse())}}const D=Dn.triangulateShape(S,L),k=S;for(let B=0,tt=L.length;B<tt;B++){const Z=L[B];S=S.concat(Z)}function X(B,tt,Z){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(tt,Z)}const Q=S.length,rt=D.length;function W(B,tt,Z){let ht,nt,xt;const Rt=B.x-tt.x,P=B.y-tt.y,E=Z.x-B.x,z=Z.y-B.y,K=Rt*Rt+P*P,it=Rt*z-P*E;if(Math.abs(it)>Number.EPSILON){const et=Math.sqrt(K),Et=Math.sqrt(E*E+z*z),pt=tt.x-P/et,ft=tt.y+Rt/et,Ft=Z.x-z/Et,ut=Z.y+E/Et,Ct=((Ft-pt)*z-(ut-ft)*E)/(Rt*z-P*E);ht=pt+Rt*Ct-B.x,nt=ft+P*Ct-B.y;const $t=ht*ht+nt*nt;if($t<=2)return new j(ht,nt);xt=Math.sqrt($t/2)}else{let et=!1;Rt>Number.EPSILON?E>Number.EPSILON&&(et=!0):Rt<-Number.EPSILON?E<-Number.EPSILON&&(et=!0):Math.sign(P)===Math.sign(z)&&(et=!0),et?(ht=-P,nt=Rt,xt=Math.sqrt(K)):(ht=Rt,nt=P,xt=Math.sqrt(K/2))}return new j(ht/xt,nt/xt)}const at=[];for(let B=0,tt=k.length,Z=tt-1,ht=B+1;B<tt;B++,Z++,ht++)Z===tt&&(Z=0),ht===tt&&(ht=0),at[B]=W(k[B],k[Z],k[ht]);const q=[];let mt,Ut=at.concat();for(let B=0,tt=L.length;B<tt;B++){const Z=L[B];mt=[];for(let ht=0,nt=Z.length,xt=nt-1,Rt=ht+1;ht<nt;ht++,xt++,Rt++)xt===nt&&(xt=0),Rt===nt&&(Rt=0),mt[ht]=W(Z[ht],Z[xt],Z[Rt]);q.push(mt),Ut=Ut.concat(mt)}for(let B=0;B<g;B++){const tt=B/g,Z=f*Math.cos(tt*Math.PI/2),ht=p*Math.sin(tt*Math.PI/2)+_;for(let nt=0,xt=k.length;nt<xt;nt++){const Rt=X(k[nt],at[nt],ht);lt(Rt.x,Rt.y,-Z)}for(let nt=0,xt=L.length;nt<xt;nt++){const Rt=L[nt];mt=q[nt];for(let P=0,E=Rt.length;P<E;P++){const z=X(Rt[P],mt[P],ht);lt(z.x,z.y,-Z)}}}const At=p+_;for(let B=0;B<Q;B++){const tt=d?X(S[B],Ut[B],At):S[B];v?(w.copy(A.normals[0]).multiplyScalar(tt.x),M.copy(A.binormals[0]).multiplyScalar(tt.y),C.copy(x[0]).add(w).add(M),lt(C.x,C.y,C.z)):lt(tt.x,tt.y,0)}for(let B=1;B<=h;B++)for(let tt=0;tt<Q;tt++){const Z=d?X(S[tt],Ut[tt],At):S[tt];v?(w.copy(A.normals[B]).multiplyScalar(Z.x),M.copy(A.binormals[B]).multiplyScalar(Z.y),C.copy(x[B]).add(w).add(M),lt(C.x,C.y,C.z)):lt(Z.x,Z.y,u/h*B)}for(let B=g-1;B>=0;B--){const tt=B/g,Z=f*Math.cos(tt*Math.PI/2),ht=p*Math.sin(tt*Math.PI/2)+_;for(let nt=0,xt=k.length;nt<xt;nt++){const Rt=X(k[nt],at[nt],ht);lt(Rt.x,Rt.y,u+Z)}for(let nt=0,xt=L.length;nt<xt;nt++){const Rt=L[nt];mt=q[nt];for(let P=0,E=Rt.length;P<E;P++){const z=X(Rt[P],mt[P],ht);v?lt(z.x,z.y+x[h-1].y,x[h-1].x+Z):lt(z.x,z.y,u+Z)}}}Y(),ot();function Y(){const B=i.length/3;if(d){let tt=0,Z=Q*tt;for(let ht=0;ht<rt;ht++){const nt=D[ht];Pt(nt[2]+Z,nt[1]+Z,nt[0]+Z)}tt=h+g*2,Z=Q*tt;for(let ht=0;ht<rt;ht++){const nt=D[ht];Pt(nt[0]+Z,nt[1]+Z,nt[2]+Z)}}else{for(let tt=0;tt<rt;tt++){const Z=D[tt];Pt(Z[2],Z[1],Z[0])}for(let tt=0;tt<rt;tt++){const Z=D[tt];Pt(Z[0]+Q*h,Z[1]+Q*h,Z[2]+Q*h)}}n.addGroup(B,i.length/3-B,0)}function ot(){const B=i.length/3;let tt=0;vt(k,tt),tt+=k.length;for(let Z=0,ht=L.length;Z<ht;Z++){const nt=L[Z];vt(nt,tt),tt+=nt.length}n.addGroup(B,i.length/3-B,1)}function vt(B,tt){let Z=B.length;for(;--Z>=0;){const ht=Z;let nt=Z-1;nt<0&&(nt=B.length-1);for(let xt=0,Rt=h+g*2;xt<Rt;xt++){const P=Q*xt,E=Q*(xt+1),z=tt+ht+P,K=tt+nt+P,it=tt+nt+E,et=tt+ht+E;Nt(z,K,it,et)}}}function lt(B,tt,Z){l.push(B),l.push(tt),l.push(Z)}function Pt(B,tt,Z){U(B),U(tt),U(Z);const ht=i.length/3,nt=y.generateTopUV(n,i,ht-3,ht-2,ht-1);bt(nt[0]),bt(nt[1]),bt(nt[2])}function Nt(B,tt,Z,ht){U(B),U(tt),U(ht),U(tt),U(Z),U(ht);const nt=i.length/3,xt=y.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);bt(xt[0]),bt(xt[1]),bt(xt[3]),bt(xt[1]),bt(xt[2]),bt(xt[3])}function U(B){i.push(l[B*3+0]),i.push(l[B*3+1]),i.push(l[B*3+2])}function bt(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return HM(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new va[i.type]().fromJSON(i)),new Ja(n,t.options)}}const GM={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new j(r,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-u),new j(d,1-p),new j(_,1-m)]:[new j(a,1-l),new j(h,1-u),new j(f,1-p),new j(g,1-m)]}};function HM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ja extends vi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ja(t.radius,t.detail)}}class eo extends vi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new eo(t.radius,t.detail)}}class no extends Ot{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new R,p=new j;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,x=y,v=y+n+1,A=y+n+2,M=y+1;a.push(x,v,M),a.push(v,A,M)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qa extends Ot{constructor(t=new $i([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new yt(i,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Dn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];Dn.isClockWise(y)===!0&&(p[g]=y.reverse())}const _=Dn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){const y=_[g],x=y[0]+u,v=y[1]+u,A=y[2]+u;n.push(x,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return VM(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Qa(n,t.curveSegments)}}function VM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class io extends Ot{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,d=new R,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const M=A/e;u.x=-t*Math.cos(i+M*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+M*r)*Math.sin(o+x*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(M+v,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=h[m][y+1],v=h[m][y],A=h[m+1][y],M=h[m+1][y+1];(m!==0||o>0)&&f.push(x,v,M),(m!==n-1||l<Math.PI)&&f.push(v,A,M)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tl extends vi{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}class el extends Ot{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,y=(i+1)*f+p;o.push(_,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nl extends Ot{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new R,d=new R,f=new R,p=new R,_=new R,g=new R,m=new R;for(let x=0;x<=n;++x){const v=x/n*r*Math.PI*2;y(v,r,o,t,f),y(v+.01,r,o,t,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let A=0;A<=i;++A){const M=A/i*Math.PI*2,w=-e*Math.cos(M),C=e*Math.sin(M);u.x=f.x+(w*m.x+C*_.x),u.y=f.y+(w*m.y+C*_.y),u.z=f.z+(w*m.z+C*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(A/i)}}for(let x=1;x<=n;x++)for(let v=1;v<=i;v++){const A=(i+1)*(x-1)+(v-1),M=(i+1)*x+(v-1),w=(i+1)*x+v,C=(i+1)*(x-1)+v;a.push(A,M,C),a.push(M,w,C)}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2));function y(x,v,A,M,w){const C=Math.cos(x),b=Math.sin(x),S=A/v*x,L=Math.cos(S);w.x=M*(2+L)*.5*C,w.y=M*(2+L)*b*.5,w.z=M*Math.sin(S)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class il extends Ot{constructor(t=new Th(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new j;let h=new R;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function _(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),y(),m()}function g(x){h=t.getPointAt(x/e,h);const v=o.normals[x],A=o.binormals[x];for(let M=0;M<=i;M++){const w=M/i*Math.PI*2,C=Math.sin(w),b=-Math.cos(w);l.x=b*v.x+C*A.x,l.y=b*v.y+C*A.y,l.z=b*v.z+C*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let v=1;v<=i;v++){const A=(i+1)*(x-1)+(v-1),M=(i+1)*x+(v-1),w=(i+1)*x+v,C=(i+1)*(x-1)+v;p.push(A,M,C),p.push(M,w,C)}}function y(){for(let x=0;x<=e;x++)for(let v=0;v<=i;v++)c.x=x/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new il(new va[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class tm extends Ot{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new R,r=new R;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),y=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),fd(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),fd(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new yt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function fd(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var pd=Object.freeze({__proto__:null,BoxGeometry:yi,CapsuleGeometry:Ya,CircleGeometry:qa,ConeGeometry:$a,CylinderGeometry:Zs,DodecahedronGeometry:Za,EdgesGeometry:Kp,ExtrudeGeometry:Ja,IcosahedronGeometry:ja,LatheGeometry:to,OctahedronGeometry:eo,PlaneGeometry:ns,PolyhedronGeometry:vi,RingGeometry:no,ShapeGeometry:Qa,SphereGeometry:io,TetrahedronGeometry:tl,TorusGeometry:el,TorusKnotGeometry:nl,TubeGeometry:il,WireframeGeometry:tm});class em extends Fe{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class nm extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rh extends Fe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class im extends Rh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ih extends Fe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sm extends Fe{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class rm extends Fe{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class In extends Fe{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class om extends Fe{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class am extends Be{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Vi(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Bc(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Ph(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function WM(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<e||p>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=Vi(u,c.times.constructor),c.values=Vi(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function XM(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const m=h,y=u-h;_=a.values.slice(m,y)}else if(r>=a.times[p]){const m=p*u+h,y=m+u-h;_=a.values.slice(m,y)}else{const m=a.createInterpolant(),y=h,x=u-h;m.evaluate(r),_=m.resultBuffer.slice(y,x)}l==="quaternion"&&new Xe().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const y=m*f+d;if(l==="quaternion")Xe.multiplyQuaternionsFlat(c.values,y,_,0,c.values,y);else{const x=f-d*2;for(let v=0;v<x;++v)c.values[y+v]-=_[v]}}}return s.blendMode=lh,s}const YM={convertArray:Vi,isTypedArray:lm,getKeyframeOrder:cm,sortedArray:Bc,flattenJSON:Ph,subclip:WM,makeClipAdditive:XM};class so{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hm extends so{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ki,endingEnd:ki}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gi:r=t,a=2*e-n;break;case Ir:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gi:o=t,l=2*n-e;break;case Ir:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*_+.5*p,v=f*g-f*_;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+y*o[c+A]+x*o[l+A]+v*o[u+A];return r}}class Lh extends so{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class um extends so{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class An{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vi(e,this.TimeBufferType),this.values=Vi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vi(t.times,Array),values:Vi(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case Rr:e=this.InterpolantFactoryMethodLinear;break;case ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&lm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ha,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Rr;class is extends An{}is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Cr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class Dh extends An{}Dh.prototype.ValueTypeName="color";class Gr extends An{}Gr.prototype.ValueTypeName="number";class dm extends so{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Xe.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ks extends An{InterpolantFactoryMethodLinear(t){return new dm(this.times,this.values,this.getValueSize(),t)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.DefaultInterpolation=Rr;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends An{}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Cr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends An{}Hr.prototype.ValueTypeName="vector";class Vr{constructor(t="",e=-1,n=[],i=Ua){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push($M(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(An.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=cm(l);l=Bc(l,1,h),c=Bc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Gr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const g=[],m=[];Ph(f,g,m,p),g.length!==0&&_.push(new u(d,g,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const x=d[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new Gr(".morphTargetInfluence["+_+"]",g,m))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(Hr,f+".position",d,"pos",i),n(Ks,f+".quaternion",d,"rot",i),n(Hr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gr;case"vector":case"vector2":case"vector3":case"vector4":return Hr;case"color":return Dh;case"quaternion":return Ks;case"bool":case"boolean":return is;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $M(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=qM(s.type);if(s.times===void 0){const e=[],n=[];Ph(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const $n={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Uh{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const fm=new Uh;class Ke{constructor(t){this.manager=t!==void 0?t:fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ke.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class ZM extends Error{constructor(t,e){super(t),this.response=e}}class ei extends Ke{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=$n.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Wn[t]!==void 0){Wn[t].push({onLoad:e,onProgress:n,onError:i});return}Wn[t]=[],Wn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Wn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){y();function y(){u.read().then(({done:x,value:v})=>{if(x)m.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let M=0,w=h.length;M<w;M++){const C=h[M];C.onProgress&&C.onProgress(A)}m.enqueue(v),y()}})}}});return new Response(g)}else throw new ZM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{$n.add(t,c);const h=Wn[t];delete Wn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Wn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Wn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class KM extends Ke{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new ei(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Vr.parse(t[n]);e.push(i)}return e}}class JM extends Ke{constructor(t){super(t)}load(t,e,n,i){const r=this,o=[],a=new Wa,l=new ei(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){const f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=ue),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=ue),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}}class Wr extends Ke{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=$n.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Or("img");function l(){h(),$n.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class jM extends Ke{constructor(t){super(t)}load(t,e,n,i){const r=new Jr;r.colorSpace=cn;const o=new Wr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class QM extends Ke{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new mn,a=new ei(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:dn,o.wrapT=c.wrapT!==void 0?c.wrapT:dn,o.magFilter=c.magFilter!==void 0?c.magFilter:ue,o.minFilter=c.minFilter!==void 0?c.minFilter:ue,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=$e),c.mipmapCount===1&&(o.minFilter=ue),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class tS extends Ke{constructor(t){super(t)}load(t,e,n,i){const r=new ge,o=new Wr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Mi extends Jt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class pm extends Mi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xl=new It,md=new R,gd=new R;class Nh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eS extends Nh{constructor(){super(new Ae(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ks*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class mm extends Mi{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eS}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const _d=new It,hr=new R,Yl=new R;class nS extends Nh{constructor(){super(new Ae(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),Yl.copy(n.position),Yl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yl),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),_d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d)}}class gm extends Mi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class iS extends Nh{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oh extends Mi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new iS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Fh extends Mi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _m extends Mi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class xm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new R)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class ym extends Mi{constructor(t=new xm,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class sl extends Ke{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,o=new ei(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=sl.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new ct().setHex(o.value);break;case"v2":i.uniforms[r].value=new j().fromArray(o.value);break;case"v3":i.uniforms[r].value=new R().fromArray(o.value);break;case"v4":i.uniforms[r].value=new ie().fromArray(o.value);break;case"m3":i.uniforms[r].value=new Bt().fromArray(o.value);break;case"m4":i.uniforms[r].value=new It().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new j().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new j().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:em,SpriteMaterial:vh,RawShaderMaterial:nm,ShaderMaterial:gn,PointsMaterial:Sh,MeshPhysicalMaterial:im,MeshStandardMaterial:Rh,MeshPhongMaterial:Ih,MeshToonMaterial:sm,MeshNormalMaterial:rm,MeshLambertMaterial:In,MeshDepthMaterial:_h,MeshDistanceMaterial:xh,MeshBasicMaterial:nn,MeshMatcapMaterial:om,LineDashedMaterial:am,LineBasicMaterial:Be,Material:Fe};return new e[t]}}class zc{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class vm extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Mm extends Ke{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new ei(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),y=Ls(g.type,m),x=new Ha(y,g.stride);return x.uuid=g.uuid,e[p]=x,x}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=t.isInstancedBufferGeometry?new vm:new Ot,a=t.data.index;if(a!==void 0){const f=Ls(a.type,a.array);o.setIndex(new qt(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let _;if(p.isInterleavedBufferAttribute){const g=i(t.data,p.data);_=new ji(g,p.itemSize,p.offset,p.normalized)}else{const g=Ls(p.type,p.array),m=p.isInstancedBufferAttribute?Hs:qt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(f,_)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],_=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let x;if(y.isInterleavedBufferAttribute){const v=i(t.data,y.data);x=new ji(v,y.itemSize,y.offset,y.normalized)}else{const v=Ls(y.type,y.array);x=new qt(v,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),_.push(x)}o.morphAttributes[f]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const _=u[f];o.addGroup(_.start,_.count,_.materialIndex)}const d=t.data.boundingSphere;if(d!==void 0){const f=new R;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new Oe(f,d.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}class sS extends Ke{constructor(t){super(t)}load(t,e,n,i){const r=this,o=this.path===""?zc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new ei(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?zc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new ei(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(t,e),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),e!==void 0){let u=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new $i().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new Va().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Mm;for(let r=0,o=t.length;r<o;r++){let a;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in pd?a=pd[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new sl;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=Vr.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:Ls(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new Uh(e);r=new Wr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const u=t[c],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new mn(m.data,m.width,m.height)))}i[u.uuid]=new Hi(f)}else{const f=a(u.url);i[u.uuid]=new Hi(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:Ls(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new Wr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const l=t[o],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new mn(p.data,p.width,p.height)))}n[l.uuid]=new Hi(h)}else{const h=await r(l.url);n[l.uuid]=new Hi(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=e[a.image],c=l.data;let h;Array.isArray(c)?(h=new Jr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new mn:h=new ge,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,rS)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],xd),h.wrapT=n(a.wrap[1],xd)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,yd)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,yd)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new yh,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new ct(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Ga(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Qr(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Ae(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new za(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new Fh(t.color,t.intensity);break;case"DirectionalLight":o=new Oh(t.color,t.intensity);break;case"PointLight":o=new gm(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new _m(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new mm(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":o=new pm(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new ym().fromJSON(t);break;case"SkinnedMesh":h=a(t.geometry),u=l(t.material),o=new kp(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=l(t.material),o=new le(h,u);break;case"InstancedMesh":h=a(t.geometry),u=l(t.material);const d=t.count,f=t.instanceMatrix,p=t.instanceColor;o=new Gp(h,u,d),o.instanceMatrix=new Hs(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new Hs(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=l(t.material),o=new Hp(t.maxGeometryCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(_=>{const g=new Ye;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new Oe;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxGeometryCount=t.maxGeometryCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=c(t.matricesTexture.uuid);break;case"LOD":o=new zp;break;case"Line":o=new ti(a(t.geometry),l(t.material));break;case"LineLoop":o=new Vp(a(t.geometry),l(t.material));break;case"LineSegments":o=new Fn(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new Wp(a(t.geometry),l(t.material));break;case"Sprite":o=new Bp(l(t.material));break;case"Group":o=new sn;break;case"Bone":o=new Mh;break;default:o=new Jt}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const d=t.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){const d=t.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const d=t.levels;for(let f=0;f<d.length;f++){const p=d[f],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const rS={UVMapping:Da,CubeReflectionMapping:jn,CubeRefractionMapping:_i,EquirectangularReflectionMapping:Ar,EquirectangularRefractionMapping:Er,CubeUVReflectionMapping:Xs},xd={RepeatWrapping:Mn,ClampToEdgeWrapping:dn,MirroredRepeatWrapping:Tr},yd={NearestFilter:Ee,NearestMipmapNearestFilter:Qc,NearestMipmapLinearFilter:Ps,LinearFilter:ue,LinearMipmapNearestFilter:xr,LinearMipmapLinearFilter:$e};class oS extends Ke{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=$n.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $n.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),$n.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});$n.add(t,l),r.manager.itemStart(t)}}let $o;class Bh{static getContext(){return $o===void 0&&($o=new(window.AudioContext||window.webkitAudioContext)),$o}static setContext(t){$o=t}}class aS extends Ke{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new ei(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0);Bh.getContext().decodeAudioData(c,function(u){e(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(t)}}}const vd=new It,Md=new It,Ii=new It;class lS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ae,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ae,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Ii.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(qi*e.fov*.5)/e.zoom;let a,l;Md.elements[12]=-i,vd.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,Ii.elements[0]=2*e.near/(l-a),Ii.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Ii),a=-o*e.aspect-r,l=o*e.aspect-r,Ii.elements[0]=2*e.near/(l-a),Ii.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Ii)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Md),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(vd)}}class Sm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Sd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Sd(){return(typeof performance>"u"?Date:performance).now()}const Pi=new R,bd=new Xe,cS=new R,Li=new R;class hS extends Jt{constructor(){super(),this.type="AudioListener",this.context=Bh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Sm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Pi,bd,cS),Li.set(0,0,-1).applyQuaternion(bd),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Pi.x,i),e.positionY.linearRampToValueAtTime(Pi.y,i),e.positionZ.linearRampToValueAtTime(Pi.z,i),e.forwardX.linearRampToValueAtTime(Li.x,i),e.forwardY.linearRampToValueAtTime(Li.y,i),e.forwardZ.linearRampToValueAtTime(Li.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Pi.x,Pi.y,Pi.z),e.setOrientation(Li.x,Li.y,Li.z,n.x,n.y,n.z)}}class bm extends Jt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Di=new R,wd=new Xe,uS=new R,Ui=new R;class dS extends bm{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Di,wd,uS),Ui.set(0,0,1).applyQuaternion(wd);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Di.x,n),e.positionY.linearRampToValueAtTime(Di.y,n),e.positionZ.linearRampToValueAtTime(Di.z,n),e.orientationX.linearRampToValueAtTime(Ui.x,n),e.orientationY.linearRampToValueAtTime(Ui.y,n),e.orientationZ.linearRampToValueAtTime(Ui.z,n)}else e.setPosition(Di.x,Di.y,Di.z),e.setOrientation(Ui.x,Ui.y,Ui.z)}}class fS{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class wm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Xe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;Xe.multiplyQuaternionsFlat(t,o,t,e,t,n),Xe.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const zh="\\[\\]\\.:\\/",pS=new RegExp("["+zh+"]","g"),kh="[^"+zh+"]",mS="[^"+zh.replace("\\.","")+"]",gS=/((?:WC+[\/:])*)/.source.replace("WC",kh),_S=/(WCOD+)?/.source.replace("WCOD",mS),xS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),yS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),vS=new RegExp("^"+gS+_S+xS+yS+"$"),MS=["material","materials","bones","map"];class SS{constructor(t,e,n){const i=n||Kt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Kt{constructor(t,e,n){this.path=e,this.parsedPath=n||Kt.parseTrackName(e),this.node=Kt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Kt.Composite(t,e,n):new Kt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pS,"")}static parseTrackName(t){const e=vS.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);MS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Kt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Kt.Composite=SS;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bS{constructor(){this.isAnimationObjectGroup=!0,this.uuid=rn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(d);for(let _=0,g=o;_!==g;++_)r[_].push(new Kt(d,n[_],i[_]))}else if(p<c){a=t[p];const _=--c,g=t[_];e[g.uuid]=p,t[p]=g,e[f]=_,t[_]=d;for(let m=0,y=o;m!==y;++m){const x=r[m],v=x[_];let A=x[p];x[p]=v,A===void 0&&(A=new Kt(d,n[m],i[m])),x[_]=A}}else t[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let f=0,p=i;f!==p;++f){const _=n[f],g=_[u],m=_[h];_[h]=g,_[u]=m}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){const d=--r,f=t[d],p=--o,_=t[p];e[f.uuid]=u,t[u]=f,e[_.uuid]=d,t[d]=_,t.pop();for(let g=0,m=i;g!==m;++g){const y=n[g],x=y[d],v=y[p];y[u]=x,y[d]=v,y.pop()}}else{const d=--o,f=t[d];d>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let d=h,f=l.length;d!==f;++d){const p=l[d];u[d]=new Kt(p,t,e)}return u}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=t[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class Am{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:ki,endingEnd:ki};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ap,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case lh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ua:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===lp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===op){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Gi,i.endingEnd=Gi):(t?i.endingStart=this.zeroSlopeAtStart?Gi:ki:i.endingStart=Ir,e?i.endingEnd=this.zeroSlopeAtEnd?Gi:ki:i.endingEnd=Ir)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const wS=new Float32Array(1);class AS extends ni{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;p=new wm(Kt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Lh(new Float32Array(2),new Float32Array(2),1,wS),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?Vr.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ua),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Am(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Vr.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Gh{constructor(t){this.value=t}clone(){return new Gh(this.value.clone===void 0?this.value:this.value.clone())}}let ES=0;class TS extends ni{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:ES++}),this.name="",this.usage=Ur,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class CS extends Ha{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class RS{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Ad=new It;class Em{constructor(t,e,n=0,i=1/0){this.ray=new qs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ad.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(t,e=!0,n=[]){return kc(t,this,n,e),n.sort(Ed),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)kc(t[i],this,n,e);return n.sort(Ed),n}}function Ed(s,t){return s.distance-t.distance}function kc(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)kc(i[r],t,e,!0)}}class IS{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PS{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const Td=new j;class LS{constructor(t=new j(1/0,1/0),e=new j(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Td.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Td).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cd=new R,Zo=new R;class DS{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Cd.subVectors(t,this.start),Zo.subVectors(this.end,this.start);const n=Zo.dot(Zo);let r=Zo.dot(Cd)/n;return e&&(r=me(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Rd=new R;class US extends Jt{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Ot,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new yt(i,3));const r=new Be({fog:!1,toneMapped:!1});this.cone=new Fn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Rd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Rd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ui=new R,Ko=new It,ql=new It;class NS extends Fn{constructor(t){const e=Tm(t),n=new Ot,i=[],r=[],o=new ct(0,0,1),a=new ct(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new yt(i,3)),n.setAttribute("color",new yt(r,3));const l=new Be({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");ql.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(Ko.multiplyMatrices(ql,a.matrixWorld),ui.setFromMatrixPosition(Ko),i.setXYZ(o,ui.x,ui.y,ui.z),Ko.multiplyMatrices(ql,a.parent.matrixWorld),ui.setFromMatrixPosition(Ko),i.setXYZ(o+1,ui.x,ui.y,ui.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Tm(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Tm(s.children[e]));return t}class OS extends le{constructor(t,e,n){const i=new io(e,4,2),r=new nn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const FS=new R,Id=new ct,Pd=new ct;class BS extends Jt{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new eo(e);i.rotateY(Math.PI*.5),this.material=new nn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new qt(o,3)),this.add(new le(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Id.copy(this.light.color),Pd.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?Id:Pd;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(FS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class zS extends Fn{constructor(t=10,e=10,n=4473924,i=8947848){n=new ct(n),i=new ct(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Ot;h.setAttribute("position",new yt(l,3)),h.setAttribute("color",new yt(c,3));const u=new Be({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class kS extends Fn{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new ct(r),o=new ct(o);const a=[],l=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,p=Math.cos(d)*t;a.push(0,0,0),a.push(f,0,p);const _=u&1?r:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:o,f=t-t/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;a.push(g,0,m),l.push(d.r,d.g,d.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,a.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new Ot;c.setAttribute("position",new yt(a,3)),c.setAttribute("color",new yt(l,3));const h=new Be({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ld=new R,Jo=new R,Dd=new R;class GS extends Jt{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Ot;i.setAttribute("position",new yt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Be({fog:!1,toneMapped:!1});this.lightPlane=new ti(i,r),this.add(this.lightPlane),i=new Ot,i.setAttribute("position",new yt([0,0,0,0,0,1],3)),this.targetLine=new ti(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ld.setFromMatrixPosition(this.light.matrixWorld),Jo.setFromMatrixPosition(this.light.target.matrixWorld),Dd.subVectors(Jo,Ld),this.lightPlane.lookAt(Jo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Jo),this.targetLine.scale.z=Dd.length()}}const jo=new R,pe=new Ba;class HS extends Fn{constructor(t){const e=new Ot,n=new Be({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new yt(i,3)),e.setAttribute("color",new yt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new ct(16755200),h=new ct(16711680),u=new ct(43775),d=new ct(16777215),f=new ct(3355443);this.setColors(c,h,u,d,f)}setColors(t,e,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;pe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),xe("c",e,t,pe,0,0,-1),xe("t",e,t,pe,0,0,1),xe("n1",e,t,pe,-n,-i,-1),xe("n2",e,t,pe,n,-i,-1),xe("n3",e,t,pe,-n,i,-1),xe("n4",e,t,pe,n,i,-1),xe("f1",e,t,pe,-n,-i,1),xe("f2",e,t,pe,n,-i,1),xe("f3",e,t,pe,-n,i,1),xe("f4",e,t,pe,n,i,1),xe("u1",e,t,pe,n*.7,i*1.1,-1),xe("u2",e,t,pe,-n*.7,i*1.1,-1),xe("u3",e,t,pe,0,i*2,-1),xe("cf1",e,t,pe,-n,0,1),xe("cf2",e,t,pe,n,0,1),xe("cf3",e,t,pe,0,-i,1),xe("cf4",e,t,pe,0,i,1),xe("cn1",e,t,pe,-n,0,-1),xe("cn2",e,t,pe,n,0,-1),xe("cn3",e,t,pe,0,-i,-1),xe("cn4",e,t,pe,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function xe(s,t,e,n,i,r,o){jo.set(i,r,o).unproject(n);const a=t[s];if(a!==void 0){const l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],jo.x,jo.y,jo.z)}}const Qo=new Ye;class VS extends Fn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Ot;r.setIndex(new qt(n,1)),r.setAttribute("position",new qt(i,3)),super(r,new Be({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Qo.setFromObject(this.object),Qo.isEmpty())return;const e=Qo.min,n=Qo.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class WS extends Fn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ot;r.setIndex(new qt(n,1)),r.setAttribute("position",new yt(i,3)),super(r,new Be({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class XS extends ti{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ot;o.setAttribute("position",new yt(r,3)),o.computeBoundingSphere(),super(o,new Be({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ot;l.setAttribute("position",new yt(a,3)),l.computeBoundingSphere(),this.add(new le(l,new nn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Ud=new R;let ta,$l;class YS extends Jt{constructor(t=new R(0,0,1),e=new R(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",ta===void 0&&(ta=new Ot,ta.setAttribute("position",new yt([0,0,0,0,1,0],3)),$l=new Zs(0,.5,1,5,1),$l.translate(0,-.5,0)),this.position.copy(e),this.line=new ti(ta,new Be({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new le($l,new nn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ud.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ud,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class qS extends Fn{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ot;i.setAttribute("position",new yt(e,3)),i.setAttribute("color",new yt(n,3));const r=new Be({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new ct,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $S{constructor(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Fr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const y=[];for(let x=0,v=m.length;x<v;x++){const A=m[x],M=new $i;M.curves=A.curves,y.push(M)}return y}function n(m,y){const x=y.length;let v=!1;for(let A=x-1,M=0;M<x;A=M++){let w=y[A],C=y[M],b=C.x-w.x,S=C.y-w.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(w=y[M],b=-b,C=y[A],S=-S),m.y<w.y||m.y>C.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const L=S*(m.x-w.x)-b*(m.y-w.y);if(L===0)return!0;if(L<0)continue;v=!v}}else{if(m.y!==w.y)continue;if(C.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=C.x)return!0}}return v}const i=Dn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new $i,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],p=0,_;d[p]=void 0,f[p]=[];for(let m=0,y=r.length;m<y;m++)a=r[m],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&d[p]&&p++,d[p]={s:new $i,p:_},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:_[0]});if(!d[0])return e(r);if(d.length>1){let m=!1,y=0;for(let x=0,v=d.length;x<v;x++)u[x]=[];for(let x=0,v=d.length;x<v;x++){const A=f[x];for(let M=0;M<A.length;M++){const w=A[M];let C=!0;for(let b=0;b<d.length;b++)n(w.p,d[b].p)&&(x!==b&&y++,C?(C=!1,u[b].push(w)):m=!0);C&&u[x].push(w)}}y>0&&m===!1&&(f=u)}let g;for(let m=0,y=d.length;m<y;m++){l=d[m].s,c.push(l),g=f[m];for(let x=0,v=g.length;x<v;x++)l.holes.push(g[x].h)}return c}}class ZS extends bn{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);const KS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Yf,AddEquation:mi,AddOperation:Hf,AdditiveAnimationBlendMode:lh,AdditiveBlending:br,AgXToneMapping:$f,AlphaFormat:tp,AlwaysCompare:xp,AlwaysDepth:Nf,AlwaysStencilFunc:Pc,AmbientLight:Fh,AnimationAction:Am,AnimationClip:Vr,AnimationLoader:KM,AnimationMixer:AS,AnimationObjectGroup:bS,AnimationUtils:YM,ArcCurve:Xp,ArrayCamera:Np,ArrowHelper:YS,AttachedBindMode:sc,Audio:bm,AudioAnalyser:fS,AudioContext:Bh,AudioListener:hS,AudioLoader:aS,AxesHelper:qS,BackSide:We,BasicDepthPacking:cp,BasicShadowMap:pf,BatchedMesh:Hp,Bone:Mh,BooleanKeyframeTrack:is,Box2:LS,Box3:Ye,Box3Helper:WS,BoxGeometry:yi,BoxHelper:VS,BufferAttribute:qt,BufferGeometry:Ot,BufferGeometryLoader:Mm,ByteType:Jf,Cache:$n,Camera:Ba,CameraHelper:HS,CanvasTexture:gM,CapsuleGeometry:Ya,CatmullRomCurve3:Yp,CineonToneMapping:Xf,CircleGeometry:qa,ClampToEdgeWrapping:dn,Clock:Sm,Color:ct,ColorKeyframeTrack:Dh,ColorManagement:ne,CompressedArrayTexture:pM,CompressedCubeTexture:mM,CompressedTexture:Wa,CompressedTextureLoader:JM,ConeGeometry:$a,ConstantAlphaFactor:Lf,ConstantColorFactor:If,CubeCamera:Ep,CubeReflectionMapping:jn,CubeRefractionMapping:_i,CubeTexture:Jr,CubeTextureLoader:jM,CubeUVReflectionMapping:Xs,CubicBezierCurve:wh,CubicBezierCurve3:qp,CubicInterpolant:hm,CullFaceBack:ec,CullFaceFront:ff,CullFaceFrontBack:ig,CullFaceNone:df,Curve:wn,CurvePath:Zp,CustomBlending:gf,CustomToneMapping:qf,CylinderGeometry:Zs,Cylindrical:PS,Data3DTexture:uh,DataArrayTexture:Oa,DataTexture:mn,DataTextureLoader:QM,DataUtils:d0,DecrementStencilOp:pg,DecrementWrapStencilOp:gg,DefaultLoadingManager:fm,DepthFormat:Yi,DepthStencilFormat:zs,DepthTexture:gh,DetachedBindMode:Kf,DirectionalLight:Oh,DirectionalLightHelper:GS,DiscreteInterpolant:um,DisplayP3ColorSpace:Na,DodecahedronGeometry:Za,DoubleSide:Ce,DstAlphaFactor:Af,DstColorFactor:Tf,DynamicCopyUsage:Pg,DynamicDrawUsage:Ag,DynamicReadUsage:Cg,EdgesGeometry:Kp,EllipseCurve:Xa,EqualCompare:pp,EqualDepth:Ff,EqualStencilFunc:vg,EquirectangularReflectionMapping:Ar,EquirectangularRefractionMapping:Er,Euler:on,EventDispatcher:ni,ExtrudeGeometry:Ja,FileLoader:ei,Float16BufferAttribute:x0,Float32BufferAttribute:yt,FloatType:fn,Fog:Ga,FogExp2:Qr,FramebufferTexture:fM,FrontSide:Nn,Frustum:jr,GLBufferAttribute:RS,GLSL1:Dg,GLSL3:Lc,GreaterCompare:mp,GreaterDepth:zf,GreaterEqualCompare:_p,GreaterEqualDepth:Bf,GreaterEqualStencilFunc:wg,GreaterStencilFunc:Sg,GridHelper:zS,Group:sn,HalfFloatType:Zr,HemisphereLight:pm,HemisphereLightHelper:BS,IcosahedronGeometry:ja,ImageBitmapLoader:oS,ImageLoader:Wr,ImageUtils:Sp,IncrementStencilOp:fg,IncrementWrapStencilOp:mg,InstancedBufferAttribute:Hs,InstancedBufferGeometry:vm,InstancedInterleavedBuffer:CS,InstancedMesh:Gp,Int16BufferAttribute:g0,Int32BufferAttribute:_0,Int8BufferAttribute:f0,IntType:eh,InterleavedBuffer:Ha,InterleavedBufferAttribute:ji,Interpolant:so,InterpolateDiscrete:Cr,InterpolateLinear:Rr,InterpolateSmooth:ha,InvertStencilOp:_g,KeepStencilOp:Oi,KeyframeTrack:An,LOD:zp,LatheGeometry:to,Layers:Fa,LessCompare:fp,LessDepth:Of,LessEqualCompare:ch,LessEqualDepth:wr,LessEqualStencilFunc:Mg,LessStencilFunc:yg,Light:Mi,LightProbe:ym,Line:ti,Line3:DS,LineBasicMaterial:Be,LineCurve:Ah,LineCurve3:$p,LineDashedMaterial:am,LineLoop:Vp,LineSegments:Fn,LinearDisplayP3ColorSpace:Kr,LinearFilter:ue,LinearInterpolant:Lh,LinearMipMapLinearFilter:ag,LinearMipMapNearestFilter:og,LinearMipmapLinearFilter:$e,LinearMipmapNearestFilter:xr,LinearSRGBColorSpace:On,LinearToneMapping:Vf,LinearTransfer:Pr,Loader:Ke,LoaderUtils:zc,LoadingManager:Uh,LoopOnce:op,LoopPingPong:lp,LoopRepeat:ap,LuminanceAlphaFormat:ip,LuminanceFormat:np,MOUSE:eg,Material:Fe,MaterialLoader:sl,MathUtils:Kg,Matrix3:Bt,Matrix4:It,MaxEquation:vf,Mesh:le,MeshBasicMaterial:nn,MeshDepthMaterial:_h,MeshDistanceMaterial:xh,MeshLambertMaterial:In,MeshMatcapMaterial:om,MeshNormalMaterial:rm,MeshPhongMaterial:Ih,MeshPhysicalMaterial:im,MeshStandardMaterial:Rh,MeshToonMaterial:sm,MinEquation:yf,MirroredRepeatWrapping:Tr,MixOperation:Gf,MultiplyBlending:ic,MultiplyOperation:$r,NearestFilter:Ee,NearestMipMapLinearFilter:rg,NearestMipMapNearestFilter:sg,NearestMipmapLinearFilter:Ps,NearestMipmapNearestFilter:Qc,NeutralToneMapping:Zf,NeverCompare:dp,NeverDepth:Uf,NeverStencilFunc:xg,NoBlending:Jn,NoColorSpace:Xn,NoToneMapping:Ln,NormalAnimationBlendMode:Ua,NormalBlending:Xi,NotEqualCompare:gp,NotEqualDepth:kf,NotEqualStencilFunc:bg,NumberKeyframeTrack:Gr,Object3D:Jt,ObjectLoader:sS,ObjectSpaceNormalMap:up,OctahedronGeometry:eo,OneFactor:Sf,OneMinusConstantAlphaFactor:Df,OneMinusConstantColorFactor:Pf,OneMinusDstAlphaFactor:Ef,OneMinusDstColorFactor:Cf,OneMinusSrcAlphaFactor:_a,OneMinusSrcColorFactor:wf,OrthographicCamera:za,P3Primaries:Dr,PCFShadowMap:jc,PCFSoftShadowMap:mf,PMREMGenerator:Dc,Path:Fr,PerspectiveCamera:Ae,Plane:pi,PlaneGeometry:ns,PlaneHelper:XS,PointLight:gm,PointLightHelper:OS,Points:Wp,PointsMaterial:Sh,PolarGridHelper:kS,PolyhedronGeometry:vi,PositionalAudio:dS,PropertyBinding:Kt,PropertyMixer:wm,QuadraticBezierCurve:Eh,QuadraticBezierCurve3:Th,Quaternion:Xe,QuaternionKeyframeTrack:Ks,QuaternionLinearInterpolant:dm,RED_GREEN_RGTC2_Format:Rc,RED_RGTC1_Format:rp,REVISION:La,RGBADepthPacking:hp,RGBAFormat:Re,RGBAIntegerFormat:ah,RGBA_ASTC_10x10_Format:bc,RGBA_ASTC_10x5_Format:vc,RGBA_ASTC_10x6_Format:Mc,RGBA_ASTC_10x8_Format:Sc,RGBA_ASTC_12x10_Format:wc,RGBA_ASTC_12x12_Format:Ac,RGBA_ASTC_4x4_Format:dc,RGBA_ASTC_5x4_Format:fc,RGBA_ASTC_5x5_Format:pc,RGBA_ASTC_6x5_Format:mc,RGBA_ASTC_6x6_Format:gc,RGBA_ASTC_8x5_Format:_c,RGBA_ASTC_8x6_Format:xc,RGBA_ASTC_8x8_Format:yc,RGBA_BPTC_Format:ca,RGBA_ETC2_EAC_Format:uc,RGBA_PVRTC_2BPPV1_Format:lc,RGBA_PVRTC_4BPPV1_Format:ac,RGBA_S3TC_DXT1_Format:oa,RGBA_S3TC_DXT3_Format:aa,RGBA_S3TC_DXT5_Format:la,RGBFormat:ep,RGB_BPTC_SIGNED_Format:Ec,RGB_BPTC_UNSIGNED_Format:Tc,RGB_ETC1_Format:cc,RGB_ETC2_Format:hc,RGB_PVRTC_2BPPV1_Format:oc,RGB_PVRTC_4BPPV1_Format:rc,RGB_S3TC_DXT1_Format:ra,RGFormat:sp,RGIntegerFormat:oh,RawShaderMaterial:nm,Ray:qs,Raycaster:Em,Rec709Primaries:Lr,RectAreaLight:_m,RedFormat:sh,RedIntegerFormat:rh,ReinhardToneMapping:Wf,RenderTarget:bp,RepeatWrapping:Mn,ReplaceStencilOp:dg,ReverseSubtractEquation:xf,RingGeometry:no,SIGNED_RED_GREEN_RGTC2_Format:Ic,SIGNED_RED_RGTC1_Format:Cc,SRGBColorSpace:cn,SRGBTransfer:ae,Scene:yh,ShaderChunk:Ht,ShaderLib:vn,ShaderMaterial:gn,ShadowMaterial:em,Shape:$i,ShapeGeometry:Qa,ShapePath:$S,ShapeUtils:Dn,ShortType:jf,Skeleton:Va,SkeletonHelper:NS,SkinnedMesh:kp,Source:Hi,Sphere:Oe,SphereGeometry:io,Spherical:IS,SphericalHarmonics3:xm,SplineCurve:Ch,SpotLight:mm,SpotLightHelper:US,Sprite:Bp,SpriteMaterial:vh,SrcAlphaFactor:ga,SrcAlphaSaturateFactor:Rf,SrcColorFactor:bf,StaticCopyUsage:Ig,StaticDrawUsage:Ur,StaticReadUsage:Tg,StereoCamera:lS,StreamCopyUsage:Lg,StreamDrawUsage:Eg,StreamReadUsage:Rg,StringKeyframeTrack:ss,SubtractEquation:_f,SubtractiveBlending:nc,TOUCH:ng,TangentSpaceNormalMap:xi,TetrahedronGeometry:tl,Texture:ge,TextureLoader:tS,TorusGeometry:el,TorusKnotGeometry:nl,Triangle:en,TriangleFanDrawMode:hg,TriangleStripDrawMode:cg,TrianglesDrawMode:lg,TubeGeometry:il,UVMapping:Da,Uint16BufferAttribute:dh,Uint32BufferAttribute:fh,Uint8BufferAttribute:p0,Uint8ClampedBufferAttribute:m0,Uniform:Gh,UniformsGroup:TS,UniformsLib:dt,UniformsUtils:ph,UnsignedByteType:Qn,UnsignedInt248Type:Ys,UnsignedInt5999Type:Qf,UnsignedIntType:Ji,UnsignedShort4444Type:nh,UnsignedShort5551Type:ih,UnsignedShortType:th,VSMShadowMap:Tn,Vector2:j,Vector3:R,Vector4:ie,VectorKeyframeTrack:Hr,VideoTexture:dM,WebGL3DRenderTarget:n0,WebGLArrayRenderTarget:e0,WebGLCoordinateSystem:Rn,WebGLCubeRenderTarget:Tp,WebGLMultipleRenderTargets:ZS,WebGLRenderTarget:bn,WebGLRenderer:Op,WebGLUtils:Up,WebGPUCoordinateSystem:Nr,WireframeGeometry:tm,WrapAroundEnding:Ir,ZeroCurvatureEnding:ki,ZeroFactor:Mf,ZeroSlopeEnding:Gi,ZeroStencilOp:ug,createCanvasElement:vp},Symbol.toStringTag,{value:"Module"})),I={renderer:null,scene:null,camera:null,terrainMesh:null,terrainGeo:null,terrainMatColored:null,terrainMatTextured:null,objectMarkers:new sn,roadMesh:null,waterPlane:null,sunLight:null,currentMapData:null,currentHeightScale:1,colorMode:"terrain",terrainAtlas:null,terrainAtlasTex:null,units:new Map,selectedUnits:[],hotkeySquads:new Array(10).fill(null),messageStream:null,pathfinder:null,gameLoop:null},se=10,Sn=se/16,Cm=2,Rm=4,Im=Cm|Rm,JS=8,jS=64,QS=48,Gc=8,tb=Sn/8,Cn=0,Hh=1,Vh=2,Ma=3,Pm=4,Wh=5,Sa=6,eb=1.5,Hc=.5,nb=1.03,ba=.5,Te=64,ea=3,na=1e4,Qt=10,Wi=10,_r=14,Nd=2e3,Od=16,Ns=4,ib=30,sb=180,rb=60,ob=90,oe=new Map,Vs=new Map,Zi=new Map,ab=new Set([".tga",".dds",".bmp",".jpg",".jpeg",".png",".w3d",".wak",".wnd",".ini",".str",".csf",".xml"]);function Fd(s){var e;const t=(e=s.toLowerCase().match(/\.[^.]+$/))==null?void 0:e[0];return t?ab.has(t):!1}function Vc(s,t){const e=s.toLowerCase().replace(/\\/g,"/"),n={buffer:t,offset:0,size:t.byteLength};return oe.set(e,n),Zi.set(e,n),e}function lb(s,t){var i;const e=s.toLowerCase(),n=[];for(const[r]of oe)(r.endsWith("/"+e)||r===e)&&n.push(Vc(r,t));if(n.length===0){const r=((i=e.match(/\.[^.]+$/))==null?void 0:i[0])||"";let o;[".tga",".dds",".bmp"].includes(r)?o=`art/terrain/${e}`:r===".w3d"||r===".wak"?o=`art/w3d/${e}`:r===".ini"?o=`data/ini/${e}`:o=e,n.push(Vc(o,t)),console.log(`No BIG match for "${e}", added at inferred path: ${o}`)}else console.log(`Overriding ${n.length} BIG entry(s) for "${e}":`,n);return n}function cb(s,t){const e=new DataView(s),n=new Uint8Array(s),i=String.fromCharCode(n[0],n[1],n[2],n[3]);if(i!=="BIGF"&&i!=="BIG4")throw new Error("Not a BIG archive file");const r=e.getUint32(8,!1);let o=16,a=0;for(let l=0;l<r;l++){const c=e.getUint32(o,!1),h=e.getUint32(o+4,!1);o+=8;let u="";for(;n[o]!==0;)u+=String.fromCharCode(n[o++]);o++;const d=u.toLowerCase().replace(/\\/g,"/");oe.set(d,{buffer:s,offset:c,size:h}),a++}console.log(`BIG "${t}": ${a} files added to pool (${oe.size} total)`),Dm(),ub()}function ts(s){return oe.get(s.toLowerCase().replace(/\\/g,"/"))}function Lm(s){const t=ts(s);return t?new Uint8Array(t.buffer,t.offset,t.size):null}function Dm(){const s=["data/ini/terrain.ini","data/ini/default/terrain.ini"];for(const t of s){const e=Lm(t);if(!e)continue;const n=new TextDecoder("ascii").decode(e);hb(n),console.log(`Parsed ${t}: ${Vs.size} terrain type mappings`)}}function hb(s){const t=s.split(/\r?\n/);let e=null;for(const n of t){const i=n.replace(/;.*$/,"").trim();if(!i)continue;const r=i.match(/^Terrain\s+(\S+)/i);if(r){e=r[1];continue}if(/^End$/i.test(i)){e=null;continue}if(e){const o=i.match(/^Texture\s*=\s*(\S+)/i);o&&Vs.set(e.toLowerCase(),o[1].toLowerCase())}}}function ub(){const s=[];for(const[t]of oe)t.startsWith("art/terrain/")&&t.endsWith(".tga")&&s.push(t);if(s.sort(),s.length>0){console.groupCollapsed(`Terrain TGAs in BIG pool (${s.length})`);for(const t of s)console.log(t);console.groupEnd()}}function db(){const s=Array.from(oe.keys()).sort(),t=Zi.size;console.groupCollapsed(`All files in pool (${s.length} total, ${t} overrides)`);for(const e of s){const n=oe.get(e),i=Zi.has(e);console.log(`${i?"[OVERRIDE] ":""}${e}  (${n.size} bytes)`)}return console.groupEnd(),s}function fb(s){const t=s.replace(/\.tga$/i,"").toLowerCase(),e=Vs.get(t);if(e){const o=`art/terrain/${e}`;if(ts(o))return o}const n=`art/terrain/${t}.tga`;if(ts(n))return n;let i=null,r=0;for(const[o]of oe){if(!o.startsWith("art/terrain/")||!o.endsWith(".tga"))continue;const a=o.slice(12,-4);if(a===t){i=o;break}let l=0;if(t.includes(a)||a.includes(t))l=3;else{const c=d=>d.replace(/type\d*/gi,"").replace(/\d+$/,""),h=c(t),u=c(a);h&&u&&(h.includes(u)||u.includes(h))&&(l=2)}l>r&&(r=l,i=o)}return i&&r>=2?(console.log(`Fuzzy matched "${t}" → "${i}"`),i):null}const pb={AsphaltType1:3815998,AsphaltType2:4868686,Concrete:8026746,Pavement:6974062,RoadType1:5592405,RoadType2:5197647,Dirt:9139029,DirtType2:8020804,DirtType3:7034165,DirtRoad:10126181,CliffType1:7035723,CliffType2:5983035,Sand:12757358,SandType2:12099168,SandType3:13941882,SandDunes:14270591,Desert:13151082,DesertSand:13152368,Grass:4880944,GrassType2:3828260,GrassType3:5933626,GrassTall:4157480,GrassField:4880944,TallGrass:4157480,ShortGrass:5933626,MediumGrass:4880944,Rock:6974046,RockType2:5921358,RockType3:8026734,Snow:14212326,SnowType2:13159638,Ice:11061472,Water:2121888,WaterEdge:4229808,Mud:5917232,MudType2:6969920,Swamp:3824170,Urban:5921376,UrbanType2:4868688,Field:6986304,Farmland:8030778,GrassRock:5929546,BlendRock:6974037,Tundra:9083536};function Um(s){if(!s)return 8421472;const t=s.replace(/\.tga$/i,"");for(const[i,r]of Object.entries(pb))if(t.toLowerCase().includes(i.toLowerCase()))return r;let e=0;for(let i=0;i<t.length;i++)e=(e<<5)-e+t.charCodeAt(i)|0;const n=Math.abs(e)%360;return mb(n,.35,.45)}function mb(s,t,e){const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o,a,l;return s<60?(o=n,a=i,l=0):s<120?(o=i,a=n,l=0):s<180?(o=0,a=n,l=i):s<240?(o=0,a=i,l=n):s<300?(o=i,a=0,l=n):(o=n,a=0,l=i),Math.round((o+r)*255)<<16|Math.round((a+r)*255)<<8|Math.round((l+r)*255)}function Xh(s,t){const e=I.currentMapData.heightMap,n=e.width,i=e.height,r=e.borderSize,o=s/se+r,a=i-1-r-t/se,l=Math.max(0,Math.min(n-1,Math.floor(o))),c=Math.max(0,Math.min(i-1,Math.floor(a))),h=o-l,u=a-c,d=Math.min(l+1,n-1),f=Math.min(c+1,i-1),p=e.data[c*n+l],_=e.data[c*n+d],g=e.data[f*n+l],m=e.data[f*n+d];return(p*(1-h)*(1-u)+_*h*(1-u)+g*(1-h)*u+m*h*u)*Sn}function rl(s,t){if(!I.currentMapData||!I.currentMapData.heightMap)return 0;const e=I.currentMapData.heightMap,n=e.borderSize,r=(e.height-2*n-1)*se-t;return Xh(s,r)}const ia=1,Bd=2;function wa(s){const t=[0,0,0,0];let e=!1;return s.horiz&&(e=!!(s.inverted&Bd),s.inverted&ia?(t[0]=255,t[3]=255):(t[1]=255,t[2]=255)),s.vert&&(e=!!(s.inverted&Bd),s.inverted&ia?(t[0]=255,t[1]=255):(t[2]=255,t[3]=255)),s.rightDiagonal&&(s.inverted&ia?(t[1]=255,s.longDiagonal&&(t[0]=255,t[2]=255)):(e=!0,t[2]=255,s.longDiagonal&&(t[1]=255,t[3]=255))),s.leftDiagonal&&(s.inverted&ia?(e=!0,t[0]=255,s.longDiagonal&&(t[1]=255,t[3]=255)):(t[3]=255,s.longDiagonal&&(t[0]=255,t[2]=255))),s.customBlendEdgeClass>=0&&(t[0]=t[1]=t[2]=t[3]=0,e=!1),{alphas:t,needFlip:e}}function Xr(s,t,e){const n=s>>2;for(const i of t.textureClasses)if(!(i.firstTile<0)&&n>=i.firstTile&&n<i.firstTile+i.numTiles){e.setHex(Um(i.name));const r=((s&3)-1.5)*.015;e.r=Math.max(0,Math.min(1,e.r+r)),e.g=Math.max(0,Math.min(1,e.g+r)),e.b=Math.max(0,Math.min(1,e.b+r));return}e.setHex(8421472)}function Nm(s,t,e,n,i,r){const o=e.data[s];if(I.colorMode==="height"){const a=i>n?(o-n)/(i-n):.5;a<.15?r.setRGB(.15,.35,.15):a<.35?r.lerpColors(new ct(.15,.35,.15),new ct(.5,.65,.25),(a-.15)/.2):a<.6?r.lerpColors(new ct(.5,.65,.25),new ct(.65,.55,.35),(a-.35)/.25):a<.8?r.lerpColors(new ct(.65,.55,.35),new ct(.55,.5,.45),(a-.6)/.2):r.lerpColors(new ct(.55,.5,.45),new ct(.9,.9,.92),(a-.8)/.2)}else I.colorMode==="normal"?r.setRGB(.6,.55,.45):t&&s<t.tileNdxes.length?Xr(t.tileNdxes[s],t,r):r.setHex(8421472)}function gb(){if(!I.terrainMesh||!I.currentMapData)return;if(I.colorMode==="texture"&&I.terrainMatTextured){I.terrainMesh.material=I.terrainMatTextured,I.terrainMesh.material.wireframe=I.terrainMatColored.wireframe;return}I.terrainMesh.material=I.terrainMatColored;const s=I.currentMapData.heightMap,t=I.currentMapData.blendTileData,e=s.width,n=s.height,i=e-1,r=n-1;let o=255,a=0;for(let f=0;f<s.data.length;f++)s.data[f]<o&&(o=s.data[f]),s.data[f]>a&&(a=s.data[f]);const l=I.terrainGeo.getAttribute("color"),c=new ct,h=new ct,u=new ct,d=new ct;for(let f=0;f<r;f++)for(let p=0;p<i;p++){const g=(f*i+p)*4,m=f*e+p;Nm(m,t,s,o,a,c);let y=null;if(t&&m<t.blendTileNdxes.length){const v=t.blendTileNdxes[m];v>0&&t.blendedTiles&&v<t.blendedTiles.length&&(y=wa(t.blendedTiles[v]).alphas,Xr(t.blendedTiles[v].blendNdx,t,h))}let x=null;if(t&&t.extraBlendTileNdxes&&m<t.extraBlendTileNdxes.length){const v=t.extraBlendTileNdxes[m];v>0&&t.blendedTiles&&v<t.blendedTiles.length&&(x=wa(t.blendedTiles[v]).alphas,Xr(t.blendedTiles[v].blendNdx,t,u))}for(let v=0;v<4;v++)d.copy(c),y&&y[v]>0&&d.lerp(h,y[v]/255),x&&x[v]>0&&d.lerp(u,x[v]/255),l.setXYZ(g+v,d.r,d.g,d.b)}l.needsUpdate=!0}function _b(s){if(!I.terrainMesh||!I.currentMapData)return;const t=I.currentMapData.heightMap,e=t.width,n=t.height,i=e-1,r=n-1,o=I.terrainGeo.getAttribute("position"),a=[0,1,1,0],l=[0,0,1,1];for(let c=0;c<r;c++)for(let h=0;h<i;h++){const d=(c*i+h)*4;for(let f=0;f<4;f++){const p=h+a[f],_=c+l[f],g=t.data[_*e+p];o.setY(d+f,g*Sn*s)}}o.needsUpdate=!0,I.terrainGeo.computeVertexNormals()}function xb(s,t,e,n,i,r){let o=0;for(const d of s)for(const f of d.points)o=Math.max(o,f.z*Sn);o===0&&(o=20);const a=Math.max(n,i)*se*1.5,l=t*se/2,c=e*se/2,h=new ns(a,a),u=new Ih({color:1725046,transparent:!0,opacity:.55,shininess:60,specular:2245734,side:Ce});I.waterPlane=new le(h,u),I.waterPlane.rotation.x=-Math.PI/2,I.waterPlane.position.set(l,o,c),I.scene.add(I.waterPlane)}function Yh(s){const t={ambient:{r:.5,g:.39,b:.3},diffuse:{r:.9,g:.71,b:.6},lightPos:{x:-.96,y:.05,z:-.29}},e=(s==null?void 0:s.terrainLights)||[t],n=(s==null?void 0:s.objectLights)||e,i=new R(e[0].ambient.r,e[0].ambient.g,e[0].ambient.b),r=Math.min(e.length,ea),o=[],a=[];for(let d=0;d<ea;d++)if(d<r){const f=e[d].lightPos,p=e[d].diffuse;o.push(new R(p.r,p.g,p.b)),a.push(new R(-f.x,-f.z,f.y).normalize())}else o.push(new R(0,0,0)),a.push(new R(0,1,0));const l=Math.min(n.length,ea),c=new R(n[0].ambient.r,n[0].ambient.g,n[0].ambient.b),h=[],u=[];for(let d=0;d<ea;d++)if(d<l){const f=n[d].lightPos,p=n[d].diffuse;h.push(new R(p.r,p.g,p.b)),u.push(new R(-f.x,-f.z,f.y).normalize())}else h.push(new R(0,0,0)),u.push(new R(0,1,0));return{ambientColor:i,diffuseColors:o,lightDirs:a,numLights:r,objAmbientColor:c,objDiffuseColors:h,objLightDirs:u,objNumLights:l}}function Om(s,t,e,n,i){var d;const{scene:r}=I;I.sunLight&&(r.remove(I.sunLight.target),(d=I.sunLight.shadow)!=null&&d.map&&I.sunLight.shadow.map.dispose());const o=[];r.traverse(f=>{(f.isAmbientLight||f.isDirectionalLight)&&o.push(f)}),o.forEach(f=>{r.remove(f),f.dispose()}),I.sunLight=null;const a=Yh(s);r.add(new Fh(new ct(a.objAmbientColor.x,a.objAmbientColor.y,a.objAmbientColor.z),1));const l=t*se/2,c=e*se/2,u=Math.max(t,e)*se*.55;for(let f=0;f<a.objNumLights;f++){const p=a.objDiffuseColors[f],_=a.objLightDirs[f];if(p.x+p.y+p.z<.001)continue;const g=new Oh(new ct(p.x,p.y,p.z),1);g.position.set(l+_.x*na,_.y*na,c+_.z*na),f===0&&(g.castShadow=!0,g.shadow.mapSize.width=4096,g.shadow.mapSize.height=4096,g.shadow.camera.left=-u,g.shadow.camera.right=u,g.shadow.camera.top=u,g.shadow.camera.bottom=-u,g.shadow.camera.near=1,g.shadow.camera.far=na*2,g.shadow.bias=0,g.shadow.normalBias=0,g.target.position.set(l,0,c),r.add(g.target),I.sunLight=g),r.add(g)}}function yb(s){if(!I.currentMapData||!I.currentMapData.lighting)return;const t=I.currentMapData.lighting.entries;if(!t||s<0||s>=t.length)return;const e=t[s],n=Yh(e);if(I.terrainMatTextured){const u=I.terrainMatTextured.uniforms;u.ambientColor.value.copy(n.ambientColor),u.numLights.value=n.numLights,u.diffuseColor0.value.copy(n.diffuseColors[0]),u.diffuseColor1.value.copy(n.diffuseColors[1]),u.diffuseColor2.value.copy(n.diffuseColors[2]),u.lightDir0.value.copy(n.lightDirs[0]),u.lightDir1.value.copy(n.lightDirs[1]),u.lightDir2.value.copy(n.lightDirs[2])}const i=I.currentMapData.heightMap,r=i.borderSize,o=i.width-2*r,a=i.height-2*r;let l=255,c=0;for(let u=0;u<i.data.length;u++)i.data[u]<l&&(l=i.data[u]),i.data[u]>c&&(c=i.data[u]);Om(e,o,a),Fm(s===3),I.terrainMatTextured&&(I.terrainMatTextured.needsUpdate=!0),I.terrainMatColored&&(I.terrainMatColored.needsUpdate=!0)}function Fm(s){I.objectMarkers.traverse(t=>{t.isMesh&&t.userData.isLightMesh&&(t.visible=s)})}const He=Object.freeze({MSG_MOUSE_LEFT_CLICK:1,MSG_MOUSE_LEFT_DOUBLE_CLICK:2,MSG_AREA_SELECTION:3,MSG_CREATE_SELECTED_GROUP:4,MSG_CREATE_SELECTED_GROUP_NO_SOUND:5,MSG_DESTROY_SELECTED_GROUP:6,MSG_REMOVE_FROM_SELECTED_GROUP:7,MSG_DO_MOVETO:100,MSG_DO_ATTACKMOVETO:101,MSG_DO_FORCEMOVETO:102,MSG_ADD_WAYPOINT:103,MSG_DO_STOP:104,MSG_DO_ATTACK_OBJECT:105,MSG_DO_FORCE_ATTACK_OBJECT:106,MSG_DO_FORCE_ATTACK_GROUND:107,MSG_DO_GUARD_POSITION:108,MSG_DO_GUARD_OBJECT:109,MSG_DO_SCATTER:110,MSG_CREATE_TEAM0:200,MSG_CREATE_TEAM1:201,MSG_CREATE_TEAM2:202,MSG_CREATE_TEAM3:203,MSG_CREATE_TEAM4:204,MSG_CREATE_TEAM5:205,MSG_CREATE_TEAM6:206,MSG_CREATE_TEAM7:207,MSG_CREATE_TEAM8:208,MSG_CREATE_TEAM9:209,MSG_SELECT_TEAM0:210,MSG_SELECT_TEAM1:211,MSG_SELECT_TEAM2:212,MSG_SELECT_TEAM3:213,MSG_SELECT_TEAM4:214,MSG_SELECT_TEAM5:215,MSG_SELECT_TEAM6:216,MSG_SELECT_TEAM7:217,MSG_SELECT_TEAM8:218,MSG_SELECT_TEAM9:219,MSG_ADD_TEAM0:220,MSG_ADD_TEAM1:221,MSG_ADD_TEAM2:222,MSG_ADD_TEAM3:223,MSG_ADD_TEAM4:224,MSG_ADD_TEAM5:225,MSG_ADD_TEAM6:226,MSG_ADD_TEAM7:227,MSG_ADD_TEAM8:228,MSG_ADD_TEAM9:229});class vb{constructor(t){this.type=t,this.args=[],this.consumed=!1}appendLocationArgument(t){return this.args.push({type:"location",location:{x:t.x,y:t.y,z:t.z}}),this}appendObjectIdArgument(t){return this.args.push({type:"objectId",objectId:t}),this}appendPixelRegionArgument(t){return this.args.push({type:"pixelRegion",pixelRegion:{...t}}),this}appendIntArgument(t){return this.args.push({type:"int",value:t}),this}appendBoolArgument(t){return this.args.push({type:"bool",value:t}),this}getArgument(t){return this.args[t]||null}getType(){return this.type}destroy(){this.consumed=!0}}class Mb{constructor(){this.messages=[]}appendMessage(t){const e=new vb(t);return this.messages.push(e),e}getMessages(){return this.messages}consumeMessages(){const t=this.messages.filter(e=>!e.consumed);return this.messages=[],t}clear(){this.messages=[]}}const Aa=new Em,Ea=new j,Ts=new R;function Bm(s,t){const{camera:e,objectMarkers:n}=I;if(!e||!n)return null;Ea.set(s/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Aa.setFromCamera(Ea,e);const i=[];n.children.forEach(l=>{l.traverse(c=>{c.isMesh&&i.push(c)})});const r=Aa.intersectObjects(i,!1);let o=null,a=null;for(const l of r){const c=wb(l.object);if(c&&(a||(a=c),!o&&c.isMobile()&&(o=c),o))break}return o||a}function Sb(s,t){const{camera:e,terrainMesh:n}=I;if(!e||!n)return null;Ea.set(s/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Aa.setFromCamera(Ea,e);const i=Aa.intersectObject(n,!1);if(i.length>0){const r=i[0].point;return{x:r.x,y:r.y,z:r.z}}return null}function bb(s,t,e,n){const{camera:i}=I;if(!i)return[];const r=Math.min(s,e),o=Math.min(t,n),a=Math.max(s,e),l=Math.max(t,n),c=window.innerWidth,h=window.innerHeight,u=[];for(const d of I.units.values()){if(!d.mesh.visible||(Ts.set(d.position.x,d.position.y,d.position.z),Ts.project(i),Ts.z<0||Ts.z>1))continue;const f=(Ts.x*.5+.5)*c,p=(-Ts.y*.5+.5)*h;f>=r&&f<=a&&p>=o&&p<=l&&u.push(d)}return u}function Wc(s,t){return!(!s||!s.isSelectable()||!s.mesh.visible||t&&(s.isStructure()||!s.isLocallyControlled()))}function wb(s){let t=s;for(;t;){if(t.userData&&t.userData.unit)return t.userData.unit;t=t.parent}return null}let Yr=!1;function Ab(){return Yr}function Eb(s,t,e){if(I.selectedUnits.length===0)return;const n=Bm(s,t);if(n&&!n.selected&&n.isSelectable()){I.messageStream.appendMessage(He.MSG_DO_ATTACK_OBJECT).appendObjectIdArgument(n.id);return}const i=Sb(s,t);i&&(e?I.messageStream.appendMessage(He.MSG_ADD_WAYPOINT).appendLocationArgument(i):Yr?(I.messageStream.appendMessage(He.MSG_DO_ATTACKMOVETO).appendLocationArgument(i),Yr=!1):I.messageStream.appendMessage(He.MSG_DO_MOVETO).appendLocationArgument(i))}function Tb(s){if(I.selectedUnits.length===0)return!1;switch(s){case"KeyS":return I.messageStream.appendMessage(He.MSG_DO_STOP),!0;case"KeyA":return Yr=!Yr,!0;case"KeyG":return!0;case"KeyX":return I.messageStream.appendMessage(He.MSG_DO_SCATTER),!0}return!1}function Cs(s,t,e){return`url("data:image/svg+xml,${encodeURIComponent(s)}") ${t} ${e}, auto`}const di=(()=>{const s=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
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
  </svg>`,i=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <line x1="16" y1="2" x2="16" y2="12" stroke="#ffaa33" stroke-width="2.5" opacity="0.9"/>
    <line x1="16" y1="20" x2="16" y2="30" stroke="#ffaa33" stroke-width="2.5" opacity="0.9"/>
    <line x1="2" y1="16" x2="12" y2="16" stroke="#ffaa33" stroke-width="2.5" opacity="0.9"/>
    <line x1="20" y1="16" x2="30" y2="16" stroke="#ffaa33" stroke-width="2.5" opacity="0.9"/>
    <circle cx="16" cy="16" r="6" fill="none" stroke="#ffaa33" stroke-width="1.5" opacity="0.7"/>
    <polygon points="16,10 19,14 13,14" fill="#ffaa33" opacity="0.9"/>
  </svg>`;function r(l){const u=l*Math.PI/180,d=Math.cos(u),f=Math.sin(u),p=16-d*6,_=16-f*6,g=16+d*3,m=16+f*3,y=16+d*13,x=16+f*13,v=6,A=16+d*3,M=16+f*3,w=A+-f*v,C=M+d*v,b=A- -f*v,S=M-d*v;return`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0d060"/><stop offset="100%" stop-color="#a07818"/></linearGradient></defs>
      <line x1="${p.toFixed(1)}" y1="${_.toFixed(1)}" x2="${g.toFixed(1)}" y2="${m.toFixed(1)}" stroke="#1a1400" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.toFixed(1)}" y1="${_.toFixed(1)}" x2="${g.toFixed(1)}" y2="${m.toFixed(1)}" stroke="url(#sg)" stroke-width="3" stroke-linecap="round"/>
      <polygon points="${y.toFixed(1)},${x.toFixed(1)} ${w.toFixed(1)},${C.toFixed(1)} ${b.toFixed(1)},${S.toFixed(1)}" fill="url(#sg)" stroke="#1a1400" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`}const a=[0,45,90,135,180,225,270,315].map(l=>Cs(r(l),16,16));return{arrow:Cs(s,3,1),select:Cs(t,16,16),move:Cs(e,16,16),attack:Cs(n,16,16),attackMove:Cs(i,16,16),scroll:a}})();let Rs="";function Cb(s){if(!s)return;let t;if($.isPanning||$.isRotating){const e=$.mousePos,n=window.innerWidth/2,i=window.innerHeight/2,r=e.x-n,o=e.y-i,a=(Math.atan2(o,r)*180/Math.PI+360)%360,l=Math.round(a/45)%8;t="scroll"+l,t!==Rs&&(s.style.cursor=di.scroll[l],Rs=t);return}if($.isDragSelecting&&$.wasDragSelecting)t="select";else{let e=-1;if($.edgeScrollEnabled){const n=window.innerWidth,i=window.innerHeight,r=$.mousePos;let o=0,a=0;if(r.x<=gi&&(o=-1),r.x>=n-gi&&(o=1),r.y<=gi&&(a=-1),r.y>=i-gi&&(a=1),o!==0||a!==0){const l=(Math.atan2(a,o)*180/Math.PI+360)%360;e=Math.round(l/45)%8}}if(e>=0){t="scroll"+e,t!==Rs&&(s.style.cursor=di.scroll[e],Rs=t);return}I.selectedUnits&&I.selectedUnits.length>0?Ab()?t="attackMove":t="move":t="arrow"}if(t!==Rs){const e={select:di.select,move:di.move,attack:di.attack,attackMove:di.attackMove,arrow:di.arrow};s.style.cursor=e[t]||di.arrow,Rs=t}}const Rb=24,Ib=.8,Pb=.5,Lb=.35,ur=new Map;let sa=0;const Db=120,Ub="7px monospace";let Fs=[],Xc=0;function Nb(){const s=[()=>`0x${(Math.random()*16777215|0).toString(16).toUpperCase().padStart(6,"0")}`,()=>`${Math.random()*360|0}.${(Math.random()*100|0).toString().padStart(2,"0")}°`,()=>`R:${(Math.random()*999|0).toString().padStart(3,"0")}`,()=>`${(Math.random()*100|0).toFixed(0)}%`,()=>`ID:${(Math.random()*9999|0).toString().padStart(4,"0")}`,()=>`T+${(Math.random()*99|0).toFixed(0)}s`,()=>`${Math.random()*255|0}.${Math.random()*255|0}.${Math.random()*255|0}`,()=>`SIG ${(Math.random()*10).toFixed(2)}`,()=>`BRG ${Math.random()*360|0}`,()=>`${String.fromCharCode(65+Math.random()*26|0)}${String.fromCharCode(65+Math.random()*26|0)}-${Math.random()*99|0}`,()=>`DST ${Math.random()*500|0}m`,()=>`PWR ${(Math.random()*100|0).toFixed(0)}kW`,()=>`FRQ ${(20+Math.random()*80|0).toFixed(0)}MHz`,()=>`ALT ${Math.random()*200|0}`,()=>`VEL ${(Math.random()*60|0).toFixed(1)}`];return s[Math.random()*s.length|0]()}function Ob(s,t,e,n,i){if(i-Xc<Db)return;Xc=i;const r=e-s,o=n-t;if(r<30||o<30)return;const a=Math.random()*4|0;let l,c,h;const u=4;switch(a){case 0:l=s+Math.random()*r,c=t-u,h="bottom";break;case 1:l=s+Math.random()*r,c=n+u,h="top";break;case 2:l=s-u,c=t+Math.random()*o,h="right";break;case 3:l=e+u,c=t+Math.random()*o,h="left";break}Fs.push({text:Nb(),x:l,y:c,align:h,born:i,life:800+Math.random()*1200}),Fs.length>18&&Fs.shift()}function Fb(s,t){s.font=Ub,Fs=Fs.filter(e=>{const n=t-e.born;if(n>e.life)return!1;const i=Math.min(1,n/200),r=Math.max(0,1-(n-(e.life-300))/300),o=Math.min(i,r)*.7;if(o<=0)return!1;switch(s.fillStyle=`rgba(51, 255, 51, ${o.toFixed(3)})`,e.align){case"bottom":s.textAlign="center",s.textBaseline="bottom";break;case"top":s.textAlign="center",s.textBaseline="top";break;case"right":s.textAlign="right",s.textBaseline="middle";break;case"left":s.textAlign="left",s.textBaseline="middle";break}return s.fillText(e.text,e.x,e.y),!0})}function da(s){const t=pa;if(!t)return;if(!s){t.style.display="none",ur.clear(),sa=0,Fs=[],Xc=0;return}const e=Math.min($.dragStart.x,$.dragEnd.x),n=Math.min($.dragStart.y,$.dragEnd.y),i=Math.max($.dragStart.x,$.dragEnd.x),r=Math.max($.dragStart.y,$.dragEnd.y),o=i-e,a=r-n;if(o<2||a<2)return;const{camera:l,objectMarkers:c}=I,h=window.devicePixelRatio||1,u=window.innerWidth,d=window.innerHeight;t.width=u*h,t.height=d*h,t.style.width=u+"px",t.style.height=d+"px",t.style.display="block";const f=t.getContext("2d");f.setTransform(h,0,0,h,0,0),f.clearRect(0,0,u,d);const p=[];if(l&&c.visible){const M=new R;c.children.forEach(w=>{var L,F;if(!w.visible)return;const C=(L=w.userData)==null?void 0:L.kindOf,b=(((F=w.userData)==null?void 0:F.name)||"").toLowerCase();(C?C.has("VEHICLE")||C.has("INFANTRY")||C.has("AIRCRAFT")||C.has("HUGE_VEHICLE"):b.includes("vehicle")||b.includes("infantry")||b.includes("tank")||b.includes("humvee")||b.includes("soldier")||b.includes("ranger")||b.includes("missile")||b.includes("raptor")||b.includes("comanche")||b.includes("crusader")||b.includes("paladin")||b.includes("ambulance"))&&w.traverse(D=>{if(!D.isMesh||!D.geometry)return;const k=D.geometry.attributes.position;if(!k)return;const X=Math.max(1,Math.floor(k.count/24));for(let Q=0;Q<k.count;Q+=X)M.set(k.getX(Q),k.getY(Q),k.getZ(Q)),D.localToWorld(M),M.project(l),M.z>0&&M.z<1&&p.push((M.x*.5+.5)*u,(-M.y*.5+.5)*d)})})}const _=performance.now(),g=sa?Math.min((_-sa)/1e3,.1):.016;sa=_;const m=Rb,y=Math.ceil(o/m),x=Math.ceil(a/m),v=new Set;for(let M=0;M<p.length;M+=2){const w=p[M],C=p[M+1];if(w<e||w>=i||C<n||C>=r)continue;const b=Math.floor((w-e)/m),S=Math.floor((C-n)/m);v.add(`${b},${S}`)}const A=new Set;for(let M=0;M<x;M++)for(let w=0;w<y;w++){const C=e+w*m,b=n+M*m,S=Math.min(m,i-C),L=Math.min(m,r-b),F=v.has(`${w},${M}`),D=`${w},${M}`;A.add(D);let k=ur.get(D)||0;k=F?Math.min(Lb,k+Ib*g):Math.max(0,k-Pb*g),ur.set(D,k),k>.001&&(f.fillStyle=`rgba(51, 255, 51, ${k.toFixed(3)})`,f.fillRect(C,b,S,L)),f.strokeStyle="rgba(51, 255, 51, 0.3)",f.lineWidth=.5,f.strokeRect(C+.5,b+.5,S-1,L-1)}for(const M of ur.keys())A.has(M)||ur.delete(M);f.strokeStyle="rgba(51, 255, 51, 0.6)",f.lineWidth=2,f.strokeRect(e,n,o,a),Ob(e,n,i,r,_),Fb(f,_)}const Bb=3407667,zd=8,zb=32;let fa=null,Yc=null,pn=null;function zm(){fa||(fa=new no(zd*.7,zd,zb),fa.rotateX(-Math.PI/2)),Yc||(Yc=new nn({color:Bb,transparent:!0,opacity:.5,side:Ce,depthWrite:!1})),pn||(pn=new sn,pn.name="selectionIndicators",I.scene&&I.scene.add(pn))}function Bs(s){if(!s||s.selected)return;zm(),s.selected=!0,I.selectedUnits.push(s);const t=new le(fa,Yc);t.position.set(s.position.x,s.position.y+.3,s.position.z),t.userData.unitId=s.id,pn.add(t),s.selectionIndicator=t}function kb(s){if(!s||!s.selected)return;s.selected=!1;const t=I.selectedUnits.indexOf(s);t!==-1&&I.selectedUnits.splice(t,1),s.selectionIndicator&&pn&&(pn.remove(s.selectionIndicator),s.selectionIndicator=null)}function Sr(){for(const s of I.selectedUnits)s.selected=!1,s.selectionIndicator&&pn&&(pn.remove(s.selectionIndicator),s.selectionIndicator=null);I.selectedUnits.length=0}function Gb(s){const{camera:t}=I;if(!t||!s)return;const e=s.name.toLowerCase(),n=new R,i=window.innerWidth,r=window.innerHeight;for(const o of I.units.values()){if(o.selected||!o.isSelectable()||!o.isLocallyControlled()||o.name.toLowerCase()!==e||(n.set(o.position.x,o.position.y,o.position.z),n.project(t),n.z<0||n.z>1))continue;const a=(n.x*.5+.5)*i,l=(-n.y*.5+.5)*r;a<0||a>i||l<0||l>r||Bs(o)}}function Hb(){for(const s of I.selectedUnits)s.selectionIndicator&&s.selectionIndicator.position.set(s.position.x,s.position.y+.3,s.position.z)}function Vb(){zm(),pn&&I.scene&&!pn.parent&&I.scene.add(pn)}const Wb=10,Xb=20;let kd=0,Zl=-1,Gd=0,Hd=0,Vd=0;const Yb=400,Wd=6;let qc=0;function qb(){qc++}function $b(s,t,e){const n=$.wasDragSelecting,i=$.dragStartX,r=$.dragStartY;n?Kb(i,r,s,t,e):Zb(s,t,e)}function Zb(s,t,e){const n=performance.now(),i=Math.abs(s-Hd),r=Math.abs(t-Vd),o=n-Gd<Yb&&i<Wd&&r<Wd;Gd=n,Hd=s,Vd=t;const a=Bm(s,t);if(o&&a&&Wc(a,!1)){e||Sr(),Bs(a),Gb(a),$c(!0);return}if(a&&Wc(a,!1))e?a.selected?kb(a):Bs(a):(Sr(),Bs(a)),$c(!e);else if(!e){if(I.selectedUnits.length===0)return;Sr(),jb()}}function Kb(s,t,e,n,i){const o=bb(s,t,e,n).filter(a=>Wc(a,!0));if(o.length!==0){i||Sr();for(const a of o)Bs(a);$c(!i)}}function Jb(s,t,e){if(s<0||s>=Wb)return;if(t&&!e){I.hotkeySquads[s]=I.selectedUnits.slice();return}if(t&&e){const o=[...I.hotkeySquads[s]||[]];for(const a of I.selectedUnits)o.includes(a)||o.push(a);I.hotkeySquads[s]=o;return}const n=I.hotkeySquads[s];if(!n||n.length===0)return;if(Zl===s&&qc-kd<Xb){const r=n[n.length-1];r&&r.mesh&&$.target.set(r.position.x,r.position.y,r.position.z),Zl=-1;return}kd=qc,Zl=s,e||Sr();const i=n.filter(r=>I.units.has(r.id));I.hotkeySquads[s]=i;for(const r of i)Bs(r)}function $c(s){if(!I.messageStream)return;const t=I.messageStream.appendMessage(He.MSG_CREATE_SELECTED_GROUP);t.appendBoolArgument(s);for(const e of I.selectedUnits)t.appendObjectIdArgument(e.id)}function jb(){I.messageStream&&I.messageStream.appendMessage(He.MSG_DESTROY_SELECTED_GROUP).appendBoolArgument(!0)}const tn=Object.freeze({AICMD_MOVE_TO_POSITION:0,AICMD_MOVE_TO_OBJECT:1,AICMD_IDLE:5,AICMD_FOLLOW_WAYPOINT_PATH:6,AICMD_FOLLOW_PATH:9,AICMD_ATTACK_OBJECT:12,AICMD_FORCE_ATTACK_OBJECT:13,AICMD_ATTACK_POSITION:15,AICMD_ATTACKMOVE_TO_POSITION:16,AICMD_GUARD_POSITION:30,AICMD_GUARD_OBJECT:31,AICMD_FOLLOW_PATH_APPEND:50}),re=Object.freeze({AI_IDLE:0,AI_MOVE_TO:1,AI_FOLLOW_PATH:6,AI_WAIT:8,AI_ATTACK_POSITION:9,AI_ATTACK_OBJECT:10,AI_FORCE_ATTACK_OBJECT:11,AI_DEAD:13,AI_GUARD:16,AI_ATTACK_MOVE_TO:30,AI_MOVE_OUT_OF_THE_WAY:85}),Un=Object.freeze({CMD_FROM_PLAYER:0,CMD_FROM_SCRIPT:1,CMD_FROM_AI:2});class Is{constructor(t,e){this.cmd=t,this.cmdSource=e,this.pos=null,this.targetId=null,this.intValue=0}}function Qb(){if(!I.messageStream)return;const s=I.messageStream.consumeMessages();for(const t of s)switch(t.getType()){case He.MSG_DO_MOVETO:tw(t);break;case He.MSG_ADD_WAYPOINT:nw(t);break;case He.MSG_DO_ATTACKMOVETO:iw(t);break;case He.MSG_DO_STOP:Xd();break;case He.MSG_DO_ATTACK_OBJECT:sw(t);break;case He.MSG_DO_GUARD_POSITION:rw(t);break;case He.MSG_DO_SCATTER:Xd();break}}function tw(s,t){const e=s.getArgument(0);if(!e)return;const n=e.location,i=I.selectedUnits.filter(r=>r.ai&&r.isMobile());if(i.length!==0){if(i.length===1){i[0].ai.aiMoveToPosition(n,Un.CMD_FROM_PLAYER);return}if(I.pathfinder&&I.pathfinder.grid)for(const r of i)I.pathfinder.grid.clearUnitGoal(r.id);i.sort((r,o)=>{const a=Ta(r.position,n),l=Ta(o.position,n);return a-l});for(const r of i){const o=km(r,n,i);I.pathfinder&&I.pathfinder.grid&&I.pathfinder.grid.updateUnitGoal(r.id,o.x,o.z),r.ai.aiMoveToPosition(o,Un.CMD_FROM_PLAYER)}}}function km(s,t,e){let n=0,i=0;for(const h of e)n+=h.position.x,i+=h.position.z;n/=e.length,i/=e.length;let r=s.position.x-n,o=s.position.z-i;const a=50,l=Math.sqrt(r*r+o*o);l>a&&(r=r/l*a,o=o/l*a);const c={x:t.x+r,y:t.y||0,z:t.z+o};return ew(s,c)}function ew(s,t,e){const n=I.pathfinder?I.pathfinder.grid:null;if(!n)return t;const i=s.ai?s.ai.locomotor.collisionRadius:5,{radius:r,centerInCell:o}=n.getRadiusAndCenter(i),a=n.worldToCell(t.x,t.z);if(dr(n,a.x,a.y,s.id,r,o))return t;const l=400;let c=0,h=a.x,u=a.y;for(let d=1;c<l;d++){for(let f=0;f<d&&c<l;f++)if(h++,c++,dr(n,h,u,s.id,r,o)){const p=n.cellToWorld(h,u);return{x:p.x,y:t.y,z:p.z}}for(let f=0;f<d&&c<l;f++)if(u--,c++,dr(n,h,u,s.id,r,o)){const p=n.cellToWorld(h,u);return{x:p.x,y:t.y,z:p.z}}d++;for(let f=0;f<d&&c<l;f++)if(h--,c++,dr(n,h,u,s.id,r,o)){const p=n.cellToWorld(h,u);return{x:p.x,y:t.y,z:p.z}}for(let f=0;f<d&&c<l;f++)if(u++,c++,dr(n,h,u,s.id,r,o)){const p=n.cellToWorld(h,u);return{x:p.x,y:t.y,z:p.z}}}return t}function dr(s,t,e,n,i,r){if(t<0||t>=s.width||e<0||e>=s.height||!s.checkMovementBlock(t,e,n,i,r))return!1;const o=e*s.width+t,a=s.unitGoal[o];return!(a!==0&&a!==n)}function nw(s,t){const e=s.getArgument(0);if(!e)return;const n=e.location;for(const i of I.selectedUnits)!i.ai||!i.isMobile()||i.ai.queueWaypoint(n)}function iw(s){const t=s.getArgument(0);if(!t)return;const e=t.location,n=I.selectedUnits.filter(i=>i.ai&&i.isMobile());if(n.length<=1){for(const i of n)i.ai.aiAttackMoveToPosition(e,Un.CMD_FROM_PLAYER);return}if(I.pathfinder&&I.pathfinder.grid)for(const i of n)I.pathfinder.grid.clearUnitGoal(i.id);n.sort((i,r)=>Ta(i.position,e)-Ta(r.position,e));for(const i of n){const r=km(i,e,n);I.pathfinder&&I.pathfinder.grid&&I.pathfinder.grid.updateUnitGoal(i.id,r.x,r.z),i.ai.aiAttackMoveToPosition(r,Un.CMD_FROM_PLAYER)}}function Xd(){for(const s of I.selectedUnits)s.ai&&s.ai.aiIdle(Un.CMD_FROM_PLAYER)}function sw(s){const t=s.getArgument(0);if(!t)return;const e=t.objectId,n=I.units.get(e);if(n)for(const i of I.selectedUnits)!i.ai||!i.isMobile()||i.ai.aiMoveToPosition(n.position,Un.CMD_FROM_PLAYER)}function rw(s){const t=s.getArgument(0);if(!t)return;const e=t.location;for(const n of I.selectedUnits)n.ai&&n.ai.aiGuardPosition(e,Un.CMD_FROM_PLAYER)}function Ta(s,t){const e=s.x-t.x,n=s.z-t.z;return e*e+n*n}const Zn=new Map,es=new Map,Ca=new Map,ro=new Map;function ow(){Zn.clear(),es.clear(),Ca.clear();const s=[];for(const[t]of oe)t.endsWith(".ini")&&s.push(t);s.sort(),console.groupCollapsed(`Object INI: scanning ${s.length} INI files`);for(const t of s){const e=oe.get(t);if(!e)continue;const n=Zn.size;try{const i=new Uint8Array(e.buffer,e.offset,e.size),r=new TextDecoder("ascii").decode(i);aw(r);const o=Zn.size-n;o>0&&console.log(`  ${t}: +${o} mappings`)}catch(i){console.warn(`  ${t}: PARSE ERROR`,i)}}console.groupEnd(),console.log(`Object INI: ${Zn.size} object→model mappings, ${es.size} KindOf entries, ${Ca.size} GeometryInfo entries`)}function aw(s){const t=s.split(/\r?\n/);let e=0;function n(){for(;e<t.length;){const u=t[e++].replace(/;.*$/,"").replace(/\/\/.*$/,"").trim();if(u)return u}return null}let i;for(;(i=n())!==null;){const h=i.match(/^(?:Object|ObjectReskin)\s+(\S+)/i);h&&r(h[1].toLowerCase())}function r(h){let u=null,d;for(;(d=n())!==null;){if(/^End$/i.test(d)){u&&Ca.set(h,u);return}const f=d.match(/^\s*KindOf\s*=\s*(.+)/i);if(f&&!es.has(h)){es.set(h,new Set(f[1].trim().split(/\s+/).map(x=>x.toUpperCase())));continue}const p=d.match(/^\s*Geometry\s*=\s*(\S+)/i);if(p){u||(u={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),u.type=p[1].toUpperCase();continue}const _=d.match(/^\s*GeometryMajorRadius\s*=\s*([\d.]+)/i);if(_){u||(u={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),u.majorRadius=parseFloat(_[1]);continue}const g=d.match(/^\s*GeometryMinorRadius\s*=\s*([\d.]+)/i);if(g){u||(u={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),u.minorRadius=parseFloat(g[1]);continue}const m=d.match(/^\s*GeometryHeight\s*=\s*([\d.]+)/i);if(m){u||(u={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),u.height=parseFloat(m[1]);continue}const y=d.match(/^\s*GeometryIsSmall\s*=\s*(\S+)/i);if(y){u||(u={type:"CYLINDER",majorRadius:0,minorRadius:0,height:0,isSmall:!1}),u.isSmall=/^yes$/i.test(y[1]);continue}if(/^\s*Draw\s*=\s*W3D/i.test(d)){o(h);continue}if(c(d)){l();continue}}}function o(h){let u;for(;(u=n())!==null;){if(/^End$/i.test(u))return;if(/^\s*(?:Default)?ConditionState\b/i.test(u)){a(h);continue}if(/^\s*TransitionState\b/i.test(u)||c(u)){l();continue}if(!Zn.has(h)){const d=u.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);d&&Zn.set(h,d[1].toLowerCase())}}}function a(h){let u;for(;(u=n())!==null;){if(/^End$/i.test(u))return;if(!Zn.has(h)){const d=u.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);d&&Zn.set(h,d[1].toLowerCase())}}}function l(){let h;for(;(h=n())!==null;){if(/^End$/i.test(h))return;(c(h)||/^\s*(?:Default)?ConditionState\b/i.test(h)||/^\s*TransitionState\b/i.test(h))&&l()}}function c(h){return!!(/\bModuleTag\b/i.test(h)||/^\s*(?:Draw|ArmorSet|WeaponSet|LocomotorSet|CommandSet|UpgradeSet|UnitSpecificSounds)\s*=/i.test(h)||/^\s*(?:ArmorSet|WeaponSet|LocomotorSet|UnitSpecificSounds)\s*$/i.test(h))}}function lw(){ro.clear();const s=["data/ini/roads.ini","data/ini/default/roads.ini"];for(const t of s){const e=oe.get(t);if(!e)continue;const n=new Uint8Array(e.buffer,e.offset,e.size),i=new TextDecoder("ascii").decode(n);cw(i)}}function cw(s){const t=s.split(/\r?\n/);let e=null,n=!1,i=Gc,r=1,o="";for(const a of t){const l=a.replace(/;.*$/,"").trim();if(l){if(/^Road\s+/i.test(l))e=l.replace(/^Road\s+/i,"").trim(),n=!0,i=Gc,r=1,o="";else if(/^Bridge\s+/i.test(l))n=!1;else if(/^End$/i.test(l)&&n&&e)ro.set(e.toLowerCase(),{roadWidth:i,roadWidthInTexture:r,texture:o}),e=null;else if(n&&e){const c=l.match(/^Texture\s*=\s*(.+)/i);c&&(o=c[1].trim());const h=l.match(/^RoadWidth\s*=\s*([\d.]+)/i);h&&(i=parseFloat(h[1]));const u=l.match(/^RoadWidthInTexture\s*=\s*([\d.]+)/i);u&&(r=parseFloat(u[1]))}}}}const Me=Object.freeze({CELL_CLEAR:0,CELL_WATER:1,CELL_CLIFF:2,CELL_RUBBLE:3,CELL_OBSTACLE:4,CELL_IMPASSABLE:5}),fr=Object.freeze({NO_UNITS:0,UNIT_GOAL:1,UNIT_PRESENT_MOVING:2,UNIT_PRESENT_FIXED:3}),hw=.6,Kl=15,Yd=25,qd=8;class uw{constructor(){this.cells=null,this.width=0,this.height=0,this.zones=null,this.nextZoneId=1,this.unitPos=null,this.unitGoal=null,this.unitPresence=null}buildFromHeightmap(t,e,n){const i=t,r=i.width,o=i.height,a=i.borderSize,l=r-2*a,c=o-2*a;this.playH=c,this.width=Math.floor(l*se/Qt),this.height=Math.floor(c*se/Qt);const h=this.width*this.height;this.cells=new Uint8Array(h),this.cells.fill(Me.CELL_CLEAR),this.unitPos=new Int32Array(h),this.unitGoal=new Int32Array(h),this.unitPresence=new Uint8Array(h),this._unitPosCell=new Map,this._unitGoalCell=new Map;for(let u=0;u<this.height;u++)for(let d=0;d<this.width;d++){const f=d*Qt+Qt/2,p=u*Qt+Qt/2,_=(c-1)*se-p,g=this.classifyCell(f,_,i,a);this.cells[u*this.width+d]=g}n&&this.classifyObjectFootprints(n,c),this.buildZones()}classifyCell(t,e,n,i){const r=t/se+i,o=n.height-1-i-e/se,a=Math.floor(r),l=Math.floor(o);if(a<0||l<0||a>=n.width-1||l>=n.height-1)return Me.CELL_IMPASSABLE;const c=n.data[l*n.width+a]*Sn,h=n.data[l*n.width+(a+1)]*Sn,u=n.data[(l+1)*n.width+a]*Sn,d=n.data[(l+1)*n.width+(a+1)]*Sn,f=Math.max(c,h,u,d),p=Math.min(c,h,u,d);return(f-p)/Qt>hw?Me.CELL_CLIFF:Me.CELL_CLEAR}classifyObjectFootprints(t,e){let n=0,i=0;const r=new Map;for(const o of t){const a=o.name.toLowerCase(),l=es.get(a),c=Ca.get(a);if(!l){r.set(o.name,(r.get(o.name)||0)+1);continue}if(l.has("MINE")||l.has("PROJECTILE")||l.has("BRIDGE_TOWER")||!l.has("STRUCTURE")||c&&c.isSmall)continue;let h="CYLINDER",u=Kl,d=Kl;c?(h=c.type,u=c.majorRadius||Kl,d=c.minorRadius||u):l.has("HUGE")||l.has("TECH_BUILDING")||l.has("SUPPLY_SOURCE")?(u=Yd,d=Yd):l.has("DEFENSIVE_WALL")&&(u=qd,d=qd);const f=o.x,p=(e-1)*se-o.y;n++;const _=this.worldToCell(f,p);let g;h==="BOX"?g=this._markBoxFootprint(f,p,u,d,o.angle||0):g=this._markCircularFootprint(f,p,u),i+=g,console.log(`  Obstacle: ${o.name} at world(${f.toFixed(1)}, ${p.toFixed(1)}) cell(${_.x}, ${_.y}) geom=${h} r=${u.toFixed(1)} → ${g} cells`)}if(console.log(`Pathfind obstacles: ${n} objects, ${i} cells marked`),r.size>0){console.groupCollapsed(`Pathfind: ${r.size} object types have no INI template (need game data BIG files)`);for(const[o,a]of[...r].sort((l,c)=>c[1]-l[1]))console.log(`  ${o} (x${a})`);console.groupEnd()}}_markBoxFootprint(t,e,n,i,r){const o=Qt*.5,a=Math.cos(r),l=Math.sin(r),c=Math.ceil(2*n/o),h=Math.ceil(2*i/o),u=t-n*a-i*l,d=e+i*a-n*l,f=2*n*a/Math.max(c,1),p=-(2*n*l)/Math.max(c,1),_=2*i*l/Math.max(h,1),g=2*i*a/Math.max(h,1);let m=0;const y=new Set;for(let x=0;x<=h;x++)for(let v=0;v<=c;v++){const A=u+f*v+_*x,M=d+p*v+g*x,w=Math.floor((A+.5)/Qt),C=Math.floor((M+.5)/Qt);if(w<0||w>=this.width||C<0||C>=this.height)continue;const b=C*this.width+w;y.has(b)||(y.add(b),this.cells[b]=Me.CELL_OBSTACLE,m++)}return m}_markCircularFootprint(t,e,n){const i=t/Qt,r=e/Qt,o=n/Qt+.4,a=o*o,l=Math.floor(.5+(t-n)/Qt)-1,c=Math.floor(.5+(e-n)/Qt)-1,h=l+Math.ceil(2*o)+2,u=c+Math.ceil(2*o)+2;let d=0;for(let f=c;f<u;f++)for(let p=l;p<h;p++){if(p<0||p>=this.width||f<0||f>=this.height)continue;const _=p+.5-i,g=f+.5-r;_*_+g*g<=a&&(this.cells[f*this.width+p]=Me.CELL_OBSTACLE,d++)}return d}updateUnitPos(t,e,n,i){const r=this.worldToCell(e,n);if(r.x<0||r.x>=this.width||r.y<0||r.y>=this.height){this.clearUnitPos(t);return}const o=r.y*this.width+r.x,a=this._unitPosCell.get(t),l=i?fr.UNIT_PRESENT_MOVING:fr.UNIT_PRESENT_FIXED;a===o&&this.unitPresence[o]===l||(this.clearUnitPos(t),this.unitPos[o]=t,this.unitPresence[o]=l,this._unitPosCell.set(t,o))}updateUnitGoal(t,e,n){const i=this.worldToCell(e,n);if(i.x<0||i.x>=this.width||i.y<0||i.y>=this.height){this.clearUnitGoal(t);return}const r=i.y*this.width+i.x;this._unitGoalCell.get(t)!==r&&(this.clearUnitGoal(t),this.unitGoal[r]=t,this._unitGoalCell.set(t,r))}clearUnitPos(t){const e=this._unitPosCell.get(t);e!==void 0&&(this.unitPos[e]===t&&(this.unitPos[e]=0,this.unitPresence[e]=fr.NO_UNITS),this._unitPosCell.delete(t))}clearUnitGoal(t){const e=this._unitGoalCell.get(t);e!==void 0&&(this.unitGoal[e]===t&&(this.unitGoal[e]=0),this._unitGoalCell.delete(t))}removeUnitFromGrid(t){this.clearUnitPos(t),this.clearUnitGoal(t)}getRadiusAndCenter(t){let n=2*t;n>Qt&&n<2*Qt&&(n=2*Qt);let i=Math.floor(n/Qt+.3),r=!1;return i===0&&(i=1),i&1&&(r=!0),i=Math.floor(i/2),i>2&&(i=2,r=!0),{radius:i,centerInCell:r}}checkMovementBlock(t,e,n,i,r){const o=r?i+1:i;for(let a=e-i;a<e+o;a++)for(let l=t-i;l<t+o;l++){if(l<0||l>=this.width||a<0||a>=this.height)return!1;const c=a*this.width+l,h=this.cells[c];if(h===Me.CELL_OBSTACLE||h===Me.CELL_IMPASSABLE||h===Me.CELL_CLIFF)return!1;const u=this.unitPos[c];if(u!==0&&u!==n&&this.unitPresence[c]===fr.UNIT_PRESENT_FIXED)return!1}return!0}validMovementPosition(t,e){if(t<0||t>=this.width||e<0||e>=this.height)return!1;const n=this.cells[e*this.width+t];return n===Me.CELL_CLEAR||n===Me.CELL_RUBBLE}isCellPassableForUnit(t,e,n){if(t<0||t>=this.width||e<0||e>=this.height)return!1;const i=e*this.width+t,r=this.cells[i];if(r===Me.CELL_OBSTACLE||r===Me.CELL_IMPASSABLE||r===Me.CELL_CLIFF)return!1;const o=this.unitPos[i];return!(o!==0&&o!==n&&this.unitPresence[i]===fr.UNIT_PRESENT_FIXED)}buildZones(){this.zones=new Int32Array(this.width*this.height),this.zones.fill(0),this.nextZoneId=1;for(let t=0;t<this.height;t++)for(let e=0;e<this.width;e++){const n=t*this.width+e;this.zones[n]===0&&this.isCellPassable(this.cells[n])&&this.floodFillZone(e,t,this.nextZoneId++)}}floodFillZone(t,e,n){const i=[[t,e]];for(;i.length>0;){const[r,o]=i.pop();if(r<0||r>=this.width||o<0||o>=this.height)continue;const a=o*this.width+r;this.zones[a]===0&&this.isCellPassable(this.cells[a])&&(this.zones[a]=n,i.push([r+1,o],[r-1,o],[r,o+1],[r,o-1]))}}isCellPassable(t){return t===Me.CELL_CLEAR||t===Me.CELL_RUBBLE}getCell(t,e){return t<0||t>=this.width||e<0||e>=this.height?Me.CELL_IMPASSABLE:this.cells[e*this.width+t]}getZone(t,e){return t<0||t>=this.width||e<0||e>=this.height?0:this.zones[e*this.width+t]}worldToCell(t,e){return{x:Math.floor(t/Qt),y:Math.floor(e/Qt)}}cellToWorld(t,e){return{x:t*Qt+Qt/2,z:e*Qt+Qt/2}}buildDebugOverlay(t,e){const n=new t.Group;n.name="pathfindDebugOverlay";const i=new t.MeshBasicMaterial({color:16711680,transparent:!0,opacity:.4,side:t.DoubleSide,depthWrite:!1}),r=new t.MeshBasicMaterial({color:16746496,transparent:!0,opacity:.3,side:t.DoubleSide,depthWrite:!1}),o=new t.MeshBasicMaterial({color:8913032,transparent:!0,opacity:.3,side:t.DoubleSide,depthWrite:!1}),a=new t.PlaneGeometry(Qt*.9,Qt*.9);a.rotateX(-Math.PI/2);for(let l=0;l<this.height;l++)for(let c=0;c<this.width;c++){const h=this.cells[l*this.width+c];let u=null;if(h===Me.CELL_OBSTACLE?u=i:h===Me.CELL_CLIFF?u=r:h===Me.CELL_IMPASSABLE&&(u=o),!u)continue;const d=c*Qt+Qt/2,f=l*Qt+Qt/2;let p=0;try{p=e(d,f)+.5}catch{p=.5}const _=new t.Mesh(a,u);_.position.set(d,p,f),n.add(_)}return console.log(`Debug overlay: ${n.children.length} cells visualized`),n}}class $d{constructor(t,e,n){this.pos={x:t,y:e,z:n},this.next=null,this.prev=null,this.nextOptimized=null,this.canOptimize=!0}}class dw{constructor(){this.head=null,this.tail=null,this.currentNode=null,this.nodeCount=0}prependNode(t,e,n){const i=new $d(t,e,n);return this.head?(i.next=this.head,this.head.prev=i,this.head=i):(this.head=i,this.tail=i),this.nodeCount++,i}appendNode(t,e,n){const i=new $d(t,e,n);return this.tail?(i.prev=this.tail,this.tail.next=i,this.tail=i):(this.head=i,this.tail=i),this.nodeCount++,i}optimize(t,e=0,n=!1,i=0){if(!this.head||this.nodeCount<2){this.head&&(this.head.nextOptimized=null,this.currentNode=this.head);return}let r=this.head;for(this.currentNode=this.head;r&&r.next;){let o=r.next,a=r.next.next;for(;a&&o.canOptimize;){if(t&&fw(t,r.pos,a.pos,e,n,i))o=a;else break;a=a.next}r.nextOptimized=o;const l=o.pos.x-r.pos.x,c=o.pos.z-r.pos.z;r.nextOptDist=Math.sqrt(l*l+c*c),r.nextOptDist>.001?(r.nextOptDirX=l/r.nextOptDist,r.nextOptDirZ=c/r.nextOptDist):(r.nextOptDirX=0,r.nextOptDirZ=0),r=o}r&&(r.nextOptimized=null)}getStart(){return this.head}}function fw(s,t,e,n,i,r=0){const o=s.worldToCell(t.x,t.z),a=s.worldToCell(e.x,e.z);return pw(s,o.x,o.y,a.x,a.y,r,n,i)}function pw(s,t,e,n,i,r,o,a){const l=Math.abs(n-t),c=Math.abs(i-e);let h=t,u=e,d,f,p,_;d=f=n>=t?1:-1,p=_=i>=e?1:-1;let g,m,y,x;l>=c?(d=0,_=0,g=l,m=l>>1,y=c,x=l):(f=0,p=0,g=c,m=c>>1,y=l,x=c);for(let v=0;v<=x;v++){if(!Zd(s,h,u,r,o,a)||(m+=y,m>=g&&(m-=g,h+=d,u+=p,!Zd(s,h,u,r,o,a))))return!1;h+=f,u+=_}return!0}function Zd(s,t,e,n,i,r){return!(!s.validMovementPosition(t,e)||!s.checkMovementBlock(t,e,n,i,r))}const Jl=[{dx:1,dy:0,cost:Wi},{dx:0,dy:1,cost:Wi},{dx:-1,dy:0,cost:Wi},{dx:0,dy:-1,cost:Wi},{dx:1,dy:1,cost:_r},{dx:-1,dy:1,cost:_r},{dx:-1,dy:-1,cost:_r},{dx:1,dy:-1,cost:_r}],mw=1,gw=2,_w=4;class xw{constructor(){this.reset()}reset(){this.totalCost=1/0,this.costSoFar=0,this.parentX=-1,this.parentY=-1,this.parentDir=-1,this.onOpen=!1,this.onClosed=!1}}class yw{constructor(){this.data=[]}push(t){this.data.push(t),this._bubbleUp(this.data.length-1)}pop(){const t=this.data[0],e=this.data.pop();return this.data.length>0&&(this.data[0]=e,this._sinkDown(0)),t}get size(){return this.data.length}clear(){this.data.length=0}_bubbleUp(t){const e=this.data[t];for(;t>0;){const n=t-1>>1,i=this.data[n];if(e.totalCost>=i.totalCost)break;this.data[n]=e,this.data[t]=i,t=n}}_sinkDown(t){const e=this.data.length,n=this.data[t];for(;;){let i=2*t+1,r=2*t+2,o=t;if(i<e&&this.data[i].totalCost<this.data[o].totalCost&&(o=i),r<e&&this.data[r].totalCost<this.data[o].totalCost&&(o=r),o===t)break;this.data[t]=this.data[o],this.data[o]=n,t=o}}}class vw{constructor(t){this.grid=t,this.pathQueue=[],this.cellInfoPool=new Map,this.openList=new yw}queueForPath(t){this.pathQueue.includes(t)||this.pathQueue.push(t)}processPathfindQueue(){let t=Nd;for(;this.pathQueue.length>0&&t>0;){const e=this.pathQueue.shift(),n=I.units.get(e);!n||!n.ai||!n.ai.waitingForPath||(n.ai.doPathfind(this),t-=500)}}findPath(t,e,n){const i=this.grid;if(!i)return null;const r=i.worldToCell(t.x,t.z),o=i.worldToCell(e.x,e.z),a=n?n.id:0,l=n&&n.ai?n.ai.locomotor.collisionRadius:5,{radius:c,centerInCell:h}=i.getRadiusAndCenter(l);let u=i.getZone(r.x,r.y);const d=i.getZone(o.x,o.y);if(u===0){const f=this._findNearestPassableCell(r.x,r.y);if(!f)return null;r=f,u=i.getZone(f.x,f.y)}return u!==d||u===0?this.findClosestPath(t,e,n,r,o,c,h):this.internalFindPath(r,o,t,e,a,c,h)}findClosestPath(t,e,n,i,r,o,a){const l=this.grid,c=l.getZone(i.x,i.y);let h=1/0,u=r.x,d=r.y;const f=20;for(let m=-f;m<=f;m++)for(let y=-f;y<=f;y++){const x=r.x+y,v=r.y+m;if(l.getZone(x,v)===c){const A=y*y+m*m;A<h&&(h=A,u=x,d=v)}}if(h===1/0)return null;const p={x:u,y:d},_=l.cellToWorld(u,d),g=n?n.id:0;return this.internalFindPath(i,p,t,{x:_.x,y:0,z:_.z},g,o,a)}internalFindPath(t,e,n,i,r=0,o=0,a=!1){const l=this.grid;this.cellInfoPool.clear(),this.openList.clear();const c=(f,p)=>{const _=p*l.width+f;let g=this.cellInfoPool.get(_);return g||(g=new xw,this.cellInfoPool.set(_,g)),g},h=c(t.x,t.y);h.costSoFar=0,h.totalCost=Kd(t.x,t.y,e.x,e.y),h.onOpen=!0,this.openList.push({x:t.x,y:t.y,totalCost:h.totalCost});let u=0;const d=Nd;for(;this.openList.size>0&&u<d;){const f=this.openList.pop(),p=f.x,_=f.y,g=c(p,_);if(g.onClosed)continue;if(g.onClosed=!0,g.onOpen=!1,u++,p===e.x&&_===e.y)return this.buildActualPath(c,t,e,n,i,o,a,r);const m=[!1,!1,!1,!1,!1,!1,!1,!1];for(let y=0;y<8;y++){const x=p+Jl[y].dx,v=_+Jl[y].dy;if(x<0||x>=l.width||v<0||v>=l.height||!l.validMovementPosition(x,v)||!l.checkMovementBlock(x,v,r,o,a))continue;if(y>=4){const b=y-4,S=y-4+1;if(!m[b]&&!m[S%4])continue}m[y]=!0;const A=c(x,v);if(A.onClosed)continue;let M=Jl[y].cost;const w=v*l.width+x;if(l.unitPresence[w]!==0&&l.unitPos[w]!==r&&(M+=Wi*3),g.parentDir>=0){const b=Math.abs(y-g.parentDir),S=Math.min(b,8-b);S===1?M+=mw:S===2?M+=gw:S>=3&&(M+=_w)}const C=g.costSoFar+M;(C<A.costSoFar||!A.onOpen)&&(A.costSoFar=C,A.totalCost=C+Kd(x,v,e.x,e.y),A.parentX=p,A.parentY=_,A.parentDir=y,A.onOpen=!0,this.openList.push({x,y:v,totalCost:A.totalCost}))}}return null}buildActualPath(t,e,n,i,r,o,a,l=0){const c=this.grid,h=new dw;let u=n.x,d=n.y;const f=new Set;for(;!(u===e.x&&d===e.y);){const m=d*c.width+u;if(f.has(m))break;f.add(m);const y=c.cellToWorld(u,d),x=Jd(y.x,y.z);h.prependNode(y.x,x,y.z);const v=t(u,d);if(v.parentX<0)break;u=v.parentX,d=v.parentY}h.prependNode(i.x,i.y,i.z),h.tail&&r&&(h.tail.pos.x=r.x,h.tail.pos.z=r.z,h.tail.pos.y=Jd(r.x,r.z));const p=h.nodeCount;h.optimize(c,o,a,l);let _=0,g=h.head;for(;g&&(_++,g=g.nextOptimized||null,!!g););return console.log(`Path: ${p} raw → ${_} optimized nodes (radius=${o}, center=${a})`),h}_findNearestPassableCell(t,e){const n=this.grid;for(let i=1;i<=10;i++)for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++){if(Math.abs(o)!==i&&Math.abs(r)!==i)continue;const a=t+o,l=e+r;if(!(a<0||a>=n.width||l<0||l>=n.height)&&n.getZone(a,l)>0)return{x:a,y:l}}return null}isLinePassable(t,e,n,i,r,o=0){const a=t.worldToCell(e.x,e.z),l=t.worldToCell(n.x,n.z);return this._iterateCellsAlongLine(t,a.x,a.y,l.x,l.y,o,i,r)}_iterateCellsAlongLine(t,e,n,i,r,o,a,l){const c=Math.abs(i-e),h=Math.abs(r-n);let u=e,d=n,f,p,_,g;f=p=i>=e?1:-1,_=g=r>=n?1:-1;let m,y,x,v;c>=h?(f=0,g=0,m=c,y=c>>1,x=h,v=c):(p=0,_=0,m=h,y=h>>1,x=c,v=h);for(let A=0;A<=v;A++){if(!t.validMovementPosition(u,d)||!t.checkMovementBlock(u,d,o,a,l)||(y+=x,y>=m&&(y-=m,u+=f,d+=_,!t.validMovementPosition(u,d)||!t.checkMovementBlock(u,d,o,a,l))))return!1;u+=p,d+=g}return!0}getMoveAwayFromPath(t,e){const n=this.grid;if(!n)return null;const i=t.position,r=e.position,o=i.x-r.x,a=i.z-r.z,l=Math.sqrt(o*o+a*a);if(l<.001)return null;const c=o/l,h=a/l,u=t.ai?t.ai.locomotor.collisionRadius:5,{radius:d,centerInCell:f}=n.getRadiusAndCenter(u),p=Qt*2;for(let _=p;_<=p*4;_+=p){const g=[{x:i.x+c*_,z:i.z+h*_},{x:i.x+h*_,z:i.z-c*_},{x:i.x-h*_,z:i.z+c*_}];for(const m of g){const y=n.worldToCell(m.x,m.z);if(n.checkMovementBlock(y.x,y.y,t.id,d,f)){const x=n.worldToCell(i.x,i.z),v=y;return this.internalFindPath(x,v,i,{x:m.x,y:i.y,z:m.z},t.id,d,f)}}}return null}}function Kd(s,t,e,n){const i=Math.abs(s-e),r=Math.abs(t-n);return Wi*(i+r)+(_r-2*Wi)*Math.min(i,r)}function Jd(s,t){try{return rl(s,t)}catch{return 0}}class Mw{constructor(t){this.aiUpdate=t,this.currentState=re.AI_IDLE,this.goalPosition=null,this.goalObjectId=null}setState(t){this.currentState=t,this.onEnterState(t)}getState(){return this.currentState}clear(){const t=this.aiUpdate;t.currentPath=null,t.waitingForPath=!1,t.requestedDestination=null,t.locomotor.stop(),this.currentState=re.AI_IDLE,this.goalPosition=null,this.goalObjectId=null}onEnterState(t){const e=this.aiUpdate;switch(t){case re.AI_MOVE_TO:e.requestPath(this.goalPosition);break;case re.AI_ATTACK_MOVE_TO:e.requestPath(this.goalPosition);break;case re.AI_IDLE:e.onIdle();break;case re.AI_MOVE_OUT_OF_THE_WAY:e.requestPath(this.goalPosition);break}}update(t){switch(this.aiUpdate,this.currentState){case re.AI_IDLE:break;case re.AI_MOVE_TO:this.updateMoveTo(t);break;case re.AI_ATTACK_MOVE_TO:this.updateMoveTo(t);break;case re.AI_GUARD:break;case re.AI_DEAD:break;case re.AI_MOVE_OUT_OF_THE_WAY:this.updateMoveOutOfTheWay(t);break}}updateMoveOutOfTheWay(t){const e=this.aiUpdate;if(e.moveOutOfWayTimer--,e.moveOutOfWayTimer<=0){e.currentPath=null,e.locomotor.stop(),this.setState(re.AI_IDLE);return}if(e.waitingForPath)return;if(!e.currentPath){this.setState(re.AI_IDLE);return}e.locomotor.followPath(e.currentPath,e.unit,t)&&(e.currentPath=null,this.setState(re.AI_IDLE))}updateMoveTo(t){const e=this.aiUpdate;if(e.waitingForPath)return;if(!e.currentPath){this.setState(re.AI_IDLE);return}if(e.locomotor.followPath(e.currentPath,e.unit,t))if(e.currentPath=null,e.executingWaypointQueue&&e.waypointIndex<e.waypointCount){const i=e.waypointQueue[e.waypointIndex++];this.goalPosition=i,e.requestPath(i)}else e.executingWaypointQueue=!1,this.setState(re.AI_IDLE)}}const Ni=Object.freeze({LOCO_LEGS:0,LOCO_WHEELS:1,LOCO_TREADS:2,LOCO_HOVER:3,LOCO_THRUST:4,LOCO_WINGS:5}),Sw=4,bw=8,jd=5,ww=5;class Aw{constructor(t){this.unit=t,this.appearance=this.inferAppearance(t),this.maxSpeed=ib,this.turnRate=sb*Math.PI/180,this.acceleration=rb,this.braking=ob,this.currentSpeed=0,this.currentPathNode=null,this.stopped=!0,this.collisionRadius=this.inferCollisionRadius(t),this.velocityX=0,this.velocityZ=0}inferAppearance(t){return t.kindOf?t.kindOf.has("AIRCRAFT")?Ni.LOCO_WINGS:t.kindOf.has("VEHICLE")||t.kindOf.has("HUGE_VEHICLE")?Ni.LOCO_TREADS:(t.kindOf.has("INFANTRY"),Ni.LOCO_LEGS):Ni.LOCO_LEGS}inferCollisionRadius(t){return t.kindOf?t.kindOf.has("INFANTRY")?Sw:t.kindOf.has("VEHICLE")||t.kindOf.has("HUGE_VEHICLE")?bw:jd:jd}stop(){this.currentSpeed=0,this.currentPathNode=null,this.stopped=!0,this.velocityX=0,this.velocityZ=0}followPath(t,e,n){if(!t||!t.head)return!0;this.currentPathNode||(this.currentPathNode=t.head,this.stopped=!1,this.currentPathNode.nextOptimized?this.currentPathNode=this.currentPathNode.nextOptimized:this.currentPathNode.next&&(this.currentPathNode=this.currentPathNode.next));const i=this.currentPathNode;if(!i)return!0;const r=e.position,o=i.pos.x-r.x,a=i.pos.z-r.z,l=Math.sqrt(o*o+a*a);if(l<3)return i.nextOptimized?(this.currentPathNode=i.nextOptimized,!1):i.next?(this.currentPathNode=i.next,!1):(this.stop(),!0);const h=Math.atan2(o,a);let u=h-e.rotation;for(;u>Math.PI;)u-=2*Math.PI;for(;u<-Math.PI;)u+=2*Math.PI;const d=this.turnRate*n;if(Math.abs(u)>d?e.rotation+=Math.sign(u)*d:e.rotation=h,e.ai.blockedFrames>0)this.currentSpeed*=.5,this.currentSpeed<1&&(this.currentSpeed=0),this.velocityX=Math.sin(e.rotation)*this.currentSpeed,this.velocityZ=Math.cos(e.rotation)*this.currentSpeed,r.x+=this.velocityX*n,r.z+=this.velocityZ*n;else{let p=1;const _=Math.abs(u)/Math.PI;this.appearance===Ni.LOCO_TREADS||this.appearance===Ni.LOCO_WHEELS?p=Math.max(.3,1-_*.7):p=Math.max(.5,1-_*.5);const g=this.currentSpeed*this.currentSpeed/(2*this.braking),y=l<g+5?Math.max(5,this.maxSpeed*(l/(g+5))):this.maxSpeed*p;this.currentSpeed<y?this.currentSpeed=Math.min(y,this.currentSpeed+this.acceleration*n):this.currentSpeed=Math.max(y,this.currentSpeed-this.braking*n),this.velocityX=Math.sin(e.rotation)*this.currentSpeed,this.velocityZ=Math.cos(e.rotation)*this.currentSpeed;const x=r.x+this.velocityX*n,v=r.z+this.velocityZ*n;if(this.checkGridCollision(x,v)){const A=!this.checkGridCollision(x,r.z),M=!this.checkGridCollision(r.x,v);A&&M?Math.abs(this.velocityX)>=Math.abs(this.velocityZ)?r.x=x:r.z=v:A?r.x=x:M?r.z=v:(this.currentSpeed*=.1,e.ai.blockedFrames++,e.ai.isBlocked=!0)}else r.x=x,r.z=v}try{r.y=rl(r.x,r.z)}catch{}return!1}checkGridCollision(t,e){const n=I.pathfinder;if(!n||!n.grid)return!1;const i=n.grid,{radius:r,centerInCell:o}=i.getRadiusAndCenter(this.collisionRadius),a=i.worldToCell(t,e);return!i.checkMovementBlock(a.x,a.y,this.unit.id,r,o)}}function Ew(){const s=[];for(const t of I.units.values())t.ai&&t.isMobile()&&t.mesh.visible&&s.push(t);for(let t=0;t<s.length;t++){const e=s[t],n=e.ai.locomotor.collisionRadius;for(let i=t+1;i<s.length;i++){const r=s[i],o=r.ai.locomotor.collisionRadius,a=r.position.x-e.position.x,l=r.position.z-e.position.z,c=a*a+l*l,h=n+o;if(c>=h*h)continue;let u=Math.sqrt(c),d=a,f=l;if(u<1){u=1;const v=(e.id*7+r.id*13)%100/100*Math.PI*2;d=Math.cos(v),f=Math.sin(v)}const p=h-u,_=-Math.min(p,ww),g=_*d/u,m=_*f/u,y=!e.ai.locomotor.stopped,x=!r.ai.locomotor.stopped;e.position.x+=g*.5,e.position.z+=m*.5,r.position.x-=g*.5,r.position.z-=m*.5,y&&!x&&(e.ai.isBlocked=!0,e.ai.blockedFrames===0&&(e.ai.blockedFrames=1)),x&&!y&&(r.ai.isBlocked=!0,r.ai.blockedFrames===0&&(r.ai.blockedFrames=1))}}}let fi=null;function Tw(s){fi=s}class Cw{constructor(t){this.unit=t,this.stateMachine=new Mw(this),this.locomotor=new Aw(t),this.currentPath=null,this.waitingForPath=!1,this.requestedDestination=null,this.lastCommandSource=Un.CMD_FROM_PLAYER,this.waypointQueue=new Array(Od),this.waypointCount=0,this.waypointIndex=0,this.executingWaypointQueue=!1,this.blockedFrames=0,this.isBlocked=!1,this.isBlockedAndStuck=!1,this.repathCooldown=0,this.moveOutOfWayTimer=0,this._savedState=null,this._savedGoal=null}aiDoCommand(t){switch(t.cmd){case tn.AICMD_MOVE_TO_POSITION:this.privateMoveToPosition(t.pos,t.cmdSource);break;case tn.AICMD_IDLE:this.privateIdle(t.cmdSource);break;case tn.AICMD_ATTACK_OBJECT:this.privateAttackObject(t.targetId,t.cmdSource);break;case tn.AICMD_FORCE_ATTACK_OBJECT:this.privateForceAttackObject(t.targetId,t.cmdSource);break;case tn.AICMD_ATTACKMOVE_TO_POSITION:this.privateAttackMoveToPosition(t.pos,t.cmdSource);break;case tn.AICMD_GUARD_POSITION:this.privateGuardPosition(t.pos,t.cmdSource);break;case tn.AICMD_FOLLOW_PATH_APPEND:this.privateFollowPathAppend(t.pos,t.cmdSource);break}}aiMoveToPosition(t,e){const n=new Is(tn.AICMD_MOVE_TO_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiIdle(t){const e=new Is(tn.AICMD_IDLE,t||Un.CMD_FROM_PLAYER);this.aiDoCommand(e)}aiAttackMoveToPosition(t,e){const n=new Is(tn.AICMD_ATTACKMOVE_TO_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiAttackObject(t,e){const n=new Is(tn.AICMD_ATTACK_OBJECT,e);n.targetId=t,this.aiDoCommand(n)}aiGuardPosition(t,e){const n=new Is(tn.AICMD_GUARD_POSITION,e);n.pos={...t},this.aiDoCommand(n)}aiFollowPathAppend(t,e){const n=new Is(tn.AICMD_FOLLOW_PATH_APPEND,e);n.pos={...t},this.aiDoCommand(n)}aiMoveAwayFromUnit(t){if(this.unit.isMobile()&&!(this.lastCommandSource===Un.CMD_FROM_PLAYER&&this.stateMachine.getState()!==re.AI_IDLE)&&fi){const e=fi.getMoveAwayFromPath(this.unit,t);if(e){this.stateMachine.clear(),this.currentPath=e,this.waitingForPath=!1,this.blockedFrames=0,this.isBlocked=!1,this.moveOutOfWayTimer=300,this.stateMachine.currentState=re.AI_MOVE_OUT_OF_THE_WAY;return}}}privateMoveToPosition(t,e){this.unit.isMobile()&&(this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.blockedFrames=0,this.isBlocked=!1,this.lastCommandSource=e,this.executingWaypointQueue=!1,this.waypointCount=0,this.stateMachine.setState(re.AI_MOVE_TO))}privateIdle(t){this.stateMachine.clear(),this.currentPath=null,this.waitingForPath=!1,this.lastCommandSource=t,this.executingWaypointQueue=!1,this.locomotor.stop()}privateAttackObject(t,e){this.lastCommandSource=e,this.stateMachine.goalObjectId=t,this.stateMachine.setState(re.AI_ATTACK_OBJECT)}privateForceAttackObject(t,e){this.lastCommandSource=e,this.stateMachine.goalObjectId=t,this.stateMachine.setState(re.AI_FORCE_ATTACK_OBJECT)}privateAttackMoveToPosition(t,e){this.unit.isMobile()&&(this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.blockedFrames=0,this.isBlocked=!1,this.lastCommandSource=e,this.executingWaypointQueue=!1,this.waypointCount=0,this.stateMachine.setState(re.AI_ATTACK_MOVE_TO))}privateGuardPosition(t,e){this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.lastCommandSource=e,this.stateMachine.setState(re.AI_GUARD)}privateFollowPathAppend(t,e){this.unit.isMobile()&&(this.queueWaypoint(t),this.lastCommandSource=e)}queueWaypoint(t){return this.waypointCount<Od?(this.waypointQueue[this.waypointCount++]={...t},!0):!1}clearWaypointQueue(){this.waypointCount=0,this.waypointIndex=0,this.executingWaypointQueue=!1}executeWaypointQueue(){if(this.waypointCount>0){this.waypointIndex=0,this.executingWaypointQueue=!0;const t=this.waypointQueue[this.waypointIndex++];this.stateMachine.clear(),this.stateMachine.goalPosition={...t},this.stateMachine.setState(re.AI_MOVE_TO)}}requestPath(t){t&&(this.requestedDestination={...t},this.waitingForPath=!0,this.currentPath=null,fi&&fi.queueForPath(this.unit.id))}doPathfind(t){if(!this.requestedDestination){this.waitingForPath=!1;return}const e=this.unit.position,n=this.requestedDestination,i=t.findPath(e,n,this.unit);this.currentPath=i,this.waitingForPath=!1,this.requestedDestination=null}onIdle(){this.locomotor.stop()}update(t){this.updateGridOccupancy(),this.handleBlocked(),this.stateMachine.update(t),this.unit.syncMeshFromPosition(),this.repathCooldown>0&&this.repathCooldown--}updateGridOccupancy(){if(!fi||!fi.grid)return;const t=fi.grid,e=!this.locomotor.stopped;t.updateUnitPos(this.unit.id,this.unit.position.x,this.unit.position.z,e),this.stateMachine.goalPosition&&t.updateUnitGoal(this.unit.id,this.stateMachine.goalPosition.x,this.stateMachine.goalPosition.z)}handleBlocked(){this.blockedFrames>15&&this.blockedFrames<=30&&this.askBlockerToMove(),this.blockedFrames>30&&this.repathCooldown<=0&&(this.isBlockedAndStuck=!0,this.stateMachine.goalPosition&&this.stateMachine.getState()!==re.AI_IDLE&&(this.blockedFrames=0,this.isBlocked=!1,this.isBlockedAndStuck=!1,this.repathCooldown=60,this.requestPath(this.stateMachine.goalPosition)))}askBlockerToMove(){const t=this.unit.position,e=this.locomotor.collisionRadius;let n=1/0,i=null;for(const r of I.units.values()){if(r.id===this.unit.id||!r.ai||!r.isMobile()||!r.ai.locomotor.stopped)continue;const o=t.x-r.position.x,a=t.z-r.position.z,l=Math.sqrt(o*o+a*a),c=e+r.ai.locomotor.collisionRadius;l<c*1.5&&l<n&&(n=l,i=r)}i&&i.ai.stateMachine.getState()===re.AI_IDLE&&i.ai.aiMoveAwayFromUnit(this.unit)}}let Ra=!1,qn=null,Kn=new sn;Kn.name="pathDebugLines";function Rw(){if(Ra)return;I.messageStream=new Mb,Vb();for(const t of I.units.values())t.isMobile()&&(t.ai=new Cw(t));const s=I.currentMapData;if(s&&s.heightMap){const t=new uw;t.buildFromHeightmap(s.heightMap,s.waterAreas||[],s.objects||[]),I.pathfinder=new vw(t),Tw(I.pathfinder),console.log(`Pathfinding grid: ${t.width}x${t.height} cells, ${t.nextZoneId-1} zones`)}Ra=!0,console.log(`Game systems initialized: ${I.units.size} units (${Iw()} mobile)`)}function Iw(){let s=0;for(const t of I.units.values())t.isMobile()&&s++;return s}function Pw(s){if(Ra){qb(),Qb(),I.pathfinder&&I.pathfinder.processPathfindQueue(),Ew();for(const t of I.units.values())t.ai&&(t.ai.isBlocked?t.ai.blockedFrames++:t.ai.blockedFrames=0,t.ai.isBlocked=!1,t.ai.update(s));Hb(),qn&&Gm()}}function Lw(){Ra=!1,I.messageStream=null,I.pathfinder=null,I.selectedUnits.length=0,I.hotkeySquads.fill(null),qn&&I.scene&&(I.scene.remove(qn),qn=null),Kn&&I.scene&&I.scene.remove(Kn)}function Dw(){if(!I.scene||!I.pathfinder||!I.pathfinder.grid)return;if(qn){I.scene.remove(qn),I.scene.remove(Kn),qn=null,console.log("Pathfind debug overlay: OFF");return}const s=I.pathfinder.grid,t=(e,n)=>{try{return rl(e,n)}catch{return 0}};qn=s.buildDebugOverlay(KS,t),I.scene.add(qn),Gm(),I.scene.add(Kn),console.log("Pathfind debug overlay: ON (red=obstacle, orange=cliff, purple=impassable)")}function Gm(){for(;Kn.children.length;)Kn.remove(Kn.children[0]);const s=new Be({color:16776960,linewidth:2,depthTest:!1});for(const t of I.units.values()){if(!t.ai||!t.ai.currentPath)continue;const e=t.ai.currentPath,n=[];let i=e.head;for(;i;){let r=0;try{r=rl(i.pos.x,i.pos.z)}catch{}n.push(new R(i.pos.x,r+2,i.pos.z)),i.nextOptimized?i=i.nextOptimized:i=i.next}if(n.length>=2){const r=new Ot().setFromPoints(n),o=new ti(r,s);Kn.add(o)}}}const ol=-37*Math.PI/180,Uw=5,qh=800,Hm=250,Qd=20,Nw=.005,Ow=1.5,Fw=8,gi=3,tf=.3,Bw=.85,$={target:new R,yaw:Math.PI*.75,pitch:ol,height:Hm,velocity:new R,isPanning:!1,isRotating:!1,middleDown:!1,panAnchor:{x:0,y:0},rotAnchor:{x:0,y:0},rotAnchorYaw:0,rotAnchorPitch:0,keys:{},mousePos:{x:0,y:0},isDragSelecting:!1,wasDragSelecting:!1,dragStart:{x:0,y:0},dragEnd:{x:0,y:0},dragStartX:0,dragStartY:0,edgeScrollEnabled:!1,rightDown:!1,rightAnchor:{x:0,y:0},rightWasDrag:!1};let pa=null;function zw(s){s.addEventListener("contextmenu",t=>t.preventDefault()),s.addEventListener("mousedown",t=>{t.button===2?($.isPanning=!0,$.panAnchor={x:t.clientX,y:t.clientY},$.rightDown=!0,$.rightAnchor={x:t.clientX,y:t.clientY},$.rightWasDrag=!1):t.button===1?(t.preventDefault(),$.middleDown=!0,$.isRotating=!0,$.rotAnchor={x:t.clientX,y:t.clientY},$.rotAnchorYaw=$.yaw,$.rotAnchorPitch=$.pitch):t.button===0&&($.isDragSelecting=!0,$.wasDragSelecting=!1,$.dragStart={x:t.clientX,y:t.clientY},$.dragEnd={x:t.clientX,y:t.clientY},$.dragStartX=t.clientX,$.dragStartY=t.clientY,da(!1))}),window.addEventListener("mousemove",t=>{if($.mousePos={x:t.clientX,y:t.clientY},$.isPanning){const e=t.clientX-$.panAnchor.x,n=t.clientY-$.panAnchor.y;$.panAnchor={x:t.clientX,y:t.clientY};const i=$.height*Ow/window.innerHeight,r=Math.sin($.yaw),o=Math.cos($.yaw);if($.target.x-=(e*o+n*r)*i,$.target.z-=(-e*r+n*o)*i,$.rightDown){const a=Math.abs(t.clientX-$.rightAnchor.x),l=Math.abs(t.clientY-$.rightAnchor.y);(a>Ns||l>Ns)&&($.rightWasDrag=!0)}}if($.isRotating){const e=t.clientX-$.rotAnchor.x;$.yaw=$.rotAnchorYaw-e*Nw}if($.isDragSelecting){$.dragEnd={x:t.clientX,y:t.clientY};const e=Math.abs($.dragEnd.x-$.dragStart.x),n=Math.abs($.dragEnd.y-$.dragStart.y);(e>Ns||n>Ns)&&($.wasDragSelecting=!0,da(!0))}}),window.addEventListener("mouseup",t=>{if(t.button===2&&($.isPanning=!1,$.rightDown&&!$.rightWasDrag&&Eb(t.clientX,t.clientY,t.shiftKey),$.rightDown=!1),t.button===1){if($.middleReleaseTime=performance.now(),$.middleDown=!1,!$.isRotating)return;$.isRotating=!1;const e=Math.abs(t.clientX-$.rotAnchor.x),n=Math.abs(t.clientY-$.rotAnchor.y);e<3&&n<3&&($.pitch=ol,$.yaw=Math.PI*.75,$.height=Hm)}t.button===0&&($.isDragSelecting=!1,da(!1),$b(t.clientX,t.clientY,t.shiftKey))}),s.addEventListener("wheel",t=>{if(t.preventDefault(),t.buttons&4||$.middleDown||performance.now()-($.middleReleaseTime||0)<150)return;const e=t.deltaY>0?Qd:-Qd,n=Math.max(.5,$.height/200);$.height=Math.max(Uw,Math.min(qh,$.height+e*n))},{passive:!1}),window.addEventListener("keydown",t=>{if(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA")return;$.keys[t.code]=!0;const e=t.code.match(/^Digit(\d)$/);if(e){const n=parseInt(e[1]);Jb(n,t.ctrlKey,t.shiftKey);return}!t.ctrlKey&&!t.altKey&&Tb(t.code),t.code==="KeyG"&&!t.ctrlKey&&!t.altKey&&!t.shiftKey&&Dw()}),window.addEventListener("keyup",t=>{$.keys[t.code]=!1}),pa=document.createElement("canvas"),pa.style.cssText="position:fixed;top:0;left:0;pointer-events:none;display:none;z-index:100;",document.body.appendChild(pa)}function kw(){const{camera:s,renderer:t}=I,e=$.keys;let n=0,i=0;(e.KeyW||e.ArrowUp)&&(i-=1),(e.KeyS||e.ArrowDown)&&(i+=1),(e.KeyA||e.ArrowLeft)&&(n-=1),(e.KeyD||e.ArrowRight)&&(n+=1);let r=0,o=0;if($.edgeScrollEnabled){const c=window.innerWidth,h=window.innerHeight,u=$.mousePos;u.x<=gi&&(r-=1),u.x>=c-gi&&(r+=1),u.y<=gi&&(o-=1),u.y>=h-gi&&(o+=1)}if(n!==0||i!==0||r!==0||o!==0){const c=Fw*($.height/200),h=Math.sin($.yaw),u=Math.cos($.yaw),d=n+r*tf,f=i+o*tf;$.velocity.x+=(d*u+f*h)*c,$.velocity.z+=(-d*h+f*u)*c}$.target.add($.velocity),$.velocity.multiplyScalar(Bw);const l=$.height/Math.sin(-$.pitch)*Math.cos(-$.pitch);if(s.position.set($.target.x+Math.sin($.yaw)*l,$.target.y+$.height,$.target.z+Math.cos($.yaw)*l),s.lookAt($.target),Cb(t==null?void 0:t.domElement),$.isDragSelecting){const c=Math.abs($.dragEnd.x-$.dragStart.x),h=Math.abs($.dragEnd.y-$.dragStart.y);(c>Ns||h>Ns)&&da(!0)}}const Ze=new Map,ma=new Map;function Gw(){Ze.clear();for(const[s]of oe){if(!s.endsWith(".w3d"))continue;const t=s.split("/"),e=t[t.length-1].replace(/\.w3d$/,"");Ze.has(e)||Ze.set(e,s)}console.log(`W3D index: ${Ze.size} models available`)}function pr(s){return Ze.has(s)?Ze.get(s):null}function jl(s){return s.replace(/\d+$/,"")}function ef(s){const t=s.toLowerCase();if(ma.has(t))return ma.get(t);let e=null;const n=Zn.get(t);if(n){const i=n.includes(".")?n.split(".")[0]:n;e=pr(i)}if(e||(e=pr(t)),!e){const i=[["tree","tr"],["tree",""],["civ","cf"],["civ","c"],["civ",""],["mes","mes"],["asia","as"],["euro","eu"]];for(const[r,o]of i){if(!t.startsWith(r))continue;const a=t.slice(r.length);if(e=pr(o+a),e)break;const l=jl(o+a);if(l!==o+a){for(const[c,h]of Ze)if(jl(c)===l){e=h;break}if(e)break}}}if(!e){const i={america:"a",china:"c",gla:"g",civilian:"c",europe:"eu"},r={vehicle:"v",infantry:"i",structure:"",building:"",tech:""};for(const[o,a]of Object.entries(i)){if(!t.startsWith(o))continue;let l=t.slice(o.length);for(const[c,h]of Object.entries(r)){if(!l.startsWith(c))continue;const u=l.slice(c.length),d=a+h+u;if(e=pr(d),e)break}if(e||(e=pr(a+l),e))break}}if(!e){const i=t.replace(/^(?:america|china|gla|civilian|europe|tree|civ|mes)/,"").replace(/^(?:vehicle|infantry|structure|building)/,"");if(i.length>=3){const r=jl(i);let o=0;for(const[a,l]of Ze){if(a.includes(i)){e=l;break}r.length>=3&&a.includes(r)&&r.length>o&&(o=r.length,e=l)}}}if(!e){const i=n?` (INI→"${n}")`:" (no INI mapping)",r=[],o=t.replace(/^(?:tree|civ|mes|america|china|gla|civilian|europe)/,"").replace(/\d+$/,"");if(o.length>=3){for(const[l]of Ze)if(l.includes(o)&&r.push(l),r.length>=5)break}const a=r.length>0?` Similar W3D: [${r.join(", ")}]`:"";console.warn(`W3D not found: "${s}"${i}${a}`)}return ma.set(t,e),e}function Ia(s,t){return Math.sqrt(s*s+t*t)}function Pn(s,t,e,n){return s*e+t*n}function Zc(s,t,e,n){return s*n-t*e}function hn(s,t){const e=Ia(s,t);return e<1e-9?{x:0,y:0}:{x:s/e,y:t/e}}function Kc(s,t,e){const n=Math.cos(e),i=Math.sin(e);return{x:s*n-t*i,y:s*i+t*n}}function un(s,t){return Math.abs(s.x-t.x)<ba&&Math.abs(s.y-t.y)<ba}function Vm(s){const t=[];for(let e=0;e<s.length-1;e++){const n=s[e];if(!(n.flags&Cm))continue;const i=s[e+1];if(!(i.flags&Rm))continue;const r=n.name.toLowerCase(),o=ro.get(r),a=o?o.roadWidth:Gc,l=o?o.roadWidthInTexture:1,c=!!(n.flags&JS),u=!!(n.flags&jS)?Hc:eb;t.push({pt1:{x:n.x,y:n.y,count:0,last:!0},pt2:{x:i.x,y:i.y,count:0,last:!0},name:n.name,typeName:r,halfWidth:a*l/2,widthInTexture:l,scale:a,type:Cn,isAngled:c,curveRadius:u}),e++}return t}function Hw(s){for(let o=s.length-1;o>0;o--){const a=s[o];if(a.type===Cn)for(let l=0;l<o;l++){const c=s[l];c.type===Cn&&c.typeName===a.typeName&&(un(c.pt1,a.pt1)&&(c.pt1.count++,a.pt1.count++,c.pt1.last=!1),un(c.pt1,a.pt2)&&(c.pt1.count++,a.pt2.count++,c.pt1.last=!1),un(c.pt2,a.pt1)&&(c.pt2.count++,a.pt1.count++,c.pt2.last=!1),un(c.pt2,a.pt2)&&(c.pt2.count++,a.pt2.count++,c.pt2.last=!1))}}const t=[],e=s.length;for(let o=0;o<e;o++){const a=s[o];a.type===Cn&&(a.pt1.count===2&&(t.push({x:a.pt1.x,y:a.pt1.y}),nf(s,a.pt1,o)),a.pt2.count===2&&(t.push({x:a.pt2.x,y:a.pt2.y}),nf(s,a.pt2,o)),a.pt1.count===3&&(t.push({x:a.pt1.x,y:a.pt1.y}),sf(s,a.pt1,o)),a.pt2.count===3&&(t.push({x:a.pt2.x,y:a.pt2.y}),sf(s,a.pt2,o)))}function n(o){for(const a of t)if(Math.abs(o.x-a.x)<ba&&Math.abs(o.y-a.y)<ba)return!0;return!1}const i=s.length;let r=-1;for(let o=0;o<i;o++)s[o].type===Cn&&(o<i-1&&s[o+1].type===Cn&&s[o].typeName===s[o+1].typeName&&un(s[o].pt1,s[o+1].pt2)&&s[o].pt1.count===1&&s[o+1].pt2.count===1&&!n(s[o].pt1)?(rf(s,o,o+1),r<0&&(r=o)):r>=0&&(s[o].type===Cn&&s[o].typeName===s[r].typeName&&un(s[o].pt1,s[r].pt2)&&s[r].pt2.count===1&&s[o].pt1.count===1&&!n(s[o].pt1)&&rf(s,o,r),r=-1));return s}function Wm(s,t,e,n){const i=[];for(let r=0;r<s.length;r++){if(r===e)continue;const o=s[r];o.typeName===n&&(un(o.pt1,t)?i.push({seg:o,centerPt:o.pt1,remotePt:o.pt2,idx:r}):un(o.pt2,t)&&i.push({seg:o,centerPt:o.pt2,remotePt:o.pt1,idx:r}))}return i}function Xm(s,t,e,n){for(const i of s)i.typeName===e&&(un(i.pt1,t)&&(i.pt1.count=n),un(i.pt2,t)&&(i.pt2.count=n))}function nf(s,t,e){const n={x:t.x,y:t.y},i=s[e],r=Wm(s,n,e,i.typeName);if(r.length<2)return;const o=un(i.pt1,n)?i.pt2:i.pt1,a=r[0].remotePt,l=r[1].remotePt,c=hn(o.x-n.x,o.y-n.y),h=hn(a.x-n.x,a.y-n.y),u=hn(l.x-n.x,l.y-n.y),d=Pn(c.x,c.y,h.x,h.y),f=Pn(c.x,c.y,u.x,u.y),p=Pn(u.x,u.y,h.x,h.y);let _,g;d<=f&&d<=p?(_={x:h.x-c.x,y:h.y-c.y},g=u):f<=p?(_={x:u.x-c.x,y:u.y-c.y},g=h):(_={x:h.x-u.x,y:h.y-u.y},g=c);const m=hn(_.x,_.y),y=Zc(m.x,m.y,g.x,g.y)<0?-Math.PI/2:Math.PI/2,x={x:m.x*.5*i.scale,y:m.y*.5*i.scale},v=Kc(x.x,x.y,y),M=Math.abs(Pn(m.x,m.y,g.x,g.y))>.5;let w;M?w=Zc(v.x,v.y,g.x,g.y)>0?Sa:Wh:w=Vh,Xm(s,n,i.typeName,-3),s.push({pt1:{x:n.x,y:n.y,count:-3,last:!0},pt2:{x:n.x+v.x,y:n.y+v.y,count:0,last:!0},name:i.name,typeName:i.typeName,halfWidth:i.halfWidth,widthInTexture:i.widthInTexture,scale:i.scale,type:w,isAngled:!1,curveRadius:i.curveRadius})}function sf(s,t,e){const n={x:t.x,y:t.y},i=s[e],r=Wm(s,n,e,i.typeName);if(r.length<3)return;const l=[un(i.pt1,n)?i.pt2:i.pt1,r[0].remotePt,r[1].remotePt,r[2].remotePt].map(p=>hn(p.x-n.x,p.y-n.y));let c=2,h=0,u=1;for(let p=0;p<4;p++)for(let _=p+1;_<4;_++){const g=Pn(l[p].x,l[p].y,l[_].x,l[_].y);g<c&&(c=g,h=p,u=_)}const d=hn(l[h].x-l[u].x,l[h].y-l[u].y),f={x:d.x*.5*i.scale,y:d.y*.5*i.scale};Xm(s,n,i.typeName,-3),s.push({pt1:{x:n.x,y:n.y,count:-3,last:!0},pt2:{x:n.x+f.x,y:n.y+f.y,count:0,last:!0},name:i.name,typeName:i.typeName,halfWidth:i.halfWidth,widthInTexture:i.widthInTexture,scale:i.scale,type:Ma,isAngled:!1,curveRadius:i.curveRadius})}function rf(s,t,e){const n=s[t],i=s[e];if(n.isAngled)return;const r=hn(n.pt2.x-n.pt1.x,n.pt2.y-n.pt1.y),o=hn(i.pt2.x-i.pt1.x,i.pt2.y-i.pt1.y),a=Pn(r.x,r.y,o.x,o.y),l=Zc(r.x,r.y,o.x,o.y),h=Math.acos(Math.max(-1,Math.min(1,a)))/(Math.PI/6);if(h<.9)return;const u=n.curveRadius*n.scale;let d,f,p,_,g=r,m=o;l>0?(d=n.pt1,f=n.pt2,p=i.pt1,_=i.pt2):(_=n.pt1,p=n.pt2,f=i.pt1,d=i.pt2,g=hn(f.x-d.x,f.y-d.y),m=hn(_.x-p.x,_.y-p.y));const y=g.y*u,x=-g.x*u,v=m.y*u,A=-m.x*u,M=d.x+y,w=d.y+x,C=f.x+y,b=f.y+x,S=p.x+v,L=p.y+A,F=_.x+v,D=_.y+A,k=C-M,X=b-w,Q=F-S,rt=D-L,W=k*rt-X*Q;if(Math.abs(W)<1e-6)return;const at=((S-M)*rt-(L-w)*Q)/W,q=M+k*at,mt=w+X*at,Ut=q-v,At=mt-A,Y=q-y,ot=mt-x;if(Pn(m.x,m.y,Ut-p.x,At-p.y)<.5||Pn(g.x,g.y,f.x-Y,f.y-ot)<.5)return;const Pt=-Math.PI/6;let Nt=Ut,U=At;const bt=hn(p.x-Ut,p.y-At),B=-bt.y*u,tt=bt.x*u,Z=Nt+B,ht=U+tt,nt=Math.max(1,Math.floor(h));for(let xt=0;xt<nt;xt++){const Rt=Nt-Z,P=U-ht,E=Kc(Rt,P,Pt),z=Z+E.x,K=ht+E.y,it=hn(Nt-Z,U-ht),et=Kc(it.x,it.y,Pt),Et=-et.y,pt=et.x,ft=z+Et*n.scale,Ft=K+pt*n.scale;s.push({pt1:{x:z,y:K,count:0,last:!0},pt2:{x:ft,y:Ft,count:0,last:!0},name:n.name,typeName:n.typeName,halfWidth:n.halfWidth,widthInTexture:n.widthInTexture,scale:n.scale,type:Hh,isAngled:!1,curveRadius:n.curveRadius}),Nt=z,U=K}}function $h(s){const t=document.getElementById("error-toast");t.textContent=s,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),5e3)}function of(s,t){var l,c,h,u;const e=s.heightMap,n=document.getElementById("panel"),i=document.getElementById("info-grid");n.style.display="block",document.getElementById("toolbar").style.display="flex";const r=[["Playable Area",`${t.playW} × ${t.playH}`],["Full Grid",`${e.width} × ${e.height}`],["Border",`${e.borderSize}`],["Height Range",`${t.minH} – ${t.maxH}`],["Objects",`${s.objects.filter(d=>!(d.flags&Im)).length}${Ze.size>0?` (${Ze.size} W3D available)`:""}`],["Roads",`${Vm(s.objects).length} segments`],["Terrain Types",`${((l=s.blendTileData)==null?void 0:l.textureClasses.length)||0}`],["Water Areas",`${s.polygonTriggers.filter(d=>d.isWaterArea).length}`],["Textures",I.terrainAtlas?`Atlas ${I.terrainAtlas.atlasW}x${I.terrainAtlas.atlasH}`:oe.size>0?"BIG loaded, textures missing":"Drop Terrain.big"],["Time of Day",["Morning","Afternoon","Evening","Night"][((c=s.lighting)==null?void 0:c.todIndex)??1]]];i.innerHTML=r.map(([d,f])=>`<span class="label">${d}</span><span class="value">${f}</span>`).join("");const o=document.getElementById("time-of-day");o.value=String(((h=s.lighting)==null?void 0:h.todIndex)??1);const a=document.getElementById("terrain-legend");if((u=s.blendTileData)!=null&&u.textureClasses){const d=s.blendTileData.textureClasses;a.innerHTML='<div style="color:#8b949e;font-size:12px;margin-bottom:6px">Terrain Types</div>'+d.map(f=>{const _="#"+Um(f.name).toString(16).padStart(6,"0"),g=f.name.replace(/\.tga$/i,"");return`<div class="item"><div class="swatch" style="background:${_}"></div>${g}</div>`}).join("")}}function Vw(s){let t=0,e=s[t++]<<8|s[t++],n=!!(e&32768),i=n?4:3;e&256&&(t+=i);let r=0;n?r=s[t++]<<24|s[t++]<<16|s[t++]<<8|s[t++]:r=s[t++]<<16|s[t++]<<8|s[t++];const o=new Uint8Array(r);let a=0;for(;;){let l=s[t++];if(!(l&128)){let h=s[t++],u=l&3;for(;u--;)o[a++]=s[t++];let d=a-1-(((l&96)<<3)+h);u=((l&28)>>2)+3-1;do o[a++]=o[d++];while(u--);continue}if(!(l&64)){let h=s[t++],u=s[t++],d=h>>6;for(;d--;)o[a++]=s[t++];let f=a-1-(((h&63)<<8)+u);d=(l&63)+4-1;do o[a++]=o[f++];while(d--);continue}if(!(l&32)){let h=s[t++],u=s[t++],d=s[t++],f=l&3;for(;f--;)o[a++]=s[t++];let p=a-1-(((l&16)>>4<<16)+(h<<8)+u);f=((l&12)>>2<<8)+d+5-1;do o[a++]=o[p++];while(f--);continue}let c=((l&31)<<2)+4;if(c<=112){for(;c--;)o[a++]=s[t++];continue}for(c=l&3;c--;)o[a++]=s[t++];break}return o}async function Ww(s){const t=new Uint8Array(s);if(t.length<8)return t;const e=String.fromCharCode(t[0],t[1],t[2],t[3]);if(e==="EAR\0")return Vw(t.subarray(8));if(e.startsWith("ZL")&&t[3]===0)try{const n=t.subarray(8),i=new DecompressionStream("deflate"),a=new Blob([n]).stream().pipeThrough(i).getReader(),l=[];for(;;){const{done:d,value:f}=await a.read();if(d)break;l.push(f)}const c=l.reduce((d,f)=>d+f.length,0),h=new Uint8Array(c);let u=0;for(const d of l)h.set(d,u),u+=d.length;return h}catch(n){return $h("Failed to decompress ZLib-compressed map: "+n.message),null}return t}class Xw{constructor(t){t instanceof Uint8Array?(this.buffer=t.buffer,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.bytes=t):(this.buffer=t,this.view=new DataView(t),this.bytes=new Uint8Array(t)),this.pos=0}get eof(){return this.pos>=this.bytes.length}get remaining(){return this.bytes.length-this.pos}readUInt32(){const t=this.view.getUint32(this.pos,!0);return this.pos+=4,t}readInt32(){const t=this.view.getInt32(this.pos,!0);return this.pos+=4,t}readUInt16(){const t=this.view.getUint16(this.pos,!0);return this.pos+=2,t}readInt16(){const t=this.view.getInt16(this.pos,!0);return this.pos+=2,t}readFloat32(){const t=this.view.getFloat32(this.pos,!0);return this.pos+=4,t}readByte(){return this.bytes[this.pos++]}readBytes(t){const e=this.bytes.subarray(this.pos,this.pos+t);return this.pos+=t,e}readInt16Array(t){const e=new Int16Array(t);for(let n=0;n<t;n++)e[n]=this.view.getInt16(this.pos,!0),this.pos+=2;return e}readAsciiString(){const t=this.readUInt16();if(t===0)return"";const e=this.readBytes(t);let n="";for(let i=0;i<t;i++)n+=String.fromCharCode(e[i]);return n}readUnicodeString(){const t=this.readUInt16();if(t===0)return"";let e="";for(let n=0;n<t;n++)e+=String.fromCharCode(this.readUInt16());return e}readDict(t){const e=this.readUInt16(),n={};for(let i=0;i<e;i++){const r=this.readInt32(),o=r&255,a=r>>>8,l=t[a]||`key_${a}`;switch(o){case 1:n[l]=!!this.readByte();break;case 2:n[l]=this.readInt32();break;case 3:n[l]=this.readFloat32();break;case 4:n[l]=this.readAsciiString();break;case 5:n[l]=this.readUnicodeString();break;default:throw new Error(`Unknown dict type ${o}`)}}return n}seek(t){this.pos=t}skip(t){this.pos+=t}tell(){return this.pos}}function Yw(s){const t=new Xw(s),e=t.readBytes(4);if(String.fromCharCode(e[0],e[1],e[2],e[3])!=="CkMp")throw new Error("Invalid map file: missing CkMp header");const n=t.readInt32(),i={};for(let o=0;o<n;o++){const a=t.readByte();let l="";for(let h=0;h<a;h++)l+=String.fromCharCode(t.readByte());const c=t.readUInt32();i[c]=l}const r={heightMap:null,blendTileData:null,objects:[],lighting:null,polygonTriggers:[],worldInfo:{}};for(;!t.eof&&t.remaining>=10;){const o=t.readUInt32(),a=t.readUInt16(),l=t.readInt32(),c=i[o]||`unknown_${o}`,u=t.tell()+l;try{c==="HeightMapData"?r.heightMap=qw(t,a):c==="BlendTileData"?r.blendTileData=$w(t,a,r.heightMap):c==="ObjectsList"?Zw(t,a,u,i,r):c==="GlobalLighting"?r.lighting=Jw(t,a):c==="PolygonTriggers"?jw(t,a,u,r):c==="WorldInfo"&&Qw(t,a,u,i,r)}catch(d){console.warn(`Error parsing chunk '${c}':`,d)}t.seek(u)}return r}function qw(s,t){const e=s.readInt32(),n=s.readInt32();let i=0,r=[];if(t>=3&&(i=s.readInt32()),t>=4){const c=s.readInt32();for(let h=0;h<c;h++)r.push({x:s.readInt32(),y:s.readInt32()})}else r.push({x:e-2*i,y:n-2*i});const o=s.readInt32();if(o!==e*n)throw new Error(`Height data size mismatch: ${o} vs ${e}x${n}`);const a=s.readBytes(o),l=new Uint8Array(o);return l.set(a),{width:e,height:n,borderSize:i,boundaries:r,data:l}}function $w(s,t,e){if(!e)return null;const n=e.width*e.height,i=s.readInt32();i!==n&&console.warn(`Blend tile data size mismatch: ${i} vs ${n}`);const r=s.readInt16Array(i),o=s.readInt16Array(i);let a=null;if(t>=6&&(a=s.readInt16Array(i)),t>=5&&s.readInt16Array(i),t>=7){const m=Math.floor((e.width+1)/8),y=e.height*m;s.skip(y)}const l=s.readInt32(),c=s.readInt32();let h=1;t>=5&&(h=s.readInt32());const u=s.readInt32(),d=[];for(let m=0;m<u;m++){const y=s.readInt32(),x=s.readInt32(),v=s.readInt32();s.readInt32();const A=s.readAsciiString();d.push({firstTile:y,numTiles:x,width:v,name:A})}let f=0;const p=[];if(t>=4){s.readInt32(),f=s.readInt32();for(let m=0;m<f;m++){const y=s.readInt32(),x=s.readInt32(),v=s.readInt32(),A=s.readAsciiString();p.push({firstTile:y,numTiles:x,width:v,name:A})}}const _=2061107200,g=[null];for(let m=1;m<c;m++){const y=s.readInt32(),x=s.readByte(),v=s.readByte(),A=s.readByte(),M=s.readByte(),w=s.readByte();let C=0;t>=3&&(C=s.readByte());let b=-1;t>=4&&(b=s.readInt32());const S=s.readUInt32();S!==_&&console.warn(`Blend tile sentinel mismatch at index ${m}: 0x${S.toString(16)}`),g.push({blendNdx:y,horiz:x,vert:v,rightDiagonal:A,leftDiagonal:M,inverted:w,longDiagonal:C,customBlendEdgeClass:b})}if(t>=5)for(let m=1;m<h;m++)s.skip(38);return{tileNdxes:r,blendTileNdxes:o,extraBlendTileNdxes:a,numBitmapTiles:l,numBlendedTiles:c,blendedTiles:g,textureClasses:d,edgeTextureClasses:p}}function Zw(s,t,e,n,i){for(;s.tell()<e&&s.remaining>=10;){const r=s.readUInt32(),o=s.readUInt16(),a=s.readInt32(),l=n[r]||"",c=s.tell()+a;if(l==="Object")try{const h=Kw(s,o,n);h&&i.objects.push(h)}catch(h){console.warn("Error parsing object:",h)}s.seek(c)}}function Kw(s,t,e){const n=s.readFloat32(),i=s.readFloat32(),r=s.readFloat32(),o=s.readFloat32(),a=s.readInt32(),l=s.readAsciiString();let c={};if(t>=2)try{c=s.readDict(e)}catch{}return t<=2?{x:n,y:i,z:0,angle:o,flags:a,name:l,dict:c}:{x:n,y:i,z:r,angle:o,flags:a,name:l,dict:c}}function Jw(s,t){try{let i=function(){return{ambient:{r:s.readFloat32(),g:s.readFloat32(),b:s.readFloat32()},diffuse:{r:s.readFloat32(),g:s.readFloat32(),b:s.readFloat32()},lightPos:{x:s.readFloat32(),y:s.readFloat32(),z:s.readFloat32()}}};var e=i;const n=s.readInt32(),r=[];for(let a=0;a<4;a++){const l=i(),c=i();let h=null,u=null,d=null,f=null;t>=2&&(h=i(),u=i()),t>=3&&(d=i(),f=i()),r.push({terrainLights:[l,d,f].filter(Boolean),objectLights:[c,h,u].filter(Boolean)})}const o=Math.max(0,Math.min(3,(n||1)-1));return{timeOfDay:n,todIndex:o,entries:r,...r[o]}}catch{return null}}function jw(s,t,e,n){try{const i=s.readInt32();for(let r=0;r<i&&s.tell()<e;r++){const o={};o.name=s.readAsciiString(),o.id=s.readInt32(),o.isWaterArea=!1,o.isRiver=!1,t>=2&&(o.isWaterArea=!!s.readByte()),t>=3&&(o.isRiver=!!s.readByte(),o.riverStart=s.readInt32());const a=s.readInt32();o.points=[];for(let l=0;l<a;l++)o.points.push({x:s.readInt32(),y:s.readInt32(),z:s.readInt32()});n.polygonTriggers.push(o)}}catch{}}function Qw(s,t,e,n,i){try{i.worldInfo=s.readDict(n)}catch{}}let Jc=0;function tA(){const s=document.getElementById("canvas");I.renderer=new Op({canvas:s,antialias:!0}),I.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.renderer.setSize(window.innerWidth,window.innerHeight),I.renderer.setClearColor(7048366),I.renderer.shadowMap.enabled=!0,I.renderer.shadowMap.type=pf,I.renderer.toneMapping=Ln,I.renderer.outputColorSpace=On,I.scene=new yh,I.scene.fog=new Qr(7048366,12e-5),I.camera=new Ae(50,window.innerWidth/window.innerHeight,1,5e4),zw(I.renderer.domElement),window.addEventListener("resize",()=>{I.camera.aspect=window.innerWidth/window.innerHeight,I.camera.updateProjectionMatrix(),I.renderer.setSize(window.innerWidth,window.innerHeight)}),Jc=performance.now(),Ym()}function Ym(){requestAnimationFrame(Ym);const s=performance.now(),t=Math.min((s-Jc)/1e3,.1);Jc=s,kw(),Pw(t),I.renderer.render(I.scene,I.camera)}function qr(s){const t=s instanceof Uint8Array?s:new Uint8Array(s),e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=t[0],i=t[1],r=t[2],o=e.getInt16(12,!0),a=e.getInt16(14,!0),l=t[16],c=t[17];if(i!==0)throw new Error("Indexed TGA not supported");const h=Math.floor((l+7)/8);if(h<3||h>4)throw new Error(`Unsupported pixel depth: ${l}`);const u=!!(r&8);if((r&7)!==2)throw new Error(`Unsupported image type: ${r}`);const d=!!(c&32);let f=18+n;const p=new Uint8Array(o*a*4);if(u){let _=0;for(;_<o*a;){const g=t[f++],m=(g&127)+1;if(g&128){const y=t[f++],x=t[f++],v=t[f++],A=h===4?t[f++]:255;for(let M=0;M<m;M++){const w=_++*4;p[w]=v,p[w+1]=x,p[w+2]=y,p[w+3]=A}}else for(let y=0;y<m;y++){const x=_++*4;p[x]=t[f+2],p[x+1]=t[f+1],p[x+2]=t[f],p[x+3]=h===4?t[f+3]:255,f+=h}}}else for(let _=0;_<o*a;_++){const g=_*4;p[g]=t[f+2],p[g+1]=t[f+1],p[g+2]=t[f],p[g+3]=h===4?t[f+3]:255,f+=h}if(d){const _=o*4,g=new Uint8Array(_);for(let m=0;m<Math.floor(a/2);m++){const y=m*_,x=(a-1-m)*_;g.set(p.subarray(y,y+_)),p.set(p.subarray(x,x+_),y),p.set(g,x)}}return{width:o,height:a,pixels:p}}function eA(s){const t=s.blendTileData;if(!t||oe.size===0)return null;const e=[];let n=0,i=0,r=0;function o(p){const _=fb(p.name);if(!_){console.warn(`Texture not found for "${p.name}" (tried INI mapping, exact, and fuzzy)`),r++;return}const g=Lm(_);if(!g){r++;return}let m;try{m=qr(g)}catch(A){console.warn(`Failed to parse TGA ${_}:`,A);return}const y=Math.floor(m.width/Te),x=Math.floor(m.height/Te),v=Math.min(y*x,p.numTiles);for(let A=0;A<x&&A*y<v;A++)for(let M=0;M<y&&A*y+M<v;M++){const w=M+y*A,C=p.firstTile+w,b=new Uint8Array(Te*Te*4);for(let S=0;S<Te;S++){const F=((A*Te+S)*m.width+M*Te)*4,D=S*Te*4;b.set(m.pixels.subarray(F,F+Te*4),D)}e[C]=b,C>n&&(n=C)}}for(const p of t.textureClasses)o(p),i++;for(const p of t.edgeTextureClasses||[])o(p),i++;if(console.log(`Texture classes: ${i-r} loaded, ${r} missing`),n===0)return null;const a=n+1,l=Math.ceil(Math.sqrt(a)),c=l*Te,u=Math.ceil(a/l)*Te,d=new Uint8Array(c*u*4);for(let p=0;p<d.length;p+=4)d[p]=128,d[p+1]=128,d[p+2]=96,d[p+3]=255;const f=[];for(let p=0;p<=n;p++){const _=p%l,g=Math.floor(p/l),m=_*Te,y=g*Te;if(f[p]={x:m,y},e[p])for(let x=0;x<Te;x++){const v=x*Te*4,A=((y+x)*c+m)*4;d.set(e[p].subarray(v,v+Te*4),A)}}return console.log(`Atlas built: ${c}x${u}, ${a} tiles, ${l} per row`),{atlasPixels:d,atlasW:c,atlasH:u,tilePositions:f}}function Ql(s,t,e){const n=s>>2,i=s&3,r=i&1,o=i>>1&1,a=e.tilePositions[n];if(!a)return[0,0];const l=Te/2,c=a.x+(r?l:0),h=a.y+(o?l:0),u=.5,d=(c+u)/e.atlasW,f=(c+l-u)/e.atlasW,p=(h+u)/e.atlasH,_=(h+l-u)/e.atlasH;switch(t){case 0:return[d,p];case 1:return[f,p];case 2:return[f,_];case 3:return[d,_]}}function nA(s,t){const e=Yh(t);return new gn({fog:!0,lights:!0,wireframe:!1,side:Ce,uniforms:ph.merge([dt.fog,dt.lights,{terrainAtlas:{value:s},ambientColor:{value:e.ambientColor},numLights:{value:e.numLights},diffuseColor0:{value:e.diffuseColors[0]},diffuseColor1:{value:e.diffuseColors[1]},diffuseColor2:{value:e.diffuseColors[2]},lightDir0:{value:e.lightDirs[0]},lightDir1:{value:e.lightDirs[1]},lightDir2:{value:e.lightDirs[2]}}]),vertexShader:`
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
    `})}function Pa(s){const t=s instanceof Uint8Array?s:new Uint8Array(s),e=new DataView(t.buffer,t.byteOffset,t.byteLength);if(e.getUint32(0,!0)!==542327876)throw new Error("Not a DDS file");const i=e.getUint32(12,!0),r=e.getUint32(16,!0),o=e.getUint32(80,!0),a=String.fromCharCode(t[84],t[85],t[86],t[87]),l=4,c=64,h=1,d=t.subarray(128);if(o&l){if(a==="DXT1")return sA(d,r,i);if(a==="DXT3")return rA(d,r,i);if(a==="DXT5")return oA(d,r,i);throw new Error("Unsupported DDS FourCC: "+a)}if(o&c){const f=e.getUint32(88,!0),p=e.getUint32(92,!0),_=e.getUint32(96,!0),g=e.getUint32(100,!0),m=o&h?e.getUint32(104,!0):0;return iA(d,r,i,f,p,_,g,m)}throw new Error("Unsupported DDS pixel format")}function iA(s,t,e,n,i,r,o,a){const l=n/8,c=new Uint8Array(t*e*4);new DataView(s.buffer,s.byteOffset,s.byteLength);function h(_){if(!_)return{shift:0,bits:0};let g=0,m=_;for(;m&&!(m&1);)g++,m>>=1;let y=0;for(;m&1;)y++,m>>=1;return{shift:g,bits:y}}const u=h(i),d=h(r),f=h(o),p=h(a);for(let _=0;_<t*e;_++){let g=0;const m=_*l;for(let w=0;w<l;w++)g|=s[m+w]<<w*8;const y=u.bits?(g>>u.shift&(1<<u.bits)-1)*255/((1<<u.bits)-1):0,x=d.bits?(g>>d.shift&(1<<d.bits)-1)*255/((1<<d.bits)-1):0,v=f.bits?(g>>f.shift&(1<<f.bits)-1)*255/((1<<f.bits)-1):0,A=p.bits?(g>>p.shift&(1<<p.bits)-1)*255/((1<<p.bits)-1):255,M=_*4;c[M]=y,c[M+1]=x,c[M+2]=v,c[M+3]=A}return{width:t,height:e,pixels:c}}function Ws(s){return[(s>>11&31)*255/31|0,(s>>5&63)*255/63|0,(s&31)*255/31|0]}function sA(s,t,e){const n=new Uint8Array(t*e*4),i=t+3>>2,r=e+3>>2;let o=0;for(let a=0;a<r;a++)for(let l=0;l<i;l++){const c=s[o]|s[o+1]<<8,h=s[o+2]|s[o+3]<<8,u=Ws(c),d=Ws(h),f=[u,d];c>h?(f[2]=[(2*u[0]+d[0])/3|0,(2*u[1]+d[1])/3|0,(2*u[2]+d[2])/3|0],f[3]=[(u[0]+2*d[0])/3|0,(u[1]+2*d[1])/3|0,(u[2]+2*d[2])/3|0]):(f[2]=[(u[0]+d[0])/2|0,(u[1]+d[1])/2|0,(u[2]+d[2])/2|0],f[3]=[0,0,0]);const p=s[o+4]|s[o+5]<<8|s[o+6]<<16|s[o+7]<<24;for(let _=0;_<4;_++)for(let g=0;g<4;g++){const m=l*4+g,y=a*4+_;if(m>=t||y>=e)continue;const x=(y*t+m)*4,v=p>>(_*4+g)*2&3;n[x]=f[v][0],n[x+1]=f[v][1],n[x+2]=f[v][2],n[x+3]=c<=h&&v===3?0:255}o+=8}return{width:t,height:e,pixels:n}}function rA(s,t,e){const n=new Uint8Array(t*e*4),i=t+3>>2,r=e+3>>2;let o=0;for(let a=0;a<r;a++)for(let l=0;l<i;l++){const c=[];for(let g=0;g<8;g++)c.push(s[o+g]);o+=8;const h=s[o]|s[o+1]<<8,u=s[o+2]|s[o+3]<<8,d=Ws(h),f=Ws(u),p=[d,f,[(2*d[0]+f[0])/3|0,(2*d[1]+f[1])/3|0,(2*d[2]+f[2])/3|0],[(d[0]+2*f[0])/3|0,(d[1]+2*f[1])/3|0,(d[2]+2*f[2])/3|0]],_=s[o+4]|s[o+5]<<8|s[o+6]<<16|s[o+7]<<24;for(let g=0;g<4;g++)for(let m=0;m<4;m++){const y=l*4+m,x=a*4+g;if(y>=t||x>=e)continue;const v=(x*t+y)*4,A=_>>(g*4+m)*2&3;n[v]=p[A][0],n[v+1]=p[A][1],n[v+2]=p[A][2];const M=g*4+m,w=c[M>>1];n[v+3]=(M&1?w>>4:w&15)*17}o+=8}return{width:t,height:e,pixels:n}}function oA(s,t,e){const n=new Uint8Array(t*e*4),i=t+3>>2,r=e+3>>2;let o=0;for(let a=0;a<r;a++)for(let l=0;l<i;l++){const c=s[o],h=s[o+1],u=[c,h];if(c>h)for(let x=1;x<=6;x++)u.push(((6-x)*c+x*h+3)/7|0);else{for(let x=1;x<=4;x++)u.push(((4-x)*c+x*h+2)/5|0);u.push(0,255)}let d=0n;for(let x=0;x<6;x++)d|=BigInt(s[o+2+x])<<BigInt(x*8);o+=8;const f=s[o]|s[o+1]<<8,p=s[o+2]|s[o+3]<<8,_=Ws(f),g=Ws(p),m=[_,g,[(2*_[0]+g[0])/3|0,(2*_[1]+g[1])/3|0,(2*_[2]+g[2])/3|0],[(_[0]+2*g[0])/3|0,(_[1]+2*g[1])/3|0,(_[2]+2*g[2])/3|0]],y=s[o+4]|s[o+5]<<8|s[o+6]<<16|s[o+7]<<24;for(let x=0;x<4;x++)for(let v=0;v<4;v++){const A=l*4+v,M=a*4+x;if(A>=t||M>=e)continue;const w=(M*t+A)*4,C=y>>(x*4+v)*2&3;n[w]=m[C][0],n[w+1]=m[C][1],n[w+2]=m[C][2];const b=x*4+v;n[w+3]=u[Number(d>>BigInt(b*3)&7n)]}o+=8}return{width:t,height:e,pixels:n}}function aA(s){const t=s.pt1,e=s.pt2.x-s.pt1.x,n=s.pt2.y-s.pt1.y,i=Ia(e,n);let r,o,a,l;i<.01?(r=1,o=0,a=0,l=1):(r=e/i,o=n/i,a=-o,l=r);const c=s.scale,h=s.widthInTexture;let u,d,f,p,_;switch(s.type){case Cn:{u=0,d=85/512,f=c,p=c;const g=s.halfWidth;_={bl:{x:s.pt1.x-a*g,y:s.pt1.y-l*g},tl:{x:s.pt1.x+a*g,y:s.pt1.y+l*g},br:{x:s.pt2.x-a*g,y:s.pt2.y-l*g},tr:{x:s.pt2.x+a*g,y:s.pt2.y+l*g}};break}case Vh:case Ma:{u=425/512,d=s.type===Ma?425/512:255/512,f=c,p=c;const g=c*nb/2,m=h*c/2,y=m+g,x=t.x-r*m,v=t.y-o*m;_={bl:{x:x-a*g,y:v-l*g},br:{x:x+r*y-a*g,y:v+o*y-l*g},tr:{x:x+r*y+a*g,y:v+o*y+l*g},tl:{x:x+a*g,y:v+l*g}};break}case Hh:{u=4/512,d=s.curveRadius===Hc?425/512:255/512,f=c,p=c;const g=h*c/2,m=r*c,y=o*c,x=a*g,v=l*g;if(s.curveRadius===Hc){let A=t.x-x,M=t.y-v,w=A+m*.5,C=M+y*.5,b=w+2*x,S=C+2*v,L=A+2*x,F=M+2*v;w+=m*.1+x*.2,C+=y*.1+v*.2,A-=x*.1+m*.02,M-=v*.1+y*.02,L-=m*.02,F-=y*.02,b-=m*.4,S-=y*.4,b+=x*.2,S+=v*.2,_={bl:{x:A,y:M},br:{x:w,y:C},tr:{x:b,y:S},tl:{x:L,y:F}}}else{let A=t.x-x,M=t.y-v,w=A+m,C=M+y,b=w+2*x,S=C+2*v,L=A+2*x,F=M+2*v;w+=m*.1+x*.4,C+=y*.1+v*.4,A-=x*.2+m*.02,M-=v*.2+y*.02,L-=m*.02,F-=y*.02,b-=m*.4,S-=y*.4,b+=x*.4,S+=v*.4,_={bl:{x:A,y:M},br:{x:w,y:C},tr:{x:b,y:S},tl:{x:L,y:F}}}break}case Pm:{u=255/512,d=226/512,f=c,p=c;const g=c,m=r*g*1.59,y=o*g*1.59,x=a*g,v=l*g,A=t.x+x*.29-m*.5,M=t.y+v*.29-y*.5;_={tl:{x:A,y:M},bl:{x:A-x*1.08,y:M-v*1.08},br:{x:A-x*1.08+m,y:M-v*1.08+y},tr:{x:A+m,y:M+y}};break}case Wh:case Sa:{u=202/512,d=364/512,f=c,p=c;const g=c,m=r*g,y=o*g;let x=a*g*1.35,v=l*g*1.35;const A=s.type===Sa,M=A?.2:.8,w=t.x-x*M-m*h/2,C=t.y-v*M-y*h/2,b=m*h/2+m*1.2,S=y*h/2+y*1.2;_={bl:{x:w,y:C},br:{x:w+b,y:C+S},tr:{x:w+b+x,y:C+S+v},tl:{x:w+x,y:C+v}},A&&(x=-x,v=-v);break}default:return null}return{corners:_,uOff:u,vOff:d,uScale:f,vScale:p,loc:t,rvx:r,rvy:o,rnx:a,rny:l}}function lA(s,t){const e=aA(s);if(!e)return null;const{corners:n,uOff:i,vOff:r,uScale:o,vScale:a,loc:l,rvx:c,rvy:h,rnx:u,rny:d}=e,f=Ia((n.br.x-n.bl.x+n.tr.x-n.tl.x)/2,(n.br.y-n.bl.y+n.tr.y-n.tl.y)/2),p=Ia((n.tl.x-n.bl.x+n.tr.x-n.br.x)/2,(n.tl.y-n.bl.y+n.tr.y-n.br.y)/2),_=Math.max(2,Math.ceil(f/se)+1),g=Math.max(2,Math.ceil(p/se)+1),m=[],y=[],x=[];for(let v=0;v<_;v++){const A=v/(_-1);for(let M=0;M<g;M++){const w=M/(g-1),C=n.bl.x*(1-A)*(1-w)+n.br.x*A*(1-w)+n.tl.x*(1-A)*w+n.tr.x*A*w,b=n.bl.y*(1-A)*(1-w)+n.br.y*A*(1-w)+n.tl.y*(1-A)*w+n.tr.y*A*w,S=Xh(C,b)+tb;m.push(C,S,(t-1)*se-b);const L=C-l.x,F=b-l.y;y.push(i+Pn(c,h,L,F)/(o*4),r-Pn(u,d,L,F)/(a*4))}}for(let v=0;v<_-1;v++)for(let A=0;A<g-1;A++){const M=v*g+A;x.push(M,M+1,M+g,M+1,M+g+1,M+g)}return{positions:m,uvs:y,indices:x}}function qm(s,t){if(!s)return null;const e=t&&t.flipDDS,n=s.replace(/\.[^.]+$/,"").toLowerCase(),i=n.includes("/")?n.split("/").pop():n,r=[s,n+".dds",n+".tga","art/textures/"+s,"art/textures/"+n+".dds","art/textures/"+n+".tga","art/textures/"+i+".dds","art/textures/"+i+".tga"];for(const o of r){const a=ts(o);if(a)try{const l=new Uint8Array(a.buffer,a.offset,a.size),c=a.size>4&&l[0]===68&&l[1]===68&&l[2]===83&&l[3]===32,h=c?Pa(l):qr(l),u=new mn(h.pixels,h.width,h.height,Re);return e&&c&&(u.flipY=!0),u.wrapS=Mn,u.wrapT=Mn,u.magFilter=ue,u.minFilter=$e,u.generateMipmaps=!0,u.needsUpdate=!0,u}catch(l){console.warn("Failed to load texture:",o,l)}}if(i)for(const[o]of oe){const a=o.replace(/\.[^.]+$/,"");if((a.includes("/")?a.split("/").pop():a)===i){const c=oe.get(o);try{const h=new Uint8Array(c.buffer,c.offset,c.size),u=c.size>4&&h[0]===68&&h[1]===68&&h[2]===83&&h[3]===32,d=u?Pa(h):qr(h),f=new mn(d.pixels,d.width,d.height,Re);return e&&u&&(f.flipY=!0),f.wrapS=Mn,f.wrapT=Mn,f.magFilter=ue,f.minFilter=$e,f.generateMipmaps=!0,f.needsUpdate=!0,f}catch{}}}return null}function cA(s,t){if(!s)return null;const e=t&&t.flipDDS,n=s.replace(/\.[^.]+$/,"").toLowerCase(),i=n.includes("/")?n.split("/").pop():n,r=[s,n+".dds",n+".tga","art/textures/"+s,"art/textures/"+n+".dds","art/textures/"+n+".tga","art/textures/"+i+".dds","art/textures/"+i+".tga"];function o(a,l){const c=a.pixels;for(let u=0;u<c.length;u+=4){const d=c[u]*.299+c[u+1]*.587+c[u+2]*.114;c[u+3]=Math.min(255,d*2|0)}const h=new mn(c,a.width,a.height,Re);return e&&l&&(h.flipY=!0),h.wrapS=Mn,h.wrapT=Mn,h.magFilter=ue,h.minFilter=$e,h.generateMipmaps=!0,h.needsUpdate=!0,h}for(const a of r){const l=ts(a);if(l)try{const c=new Uint8Array(l.buffer,l.offset,l.size),h=l.size>4&&c[0]===68&&c[1]===68&&c[2]===83&&c[3]===32;return o(h?Pa(c):qr(c),h)}catch(c){console.warn("Failed to load luminance-alpha texture:",a,c)}}if(i)for(const[a]of oe){const l=a.replace(/\.[^.]+$/,"");if((l.includes("/")?l.split("/").pop():l)===i){const h=oe.get(a);try{const u=new Uint8Array(h.buffer,h.offset,h.size),d=h.size>4&&u[0]===68&&u[1]===68&&u[2]===83&&u[3]===32;return o(d?Pa(u):qr(u),d)}catch{}}}return null}const hA=[Cn,Hh,Vh,Ma,Pm,Wh,Sa];function uA(s,t,e){if(!s||s.length===0)return null;const n=t-2*e,i=new Map;for(const c of s){const h=c.typeName+"|"+c.type;i.has(h)||i.set(h,{typeName:c.typeName,segType:c.type,segs:[]}),i.get(h).segs.push(c)}const r=new Map;function o(c){if(r.has(c))return r.get(c);const h=ro.get(c),u=h&&h.texture?qm(h.texture):null;return r.set(c,u),u}const a=new sn;let l=10;for(const c of hA){for(const[,h]of i){if(h.segType!==c)continue;const u=[],d=[],f=[];let p=0;for(const x of h.segs){const v=lA(x,n);if(v){u.push(...v.positions),d.push(...v.uvs);for(const A of v.indices)f.push(A+p);p+=v.positions.length/3}}if(u.length===0)continue;const _=new Ot;_.setAttribute("position",new yt(u,3)),_.setAttribute("uv",new yt(d,2)),_.setIndex(f),_.computeVertexNormals();const g=o(h.typeName),m=new In({color:g?16777215:6710886,map:g||null,transparent:!0,alphaTest:g?.1:0,depthWrite:!1,side:Ce,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),y=new le(_,m);y.receiveShadow=!0,y.castShadow=!1,y.renderOrder=l,a.add(y)}l++}return a.children.length>0?a:null}const dA=0,fA=31,pA=2,mA=3,gA=32,_A=48,xA=49,yA=50,vA=56,MA=41,SA=59,bA=72,af=74,wA=256,AA=257,EA=258,TA=1792,CA=1793,RA=1794,IA=1796,PA=14,LA=8960,DA=8961,UA=8962,NA=8963,OA=1,FA=4080,BA=4096,zA=16777216,kA=16711680,GA=131072,HA=2;function lf(s){const t=new DataView(s),e=[];let n=null,i=null;function r(h,u,d){let f=h;for(;f+8<=u;){const p=t.getUint32(f,!0),g=t.getUint32(f+4,!0)&2147483647,m=f+8,y=Math.min(m+g,u);f=y,d(p,m,y,g)}}function o(h,u){let d="";for(let f=0;f<u;f++){const p=t.getUint8(h+f);if(p===0)break;d+=String.fromCharCode(p)}return d}function a(h,u){const d={name:"",attrs:0,vertices:null,normals:null,triangles:null,uvs:null,vertexColors:null,textureNames:[],numVerts:0,numTris:0,boneLinks:null,shaders:null};function f(g,m){r(g,m,(y,x,v,A)=>{y===xA&&r(x,v,(M,w,C,b)=>{M===yA&&d.textureNames.push(o(w,b))})})}function p(g,m){r(g,m,(y,x,v,A)=>{if(y===af&&!d.uvs){const M=A/8;d.numVerts&&M!==d.numVerts&&console.warn(`W3D "${d.name}": UV count (${M}) != vertex count (${d.numVerts})`),d.uvs=new Float32Array(M*2);for(let w=0;w<M;w++)d.uvs[w*2]=t.getFloat32(x+w*8,!0),d.uvs[w*2+1]=t.getFloat32(x+w*8+4,!0)}})}function _(g,m){r(g,m,(y,x,v,A)=>{if(y===bA)p(x,v);else if(y===af&&!d.uvs){const M=A/8;d.numVerts&&M!==d.numVerts&&console.warn(`W3D "${d.name}": UV count (${M}) != vertex count (${d.numVerts})`),d.uvs=new Float32Array(M*2);for(let w=0;w<M;w++)d.uvs[w*2]=t.getFloat32(x+w*8,!0),d.uvs[w*2+1]=t.getFloat32(x+w*8+4,!0)}else if(y===SA&&!d.vertexColors){const M=Math.min(A/4,d.numVerts||A/4);d.vertexColors=new Float32Array(M*4);for(let w=0;w<M;w++)d.vertexColors[w*4]=t.getUint8(x+w*4)/255,d.vertexColors[w*4+1]=t.getUint8(x+w*4+1)/255,d.vertexColors[w*4+2]=t.getUint8(x+w*4+2)/255,d.vertexColors[w*4+3]=t.getUint8(x+w*4+3)/255}})}return r(h,u,(g,m,y,x)=>{switch(g){case fA:{d.attrs=t.getUint32(m+4,!0),d.name=o(m+8,16),d.numTris=t.getUint32(m+40,!0),d.numVerts=t.getUint32(m+44,!0);break}case pA:{const v=Math.min(x/12,d.numVerts||x/12);d.vertices=new Float32Array(v*3);for(let A=0;A<v;A++)d.vertices[A*3]=t.getFloat32(m+A*12,!0),d.vertices[A*3+1]=t.getFloat32(m+A*12+4,!0),d.vertices[A*3+2]=t.getFloat32(m+A*12+8,!0);break}case mA:{const v=Math.min(x/12,d.numVerts||x/12);d.normals=new Float32Array(v*3);for(let A=0;A<v;A++)d.normals[A*3]=t.getFloat32(m+A*12,!0),d.normals[A*3+1]=t.getFloat32(m+A*12+4,!0),d.normals[A*3+2]=t.getFloat32(m+A*12+8,!0);break}case gA:{const v=Math.min(x/32,d.numTris||x/32);d.triangles=new Uint32Array(v*3);for(let A=0;A<v;A++)d.triangles[A*3]=t.getUint32(m+A*32,!0),d.triangles[A*3+1]=t.getUint32(m+A*32+4,!0),d.triangles[A*3+2]=t.getUint32(m+A*32+8,!0);break}case PA:{const v=Math.min(x/8,d.numVerts||x/8);d.boneLinks=new Uint16Array(v);for(let A=0;A<v;A++)d.boneLinks[A]=t.getUint16(m+A*8,!0);break}case MA:{const v=Math.floor(x/16);d.shaders=[];for(let A=0;A<v;A++){const M=m+A*16;d.shaders.push({depthMask:t.getUint8(M+1),destBlend:t.getUint8(M+3),srcBlend:t.getUint8(M+7),alphaTest:t.getUint8(M+12)})}break}case _A:f(m,y);break;case vA:case LA:case DA:case UA:case NA:_(m,y);break}}),d}function l(h,u){const d={name:"",pivots:[]};return r(h,u,(f,p,_,g)=>{if(f===AA)d.name=o(p+4,16),d.numPivots=t.getUint32(p+20,!0);else if(f===EA){const m=Math.floor(g/60);for(let y=0;y<m;y++){const x=p+y*60;d.pivots.push({name:o(x,16),parentIdx:t.getUint32(x+16,!0),translation:[t.getFloat32(x+20,!0),t.getFloat32(x+24,!0),t.getFloat32(x+28,!0)],rotation:[t.getFloat32(x+44,!0),t.getFloat32(x+48,!0),t.getFloat32(x+52,!0),t.getFloat32(x+56,!0)]})}}}),d}function c(h,u){const d={name:"",hierarchy:"",lods:[]};return r(h,u,(f,p,_,g)=>{if(f===CA)d.name=o(p+8,16),d.hierarchy=o(p+24,16);else if(f===RA){const m=[];r(p,_,(y,x,v,A)=>{y===IA&&m.push({boneIdx:t.getUint32(x,!0),name:o(x+4,A-4)})}),d.lods.push(m)}}),d}return r(0,s.byteLength,(h,u,d)=>{h===dA?e.push(a(u,d)):h===wA?n=l(u,d):h===TA&&(i=c(u,d))}),{meshes:e,hierarchy:n,hlod:i}}const Bi=new Map,Ki=new Map;function VA(s){if(!s.vertices||!s.triangles)return null;const t=new Ot;t.setAttribute("position",new yt(s.vertices,3)),s.normals&&t.setAttribute("normal",new yt(s.normals,3)),s.uvs&&t.setAttribute("uv",new yt(s.uvs,2));const e=!!s.vertexColors;if(e){const c=s.vertexColors,h=new Float32Array(c.length/4*3);for(let u=0;u<c.length/4;u++)h[u*3]=c[u*4],h[u*3+1]=c[u*4+1],h[u*3+2]=c[u*4+2];t.setAttribute("color",new yt(h,3))}t.setIndex(new qt(s.triangles,1)),s.normals||t.computeVertexNormals();const n=!!(s.attrs&zA),i=s.name.toLowerCase(),r=i.includes("light")||i.includes("glow")||i.includes("muzzle")||i.includes("fxfire")||i.includes("flame")||i.includes("beacon");let o;const a=s.textureNames[0];if(a){const c=r?XA(a):WA(a);if(c)if(r)o=new nn({map:c,transparent:!0,depthWrite:!1,blending:br,side:Ce,vertexColors:e});else if(n)o=new nn({map:c,transparent:!0,depthWrite:!1,vertexColors:e});else{const h=s.shaders&&s.shaders[0],u=h&&h.alphaTest===1,d=h&&h.srcBlend===2&&h.destBlend===5,f=u||d;o=new In({map:c,transparent:f,alphaTest:u?.376:0,depthWrite:h?h.depthMask!==0:!0,side:f?Ce:Nn,vertexColors:e})}else r&&console.warn("Missing light texture:",a,"for mesh:",s.name)}o||(r?o=new nn({color:16777130,transparent:!0,opacity:.6,depthWrite:!1,blending:br,vertexColors:e}):o=n?new nn({color:e?16777215:16777164,vertexColors:e}):new In({color:e?16777215:13421772,vertexColors:e}));const l=new le(t,o);return l.userData.isPrelitUnlit=n,l}function WA(s){const t=s.toLowerCase().replace(/\.[^.]+$/,"");if(Ki.has(t))return Ki.get(t);const e=qm(s,{flipDDS:!0});return Ki.set(t,e),e}function XA(s){const t="lum_"+s.toLowerCase().replace(/\.[^.]+$/,"");if(Ki.has(t))return Ki.get(t);const e=cA(s,{flipDDS:!0});return Ki.set(t,e),e}function YA(s){const t=s.toLowerCase();if(Bi.has(t))return Bi.get(t);const e=ts(s);if(!e)return Bi.set(t,null),null;try{const n=lf(e.buffer.slice(e.offset,e.offset+e.size));if(n.meshes.length===0)return Bi.set(t,null),null;if(!n.hierarchy&&n.hlod&&n.hlod.hierarchy){const u=n.hlod.hierarchy.toLowerCase(),d=Ze.get(u);if(d){const f=ts(d);if(f)try{const p=lf(f.buffer.slice(f.offset,f.offset+f.size));p.hierarchy&&(n.hierarchy=p.hierarchy)}catch{}}}const i=new Map;if(n.hlod&&n.hlod.lods.length>0){const u=n.hlod.lods[n.hlod.lods.length-1];for(const d of u){const f=d.name.split("."),p=f.length>1?f[1].toLowerCase():f[0].toLowerCase();i.set(p,d.boneIdx)}}const r=[],o=new sn;if(o.rotation.x=-Math.PI/2,n.hierarchy&&n.hierarchy.pivots.length>0){for(let u=0;u<n.hierarchy.pivots.length;u++){const d=n.hierarchy.pivots[u],f=new Jt;if(f.name=d.name,u>0){f.position.set(d.translation[0],d.translation[1],d.translation[2]);const p=d.rotation;(p[0]!==0||p[1]!==0||p[2]!==0||p[3]!==1)&&f.quaternion.set(p[0],p[1],p[2],p[3])}r.push(f)}for(let u=0;u<n.hierarchy.pivots.length;u++){const d=n.hierarchy.pivots[u].parentIdx;d===4294967295||d>=r.length?o.add(r[u]):r[d].add(r[u])}}const a=[];if(n.hierarchy)for(let u=0;u<n.hierarchy.pivots.length;u++){const d=new It;if(u===0)d.identity();else{const f=n.hierarchy.pivots[u],p=new It;p.compose(new R(f.translation[0],f.translation[1],f.translation[2]),new Xe(f.rotation[0],f.rotation[1],f.rotation[2],f.rotation[3]),new R(1,1,1));const _=f.parentIdx;_!==4294967295&&_<a.length?d.multiplyMatrices(a[_],p):d.copy(p)}a.push(d)}let l=0;for(const u of n.meshes){const d=u.name.toLowerCase();if(d.includes("shadow")||d.includes("collision")||u.attrs&BA||u.attrs&(OA|FA))continue;const f=u.boneLinks&&u.boneLinks.length>0&&((u.attrs&kA)===GA||u.attrs&HA);if(f&&a.length>0){const g=u.vertices,m=u.normals,y=u.boneLinks,x=new R,v=new R,A=new Bt;for(let M=0;M<y.length&&M*3+2<g.length;M++){const w=y[M];w<a.length&&(x.set(g[M*3],g[M*3+1],g[M*3+2]),x.applyMatrix4(a[w]),g[M*3]=x.x,g[M*3+1]=x.y,g[M*3+2]=x.z,m&&(A.getNormalMatrix(a[w]),v.set(m[M*3],m[M*3+1],m[M*3+2]),v.applyMatrix3(A).normalize(),m[M*3]=v.x,m[M*3+1]=v.y,m[M*3+2]=v.z))}}const p=d.includes("light")||d.includes("glow")||d.includes("muzzle")||d.includes("fxfire")||d.includes("flame")||d.includes("beacon"),_=VA(u);if(_){if(_.castShadow=!p&&!_.userData.isPrelitUnlit,_.receiveShadow=!p,_.userData.isLightMesh=p,p&&(_.renderOrder=100),f)o.add(_);else{const g=i.get(d);g!==void 0&&g<r.length?r[g].add(_):o.add(_)}l++}}const c=new sn;c.add(o);const h=l>0?c:null;return Bi.set(t,h),h}catch(n){return console.warn("Failed to parse W3D:",s,n),Bi.set(t,null),null}}const tc=-Math.PI/2;let $m=1;class cf{constructor(t,e,n){this.id=$m++,this.name=e,this.kindOf=n||new Set,this.mesh=t,this.position={x:t.position.x,y:t.position.y,z:t.position.z},this.rotation=(t.rotation.y||0)-tc,this.selected=!1,this.selectionIndicator=null,this.ai=null,t.userData.unitId=this.id,t.userData.unit=this}isSelectable(){return this.kindOf.has("UNSELECTABLE")?!1:(!this.kindOf.has("SELECTABLE")&&this.kindOf.size>0,!0)}isMobile(){return!(this.kindOf.has("STRUCTURE")||this.kindOf.has("IMMOBILE"))}isLocallyControlled(){return!0}isUnit(){return this.kindOf.has("VEHICLE")||this.kindOf.has("INFANTRY")||this.kindOf.has("AIRCRAFT")||this.kindOf.has("HUGE_VEHICLE")}isStructure(){return this.kindOf.has("STRUCTURE")}syncPositionFromMesh(){this.position.x=this.mesh.position.x,this.position.y=this.mesh.position.y,this.position.z=this.mesh.position.z,this.rotation=this.mesh.rotation.y-tc}syncMeshFromPosition(){this.mesh.position.x=this.position.x,this.mesh.position.y=this.position.y,this.mesh.position.z=this.position.z,this.mesh.rotation.y=this.rotation+tc}}function qA(){$m=1}function $A(s,t,e,n){var g,m;if(!s||s.length===0)return;I.units.clear(),qA();const i=Ze.size>0,r=new yi(6,6,6),o=new In({color:16729156}),a=new In({color:4500223}),l=new In({color:16755268}),c=new In({color:11184810}),h=e-2*n,d=s.filter(y=>!(y.flags&256)&&!(y.flags&Im)&&!(y.flags&QS)&&!y.name.startsWith("*")).slice(0,5e3);let f=0,p=0;for(const y of d){const x=y.x,v=(h-1)*se-y.y,A=y.z&&Math.abs(y.z)>.1?y.z*Sn:Xh(y.x,y.y);let M=!1;if(i){const w=ef(y.name);if(w){const C=YA(w);if(C){const b=C.clone();b.position.set(x,A,v),y.angle&&(b.rotation.y=y.angle),b.traverse(F=>{F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0)});const S=es.get(y.name.toLowerCase());b.userData={name:y.name,w3d:w,kindOf:S||null},I.objectMarkers.add(b);const L=new cf(b,y.name,S);I.units.set(L.id,L),f++,M=!0}}}if(!M){let w=c;const C=y.name.toLowerCase();C.includes("structure")||C.includes("building")||C.includes("commandcenter")||C.includes("barracks")||C.includes("factory")||C.includes("power")||C.includes("supply")||C.includes("techbuilding")?w=o:C.includes("vehicle")||C.includes("infantry")||C.includes("tank")||C.includes("unit")||C.includes("soldier")?w=a:(C.includes("civilian")||C.includes("civ"))&&(w=l);const b=new le(r,w);b.castShadow=!0,b.receiveShadow=!0,b.position.set(x,A+3,v);const S=es.get(y.name.toLowerCase());b.userData={name:y.name,kindOf:S||null},I.objectMarkers.add(b);const L=new cf(b,y.name,S);I.units.set(L.id,L),p++}}if(i&&(console.log(`Objects: ${f} W3D models loaded, ${p} fallback cubes`),p>0)){const y=new Map;for(const x of d)ef(x.name)||y.set(x.name,(y.get(x.name)||0)+1);if(y.size>0){console.groupCollapsed(`Unresolved objects (${y.size} unique names)`);for(const[x,v]of[...y].sort((A,M)=>M[1]-A[1]))console.log(`  ${x} (x${v})`);console.groupEnd()}}const _=((m=(g=I.currentMapData)==null?void 0:g.lighting)==null?void 0:m.todIndex)??1;Fm(_===3)}function hf(s){I.currentMapData=s;const t=s.heightMap;if(!t)throw new Error("No heightmap data found in map file");const{scene:e}=I;for(I.terrainMesh&&(e.remove(I.terrainMesh),I.terrainMesh.geometry.dispose(),I.terrainMesh.material.dispose()),I.terrainMatColored&&(I.terrainMatColored.dispose(),I.terrainMatColored=null),I.terrainMatTextured&&(I.terrainMatTextured.dispose(),I.terrainMatTextured=null),I.terrainAtlasTex&&(I.terrainAtlasTex.dispose(),I.terrainAtlasTex=null),I.terrainAtlas=null,e.remove(I.objectMarkers),I.objectMarkers.traverse(q=>{q.geometry&&q.geometry.dispose(),q.material&&(q.material.map&&q.material.map.dispose(),q.material.dispose())}),I.objectMarkers=new sn,Bi.clear(),Ki.clear(),ma.clear(),I.roadMesh&&(e.remove(I.roadMesh),I.roadMesh.traverse(q=>{q.geometry&&q.geometry.dispose(),q.material&&(q.material.map&&q.material.map.dispose(),q.material.dispose())}),I.roadMesh=null),I.waterPlane&&(e.remove(I.waterPlane),I.waterPlane.geometry.dispose(),I.waterPlane.material.dispose(),I.waterPlane=null);e.children.length>0;)e.remove(e.children[0]);const n=t.width,i=t.height,r=t.borderSize,o=s.blendTileData;oe.size>0&&o&&(I.terrainAtlas=eA(s),I.terrainAtlas&&(I.terrainAtlasTex=new mn(I.terrainAtlas.atlasPixels,I.terrainAtlas.atlasW,I.terrainAtlas.atlasH,Re),I.terrainAtlasTex.flipY=!1,I.terrainAtlasTex.magFilter=ue,I.terrainAtlasTex.minFilter=$e,I.terrainAtlasTex.generateMipmaps=!0,I.terrainAtlasTex.needsUpdate=!0));const a=n-1,l=i-1,c=a*l,h=c*4,u=new Float32Array(h*3),d=new Float32Array(h*3),f=new Uint32Array(c*6),p=new Float32Array(h*2),_=new Float32Array(h*2),g=new Float32Array(h*2),m=new Float32Array(h),y=new Float32Array(h);let x=255,v=0;for(let q=0;q<t.data.length;q++)t.data[q]<x&&(x=t.data[q]),t.data[q]>v&&(v=t.data[q]);const A=new ct,M=new ct,w=new ct,C=new ct,b=[0,1,1,0],S=[0,0,1,1];for(let q=0;q<l;q++)for(let mt=0;mt<a;mt++){const Ut=q*a+mt,At=Ut*4;for(let bt=0;bt<4;bt++){const B=mt+b[bt],tt=q+S[bt],Z=tt*n+B,ht=t.data[Z],nt=(At+bt)*3;u[nt]=(B-r)*se,u[nt+1]=ht*Sn,u[nt+2]=(i-1-tt-r)*se}const Y=q*n+mt;Nm(Y,o,t,x,v,A);let ot=null,vt=0,lt=!1;if(o&&Y<o.blendTileNdxes.length){const bt=o.blendTileNdxes[Y];if(bt>0&&o.blendedTiles&&bt<o.blendedTiles.length){const B=o.blendedTiles[bt],tt=wa(B);ot=tt.alphas,lt=tt.needFlip,vt=B.blendNdx,Xr(B.blendNdx,o,M)}}let Pt=null,Nt=0;if(o&&o.extraBlendTileNdxes&&Y<o.extraBlendTileNdxes.length){const bt=o.extraBlendTileNdxes[Y];if(bt>0&&o.blendedTiles&&bt<o.blendedTiles.length){const B=o.blendedTiles[bt];Pt=wa(B).alphas,Nt=B.blendNdx,Xr(B.blendNdx,o,w)}}for(let bt=0;bt<4;bt++){C.copy(A),ot&&ot[bt]>0&&C.lerp(M,ot[bt]/255),Pt&&Pt[bt]>0&&C.lerp(w,Pt[bt]/255);const B=(At+bt)*3;d[B]=C.r,d[B+1]=C.g,d[B+2]=C.b}if(I.terrainAtlas&&o){const bt=o.tileNdxes[Y];for(let B=0;B<4;B++){const tt=Ql(bt,B,I.terrainAtlas);p[(At+B)*2]=tt[0],p[(At+B)*2+1]=tt[1]}if(ot)for(let B=0;B<4;B++){const tt=Ql(vt,B,I.terrainAtlas);_[(At+B)*2]=tt[0],_[(At+B)*2+1]=tt[1],m[At+B]=ot[B]/255}if(Pt)for(let B=0;B<4;B++){const tt=Ql(Nt,B,I.terrainAtlas);g[(At+B)*2]=tt[0],g[(At+B)*2+1]=tt[1],y[At+B]=Pt[B]/255}}const U=Ut*6;lt?(f[U]=At+1,f[U+1]=At+3,f[U+2]=At,f[U+3]=At+1,f[U+4]=At+2,f[U+5]=At+3):(f[U]=At,f[U+1]=At+1,f[U+2]=At+2,f[U+3]=At,f[U+4]=At+2,f[U+5]=At+3)}I.terrainGeo=new Ot,I.terrainGeo.setAttribute("position",new qt(u,3)),I.terrainGeo.setAttribute("color",new qt(d,3)),I.terrainGeo.setIndex(new qt(f,1)),I.terrainAtlas&&(I.terrainGeo.setAttribute("baseUV",new qt(p,2)),I.terrainGeo.setAttribute("blendUV",new qt(_,2)),I.terrainGeo.setAttribute("extraUV",new qt(g,2)),I.terrainGeo.setAttribute("blendAlpha",new qt(m,1)),I.terrainGeo.setAttribute("extraAlpha",new qt(y,1))),I.terrainGeo.computeVertexNormals(),I.terrainMatColored=new In({vertexColors:!0,flatShading:!1,side:Ce}),I.terrainAtlas&&I.terrainAtlasTex&&(I.terrainMatTextured=nA(I.terrainAtlasTex,s.lighting),I.colorMode="texture",document.getElementById("color-mode").value="texture");const L=n-2*r,F=i-2*r;Om(s.lighting,L,F);const D=I.colorMode==="texture"&&I.terrainMatTextured?I.terrainMatTextured:I.terrainMatColored;I.terrainMesh=new le(I.terrainGeo,D),I.terrainMesh.receiveShadow=!0,I.terrainMesh.castShadow=!1,e.add(I.terrainMesh);const k=s.polygonTriggers.filter(q=>q.isWaterArea);k.length>0&&xb(k,L,F,n,i),oe.size>0&&lw();const X=Vm(s.objects);if(X.length>0){Hw(X);const q=X.filter(mt=>mt.type!==Cn).length;console.log(`Roads: ${X.length} total (${X.length-q} straight, ${q} junctions), ${ro.size} types from INI`),I.roadMesh=uA(X,i,r),I.roadMesh&&e.add(I.roadMesh)}oe.size>0&&(Gw(),Ze.size>0&&ow()),$A(s.objects,n,i,r),e.add(I.objectMarkers);const Q=L*se/2,rt=F*se/2,W=(x+v)/2*Sn,at=Math.max(L,F)*se;return $.target.set(Q,W,rt),$.height=Math.min(qh,at*.35),$.yaw=Math.PI*.75,$.pitch=ol,$.velocity.set(0,0,0),Lw(),Rw(),{drawW:n,drawH:i,playW:L,playH:F,minH:x,maxH:v}}function ZA(s){return new Promise((t,e)=>{const n=[];function i(){s.readEntries(r=>{r.length===0?t(n):(n.push(...r),i())},e)}i()})}function Zm(s){return new Promise((t,e)=>s.file(t,e))}async function Km(s,t,e){const n=await ZA(s.createReader());for(const i of n)if(i.isDirectory)await Km(i,`${t}/${i.name}`,e);else{const r=i.name.toLowerCase();if(r.endsWith(".big")||r.endsWith(".map"))continue;const o=await Zm(i);e.push({path:`${t}/${o.name}`,file:o})}}async function uf(s){var e,n;const t=document.getElementById("loading");t.classList.add("active");try{const i=[],r=[];let o=null;const a=[];let l=!1;if(s.items)for(let u=0;u<s.items.length;u++){const d=(n=(e=s.items[u]).webkitGetAsEntry)==null?void 0:n.call(e);d&&(a.push(d),d.isDirectory&&(l=!0))}if(l){document.querySelector("#loading p").textContent="Scanning dropped files...",await new Promise(u=>setTimeout(u,50));for(const u of a)if(u.isDirectory)await Km(u,u.name,r);else{const d=await Zm(u),f=await d.slice(0,4).arrayBuffer(),p=String.fromCharCode(...new Uint8Array(f));p==="BIGF"||p==="BIG4"?i.push(d):Fd(d.name)?r.push({path:null,file:d}):o=d}}else{const u=Array.from(s.files);for(const d of u){const f=await d.slice(0,4).arrayBuffer(),p=String.fromCharCode(...new Uint8Array(f));p==="BIGF"||p==="BIG4"?i.push(d):Fd(d.name)?r.push({path:null,file:d}):o=d}}for(const u of i){document.querySelector("#loading p").textContent=`Loading ${u.name}...`,await new Promise(f=>setTimeout(f,50));const d=await u.arrayBuffer();cb(d,u.name),document.getElementById("btn-list-big").style.display=""}let c=0;if(r.length>0){document.querySelector("#loading p").textContent=`Adding ${r.length} override file(s)...`,await new Promise(d=>setTimeout(d,50));let u=!1;for(const{path:d,file:f}of r){const p=await f.arrayBuffer();if(d)Vc(d,p),c++,d.toLowerCase().endsWith(".ini")&&(u=!0);else{const _=lb(f.name,p);c+=_.length,f.name.toLowerCase().endsWith(".ini")&&(u=!0)}}u&&Dm(),document.getElementById("btn-list-big").style.display="",console.log(`Added ${c} loose override file(s) to pool`)}if((i.length>0||c>0)&&I.currentMapData&&I.scene){document.querySelector("#loading p").textContent="Rebuilding terrain...",await new Promise(d=>setTimeout(d,50));const u=hf(I.currentMapData);of(I.currentMapData,u)}if(o){document.querySelector("#loading p").textContent="Parsing map file...",await new Promise(g=>setTimeout(g,50));const u=await o.arrayBuffer();let d=await Ww(u);if(!d){t.classList.remove("active");return}await new Promise(g=>setTimeout(g,50));const f=Yw(d);I.scene||tA();const p=hf(f);document.getElementById("drop-overlay").classList.add("hidden"),document.getElementById("viewer").classList.add("active");const _=o.name.replace(/\.map$/i,"");document.getElementById("map-name").textContent=_,of(f,p),console.log("Map loaded:",f)}else if(oe.size>0&&!I.currentMapData){document.getElementById("drop-overlay").classList.remove("hidden");const u=Vs.size>0,d=Zi.size;let f=`BIG loaded (${oe.size} files`;u?f+=`, ${Vs.size} terrain mappings`:f+=", no Terrain.ini found — also drop ini.big",f+=")",d>0&&(f+=` + ${d} override(s)`),f+=" — now drop a .map file",document.querySelector("#drop-zone p").textContent=f}else c>0&&!I.currentMapData&&oe.size===Zi.size&&(document.querySelector("#drop-zone p").textContent=`${Zi.size} override file(s) ready — drop .big files and/or a .map file`)}catch(i){console.error("Failed to load:",i),$h(`Failed to load: ${i.message}`)}finally{document.querySelector("#loading p").textContent="Parsing map file...",t.classList.remove("active")}}function KA(){const s=document.getElementById("drop-zone"),t=document.getElementById("drop-overlay");document.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation()}),document.addEventListener("drop",e=>{e.preventDefault(),e.stopPropagation()}),t.addEventListener("dragenter",()=>s.classList.add("drag-over")),t.addEventListener("dragleave",e=>{t.contains(e.relatedTarget)||s.classList.remove("drag-over")}),t.addEventListener("drop",e=>{var n,i;s.classList.remove("drag-over"),((i=(n=e.dataTransfer)==null?void 0:n.files)==null?void 0:i.length)>0&&uf(e.dataTransfer)}),document.getElementById("viewer").addEventListener("drop",e=>{var n,i;e.preventDefault(),((i=(n=e.dataTransfer)==null?void 0:n.files)==null?void 0:i.length)>0&&uf(e.dataTransfer)}),document.getElementById("viewer").addEventListener("dragover",e=>e.preventDefault()),document.getElementById("toggle-wireframe").addEventListener("click",function(){this.classList.toggle("active");const e=this.classList.contains("active");I.terrainMatColored&&(I.terrainMatColored.wireframe=e),I.terrainMatTextured&&(I.terrainMatTextured.wireframe=e)}),document.getElementById("toggle-objects").addEventListener("click",function(){this.classList.toggle("active"),I.objectMarkers.visible=this.classList.contains("active")}),document.getElementById("toggle-water").addEventListener("click",function(){this.classList.toggle("active"),I.waterPlane&&(I.waterPlane.visible=this.classList.contains("active"))}),document.getElementById("toggle-roads").addEventListener("click",function(){this.classList.toggle("active"),I.roadMesh&&(I.roadMesh.visible=this.classList.contains("active"))}),document.getElementById("toggle-shadows").addEventListener("click",function(){this.classList.toggle("active");const e=this.classList.contains("active");I.renderer.shadowMap.enabled=e,I.sunLight&&(I.sunLight.castShadow=e),I.terrainMatColored&&(I.terrainMatColored.needsUpdate=!0),I.terrainMatTextured&&(I.terrainMatTextured.needsUpdate=!0)}),document.getElementById("toggle-edge-scroll").addEventListener("click",function(){this.classList.toggle("active"),$.edgeScrollEnabled=this.classList.contains("active")}),document.getElementById("height-scale").addEventListener("input",function(){I.currentHeightScale=parseFloat(this.value),document.getElementById("height-scale-value").textContent=I.currentHeightScale.toFixed(1)+"x",_b(I.currentHeightScale)}),document.getElementById("color-mode").addEventListener("change",function(){I.colorMode=this.value,gb()}),document.getElementById("time-of-day").addEventListener("change",function(){yb(parseInt(this.value))}),document.getElementById("btn-reset-camera").addEventListener("click",()=>{if(!I.currentMapData)return;const e=I.currentMapData.heightMap,n=e.borderSize,i=e.width-2*n,r=e.height-2*n,o=i*se/2,a=r*se/2,l=Math.max(i,r)*se;$.target.set(o,0,a),$.height=Math.min(qh,l*.35),$.yaw=Math.PI*.75,$.pitch=ol,$.velocity.set(0,0,0)}),document.getElementById("btn-load-new").addEventListener("click",()=>{document.getElementById("drop-overlay").classList.remove("hidden")}),document.getElementById("btn-list-big").addEventListener("click",()=>{if(oe.size===0){$h("No files loaded");return}const n=db().filter(o=>o.startsWith("art/terrain/")&&o.endsWith(".tga")),i=Zi.size;let r=`${oe.size} files in pool.
${n.length} terrain TGAs.
${Vs.size} INI terrain mappings.`;i>0&&(r+=`
${i} loose file override(s) (marked [OVERRIDE] in console).`),r+=`

Full list logged to browser console (F12).`,alert(r)})}KA();

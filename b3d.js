var cc="187";var hc=0,Ga=1,uc=2;var Rs=1,dc=2,qi=3,Yi=0,We=1,rn=2,fi=0,Cs=1,Is=2,Ha=3,Wa=4,fc=5;var Zi=100,pc=101,mc=102,gc=103,_c=104,xc=200,vc=201,yc=202,Sc=203,Mc=204,bc=205,wc=206,Tc=207,Ec=208,Ac=209,Rc=210,Cc=211,Ic=212,Pc=213,Lc=214,Dc=0,Nc=1,Uc=2,Va=3,Fc=4,Oc=5,Bc=6,zc=7,kc=0,Gc=1,Hc=2,yn=0,Xa=1,qa=2,Ya=3,Za=4,Ja=5,$a=6,Ps=7;var Ls=301,Ji=302,Rr=303,Cr=304,Ir=1000,Pr=1001,Wc=1002,Yn=1003,Vc=1004;var Ds=1005;var an=1006,Lr=1007;var Zn=1008;var mn=1009,Xc=1010,qc=1011,Ns=1012,Ka=1013,Jn=1014,Ln=1015,Sn=1016,Qa=1017,ja=1018,pi=1020,Yc=35902,Zc=35899,Jc=1021,$c=1022,Dn=1023,$i=1026,$n=1027,Kc=1028,to=1029,mi=1030,eo=1031;var no=1033,Dr=33776,Nr=33777,Ur=33778,Fr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,Or=37490,fo=37491,po=37808,mo=37809,go=37810,_o=37811,xo=37812,vo=37813,yo=37814,So=37815,Mo=37816,bo=37817,wo=37818,To=37819,Eo=37820,Ao=37821,Ro=36492,Co=36494,Io=36495,Po=36283,Lo=36284,Br=36285,Do=36286;var No=0,Qc=1,gi="",Ki="srgb",Uo="srgb-linear",Fo="linear",ve="srgb";var jc=512,th=513,eh=514,Oo=515,nh=516,ih=517,Bo=518,zo=519;var ko="300 es",Go=2000;function hu(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uu(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ms(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sh(){let t=Ms("canvas");return t.style.display="block",t}var Al={},Vi=null;function bs(...t){let e="THREE."+t.shift();if(Vi)Vi("log",e,...t);else console.log(e,...t)}function rh(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Jt(...t){t=rh(t);let e="THREE."+t.shift();if(Vi)Vi("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Zt(...t){t=rh(t);let e="THREE."+t.shift();if(Vi)Vi("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function hi(...t){let e=t.join(" ");if(e in Al)return;Al[e]=!0,Jt(...t)}function ah(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var oh={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Nn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var da=Math.PI/180,wr=180/Math.PI;function Kn(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[t&255]+Ge[t>>8&255]+Ge[t>>16&255]+Ge[t>>24&255]+"-"+Ge[e&255]+Ge[e>>8&255]+"-"+Ge[e>>16&15|64]+Ge[e>>24&255]+"-"+Ge[n&63|128]+Ge[n>>8&255]+"-"+Ge[n>>16&255]+Ge[n>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function ae(t,e,n){return Math.max(e,Math.min(n,t))}function du(t,e){return(t%e+e)%e}function fa(t,e,n){return(1-n)*t+n*e}function lh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zr(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ch(t,e){if(e.constructor===Float32Array)return t;let n=zr(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function hh(t,e){if(e.constructor===Float32Array)return t;let n=zr(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}class mt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r+0],h=s[r+1],m=s[r+2],_=s[r+3];if(u!==_||o!==d||l!==h||c!==m){let b=o*d+l*h+c*m+u*_;if(b<0)d=-d,h=-h,m=-m,_=-_,b=-b;let p=1-a;if(b<0.9995){let f=Math.acos(b),T=Math.sin(f);p=Math.sin(p*f)/T,a=Math.sin(a*f)/T,o=o*p+d*a,l=l*p+h*a,c=c*p+m*a,u=u*p+_*a}else{o=o*p+d*a,l=l*p+h*a,c=c*p+m*a,u=u*p+_*a;let f=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=f,l*=f,c*=f,u*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],d=s[r+1],h=s[r+2],m=s[r+3];return t[e]=a*m+c*u+o*h-l*d,t[e+1]=o*m+c*d+l*u-a*h,t[e+2]=l*m+c*h+a*d-o*u,t[e+3]=c*m-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),d=o(n/2),h=o(i/2),m=o(s/2);switch(r){case"XYZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"YXZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"ZXY":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"ZYX":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"YZX":this._x=d*c*u+l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u-d*h*m;break;case"XZY":this._x=d*c*u-l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u+d*h*m;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var pa=new D,Rl=new gn;class ee{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],m=n[8],_=i[0],b=i[3],p=i[6],f=i[1],T=i[4],v=i[7],M=i[2],A=i[5],R=i[8];return s[0]=r*_+a*f+o*M,s[3]=r*b+a*T+o*A,s[6]=r*p+a*v+o*R,s[1]=l*_+c*f+u*M,s[4]=l*b+c*T+u*A,s[7]=l*p+c*v+u*R,s[2]=d*_+h*f+m*M,s[5]=d*b+h*T+m*A,s[8]=d*p+h*v+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,d=a*o-c*s,h=l*s-r*o,m=e*u+n*d+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*r)*_,t[3]=d*_,t[4]=(c*e-i*o)*_,t[5]=(i*s-a*e)*_,t[6]=h*_,t[7]=(n*o-l*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ma.makeScale(t,e)),this}rotate(t){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var ma=new ee,Cl=new ee().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Il=new ee().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function fu(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var ce=fu();function Pn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Wi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Ti;class Ho{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Ti===void 0)Ti=Ms("canvas");Ti.width=t.width,Ti.height=t.height;let i=Ti.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Ti}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ms("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Pn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Pn(e[n]/255)*255);else e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var pu=0;class Us{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width||0,e.height||0,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(ga(i[r].image));else s.push(ga(i[r]))}else s=ga(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function ga(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Ho.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Jt("Texture: Unable to serialize Texture."),{}}var mu=0,_a=new D;class Be extends Nn{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Be.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Kn(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=300;Be.DEFAULT_ANISOTROPY=1;class we{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],m=o[9],_=o[2],b=o[6],p=o[10];if(Math.abs(c-d)<0.01&&Math.abs(u-_)<0.01&&Math.abs(m-b)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(u+_)<0.1&&Math.abs(m+b)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,v=(h+1)/2,M=(p+1)/2,A=(c+d)/4,R=(u+_)/4,g=(m+b)/4;if(T>v&&T>M)if(T<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(T),i=A/n,s=R/n;else if(v>M)if(v<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(v),n=A/i,s=g/i;else if(M<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(M),n=R/s,i=g/s;return this.set(n,i,s,e),this}let f=Math.sqrt((b-m)*(b-m)+(u-_)*(u-_)+(d-c)*(d-c));if(Math.abs(f)<0.001)f=1;return this.x=(b-m)/f,this.y=(u-_)/f,this.z=(d-c)/f,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wo extends Nn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Be({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.mipmapsAutoUpdate!==void 0)e.mipmapsAutoUpdate=t.mipmapsAutoUpdate;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Wo{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class kr extends Be{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vo extends Be{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class fe{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,u,d,h,m,_,b){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,d,h,m,_,b)}set(t,e,n,i,s,r,a,o,l,c,u,d,h,m,_,b){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=u,p[14]=d,p[3]=h,p[7]=m,p[11]=_,p[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ei.setFromMatrixColumn(t,0).length(),s=1/Ei.setFromMatrixColumn(t,1).length(),r=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=r*c,h=r*u,m=a*c,_=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=h+m*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=m+h*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,h=o*u,m=l*c,_=l*u;e[0]=d+_*a,e[4]=m*a-h,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=h*a-m,e[6]=_+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,h=o*u,m=l*c,_=l*u;e[0]=d-_*a,e[4]=-r*u,e[8]=m+h*a,e[1]=h+m*a,e[5]=r*c,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,h=r*u,m=a*c,_=a*u;e[0]=o*c,e[4]=m*l-h,e[8]=d*l+_,e[1]=o*u,e[5]=_*l+d,e[9]=h*l-m,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,h=r*l,m=a*o,_=a*l;e[0]=o*c,e[4]=_-d*u,e[8]=m*u+h,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*u+m,e[10]=d-_*u}else if(t.order==="XZY"){let d=r*o,h=r*l,m=a*o,_=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=d*u+_,e[5]=r*c,e[9]=h*u-m,e[2]=m*u-h,e[6]=a*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gu,t,_u)}lookAt(t,e,n){let i=this.elements;if(Qe.subVectors(t,e),Qe.lengthSq()===0)Qe.z=1;if(Qe.normalize(),Hn.crossVectors(n,Qe),Hn.lengthSq()===0){if(Math.abs(n.z)===1)Qe.x+=0.0001;else Qe.z+=0.0001;Qe.normalize(),Hn.crossVectors(n,Qe)}return Hn.normalize(),Qs.crossVectors(Qe,Hn),i[0]=Hn.x,i[4]=Qs.x,i[8]=Qe.x,i[1]=Hn.y,i[5]=Qs.y,i[9]=Qe.y,i[2]=Hn.z,i[6]=Qs.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],m=n[2],_=n[6],b=n[10],p=n[14],f=n[3],T=n[7],v=n[11],M=n[15],A=i[0],R=i[4],g=i[8],w=i[12],P=i[1],V=i[5],U=i[9],X=i[13],ot=i[2],C=i[6],tt=i[10],et=i[14],k=i[3],at=i[7],q=i[11],nt=i[15];return s[0]=r*A+a*P+o*ot+l*k,s[4]=r*R+a*V+o*C+l*at,s[8]=r*g+a*U+o*tt+l*q,s[12]=r*w+a*X+o*et+l*nt,s[1]=c*A+u*P+d*ot+h*k,s[5]=c*R+u*V+d*C+h*at,s[9]=c*g+u*U+d*tt+h*q,s[13]=c*w+u*X+d*et+h*nt,s[2]=m*A+_*P+b*ot+p*k,s[6]=m*R+_*V+b*C+p*at,s[10]=m*g+_*U+b*tt+p*q,s[14]=m*w+_*X+b*et+p*nt,s[3]=f*A+T*P+v*ot+M*k,s[7]=f*R+T*V+v*C+M*at,s[11]=f*g+T*U+v*tt+M*q,s[15]=f*w+T*X+v*et+M*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],d=t[10],h=t[14],m=t[3],_=t[7],b=t[11],p=t[15],f=o*h-l*d,T=a*h-l*u,v=a*d-o*u,M=r*h-l*c,A=r*d-o*c,R=r*u-a*c;return e*(_*f-b*T+p*v)-n*(m*f-b*M+p*A)+i*(m*T-_*M+p*R)-s*(m*v-_*A+b*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],d=t[10],h=t[11],m=t[12],_=t[13],b=t[14],p=t[15],f=e*a-n*r,T=e*o-i*r,v=e*l-s*r,M=n*o-i*a,A=n*l-s*a,R=i*l-s*o,g=c*_-u*m,w=c*b-d*m,P=c*p-h*m,V=u*b-d*_,U=u*p-h*_,X=d*p-h*b,ot=f*X-T*U+v*V+M*P-A*w+R*g;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/ot;return t[0]=(a*X-o*U+l*V)*C,t[1]=(i*U-n*X-s*V)*C,t[2]=(_*R-b*A+p*M)*C,t[3]=(d*A-u*R-h*M)*C,t[4]=(o*P-r*X-l*w)*C,t[5]=(e*X-i*P+s*w)*C,t[6]=(b*v-m*R-p*T)*C,t[7]=(c*R-d*v+h*T)*C,t[8]=(r*U-a*P+l*g)*C,t[9]=(n*P-e*U-s*g)*C,t[10]=(m*A-_*v+p*f)*C,t[11]=(u*v-c*A-h*f)*C,t[12]=(a*w-r*V-o*g)*C,t[13]=(e*V-n*w+i*g)*C,t[14]=(_*T-m*M-b*f)*C,t[15]=(c*M-u*T+d*f)*C,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,u=a+a,d=s*l,h=s*c,m=s*u,_=r*c,b=r*u,p=a*u,f=o*l,T=o*c,v=o*u,{x:M,y:A,z:R}=n;return i[0]=(1-(_+p))*M,i[1]=(h+v)*M,i[2]=(m-T)*M,i[3]=0,i[4]=(h-v)*A,i[5]=(1-(d+p))*A,i[6]=(b+f)*A,i[7]=0,i[8]=(m+T)*R,i[9]=(b-f)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Ei.set(i[0],i[1],i[2]).length(),a=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length();if(s<0)r=-r;un.copy(this);let l=1/r,c=1/a,u=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i),m,_;if(o)m=s/(r-s),_=r*s/(r-s);else if(a===2000)m=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===2001)m=-r/(r-s),_=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),h=-(n+i)/(n-i),m,_;if(o)m=1/(r-s),_=r/(r-s);else if(a===2000)m=-2/(r-s),_=-(r+s)/(r-s);else if(a===2001)m=-1/(r-s),_=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Ei=new D,un=new fe,gu=new D(0,0,0),_u=new D(1,1,1),Hn=new D,Qs=new D,Qe=new D,Pl=new fe,Ll=new gn;class vn{constructor(t=0,e=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],d=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-ae(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(ae(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-ae(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Fs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var xu=0,Dl=new D,Ai=new gn,En=new fe,js=new D,hs=new D,vu=new D,yu=new gn,Nl=new D(1,0,0),Ul=new D(0,1,0),Fl=new D(0,0,1),Ol={type:"added"},Su={type:"removed"},Ri={type:"childadded",child:null},xa={type:"childremoved",child:null};class be extends Nn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();let t=new D,e=new vn,n=new gn,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new ee}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)js.copy(t);else js.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)En.lookAt(hs,js,this.up);else En.lookAt(js,hs,this.up);if(this.quaternion.setFromRotationMatrix(En),i)En.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(En),this.quaternion.premultiply(Ai.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Zt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ol),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null;else Zt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su),xa.child=t,this.dispatchEvent(xa),xa.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld);return t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ol),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),d=r(t.skeletons),h=r(t.animations),m=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(m.length>0)n.nodes=m}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}be.DEFAULT_UP=new D(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class en extends be{constructor(){super();this.isGroup=!0,this.type="Group"}}var Mu={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let b=e.getJointPose(_,n),p=this._getHandJoint(l,_);if(b!==null)p.matrix.fromArray(b.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=b.radius;p.visible=b!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=0.02,m=0.005;if(l.inputState.pinching&&d>h+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=h-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Mu)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function va(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=du(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=va(r,s,t+0.3333333333333333),this.g=va(r,s,t),this.b=va(r,s,t-0.3333333333333333)}return ce.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=uh[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Jt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return ce.workingToColorSpace(He.copy(this),t),Math.round(ae(He.r*255,0,255))*65536+Math.round(ae(He.g*255,0,255))*256+Math.round(ae(He.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(He.copy(this),e);let{r:n,g:i,b:s}=He,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t="srgb"){ce.workingToColorSpace(He.copy(this),t);let{r:e,g:n,b:i}=He;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(tr);let n=fa(Wn.h,tr.h,e),i=fa(Wn.s,tr.s,e),s=fa(Wn.l,tr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var He=new te;te.NAMES=uh;class Qi extends be{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var dn=new D,An=new D,ya=new D,Rn=new D,Ci=new D,Ii=new D,Bl=new D,Sa=new D,Ma=new D,ba=new D,wa=new we,Ta=new we,Ea=new we;class tn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),An.subVectors(n,e),ya.subVectors(t,e);let r=dn.dot(dn),a=dn.dot(An),o=dn.dot(ya),l=An.dot(An),c=An.dot(ya),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,h=(l*o-a*c)*d,m=(r*c-a*o)*d;return s.set(1-h-m,m,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Rn)===null)return!1;return Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Rn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Rn.x),o.addScaledVector(r,Rn.y),o.addScaledVector(a,Rn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return wa.setScalar(0),Ta.setScalar(0),Ea.setScalar(0),wa.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,n),Ea.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(wa,s.x),r.addScaledVector(Ta,s.y),r.addScaledVector(Ea,s.z),r}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),An.subVectors(t,e),dn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),dn.cross(An).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Ci.subVectors(i,n),Ii.subVectors(s,n),Sa.subVectors(t,n);let o=Ci.dot(Sa),l=Ii.dot(Sa);if(o<=0&&l<=0)return e.copy(n);Ma.subVectors(t,i);let c=Ci.dot(Ma),u=Ii.dot(Ma);if(c>=0&&u<=c)return e.copy(i);let d=o*u-c*l;if(d<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),e.copy(n).addScaledVector(Ci,r);ba.subVectors(t,s);let h=Ci.dot(ba),m=Ii.dot(ba);if(m>=0&&h<=m)return e.copy(s);let _=h*l-o*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ii,a);let b=c*m-h*u;if(b<=0&&u-c>=0&&h-m>=0)return Bl.subVectors(s,i),a=(u-c)/(u-c+(h-m)),e.copy(i).addScaledVector(Bl,a);let p=1/(b+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(Ci,r).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Un{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,fn);else fn.fromBufferAttribute(s,r);fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();er.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();er.copy(n.boundingBox)}er.applyMatrix4(t.matrixWorld),this.union(er)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),nr.subVectors(this.max,us),Pi.subVectors(t.a,us),Li.subVectors(t.b,us),Di.subVectors(t.c,us),Vn.subVectors(Li,Pi),Xn.subVectors(Di,Li),ri.subVectors(Pi,Di);let e=[0,-Vn.z,Vn.y,0,-Xn.z,Xn.y,0,-ri.z,ri.y,Vn.z,0,-Vn.x,Xn.z,0,-Xn.x,ri.z,0,-ri.x,-Vn.y,Vn.x,0,-Xn.y,Xn.x,0,-ri.y,ri.x,0];if(!Aa(e,Pi,Li,Di,nr))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Aa(e,Pi,Li,Di,nr))return!1;return ir.crossVectors(Vn,Xn),e=[ir.x,ir.y,ir.z],Aa(e,Pi,Li,Di,nr)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(fn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Cn=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,er=new Un,Pi=new D,Li=new D,Di=new D,Vn=new D,Xn=new D,ri=new D,us=new D,nr=new D,ir=new D,ai=new D;function Aa(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){ai.fromArray(t,r);let o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=e.dot(ai),c=n.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ie=new D,sr=new mt,bu=0;class pn extends Nn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?zr(t):void 0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=this._denormalize(e);return e}setX(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=this._denormalize(e);return e}setY(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=this._denormalize(e);return e}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=this._denormalize(e);return e}setW(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ch(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):hh(t,this.array)}}class Gr extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hr extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}var wu=new Un,ds=new D,Ra=new D;class _i{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else wu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Ra)),this.expandByPoint(ds.copy(t.center).sub(Ra));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Tu=0,sn=new fe,Ca=new be,Ni=new D,je=new Un,fs=new Un,Ue=new D;class Ve extends Nn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((hu(t))?Hr:Gr)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Un;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(je.setFromBufferAttribute(s),this.morphTargetsRelative)Ue.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ue);else this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new _i;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(fs.setFromBufferAttribute(a),this.morphTargetsRelative)Ue.addVectors(je.min,fs.min),je.expandByPoint(Ue),Ue.addVectors(je.max,fs.max),je.expandByPoint(Ue);else je.expandByPoint(fs.min),je.expandByPoint(fs.max)}je.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ue.fromBufferAttribute(a,l),o)Ni.fromBufferAttribute(t,l),Ue.add(Ni);i=Math.max(i,n.distanceToSquared(Ue))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let w=0;w<n.count;w++)a[w]=new D,o[w]=new D;let c=new D,u=new D,d=new D,h=new mt,m=new mt,_=new mt,b=new D,p=new D;function f(w,P,V){l[w]=l[P]=l[V]=1,c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,V),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,P),_.fromBufferAttribute(s,V),u.sub(c),d.sub(c),m.sub(h),_.sub(h);let U=1/(m.x*_.y-_.x*m.y);if(!isFinite(U))return;b.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(U),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(U),a[w].add(b),a[P].add(b),a[V].add(b),o[w].add(p),o[P].add(p),o[V].add(p)}let T=this.groups;if(T.length===0)T=[{start:0,count:t.count}];for(let w=0,P=T.length;w<P;++w){let V=T[w],{start:U,count:X}=V;for(let ot=U,C=U+X;ot<C;ot+=3)f(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}let v=new D,M=new D,A=new D,R=new D;function g(w){A.fromBufferAttribute(i,w),R.copy(A);let P=a[w];v.copy(P),v.sub(A.multiplyScalar(A.dot(P))).normalize(),M.crossVectors(R,P);let U=M.dot(o[w])<0?-1:1;r.setXYZW(w,v.x,v.y,v.z,U)}for(let w=0,P=n.count;w<P;++w)if(l[w])g(w);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new D,s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D;if(t)for(let d=0,h=t.count;d<h;d+=3){let m=t.getX(d+0),_=t.getX(d+1),b=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,b),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),a.add(c),o.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,d=new l.constructor(o.length*c),h=0,m=0;for(let _=0,b=o.length;_<b;_++){if(a.isInterleavedBufferAttribute)h=o[_]*a.data.stride+a.offset;else h=o[_]*c;for(let p=0;p<c;p++)d[m++]=l[h++]}return new pn(d,c,u)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Ve,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let d=l[c],h=t(d,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){let h=l[u];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xo{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};let e=zl(this.array);if(t.arrayBuffers[e]===void 0)t.arrayBuffers[e]=this.array.slice(0).buffer;let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};let e=zl(this.array);if(t.arrayBuffers[e]===void 0)t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function zl(t){if(t.buffer._uuid===void 0)t.buffer._uuid=Kn();if(t.byteOffset===0&&t.byteLength===t.buffer.byteLength)return t.buffer._uuid;return t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}var Ye=new D;class ws{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?zr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=this._normalize(e);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=this._normalize(e);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=this._normalize(e);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=this._denormalize(e);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=this._denormalize(e);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=this._denormalize(e);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=this._denormalize(e);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){bs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new ws(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){bs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ch(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):hh(t,this.data.array)}}var Ia=new D,Eu=new D,Au=new ee;class xn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ia.subVectors(n,e).cross(Eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ia),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Au.getNormalMatrix(t),i=this.coplanarPoint(Ia).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Ru=0;class Fn extends Nn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new te().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.diffuseRoughness!==void 0)this.diffuseRoughness=t.diffuseRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum;if(t.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1];if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new xn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new mt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale);if(t.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null;if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class Bs extends Fn{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Ui,ps=new D,Fi=new D,Oi=new D,Bi=new mt,ms=new mt,dh=new fe,rr=new D,gs=new D,ar=new D,kl=new mt,Pa=new mt,Gl=new mt;class Wr extends be{constructor(t=new Bs){super();if(this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new Ve;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new Xo(e,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new ws(n,3,0,!1)),Ui.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=Ui,this.material=t,this.center=new mt(0.5,0.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){if(t.camera===null)Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Fi.setFromMatrixScale(this.matrixWorld),dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Fi.multiplyScalar(-Oi.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;or(rr.set(-0.5,-0.5,0),Oi,r,Fi,i,s),or(gs.set(0.5,-0.5,0),Oi,r,Fi,i,s),or(ar.set(0.5,0.5,0),Oi,r,Fi,i,s),kl.set(0,0),Pa.set(1,0),Gl.set(1,1);let a=t.ray.intersectTriangle(rr,gs,ar,!1,ps);if(a===null){if(or(gs.set(-0.5,0.5,0),Oi,r,Fi,i,s),Pa.set(0,1),a=t.ray.intersectTriangle(rr,ar,gs,!1,ps),a===null)return}let o=t.ray.origin.distanceTo(ps);if(o<t.near||o>t.far)return;e.push({distance:o,point:ps.clone(),uv:tn.getInterpolation(ps,rr,gs,ar,kl,Pa,Gl,new mt),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function or(t,e,n,i,s,r){if(Bi.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)ms.x=r*Bi.x-s*Bi.y,ms.y=s*Bi.x+r*Bi.y;else ms.copy(Bi);t.copy(e),t.x+=ms.x,t.y+=ms.y,t.applyMatrix4(dh)}var In=new D,La=new D,lr=new D,cr=new D;class Vr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){La.copy(t).add(e).multiplyScalar(0.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(La);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(lr),a=cr.dot(this.direction),o=-cr.dot(lr),l=cr.lengthSq(),c=Math.abs(1-r*r),u,d,h,m;if(c>0)if(u=r*o-a,d=r*a-o,m=s*c,u>=0)if(d>=-m)if(d<=m){let _=1/c;u*=_,d*=_,h=u*(u+r*d+2*a)+d*(r*u+d+2*o)+l}else d=s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else d=-s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else if(d<=-m)u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else if(d<=m)u=0,d=Math.min(Math.max(-s,-o),s),h=d*(d+2*o)+l;else u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(La).addScaledVector(lr,d);return h}intersectSphere(t,e){if(t.radius<0)return null;In.subVectors(t.center,this.origin);let n=In.dot(this.direction),i=In.dot(In)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u;else a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,u=t.x-r.x,d=t.y-r.y,h=t.z-r.z,m=e.x-r.x,_=e.y-r.y,b=e.z-r.z,p=n.x-r.x,f=n.y-r.y,T=n.z-r.z,v=Math.abs(o),M=Math.abs(l),A=Math.abs(c),R,g,w,P,V,U,X,ot,C,tt,et,k;if(v>=M&&v>=A)if(w=o,U=u,C=m,k=p,o>=0)R=l,g=c,P=d,V=h,X=_,ot=b,tt=f,et=T;else R=c,g=l,P=h,V=d,X=b,ot=_,tt=T,et=f;else if(M>=A)if(w=l,U=d,C=_,k=f,l>=0)R=c,g=o,P=h,V=u,X=b,ot=m,tt=T,et=p;else R=o,g=c,P=u,V=h,X=m,ot=b,tt=p,et=T;else if(w=c,U=h,C=b,k=T,c>=0)R=o,g=l,P=u,V=d,X=m,ot=_,tt=p,et=f;else R=l,g=o,P=d,V=u,X=_,ot=m,tt=f,et=p;if(w===0)return null;let at=R/w,q=g/w,nt=1/w,dt=P-at*U,Lt=V-q*U,Z=X-at*C,ut=ot-q*C,It=tt-at*k,Ut=et-q*k,St=It*ut-Ut*Z,E=dt*Ut-Lt*It,O=Z*Lt-ut*dt;if(i){if(St<0||E<0||O<0)return null}else if((St<0||E<0||O<0)&&(St>0||E>0||O>0))return null;let H=St+E+O;if(H===0)return null;let rt=nt*(St*U+E*C+O*k);if(H>0?rt<0:rt>0)return null;return this.at(rt/H,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zs extends Fn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Hl=new fe,oi=new Vr,hr=new _i,Wl=new D,ur=new D,dr=new D,fr=new D,Da=new D,pr=new D,Vl=new D,mr=new D;class he extends be{constructor(t=new Ve,e=new zs){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){pr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(Da.fromBufferAttribute(u,t),r)pr.addScaledVector(Da,c);else pr.addScaledVector(Da.sub(e),c)}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(hr.copy(n.boundingSphere),hr.applyMatrix4(s),oi.copy(t.ray).recast(t.near),hr.containsPoint(oi.origin)===!1){if(oi.intersectSphere(hr,Wl)===null)return;if(oi.origin.distanceToSquared(Wl)>(t.far-t.near)**2)return}if(Hl.copy(s).invert(),oi.copy(t.ray).applyMatrix4(Hl),n.boundingBox!==null){if(oi.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,oi)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:d,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){let b=d[m],p=r[b.materialIndex],f=Math.max(b.start,h.start),T=Math.min(a.count,Math.min(b.start+b.count,h.start+h.count));for(let v=f,M=T;v<M;v+=3){let A=a.getX(v),R=a.getX(v+1),g=a.getX(v+2);if(i=gr(this,p,t,n,l,c,u,A,R,g),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let b=m,p=_;b<p;b+=3){let f=a.getX(b),T=a.getX(b+1),v=a.getX(b+2);if(i=gr(this,r,t,n,l,c,u,f,T,v),i)i.faceIndex=Math.floor(b/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){let b=d[m],p=r[b.materialIndex],f=Math.max(b.start,h.start),T=Math.min(o.count,Math.min(b.start+b.count,h.start+h.count));for(let v=f,M=T;v<M;v+=3){let A=v,R=v+1,g=v+2;if(i=gr(this,p,t,n,l,c,u,A,R,g),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let b=m,p=_;b<p;b+=3){let f=b,T=b+1,v=b+2;if(i=gr(this,r,t,n,l,c,u,f,T,v),i)i.faceIndex=Math.floor(b/3),e.push(i)}}}}function Cu(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;mr.copy(o),mr.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(mr);if(c<n.near||c>n.far)return null;return{distance:c,point:mr.clone(),object:t}}function gr(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,ur),t.getVertexPosition(l,dr),t.getVertexPosition(c,fr);let u=Cu(t,e,n,i,ur,dr,fr,Vl);if(u){let d=new D;if(tn.getBarycoord(Vl,ur,dr,fr,d),s)u.uv=tn.getInterpolatedAttribute(s,o,l,c,d,new mt);if(r)u.uv1=tn.getInterpolatedAttribute(r,o,l,c,d,new mt);if(a){if(u.normal=tn.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new D,materialIndex:0};tn.getNormal(ur,dr,fr,h.normal),u.face=h,u.barycoord=d}return u}class Xr extends Be{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,u,d){super(null,r,a,o,l,c,i,s,u,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr extends pn{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var zi=new fe,Xl=new fe,_r=[],ql=new Un,Iu=new fe,_s=new he,xs=new _i;class qr extends he{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Iu)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Un;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),ql.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(ql)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new _i;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),xs.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(xs.copy(this.boundingSphere),xs.applyMatrix4(n),t.ray.intersectsSphere(xs)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,zi),Xl.multiplyMatrices(n,zi),_s.matrixWorld=Xl,_s.raycast(t,_r);for(let r=0,a=_r.length;r<a;r++){let o=_r[r];o.instanceId=s,o.object=this,e.push(o)}_r.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new Xr(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var li=new _i,Pu=new mt(0.5,0.5),xr=new D;class ui{constructor(t=new xn,e=new xn,n=new xn,i=new xn,s=new xn,r=new xn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],m=s[8],_=s[9],b=s[10],p=s[11],f=s[12],T=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,p-m,M-f).normalize(),i[1].setComponents(l+r,h+c,p+m,M+f).normalize(),i[2].setComponents(l+a,h+u,p+_,M+T).normalize(),i[3].setComponents(l-a,h-u,p-_,M-T).normalize(),n)i[4].setComponents(o,d,b,v).normalize(),i[5].setComponents(l-o,h-d,p-b,M-v).normalize();else if(i[4].setComponents(l-o,h-d,p-b,M-v).normalize(),e===2000)i[5].setComponents(l+o,h+d,p+b,M+v).normalize();else if(e===2001)i[5].setComponents(o,d,b,v).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);let e=Pu.distanceTo(t.center);return li.radius=0.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(xr.x=i.normal.x>0?t.max.x:t.min.x,xr.y=i.normal.y>0?t.max.y:t.min.y,xr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Yl=new fe;class Yr{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];if(Yl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new ui;n[i].setFromProjectionMatrix(Yl,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++){if(e[i]===void 0)e[i]=new ui;e[i].copy(n[i])}return this._count=t._count,this}clone(){return new Yr().copy(this)}}class Zr extends Be{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xi extends Be{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn extends Be{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Jr extends Qn{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class $r extends Be{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class jn extends Ve{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],d=0,h=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2));function m(_,b,p,f,T,v,M,A,R,g,w){let P=v/R,V=M/g,U=v/2,X=M/2,ot=A/2,C=R+1,tt=g+1,et=0,k=0,at=new D;for(let q=0;q<tt;q++){let nt=q*V-X;for(let dt=0;dt<C;dt++){let Lt=dt*P-U;at[_]=Lt*f,at[b]=nt*T,at[p]=ot,l.push(at.x,at.y,at.z),at[_]=0,at[b]=0,at[p]=A>0?1:-1,c.push(at.x,at.y,at.z),u.push(dt/R),u.push(1-q/g),et+=1}}for(let q=0;q<g;q++)for(let nt=0;nt<R;nt++){let dt=d+nt+C*q,Lt=d+nt+C*(q+1),Z=d+(nt+1)+C*(q+1),ut=d+(nt+1)+C*q;o.push(dt,Lt,ut),o.push(Lt,Z,ut),k+=6}a.addGroup(h,k,w),h+=k,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Je{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,h=(r-c)/d;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new mt:new D);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,i=[],s=[],r=[],a=new D,o=new fe;for(let h=0;h<=t;h++){let m=h/t;i[h]=this.getTangentAt(m,new D)}s[0]=new D,r[0]=new D;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ae(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,m))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(ae(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let m=1;m<=t;m++)s[m].applyMatrix4(o.makeRotationAxis(i[m],h*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class ks extends Je{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new mt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,h=l-this.aY;o=d*c-h*u+this.aX,l=d*u+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qo extends ks{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Yo(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,m*=u,s(a,o,h,m)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Zl=new D,Jl=new D,Na=new Yo,Ua=new Yo,Fa=new Yo;class Zo extends Je{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else Jl.subVectors(i[0],i[1]).add(i[0]),l=Jl;let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Zl.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Zl;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(u),h),_=Math.pow(u.distanceToSquared(d),h),b=Math.pow(d.distanceToSquared(c),h);if(_<0.0001)_=1;if(m<0.0001)m=_;if(b<0.0001)b=_;Na.initNonuniformCatmullRom(l.x,u.x,d.x,c.x,m,_,b),Ua.initNonuniformCatmullRom(l.y,u.y,d.y,c.y,m,_,b),Fa.initNonuniformCatmullRom(l.z,u.z,d.z,c.z,m,_,b)}else if(this.curveType==="catmullrom")Na.initCatmullRom(l.x,u.x,d.x,c.x,this.tension),Ua.initCatmullRom(l.y,u.y,d.y,c.y,this.tension),Fa.initCatmullRom(l.z,u.z,d.z,c.z,this.tension);return n.set(Na.calc(o),Ua.calc(o),Fa.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $l(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function Lu(t,e){let n=1-t;return n*n*e}function Du(t,e){return 2*(1-t)*t*e}function Nu(t,e){return t*t*e}function ys(t,e,n,i){return Lu(t,e)+Du(t,n)+Nu(t,i)}function Uu(t,e){let n=1-t;return n*n*n*e}function Fu(t,e){let n=1-t;return 3*n*n*t*e}function Ou(t,e){return 3*(1-t)*t*t*e}function Bu(t,e){return t*t*t*e}function Ss(t,e,n,i,s){return Uu(t,e)+Fu(t,n)+Ou(t,i)+Bu(t,s)}class Kr extends Je{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Ss(t,i.x,s.x,r.x,a.x),Ss(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jo extends Je{constructor(t=new D,e=new D,n=new D,i=new D){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Ss(t,i.x,s.x,r.x,a.x),Ss(t,i.y,s.y,r.y,a.y),Ss(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qr extends Je{constructor(t=new mt,e=new mt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $o extends Je{constructor(t=new D,e=new D){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jr extends Je{constructor(t=new mt,e=new mt,n=new mt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ys(t,i.x,s.x,r.x),ys(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ta extends Je{constructor(t=new D,e=new D,n=new D){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ys(t,i.x,s.x,r.x),ys(t,i.y,s.y,r.y),ys(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ea extends Je{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set($l(a,o.x,l.x,c.x,u.x),$l(a,o.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var Er=Object.freeze({__proto__:null,ArcCurve:qo,CatmullRomCurve3:Zo,CubicBezierCurve:Kr,CubicBezierCurve3:Jo,EllipseCurve:ks,LineCurve:Qr,LineCurve3:$o,QuadraticBezierCurve:jr,QuadraticBezierCurve3:ta,SplineCurve:ea});class Ko extends Je{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Er[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Er[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Ar extends Ko{constructor(t){super();if(this.type="Path",this.currentPoint=new mt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new jr(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Kr(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new ks(t,e,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gs extends Ar{constructor(t){super(t);this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ar().fromJSON(i))}return this}}function zu(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=fh(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=Vu(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let u=o,d=l;for(let h=n;h<s;h+=n){let m=t[h],_=t[h+1];if(m<o)o=m;if(_<l)l=_;if(m>u)u=m;if(_>d)d=_}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Ts(r,a,n,o,l,c,0),a}function fh(t,e,n,i,s){let r;if(s===ed(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Kl(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Kl(a/i|0,t[a],t[a+1],r);if(r&&Xi(r,r.next))As(r),r=r.next;return r}function di(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(Xi(n,n.next)||Me(n.prev,n,n.next)===0)){if(As(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ts(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)Ju(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?Gu(t,i,s,r):ku(t)){e.push(l.i,t.i,c.i),As(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)Ts(di(t),e,n,i,s,r,1);else if(a===1)t=Hu(di(t),e),Ts(t,e,n,i,s,r,2);else if(a===2)Wu(t,e,n,i,s,r);break}}}function ku(t){let e=t.prev,n=t,i=t.next;if(Me(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),m=Math.max(o,l,c),_=i.next;while(_!==e){if(_.x>=u&&_.x<=h&&_.y>=d&&_.y<=m&&vs(s,o,r,l,a,c,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Gu(t,e,n,i){let s=t.prev,r=t,a=t.next;if(Me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,m=Math.min(o,l,c),_=Math.min(u,d,h),b=Math.max(o,l,c),p=Math.max(u,d,h),f=Ba(m,_,e,n,i),T=Ba(b,p,e,n,i),{prevZ:v,nextZ:M}=t;while(v&&v.z>=f&&M&&M.z<=T){if(v.x>=m&&v.x<=b&&v.y>=_&&v.y<=p&&v!==s&&v!==a&&vs(o,u,l,d,c,h,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,M.x>=m&&M.x<=b&&M.y>=_&&M.y<=p&&M!==s&&M!==a&&vs(o,u,l,d,c,h,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}while(v&&v.z>=f){if(v.x>=m&&v.x<=b&&v.y>=_&&v.y<=p&&v!==s&&v!==a&&vs(o,u,l,d,c,h,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}while(M&&M.z<=T){if(M.x>=m&&M.x<=b&&M.y>=_&&M.y<=p&&M!==s&&M!==a&&vs(o,u,l,d,c,h,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Hu(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!Xi(i,s)&&mh(i,n,n.next,s)&&Es(i,s)&&Es(s,i))e.push(i.i,n.i,s.i),As(n),As(n.next),n=t=s;n=n.next}while(n!==t);return di(n)}function Wu(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&Qu(a,o)){let l=gh(a,o);a=di(a,a.next),l=di(l,l.next),Ts(a,e,n,i,s,r,0),Ts(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function Vu(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=fh(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(Ku(c))}s.sort(Xu);for(let r=0;r<s.length;r++)n=qu(s[r],n);return n}function Xu(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function qu(t,e){let n=Yu(t,e);if(!n)return e;let i=gh(n,t);return di(i,i.next),di(n,n.next)}function Yu(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(Xi(t,n))return n;do{if(Xi(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r){if(r=d,a=n.x<n.next.x?n:n.next,d===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&ph(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);if(Es(n,t)&&(d<u||d===u&&(n.x>a.x||n.x===a.x&&Zu(a,n))))a=n,u=d}n=n.next}while(n!==o);return a}function Zu(t,e){return Me(t.prev,t,e.prev)<0&&Me(e.next,t,t.next)<0}function Ju(t,e,n,i){let s=t;do{if(s.z===0)s.z=Ba(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,$u(s)}function $u(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function Ba(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Ku(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function ph(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function vs(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&ph(t,e,n,i,s,r,a,o)}function Qu(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!ju(t,e)&&(Es(t,e)&&Es(e,t)&&td(t,e)&&(Me(t.prev,t,e.prev)||Me(t,e.prev,e))||Xi(t,e)&&Me(t.prev,t,t.next)>0&&Me(e.prev,e,e.next)>0)}function Me(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Xi(t,e){return t.x===e.x&&t.y===e.y}function mh(t,e,n,i){let s=yr(Me(t,e,n)),r=yr(Me(t,e,i)),a=yr(Me(n,i,t)),o=yr(Me(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&vr(t,n,e))return!0;if(r===0&&vr(t,i,e))return!0;if(a===0&&vr(n,t,i))return!0;if(o===0&&vr(n,e,i))return!0;return!1}function vr(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function yr(t){return t>0?1:t<0?-1:0}function ju(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&mh(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Es(t,e){return Me(t.prev,t,t.next)<0?Me(t,e,t.next)>=0&&Me(t,t.prev,e)>=0:Me(t,e,t.prev)<0||Me(t,t.next,e)<0}function td(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function gh(t,e){let n=za(t.i,t.x,t.y),i=za(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Kl(t,e,n,i){let s=za(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function As(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function za(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ed(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class _h{static triangulate(t,e,n=2){return zu(t,e,n)}}class ci{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return ci.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Ql(t),jl(n,t);let r=t.length;e.forEach(Ql);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,jl(n,e[o]);let a=_h.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function Ql(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function jl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Hs extends Ve{constructor(t=new Gs([new mt(0.5,0.5),new mt(-0.5,0.5),new mt(-0.5,-0.5),new mt(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new _e(i,3)),this.setAttribute("uv",new _e(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:0.2,m=e.bevelSize!==void 0?e.bevelSize:h-0.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,b=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,f=e.UVGenerator!==void 0?e.UVGenerator:nd,T,v=!1,M,A,R,g;if(p){T=p.getSpacedPoints(c),v=!0,d=!1;let J=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(c,J),A=new D,R=new D,g=new D}if(!d)b=0,h=0,m=0,_=0;let w=a.extractPoints(l),{shape:P,holes:V}=w;if(!ci.isClockWise(P)){P=P.reverse();for(let J=0,lt=V.length;J<lt;J++){let ft=V[J];if(ci.isClockWise(ft))V[J]=ft.reverse()}}function X(J){let At=J[0];for(let Tt=1;Tt<=J.length;Tt++){let Wt=Tt%J.length,Ot=J[Wt],jt=Ot.x-At.x,$t=Ot.y-At.y,ue=jt*jt+$t*$t,N=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(At.x),Math.abs(At.y)),Te=0.000000000000000000010000000000000001*N*N;if(ue<=Te){J.splice(Wt,1),Tt--;continue}At=Ot}}X(P),V.forEach(X);let ot=V.length,C=P;for(let J=0;J<ot;J++){let lt=V[J];P=P.concat(lt)}function tt(J,lt,ft){if(!lt)Zt("ExtrudeGeometry: vec does not exist");return J.clone().addScaledVector(lt,ft)}let et=P.length;function k(J,lt,ft){let At,Tt,Wt,Ot=J.x-lt.x,jt=J.y-lt.y,$t=ft.x-J.x,ue=ft.y-J.y,N=Ot*Ot+jt*jt,Te=Ot*ue-jt*$t;if(Math.abs(Te)>Number.EPSILON){let Kt=Math.sqrt(N),B=Math.sqrt($t*$t+ue*ue),z=lt.x-jt/Kt,Mt=lt.y+Ot/Kt,pt=ft.x-ue/B,bt=ft.y+$t/B,Qt=((pt-z)*ue-(bt-Mt)*$t)/(Ot*ue-jt*$t);At=z+Ot*Qt-J.x,Tt=Mt+jt*Qt-J.y;let S=At*At+Tt*Tt;if(S<=2)return new mt(At,Tt);else Wt=Math.sqrt(S/2)}else{let Kt=!1;if(Ot>Number.EPSILON){if($t>Number.EPSILON)Kt=!0}else if(Ot<-Number.EPSILON){if($t<-Number.EPSILON)Kt=!0}else if(Math.sign(jt)===Math.sign(ue))Kt=!0;if(Kt)At=-jt,Tt=Ot,Wt=Math.sqrt(N);else At=Ot,Tt=jt,Wt=Math.sqrt(N/2)}return new mt(At/Wt,Tt/Wt)}let at=[];for(let J=0,lt=C.length,ft=lt-1,At=J+1;J<lt;J++,ft++,At++){if(ft===lt)ft=0;if(At===lt)At=0;at[J]=k(C[J],C[ft],C[At])}let q=[],nt,dt=at.concat();for(let J=0,lt=ot;J<lt;J++){let ft=V[J];nt=[];for(let At=0,Tt=ft.length,Wt=Tt-1,Ot=At+1;At<Tt;At++,Wt++,Ot++){if(Wt===Tt)Wt=0;if(Ot===Tt)Ot=0;nt[At]=k(ft[At],ft[Wt],ft[Ot])}q.push(nt),dt=dt.concat(nt)}let Lt;if(b===0)Lt=ci.triangulateShape(C,V);else{let J=[],lt=[];for(let ft=0;ft<b;ft++){let At=ft/b,Tt=h*Math.cos(At*Math.PI/2),Wt=m*Math.sin(At*Math.PI/2)+_;for(let Ot=0,jt=C.length;Ot<jt;Ot++){let $t=tt(C[Ot],at[Ot],Wt);if(E($t.x,$t.y,-Tt),At===0)J.push($t)}for(let Ot=0,jt=ot;Ot<jt;Ot++){let $t=V[Ot];nt=q[Ot];let ue=[];for(let N=0,Te=$t.length;N<Te;N++){let Kt=tt($t[N],nt[N],Wt);if(E(Kt.x,Kt.y,-Tt),At===0)ue.push(Kt)}if(At===0)lt.push(ue)}}Lt=ci.triangulateShape(J,lt)}let Z=Lt.length,ut=m+_;for(let J=0;J<et;J++){let lt=d?tt(P[J],dt[J],ut):P[J];if(!v)E(lt.x,lt.y,0);else R.copy(M.normals[0]).multiplyScalar(lt.x),A.copy(M.binormals[0]).multiplyScalar(lt.y),g.copy(T[0]).add(R).add(A),E(g.x,g.y,g.z)}for(let J=1;J<=c;J++)for(let lt=0;lt<et;lt++){let ft=d?tt(P[lt],dt[lt],ut):P[lt];if(!v)E(ft.x,ft.y,u/c*J);else R.copy(M.normals[J]).multiplyScalar(ft.x),A.copy(M.binormals[J]).multiplyScalar(ft.y),g.copy(T[J]).add(R).add(A),E(g.x,g.y,g.z)}for(let J=b-1;J>=0;J--){let lt=J/b,ft=h*Math.cos(lt*Math.PI/2),At=m*Math.sin(lt*Math.PI/2)+_;for(let Tt=0,Wt=C.length;Tt<Wt;Tt++){let Ot=tt(C[Tt],at[Tt],At);E(Ot.x,Ot.y,u+ft)}for(let Tt=0,Wt=V.length;Tt<Wt;Tt++){let Ot=V[Tt];nt=q[Tt];for(let jt=0,$t=Ot.length;jt<$t;jt++){let ue=tt(Ot[jt],nt[jt],At);if(!v)E(ue.x,ue.y,u+ft);else E(ue.x,ue.y+T[c-1].y,T[c-1].x+ft)}}}It(),Ut();function It(){let J=i.length/3;if(d){let lt=0,ft=et*lt;for(let At=0;At<Z;At++){let Tt=Lt[At];O(Tt[2]+ft,Tt[1]+ft,Tt[0]+ft)}lt=c+b*2,ft=et*lt;for(let At=0;At<Z;At++){let Tt=Lt[At];O(Tt[0]+ft,Tt[1]+ft,Tt[2]+ft)}}else{for(let lt=0;lt<Z;lt++){let ft=Lt[lt];O(ft[2],ft[1],ft[0])}for(let lt=0;lt<Z;lt++){let ft=Lt[lt];O(ft[0]+et*c,ft[1]+et*c,ft[2]+et*c)}}n.addGroup(J,i.length/3-J,0)}function Ut(){let J=i.length/3,lt=0;St(C,lt),lt+=C.length;for(let ft=0,At=V.length;ft<At;ft++){let Tt=V[ft];St(Tt,lt),lt+=Tt.length}n.addGroup(J,i.length/3-J,1)}function St(J,lt){let ft=J.length;while(--ft>=0){let At=ft,Tt=ft-1;if(Tt<0)Tt=J.length-1;for(let Wt=0,Ot=c+b*2;Wt<Ot;Wt++){let jt=et*Wt,$t=et*(Wt+1),ue=lt+At+jt,N=lt+Tt+jt,Te=lt+Tt+$t,Kt=lt+At+$t;H(ue,N,Te,Kt)}}}function E(J,lt,ft){o.push(J),o.push(lt),o.push(ft)}function O(J,lt,ft){rt(J),rt(lt),rt(ft);let At=i.length/3,Tt=f.generateTopUV(n,i,At-3,At-2,At-1);ht(Tt[0]),ht(Tt[1]),ht(Tt[2])}function H(J,lt,ft,At){rt(J),rt(lt),rt(At),rt(lt),rt(ft),rt(At);let Tt=i.length/3,Wt=f.generateSideWallUV(n,i,Tt-6,Tt-3,Tt-2,Tt-1);ht(Wt[0]),ht(Wt[1]),ht(Wt[3]),ht(Wt[1]),ht(Wt[2]),ht(Wt[3])}function rt(J){i.push(o[J*3+0]),i.push(o[J*3+1]),i.push(o[J*3+2])}function ht(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return id(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new Er[i.type]().fromJSON(i);return new Hs(n,t.options)}}var nd={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new mt(r,a),new mt(o,l),new mt(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],m=e[s*3+1],_=e[s*3+2],b=e[r*3],p=e[r*3+1],f=e[r*3+2];if(Math.abs(o-u)<Math.abs(a-c))return[new mt(a,1-l),new mt(c,1-d),new mt(h,1-_),new mt(b,1-f)];else return[new mt(o,1-l),new mt(u,1-d),new mt(m,1-_),new mt(p,1-f)]}};function id(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class ti extends Ve{constructor(t=[new mt(0,-0.5),new mt(0.5,0),new mt(0,0.5)],e=12,n=0,i=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ae(i,0,Math.PI*2);let s=[],r=[],a=[],o=[],l=[],c=1/e,u=new D,d=new mt,h=new D,m=new D,_=new D,b=0,p=0;for(let f=0;f<=t.length-1;f++)switch(f){case 0:b=t[f+1].x-t[f].x,p=t[f+1].y-t[f].y,h.x=p*1,h.y=-b,h.z=p*0,_.copy(h),h.normalize(),o.push(h.x,h.y,h.z);break;case t.length-1:_.normalize(),o.push(_.x,_.y,_.z);break;default:b=t[f+1].x-t[f].x,p=t[f+1].y-t[f].y,h.x=p*1,h.y=-b,h.z=p*0,m.copy(h),h.x+=_.x,h.y+=_.y,h.z+=_.z,h.normalize(),o.push(h.x,h.y,h.z),_.copy(m)}for(let f=0;f<=e;f++){let T=n+f*c*i,v=Math.sin(T),M=Math.cos(T);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*M,r.push(u.x,u.y,u.z),d.x=f/e,d.y=A/(t.length-1),a.push(d.x,d.y);let R=o[3*A+0]*v,g=o[3*A+1],w=o[3*A+0]*M;l.push(R,g,w)}}for(let f=0;f<e;f++)for(let T=0;T<t.length-1;T++){let v=T+f*t.length,M=v,A=v+t.length,R=v+t.length+1,g=v+1;s.push(M,A,g),s.push(R,g,A)}this.setIndex(s),this.setAttribute("position",new _e(r,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.points,t.segments,t.phiStart,t.phiLength)}}class vi extends Ve{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,d=e/o,h=[],m=[],_=[],b=[];for(let p=0;p<c;p++){let f=p*d-r;for(let T=0;T<l;T++){let v=T*u-s;m.push(v,-f,0),_.push(0,0,1),b.push(T/a),b.push(1-p/o)}}for(let p=0;p<o;p++)for(let f=0;f<a;f++){let T=f+l*p,v=f+l*(p+1),M=f+1+l*(p+1),A=f+1+l*p;h.push(T,v,A),h.push(v,M,A)}this.setIndex(h),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}class On extends Ve{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new D,d=new D,h=[],m=[],_=[],b=[];for(let p=0;p<=n;p++){let f=[],T=p/n,v=r+T*a,M=t*Math.cos(v),A=Math.sqrt(t*t-M*M),R=0;if(p===0&&r===0)R=0.5/e;else if(p===n&&o===Math.PI)R=-0.5/e;for(let g=0;g<=e;g++){let w=g/e,P=i+w*s;u.x=-A*Math.cos(P),u.y=M,u.z=A*Math.sin(P),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),b.push(w+R,1-T),f.push(l++)}c.push(f)}for(let p=0;p<n;p++)for(let f=0;f<e;f++){let T=c[p][f+1],v=c[p][f],M=c[p+1][f],A=c[p+1][f+1];if(p!==0||r>0)h.push(T,v,A);if(p!==n-1||o<Math.PI)h.push(v,M,A)}this.setIndex(h),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ji extends Ve{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],u=[],d=new D,h=new D,m=new D;for(let _=0;_<=n;_++){let b=r+_/n*a;for(let p=0;p<=i;p++){let f=p/i*s;h.x=(t+e*Math.cos(b))*Math.cos(f),h.y=(t+e*Math.cos(b))*Math.sin(f),h.z=e*Math.sin(b),l.push(h.x,h.y,h.z),d.x=t*Math.cos(f),d.y=t*Math.sin(f),m.subVectors(h,d).normalize(),c.push(m.x,m.y,m.z),u.push(p/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let b=1;b<=i;b++){let p=(i+1)*_+b-1,f=(i+1)*(_-1)+b-1,T=(i+1)*(_-1)+b,v=(i+1)*_+b;o.push(p,f,v),o.push(f,T,v)}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ts extends Ve{constructor(t=new ta(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new D,o=new D,l=new mt,c=new D,u=[],d=[],h=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(h,2));function _(){for(let T=0;T<e;T++)b(T);b(s===!1?e:0),f(),p()}function b(T){c=t.getPointAt(T/e,c);let v=r.normals[T],M=r.binormals[T];for(let A=0;A<=i;A++){let R=A/i*Math.PI*2,g=Math.sin(R),w=-Math.cos(R);o.x=w*v.x+g*M.x,o.y=w*v.y+g*M.y,o.z=w*v.z+g*M.z,o.normalize(),d.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,u.push(a.x,a.y,a.z)}}function p(){for(let T=1;T<=e;T++)for(let v=1;v<=i;v++){let M=(i+1)*(T-1)+(v-1),A=(i+1)*T+(v-1),R=(i+1)*T+v,g=(i+1)*(T-1)+v;m.push(M,A,g),m.push(A,R,g)}}function f(){for(let T=0;T<=e;T++)for(let v=0;v<=i;v++)l.x=T/e,l.y=v/i,h.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ts(new Er[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function yi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(tc(s))if(s.isRenderTargetTexture)Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(tc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Xe(t){let e={};for(let n=0;n<t.length;n++){let i=yi(t[n]);for(let s in i)e[s]=i[s]}return e}function tc(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function sd(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qo(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return ce.workingColorSpace}var xh={clone:yi,merge:Xe},rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Fn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(i.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new we().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(i.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class jo extends Bn{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class es extends Fn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ns extends es{constructor(t){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){if(this._anisotropy>0!==t>0)this.version++;this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){if(this._clearcoat>0!==t>0)this.version++;this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){if(this._diffuseRoughness>0!==t>0)this.version++;this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){if(this._iridescence>0!==t>0)this.version++;this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){if(this._dispersion>0!==t>0)this.version++;this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){if(this._retroreflectivity>0!==t>0)this.version++;this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){if(this._sheen>0!==t>0)this.version++;this._sheen=t}get transmission(){return this._transmission}set transmission(t){if(this._transmission>0!==t>0)this.version++;this._transmission=t}get iridescenceThicknessRange(){return hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class na extends Fn{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tl extends Fn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class el extends Fn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ki(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function Sr(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class Si{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class nl extends Si{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,m=(n-e)/(i-e),_=m*m,b=_*m,p=-d*b+2*d*_-d*m,f=(1+d)*b+(-1.5-2*d)*_+(-0.5+d)*m+1,T=(-1-h)*b+(1.5+h)*_+0.5*m,v=h*b-h*_;for(let M=0;M!==a;++M)s[M]=p*r[c+M]+f*r[l+M]+T*r[o+M]+v*r[u+M];return s}}class il extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[o+d]*c;return s}}class sl extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class rl extends Si{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let m=(n-e)/(i-e),_=1-m;for(let b=0;b!==a;++b)s[b]=r[l+b]*_+r[o+b]*m;return s}let d=a*2,h=t-1;for(let m=0;m!==a;++m){let _=r[l+m],b=r[o+m],p=h*d+m*2,f=u[p],T=u[p+1],v=t*d+m*2,M=c[v],A=c[v+1],R=ld(n,e,f,M,i);s[m]=vh(R,_,T,A,b)}return s}}function vh(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function od(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function ld(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=vh(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=od(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class ln{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ki(e,this.TimeBufferType),this.values=ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ki(t.times,Array),values:ki(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(Sr(t.settings))n.settings={inTangents:ki(t.settings.inTangents,Array),outTangents:ki(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rl(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;if(Sr(this.settings))ec(this.settings.inTangents,t),ec(this.settings.outTangents,t)}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(Sr(this.settings))nc(this.settings.inTangents,t),nc(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Zt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Zt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Zt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Zt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(uu(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Zt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,d=u-n,h=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[d+m]||_!==e[h+m]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,d=r*n;for(let h=0;h!==n;++h)e[d+h]=e[u+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,Sr(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function ec(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function nc(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=2301;class Mi extends ln{constructor(t,e,n){super(t,e,n)}}Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=2300;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;class al extends ln{constructor(t,e,n,i){super(t,e,n,i)}}al.prototype.ValueTypeName="color";class ol extends ln{constructor(t,e,n,i){super(t,e,n,i)}}ol.prototype.ValueTypeName="number";class ll extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)gn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class ia extends ln{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}}ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;class bi extends ln{constructor(t,e,n){super(t,e,n)}}bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=2300;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;class cl extends ln{constructor(t,e,n,i){super(t,e,n,i)}}cl.prototype.ValueTypeName="vector";class hl{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],m=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var yh=new hl;class ul{constructor(t){if(this.manager=t!==void 0?t:yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}ul.DEFAULT_MATERIAL_NAME="__DEFAULT";class dl extends be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}var Oa=new fe,ic=new D,sc=new D;class fl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Oa,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var Mr=new D,br=new gn,_n=new D;class sa extends be{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(Mr,br,_n),_n.x===1&&_n.y===1&&_n.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Mr,br,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mr,br,_n),_n.x===1&&_n.y===1&&_n.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Mr,br,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var qn=new D,rc=new mt,ac=new mt;class Ze extends sa{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(da*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(da*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,rc,ac),e.subVectors(ac,rc)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(da*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Sh extends fl{constructor(){super(new Ze(90,1,0.5,500));this.isPointLightShadow=!0}}class ra extends dl{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class pl extends sa{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}var Gi=-90,Hi=1;class Ws extends be{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ze(Gi,Hi,t,e);i.layers=this.layers,this.add(i);let s=new Ze(Gi,Hi,t,e);s.layers=this.layers,this.add(s);let r=new Ze(Gi,Hi,t,e);r.layers=this.layers,this.add(r);let a=new Ze(Gi,Hi,t,e);a.layers=this.layers,this.add(a);let o=new Ze(Gi,Hi,t,e);o.layers=this.layers,this.add(o);let l=new Ze(Gi,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let b=!1;if(t.isWebGLRenderer===!0)b=t.state.buffers.depth.getReversed();else b=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),b&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ml extends Ze{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}var gl="\\[\\]\\.:\\/",cd=new RegExp("["+gl+"]","g"),_l="[^"+gl+"]",hd="[^"+gl.replace("\\.","")+"]",ud=/((?:WC+[\/:])*)/.source.replace("WC",_l),dd=/(WCOD+)?/.source.replace("WCOD",hd),fd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),pd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),md=new RegExp("^"+ud+dd+fd+pd+"$"),gd=["material","materials","bones","map"];class Mh{constructor(t,e,n){let i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ge{constructor(t,e,n){this.path=e,this.parsedPath=n||ge.parseTrackName(e),this.node=ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new ge(t,e,n);else return new ge.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cd,"")}static parseTrackName(t){let e=md.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(gd.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=ge.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ge.Composite=Mh;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v0=new Float32Array(1);var oc=new fe;class aa{constructor(t,e,n=0,i=1/0){this.ray=new Vr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return oc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oc),this}intersectObject(t,e=!0,n=[]){return ka(t,this,n,e),n.sort(lc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ka(t[i],this,n,e);return n.sort(lc),n}}function lc(t,e){return t.distance-e.distance}function ka(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)ka(r[a],e,n,!0)}}class bh{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function xl(t,e,n,i){let s=_d(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function _d(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)Jt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Xh(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function xd(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)m=t.HALF_FLOAT;else m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:u,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){let _=d[h],b=d[m];if(b.start<=_.start+_.count+1)_.count=Math.max(_.count,b.start+b.count-_.start);else++h,d[h]=b}d.length=h+1;for(let m=0,_=d.length;m<_;m++){let b=d[m];t.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ad=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,_f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cf=`#if defined( USE_POINTS_UV )
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
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`;var xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ap=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define NORMAL
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
}`,kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gp=`#define PHONG
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
}`,Hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Wp=`#define STANDARD
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
}`,Vp=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Xp=`#define TOON
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
}`,qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Yp=`uniform float size;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,$p=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Qp=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:vd,alphahash_pars_fragment:yd,alphamap_fragment:Sd,alphamap_pars_fragment:Md,alphatest_fragment:bd,alphatest_pars_fragment:wd,aomap_fragment:Td,aomap_pars_fragment:Ed,batching_pars_vertex:Ad,batching_vertex:Rd,begin_vertex:Cd,beginnormal_vertex:Id,bsdfs:Pd,iridescence_fragment:Ld,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Od,color_fragment:Bd,color_pars_fragment:zd,color_pars_vertex:kd,color_vertex:Gd,common:Hd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:Yd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:$d,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Qd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:uf,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:ff,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:xf,lights_fragment_maps:vf,lights_fragment_end:yf,lightprobes_pars_fragment:Sf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Tf,map_fragment:Ef,map_pars_fragment:Af,map_particle_fragment:Rf,map_particle_pars_fragment:Cf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Pf,morphinstance_vertex:Lf,morphcolor_vertex:Df,morphnormal_vertex:Nf,morphtarget_pars_vertex:Uf,morphtarget_vertex:Ff,normal_fragment_begin:Of,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:kf,normal_vertex:Gf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:qf,opaque_fragment:Yf,packing:Zf,premultiplied_alpha_fragment:Jf,project_vertex:$f,dithering_fragment:Kf,dithering_pars_fragment:Qf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:hp,tonemapping_fragment:up,tonemapping_pars_fragment:dp,transmission_fragment:fp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:_p,worldpos_vertex:xp,background_vert:vp,background_frag:yp,backgroundCube_vert:Sp,backgroundCube_frag:Mp,cube_vert:bp,cube_frag:wp,depth_vert:Tp,depth_frag:Ep,distance_vert:Ap,distance_frag:Rp,equirect_vert:Cp,equirect_frag:Ip,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Dp,meshbasic_frag:Np,meshlambert_vert:Up,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:kp,meshphong_vert:Gp,meshphong_frag:Hp,meshphysical_vert:Wp,meshphysical_frag:Vp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:Zp,shadow_vert:Jp,shadow_frag:$p,sprite_vert:Kp,sprite_frag:Qp},Nt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new mt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},bn={basic:{uniforms:Xe([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Xe([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Xe([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Xe([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Xe([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new te(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Xe([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Xe([Nt.points,Nt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Xe([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Xe([Nt.common,Nt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Xe([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Xe([Nt.sprite,Nt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:Xe([Nt.common,Nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:Xe([Nt.lights,Nt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};bn.physical={uniforms:Xe([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var oa={r:0,b:0,g:0},jp=new fe,qh=new ee;qh.set(-1,0,0,0,1,0,0,0,1);function tm(t,e,n,i,s,r){let a=new te(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function m(T){let v=T.isScene===!0?T.background:null;if(v&&v.isTexture){let M=T.backgroundBlurriness>0;v=e.get(v,M)}return v}function _(T){let v=!1,M=m(T);if(M===null)p(a,o);else if(M&&M.isColor)p(M,1),v=!0;let A=t.xr.getEnvironmentBlendMode();if(A==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(A==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||v)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function b(T,v){let M=m(v);if(M&&M.isCubeTexture){if(c===void 0)c=new he(new jn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:yi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(qh);if(c.material.toneMapped=ce.getTransfer(M.colorSpace)!==ve,u!==M||d!==M.version||h!==t.toneMapping)c.material.needsUpdate=!0,u=M,d=M.version,h=t.toneMapping;c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)}else if(M&&M.isTexture){if(l===void 0)l=new he(new vi(2,2),new Bn({name:"BackgroundMaterial",uniforms:yi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ce.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0)M.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(M.matrix),u!==M||d!==M.version||h!==t.toneMapping)l.material.needsUpdate=!0,u=M,d=M.version,h=t.toneMapping;l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)}}function p(T,v){T.getRGB(oa,Qo(t)),n.buffers.color.setClear(oa.r,oa.g,oa.b,v,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),o=v,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:_,addToRenderList:b,dispose:f}}function em(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(U,X,ot,C,tt){let et=!1,k=d(U,C,ot,X);if(r!==k)r=k,c(r.object);if(et=m(U,C,ot,tt),et)_(U,C,ot,tt);if(tt!==null)e.update(tt,t.ELEMENT_ARRAY_BUFFER);if(et||a){if(a=!1,M(U,X,ot,C),tt!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer)}}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function u(U){return t.deleteVertexArray(U)}function d(U,X,ot,C){let tt=C.wireframe===!0,et=i[X.id];if(et===void 0)et={},i[X.id]=et;let k=U.isInstancedMesh===!0?U.id:0,at=et[k];if(at===void 0)at={},et[k]=at;let q=at[ot.id];if(q===void 0)q={},at[ot.id]=q;let nt=q[tt];if(nt===void 0)nt=h(l()),q[tt]=nt;return nt}function h(U){let X=[],ot=[],C=[];for(let tt=0;tt<n;tt++)X[tt]=0,ot[tt]=0,C[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ot,attributeDivisors:C,object:U,attributes:{},index:null}}function m(U,X,ot,C){let tt=r.attributes,et=X.attributes,k=0,at=ot.getAttributes();for(let q in at)if(at[q].location>=0){let dt=tt[q],Lt=et[q];if(Lt===void 0){if(q==="instanceMatrix"&&U.instanceMatrix)Lt=U.instanceMatrix;if(q==="instanceColor"&&U.instanceColor)Lt=U.instanceColor}if(dt===void 0)return!0;if(dt.attribute!==Lt)return!0;if(Lt&&dt.data!==Lt.data)return!0;k++}if(r.attributesNum!==k)return!0;if(r.index!==C)return!0;return!1}function _(U,X,ot,C){let tt={},et=X.attributes,k=0,at=ot.getAttributes();for(let q in at)if(at[q].location>=0){let dt=et[q];if(dt===void 0){if(q==="instanceMatrix"&&U.instanceMatrix)dt=U.instanceMatrix;if(q==="instanceColor"&&U.instanceColor)dt=U.instanceColor}let Lt={};if(Lt.attribute=dt,dt&&dt.data)Lt.data=dt.data;tt[q]=Lt,k++}r.attributes=tt,r.attributesNum=k,r.index=C}function b(){let U=r.newAttributes;for(let X=0,ot=U.length;X<ot;X++)U[X]=0}function p(U){f(U,0)}function f(U,X){let ot=r.newAttributes,C=r.enabledAttributes,tt=r.attributeDivisors;if(ot[U]=1,C[U]===0)t.enableVertexAttribArray(U),C[U]=1;if(tt[U]!==X)t.vertexAttribDivisor(U,X),tt[U]=X}function T(){let U=r.newAttributes,X=r.enabledAttributes;for(let ot=0,C=X.length;ot<C;ot++)if(X[ot]!==U[ot])t.disableVertexAttribArray(ot),X[ot]=0}function v(U,X,ot,C,tt,et,k){if(k===!0)t.vertexAttribIPointer(U,X,ot,tt,et);else t.vertexAttribPointer(U,X,ot,C,tt,et)}function M(U,X,ot,C){b();let tt=C.attributes,et=ot.getAttributes(),k=X.defaultAttributeValues;for(let at in et){let q=et[at];if(q.location>=0){let nt=tt[at];if(nt===void 0){if(at==="instanceMatrix"&&U.instanceMatrix)nt=U.instanceMatrix;if(at==="instanceColor"&&U.instanceColor)nt=U.instanceColor}if(nt!==void 0){let dt=nt.normalized,Lt=nt.itemSize,Z=e.get(nt);if(Z===void 0)continue;let{buffer:ut,type:It,bytesPerElement:Ut}=Z,St=It===t.INT||It===t.UNSIGNED_INT||nt.gpuType===Ka;if(nt.isInterleavedBufferAttribute){let E=nt.data,O=E.isInterleavedBuffer===!0?E.stride:E.itemSize,H=nt.offset;if(E.isInstancedInterleavedBuffer||E.isInstancedBufferAttribute){for(let rt=0;rt<q.locationSize;rt++)f(q.location+rt,E.meshPerAttribute);if(U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=E.meshPerAttribute*E.count}else for(let rt=0;rt<q.locationSize;rt++)p(q.location+rt);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let rt=0;rt<q.locationSize;rt++)v(q.location+rt,Lt/q.locationSize,It,dt,O*Ut,(H+Lt/q.locationSize*rt)*Ut,St)}else{if(nt.isInstancedBufferAttribute){for(let E=0;E<q.locationSize;E++)f(q.location+E,nt.meshPerAttribute);if(U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=nt.meshPerAttribute*nt.count}else for(let E=0;E<q.locationSize;E++)p(q.location+E);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let E=0;E<q.locationSize;E++)v(q.location+E,Lt/q.locationSize,It,dt,Lt*Ut,Lt/q.locationSize*E*Ut,St)}}else if(k!==void 0){let dt=k[at];if(dt!==void 0)switch(dt.length){case 2:t.vertexAttrib2fv(q.location,dt);break;case 3:t.vertexAttrib3fv(q.location,dt);break;case 4:t.vertexAttrib4fv(q.location,dt);break;default:t.vertexAttrib1fv(q.location,dt)}}}}T()}function A(){P();for(let U in i){let X=i[U];for(let ot in X){let C=X[ot];for(let tt in C){let et=C[tt];for(let k in et)u(et[k].object),delete et[k];delete C[tt]}}delete i[U]}}function R(U){if(i[U.id]===void 0)return;let X=i[U.id];for(let ot in X){let C=X[ot];for(let tt in C){let et=C[tt];for(let k in et)u(et[k].object),delete et[k];delete C[tt]}}delete i[U.id]}function g(U){for(let X in i){let ot=i[X];for(let C in ot){let tt=ot[C];if(tt[U.id]===void 0)continue;let et=tt[U.id];for(let k in et)u(et[k].object),delete et[k];delete tt[U.id]}}}function w(U){for(let X in i){let ot=i[X],C=U.isInstancedMesh===!0?U.id:0,tt=ot[C];if(tt===void 0)continue;for(let et in tt){let k=tt[et];for(let at in k)u(k[at].object),delete k[at];delete tt[et]}if(delete ot[C],Object.keys(ot).length===0)delete i[X]}}function P(){if(V(),a=!0,r===s)return;r=s,c(r.object)}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:w,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:p,disableUnusedAttributes:T}}function nm(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;t.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function im(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){if(g!==Dn&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(g){let w=g===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(g!==mn&&g!==Ln&&!w&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)Jt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&d===!1;if(n.reversedDepthBuffer===!0&&d===!1)Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&d===!0)Jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:M,maxSamples:A,samples:R}}function sm(t){let e=this,n=null,i=0,s=!1,r=!1,a=new xn,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){let{clippingPlanes:_,clipIntersection:b,clipShadows:p}=d,f=t.get(d);if(!s||_===null||_.length===0||r&&!p)if(r)u(null);else c();else{let T=r?0:i,v=T*4,M=f.clippingState||null;l.value=M,M=u(_,h,v,m);for(let A=0;A!==v;++A)M[A]=n[A];f.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(d,h,m,_){let b=d!==null?d.length:0,p=null;if(b!==0){if(p=l.value,_!==!0||p===null){let f=m+b*4,T=h.matrixWorldInverse;if(o.getNormalMatrix(T),p===null||p.length<f)p=new Float32Array(f);for(let v=0,M=m;v!==b;++v,M+=4)a.copy(d[v]).applyMatrix4(T,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}class ca extends on{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jn(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:fi});s.uniforms.tEquirect.value=e;let r=new he(i,s),a=e.minFilter;if(e.minFilter===Zn)e.minFilter=an;return new Ws(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var wh=256,rm=3,am=20,Yh=256,Zh=16,om=3,lm=new D,cm=new te;class is{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ws(1,10,null),this._boxMesh=new he(new jn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=lm}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(e>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:u,autoClearColor:d,autoClearDepth:h,autoClearStencil:m}=o,_=t.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,_===null)t.background=o.getClearColor(cm);let b=new Ws(n,i,c);if(b.position.copy(a),b.update(o,t),o.autoClear=u,o.autoClearColor=d,o.autoClearDepth=h,o.autoClearStencil=m,t.background=_,e>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,e);return this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(wh,lh(t))}_fromTexture(t,e){if(t.mapping===Ls||t.mapping===Ji)this._setSize(t.image.length===0?wh:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Th(t,!1,!1),n=Math.log2(t)-rm;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==e||t&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=Th(e,!0,t)}return this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;if(t.mapping===Ls||t.mapping===Ji){if(this._cubemapMaterial===null)this._cubemapMaterial=Ah();e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Eh();e=this._equirectMaterial}e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){if(this._ggxMaterial===null)this._ggxMaterial=hm(),this._integrationMaterial=um();let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Zh);for(let r=0;r<=n;r++){let a=is.lodToRoughness(r,n);if(r>n-om)s.roughness.value=a,this._renderCube(t,r,this._integrationMaterial);else{let o=a>0?Math.log2(e)+0.5*Math.log2(6/(Yh*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){if(this._blurMaterial===null)this._blurMaterial=dm();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function Th(t,e,n){return new ca(t,{minFilter:Zn,generateMipmaps:e,type:Sn,colorSpace:Uo,depthBuffer:n})}function Ys(t,e,n){return new Bn({name:t,uniforms:e,vertexShader:se.cube_vert,fragmentShader:n,side:We,blending:fi,depthTest:!1,depthWrite:!1})}function hm(){return Ys("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function um(){return Ys("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function dm(){return Ys("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${am}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Eh(){return Ys("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ah(){return Ys("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fm(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,m=!1){if(h===null||h===void 0)return null;if(m)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Rr||m===Cr)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let b=new ca(_.height);return b.fromEquirectangularTexture(t,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let m=h.mapping,_=m===Rr||m===Cr,b=m===Ls||m===Ji;if(_||b){let p=n.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f){if(i===null)i=new is(t);return p=_?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let T=h.image;if(_&&T&&T.height>0||b&&T&&l(T)){if(i===null)i=new is(t);return p=_?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),h.addEventListener("dispose",u),p.texture}else return null}}}return h}function o(h,m){if(m===Rr)h.mapping=Ls;else if(m===Cr)h.mapping=Ji;return h}function l(h){let m=0,_=6;for(let b=0;b<_;b++)if(h[b]!==void 0)m++;return m===_}function c(h){let m=h.target;m.removeEventListener("dispose",c);let _=e.get(m);if(_!==void 0)e.delete(m),_.dispose()}function u(h){let m=h.target;m.removeEventListener("dispose",u);let _=n.get(m);if(_!==void 0)n.delete(m),_.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function pm(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)hi("WebGLRenderer: "+i+" extension not supported.");return s}}}function mm(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((_)=>delete s[_]);function o(_){l(_.target)}function l(_){if(_.index!==null)e.remove(_.index);for(let p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let b=r.get(_);if(b)e.remove(b),r.delete(_);if(i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0)delete _._maxInstanceCount;n.memory.geometries--}function c(_,b){if(s[b.id]!==void 0)return b;return b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),n.memory.geometries++,b}function u(_){let b=_.attributes;for(let p in b)e.update(b[p],t.ARRAY_BUFFER)}function d(_){let b=_.index,p=_.attributes.position,f=0;if(p===void 0)return;let T=b!==null?b.array.length:p.array.length/3-1,M=new(p.count>=65535?Hr:Gr)(Math.ceil(T/3)*6,1),A=M.array;if(b!==null){let g=b.array;f=b.version;for(let w=0,P=0;w<T;w+=3){let V=g[w+0],U=g[w+1],X=g[w+2];A[P++]=V,A[P++]=U,A[P++]=U,A[P++]=X,A[P++]=X,A[P++]=V}}else{f=p.version;for(let g=0,w=0;g<T;g+=3){let P=g+0,V=g+1,U=g+2;A[w++]=P,A[w++]=V,A[w++]=V,A[w++]=U,A[w++]=U,A[w++]=P}}M.version=f;let R=r.get(_);if(R)e.remove(R);r.set(_,M)}function h(_){let b=r.get(_);if(b){let p=_.index;if(p!==null){if(b.version<p.version)d(_)}}else d(_);return r.get(_)}function m(){for(let _ in s){let b=s[_].deref();if(b!==void 0)l(b)}}return{get:c,update:u,getWireframeAttribute:h,dispose:m}}function gm(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,r,d*a),n.update(h,i,1)}function c(d,h,m){if(m===0)return;t.drawElementsInstanced(i,h,r,d*a,m),n.update(h,i,m)}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,m);let b=0;for(let p=0;p<m;p++)b+=h[p];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function _m(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function xm(t,e,n){let i=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};if(h!==void 0)h.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],v=0;if(m===!0)v=1;if(_===!0)v=2;if(b===!0)v=3;let M=o.attributes.position.count*v,A=1;if(M>e.maxTextureSize)A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize;let R=new Float32Array(M*A*4*d),g=new kr(R,M,A,d);g.type=Ln,g.needsUpdate=!0;let w=v*4;for(let V=0;V<d;V++){let U=p[V],X=f[V],ot=T[V],C=M*A*4*V;for(let tt=0;tt<U.count;tt++){let et=tt*w;if(m===!0)s.fromBufferAttribute(U,tt),R[C+et+0]=s.x,R[C+et+1]=s.y,R[C+et+2]=s.z,R[C+et+3]=0;if(_===!0)s.fromBufferAttribute(X,tt),R[C+et+4]=s.x,R[C+et+5]=s.y,R[C+et+6]=s.z,R[C+et+7]=0;if(b===!0)s.fromBufferAttribute(ot,tt),R[C+et+8]=s.x,R[C+et+9]=s.y,R[C+et+10]=s.z,R[C+et+11]=ot.itemSize===4?s.w:1}}h={count:d,texture:g,size:new mt(M,A)},i.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function vm(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u)e.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let m=c.skeleton;if(r.get(m)!==u)m.update(),r.set(m,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var ym={[Xa]:"LINEAR_TONE_MAPPING",[qa]:"REINHARD_TONE_MAPPING",[Ya]:"CINEON_TONE_MAPPING",[Za]:"ACES_FILMIC_TONE_MAPPING",[$a]:"AGX_TONE_MAPPING",[Ps]:"NEUTRAL_TONE_MAPPING",[Ja]:"CUSTOM_TONE_MAPPING"};function Sm(t,e,n,i,s,r){let a=new on(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ve;u.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new _e([0,2,0,0,2,0],2));let d=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new he(u,d),m=new pl(-1,1,1,-1,0,1),_=null,b=null,p=!1,f,T=null,v=[],M=!1;this.setSize=function(A,R){if(a.setSize(A,R),o!==null)o.setSize(A,R);if(l!==null)l.setSize(A,R);for(let g=0;g<v.length;g++){let w=v[g];if(w.setSize)w.setSize(A,R)}},this.setEffects=function(A){v=A,M=v.length>0&&v[0].isRenderPass===!0;let{width:R,height:g}=a;if(v.length>0&&o===null)o=new on(R,g,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new on(R,g,{type:Sn,depthBuffer:!1,stencilBuffer:!1});let w=s===!0&&v.some((P)=>P.needsDepthTexture===!0);if(w!==(a.depthTexture!==null)){if(w===!0&&c===null){if(c=new Qn(R,g),r===!0)c.format=$n,c.type=pi}a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w}for(let P=0;P<v.length;P++){let V=v[P];if(V.setSize)V.setSize(R,g);if(w&&V.needsDepthTexture===!0&&V.setDepthTexture)V.setDepthTexture(c)}},this.begin=function(A,R){if(p)return!1;if(A.toneMapping===yn&&v.length===0)return!1;if(T=R,R!==null){let{width:g,height:w}=R;if(a.width!==g||a.height!==w)this.setSize(g,w)}if(M===!1)A.setRenderTarget(a);return f=A.toneMapping,A.toneMapping=yn,!0},this.hasRenderPass=function(){return M},this.end=function(A,R){A.toneMapping=f,p=!0;let g=a,w=o;for(let P=0;P<v.length;P++){let V=v[P];if(V.enabled===!1)continue;if(V.render(A,w,g,R),V.needsSwap!==!1)g=w,w=w===o?l:o}if(_!==A.outputColorSpace||b!==A.toneMapping){if(_=A.outputColorSpace,b=A.toneMapping,d.defines={},ce.getTransfer(_)===ve)d.defines.SRGB_TRANSFER="";let P=ym[b];if(P)d.defines[P]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(T),A.render(h,m),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();u.dispose(),d.dispose()}}var Jh=new Be,$h=new Qn(1,1),Kh=new Jr(1),Qh=new kr,jh=new Vo,tu=new Zr,Rh=[],Ch=[],Ih=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function ss(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Rh[s];if(r===void 0)r=new Float32Array(s),Rh[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Le(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function De(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ha(t,e){let n=Ch[e];if(n===void 0)n=new Int32Array(e),Ch[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Mm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function bm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Le(n,e))return;t.uniform2fv(this.addr,e),De(n,e)}}function wm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Le(n,e))return;t.uniform3fv(this.addr,e),De(n,e)}}function Tm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Le(n,e))return;t.uniform4fv(this.addr,e),De(n,e)}}function Em(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),De(n,e)}else{if(Le(n,i))return;Lh.set(i),t.uniformMatrix2fv(this.addr,!1,Lh),De(n,i)}}function Am(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),De(n,e)}else{if(Le(n,i))return;Ph.set(i),t.uniformMatrix3fv(this.addr,!1,Ph),De(n,i)}}function Rm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Le(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),De(n,e)}else{if(Le(n,i))return;Ih.set(i),t.uniformMatrix4fv(this.addr,!1,Ih),De(n,i)}}function Cm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Im(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Le(n,e))return;t.uniform2iv(this.addr,e),De(n,e)}}function Pm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Le(n,e))return;t.uniform3iv(this.addr,e),De(n,e)}}function Lm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Le(n,e))return;t.uniform4iv(this.addr,e),De(n,e)}}function Dm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Nm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Le(n,e))return;t.uniform2uiv(this.addr,e),De(n,e)}}function Um(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Le(n,e))return;t.uniform3uiv(this.addr,e),De(n,e)}}function Fm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Le(n,e))return;t.uniform4uiv(this.addr,e),De(n,e)}}function ua(t){if(t.version===0)t.compareFunction=zo,t.needsUpdate=!0;return t}function Om(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)r=ua($h);else r=Jh;n.setTexture2D(e||r,s)}function Bm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||jh,s)}function zm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_CUBE_SHADOW)r=ua(Kh);else r=tu;n.setTextureCube(e||r,s)}function km(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Qh,s)}function Gm(t){switch(t){case 5126:return Mm;case 35664:return bm;case 35665:return wm;case 35666:return Tm;case 35674:return Em;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Nm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return km}}function Hm(t,e){t.uniform1fv(this.addr,e)}function Wm(t,e){let n=ss(e,this.size,2);t.uniform2fv(this.addr,n)}function Vm(t,e){let n=ss(e,this.size,3);t.uniform3fv(this.addr,n)}function Xm(t,e){let n=ss(e,this.size,4);t.uniform4fv(this.addr,n)}function qm(t,e){let n=ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ym(t,e){let n=ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Zm(t,e){let n=ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Jm(t,e){t.uniform1iv(this.addr,e)}function $m(t,e){t.uniform2iv(this.addr,e)}function Km(t,e){t.uniform3iv(this.addr,e)}function Qm(t,e){t.uniform4iv(this.addr,e)}function jm(t,e){t.uniform1uiv(this.addr,e)}function tg(t,e){t.uniform2uiv(this.addr,e)}function eg(t,e){t.uniform3uiv(this.addr,e)}function ng(t,e){t.uniform4uiv(this.addr,e)}function ig(t,e,n){let i=this.cache,s=e.length,r=ha(n,s);if(!Le(i,r))t.uniform1iv(this.addr,r),De(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=ua($h);else a=Jh;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function sg(t,e,n){let i=this.cache,s=e.length,r=ha(n,s);if(!Le(i,r))t.uniform1iv(this.addr,r),De(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||jh,r[a])}function rg(t,e,n){let i=this.cache,s=e.length,r=ha(n,s);if(!Le(i,r))t.uniform1iv(this.addr,r),De(i,r);let a;if(this.type===t.SAMPLER_CUBE_SHADOW)a=ua(Kh);else a=tu;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function ag(t,e,n){let i=this.cache,s=e.length,r=ha(n,s);if(!Le(i,r))t.uniform1iv(this.addr,r),De(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Qh,r[a])}function og(t){switch(t){case 5126:return Hm;case 35664:return Wm;case 35665:return Vm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return $m;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}class eu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gm(e.type)}}class nu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class iu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var vl=/(\w+)(\])?(\[|\.)?/g;function Dh(t,e){t.seq.push(e),t.map[e.id]=e}function lg(t,e,n){let i=t.name,s=i.length;vl.lastIndex=0;while(!0){let r=vl.exec(i),a=vl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Dh(n,c===void 0?new eu(o,t,e):new nu(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new iu(o),Dh(n,d);n=d}}}class qs{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);lg(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function Nh(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var cg=37297,hg=0;function ug(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Uh=new ee;function dg(t){ce._getMatrix(Uh,ce.workingColorSpace,t);let e=`mat3( ${Uh.elements.map((n)=>n.toFixed(4))} )`;switch(ce.getTransfer(t)){case Fo:return[e,"LinearTransferOETF"];case ve:return[e,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fh(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+ug(t.getShaderSource(e),o)}else return r}function fg(t,e){let n=dg(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var pg={[Xa]:"Linear",[qa]:"Reinhard",[Ya]:"Cineon",[Za]:"ACESFilmic",[$a]:"AgX",[Ps]:"Neutral",[Ja]:"Custom"};function mg(t,e){let n=pg[e];if(n===void 0)return Jt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var la=new D;function gg(){ce.getLuminanceCoefficients(la);let t=la.x.toFixed(4),e=la.y.toFixed(4),n=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function _g(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function xg(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function vg(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Xs(t){return t!==""}function Oh(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(t){return t.replace(yg,Sg)}function Sg(t,e){let n=se[e];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sl(n)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(t){return t.replace(Mg,bg)}function bg(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var wg={[Rs]:"SHADOWMAP_TYPE_PCF",[qi]:"SHADOWMAP_TYPE_VSM"};function Tg(t){return wg[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eg={[Ji]:"ENVMAP_MODE_REFRACTION"};function Ag(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Eg[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rg={[kc]:"ENVMAP_BLENDING_MULTIPLY",[Gc]:"ENVMAP_BLENDING_MIX",[Hc]:"ENVMAP_BLENDING_ADD"};function Cg(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return Rg[t.combine]||"ENVMAP_BLENDING_NONE"}function Ig(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Tg(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Ag(n),d=Cg(n),h=_g(n),m=xg(r),_=s.createProgram(),b,p,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Xs).join(`
`),b.length>0)b+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Xs).join(`
`),p.length>0)p+=`
`}else b=[kh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[kh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yn?"#define TONE_MAPPING":"",n.toneMapping!==yn?se.tonemapping_pars_fragment:"",n.toneMapping!==yn?mg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,fg("linearToOutputTexel",n.outputColorSpace),gg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`);if(a=Sl(a),a=Oh(a,n),a=Bh(a,n),o=Sl(o),o=Oh(o,n),o=Bh(o,n),a=zh(a),o=zh(o),n.isRawShaderMaterial!==!0)f=`#version 300 es
`,b=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",n.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let T=f+b+a,v=f+p+o,M=Nh(s,s.VERTEX_SHADER,T),A=Nh(s,s.FRAGMENT_SHADER,v);if(s.attachShader(_,M),s.attachShader(_,A),n.index0AttributeName!==void 0)s.bindAttribLocation(_,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(_,0,"position");s.linkProgram(_);function R(V){if(t.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(M)||"",ot=s.getShaderInfoLog(A)||"",C=U.trim(),tt=X.trim(),et=ot.trim(),k=!0,at=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,_,M,A);else{let q=Fh(s,M,"vertex"),nt=Fh(s,A,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+C+`
`+q+`
`+nt)}else if(C!=="")Jt("WebGLProgram: Program Info Log:",C);else if(tt===""||et==="")at=!1;if(at)V.diagnostics={runnable:k,programLog:C,vertexShader:{log:tt,prefix:b},fragmentShader:{log:et,prefix:p}}}s.deleteShader(M),s.deleteShader(A),g=new qs(s,_),w=vg(s,_)}let g;this.getUniforms=function(){if(g===void 0)R(this);return g};let w;this.getAttributes=function(){if(w===void 0)R(this);return w};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(P===!1)P=s.getProgramParameter(_,cg);return P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}var Pg=0;class su{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new ru(t),e.set(t,n);return n}}class ru{constructor(t){this.id=Pg++,this.code=t,this.usedTimes=0}}function Lg(t){return t===mi||t===Or||t===Br}function Dg(t,e,n,i,s,r){let a=new Fs,o=new su,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function _(g,w,P,V,U,X){let ot=V.fog,C=U.geometry,tt=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?V.environment:null,et=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||tt,et),at=h[g.type],q=i.precision;if(g.precision!==null){if(q=i.getMaxPrecision(g.precision),q!==g.precision)Jt("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead.")}let nt=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,dt=nt!==void 0?nt.length:0,Lt=0;if(C.morphAttributes.position!==void 0)Lt=1;if(C.morphAttributes.normal!==void 0)Lt=2;if(C.morphAttributes.color!==void 0)Lt=3;let Z,ut,It,Ut;if(at){let wt=bn[at];Z=wt.vertexShader,ut=wt.fragmentShader}else{Z=g.vertexShader,ut=g.fragmentShader;let wt=o.getVertexShaderStage(g),pe=o.getFragmentShaderStage(g);o.update(g,wt,pe),It=wt.id,Ut=pe.id}let St=t.getRenderTarget(),E=t.state.buffers.depth.getReversed(),O=U.isInstancedMesh===!0,H=U.isBatchedMesh===!0,rt=!!g.map,ht=!!g.matcap,J=!!k,lt=J&&k.isPMREMTexture===!0,ft=!!g.aoMap,At=!!g.lightMap,Tt=!!g.bumpMap&&g.wireframe===!1,Wt=!!g.normalMap,Ot=!!g.displacementMap,jt=!!g.emissiveMap,$t=!!g.metalnessMap,ue=!!g.roughnessMap,N=g.anisotropy>0,Te=g.clearcoat>0,Kt=g.diffuseRoughness>0,B=g.dispersion>0,z=g.retroreflectivity>0,Mt=g.iridescence>0,pt=g.sheen>0,bt=g.transmission>0,Qt=N&&!!g.anisotropyMap,S=Te&&!!g.clearcoatMap,x=Te&&!!g.clearcoatNormalMap,F=Te&&!!g.clearcoatRoughnessMap,ct=Kt&&!!g.diffuseRoughnessMap,j=Mt&&!!g.iridescenceMap,gt=Mt&&!!g.iridescenceThicknessMap,xt=pt&&!!g.sheenColorMap,Y=pt&&!!g.sheenRoughnessMap,it=!!g.specularMap,_t=!!g.specularColorMap,I=!!g.specularIntensityMap,st=bt&&!!g.transmissionMap,Q=bt&&!!g.thicknessMap,vt=!!g.gradientMap,yt=!!g.alphaMap,Et=g.alphaTest>0,Xt=!!g.alphaHash,Gt=!!g.extensions,Dt=yn;if(g.toneMapped){if(St===null||St.isXRRenderTarget===!0)Dt=t.toneMapping}let Vt=lt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,ie={shaderID:at,shaderType:g.type,shaderName:g.name,vertexShader:Z,fragmentShader:ut,defines:g.defines,customVertexShaderID:It,customFragmentShaderID:Ut,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:H,batchingColor:H&&U._colorsTexture!==null,instancing:O,instancingColor:O&&U.instanceColor!==null,instancingMorph:O&&U.morphTexture!==null,outputColorSpace:St===null?t.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:rt,matcap:ht,envMap:J,envMapMode:J&&k.mapping,envMapPMREM:lt,envMapMaxLod:lt?Vt.length-1:null,envMapSize:lt?Vt[0].width:null,aoMap:ft,lightMap:At,bumpMap:Tt,normalMap:Wt,displacementMap:Ot,emissiveMap:jt,normalMapObjectSpace:Wt&&g.normalMapType===Qc,normalMapTangentSpace:Wt&&g.normalMapType===No,packedNormalMap:Wt&&g.normalMapType===No&&Lg(g.normalMap.format),metalnessMap:$t,roughnessMap:ue,anisotropy:N,anisotropyMap:Qt,clearcoat:Te,clearcoatMap:S,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:Kt,diffuseRoughnessMap:ct,dispersion:B,retroreflection:z,iridescence:Mt,iridescenceMap:j,iridescenceThicknessMap:gt,sheen:pt,sheenColorMap:xt,sheenRoughnessMap:Y,specularMap:it,specularColorMap:_t,specularIntensityMap:I,transmission:bt,transmissionMap:st,thicknessMap:Q,gradientMap:vt,opaque:g.transparent===!1&&g.blending===Cs&&g.alphaToCoverage===!1,alphaMap:yt,alphaTest:Et,alphaHash:Xt,combine:g.combine,mapUv:rt&&m(g.map.channel),aoMapUv:ft&&m(g.aoMap.channel),lightMapUv:At&&m(g.lightMap.channel),bumpMapUv:Tt&&m(g.bumpMap.channel),normalMapUv:Wt&&m(g.normalMap.channel),displacementMapUv:Ot&&m(g.displacementMap.channel),emissiveMapUv:jt&&m(g.emissiveMap.channel),metalnessMapUv:$t&&m(g.metalnessMap.channel),roughnessMapUv:ue&&m(g.roughnessMap.channel),anisotropyMapUv:Qt&&m(g.anisotropyMap.channel),clearcoatMapUv:S&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&m(g.sheenRoughnessMap.channel),specularMapUv:it&&m(g.specularMap.channel),specularColorMapUv:_t&&m(g.specularColorMap.channel),specularIntensityMapUv:I&&m(g.specularIntensityMap.channel),transmissionMapUv:st&&m(g.transmissionMap.channel),thicknessMapUv:Q&&m(g.thicknessMap.channel),alphaMapUv:yt&&m(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Wt||N),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!C.attributes.uv&&(rt||yt),fog:!!ot,useFog:g.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&Wt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:E,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Lt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.filter((wt)=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Dt,decodeVideoTexture:rt&&g.map.isVideoTexture===!0&&ce.getTransfer(g.map.colorSpace)===ve,decodeVideoTextureEmissive:jt&&g.emissiveMap.isVideoTexture===!0&&ce.getTransfer(g.emissiveMap.colorSpace)===ve,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===rn,flipSided:g.side===We,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Gt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&g.extensions.multiDraw===!0||H)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function b(g){let w=[];if(g.shaderID)w.push(g.shaderID);else w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let P in g.defines)w.push(P),w.push(g.defines[P]);if(g.isRawShaderMaterial===!1)p(w,g),f(w,g),w.push(t.outputColorSpace);return w.push(g.customProgramCacheKey),w.join()}function p(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapPMREM),g.push(w.envMapMaxLod),g.push(w.envMapSize),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.diffuseRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.numLightProbeGrids),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function f(g,w){if(a.disableAll(),w.instancing)a.enable(0);if(w.instancingColor)a.enable(1);if(w.instancingMorph)a.enable(2);if(w.matcap)a.enable(3);if(w.envMap)a.enable(4);if(w.normalMapObjectSpace)a.enable(5);if(w.normalMapTangentSpace)a.enable(6);if(w.clearcoat)a.enable(7);if(w.iridescence)a.enable(8);if(w.alphaTest)a.enable(9);if(w.vertexColors)a.enable(10);if(w.vertexAlphas)a.enable(11);if(w.vertexUv1s)a.enable(12);if(w.vertexUv2s)a.enable(13);if(w.vertexUv3s)a.enable(14);if(w.vertexTangents)a.enable(15);if(w.anisotropy)a.enable(16);if(w.alphaHash)a.enable(17);if(w.batching)a.enable(18);if(w.dispersion)a.enable(19);if(w.retroreflection)a.enable(24);if(w.diffuseRoughness)a.enable(25);if(w.batchingColor)a.enable(20);if(w.gradientMap)a.enable(21);if(w.packedNormalMap)a.enable(22);if(w.vertexNormals)a.enable(23);if(g.push(a.mask),a.disableAll(),w.fog)a.enable(0);if(w.useFog)a.enable(1);if(w.flatShading)a.enable(2);if(w.logarithmicDepthBuffer)a.enable(3);if(w.reversedDepthBuffer)a.enable(4);if(w.skinning)a.enable(5);if(w.morphTargets)a.enable(6);if(w.morphNormals)a.enable(7);if(w.morphColors)a.enable(8);if(w.premultipliedAlpha)a.enable(9);if(w.shadowMapEnabled)a.enable(10);if(w.doubleSided)a.enable(11);if(w.flipSided)a.enable(12);if(w.useDepthPacking)a.enable(13);if(w.dithering)a.enable(14);if(w.transmission)a.enable(15);if(w.sheen)a.enable(16);if(w.opaque)a.enable(17);if(w.pointsUvs)a.enable(18);if(w.decodeVideoTexture)a.enable(19);if(w.decodeVideoTextureEmissive)a.enable(20);if(w.alphaToCoverage)a.enable(21);if(w.numLightProbeGrids>0)a.enable(22);if(w.hasPositionAttribute)a.enable(23);g.push(a.mask)}function T(g){let w=h[g.type],P;if(w){let V=bn[w];P=xh.clone(V.uniforms)}else P=g.uniforms;return P}function v(g,w){let P=u.get(w);if(P!==void 0)++P.usedTimes;else P=new Ig(t,w,g,s),c.push(P),u.set(w,P);return P}function M(g){if(--g.usedTimes===0){let w=c.indexOf(g);c[w]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:T,acquireProgram:v,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:R}}function Ng(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Ug(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Gh(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Hh(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let m=0;if(h.isInstancedMesh)m+=2;if(h.isSkinnedMesh)m+=1;return m}function o(h,m,_,b,p,f){let T=t[e];if(T===void 0)T={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:p,group:f},t[e]=T;else T.id=h.id,T.object=h,T.geometry=m,T.material=_,T.materialVariant=a(h),T.groupOrder=b,T.renderOrder=h.renderOrder,T.z=p,T.group=f;return e++,T}function l(h,m,_,b,p,f,T){if(T.reversedDepth===!0)p=-p;let v=o(h,m,_,b,p,f);if(_.transmission>0)i.push(v);else if(_.transparent===!0)s.push(v);else n.push(v)}function c(h,m,_,b,p,f){let T=o(h,m,_,b,p,f);if(_.transmission>0)i.unshift(T);else if(_.transparent===!0)s.unshift(T);else n.unshift(T)}function u(h,m){if(n.length>1)n.sort(h||Ug);if(i.length>1)i.sort(m||Gh);if(s.length>1)s.sort(m||Gh)}function d(){for(let h=e,m=t.length;h<m;h++){let _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Fg(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Hh,t.set(i,[a]);else if(s>=r.length)a=new Hh,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Og(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new te};break;case"SpotLight":n={position:new D,direction:new D,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function Bg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var zg=0;function kg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Gg(t){let e=new Og,n=Bg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new fe,a=new fe;function o(c){let u=0,d=0,h=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,_=0,b=0,p=0,f=0,T=0,v=0,M=0,A=0,R=0,g=0,w=0,P=0,V=0;c.sort(kg);for(let X=0,ot=c.length;X<ot;X++){let C=c[X],{color:tt,intensity:et,distance:k}=C,at=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===mi)at=C.shadow.map.texture;else at=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)u+=tt.r*et,d+=tt.g*et,h+=tt.b*et;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],et);V++}else if(C.isSunLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let nt=C.shadow,dt=n.get(C);dt.shadowIntensity=nt.intensity,dt.shadowBias=nt.bias,dt.shadowNormalBias=nt.normalBias,dt.shadowRadius=nt.radius,dt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[_]=dt,i.sunShadowMap[_]=at;let Lt=nt.getViewportCount();for(let Z=0;Z<Lt;Z++)i.sunShadowMatrix[b+Z]=nt.getMatrix(Z),i.sunShadowCascade[b+Z]=nt._cascadeData[Z];b+=Lt,_++}i.sun[m]=q,m++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let nt=C.shadow,dt=n.get(C);dt.shadowIntensity=nt.intensity,dt.shadowBias=nt.bias,dt.shadowNormalBias=nt.normalBias,dt.shadowRadius=nt.radius,dt.shadowMapSize=nt.mapSize,i.directionalShadow[p]=dt,i.directionalShadowMap[p]=at,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=q,p++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(tt).multiplyScalar(et),q.distance=k,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[T]=q;let nt=C.shadow;if(C.map){if(i.spotLightMap[w]=C.map,w++,nt.updateMatrices(C),C.castShadow)P++}if(i.spotLightMatrix[T]=nt.matrix,C.castShadow){let dt=n.get(C);dt.shadowIntensity=nt.intensity,dt.shadowBias=nt.bias,dt.shadowNormalBias=nt.normalBias,dt.shadowRadius=nt.radius,dt.shadowMapSize=nt.mapSize,i.spotShadow[T]=dt,i.spotShadowMap[T]=at,g++}T++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(tt).multiplyScalar(et),q.halfWidth.set(C.width*0.5,0,0),q.halfHeight.set(0,C.height*0.5,0),i.rectArea[v]=q,v++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let nt=C.shadow,dt=n.get(C);dt.shadowIntensity=nt.intensity,dt.shadowBias=nt.bias,dt.shadowNormalBias=nt.normalBias,dt.shadowRadius=nt.radius,dt.shadowMapSize=nt.mapSize,dt.shadowCameraNear=nt.camera.near,dt.shadowCameraFar=nt.camera.far,i.pointShadow[f]=dt,i.pointShadowMap[f]=at,i.pointShadowMatrix[f]=C.shadow.matrix,R++}i.point[f]=q,f++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(et),q.groundColor.copy(C.groundColor).multiplyScalar(et),i.hemi[M]=q,M++}}if(v>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=Nt.LTC_FLOAT_1,i.rectAreaLTC2=Nt.LTC_FLOAT_2;else i.rectAreaLTC1=Nt.LTC_HALF_1,i.rectAreaLTC2=Nt.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;if(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==T||U.rectAreaLength!==v||U.hemiLength!==M||U.numSunShadows!==_||U.numDirectionalShadows!==A||U.numPointShadows!==R||U.numSpotShadows!==g||U.numSpotMaps!==w||U.numLightProbes!==V)i.sun.length=m,i.directional.length=p,i.spot.length=T,i.rectArea.length=v,i.point.length=f,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=V,U.sunLength=m,U.directionalLength=p,U.pointLength=f,U.spotLength=T,U.rectAreaLength=v,U.hemiLength=M,U.numSunShadows=_,U.numDirectionalShadows=A,U.numPointShadows=R,U.numSpotShadows=g,U.numSpotMaps=w,U.numLightProbes=V,i.version=zg++}function l(c,u){let d=0,h=0,m=0,_=0,b=0,p=0,f=u.matrixWorldInverse;for(let T=0,v=c.length;T<v;T++){let M=c[T];if(M.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(M.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),_++}else if(M.isRectAreaLight){let A=i.rectArea[b];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(M.width*0.5,0,0),A.halfHeight.set(0,M.height*0.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let A=i.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:i}}function Wh(t){let e=new Gg(t),n=[],i=[],s=[];function r(d){u.camera=d,n.length=0,i.length=0,s.length=0}function a(d){if(d.isLightProbeGrid)s.push(d);else n.push(d)}function o(d){i.push(d)}function l(){e.setup(n),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(n,d)}let u={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Hg(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Wh(t),e.set(s,[o]);else if(r>=a.length)o=new Wh(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xg=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],qg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Vh=new fe,Vs=new D,yl=new D;function Yg(t,e,n){let i=new ui,s=new mt,r=new mt,a=new we,o=new tl,l=new el,c={},u=n.maxTextureSize,d={[Yi]:We,[We]:Yi,[rn]:rn},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Wg,fragmentShader:Vg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ve;_.setAttribute("position",new pn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let b=new he(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let f=this.type;this.render=function(R,g,w){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(R.length===0)return;if(this.type===dc)Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs;let P=t.getRenderTarget(),V=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),X=t.state;if(X.setBlending(fi),X.buffers.depth.getReversed()===!0)X.buffers.color.setClear(0,0,0,0);else X.buffers.color.setClear(1,1,1,1);X.buffers.depth.setTest(!0),X.setScissorTest(!1);let ot=f!==this.type;if(ot)g.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((tt)=>tt.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,tt=R.length;C<tt;C++){let et=R[C],k=et.shadow;if(k===void 0){Jt("WebGLShadowMap:",et,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let at=k.getFrameExtents();if(s.multiply(at),r.copy(k.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/at.x),s.x=r.x*at.x,k.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/at.y),s.y=r.y*at.y,k.mapSize.y=r.y}let q=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||ot===!0){if(k.map!==null){if(k.map.depthTexture!==null)k.map.depthTexture.dispose(),k.map.depthTexture=null;k.map.dispose()}if(this.type===qi){if(et.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new on(s.x,s.y,{format:mi,type:Sn,minFilter:an,magFilter:an,generateMipmaps:!1}),k.map.texture.name=et.name+".shadowMap",k.map.depthTexture=new Qn(s.x,s.y,Ln),k.map.depthTexture.name=et.name+".shadowMapDepth",k.map.depthTexture.format=$i,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yn,k.map.depthTexture.magFilter=Yn}else{if(et.isPointLight)k.map=new ca(s.x),k.map.depthTexture=new Jr(s.x,Jn);else k.map=new on(s.x,s.y),k.map.depthTexture=new Qn(s.x,s.y,Jn);if(k.map.depthTexture.name=et.name+".shadowMap",k.map.depthTexture.format=$i,this.type===Rs)k.map.depthTexture.compareFunction=q?Bo:Oo,k.map.depthTexture.minFilter=an,k.map.depthTexture.magFilter=an;else k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Yn,k.map.depthTexture.magFilter=Yn}k.camera.updateProjectionMatrix()}if(k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y))k.map.setSize(s.x,s.y);let nt=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();if(et.isPointLight!==!0)k.updateMatrices(et,w);let dt=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:w.layers;for(let Lt=0;Lt<nt;Lt++){let Z=k.getCamera(Lt);if(et.isPointLight){let{camera:ut,matrix:It}=k,Ut=et.distance||ut.far;if(Ut!==ut.far)ut.far=Ut,ut.updateProjectionMatrix();Vs.setFromMatrixPosition(et.matrixWorld),ut.position.copy(Vs),yl.copy(ut.position),yl.add(Xg[Lt]),ut.up.copy(qg[Lt]),ut.lookAt(yl),ut.updateMatrixWorld(),It.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Vh.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Vh,ut.coordinateSystem,ut.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,Lt),t.clear();else{if(Lt===0)t.setRenderTarget(k.map),t.clear();let ut=k.getViewport(Lt);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),X.viewport(a)}i=k.getFrustum(Lt),M(g,w,Z,et,dt,this.type)}if(k.isPointLightShadow!==!0&&this.type===qi)T(k,w);k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(P,V,U)};function T(R,g){let w=e.update(b);if(h.defines.VSM_SAMPLES!==R.blurSamples)h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new on(s.x,s.y,{format:mi,type:Sn});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(g,null,w,h,b,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(g,null,w,m,b,null)}function v(R,g,w,P){let V=null,U=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)V=U;else if(V=w.isPointLight===!0?l:o,t.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let X=V.uuid,ot=g.uuid,C=c[X];if(C===void 0)C={},c[X]=C;let tt=C[ot];if(tt===void 0)tt=V.clone(),C[ot]=tt,g.addEventListener("dispose",A);V=tt}if(V.visible=g.visible,V.wireframe=g.wireframe,P===qi)V.side=g.shadowSide!==null?g.shadowSide:g.side;else V.side=g.shadowSide!==null?g.shadowSide:d[g.side];if(V.alphaMap=g.alphaMap,V.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,V.map=g.map,V.clipShadows=g.clipShadows,V.clippingPlanes=g.clippingPlanes,V.clipIntersection=g.clipIntersection,V.displacementMap=g.displacementMap,V.displacementScale=g.displacementScale,V.displacementBias=g.displacementBias,V.wireframeLinewidth=g.wireframeLinewidth,V.linewidth=g.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let X=t.properties.get(V);X.light=w}return V}function M(R,g,w,P,V,U){if(R.visible===!1)return;if(R.layers.test(V)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&U===qi)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);let C=e.update(R),tt=R.material;if(Array.isArray(tt)){let et=C.groups;for(let k=0,at=et.length;k<at;k++){let q=et[k],nt=tt[q.materialIndex];if(nt&&nt.visible){let dt=v(R,nt,P,U);R.onBeforeShadow(t,R,g,w,C,dt,q),t.renderBufferDirect(w,null,C,dt,R,q),R.onAfterShadow(t,R,g,w,C,dt,q)}}}else if(tt.visible){let et=v(R,tt,P,U);R.onBeforeShadow(t,R,g,w,C,et,null),t.renderBufferDirect(w,null,C,et,R,null),R.onAfterShadow(t,R,g,w,C,et,null)}}}let ot=R.children;for(let C=0,tt=ot.length;C<tt;C++)M(ot[C],g,w,P,V,U)}function A(R){R.target.removeEventListener("dispose",A);for(let w in c){let P=c[w],V=R.target.uuid;if(V in P)P[V].dispose(),delete P[V]}}}function Zg(t,e){function n(){let I=!1,st=new we,Q=null,vt=new we(0,0,0,0);return{setMask:function(yt){if(Q!==yt&&!I)t.colorMask(yt,yt,yt,yt),Q=yt},setLocked:function(yt){I=yt},setClear:function(yt,Et,Xt,Gt,Dt){if(Dt===!0)yt*=Gt,Et*=Gt,Xt*=Gt;if(st.set(yt,Et,Xt,Gt),vt.equals(st)===!1)t.clearColor(yt,Et,Xt,Gt),vt.copy(st)},reset:function(){I=!1,Q=null,vt.set(-1,0,0,0)}}}function i(){let I=!1,st=!1,Q=null,vt=null,yt=null;return{setReversed:function(Et){if(st!==Et){let Xt=e.get("EXT_clip_control");if(Et)Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT);else Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);st=Et;let Gt=yt;yt=null,this.setClear(Gt)}},getReversed:function(){return st},setTest:function(Et){if(Et)E(t.DEPTH_TEST);else O(t.DEPTH_TEST)},setMask:function(Et){if(Q!==Et&&!I)t.depthMask(Et),Q=Et},setFunc:function(Et){if(st)Et=oh[Et];if(vt!==Et){switch(Et){case Dc:t.depthFunc(t.NEVER);break;case Nc:t.depthFunc(t.ALWAYS);break;case Uc:t.depthFunc(t.LESS);break;case Va:t.depthFunc(t.LEQUAL);break;case Fc:t.depthFunc(t.EQUAL);break;case Oc:t.depthFunc(t.GEQUAL);break;case Bc:t.depthFunc(t.GREATER);break;case zc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}vt=Et}},setLocked:function(Et){I=Et},setClear:function(Et){if(yt!==Et){if(yt=Et,st)Et=1-Et;t.clearDepth(Et)}},reset:function(){I=!1,Q=null,vt=null,yt=null,st=!1}}}function s(){let I=!1,st=null,Q=null,vt=null,yt=null,Et=null,Xt=null,Gt=null,Dt=null;return{setTest:function(Vt){if(!I)if(Vt)E(t.STENCIL_TEST);else O(t.STENCIL_TEST)},setMask:function(Vt){if(st!==Vt&&!I)t.stencilMask(Vt),st=Vt},setFunc:function(Vt,ie,wt){if(Q!==Vt||vt!==ie||yt!==wt)t.stencilFunc(Vt,ie,wt),Q=Vt,vt=ie,yt=wt},setOp:function(Vt,ie,wt){if(Et!==Vt||Xt!==ie||Gt!==wt)t.stencilOp(Vt,ie,wt),Et=Vt,Xt=ie,Gt=wt},setLocked:function(Vt){I=Vt},setClear:function(Vt){if(Dt!==Vt)t.clearStencil(Vt),Dt=Vt},reset:function(){I=!1,st=null,Q=null,vt=null,yt=null,Et=null,Xt=null,Gt=null,Dt=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,u={},d={},h={},m=new WeakMap,_=[],b=null,p=!1,f=null,T=null,v=null,M=null,A=null,R=null,g=null,w=new te(0,0,0),P=0,V=!1,U=null,X=null,ot=null,C=null,tt=null,et=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,at=0,q=t.getParameter(t.VERSION);if(q.indexOf("WebGL")!==-1)at=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=at>=1;else if(q.indexOf("OpenGL ES")!==-1)at=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=at>=2;let nt=null,dt={},Lt=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),ut=new we().fromArray(Lt),It=new we().fromArray(Z);function Ut(I,st,Q,vt){let yt=new Uint8Array(4),Et=t.createTexture();t.bindTexture(I,Et),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xt=0;Xt<Q;Xt++)if(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)t.texImage3D(st,0,t.RGBA,1,1,vt,0,t.RGBA,t.UNSIGNED_BYTE,yt);else t.texImage2D(st+Xt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,yt);return Et}let St={};St[t.TEXTURE_2D]=Ut(t.TEXTURE_2D,t.TEXTURE_2D,1),St[t.TEXTURE_CUBE_MAP]=Ut(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[t.TEXTURE_2D_ARRAY]=Ut(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),St[t.TEXTURE_3D]=Ut(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),E(t.DEPTH_TEST),a.setFunc(Va),Tt(!1),Wt(Ga),E(t.CULL_FACE),ft(fi);function E(I){if(u[I]!==!0)t.enable(I),u[I]=!0}function O(I){if(u[I]!==!1)t.disable(I),u[I]=!1}function H(I,st){if(h[I]!==st){if(t.bindFramebuffer(I,st),h[I]=st,I===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=st;if(I===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=st;return!0}return!1}function rt(I,st){let Q=_,vt=!1;if(I){if(Q=m.get(st),Q===void 0)Q=[],m.set(st,Q);let yt=I.textures;if(Q.length!==yt.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Et=0,Xt=yt.length;Et<Xt;Et++)Q[Et]=t.COLOR_ATTACHMENT0+Et;Q.length=yt.length,vt=!0}}else if(Q[0]!==t.BACK)Q[0]=t.BACK,vt=!0;if(vt)t.drawBuffers(Q)}function ht(I){if(b!==I)return t.useProgram(I),b=I,!0;return!1}let J={[Zi]:t.FUNC_ADD,[pc]:t.FUNC_SUBTRACT,[mc]:t.FUNC_REVERSE_SUBTRACT};J[gc]=t.MIN,J[_c]=t.MAX;let lt={[xc]:t.ZERO,[vc]:t.ONE,[yc]:t.SRC_COLOR,[Mc]:t.SRC_ALPHA,[Rc]:t.SRC_ALPHA_SATURATE,[Ec]:t.DST_COLOR,[wc]:t.DST_ALPHA,[Sc]:t.ONE_MINUS_SRC_COLOR,[bc]:t.ONE_MINUS_SRC_ALPHA,[Ac]:t.ONE_MINUS_DST_COLOR,[Tc]:t.ONE_MINUS_DST_ALPHA,[Cc]:t.CONSTANT_COLOR,[Ic]:t.ONE_MINUS_CONSTANT_COLOR,[Pc]:t.CONSTANT_ALPHA,[Lc]:t.ONE_MINUS_CONSTANT_ALPHA};function ft(I,st,Q,vt,yt,Et,Xt,Gt,Dt,Vt){if(I===fi){if(p===!0)O(t.BLEND),p=!1;return}if(p===!1)E(t.BLEND),p=!0;if(I!==fc){if(I!==f||Vt!==V){if(T!==Zi||A!==Zi)t.blendEquation(t.FUNC_ADD),T=Zi,A=Zi;if(Vt)switch(I){case Cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Is:t.blendFunc(t.ONE,t.ONE);break;case Ha:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wa:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Zt("WebGLState: Invalid blending: ",I);break}else switch(I){case Cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ha:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wa:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",I);break}v=null,M=null,R=null,g=null,w.set(0,0,0),P=0,f=I,V=Vt}return}if(yt=yt||st,Et=Et||Q,Xt=Xt||vt,st!==T||yt!==A)t.blendEquationSeparate(J[st],J[yt]),T=st,A=yt;if(Q!==v||vt!==M||Et!==R||Xt!==g)t.blendFuncSeparate(lt[Q],lt[vt],lt[Et],lt[Xt]),v=Q,M=vt,R=Et,g=Xt;if(Gt.equals(w)===!1||Dt!==P)t.blendColor(Gt.r,Gt.g,Gt.b,Dt),w.copy(Gt),P=Dt;f=I,V=!1}function At(I,st){I.side===rn?O(t.CULL_FACE):E(t.CULL_FACE);let Q=I.side===We;if(st)Q=!Q;Tt(Q),I.blending===Cs&&I.transparent===!1?ft(fi):ft(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let vt=I.stencilWrite;if(o.setTest(vt),vt)o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass);jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?E(t.SAMPLE_ALPHA_TO_COVERAGE):O(t.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(I){if(U!==I){if(I)t.frontFace(t.CW);else t.frontFace(t.CCW);U=I}}function Wt(I){if(I!==hc){if(E(t.CULL_FACE),I!==X)if(I===Ga)t.cullFace(t.BACK);else if(I===uc)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else O(t.CULL_FACE);X=I}function Ot(I){if(I!==ot){if(k)t.lineWidth(I);ot=I}}function jt(I,st,Q){if(I){if(E(t.POLYGON_OFFSET_FILL),C!==st||tt!==Q){if(C=st,tt=Q,a.getReversed())st=-st,Q=-Q;t.polygonOffset(st,Q)}}else O(t.POLYGON_OFFSET_FILL)}function $t(I){if(I)E(t.SCISSOR_TEST);else O(t.SCISSOR_TEST)}function ue(I){if(I===void 0)I=t.TEXTURE0+et-1;if(nt!==I)t.activeTexture(I),nt=I}function N(I,st,Q){if(Q===void 0)if(nt===null)Q=t.TEXTURE0+et-1;else Q=nt;let vt=dt[Q];if(vt===void 0)vt={type:void 0,texture:void 0},dt[Q]=vt;if(vt.type!==I||vt.texture!==st){if(nt!==Q)t.activeTexture(Q),nt=Q;t.bindTexture(I,st||St[I]),vt.type=I,vt.texture=st}}function Te(){let I=dt[nt];if(I!==void 0&&I.type!==void 0)t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0}function Kt(){try{t.compressedTexImage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function z(){try{t.texSubImage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function Mt(){try{t.texSubImage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function pt(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function bt(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function Qt(){try{t.texStorage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function S(){try{t.texStorage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function x(){try{t.texImage2D(...arguments)}catch(I){Zt("WebGLState:",I)}}function F(){try{t.texImage3D(...arguments)}catch(I){Zt("WebGLState:",I)}}function ct(I){if(d[I]!==void 0)return d[I];else return t.getParameter(I)}function j(I,st){if(d[I]!==st)t.pixelStorei(I,st),d[I]=st}function gt(I){if(ut.equals(I)===!1)t.scissor(I.x,I.y,I.z,I.w),ut.copy(I)}function xt(I){if(It.equals(I)===!1)t.viewport(I.x,I.y,I.z,I.w),It.copy(I)}function Y(I,st){let Q=c.get(st);if(Q===void 0)Q=new WeakMap,c.set(st,Q);let vt=Q.get(I);if(vt===void 0)vt=t.getUniformBlockIndex(st,I.name),t.uniformBlockBinding(st,vt,vt),Q.set(I,vt)}function it(I,st,Q){let yt=c.get(st).get(I);if(l[yt]!==Q)t.bindBufferBase(t.UNIFORM_BUFFER,yt,Q),l[yt]=Q}function _t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},nt=null,dt={},h={},l={},m=new WeakMap,_=[],b=null,p=!1,f=null,T=null,v=null,M=null,A=null,R=null,g=null,w=new te(0,0,0),P=0,V=!1,U=null,X=null,ot=null,C=null,tt=null,ut.set(0,0,t.canvas.width,t.canvas.height),It.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:E,disable:O,bindFramebuffer:H,drawBuffers:rt,useProgram:ht,setBlending:ft,setMaterial:At,setFlipSided:Tt,setCullFace:Wt,setLineWidth:Ot,setPolygonOffset:jt,setScissorTest:$t,activeTexture:ue,bindTexture:N,unbindTexture:Te,compressedTexImage2D:Kt,compressedTexImage3D:B,texImage2D:x,texImage3D:F,pixelStorei:j,getParameter:ct,updateUBOMapping:Y,uniformBlockBinding:it,texStorage2D:Qt,texStorage3D:S,texSubImage2D:z,texSubImage3D:Mt,compressedTexSubImage2D:pt,compressedTexSubImage3D:bt,scissor:gt,viewport:xt,reset:_t}}function Jg(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap,d=new Set,h,m=new WeakMap,_=new Set,b=new FinalizationRegistry((S)=>_.delete(S)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function f(S,x){return p?new OffscreenCanvas(S,x):Ms("canvas")}function T(S,x,F){let ct=1,j=Qt(S);if(j.width>F||j.height>F)ct=F/Math.max(j.width,j.height);if(ct<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let gt=Math.floor(ct*j.width),xt=Math.floor(ct*j.height);if(h===void 0)h=f(gt,xt);let Y=x?f(gt,xt):h;return Y.width=gt,Y.height=xt,Y.getContext("2d").drawImage(S,0,0,gt,xt),Jt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+gt+"x"+xt+")."),Y}else{if("data"in S)Jt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+").");return S}return S}function v(S){return S.generateMipmaps}function M(S){t.generateMipmap(S)}function A(S){if(S.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(S.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function R(S,x,F,ct,j,gt=!1){if(S!==null){if(t[S]!==void 0)return t[S];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let xt;if(ct){if(xt=e.get("EXT_texture_norm16"),!xt)Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Y=x;if(x===t.RED){if(F===t.FLOAT)Y=t.R32F;if(F===t.HALF_FLOAT)Y=t.R16F;if(F===t.UNSIGNED_BYTE)Y=t.R8;if(F===t.UNSIGNED_SHORT&&xt)Y=xt.R16_EXT;if(F===t.SHORT&&xt)Y=xt.R16_SNORM_EXT}if(x===t.RED_INTEGER){if(F===t.UNSIGNED_BYTE)Y=t.R8UI;if(F===t.UNSIGNED_SHORT)Y=t.R16UI;if(F===t.UNSIGNED_INT)Y=t.R32UI;if(F===t.BYTE)Y=t.R8I;if(F===t.SHORT)Y=t.R16I;if(F===t.INT)Y=t.R32I}if(x===t.RG){if(F===t.FLOAT)Y=t.RG32F;if(F===t.HALF_FLOAT)Y=t.RG16F;if(F===t.UNSIGNED_BYTE)Y=t.RG8;if(F===t.UNSIGNED_SHORT&&xt)Y=xt.RG16_EXT;if(F===t.SHORT&&xt)Y=xt.RG16_SNORM_EXT}if(x===t.RG_INTEGER){if(F===t.UNSIGNED_BYTE)Y=t.RG8UI;if(F===t.UNSIGNED_SHORT)Y=t.RG16UI;if(F===t.UNSIGNED_INT)Y=t.RG32UI;if(F===t.BYTE)Y=t.RG8I;if(F===t.SHORT)Y=t.RG16I;if(F===t.INT)Y=t.RG32I}if(x===t.RGB_INTEGER){if(F===t.UNSIGNED_BYTE)Y=t.RGB8UI;if(F===t.UNSIGNED_SHORT)Y=t.RGB16UI;if(F===t.UNSIGNED_INT)Y=t.RGB32UI;if(F===t.BYTE)Y=t.RGB8I;if(F===t.SHORT)Y=t.RGB16I;if(F===t.INT)Y=t.RGB32I}if(x===t.RGBA_INTEGER){if(F===t.UNSIGNED_BYTE)Y=t.RGBA8UI;if(F===t.UNSIGNED_SHORT)Y=t.RGBA16UI;if(F===t.UNSIGNED_INT)Y=t.RGBA32UI;if(F===t.BYTE)Y=t.RGBA8I;if(F===t.SHORT)Y=t.RGBA16I;if(F===t.INT)Y=t.RGBA32I}if(x===t.RGB){if(F===t.UNSIGNED_SHORT&&xt)Y=xt.RGB16_EXT;if(F===t.SHORT&&xt)Y=xt.RGB16_SNORM_EXT;if(F===t.UNSIGNED_INT_5_9_9_9_REV)Y=t.RGB9_E5;if(F===t.UNSIGNED_INT_10F_11F_11F_REV)Y=t.R11F_G11F_B10F}if(x===t.RGBA){let it=gt?Fo:ce.getTransfer(j);if(F===t.FLOAT)Y=t.RGBA32F;if(F===t.HALF_FLOAT)Y=t.RGBA16F;if(F===t.UNSIGNED_BYTE)Y=it===ve?t.SRGB8_ALPHA8:t.RGBA8;if(F===t.UNSIGNED_SHORT&&xt)Y=xt.RGBA16_EXT;if(F===t.SHORT&&xt)Y=xt.RGBA16_SNORM_EXT;if(F===t.UNSIGNED_SHORT_4_4_4_4)Y=t.RGBA4;if(F===t.UNSIGNED_SHORT_5_5_5_1)Y=t.RGB5_A1}if(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)e.get("EXT_color_buffer_float");return Y}function g(S,x){let F;if(S){if(x===null||x===Jn||x===pi)F=t.DEPTH24_STENCIL8;else if(x===Ln)F=t.DEPTH32F_STENCIL8;else if(x===Ns)F=t.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===Jn||x===pi)F=t.DEPTH_COMPONENT24;else if(x===Ln)F=t.DEPTH_COMPONENT32F;else if(x===Ns)F=t.DEPTH_COMPONENT16;return F}function w(S,x){if(v(S)===!0||S.isFramebufferTexture&&S.minFilter!==Yn&&S.minFilter!==an)return Math.log2(Math.max(x.width,x.height))+1;else if(S.mipmaps.length>0)return S.mipmaps.length;else if(S.isCompressedTexture&&Array.isArray(S.image))return x.mipmaps.length;else return 1}function P(S){let x=new WeakRef(S);i.get(S).__ref=x,_.add(x),b.register(S,x,x)}function V(S){let x=i.get(S).__ref;if(x===void 0)return;_.delete(x),b.unregister(x)}function U(S){ot(S.target)}function X(S){C(S.target)}function ot(S){if(S.removeEventListener("dispose",U),V(S),et(S),S.isVideoTexture)u.delete(S);if(S.isHTMLTexture)d.delete(S)}function C(S){S.removeEventListener("dispose",X),V(S),at(S)}function tt(){for(let S of _){let x=S.deref();if(x===void 0)continue;if(x.isRenderTarget===!0)C(x);else ot(x)}_.clear(),d.clear()}function et(S){let x=i.get(S);if(x.__webglInit===void 0)return;let F=S.source,ct=m.get(F);if(ct){let j=ct[x.__cacheKey];if(j.usedTimes--,j.usedTimes===0)k(S);if(Object.keys(ct).length===0)m.delete(F)}i.remove(S)}function k(S){let x=i.get(S);t.deleteTexture(x.__webglTexture);let F=S.source,ct=m.get(F);delete ct[x.__cacheKey],a.memory.textures--}function at(S){let x=i.get(S);if(x.__depthDisposeCallback)x.__depthDisposeCallback();let F=S.depthTexture;if(F&&F.renderTarget===S)ot(F);if(S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let gt=0;gt<x.__webglFramebuffer[j].length;gt++)t.deleteFramebuffer(x.__webglFramebuffer[j][gt]);else t.deleteFramebuffer(x.__webglFramebuffer[j]);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)t.deleteFramebuffer(x.__webglFramebuffer[j]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)t.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let j=0;j<x.__webglColorRenderbuffer.length;j++)if(x.__webglColorRenderbuffer[j])t.deleteRenderbuffer(x.__webglColorRenderbuffer[j])}if(x.__webglDepthRenderbuffer)t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ct=S.textures;for(let j=0,gt=ct.length;j<gt;j++){let xt=i.get(ct[j]);if(xt.__webglTexture)t.deleteTexture(xt.__webglTexture),a.memory.textures--;i.remove(ct[j])}i.remove(S)}let q=0;function nt(){q=0}function dt(){return q}function Lt(S){q=S}function Z(){let S=q;if(S>=s.maxTextures)Jt("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures);return q+=1,S}function ut(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.mipmapsAutoUpdate),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function It(S,x){let F=i.get(S);if(S.isVideoTexture)pt(S);if(S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){let ct=S.image;if(ct===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{At(F,S,x);return}}else if(S.isExternalTexture)F.__webglTexture=S.sourceTexture?S.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function Ut(S,x){let F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){At(F,S,x);return}else if(S.isExternalTexture)F.__webglTexture=S.sourceTexture?S.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function St(S,x){let F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){At(F,S,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function E(S,x){let F=i.get(S);if(S.version>0&&F.__version!==S.version){Tt(F,S,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}let O={[Ir]:t.REPEAT,[Pr]:t.CLAMP_TO_EDGE,[Wc]:t.MIRRORED_REPEAT},H={[Yn]:t.NEAREST,[Vc]:t.NEAREST_MIPMAP_NEAREST,[Ds]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Lr]:t.LINEAR_MIPMAP_NEAREST,[Zn]:t.LINEAR_MIPMAP_LINEAR},rt={[jc]:t.NEVER,[zo]:t.ALWAYS,[th]:t.LESS,[Oo]:t.LEQUAL,[eh]:t.EQUAL,[Bo]:t.GEQUAL,[nh]:t.GREATER,[ih]:t.NOTEQUAL};function ht(S,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===Lr||x.magFilter===Ds||x.magFilter===Zn||x.minFilter===an||x.minFilter===Lr||x.minFilter===Ds||x.minFilter===Zn))Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(S,t.TEXTURE_WRAP_S,O[x.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,O[x.wrapT]),S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)t.texParameteri(S,t.TEXTURE_WRAP_R,O[x.wrapR]);if(t.texParameteri(S,t.TEXTURE_MAG_FILTER,H[x.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction)t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,rt[x.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Yn)return;if(x.minFilter!==Ds&&x.minFilter!==Zn)return;if(x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function J(S,x){let F=!1;if(S.__webglInit===void 0)S.__webglInit=!0,x.addEventListener("dispose",U),P(x);let ct=x.source,j=m.get(ct);if(j===void 0)j={},m.set(ct,j);let gt=ut(x);if(gt!==S.__cacheKey){if(j[gt]===void 0)j[gt]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0;j[gt].usedTimes++;let xt=j[S.__cacheKey];if(xt!==void 0){if(j[S.__cacheKey].usedTimes--,xt.usedTimes===0)k(x)}S.__cacheKey=gt,S.__webglTexture=j[gt].texture}return F}function lt(S,x,F){return Math.floor(Math.floor(S/F)/x)}function ft(S,x,F,ct){let gt=S.updateRanges;if(gt.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,F,ct,x.data);else{gt.sort((I,st)=>I.start-st.start);let xt=0;for(let I=1;I<gt.length;I++){let st=gt[xt],Q=gt[I],vt=st.start+st.count,yt=lt(Q.start,x.width,4),Et=lt(st.start,x.width,4);if(Q.start<=vt+1&&yt===Et&&lt(Q.start+Q.count-1,x.width,4)===yt)st.count=Math.max(st.count,Q.start+Q.count-st.start);else++xt,gt[xt]=Q}gt.length=xt+1;let Y=n.getParameter(t.UNPACK_ROW_LENGTH),it=n.getParameter(t.UNPACK_SKIP_PIXELS),_t=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let I=0,st=gt.length;I<st;I++){let Q=gt[I],vt=Math.floor(Q.start/4),yt=Math.ceil(Q.count/4),Et=vt%x.width,Xt=Math.floor(vt/x.width),Gt=yt,Dt=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Et),n.pixelStorei(t.UNPACK_SKIP_ROWS,Xt),n.texSubImage2D(t.TEXTURE_2D,0,Et,Xt,Gt,1,F,ct,x.data)}S.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,it),n.pixelStorei(t.UNPACK_SKIP_ROWS,_t)}}function At(S,x,F){let ct=t.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)ct=t.TEXTURE_2D_ARRAY;if(x.isData3DTexture)ct=t.TEXTURE_3D;let j=J(S,x),gt=x.source;n.bindTexture(ct,S.__webglTexture,t.TEXTURE0+F);let xt=i.get(gt);if(gt.version!==xt.__version||j===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Dt=ce.getPrimaries(ce.workingColorSpace),Vt=x.colorSpace===gi?null:ce.getPrimaries(x.colorSpace),ie=x.colorSpace===gi||Dt===Vt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let it=T(x.image,!1,s.maxTextureSize);it=bt(x,it);let _t=r.convert(x.format,x.colorSpace),I=r.convert(x.type),st=R(x.internalFormat,_t,I,x.normalized,x.colorSpace,x.isVideoTexture);ht(ct,x);let Q,vt=x.mipmaps,yt=x.isVideoTexture!==!0,Et=xt.__version===void 0||j===!0,Xt=gt.dataReady,Gt=w(x,it);if(x.isDepthTexture){if(st=g(x.format===$n,x.type),Et)if(yt)n.texStorage2D(t.TEXTURE_2D,1,st,it.width,it.height);else n.texImage2D(t.TEXTURE_2D,0,st,it.width,it.height,0,_t,I,null)}else if(x.isDataTexture)if(vt.length>0){if(yt&&Et)n.texStorage2D(t.TEXTURE_2D,Gt,st,vt[0].width,vt[0].height);for(let Dt=0,Vt=vt.length;Dt<Vt;Dt++)if(Q=vt[Dt],yt){if(Xt)n.texSubImage2D(t.TEXTURE_2D,Dt,0,0,Q.width,Q.height,_t,I,Q.data)}else n.texImage2D(t.TEXTURE_2D,Dt,st,Q.width,Q.height,0,_t,I,Q.data);x.generateMipmaps=!1}else if(yt){if(Et)n.texStorage2D(t.TEXTURE_2D,Gt,st,it.width,it.height);if(Xt)ft(x,it,_t,I)}else n.texImage2D(t.TEXTURE_2D,0,st,it.width,it.height,0,_t,I,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(yt&&Et)n.texStorage3D(t.TEXTURE_2D_ARRAY,Gt,st,vt[0].width,vt[0].height,it.depth);for(let Dt=0,Vt=vt.length;Dt<Vt;Dt++)if(Q=vt[Dt],x.format!==Dn)if(_t!==null)if(yt){if(Xt)if(x.layerUpdates.size>0){let ie=xl(Q.width,Q.height,x.format,x.type);for(let wt of x.layerUpdates){let pe=Q.data.subarray(wt*ie/Q.data.BYTES_PER_ELEMENT,(wt+1)*ie/Q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Dt,0,0,wt,Q.width,Q.height,1,_t,pe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Dt,0,0,0,Q.width,Q.height,it.depth,_t,Q.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Dt,st,Q.width,Q.height,it.depth,0,Q.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(yt){if(Xt)n.texSubImage3D(t.TEXTURE_2D_ARRAY,Dt,0,0,0,Q.width,Q.height,it.depth,_t,I,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,Dt,st,Q.width,Q.height,it.depth,0,_t,I,Q.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(yt&&Et)n.texStorage2D(t.TEXTURE_2D,Gt,st,vt[0].width,vt[0].height);for(let Dt=0,Vt=vt.length;Dt<Vt;Dt++)if(Q=vt[Dt],x.format!==Dn)if(_t!==null)if(yt){if(Xt)n.compressedTexSubImage2D(t.TEXTURE_2D,Dt,0,0,Q.width,Q.height,_t,Q.data)}else n.compressedTexImage2D(t.TEXTURE_2D,Dt,st,Q.width,Q.height,0,Q.data);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(yt){if(Xt)n.texSubImage2D(t.TEXTURE_2D,Dt,0,0,Q.width,Q.height,_t,I,Q.data)}else n.texImage2D(t.TEXTURE_2D,Dt,st,Q.width,Q.height,0,_t,I,Q.data)}else if(x.isDataArrayTexture)if(yt){if(Et)n.texStorage3D(t.TEXTURE_2D_ARRAY,Gt,st,it.width,it.height,it.depth);if(Xt)if(x.layerUpdates.size>0){let Dt=xl(it.width,it.height,x.format,x.type);for(let Vt of x.layerUpdates){let ie=it.data.subarray(Vt*Dt/it.data.BYTES_PER_ELEMENT,(Vt+1)*Dt/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Vt,it.width,it.height,1,_t,I,ie)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,I,it.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,_t,I,it.data);else if(x.isData3DTexture)if(yt){if(Et)n.texStorage3D(t.TEXTURE_3D,Gt,st,it.width,it.height,it.depth);if(Xt)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,I,it.data)}else n.texImage3D(t.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,_t,I,it.data);else if(x.isFramebufferTexture){if(Et)if(yt)n.texStorage2D(t.TEXTURE_2D,Gt,st,it.width,it.height);else{let Dt=it.width,Vt=it.height;for(let ie=0;ie<Gt;ie++)n.texImage2D(t.TEXTURE_2D,ie,st,Dt,Vt,0,_t,I,null),Dt>>=1,Vt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let Dt=t.canvas;if(!Dt.hasAttribute("layoutsubtree"))Dt.setAttribute("layoutsubtree","true");if(it.parentNode!==Dt){Dt.appendChild(it),d.add(x),Dt.onpaint=(Vt)=>{let ie=Vt.changedElements;for(let wt of d)if(ie.includes(wt.image))wt.needsUpdate=!0},Dt.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,it);else{let{RGBA:ie,RGBA:wt,UNSIGNED_BYTE:pe}=t;t.texElementImage2D(t.TEXTURE_2D,0,ie,wt,pe,it)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(vt.length>0){if(yt&&Et){let Dt=Qt(vt[0]);n.texStorage2D(t.TEXTURE_2D,Gt,st,Dt.width,Dt.height)}for(let Dt=0,Vt=vt.length;Dt<Vt;Dt++)if(Q=vt[Dt],yt){if(Xt)n.texSubImage2D(t.TEXTURE_2D,Dt,0,0,_t,I,Q)}else n.texImage2D(t.TEXTURE_2D,Dt,st,_t,I,Q);x.generateMipmaps=!1}else if(yt){if(Et){let Dt=Qt(it);n.texStorage2D(t.TEXTURE_2D,Gt,st,Dt.width,Dt.height)}if(Xt)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_t,I,it)}else n.texImage2D(t.TEXTURE_2D,0,st,_t,I,it);if(v(x)&&x.mipmapsAutoUpdate===!0)M(ct);if(xt.__version=gt.version,x.onUpdate)x.onUpdate(x)}S.__version=x.version}function Tt(S,x,F){if(x.image.length!==6)return;let ct=J(S,x),j=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+F);let gt=i.get(j);if(j.version!==gt.__version||ct===!0){n.activeTexture(t.TEXTURE0+F);let xt=ce.getPrimaries(ce.workingColorSpace),Y=x.colorSpace===gi?null:ce.getPrimaries(x.colorSpace),it=x.colorSpace===gi||xt===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let _t=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,st=[];for(let wt=0;wt<6;wt++){if(!_t&&!I)st[wt]=T(x.image[wt],!0,s.maxCubemapSize);else st[wt]=I?x.image[wt].image:x.image[wt];st[wt]=bt(x,st[wt])}let Q=st[0],vt=r.convert(x.format,x.colorSpace),yt=r.convert(x.type),Et=R(x.internalFormat,vt,yt,x.normalized,x.colorSpace),Xt=x.isVideoTexture!==!0,Gt=gt.__version===void 0||ct===!0,Dt=j.dataReady,Vt=w(x,Q);ht(t.TEXTURE_CUBE_MAP,x);let ie;if(x.isDepthTexture){if(Et=g(x.format===$n,x.type),Gt)if(Xt)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,Et,Q.width,Q.height);else for(let wt=0;wt<6;wt++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Et,Q.width,Q.height,0,vt,yt,null)}else if(_t){if(Xt&&Gt)n.texStorage2D(t.TEXTURE_CUBE_MAP,Vt,Et,Q.width,Q.height);for(let wt=0;wt<6;wt++){ie=st[wt].mipmaps;for(let pe=0;pe<ie.length;pe++){let Ae=ie[pe];if(x.format!==Dn)if(vt!==null)if(Xt){if(Dt)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,0,0,Ae.width,Ae.height,vt,Ae.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,Et,Ae.width,Ae.height,0,Ae.data);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Xt){if(Dt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,0,0,Ae.width,Ae.height,vt,yt,Ae.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,Et,Ae.width,Ae.height,0,vt,yt,Ae.data)}}}else{if(ie=x.mipmaps,Xt&&Gt){if(ie.length>0)Vt++;let wt=Qt(st[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Vt,Et,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(I){if(Xt){if(Dt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,st[wt].width,st[wt].height,vt,yt,st[wt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Et,st[wt].width,st[wt].height,0,vt,yt,st[wt].data);for(let pe=0;pe<ie.length;pe++){let $e=ie[pe].image[wt].image;if(Xt){if(Dt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,0,0,$e.width,$e.height,vt,yt,$e.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,Et,$e.width,$e.height,0,vt,yt,$e.data)}}else{if(Xt){if(Dt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,vt,yt,st[wt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Et,vt,yt,st[wt]);for(let pe=0;pe<ie.length;pe++){let Ae=ie[pe];if(Xt){if(Dt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,0,0,vt,yt,Ae.image[wt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,Et,vt,yt,Ae.image[wt])}}}if(v(x)&&x.mipmapsAutoUpdate===!0)M(t.TEXTURE_CUBE_MAP);if(gt.__version=j.version,x.onUpdate)x.onUpdate(x)}S.__version=x.version}function Wt(S,x,F,ct,j,gt){let xt=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),it=R(F.internalFormat,xt,Y,F.normalized,F.colorSpace),_t=i.get(x),I=i.get(F);if(I.__renderTarget=x,!_t.__hasExternalTextures){let st=Math.max(1,x.width>>gt),Q=Math.max(1,x.height>>gt);if(j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY)n.texImage3D(j,gt,it,st,Q,x.depth,0,xt,Y,null);else n.texImage2D(j,gt,it,st,Q,0,xt,Y,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,S),Mt(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ct,j,I.__webglTexture,0,z(x));else if(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,ct,j,I.__webglTexture,gt);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ot(S,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,S),x.depthBuffer){let ct=x.depthTexture,j=ct&&ct.isDepthTexture?ct.type:null,gt=g(x.stencilBuffer,j),xt=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(Mt(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,z(x),gt,x.width,x.height);else if(F)t.renderbufferStorageMultisample(t.RENDERBUFFER,z(x),gt,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,gt,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,xt,t.RENDERBUFFER,S)}else{let ct=x.textures;for(let j=0;j<ct.length;j++){let gt=ct[j],xt=r.convert(gt.format,gt.colorSpace),Y=r.convert(gt.type),it=R(gt.internalFormat,xt,Y,gt.normalized,gt.colorSpace);if(Mt(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,z(x),it,x.width,x.height);else if(F)t.renderbufferStorageMultisample(t.RENDERBUFFER,z(x),it,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,it,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function jt(S,x,F){let ct=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(x.depthTexture);j.__renderTarget=x;let gt=ct?x.depthTexture.image[0]:x.depthTexture.image;if(!j.__webglTexture||gt.width!==x.width||gt.height!==x.height)gt.width=x.width,gt.height=x.height,x.depthTexture.needsUpdate=!0;if(ct)E(x.depthTexture,0);else It(x.depthTexture,0);let xt=j.__webglTexture,Y=z(x),it=ct?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,_t=x.depthTexture.format===$n?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===$i)if(Mt(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_t,it,xt,0,Y);else t.framebufferTexture2D(t.FRAMEBUFFER,_t,it,xt,0);else if(x.depthTexture.format===$n)if(Mt(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_t,it,xt,0,Y);else t.framebufferTexture2D(t.FRAMEBUFFER,_t,it,xt,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(S){let x=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let ct=S.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(ct){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ct.removeEventListener("dispose",j)};ct.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=ct}if(S.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let ct=0;ct<6;ct++)jt(x.__webglFramebuffer[ct],S,ct);else if(S.texture.mipmaps.length>0)jt(x.__webglFramebuffer[0],S,0);else jt(x.__webglFramebuffer,S,0);else if(F){x.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[ct]),x.__webglDepthbuffer[ct]===void 0)x.__webglDepthbuffer[ct]=t.createRenderbuffer(),Ot(x.__webglDepthbuffer[ct],S,!1);else{let j=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,gt=x.__webglDepthbuffer[ct];t.bindRenderbuffer(t.RENDERBUFFER,gt),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,gt)}}else{if(S.texture.mipmaps.length>0)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Ot(x.__webglDepthbuffer,S,!1);else{let j=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,gt=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,gt),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,gt)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(S,x,F){let ct=i.get(S);if(x!==void 0)Wt(ct.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(F!==void 0)$t(S)}function N(S){let x=S.texture,F=i.get(S),ct=i.get(x);S.addEventListener("dispose",X),P(S);let j=S.textures,gt=S.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(!xt){if(ct.__webglTexture===void 0)ct.__webglTexture=t.createTexture();ct.__version=x.version,a.memory.textures++}if(gt){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let it=0;it<x.mipmaps.length;it++)F.__webglFramebuffer[Y][it]=t.createFramebuffer()}else F.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)F.__webglFramebuffer[Y]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(xt)for(let Y=0,it=j.length;Y<it;Y++){let _t=i.get(j[Y]);if(_t.__webglTexture===void 0)_t.__webglTexture=t.createTexture(),a.memory.textures++}if(S.samples>0&&Mt(S)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){let it=j[Y];F.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let _t=r.convert(it.format,it.colorSpace),I=r.convert(it.type),st=R(it.internalFormat,_t,I,it.normalized,it.colorSpace,S.isXRRenderTarget===!0),Q=z(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,st,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer)F.__webglDepthRenderbuffer=t.createRenderbuffer(),Ot(F.__webglDepthRenderbuffer,S,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(gt){n.bindTexture(t.TEXTURE_CUBE_MAP,ct.__webglTexture),ht(t.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let it=0;it<x.mipmaps.length;it++)Wt(F.__webglFramebuffer[Y][it],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it);else Wt(F.__webglFramebuffer[Y],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);if(v(x))M(t.TEXTURE_CUBE_MAP);else if(x.mipmaps.length>0)t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1);n.unbindTexture()}else if(xt){for(let Y=0,it=j.length;Y<it;Y++){let _t=j[Y],I=i.get(_t),st=t.TEXTURE_2D;if(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)st=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(st,I.__webglTexture),ht(st,_t),Wt(F.__webglFramebuffer,S,_t,t.COLOR_ATTACHMENT0+Y,st,0),v(_t))M(st)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)Y=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Y,ct.__webglTexture),ht(Y,x),x.mipmaps.length>0)for(let it=0;it<x.mipmaps.length;it++)Wt(F.__webglFramebuffer[it],S,x,t.COLOR_ATTACHMENT0,Y,it);else Wt(F.__webglFramebuffer,S,x,t.COLOR_ATTACHMENT0,Y,0);if(v(x))M(Y);else if(x.mipmaps.length>0)t.texParameteri(Y,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1);n.unbindTexture()}if(S.depthBuffer)$t(S)}function Te(S){let x=S.textures;for(let F=0,ct=x.length;F<ct;F++){let j=x[F];if(v(j)&&j.mipmapsAutoUpdate===!0){let gt=A(S),xt=i.get(j).__webglTexture;n.bindTexture(gt,xt),M(gt),n.unbindTexture()}}}let Kt=[];function B(S){if(S.samples>0){if(Mt(S)===!1){let{textures:x,width:F,height:ct}=S,j=t.COLOR_BUFFER_BIT,gt=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xt=i.get(S),Y=x.length>1;if(Y)for(let _t=0;_t<x.length;_t++)n.bindFramebuffer(t.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.TEXTURE_2D,null,0);if(n.bindFramebuffer(t.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),S.texture.mipmaps.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(S.resolveDepthBuffer){if(S.depthBuffer)j|=t.DEPTH_BUFFER_BIT;if(S.stencilBuffer&&S.resolveStencilBuffer)j|=t.STENCIL_BUFFER_BIT}if(Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);let I=i.get(x[_t]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}if(t.blitFramebuffer(0,0,F,ct,0,0,F,ct,j,t.NEAREST),l===!0){if(Kt.length=0,Kt.push(t.COLOR_ATTACHMENT0+_t),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1)Kt.push(gt);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Kt)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let _t=0;_t<x.length;_t++){n.bindFramebuffer(t.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);let I=i.get(x[_t]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.TEXTURE_2D,I,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let x=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function z(S){return Math.min(s.maxSamples,S.samples)}function Mt(S){let x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pt(S){let x=a.render.frame;if(u.get(S)!==x)u.set(S,x),S.update()}function bt(S,x){let{colorSpace:F,format:ct,type:j}=S;if(S.isCompressedTexture===!0||S.isVideoTexture===!0)return x;if(F!==Uo&&F!==gi)if(ce.getTransfer(F)===ve){if(ct!==Dn||j!==mn)Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Zt("WebGLTextures: Unsupported texture color space:",F);return x}function Qt(S){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement)c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height;else if(typeof VideoFrame<"u"&&S instanceof VideoFrame)c.width=S.displayWidth,c.height=S.displayHeight;else c.width=S.width,c.height=S.height;return c}this.allocateTextureUnit=Z,this.resetTextureUnits=nt,this.getTextureUnits=dt,this.setTextureUnits=Lt,this.setTexture2D=It,this.setTexture2DArray=Ut,this.setTexture3D=St,this.setTextureCube=E,this.rebindTextures=ue,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=Mt,this.dispose=tt}function $g(t,e){function n(i,s=gi){let r,a=ce.getTransfer(s);if(i===mn)return t.UNSIGNED_BYTE;if(i===Qa)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Yc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xc)return t.BYTE;if(i===qc)return t.SHORT;if(i===Ns)return t.UNSIGNED_SHORT;if(i===Ka)return t.INT;if(i===Jn)return t.UNSIGNED_INT;if(i===Ln)return t.FLOAT;if(i===Sn)return t.HALF_FLOAT;if(i===Jc)return t.ALPHA;if(i===$c)return t.RGB;if(i===Dn)return t.RGBA;if(i===$i)return t.DEPTH_COMPONENT;if(i===$n)return t.DEPTH_STENCIL;if(i===Kc)return t.RED;if(i===to)return t.RED_INTEGER;if(i===mi)return t.RG;if(i===eo)return t.RG_INTEGER;if(i===no)return t.RGBA_INTEGER;if(i===Dr||i===Nr||i===Ur||i===Fr)if(a===ve)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===io||i===so||i===ro||i===ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oo||i===lo||i===co||i===ho||i===uo||i===Or||i===fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oo||i===lo)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===co)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ho)return r.COMPRESSED_R11_EAC;if(i===uo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Or)return r.COMPRESSED_RG11_EAC;if(i===fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===po||i===mo||i===go||i===_o||i===xo||i===vo||i===yo||i===So||i===Mo||i===bo||i===wo||i===To||i===Eo||i===Ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===po)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===go)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===So)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===To)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ao)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ro||i===Co||i===Io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ro)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Po||i===Lo||i===Br||i===Do)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===pi)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`;class au{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $r(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Bn({vertexShader:Kg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new vi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ou extends Nn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,m=null,_=typeof XRWebGLBinding<"u",b=new au,p={},f=e.getContextAttributes(),T=null,v=null,M=[],A=[],R=new mt,g=null,w=null,P=new Ze;P.viewport=new we;let V=new Ze;V.viewport=new we;let U=[P,V],X=new ml,ot=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ut=M[Z];if(ut===void 0)ut=new Os,M[Z]=ut;return ut.getTargetRaySpace()},this.getControllerGrip=function(Z){let ut=M[Z];if(ut===void 0)ut=new Os,M[Z]=ut;return ut.getGripSpace()},this.getHand=function(Z){let ut=M[Z];if(ut===void 0)ut=new Os,M[Z]=ut;return ut.getHandSpace()};function tt(Z){let ut=A.indexOf(Z.inputSource);if(ut===-1)return;let It=M[ut];if(It!==void 0)It.update(Z.inputSource,Z.frame,l||r),It.dispatchEvent({type:Z.type,data:Z.inputSource})}function et(){i.removeEventListener("select",tt),i.removeEventListener("selectstart",tt),i.removeEventListener("selectend",tt),i.removeEventListener("squeeze",tt),i.removeEventListener("squeezestart",tt),i.removeEventListener("squeezeend",tt),i.removeEventListener("end",et),i.removeEventListener("inputsourceschange",k);for(let Z=0;Z<M.length;Z++){let ut=A[Z];if(ut===null)continue;A[Z]=null,M[Z].disconnect(ut)}ot=null,C=null,b.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(T),h=null,d=null,u=null,i=null,v=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(R.width,R.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){if(s=Z,n.isPresenting===!0)Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){if(a=Z,n.isPresenting===!0)Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){if(u===null&&_)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",tt),i.addEventListener("selectstart",tt),i.addEventListener("selectend",tt),i.addEventListener("squeeze",tt),i.addEventListener("squeezestart",tt),i.addEventListener("squeezeend",tt),i.addEventListener("end",et),i.addEventListener("inputsourceschange",k),f.xrCompatible!==!0)await e.makeXRCompatible();if(g=t.getPixelRatio(),t.getSize(R),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let It={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,It),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new on(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let It=null,Ut=null,St=null;if(f.depth)St=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=f.stencil?$n:$i,Ut=f.stencil?pi:Jn;let E={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(E),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new on(d.textureWidth,d.textureHeight,{format:Dn,type:mn,depthTexture:new Qn(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Lt.setContext(i),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function k(Z){for(let ut=0;ut<Z.removed.length;ut++){let It=Z.removed[ut],Ut=A.indexOf(It);if(Ut>=0)A[Ut]=null,M[Ut].disconnect(It)}for(let ut=0;ut<Z.added.length;ut++){let It=Z.added[ut],Ut=A.indexOf(It);if(Ut===-1){for(let E=0;E<M.length;E++)if(E>=A.length){A.push(It),Ut=E;break}else if(A[E]===null){A[E]=It,Ut=E;break}if(Ut===-1)break}let St=M[Ut];if(St)St.connect(It)}}function at(Z,ut){if(ut===null)Z.matrixWorld.copy(Z.matrix);else Z.matrixWorld.multiplyMatrices(ut.matrixWorld,Z.matrix);Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let{near:ut,far:It}=Z;if(b.texture!==null){if(b.depthNear>0)ut=b.depthNear;if(b.depthFar>0)It=b.depthFar}if(X.near=V.near=P.near=ut,X.far=V.far=P.far=It,ot!==X.near||C!==X.far)i.updateRenderState({depthNear:X.near,depthFar:X.far}),ot=X.near,C=X.far;X.layers.mask=Z.layers.mask|6,P.layers.mask=X.layers.mask&-5,V.layers.mask=X.layers.mask&-3;let Ut=Z.parent,St=X.cameras;at(X,Ut);for(let E=0;E<St.length;E++)at(St[E],Ut);if(X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),w===null&&Z.isPerspectiveCamera)w={camera:Z,fov:Z.fov,zoom:Z.zoom};q(Z,X,Ut)};function q(Z,ut,It){if(It===null)Z.matrix.copy(ut.matrixWorld);else Z.matrix.copy(It.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ut.matrixWorld);if(Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ut.projectionMatrix),Z.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Z.isPerspectiveCamera)Z.fov=wr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1}this.getCamera=function(){return X},this.getFoveation=function(){if(d===null&&h===null)return;return o},this.setFoveation=function(Z){if(o=Z,d!==null)d.fixedFoveation=Z;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=Z},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(X)},this.getCameraTexture=function(Z){return p[Z]};let nt=null;function dt(Z,ut){if(c=ut.getViewerPose(l||r),m=ut,c!==null){let It=c.views;if(h!==null)t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v);let Ut=!1;if(It.length!==X.cameras.length)X.cameras.length=0,Ut=!0;for(let H=0;H<It.length;H++){let rt=It[H],ht=null;if(h!==null)ht=h.getViewport(rt);else{let lt=u.getViewSubImage(d,rt);if(ht=lt.viewport,H===0)t.setRenderTargetTextures(v,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(v)}let J=U[H];if(J===void 0)J=new Ze,J.layers.enable(H),J.viewport=new we,U[H]=J;if(J.matrix.fromArray(rt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(rt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ht.x,ht.y,ht.width,ht.height),H===0)X.matrix.copy(J.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);if(Ut===!0)X.cameras.push(J)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let H=u.getDepthInformation(It[0]);if(H&&H.isValid&&H.texture)b.init(H,i.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let H=0;H<It.length;H++){let rt=It[H].camera;if(rt){let ht=p[rt];if(!ht)ht=new $r,p[rt]=ht;let J=u.getCameraImage(rt);ht.sourceTexture=J}}}}for(let It=0;It<M.length;It++){let Ut=A[It],St=M[It];if(Ut!==null&&St!==void 0)St.update(Ut,ut,l||r)}if(nt)nt(Z,ut);if(ut.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:ut});m=null}let Lt=new Xh;Lt.setAnimationLoop(dt),this.setAnimationLoop=function(Z){nt=Z},this.dispose=function(){}}}var jg=new fe,lu=new ee;lu.set(-1,0,0,0,1,0,0,0,1);function t0(t,e){function n(p,f){if(p.matrixAutoUpdate===!0)p.updateMatrix();f.value.copy(p.matrix)}function i(p,f){if(f.color.getRGB(p.fogColor.value,Qo(t)),f.isFog)p.fogNear.value=f.near,p.fogFar.value=f.far;else if(f.isFogExp2)p.fogDensity.value=f.density}function s(p,f,T,v,M){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(p,f);else if(f.isMeshLambertMaterial){if(r(p,f),f.envMap)p.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(p,f),d(p,f);else if(f.isMeshPhongMaterial){if(r(p,f),u(p,f),f.envMap)p.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(p,f),h(p,f),f.isMeshPhysicalMaterial)m(p,f,M)}else if(f.isMeshMatcapMaterial)r(p,f),_(p,f);else if(f.isMeshDepthMaterial)r(p,f);else if(f.isMeshDistanceMaterial)r(p,f),b(p,f);else if(f.isMeshNormalMaterial)r(p,f);else if(f.isLineBasicMaterial){if(a(p,f),f.isLineDashedMaterial)o(p,f)}else if(f.isPointsMaterial)l(p,f,T,v);else if(f.isSpriteMaterial)c(p,f);else if(f.isShadowMaterial)p.color.value.copy(f.color),p.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(p,f){if(p.opacity.value=f.opacity,f.color)p.diffuse.value.copy(f.color);if(f.emissive)p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.bumpMap){if(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===We)p.bumpScale.value*=-1}if(f.normalMap){if(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===We)p.normalScale.value.negate()}if(f.displacementMap)p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias;if(f.emissiveMap)p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform);if(f.specularMap)p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest;let T=e.get(f),{envMap:v,envMapRotation:M}=T;if(v){if(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(lu);p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio}if(f.lightMap)p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform);if(f.aoMap)p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform)}function a(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map)p.map.value=f.map,n(f.map,p.mapTransform)}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,v){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=v*0.5,f.map)p.map.value=f.map,n(f.map,p.uvTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function c(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,0.0001)}function d(p,f){if(f.gradientMap)p.gradientMap.value=f.gradientMap}function h(p,f){if(p.metalness.value=f.metalness,f.metalnessMap)p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=f.roughness,f.roughnessMap)p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform);if(f.envMap)p.envMapIntensity.value=f.envMapIntensity}function m(p,f,T){if(p.ior.value=f.ior,f.diffuseRoughness>0){if(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap)p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(f.sheen>0){if(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform);if(f.sheenRoughnessMap)p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform);if(f.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We)p.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)p.dispersion.value=f.dispersion;if(f.retroreflectivity>0)p.retroreflectivity.value=f.retroreflectivity;if(f.iridescence>0){if(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap)p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform);if(f.iridescenceThicknessMap)p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(f.transmission>0){if(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap)p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=f.thickness,f.thicknessMap)p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap)p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform);if(f.specularIntensityMap)p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform)}function _(p,f){if(f.matcap)p.matcap.value=f.matcap}function b(p,f){let T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function e0(t,e,n,i){let s={},r={};function a(T,v){let M=v.program;i.uniformBlockBinding(T,M,s[T.id])}function o(T,v){let M=s[T.id];if(M===void 0)_(T),M=l(T),s[T.id]=M,T.addEventListener("dispose",p);let A=v.program;i.updateUBOMapping(T,A);let R=e.render.frame;if(r[T.id]!==R)c(T),r[T.id]=R}function l(T){let v=t.createBuffer(),{__size:M,usage:A}=T;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,M,A),t.bindBuffer(t.UNIFORM_BUFFER,null),v}function c(T){let v=s[T.id],{uniforms:M,__cache:A}=T;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,g=M.length;R<g;R++){let w=M[R];if(Array.isArray(w))for(let P=0,V=w.length;P<V;P++)u(w[P],R,P,A);else u(w,R,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(T,v,M,A){if(h(T,v,M,A)===!0){let{__offset:R,value:g}=T;if(Array.isArray(g)){let w=0;for(let P=0;P<g.length;P++){let V=g[P],U=b(V,!0);d(V,T.__data,w),w+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,T.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,R,T.__data)}}function d(T,v,M){if(typeof T==="number"||typeof T==="boolean")v[M]=T;else if(T.isMatrix3)v[M]=T.elements[0],v[M+1]=T.elements[1],v[M+2]=T.elements[2],v[M+3]=0,v[M+4]=T.elements[3],v[M+5]=T.elements[4],v[M+6]=T.elements[5],v[M+7]=0,v[M+8]=T.elements[6],v[M+9]=T.elements[7],v[M+10]=T.elements[8],v[M+11]=0;else if(ArrayBuffer.isView(T))v.set(T.subarray(0,v.length-M),M);else T.toArray(v,M)}function h(T,v,M,A){let R=T.value,g=v+"_"+M;if(Array.isArray(R)){if(A[g]===void 0)A[g]=[];let w=A[g],P=!1;for(let V=0;V<R.length;V++)if(m(R[V],w,V)===!0)P=!0;return P}return m(R,A,g)}function m(T,v,M){if(v[M]===void 0){if(typeof T==="number"||typeof T==="boolean")v[M]=T;else if(ArrayBuffer.isView(T))v[M]=T.slice();else v[M]=T.clone();return!0}else{let A=v[M];if(typeof T==="number"||typeof T==="boolean"){if(A!==T)return v[M]=T,!0}else if(ArrayBuffer.isView(T))return!0;else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function _(T){let v=T.uniforms,M=0,A=16;for(let g=0,w=v.length;g<w;g++){let P=Array.isArray(v[g])?v[g]:[v[g]];for(let V=0,U=P.length;V<U;V++){let X=P[V],ot=Array.isArray(X.value)?X.value:[X.value],C=Array.isArray(v[g])||Array.isArray(X.value),tt=M;for(let k=0,at=ot.length;k<at;k++){let q=ot[k],nt=b(q,C),dt=M%A,Lt=dt%nt.boundary,Z=dt+Lt;if(M+=Lt,Z!==0&&A-Z<nt.storage)M+=A-Z;if(k===0)tt=M;M+=nt.storage}let et=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new et((M-tt)/Float32Array.BYTES_PER_ELEMENT),X.__offset=tt}}let R=M%A;if(R>0)M+=A-R;return T.__size=M,T.__cache={},this}function b(T,v){let M={boundary:0,storage:0};if(typeof T==="number"||typeof T==="boolean")M.boundary=4,M.storage=4;else if(T.isVector2)M.boundary=8,M.storage=8;else if(T.isVector3||T.isColor)M.boundary=16,M.storage=12;else if(T.isVector4)M.boundary=16,M.storage=16;else if(T.isMatrix3)M.boundary=16,M.storage=48;else if(T.isMatrix4)M.boundary=16,M.storage=64;else if(T.isTexture)Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(T))M.boundary=16,M.storage=T.byteLength;else Jt("WebGLRenderer: Unsupported uniform value type.",T);if(v===!0)M.boundary=16,M.storage=Math.ceil(M.storage/16)*16;return M}function p(T){let v=T.target;v.removeEventListener("dispose",p),t.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let T in s)t.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:f}}var n0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mn=null;function i0(){if(Mn===null)Mn=new Xr(n0,16,16,mi,Sn),Mn.name="DFG_LUT",Mn.minFilter=an,Mn.magFilter=an,Mn.wrapS=Pr,Mn.wrapT=Pr,Mn.generateMipmaps=!1,Mn.needsUpdate=!0;return Mn}class Ml{constructor(t={}){let{canvas:e=sh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=mn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let _=h,b=new Set([no,eo,to]),p=new Set([mn,Jn,Ns,pi,Qa,ja]),f=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,A=null,R=[],g=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,V=!1,U=null,X=null,ot=null,C=null;this._outputColorSpace=Ki;let tt=0,et=0,k=null,at=-1,q=null,nt=new we,dt=new we,Lt=null,Z=new te(0),ut=0,{width:It,height:Ut}=e,St=1,E=null,O=null,H=new we(0,0,It,Ut),rt=new we(0,0,It,Ut),ht=!1,J=new ui,lt=new Yr,ft=!1,At=!1,Tt=new fe,Wt=new D,Ot=new we,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ue(){return k===null?St:1}let N=n;function Te(y,L){return e.getContext(y,L)}let Kt,B,z,Mt,pt,bt,Qt,S,x,F,ct,j,gt,xt,Y,it,_t,I,st,Q,vt,yt,Et;try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${cc}`);if(e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",ie,!1),N===null){if(N=Te("webgl2",y),N===null)if(Te("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(y){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Zt("WebGLRenderer: "+y.message),y}function Xt(){if(Kt=new pm(N),Kt.init(),vt=new $g(N,Kt),B=new im(N,Kt,t,vt),z=new Zg(N,Kt),B.reversedDepthBuffer&&d)z.buffers.depth.setReversed(!0);X=N.createFramebuffer(),ot=N.createFramebuffer(),C=N.createFramebuffer(),Mt=new _m(N),pt=new Ng,bt=new Jg(N,Kt,z,pt,B,vt,Mt),Qt=new fm(P),S=new xd(N),yt=new em(N,S),x=new mm(N,S,Mt,yt),F=new vm(N,x,S,yt,Mt),I=new xm(N,B,bt),Y=new sm(pt),ct=new Dg(P,Qt,Kt,B,yt,Y),j=new t0(P,pt),gt=new Fg,xt=new Hg(Kt),_t=new tm(P,Qt,z,F,m,o),it=new Yg(P,F,B),Et=new e0(N,Mt,B,z),st=new nm(N,Kt,Mt),Q=new gm(N,Kt,Mt),Mt.programs=ct.programs,P.capabilities=B,P.extensions=Kt,P.properties=pt,P.renderLists=gt,P.shadowMap=it,P.state=z,P.info=Mt}if(_!==mn)w=new Sm(_,e.width,e.height,a,i,s);let Gt=new ou(P,N);this.xr=Gt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=Kt.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=Kt.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(y){if(y===void 0)return;St=y,this.setSize(It,Ut,!1)},this.getSize=function(y){return y.set(It,Ut)},this.setSize=function(y,L,K=!0){if(Gt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(It=y,Ut=L,e.width=Math.floor(y*St),e.height=Math.floor(L*St),K===!0)e.style.width=y+"px",e.style.height=L+"px";if(w!==null)w.setSize(e.width,e.height);this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(It*St,Ut*St).floor()},this.setDrawingBufferSize=function(y,L,K){It=y,Ut=L,St=K,e.width=Math.floor(y*K),e.height=Math.floor(L*K),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(_===mn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(nt)},this.getViewport=function(y){return y.copy(H)},this.setViewport=function(y,L,K,G){if(y.isVector4)H.set(y.x,y.y,y.z,y.w);else H.set(y,L,K,G);z.viewport(nt.copy(H).multiplyScalar(ue()).round())},this.getScissor=function(y){return y.copy(rt)},this.setScissor=function(y,L,K,G){if(y.isVector4)rt.set(y.x,y.y,y.z,y.w);else rt.set(y,L,K,G);z.scissor(dt.copy(rt).multiplyScalar(ue()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(y){z.setScissorTest(ht=y)},this.setOpaqueSort=function(y){E=y},this.setTransparentSort=function(y){O=y},this.getClearColor=function(y){return y.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,K=!0){let G=0;if(y){let W=!1;if(k!==null){let Pt=k.texture.format;W=b.has(Pt)}if(W){let Pt=k.texture.type,Bt=p.has(Pt),Ct=_t.getClearColor(),Ft=_t.getClearAlpha(),{r:Ht,g:ne,b:oe}=Ct;if(Bt)f[0]=Ht,f[1]=ne,f[2]=oe,f[3]=Ft,N.clearBufferuiv(N.COLOR,0,f);else T[0]=Ht,T[1]=ne,T[2]=oe,T[3]=Ft,N.clearBufferiv(N.COLOR,0,T)}else G|=N.COLOR_BUFFER_BIT}if(L)G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(K)G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(G!==0)N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),_t.dispose(),gt.dispose(),xt.dispose(),bt.dispose(),pt.dispose(),Qt.dispose(),F.dispose(),x.dispose(),yt.dispose(),Et.dispose(),ct.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",ni),Gt.removeEventListener("sessionend",ls),wn.stop()};function Dt(y){y.preventDefault(),bs("WebGLRenderer: Context Lost."),V=!0}function Vt(){bs("WebGLRenderer: Context Restored."),V=!1;let y=Mt.autoReset,L=it.enabled,K=it.autoUpdate,G=it.needsUpdate,W=it.type;Xt(),Mt.autoReset=y,it.enabled=L,it.autoUpdate=K,it.needsUpdate=G,it.type=W}function ie(y){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function wt(y){let L=y.target;L.removeEventListener("dispose",wt),pe(L)}function pe(y){Ae(y),pt.remove(y)}function Ae(y){let L=pt.get(y).programs;if(L!==void 0){if(L.forEach(function(K){ct.releaseProgram(K)}),y.isShaderMaterial)ct.releaseShaderCache(y)}}this.renderBufferDirect=function(y,L,K,G,W,Pt){if(L===null)L=jt;let Bt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ct=cn(y,L,K,G,W);z.setMaterial(G,Bt);let Ft=K.index,Ht=1;if(G.wireframe===!0){if(Ft=x.getWireframeAttribute(K),Ft===void 0)return;Ht=2}let ne=K.drawRange,oe=K.attributes.position,zt=ne.start*Ht,le=(ne.start+ne.count)*Ht;if(Pt!==null)zt=Math.max(zt,Pt.start*Ht),le=Math.min(le,(Pt.start+Pt.count)*Ht);if(Ft!==null)zt=Math.max(zt,0),le=Math.min(le,Ft.count);else if(oe!==void 0&&oe!==null)zt=Math.max(zt,0),le=Math.min(le,oe.count);let Ce=le-zt;if(Ce<0||Ce===1/0)return;yt.setup(W,G,Ct,K,Ft);let ye,xe=st;if(Ft!==null)ye=S.get(Ft),xe=Q,xe.setIndex(ye);if(W.isMesh)if(G.wireframe===!0)z.setLineWidth(G.wireframeLinewidth*ue()),xe.setMode(N.LINES);else xe.setMode(N.TRIANGLES);else if(W.isLine){let ze=G.linewidth;if(ze===void 0)ze=1;if(z.setLineWidth(ze*ue()),W.isLineSegments)xe.setMode(N.LINES);else if(W.isLineLoop)xe.setMode(N.LINE_LOOP);else xe.setMode(N.LINE_STRIP)}else if(W.isPoints)xe.setMode(N.POINTS);else if(W.isSprite)xe.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(!Kt.get("WEBGL_multi_draw")){let{_multiDrawStarts:ze,_multiDrawCounts:kt,_multiDrawCount:qe}=W,me=Ft?S.get(Ft).bytesPerElement:1,ii=pt.get(G).currentProgram.getUniforms();for(let ke=0;ke<qe;ke++)ii.setValue(N,"_gl_DrawID",ke),xe.render(ze[ke]/me,kt[ke])}else xe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)xe.renderInstances(zt,Ce,W.count);else if(K.isInstancedBufferGeometry){let ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,kt=Math.min(K.instanceCount,ze);xe.renderInstances(zt,Ce,kt)}else xe.render(zt,Ce)};function $e(y,L,K,G){if(U!==null&&y.isNodeMaterial)U.setObject(G,y);if(ft===!0)Y.setState(y,K,!1);if(y.transparent===!0&&y.side===rn&&y.forceSinglePass===!1)y.side=We,y.needsUpdate=!0,Yt(y,L,G),y.side=Yi,y.needsUpdate=!0,Yt(y,L,G),y.side=rn;else Yt(y,L,G)}this.compile=function(y,L,K=null){if(K===null)K=y;if(U!==null)U.renderStart(y,L,K);if(A=xt.get(K),A.init(L),g.push(A),K.traverseVisible(function(W){if(W.isLight&&W.layers.test(L.layers)){if(A.pushLight(W),W.castShadow)A.pushShadow(W)}}),y!==K)y.traverseVisible(function(W){if(W.isLight&&W.layers.test(L.layers)){if(A.pushLight(W),W.castShadow)A.pushShadow(W)}});if(A.setupLights(),U!==null)U.updateLights(A.state.lightsArray);if(At=this.localClippingEnabled,ft=Y.init(this.clippingPlanes,At),ft===!0)Y.setGlobalState(this.clippingPlanes,L);if(U!==null)it.render(A.state.shadowsArray,K,L);let G=new Set;if(y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Pt=W.material;if(Pt)if(Array.isArray(Pt))for(let Bt=0;Bt<Pt.length;Bt++){let Ct=Pt[Bt];$e(Ct,K,L,W),G.add(Ct)}else $e(Pt,K,L,W),G.add(Pt)}),A=g.pop(),U!==null)U.renderEnd();return G},this.compileAsync=function(y,L,K=null){let G=this.compile(y,L,K);return new Promise((W)=>{function Pt(){if(G.forEach(function(Bt){let Ft=pt.get(Bt).currentProgram;if(Ft===void 0||Ft.isReady())G.delete(Bt)}),G.size===0){W(y);return}setTimeout(Pt,10)}if(Kt.get("KHR_parallel_shader_compile")!==null)Pt();else setTimeout(Pt,10)})};let os=null;function Js(y){if(os)os(y)}function ni(){wn.stop()}function ls(){wn.start()}let wn=new Xh;if(wn.setAnimationLoop(Js),typeof self<"u")wn.setContext(self);this.setAnimationLoop=function(y){os=y,Gt.setAnimationLoop(y),y===null?wn.stop():wn.start()},Gt.addEventListener("sessionstart",ni),Gt.addEventListener("sessionend",ls),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(U!==null)U.renderStart(y,L);let K=Gt.enabled===!0&&Gt.isPresenting===!0,G=w!==null&&(k===null||K)&&w.begin(P,k);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(L.parent===null&&L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(Gt.enabled===!0&&Gt.isPresenting===!0&&(w===null||w.isCompositing()===!1)){if(Gt.cameraAutoUpdate===!0)Gt.updateCamera(L);L=Gt.getCamera()}if(y.isScene===!0)y.onBeforeRender(P,y,L,k);if(A=xt.get(y,g.length),A.init(L),A.state.textureUnits=bt.getTextureUnits(),g.push(A),Tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera)lt.setFromArrayCamera(L);else J.setFromProjectionMatrix(Tt,Go,L.reversedDepth);if(At=this.localClippingEnabled,ft=Y.init(this.clippingPlanes,At),M=gt.get(y,R.length),M.init(),R.push(M),this.info.render.frame++,Gt.enabled===!0&&Gt.isPresenting===!0){let Bt=P.xr.getDepthSensingMesh();if(Bt!==null)Ke(Bt,L,-1/0,P.sortObjects)}if(Ke(y,L,0,P.sortObjects),M.finish(),U!==null)U.updateLights(A.state.lightsArray);if(P.sortObjects===!0)M.sort(E,O);if($t=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,$t)_t.addToRenderList(M,y);if(this.info.autoReset===!0)this.info.reset();if(ft===!0)Y.beginShadows();let W=A.state.shadowsArray;if(it.render(W,y,L),ft===!0)Y.endShadows();if((G&&w.hasRenderPass())===!1){let Bt=M.opaque,Ct=M.transmissive;if(A.setupLights(),L.isArrayCamera){let Ft=L.cameras;if(Ct.length>0)for(let Ht=0,ne=Ft.length;Ht<ne;Ht++){let oe=Ft[Ht];zn(Bt,Ct,y,oe)}if($t)_t.render(y);for(let Ht=0,ne=Ft.length;Ht<ne;Ht++){let oe=Ft[Ht];nn(M,y,oe,oe.viewport)}}else{if(Ct.length>0)zn(Bt,Ct,y,L);if($t)_t.render(y);nn(M,y,L)}}if(k!==null&&et===0)bt.updateMultisampleRenderTarget(k),bt.updateRenderTargetMipmap(k);if(G)w.end(P);if(y.isScene===!0)y.onAfterRender(P,y,L);if(yt.resetDefaultState(),at=-1,q=null,g.pop(),g.length>0){if(A=g[g.length-1],bt.setTextureUnits(A.state.textureUnits),ft===!0)Y.setGlobalState(P.clippingPlanes,A.state.camera)}else A=null;if(R.pop(),R.length>0)M=R[R.length-1];else M=null;if(U!==null)U.renderEnd()};function Ke(y,L,K,G){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(L)}else if(y.isLight){if(A.pushLight(y),y.castShadow)A.pushShadow(y)}else if(y.isSprite){let Bt=L.isArrayCamera?lt:J;if(!y.frustumCulled||y.intersectsFrustum(Bt)){if(G)Ot.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Tt);let Ct=F.update(y),Ft=y.material;if(Ft.visible)M.push(y,Ct,Ft,K,Ot.z,null,L)}}else if(y.isMesh||y.isLine||y.isPoints){let Bt=L.isArrayCamera?lt:J;if(!y.frustumCulled||y.intersectsFrustum(Bt)){let Ct=F.update(y),Ft=y.material;if(G){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();Ot.copy(y.boundingSphere.center)}else{if(Ct.boundingSphere===null)Ct.computeBoundingSphere();Ot.copy(Ct.boundingSphere.center)}Ot.applyMatrix4(y.matrixWorld).applyMatrix4(Tt)}if(Array.isArray(Ft)){let Ht=Ct.groups;for(let ne=0,oe=Ht.length;ne<oe;ne++){let zt=Ht[ne],le=Ft[zt.materialIndex];if(le&&le.visible)M.push(y,Ct,le,K,Ot.z,zt,L)}}else if(Ft.visible)M.push(y,Ct,Ft,K,Ot.z,null,L)}}}let Pt=y.children;for(let Bt=0,Ct=Pt.length;Bt<Ct;Bt++)Ke(Pt[Bt],L,K,G)}function nn(y,L,K,G){let{opaque:W,transmissive:Pt,transparent:Bt}=y;if(A.setupLightsView(K),ft===!0)Y.setGlobalState(P.clippingPlanes,K);if(G)z.viewport(nt.copy(G));if(W.length>0)wi(W,L,K);if(Pt.length>0)wi(Pt,L,K);if(Bt.length>0)wi(Bt,L,K);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function zn(y,L,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){let zt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new on(1,1,{generateMipmaps:!0,type:zt?Sn:mn,minFilter:Zn,samples:Math.max(4,B.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Pt=A.state.transmissionRenderTarget[G.id],Bt=G.viewport||nt;Pt.setSize(Bt.z*P.transmissionResolutionScale,Bt.w*P.transmissionResolutionScale);let Ct=P.getRenderTarget(),Ft=P.getActiveCubeFace(),Ht=P.getActiveMipmapLevel();if(P.setRenderTarget(Pt),P.getClearColor(Z),ut=P.getClearAlpha(),ut<1)P.setClearColor(16777215,0.5);if(P.clear(),$t)_t.render(K);let ne=P.toneMapping;P.toneMapping=yn;let oe=G.viewport;if(G.viewport!==void 0)G.viewport=void 0;if(A.setupLightsView(G),ft===!0)Y.setGlobalState(P.clippingPlanes,G);if(wi(y,K,G),bt.updateMultisampleRenderTarget(Pt),bt.updateRenderTargetMipmap(Pt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let le=0,Ce=L.length;le<Ce;le++){let ye=L[le],{object:xe,geometry:ze,material:kt,group:qe}=ye;if(kt.side===rn&&xe.layers.test(G.layers)){let me=kt.side;kt.side=We,kt.needsUpdate=!0,Rt(xe,K,G,ze,kt,qe),kt.side=me,kt.needsUpdate=!0,zt=!0}}if(zt===!0)bt.updateMultisampleRenderTarget(Pt),bt.updateRenderTargetMipmap(Pt)}if(P.setRenderTarget(Ct,Ft,Ht),P.setClearColor(Z,ut),oe!==void 0)G.viewport=oe;P.toneMapping=ne}function wi(y,L,K){let G=L.isScene===!0?L.overrideMaterial:null;for(let W=0,Pt=y.length;W<Pt;W++){let Bt=y[W],{object:Ct,geometry:Ft,group:Ht}=Bt,ne=Bt.material;if(ne.allowOverride===!0&&G!==null)ne=G;if(Ct.layers.test(K.layers))Rt(Ct,L,K,Ft,ne,Ht)}}function Rt(y,L,K,G,W,Pt){if(U!==null&&W.isNodeMaterial)U.setObject(y,W);if(y.onBeforeRender(P,L,K,G,W,Pt),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(P,L,K,G,y,Pt),W.transparent===!0&&W.side===rn&&W.forceSinglePass===!1)W.side=We,W.needsUpdate=!0,P.renderBufferDirect(K,L,G,W,y,Pt),W.side=Yi,W.needsUpdate=!0,P.renderBufferDirect(K,L,G,W,y,Pt),W.side=rn;else P.renderBufferDirect(K,L,G,W,y,Pt);y.onAfterRender(P,L,K,G,W,Pt)}function qt(y){let L=0;for(let K of y)if(K.texture!==null)L++;return L}function Yt(y,L,K){if(L.isScene!==!0)L=jt;let G=pt.get(y),W=A.state.lights,Pt=A.state.shadowsArray,Bt=W.state.version,Ct=ct.getParameters(y,W.state,Pt,L,K,A.state.lightProbeGridArray),Ft=ct.getProgramCacheKey(Ct),Ht=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;let ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(G.envMap=Qt.get(y.envMap||G.environment,ne),G.envMapRotation=G.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ht===void 0)y.addEventListener("dispose",wt),Ht=new Map,G.programs=Ht,G.programVariants=new Map;let oe=Ht.get(Ft);if(oe!==void 0){if(G.currentProgram===oe&&G.lightsStateVersion===Bt)return Fe(y,Ct),oe}else{if(Ct.uniforms=ct.getUniforms(y),U!==null&&y.isNodeMaterial)U.build(y,K,Ct);y.onBeforeCompile(Ct,P),oe=ct.acquireProgram(Ct,Ft),Ht.set(Ft,oe),G.uniforms=Ct.uniforms}let zt=G.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)zt.clippingPlanes=Y.uniform;if(Fe(y,Ct),G.needsLights=cs(y),G.lightsStateVersion=Bt,G.needsLights)zt.ambientLightColor.value=W.state.ambient,zt.lightProbe.value=W.state.probe,zt.sunLights.value=W.state.sun,zt.sunLightShadows.value=W.state.sunShadow,zt.directionalLights.value=W.state.directional,zt.directionalLightShadows.value=W.state.directionalShadow,zt.spotLights.value=W.state.spot,zt.spotLightShadows.value=W.state.spotShadow,zt.rectAreaLights.value=W.state.rectArea,zt.ltc_1.value=W.state.rectAreaLTC1,zt.ltc_2.value=W.state.rectAreaLTC2,zt.pointLights.value=W.state.point,zt.pointLightShadows.value=W.state.pointShadow,zt.hemisphereLights.value=W.state.hemi,zt.sunShadowMatrix.value=W.state.sunShadowMatrix,zt.sunShadowCascade.value=W.state.sunShadowCascade,zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,zt.spotLightMatrix.value=W.state.spotLightMatrix,zt.spotLightMap.value=W.state.spotLightMap,zt.pointShadowMatrix.value=W.state.pointShadowMatrix;return G.numLightProbeGrids=qt(A.state.lightProbeGridArray),G.currentProgram=oe,G.uniformsList=null,oe}function re(y,L,K,G,W){let Pt=pt.get(y),Bt=Pt.currentProgram.id+","+G+","+W,Ct=Pt.programVariants.get(Bt);if(Ct===void 0)Ct=Yt(y,L,K),Pt.programVariants.set(Bt,Ct);else Pt.currentProgram=Ct,Pt.uniformsList=null,Pt.outputColorSpace=G,Pt.toneMapping=W;return Ct}function Re(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=qs.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Fe(y,L){let K=pt.get(y);K.outputColorSpace=L.outputColorSpace,K.batching=L.batching,K.batchingColor=L.batchingColor,K.instancing=L.instancing,K.instancingColor=L.instancingColor,K.instancingMorph=L.instancingMorph,K.skinning=L.skinning,K.morphTargets=L.morphTargets,K.morphNormals=L.morphNormals,K.morphColors=L.morphColors,K.morphTargetsCount=L.morphTargetsCount,K.numClippingPlanes=L.numClippingPlanes,K.numIntersection=L.numClipIntersection,K.vertexAlphas=L.vertexAlphas,K.vertexTangents=L.vertexTangents,K.toneMapping=L.toneMapping}function cn(y,L,K,G,W){if(L.isScene!==!0)L=jt;bt.resetTextureUnits();let Pt=L.fog,Bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,Ct=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ce.workingColorSpace,Ft=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ht=Qt.get(G.envMap||Bt,Ft),ne=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,oe=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),zt=!!K.morphAttributes.position,le=!!K.morphAttributes.normal,Ce=!!K.morphAttributes.color,ye=yn;if(G.toneMapped){if(k===null||k.isXRRenderTarget===!0)ye=P.toneMapping}let xe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ze=xe!==void 0?xe.length:0,kt=pt.get(G),qe=A.state.lights;if(ft===!0){if(At===!0||y!==q){let Se=y===q&&G.id===at;Y.setState(G,y,Se)}}let me=!1,ii=!1;if(G.version===kt.__version){if(kt.needsLights&&kt.lightsStateVersion!==qe.state.version)me=!0;else if(W.isBatchedMesh&&kt.batching===!1)me=!0;else if(!W.isBatchedMesh&&kt.batching===!0)me=!0;else if(W.isBatchedMesh&&kt.batchingColor===!0&&W._colorsTexture===null)me=!0;else if(W.isBatchedMesh&&kt.batchingColor===!1&&W._colorsTexture!==null)me=!0;else if(W.isInstancedMesh&&kt.instancing===!1)me=!0;else if(!W.isInstancedMesh&&kt.instancing===!0)me=!0;else if(W.isSkinnedMesh&&kt.skinning===!1)me=!0;else if(!W.isSkinnedMesh&&kt.skinning===!0)me=!0;else if(W.isInstancedMesh&&kt.instancingColor===!0&&W.instanceColor===null)me=!0;else if(W.isInstancedMesh&&kt.instancingColor===!1&&W.instanceColor!==null)me=!0;else if(W.isInstancedMesh&&kt.instancingMorph===!0&&W.morphTexture===null)me=!0;else if(W.isInstancedMesh&&kt.instancingMorph===!1&&W.morphTexture!==null)me=!0;else if(kt.envMap!==Ht)me=!0;else if(G.fog===!0&&kt.fog!==Pt)me=!0;else if(kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Y.numPlanes||kt.numIntersection!==Y.numIntersection))me=!0;else if(kt.vertexAlphas!==ne)me=!0;else if(kt.vertexTangents!==oe)me=!0;else if(kt.morphTargets!==zt)me=!0;else if(kt.morphNormals!==le)me=!0;else if(kt.morphColors!==Ce)me=!0;else if(kt.morphTargetsCount!==ze)me=!0;else if(kt.numLightProbeGrids!==qt(A.state.lightProbeGridArray))me=!0;else if(kt.outputColorSpace!==Ct||kt.toneMapping!==ye)ii=!0}else me=!0,kt.__version=G.version;let ke=kt.currentProgram;if(me===!0||ii===!0){if(ke=ii===!0?re(G,L,W,Ct,ye):Yt(G,L,W),U&&G.isNodeMaterial)U.onUpdateProgram(G,ke,kt)}let Ks=!1,Gn=!1,si=!1,de=ke.getUniforms(),Oe=kt.uniforms;if(z.useProgram(ke.program))Ks=!0,Gn=!0,si=!0;if(G.id!==at)at=G.id,Gn=!0;if(Ks||q!==y){if(z.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();de.setValue(N,"projectionMatrix",y.projectionMatrix),de.setValue(N,"viewMatrix",y.matrixWorldInverse);let Ne=de.map.cameraPosition;if(Ne!==void 0)Ne.setValue(N,Wt.setFromMatrixPosition(y.matrixWorld));if(B.logarithmicDepthBuffer)de.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)de.setValue(N,"isOrthographic",y.isOrthographicCamera===!0);if(q!==y)q=y,Gn=!0,si=!0}if(kt.needsLights){if(qe.state.sunShadowMap.length>0)de.setValue(N,"sunShadowMap",qe.state.sunShadowMap,bt);if(qe.state.directionalShadowMap.length>0)de.setValue(N,"directionalShadowMap",qe.state.directionalShadowMap,bt);if(qe.state.spotShadowMap.length>0)de.setValue(N,"spotShadowMap",qe.state.spotShadowMap,bt);if(qe.state.pointShadowMap.length>0)de.setValue(N,"pointShadowMap",qe.state.pointShadowMap,bt)}if(W.isSkinnedMesh){de.setOptional(N,W,"bindMatrix"),de.setOptional(N,W,"bindMatrixInverse");let Se=W.skeleton;if(Se){if(Se.boneTexture===null)Se.computeBoneTexture();de.setValue(N,"boneTexture",Se.boneTexture,bt)}}if(W.isBatchedMesh){if(de.setOptional(N,W,"batchingTexture"),de.setValue(N,"batchingTexture",W._matricesTexture,bt),de.setOptional(N,W,"batchingIdTexture"),de.setValue(N,"batchingIdTexture",W._indirectTexture,bt),de.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null)de.setValue(N,"batchingColorTexture",W._colorsTexture,bt)}let hn=K.morphAttributes;if(hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)I.update(W,K,ke);if(Gn||kt.receiveShadow!==W.receiveShadow)kt.receiveShadow=W.receiveShadow,de.setValue(N,"receiveShadow",W.receiveShadow);if((G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null)Oe.envMapIntensity.value=L.environmentIntensity;if(Oe.dfgLUT!==void 0)Oe.dfgLUT.value=i0();if(Gn){if(de.setValue(N,"toneMappingExposure",P.toneMappingExposure),kt.needsLights)kn(Oe,si);if(Pt&&G.fog===!0)j.refreshFogUniforms(Oe,Pt);if(j.refreshMaterialUniforms(Oe,G,St,Ut,A.state.transmissionRenderTarget[y.id]),kt.needsLights&&kt.numLightProbeGrids>0){let Se=v,Ne=0;for(let Tn of A.state.lightProbeGridArray){if(Tn.texture===null)continue;Se.textures[Ne]=Tn.texture,Se.min[Ne]=Tn.boundingBox.min,Se.max[Ne]=Tn.boundingBox.max,Se.resolution[Ne]=Tn.resolution,Ne++}for(let Tn in Se)Se[Tn].length=Ne;Oe.probesSH.value=Se.textures,Oe.probesMin.value=Se.min,Oe.probesMax.value=Se.max,Oe.probesResolution.value=Se.resolution}qs.upload(N,Re(kt),Oe,bt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0)qs.upload(N,Re(kt),Oe,bt),G.uniformsNeedUpdate=!1;if(G.isSpriteMaterial)de.setValue(N,"center",W.center);if(de.setValue(N,"modelViewMatrix",W.modelViewMatrix),de.setValue(N,"normalMatrix",W.normalMatrix),de.setValue(N,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Se=G.uniformsGroups;for(let Ne=0,Tn=Se.length;Ne<Tn;Ne++){let El=Se[Ne];Et.update(El,ke),Et.bind(El,ke)}}return ke}function kn(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function cs(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,L,K){let G=pt.get(y);if(G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1)G.__useRenderToTexture=!1;pt.get(y.texture).__webglTexture=L,pt.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let K=pt.get(y);K.__webglFramebuffer=L,K.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,K=0){k=y,tt=L,et=K;let G=null,W=!1,Pt=!1;if(y){let Ct=pt.get(y);if(Ct.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(N.FRAMEBUFFER,Ct.__webglFramebuffer),nt.copy(y.viewport),dt.copy(y.scissor),Lt=y.scissorTest,z.viewport(nt),z.scissor(dt),z.setScissorTest(Lt),at=-1;return}else if(Ct.__webglFramebuffer===void 0)bt.setupRenderTarget(y);else if(Ct.__hasExternalTextures)bt.rebindTextures(y,pt.get(y.texture).__webglTexture,pt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ne=y.depthTexture;if(Ct.__boundDepthTexture!==ne){if(ne!==null&&pt.has(ne)&&(y.width!==ne.image.width||y.height!==ne.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(y)}}let Ft=y.texture;if(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)Pt=!0;let Ht=pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(Ht[L]))G=Ht[L][K];else G=Ht[L];W=!0}else if(y.samples>0&&bt.useMultisampledRTT(y)===!1)G=pt.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(Ht))G=Ht[K];else G=Ht;nt.copy(y.viewport),dt.copy(y.scissor),Lt=y.scissorTest}else nt.copy(H).multiplyScalar(St).floor(),dt.copy(rt).multiplyScalar(St).floor(),Lt=ht;if(K!==0)G=X;if(z.bindFramebuffer(N.FRAMEBUFFER,G))z.drawBuffers(y,G);if(z.viewport(nt),z.scissor(dt),z.setScissorTest(Lt),W){let Ct=pt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ct.__webglTexture,K)}else if(Pt){let Ct=L;for(let Ft=0;Ft<y.textures.length;Ft++){let Ht=pt.get(y.textures[Ft]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ft,Ht.__webglTexture,K,Ct)}}else if(y!==null&&K!==0){let Ct=pt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ct.__webglTexture,K)}at=-1};function $s(y){let L=pt.get(y);if(L.__readFormat!==y.format||L.__readType!==y.type)L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=B.textureFormatReadable(y.format),L.__typeReadable=B.textureTypeReadable(y.type);return L}if(this.readRenderTargetPixels=function(y,L,K,G,W,Pt,Bt,Ct=0){if(!(y&&y.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Bt!==void 0){if(Ft=Ft[Bt],Array.isArray(Ft))Ft=Ft[0]}if(Ft){z.bindFramebuffer(N.FRAMEBUFFER,Ft);try{let Ht=y.textures[Ct],{format:ne,type:oe}=Ht;if(y.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+Ct);let zt=$s(Ht);if(zt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(L>=0&&L<=y.width-G&&(K>=0&&K<=y.height-W))N.readPixels(L,K,G,W,vt.convert(ne),vt.convert(oe),Pt)}finally{let Ht=k!==null?pt.get(k).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(y,L,K,G,W,Pt,Bt,Ct=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Bt!==void 0){if(Ft=Ft[Bt],Array.isArray(Ft))Ft=Ft[0]}if(Ft)if(L>=0&&L<=y.width-G&&(K>=0&&K<=y.height-W)){z.bindFramebuffer(N.FRAMEBUFFER,Ft);let Ht=y.textures[Ct],{format:ne,type:oe}=Ht;if(y.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+Ct);let zt=$s(Ht);if(zt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,le),N.bufferData(N.PIXEL_PACK_BUFFER,Pt.byteLength,N.STREAM_READ),N.readPixels(L,K,G,W,vt.convert(ne),vt.convert(oe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ce=k!==null?pt.get(k).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,Ce);let ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ah(N,ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,le),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Pt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(le),N.deleteSync(ye),Pt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,K=0){let G=Math.pow(2,-K),W=Math.floor(y.image.width*G),Pt=Math.floor(y.image.height*G),Bt=L!==null?L.x:0,Ct=L!==null?L.y:0;bt.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Bt,Ct,W,Pt),z.unbindTexture()},this.copyTextureToTexture=function(y,L,K=null,G=null,W=0,Pt=0){let Bt,Ct,Ft,Ht,ne,oe,zt,le,Ce,ye=y.isCompressedTexture?y.mipmaps[Pt]:y.image;if(K!==null)Bt=K.max.x-K.min.x,Ct=K.max.y-K.min.y,Ft=K.isBox3?K.max.z-K.min.z:1,Ht=K.min.x,ne=K.min.y,oe=K.isBox3?K.min.z:0;else{let de=Math.pow(2,-W);if(Bt=Math.floor(ye.width*de),Ct=Math.floor(ye.height*de),y.isDataArrayTexture)Ft=ye.depth;else if(y.isData3DTexture)Ft=Math.floor(ye.depth*de);else Ft=1;Ht=0,ne=0,oe=0}if(G!==null)zt=G.x,le=G.y,Ce=G.z;else zt=0,le=0,Ce=0;let xe=vt.convert(L.format),ze=vt.convert(L.type),kt;if(L.isData3DTexture)bt.setTexture3D(L,0),kt=N.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)bt.setTexture2DArray(L,0),kt=N.TEXTURE_2D_ARRAY;else bt.setTexture2D(L,0),kt=N.TEXTURE_2D;z.activeTexture(N.TEXTURE0),z.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),z.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),z.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let qe=z.getParameter(N.UNPACK_ROW_LENGTH),me=z.getParameter(N.UNPACK_IMAGE_HEIGHT),ii=z.getParameter(N.UNPACK_SKIP_PIXELS),ke=z.getParameter(N.UNPACK_SKIP_ROWS),Ks=z.getParameter(N.UNPACK_SKIP_IMAGES);z.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),z.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),z.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),z.pixelStorei(N.UNPACK_SKIP_ROWS,ne),z.pixelStorei(N.UNPACK_SKIP_IMAGES,oe);let Gn=y.isDataArrayTexture||y.isData3DTexture,si=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let de=pt.get(y),Oe=pt.get(L),hn=pt.get(de.__renderTarget),Se=pt.get(Oe.__renderTarget);z.bindFramebuffer(N.READ_FRAMEBUFFER,hn.__webglFramebuffer),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ne=0;Ne<Ft;Ne++){if(Gn)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pt.get(y).__webglTexture,W,oe+Ne),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pt.get(L).__webglTexture,Pt,Ce+Ne);N.blitFramebuffer(Ht,ne,Ht+Bt,ne+Ct,zt,le,zt+Bt,le+Ct,N.DEPTH_BUFFER_BIT,N.NEAREST)}z.bindFramebuffer(N.READ_FRAMEBUFFER,null),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||pt.has(y)){let de=pt.get(y),Oe=pt.get(L);z.bindFramebuffer(N.READ_FRAMEBUFFER,ot),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,C);for(let hn=0;hn<Ft;hn++){if(Gn)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,de.__webglTexture,W,oe+hn);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,W);if(si)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.__webglTexture,Pt,Ce+hn);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oe.__webglTexture,Pt);if(W!==0)N.blitFramebuffer(Ht,ne,Ht+Bt,ne+Ct,zt,le,zt+Bt,le+Ct,N.COLOR_BUFFER_BIT,N.NEAREST);else if(si)N.copyTexSubImage3D(kt,Pt,zt,le,Ce+hn,Ht,ne,Bt,Ct);else N.copyTexSubImage2D(kt,Pt,zt,le,Ht,ne,Bt,Ct)}z.bindFramebuffer(N.READ_FRAMEBUFFER,null),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(si)if(y.isDataTexture||y.isData3DTexture)N.texSubImage3D(kt,Pt,zt,le,Ce,Bt,Ct,Ft,xe,ze,ye.data);else if(L.isCompressedArrayTexture)N.compressedTexSubImage3D(kt,Pt,zt,le,Ce,Bt,Ct,Ft,xe,ye.data);else N.texSubImage3D(kt,Pt,zt,le,Ce,Bt,Ct,Ft,xe,ze,ye);else if(y.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,Pt,zt,le,Bt,Ct,xe,ze,ye.data);else if(y.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,Pt,zt,le,ye.width,ye.height,xe,ye.data);else N.texSubImage2D(N.TEXTURE_2D,Pt,zt,le,Bt,Ct,xe,ze,ye);if(z.pixelStorei(N.UNPACK_ROW_LENGTH,qe),z.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me),z.pixelStorei(N.UNPACK_SKIP_PIXELS,ii),z.pixelStorei(N.UNPACK_SKIP_ROWS,ke),z.pixelStorei(N.UNPACK_SKIP_IMAGES,Ks),Pt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0)N.generateMipmap(kt);z.unbindTexture()},this.initRenderTarget=function(y){if(pt.get(y).__webglFramebuffer===void 0)bt.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)bt.setTextureCube(y,0);else if(y.isData3DTexture)bt.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)bt.setTexture2DArray(y,0);else bt.setTexture2D(y,0);z.unbindTexture()},this.resetState=function(){tt=0,et=0,k=null,z.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Go}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class bl extends Qi{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let t=new jn;t.deleteAttribute("uv");let e=new es({side:We}),n=new es,i=new ra(16777215,900,28,2);i.position.set(0.418,16.199,0.3),this.add(i);let s=new he(t,e);s.position.set(-0.757,13.219,0.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new qr(t,n,6),a=new be;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-0.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),r.setMatrixAt(0,a.matrix),a.position.set(-5.607,-0.754,-0.758),a.rotation.set(0,0.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),r.setMatrixAt(1,a.matrix),a.position.set(6.167,0.857,7.803),a.rotation.set(0,0.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),r.setMatrixAt(2,a.matrix),a.position.set(-2.017,0.018,6.124),a.rotation.set(0,0.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),r.setMatrixAt(3,a.matrix),a.position.set(2.291,-0.756,-2.621),a.rotation.set(0,-0.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),r.setMatrixAt(4,a.matrix),a.position.set(-2.193,-0.369,-5.547),a.rotation.set(0,0.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),r.setMatrixAt(5,a.matrix),this.add(r);let o=new he(t,rs(50));o.position.set(-16.116,14.37,8.208),o.scale.set(0.1,2.428,2.739),this.add(o);let l=new he(t,rs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new he(t,rs(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let u=new he(t,rs(43));u.position.set(-0.462,8.89,14.52),u.scale.set(4.38,5.441,0.088),this.add(u);let d=new he(t,rs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,0.1),this.add(d);let h=new he(t,rs(100));h.position.set(0,20,0),h.scale.set(1,0.1,1),this.add(h)}dispose(){let t=new Set;this.traverse((e)=>{if(e.isMesh)t.add(e.geometry),t.add(e.material)});for(let e of t)e.dispose()}}function rs(t){return new na({color:0,emissive:16777215,emissiveIntensity:t})}var Pe=Math.PI,ei=Pe*2,Ee=(t,e,n)=>t<e?e:t>n?n:t,s0=(t)=>(t=Ee(t,0,1),t*t*(3-2*t)),Zs=(t)=>(t=Ee(t,0,1),t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2),r0=(t)=>1-Math.pow(1-Ee(t,0,1),3),as={Silver:"#e4e5ea",Gold:"#f2c98a",Rose:"#f0bcaa"},a0={title:["Your pieces in 360°","قطعك بزاوية 360°"],load:["Preparing your pieces…","جارٍ تجهيز قطعك…"],hint:["Drag to turn · pinch to zoom · tap a piece","اسحب للتدوير · قرّب بإصبعين · اضغط على أي قطعة"],replay:["Replay","إعادة"],open:["Open clasp","افتح القفل"],close:["Close clasp","أغلق القفل"],save:["Save picture","حفظ صورة"],bracelet:["Bracelet","السوار"],shown:["Shown on","معروض على"],add:["+ Add to my list","+ أضف إلى قائمتي"],added:["✓ On your list","✓ في قائمتك"],note:["Preview made from the product photos — the real pieces are waiting in store.","معاينة من صور القطع — القطع الحقيقية بانتظارك في الفرع."],fail:["3D view is not available on this device.","العرض ثلاثي الأبعاد غير متاح على هذا الجهاز."],x:["Close","إغلاق"],skip:["Tap to skip","اضغط للتخطي"]},cu=(t)=>new Promise((e,n)=>{let i=new Image;i.crossOrigin="anonymous",i.decoding="async",i.onload=()=>e(i),i.onerror=n,i.src=t});async function o0(t,e,n){try{return await cu(t.base+e+(e.includes("?")?"&":"?")+"width="+n+"&b3=1")}catch(i){return await cu("/api/img?u="+encodeURIComponent(e)+"&w="+n)}}var l0=(t)=>(t||[]).find((e)=>/_1\.(jpe?g|png|webp)/i.test(e))||(t||[]).find((e)=>!/_M\d?\./.test(e))||(t||[])[0];function c0(t){let n=Math.min(1,512/Math.max(t.naturalWidth||t.width,t.naturalHeight||t.height)),i=Math.max(8,Math.round((t.naturalWidth||t.width)*n)),s=Math.max(8,Math.round((t.naturalHeight||t.height)*n)),r=document.createElement("canvas");r.width=i,r.height=s;let a=r.getContext("2d",{willReadFrequently:!0});a.fillStyle="#fff",a.fillRect(0,0,i,s),a.drawImage(t,0,0,i,s);let o=a.getImageData(0,0,i,s).data,l=i*s,c=[],u=[],d=[];for(let E=0;E<i;E++)for(let O of[0,s-1]){let H=(O*i+E)*4;c.push(o[H]),u.push(o[H+1]),d.push(o[H+2])}for(let E=0;E<s;E++)for(let O of[0,i-1]){let H=(E*i+O)*4;c.push(o[H]),u.push(o[H+1]),d.push(o[H+2])}let h=(E)=>E.sort((O,H)=>O-H)[E.length>>1],m=h(c),_=h(u),b=h(d),p=new Uint8Array(l);for(let E=0,O=0;E<l;E++,O+=4)p[E]=Math.max(Math.abs(o[O]-m),Math.abs(o[O+1]-_),Math.abs(o[O+2]-b));let f=26,T=new Uint8Array(l),v=new Int32Array(l),M=0,A=0,R=(E)=>{if(!T[E]&&p[E]<f)T[E]=1,v[A++]=E};for(let E=0;E<i;E++)R(E),R((s-1)*i+E);for(let E=0;E<s;E++)R(E*i),R(E*i+i-1);while(M<A){let E=v[M++],O=E%i,H=E/i|0;if(O>0)R(E-1);if(O<i-1)R(E+1);if(H>0)R(E-i);if(H<s-1)R(E+i)}let g=new Uint8Array(l);for(let E=0;E<l;E++){if(T[E]||g[E]||p[E]>=9)continue;M=A=0,v[A++]=E,g[E]=1;while(M<A){let O=v[M++],H=O%i,rt=O/i|0;for(let ht of[H>0?O-1:-1,H<i-1?O+1:-1,rt>0?O-i:-1,rt<s-1?O+i:-1])if(ht>=0&&!g[ht]&&!T[ht]&&p[ht]<9)g[ht]=1,v[A++]=ht}if(A>l*0.006)for(let O=0;O<A;O++)T[v[O]]=1}let w=new Int32Array(l).fill(-1),P=[];for(let E=0;E<l;E++){if(T[E]||w[E]>=0)continue;let O=P.length;M=A=0,v[A++]=E,w[E]=O;while(M<A){let H=v[M++],rt=H%i,ht=H/i|0;for(let J=-1;J<=1;J++)for(let lt=-1;lt<=1;lt++){let ft=rt+lt,At=ht+J;if(ft<0||At<0||ft>=i||At>=s)continue;let Tt=At*i+ft;if(!T[Tt]&&w[Tt]<0)w[Tt]=O,v[A++]=Tt}}P.push(A)}if(!P.length)return null;let V=Math.max(...P),U=P.map((E)=>E>=V*0.08),X=i,ot=s,C=0,tt=0,et=new Float32Array(l);for(let E=0;E<l;E++){if(T[E]||!U[w[E]])continue;let O=E%i,H=E/i|0;if(et[E]=1,O<X)X=O;if(O>C)C=O;if(H<ot)ot=H;if(H>tt)tt=H}if(C-X<6||tt-ot<6)return null;for(let E=0;E<l;E++){if(!et[E])continue;let O=E%i,H=E/i|0;if(O>0&&!et[E-1]||O<i-1&&!et[E+1]||H>0&&!et[E-i]||H<s-1&&!et[E+i])et[E]=Ee((p[E]-6)/34,0.3,1)}let k=3;X=Math.max(0,X-k),ot=Math.max(0,ot-k),C=Math.min(i-1,C+k),tt=Math.min(s-1,tt+k);let at=C-X+1,q=tt-ot+1,nt=document.createElement("canvas");nt.width=at,nt.height=q;let dt=nt.getContext("2d"),Lt=dt.createImageData(at,q),Z=Lt.data,ut=new Float32Array(at*q);for(let E=0;E<q;E++)for(let O=0;O<at;O++){let H=(E+ot)*i+O+X,rt=(E*at+O)*4;if(ut[E*at+O]=et[H],et[H]>0)Z[rt]=o[H*4],Z[rt+1]=o[H*4+1],Z[rt+2]=o[H*4+2],Z[rt+3]=255}for(let E=0;E<8;E++){let O=new Uint8ClampedArray(Z);for(let H=0;H<q;H++)for(let rt=0;rt<at;rt++){let ht=(H*at+rt)*4;if(O[ht+3])continue;let J=0,lt=0,ft=0,At=0;for(let[Tt,Wt]of[[1,0],[-1,0],[0,1],[0,-1]]){let Ot=rt+Tt,jt=H+Wt;if(Ot<0||jt<0||Ot>=at||jt>=q)continue;let $t=(jt*at+Ot)*4;if(O[$t+3])J+=O[$t],lt+=O[$t+1],ft+=O[$t+2],At++}if(At)Z[ht]=J/At,Z[ht+1]=lt/At,Z[ht+2]=ft/At,Z[ht+3]=255}}for(let E=3;E<Z.length;E+=4)if(!Z[E])Z[E-3]=m*0.8,Z[E-2]=_*0.8,Z[E-1]=b*0.8,Z[E]=255;dt.putImageData(Lt,0,0);let It=new Float32Array(at*q);for(let E=0;E<at*q;E++)It[E]=(Z[E*4]+Z[E*4+1]+Z[E*4+2])/3;let Ut=[];for(let E=4;E<q-4;E+=2)for(let O=4;O<at-4;O+=2){let H=E*at+O;if(ut[H]<1||It[H]<236)continue;let rt=255,ht=0;for(let J=-4;J<=4;J+=2)for(let lt=-4;lt<=4;lt+=2){let ft=It[H+J*at+lt];if(ft<rt)rt=ft;if(ft>ht)ht=ft}if(It[H]>=ht&&It[H]-rt>70)Ut.push([O,E,It[H]-rt])}Ut.sort((E,O)=>O[2]-E[2]);let St=[];for(let E of Ut){if(St.every((O)=>Math.hypot(O[0]-E[0],O[1]-E[1])>Math.max(at,q)*0.1))St.push(E);if(St.length>=7)break}return{canvas:nt,A:ut,cw:at,ch:q,spk:St}}function h0(t,e){let{A:n,cw:i,ch:s}=t,r=e.grid||84,a=Math.max(i,s)/r,o=Math.ceil(i/a),l=Math.ceil(s/a),c=(E,O)=>{E=Ee(E,0,i-1.001),O=Ee(O,0,s-1.001);let H=E|0,rt=O|0,ht=E-H,J=O-rt,lt=rt*i+H;return n[lt]*(1-ht)*(1-J)+n[lt+1]*ht*(1-J)+n[lt+i]*(1-ht)*J+n[lt+i+1]*ht*J},u=(o+1)*(l+1),d=new Uint8Array(u),h=new Float32Array(u),m=new Float32Array(u);for(let E=0;E<=l;E++)for(let O=0;O<=o;O++){let H=E*(o+1)+O;h[H]=O*a,m[H]=E*a,d[H]=c(O*a,E*a)>=0.5?1:0}let _=[],b=(E,O,H)=>(h[O]-h[E])*-(m[H]-m[E])- -(m[O]-m[E])*(h[H]-h[E]),p=(E,O,H)=>{if(b(E,O,H)<0)_.push(E,H,O);else _.push(E,O,H)};for(let E=0;E<l;E++)for(let O=0;O<o;O++){let H=E*(o+1)+O,rt=H+1,ht=H+o+1,J=ht+1,lt=d[H]+d[rt]+d[ht]+d[J];if(lt==4)p(H,rt,J),p(H,J,ht);else if(lt==3){let ft=[H,rt,J,ht].filter((At)=>d[At]);p(ft[0],ft[1],ft[2])}}if(_.length<6)return null;let f=new Map;for(let E=0;E<_.length;E+=3)for(let O=0;O<3;O++){let H=_[E+O],rt=_[E+(O+1)%3],ht=H<rt?H*1e6+rt:rt*1e6+H,J=f.get(ht);if(J)J.n++;else f.set(ht,{a:H,b:rt,n:1})}let T=[...f.values()].filter((E)=>E.n==1),v=new Uint8Array(u),M=new Map;for(let E of T)v[E.a]=v[E.b]=1,(M.get(E.a)||M.set(E.a,[]).get(E.a)).push(E.b),(M.get(E.b)||M.set(E.b,[]).get(E.b)).push(E.a);for(let E=0;E<3;E++){let O=h.slice(),H=m.slice();for(let[rt,ht]of M)if(ht.length==2)h[rt]=0.5*O[rt]+0.25*(O[ht[0]]+O[ht[1]]),m[rt]=0.5*H[rt]+0.25*(H[ht[0]]+H[ht[1]])}let A=new Uint8Array(u);for(let E of _)A[E]=1;let R=new Float32Array(u).fill(1e9);for(let E=0;E<u;E++)if(!A[E]||v[E])R[E]=A[E]?1:0;let g=o+1;for(let E=0;E<2;E++){for(let O=0;O<=l;O++)for(let H=0;H<=o;H++){let rt=O*g+H;if(R[rt]<=1)continue;let ht=R[rt];if(H>0)ht=Math.min(ht,R[rt-1]+1);if(O>0)ht=Math.min(ht,R[rt-g]+1);if(H>0&&O>0)ht=Math.min(ht,R[rt-g-1]+1.414);if(H<o&&O>0)ht=Math.min(ht,R[rt-g+1]+1.414);R[rt]=ht}for(let O=l;O>=0;O--)for(let H=o;H>=0;H--){let rt=O*g+H;if(R[rt]<=1)continue;let ht=R[rt];if(H<o)ht=Math.min(ht,R[rt+1]+1);if(O<l)ht=Math.min(ht,R[rt+g]+1);if(H<o&&O<l)ht=Math.min(ht,R[rt+g+1]+1.414);if(H>0&&O<l)ht=Math.min(ht,R[rt+g-1]+1.414);R[rt]=ht}}let w=1;for(let E=0;E<u;E++)if(A[E]&&R[E]<1e8&&R[E]>w)w=R[E];let P=Math.max(1.5,Math.min(w,e.capF*Math.min(o,l))),V=0.2,U=new Float32Array(u);for(let E=0;E<u;E++)if(A[E]){let O=Ee((R[E]-1)/(P-1||1),0,1);U[E]=V+(1-V)*Math.sqrt(1-(1-O)*(1-O))}for(let E=0;E<2;E++){let O=U.slice();for(let H=1;H<l;H++)for(let rt=1;rt<o;rt++){let ht=H*g+rt;if(!A[ht]||v[ht])continue;let J=O[ht]*2,lt=2;for(let ft of[ht-1,ht+1,ht-g,ht+g])if(A[ft])J+=O[ft],lt++;U[ht]=J/lt}}let{mm:X,wx:ot,wy:C,half:tt}=e,et=[],k=[],at=[],q=new Int32Array(u).fill(-1),nt=new Int32Array(u).fill(-1),dt=(E)=>(h[E]-ot)*X,Lt=(E)=>-(m[E]-C)*X,Z=(E)=>Ee(h[E]/i,0,1),ut=(E)=>1-Ee(m[E]/s,0,1),It=(E,O)=>{let H=O?nt:q;if(H[E]<0)H[E]=et.length/3,et.push(dt(E),Lt(E),(O?-1:1)*U[E]*tt),k.push(Z(E),ut(E));return H[E]};for(let E=0;E<_.length;E+=3){let O=_[E],H=_[E+1],rt=_[E+2];at.push(It(O),It(H),It(rt)),at.push(It(O,1),It(rt,1),It(H,1))}let Ut=new Map;for(let E=0;E<_.length;E+=3)for(let O=0;O<3;O++){let H=_[E+O],rt=_[E+(O+1)%3];Ut.set(H*1e6+rt,1)}for(let E of T){let{a:O,b:H}=E;if(!Ut.has(O*1e6+H)){let lt=O;O=H,H=lt}let rt=et.length/3,ht=U[O]*tt,J=U[H]*tt;et.push(dt(O),Lt(O),ht,dt(H),Lt(H),J,dt(H),Lt(H),-J,dt(O),Lt(O),-ht),k.push(Z(O),ut(O),Z(H),ut(H),Z(H),ut(H),Z(O),ut(O)),at.push(rt+1,rt,rt+3,rt+1,rt+3,rt+2)}let St=new Ve;return St.setAttribute("position",new _e(et,3)),St.setAttribute("uv",new _e(k,2)),St.setIndex(at),St.computeVertexNormals(),St.computeBoundingBox(),St.computeBoundingSphere(),St.userData.hAt=(E,O)=>{let H=Ee(Math.round(E/a),0,o),rt=Ee(Math.round(O/a),0,l);return U[rt*g+H]*tt},St}function u0(t,e){let{A:n,cw:i,ch:s}=t,r=[];for(let h=0;h<s;h++){let m=-1,_=-1;for(let b=0;b<i;b++)if(n[h*i+b]>=0.5){if(m<0)m=b;_=b}r.push(m<0?null:[m,_])}let a=0,o=s-1;while(a<s&&!r[a])a++;while(o>0&&!r[o])o--;let l=Math.max(1,o-a),c=Math.max(...r.map((h)=>h?h[1]-h[0]:0));if(e=="dangle"){let h=a;while(h<o&&r[h]&&r[h][1]-r[h][0]<c*0.5)h++;let m=h-a>l*0.04&&h-a<l*0.45?(a+h)/2:a+l*0.07,_=r[Math.round(m)]||r[a];return{x:_?(_[0]+_[1])/2:i/2,y:m,top:a,bot:o,wmax:c,hgt:l}}let u=i,d=0;for(let h of r)if(h)u=Math.min(u,h[0]),d=Math.max(d,h[1]);return{x:(u+d)/2,y:(a+o)/2,top:a,bot:o,wmax:c,hgt:l}}var d0=(t)=>{let e=t.f||"",n=(t.n||"").toLowerCase();if(e=="Dangle"||e=="Medallion"||/\bdangle\b/.test(n))return"dangle";if(e=="Clip"||/\bclip\b/.test(n))return"clip";if(e=="Spacer"||/spacer/.test(n))return"spacer";if(e=="Link"||/openable link/.test(n))return"link";return"bead"},f0=(t,e)=>{let n=(t.n||"").toLowerCase();if(e=="dangle")return t.f=="Medallion"?15:17;if(e=="clip")return 8.6;if(e=="spacer")return 6.8;if(e=="link")return 9;if(/\bmini\b/.test(n))return 7.6;if(/murano/.test(n))return 12;return 10.6};function p0(t){let i=document.createElement("canvas");i.width=256,i.height=64;let s=i.getContext("2d"),r=s.createImageData(256,64),a=r.data,o=(u,d)=>{if(u=(u+256)%256,d=(d+64)%64,t=="cord"){let _=Math.sin((u*2+d*4)/256*ei*4),b=Math.sin((u*2-d*4)/256*ei*4);return Math.max(_,b)*0.5+0.5}if(t=="leather")return 0.5+0.08*Math.sin(u*0.9)*Math.sin(d*1.3);let h=32,m=(u+d*(t=="twist"?2:0.5))%h/h;return Math.pow(Math.sin(Pe*m),0.55)},l=t=="cord"?2.2:t=="leather"?1:2.6;for(let u=0;u<64;u++)for(let d=0;d<256;d++){let h=-(o(d+1,u)-o(d-1,u))*l,m=-(o(d,u+1)-o(d,u-1))*l,_=1,b=Math.hypot(h,m,_),p=(u*256+d)*4;a[p]=(h/b*0.5+0.5)*255,a[p+1]=(m/b*0.5+0.5)*255,a[p+2]=(_/b*0.5+0.5)*255,a[p+3]=255}s.putImageData(r,0,0);let c=new xi(i);return c.wrapS=c.wrapT=Ir,c}function m0(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(0.12,"rgba(255,255,255,.75)"),n.addColorStop(0.35,"rgba(255,240,245,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),e.globalCompositeOperation="lighter";for(let[s,r]of[[0,62],[Pe/2,62],[Pe/4,30],[-Pe/4,30]]){e.save(),e.translate(64,64),e.rotate(s);let a=e.createLinearGradient(-r,0,r,0);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(0.5,"rgba(255,255,255,.95)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(-r,-1.2,r*2,2.4),e.restore()}let i=new xi(t);return i.colorSpace=Ki,i}function wl(t){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),i=n.createRadialGradient(128,128,0,128,128,128);if(t)i.addColorStop(0,"rgba(74,47,53,0.04)"),i.addColorStop(0.52,"rgba(74,47,53,0.10)"),i.addColorStop(0.74,"rgba(74,47,53,0.42)"),i.addColorStop(0.86,"rgba(74,47,53,0.16)"),i.addColorStop(1,"rgba(74,47,53,0)");else i.addColorStop(0,"rgba(74,47,53,0.40)"),i.addColorStop(0.5,"rgba(74,47,53,0.16)"),i.addColorStop(1,"rgba(74,47,53,0)");n.fillStyle=i,n.fillRect(0,0,256,256);let s=new xi(e);return s.colorSpace=Ki,s}function g0(t){let e=(t?t.n:"").toLowerCase(),n=t?t.m||"Silver":"Silver",i=t&&/(\d+(\.\d+)?)\s*cm/i.test(t.size||"")?parseFloat(RegExp.$1)*10:180,s="snake",r=as[n]||as.Silver,a=0.2,o=1.5;if(t&&t.f=="Bangle")s="bangle",o=1.7,a=0.14;else if(/textile cord|braided/.test(e)){s="cord",o=1.65,a=0.85;let u={blue:"#2e4a8f",red:"#a3242f",purple:"#5d3f8e",black:"#26232a",turquoise:"#2aa3a8",pink:"#e89aa8"},d=Object.keys(u).find((h)=>e.includes(h));r=d?u[d]:"#5d3f8e"}else if(/leather/.test(e))s="leather",o=1.9,a=0.7,r=/black/.test(e)?"#2a2326":/pink/.test(e)?"#d99aa5":/blue/.test(e)?"#33476e":"#6b4231";else if(/twisted/.test(e))s="twist";else if(/studded/.test(e))s="stud";let l=s=="bangle"?"ball":/heart[- ](shaped )?clasp|t-bar heart/.test(e)?"heart":"barrel",c=/14k gold-plated (heart )?clasp/.test(e)?as.Gold:/14k rose gold-plated (heart )?clasp/.test(e)?as.Rose:s=="cord"||s=="leather"?as[n]||as.Silver:r;return{kind:s,col:r,rough:a,rw:o,clasp:l,claspCol:c,metal:n,R:Ee(i,150,240)/ei}}function Yv(t){let e=t.lang=="ar",n=(B)=>a0[B][e?1:0];x0();let i=document.createElement("div");i.className="b3",i.dir=e?"rtl":"ltr",i.innerHTML=`<div class="b3-top"><div class="b3-tt"><span class="b3-k">PANDORA</span><b>${n("title")}</b></div><button class="b3-x" aria-label="${n("x")}">×</button></div>
  <div class="b3-st"></div><div class="b3-lb" hidden></div><div class="b3-ld"><i></i><span>${n("load")}</span></div>
  <div class="b3-bot"><div class="b3-hint">${n("hint")}</div><div class="b3-tabs"></div><div class="b3-act"></div><div class="b3-card" hidden></div><div class="b3-note">${n("note")}</div></div>`,document.body.appendChild(i),document.documentElement.classList.add("b3-on"),requestAnimationFrame(()=>i.classList.add("in"));let s=(B)=>i.querySelector(B),r=!1,a=()=>Kt(!0);try{history.pushState({b3:1},""),addEventListener("popstate",a)}catch(B){}let o;try{o=new Ml({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(B){s(".b3-ld span").textContent=n("fail"),s(".b3-ld i").remove(),s(".b3-x").onclick=()=>Kt();return}o.setPixelRatio(Math.min(2,devicePixelRatio||1)),o.setClearColor(0,0),o.toneMapping=Ps,o.toneMappingExposure=1.05,s(".b3-st").appendChild(o.domElement);let l=new Qi,c=new is(o),u=c.fromScene(new bl,0.035).texture;l.environment=u;let d=new Ze(28,1,1,3000),h=new en,m=new en;l.add(h),h.add(m);let _=new he(new vi(1,1),new zs({transparent:!0,depthWrite:!1,opacity:0.55,map:wl(!0)}));_.rotation.x=-Pe/2,l.add(_);let b=m0(),p=[u,b,_.material.map,_.geometry,_.material],f={yaw:0,el:0.48,dist:210,vy:0,tgtDist:210,auto:!0,lastUser:0,cy:0},T=null,v=null,M=[],A=[];function R(){let{clientWidth:B,clientHeight:z}=i;o.setSize(B,z,!1),d.aspect=B/z,f.fit=Ee(0.78/(B/z),1.3,1.85),d.setViewOffset(B,z,0,z*(B/z<1?0.075:0.03),B,z),d.updateProjectionMatrix()}R();let g=()=>R();addEventListener("resize",g);let w=(B,z,Mt,pt)=>{let bt=new ns({color:new te(B),metalness:1,roughness:z,envMapIntensity:1.25,side:rn});if(Mt){if(bt.normalMap=Mt,bt.normalScale=new mt(0.7,0.7),pt)Mt.repeat.set(pt,1)}return p.push(bt),bt},P=(B,z,Mt,pt)=>{let bt=new ns({color:new te(B),metalness:0,roughness:z,sheen:0.6,sheenColor:new te("#ffffff"),sheenRoughness:0.6,normalMap:Mt||null});if(Mt&&pt)Mt.repeat.set(pt,1);return p.push(bt),bt},V=(B)=>{let z=new ns({map:B,roughness:0.34,metalness:0,clearcoat:0.55,clearcoatRoughness:0.18,emissive:new te("#ffffff"),emissiveMap:B,emissiveIntensity:0.2,envMapIntensity:0.75});return p.push(z,B),z};async function U(B,z,Mt){let pt=l0(B.im);if(!pt)return null;let bt=await o0(t,pt,640);if(r)return null;let Qt=c0(bt);if(!Qt)return null;let S=u0(Qt,z),x=Mt.mmFrom=="w"?Mt.mm/Math.max(1,S.wmax):Mt.mm/Math.max(1,S.hgt),F=S.wmax*x,ct=S.hgt*x,j=Mt.half(F,ct),gt=Mt.capF,xt=h0(Qt,{mm:x,wx:Mt.center?Qt.cw/2:S.x,wy:Mt.center?(S.top+S.bot)/2:S.y,half:j,capF:gt});if(!xt)return null;let Y=new xi(Qt.canvas);Y.colorSpace=Ki,Y.anisotropy=4;let it=new he(xt,V(Y));if(it.userData.item=B,p.push(xt),/zirconia|crystal|diamond|sparkl|pav/i.test(B.n+" "+(B.x||[]).join(" ")))for(let[I,st]of Qt.spk){let Q=new Wr(new Bs({map:b,blending:Is,depthWrite:!1,transparent:!0,opacity:0})),vt=Mt.center?Qt.cw/2:S.x,yt=Mt.center?(S.top+S.bot)/2:S.y;Q.position.set((I-vt)*x,-(st-yt)*x,xt.userData.hAt(I,st)+0.25),Q.scale.setScalar(2.6+Math.random()*1.4),Q.userData={ph:Math.random()*ei,sp:1.3+Math.random()*1.6},it.add(Q),A.push(Q),p.push(Q.material)}return{mesh:it,wmm:F,hmm:ct,kind:z,it:B}}async function X(){let B=g0(t.carrier),z=B.R,Mt=[];for(let Rt of t.charms)for(let qt=0;qt<(Rt.q||1);qt++)Mt.push(Rt);let pt=await Promise.all(Mt.slice(0,24).map(async(Rt)=>{let qt=d0(Rt),Yt=f0(Rt,qt);try{return await U(Rt,qt,{mm:Yt,mmFrom:"h",capF:qt=="dangle"?0.14:qt=="link"?0.25:0.9,half:(re,Re)=>qt=="dangle"?Math.max(0.9,Math.min(re,Re)*0.1):qt=="link"?Math.min(re,Re)*0.3:Math.min(re,Re)*0.44})}catch(re){return null}}));if(r)return;let bt=pt.filter(Boolean),Qt=B.clasp=="heart"?11:B.clasp=="ball"?5.4:9.6,S=Qt/2/z,x=z*(ei-2*S),F={open:0,R:z,g:S,rigid:B.kind=="bangle"},ct=(Rt,qt)=>{let Yt=Pe+S+Rt*(ei-2*S),re=Math.sin(Yt),Re=Math.cos(Yt);if(qt.set(z*re,0,z*Re),!F.rigid&&F.open>0){let Fe=s0((Rt-0.74)/0.26);Fe*=Fe;let cn=F.open*Fe;qt.x+=re*13*cn,qt.z+=Re*13*cn,qt.y+=15*cn}return qt},j=new class extends Je{getPoint(Rt,qt=new D){return ct(Rt,qt)}},gt=(Rt,qt)=>{let Yt=ct(Rt,new D),re=ct(Math.max(0,Rt-0.002),new D),Fe=ct(Math.min(1,Rt+0.002),new D).sub(re).normalize(),cn=new D(0,1,0),kn=new D().crossVectors(Fe,cn).normalize();cn.crossVectors(kn,Fe),qt.position.copy(Yt),qt.quaternion.setFromRotationMatrix(new fe().makeBasis(Fe,cn,kn))},Y=B.kind!="cord"&&B.kind!="leather"?B.kind=="bangle"?[0.12,0.88]:[0.3333333333333333,0.6666666666666666]:[],it=0.7,_t=(Rt)=>Rt/x,I=[],st=bt.filter((Rt)=>Rt.kind=="clip"),Q=bt.filter((Rt)=>Rt.kind!="clip");for(let Rt of st){let qt=Y.filter((Yt)=>!I.some((re)=>Math.abs(re.c-Yt)<0.01));if(qt.length){let Yt=qt.sort((re,Re)=>Math.abs(re-0.5)-Math.abs(Re-0.5))[0];Rt.s=Yt,I.push({c:Yt,a:Yt-_t(Rt.wmm/2),b:Yt+_t(Rt.wmm/2)})}else Q.push(Rt)}for(let Rt of Y)if(!I.some((qt)=>Math.abs(qt.c-Rt)<0.01))I.push({c:Rt,a:Rt-_t(1.6),b:Rt+_t(1.6)});let vt=(Rt,qt)=>I.some((Yt)=>Rt<Yt.b+_t(0.3)&&qt>Yt.a-_t(0.3)),yt=0.5,Et=0.5,Xt=!0,Gt=Q.reduce((Rt,qt)=>Rt+_t((qt.kind=="dangle"?qt.wmm*0.55:qt.wmm)+it),0),Dt=Gt>0.9?0.9/Gt:1;Q.forEach((Rt,qt)=>{let Yt=_t(((Rt.kind=="dangle"?Rt.wmm*0.55:Rt.wmm)+it)*Dt);if(Xt)Rt.s=0.5,yt=0.5+Yt/2,Et=0.5-Yt/2,Xt=!1;else if(qt%2){let re=yt;while(vt(re,re+Yt)&&re<0.98)re+=_t(0.5);Rt.s=re+Yt/2,yt=re+Yt}else{let re=Et;while(vt(re-Yt,re)&&re>0.02)re-=_t(0.5);Rt.s=re-Yt/2,Et=re-Yt}if(Rt.s=Ee(Rt.s,0.04,0.96),Dt<1)Rt.mesh.scale.setScalar(Math.max(0.6,Dt))});let Vt=B.kind=="bangle"?null:p0(B.kind=="stud"?"snake":B.kind);if(Vt)p.push(Vt);let ie=B.kind=="cord"||B.kind=="leather"?P(B.col,B.rough,Vt,x/8):w(B.col,B.rough,Vt,x/8),wt=w(B.claspCol,0.16),pe=w(B.claspCol,0.5),Ae=w(B.claspCol,0.32),$e=new he(new ts(j,300,B.rw,14,!1),ie);m.add($e);let os=()=>{$e.geometry.dispose(),$e.geometry=new ts(j,300,B.rw,14,!1)},Js=new he(new On(B.rw*1.05,18,12),wt),ni=new be,ls=new he(new On(B.rw*1.25,20,14),wt);ls.position.x=0.9,ni.add(ls);let wn=new he(new ti([new mt(0.01,-1.6),new mt(B.rw*1.1,-1.4),new mt(B.rw*0.9,0),new mt(0.01,0.2)],18).rotateZ(-Pe/2),wt);ni.add(wn),m.add(Js,ni),gt(0,Js);let Ke=new en;Ke.position.set(0,0,-z),Ke.quaternion.setFromRotationMatrix(new fe().makeBasis(new D(-1,0,0),new D(0,1,0),new D(0,0,-1))),m.add(Ke);let nn=null,zn=null;if(B.clasp=="barrel"){let Rt=[],qt=Qt/2,Yt=4.1;for(let kn=0;kn<=24;kn++){let cs=-qt+Qt*kn/24,$s=Math.abs(cs)/qt,y=4.1*Math.sqrt(Math.max(0,1-Math.pow($s,3.2)));if(y=Math.max(y,B.rw*1.15),Math.abs(cs)<0.45)y-=0.28;Rt.push(new mt(y,cs))}let re=new he(new ti(Rt,30,0,Pe).rotateZ(-Pe/2),wt),Re=new ti(Rt,30,Pe,Pe).rotateZ(-Pe/2);nn=new en,nn.position.set(0,0,-4.1);let Fe=new he(Re,wt);Fe.position.z=4.1,nn.add(Fe);let cn=new he(new ji(3.8999999999999995,0.2,8,40).rotateY(Pe/2),pe);re.add(cn),Ke.add(re,nn)}else if(B.clasp=="heart"){let Rt=new Gs;Rt.moveTo(0,-3.1),Rt.bezierCurveTo(-0.9299999999999999,-2.108,-4.712,0,-4.712,2.108),Rt.bezierCurveTo(-4.712,4.34,-1.612,4.898000000000001,0,2.79),Rt.bezierCurveTo(1.612,4.898000000000001,4.712,4.34,4.712,2.108),Rt.bezierCurveTo(4.712,0,0.9299999999999999,-2.108,0,-3.1);let Yt=(Fe)=>new Hs(Rt,{depth:Fe,bevelEnabled:!0,bevelThickness:0.7,bevelSize:0.7,bevelSegments:4,curveSegments:24}),re=new he(Yt(1.6).translate(0,-1.2,-2.3),wt);Ke.add(re),nn=new en,nn.position.set(0,-4.3,0);let Re=new he(Yt(1.2).translate(0,0,0),wt);Re.position.y=3.1,nn.add(Re),Ke.add(nn)}else{let Rt=new he(new On(2.7,28,20),wt);Rt.position.x=2.6,Ke.add(Rt),zn=new en;let qt=new he(new On(2.7,28,20),wt);zn.add(qt);let Yt=new he(new ji(2.62,0.12,6,40).rotateY(Pe/2),pe);qt.add(Yt),zn.position.x=-2.6,Ke.add(zn)}let wi=[];for(let Rt of Y){let qt=[new mt(B.rw*0.9,-1.35)];for(let re=0;re<=40;re++){let Re=-1.2+2.4*re/40,Fe=Math.sin(Pe*re/40);qt.push(new mt(B.rw+(0.1+0.16*(0.5+0.5*Math.cos(Re*ei/0.45)))*Math.pow(Fe,0.3),Re))}qt.push(new mt(B.rw*0.9,1.35));let Yt=new he(new ti(qt,32).rotateZ(-Pe/2),Ae);gt(Rt,Yt),m.add(Yt),wi.push(Yt)}if(B.kind=="stud")for(let Rt=0.06;Rt<0.95;Rt+=_t(7.5)){if(bt.some((Yt)=>Math.abs(Yt.s-Rt)<_t(Yt.wmm/2+2))||Y.some((Yt)=>Math.abs(Yt-Rt)<_t(3)))continue;let qt=new he(new On(B.rw*1.35,16,12),wt);gt(Rt,qt),m.add(qt)}for(let Rt of bt){let qt=new be,Yt=new be;qt.add(Yt),Yt.add(Rt.mesh),m.add(qt),Rt.holder=qt,Rt.swing=Yt,Rt.phx=0,Rt.vx=0,Rt.phz=0,Rt.vz=0,Rt.prev=null,Rt.pv=new D,Rt.acc=new D,M.push(Rt.mesh)}v={sp:B,st:F,pcs:bt,frame:gt,pt:ct,rebuildWire:os,endB:ni,lid:nn,ballB:zn,clasp:Ke,t0:performance.now()/1000,open:0,playing:!0,lastOpen:-1,Rr:z},_.material.map.dispose(),_.material.map=wl(!0),_.scale.setScalar(z*2.75),_.position.y=-26,p.push(_.material.map),f.cy=-5,f.yaw=Pe,f.tgtDist=f.dist=z*7.1*(f.fit||1),f.el=0.5,ot(0)}function ot(B){if(!v)return;let z=v.pcs.length,Mt=[...v.pcs].sort((j,gt)=>j.s-gt.s),pt=z>8?0.3:0.45,bt=1.55,Qt=0.5,S=1.45,x=S+(z?(z-1)*pt+bt:0.6),F=x+0.15;v.tEnd=F+0.9;let ct=B<Qt?0:B<S?Zs((B-Qt)/(S-Qt-0.1)):B<F?1:1-Zs((B-F)/0.75);if(C(ct),Mt.forEach((j,gt)=>{let xt=(B-S-gt*pt)/bt;if(xt<=0){j.holder.visible=!1;return}if(j.holder.visible=!0,xt>=1){v.frame(j.s,j.holder),j.mesh.scale.setScalar(j.mesh.userData.sc||j.mesh.scale.x);return}if(j.mesh.userData.sc=j.mesh.userData.sc||j.mesh.scale.x,xt<0.28){let Y=r0(xt/0.28);v.frame(1,j.holder),j.holder.position.y+=26*(1-Y),j.holder.position.add(new D(j.holder.position.x,0,j.holder.position.z).setLength(6*(1-Y))),j.mesh.scale.setScalar(j.mesh.userData.sc*(0.4+0.6*Y))}else{let Y=Zs((xt-0.28)/0.72);v.frame(1-(1-j.s)*Y,j.holder),j.mesh.scale.setScalar(j.mesh.userData.sc)}}),!f.userSpun)f.yaw=Pe*(1-Zs((B-S+0.2)/Math.max(1.2,x-S+0.2)));if(B>=F+0.75&&!v.clicked)v.clicked=!0,tt();if(B>=v.tEnd)v.playing=!1,ut()}function C(B){if(!v)return;if(B=Ee(B,0,1),v.open=B,Math.abs(B-v.lastOpen)>0.0001){if(v.st.open=B,!v.st.rigid)v.rebuildWire();if(v.frame(1,v.endB),v.lastOpen=B,v.lid)v.lid.rotation.x=v.sp.clasp=="heart"?B*1.55:-B*1.8;if(v.ballB)v.ballB.position.set(-2.6-7*B,5*B,0),v.ballB.rotation.x=B*ei*1.5;if(!v.playing){for(let z of v.pcs)if(z.s>0.7)v.frame(z.s,z.holder)}}}function tt(){try{if(navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive))navigator.vibrate(18)}catch(B){}f.shake=1;for(let B of A)B.userData.boost=1}async function et(B){let z=B.c,Mt=z==3?"ring":z==2?"ear":z==1?"neck":"other",pt=await U(B,"piece",{mm:46,mmFrom:"w",center:!0,capF:Mt=="ring"?0.2:0.12,half:(S,x)=>Math.max(1,Math.min(S,x)*(Mt=="ring"?0.16:0.08))});if(r||!pt)return!1;let bt=new be;bt.add(pt.mesh),m.add(bt),M.push(pt.mesh);let Qt=pt.mesh.geometry.boundingBox;return bt.position.y=-(Qt.min.y+Qt.max.y)/2,_.material.map.dispose(),_.material.map=wl(!1),p.push(_.material.map),_.scale.set(Math.max(30,pt.wmm*1.2),1,1),_.scale.setScalar(Math.max(34,pt.wmm*1.25)),_.position.y=-(Qt.max.y-Qt.min.y)/2-8,f.cy=0,f.yaw=-0.5,f.el=0.18,f.tgtDist=f.dist=Math.max(pt.wmm,pt.hmm)*3.6*(f.fit||1),!0}function k(){v=null,M.length=0,A.length=0;for(let B of[...m.children])m.remove(B),B.traverse((z)=>{if(z.geometry)z.geometry.dispose()})}let at=[];if(t.charms.length||t.carrier)at.push({k:"b",label:n("bracelet")});for(let B of t.pieces)at.push({k:"p",it:B,label:B.n});let q=-1,nt=!1;async function dt(B){if(nt||B==q)return;nt=!0,q=B,k(),i.classList.add("busy"),s(".b3-lb").hidden=!0,Lt(),Z();let z=at[B];try{if(z.k=="b")await X();else await et(z.it)}catch(Mt){console.warn("b3d",Mt)}i.classList.remove("busy"),nt=!1,Z(),It(),s(".b3-ld").hidden=!0}function Lt(){let B=s(".b3-tabs");B.hidden=at.length<2,B.innerHTML=at.map((z,Mt)=>`<button class="${Mt==q?"on":""}" data-i="${Mt}">${z.k=="b"?"◯ ":""}${Tl(_0(z.label))}</button>`).join("")}function Z(){let B=s(".b3-act"),z=at[q]&&at[q].k=="b";B.innerHTML=(z?`<button data-a="replay">↻ ${n("replay")}</button><button data-a="clasp" class="b3-cl">${n("open")}</button>`:"")+`<button data-a="save">⤓ ${n("save")}</button>`,ut()}function ut(){let B=i.querySelector(".b3-cl");if(B&&v)B.textContent=v.open>0.5&&!v.playing?n("close"):n("open")}function It(){let B=s(".b3-card"),z=t.fallback;if(!(at[q]&&at[q].k=="b")||!z){B.hidden=!0;return}B.hidden=!1;let pt=t.isOnList(z.id);B.innerHTML=`<div><small>${n("shown")}</small><b>${Tl(z.n)}</b><span>${t.fmt(z.p)}</span></div><button data-a="addc" ${pt?"disabled":""}>${pt?n("added"):n("add")}</button>`}i.addEventListener("click",(B)=>{let z=B.target.closest("button");if(!z)return;if(z.classList.contains("b3-x"))return Kt();if(z.dataset.i!=null)return dt(+z.dataset.i);let Mt=z.dataset.a;if(Mt=="replay"&&v){v.t0=performance.now()/1000,v.playing=!0,v.clicked=!1,f.userSpun=!1;for(let pt of v.pcs)pt.phx=pt.vx=pt.phz=pt.vz=0,pt.prev=null}if(Mt=="clasp"&&v&&!v.playing)v.anim={from:v.open,to:v.open>0.5?0:1,t0:performance.now()/1000},z.textContent=v.open>0.5?n("open"):n("close");if(Mt=="save")At();if(Mt=="addc"&&t.fallback)t.onAdd(t.fallback.id),It()});let Ut=new Map,St=null,E=null,O=o.domElement;O.style.touchAction="none",O.addEventListener("pointerdown",(B)=>{if(O.setPointerCapture(B.pointerId),Ut.set(B.pointerId,{x:B.clientX,y:B.clientY}),v&&v.playing&&performance.now()/1000-v.t0>0.4)v.t0=performance.now()/1000-100;if(f.lastUser=performance.now(),Ut.size==1)St={x:B.clientX,y:B.clientY,t:performance.now(),moved:0};else if(Ut.size==2){let[z,Mt]=[...Ut.values()];E={d:Math.hypot(z.x-Mt.x,z.y-Mt.y),dist:f.tgtDist},St=null}}),O.addEventListener("pointermove",(B)=>{if(!Ut.has(B.pointerId))return;if(Ut.set(B.pointerId,{x:B.clientX,y:B.clientY}),f.lastUser=performance.now(),E&&Ut.size==2){let[Qt,S]=[...Ut.values()],x=Math.hypot(Qt.x-S.x,Qt.y-S.y);f.tgtDist=Ee(E.dist*E.d/Math.max(20,x),ht(),J());return}if(!St)return;let z=B.clientX-St.x,Mt=B.clientY-St.y,pt=performance.now(),bt=Math.max(1,pt-St.t);St.moved+=Math.abs(z)+Math.abs(Mt),f.yaw+=z*0.0085,f.el=Ee(f.el+Mt*0.006,-0.15,1.25),f.vy=z*0.0085/(bt/1000)*0.9,f.userSpun=!0,St.x=B.clientX,St.y=B.clientY,St.t=pt});let H=(B)=>{if(!Ut.has(B.pointerId))return;if(Ut.delete(B.pointerId),St&&St.moved<8)ft(B);if(Ut.size<2)E=null;if(!Ut.size)St=null;if(St&&performance.now()-St.t>80)f.vy=0};O.addEventListener("pointerup",H),O.addEventListener("pointercancel",H),O.addEventListener("wheel",(B)=>{B.preventDefault(),f.tgtDist=Ee(f.tgtDist*Math.exp(B.deltaY*0.0012),ht(),J()),f.lastUser=performance.now()},{passive:!1});let rt=0,ht=()=>v?v.Rr*3.2:60,J=()=>v?v.Rr*12:400,lt=new aa;function ft(B){let z=performance.now();if(z-rt<300)f.tgtDist=v?v.Rr*7.1*(f.fit||1):f.tgtDist,f.el=v?0.5:0.18;rt=z;let Mt=O.getBoundingClientRect();lt.setFromCamera(new mt((B.clientX-Mt.left)/Mt.width*2-1,-(B.clientY-Mt.top)/Mt.height*2+1),d);let pt=lt.intersectObjects(M,!1)[0],bt=s(".b3-lb");if(pt){let Qt=pt.object.userData.item;bt.innerHTML=`<b>${Tl(Qt.n)}</b><span>${t.fmt(Qt.p)}</span>`,bt.hidden=!1,clearTimeout(bt._t),bt._t=setTimeout(()=>bt.hidden=!0,4000);let S=v&&v.pcs.find((x)=>x.mesh==pt.object);if(S)S.vx+=6,S.vz+=4;pt.object.userData.pop=1}else bt.hidden=!0}async function At(){let B=o.getPixelRatio();o.setPixelRatio(Math.min(3,B*1.5)),R(),o.render(l,d);let z=await new Promise((bt)=>o.domElement.toBlob(bt,"image/png"));if(o.setPixelRatio(B),R(),!z)return;let Mt=new File([z],"pandora-360.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[Mt]})){await navigator.share({files:[Mt],title:"Pandora"});return}}catch(bt){if(bt&&bt.name=="AbortError")return}let pt=document.createElement("a");pt.href=URL.createObjectURL(z),pt.download="pandora-360.png",document.body.appendChild(pt),pt.click(),setTimeout(()=>{URL.revokeObjectURL(pt.href),pt.remove()},1500)}let Tt=0,Wt=performance.now(),Ot=new D,jt=new gn,$t=new D;function ue(B){Tt=requestAnimationFrame(ue);let z=Math.min(0.05,(B-Wt)/1000);Wt=B;let Mt=B/1000;if(v&&v.playing)ot((Mt-v.t0)*(t.timeScale||1));else if(v&&v.anim){let S=Zs((Mt-v.anim.t0)/0.8);if(C(v.anim.from+(v.anim.to-v.anim.from)*S),S>=1){if(v.anim.to==0)tt();v.anim=null,ut()}}if(!St){if(f.yaw+=f.vy*z,f.vy*=Math.pow(0.06,z),Math.abs(f.vy)<0.02)f.vy=0}if(B-f.lastUser>3500&&!(v&&(v.playing||v.anim))&&!St)f.yaw+=z*0.32;f.dist+=(f.tgtDist-f.dist)*(1-Math.pow(0.001,z)),m.rotation.y=f.yaw,h.position.y=f.cy+Math.sin(Mt*1.1)*0.9;let bt=0,Qt=0;if(f.shake)f.shake=Math.max(0,f.shake-z*3),bt=(Math.random()-0.5)*f.shake*0.8,Qt=(Math.random()-0.5)*f.shake*0.8;if(d.position.set(bt,Math.sin(f.el)*f.dist+Qt,Math.cos(f.el)*f.dist),d.lookAt(0,f.cy*0.4,0),v)for(let S of v.pcs){if(S.kind!="dangle"||!S.holder.visible)continue;if(S.holder.getWorldPosition($t),S.prev){let xt=$t.clone().sub(S.prev).divideScalar(Math.max(z,0.001)),Y=xt.clone().sub(S.pv).divideScalar(Math.max(z,0.001));S.acc.lerp(Y,0.35),S.pv.copy(xt)}S.prev=$t.clone(),Ot.set(0,-9800,0).addScaledVector(S.acc,-9),S.holder.getWorldQuaternion(jt),Ot.applyQuaternion(jt.invert());let x=70,F=Math.atan2(-Ot.z,-Ot.y),ct=Math.atan2(Ot.x,-Ot.y),j=Math.hypot(Ot.y,Ot.z)/x,gt=Math.hypot(Ot.x,Ot.y)/x;S.vx+=(j*Math.sin(F-S.phx)-2.4*S.vx)*z,S.phx=Ee(S.phx+S.vx*z,-1.6,1.6),S.vz+=(gt*Math.sin(ct-S.phz)-2.4*S.vz)*z,S.phz=Ee(S.phz+S.vz*z,-0.7,0.7),S.swing.rotation.set(S.phx,0,S.phz)}for(let S of A){let x=S.userData;S.getWorldPosition($t);let F=d.position.clone().sub($t).normalize(),ct=Math.pow(Math.max(0,Math.sin(Mt*x.sp+x.ph+m.rotation.y*5+F.y*6)),10);x.boost=Math.max(0,(x.boost||0)-z*1.2),S.material.opacity=Ee(ct*0.95+x.boost,0,1),S.visible=S.parent&&S.parent.parent&&S.parent.parent.visible!==!1}for(let S of M)if(S.userData.pop){S.userData.pop=Math.max(0,S.userData.pop-z*3);let x=1+Math.sin(S.userData.pop*Pe)*0.12;if(S.scale.setScalar((S.userData.sc||1)*x),!S.userData.pop)S.scale.setScalar(S.userData.sc||1)}_.position.x=0,_.position.z=0,o.render(l,d)}Tt=requestAnimationFrame(ue),s(".b3-x").onclick=()=>Kt();let N=(B)=>{if(B.key=="Escape")Kt()};addEventListener("keydown",N);let Te=()=>{if(document.hidden)cancelAnimationFrame(Tt),Tt=0;else if(!Tt&&!r)Wt=performance.now(),Tt=requestAnimationFrame(ue)};document.addEventListener("visibilitychange",Te);function Kt(B){if(r)return;if(r=!0,cancelAnimationFrame(Tt),removeEventListener("resize",g),removeEventListener("keydown",N),removeEventListener("popstate",a),document.removeEventListener("visibilitychange",Te),!B)try{if(history.state&&history.state.b3)history.back()}catch(z){}i.classList.remove("in"),document.documentElement.classList.remove("b3-on"),setTimeout(()=>{k();for(let z of p)try{z.dispose()}catch(Mt){}c.dispose(),o.dispose();try{o.forceContextLoss()}catch(z){}i.remove(),t.onClose&&t.onClose()},260)}if(!at.length){Kt();return}dt(0)}var Tl=(t)=>String(t).replace(/[&<>"]/g,(e)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),_0=(t)=>t.length>34?t.slice(0,32).replace(/\s+\S*$/,"")+"…":t;function x0(){if(document.getElementById("b3css"))return;let t=document.createElement("style");t.id="b3css",t.textContent=`
html.b3-on,html.b3-on body{overflow:hidden}
.b3{position:fixed;inset:0;z-index:9000;display:flex;flex-direction:column;background:radial-gradient(120% 80% at 50% 45%,rgba(255,255,255,.55),rgba(253,243,243,.82) 60%,rgba(253,243,243,.92));-webkit-backdrop-filter:blur(18px) saturate(1.1);backdrop-filter:blur(18px) saturate(1.1);opacity:0;transition:opacity .25s;color:#4a2f35;font-family:inherit;-webkit-user-select:none;user-select:none}
.b3.in{opacity:1}
.b3-st{position:absolute;inset:0}.b3-st canvas{width:100%;height:100%;display:block;outline:none;cursor:grab}.b3-st canvas:active{cursor:grabbing}
.b3-top{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:flex-start;padding:calc(18px + env(safe-area-inset-top,0px)) 18px 0;pointer-events:none}
.b3-tt{display:flex;flex-direction:column;gap:6px}.b3-k{font-size:10px;letter-spacing:.38em;color:#a58f94}.b3-tt b{font:400 24px/1.15 Lora,Georgia,serif}
html[dir=rtl] .b3-tt b{font-family:Cairo,system-ui,sans-serif;font-weight:500}
.b3-x{pointer-events:auto;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.9);border:1px solid #f5dcdf;font-size:26px;line-height:1;color:#4a2f35;box-shadow:0 8px 22px -12px rgba(74,47,53,.5)}
.b3-lb{position:absolute;z-index:3;left:50%;top:calc(84px + env(safe-area-inset-top,0px));transform:translateX(-50%);max-width:min(88vw,460px);background:#4a2f35;color:#fdf3f3;border-radius:16px;padding:10px 16px;text-align:center;font-size:13px;line-height:1.35;box-shadow:0 14px 30px -16px rgba(74,47,53,.7);animation:b3in .25s both}
.b3-lb b{display:block;font-weight:400}.b3-lb span{color:#ff9aa2;font-size:13px}
.b3-ld{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;z-index:1;font-size:13px;letter-spacing:.06em;color:#a58f94;pointer-events:none}
.b3-ld i{width:56px;height:56px;border-radius:50%;border:2px solid #f5dcdf;border-top-color:#ff9aa2;animation:b3r 1s linear infinite}
.b3-ld[hidden]{display:none}
.b3.busy .b3-st{opacity:.25}
@keyframes b3r{to{transform:rotate(360deg)}}@keyframes b3in{from{opacity:0;transform:translate(-50%,6px)}}
.b3-bot{position:absolute;z-index:2;left:0;right:0;bottom:0;padding:0 14px calc(14px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;align-items:center;gap:10px;pointer-events:none}
.b3-bot>*{pointer-events:auto}
.b3-hint{font-size:11.5px;color:#a58f94;letter-spacing:.04em;pointer-events:none;text-align:center}
.b3-tabs{display:flex;gap:6px;overflow-x:auto;max-width:100%;padding:2px;scrollbar-width:none}.b3-tabs::-webkit-scrollbar{display:none}.b3-tabs[hidden]{display:none}
.b3-tabs button{flex:none;font-size:12.5px;padding:8px 14px;border-radius:99px;border:1px solid #f5dcdf;background:rgba(255,255,255,.85);color:#4a2f35;white-space:nowrap}
.b3-tabs button.on{background:#4a2f35;color:#fdf3f3;border-color:#4a2f35}
.b3-act{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.b3-act button{font-size:13px;padding:11px 18px;border-radius:99px;background:rgba(255,255,255,.92);border:1px solid #f5dcdf;color:#4a2f35;box-shadow:0 8px 20px -14px rgba(74,47,53,.55)}
.b3-act .b3-cl{background:#ff9aa2;border-color:#ff9aa2}
.b3-card{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.94);border:1px solid #f5dcdf;border-radius:16px;padding:10px 10px 10px 14px;max-width:min(94vw,520px);width:100%}
.b3-card[hidden]{display:none}
.b3-card div{flex:1;min-width:0;display:flex;flex-direction:column;font-size:12.5px;line-height:1.3}.b3-card small{color:#a58f94;font-size:11px;letter-spacing:.04em}.b3-card b{font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.b3-card button{flex:none;font-size:12.5px;padding:10px 14px;border-radius:99px;background:#4a2f35;color:#fdf3f3}.b3-card button[disabled]{background:#f5dcdf;color:#4a2f35}
.b3-note{font-size:10.5px;color:#a58f94;text-align:center;max-width:420px;pointer-events:none}
@media(min-width:800px){.b3-tt b{font-size:30px}.b3-top{padding:26px 34px 0}.b3-bot{padding-bottom:26px}}
`,document.head.appendChild(t)}export{Yv as open};

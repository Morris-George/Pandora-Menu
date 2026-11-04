var Vl="187";var Xl=0,wa=1,ql=2;var xs=1,Yl=2,Gi=3,Hi=0,He=1,je=2,di=0,vs=1,dr=2,Ta=3,Ea=4,Zl=5;var Wi=100,Jl=101,$l=102,Kl=103,Ql=104,jl=200,tc=201,ec=202,nc=203,ic=204,sc=205,rc=206,ac=207,oc=208,lc=209,cc=210,hc=211,uc=212,dc=213,fc=214,pc=0,mc=1,gc=2,Aa=3,_c=4,xc=5,vc=6,yc=7,Sc=0,Mc=1,bc=2,Sn=0,Ra=1,Ca=2,Ia=3,Pa=4,La=5,Da=6,ys=7;var Ss=301,Vi=302,fr=303,pr=304,mr=1000,gr=1001,wc=1002,qn=1003,Tc=1004;var Ms=1005;var an=1006,_r=1007;var Yn=1008;var pn=1009,Ec=1010,Ac=1011,bs=1012,Na=1013,Zn=1014,Ln=1015,Mn=1016,Ua=1017,Fa=1018,fi=1020,Rc=35902,Cc=35899,Ic=1021,Pc=1022,Dn=1023,Xi=1026,Jn=1027,Lc=1028,Oa=1029,pi=1030,Ba=1031;var za=1033,xr=33776,vr=33777,yr=33778,Sr=33779,ka=35840,Ga=35841,Ha=35842,Wa=35843,Va=36196,Xa=37492,qa=37496,Ya=37488,Za=37489,Mr=37490,Ja=37491,$a=37808,Ka=37809,Qa=37810,ja=37811,to=37812,eo=37813,no=37814,io=37815,so=37816,ro=37817,ao=37818,oo=37819,lo=37820,co=37821,ho=36492,uo=36494,fo=36495,po=36283,mo=36284,br=36285,go=36286;var _o=0,Dc=1,mi="",qi="srgb",xo="srgb-linear",vo="linear",xe="srgb";var Nc=512,Uc=513,Fc=514,yo=515,Oc=516,Bc=517,So=518,Mo=519;var bo="300 es",wo=2000;function Hh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wh(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ps(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zc(){let t=ps("canvas");return t.style.display="block",t}var ul={},zi=null;function To(...t){let e="THREE."+t.shift();if(zi)zi("log",e,...t);else console.log(e,...t)}function kc(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function qt(...t){t=kc(t);let e="THREE."+t.shift();if(zi)zi("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Zt(...t){t=kc(t);let e="THREE."+t.shift();if(zi)zi("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function ci(...t){let e=t.join(" ");if(e in ul)return;ul[e]=!0,qt(...t)}function Gc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Hc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Nn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $r=Math.PI/180,lr=180/Math.PI;function Yi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[t&255]+ke[t>>8&255]+ke[t>>16&255]+ke[t>>24&255]+"-"+ke[e&255]+ke[e>>8&255]+"-"+ke[e>>16&15|64]+ke[e>>24&255]+"-"+ke[n&63|128]+ke[n>>8&255]+"-"+ke[n>>16&255]+ke[n>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function se(t,e,n){return Math.max(e,Math.min(n,t))}function Vh(t,e){return(t%e+e)%e}function Kr(t,e,n){return(1-n)*t+n*e}function Wc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Eo(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xh(t,e){if(e.constructor===Float32Array)return t;let n=Eo(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function qh(t,e){if(e.constructor===Float32Array)return t;let n=Eo(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}class mt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],d=n[i+3],u=s[r+0],h=s[r+1],m=s[r+2],x=s[r+3];if(d!==x||o!==u||l!==h||c!==m){let b=o*u+l*h+c*m+d*x;if(b<0)u=-u,h=-h,m=-m,x=-x,b=-b;let p=1-a;if(b<0.9995){let f=Math.acos(b),T=Math.sin(f);p=Math.sin(p*f)/T,a=Math.sin(a*f)/T,o=o*p+u*a,l=l*p+h*a,c=c*p+m*a,d=d*p+x*a}else{o=o*p+u*a,l=l*p+h*a,c=c*p+m*a,d=d*p+x*a;let f=1/Math.sqrt(o*o+l*l+c*c+d*d);o*=f,l*=f,c*=f,d*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],d=s[r],u=s[r+1],h=s[r+2],m=s[r+3];return t[e]=a*m+c*d+o*h-l*u,t[e+1]=o*m+c*u+l*d-a*h,t[e+2]=l*m+c*h+a*u-o*d,t[e+3]=c*m-a*d-o*u-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),d=a(s/2),u=o(n/2),h=o(i/2),m=o(s/2);switch(r){case"XYZ":this._x=u*c*d+l*h*m,this._y=l*h*d-u*c*m,this._z=l*c*m+u*h*d,this._w=l*c*d-u*h*m;break;case"YXZ":this._x=u*c*d+l*h*m,this._y=l*h*d-u*c*m,this._z=l*c*m-u*h*d,this._w=l*c*d+u*h*m;break;case"ZXY":this._x=u*c*d-l*h*m,this._y=l*h*d+u*c*m,this._z=l*c*m+u*h*d,this._w=l*c*d-u*h*m;break;case"ZYX":this._x=u*c*d-l*h*m,this._y=l*h*d+u*c*m,this._z=l*c*m-u*h*d,this._w=l*c*d+u*h*m;break;case"YZX":this._x=u*c*d+l*h*m,this._y=l*h*d+u*c*m,this._z=l*c*m-u*h*d,this._w=l*c*d-u*h*m;break;case"XZY":this._x=u*c*d-l*h*m,this._y=l*h*d-u*c*m,this._z=l*c*m+u*h*d,this._w=l*c*d+u*h*m;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10],u=n+a+d;if(u>0){let h=0.5/Math.sqrt(u+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),d=2*(s*n-r*e);return this.x=e+o*l+r*d-a*c,this.y=n+o*c+a*l-s*d,this.z=i+o*d+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qr.copy(this).projectOnVector(t),this.sub(Qr)}reflect(t){return this.sub(Qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Qr=new N,dl=new mn;class Qt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],d=n[7],u=n[2],h=n[5],m=n[8],x=i[0],b=i[3],p=i[6],f=i[1],T=i[4],v=i[7],S=i[2],E=i[5],C=i[8];return s[0]=r*x+a*f+o*S,s[3]=r*b+a*T+o*E,s[6]=r*p+a*v+o*C,s[1]=l*x+c*f+d*S,s[4]=l*b+c*T+d*E,s[7]=l*p+c*v+d*C,s[2]=u*x+h*f+m*S,s[5]=u*b+h*T+m*E,s[8]=u*p+h*v+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=c*r-a*l,u=a*o-c*s,h=l*s-r*o,m=e*d+n*u+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(i*l-c*n)*x,t[2]=(a*n-i*r)*x,t[3]=u*x,t[4]=(c*e-i*o)*x,t[5]=(i*s-a*e)*x,t[6]=h*x,t[7]=(n*o-l*e)*x,t[8]=(r*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jr.makeScale(t,e)),this}rotate(t){return ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var jr=new Qt,fl=new Qt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),pl=new Qt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Yh(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:fl,fromXYZ:pl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:fl,fromXYZ:pl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var le=Yh();function Pn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Bi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var wi;class Ao{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(wi===void 0)wi=ps("canvas");wi.width=t.width,wi.height=t.height;let i=wi.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Pn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Pn(e[n]/255)*255);else e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Zh=0;class ws{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width||0,e.height||0,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(ta(i[r].image));else s.push(ta(i[r]))}else s=ta(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function ta(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Ao.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return qt("Texture: Unable to serialize Texture."),{}}var Jh=0,ea=new N;class Fe extends Nn{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Fe.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Yi(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=300;Fe.DEFAULT_ANISOTROPY=1;class we{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],d=o[8],u=o[1],h=o[5],m=o[9],x=o[2],b=o[6],p=o[10];if(Math.abs(c-u)<0.01&&Math.abs(d-x)<0.01&&Math.abs(m-b)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(d+x)<0.1&&Math.abs(m+b)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,v=(h+1)/2,S=(p+1)/2,E=(c+u)/4,C=(d+x)/4,_=(m+b)/4;if(T>v&&T>S)if(T<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(T),i=E/n,s=C/n;else if(v>S)if(v<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(v),n=E/i,s=_/i;else if(S<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(S),n=C/s,i=_/s;return this.set(n,i,s,e),this}let f=Math.sqrt((b-m)*(b-m)+(d-x)*(d-x)+(u-c)*(u-c));if(Math.abs(f)<0.001)f=1;return this.x=(b-m)/f,this.y=(d-x)/f,this.z=(u-c)/f,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ro extends Nn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Fe({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.mipmapsAutoUpdate!==void 0)e.mipmapsAutoUpdate=t.mipmapsAutoUpdate;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Ro{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class wr extends Fe{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Co extends Fe{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class fe{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,d,u,h,m,x,b){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,d,u,h,m,x,b)}set(t,e,n,i,s,r,a,o,l,c,d,u,h,m,x,b){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=d,p[14]=u,p[3]=h,p[7]=m,p[11]=x,p[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),r=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=r*c,h=r*d,m=a*c,x=a*d;e[0]=o*c,e[4]=-o*d,e[8]=l,e[1]=h+m*l,e[5]=u-x*l,e[9]=-a*o,e[2]=x-u*l,e[6]=m+h*l,e[10]=r*o}else if(t.order==="YXZ"){let u=o*c,h=o*d,m=l*c,x=l*d;e[0]=u+x*a,e[4]=m*a-h,e[8]=r*l,e[1]=r*d,e[5]=r*c,e[9]=-a,e[2]=h*a-m,e[6]=x+u*a,e[10]=r*o}else if(t.order==="ZXY"){let u=o*c,h=o*d,m=l*c,x=l*d;e[0]=u-x*a,e[4]=-r*d,e[8]=m+h*a,e[1]=h+m*a,e[5]=r*c,e[9]=x-u*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let u=r*c,h=r*d,m=a*c,x=a*d;e[0]=o*c,e[4]=m*l-h,e[8]=u*l+x,e[1]=o*d,e[5]=x*l+u,e[9]=h*l-m,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let u=r*o,h=r*l,m=a*o,x=a*l;e[0]=o*c,e[4]=x-u*d,e[8]=m*d+h,e[1]=d,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=r*o,h=r*l,m=a*o,x=a*l;e[0]=o*c,e[4]=-d,e[8]=l*c,e[1]=u*d+x,e[5]=r*c,e[9]=h*d-m,e[2]=m*d-h,e[6]=a*c,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,Kh)}lookAt(t,e,n){let i=this.elements;if($e.subVectors(t,e),$e.lengthSq()===0)$e.z=1;if($e.normalize(),Gn.crossVectors(n,$e),Gn.lengthSq()===0){if(Math.abs(n.z)===1)$e.x+=0.0001;else $e.z+=0.0001;$e.normalize(),Gn.crossVectors(n,$e)}return Gn.normalize(),zs.crossVectors($e,Gn),i[0]=Gn.x,i[4]=zs.x,i[8]=$e.x,i[1]=Gn.y,i[5]=zs.y,i[9]=$e.y,i[2]=Gn.z,i[6]=zs.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],d=n[5],u=n[9],h=n[13],m=n[2],x=n[6],b=n[10],p=n[14],f=n[3],T=n[7],v=n[11],S=n[15],E=i[0],C=i[4],_=i[8],w=i[12],D=i[1],q=i[5],U=i[9],V=i[13],st=i[2],A=i[6],j=i[10],tt=i[14],G=i[3],gt=i[7],Z=i[11],Q=i[15];return s[0]=r*E+a*D+o*st+l*G,s[4]=r*C+a*q+o*A+l*gt,s[8]=r*_+a*U+o*j+l*Z,s[12]=r*w+a*V+o*tt+l*Q,s[1]=c*E+d*D+u*st+h*G,s[5]=c*C+d*q+u*A+h*gt,s[9]=c*_+d*U+u*j+h*Z,s[13]=c*w+d*V+u*tt+h*Q,s[2]=m*E+x*D+b*st+p*G,s[6]=m*C+x*q+b*A+p*gt,s[10]=m*_+x*U+b*j+p*Z,s[14]=m*w+x*V+b*tt+p*Q,s[3]=f*E+T*D+v*st+S*G,s[7]=f*C+T*q+v*A+S*gt,s[11]=f*_+T*U+v*j+S*Z,s[15]=f*w+T*V+v*tt+S*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],d=t[6],u=t[10],h=t[14],m=t[3],x=t[7],b=t[11],p=t[15],f=o*h-l*u,T=a*h-l*d,v=a*u-o*d,S=r*h-l*c,E=r*u-o*c,C=r*d-a*c;return e*(x*f-b*T+p*v)-n*(m*f-b*S+p*E)+i*(m*T-x*S+p*C)-s*(m*v-x*E+b*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=t[9],u=t[10],h=t[11],m=t[12],x=t[13],b=t[14],p=t[15],f=e*a-n*r,T=e*o-i*r,v=e*l-s*r,S=n*o-i*a,E=n*l-s*a,C=i*l-s*o,_=c*x-d*m,w=c*b-u*m,D=c*p-h*m,q=d*b-u*x,U=d*p-h*x,V=u*p-h*b,st=f*V-T*U+v*q+S*D-E*w+C*_;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/st;return t[0]=(a*V-o*U+l*q)*A,t[1]=(i*U-n*V-s*q)*A,t[2]=(x*C-b*E+p*S)*A,t[3]=(u*E-d*C-h*S)*A,t[4]=(o*D-r*V-l*w)*A,t[5]=(e*V-i*D+s*w)*A,t[6]=(b*v-m*C-p*T)*A,t[7]=(c*C-u*v+h*T)*A,t[8]=(r*U-a*D+l*_)*A,t[9]=(n*D-e*U-s*_)*A,t[10]=(m*E-x*v+p*f)*A,t[11]=(d*v-c*E-h*f)*A,t[12]=(a*w-r*q-o*_)*A,t[13]=(e*q-n*w+i*_)*A,t[14]=(x*T-m*S-b*f)*A,t[15]=(c*S-d*T+u*f)*A,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,d=a+a,u=s*l,h=s*c,m=s*d,x=r*c,b=r*d,p=a*d,f=o*l,T=o*c,v=o*d,{x:S,y:E,z:C}=n;return i[0]=(1-(x+p))*S,i[1]=(h+v)*S,i[2]=(m-T)*S,i[3]=0,i[4]=(h-v)*E,i[5]=(1-(u+p))*E,i[6]=(b+f)*E,i[7]=0,i[8]=(m+T)*C,i[9]=(b-f)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Ti.set(i[0],i[1],i[2]).length(),a=Ti.set(i[4],i[5],i[6]).length(),o=Ti.set(i[8],i[9],i[10]).length();if(s<0)r=-r;un.copy(this);let l=1/r,c=1/a,d=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),m,x;if(o)m=s/(r-s),x=r*s/(r-s);else if(a===2000)m=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(a===2001)m=-r/(r-s),x=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),h=-(n+i)/(n-i),m,x;if(o)m=1/(r-s),x=r/(r-s);else if(a===2000)m=-2/(r-s),x=-(r+s)/(r-s);else if(a===2001)m=-1/(r-s),x=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Ti=new N,un=new fe,$h=new N(0,0,0),Kh=new N(1,1,1),Gn=new N,zs=new N,$e=new N,ml=new fe,gl=new mn;class yn{constructor(t=0,e=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],d=i[2],u=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(se(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-se(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-d,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(se(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<0.9999999)this._x=Math.atan2(u,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(se(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-se(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Ts{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Qh=0,_l=new N,Ei=new mn,En=new fe,ks=new N,rs=new N,jh=new N,tu=new mn,xl=new N(1,0,0),vl=new N(0,1,0),yl=new N(0,0,1),Sl={type:"added"},eu={type:"removed"},Ai={type:"childadded",child:null},na={type:"childremoved",child:null};class Te extends Nn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();let t=new N,e=new yn,n=new mn,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)ks.copy(t);else ks.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)En.lookAt(rs,ks,this.up);else En.lookAt(ks,rs,this.up);if(this.quaternion.setFromRotationMatrix(En),i)En.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(En),this.quaternion.premultiply(Ei.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Zt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null;else Zt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(eu),na.child=t,this.dispatchEvent(na),na.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld);return t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let d=o[l];s(t.shapes,d)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),d=r(t.shapes),u=r(t.skeletons),h=r(t.animations),m=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(d.length>0)n.shapes=d;if(u.length>0)n.skeletons=u;if(h.length>0)n.animations=h;if(m.length>0)n.nodes=m}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Te.DEFAULT_UP=new N(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qe extends Te{constructor(){super();this.isGroup=!0,this.type="Group"}}var nu={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let x of t.hand.values()){let b=e.getJointPose(x,n),p=this._getHandJoint(l,x);if(b!==null)p.matrix.fromArray(b.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=b.radius;p.visible=b!==null}let c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=c.position.distanceTo(d.position),h=0.02,m=0.005;if(l.inputState.pinching&&u>h+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&u<=h-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(nu)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function ia(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Vh(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ia(r,s,t+0.3333333333333333),this.g=ia(r,s,t),this.b=ia(r,s,t-0.3333333333333333)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Vc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else qt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return le.workingToColorSpace(Ge.copy(this),t),Math.round(se(Ge.r*255,0,255))*65536+Math.round(se(Ge.g*255,0,255))*256+Math.round(se(Ge.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Ge.copy(this),e);let{r:n,g:i,b:s}=Ge,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let d=r-a;switch(l=c<=0.5?d/(r+a):d/(2-r-a),r){case n:o=(i-s)/d+(i<s?6:0);break;case i:o=(s-n)/d+2;break;case s:o=(n-i)/d+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t="srgb"){le.workingToColorSpace(Ge.copy(this),t);let{r:e,g:n,b:i}=Ge;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Gs);let n=Kr(Hn.h,Gs.h,e),i=Kr(Hn.s,Gs.s,e),s=Kr(Hn.l,Gs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ge=new Kt;Kt.NAMES=Vc;class Zi extends Te{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var dn=new N,An=new N,sa=new N,Rn=new N,Ri=new N,Ci=new N,Ml=new N,ra=new N,aa=new N,oa=new N,la=new we,ca=new we,ha=new we;class rn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),An.subVectors(n,e),sa.subVectors(t,e);let r=dn.dot(dn),a=dn.dot(An),o=dn.dot(sa),l=An.dot(An),c=An.dot(sa),d=r*l-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,h=(l*o-a*c)*u,m=(r*c-a*o)*u;return s.set(1-h-m,m,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Rn)===null)return!1;return Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Rn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Rn.x),o.addScaledVector(r,Rn.y),o.addScaledVector(a,Rn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(la,s.x),r.addScaledVector(ca,s.y),r.addScaledVector(ha,s.z),r}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),An.subVectors(t,e),dn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),dn.cross(An).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Ri.subVectors(i,n),Ci.subVectors(s,n),ra.subVectors(t,n);let o=Ri.dot(ra),l=Ci.dot(ra);if(o<=0&&l<=0)return e.copy(n);aa.subVectors(t,i);let c=Ri.dot(aa),d=Ci.dot(aa);if(c>=0&&d<=c)return e.copy(i);let u=o*d-c*l;if(u<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),e.copy(n).addScaledVector(Ri,r);oa.subVectors(t,s);let h=Ri.dot(oa),m=Ci.dot(oa);if(m>=0&&h<=m)return e.copy(s);let x=h*l-o*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ci,a);let b=c*m-h*d;if(b<=0&&d-c>=0&&h-m>=0)return Ml.subVectors(s,i),a=(d-c)/(d-c+(h-m)),e.copy(i).addScaledVector(Ml,a);let p=1/(b+x+u);return r=x*p,a=u*p,e.copy(n).addScaledVector(Ri,r).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Un{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,fn);else fn.fromBufferAttribute(s,r);fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Hs.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Hs.copy(n.boundingBox)}Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Ws.subVectors(this.max,as),Ii.subVectors(t.a,as),Pi.subVectors(t.b,as),Li.subVectors(t.c,as),Wn.subVectors(Pi,Ii),Vn.subVectors(Li,Pi),si.subVectors(Ii,Li);let e=[0,-Wn.z,Wn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Wn.z,0,-Wn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Wn.y,Wn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];if(!ua(e,Ii,Pi,Li,Ws))return!1;if(e=[1,0,0,0,1,0,0,0,1],!ua(e,Ii,Pi,Li,Ws))return!1;return Vs.crossVectors(Wn,Vn),e=[Vs.x,Vs.y,Vs.z],ua(e,Ii,Pi,Li,Ws)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(fn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Cn=[new N,new N,new N,new N,new N,new N,new N,new N],fn=new N,Hs=new Un,Ii=new N,Pi=new N,Li=new N,Wn=new N,Vn=new N,si=new N,as=new N,Ws=new N,Vs=new N,ri=new N;function ua(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){ri.fromArray(t,r);let o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=e.dot(ri),c=n.dot(ri),d=i.dot(ri);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Ce=new N,Xs=new mt,iu=0;class vn extends Nn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?Eo(t):void 0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=this._denormalize(e);return e}setX(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=this._denormalize(e);return e}setY(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=this._denormalize(e);return e}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=this._denormalize(e);return e}setW(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):qh(t,this.array)}}class Tr extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Er extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}var su=new Un,os=new N,da=new N;class gi{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else su.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);let e=os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(os,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(da)),this.expandByPoint(os.copy(t.center).sub(da));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var ru=0,sn=new fe,fa=new Te,Di=new N,Ke=new Un,ls=new Un,Ne=new N;class Ze extends Nn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Hh(t))?Er:Tr)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Un;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Ke.setFromBufferAttribute(s),this.morphTargetsRelative)Ne.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ne);else this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new gi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(ls.setFromBufferAttribute(a),this.morphTargetsRelative)Ne.addVectors(Ke.min,ls.min),Ke.expandByPoint(Ne),Ne.addVectors(Ke.max,ls.max),Ke.expandByPoint(Ne);else Ke.expandByPoint(ls.min),Ke.expandByPoint(ls.max)}Ke.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ne.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ne.fromBufferAttribute(a,l),o)Di.fromBufferAttribute(t,l),Ne.add(Di);i=Math.max(i,n.distanceToSquared(Ne))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let w=0;w<n.count;w++)a[w]=new N,o[w]=new N;let c=new N,d=new N,u=new N,h=new mt,m=new mt,x=new mt,b=new N,p=new N;function f(w,D,q){l[w]=l[D]=l[q]=1,c.fromBufferAttribute(n,w),d.fromBufferAttribute(n,D),u.fromBufferAttribute(n,q),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,D),x.fromBufferAttribute(s,q),d.sub(c),u.sub(c),m.sub(h),x.sub(h);let U=1/(m.x*x.y-x.x*m.y);if(!isFinite(U))return;b.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(U),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(U),a[w].add(b),a[D].add(b),a[q].add(b),o[w].add(p),o[D].add(p),o[q].add(p)}let T=this.groups;if(T.length===0)T=[{start:0,count:t.count}];for(let w=0,D=T.length;w<D;++w){let q=T[w],{start:U,count:V}=q;for(let st=U,A=U+V;st<A;st+=3)f(t.getX(st+0),t.getX(st+1),t.getX(st+2))}let v=new N,S=new N,E=new N,C=new N;function _(w){E.fromBufferAttribute(i,w),C.copy(E);let D=a[w];v.copy(D),v.sub(E.multiplyScalar(E.dot(D))).normalize(),S.crossVectors(C,D);let U=S.dot(o[w])<0?-1:1;r.setXYZW(w,v.x,v.y,v.z,U)}for(let w=0,D=n.count;w<D;++w)if(l[w])_(w);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);let i=new N,s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,d=new N;if(t)for(let u=0,h=t.count;u<h;u+=3){let m=t.getX(u+0),x=t.getX(u+1),b=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,b),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),a.add(c),o.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z)}else for(let u=0,h=e.count;u<h;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:d}=a,u=new l.constructor(o.length*c),h=0,m=0;for(let x=0,b=o.length;x<b;x++){if(a.isInterleavedBufferAttribute)h=o[x]*a.data.stride+a.offset;else h=o[x]*c;for(let p=0;p<c;p++)u[m++]=l[h++]}return new vn(u,c,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Ze,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,d=l.length;c<d;c++){let u=l[c],h=t(u,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let d=0,u=l.length;d<u;d++){let h=l[d];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],d=s[l];for(let u=0,h=d.length;u<h;u++)c.push(d[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var pa=new N,au=new N,ou=new Qt;class xn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=pa.subVectors(n,e).cross(au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(pa),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ou.getNormalMatrix(t),i=this.coplanarPoint(pa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var lu=0;class $n extends Nn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Kt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.diffuseRoughness!==void 0)this.diffuseRoughness=t.diffuseRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum;if(t.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1];if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new xn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new mt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale);if(t.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null;if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var In=new N,ma=new N,qs=new N,Ys=new N;class Ar{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){ma.copy(t).add(e).multiplyScalar(0.5),qs.copy(e).sub(t).normalize(),Ys.copy(this.origin).sub(ma);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(qs),a=Ys.dot(this.direction),o=-Ys.dot(qs),l=Ys.lengthSq(),c=Math.abs(1-r*r),d,u,h,m;if(c>0)if(d=r*o-a,u=r*a-o,m=s*c,d>=0)if(u>=-m)if(u<=m){let x=1/c;d*=x,u*=x,h=d*(d+r*u+2*a)+u*(r*d+u+2*o)+l}else u=s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*o)+l;else u=-s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*o)+l;else if(u<=-m)d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-o),s),h=-d*d+u*(u+2*o)+l;else if(u<=m)d=0,u=Math.min(Math.max(-s,-o),s),h=u*(u+2*o)+l;else d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-o),s),h=-d*d+u*(u+2*o)+l;else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),h=-d*d+u*(u+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,d);if(i)i.copy(ma).addScaledVector(qs,u);return h}intersectSphere(t,e){if(t.radius<0)return null;In.subVectors(t.center,this.origin);let n=In.dot(this.direction),i=In.dot(In)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;if(l>=0)n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l;else n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l;if(c>=0)s=(t.min.y-u.y)*c,r=(t.max.y-u.y)*c;else s=(t.max.y-u.y)*c,r=(t.min.y-u.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(d>=0)a=(t.min.z-u.z)*d,o=(t.max.z-u.z)*d;else a=(t.max.z-u.z)*d,o=(t.min.z-u.z)*d;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,d=t.x-r.x,u=t.y-r.y,h=t.z-r.z,m=e.x-r.x,x=e.y-r.y,b=e.z-r.z,p=n.x-r.x,f=n.y-r.y,T=n.z-r.z,v=Math.abs(o),S=Math.abs(l),E=Math.abs(c),C,_,w,D,q,U,V,st,A,j,tt,G;if(v>=S&&v>=E)if(w=o,U=d,A=m,G=p,o>=0)C=l,_=c,D=u,q=h,V=x,st=b,j=f,tt=T;else C=c,_=l,D=h,q=u,V=b,st=x,j=T,tt=f;else if(S>=E)if(w=l,U=u,A=x,G=f,l>=0)C=c,_=o,D=h,q=d,V=b,st=m,j=T,tt=p;else C=o,_=c,D=d,q=h,V=m,st=b,j=p,tt=T;else if(w=c,U=h,A=b,G=T,c>=0)C=o,_=l,D=d,q=u,V=m,st=x,j=p,tt=f;else C=l,_=o,D=u,q=d,V=x,st=m,j=f,tt=p;if(w===0)return null;let gt=C/w,Z=_/w,Q=1/w,rt=D-gt*U,bt=q-Z*U,it=V-gt*A,ft=st-Z*A,vt=j-gt*G,zt=tt-Z*G,Dt=vt*ft-zt*it,At=rt*zt-bt*vt,Xt=it*bt-ft*rt;if(i){if(Dt<0||At<0||Xt<0)return null}else if((Dt<0||At<0||Xt<0)&&(Dt>0||At>0||Xt>0))return null;let B=Dt+At+Xt;if(B===0)return null;let at=Q*(Dt*U+At*A+Xt*G);if(B>0?at<0:at>0)return null;return this.at(at/B,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ji extends $n{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var bl=new fe,ai=new Ar,Zs=new gi,wl=new N,Js=new N,$s=new N,Ks=new N,ga=new N,Qs=new N,Tl=new N,js=new N;class ce extends Te{constructor(t=new Ze,e=new Ji){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],d=s[o];if(c===0)continue;if(ga.fromBufferAttribute(d,t),r)Qs.addScaledVector(ga,c);else Qs.addScaledVector(ga.sub(e),c)}e.add(Qs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),ai.copy(t.ray).recast(t.near),Zs.containsPoint(ai.origin)===!1){if(ai.intersectSphere(Zs,wl)===null)return;if(ai.origin.distanceToSquared(wl)>(t.far-t.near)**2)return}if(bl.copy(s).invert(),ai.copy(t.ray).applyMatrix4(bl),n.boundingBox!==null){if(ai.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,ai)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,{groups:u,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let m=0,x=u.length;m<x;m++){let b=u[m],p=r[b.materialIndex],f=Math.max(b.start,h.start),T=Math.min(a.count,Math.min(b.start+b.count,h.start+h.count));for(let v=f,S=T;v<S;v+=3){let E=a.getX(v),C=a.getX(v+1),_=a.getX(v+2);if(i=tr(this,p,t,n,l,c,d,E,C,_),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let b=m,p=x;b<p;b+=3){let f=a.getX(b),T=a.getX(b+1),v=a.getX(b+2);if(i=tr(this,r,t,n,l,c,d,f,T,v),i)i.faceIndex=Math.floor(b/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,x=u.length;m<x;m++){let b=u[m],p=r[b.materialIndex],f=Math.max(b.start,h.start),T=Math.min(o.count,Math.min(b.start+b.count,h.start+h.count));for(let v=f,S=T;v<S;v+=3){let E=v,C=v+1,_=v+2;if(i=tr(this,p,t,n,l,c,d,E,C,_),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let b=m,p=x;b<p;b+=3){let f=b,T=b+1,v=b+2;if(i=tr(this,r,t,n,l,c,d,f,T,v),i)i.faceIndex=Math.floor(b/3),e.push(i)}}}}function cu(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;js.copy(o),js.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(js);if(c<n.near||c>n.far)return null;return{distance:c,point:js.clone(),object:t}}function tr(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Js),t.getVertexPosition(l,$s),t.getVertexPosition(c,Ks);let d=cu(t,e,n,i,Js,$s,Ks,Tl);if(d){let u=new N;if(rn.getBarycoord(Tl,Js,$s,Ks,u),s)d.uv=rn.getInterpolatedAttribute(s,o,l,c,u,new mt);if(r)d.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new mt);if(a){if(d.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new N),d.normal.dot(i.direction)>0)d.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new N,materialIndex:0};rn.getNormal(Js,$s,Ks,h.normal),d.face=h,d.barycoord=u}return d}class Rr extends Fe{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,d,u){super(null,r,a,o,l,c,i,s,d,u);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr extends vn{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var Ni=new fe,El=new fe,er=[],Al=new Un,hu=new fe,cs=new ce,hs=new gi;class Cr extends ce{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hu)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Un;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),Al.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Al)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new gi;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),hs.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,Ni),El.multiplyMatrices(n,Ni),cs.matrixWorld=El,cs.raycast(t,er);for(let r=0,a=er.length;r<a;r++){let o=er[r];o.instanceId=s,o.object=this,e.push(o)}er.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new Rr(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var oi=new gi,uu=new mt(0.5,0.5),nr=new N;class hi{constructor(t=new xn,e=new xn,n=new xn,i=new xn,s=new xn,r=new xn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],m=s[8],x=s[9],b=s[10],p=s[11],f=s[12],T=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-r,h-c,p-m,S-f).normalize(),i[1].setComponents(l+r,h+c,p+m,S+f).normalize(),i[2].setComponents(l+a,h+d,p+x,S+T).normalize(),i[3].setComponents(l-a,h-d,p-x,S-T).normalize(),n)i[4].setComponents(o,u,b,v).normalize(),i[5].setComponents(l-o,h-u,p-b,S-v).normalize();else if(i[4].setComponents(l-o,h-u,p-b,S-v).normalize(),e===2000)i[5].setComponents(l+o,h+u,p+b,S+v).normalize();else if(e===2001)i[5].setComponents(o,u,b,v).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){oi.center.set(0,0,0);let e=uu.distanceTo(t.center);return oi.radius=0.7071067811865476+e,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(nr.x=i.normal.x>0?t.max.x:t.min.x,nr.y=i.normal.y>0?t.max.y:t.min.y,nr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Rl=new fe;class Ir{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];if(Rl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new hi;n[i].setFromProjectionMatrix(Rl,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++){if(e[i]===void 0)e[i]=new hi;e[i].copy(n[i])}return this._count=t._count,this}clone(){return new Ir().copy(this)}}class Pr extends Fe{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _i extends Fe{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kn extends Fe{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,d=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Lr extends Kn{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dr extends Fe{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qn extends Ze{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],d=[],u=0,h=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(d,2));function m(x,b,p,f,T,v,S,E,C,_,w){let D=v/C,q=S/_,U=v/2,V=S/2,st=E/2,A=C+1,j=_+1,tt=0,G=0,gt=new N;for(let Z=0;Z<j;Z++){let Q=Z*q-V;for(let rt=0;rt<A;rt++){let bt=rt*D-U;gt[x]=bt*f,gt[b]=Q*T,gt[p]=st,l.push(gt.x,gt.y,gt.z),gt[x]=0,gt[b]=0,gt[p]=E>0?1:-1,c.push(gt.x,gt.y,gt.z),d.push(rt/C),d.push(1-Z/_),tt+=1}}for(let Z=0;Z<_;Z++)for(let Q=0;Q<C;Q++){let rt=u+Q+A*Z,bt=u+Q+A*(Z+1),it=u+(Q+1)+A*(Z+1),ft=u+(Q+1)+A*Z;o.push(rt,bt,ft),o.push(bt,it,ft),G+=6}a.addGroup(h,G,w),h+=G,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Je{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],u=n[i+1]-c,h=(r-c)/u;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new mt:new N);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,i=[],s=[],r=[],a=new N,o=new fe;for(let h=0;h<=t;h++){let m=h/t;i[h]=this.getTangentAt(m,new N)}s[0]=new N,r[0]=new N;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(d<=l)l=d,n.set(0,1,0);if(u<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(se(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,m))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(se(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let m=1;m<=t;m++)s[m].applyMatrix4(o.makeRotationAxis(i[m],h*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class As extends Je{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new mt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=o-this.aX,h=l-this.aY;o=u*c-h*d+this.aX,l=u*d+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Io extends As{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Po(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let h=(a-r)/c-(o-r)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+u)+(l-o)/u;h*=d,m*=d,s(a,o,h,m)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Cl=new N,Il=new N,_a=new Po,xa=new Po,va=new Po;class Lo extends Je{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else Il.subVectors(i[0],i[1]).add(i[0]),l=Il;let d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Cl.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Cl;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(u),h),b=Math.pow(u.distanceToSquared(c),h);if(x<0.0001)x=1;if(m<0.0001)m=x;if(b<0.0001)b=x;_a.initNonuniformCatmullRom(l.x,d.x,u.x,c.x,m,x,b),xa.initNonuniformCatmullRom(l.y,d.y,u.y,c.y,m,x,b),va.initNonuniformCatmullRom(l.z,d.z,u.z,c.z,m,x,b)}else if(this.curveType==="catmullrom")_a.initCatmullRom(l.x,d.x,u.x,c.x,this.tension),xa.initCatmullRom(l.y,d.y,u.y,c.y,this.tension),va.initCatmullRom(l.z,d.z,u.z,c.z,this.tension);return n.set(_a.calc(o),xa.calc(o),va.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pl(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function du(t,e){let n=1-t;return n*n*e}function fu(t,e){return 2*(1-t)*t*e}function pu(t,e){return t*t*e}function ds(t,e,n,i){return du(t,e)+fu(t,n)+pu(t,i)}function mu(t,e){let n=1-t;return n*n*n*e}function gu(t,e){let n=1-t;return 3*n*n*t*e}function _u(t,e){return 3*(1-t)*t*t*e}function xu(t,e){return t*t*t*e}function fs(t,e,n,i,s){return mu(t,e)+gu(t,n)+_u(t,i)+xu(t,s)}class Nr extends Je{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(fs(t,i.x,s.x,r.x,a.x),fs(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Do extends Je{constructor(t=new N,e=new N,n=new N,i=new N){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(fs(t,i.x,s.x,r.x,a.x),fs(t,i.y,s.y,r.y,a.y),fs(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ur extends Je{constructor(t=new mt,e=new mt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class No extends Je{constructor(t=new N,e=new N){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fr extends Je{constructor(t=new mt,e=new mt,n=new mt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ds(t,i.x,s.x,r.x),ds(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Or extends Je{constructor(t=new N,e=new N,n=new N){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ds(t,i.x,s.x,r.x),ds(t,i.y,s.y,r.y),ds(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Br extends Je{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(Pl(a,o.x,l.x,c.x,d.x),Pl(a,o.y,l.y,c.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var hr=Object.freeze({__proto__:null,ArcCurve:Io,CatmullRomCurve3:Lo,CubicBezierCurve:Nr,CubicBezierCurve3:Do,EllipseCurve:As,LineCurve:Ur,LineCurve3:No,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:Or,SplineCurve:Br});class Uo extends Je{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new hr[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class ur extends Uo{constructor(t){super();if(this.type="Path",this.currentPoint=new mt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ur(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Fr(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Nr(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new As(t,e,n,i,s,r,a,o);if(this.curves.length>0){let d=l.getPoint(0);if(!d.equals(this.currentPoint))this.lineTo(d.x,d.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Rs extends ur{constructor(t){super(t);this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ur().fromJSON(i))}return this}}function vu(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=Xc(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=wu(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let d=o,u=l;for(let h=n;h<s;h+=n){let m=t[h],x=t[h+1];if(m<o)o=m;if(x<l)l=x;if(m>d)d=m;if(x>u)u=x}c=Math.max(d-o,u-l),c=c!==0?32767/c:0}return ms(r,a,n,o,l,c,0),a}function Xc(t,e,n,i,s){let r;if(s===Uu(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Ll(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Ll(a/i|0,t[a],t[a+1],r);if(r&&ki(r,r.next))_s(r),r=r.next;return r}function ui(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(ki(n,n.next)||be(n.prev,n,n.next)===0)){if(_s(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ms(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)Cu(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?Su(t,i,s,r):yu(t)){e.push(l.i,t.i,c.i),_s(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)ms(ui(t),e,n,i,s,r,1);else if(a===1)t=Mu(ui(t),e),ms(t,e,n,i,s,r,2);else if(a===2)bu(t,e,n,i,s,r);break}}}function yu(t){let e=t.prev,n=t,i=t.next;if(be(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,d=Math.min(s,r,a),u=Math.min(o,l,c),h=Math.max(s,r,a),m=Math.max(o,l,c),x=i.next;while(x!==e){if(x.x>=d&&x.x<=h&&x.y>=u&&x.y<=m&&us(s,o,r,l,a,c,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Su(t,e,n,i){let s=t.prev,r=t,a=t.next;if(be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,u=r.y,h=a.y,m=Math.min(o,l,c),x=Math.min(d,u,h),b=Math.max(o,l,c),p=Math.max(d,u,h),f=Sa(m,x,e,n,i),T=Sa(b,p,e,n,i),{prevZ:v,nextZ:S}=t;while(v&&v.z>=f&&S&&S.z<=T){if(v.x>=m&&v.x<=b&&v.y>=x&&v.y<=p&&v!==s&&v!==a&&us(o,d,l,u,c,h,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,S.x>=m&&S.x<=b&&S.y>=x&&S.y<=p&&S!==s&&S!==a&&us(o,d,l,u,c,h,S.x,S.y)&&be(S.prev,S,S.next)>=0)return!1;S=S.nextZ}while(v&&v.z>=f){if(v.x>=m&&v.x<=b&&v.y>=x&&v.y<=p&&v!==s&&v!==a&&us(o,d,l,u,c,h,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}while(S&&S.z<=T){if(S.x>=m&&S.x<=b&&S.y>=x&&S.y<=p&&S!==s&&S!==a&&us(o,d,l,u,c,h,S.x,S.y)&&be(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Mu(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!ki(i,s)&&Yc(i,n,n.next,s)&&gs(i,s)&&gs(s,i))e.push(i.i,n.i,s.i),_s(n),_s(n.next),n=t=s;n=n.next}while(n!==t);return ui(n)}function bu(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&Lu(a,o)){let l=Zc(a,o);a=ui(a,a.next),l=ui(l,l.next),ms(a,e,n,i,s,r,0),ms(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function wu(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=Xc(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(Pu(c))}s.sort(Tu);for(let r=0;r<s.length;r++)n=Eu(s[r],n);return n}function Tu(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function Eu(t,e){let n=Au(t,e);if(!n)return e;let i=Zc(n,t);return ui(i,i.next),ui(n,n.next)}function Au(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(ki(t,n))return n;do{if(ki(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let u=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=i&&u>r){if(r=u,a=n.x<n.next.x?n:n.next,u===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&qc(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let u=Math.abs(s-n.y)/(i-n.x);if(gs(n,t)&&(u<d||u===d&&(n.x>a.x||n.x===a.x&&Ru(a,n))))a=n,d=u}n=n.next}while(n!==o);return a}function Ru(t,e){return be(t.prev,t,e.prev)<0&&be(e.next,t,t.next)<0}function Cu(t,e,n,i){let s=t;do{if(s.z===0)s.z=Sa(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Iu(s)}function Iu(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function Sa(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Pu(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function qc(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function us(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&qc(t,e,n,i,s,r,a,o)}function Lu(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Du(t,e)&&(gs(t,e)&&gs(e,t)&&Nu(t,e)&&(be(t.prev,t,e.prev)||be(t,e.prev,e))||ki(t,e)&&be(t.prev,t,t.next)>0&&be(e.prev,e,e.next)>0)}function be(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ki(t,e){return t.x===e.x&&t.y===e.y}function Yc(t,e,n,i){let s=sr(be(t,e,n)),r=sr(be(t,e,i)),a=sr(be(n,i,t)),o=sr(be(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&ir(t,n,e))return!0;if(r===0&&ir(t,i,e))return!0;if(a===0&&ir(n,t,i))return!0;if(o===0&&ir(n,e,i))return!0;return!1}function ir(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function sr(t){return t>0?1:t<0?-1:0}function Du(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Yc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function gs(t,e){return be(t.prev,t,t.next)<0?be(t,e,t.next)>=0&&be(t,t.prev,e)>=0:be(t,e,t.prev)<0||be(t,t.next,e)<0}function Nu(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function Zc(t,e){let n=Ma(t.i,t.x,t.y),i=Ma(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Ll(t,e,n,i){let s=Ma(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function _s(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function Ma(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Uu(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class Jc{static triangulate(t,e,n=2){return vu(t,e,n)}}class li{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return li.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Dl(t),Nl(n,t);let r=t.length;e.forEach(Dl);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,Nl(n,e[o]);let a=Jc.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function Dl(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function Nl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Cs extends Ze{constructor(t=new Rs([new mt(0.5,0.5),new mt(-0.5,0.5),new mt(-0.5,-0.5),new mt(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new ye(i,3)),this.setAttribute("uv",new ye(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:0.2,m=e.bevelSize!==void 0?e.bevelSize:h-0.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,b=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,f=e.UVGenerator!==void 0?e.UVGenerator:Fu,T,v=!1,S,E,C,_;if(p){T=p.getSpacedPoints(c),v=!0,u=!1;let et=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(c,et),E=new N,C=new N,_=new N}if(!u)b=0,h=0,m=0,x=0;let w=a.extractPoints(l),{shape:D,holes:q}=w;if(!li.isClockWise(D)){D=D.reverse();for(let et=0,lt=q.length;et<lt;et++){let pt=q[et];if(li.isClockWise(pt))q[et]=pt.reverse()}}function V(et){let St=et[0];for(let yt=1;yt<=et.length;yt++){let Nt=yt%et.length,Ut=et[Nt],Yt=Ut.x-St.x,Jt=Ut.y-St.y,ne=Yt*Yt+Jt*Jt,I=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(St.x),Math.abs(St.y)),ge=0.000000000000000000010000000000000001*I*I;if(ne<=ge){et.splice(Nt,1),yt--;continue}St=Ut}}V(D),q.forEach(V);let st=q.length,A=D;for(let et=0;et<st;et++){let lt=q[et];D=D.concat(lt)}function j(et,lt,pt){if(!lt)Zt("ExtrudeGeometry: vec does not exist");return et.clone().addScaledVector(lt,pt)}let tt=D.length;function G(et,lt,pt){let St,yt,Nt,Ut=et.x-lt.x,Yt=et.y-lt.y,Jt=pt.x-et.x,ne=pt.y-et.y,I=Ut*Ut+Yt*Yt,ge=Ut*ne-Yt*Jt;if(Math.abs(ge)>Number.EPSILON){let $t=Math.sqrt(I),Se=Math.sqrt(Jt*Jt+ne*ne),wt=lt.x-Yt/$t,re=lt.y+Ut/$t,L=pt.x-ne/Se,J=pt.y+Jt/Se,Pt=((L-wt)*ne-(J-re)*Jt)/(Ut*ne-Yt*Jt);St=wt+Ut*Pt-et.x,yt=re+Yt*Pt-et.y;let M=St*St+yt*yt;if(M<=2)return new mt(St,yt);else Nt=Math.sqrt(M/2)}else{let $t=!1;if(Ut>Number.EPSILON){if(Jt>Number.EPSILON)$t=!0}else if(Ut<-Number.EPSILON){if(Jt<-Number.EPSILON)$t=!0}else if(Math.sign(Yt)===Math.sign(ne))$t=!0;if($t)St=-Yt,yt=Ut,Nt=Math.sqrt(I);else St=Ut,yt=Yt,Nt=Math.sqrt(I/2)}return new mt(St/Nt,yt/Nt)}let gt=[];for(let et=0,lt=A.length,pt=lt-1,St=et+1;et<lt;et++,pt++,St++){if(pt===lt)pt=0;if(St===lt)St=0;gt[et]=G(A[et],A[pt],A[St])}let Z=[],Q,rt=gt.concat();for(let et=0,lt=st;et<lt;et++){let pt=q[et];Q=[];for(let St=0,yt=pt.length,Nt=yt-1,Ut=St+1;St<yt;St++,Nt++,Ut++){if(Nt===yt)Nt=0;if(Ut===yt)Ut=0;Q[St]=G(pt[St],pt[Nt],pt[Ut])}Z.push(Q),rt=rt.concat(Q)}let bt;if(b===0)bt=li.triangulateShape(A,q);else{let et=[],lt=[];for(let pt=0;pt<b;pt++){let St=pt/b,yt=h*Math.cos(St*Math.PI/2),Nt=m*Math.sin(St*Math.PI/2)+x;for(let Ut=0,Yt=A.length;Ut<Yt;Ut++){let Jt=j(A[Ut],gt[Ut],Nt);if(At(Jt.x,Jt.y,-yt),St===0)et.push(Jt)}for(let Ut=0,Yt=st;Ut<Yt;Ut++){let Jt=q[Ut];Q=Z[Ut];let ne=[];for(let I=0,ge=Jt.length;I<ge;I++){let $t=j(Jt[I],Q[I],Nt);if(At($t.x,$t.y,-yt),St===0)ne.push($t)}if(St===0)lt.push(ne)}}bt=li.triangulateShape(et,lt)}let it=bt.length,ft=m+x;for(let et=0;et<tt;et++){let lt=u?j(D[et],rt[et],ft):D[et];if(!v)At(lt.x,lt.y,0);else C.copy(S.normals[0]).multiplyScalar(lt.x),E.copy(S.binormals[0]).multiplyScalar(lt.y),_.copy(T[0]).add(C).add(E),At(_.x,_.y,_.z)}for(let et=1;et<=c;et++)for(let lt=0;lt<tt;lt++){let pt=u?j(D[lt],rt[lt],ft):D[lt];if(!v)At(pt.x,pt.y,d/c*et);else C.copy(S.normals[et]).multiplyScalar(pt.x),E.copy(S.binormals[et]).multiplyScalar(pt.y),_.copy(T[et]).add(C).add(E),At(_.x,_.y,_.z)}for(let et=b-1;et>=0;et--){let lt=et/b,pt=h*Math.cos(lt*Math.PI/2),St=m*Math.sin(lt*Math.PI/2)+x;for(let yt=0,Nt=A.length;yt<Nt;yt++){let Ut=j(A[yt],gt[yt],St);At(Ut.x,Ut.y,d+pt)}for(let yt=0,Nt=q.length;yt<Nt;yt++){let Ut=q[yt];Q=Z[yt];for(let Yt=0,Jt=Ut.length;Yt<Jt;Yt++){let ne=j(Ut[Yt],Q[Yt],St);if(!v)At(ne.x,ne.y,d+pt);else At(ne.x,ne.y+T[c-1].y,T[c-1].x+pt)}}}vt(),zt();function vt(){let et=i.length/3;if(u){let lt=0,pt=tt*lt;for(let St=0;St<it;St++){let yt=bt[St];Xt(yt[2]+pt,yt[1]+pt,yt[0]+pt)}lt=c+b*2,pt=tt*lt;for(let St=0;St<it;St++){let yt=bt[St];Xt(yt[0]+pt,yt[1]+pt,yt[2]+pt)}}else{for(let lt=0;lt<it;lt++){let pt=bt[lt];Xt(pt[2],pt[1],pt[0])}for(let lt=0;lt<it;lt++){let pt=bt[lt];Xt(pt[0]+tt*c,pt[1]+tt*c,pt[2]+tt*c)}}n.addGroup(et,i.length/3-et,0)}function zt(){let et=i.length/3,lt=0;Dt(A,lt),lt+=A.length;for(let pt=0,St=q.length;pt<St;pt++){let yt=q[pt];Dt(yt,lt),lt+=yt.length}n.addGroup(et,i.length/3-et,1)}function Dt(et,lt){let pt=et.length;while(--pt>=0){let St=pt,yt=pt-1;if(yt<0)yt=et.length-1;for(let Nt=0,Ut=c+b*2;Nt<Ut;Nt++){let Yt=tt*Nt,Jt=tt*(Nt+1),ne=lt+St+Yt,I=lt+yt+Yt,ge=lt+yt+Jt,$t=lt+St+Jt;B(ne,I,ge,$t)}}}function At(et,lt,pt){o.push(et),o.push(lt),o.push(pt)}function Xt(et,lt,pt){at(et),at(lt),at(pt);let St=i.length/3,yt=f.generateTopUV(n,i,St-3,St-2,St-1);_t(yt[0]),_t(yt[1]),_t(yt[2])}function B(et,lt,pt,St){at(et),at(lt),at(St),at(lt),at(pt),at(St);let yt=i.length/3,Nt=f.generateSideWallUV(n,i,yt-6,yt-3,yt-2,yt-1);_t(Nt[0]),_t(Nt[1]),_t(Nt[3]),_t(Nt[1]),_t(Nt[2]),_t(Nt[3])}function at(et){i.push(o[et*3+0]),i.push(o[et*3+1]),i.push(o[et*3+2])}function _t(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ou(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new hr[i.type]().fromJSON(i);return new Cs(n,t.options)}}var Fu={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],d=e[s*3+1];return[new mt(r,a),new mt(o,l),new mt(c,d)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],d=e[i*3+1],u=e[i*3+2],h=e[s*3],m=e[s*3+1],x=e[s*3+2],b=e[r*3],p=e[r*3+1],f=e[r*3+2];if(Math.abs(o-d)<Math.abs(a-c))return[new mt(a,1-l),new mt(c,1-u),new mt(h,1-x),new mt(b,1-f)];else return[new mt(o,1-l),new mt(d,1-u),new mt(m,1-x),new mt(p,1-f)]}};function Ou(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class jn extends Ze{constructor(t=[new mt(0,-0.5),new mt(0.5,0),new mt(0,0.5)],e=12,n=0,i=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=se(i,0,Math.PI*2);let s=[],r=[],a=[],o=[],l=[],c=1/e,d=new N,u=new mt,h=new N,m=new N,x=new N,b=0,p=0;for(let f=0;f<=t.length-1;f++)switch(f){case 0:b=t[f+1].x-t[f].x,p=t[f+1].y-t[f].y,h.x=p*1,h.y=-b,h.z=p*0,x.copy(h),h.normalize(),o.push(h.x,h.y,h.z);break;case t.length-1:x.normalize(),o.push(x.x,x.y,x.z);break;default:b=t[f+1].x-t[f].x,p=t[f+1].y-t[f].y,h.x=p*1,h.y=-b,h.z=p*0,m.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),o.push(h.x,h.y,h.z),x.copy(m)}for(let f=0;f<=e;f++){let T=n+f*c*i,v=Math.sin(T),S=Math.cos(T);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*v,d.y=t[E].y,d.z=t[E].x*S,r.push(d.x,d.y,d.z),u.x=f/e,u.y=E/(t.length-1),a.push(u.x,u.y);let C=o[3*E+0]*v,_=o[3*E+1],w=o[3*E+0]*S;l.push(C,_,w)}}for(let f=0;f<e;f++)for(let T=0;T<t.length-1;T++){let v=T+f*t.length,S=v,E=v+t.length,C=v+t.length+1,_=v+1;s.push(S,E,_),s.push(C,_,E)}this.setIndex(s),this.setAttribute("position",new ye(r,3)),this.setAttribute("uv",new ye(a,2)),this.setAttribute("normal",new ye(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.points,t.segments,t.phiStart,t.phiLength)}}class ti extends Ze{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,d=t/a,u=e/o,h=[],m=[],x=[],b=[];for(let p=0;p<c;p++){let f=p*u-r;for(let T=0;T<l;T++){let v=T*d-s;m.push(v,-f,0),x.push(0,0,1),b.push(T/a),b.push(1-p/o)}}for(let p=0;p<o;p++)for(let f=0;f<a;f++){let T=f+l*p,v=f+l*(p+1),S=f+1+l*(p+1),E=f+1+l*p;h.push(T,v,E),h.push(v,S,E)}this.setIndex(h),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fn extends Ze{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],d=new N,u=new N,h=[],m=[],x=[],b=[];for(let p=0;p<=n;p++){let f=[],T=p/n,v=r+T*a,S=t*Math.cos(v),E=Math.sqrt(t*t-S*S),C=0;if(p===0&&r===0)C=0.5/e;else if(p===n&&o===Math.PI)C=-0.5/e;for(let _=0;_<=e;_++){let w=_/e,D=i+w*s;d.x=-E*Math.cos(D),d.y=S,d.z=E*Math.sin(D),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),b.push(w+C,1-T),f.push(l++)}c.push(f)}for(let p=0;p<n;p++)for(let f=0;f<e;f++){let T=c[p][f+1],v=c[p][f],S=c[p+1][f],E=c[p+1][f+1];if(p!==0||r>0)h.push(T,v,E);if(p!==n-1||o<Math.PI)h.push(v,S,E)}this.setIndex(h),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $i extends Ze{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],d=[],u=new N,h=new N,m=new N;for(let x=0;x<=n;x++){let b=r+x/n*a;for(let p=0;p<=i;p++){let f=p/i*s;h.x=(t+e*Math.cos(b))*Math.cos(f),h.y=(t+e*Math.cos(b))*Math.sin(f),h.z=e*Math.sin(b),l.push(h.x,h.y,h.z),u.x=t*Math.cos(f),u.y=t*Math.sin(f),m.subVectors(h,u).normalize(),c.push(m.x,m.y,m.z),d.push(p/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let b=1;b<=i;b++){let p=(i+1)*x+b-1,f=(i+1)*(x-1)+b-1,T=(i+1)*(x-1)+b,v=(i+1)*x+b;o.push(p,f,v),o.push(f,T,v)}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Ki extends Ze{constructor(t=new Or(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new N,o=new N,l=new mt,c=new N,d=[],u=[],h=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(h,2));function x(){for(let T=0;T<e;T++)b(T);b(s===!1?e:0),f(),p()}function b(T){c=t.getPointAt(T/e,c);let v=r.normals[T],S=r.binormals[T];for(let E=0;E<=i;E++){let C=E/i*Math.PI*2,_=Math.sin(C),w=-Math.cos(C);o.x=w*v.x+_*S.x,o.y=w*v.y+_*S.y,o.z=w*v.z+_*S.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,d.push(a.x,a.y,a.z)}}function p(){for(let T=1;T<=e;T++)for(let v=1;v<=i;v++){let S=(i+1)*(T-1)+(v-1),E=(i+1)*T+(v-1),C=(i+1)*T+v,_=(i+1)*(T-1)+v;m.push(S,E,_),m.push(E,C,_)}}function f(){for(let T=0;T<=e;T++)for(let v=0;v<=i;v++)l.x=T/e,l.y=v/i,h.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ki(new hr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function xi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Ul(s))if(s.isRenderTargetTexture)qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(Ul(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function We(t){let e={};for(let n=0;n<t.length;n++){let i=xi(t[n]);for(let s in i)e[s]=i[s]}return e}function Ul(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Bu(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fo(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return le.workingColorSpace}var $c={clone:xi,merge:We},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends $n{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=Bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new N().fromArray(i.value);break;case"v4":this.uniforms[n].value=new we().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Oo extends On{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qi extends $n{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ji extends Qi{constructor(t){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){if(this._anisotropy>0!==t>0)this.version++;this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){if(this._clearcoat>0!==t>0)this.version++;this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){if(this._diffuseRoughness>0!==t>0)this.version++;this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){if(this._iridescence>0!==t>0)this.version++;this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){if(this._dispersion>0!==t>0)this.version++;this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){if(this._retroreflectivity>0!==t>0)this.version++;this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){if(this._sheen>0!==t>0)this.version++;this._sheen=t}get transmission(){return this._transmission}set transmission(t){if(this._transmission>0!==t>0)this.version++;this._transmission=t}get iridescenceThicknessRange(){return ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class zr extends $n{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bo extends $n{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zo extends $n{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ui(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function rr(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class vi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class ko extends vi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,h=this._weightNext,m=(n-e)/(i-e),x=m*m,b=x*m,p=-u*b+2*u*x-u*m,f=(1+u)*b+(-1.5-2*u)*x+(-0.5+u)*m+1,T=(-1-h)*b+(1.5+h)*x+0.5*m,v=h*b-h*x;for(let S=0;S!==a;++S)s[S]=p*r[c+S]+f*r[l+S]+T*r[o+S]+v*r[d+S];return s}}class Go extends vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),d=1-c;for(let u=0;u!==a;++u)s[u]=r[l+u]*d+r[o+u]*c;return s}}class Ho extends vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Wo extends vi{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let m=(n-e)/(i-e),x=1-m;for(let b=0;b!==a;++b)s[b]=r[l+b]*x+r[o+b]*m;return s}let u=a*2,h=t-1;for(let m=0;m!==a;++m){let x=r[l+m],b=r[o+m],p=h*u+m*2,f=d[p],T=d[p+1],v=t*u+m*2,S=c[v],E=c[v+1],C=Hu(n,e,f,S,i);s[m]=Kc(C,x,T,E,b)}return s}}function Kc(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Gu(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Hu(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=Kc(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=Gu(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class ln{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ui(e,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ui(t.times,Array),values:Ui(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(rr(t.settings))n.settings={inTangents:Ui(t.settings.inTangents,Array),outTangents:Ui(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wo(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;if(rr(this.settings))Fl(this.settings.inTangents,t),Fl(this.settings.outTangents,t)}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(rr(this.settings))Ol(this.settings.inTangents,t),Ol(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Zt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Zt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Zt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Zt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Wh(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Zt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let d=a*n,u=d-n,h=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[h+m]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let d=a*n,u=r*n;for(let h=0;h!==n;++h)e[u+h]=e[d+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,rr(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Fl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function Ol(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=2301;class yi extends ln{constructor(t,e,n){super(t,e,n)}}yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=2300;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Vo extends ln{constructor(t,e,n,i){super(t,e,n,i)}}Vo.prototype.ValueTypeName="color";class Xo extends ln{constructor(t,e,n,i){super(t,e,n,i)}}Xo.prototype.ValueTypeName="number";class qo extends vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)mn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class kr extends ln{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}}kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Si extends ln{constructor(t,e,n){super(t,e,n)}}Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=2300;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;class Yo extends ln{constructor(t,e,n,i){super(t,e,n,i)}}Yo.prototype.ValueTypeName="vector";class Zo{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){let d=l.indexOf(c);if(d!==-1)l.splice(d,2);return this},this.getHandler=function(c){for(let d=0,u=l.length;d<u;d+=2){let h=l[d],m=l[d+1];if(h.global)h.lastIndex=0;if(h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Qc=new Zo;class Jo{constructor(t){if(this.manager=t!==void 0?t:Qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";class $o extends Te{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}var ya=new fe,Bl=new N,zl=new N;class Ko{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bl),zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ya,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var ar=new N,or=new mn,_n=new N;class Gr extends Te{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ar,or,_n),_n.x===1&&_n.y===1&&_n.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ar,or,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ar,or,_n),_n.x===1&&_n.y===1&&_n.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ar,or,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Xn=new N,kl=new mt,Gl=new mt;class qe extends Gr{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($r*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan($r*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,kl,Gl),e.subVectors(Gl,kl)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($r*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class jc extends Ko{constructor(){super(new qe(90,1,0.5,500));this.isPointLightShadow=!0}}class Hr extends $o{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Qo extends Gr{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}var Fi=-90,Oi=1;class Is extends Te{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qe(Fi,Oi,t,e);i.layers=this.layers,this.add(i);let s=new qe(Fi,Oi,t,e);s.layers=this.layers,this.add(s);let r=new qe(Fi,Oi,t,e);r.layers=this.layers,this.add(r);let a=new qe(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let o=new qe(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let l=new qe(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let b=!1;if(t.isWebGLRenderer===!0)b=t.state.buffers.depth.getReversed();else b=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),b&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),b&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(d,u,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class jo extends qe{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}var tl="\\[\\]\\.:\\/",Wu=new RegExp("["+tl+"]","g"),el="[^"+tl+"]",Vu="[^"+tl.replace("\\.","")+"]",Xu=/((?:WC+[\/:])*)/.source.replace("WC",el),qu=/(WCOD+)?/.source.replace("WCOD",Vu),Yu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),Zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),Ju=new RegExp("^"+Xu+qu+Yu+Zu+"$"),$u=["material","materials","bones","map"];class th{constructor(t,e,n){let i=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class me{constructor(t,e,n){this.path=e,this.parsedPath=n||me.parseTrackName(e),this.node=me.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new me(t,e,n);else return new me.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wu,"")}static parseTrackName(t){let e=Ju.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if($u.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=me.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}me.Composite=th;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var Hl=new fe;class Wr{constructor(t,e,n=0,i=1/0){this.ray=new Ar(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hl),this}intersectObject(t,e=!0,n=[]){return ba(t,this,n,e),n.sort(Wl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ba(t[i],this,n,e);return n.sort(Wl),n}}function Wl(t,e){return t.distance-e.distance}function ba(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)ba(r[a],e,n,!0)}}class eh{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function nl(t,e,n,i){let s=Ku(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ku(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)qt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function bh(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function td(t){let e=new WeakMap;function n(o,l){let{array:c,usage:d}=o,u=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)m=t.HALF_FLOAT;else m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let{array:d,updateRanges:u}=l;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,d);else{u.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<u.length;m++){let x=u[h],b=u[m];if(b.start<=x.start+x.count+1)x.count=Math.max(x.count,b.start+b.count-x.start);else++h,u[h]=b}u.length=h+1;for(let m=0,x=u.length;m<x;m++){let b=u[m];t.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let d=e.get(o);if(!d||d.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
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
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wd=`#define PI 3.141592653589793
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
} // validated`,Td=`vec3 transformedNormal = objectNormal;
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
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
#endif`,Qd=`uniform sampler2D dfgLUT;
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
}`,jd=`
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uf=`#if defined( USE_POINTS_UV )
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
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mf=`#if defined( USE_MORPHCOLORS )
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
#endif`,gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wf=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kf=`float getShadowMask() {
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
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform float backgroundBlurriness;
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`#include <common>
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
}`,lp=`#if DEPTH_PACKING == 3200
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
}`,cp=`#define DISTANCE
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
}`,hp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,vp=`#define MATCAP
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
}`,yp=`#define MATCAP
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
}`,Sp=`#define NORMAL
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
}`,Mp=`#define NORMAL
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
}`,bp=`#define PHONG
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
}`,wp=`#define PHONG
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
}`,Tp=`#define STANDARD
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
}`,Ep=`#define STANDARD
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
}`,Ap=`#define TOON
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
}`,Rp=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Np=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:dd,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:vd,color_fragment:yd,color_pars_fragment:Sd,color_pars_vertex:Md,color_vertex:bd,common:wd,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ed,displacementmap_vertex:Ad,emissivemap_fragment:Rd,emissivemap_pars_fragment:Cd,colorspace_fragment:Id,colorspace_pars_fragment:Pd,envmap_fragment:Ld,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Nd,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:qd,envmap_vertex:Fd,fog_vertex:Od,fog_pars_vertex:Bd,fog_fragment:zd,fog_pars_fragment:kd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Jd,lights_phong_pars_fragment:$d,lights_physical_fragment:Kd,lights_physical_pars_fragment:Qd,lights_fragment_begin:jd,lights_fragment_maps:tf,lights_fragment_end:ef,lightprobes_pars_fragment:nf,logdepthbuf_fragment:sf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:of,map_fragment:lf,map_pars_fragment:cf,map_particle_fragment:hf,map_particle_pars_fragment:uf,metalnessmap_fragment:df,metalnessmap_pars_fragment:ff,morphinstance_vertex:pf,morphcolor_vertex:mf,morphnormal_vertex:gf,morphtarget_pars_vertex:_f,morphtarget_vertex:xf,normal_fragment_begin:vf,normal_fragment_maps:yf,normal_pars_fragment:Sf,normal_pars_vertex:Mf,normal_vertex:bf,normalmap_pars_fragment:wf,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Af,iridescence_pars_fragment:Rf,opaque_fragment:Cf,packing:If,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:Df,dithering_pars_fragment:Nf,roughnessmap_fragment:Uf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:kf,skinbase_vertex:Gf,skinning_pars_vertex:Hf,skinning_vertex:Wf,skinnormal_vertex:Vf,specularmap_fragment:Xf,specularmap_pars_fragment:qf,tonemapping_fragment:Yf,tonemapping_pars_fragment:Zf,transmission_fragment:Jf,transmission_pars_fragment:$f,uv_pars_fragment:Kf,uv_pars_vertex:Qf,uv_vertex:jf,worldpos_vertex:tp,background_vert:ep,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:sp,cube_vert:rp,cube_frag:ap,depth_vert:op,depth_frag:lp,distance_vert:cp,distance_frag:hp,equirect_vert:up,equirect_frag:dp,linedashed_vert:fp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:xp,meshmatcap_vert:vp,meshmatcap_frag:yp,meshnormal_vert:Sp,meshnormal_frag:Mp,meshphong_vert:bp,meshphong_frag:wp,meshphysical_vert:Tp,meshphysical_frag:Ep,meshtoon_vert:Ap,meshtoon_frag:Rp,points_vert:Cp,points_frag:Ip,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Dp,sprite_frag:Np},It={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new mt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},wn={basic:{uniforms:We([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:We([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:We([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:We([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:We([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:We([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:We([It.points,It.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:We([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:We([It.common,It.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:We([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:We([It.sprite,It.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:We([It.common,It.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:We([It.lights,It.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};wn.physical={uniforms:We([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Vr={r:0,b:0,g:0},Up=new fe,wh=new Qt;wh.set(-1,0,0,0,1,0,0,0,1);function Fp(t,e,n,i,s,r){let a=new Kt(0),o=s===!0?0:1,l,c,d=null,u=0,h=null;function m(T){let v=T.isScene===!0?T.background:null;if(v&&v.isTexture){let S=T.backgroundBlurriness>0;v=e.get(v,S)}return v}function x(T){let v=!1,S=m(T);if(S===null)p(a,o);else if(S&&S.isColor)p(S,1),v=!0;let E=t.xr.getEnvironmentBlendMode();if(E==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(E==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||v)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function b(T,v){let S=m(v);if(S&&S.isCubeTexture){if(c===void 0)c=new ce(new Qn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:xi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Up.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(wh);if(c.material.toneMapped=le.getTransfer(S.colorSpace)!==xe,d!==S||u!==S.version||h!==t.toneMapping)c.material.needsUpdate=!0,d=S,u=S.version,h=t.toneMapping;c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new ce(new ti(2,2),new On({name:"BackgroundMaterial",uniforms:xi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=le.getTransfer(S.colorSpace)!==xe,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),d!==S||u!==S.version||h!==t.toneMapping)l.material.needsUpdate=!0,d=S,u=S.version,h=t.toneMapping;l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)}}function p(T,v){T.getRGB(Vr,Fo(t)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,v,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),o=v,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:x,addToRenderList:b,dispose:f}}function Op(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(U,V,st,A,j){let tt=!1,G=u(U,A,st,V);if(r!==G)r=G,c(r.object);if(tt=m(U,A,st,j),tt)x(U,A,st,j);if(j!==null)e.update(j,t.ELEMENT_ARRAY_BUFFER);if(tt||a){if(a=!1,S(U,V,st,A),j!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer)}}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function d(U){return t.deleteVertexArray(U)}function u(U,V,st,A){let j=A.wireframe===!0,tt=i[V.id];if(tt===void 0)tt={},i[V.id]=tt;let G=U.isInstancedMesh===!0?U.id:0,gt=tt[G];if(gt===void 0)gt={},tt[G]=gt;let Z=gt[st.id];if(Z===void 0)Z={},gt[st.id]=Z;let Q=Z[j];if(Q===void 0)Q=h(l()),Z[j]=Q;return Q}function h(U){let V=[],st=[],A=[];for(let j=0;j<n;j++)V[j]=0,st[j]=0,A[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:st,attributeDivisors:A,object:U,attributes:{},index:null}}function m(U,V,st,A){let j=r.attributes,tt=V.attributes,G=0,gt=st.getAttributes();for(let Z in gt)if(gt[Z].location>=0){let rt=j[Z],bt=tt[Z];if(bt===void 0){if(Z==="instanceMatrix"&&U.instanceMatrix)bt=U.instanceMatrix;if(Z==="instanceColor"&&U.instanceColor)bt=U.instanceColor}if(rt===void 0)return!0;if(rt.attribute!==bt)return!0;if(bt&&rt.data!==bt.data)return!0;G++}if(r.attributesNum!==G)return!0;if(r.index!==A)return!0;return!1}function x(U,V,st,A){let j={},tt=V.attributes,G=0,gt=st.getAttributes();for(let Z in gt)if(gt[Z].location>=0){let rt=tt[Z];if(rt===void 0){if(Z==="instanceMatrix"&&U.instanceMatrix)rt=U.instanceMatrix;if(Z==="instanceColor"&&U.instanceColor)rt=U.instanceColor}let bt={};if(bt.attribute=rt,rt&&rt.data)bt.data=rt.data;j[Z]=bt,G++}r.attributes=j,r.attributesNum=G,r.index=A}function b(){let U=r.newAttributes;for(let V=0,st=U.length;V<st;V++)U[V]=0}function p(U){f(U,0)}function f(U,V){let st=r.newAttributes,A=r.enabledAttributes,j=r.attributeDivisors;if(st[U]=1,A[U]===0)t.enableVertexAttribArray(U),A[U]=1;if(j[U]!==V)t.vertexAttribDivisor(U,V),j[U]=V}function T(){let U=r.newAttributes,V=r.enabledAttributes;for(let st=0,A=V.length;st<A;st++)if(V[st]!==U[st])t.disableVertexAttribArray(st),V[st]=0}function v(U,V,st,A,j,tt,G){if(G===!0)t.vertexAttribIPointer(U,V,st,j,tt);else t.vertexAttribPointer(U,V,st,A,j,tt)}function S(U,V,st,A){b();let j=A.attributes,tt=st.getAttributes(),G=V.defaultAttributeValues;for(let gt in tt){let Z=tt[gt];if(Z.location>=0){let Q=j[gt];if(Q===void 0){if(gt==="instanceMatrix"&&U.instanceMatrix)Q=U.instanceMatrix;if(gt==="instanceColor"&&U.instanceColor)Q=U.instanceColor}if(Q!==void 0){let rt=Q.normalized,bt=Q.itemSize,it=e.get(Q);if(it===void 0)continue;let{buffer:ft,type:vt,bytesPerElement:zt}=it,Dt=vt===t.INT||vt===t.UNSIGNED_INT||Q.gpuType===Na;if(Q.isInterleavedBufferAttribute){let At=Q.data,Xt=At.isInterleavedBuffer===!0?At.stride:At.itemSize,B=Q.offset;if(At.isInstancedInterleavedBuffer||At.isInstancedBufferAttribute){for(let at=0;at<Z.locationSize;at++)f(Z.location+at,At.meshPerAttribute);if(U.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=At.meshPerAttribute*At.count}else for(let at=0;at<Z.locationSize;at++)p(Z.location+at);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let at=0;at<Z.locationSize;at++)v(Z.location+at,bt/Z.locationSize,vt,rt,Xt*zt,(B+bt/Z.locationSize*at)*zt,Dt)}else{if(Q.isInstancedBufferAttribute){for(let At=0;At<Z.locationSize;At++)f(Z.location+At,Q.meshPerAttribute);if(U.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=Q.meshPerAttribute*Q.count}else for(let At=0;At<Z.locationSize;At++)p(Z.location+At);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let At=0;At<Z.locationSize;At++)v(Z.location+At,bt/Z.locationSize,vt,rt,bt*zt,bt/Z.locationSize*At*zt,Dt)}}else if(G!==void 0){let rt=G[gt];if(rt!==void 0)switch(rt.length){case 2:t.vertexAttrib2fv(Z.location,rt);break;case 3:t.vertexAttrib3fv(Z.location,rt);break;case 4:t.vertexAttrib4fv(Z.location,rt);break;default:t.vertexAttrib1fv(Z.location,rt)}}}}T()}function E(){D();for(let U in i){let V=i[U];for(let st in V){let A=V[st];for(let j in A){let tt=A[j];for(let G in tt)d(tt[G].object),delete tt[G];delete A[j]}}delete i[U]}}function C(U){if(i[U.id]===void 0)return;let V=i[U.id];for(let st in V){let A=V[st];for(let j in A){let tt=A[j];for(let G in tt)d(tt[G].object),delete tt[G];delete A[j]}}delete i[U.id]}function _(U){for(let V in i){let st=i[V];for(let A in st){let j=st[A];if(j[U.id]===void 0)continue;let tt=j[U.id];for(let G in tt)d(tt[G].object),delete tt[G];delete j[U.id]}}}function w(U){for(let V in i){let st=i[V],A=U.isInstancedMesh===!0?U.id:0,j=st[A];if(j===void 0)continue;for(let tt in j){let G=j[tt];for(let gt in G)d(G[gt].object),delete G[gt];delete j[tt]}if(delete st[A],Object.keys(st).length===0)delete i[V]}}function D(){if(q(),a=!0,r===s)return;r=s,c(r.object)}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:q,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:b,enableAttribute:p,disableUnusedAttributes:T}}function Bp(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){if(d===0)return;t.drawArraysInstanced(i,l,c,d),n.update(c,i,d)}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let m=0;m<d;m++)h+=c[m];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zp(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){if(_!==Dn&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(_){let w=_===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(_!==pn&&_!==Ln&&!w&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",d=l(c);if(d!==c)qt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d;let u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&u===!1;if(n.reversedDepthBuffer===!0&&u===!1)qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&u===!0)qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:S,maxSamples:E,samples:C}}function kp(t){let e=this,n=null,i=0,s=!1,r=!1,a=new xn,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let m=u.length!==0||h||i!==0||s;return s=h,i=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){n=d(u,h,0)},this.setState=function(u,h,m){let{clippingPlanes:x,clipIntersection:b,clipShadows:p}=u,f=t.get(u);if(!s||x===null||x.length===0||r&&!p)if(r)d(null);else c();else{let T=r?0:i,v=T*4,S=f.clippingState||null;l.value=S,S=d(x,h,v,m);for(let E=0;E!==v;++E)S[E]=n[E];f.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function d(u,h,m,x){let b=u!==null?u.length:0,p=null;if(b!==0){if(p=l.value,x!==!0||p===null){let f=m+b*4,T=h.matrixWorldInverse;if(o.getNormalMatrix(T),p===null||p.length<f)p=new Float32Array(f);for(let v=0,S=m;v!==b;++v,S+=4)a.copy(u[v]).applyMatrix4(T,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}class qr extends on{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qn(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:di});s.uniforms.tEquirect.value=e;let r=new ce(i,s),a=e.minFilter;if(e.minFilter===Yn)e.minFilter=an;return new Is(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var nh=256,Gp=3,Hp=20,Th=256,Eh=16,Wp=3,Vp=new N,Xp=new Kt;class ts{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Is(1,10,null),this._boxMesh=new ce(new Qn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Vp}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(e>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:d,autoClearColor:u,autoClearDepth:h,autoClearStencil:m}=o,x=t.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,x===null)t.background=o.getClearColor(Xp);let b=new Is(n,i,c);if(b.position.copy(a),b.update(o,t),o.autoClear=d,o.autoClearColor=u,o.autoClearDepth=h,o.autoClearStencil=m,t.background=x,e>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,e);return this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(nh,Wc(t))}_fromTexture(t,e){if(t.mapping===Ss||t.mapping===Vi)this._setSize(t.image.length===0?nh:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ih(t,!1,!1),n=Math.log2(t)-Gp;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==e||t&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=ih(e,!0,t)}return this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;if(t.mapping===Ss||t.mapping===Vi){if(this._cubemapMaterial===null)this._cubemapMaterial=rh();e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=sh();e=this._equirectMaterial}e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){if(this._ggxMaterial===null)this._ggxMaterial=qp(),this._integrationMaterial=Yp();let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Eh);for(let r=0;r<=n;r++){let a=ts.lodToRoughness(r,n);if(r>n-Wp)s.roughness.value=a,this._renderCube(t,r,this._integrationMaterial);else{let o=a>0?Math.log2(e)+0.5*Math.log2(6/(Th*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){if(this._blurMaterial===null)this._blurMaterial=Zp();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function ih(t,e,n){return new qr(t,{minFilter:Yn,generateMipmaps:e,type:Mn,colorSpace:xo,depthBuffer:n})}function Ns(t,e,n){return new On({name:t,uniforms:e,vertexShader:ie.cube_vert,fragmentShader:n,side:He,blending:di,depthTest:!1,depthWrite:!1})}function qp(){return Ns("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Th}u

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
	`)}function Yp(){return Ns("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Eh}},`

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
	`)}function Zp(){return Ns("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hp}
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
	`)}function sh(){return Ns("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rh(){return Ns("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jp(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,m=!1){if(h===null||h===void 0)return null;if(m)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===fr||m===pr)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let b=new qr(x.height);return b.fromEquirectangularTexture(t,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let m=h.mapping,x=m===fr||m===pr,b=m===Ss||m===Vi;if(x||b){let p=n.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f){if(i===null)i=new ts(t);return p=x?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let T=h.image;if(x&&T&&T.height>0||b&&T&&l(T)){if(i===null)i=new ts(t);return p=x?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),h.addEventListener("dispose",d),p.texture}else return null}}}return h}function o(h,m){if(m===fr)h.mapping=Ss;else if(m===pr)h.mapping=Vi;return h}function l(h){let m=0,x=6;for(let b=0;b<x;b++)if(h[b]!==void 0)m++;return m===x}function c(h){let m=h.target;m.removeEventListener("dispose",c);let x=e.get(m);if(x!==void 0)e.delete(m),x.dispose()}function d(h){let m=h.target;m.removeEventListener("dispose",d);let x=n.get(m);if(x!==void 0)n.delete(m),x.dispose()}function u(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:u}}function $p(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)ci("WebGLRenderer: "+i+" extension not supported.");return s}}}function Kp(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((x)=>delete s[x]);function o(x){l(x.target)}function l(x){if(x.index!==null)e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let b=r.get(x);if(b)e.remove(b),r.delete(x);if(i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0)delete x._maxInstanceCount;n.memory.geometries--}function c(x,b){if(s[b.id]!==void 0)return b;return b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),n.memory.geometries++,b}function d(x){let b=x.attributes;for(let p in b)e.update(b[p],t.ARRAY_BUFFER)}function u(x){let b=x.index,p=x.attributes.position,f=0;if(p===void 0)return;let T=b!==null?b.array.length:p.array.length/3-1,S=new(p.count>=65535?Er:Tr)(Math.ceil(T/3)*6,1),E=S.array;if(b!==null){let _=b.array;f=b.version;for(let w=0,D=0;w<T;w+=3){let q=_[w+0],U=_[w+1],V=_[w+2];E[D++]=q,E[D++]=U,E[D++]=U,E[D++]=V,E[D++]=V,E[D++]=q}}else{f=p.version;for(let _=0,w=0;_<T;_+=3){let D=_+0,q=_+1,U=_+2;E[w++]=D,E[w++]=q,E[w++]=q,E[w++]=U,E[w++]=U,E[w++]=D}}S.version=f;let C=r.get(x);if(C)e.remove(C);r.set(x,S)}function h(x){let b=r.get(x);if(b){let p=x.index;if(p!==null){if(b.version<p.version)u(x)}}else u(x);return r.get(x)}function m(){for(let x in s){let b=s[x].deref();if(b!==void 0)l(b)}}return{get:c,update:d,getWireframeAttribute:h,dispose:m}}function Qp(t,e,n){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){t.drawElements(i,h,r,u*a),n.update(h,i,1)}function c(u,h,m){if(m===0)return;t.drawElementsInstanced(i,h,r,u*a,m),n.update(h,i,m)}function d(u,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,m);let b=0;for(let p=0;p<m;p++)b+=h[p];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function jp(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function tm(t,e,n){let i=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=i.get(o);if(h===void 0||h.count!==u){let D=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",D)};if(h!==void 0)h.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],v=0;if(m===!0)v=1;if(x===!0)v=2;if(b===!0)v=3;let S=o.attributes.position.count*v,E=1;if(S>e.maxTextureSize)E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize;let C=new Float32Array(S*E*4*u),_=new wr(C,S,E,u);_.type=Ln,_.needsUpdate=!0;let w=v*4;for(let q=0;q<u;q++){let U=p[q],V=f[q],st=T[q],A=S*E*4*q;for(let j=0;j<U.count;j++){let tt=j*w;if(m===!0)s.fromBufferAttribute(U,j),C[A+tt+0]=s.x,C[A+tt+1]=s.y,C[A+tt+2]=s.z,C[A+tt+3]=0;if(x===!0)s.fromBufferAttribute(V,j),C[A+tt+4]=s.x,C[A+tt+5]=s.y,C[A+tt+6]=s.z,C[A+tt+7]=0;if(b===!0)s.fromBufferAttribute(st,j),C[A+tt+8]=s.x,C[A+tt+9]=s.y,C[A+tt+10]=s.z,C[A+tt+11]=st.itemSize===4?s.w:1}}h={count:u,texture:_,size:new mt(S,E)},i.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function em(t,e,n,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d)e.update(h),r.set(h,d);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==d){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,d)}}if(c.isSkinnedMesh){let m=c.skeleton;if(r.get(m)!==d)m.update(),r.set(m,d)}return h}function o(){r=new WeakMap}function l(c){let d=c.target;if(d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null)n.remove(d.instanceColor)}return{update:a,dispose:o}}var nm={[Ra]:"LINEAR_TONE_MAPPING",[Ca]:"REINHARD_TONE_MAPPING",[Ia]:"CINEON_TONE_MAPPING",[Pa]:"ACES_FILMIC_TONE_MAPPING",[Da]:"AGX_TONE_MAPPING",[ys]:"NEUTRAL_TONE_MAPPING",[La]:"CUSTOM_TONE_MAPPING"};function im(t,e,n,i,s,r){let a=new on(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new Ze;d.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ye([0,2,0,0,2,0],2));let u=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ce(d,u),m=new Qo(-1,1,1,-1,0,1),x=null,b=null,p=!1,f,T=null,v=[],S=!1;this.setSize=function(E,C){if(a.setSize(E,C),o!==null)o.setSize(E,C);if(l!==null)l.setSize(E,C);for(let _=0;_<v.length;_++){let w=v[_];if(w.setSize)w.setSize(E,C)}},this.setEffects=function(E){v=E,S=v.length>0&&v[0].isRenderPass===!0;let{width:C,height:_}=a;if(v.length>0&&o===null)o=new on(C,_,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new on(C,_,{type:Mn,depthBuffer:!1,stencilBuffer:!1});let w=s===!0&&v.some((D)=>D.needsDepthTexture===!0);if(w!==(a.depthTexture!==null)){if(w===!0&&c===null){if(c=new Kn(C,_),r===!0)c.format=Jn,c.type=fi}a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w}for(let D=0;D<v.length;D++){let q=v[D];if(q.setSize)q.setSize(C,_);if(w&&q.needsDepthTexture===!0&&q.setDepthTexture)q.setDepthTexture(c)}},this.begin=function(E,C){if(p)return!1;if(E.toneMapping===Sn&&v.length===0)return!1;if(T=C,C!==null){let{width:_,height:w}=C;if(a.width!==_||a.height!==w)this.setSize(_,w)}if(S===!1)E.setRenderTarget(a);return f=E.toneMapping,E.toneMapping=Sn,!0},this.hasRenderPass=function(){return S},this.end=function(E,C){E.toneMapping=f,p=!0;let _=a,w=o;for(let D=0;D<v.length;D++){let q=v[D];if(q.enabled===!1)continue;if(q.render(E,w,_,C),q.needsSwap!==!1)_=w,w=w===o?l:o}if(x!==E.outputColorSpace||b!==E.toneMapping){if(x=E.outputColorSpace,b=E.toneMapping,u.defines={},le.getTransfer(x)===xe)u.defines.SRGB_TRANSFER="";let D=nm[b];if(D)u.defines[D]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(T),E.render(h,m),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();d.dispose(),u.dispose()}}var Ah=new Fe,Rh=new Kn(1,1),Ch=new Lr(1),Ih=new wr,Ph=new Co,Lh=new Pr,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function es(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=ah[s];if(r===void 0)r=new Float32Array(s),ah[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Pe(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Le(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yr(t,e){let n=oh[e];if(n===void 0)n=new Int32Array(e),oh[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function rm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Pe(n,e))return;t.uniform2fv(this.addr,e),Le(n,e)}}function am(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Pe(n,e))return;t.uniform3fv(this.addr,e),Le(n,e)}}function om(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Pe(n,e))return;t.uniform4fv(this.addr,e),Le(n,e)}}function lm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Pe(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Le(n,e)}else{if(Pe(n,i))return;hh.set(i),t.uniformMatrix2fv(this.addr,!1,hh),Le(n,i)}}function cm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Pe(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Le(n,e)}else{if(Pe(n,i))return;ch.set(i),t.uniformMatrix3fv(this.addr,!1,ch),Le(n,i)}}function hm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Pe(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Le(n,e)}else{if(Pe(n,i))return;lh.set(i),t.uniformMatrix4fv(this.addr,!1,lh),Le(n,i)}}function um(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function dm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Pe(n,e))return;t.uniform2iv(this.addr,e),Le(n,e)}}function fm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Pe(n,e))return;t.uniform3iv(this.addr,e),Le(n,e)}}function pm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Pe(n,e))return;t.uniform4iv(this.addr,e),Le(n,e)}}function mm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function gm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Pe(n,e))return;t.uniform2uiv(this.addr,e),Le(n,e)}}function _m(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Pe(n,e))return;t.uniform3uiv(this.addr,e),Le(n,e)}}function xm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Pe(n,e))return;t.uniform4uiv(this.addr,e),Le(n,e)}}function Zr(t){if(t.version===0)t.compareFunction=Mo,t.needsUpdate=!0;return t}function vm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)r=Zr(Rh);else r=Ah;n.setTexture2D(e||r,s)}function ym(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Ph,s)}function Sm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_CUBE_SHADOW)r=Zr(Ch);else r=Lh;n.setTextureCube(e||r,s)}function Mm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Ih,s)}function bm(t){switch(t){case 5126:return sm;case 35664:return rm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Mm}}function wm(t,e){t.uniform1fv(this.addr,e)}function Tm(t,e){let n=es(e,this.size,2);t.uniform2fv(this.addr,n)}function Em(t,e){let n=es(e,this.size,3);t.uniform3fv(this.addr,n)}function Am(t,e){let n=es(e,this.size,4);t.uniform4fv(this.addr,n)}function Rm(t,e){let n=es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Cm(t,e){let n=es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Im(t,e){let n=es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Pm(t,e){t.uniform1iv(this.addr,e)}function Lm(t,e){t.uniform2iv(this.addr,e)}function Dm(t,e){t.uniform3iv(this.addr,e)}function Nm(t,e){t.uniform4iv(this.addr,e)}function Um(t,e){t.uniform1uiv(this.addr,e)}function Fm(t,e){t.uniform2uiv(this.addr,e)}function Om(t,e){t.uniform3uiv(this.addr,e)}function Bm(t,e){t.uniform4uiv(this.addr,e)}function zm(t,e,n){let i=this.cache,s=e.length,r=Yr(n,s);if(!Pe(i,r))t.uniform1iv(this.addr,r),Le(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Zr(Rh);else a=Ah;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function km(t,e,n){let i=this.cache,s=e.length,r=Yr(n,s);if(!Pe(i,r))t.uniform1iv(this.addr,r),Le(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Ph,r[a])}function Gm(t,e,n){let i=this.cache,s=e.length,r=Yr(n,s);if(!Pe(i,r))t.uniform1iv(this.addr,r),Le(i,r);let a;if(this.type===t.SAMPLER_CUBE_SHADOW)a=Zr(Ch);else a=Lh;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function Hm(t,e,n){let i=this.cache,s=e.length,r=Yr(n,s);if(!Pe(i,r))t.uniform1iv(this.addr,r),Le(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Ih,r[a])}function Wm(t){switch(t){case 5126:return wm;case 35664:return Tm;case 35665:return Em;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Im;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Dm;case 35669:case 35673:return Nm;case 5125:return Um;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}class Dh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bm(e.type)}}class Nh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wm(e.type)}}class Uh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var il=/(\w+)(\])?(\[|\.)?/g;function uh(t,e){t.seq.push(e),t.map[e.id]=e}function Vm(t,e,n){let i=t.name,s=i.length;il.lastIndex=0;while(!0){let r=il.exec(i),a=il.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){uh(n,c===void 0?new Dh(o,t,e):new Nh(o,t,e));break}else{let u=n.map[o];if(u===void 0)u=new Uh(o),uh(n,u);n=u}}}class Ds{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Vm(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function dh(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Xm=37297,qm=0;function Ym(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var fh=new Qt;function Zm(t){le._getMatrix(fh,le.workingColorSpace,t);let e=`mat3( ${fh.elements.map((n)=>n.toFixed(4))} )`;switch(le.getTransfer(t)){case vo:return[e,"LinearTransferOETF"];case xe:return[e,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ph(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Ym(t.getShaderSource(e),o)}else return r}function Jm(t,e){let n=Zm(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $m={[Ra]:"Linear",[Ca]:"Reinhard",[Ia]:"Cineon",[Pa]:"ACESFilmic",[Da]:"AgX",[ys]:"Neutral",[La]:"Custom"};function Km(t,e){let n=$m[e];if(n===void 0)return qt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Xr=new N;function Qm(){le.getLuminanceCoefficients(Xr);let t=Xr.x.toFixed(4),e=Xr.y.toFixed(4),n=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function jm(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function tg(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function eg(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ls(t){return t!==""}function mh(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function gh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(t){return t.replace(ng,ig)}function ig(t,e){let n=ie[e];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return rl(n)}var sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(t){return t.replace(sg,rg)}function rg(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var ag={[xs]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function og(t){return ag[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lg={[Vi]:"ENVMAP_MODE_REFRACTION"};function cg(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return lg[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hg={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[Mc]:"ENVMAP_BLENDING_MIX",[bc]:"ENVMAP_BLENDING_ADD"};function ug(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return hg[t.combine]||"ENVMAP_BLENDING_NONE"}function dg(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=og(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=cg(n),u=ug(n),h=jm(n),m=tg(r),x=s.createProgram(),b,p,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ls).join(`
`),b.length>0)b+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ls).join(`
`),p.length>0)p+=`
`}else b=[xh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[xh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+u:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sn?"#define TONE_MAPPING":"",n.toneMapping!==Sn?ie.tonemapping_pars_fragment:"",n.toneMapping!==Sn?Km("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Jm("linearToOutputTexel",n.outputColorSpace),Qm(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`);if(a=rl(a),a=mh(a,n),a=gh(a,n),o=rl(o),o=mh(o,n),o=gh(o,n),a=_h(a),o=_h(o),n.isRawShaderMaterial!==!0)f=`#version 300 es
`,b=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",n.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let T=f+b+a,v=f+p+o,S=dh(s,s.VERTEX_SHADER,T),E=dh(s,s.FRAGMENT_SHADER,v);if(s.attachShader(x,S),s.attachShader(x,E),n.index0AttributeName!==void 0)s.bindAttribLocation(x,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(x,0,"position");s.linkProgram(x);function C(q){if(t.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(S)||"",st=s.getShaderInfoLog(E)||"",A=U.trim(),j=V.trim(),tt=st.trim(),G=!0,gt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,x,S,E);else{let Z=ph(s,S,"vertex"),Q=ph(s,E,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+A+`
`+Z+`
`+Q)}else if(A!=="")qt("WebGLProgram: Program Info Log:",A);else if(j===""||tt==="")gt=!1;if(gt)q.diagnostics={runnable:G,programLog:A,vertexShader:{log:j,prefix:b},fragmentShader:{log:tt,prefix:p}}}s.deleteShader(S),s.deleteShader(E),_=new Ds(s,x),w=eg(s,x)}let _;this.getUniforms=function(){if(_===void 0)C(this);return _};let w;this.getAttributes=function(){if(w===void 0)C(this);return w};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(D===!1)D=s.getProgramParameter(x,Xm);return D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}var fg=0;class Fh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Oh(t),e.set(t,n);return n}}class Oh{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}}function pg(t){return t===pi||t===Mr||t===br}function mg(t,e,n,i,s,r){let a=new Ts,o=new Fh,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){if(l.add(_),_===0)return"uv";return`uv${_}`}function x(_,w,D,q,U,V){let st=q.fog,A=U.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?q.environment:null,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||j,tt),gt=h[_.type],Z=i.precision;if(_.precision!==null){if(Z=i.getMaxPrecision(_.precision),Z!==_.precision)qt("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead.")}let Q=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,rt=Q!==void 0?Q.length:0,bt=0;if(A.morphAttributes.position!==void 0)bt=1;if(A.morphAttributes.normal!==void 0)bt=2;if(A.morphAttributes.color!==void 0)bt=3;let it,ft,vt,zt;if(gt){let Ct=wn[gt];it=Ct.vertexShader,ft=Ct.fragmentShader}else{it=_.vertexShader,ft=_.fragmentShader;let Ct=o.getVertexShaderStage(_),ue=o.getFragmentShaderStage(_);o.update(_,Ct,ue),vt=Ct.id,zt=ue.id}let Dt=t.getRenderTarget(),At=t.state.buffers.depth.getReversed(),Xt=U.isInstancedMesh===!0,B=U.isBatchedMesh===!0,at=!!_.map,_t=!!_.matcap,et=!!G,lt=et&&G.isPMREMTexture===!0,pt=!!_.aoMap,St=!!_.lightMap,yt=!!_.bumpMap&&_.wireframe===!1,Nt=!!_.normalMap,Ut=!!_.displacementMap,Yt=!!_.emissiveMap,Jt=!!_.metalnessMap,ne=!!_.roughnessMap,I=_.anisotropy>0,ge=_.clearcoat>0,$t=_.diffuseRoughness>0,Se=_.dispersion>0,wt=_.retroreflectivity>0,re=_.iridescence>0,L=_.sheen>0,J=_.transmission>0,Pt=I&&!!_.anisotropyMap,M=ge&&!!_.clearcoatMap,g=ge&&!!_.clearcoatNormalMap,F=ge&&!!_.clearcoatRoughnessMap,k=$t&&!!_.diffuseRoughnessMap,K=re&&!!_.iridescenceMap,ct=re&&!!_.iridescenceThicknessMap,ot=L&&!!_.sheenColorMap,O=L&&!!_.sheenRoughnessMap,W=!!_.specularMap,dt=!!_.specularColorMap,R=!!_.specularIntensityMap,nt=J&&!!_.transmissionMap,X=J&&!!_.thicknessMap,ht=!!_.gradientMap,ut=!!_.alphaMap,xt=_.alphaTest>0,Ht=!!_.alphaHash,kt=!!_.extensions,Rt=Sn;if(_.toneMapped){if(Dt===null||Dt.isXRRenderTarget===!0)Rt=t.toneMapping}let Wt=lt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,jt={shaderID:gt,shaderType:_.type,shaderName:_.name,vertexShader:it,fragmentShader:ft,defines:_.defines,customVertexShaderID:vt,customFragmentShaderID:zt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:B,batchingColor:B&&U._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&U.instanceColor!==null,instancingMorph:Xt&&U.morphTexture!==null,outputColorSpace:Dt===null?t.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:at,matcap:_t,envMap:et,envMapMode:et&&G.mapping,envMapPMREM:lt,envMapMaxLod:lt?Wt.length-1:null,envMapSize:lt?Wt[0].width:null,aoMap:pt,lightMap:St,bumpMap:yt,normalMap:Nt,displacementMap:Ut,emissiveMap:Yt,normalMapObjectSpace:Nt&&_.normalMapType===Dc,normalMapTangentSpace:Nt&&_.normalMapType===_o,packedNormalMap:Nt&&_.normalMapType===_o&&pg(_.normalMap.format),metalnessMap:Jt,roughnessMap:ne,anisotropy:I,anisotropyMap:Pt,clearcoat:ge,clearcoatMap:M,clearcoatNormalMap:g,clearcoatRoughnessMap:F,diffuseRoughness:$t,diffuseRoughnessMap:k,dispersion:Se,retroreflection:wt,iridescence:re,iridescenceMap:K,iridescenceThicknessMap:ct,sheen:L,sheenColorMap:ot,sheenRoughnessMap:O,specularMap:W,specularColorMap:dt,specularIntensityMap:R,transmission:J,transmissionMap:nt,thicknessMap:X,gradientMap:ht,opaque:_.transparent===!1&&_.blending===vs&&_.alphaToCoverage===!1,alphaMap:ut,alphaTest:xt,alphaHash:Ht,combine:_.combine,mapUv:at&&m(_.map.channel),aoMapUv:pt&&m(_.aoMap.channel),lightMapUv:St&&m(_.lightMap.channel),bumpMapUv:yt&&m(_.bumpMap.channel),normalMapUv:Nt&&m(_.normalMap.channel),displacementMapUv:Ut&&m(_.displacementMap.channel),emissiveMapUv:Yt&&m(_.emissiveMap.channel),metalnessMapUv:Jt&&m(_.metalnessMap.channel),roughnessMapUv:ne&&m(_.roughnessMap.channel),anisotropyMapUv:Pt&&m(_.anisotropyMap.channel),clearcoatMapUv:M&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:g&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:k&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:O&&m(_.sheenRoughnessMap.channel),specularMapUv:W&&m(_.specularMap.channel),specularColorMapUv:dt&&m(_.specularColorMap.channel),specularIntensityMapUv:R&&m(_.specularIntensityMap.channel),transmissionMapUv:nt&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:ut&&m(_.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Nt||I),vertexNormals:!!A.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!A.attributes.uv&&(at||ut),fog:!!st,useFog:_.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||A.attributes.normal===void 0&&Nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:At,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.filter((Ct)=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Rt,decodeVideoTexture:at&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:Yt&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===je,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:kt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&_.extensions.multiDraw===!0||B)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function b(_){let w=[];if(_.shaderID)w.push(_.shaderID);else w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);if(_.isRawShaderMaterial===!1)p(w,_),f(w,_),w.push(t.outputColorSpace);return w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function f(_,w){if(a.disableAll(),w.instancing)a.enable(0);if(w.instancingColor)a.enable(1);if(w.instancingMorph)a.enable(2);if(w.matcap)a.enable(3);if(w.envMap)a.enable(4);if(w.normalMapObjectSpace)a.enable(5);if(w.normalMapTangentSpace)a.enable(6);if(w.clearcoat)a.enable(7);if(w.iridescence)a.enable(8);if(w.alphaTest)a.enable(9);if(w.vertexColors)a.enable(10);if(w.vertexAlphas)a.enable(11);if(w.vertexUv1s)a.enable(12);if(w.vertexUv2s)a.enable(13);if(w.vertexUv3s)a.enable(14);if(w.vertexTangents)a.enable(15);if(w.anisotropy)a.enable(16);if(w.alphaHash)a.enable(17);if(w.batching)a.enable(18);if(w.dispersion)a.enable(19);if(w.retroreflection)a.enable(24);if(w.diffuseRoughness)a.enable(25);if(w.batchingColor)a.enable(20);if(w.gradientMap)a.enable(21);if(w.packedNormalMap)a.enable(22);if(w.vertexNormals)a.enable(23);if(_.push(a.mask),a.disableAll(),w.fog)a.enable(0);if(w.useFog)a.enable(1);if(w.flatShading)a.enable(2);if(w.logarithmicDepthBuffer)a.enable(3);if(w.reversedDepthBuffer)a.enable(4);if(w.skinning)a.enable(5);if(w.morphTargets)a.enable(6);if(w.morphNormals)a.enable(7);if(w.morphColors)a.enable(8);if(w.premultipliedAlpha)a.enable(9);if(w.shadowMapEnabled)a.enable(10);if(w.doubleSided)a.enable(11);if(w.flipSided)a.enable(12);if(w.useDepthPacking)a.enable(13);if(w.dithering)a.enable(14);if(w.transmission)a.enable(15);if(w.sheen)a.enable(16);if(w.opaque)a.enable(17);if(w.pointsUvs)a.enable(18);if(w.decodeVideoTexture)a.enable(19);if(w.decodeVideoTextureEmissive)a.enable(20);if(w.alphaToCoverage)a.enable(21);if(w.numLightProbeGrids>0)a.enable(22);if(w.hasPositionAttribute)a.enable(23);_.push(a.mask)}function T(_){let w=h[_.type],D;if(w){let q=wn[w];D=$c.clone(q.uniforms)}else D=_.uniforms;return D}function v(_,w){let D=d.get(w);if(D!==void 0)++D.usedTimes;else D=new dg(t,w,_,s),c.push(D),d.set(w,D);return D}function S(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:b,getUniforms:T,acquireProgram:v,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function gg(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function _g(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function vh(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function yh(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let m=0;if(h.isInstancedMesh)m+=2;if(h.isSkinnedMesh)m+=1;return m}function o(h,m,x,b,p,f){let T=t[e];if(T===void 0)T={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:p,group:f},t[e]=T;else T.id=h.id,T.object=h,T.geometry=m,T.material=x,T.materialVariant=a(h),T.groupOrder=b,T.renderOrder=h.renderOrder,T.z=p,T.group=f;return e++,T}function l(h,m,x,b,p,f,T){if(T.reversedDepth===!0)p=-p;let v=o(h,m,x,b,p,f);if(x.transmission>0)i.push(v);else if(x.transparent===!0)s.push(v);else n.push(v)}function c(h,m,x,b,p,f){let T=o(h,m,x,b,p,f);if(x.transmission>0)i.unshift(T);else if(x.transparent===!0)s.unshift(T);else n.unshift(T)}function d(h,m){if(n.length>1)n.sort(h||_g);if(i.length>1)i.sort(m||vh);if(s.length>1)s.sort(m||vh)}function u(){for(let h=e,m=t.length;h<m;h++){let x=t[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function xg(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new yh,t.set(i,[a]);else if(s>=r.length)a=new yh,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function vg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new N,color:new Kt};break;case"SpotLight":n={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":n={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function yg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Sg=0;function Mg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bg(t){let e=new vg,n=yg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new fe,a=new fe;function o(c){let d=0,u=0,h=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,x=0,b=0,p=0,f=0,T=0,v=0,S=0,E=0,C=0,_=0,w=0,D=0,q=0;c.sort(Mg);for(let V=0,st=c.length;V<st;V++){let A=c[V],{color:j,intensity:tt,distance:G}=A,gt=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===pi)gt=A.shadow.map.texture;else gt=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)d+=j.r*tt,u+=j.g*tt,h+=j.b*tt;else if(A.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(A.sh.coefficients[Z],tt);q++}else if(A.isSunLight){let Z=e.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Q=A.shadow,rt=n.get(A);rt.shadowIntensity=Q.intensity,rt.shadowBias=Q.bias,rt.shadowNormalBias=Q.normalBias,rt.shadowRadius=Q.radius,rt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[x]=rt,i.sunShadowMap[x]=gt;let bt=Q.getViewportCount();for(let it=0;it<bt;it++)i.sunShadowMatrix[b+it]=Q.getMatrix(it),i.sunShadowCascade[b+it]=Q._cascadeData[it];b+=bt,x++}i.sun[m]=Z,m++}else if(A.isDirectionalLight){let Z=e.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Q=A.shadow,rt=n.get(A);rt.shadowIntensity=Q.intensity,rt.shadowBias=Q.bias,rt.shadowNormalBias=Q.normalBias,rt.shadowRadius=Q.radius,rt.shadowMapSize=Q.mapSize,i.directionalShadow[p]=rt,i.directionalShadowMap[p]=gt,i.directionalShadowMatrix[p]=A.shadow.matrix,E++}i.directional[p]=Z,p++}else if(A.isSpotLight){let Z=e.get(A);Z.position.setFromMatrixPosition(A.matrixWorld),Z.color.copy(j).multiplyScalar(tt),Z.distance=G,Z.coneCos=Math.cos(A.angle),Z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Z.decay=A.decay,i.spot[T]=Z;let Q=A.shadow;if(A.map){if(i.spotLightMap[w]=A.map,w++,Q.updateMatrices(A),A.castShadow)D++}if(i.spotLightMatrix[T]=Q.matrix,A.castShadow){let rt=n.get(A);rt.shadowIntensity=Q.intensity,rt.shadowBias=Q.bias,rt.shadowNormalBias=Q.normalBias,rt.shadowRadius=Q.radius,rt.shadowMapSize=Q.mapSize,i.spotShadow[T]=rt,i.spotShadowMap[T]=gt,_++}T++}else if(A.isRectAreaLight){let Z=e.get(A);Z.color.copy(j).multiplyScalar(tt),Z.halfWidth.set(A.width*0.5,0,0),Z.halfHeight.set(0,A.height*0.5,0),i.rectArea[v]=Z,v++}else if(A.isPointLight){let Z=e.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),Z.distance=A.distance,Z.decay=A.decay,A.castShadow){let Q=A.shadow,rt=n.get(A);rt.shadowIntensity=Q.intensity,rt.shadowBias=Q.bias,rt.shadowNormalBias=Q.normalBias,rt.shadowRadius=Q.radius,rt.shadowMapSize=Q.mapSize,rt.shadowCameraNear=Q.camera.near,rt.shadowCameraFar=Q.camera.far,i.pointShadow[f]=rt,i.pointShadowMap[f]=gt,i.pointShadowMatrix[f]=A.shadow.matrix,C++}i.point[f]=Z,f++}else if(A.isHemisphereLight){let Z=e.get(A);Z.skyColor.copy(A.color).multiplyScalar(tt),Z.groundColor.copy(A.groundColor).multiplyScalar(tt),i.hemi[S]=Z,S++}}if(v>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=It.LTC_FLOAT_1,i.rectAreaLTC2=It.LTC_FLOAT_2;else i.rectAreaLTC1=It.LTC_HALF_1,i.rectAreaLTC2=It.LTC_HALF_2;i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;let U=i.hash;if(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==T||U.rectAreaLength!==v||U.hemiLength!==S||U.numSunShadows!==x||U.numDirectionalShadows!==E||U.numPointShadows!==C||U.numSpotShadows!==_||U.numSpotMaps!==w||U.numLightProbes!==q)i.sun.length=m,i.directional.length=p,i.spot.length=T,i.rectArea.length=v,i.point.length=f,i.hemi.length=S,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=q,U.sunLength=m,U.directionalLength=p,U.pointLength=f,U.spotLength=T,U.rectAreaLength=v,U.hemiLength=S,U.numSunShadows=x,U.numDirectionalShadows=E,U.numPointShadows=C,U.numSpotShadows=_,U.numSpotMaps=w,U.numLightProbes=q,i.version=Sg++}function l(c,d){let u=0,h=0,m=0,x=0,b=0,p=0,f=d.matrixWorldInverse;for(let T=0,v=c.length;T<v;T++){let S=c[T];if(S.isSunLight){let E=i.sun[u];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),u++}else if(S.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(S.isSpotLight){let E=i.spot[x];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),x++}else if(S.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(S.width*0.5,0,0),E.halfHeight.set(0,S.height*0.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){let E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:i}}function Sh(t){let e=new bg(t),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){if(u.isLightProbeGrid)s.push(u);else n.push(u)}function o(u){i.push(u)}function l(){e.setup(n),s.sort((u,h)=>u.priority-h.priority||u.id-h.id)}function c(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wg(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Sh(t),e.set(s,[o]);else if(r>=a.length)o=new Sh(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`,Ag=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Rg=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Mh=new fe,Ps=new N,sl=new N;function Cg(t,e,n){let i=new hi,s=new mt,r=new mt,a=new we,o=new Bo,l=new zo,c={},d=n.maxTextureSize,u={[Hi]:He,[He]:Hi,[je]:je},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Tg,fragmentShader:Eg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ze;x.setAttribute("position",new vn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let b=new ce(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let f=this.type;this.render=function(C,_,w){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(C.length===0)return;if(this.type===Yl)qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xs;let D=t.getRenderTarget(),q=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),V=t.state;if(V.setBlending(di),V.buffers.depth.getReversed()===!0)V.buffers.color.setClear(0,0,0,0);else V.buffers.color.setClear(1,1,1,1);V.buffers.depth.setTest(!0),V.setScissorTest(!1);let st=f!==this.type;if(st)_.traverse(function(A){if(A.material)if(Array.isArray(A.material))A.material.forEach((j)=>j.needsUpdate=!0);else A.material.needsUpdate=!0});for(let A=0,j=C.length;A<j;A++){let tt=C[A],G=tt.shadow;if(G===void 0){qt("WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let gt=G.getFrameExtents();if(s.multiply(gt),r.copy(G.mapSize),s.x>d||s.y>d){if(s.x>d)r.x=Math.floor(d/gt.x),s.x=r.x*gt.x,G.mapSize.x=r.x;if(s.y>d)r.y=Math.floor(d/gt.y),s.y=r.y*gt.y,G.mapSize.y=r.y}let Z=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Z,G.map===null||st===!0){if(G.map!==null){if(G.map.depthTexture!==null)G.map.depthTexture.dispose(),G.map.depthTexture=null;G.map.dispose()}if(this.type===Gi){if(tt.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new on(s.x,s.y,{format:pi,type:Mn,minFilter:an,magFilter:an,generateMipmaps:!1}),G.map.texture.name=tt.name+".shadowMap",G.map.depthTexture=new Kn(s.x,s.y,Ln),G.map.depthTexture.name=tt.name+".shadowMapDepth",G.map.depthTexture.format=Xi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qn,G.map.depthTexture.magFilter=qn}else{if(tt.isPointLight)G.map=new qr(s.x),G.map.depthTexture=new Lr(s.x,Zn);else G.map=new on(s.x,s.y),G.map.depthTexture=new Kn(s.x,s.y,Zn);if(G.map.depthTexture.name=tt.name+".shadowMap",G.map.depthTexture.format=Xi,this.type===xs)G.map.depthTexture.compareFunction=Z?So:yo,G.map.depthTexture.minFilter=an,G.map.depthTexture.magFilter=an;else G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qn,G.map.depthTexture.magFilter=qn}G.camera.updateProjectionMatrix()}if(G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y))G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();if(tt.isPointLight!==!0)G.updateMatrices(tt,w);let rt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:w.layers;for(let bt=0;bt<Q;bt++){let it=G.getCamera(bt);if(tt.isPointLight){let{camera:ft,matrix:vt}=G,zt=tt.distance||ft.far;if(zt!==ft.far)ft.far=zt,ft.updateProjectionMatrix();Ps.setFromMatrixPosition(tt.matrixWorld),ft.position.copy(Ps),sl.copy(ft.position),sl.add(Ag[bt]),ft.up.copy(Rg[bt]),ft.lookAt(sl),ft.updateMatrixWorld(),vt.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Mh.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Mh,ft.coordinateSystem,ft.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,bt),t.clear();else{if(bt===0)t.setRenderTarget(G.map),t.clear();let ft=G.getViewport(bt);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),V.viewport(a)}i=G.getFrustum(bt),S(_,w,it,tt,rt,this.type)}if(G.isPointLightShadow!==!0&&this.type===Gi)T(G,w);G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(D,q,U)};function T(C,_){let w=e.update(b);if(h.defines.VSM_SAMPLES!==C.blurSamples)h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new on(s.x,s.y,{format:pi,type:Mn});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(_,null,w,h,b,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(_,null,w,m,b,null)}function v(C,_,w,D){let q=null,U=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)q=U;else if(q=w.isPointLight===!0?l:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let V=q.uuid,st=_.uuid,A=c[V];if(A===void 0)A={},c[V]=A;let j=A[st];if(j===void 0)j=q.clone(),A[st]=j,_.addEventListener("dispose",E);q=j}if(q.visible=_.visible,q.wireframe=_.wireframe,D===Gi)q.side=_.shadowSide!==null?_.shadowSide:_.side;else q.side=_.shadowSide!==null?_.shadowSide:u[_.side];if(q.alphaMap=_.alphaMap,q.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,q.map=_.map,q.clipShadows=_.clipShadows,q.clippingPlanes=_.clippingPlanes,q.clipIntersection=_.clipIntersection,q.displacementMap=_.displacementMap,q.displacementScale=_.displacementScale,q.displacementBias=_.displacementBias,q.wireframeLinewidth=_.wireframeLinewidth,q.linewidth=_.linewidth,w.isPointLight===!0&&q.isMeshDistanceMaterial===!0){let V=t.properties.get(q);V.light=w}return q}function S(C,_,w,D,q,U){if(C.visible===!1)return;if(C.layers.test(q)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&U===Gi)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);let A=e.update(C),j=C.material;if(Array.isArray(j)){let tt=A.groups;for(let G=0,gt=tt.length;G<gt;G++){let Z=tt[G],Q=j[Z.materialIndex];if(Q&&Q.visible){let rt=v(C,Q,D,U);C.onBeforeShadow(t,C,_,w,A,rt,Z),t.renderBufferDirect(w,null,A,rt,C,Z),C.onAfterShadow(t,C,_,w,A,rt,Z)}}}else if(j.visible){let tt=v(C,j,D,U);C.onBeforeShadow(t,C,_,w,A,tt,null),t.renderBufferDirect(w,null,A,tt,C,null),C.onAfterShadow(t,C,_,w,A,tt,null)}}}let st=C.children;for(let A=0,j=st.length;A<j;A++)S(st[A],_,w,D,q,U)}function E(C){C.target.removeEventListener("dispose",E);for(let w in c){let D=c[w],q=C.target.uuid;if(q in D)D[q].dispose(),delete D[q]}}}function Ig(t,e){function n(){let R=!1,nt=new we,X=null,ht=new we(0,0,0,0);return{setMask:function(ut){if(X!==ut&&!R)t.colorMask(ut,ut,ut,ut),X=ut},setLocked:function(ut){R=ut},setClear:function(ut,xt,Ht,kt,Rt){if(Rt===!0)ut*=kt,xt*=kt,Ht*=kt;if(nt.set(ut,xt,Ht,kt),ht.equals(nt)===!1)t.clearColor(ut,xt,Ht,kt),ht.copy(nt)},reset:function(){R=!1,X=null,ht.set(-1,0,0,0)}}}function i(){let R=!1,nt=!1,X=null,ht=null,ut=null;return{setReversed:function(xt){if(nt!==xt){let Ht=e.get("EXT_clip_control");if(xt)Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT);else Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);nt=xt;let kt=ut;ut=null,this.setClear(kt)}},getReversed:function(){return nt},setTest:function(xt){if(xt)At(t.DEPTH_TEST);else Xt(t.DEPTH_TEST)},setMask:function(xt){if(X!==xt&&!R)t.depthMask(xt),X=xt},setFunc:function(xt){if(nt)xt=Hc[xt];if(ht!==xt){switch(xt){case pc:t.depthFunc(t.NEVER);break;case mc:t.depthFunc(t.ALWAYS);break;case gc:t.depthFunc(t.LESS);break;case Aa:t.depthFunc(t.LEQUAL);break;case _c:t.depthFunc(t.EQUAL);break;case xc:t.depthFunc(t.GEQUAL);break;case vc:t.depthFunc(t.GREATER);break;case yc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ht=xt}},setLocked:function(xt){R=xt},setClear:function(xt){if(ut!==xt){if(ut=xt,nt)xt=1-xt;t.clearDepth(xt)}},reset:function(){R=!1,X=null,ht=null,ut=null,nt=!1}}}function s(){let R=!1,nt=null,X=null,ht=null,ut=null,xt=null,Ht=null,kt=null,Rt=null;return{setTest:function(Wt){if(!R)if(Wt)At(t.STENCIL_TEST);else Xt(t.STENCIL_TEST)},setMask:function(Wt){if(nt!==Wt&&!R)t.stencilMask(Wt),nt=Wt},setFunc:function(Wt,jt,Ct){if(X!==Wt||ht!==jt||ut!==Ct)t.stencilFunc(Wt,jt,Ct),X=Wt,ht=jt,ut=Ct},setOp:function(Wt,jt,Ct){if(xt!==Wt||Ht!==jt||kt!==Ct)t.stencilOp(Wt,jt,Ct),xt=Wt,Ht=jt,kt=Ct},setLocked:function(Wt){R=Wt},setClear:function(Wt){if(Rt!==Wt)t.clearStencil(Wt),Rt=Wt},reset:function(){R=!1,nt=null,X=null,ht=null,ut=null,xt=null,Ht=null,kt=null,Rt=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,d={},u={},h={},m=new WeakMap,x=[],b=null,p=!1,f=null,T=null,v=null,S=null,E=null,C=null,_=null,w=new Kt(0,0,0),D=0,q=!1,U=null,V=null,st=null,A=null,j=null,tt=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,gt=0,Z=t.getParameter(t.VERSION);if(Z.indexOf("WebGL")!==-1)gt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=gt>=1;else if(Z.indexOf("OpenGL ES")!==-1)gt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=gt>=2;let Q=null,rt={},bt=t.getParameter(t.SCISSOR_BOX),it=t.getParameter(t.VIEWPORT),ft=new we().fromArray(bt),vt=new we().fromArray(it);function zt(R,nt,X,ht){let ut=new Uint8Array(4),xt=t.createTexture();t.bindTexture(R,xt),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ht=0;Ht<X;Ht++)if(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)t.texImage3D(nt,0,t.RGBA,1,1,ht,0,t.RGBA,t.UNSIGNED_BYTE,ut);else t.texImage2D(nt+Ht,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ut);return xt}let Dt={};Dt[t.TEXTURE_2D]=zt(t.TEXTURE_2D,t.TEXTURE_2D,1),Dt[t.TEXTURE_CUBE_MAP]=zt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[t.TEXTURE_2D_ARRAY]=zt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Dt[t.TEXTURE_3D]=zt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),At(t.DEPTH_TEST),a.setFunc(Aa),yt(!1),Nt(wa),At(t.CULL_FACE),pt(di);function At(R){if(d[R]!==!0)t.enable(R),d[R]=!0}function Xt(R){if(d[R]!==!1)t.disable(R),d[R]=!1}function B(R,nt){if(h[R]!==nt){if(t.bindFramebuffer(R,nt),h[R]=nt,R===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=nt;if(R===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=nt;return!0}return!1}function at(R,nt){let X=x,ht=!1;if(R){if(X=m.get(nt),X===void 0)X=[],m.set(nt,X);let ut=R.textures;if(X.length!==ut.length||X[0]!==t.COLOR_ATTACHMENT0){for(let xt=0,Ht=ut.length;xt<Ht;xt++)X[xt]=t.COLOR_ATTACHMENT0+xt;X.length=ut.length,ht=!0}}else if(X[0]!==t.BACK)X[0]=t.BACK,ht=!0;if(ht)t.drawBuffers(X)}function _t(R){if(b!==R)return t.useProgram(R),b=R,!0;return!1}let et={[Wi]:t.FUNC_ADD,[Jl]:t.FUNC_SUBTRACT,[$l]:t.FUNC_REVERSE_SUBTRACT};et[Kl]=t.MIN,et[Ql]=t.MAX;let lt={[jl]:t.ZERO,[tc]:t.ONE,[ec]:t.SRC_COLOR,[ic]:t.SRC_ALPHA,[cc]:t.SRC_ALPHA_SATURATE,[oc]:t.DST_COLOR,[rc]:t.DST_ALPHA,[nc]:t.ONE_MINUS_SRC_COLOR,[sc]:t.ONE_MINUS_SRC_ALPHA,[lc]:t.ONE_MINUS_DST_COLOR,[ac]:t.ONE_MINUS_DST_ALPHA,[hc]:t.CONSTANT_COLOR,[uc]:t.ONE_MINUS_CONSTANT_COLOR,[dc]:t.CONSTANT_ALPHA,[fc]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(R,nt,X,ht,ut,xt,Ht,kt,Rt,Wt){if(R===di){if(p===!0)Xt(t.BLEND),p=!1;return}if(p===!1)At(t.BLEND),p=!0;if(R!==Zl){if(R!==f||Wt!==q){if(T!==Wi||E!==Wi)t.blendEquation(t.FUNC_ADD),T=Wi,E=Wi;if(Wt)switch(R){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dr:t.blendFunc(t.ONE,t.ONE);break;case Ta:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ea:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Zt("WebGLState: Invalid blending: ",R);break}else switch(R){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ta:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ea:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",R);break}v=null,S=null,C=null,_=null,w.set(0,0,0),D=0,f=R,q=Wt}return}if(ut=ut||nt,xt=xt||X,Ht=Ht||ht,nt!==T||ut!==E)t.blendEquationSeparate(et[nt],et[ut]),T=nt,E=ut;if(X!==v||ht!==S||xt!==C||Ht!==_)t.blendFuncSeparate(lt[X],lt[ht],lt[xt],lt[Ht]),v=X,S=ht,C=xt,_=Ht;if(kt.equals(w)===!1||Rt!==D)t.blendColor(kt.r,kt.g,kt.b,Rt),w.copy(kt),D=Rt;f=R,q=!1}function St(R,nt){R.side===je?Xt(t.CULL_FACE):At(t.CULL_FACE);let X=R.side===He;if(nt)X=!X;yt(X),R.blending===vs&&R.transparent===!1?pt(di):pt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ht=R.stencilWrite;if(o.setTest(ht),ht)o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass);Yt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?At(t.SAMPLE_ALPHA_TO_COVERAGE):Xt(t.SAMPLE_ALPHA_TO_COVERAGE)}function yt(R){if(U!==R){if(R)t.frontFace(t.CW);else t.frontFace(t.CCW);U=R}}function Nt(R){if(R!==Xl){if(At(t.CULL_FACE),R!==V)if(R===wa)t.cullFace(t.BACK);else if(R===ql)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Xt(t.CULL_FACE);V=R}function Ut(R){if(R!==st){if(G)t.lineWidth(R);st=R}}function Yt(R,nt,X){if(R){if(At(t.POLYGON_OFFSET_FILL),A!==nt||j!==X){if(A=nt,j=X,a.getReversed())nt=-nt,X=-X;t.polygonOffset(nt,X)}}else Xt(t.POLYGON_OFFSET_FILL)}function Jt(R){if(R)At(t.SCISSOR_TEST);else Xt(t.SCISSOR_TEST)}function ne(R){if(R===void 0)R=t.TEXTURE0+tt-1;if(Q!==R)t.activeTexture(R),Q=R}function I(R,nt,X){if(X===void 0)if(Q===null)X=t.TEXTURE0+tt-1;else X=Q;let ht=rt[X];if(ht===void 0)ht={type:void 0,texture:void 0},rt[X]=ht;if(ht.type!==R||ht.texture!==nt){if(Q!==X)t.activeTexture(X),Q=X;t.bindTexture(R,nt||Dt[R]),ht.type=R,ht.texture=nt}}function ge(){let R=rt[Q];if(R!==void 0&&R.type!==void 0)t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0}function $t(){try{t.compressedTexImage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function Se(){try{t.compressedTexImage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function wt(){try{t.texSubImage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function re(){try{t.texSubImage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function L(){try{t.compressedTexSubImage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function Pt(){try{t.texStorage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function M(){try{t.texStorage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function g(){try{t.texImage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function F(){try{t.texImage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function k(R){if(u[R]!==void 0)return u[R];else return t.getParameter(R)}function K(R,nt){if(u[R]!==nt)t.pixelStorei(R,nt),u[R]=nt}function ct(R){if(ft.equals(R)===!1)t.scissor(R.x,R.y,R.z,R.w),ft.copy(R)}function ot(R){if(vt.equals(R)===!1)t.viewport(R.x,R.y,R.z,R.w),vt.copy(R)}function O(R,nt){let X=c.get(nt);if(X===void 0)X=new WeakMap,c.set(nt,X);let ht=X.get(R);if(ht===void 0)ht=t.getUniformBlockIndex(nt,R.name),t.uniformBlockBinding(nt,ht,ht),X.set(R,ht)}function W(R,nt,X){let ut=c.get(nt).get(R);if(l[ut]!==X)t.bindBufferBase(t.UNIFORM_BUFFER,ut,X),l[ut]=X}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},u={},Q=null,rt={},h={},l={},m=new WeakMap,x=[],b=null,p=!1,f=null,T=null,v=null,S=null,E=null,C=null,_=null,w=new Kt(0,0,0),D=0,q=!1,U=null,V=null,st=null,A=null,j=null,ft.set(0,0,t.canvas.width,t.canvas.height),vt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:At,disable:Xt,bindFramebuffer:B,drawBuffers:at,useProgram:_t,setBlending:pt,setMaterial:St,setFlipSided:yt,setCullFace:Nt,setLineWidth:Ut,setPolygonOffset:Yt,setScissorTest:Jt,activeTexture:ne,bindTexture:I,unbindTexture:ge,compressedTexImage2D:$t,compressedTexImage3D:Se,texImage2D:g,texImage3D:F,pixelStorei:K,getParameter:k,updateUBOMapping:O,uniformBlockBinding:W,texStorage2D:Pt,texStorage3D:M,texSubImage2D:wt,texSubImage3D:re,compressedTexSubImage2D:L,compressedTexSubImage3D:J,scissor:ct,viewport:ot,reset:dt}}function Pg(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,d=new WeakMap,u=new Set,h,m=new WeakMap,x=new Set,b=new FinalizationRegistry((M)=>x.delete(M)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function f(M,g){return p?new OffscreenCanvas(M,g):ps("canvas")}function T(M,g,F){let k=1,K=Pt(M);if(K.width>F||K.height>F)k=F/Math.max(K.width,K.height);if(k<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let ct=Math.floor(k*K.width),ot=Math.floor(k*K.height);if(h===void 0)h=f(ct,ot);let O=g?f(ct,ot):h;return O.width=ct,O.height=ot,O.getContext("2d").drawImage(M,0,0,ct,ot),qt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ct+"x"+ot+")."),O}else{if("data"in M)qt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+").");return M}return M}function v(M){return M.generateMipmaps}function S(M){t.generateMipmap(M)}function E(M){if(M.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function C(M,g,F,k,K,ct=!1){if(M!==null){if(t[M]!==void 0)return t[M];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ot;if(k){if(ot=e.get("EXT_texture_norm16"),!ot)qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let O=g;if(g===t.RED){if(F===t.FLOAT)O=t.R32F;if(F===t.HALF_FLOAT)O=t.R16F;if(F===t.UNSIGNED_BYTE)O=t.R8;if(F===t.UNSIGNED_SHORT&&ot)O=ot.R16_EXT;if(F===t.SHORT&&ot)O=ot.R16_SNORM_EXT}if(g===t.RED_INTEGER){if(F===t.UNSIGNED_BYTE)O=t.R8UI;if(F===t.UNSIGNED_SHORT)O=t.R16UI;if(F===t.UNSIGNED_INT)O=t.R32UI;if(F===t.BYTE)O=t.R8I;if(F===t.SHORT)O=t.R16I;if(F===t.INT)O=t.R32I}if(g===t.RG){if(F===t.FLOAT)O=t.RG32F;if(F===t.HALF_FLOAT)O=t.RG16F;if(F===t.UNSIGNED_BYTE)O=t.RG8;if(F===t.UNSIGNED_SHORT&&ot)O=ot.RG16_EXT;if(F===t.SHORT&&ot)O=ot.RG16_SNORM_EXT}if(g===t.RG_INTEGER){if(F===t.UNSIGNED_BYTE)O=t.RG8UI;if(F===t.UNSIGNED_SHORT)O=t.RG16UI;if(F===t.UNSIGNED_INT)O=t.RG32UI;if(F===t.BYTE)O=t.RG8I;if(F===t.SHORT)O=t.RG16I;if(F===t.INT)O=t.RG32I}if(g===t.RGB_INTEGER){if(F===t.UNSIGNED_BYTE)O=t.RGB8UI;if(F===t.UNSIGNED_SHORT)O=t.RGB16UI;if(F===t.UNSIGNED_INT)O=t.RGB32UI;if(F===t.BYTE)O=t.RGB8I;if(F===t.SHORT)O=t.RGB16I;if(F===t.INT)O=t.RGB32I}if(g===t.RGBA_INTEGER){if(F===t.UNSIGNED_BYTE)O=t.RGBA8UI;if(F===t.UNSIGNED_SHORT)O=t.RGBA16UI;if(F===t.UNSIGNED_INT)O=t.RGBA32UI;if(F===t.BYTE)O=t.RGBA8I;if(F===t.SHORT)O=t.RGBA16I;if(F===t.INT)O=t.RGBA32I}if(g===t.RGB){if(F===t.UNSIGNED_SHORT&&ot)O=ot.RGB16_EXT;if(F===t.SHORT&&ot)O=ot.RGB16_SNORM_EXT;if(F===t.UNSIGNED_INT_5_9_9_9_REV)O=t.RGB9_E5;if(F===t.UNSIGNED_INT_10F_11F_11F_REV)O=t.R11F_G11F_B10F}if(g===t.RGBA){let W=ct?vo:le.getTransfer(K);if(F===t.FLOAT)O=t.RGBA32F;if(F===t.HALF_FLOAT)O=t.RGBA16F;if(F===t.UNSIGNED_BYTE)O=W===xe?t.SRGB8_ALPHA8:t.RGBA8;if(F===t.UNSIGNED_SHORT&&ot)O=ot.RGBA16_EXT;if(F===t.SHORT&&ot)O=ot.RGBA16_SNORM_EXT;if(F===t.UNSIGNED_SHORT_4_4_4_4)O=t.RGBA4;if(F===t.UNSIGNED_SHORT_5_5_5_1)O=t.RGB5_A1}if(O===t.R16F||O===t.R32F||O===t.RG16F||O===t.RG32F||O===t.RGBA16F||O===t.RGBA32F)e.get("EXT_color_buffer_float");return O}function _(M,g){let F;if(M){if(g===null||g===Zn||g===fi)F=t.DEPTH24_STENCIL8;else if(g===Ln)F=t.DEPTH32F_STENCIL8;else if(g===bs)F=t.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(g===null||g===Zn||g===fi)F=t.DEPTH_COMPONENT24;else if(g===Ln)F=t.DEPTH_COMPONENT32F;else if(g===bs)F=t.DEPTH_COMPONENT16;return F}function w(M,g){if(v(M)===!0||M.isFramebufferTexture&&M.minFilter!==qn&&M.minFilter!==an)return Math.log2(Math.max(g.width,g.height))+1;else if(M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return g.mipmaps.length;else return 1}function D(M){let g=new WeakRef(M);i.get(M).__ref=g,x.add(g),b.register(M,g,g)}function q(M){let g=i.get(M).__ref;if(g===void 0)return;x.delete(g),b.unregister(g)}function U(M){st(M.target)}function V(M){A(M.target)}function st(M){if(M.removeEventListener("dispose",U),q(M),tt(M),M.isVideoTexture)d.delete(M);if(M.isHTMLTexture)u.delete(M)}function A(M){M.removeEventListener("dispose",V),q(M),gt(M)}function j(){for(let M of x){let g=M.deref();if(g===void 0)continue;if(g.isRenderTarget===!0)A(g);else st(g)}x.clear(),u.clear()}function tt(M){let g=i.get(M);if(g.__webglInit===void 0)return;let F=M.source,k=m.get(F);if(k){let K=k[g.__cacheKey];if(K.usedTimes--,K.usedTimes===0)G(M);if(Object.keys(k).length===0)m.delete(F)}i.remove(M)}function G(M){let g=i.get(M);t.deleteTexture(g.__webglTexture);let F=M.source,k=m.get(F);delete k[g.__cacheKey],a.memory.textures--}function gt(M){let g=i.get(M);if(g.__depthDisposeCallback)g.__depthDisposeCallback();let F=M.depthTexture;if(F&&F.renderTarget===M)st(F);if(M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let ct=0;ct<g.__webglFramebuffer[K].length;ct++)t.deleteFramebuffer(g.__webglFramebuffer[K][ct]);else t.deleteFramebuffer(g.__webglFramebuffer[K]);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)t.deleteFramebuffer(g.__webglFramebuffer[K]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer);if(g.__webglMultisampledFramebuffer)t.deleteFramebuffer(g.__webglMultisampledFramebuffer);if(g.__webglColorRenderbuffer){for(let K=0;K<g.__webglColorRenderbuffer.length;K++)if(g.__webglColorRenderbuffer[K])t.deleteRenderbuffer(g.__webglColorRenderbuffer[K])}if(g.__webglDepthRenderbuffer)t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let k=M.textures;for(let K=0,ct=k.length;K<ct;K++){let ot=i.get(k[K]);if(ot.__webglTexture)t.deleteTexture(ot.__webglTexture),a.memory.textures--;i.remove(k[K])}i.remove(M)}let Z=0;function Q(){Z=0}function rt(){return Z}function bt(M){Z=M}function it(){let M=Z;if(M>=s.maxTextures)qt("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures);return Z+=1,M}function ft(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.mipmapsAutoUpdate),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function vt(M,g){let F=i.get(M);if(M.isVideoTexture)L(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){let k=M.image;if(k===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(F,M,g);return}}else if(M.isExternalTexture)F.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+g)}function zt(M,g){let F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){St(F,M,g);return}else if(M.isExternalTexture)F.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+g)}function Dt(M,g){let F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){St(F,M,g);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+g)}function At(M,g){let F=i.get(M);if(M.version>0&&F.__version!==M.version){yt(F,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+g)}let Xt={[mr]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[wc]:t.MIRRORED_REPEAT},B={[qn]:t.NEAREST,[Tc]:t.NEAREST_MIPMAP_NEAREST,[Ms]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[_r]:t.LINEAR_MIPMAP_NEAREST,[Yn]:t.LINEAR_MIPMAP_LINEAR},at={[Nc]:t.NEVER,[Mo]:t.ALWAYS,[Uc]:t.LESS,[yo]:t.LEQUAL,[Fc]:t.EQUAL,[So]:t.GEQUAL,[Oc]:t.GREATER,[Bc]:t.NOTEQUAL};function _t(M,g){if(g.type===Ln&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===an||g.magFilter===_r||g.magFilter===Ms||g.magFilter===Yn||g.minFilter===an||g.minFilter===_r||g.minFilter===Ms||g.minFilter===Yn))qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(M,t.TEXTURE_WRAP_S,Xt[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,Xt[g.wrapT]),M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)t.texParameteri(M,t.TEXTURE_WRAP_R,Xt[g.wrapR]);if(t.texParameteri(M,t.TEXTURE_MAG_FILTER,B[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,B[g.minFilter]),g.compareFunction)t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,at[g.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===qn)return;if(g.minFilter!==Ms&&g.minFilter!==Yn)return;if(g.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function et(M,g){let F=!1;if(M.__webglInit===void 0)M.__webglInit=!0,g.addEventListener("dispose",U),D(g);let k=g.source,K=m.get(k);if(K===void 0)K={},m.set(k,K);let ct=ft(g);if(ct!==M.__cacheKey){if(K[ct]===void 0)K[ct]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0;K[ct].usedTimes++;let ot=K[M.__cacheKey];if(ot!==void 0){if(K[M.__cacheKey].usedTimes--,ot.usedTimes===0)G(g)}M.__cacheKey=ct,M.__webglTexture=K[ct].texture}return F}function lt(M,g,F){return Math.floor(Math.floor(M/F)/g)}function pt(M,g,F,k){let ct=M.updateRanges;if(ct.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,F,k,g.data);else{ct.sort((R,nt)=>R.start-nt.start);let ot=0;for(let R=1;R<ct.length;R++){let nt=ct[ot],X=ct[R],ht=nt.start+nt.count,ut=lt(X.start,g.width,4),xt=lt(nt.start,g.width,4);if(X.start<=ht+1&&ut===xt&&lt(X.start+X.count-1,g.width,4)===ut)nt.count=Math.max(nt.count,X.start+X.count-nt.start);else++ot,ct[ot]=X}ct.length=ot+1;let O=n.getParameter(t.UNPACK_ROW_LENGTH),W=n.getParameter(t.UNPACK_SKIP_PIXELS),dt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let R=0,nt=ct.length;R<nt;R++){let X=ct[R],ht=Math.floor(X.start/4),ut=Math.ceil(X.count/4),xt=ht%g.width,Ht=Math.floor(ht/g.width),kt=ut,Rt=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,xt),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ht),n.texSubImage2D(t.TEXTURE_2D,0,xt,Ht,kt,1,F,k,g.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,O),n.pixelStorei(t.UNPACK_SKIP_PIXELS,W),n.pixelStorei(t.UNPACK_SKIP_ROWS,dt)}}function St(M,g,F){let k=t.TEXTURE_2D;if(g.isDataArrayTexture||g.isCompressedArrayTexture)k=t.TEXTURE_2D_ARRAY;if(g.isData3DTexture)k=t.TEXTURE_3D;let K=et(M,g),ct=g.source;n.bindTexture(k,M.__webglTexture,t.TEXTURE0+F);let ot=i.get(ct);if(ct.version!==ot.__version||K===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Rt=le.getPrimaries(le.workingColorSpace),Wt=g.colorSpace===mi?null:le.getPrimaries(g.colorSpace),jt=g.colorSpace===mi||Rt===Wt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let W=T(g.image,!1,s.maxTextureSize);W=J(g,W);let dt=r.convert(g.format,g.colorSpace),R=r.convert(g.type),nt=C(g.internalFormat,dt,R,g.normalized,g.colorSpace,g.isVideoTexture);_t(k,g);let X,ht=g.mipmaps,ut=g.isVideoTexture!==!0,xt=ot.__version===void 0||K===!0,Ht=ct.dataReady,kt=w(g,W);if(g.isDepthTexture){if(nt=_(g.format===Jn,g.type),xt)if(ut)n.texStorage2D(t.TEXTURE_2D,1,nt,W.width,W.height);else n.texImage2D(t.TEXTURE_2D,0,nt,W.width,W.height,0,dt,R,null)}else if(g.isDataTexture)if(ht.length>0){if(ut&&xt)n.texStorage2D(t.TEXTURE_2D,kt,nt,ht[0].width,ht[0].height);for(let Rt=0,Wt=ht.length;Rt<Wt;Rt++)if(X=ht[Rt],ut){if(Ht)n.texSubImage2D(t.TEXTURE_2D,Rt,0,0,X.width,X.height,dt,R,X.data)}else n.texImage2D(t.TEXTURE_2D,Rt,nt,X.width,X.height,0,dt,R,X.data);g.generateMipmaps=!1}else if(ut){if(xt)n.texStorage2D(t.TEXTURE_2D,kt,nt,W.width,W.height);if(Ht)pt(g,W,dt,R)}else n.texImage2D(t.TEXTURE_2D,0,nt,W.width,W.height,0,dt,R,W.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){if(ut&&xt)n.texStorage3D(t.TEXTURE_2D_ARRAY,kt,nt,ht[0].width,ht[0].height,W.depth);for(let Rt=0,Wt=ht.length;Rt<Wt;Rt++)if(X=ht[Rt],g.format!==Dn)if(dt!==null)if(ut){if(Ht)if(g.layerUpdates.size>0){let jt=nl(X.width,X.height,g.format,g.type);for(let Ct of g.layerUpdates){let ue=X.data.subarray(Ct*jt/X.data.BYTES_PER_ELEMENT,(Ct+1)*jt/X.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Rt,0,0,Ct,X.width,X.height,1,dt,ue)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Rt,0,0,0,X.width,X.height,W.depth,dt,X.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Rt,nt,X.width,X.height,W.depth,0,X.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ut){if(Ht)n.texSubImage3D(t.TEXTURE_2D_ARRAY,Rt,0,0,0,X.width,X.height,W.depth,dt,R,X.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,Rt,nt,X.width,X.height,W.depth,0,dt,R,X.data);if(g.layerUpdates.size>0)g.clearLayerUpdates()}else{if(ut&&xt)n.texStorage2D(t.TEXTURE_2D,kt,nt,ht[0].width,ht[0].height);for(let Rt=0,Wt=ht.length;Rt<Wt;Rt++)if(X=ht[Rt],g.format!==Dn)if(dt!==null)if(ut){if(Ht)n.compressedTexSubImage2D(t.TEXTURE_2D,Rt,0,0,X.width,X.height,dt,X.data)}else n.compressedTexImage2D(t.TEXTURE_2D,Rt,nt,X.width,X.height,0,X.data);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ut){if(Ht)n.texSubImage2D(t.TEXTURE_2D,Rt,0,0,X.width,X.height,dt,R,X.data)}else n.texImage2D(t.TEXTURE_2D,Rt,nt,X.width,X.height,0,dt,R,X.data)}else if(g.isDataArrayTexture)if(ut){if(xt)n.texStorage3D(t.TEXTURE_2D_ARRAY,kt,nt,W.width,W.height,W.depth);if(Ht)if(g.layerUpdates.size>0){let Rt=nl(W.width,W.height,g.format,g.type);for(let Wt of g.layerUpdates){let jt=W.data.subarray(Wt*Rt/W.data.BYTES_PER_ELEMENT,(Wt+1)*Rt/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Wt,W.width,W.height,1,dt,R,jt)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,dt,R,W.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,nt,W.width,W.height,W.depth,0,dt,R,W.data);else if(g.isData3DTexture)if(ut){if(xt)n.texStorage3D(t.TEXTURE_3D,kt,nt,W.width,W.height,W.depth);if(Ht)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,dt,R,W.data)}else n.texImage3D(t.TEXTURE_3D,0,nt,W.width,W.height,W.depth,0,dt,R,W.data);else if(g.isFramebufferTexture){if(xt)if(ut)n.texStorage2D(t.TEXTURE_2D,kt,nt,W.width,W.height);else{let Rt=W.width,Wt=W.height;for(let jt=0;jt<kt;jt++)n.texImage2D(t.TEXTURE_2D,jt,nt,Rt,Wt,0,dt,R,null),Rt>>=1,Wt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){let Rt=t.canvas;if(!Rt.hasAttribute("layoutsubtree"))Rt.setAttribute("layoutsubtree","true");if(W.parentNode!==Rt){Rt.appendChild(W),u.add(g),Rt.onpaint=(Wt)=>{let jt=Wt.changedElements;for(let Ct of u)if(jt.includes(Ct.image))Ct.needsUpdate=!0},Rt.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,W);else{let{RGBA:jt,RGBA:Ct,UNSIGNED_BYTE:ue}=t;t.texElementImage2D(t.TEXTURE_2D,0,jt,Ct,ue,W)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ht.length>0){if(ut&&xt){let Rt=Pt(ht[0]);n.texStorage2D(t.TEXTURE_2D,kt,nt,Rt.width,Rt.height)}for(let Rt=0,Wt=ht.length;Rt<Wt;Rt++)if(X=ht[Rt],ut){if(Ht)n.texSubImage2D(t.TEXTURE_2D,Rt,0,0,dt,R,X)}else n.texImage2D(t.TEXTURE_2D,Rt,nt,dt,R,X);g.generateMipmaps=!1}else if(ut){if(xt){let Rt=Pt(W);n.texStorage2D(t.TEXTURE_2D,kt,nt,Rt.width,Rt.height)}if(Ht)n.texSubImage2D(t.TEXTURE_2D,0,0,0,dt,R,W)}else n.texImage2D(t.TEXTURE_2D,0,nt,dt,R,W);if(v(g)&&g.mipmapsAutoUpdate===!0)S(k);if(ot.__version=ct.version,g.onUpdate)g.onUpdate(g)}M.__version=g.version}function yt(M,g,F){if(g.image.length!==6)return;let k=et(M,g),K=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+F);let ct=i.get(K);if(K.version!==ct.__version||k===!0){n.activeTexture(t.TEXTURE0+F);let ot=le.getPrimaries(le.workingColorSpace),O=g.colorSpace===mi?null:le.getPrimaries(g.colorSpace),W=g.colorSpace===mi||ot===O?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let dt=g.isCompressedTexture||g.image[0].isCompressedTexture,R=g.image[0]&&g.image[0].isDataTexture,nt=[];for(let Ct=0;Ct<6;Ct++){if(!dt&&!R)nt[Ct]=T(g.image[Ct],!0,s.maxCubemapSize);else nt[Ct]=R?g.image[Ct].image:g.image[Ct];nt[Ct]=J(g,nt[Ct])}let X=nt[0],ht=r.convert(g.format,g.colorSpace),ut=r.convert(g.type),xt=C(g.internalFormat,ht,ut,g.normalized,g.colorSpace),Ht=g.isVideoTexture!==!0,kt=ct.__version===void 0||k===!0,Rt=K.dataReady,Wt=w(g,X);_t(t.TEXTURE_CUBE_MAP,g);let jt;if(g.isDepthTexture){if(xt=_(g.format===Jn,g.type),kt)if(Ht)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,xt,X.width,X.height);else for(let Ct=0;Ct<6;Ct++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,xt,X.width,X.height,0,ht,ut,null)}else if(dt){if(Ht&&kt)n.texStorage2D(t.TEXTURE_CUBE_MAP,Wt,xt,X.width,X.height);for(let Ct=0;Ct<6;Ct++){jt=nt[Ct].mipmaps;for(let ue=0;ue<jt.length;ue++){let Ee=jt[ue];if(g.format!==Dn)if(ht!==null)if(Ht){if(Rt)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ue,0,0,Ee.width,Ee.height,ht,Ee.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ue,xt,Ee.width,Ee.height,0,Ee.data);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Ht){if(Rt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ue,0,0,Ee.width,Ee.height,ht,ut,Ee.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ue,xt,Ee.width,Ee.height,0,ht,ut,Ee.data)}}}else{if(jt=g.mipmaps,Ht&&kt){if(jt.length>0)Wt++;let Ct=Pt(nt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Wt,xt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(R){if(Ht){if(Rt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,nt[Ct].width,nt[Ct].height,ht,ut,nt[Ct].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,xt,nt[Ct].width,nt[Ct].height,0,ht,ut,nt[Ct].data);for(let ue=0;ue<jt.length;ue++){let Ae=jt[ue].image[Ct].image;if(Ht){if(Rt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ue+1,0,0,Ae.width,Ae.height,ht,ut,Ae.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ue+1,xt,Ae.width,Ae.height,0,ht,ut,Ae.data)}}else{if(Ht){if(Rt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,ht,ut,nt[Ct])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,xt,ht,ut,nt[Ct]);for(let ue=0;ue<jt.length;ue++){let Ee=jt[ue];if(Ht){if(Rt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ue+1,0,0,ht,ut,Ee.image[Ct])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ue+1,xt,ht,ut,Ee.image[Ct])}}}if(v(g)&&g.mipmapsAutoUpdate===!0)S(t.TEXTURE_CUBE_MAP);if(ct.__version=K.version,g.onUpdate)g.onUpdate(g)}M.__version=g.version}function Nt(M,g,F,k,K,ct){let ot=r.convert(F.format,F.colorSpace),O=r.convert(F.type),W=C(F.internalFormat,ot,O,F.normalized,F.colorSpace),dt=i.get(g),R=i.get(F);if(R.__renderTarget=g,!dt.__hasExternalTextures){let nt=Math.max(1,g.width>>ct),X=Math.max(1,g.height>>ct);if(K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY)n.texImage3D(K,ct,W,nt,X,g.depth,0,ot,O,null);else n.texImage2D(K,ct,W,nt,X,0,ot,O,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,M),re(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,K,R.__webglTexture,0,wt(g));else if(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,k,K,R.__webglTexture,ct);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ut(M,g,F){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){let k=g.depthTexture,K=k&&k.isDepthTexture?k.type:null,ct=_(g.stencilBuffer,K),ot=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(re(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,wt(g),ct,g.width,g.height);else if(F)t.renderbufferStorageMultisample(t.RENDERBUFFER,wt(g),ct,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,ct,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ot,t.RENDERBUFFER,M)}else{let k=g.textures;for(let K=0;K<k.length;K++){let ct=k[K],ot=r.convert(ct.format,ct.colorSpace),O=r.convert(ct.type),W=C(ct.internalFormat,ot,O,ct.normalized,ct.colorSpace);if(re(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,wt(g),W,g.width,g.height);else if(F)t.renderbufferStorageMultisample(t.RENDERBUFFER,wt(g),W,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,W,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Yt(M,g,F){let k=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(g.depthTexture);K.__renderTarget=g;let ct=k?g.depthTexture.image[0]:g.depthTexture.image;if(!K.__webglTexture||ct.width!==g.width||ct.height!==g.height)ct.width=g.width,ct.height=g.height,g.depthTexture.needsUpdate=!0;if(k)At(g.depthTexture,0);else vt(g.depthTexture,0);let ot=K.__webglTexture,O=wt(g),W=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,dt=g.depthTexture.format===Jn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Xi)if(re(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,dt,W,ot,0,O);else t.framebufferTexture2D(t.FRAMEBUFFER,dt,W,ot,0);else if(g.depthTexture.format===Jn)if(re(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,dt,W,ot,0,O);else t.framebufferTexture2D(t.FRAMEBUFFER,dt,W,ot,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(M){let g=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){let k=M.depthTexture;if(g.__depthDisposeCallback)g.__depthDisposeCallback();if(k){let K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=k}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)Yt(g.__webglFramebuffer[k],M,k);else if(M.texture.mipmaps.length>0)Yt(g.__webglFramebuffer[0],M,0);else Yt(g.__webglFramebuffer,M,0);else if(F){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=t.createRenderbuffer(),Ut(g.__webglDepthbuffer[k],M,!1);else{let K=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=g.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ct)}}else{if(M.texture.mipmaps.length>0)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer);if(g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Ut(g.__webglDepthbuffer,M,!1);else{let K=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ct)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(M,g,F){let k=i.get(M);if(g!==void 0)Nt(k.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(F!==void 0)Jt(M)}function I(M){let g=M.texture,F=i.get(M),k=i.get(g);M.addEventListener("dispose",V),D(M);let K=M.textures,ct=M.isWebGLCubeRenderTarget===!0,ot=K.length>1;if(!ot){if(k.__webglTexture===void 0)k.__webglTexture=t.createTexture();k.__version=g.version,a.memory.textures++}if(ct){F.__webglFramebuffer=[];for(let O=0;O<6;O++)if(g.mipmaps.length>0){F.__webglFramebuffer[O]=[];for(let W=0;W<g.mipmaps.length;W++)F.__webglFramebuffer[O][W]=t.createFramebuffer()}else F.__webglFramebuffer[O]=t.createFramebuffer()}else{if(g.mipmaps.length>0){F.__webglFramebuffer=[];for(let O=0;O<g.mipmaps.length;O++)F.__webglFramebuffer[O]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ot)for(let O=0,W=K.length;O<W;O++){let dt=i.get(K[O]);if(dt.__webglTexture===void 0)dt.__webglTexture=t.createTexture(),a.memory.textures++}if(M.samples>0&&re(M)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let O=0;O<K.length;O++){let W=K[O];F.__webglColorRenderbuffer[O]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[O]);let dt=r.convert(W.format,W.colorSpace),R=r.convert(W.type),nt=C(W.internalFormat,dt,R,W.normalized,W.colorSpace,M.isXRRenderTarget===!0),X=wt(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,X,nt,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+O,t.RENDERBUFFER,F.__webglColorRenderbuffer[O])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer)F.__webglDepthRenderbuffer=t.createRenderbuffer(),Ut(F.__webglDepthRenderbuffer,M,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ct){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),_t(t.TEXTURE_CUBE_MAP,g);for(let O=0;O<6;O++)if(g.mipmaps.length>0)for(let W=0;W<g.mipmaps.length;W++)Nt(F.__webglFramebuffer[O][W],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+O,W);else Nt(F.__webglFramebuffer[O],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);if(v(g))S(t.TEXTURE_CUBE_MAP);else if(g.mipmaps.length>0)t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,g.mipmaps.length-1);n.unbindTexture()}else if(ot){for(let O=0,W=K.length;O<W;O++){let dt=K[O],R=i.get(dt),nt=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)nt=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(nt,R.__webglTexture),_t(nt,dt),Nt(F.__webglFramebuffer,M,dt,t.COLOR_ATTACHMENT0+O,nt,0),v(dt))S(nt)}n.unbindTexture()}else{let O=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)O=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(O,k.__webglTexture),_t(O,g),g.mipmaps.length>0)for(let W=0;W<g.mipmaps.length;W++)Nt(F.__webglFramebuffer[W],M,g,t.COLOR_ATTACHMENT0,O,W);else Nt(F.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,O,0);if(v(g))S(O);else if(g.mipmaps.length>0)t.texParameteri(O,t.TEXTURE_MAX_LEVEL,g.mipmaps.length-1);n.unbindTexture()}if(M.depthBuffer)Jt(M)}function ge(M){let g=M.textures;for(let F=0,k=g.length;F<k;F++){let K=g[F];if(v(K)&&K.mipmapsAutoUpdate===!0){let ct=E(M),ot=i.get(K).__webglTexture;n.bindTexture(ct,ot),S(ct),n.unbindTexture()}}}let $t=[];function Se(M){if(M.samples>0){if(re(M)===!1){let{textures:g,width:F,height:k}=M,K=t.COLOR_BUFFER_BIT,ct=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=i.get(M),O=g.length>1;if(O)for(let dt=0;dt<g.length;dt++)n.bindFramebuffer(t.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+dt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ot.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+dt,t.TEXTURE_2D,null,0);if(n.bindFramebuffer(t.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let dt=0;dt<g.length;dt++){if(M.resolveDepthBuffer){if(M.depthBuffer)K|=t.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)K|=t.STENCIL_BUFFER_BIT}if(O){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ot.__webglColorRenderbuffer[dt]);let R=i.get(g[dt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,R,0)}if(t.blitFramebuffer(0,0,F,k,0,0,F,k,K,t.NEAREST),l===!0){if($t.length=0,$t.push(t.COLOR_ATTACHMENT0+dt),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1)$t.push(ct);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$t)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),O)for(let dt=0;dt<g.length;dt++){n.bindFramebuffer(t.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+dt,t.RENDERBUFFER,ot.__webglColorRenderbuffer[dt]);let R=i.get(g[dt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ot.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+dt,t.TEXTURE_2D,R,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function wt(M){return Math.min(s.maxSamples,M.samples)}function re(M){let g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(M){let g=a.render.frame;if(d.get(M)!==g)d.set(M,g),M.update()}function J(M,g){let{colorSpace:F,format:k,type:K}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return g;if(F!==xo&&F!==mi)if(le.getTransfer(F)===xe){if(k!==Dn||K!==pn)qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Zt("WebGLTextures: Unsupported texture color space:",F);return g}function Pt(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)c.width=M.displayWidth,c.height=M.displayHeight;else c.width=M.width,c.height=M.height;return c}this.allocateTextureUnit=it,this.resetTextureUnits=Q,this.getTextureUnits=rt,this.setTextureUnits=bt,this.setTexture2D=vt,this.setTexture2DArray=zt,this.setTexture3D=Dt,this.setTextureCube=At,this.rebindTextures=ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=re,this.dispose=j}function Lg(t,e){function n(i,s=mi){let r,a=le.getTransfer(s);if(i===pn)return t.UNSIGNED_BYTE;if(i===Ua)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fa)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Rc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Cc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ec)return t.BYTE;if(i===Ac)return t.SHORT;if(i===bs)return t.UNSIGNED_SHORT;if(i===Na)return t.INT;if(i===Zn)return t.UNSIGNED_INT;if(i===Ln)return t.FLOAT;if(i===Mn)return t.HALF_FLOAT;if(i===Ic)return t.ALPHA;if(i===Pc)return t.RGB;if(i===Dn)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===Jn)return t.DEPTH_STENCIL;if(i===Lc)return t.RED;if(i===Oa)return t.RED_INTEGER;if(i===pi)return t.RG;if(i===Ba)return t.RG_INTEGER;if(i===za)return t.RGBA_INTEGER;if(i===xr||i===vr||i===yr||i===Sr)if(a===xe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===Ga||i===Ha||i===Wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Va||i===Xa||i===qa||i===Ya||i===Za||i===Mr||i===Ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Va||i===Xa)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ya)return r.COMPRESSED_R11_EAC;if(i===Za)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Mr)return r.COMPRESSED_RG11_EAC;if(i===Ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$a||i===Ka||i===Qa||i===ja||i===to||i===eo||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$a)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ka)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===to)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===no)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===io)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===so)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ro)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ao)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===co)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ho||i===uo||i===fo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ho)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===po||i===mo||i===br||i===go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===po)return r.COMPRESSED_RED_RGTC1_EXT;if(i===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===fi)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`;class Bh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Dr(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:Dg,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new ti(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zh extends Nn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,d=null,u=null,h=null,m=null,x=typeof XRWebGLBinding<"u",b=new Bh,p={},f=e.getContextAttributes(),T=null,v=null,S=[],E=[],C=new mt,_=null,w=null,D=new qe;D.viewport=new we;let q=new qe;q.viewport=new we;let U=[D,q],V=new jo,st=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ft=S[it];if(ft===void 0)ft=new Es,S[it]=ft;return ft.getTargetRaySpace()},this.getControllerGrip=function(it){let ft=S[it];if(ft===void 0)ft=new Es,S[it]=ft;return ft.getGripSpace()},this.getHand=function(it){let ft=S[it];if(ft===void 0)ft=new Es,S[it]=ft;return ft.getHandSpace()};function j(it){let ft=E.indexOf(it.inputSource);if(ft===-1)return;let vt=S[ft];if(vt!==void 0)vt.update(it.inputSource,it.frame,l||r),vt.dispatchEvent({type:it.type,data:it.inputSource})}function tt(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",G);for(let it=0;it<S.length;it++){let ft=E[it];if(ft===null)continue;E[it]=null,S[it].disconnect(ft)}st=null,A=null,b.reset();for(let it in p)delete p[it];if(t.setRenderTarget(T),h=null,u=null,d=null,i=null,v=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),w!==null){let it=w.camera;it.fov=w.fov,it.zoom=w.zoom,it.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){if(s=it,n.isPresenting===!0)qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){if(a=it,n.isPresenting===!0)qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){if(d===null&&x)d=new XRWebGLBinding(i,e);return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(it){if(i=it,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",G),f.xrCompatible!==!0)await e.makeXRCompatible();if(_=t.getPixelRatio(),t.getSize(C),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let vt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new on(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let vt=null,zt=null,Dt=null;if(f.depth)Dt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=f.stencil?Jn:Xi,zt=f.stencil?fi:Zn;let At={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new on(u.textureWidth,u.textureHeight,{format:Dn,type:pn,depthTexture:new Kn(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(it){for(let ft=0;ft<it.removed.length;ft++){let vt=it.removed[ft],zt=E.indexOf(vt);if(zt>=0)E[zt]=null,S[zt].disconnect(vt)}for(let ft=0;ft<it.added.length;ft++){let vt=it.added[ft],zt=E.indexOf(vt);if(zt===-1){for(let At=0;At<S.length;At++)if(At>=E.length){E.push(vt),zt=At;break}else if(E[At]===null){E[At]=vt,zt=At;break}if(zt===-1)break}let Dt=S[zt];if(Dt)Dt.connect(vt)}}function gt(it,ft){if(ft===null)it.matrixWorld.copy(it.matrix);else it.matrixWorld.multiplyMatrices(ft.matrixWorld,it.matrix);it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(i===null)return;let{near:ft,far:vt}=it;if(b.texture!==null){if(b.depthNear>0)ft=b.depthNear;if(b.depthFar>0)vt=b.depthFar}if(V.near=q.near=D.near=ft,V.far=q.far=D.far=vt,st!==V.near||A!==V.far)i.updateRenderState({depthNear:V.near,depthFar:V.far}),st=V.near,A=V.far;V.layers.mask=it.layers.mask|6,D.layers.mask=V.layers.mask&-5,q.layers.mask=V.layers.mask&-3;let zt=it.parent,Dt=V.cameras;gt(V,zt);for(let At=0;At<Dt.length;At++)gt(Dt[At],zt);if(V.projectionMatrix.copy(D.projectionMatrix),V.projectionMatrixInverse.copy(D.projectionMatrixInverse),w===null&&it.isPerspectiveCamera)w={camera:it,fov:it.fov,zoom:it.zoom};Z(it,V,zt)};function Z(it,ft,vt){if(vt===null)it.matrix.copy(ft.matrixWorld);else it.matrix.copy(vt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ft.matrixWorld);if(it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse),it.isPerspectiveCamera)it.fov=lr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1}this.getCamera=function(){return V},this.getFoveation=function(){if(u===null&&h===null)return;return o},this.setFoveation=function(it){if(o=it,u!==null)u.fixedFoveation=it;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=it},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(V)},this.getCameraTexture=function(it){return p[it]};let Q=null;function rt(it,ft){if(c=ft.getViewerPose(l||r),m=ft,c!==null){let vt=c.views;if(h!==null)t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v);let zt=!1;if(vt.length!==V.cameras.length)V.cameras.length=0,zt=!0;for(let B=0;B<vt.length;B++){let at=vt[B],_t=null;if(h!==null)_t=h.getViewport(at);else{let lt=d.getViewSubImage(u,at);if(_t=lt.viewport,B===0)t.setRenderTargetTextures(v,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(v)}let et=U[B];if(et===void 0)et=new qe,et.layers.enable(B),et.viewport=new we,U[B]=et;if(et.matrix.fromArray(at.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(at.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(_t.x,_t.y,_t.width,_t.height),B===0)V.matrix.copy(et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);if(zt===!0)V.cameras.push(et)}let Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let B=d.getDepthInformation(vt[0]);if(B&&B.isValid&&B.texture)b.init(B,i.renderState)}if(Dt&&Dt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let B=0;B<vt.length;B++){let at=vt[B].camera;if(at){let _t=p[at];if(!_t)_t=new Dr,p[at]=_t;let et=d.getCameraImage(at);_t.sourceTexture=et}}}}for(let vt=0;vt<S.length;vt++){let zt=E[vt],Dt=S[vt];if(zt!==null&&Dt!==void 0)Dt.update(zt,ft,l||r)}if(Q)Q(it,ft);if(ft.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:ft});m=null}let bt=new bh;bt.setAnimationLoop(rt),this.setAnimationLoop=function(it){Q=it},this.dispose=function(){}}}var Ug=new fe,kh=new Qt;kh.set(-1,0,0,0,1,0,0,0,1);function Fg(t,e){function n(p,f){if(p.matrixAutoUpdate===!0)p.updateMatrix();f.value.copy(p.matrix)}function i(p,f){if(f.color.getRGB(p.fogColor.value,Fo(t)),f.isFog)p.fogNear.value=f.near,p.fogFar.value=f.far;else if(f.isFogExp2)p.fogDensity.value=f.density}function s(p,f,T,v,S){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(p,f);else if(f.isMeshLambertMaterial){if(r(p,f),f.envMap)p.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(p,f),u(p,f);else if(f.isMeshPhongMaterial){if(r(p,f),d(p,f),f.envMap)p.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(p,f),h(p,f),f.isMeshPhysicalMaterial)m(p,f,S)}else if(f.isMeshMatcapMaterial)r(p,f),x(p,f);else if(f.isMeshDepthMaterial)r(p,f);else if(f.isMeshDistanceMaterial)r(p,f),b(p,f);else if(f.isMeshNormalMaterial)r(p,f);else if(f.isLineBasicMaterial){if(a(p,f),f.isLineDashedMaterial)o(p,f)}else if(f.isPointsMaterial)l(p,f,T,v);else if(f.isSpriteMaterial)c(p,f);else if(f.isShadowMaterial)p.color.value.copy(f.color),p.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(p,f){if(p.opacity.value=f.opacity,f.color)p.diffuse.value.copy(f.color);if(f.emissive)p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.bumpMap){if(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===He)p.bumpScale.value*=-1}if(f.normalMap){if(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===He)p.normalScale.value.negate()}if(f.displacementMap)p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias;if(f.emissiveMap)p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform);if(f.specularMap)p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest;let T=e.get(f),{envMap:v,envMapRotation:S}=T;if(v){if(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(kh);p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio}if(f.lightMap)p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform);if(f.aoMap)p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform)}function a(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map)p.map.value=f.map,n(f.map,p.mapTransform)}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,v){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=v*0.5,f.map)p.map.value=f.map,n(f.map,p.uvTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function c(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,0.0001)}function u(p,f){if(f.gradientMap)p.gradientMap.value=f.gradientMap}function h(p,f){if(p.metalness.value=f.metalness,f.metalnessMap)p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=f.roughness,f.roughnessMap)p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform);if(f.envMap)p.envMapIntensity.value=f.envMapIntensity}function m(p,f,T){if(p.ior.value=f.ior,f.diffuseRoughness>0){if(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap)p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(f.sheen>0){if(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform);if(f.sheenRoughnessMap)p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform);if(f.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He)p.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)p.dispersion.value=f.dispersion;if(f.retroreflectivity>0)p.retroreflectivity.value=f.retroreflectivity;if(f.iridescence>0){if(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap)p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform);if(f.iridescenceThicknessMap)p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(f.transmission>0){if(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap)p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=f.thickness,f.thicknessMap)p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap)p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform);if(f.specularIntensityMap)p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform)}function x(p,f){if(f.matcap)p.matcap.value=f.matcap}function b(p,f){let T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Og(t,e,n,i){let s={},r={};function a(T,v){let S=v.program;i.uniformBlockBinding(T,S,s[T.id])}function o(T,v){let S=s[T.id];if(S===void 0)x(T),S=l(T),s[T.id]=S,T.addEventListener("dispose",p);let E=v.program;i.updateUBOMapping(T,E);let C=e.render.frame;if(r[T.id]!==C)c(T),r[T.id]=C}function l(T){let v=t.createBuffer(),{__size:S,usage:E}=T;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,S,E),t.bindBuffer(t.UNIFORM_BUFFER,null),v}function c(T){let v=s[T.id],{uniforms:S,__cache:E}=T;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,_=S.length;C<_;C++){let w=S[C];if(Array.isArray(w))for(let D=0,q=w.length;D<q;D++)d(w[D],C,D,E);else d(w,C,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(T,v,S,E){if(h(T,v,S,E)===!0){let{__offset:C,value:_}=T;if(Array.isArray(_)){let w=0;for(let D=0;D<_.length;D++){let q=_[D],U=b(q,!0);u(q,T.__data,w),w+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,T.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,C,T.__data)}}function u(T,v,S){if(typeof T==="number"||typeof T==="boolean")v[S]=T;else if(T.isMatrix3)v[S]=T.elements[0],v[S+1]=T.elements[1],v[S+2]=T.elements[2],v[S+3]=0,v[S+4]=T.elements[3],v[S+5]=T.elements[4],v[S+6]=T.elements[5],v[S+7]=0,v[S+8]=T.elements[6],v[S+9]=T.elements[7],v[S+10]=T.elements[8],v[S+11]=0;else if(ArrayBuffer.isView(T))v.set(T.subarray(0,v.length-S),S);else T.toArray(v,S)}function h(T,v,S,E){let C=T.value,_=v+"_"+S;if(Array.isArray(C)){if(E[_]===void 0)E[_]=[];let w=E[_],D=!1;for(let q=0;q<C.length;q++)if(m(C[q],w,q)===!0)D=!0;return D}return m(C,E,_)}function m(T,v,S){if(v[S]===void 0){if(typeof T==="number"||typeof T==="boolean")v[S]=T;else if(ArrayBuffer.isView(T))v[S]=T.slice();else v[S]=T.clone();return!0}else{let E=v[S];if(typeof T==="number"||typeof T==="boolean"){if(E!==T)return v[S]=T,!0}else if(ArrayBuffer.isView(T))return!0;else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function x(T){let v=T.uniforms,S=0,E=16;for(let _=0,w=v.length;_<w;_++){let D=Array.isArray(v[_])?v[_]:[v[_]];for(let q=0,U=D.length;q<U;q++){let V=D[q],st=Array.isArray(V.value)?V.value:[V.value],A=Array.isArray(v[_])||Array.isArray(V.value),j=S;for(let G=0,gt=st.length;G<gt;G++){let Z=st[G],Q=b(Z,A),rt=S%E,bt=rt%Q.boundary,it=rt+bt;if(S+=bt,it!==0&&E-it<Q.storage)S+=E-it;if(G===0)j=S;S+=Q.storage}let tt=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new tt((S-j)/Float32Array.BYTES_PER_ELEMENT),V.__offset=j}}let C=S%E;if(C>0)S+=E-C;return T.__size=S,T.__cache={},this}function b(T,v){let S={boundary:0,storage:0};if(typeof T==="number"||typeof T==="boolean")S.boundary=4,S.storage=4;else if(T.isVector2)S.boundary=8,S.storage=8;else if(T.isVector3||T.isColor)S.boundary=16,S.storage=12;else if(T.isVector4)S.boundary=16,S.storage=16;else if(T.isMatrix3)S.boundary=16,S.storage=48;else if(T.isMatrix4)S.boundary=16,S.storage=64;else if(T.isTexture)qt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(T))S.boundary=16,S.storage=T.byteLength;else qt("WebGLRenderer: Unsupported uniform value type.",T);if(v===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function p(T){let v=T.target;v.removeEventListener("dispose",p),t.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let T in s)t.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:f}}var Bg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bn=null;function zg(){if(bn===null)bn=new Rr(Bg,16,16,pi,Mn),bn.name="DFG_LUT",bn.minFilter=an,bn.magFilter=an,bn.wrapS=gr,bn.wrapT=gr,bn.generateMipmaps=!1,bn.needsUpdate=!0;return bn}class al{constructor(t={}){let{canvas:e=zc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:h=pn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let x=h,b=new Set([za,Ba,Oa]),p=new Set([pn,Zn,bs,fi,Ua,Fa]),f=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,E=null,C=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,q=!1,U=null,V=null,st=null,A=null;this._outputColorSpace=qi;let j=0,tt=0,G=null,gt=-1,Z=null,Q=new we,rt=new we,bt=null,it=new Kt(0),ft=0,{width:vt,height:zt}=e,Dt=1,At=null,Xt=null,B=new we(0,0,vt,zt),at=new we(0,0,vt,zt),_t=!1,et=new hi,lt=new Ir,pt=!1,St=!1,yt=new fe,Nt=new N,Ut=new we,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function ne(){return G===null?Dt:1}let I=n;function ge(y,P){return e.getContext(y,P)}let $t,Se,wt,re,L,J,Pt,M,g,F,k,K,ct,ot,O,W,dt,R,nt,X,ht,ut,xt;try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Vl}`);if(e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",jt,!1),I===null){if(I=ge("webgl2",y),I===null)if(ge("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(y){throw e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),Zt("WebGLRenderer: "+y.message),y}function Ht(){if($t=new $p(I),$t.init(),ht=new Lg(I,$t),Se=new zp(I,$t,t,ht),wt=new Ig(I,$t),Se.reversedDepthBuffer&&u)wt.buffers.depth.setReversed(!0);V=I.createFramebuffer(),st=I.createFramebuffer(),A=I.createFramebuffer(),re=new jp(I),L=new gg,J=new Pg(I,$t,wt,L,Se,ht,re),Pt=new Jp(D),M=new td(I),ut=new Op(I,M),g=new Kp(I,M,re,ut),F=new em(I,g,M,ut,re),R=new tm(I,Se,J),O=new kp(L),k=new mg(D,Pt,$t,Se,ut,O),K=new Fg(D,L),ct=new xg,ot=new wg($t),dt=new Fp(D,Pt,wt,F,m,o),W=new Cg(D,F,Se),xt=new Og(I,re,Se,wt),nt=new Bp(I,$t,re),X=new Qp(I,$t,re),re.programs=k.programs,D.capabilities=Se,D.extensions=$t,D.properties=L,D.renderLists=ct,D.shadowMap=W,D.state=wt,D.info=re}if(x!==pn)w=new im(x,e.width,e.height,a,i,s);let kt=new zh(D,I);this.xr=kt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let y=$t.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=$t.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(y){if(y===void 0)return;Dt=y,this.setSize(vt,zt,!1)},this.getSize=function(y){return y.set(vt,zt)},this.setSize=function(y,P,Y=!0){if(kt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(vt=y,zt=P,e.width=Math.floor(y*Dt),e.height=Math.floor(P*Dt),Y===!0)e.style.width=y+"px",e.style.height=P+"px";if(w!==null)w.setSize(e.width,e.height);this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(vt*Dt,zt*Dt).floor()},this.setDrawingBufferSize=function(y,P,Y){vt=y,zt=P,Dt=Y,e.width=Math.floor(y*Y),e.height=Math.floor(P*Y),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(x===pn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(B)},this.setViewport=function(y,P,Y,z){if(y.isVector4)B.set(y.x,y.y,y.z,y.w);else B.set(y,P,Y,z);wt.viewport(Q.copy(B).multiplyScalar(ne()).round())},this.getScissor=function(y){return y.copy(at)},this.setScissor=function(y,P,Y,z){if(y.isVector4)at.set(y.x,y.y,y.z,y.w);else at.set(y,P,Y,z);wt.scissor(rt.copy(at).multiplyScalar(ne()).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(y){wt.setScissorTest(_t=y)},this.setOpaqueSort=function(y){At=y},this.setTransparentSort=function(y){Xt=y},this.getClearColor=function(y){return y.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,Y=!0){let z=0;if(y){let H=!1;if(G!==null){let Tt=G.texture.format;H=b.has(Tt)}if(H){let Tt=G.texture.type,Ft=p.has(Tt),Mt=dt.getClearColor(),Lt=dt.getClearAlpha(),{r:Gt,g:te,b:ae}=Mt;if(Ft)f[0]=Gt,f[1]=te,f[2]=ae,f[3]=Lt,I.clearBufferuiv(I.COLOR,0,f);else T[0]=Gt,T[1]=te,T[2]=ae,T[3]=Lt,I.clearBufferiv(I.COLOR,0,T)}else z|=I.COLOR_BUFFER_BIT}if(P)z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Y)z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(z!==0)I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),dt.dispose(),ct.dispose(),ot.dispose(),J.dispose(),L.dispose(),Pt.dispose(),F.dispose(),g.dispose(),ut.dispose(),xt.dispose(),k.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",bi),kt.removeEventListener("sessionend",Fs),gn.stop()};function Rt(y){y.preventDefault(),To("WebGLRenderer: Context Lost."),q=!0}function Wt(){To("WebGLRenderer: Context Restored."),q=!1;let y=re.autoReset,P=W.enabled,Y=W.autoUpdate,z=W.needsUpdate,H=W.type;Ht(),re.autoReset=y,W.enabled=P,W.autoUpdate=Y,W.needsUpdate=z,W.type=H}function jt(y){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ct(y){let P=y.target;P.removeEventListener("dispose",Ct),ue(P)}function ue(y){Ee(y),L.remove(y)}function Ee(y){let P=L.get(y).programs;if(P!==void 0){if(P.forEach(function(Y){k.releaseProgram(Y)}),y.isShaderMaterial)k.releaseShaderCache(y)}}this.renderBufferDirect=function(y,P,Y,z,H,Tt){if(P===null)P=Yt;let Ft=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=he(y,P,Y,z,H);wt.setMaterial(z,Ft);let Lt=Y.index,Gt=1;if(z.wireframe===!0){if(Lt=g.getWireframeAttribute(Y),Lt===void 0)return;Gt=2}let te=Y.drawRange,ae=Y.attributes.position,Ot=te.start*Gt,oe=(te.start+te.count)*Gt;if(Tt!==null)Ot=Math.max(Ot,Tt.start*Gt),oe=Math.min(oe,(Tt.start+Tt.count)*Gt);if(Lt!==null)Ot=Math.max(Ot,0),oe=Math.min(oe,Lt.count);else if(ae!==void 0&&ae!==null)Ot=Math.max(Ot,0),oe=Math.min(oe,ae.count);let Re=oe-Ot;if(Re<0||Re===1/0)return;ut.setup(H,z,Mt,Y,Lt);let ve,_e=nt;if(Lt!==null)ve=M.get(Lt),_e=X,_e.setIndex(ve);if(H.isMesh)if(z.wireframe===!0)wt.setLineWidth(z.wireframeLinewidth*ne()),_e.setMode(I.LINES);else _e.setMode(I.TRIANGLES);else if(H.isLine){let Be=z.linewidth;if(Be===void 0)Be=1;if(wt.setLineWidth(Be*ne()),H.isLineSegments)_e.setMode(I.LINES);else if(H.isLineLoop)_e.setMode(I.LINE_LOOP);else _e.setMode(I.LINE_STRIP)}else if(H.isPoints)_e.setMode(I.POINTS);else if(H.isSprite)_e.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(!$t.get("WEBGL_multi_draw")){let{_multiDrawStarts:Be,_multiDrawCounts:Bt,_multiDrawCount:Xe}=H,pe=Lt?M.get(Lt).bytesPerElement:1,ni=L.get(z).currentProgram.getUniforms();for(let ze=0;ze<Xe;ze++)ni.setValue(I,"_gl_DrawID",ze),_e.render(Be[ze]/pe,Bt[ze])}else _e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)_e.renderInstances(Ot,Re,H.count);else if(Y.isInstancedBufferGeometry){let Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Bt=Math.min(Y.instanceCount,Be);_e.renderInstances(Ot,Re,Bt)}else _e.render(Ot,Re)};function Ae(y,P,Y,z){if(U!==null&&y.isNodeMaterial)U.setObject(z,y);if(pt===!0)O.setState(y,Y,!1);if(y.transparent===!0&&y.side===je&&y.forceSinglePass===!1)y.side=He,y.needsUpdate=!0,ei(y,P,z),y.side=Hi,y.needsUpdate=!0,ei(y,P,z),y.side=je;else ei(y,P,z)}this.compile=function(y,P,Y=null){if(Y===null)Y=y;if(U!==null)U.renderStart(y,P,Y);if(E=ot.get(Y),E.init(P),_.push(E),Y.traverseVisible(function(H){if(H.isLight&&H.layers.test(P.layers)){if(E.pushLight(H),H.castShadow)E.pushShadow(H)}}),y!==Y)y.traverseVisible(function(H){if(H.isLight&&H.layers.test(P.layers)){if(E.pushLight(H),H.castShadow)E.pushShadow(H)}});if(E.setupLights(),U!==null)U.updateLights(E.state.lightsArray);if(St=this.localClippingEnabled,pt=O.init(this.clippingPlanes,St),pt===!0)O.setGlobalState(this.clippingPlanes,P);if(U!==null)W.render(E.state.shadowsArray,Y,P);let z=new Set;if(y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Tt=H.material;if(Tt)if(Array.isArray(Tt))for(let Ft=0;Ft<Tt.length;Ft++){let Mt=Tt[Ft];Ae(Mt,Y,P,H),z.add(Mt)}else Ae(Tt,Y,P,H),z.add(Tt)}),E=_.pop(),U!==null)U.renderEnd();return z},this.compileAsync=function(y,P,Y=null){let z=this.compile(y,P,Y);return new Promise((H)=>{function Tt(){if(z.forEach(function(Ft){let Lt=L.get(Ft).currentProgram;if(Lt===void 0||Lt.isReady())z.delete(Ft)}),z.size===0){H(y);return}setTimeout(Tt,10)}if($t.get("KHR_parallel_shader_compile")!==null)Tt();else setTimeout(Tt,10)})};let Mi=null;function Jr(y){if(Mi)Mi(y)}function bi(){gn.stop()}function Fs(){gn.start()}let gn=new bh;if(gn.setAnimationLoop(Jr),typeof self<"u")gn.setContext(self);this.setAnimationLoop=function(y){Mi=y,kt.setAnimationLoop(y),y===null?gn.stop():gn.start()},kt.addEventListener("sessionstart",bi),kt.addEventListener("sessionend",Fs),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(U!==null)U.renderStart(y,P);let Y=kt.enabled===!0&&kt.isPresenting===!0,z=w!==null&&(G===null||Y)&&w.begin(D,G);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(P.parent===null&&P.matrixWorldAutoUpdate===!0)P.updateMatrixWorld();if(kt.enabled===!0&&kt.isPresenting===!0&&(w===null||w.isCompositing()===!1)){if(kt.cameraAutoUpdate===!0)kt.updateCamera(P);P=kt.getCamera()}if(y.isScene===!0)y.onBeforeRender(D,y,P,G);if(E=ot.get(y,_.length),E.init(P),E.state.textureUnits=J.getTextureUnits(),_.push(E),yt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera)lt.setFromArrayCamera(P);else et.setFromProjectionMatrix(yt,wo,P.reversedDepth);if(St=this.localClippingEnabled,pt=O.init(this.clippingPlanes,St),S=ct.get(y,C.length),S.init(),C.push(S),this.info.render.frame++,kt.enabled===!0&&kt.isPresenting===!0){let Ft=D.xr.getDepthSensingMesh();if(Ft!==null)Bn(Ft,P,-1/0,D.sortObjects)}if(Bn(y,P,0,D.sortObjects),S.finish(),U!==null)U.updateLights(E.state.lightsArray);if(D.sortObjects===!0)S.sort(At,Xt);if(Jt=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,Jt)dt.addToRenderList(S,y);if(this.info.autoReset===!0)this.info.reset();if(pt===!0)O.beginShadows();let H=E.state.shadowsArray;if(W.render(H,y,P),pt===!0)O.endShadows();if((z&&w.hasRenderPass())===!1){let Ft=S.opaque,Mt=S.transmissive;if(E.setupLights(),P.isArrayCamera){let Lt=P.cameras;if(Mt.length>0)for(let Gt=0,te=Lt.length;Gt<te;Gt++){let ae=Lt[Gt];Os(Ft,Mt,y,ae)}if(Jt)dt.render(y);for(let Gt=0,te=Lt.length;Gt<te;Gt++){let ae=Lt[Gt];ss(S,y,ae,ae.viewport)}}else{if(Mt.length>0)Os(Ft,Mt,y,P);if(Jt)dt.render(y);ss(S,y,P)}}if(G!==null&&tt===0)J.updateMultisampleRenderTarget(G),J.updateRenderTargetMipmap(G);if(z)w.end(D);if(y.isScene===!0)y.onAfterRender(D,y,P);if(ut.resetDefaultState(),gt=-1,Z=null,_.pop(),_.length>0){if(E=_[_.length-1],J.setTextureUnits(E.state.textureUnits),pt===!0)O.setGlobalState(D.clippingPlanes,E.state.camera)}else E=null;if(C.pop(),C.length>0)S=C[C.length-1];else S=null;if(U!==null)U.renderEnd()};function Bn(y,P,Y,z){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(P)}else if(y.isLight){if(E.pushLight(y),y.castShadow)E.pushShadow(y)}else if(y.isSprite){let Ft=P.isArrayCamera?lt:et;if(!y.frustumCulled||y.intersectsFrustum(Ft)){if(z)Ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(yt);let Mt=F.update(y),Lt=y.material;if(Lt.visible)S.push(y,Mt,Lt,Y,Ut.z,null,P)}}else if(y.isMesh||y.isLine||y.isPoints){let Ft=P.isArrayCamera?lt:et;if(!y.frustumCulled||y.intersectsFrustum(Ft)){let Mt=F.update(y),Lt=y.material;if(z){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();Ut.copy(y.boundingSphere.center)}else{if(Mt.boundingSphere===null)Mt.computeBoundingSphere();Ut.copy(Mt.boundingSphere.center)}Ut.applyMatrix4(y.matrixWorld).applyMatrix4(yt)}if(Array.isArray(Lt)){let Gt=Mt.groups;for(let te=0,ae=Gt.length;te<ae;te++){let Ot=Gt[te],oe=Lt[Ot.materialIndex];if(oe&&oe.visible)S.push(y,Mt,oe,Y,Ut.z,Ot,P)}}else if(Lt.visible)S.push(y,Mt,Lt,Y,Ut.z,null,P)}}}let Tt=y.children;for(let Ft=0,Mt=Tt.length;Ft<Mt;Ft++)Bn(Tt[Ft],P,Y,z)}function ss(y,P,Y,z){let{opaque:H,transmissive:Tt,transparent:Ft}=y;if(E.setupLightsView(Y),pt===!0)O.setGlobalState(D.clippingPlanes,Y);if(z)wt.viewport(Q.copy(z));if(H.length>0)Ye(H,P,Y);if(Tt.length>0)Ye(Tt,P,Y);if(Ft.length>0)Ye(Ft,P,Y);wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Os(y,P,Y,z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Ot=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new on(1,1,{generateMipmaps:!0,type:Ot?Mn:pn,minFilter:Yn,samples:Math.max(4,Se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Tt=E.state.transmissionRenderTarget[z.id],Ft=z.viewport||Q;Tt.setSize(Ft.z*D.transmissionResolutionScale,Ft.w*D.transmissionResolutionScale);let Mt=D.getRenderTarget(),Lt=D.getActiveCubeFace(),Gt=D.getActiveMipmapLevel();if(D.setRenderTarget(Tt),D.getClearColor(it),ft=D.getClearAlpha(),ft<1)D.setClearColor(16777215,0.5);if(D.clear(),Jt)dt.render(Y);let te=D.toneMapping;D.toneMapping=Sn;let ae=z.viewport;if(z.viewport!==void 0)z.viewport=void 0;if(E.setupLightsView(z),pt===!0)O.setGlobalState(D.clippingPlanes,z);if(Ye(y,Y,z),J.updateMultisampleRenderTarget(Tt),J.updateRenderTargetMipmap(Tt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let oe=0,Re=P.length;oe<Re;oe++){let ve=P[oe],{object:_e,geometry:Be,material:Bt,group:Xe}=ve;if(Bt.side===je&&_e.layers.test(z.layers)){let pe=Bt.side;Bt.side=He,Bt.needsUpdate=!0,en(_e,Y,z,Be,Bt,Xe),Bt.side=pe,Bt.needsUpdate=!0,Ot=!0}}if(Ot===!0)J.updateMultisampleRenderTarget(Tt),J.updateRenderTargetMipmap(Tt)}if(D.setRenderTarget(Mt,Lt,Gt),D.setClearColor(it,ft),ae!==void 0)z.viewport=ae;D.toneMapping=te}function Ye(y,P,Y){let z=P.isScene===!0?P.overrideMaterial:null;for(let H=0,Tt=y.length;H<Tt;H++){let Ft=y[H],{object:Mt,geometry:Lt,group:Gt}=Ft,te=Ft.material;if(te.allowOverride===!0&&z!==null)te=z;if(Mt.layers.test(Y.layers))en(Mt,P,Y,Lt,te,Gt)}}function en(y,P,Y,z,H,Tt){if(U!==null&&H.isNodeMaterial)U.setObject(y,H);if(y.onBeforeRender(D,P,Y,z,H,Tt),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(D,P,Y,z,y,Tt),H.transparent===!0&&H.side===je&&H.forceSinglePass===!1)H.side=He,H.needsUpdate=!0,D.renderBufferDirect(Y,P,z,H,y,Tt),H.side=Hi,H.needsUpdate=!0,D.renderBufferDirect(Y,P,z,H,y,Tt),H.side=je;else D.renderBufferDirect(Y,P,z,H,y,Tt);y.onAfterRender(D,P,Y,z,H,Tt)}function zn(y){let P=0;for(let Y of y)if(Y.texture!==null)P++;return P}function ei(y,P,Y){if(P.isScene!==!0)P=Yt;let z=L.get(y),H=E.state.lights,Tt=E.state.shadowsArray,Ft=H.state.version,Mt=k.getParameters(y,H.state,Tt,P,Y,E.state.lightProbeGridArray),Lt=k.getProgramCacheKey(Mt),Gt=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let te=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(z.envMap=Pt.get(y.envMap||z.environment,te),z.envMapRotation=z.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Gt===void 0)y.addEventListener("dispose",Ct),Gt=new Map,z.programs=Gt,z.programVariants=new Map;let ae=Gt.get(Lt);if(ae!==void 0){if(z.currentProgram===ae&&z.lightsStateVersion===Ft)return ee(y,Mt),ae}else{if(Mt.uniforms=k.getUniforms(y),U!==null&&y.isNodeMaterial)U.build(y,Y,Mt);y.onBeforeCompile(Mt,D),ae=k.acquireProgram(Mt,Lt),Gt.set(Lt,ae),z.uniforms=Mt.uniforms}let Ot=z.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)Ot.clippingPlanes=O.uniform;if(ee(y,Mt),z.needsLights=Oe(y),z.lightsStateVersion=Ft,z.needsLights)Ot.ambientLightColor.value=H.state.ambient,Ot.lightProbe.value=H.state.probe,Ot.sunLights.value=H.state.sun,Ot.sunLightShadows.value=H.state.sunShadow,Ot.directionalLights.value=H.state.directional,Ot.directionalLightShadows.value=H.state.directionalShadow,Ot.spotLights.value=H.state.spot,Ot.spotLightShadows.value=H.state.spotShadow,Ot.rectAreaLights.value=H.state.rectArea,Ot.ltc_1.value=H.state.rectAreaLTC1,Ot.ltc_2.value=H.state.rectAreaLTC2,Ot.pointLights.value=H.state.point,Ot.pointLightShadows.value=H.state.pointShadow,Ot.hemisphereLights.value=H.state.hemi,Ot.sunShadowMatrix.value=H.state.sunShadowMatrix,Ot.sunShadowCascade.value=H.state.sunShadowCascade,Ot.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ot.spotLightMatrix.value=H.state.spotLightMatrix,Ot.spotLightMap.value=H.state.spotLightMap,Ot.pointShadowMatrix.value=H.state.pointShadowMatrix;return z.numLightProbeGrids=zn(E.state.lightProbeGridArray),z.currentProgram=ae,z.uniformsList=null,ae}function Et(y,P,Y,z,H){let Tt=L.get(y),Ft=Tt.currentProgram.id+","+z+","+H,Mt=Tt.programVariants.get(Ft);if(Mt===void 0)Mt=ei(y,P,Y),Tt.programVariants.set(Ft,Mt);else Tt.currentProgram=Mt,Tt.uniformsList=null,Tt.outputColorSpace=z,Tt.toneMapping=H;return Mt}function Vt(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=Ds.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function ee(y,P){let Y=L.get(y);Y.outputColorSpace=P.outputColorSpace,Y.batching=P.batching,Y.batchingColor=P.batchingColor,Y.instancing=P.instancing,Y.instancingColor=P.instancingColor,Y.instancingMorph=P.instancingMorph,Y.skinning=P.skinning,Y.morphTargets=P.morphTargets,Y.morphNormals=P.morphNormals,Y.morphColors=P.morphColors,Y.morphTargetsCount=P.morphTargetsCount,Y.numClippingPlanes=P.numClippingPlanes,Y.numIntersection=P.numClipIntersection,Y.vertexAlphas=P.vertexAlphas,Y.vertexTangents=P.vertexTangents,Y.toneMapping=P.toneMapping}function he(y,P,Y,z,H){if(P.isScene!==!0)P=Yt;J.resetTextureUnits();let Tt=P.fog,Ft=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,Mt=G===null?D.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:le.workingColorSpace,Lt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Gt=Pt.get(z.envMap||Ft,Lt),te=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ae=!!Y.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ot=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,Re=!!Y.morphAttributes.color,ve=Sn;if(z.toneMapped){if(G===null||G.isXRRenderTarget===!0)ve=D.toneMapping}let _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Be=_e!==void 0?_e.length:0,Bt=L.get(z),Xe=E.state.lights;if(pt===!0){if(St===!0||y!==Z){let Me=y===Z&&z.id===gt;O.setState(z,y,Me)}}let pe=!1,ni=!1;if(z.version===Bt.__version){if(Bt.needsLights&&Bt.lightsStateVersion!==Xe.state.version)pe=!0;else if(H.isBatchedMesh&&Bt.batching===!1)pe=!0;else if(!H.isBatchedMesh&&Bt.batching===!0)pe=!0;else if(H.isBatchedMesh&&Bt.batchingColor===!0&&H._colorsTexture===null)pe=!0;else if(H.isBatchedMesh&&Bt.batchingColor===!1&&H._colorsTexture!==null)pe=!0;else if(H.isInstancedMesh&&Bt.instancing===!1)pe=!0;else if(!H.isInstancedMesh&&Bt.instancing===!0)pe=!0;else if(H.isSkinnedMesh&&Bt.skinning===!1)pe=!0;else if(!H.isSkinnedMesh&&Bt.skinning===!0)pe=!0;else if(H.isInstancedMesh&&Bt.instancingColor===!0&&H.instanceColor===null)pe=!0;else if(H.isInstancedMesh&&Bt.instancingColor===!1&&H.instanceColor!==null)pe=!0;else if(H.isInstancedMesh&&Bt.instancingMorph===!0&&H.morphTexture===null)pe=!0;else if(H.isInstancedMesh&&Bt.instancingMorph===!1&&H.morphTexture!==null)pe=!0;else if(Bt.envMap!==Gt)pe=!0;else if(z.fog===!0&&Bt.fog!==Tt)pe=!0;else if(Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==O.numPlanes||Bt.numIntersection!==O.numIntersection))pe=!0;else if(Bt.vertexAlphas!==te)pe=!0;else if(Bt.vertexTangents!==ae)pe=!0;else if(Bt.morphTargets!==Ot)pe=!0;else if(Bt.morphNormals!==oe)pe=!0;else if(Bt.morphColors!==Re)pe=!0;else if(Bt.morphTargetsCount!==Be)pe=!0;else if(Bt.numLightProbeGrids!==zn(E.state.lightProbeGridArray))pe=!0;else if(Bt.outputColorSpace!==Mt||Bt.toneMapping!==ve)ni=!0}else pe=!0,Bt.__version=z.version;let ze=Bt.currentProgram;if(pe===!0||ni===!0){if(ze=ni===!0?Et(z,P,H,Mt,ve):ei(z,P,H),U&&z.isNodeMaterial)U.onUpdateProgram(z,ze,Bt)}let Bs=!1,kn=!1,ii=!1,de=ze.getUniforms(),Ue=Bt.uniforms;if(wt.useProgram(ze.program))Bs=!0,kn=!0,ii=!0;if(z.id!==gt)gt=z.id,kn=!0;if(Bs||Z!==y){if(wt.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();de.setValue(I,"projectionMatrix",y.projectionMatrix),de.setValue(I,"viewMatrix",y.matrixWorldInverse);let De=de.map.cameraPosition;if(De!==void 0)De.setValue(I,Nt.setFromMatrixPosition(y.matrixWorld));if(Se.logarithmicDepthBuffer)de.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)de.setValue(I,"isOrthographic",y.isOrthographicCamera===!0);if(Z!==y)Z=y,kn=!0,ii=!0}if(Bt.needsLights){if(Xe.state.sunShadowMap.length>0)de.setValue(I,"sunShadowMap",Xe.state.sunShadowMap,J);if(Xe.state.directionalShadowMap.length>0)de.setValue(I,"directionalShadowMap",Xe.state.directionalShadowMap,J);if(Xe.state.spotShadowMap.length>0)de.setValue(I,"spotShadowMap",Xe.state.spotShadowMap,J);if(Xe.state.pointShadowMap.length>0)de.setValue(I,"pointShadowMap",Xe.state.pointShadowMap,J)}if(H.isSkinnedMesh){de.setOptional(I,H,"bindMatrix"),de.setOptional(I,H,"bindMatrixInverse");let Me=H.skeleton;if(Me){if(Me.boneTexture===null)Me.computeBoneTexture();de.setValue(I,"boneTexture",Me.boneTexture,J)}}if(H.isBatchedMesh){if(de.setOptional(I,H,"batchingTexture"),de.setValue(I,"batchingTexture",H._matricesTexture,J),de.setOptional(I,H,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",H._indirectTexture,J),de.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null)de.setValue(I,"batchingColorTexture",H._colorsTexture,J)}let hn=Y.morphAttributes;if(hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)R.update(H,Y,ze);if(kn||Bt.receiveShadow!==H.receiveShadow)Bt.receiveShadow=H.receiveShadow,de.setValue(I,"receiveShadow",H.receiveShadow);if((z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null)Ue.envMapIntensity.value=P.environmentIntensity;if(Ue.dfgLUT!==void 0)Ue.dfgLUT.value=zg();if(kn){if(de.setValue(I,"toneMappingExposure",D.toneMappingExposure),Bt.needsLights)Ve(Ue,ii);if(Tt&&z.fog===!0)K.refreshFogUniforms(Ue,Tt);if(K.refreshMaterialUniforms(Ue,z,Dt,zt,E.state.transmissionRenderTarget[y.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){let Me=v,De=0;for(let Tn of E.state.lightProbeGridArray){if(Tn.texture===null)continue;Me.textures[De]=Tn.texture,Me.min[De]=Tn.boundingBox.min,Me.max[De]=Tn.boundingBox.max,Me.resolution[De]=Tn.resolution,De++}for(let Tn in Me)Me[Tn].length=De;Ue.probesSH.value=Me.textures,Ue.probesMin.value=Me.min,Ue.probesMax.value=Me.max,Ue.probesResolution.value=Me.resolution}Ds.upload(I,Vt(Bt),Ue,J)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0)Ds.upload(I,Vt(Bt),Ue,J),z.uniformsNeedUpdate=!1;if(z.isSpriteMaterial)de.setValue(I,"center",H.center);if(de.setValue(I,"modelViewMatrix",H.modelViewMatrix),de.setValue(I,"normalMatrix",H.normalMatrix),de.setValue(I,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let Me=z.uniformsGroups;for(let De=0,Tn=Me.length;De<Tn;De++){let hl=Me[De];xt.update(hl,ze),xt.bind(hl,ze)}}return ze}function Ve(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Oe(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(y,P,Y){let z=L.get(y);if(z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1)z.__useRenderToTexture=!1;L.get(y.texture).__webglTexture=P,L.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Y,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let Y=L.get(y);Y.__webglFramebuffer=P,Y.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,Y=0){G=y,j=P,tt=Y;let z=null,H=!1,Tt=!1;if(y){let Mt=L.get(y);if(Mt.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(I.FRAMEBUFFER,Mt.__webglFramebuffer),Q.copy(y.viewport),rt.copy(y.scissor),bt=y.scissorTest,wt.viewport(Q),wt.scissor(rt),wt.setScissorTest(bt),gt=-1;return}else if(Mt.__webglFramebuffer===void 0)J.setupRenderTarget(y);else if(Mt.__hasExternalTextures)J.rebindTextures(y,L.get(y.texture).__webglTexture,L.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let te=y.depthTexture;if(Mt.__boundDepthTexture!==te){if(te!==null&&L.has(te)&&(y.width!==te.image.width||y.height!==te.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(y)}}let Lt=y.texture;if(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)Tt=!0;let Gt=L.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(Gt[P]))z=Gt[P][Y];else z=Gt[P];H=!0}else if(y.samples>0&&J.useMultisampledRTT(y)===!1)z=L.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(Gt))z=Gt[Y];else z=Gt;Q.copy(y.viewport),rt.copy(y.scissor),bt=y.scissorTest}else Q.copy(B).multiplyScalar(Dt).floor(),rt.copy(at).multiplyScalar(Dt).floor(),bt=_t;if(Y!==0)z=V;if(wt.bindFramebuffer(I.FRAMEBUFFER,z))wt.drawBuffers(y,z);if(wt.viewport(Q),wt.scissor(rt),wt.setScissorTest(bt),H){let Mt=L.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,Mt.__webglTexture,Y)}else if(Tt){let Mt=P;for(let Lt=0;Lt<y.textures.length;Lt++){let Gt=L.get(y.textures[Lt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Lt,Gt.__webglTexture,Y,Mt)}}else if(y!==null&&Y!==0){let Mt=L.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,Y)}gt=-1};function nn(y){let P=L.get(y);if(P.__readFormat!==y.format||P.__readType!==y.type)P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=Se.textureFormatReadable(y.format),P.__typeReadable=Se.textureTypeReadable(y.type);return P}if(this.readRenderTargetPixels=function(y,P,Y,z,H,Tt,Ft,Mt=0){if(!(y&&y.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=L.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ft!==void 0){if(Lt=Lt[Ft],Array.isArray(Lt))Lt=Lt[0]}if(Lt){wt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{let Gt=y.textures[Mt],{format:te,type:ae}=Gt;if(y.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+Mt);let Ot=nn(Gt);if(Ot.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(P>=0&&P<=y.width-z&&(Y>=0&&Y<=y.height-H))I.readPixels(P,Y,z,H,ht.convert(te),ht.convert(ae),Tt)}finally{let Gt=G!==null?L.get(G).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(y,P,Y,z,H,Tt,Ft,Mt=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=L.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ft!==void 0){if(Lt=Lt[Ft],Array.isArray(Lt))Lt=Lt[0]}if(Lt)if(P>=0&&P<=y.width-z&&(Y>=0&&Y<=y.height-H)){wt.bindFramebuffer(I.FRAMEBUFFER,Lt);let Gt=y.textures[Mt],{format:te,type:ae}=Gt;if(y.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+Mt);let Ot=nn(Gt);if(Ot.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,oe),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(P,Y,z,H,ht.convert(te),ht.convert(ae),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Re=G!==null?L.get(G).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,Re);let ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Gc(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,oe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(oe),I.deleteSync(ve),Tt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,Y=0){let z=Math.pow(2,-Y),H=Math.floor(y.image.width*z),Tt=Math.floor(y.image.height*z),Ft=P!==null?P.x:0,Mt=P!==null?P.y:0;J.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ft,Mt,H,Tt),wt.unbindTexture()},this.copyTextureToTexture=function(y,P,Y=null,z=null,H=0,Tt=0){let Ft,Mt,Lt,Gt,te,ae,Ot,oe,Re,ve=y.isCompressedTexture?y.mipmaps[Tt]:y.image;if(Y!==null)Ft=Y.max.x-Y.min.x,Mt=Y.max.y-Y.min.y,Lt=Y.isBox3?Y.max.z-Y.min.z:1,Gt=Y.min.x,te=Y.min.y,ae=Y.isBox3?Y.min.z:0;else{let de=Math.pow(2,-H);if(Ft=Math.floor(ve.width*de),Mt=Math.floor(ve.height*de),y.isDataArrayTexture)Lt=ve.depth;else if(y.isData3DTexture)Lt=Math.floor(ve.depth*de);else Lt=1;Gt=0,te=0,ae=0}if(z!==null)Ot=z.x,oe=z.y,Re=z.z;else Ot=0,oe=0,Re=0;let _e=ht.convert(P.format),Be=ht.convert(P.type),Bt;if(P.isData3DTexture)J.setTexture3D(P,0),Bt=I.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)J.setTexture2DArray(P,0),Bt=I.TEXTURE_2D_ARRAY;else J.setTexture2D(P,0),Bt=I.TEXTURE_2D;wt.activeTexture(I.TEXTURE0),wt.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),wt.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),wt.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);let Xe=wt.getParameter(I.UNPACK_ROW_LENGTH),pe=wt.getParameter(I.UNPACK_IMAGE_HEIGHT),ni=wt.getParameter(I.UNPACK_SKIP_PIXELS),ze=wt.getParameter(I.UNPACK_SKIP_ROWS),Bs=wt.getParameter(I.UNPACK_SKIP_IMAGES);wt.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),wt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),wt.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),wt.pixelStorei(I.UNPACK_SKIP_ROWS,te),wt.pixelStorei(I.UNPACK_SKIP_IMAGES,ae);let kn=y.isDataArrayTexture||y.isData3DTexture,ii=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let de=L.get(y),Ue=L.get(P),hn=L.get(de.__renderTarget),Me=L.get(Ue.__renderTarget);wt.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<Lt;De++){if(kn)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(y).__webglTexture,H,ae+De),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(P).__webglTexture,Tt,Re+De);I.blitFramebuffer(Gt,te,Gt+Ft,te+Mt,Ot,oe,Ot+Ft,oe+Mt,I.DEPTH_BUFFER_BIT,I.NEAREST)}wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||L.has(y)){let de=L.get(y),Ue=L.get(P);wt.bindFramebuffer(I.READ_FRAMEBUFFER,st),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,A);for(let hn=0;hn<Lt;hn++){if(kn)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.__webglTexture,H,ae+hn);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,de.__webglTexture,H);if(ii)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.__webglTexture,Tt,Re+hn);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ue.__webglTexture,Tt);if(H!==0)I.blitFramebuffer(Gt,te,Gt+Ft,te+Mt,Ot,oe,Ot+Ft,oe+Mt,I.COLOR_BUFFER_BIT,I.NEAREST);else if(ii)I.copyTexSubImage3D(Bt,Tt,Ot,oe,Re+hn,Gt,te,Ft,Mt);else I.copyTexSubImage2D(Bt,Tt,Ot,oe,Gt,te,Ft,Mt)}wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(ii)if(y.isDataTexture||y.isData3DTexture)I.texSubImage3D(Bt,Tt,Ot,oe,Re,Ft,Mt,Lt,_e,Be,ve.data);else if(P.isCompressedArrayTexture)I.compressedTexSubImage3D(Bt,Tt,Ot,oe,Re,Ft,Mt,Lt,_e,ve.data);else I.texSubImage3D(Bt,Tt,Ot,oe,Re,Ft,Mt,Lt,_e,Be,ve);else if(y.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,Tt,Ot,oe,Ft,Mt,_e,Be,ve.data);else if(y.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,Ot,oe,ve.width,ve.height,_e,ve.data);else I.texSubImage2D(I.TEXTURE_2D,Tt,Ot,oe,Ft,Mt,_e,Be,ve);if(wt.pixelStorei(I.UNPACK_ROW_LENGTH,Xe),wt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe),wt.pixelStorei(I.UNPACK_SKIP_PIXELS,ni),wt.pixelStorei(I.UNPACK_SKIP_ROWS,ze),wt.pixelStorei(I.UNPACK_SKIP_IMAGES,Bs),Tt===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0)I.generateMipmap(Bt);wt.unbindTexture()},this.initRenderTarget=function(y){if(L.get(y).__webglFramebuffer===void 0)J.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)J.setTextureCube(y,0);else if(y.isData3DTexture)J.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)J.setTexture2DArray(y,0);else J.setTexture2D(y,0);wt.unbindTexture()},this.resetState=function(){j=0,tt=0,G=null,wt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class ol extends Zi{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let t=new Qn;t.deleteAttribute("uv");let e=new Qi({side:He}),n=new Qi,i=new Hr(16777215,900,28,2);i.position.set(0.418,16.199,0.3),this.add(i);let s=new ce(t,e);s.position.set(-0.757,13.219,0.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new Cr(t,n,6),a=new Te;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-0.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),r.setMatrixAt(0,a.matrix),a.position.set(-5.607,-0.754,-0.758),a.rotation.set(0,0.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),r.setMatrixAt(1,a.matrix),a.position.set(6.167,0.857,7.803),a.rotation.set(0,0.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),r.setMatrixAt(2,a.matrix),a.position.set(-2.017,0.018,6.124),a.rotation.set(0,0.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),r.setMatrixAt(3,a.matrix),a.position.set(2.291,-0.756,-2.621),a.rotation.set(0,-0.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),r.setMatrixAt(4,a.matrix),a.position.set(-2.193,-0.369,-5.547),a.rotation.set(0,0.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),r.setMatrixAt(5,a.matrix),this.add(r);let o=new ce(t,ns(50));o.position.set(-16.116,14.37,8.208),o.scale.set(0.1,2.428,2.739),this.add(o);let l=new ce(t,ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(0.1,2.425,2.751),this.add(l);let c=new ce(t,ns(17));c.position.set(14.904,12.198,-1.832),c.scale.set(0.15,4.265,6.331),this.add(c);let d=new ce(t,ns(43));d.position.set(-0.462,8.89,14.52),d.scale.set(4.38,5.441,0.088),this.add(d);let u=new ce(t,ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,0.1),this.add(u);let h=new ce(t,ns(100));h.position.set(0,20,0),h.scale.set(1,0.1,1),this.add(h)}dispose(){let t=new Set;this.traverse((e)=>{if(e.isMesh)t.add(e.geometry),t.add(e.material)});for(let e of t)e.dispose()}}function ns(t){return new zr({color:0,emissive:16777215,emissiveIntensity:t})}var Ie=Math.PI,cn=Ie*2,tn=(t,e,n)=>t<e?e:t>n?n:t,kg=(t)=>(t=tn(t,0,1),t*t*(3-2*t)),Us=(t)=>(t=tn(t,0,1),t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2),Gg=(t)=>1-Math.pow(1-tn(t,0,1),3),is={Silver:"#e4e5ea",Gold:"#f2c98a",Rose:"#f0bcaa"},Hg={title:["Your pieces in 360°","قطعك بزاوية 360°"],load:["Preparing your pieces…","جارٍ تجهيز قطعك…"],hint:["Drag to turn · pinch to zoom · tap a piece","اسحب للتدوير · قرّب بإصبعين · اضغط على أي قطعة"],replay:["Replay","إعادة"],open:["Open clasp","افتح القفل"],close:["Close clasp","أغلق القفل"],save:["Save picture","حفظ صورة"],bracelet:["Bracelet","السوار"],shown:["Shown on","معروض على"],add:["+ Add to my list","+ أضف إلى قائمتي"],added:["✓ On your list","✓ في قائمتك"],note:["Preview made from the product photos — the real pieces are waiting in store.","معاينة من صور القطع — القطع الحقيقية بانتظارك في الفرع."],fail:["3D view is not available on this device.","العرض ثلاثي الأبعاد غير متاح على هذا الجهاز."],x:["Close","إغلاق"],skip:["Tap to skip","اضغط للتخطي"]},Gh=(t)=>new Promise((e,n)=>{let i=new Image;i.crossOrigin="anonymous",i.decoding="async",i.onload=()=>e(i),i.onerror=n,i.src=t});async function Wg(t,e,n){try{return await Gh(t.base+e+(e.includes("?")?"&":"?")+"width="+n+"&b3=1")}catch(i){return await Gh("/api/img?u="+encodeURIComponent(e)+"&w="+n)}}function Vg(t){let n=Math.min(1,512/Math.max(t.naturalWidth||t.width,t.naturalHeight||t.height)),i=Math.max(8,Math.round((t.naturalWidth||t.width)*n)),s=Math.max(8,Math.round((t.naturalHeight||t.height)*n)),r=document.createElement("canvas");r.width=i,r.height=s;let a=r.getContext("2d",{willReadFrequently:!0});a.fillStyle="#fff",a.fillRect(0,0,i,s),a.drawImage(t,0,0,i,s);let o=a.getImageData(0,0,i,s).data,l=i*s,c=[],d=[],u=[];for(let B=0;B<i;B++)for(let at of[0,s-1]){let _t=(at*i+B)*4;c.push(o[_t]),d.push(o[_t+1]),u.push(o[_t+2])}for(let B=0;B<s;B++)for(let at of[0,i-1]){let _t=(B*i+at)*4;c.push(o[_t]),d.push(o[_t+1]),u.push(o[_t+2])}let h=(B)=>B.sort((at,_t)=>at-_t)[B.length>>1],m=h(c),x=h(d),b=h(u),p=new Uint8Array(l);for(let B=0,at=0;B<l;B++,at+=4)p[B]=Math.max(Math.abs(o[at]-m),Math.abs(o[at+1]-x),Math.abs(o[at+2]-b));let f=14,T=new Uint8Array(l),v=new Int32Array(l),S=0,E=0,C=(B)=>{if(!T[B]&&p[B]<f)T[B]=1,v[E++]=B};for(let B=0;B<i;B++)C(B),C((s-1)*i+B);for(let B=0;B<s;B++)C(B*i),C(B*i+i-1);while(S<E){let B=v[S++],at=B%i,_t=B/i|0;if(at>0)C(B-1);if(at<i-1)C(B+1);if(_t>0)C(B-i);if(_t<s-1)C(B+i)}let _=new Uint8Array(l);for(let B=0;B<l;B++){if(T[B]||_[B]||p[B]>=6)continue;S=E=0,v[E++]=B,_[B]=1;while(S<E){let at=v[S++],_t=at%i,et=at/i|0;for(let lt of[_t>0?at-1:-1,_t<i-1?at+1:-1,et>0?at-i:-1,et<s-1?at+i:-1])if(lt>=0&&!_[lt]&&!T[lt]&&p[lt]<6)_[lt]=1,v[E++]=lt}if(E>l*0.006)for(let at=0;at<E;at++)T[v[at]]=1}let w=new Int32Array(l).fill(-1),D=[];for(let B=0;B<l;B++){if(T[B]||w[B]>=0)continue;let at=D.length;S=E=0,v[E++]=B,w[B]=at;while(S<E){let _t=v[S++],et=_t%i,lt=_t/i|0;for(let pt=-1;pt<=1;pt++)for(let St=-1;St<=1;St++){let yt=et+St,Nt=lt+pt;if(yt<0||Nt<0||yt>=i||Nt>=s)continue;let Ut=Nt*i+yt;if(!T[Ut]&&w[Ut]<0)w[Ut]=at,v[E++]=Ut}}D.push(E)}if(!D.length)return null;let q=Math.max(...D),U=D.map((B)=>B>=q*0.08),V=i,st=s,A=0,j=0,tt=new Float32Array(l);for(let B=0;B<l;B++){if(T[B]||!U[w[B]])continue;let at=B%i,_t=B/i|0;if(tt[B]=1,at<V)V=at;if(at>A)A=at;if(_t<st)st=_t;if(_t>j)j=_t}if(A-V<6||j-st<6)return null;for(let B=0;B<l;B++){if(!tt[B])continue;let at=B%i,_t=B/i|0;if(at>0&&!tt[B-1]||at<i-1&&!tt[B+1]||_t>0&&!tt[B-i]||_t<s-1&&!tt[B+i])tt[B]=tn((p[B]-4)/26,0.35,1)}let G=(V<=1)+(st<=1)+(A>=i-2)+(j>=s-2),gt=(A-V)*(j-st)/l,Z=3;V=Math.max(0,V-Z),st=Math.max(0,st-Z),A=Math.min(i-1,A+Z),j=Math.min(s-1,j+Z);let Q=A-V+1,rt=j-st+1,bt=document.createElement("canvas");bt.width=Q,bt.height=rt;let it=bt.getContext("2d"),ft=it.createImageData(Q,rt),vt=ft.data,zt=new Float32Array(Q*rt);for(let B=0;B<rt;B++)for(let at=0;at<Q;at++){let _t=(B+st)*i+at+V,et=(B*Q+at)*4;if(zt[B*Q+at]=tt[_t],tt[_t]>0)vt[et]=o[_t*4],vt[et+1]=o[_t*4+1],vt[et+2]=o[_t*4+2],vt[et+3]=255}for(let B=0;B<8;B++){let at=new Uint8ClampedArray(vt);for(let _t=0;_t<rt;_t++)for(let et=0;et<Q;et++){let lt=(_t*Q+et)*4;if(at[lt+3])continue;let pt=0,St=0,yt=0,Nt=0;for(let[Ut,Yt]of[[1,0],[-1,0],[0,1],[0,-1]]){let Jt=et+Ut,ne=_t+Yt;if(Jt<0||ne<0||Jt>=Q||ne>=rt)continue;let I=(ne*Q+Jt)*4;if(at[I+3])pt+=at[I],St+=at[I+1],yt+=at[I+2],Nt++}if(Nt)vt[lt]=pt/Nt,vt[lt+1]=St/Nt,vt[lt+2]=yt/Nt,vt[lt+3]=255}}for(let B=3;B<vt.length;B+=4)if(!vt[B])vt[B-3]=m*0.8,vt[B-2]=x*0.8,vt[B-1]=b*0.8,vt[B]=255;for(let B=0;B<Q*rt;B++)vt[B*4+3]=Math.round(zt[B]*255);it.putImageData(ft,0,0);let Dt=new Float32Array(Q*rt);for(let B=0;B<Q*rt;B++)Dt[B]=(vt[B*4]+vt[B*4+1]+vt[B*4+2])/3;let At=[];for(let B=4;B<rt-4;B+=2)for(let at=4;at<Q-4;at+=2){let _t=B*Q+at;if(zt[_t]<1||Dt[_t]<236)continue;let et=255,lt=0;for(let pt=-4;pt<=4;pt+=2)for(let St=-4;St<=4;St+=2){let yt=Dt[_t+pt*Q+St];if(yt<et)et=yt;if(yt>lt)lt=yt}if(Dt[_t]>=lt&&Dt[_t]-et>70)At.push([at,B,Dt[_t]-et])}At.sort((B,at)=>at[2]-B[2]);let Xt=[];for(let B of At){if(Xt.every((at)=>Math.hypot(at[0]-B[0],at[1]-B[1])>Math.max(Q,rt)*0.1))Xt.push(B);if(Xt.length>=7)break}return{canvas:bt,A:zt,cw:Q,ch:rt,spk:Xt,touch:G,fill:gt}}function Xg(t,e){let{A:n,cw:i,ch:s}=t,r=[];for(let h=0;h<s;h++){let m=-1,x=-1;for(let b=0;b<i;b++)if(n[h*i+b]>=0.5){if(m<0)m=b;x=b}r.push(m<0?null:[m,x])}let a=0,o=s-1;while(a<s&&!r[a])a++;while(o>0&&!r[o])o--;let l=Math.max(1,o-a),c=Math.max(...r.map((h)=>h?h[1]-h[0]:0));if(e=="dangle"){let h=a;while(h<o&&r[h]&&r[h][1]-r[h][0]<c*0.5)h++;let m=h-a>l*0.04&&h-a<l*0.45?(a+h)/2:a+l*0.07,x=r[Math.round(m)]||r[a];return{x:x?(x[0]+x[1])/2:i/2,y:m,top:a,bot:o,wmax:c,hgt:l}}let d=i,u=0;for(let h of r)if(h)d=Math.min(d,h[0]),u=Math.max(u,h[1]);return{x:(d+u)/2,y:(a+o)/2,top:a,bot:o,wmax:c,hgt:l}}var qg=(t)=>{let e=t.f||"",n=(t.n||"").toLowerCase();if(e=="Dangle"||e=="Medallion"||/\bdangle\b/.test(n))return"dangle";if(e=="Clip"||/\bclip\b/.test(n))return"clip";if(e=="Spacer"||/spacer/.test(n))return"spacer";if(e=="Link"||/openable link/.test(n))return"link";return"bead"},Yg=(t,e)=>{let n=(t.n||"").toLowerCase();if(e=="dangle")return t.f=="Medallion"?15:17;if(e=="clip")return 8.6;if(e=="spacer")return 6.8;if(e=="link")return 9;if(/\bmini\b/.test(n))return 7.6;if(/murano/.test(n))return 12;return 10.6};function Zg(t){let i=document.createElement("canvas");i.width=256,i.height=64;let s=i.getContext("2d"),r=s.createImageData(256,64),a=r.data,o=(d,u)=>{if(d=(d+256)%256,u=(u+64)%64,t=="cord"){let x=Math.sin((d*2+u*4)/256*cn*4),b=Math.sin((d*2-u*4)/256*cn*4);return Math.max(x,b)*0.5+0.5}if(t=="leather")return 0.5+0.08*Math.sin(d*0.9)*Math.sin(u*1.3);let h=32,m=(d+u*(t=="twist"?2:0.5))%h/h;return Math.pow(Math.sin(Ie*m),0.55)},l=t=="cord"?2.2:t=="leather"?1:2.6;for(let d=0;d<64;d++)for(let u=0;u<256;u++){let h=-(o(u+1,d)-o(u-1,d))*l,m=-(o(u,d+1)-o(u,d-1))*l,x=1,b=Math.hypot(h,m,x),p=(d*256+u)*4;a[p]=(h/b*0.5+0.5)*255,a[p+1]=(m/b*0.5+0.5)*255,a[p+2]=(x/b*0.5+0.5)*255,a[p+3]=255}s.putImageData(r,0,0);let c=new _i(i);return c.wrapS=c.wrapT=mr,c}function Jg(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(0.12,"rgba(255,255,255,.75)"),n.addColorStop(0.35,"rgba(255,240,245,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),e.globalCompositeOperation="lighter";for(let[s,r]of[[0,62],[Ie/2,62],[Ie/4,30],[-Ie/4,30]]){e.save(),e.translate(64,64),e.rotate(s);let a=e.createLinearGradient(-r,0,r,0);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(0.5,"rgba(255,255,255,.95)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(-r,-1.2,r*2,2.4),e.restore()}let i=new _i(t);return i.colorSpace=qi,i}function ll(t){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),i=n.createRadialGradient(128,128,0,128,128,128);if(t)i.addColorStop(0,"rgba(74,47,53,0.04)"),i.addColorStop(0.52,"rgba(74,47,53,0.10)"),i.addColorStop(0.74,"rgba(74,47,53,0.42)"),i.addColorStop(0.86,"rgba(74,47,53,0.16)"),i.addColorStop(1,"rgba(74,47,53,0)");else i.addColorStop(0,"rgba(74,47,53,0.40)"),i.addColorStop(0.5,"rgba(74,47,53,0.16)"),i.addColorStop(1,"rgba(74,47,53,0)");n.fillStyle=i,n.fillRect(0,0,256,256);let s=new _i(e);return s.colorSpace=qi,s}function $g(t){let e=(t?t.n:"").toLowerCase(),n=t?t.m||"Silver":"Silver",i=t&&/(\d+(\.\d+)?)\s*cm/i.test(t.size||"")?parseFloat(RegExp.$1)*10:180,s="snake",r=is[n]||is.Silver,a=0.2,o=1.5;if(t&&t.f=="Bangle")s="bangle",o=1.7,a=0.14;else if(/textile cord|braided/.test(e)){s="cord",o=1.65,a=0.85;let d={blue:"#2e4a8f",red:"#a3242f",purple:"#5d3f8e",black:"#26232a",turquoise:"#2aa3a8",pink:"#e89aa8"},u=Object.keys(d).find((h)=>e.includes(h));r=u?d[u]:"#5d3f8e"}else if(/leather/.test(e))s="leather",o=1.9,a=0.7,r=/black/.test(e)?"#2a2326":/pink/.test(e)?"#d99aa5":/blue/.test(e)?"#33476e":"#6b4231";else if(/twisted/.test(e))s="twist";else if(/studded/.test(e))s="stud";let l=s=="bangle"?"ball":/heart[- ](shaped )?clasp|t-bar heart/.test(e)?"heart":"barrel",c=/14k gold-plated (heart )?clasp/.test(e)?is.Gold:/14k rose gold-plated (heart )?clasp/.test(e)?is.Rose:s=="cord"||s=="leather"?is[n]||is.Silver:r;return{kind:s,col:r,rough:a,rw:o,clasp:l,claspCol:c,metal:n,R:tn(i,150,240)/cn}}function Cv(t){let e=t.lang=="ar",n=(L)=>Hg[L][e?1:0];Qg();let i=document.createElement("div");i.className="b3",i.dir=e?"rtl":"ltr",i.innerHTML=`<div class="b3-top"><div class="b3-tt"><span class="b3-k">PANDORA</span><b>${n("title")}</b></div><button class="b3-x" aria-label="${n("x")}">×</button></div>
  <div class="b3-st"></div><div class="b3-lb" hidden></div><div class="b3-ld"><i></i><span>${n("load")}</span></div>
  <div class="b3-bot"><div class="b3-hint">${n("hint")}</div><div class="b3-tabs"></div><div class="b3-act"></div><div class="b3-card" hidden></div><div class="b3-note">${n("note")}</div></div>`,document.body.appendChild(i),document.documentElement.classList.add("b3-on"),requestAnimationFrame(()=>i.classList.add("in"));let s=(L)=>i.querySelector(L),r=!1,a=()=>re(!0);try{history.pushState({b3:1},""),addEventListener("popstate",a)}catch(L){}let o;try{o=new al({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(L){s(".b3-ld span").textContent=n("fail"),s(".b3-ld i").remove(),s(".b3-x").onclick=()=>re();return}o.setPixelRatio(Math.min(2,devicePixelRatio||1)),o.setClearColor(0,0),o.toneMapping=ys,o.toneMappingExposure=1.05,s(".b3-st").appendChild(o.domElement);let l=new Zi,c=new ts(o),d=c.fromScene(new ol,0.035).texture;l.environment=d;let u=new qe(28,1,1,3000),h=new Qe,m=new Qe;l.add(h),h.add(m);let x=new ce(new ti(1,1),new Ji({transparent:!0,depthWrite:!1,opacity:0.55,map:ll(!0)}));x.rotation.x=-Ie/2,l.add(x);let b=Jg(),p=[d,b,x.material.map,x.geometry,x.material],f={yaw:0,el:0.48,dist:210,vy:0,tgtDist:210,auto:!0,lastUser:0,cy:0},T=null,v=null,S=[],E=[];function C(){let{clientWidth:L,clientHeight:J}=i;o.setSize(L,J,!1),u.aspect=L/J,f.fit=tn(0.78/(L/J),1.3,1.85),u.setViewOffset(L,J,0,J*(L/J<1?0.075:0.03),L,J),u.updateProjectionMatrix()}C();let _=()=>C();addEventListener("resize",_);let w=(L,J,Pt,M)=>{let g=new ji({color:new Kt(L),metalness:1,roughness:J,envMapIntensity:1.25,side:je});if(Pt){if(g.normalMap=Pt,g.normalScale=new mt(0.7,0.7),M)Pt.repeat.set(M,1)}return p.push(g),g},D=(L,J,Pt,M)=>{let g=new ji({color:new Kt(L),metalness:0,roughness:J,sheen:0.6,sheenColor:new Kt("#ffffff"),sheenRoughness:0.6,normalMap:Pt||null});if(Pt&&M)Pt.repeat.set(M,1);return p.push(g),g},q=(L)=>{let J=new ji({map:L,roughness:0.34,metalness:0,clearcoat:0.55,clearcoatRoughness:0.18,emissive:new Kt("#ffffff"),emissiveMap:L,emissiveIntensity:0.2,envMapIntensity:0.75});return p.push(J,L),J},U=(L)=>{let J=(L||[]).filter((M)=>!/m\d?\.(jpe?g|png|webp)$/i.test(M.replace(/\?.*/,""))),Pt=(M)=>{let g=M.replace(/\?.*/,"").match(/_(\d)\.(jpe?g|png|webp)$/i);return g?+g[1]:9};return J.sort((M,g)=>Pt(M)-Pt(g)).slice(0,4)},V=(L)=>{let J=new Ji({map:L,transparent:!0,alphaTest:0.06,depthWrite:!0,toneMapped:!1,side:je});return p.push(J,L),J};async function st(L,J,Pt){let M=U(L.im);if(!M.length)return null;let g=await Promise.all(M.map(async(ot,O)=>{try{let W=Vg(await Wg(t,ot,720));return W&&(O==0||W.touch<2&&W.fill<0.9)?W:null}catch(W){return null}}));if(r||!g[0])return null;let F=new Te,k=[],K=0,ct=0;return g.forEach((ot,O)=>{if(!ot)return;let W=Xg(ot,J),dt=O==0?Pt.mmFrom=="w"?Pt.mm/Math.max(1,W.wmax):Pt.mm/Math.max(1,W.hgt):ct/Math.max(1,W.hgt);if(O==0)K=W.wmax*dt,ct=W.hgt*dt;let R=Pt.center?ot.cw/2:W.x,nt=Pt.center?(W.top+W.bot)/2:W.y,X=new ti(ot.cw*dt,ot.ch*dt).translate((ot.cw/2-R)*dt,-(ot.ch/2-nt)*dt,0);p.push(X);let ht=new _i(ot.canvas);ht.colorSpace=qi,ht.anisotropy=8;let ut=new ce(X,V(ht));ut.userData.item=L,ut.visible=!k.length,F.add(ut),k.push(ut)}),k.forEach((ot,O)=>ot.userData.ang=O*cn/k.length),F.userData={views:k,cur:0,off:Pt.off||0},{mesh:F,views:k,wmm:K,hmm:ct,kind:J,it:L}}async function A(){let L=$g(t.carrier),J=L.R,Pt=[];for(let Et of t.charms)for(let Vt=0;Vt<(Et.q||1);Vt++)Pt.push(Et);let M=await Promise.all(Pt.slice(0,24).map(async(Et)=>{let Vt=qg(Et),ee=Yg(Et,Vt);try{return await st(Et,Vt,{mm:ee,mmFrom:"h",off:Vt=="dangle"?1.6:Vt=="link"?2.2:Vt=="spacer"?3:4.2})}catch(he){return null}}));if(r)return;let g=M.filter(Boolean),F=L.clasp=="heart"?11:L.clasp=="ball"?5.4:9.6,k=F/2/J,K=J*(cn-2*k),ct={open:0,R:J,g:k,rigid:L.kind=="bangle"},ot=(Et,Vt)=>{let ee=Ie+k+Et*(cn-2*k),he=Math.sin(ee),Ve=Math.cos(ee);if(Vt.set(J*he,0,J*Ve),!ct.rigid&&ct.open>0){let Oe=kg((Et-0.74)/0.26);Oe*=Oe;let nn=ct.open*Oe;Vt.x+=he*13*nn,Vt.z+=Ve*13*nn,Vt.y+=15*nn}return Vt},O=new class extends Je{getPoint(Et,Vt=new N){return ot(Et,Vt)}},W=(Et,Vt)=>{let ee=ot(Et,new N),he=ot(Math.max(0,Et-0.002),new N),Oe=ot(Math.min(1,Et+0.002),new N).sub(he).normalize(),nn=new N(0,1,0),y=new N().crossVectors(Oe,nn).normalize();nn.crossVectors(y,Oe),Vt.position.copy(ee),Vt.quaternion.setFromRotationMatrix(new fe().makeBasis(Oe,nn,y))},R=L.kind!="cord"&&L.kind!="leather"?L.kind=="bangle"?[0.12,0.88]:[0.3333333333333333,0.6666666666666666]:[],nt=0.7,X=(Et)=>Et/K,ht=[],ut=g.filter((Et)=>Et.kind=="clip"),xt=g.filter((Et)=>Et.kind!="clip");for(let Et of ut){let Vt=R.filter((ee)=>!ht.some((he)=>Math.abs(he.c-ee)<0.01));if(Vt.length){let ee=Vt.sort((he,Ve)=>Math.abs(he-0.5)-Math.abs(Ve-0.5))[0];Et.s=ee,ht.push({c:ee,a:ee-X(Et.wmm/2),b:ee+X(Et.wmm/2)})}else xt.push(Et)}for(let Et of R)if(!ht.some((Vt)=>Math.abs(Vt.c-Et)<0.01))ht.push({c:Et,a:Et-X(1.6),b:Et+X(1.6)});let Ht=(Et,Vt)=>ht.some((ee)=>Et<ee.b+X(0.3)&&Vt>ee.a-X(0.3)),kt=0.5,Rt=0.5,Wt=!0,jt=xt.reduce((Et,Vt)=>Et+X((Vt.kind=="dangle"?Vt.wmm*0.55:Vt.wmm)+nt),0),Ct=jt>0.9?0.9/jt:1;xt.forEach((Et,Vt)=>{let ee=X(((Et.kind=="dangle"?Et.wmm*0.55:Et.wmm)+nt)*Ct);if(Wt)Et.s=0.5,kt=0.5+ee/2,Rt=0.5-ee/2,Wt=!1;else if(Vt%2){let he=kt;while(Ht(he,he+ee)&&he<0.98)he+=X(0.5);Et.s=he+ee/2,kt=he+ee}else{let he=Rt;while(Ht(he-ee,he)&&he>0.02)he-=X(0.5);Et.s=he-ee/2,Rt=he-ee}if(Et.s=tn(Et.s,0.04,0.96),Ct<1)Et.mesh.scale.setScalar(Math.max(0.6,Ct))});let ue=L.kind=="bangle"?null:Zg(L.kind=="stud"?"snake":L.kind);if(ue)p.push(ue);let Ee=L.kind=="cord"||L.kind=="leather"?D(L.col,L.rough,ue,K/8):w(L.col,L.rough,ue,K/8),Ae=w(L.claspCol,0.16),Mi=w(L.claspCol,0.5),Jr=w(L.claspCol,0.32),bi=new ce(new Ki(O,300,L.rw,14,!1),Ee);m.add(bi);let Fs=()=>{bi.geometry.dispose(),bi.geometry=new Ki(O,300,L.rw,14,!1)},gn=new ce(new Fn(L.rw*1.05,18,12),Ae),Bn=new Te,ss=new ce(new Fn(L.rw*1.25,20,14),Ae);ss.position.x=0.9,Bn.add(ss);let Os=new ce(new jn([new mt(0.01,-1.6),new mt(L.rw*1.1,-1.4),new mt(L.rw*0.9,0),new mt(0.01,0.2)],18).rotateZ(-Ie/2),Ae);Bn.add(Os),m.add(gn,Bn),W(0,gn);let Ye=new Qe;Ye.position.set(0,0,-J),Ye.quaternion.setFromRotationMatrix(new fe().makeBasis(new N(-1,0,0),new N(0,1,0),new N(0,0,-1))),m.add(Ye);let en=null,zn=null;if(L.clasp=="barrel"){let Et=[],Vt=F/2,ee=4.1;for(let y=0;y<=24;y++){let P=-Vt+F*y/24,Y=Math.abs(P)/Vt,z=4.1*Math.sqrt(Math.max(0,1-Math.pow(Y,3.2)));if(z=Math.max(z,L.rw*1.15),Math.abs(P)<0.45)z-=0.28;Et.push(new mt(z,P))}let he=new ce(new jn(Et,30,0,Ie).rotateZ(-Ie/2),Ae),Ve=new jn(Et,30,Ie,Ie).rotateZ(-Ie/2);en=new Qe,en.position.set(0,0,-4.1);let Oe=new ce(Ve,Ae);Oe.position.z=4.1,en.add(Oe);let nn=new ce(new $i(3.8999999999999995,0.2,8,40).rotateY(Ie/2),Mi);he.add(nn),Ye.add(he,en)}else if(L.clasp=="heart"){let Et=new Rs;Et.moveTo(0,-3.1),Et.bezierCurveTo(-0.9299999999999999,-2.108,-4.712,0,-4.712,2.108),Et.bezierCurveTo(-4.712,4.34,-1.612,4.898000000000001,0,2.79),Et.bezierCurveTo(1.612,4.898000000000001,4.712,4.34,4.712,2.108),Et.bezierCurveTo(4.712,0,0.9299999999999999,-2.108,0,-3.1);let ee=(Oe)=>new Cs(Et,{depth:Oe,bevelEnabled:!0,bevelThickness:0.7,bevelSize:0.7,bevelSegments:4,curveSegments:24}),he=new ce(ee(1.6).translate(0,-1.2,-2.3),Ae);Ye.add(he),en=new Qe,en.position.set(0,-4.3,0);let Ve=new ce(ee(1.2).translate(0,0,0),Ae);Ve.position.y=3.1,en.add(Ve),Ye.add(en)}else{let Et=new ce(new Fn(2.7,28,20),Ae);Et.position.x=2.6,Ye.add(Et),zn=new Qe;let Vt=new ce(new Fn(2.7,28,20),Ae);zn.add(Vt);let ee=new ce(new $i(2.62,0.12,6,40).rotateY(Ie/2),Mi);Vt.add(ee),zn.position.x=-2.6,Ye.add(zn)}let ei=[];for(let Et of R){let Vt=[new mt(L.rw*0.9,-1.35)];for(let he=0;he<=40;he++){let Ve=-1.2+2.4*he/40,Oe=Math.sin(Ie*he/40);Vt.push(new mt(L.rw+(0.1+0.16*(0.5+0.5*Math.cos(Ve*cn/0.45)))*Math.pow(Oe,0.3),Ve))}Vt.push(new mt(L.rw*0.9,1.35));let ee=new ce(new jn(Vt,32).rotateZ(-Ie/2),Jr);W(Et,ee),m.add(ee),ei.push(ee)}if(L.kind=="stud")for(let Et=0.06;Et<0.95;Et+=X(7.5)){if(g.some((ee)=>Math.abs(ee.s-Et)<X(ee.wmm/2+2))||R.some((ee)=>Math.abs(ee-Et)<X(3)))continue;let Vt=new ce(new Fn(L.rw*1.35,16,12),Ae);W(Et,Vt),m.add(Vt)}for(let Et of g){let Vt=new Te;Vt.add(Et.mesh),m.add(Vt),Et.holder=Vt,Et.phx=0,Et.vx=0,Et.phz=0,Et.vz=0,Et.prev=null,Et.pv=new N,Et.acc=new N,S.push(...Et.views)}v={sp:L,st:ct,pcs:g,frame:W,pt:ot,rebuildWire:Fs,endB:Bn,lid:en,ballB:zn,clasp:Ye,t0:performance.now()/1000,open:0,playing:!0,lastOpen:-1,Rr:J},x.material.map.dispose(),x.material.map=ll(!0),x.scale.setScalar(J*2.75),x.position.y=-26,p.push(x.material.map),f.cy=-5,f.yaw=Ie,f.tgtDist=f.dist=J*7.1*(f.fit||1),f.el=0.5,j(0)}function j(L){if(!v)return;let J=v.pcs.length,Pt=[...v.pcs].sort((O,W)=>O.s-W.s),M=J>8?0.3:0.45,g=1.55,F=0.5,k=1.45,K=k+(J?(J-1)*M+g:0.6),ct=K+0.15;v.tEnd=ct+0.9;let ot=L<F?0:L<k?Us((L-F)/(k-F-0.1)):L<ct?1:1-Us((L-ct)/0.75);if(tt(ot),Pt.forEach((O,W)=>{let dt=(L-k-W*M)/g;if(dt<=0){O.holder.visible=!1;return}if(O.holder.visible=!0,dt>=1){v.frame(O.s,O.holder),O.mesh.scale.setScalar(O.mesh.userData.sc||O.mesh.scale.x);return}if(O.mesh.userData.sc=O.mesh.userData.sc||O.mesh.scale.x,dt<0.28){let R=Gg(dt/0.28);v.frame(1,O.holder),O.holder.position.y+=26*(1-R),O.holder.position.add(new N(O.holder.position.x,0,O.holder.position.z).setLength(6*(1-R))),O.mesh.scale.setScalar(O.mesh.userData.sc*(0.4+0.6*R))}else{let R=Us((dt-0.28)/0.72);v.frame(1-(1-O.s)*R,O.holder),O.mesh.scale.setScalar(O.mesh.userData.sc)}}),!f.userSpun)f.yaw=Ie*(1-Us((L-k+0.2)/Math.max(1.2,K-k+0.2)));if(L>=ct+0.75&&!v.clicked)v.clicked=!0,G();if(L>=v.tEnd)v.playing=!1,Dt()}function tt(L){if(!v)return;if(L=tn(L,0,1),v.open=L,Math.abs(L-v.lastOpen)>0.0001){if(v.st.open=L,!v.st.rigid)v.rebuildWire();if(v.frame(1,v.endB),v.lastOpen=L,v.lid)v.lid.rotation.x=v.sp.clasp=="heart"?L*1.55:-L*1.8;if(v.ballB)v.ballB.position.set(-2.6-7*L,5*L,0),v.ballB.rotation.x=L*cn*1.5;if(!v.playing){for(let J of v.pcs)if(J.s>0.7)v.frame(J.s,J.holder)}}}function G(){try{if(navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive))navigator.vibrate(18)}catch(L){}f.shake=1;for(let L of E)L.userData.boost=1}async function gt(L){let J=L.c,Pt=J==3?"ring":J==2?"ear":J==1?"neck":"other",M=await st(L,"piece",{mm:46,mmFrom:"w",center:!0});if(r||!M)return!1;let g=new Te;g.add(M.mesh),m.add(g),S.push(...M.views),Z=g;let F={min:{y:-M.hmm/2},max:{y:M.hmm/2}};return x.material.map.dispose(),x.material.map=ll(!1),p.push(x.material.map),x.scale.set(Math.max(30,M.wmm*1.2),1,1),x.scale.setScalar(Math.max(34,M.wmm*1.25)),x.position.y=-(F.max.y-F.min.y)/2-8,f.cy=0,f.yaw=0,f.el=0.12,f.tgtDist=f.dist=Math.max(M.wmm,M.hmm)*3.6*(f.fit||1),!0}let Z=null;function Q(){v=null,Z=null,S.length=0,E.length=0;for(let L of[...m.children])m.remove(L),L.traverse((J)=>{if(J.geometry)J.geometry.dispose()})}let rt=[];if(t.charms.length||t.carrier)rt.push({k:"b",label:n("bracelet")});for(let L of t.pieces)rt.push({k:"p",it:L,label:L.n});let bt=-1,it=!1;async function ft(L){if(it||L==bt)return;it=!0,bt=L,Q(),i.classList.add("busy"),s(".b3-lb").hidden=!0,vt(),zt();let J=rt[L];try{if(J.k=="b")await A();else await gt(J.it)}catch(Pt){console.warn("b3d",Pt)}i.classList.remove("busy"),it=!1,zt(),At(),s(".b3-ld").hidden=!0}function vt(){let L=s(".b3-tabs");L.hidden=rt.length<2,L.innerHTML=rt.map((J,Pt)=>`<button class="${Pt==bt?"on":""}" data-i="${Pt}">${J.k=="b"?"◯ ":""}${cl(Kg(J.label))}</button>`).join("")}function zt(){let L=s(".b3-act"),J=rt[bt]&&rt[bt].k=="b";L.innerHTML=(J?`<button data-a="replay">↻ ${n("replay")}</button>`:"")+`<button data-a="save">⤓ ${n("save")}</button>`,Dt()}function Dt(){let L=i.querySelector(".b3-cl");if(L&&v)L.textContent=v.open>0.5&&!v.playing?n("close"):n("open")}function At(){let L=s(".b3-card"),J=t.fallback;if(!(rt[bt]&&rt[bt].k=="b")||!J){L.hidden=!0;return}L.hidden=!1;let M=t.isOnList(J.id);L.innerHTML=`<div><small>${n("shown")}</small><b>${cl(J.n)}</b><span>${t.fmt(J.p)}</span></div><button data-a="addc" ${M?"disabled":""}>${M?n("added"):n("add")}</button>`}i.addEventListener("click",(L)=>{let J=L.target.closest("button");if(!J)return;if(J.classList.contains("b3-x"))return re();if(J.dataset.i!=null)return ft(+J.dataset.i);let Pt=J.dataset.a;if(Pt=="replay"&&v){v.t0=performance.now()/1000,v.playing=!0,v.clicked=!1,f.userSpun=!1;for(let M of v.pcs)M.phx=M.vx=M.phz=M.vz=0,M.prev=null}if(Pt=="clasp"&&v&&!v.playing)v.anim={from:v.open,to:v.open>0.5?0:1,t0:performance.now()/1000},J.textContent=v.open>0.5?n("open"):n("close");if(Pt=="save")Ut();if(Pt=="addc"&&t.fallback)t.onAdd(t.fallback.id),At()});let Xt=new Map,B=null,at=null,_t=o.domElement;_t.style.touchAction="none",_t.addEventListener("pointerdown",(L)=>{if(_t.setPointerCapture(L.pointerId),Xt.set(L.pointerId,{x:L.clientX,y:L.clientY}),v&&v.playing&&performance.now()/1000-v.t0>0.4)v.t0=performance.now()/1000-100;if(f.lastUser=performance.now(),Xt.size==1)B={x:L.clientX,y:L.clientY,t:performance.now(),moved:0};else if(Xt.size==2){let[J,Pt]=[...Xt.values()];at={d:Math.hypot(J.x-Pt.x,J.y-Pt.y),dist:f.tgtDist},B=null}}),_t.addEventListener("pointermove",(L)=>{if(!Xt.has(L.pointerId))return;if(Xt.set(L.pointerId,{x:L.clientX,y:L.clientY}),f.lastUser=performance.now(),at&&Xt.size==2){let[F,k]=[...Xt.values()],K=Math.hypot(F.x-k.x,F.y-k.y);f.tgtDist=tn(at.dist*at.d/Math.max(20,K),pt(),St());return}if(!B)return;let J=L.clientX-B.x,Pt=L.clientY-B.y,M=performance.now(),g=Math.max(1,M-B.t);B.moved+=Math.abs(J)+Math.abs(Pt),f.yaw+=J*0.0085,f.el=tn(f.el+Pt*0.006,-0.15,1.25),f.vy=J*0.0085/(g/1000)*0.9,f.userSpun=!0,B.x=L.clientX,B.y=L.clientY,B.t=M});let et=(L)=>{if(!Xt.has(L.pointerId))return;if(Xt.delete(L.pointerId),B&&B.moved<8)Nt(L);if(Xt.size<2)at=null;if(!Xt.size)B=null;if(B&&performance.now()-B.t>80)f.vy=0};_t.addEventListener("pointerup",et),_t.addEventListener("pointercancel",et),_t.addEventListener("wheel",(L)=>{L.preventDefault(),f.tgtDist=tn(f.tgtDist*Math.exp(L.deltaY*0.0012),pt(),St()),f.lastUser=performance.now()},{passive:!1});let lt=0,pt=()=>v?v.Rr*3.2:60,St=()=>v?v.Rr*12:400,yt=new Wr;function Nt(L){let J=performance.now();if(J-lt<300)f.tgtDist=v?v.Rr*7.1*(f.fit||1):f.tgtDist,f.el=v?0.5:0.18;lt=J;let Pt=_t.getBoundingClientRect();yt.setFromCamera(new mt((L.clientX-Pt.left)/Pt.width*2-1,-(L.clientY-Pt.top)/Pt.height*2+1),u);let M=yt.intersectObjects(S.filter((F)=>F.visible),!1)[0],g=s(".b3-lb");if(M){let F=M.object.userData.item;g.innerHTML=`<b>${cl(F.n)}</b><span>${t.fmt(F.p)}</span>`,g.hidden=!1,clearTimeout(g._t),g._t=setTimeout(()=>g.hidden=!0,4000);let k=v&&v.pcs.find((K)=>K.views.includes(M.object));if(k)k.vz+=5;M.object.userData.pop=1}else g.hidden=!0}async function Ut(){let L=o.getPixelRatio();o.setPixelRatio(Math.min(3,L*1.5)),C(),o.render(l,u);let J=await new Promise((g)=>o.domElement.toBlob(g,"image/png"));if(o.setPixelRatio(L),C(),!J)return;let Pt=new File([J],"pandora-360.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[Pt]})){await navigator.share({files:[Pt],title:"Pandora"});return}}catch(g){if(g&&g.name=="AbortError")return}let M=document.createElement("a");M.href=URL.createObjectURL(J),M.download="pandora-360.png",document.body.appendChild(M),M.click(),setTimeout(()=>{URL.revokeObjectURL(M.href),M.remove()},1500)}let Yt=0,Jt=performance.now(),ne=new N,I=new mn,ge=new N;function $t(L){Yt=requestAnimationFrame($t);let J=Math.min(0.05,(L-Jt)/1000);Jt=L;let Pt=L/1000;if(v&&v.playing)j((Pt-v.t0)*(t.timeScale||1));else if(v&&v.anim){let k=Us((Pt-v.anim.t0)/0.8);if(tt(v.anim.from+(v.anim.to-v.anim.from)*k),k>=1){if(v.anim.to==0)G();v.anim=null,Dt()}}if(!B){if(f.yaw+=f.vy*J,f.vy*=Math.pow(0.06,J),Math.abs(f.vy)<0.02)f.vy=0}if(L-f.lastUser>3500&&!(v&&(v.playing||v.anim))&&!B)f.yaw+=J*0.32;f.dist+=(f.tgtDist-f.dist)*(1-Math.pow(0.001,J)),m.rotation.y=f.yaw,h.position.y=f.cy+Math.sin(Pt*1.1)*0.9;let g=0,F=0;if(f.shake)f.shake=Math.max(0,f.shake-J*3),g=(Math.random()-0.5)*f.shake*0.8,F=(Math.random()-0.5)*f.shake*0.8;if(u.position.set(g,Math.sin(f.el)*f.dist+F,Math.cos(f.el)*f.dist),u.lookAt(0,f.cy*0.4,0),v)for(let k of v.pcs){if(k.kind!="dangle"||!k.holder.visible)continue;if(k.holder.getWorldPosition(ge),k.prev){let ot=ge.clone().sub(k.prev).divideScalar(Math.max(J,0.001)),O=ot.clone().sub(k.pv).divideScalar(Math.max(J,0.001));k.acc.lerp(O,0.35),k.pv.copy(ot)}k.prev=ge.clone(),ne.set(0,-9800,0).addScaledVector(k.acc,-9).applyQuaternion(u.quaternion.clone().invert());let K=Math.atan2(ne.x,-ne.y),ct=Math.hypot(ne.x,ne.y)/70;k.vz+=(ct*Math.sin(K-k.phz)-2.4*k.vz)*J,k.phz=tn(k.phz+k.vz*J,-0.6,0.6)}for(let k of v?v.pcs.map((K)=>K.holder):Z?[Z]:[]){let K=k.children[0];if(!K||!k.visible||!K.userData.views)continue;k.getWorldPosition(ge),k.getWorldQuaternion(I);let ct=u.position.clone().sub(ge).normalize(),ot=new N(0,0,1).applyQuaternion(I),O=Math.atan2(ot.z*ct.x-ot.x*ct.z,ot.x*ct.x+ot.z*ct.z),W=K.userData,dt=W.views.length;if(dt>1){let X=(ut)=>{let xt=Math.abs(((O-W.views[ut].userData.ang)%cn+cn)%cn);return Math.min(xt,cn-xt)},ht=W.cur;for(let ut=0;ut<dt;ut++)if(X(ut)<X(ht)-0.2)ht=ut;if(ht!=W.cur)W.views[W.cur].visible=!1,W.views[ht].visible=!0,W.cur=ht}let R=I.clone().invert();K.quaternion.copy(R).multiply(u.quaternion);let nt=v&&v.pcs.find((X)=>X.holder==k);if(nt&&nt.kind=="dangle")K.rotateZ(nt.phz);K.position.copy(ct.multiplyScalar(W.off)).applyQuaternion(R)}for(let k of E){let K=k.userData;k.getWorldPosition(ge);let ct=u.position.clone().sub(ge).normalize(),ot=Math.pow(Math.max(0,Math.sin(Pt*K.sp+K.ph+m.rotation.y*5+ct.y*6)),10);K.boost=Math.max(0,(K.boost||0)-J*1.2),k.material.opacity=tn(ot*0.95+K.boost,0,1),k.visible=k.parent&&k.parent.parent&&k.parent.parent.visible!==!1}for(let k of S)if(k.userData.pop){k.userData.pop=Math.max(0,k.userData.pop-J*3);let K=1+Math.sin(k.userData.pop*Ie)*0.12;if(k.scale.setScalar((k.userData.sc||1)*K),!k.userData.pop)k.scale.setScalar(k.userData.sc||1)}x.position.x=0,x.position.z=0,o.render(l,u)}Yt=requestAnimationFrame($t),s(".b3-x").onclick=()=>re();let Se=(L)=>{if(L.key=="Escape")re()};addEventListener("keydown",Se);let wt=()=>{if(document.hidden)cancelAnimationFrame(Yt),Yt=0;else if(!Yt&&!r)Jt=performance.now(),Yt=requestAnimationFrame($t)};document.addEventListener("visibilitychange",wt);function re(L){if(r)return;if(r=!0,cancelAnimationFrame(Yt),removeEventListener("resize",_),removeEventListener("keydown",Se),removeEventListener("popstate",a),document.removeEventListener("visibilitychange",wt),!L)try{if(history.state&&history.state.b3)history.back()}catch(J){}i.classList.remove("in"),document.documentElement.classList.remove("b3-on"),setTimeout(()=>{Q();for(let J of p)try{J.dispose()}catch(Pt){}c.dispose(),o.dispose();try{o.forceContextLoss()}catch(J){}i.remove(),t.onClose&&t.onClose()},260)}if(!rt.length){re();return}ft(0)}var cl=(t)=>String(t).replace(/[&<>"]/g,(e)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Kg=(t)=>t.length>34?t.slice(0,32).replace(/\s+\S*$/,"")+"…":t;function Qg(){if(document.getElementById("b3css"))return;let t=document.createElement("style");t.id="b3css",t.textContent=`
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
`,document.head.appendChild(t)}export{Cv as open};

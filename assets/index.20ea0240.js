const Ge=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};Ge();var Pe={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ie={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Ke=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],U={CSS:{},springs:{}};function L(e,r,t){return Math.min(Math.max(e,r),t)}function N(e,r){return e.indexOf(r)>-1}function ee(e,r){return e.apply(null,r)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return N(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e=="undefined"},nil:function(e){return l.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!Pe.hasOwnProperty(e)&&!ie.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Le(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(t){return parseFloat(t)}):[]}function Se(e,r){var t=Le(e),a=L(l.und(t[0])?1:t[0],.1,100),n=L(l.und(t[1])?100:t[1],.1,100),o=L(l.und(t[2])?10:t[2],.1,100),u=L(l.und(t[3])?0:t[3],.1,100),s=Math.sqrt(n/a),i=o/(2*Math.sqrt(n*a)),g=i<1?s*Math.sqrt(1-i*i):0,c=1,f=i<1?(i*s+-u)/g:-u+s;function h(m){var d=r?r*m/1e3:m;return i<1?d=Math.exp(-d*i*s)*(c*Math.cos(g*d)+f*Math.sin(g*d)):d=(c+f*d)*Math.exp(-d*s),m===0||m===1?m:1-d}function w(){var m=U.springs[e];if(m)return m;for(var d=1/6,x=0,k=0;;)if(x+=d,h(x)===1){if(k++,k>=16)break}else k=0;var p=x*d*1e3;return U.springs[e]=p,p}return r?h:w}function Xe(e){return e===void 0&&(e=10),function(r){return Math.ceil(L(r,1e-6,1)*e)*(1/e)}}var er=function(){var e=11,r=1/(e-1);function t(c,f){return 1-3*f+3*c}function a(c,f){return 3*f-6*c}function n(c){return 3*c}function o(c,f,h){return((t(f,h)*c+a(f,h))*c+n(f))*c}function u(c,f,h){return 3*t(f,h)*c*c+2*a(f,h)*c+n(f)}function s(c,f,h,w,m){var d,x,k=0;do x=f+(h-f)/2,d=o(x,w,m)-c,d>0?h=x:f=x;while(Math.abs(d)>1e-7&&++k<10);return x}function i(c,f,h,w){for(var m=0;m<4;++m){var d=u(f,h,w);if(d===0)return f;var x=o(f,h,w)-c;f-=x/d}return f}function g(c,f,h,w){if(!(0<=c&&c<=1&&0<=h&&h<=1))return;var m=new Float32Array(e);if(c!==f||h!==w)for(var d=0;d<e;++d)m[d]=o(d*r,c,h);function x(k){for(var p=0,v=1,T=e-1;v!==T&&m[v]<=k;++v)p+=r;--v;var D=(k-m[v])/(m[v+1]-m[v]),b=p+D*r,A=u(b,c,h);return A>=.001?i(k,b,c,h):A===0?b:s(k,p,p+r,c,h)}return function(k){return c===f&&h===w||k===0||k===1?k:o(x(k),f,w)}}return g}(),Ce=function(){var e={linear:function(){return function(a){return a}}},r={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var n,o=4;a<((n=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((n*3-2)/22-a,2)}},Elastic:function(a,n){a===void 0&&(a=1),n===void 0&&(n=.5);var o=L(a,1,10),u=L(n,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(a,n){r[a]=function(){return function(o){return Math.pow(o,n+2)}}}),Object.keys(r).forEach(function(a){var n=r[a];e["easeIn"+a]=n,e["easeOut"+a]=function(o,u){return function(s){return 1-n(o,u)(1-s)}},e["easeInOut"+a]=function(o,u){return function(s){return s<.5?n(o,u)(s*2)/2:1-n(o,u)(s*-2+2)/2}},e["easeOutIn"+a]=function(o,u){return function(s){return s<.5?(1-n(o,u)(1-s*2))/2:(n(o,u)(s*2-1)+1)/2}}}),e}();function oe(e,r){if(l.fnc(e))return e;var t=e.split("(")[0],a=Ce[t],n=Le(e);switch(t){case"spring":return Se(e,r);case"cubicBezier":return ee(er,n);case"steps":return ee(Xe,n);default:return ee(a,n)}}function De(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function J(e,r){for(var t=e.length,a=arguments.length>=2?arguments[1]:void 0,n=[],o=0;o<t;o++)if(o in e){var u=e[o];r.call(a,u,o,e)&&n.push(u)}return n}function Y(e){return e.reduce(function(r,t){return r.concat(l.arr(t)?Y(t):t)},[])}function be(e){return l.arr(e)?e:(l.str(e)&&(e=De(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ue(e,r){return e.some(function(t){return t===r})}function se(e){var r={};for(var t in e)r[t]=e[t];return r}function te(e,r){var t=se(e);for(var a in e)t[a]=r.hasOwnProperty(a)?r[a]:e[a];return t}function _(e,r){var t=se(e);for(var a in r)t[a]=l.und(e[a])?r[a]:e[a];return t}function rr(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function nr(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(r,function(s,i,g,c){return i+i+g+g+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+n+","+o+","+u+",1)"}function tr(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),t=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,n=parseInt(r[3],10)/100,o=r[4]||1;function u(h,w,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?h+(w-h)*6*m:m<1/2?w:m<2/3?h+(w-h)*(2/3-m)*6:h}var s,i,g;if(a==0)s=i=g=n;else{var c=n<.5?n*(1+a):n+a-n*a,f=2*n-c;s=u(f,c,t+1/3),i=u(f,c,t),g=u(f,c,t-1/3)}return"rgba("+s*255+","+i*255+","+g*255+","+o+")"}function ar(e){if(l.rgb(e))return rr(e);if(l.hex(e))return nr(e);if(l.hsl(e))return tr(e)}function C(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function ir(e){if(N(e,"translate")||e==="perspective")return"px";if(N(e,"rotate")||N(e,"skew"))return"deg"}function ae(e,r){return l.fnc(e)?e(r.target,r.id,r.total):e}function S(e,r){return e.getAttribute(r)}function ce(e,r,t){var a=C(r);if(ue([t,"deg","rad","turn"],a))return r;var n=U.CSS[r+t];if(!l.und(n))return n;var o=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+t;var i=o/u.offsetWidth;s.removeChild(u);var g=i*parseFloat(r);return U.CSS[r+t]=g,g}function Ee(e,r,t){if(r in e.style){var a=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=e.style[r]||getComputedStyle(e).getPropertyValue(a)||"0";return t?ce(e,n,t):n}}function le(e,r){if(l.dom(e)&&!l.inp(e)&&(!l.nil(S(e,r))||l.svg(e)&&e[r]))return"attribute";if(l.dom(e)&&ue(Ke,r))return"transform";if(l.dom(e)&&r!=="transform"&&Ee(e,r))return"css";if(e[r]!=null)return"object"}function Ae(e){if(!!l.dom(e)){for(var r=e.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map,n;n=t.exec(r);)a.set(n[1],n[2]);return a}}function or(e,r,t,a){var n=N(r,"scale")?1:0+ir(r),o=Ae(e).get(r)||n;return t&&(t.transforms.list.set(r,o),t.transforms.last=r),a?ce(e,o,a):o}function fe(e,r,t,a){switch(le(e,r)){case"transform":return or(e,r,a,t);case"css":return Ee(e,r,t);case"attribute":return S(e,r);default:return e[r]||0}}function de(e,r){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var a=C(e)||0,n=parseFloat(r),o=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return n+o+a;case"-":return n-o+a;case"*":return n*o+a}}function ze(e,r){if(l.col(e))return ar(e);if(/\s/g.test(e))return e;var t=C(e),a=t?e.substr(0,e.length-t.length):e;return r?a+r:a}function ve(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function ur(e){return Math.PI*2*S(e,"r")}function sr(e){return S(e,"width")*2+S(e,"height")*2}function cr(e){return ve({x:S(e,"x1"),y:S(e,"y1")},{x:S(e,"x2"),y:S(e,"y2")})}function Fe(e){for(var r=e.points,t=0,a,n=0;n<r.numberOfItems;n++){var o=r.getItem(n);n>0&&(t+=ve(a,o)),a=o}return t}function lr(e){var r=e.points;return Fe(e)+ve(r.getItem(r.numberOfItems-1),r.getItem(0))}function Be(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return ur(e);case"rect":return sr(e);case"line":return cr(e);case"polyline":return Fe(e);case"polygon":return lr(e)}}function fr(e){var r=Be(e);return e.setAttribute("stroke-dasharray",r),r}function dr(e){for(var r=e.parentNode;l.svg(r)&&l.svg(r.parentNode);)r=r.parentNode;return r}function Ve(e,r){var t=r||{},a=t.el||dr(e),n=a.getBoundingClientRect(),o=S(a,"viewBox"),u=n.width,s=n.height,i=t.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function vr(e,r){var t=l.str(e)?De(e)[0]:e,a=r||100;return function(n){return{property:n,el:t,svg:Ve(t),totalLength:Be(t)*(a/100)}}}function gr(e,r,t){function a(c){c===void 0&&(c=0);var f=r+c>=1?r+c:0;return e.el.getPointAtLength(f)}var n=Ve(e.el,e.svg),o=a(),u=a(-1),s=a(1),i=t?1:n.w/n.vW,g=t?1:n.h/n.vH;switch(e.property){case"x":return(o.x-n.x)*i;case"y":return(o.y-n.y)*g;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function ke(e,r){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=ze(l.pth(e)?e.totalLength:e,r)+"";return{original:a,numbers:a.match(t)?a.match(t).map(Number):[0],strings:l.str(e)||r?a.split(t):[]}}function ge(e){var r=e?Y(l.arr(e)?e.map(be):be(e)):[];return J(r,function(t,a,n){return n.indexOf(t)===a})}function He(e){var r=ge(e);return r.map(function(t,a){return{target:t,id:a,total:r.length,transforms:{list:Ae(t)}}})}function pr(e,r){var t=se(r);if(/^spring/.test(t.easing)&&(t.duration=Se(t.easing)),l.arr(e)){var a=e.length,n=a===2&&!l.obj(e[0]);n?e={value:e}:l.fnc(r.duration)||(t.duration=r.duration/a)}var o=l.arr(e)?e:[e];return o.map(function(u,s){var i=l.obj(u)&&!l.pth(u)?u:{value:u};return l.und(i.delay)&&(i.delay=s?0:r.delay),l.und(i.endDelay)&&(i.endDelay=s===o.length-1?r.endDelay:0),i}).map(function(u){return _(u,t)})}function hr(e){for(var r=J(Y(e.map(function(o){return Object.keys(o)})),function(o){return l.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),t={},a=function(o){var u=r[o];t[u]=e.map(function(s){var i={};for(var g in s)l.key(g)?g==u&&(i.value=s[g]):i[g]=s[g];return i})},n=0;n<r.length;n++)a(n);return t}function mr(e,r){var t=[],a=r.keyframes;a&&(r=_(hr(a),r));for(var n in r)l.key(n)&&t.push({name:n,tweens:pr(r[n],e)});return t}function yr(e,r){var t={};for(var a in e){var n=ae(e[a],r);l.arr(n)&&(n=n.map(function(o){return ae(o,r)}),n.length===1&&(n=n[0])),t[a]=n}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function xr(e,r){var t;return e.tweens.map(function(a){var n=yr(a,r),o=n.value,u=l.arr(o)?o[1]:o,s=C(u),i=fe(r.target,e.name,s,r),g=t?t.to.original:i,c=l.arr(o)?o[0]:g,f=C(c)||C(i),h=s||f;return l.und(u)&&(u=g),n.from=ke(c,h),n.to=ke(de(u,c),h),n.start=t?t.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=oe(n.easing,n.duration),n.isPath=l.pth(o),n.isPathTargetInsideSVG=n.isPath&&l.svg(r.target),n.isColor=l.col(n.from.original),n.isColor&&(n.round=1),t=n,n})}var Re={css:function(e,r,t){return e.style[r]=t},attribute:function(e,r,t){return e.setAttribute(r,t)},object:function(e,r,t){return e[r]=t},transform:function(e,r,t,a,n){if(a.list.set(r,t),r===a.last||n){var o="";a.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function $e(e,r){var t=He(e);t.forEach(function(a){for(var n in r){var o=ae(r[n],a),u=a.target,s=C(o),i=fe(u,n,s,a),g=s||C(i),c=de(ze(o,g),i),f=le(u,n);Re[f](u,n,c,a.transforms,!0)}})}function br(e,r){var t=le(e.target,r.name);if(t){var a=xr(r,e),n=a[a.length-1];return{type:t,property:r.name,animatable:e,tweens:a,duration:n.end,delay:a[0].delay,endDelay:n.endDelay}}}function kr(e,r){return J(Y(e.map(function(t){return r.map(function(a){return br(t,a)})})),function(t){return!l.und(t)})}function je(e,r){var t=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},n={};return n.duration=t?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):r.duration,n.delay=t?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):r.delay,n.endDelay=t?n.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):r.endDelay,n}var Me=0;function Mr(e){var r=te(Pe,e),t=te(ie,e),a=mr(t,e),n=He(e.targets),o=kr(n,a),u=je(o,t),s=Me;return Me++,_(r,{id:s,children:[],animatables:n,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var P=[],Ne=function(){var e;function r(){!e&&(!we()||!y.suspendWhenDocumentHidden)&&P.length>0&&(e=requestAnimationFrame(t))}function t(n){for(var o=P.length,u=0;u<o;){var s=P[u];s.paused?(P.splice(u,1),o--):(s.tick(n),u++)}e=u>0?requestAnimationFrame(t):void 0}function a(){!y.suspendWhenDocumentHidden||(we()?e=cancelAnimationFrame(e):(P.forEach(function(n){return n._onDocumentVisibility()}),Ne()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",a),r}();function we(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var r=0,t=0,a=0,n,o=0,u=null;function s(p){var v=window.Promise&&new Promise(function(T){return u=T});return p.finished=v,v}var i=Mr(e);s(i);function g(){var p=i.direction;p!=="alternate"&&(i.direction=p!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,n.forEach(function(v){return v.reversed=i.reversed})}function c(p){return i.reversed?i.duration-p:p}function f(){r=0,t=c(i.currentTime)*(1/y.speed)}function h(p,v){v&&v.seek(p-v.timelineOffset)}function w(p){if(i.reversePlayback)for(var T=o;T--;)h(p,n[T]);else for(var v=0;v<o;v++)h(p,n[v])}function m(p){for(var v=0,T=i.animations,D=T.length;v<D;){var b=T[v],A=b.animatable,H=b.tweens,z=H.length-1,M=H[z];z&&(M=J(H,function(Ze){return p<Ze.end})[0]||M);for(var F=L(p-M.start-M.delay,0,M.duration)/M.duration,W=isNaN(F)?1:M.easing(F),O=M.to.strings,G=M.round,K=[],_e=M.to.numbers.length,B=void 0,R=0;R<_e;R++){var $=void 0,he=M.to.numbers[R],me=M.from.numbers[R]||0;M.isPath?$=gr(M.value,W*he,M.isPathTargetInsideSVG):$=me+W*(he-me),G&&(M.isColor&&R>2||($=Math.round($*G)/G)),K.push($)}var ye=O.length;if(!ye)B=K[0];else{B=O[0];for(var j=0;j<ye;j++){O[j];var xe=O[j+1],X=K[j];isNaN(X)||(xe?B+=X+xe:B+=X+" ")}}Re[b.type](A.target,b.property,B,A.transforms),b.currentValue=B,v++}}function d(p){i[p]&&!i.passThrough&&i[p](i)}function x(){i.remaining&&i.remaining!==!0&&i.remaining--}function k(p){var v=i.duration,T=i.delay,D=v-i.endDelay,b=c(p);i.progress=L(b/v*100,0,100),i.reversePlayback=b<i.currentTime,n&&w(b),!i.began&&i.currentTime>0&&(i.began=!0,d("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,d("loopBegin")),b<=T&&i.currentTime!==0&&m(0),(b>=D&&i.currentTime!==v||!v)&&m(v),b>T&&b<D?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,d("changeBegin")),d("change"),m(b)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,d("changeComplete")),i.currentTime=L(b,0,v),i.began&&d("update"),p>=v&&(t=0,x(),i.remaining?(r=a,d("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&g()):(i.paused=!0,i.completed||(i.completed=!0,d("loopComplete"),d("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var p=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=p==="reverse",i.remaining=i.loop,n=i.children,o=n.length;for(var v=o;v--;)i.children[v].reset();(i.reversed&&i.loop!==!0||p==="alternate"&&i.loop===1)&&i.remaining++,m(i.reversed?i.duration:0)},i._onDocumentVisibility=f,i.set=function(p,v){return $e(p,v),i},i.tick=function(p){a=p,r||(r=a),k((a+(t-r))*y.speed)},i.seek=function(p){k(c(p))},i.pause=function(){i.paused=!0,f()},i.play=function(){!i.paused||(i.completed&&i.reset(),i.paused=!1,P.push(i),f(),Ne())},i.reverse=function(){g(),i.completed=!i.reversed,f()},i.restart=function(){i.reset(),i.play()},i.remove=function(p){var v=ge(p);We(v,i)},i.reset(),i.autoplay&&i.play(),i}function Te(e,r){for(var t=r.length;t--;)ue(e,r[t].animatable.target)&&r.splice(t,1)}function We(e,r){var t=r.animations,a=r.children;Te(e,t);for(var n=a.length;n--;){var o=a[n],u=o.animations;Te(e,u),!u.length&&!o.children.length&&a.splice(n,1)}!t.length&&!a.length&&r.pause()}function wr(e){for(var r=ge(e),t=P.length;t--;){var a=P[t];We(r,a)}}function Tr(e,r){r===void 0&&(r={});var t=r.direction||"normal",a=r.easing?oe(r.easing):null,n=r.grid,o=r.axis,u=r.from||0,s=u==="first",i=u==="center",g=u==="last",c=l.arr(e),f=parseFloat(c?e[0]:e),h=c?parseFloat(e[1]):0,w=C(c?e[1]:e)||0,m=r.start||0+(c?f:0),d=[],x=0;return function(k,p,v){if(s&&(u=0),i&&(u=(v-1)/2),g&&(u=v-1),!d.length){for(var T=0;T<v;T++){if(!n)d.push(Math.abs(u-T));else{var D=i?(n[0]-1)/2:u%n[0],b=i?(n[1]-1)/2:Math.floor(u/n[0]),A=T%n[0],H=Math.floor(T/n[0]),z=D-A,M=b-H,F=Math.sqrt(z*z+M*M);o==="x"&&(F=-z),o==="y"&&(F=-M),d.push(F)}x=Math.max.apply(Math,d)}a&&(d=d.map(function(O){return a(O/x)*x})),t==="reverse"&&(d=d.map(function(O){return o?O<0?O*-1:-O:Math.abs(x-O)}))}var W=c?(h-f)/x:f;return m+W*(Math.round(d[p]*100)/100)+w}}function Or(e){e===void 0&&(e={});var r=y(e);return r.duration=0,r.add=function(t,a){var n=P.indexOf(r),o=r.children;n>-1&&P.splice(n,1);function u(h){h.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=_(t,te(ie,e));i.targets=i.targets||e.targets;var g=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=l.und(a)?g:de(a,g),u(r),r.seek(i.timelineOffset);var c=y(i);u(c),o.push(c);var f=je(o,e);return r.delay=f.delay,r.endDelay=f.endDelay,r.duration=f.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=P;y.remove=wr;y.get=fe;y.set=$e;y.convertPx=ce;y.path=vr;y.setDashoffset=fr;y.stagger=Tr;y.timeline=Or;y.easing=oe;y.penner=Ce;y.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};function Oe(e){return e.replace(/\*([^\*]+)\*/g,(r,t)=>`<code>${t}</code>`).replace(/\!([^\!]+)\!/g,(r,t)=>`<strong>${t}</strong>`)}var Q={0:{title:"Hello World",desc:Oe("!Welcome to the game!, In this level you need to select *Hello* from the string *Hello Worl*"),expected:'["Hello"]'},1:{title:"Groups",desc:Oe(`You must select *ll* from the string *Hello World* 
 Groups look like this: */(group)(another-group)/*`),expected:['["ll","l","l"]','["l","l"]']}};const I=e=>document.querySelector(e);function re(e,...r){return e.reduce((t,a,n)=>t+a+(r[n]||""),"")}function ne(e){let r="_"+Math.random().toString(36).substring(2,15);return window[r]=e,r+"()"}const Ie=e=>localStorage.getItem(e)||"",Qe=(e,r)=>localStorage.setItem(e,r),E={appRoot:I("#app"),user:{level:-1},templates:{start:()=>re`
				<h1>
					<code>
						<span class="gray">/</span>regex<span class="gray">/g</span> Hero
					</code>
				</h1>

				<p>Learn, Practice Regex</p>

				<button onclick=${ne(Z)} class="mt-2">Start</button>
			`,level:(e,r,t,a)=>re`
				<div class="level-parent">
					<span class="level">Level ${t}</span>
					<h1 class="level-title">${e}</h1>
					<p class="level-desc">${r.replaceAll(`
`,"<br>")}</p>

					<div class="runner">
						<div class="runner-left">
							<h2 class="runner-subheading">Regex Runner</h2>
							<input
								type="text"
								placeholder="Enter regex and click run or press enter"
								class="runner-input"
							/>
							<input type="checkbox" class="runner-checkbox" name="global" />
							<input type="checkbox" class="runner-checkbox" name="multiline" />
							<input
								type="checkbox"
								class="runner-checkbox"
								name="ignore case"
							/>
							<button class="runner-run" onclick=${ne(Ye)}>
								Run
							</button>
						</div>

						<div class="runner-right">
							<h2 class="runner-subheading">Results</h2>
							<pre class="runner-result"></pre>
							<div>
								Expected:
								${a.length>1?"One of: "+a.map(n=>`<code>${n}</code>`).join(", "):a[0]}
							</div>
						</div>
					</div>
				</div>
			`,winModal:()=>re`
				<div class="overlay"></div>
				<div class="modal">
					<h1>You Win!</h1>
					<p>You have completed this level.</p>
					<button onclick=${ne(Ir)} class="mt-2">
						Next Level
					</button>
				</div>
			`}},V=()=>E.appRoot;function pe(e,...r){return E.templates[e](...r)}Ie("user")?E.user=JSON.parse(Ie("user")):Qe("user",JSON.stringify(E.user));function Ue(e,r){E.user[e]=r,Qe("user",JSON.stringify(E.user))}function q(e){return E.user[e]}function qe(e){y({targets:V(),translateY:"-100%",duration:1e3,easing:"easeInOutQuint",complete:e})}function Je(e){y({targets:V(),translateY:"0",duration:1e3,easing:"easeInOutQuint",complete:()=>{e&&e(),V().style.transform=""}})}function Z(){if(q("level")===-1)qe(()=>{Ue("level",0),Z(),Je()});else{const e=q("level");let r=Q[e].expected||[];r=typeof r=="string"?[r]:r,V().innerHTML=pe("level",Q[e].title,Q[e].desc,e+"",r),I(".runner-input").addEventListener("keyup",a=>{a.key==="Enter"&&Ye()})}}function Ir(){y({targets:[I(".overlay"),I(".modal")],opacity:0,duration:1e3,easing:"easeInOutQuint",complete:()=>{qe(()=>{const e=q("level");Ue("level",e+1),Z(),Je()})}})}function Ye(){const e=I(".runner-input"),r=I(".runner-result"),t=e.value,a="Hello World",n=I(".runner-checkbox[name=global]").checked,o=I(".runner-checkbox[name=multiline]").checked,u=I(".runner-checkbox[name='ignore case']").checked,s=new RegExp(t,`${n?"g":""}${o?"m":""}${u?"i":""}`),i=a.match(s);let g=Q[q("level")].expected;g=typeof g=="string"?[g]:g;const c=g.includes(JSON.stringify(i));y(c?{targets:r,borderColor:["#272727","#00ff00","#272727"],duration:1e3,easing:"easeOutQuint",complete:()=>{y({targets:r,scale:[1,1.5,1],backgroundColor:"#000",duration:2e3,easing:"easeOutQuint"}),V().innerHTML+=pe("winModal"),setTimeout(()=>{const f=I(".overlay"),h=I(".modal");y({targets:f,opacity:[0,1],duration:400,easing:"easeOutQuint",complete:()=>{y({targets:h,opacity:[0,1],translateX:["-50%","-50%"],translateY:["-50%","-50%"],scale:[1,1.5,1],duration:1e3,easing:"easeOutQuint"})}})},400)}}:{targets:r,borderColor:["#272727","#ff0000","#272727"],duration:1e3,easing:"easeOutQuint"}),r.innerHTML=JSON.stringify(i)}E.user.level<0?V().innerHTML=pe("start"):Z();

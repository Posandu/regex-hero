const Ge=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};Ge();var Le={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},oe={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Ke=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],U={CSS:{},springs:{}};function P(e,r,n){return Math.min(Math.max(e,r),n)}function W(e,r){return e.indexOf(r)>-1}function re(e,r){return e.apply(null,r)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return W(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e=="undefined"},nil:function(e){return l.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!Le.hasOwnProperty(e)&&!oe.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Pe(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(n){return parseFloat(n)}):[]}function Se(e,r){var n=Pe(e),a=P(l.und(n[0])?1:n[0],.1,100),t=P(l.und(n[1])?100:n[1],.1,100),o=P(l.und(n[2])?10:n[2],.1,100),u=P(l.und(n[3])?0:n[3],.1,100),s=Math.sqrt(t/a),i=o/(2*Math.sqrt(t*a)),g=i<1?s*Math.sqrt(1-i*i):0,c=1,f=i<1?(i*s+-u)/g:-u+s;function h(m){var d=r?r*m/1e3:m;return i<1?d=Math.exp(-d*i*s)*(c*Math.cos(g*d)+f*Math.sin(g*d)):d=(c+f*d)*Math.exp(-d*s),m===0||m===1?m:1-d}function M(){var m=U.springs[e];if(m)return m;for(var d=1/6,b=0,k=0;;)if(b+=d,h(b)===1){if(k++,k>=16)break}else k=0;var p=b*d*1e3;return U.springs[e]=p,p}return r?h:M}function Xe(e){return e===void 0&&(e=10),function(r){return Math.ceil(P(r,1e-6,1)*e)*(1/e)}}var er=function(){var e=11,r=1/(e-1);function n(c,f){return 1-3*f+3*c}function a(c,f){return 3*f-6*c}function t(c){return 3*c}function o(c,f,h){return((n(f,h)*c+a(f,h))*c+t(f))*c}function u(c,f,h){return 3*n(f,h)*c*c+2*a(f,h)*c+t(f)}function s(c,f,h,M,m){var d,b,k=0;do b=f+(h-f)/2,d=o(b,M,m)-c,d>0?h=b:f=b;while(Math.abs(d)>1e-7&&++k<10);return b}function i(c,f,h,M){for(var m=0;m<4;++m){var d=u(f,h,M);if(d===0)return f;var b=o(f,h,M)-c;f-=b/d}return f}function g(c,f,h,M){if(!(0<=c&&c<=1&&0<=h&&h<=1))return;var m=new Float32Array(e);if(c!==f||h!==M)for(var d=0;d<e;++d)m[d]=o(d*r,c,h);function b(k){for(var p=0,v=1,T=e-1;v!==T&&m[v]<=k;++v)p+=r;--v;var D=(k-m[v])/(m[v+1]-m[v]),x=p+D*r,z=u(x,c,h);return z>=.001?i(k,x,c,h):z===0?x:s(k,p,p+r,c,h)}return function(k){return c===f&&h===M||k===0||k===1?k:o(b(k),f,M)}}return g}(),Ce=function(){var e={linear:function(){return function(a){return a}}},r={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var t,o=4;a<((t=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((t*3-2)/22-a,2)}},Elastic:function(a,t){a===void 0&&(a=1),t===void 0&&(t=.5);var o=P(a,1,10),u=P(t,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(a,t){r[a]=function(){return function(o){return Math.pow(o,t+2)}}}),Object.keys(r).forEach(function(a){var t=r[a];e["easeIn"+a]=t,e["easeOut"+a]=function(o,u){return function(s){return 1-t(o,u)(1-s)}},e["easeInOut"+a]=function(o,u){return function(s){return s<.5?t(o,u)(s*2)/2:1-t(o,u)(s*-2+2)/2}},e["easeOutIn"+a]=function(o,u){return function(s){return s<.5?(1-t(o,u)(1-s*2))/2:(t(o,u)(s*2-1)+1)/2}}}),e}();function ue(e,r){if(l.fnc(e))return e;var n=e.split("(")[0],a=Ce[n],t=Pe(e);switch(n){case"spring":return Se(e,r);case"cubicBezier":return re(er,t);case"steps":return re(Xe,t);default:return re(a,t)}}function De(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function q(e,r){for(var n=e.length,a=arguments.length>=2?arguments[1]:void 0,t=[],o=0;o<n;o++)if(o in e){var u=e[o];r.call(a,u,o,e)&&t.push(u)}return t}function J(e){return e.reduce(function(r,n){return r.concat(l.arr(n)?J(n):n)},[])}function ke(e){return l.arr(e)?e:(l.str(e)&&(e=De(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function se(e,r){return e.some(function(n){return n===r})}function ce(e){var r={};for(var n in e)r[n]=e[n];return r}function ae(e,r){var n=ce(e);for(var a in e)n[a]=r.hasOwnProperty(a)?r[a]:e[a];return n}function Z(e,r){var n=ce(e);for(var a in r)n[a]=l.und(e[a])?r[a]:e[a];return n}function rr(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function nr(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(r,function(s,i,g,c){return i+i+g+g+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),t=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+t+","+o+","+u+",1)"}function tr(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,t=parseInt(r[3],10)/100,o=r[4]||1;function u(h,M,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?h+(M-h)*6*m:m<1/2?M:m<2/3?h+(M-h)*(2/3-m)*6:h}var s,i,g;if(a==0)s=i=g=t;else{var c=t<.5?t*(1+a):t+a-t*a,f=2*t-c;s=u(f,c,n+1/3),i=u(f,c,n),g=u(f,c,n-1/3)}return"rgba("+s*255+","+i*255+","+g*255+","+o+")"}function ar(e){if(l.rgb(e))return rr(e);if(l.hex(e))return nr(e);if(l.hsl(e))return tr(e)}function C(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function ir(e){if(W(e,"translate")||e==="perspective")return"px";if(W(e,"rotate")||W(e,"skew"))return"deg"}function ie(e,r){return l.fnc(e)?e(r.target,r.id,r.total):e}function S(e,r){return e.getAttribute(r)}function le(e,r,n){var a=C(r);if(se([n,"deg","rad","turn"],a))return r;var t=U.CSS[r+n];if(!l.und(t))return t;var o=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+n;var i=o/u.offsetWidth;s.removeChild(u);var g=i*parseFloat(r);return U.CSS[r+n]=g,g}function Ee(e,r,n){if(r in e.style){var a=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t=e.style[r]||getComputedStyle(e).getPropertyValue(a)||"0";return n?le(e,t,n):t}}function fe(e,r){if(l.dom(e)&&!l.inp(e)&&(!l.nil(S(e,r))||l.svg(e)&&e[r]))return"attribute";if(l.dom(e)&&se(Ke,r))return"transform";if(l.dom(e)&&r!=="transform"&&Ee(e,r))return"css";if(e[r]!=null)return"object"}function $e(e){if(!!l.dom(e)){for(var r=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,t;t=n.exec(r);)a.set(t[1],t[2]);return a}}function or(e,r,n,a){var t=W(r,"scale")?1:0+ir(r),o=$e(e).get(r)||t;return n&&(n.transforms.list.set(r,o),n.transforms.last=r),a?le(e,o,a):o}function de(e,r,n,a){switch(fe(e,r)){case"transform":return or(e,r,a,n);case"css":return Ee(e,r,n);case"attribute":return S(e,r);default:return e[r]||0}}function ve(e,r){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var a=C(e)||0,t=parseFloat(r),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return t+o+a;case"-":return t-o+a;case"*":return t*o+a}}function ze(e,r){if(l.col(e))return ar(e);if(/\s/g.test(e))return e;var n=C(e),a=n?e.substr(0,e.length-n.length):e;return r?a+r:a}function ge(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function ur(e){return Math.PI*2*S(e,"r")}function sr(e){return S(e,"width")*2+S(e,"height")*2}function cr(e){return ge({x:S(e,"x1"),y:S(e,"y1")},{x:S(e,"x2"),y:S(e,"y2")})}function Ae(e){for(var r=e.points,n=0,a,t=0;t<r.numberOfItems;t++){var o=r.getItem(t);t>0&&(n+=ge(a,o)),a=o}return n}function lr(e){var r=e.points;return Ae(e)+ge(r.getItem(r.numberOfItems-1),r.getItem(0))}function Fe(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return ur(e);case"rect":return sr(e);case"line":return cr(e);case"polyline":return Ae(e);case"polygon":return lr(e)}}function fr(e){var r=Fe(e);return e.setAttribute("stroke-dasharray",r),r}function dr(e){for(var r=e.parentNode;l.svg(r)&&l.svg(r.parentNode);)r=r.parentNode;return r}function Be(e,r){var n=r||{},a=n.el||dr(e),t=a.getBoundingClientRect(),o=S(a,"viewBox"),u=t.width,s=t.height,i=n.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function vr(e,r){var n=l.str(e)?De(e)[0]:e,a=r||100;return function(t){return{property:t,el:n,svg:Be(n),totalLength:Fe(n)*(a/100)}}}function gr(e,r,n){function a(c){c===void 0&&(c=0);var f=r+c>=1?r+c:0;return e.el.getPointAtLength(f)}var t=Be(e.el,e.svg),o=a(),u=a(-1),s=a(1),i=n?1:t.w/t.vW,g=n?1:t.h/t.vH;switch(e.property){case"x":return(o.x-t.x)*i;case"y":return(o.y-t.y)*g;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function we(e,r){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=ze(l.pth(e)?e.totalLength:e,r)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:l.str(e)||r?a.split(n):[]}}function pe(e){var r=e?J(l.arr(e)?e.map(ke):ke(e)):[];return q(r,function(n,a,t){return t.indexOf(n)===a})}function He(e){var r=pe(e);return r.map(function(n,a){return{target:n,id:a,total:r.length,transforms:{list:$e(n)}}})}function pr(e,r){var n=ce(r);if(/^spring/.test(n.easing)&&(n.duration=Se(n.easing)),l.arr(e)){var a=e.length,t=a===2&&!l.obj(e[0]);t?e={value:e}:l.fnc(r.duration)||(n.duration=r.duration/a)}var o=l.arr(e)?e:[e];return o.map(function(u,s){var i=l.obj(u)&&!l.pth(u)?u:{value:u};return l.und(i.delay)&&(i.delay=s?0:r.delay),l.und(i.endDelay)&&(i.endDelay=s===o.length-1?r.endDelay:0),i}).map(function(u){return Z(u,n)})}function hr(e){for(var r=q(J(e.map(function(o){return Object.keys(o)})),function(o){return l.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),n={},a=function(o){var u=r[o];n[u]=e.map(function(s){var i={};for(var g in s)l.key(g)?g==u&&(i.value=s[g]):i[g]=s[g];return i})},t=0;t<r.length;t++)a(t);return n}function mr(e,r){var n=[],a=r.keyframes;a&&(r=Z(hr(a),r));for(var t in r)l.key(t)&&n.push({name:t,tweens:pr(r[t],e)});return n}function yr(e,r){var n={};for(var a in e){var t=ie(e[a],r);l.arr(t)&&(t=t.map(function(o){return ie(o,r)}),t.length===1&&(t=t[0])),n[a]=t}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function br(e,r){var n;return e.tweens.map(function(a){var t=yr(a,r),o=t.value,u=l.arr(o)?o[1]:o,s=C(u),i=de(r.target,e.name,s,r),g=n?n.to.original:i,c=l.arr(o)?o[0]:g,f=C(c)||C(i),h=s||f;return l.und(u)&&(u=g),t.from=we(c,h),t.to=we(ve(u,c),h),t.start=n?n.end:0,t.end=t.start+t.delay+t.duration+t.endDelay,t.easing=ue(t.easing,t.duration),t.isPath=l.pth(o),t.isPathTargetInsideSVG=t.isPath&&l.svg(r.target),t.isColor=l.col(t.from.original),t.isColor&&(t.round=1),n=t,t})}var Re={css:function(e,r,n){return e.style[r]=n},attribute:function(e,r,n){return e.setAttribute(r,n)},object:function(e,r,n){return e[r]=n},transform:function(e,r,n,a,t){if(a.list.set(r,n),r===a.last||t){var o="";a.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function Ve(e,r){var n=He(e);n.forEach(function(a){for(var t in r){var o=ie(r[t],a),u=a.target,s=C(o),i=de(u,t,s,a),g=s||C(i),c=ve(ze(o,g),i),f=fe(u,t);Re[f](u,t,c,a.transforms,!0)}})}function xr(e,r){var n=fe(e.target,r.name);if(n){var a=br(r,e),t=a[a.length-1];return{type:n,property:r.name,animatable:e,tweens:a,duration:t.end,delay:a[0].delay,endDelay:t.endDelay}}}function kr(e,r){return q(J(e.map(function(n){return r.map(function(a){return xr(n,a)})})),function(n){return!l.und(n)})}function Ne(e,r){var n=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},t={};return t.duration=n?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):r.duration,t.delay=n?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):r.delay,t.endDelay=n?t.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):r.endDelay,t}var Me=0;function wr(e){var r=ae(Le,e),n=ae(oe,e),a=mr(n,e),t=He(e.targets),o=kr(t,a),u=Ne(o,n),s=Me;return Me++,Z(r,{id:s,children:[],animatables:t,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var L=[],je=function(){var e;function r(){!e&&(!Te()||!y.suspendWhenDocumentHidden)&&L.length>0&&(e=requestAnimationFrame(n))}function n(t){for(var o=L.length,u=0;u<o;){var s=L[u];s.paused?(L.splice(u,1),o--):(s.tick(t),u++)}e=u>0?requestAnimationFrame(n):void 0}function a(){!y.suspendWhenDocumentHidden||(Te()?e=cancelAnimationFrame(e):(L.forEach(function(t){return t._onDocumentVisibility()}),je()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",a),r}();function Te(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var r=0,n=0,a=0,t,o=0,u=null;function s(p){var v=window.Promise&&new Promise(function(T){return u=T});return p.finished=v,v}var i=wr(e);s(i);function g(){var p=i.direction;p!=="alternate"&&(i.direction=p!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,t.forEach(function(v){return v.reversed=i.reversed})}function c(p){return i.reversed?i.duration-p:p}function f(){r=0,n=c(i.currentTime)*(1/y.speed)}function h(p,v){v&&v.seek(p-v.timelineOffset)}function M(p){if(i.reversePlayback)for(var T=o;T--;)h(p,t[T]);else for(var v=0;v<o;v++)h(p,t[v])}function m(p){for(var v=0,T=i.animations,D=T.length;v<D;){var x=T[v],z=x.animatable,R=x.tweens,A=R.length-1,w=R[A];A&&(w=q(R,function(Ze){return p<Ze.end})[0]||w);for(var F=P(p-w.start-w.delay,0,w.duration)/w.duration,Y=isNaN(F)?1:w.easing(F),I=w.to.strings,K=w.round,X=[],Je=w.to.numbers.length,B=void 0,V=0;V<Je;V++){var N=void 0,me=w.to.numbers[V],ye=w.from.numbers[V]||0;w.isPath?N=gr(w.value,Y*me,w.isPathTargetInsideSVG):N=ye+Y*(me-ye),K&&(w.isColor&&V>2||(N=Math.round(N*K)/K)),X.push(N)}var be=I.length;if(!be)B=X[0];else{B=I[0];for(var j=0;j<be;j++){I[j];var xe=I[j+1],ee=X[j];isNaN(ee)||(xe?B+=ee+xe:B+=ee+" ")}}Re[x.type](z.target,x.property,B,z.transforms),x.currentValue=B,v++}}function d(p){i[p]&&!i.passThrough&&i[p](i)}function b(){i.remaining&&i.remaining!==!0&&i.remaining--}function k(p){var v=i.duration,T=i.delay,D=v-i.endDelay,x=c(p);i.progress=P(x/v*100,0,100),i.reversePlayback=x<i.currentTime,t&&M(x),!i.began&&i.currentTime>0&&(i.began=!0,d("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,d("loopBegin")),x<=T&&i.currentTime!==0&&m(0),(x>=D&&i.currentTime!==v||!v)&&m(v),x>T&&x<D?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,d("changeBegin")),d("change"),m(x)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,d("changeComplete")),i.currentTime=P(x,0,v),i.began&&d("update"),p>=v&&(n=0,b(),i.remaining?(r=a,d("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&g()):(i.paused=!0,i.completed||(i.completed=!0,d("loopComplete"),d("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var p=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=p==="reverse",i.remaining=i.loop,t=i.children,o=t.length;for(var v=o;v--;)i.children[v].reset();(i.reversed&&i.loop!==!0||p==="alternate"&&i.loop===1)&&i.remaining++,m(i.reversed?i.duration:0)},i._onDocumentVisibility=f,i.set=function(p,v){return Ve(p,v),i},i.tick=function(p){a=p,r||(r=a),k((a+(n-r))*y.speed)},i.seek=function(p){k(c(p))},i.pause=function(){i.paused=!0,f()},i.play=function(){!i.paused||(i.completed&&i.reset(),i.paused=!1,L.push(i),f(),je())},i.reverse=function(){g(),i.completed=!i.reversed,f()},i.restart=function(){i.reset(),i.play()},i.remove=function(p){var v=pe(p);We(v,i)},i.reset(),i.autoplay&&i.play(),i}function Ie(e,r){for(var n=r.length;n--;)se(e,r[n].animatable.target)&&r.splice(n,1)}function We(e,r){var n=r.animations,a=r.children;Ie(e,n);for(var t=a.length;t--;){var o=a[t],u=o.animations;Ie(e,u),!u.length&&!o.children.length&&a.splice(t,1)}!n.length&&!a.length&&r.pause()}function Mr(e){for(var r=pe(e),n=L.length;n--;){var a=L[n];We(r,a)}}function Tr(e,r){r===void 0&&(r={});var n=r.direction||"normal",a=r.easing?ue(r.easing):null,t=r.grid,o=r.axis,u=r.from||0,s=u==="first",i=u==="center",g=u==="last",c=l.arr(e),f=parseFloat(c?e[0]:e),h=c?parseFloat(e[1]):0,M=C(c?e[1]:e)||0,m=r.start||0+(c?f:0),d=[],b=0;return function(k,p,v){if(s&&(u=0),i&&(u=(v-1)/2),g&&(u=v-1),!d.length){for(var T=0;T<v;T++){if(!t)d.push(Math.abs(u-T));else{var D=i?(t[0]-1)/2:u%t[0],x=i?(t[1]-1)/2:Math.floor(u/t[0]),z=T%t[0],R=Math.floor(T/t[0]),A=D-z,w=x-R,F=Math.sqrt(A*A+w*w);o==="x"&&(F=-A),o==="y"&&(F=-w),d.push(F)}b=Math.max.apply(Math,d)}a&&(d=d.map(function(I){return a(I/b)*b})),n==="reverse"&&(d=d.map(function(I){return o?I<0?I*-1:-I:Math.abs(b-I)}))}var Y=c?(h-f)/b:f;return m+Y*(Math.round(d[p]*100)/100)+M}}function Ir(e){e===void 0&&(e={});var r=y(e);return r.duration=0,r.add=function(n,a){var t=L.indexOf(r),o=r.children;t>-1&&L.splice(t,1);function u(h){h.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=Z(n,ae(oe,e));i.targets=i.targets||e.targets;var g=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=l.und(a)?g:ve(a,g),u(r),r.seek(i.timelineOffset);var c=y(i);u(c),o.push(c);var f=Ne(o,e);return r.delay=f.delay,r.endDelay=f.endDelay,r.duration=f.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=L;y.remove=Mr;y.get=de;y.set=Ve;y.convertPx=le;y.path=vr;y.setDashoffset=fr;y.stagger=Tr;y.timeline=Ir;y.easing=ue;y.penner=Ce;y.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};function E(e){return e.replace(/\*([^\*]+)\*/g,(r,n)=>`<code>${n}</code>`).replace(/\!([^\!]+)\!/g,(r,n)=>`<strong>${n}</strong>`).replace(/\_([^\_]+)\_/g,(r,n)=>`<em>${n}</em>`).replace(/\[([^\]]+)\]\(([^\)]+)\)/g,(r,n,a)=>`<a href="${a}">${n}</a>`).replace(/\#([^\#]+)\#/g,(r,n)=>`<h3>${n}</h3>`)}var Q={0:{title:"Hello World",desc:E(`!Welcome to the game!, You will learn something about regex and solve a problem based on it. So let's get started.
			# The problem #
			You need to select the word  *Hello* from *Hello World*. In regex, we can type *Hello* to select the word *Hello*. Now type the regex and click on *Run*.

			`),input:"Hello World",expected:'["Hello"]'},1:{title:"Numbers",desc:E(`Congratulations, you have solved the first level. Now, let's learn the numbers.
			# The problem #
			You need to select all the numbers from *199,300,195*. In regex, we use *[0-9]* or *\\d* to select a number. Because we want to select all the numbers, we need to make this global.
			`),input:"199,300,195",expected:['["1","9","9","3","0","0","1","9","5"]']},2:{title:"Non-Numbers",desc:E(`In regex, we use *[^0-9]* or *\\D* to select a non-number.
			# The problem #
			You need to select all the non-numbers from *199,300,195*
			`),input:"199,300,195",expected:['[",",","]']},3:{title:"Letters",desc:E(`In regex, we use *[a-z]* or *\\w* to select a letter.
			# The problem #
			You need to select all the letters from *my age is 14 and not 42 nor 56. Thank*
			`),input:"my age is 14 and not 42 nor 56. Thank",expected:['["m","y","a","g","e","i","s","1","4","a","n","d","n","o","t","4","2","n","o","r","5","6","T","h","a","n","k"]']},4:{title:"Non-Letters",desc:E(`In regex, we use *[^a-z]* or *\\W* to select a non-letter.
			# The problem #
			You need to select all the non-letters from *yudfk$%54g*451*
			`),input:"yudfk$%54g*451*",expected:['["$","%","*","*"]']},5:{title:"Spaces",desc:E(`# The problem #
			You need to select all the spaces from * he llo wo Rld*. In regex, we use *\\s* to select spaces.
			`),input:" he llo wo Rld",expected:['[" "," "," "," "]']},6:{title:"Escaped Characters",desc:E(`# The problem #
			You need to select *\\s* from *45\\s&4*. We can use a backslash to escape a character. Like this: *\\$* selects *$*
			`),input:"45\\s&4",expected:['["\\\\s"]']},7:{title:"Groups",desc:E(`
			Groups are used to select multiple characters. For example, if we want to select the values inside the brackets *hey {select}*, we can use a group. Like this: *{(\\w+)}* selects *select*.
			`),input:"hey {select}",expected:[]}};const O=e=>document.querySelector(e);function ne(e,...r){return e.reduce((n,a,t)=>n+a+(r[t]||""),"")}function te(e){let r="_"+Math.random().toString(36).substring(2,15);return window[r]=e,r+"()"}const Oe=e=>localStorage.getItem(e)||"",Ye=(e,r)=>localStorage.setItem(e,r),$={appRoot:O("#app"),user:{level:-1},templates:{start:()=>ne`
				<h1>
					<code>
						<span class="gray">/</span>regex<span class="gray">/g</span> Hero
					</code>
				</h1>

				<p>Learn, Practice Regex</p>

				<button onclick=${te(G)} class="mt-2">Start</button>
			`,level:(e,r,n,a)=>ne`
				<div class="level-parent">
					<span class="level">Level ${n}</span>
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
							<button class="runner-run" onclick=${te(qe)}>
								Run
							</button>
						</div>

						<div class="runner-right">
							<h2 class="runner-subheading">Results</h2>
							<pre class="runner-result"></pre>
							<div>
								Expected:
								${a.length>1?"One of: "+a.map(t=>`<code>${t}</code>`).join(", "):a[0]}
							</div>
						</div>
					</div>
				</div>
			`,winModal:()=>ne`
				<div class="overlay"></div>
				<div class="modal">
					<h1>You Win!</h1>
					<p>You have completed this level.</p>
					<button onclick=${te(Or)} class="mt-2">
						Next Level
					</button>
				</div>
			`}},H=()=>$.appRoot;function he(e,...r){return $.templates[e](...r)}Oe("user")?$.user=JSON.parse(Oe("user")):Ye("user",JSON.stringify($.user));function Qe(e,r){$.user[e]=r,Ye("user",JSON.stringify($.user))}function _(e){return $.user[e]}function Ue(e){y({targets:H(),translateY:"-100%",duration:1e3,easing:"easeInOutQuint",complete:e})}function _e(e){y({targets:H(),translateY:"0",duration:1e3,easing:"easeInOutQuint",complete:()=>{e&&e(),H().style.transform=""}})}function G(){if(_("level")===-1)Ue(()=>{Qe("level",0),G(),_e()});else{const e=_("level");let r=Q[e].expected||[];r=typeof r=="string"?[r]:r,H().innerHTML=he("level",Q[e].title,Q[e].desc,e+"",r),O(".runner-input").addEventListener("keyup",a=>{a.key==="Enter"&&qe()})}}function Or(){y({targets:[O(".overlay"),O(".modal")],opacity:0,duration:1e3,easing:"easeInOutQuint",complete:()=>{Ue(()=>{const e=_("level");Qe("level",e+1),G(),_e()})}})}function qe(){const e=O(".runner-input"),r=O(".runner-result"),n=e.value,a="Hello World",t=O(".runner-checkbox[name=global]").checked,o=O(".runner-checkbox[name=multiline]").checked,u=O(".runner-checkbox[name='ignore case']").checked,s=new RegExp(n,`${t?"g":""}${o?"m":""}${u?"i":""}`),i=a.match(s);let g=Q[_("level")].expected;g=typeof g=="string"?[g]:g;const c=g.includes(JSON.stringify(i));y(c?{targets:r,borderColor:["#272727","#00ff00","#272727"],duration:1e3,easing:"easeOutQuint",complete:()=>{y({targets:r,scale:[1,1.5,1],backgroundColor:"#000",duration:2e3,easing:"easeOutQuint"}),H().innerHTML+=he("winModal"),setTimeout(()=>{const f=O(".overlay"),h=O(".modal");y({targets:f,opacity:[0,1],duration:400,easing:"easeOutQuint",complete:()=>{y({targets:h,opacity:[0,1],translateX:["-50%","-50%"],translateY:["-50%","-50%"],scale:[1,1.5,1],duration:1e3,easing:"easeOutQuint"})}})},400)}}:{targets:r,borderColor:["#272727","#ff0000","#272727"],duration:1e3,easing:"easeOutQuint"}),r.innerHTML=JSON.stringify(i)}$.user.level<0?H().innerHTML=he("start"):G();

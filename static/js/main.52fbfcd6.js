/*! For license information please see main.52fbfcd6.js.LICENSE.txt */
(()=>{var e={403:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(i=n?n.call(r,d,u,c):void 0)||void 0===i&&d!==u)return!1}return!0}},1085:(e,t,n)=>{"use strict";var r=n(5340),i=n(9950),a=n(7119);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(l(e)!==e)throw Error(o(188))}function u(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=u(e)))return t;e=e.sibling}return null}var p=Object.assign,h=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),w=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var E=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var P=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var z=Symbol.iterator;function T(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var M=Symbol.for("react.client.reference");function R(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===M?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case k:return"Suspense";case S:return"SuspenseList";case E:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case f:return"Portal";case w:return(e.displayName||"Context")+".Provider";case y:return(e._context.displayName||"Context")+".Consumer";case j:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:R(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return R(e(t))}catch(n){}}return null}var L=Array.isArray,I=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},O=[],D=-1;function F(e){return{current:e}}function V(e){0>D||(e.current=O[D],O[D]=null,D--)}function _(e,t){D++,O[D]=e.current,e.current=t}var H=F(null),$=F(null),U=F(null),K=F(null);function W(e,t){switch(_(U,t),_($,e),_(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?iu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=au(t=iu(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(H),_(H,e)}function G(){V(H),V($),V(U)}function X(e){null!==e.memoizedState&&_(K,e);var t=H.current,n=au(t,e.type);t!==n&&(_($,e),_(H,n))}function Y(e){$.current===e&&(V(H),V($)),K.current===e&&(V(K),Xu._currentValue=N)}var Q=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ie=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,oe=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,de=null,ue=null;function pe(e){if("function"===typeof le&&ce(e),ue&&"function"===typeof ue.setStrictMode)try{ue.setStrictMode(de,e)}catch(t){}}var he=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(me(e)/fe|0)|0},me=Math.log,fe=Math.LN2;var ge=256,xe=4194304;function ve(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~a)?i=ve(r):0!==(o&=s)?i=ve(o):n||0!==(n=s&~e)&&(i=ve(n)):0!==(s=r&~a)?i=ve(s):0!==o?i=ve(o):n||0!==(n=r&~e)&&(i=ve(n)),0===i?0:0!==t&&t!==i&&0===(t&a)&&((a=i&-i)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:i}function ye(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function je(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=xe;return 0===(62914560&(xe<<=1))&&(xe=4194304),e}function Se(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ae(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-he(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Ee(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-he(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Pe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Te(){var e=B.p;return 0!==e?e:void 0===(e=window.event)?32:cp(e.type)}var Me=Math.random().toString(36).slice(2),Re="__reactFiber$"+Me,Le="__reactProps$"+Me,Ie="__reactContainer$"+Me,Be="__reactEvents$"+Me,Ne="__reactListeners$"+Me,Oe="__reactHandles$"+Me,De="__reactResources$"+Me,Fe="__reactMarker$"+Me;function Ve(e){delete e[Re],delete e[Le],delete e[Be],delete e[Ne],delete e[Oe]}function _e(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ie]||n[Re]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bu(e);null!==e;){if(n=e[Re])return n;e=bu(e)}return t}n=(e=n).parentNode}return null}function He(e){if(e=e[Re]||e[Ie]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function $e(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ue(e){var t=e[De];return t||(t=e[De]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[Fe]=!0}var We=new Set,Ge={};function Xe(e,t){Ye(e,t),Ye(e+"Capture",t)}function Ye(e,t){for(Ge[e]=t,e=0;e<t.length;e++)We.add(t[e])}var Qe,qe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(i=t,Q.call(et,i)||!Q.call(Ze,i)&&(Je.test(i)?et[i]=!0:(Ze[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Qe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",qe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Qe+e+qe}var at=!1;function ot(e,t){if(!e||at)return"";at=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var d="\n"+l[r].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}}while(1<=r&&0<=i);break}}}finally{at=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return it("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function dt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ut(e){e._valueTracker||(e._valueTracker=function(e){var t=dt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var mt=/[\n"\\]/g;function ft(e){return e.replace(mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?vt(e,o,ct(t)):null!=n?vt(e,o,ct(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function xt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function vt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function yt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(L(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function St(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function At(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&St(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&St(e,a,t[a])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zt(e){return Pt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tt=null;function Mt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,Lt=null;function It(e){var t=He(e);if(t&&(e=t.stateNode)){var n=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Le]||null;if(!i)throw Error(o(90));gt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":yt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var Bt=!1;function Nt(e,t,n){if(Bt)return e(t,n);Bt=!0;try{return e(t)}finally{if(Bt=!1,(null!==Rt||null!==Lt)&&(_c(),Rt&&(t=Rt,e=Lt,Lt=Rt=null,It(t),e)))for(t=0;t<e.length;t++)It(e[t])}}function Ot(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Le]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Dt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ft=!1;if(Dt)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch(Lp){Ft=!1}var _t=null,Ht=null,$t=null;function Ut(){if($t)return $t;var e,t,n=Ht,r=n.length,i="value"in _t?_t.value:_t.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return $t=i.slice(e,1<t?1-t:void 0)}function Kt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Wt(){return!0}function Gt(){return!1}function Xt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Wt:Gt,this.isPropagationStopped=Gt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){},isPersistent:Wt}),t}var Yt,Qt,qt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Xt(Jt),en=p({},Jt,{view:0,detail:0}),tn=Xt(en),nn=p({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qt&&(qt&&"mousemove"===e.type?(Yt=e.screenX-qt.screenX,Qt=e.screenY-qt.screenY):Qt=Yt=0,qt=e),Yt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),rn=Xt(nn),an=Xt(p({},nn,{dataTransfer:0})),on=Xt(p({},en,{relatedTarget:0})),sn=Xt(p({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Xt(p({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Xt(p({},Jt,{data:0})),dn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}function mn(){return hn}var fn=Xt(p({},en,{key:function(e){if(e.key){var t=dn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Kt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?un[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mn,charCode:function(e){return"keypress"===e.type?Kt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Kt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Xt(p({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Xt(p({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mn})),vn=Xt(p({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=Xt(p({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),yn=Xt(p({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],jn=Dt&&"CompositionEvent"in window,kn=null;Dt&&"documentMode"in document&&(kn=document.documentMode);var Sn=Dt&&"TextEvent"in window&&!kn,An=Dt&&(!jn||kn&&8<kn&&11>=kn),Cn=String.fromCharCode(32),En=!1;function Pn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Tn=!1;var Mn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Mn[e.type]:"textarea"===t}function Ln(e,t,n,r){Rt?Lt?Lt.push(r):Lt=[r]:Rt=r,0<(t=Ud(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Bn=null;function Nn(e){Nd(e,0)}function On(e){if(pt($e(e)))return e}function Dn(e,t){if("change"===e)return t}var Fn=!1;if(Dt){var Vn;if(Dt){var _n="oninput"in document;if(!_n){var Hn=document.createElement("div");Hn.setAttribute("oninput","return;"),_n="function"===typeof Hn.oninput}Vn=_n}else Vn=!1;Fn=Vn&&(!document.documentMode||9<document.documentMode)}function $n(){In&&(In.detachEvent("onpropertychange",Un),Bn=In=null)}function Un(e){if("value"===e.propertyName&&On(Bn)){var t=[];Ln(t,Bn,e,Mt(e)),Nt(Nn,t)}}function Kn(e,t,n){"focusin"===e?($n(),Bn=n,(In=t).attachEvent("onpropertychange",Un)):"focusout"===e&&$n()}function Wn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return On(Bn)}function Gn(e,t){if("click"===e)return On(t)}function Xn(e,t){if("input"===e||"change"===e)return On(t)}var Yn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Qn(e,t){if(Yn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Q.call(t,i)||!Yn(e[i],t[i]))return!1}return!0}function qn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=qn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=qn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Dt&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,ar=null,or=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==ht(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ar&&Qn(ar,r)||(ar=r,0<(r=Ud(ir,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},dr={},ur={};function pr(e){if(dr[e])return dr[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in ur)return dr[e]=n[t];return e}Dt&&(ur=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var hr=pr("animationend"),mr=pr("animationiteration"),fr=pr("animationstart"),gr=pr("transitionrun"),xr=pr("transitionstart"),vr=pr("transitioncancel"),br=pr("transitionend"),yr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){yr.set(e,t),Xe(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function Sr(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},kr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Ar=[],Cr=0,Er=0;function Pr(){for(var e=Cr,t=Er=Cr=0;t<e;){var n=Ar[t];Ar[t++]=null;var r=Ar[t];Ar[t++]=null;var i=Ar[t];Ar[t++]=null;var a=Ar[t];if(Ar[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&Rr(n,i,a)}}function zr(e,t,n,r){Ar[Cr++]=e,Ar[Cr++]=t,Ar[Cr++]=n,Ar[Cr++]=r,Er|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Tr(e,t,n,r){return zr(e,t,n,r),Lr(e)}function Mr(e,t){return zr(e,null,null,t),Lr(e)}function Rr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,i&&null!==t&&(i=31-he(n),null===(r=(e=a.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),a):null}function Lr(e){if(50<Rc)throw Rc=0,Lc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Ir={};function Br(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,t,n,r){return new Br(e,t,n,r)}function Or(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dr(e,t){var n=e.alternate;return null===n?((n=Nr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vr(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)Or(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,H.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case E:return(e=Nr(31,n,t,i)).elementType=E,e.lanes=a,e;case g:return _r(n.children,i,a,t);case x:s=8,i|=24;break;case v:return(e=Nr(12,n,t,2|i)).elementType=v,e.lanes=a,e;case k:return(e=Nr(13,n,t,i)).elementType=k,e.lanes=a,e;case S:return(e=Nr(19,n,t,i)).elementType=S,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:s=10;break e;case y:s=9;break e;case j:s=11;break e;case A:s=14;break e;case C:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Nr(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function _r(e,t,n,r){return(e=Nr(7,e,r,t)).lanes=n,e}function Hr(e,t,n){return(e=Nr(6,e,null,t)).lanes=n,e}function $r(e,t,n){return(t=Nr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ur=[],Kr=0,Wr=null,Gr=0,Xr=[],Yr=0,Qr=null,qr=1,Jr="";function Zr(e,t){Ur[Kr++]=Gr,Ur[Kr++]=Wr,Wr=e,Gr=t}function ei(e,t,n){Xr[Yr++]=qr,Xr[Yr++]=Jr,Xr[Yr++]=Qr,Qr=e;var r=qr;e=Jr;var i=32-he(r)-1;r&=~(1<<i),n+=1;var a=32-he(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qr=1<<32-he(t)+i|n<<i|r,Jr=a+e}else qr=1<<a|n<<i|r,Jr=e}function ti(e){null!==e.return&&(Zr(e,1),ei(e,1,0))}function ni(e){for(;e===Wr;)Wr=Ur[--Kr],Ur[Kr]=null,Gr=Ur[--Kr],Ur[Kr]=null;for(;e===Qr;)Qr=Xr[--Yr],Xr[Yr]=null,Jr=Xr[--Yr],Xr[Yr]=null,qr=Xr[--Yr],Xr[Yr]=null}var ri=null,ii=null,ai=!1,oi=null,si=!1,li=Error(o(519));function ci(e){throw fi(Sr(Error(o(418,"")),e)),li}function di(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Re]=e,t[Le]=r,n){case"dialog":Od("cancel",t),Od("close",t);break;case"iframe":case"object":case"embed":Od("load",t);break;case"video":case"audio":for(n=0;n<Id.length;n++)Od(Id[n],t);break;case"source":Od("error",t);break;case"img":case"image":case"link":Od("error",t),Od("load",t);break;case"details":Od("toggle",t);break;case"input":Od("invalid",t),xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ut(t);break;case"select":Od("invalid",t);break;case"textarea":Od("invalid",t),wt(t,r.value,r.defaultValue,r.children),ut(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Qd(t.textContent,n)?(null!=r.popover&&(Od("beforetoggle",t),Od("toggle",t)),null!=r.onScroll&&Od("scroll",t),null!=r.onScrollEnd&&Od("scrollend",t),null!=r.onClick&&(t.onclick=qd),t=!0):t=!1,t||ci(e)}function ui(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 13:return void(si=!1);case 27:case 3:return void(si=!0);default:ri=ri.return}}function pi(e){if(e!==ri)return!1;if(!ai)return ui(e),ai=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||ou(e.type,e.memoizedProps)),t=!t),t&&ii&&ci(e),ui(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ii=xu(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ii=null}}else 27===n?(n=ii,hu(e.type)?(e=vu,vu=null,ii=e):ii=n):ii=ri?xu(e.stateNode.nextSibling):null;return!0}function hi(){ii=ri=null,ai=!1}function mi(){var e=oi;return null!==e&&(null===bc?bc=e:bc.push.apply(bc,e),oi=null),e}function fi(e){null===oi?oi=[e]:oi.push(e)}var gi=F(null),xi=null,vi=null;function bi(e,t,n){_(gi,t._currentValue),t._currentValue=n}function yi(e){e._currentValue=gi.current,V(gi)}function wi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ji(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),wi(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),wi(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function ki(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Yn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===K.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(Xu):e=[Xu])}i=i.return}null!==e&&ji(t,e,n,r),t.flags|=262144}function Si(e){for(e=e.firstContext;null!==e;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ai(e){xi=e,vi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ci(e){return Pi(xi,e)}function Ei(e,t){return null===xi&&Ai(e),Pi(e,t)}function Pi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===vi){if(null===e)throw Error(o(308));vi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vi=vi.next=t;return n}var zi="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ti=r.unstable_scheduleCallback,Mi=r.unstable_NormalPriority,Ri={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Li(){return{controller:new zi,data:new Map,refCount:0}}function Ii(e){e.refCount--,0===e.refCount&&Ti(Mi,function(){e.controller.abort()})}var Bi=null,Ni=0,Oi=0,Di=null;function Fi(){if(0===--Ni&&null!==Bi){null!==Di&&(Di.status="fulfilled");var e=Bi;Bi=null,Oi=0,Di=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Vi=I.S;I.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Bi){var n=Bi=[];Ni=0,Oi=zd(),Di={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ni++,t.then(Fi,Fi)}(0,t),null!==Vi&&Vi(e,t)};var _i=F(null);function Hi(){var e=_i.current;return null!==e?e:rc.pooledCache}function $i(e,t){_(_i,null===t?_i.current:t.pool)}function Ui(){var e=Hi();return null===e?null:{parent:Ri._currentValue,pool:e}}var Ki=Error(o(460)),Wi=Error(o(474)),Gi=Error(o(542)),Xi={then:function(){}};function Yi(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Qi(){}function qi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Qi,Qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e;default:if("string"===typeof t.status)t.then(Qi,Qi);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e}throw Ji=t,Ki}}var Ji=null;function Zi(){if(null===Ji)throw Error(o(459));var e=Ji;return Ji=null,e}function ea(e){if(e===Ki||e===Gi)throw Error(o(483))}var ta=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Lr(e),Rr(e,null,n),t}return zr(e,r,t,n),Lr(e)}function oa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ee(e,n)}}function sa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var la=!1;function ca(){if(la){if(null!==Di)throw Di}}function da(e,t,n,r){la=!1;var i=e.updateQueue;ta=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var d=e.alternate;null!==d&&((s=(d=d.updateQueue).lastBaseUpdate)!==o&&(null===s?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(null!==a){var u=i.baseState;for(o=0,d=c=l=null,s=a;;){var h=-536870913&s.lane,m=h!==s.lane;if(m?(ac&h)===h:(r&h)===h){0!==h&&h===Oi&&(la=!0),null!==d&&(d=d.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var f=e,g=s;h=t;var x=n;switch(g.tag){case 1:if("function"===typeof(f=g.payload)){u=f.call(x,u,h);break e}u=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(h="function"===typeof(f=g.payload)?f.call(x,u,h):f)||void 0===h)break e;u=p({},u,h);break e;case 2:ta=!0}}null!==(h=s.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=i.callbacks)?i.callbacks=[h]:m.push(h))}else m={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===d?(c=d=m,l=u):d=d.next=m,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(m=s).next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}null===d&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null===a&&(i.shared.lanes=0),hc|=o,e.lanes=o,e.memoizedState=u}}function ua(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function pa(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)ua(n[e],t)}var ha=F(null),ma=F(0);function fa(e,t){_(ma,e=uc),_(ha,t),uc=e|t.baseLanes}function ga(){_(ma,uc),_(ha,ha.current)}function xa(){uc=ma.current,V(ha),V(ma)}var va=0,ba=null,ya=null,wa=null,ja=!1,ka=!1,Sa=!1,Aa=0,Ca=0,Ea=null,Pa=0;function za(){throw Error(o(321))}function Ta(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function Ma(e,t,n,r,i,a){return va=a,ba=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=null===e||null===e.memoizedState?Wo:Go,Sa=!1,a=n(r,i),Sa=!1,ka&&(a=La(t,n,r,i)),Ra(e),a}function Ra(e){I.H=Ko;var t=null!==ya&&null!==ya.next;if(va=0,wa=ya=ba=null,ja=!1,Ca=0,Ea=null,t)throw Error(o(300));null===e||Es||null!==(e=e.dependencies)&&Si(e)&&(Es=!0)}function La(e,t,n,r){ba=e;var i=0;do{if(ka&&(Ea=null),Ca=0,ka=!1,25<=i)throw Error(o(301));if(i+=1,wa=ya=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}I.H=Xo,a=t(n,r)}while(ka);return a}function Ia(){var e=I.H,t=e.useState()[0];return t="function"===typeof t.then?Va(t):t,e=e.useState()[0],(null!==ya?ya.memoizedState:null)!==e&&(ba.flags|=1024),t}function Ba(){var e=0!==Aa;return Aa=0,e}function Na(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oa(e){if(ja){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ja=!1}va=0,wa=ya=ba=null,ka=!1,Ca=Aa=0,Ea=null}function Da(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wa?ba.memoizedState=wa=e:wa=wa.next=e,wa}function Fa(){if(null===ya){var e=ba.alternate;e=null!==e?e.memoizedState:null}else e=ya.next;var t=null===wa?ba.memoizedState:wa.next;if(null!==t)wa=t,ya=e;else{if(null===e){if(null===ba.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(ya=e).memoizedState,baseState:ya.baseState,baseQueue:ya.baseQueue,queue:ya.queue,next:null},null===wa?ba.memoizedState=wa=e:wa=wa.next=e}return wa}function Va(e){var t=Ca;return Ca+=1,null===Ea&&(Ea=[]),e=qi(Ea,e,t),t=ba,null===(null===wa?t.memoizedState:wa.next)&&(t=t.alternate,I.H=null===t||null===t.memoizedState?Wo:Go),e}function _a(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Va(e);if(e.$$typeof===w)return Ci(e)}throw Error(o(438,String(e)))}function Ha(e){var t=null,n=ba.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=ba.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=P;return t.index++,n}function $a(e,t){return"function"===typeof t?t(e):t}function Ua(e){return Ka(Fa(),ya,e)}function Ka(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,c=null,d=t=i.next,u=!1;do{var p=-536870913&d.lane;if(p!==d.lane?(ac&p)===p:(va&p)===p){var h=d.revertLane;if(0===h)null!==c&&(c=c.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),p===Oi&&(u=!0);else{if((va&h)===h){d=d.next,h===Oi&&(u=!0);continue}p={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===c?(l=c=p,s=a):c=c.next=p,ba.lanes|=h,hc|=h}p=d.action,Sa&&n(a,p),a=d.hasEagerState?d.eagerState:n(a,p)}else h={lane:p,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===c?(l=c=h,s=a):c=c.next=h,ba.lanes|=p,hc|=p;d=d.next}while(null!==d&&d!==t);if(null===c?s=a:c.next=l,!Yn(a,e.memoizedState)&&(Es=!0,u&&null!==(n=Di)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Wa(e){var t=Fa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Yn(a,t.memoizedState)||(Es=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ga(e,t,n){var r=ba,i=Fa(),a=ai;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Yn((ya||i).memoizedState,n);if(s&&(i.memoizedState=n,Es=!0),i=i.queue,xo(2048,8,Qa.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==wa&&1&wa.memoizedState.tag){if(r.flags|=2048,mo(9,{destroy:void 0,resource:void 0},Ya.bind(null,r,i,n,t),null),null===rc)throw Error(o(349));a||0!==(124&va)||Xa(r,t,n)}return n}function Xa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ba.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ya(e,t,n,r){t.value=n,t.getSnapshot=r,qa(t)&&Ja(e)}function Qa(e,t,n){return n(function(){qa(t)&&Ja(e)})}function qa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch(r){return!0}}function Ja(e){var t=Mr(e,2);null!==t&&Nc(t,e,2)}function Za(e){var t=Da();if("function"===typeof e){var n=e;if(e=n(),Sa){pe(!0);try{n()}finally{pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},t}function eo(e,t,n,r){return e.baseState=n,Ka(e,ya,"function"===typeof r?r:$a)}function to(e,t,n,r,i){if(Ho(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==I.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,no(t,a)):(a.next=n.next,t.pending=n.next=a)}}function no(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};I.T=o;try{var s=n(i,r),l=I.S;null!==l&&l(o,s),ro(e,t,s)}catch(c){ao(e,t,c)}finally{I.T=a}}else try{ro(e,t,a=n(i,r))}catch(d){ao(e,t,d)}}function ro(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){io(e,t,n)},function(n){return ao(e,t,n)}):io(e,t,n)}function io(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function ao(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==r)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function lo(e,t){if(ai){var n=rc.formState;if(null!==n){e:{var r=ba;if(ai){if(ii){t:{for(var i=ii,a=si;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=xu(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){ii=xu(i.nextSibling),r="F!"===i.data;break e}}ci(r)}r=!1}r&&(t=n[0])}}return(n=Da()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},n.queue=r,n=Fo.bind(null,ba,r),r.dispatch=n,r=Za(!1),a=_o.bind(null,ba,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Da()).queue=i,n=to.bind(null,ba,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function co(e){return uo(Fa(),ya,e)}function uo(e,t,n){if(t=Ka(e,t,so)[0],e=Ua($a)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Va(t)}catch(o){if(o===Ki)throw Gi;throw o}else r=t;var i=(t=Fa()).queue,a=i.dispatch;return n!==t.memoizedState&&(ba.flags|=2048,mo(9,{destroy:void 0,resource:void 0},po.bind(null,i,n),null)),[r,a,e]}function po(e,t){e.action=t}function ho(e){var t=Fa(),n=ya;if(null!==n)return uo(t,n,e);Fa(),t=t.memoizedState;var r=(n=Fa()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function mo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=ba.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function fo(){return Fa().memoizedState}function go(e,t,n,r){var i=Da();r=void 0===r?null:r,ba.flags|=e,i.memoizedState=mo(1|t,{destroy:void 0,resource:void 0},n,r)}function xo(e,t,n,r){var i=Fa();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==ya&&null!==r&&Ta(r,ya.memoizedState.deps)?i.memoizedState=mo(t,a,n,r):(ba.flags|=e,i.memoizedState=mo(1|t,a,n,r))}function vo(e,t){go(8390656,8,e,t)}function bo(e,t){xo(2048,8,e,t)}function yo(e,t){return xo(4,2,e,t)}function wo(e,t){return xo(4,4,e,t)}function jo(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ko(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,xo(4,4,jo.bind(null,t,e),n)}function So(){}function Ao(e,t){var n=Fa();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Co(e,t){var n=Fa();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Ta(t,r[1]))return r[0];if(r=e(),Sa){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r}function Eo(e,t,n){return void 0===n||0!==(1073741824&va)?e.memoizedState=t:(e.memoizedState=n,e=Bc(),ba.lanes|=e,hc|=e,n)}function Po(e,t,n,r){return Yn(n,t)?n:null!==ha.current?(e=Eo(e,n,r),Yn(e,t)||(Es=!0),e):0===(42&va)?(Es=!0,e.memoizedState=n):(e=Bc(),ba.lanes|=e,hc|=e,t)}function zo(e,t,n,r,i){var a=B.p;B.p=0!==a&&8>a?a:8;var o=I.T,s={};I.T=s,_o(e,!1,t,n);try{var l=i(),c=I.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)Vo(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(l,r),Ic());else Vo(e,t,r,Ic())}catch(d){Vo(e,t,{then:function(){},status:"rejected",reason:d},Ic())}finally{B.p=a,I.T=o}}function To(){}function Mo(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=Ro(e).queue;zo(e,i,t,N,null===n?To:function(){return Lo(e),n(r)})}function Ro(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:N},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Lo(e){Vo(e,Ro(e).next.queue,{},Ic())}function Io(){return Ci(Xu)}function Bo(){return Fa().memoizedState}function No(){return Fa().memoizedState}function Oo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Ic(),r=aa(t,e=ia(n),n);return null!==r&&(Nc(r,t,n),oa(r,t,n)),t={cache:Li()},void(e.payload=t)}t=t.return}}function Do(e,t,n){var r=Ic();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ho(e)?$o(t,n):null!==(n=Tr(e,t,n,r))&&(Nc(n,e,r),Uo(n,t,r))}function Fo(e,t,n){Vo(e,t,n,Ic())}function Vo(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ho(e))$o(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Yn(s,o))return zr(e,t,i,0),null===rc&&Pr(),!1}catch(l){}if(null!==(n=Tr(e,t,i,r)))return Nc(n,e,r),Uo(n,t,r),!0}return!1}function _o(e,t,n,r){if(r={lane:2,revertLane:zd(),action:r,hasEagerState:!1,eagerState:null,next:null},Ho(e)){if(t)throw Error(o(479))}else null!==(t=Tr(e,n,r,2))&&Nc(t,e,2)}function Ho(e){var t=e.alternate;return e===ba||null!==t&&t===ba}function $o(e,t){ka=ja=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uo(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ee(e,n)}}var Ko={readContext:Ci,use:_a,useCallback:za,useContext:za,useEffect:za,useImperativeHandle:za,useLayoutEffect:za,useInsertionEffect:za,useMemo:za,useReducer:za,useRef:za,useState:za,useDebugValue:za,useDeferredValue:za,useTransition:za,useSyncExternalStore:za,useId:za,useHostTransitionStatus:za,useFormState:za,useActionState:za,useOptimistic:za,useMemoCache:za,useCacheRefresh:za},Wo={readContext:Ci,use:_a,useCallback:function(e,t){return Da().memoizedState=[e,void 0===t?null:t],e},useContext:Ci,useEffect:vo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,jo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Da();t=void 0===t?null:t;var r=e();if(Sa){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Da();if(void 0!==n){var i=n(t);if(Sa){pe(!0);try{n(t)}finally{pe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Do.bind(null,ba,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Da().memoizedState=e},useState:function(e){var t=(e=Za(e)).queue,n=Fo.bind(null,ba,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:So,useDeferredValue:function(e,t){return Eo(Da(),e,t)},useTransition:function(){var e=Za(!1);return e=zo.bind(null,ba,e.queue,!0,!1),Da().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ba,i=Da();if(ai){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===rc)throw Error(o(349));0!==(124&ac)||Xa(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,vo(Qa.bind(null,r,a,e),[e]),r.flags|=2048,mo(9,{destroy:void 0,resource:void 0},Ya.bind(null,r,a,n,t),null),n},useId:function(){var e=Da(),t=rc.identifierPrefix;if(ai){var n=Jr;t="\xab"+t+"R"+(n=(qr&~(1<<32-he(qr)-1)).toString(32)+n),0<(n=Aa++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Pa++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Io,useFormState:lo,useActionState:lo,useOptimistic:function(e){var t=Da();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_o.bind(null,ba,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ha,useCacheRefresh:function(){return Da().memoizedState=Oo.bind(null,ba)}},Go={readContext:Ci,use:_a,useCallback:Ao,useContext:Ci,useEffect:bo,useImperativeHandle:ko,useInsertionEffect:yo,useLayoutEffect:wo,useMemo:Co,useReducer:Ua,useRef:fo,useState:function(){return Ua($a)},useDebugValue:So,useDeferredValue:function(e,t){return Po(Fa(),ya.memoizedState,e,t)},useTransition:function(){var e=Ua($a)[0],t=Fa().memoizedState;return["boolean"===typeof e?e:Va(e),t]},useSyncExternalStore:Ga,useId:Bo,useHostTransitionStatus:Io,useFormState:co,useActionState:co,useOptimistic:function(e,t){return eo(Fa(),0,e,t)},useMemoCache:Ha,useCacheRefresh:No},Xo={readContext:Ci,use:_a,useCallback:Ao,useContext:Ci,useEffect:bo,useImperativeHandle:ko,useInsertionEffect:yo,useLayoutEffect:wo,useMemo:Co,useReducer:Wa,useRef:fo,useState:function(){return Wa($a)},useDebugValue:So,useDeferredValue:function(e,t){var n=Fa();return null===ya?Eo(n,e,t):Po(n,ya.memoizedState,e,t)},useTransition:function(){var e=Wa($a)[0],t=Fa().memoizedState;return["boolean"===typeof e?e:Va(e),t]},useSyncExternalStore:Ga,useId:Bo,useHostTransitionStatus:Io,useFormState:ho,useActionState:ho,useOptimistic:function(e,t){var n=Fa();return null!==ya?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ha,useCacheRefresh:No},Yo=null,Qo=0;function qo(e){var t=Qo;return Qo+=1,null===Yo&&(Yo=[]),qi(Yo,e,t)}function Jo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zo(e,t){if(t.$$typeof===h)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Dr(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Hr(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===g?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===C&&es(a)===t.type)?(Jo(t=i(t,n.props),n),t.return=e,t):(Jo(t=Vr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=$r(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,a){return null===t||7!==t.tag?((t=_r(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Hr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return Jo(n=Vr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case f:return(t=$r(t,e.mode,n)).return=e,t;case C:return p(e,t=(0,t._init)(t._payload),n)}if(L(t)||T(t))return(t=_r(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,qo(t),n);if(t.$$typeof===w)return p(e,Ei(e,t),n);Zo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return n.key===i?c(e,t,n,r):null;case f:return n.key===i?d(e,t,n,r):null;case C:return h(e,t,n=(i=n._init)(n._payload),r)}if(L(n)||T(n))return null!==i?null:u(e,t,n,r,null);if("function"===typeof n.then)return h(e,t,qo(n),r);if(n.$$typeof===w)return h(e,t,Ei(e,n),r);Zo(e,n)}return null}function x(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case m:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case f:return d(t,e=e.get(null===r.key?n:r.key)||null,r,i);case C:return x(e,t,n,r=(0,r._init)(r._payload),i)}if(L(r)||T(r))return u(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return x(e,t,n,qo(r),i);if(r.$$typeof===w)return x(e,t,n,Ei(t,r),i);Zo(t,r)}return null}function v(l,c,d,u){if("object"===typeof d&&null!==d&&d.type===g&&null===d.key&&(d=d.props.children),"object"===typeof d&&null!==d){switch(d.$$typeof){case m:e:{for(var b=d.key;null!==c;){if(c.key===b){if((b=d.type)===g){if(7===c.tag){n(l,c.sibling),(u=i(c,d.props.children)).return=l,l=u;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===C&&es(b)===c.type){n(l,c.sibling),Jo(u=i(c,d.props),d),u.return=l,l=u;break e}n(l,c);break}t(l,c),c=c.sibling}d.type===g?((u=_r(d.props.children,l.mode,u,d.key)).return=l,l=u):(Jo(u=Vr(d.type,d.key,d.props,null,l.mode,u),d),u.return=l,l=u)}return s(l);case f:e:{for(b=d.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(l,c.sibling),(u=i(c,d.children||[])).return=l,l=u;break e}n(l,c);break}t(l,c),c=c.sibling}(u=$r(d,l.mode,u)).return=l,l=u}return s(l);case C:return v(l,c,d=(b=d._init)(d._payload),u)}if(L(d))return function(i,o,s,l){for(var c=null,d=null,u=o,m=o=0,f=null;null!==u&&m<s.length;m++){u.index>m?(f=u,u=null):f=u.sibling;var g=h(i,u,s[m],l);if(null===g){null===u&&(u=f);break}e&&u&&null===g.alternate&&t(i,u),o=a(g,o,m),null===d?c=g:d.sibling=g,d=g,u=f}if(m===s.length)return n(i,u),ai&&Zr(i,m),c;if(null===u){for(;m<s.length;m++)null!==(u=p(i,s[m],l))&&(o=a(u,o,m),null===d?c=u:d.sibling=u,d=u);return ai&&Zr(i,m),c}for(u=r(u);m<s.length;m++)null!==(f=x(u,i,m,s[m],l))&&(e&&null!==f.alternate&&u.delete(null===f.key?m:f.key),o=a(f,o,m),null===d?c=f:d.sibling=f,d=f);return e&&u.forEach(function(e){return t(i,e)}),ai&&Zr(i,m),c}(l,c,d,u);if(T(d)){if("function"!==typeof(b=T(d)))throw Error(o(150));return function(i,s,l,c){if(null==l)throw Error(o(151));for(var d=null,u=null,m=s,f=s=0,g=null,v=l.next();null!==m&&!v.done;f++,v=l.next()){m.index>f?(g=m,m=null):g=m.sibling;var b=h(i,m,v.value,c);if(null===b){null===m&&(m=g);break}e&&m&&null===b.alternate&&t(i,m),s=a(b,s,f),null===u?d=b:u.sibling=b,u=b,m=g}if(v.done)return n(i,m),ai&&Zr(i,f),d;if(null===m){for(;!v.done;f++,v=l.next())null!==(v=p(i,v.value,c))&&(s=a(v,s,f),null===u?d=v:u.sibling=v,u=v);return ai&&Zr(i,f),d}for(m=r(m);!v.done;f++,v=l.next())null!==(v=x(m,i,f,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?f:v.key),s=a(v,s,f),null===u?d=v:u.sibling=v,u=v);return e&&m.forEach(function(e){return t(i,e)}),ai&&Zr(i,f),d}(l,c,d=b.call(d),u)}if("function"===typeof d.then)return v(l,c,qo(d),u);if(d.$$typeof===w)return v(l,c,Ei(l,d),u);Zo(l,d)}return"string"===typeof d&&""!==d||"number"===typeof d||"bigint"===typeof d?(d=""+d,null!==c&&6===c.tag?(n(l,c.sibling),(u=i(c,d)).return=l,l=u):(n(l,c),(u=Hr(d,l.mode,u)).return=l,l=u),s(l)):n(l,c)}return function(e,t,n,r){try{Qo=0;var i=v(e,t,n,r);return Yo=null,i}catch(o){if(o===Ki||o===Gi)throw o;var a=Nr(29,o,null,e.mode);return a.lanes=r,a.return=e,a}}}var ns=ts(!0),rs=ts(!1),is=F(null),as=null;function os(e){var t=e.alternate;_(ds,1&ds.current),_(is,e),null===as&&(null===t||null!==ha.current||null!==t.memoizedState)&&(as=e)}function ss(e){if(22===e.tag){if(_(ds,ds.current),_(is,e),null===as){var t=e.alternate;null!==t&&null!==t.memoizedState&&(as=e)}}else ls()}function ls(){_(ds,ds.current),_(is,is.current)}function cs(e){V(is),as===e&&(as=null),V(ds)}var ds=F(0);function us(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gu(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ps(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ic(),i=ia(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Nc(t,e,r),oa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ic(),i=ia(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Nc(t,e,r),oa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ic(),r=ia(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=aa(e,r,n))&&(Nc(t,e,n),oa(t,e,n))}};function ms(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Qn(n,r)||!Qn(i,a))}function fs(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var xs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function vs(e){xs(e)}function bs(e){console.error(e)}function ys(e){xs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function js(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ks(e,t,n){return(n=ia(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Ss(e){return(e=ia(e)).tag=3,e}function As(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){js(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){js(t,n,r),"function"!==typeof i&&(null===Sc?Sc=new Set([this]):Sc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Cs=Error(o(461)),Es=!1;function Ps(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function zs(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Ai(t),r=Ma(e,t,n,o,a,i),s=Ba(),null===e||Es?(ai&&s&&ti(t),t.flags|=1,Ps(e,t,r,i),t.child):(Na(e,t,i),Ys(e,t,i))}function Ts(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Or(a)||void 0!==a.defaultProps||null!==n.compare?((e=Vr(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ms(e,t,a,r,i))}if(a=e.child,!Qs(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Qn)(o,r)&&e.ref===t.ref)return Ys(e,t,i)}return t.flags|=1,(e=Dr(a,r)).ref=t.ref,e.return=t,t.child=e}function Ms(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Qn(a,r)&&e.ref===t.ref){if(Es=!1,t.pendingProps=r=a,!Qs(e,i))return t.lanes=e.lanes,Ys(e,t,i);0!==(131072&e.flags)&&(Es=!0)}}return Bs(e,t,n,r,i)}function Rs(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==a?a.baseLanes|n:n,null!==e){for(i=t.child=e.child,a=0;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return Ls(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ls(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&$i(0,null!==a?a.cachePool:null),null!==a?fa(t,a):ga(),ss(t)}else null!==a?($i(0,a.cachePool),fa(t,a),ls(),t.memoizedState=null):(null!==e&&$i(0,null),ga(),ls());return Ps(e,t,i,n),t.child}function Ls(e,t,n,r){var i=Hi();return i=null===i?null:{parent:Ri._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&$i(0,null),ga(),ss(t),null!==e&&ki(e,t,r,!0),null}function Is(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Bs(e,t,n,r,i){return Ai(t),n=Ma(e,t,n,r,void 0,i),r=Ba(),null===e||Es?(ai&&r&&ti(t),t.flags|=1,Ps(e,t,n,i),t.child):(Na(e,t,i),Ys(e,t,i))}function Ns(e,t,n,r,i,a){return Ai(t),t.updateQueue=null,n=La(t,r,n,i),Ra(e),r=Ba(),null===e||Es?(ai&&r&&ti(t),t.flags|=1,Ps(e,t,n,a),t.child):(Na(e,t,a),Ys(e,t,a))}function Os(e,t,n,r,i){if(Ai(t),null===t.stateNode){var a=Ir,o=n.contextType;"object"===typeof o&&null!==o&&(a=Ci(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=hs,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},na(t),o=n.contextType,a.context="object"===typeof o&&null!==o?Ci(o):Ir,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(ps(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&hs.enqueueReplaceState(a,a.state,null),da(t,r,a,i),ca(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=gs(n,s);a.props=l;var c=a.context,d=n.contextType;o=Ir,"object"===typeof d&&null!==d&&(o=Ci(d));var u=n.getDerivedStateFromProps;d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&fs(t,a,r,o),ta=!1;var p=t.memoizedState;a.state=p,da(t,r,a,i),ca(),c=t.memoizedState,s||p!==c||ta?("function"===typeof u&&(ps(t,n,u,r),c=t.memoizedState),(l=ta||ms(t,n,l,r,p,c,o))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ra(e,t),d=gs(n,o=t.memoizedProps),a.props=d,u=t.pendingProps,p=a.context,c=n.contextType,l=Ir,"object"===typeof c&&null!==c&&(l=Ci(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==u||p!==l)&&fs(t,a,r,l),ta=!1,p=t.memoizedState,a.state=p,da(t,r,a,i),ca();var h=t.memoizedState;o!==u||p!==h||ta||null!==e&&null!==e.dependencies&&Si(e.dependencies)?("function"===typeof s&&(ps(t,n,s,r),h=t.memoizedState),(d=ta||ms(t,n,d,r,p,h,l)||null!==e&&null!==e.dependencies&&Si(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=d):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Is(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,i),t.child=ns(t,null,n,i)):Ps(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ys(e,t,i),e}function Ds(e,t,n,r){return hi(),t.flags|=256,Ps(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vs(e){return{baseLanes:e,cachePool:Ui()}}function _s(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Hs(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&ds.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(ai){if(a?os(t):ls(),ai){var l,c=ii;if(l=c){e:{for(l=c,c=si;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=xu(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Qr?{id:qr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(l=Nr(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ri=t,ii=null,l=!0):l=!1}l||ci(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gu(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=i.children,i=i.fallback,a?(ls(),c=Us({mode:"hidden",children:c},a=t.mode),i=_r(i,a,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,(a=t.child).memoizedState=Vs(n),a.childLanes=_s(e,r,n),t.memoizedState=Fs,i):(os(t),$s(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(os(t),t.flags&=-257,t=Ks(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),a=i.fallback,c=t.mode,i=Us({mode:"visible",children:i.children},c),(a=_r(a,c,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ns(t,e.child,null,n),(i=t.child).memoizedState=Vs(n),i.childLanes=_s(e,r,n),t.memoizedState=Fs,t=a);else if(os(t),gu(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var d=r.dgst;r=d,(i=Error(o(419))).stack="",i.digest=r,fi({value:i,source:null,stack:null}),t=Ks(e,t,n)}else if(Es||ki(e,t,n,!1),r=0!==(n&e.childLanes),Es||r){if(null!==(r=rc)&&(0!==(i=0!==((i=0!==(42&(i=n&-n))?1:Pe(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,Mr(e,i),Nc(r,e,i),Cs;"$?"===c.data||Gc(),t=Ks(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ii=xu(c.nextSibling),ri=t,ai=!0,oi=null,si=!1,null!==e&&(Xr[Yr++]=qr,Xr[Yr++]=Jr,Xr[Yr++]=Qr,qr=e.id,Jr=e.overflow,Qr=t),(t=$s(t,i.children)).flags|=4096);return t}return a?(ls(),a=i.fallback,c=t.mode,d=(l=e.child).sibling,(i=Dr(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==d?a=Dr(d,a):(a=_r(a,c,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(c=e.child.memoizedState)?c=Vs(n):(null!==(l=c.cachePool)?(d=Ri._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=Ui(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=_s(e,r,n),t.memoizedState=Fs,i):(os(t),e=(n=e.child).sibling,(n=Dr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function $s(e,t){return(t=Us({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Us(e,t){return(e=Nr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ks(e,t,n){return ns(t,e.child,null,n),(e=$s(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ws(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wi(e.return,t,n)}function Gs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Xs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ps(e,t,r.children,n),0!==(2&(r=ds.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ws(e,n,t);else if(19===e.tag)Ws(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(_(ds,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===us(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===us(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gs(t,!0,n,null,a);break;case"together":Gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ys(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),hc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ki(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Dr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Qs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Si(e))}function qs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Es=!0;else{if(!Qs(e,n)&&0===(128&t.flags))return Es=!1,function(e,t,n){switch(t.tag){case 3:W(t,t.stateNode.containerInfo),bi(0,Ri,e.memoizedState.cache),hi();break;case 27:case 5:X(t);break;case 4:W(t,t.stateNode.containerInfo);break;case 10:bi(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(os(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Hs(e,t,n):(os(t),null!==(e=Ys(e,t,n))?e.sibling:null);os(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ki(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return Xs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(ds,ds.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n);case 24:bi(0,Ri,e.memoizedState.cache)}return Ys(e,t,n)}(e,t,n);Es=0!==(131072&e.flags)}else Es=!1,ai&&0!==(1048576&t.flags)&&ei(t,Gr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===j){t.tag=11,t=zs(null,t,r,e,n);break e}if(i===A){t.tag=14,t=Ts(null,t,r,e,n);break e}}throw t=R(r)||r,Error(o(306,t,""))}Or(r)?(e=gs(r,e),t.tag=1,t=Os(null,t,r,e,n)):(t.tag=0,t=Bs(null,t,r,e,n))}return t;case 0:return Bs(e,t,t.type,t.pendingProps,n);case 1:return Os(e,t,r=t.type,i=gs(r,t.pendingProps),n);case 3:e:{if(W(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ra(e,t),da(t,r,null,n);var s=t.memoizedState;if(r=s.cache,bi(0,Ri,r),r!==a.cache&&ji(t,[Ri],n,!0),ca(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ds(e,t,r,n);break e}if(r!==i){fi(i=Sr(Error(o(424)),t)),t=Ds(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ii=xu(e.firstChild),ri=t,ai=!0,oi=null,si=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===i){t=Ys(e,t,n);break e}Ps(e,t,r,n)}t=t.child}return t;case 26:return Is(e,t),null===e?(n=Pu(t.type,null,t.pendingProps,null))?t.memoizedState=n:ai||(n=t.type,e=t.pendingProps,(r=ru(U.current).createElement(n))[Re]=t,r[Le]=e,eu(r,n,e),Ke(r),t.stateNode=r):t.memoizedState=Pu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return X(t),null===e&&ai&&(r=t.stateNode=yu(t.type,t.pendingProps,U.current),ri=t,si=!0,i=ii,hu(t.type)?(vu=i,ii=xu(r.firstChild)):ii=i),Ps(e,t,t.pendingProps.children,n),Is(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ai&&((i=r=ii)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Fe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=xu(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,si))?(t.stateNode=r,ri=t,ii=xu(r.firstChild),si=!1,i=!0):i=!1),i||ci(t)),X(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,ou(i,a)?r=null:null!==s&&ou(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=Ma(e,t,Ia,null,null,n),Xu._currentValue=i),Is(e,t),Ps(e,t,r,n),t.child;case 6:return null===e&&ai&&((e=n=ii)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=xu(e.nextSibling)))return null}return e}(n,t.pendingProps,si))?(t.stateNode=n,ri=t,ii=null,e=!0):e=!1),e||ci(t)),null;case 13:return Hs(e,t,n);case 4:return W(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):Ps(e,t,r,n),t.child;case 11:return zs(e,t,t.type,t.pendingProps,n);case 7:return Ps(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ps(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,bi(0,t.type,r.value),Ps(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ai(t),r=r(i=Ci(i)),t.flags|=1,Ps(e,t,r,n),t.child;case 14:return Ts(e,t,t.type,t.pendingProps,n);case 15:return Ms(e,t,t.type,t.pendingProps,n);case 19:return Xs(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Us(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Dr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Rs(e,t,n);case 24:return Ai(t),r=Ci(Ri),null===e?(null===(i=Hi())&&(i=rc,a=Li(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},na(t),bi(0,Ri,i)):(0!==(e.lanes&n)&&(ra(e,t),da(t,null,null,n),ca()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),bi(0,Ri,r)):(r=a.cache,bi(0,Ri,r),r!==i.cache&&ji(t,[Ri],n,!0))),Ps(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!_u(t)){if(null!==(t=is.current)&&((4194048&ac)===ac?null!==as:(62914560&ac)!==ac&&0===(536870912&ac)||t!==as))throw Ji=Xi,Wi;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,xc|=t)}function tl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),yi(Ri),G(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pi(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,mi())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Js(t),nl(t),t.flags&=-16777217),null;case 27:Y(t),n=U.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}e=H.current,pi(t)?di(t):(e=yu(i,r,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(Y(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}if(e=H.current,pi(t))di(t);else{switch(i=ru(U.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Re]=t,e[Le]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(eu(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=U.current,pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ri))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Re]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Qd(e.nodeValue,n)))||ci(t)}else(e=ru(e).createTextNode(r))[Re]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Re]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),i=!1}else i=mi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return G(),null===e&&Vd(t.stateNode.containerInfo),nl(t),null;case 10:return yi(t.type),nl(t),null;case 19:if(V(ds),null===(i=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(a=i.rendering))if(r)tl(i,!1);else{if(0!==pc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=us(e))){for(t.flags|=128,tl(i,!1),e=a.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Fr(n,e),n=n.sibling;return _(ds,1&ds.current|2),t.child}e=e.sibling}null!==i.tail&&te()>jc&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=us(a))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!ai)return nl(t),null}else 2*te()-i.renderingStartTime>jc&&536870912!==n&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,e=ds.current,_(ds,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),xa(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&V(_i),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),yi(Ri),nl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function il(e,t){switch(ni(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return yi(Ri),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return V(ds),null;case 4:return G(),null;case 10:return yi(t.type),null;case 22:case 23:return cs(t),xa(),null!==e&&V(_i),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return yi(Ri),null;default:return null}}function al(e,t){switch(ni(t),t.tag){case 3:yi(Ri),G();break;case 26:case 27:case 5:Y(t);break;case 4:G();break;case 13:cs(t);break;case 19:V(ds);break;case 10:yi(t.type);break;case 22:case 23:cs(t),xa(),null!==e&&V(_i);break;case 24:yi(Ri)}}function ol(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){dd(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(d){dd(i,l,d)}}}r=r.next}while(r!==a)}}catch(d){dd(t,t.return,d)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{pa(t,n)}catch(r){dd(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){dd(e,t,r)}}function dl(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){dd(e,t,i)}}function ul(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){dd(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){dd(e,t,a)}else n.current=null}function pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){dd(e,e.return,i)}}function hl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,c=null,d=null,u=null;for(m in n){var p=n[m];if(n.hasOwnProperty(m)&&null!=p)switch(m){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(m)||Jd(e,t,m,null,r,p)}}for(var h in r){var m=r[h];if(p=n[h],r.hasOwnProperty(h)&&(null!=m||null!=p))switch(h){case"type":a=m;break;case"name":i=m;break;case"checked":d=m;break;case"defaultChecked":u=m;break;case"value":s=m;break;case"defaultValue":l=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(o(137,t));break;default:m!==p&&Jd(e,t,h,m,r,p)}}return void gt(e,s,l,c,d,u,a,i);case"select":for(a in m=s=l=h=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":m=c;default:r.hasOwnProperty(a)||Jd(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=a||null!=c))switch(i){case"value":h=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&Jd(e,t,i,a,r,c)}return t=l,n=s,r=m,void(null!=h?bt(e,!!n,h,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(l in m=h=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Jd(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":h=i;break;case"defaultValue":m=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&Jd(e,t,s,i,r,a)}return void yt(e,h,m);case"option":for(var f in n)if(h=n[f],n.hasOwnProperty(f)&&null!=h&&!r.hasOwnProperty(f))if("selected"===f)e.selected=!1;else Jd(e,t,f,null,r,h);for(c in r)if(h=r[c],m=n[c],r.hasOwnProperty(c)&&h!==m&&(null!=h||null!=m))if("selected"===c)e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else Jd(e,t,c,h,r,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g)&&Jd(e,t,g,null,r,h);for(d in r)if(h=r[d],m=n[d],r.hasOwnProperty(d)&&h!==m&&(null!=h||null!=m))switch(d){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:Jd(e,t,d,h,r,m)}return;default:if(Ct(t)){for(var x in n)h=n[x],n.hasOwnProperty(x)&&void 0!==h&&!r.hasOwnProperty(x)&&Zd(e,t,x,void 0,r,h);for(u in r)h=r[u],m=n[u],!r.hasOwnProperty(u)||h===m||void 0===h&&void 0===m||Zd(e,t,u,h,r,m);return}}for(var v in n)h=n[v],n.hasOwnProperty(v)&&null!=h&&!r.hasOwnProperty(v)&&Jd(e,t,v,null,r,h);for(p in r)h=r[p],m=n[p],!r.hasOwnProperty(p)||h===m||null==h&&null==m||Jd(e,t,p,h,r,m)}(r,e.type,n,t),r[Le]=t}catch(i){dd(e,e.return,i)}}function ml(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&hu(e.type)||4===e.tag}function fl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ml(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&hu(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=qd));else if(4!==r&&(27===r&&hu(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function xl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&hu(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(xl(e,t,n),e=e.sibling;null!==e;)xl(e,t,n),e=e.sibling}function vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);eu(t,r,n),t[Re]=e,t[Le]=n}catch(a){dd(e,e.return,a)}}var bl=!1,yl=!1,wl=!1,jl="function"===typeof WeakSet?WeakSet:Set,kl=null;function Sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ol(e,n),4&r&&ol(5,n);break;case 1:if(Ol(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){dd(n,n.return,o)}else{var i=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){dd(n,n.return,s)}}64&r&&ll(n),512&r&&dl(n,n.return);break;case 3:if(Ol(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{pa(e,t)}catch(o){dd(n,n.return,o)}}break;case 27:null===t&&4&r&&vl(n);case 26:case 5:Ol(e,n),null===t&&4&r&&pl(n),512&r&&dl(n,n.return);break;case 12:Ol(e,n);break;case 13:Ol(e,n),4&r&&Tl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=md.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bl)){t=null!==t&&null!==t.memoizedState||yl,i=bl;var a=yl;bl=r,(yl=t)&&!a?Fl(e,n,0!==(8772&n.subtreeFlags)):Ol(e,n),bl=i,yl=a}break;case 30:break;default:Ol(e,n)}}function Al(e){var t=e.alternate;null!==t&&(e.alternate=null,Al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ve(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cl=null,El=!1;function Pl(e,t,n){for(n=n.child;null!==n;)zl(e,t,n),n=n.sibling}function zl(e,t,n){if(ue&&"function"===typeof ue.onCommitFiberUnmount)try{ue.onCommitFiberUnmount(de,n)}catch(a){}switch(n.tag){case 26:yl||ul(n,t),Pl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:yl||ul(n,t);var r=Cl,i=El;hu(n.type)&&(Cl=n.stateNode,El=!1),Pl(e,t,n),wu(n.stateNode),Cl=r,El=i;break;case 5:yl||ul(n,t);case 6:if(r=Cl,i=El,Cl=null,Pl(e,t,n),El=i,null!==(Cl=r))if(El)try{(9===Cl.nodeType?Cl.body:"HTML"===Cl.nodeName?Cl.ownerDocument.body:Cl).removeChild(n.stateNode)}catch(o){dd(n,t,o)}else try{Cl.removeChild(n.stateNode)}catch(o){dd(n,t,o)}break;case 18:null!==Cl&&(El?(mu(9===(e=Cl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Ep(e)):mu(Cl,n.stateNode));break;case 4:r=Cl,i=El,Cl=n.stateNode.containerInfo,El=!0,Pl(e,t,n),Cl=r,El=i;break;case 0:case 11:case 14:case 15:yl||sl(2,n,t),yl||sl(4,n,t),Pl(e,t,n);break;case 1:yl||(ul(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),Pl(e,t,n);break;case 21:Pl(e,t,n);break;case 22:yl=(r=yl)||null!==n.memoizedState,Pl(e,t,n),yl=r;break;default:Pl(e,t,n)}}function Tl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Ep(e)}catch(n){dd(t,t.return,n)}}function Ml(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new jl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new jl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){var r=fd.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Rl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(hu(l.type)){Cl=l.stateNode,El=!1;break e}break;case 5:Cl=l.stateNode,El=!1;break e;case 3:case 4:Cl=l.stateNode.containerInfo,El=!0;break e}l=l.return}if(null===Cl)throw Error(o(160));zl(a,s,i),Cl=null,El=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Il(t,e),t=t.sibling}var Ll=null;function Il(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rl(t,e),Bl(e),4&r&&(sl(3,e,e.return),ol(3,e),sl(5,e,e.return));break;case 1:Rl(t,e),Bl(e),512&r&&(yl||null===n||ul(n,n.return)),64&r&&bl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Ll;if(Rl(t,e),Bl(e),512&r&&(yl||null===n||ul(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[Fe]||a[Re]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),eu(a,r,n),a[Re]=e,Ke(a),r=a;break e;case"link":var s=Fu("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}eu(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=Fu("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}eu(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Re]=e,Ke(a),r=a}e.stateNode=r}else Vu(i,e.type,e.stateNode);else e.stateNode=Iu(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?Vu(i,e.type,e.stateNode):Iu(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&hl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rl(t,e),Bl(e),512&r&&(yl||null===n||ul(n,n.return)),null!==n&&4&r&&hl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rl(t,e),Bl(e),512&r&&(yl||null===n||ul(n,n.return)),32&e.flags){i=e.stateNode;try{jt(i,"")}catch(m){dd(e,e.return,m)}}4&r&&null!=e.stateNode&&hl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(wl=!0);break;case 6:if(Rl(t,e),Bl(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){dd(e,e.return,m)}}break;case 3:if(Du=null,i=Ll,Ll=Su(t.containerInfo),Rl(t,e),Ll=i,Bl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ep(t.containerInfo)}catch(m){dd(e,e.return,m)}wl&&(wl=!1,Nl(e));break;case 4:r=Ll,Ll=Su(e.stateNode.containerInfo),Rl(t,e),Bl(e),Ll=r;break;case 12:default:Rl(t,e),Bl(e);break;case 13:Rl(t,e),Bl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ml(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,d=bl,u=yl;if(bl=d||i,yl=u||c,Rl(t,e),yl=u,bl=d,Bl(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||bl||yl||Dl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,i)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var p=c.memoizedProps.style,h=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(m){dd(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(m){dd(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ml(e,n))));break;case 19:Rl(t,e),Bl(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ml(e,r)));case 30:case 21:}}function Bl(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(ml(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;xl(e,fl(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(jt(a,""),n.flags&=-33),xl(e,fl(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,fl(e),s);break;default:throw Error(o(161))}}catch(l){dd(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Nl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Nl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ol(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Sl(e,t.alternate,t),t=t.sibling}function Dl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Dl(t);break;case 1:ul(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Dl(t);break;case 27:wu(t.stateNode);case 26:case 5:ul(t,t.return),Dl(t);break;case 22:null===t.memoizedState&&Dl(t);break;default:Dl(t)}e=e.sibling}}function Fl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Fl(i,a,n),ol(4,a);break;case 1:if(Fl(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){dd(r,r.return,c)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)ua(l[i],s)}catch(c){dd(r,r.return,c)}}n&&64&o&&ll(a),dl(a,a.return);break;case 27:vl(a);case 26:case 5:Fl(i,a,n),n&&null===r&&4&o&&pl(a),dl(a,a.return);break;case 12:Fl(i,a,n);break;case 13:Fl(i,a,n),n&&4&o&&Tl(i,a);break;case 22:null===a.memoizedState&&Fl(i,a,n),dl(a,a.return);break;case 30:break;default:Fl(i,a,n)}t=t.sibling}}function Vl(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ii(n))}function _l(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ii(e))}function Hl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)$l(e,t,n,r),t=t.sibling}function $l(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Hl(e,t,n,r),2048&i&&ol(9,t);break;case 1:case 13:default:Hl(e,t,n,r);break;case 3:Hl(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ii(e)));break;case 12:if(2048&i){Hl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){dd(t,t.return,l)}}else Hl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?Hl(e,t,n,r):Kl(e,t):2&a._visibility?Hl(e,t,n,r):(a._visibility|=2,Ul(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&Vl(o,t);break;case 24:Hl(e,t,n,r),2048&i&&_l(t.alternate,t)}}function Ul(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:Ul(a,o,s,l,i),ol(8,o);break;case 23:break;case 22:var d=o.stateNode;null!==o.memoizedState?2&d._visibility?Ul(a,o,s,l,i):Kl(a,o):(d._visibility|=2,Ul(a,o,s,l,i)),i&&2048&c&&Vl(o.alternate,o);break;case 24:Ul(a,o,s,l,i),i&&2048&c&&_l(o.alternate,o);break;default:Ul(a,o,s,l,i)}t=t.sibling}}function Kl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Kl(n,r),2048&i&&Vl(r.alternate,r);break;case 24:Kl(n,r),2048&i&&_l(r.alternate,r);break;default:Kl(n,r)}t=t.sibling}}var Wl=8192;function Gl(e){if(e.subtreeFlags&Wl)for(e=e.child;null!==e;)Xl(e),e=e.sibling}function Xl(e){switch(e.tag){case 26:Gl(e),e.flags&Wl&&null!==e.memoizedState&&function(e,t,n){if(null===Hu)throw Error(o(475));var r=Hu;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=zu(n.href),a=e.querySelector(Tu(i));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Uu.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,void Ke(a);a=e.ownerDocument||e,n=Mu(n),(i=ju.get(i))&&Nu(n,i),Ke(a=a.createElement("link"));var s=a;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),eu(a,"link",n),t.instance=a}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Uu.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ll,e.memoizedState,e.memoizedProps);break;case 5:default:Gl(e);break;case 3:case 4:var t=Ll;Ll=Su(e.stateNode.containerInfo),Gl(e),Ll=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Wl,Wl=16777216,Gl(e),Wl=t):Gl(e))}}function Yl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ql(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Yl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)ql(e),e=e.sibling}function ql(e){switch(e.tag){case 0:case 11:case 15:Ql(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Ql(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):Ql(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Yl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==kl;){var n=kl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ii(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,kl=r;else e:for(n=e;null!==kl;){var i=(r=kl).sibling,a=r.return;if(Al(r),r===n){kl=null;break e}if(null!==i){i.return=a,kl=i;break e}kl=a}}}var ec={getCacheForType:function(e){var t=Ci(Ri),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ic=null,ac=0,oc=0,sc=null,lc=!1,cc=!1,dc=!1,uc=0,pc=0,hc=0,mc=0,fc=0,gc=0,xc=0,vc=null,bc=null,yc=!1,wc=0,jc=1/0,kc=null,Sc=null,Ac=0,Cc=null,Ec=null,Pc=0,zc=0,Tc=null,Mc=null,Rc=0,Lc=null;function Ic(){if(0!==(2&nc)&&0!==ac)return ac&-ac;if(null!==I.T){return 0!==Oi?Oi:zd()}return Te()}function Bc(){0===gc&&(gc=0===(536870912&ac)||ai?je():536870912);var e=is.current;return null!==e&&(e.flags|=32),gc}function Nc(e,t,n){(e!==rc||2!==oc&&9!==oc)&&null===e.cancelPendingCommit||($c(e,0),Vc(e,ac,gc,!1)),Ae(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(mc|=n),4===pc&&Vc(e,ac,gc,!1)),jd(e))}function Oc(e,t,n){if(0!==(6&nc))throw Error(o(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||ye(e,t),i=r?function(e,t){var n=nc;nc|=2;var r=Kc(),i=Wc();rc!==e||ac!==t?(kc=null,jc=te()+500,$c(e,t)):cc=ye(e,t);e:for(;;)try{if(0!==oc&&null!==ic){t=ic;var a=sc;t:switch(oc){case 1:oc=0,sc=null,Zc(e,t,a,1);break;case 2:case 9:if(Yi(a)){oc=0,sc=null,Jc(t);break}t=function(){2!==oc&&9!==oc||rc!==e||(oc=7),jd(e)},a.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:Yi(a)?(oc=0,sc=null,Jc(t)):(oc=0,sc=null,Zc(e,t,a,7));break;case 5:var s=null;switch(ic.tag){case 26:s=ic.memoizedState;case 5:case 27:var l=ic;if(!s||_u(s)){oc=0,sc=null;var c=l.sibling;if(null!==c)ic=c;else{var d=l.return;null!==d?(ic=d,ed(d)):ic=null}break t}}oc=0,sc=null,Zc(e,t,a,5);break;case 6:oc=0,sc=null,Zc(e,t,a,6);break;case 8:Hc(),pc=6;break e;default:throw Error(o(462))}}Qc();break}catch(u){Uc(e,u)}return vi=xi=null,I.H=r,I.A=i,nc=n,null!==ic?0:(rc=null,ac=0,Pr(),pc)}(e,t):Xc(e,t,!0),a=r;;){if(0===i){cc&&!r&&Vc(e,t,0,!1);break}if(n=e.current.alternate,!a||Fc(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=vc;var c=l.current.memoizedState.isDehydrated;if(c&&($c(l,s).flags|=256),2!==(s=Xc(l,s,!1))){if(dc&&!c){l.errorRecoveryDisabledLanes|=a,mc|=a,i=4;break e}a=bc,bc=i,null!==a&&(null===bc?bc=a:bc.push.apply(bc,a))}i=s}if(a=!1,2!==i)continue}}if(1===i){$c(e,0),Vc(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Vc(r,t,gc,!lc);break e;case 2:bc=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(i=wc+300-te())){if(Vc(r,t,gc,!lc),0!==be(r,0,!0))break e;r.timeoutHandle=lu(Dc.bind(null,r,n,bc,kc,yc,t,gc,mc,xc,lc,a,2,-0,0),i)}else Dc(r,n,bc,kc,yc,t,gc,mc,xc,lc,a,0,-0,0)}break}i=Xc(e,t,!1),a=!1}jd(e)}function Dc(e,t,n,r,i,a,s,l,c,d,u,p,h,m){if(e.timeoutHandle=-1,(8192&(p=t.subtreeFlags)||16785408===(16785408&p))&&(Hu={stylesheets:null,count:0,unsuspend:$u},Xl(t),null!==(p=function(){if(null===Hu)throw Error(o(475));var e=Hu;return e.stylesheets&&0===e.count&&Wu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=p(nd.bind(null,e,t,a,n,r,i,s,l,c,u,1,h,m)),void Vc(e,a,s,!d);nd(e,t,a,n,r,i,s,l,c)}function Fc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Yn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vc(e,t,n,r){t&=~fc,t&=~mc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-he(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&Ce(e,n,t)}function _c(){return 0!==(6&nc)||(kd(0,!1),!1)}function Hc(){if(null!==ic){if(0===oc)var e=ic.return;else vi=xi=null,Oa(e=ic),Yo=null,Qo=0,e=ic;for(;null!==e;)al(e.alternate,e),e=e.return;ic=null}}function $c(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cu(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Hc(),rc=e,ic=n=Dr(e.current,null),ac=t,oc=0,sc=null,lc=!1,cc=ye(e,t),dc=!1,xc=gc=fc=mc=hc=pc=0,bc=vc=null,yc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-he(r),a=1<<i;t|=e[i],r&=~a}return uc=t,Pr(),n}function Uc(e,t){ba=null,I.H=Ko,t===Ki||t===Gi?(t=Zi(),oc=3):t===Wi?(t=Zi(),oc=4):oc=t===Cs?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===ic&&(pc=1,ws(e,Sr(t,e.current)))}function Kc(){var e=I.H;return I.H=Ko,null===e?Ko:e}function Wc(){var e=I.A;return I.A=ec,e}function Gc(){pc=4,lc||(4194048&ac)!==ac&&null!==is.current||(cc=!0),0===(134217727&hc)&&0===(134217727&mc)||null===rc||Vc(rc,ac,gc,!1)}function Xc(e,t,n){var r=nc;nc|=2;var i=Kc(),a=Wc();rc===e&&ac===t||(kc=null,$c(e,t)),t=!1;var o=pc;e:for(;;)try{if(0!==oc&&null!==ic){var s=ic,l=sc;switch(oc){case 8:Hc(),o=6;break e;case 3:case 2:case 9:case 6:null===is.current&&(t=!0);var c=oc;if(oc=0,sc=null,Zc(e,s,l,c),n&&cc){o=0;break e}break;default:c=oc,oc=0,sc=null,Zc(e,s,l,c)}}Yc(),o=pc;break}catch(d){Uc(e,d)}return t&&e.shellSuspendCounter++,vi=xi=null,nc=r,I.H=i,I.A=a,null===ic&&(rc=null,ac=0,Pr()),o}function Yc(){for(;null!==ic;)qc(ic)}function Qc(){for(;null!==ic&&!Z();)qc(ic)}function qc(e){var t=qs(e.alternate,e,uc);e.memoizedProps=e.pendingProps,null===t?ed(e):ic=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ns(n,t,t.pendingProps,t.type,void 0,ac);break;case 11:t=Ns(n,t,t.pendingProps,t.type.render,t.ref,ac);break;case 5:Oa(t);default:al(n,t),t=qs(n,t=ic=Fr(t,uc),uc)}e.memoizedProps=e.pendingProps,null===t?ed(e):ic=t}function Zc(e,t,n,r){vi=xi=null,Oa(t),Yo=null,Qo=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ki(t,n,i,!0),null!==(n=is.current)){switch(n.tag){case 13:return null===as?Gc():null===n.alternate&&0===pc&&(pc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Xi?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),ud(e,r,i)),!1;case 22:return n.flags|=65536,r===Xi?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),ud(e,r,i)),!1}throw Error(o(435,n.tag))}return ud(e,r,i),Gc(),!1}if(ai)return null!==(t=is.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==li&&fi(Sr(e=Error(o(422),{cause:r}),n))):(r!==li&&fi(Sr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Sr(r,n),sa(e,i=ks(e.stateNode,r,i)),4!==pc&&(pc=2)),!1;var a=Error(o(520),{cause:r});if(a=Sr(a,n),null===vc?vc=[a]:vc.push(a),4!==pc&&(pc=2),null===t)return!0;r=Sr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,sa(n,e=ks(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===Sc||!Sc.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,As(i=Ss(i),e,n,r),sa(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,ac))return pc=1,ws(e,Sr(n,e.current)),void(ic=null)}catch(a){if(null!==i)throw ic=i,a;return pc=1,ws(e,Sr(n,e.current)),void(ic=null)}32768&t.flags?(ai||1===r?e=!0:cc||0!==(536870912&ac)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=is.current)&&13===r.tag&&(r.flags|=16384))),td(t,e)):ed(t)}function ed(e){var t=e;do{if(0!==(32768&t.flags))return void td(t,lc);e=t.return;var n=rl(t.alternate,t,uc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===pc&&(pc=5)}function td(e,t){do{var n=il(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);pc=6,ic=null}function nd(e,t,n,r,i,a,s,l,c){e.cancelPendingCommit=null;do{sd()}while(0!==Ac);if(0!==(6&nc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var d=31-he(n),u=1<<d;s[d]=0,l[d]=-1;var p=c[d];if(null!==p)for(c[d]=null,d=0;d<p.length;d++){var h=p[d];null!==h&&(h.lane&=-536870913)}n&=~u}0!==r&&Ce(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=Er,s,l,c),e===rc&&(ic=rc=null,ac=0),Ec=t,Cc=e,Pc=n,zc=a,Tc=i,Mc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,q(ae,function(){return ld(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=I.T,I.T=null,i=B.p,B.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,tu=np,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=e,h=null;t:for(;;){for(var m;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(m=p.firstChild);)h=p,p=m;for(;;){if(p===e)break t;if(h===n&&++d===i&&(l=s),h===a&&++u===r&&(c=s),null!==(m=p.nextSibling))break;h=(p=h).parentNode}p=m}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nu={focusedElem:e,selectionRange:n},np=!1,kl=t;null!==kl;)if(e=(t=kl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,kl=e;else for(;null!==kl;){switch(a=(t=kl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var f=gs(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(f,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(x){dd(n,n.return,x)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))fu(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fu(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,kl=e;break}kl=t.return}}(e,t)}finally{nc=s,B.p=i,I.T=r}}Ac=1,rd(),id(),ad()}}function rd(){if(1===Ac){Ac=0;var e=Cc,t=Ec,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=I.T,I.T=null;var r=B.p;B.p=2;var i=nc;nc|=4;try{Il(t,e);var a=nu,o=er(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,d=l.end;if(void 0===d&&(d=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(d,s.value.length);else{var u=s.ownerDocument||document,p=u&&u.defaultView||window;if(p.getSelection){var h=p.getSelection(),m=s.textContent.length,f=Math.min(l.start,m),g=void 0===l.end?f:Math.min(l.end,m);!h.extend&&f>g&&(o=g,g=f,f=o);var x=Jn(s,f),v=Jn(s,g);if(x&&v&&(1!==h.rangeCount||h.anchorNode!==x.node||h.anchorOffset!==x.offset||h.focusNode!==v.node||h.focusOffset!==v.offset)){var b=u.createRange();b.setStart(x.node,x.offset),h.removeAllRanges(),f>g?(h.addRange(b),h.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),h.addRange(b))}}}}for(u=[],h=s;h=h.parentNode;)1===h.nodeType&&u.push({element:h,left:h.scrollLeft,top:h.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<u.length;s++){var y=u[s];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}np=!!tu,nu=tu=null}finally{nc=i,B.p=r,I.T=n}}e.current=t,Ac=2}}function id(){if(2===Ac){Ac=0;var e=Cc,t=Ec,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=I.T,I.T=null;var r=B.p;B.p=2;var i=nc;nc|=4;try{Sl(e,t.alternate,t)}finally{nc=i,B.p=r,I.T=n}}Ac=3}}function ad(){if(4===Ac||3===Ac){Ac=0,ee();var e=Cc,t=Ec,n=Pc,r=Mc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ac=5:(Ac=0,Ec=Cc=null,od(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Sc=null),ze(n),t=t.stateNode,ue&&"function"===typeof ue.onCommitFiberRoot)try{ue.onCommitFiberRoot(de,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=I.T,i=B.p,B.p=2,I.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{I.T=t,B.p=i}}0!==(3&Pc)&&sd(),jd(e),i=e.pendingLanes,0!==(4194090&n)&&0!==(42&i)?e===Lc?Rc++:(Rc=0,Lc=e):Rc=0,kd(0,!1)}}function od(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ii(t)))}function sd(e){return rd(),id(),ad(),ld()}function ld(){if(5!==Ac)return!1;var e=Cc,t=zc;zc=0;var n=ze(Pc),r=I.T,i=B.p;try{B.p=32>n?32:n,I.T=null,n=Tc,Tc=null;var a=Cc,s=Pc;if(Ac=0,Ec=Cc=null,Pc=0,0!==(6&nc))throw Error(o(331));var l=nc;if(nc|=4,ql(a.current),$l(a,a.current,s,n),nc=l,kd(0,!1),ue&&"function"===typeof ue.onPostCommitFiberRoot)try{ue.onPostCommitFiberRoot(de,a)}catch(c){}return!0}finally{B.p=i,I.T=r,od(e,t)}}function cd(e,t,n){t=Sr(n,t),null!==(e=aa(e,t=ks(e.stateNode,t,2),2))&&(Ae(e,2),jd(e))}function dd(e,t,n){if(3===e.tag)cd(e,e,n);else for(;null!==t;){if(3===t.tag){cd(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Sc||!Sc.has(r))){e=Sr(n,e),null!==(r=aa(t,n=Ss(2),2))&&(As(n,r,t,e),Ae(r,2),jd(r));break}}t=t.return}}function ud(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(dc=!0,i.add(n),e=pd.bind(null,e,t,n),t.then(e,e))}function pd(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ac&n)===n&&(4===pc||3===pc&&(62914560&ac)===ac&&300>te()-wc?0===(2&nc)&&$c(e,0):fc|=n,xc===ac&&(xc=0)),jd(e)}function hd(e,t){0===t&&(t=ke()),null!==(e=Mr(e,t))&&(Ae(e,t),jd(e))}function md(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),hd(e,n)}function fd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),hd(e,n)}var gd=null,xd=null,vd=!1,bd=!1,yd=!1,wd=0;function jd(e){e!==xd&&null===e.next&&(null===xd?gd=xd=e:xd=xd.next=e),bd=!0,vd||(vd=!0,uu(function(){0!==(6&nc)?q(re,Sd):Ad()}))}function kd(e,t){if(!yd&&bd){yd=!0;do{for(var n=!1,r=gd;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-he(42|e)+1)-1,a=201326741&(a&=i&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,Pd(r,a))}else a=ac,0===(3&(a=be(r,r===rc?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||ye(r,a)||(n=!0,Pd(r,a));r=r.next}}while(n);yd=!1}}function Sd(){Ad()}function Ad(){bd=vd=!1;var e=0;0!==wd&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==su&&(su=e,!0);return su=null,!1}()&&(e=wd),wd=0);for(var t=te(),n=null,r=gd;null!==r;){var i=r.next,a=Cd(r,t);0===a?(r.next=null,null===n?gd=i:n.next=i,null===i&&(xd=n)):(n=r,(0!==e||0!==(3&a))&&(bd=!0)),r=i}kd(e,!1)}function Cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-he(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=we(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=ac,n=be(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===oc||9===oc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||ye(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),ze(n)){case 2:case 8:n=ie;break;case 32:default:n=ae;break;case 268435456:n=se}return r=Ed.bind(null,e),n=q(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function Ed(e,t){if(0!==Ac&&5!==Ac)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(sd()&&e.callbackNode!==n)return null;var r=ac;return 0===(r=be(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Oc(e,r,t),Cd(e,te()),null!=e.callbackNode&&e.callbackNode===n?Ed.bind(null,e):null)}function Pd(e,t){if(sd())return null;Oc(e,t,!0)}function zd(){return 0===wd&&(wd=je()),wd}function Td(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:zt(""+e)}function Md(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Rd=0;Rd<wr.length;Rd++){var Ld=wr[Rd];jr(Ld.toLowerCase(),"on"+(Ld[0].toUpperCase()+Ld.slice(1)))}jr(hr,"onAnimationEnd"),jr(mr,"onAnimationIteration"),jr(fr,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(gr,"onTransitionRun"),jr(xr,"onTransitionStart"),jr(vr,"onTransitionCancel"),jr(br,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),Xe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Id="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Id));function Nd(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(d){xs(d)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(d){xs(d)}i.currentTarget=null,a=l}}}}function Od(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var r=e+"__bubble";n.has(r)||(_d(t,e,2,!1),n.add(r))}function Dd(e,t,n){var r=0;t&&(r|=4),_d(n,e,r,t)}var Fd="_reactListening"+Math.random().toString(36).slice(2);function Vd(e){if(!e[Fd]){e[Fd]=!0,We.forEach(function(t){"selectionchange"!==t&&(Bd.has(t)||Dd(t,!1,e),Dd(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fd]||(t[Fd]=!0,Dd("selectionchange",!1,t))}}function _d(e,t,n,r){switch(cp(t)){case 2:var i=rp;break;case 8:i=ip;break;default:i=ap}n=i.bind(null,t,n,e),i=void 0,!Ft||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hd(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===i)return;o=o.return}for(;null!==s;){if(null===(o=_e(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=a=o;continue e}s=s.parentNode}}r=r.return}Nt(function(){var r=a,i=Mt(n),o=[];e:{var s=yr.get(e);if(void 0!==s){var c=Zt,d=e;switch(e){case"keypress":if(0===Kt(n))break e;case"keydown":case"keyup":c=fn;break;case"focusin":d="focus",c=on;break;case"focusout":d="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=xn;break;case hr:case mr:case fr:c=sn;break;case br:c=vn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=bn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=yn}var u=0!==(4&t),p=!u&&("scroll"===e||"scrollend"===e),h=u?null!==s?s+"Capture":null:s;u=[];for(var m,f=r;null!==f;){var g=f;if(m=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===m||null===h||null!=(g=Ot(f,h))&&u.push($d(f,g,m)),p)break;f=f.return}0<u.length&&(s=new c(s,d,null,n,i),o.push({event:s,listeners:u}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Tt||!(d=n.relatedTarget||n.fromElement)||!_e(d)&&!d[Ie])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(d=(d=n.relatedTarget||n.toElement)?_e(d):null)&&(p=l(d),u=d.tag,d!==p||5!==u&&27!==u&&6!==u)&&(d=null)):(c=null,d=r),c!==d)){if(u=rn,g="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(u=gn,g="onPointerLeave",h="onPointerEnter",f="pointer"),p=null==c?s:$e(c),m=null==d?s:$e(d),(s=new u(g,f+"leave",c,n,i)).target=p,s.relatedTarget=m,g=null,_e(i)===r&&((u=new u(h,f+"enter",d,n,i)).target=m,u.relatedTarget=p,g=u),p=g,c&&d)e:{for(h=d,f=0,m=u=c;m;m=Kd(m))f++;for(m=0,g=h;g;g=Kd(g))m++;for(;0<f-m;)u=Kd(u),f--;for(;0<m-f;)h=Kd(h),m--;for(;f--;){if(u===h||null!==h&&u===h.alternate)break e;u=Kd(u),h=Kd(h)}u=null}else u=null;null!==c&&Wd(o,s,c,u,!1),null!==d&&null!==p&&Wd(o,p,d,u,!0)}if("select"===(c=(s=r?$e(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var x=Dn;else if(Rn(s))if(Fn)x=Xn;else{x=Wn;var v=Kn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Ct(r.elementType)&&(x=Dn):x=Gn;switch(x&&(x=x(e,r))?Ln(o,x,n,i):(v&&v(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&vt(s,"number",s.value)),v=r?$e(r):window,e){case"focusin":(Rn(v)||"true"===v.contentEditable)&&(rr=v,ir=r,ar=null);break;case"focusout":ar=ir=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,sr(o,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(o,n,i)}var b;if(jn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Tn?Pn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(An&&"ko"!==n.locale&&(Tn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Tn&&(b=Ut()):(Ht="value"in(_t=i)?_t.value:_t.textContent,Tn=!0)),0<(v=Ud(r,y)).length&&(y=new cn(y,e,null,n,i),o.push({event:y,listeners:v}),b?y.data=b:null!==(b=zn(n))&&(y.data=b))),(b=Sn?function(e,t){switch(e){case"compositionend":return zn(t);case"keypress":return 32!==t.which?null:(En=!0,Cn);case"textInput":return(e=t.data)===Cn&&En?null:e;default:return null}}(e,n):function(e,t){if(Tn)return"compositionend"===e||!jn&&Pn(e,t)?(e=Ut(),$t=Ht=_t=null,Tn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return An&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(y=Ud(r,"onBeforeInput")).length&&(v=new cn("onBeforeInput","beforeinput",null,n,i),o.push({event:v,listeners:y}),v.data=b)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=Td((i[Le]||null).action),o=r.submitter;o&&null!==(t=(t=o[Le]||null)?Td(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Zt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wd){var e=o?Md(i,o):new FormData(i);Mo(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Md(i,o):new FormData(i),Mo(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Nd(o,t)})}function $d(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ud(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Ot(e,n))&&r.unshift($d(e,i,a)),null!=(i=Ot(e,t))&&r.push($d(e,i,a))),3===e.tag)return r;e=e.return}return[]}function Kd(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Wd(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=Ot(n,a))&&o.unshift($d(n,c,l)):i||null!=(c=Ot(n,a))&&o.push($d(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function Yd(e){return("string"===typeof e?e:""+e).replace(Gd,"\n").replace(Xd,"")}function Qd(e,t){return t=Yd(t),Yd(e)===t}function qd(){}function Jd(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||jt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&jt(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":At(e,r,a);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=zt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&Jd(e,t,"name",i.name,i,null),Jd(e,t,"formEncType",i.formEncType,i,null),Jd(e,t,"formMethod",i.formMethod,i,null),Jd(e,t,"formTarget",i.formTarget,i,null)):(Jd(e,t,"encType",i.encType,i,null),Jd(e,t,"method",i.method,i,null),Jd(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=zt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=qd);break;case"onScroll":null!=r&&Od("scroll",e);break;case"onScrollEnd":null!=r&&Od("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=zt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Od("beforetoggle",e),Od("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Et.get(n)||n,r)}}function Zd(e,t,n,r,i,a){switch(n){case"style":At(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?jt(e,r):("number"===typeof r||"bigint"===typeof r)&&jt(e,""+r);break;case"onScroll":null!=r&&Od("scroll",e);break;case"onScrollEnd":null!=r&&Od("scrollend",e);break;case"onClick":null!=r&&(e.onclick=qd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ge.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[Le]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function eu(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Od("error",e),Od("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Jd(e,t,r,s,n,null)}}return a&&Jd(e,t,"srcSet",n.srcSet,n,null),void(i&&Jd(e,t,"src",n.src,n,null));case"input":Od("invalid",e);var l=r=s=a=null,c=null,d=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(null!=u)switch(i){case"name":a=u;break;case"type":s=u;break;case"checked":c=u;break;case"defaultChecked":d=u;break;case"value":r=u;break;case"defaultValue":l=u;break;case"children":case"dangerouslySetInnerHTML":if(null!=u)throw Error(o(137,t));break;default:Jd(e,t,i,u,n,null)}}return xt(e,r,l,c,d,s,a,!1),void ut(e);case"select":for(a in Od("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Jd(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?bt(e,!!i,t,!1):null!=n&&bt(e,!!i,n,!0));case"textarea":for(s in Od("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Jd(e,t,s,l,n,null)}return wt(e,i,a,r),void ut(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Jd(e,t,c,i,n,null);return;case"dialog":Od("beforetoggle",e),Od("toggle",e),Od("cancel",e),Od("close",e);break;case"iframe":case"object":Od("load",e);break;case"video":case"audio":for(i=0;i<Id.length;i++)Od(Id[i],e);break;case"image":Od("error",e),Od("load",e);break;case"details":Od("toggle",e);break;case"embed":case"source":case"link":Od("error",e),Od("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&null!=(i=n[d]))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Jd(e,t,d,i,n,null)}return;default:if(Ct(t)){for(u in n)n.hasOwnProperty(u)&&(void 0!==(i=n[u])&&Zd(e,t,u,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Jd(e,t,l,i,n,null))}var tu=null,nu=null;function ru(e){return 9===e.nodeType?e:e.ownerDocument}function iu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function au(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function ou(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var su=null;var lu="function"===typeof setTimeout?setTimeout:void 0,cu="function"===typeof clearTimeout?clearTimeout:void 0,du="function"===typeof Promise?Promise:void 0,uu="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof du?function(e){return du.resolve(null).then(e).catch(pu)}:lu;function pu(e){setTimeout(function(){throw e})}function hu(e){return"head"===e}function mu(e,t){var n=t,r=0,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(1&n&&wu(o.documentElement),2&n&&wu(o.body),4&n)for(wu(n=o.head),o=n.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Fe]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=s}}if(0===i)return e.removeChild(a),void Ep(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=a}while(n);Ep(t)}function fu(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fu(n),Ve(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gu(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function xu(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var vu=null;function bu(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function yu(e,t,n){switch(t=ru(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ve(e)}var ju=new Map,ku=new Set;function Su(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Au=B.d;B.d={f:function(){var e=Au.f(),t=_c();return e||t},r:function(e){var t=He(e);null!==t&&5===t.tag&&"form"===t.type?Lo(t):Au.r(e)},D:function(e){Au.D(e),Eu("dns-prefetch",e,null)},C:function(e,t){Au.C(e,t),Eu("preconnect",e,t)},L:function(e,t,n){Au.L(e,t,n);var r=Cu;if(r&&e&&t){var i='link[rel="preload"][as="'+ft(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+ft(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+ft(n.imageSizes)+'"]')):i+='[href="'+ft(e)+'"]';var a=i;switch(t){case"style":a=zu(e);break;case"script":a=Ru(e)}ju.has(a)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),ju.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Tu(a))||"script"===t&&r.querySelector(Lu(a))||(eu(t=r.createElement("link"),"link",e),Ke(t),r.head.appendChild(t)))}},m:function(e,t){Au.m(e,t);var n=Cu;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+ft(r)+'"][href="'+ft(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ru(e)}if(!ju.has(a)&&(e=p({rel:"modulepreload",href:e},t),ju.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Lu(a)))return}eu(r=n.createElement("link"),"link",e),Ke(r),n.head.appendChild(r)}}},X:function(e,t){Au.X(e,t);var n=Cu;if(n&&e){var r=Ue(n).hoistableScripts,i=Ru(e),a=r.get(i);a||((a=n.querySelector(Lu(i)))||(e=p({src:e,async:!0},t),(t=ju.get(i))&&Ou(e,t),Ke(a=n.createElement("script")),eu(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){Au.S(e,t,n);var r=Cu;if(r&&e){var i=Ue(r).hoistableStyles,a=zu(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Tu(a)))s.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ju.get(a))&&Nu(e,n);var l=o=r.createElement("link");Ke(l),eu(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Bu(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){Au.M(e,t);var n=Cu;if(n&&e){var r=Ue(n).hoistableScripts,i=Ru(e),a=r.get(i);a||((a=n.querySelector(Lu(i)))||(e=p({src:e,async:!0,type:"module"},t),(t=ju.get(i))&&Ou(e,t),Ke(a=n.createElement("script")),eu(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var Cu="undefined"===typeof document?null:document;function Eu(e,t,n){var r=Cu;if(r&&"string"===typeof t&&t){var i=ft(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),ku.has(i)||(ku.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(eu(t=r.createElement("link"),"link",e),Ke(t),r.head.appendChild(t)))}}function Pu(e,t,n,r){var i,a,s,l,c=(c=U.current)?Su(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=zu(n.href),(r=(n=Ue(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=zu(n.href);var d=Ue(c).hoistableStyles,u=d.get(e);if(u||(c=c.ownerDocument||c,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,u),(d=c.querySelector(Tu(e)))&&!d._p&&(u.instance=d,u.state.loading=5),ju.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ju.set(e,n),d||(i=c,a=e,s=n,l=u.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),eu(a,"link",s),Ke(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return u}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Ru(n),(r=(n=Ue(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function zu(e){return'href="'+ft(e)+'"'}function Tu(e){return'link[rel="stylesheet"]['+e+"]"}function Mu(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Ru(e){return'[src="'+ft(e)+'"]'}function Lu(e){return"script[async]"+e}function Iu(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+ft(n.href)+'"]');if(r)return t.instance=r,Ke(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Ke(r=(e.ownerDocument||e).createElement("style")),eu(r,"style",i),Bu(r,n.precedence,e),t.instance=r;case"stylesheet":i=zu(n.href);var a=e.querySelector(Tu(i));if(a)return t.state.loading|=4,t.instance=a,Ke(a),a;r=Mu(n),(i=ju.get(i))&&Nu(r,i),Ke(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),eu(a,"link",r),t.state.loading|=4,Bu(a,n.precedence,e),t.instance=a;case"script":return a=Ru(n.src),(i=e.querySelector(Lu(a)))?(t.instance=i,Ke(i),i):(r=n,(i=ju.get(a))&&Ou(r=p({},n),i),Ke(i=(e=e.ownerDocument||e).createElement("script")),eu(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Bu(r,n.precedence,e));return t.instance}function Bu(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Nu(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Ou(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Du=null;function Fu(e,t,n){if(null===Du){var r=new Map,i=Du=new Map;i.set(n,r)}else(r=(i=Du).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Fe]||a[Re]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Vu(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function _u(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Hu=null;function $u(){}function Uu(){if(this.count--,0===this.count)if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Ku=null;function Wu(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Ku=new Map,t.forEach(Gu,e),Ku=null,Uu.call(e))}function Gu(e,t){if(!(4&t.state.loading)){var n=Ku.get(e);if(n)var r=n.get(null);else{n=new Map,Ku.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=Uu.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var Xu={$$typeof:w,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function Yu(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Se(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Se(0),this.hiddenUpdates=Se(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Qu(e,t,n,r,i,a,o,s,l,c,d,u){return e=new Yu(e,t,n,o,s,l,c,u),t=1,!0===a&&(t|=24),a=Nr(3,null,null,t),e.current=a,a.stateNode=e,(t=Li()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},na(a),e}function qu(e){return e?e=Ir:Ir}function Ju(e,t,n,r,i,a){i=qu(i),null===r.context?r.context=i:r.pendingContext=i,(r=ia(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=aa(e,r,t))&&(Nc(n,0,t),oa(n,e,t))}function Zu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ep(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function tp(e){if(13===e.tag){var t=Mr(e,67108864);null!==t&&Nc(t,0,67108864),ep(e,67108864)}}var np=!0;function rp(e,t,n,r){var i=I.T;I.T=null;var a=B.p;try{B.p=2,ap(e,t,n,r)}finally{B.p=a,I.T=i}}function ip(e,t,n,r){var i=I.T;I.T=null;var a=B.p;try{B.p=8,ap(e,t,n,r)}finally{B.p=a,I.T=i}}function ap(e,t,n,r){if(np){var i=op(r);if(null===i)Hd(e,t,r,sp,n),vp(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return up=bp(up,e,t,n,r,i),!0;case"dragenter":return pp=bp(pp,e,t,n,r,i),!0;case"mouseover":return hp=bp(hp,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return mp.set(a,bp(mp.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,fp.set(a,bp(fp.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(vp(e,r),4&t&&-1<xp.indexOf(e)){for(;null!==i;){var a=He(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=ve(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-he(o);s.entanglements[1]|=l,o&=~l}jd(a),0===(6&nc)&&(jc=te()+500,kd(0,!1))}}break;case 13:null!==(s=Mr(a,2))&&Nc(s,0,2),_c(),ep(a,2)}if(null===(a=op(r))&&Hd(e,t,r,sp,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Hd(e,t,r,null,n)}}function op(e){return lp(e=Mt(e))}var sp=null;function lp(e){if(sp=null,null!==(e=_e(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sp=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ie:return 8;case ae:case oe:return 32;case se:return 268435456;default:return 32}default:return 32}}var dp=!1,up=null,pp=null,hp=null,mp=new Map,fp=new Map,gp=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vp(e,t){switch(e){case"focusin":case"focusout":up=null;break;case"dragenter":case"dragleave":pp=null;break;case"mouseover":case"mouseout":hp=null;break;case"pointerover":case"pointerout":mp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fp.delete(t.pointerId)}}function bp(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=He(t))&&tp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function yp(e){var t=_e(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=B.p;try{return B.p=e,t()}finally{B.p=n}}(e.priority,function(){if(13===n.tag){var e=Ic();e=Pe(e);var t=Mr(n,e);null!==t&&Nc(t,0,e),ep(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=op(e.nativeEvent);if(null!==n)return null!==(t=He(n))&&tp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Tt=r,n.target.dispatchEvent(r),Tt=null,t.shift()}return!0}function jp(e,t,n){wp(e)&&n.delete(t)}function kp(){dp=!1,null!==up&&wp(up)&&(up=null),null!==pp&&wp(pp)&&(pp=null),null!==hp&&wp(hp)&&(hp=null),mp.forEach(jp),fp.forEach(jp)}function Sp(e,t){e.blockedOn===t&&(e.blockedOn=null,dp||(dp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kp)))}var Ap=null;function Cp(e){Ap!==e&&(Ap=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ap===e&&(Ap=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===lp(r||n))continue;break}var a=He(n);null!==a&&(e.splice(t,3),t-=3,Mo(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Ep(e){function t(t){return Sp(t,e)}null!==up&&Sp(up,e),null!==pp&&Sp(pp,e),null!==hp&&Sp(hp,e),mp.forEach(t),fp.forEach(t);for(var n=0;n<gp.length;n++){var r=gp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gp.length&&null===(n=gp[0]).blockedOn;)yp(n),null===n.blockedOn&&gp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Le]||null;if("function"===typeof a)o||Cp(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[Le]||null)s=o.formAction;else if(null!==lp(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Cp(n)}}}function Pp(e){this._internalRoot=e}function zp(e){this._internalRoot=e}zp.prototype.render=Pp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Ju(t.current,Ic(),e,t,null,null)},zp.prototype.unmount=Pp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Ju(e.current,2,null,e,null,null),_c(),t[Ie]=null}},zp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Te();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gp.length&&0!==t&&t<gp[n].priority;n++);gp.splice(n,0,e),0===n&&yp(e)}};var Tp=i.version;if("19.1.0"!==Tp)throw Error(o(527,Tp,"19.1.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return d(i),e;if(a===r)return d(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?u(e):null)?null:e.stateNode};var Mp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Rp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rp.isDisabled&&Rp.supportsFiber)try{de=Rp.inject(Mp),ue=Rp}catch(Ip){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=vs,a=bs,l=ys;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Qu(e,1,!1,null,0,n,r,i,a,l,0,null),e[Ie]=t.current,Vd(e),new Pp(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=vs,l=bs,c=ys,d=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(d=n.formState)),(t=Qu(e,1,!0,t,0,r,i,a,l,c,0,d)).context=qu(null),n=t.current,(i=ia(r=Pe(r=Ic()))).callback=null,aa(n,i,r),n=r,t.current.lanes=n,Ae(t,n),jd(t),e[Ie]=t.current,Vd(e),new zp(t)},t.version="19.1.0"},1352:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(1085)},1863:(e,t,n)=>{"use strict";var r=n(9950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},1983:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var y=b.prototype=new v;y.constructor=b,f(y,x.prototype),y.isPureReactComponent=!0;var w=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function S(e,t,r,i,a,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function A(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function E(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function P(){}function z(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,d=!1;if(null===e)d=!0;else switch(s){case"bigint":case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case n:case r:d=!0;break;case p:return z((d=e._init)(e._payload),t,i,a,o)}}if(d)return o=o(e),d=""===a?"."+E(e,0):a,w(o)?(i="",null!=d&&(i=d.replace(C,"$&/")+"/"),z(o,t,i,"",function(e){return e})):null!=o&&(A(o)&&(l=o,c=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+d,o=S(l.type,c,void 0,0,0,l.props)),t.push(o)),1;d=0;var u,m=""===a?".":a+":";if(w(e))for(var f=0;f<e.length;f++)d+=z(a=e[f],t,i,s=m+E(a,f),o);else if("function"===typeof(f=null===(u=e)||"object"!==typeof u?null:"function"===typeof(u=h&&u[h]||u["@@iterator"])?u:null))for(e=f.call(e),f=0;!(a=e.next()).done;)d+=z(a=a.value,t,i,s=m+E(a,f++),o);else if("object"===s){if("function"===typeof e.then)return z(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(P,P):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return d}function T(e,t,n){if(null==e)return e;var r=[],i=0;return z(e,r,"","",function(e){return t.call(n,e,i++)}),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function L(){}t.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=o,t.PureComponent=b,t.StrictMode=a,t.Suspense=d,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return j.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=f({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!k.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return S(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return S(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.T,n={};j.T=n;try{var r=e(),i=j.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(L,R)}catch(a){R(a)}finally{j.T=t}},t.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},t.use=function(e){return j.H.use(e)},t.useActionState=function(e,t,n){return j.H.useActionState(e,t,n)},t.useCallback=function(e,t){return j.H.useCallback(e,t)},t.useContext=function(e){return j.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=j.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return j.H.useId()},t.useImperativeHandle=function(e,t,n){return j.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.H.useMemo(e,t)},t.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return j.H.useReducer(e,t,n)},t.useRef=function(e){return j.H.useRef(e)},t.useState=function(e){return j.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return j.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return j.H.useTransition()},t.version="19.1.0"},3916:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},4414:(e,t,n)=>{"use strict";e.exports=n(3916)},5340:(e,t,n)=>{"use strict";e.exports=n(9487)},7119:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(1863)},9487:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,d=e[c];if(0>a(l,n))c<i&&0>a(d,l)?(e[r]=d,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,h=3,m=!1,f=!1,g=!1,x=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,n(c,t)}t=r(d)}}function j(e){if(g=!1,w(e),!f)if(null!==r(c))f=!0,S||(S=!0,k());else{var t=r(d);null!==t&&R(j,t.startTime-e)}}var k,S=!1,A=-1,C=5,E=-1;function P(){return!!x||!(t.unstable_now()-E<C)}function z(){if(x=!1,S){var e=t.unstable_now();E=e;var n=!0;try{e:{f=!1,g&&(g=!1,b(A),A=-1),m=!0;var a=h;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&P());){var o=p.callback;if("function"===typeof o){p.callback=null,h=p.priorityLevel;var s=o(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){p.callback=s,w(e),n=!0;break t}p===r(c)&&i(c),w(e)}else i(c);p=r(c)}if(null!==p)n=!0;else{var l=r(d);null!==l&&R(j,l.startTime-e),n=!1}}break e}finally{p=null,h=a,m=!1}n=void 0}}finally{n?k():S=!1}}}if("function"===typeof y)k=function(){y(z)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,M=T.port2;T.port1.onmessage=z,k=function(){M.postMessage(null)}}else k=function(){v(z,0)};function R(e,n){A=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(d,e),null===r(c)&&e===r(d)&&(g?(b(A),A=-1):g=!0,R(j,a-o))):(e.sortIndex=s,n(c,e),f||m||(f=!0,S||(S=!0,k()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},9950:(e,t,n)=>{"use strict";e.exports=n(1983)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".475767fe.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="dongkyu-portfolio-2025:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach(e=>e(n)),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/portfolio_2025/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((n,r)=>i=e[t]=[n,r]);r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}},"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some(t=>0!==e[t])){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkdongkyu_portfolio_2025=self.webpackChunkdongkyu_portfolio_2025||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>kb,hasStandardBrowserEnv:()=>Ab,hasStandardBrowserWebWorkerEnv:()=>Cb,navigator:()=>Sb,origin:()=>Eb});var t=n(9950),r=n(1352);var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(403),s=n.n(o),l="-ms-",c="-moz-",d="-webkit-",u="comm",p="rule",h="decl",m="@keyframes",f=Math.abs,g=String.fromCharCode,x=Object.assign;function v(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function j(e,t){return 0|e.charCodeAt(t)}function k(e,t,n){return e.slice(t,n)}function S(e){return e.length}function A(e){return e.length}function C(e,t){return t.push(e),e}function E(e,t){return e.filter(function(e){return!b(e,t)})}var P=1,z=1,T=0,M=0,R=0,L="";function I(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:P,column:z,length:o,return:"",siblings:s}}function B(e,t){return x(I("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function N(e){for(;e.root;)e=B(e.root,{children:[e]});C(e,e.siblings)}function O(){return R=M>0?j(L,--M):0,z--,10===R&&(z=1,P--),R}function D(){return R=M<T?j(L,M++):0,z++,10===R&&(z=1,P++),R}function F(){return j(L,M)}function V(){return M}function _(e,t){return k(L,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $(e){return P=z=1,T=S(L=e),M=0,[]}function U(e){return L="",e}function K(e){return v(_(M-1,X(91===e?e+2:40===e?e+1:e)))}function W(e){for(;(R=F())&&R<33;)D();return H(e)>2||H(R)>3?"":" "}function G(e,t){for(;--t&&D()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return _(e,V()+(t<6&&32==F()&&32==D()))}function X(e){for(;D();)switch(R){case e:return M;case 34:case 39:34!==e&&39!==e&&X(R);break;case 40:41===e&&X(e);break;case 92:D()}return M}function Y(e,t){for(;D()&&e+R!==57&&(e+R!==84||47!==F()););return"/*"+_(t,M-1)+"*"+g(47===e?e:D())}function Q(e){for(;!H(F());)D();return _(e,M)}function q(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function J(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case h:return e.return=e.return||e.value;case u:return"";case m:return e.return=e.value+"{"+q(e.children,r)+"}";case p:if(!S(e.value=e.props.join(",")))return""}return S(n=q(e.children,r))?e.return=e.value+"{"+n+"}":""}function Z(e,t,n){switch(function(e,t){return 45^j(e,0)?(((t<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+c+e+l+e+e;case 5936:switch(j(e,t+11)){case 114:return d+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+l+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+l+e+e;case 6165:return d+e+l+"flex-"+e+e;case 5187:return d+e+y(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return d+e+l+"flex-item-"+y(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":l+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return d+e+l+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+l+y(e,"shrink","negative")+e;case 5292:return d+e+l+y(e,"basis","preferred-size")+e;case 6060:return d+"box-"+y(e,"-grow","")+d+e+l+y(e,"grow","positive")+e;case 4554:return d+y(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!b(e,/flex-|baseline/))return l+"grid-column-align"+k(e,t)+e;break;case 2592:case 3360:return l+y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,b(e.props,/grid-\w+-end/)})?~w(e+(n=n[t].value),"span",0)?e:l+y(e,"-start","")+e+l+"grid-row-span:"+(~w(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":l+y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return b(e.props,/grid-\w+-start/)})?e:l+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(j(e,t+1)){case 109:if(45!==j(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+c+(108==j(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?Z(y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return l+n+":"+r+s+(i?l+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===j(e,t+6))return y(e,":",":"+d)+e;break;case 6444:switch(j(e,45===j(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===j(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+l+"$2box$3")+e;case 100:return y(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=Z(e.value,e.length,n));case m:return q([B(e,{value:y(e.value,"@","@"+d)})],r);case p:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(b(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":N(B(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),N(B(e,{props:[t]})),x(e,{props:E(n,r)});break;case"::placeholder":N(B(e,{props:[y(t,/:(plac\w+)/,":"+d+"input-$1")]})),N(B(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),N(B(e,{props:[y(t,/:(plac\w+)/,l+"input-$1")]})),N(B(e,{props:[t]})),x(e,{props:E(n,r)})}return""})}}function te(e){return U(ne("",null,null,null,[""],e=$(e),0,[0],e))}function ne(e,t,n,r,i,a,o,s,l){for(var c=0,d=0,u=o,p=0,h=0,m=0,x=1,v=1,b=1,k=0,A="",E=i,P=a,z=r,T=A;v;)switch(m=k,k=D()){case 40:if(108!=m&&58==j(T,u-1)){-1!=w(T+=y(K(k),"&","&\f"),"&\f",f(c?s[c-1]:0))&&(b=-1);break}case 34:case 39:case 91:T+=K(k);break;case 9:case 10:case 13:case 32:T+=W(m);break;case 92:T+=G(V()-1,7);continue;case 47:switch(F()){case 42:case 47:C(ie(Y(D(),V()),t,n,l),l);break;default:T+="/"}break;case 123*x:s[c++]=S(T)*b;case 125*x:case 59:case 0:switch(k){case 0:case 125:v=0;case 59+d:-1==b&&(T=y(T,/\f/g,"")),h>0&&S(T)-u&&C(h>32?ae(T+";",r,n,u-1,l):ae(y(T," ","")+";",r,n,u-2,l),l);break;case 59:T+=";";default:if(C(z=re(T,t,n,c,d,i,s,A,E=[],P=[],u,a),a),123===k)if(0===d)ne(T,t,z,z,E,a,u,s,P);else switch(99===p&&110===j(T,3)?100:p){case 100:case 108:case 109:case 115:ne(e,z,z,r&&C(re(e,z,z,0,0,i,s,A,i,E=[],u,P),P),i,P,u,s,r?E:P);break;default:ne(T,z,z,z,[""],P,0,s,P)}}c=d=h=0,x=b=1,A=T="",u=o;break;case 58:u=1+S(T),h=m;default:if(x<1)if(123==k)--x;else if(125==k&&0==x++&&125==O())continue;switch(T+=g(k),k*x){case 38:b=d>0?1:(T+="\f",-1);break;case 44:s[c++]=(S(T)-1)*b,b=1;break;case 64:45===F()&&(T+=K(D())),p=F(),d=u=S(A=T+=Q(V())),k++;break;case 45:45===m&&2==S(T)&&(x=0)}}return a}function re(e,t,n,r,i,a,o,s,l,c,d,u){for(var h=i-1,m=0===i?a:[""],g=A(m),x=0,b=0,w=0;x<r;++x)for(var j=0,S=k(e,h+1,h=f(b=o[x])),C=e;j<g;++j)(C=v(b>0?m[j]+" "+S:y(S,/&\f/g,m[j])))&&(l[w++]=C);return I(e,t,n,0===i?p:s,l,c,d,u)}function ie(e,t,n,r){return I(e,t,n,u,g(R),k(e,2,-2),0,r)}function ae(e,t,n,r,i){return I(e,t,n,h,k(e,0,r),k(e,r+1,-1),r,i)}var oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},se="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}&&({NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_ATTR)||"data-styled",le="active",ce="data-styled-version",de="6.1.19",ue="/*!sc*/\n",pe="undefined"!=typeof window&&"undefined"!=typeof document,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY)),me={},fe=(new Set,Object.freeze([])),ge=Object.freeze({});function xe(e,t,n){return void 0===n&&(n=ge),e.theme!==n.theme&&e.theme||t||n.theme}var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function we(e){return e.replace(be,"-").replace(ye,"")}var je=/(a)(d)/gi,ke=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ke(t%52)+n;return(ke(t%52)+n).replace(je,"$1-$2")}var Ae,Ce=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ee=function(e){return Ce(5381,e)};function Pe(e){return Se(Ee(e)>>>0)}function ze(e){return e.displayName||e.name||"Component"}function Te(e){return"string"==typeof e&&!0}var Me="function"==typeof Symbol&&Symbol.for,Re=Me?Symbol.for("react.memo"):60115,Le=Me?Symbol.for("react.forward_ref"):60112,Ie={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Be={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ne={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oe=((Ae={})[Le]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ae[Re]=Ne,Ae);function De(e){return("type"in(t=e)&&t.type.$$typeof)===Re?Ne:"$$typeof"in e?Oe[e.$$typeof]:Ie;var t}var Fe=Object.defineProperty,Ve=Object.getOwnPropertyNames,_e=Object.getOwnPropertySymbols,He=Object.getOwnPropertyDescriptor,$e=Object.getPrototypeOf,Ue=Object.prototype;function Ke(e,t,n){if("string"!=typeof t){if(Ue){var r=$e(t);r&&r!==Ue&&Ke(e,r,n)}var i=Ve(t);_e&&(i=i.concat(_e(t)));for(var a=De(e),o=De(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Be||n&&n[l]||o&&l in o||a&&l in a)){var c=He(t,l);try{Fe(e,l,c)}catch(e){}}}}return e}function We(e){return"function"==typeof e}function Ge(e){return"object"==typeof e&&"styledComponentId"in e}function Xe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ye(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qe(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qe(e[r],t[r]);else if(Qe(t))for(var r in t)e[r]=qe(e[r],t[r]);return e}function Je(e,t){Object.defineProperty(e,"toString",{value:t})}function Ze(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var et=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Ze(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(ue);return t},e}(),tt=new Map,nt=new Map,rt=1,it=function(e){if(tt.has(e))return tt.get(e);for(;nt.has(rt);)rt++;var t=rt++;return tt.set(e,t),nt.set(t,e),t},at=function(e,t){rt=t+1,tt.set(e,t),nt.set(t,e)},ot="style[".concat(se,"][").concat(ce,'="').concat(de,'"]'),st=new RegExp("^".concat(se,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},ct=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ue),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(st);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(at(d,c),lt(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},dt=function(e){for(var t=document.querySelectorAll(ot),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(se)!==le&&(ct(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ut(){return n.nc}var pt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(se,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(se,le),r.setAttribute(ce,de);var o=ut();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},ht=function(){function e(e){this.element=pt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Ze(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mt=function(){function e(e){this.element=pt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ft=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gt=pe,xt={isServer:!pe,useCSSOMInjection:!he},vt=function(){function e(e,t,n){void 0===e&&(e=ge),void 0===t&&(t={});var r=this;this.options=i(i({},xt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&pe&&gt&&(gt=!1,dt(this)),Je(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return nt.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(se,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(ue)},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return it(e)},e.prototype.rehydrate=function(){!this.server&&pe&&dt(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(i(i({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ft(n):t?new ht(n):new mt(n)}(this.options),new et(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(it(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(it(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(it(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,yt=/^\s*\/\/.*$/gm;function wt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=wt(e.children,t)),e})}function jt(e){var t,n,r,i=void 0===e?ge:e,a=i.options,o=void 0===a?ge:a,s=i.plugins,l=void 0===s?fe:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},d=l.slice();d.push(function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(r,c))}),o.prefix&&d.push(ee),d.push(J);var u=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(yt,""),c=te(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=wt(c,o.namespace));var u,p=[];return q(c,function(e){var t=A(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(d.concat((u=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&u(e)})))),p};return u.hash=l.length?l.reduce(function(e,t){return t.name||Ze(15),Ce(e,t.name)},5381).toString():"",u}var kt=new vt,St=jt(),At=t.createContext({shouldForwardProp:void 0,styleSheet:kt,stylis:St}),Ct=(At.Consumer,t.createContext(void 0));function Et(){return(0,t.useContext)(At)}function Pt(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],a=Et().styleSheet,o=(0,t.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),l=(0,t.useMemo)(function(){return jt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){s()(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var c=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:l}},[e.shouldForwardProp,o,l]);return t.createElement(At.Provider,{value:c},t.createElement(Ct.Provider,{value:l},e.children))}var zt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Je(this,function(){throw Ze(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),Tt=function(e){return e>="A"&&e<="Z"};function Mt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Tt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rt=function(e){return null==e||!1===e||""===e},Lt=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Rt(o)&&(Array.isArray(o)&&o.isCss||We(o)?r.push("".concat(Mt(i),":"),o,";"):Qe(o)?r.push.apply(r,a(a(["".concat(i," {")],Lt(o),!1),["}"],!1)):r.push("".concat(Mt(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in oe||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function It(e,t,n,r){return Rt(e)?[]:Ge(e)?[".".concat(e.styledComponentId)]:We(e)?!We(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:It(e(t),t,n,r):e instanceof zt?n?(e.inject(n,r),[e.getName(r)]):[e]:Qe(e)?Lt(e):Array.isArray(e)?Array.prototype.concat.apply(fe,e.map(function(e){return It(e,t,n,r)})):[e.toString()];var i}function Bt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(We(n)&&!Ge(n))return!1}return!0}var Nt=Ee(de),Ot=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Bt(e),this.componentId=t,this.baseHash=Ce(Nt,t),this.baseStyle=n,vt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Xe(r,this.staticRulesId);else{var i=Ye(It(this.rules,e,t,n)),a=Se(Ce(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Xe(r,a),this.staticRulesId=a}else{for(var s=Ce(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=Ye(It(d,e,t,n));s=Ce(s,u+c),l+=u}}if(l){var p=Se(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Xe(r,p)}}return r},e}(),Dt=t.createContext(void 0);Dt.Consumer;function Ft(e){var n=t.useContext(Dt),r=(0,t.useMemo)(function(){return function(e,t){if(!e)throw Ze(14);if(We(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Ze(8);return t?i(i({},t),e):e}(e.theme,n)},[e.theme,n]);return e.children?t.createElement(Dt.Provider,{value:r},e.children):null}var Vt={};new Set;function _t(e,n,r){var a=Ge(e),o=e,s=!Te(e),l=n.attrs,c=void 0===l?fe:l,d=n.componentId,u=void 0===d?function(e,t){var n="string"!=typeof e?"sc":we(e);Vt[n]=(Vt[n]||0)+1;var r="".concat(n,"-").concat(Pe(de+n+Vt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):d,p=n.displayName,h=void 0===p?function(e){return Te(e)?"styled.".concat(e):"Styled(".concat(ze(e),")")}(e):p,m=n.displayName&&n.componentId?"".concat(we(n.displayName),"-").concat(n.componentId):n.componentId||u,f=a&&o.attrs?o.attrs.concat(c).filter(Boolean):c,g=n.shouldForwardProp;if(a&&o.shouldForwardProp){var x=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;g=function(e,t){return x(e,t)&&v(e,t)}}else g=x}var b=new Ot(r,m,a?o.componentStyle:void 0);function y(e,n){return function(e,n,r){var a=e.attrs,o=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.styledComponentId,d=e.target,u=t.useContext(Dt),p=Et(),h=e.shouldForwardProp||p.shouldForwardProp,m=xe(n,u,s)||ge,f=function(e,t,n){for(var r,a=i(i({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var s=We(r=e[o])?r(a):r;for(var l in s)a[l]="className"===l?Xe(a[l],s[l]):"style"===l?i(i({},a[l]),s[l]):s[l]}return t.className&&(a.className=Xe(a.className,t.className)),a}(a,n,m),g=f.as||d,x={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===m||("forwardedAs"===v?x.as=f.forwardedAs:h&&!h(v,g)||(x[v]=f[v]));var b=function(e,t){var n=Et();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,f),y=Xe(l,c);return b&&(y+=" "+b),f.className&&(y+=" "+f.className),x[Te(g)&&!ve.has(g)?"class":"className"]=y,r&&(x.ref=r),(0,t.createElement)(g,x)}(w,e,n)}y.displayName=h;var w=t.forwardRef(y);return w.attrs=f,w.componentStyle=b,w.displayName=h,w.shouldForwardProp=g,w.foldedComponentIds=a?Xe(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=m,w.target=a?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)qe(e,i[r],!0);return e}({},o.defaultProps,e):e}}),Je(w,function(){return".".concat(w.styledComponentId)}),s&&Ke(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ht(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var $t=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(We(e)||Qe(e))return $t(It(Ht(fe,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?It(r):$t(It(Ht(r,t)))}function Kt(e,t,n){if(void 0===n&&(n=ge),!t)throw Ze(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Ut.apply(void 0,a([r],i,!1)))};return r.attrs=function(r){return Kt(e,t,i(i({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Kt(e,t,i(i({},n),r))},r}var Wt=function(e){return Kt(_t,e)},Gt=Wt;ve.forEach(function(e){Gt[e]=Wt(e)});var Xt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Bt(e),vt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Ye(It(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&vt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=ut(),r=Ye([n&&'nonce="'.concat(n,'"'),"".concat(se,'="true"'),"".concat(ce,'="').concat(de,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Ze(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Ze(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[se]="",n[ce]=de,n.dangerouslySetInnerHTML={__html:r},n),o=ut();return o&&(a.nonce=o),[t.createElement("style",i({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new vt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Ze(2);return t.createElement(Pt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ze(3)}})(),"__sc-".concat(se,"__");function Yt(e,t){-1===e.indexOf(t)&&e.push(t)}function Qt(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class qt{constructor(){this.subscriptions=[]}add(e){return Yt(this.subscriptions,e),()=>Qt(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Jt(e,t){return t?e*(1e3/t):0}const Zt={},en=e=>e,tn=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],nn={value:null,addProjectionMetrics:null};function rn(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=tn.reduce((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){o.has(t)&&(d.schedule(t),e()),l++,t(s)}const d={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{s=e,i?a=!0:(i=!0,[n,r]=[r,n],n.forEach(c),t&&nn.value&&nn.value.frameloop[t].push(l),l=0,n.clear(),i=!1,a&&(a=!1,d.process(e)))}};return d}(a,t?n:void 0),e),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:d,update:u,preRender:p,render:h,postRender:m}=o,f=()=>{const a=Zt.useManualTiming?i.timestamp:performance.now();n=!1,Zt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),d.process(i),u.process(i),p.process(i),h.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(f))},g=tn.reduce((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(f)),s.schedule(t,a,o)},t},{});return{schedule:g,cancel:e=>{for(let t=0;t<tn.length;t++)o[tn[t]].cancel(e)},state:i,steps:o}}const{schedule:an,cancel:on,state:sn,steps:ln}=rn("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:en,!0);let cn;function dn(){cn=void 0}const un={now:()=>(void 0===cn&&un.set(sn.isProcessing||Zt.useManualTiming?sn.timestamp:performance.now()),cn),set:e=>{cn=e,queueMicrotask(dn)}},pn={current:void 0};class hn{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=un.now();if(t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&(t.events.change?.notify(t.current),t.dependents))for(const i of t.dependents)i.dirty();n&&t.events.renderRequest?.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=un.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new qt);const n=this.events[e].add(t);return"change"===e?()=>{n(),an.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return pn.current&&pn.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=un.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Jt(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mn(e,t){return new hn(e,t)}const fn=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function gn(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}function xn(e){const n=gn(()=>mn(e)),{isStatic:r}=(0,t.useContext)(fn);if(r){const[,r]=(0,t.useState)(e);(0,t.useEffect)(()=>n.on("change",r),[])}return n}const vn=e=>Boolean(e&&e.getVelocity),bn=(e,t)=>n=>t(e(n)),yn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(bn)},wn=(e,t,n)=>n>t?t:n<e?e:n,jn=e=>1e3*e,kn=e=>e/1e3,Sn={layout:0,mainThread:0,waapi:0};const An=e=>t=>"string"===typeof t&&t.startsWith(e),Cn=An("--"),En=An("var(--"),Pn=e=>!!En(e)&&zn.test(e.split("/*")[0].trim()),zn=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Tn={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Mn={...Tn,transform:e=>wn(0,1,e)},Rn={...Tn,default:1},Ln=e=>Math.round(1e5*e)/1e5,In=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Bn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Nn=(e,t)=>n=>Boolean("string"===typeof n&&Bn.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),On=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,a,o,s]=r.match(In);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},Dn={...Tn,transform:e=>Math.round((e=>wn(0,255,e))(e))},Fn={test:Nn("rgb","red"),parse:On("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+Dn.transform(t)+", "+Dn.transform(n)+", "+Dn.transform(r)+", "+Ln(Mn.transform(i))+")"}};const Vn={test:Nn("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Fn.transform},_n=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Hn=_n("deg"),$n=_n("%"),Un=_n("px"),Kn=_n("vh"),Wn=_n("vw"),Gn=(()=>({...$n,parse:e=>$n.parse(e)/100,transform:e=>$n.transform(100*e)}))(),Xn={test:Nn("hsl","hue"),parse:On("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+$n.transform(Ln(n))+", "+$n.transform(Ln(r))+", "+Ln(Mn.transform(i))+")"}},Yn={test:e=>Fn.test(e)||Vn.test(e)||Xn.test(e),parse:e=>Fn.test(e)?Fn.parse(e):Xn.test(e)?Xn.parse(e):Vn.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Fn.transform(e):Xn.transform(e),getAnimatableNone:e=>{const t=Yn.parse(e);return t.alpha=0,Yn.transform(t)}},Qn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const qn="number",Jn="color",Zn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function er(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(Zn,e=>(Yn.test(e)?(r.color.push(a),i.push(Jn),n.push(Yn.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(qn),n.push(parseFloat(e))),++a,"${}")).split("${}");return{values:n,split:o,indexes:r,types:i}}function tr(e){return er(e).values}function nr(e){const{split:t,types:n}=er(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===qn?Ln(e[a]):t===Jn?Yn.transform(e[a]):e[a]}return i}}const rr=e=>"number"===typeof e?0:Yn.test(e)?Yn.getAnimatableNone(e):e;const ir={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(In)?.length||0)+(e.match(Qn)?.length||0)>0},parse:tr,createTransformer:nr,getAnimatableNone:function(e){const t=tr(e);return nr(e)(t.map(rr))}};function ar(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function or(e,t){return n=>n>0?t:e}const sr=(e,t,n)=>e+(t-e)*n,lr=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},cr=[Vn,Fn,Xn];function dr(e){const t=(e=>cr.find(t=>t.test(e)))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===Xn&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=ar(i,e,t+1/3),o=ar(i,e,t),s=ar(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const ur=(e,t)=>{const n=dr(e),r=dr(t);if(!n||!r)return or(e,t);const i={...n};return e=>(i.red=lr(n.red,r.red,e),i.green=lr(n.green,r.green,e),i.blue=lr(n.blue,r.blue,e),i.alpha=sr(n.alpha,r.alpha,e),Fn.transform(i))},pr=new Set(["none","hidden"]);function hr(e,t){return n=>sr(e,t,n)}function mr(e){return"number"===typeof e?hr:"string"===typeof e?Pn(e)?or:Yn.test(e)?ur:xr:Array.isArray(e)?fr:"object"===typeof e?Yn.test(e)?ur:gr:or}function fr(e,t){const n=[...e],r=n.length,i=e.map((e,n)=>mr(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function gr(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=mr(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const xr=(e,t)=>{const n=ir.createTransformer(t),r=er(e),i=er(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?pr.has(e)&&!i.values.length||pr.has(t)&&!r.values.length?function(e,t){return pr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):yn(fr(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}(r,i),i.values),n):or(e,t)};function vr(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return sr(e,t,n);return mr(e)(e,t)}const br=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return an.update(t,e)},stop:()=>on(t),now:()=>sn.isProcessing?sn.timestamp:un.now()}},yr=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=Math.round(1e4*e(a/(i-1)))/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},wr=2e4;function jr(e){let t=0;let n=e.next(t);for(;!n.done&&t<wr;)t+=50,n=e.next(t);return t>=wr?1/0:t}function kr(e,t,n){const r=Math.max(t-5,0);return Jt(n-e(r),t-r)}const Sr={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ar=.001;function Cr(e){let t,n,{duration:r=Sr.duration,bounce:i=Sr.bounce,velocity:a=Sr.velocity,mass:o=Sr.mass}=e;jn(Sr.maxDuration);let s=1-i;s=wn(Sr.minDamping,Sr.maxDamping,s),r=wn(Sr.minDuration,Sr.maxDuration,kn(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=Pr(e,s),l=Math.exp(-n);return Ar-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=Pr(Math.pow(e,2),s);return(-t(e)+Ar>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Er;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=jn(r),isNaN(l))return{stiffness:Sr.stiffness,damping:Sr.damping,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const Er=12;function Pr(e,t){return e*Math.sqrt(1-t*t)}const zr=["duration","bounce"],Tr=["stiffness","damping","mass"];function Mr(e,t){return t.some(t=>void 0!==e[t])}function Rr(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sr.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Sr.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:d,duration:u,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:Sr.velocity,stiffness:Sr.stiffness,damping:Sr.damping,mass:Sr.mass,isResolvedFromDuration:!1,...e};if(!Mr(e,Tr)&&Mr(e,zr))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*wn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Sr.mass,stiffness:i,damping:a}}else{const n=Cr(e);t={...t,...n,mass:Sr.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-kn(n.velocity||0)}),m=p||0,f=c/(2*Math.sqrt(l*d)),g=o-a,x=kn(Math.sqrt(l/d)),v=Math.abs(g)<5;let b;if(r||(r=v?Sr.restSpeed.granular:Sr.restSpeed.default),i||(i=v?Sr.restDelta.granular:Sr.restDelta.default),f<1){const e=Pr(x,f);b=t=>{const n=Math.exp(-f*x*t);return o-n*((m+f*x*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===f)b=e=>o-Math.exp(-x*e)*(g+(m+x*g)*e);else{const e=x*Math.sqrt(f*f-1);b=t=>{const n=Math.exp(-f*x*t),r=Math.min(e*t,300);return o-n*((m+f*x*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const y={calculatedDuration:h&&u||null,next:e=>{const t=b(e);if(h)s.done=e>=u;else{let n=0===e?m:0;f<1&&(n=0===e?jn(m):kr(b,e,t));const a=Math.abs(n)<=r,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(jr(y),wr),t=yr(t=>y.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return y}function Lr(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:d=.5,restSpeed:u}=e;const p=t[0],h={done:!1,value:p},m=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let f=r*n;const g=p+f,x=void 0===s?g:s(g);x!==g&&(f=x-p);const v=e=>-f*Math.exp(-e/i),b=e=>x+v(e),y=e=>{const t=v(e),n=b(e);h.done=Math.abs(t)<=d,h.value=h.done?x:n};let w,j;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,j=Rr({keyframes:[h.value,m(h.value)],velocity:kr(b,e,h.value),damping:a,stiffness:o,restDelta:d,restSpeed:u}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return j||void 0!==w||(t=!0,y(e),k(e)),void 0!==w&&e>=w?j.next(e-w):(!t&&y(e),h)}}}Rr.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(jr(n),wr);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:kn(r)}}(e,100,Rr);return e.ease=t.ease,e.duration=jn(t.duration),e.type="keyframes",e};const Ir=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Br(e,t,n,r){if(e===t&&n===r)return en;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=Ir(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:Ir(i(e),t,r)}const Nr=Br(.42,0,1,1),Or=Br(0,0,.58,1),Dr=Br(.42,0,.58,1),Fr=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Vr=e=>t=>1-e(1-t),_r=Br(.33,1.53,.69,.99),Hr=Vr(_r),$r=Fr(Hr),Ur=e=>(e*=2)<1?.5*Hr(e):.5*(2-Math.pow(2,-10*(e-1))),Kr=e=>1-Math.sin(Math.acos(e)),Wr=Vr(Kr),Gr=Fr(Kr),Xr=e=>Array.isArray(e)&&"number"===typeof e[0],Yr={linear:en,easeIn:Nr,easeInOut:Dr,easeOut:Or,circIn:Kr,circInOut:Gr,circOut:Wr,backIn:Hr,backInOut:$r,backOut:_r,anticipate:Ur},Qr=e=>{if(Xr(e)){e.length;const[t,n,r,i]=e;return Br(t,n,r,i)}return"string"===typeof e?Yr[e]:e},qr=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function Jr(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||Zt.mix||vr,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||en:t;n=yn(e,n)}r.push(n)}return r}(t,r,i),l=s.length,c=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=qr(e[r],e[r+1],n);return s[r](i)};return n?t=>c(wn(e[0],e[a-1],t)):c}function Zr(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=qr(0,t,r);e.push(sr(n,1,i))}}(t,e.length-1),t}function ei(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Qr):Qr(i),o={done:!1,value:n[0]},s=function(e,t){return e.map(e=>e*t)}(r&&r.length===n.length?r:Zr(n),t),l=Jr(s,n,{ease:Array.isArray(a)?a:(c=n,d=a,c.map(()=>d||Dr).splice(0,c.length-1))});var c,d;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const ti=e=>null!==e;function ni(e,t,n){let{repeat:r,repeatType:i="loop"}=t,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const o=e.filter(ti),s=a<0||r&&"loop"!==i&&r%2===1?0:o.length-1;return s&&void 0!==n?n:o[s]}const ri={decay:Lr,inertia:Lr,tween:ei,keyframes:ei,spring:Rr};function ii(e){"string"===typeof e.type&&(e.type=ri[e.type])}class ai{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const oi=e=>e/100;class si extends ai{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:e}=this.options;e&&e.updatedAt!==un.now()&&this.tick(un.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},Sn.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;ii(e);const{type:t=ei,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e;let{keyframes:o}=e;const s=t||ei;s!==ei&&"number"!==typeof o[0]&&(this.mixKeyframes=yn(oi,vr(o[0],o[1])),o=[0,100]);const l=s({...e,keyframes:o});"mirror"===i&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),null===l.calculatedDuration&&(l.calculatedDuration=jr(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:d,repeatType:u,repeatDelay:p,type:h,onUpdate:m,finalKeyframe:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);let v=this.currentTime,b=n;if(d){const e=Math.min(this.currentTime,r)/o;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,d+1);Boolean(t%2)&&("reverse"===u?(n=1-n,p&&(n-=p/o)):"mirror"===u&&(b=a)),v=wn(0,1,n)*o}const y=x?{done:!1,value:c[0]}:b.next(v);i&&(y.value=i(y.value));let{done:w}=y;x||null===s||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const j=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return j&&h!==Lr&&(y.value=ni(c,this.options,f,this.speed)),m&&m(y.value),j&&this.finish(),y}then(e,t){return this.finished.then(e,t)}get duration(){return kn(this.calculatedDuration)}get time(){return kn(this.currentTime)}set time(e){e=jn(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(un.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=kn(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=br,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(un.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,Sn.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function li(e,t,n){const r=e.get();let i,a=null,o=r;const s="string"===typeof r?r.replace(/[\d.-]/g,""):void 0,l=()=>{a&&(a.stop(),a=null)},c=()=>{l(),a=new si({keyframes:[di(e.get()),di(o)],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:i})};if(e.attach((t,n)=>(o=t,i=e=>n(ci(e,s)),an.postRender(c),e.get()),l),vn(t)){const n=t.on("change",t=>e.set(ci(t,s))),r=e.on("destroy",n);return()=>{n(),r()}}return l}function ci(e,t){return t?e+t:e}function di(e){return"number"===typeof e?e:parseFloat(e)}const ui="undefined"!==typeof window,pi=ui?t.useLayoutEffect:t.useEffect;function hi(e,t){const n=xn(t()),r=()=>n.set(t());return r(),pi(()=>{const t=()=>an.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),on(r)}}),n}function mi(e,t,n,r){if("function"===typeof e)return function(e){pn.current=[],e();const t=hi(pn.current,e);return pn.current=void 0,t}(e);const i="function"===typeof t?t:function(){const e=!Array.isArray(arguments.length<=0?void 0:arguments[0]),t=e?0:-1,n=0+t<0||arguments.length<=0+t?void 0:arguments[0+t],r=Jr(1+t<0||arguments.length<=1+t?void 0:arguments[1+t],2+t<0||arguments.length<=2+t?void 0:arguments[2+t],3+t<0||arguments.length<=3+t?void 0:arguments[3+t]);return e?r(n):r}(t,n,r);return Array.isArray(e)?fi(e,i):fi([e],e=>{let[t]=e;return i(t)})}function fi(e,t){const n=gn(()=>[]);return hi(e,()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}function gi(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{isStatic:r}=(0,t.useContext)(fn),i=()=>vn(e)?e.get():e;if(r)return mi(i);const a=xn(i());return(0,t.useInsertionEffect)(()=>li(a,e,n),[a,JSON.stringify(n)]),a}var xi="popstate";function vi(){return Ai(function(e,t){let{pathname:n="/",search:r="",hash:i=""}=Si(e.location.hash.substring(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),ji("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:ki(t))},function(e,t){yi("/"===e.pathname.charAt(0),`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function bi(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function yi(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function wi(e,t){return{usr:e.state,key:e.key,idx:t}}function ji(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?Si(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function ki(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Si(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Ai(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s="POP",l=null,c=d();function d(){return(o.state||{idx:null}).idx}function u(){s="POP";let e=d(),t=null==e?null:e-c;c=e,l&&l({action:s,location:h.location,delta:t})}function p(e){return Ci(e)}null==c&&(c=0,o.replaceState({...o.state,idx:c},""));let h={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xi,u),l=e,()=>{i.removeEventListener(xi,u),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s="PUSH";let r=ji(h.location,e,t);n&&n(r,e),c=d()+1;let u=wi(r,c),p=h.createHref(r);try{o.pushState(u,"",p)}catch(m){if(m instanceof DOMException&&"DataCloneError"===m.name)throw m;i.location.assign(p)}a&&l&&l({action:s,location:h.location,delta:1})},replace:function(e,t){s="REPLACE";let r=ji(h.location,e,t);n&&n(r,e),c=d();let i=wi(r,c),u=h.createHref(r);o.replaceState(i,"",u),a&&l&&l({action:s,location:h.location,delta:0})},go:e=>o.go(e)};return h}function Ci(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),bi(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:ki(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function Ei(e,t){return Pi(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function Pi(e,t,n,r){let i=$i(("string"===typeof t?Si(t):t).pathname||"/",n);if(null==i)return null;let a=zi(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=Hi(i);o=Fi(a[s],e,r)}return o}function zi(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(bi(o.relativePath.startsWith(r),`Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=Xi([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(bi(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),zi(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:Di(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of Ti(e.path))i(e,t,n);else i(e,t)}),t}function Ti(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=Ti(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var Mi=/^:[\w-]+$/,Ri=3,Li=2,Ii=1,Bi=10,Ni=-2,Oi=e=>"*"===e;function Di(e,t){let n=e.split("/"),r=n.length;return n.some(Oi)&&(r+=Ni),t&&(r+=Li),n.filter(e=>!Oi(e)).reduce((e,t)=>e+(Mi.test(t)?Ri:""===t?Ii:Bi),r)}function Fi(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",d=Vi({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),u=e.route;if(!d&&l&&n&&!r[r.length-1].route.index&&(d=Vi({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Xi([a,d.pathname]),pathnameBase:Yi(Xi([a,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(a=Xi([a,d.pathnameBase]))}return o}function Vi(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_i(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:o,pattern:e}}function _i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];yi("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Hi(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return yi(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function $i(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Ui(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ki(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function Wi(e){let t=Ki(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Gi(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=Si(e):(r={...e},bi(!r.pathname||!r.pathname.includes("?"),Ui("?","pathname","search",r)),bi(!r.pathname||!r.pathname.includes("#"),Ui("#","pathname","hash",r)),bi(!r.search||!r.search.includes("#"),Ui("#","search","hash",r)));let a,o=""===e||""===r.pathname,s=o?"/":r.pathname;if(null==s)a=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?Si(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:Qi(r),hash:qi(i)}}(r,a),c=s&&"/"!==s&&s.endsWith("/"),d=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!d||(l.pathname+="/"),l}var Xi=e=>e.join("/").replace(/\/\/+/g,"/"),Yi=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qi=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",qi=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function Ji(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var Zi=["POST","PUT","PATCH","DELETE"],ea=(new Set(Zi),["GET",...Zi]);new Set(ea),Symbol("ResetLoaderData");var ta=t.createContext(null);ta.displayName="DataRouter";var na=t.createContext(null);na.displayName="DataRouterState";var ra=t.createContext(!1);var ia=t.createContext({isTransitioning:!1});ia.displayName="ViewTransition";var aa=t.createContext(new Map);aa.displayName="Fetchers";var oa=t.createContext(null);oa.displayName="Await";var sa=t.createContext(null);sa.displayName="Navigation";var la=t.createContext(null);la.displayName="Location";var ca=t.createContext({outlet:null,matches:[],isDataRoute:!1});ca.displayName="Route";var da=t.createContext(null);da.displayName="RouteError";function ua(){return null!=t.useContext(la)}function pa(){return bi(ua(),"useLocation() may be used only in the context of a <Router> component."),t.useContext(la).location}var ha="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ma(e){t.useContext(sa).static||t.useLayoutEffect(e)}function fa(){let{isDataRoute:e}=t.useContext(ca);return e?function(){let{router:e}=Sa("useNavigate"),n=Ca("useNavigate"),r=t.useRef(!1);ma(()=>{r.current=!0});let i=t.useCallback(async function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};yi(r.current,ha),r.current&&("number"===typeof t?e.navigate(t):await e.navigate(t,{fromRouteId:n,...i}))},[e,n]);return i}():function(){bi(ua(),"useNavigate() may be used only in the context of a <Router> component.");let e=t.useContext(ta),{basename:n,navigator:r}=t.useContext(sa),{matches:i}=t.useContext(ca),{pathname:a}=pa(),o=JSON.stringify(Wi(i)),s=t.useRef(!1);ma(()=>{s.current=!0});let l=t.useCallback(function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(yi(s.current,ha),!s.current)return;if("number"===typeof t)return void r.go(t);let l=Gi(t,JSON.parse(o),a,"path"===i.relative);null==e&&"/"!==n&&(l.pathname="/"===l.pathname?n:Xi([n,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)},[n,r,o,a,e]);return l}()}t.createContext(null);function ga(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=t.useContext(ca),{pathname:i}=pa(),a=JSON.stringify(Wi(r));return t.useMemo(()=>Gi(e,JSON.parse(a),i,"path"===n),[e,a,i,n])}function xa(e,n,r,i){bi(ua(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=t.useContext(sa),{matches:o}=t.useContext(ca),s=o[o.length-1],l=s?s.params:{},c=s?s.pathname:"/",d=s?s.pathnameBase:"/",u=s&&s.route;{let e=u&&u.path||"";za(c,!u||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let p,h=pa();if(n){let e="string"===typeof n?Si(n):n;bi("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=h;let m=p.pathname||"/",f=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");f="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=Ei(e,{pathname:f});yi(u||null!=g,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),yi(null==g||void 0!==g[g.length-1].route.element||void 0!==g[g.length-1].route.Component||void 0!==g[g.length-1].route.lazy,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=ja(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:Xi([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:Xi([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),o,r,i);return n&&x?t.createElement(la.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},x):x}function va(){let e=Ea(),n=Ji(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=t.createElement(t.Fragment,null,t.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),t.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",t.createElement("code",{style:o},"ErrorBoundary")," or"," ",t.createElement("code",{style:o},"errorElement")," prop on your route.")),t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:a},r):null,s)}var ba=t.createElement(va,null),ya=class extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(ca.Provider,{value:this.props.routeContext},t.createElement(da.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wa(e){let{routeContext:n,match:r,children:i}=e,a=t.useContext(ta);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(ca.Provider,{value:n},i)}function ja(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let i=e,a=r?.errors;if(null!=a){let e=i.findIndex(e=>e.route.id&&void 0!==a?.[e.route.id]);bi(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(r)for(let t=0;t<i.length;t++){let e=i[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){o=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight((e,l,c)=>{let d,u=!1,p=null,h=null;r&&(d=a&&l.route.id?a[l.route.id]:void 0,p=l.route.errorElement||ba,o&&(s<0&&0===c?(za("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,h=null):s===c&&(u=!0,h=l.route.hydrateFallbackElement||null)));let m=n.concat(i.slice(0,c+1)),f=()=>{let n;return n=d?p:u?h:l.route.Component?t.createElement(l.route.Component,null):l.route.element?l.route.element:e,t.createElement(wa,{match:l,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===c)?t.createElement(ya,{location:r.location,revalidation:r.revalidation,component:p,error:d,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}function ka(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sa(e){let n=t.useContext(ta);return bi(n,ka(e)),n}function Aa(e){let n=t.useContext(na);return bi(n,ka(e)),n}function Ca(e){let n=function(e){let n=t.useContext(ca);return bi(n,ka(e)),n}(e),r=n.matches[n.matches.length-1];return bi(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Ea(){let e=t.useContext(da),n=Aa("useRouteError"),r=Ca("useRouteError");return void 0!==e?e:n.errors?.[r]}var Pa={};function za(e,t,n){t||Pa[e]||(Pa[e]=!0,yi(!1,n))}var Ta={};function Ma(e,t){e||Ta[t]||(Ta[t]=!0,console.warn(t))}t.memo(function(e){let{routes:t,future:n,state:r}=e;return xa(t,void 0,r,n)});function Ra(e){bi(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function La(e){let{basename:n="/",children:r=null,location:i,navigationType:a="POP",navigator:o,static:s=!1}=e;bi(!ua(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),c=t.useMemo(()=>({basename:l,navigator:o,static:s,future:{}}),[l,o,s]);"string"===typeof i&&(i=Si(i));let{pathname:d="/",search:u="",hash:p="",state:h=null,key:m="default"}=i,f=t.useMemo(()=>{let e=$i(d,l);return null==e?null:{location:{pathname:e,search:u,hash:p,state:h,key:m},navigationType:a}},[l,d,u,p,h,m,a]);return yi(null!=f,`<Router basename="${l}"> is not able to match the URL "${d}${u}${p}" because it does not start with the basename, so the <Router> won't render anything.`),null==f?null:t.createElement(sa.Provider,{value:c},t.createElement(la.Provider,{children:r,value:f}))}function Ia(e){let{children:t,location:n}=e;return xa(Ba(t),n)}t.Component;function Ba(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return t.Children.forEach(e,(e,i)=>{if(!t.isValidElement(e))return;let a=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,Ba(e.props.children,a));bi(e.type===Ra,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),bi(!e.props.index||!e.props.children,"An index route cannot have child routes.");let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=Ba(e.props.children,a)),r.push(o)}),r}var Na="get",Oa="application/x-www-form-urlencoded";function Da(e){return null!=e&&"string"===typeof e.tagName}var Fa=null;var Va=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _a(e){return null==e||Va.has(e)?e:(yi(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oa}"`),null)}function Ha(e,t){let n,r,i,a,o;if(Da(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?$i(o,t):null,n=e.getAttribute("method")||Na,i=_a(e.getAttribute("enctype"))||Oa,a=new FormData(e)}else if(function(e){return Da(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Da(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?$i(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Na,i=_a(e.getAttribute("formenctype"))||_a(o.getAttribute("enctype"))||Oa,a=new FormData(o,e),!function(){if(null===Fa)try{new FormData(document.createElement("form"),0),Fa=!1}catch(e){Fa=!0}return Fa}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(Da(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Na,r=null,i=Oa,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function $a(e){return{__html:e}}function Ua(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ka(e,t,n){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname=`_root.${n}`:t&&"/"===$i(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Wa(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ga(e){return null!=e&&"string"===typeof e.page}function Xa(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Ya(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter((e,t)=>o(e,t)||s(e,t)):"data"===a?t.filter((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Qa(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function qa(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Ga(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Ja(e,t){return"lazy"===e.mode&&!0===t}function Za(){let e=t.useContext(ta);return Ua(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function eo(){let e=t.useContext(na);return Ua(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var to=t.createContext(void 0);function no(){let e=t.useContext(to);return Ua(e,"You must render this element inside a <HydratedRouter> element"),e}function ro(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function io(e,t,n){if(n&&!lo)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}to.displayName="FrameworkContext";function ao(e){let{page:n,...r}=e,{router:i}=Za(),a=t.useMemo(()=>Ei(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?t.createElement(so,{page:n,matches:a,...r}):null}function oo(e){let{manifest:n,routeModules:r}=no(),[i,a]=t.useState([]);return t.useEffect(()=>{let t=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Wa(r,n);return e.links?e.links():[]}return[]}));return qa(r.flat(1).filter(Xa).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,n,r).then(e=>{t||a(e)}),()=>{t=!0}},[e,n,r]),i}function so(e){let{page:n,matches:r,...i}=e,a=pa(),{manifest:o,routeModules:s}=no(),{basename:l}=Za(),{loaderData:c,matches:d}=eo(),u=t.useMemo(()=>Ya(n,r,d,o,a,"data"),[n,r,d,o,a]),p=t.useMemo(()=>Ya(n,r,d,o,a,"assets"),[n,r,d,o,a]),h=t.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let e=new Set,t=!1;if(r.forEach(n=>{let r=o.routes[n.route.id];r&&r.hasLoader&&(!u.some(e=>e.route.id===n.route.id)&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))}),0===e.size)return[];let i=Ka(n,l,"data");return t&&e.size>0&&i.searchParams.set("_routes",r.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[i.pathname+i.search]},[l,c,a,o,u,r,n,s]),m=t.useMemo(()=>Qa(p,o),[p,o]),f=oo(p);return t.createElement(t.Fragment,null,h.map(e=>t.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...i})),m.map(e=>t.createElement("link",{key:e,rel:"modulepreload",href:e,...i})),f.map(e=>{let{key:n,link:r}=e;return t.createElement("link",{key:n,...r})}))}var lo=!1;function co(e){let{manifest:n,serverHandoffString:r,isSpaMode:i,renderMeta:a,routeDiscovery:o,ssr:s}=no(),{router:l,static:c,staticContext:d}=Za(),{matches:u}=eo(),p=t.useContext(ra),h=Ja(o,s);a&&(a.didRenderScripts=!0);let m=io(u,null,i);t.useEffect(()=>{0},[]);let f=t.useMemo(()=>{if(p)return null;let i=d?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=c?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(n.url)}`};\n${m.map((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];Ua(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,d=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===d.length?`import * as ${r} from ${JSON.stringify(c)};`:[d.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${d.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${h?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map(e=>e.route.id)),a=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach(e=>{let n=Ei(t.routes,e,t.basename);n&&n.forEach(e=>i.add(e.route.id))});let s=[...i].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:s,sri:!!n||void 0}}(n,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return t.createElement(t.Fragment,null,t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:$a(i),type:void 0}),t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:$a(a),type:"module",async:!0}))},[]),g=lo||p?[]:(n.entry.imports.concat(Qa(m,n,{includeHydrateFallback:!0})),[...new Set(x)]);var x;let v="object"===typeof n.sri?n.sri:{};return Ma(!p,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),lo||p?null:t.createElement(t.Fragment,null,"object"===typeof n.sri?t.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,h?null:t.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:e.crossOrigin,integrity:v[n.url],suppressHydrationWarning:!0}),t.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:e.crossOrigin,integrity:v[n.entry.module],suppressHydrationWarning:!0}),g.map(n=>t.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:e.crossOrigin,integrity:v[n],suppressHydrationWarning:!0})),f)}function uo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}t.Component;function po(e){let{error:n,isOutsideRemixApp:r}=e;console.error(n);let i,a=t.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(Ji(n))return t.createElement(ho,{title:"Unhandled Thrown Response!"},t.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),a);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return t.createElement(ho,{title:"Application Error!",isOutsideRemixApp:r},t.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),t.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function ho(e){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:a}=e,{routeModules:o}=no();return o.root?.Layout&&!i?a:t.createElement("html",{lang:"en"},t.createElement("head",null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),t.createElement("title",null,n)),t.createElement("body",null,t.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,r?t.createElement(co,null):null)))}var mo="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{mo&&(window.__reactRouterVersion="7.7.1")}catch($C){}function fo(e){let{basename:n,children:r,window:i}=e,a=t.useRef();null==a.current&&(a.current=vi({window:i,v5Compat:!0}));let o=a.current,[s,l]=t.useState({action:o.action,location:o.location}),c=t.useCallback(e=>{t.startTransition(()=>l(e))},[l]);return t.useLayoutEffect(()=>o.listen(c),[o,c]),t.createElement(La,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:o})}var go=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xo=t.forwardRef(function(e,n){let r,{onClick:i,discover:a="render",prefetch:o="none",relative:s,reloadDocument:l,replace:c,state:d,target:u,to:p,preventScrollReset:h,viewTransition:m,...f}=e,{basename:g}=t.useContext(sa),x="string"===typeof p&&go.test(p),v=!1;if("string"===typeof p&&x&&(r=p,mo))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=$i(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:v=!0}catch($C){yi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};bi(ua(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=t.useContext(sa),{hash:a,pathname:o,search:s}=ga(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:Xi([r,o])),i.createHref({pathname:l,search:s,hash:a})}(p,{relative:s}),[y,w,j]=function(e,n){let r=t.useContext(to),[i,a]=t.useState(!1),[o,s]=t.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:d,onMouseLeave:u,onTouchStart:p}=n,h=t.useRef(null);t.useEffect(()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}},[e]),t.useEffect(()=>{if(i){let e=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(e)}}},[i]);let m=()=>{a(!0)},f=()=>{a(!1),s(!1)};return r?"intent"!==e?[o,h,{}]:[o,h,{onFocus:ro(l,m),onBlur:ro(c,f),onMouseEnter:ro(d,m),onMouseLeave:ro(u,f),onTouchStart:ro(p,m)}]:[!1,h,{}]}(o,f),k=function(e){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=fa(),c=pa(),d=ga(e,{relative:o});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==r?r:ki(c)===ki(d);l(e,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[c,l,d,r,i,n,e,a,o,s])}(p,{replace:c,state:d,target:u,preventScrollReset:h,relative:s,viewTransition:m});let S=t.createElement("a",{...f,...j,href:r||b,onClick:v||l?i:function(e){i&&i(e),e.defaultPrevented||k(e)},ref:uo(n,w),target:u,"data-discover":x||"render"!==a?void 0:"true"});return y&&!x?t.createElement(t.Fragment,null,S,t.createElement(ao,{page:b})):S});xo.displayName="Link",t.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:s,to:l,viewTransition:c,children:d,...u}=e,p=ga(l,{relative:u.relative}),h=pa(),m=t.useContext(na),{navigator:f,basename:g}=t.useContext(sa),x=null!=m&&function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.useContext(ia);bi(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=yo("useViewTransitionState"),a=ga(e,{relative:n});if(!r.isTransitioning)return!1;let o=$i(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=$i(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=Vi(a.pathname,s)||null!=Vi(a.pathname,o)}(p)&&!0===c,v=f.encodeLocation?f.encodeLocation(p).pathname:p.pathname,b=h.pathname,y=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(b=b.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase()),y&&g&&(y=$i(y,g)||y);const w="/"!==v&&v.endsWith("/")?v.length-1:v.length;let j,k=b===v||!o&&b.startsWith(v)&&"/"===b.charAt(w),S=null!=y&&(y===v||!o&&y.startsWith(v)&&"/"===y.charAt(v.length)),A={isActive:k,isPending:S,isTransitioning:x},C=k?r:void 0;j="function"===typeof a?a(A):[a,k?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let E="function"===typeof s?s(A):s;return t.createElement(xo,{...u,"aria-current":C,className:j,ref:n,style:E,to:l,viewTransition:c},"function"===typeof d?d(A):d)}).displayName="NavLink";var vo=t.forwardRef((e,n)=>{let{discover:r="render",fetcherKey:i,navigate:a,reloadDocument:o,replace:s,state:l,method:c=Na,action:d,onSubmit:u,relative:p,preventScrollReset:h,viewTransition:m,...f}=e,g=ko(),x=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=t.useContext(sa),i=t.useContext(ca);bi(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...ga(e||".",{relative:n})},s=pa();if(null==e){o.search=s.search;let e=new URLSearchParams(o.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();o.search=n?`?${n}`:""}}e&&"."!==e||!a.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(o.pathname="/"===o.pathname?r:Xi([r,o.pathname]));return ki(o)}(d,{relative:p}),v="get"===c.toLowerCase()?"get":"post",b="string"===typeof d&&go.test(d);return t.createElement("form",{ref:n,method:v,action:x,onSubmit:o?u:e=>{if(u&&u(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c;g(t||e.currentTarget,{fetcherKey:i,method:n,navigate:a,replace:s,state:l,relative:p,preventScrollReset:h,viewTransition:m})},...f,"data-discover":b||"render"!==r?void 0:"true"})});function bo(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yo(e){let n=t.useContext(ta);return bi(n,bo(e)),n}vo.displayName="Form";var wo=0,jo=()=>`__${String(++wo)}__`;function ko(){let{router:e}=yo("useSubmit"),{basename:n}=t.useContext(sa),r=Ca("useRouteId");return t.useCallback(async function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:a,method:o,encType:s,formData:l,body:c}=Ha(t,n);if(!1===i.navigate){let t=i.fetcherKey||jo();await e.fetch(t,r,i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await e.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,n,r])}var So=n(4414);const Ao=()=>{const[e,n]=(0,t.useState)({x:0,y:0}),[r,i]=(0,t.useState)(!1),[a,o]=(0,t.useState)(!1);(0,t.useEffect)(()=>{const e=e=>{n({x:e.clientX,y:e.clientY})},t=()=>{i(!0)},r=()=>{i(!1)},a=e=>{const t=e.target,n="A"===t.tagName||"BUTTON"===t.tagName||"button"===t.type||"button"===t.getAttribute("role")||"pointer"===t.style.cursor||"pointer"===window.getComputedStyle(t).cursor;o(n)};return window.addEventListener("mousemove",e),window.addEventListener("mousedown",t),window.addEventListener("mouseup",r),window.addEventListener("mouseover",a),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mousedown",t),window.removeEventListener("mouseup",r),window.removeEventListener("mouseover",a)}},[]);return(0,So.jsx)("div",{style:{position:"fixed",left:e.x-20,top:e.y-20,width:40,height:40,fontSize:30,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",userSelect:"none",zIndex:1e4,backgroundColor:"transparent",lineHeight:1,transition:"none"},children:r?"\u270a":a?"\ud83d\udc46":"\ud83d\udd90\ufe0f"})},Co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Eo=(()=>new Set(Co))(),Po=e=>180*e/Math.PI,zo=e=>{const t=Po(Math.atan2(e[1],e[0]));return Mo(t)},To={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:zo,rotateZ:zo,skewX:e=>Po(Math.atan(e[1])),skewY:e=>Po(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Mo=e=>((e%=360)<0&&(e+=360),e),Ro=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Lo=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Io={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ro,scaleY:Lo,scale:e=>(Ro(e)+Lo(e))/2,rotateX:e=>Mo(Po(Math.atan2(e[6],e[5]))),rotateY:e=>Mo(Po(Math.atan2(-e[2],e[0]))),rotateZ:zo,rotate:zo,skewX:e=>Po(Math.atan(e[4])),skewY:e=>Po(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Bo(e){return e.includes("scale")?1:0}function No(e,t){if(!e||"none"===e)return Bo(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Io,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=To,i=t}if(!i)return Bo(t);const a=r[t],o=i[1].split(",").map(Oo);return"function"===typeof a?a(o):o[a]}function Oo(e){return parseFloat(e.trim())}function Do(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function Fo(e){return void 0===e||1===e}function Vo(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Fo(t)||!Fo(n)||!Fo(r)}function _o(e){return Vo(e)||Ho(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ho(e){return $o(e.x)||$o(e.y)}function $o(e){return e&&"0%"!==e}function Uo(e,t,n){return n+t*(e-n)}function Ko(e,t,n,r,i){return void 0!==i&&(e=Uo(e,i,r)),Uo(e,n,r)+t}function Wo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Ko(e.min,t,n,r,i),e.max=Ko(e.max,t,n,r,i)}function Go(e,t){let{x:n,y:r}=t;Wo(e.x,n.translate,n.scale,n.originPoint),Wo(e.y,r.translate,r.scale,r.originPoint)}const Xo=.999999999999,Yo=1.0000000000001;function Qo(e,t){e.min=e.min+t,e.max=e.max+t}function qo(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Wo(e,t,n,sr(e.min,e.max,i),r)}function Jo(e,t){qo(e.x,t.x,t.scaleX,t.scale,t.originX),qo(e.y,t.y,t.scaleY,t.scale,t.originY)}function Zo(e,t){return Do(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const es=new Set(["width","height","top","left","right","bottom",...Co]),ts=e=>t=>t.test(e),ns=[Tn,Un,$n,Hn,Wn,Kn,{test:e=>"auto"===e,parse:e=>e}],rs=e=>ns.find(ts(e)),is=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),as=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function os(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,i]=function(e){const t=as.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return is(e)?parseFloat(e):e}return Pn(i)?os(i,t,n+1):i}const ss=e=>e===Tn||e===Un,ls=new Set(["x","y","z"]),cs=Co.filter(e=>!ls.has(e));const ds={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return No(n,"x")},y:(e,t)=>{let{transform:n}=t;return No(n,"y")}};ds.translateX=ds.x,ds.translateY=ds.y;const us=new Set;let ps=!1,hs=!1,ms=!1;function fs(){if(hs){const e=Array.from(us).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{const t=function(e){const t=[];return cs.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();const t=n.get(e);t&&t.forEach(t=>{let[n,r]=t;e.getValue(n)?.set(r)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}hs=!1,ps=!1,us.forEach(e=>e.complete(ms)),us.clear()}function gs(){us.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hs=!0)})}class xs{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(us.add(this),ps||(ps=!0,an.read(gs),an.resolveKeyframes(fs))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(null===e[0]){const i=r?.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),us.delete(this)}cancel(){"scheduled"===this.state&&(us.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}const vs=e=>/^0[^.\s]+$/u.test(e);function bs(e){return"number"===typeof e?0===e:null===e||("none"===e||"0"===e||vs(e))}const ys=new Set(["brightness","contrast","saturate","opacity"]);function ws(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(In)||[];if(!r)return e;const i=n.replace(r,"");let a=ys.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const js=/\b([a-z-]*)\(.*?\)/gu,ks={...ir,getAnimatableNone:e=>{const t=e.match(js);return t?t.map(ws).join(" "):e}},Ss={...Tn,transform:Math.round},As={borderWidth:Un,borderTopWidth:Un,borderRightWidth:Un,borderBottomWidth:Un,borderLeftWidth:Un,borderRadius:Un,radius:Un,borderTopLeftRadius:Un,borderTopRightRadius:Un,borderBottomRightRadius:Un,borderBottomLeftRadius:Un,width:Un,maxWidth:Un,height:Un,maxHeight:Un,top:Un,right:Un,bottom:Un,left:Un,padding:Un,paddingTop:Un,paddingRight:Un,paddingBottom:Un,paddingLeft:Un,margin:Un,marginTop:Un,marginRight:Un,marginBottom:Un,marginLeft:Un,backgroundPositionX:Un,backgroundPositionY:Un,...{rotate:Hn,rotateX:Hn,rotateY:Hn,rotateZ:Hn,scale:Rn,scaleX:Rn,scaleY:Rn,scaleZ:Rn,skew:Hn,skewX:Hn,skewY:Hn,distance:Un,translateX:Un,translateY:Un,translateZ:Un,x:Un,y:Un,z:Un,perspective:Un,transformPerspective:Un,opacity:Mn,originX:Gn,originY:Gn,originZ:Un},zIndex:Ss,fillOpacity:Mn,strokeOpacity:Mn,numOctaves:Ss},Cs={...As,color:Yn,backgroundColor:Yn,outlineColor:Yn,fill:Yn,stroke:Yn,borderColor:Yn,borderTopColor:Yn,borderRightColor:Yn,borderBottomColor:Yn,borderLeftColor:Yn,filter:ks,WebkitFilter:ks},Es=e=>Cs[e];function Ps(e,t){let n=Es(e);return n!==ks&&(n=ir),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const zs=new Set(["auto","none","0"]);class Ts extends xs{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),Pn(n))){const r=os(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!es.has(n)||2!==e.length)return;const[r,i]=e,a=rs(r),o=rs(i);if(a!==o)if(ss(a)&&ss(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else ds[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(null===e[r]||bs(e[r]))&&n.push(r);n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!zs.has(t)&&er(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=Ps(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ds[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,a=n[i];n[i]=ds[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(t=>{let[n,r]=t;e.getValue(n).set(r)}),this.resolveNoneKeyframes()}}const Ms=[...ns,Yn,ir],{schedule:Rs,cancel:Ls}=rn(queueMicrotask,!1),Is={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Bs={};for(const n in Is)Bs[n]={isEnabled:e=>Is[n].some(t=>!!e[t])};const Ns=()=>({x:{min:0,max:0},y:{min:0,max:0}}),Os={current:null},Ds={current:!1};const Fs=new WeakMap;function Vs(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function _s(e){return"string"===typeof e||Array.isArray(e)}const Hs=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$s=["initial",...Hs];function Us(e){return Vs(e.animate)||$s.some(t=>_s(e[t]))}function Ks(e){return Boolean(Us(e)||e.variants)}function Ws(e){const t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Gs(e,t,n,r){if("function"===typeof t){const[i,a]=Ws(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=Ws(r);t=t(void 0!==n?n:e.custom,i,a)}return t}const Xs=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Ys{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=xs,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=un.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,an.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Us(n),this.isVariantNode=Ks(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const e=u[p];void 0!==l[p]&&vn(e)&&e.set(l[p],!1)}}mount(e){this.current=e,Fs.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),Ds.current||function(){if(Ds.current=!0,ui)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Os.current=e.matches;e.addEventListener("change",t),t()}else Os.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Os.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),on(this.notifyUpdate),on(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Eo.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&an.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in Bs){const t=Bs[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Xs.length;n++){const t=Xs[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(vn(i))e.addValue(r,i);else if(vn(a))e.addValue(r,mn(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,mn(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=mn(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(is(n)||vs(n))?n=parseFloat(n):!(e=>Ms.find(ts(e)))(n)&&ir.test(t)&&(n=Ps(e,t)),this.setBaseTarget(e,vn(n)?n.get():n)),vn(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=Gs(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||vn(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new qt),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}scheduleRenderMicrotask(){Rs.render(this.render)}}class Qs extends Ys{constructor(){super(...arguments),this.KeyframeResolver=Ts}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;vn(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}const qs=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Js={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Zs=Co.length;function el(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(Eo.has(l))o=!0;else if(Cn(l))i[l]=e;else{const t=qs(e,As[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<Zs;a++){const o=Co[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=qs(s,As[o]);l||(i=!1,r+=`${Js[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function tl(e,t,n,r){let{style:i,vars:a}=t;const o=e.style;let s;for(s in i)o[s]=i[s];for(s in r?.applyProjectionStyles(o,n),a)o.setProperty(s,a[s])}const nl={};function rl(e,t){let{layout:n,layoutId:r}=t;return Eo.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!nl[e]||"opacity"===e)}function il(e,t,n){const{style:r}=e,i={};for(const a in r)(vn(r[a])||t.style&&vn(t.style[a])||rl(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(i[a]=r[a]);return i}class al extends Qs{constructor(){super(...arguments),this.type="html",this.renderInstance=tl}readValueFromInstance(e,t){if(Eo.has(t))return this.projection?.isProjecting?Bo(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return No(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(Cn(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Zo(e,n)}build(e,t,n){el(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return il(e,t,n)}}const ol=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),sl={offset:"stroke-dashoffset",array:"stroke-dasharray"},ll={offset:"strokeDashoffset",array:"strokeDasharray"};function cl(e,t,n,r,i){let{attrX:a,attrY:o,attrScale:s,pathLength:l,pathSpacing:c=1,pathOffset:d=0,...u}=t;if(el(e,u,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:h}=e;p.transform&&(h.transform=p.transform,delete p.transform),(h.transform||p.transformOrigin)&&(h.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),h.transform&&(h.transformBox=i?.transformBox??"fill-box",delete p.transformBox),void 0!==a&&(p.x=a),void 0!==o&&(p.y=o),void 0!==s&&(p.scale=s),void 0!==l&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?sl:ll;e[a.offset]=Un.transform(-r);const o=Un.transform(t),s=Un.transform(n);e[a.array]=`${o} ${s}`}(p,l,c,d,!1)}const dl=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),ul=e=>"string"===typeof e&&"svg"===e.toLowerCase();function pl(e,t,n){const r=il(e,t,n);for(const i in e)if(vn(e[i])||vn(t[i])){r[-1!==Co.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}class hl extends Qs{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ns}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Eo.has(t)){const e=Es(t);return e&&e.default||0}return t=dl.has(t)?t:ol(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return pl(e,t,n)}build(e,t,n){cl(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){!function(e,t,n,r){tl(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(dl.has(i)?i:ol(i),t.attrs[i])}(e,t,0,r)}mount(e){this.isSVGTag=ul(e.tagName),super.mount(e)}}const ml=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fl(e){return"string"===typeof e&&!e.includes("-")&&!!(ml.indexOf(e)>-1||/[A-Z]/u.test(e))}const gl=(e,n)=>fl(e)?new hl(n):new al(n,{allowProjection:e!==t.Fragment}),xl=(0,t.createContext)({}),vl=(0,t.createContext)({strict:!1}),bl=(0,t.createContext)({});function yl(e){const{initial:n,animate:r}=function(e,t){if(Us(e)){const{initial:t,animate:n}=e;return{initial:!1===t||_s(t)?t:void 0,animate:_s(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(bl));return(0,t.useMemo)(()=>({initial:n,animate:r}),[wl(n),wl(r)])}function wl(e){return Array.isArray(e)?e.join(" "):e}const jl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function kl(e,t,n){for(const r in t)vn(t[r])||rl(r,n)||(e[r]=t[r])}function Sl(e,n){const r={};return kl(r,e.style||{},e),Object.assign(r,function(e,n){let{transformTemplate:r}=e;return(0,t.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return el(e,n,r),Object.assign({},e.vars,e.style)},[n])}(e,n)),r}function Al(e,t){const n={},r=Sl(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Cl=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}});function El(e,n,r,i){const a=(0,t.useMemo)(()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return cl(t,n,ul(i),e.transformTemplate,e.style),{...t.attrs,style:{...t.style}}},[n]);if(e.style){const t={};kl(t,e.style,e),a.style={...t,...a.style}}return a}const Pl=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zl(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Pl.has(e)}let Tl=e=>!zl(e);try{"function"===typeof(Ml=require("@emotion/is-prop-valid").default)&&(Tl=e=>e.startsWith("on")?!zl(e):Ml(e))}catch{}var Ml;function Rl(e,n,r,i,a){let{latestValues:o}=i,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=(fl(e)?El:Al)(n,o,a,e),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(Tl(i)||!0===n&&zl(i)||!t&&!zl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"===typeof e,s),d=e!==t.Fragment?{...c,...l,ref:r}:{},{children:u}=n,p=(0,t.useMemo)(()=>vn(u)?u.get():u,[u]);return(0,t.createElement)(e,{...d,children:p})}const Ll=(0,t.createContext)(null);function Il(e){return vn(e)?e.get():e}function Bl(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=Il(a[p]);let{initial:o,animate:s}=e;const l=Us(e),c=Ks(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let d=!!n&&!1===n.initial;d=d||!1===o;const u=d?s:o;if(u&&"boolean"!==typeof u&&!Vs(u)){const t=Array.isArray(u)?u:[u];for(let n=0;n<t.length;n++){const r=Gs(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[d?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}const Nl=e=>(n,r)=>{const i=(0,t.useContext)(bl),a=(0,t.useContext)(Ll),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a}=e;return{latestValues:Bl(t,n,r,i),renderState:a()}}(e,n,i,a);return r?o():gn(o)},Ol=Nl({scrapeMotionValuesFromProps:il,createRenderState:jl}),Dl=Nl({scrapeMotionValuesFromProps:pl,createRenderState:Cl});const Fl=Symbol.for("motionComponentSymbol");function Vl(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function _l(e,n,r){return(0,t.useCallback)(t=>{t&&e.onMount&&e.onMount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):Vl(r)&&(r.current=t))},[n])}const Hl="data-"+ol("framerAppearId"),$l=(0,t.createContext)({});function Ul(e,n,r,i,a){const{visualElement:o}=(0,t.useContext)(bl),s=(0,t.useContext)(vl),l=(0,t.useContext)(Ll),c=(0,t.useContext)(fn).reducedMotion,d=(0,t.useRef)(null);i=i||s.renderer,!d.current&&i&&(d.current=i(e,{visualState:n,parent:o,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const u=d.current,p=(0,t.useContext)($l);!u||u.projection||!a||"html"!==u.type&&"svg"!==u.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Kl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Vl(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:c})}(d.current,r,a,p);const h=(0,t.useRef)(!1);(0,t.useInsertionEffect)(()=>{u&&h.current&&u.update(r,l)});const m=r[Hl],f=(0,t.useRef)(Boolean(m)&&!window.MotionHandoffIsComplete?.(m)&&window.MotionHasOptimisedAnimation?.(m));return pi(()=>{u&&(h.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),f.current&&u.animationState&&u.animationState.animateChanges())}),(0,t.useEffect)(()=>{u&&(!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(m)}),f.current=!1))}),u}function Kl(e){if(e)return!1!==e.options.allowProjection?e.projection:Kl(e.parent)}function Wl(e){let{forwardMotionProps:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;r&&function(e){for(const t in e)Bs[t]={...Bs[t],...e[t]}}(r);const a=fl(e)?Dl:Ol;function o(r,o){let s;const l={...(0,t.useContext)(fn),...r,layoutId:Gl(r)},{isStatic:c}=l,d=yl(r),u=a(r,c);if(!c&&ui){!function(){(0,t.useContext)(vl).strict;0}();const n=function(e){const{drag:t,layout:n}=Bs;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=n.MeasureLayout,d.visualElement=Ul(e,u,l,i,n.ProjectionNode)}return(0,So.jsxs)(bl.Provider,{value:d,children:[s&&d.visualElement?(0,So.jsx)(s,{visualElement:d.visualElement,...l}):null,Rl(e,r,_l(u,d.visualElement,o),u,c,n)]})}o.displayName=`motion.${"string"===typeof e?e:`create(${e.displayName??e.name??""})`}`;const s=(0,t.forwardRef)(o);return s[Fl]=e,s}function Gl(e){let{layoutId:n}=e;const r=(0,t.useContext)(xl).id;return r&&void 0!==n?r+"-"+n:n}function Xl(e,t){if("undefined"===typeof Proxy)return Wl;const n=new Map,r=(n,r)=>Wl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>"create"===a?r:(n.has(a)||n.set(a,Wl(a,void 0,e,t)),n.get(a))})}function Yl(e,t,n){const r=e.getProps();return Gs(r,t,void 0!==n?n:r.custom,e)}function Ql(e,t){return e?.[t]??e?.default??e}const ql=e=>Array.isArray(e);function Jl(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,mn(n))}function Zl(e){return ql(e)?e[e.length-1]||0:e}function ec(e,t){const n=e.getValue("willChange");if(r=n,Boolean(vn(r)&&r.add))return n.add(t);if(!n&&Zt.WillChange){const n=new Zt.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}function tc(e){return e.props[Hl]}function nc(e){let t;return()=>(void 0===t&&(t=e()),t)}const rc=nc(()=>void 0!==window.ScrollTimeline),ic={};function ac(e,t){const n=nc(e);return()=>ic[t]??n()}const oc=ac(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch($C){return!1}return!0},"linearEasing"),sc=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},lc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:sc([0,.65,.55,1]),circOut:sc([.55,0,1,.45]),backIn:sc([.31,.01,.66,-.59]),backOut:sc([.33,1.53,.69,.99])};function cc(e,t){return e?"function"===typeof e?oc()?yr(e,t):"ease-out":Xr(e)?sc(e):Array.isArray(e)?e.map(e=>cc(e,t)||lc.easeOut):lc[e]:void 0}function dc(e,t,n){let{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const d={[t]:n};l&&(d.offset=l);const u=cc(s,i);Array.isArray(u)&&(d.easing=u),nn.value&&Sn.waapi++;const p={delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"};c&&(p.pseudoElement=c);const h=e.animate(d,p);return nn.value&&h.finished.finally(()=>{Sn.waapi--}),h}function uc(e){return"function"===typeof e&&"applyToOptions"in e}class pc extends ai{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=Boolean(i),this.allowFlatten=a,this.options=e,e.type;const l=function(e){let{type:t,...n}=e;return uc(t)&&oc()?t.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}(e);this.animation=dc(t,n,r,l,i),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const e=ni(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch($C){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return kn(Number(e))}get time(){return kn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=jn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline(e){let{timeline:t,observe:n}=e;return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&rc()?(this.animation.timeline=t,en):n(this)}}const hc={anticipate:Ur,backInOut:$r,circInOut:Gr};function mc(e){"string"===typeof e.ease&&e.ease in hc&&(e.ease=hc[e.ease])}class fc extends pc{constructor(e){mc(e),ii(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const o=new si({...a,autoplay:!1}),s=jn(this.finishedTime??this.time);t.setWithVelocity(o.sample(s-10).value,o.sample(s).value,10),o.stop()}}const gc=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!ir.test(e)&&"0"!==e||e.startsWith("url(")));const xc=new Set(["opacity","clipPath","filter","transform"]),vc=nc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class bc extends ai{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",keyframes:s,name:l,motionValue:c,element:d,...u}=e;super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=un.now();const p={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,name:l,motionValue:c,element:d,...u},h=d?.KeyframeResolver||xs;this.keyframeResolver=new h(s,(e,t,n)=>this.onKeyframesResolved(e,t,p,!n),l,c,d),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;const{name:i,type:a,velocity:o,delay:s,isHandoff:l,onUpdate:c}=n;this.resolvedAt=un.now(),function(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=gc(i,t),s=gc(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||uc(n))&&r)}(e,i,a,o)||(!Zt.instantAnimations&&s||c?.(ni(e,n,t)),e[0]=e[e.length-1],n.duration=0,n.repeat=0);const d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},u=!l&&function(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e,s=t?.owner?.current;if(!(s instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=t.owner.getProps();return vc()&&n&&xc.has(n)&&("transform"!==n||!c)&&!l&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}(d)?new fc({...d,element:d.motionValue.owner.current}):new si(d);u.finished.then(()=>this.notifyFinished()).catch(en),this.pendingTimeline&&(this.stopTimeline=u.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=u}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ms=!0,gs(),fs(),ms=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const yc=e=>null!==e;const wc={type:"spring",stiffness:500,damping:25,restSpeed:10},jc={type:"keyframes",duration:.8},kc={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Sc=(e,t)=>{let{keyframes:n}=t;return n.length>2?jc:Eo.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:wc:kc};const Ac=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=Ql(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=jn(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:d,...u}=e;return!!Object.keys(u).length})(s)||Object.assign(d,Sc(e,d)),d.duration&&(d.duration=jn(d.duration)),d.repeatDelay&&(d.repeatDelay=jn(d.repeatDelay)),void 0!==d.from&&(d.keyframes[0]=d.from);let u=!1;if((!1===d.type||0===d.duration&&!d.repeatDelay)&&(d.duration=0,0===d.delay&&(u=!0)),(Zt.instantAnimations||Zt.skipAnimations)&&(u=!0,d.duration=0,d.delay=0),d.allowFlatten=!s.type&&!s.ease,u&&!a&&void 0!==t.get()){const e=function(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const a=e.filter(yc),o=r&&"loop"!==i&&r%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}(d.keyframes,s);if(void 0!==e)return void an.update(()=>{d.onUpdate(e),d.onComplete()})}return s.isSync?new si(d):new bc(d)}};function Cc(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function Ec(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const t=e.getValue(d,e.latestValues[d]??null),r=s[d];if(void 0===r||c&&Cc(c,d))continue;const i={delay:n,...Ql(a||{},d)},o=t.get();if(void 0!==o&&!t.isAnimating&&!Array.isArray(r)&&r===o&&!i.velocity)continue;let u=!1;if(window.MotionHandoffAnimation){const t=tc(e);if(t){const e=window.MotionHandoffAnimation(t,d,an);null!==e&&(i.startTime=e,u=!0)}}ec(e,d),t.start(Ac(d,t,r,e.shouldReduceMotion&&es.has(d)?{type:!1}:i,e,u));const p=t.animation;p&&l.push(p)}return o&&Promise.all(l).then(()=>{an.update(()=>{o&&function(e,t){const n=Yl(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)Jl(e,o,Zl(a[o]))}(e,o)})}),l}function Pc(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=Yl(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Ec(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=arguments.length>6?arguments[6]:void 0;const s=[],l=e.variantChildren.size,c=(l-1)*i,d="function"===typeof r,u=d?e=>r(e,l):1===a?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i}:function(){return c-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i};return Array.from(e.variantChildren).sort(zc).forEach((e,i)=>{e.notify("AnimationStart",t),s.push(Pc(e,t,{...o,delay:n+(d?0:r)+u(i)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(s)}(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function zc(e,t){return e.sortNodePosition(t)}function Tc(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Mc=$s.length;function Rc(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&Rc(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<Mc;n++){const r=$s[n],i=e.props[r];(_s(i)||!1===i)&&(t[r]=i)}return t}const Lc=[...Hs].reverse(),Ic=Hs.length;function Bc(e){return t=>Promise.all(t.map(t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>Pc(e,t,r));n=Promise.all(i)}else if("string"===typeof t)n=Pc(e,t,r);else{const i="function"===typeof t?Yl(e,t,r.custom):t;n=Promise.all(Ec(e,i,r))}return n.then(()=>{e.notify("AnimationComplete",t)})}(e,n,r)}))}function Nc(e){let t=Bc(e),n=Fc(),r=!0;const i=t=>(n,r)=>{const i=Yl(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=Rc(e.parent)||{},l=[],c=new Set;let d={},u=1/0;for(let t=0;t<Ic;t++){const p=Lc[t],h=n[p],m=void 0!==o[p]?o[p]:s[p],f=_s(m),g=p===a?h.isActive:null;!1===g&&(u=t);let x=m===s[p]&&m!==o[p]&&f;if(x&&r&&e.manuallyAnimateOnMount&&(x=!1),h.protectedKeys={...d},!h.isActive&&null===g||!m&&!h.prevProp||Vs(m)||"boolean"===typeof m)continue;const v=Oc(h.prevProp,m);let b=v||p===a&&h.isActive&&!x&&f||t>u&&f,y=!1;const w=Array.isArray(m)?m:[m];let j=w.reduce(i(p),{});!1===g&&(j={});const{prevResolvedValues:k={}}=h,S={...k,...j},A=t=>{b=!0,c.has(t)&&(y=!0,c.delete(t)),h.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in S){const t=j[e],n=k[e];if(d.hasOwnProperty(e))continue;let r=!1;r=ql(t)&&ql(n)?!Tc(t,n):t!==n,r?void 0!==t&&null!==t?A(e):c.add(e):void 0!==t&&c.has(e)?A(e):h.protectedKeys[e]=!0}h.prevProp=m,h.prevResolvedValues=j,h.isActive&&(d={...d,...j}),r&&e.blockInitialAnimation&&(b=!1);b&&(!(x&&v)||y)&&l.push(...w.map(e=>({animation:e,options:{type:p}})))}if(c.size){const t={};if("boolean"!==typeof o.initial){const n=Yl(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach(n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,p?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;const i=a(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=Fc(),r=!0}}}function Oc(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Tc(t,e)}function Dc(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fc(){return{animate:Dc(!0),whileInView:Dc(),whileHover:Dc(),whileTap:Dc(),whileDrag:Dc(),whileFocus:Dc(),exit:Dc()}}class Vc{constructor(e){this.isMounted=!1,this.node=e}update(){}}let _c=0;const Hc={animation:{Feature:class extends Vc{constructor(e){super(e),e.animationState||(e.animationState=Nc(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Vs(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Vc{constructor(){super(...arguments),this.id=_c++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},$c={x:!1,y:!1};function Uc(){return $c.x||$c.y}function Kc(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Wc=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function Gc(e){return{point:{x:e.pageX,y:e.pageY}}}function Xc(e,t,n,r){return Kc(e,t,(e=>t=>Wc(t)&&e(t,Gc(t)))(n),r)}function Yc(e){return e.max-e.min}function Qc(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=sr(t.min,t.max,e.origin),e.scale=Yc(n)/Yc(t),e.translate=sr(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function qc(e,t,n,r){Qc(e.x,t.x,n.x,r?r.originX:void 0),Qc(e.y,t.y,n.y,r?r.originY:void 0)}function Jc(e,t,n){e.min=n.min+t.min,e.max=e.min+Yc(t)}function Zc(e,t,n){e.min=t.min-n.min,e.max=e.min+Yc(t)}function ed(e,t,n){Zc(e.x,t.x,n.x),Zc(e.y,t.y,n.y)}function td(e){return[e("x"),e("y")]}const nd=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},rd=(e,t)=>Math.abs(e-t);class id{constructor(e,t){let{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=sd(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=rd(e.x,t.x),r=rd(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=sn;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ad(t,this.transformPagePoint),an.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=sd("pointercancel"===e.type?this.lastMoveEventInfo:ad(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Wc(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;const o=ad(Gc(e),this.transformPagePoint),{point:s}=o,{timestamp:l}=sn;this.history=[{...s,timestamp:l}];const{onSessionStart:c}=t;c&&c(e,sd(o,this.history)),this.removeListeners=yn(Xc(this.contextWindow,"pointermove",this.handlePointerMove),Xc(this.contextWindow,"pointerup",this.handlePointerUp),Xc(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),on(this.updatePoint)}}function ad(e,t){return t?{point:t(e.point)}:e}function od(e,t){return{x:e.x-t.x,y:e.y-t.y}}function sd(e,t){let{point:n}=e;return{point:n,delta:od(n,cd(t)),offset:od(n,ld(t)),velocity:dd(t,.1)}}function ld(e){return e[0]}function cd(e){return e[e.length-1]}function dd(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=cd(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>jn(t)));)n--;if(!r)return{x:0,y:0};const a=kn(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ud(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function pd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const hd=.35;function md(e,t,n){return{min:fd(e,t),max:fd(e,n)}}function fd(e,t){return"number"===typeof e?e:e[t]||0}const gd=new WeakMap;class xd{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e){let{snapToCursor:t=!1,distanceThreshold:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new id(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Gc(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?$c[a]?null:($c[a]=!0,()=>{$c[a]=!1}):$c.x||$c.y?null:($c.x=$c.y=!0,()=>{$c.x=$c.y=!1}),!this.openDragLock))return;var a;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),td(e=>{let t=this.getAxisMotionValue(e).get()||0;if($n.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Yc(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&an.postRender(()=>i(e,t)),ec(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},resumeAnimation:()=>td(e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play())},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,distanceThreshold:n,contextWindow:nd(this.visualElement)})}stop(e,t){const n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&an.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!vd(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?sr(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?sr(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Vl(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:ud(e.x,r,a),y:ud(e.y,n,i)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hd;return!1===e?e=0:!0===e&&(e=hd),{x:md(e,"left","right"),y:md(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&td(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Vl(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Zo(e,n),{scroll:i}=t;return i&&(Qo(r.x,i.offset.x),Qo(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:pd(e.x,t.x),y:pd(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=Do(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=td(o=>{if(!vd(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,d=r?40:1e7,u={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,u)});return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return ec(this.visualElement,e),n.start(Ac(e,n,0,t,this.visualElement,!1))}stopAnimation(){td(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){td(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){td(t=>{const{drag:n}=this.getProps();if(!vd(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-sr(n,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Vl(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};td(e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=Yc(e),i=Yc(t);return i>r?n=qr(t.min,t.max-r,e.min):r>i&&(n=qr(e.min,e.max-i,t.min)),wn(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),td(t=>{if(!vd(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(sr(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;gd.set(this.visualElement,this);const e=Xc(this.visualElement.current,"pointerdown",e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{const{dragConstraints:e}=this.getProps();Vl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),an.read(t);const i=Kc(window,"resize",()=>this.scalePositionWithinConstraints()),a=n.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(td(e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=hd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function vd(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const bd=e=>(t,n)=>{e&&an.postRender(()=>e(t,n))};function yd(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,t.useContext)(Ll);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:a}=n,o=(0,t.useId)();(0,t.useEffect)(()=>{if(e)return a(o)},[e]);const s=(0,t.useCallback)(()=>e&&i&&i(o),[o,i,e]);return!r&&i?[!1,s]:[!0]}const wd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function jd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const kd={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Un.test(e))return e;e=parseFloat(e)}return`${jd(e,t.target.x)}% ${jd(e,t.target.y)}%`}},Sd={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=ir.parse(e);if(a.length>5)return i;const o=ir.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const d=sr(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=d),"number"===typeof a[3+s]&&(a[3+s]/=d),o(a)}};let Ad=!1;class Cd extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)nl[t]=e[t],Cn(t)&&(nl[t].isCSSVariable=!0)}(Pd),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Ad&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),wd.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,Ad=!0,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||an.postRender(()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Rs.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ed(e){const[n,r]=yd(),i=(0,t.useContext)(xl);return(0,So.jsx)(Cd,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)($l),isPresent:n,safeToRemove:r})}const Pd={borderRadius:{...kd,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kd,borderTopRightRadius:kd,borderBottomLeftRadius:kd,borderBottomRightRadius:kd,boxShadow:Sd};function zd(e){return"object"===typeof e&&null!==e}function Td(e){return zd(e)&&"ownerSVGElement"in e}const Md=(e,t)=>e.depth-t.depth;class Rd{constructor(){this.children=[],this.isDirty=!1}add(e){Yt(this.children,e),this.isDirty=!0}remove(e){Qt(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Md),this.isDirty=!1,this.children.forEach(e)}}function Ld(e,t){const n=un.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(on(r),e(o-t))};return an.setup(r,!0),()=>on(r)}const Id=["TopLeft","TopRight","BottomLeft","BottomRight"],Bd=Id.length,Nd=e=>"string"===typeof e?parseFloat(e):e,Od=e=>"number"===typeof e||Un.test(e);function Dd(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Fd=_d(0,.5,Wr),Vd=_d(.5,.95,en);function _d(e,t,n){return r=>r<e?0:r>t?1:n(qr(e,t,r))}function Hd(e,t){e.min=t.min,e.max=t.max}function $d(e,t){Hd(e.x,t.x),Hd(e.y,t.y)}function Ud(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Kd(e,t,n,r,i){return e=Uo(e-=t,1/n,r),void 0!==i&&(e=Uo(e,1/i,r)),e}function Wd(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;$n.test(t)&&(t=parseFloat(t),t=sr(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=sr(a.min,a.max,r);e===a&&(s-=t),e.min=Kd(e.min,t,n,s,i),e.max=Kd(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const Gd=["x","scaleX","originX"],Xd=["y","scaleY","originY"];function Yd(e,t,n,r){Wd(e.x,t,Gd,n?n.x:void 0,r?r.x:void 0),Wd(e.y,t,Xd,n?n.y:void 0,r?r.y:void 0)}function Qd(e){return 0===e.translate&&1===e.scale}function qd(e){return Qd(e.x)&&Qd(e.y)}function Jd(e,t){return e.min===t.min&&e.max===t.max}function Zd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function eu(e,t){return Zd(e.x,t.x)&&Zd(e.y,t.y)}function tu(e){return Yc(e.x)/Yc(e.y)}function nu(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class ru{constructor(){this.members=[]}add(e){Yt(this.members,e),e.scheduleRender()}remove(e){if(Qt(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex(t=>e===t);if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const iu={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},au=["","X","Y","Z"];let ou=0;function su(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function lu(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=tc(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",an,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&lu(r)}function cu(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=ou++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,nn.value&&(iu.nodes=iu.calculatedTargetDeltas=iu.calculatedProjections=0),this.nodes.forEach(pu),this.nodes.forEach(bu),this.nodes.forEach(yu),this.nodes.forEach(hu),nn.addProjectionMetrics&&nn.addProjectionMetrics(iu)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Rd)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new qt),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){if(this.instance)return;var n;this.isSVG=Td(e)&&!(Td(n=e)&&"svg"===n.tagName),this.instance=e;const{layoutId:r,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||r)&&(this.isLayoutDirty=!0),t){let n,r=0;const i=()=>this.root.updateBlockedByResize=!1;an.read(()=>{r=window.innerWidth}),t(e,()=>{const e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Ld(i,250),wd.hasAnimatedSinceResize&&(wd.hasAnimatedSinceResize=!1,this.nodes.forEach(vu)))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&a&&(r||i)&&this.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||Cu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!eu(this.targetLayout,i),d=!n&&r;if(this.options.layoutRoot||this.resumeFrom||d||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const e={...Ql(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e),this.setAnimationOrigin(t,d)}else n||vu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),on(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(wu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(fu);if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(gu);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(xu),this.nodes.forEach(du),this.nodes.forEach(uu)):this.nodes.forEach(gu),this.clearAllSnapshots();const e=un.now();sn.delta=wn(0,1e3/60,e-sn.timestamp),sn.timestamp=e,sn.isProcessing=!0,ln.update.process(sn),ln.preRender.process(sn),ln.render.process(sn),sn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Rs.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mu),this.sharedNodes.forEach(ju)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,an.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){an.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||Yc(this.snapshot.measuredBox.x)||Yc(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!qd(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||_o(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),zu((r=n).x),zu(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Mu))){const{scroll:e}=this.root;e&&(Qo(t.x,e.offset.x),Qo(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if($d(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&$d(t,e),Qo(t.x,i.offset.x),Qo(t.y,i.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};$d(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Jo(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),_o(e.latestValues)&&Jo(n,e.latestValues)}return _o(this.latestValues)&&Jo(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};$d(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!_o(e.latestValues))continue;Vo(e.latestValues)&&e.updateSnapshot();const r=Ns();$d(r,e.measurePageBox()),Yd(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return _o(this.latestValues)&&Yd(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==sn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(this.layout&&(r||i)){if(this.resolvedRelativeTargetAt=sn.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ed(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),$d(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,o,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,o=this.relativeTarget,s=this.relativeParent.target,Jc(a.x,o.x,s.x),Jc(a.y,o.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):$d(this.target,this.layout.layoutBox),Go(this.target,this.targetDelta)):$d(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ed(this.relativeTargetOrigin,this.target,e.target),$d(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}nn.value&&iu.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Vo(this.parent.latestValues)&&!Ho(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===sn.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;$d(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Jo(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Go(e,o)),r&&_o(a.latestValues)&&Jo(e,a.latestValues))}t.x<Yo&&t.x>Xo&&(t.x=1),t.y<Yo&&t.y>Xo&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(Ud(this.prevProjectionDelta.x,this.projectionDelta.x),Ud(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),qc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&nu(this.projectionDelta.x,this.prevProjectionDelta.x)&&nu(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),nn.value&&iu.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,d=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Au));let u;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;ku(a.x,e.x,n),ku(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ed(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){Su(e.x,t.x,n.x,r),Su(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),u&&function(e,t){return Jd(e.x,t.x)&&Jd(e.y,t.y)}(this.relativeTarget,u)&&(this.isProjectionDirty=!1),u||(u={x:{min:0,max:0},y:{min:0,max:0}}),$d(u,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=sr(0,n.opacity??1,Fd(r)),e.opacityExit=sr(t.opacity??1,0,Vd(r))):a&&(e.opacity=sr(t.opacity??1,n.opacity??1,r));for(let o=0;o<Bd;o++){const i=`border${Id[o]}Radius`;let a=Dd(t,i),s=Dd(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Od(a)===Od(s)?(e[i]=Math.max(sr(Nd(a),Nd(s),r),0),($n.test(s)||$n.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=sr(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(on(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=an.update(()=>{wd.hasAnimatedSinceResize=!0,Sn.layout++,this.motionValue||(this.motionValue=mn(0)),this.currentAnimation=function(e,t,n){const r=vn(e)?e:mn(e);return r.start(Ac("",r,t,n)),r.animation}(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Sn.layout--},onComplete:()=>{Sn.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Tu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Yc(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Yc(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}$d(t,n),Jo(t,i),qc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ru);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&su("z",e,r,this.animationValues);for(let i=0;i<au.length;i++)su(`rotate${au[i]}`,e,r,this.animationValues),su(`skew${au[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return void(e.visibility="hidden");const n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=Il(t?.pointerEvents)||"",void(e.transform=n?n(this.latestValues,""):"none");const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target)return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=Il(t?.pointerEvents)||""),void(this.hasProjected&&!_o(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1));e.visibility="";const i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;const{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${100*o.origin}% ${100*s.origin}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const l in nl){if(void 0===i[l])continue;const{correct:t,applyTo:n,isCSSVariable:o}=nl[l],s="none"===a?i[l]:t(i[l],r);if(n){const t=n.length;for(let r=0;r<t;r++)e[n[r]]=s}else o?this.options.visualElement.renderState.vars[l]=s:e[l]=s}this.options.layoutId&&(e.pointerEvents=r===this?Il(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(fu),this.root.sharedNodes.clear()}}}function du(e){e.updateLayout()}function uu(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;"size"===i?td(e=>{const r=a?t.measuredBox[e]:t.layoutBox[e],i=Yc(r);r.min=n[e].min,r.max=r.min+i}):Tu(i,t.layoutBox,n)&&td(r=>{const i=a?t.measuredBox[r]:t.layoutBox[r],o=Yc(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};qc(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?qc(s,e.applyTransform(r,!0),t.measuredBox):qc(s,n,t.layoutBox);const l=!qd(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};ed(o,t.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};ed(s,n,a.layoutBox),eu(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function pu(e){nn.value&&iu.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function hu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function mu(e){e.clearSnapshot()}function fu(e){e.clearMeasurements()}function gu(e){e.isLayoutDirty=!1}function xu(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function vu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function bu(e){e.resolveTargetDelta()}function yu(e){e.calcProjection()}function wu(e){e.resetSkewAndRotation()}function ju(e){e.removeLeadSnapshot()}function ku(e,t,n){e.translate=sr(t.translate,0,n),e.scale=sr(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Su(e,t,n,r){e.min=sr(t.min,n.min,r),e.max=sr(t.max,n.max,r)}function Au(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Cu={duration:.45,ease:[.4,0,.1,1]},Eu=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Pu=Eu("applewebkit/")&&!Eu("chrome/")?Math.round:en;function zu(e){e.min=Pu(e.min),e.max=Pu(e.max)}function Tu(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=tu(t),i=tu(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function Mu(e){return e!==e.root&&e.scroll?.wasRoot}const Ru=cu({attachResizeListener:(e,t)=>Kc(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lu={current:void 0},Iu=cu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lu.current){const e=new Ru({});e.mount(window),e.setOptions({layoutScroll:!0}),Lu.current=e}return Lu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Bu={pan:{Feature:class extends Vc{constructor(){super(...arguments),this.removePointerDownListener=en}onPointerDown(e){this.session=new id(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nd(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:bd(e),onStart:bd(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&an.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Xc(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Vc{constructor(e){super(e),this.removeGroupControls=en,this.removeListeners=en,this.controls=new xd(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||en}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Iu,MeasureLayout:Ed}};function Nu(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Ou(e){return!("touch"===e.pointerType||Uc())}function Du(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&an.postRender(()=>i(t,Gc(t)))}function Fu(e){return zd(e)&&"offsetHeight"in e}const Vu=(e,t)=>!!t&&(e===t||Vu(e,t.parentElement)),_u=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const Hu=new WeakSet;function $u(e){return t=>{"Enter"===t.key&&e(t)}}function Uu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function Ku(e){return Wc(e)&&!Uc()}function Wu(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Nu(e,n),o=e=>{const r=e.currentTarget;if(!Ku(e))return;Hu.add(r);const a=t(r,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),Hu.has(r)&&Hu.delete(r),Ku(e)&&"function"===typeof a&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Vu(r,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach(e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,i),Fu(e)&&(e.addEventListener("focus",e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=$u(()=>{if(Hu.has(n))return;Uu(n,"down");const e=$u(()=>{Uu(n,"up")});n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>Uu(n,"cancel"),t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)})(e,i)),t=e,_u.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))}),a}function Gu(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&an.postRender(()=>i(t,Gc(t)))}const Xu=new WeakMap,Yu=new WeakMap,Qu=e=>{const t=Xu.get(e.target);t&&t(e)},qu=e=>{e.forEach(Qu)};function Ju(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Yu.has(r)||Yu.set(r,{});const i=Yu.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(qu,{root:t,...n})),i[a]}(t);return Xu.set(e,n),r.observe(e),()=>{Xu.delete(e),r.unobserve(e)}}const Zu={some:0,all:1};const ep={inView:{Feature:class extends Vc{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Zu[r]};return Ju(this.node.current,a,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Vc{mount(){const{current:e}=this.node;e&&(this.unmount=Wu(e,(e,t)=>(Gu(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Gu(this.node,e,n?"End":"Cancel")}),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Vc{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch($C){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=yn(Kc(this.node.current,"focus",()=>this.onFocus()),Kc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends Vc{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Nu(e,n),o=e=>{if(!Ou(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const a=e=>{Ou(e)&&(r(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,i)};return r.forEach(e=>{e.addEventListener("pointerenter",o,i)}),a}(e,(e,t)=>(Du(this.node,t,"Start"),e=>Du(this.node,e,"End"))))}unmount(){}}}},tp=Xl({...Hc,...ep,...Bu,...{layout:{ProjectionNode:Iu,MeasureLayout:Ed}}},gl),np="#0a0a1a",rp="#3b82f6",ip={primary:"#ffffff",secondary:"rgba(255, 255, 255, 0.7)",tertiary:"rgba(255, 255, 255, 0.5)"},ap={primary:"#000000",secondary:"#0a0a1a",tertiary:"rgba(10, 10, 26, 0.5)"},op={primary:"linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",secondary:"linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",dark:"linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)",light:"linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"},sp="480px",lp="768px",cp="1024px",dp=Gt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;

  @media (max-width: ${lp}) {
    padding: 0 20px;
  }

  @media (max-width: ${sp}) {
    padding: 0 15px;
  }
`,up=(Gt.section`
  position: relative;
  background: transparent;
  overflow: hidden;
`,Gt.h2`
  font-family: 'Pretendard-Bold';
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 5rem;
  color: ${ip.primary};
  letter-spacing: -0.03em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: ${ip.tertiary};
  }

  @media (max-width: ${lp}) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${sp}) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`),pp=(Gt.div`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${lp}) {
    padding: 2rem;
  }

  @media (max-width: ${sp}) {
    padding: 1.5rem;
  }
`,Gt.div`
  background: radial-gradient(ellipse at top, #0a0a1a 0%, #000000 50%, #0a0a1a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.03) 0%, transparent 30%);
  }
`,Gt.div`
  background: transparent;
  position: relative;
  overflow: hidden;
`),hp=Gt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,mp=Gt(tp.div)`
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(102, 126, 234, 0.4);
  border-radius: 50%;
  pointer-events: none;
`,fp=Gt(tp.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: ${e=>e.borderRadius||"50%"};
  background: transparent;
`,gp=Gt(tp.div)`
  position: absolute;
  width: ${e=>e.width||"100px"};
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  transform-origin: left center;
`,xp=Gt(tp.div)`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: rgba(102, 126, 234, 0.3);
  font-weight: 500;
  user-select: none;
`,vp=Gt(tp.div)`
  position: absolute;
  border: 2px solid rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  border-top-color: rgba(59, 130, 246, 0.3);
  border-right-color: transparent;
`,bp=Gt(tp.div)`
  position: absolute;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent);
`,yp=Gt(tp.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.gradient||"radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"};
  filter: blur(${e=>e.blur||"1px"});
`,wp=Gt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`,jp=Gt(tp.div)`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 100px 100px;
  transform-origin: center;
`,kp=Gt(tp.div)`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: rgba(59, 130, 246, 0.3);
  white-space: nowrap;
  user-select: none;
`,Sp=Gt(tp.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${e=>e.color||"rgba(59, 130, 246, 0.6)"};
  border-radius: 50%;
  pointer-events: none;
`,Ap=Gt(tp.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 2;
`,Cp=(Gt(tp.div)`
  position: absolute;
  top: -20px;
  left: -40px;
  right: -40px;
  bottom: -20px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59, 130, 246, 0.03),
    transparent
  );
  z-index: -1;
  pointer-events: none;
`,Gt(tp.div)`
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(102, 126, 234, 0.6);
  border-radius: 50%;
  pointer-events: none;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-20px) translateX(10px);
    }
    50% {
      transform: translateY(-10px) translateX(-10px);
    }
    75% {
      transform: translateY(-30px) translateX(5px);
    }
  }
  
  animation: float var(--duration, 15s) var(--delay, 0s) infinite ease-in-out;
  animation-duration: ${e=>{var t;return(null===(t=e.style)||void 0===t?void 0:t.animationDuration)||"15s"}};
  animation-delay: ${e=>{var t;return(null===(t=e.style)||void 0===t?void 0:t.animationDelay)||"0s"}};
`,(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=Ut.apply(void 0,a([e],n,!1)),s="sc-global-".concat(Pe(JSON.stringify(o))),l=new Xt(o,s),c=function(e){var n=Et(),r=t.useContext(Dt),i=t.useRef(n.styleSheet.allocateGSInstance(s)).current;return n.styleSheet.server&&d(i,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return d(i,e,n.styleSheet,r,n.stylis),function(){return l.removeStyles(i,n.styleSheet)}},[i,e,n.styleSheet,r,n.stylis]),null};function d(e,t,n,r,a){if(l.isStatic)l.renderStyles(e,me,n,a);else{var o=i(i({},t),{theme:xe(t,r,c.defaultProps)});l.renderStyles(e,o,n,a)}}return t.memo(c)})`
  /* Pretendard 폰트 */
  @font-face {
    font-family: 'Pretendard-Thin';
    src: url('/fonts/Pretendard-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-ExtraLight';
    src: url('/fonts/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Light';
    src: url('/fonts/Pretendard-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Black';
    src: url('/fonts/Pretendard-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  /* Fira Code 폰트 - 코드 표시용 */
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: ${lp}) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Pretendard-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${ap.primary};
    color: ${ip.primary};
    line-height: 1.6;
    overflow-x: hidden;
    cursor: none;
    
    @media (max-width: ${lp}) {
      cursor: auto;
    }
  }

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${ap.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${ip.tertiary};
    border-radius: 4px;
    
    &:hover {
      background: ${ip.secondary};
    }
  }

  /* 선택 색상 */
  ::selection {
    background: ${rp};
    color: white;
  }

  /* 링크 기본 스타일 */
  a {
    color: inherit;
    text-decoration: none;
    cursor: none;
    
    @media (max-width: ${lp}) {
      cursor: pointer;
    }
  }

  /* 버튼 기본 스타일 */
  button {
    font-family: inherit;
    cursor: none;
    
    @media (max-width: ${lp}) {
      cursor: pointer;
    }
  }

  /* 리스트 스타일 제거 */
  ul, ol {
    list-style: none;
  }

  /* 이미지 기본 스타일 */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* 제목 스타일 */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  h1 {
    font-family: 'Pretendard-Bold';
    font-size: 3.5rem;
    
    @media (max-width: ${lp}) {
      font-size: 2.5rem;
    }
    
    @media (max-width: ${sp}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-family: 'Pretendard-Bold';
    font-size: 2.5rem;
    
    @media (max-width: ${lp}) {
      font-size: 2rem;
    }
    
    @media (max-width: ${sp}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-family: 'Pretendard-SemiBold';
    font-size: 2rem;
    
    @media (max-width: ${lp}) {
      font-size: 1.5rem;
    }
    
    @media (max-width: ${sp}) {
      font-size: 1.25rem;
    }
  }

  /* 코드 블록 스타일 */
  code {
    font-family: 'Fira Code', monospace;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  pre {
    font-family: 'Fira Code', monospace;
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    
    code {
      background: none;
      padding: 0;
    }
  }

  /* 애니메이션 최적화 */
  * {
    will-change: auto;
  }

  /* 모바일 터치 최적화 */
  @media (max-width: ${lp}) {
    * {
      -webkit-tap-highlight-color: transparent;
    }
  }

  /* 프린트 스타일 */
  @media print {
    body {
      background: white;
      color: black;
    }
  }
`);class Ep extends t.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=Fu(e)&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Pp(e){let{children:n,isPresent:r,anchorX:i,root:a}=e;const o=(0,t.useId)(),s=(0,t.useRef)(null),l=(0,t.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=(0,t.useContext)(fn);return(0,t.useInsertionEffect)(()=>{const{width:e,height:t,top:n,left:d,right:u}=l.current;if(r||!s.current||!e||!t)return;const p="left"===i?`left: ${d}`:`right: ${u}`;s.current.dataset.motionPopId=o;const h=document.createElement("style");c&&(h.nonce=c);const m=a??document.head;return m.appendChild(h),h.sheet&&h.sheet.insertRule(`\n          [data-motion-pop-id="${o}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${p}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{m.contains(h)&&m.removeChild(h)}},[r]),(0,So.jsx)(Ep,{isPresent:r,childRef:s,sizeRef:l,children:t.cloneElement(n,{ref:s})})}const zp=e=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:c,root:d}=e;const u=gn(Tp),p=(0,t.useId)();let h=!0,m=(0,t.useMemo)(()=>(h=!1,{id:p,initial:r,isPresent:i,custom:o,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;a&&a()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[i,u,a]);return s&&h&&(m={...m}),(0,t.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[i]),t.useEffect(()=>{!i&&!u.size&&a&&a()},[i]),"popLayout"===l&&(n=(0,So.jsx)(Pp,{isPresent:i,anchorX:c,root:d,children:n})),(0,So.jsx)(Ll.Provider,{value:m,children:n})};function Tp(){return new Map}const Mp=e=>e.key||"";function Rp(e){const n=[];return t.Children.forEach(e,e=>{(0,t.isValidElement)(e)&&n.push(e)}),n}const Lp=e=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:c="left",root:d}=e;const[u,p]=yd(l),h=(0,t.useMemo)(()=>Rp(n),[n]),m=l&&!u?[]:h.map(Mp),f=(0,t.useRef)(!0),g=(0,t.useRef)(h),x=gn(()=>new Map),[v,b]=(0,t.useState)(h),[y,w]=(0,t.useState)(h);pi(()=>{f.current=!1,g.current=h;for(let e=0;e<y.length;e++){const t=Mp(y[e]);m.includes(t)?x.delete(t):!0!==x.get(t)&&x.set(t,!1)}},[y,m.length,m.join("-")]);const j=[];if(h!==v){let e=[...h];for(let t=0;t<y.length;t++){const n=y[t],r=Mp(n);m.includes(r)||(e.splice(t,0,n),j.push(n))}return"wait"===s&&j.length&&(e=j),w(Rp(e)),b(h),null}const{forceRender:k}=(0,t.useContext)(xl);return(0,So.jsx)(So.Fragment,{children:y.map(e=>{const t=Mp(e),n=!(l&&!u)&&(h===y||m.includes(t));return(0,So.jsx)(zp,{isPresent:n,initial:!(f.current&&!i)&&void 0,custom:r,presenceAffectsLayout:o,mode:s,root:d,onExitComplete:n?void 0:()=>{if(!x.has(t))return;x.set(t,!0);let e=!0;x.forEach(t=>{t||(e=!1)}),e&&(k?.(),w(g.current),l&&p?.(),a&&a())},anchorX:c,children:e},t)})})};var Ip={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bp=t.createContext&&t.createContext(Ip),Np=["attr","size","title"];function Op(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Dp(){return Dp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dp.apply(this,arguments)}function Fp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Vp(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fp(Object(n),!0).forEach(function(t){_p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fp(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hp(e){return e&&e.map((e,n)=>t.createElement(e.tag,Vp({key:n},e.attr),Hp(e.child)))}function $p(e){return n=>t.createElement(Up,Dp({attr:Vp({},e.attr)},n),Hp(e.child))}function Up(e){var n=n=>{var r,{attr:i,size:a,title:o}=e,s=Op(e,Np),l=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",Dp({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:Vp(Vp({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&t.createElement("title",null,o),e.children)};return void 0!==Bp?t.createElement(Bp.Consumer,null,e=>n(e)):n(Ip)}function Kp(e){return $p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"},child:[]}]})(e)}function Wp(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"},child:[]}]})(e)}function Gp(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(e)}function Xp(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(e)}function Yp(e){return $p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"},child:[]}]})(e)}function Qp(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(e)}function qp(e){return $p({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Jp(e){return $p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(e)}function Zp(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(e)}function eh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(e)}function th(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function nh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"},child:[]}]})(e)}function rh(e){return $p({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(e)}function ih(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"},child:[]}]})(e)}function ah(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function oh(e){return $p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(e)}function sh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function lh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"},child:[]}]})(e)}function ch(e){return $p({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function dh(e){return $p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(e)}function uh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(e)}function ph(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function hh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function mh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function fh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function gh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function xh(e){return $p({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function vh(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"},child:[]}]})(e)}function bh(e){return $p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"},child:[]}]})(e)}function yh(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function wh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(e)}function jh(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}function kh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"},child:[]}]})(e)}function Sh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function Ah(e){return $p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(e)}function Ch(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function Eh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Ph(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}function zh(e){return $p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(e)}function Th(e){return $p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747l-19.579 20.884zm51.295 50.479l-27.453-7.97a5.402 5.402 0 0 1-3.681-6.692l61.44-211.626a5.402 5.402 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681zm160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879z"},child:[]}]})(e)}function Mh(e){return $p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"},child:[]}]})(e)}function Rh(e){return $p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"},child:[]}]})(e)}function Lh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"},child:[]}]})(e)}function Ih(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(e)}function Bh(e){return $p({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function Nh(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function Oh(e){return $p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function Dh(e){return $p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"},child:[]}]})(e)}function Fh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function Vh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(e)}function _h(e){return $p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function Hh(e){return $p({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"},child:[]}]})(e)}function $h(e){return $p({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Uh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Kh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function Wh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(e)}function Gh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function Xh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"},child:[]}]})(e)}function Yh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(e)}function Qh(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function qh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function Jh(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(e)}function Zh(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(e)}function em(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}function tm(e){return $p({tag:"svg",attr:{viewBox:"0 0 616 512"},child:[{tag:"path",attr:{d:"M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"},child:[]}]})(e)}function nm(e){return $p({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function rm(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function im(e){return $p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(e)}function am(e){return $p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function om(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function sm(e){return $p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(e)}function lm(e){return $p({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(e)}function cm(e){return $p({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(e)}const dm=n.p+"static/media/\uc804\uc601\ud638 - Butter-Fly [\ub514\uc9c0\ubaac \uc5b4\ub4dc\ubca4\ucc98] [\uac00\uc0acLyrics].0c02d4b793541fe245b9.mp3",um=n.p+"static/media/HUNTRX (\ud5cc\ud2b8\ub9ad\uc2a4) - How Its Done [\uac00\uc0ac  Lyrics].735ca3cd1e5212faae69.mp3";console.log("Music file paths:",{musicFile1:dm,musicFile2:um});const pm=Gt(tp.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: ${lp}) {
    padding: 0 20px;
    height: 70px;
  }

  @media (max-width: ${sp}) {
    height: 60px;
    padding: 0 15px;
  }
`,hm=Gt(tp.div)`
  font-family: 'Pretendard-Bold';
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 1002;

  @media (max-width: ${sp}) {
    font-size: 1.5rem;
  }
`,mm=Gt(tp.nav)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 40px;

  @media (max-width: ${cp}) {
    gap: 30px;
  }

  @media (max-width: ${lp}) {
    position: fixed;
    top: 0;
    left: ${e=>e.$isOpen?"0":"-100%"};
    transform: none;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
`,fm=Gt(tp.a)`
  font-family: 'Pretendard-Medium';
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  letter-spacing: 0.01em;

  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover {
    color: white;

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${lp}) {
    font-size: 1.8rem;
    color: white;
    
    &::before {
      bottom: -6px;
      height: 2px;
    }
  }
`,gm=Gt.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: ${sp}) {
    gap: 20px;
  }
`,xm=Gt(tp.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(28, 28, 28, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  padding: 6px 16px 6px 10px;
  min-width: 280px;

  @media (max-width: ${cp}) {
    min-width: 250px;
    gap: 12px;
    padding: 5px 14px 5px 8px;
  }

  @media (max-width: ${lp}) {
    display: none;
  }
`,vm=Gt(tp.div)`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background: linear-gradient(135deg, #1db954 0%, #191414 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%);
  }

  svg {
    z-index: 1;
  }
`,bm=Gt.div`
  flex: 1;
  min-width: 0;

  .track-name {
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1px;
  }

  .artist-name {
    font-size: 0.7rem;
    font-family: 'Pretendard-Regular';
    color: rgba(255, 255, 255, 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,ym=Gt.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,wm=Gt(tp.button)`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`,jm=Gt(tp.button)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: white;
  border: none;
  color: black;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease;

  svg {
    position: relative;
    left: ${e=>e.$isPlaying?"0":"1px"};
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`,km=Gt.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
`,Sm=Gt(tp.button)`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`,Am=Gt.input`
  width: 50px;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`,Cm=Gt.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  overflow: hidden;
`,Em=Gt.div`
  height: 100%;
  background: #1db954;
  border-radius: 1px;
  transition: width 0.1s linear;
`,Pm=Gt(tp.button)`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  z-index: 1002;

  @media (max-width: ${lp}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,zm=Gt(tp.div)`
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;

  @media (max-width: ${lp}) {
    display: none;
  }
`,Tm=Gt(tp.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$active?"white":"rgba(255, 255, 255, 0.2)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`,Mm=Gt(tp.div)`
  position: fixed;
  top: 80px;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform-origin: left;
  z-index: 999;

  @media (max-width: ${lp}) {
    top: 70px;
  }

  @media (max-width: ${sp}) {
    top: 60px;
  }
`,Rm=()=>{const e=fa(),[n,r]=(0,t.useState)(!1),[i,a]=(0,t.useState)(!1),[o,s]=(0,t.useState)(.5),[l,c]=(0,t.useState)(!1),[d,u]=(0,t.useState)(0),[p,h]=(0,t.useState)(0),[m,f]=(0,t.useState)("home"),[g,x]=(0,t.useState)(0),v=(0,t.useRef)(null),b=(0,t.useRef)(null),y=[{file:dm,name:"Butter-Fly",artist:"\uc804\uc601\ud638 \u2022 \ub514\uc9c0\ubaac \uc5b4\ub4dc\ubca4\ucc98"},{file:um,name:"How Its Done",artist:"HUNTRX (\ud5cc\ud2b8\ub9ad\uc2a4)"}],w=y[g];(0,t.useEffect)(()=>{v.current&&(v.current.pause(),v.current.src=""),v.current=new Audio(w.file),v.current.volume=l?0:o,v.current.loop=!0;const e=()=>{console.log("Audio loaded successfully:",w.name)},t=e=>{console.error("Audio loading error:",e)},n=()=>{j()};if(v.current.addEventListener("loadeddata",e),v.current.addEventListener("error",t),v.current.addEventListener("ended",n),i){const e=v.current.play();void 0!==e&&e.catch(e=>{console.error("Auto-play failed:",e),a(!1)})}return()=>{b.current&&clearInterval(b.current),v.current&&(v.current.removeEventListener("loadeddata",e),v.current.removeEventListener("error",t),v.current.removeEventListener("ended",n),v.current.pause(),v.current.src="")}},[g]),(0,t.useEffect)(()=>(i&&v.current?b.current=setInterval(()=>{if(v.current&&v.current.duration){const e=v.current.currentTime/v.current.duration*100;u(e)}},100):b.current&&clearInterval(b.current),()=>{b.current&&clearInterval(b.current)}),[i]),(0,t.useEffect)(()=>{v.current&&(v.current.volume=l?0:o)},[o,l]);const j=()=>{x(e=>e===y.length-1?0:e+1),u(0)};(0,t.useEffect)(()=>{const e=()=>{const e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight;h(e/t*100);const n=["home","about","skills","experience","projects","education","contact"].find(e=>{const t=document.getElementById(e);if(t){const e=t.getBoundingClientRect();return e.top<=100&&e.bottom>=100}return!1});n&&f(n)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);return(0,So.jsxs)(So.Fragment,{children:[(0,So.jsxs)(pm,{initial:{y:-100},animate:{y:0},transition:{duration:.6,ease:"easeOut"},children:[(0,So.jsx)(hm,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{e("/"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100)},children:"DONGKYU"}),(0,So.jsx)(mm,{$isOpen:n,children:[{name:"HOME",href:"#home"},{name:"ABOUT",href:"#about"},{name:"SKILLS",href:"#skills"},{name:"EXPERIENCE",href:"#experience"},{name:"PROJECTS",href:"#projects"},{name:"EDUCATION",href:"#education"},{name:"CONTACT",href:"#contact"}].map((e,t)=>(0,So.jsx)(fm,{href:e.href,onClick:t=>((e,t)=>{e.preventDefault();const n=t.replace("#","");if(window.location.hash.includes("/project/"))return void(window.location.href=`${window.location.pathname}#${t}`);const i=document.getElementById(n);i&&(i.scrollIntoView({behavior:"smooth"}),r(!1))})(t,e.href),initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*t},whileHover:{y:-2},children:e.name},e.name))}),(0,So.jsxs)(gm,{children:[(0,So.jsxs)(xm,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},children:[(0,So.jsx)(vm,{animate:i?{rotate:360}:{},transition:{duration:3,repeat:1/0,ease:"linear"},children:(0,So.jsx)(rh,{})}),(0,So.jsxs)(bm,{children:[(0,So.jsx)("div",{className:"track-name",children:w.name}),(0,So.jsx)("div",{className:"artist-name",children:w.artist})]}),(0,So.jsxs)(ym,{children:[(0,So.jsx)(wm,{onClick:()=>{x(e=>0===e?y.length-1:e-1),u(0)},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,So.jsx)(Zh,{})}),(0,So.jsx)(jm,{$isPlaying:i,onClick:async()=>{if(v.current)try{if(i)v.current.pause(),a(!1);else{const e=v.current.play();void 0!==e&&e.then(()=>{a(!0)}).catch(e=>{console.error("Audio playback failed:",e),"NotAllowedError"===e.name&&console.log("User interaction required for audio playback")})}}catch(e){console.error("Toggle play/pause error:",e)}},whileHover:{scale:1.1},whileTap:{scale:.9},children:i?(0,So.jsx)(Wh,{}):(0,So.jsx)(Yh,{})}),(0,So.jsx)(wm,{onClick:j,whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,So.jsx)(em,{})}),(0,So.jsxs)(km,{children:[(0,So.jsx)(Sm,{onClick:()=>{c(!l)},whileHover:{scale:1.1},whileTap:{scale:.9},children:l||0===o?(0,So.jsx)(sm,{}):(0,So.jsx)(lm,{})}),(0,So.jsx)(Am,{type:"range",min:"0",max:"100",value:l?0:100*o,onChange:e=>{const t=parseFloat(e.target.value)/100;s(t),c(0===t)}})]})]}),(0,So.jsx)(Cm,{children:(0,So.jsx)(Em,{style:{width:`${d}%`}})})]}),(0,So.jsx)(Pm,{onClick:()=>r(!n),whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,So.jsx)(Lp,{mode:"wait",children:n?(0,So.jsx)(tp.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:(0,So.jsx)(nm,{})},"close"):(0,So.jsx)(tp.div,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.2},children:(0,So.jsx)(sh,{})},"menu")})})]})]}),(0,So.jsx)(Mm,{style:{scaleX:p/100},transition:{duration:.1}}),(0,So.jsx)(zm,{children:["home","about","skills","experience","projects","education","contact"].map((e,t)=>(0,So.jsx)(Tm,{$active:m===e,onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})})(e),initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{delay:.5+.1*t},whileHover:{scale:1.5}},e))})]})},Lm={personal:{name:"\uae40\ub3d9\uaddc",englishName:"Dongkyu Kim",title:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",birth:"1993.01.05",address:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc591\ucc9c\uad6c",phone:"010-4048-8292",email:"wlsntus55@gmail.com",salary:"3600\ub9cc\uc6d0 (\ud611\uc758\uac00\ub2a5)",links:{portfolio:"https://dongkyu.shop/",github:"https://github.com/dongkyukim1?tab=repositories",blog:"https://begin-developer.tistory.com/",playstore:"https://play.google.com/apps/testing/com.littlebank.littlebank_prod",tripplai:"https://tripplai.vercel.app/"}},about:{introduction:"\ub04a\uc784\uc5c6\uc774 \ub3c4\uc804\ud558\uace0 \uc131\uc7a5\ud558\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4. React, Next.js, Flutter \ub4f1 \ub2e4\uc591\ud55c \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud65c\uc6a9\ud574 \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc758 \uc6f9\xb7\uc571 \uc11c\ube44\uc2a4\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \ube44\uc804\uacf5\uc790\uc5d0\uc11c \uc2dc\uc791\ud574 \ud604\uc7ac \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790\ub85c \uc7ac\uc9c1\ud558\uba70, \ubbf8\uad6d \uad50\ud658\ud559\uc0dd\uacfc \uae00\ub85c\ubc8c \ube44\uc988\ub2c8\uc2a4 \uacbd\ud5d8\uc744 \ubc14\ud0d5\uc73c\ub85c \uad6d\uc81c\uc801 \uac10\uac01\uacfc \ucc3d\uc758\uc801 \uc0ac\uace0\ub85c \ubb38\uc81c\ub97c \ud574\uacb0\ud569\ub2c8\ub2e4. LittleBank, TripplAI, DevHub \ub4f1 \uc2e4\uc81c \uc11c\ube44\uc2a4 \uac1c\ubc1c\uacfc PM \uacbd\ud5d8\uc744 \ud1b5\ud574 \uae30\uc220\uacfc \ube44\uc988\ub2c8\uc2a4\ub97c \uc5f0\uacb0\ud558\ub294 \uac1c\ubc1c\uc790\ub85c \uc131\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",motivation:"\uc2a4\ub9c8\ud2b8\uc2a4\ud1a0\uc5b4\ub97c 6\ub144\uac04 \uc6b4\uc601\ud558\uba70 \uc628\ub77c\uc778 \ube44\uc988\ub2c8\uc2a4\uc758 \ud55c\uacc4\ub97c \uc9c1\uc811 \uccb4\uac10\ud588\uc2b5\ub2c8\ub2e4. \ub2e8\uc21c\ud788 \uc0c1\ud488\uc744 \ub4f1\ub85d\ud558\uace0 \ud310\ub9e4\ud558\ub294 \uac83\uc5d0\uc11c \ubc97\uc5b4\ub098, \uace0\uac1d \ub370\uc774\ud130 \ubd84\uc11d\uacfc \ub9de\ucda4\ud615 \ub9c8\ucf00\ud305\uc758 \ud544\uc694\uc131\uc744 \uc808\uc2e4\ud788 \ub290\uaf08\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uae30\uc220\uc801 \uc9c0\uc2dd \uc5c6\uc774\ub294 \uc544\uc774\ub514\uc5b4\ub9cc \uc788\uc744 \ubfd0 \uc2e4\ud589\uc5d0 \ud55c\uacc4\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\n\nCJ \ubbf8\uad6d \ucd9c\uc7a5 \uc5c5\ubb34\ub97c \ud558\uba70 \ud604\uc9c0 \uc2a4\ud0c0\ud2b8\uc5c5\ub4e4\uc758 \uae30\uc220 \ud601\uc2e0\uc744 \ubaa9\uaca9\ud588\uc2b5\ub2c8\ub2e4. \uac19\uc740 \uc544\uc774\ub514\uc5b4\ub77c\ub3c4 \uae30\uc220\ub825\uc758 \ucc28\uc774\ub85c \uc644\uc804\ud788 \ub2e4\ub978 \uacb0\uacfc\ub97c \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \uac83\uc744 \ubcf4\uba70 \ucda9\uaca9\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uac04\ub2e8\ud55c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud558\ub098\ub85c \uc5c5\ubb34 \ud6a8\uc728\uc744 10\ubc30 \uc774\uc0c1 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \uac83\uc744 \uc9c1\uc811 \uacbd\ud5d8\ud558\uba70, '\uae30\uc220\uc774 \uace7 \uacbd\uc7c1\ub825'\uc774\ub77c\ub294 \uac83\uc744 \uae68\ub2ec\uc558\uc2b5\ub2c8\ub2e4.\n\n\uc601\uc5b4\ud559\uacfc \ucd9c\uc2e0\uc73c\ub85c\uc11c \uc548\uc815\uc801\uc778 \uae38\uc744 \ud3ec\uae30\ud558\uace0 \uac1c\ubc1c\uc790\ub85c \uc804\ud5a5\ud558\ub294 \uac83\uc740 \uc27d\uc9c0 \uc54a\uc740 \uacb0\uc815\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub354 \uc774\uc0c1 \uae30\uc220\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0 \uc9c1\uc811 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0 \uc2f6\uc5c8\uc2b5\ub2c8\ub2e4. \uad6d\ube44\uad50\uc721\uc744 \ud1b5\ud574 \uae30\ucd08\ub97c \ub2e4\uc9c4 \ud6c4, \uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\ub4e4\uc744 \uc9c4\ud589\ud558\uba70 '\ucf54\ub4dc\ub85c \uc544\uc774\ub514\uc5b4\ub97c \ud604\uc2e4\ud654\ud558\ub294 \uc990\uac70\uc6c0'\uc744 \ub290\uaf08\uace0, \uc774\uac83\uc774 \uc81c\uac00 \ud3c9\uc0dd \ud558\uace0 \uc2f6\uc740 \uc77c\uc784\uc744 \ud655\uc2e0\ud588\uc2b5\ub2c8\ub2e4.",growth:"\uc774\ub7ec\ud55c \uacbd\ud5d8\ub4e4\uc744 \ubc14\ud0d5\uc73c\ub85c \uac1c\ubc1c\uc790\ub85c\uc758 \uc9c4\ub85c \ubcc0\uacbd\uc744 \uacb0\uc2ec\ud588\uc2b5\ub2c8\ub2e4. \ube44\uc804\uacf5\uc790\ub85c\uc11c \uac1c\ubc1c \uae30\ucd08\ub97c \ud0c4\ud0c4\ud788 \ub2e4\uc9c0\uae30 \uc704\ud574 \uad6d\ube44\uc9c0\uc6d0 \uad50\uc721\uc744 \uc218\ub8cc\ud558\uba70 \uccb4\uacc4\uc801\uc778 \ud559\uc2b5\uc744 \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4. \uad50\uc721 \uacfc\uc815\uc5d0\uc11c \ub2e4\uc591\ud55c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucc38\uc5ec\ud558\uba70 \uc2e4\uc804 \uac10\uac01\uc744 \uc775\ud614\uace0, \uc6f9 \uac1c\ubc1c\uc758 \uc804\ubc18\uc801\uc778 \uacfc\uc815\uc744 \uc774\ud574\ud558\ub294 \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790\ub85c \uc131\uc7a5\ud558\uc5ec \ud604\uc7ac \uad00\ub828 \ubd84\uc57c\uc5d0 \uc7ac\uc9c1 \uc911\uc785\ub2c8\ub2e4. \ube44\ub85d \uc2dc\uc791\uc740 \ube44\uc804\uacf5\uc790\uc600\uc9c0\ub9cc, \uacbd\uc601\ud559\uc801 \uc0ac\uace0\uc640 \uc2e4\ubb34 \uacbd\ud5d8\uc744 \ud1b5\ud574 \uc0ac\uc6a9\uc790\uc758 \ub2c8\uc988\ub97c \uae4a\uc774 \uc774\ud574\ud558\uace0 \ube44\uc988\ub2c8\uc2a4 \uad00\uc810\uc5d0\uc11c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ub370 \uac15\uc810\uc774 \uc788\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uc55e\uc73c\ub85c\ub3c4 \ub04a\uc784\uc5c6\uc774 \ud559\uc2b5\ud558\uace0 \ub3c4\uc804\ud558\uba70, \ub2e4\uc591\ud55c \uc2dc\uac01\uc5d0\uc11c \ucc3d\uc758\uc801\uc778 \ud574\uacb0\ucc45\uc744 \uc81c\uc2dc\ud558\ub294 \uac1c\ubc1c\uc790\ub85c \uc131\uc7a5\ud574 \ub098\uac00\uaca0\uc2b5\ub2c8\ub2e4.",personality:{strength:"\ud611\uc5c5\uacfc \uc18c\ud1b5 \ub2a5\ub825. \ubbf8\uad6d \uad50\ud658\ud559\uc0dd \ubc0f \uad6d\ube44 \uad50\uc721 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c PL \uc5ed\ud560\uc744 \uc218\ud589\ud558\uba70 \ud300\uc6d0\ub4e4\uacfc\uc758 \uc6d0\ud65c\ud55c \uc18c\ud1b5\uacfc \uc758\uacac \uc870\uc728\uc744 \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \uc131\uacf5\uc801\uc73c\ub85c \uc774\ub048 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.",weakness:"\uc644\ubcbd\uc8fc\uc758 \uc131\ud5a5. \uc791\uc5c5 \uc18d\ub3c4\uac00 \ub290\ub824\uc9c0\ub294 \uacbd\ud5a5\uc774 \uc788\uc5b4, \uc6b0\uc120\uc21c\uc704\ub97c \uc815\ud558\uace0 \ud300\uc6d0\ub4e4\uacfc \uc0c1\uc758\ud558\uc5ec \ube60\ub974\uac8c \uc218\uc815\ud558\ub294 \uc5f0\uc2b5\uc744 \ud1b5\ud574 \ud6a8\uc728\uc801\uc73c\ub85c \uc5c5\ubb34\ub97c \uc218\ud589\ud558\uace0\uc790 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."},currentJob:{company:"\ub137\ucef4\uc194\ub8e8\uc158",position:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790",status:"\uc7ac\uc9c1\uc911"}},skills:{programming:["Java","Python","JavaScript"],frameworks:["Spring","Spring Boot","Flask","React","Next.js","Vue.js","Flutter","Android","RESTful API","Ajax","Java Swing","Thymeleaf"],databases:["MySQL","Oracle","PostgreSQL","Redis","MongoDB"],cloud:["AWS","Docker"],tools:["IntelliJ IDEA","PyCharm","Android Studio","VSCode","Eclipse","Git","Maven/Gradle"],collaboration:["Slack","Notion","Figma","Discord"],servers:["Apache Tomcat","Gunicorn","Node.js"],others:["HTML","CSS","LLM","Swagger"]},experience:[{company:"\ub137\ucef4\uc194\ub8e8\uc158",position:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790",period:"2024.10 ~ \ud604\uc7ac",description:"LGU+ MCS \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc81c\ub124\uc2dc\uc2a4\ud074\ub77c\uc6b0\ub4dc \ucf5c\uc2dc\uc2a4\ud15c \uac1c\ubc1c",type:"employment",current:!0},{company:"LittleBank",position:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 & PM",period:"2024.03 ~ 2024.07",description:"\uc5b4\ub9b0\uc774 \ub3d9\uae30\ubd80\uc5ec \ubaa8\ubc14\uc77c \uc571 \uac1c\ubc1c \ubc0f \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac",type:"project",skills:["Flutter","Dart","Firebase","Project Management"]},{company:"TripplAI",position:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 & PM",period:"2024.03 ~ \ud604\uc7ac",description:"AI \uae30\ubc18 \uc5ec\ud589 \ucd94\ucc9c \uc11c\ube44\uc2a4 \uac1c\ubc1c \ubc0f \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac",type:"project",current:!0,skills:["Next.js","React","TypeScript","AI Integration"]},{company:"DevHub",position:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 & PM",period:"2024.06 ~ 2024.10",description:"\uac1c\ubc1c\uc790 \ucee4\ubba4\ub2c8\ud2f0 \ud50c\ub7ab\ud3fc \uad6c\ucd95 \ubc0f \ud504\ub85c\uc81d\ud2b8 \ub9ac\ub529",type:"project",skills:["React","Node.js","MongoDB","Docker"]},{company:"CJ \uc0b0\ud558",position:"\ud574\uc678 \ucd9c\uc7a5 \ub2f4\ub2f9\uc790",period:"2022.12 ~ 2023.06",description:"\ubbf8\uad6d \ud604\uc9c0 \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac \ubc0f \uae00\ub85c\ubc8c \ube44\uc988\ub2c8\uc2a4 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158",location:"\ubbf8\uad6d",type:"employment"},{company:"Droplist",position:"\ub124\uc774\ubc84 \uc2a4\ub9c8\ud2b8\uc2a4\ud1a0\uc5b4 \uc6b4\uc601\uc790",period:"2018.04 ~ 2024.01",description:"\uc774\ucee4\uba38\uc2a4 \ud50c\ub7ab\ud3fc \uc6b4\uc601 \ubc0f \uc628\ub77c\uc778 \ube44\uc988\ub2c8\uc2a4 \uad00\ub9ac",type:"business"},{company:"\uc601\uc5b4\ud559\uc6d0",position:"\uc601\uc5b4 \uac15\uc0ac",period:"2017.06 ~ 2018.03",description:"\ucd08\ub4f1\ud559\uad50 4\ud559\ub144\ubd80\ud130 \uace0\ub4f1\ud559\uad50 3\ud559\ub144\uae4c\uc9c0 \uc601\uc5b4 \uad50\uc721",type:"employment"}],projects:[{title:"DevHub: \uae43\ubcf4\ub2e4 \uc27d\uac8c '\ud615\uc0c1\uad00\ub9ac'\uc640 '\ucf54\ub4dc\ub9ac\ubdf0'",period:"2024.06 ~ 2024.10",role:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 & PM",description:"\uae43(Git)\ubcf4\ub2e4 \uc27d\uace0 \ud3b8\ud558\uac8c \ud615\uc0c1\uad00\ub9ac\ub97c \ud558\ub294 \uac1c\ubc1c\uc790 \ud615\uc0c1\uad00\ub9ac \uc0ac\uc774\ud2b8",features:["AI \ucf54\ub4dc \ub9ac\ubdf0 \uc2dc\uc2a4\ud15c: LLM \ubaa8\ub378(Groq\ub97c \uc774\uc6a9\ud55c Llama API \uc0ac\uc6a9)\uc744 \ud65c\uc6a9\ud55c \ucf54\ub4dc \ud488\uc9c8, \ucd5c\uc801\ud654, \ubcf4\uc548 \ucde8\uc57d\uc810 \uc2dd\ubcc4 \ubc0f \uc0c1\uc138 \ud53c\ub4dc\ubc31 \uc81c\uacf5. \uc751\ub2f5 \uc18d\ub3c4 \uac1c\uc120 (0.45\ucd08)","\ucabd\uc9c0 \uc54c\ub9bc \uc2dc\uc2a4\ud15c: \uc900\uc2e4\uc2dc\uac04 \uc54c\ub9bc \uad6c\ud604\uc744 \uc704\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc8fc\uae30\uc801\uc73c\ub85c GET API \ud638\ucd9c\ub85c \uc0c8 \ucabd\uc9c0 \ud655\uc778","\ubc30\ud3ec: Flask\uc640 Spring Boot \ud504\ub85c\uc81d\ud2b8\ub97c Docker\uc640 AWS(EC2, RDS, ElastiCache, Route53)\ub97c \uc774\uc6a9\ud574 \ubc30\ud3ec"],tech:["React","Python","Flask","Java","Spring Boot","Docker","AWS","MongoDB","Redis"],challenges:["\uc774\uba54\uc77c API \uc804\uc1a1 \uc18d\ub3c4 \ubb38\uc81c: @Async \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud65c\uc6a9\ud55c \ube44\ub3d9\uae30 \ubc29\uc2dd\uc73c\ub85c \ud3c9\uade0 0.017\ucd08\ub85c \ub2e8\ucd95","AI \ucf54\ub4dc\ub9ac\ubdf0 \uc2dc\uc2a4\ud15c: Groq Llama API\ub85c \ubcc0\uacbd\ud558\uc5ec \uc751\ub2f5 \uc18d\ub3c4 0.45\ucd08 \ub2ec\uc131"]},{title:"LittleBank",period:"2024.03 ~ 2024.07",role:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 & PM",description:"\uc5b4\ub9b0\uc774\ub97c \uc704\ud55c \ub3d9\uae30\ubd80\uc5ec \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158",features:["\uac00\uc0c1 \uc740\ud589 \uc2dc\uc2a4\ud15c \uad6c\ud604","\uac8c\uc774\ubbf8\ud53c\ucf00\uc774\uc158\uc744 \ud1b5\ud55c \ub3d9\uae30\ubd80\uc5ec","\ubd80\ubaa8-\uc790\ub140 \uc5f0\ub3d9 \uacc4\uc88c \uad00\ub9ac"],tech:["Flutter","Dart","Firebase","Spring Boot","MySQL","AWS"],status:"Google Play Store \ube44\uacf5\uac1c \ud14c\uc2a4\ud2b8 \uc911"},{title:"TripplAI",period:"2024.03 ~ \ud604\uc7ac",role:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 & PM",description:"AI \uae30\ubc18 \ub9de\ucda4\ud615 \uc5ec\ud589 \ucd94\ucc9c \uc11c\ube44\uc2a4",features:["AI\ub97c \ud65c\uc6a9\ud55c \uac1c\uc778\ud654 \uc5ec\ud589 \uc77c\uc815 \uc0dd\uc131","\uc2e4\uc2dc\uac04 \uc5ec\ud589 \uc815\ubcf4 \uc81c\uacf5","\uc0ac\uc6a9\uc790 \uc120\ud638\ub3c4 \uae30\ubc18 \ucd94\ucc9c \uc54c\uace0\ub9ac\uc998"],tech:["Next.js","React","TypeScript","Python","FastAPI","OpenAI API","Vercel"],status:"\uad00\uad11 API \uacf5\ubaa8\uc804 \uc9c4\ucd9c",link:"https://tripplai.vercel.app/"}],education:[{school:"\uac74\uad6d\ub300\ud559\uad50",major:"\uc601\uc5b4\ud559\uacfc, \uacbd\uc601\ud559\uacfc",period:"~ 2018\ub144 \uc878\uc5c5",type:"\ud559\uc0ac"},{school:"\ubbf8\uc2dc\uc2dc\ud53c \uc8fc\ub9bd\ub300\ud559\uad50 (\ubbf8\uc2dc\uc2dc\ud53c)",major:"\uacbd\uc601\ud559\uacfc",period:"~ 2017\ub144 \uc878\uc5c5",type:"\ud559\uc0ac"},{school:"\uc591\ucc9c\uace0\ub4f1\ud559\uad50 (\uc11c\uc6b8)",major:"\uc778\ubb38\uacc4 \uc774\uacfc",period:"2008.03 ~ 2011.02",type:"\uace0\ub4f1\ud559\uad50"}],training:[{name:"\ube45\ub370\uc774\ud130 \uae30\ubc18 \uc778\uacf5\uc9c0\ub2a5 \uc735\ud569\uc11c\ube44\uc2a4 \uac1c\ubc1c\uc790 \uc591\uc131 \uacfc\uc815",organization:"KOSMO \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc778\uc7ac\uac1c\ubc1c\uc6d0",period:"2024.03 ~ 2024.08.27",status:"\uc218\ub8cc"},{name:"\uacbd\uc601\ud559 \uacfc\uc815",organization:"\ubbf8\uc2dc\uc2dc\ud53c \uc8fc\ub9bd\ub300\ud559\uad50",period:"2017.01 ~ 2017.07",status:"\uc774\uc218"}],certificates:[{name:"SQLD \uac1c\ubc1c\uc790 \uc790\uaca9\uc99d",date:"2024\ub144",status:"\ucde8\ub4dd"},{name:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac",date:"2024\ub144 05\uc6d4 17\uc77c",status:"\ud544\uae30 \ud569\uaca9 (\uc2e4\uae30 \uc9c4\ud589 \uc911)"},{name:"TOEIC",score:"900\uc810",status:"\ub9cc\ub8cc"}],goals:["\uc9c0\uc18d\uc801\uc778 \ud559\uc2b5\uacfc \uc131\uc7a5: \ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 IT \ubd84\uc57c\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uae30\uc220\uacfc \ud2b8\ub80c\ub4dc\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \ud559\uc2b5","\ud300\uc6cc\ud06c\uc640 \ud611\uc5c5 \uac15\ud654: \uae00\ub85c\ubc8c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ubc0f \ud611\uc5c5 \uc815\uc2e0\uc744 \ubc14\ud0d5\uc73c\ub85c \ud300\uc6d0\ub4e4\uacfc\uc758 \uc6d0\ud65c\ud55c \ud611\uc5c5","\ucc3d\uc758\uc801 \ubb38\uc81c \ud574\uacb0: \uacbd\uc601\ud559\uc5d0\uc11c \ubc30\uc6b4 \ubd84\uc11d\uc801 \uc0ac\uace0\uc640 \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc744 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0 \uc801\uc6a9","\ucc45\uc784\uac10\uacfc \uc131\uc2e4\ud568: \ub9e1\uc740 \uc5c5\ubb34\uc5d0 \ucc45\uc784\uac10\uc744 \uac00\uc9c0\uace0 \uc131\uc2e4\ud558\uac8c \uc218\ud589","\uace0\uac1d \uc911\uc2ec\uc758 \uc11c\ube44\uc2a4 \uc81c\uacf5: \uace0\uac1d\uc758 \uc694\uad6c\ub97c \uc815\ud655\ud788 \uc774\ud574\ud558\uace0 \ub9cc\uc871\uc2dc\ud0a4\ub294 \uc11c\ube44\uc2a4 \uc81c\uacf5"]},Im=n.p+"static/media/devhub.42247c6b720f6c3341c7.mp4",Bm=n.p+"static/media/trippai.5d89260c58fc1557023b.mp4",Nm=n.p+"static/media/littlebank.b52ecd0cdbff5b1d72ad.mp4",Om=n.p+"static/media/drawing.e76d0817b8239bf14e3b.png",Dm=Gt.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 120px 20px 40px;

  @media (max-width: ${lp}) {
    padding: 100px 20px 40px;
  }

  @media (max-width: ${sp}) {
    padding: 90px 20px 30px;
    min-height: calc(100vh - 60px);
  }
`,Fm=Gt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`,Vm=Gt(tp.div)`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 100px 100px;
  transform-origin: center;
`,_m=Gt(tp.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.gradient||"radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)"};
  filter: blur(${e=>e.blur||"1px"});
`,Hm=Gt(tp.div)`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: rgba(59, 130, 246, 0.3);
  white-space: nowrap;
  user-select: none;
`,$m=Gt(tp.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${e=>e.color||"rgba(59, 130, 246, 0.6)"};
  border-radius: 50%;
  pointer-events: none;
`,Um=Gt(tp.div)`
  position: absolute;
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  border-top-color: rgba(59, 130, 246, 0.6);
  border-right-color: transparent;
`,Km=Gt(tp.div)`
  position: absolute;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.6), transparent);
`,Wm=Gt(tp.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 2;
`,Gm=Gt(tp.div)`
  position: absolute;
  bottom: -10%;
  right: 5%;
  width: 600px;
  height: 600px;
  z-index: 2;
  pointer-events: none;
  opacity: 0.08;
  
  @media (max-width: ${cp}) {
    width: 500px;
    height: 500px;
    bottom: -15%;
  }
  
  @media (max-width: ${lp}) {
    width: 400px;
    height: 400px;
    bottom: -20%;
    right: -10%;
  }

  @media (max-width: ${sp}) {
    width: 300px;
    height: 300px;
    bottom: -25%;
    right: -15%;
  }
`,Xm=Gt(tp.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: invert(1) brightness(1.5) contrast(0.8);
`,Ym=Gt(tp.div)`
  position: absolute;
  top: -20px;
  left: -40px;
  right: -40px;
  bottom: -20px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59, 130, 246, 0.03),
    transparent
  );
  z-index: -1;
  pointer-events: none;
`,Qm=Gt(tp.div)`
  position: absolute;
  width: ${e=>e.width||"100px"};
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  transform-origin: left center;
`,qm=Gt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`,Jm=Gt(tp.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: ${e=>e.borderRadius||"50%"};
  background: transparent;
`,Zm=Gt(tp.div)`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 18px;
  color: rgba(102, 126, 234, 0.5);
  font-weight: 500;
  user-select: none;
`,ef=Gt(tp.div)`
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(102, 126, 234, 0.6);
  border-radius: 50%;
  pointer-events: none;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-20px) translateX(10px);
    }
    50% {
      transform: translateY(-10px) translateX(-10px);
    }
    75% {
      transform: translateY(-30px) translateX(5px);
    }
  }
  
  animation: float var(--duration, 15s) var(--delay, 0s) infinite ease-in-out;
  animation-duration: ${e=>{var t;return(null===(t=e.style)||void 0===t?void 0:t.animationDuration)||"15s"}};
  animation-delay: ${e=>{var t;return(null===(t=e.style)||void 0===t?void 0:t.animationDelay)||"0s"}};
`,tf=Gt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: ${lp}) {
    padding: 0 1.5rem;
  }

  @media (max-width: ${sp}) {
    padding: 0 1rem;
  }
`,nf=Gt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${cp}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`,rf=Gt(tp.div)`
  color: white;
`,af=Gt(tp.p)`
  font-size: 1.3rem;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  letter-spacing: -0.02em;

  @media (max-width: ${sp}) {
    font-size: 1.1rem;
  }
`,of=Gt(tp.h1)`
  font-size: 4.2rem;
  font-family: 'Pretendard-Bold';
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.3;
  letter-spacing: -0.03em;
  padding: 0.5rem 0;
  overflow: visible;

  @media (max-width: ${lp}) {
    font-size: 3.2rem;
    line-height: 1.25;
    margin-bottom: 1.8rem;
  }

  @media (max-width: ${sp}) {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    padding: 0.3rem 0;
  }
`,sf=Gt(tp.h2)`
  font-size: 2.2rem;
  font-family: 'Pretendard-Medium';
  font-weight: 500;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  letter-spacing: -0.02em;

  @media (max-width: ${lp}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${sp}) {
    font-size: 1.5rem;
  }
`,lf=Gt(tp.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  letter-spacing: -0.01em;

  @media (max-width: ${lp}) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${sp}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,cf=Gt.span`
  display: inline-block;
`,df=Gt.span`
  display: inline-block;
  background-color: white;
  width: 3px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`,uf=Gt(tp.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: ${cp}) {
    justify-content: center;
  }

  @media (max-width: ${sp}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,pf=Gt(tp.a)`
  background: white;
  color: ${np};
  padding: 1.2rem 2.5rem;
  border-radius: 35px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-weight: 600;
  font-size: 1.05rem;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: ${sp}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`,hf=Gt(tp.a)`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
  padding: 1.2rem 2.5rem;
  border-radius: 35px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-weight: 600;
  font-size: 1.05rem;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;

  &:hover {
    background: white;
    color: ${np};
    transform: translateY(-3px);
    border-color: white;
  }

  @media (max-width: ${sp}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`,mf=Gt(tp.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,ff=Gt(tp.div)`
  position: relative;
  width: 550px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${cp}) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: ${sp}) {
    width: 350px;
    height: 350px;
  }
`,gf=Gt(tp.div)`
  position: relative;
  width: 480px;
  height: 320px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 20px 20px 8px 8px;
  padding: 25px 25px 20px 25px;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.4),
    0 15px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 2px solid #333;

  &::before {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 25px;
    background: linear-gradient(145deg, #4a4a4a, #666);
    border-radius: 0 0 15px 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -45px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 15px;
    background: linear-gradient(145deg, #666, #888);
    border-radius: 20px;
    box-shadow: 
      0 5px 20px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${cp}) {
    width: 400px;
    height: 260px;
    padding: 20px;
  }

  @media (max-width: ${sp}) {
    width: 320px;
    height: 200px;
    padding: 15px;
    
    &::before {
      width: 60px;
      height: 20px;
      bottom: -20px;
    }
    
    &::after {
      width: 150px;
      height: 12px;
      bottom: -35px;
    }
  }
`,xf=Gt(tp.div)`
  position: relative;
  width: 240px;
  height: 480px;
  background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
  border-radius: 45px;
  padding: 25px 15px;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 15px 30px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3);
  border: 3px solid #333;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 8px;
    background: linear-gradient(145deg, #2a2a2a, #444);
    border-radius: 8px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 6px;
    background: linear-gradient(145deg, #2a2a2a, #444);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${cp}) {
    width: 200px;
    height: 400px;
    padding: 20px 12px;
  }

  @media (max-width: ${sp}) {
    width: 180px;
    height: 360px;
    padding: 18px 10px;
    
    &::before {
      width: 70px;
      height: 20px;
      top: 6px;
    }
    
    &::after {
      width: 40px;
      height: 5px;
      bottom: 6px;
    }
  }
`,vf=Gt.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.1);
`,bf=Gt(tp.div)`
  position: absolute;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
  backdrop-filter: blur(15px);
  padding: 12px 24px;
  border-radius: 25px;
  color: white;
  font-family: 'Pretendard-SemiBold';
  font-size: 1.1rem;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);

  @media (max-width: ${cp}) {
    bottom: -55px;
    font-size: 1rem;
    padding: 10px 20px;
  }

  @media (max-width: ${sp}) {
    bottom: -45px;
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`,yf=Gt(tp.div)`
  display: flex;
  gap: 1.2rem;
  margin-top: 2.5rem;

  @media (max-width: ${cp}) {
    justify-content: center;
  }
`,wf=Gt(tp.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: ${np};
    transform: translateY(-3px);
  }
`,jf=[{name:"DevHub",type:"web",video:Im,description:"\uac1c\ubc1c\uc790 \ucee4\ubba4\ub2c8\ud2f0 \ud50c\ub7ab\ud3fc",route:"/project/devhub"},{name:"TripplAI",type:"web",video:Bm,description:"AI \uc5ec\ud589 \ucd94\ucc9c \uc11c\ube44\uc2a4",route:"/project/tripplai"},{name:"LittleBank",type:"app",video:Nm,description:"\uc5b4\ub9b0\uc774 \ub3d9\uae30\ubd80\uc5ec \uc571",route:"/project/littlebank"}],kf=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const[i,a]=(0,t.useState)(""),[o,s]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{const t=setTimeout(()=>{let t=0;const r=setInterval(()=>{t<e.length?(a(e.slice(0,t+1)),t++):(clearInterval(r),s(!0))},n);return()=>clearInterval(r)},r);return()=>clearTimeout(t)},[e,n,r]),{displayText:i,isComplete:o}},Sf={initial:{opacity:.3,scale:1},animate:{y:[0,-20,0],x:[0,10,0],opacity:[.3,.5,.3],scale:[1,1.1,1],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}},Af=()=>{const e=xn(0),n=xn(0),r=gi(e,{damping:50,stiffness:200}),i=gi(n,{damping:50,stiffness:200});gi(e,{damping:30,stiffness:100}),gi(n,{damping:30,stiffness:100});(0,t.useEffect)(()=>{const t=t=>{e.set(t.clientX-window.innerWidth/2),n.set(t.clientY-window.innerHeight/2)};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[e,n]);return(0,So.jsxs)(Fm,{children:[(0,So.jsx)(Wm,{style:{x:r,y:i}}),(0,So.jsx)(Gm,{animate:{y:[0,-30,0],rotate:[-5,5,-5]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},children:(0,So.jsx)(Xm,{src:Om,alt:"Creative Drawing"})}),[...Array(6)].map((e,t)=>(0,So.jsx)(Qm,{width:200*Math.random()+100+"px",style:{top:80*Math.random()+10+"%",left:80*Math.random()+10+"%",transform:`rotate(${180*Math.random()}deg)`},animate:{scaleX:[0,1,1,0],opacity:[0,.3,.3,0]},transition:{duration:6*Math.random()+4,repeat:1/0,delay:5*Math.random(),ease:"easeInOut"}},`line-${t}`)),(0,So.jsx)(Vm,{animate:{rotate:[0,360],scale:[1,1.1,1]},transition:{duration:60,repeat:1/0,ease:"linear"}}),[...Array(8)].map((e,t)=>(0,So.jsx)(_m,{style:{width:300*Math.random()+100,height:300*Math.random()+100,top:100*Math.random()+"%",left:100*Math.random()+"%"},gradient:`radial-gradient(circle, rgba(${t%3===0?"59, 130, 246":t%3===1?"147, 51, 234":"16, 185, 129"}, 0.1) 0%, transparent 70%)`,blur:3*Math.random()+1+"px",animate:{scale:[1,1.3,1],opacity:[.3,.7,.3],x:[0,100*Math.random()-50,0],y:[0,100*Math.random()-50,0]},transition:{duration:10*Math.random()+10,repeat:1/0,ease:"easeInOut",delay:2*t}},`orb-${t}`)),[...Array(5)].map((e,t)=>(0,So.jsx)(Um,{style:{width:150+50*t,height:150+50*t,top:20+15*t+"%",right:10+10*t+"%"},animate:{rotate:360},transition:{duration:10+5*t,repeat:1/0,ease:"linear"}},`ring-${t}`)),[...Array(12)].map((e,t)=>(0,So.jsx)(Km,{style:{height:200*Math.random()+100,left:100*Math.random()+"%",top:100*Math.random()+"%"},animate:{scaleY:[0,1,0],opacity:[0,1,0]},transition:{duration:3*Math.random()+2,repeat:1/0,delay:5*Math.random(),ease:"easeInOut"}},`stream-${t}`)),["const developer = new FrontendExpert();","React.useState(() => innovation);","Vue.createApp({ magic: true });","Flutter.build(() => dreams);","if (passion === true) { code(); }","function solve(problem) { return creativity; }","const skills = [...experience, learning];","export default Excellence;"].map((e,t)=>(0,So.jsx)(Hm,{style:{top:90*Math.random()+5+"%",left:80*Math.random()+10+"%",transform:`rotate(${30*Math.random()-15}deg)`},animate:{opacity:[0,1,1,0],y:[0,-20,-40,-60]},transition:{duration:8,repeat:1/0,delay:2*t,ease:"linear"},children:e},`code-${t}`)),[...Array(20)].map((e,t)=>(0,So.jsx)($m,{style:{top:100*Math.random()+"%",left:100*Math.random()+"%"},color:`rgba(${t%3===0?"59, 130, 246":t%3===1?"147, 51, 234":"16, 185, 129"}, 0.8)`,animate:{scale:[1,2,1],opacity:[.5,1,.5],x:[0,200*Math.random()-100,0],y:[0,200*Math.random()-100,0]},transition:{duration:8*Math.random()+5,repeat:1/0,ease:"easeInOut",delay:5*Math.random()}},`particle-${t}`))]})},Cf=Gt(tp.div)`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`,Ef=()=>{const{personal:e}=Lm,[n,r]=(0,t.useState)(0),i=fa(),a=kf("\uc548\ub155\ud558\uc138\uc694! \ud83d\udc4b",80,500),o=kf(`\uc800\ub294 ${e.name}\uc785\ub2c8\ub2e4`,120,2e3),s=kf(e.title,100,4500);(0,t.useEffect)(()=>{const e=setInterval(()=>{r(e=>(e+1)%jf.length)},4e3);return()=>clearInterval(e)},[]);const l=jf[n],c={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}}};return(0,So.jsxs)(Dm,{id:"home",children:[(0,So.jsx)(Af,{}),(0,So.jsx)(tf,{children:(0,So.jsxs)(nf,{children:[(0,So.jsxs)(rf,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.3,staggerChildren:.3}}},initial:"hidden",animate:"visible",children:[[...Array(5)].map((e,t)=>(0,So.jsx)(Qm,{style:{top:20+15*t+"%",left:10+10*t+"%",width:60+10*t+"px",transform:`rotate(${15*t-30}deg)`},animate:{opacity:[.1,.3,.1],scale:[1,1.1,1]},transition:{duration:4+.5*t,repeat:1/0,ease:"easeInOut",delay:.3*t}},t)),(0,So.jsx)(Ym,{animate:{opacity:[.03,.06,.03]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),(0,So.jsxs)(qm,{children:[(0,So.jsx)(Jm,{style:{top:"10%",left:"5%"},variants:Sf,initial:"initial",animate:"animate"}),(0,So.jsx)(Jm,{style:{top:"50%",right:"10%",clipPath:"polygon(50% 0%, 0% 100%, 100% 100%)"},animate:{rotate:[0,360],scale:[1,1.2,1],opacity:[.3,.6,.3]},transition:{duration:20,repeat:1/0,ease:"linear"}}),(0,So.jsx)(Jm,{style:{bottom:"15%",left:"15%",borderRadius:"10px"},animate:{rotate:[45,90,45],scale:[.8,1,.8],opacity:[.2,.4,.2]},transition:{duration:12,repeat:1/0,ease:"easeInOut"}}),(0,So.jsx)(Zm,{style:{top:"20%",right:"20%"},animate:{opacity:[0,1,0],y:[0,-10,0]},transition:{duration:3,repeat:1/0,delay:0,ease:"easeInOut"},children:"</>"}),(0,So.jsx)(Zm,{style:{bottom:"30%",left:"10%"},animate:{opacity:[0,1,0],x:[0,10,0]},transition:{duration:3.5,repeat:1/0,delay:1,ease:"easeInOut"},children:"const"}),(0,So.jsx)(Zm,{style:{top:"60%",left:"40%"},animate:{opacity:[0,1,0],scale:[.8,1,.8]},transition:{duration:4,repeat:1/0,delay:2,ease:"easeInOut"}}),[...Array(8)].map((e,t)=>(0,So.jsx)(ef,{style:{left:100*Math.random()+"%",top:100*Math.random()+"%",animationDelay:.8*t+"s",animationDuration:15+10*Math.random()+"s"}},t))]}),(0,So.jsxs)(af,{variants:c,children:[(0,So.jsx)(cf,{children:a.displayText}),!a.isComplete&&(0,So.jsx)(df,{children:"\xa0"})]}),(0,So.jsx)(of,{variants:c,children:(0,So.jsxs)("span",{style:{background:"linear-gradient(45deg, #ffd700, #ffed4a, #f59e0b)",backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent",WebkitTextFillColor:"transparent",display:"inline-block",filter:"drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))"},children:[(0,So.jsx)(cf,{children:o.displayText}),!o.isComplete&&o.displayText&&(0,So.jsx)(df,{style:{color:"white",WebkitTextFillColor:"white"},children:"\xa0"})]})}),(0,So.jsxs)(sf,{variants:c,children:[(0,So.jsx)(cf,{children:s.displayText}),!s.isComplete&&s.displayText&&(0,So.jsx)(df,{children:"\xa0"})]}),(0,So.jsxs)(lf,{variants:c,children:[(0,So.jsx)("strong",{children:"\uc6f9\ubd80\ud130 \uc571\uae4c\uc9c0, \ud50c\ub7ab\ud3fc\uc744 \ub118\ub098\ub4dc\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4."}),(0,So.jsx)("br",{}),"\ub2e4\uc591\ud55c \uc5b8\uc5b4\uc640 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud65c\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc758 \uacbd\ud5d8\uc744 \uc124\uacc4\ud558\uace0, \ud300\uacfc\uc758 \uc18c\ud1b5\uc744 \ud1b5\ud574 \ubcf5\uc7a1\ud55c \ubb38\uc81c\ub97c \ucc3d\uc758\uc801\uc73c\ub85c \ud574\uacb0\ud569\ub2c8\ub2e4.",(0,So.jsx)("br",{}),(0,So.jsx)("strong",{children:"\ube44\uc804\uacf5\uc790\uc5d0\uc11c PL\uae4c\uc9c0, \ub04a\uc784\uc5c6\ub294 \ub3c4\uc804\uacfc \uc131\uc7a5\uc744 \ucd94\uad6c\ud569\ub2c8\ub2e4. \ud83c\udf1f"})]}),(0,So.jsxs)(uf,{variants:c,children:[(0,So.jsxs)(pf,{href:"#projects",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e=>{var t;e.preventDefault(),null===(t=document.getElementById("projects"))||void 0===t||t.scrollIntoView({behavior:"smooth"})},children:[(0,So.jsx)(Ph,{}),"\ud504\ub85c\uc81d\ud2b8 \ub458\ub7ec\ubcf4\uae30"]}),(0,So.jsxs)(hf,{href:"/resume_2025.pdf",download:"\uae40\ub3d9\uaddc_\ud504\ub860\ud2b8\uc564\ub4dc&PM_\uc774\ub825\uc11c_2025.pdf",whileHover:{scale:1.05},whileTap:{scale:.95},target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(Ch,{}),"\uc774\ub825\uc11c \ub2e4\uc6b4\ub85c\ub4dc"]})]}),(0,So.jsxs)(yf,{variants:c,children:[(0,So.jsx)(wf,{href:e.links.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.15,rotate:5},whileTap:{scale:.9},children:(0,So.jsx)(qp,{})}),(0,So.jsx)(wf,{href:e.links.blog,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.15,rotate:-5},whileTap:{scale:.9},children:(0,So.jsx)(lh,{})}),(0,So.jsx)(wf,{href:e.links.portfolio,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.15,rotate:5},whileTap:{scale:.9},children:(0,So.jsx)(Ph,{})})]})]}),(0,So.jsx)(mf,{children:(0,So.jsx)(ff,{variants:{hidden:{scale:0,rotateY:-90},visible:{scale:1,rotateY:0,transition:{duration:.8,ease:"easeOut",delay:1}}},initial:"hidden",animate:"visible",children:(0,So.jsx)(Lp,{mode:"wait",children:(0,So.jsx)(tp.div,{variants:{exit:{scale:.8,opacity:0,rotateY:90,transition:{duration:.5}},enter:{scale:1,opacity:1,rotateY:0,transition:{duration:.5,delay:.2}}},initial:"exit",animate:"enter",exit:"exit",style:{position:"relative"},children:(0,So.jsxs)(Cf,{onClick:()=>{i(l.route)},whileHover:{scale:1.05},whileTap:{scale:.95},children:["web"===l.type?(0,So.jsx)(gf,{children:(0,So.jsx)(vf,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:l.video})}):(0,So.jsx)(xf,{children:(0,So.jsx)(vf,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:l.video})}),(0,So.jsxs)(bf,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:[l.name," - \ud074\ub9ad\ud558\uc5ec \uc0c1\uc138\ubcf4\uae30"]})]})},n)})})})]})})]})},Pf=Gt(pp)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
`,zf=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
`,Tf=(Gt(tp.div)``,Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${lp}) {
    flex-direction: column;
    text-align: center;
  }
`,Gt.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${op.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);

  span {
    font-size: 3rem;
  }

  @media (max-width: ${sp}) {
    width: 100px;
    height: 100px;

    span {
      font-size: 2.5rem;
    }
  }
`,Gt.div`
  h3 {
    font-size: 1.8rem;
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.5rem;
    color: ${ip.primary};
  }

  p {
    font-size: 1.2rem;
    color: ${ip.secondary};
    margin-bottom: 0.3rem;
    font-family: 'Pretendard-Medium';
  }

  .birth {
    font-size: 1rem;
    color: ${ip.tertiary};
    font-family: 'Pretendard-Regular';
  }
`,Gt.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-family: 'Pretendard-Medium';
  margin-top: 0.8rem;
  border: 1px solid rgba(16, 185, 129, 0.3);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
  }
`,Gt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${cp}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${lp}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`),Mf=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 16px;
  padding: 2rem;
  height: 200px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(102, 126, 234, 0.4);
    transform: translateY(-5px);
  }

  h3 {
    font-family: 'Pretendard-SemiBold';
    font-size: 1.2rem;
    color: ${ip.primary};
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  p {
    font-family: 'Pretendard-Regular';
    font-size: 0.95rem;
    color: ${ip.secondary};
    line-height: 1.6;
    flex: 1;
  }

  @media (max-width: ${sp}) {
    padding: 1.5rem;
    height: auto;
    min-height: 180px;
  }
`,Rf=Gt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${cp}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${lp}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Lf=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 16px;
  padding: 2rem;
  height: 160px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-3px);
  }

  .icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  div {
    flex: 1;

    h4 {
      font-family: 'Pretendard-SemiBold';
      font-size: 1.1rem;
      color: ${ip.primary};
      margin-bottom: 0.8rem;
    }

    p {
      font-family: 'Pretendard-Regular';
      font-size: 0.9rem;
      color: ${ip.secondary};
      line-height: 1.5;
    }
  }

  @media (max-width: ${sp}) {
    padding: 1.5rem;
    height: auto;
    min-height: 140px;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    .icon {
      font-size: 2rem;
    }
  }
`,If=Gt.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`,Bf=Gt(tp.div)`
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
  }

  h3 {
    font-family: 'Pretendard-Bold';
    font-size: 1.5rem;
    color: ${ip.primary};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-family: 'Pretendard-Regular';
    font-size: 1rem;
    color: ${ip.secondary};
    line-height: 1.8;
    white-space: pre-line;
  }

  @media (max-width: ${sp}) {
    padding: 2rem;
    
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
`,Nf=Gt.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`,Of=Gt(tp.div)`
  background: rgba(147, 51, 234, 0.05);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(147, 51, 234, 0.08);
    border-color: rgba(147, 51, 234, 0.3);
  }

  h3 {
    font-family: 'Pretendard-Bold';
    font-size: 1.5rem;
    color: ${ip.primary};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-family: 'Pretendard-Regular';
    font-size: 1rem;
    color: ${ip.secondary};
    line-height: 1.8;
  }

  @media (max-width: ${sp}) {
    padding: 2rem;
    
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
`,Df=Gt.div`
  h3 {
    font-family: 'Pretendard-Bold';
    font-size: 1.8rem;
    color: ${ip.primary};
    margin-bottom: 2rem;
    text-align: center;
  }
`,Ff=Gt.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${lp}) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`,Vf=Gt(tp.div)`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(16, 185, 129, 0.08);
    border-color: rgba(16, 185, 129, 0.3);
    transform: translateY(-3px);
  }

  div {
    flex: 1;

    p {
      font-family: 'Pretendard-Regular';
      font-size: 0.95rem;
      color: ${ip.secondary};
      line-height: 1.4;
      margin: 0;
    }
  }

  @media (max-width: ${sp}) {
    padding: 0.6rem 0.8rem;
    flex-direction: column;
    text-align: center;
    gap: 0.1rem;
  }
`,_f=Gt.div`
  font-size: 1.2rem;
  width: 1.2rem;
  flex-shrink: 0;
  line-height: 1;
  text-align: center;

  @media (max-width: ${sp}) {
    font-size: 1rem;
    width: 1rem;
  }
`,Hf=Gt.div`
  font-size: 2.5rem;
  flex-shrink: 0;

  @media (max-width: ${sp}) {
    font-size: 2rem;
  }
`,$f=()=>{const{personal:e,about:t}=Lm;return(0,So.jsx)(Pf,{id:"about",children:(0,So.jsxs)(dp,{children:[(0,So.jsx)(up,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:"About Me"}),(0,So.jsxs)(zf,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8,delay:.2},viewport:{once:!0},children:[(0,So.jsxs)(Tf,{children:[(0,So.jsxs)(Mf,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:[(0,So.jsx)("h3",{children:"\ud83d\ude80 \ub3c4\uc804\ud558\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790"}),(0,So.jsx)("p",{children:"\ub04a\uc784\uc5c6\uc774 \ub3c4\uc804\ud558\uace0 \uc131\uc7a5\ud558\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4. React, Next.js, Flutter \ub4f1 \ub2e4\uc591\ud55c \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud65c\uc6a9\ud574 \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc758 \uc6f9\xb7\uc571 \uc11c\ube44\uc2a4\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4."})]}),(0,So.jsxs)(Mf,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[(0,So.jsx)("h3",{children:"\ud83c\udf0d \uae00\ub85c\ubc8c \ub9c8\uc778\ub4dc"}),(0,So.jsx)("p",{children:"\ube44\uc804\uacf5\uc790\uc5d0\uc11c \uc2dc\uc791\ud574 \ud604\uc7ac \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790\ub85c \uc7ac\uc9c1\ud558\uba70, \ubbf8\uad6d \uad50\ud658\ud559\uc0dd\uacfc \uae00\ub85c\ubc8c \ube44\uc988\ub2c8\uc2a4 \uacbd\ud5d8\uc744 \ubc14\ud0d5\uc73c\ub85c \uad6d\uc81c\uc801 \uac10\uac01\uacfc \ucc3d\uc758\uc801 \uc0ac\uace0\ub85c \ubb38\uc81c\ub97c \ud574\uacb0\ud569\ub2c8\ub2e4."})]}),(0,So.jsxs)(Mf,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.3},viewport:{once:!0},children:[(0,So.jsx)("h3",{children:"\ud83d\udca1 \uc2e4\ubb34 \uacbd\ud5d8 \uae30\ubc18 \uc131\uc7a5"}),(0,So.jsx)("p",{children:"LittleBank, TripplAI, DevHub \ub4f1 \uc2e4\uc81c \uc11c\ube44\uc2a4 \uac1c\ubc1c\uacfc PM \uacbd\ud5d8\uc744 \ud1b5\ud574 \uae30\uc220\uacfc \ube44\uc988\ub2c8\uc2a4\ub97c \uc5f0\uacb0\ud558\ub294 \uac1c\ubc1c\uc790\ub85c \uc131\uc7a5\ud588\uc2b5\ub2c8\ub2e4."})]})]}),(0,So.jsxs)(Rf,{children:[(0,So.jsxs)(Lf,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:[(0,So.jsx)(Hf,{children:"\ud83c\udfaf"}),(0,So.jsxs)("div",{children:[(0,So.jsx)("h4",{children:"\ud504\ub85c\uc81d\ud2b8 \ub9e4\ub2c8\uc9d5"}),(0,So.jsx)("p",{children:"\ub2e4\uc591\ud55c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c PM \uc5ed\ud560\uc744 \uc218\ud589\ud558\uba70 \ud300\uc744 \uc774\ub04c\uace0 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\ub294 \ub9ac\ub354\uc2ed\uc744 \ubc1c\ud718\ud588\uc2b5\ub2c8\ub2e4."})]})]}),(0,So.jsxs)(Lf,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[(0,So.jsx)(Hf,{children:"\ud83d\udcbb"}),(0,So.jsxs)("div",{children:[(0,So.jsx)("h4",{children:"\ud480\uc2a4\ud0dd \uac1c\ubc1c"}),(0,So.jsx)("p",{children:"\ud504\ub860\ud2b8\uc5d4\ub4dc\ubd80\ud130 \ubc31\uc5d4\ub4dc\uae4c\uc9c0 \uc804\uccb4 \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4\ub97c \uc774\ud574\ud558\uace0 \uad6c\ud604\ud560 \uc218 \uc788\ub294 \uc5ed\ub7c9\uc744 \ubcf4\uc720\ud588\uc2b5\ub2c8\ub2e4."})]})]}),(0,So.jsxs)(Lf,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.3},viewport:{once:!0},children:[(0,So.jsx)(Hf,{children:"\ud83e\udd1d"}),(0,So.jsxs)("div",{children:[(0,So.jsx)("h4",{children:"\ud611\uc5c5 & \uc18c\ud1b5"}),(0,So.jsx)("p",{children:"\ub514\uc790\uc774\ub108, \uae30\ud68d\uc790, \uac1c\ubc1c\uc790 \uac04\uc758 \uc6d0\ud65c\ud55c \uc18c\ud1b5\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8 \uc131\uacf5\uc744 \uc774\ub04c\uc5b4\ub0b4\ub294 \ud611\uc5c5 \ub2a5\ub825\uc744 \uac16\ucd94\uc5c8\uc2b5\ub2c8\ub2e4."})]})]})]}),(0,So.jsx)(If,{children:(0,So.jsxs)(Bf,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[(0,So.jsx)("h3",{children:"\ud83d\udcaa \uac1c\ubc1c\uc790\ub85c \uc131\uc7a5\ud558\uac8c \ub41c \uacc4\uae30"}),(0,So.jsx)("p",{children:Lm.about.motivation})]})}),(0,So.jsx)(Nf,{children:(0,So.jsxs)(Of,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[(0,So.jsx)("h3",{children:"\ud83c\udfa8 \uc131\uc7a5 \uacfc\uc815"}),(0,So.jsx)("p",{children:Lm.about.growth})]})}),(0,So.jsxs)(Df,{children:[(0,So.jsx)("h3",{children:"\ud83c\udfaf \uc55e\uc73c\ub85c\uc758 \ubaa9\ud45c"}),(0,So.jsxs)(Ff,{children:[(0,So.jsxs)(Vf,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:[(0,So.jsx)(_f,{children:"\ud83d\udcda"}),(0,So.jsx)("div",{children:(0,So.jsx)("p",{children:"\uc9c0\uc18d\uc801\uc778 \ud559\uc2b5\uacfc \uc131\uc7a5: \ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 IT \ubd84\uc57c\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uae30\uc220\uacfc \ud2b8\ub80c\ub4dc\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \ud559\uc2b5"})})]}),(0,So.jsxs)(Vf,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[(0,So.jsx)(_f,{children:"\ud83e\udd1d"}),(0,So.jsx)("div",{children:(0,So.jsx)("p",{children:"\ud300\uc6cc\ud06c\uc640 \ud611\uc5c5 \uac15\ud654: \uae00\ub85c\ubc8c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ubc0f \ud611\uc5c5 \uc815\uc2e0\uc744 \ubc14\ud0d5\uc73c\ub85c \ud300\uc6d0\ub4e4\uacfc\uc758 \uc6d0\ud65c\ud55c \ud611\uc5c5"})})]}),(0,So.jsxs)(Vf,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.3},viewport:{once:!0},children:[(0,So.jsx)(_f,{children:"\ud83d\udca1"}),(0,So.jsx)("div",{children:(0,So.jsx)("p",{children:"\ucc3d\uc758\uc801 \ubb38\uc81c \ud574\uacb0: \uacbd\uc601\ud559\uc5d0\uc11c \ubc30\uc6b4 \ubd84\uc11d\uc801 \uc0ac\uace0\uc640 \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc744 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0 \uc801\uc6a9"})})]}),(0,So.jsxs)(Vf,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:[(0,So.jsx)(_f,{children:"\u2b50"}),(0,So.jsx)("div",{children:(0,So.jsx)("p",{children:"\ucc45\uc784\uac10\uacfc \uc131\uc2e4\ud568: \ub9e1\uc740 \uc5c5\ubb34\uc5d0 \ucc45\uc784\uac10\uc744 \uac00\uc9c0\uace0 \uc131\uc2e4\ud558\uac8c \uc218\ud589"})})]}),(0,So.jsxs)(Vf,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.5},viewport:{once:!0},children:[(0,So.jsx)(_f,{children:"\u2764\ufe0f"}),(0,So.jsx)("div",{children:(0,So.jsx)("p",{children:"\uace0\uac1d \uc911\uc2ec\uc758 \uc11c\ube44\uc2a4 \uc81c\uacf5: \uace0\uac1d\uc758 \uc694\uad6c\ub97c \uc815\ud655\ud788 \uc774\ud574\ud558\uace0 \ub9cc\uc871\uc2dc\ud0a4\ub294 \uc11c\ube44\uc2a4 \uc81c\uacf5"})})]})]})]})]})]})})};function Uf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.2693 10.3368c-.3321 0-.6026.2705-.6026.6031v9.8324h-1.7379l-3.3355-6.9396c.476-.5387.6797-1.286.5243-2.0009a2.2862 2.2862 0 0 0-1.2893-1.6248v-.8124c.0121-.2871-.1426-.5787-.4043-.7407-.1391-.0825-.2884-.1234-.4402-.1234a.8478.8478 0 0 0-.4318.1182c-.2701.1671-.4248.4587-.4123.7662l-.0003.721c-1.0149.3668-1.6619 1.4153-1.4867 2.5197a2.282 2.282 0 0 0 .5916 1.2103l-3.2096 6.9064H4.0928c-1.0949-.007-1.9797-.8948-1.9832-1.9896V5.016c-.0055 1.1024.8836 2.0006 1.9859 2.0062a2.024 2.024 0 0 0 .1326-.0037h14.7453s2.5343-.2189 2.8619 1.5392c-.2491.0287-.4449.2321-.4449.4889 0 .7115-.5791 1.2901-1.3028 1.2901h-.8183zM17.222 22.5366c.2347.4837.0329 1.066-.4507 1.3007-.1296.0629-.2666.0895-.4018.0927a.9738.9738 0 0 1-.3194-.0455c-.024-.0078-.046-.0209-.0694-.0305a.9701.9701 0 0 1-.2277-.1321c-.0247-.0192-.0495-.038-.0724-.0598-.0825-.0783-.1574-.1672-.21-.2757l-1.2554-2.6143-1.5585-3.2452a.7725.7725 0 0 0-.6995-.4443h-.0024a.792.792 0 0 0-.7083.4443l-1.5109 3.2452-1.2321 2.6464a.9722.9722 0 0 1-.7985.5795c-.0626.0053-.1238-.0024-.185-.0087-.0344-.0036-.069-.0053-.1025-.0124-.0489-.0103-.0954-.0278-.142-.0452-.0301-.0113-.0613-.0197-.0901-.0339-.0496-.0244-.0948-.0565-.1397-.0889-.0217-.0156-.0457-.0275-.0662-.045a.9862.9862 0 0 1-.1695-.1844.9788.9788 0 0 1-.0708-.9852l.8469-1.8223 3.2676-7.0314a1.7964 1.7964 0 0 1-.7072-1.1637c-.1555-.9799.5129-1.9003 1.4928-2.0559V9.3946a.3542.3542 0 0 1 .1674-.3155.3468.3468 0 0 1 .3541 0 .354.354 0 0 1 .1674.3155v1.159l.0129.0064a1.8028 1.8028 0 0 1 1.2878 1.378 1.7835 1.7835 0 0 1-.6439 1.7836l3.3889 7.0507.8481 1.7643zM12.9841 12.306c.0042-.6081-.4854-1.1044-1.0935-1.1085a1.1204 1.1204 0 0 0-.7856.3219 1.101 1.101 0 0 0-.323.7716c-.0042.6081.4854 1.1044 1.0935 1.1085h.0077c.6046 0 1.0967-.488 1.1009-1.0935zm-1.027 5.2768c-.1119.0005-.2121.0632-.2571.1553l-1.4127 3.0342h3.3733l-1.4564-3.0328a.274.274 0 0 0-.2471-.1567zm8.1432-6.7459l-.0129-.0001h-.8177a.103.103 0 0 0-.103.103v12.9103a.103.103 0 0 0 .0966.103h.8435c.9861-.0035 1.7836-.804 1.7836-1.79V9.0468c0 .9887-.8014 1.7901-1.7901 1.7901zM2.6098 5.0161v.019c.0039.816.6719 1.483 1.4874 1.4869a12.061 12.061 0 0 1 .1309-.0034h1.1286c.1972-1.315.7607-2.525 1.638-3.4859H4.0993c-.9266.0031-1.6971.6401-1.9191 1.4975.2417.0355.4296.235.4296.4859zm6.3381-2.8977L7.9112.3284a.219.219 0 0 1 0-.2189A.2384.2384 0 0 1 8.098 0a.219.219 0 0 1 .1867.1094l1.0496 1.8158a6.4907 6.4907 0 0 1 5.3186 0L15.696.1094a.2189.2189 0 0 1 .3734.2189l-1.0302 1.79c1.6671.9125 2.7974 2.5439 3.0975 4.4018l-12.286-.0014c.3004-1.8572 1.4305-3.488 3.0972-4.4003zm5.3774 2.6202a.515.515 0 0 0 .5271.5028.515.515 0 0 0 .5151-.5151.5213.5213 0 0 0-.8885-.367.5151.5151 0 0 0-.1537.3793zm-5.7178-.0067a.5151.5151 0 0 0 .5207.5095.5086.5086 0 0 0 .367-.1481.5215.5215 0 1 0-.734-.7341.515.515 0 0 0-.1537.3727z"},child:[]}]})(e)}function Kf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.66 3.494c-.377.637-.544 2.114-.502 3.162l-.005.004c.036.946.165 1.816.372 2.615-3.096.767-6.466 2.795-8.352 4.754-.882-1.19-1.232-2.168-1.336-2.908-.131-.936.092-1.794.646-2.482.867-1.077 2.098-1.153 3.365-.94-.025.2.001.391.081.51.335.494 2.135.668 3.21.189-.793-1.112-2.4-1.654-2.844-1.437a.762.762 0 00-.335.359c-.438-.078-.873-.137-1.19-.134-1.117.008-1.971.398-2.61 1.193-.628.78-.882 1.747-.734 2.8.14.996.633 2.055 1.46 3.154-.138.147-.27.293-.398.436C1.473 17.023 0 19.44 0 19.842v.207h2.658l-.046-.246c-.15-.793.15-1.785.763-2.526.386-.465 1.024-.996 2.027-1.241.891.87 2.027 1.794 3.291 2.685h1.976v-.208a.678.678 0 00-.327-.577c-.312-.204-.794-.232-1.237-.081-.421-.47-.658-1.098-.709-1.877 4.287.38 8.388 2.11 13.015 4.528h2.546l.033-.167c.048-.237-.082-.556-.346-.851-.456-.51-1.349-.752-2.095-.734-.514-.612-3.342-3.591-3.507-3.765a9.626 9.626 0 002.673-2.847h1.388v-.298H20.89a9.81 9.81 0 00.223-.419h.989v-.299h-.845c.628-1.359.975-2.918.942-4.625l.003.002c-.002-.468-.147-2.445-.415-2.989-.726.276-2.047 1.17-2.346 2.084a14.557 14.557 0 00-4.463.056c-.237-.984-1.423-1.736-2.318-2.16zm.164.577c.211 1.148.593 1.869 1.42 2.223.734-.21 1.58-.34 2.448-.388l.717 1.571.46-1.585c.876.029 1.736.142 2.485.349.762-.554 1.057-1.4 1.218-2.138.202.86.178 2.717.18 2.717a9.883 9.883 0 01-.158 1.988l-.824.35.726.11a9.19 9.19 0 01-.198.714l-.703.205.56.201c-.094.253-.2.5-.314.738h-1.16v.299h1.008a8.788 8.788 0 01-.238.419h-.77v.298h.583a8.634 8.634 0 01-2.921 2.748c-1.334-.664-2.341-1.634-3.079-2.748h.446v-.298h-.636a9.195 9.195 0 01-.236-.419h.872v-.299h-1.026a10.12 10.12 0 01-.46-1.094l.522-.147-.659-.263c-.066-.215-.127-.43-.18-.646l1.015-.069-1.16-.615c-.282-1.563-.225-3.08.062-4.221zm2.946 2.97c-.89 0-1.24.909-1.255.948l.252.094c.012-.033.302-.773 1.003-.773.154 0 .262.062.34.195.182.314.152.933 0 1.58h-1.227v.269h1.159a5.679 5.679 0 01-.496 1.225l-.064.112 1.537.967-.865.57.148.224.967-.637 1.043.681.143-.228-.967-.598 1.518-.986v-.001c-.318-.47-.42-.872-.286-1.329h.108l1.167-.001.002-.268h-1.175c.216-.51.52-.968 1.602-.968v-.27c-.999 0-1.596.397-1.883 1.238h-2.154c.15-.672.177-1.333-.046-1.715a.63.63 0 00-.57-.33zm.55 2.313h2.126c-.095.304-.057.763.178 1.157h-2.737c.166-.334.32-.74.433-1.157zm-3.683.321c.155.515.344.997.562 1.451h-.91v.299h1.06c.075.142.153.282.233.419H12.29v.298h1.478c.91 1.416 2.14 2.499 3.534 3.318a9.45 9.45 0 00.456-.28l.362.39-.61.938 1.04-.474.606.652-1.019.776 1.403-.363 1.905 2.05.16-.014c1.007-.086 1.58.46 1.73.63.112.124.179.237.215.326h-2.036c-4.67-2.437-8.771-4.155-13.127-4.53.01-.607.117-1.293.324-2.058l-.4-.108c-.213.786-.325 1.497-.338 2.134-.454-.03-.91-.046-1.371-.046-.391 0-.747.036-1.072.1a14.771 14.771 0 01-1.09-1.21c.546-.57 1.19-1.123 1.893-1.643l.967.668-.316-1.128c.297-.2.603-.394.914-.58l1.434.73-.673-1.162c.198-.106.398-.21.598-.31l2.007 1.346-.66-1.952a15.32 15.32 0 012.034-.667zm3.492 1.105h2.22l-1.084.715zM4.153 14.675c.273.337.577.678.91 1.021a4.104 4.104 0 00-2.007 1.316c-.629.76-.962 1.762-.886 2.622H.495c.337-.728 1.677-2.833 3.658-4.959z"},child:[]}]})(e)}function Wf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z"},child:[]}]})(e)}function Gf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"},child:[]}]})(e)}function Xf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"},child:[]}]})(e)}function Yf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.109.024a15.58 15.58 0 00-.737.023C6.728.361 3.469 2.517 1.579 5.86A12.53 12.53 0 00.021 11.11c-.04.517-.02 1.745.035 2.208.306 2.682 1.353 5.06 3.07 6.965 1.962 2.173 4.586 3.467 7.437 3.663.42.032 1.043.04 1.02.012a2.404 2.404 0 00-.338-.074c-1.674-.33-3.388-1.13-4.777-2.232a12.344 12.344 0 01-2.45-2.636A12.387 12.387 0 011.884 12.5a12.413 12.413 0 01.56-4.274c.785-2.522 2.37-4.726 4.475-6.228A11.073 11.073 0 0111.156.122l.443-.098zm1.474.51C10.646.65 8.807 1.299 7.301 2.4 5.426 3.77 3.995 5.644 3.22 7.746c-.145.397-.282.82-.282.879 0 .012 3.828.024 10.31.024 8.463 0 10.315-.008 10.315-.036 0-.047-.153-.525-.283-.878-.153-.42-.576-1.31-.82-1.722-.4-.683-.91-1.373-1.474-1.992-1.65-1.82-3.593-2.934-5.82-3.334-.785-.141-1.8-.2-2.585-.153zM23.83 9.97c-.02 0-4.792 0-10.609.004l-10.573.008-.011.059c-.036.16-.134 1.081-.134 1.242 0 .028 1.785.032 10.746.032H24v-.075c0-.102-.07-.791-.106-1.054-.02-.16-.04-.216-.063-.216zm-10.573 2.635c-9.37-.004-10.73 0-10.742.035-.02.04.024.557.075.973.02.157.035.298.035.314 0 .027 2.137.035 10.624.035h10.624l.024-.188c.043-.326.102-.97.094-1.067l-.008-.094zm.003 2.718c-8.882 0-10.321.004-10.321.035 0 .02.054.208.12.42a11.122 11.122 0 002.072 3.741c.282.342.945 1.036 1.228 1.287 1.568 1.4 3.247 2.216 5.18 2.53.605.094.886.113 1.75.11.91 0 1.297-.032 2.023-.177 2.11-.416 3.914-1.451 5.53-3.17 1.267-1.348 2.106-2.76 2.628-4.41l.117-.366z"},child:[]}]})(e)}function Qf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"},child:[]}]})(e)}function qf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"},child:[]}]})(e)}function Jf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.172 20.36c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777-.446-1.355-.6-2.808-1.174-4.11-.602-.944.103-1.978 1.138-2.28.46-.087 1.272-.522.293-.211-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.66-.43 1.6-.903.463-1.544C1.5 1.08 4.34.835 3.64 2.285 3.473 3.4 5.624 2.08 5.125 3.368c.507.619 1.9.14 1.865 1.009.74.05.993.672 1.687.72.72.325 2.022.58 2.266 1.39-.713.566-2.364-1.165-2.443.398.215 2.31.16 4.689 1.004 6.888.4 1.332 1.37 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306a19.86 19.86 0 01-3.484.29c-1.912-.15-3.865-.214-5.684-.88-1.024-.297-2.023-.881-2.924-1.464zm1.615.7c1 .432 1.978.888 3.074 1.026 1.74.24 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.291-1.452-1.277-.466.66.598 1.005.685.798.453-.877-.233-1.114-.421-.668-.375-.754-.297-.066.084.139.08.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.45-.622-.196-.341-.751-.557-.36-.74-.704.244-.737-.93-1.07-.763-.744-.235-.29-1.07-1.176-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.647c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.31-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.312-.3-.484-.188 0 0zm1.127.63c.191-.282-.61-.107 0 0zM8.19 19.728c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.397.25 2.32.55 1.115.103-.2.042-2.23-.574-1.116-.103zm-3.921-3.054c-.04-.167-.616-.185 0 0zm1.15.67c.3-.21-.621-.16 0 0zm.966.593c.43-.162-.696-.163 0 0zm-2.584-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17zm3.24 1.978c.193-.33-.815-.19 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.973 1.14c1.08.01-.975-.147 0 0zm-4.644-2.96c-.042-.2-.266.018 0 0zm6.47 3.985c.028-.363-.353.27 0 0zm-4.63-2.856c-.064-.191-.336-.008 0 0zm-1.738-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zm5.407 3.435c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.528-.077 0 0zm-2.506-1.592c.46-.05-.74-.311 0 0zm4.241 2.637c.718-.285-.7-.14 0 0zM9.03 18.545c.827.106-.985-.563-.181-.06zm2.876 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.29.103.696-.467 1.726.22 2.376.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.22-2.044-.703-2.517-1.542-.192-.315.28.044-.166-.47-.57-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.688-.826-.002-.571.595-.285.176-.707-.09-.592-.386-1.21-.475-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.58-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.1.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.06.328-.905-.12-.83.64-.573-.241-.078.9.209.514.975.264.686.866.71 1.437-.158.333-.784-.783-.14-.731-.507-.827-.561-.3-.984.085-.1.028 1.079.547.34.803.65.1.668.67.8 1.03.39.407.31-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.44-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.24-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.72.155.552.58.778.88.497.224-.712-1.522.142-.526.898.81.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.975 1.34-.027.897-.348-.313-1.58-.7-.573-.104.929.43 1.665.688 2.561 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.01-.468.107.36 0 0zm-.322-.433c-.372-.72.47.204 0 0zm-3.9-2.692c.219-.06.108.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.192-1.525c-.155-.278.323.26 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.217c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.05.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.04-.603.23.413 0 0zm.45.155c.216-.455.366.634 0 0zm-1.084-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.06-.25.66.12.327 1.082-.077.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18zm3.11 1.808c-.47-.282-.123-1.984.037-.82.457-.148-.025.6.315.594-.053.473-.206.643-.35.226zm1.15.68c.048-.513.099.35 0 0zm-.2-.198c.054-.22.007.258 0 0zM4.57 9.955c-.697-.963 2.027.973.447.244-.165-.043-.364-.06-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.587c.415-.088 1.718.729.52.234-.132-.148-.416-.08-.52-.234zm3.56 1.775c.044-.83.248-.495.002.118zM4.985 9.299c.169-.248-.45-1.12.089-.313.232.185.672.31.283.387.61.539-.15.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.427c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.51c-.053-.32.18.404 0 0zm.314-.51c-.216-.38.272-1.673.326-.87-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.923c.094-.115.02.139 0 0zM7.47 17.544c-.128-.111.016.07 0 0zm1.11.56c.615.16.612-.095.055-.17-.3-.28-1.246-.575-.4-.035.057.142.235.139.344.206zM6.389 16.65c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.07-.51-.305-.06-1.52-.54-.804.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.69.46.892.6zm1.16.667c1.41.454-.691-.556 0 0zm5.94 3.598c.02-.28-.193.24 0 0zm.611.257c.325-.315.013.503.54-.077.005-.415-.017-.66-.606-.156-.162.09-.234.473.066.233zm-9.692-6.087c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.32 1.662.236.44.04-.182-.27-1.151-.204-.44-.04zm5.097 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 13.743c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.135-.734-.466-.32 0 0zm.866.34c.57-.488-.36-.102 0 0zM4.215 14.255c.163-.242-.42-.031 0 0zm11.305 7.129c.551-.355-.126-.3-.1.032zm-7.47-4.71c-.02-.24-.291.02 0 0zm.46.267c-.145-.297-.224.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.57 14.08c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.41.426-.845-.413-.474.204-.31.374-.224.052.299.196.233.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.13.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.681 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zM15.4 20.24c.216-.16-.27-.02 0 0zM3.39 12.52c.62-.24-.664-.17 0 0zm8.984 5.662c-.007-.401-.395.1 0 0zm-9.23-6.231c.399-.135-.367-.09 0 0zm1.156.56c-.007-.133-.122.05 0 0zm14.09 8.64c.512-.104 1.678.26 1.866-.136-.62-.015-2.15-.438-2.222.1l.136.023.22.013zM4.667 12.603c.009-.407-.317-.015 0 0zM1.63 10.495c-.138-.775-.525-.118 0 0zm.724.182c.009-.25-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.22-.167c-.035-.32-.19.04 0 0zm1.22.729c.518-.203-.94-.42-.104-.04zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.05 0 0zM2.573 9.38c.055-.38-.41.075 0 0zM.837 8.218c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.11 1.67-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.29-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.06zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.12zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.23 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.25-.347c-.055-1.214 1.119.432 0 0zm.64-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.067c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.602 12.89c.012-.355-.304.16 0 0zm-2.093-1.43c.06-.408-.27.037 0 0zm2.67 1.568c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 8.959c.45-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.7.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.39-.105-.343-.746-.407-1.06-.544-.176.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.824 4.215c.28-.496-1.155-.668-.188-.175.09.03.07.21.188.175z"},child:[]}]})(e)}function Zf(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"},child:[]}]})(e)}function eg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(e)}function tg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z"},child:[]}]})(e)}function ng(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z"},child:[]}]})(e)}function rg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.695 4.297a3.807 3.807 0 0 0-5.29-.09.368.368 0 0 0 0 .533l.46.47a.363.363 0 0 0 .474.032 2.182 2.182 0 0 1 2.86 3.291c-3.023 3.02-7.056-5.447-16.211-1.083a1.24 1.24 0 0 0-.534 1.745l1.571 2.713a1.238 1.238 0 0 0 1.681.461l.037-.02-.029.02.688-.384a16.083 16.083 0 0 0 2.193-1.635.384.384 0 0 1 .499-.016.357.357 0 0 1 .016.534 16.435 16.435 0 0 1-2.316 1.741H8.77l-.696.39a1.958 1.958 0 0 1-.963.25 1.987 1.987 0 0 1-1.726-.989L3.9 9.696C1.06 11.72-.686 15.603.26 20.522a.363.363 0 0 0 .354.296h1.675a.363.363 0 0 0 .37-.331 2.478 2.478 0 0 1 4.915 0 .36.36 0 0 0 .357.317h1.638a.363.363 0 0 0 .357-.317 2.478 2.478 0 0 1 4.914 0 .363.363 0 0 0 .358.317h1.627a.363.363 0 0 0 .363-.357c.037-2.294.656-4.93 2.42-6.25 6.108-4.57 4.502-8.486 3.088-9.9zm-6.229 6.901l-1.165-.584a.73.73 0 1 1 1.165.587z"},child:[]}]})(e)}function ig(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(e)}function ag(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0v24h24V0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 0 1-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 0 1-1.279-1.056l1.39-1.555c.277.334.555.555.833.722.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9z"},child:[]}]})(e)}function og(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(e)}function sg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5"},child:[]}]})(e)}function lg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(e)}function cg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(e)}function dg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},child:[]}]})(e)}function ug(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(e)}function pg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"},child:[]}]})(e)}function hg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"},child:[]}]})(e)}function mg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z"},child:[]}]})(e)}function fg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z"},child:[]}]})(e)}function gg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(e)}function xg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"},child:[]}]})(e)}function vg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.833 6.666v-.055c0-1-.667-1.5-1.778-1.5H4.389v3.055h1.723c1.111 0 1.721-.666 1.721-1.5zM0 0v24h24V0H0zm2.223 3.167h4c2.389 0 3.833 1.389 3.833 3.445v.055c0 2.278-1.778 3.5-4.001 3.5H4.389v2.945H2.223V3.167zM11.277 21h-9v-1.5h9V21zm4.779-7.777c-2.944.055-5.111-2.223-5.111-5.057C10.944 5.333 13.056 3 16.111 3c1.889 0 3 .611 3.944 1.556l-1.389 1.61c-.778-.722-1.556-1.111-2.556-1.111-1.658 0-2.873 1.375-2.887 3.084.014 1.709 1.174 3.083 2.887 3.083 1.111 0 1.833-.445 2.61-1.167l1.39 1.389c-.999 1.112-2.166 1.779-4.054 1.779z"},child:[]}]})(e)}function bg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(e)}function yg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(e)}function wg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z"},child:[]}]})(e)}function jg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z"},child:[]}]})(e)}function kg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"},child:[]}]})(e)}function Sg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0zm0 1.144c5.995 0 10.856 4.86 10.856 10.856 0 5.995-4.86 10.856-10.856 10.856-5.996 0-10.856-4.86-10.856-10.856C1.144 6.004 6.004 1.144 12 1.144zM8.37 5.868a6.707 6.707 0 0 0-.423.005c-.983.056-1.573.517-1.735 1.472-.115.665-.096 1.348-.143 2.017-.013.35-.05.697-.115 1.038-.134.609-.397.798-1.016.83a2.65 2.65 0 0 0-.244.042v1.463c1.126.055 1.278.452 1.37 1.629.033.429-.013.858.015 1.287.018.406.073.808.156 1.2.259 1.075 1.307 1.435 2.575 1.218v-1.283c-.203 0-.383.005-.558 0-.43-.013-.591-.12-.632-.535-.056-.535-.042-1.08-.075-1.62-.064-1.001-.175-1.988-1.153-2.625.503-.37.868-.812.983-1.398.083-.41.134-.821.166-1.237.028-.415-.023-.84.014-1.25.06-.665.102-.937.9-.91.12 0 .235-.017.369-.027v-1.31c-.16 0-.31-.004-.454-.006zm7.593.009a4.247 4.247 0 0 0-.813.06v1.274c.245 0 .434 0 .623.005.328.004.577.13.61.494.032.332.031.669.064 1.006.065.669.101 1.347.217 2.007.102.544.475.95.941 1.283-.817.549-1.057 1.333-1.098 2.215-.023.604-.037 1.213-.069 1.822-.028.554-.222.734-.78.748-.157.004-.31.018-.484.028v1.305c.327 0 .627.019.927 0 .932-.055 1.495-.507 1.68-1.412.078-.498.124-1 .138-1.504.032-.461.028-.927.074-1.384.069-.715.397-1.01 1.112-1.057a.972.972 0 0 0 .199-.046v-1.463c-.12-.014-.204-.027-.291-.032-.536-.023-.804-.203-.937-.71a5.146 5.146 0 0 1-.152-.993c-.037-.618-.033-1.241-.074-1.86-.08-1.192-.794-1.753-1.887-1.786zm-6.89 5.28a.844.844 0 0 0-.083 1.684h.055a.83.83 0 0 0 .877-.78v-.046a.845.845 0 0 0-.83-.858zm2.911 0a.808.808 0 0 0-.834.78c0 .027 0 .05.004.078 0 .503.342.826.859.826.507 0 .826-.332.826-.853-.005-.503-.342-.836-.855-.831zm2.963 0a.861.861 0 0 0-.876.835c0 .47.378.849.849.849h.009c.425.074.853-.337.881-.83.023-.457-.392-.854-.863-.854z"},child:[]}]})(e)}function Ag(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}function Cg(e){return $p({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 22.525H0l12-21.05 12 21.05z"},child:[]}]})(e)}const Eg=Gt(pp)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */
`,Pg=()=>(0,So.jsxs)(hp,{children:[[...Array(6)].map((e,t)=>(0,So.jsx)(gp,{width:180*Math.random()+100+"px",style:{top:80*Math.random()+10+"%",left:80*Math.random()+10+"%",transform:`rotate(${180*Math.random()}deg)`},animate:{scaleX:[0,1,1,0],opacity:[0,.25,.25,0]},transition:{duration:10*Math.random()+8,repeat:1/0,delay:6*Math.random(),ease:"easeInOut"}},`line-${t}`)),[...Array(9)].map((e,t)=>(0,So.jsx)(yp,{style:{width:300*Math.random()+120,height:300*Math.random()+120,top:100*Math.random()+"%",left:100*Math.random()+"%"},gradient:`radial-gradient(circle, \n            ${t%5===0?"rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.06)":t%5===1?"rgba(147, 51, 234, 0.08), rgba(236, 72, 153, 0.06)":t%5===2?"rgba(16, 185, 129, 0.08), rgba(59, 130, 246, 0.06)":t%5===3?"rgba(245, 158, 11, 0.08), rgba(239, 68, 68, 0.06)":"rgba(139, 92, 246, 0.08), rgba(16, 185, 129, 0.06)"} 0%, transparent 75%)`,blur:4*Math.random()+2+"px",animate:{scale:[1,1.6,1.2,1],opacity:[.3,.7,.5,.3],x:[0,100*Math.random()-50,60*Math.random()-30,0],y:[0,100*Math.random()-50,60*Math.random()-30,0],rotate:[0,180,360]},transition:{duration:25*Math.random()+20,repeat:1/0,ease:"easeInOut",delay:3*t}},`orb-${t}`)),[...Array(6)].map((e,t)=>(0,So.jsx)(vp,{style:{width:100+50*t,height:100+50*t,top:10+15*t+"%",right:5+8*t+"%",background:`conic-gradient(\n              from ${60*t}deg,\n              rgba(59, 130, 246, 0.2) 0deg,\n              rgba(147, 51, 234, 0.2) 120deg,\n              rgba(16, 185, 129, 0.2) 240deg,\n              rgba(59, 130, 246, 0.2) 360deg\n            )`,borderRadius:"50%",filter:`blur(${Math.max(1,.5*t)}px)`},animate:{rotate:t%2===0?[0,360]:[360,0],scale:[1,1.1,1],opacity:[.3,.6,.3]},transition:{duration:20+10*t,repeat:1/0,ease:"linear"}},`ring-${t}`)),[...Array(12)].map((e,t)=>(0,So.jsx)(bp,{style:{height:220*Math.random()+120,width:4*Math.random()+2,left:100*Math.random()+"%",top:100*Math.random()+"%",background:"linear-gradient(\n              180deg,\n              rgba(59, 130, 246, 0.6) 0%,\n              rgba(147, 51, 234, 0.4) 50%,\n              rgba(16, 185, 129, 0.6) 100%\n            )",borderRadius:"50px",filter:`blur(${1.5*Math.random()+.5}px)`,boxShadow:`0 0 ${20*Math.random()+10}px rgba(59, 130, 246, 0.3)`},animate:{scaleY:[0,1,.8,0],opacity:[0,.8,.6,0],x:[0,30*Math.random()-15,0],filter:[`blur(${1.5*Math.random()+.5}px)`,`blur(${2*Math.random()+1}px)`,`blur(${1.5*Math.random()+.5}px)`]},transition:{duration:6*Math.random()+3,repeat:1/0,delay:8*Math.random(),ease:"easeInOut"}},`stream-${t}`)),['import { React, useState } from "react";',"const skills = [...frontend, ...backend];","Vue.createApp({ components: true });","flutter: build --release","spring.jpa.hibernate.ddl-auto=update","docker run -p 3000:3000 myapp",'git commit -m "new feature"','AWS.config.region = "us-east-1";'].map((e,t)=>(0,So.jsx)(xp,{style:{top:85*Math.random()+5+"%",left:75*Math.random()+10+"%",transform:`rotate(${20*Math.random()-10}deg)`,fontSize:"12px",fontFamily:'Monaco, "Fira Code", Consolas, monospace',background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(10px)",border:"1px solid rgba(59, 130, 246, 0.3)",borderRadius:"8px",padding:"8px 12px",color:"#00ff88",textShadow:"0 0 10px rgba(0, 255, 136, 0.5)",boxShadow:"0 4px 15px rgba(59, 130, 246, 0.2)"},animate:{opacity:[0,1,.8,0],y:[0,-30,-60,-90],scale:[.8,1,1,.8],rotate:[20*Math.random()-10,15*Math.random()-7.5,20*Math.random()-10]},transition:{duration:18,repeat:1/0,delay:3*t,ease:"easeOut"},children:e},`code-${t}`)),[...Array(20)].map((e,t)=>(0,So.jsx)(mp,{style:{top:100*Math.random()+"%",left:100*Math.random()+"%",width:8*Math.random()+4,height:8*Math.random()+4,background:`radial-gradient(circle, \n              ${t%6===0?"rgba(59, 130, 246, 0.8)":t%6===1?"rgba(147, 51, 234, 0.8)":t%6===2?"rgba(16, 185, 129, 0.8)":t%6===3?"rgba(245, 158, 11, 0.8)":t%6===4?"rgba(236, 72, 153, 0.8)":"rgba(139, 92, 246, 0.8)"} 0%, transparent 70%)`,borderRadius:"50%",filter:`blur(${2*Math.random()+1}px)`,boxShadow:`0 0 ${15*Math.random()+10}px ${t%6===0?"rgba(59, 130, 246, 0.4)":t%6===1?"rgba(147, 51, 234, 0.4)":t%6===2?"rgba(16, 185, 129, 0.4)":t%6===3?"rgba(245, 158, 11, 0.4)":t%6===4?"rgba(236, 72, 153, 0.4)":"rgba(139, 92, 246, 0.4)"}`},animate:{scale:[1,2.2,1.5,1],opacity:[.5,1,.7,.5],x:[0,150*Math.random()-75,100*Math.random()-50,0],y:[0,150*Math.random()-75,100*Math.random()-50,0],rotate:[0,180,360]},transition:{duration:15*Math.random()+12,repeat:1/0,ease:"easeInOut",delay:10*Math.random()}},`particle-${t}`)),(0,So.jsx)(fp,{style:{top:"20%",left:"15%",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",borderRadius:"20px",boxShadow:"0 0 30px rgba(59, 130, 246, 0.3)"},animate:{rotate:[0,360],scale:[1,1.3,1],opacity:[.2,.5,.2],borderRadius:["20px","50%","20px"]},transition:{duration:28,repeat:1/0,ease:"easeInOut"}}),(0,So.jsx)(fp,{style:{top:"60%",right:"10%",clipPath:"polygon(50% 0%, 0% 100%, 100% 100%)",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(245, 158, 11, 0.3))",filter:"blur(1px)",boxShadow:"0 0 25px rgba(16, 185, 129, 0.4)"},animate:{rotate:[0,360],scale:[.8,1.4,.8],opacity:[.2,.4,.2]},transition:{duration:32,repeat:1/0,ease:"easeInOut"}}),(0,So.jsx)(fp,{style:{bottom:"25%",left:"25%",borderRadius:"25px",background:"conic-gradient(from 0deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))",boxShadow:"0 0 35px rgba(236, 72, 153, 0.3)"},animate:{rotate:[30,150,30],scale:[.9,1.2,.9],opacity:[.2,.4,.2]},transition:{duration:24,repeat:1/0,ease:"easeInOut"}}),(0,So.jsx)(fp,{style:{top:"40%",left:"5%",borderRadius:"50%",width:"90px",height:"90px",background:"radial-gradient(circle, rgba(245, 158, 11, 0.4), rgba(239, 68, 68, 0.2))",boxShadow:"0 0 20px rgba(245, 158, 11, 0.4)"},animate:{rotate:[0,180,360],scale:[1,1.15,1],opacity:[.2,.3,.2]},transition:{duration:36,repeat:1/0,ease:"linear"}}),(0,So.jsx)(fp,{style:{top:"10%",right:"30%",width:"60px",height:"60px",clipPath:"polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",background:"linear-gradient(60deg, rgba(139, 92, 246, 0.3), rgba(16, 185, 129, 0.3))",boxShadow:"0 0 15px rgba(139, 92, 246, 0.4)"},animate:{rotate:[0,120,240,360],scale:[1,1.1,1],opacity:[.3,.5,.3]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}}),(0,So.jsx)(fp,{style:{bottom:"10%",right:"20%",width:"70px",height:"70px",borderRadius:"15px",background:"linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(236, 72, 153, 0.25))",transform:"rotate(45deg)",boxShadow:"0 0 25px rgba(59, 130, 246, 0.3)"},animate:{rotate:[45,225,45],scale:[1,1.2,1],opacity:[.25,.4,.25]},transition:{duration:30,repeat:1/0,ease:"easeInOut"}})]}),zg=Gt.div`
  display: grid;
  gap: 3rem;
`,Tg=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
`,Mg=Gt.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  position: relative;

  h3 {
    font-size: 1.6rem;
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, ${rp}, ${np});
      transition: width 0.3s ease;
    }
  }

  .icon {
    font-size: 2.5rem;
    color: ${rp};
    position: relative;
    transition: all 0.4s ease;
    filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
    
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: radial-gradient(
        circle,
        rgba(102, 126, 234, 0.1) 0%,
        transparent 70%
      );
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover {
      transform: scale(1.1) rotate(5deg);
      filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.6));
      
      &::before {
        opacity: 1;
      }
    }
  }

  &:hover h3::after {
    width: 100%;
  }
`,Rg=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${sp}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
`,Lg=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg, 
      transparent 0%, 
      rgba(102, 126, 234, 0.15) 50%, 
      rgba(147, 51, 234, 0.15) 100%
    );
    transition: left 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle, 
      rgba(102, 126, 234, 0.1) 0%, 
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-10px) scale(1.05);
    box-shadow: 
      0 15px 40px rgba(102, 126, 234, 0.25),
      0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 126, 234, 0.4);

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 1;
    }
  }

  .skill-icon {
    font-size: 3rem;
    margin-bottom: 1.2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
    
    /* 모든 아이콘에 멋진 그림자 효과 */
    filter: ${e=>e.$isWhite?"drop-shadow(0 0 15px rgba(255,255,255,0.6)) drop-shadow(0 0 30px rgba(255,255,255,0.3))":"drop-shadow(0 0 15px currentColor) drop-shadow(0 0 30px rgba(102, 126, 234, 0.3))"};
  }

  .skill-name {
    font-family: 'Pretendard-SemiBold';
    color: ${ip.secondary};
    font-size: 0.95rem;
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
  }

  &:hover .skill-icon {
    transform: scale(1.15) rotateY(10deg);
    filter: ${e=>e.$isWhite?"drop-shadow(0 0 20px rgba(255,255,255,0.9)) drop-shadow(0 0 40px rgba(255,255,255,0.5))":"drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px rgba(102, 126, 234, 0.5))"};
  }

  &:hover .skill-name {
    color: ${ip.primary};
  }

  @media (max-width: ${sp}) {
    padding: 1.5rem 1rem;
    
    .skill-icon {
      font-size: 2.2rem;
    }
    
    .skill-name {
      font-size: 0.85rem;
    }
  }
`,Ig=Gt.div`
  margin-top: 4rem;
`,Bg=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 3rem;
  margin-bottom: 2.5rem;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(
      90deg,
      ${e=>e.color||"#3b82f6"} 0%,
      ${e=>e.color?`${e.color}88`:"#8b5cf6"} 100%
    );
    opacity: 1;
    border-radius: 28px 28px 0 0;
    box-shadow: 0 0 20px ${e=>`${e.color}40`||"rgba(59, 130, 246, 0.3)"};
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      ${e=>`${e.color}10`||"rgba(59, 130, 246, 0.1)"} 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 25px 60px rgba(0, 0, 0, 0.3),
      0 15px 30px ${e=>`${e.color}30`||"rgba(59, 130, 246, 0.2)"},
      0 0 40px ${e=>`${e.color}20`||"rgba(59, 130, 246, 0.1)"};
    border-color: ${e=>`${e.color}50`||"rgba(59, 130, 246, 0.3)"};

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: ${sp}) {
    padding: 2.5rem;
    margin-bottom: 2rem;
  }
`,Ng=Gt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1.5rem;

  @media (max-width: ${sp}) {
    flex-direction: column;
    gap: 1rem;
  }
`,Og=Gt.div`
  flex: 1;

  .skill-name {
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    position: relative;

    .skill-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: ${e=>e.color||rp};
      opacity: 0.9;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
      box-shadow: 
        0 4px 15px ${e=>`${e.color}40`||"rgba(59, 130, 246, 0.3)"},
        0 0 20px ${e=>`${e.color}20`||"rgba(59, 130, 246, 0.1)"};
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          45deg,
          transparent 0%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 100%
        );
        transform: rotate(-45deg);
        transition: transform 0.6s ease;
      }

      &:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 
          0 6px 25px ${e=>`${e.color}60`||"rgba(59, 130, 246, 0.4)"},
          0 0 30px ${e=>`${e.color}40`||"rgba(59, 130, 246, 0.2)"};

        &::before {
          transform: rotate(-45deg) translate(100%, 100%);
        }
      }
    }
  }

  .skill-description {
    font-family: 'Pretendard-Regular';
    color: ${ip.secondary};
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .skill-experience {
    font-family: 'Pretendard-SemiBold';
    color: ${e=>e.color||rp};
    font-size: 0.95rem;
    opacity: 0.9;
    padding: 0.4rem 1rem;
    background: ${e=>`${e.color}15`||"rgba(59, 130, 246, 0.1)"};
    border-radius: 20px;
    border: 1px solid ${e=>`${e.color}30`||"rgba(59, 130, 246, 0.2)"};
    display: inline-block;
    transition: all 0.3s ease;

    &:hover {
      background: ${e=>`${e.color}25`||"rgba(59, 130, 246, 0.15)"};
      transform: translateY(-2px);
    }
  }

  @media (max-width: ${sp}) {
    .skill-name {
      font-size: 1.3rem;
      gap: 1rem;

      .skill-icon {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
    }
    
    .skill-description {
      font-size: 0.95rem;
    }
    
    .skill-experience {
      font-size: 0.85rem;
    }
  }
`,Dg=Gt.div`
  text-align: right;
  min-width: 120px;
  position: relative;
  
  .percentage {
    font-family: 'Pretendard-ExtraBold';
    color: ${e=>e.color||rp};
    font-size: 2.8rem;
    line-height: 1;
    margin-bottom: 0.5rem;
    position: relative;
    text-shadow: 0 0 20px ${e=>`${e.color}50`||"rgba(59, 130, 246, 0.3)"};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        ${e=>e.color||rp} 50%,
        transparent 100%
      );
      opacity: 0.6;
    }
  }
  
  .level-text {
    font-family: 'Pretendard-SemiBold';
    color: ${ip.secondary};
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.4rem 1rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    display: inline-block;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -20px;
    width: 60px;
    height: 60px;
    background: radial-gradient(
      circle,
      ${e=>`${e.color}20`||"rgba(59, 130, 246, 0.2)"} 0%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: ${sp}) {
    text-align: left;
    min-width: auto;
    
    .percentage {
      font-size: 2.2rem;
    }
    
    .level-text {
      font-size: 0.9rem;
    }
  }
`,Fg=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.8rem;
`,Vg=Gt.span`
  background: rgba(255, 255, 255, 0.08);
  color: ${ip.secondary};
  padding: 0.4rem 1rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: ${ip.primary};
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }
`,_g=Gt.div`
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 
    inset 0 2px 6px rgba(0, 0, 0, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    animation: backgroundShimmer 3s ease-in-out infinite;
  }

  @keyframes backgroundShimmer {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`,Hg=Gt(tp.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${e=>e.color||"#3b82f6"} 0%,
    ${e=>e.color?`${e.color}dd`:"#6366f1"} 50%,
    ${e=>e.color||"#3b82f6"} 100%
  );
  border-radius: 15px;
  position: relative;
  box-shadow: 
    0 0 20px ${e=>`${e.color}40`||"rgba(59, 130, 246, 0.3)"},
    inset 0 1px 2px rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    border-radius: 15px;
    animation: progressShimmer 2.5s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 2px;
    right: 2px;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    border-radius: 10px;
    opacity: 0.8;
  }

  @keyframes progressShimmer {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`,$g=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`,Ug=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${op.primary};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .stat-number {
    font-size: 2.5rem;
    font-family: 'Pretendard-Bold';
    color: ${rp};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${ip.secondary};
  }
`,Kg={Java:{icon:(0,So.jsx)(Jp,{}),color:"#f89820"},Python:{icon:(0,So.jsx)(eh,{}),color:"#3776ab"},JavaScript:{icon:(0,So.jsx)(Zp,{}),color:"#f7df1e"},Spring:{icon:(0,So.jsx)(jg,{}),color:"#6db33f"},"Spring Boot":{icon:(0,So.jsx)(kg,{}),color:"#6db33f"},Flask:{icon:(0,So.jsx)(Jf,{}),color:"#ffffff"},React:{icon:(0,So.jsx)(th,{}),color:"#61dafb"},"Next.js":{icon:(0,So.jsx)(dg,{}),color:"#ffffff"},"Vue.js":{icon:(0,So.jsx)(ih,{}),color:"#4fc08d"},Flutter:{icon:(0,So.jsx)(Zf,{}),color:"#02569b"},Android:{icon:(0,So.jsx)(Kp,{}),color:"#3ddc84"},"RESTful API":{icon:(0,So.jsx)(yh,{}),color:"#ff6b6b"},Ajax:{icon:(0,So.jsx)(yh,{}),color:"#4ecdc4"},"Java Swing":{icon:(0,So.jsx)(Jp,{}),color:"#f89820"},Thymeleaf:{icon:(0,So.jsx)(jg,{}),color:"#005f0f"},MySQL:{icon:(0,So.jsx)(cg,{}),color:"#4479a1"},Oracle:{icon:(0,So.jsx)(fg,{}),color:"#f80000"},PostgreSQL:{icon:(0,So.jsx)(gg,{}),color:"#4169e1"},Redis:{icon:(0,So.jsx)(wg,{}),color:"#dc382d"},MongoDB:{icon:(0,So.jsx)(lg,{}),color:"#47a248"},AWS:{icon:(0,So.jsx)(Wp,{}),color:"#ff9900"},Docker:{icon:(0,So.jsx)(Xp,{}),color:"#2496ed"},"IntelliJ IDEA":{icon:(0,So.jsx)(ag,{}),color:"#fe315d"},PyCharm:{icon:(0,So.jsx)(vg,{}),color:"#21d789"},"Android Studio":{icon:(0,So.jsx)(Uf,{}),color:"#3ddc84"},VSCode:{icon:(0,So.jsx)(yh,{}),color:"#007acc"},Eclipse:{icon:(0,So.jsx)(Yf,{}),color:"#2c2255"},Git:{icon:(0,So.jsx)(Qp,{}),color:"#f05032"},Notion:{icon:(0,So.jsx)(pg,{}),color:"#ffffff"},Slack:{icon:(0,So.jsx)(nh,{}),color:"#4a154b"},Figma:{icon:(0,So.jsx)(Yp,{}),color:"#f24e1e"},Discord:{icon:(0,So.jsx)(Gp,{}),color:"#5865f2"},"Maven/Gradle":{icon:(0,So.jsx)(rm,{}),color:"#c71a36"},"Apache Tomcat":{icon:(0,So.jsx)(Kf,{}),color:"#f8dc75"},Gunicorn:{icon:(0,So.jsx)(Jh,{}),color:"#499848"},"Node.js":{icon:(0,So.jsx)(ug,{}),color:"#339933"},HTML:{icon:(0,So.jsx)(yh,{}),color:"#e34c26"},CSS:{icon:(0,So.jsx)(yh,{}),color:"#1572b6"},LLM:{icon:(0,So.jsx)(yh,{}),color:"#8e44ad"},Swagger:{icon:(0,So.jsx)(Sg,{}),color:"#85ea2d"}},Wg=()=>{const{skills:e}=Lm,t=[{title:"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4",icon:(0,So.jsx)(yh,{}),skills:e.programming},{title:"\ud504\ub808\uc784\uc6cc\ud06c/\ub77c\uc774\ube0c\ub7ec\ub9ac",icon:(0,So.jsx)(th,{}),skills:e.frameworks},{title:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",icon:(0,So.jsx)(Sh,{}),skills:e.databases},{title:"\ud074\ub77c\uc6b0\ub4dc/\ubc30\ud3ec",icon:(0,So.jsx)(Wp,{}),skills:e.cloud},{title:"\uac1c\ubc1c \ub3c4\uad6c",icon:(0,So.jsx)(rm,{}),skills:e.tools},{title:"\ud611\uc5c5 \ub3c4\uad6c",icon:(0,So.jsx)(om,{}),skills:e.collaboration},{title:"\uc11c\ubc84",icon:(0,So.jsx)(Jh,{}),skills:e.servers},{title:"\uae30\ud0c0",icon:(0,So.jsx)(yh,{}),skills:e.others}],n={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return(0,So.jsxs)(Eg,{id:"skills",children:[(0,So.jsx)(Pg,{}),(0,So.jsxs)(dp,{children:[(0,So.jsx)(up,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:"\uae30\uc220 \uc2a4\ud0dd & \ub3c4\uad6c"}),(0,So.jsx)(zg,{children:t.map((e,t)=>(0,So.jsxs)(Tg,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:[(0,So.jsxs)(Mg,{children:[(0,So.jsx)("span",{className:"icon",children:e.icon}),(0,So.jsx)("h3",{children:e.title})]}),(0,So.jsx)(Rg,{children:e.skills.map((e,r)=>{var i,a;const o=["Flask","Next.js","Notion"].includes(e);return(0,So.jsxs)(Lg,{$isWhite:o,variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t+.05*r},whileHover:{scale:1.1},whileTap:{scale:.95},children:[(0,So.jsx)("div",{className:"skill-icon",style:{color:(null===(i=Kg[e])||void 0===i?void 0:i.color)||np},children:(null===(a=Kg[e])||void 0===a?void 0:a.icon)||(0,So.jsx)(yh,{})}),(0,So.jsx)("div",{className:"skill-name",children:e})]},e)})})]},e.title))}),(0,So.jsxs)(Ig,{children:[(0,So.jsx)(up,{style:{fontSize:"2.2rem",marginBottom:"3rem",background:"linear-gradient(135deg, #3b82f6, #8b5cf6, #06d6a0)",backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent",textShadow:"none",position:"relative"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:"\uc8fc\uc694 \uae30\uc220 \uc219\ub828\ub3c4"}),[{name:"React/Next.js",level:"\ucd08\uc911\uae09",percentage:60,description:"\ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8\uc744 \ud1b5\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uc124\uacc4 \ubc0f \uc0c1\ud0dc\uad00\ub9ac \ud559\uc2b5",projects:["DevHub","TripplAI"],color:"#61dafb",experience:"1\ub144"},{name:"Flutter/Mobile",level:"\ucd08\uae09",percentage:55,description:"\ubaa8\ubc14\uc77c \uc571 \uac1c\ubc1c \ubc0f \uc2a4\ud1a0\uc5b4 \ubc30\ud3ec \uacbd\ud5d8",projects:["LittleBank"],color:"#02569b",experience:"6\uac1c\uc6d4"},{name:"Java/Spring Boot",level:"\ucd08\uae09",percentage:50,description:"RESTful API \uad6c\ucd95 \ubc0f \uae30\ubcf8\uc801\uc778 \ubc31\uc5d4\ub4dc \ub85c\uc9c1 \uad6c\ud604",projects:["DevHub","LittleBank"],color:"#6db33f",experience:"8\uac1c\uc6d4"},{name:"Python/Flask",level:"\ucd08\uae09",percentage:50,description:"AI API \uc5f0\ub3d9 \ubc0f \uac04\ub2e8\ud55c \uc6f9 \uc11c\ubc84 \uad6c\ucd95",projects:["DevHub","TripplAI"],color:"#3776ab",experience:"6\uac1c\uc6d4"},{name:"Database",level:"\ucd08\uae09",percentage:45,description:"\uae30\ubcf8\uc801\uc778 CRUD \uc791\uc5c5 \ubc0f \uac04\ub2e8\ud55c \ucffc\ub9ac \uc791\uc131",projects:["DevHub","LittleBank","TripplAI"],color:"#4479a1",experience:"1\ub144"},{name:"AWS/Docker",level:"\uc785\ubb38",percentage:40,description:"\uac00\uc774\ub4dc\ub97c \ucc38\uace0\ud55c \uae30\ubcf8\uc801\uc778 \ubc30\ud3ec \ubc0f \ucee8\ud14c\uc774\ub108 \uc0ac\uc6a9",projects:["DevHub","LittleBank"],color:"#ff9900",experience:"6\uac1c\uc6d4"}].map((e,t)=>(0,So.jsxs)(Bg,{color:e.color,variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},whileHover:{y:-12,scale:1.02,rotateX:5,transition:{duration:.3,ease:"easeOut"}},children:[(0,So.jsxs)(Ng,{children:[(0,So.jsxs)(Og,{color:e.color,children:[(0,So.jsxs)("div",{className:"skill-name",children:[(0,So.jsx)("div",{className:"skill-icon",style:{background:e.color},children:((t,n,r,i,a,o,s)=>{const l=e.name.split("/")[0];return"React"===l?null===(t=Kg.React)||void 0===t?void 0:t.icon:"Flutter"===l?null===(n=Kg.Flutter)||void 0===n?void 0:n.icon:"Java"===l?null===(r=Kg.Java)||void 0===r?void 0:r.icon:"Python"===l?null===(i=Kg.Python)||void 0===i?void 0:i.icon:"Database"===l?null===(a=Kg.MySQL)||void 0===a?void 0:a.icon:"AWS"===l?null===(o=Kg.AWS)||void 0===o?void 0:o.icon:(null===(s=Kg[l])||void 0===s?void 0:s.icon)||(0,So.jsx)(yh,{})})()}),e.name]}),(0,So.jsx)("div",{className:"skill-description",children:e.description}),(0,So.jsxs)("div",{className:"skill-experience",children:["\uacbd\ud5d8 \uae30\uac04: ",e.experience]})]}),(0,So.jsxs)(Dg,{color:e.color,children:[(0,So.jsxs)("div",{className:"percentage",children:[e.percentage,"%"]}),(0,So.jsx)("div",{className:"level-text",children:e.level})]})]}),(0,So.jsx)(Fg,{children:e.projects.map((e,t)=>(0,So.jsx)(Vg,{children:e},t))}),(0,So.jsx)(_g,{children:(0,So.jsx)(Hg,{color:e.color,initial:{width:"0%"},whileInView:{width:`${e.percentage}%`},viewport:{once:!0},transition:{duration:1.2,delay:.1*t,ease:"easeOut"}})})]},e.name))]}),(0,So.jsx)($g,{children:[{number:"1+",label:"\ub144\uc758 \uac1c\ubc1c \uacbd\ud5d8"},{number:"3",label:"\uc8fc\uc694 \ud504\ub85c\uc81d\ud2b8"},{number:"15+",label:"\uc0ac\uc6a9 \uae30\uc220 \uc2a4\ud0dd"},{number:"2",label:"\uc790\uaca9\uc99d \ubcf4\uc720"}].map((e,t)=>(0,So.jsxs)(Ug,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},whileHover:{y:-5},children:[(0,So.jsx)(tp.div,{className:"stat-number",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.5,delay:.1*t},children:e.number}),(0,So.jsx)("div",{className:"stat-label",children:e.label})]},e.label))})]})]})},Gg=n.p+"static/media/littlebanklogo.93a911b985a434149a2c.png",Xg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABnCAYAAACNfudzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABM1SURBVHhe7Z15mBTVuYff01VdvQzMyCKgA16CyioQghoNAYxCBDHileQqJtFEYtS4RGJITMRcryZGE7PgFhOjyFX0aojoNfG5WTCExEg0iogLqCAwUZZhm6V7eqs6949aprume6ZhppqGnPd5iuo69dWpU4f6fV99p5YRUkqJQqEIjJC/QKFQ9CxKZApFwCiRKRQBo0SmUASMEplCETBKZApFwCiRKRQBo0SmUASMEplCETBKZApFwCiRKRQBo0SmUASMEplCETBKZApFwCiRKRQBo0SmUASMEplCETBKZApFwCiRKRQBo0SmUASMEplCETBKZApFwCiRKRQBo0SmUASMEplCETBKZApFwCiRKRQBo0SmUASMEplCETBKZApFwCiRKRQBIw7Vv09mbd+F9e4WrHe2oo0+ltCHBiMG9PWbKRQHnUNOZJn7Hsf880tY2xr9qxD1A9E/Og7jms/5VykUB41DRmRWwzYyt96P+dZG/6oOhI4egHH9l9DGjfCvUigqziEhsszi5WSXPOUv7pLwxedifPHf/cUKRUWp+oEP882NByQwgOySp7A+2OkvVigqStWLLHPHg/6i/SJz5yP+IoWiolS1yDKLl2Nt+qe/eL8wV68ls3i5v1ihqBhVLTK5+X1/kYf24ZFE715IzcolRO+5kdDQer+Jh/XuFn+RQlExqlpk5ob3/EUAhIbWE/3pt9BOOB4AbcxxxB66Fe3DI/2mAFjv/IuITErk7ibMtRuRzQn/WoVLzsLcsofchp3IjOlf2+NU7eii3L2P5Jyv+osBiCyYhz5rir+Y7PI/kln0sL8YgPivfoI48jC+WS0l6SX/R/rh34MEQiFi35hL+JMn+i2rDtmWofXGZeReawAEAMb0E6hZcJbftNvI5hTN//ksufU7QUJoUC2135uFVl/nN+0xqjaSWTt2+4s8RL/iHSKO7OMv8rAa9/qLep6cidzbjNy9z5ma9n9qTsAB+D1r+x6yv30BAQgBQkoy/7MC2XRoRDThNNydB0X25QbM9TtsKQuQO1pI/e/rfrMepXoj2Z4mkudd4y+GTu5/dXY/Lf7knYi+xcXZU1hvb6btmluRqQwCgd2x7gnjzIWwI413IrXPJaCPH0H0+1ciYhGnvDysLTtIXLMI2ZK06xSC0DEDqfnpVYi6Gr95VVHJSJZ69g0Sd65ylgQIiJ4zlporJvkse46qjWSibx2if/HIlF3yFNbbmwvKrLc3lxSY6FMXuMDycb2kF1XyPLS9zpnnC1AIhLvRARCq70946nhvXwIwZpyEqI37TasSu3/c6QA7oQyME49BG1yHcDpJ1ESInG7n9kFRdZHMXPc22tjh0EVkAtCnnYp+9lRyK1aTe2alf7VH+DMzMK6c6y/ugLVxK9lHf4v599fQPj6RyPVf8pt0ihvJSGVwI5MX0TqJYO68O5EMAMvCfHMz1u4WQoOPRBt2VKAnbE9RyUgGIJMZsuu2gWmhjxxIqG+wjqgqRCZ37Ca3ei3mC69irl5L7Oc3ERrxIax3tpC66rvIdMa/SdmIiEH07oWEjv83/yoP89W3bHG9uK6gvGblkoLlrpDNCax1G5A5q3BFJkv24d9gNeyw7RCEz/go2uQJeSKzEXW90MYeB1rVXmT0OLItQ+I7y8i+9k+E0z+RaWOIBySySnNQRWauXkvub2swn1+D3L3PK9dPP4XId64AIPvgk2T+++m8rfYP46LZhC85z18MQO4vL5Nd+gzW+uK3CvZXZKWQbWlS1y/CXLvBi2jGZZ/GmDvDb1oeUtq5V9ZE9I6BEfZbHBiWhWxOgiUhFkHEDL9F+VgS2ZxEWhIRMzqtqzuRTLZlkW22ExaGjuh1AFcAAVNxkVkbGzD/+jK5v77S6f2r+CM/QAweCMk2kl+5pdMb06UQQ+uJ33sjxGMF5blnV5F95Jkun2vsSZGlv7WI3NoNzuWjwPjynE5Flr53GblVa+wLzoF9if3XpYi6XpivvkPqR49hbdsNEkT/OuJ3zUfU9SL1w8cw33BzVYE+dTzRK2Z7dcpUhtQdT2C+vgWEQBs1hOiC8+3h/6XPkXnqBUhnkXZ2iBgygNhXz0Ef/6EOl50ylaHtR09jvmE/kaONGkzs67NBSlKP/oXM0y8h0zlPNNqQ/sSunoE+fqg/eLdHsrUNXnJmTBtTXGQSzPf3kv7Na6T/8CYkMgWX5aIuTuzCk4jMHIMwdP/WmJt303L7Cm87EPSafxrhCaUfZuguFb0mSd90D23zFtqPS3UiMIDsH/5m/4jHCF8w07+6LMIXzCwQWPax35KcdQXpHzzQpcB6Gun8Y//Hdu3XZHMCa8cerJ17sDa+j2zcR/Z3fyf59buwPtjlDfOHjuqH6F0DUmLtacFq3Ie1cx9W476ON6R9Ntl1m8muWEPL524n8/ifkWn3xJNIwGrYSeLrD5Be9nzH2woSrD2tWI37MBubyL2+heyKdTRfdCfpx/+GTGXtw3Qms2E3LQuWkv7134sevle9zF8oxNy6m+b5j9E0bzGp5a8gW1NIKe3IjjNvSpL82Spab34WmeiYZsishfVBE2ZjK9bOVqzGVmQm5zfrUSomsszdj5Jb+aK/uCzCMyajT57oL+4UffJEwjMme8uZxcvJ/PwJZCJZYFcp7EGz9lHFcoYjbHsBpom5biPpe3+NcM8/J7KEju6PiNuXSO6oojfPq6sA12BvK6mfPgnNdp84e7PnTkQRQpC6/3fkXtnkr6XgWOTeBG2LfgPNbeCMqHqNcBoiBLTd/xy5NR0vz+3ddXKfTELmT+sx12/32udOeCOz7TvL/mMrqWVrigrabRoHPpi7X1RMZOYBCszFuPQzJYf0/YiB/TAuO99ffFCxHa4dIWzP2wWevbQv8+5ZhmxNIpGIqIF+4khC9UeijWgf0PH24UTMEgHBMbRt3bk2fhjR684jet0cQscOstch7bllkV660st92qtx2uf9tuf6uKHE5p9NfP7ZaMMGeie6XaWk7dHni9Tl9Euphgswpo9B9InbezQ0jLPGUnP9DHrdcBbRi09BxMJ2xzlT6vdvYu1o9tfk9RMSJwL6LXqWionM2tW9Jy7EMUdhXPoZf3FRjMvPt/O5KsLz1M5Clx7Uvb/mem0JiBCRS2fTa/ltxG7/CjUP30j43PZobTv19vtkJXfiOHwhQETD1NxyMTV3XIox8ySMmSfS654rMc78SJ6rF+Te3Iq5cVthNW77wJ5HwtTcfAG9fngRxswJGDMn0PvueRhnjnfs7e3MN/6JubHwct0LQk4/FUM7+ghiF5xM/JLJHPHE5dRccwbGaSMwJh9PbO7J9L5lNui6V5HcncBsKHLe5Uda7xiDo2Ii6w7m868AoJ85Cf3cM/yrCwjPPQv9Ex8FwFrzln/1QaMwgpURyfyRAonx2TMxLpgGkeKjiW4AcCNZSRxnLyXoU8ahf2x04YmtaxizTgY95DYccibm+sLXjvKPRSIJTxlN+NQRhSetHsI4awLoWnv7TAtzwwd5Rm4kc6fSrY/MnkD0/JMQ0Y59oA3thz7MfT7Vbpf5XpHH89z+Kb2bHuWQEFn6nse8If7ItRehjRrmNwFAGzvcu0yULQnSP37Ib3LQsB20G8HKiGS+SKHVD8A4e1JJL09eAHCddElLx8DOu4oTOsa+me3lPEJgbdpeYJN/LO3H1hHtmP5owwa0tw8wNxWLZL4nY7pCgtyXJPvSZtp++VcSd/yB3Du7nJV2Hf7LUvL6h+CDGBwqIpMf7CR9873ecqmvURlXf9b7nfnxQ1gNhSfFwcTNA2wPWkYky8/JpIT+ddC78ycTvH3sT05WCk1DRMNO7mK3wWrLgNl+o71jTlaiPi3k1IUXYWTKX5fTL+48f3sf1p4EyV+sYu+n72Xv+b+gZeFTtC17mcwLG0FabmVIJFZjq39zr5/siNZV2O8+h4TIAMy1G0jf/DMAQqOOJXJ1odCM+RcTGj4UgMzSZ8j9qXsDLT2Nm3PYHrQM/5mXk9mevett7KBTRk6GW7+/0E++yxfQnCwY7vbnZJ3v0N2fE2Ga2nx1uT866Z+cRepX/6Dp878k/eQryNZM8dFFZ16yz9wo7h2b36BnOWREBpB7bjXZp58DQJ8zHX3aqfbvaacSnn06AOaL68jev6xgu2rAzQFsp1me68yPDp37dpv8CNaltR2gusCtyDYW/WoLcqH8lpXbPpztQv17I6LtT4F4bXEPwI+E1JMvk/zlKmTOdKKwRAyqpebK06h94CL6/OrL6GOP9jYoUotN3mFVgkNKZACZnyzxbiRHFl5OzcolRBZeDtivx6S+cYdvi+rAdtCuby3pYwvoGCk6x3XO3txv4OIYdJaTkcpgNTZ7kQIhEHXxgiiTfyyd5WSksk5d9qIARG2soIF28Cl9n8zcsovU4y+290lIEL9sKkc8+AUinxqPVn8E6FreUZduTwWDGByKIgNou3ABsqFwONl89a2S759VA24eYHvQTrysi2dv50NlbNG+j7yIVhQ3HylpAOa7H2Bt3+PlZEiJNnJwgU3HnKw4uXe3Y23fVxDJtJFuxHHKnAa7cz/mpkYs5wkPiUQ7oZ7IzLEQ8stEelOpFrn9ZEe0csJ+9zgkRQaQ/Pz1pG+6h8zi5aS/ex+pa2/zm1QVnqd2FvynRgecSCNw7pN1vYUTcMrIyYRbP8hkCnKF37mQiRSZJ/5in3xORaJfb/TRxxTY+SOtTKbB9waCTKRJL1sNsj1AaX1r0EcVPito9487dWy4taulYF+hqAFaoZ21J4G1K+FVVLLPVE5WPrmVL5Jd8hS5P77gX1V1SBxP7SyV4zwLIkUZW3iRoivn7Dh7KSH3/Bu0Xnk32T+vw2psIrduM4lvPEB2zUbHyN7AmHoCoUFHdKjGbZlEkn1+PS1X3U921ZtYjc3k1m2l9fql5F6xH6Ny26dPHV1Ql4gaiH69vXYhJeamRswtuzzRavV9vD6QSDIvvUdmxVuQs5AZk8xz62m+6jGsbe7bHJ30mMrJDk9sB+361pI+tgB/pOgKL+fZz5zM2riNtlsepXXubSTn/xxrw/vOOjuKhgb3x5jT8R5d/rG4x2Zt2kHiu8to+ewiWq9bYt90zmtXqL4v0fNOLmycAH3YkZCXk1mbdtJy9SPknPtp2rED0Pr3tm2cfSYXrWDv2Xex95y7Sfzg98i2bN5Rl+6xCgYxUCKrHG4eYHvQTrysS6VyMhHy7ceOAXa+JqE2Rvzb/0FoYGEUs6txtnN/h0R7rpPfCDds1Map+dZsQgM7fgpCnzAUYeheTiYBK5VFNrYAEBpYR2T2hMK2OpNtLxG1UWIXnuTkaaX7zO0npBPvipv1GEpkFcLNOWwPWob/zMvJXO/dFaLcnAy3foh8cTrxGy4kFI90iLThj4+h131XoQ0v/q6VP9JGv/AJar49x34rwAun9jw8aSS1981DG36UvxoAtOMGEb/mkxAOef0jhMDcusc2EBA9byLxL01B6FpBpEUIoud8mCMe+gKR6aMI1cWcFpXoADeKVyicVeylzcRpF/uLOiX/i1T7u20+7ouXXX0vpBg99dJmtSDb0iRveBBz7SZwXnKMzptB5MLT7WcTN23D2r4PEY+gjRqCqIn6q/CQbRkSC5divrYZ6Zyl0UvOIDp3sv3x0E3bsbY3IWoiaCPrETXlvbEsE2ly67chk2lCtXG04YOcp+vzbDI5cuu3I5vaEHUx9OMHdrCpJlQkK0GprxEfFjheXAiB1eA866draMMHE55yAvqJx3cqMJf8qCeEQDY4D+PqIbThRxOeMgp94rCyBQb216PCE4diTB6BPn5IUfEIQyc8bjDG5OMJjxtc1KaaqEqRCV0rWNYnTShYrgRdPe1/SJOfN3WDDjmZ30AB1SYy0acW4+rPEf/jgwUfL41871r7D0v86JvoZ5xSsE2PUhNDnzWF6G1fQz/tZP/awwc7nSkrNewMf06mKE5ViCw0tJ7IDZcRX34X4TnT/as9tImjidx4hS24OxYQnjXVb3JAaB8ZjXHtRcQfvp3Ignlop9gvGR62OAOH3QxkTuRyIpmKYyU5qCLTxo0g+v2vEXvoVvTpH/Ov7hTtxBMwFlxiC+7789E/9QmIln/tH+rfh/D5M4ne+x2iP/4m4XPPqOhXhg8qeTlZd/DnZN2r7fClYqOLyQuuQ263k2xt0kcwLpxFaMxxfrPukc3Z33F0PpIq97V0GF3UPjYBfdqpaJMnIsIdPxl2WGNa5F5/z/kjFLYkQkfWoY0qfFyqLEyL3OtbkE1tXlFoQG2H5xsVFRSZ+eI6rE0NaJMmEBpS/F5JTyITbZgvvOq9DpNZvBx92qmEhgzymyoUgVIxkSkU/6oc1JxMofhXQIlMoQgYJTKFImCUyBSKgFEiUygCRolMoQgYJTKFImCUyBSKgFEiUygCRolMoQgYJTKFImCUyBSKgFEiUygCRolMoQgYJTKFImCUyBSKgFEiUygCRolMoQgYJTKFImCUyBSKgFEiUygCRolMoQgYJTKFImCUyBSKgFEiUygCRolMoQgYJTKFImCUyBSKgFEiUygC5v8BR5wbIEKiGiYAAAAASUVORK5CYII=",Yg=n.p+"static/media/devhublogo.8d0b44045a94598cb206.jpg",Qg=n.p+"static/media/cjlogo.8677ed87eb17319017c0.png",qg=Gt(pp)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */
`,Jg=Gt.div`
  display: grid;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`,Zg=Gt(tp.div)`
  background: ${e=>e.current?"rgba(16, 185, 129, 0.03)":"rgba(255, 255, 255, 0.02)"};
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>e.current?"rgba(16, 185, 129, 0.3)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${e=>{if(e.current)return"#10b981";switch(e.type){case"employment":default:return rp;case"project":return"#3b82f6";case"business":return"#f59e0b"}}};
  }

  &:hover {
    background: ${e=>e.current?"rgba(16, 185, 129, 0.05)":"rgba(255, 255, 255, 0.05)"};
    transform: translateX(10px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${lp}) {
    padding: 1.5rem;
  }
`,ex=Gt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`,tx=Gt.div`
  flex: 1;

  h3 {
    font-size: 1.4rem;
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .position {
    font-size: 1.1rem;
    color: ${ip.secondary};
    font-family: 'Pretendard-Medium';
  }
`,nx=Gt.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${e=>{switch(e.type){case"employment":default:return"rgba(102, 126, 234, 0.05)";case"project":return"rgba(59, 130, 246, 0.05)";case"business":return"rgba(245, 158, 11, 0.05)"}}};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid ${e=>{switch(e.type){case"employment":default:return"rgba(102, 126, 234, 0.2)";case"project":return"rgba(59, 130, 246, 0.2)";case"business":return"rgba(245, 158, 11, 0.2)"}}};
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${e=>{switch(e.type){case"employment":default:return"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%)";case"project":return"linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)";case"business":return"linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, transparent 100%)"}}};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.95) contrast(1.1);
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: brightness(1) contrast(1.15);
    transform: scale(1.05);
  }

  svg {
    color: ${e=>{switch(e.type){case"employment":default:return rp;case"project":return"#3b82f6";case"business":return"#f59e0b"}}};
    z-index: 1;
  }

  @media (max-width: ${sp}) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`,rx=Gt.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(16, 185, 129, 0.3);

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    background: #10b981;
    border-radius: 50%;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`,ix=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${ip.tertiary};

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    svg {
      font-size: 0.9rem;
      opacity: 0.7;
    }
  }
`,ax=Gt.p`
  color: ${ip.secondary};
  line-height: 1.7;
  font-family: 'Pretendard-Regular';
  margin-bottom: 1.5rem;
`,ox=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,sx=Gt.span`
  background: rgba(102, 126, 234, 0.1);
  color: #a5b4fc;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }
`,lx=Gt.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${e=>{switch(e.type){case"employment":default:return"rgba(102, 126, 234, 0.1)";case"project":return"rgba(59, 130, 246, 0.1)";case"business":return"rgba(245, 158, 11, 0.1)"}}};
  color: ${e=>{switch(e.type){case"employment":default:return rp;case"project":return"#3b82f6";case"business":return"#f59e0b"}}};
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-family: 'Pretendard-Medium';
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,cx=()=>{const{experience:e}=Lm,t={"\ub137\ucef4\uc194\ub8e8\uc158":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADgAOADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiq+p/avsUn2PyftGPkMudgPvjmvIPEvw1+MviOeYR+PtA0m3c/IlrppLoP9481xYzFzor3KUpv+7b9Wj0svwFPEt+0rQpr+9zfgoxkz2eivk/xV+wt8TvGLs1/wDF7ULjd/CRIqj8Aa4PX/8Agl18RFLSWnxCS6brtkmuEY/jnFfNYjiDNoa08ulJf44J/crn2GD4UyKppWzaEX/17m1975T7sor85tR/ZH/aE+Fc3m6VqGoXiJ917LUy7f8AfJ5qkP20fjr8DNQW28QreSeSfnTVLPcXA/2/615kvEFYd/8ACjg6tJd7XX36HtR8KXi1fKMfRrvtflf3e9+J+k1FfIHwc/4Ky6F4huIbTxfpE2iyMAGu7dvNgz7j7wFfU/gj4g6L8SNEj1HQ9StNTs5BkSQSBsfX0/Gvq8p4hy7Mo3wdVSfbZr5PU+Fz3hPNsnly5hRcF0e8X6SV18r3NiiiivaPnQooooAanSnU2LpTqACiiigAooryv9qn9tX4Y/sVeE7PWviX4s0/wzZ6hN9ntBOSZLl+pCIMk4HJPQUAeqUVx/wM+P3g39pb4eWfirwL4h03xLoN8P3d3Zy71B7qw6qw7g812FABRXl/xk/bS+FX7P8A4hsNH8YeO/Duh6vqlxHaWtjPdr9omlkYKi7BkjJI6gV6hQAUUUUAFFFFABRRRQAUUUUAFFFFABVHX/DWn+KrBrXUrG0v7eQENHcRLIpB9iKvUVMoqS5ZK6KhOUJc0HZrqj5V+P3/AAS48L+N7ee+8Hyf8I7qhy/kHLWsx9MdV+o49q+P7XUviN+xJ8TDGGvNF1CI8xMS1reJ64+6wP5iv1qrgf2iP2eND/aN8Bz6Pq8KrOoLWl2q/vbWTswPp6jvX51xFwDQrf7ZlP7mvHVcuib+Wz818z9d4S8U8Th/+E/Pf9ow0tHze9KK+fxLyevZnJfshftmaP8AtNaB9nk8vTfE1ombqxLf6wf89I/VfbqK9rr8f9a0vxN+yZ8cXh8x7PW/D9zmORDhZ1zwR6qwr9Sv2e/jNZfHr4UaV4ksyqtdxAXEQP8AqJhw6n8f0IrbgjiurmCngMerV6e/TmS0bt3T3+85/ErgWjlMqeZ5W+bC1tuvK2rpX6xa1i/VM7aiiiv0E/KBkL793+ycU+obWPyzL/tPkfkKmrGhKUoXlvr+ZUtHoFFFBbaMngDqa2JCv5+/+Du3x23iL9qv4Y+F1YsdI0WWdUzwWnkUDj/gNfv9BqNvdSbYp4ZGHUK4Yiv5x/8Ag6klkP8AwVG0ISbvKTw5p5j9P9a2aCobnkf7Af7eXxe/4IfftL/2R4o0XVLfw3rCwz674avD8txbyAMlzAc7RIFIIZeCODX9L37NP7Svg/8Aa2+Dmj+OvA+sW+saDrEIkR42G+3fHzRSL1SRTwVP8iDXyn+3x/wSZ8G/8FRP2M/CIkSHRfH2k6BaSaFriL8ynyFPkTf34m9+VPIr8Xf2J/21fjB/wQR/bE1bwh4w0nUDoP2sQeIfD05Ihu484W7tmPG7GGVl4YcHvQV8Rpf8F3bRtA/4Lra3JGzqf7T8P3KnceCfJPFf0cfEz9pbwL+z78OrXXvHnizQ/DFibVJTJf3axNJ8oJ2qTuY+yg1/M/8A8FYPj54X/bC/4K9WvjTwLqkOueHfEVz4dW1nhByHHkrJGw6hkbKn6V6t/wAFdLyf4x/8FtdZ8La94V8V/ErQfDNnbWX/AAjOjXjxXFzDFb+YxiwflI3EkgZwKAtdI/XLV/8Ag4e/ZG0fVls3+K1vK2cGSLTLt41/Hy69m/Z1/wCClPwL/atvBa+A/iV4a1q+b7tobj7Pcv8A7scoVm/AGvwAf4kfse+GJHs9S/Y1+OUF5Edro/iG6DA/itQap+y/ov7UcWl337OH7NvxU+F2pWF/FPdeJNe8RSR6fbwhuQ0kxQJk4wRQHKj9kf8Agpl/wXP+HP7Bvg2+/sC60Xx9420jVl0vUPDcV/5FzaHJDsx2n7mOR713P7A3/BXb4WftufD7wUy+IND0T4geLLd5H8Ki8866tZFL5jzgZOxN30Nfkd/wXz/4JCx/s2+C9S/aBu/GU2qax4y1i2S50r7OvlxSSoN5Eg+9gjqete0f8EP/APgi7Y/Dvwd8M/2sv+EzvLi6h0W/1YaELVQm4w3EIXfjPGN1AuVWP1V/aK/4KA/Bn9k8bfiB8RPDfh+4/wCfWS5825H1iTc4/EV4jZ/8HB/7I97qJtV+LVir5xufTbtUP4+VX4v/APBKL/gnrp//AAWP/ba+J0nxG8Ua5b2egzS6rdfZ5N896ZLl0Ee587FGO1frFL/wa/8A7J8nh/7GPDfiZbjZj7X/AG9P5m7+9jOPwxQKyR9lfAr9rT4a/tM6Ot94D8beHfE0LDJSzvEaZP8AejzvX8RXM/tF/wDBRX4J/sny+T4++I/hvQbrJBtTcefcr9Yo9zj8RXwP8Kf+Dfbw/wD8E8P2lZfix4Q+I2rXWieGdE1LUrbQbqTy7s3SW7GJ1KECREbkhge1fCv/AARI/wCCT2g/8FgNe+IXjv4peKvEXl6HqEO+C1lBkv5bjzJHLyNkqBt4C+tAcq3P100//g4e/ZF1HVjZr8VrVGzgSPpl2sZ/Hy6+mfgR+1R8Ov2m/D41PwD4y0DxRa43N9hu1kki/wB9M7l/ECvizUv+DXn9lG88NtZQ+H/FFtdbcLeLrszSBvXBO0/TFfn98MP2QLb/AIJP/wDBwN8N/h74P8Va3rGg6lZy3rrcN5bbJ7WceVIq4V9uAQcenegLJ7H6nftE/wDBeT9mX9mjxtfeG9c+IEd5rmlztb3lrp1pLc/ZnU4Ks6rtyPYmsV/+Din9ktPBw1j/AIWZG2ePsg025+0Z9Nvl4/HOK/KT/ghz+wD8O/8AgpL+2p8cpPippN5ren6HNPd28cN49uDPJeOhLFSC3yjpXI+KP+Ce3wv0v/g4EX4Dx6TfL8NTrMVsbH7a/neW1okpXzfvY3k/hxQVyrY/Zr4Hf8F+/wBlv48eJrXRdP8AiNb6Zql7MsFvDqdpNarK7HCgOy7Bk8ckV9mq4dQykMrDII71/O1/wcM/8E0vhN/wT48R/CXUfhbol3ocmvX7LeJJeyXCsYnRkYBydpHtX79/Am/k1X4J+EbqZmea40a0kdj1ZjChJoJkluj5b/4K3fB+K68PaJ41t41W4s5PsF2QMb0blCfUgjH0rO/4JC/EeRp/E3hORswqi6lAP7pyEf8APcv5V7B/wUzgjn/ZP1bzP+Wd1bsvsdxr5s/4JGlv+GhNc/u/2DJn6+fDX43mVNYTjejOjp7RK/zTi/yT9T+g8nrPH+GuJp4jX2Laj5WcZL7rtemh+idFFFfsh/PQ2PofrTqanSnUAfmr/wAF7v8Ags/4s/4Js6j4X8E+AdD0288WeMdOfUE1G+BkjsYxKYhtiGNzlgcZP4V+fsf7P/8AwUq/4KHWcGtX+peLtM0TVEEsJl1OLSIVjIyMRqVfGDnnNffX/Beb/gjXqP8AwUY8e+DfGmg+PtC8K+INB01tDtNP1bEcOpM0zTKEfIIky2Mc1+ddx/wR8/4KCfAu9a00HUPEU0MJwkmkeIzJGQOmMnj6UGkbW0NjUP8Aghx+318OYxqmkeLNTvr6H51jsvFzrKT/AMCcA18m/tvfCz9pm7+NnhnT/jto3i248Uq1vpOmXWpW24TpvGyNZlGyTBPqTX1Nbfsz/wDBT/4aK1/Z3vxYnMI3GKLVROWx/sk81n6R/wAFvv2rP2VPH+m6D8ffCdt4v0mCeNm0zxVofkT5VgfMinxkup54JGcZoK1P6HP2f/Dt94R+Bng/S9SCrqGn6NaW9yFPAkWFQw/MV87/APBV/wD4JL+C/wDgp18Ims74R6J460mMnRNfjjBkhbr5Un9+JjwR2zkV4r+3p/wcSeE/2O9D8D2Wj+CdW8W+LPHGg2uvQWEcuyKyinQMiuQCWbB6LXzLp3/B1R8V9FlF94i/ZxurfQ2ywmhjvIm2+u9120Gai9z5x/Yz/wCCE3xd+Bv7cng3Uvi9Y+H/AAb4B8N62l3c6xqOsW8UOopC28CAF8szEKcY4719lf8ABWn/AIItfGD4p/taSftHfs6+K7dfEl9bwymzhuFt7kSKm3zYJidjB1wMHjHrmvm3/gvj+3l4f/4KNfsQfAn4keE47/Rra68Q6jpl9p0837+ynSNMqxXAYEEEH0r66/ZS/wCC3Wt2f7bfw7/Zh/4QbTW02PTtO04a0bt/PZfsUb79nTPbFBWu58m33xY/4KgeDLiLS9V8J6zrN3CBGLqfQbW7YgcDMiLj8a1LL/gmJ/wUA/4KT69ZQ/GTxZeeDvCMciSPDe3MUUYRSCAttBjcfQPX6s/8Faf2+dQ/4Ju/slT/ABK03w9a+JpoNUttPNpcTNEm2Xd82V5421+c37Z//Bx98RH/AGKPBur+FfBq+GfEHxK02a6i1ezleaPRDFMq9GBB3DI5PegE30Prz/guR+wP4+/a+/4J1aP4F8DtY6x4i8N3dlcSi7nS1F4kKbGYMxCqT15NfD//AATC/YP/AG6PAnxt+HOheLLu+0v4N+E7hluLFddtZrNYCr7ogsLFnyXJ2nPWj9gb/guX4s/aq/Zz8afCn4teE5vHDWfhHV9Z1DXGunszqUcJVlt8oBs4bG4HPy12n/BPz/gsJ8Jv2J/+CbuvfErT/hjq2gWOqeLH0Ww0aDW5tRlv7oRbi7STEmNAB24oFqtDz74r/wDBCT9q/wDYM+PGvePP2Z/F66lbavdSzrHZTx2t6kbyFxFJHL8kgBPbNJL8aP8Agq5NMdJGh64lzjZ566fa/nv+7XUt/wAHU/xc1W7e+0v9nG4uPD6kHzTHevIF/wB9V2f0r6a/ZO/4OR/h18e/gh8RvEviTwprnhHWPhnpn9p3+mMwlN4hbYojOAVJcquGHGc0D1PC/wDgnJ/wS7/bI8S/tX2nxV+O/jiaxs/sN1pt7p9/fC9uLq2uYykkaRxnyo+CDnrx0rySL/gkF+25/wAEtPiXrN9+zr4gXxD4a1ife6WEsKNNGpbYJ4JurKCRlfWt7T/+Dir9rD9qbWtQvvgz8DrO88N2MmwNFZz3jqOuJHyF3Y7LXu3/AATX/wCDi3Xfj3+09p/wZ+NXw+j8D+LtSka0t7q28yNBcjkRzRSfMpYdCOM49aA1PCI/2iP+CrHindpVv4RvLW4wV+0DTYIiO2d7HbXo/wDwTf8A+CKH7Ql9+2lon7RH7RHjC3m8Q6OJ5F0ySRbu7ujJbyRKruvyRqpfIC56YxX7HUUE8x+R/wDwb5/sCfGT9jj9rj41ax428H3Gi+EfFDzQ2F7cTJuuHW7eRWVAd2Cp64xWL4t/4JtfGvUf+DiX/hdEPgm4f4arrUNz/bH2mLYYxZpGW2bt33gR0r9iqKA5ne5+T/8Awck/sKfGL9sjxp8Jbj4d+ELjxJoPhuRn1SW3nQSWzvMv/LMncw2c5Ga/UP4YeHpPCXw28P6XJxJpunW9s49Ckaqf5Vu0UCvpY+Zv+Cq/iKLTP2a47FpNs2pajEI1/v7Msa8q/wCCQXgiaTxR4q8RMrLbw2yWCHHDszBzj6bB+dYP/BUH4nyfFD436T4N0jzLs6IPKeKP5vMupCOAB3A4NfXH7HHwGH7PXwP03R5l/wCJncD7Xfn/AKbP1H4DA/CvybDUXmnGM8VDWnh1a/TmSat97f3H7rjMQsk8PqeCqO1XFtyS6qLad/TlUf8AwI9Uooor9ZPwkBRRRQB+eX/Bfv8A4J3fGb9vP4b+EZPhT4gs7aTwXcSagdIaVrWe8uDgLJHMDgMoAwDjnnNfm1p//BR3/goZ/wAE6I7fQ/GGh65qen6agijbX9Ie+hKDjAuEI3Y9cmv6MqZPbx3KbZI0kX0ZcigpSP53NZ/4OZP2t/HkC6boPgzw3Z303yB7fRJ55if9kFuD+dYd3+wp+3R/wWa8Z+G9T+Jljf6d4f0+Qm1vNehGnwafGxBcxw43tuA96/o5j0azhfctpbK3qIlB/lVmgObsfhH/AMFX/wBmb4l/sF/t3fB74zeFvh7dfEbwj8O/D2nafIRbNLatJaw+SVlCglAfvAkVc+JX/By744/aC+G2peCPDP7NTXGsa3aSWEcbzSXiQGRShKwiEbiM8DIr9znRZUKsqsrcEEZBqGHSbW2k3x2tvG/95YwD/KgObufy5/tc/sX/ABH/AGZ/+Cavwvj8aeG9T0vXvEnjbUdYXSvJLTWsHkRBWZR9zcQcA816Z+0v4N+KH/BOT/gof4B/aQk8AXvibwjc6Vpmp2EqK628g+xRxvDK6g+XIuCcEelf0iXNlDeY86GOXb03oGx+dE1pDcQ+XJFHJH/cZQV/KgfMfzr/APBR7/guh4l/4Kx/s8j4O+GfgvqdjeatqVtd+bBdPeT74idqJGIxnJbqTX1vd/sL+MvgX/wbZa14N8ReFWuvHyaab0WENsLi8slkuI32AgEhgoJIHTmv1rt9EsrSUPFZ2sbjoyRKpH44q0RuGDQLm7H83/8AwTa/at8d6j+x14x+BP8Awqu3svDemeENaudR8UjTX/tBnYq6RGTaNoLHGCTnFecfCn9kP4i/HL/gjtaz+D/COteINS8E/EmbUtQ02K2ZpfsxhBEgTqwyMHHrX9QMenW8KMqQQqr/AHgEADfWnW9pFaLthjjiU8kIoXP5UBzH4deCv+DoLxZ8PvA1p4Vuv2aVi1awtksmt4rt4YZHRQnMXk5GccjmvAtA/Z1+NHxT+E37VXx+8V/DHU/CVh8QNBjtdO0yCyaPz5ZLmLAihxuKqq5LYxk5r+j1tGs3k3ta2zNnO4xLn+VTtGrJtKqV9COKA5ux+bP/AAa3eGtY8G/8E8r7Tda0rUNJu7fxDcEQ3du0LlWVTnBHI96+Nf2jPhj4mvv+DnXTdci8O63NosfiGx3Xy2Tm3AEK5O/GMD1r98I41iXCqqj0AxQYIzJu8td3rt5oDm1uOooooJCiiigArg/jt4/17wx4dex8JaNcaz4m1BClqMbbe1J482VzwAOuOprvKKwxNGVWk6cJOLfVbr0vpfzOrB14Ua0atSCmlryu9n621t3V1fufO/7K37C1v8J9dfxd4uu18QeNbx2maYjMNq7cttzyzf7R6V9EUUVzZZleGy+gsPhY2W76tvq29233OzOs7xma4l4rGz5pbLoklsopaJLsgprdadTX5Ir0DyR1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACbqTdTqKAGhznp+tG/2p1FADQ/tRvp1FADRJmgv7U6igBN3PSkD5P3f/AK9OooAb5nzY2/jQH9qdRQA0vgU1gWIz27ipKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==",LittleBank:Gg,TripplAI:Xg,DevHub:Yg,"CJ \uc0b0\ud558":Qg,Droplist:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAAHaX54IAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAyKADAAQAAAABAAAAyAAAAAC4kx+vAAAUtElEQVR4Ae1dC5AcRf3u2c1d7pnX3e3dXkjFJAQw8kxCRMt3LC2fPGIJCgqoYPkikgIV9IIm6N+/j1AgBoVSY6GRaKGoha8yBSUKMYRQIRhCHmKI3PuS3Ct32bvdtX+76d3Znd2dnd3p2e7Zr6vuuqe7p3+/3/fNN9MzOw+DnU7d3QM/Zyz+YbHsTm6s6+xsu8ugwbq7++PhcJs742aN0tMzQAYGfh6XnALuQ5QVCl/kRuQnGHGE8Qy73jN2XJ3qMn0Jl5IpFWozdXNGvHlQ8yB2ZcfEl2LIsRHy+hdDT9o5n9FekpGPHPx+xiB2C46MmIl3ApsjI+TxmpZVdo5b2h0b2bZ0rWUQuwrHRmhAM2x2Bqi9JCO04vCqH1NWVDJkHrCEByVHIgYoJoeRYlBK9eFwGetSS5IKnkyJEkYoANqU3QzEMIxRPpebRWMafPIV6+hoTRlz0xCN1d8/dHmAz+ukGSAj0WjsN9AJIVF08g9cBSd32cdx88HK3LbtrLVszbz8h2VHcNXvvLZoHswdHRmZik2b1y267MgIjWqGqVgrjo2UYqgkI8VGIPo5MmLeusQAxeSOjNCApRhybKQYz7P7lGTEaTTSJ3d0RaKkSLLhsFuGETuEMto9g6srFotlWHZr4fjxEdbZGTJS0yGaf8meHrnlfNY4XTyQOxOBeHGylWXctUViuq9viAXcnma75mGRAwUCSXl4IpIifSqrGwIpCz4JK/uGkYLnDHbA5ZsQX9K8lP39NV/Nu3q+9ezOPfIOyBukMLJj9GBJs/5Cjtq1SQlEGCXkj02PiUWpudRAyPPQrk96wo70QAQN+XQh2svNyxJ7IeOzZzSw4emTGV0omNWzz82oc2tBGiNDKx/IeUq5ffh5t3zPGEdaIMKK0zNKsZ7TXHog5BAF87tzbnXqm6P+ngRCHr17zoU5NzVH3hbonLg2QO2y7lYoYNu1Js+uP7jmcYGBPNu0CvjgShMCcQVGFwcJ0E9ZLo5XsaEC4ve4inlQpmG6rkUpdV2rr2/wMvpZrsxxPV+dLs5lBEILfX0nFkejU3/g94+d7blHDgxyOTzGt6S3mVdJMaLr9a0MRiiI5uZG1tTUYA5S+XJv7yDjl3mT134pCE4V47+7K+94LgdpesL93yD9d5hcxt2sGx+fYCMjY3KuorjpqN1YjY31iS6Yotgh5XU7GPEacTt7YMQOIa/bwYjXiNvZ8w0jZV37zXdhutDVxY8e2sy2Dv4jJ8CF1su5gqlSCiP5AjTZdb0oJRDy8icDj7vubKEBpQVyw+EHCtl1vU1aIOSpl5uY1EAomLfu20iZ9CQ9kCdG9ksPggxID4SMeLGJeRIIBdO48zrKpCXPAjkVm2Ij0Qm9Asl3hJ739Cf0CoS8/fOy23I6nW96krOzg0ppm9bqWXJ+T88Xm7RAyGC+TSyfM+XUSw2EHBt77ZZy/Ct6XemB1Bk1rClYV7RDpXaUHgg5duLiH5XqX9HreRIIeSNbL54FQsG8Z+5FlElJngby27NvkRIEDar9zwoUBG7hIBRUS55qRGbwCEQmuqWMDUZKQU3mOmBEJrqljK09I3QLByXtAzl2bDgZCN1BR3MVXVMkMsXvRalP3rQlbnHS7d5fQUDGk6EiGJ2Y4Tc19YbDoTD5nLrxzBwAj7SLi2iDuQ5ldxEgSRtGa7ijwxg3j5xBiHnronvRQqEWFghkdDGvi3KJCIyOjrOxsfQzQhzrbXz3dBUNl0DbrAgd72wsERclVhP7XXImse9N3ugbOUwV7e2tUAQB4XESt8qS2UDyruukB9g9eczEaXNtbXNThvnEV+1b4FOe+rgQDAZT0Wl/JpKKxCcFEKIYkSAEhCiGgGLuQCEgRDEEFHMHCgEhiiGgmDtQiGKElPXkSzmxlHI79o7zNrKVjYsdmy30tE2+wcp53Vq+MYup10ohl+ztYvN3f7qYuLTtoxUhhHJfZDjxsEOMufo9AGUI1I4QgVztjmvYTf/5qVj0Ta4tIcTA5t6/ePJokJdsa02IAIomCHtOHhGLWue+IIQYWPHc7Wzh7s9pTQY57xtCKJhXIse034X5ihAihRLtwr7w8tbkgmb/tSLkOwuvKRreTd2PaqkWrQj5fPhdjh/JIrXsn+gumshKd9SKEAEWPSe3rOEMsWib7x5/ybaPKh20JITAe+78/2eHL7pbFRxd80NbQgiBhTNbHe/CXENO0kBaEyIwoV3YxgUfFIta574ghBi4bf6lvlCLbwgRsiC1LK3vEIva5b4jhBh44YLvsv0XbtKODHLYl4RQYGfWtWu5C/MtIUQKJdqF3X7GZckFDf6nPi5Cvur2kKEG+Bbtonhwx/cKKRoRRTqCEEWIEG6AEIGEIjkIUYQI4QYIEUgokoMQRYgQboAQgYQiOQhRhAjhBggRSCiS05cBH1PEl6p1g97NJFLiXSfipTP09TZ61wmStwiIyyb8fT97E4T09sYbY7GBxJfR6S1Aun6RzlsYy7c2OXmKpT6ZefqdWQlCxNCcqYf4e7KuFMtEDimmrq6WmV//INqRF48AvcRvamqa0auZzLsoGoFf1K3nWE9SOYMQqhCJk/M1Psh6sYzcPQRo18RY/epwuNnyUsK8hJD57u6Bm/nK7+PFlZycZvdcqsaRjBd51M8EgzVd7e1z/p0PAQshdDyJxwd7QEA+yNyp57uo9XxXZfkaUQYhfLb1FW7O0skdFzBKNgKclDgnJeNcMEVI9gEdU+Bs+NxZjsXirL9/KPGxZTGi+II0LScIMX+cnGZWmPYKqOTl9BJMmnFRMislIRfzl+JBhjwSzCOb90D8eG3wPVQXtQdoeis6tre3iCJyDxAgUmiPRImTsoHy1F0n2FURHN4nOqbwQ0bCcDBYuyR1hMc1LO/JIIvmN8HyN8RuTBFCl0eQKo7AihQhuFZVcTK4A/GzU4So4A588PHN1rqSC4UoxhwIASGKIaCYO1AICFEMAcXcgUJAiGIIKOYOFAJCFENAMXegEBCiGAKKuQOFgBDFEFDMHSgEhCiGgGLuQCEgRDEEFHOnIh902Tb0FLv64L2OoIhc8jP+LqnUna+O1i3l4zH0FqFKJG12WQ3/vLYS+HhuUxtCpuNR9umXfuw5QF4b1IYQAub+vu1saDrxKKTXOHlmTytCCJX2XZ/0DJxKGNKOEALpTf9K3R9eCcyk2tSSkCdHDzCd3ufuhEEtCaEAV+2lp+/8l7QlhKhYsPuzvmNEa0J6IsfZg4NP+IoUrQkhJq4/9AP+iUn/fGRSe0KIlMad11Hmi+QLQiKxabbuyIMgRCUE7un5EzsRTT5mrJJfTn3xhUJE0K1P3yiK2ua+IoRYePsLX9eWDHLcd4Q8PryPPT9xVFtSfEcIMXHhni+BENUQWPTsTaq5VJQ/2ijk2tCbiwpIdDp6aoj9amiHWNQm14YQQvSl5fc4AvZDB7/nqL8KnbUiZEFtC/tg6+sc4da083pH/SvdWStCCKytZ3429QadYsCbjEWK6aZMH+0IIeTGVv1EGQDddkRLQmYaNeybCz/kNhZKjKclIYTcLeH3slkzGpQA0U0ntCWEQDi28gE3sVBiLK0JIQQfffUXlQDSLSe0J+Sds89n59R3uoVHxcfRnhBC8PkLvl1xIN1ywBeEEBgHLrrLLUwqOo5vCFk8M8QunbeyomC6Ydw3hBAYD591sxuYVHQMXxFCSI6s0vuRBd8R0hCYye5YsKaiW3k5xn1HCIHRNf8K1hCcWQ4uFVvXl4QQmiMX67nr8i0hRMqvz15HmVbJ14S8f+4KtrguBEJUQuDAhXqdMKY+V8G/haQSjlXlC/+GSypeX++yUlFqVAAhipEFQkCIYggo5g4UAkIUQ0Axd6AQEKIYAoq5A4WAEMUQUMwdKASEKIaAYu5AISBEMQQUcwcKASGKIaCYO1AICFEMAcXcgUJUJSQe989b2RTDuGh3DMMYTSlkamq66BXRURoCu1KEjI7q//IvaTB5NDDfSf0+YBhsL9mLRKY8MgszZgTMQujsbLuLK6R+tehw/PiIKCL3CIGxsZMJS3T8oEIgHG4e4CrppYXJyVOJPyojyUegt3cwZcQwWsO0kDiGhMOhxAJVkEqgFEJCXorFYozuVjTNbLs6OozEQTz1DSHeWMc7TZjdqK2tYc3NjaymZoajF76Yx0A5iUA0GuV7nwijY4aJCMJ1G7+N9yqBU4oQUdHT09/Dj/YdYhm5PASCwcDl7e2tj5gtpKa9opJ2X4ZRHxKzL1GP3D0EuCo2dHaGjGwyyIJFIYXM9vSM8lvkJ/knCeKXcxWdV6gv2oCASggkdzDGbxiru5cmssX6ZiuQvr7By/ik4D4cVoqFFP10QIDO9AKBwKdyHTXM/ucUCE2A+SnLFp5fae5sLvPDUmIyXFc3M5Hz+QLjBjE5NoOEsucI0AkFneVFozFGl8vpUgfl5hONbKfoxKOjo/U6nk9a2rIrurv76VNbG7PraZnEMHt2U0IIudpRBwRURoCEMzw8VujaYBc/F7nTHEPqCNLbG2+MxwcOZU+l6EgxZ05zQhzmFVEGAjojQEeWEydGLUcWmnoZRtuZGdcVT598H+aHoWZz0HTEmDt3lrkKZSDgKwToRw0SiznxgwL/WapuCZ3Mn76sOLE9WxxNTQ0Qhxk1lH2JAB0AaFs3p6QWJrZTHX/JyQB/Q2F8k7kD/SLV0jLHXIUyEPA1AkNDJ3Lc4WOso9t/3p8dOf1ciwQEqgmBXNs8aYOmWCuygaB7GZCAQDUhkGebXxHIPvcgUOjKFRIQqCYEcm3zpA3LvT/VBApiBQJ2CEAgdgihvaoRgECqmn4Eb4cABGKHENqrGgEIpKrpR/B2CEAgdgihvaoRgECqmn4Eb4cABGKHENqrGgEIpKrpR/B2CEAgdgihvaoRgECqmn4Eb4cABGKHENqrGgEIpKrpR/B2CEAgdgihvaoRgECqmn4Eb4cABGKHENqrGgEIpKrpR/B2CEAgdgihvaoRgECqmn4Eb4dAVb2dYdvQU+zqg/faYVJ2+x0L1rCu+VeUPY6TAT56aDPbOvgPJ6uU1HfbWWvZmnmrSlpXx5VwBJHA2teOPsyW7bmFTcQiEkbHkF4iAIFIQvvARA9r3nk9++OJPZIsYFgvEIBAJKP8vv3fYh84cJdkKxheFgIQiCxkTeM+cmwXm/P0x9lLp/pNtSjqgAAE4hFLY9FJtvTZm9k3Xsn4JqFH1mGmVAQgkFKRK3G99Ud/xc7dcyubjONT6CVC6OlqEIincCeN7Z/oTpzA/2V4bwWsw6QTBCAQJ2i52Je/95W9+4VvsisP3u3iqBjKbQQgELcRdTjew0M72bxdN7AjpwYdronuXiAAgXiBso2NkemTbMmza9m3un9v0xPNXiMAgXiNeAF7t7/8ELvguS+yUziBL4CSt00QiLd421r718n/sib+C/z2kedt+6KDfAQgEPkYO7ZAJ/Dv3Pd/7MOH5N9Y6di5KlsBAlGY8F8OPsVa+An80ciQwl762zUIRHF+h/kJ/KLdN7FNPY8q7qk/3YNANOH1C0e2soueu41F4tOaeOwPNyEQjXjce/Jl1rjzOvb4yD6NvNbbVQhEAn8XNy1hMwM1EkZmjE7g377v6+wj/AlCJPkIQCASMF7WcAYbX7WFvWX2MgmjJ4f8BX+8tm3XjeyVyDFpNjAwYxCIxK3gr6/+MvvZ0s9Is3B8epwt3P05dk/vn6TZqPaBIRDJW8BVLa9ngxffz+bXzpNmad1/HvTkhQ3SAlB4YAjEA3LmBBvZkeXfY2vD7/LAGky4iQAE4iaaNmN9d+E17Jnzv8FqA1X1tiUbVNRuhkA85ueChoWJE/g3zjrHY8swVwoCEEgpqJW5jsEM9tiyLrblzE+VORJWl40ABCIb4QLjX9P6Bta/8ocsXDu3QC80VRIBCKSS6HPb82Y0saPL72Wf6XhHhT2B+VwIQCC5UKlA3d2vupbtPO9OVoMT+Aqgn98kBJIfG89bljcuSpzAv775LM9tw2BuBCCQ3LhUrDbAT+D/9po72ANLbqiYDzCcRgACSWOhVOn6trew3pU/YO21s5Xyq9qcgUAUZrx1RjN7ZflmdmP7aoW99LdrEIgG/G5e9DH25Lkb2AwjqIG3/nIRAtGEz1X8GZPx125hlCN5hwAE4h3WZVsK8qcT6Ehy3+KPlz0WBigOAQikOJyU6nVD6G2se8V9rK1mllJ++dEZCERTVkNcHD1cJB8LvVXTCPRwGwLRg6e8Xt6/+BPsiXO/yoIGqMwLUhkNQLUM8FRZ9XVNSxO/wK9oWqSKS77xw+ju7o9nRxMOt2VXYRkI+B6Bnp4BS4w4glggQQUQSCMAgaSxQAkIWBCAQCyQoAIIpBGAQNJYoAQELAhAIBZIUAEE0ghAIGksUAICFgQgEAskqAACaQQgkDQWKAEBCwIQiAUSVACBNAIQSBoLlICABQEIxAIJKoBAGgEIJI0FSkDAggAEYoEEFUAgjQAEksYCJSBgQQACsUCCCiCQRgACSWOBEhCwIACBWCBBBRBIIwCBpLFACQhYEIBALJCgAgikEeACMV5MLyZL0Wg0uwrLQMDXCOTe5o0X6QjyTHbkk5OR7CosAwFfI5Bnm3/G6Os7sTgajRw2R28YBguFWlggYJirUQYCvkQgFouz/v4hFo9nvuAnGKxdEmhvn/NvLogN5sipI60Qi8XM1SgDAd8hQNt4LnGQJhLaEBHzdwJ1cWFkCIXampsbWVNTg+iGHAj4BoGxsZNsdHTcEg8Xx3r+briN1JAxh+rrG7yMH25+zYWSUU9TLhIJhGLBEhUaIkDCoL/sKRXfzuP8tOKK9vbWR0RYGUIQlfxo8hBf+UqxbM5JLI2N9fyvAecoZmBQVhYBOscYHz/J/yYsohBO8+16Gz9qXCWWRZ5TIKKRv5b0K3zFDdlHFNGOHAjojAAdMXha39kZujNfHAUFIlbq7Y03xuOD6/jyrXzAZlGPHAjohgAXxSj3+duG0bqpo8OwnoBkBVSUQLLWSSwmLw9PXcoXVvJZVye/8BVO5hBQLrxQ5w0CJAC+LXbzbbGHcm51VzBY81u6IlWKB/8D8zY+T3uzd9QAAAAASUVORK5CYII="},n=e=>{switch(e){case"employment":default:return(0,So.jsx)(ph,{});case"project":return(0,So.jsx)(Qh,{});case"business":return(0,So.jsx)(tm,{})}},r=e=>{switch(e){case"employment":return"\uc815\uaddc\uc9c1";case"project":return"\ud504\ub85c\uc81d\ud2b8";case"business":return"\uc0ac\uc5c5";default:return"\uacbd\ub825"}},i={hidden:{x:-30,opacity:0},visible:{x:0,opacity:1,transition:{duration:.5,ease:"easeOut"}}};return(0,So.jsx)(qg,{id:"experience",children:(0,So.jsxs)(dp,{children:[(0,So.jsx)(up,{children:"Experience & Projects"}),(0,So.jsx)(Jg,{as:tp.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.1}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:e.map((e,a)=>(0,So.jsxs)(Zg,{variants:i,current:e.current,type:e.type,whileHover:{x:10},children:[(0,So.jsx)(lx,{type:e.type,children:r(e.type)}),(0,So.jsxs)(ex,{children:[(0,So.jsx)(nx,{type:e.type,children:t[e.company]?(0,So.jsx)("img",{src:t[e.company],alt:`${e.company} logo`}):n(e.type)}),(0,So.jsxs)(tx,{children:[(0,So.jsxs)("h3",{children:[e.company,e.current&&(0,So.jsx)(rx,{children:"\uc9c4\ud589\uc911"})]}),(0,So.jsx)("div",{className:"position",children:e.position})]})]}),(0,So.jsxs)(ix,{children:[(0,So.jsxs)("div",{className:"meta-item",children:[(0,So.jsx)(hh,{}),e.period]}),e.location&&(0,So.jsxs)("div",{className:"meta-item",children:[(0,So.jsx)(_h,{}),e.location]})]}),(0,So.jsx)(ax,{children:e.description}),e.skills&&(0,So.jsx)(ox,{children:e.skills.map((e,t)=>(0,So.jsx)(sx,{children:e},t))})]},a))})]})})},dx={company:{name:"\ub137\ucef4\uc194\ub8e8\uc158",position:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790",period:"2024.10 ~ \ud604\uc7ac",department:"\uac1c\ubc1c\ud300",description:"LGU+ \ud1b5\uc2e0 \uc2dc\uc2a4\ud15c \ubc0f \ub2e4\uc591\ud55c \uad00\ub9ac \uc2dc\uc2a4\ud15c \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218"},projects:[{title:"PMK \uc81c\ub124\uc2dc\uc2a4 \ucf5c\uc2dc\uc2a4\ud15c \uc7a5\uc560\uc774\ub825 \uad00\ub9ac\uc2dc\uc2a4\ud15c",period:"2024.10 ~ \ud604\uc7ac",role:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790",company:"\ub137\ucef4\uc194\ub8e8\uc158",client:"Philip Morris Korea (PMK)",description:"\ud544\ub9bd\ubaa8\ub9ac\uc2a8\ucf54\ub9ac\uc544 \uc81c\ub124\uc2dc\uc2a4 \ucf5c\uc13c\ud130 \uc2dc\uc2a4\ud15c\uc758 \uc7a5\uc560 \ubc1c\uc0dd\uc744 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \uc774\ub825\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uad00\ub9ac\ud558\ub294 \uc6b4\uc601 \ub300\uc2dc\ubcf4\ub4dc",details:["\uc2e4\uc2dc\uac04 \ucf5c\uc13c\ud130 \uc2dc\uc2a4\ud15c \uc0c1\ud0dc \ubaa8\ub2c8\ud130\ub9c1","\uc7a5\uc560 \ubc1c\uc0dd \uc2dc \uc989\uc2dc \uc54c\ub9bc \ubc0f \ub85c\uae45","\uc7a5\uc560 \uc774\ub825 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uccb4\uacc4\uc801 \uad00\ub9ac","\uc7a5\uc560 \uc6d0\uc778 \ubd84\uc11d \ubc0f \ud1b5\uacc4 \ubcf4\uace0\uc11c \uc0dd\uc131","\ubcf5\uad6c \uc2dc\uac04 \ubc0f \uc7a5\uc560 \ud328\ud134 \ubd84\uc11d","\ucf5c\uc2dc\uc2a4\ud15c \ub9e4\ub2c8\uc9c0\uba3c\ud2b8 \uc6f9 \uc2dc\uc2a4\ud15c \uad6c\ucd95"],achievements:["\ucf5c\uc13c\ud130 \uc2dc\uc2a4\ud15c \uac00\uc6a9\uc131 99.5% \ub2ec\uc131","\uc7a5\uc560 \ub300\uc751 \uc2dc\uac04 \ud3c9\uade0 5\ubd84 \uc774\ub0b4\ub85c \ub2e8\ucd95","\uad00\ub9ac\uc790 \ubaa8\ub2c8\ud130\ub9c1 \ud6a8\uc728\uc131 60% \ud5a5\uc0c1"],tech:["HTML5","CSS3","JavaScript","Chart.js","D3.js","WebSocket","MySQL"],status:"\uc6b4\uc601 \uc911",type:"management",link:"/project/dashboard"},{title:"LittleBank \uc5b4\ub4dc\ubbfc \uacb0\uc81c\uad00\ub9ac\uc2dc\uc2a4\ud15c",period:"2024.09 ~ 2024.10",role:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790",company:"\ud504\ub9ac\ub79c\uc11c",client:"LittleBank",description:"\ub9ac\ud2c0\ubc45\ud06c \ubaa8\ubc14\uc77c \uc571\uc758 \uc785\ucd9c\uae08 \ub0b4\uc5ed \uc870\ud68c \ubc0f \uacb0\uc81c \ud504\ub85c\uc138\uc2a4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\ub294 \uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0 (\ud504\ub9ac\ub79c\uc11c \ud504\ub85c\uc81d\ud2b8)",details:["\uc2e4\uc2dc\uac04 \uacb0\uc81c \ub0b4\uc5ed \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \uc870\ud68c","\uc0ac\uc6a9\uc790\ubcc4 \uc785\ucd9c\uae08 \uac70\ub798 \uc774\ub825 \uad00\ub9ac","\uacb0\uc81c \uc2b9\uc778/\uac70\uc808 \ud504\ub85c\uc138\uc2a4 \uad00\ub9ac","\uacb0\uc81c \uc624\ub958 \ub85c\uadf8 \ucd94\uc801 \ubc0f \ubd84\uc11d","\uc815\uc0b0 \ubcf4\uace0\uc11c \uc790\ub3d9 \uc0dd\uc131 \uae30\ub2a5"],achievements:["\uacb0\uc81c \ucc98\ub9ac \uc815\ud655\ub3c4 99.9% \ub2ec\uc131","\uad00\ub9ac\uc790 \uc5c5\ubb34 \ucc98\ub9ac \uc2dc\uac04 50% \ub2e8\ucd95","\ud504\ub9ac\ub79c\uc11c \ud504\ub85c\uc81d\ud2b8 \uc131\uacf5\uc801 \uc644\ub8cc"],tech:["HTML5","CSS3","JavaScript","Chart.js","Bootstrap","MySQL"],status:"\uc644\ub8cc",type:"freelance",link:"/project/dashboard"},{title:"LGU+ Visual Ring Biz \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218",period:"2024.10 ~ \ud604\uc7ac",role:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790",company:"\ub137\ucef4\uc194\ub8e8\uc158",client:"LG\uc720\ud50c\ub7ec\uc2a4",description:"LGU+ Visual Ring Biz \uc11c\ube44\uc2a4\uc758 \uc548\uc815\uc801\uc778 \uc6b4\uc601\uc744 \uc704\ud55c \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc2e0\uaddc \uae30\ub2a5 \uac1c\ubc1c",details:["Spring Framework \uae30\ubc18 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc720\uc9c0\ubcf4\uc218","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc131\ub2a5 \ucd5c\uc801\ud654 \ubc0f \ucffc\ub9ac \ud29c\ub2dd","\uc2dc\uc2a4\ud15c \uc7a5\uc560 \ubd84\uc11d \ubc0f \uc2e0\uc18d\ud55c \ud574\uacb0","\uc2e0\uaddc \ube44\uc988\ub2c8\uc2a4 \uc694\uad6c\uc0ac\ud56d \uac1c\ubc1c \ubc0f \ubc30\ud3ec","\ubcf4\uc548 \ud328\uce58 \ubc0f \uc2dc\uc2a4\ud15c \uc5c5\ub370\uc774\ud2b8","LG Security Module\uc744 \ud65c\uc6a9\ud55c \ubcf4\uc548 \uac15\ud654","\uc2dc\uc2a4\ud15c \ud074\ub9ac\ub2dd \ubc0f \ucd5c\uc801\ud654 \uc791\uc5c5","Visual Ring Biz \uc11c\ube44\uc2a4 \uc548\uc815\uc131 \uac1c\uc120"],achievements:["\uc2dc\uc2a4\ud15c \uc7a5\uc560 \ubc1c\uc0dd\ub960 30% \uac10\uc18c","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucffc\ub9ac \uc131\ub2a5 40% \ud5a5\uc0c1","\uc6d4\ud3c9\uade0 99.8% \uc2dc\uc2a4\ud15c \uc548\uc815\uc131 \uc720\uc9c0"],tech:["Java","Spring Framework","Spring Security","Spring Data JPA","Hibernate","QueryDSL","Oracle","JavaScript","JSP","Apache Tomcat","Maven/Gradle","LG Security Module"],status:"\uc9c4\ud589 \uc911",type:"maintenance"}],skills:{primary:["Java","JavaScript","HTML5","CSS3","SQL"],frameworks:["Spring Framework","Spring Boot","Bootstrap"],databases:["Oracle","MySQL"],tools:["IntelliJ IDEA","Eclipse","Git","Linux"],others:["WebSocket","Chart.js","D3.js","Apache Tomcat"]},workEnvironment:{teamSize:"5\uba85",methodology:"\uc560\uc790\uc77c",collaboration:["Slack","Git","Notion"],responsibilities:["\uc2dc\uc2a4\ud15c \ubd84\uc11d \ubc0f \uc124\uacc4","\ubc31\uc5d4\ub4dc/\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uacc4 \ubc0f \ucd5c\uc801\ud654","\uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc7a5\uc560 \ub300\uc751","\ucf54\ub4dc \ub9ac\ubdf0 \ubc0f \ud488\uc9c8 \uad00\ub9ac"]}},ux={title:"2024\ub144 \uc9c4\ud589\ud55c \uae30\ud0c0 \ud504\ub85c\uc81d\ud2b8",description:"\uba54\uc778 \ud504\ub85c\uc81d\ud2b8 \uc678\uc5d0 \uc62c\ud574 \ud559\uc2b5\uacfc \uc131\uc7a5\uc744 \uc704\ud574 \uc9c4\ud589\ud55c \ub2e4\uc591\ud55c \ud504\ub85c\uc81d\ud2b8\ub4e4",projects:[{title:"MSA Practice",period:"2024.05",role:"\ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790",description:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4 \uc544\ud0a4\ud14d\ucc98(MSA) \ud559\uc2b5\uc744 \uc704\ud55c \uc2e4\uc2b5 \ud504\ub85c\uc81d\ud2b8",tech:["Java","Spring Boot","Microservices","Docker","Kubernetes"],status:"\uc644\ub8cc",type:"learning",category:"\ubc31\uc5d4\ub4dc \uac1c\ubc1c"},{title:"MCP \ud1b5\ud569\uad00\ub9ac\uc81c\uc5b4\uc2dc\uc2a4\ud15c",period:"2024.04",role:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790",description:"\ud1b5\ud569\uad00\ub9ac\uc81c\uc5b4\uc2dc\uc2a4\ud15c \uac1c\ubc1c",tech:["JavaScript","Node.js","Express","MySQL","HTML5","CSS3"],status:"\uc644\ub8cc",type:"personal",category:"\uc6f9 \uac1c\ubc1c"},{title:"AI \uc774\ubbf8\uc9c0 \uc0dd\uc131\uae30",period:"2024.03",role:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",description:"AI\ub97c \ud65c\uc6a9\ud55c \uc774\ubbf8\uc9c0 \uc0dd\uc131 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158",tech:["HTML5","CSS3","JavaScript","AI API"],status:"\uc644\ub8cc",type:"personal",category:"AI \uac1c\ubc1c"},{title:"Java Swing \ubbf8\ub2c8\ud504\ub85c\uc81d\ud2b8",period:"2024.09",role:"\uac1c\ubc1c\uc790",description:"\uc790\ubc14 \uc2a4\uc719\uc744 \ud65c\uc6a9\ud55c \ub370\uc2a4\ud06c\ud1b1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158",tech:["Java","Swing","AWT","MySQL"],status:"\uc644\ub8cc",type:"learning",category:"\ub370\uc2a4\ud06c\ud1b1 \uac1c\ubc1c"},{title:"Vue.js \ud3ec\ud2b8\ud3f4\ub9ac\uc624",period:"2024.09",role:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",description:"Vue.js \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud65c\uc6a9\ud55c \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc6f9\uc0ac\uc774\ud2b8",tech:["Vue.js","Vuex","Vue Router","CSS3"],status:"\uc644\ub8cc",type:"learning",category:"\uc6f9 \uac1c\ubc1c"},{title:"RPA \uc790\ub3d9\ud654",period:"2024.08",role:"\uc790\ub3d9\ud654 \uac1c\ubc1c\uc790",description:"\uc5c5\ubb34 \uc790\ub3d9\ud654\ub97c \uc704\ud55c RPA \uc2dc\uc2a4\ud15c \uad6c\ucd95",tech:["Python","Selenium","PyAutoGUI","Pandas"],status:"\uc644\ub8cc",type:"personal",category:"\uc790\ub3d9\ud654"}]},px=n.p+"static/media/pmk_admin.500fd91d78fd79d6a3e8.png",hx=n.p+"static/media/littlebank_admin.fdb2791ec48cb0ad8605.png",mx=n.p+"static/media/LGU+security.d96eb76b4fb2c6a33b8d.png",fx=n.p+"static/media/msa.0a6b374dd504ae19a9c7.png",gx=n.p+"static/media/ai_image.86db0e54241e0637918d.png",xx=n.p+"static/media/mcp.aaa3fbd15be3d383576e.png",vx=n.p+"static/media/swing.7545109aceb9ed543aed.png",bx=n.p+"static/media/rpa.cdc27092dd0224e369cc.png",yx=Gt(pp)`
  padding: 80px 0 40px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */
`,wx=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${sp}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,jx=Gt.div`
  margin-top: 80px;
  padding-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,kx=Gt.div`
  margin-top: 80px;
  padding-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
`,Sx=Gt.div`
  text-align: center;
  margin-bottom: 50px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`,Ax=Gt.h3`
  font-size: 2rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`,Cx=Gt.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
`,Ex=Gt.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
`,Px=Gt.div`
  text-align: center;
  margin-bottom: 50px;
  padding: 25px;
  background: rgba(16, 185, 129, 0.03);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`,zx=Gt.h3`
  font-size: 1.8rem;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-family: 'Pretendard-Bold';
`,Tx=Gt.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`,Mx=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border-left: 4px solid #3b82f6;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-left-color: #8b5cf6;
  }
`,Rx=Gt(tp.div)`
  background: rgba(16, 185, 129, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid #10b981;

  &:hover {
    background: rgba(16, 185, 129, 0.05);
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(16, 185, 129, 0.15);
    border-left-color: #3b82f6;
  }
`,Lx=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(102, 126, 234, 0.3);
  }
`,Ix=Gt.div`
  height: 220px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%);
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)" /></svg>');
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.3) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  .project-logo-container {
    width: 140px;
    height: 140px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1;
    transition: all 0.3s ease;
    position: relative;
  }

  .project-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.95) contrast(1.1);
    transition: all 0.3s ease;
  }

  &:hover .project-logo-container {
    transform: scale(1.05);
    border-color: rgba(102, 126, 234, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  &:hover .project-logo {
    filter: brightness(1) contrast(1.15);
  }

  .project-icon {
    z-index: 1;
    filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.5));
  }
`,Bx=Gt.div`
  padding: 1.5rem;
`,Nx=Gt.div`
  margin-bottom: 1rem;
`,Ox=Gt.h3`
  font-size: 1.3rem;
  font-family: 'Pretendard-Bold';
  color: ${ip.primary};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`,Dx=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: ${ip.secondary};

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`,Fx=Gt.p`
  color: ${ip.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Pretendard-Regular';
  font-size: 0.95rem;
`,Vx=Gt.div`
  margin-bottom: 1.5rem;

  .tech-label {
    font-family: 'Pretendard-SemiBold';
    color: ${ip.primary};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`,_x=Gt.span`
  background: rgba(102, 126, 234, 0.1);
  color: #a5b4fc;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.4);
  }
`,Hx=Gt.div`
  display: flex;
  gap: 0.5rem;
`,$x=Gt.a`
  flex: 1;
  background: ${e=>e.primary?"rgba(102, 126, 234, 0.2)":"transparent"};
  color: ${e=>e.primary?"#a5b4fc":ip.secondary};
  border: ${e=>e.primary?"1px solid rgba(102, 126, 234, 0.3)":"1px solid rgba(255, 255, 255, 0.2)"};
  padding: 0.7rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  font-size: 0.85rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    background: ${e=>e.primary?"rgba(102, 126, 234, 0.3)":"rgba(255, 255, 255, 0.1)"};
    color: white;
    border-color: rgba(102, 126, 234, 0.5);
  }
`,Ux=Gt.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${e=>{switch(e.status){case"completed":return"rgba(16, 185, 129, 0.2)";case"in-progress":return"rgba(245, 158, 11, 0.2)";case"planning":return"rgba(107, 114, 128, 0.2)";default:return"rgba(59, 130, 246, 0.2)"}}};
  color: ${e=>{switch(e.status){case"completed":return"#10b981";case"in-progress":return"#f59e0b";case"planning":return"#6b7280";default:return"#3b82f6"}}};
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-family: 'Pretendard-SemiBold';
  z-index: 3;
  border: 1px solid ${e=>{switch(e.status){case"completed":return"rgba(16, 185, 129, 0.3)";case"in-progress":return"rgba(245, 158, 11, 0.3)";case"planning":return"rgba(107, 114, 128, 0.3)";default:return"rgba(59, 130, 246, 0.3)"}}};
`,Kx=Gt(tp.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: ${sp}) {
    padding: 1rem;
  }
`,Wx=Gt(tp.div)`
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`,Gx=Gt.div`
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 20px 20px 0 0;

  h3 {
    font-size: 1.5rem;
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    margin: 0;
    flex: 1;
  }
`,Xx=Gt.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${ip.secondary};
  cursor: pointer;
  padding: 0.5rem;
  margin: -0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${ip.primary};
    transform: rotate(90deg);
  }
`,Yx=Gt.div`
  padding: 2rem;

  .section {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    font-family: 'Pretendard-SemiBold';
    color: ${ip.primary};
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p {
    color: ${ip.secondary};
  }

  strong {
    color: ${ip.primary};
  }
`,Qx=Gt.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
    color: ${ip.secondary};

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }
  }
`,qx=Gt.div`
  .challenge-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border-left: 4px solid rgba(245, 158, 11, 0.5);

    .challenge-title {
      font-family: 'Pretendard-SemiBold';
      color: ${ip.primary};
      margin-bottom: 0.5rem;
    }

    .challenge-solution {
      color: ${ip.secondary};
      line-height: 1.6;
    }
  }
`,Jx=()=>{const{projects:e,personal:n}=Lm,[r,i]=(0,t.useState)(null),a=fa(),o={"DevHub: \uae43\ubcf4\ub2e4 \uc27d\uac8c '\ud615\uc0c1\uad00\ub9ac'\uc640 '\ucf54\ub4dc\ub9ac\ubdf0'":Yg,LittleBank:Gg,TripplAI:Xg},s={"PMK \uc81c\ub124\uc2dc\uc2a4 \ucf5c\uc2dc\uc2a4\ud15c \uc7a5\uc560\uc774\ub825 \uad00\ub9ac\uc2dc\uc2a4\ud15c":px,"LittleBank \uc5b4\ub4dc\ubbfc \uacb0\uc81c\uad00\ub9ac\uc2dc\uc2a4\ud15c":hx,"LGU+ Visual Ring Biz \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218":mx},l={"MSA Practice":fx,"MCP \ud1b5\ud569\uad00\ub9ac\uc81c\uc5b4\uc2dc\uc2a4\ud15c":xx,"AI \uc774\ubbf8\uc9c0 \uc0dd\uc131\uae30":gx,"Java Swing \ubbf8\ub2c8\ud504\ub85c\uc81d\ud2b8":vx,"Vue.js \ud3ec\ud2b8\ud3f4\ub9ac\uc624":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAACLlBMVEVMaXFBuINBuIM8enI/nnxBuINBuINBuIM8enJBuIM8enJBuINBuINBuIM8enJBuIM8enJBuINBuIM7eXFBuINBuIM8eXFBuINBuIM8eHFBuIM8eXFBuIM8eHBBuIM8eHBBuIM8d3BBuINBuIM8d3BBuINBuINBuIM8dnBBuINBuIM8dnBBuINBuIM7dXBBuINBuIM8dG9BuINBuIM8dG9BuIM8dG9BuINBuIM8c29BuINBuIM7cm5BuINBuIM7cW5BuIM7cW9BuINBuINBuIM7cW5BuINBuINBuIM7b21BuINBuIM6b21BuIM7bm1BuINBuIM7bW1BuINBuIM6bGxBuINBuIM6a2xBuIM6a2xBuINBuIM6amxBuIM6aWtBuINBuIM6aGpBuINBuIM6ZmpBuINBuIM5ZGlBuIM5Y2lBuINBuIM5YWhBuINBuIM5YGdBuIM4XmdBuINBuIM4XGZBuINBuIM4WmVBuIM3WGRBuIM3V2RBuINBuIM3VGNBuIM2UmI2UGFBuIM1TWA1SV41Sl41S141TF81TWA2T2A2UWE2U2I3VWM3WGQ4W2U4Xmc5YGc5YWg5ZGk6Zmo6Z2o6aGo6a2w7bW07bm07cG48c287dnA7eHA8enI8fHI9fnM8gXM9g3Q9hnU9iXY+i3c+jHc+j3g+kXk+lHo/l3o/mXs+m3s/nnw/oH0/o31Apn5BqH5Aqn9BrH9BroBBr4BCsYBBs4FBtoJCt4JBuIP7mHZoAAAAhHRSTlMAAQICAwQHCAgLDQ4QEhIVFhcaGh4hIiUoKissLzEzNDc4Oj4/QERFRkhLTVBTVldaXV5iYmZnaW1vcHV3eHx8gIGDhIeJio+Sk5aZm52foaWmqKyusLS1t7m6u7y/wMLHx8zP0NPW1trc3uLi5Obn6urt7+/y8/T29vf4+vv7/P39/v7L5yYnAAANT0lEQVR42uzdiZ/OVRTH8WM0CxqVZVqMFCqyZKkQolL2FktaVNZkkr3CyHoGUxRCSFFk3yrb+e96qldFzfIsn9/vd67u+y841515zXi+c89XoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKov+t94y1WyEN/SQx/RoUsvuGod6T2i2GOo+ddbUkZrVCGs4bakutyGRjHVLKi5KQF5VyyFiTc9PdtcpQPzcqZEN7SUT7DQpp/NlQq+76fb5njPWDUt6URLyplGPGeuaP+crfN9T1XQrZ2l0S0H2rQnZdN9T75X9O2NdYp5WyWBKwWCmnjdX3rxFfN9bXSnlScE8qZa+xXv97xnvXG+riNoV82lZgbT9VyLaLhlp/7z9TvmSsb5UyRWBTlPKtsV66acoOyw115QuFbOosqM6bFPL5FUMt73DznEONdVwpcwU1VynHjTX0ljnL5hnq+pcK2d5bQL23K+RL+FfeeWW3TtrTWGeVskxAy5Ry1lg9/z3qq8Y6oJRRghmllAPGevU/s3ZaY6jLOxRSXyWQqnqF7LhsqDWd/jvts8b6XikzBDJDKd8b69kmpq2sM9S1nQpprBFEDfY59M6rhqqrbGreAcY6qZRFgliklJPGGtD0wO8Ya49CGgYKYCCWZe4x1jvNTFy70VAXsH8BJM11m9turG1u5EnGcpXm+s1tJzU7czWc5v6C/RTd0LHU++jI5ba/GGpVdfNTDzcWl+bOLvVCZivlB2MNb3pg52nujh6l3UcP7P+pdG67sLyluR8zFpfmLintQpYohc5tH2158JnG2qeUp0u5j6eVss9YM1uZvCuc5l7CPu9eW178fZSvVcj2S4Za37W12ccZ64hSXi7+Ql5WyhFjjWt19g5LDXXlc4Vs7lx0brtZIXRuu7Rd69MPMZaDNNdvbjskj+nbzDHUja8Usq1PcffRB/urpK/gxwdz2uQz/0PGOqeUFcVdyAqlnDPWQ/kd4BVjfaOUMcXcxxilfGOsV/I8QadPDMU9UKivyjK3bYRz20865XuG0cY6qpQZWea2R401Ou8zVPhNc+8v9D7ux749d14zVF1F/qfob6xTSll0++S2/Qs5xtvG2quQhoFZ5bb044O3CjrHA37T3LYFPT7gctsLhtr4QGFfWROMdVgpEws5xkSlHDbWBClM9UpD/Yp9pLWpYwG5Lff44FdDrayWAg0zFpfmvpv/Id5VCp3bDis8QlhoKPCBwsP5nuFhLIyhHx8svEMK9oixzihlSfq57RljPSJFmG6s/UoZkd8BRihlv7GmSzG6rjNU2mmu39x2XVcpygvG+k4pr+Uz/mtKoXPb56U47T4y1FXsbe7mmjweH2C57Rfw44OP2kmRBhnrhFIWtD78AqWcMNagpgcOO83t1+rSuMBz26Y96Hbd3IrUctsGOLfd8qCUYKqxDirluZYHf04pB401VUpxz8eG4tLcDe3DXBr38T1SkpHGOqaUWS2NPUspdG47UkpT8YGhrmEPFBq7NT91N+wbcRec235QISV63Fhcmrs4jaVxp4z1uJTsDWNxae7g5kYejP0yR+e2b0jp7vvMUMmvm/O7NO6z+wQw3ljcurmJoeW244VwJ7xuDkxz725q3rvd5ra5pXGIp4z1o1LmJvv44EdjPSWMsvmGAtPc3iEtjZtfJpBexkp03RyX29JL43oJZpqxuHVzI8LJbacJpwu8bo5Lc+urknp8QOe2a7oIaKyxEktzudz2O2ONFVLlh4a6yj1QqAljadyHlYJ6wlg/KWVBMrntT8Z6QlhtgigP81z2RQuiPIx7fAAvjcuVfeECKA/zuzRusvD8l4f5zW1zZV8JcF8e5r3si+Z33dzW7mGUfdGcl4dxuS29NK6vJMR1eVgIZV80z+VhfnPbXNlXYhyXh4VR9kXDy8O4NJfLbeGlcVRu+48wysMw9NK4oZIkv+VhFDq3nYfltn8JpTwMQue2PSVhfsvDEMmXfdH8locR0ij7ovktDwOkUfZF81seVjo6t62Dc1uRsMrDSkYvjRsgqXBbHqaBlH3R/JaH+cptNyaQ24ZWHuYqt50kafFbHhZK2RfNb3mYo6VxwyU9ftPc2z+3Da08zE1u+6ikym95WCBlXzS/5WE+Hh/kyr5S5rc8zMXSuHGSNr/lYR5y26WJ5rahlYc5yG2HSPr8rpsLe2lc08IuDwul7IvmtzwskLIvmt/ysFDKvmh+y8MyXRo3WrLitzwslLIvmt/ysAxz2/6SIbflYdk9PnhLsuS3PCyUsi+a3/KwjJbGTZBs+S0Py2Zp3MoUc9vQysMyyW2HSdb8lodl8fggV/aVOb/lYaGUfdH8loelvjRuunjgtzws7dx2Xeq5bWjlYSnnts+LD37Lw0Ip+6L5LQ8LpOyLFmaae3vktqGVh4VS9kXzWx4WSNkXzW95WFpL43JlX674LQ9LKbcdKb74LQ8LpeyL5rc8LJSyr9/Yu0NrqaIgiKIIYiEQwiAkFBqDIwHUZIfA4v7ue6tfzUmjVvfWxeJhJ3ZbgX3pcvGw+adxBvvS5eJh47utwb50uXjY9G47+zTuiXjYEuxLl4uHze62DvvS5eJho0/jIPaly8XDBndbiX3pcvGwud3WYl+6XDxsCfaly8XDpp7GaexLl4uHLcG+dLl42L9+vGwe+9Ll4mETT+MmsC9dLh428DRuAvvS5eJhfredwb50uXgYPz6Ywb50ue/mdj+NeyAepp/GjWFfulA8TO+2c9iXLhMP07vtJPali8TDNmFfukQ8TD+NS91t1+Bh+mncLPaly8PD9G47jX3p4vAwvduOY1+6MDxsH/aly8LDNmJfuig8bCP2pUvCw/jTuPDdNh4P00/jDmFfuhg8bCv2pUvBw/Ruew770oXgYXq3PYd96TLwsM3Yly4CD9O77UnsS5ew5rbutrF4mN5tD2Nfuut42HbsS3cbD9PHB+exL91lPEw/jTuPfenu4mF6t72Bfemu4mF6t72Bfeluvpt78tO4lXgYfhp3C/vSXcPDnoJ96W7hYfr44B72pbuEh+mncfewL90dPIzvtnFP43LwsN83dtur2JfuAh6mjw/uYl+683jY07Av3XE8TD+Nu4196U7jYfpp3H3sS3cYD9O77X3sS3cWD9PHBwnYl+4oHvZI7Et3EA/TT+MysC/dOTxM77Yp2JfuGB6mn8alYF+6U3jYc7Ev3SE87LnYl+7MmvvebbPwMH18kIV96Q7gYc/GvnTzeJjebdOwL53Gw35N77Zp2JduGg97PvalG8bDCrAv3SgepnfbROxLN4mH6adxmdiXTuNhP+d220zsS6ffzf35PrXb7noaF4iHtWBfuik8TO+2udiXbggP00/jgrEv3Qgepp/GJWNfugk8TO+22diXbgAP07ttNval83hYG/al43hYG/bF03gYLh/70mk8zLYB+9JpPIy2AfvSaTxMtgP70mk8DLYD+9Lpd3Ou3U/jcvAw1hrsS6fxMNQe7Eun8TDTJuxLp/Ew0ibsS6fXXFHLbnsGDwPtwr50Gg/7eNuwL53Gwz7cOuxLp/GwOuxLp/GwPuxLp/GwOuxLp/GwPuxLp/GwPuxLp/GwOuxLp/GwPuxLp/GwOuxLp/GwPuxLp/GwOuxLl7Dmtu62/+/L63rLsS+dxsPqsC+dxsP6sC+dxsPqsC+dxsP6sC+dxsPqsC+dfjf3fhr3KQwP68O+dBoPq8O+dBoP68O+dBoPq8O+dBoP68O+dBoP68O+dN9ex3sW9qXTeFgf9qXTeFgd9qXTeFgf9qXTeFgd9qX7jPGwPuxLp/GwPuxLp/GwOuxLp/GwPuxL9/V1qKdiXzqNh/VhXzqNh9VhX7oza+57t72Hh/VhXzqNh9VhXzqNh/VhXzqNh9VhXzqNh/VhXzqNh/VhXzqNh9VhXzqNh/VhXzqNh9VhX7q5d3PdT+Ny8LA67Eun8bA+7Eun8bA+7Eun8bA67Eun8bA+7Eun8bA67Eun8bA+7Eun8bA+7EuH8bA+7Etn8bBG7EtH8bC/7d3hRgNwAEVxS20y+9A0kkzM+pBSIkVKJsrIUiIRIyVLSSmTMnryHmL3w+F/fq9xuafE2FdaMh5WZuwrLRgPKzP2lZa7m/M0LiMWDys29pUWioeVG/tKy8TDSo59pUXiYSXHvtISa667bVIgHlZ27Ctt+nhY6bGvtKnjYcXHvtIujH2xNMfGvliOjH2x1EbGvlg2jX3B3Bn7YlmZGPti6Rv7Yml8GPti2Tf2xTL36G7LsmbsC+ba2BdL68fYF8uJsS+W+quxL5YdY18slaGncSyrxr5gBsa+WJpfxr5YDo19sVRHxr5YNox9wdwa+2JZnhj7Yjkz9sXSeDf2xbJn7Itl9sHYF0vX2BfMlbEvlta3sS+WnrEvlvkXY18s28a+WCpDd1uW9p+xL5ZzY18sC5/GvlgOjH2xVJ+MfbGsG/uCuTH2xbL0a+yL5dTYF0v9zdM4ll1jXywz98a+WDrGvmAujX2xLI6NfbEcG/tiqT0b+2LZMvYlSZIkSZIkSZIkSZIkSZIkKekfnCgLkz94A5oAAAAASUVORK5CYII=","RPA \uc790\ub3d9\ud654":bx},c=e=>e.title.includes("DevHub")?(0,So.jsx)(yh,{}):e.title.includes("LittleBank")&&!e.title.includes("\uc5b4\ub4dc\ubbfc")?"\ud83c\udfe6":e.title.includes("Trippl")?"\u2708\ufe0f":e.title.includes("PMK")||e.title.includes("\ucf5c\uc2dc\uc2a4\ud15c")?"\ud83d\udcde":e.title.includes("LittleBank \uc5b4\ub4dc\ubbfc")?"\ud83d\udcb0":e.title.includes("LGU+")||e.title.includes("Visual Ring")?"\u2699\ufe0f":e.title.includes("\ud3ec\ud2b8\ud3f4\ub9ac\uc624")?"\ud83c\udf10":e.title.includes("Spring Boot")||e.title.includes("API")?"\u2699\ufe0f":e.title.includes("React")||e.title.includes("TypeScript")?(0,So.jsx)(yh,{}):e.title.includes("Flutter")||e.title.includes("\ub0a0\uc528")?"\ud83d\udcf1":e.title.includes("Python")||e.title.includes("\ud06c\ub864\ub9c1")?"\ud83d\udc0d":e.title.includes("Vue")?"\ud83d\udc9a":(0,So.jsx)(yh,{}),d=e=>"Google Play Store \ube44\uacf5\uac1c \ud14c\uc2a4\ud2b8 \uc911"===e.status||"\uad00\uad11 API \uacf5\ubaa8\uc804 \uc9c4\ucd9c"===e.status||"\uc6b4\uc601 \uc911"===e.status?"in-progress":"completed",u=e=>{switch(e){case"completed":default:return"\uc644\ub8cc";case"in-progress":return"\uc9c4\ud589\uc911";case"planning":return"\uae30\ud68d\uc911"}},p=e=>{"LittleBank"!==e.title?"TripplAI"!==e.title?e.title.includes("DevHub")?a("/project/devhub"):e.title.includes("PMK")||e.title.includes("LittleBank \uc5b4\ub4dc\ubbfc")||e.title.includes("LGU+")?a("/project/dashboard"):(i(e),document.body.style.overflow="hidden"):a("/project/tripplai"):a("/project/littlebank")},h=()=>{i(null),document.body.style.overflow="unset"},m={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.1}}},f={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return(0,So.jsx)(yx,{id:"projects",children:(0,So.jsxs)(dp,{children:[(0,So.jsx)(up,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:"Featured Projects"}),(0,So.jsxs)(tp.div,{variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,So.jsx)(wx,{children:e.map((e,t)=>(0,So.jsxs)(Lx,{variants:f,whileHover:{scale:1.02},onClick:()=>p(e),children:[(0,So.jsxs)(Ix,{children:[(0,So.jsx)(Ux,{status:d(e),children:u(d(e))}),o[e.title]?(0,So.jsx)("div",{className:"project-logo-container",children:(0,So.jsx)("img",{src:o[e.title],alt:`${e.title} logo`,className:"project-logo"})}):(0,So.jsx)("div",{className:"project-icon",children:c(e)})]}),(0,So.jsxs)(Bx,{children:[(0,So.jsxs)(Nx,{children:[(0,So.jsx)(Ox,{children:e.title}),(0,So.jsxs)(Dx,{children:[(0,So.jsxs)("div",{className:"meta-item",children:[(0,So.jsx)(hh,{}),e.period]}),(0,So.jsxs)("div",{className:"meta-item",children:[(0,So.jsx)(om,{}),e.role]})]})]}),(0,So.jsx)(Fx,{children:e.description}),(0,So.jsxs)(Vx,{children:[(0,So.jsx)("div",{className:"tech-label",children:"\uae30\uc220 \uc2a4\ud0dd"}),(0,So.jsxs)("div",{className:"tech-list",children:[e.tech.slice(0,6).map((e,t)=>(0,So.jsx)(_x,{children:e},t)),e.tech.length>6&&(0,So.jsxs)(_x,{children:["+",e.tech.length-6,"\uac1c"]})]})]}),(0,So.jsxs)(Hx,{children:[(0,So.jsxs)($x,{primary:!0,children:[(0,So.jsx)(qh,{}),"LittleBank"===e.title||"TripplAI"===e.title?"\uc0c1\uc138 \ud398\uc774\uc9c0":"\uc790\uc138\ud788 \ubcf4\uae30"]}),e.link&&(0,So.jsxs)($x,{href:e.link,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[(0,So.jsx)(Ph,{}),"\ub370\ubaa8"]})]})]})]},t))}),(0,So.jsxs)(jx,{children:[(0,So.jsx)(tp.div,{variants:f,children:(0,So.jsxs)(Sx,{children:[(0,So.jsx)(Ax,{children:dx.company.name}),(0,So.jsx)(Cx,{children:dx.company.position}),(0,So.jsx)(Ex,{children:dx.company.period})]})}),(0,So.jsxs)(tp.div,{variants:m,children:[(0,So.jsx)(up,{children:"\ud604\uc7ac \ub2f4\ub2f9 \ud504\ub85c\uc81d\ud2b8"}),(0,So.jsx)(wx,{children:dx.projects.map((e,t)=>(0,So.jsxs)(Mx,{variants:f,whileHover:{y:-10},onClick:()=>p(e),children:[(0,So.jsx)(Ix,{style:{background:"management"===e.type?"linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)":"linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)"},children:s[e.title]?(0,So.jsx)("div",{className:"project-logo-container",children:(0,So.jsx)("img",{src:s[e.title],alt:`${e.title} \uc774\ubbf8\uc9c0`,className:"project-logo"})}):(0,So.jsx)("div",{className:"project-icon",children:"management"===e.type?"\ud83d\udd27":"\u2699\ufe0f"})}),(0,So.jsxs)(Bx,{children:[(0,So.jsxs)(Nx,{children:[(0,So.jsx)(Ox,{children:e.title}),(0,So.jsxs)(Dx,{children:[(0,So.jsxs)("div",{className:"meta-item",children:[(0,So.jsx)(hh,{}),e.period]}),(0,So.jsxs)("div",{className:"meta-item",children:[(0,So.jsx)(om,{}),e.role]})]})]}),(0,So.jsx)(Fx,{children:e.description}),(0,So.jsxs)(Vx,{children:[(0,So.jsx)("div",{className:"tech-label",children:"\uae30\uc220 \uc2a4\ud0dd"}),(0,So.jsxs)("div",{className:"tech-list",children:[e.tech.slice(0,6).map((e,t)=>(0,So.jsx)(_x,{children:e},t)),e.tech.length>6&&(0,So.jsxs)(_x,{children:["+",e.tech.length-6,"\uac1c"]})]})]}),(0,So.jsx)(Hx,{children:(0,So.jsxs)($x,{primary:!0,children:[(0,So.jsx)(qh,{}),e.title.includes("PMK")||e.title.includes("LittleBank \uc5b4\ub4dc\ubbfc")||e.title.includes("LGU+")?"\uc0c1\uc138 \ud398\uc774\uc9c0":"\uc790\uc138\ud788 \ubcf4\uae30"]})})]})]},t))})]})]}),(0,So.jsxs)(kx,{children:[(0,So.jsx)(tp.div,{variants:f,children:(0,So.jsxs)(Px,{children:[(0,So.jsx)(zx,{children:ux.title}),(0,So.jsx)(Tx,{children:ux.description})]})}),(0,So.jsx)(tp.div,{variants:m,children:(0,So.jsx)(wx,{children:ux.projects.map((e,t)=>(0,So.jsxs)(Rx,{variants:f,whileHover:{y:-12},children:[(0,So.jsxs)(Ix,{style:{background:"learning"===e.type?"linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)":"linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)"},children:[(0,So.jsx)(Ux,{status:"\uc644\ub8cc"===e.status?"completed":"in-progress",children:e.status}),l[e.title]?(0,So.jsx)("div",{className:"project-logo-container",children:(0,So.jsx)("img",{src:l[e.title],alt:`${e.title} \uc378\ub124\uc77c`,className:"project-logo"})}):(0,So.jsx)("div",{className:"project-icon",children:c(e)})]}),(0,So.jsxs)(Bx,{children:[(0,So.jsxs)(Nx,{children:[(0,So.jsx)(Ox,{children:e.title}),(0,So.jsxs)(Dx,{children:[(0,So.jsxs)("div",{className:"meta-item",children:[(0,So.jsx)(hh,{}),e.period]}),(0,So.jsxs)("div",{className:"meta-item",children:[(0,So.jsx)(om,{}),e.role]}),(0,So.jsx)("div",{className:"meta-item",children:(0,So.jsx)("span",{style:{background:"learning"===e.type?"rgba(59, 130, 246, 0.2)":"rgba(147, 51, 234, 0.2)",color:"learning"===e.type?"#3b82f6":"#8b5cf6",padding:"2px 8px",borderRadius:"6px",fontSize:"0.75rem",fontWeight:"600"},children:"learning"===e.type?"\ud559\uc2b5":"personal"===e.type?"\uac1c\uc778":"\uae30\ud0c0"})})]})]}),(0,So.jsx)(Fx,{children:e.description}),(0,So.jsxs)(Vx,{children:[(0,So.jsx)("div",{className:"tech-label",children:"\uae30\uc220 \uc2a4\ud0dd"}),(0,So.jsxs)("div",{className:"tech-list",children:[e.tech.slice(0,5).map((e,t)=>(0,So.jsx)(_x,{style:{background:"rgba(16, 185, 129, 0.1)",color:"#10b981",borderColor:"rgba(16, 185, 129, 0.2)"},children:e},t)),e.tech.length>5&&(0,So.jsxs)(_x,{style:{background:"rgba(16, 185, 129, 0.1)",color:"#10b981",borderColor:"rgba(16, 185, 129, 0.2)"},children:["+",e.tech.length-5,"\uac1c"]})]})]})]})]},t))})})]}),(0,So.jsxs)(tp.div,{variants:f,style:{textAlign:"center",marginTop:"1.5rem"},children:[(0,So.jsx)("h3",{style:{fontSize:"1.5rem",fontFamily:"Pretendard-SemiBold",color:ip.primary,marginBottom:"2rem"},children:"\ub354 \ub9ce\uc740 \ud504\ub85c\uc81d\ud2b8 \ubcf4\uae30"}),(0,So.jsxs)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[(0,So.jsxs)($x,{href:n.links.github,target:"_blank",rel:"noopener noreferrer",primary:!0,children:[(0,So.jsx)(qp,{}),"GitHub \uc800\uc7a5\uc18c"]}),(0,So.jsxs)($x,{href:n.links.portfolio,target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(Bh,{}),"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 2024"]}),(0,So.jsxs)($x,{href:n.links.playstore,target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)($h,{}),"\ub9ac\ud2c0\ubc45\ud06c \uc571"]})]})]})]}),r&&(0,So.jsx)(Kx,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:h,children:(0,So.jsxs)(Wx,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,So.jsxs)(Gx,{children:[(0,So.jsx)("h3",{children:r.title}),(0,So.jsx)(Xx,{onClick:h,children:(0,So.jsx)(nm,{})})]}),(0,So.jsxs)(Yx,{children:[(0,So.jsxs)("div",{className:"section",children:[(0,So.jsx)("div",{className:"section-title",children:"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694"}),(0,So.jsx)("p",{style:{lineHeight:1.7,color:ip.secondary},children:r.description}),(0,So.jsxs)("div",{style:{marginTop:"1rem",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[(0,So.jsxs)("span",{children:[(0,So.jsx)("strong",{children:"\uae30\uac04:"})," ",r.period]}),(0,So.jsxs)("span",{children:[(0,So.jsx)("strong",{children:"\uc5ed\ud560:"})," ",r.role]}),r.status&&(0,So.jsxs)("span",{children:[(0,So.jsx)("strong",{children:"\uc0c1\ud0dc:"})," ",r.status]})]})]}),r.features&&(0,So.jsxs)("div",{className:"section",children:[(0,So.jsx)("div",{className:"section-title",children:"\uc8fc\uc694 \uae30\ub2a5"}),(0,So.jsx)(Qx,{children:r.features.map((e,t)=>(0,So.jsx)("li",{children:e},t))})]}),(0,So.jsxs)("div",{className:"section",children:[(0,So.jsx)("div",{className:"section-title",children:"\uc0ac\uc6a9 \uae30\uc220"}),(0,So.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:r.tech.map((e,t)=>(0,So.jsx)(_x,{children:e},t))})]}),r.challenges&&(0,So.jsxs)("div",{className:"section",children:[(0,So.jsx)("div",{className:"section-title",children:"\uae30\uc220\uc801 \ub3c4\uc804 & \ud574\uacb0"}),(0,So.jsx)(qx,{children:r.challenges.map((e,t)=>(0,So.jsx)("div",{className:"challenge-item",children:(0,So.jsx)("div",{className:"challenge-solution",children:e})},t))})]}),r.link&&(0,So.jsx)("div",{className:"section",children:(0,So.jsxs)($x,{href:r.link,target:"_blank",rel:"noopener noreferrer",primary:!0,style:{display:"inline-flex",width:"auto"},children:[(0,So.jsx)(Ph,{}),"\ud504\ub85c\uc81d\ud2b8 \ubcf4\ub7ec\uac00\uae30"]})})]})]})})]})})},Zx=Gt(pp)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */
`,ev=Gt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${cp}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,tv=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(102, 126, 234, 0.3);
  }
`,nv=Gt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  .icon {
    font-size: 2rem;
    color: ${rp};
  }

  h3 {
    font-size: 1.5rem;
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    margin: 0;
  }
`,rv=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,iv=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid ${rp};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`,av=Gt.div`
  .school-name {
    font-size: 1.2rem;
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    margin-bottom: 0.5rem;
  }

  .major {
    font-size: 1rem;
    font-family: 'Pretendard-SemiBold';
    color: ${rp};
    margin-bottom: 0.5rem;
  }

  .period {
    font-size: 0.9rem;
    color: ${ip.tertiary};
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .type {
    display: inline-block;
    background: rgba(102, 126, 234, 0.2);
    color: #a5b4fc;
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    margin-top: 0.5rem;
    border: 1px solid rgba(102, 126, 234, 0.3);
  }
`,ov=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,sv=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #3b82f6;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`,lv=Gt.div`
  .training-name {
    font-size: 1.1rem;
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    margin-bottom: 0.5rem;
  }

  .organization {
    font-size: 0.95rem;
    font-family: 'Pretendard-SemiBold';
    color: #3b82f6;
    margin-bottom: 0.5rem;
  }

  .period {
    font-size: 0.9rem;
    color: ${ip.tertiary};
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    border: 1px solid rgba(16, 185, 129, 0.3);
  }
`,cv=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,dv=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>{switch(e.status){case"\ucde8\ub4dd":return op.success;case"\ud544\uae30 \ud569\uaca9 (\uc2e4\uae30 \uc9c4\ud589 \uc911)":return op.warning;case"\ub9cc\ub8cc":return op.dark;default:return op.primary}}};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`,uv=Gt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  .cert-name {
    font-size: 1.1rem;
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    flex: 1;
  }

  .cert-icon {
    font-size: 1.5rem;
    color: ${rp};
  }
`,pv=Gt.div`
  .cert-date {
    font-size: 0.9rem;
    color: ${ip.tertiary};
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .cert-score {
    font-size: 0.9rem;
    color: ${ip.secondary};
    margin-bottom: 0.5rem;
  }

  .cert-status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-SemiBold';
    background: ${e=>{switch(e.status){case"\ucde8\ub4dd":return"rgba(16, 185, 129, 0.2)";case"\ud544\uae30 \ud569\uaca9 (\uc2e4\uae30 \uc9c4\ud589 \uc911)":return"rgba(245, 158, 11, 0.2)";case"\ub9cc\ub8cc":return"rgba(107, 114, 128, 0.2)";default:return"rgba(59, 130, 246, 0.2)"}}};
    color: ${e=>{switch(e.status){case"\ucde8\ub4dd":return"#10b981";case"\ud544\uae30 \ud569\uaca9 (\uc2e4\uae30 \uc9c4\ud589 \uc911)":return"#f59e0b";case"\ub9cc\ub8cc":return"#6b7280";default:return"#3b82f6"}}};
  }
`,hv=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`,mv=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${op.primary};
  }

  .stat-icon {
    font-size: 2.5rem;
    color: ${rp};
    margin-bottom: 1rem;
  }

  .stat-number {
    font-size: 2rem;
    font-family: 'Pretendard-Bold';
    color: ${ip.primary};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${ip.secondary};
  }
`,fv=()=>{const{education:e,training:t,certificates:n}=Lm,r={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}},i=[{icon:(0,So.jsx)(Nh,{}),number:"3",label:"\ud559\ub825 \ub2e8\uacc4"},{icon:(0,So.jsx)(dh,{}),number:"2",label:"\uad50\uc721 \uc5f0\uc218"},{icon:(0,So.jsx)(mh,{}),number:"3",label:"\ubcf4\uc720 \uc790\uaca9\uc99d"},{icon:(0,So.jsx)(im,{}),number:"900",label:"TOEIC \uc810\uc218"}];return(0,So.jsx)(Zx,{id:"education",children:(0,So.jsxs)(dp,{children:[(0,So.jsx)(up,{children:"Education & Certificates"}),(0,So.jsxs)(ev,{children:[(0,So.jsxs)(tv,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,So.jsxs)(nv,{children:[(0,So.jsx)(Nh,{className:"icon"}),(0,So.jsx)("h3",{children:"\ud559\ub825"})]}),(0,So.jsx)(rv,{children:e.map((e,t)=>(0,So.jsx)(iv,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:(0,So.jsxs)(av,{children:[(0,So.jsx)("div",{className:"school-name",children:e.school}),(0,So.jsx)("div",{className:"major",children:e.major}),(0,So.jsxs)("div",{className:"period",children:[(0,So.jsx)(hh,{}),e.period]}),(0,So.jsx)("div",{className:"type",children:e.type})]})},t))})]}),(0,So.jsxs)(tv,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,So.jsxs)(nv,{children:[(0,So.jsx)(dh,{className:"icon"}),(0,So.jsx)("h3",{children:"\uad50\uc721 \uc5f0\uc218"})]}),(0,So.jsx)(ov,{children:t.map((e,t)=>(0,So.jsx)(sv,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:(0,So.jsxs)(lv,{children:[(0,So.jsx)("div",{className:"training-name",children:e.name}),(0,So.jsx)("div",{className:"organization",children:e.organization}),(0,So.jsxs)("div",{className:"period",children:[(0,So.jsx)(hh,{}),e.period]}),(0,So.jsx)("div",{className:"status",children:e.status})]})},t))})]})]}),(0,So.jsxs)(tp.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.1}}},children:[(0,So.jsx)(up,{style:{fontSize:"2rem",marginTop:"4rem",marginBottom:"2rem"},children:"\uc790\uaca9\uc99d \ubc0f \uc778\uc99d"}),(0,So.jsx)(cv,{children:n.map((e,t)=>(0,So.jsxs)(dv,{status:e.status,variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:[(0,So.jsxs)(uv,{children:[(0,So.jsx)("div",{className:"cert-name",children:e.name}),(0,So.jsx)(oh,{className:"cert-icon"})]}),(0,So.jsxs)(pv,{status:e.status,children:[(0,So.jsxs)("div",{className:"cert-date",children:[(0,So.jsx)(hh,{}),e.date]}),e.score&&(0,So.jsxs)("div",{className:"cert-score",children:["\uc810\uc218: ",e.score]}),(0,So.jsx)("div",{className:"cert-status",children:e.status})]})]},t))})]}),(0,So.jsx)(hv,{children:i.map((e,t)=>(0,So.jsxs)(mv,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},whileHover:{y:-5},children:[(0,So.jsx)("div",{className:"stat-icon",children:e.icon}),(0,So.jsx)(tp.div,{className:"stat-number",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.5,delay:.1*t},children:e.number}),(0,So.jsx)("div",{className:"stat-label",children:e.label})]},t))})]})})};function gv(e,t){return function(){return e.apply(t,arguments)}}const{toString:xv}=Object.prototype,{getPrototypeOf:vv}=Object,{iterator:bv,toStringTag:yv}=Symbol,wv=(jv=Object.create(null),e=>{const t=xv.call(e);return jv[t]||(jv[t]=t.slice(8,-1).toLowerCase())});var jv;const kv=e=>(e=e.toLowerCase(),t=>wv(t)===e),Sv=e=>t=>typeof t===e,{isArray:Av}=Array,Cv=Sv("undefined");function Ev(e){return null!==e&&!Cv(e)&&null!==e.constructor&&!Cv(e.constructor)&&Tv(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Pv=kv("ArrayBuffer");const zv=Sv("string"),Tv=Sv("function"),Mv=Sv("number"),Rv=e=>null!==e&&"object"===typeof e,Lv=e=>{if("object"!==wv(e))return!1;const t=vv(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(yv in e)&&!(bv in e)},Iv=kv("Date"),Bv=kv("File"),Nv=kv("Blob"),Ov=kv("FileList"),Dv=kv("URLSearchParams"),[Fv,Vv,_v,Hv]=["ReadableStream","Request","Response","Headers"].map(kv);function $v(e,t){let n,r,{allOwnKeys:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),Av(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{if(Ev(e))return;const r=i?Object.getOwnPropertyNames(e):Object.keys(e),a=r.length;let o;for(n=0;n<a;n++)o=r[n],t.call(null,e[o],o,e)}}function Uv(e,t){if(Ev(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const Kv="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Wv=e=>!Cv(e)&&e!==Kv;const Gv=(Xv="undefined"!==typeof Uint8Array&&vv(Uint8Array),e=>Xv&&e instanceof Xv);var Xv;const Yv=kv("HTMLFormElement"),Qv=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),qv=kv("RegExp"),Jv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$v(n,(n,i)=>{let a;!1!==(a=t(n,i,e))&&(r[i]=a||n)}),Object.defineProperties(e,r)};const Zv=kv("AsyncFunction"),eb=(tb="function"===typeof setImmediate,nb=Tv(Kv.postMessage),tb?setImmediate:nb?((e,t)=>(Kv.addEventListener("message",n=>{let{source:r,data:i}=n;r===Kv&&i===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Kv.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var tb,nb;const rb="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Kv):"undefined"!==typeof process&&process.nextTick||eb,ib={isArray:Av,isArrayBuffer:Pv,isBuffer:Ev,isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||Tv(e.append)&&("formdata"===(t=wv(e))||"object"===t&&Tv(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Pv(e.buffer),t},isString:zv,isNumber:Mv,isBoolean:e=>!0===e||!1===e,isObject:Rv,isPlainObject:Lv,isEmptyObject:e=>{if(!Rv(e)||Ev(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch($C){return!1}},isReadableStream:Fv,isRequest:Vv,isResponse:_v,isHeaders:Hv,isUndefined:Cv,isDate:Iv,isFile:Bv,isBlob:Nv,isRegExp:qv,isFunction:Tv,isStream:e=>Rv(e)&&Tv(e.pipe),isURLSearchParams:Dv,isTypedArray:Gv,isFileList:Ov,forEach:$v,merge:function e(){const{caseless:t}=Wv(this)&&this||{},n={},r=(r,i)=>{const a=t&&Uv(n,i)||i;Lv(n[a])&&Lv(r)?n[a]=e(n[a],r):Lv(r)?n[a]=e({},r):Av(r)?n[a]=r.slice():n[a]=r};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&$v(arguments[i],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return $v(t,(t,r)=>{n&&Tv(t)?e[r]=gv(t,n):e[r]=t},{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,a,o;const s={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],r&&!r(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==n&&vv(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:wv,kindOfTest:kv,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Av(e))return e;let t=e.length;if(!Mv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[bv]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Yv,hasOwnProperty:Qv,hasOwnProp:Qv,reduceDescriptors:Jv,freezeMethods:e=>{Jv(e,(t,n)=>{if(Tv(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Tv(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))})},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach(e=>{n[e]=!0})};return Av(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Uv,global:Kv,isContextDefined:Wv,isSpecCompliantForm:function(e){return!!(e&&Tv(e.append)&&"FormData"===e[yv]&&e[bv])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Rv(e)){if(t.indexOf(e)>=0)return;if(Ev(e))return e;if(!("toJSON"in e)){t[r]=e;const i=Av(e)?[]:{};return $v(e,(e,t)=>{const a=n(e,r+1);!Cv(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:Zv,isThenable:e=>e&&(Rv(e)||Tv(e))&&Tv(e.then)&&Tv(e.catch),setImmediate:eb,asap:rb,isIterable:e=>null!=e&&Tv(e[bv])};function ab(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}ib.inherits(ab,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ib.toJSONObject(this.config),code:this.code,status:this.status}}});const ob=ab.prototype,sb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{sb[e]={value:e}}),Object.defineProperties(ab,sb),Object.defineProperty(ob,"isAxiosError",{value:!0}),ab.from=(e,t,n,r,i,a)=>{const o=Object.create(ob);return ib.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),ab.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const lb=ab;function cb(e){return ib.isPlainObject(e)||ib.isArray(e)}function db(e){return ib.endsWith(e,"[]")?e.slice(0,-2):e}function ub(e,t,n){return e?e.concat(t).map(function(e,t){return e=db(e),!n&&t?"["+e+"]":e}).join(n?".":""):t}const pb=ib.toFlatObject(ib,{},null,function(e){return/^is[A-Z]/.test(e)});const hb=function(e,t,n){if(!ib.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=ib.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!ib.isUndefined(t[e])})).metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&ib.isSpecCompliantForm(t);if(!ib.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(ib.isDate(e))return e.toISOString();if(ib.isBoolean(e))return e.toString();if(!s&&ib.isBlob(e))throw new lb("Blob is not supported. Use a Buffer instead.");return ib.isArrayBuffer(e)||ib.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,i){let s=e;if(e&&!i&&"object"===typeof e)if(ib.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ib.isArray(e)&&function(e){return ib.isArray(e)&&!e.some(cb)}(e)||(ib.isFileList(e)||ib.endsWith(n,"[]"))&&(s=ib.toArray(e)))return n=db(n),s.forEach(function(e,r){!ib.isUndefined(e)&&null!==e&&t.append(!0===o?ub([n],r,a):null===o?n:n+"[]",l(e))}),!1;return!!cb(e)||(t.append(ub(i,n,a),l(e)),!1)}const d=[],u=Object.assign(pb,{defaultVisitor:c,convertValue:l,isVisitable:cb});if(!ib.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!ib.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+r.join("."));d.push(n),ib.forEach(n,function(n,a){!0===(!(ib.isUndefined(n)||null===n)&&i.call(t,n,ib.isString(a)?a.trim():a,r,u))&&e(n,r?r.concat(a):[a])}),d.pop()}}(e),t};function mb(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function fb(e,t){this._pairs=[],e&&hb(e,this,t)}const gb=fb.prototype;gb.append=function(e,t){this._pairs.push([e,t])},gb.toString=function(e){const t=e?function(t){return e.call(this,t,mb)}:mb;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const xb=fb;function vb(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function bb(e,t,n){if(!t)return e;const r=n&&n.encode||vb;ib.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let a;if(a=i?i(t,n):ib.isURLSearchParams(t)?t.toString():new xb(t,n).toString(r),a){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}const yb=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ib.forEach(this.handlers,function(t){null!==t&&e(t)})}},wb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},jb={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:xb,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},kb="undefined"!==typeof window&&"undefined"!==typeof document,Sb="object"===typeof navigator&&navigator||void 0,Ab=kb&&(!Sb||["ReactNative","NativeScript","NS"].indexOf(Sb.product)<0),Cb="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,Eb=kb&&window.location.href||"http://localhost",Pb={...e,...jb};const zb=function(e){function t(e,n,r,i){let a=e[i++];if("__proto__"===a)return!0;const o=Number.isFinite(+a),s=i>=e.length;if(a=!a&&ib.isArray(r)?r.length:a,s)return ib.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o;r[a]&&ib.isObject(r[a])||(r[a]=[]);return t(e,n,r[a],i)&&ib.isArray(r[a])&&(r[a]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}(r[a])),!o}if(ib.isFormData(e)&&ib.isFunction(e.entries)){const n={};return ib.forEachEntry(e,(e,r)=>{t(function(e){return ib.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),r,n,0)}),n}return null};const Tb={transitional:wb,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=ib.isObject(e);i&&ib.isHTMLForm(e)&&(e=new FormData(e));if(ib.isFormData(e))return r?JSON.stringify(zb(e)):e;if(ib.isArrayBuffer(e)||ib.isBuffer(e)||ib.isStream(e)||ib.isFile(e)||ib.isBlob(e)||ib.isReadableStream(e))return e;if(ib.isArrayBufferView(e))return e.buffer;if(ib.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return hb(e,new Pb.classes.URLSearchParams,{visitor:function(e,t,n,r){return Pb.isNode&&ib.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((a=ib.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return hb(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(ib.isString(e))try{return(t||JSON.parse)(e),ib.trim(e)}catch($C){if("SyntaxError"!==$C.name)throw $C}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Tb.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(ib.isResponse(e)||ib.isReadableStream(e))return e;if(e&&ib.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch($C){if(n){if("SyntaxError"===$C.name)throw lb.from($C,lb.ERR_BAD_RESPONSE,this,null,this.response);throw $C}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pb.classes.FormData,Blob:Pb.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ib.forEach(["delete","get","head","post","put","patch"],e=>{Tb.headers[e]={}});const Mb=Tb,Rb=ib.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Lb=Symbol("internals");function Ib(e){return e&&String(e).trim().toLowerCase()}function Bb(e){return!1===e||null==e?e:ib.isArray(e)?e.map(Bb):String(e)}function Nb(e,t,n,r,i){return ib.isFunction(r)?r.call(this,t,n):(i&&(t=n),ib.isString(t)?ib.isString(r)?-1!==t.indexOf(r):ib.isRegExp(r)?r.test(t):void 0:void 0)}class Ob{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=Ib(t);if(!i)throw new Error("header name must be a non-empty string");const a=ib.findKey(r,i);(!a||void 0===r[a]||!0===n||void 0===n&&!1!==r[a])&&(r[a||t]=Bb(e))}const a=(e,t)=>ib.forEach(e,(e,n)=>i(e,n,t));if(ib.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(ib.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))a((e=>{const t={};let n,r,i;return e&&e.split("\n").forEach(function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Rb[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t})(e),t);else if(ib.isObject(e)&&ib.isIterable(e)){let n,r,i={};for(const t of e){if(!ib.isArray(t))throw TypeError("Object iterator must return a key-value pair");i[r=t[0]]=(n=i[r])?ib.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}a(i,t)}else null!=e&&i(t,e,n);return this}get(e,t){if(e=Ib(e)){const n=ib.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(ib.isFunction(t))return t.call(this,e,n);if(ib.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ib(e)){const n=ib.findKey(this,e);return!(!n||void 0===this[n]||t&&!Nb(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Ib(e)){const i=ib.findKey(n,e);!i||t&&!Nb(0,n[i],i,t)||(delete n[i],r=!0)}}return ib.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!Nb(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return ib.forEach(this,(r,i)=>{const a=ib.findKey(n,i);if(a)return t[a]=Bb(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}(i):String(i).trim();o!==i&&delete t[i],t[o]=Bb(r),n[o]=!0}),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return ib.forEach(this,(n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ib.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(e=>{let[t,n]=e;return t+": "+n}).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach(e=>t.set(e)),t}static accessor(e){const t=(this[Lb]=this[Lb]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Ib(e);t[r]||(!function(e,t){const n=ib.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}(n,e),t[r]=!0)}return ib.isArray(e)?e.forEach(r):r(e),this}}Ob.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ib.reduceDescriptors(Ob.prototype,(e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}}),ib.freezeMethods(Ob);const Db=Ob;function Fb(e,t){const n=this||Mb,r=t||n,i=Db.from(r.headers);let a=r.data;return ib.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Vb(e){return!(!e||!e.__CANCEL__)}function _b(e,t,n){lb.call(this,null==e?"canceled":e,lb.ERR_CANCELED,t,n),this.name="CanceledError"}ib.inherits(_b,lb,{__CANCEL__:!0});const Hb=_b;function $b(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new lb("Request failed with status code "+n.status,[lb.ERR_BAD_REQUEST,lb.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Ub=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,a=0,o=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[o];i||(i=l),n[a]=s,r[a]=l;let d=o,u=0;for(;d!==a;)u+=n[d++],d%=e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),l-i<t)return;const p=c&&l-c;return p?Math.round(1e3*u/p):void 0}};const Kb=function(e,t){let n,r,i=0,a=1e3/t;const o=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=a,n=null,r&&(clearTimeout(r),r=null),e(...t)};return[function(){const e=Date.now(),t=e-i;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=a?o(l,e):(n=l,r||(r=setTimeout(()=>{r=null,o(n)},a-t)))},()=>n&&o(n)]},Wb=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const i=Ub(50,250);return Kb(n=>{const a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,l=i(s);r=a;e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&a<=o?(o-a)/l:void 0,event:n,lengthComputable:null!=o,[t?"download":"upload"]:!0})},n)},Gb=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Xb=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ib.asap(()=>e(...n))},Yb=Pb.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Pb.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Pb.origin),Pb.navigator&&/(msie|trident)/i.test(Pb.navigator.userAgent)):()=>!0,Qb=Pb.hasStandardBrowserEnv?{write(e,t,n,r,i,a){const o=[e+"="+encodeURIComponent(t)];ib.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ib.isString(r)&&o.push("path="+r),ib.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function qb(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Jb=e=>e instanceof Db?{...e}:e;function Zb(e,t){t=t||{};const n={};function r(e,t,n,r){return ib.isPlainObject(e)&&ib.isPlainObject(t)?ib.merge.call({caseless:r},e,t):ib.isPlainObject(t)?ib.merge({},t):ib.isArray(t)?t.slice():t}function i(e,t,n,i){return ib.isUndefined(t)?ib.isUndefined(e)?void 0:r(void 0,e,0,i):r(e,t,0,i)}function a(e,t){if(!ib.isUndefined(t))return r(void 0,t)}function o(e,t){return ib.isUndefined(t)?ib.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,i,a){return a in t?r(n,i):a in e?r(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(Jb(e),Jb(t),0,!0)};return ib.forEach(Object.keys({...e,...t}),function(r){const a=l[r]||i,o=a(e[r],t[r],r);ib.isUndefined(o)&&a!==s||(n[r]=o)}),n}const ey=e=>{const t=Zb({},e);let n,{data:r,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:o,headers:s,auth:l}=t;if(t.headers=s=Db.from(s),t.url=bb(qb(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),ib.isFormData(r))if(Pb.hasStandardBrowserEnv||Pb.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map(e=>e.trim()).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(Pb.hasStandardBrowserEnv&&(i&&ib.isFunction(i)&&(i=i(t)),i||!1!==i&&Yb(t.url))){const e=a&&o&&Qb.read(o);e&&s.set(a,e)}return t},ty="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise(function(t,n){const r=ey(e);let i=r.data;const a=Db.from(r.headers).normalize();let o,s,l,c,d,{responseType:u,onUploadProgress:p,onDownloadProgress:h}=r;function m(){c&&c(),d&&d(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let f=new XMLHttpRequest;function g(){if(!f)return;const r=Db.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders());$b(function(e){t(e),m()},function(e){n(e),m()},{data:u&&"text"!==u&&"json"!==u?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f}),f=null}f.open(r.method.toUpperCase(),r.url,!0),f.timeout=r.timeout,"onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&setTimeout(g)},f.onabort=function(){f&&(n(new lb("Request aborted",lb.ECONNABORTED,e,f)),f=null)},f.onerror=function(){n(new lb("Network Error",lb.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||wb;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new lb(t,i.clarifyTimeoutError?lb.ETIMEDOUT:lb.ECONNABORTED,e,f)),f=null},void 0===i&&a.setContentType(null),"setRequestHeader"in f&&ib.forEach(a.toJSON(),function(e,t){f.setRequestHeader(t,e)}),ib.isUndefined(r.withCredentials)||(f.withCredentials=!!r.withCredentials),u&&"json"!==u&&(f.responseType=r.responseType),h&&([l,d]=Wb(h,!0),f.addEventListener("progress",l)),p&&f.upload&&([s,c]=Wb(p),f.upload.addEventListener("progress",s),f.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(o=t=>{f&&(n(!t||t.type?new Hb(null,e,f):t),f.abort(),f=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===Pb.protocols.indexOf(x)?n(new lb("Unsupported protocol "+x+":",lb.ERR_BAD_REQUEST,e)):f.send(i||null)})},ny=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const i=function(e){if(!n){n=!0,o();const t=e instanceof Error?e:this.reason;r.abort(t instanceof lb?t:new Hb(t instanceof Error?t.message:t))}};let a=t&&setTimeout(()=>{a=null,i(new lb(`timeout ${t} of ms exceeded`,lb.ETIMEDOUT))},t);const o=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)}),e=null)};e.forEach(e=>e.addEventListener("abort",i));const{signal:s}=r;return s.unsubscribe=()=>ib.asap(o),s}},ry=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},iy=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},ay=(e,t,n,r)=>{const i=async function*(e,t){for await(const n of iy(e))yield*ry(n,t)}(e,t);let a,o=0,s=e=>{a||(a=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return s(),void e.close();let a=r.byteLength;if(n){let e=o+=a;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),i.return())},{highWaterMark:2})},oy="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,sy=oy&&"function"===typeof ReadableStream,ly=oy&&("function"===typeof TextEncoder?(cy=new TextEncoder,e=>cy.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var cy;const dy=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch($C){return!1}},uy=sy&&dy(()=>{let e=!1;const t=new Request(Pb.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),py=sy&&dy(()=>ib.isReadableStream(new Response("").body)),hy={stream:py&&(e=>e.body)};var my;oy&&(my=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!hy[e]&&(hy[e]=ib.isFunction(my[e])?t=>t[e]():(t,n)=>{throw new lb(`Response type '${e}' is not supported`,lb.ERR_NOT_SUPPORT,n)})}));const fy=async(e,t)=>{const n=ib.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(ib.isBlob(e))return e.size;if(ib.isSpecCompliantForm(e)){const t=new Request(Pb.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return ib.isArrayBufferView(e)||ib.isArrayBuffer(e)?e.byteLength:(ib.isURLSearchParams(e)&&(e+=""),ib.isString(e)?(await ly(e)).byteLength:void 0)})(t):n},gy=oy&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:d,withCredentials:u="same-origin",fetchOptions:p}=ey(e);c=c?(c+"").toLowerCase():"text";let h,m=ny([i,a&&a.toAbortSignal()],o);const f=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let g;try{if(l&&uy&&"get"!==n&&"head"!==n&&0!==(g=await fy(d,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(ib.isFormData(r)&&(e=n.headers.get("content-type"))&&d.setContentType(e),n.body){const[e,t]=Gb(g,Wb(Xb(l)));r=ay(n.body,65536,e,t)}}ib.isString(u)||(u=u?"include":"omit");const i="credentials"in Request.prototype;h=new Request(t,{...p,signal:m,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:i?u:void 0});let a=await fetch(h,p);const o=py&&("stream"===c||"response"===c);if(py&&(s||o&&f)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=a[t]});const t=ib.toFiniteNumber(a.headers.get("content-length")),[n,r]=s&&Gb(t,Wb(Xb(s),!0))||[];a=new Response(ay(a.body,65536,n,()=>{r&&r(),f&&f()}),e)}c=c||"text";let x=await hy[ib.findKey(hy,c)||"text"](a,e);return!o&&f&&f(),await new Promise((t,n)=>{$b(t,n,{data:x,headers:Db.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:h})})}catch(x){if(f&&f(),x&&"TypeError"===x.name&&/Load failed|fetch/i.test(x.message))throw Object.assign(new lb("Network Error",lb.ERR_NETWORK,e,h),{cause:x.cause||x});throw lb.from(x,x&&x.code,e,h)}}),xy={http:null,xhr:ty,fetch:gy};ib.forEach(xy,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch($C){}Object.defineProperty(e,"adapterName",{value:t})}});const vy=e=>`- ${e}`,by=e=>ib.isFunction(e)||null===e||!1===e,yy=e=>{e=ib.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){let t;if(n=e[a],r=n,!by(n)&&(r=xy[(t=String(n)).toLowerCase()],void 0===r))throw new lb(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+a]=r}if(!r){const e=Object.entries(i).map(e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")});let n=t?e.length>1?"since :\n"+e.map(vy).join("\n"):" "+vy(e[0]):"as no adapter specified";throw new lb("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function wy(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Hb(null,e)}function jy(e){wy(e),e.headers=Db.from(e.headers),e.data=Fb.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return yy(e.adapter||Mb.adapter)(e).then(function(t){return wy(e),t.data=Fb.call(e,e.transformResponse,t),t.headers=Db.from(t.headers),t},function(t){return Vb(t)||(wy(e),t&&t.response&&(t.response.data=Fb.call(e,e.transformResponse,t.response),t.response.headers=Db.from(t.response.headers))),Promise.reject(t)})}const ky="1.11.0",Sy={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Sy[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Ay={};Sy.transitional=function(e,t,n){function r(e,t){return"[Axios v"+ky+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,a)=>{if(!1===e)throw new lb(r(i," has been removed"+(t?" in "+t:"")),lb.ERR_DEPRECATED);return t&&!Ay[i]&&(Ay[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},Sy.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const Cy={assertOptions:function(e,t,n){if("object"!==typeof e)throw new lb("options must be an object",lb.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const t=e[a],n=void 0===t||o(t,a,e);if(!0!==n)throw new lb("option "+a+" must be "+n,lb.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new lb("Unknown option "+a,lb.ERR_BAD_OPTION)}},validators:Sy},Ey=Cy.validators;class Py{constructor(e){this.defaults=e||{},this.interceptors={request:new yb,response:new yb}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch($C){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Zb(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&Cy.assertOptions(n,{silentJSONParsing:Ey.transitional(Ey.boolean),forcedJSONParsing:Ey.transitional(Ey.boolean),clarifyTimeoutError:Ey.transitional(Ey.boolean)},!1),null!=r&&(ib.isFunction(r)?t.paramsSerializer={serialize:r}:Cy.assertOptions(r,{encode:Ey.function,serialize:Ey.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Cy.assertOptions(t,{baseUrl:Ey.spelling("baseURL"),withXsrfToken:Ey.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=i&&ib.merge(i.common,i[t.method]);i&&ib.forEach(["delete","get","head","post","put","patch","common"],e=>{delete i[e]}),t.headers=Db.concat(a,i);const o=[];let s=!0;this.interceptors.request.forEach(function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,o.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let d,u=0;if(!s){const e=[jy.bind(this),void 0];for(e.unshift(...o),e.push(...l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=o.length;let p=t;for(u=0;u<d;){const e=o[u++],t=o[u++];try{p=e(p)}catch(h){t.call(this,h);break}}try{c=jy.call(this,p)}catch(h){return Promise.reject(h)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return bb(qb((e=Zb(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}ib.forEach(["delete","get","head","options"],function(e){Py.prototype[e]=function(t,n){return this.request(Zb(n||{},{method:e,url:t,data:(n||{}).data}))}}),ib.forEach(["post","put","patch"],function(e){function t(t){return function(n,r,i){return this.request(Zb(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Py.prototype[e]=t(),Py.prototype[e+"Form"]=t(!0)});const zy=Py;class Ty{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t;const r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Hb(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Ty(function(t){e=t}),cancel:e}}}const My=Ty;const Ry={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ry).forEach(e=>{let[t,n]=e;Ry[n]=t});const Ly=Ry;const Iy=function e(t){const n=new zy(t),r=gv(zy.prototype.request,n);return ib.extend(r,zy.prototype,n,{allOwnKeys:!0}),ib.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Zb(t,n))},r}(Mb);Iy.Axios=zy,Iy.CanceledError=Hb,Iy.CancelToken=My,Iy.isCancel=Vb,Iy.VERSION=ky,Iy.toFormData=hb,Iy.AxiosError=lb,Iy.Cancel=Iy.CanceledError,Iy.all=function(e){return Promise.all(e)},Iy.spread=function(e){return function(t){return e.apply(null,t)}},Iy.isAxiosError=function(e){return ib.isObject(e)&&!0===e.isAxiosError},Iy.mergeConfig=Zb,Iy.AxiosHeaders=Db,Iy.formToJSON=e=>zb(ib.isHTMLForm(e)?new FormData(e):e),Iy.getAdapter=yy,Iy.HttpStatusCode=Ly,Iy.default=Iy;const By=Iy,Ny=Gt(pp)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */

  @media (max-width: ${lp}) {
    padding: 60px 0;
  }
`,Oy=Gt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: ${lp}) {
    padding: 0 20px;
  }

  @media (max-width: ${sp}) {
    padding: 0 15px;
  }
`,Dy=Gt(tp.h2)`
  font-family: 'Pretendard-Bold';
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 5rem;
  color: ${ip.primary};
  letter-spacing: -0.03em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: ${ip.tertiary};
  }

  @media (max-width: ${lp}) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${sp}) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`,Fy=Gt(tp.p)`
  font-family: 'Pretendard-Regular';
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${ip.secondary};
  line-height: 1.8;

  @media (max-width: ${lp}) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: ${sp}) {
    font-size: 1rem;
  }
`,Vy=Gt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${lp}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,_y=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;

  @media (max-width: ${lp}) {
    padding: 2rem;
  }
`,Hy=Gt.h3`
  font-family: 'Pretendard-Bold';
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${ip.primary};
  letter-spacing: -0.02em;

  @media (max-width: ${sp}) {
    font-size: 1.75rem;
  }
`,$y=Gt.p`
  font-family: 'Pretendard-Regular';
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${ip.secondary};
  margin-bottom: 2.5rem;

  @media (max-width: ${sp}) {
    font-size: 1rem;
  }
`,Uy=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`,Ky=Gt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Wy=Gt.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${rp};
  font-size: 1.2rem;
`,Gy=Gt.div`
  flex: 1;
`,Xy=Gt.div`
  font-family: 'Pretendard-Regular';
  font-size: 0.9rem;
  color: ${ip.tertiary};
  margin-bottom: 0.3rem;
`,Yy=Gt.a`
  font-family: 'Pretendard-Medium';
  font-size: 1.05rem;
  color: ${ip.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${rp};
  }
`,Qy=Gt.div`
  display: flex;
  gap: 1rem;
`,qy=Gt.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ip.secondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${rp};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }
`,Jy=Gt(tp.form)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;

  @media (max-width: ${lp}) {
    padding: 2rem;
  }
`,Zy=Gt.div`
  margin-bottom: 1.5rem;
`,ew=Gt.label`
  display: block;
  font-family: 'Pretendard-Medium';
  font-size: 1rem;
  color: ${ip.primary};
  margin-bottom: 0.5rem;
`,tw=Gt.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: ${ip.primary};
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${ip.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${rp};
    background: rgba(255, 255, 255, 0.08);
  }
`,nw=Gt.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: ${ip.primary};
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${ip.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${rp};
    background: rgba(255, 255, 255, 0.08);
  }
`,rw=Gt(tp.button)`
  width: 100%;
  padding: 1.2rem;
  background: ${op.primary};
  border: none;
  border-radius: 10px;
  color: white;
  font-family: 'Pretendard-SemiBold';
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  }
`,iw=Gt.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,aw=Gt(tp.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: ${e=>"success"===e.type?"rgba(16, 185, 129, 0.9)":"rgba(239, 68, 68, 0.9)"};
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  font-family: 'Pretendard-Medium';
  z-index: 1000;

  @media (max-width: ${sp}) {
    right: 20px;
    left: 20px;
    bottom: 20px;
  }
`,ow=()=>{const[e,n]=(0,t.useState)({name:"",email:"",message:""}),[r,i]=(0,t.useState)(!1),[a,o]=(0,t.useState)(null),s=t=>{n({...e,[t.target.name]:t.target.value})},l=(e,t)=>{o({message:e,type:t}),setTimeout(()=>{o(null)},5e3)};return(0,So.jsxs)(Ny,{id:"contact",children:[(0,So.jsxs)(Oy,{children:[(0,So.jsx)(Dy,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:"Get In Touch"}),(0,So.jsx)(Fy,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:"\uc0c8\ub85c\uc6b4 \uae30\ud68c\uc640 \ub3c4\uc804\uc744 \ud658\uc601\ud569\ub2c8\ub2e4. \uc5b8\uc81c\ub4e0\uc9c0 \uc5f0\ub77d\uc8fc\uc138\uc694!"}),(0,So.jsxs)(Vy,{children:[(0,So.jsxs)(_y,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[(0,So.jsx)(Hy,{children:"Let's Connect"}),(0,So.jsxs)($y,{children:["\uc0c8\ub85c\uc6b4 \uae30\ud68c\uc640 \ub3c4\uc804\uc744 \ud658\uc601\ud569\ub2c8\ub2e4.",(0,So.jsx)("br",{}),"\uc5b8\uc81c\ub4e0\uc9c0 \uc5f0\ub77d\uc8fc\uc138\uc694!"]}),(0,So.jsxs)(Uy,{children:[(0,So.jsxs)(Ky,{children:[(0,So.jsx)(Wy,{children:(0,So.jsx)(Eh,{})}),(0,So.jsxs)(Gy,{children:[(0,So.jsx)(Xy,{children:"\uc774\uba54\uc77c"}),(0,So.jsx)(Yy,{href:"mailto:ehdrb12123@naver.com",children:"ehdrb12123@naver.com"})]})]}),(0,So.jsxs)(Ky,{children:[(0,So.jsx)(Wy,{children:(0,So.jsx)(Gh,{})}),(0,So.jsxs)(Gy,{children:[(0,So.jsx)(Xy,{children:"\uc804\ud654\ubc88\ud638"}),(0,So.jsx)(Yy,{href:"tel:+821040488292",children:"010-4048-8292"})]})]}),(0,So.jsxs)(Ky,{children:[(0,So.jsx)(Wy,{children:(0,So.jsx)(_h,{})}),(0,So.jsxs)(Gy,{children:[(0,So.jsx)(Xy,{children:"\uc704\uce58"}),(0,So.jsx)(Yy,{as:"span",children:"\ub300\ud55c\ubbfc\uad6d, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc131\ub3d9\uad6c"})]})]})]}),(0,So.jsxs)(Qy,{children:[(0,So.jsx)(qy,{href:"https://github.com/dongkyukim1",target:"_blank",rel:"noopener noreferrer",children:(0,So.jsx)(qp,{})}),(0,So.jsx)(qy,{href:"https://begin-developer.tistory.com/",target:"_blank",rel:"noopener noreferrer",children:(0,So.jsx)(lh,{})})]})]}),(0,So.jsxs)(Jy,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.3},viewport:{once:!0},onSubmit:async t=>{t.preventDefault(),i(!0);try{const t="http://localhost:5000/api/contacts";console.log("API \uc694\uccad URL:",t);201===(await By.post(t,e)).status&&(l("\uba54\uc2dc\uc9c0\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4!","success"),n({name:"",email:"",message:""}))}catch(r){console.error("Error:",r),l("\uba54\uc2dc\uc9c0 \uc804\uc1a1\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.","error")}finally{i(!1)}},children:[(0,So.jsxs)(Zy,{children:[(0,So.jsx)(ew,{children:"\uc774\ub984"}),(0,So.jsx)(tw,{type:"text",name:"name",value:e.name,onChange:s,required:!0,placeholder:"\ud64d\uae38\ub3d9"})]}),(0,So.jsxs)(Zy,{children:[(0,So.jsx)(ew,{children:"\uc774\uba54\uc77c"}),(0,So.jsx)(tw,{type:"email",name:"email",value:e.email,onChange:s,required:!0,placeholder:"example@email.com"})]}),(0,So.jsxs)(Zy,{children:[(0,So.jsx)(ew,{children:"\uba54\uc2dc\uc9c0"}),(0,So.jsx)(nw,{name:"message",value:e.message,onChange:s,required:!0,rows:"5",placeholder:"\uc774\uc9c1\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud558\uace0\uc2f6\uc2b5\ub2c8\ub2e4."})]}),(0,So.jsx)(rw,{type:"submit",disabled:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:r?(0,So.jsx)(iw,{}):(0,So.jsxs)(So.Fragment,{children:[(0,So.jsx)(Kh,{}),"\uba54\uc2dc\uc9c0 \ubcf4\ub0b4\uae30"]})})]})]})]}),(0,So.jsx)(Lp,{children:a&&(0,So.jsx)(aw,{type:a.type,initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},children:a.message})})]})},sw=n.p+"static/media/devhub.e18c8952680f7e9adf96.gif",lw=n.p+"static/media/dogfoot.a00142102f90c9c79a41.png",cw=n.p+"static/media/littlebank.ef8fc76f9576624b37a8.png",dw=n.p+"static/media/trippleai.d826944528fbab8ef0ec.png",uw=Gt.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${cp}) {
    display: none;
  }
`,pw=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,hw=Gt(tp.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }

  &.active {
    background: rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.5);
  }
`,mw=Gt(tp.div)`
  position: fixed;
  right: 80px;
  top: 5%;
  width: 400px;
  max-height: 90vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.2rem;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  /* Firefox 스크롤바 */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.05);
`,fw=Gt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`,gw=Gt.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    transform: rotate(90deg);
  }
`,xw=Gt.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`,vw=Gt(tp.div)`
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  background: rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,bw=Gt.div`
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`,yw=Gt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin-bottom: 0.6rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  .label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
  }

  .value {
    color: white;
    font-weight: 600;
    font-size: 1rem;
  }

  &.highlight {
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.3);

    .value {
      color: #667eea;
    }
  }
`,ww=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.3rem;
`,jw=Gt.span`
  display: inline-block;
  padding: 0.25rem 0.6rem;
  background: rgba(102, 126, 234, 0.2);
  color: #a5b4fc;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.2;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.3);
    color: #c7d2fe;
    transform: translateY(-1px);
  }
`,kw=()=>{const[e,n]=(0,t.useState)(null),r=fa(),i=t=>{n(e===t?null:t)},a=[{src:cw,title:"LittleBank App",clickable:!0},{src:sw,title:"DevHub Platform",clickable:!0},{src:dw,title:"Tripple AI",clickable:!0},{src:px,title:"PMK Admin",clickable:!0},{src:hx,title:"LittleBank Admin",clickable:!0},{src:lw,title:"Dogfoot Project",clickable:!0}],o={experience:"1+ Years",projects:"3 Major Projects",skills:["React","Next.js","Flutter","Java","Spring Boot","Python","Flask","JavaScript","TypeScript","MySQL","MongoDB","Redis","AWS","Docker"],availability:"Currently Employed",location:"Seoul, Korea"};return(0,So.jsxs)(uw,{children:[(0,So.jsxs)(Lp,{mode:"wait",children:["gallery"===e&&(0,So.jsxs)(mw,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},children:[(0,So.jsxs)(fw,{children:[(0,So.jsxs)("h3",{children:[(0,So.jsx)(Dh,{}),"Project Gallery"]}),(0,So.jsx)(gw,{onClick:()=>n(null),children:(0,So.jsx)(nm,{})})]}),(0,So.jsx)(xw,{children:a.map((e,t)=>(0,So.jsxs)(vw,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{return e.clickable&&void("LittleBank App"===(t=e.title)?r("/project/littlebank"):"DevHub Platform"===t?r("/project/devhub"):"Tripple AI"===t?r("/project/tripplai"):"PMK Admin"===t||"LittleBank Admin"===t?r("/project/dashboard"):"Dogfoot Project"===t&&r("/project/dogfoot"));var t},style:{cursor:e.clickable?"pointer":"default"},children:[(0,So.jsx)("img",{src:e.src,alt:e.title}),(0,So.jsxs)("div",{className:"overlay",children:[e.title,e.clickable&&(0,So.jsx)("span",{style:{color:"#667eea",fontSize:"0.8rem",display:"block"},children:"\ud074\ub9ad\ud558\uc5ec \uc0c1\uc138\ubcf4\uae30"})]})]},t))})]}),"status"===e&&(0,So.jsxs)(mw,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},children:[(0,So.jsxs)(fw,{children:[(0,So.jsxs)("h3",{children:[(0,So.jsx)(Fh,{}),"Developer Status"]}),(0,So.jsx)(gw,{onClick:()=>n(null),children:(0,So.jsx)(nm,{})})]}),(0,So.jsxs)(bw,{children:[(0,So.jsxs)(yw,{className:"highlight",children:[(0,So.jsx)("span",{className:"label",children:"Current Status"}),(0,So.jsx)("span",{className:"value",children:o.availability})]}),(0,So.jsxs)(yw,{children:[(0,So.jsx)("span",{className:"label",children:"Experience"}),(0,So.jsx)("span",{className:"value",children:o.experience})]}),(0,So.jsxs)(yw,{children:[(0,So.jsx)("span",{className:"label",children:"Projects Completed"}),(0,So.jsx)("span",{className:"value",children:o.projects})]}),(0,So.jsxs)(yw,{children:[(0,So.jsx)("span",{className:"label",children:"Location"}),(0,So.jsx)("span",{className:"value",children:o.location})]})]}),(0,So.jsxs)(bw,{children:[(0,So.jsx)("h4",{children:"Skills"}),(0,So.jsx)(ww,{children:o.skills.map((e,t)=>(0,So.jsx)(jw,{children:e},t))})]})]})]}),(0,So.jsxs)(pw,{children:[(0,So.jsx)(hw,{className:"gallery"===e?"active":"",onClick:()=>i("gallery"),whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,So.jsx)(Dh,{})}),(0,So.jsx)(hw,{className:"status"===e?"active":"",onClick:()=>i("status"),whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,So.jsx)(Fh,{})})]})]})};function Sw(e){return $p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.0009 3C17.7999 3 22.501 6.66445 22.501 11.1847C22.501 15.705 17.7999 19.3694 12.0009 19.3694C11.4127 19.3694 10.8361 19.331 10.2742 19.2586L5.86611 22.1419C5.36471 22.4073 5.18769 22.3778 5.39411 21.7289L6.28571 18.0513C3.40572 16.5919 1.50098 14.0619 1.50098 11.1847C1.50098 6.66445 6.20194 3 12.0009 3ZM17.908 11.0591L19.3783 9.63617C19.5656 9.45485 19.5705 9.15617 19.3893 8.96882C19.2081 8.78172 18.9094 8.77668 18.7219 8.95788L16.7937 10.8239V9.28226C16.7937 9.02172 16.5825 8.81038 16.3218 8.81038C16.0613 8.81038 15.8499 9.02172 15.8499 9.28226V11.8393C15.8321 11.9123 15.8325 11.9879 15.8499 12.0611V13.5C15.8499 13.7606 16.0613 13.9719 16.3218 13.9719C16.5825 13.9719 16.7937 13.7606 16.7937 13.5V12.1373L17.2213 11.7236L18.6491 13.7565C18.741 13.8873 18.8873 13.9573 19.0357 13.9573C19.1295 13.9573 19.2241 13.9293 19.3066 13.8714C19.5199 13.7217 19.5713 13.4273 19.4215 13.214L17.908 11.0591ZM14.9503 12.9839H13.4904V9.29702C13.4904 9.03648 13.2791 8.82514 13.0184 8.82514C12.7579 8.82514 12.5467 9.03648 12.5467 9.29702V13.4557C12.5467 13.7164 12.7579 13.9276 13.0184 13.9276H14.9503C15.211 13.9276 15.4222 13.7164 15.4222 13.4557C15.4222 13.1952 15.211 12.9839 14.9503 12.9839ZM9.09318 11.8925L9.78919 10.1849L10.4265 11.8925H9.09318ZM11.6159 12.3802C11.6161 12.3748 11.6175 12.3699 11.6175 12.3645C11.6175 12.2405 11.5687 12.1287 11.4906 12.0445L10.4452 9.24376C10.3468 8.9639 10.1005 8.77815 9.81761 8.77028C9.53948 8.76277 9.28066 8.93672 9.16453 9.21669L7.50348 13.2924C7.40519 13.5337 7.52107 13.8092 7.76242 13.9076C8.00378 14.006 8.2792 13.89 8.37749 13.6486L8.70852 12.8364H10.7787L11.077 13.6356C11.1479 13.8254 11.3278 13.9426 11.5193 13.9425C11.5741 13.9425 11.6298 13.9329 11.6842 13.9126C11.9284 13.8216 12.0524 13.5497 11.9612 13.3054L11.6159 12.3802ZM8.29446 9.30194C8.29446 9.0414 8.08312 8.83006 7.82258 8.83006H4.57822C4.31755 8.83006 4.10622 9.0414 4.10622 9.30194C4.10622 9.56249 4.31755 9.77382 4.57822 9.77382H5.73824V13.5099C5.73824 13.7705 5.94957 13.9817 6.21012 13.9817C6.47078 13.9817 6.68212 13.7705 6.68212 13.5099V9.77382H7.82258C8.08312 9.77382 8.29446 9.56249 8.29446 9.30194Z"},child:[]}]})(e)}const Aw=n.p+"static/media/\ud648.929487b1996b1a38801b.png",Cw=n.p+"static/media/\ucc44\ud305.265decfb6a7d5c6c1480.png",Ew=n.p+"static/media/\ucc4c\ub9b0\uc9c0\ubaa9\ub85d.598f3ce5983f13399d88.png",Pw=n.p+"static/media/\uacbd\uc7c1\uc0c1\uc138.7c678ea6ceea33b243c2.png",zw=n.p+"static/media/\ub7ad\ud0b9\uc0c1\uc138.b0b21fec27780f668852.png",Tw=n.p+"static/media/\ud53c\ub4dc\ubaa9\ub85d.189e2543e95628743c4f.png",Mw=n.p+"static/media/\uacb0\uc81c.da3386959df16a99f170.png",Rw=n.p+"static/media/\ud540\ubc88\ud638.b980905c763ffcb8f116.png",Lw=n.p+"static/media/\uad6c\ub3c5\uad00\ub9ac.8b770140d0a922ad27d3.png",Iw=n.p+"static/media/\ud61c\ud0dd.8307ffc49459c8af0d3d.png",Bw=n.p+"static/media/\uc774\uc6a9\uc57d\uad00\ub3d9\uc758.ee48a47893f3c4eb8547.png",Nw=n.p+"static/media/\ud53c\uadf8\ub9c8.a1e8259b355eff2a0756.png",Ow=n.p+"static/media/\ub178\uc158.b5b470430d030cbf83da.png",Dw=n.p+"static/media/\ud50c\ub808\uc774\ucf58\uc194.d440c5e6641348633970.png",Fw=n.p+"static/media/swagger.d5fb96ba4f9b216cf7e7.png",Vw="rgb(58, 136, 244)",_w="rgba(58, 136, 244, 0.1)",Hw="rgba(58, 136, 244, 0.3)",$w={primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.85)",tertiary:"rgba(255, 255, 255, 0.7)"},Uw="#02569B",Kw="#0175C2",Ww="#6DB33F",Gw="#E32934",Xw="#FFCA28",Yw="#4479A1",Qw="#DC382D",qw="#FF9900",Jw="#2496ED",Zw="#181717",ej="#2088FF",tj="#85EA2D",nj=Gt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`,rj=Gt.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(58, 136, 244, 0.1);

  @media (max-width: 1400px) {
    right: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,ij=Gt.button`
  background: ${e=>e.active?"rgb(58, 136, 244)":"transparent"};
  color: ${e=>e.active?"white":"#666"};
  border: 1px solid ${e=>e.active?"rgb(58, 136, 244)":"#ddd"};
  padding: 0.7rem;
  border-radius: 12px;
  font-family: 'Pretendard-Medium';
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background: ${e=>e.active?"rgb(58, 136, 244)":"rgba(58, 136, 244, 0.1)"};
    border-color: rgb(58, 136, 244);
    color: ${e=>e.active?"white":"rgb(58, 136, 244)"};
  }

  &:hover::before {
    content: "${e=>e.label}";
    position: absolute;
    right: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    white-space: nowrap;
    pointer-events: none;
  }

  svg {
    font-size: 1.2rem;
  }
`,aj=Gt(ij)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
  padding: 0.7rem 1.2rem;
  font-size: 0.9rem;
  display: flex;
  gap: 0.5rem;
  background: white;
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`,oj=Gt.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,sj=Gt.div`
  h1 {
    font-family: 'Pretendard-Bold';
    font-size: 2.5rem;
    color: rgb(58, 136, 244);
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Pretendard-Medium';
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
  }
`,lj=Gt.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(58, 136, 244, 0.1);
  color: rgb(58, 136, 244);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Pretendard-Medium';
  font-size: 0.9rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;

  svg {
    font-size: 1rem;
  }
`,cj=Gt.h2`
  color: rgb(58, 136, 244);
  font-family: 'Pretendard-Bold';
  font-size: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: -0.3px;

  svg {
    font-size: 2rem;
  }
`,dj=Gt.section`
  margin: 5rem 0;
  scroll-margin-top: 2rem;
  
  &:first-child {
    margin-top: 3rem;
  }

  &:last-child {
    margin-bottom: 3rem;
  }
`,uj=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`,pj=Gt(tp.div)`
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.4);
    transform: translateY(-5px);
  }
  
  .feature-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    
    .icon {
      width: 40px;
      height: 40px;
      background: rgba(102, 126, 234, 0.2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    
    h4 {
      font-family: 'Pretendard-SemiBold';
      color: ${ip.primary};
      font-size: 1.1rem;
    }
  }
  
  p {
    color: ${ip.secondary};
    line-height: 1.6;
    font-size: 0.95rem;
  }
`,hj=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,mj=Gt.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${Hw};
  border-radius: 16px;
  padding: 1.5rem;
  flex: 1;
  min-width: 250px;
  
  h4 {
    font-family: 'Pretendard-SemiBold';
    color: ${$w.primary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.2rem;
      color: ${e=>e.categoryColor||Vw};
    }
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`,fj=Gt.div`
  background: ${e=>e.bgColor?`${e.bgColor}15`:_w};
  color: ${$w.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid ${e=>e.bgColor?`${e.bgColor}30`:Hw};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1.1rem;
    color: ${e=>e.bgColor||Vw};
  }

  &:hover {
    background: ${e=>e.bgColor?`${e.bgColor}30`:Hw};
    transform: translateY(-2px);
  }
`,gj=Gt.div`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  
  h3 {
    font-size: 1.8rem;
    font-family: 'Pretendard-Bold';
    margin-bottom: 1rem;
  }
  
  p {
    color: ${ip.secondary};
    margin-bottom: 2rem;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
`,xj=Gt.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 3rem;
  }
`,vj=Gt.div`
  margin: 2rem 0;

  h3 {
    font-family: 'Pretendard-Bold';
    font-size: 2rem;
    color: rgb(58, 136, 244);
    margin-bottom: 2rem;
    text-align: center;
  }
`,bj=Gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`,yj=Gt.div`
  width: 280px;
  height: 570px;
  background: white;
  border-radius: 40px;
  padding: 15px;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border: 8px solid #1a1a1a;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 20px;
    background: #1a1a1a;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
`,wj=Gt.div`
  text-align: center;
  margin-top: 1.5rem;

  h4 {
    font-family: 'Pretendard-Bold';
    font-size: 1.2rem;
    color: rgb(58, 136, 244);
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Pretendard-Medium';
    font-size: 1rem;
    color: white;
    opacity: 0.8;
  }
`,jj=Gt.div`
  margin: 5rem 0;
  
  h3 {
    font-size: 2rem;
    font-family: 'Pretendard-Bold';
    margin-bottom: 2rem;
    text-align: center;
  }

  .scroll-hint {
    text-align: center;
    color: ${ip.secondary};
    font-size: 0.9rem;
    margin-top: 1rem;
    opacity: 0.7;
    display: none;

    @media (max-width: 1200px) {
      display: block;
    }
  }
`,kj=Gt.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
  align-items: stretch;
  flex-wrap: nowrap;
  padding: 0.5rem;

  @media (max-width: 1200px) {
    overflow-x: auto;
    justify-content: flex-start;
    padding: 1rem 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    &::before,
    &::after {
      content: '';
      padding: 0.1px;
    }
  }
`,Sj=Gt(tp.div)`
  flex: 0 0 260px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${Hw};
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .doc-image {
    width: 100%;
    height: 160px;
    overflow: hidden;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  
  &:hover .doc-image img {
    transform: scale(1.05);
  }
  
  .doc-content {
    padding: 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    
    h4 {
      font-family: 'Pretendard-SemiBold';
      color: ${$w.primary};
      margin-bottom: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      
      svg {
        color: ${Vw};
      }
    }
    
    p {
      color: ${$w.secondary};
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 1rem;
      flex: 1;
    }

    .doc-link {
      color: ${Vw};
      &:hover {
        color: ${$w.primary};
      }
    }
  }
`,Aj=Gt.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`,Cj=Gt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-family: 'Pretendard-Medium';
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: rgb(58, 136, 244);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(58, 136, 244, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(58, 136, 244, 0.3);
  }

  svg {
    font-size: 1.2rem;
  }
`,Ej=Gt.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
`,Pj=Gt.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgb(58, 136, 244);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`,zj=Gt.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  background: white;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: ${e=>e.isOpen?"block":"none"};
`,Tj=Gt.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-radius: 8px;

  &:hover {
    background: rgba(58, 136, 244, 0.1);
    color: rgb(58, 136, 244);
  }

  svg {
    font-size: 1.2rem;
  }
`,Mj=(Gt.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Gt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Gt.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Gt.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Gt.div`
  margin: 5rem 0;
  padding: 2.5rem;
  background: rgb(58, 136, 244);
  border-radius: 16px;
  color: white;

  h3 {
    color: white;
    font-family: 'Pretendard-Bold';
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.95);
    font-family: 'Pretendard-Medium';
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`),Rj=Gt.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Lj=Gt.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(58, 136, 244, 0.03);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(58, 136, 244, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(58, 136, 244, 0.05);
    border-color: rgba(58, 136, 244, 0.2);
  }

  .icon {
    font-size: 2.5rem;
    color: rgb(58, 136, 244);
  }

  .content {
    flex: 1;

    h4 {
      color: #2c3e50;
      font-family: 'Pretendard-Bold';
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      font-family: 'Pretendard-Medium';
      font-size: 0.95rem;
      margin: 0;
    }
  }

  .download {
    color: rgb(58, 136, 244);
    font-size: 1.2rem;
  }
`,Ij=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
`,Bj=Gt.span`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(102, 126, 234, 0.3);
`,Nj=Gt.div`
  margin: 5rem 0;
  padding: 2.5rem;
  background: rgb(58, 136, 244);
  border-radius: 16px;

  h3 {
    color: white;
    font-family: 'Pretendard-Bold';
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.95);
    font-family: 'Pretendard-Medium';
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`,Oj=Gt.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
`,Dj=Gt.li`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    color: rgb(58, 136, 244);
    font-family: 'Pretendard-Bold';
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.4rem;
    }
  }

  p {
    color: #2c3e50;
    font-family: 'Pretendard-Medium';
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }
`,Fj=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
`,Vj=Gt.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  h3 {
    color: rgb(58, 136, 244);
    font-family: 'Pretendard-Bold';
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.4rem;
    }
  }
`,_j=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,Hj=Gt.div`
  h4 {
    color: #2c3e50;
    font-family: 'Pretendard-Bold';
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-family: 'Pretendard-Medium';
    font-size: 0.95rem;
    line-height: 1.5;
  }
`,$j=Gt.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  color: rgb(58, 136, 244);
  font-family: 'Pretendard-Bold';
  font-size: 1.1rem;
  text-align: center;
`,Uj=()=>{const e=fa(),[n,r]=(0,t.useState)("overview"),[i,a]=(0,t.useState)(!1),[o,s]=(0,t.useState)(0),l=[Aw,Cw,Ew,Pw,zw,Tw,Mw,Rw,Lw,Iw,Bw],c=["\ud648","\ucc44\ud305","\ucc4c\ub9b0\uc9c0","1:1 \uacbd\uc7c1","\ub7ad\ud0b9","\ud53c\ub4dc","\uacb0\uc81c","\ubcf4\uc548","\uad6c\ub3c5","\ud61c\ud0dd","\uc57d\uad00"],d=["\ud55c\ub208\uc5d0 \ubcf4\ub294 \ub300\uc2dc\ubcf4\ub4dc \uc2a4\ud06c\ub9b0","\uc2e4\uc2dc\uac04 1:1 \ucc44\ud305, \uadf8\ub8f9\ucc44\ud305 \uae30\ub2a5","\uc804\uccb4 \uc720\uc800\uc640 \uac19\uc774 \ub3d9\uae30\ubd80\uc5ec \ucc4c\ub9b0\uc9c0","1:1 \uacbd\uc7c1\uc744 \ud1b5\ud55c \ub3d9\uae30\ubd80\uc5ec \uc2dc\uc2a4\ud15c","\uc804\uccb4 \uc720\uc800 \ub7ad\ud0b9 \uc2dc\uc2a4\ud15c","\ud559\uc2b5\uc778\uc99d, \uc77c\uc0c1 \uae00 \ub4f1 \uc18c\ud1b5\ucc3d\uace0","\ud1a0\uc2a4\ud398\uc774, \uce74\uce74\uc624\ud398\uc774 \ub4f1 \uacb0\uc81c\uac00\ub2a5","\uacc4\uc88c 2\ucc28 \ud540\ubc88\ud638 \ubcf4\uc548 \uc2dc\uc2a4\ud15c","\uad6c\ub3c5\uad8c \uad00\ub9ac \ubc0f \uacb0\uc81c \ub0b4\uc5ed","2\uc8fc\ubb34\ub8cc \uad6c\ub3c5\uad8c\ub4f1 \ub9c8\ucf00\ud305 \ud61c\ud0dd","\uc11c\ube44\uc2a4 \uc774\uc6a9\uc57d\uad00 \ubc0f \ub3d9\uc758"];(0,t.useEffect)(()=>{const e=setInterval(()=>{s(e=>(e+1)%l.length)},3e3);return()=>clearInterval(e)},[l.length]),(0,t.useEffect)(()=>{const e=()=>{var e,t,n,i,a,o;const s=[{id:"overview",offset:(null===(e=document.getElementById("overview"))||void 0===e?void 0:e.offsetTop)||0},{id:"analytics",offset:(null===(t=document.getElementById("analytics"))||void 0===t?void 0:t.offsetTop)||0},{id:"preview",offset:(null===(n=document.getElementById("preview"))||void 0===n?void 0:n.offsetTop)||0},{id:"structure",offset:(null===(i=document.getElementById("structure"))||void 0===i?void 0:i.offsetTop)||0},{id:"tech",offset:(null===(a=document.getElementById("tech"))||void 0===a?void 0:a.offsetTop)||0},{id:"docs",offset:(null===(o=document.getElementById("docs"))||void 0===o?void 0:o.offsetTop)||0}],l=window.scrollY+100;for(let c=s.length-1;c>=0;c--)if(l>=s[c].offset){r(s[c].id);break}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const u=e=>{const t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-80,behavior:"smooth"})};return(0,So.jsxs)(So.Fragment,{children:[(0,So.jsxs)(nj,{children:[(0,So.jsxs)(aj,{onClick:()=>e("/"),children:[(0,So.jsx)(ah,{})," \ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub85c \ub3cc\uc544\uac00\uae30"]}),(0,So.jsxs)(rj,{children:[(0,So.jsx)(ij,{active:"overview"===n,onClick:()=>u("overview"),label:"\uac1c\uc694",children:(0,So.jsx)(Oh,{})}),(0,So.jsx)(ij,{active:"analytics"===n,onClick:()=>u("analytics"),label:"\ub300\ud45c \uc11c\ube44\uc2a4",children:(0,So.jsx)(fh,{})}),(0,So.jsx)(ij,{active:"preview"===n,onClick:()=>u("preview"),label:"\uad6c\ud604 \ud654\uba74",children:(0,So.jsx)($h,{})}),(0,So.jsx)(ij,{active:"structure"===n,onClick:()=>u("structure"),label:"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc870",children:(0,So.jsx)(Vh,{})}),(0,So.jsx)(ij,{active:"tech"===n,onClick:()=>u("tech"),label:"\uae30\uc220 \uc2a4\ud0dd",children:(0,So.jsx)(yh,{})}),(0,So.jsx)(ij,{active:"docs"===n,onClick:()=>u("docs"),label:"\ubb38\uc11c\ud654",children:(0,So.jsx)(uh,{})})]}),(0,So.jsxs)(dj,{id:"overview",children:[(0,So.jsxs)(oj,{children:[(0,So.jsx)("img",{src:Gg,alt:"\ub9ac\ud2c0\ubc45\ud06c \ub85c\uace0"}),(0,So.jsxs)(sj,{children:[(0,So.jsx)("h1",{children:"\ub9ac\ud2c0\ubc45\ud06c"}),(0,So.jsx)("p",{children:"\uc5b4\ub9b0\uc774\ub4e4\uc744 \uc704\ud55c \ub3d9\uae30\ubd80\uc5ec \uc571"}),(0,So.jsxs)("div",{children:[(0,So.jsxs)(lj,{children:[(0,So.jsx)(yh,{})," Frontend Developer"]}),(0,So.jsxs)(lj,{children:[(0,So.jsx)(om,{})," Project Manager"]})]}),(0,So.jsxs)(Ij,{children:[(0,So.jsx)(Bj,{children:"Flutter"}),(0,So.jsx)(Bj,{children:"Spring Boot"}),(0,So.jsx)(Bj,{children:"Firebase"}),(0,So.jsx)(Bj,{children:"AWS"})]})]})]}),(0,So.jsxs)(Nj,{children:[(0,So.jsx)("h3",{children:"\ud504\ub85c\uc81d\ud2b8 \uc5ed\ub7c9"}),(0,So.jsx)("p",{children:"\ub9ac\ud2c0\ubc45\ud06c\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc774\uc790 \ud504\ub85c\uc81d\ud2b8 \ub9e4\ub2c8\uc800\ub97c \ub9e1\uc544 \ud504\ub85c\uc81d\ud2b8\ub97c \uc131\uacf5\uc801\uc73c\ub85c \uc774\ub04c\uc5c8\uc2b5\ub2c8\ub2e4. 3\uc6d4\ubd80\ud130 7\uc6d4\uae4c\uc9c0 PM\uc73c\ub85c\uc11c \uc77c\uc815 \uad00\ub9ac\uc640 \ud68c\uc758\ub97c \uc8fc\ub3c4\ud588\uc73c\uba70, \uc720\uc77c\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c\uc11c Figma\ub97c \ud65c\uc6a9\ud55c \ub514\uc790\uc778 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uacfc Flutter \uae30\ubc18\uc758 \ubaa8\ub4e0 \ud654\uba74 \uad6c\ud604\uc744 \uc644\ubcbd\ud558\uac8c \uc218\ud589\ud588\uc2b5\ub2c8\ub2e4."}),(0,So.jsxs)(Oj,{children:[(0,So.jsxs)(Dj,{children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(om,{})," \ud504\ub85c\uc81d\ud2b8 \ub9e4\ub2c8\uc9d5"]}),(0,So.jsx)("p",{children:"4\uc778 \ud300\uc758 PM\uc73c\ub85c\uc11c 5\uac1c\uc6d4\uac04 \uc77c\uc815 \uad00\ub9ac, \uc8fc\uac04 \ud68c\uc758 \uc9c4\ud589, \ubc31\ub85c\uadf8 \uad00\ub9ac \ub4f1 \uccb4\uacc4\uc801\uc778 \ud504\ub85c\uc81d\ud2b8 \uc6b4\uc601\uc744 \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4."})]}),(0,So.jsxs)(Dj,{children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(Uh,{})," UI/UX \ub514\uc790\uc778"]}),(0,So.jsx)("p",{children:"Figma\ub97c \ud65c\uc6a9\ud55c \ud504\ub85c\ud1a0\ud0c0\uc785 \uc81c\uc791, \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c \uad6c\ucd95, \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc758 \uc778\ud130\ud398\uc774\uc2a4 \uc124\uacc4\ub97c \uc8fc\ub3c4\ud588\uc2b5\ub2c8\ub2e4."})]}),(0,So.jsxs)(Dj,{children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(yh,{})," \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c"]}),(0,So.jsx)("p",{children:"Flutter \uae30\ubc18\uc758 \ubaa8\ub4e0 \ud654\uba74(150+ \ud30c\uc77c) \uad6c\ud604, 30\uac1c\uc758 \uc11c\ube44\uc2a4 \ub85c\uc9c1(4\ub9cc+ \ub77c\uc778) \uac1c\ubc1c\uc744 \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4."})]}),(0,So.jsxs)(Dj,{children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(fh,{})," \uc8fc\uc694 \uc131\uacfc"]}),(0,So.jsx)("p",{children:"\uae08\uc735\uad50\uc721, \ubbf8\uc158\uad00\ub9ac, \uac00\uc871\uc18c\ud1b5, \uc18c\uc15c\ud53c\ub4dc \ub4f1 \ud575\uc2ec \uae30\ub2a5\uc744 \ub2e8\ub3c5 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c \uc644\uc218\ud588\uc2b5\ub2c8\ub2e4."})]})]})]})]}),(0,So.jsx)(dj,{id:"analytics",children:(0,So.jsxs)(Mj,{children:[(0,So.jsx)("h3",{children:"\ub300\ud45c \uc11c\ube44\uc2a4 - \ud559\uc2b5 \ubd84\uc11d \ub9ac\ud3ec\ud2b8 \uc11c\ube44\uc2a4"}),(0,So.jsx)("p",{children:"\ub9ac\ud2c0\ubc45\ud06c\ub294 \uc0ac\uc6a9\uc790\uc758 \ud559\uc2b5 \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud558\uc5ec \ub9de\ucda4\ud615 PDF \ub9ac\ud3ec\ud2b8\ub97c \uc81c\uacf5\ud558\ub294 \uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4. \ud559\uc2b5 \uc131\uacfc\uc640 \ud328\ud134\uc744 \uc2dc\uac01\ud654\ud558\uc5ec \ud6a8\uacfc\uc801\uc778 \ud559\uc2b5 \ubc29\ud5a5\uc744 \uc81c\uc2dc\ud558\uba70, \uc9c0\uc18d\uc801\uc778 \uc5c5\ub370\uc774\ud2b8\ub97c \ud1b5\ud574 \ub354\uc6b1 \uc0c1\uc138\ud55c \ubd84\uc11d \uacb0\uacfc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),(0,So.jsxs)(Rj,{children:[(0,So.jsxs)(Lj,{href:"/portfolio_2025/src/assets/projects/littlebank/\ud559\uc2b5\uc131\uc801\ubcf4\uace0\uc11c_2025\ub14407\uc6d418\uc77c.pdf",download:!0,children:[(0,So.jsx)("div",{className:"icon",children:(0,So.jsx)(zh,{})}),(0,So.jsxs)("div",{className:"content",children:[(0,So.jsx)("h4",{children:"\uac1c\uc778\ubcc4 \ud559\uc2b5 \ubd84\uc11d \ub9ac\ud3ec\ud2b8 2.0"}),(0,So.jsx)("p",{children:"2025\ub144 07\uc6d4 18\uc77c \uae30\uc900 / \uace0\ub3c4\ud654 \ubc84\uc804"})]}),(0,So.jsx)("div",{className:"download",children:(0,So.jsx)(Ch,{})})]}),(0,So.jsxs)(Lj,{href:"/portfolio_2025/src/assets/projects/littlebank/\uae40\ub3d9\uaddc_\ud559\uc2b5\ub9ac\ud3ec\ud2b8_2025-06-04.pdf",download:!0,children:[(0,So.jsx)("div",{className:"icon",children:(0,So.jsx)(zh,{})}),(0,So.jsxs)("div",{className:"content",children:[(0,So.jsx)("h4",{children:"\uac1c\uc778\ubcc4 \ud559\uc2b5 \ubd84\uc11d \ub9ac\ud3ec\ud2b8 1.0"}),(0,So.jsx)("p",{children:"2025\ub144 06\uc6d4 04\uc77c \uae30\uc900 / \ucd08\uae30 \ubc84\uc804"})]}),(0,So.jsx)("div",{className:"download",children:(0,So.jsx)(Ch,{})})]})]})]})}),(0,So.jsx)(dj,{id:"preview",children:(0,So.jsxs)(vj,{children:[(0,So.jsx)("h3",{children:"\uad6c\ud604 \ud654\uba74"}),(0,So.jsxs)(xj,{children:[(0,So.jsxs)(bj,{children:[(0,So.jsx)(yj,{children:(0,So.jsx)("img",{src:l[o],alt:"\uc571 \uc2a4\ud06c\ub9b0\uc0f7",loading:"eager",decoding:"sync"})}),(0,So.jsxs)(wj,{children:[(0,So.jsx)("h4",{children:c[o]}),(0,So.jsx)("p",{children:d[o]})]})]}),(0,So.jsxs)(bj,{children:[(0,So.jsx)(yj,{children:(0,So.jsx)("img",{src:l[(o+1)%l.length],alt:"\uc571 \uc2a4\ud06c\ub9b0\uc0f7",loading:"eager",decoding:"sync"})}),(0,So.jsxs)(wj,{children:[(0,So.jsx)("h4",{children:c[(o+1)%l.length]}),(0,So.jsx)("p",{children:d[(o+1)%l.length]})]})]}),(0,So.jsxs)(bj,{children:[(0,So.jsx)(yj,{children:(0,So.jsx)("img",{src:l[(o+2)%l.length],alt:"\uc571 \uc2a4\ud06c\ub9b0\uc0f7",loading:"eager",decoding:"sync"})}),(0,So.jsxs)(wj,{children:[(0,So.jsx)("h4",{children:c[(o+2)%l.length]}),(0,So.jsx)("p",{children:d[(o+2)%l.length]})]})]})]})]})}),(0,So.jsxs)(dj,{id:"features",children:[(0,So.jsxs)(cj,{children:[(0,So.jsx)(Ih,{})," \uc8fc\uc694 \uae30\ub2a5"]}),(0,So.jsxs)(uj,{children:[(0,So.jsxs)(pj,{children:[(0,So.jsxs)("div",{className:"feature-header",children:[(0,So.jsx)("div",{className:"icon",children:"\ud83c\udfe6"}),(0,So.jsx)("h4",{children:"\uac00\uc0c1 \uc740\ud589 \uc2dc\uc2a4\ud15c"})]}),(0,So.jsx)("p",{children:"\uc2e4\uc81c \uc740\ud589\uacfc \uc720\uc0ac\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc544\uc774\ub4e4\uc774 \uce5c\uc219\ud558\uac8c \ubaa9\ud45c\ub2ec\uc131 \ud65c\ub3d9\uc744 \uccb4\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc800\ucd95, \uc1a1\uae08, \uc794\uc561 \ud655\uc778 \ub4f1\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."})]}),(0,So.jsxs)(pj,{children:[(0,So.jsxs)("div",{className:"feature-header",children:[(0,So.jsx)("div",{className:"icon",children:"\ud83c\udfaf"}),(0,So.jsx)("h4",{children:"\ubbf8\uc158 & \ucc4c\ub9b0\uc9c0"})]}),(0,So.jsx)("p",{children:"\uc77c\uc77c \ubbf8\uc158\uacfc \uc8fc\uac04 \ucc4c\ub9b0\uc9c0\ub97c \ud1b5\ud574 \uc544\uc774\ub4e4\uc774 \uafb8\uc900\ud788 \uc571\uc744 \uc0ac\uc6a9\ud558\uace0 \ub3d9\uae30\ubd80\uc5ec\ub97c \ubc1b\uc544 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."})]}),(0,So.jsxs)(pj,{children:[(0,So.jsxs)("div",{className:"feature-header",children:[(0,So.jsx)("div",{className:"icon",children:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"}),(0,So.jsx)("h4",{children:"\ubd80\ubaa8-\uc790\ub140 \uc5f0\ub3d9"})]}),(0,So.jsx)("p",{children:"\ubd80\ubaa8 \uacc4\uc815\uacfc \uc790\ub140 \uacc4\uc815\uc744 \uc5f0\ub3d9\ud558\uc5ec \ubaa9\ud45c \uad00\ub9ac, \ubbf8\uc158 \uc124\uc815, \ubaa9\ud45c \ub2ec\uc131 \ubaa8\ub2c8\ud130\ub9c1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."})]}),(0,So.jsxs)(pj,{children:[(0,So.jsxs)("div",{className:"feature-header",children:[(0,So.jsx)("div",{className:"icon",children:"\ud83c\udfc6"}),(0,So.jsx)("h4",{children:"\ubcf4\uc0c1 \uc2dc\uc2a4\ud15c"})]}),(0,So.jsx)("p",{children:"\ubbf8\uc158 \uc644\ub8cc\uc640 \uc800\ucd95 \ubaa9\ud45c \ub2ec\uc131 \uc2dc \ud3ec\uc778\ud2b8\uc640 \ubc43\uc9c0\ub97c \ud68d\ub4dd\ud558\uc5ec \uc544\uc774\ub4e4\uc758 \uc131\ucde8\uac10\uc744 \ub192\uc785\ub2c8\ub2e4."})]}),(0,So.jsxs)(pj,{children:[(0,So.jsxs)("div",{className:"feature-header",children:[(0,So.jsx)("div",{className:"icon",children:"\ud83d\udcca"}),(0,So.jsx)("h4",{children:"\uc2dc\uac01\ud654\ub41c \ud1b5\uacc4"})]}),(0,So.jsx)("p",{children:"\uc800\ucd95 \ud604\ud669, \uc18c\ube44 \ud328\ud134, \ubaa9\ud45c \ub2ec\uc131\ub960\uc744 \ucc28\ud2b8\uc640 \uadf8\ub798\ud504\ub85c \uc2dc\uac01\ud654\ud558\uc5ec \uc774\ud574\ud558\uae30 \uc27d\uac8c \uc81c\uacf5\ud569\ub2c8\ub2e4."})]}),(0,So.jsxs)(pj,{children:[(0,So.jsxs)("div",{className:"feature-header",children:[(0,So.jsx)("div",{className:"icon",children:"\ud83d\udcda"}),(0,So.jsx)("h4",{children:"\ub3d9\uae30\ubd80\uc5ec \ucf58\ud150\uce20"})]}),(0,So.jsx)("p",{children:"\uc5f0\ub839\ubcc4 \ub9de\ucda4\ud615 \ub3d9\uae30\ubd80\uc5ec \ucf58\ud150\uce20\uc640 \ud034\uc988\ub97c \ud1b5\ud574 \ub3d9\uae30\ubd80\uc5ec\ub97c \uc2b5\ub4dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})]}),(0,So.jsxs)(dj,{id:"tech",children:[(0,So.jsxs)(cj,{children:[(0,So.jsx)(yh,{})," \uae30\uc220 \uc2a4\ud0dd"]}),(0,So.jsxs)(hj,{children:[(0,So.jsxs)(mj,{categoryColor:Uw,children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(Zf,{})," Frontend"]}),(0,So.jsxs)("div",{className:"tech-tags",children:[(0,So.jsxs)(fj,{bgColor:Uw,children:[(0,So.jsx)(Zf,{})," Flutter"]}),(0,So.jsxs)(fj,{bgColor:Kw,children:[(0,So.jsx)(Xf,{})," Dart"]}),(0,So.jsxs)(fj,{children:[(0,So.jsx)(yh,{})," Provider"]}),(0,So.jsxs)(fj,{children:[(0,So.jsx)(yh,{})," GetX"]})]})]}),(0,So.jsxs)(mj,{categoryColor:Ww,children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(jg,{})," Backend"]}),(0,So.jsxs)("div",{className:"tech-tags",children:[(0,So.jsxs)(fj,{bgColor:Ww,children:[(0,So.jsx)(jg,{})," Spring Boot"]}),(0,So.jsxs)(fj,{bgColor:Gw,children:[(0,So.jsx)(mg,{})," Java"]}),(0,So.jsxs)(fj,{bgColor:tj,children:[(0,So.jsx)(Sg,{})," Swagger"]}),(0,So.jsxs)(fj,{children:[(0,So.jsx)(yh,{})," JWT"]})]})]}),(0,So.jsxs)(mj,{categoryColor:Yw,children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(Sh,{})," Database & Cloud"]}),(0,So.jsxs)("div",{className:"tech-tags",children:[(0,So.jsxs)(fj,{bgColor:Yw,children:[(0,So.jsx)(cg,{})," MySQL"]}),(0,So.jsxs)(fj,{bgColor:Xw,children:[(0,So.jsx)(qf,{})," Firebase"]}),(0,So.jsxs)(fj,{bgColor:qw,children:[(0,So.jsx)(Wp,{})," AWS"]}),(0,So.jsxs)(fj,{bgColor:Qw,children:[(0,So.jsx)(wg,{})," Redis"]})]})]}),(0,So.jsxs)(mj,{categoryColor:Jw,children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(jh,{})," DevOps & Tools"]}),(0,So.jsxs)("div",{className:"tech-tags",children:[(0,So.jsxs)(fj,{bgColor:Jw,children:[(0,So.jsx)(Xp,{})," Docker"]}),(0,So.jsxs)(fj,{bgColor:Zw,children:[(0,So.jsx)(qp,{})," Git"]}),(0,So.jsxs)(fj,{bgColor:ej,children:[(0,So.jsx)(tg,{})," GitHub Actions"]})]})]})]})]}),(0,So.jsxs)(dj,{id:"structure",children:[(0,So.jsxs)(cj,{children:[(0,So.jsx)(Vh,{})," \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870"]}),(0,So.jsxs)(Fj,{children:[(0,So.jsxs)(Vj,{children:[(0,So.jsxs)("h3",{children:[(0,So.jsx)(Ah,{})," \ud654\uba74\ub2e8 \uad6c\uc131"]}),(0,So.jsxs)(_j,{children:[(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udcf1 \uacf5\ud1b5 \ud654\uba74"}),(0,So.jsx)("p",{children:"\ub85c\uadf8\uc778, \ud68c\uc6d0\uac00\uc785, \uc778\uc99d, \uc57d\uad00\ub3d9\uc758 \ub4f1 \uae30\ubcf8 \ud654\uba74 \uad6c\ud604"})]}),(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udc76 \uc544\uc774 \uc804\uc6a9 \ud654\uba74"}),(0,So.jsx)("p",{children:"\ud648, \ubbf8\uc158, \ud53c\ub4dc, \ucc44\ud305, \ubaa9\ud45c\uc124\uc815, \ucc4c\ub9b0\uc9c0, \ub9c8\uc774\ud398\uc774\uc9c0 \ub4f1"})]}),(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 \ubd80\ubaa8 \uc804\uc6a9 \ud654\uba74"}),(0,So.jsx)("p",{children:"\ubbf8\uc158\uad00\ub9ac, \ubd84\uc11d, \ucc44\ud305, \uace0\uac1d\uc13c\ud130, \uc790\ub140\uad00\ub9ac \ub4f1"})]}),(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udd04 \uacf5\ud1b5 \ucef4\ud3ec\ub10c\ud2b8"}),(0,So.jsx)("p",{children:"\ubbf8\uc158\uce74\ub4dc, \ubaa9\ud45c\uc704\uc82f, \ud504\ub85c\ud544, \uc54c\ub9bc \ub4f1 \uc7ac\uc0ac\uc6a9 UI"})]})]}),(0,So.jsx)($j,{children:"\ucd1d 150+ \ud654\uba74 \ud30c\uc77c \uad6c\ud604 (UI/UX \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c \uae30\ubc18)"})]}),(0,So.jsxs)(Vj,{children:[(0,So.jsxs)("h3",{children:[(0,So.jsx)(jh,{})," \uc11c\ube44\uc2a4 \ub85c\uc9c1"]}),(0,So.jsxs)(_j,{children:[(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udd10 \uc778\uc99d/\uacc4\uc815"}),(0,So.jsx)("p",{children:"\uc18c\uc15c \ub85c\uadf8\uc778, JWT \ud1a0\ud070, \uc774\uba54\uc77c \uc778\uc99d (5\uac1c \uc11c\ube44\uc2a4)"})]}),(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udcb3 \uacb0\uc81c/\uad6c\ub3c5"}),(0,So.jsx)("p",{children:"\ud1a0\uc2a4\ud398\uc774 \uc5f0\ub3d9, \ud3ec\uc778\ud2b8, \uc815\uae30\uacb0\uc81c (4\uac1c \uc11c\ube44\uc2a4)"})]}),(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udcda \uad50\uc721/\ubbf8\uc158"}),(0,So.jsx)("p",{children:"\ubbf8\uc158, \ubaa9\ud45c, \ucc4c\ub9b0\uc9c0, \uac8c\uc784\ud654 \uc694\uc18c (5\uac1c \uc11c\ube44\uc2a4)"})]}),(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udc65 \uc18c\ud1b5/\uad00\uacc4"}),(0,So.jsx)("p",{children:"\uc2e4\uc2dc\uac04 \ucc44\ud305, \ud53c\ub4dc, \uac00\uc871\uad00\ub9ac (7\uac1c \uc11c\ube44\uc2a4)"})]}),(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udcca \ubd84\uc11d/\ub9ac\ud3ec\ud2b8"}),(0,So.jsx)("p",{children:"\ud559\uc2b5 \ub370\uc774\ud130 \ubd84\uc11d, PDF \ub9ac\ud3ec\ud2b8 \uc0dd\uc131 (2\uac1c \uc11c\ube44\uc2a4)"})]}),(0,So.jsxs)(Hj,{children:[(0,So.jsx)("h4",{children:"\ud83d\udd14 \uc54c\ub9bc/\uc2dc\uc2a4\ud15c"}),(0,So.jsx)("p",{children:"\ud478\uc2dc\uc54c\ub9bc, \ub124\ube44\uac8c\uc774\uc158, API \ud1b5\uc2e0 (7\uac1c \uc11c\ube44\uc2a4)"})]})]}),(0,So.jsx)($j,{children:"\ucd1d 30\uac1c \uc11c\ube44\uc2a4 \ubaa8\ub4c8, 40,000+ \ub77c\uc778\uc758 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \uad6c\ud604"})]})]})]}),(0,So.jsx)(dj,{id:"docs",children:(0,So.jsxs)(jj,{children:[(0,So.jsx)("h3",{children:"\ud504\ub85c\uc81d\ud2b8 \ubb38\uc11c\ud654"}),(0,So.jsxs)(kj,{children:[(0,So.jsxs)(Sj,{children:[(0,So.jsx)("div",{className:"doc-image",children:(0,So.jsx)("img",{src:Fw,alt:"API \ubb38\uc11c"})}),(0,So.jsxs)("div",{className:"doc-content",children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(uh,{})," API \ubb38\uc11c"]}),(0,So.jsx)("p",{children:"Swagger UI\ub97c \ud65c\uc6a9\ud55c RESTful API \ubb38\uc11c\ud654. \ubaa8\ub4e0 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc5d0 \ub300\ud55c \uc0c1\uc138\ud55c \uc124\uba85\uacfc \ud14c\uc2a4\ud2b8 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),(0,So.jsxs)("a",{href:"http://3.34.52.239:8080/swagger-ui/index.html",target:"_blank",rel:"noopener noreferrer",className:"doc-link",children:[(0,So.jsx)(Ph,{})," API \ubb38\uc11c \ubcf4\uae30"]})]})]}),(0,So.jsxs)(Sj,{children:[(0,So.jsx)("div",{className:"doc-image",children:(0,So.jsx)("img",{src:Nw,alt:"Figma \ub514\uc790\uc778"})}),(0,So.jsxs)("div",{className:"doc-content",children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(Yp,{})," Figma \ub514\uc790\uc778"]}),(0,So.jsx)("p",{children:"\uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ucd5c\uc6b0\uc120\uc73c\ub85c \uace0\ub824\ud55c UI/UX \ub514\uc790\uc778. \ubaa8\ub4e0 \ud654\uba74\uc774 \uc77c\uad00\ub41c \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc744 \ub530\ub974\ub3c4\ub85d \uc124\uacc4\ud588\uc2b5\ub2c8\ub2e4."}),(0,So.jsxs)("a",{href:"#",className:"doc-link",onClick:e=>e.preventDefault(),children:[(0,So.jsx)(Ph,{})," \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c"]})]})]}),(0,So.jsxs)(Sj,{children:[(0,So.jsx)("div",{className:"doc-image",children:(0,So.jsx)("img",{src:Ow,alt:"Notion \ubb38\uc11c"})}),(0,So.jsxs)("div",{className:"doc-content",children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(zh,{})," Notion \ubb38\uc11c\ud654"]}),(0,So.jsx)("p",{children:"\ud504\ub85c\uc81d\ud2b8\uc758 \ubaa8\ub4e0 \uacfc\uc815\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \ubb38\uc11c\ud654. \uae30\ud68d\ubd80\ud130 \uac1c\ubc1c, \ud14c\uc2a4\ud2b8\uae4c\uc9c0 \uc804 \uacfc\uc815\uc744 \uae30\ub85d\ud588\uc2b5\ub2c8\ub2e4."}),(0,So.jsxs)("a",{href:"#",className:"doc-link",onClick:e=>e.preventDefault(),children:[(0,So.jsx)(Ph,{})," \ud504\ub85c\uc81d\ud2b8 \ubb38\uc11c"]})]})]}),(0,So.jsxs)(Sj,{children:[(0,So.jsx)("div",{className:"doc-image",children:(0,So.jsx)("img",{src:Dw,alt:"Play Console"})}),(0,So.jsxs)("div",{className:"doc-content",children:[(0,So.jsxs)("h4",{children:[(0,So.jsx)(Xh,{})," Play Console"]}),(0,So.jsx)("p",{children:"Google Play Store \ube44\uacf5\uac1c \ud14c\uc2a4\ud2b8 \uc9c4\ud589 \uc911. \uc0ac\uc6a9\uc790 \ud53c\ub4dc\ubc31\uc744 \ubc18\uc601\ud558\uc5ec \uc9c0\uc18d\uc801\uc73c\ub85c \uac1c\uc120\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),(0,So.jsxs)("a",{href:"https://play.google.com/store/apps/details?id=com.littlebank.littlebank",target:"_blank",rel:"noopener noreferrer",className:"doc-link",children:[(0,So.jsx)(Ph,{})," \ud14c\uc2a4\ud2b8 \ucc38\uc5ec"]})]})]})]}),(0,So.jsx)("p",{className:"scroll-hint",children:"\u2190 \uc88c\uc6b0\ub85c \uc2a4\ud06c\ub864\ud558\uc5ec \ub354 \ubcf4\uae30 \u2192"})]})}),(0,So.jsxs)(gj,{children:[(0,So.jsx)("h2",{children:"\ub300\ud45c \ud504\ub85c\uc81d\ud2b8 \ub9ac\ud2c0\ubc45\ud06c"}),(0,So.jsx)("p",{children:"\uc5b4\ub9b0\uc774\ub4e4\uc758 \ub3d9\uae30\ubd80\uc5ec\ub97c \uc704\ud55c \ubaa8\ubc14\uc77c \uc571 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. Flutter\uc640 Spring Boot\ub97c \ud65c\uc6a9\ud55c \ud480\uc2a4\ud0dd \uac1c\ubc1c \uacbd\ud5d8\uacfc \ud504\ub85c\uc81d\ud2b8 \ub9e4\ub2c8\uc9d5 \uc5ed\ub7c9\uc744 \ubcf4\uc5ec\uc8fc\ub294 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc785\ub2c8\ub2e4."}),(0,So.jsxs)(Aj,{children:[(0,So.jsxs)(Cj,{href:"https://play.google.com/store/apps/details?id=com.littlebank.littlebank",target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(Xh,{}),"\uc571 \ub2e4\uc6b4\ub85c\ub4dc"]}),(0,So.jsxs)(Cj,{href:"https://github.com/dongkyukim1/littlebank",target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(qp,{}),"\uac1c\ubc1c \uc18c\uc2a4 \ucf54\ub4dc"]})]})]})]}),(0,So.jsxs)(Ej,{children:[(0,So.jsx)(Pj,{onClick:()=>a(!i),children:(0,So.jsx)(kh,{})}),(0,So.jsxs)(zj,{isOpen:i,children:[(0,So.jsxs)(Tj,{href:"tel:01040488292",children:[(0,So.jsx)(Gh,{}),"010-4048-8292"]}),(0,So.jsxs)(Tj,{href:"sms:01040488292",children:[(0,So.jsx)(kh,{}),"\ubb38\uc790\ubcf4\ub0b4\uae30"]}),(0,So.jsxs)(Tj,{href:"mailto:wlsntus55@nate.com",children:[(0,So.jsx)(Eh,{}),"wlsntus55@nate.com"]}),(0,So.jsxs)(Tj,{href:"https://open.kakao.com/o/sMlC7lJh",target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(Sw,{style:{color:"#FFE812"}}),"\uce74\uce74\uc624\ud1a1 1:1 \ucc44\ud305"]})]})]})]})},Kj=n.p+"static/media/main.db90c0f021ea5708b526.png",Wj=n.p+"static/media/ai\uc5ec\ud589\uacc4\ud68d\uc0dd\uc131.689182f88fafec0ac44a.png",Gj=n.p+"static/media/\uacb0\uc81c.d1d8e68248f7715c1899.png",Xj=n.p+"static/media/\uc5ec\ud589\uc815\ubcf41.7ae106efbe143fa0ca90.png",Yj=n.p+"static/media/\uc5ec\ud589\uc815\ubcf42.d5beb2738a707bcfc362.png",Qj=n.p+"static/media/\uc778\uae30\uc5ec\ud589\ucf54\uc2a4.b61f388ae604ac9b341e.png",qj=n.p+"static/media/\uc9c0\uc5ed\uc5ec\ud589\ucf54\uc2a4.4294580f616ca0798f0b.png",Jj=n.p+"static/media/Travel Planner - Chrome 2025-07-30 10-21-39.e5e486475e9a0c9d5825.mp4",Zj="#FF8787",ek="rgba(255, 135, 135, 0.1)",tk={primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.85)",tertiary:"rgba(255, 255, 255, 0.7)"},nk=Gt(tp.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Pretendard-Regular';
  color: #E0E0E0;
  background: #0A0A0A;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,rk=Gt.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid #333;
  color: #E0E0E0;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Pretendard-Medium';
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #333;
    transform: translateX(-5px);
  }
`,ik=Gt.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,ak=Gt.h1`
  font-size: 2.5rem;
  font-family: 'Pretendard-Bold';
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #FF6B6B, #FF8787);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,ok=Gt.h2`
  font-size: 1.5rem;
  color: #888;
  font-family: 'Pretendard-Medium';
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,sk=Gt.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,lk=Gt.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #E0E0E0;
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,ck=Gt.div`
  width: 100%;
  margin-bottom: 3rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`,dk=Gt.video`
  width: 100%;
  border-radius: 20px;
`,uk=Gt.div`
  margin-bottom: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,pk=Gt.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: 'Pretendard-Bold';
  color: #FF8787;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, #FF8787, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,hk=Gt.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #BDBDBD;
  white-space: pre-line;
`,mk=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
`,fk=Gt.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,gk=Gt.h4`
  font-family: 'Pretendard-Bold';
  color: #FF8787;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,xk=Gt.p`
  color: #BDBDBD;
  font-size: 1rem;
  line-height: 1.5;
`,vk=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,bk=Gt.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,yk=Gt.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`,wk=Gt.h4`
  font-family: 'Pretendard-Bold';
  color: #FF8787;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,jk=Gt.div`
  color: #BDBDBD;
  font-size: 0.95rem;
  line-height: 1.6;
  white-space: pre-line;
`,kk=Gt.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 2rem -2rem;
  padding: 0 2rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem 0;
    padding: 0;
  }
`,Sk=Gt.div`
  flex: 0 0 auto;
  width: 320px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,Ak=Gt.h4`
  font-family: 'Pretendard-Bold';
  color: ${tk.primary};
  margin-bottom: 2rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.2rem;
  }
`,Ck=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,Ek=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  .tech-header {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: 2.2rem;
    }

    span {
      font-family: 'Pretendard-SemiBold';
      font-size: 1.1rem;
      color: ${tk.primary};
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-3px);
  }
`,Pk=Gt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${tk.secondary};
  font-size: 0.9rem;
  line-height: 1.6;

  li {
    position: relative;
    padding-left: 1rem;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.7rem;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${Zj};
    }
  }
`,zk=Gt.p`
  text-align: center;
  color: ${tk.secondary};
  font-size: 0.9rem;
  margin-top: 1rem;
  opacity: 0.7;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`,Tk=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Mk=Gt.div`
  text-align: center;
`,Rk=Gt.img`
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`,Lk=Gt.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #888;
  font-family: 'Pretendard-Medium';
`,Ik=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Bk=Gt.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Nk=Gt.h4`
  font-family: 'Pretendard-Bold';
  color: #FF8787;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ok=Gt.p`
  color: #BDBDBD;
  font-size: 1rem;
  line-height: 1.8;
  white-space: pre-line;
`,Dk=Gt.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 135, 135, 0.1);

  @media (max-width: 1400px) {
    right: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Fk=Gt.button`
  background: ${e=>e.active?Zj:"transparent"};
  color: ${e=>e.active?"white":tk.secondary};
  border: 1px solid ${e=>e.active?Zj:"rgba(255, 255, 255, 0.1)"};
  padding: 0.7rem;
  border-radius: 12px;
  font-family: 'Pretendard-Medium';
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background: ${e=>e.active?Zj:ek};
    border-color: ${Zj};
    color: ${e=>e.active?"white":Zj};
  }

  &:hover::before {
    content: "${e=>e.label}";
    position: absolute;
    right: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    white-space: nowrap;
    pointer-events: none;
  }

  svg {
    font-size: 1.2rem;
  }
`,Vk=Gt.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
`,_k=Gt.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${Zj};
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`,Hk=Gt.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: ${e=>e.isOpen?"block":"none"};
  border: 1px solid rgba(255, 255, 255, 0.1);
`,$k=Gt.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: ${tk.primary};
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-radius: 8px;

  &:hover {
    background: ${ek};
    color: ${Zj};
  }

  svg {
    font-size: 1.2rem;
  }
`,Uk=Gt.div`
  background: linear-gradient(135deg, rgba(255, 135, 135, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%);
  border: 1px solid rgba(255, 135, 135, 0.3);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  
  h2 {
    font-size: 1.8rem;
    font-family: 'Pretendard-Bold';
    margin-bottom: 1rem;
    color: ${tk.primary};
  }
  
  p {
    color: ${tk.secondary};
    margin-bottom: 2rem;
  }
`,Kk=Gt.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`,Wk=Gt.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-family: 'Pretendard-Medium';
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${Zj};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(255, 135, 135, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(255, 135, 135, 0.3);
  }

  svg {
    font-size: 1.2rem;
  }
`,Gk=()=>{const e=fa(),[n,r]=(0,t.useState)("overview"),[i,a]=(0,t.useState)(!1);(0,t.useEffect)(()=>{const e=()=>{var e,t,n,i,a;const o=[{id:"overview",offset:(null===(e=document.getElementById("overview"))||void 0===e?void 0:e.offsetTop)||0},{id:"features",offset:(null===(t=document.getElementById("features"))||void 0===t?void 0:t.offsetTop)||0},{id:"preview",offset:(null===(n=document.getElementById("preview"))||void 0===n?void 0:n.offsetTop)||0},{id:"tech",offset:(null===(i=document.getElementById("tech"))||void 0===i?void 0:i.offsetTop)||0},{id:"challenges",offset:(null===(a=document.getElementById("challenges"))||void 0===a?void 0:a.offsetTop)||0}],s=window.scrollY+100;for(let l=o.length-1;l>=0;l--)if(s>=o[l].offset){r(o[l].id);break}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const o=e=>{const t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-80,behavior:"smooth"})};return(0,So.jsxs)(So.Fragment,{children:[(0,So.jsxs)(nk,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,So.jsxs)(rk,{onClick:()=>e("/#projects"),children:[(0,So.jsx)(ah,{})," \ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub85c \ub3cc\uc544\uac00\uae30"]}),(0,So.jsxs)(Dk,{children:[(0,So.jsx)(Fk,{active:"overview"===n,onClick:()=>o("overview"),label:"\uac1c\uc694",children:(0,So.jsx)(Oh,{})}),(0,So.jsx)(Fk,{active:"features"===n,onClick:()=>o("features"),label:"\uc8fc\uc694 \uae30\ub2a5",children:(0,So.jsx)(qh,{})}),(0,So.jsx)(Fk,{active:"preview"===n,onClick:()=>o("preview"),label:"\uad6c\ud604 \ud654\uba74",children:(0,So.jsx)(Hh,{})}),(0,So.jsx)(Fk,{active:"tech"===n,onClick:()=>o("tech"),label:"\uae30\uc220 \uc2a4\ud0dd",children:(0,So.jsx)(yh,{})}),(0,So.jsx)(Fk,{active:"challenges"===n,onClick:()=>o("challenges"),label:"\ubb38\uc81c \ud574\uacb0",children:(0,So.jsx)(fh,{})})]}),(0,So.jsxs)(uk,{id:"overview",children:[(0,So.jsxs)(ik,{children:[(0,So.jsx)(ak,{children:"Tripplai - AI \uc5ec\ud589 \uc77c\uc815 \uc0dd\uc131 \uc11c\ube44\uc2a4"}),(0,So.jsx)(ok,{children:"AI \uae30\ubc18 \ub9de\ucda4\ud615 \uc5ec\ud589 \uc77c\uc815 \ud50c\ub798\ub108"}),(0,So.jsxs)(sk,{children:[(0,So.jsxs)(lk,{href:"https://tripplai.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(Ph,{})," \uc11c\ube44\uc2a4 \ubc14\ub85c\uac00\uae30"]}),(0,So.jsxs)(lk,{href:"https://github.com/dongkyukim1?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(qp,{})," GitHub"]})]})]}),(0,So.jsx)(ck,{children:(0,So.jsx)(dk,{controls:!0,children:(0,So.jsx)("source",{src:Jj,type:"video/mp4"})})}),(0,So.jsx)(hk,{children:"Tripplai\ub294 AI\ub97c \ud65c\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uc758 \uc120\ud638\ub3c4\uc640 \uc870\uac74\uc5d0 \ub9de\ub294 \ub9de\ucda4\ud615 \uc5ec\ud589 \uc77c\uc815\uc744 \uc0dd\uc131\ud574\uc8fc\ub294 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc5ec\ud589\uc9c0, \uae30\uac04, \uc608\uc0b0, \uc120\ud638\ud558\ub294 \ud65c\ub3d9 \ub4f1\uc744 \uc785\ub825\ud558\uba74 AI\uac00 \ucd5c\uc801\ud654\ub41c \uc5ec\ud589 \uc77c\uc815\uc744 \uc81c\uc548\ud569\ub2c8\ub2e4. \uad00\uad11\uacf5\uc0ac API\uc640 OpenAI\ub97c \ud65c\uc6a9\ud558\uc5ec \uc815\ud655\ud558\uace0 \uc2e4\uc6a9\uc801\uc778 \uc5ec\ud589 \uacc4\ud68d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),(0,So.jsxs)(mk,{children:[(0,So.jsxs)(fk,{children:[(0,So.jsx)(gk,{children:"\uac1c\ubc1c \uae30\uac04"}),(0,So.jsx)(xk,{children:"2024.03 ~ \ud604\uc7ac (\uc9c4\ud589\uc911)"})]}),(0,So.jsxs)(fk,{children:[(0,So.jsx)(gk,{children:"\ub2f4\ub2f9 \uc5ed\ud560"}),(0,So.jsx)(xk,{children:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c & \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac"})]}),(0,So.jsxs)(fk,{children:[(0,So.jsx)(gk,{children:"\uac1c\ubc1c \uc778\uc6d0"}),(0,So.jsx)(xk,{children:"\ud504\ub860\ud2b8\uc5d4\ub4dc 1\uba85, \ubc31\uc5d4\ub4dc 1\uba85"})]}),(0,So.jsxs)(fk,{children:[(0,So.jsx)(gk,{children:"\ud604\uc7ac \uc0c1\ud0dc"}),(0,So.jsx)(xk,{children:"\uad00\uad11 API \uacf5\ubaa8\uc804 \uc9c4\ucd9c"})]})]})]}),(0,So.jsxs)(uk,{id:"features",children:[(0,So.jsx)(pk,{children:"\uc8fc\uc694 \uae30\ub2a5"}),(0,So.jsxs)(vk,{children:[(0,So.jsxs)(bk,{children:[(0,So.jsx)(yk,{children:"\ud83c\udfaf"}),(0,So.jsx)(wk,{children:"AI \uae30\ubc18 \uc5ec\ud589 \uc77c\uc815 \uc0dd\uc131"}),(0,So.jsx)(jk,{children:"- OpenAI API\ub97c \ud65c\uc6a9\ud55c \ub9de\ucda4\ud615 \uc77c\uc815 \uc0dd\uc131 - \uc0ac\uc6a9\uc790 \uc120\ud638\ub3c4 \uae30\ubc18 \uc7a5\uc18c \ucd94\ucc9c - \uc2e4\uc2dc\uac04 \uc77c\uc815 \ucd5c\uc801\ud654 \ubc0f \uc870\uc815"})]}),(0,So.jsxs)(bk,{children:[(0,So.jsx)(yk,{children:"\ud83d\uddfa"}),(0,So.jsx)(wk,{children:"\uce74\uce74\uc624\ub9f5 \ub0b4\ube44\uac8c\uc774\uc158 \uc5f0\ub3d9"}),(0,So.jsx)(jk,{children:"- \uce74\uce74\uc624\ub9f5 API\ub97c \ud65c\uc6a9\ud55c \uacbd\ub85c \uc548\ub0b4 - \uc2e4\uc2dc\uac04 \uad50\ud1b5\uc815\ubcf4 \uae30\ubc18 \uc18c\uc694\uc2dc\uac04 \uacc4\uc0b0 - \ub300\uc911\uad50\ud1b5/\uc790\uac00\uc6a9 \ucd5c\uc801 \uacbd\ub85c \ucd94\ucc9c"})]}),(0,So.jsxs)(bk,{children:[(0,So.jsx)(yk,{children:"\ud83d\udcb0"}),(0,So.jsx)(wk,{children:"\uc608\uc0b0 \uad00\ub9ac \uc2dc\uc2a4\ud15c"}),(0,So.jsx)(jk,{children:"- \uc608\uc0b0 \ubc94\uc704 \ub0b4 \uc77c\uc815 \ucd5c\uc801\ud654 - \uc2e4\uc2dc\uac04 \uc608\uc0b0 \ucd94\uc801 \ubc0f \uc870\uc815 - \uacbd\ube44 \uc608\uce21 \ubc0f \ubd84\uc11d"})]}),(0,So.jsxs)(bk,{children:[(0,So.jsx)(yk,{children:"\ud83d\udd04"}),(0,So.jsx)(wk,{children:"\uc2e4\uc2dc\uac04 \uc77c\uc815 \uc870\uc815"}),(0,So.jsx)(jk,{children:"- \ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d \uc77c\uc815 \uc218\uc815 - \uc2e4\uc2dc\uac04 \uc77c\uc815 \ub3d9\uae30\ud654 - \ub0a0\uc528 \uc815\ubcf4 \uc5f0\ub3d9 \ubc0f \ub300\uccb4 \uc77c\uc815 \ucd94\ucc9c"})]}),(0,So.jsxs)(bk,{children:[(0,So.jsx)(yk,{children:"\u2705"}),(0,So.jsx)(wk,{children:"\uc2e0\ub8b0\ub3c4 \ub192\uc740 \ub9ac\ubdf0 \uc2dc\uc2a4\ud15c"}),(0,So.jsx)(jk,{children:"- Google Vision AI \uae30\ubc18 \uc601\uc218\uc99d/\ud2f0\ucf13 \uc778\uc99d - \uc2e4\uc81c \ubc29\ubb38 \uc99d\ube59 \uae30\ubc18 \ub9ac\ubdf0 \uc791\uc131 - AI \ud544\ud130\ub9c1\uc73c\ub85c \ud5c8\uc704 \ub9ac\ubdf0 \ubc29\uc9c0"})]})]})]}),(0,So.jsxs)(uk,{id:"preview",children:[(0,So.jsx)(pk,{children:"\uad6c\ud604 \ud654\uba74"}),(0,So.jsxs)(Tk,{children:[(0,So.jsxs)(Mk,{children:[(0,So.jsx)(Rk,{src:Kj,alt:"\uba54\uc778 \ud654\uba74"}),(0,So.jsx)(Lk,{children:"\uba54\uc778 \ud398\uc774\uc9c0"})]}),(0,So.jsxs)(Mk,{children:[(0,So.jsx)(Rk,{src:Wj,alt:"AI \uc5ec\ud589 \uacc4\ud68d \uc0dd\uc131"}),(0,So.jsx)(Lk,{children:"AI \uc5ec\ud589 \uc77c\uc815 \uc0dd\uc131"})]}),(0,So.jsxs)(Mk,{children:[(0,So.jsx)(Rk,{src:Xj,alt:"\uc5ec\ud589 \uc815\ubcf4 1"}),(0,So.jsx)(Lk,{children:"\uc5ec\ud589\uc9c0 \uc0c1\uc138 \uc815\ubcf4"})]}),(0,So.jsxs)(Mk,{children:[(0,So.jsx)(Rk,{src:Yj,alt:"\uc5ec\ud589 \uc815\ubcf4 2"}),(0,So.jsx)(Lk,{children:"\uc5ec\ud589\uc9c0 \ucd94\uac00 \uc815\ubcf4"})]}),(0,So.jsxs)(Mk,{children:[(0,So.jsx)(Rk,{src:Qj,alt:"\uc778\uae30 \uc5ec\ud589 \ucf54\uc2a4"}),(0,So.jsx)(Lk,{children:"\uc778\uae30 \uc5ec\ud589 \ucf54\uc2a4"})]}),(0,So.jsxs)(Mk,{children:[(0,So.jsx)(Rk,{src:qj,alt:"\uc9c0\uc5ed\ubcc4 \uc5ec\ud589 \ucf54\uc2a4"}),(0,So.jsx)(Lk,{children:"\uc9c0\uc5ed\ubcc4 \ucd94\ucc9c \ucf54\uc2a4"})]}),(0,So.jsxs)(Mk,{children:[(0,So.jsx)(Rk,{src:Gj,alt:"\uacb0\uc81c \ud654\uba74"}),(0,So.jsx)(Lk,{children:"\uacb0\uc81c \ud504\ub85c\uc138\uc2a4"})]})]})]}),(0,So.jsxs)(uk,{id:"tech",children:[(0,So.jsxs)(pk,{children:[(0,So.jsx)(yh,{})," \uae30\uc220 \uc2a4\ud0dd"]}),(0,So.jsxs)(kk,{children:[(0,So.jsxs)(Sk,{children:[(0,So.jsxs)(Ak,{children:[(0,So.jsx)(dg,{style:{color:"#fff"}})," \ud504\ub860\ud2b8\uc5d4\ub4dc"]}),(0,So.jsxs)(Ck,{children:[(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(dg,{style:{color:"#fff"}}),(0,So.jsx)("span",{children:"Next.js 14"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"App Router \ubc0f Server Components \ud65c\uc6a9"}),(0,So.jsx)("li",{children:"API Routes\ub97c \ud1b5\ud55c \uc11c\ubc84\ub9ac\uc2a4 \ud568\uc218 \uad6c\ud604"}),(0,So.jsx)("li",{children:"Static/Dynamic \ub80c\ub354\ub9c1 \ucd5c\uc801\ud654"})]})]}),(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(Ag,{style:{color:"#007ACC"}}),(0,So.jsx)("span",{children:"TypeScript"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"\ud0c0\uc785 \uc548\uc815\uc131 \ud655\ubcf4"}),(0,So.jsx)("li",{children:"\uc778\ud130\ud398\uc774\uc2a4 \uae30\ubc18 \uac1c\ubc1c"}),(0,So.jsx)("li",{children:"\uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud0c0\uc785 \uc124\uacc4"})]})]}),(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(yg,{style:{color:"#61DAFB"}}),(0,So.jsx)("span",{children:"React"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"Custom Hooks \ud328\ud134 \uc801\uc6a9"}),(0,So.jsx)("li",{children:"Context API\ub97c \ud1b5\ud55c \uc0c1\ud0dc \uad00\ub9ac"}),(0,So.jsx)("li",{children:"\ucef4\ud3ec\ub10c\ud2b8 \ucd5c\uc801\ud654"})]})]})]})]}),(0,So.jsxs)(Sk,{children:[(0,So.jsxs)(Ak,{children:[(0,So.jsx)(hg,{style:{color:"#00A67E"}})," AI/\uc678\ubd80 API"]}),(0,So.jsxs)(Ck,{children:[(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(hg,{style:{color:"#00A67E"}}),(0,So.jsx)("span",{children:"OpenAI API"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"GPT-4 \ud504\ub86c\ud504\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1"}),(0,So.jsx)("li",{children:"\ucee8\ud14d\uc2a4\ud2b8 \uae30\ubc18 \uc751\ub2f5 \ucd5c\uc801\ud654"}),(0,So.jsx)("li",{children:"\ud1a0\ud070 \uc0ac\uc6a9\ub7c9 \ucd5c\uc801\ud654"})]})]}),(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(ng,{style:{color:"#4285F4"}}),(0,So.jsx)("span",{children:"Google Maps API"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"\uc2e4\uc2dc\uac04 \uacbd\ub85c \ucd5c\uc801\ud654"}),(0,So.jsx)("li",{children:"\uc7a5\uc18c \uac80\uc0c9 \ubc0f \uc0c1\uc138 \uc815\ubcf4"}),(0,So.jsx)("li",{children:"\ucee4\uc2a4\ud140 \ub9c8\ucee4 \ubc0f \uc624\ubc84\ub808\uc774"})]})]}),(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(Qf,{style:{color:"#009688"}}),(0,So.jsx)("span",{children:"FastAPI"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"\uace0\uc131\ub2a5 REST API \uad6c\ud604"}),(0,So.jsx)("li",{children:"WebSocket \uc2e4\uc2dc\uac04 \ud1b5\uc2e0"}),(0,So.jsx)("li",{children:"OpenAPI \ubb38\uc11c \uc790\ub3d9\ud654"})]})]})]})]}),(0,So.jsxs)(Sk,{children:[(0,So.jsxs)(Ak,{children:[(0,So.jsx)(Cg,{style:{color:"#fff"}})," \uc778\ud504\ub77c/\ucd5c\uc801\ud654"]}),(0,So.jsxs)(Ck,{children:[(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(Cg,{style:{color:"#fff"}}),(0,So.jsx)("span",{children:"Vercel"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"Edge Functions \ud65c\uc6a9"}),(0,So.jsx)("li",{children:"\uc790\ub3d9\ud654\ub41c CI/CD \ud30c\uc774\ud504\ub77c\uc778"}),(0,So.jsx)("li",{children:"\uc131\ub2a5 \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \ubd84\uc11d"})]})]}),(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(wg,{style:{color:"#DC382D"}}),(0,So.jsx)("span",{children:"Redis"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"API \uc751\ub2f5 \uce90\uc2f1"}),(0,So.jsx)("li",{children:"\uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \ub3d9\uae30\ud654"}),(0,So.jsx)("li",{children:"\uc138\uc158 \uad00\ub9ac"})]})]}),(0,So.jsxs)(Ek,{children:[(0,So.jsxs)("div",{className:"tech-header",children:[(0,So.jsx)(gg,{style:{color:"#336791"}}),(0,So.jsx)("span",{children:"PostgreSQL"})]}),(0,So.jsxs)(Pk,{children:[(0,So.jsx)("li",{children:"\uc9c0\ub9ac \uc815\ubcf4 \ub370\uc774\ud130 \ucc98\ub9ac"}),(0,So.jsx)("li",{children:"\ubcf5\uc7a1\ud55c \ucffc\ub9ac \ucd5c\uc801\ud654"}),(0,So.jsx)("li",{children:"\uc778\ub371\uc2f1 \uc804\ub7b5 \uad6c\ud604"})]})]})]})]})]}),(0,So.jsx)(zk,{children:"\u2190 \uc88c\uc6b0\ub85c \uc2a4\ud06c\ub864\ud558\uc5ec \ub354 \ubcf4\uae30 \u2192"})]}),(0,So.jsxs)(uk,{id:"challenges",children:[(0,So.jsx)(pk,{children:"\ubb38\uc81c \ud574\uacb0 \ubc0f \ucd5c\uc801\ud654"}),(0,So.jsxs)(Ik,{children:[(0,So.jsxs)(Bk,{children:[(0,So.jsx)(Nk,{children:"\ud83d\udd0d AI \uc751\ub2f5 \uc2dc\uac04 \ucd5c\uc801\ud654"}),(0,So.jsx)(Ok,{children:"- \ubb38\uc81c: OpenAI API \uc751\ub2f5 \uc2dc\uac04\uc774 \ud3c9\uade0 8\ucd08\ub85c \ub108\ubb34 \uae3a - \ud574\uacb0: \ud504\ub86c\ud504\ud2b8 \ucd5c\uc801\ud654 \ubc0f Redis \uce90\uc2f1 \ub3c4\uc785\uc73c\ub85c \uc751\ub2f5 \uc2dc\uac04 3\ucd08\ub300\ub85c \ub2e8\ucd95 - \uacb0\uacfc: \uc0ac\uc6a9\uc790 \ub300\uae30 \uc2dc\uac04 62.5% \uac10\uc18c"})]}),(0,So.jsxs)(Bk,{children:[(0,So.jsx)(Nk,{children:"\ud83d\udcf1 \ubc18\uc751\ud615 \ub514\uc790\uc778 \uad6c\ud604"}),(0,So.jsx)(Ok,{children:"- \ubb38\uc81c: \ub2e4\uc591\ud55c \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \ub808\uc774\uc544\uc6c3 \uae68\uc9d0 \ud604\uc0c1 \ubc1c\uc0dd - \ud574\uacb0: CSS Grid\uc640 Flexbox\ub97c \ud65c\uc6a9\ud55c \ubc18\uc751\ud615 \ub514\uc790\uc778 \uad6c\ud604 - \uacb0\uacfc: \ubaa8\ub4e0 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \uc77c\uad00\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uc81c\uacf5"})]}),(0,So.jsxs)(Bk,{children:[(0,So.jsx)(Nk,{children:"\ud83d\udd04 \uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \ub3d9\uae30\ud654"}),(0,So.jsx)(Ok,{children:"- \ubb38\uc81c: \uc5ec\ub7ec \uc0ac\uc6a9\uc790\uc758 \uc77c\uc815 \ub370\uc774\ud130 \ub3d9\uae30\ud654 \uc774\uc288 - \ud574\uacb0: WebSocket\uacfc Redis Pub/Sub \ud328\ud134 \ub3c4\uc785 - \uacb0\uacfc: \uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \ub3d9\uae30\ud654 \ubc0f \ud611\uc5c5 \uae30\ub2a5 \uad6c\ud604"})]})]})]}),(0,So.jsxs)(Uk,{children:[(0,So.jsx)("h2",{children:"AI \uae30\ubc18 \uc5ec\ud589 \uc77c\uc815 \uc0dd\uc131 \uc11c\ube44\uc2a4"}),(0,So.jsx)("p",{children:"OpenAI\uc640 \uad00\uad11\uacf5\uc0ac API\ub97c \ud65c\uc6a9\ud55c \ud601\uc2e0\uc801\uc778 \uc5ec\ud589 \ud50c\ub798\ub108 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4. Next.js\uc640 FastAPI\ub97c \ud65c\uc6a9\ud55c \ud480\uc2a4\ud0dd \uac1c\ubc1c \uacbd\ud5d8\uc744 \ubcf4\uc5ec\uc8fc\ub294 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc785\ub2c8\ub2e4."}),(0,So.jsxs)(Kk,{children:[(0,So.jsxs)(Wk,{href:"https://tripplai.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(Ph,{}),"\uc11c\ube44\uc2a4 \ubc14\ub85c\uac00\uae30"]}),(0,So.jsxs)(Wk,{href:"https://github.com/dongkyukim1?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(qp,{}),"GitHub \uc800\uc7a5\uc18c"]})]})]})]}),(0,So.jsxs)(Vk,{children:[(0,So.jsx)(_k,{onClick:()=>a(!i),children:(0,So.jsx)(kh,{})}),(0,So.jsxs)(Hk,{isOpen:i,children:[(0,So.jsxs)($k,{href:"tel:01040488292",children:[(0,So.jsx)(Gh,{}),"010-4048-8292"]}),(0,So.jsxs)($k,{href:"sms:01040488292",children:[(0,So.jsx)(kh,{}),"\ubb38\uc790\ubcf4\ub0b4\uae30"]}),(0,So.jsxs)($k,{href:"mailto:wlsntus55@nate.com",children:[(0,So.jsx)(Eh,{}),"wlsntus55@nate.com"]}),(0,So.jsxs)($k,{href:"https://open.kakao.com/o/sGFwxXMf",target:"_blank",rel:"noopener noreferrer",children:[(0,So.jsx)(Sw,{style:{color:"#FFE812"}}),"\uce74\uce74\uc624\ud1a1 1:1 \ucc44\ud305"]})]})]})]})};function Xk(e){return $p({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"},child:[]}]})(e)}const Yk=n.p+"static/media/google-login.2c60ac0488fd24cae83d.mp4",Qk=n.p+"static/media/project-create.00593f12be1d1e530219.mp4",qk=n.p+"static/media/project-update.77532f7a4db7353dfefa.mp4",Jk=(n.p,n.p+"static/media/project-list.1d73363cca3f4371b516.mp4"),Zk=n.p+"static/media/team-invite.b2e45e624d43a6ed90b6.mp4",eS=(n.p,n.p+"static/media/ai-code-review.a78affa76fa7add5c16b.mp4"),tS=n.p+"static/media/ai-service.292cc0560a1eb7579d59.mp4",nS=n.p+"static/media/repository-features.6a604603935c9ba81229.mp4",rS=(n.p,n.p+"static/media/main-messages.dfd4550f52bdb8fa7b5d.mp4"),iS=(n.p,n.p,n.p+"static/media/logout.2ba039dac2ba27a52273.mp4"),aS=(n.p,"#007ACC"),oS={primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.85)",tertiary:"rgba(255, 255, 255, 0.7)",accent:"#4EC9B0"},sS={background:"#1E1E1E",sidebar:"#252526",activeTab:"#1E1E1E",inactiveTab:"#2D2D2D",border:"#3E3E42",activeBorder:"#007ACC",hover:"#2A2D2E"},lS={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},cS=t.memo(()=>{fa();const[e,n]=(0,t.useState)("overview"),[r,i]=(0,t.useState)("auth"),[a,o]=(0,t.useState)(new Set),[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)({features:!1,tech:!1,challenges:!1,implementation:!1}),u=(0,t.useRef)(null),p=(0,t.useRef)(new Map),h=(0,t.useRef)(null),m=(0,t.useCallback)(e=>{d(t=>({...t,[e]:!t[e]}))},[]),f=t.memo(e=>{let{name:t,isFolder:n,isExpanded:r,onToggle:i,children:a,isActive:o,onClick:s}=e;return(0,So.jsxs)("div",{children:[(0,So.jsxs)(gS,{active:o,onClick:s||i,style:{cursor:"pointer"},children:[n?(0,So.jsxs)(So.Fragment,{children:[r?(0,So.jsx)(gh,{size:10}):(0,So.jsx)(xh,{size:10}),r?(0,So.jsx)(Rh,{}):(0,So.jsx)(Lh,{})]}):(0,So.jsx)(Th,{}),(0,So.jsx)("span",{style:{marginLeft:"0.5rem"},children:t})]}),r&&a&&(0,So.jsx)("div",{style:{paddingLeft:"1.2rem"},children:a})]})}),g=(0,t.useCallback)(e=>{const t=["overview","features","tech","challenges","implementation","demo"],r=e.filter(e=>e.isIntersecting).sort((e,n)=>t.indexOf(e.target.id)-t.indexOf(n.target.id));if(r.length>0){const e=r[0].target.id;n(t=>t!==e?e:t)}},[]);(0,t.useEffect)(()=>(u.current=new IntersectionObserver(g,lS),["overview","features","tech","challenges","implementation","demo"].forEach(e=>{const t=document.getElementById(e);t&&(p.current.set(e,t),u.current.observe(t))}),()=>{u.current&&u.current.disconnect(),p.current.clear()}),[g]);const x=(0,t.useCallback)(e=>{const t=document.getElementById(e);t&&(t.scrollIntoView({behavior:"smooth"}),n(e))},[]),v=(0,t.useCallback)(e=>{o(t=>new Set([...t,e]))},[]),b=(0,t.useCallback)(e=>{i(e)},[]);(0,t.useEffect)(()=>{[Yk,iS,Qk,qk,Jk,eS,tS,Zk,rS,nS].forEach(e=>{const t=document.createElement("video");t.onloadeddata=()=>v(e),t.src=e})},[v]);const y=(0,t.useMemo)(()=>({features:c.features,tech:c.tech,challenges:c.challenges,implementation:c.implementation}),[c]),w=(0,t.useMemo)(()=>({ref:h,"data-section":e}),[e]);return(0,So.jsx)(dS,{...w,children:(0,So.jsxs)(uS,{children:[(0,So.jsx)(pS,{children:(0,So.jsx)(hS,{active:!0,children:(0,So.jsx)(Xk,{size:24})})}),(0,So.jsxs)(mS,{children:[(0,t.useMemo)(()=>(0,So.jsxs)(fS,{children:[(0,So.jsx)("h3",{children:"DevHub Project Navigator"}),(0,So.jsx)(f,{name:"Overview.md",isFolder:!1,isActive:"overview"===e,onClick:()=>x("overview")}),(0,So.jsxs)(f,{name:"Technical Stack",isFolder:!0,isExpanded:y.tech,onToggle:()=>m("tech"),children:[(0,So.jsx)(f,{name:"Backend.md",isFolder:!1,onClick:()=>x("tech")}),(0,So.jsx)(f,{name:"Database.md",isFolder:!1,onClick:()=>x("tech")}),(0,So.jsx)(f,{name:"DevOps.md",isFolder:!1,onClick:()=>x("tech")}),(0,So.jsx)(f,{name:"Frontend.md",isFolder:!1,onClick:()=>x("tech")}),(0,So.jsx)(f,{name:"AI_Integration.md",isFolder:!1,onClick:()=>x("tech")})]}),(0,So.jsxs)(f,{name:"Implementation",isFolder:!0,isExpanded:y.implementation,onToggle:()=>m("implementation"),children:[(0,So.jsx)(f,{name:"AIIntegration.md",isFolder:!1,onClick:()=>x("implementation")}),(0,So.jsx)(f,{name:"PaymentSystem.md",isFolder:!1,onClick:()=>x("implementation")}),(0,So.jsx)(f,{name:"Security.md",isFolder:!1,onClick:()=>x("implementation")})]}),(0,So.jsxs)(f,{name:"Challenges",isFolder:!0,isExpanded:y.challenges,onToggle:()=>m("challenges"),children:[(0,So.jsx)(f,{name:"Performance.md",isFolder:!1,onClick:()=>x("challenges")}),(0,So.jsx)(f,{name:"Scalability.md",isFolder:!1,onClick:()=>x("challenges")}),(0,So.jsx)(f,{name:"UserExperience.md",isFolder:!1,onClick:()=>x("challenges")}),(0,So.jsx)(f,{name:"AI_Migration.md",isFolder:!1,onClick:()=>x("challenges")})]}),(0,So.jsxs)(f,{name:"Features",isFolder:!0,isExpanded:y.features,onToggle:()=>m("features"),children:[(0,So.jsx)(f,{name:"Core Features",isFolder:!1,onClick:()=>x("features")}),(0,So.jsx)(f,{name:"AI Integration",isFolder:!1,onClick:()=>x("ai-features")}),(0,So.jsx)(f,{name:"Team Collaboration",isFolder:!1,onClick:()=>x("collaboration")})]})]}),[e,y,x,m]),(0,t.useMemo)(()=>(0,So.jsxs)(xS,{children:[(0,So.jsx)(vS,{children:"OUTLINE"}),(0,So.jsxs)(bS,{active:"overview"===e,onClick:()=>x("overview"),children:[(0,So.jsx)(Oh,{size:12}),"\uac1c\uc694"]}),(0,So.jsxs)(bS,{active:"features"===e,onClick:()=>x("features"),children:[(0,So.jsx)(qh,{size:12}),"\uc8fc\uc694 \uae30\ub2a5"]}),(0,So.jsxs)(bS,{active:"tech"===e,onClick:()=>x("tech"),children:[(0,So.jsx)(yh,{size:12}),"\uae30\uc220 \uc2a4\ud0dd"]}),(0,So.jsxs)(bS,{active:"challenges"===e,onClick:()=>x("challenges"),children:[(0,So.jsx)(fh,{size:12}),"\ub3c4\uc804\uacfc\uc81c"]}),(0,So.jsxs)(bS,{active:"implementation"===e,onClick:()=>x("implementation"),children:[(0,So.jsx)(Jh,{size:12}),"\uad6c\ud604\uc0ac\ud56d"]}),(0,So.jsxs)(bS,{active:"demo"===e,onClick:()=>x("demo"),children:[(0,So.jsx)(Hh,{size:12}),"\uc2dc\uc5f0"]})]}),[e,x])]}),(0,So.jsxs)(yS,{children:[(0,So.jsx)(wS,{children:(0,So.jsxs)(jS,{active:!0,children:[(0,So.jsx)(Th,{size:14}),(0,So.jsx)("span",{children:"DevHub.md"})]})}),(0,So.jsxs)(kS,{children:[(0,So.jsxs)(AS,{id:"overview",children:[(0,So.jsxs)(SS,{children:[(0,So.jsx)(Xk,{style:{color:aS}}),"DevHub - Git\ubcf4\ub2e4 \uc26c\uc6b4 \ucc28\uc138\ub300 \ud615\uc0c1\uad00\ub9ac \ud50c\ub7ab\ud3fc"]}),(0,So.jsx)(CS,{children:(0,So.jsx)(tp.img,{src:sw,alt:"DevHub \ud504\ub85c\uc81d\ud2b8",initial:!1,animate:{opacity:1},transition:{duration:.3},onLoad:()=>v(sw),loading:"lazy",style:{opacity:a.has(sw)?1:0,transition:"opacity 0.3s ease"}})}),(0,So.jsxs)(ES,{children:[(0,So.jsxs)(PS,{children:[(0,So.jsx)("strong",{children:"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694:"})," DevHub\ub294 Git\uc758 \ubcf5\uc7a1\uc131\uc5d0 \uc88c\uc808\ud558\ub294 \ucd08\ubcf4 \uac1c\ubc1c\uc790\ub4e4\uc744 \uc704\ud55c \ucc28\uc138\ub300 \ud615\uc0c1\uad00\ub9ac \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. \uc804\ud1b5\uc801\uc778 CLI \uc911\uc2ec\uc758 Git\uc744 \uc9c1\uad00\uc801\uc778 \uc6f9 \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc7ac\uad6c\uc131\ud558\uc5ec \ub204\uad6c\ub098 \uc27d\uac8c \ubc84\uc804 \uad00\ub9ac\uc640 \ud611\uc5c5\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),(0,So.jsxs)(PS,{children:[(0,So.jsx)("strong",{children:"\uac1c\uc778 \uae30\uc5ec\ub3c4:"}),(0,So.jsxs)("ul",{children:[(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\ud480\uc2a4\ud0dd \uac1c\ubc1c"})," - Spring Boot \ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\uc5d4\ub4dc \uc804\uccb4 \uc544\ud0a4\ud14d\ucc98 \uc124\uacc4 \ubc0f \uad6c\ud604"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"AI \uc2dc\uc2a4\ud15c \uad6c\ucd95"})," - OpenAI\uc5d0\uc11c \ub85c\uceec Llama\ub85c\uc758 \uc644\uc804\ud55c \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ubc0f Flask AI \uc11c\ubc84 \uac1c\ubc1c"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\ud074\ub77c\uc6b0\ub4dc \uc778\ud504\ub77c"})," - AWS RDS, ElastiCache, Route53 \uae30\ubc18 \ud504\ub85c\ub355\uc158 \ud658\uacbd \uad6c\ucd95 \ubc0f \ubc30\ud3ec"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"UI/UX \ub514\uc790\uc778"})," - \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc758 \uc9c1\uad00\uc801\uc778 \uc778\ud130\ud398\uc774\uc2a4 \ub514\uc790\uc778 \ubc0f \uc0ac\uc6a9\uc131 \uac1c\uc120"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"DevOps \uad6c\ud604"})," - Docker Compose\ub97c \ud65c\uc6a9\ud55c \ucee8\ud14c\uc774\ub108 \uae30\ubc18 \ubc30\ud3ec \ubc0f \uac00\ube44\uc544 \ub3c4\uba54\uc778 \uc5f0\uacb0"]})]})]}),(0,So.jsxs)(PS,{children:[(0,So.jsx)("strong",{children:"\uac1c\ubc1c \ubaa9\uc801:"}),' \ucd08\ubcf4 \uac1c\ubc1c\uc790\ub4e4\uc774 Git\uc758 \ubcf5\uc7a1\ud55c CLI \uba85\ub839\uc5b4\uc640 \ube0c\ub79c\uce58 \uad00\ub9ac\uc5d0\uc11c \uacaa\ub294 \uc9c4\uc785\uc7a5\ubcbd\uc744 \ud574\uacb0\ud558\uace0\uc790 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. "Git\ubcf4\ub2e4 \uc27d\uac8c \ud615\uc0c1\uad00\ub9ac\uc640 \ucf54\ub4dc\ub9ac\ubdf0\ub97c \ud574\ubcf4\uc790"\ub294 \ubaa8\ud1a0 \ud558\uc5d0, \uc9c1\uad00\uc801\uc778 \uc6f9 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \ubc84\uc804 \uad00\ub9ac\uc758 \ubcf5\uc7a1\uc131\uc744 \ucd94\uc0c1\ud654\ud558\uace0 \uac1c\ubc1c \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \ub2e8\uc21c\ud654\ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4.']}),(0,So.jsxs)(PS,{children:[(0,So.jsx)("strong",{children:"\ud575\uc2ec \uac00\uce58 \uc81c\uc548:"}),(0,So.jsxs)("ul",{children:[(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"Git \ubcf5\uc7a1\uc131 \ucd94\uc0c1\ud654"})," - CLI \uba85\ub839\uc5b4 \uc5c6\uc774 \uc9c1\uad00\uc801\uc778 \uc6f9 UI\ub85c \ud615\uc0c1\uad00\ub9ac"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\uc2a4\ub9c8\ud2b8 \ucf54\ub4dc \ub9ac\ubdf0"})," - \ub85c\uceec Llama AI\ub97c \ud65c\uc6a9\ud55c \uc790\ub3d9\ud654\ub41c \ucf54\ub4dc \ubd84\uc11d"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\uc2dc\uac01\uc801 \uc6cc\ud06c\ud50c\ub85c\uc6b0"})," - \ube0c\ub79c\uce58, \ucee4\ubc0b, \uba38\uc9c0\ub97c \uadf8\ub798\ud53d\uc73c\ub85c \ud45c\ud604"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\ud611\uc5c5 \uc911\uc2ec \uc124\uacc4"})," - \uc2e4\uc2dc\uac04 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uacfc \ud300 \uad00\ub9ac \ub3c4\uad6c"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\ud559\uc2b5 \uce5c\ud654\uc801"})," - \ucd08\ubcf4\uc790\ub97c \uc704\ud55c \ub2e8\uacc4\ubcc4 \uac00\uc774\ub4dc\uc640 \ub3c4\uc6c0\ub9d0"]})]})]}),(0,So.jsxs)(PS,{children:[(0,So.jsx)("strong",{children:"\ud575\uc2ec \uae30\uc220 \uc2a4\ud0dd:"})," Spring Boot (\ubc31\uc5d4\ub4dc), Flask (AI \uc11c\ubc84), AWS RDS/ElastiCache (\ub370\uc774\ud130), WebSocket (\uc2e4\uc2dc\uac04 \ud1b5\uc2e0), \ub85c\uceec Llama AI (\ucf54\ub4dc \ubd84\uc11d), Docker Compose (\ubc30\ud3ec), JavaScript/jQuery (\ud504\ub860\ud2b8\uc5d4\ub4dc)"]})]}),(0,So.jsxs)(zS,{children:[(0,So.jsxs)(TS,{primary:!0,href:"https://github.com/dongkyukim1/devhub-server/tree/main",target:"_blank",children:[(0,So.jsx)(qp,{}),"GitHub \uc800\uc7a5\uc18c"]}),(0,So.jsxs)(TS,{href:"https://github.com/Devs-Of-Kosmo/devhub-server",target:"_blank",children:[(0,So.jsx)(Ph,{}),"\ud300 \uc800\uc7a5\uc18c"]}),(0,So.jsxs)(TS,{href:"/devhub_summary.pdf",download:"DevHub_\ud504\ub85c\uc81d\ud2b8_\uc694\uc57d.pdf",title:"DevHub \ud504\ub85c\uc81d\ud2b8 \uc694\uc57d \ubb38\uc11c \ub2e4\uc6b4\ub85c\ub4dc",children:[(0,So.jsx)(Mh,{}),"\ud504\ub85c\uc81d\ud2b8 \uc694\uc57d PDF"]})]})]}),(0,So.jsxs)(MS,{id:"features",children:[(0,So.jsxs)(SS,{children:[(0,So.jsx)(qh,{style:{color:oS.accent}}),"\uc8fc\uc694 \uae30\ub2a5"]}),(0,So.jsxs)(RS,{children:[(0,So.jsxs)(LS,{children:[(0,So.jsx)(IS,{style:{backgroundColor:"rgba(76, 201, 176, 0.1)"},children:(0,So.jsx)(ch,{style:{color:"#4EC9B0"}})}),(0,So.jsx)(BS,{children:"\ub85c\uceec AI \ucf54\ub4dc \ub9ac\ubdf0"}),(0,So.jsx)(NS,{children:"\ube44\uc6a9 \ud6a8\uc728\uc801\uc778 \ub85c\uceec Llama \ubaa8\ub378\uc744 \ud65c\uc6a9\ud55c \uc2e4\uc2dc\uac04 \ucf54\ub4dc \ubd84\uc11d \ubc0f \uac1c\uc120\uc0ac\ud56d \uc81c\uc548\uc73c\ub85c \ucf54\ub4dc \ud488\uc9c8 \ud5a5\uc0c1"})]}),(0,So.jsxs)(LS,{children:[(0,So.jsx)(IS,{style:{backgroundColor:"rgba(0, 122, 204, 0.1)"},children:(0,So.jsx)(Qp,{style:{color:aS}})}),(0,So.jsx)(BS,{children:"\uc9c1\uad00\uc801 \ud615\uc0c1\uad00\ub9ac"}),(0,So.jsx)(NS,{children:"\ubcf5\uc7a1\ud55c Git CLI \uba85\ub839\uc5b4\ub97c \uc2dc\uac01\uc801 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ub300\uccb4\ud558\uc5ec \ucd08\ubcf4\uc790\ub3c4 \uc27d\uac8c \ubc84\uc804 \uad00\ub9ac \uac00\ub2a5"})]}),(0,So.jsxs)(LS,{children:[(0,So.jsx)(IS,{style:{backgroundColor:"rgba(255, 206, 84, 0.1)"},children:(0,So.jsx)(kh,{style:{color:"#FFCE54"}})}),(0,So.jsx)(BS,{children:"\uc2e4\uc2dc\uac04 \ud611\uc5c5 \uc9c0\uc6d0"}),(0,So.jsx)(NS,{children:"Git \uc791\uc5c5 \uc911 \ubc1c\uc0dd\ud558\ub294 \uc9c8\ubb38\uacfc \ud53c\ub4dc\ubc31\uc744 \uc989\uc2dc \uacf5\uc720\ud560 \uc218 \uc788\ub294 \ud1b5\ud569 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \uc2dc\uc2a4\ud15c"})]}),(0,So.jsxs)(LS,{children:[(0,So.jsx)(IS,{style:{backgroundColor:"rgba(231, 76, 60, 0.1)"},children:(0,So.jsx)(fh,{style:{color:"#E74C3C"}})}),(0,So.jsx)(BS,{children:"\ud559\uc2b5 \uce5c\ud654\uc801 \ud658\uacbd"}),(0,So.jsx)(NS,{children:"\ub2e8\uacc4\ubcc4 \uac00\uc774\ub4dc\uc640 \uc2dc\uac01\uc801 \ud53c\ub4dc\ubc31\uc744 \ud1b5\ud574 Git \uac1c\ub150\uc744 \uc790\uc5f0\uc2a4\ub7fd\uac8c \ud559\uc2b5\ud560 \uc218 \uc788\ub294 \ud658\uacbd \uc81c\uacf5"})]})]})]}),(0,So.jsxs)(OS,{id:"tech",children:[(0,So.jsxs)(SS,{children:[(0,So.jsx)(Jh,{style:{color:aS}}),"\uae30\uc220 \uc2a4\ud0dd"]}),(0,So.jsxs)(DS,{children:[(0,So.jsxs)(FS,{children:[(0,So.jsx)(VS,{children:"Backend"}),(0,So.jsxs)(_S,{children:[(0,So.jsxs)(HS,{children:[(0,So.jsx)(kg,{style:{color:"#6DB33F"}}),(0,So.jsx)("span",{children:"Spring Boot"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Jp,{style:{color:"#ED8B00"}}),(0,So.jsx)("span",{children:"Java 17"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Qp,{style:{color:"#F05032"}}),(0,So.jsx)("span",{children:"JGit"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(rg,{style:{color:"#02303A"}}),(0,So.jsx)("span",{children:"Gradle"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Kf,{style:{color:"#F8DC75"}}),(0,So.jsx)("span",{children:"Apache Tomcat"})]})]})]}),(0,So.jsxs)(FS,{children:[(0,So.jsx)(VS,{children:"Database"}),(0,So.jsxs)(_S,{children:[(0,So.jsxs)(HS,{children:[(0,So.jsx)(cg,{style:{color:"#4479A1"}}),(0,So.jsx)("span",{children:"MySQL"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(wg,{style:{color:"#DC382D"}}),(0,So.jsx)("span",{children:"Redis"})]})]})]}),(0,So.jsxs)(FS,{children:[(0,So.jsx)(VS,{children:"AI & Machine Learning"}),(0,So.jsxs)(_S,{children:[(0,So.jsxs)(HS,{children:[(0,So.jsx)(bg,{style:{color:"#3776AB"}}),(0,So.jsx)("span",{children:"Python"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Jh,{style:{color:"#000000"}}),(0,So.jsx)("span",{children:"Flask"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(ch,{style:{color:"#FF6B6B"}}),(0,So.jsx)("span",{children:"Llama 3.2"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(wh,{style:{color:"#4EC9B0"}}),(0,So.jsx)("span",{children:"Ollama"})]})]})]}),(0,So.jsxs)(FS,{children:[(0,So.jsx)(VS,{children:"Frontend"}),(0,So.jsxs)(_S,{children:[(0,So.jsxs)(HS,{children:[(0,So.jsx)(ig,{style:{color:"#E34F26"}}),(0,So.jsx)("span",{children:"HTML5"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Gf,{style:{color:"#1572B6"}}),(0,So.jsx)("span",{children:"CSS3"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(og,{style:{color:"#F7DF1E"}}),(0,So.jsx)("span",{children:"JavaScript"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(sg,{style:{color:"#0769AD"}}),(0,So.jsx)("span",{children:"jQuery"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(fh,{style:{color:"#FF6B35"}}),(0,So.jsx)("span",{children:"Canvas API"})]})]})]}),(0,So.jsxs)(FS,{children:[(0,So.jsx)(VS,{children:"DevOps & Cloud"}),(0,So.jsxs)(_S,{children:[(0,So.jsxs)(HS,{children:[(0,So.jsx)(vh,{style:{color:"#FF9900"}}),(0,So.jsx)("span",{children:"AWS RDS"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(vh,{style:{color:"#FF9900"}}),(0,So.jsx)("span",{children:"ElastiCache"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(vh,{style:{color:"#FF9900"}}),(0,So.jsx)("span",{children:"Route53"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Xp,{style:{color:"#2496ED"}}),(0,So.jsx)("span",{children:"Docker Compose"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Bh,{style:{color:"#4285F4"}}),(0,So.jsx)("span",{children:"\uac00\ube44\uc544 \ub3c4\uba54\uc778"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(cm,{style:{color:"#010101"}}),(0,So.jsx)("span",{children:"WebSocket"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Sg,{style:{color:"#85EA2D"}}),(0,So.jsx)("span",{children:"Swagger"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(Wf,{style:{color:"#EB5424"}}),(0,So.jsx)("span",{children:"OAuth 2.0"})]}),(0,So.jsxs)(HS,{children:[(0,So.jsx)(wh,{style:{color:"#6DB33F"}}),(0,So.jsx)("span",{children:"Spring Security"})]})]})]})]})]}),(0,So.jsxs)($S,{id:"challenges",children:[(0,So.jsxs)(SS,{children:[(0,So.jsx)(bh,{style:{color:oS.accent}}),"\uc8fc\uc694 \ub3c4\uc804\uacfc\uc81c \ubc0f \ud574\uacb0\ubc29\uc548"]}),(0,So.jsxs)(US,{children:[(0,So.jsxs)(KS,{children:[(0,So.jsxs)(WS,{children:[(0,So.jsx)(ch,{style:{color:"#FF6B6B",marginRight:"0.5rem"}}),"OpenAI API\uc5d0\uc11c \ub85c\uceec Llama\ub85c AI \ubaa8\ub378 \ub9c8\uc774\uadf8\ub808\uc774\uc158"]}),(0,So.jsxs)(GS,{children:[(0,So.jsx)("strong",{children:"\ubb38\uc81c:"})," OpenAI API \uc0ac\uc6a9\uc73c\ub85c \uc778\ud55c \ub192\uc740 \ube44\uc6a9\uacfc \uc678\ubd80 \uc758\uc874\uc131, \uc751\ub2f5 \uc9c0\uc5f0 \ubb38\uc81c",(0,So.jsx)("br",{}),(0,So.jsx)("strong",{children:"\ud574\uacb0:"}),(0,So.jsxs)("ul",{children:[(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\ub85c\uceec Llama 3.2 \ubaa8\ub378 \ub3c4\uc785:"})," Ollama\ub97c \ud65c\uc6a9\ud55c \ub85c\uceec AI \uc11c\ubc84 \uad6c\ucd95\uc73c\ub85c \ube44\uc6a9 90% \uc808\uc57d"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\uc131\ub2a5 \ucd5c\uc801\ud654:"})," GPU \uac00\uc18d\uacfc \ubaa8\ub378 \uc591\uc790\ud654\ub97c \ud1b5\ud574 \uc751\ub2f5 \uc18d\ub3c4 3\ubc30 \ud5a5\uc0c1"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\ud504\ub77c\uc774\ubc84\uc2dc \uac15\ud654:"})," \ubbfc\uac10\ud55c \ucf54\ub4dc \uc815\ubcf4\uac00 \uc678\ubd80\ub85c \uc804\uc1a1\ub418\uc9c0 \uc54a\ub294 \uc644\uc804\ud55c \ub85c\uceec \ucc98\ub9ac"]}),(0,So.jsxs)("li",{children:[(0,So.jsx)("strong",{children:"\ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5:"})," \ucf54\ub4dc \ub9ac\ubdf0 \uc804\uc6a9 fine-tuning\uc73c\ub85c \ub354 \uc815\ud655\ud55c \ubd84\uc11d \uacb0\uacfc \uc81c\uacf5"]})]})]})]}),(0,So.jsxs)(KS,{children:[(0,So.jsx)(WS,{children:"Git CLI\uc758 \uc9c4\uc785\uc7a5\ubcbd \ud574\uacb0"}),(0,So.jsxs)(GS,{children:[(0,So.jsx)("strong",{children:"\ubb38\uc81c:"})," \ucd08\ubcf4 \uac1c\ubc1c\uc790\ub4e4\uc774 Git\uc758 \ubcf5\uc7a1\ud55c \uba85\ub839\uc5b4(merge, rebase, cherry-pick \ub4f1)\uc640 \uac1c\ub150\uc801 \uc774\ud574\uc5d0\uc11c \uc5b4\ub824\uc6c0\uc744 \uacaa\uc74c",(0,So.jsx)("br",{}),(0,So.jsx)("strong",{children:"\ud574\uacb0:"})," \ubcf5\uc7a1\ud55c Git \uc791\uc5c5\uc744 \uc9c1\uad00\uc801\uc778 \ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d\uacfc \uc2dc\uac01\uc801 \uac00\uc774\ub4dc\ub85c \ubcc0\ud658\ud558\uc5ec \ud559\uc2b5 \uace1\uc120\uc744 \uc644\ub9cc\ud558\uac8c \ub9cc\ub4e4\uace0 \uc2e4\uc218\ub97c \ubc29\uc9c0\ud558\ub294 \uc548\uc804\uc7a5\uce58 \uad6c\ud604"]})]}),(0,So.jsxs)(KS,{children:[(0,So.jsx)(WS,{children:"\uc2e4\uc2dc\uac04 \ud611\uc5c5 \ucda9\ub3cc \ubc29\uc9c0"}),(0,So.jsxs)(GS,{children:[(0,So.jsx)("strong",{children:"\ubb38\uc81c:"})," \uc5ec\ub7ec \uac1c\ubc1c\uc790\uac00 \ub3d9\uc2dc\uc5d0 \uac19\uc740 \ud30c\uc77c\uc744 \uc218\uc815\ud560 \ub54c \ubc1c\uc0dd\ud558\ub294 \ucda9\ub3cc\uc744 \ucd08\ubcf4\uc790\uac00 \ud574\uacb0\ud558\uae30 \uc5b4\ub824\uc6c0",(0,So.jsx)("br",{}),(0,So.jsx)("strong",{children:"\ud574\uacb0:"})," WebSocket \uae30\ubc18 \uc2e4\uc2dc\uac04 \ud3b8\uc9d1 \uc0c1\ud0dc \uacf5\uc720\uc640 \uc9c0\ub2a5\ud615 \ucda9\ub3cc \uac10\uc9c0 \uc2dc\uc2a4\ud15c\uc73c\ub85c \ucda9\ub3cc\uc744 \uc0ac\uc804\uc5d0 \ubc29\uc9c0\ud558\uace0 \ubc1c\uc0dd \uc2dc \uc790\ub3d9 \ud574\uacb0 \uc635\uc158 \uc81c\uc548"]})]}),(0,So.jsxs)(KS,{children:[(0,So.jsx)(WS,{children:"\ubcf4\uc548 \uac15\ud654"}),(0,So.jsxs)(GS,{children:[(0,So.jsx)("strong",{children:"\ubb38\uc81c:"})," \uc18c\uc2a4\ucf54\ub4dc \ubc0f \ubbfc\uac10\ud55c \ud504\ub85c\uc81d\ud2b8 \uc815\ubcf4\uc758 \ubcf4\uc548 \uc704\ud5d8",(0,So.jsx)("br",{}),(0,So.jsx)("strong",{children:"\ud574\uacb0:"})," JWT \ud1a0\ud070 \uae30\ubc18 \uc778\uc99d, XSS/CSRF \ubc29\uc9c0, SQL Injection \ubc29\uc5b4 \ub4f1 \ub2e4\uce35 \ubcf4\uc548 \uccb4\uacc4 \uad6c\ucd95"]})]})]})]}),(0,So.jsxs)(XS,{id:"implementation",children:[(0,So.jsxs)(SS,{children:[(0,So.jsx)(Jh,{style:{color:aS}}),"\uc8fc\uc694 \uad6c\ud604\uc0ac\ud56d"]}),(0,So.jsxs)(YS,{children:[(0,So.jsxs)(QS,{children:[(0,So.jsxs)(qS,{children:[(0,So.jsx)(ch,{style:{color:"#FF6B6B",marginRight:"0.5rem"}}),"AI \ucf54\ub4dc \ub9ac\ubdf0 \uc2dc\uc2a4\ud15c"]}),(0,So.jsxs)(JS,{children:[(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\ub85c\uceec Llama 3.2 \ud1b5\ud569:"})," OpenAI API \uc758\uc874\uc131\uc744 \uc81c\uac70\ud558\uace0 \uc644\uc804\ud55c \ub85c\uceec AI \ud658\uacbd \uad6c\ucd95"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"Ollama \uc11c\ubc84 \uc5f0\ub3d9:"})," Python Flask\ub97c \ud1b5\ud55c AI \ubaa8\ub378 \uc11c\ube59 \ubc0f Spring Boot\uc640 RESTful API \ud1b5\uc2e0"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\ucee8\ud14d\uc2a4\ud2b8 \uc778\uc2dd \ubd84\uc11d:"})," \ud30c\uc77c \ud655\uc7a5\uc790\ubcc4 \ud2b9\ud654\ub41c \ucf54\ub4dc \ubd84\uc11d \ud504\ub86c\ud504\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1"]})]})]}),(0,So.jsxs)(QS,{children:[(0,So.jsxs)(qS,{children:[(0,So.jsx)(Qp,{style:{color:aS,marginRight:"0.5rem"}}),"Git \ucd94\uc0c1\ud654 \ub808\uc774\uc5b4"]}),(0,So.jsxs)(JS,{children:[(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"JGit \ub77c\uc774\ube0c\ub7ec\ub9ac \ud65c\uc6a9:"})," Java \ud658\uacbd\uc5d0\uc11c Git \uba85\ub839\uc5b4\ub97c \ud504\ub85c\uadf8\ub798\ubc0d\uc801\uc73c\ub85c \uc81c\uc5b4"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\uc2dc\uac01\uc801 \ube0c\ub79c\uce58 \ud45c\ud604:"})," HTML5 Canvas\uc640 JavaScript\ub97c \ud65c\uc6a9\ud55c Git \uadf8\ub798\ud504 \uc2dc\uac01\ud654 \ubc0f \uc778\ud130\ub799\ud2f0\ube0c \uc870\uc791"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\uc548\uc804\ud55c \uba38\uc9c0 \uc2dc\uc2a4\ud15c:"})," \ucda9\ub3cc \uac10\uc9c0 \ubc0f \uc790\ub3d9 \ud574\uacb0 \uc81c\uc548 \uc54c\uace0\ub9ac\uc998 \uad6c\ud604"]})]})]}),(0,So.jsxs)(QS,{children:[(0,So.jsxs)(qS,{children:[(0,So.jsx)(cm,{style:{color:"#4EC9B0",marginRight:"0.5rem"}}),"\uc2e4\uc2dc\uac04 \ud611\uc5c5 \uc778\ud504\ub77c"]}),(0,So.jsxs)(JS,{children:[(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"WebSocket STOMP:"})," \uc2e4\uc2dc\uac04 \uc591\ubc29\ud5a5 \ud1b5\uc2e0\uc73c\ub85c \ub2e4\uc911 \uc0ac\uc6a9\uc790 \ub3d9\uc2dc \ud3b8\uc9d1 \uc9c0\uc6d0"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"Redis Pub/Sub:"})," \ubd84\uc0b0 \ud658\uacbd\uc5d0\uc11c \uc2e4\uc2dc\uac04 \uc774\ubca4\ud2b8 \ube0c\ub85c\ub4dc\uce90\uc2a4\ud305 \ubc0f \uc138\uc158 \uad00\ub9ac"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"Operational Transformation:"})," \ub3d9\uc2dc \ud3b8\uc9d1 \uc2dc \ub370\uc774\ud130 \uc77c\uad00\uc131 \ubcf4\uc7a5 \uc54c\uace0\ub9ac\uc998"]})]})]}),(0,So.jsxs)(QS,{children:[(0,So.jsxs)(qS,{children:[(0,So.jsx)(wh,{style:{color:"#FFCE54",marginRight:"0.5rem"}}),"\ubcf4\uc548 \ubc0f \uc778\uc99d \uccb4\uacc4"]}),(0,So.jsxs)(JS,{children:[(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"OAuth 2.0 + JWT:"})," Google \uc18c\uc15c \ub85c\uadf8\uc778\uacfc \uc0c1\ud0dc \uc5c6\ub294 \ud1a0\ud070 \uae30\ubc18 \uc778\uc99d \uad6c\ud604"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\uc5ed\ud560 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4:"})," Spring Security\ub97c \ud65c\uc6a9\ud55c \uc138\ubc00\ud55c \uad8c\ud55c \uad00\ub9ac \uc2dc\uc2a4\ud15c"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"API Rate Limiting:"})," Redis\ub97c \ud65c\uc6a9\ud55c \uc694\uccad \uc81c\ud55c \ubc0f DDoS \ubc29\uc5b4 \uccb4\uacc4"]})]})]}),(0,So.jsxs)(QS,{children:[(0,So.jsxs)(qS,{children:[(0,So.jsx)(am,{style:{color:"#9B59B6",marginRight:"0.5rem"}}),"\uac1c\uc778 \uc124\uacc4 \ubc0f \uac1c\ubc1c"]}),(0,So.jsxs)(JS,{children:[(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\uc804\uccb4 \uc544\ud0a4\ud14d\ucc98 \uc124\uacc4:"})," Spring Boot \uba54\uc778 \uc11c\ubc84\uc640 Flask AI \uc11c\ubc84 \uac04\uc758 \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4 \uc544\ud0a4\ud14d\ucc98 \uad6c\uc131"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\ud504\ub860\ud2b8\uc5d4\ub4dc UI/UX \ub514\uc790\uc778:"})," \ucd08\ubcf4\uc790 \uce5c\ud654\uc801\uc778 \uc9c1\uad00\uc801 \uc778\ud130\ud398\uc774\uc2a4\uc640 \uc2dc\uac01\uc801 \ud53c\ub4dc\ubc31 \uc2dc\uc2a4\ud15c \uc124\uacc4"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\ubc18\uc751\ud615 \uc6f9 \ub514\uc790\uc778:"})," \ubaa8\ubc14\uc77c\uacfc \ub370\uc2a4\ud06c\ud1b1 \ud658\uacbd\uc744 \ubaa8\ub450 \uc9c0\uc6d0\ud558\ub294 \uc801\uc751\ud615 \ub808\uc774\uc544\uc6c3 \uad6c\ud604"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\uc131\ub2a5 \ucd5c\uc801\ud654:"})," \ube44\ub3d9\uae30 \ucc98\ub9ac\uc640 \uce90\uc2f1 \uc804\ub7b5\uc744 \ud1b5\ud55c \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uac1c\uc120"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"AWS \ud074\ub77c\uc6b0\ub4dc \ubc30\ud3ec:"})," RDS(MySQL), ElastiCache(Redis), Route53\uc744 \ud65c\uc6a9\ud55c \uc644\uc804\ud55c \ud504\ub85c\ub355\uc158 \ud658\uacbd \uad6c\ucd95"]}),(0,So.jsxs)(ZS,{children:[(0,So.jsx)("strong",{children:"\ucee8\ud14c\uc774\ub108 \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158:"})," Docker Compose\ub97c \uc774\uc6a9\ud55c \uba40\ud2f0 \ucee8\ud14c\uc774\ub108 \ubc30\ud3ec \ubc0f \uc11c\ube44\uc2a4 \uad00\ub9ac"]})]})]})]})]}),(0,So.jsxs)(eA,{id:"demo",children:[(0,So.jsxs)(SS,{children:[(0,So.jsx)(Hh,{style:{color:aS}}),"\uc2e4\uc2dc\uac04 \uae30\ub2a5 \uc2dc\uc5f0"]}),(0,So.jsxs)(tA,{children:[(0,t.useMemo)(()=>(0,So.jsxs)(nA,{children:[(0,So.jsxs)(rA,{active:"auth"===r,onClick:()=>b("auth"),children:[(0,So.jsx)(am,{style:{marginRight:"0.5rem"}}),"\uc0ac\uc6a9\uc790 \uc778\uc99d"]}),(0,So.jsxs)(rA,{active:"project"===r,onClick:()=>b("project"),children:[(0,So.jsx)(yh,{style:{marginRight:"0.5rem"}}),"\ud615\uc0c1\uad00\ub9ac \uc6cc\ud06c\ud50c\ub85c\uc6b0"]}),(0,So.jsxs)(rA,{active:"ai"===r,onClick:()=>b("ai"),children:[(0,So.jsx)(ch,{style:{marginRight:"0.5rem"}}),"\ub85c\uceec AI \uae30\ub2a5"]}),(0,So.jsxs)(rA,{active:"collaboration"===r,onClick:()=>b("collaboration"),children:[(0,So.jsx)(kh,{style:{marginRight:"0.5rem"}}),"\ud300 \ud611\uc5c5 \uae30\ub2a5"]})]}),[r,b]),(0,So.jsxs)(iA,{children:[(0,So.jsxs)(aA,{style:{display:"auth"===r?"grid":"none"},children:[(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:Yk,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(Yk)?1:0},transition:{duration:.2},onLoadedData:()=>v(Yk),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\uc18c\uc15c \ub85c\uadf8\uc778 (Google OAuth)"}),(0,So.jsx)("p",{children:"\uac04\ud3b8\ud558\uace0 \uc548\uc804\ud55c \uad6c\uae00 OAuth 2.0 \uc778\uc99d \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc6d0\ud074\ub9ad \ub85c\uadf8\uc778\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."})]})]})}),(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:iS,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(iS)?1:0},transition:{duration:.2},onLoadedData:()=>v(iS),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\uc138\uc158 \uad00\ub9ac"}),(0,So.jsx)("p",{children:"\uc548\uc804\ud55c \ub85c\uadf8\uc544\uc6c3\uacfc \uc138\uc158 \uad00\ub9ac\ub85c \ubcf4\uc548\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."})]})]})})]}),(0,So.jsxs)(aA,{style:{display:"project"===r?"grid":"none"},children:[(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:Qk,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(Qk)?1:0},transition:{duration:.2},onLoadedData:()=>v(Qk),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\uc800\uc7a5\uc18c \ucd08\uae30\ud654"}),(0,So.jsx)("p",{children:"\ubcf5\uc7a1\ud55c git init \uacfc\uc815\uc744 \ud55c \ubc88\uc758 \ud074\ub9ad\uc73c\ub85c \uc790\ub3d9\ud654\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})}),(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:qk,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(qk)?1:0},transition:{duration:.2},onLoadedData:()=>v(qk),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\ubcc0\uacbd\uc0ac\ud56d \ucee4\ubc0b"}),(0,So.jsx)("p",{children:"\uba85\ub839\uc5b4 \uc5c6\uc774 \ubcc0\uacbd\ub41c \ud30c\uc77c\ub4e4\uc744 \uc2dc\uac01\uc801\uc73c\ub85c \ud655\uc778\ud558\uace0 \ucee4\ubc0b \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})}),(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:Jk,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(Jk)?1:0},transition:{duration:.2},onLoadedData:()=>v(Jk),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\ube0c\ub79c\uce58 \ud788\uc2a4\ud1a0\ub9ac \uc2dc\uac01\ud654"}),(0,So.jsx)("p",{children:"\ubcf5\uc7a1\ud55c Git \ud788\uc2a4\ud1a0\ub9ac\ub97c \uc9c1\uad00\uc801\uc778 \uadf8\ub798\ud504\ub85c \ud45c\ud604\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8 \uc9c4\ud589 \uc0c1\ud669\uc744 \ud55c\ub208\uc5d0 \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})})]}),(0,So.jsxs)(aA,{style:{display:"ai"===r?"grid":"none"},children:[(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:eS,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(eS)?1:0},transition:{duration:.2},onLoadedData:()=>v(eS),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\ub85c\uceec Llama AI \ucf54\ub4dc \ub9ac\ubdf0"}),(0,So.jsx)("p",{children:"\ube44\uc6a9 \ud6a8\uc728\uc801\uc778 \ub85c\uceec Llama 3.2 \ubaa8\ub378\uc744 \ud65c\uc6a9\ud55c \uc2e4\uc2dc\uac04 \ucf54\ub4dc \ubd84\uc11d \ubc0f \uac1c\uc120\uc0ac\ud56d \uc81c\uc548 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4."})]})]})}),(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:tS,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(tS)?1:0},transition:{duration:.2},onLoadedData:()=>v(tS),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\ud504\ub77c\uc774\ube57 AI \uac1c\ubc1c \uc5b4\uc2dc\uc2a4\ud134\ud2b8"}),(0,So.jsx)("p",{children:"\uac1c\ubc1c \uacfc\uc815\uc5d0\uc11c \ub85c\uceec AI\uac00 \uc2e4\uc2dc\uac04\uc73c\ub85c \ub3c4\uc6c0\uc744 \uc81c\uacf5\ud558\ub294 \ubcf4\uc548\uc774 \uac15\ud654\ub41c \ud1b5\ud569 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."})]})]})})]}),(0,So.jsxs)(aA,{style:{display:"collaboration"===r?"grid":"none"},children:[(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:Zk,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(Zk)?1:0},transition:{duration:.2},onLoadedData:()=>v(Zk),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\ud611\uc5c5 \ud658\uacbd \uad6c\ucd95"}),(0,So.jsx)("p",{children:"\ubcf5\uc7a1\ud55c Git \uad8c\ud55c \uc124\uc815 \uc5c6\uc774 \ud300\uc6d0\uc744 \ucd08\ub300\ud558\uace0 \uc5ed\ud560\ubcc4 \uc811\uadfc \uad8c\ud55c\uc744 \uc27d\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})}),(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:rS,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(rS)?1:0},transition:{duration:.2},onLoadedData:()=>v(rS),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"Git \uc791\uc5c5 \uc911 \uc18c\ud1b5"}),(0,So.jsx)("p",{children:"\ube0c\ub79c\uce58 \uc791\uc5c5\uc774\ub098 \uba38\uc9c0 \ucda9\ub3cc \uc2dc \uc989\uc2dc \ud300\uc6d0\ub4e4\uacfc \uc0c1\uc758\ud560 \uc218 \uc788\ub294 \ucee8\ud14d\uc2a4\ud2b8 \uae30\ubc18 \uba54\uc2dc\uc9d5 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4."})]})]})}),(0,So.jsx)(oA,{children:(0,So.jsxs)(sA,{children:[(0,So.jsx)(tp.video,{src:nS,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:!1,animate:{opacity:a.has(nS)?1:0},transition:{duration:.2},onLoadedData:()=>v(nS),style:{width:"100%",height:"auto",display:"block"}}),(0,So.jsxs)(lA,{children:[(0,So.jsx)("h3",{children:"\uc6d0\uaca9 \uc800\uc7a5\uc18c \ub3d9\uae30\ud654"}),(0,So.jsx)("p",{children:"pull, push, fetch \uac19\uc740 \uc6d0\uaca9 \uc791\uc5c5\uc744 \ubc84\ud2bc \ud074\ub9ad\ub9cc\uc73c\ub85c \uc548\uc804\ud558\uac8c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})})]})]})]})]})]})]})]})})}),dS=Gt.div`
  min-height: 100vh;
  background: ${sS.background};
  color: ${oS.primary};
  font-family: 'Consolas', 'Monaco', 'Menlo', monospace;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: scroll-position;
  contain: layout style paint;
  
  /* 모든 리스트 스타일과 점들 제거 */
  *, *::before, *::after {
    list-style: none;
    margin: 0;
    padding: 0;
    transform: translateZ(0);
  }
  
  ul, ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`,uS=Gt.div`
  display: grid;
  grid-template-columns: 48px 280px 1fr;
  min-height: 100vh;
  transform: translateZ(0);
  will-change: scroll-position;
  contain: layout style paint;
`,pS=Gt.div`
  background: ${sS.sidebar};
  border-right: 1px solid ${sS.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
`,hS=Gt.div`
  width: 32px;
  height: 32px;
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  color: ${e=>e.active?aS:oS.tertiary};
  background: ${e=>e.active?"rgba(0, 122, 204, 0.1)":"transparent"};
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(0, 122, 204, 0.1);
    color: ${aS};
  }
`,mS=Gt.div`
  background: ${sS.sidebar};
  border-right: 1px solid ${sS.border};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100vh;
  transform: translateZ(0);
  will-change: scroll-position;
  contain: layout style paint;
  -webkit-overflow-scrolling: touch;
`,fS=Gt.div`
  flex: 1;
  padding: 0.5rem;
  margin-top: 1rem;
  
  h3 {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${oS.tertiary};
    margin: 0 0 1rem 0;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`,gS=(Gt.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${oS.tertiary};
  margin: 0 0 1rem 0;
  letter-spacing: 0.5px;
`,Gt.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.85rem;
  color: ${e=>e.active?aS:oS.secondary};
  background: ${e=>e.active?"rgba(0, 122, 204, 0.1)":"transparent"};
  margin: 0.1rem 0;
  transition: background-color 0.15s ease, color 0.15s ease;
  will-change: background-color, color;
  transform: translateZ(0);

  &:hover {
    background: ${e=>e.active?"rgba(0, 122, 204, 0.15)":sS.hover};
    color: ${oS.primary};
  }

  svg {
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`),xS=(Gt.div`
  margin-top: 0.5rem;
  margin-left: 1rem;
  font-size: 0.8rem;
  color: ${oS.tertiary};

  li {
    margin: 0.2rem 0;
    padding-left: 0.5rem;
    border-left: 1px solid ${sS.border};
  }
`,Gt.div`
  border-top: 1px solid ${sS.border};
  padding: 0.5rem;
  margin-top: 1.5rem;
`),vS=Gt.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${oS.tertiary};
  margin: 0 0 1rem 0;
  letter-spacing: 0.5px;
`,bS=Gt.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.85rem;
  color: ${e=>e.active?aS:oS.secondary};
  background: ${e=>e.active?"rgba(0, 122, 204, 0.1)":"transparent"};
  margin: 0.1rem 0;
  transition: background-color 0.15s ease, color 0.15s ease;
  will-change: background-color, color;
  transform: translateZ(0);

  &:hover {
    background: ${e=>e.active?"rgba(0, 122, 204, 0.15)":sS.hover};
    color: ${oS.primary};
  }

  svg {
    margin-right: 0.5rem;
    transform: ${e=>e.active?"rotate(90deg)":"rotate(0deg)"};
    transition: transform 0.15s ease;
    will-change: transform;
  }
`,yS=Gt.div`
  display: flex;
  flex-direction: column;
  background: ${sS.background};
  min-height: 100vh;
  transform: translateZ(0);
  will-change: scroll-position;
  contain: layout style paint;
`,wS=Gt.div`
  background: ${sS.inactiveTab};
  border-bottom: 1px solid ${sS.border};
  display: flex;
  min-height: 35px;
`,jS=Gt.div`
  background: ${e=>e.active?sS.activeTab:sS.inactiveTab};
  border-right: 1px solid ${sS.border};
  border-top: ${e=>e.active?`2px solid ${aS}`:"2px solid transparent"};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
  color: ${e=>e.active?oS.primary:oS.tertiary};
  transition: background-color 0.15s ease, color 0.15s ease, border-top-color 0.15s ease;

  &:hover {
    background: ${sS.hover};
    color: ${oS.primary};
  }
`,kS=Gt.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  max-height: calc(100vh - 35px);
  transform: translateZ(0);
  will-change: scroll-position;
  contain: layout style paint;
  -webkit-overflow-scrolling: touch;
  
  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${sS.background};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${sS.border};
    border-radius: 6px;
    
    &:hover {
      background: ${oS.tertiary};
    }
  }
  
  section {
    margin-bottom: 3rem;
    transform: translateZ(0);
    contain: layout style;
    
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`,SS=Gt.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1.5rem 0;
  color: ${oS.primary};
  border-bottom: 1px solid ${sS.border};
  padding-bottom: 0.5rem;

  svg {
    font-size: 1.2rem;
  }
`,AS=Gt.section`
  margin-bottom: 3rem;
`,CS=Gt.div`
  margin: 3rem 0 2.5rem 0;
  display: flex;
  justify-content: center;
  transform: translateZ(0);
  will-change: transform;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid ${sS.border};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translateZ(0);
    will-change: opacity;
    backface-visibility: hidden;
  }
`,ES=Gt.div`
  margin: 2rem 0;
  line-height: 1.8;
`,PS=Gt.p`
  margin: 1.5rem 0;
  color: ${oS.secondary};
  font-size: 1rem;

  strong {
    color: ${oS.accent};
    font-weight: 600;
  }

  ul {
    margin: 0.5rem 0 0 1.5rem;
    
    li {
      margin: 0.5rem 0;
      color: ${oS.tertiary};
    }
  }
`,zS=Gt.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`,TS=Gt.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: 1px solid ${e=>e.primary?aS:sS.border};
  background: ${e=>e.primary?aS:"transparent"};
  color: ${e=>e.primary?"white":oS.primary};
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  transform: translateZ(0);
  will-change: transform, background-color, box-shadow;
  backface-visibility: hidden;

  &:hover {
    background: ${e=>e.primary?"#005a99":sS.hover};
    transform: translateY(-1px) translateZ(0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1rem;
    transform: translateZ(0);
  }
`,MS=Gt.section`
  margin-bottom: 3rem;
`,RS=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
`,LS=Gt.div`
  background: ${sS.sidebar};
  border: 1px solid ${sS.border};
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  transform: translateZ(0);
  will-change: transform, box-shadow, border-color;
  backface-visibility: hidden;
  contain: layout style paint;

  &:hover {
    border-color: ${aS};
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 4px 12px rgba(0, 122, 204, 0.1);
  }
`,IS=Gt.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
  }
`,BS=Gt.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${oS.primary};
  margin-bottom: 0.5rem;
`,NS=Gt.p`
  color: ${oS.tertiary};
  font-size: 0.9rem;
  line-height: 1.5;
`,OS=Gt.section`
  margin-bottom: 3rem;
`,DS=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
`,FS=Gt.div`
  background: ${sS.sidebar};
  border: 1px solid ${sS.border};
  border-radius: 8px;
  padding: 1.5rem;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  contain: layout style paint;
`,VS=Gt.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${oS.accent};
  margin-bottom: 1rem;
  border-bottom: 1px solid ${sS.border};
  padding-bottom: 0.5rem;
`,_S=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,HS=Gt.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${oS.secondary};
  font-size: 0.9rem;

  svg {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  span {
    font-weight: 500;
  }
`,$S=Gt.section`
  margin-bottom: 3rem;
`,US=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
`,KS=Gt.div`
  background: ${sS.sidebar};
  border: 1px solid ${sS.border};
  border-left: 4px solid ${oS.accent};
  border-radius: 4px;
  padding: 1.5rem;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  contain: layout style paint;
`,WS=Gt.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${oS.primary};
  margin-bottom: 0.75rem;
`,GS=Gt.p`
  color: ${oS.secondary};
  font-size: 0.9rem;
  line-height: 1.6;

  strong {
    color: ${oS.accent};
    font-weight: 600;
  }
`,XS=Gt.section`
  margin-bottom: 3rem;
`,YS=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,QS=Gt.div`
  background: ${sS.sidebar};
  border: 1px solid ${sS.border};
  border-radius: 12px;
  padding: 2rem;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  contain: layout style paint;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${aS};
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 8px 25px rgba(0, 122, 204, 0.15);
  }
`,qS=Gt.h3`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${oS.primary};
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${sS.border};
  padding-bottom: 0.75rem;
`,JS=Gt.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ZS=Gt.div`
  color: ${oS.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 0.75rem;
  background: rgba(0, 122, 204, 0.05);
  border-radius: 6px;
  border-left: 3px solid ${aS};

  strong {
    color: ${oS.accent};
    font-weight: 600;
  }
`,eA=Gt.section`
  margin-bottom: 3rem;
`,tA=(Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`,Gt.div`
  background: ${sS.sidebar};
  border: 1px solid ${sS.border};
  border-radius: 8px;
  padding: 1.5rem;
`,Gt.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${oS.accent};
  margin-bottom: 1rem;
  border-bottom: 1px solid ${sS.border};
  padding-bottom: 0.5rem;
`,Gt.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Gt.div`
  color: ${oS.secondary};
  font-size: 0.9rem;
  line-height: 1.5;

  strong {
    color: ${oS.primary};
    font-weight: 600;
  }
`,Gt.a`
  color: ${aS};
  text-decoration: none;
  margin-left: 0.5rem;
  
  &:hover {
    text-decoration: underline;
    color: #4EC9B0;
  }
`,Gt.div`
  margin: 2rem 0;
  border: 1px solid ${sS.border};
  border-radius: 12px;
  overflow: hidden;
  background: ${sS.sidebar};
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
`),nA=Gt.div`
  display: flex;
  background: ${sS.inactiveTab};
  border-bottom: 1px solid ${sS.border};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${sS.background};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${sS.border};
    border-radius: 2px;
  }
`,rA=Gt.button`
  background: ${e=>e.active?sS.activeTab:"transparent"};
  border: none;
  border-bottom: ${e=>e.active?`3px solid ${aS}`:"3px solid transparent"};
  color: ${e=>e.active?oS.primary:oS.tertiary};
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;
  min-width: fit-content;
  will-change: background-color, color, border-bottom-color;
  transform: translateZ(0);

  &:hover {
    background: ${e=>e.active?sS.activeTab:sS.hover};
    color: ${oS.primary};
  }

  svg {
    color: ${e=>e.active?aS:oS.tertiary};
    transition: color 0.3s ease;
    will-change: color;
  }
`,iA=Gt.div`
  padding: 2rem;
  min-height: 600px;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
`,aA=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,oA=Gt(tp.div)`
  background: ${sS.background};
  border: 1px solid ${sS.border};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  will-change: transform, box-shadow, border-color;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  &:hover {
    transform: translateY(-5px) translateZ(0);
    box-shadow: 0 10px 25px rgba(0, 122, 204, 0.15);
    border-color: ${aS};
  }
`,sA=Gt.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  img, video {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
    will-change: transform;
    transform: translateZ(0);
  }
  
  &:hover {
    img, video {
      transform: scale(1.02) translateZ(0);
    }
    
    > div {
      opacity: 1;
      transform: translateY(0) translateZ(0);
    }
  }
`,lA=Gt.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  padding: 2rem;
  transform: translateY(20px) translateZ(0);
  opacity: 0;
  transition: all 0.3s ease;
  will-change: transform, opacity;
  backface-visibility: hidden;
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${oS.accent};
    transform: translateZ(0);
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
    transform: translateZ(0);
  }
`;cS.displayName="DevHubDetail";const cA=cS,dA=n.p+"static/media/api.3b9e58276db430f7af47.png",uA=n.p+"static/media/admin.110711adfb799163c70f.png",pA=n.p+"static/media/ivr.613c605fc82c89d7ac68.png",hA=n.p+"static/media/jira.02470b5629c10337fcc5.png",mA=n.p+"static/media/management.fa32b4f876e0f0eac079.png",fA=n.p+"static/media/LGU+Cleaning.a627150d4770c6a47d6f.png",gA=n.p+"static/media/littlebank_admin.fdb2791ec48cb0ad8605.png",xA=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ye(Ut.apply(void 0,a([e],t,!1))),i=Pe(r);return new zt(i,r)})`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,vA=Gt.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 80px 0 60px;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`,bA=Gt.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`,yA=Gt(tp.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(-5px);
  }
`,wA=Gt.div`
  text-align: center;
  margin-bottom: 80px;
  animation: ${xA} 0.8s ease-out;
`,jA=Gt.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06d6a0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  line-height: 1.2;
`,kA=Gt.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`,SA=Gt.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  gap: 10px;
  flex-wrap: wrap;
`,AA=Gt(tp.button)`
  padding: 15px 30px;
  background: ${e=>e.active?"linear-gradient(135deg, #3b82f6, #8b5cf6)":"rgba(255, 255, 255, 0.05)"};
  border: 1px solid ${e=>e.active?"transparent":"rgba(255, 255, 255, 0.1)"};
  color: white;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${e=>e.active?"linear-gradient(135deg, #3b82f6, #8b5cf6)":"rgba(255, 255, 255, 0.1)"};
  }
`,CA=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`,EA=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.3);
  }
`,PA=Gt.h3`
  font-size: 1.5rem;
  color: #3b82f6;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`,zA=Gt.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`,TA=Gt.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`,MA=Gt.li`
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 0;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #06d6a0;
    font-weight: bold;
  }
`,RA=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`,LA=Gt.span`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #3b82f6;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
`,IA=Gt.div`
  margin-top: 30px;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  height: 400px;
  background: #1a1a2e;
`,BA=Gt.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 15px;
`,NA=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,OA=Gt(tp.div)`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    border-color: rgba(59, 130, 246, 0.3);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`,DA=Gt.div`
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  text-align: center;
`,FA=Gt(tp.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
  }
`,VA=Gt.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,_A=Gt.div`
  margin-bottom: 60px;
`,HA=Gt.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
  text-align: center;
`,$A=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`,UA=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  text-align: center;
`,KA=Gt.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`,WA=Gt.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
`;const GA=function(){const e=fa(),[n,r]=(0,t.useState)("overview"),[i,a]=(0,t.useState)(null),o=[{src:dA,caption:"API \ubaa8\ub2c8\ud130\ub9c1 \ub300\uc2dc\ubcf4\ub4dc"},{src:uA,caption:"\uad00\ub9ac\uc790 \uc2dc\uc2a4\ud15c \ud398\uc774\uc9c0"},{src:pA,caption:"IVR \uc2dc\uc2a4\ud15c \uad00\ub9ac"},{src:hA,caption:"JIRA \uc5f0\ub3d9 \ubc0f \uc774\uc288 \ud2b8\ub798\ud0b9"},{src:mA,caption:"\ucf5c\uc2dc\uc2a4\ud15c \ub9e4\ub2c8\uc9c0\uba3c\ud2b8 \uc6f9 \uc2dc\uc2a4\ud15c"}],s=[{src:fA,caption:"LGU+ \uc2dc\uc2a4\ud15c \ud074\ub9ac\ub2dd \uc791\uc5c5"},{src:mx,caption:"LGU+ \ubcf4\uc548 \uc2dc\uc2a4\ud15c \uad00\ub9ac"}],l=[{src:gA,caption:"LittleBank \uc5b4\ub4dc\ubbfc \uba54\uc778 \ub300\uc2dc\ubcf4\ub4dc"}],c={pmk:{title:"PMK \uc81c\ub124\uc2dc\uc2a4 \ucf5c\uc2dc\uc2a4\ud15c \uc7a5\uc560\uc774\ub825 \uad00\ub9ac\uc2dc\uc2a4\ud15c",client:"Philip Morris Korea (PMK)",description:"\ud544\ub9bd\ubaa8\ub9ac\uc2a8\ucf54\ub9ac\uc544 \uc81c\ub124\uc2dc\uc2a4 \ucf5c\uc13c\ud130 \uc2dc\uc2a4\ud15c\uc758 \uc7a5\uc560 \ubc1c\uc0dd\uc744 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \uc774\ub825\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uad00\ub9ac\ud558\ub294 \uc6b4\uc601 \ub300\uc2dc\ubcf4\ub4dc",features:["\uc2e4\uc2dc\uac04 \ucf5c\uc13c\ud130 \uc2dc\uc2a4\ud15c \uc0c1\ud0dc \ubaa8\ub2c8\ud130\ub9c1","\uc7a5\uc560 \ubc1c\uc0dd \uc2dc \uc989\uc2dc \uc54c\ub9bc \ubc0f \ub85c\uae45","\uc7a5\uc560 \uc774\ub825 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uccb4\uacc4\uc801 \uad00\ub9ac","\uc7a5\uc560 \uc6d0\uc778 \ubd84\uc11d \ubc0f \ud1b5\uacc4 \ubcf4\uace0\uc11c \uc0dd\uc131","\ubcf5\uad6c \uc2dc\uac04 \ubc0f \uc7a5\uc560 \ud328\ud134 \ubd84\uc11d","\ucf5c\uc2dc\uc2a4\ud15c \ub9e4\ub2c8\uc9c0\uba3c\ud2b8 \uc6f9 \uc2dc\uc2a4\ud15c","\uc6b4\uc601\ud300 \ub300\uc2dc\ubcf4\ub4dc \ubc0f \uc54c\ub9bc \uc2dc\uc2a4\ud15c"],techStack:["HTML5","CSS3","JavaScript","Chart.js","D3.js","WebSocket","MySQL"],stats:[{number:"99.5%",label:"\ucf5c\uc13c\ud130 \uac00\uc6a9\uc131"},{number:"5\ubd84",label:"\ud3c9\uade0 \ubcf5\uad6c\uc2dc\uac04"},{number:"60%",label:"\ubaa8\ub2c8\ud130\ub9c1 \ud6a8\uc728\uc131 \ud5a5\uc0c1"}]},littlebank:{title:"LittleBank \uc5b4\ub4dc\ubbfc \uacb0\uc81c\uad00\ub9ac\uc2dc\uc2a4\ud15c",client:"LittleBank",description:"\ub9ac\ud2c0\ubc45\ud06c \ubaa8\ubc14\uc77c \uc571\uc758 \uc785\ucd9c\uae08 \ub0b4\uc5ed \uc870\ud68c \ubc0f \uacb0\uc81c \ud504\ub85c\uc138\uc2a4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\ub294 \uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0",features:["\uc2e4\uc2dc\uac04 \uacb0\uc81c \ub0b4\uc5ed \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \uc870\ud68c","\uc0ac\uc6a9\uc790\ubcc4 \uc785\ucd9c\uae08 \uac70\ub798 \uc774\ub825 \uad00\ub9ac","\uacb0\uc81c \uc2b9\uc778/\uac70\uc808 \ud504\ub85c\uc138\uc2a4 \uad00\ub9ac","\uacb0\uc81c \uc624\ub958 \ub85c\uadf8 \ucd94\uc801 \ubc0f \ubd84\uc11d","\uc815\uc0b0 \ubcf4\uace0\uc11c \uc790\ub3d9 \uc0dd\uc131 \uae30\ub2a5","\uad00\ub9ac\uc790 \uad8c\ud55c\ubcc4 \uc811\uadfc \uc81c\uc5b4"],techStack:["HTML5","CSS3","JavaScript","Chart.js","Bootstrap","MySQL"],stats:[{number:"99.9%",label:"\uacb0\uc81c \ucc98\ub9ac \uc815\ud655\ub3c4"},{number:"50K+",label:"\uc6d4 \ucc98\ub9ac \uac74\uc218"},{number:"50%",label:"\uc5c5\ubb34 \ucc98\ub9ac \uc2dc\uac04 \ub2e8\ucd95"}]},lguplus:{title:"LGU+ Visual Ring Biz \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218",client:"LG\uc720\ud50c\ub7ec\uc2a4",description:"LGU+ Visual Ring Biz \uc11c\ube44\uc2a4\uc758 \uc548\uc815\uc801\uc778 \uc6b4\uc601\uc744 \uc704\ud55c \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc2e0\uaddc \uae30\ub2a5 \uac1c\ubc1c",features:["Spring Framework \uae30\ubc18 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc720\uc9c0\ubcf4\uc218","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc131\ub2a5 \ucd5c\uc801\ud654 \ubc0f \ucffc\ub9ac \ud29c\ub2dd","\uc2dc\uc2a4\ud15c \uc7a5\uc560 \ubd84\uc11d \ubc0f \uc2e0\uc18d\ud55c \ud574\uacb0","\uc2e0\uaddc \ube44\uc988\ub2c8\uc2a4 \uc694\uad6c\uc0ac\ud56d \uac1c\ubc1c \ubc0f \ubc30\ud3ec","\ubcf4\uc548 \ud328\uce58 \ubc0f \uc2dc\uc2a4\ud15c \uc5c5\ub370\uc774\ud2b8","\ucf54\ub4dc \ub9ac\ud329\ud1a0\ub9c1 \ubc0f \uc131\ub2a5 \uac1c\uc120"],techStack:["Java","Spring Framework","Spring Security","Spring Data JPA","Hibernate","QueryDSL","Oracle","JavaScript","JSP","Apache Tomcat","Maven/Gradle","LG Security Module"],stats:[{number:"99.8%",label:"\uc2dc\uc2a4\ud15c \uc548\uc815\uc131"},{number:"40%",label:"\ucffc\ub9ac \uc131\ub2a5 \ud5a5\uc0c1"},{number:"30%",label:"\uc7a5\uc560 \ubc1c\uc0dd\ub960 \uac10\uc18c"}]}},d=()=>(0,So.jsxs)(_A,{children:[(0,So.jsx)(HA,{children:"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694"}),(0,So.jsxs)($A,{children:[(0,So.jsxs)(UA,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,So.jsx)(KA,{children:"3"}),(0,So.jsx)(WA,{children:"\ud604\uc7ac \ub2f4\ub2f9 \ud504\ub85c\uc81d\ud2b8"})]}),(0,So.jsxs)(UA,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,So.jsx)(KA,{children:"100%"}),(0,So.jsx)(WA,{children:"\uc6f9 \uae30\ubc18 \ub300\uc2dc\ubcf4\ub4dc"})]}),(0,So.jsxs)(UA,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,So.jsx)(KA,{children:"\uc2e4\uc2dc\uac04"}),(0,So.jsx)(WA,{children:"\ub370\uc774\ud130 \ubaa8\ub2c8\ud130\ub9c1"})]})]})]});return(0,So.jsxs)(vA,{children:[(0,So.jsxs)(bA,{children:[(0,So.jsx)(yA,{onClick:()=>e("/"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190 \ud648\uc73c\ub85c \ub3cc\uc544\uac00\uae30"}),(0,So.jsxs)(wA,{children:[(0,So.jsx)(jA,{children:"\ud604\uc7ac \ub2f4\ub2f9 \ud504\ub85c\uc81d\ud2b8"}),(0,So.jsx)(kA,{children:"\ub137\ucef4\uc194\ub8e8\uc158\uc5d0\uc11c \ub2f4\ub2f9\ud558\uace0 \uc788\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ubcc4 \uc2dc\uc2a4\ud15c \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218 \ud504\ub85c\uc81d\ud2b8"})]}),(0,So.jsxs)(SA,{children:[(0,So.jsx)(AA,{active:"overview"===n,onClick:()=>r("overview"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"\uc804\uccb4 \uac1c\uc694"}),(0,So.jsx)(AA,{active:"pmk"===n,onClick:()=>r("pmk"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"PMK \ucf5c\uc2dc\uc2a4\ud15c \uad00\ub9ac"}),(0,So.jsx)(AA,{active:"littlebank"===n,onClick:()=>r("littlebank"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"LittleBank \uc5b4\ub4dc\ubbfc"}),(0,So.jsx)(AA,{active:"lguplus"===n,onClick:()=>r("lguplus"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"LGU+ \uc2dc\uc2a4\ud15c"})]}),(0,So.jsx)(Lp,{mode:"wait",children:(0,So.jsx)(tp.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:(()=>{switch(n){case"overview":return(0,So.jsxs)(So.Fragment,{children:[d(),(0,So.jsx)(CA,{children:Object.entries(c).map((e,t)=>{let[n,r]=e;return(0,So.jsxs)(EA,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.2*t},children:[(0,So.jsxs)(PA,{children:[(0,So.jsx)("span",{style:{fontSize:"1.5rem"},children:"pmk"===n?"\ud83d\udcde":"littlebank"===n?"\ud83d\udcb0":"\u2699\ufe0f"}),r.title]}),(0,So.jsxs)("div",{style:{marginBottom:"15px",color:"#8b5cf6",fontWeight:"600"},children:["\ud074\ub77c\uc774\uc5b8\ud2b8: ",r.client]}),(0,So.jsx)(zA,{children:r.description}),(0,So.jsx)(TA,{children:r.features.map((e,t)=>(0,So.jsx)(MA,{children:e},t))}),(0,So.jsxs)("div",{style:{marginTop:"20px"},children:[(0,So.jsx)("h4",{style:{color:"#8b5cf6",marginBottom:"15px"},children:"\uc8fc\uc694 \uc131\uacfc"}),(0,So.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"15px"},children:r.stats.map((e,t)=>(0,So.jsxs)("div",{style:{textAlign:"center"},children:[(0,So.jsx)("div",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#3b82f6",marginBottom:"5px"},children:e.number}),(0,So.jsx)("div",{style:{fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.7)"},children:e.label})]},t))})]}),(0,So.jsx)(RA,{children:r.techStack.map((e,t)=>(0,So.jsx)(LA,{children:e},t))}),"pmk"===n?(0,So.jsxs)("div",{style:{marginTop:"30px"},children:[(0,So.jsx)("h4",{style:{color:"#8b5cf6",marginBottom:"15px"},children:"\uc2dc\uc2a4\ud15c \uc2a4\ud06c\ub9b0\uc0f7"}),(0,So.jsx)(NA,{children:o.slice(0,2).map((e,t)=>(0,So.jsxs)(OA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},onClick:()=>a(e),children:[(0,So.jsx)("img",{src:e.src,alt:e.caption}),(0,So.jsx)(DA,{children:e.caption})]},t))}),o.length>2&&(0,So.jsxs)("div",{style:{textAlign:"center",marginTop:"15px",color:"rgba(255, 255, 255, 0.7)"},children:["+",o.length-2,"\uac1c \ub354 \ubcf4\uae30 (PMK \ud0ed\uc5d0\uc11c \uc804\uccb4 \ud655\uc778)"]})]}):"littlebank"===n?(0,So.jsxs)("div",{style:{marginTop:"30px"},children:[(0,So.jsx)("h4",{style:{color:"#8b5cf6",marginBottom:"15px"},children:"\uc2dc\uc2a4\ud15c \uc2a4\ud06c\ub9b0\uc0f7"}),(0,So.jsx)(NA,{children:l.slice(0,2).map((e,t)=>(0,So.jsxs)(OA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},onClick:()=>a(e),children:[(0,So.jsx)("img",{src:e.src,alt:e.caption}),(0,So.jsx)(DA,{children:e.caption})]},t))})]}):"lguplus"===n?(0,So.jsxs)("div",{style:{marginTop:"30px"},children:[(0,So.jsx)("h4",{style:{color:"#8b5cf6",marginBottom:"15px"},children:"\uc791\uc5c5 \uc2a4\ud06c\ub9b0\uc0f7"}),(0,So.jsx)(NA,{children:s.map((e,t)=>(0,So.jsxs)(OA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},onClick:()=>a(e),children:[(0,So.jsx)("img",{src:e.src,alt:e.caption}),(0,So.jsx)(DA,{children:e.caption})]},t))})]}):(0,So.jsx)(IA,{children:(0,So.jsx)(BA,{children:"\uae30\ud0c0 \ud504\ub85c\uc81d\ud2b8 \uc2a4\ud06c\ub9b0\uc0f7"})})]},n)})})]});case"pmk":return(0,So.jsx)(CA,{children:(0,So.jsxs)(EA,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,So.jsxs)(PA,{children:[(0,So.jsx)("span",{style:{fontSize:"1.5rem"},children:"\ud83d\udcde"}),c.pmk.title]}),(0,So.jsxs)("div",{style:{marginBottom:"15px",color:"#8b5cf6",fontWeight:"600"},children:["\ud074\ub77c\uc774\uc5b8\ud2b8: ",c.pmk.client]}),(0,So.jsx)(zA,{children:c.pmk.description}),(0,So.jsx)(TA,{children:c.pmk.features.map((e,t)=>(0,So.jsx)(MA,{children:e},t))}),(0,So.jsx)(RA,{children:c.pmk.techStack.map((e,t)=>(0,So.jsx)(LA,{children:e},t))}),(0,So.jsxs)("div",{style:{marginTop:"30px"},children:[(0,So.jsx)("h4",{style:{color:"#8b5cf6",marginBottom:"15px"},children:"\uc2dc\uc2a4\ud15c \uc2a4\ud06c\ub9b0\uc0f7"}),(0,So.jsx)(NA,{children:o.map((e,t)=>(0,So.jsxs)(OA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},onClick:()=>a(e),children:[(0,So.jsx)("img",{src:e.src,alt:e.caption}),(0,So.jsx)(DA,{children:e.caption})]},t))})]})]})});case"littlebank":return(0,So.jsx)(CA,{children:(0,So.jsxs)(EA,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,So.jsxs)(PA,{children:[(0,So.jsx)("span",{style:{fontSize:"1.5rem"},children:"\ud83d\udcb0"}),c.littlebank.title]}),(0,So.jsxs)("div",{style:{marginBottom:"15px",color:"#8b5cf6",fontWeight:"600"},children:["\ud074\ub77c\uc774\uc5b8\ud2b8: ",c.littlebank.client]}),(0,So.jsx)(zA,{children:c.littlebank.description}),(0,So.jsx)(TA,{children:c.littlebank.features.map((e,t)=>(0,So.jsx)(MA,{children:e},t))}),(0,So.jsx)(RA,{children:c.littlebank.techStack.map((e,t)=>(0,So.jsx)(LA,{children:e},t))}),(0,So.jsxs)("div",{style:{marginTop:"30px"},children:[(0,So.jsx)("h4",{style:{color:"#8b5cf6",marginBottom:"15px"},children:"\uc2dc\uc2a4\ud15c \uc2a4\ud06c\ub9b0\uc0f7"}),(0,So.jsx)(NA,{children:l.map((e,t)=>(0,So.jsxs)(OA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},onClick:()=>a(e),children:[(0,So.jsx)("img",{src:e.src,alt:e.caption}),(0,So.jsx)(DA,{children:e.caption})]},t))})]})]})});case"lguplus":return(0,So.jsx)(CA,{children:(0,So.jsxs)(EA,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,So.jsxs)(PA,{children:[(0,So.jsx)("span",{style:{fontSize:"1.5rem"},children:"\u2699\ufe0f"}),c.lguplus.title]}),(0,So.jsxs)("div",{style:{marginBottom:"15px",color:"#8b5cf6",fontWeight:"600"},children:["\ud074\ub77c\uc774\uc5b8\ud2b8: ",c.lguplus.client]}),(0,So.jsx)(zA,{children:c.lguplus.description}),(0,So.jsx)(TA,{children:c.lguplus.features.map((e,t)=>(0,So.jsx)(MA,{children:e},t))}),(0,So.jsx)(RA,{children:c.lguplus.techStack.map((e,t)=>(0,So.jsx)(LA,{children:e},t))}),(0,So.jsxs)("div",{style:{marginTop:"30px"},children:[(0,So.jsx)("h4",{style:{color:"#8b5cf6",marginBottom:"15px"},children:"\uc2dc\uc2a4\ud15c \uc791\uc5c5 \uc2a4\ud06c\ub9b0\uc0f7"}),(0,So.jsx)(NA,{children:s.map((e,t)=>(0,So.jsxs)(OA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},onClick:()=>a(e),children:[(0,So.jsx)("img",{src:e.src,alt:e.caption}),(0,So.jsx)(DA,{children:e.caption})]},t))})]})]})});default:return d()}})()},n)})]}),(0,So.jsx)(Lp,{children:i&&(0,So.jsxs)(FA,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(null),children:[(0,So.jsx)(VA,{onClick:()=>a(null),children:"\xd7"}),(0,So.jsx)("img",{src:i.src,alt:i.caption}),(0,So.jsx)("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0, 0, 0, 0.8)",color:"white",padding:"10px 20px",borderRadius:"10px",fontSize:"1.1rem"},children:i.caption})]})})]})},XA=n.p+"static/media/logo.3d8d99aa78bf065893dc.png",YA=n.p+"static/media/\uba54\uc778.265d16b496ecc0bcb738.png",QA=n.p+"static/media/\ud68c\uc6d0\uac00\uc785.141e34f8a7a0c859aafa.png",qA=n.p+"static/media/\uc778\uae30\uac8c\uc2dc\ud310.79cdb225e6f09b379dba.png",JA=n.p+"static/media/\uc0ac\uc774\ub4dc\uc2ac\ub77c\uc774\ub4dc.4051779bcc316c672e7a.png",ZA=n.p+"static/media/\ub85c\uadf8\uc778\uc815\ubcf4.91228250526960db4ee3.png",eC=n.p+"static/media/\uac8c\uc2dc\uae00.647b1f8ad705ec64226e.png",tC=n.p+"static/media/dogfoot.723225ca5b804ba72e35.pdf",nC="rgb(139, 92, 246)",rC="rgba(139, 92, 246, 0.1)",iC="rgba(139, 92, 246, 0.3)",aC={primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.85)",tertiary:"rgba(255, 255, 255, 0.7)"},oC="#FF6B35",sC="#6DB33F",lC="#F7DF1E",cC="#E34F26",dC="#1572B6",uC="#0769AD",pC="#F80000",hC="#00D8FF",mC="#F05032",fC="#000000",gC="#FF6C37",xC=Gt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  min-height: 100vh;
`,vC=Gt(tp.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.8);
    border-color: rgba(139, 92, 246, 0.5);
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`,bC=Gt.div`
  padding-top: 6rem;
  padding-bottom: 4rem;
`,yC=Gt.div`
  text-align: center;
  margin-bottom: 4rem;
  
  .logo-title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1.5rem;
    }
    
    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
      
      @media (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
    }
  }
`,wC=Gt.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${nC}, #a855f7);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,jC=Gt.p`
  font-size: 1.2rem;
  color: ${aC.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`,kC=Gt.section`
  margin-bottom: 5rem;
`,SC=Gt.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${aC.primary};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, ${nC}, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,AC=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,CC=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);

  h3 {
    font-size: 1.3rem;
    color: ${nC};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: ${aC.secondary};
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;

    li {
      color: ${aC.tertiary};
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;

      &::before {
        content: '•';
        color: ${nC};
        position: absolute;
        left: 0;
      }
    }
  }
`,EC=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`,PC=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${iC};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .content {
    padding: 1.5rem;

    h3 {
      font-size: 1.2rem;
      color: ${aC.primary};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${aC.tertiary};
      font-size: 0.9rem;
    }
  }
`,zC=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
`,TC=Gt(tp.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${e=>e.color};
    background: ${e=>e.color}20;
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    color: ${e=>e.color};
    margin-bottom: 1rem;
  }

  .name {
    font-weight: 600;
    color: ${aC.primary};
    font-size: 0.9rem;
  }
`,MC=Gt.div`
  background: linear-gradient(135deg, ${rC}, rgba(255, 99, 71, 0.05));
  border: 1px solid ${iC};
  border-radius: 20px;
  padding: 2.5rem;
  margin: 3rem 0;

  h3 {
    font-size: 1.5rem;
    color: ${nC};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .role-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .role-item {
    h4 {
      color: ${aC.primary};
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        color: ${aC.secondary};
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;

        &::before {
          content: '✓';
          color: ${nC};
          position: absolute;
          left: 0;
          font-weight: bold;
        }
      }
    }
  }
`,RC=Gt(tp.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${nC}, #a855f7);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  }
`,LC=Gt(tp.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,IC=Gt.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`,BC=Gt.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;const NC=function(){const e=fa(),[n,r]=(0,t.useState)(null),i="JSP/Spring MVC \uae30\ubc18 \ucee4\ubba4\ub2c8\ud2f0 \ud50c\ub7ab\ud3fc",a="2024\ub144 5\uc6d4 - 2024\ub144 6\uc6d4",o="5\uba85 (\ud300 \ud504\ub85c\uc81d\ud2b8)",s="\uc644\ub8cc",l=[{src:YA,title:"\uba54\uc778 \ud398\uc774\uc9c0",description:"\uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uba54\uc778 \ud654\uba74"},{src:QA,title:"\ud68c\uc6d0\uac00\uc785",description:"\uac04\ud3b8\ud55c \ud68c\uc6d0\uac00\uc785 \ud504\ub85c\uc138\uc2a4"},{src:qA,title:"\uc778\uae30 \uac8c\uc2dc\ud310",description:"\uc778\uae30 \uac8c\uc2dc\uae00 \ubaa8\uc74c"},{src:JA,title:"\uc0ac\uc774\ub4dc \uc2ac\ub77c\uc774\ub4dc",description:"\ub124\ube44\uac8c\uc774\uc158 \uba54\ub274"},{src:ZA,title:"\ub85c\uadf8\uc778 \uc815\ubcf4",description:"\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc778 \uad00\ub9ac"},{src:eC,title:"\uac8c\uc2dc\uae00 \uc0c1\uc138",description:"\uac8c\uc2dc\uae00 \uc0c1\uc138 \ubcf4\uae30"}],c=[{name:"JSP",icon:Jh,color:oC},{name:"Spring MVC",icon:jg,color:sC},{name:"JavaScript",icon:og,color:lC},{name:"HTML5",icon:ig,color:cC},{name:"CSS3",icon:Gf,color:dC},{name:"jQuery",icon:sg,color:uC},{name:"AJAX",icon:Vh,color:hC},{name:"Oracle",icon:fg,color:pC},{name:"Git",icon:eg,color:mC},{name:"Notion",icon:pg,color:fC},{name:"Postman",icon:xg,color:gC}];return(0,So.jsxs)(xC,{children:[(0,So.jsxs)(vC,{onClick:()=>e("/"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,So.jsx)(ah,{}),"\ud648\uc73c\ub85c \ub3cc\uc544\uac00\uae30"]}),(0,So.jsxs)(bC,{children:[(0,So.jsxs)(yC,{children:[(0,So.jsxs)("div",{className:"logo-title-container",children:[(0,So.jsx)("img",{src:XA,alt:"Dogfoot Logo"}),(0,So.jsx)(wC,{children:"Dogfoot Community"})]}),(0,So.jsx)(jC,{children:"JSP/Spring MVC \uae30\ubc18 \ucee4\ubba4\ub2c8\ud2f0 \ud50c\ub7ab\ud3fc - PM \ubc0f \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c \ub2f4\ub2f9"})]}),(0,So.jsxs)(kC,{children:[(0,So.jsxs)(SC,{children:[(0,So.jsx)(Qh,{}),"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694"]}),(0,So.jsxs)(AC,{children:[(0,So.jsxs)(CC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,So.jsxs)("h3",{children:[(0,So.jsx)(uh,{}),"\ud504\ub85c\uc81d\ud2b8 \uc815\ubcf4"]}),(0,So.jsxs)("p",{children:[(0,So.jsx)("strong",{children:"\uc124\uba85:"})," ",i]}),(0,So.jsxs)("p",{children:[(0,So.jsx)("strong",{children:"\uae30\uac04:"})," ",a]}),(0,So.jsxs)("p",{children:[(0,So.jsx)("strong",{children:"\ud300 \uaddc\ubaa8:"})," ",o]}),(0,So.jsxs)("p",{children:[(0,So.jsx)("strong",{children:"\uc0c1\ud0dc:"})," ",s]})]}),(0,So.jsxs)(CC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,So.jsxs)("h3",{children:[(0,So.jsx)(om,{}),"\uc8fc\uc694 \uae30\ub2a5"]}),(0,So.jsxs)("ul",{children:[(0,So.jsx)("li",{children:"\uc0ac\uc6a9\uc790 \ud68c\uc6d0\uac00\uc785 \ubc0f \ub85c\uadf8\uc778 \uc2dc\uc2a4\ud15c"}),(0,So.jsx)("li",{children:"\uac8c\uc2dc\uae00 CRUD \uae30\ub2a5"}),(0,So.jsx)("li",{children:"\uc778\uae30 \uac8c\uc2dc\ud310 \ubc0f \uac8c\uc2dc\uae00 \ucd94\ucc9c \uc2dc\uc2a4\ud15c"}),(0,So.jsx)("li",{children:"AJAX \uae30\ubc18 \ub3d9\uc801 \ucee8\ud150\uce20 \ub85c\ub529"}),(0,So.jsx)("li",{children:"\ubc18\uc751\ud615 \uc6f9 \ub514\uc790\uc778"}),(0,So.jsx)("li",{children:"\uc2e4\uc2dc\uac04 \uc0ac\uc774\ub4dc \ub124\ube44\uac8c\uc774\uc158"}),(0,So.jsx)("li",{children:"Oracle DB \uc5f0\ub3d9 \ub370\uc774\ud130 \uad00\ub9ac"})]})]})]})]}),(0,So.jsxs)(MC,{children:[(0,So.jsxs)("h3",{children:[(0,So.jsx)(am,{}),"\ub2f4\ub2f9 \uc5ed\ud560 \ubc0f \uc131\uacfc"]}),(0,So.jsxs)("div",{className:"role-grid",children:[(0,So.jsxs)("div",{className:"role-item",children:[(0,So.jsx)("h4",{children:"\ud83c\udfaf PM (Project Manager)"}),(0,So.jsxs)("ul",{children:[(0,So.jsx)("li",{children:"5\uba85 \ud300 \ud504\ub85c\uc81d\ud2b8 \uc804\uccb4 \uae30\ud68d \ubc0f \uc77c\uc815 \uad00\ub9ac"}),(0,So.jsx)("li",{children:"\uc694\uad6c\uc0ac\ud56d \ubd84\uc11d \ubc0f \uae30\ub2a5 \uba85\uc138\uc11c \uc791\uc131"}),(0,So.jsx)("li",{children:"\ud300\uc6d0 \uac04 \uc5c5\ubb34 \ubd84\ub2f4 \ubc0f \ud611\uc5c5 \uc870\uc728"}),(0,So.jsx)("li",{children:"\ud504\ub85c\uc81d\ud2b8 \uc9c4\ud589 \uc0c1\ud669 \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \ub9ac\ud3ec\ud305"}),(0,So.jsx)("li",{children:"Git\uc744 \ud1b5\ud55c \ud615\uc0c1 \uad00\ub9ac \ubc0f \ucf54\ub4dc \ub9ac\ubdf0"})]})]}),(0,So.jsxs)("div",{className:"role-item",children:[(0,So.jsx)("h4",{children:"\ud83d\udcbb Frontend Developer"}),(0,So.jsxs)("ul",{children:[(0,So.jsx)("li",{children:"HTML5, CSS3, JavaScript\ub97c \ud65c\uc6a9\ud55c UI \uac1c\ubc1c"}),(0,So.jsx)("li",{children:"jQuery \ubc0f AJAX\ub97c \ud1b5\ud55c \ub3d9\uc801 \uae30\ub2a5 \uad6c\ud604"}),(0,So.jsx)("li",{children:"\ubc18\uc751\ud615 \uc6f9 \ub514\uc790\uc778 \ubc0f \ud06c\ub85c\uc2a4 \ube0c\ub77c\uc6b0\uc800 \ud638\ud658\uc131"}),(0,So.jsx)("li",{children:"JSP\uc640 \uc5f0\ub3d9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \ud398\uc774\uc9c0 \uac1c\ubc1c"}),(0,So.jsx)("li",{children:"\uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uac1c\uc120\uc744 \uc704\ud55c \uc778\ud130\ub809\uc158 \uad6c\ud604"})]})]})]})]}),(0,So.jsxs)(kC,{children:[(0,So.jsxs)(SC,{children:[(0,So.jsx)(Ah,{}),"\uad6c\ud604 \ud654\uba74"]}),(0,So.jsx)(EC,{children:l.map((e,t)=>(0,So.jsxs)(PC,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1*t},whileHover:{y:-5},onClick:()=>r(e),children:[(0,So.jsx)("img",{src:e.src,alt:e.title}),(0,So.jsxs)("div",{className:"content",children:[(0,So.jsx)("h3",{children:e.title}),(0,So.jsx)("p",{children:e.description})]})]},t))})]}),(0,So.jsxs)(kC,{children:[(0,So.jsxs)(SC,{children:[(0,So.jsx)(yh,{}),"\uae30\uc220 \uc2a4\ud0dd"]}),(0,So.jsx)(zC,{children:c.map((e,t)=>(0,So.jsxs)(TC,{color:e.color,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.1*t},whileHover:{scale:1.05},children:[(0,So.jsx)("div",{className:"icon",children:(0,So.jsx)(e.icon,{})}),(0,So.jsx)("div",{className:"name",children:e.name})]},t))})]}),(0,So.jsxs)(kC,{children:[(0,So.jsxs)(SC,{children:[(0,So.jsx)(zh,{}),"\ud504\ub85c\uc81d\ud2b8 \ubb38\uc11c"]}),(0,So.jsxs)("div",{style:{textAlign:"center"},children:[(0,So.jsx)("p",{style:{color:aC.secondary,marginBottom:"2rem",fontSize:"1.1rem"},children:"\ud504\ub85c\uc81d\ud2b8 \uc124\uacc4 \ubb38\uc11c, \ubc31\uc5d4\ub4dc \uad6c\uc870 \ubc0f API \uba85\uc138\uc11c\ub97c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,So.jsxs)(RC,{href:tC,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,So.jsx)(zh,{}),"\ud504\ub85c\uc81d\ud2b8 \uc124\uacc4 \ubb38\uc11c \ubcf4\uae30 (PDF)"]})]})]})]}),(0,So.jsx)(Lp,{children:n&&(0,So.jsx)(LC,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>r(null),children:(0,So.jsxs)(IC,{onClick:e=>e.stopPropagation(),children:[(0,So.jsx)(BC,{onClick:()=>r(null),children:"\xd7"}),(0,So.jsx)("img",{src:n.src,alt:n.title})]})})})]})},OC={colors:{primary:"#0a0a1a",secondary:"#3b82f6",accent:"#8b5cf6",text:{primary:"#ffffff",secondary:"rgba(255, 255, 255, 0.7)",tertiary:"rgba(255, 255, 255, 0.5)"},background:{primary:"#000000",secondary:"#0a0a1a",tertiary:"rgba(10, 10, 26, 0.5)"}}},DC=Gt.div`
  min-height: 100vh;
  background: radial-gradient(ellipse at top, #0a0a1a 0%, #000000 50%, #0a0a1a 100%);
  color: ${OC.colors.text.primary};
  overflow-x: hidden;
  position: relative;
  cursor: none; /* Hide default cursor for emoji cursor */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.03) 0%, transparent 30%);
    pointer-events: none;
    z-index: 0;
  }

  * {
    cursor: none !important;
  }

  @media (max-width: 768px) {
    cursor: auto;
    * {
      cursor: auto !important;
    }
  }
`,FC=Gt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.02;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    filter: contrast(100%) brightness(100%);
  }
`,VC=()=>{const e=xn(0),n=xn(0),r=gi(e,{damping:50,stiffness:200}),i=gi(n,{damping:50,stiffness:200});(0,t.useEffect)(()=>{const t=t=>{e.set(t.clientX-window.innerWidth/2),n.set(t.clientY-window.innerHeight/2)};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[e,n]);return(0,So.jsxs)(wp,{children:[(0,So.jsx)(Ap,{style:{x:r,y:i}}),(0,So.jsx)(jp,{animate:{rotate:[0,360],scale:[1,1.1,1]},transition:{duration:60,repeat:1/0,ease:"linear"}}),[...Array(12)].map((e,t)=>(0,So.jsx)(yp,{style:{width:300*Math.random()+100,height:300*Math.random()+100,top:100*Math.random()+"%",left:100*Math.random()+"%"},gradient:`radial-gradient(circle, rgba(${t%3===0?"59, 130, 246":t%3===1?"147, 51, 234":"16, 185, 129"}, 0.08) 0%, transparent 70%)`,blur:3*Math.random()+1+"px",animate:{scale:[1,1.3,1],opacity:[.3,.7,.3],x:[0,100*Math.random()-50,0],y:[0,100*Math.random()-50,0]},transition:{duration:10*Math.random()+10,repeat:1/0,ease:"easeInOut",delay:2*t}},`orb-${t}`)),[...Array(8)].map((e,t)=>(0,So.jsx)(vp,{style:{width:150+50*t,height:150+50*t,top:20+10*t+"%",right:10+8*t+"%"},animate:{rotate:360},transition:{duration:10+5*t,repeat:1/0,ease:"linear"}},`ring-${t}`)),[...Array(15)].map((e,t)=>(0,So.jsx)(bp,{style:{height:200*Math.random()+100,left:100*Math.random()+"%",top:100*Math.random()+"%"},animate:{scaleY:[0,1,0],opacity:[0,1,0]},transition:{duration:3*Math.random()+2,repeat:1/0,delay:5*Math.random(),ease:"easeInOut"}},`stream-${t}`)),["const developer = new FrontendExpert();","React.useState(() => innovation);","Vue.createApp({ magic: true });","Flutter.build(() => dreams);","if (passion === true) { code(); }","function solve(problem) { return creativity; }","const skills = [...experience, learning];","export default Excellence;"].map((e,t)=>(0,So.jsx)(kp,{style:{top:90*Math.random()+5+"%",left:80*Math.random()+10+"%",transform:`rotate(${30*Math.random()-15}deg)`},animate:{opacity:[0,1,1,0],y:[0,-20,-40,-60]},transition:{duration:8,repeat:1/0,delay:2*t,ease:"linear"},children:e},`code-${t}`)),[...Array(25)].map((e,t)=>(0,So.jsx)(Sp,{style:{top:100*Math.random()+"%",left:100*Math.random()+"%"},color:`rgba(${t%3===0?"59, 130, 246":t%3===1?"147, 51, 234":"16, 185, 129"}, 0.8)`,animate:{scale:[1,2,1],opacity:[.5,1,.5],x:[0,200*Math.random()-100,0],y:[0,200*Math.random()-100,0]},transition:{duration:8*Math.random()+5,repeat:1/0,ease:"easeInOut",delay:5*Math.random()}},`particle-${t}`))]})};const _C=function(){return(0,t.useEffect)(()=>{document.documentElement.style.scrollBehavior="smooth"},[]),(0,So.jsxs)(Ft,{theme:OC,children:[(0,So.jsx)(Cp,{}),(0,So.jsx)(fo,{children:(0,So.jsxs)(DC,{children:[(0,So.jsx)(FC,{}),(0,So.jsx)(VC,{}),(0,So.jsx)(Ao,{}),(0,So.jsx)(Rm,{}),(0,So.jsxs)(Ia,{children:[(0,So.jsx)(Ra,{path:"/",element:(0,So.jsxs)(So.Fragment,{children:[(0,So.jsx)(Ef,{}),(0,So.jsx)($f,{}),(0,So.jsx)(Jx,{}),(0,So.jsx)(Wg,{}),(0,So.jsx)(cx,{}),(0,So.jsx)(fv,{}),(0,So.jsx)(ow,{}),(0,So.jsx)(kw,{})]})}),(0,So.jsx)(Ra,{path:"/project/littlebank",element:(0,So.jsx)(Uj,{})}),(0,So.jsx)(Ra,{path:"/project/tripplai",element:(0,So.jsx)(Gk,{})}),(0,So.jsx)(Ra,{path:"/project/devhub",element:(0,So.jsx)(cA,{})}),(0,So.jsx)(Ra,{path:"/project/dashboard",element:(0,So.jsx)(GA,{})}),(0,So.jsx)(Ra,{path:"/project/dogfoot",element:(0,So.jsx)(NC,{})})]})]})})]})},HC=e=>{e&&e instanceof Function&&n.e(206).then(n.bind(n,8206)).then(t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)})};r.createRoot(document.getElementById("root")).render((0,So.jsx)(t.StrictMode,{children:(0,So.jsx)(_C,{})})),HC()})()})();
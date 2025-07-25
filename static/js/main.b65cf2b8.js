/*! For license information please see main.b65cf2b8.js.LICENSE.txt */
(()=>{var e={85:(e,t,n)=>{"use strict";var r=n(340),i=n(950),a=n(119);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,h=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var T=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var z=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var j=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=j&&e[j]||e["@@iterator"])?e:null}var _=Symbol.for("react.client.reference");function M(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===_?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case v:return"StrictMode";case S:return"Suspense";case P:return"SuspenseList";case T:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:M(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return M(e(t))}catch(n){}}return null}var R=Array.isArray,L=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},D=[],I=-1;function V(e){return{current:e}}function B(e){0>I||(e.current=D[I],D[I]=null,I--)}function F(e,t){I++,D[I]=e.current,e.current=t}var $=V(null),H=V(null),U=V(null),W=V(null);function K(e,t){switch(F(U,t),F(H,e),F($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=ad(t=id(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B($),F($,e)}function Y(){B($),B(H),B(U)}function q(e){null!==e.memoizedState&&F(W,e);var t=$.current,n=ad(t,e.type);t!==n&&(F(H,e),F($,n))}function G(e){H.current===e&&(B($),B(H)),W.current===e&&(B(W),qd._currentValue=N)}var X=Object.prototype.hasOwnProperty,Q=r.unstable_scheduleCallback,Z=r.unstable_cancelCallback,J=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ie=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,oe=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function fe(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var he=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(pe(e)/me|0)|0},pe=Math.log,me=Math.LN2;var ge=256,ve=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~a)?i=ye(r):0!==(o&=s)?i=ye(o):n||0!==(n=s&~e)&&(i=ye(n)):0!==(s=r&~a)?i=ye(s):0!==o?i=ye(o):n||0!==(n=r&~e)&&(i=ye(n)),0===i?0:0!==t&&t!==i&&0===(t&a)&&((a=i&-i)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:i}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ke(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function Se(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function Pe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ee(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-he(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Te(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-he(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function je(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=O.p;return 0!==e?e:void 0===(e=window.event)?32:uf(e.type)}var _e=Math.random().toString(36).slice(2),Me="__reactFiber$"+_e,Re="__reactProps$"+_e,Le="__reactContainer$"+_e,Oe="__reactEvents$"+_e,Ne="__reactListeners$"+_e,De="__reactHandles$"+_e,Ie="__reactResources$"+_e,Ve="__reactMarker$"+_e;function Be(e){delete e[Me],delete e[Re],delete e[Oe],delete e[Ne],delete e[De]}function Fe(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Le]||n[Me]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bd(e);null!==e;){if(n=e[Me])return n;e=bd(e)}return t}n=(e=n).parentNode}return null}function $e(e){if(e=e[Me]||e[Le]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ue(e){var t=e[Ie];return t||(t=e[Ie]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Ve]=!0}var Ke=new Set,Ye={};function qe(e,t){Ge(e,t),Ge(e+"Capture",t)}function Ge(e,t){for(Ye[e]=t,e=0;e<t.length;e++)Ke.add(t[e])}var Xe,Qe,Ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},et={};function tt(e,t,n){if(i=t,X.call(et,i)||!X.call(Je,i)&&(Ze.test(i)?et[i]=!0:(Je[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Xe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xe=t&&t[1]||"",Qe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Xe+e+Qe}var at=!1;function ot(e,t){if(!e||at)return"";at=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{at=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return it("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var pt=/[\n"\\]/g;function mt(e){return e.replace(pt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?yt(e,o,ct(t)):null!=n?yt(e,o,ct(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function vt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function yt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(R(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Pt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Pt(e,a,t[a])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jt(e){return zt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function _t(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Mt=null,Rt=null;function Lt(e){var t=$e(e);if(t&&(e=t.stateNode)){var n=e[Re]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Re]||null;if(!i)throw Error(o(90));gt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var Ot=!1;function Nt(e,t,n){if(Ot)return e(t,n);Ot=!0;try{return e(t)}finally{if(Ot=!1,(null!==Mt||null!==Rt)&&(Fc(),Mt&&(t=Mt,e=Rt,Rt=Mt=null,Lt(t),e)))for(t=0;t<e.length;t++)Lt(e[t])}}function Dt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Re]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var It=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Vt=!1;if(It)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){Vt=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch(Lf){Vt=!1}var Ft=null,$t=null,Ht=null;function Ut(){if(Ht)return Ht;var e,t,n=$t,r=n.length,i="value"in Ft?Ft.value:Ft.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Ht=i.slice(e,1<t?1-t:void 0)}function Wt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Kt(){return!0}function Yt(){return!1}function qt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Kt:Yt,this.isPropagationStopped=Yt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Kt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Kt)},persist:function(){},isPersistent:Kt}),t}var Gt,Xt,Qt,Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jt=qt(Zt),en=f({},Zt,{view:0,detail:0}),tn=qt(en),nn=f({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qt&&(Qt&&"mousemove"===e.type?(Gt=e.screenX-Qt.screenX,Xt=e.screenY-Qt.screenY):Xt=Gt=0,Qt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Xt}}),rn=qt(nn),an=qt(f({},nn,{dataTransfer:0})),on=qt(f({},en,{relatedTarget:0})),sn=qt(f({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=qt(f({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=qt(f({},Zt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=fn[e])&&!!t[e]}function pn(){return hn}var mn=qt(f({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Wt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return"keypress"===e.type?Wt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Wt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=qt(f({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=qt(f({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn})),yn=qt(f({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=qt(f({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=qt(f({},Zt,{newState:0,oldState:0})),wn=[9,13,27,32],kn=It&&"CompositionEvent"in window,Sn=null;It&&"documentMode"in document&&(Sn=document.documentMode);var Pn=It&&"TextEvent"in window&&!Sn,En=It&&(!kn||Sn&&8<Sn&&11>=Sn),Cn=String.fromCharCode(32),Tn=!1;function zn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var An=!1;var _n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!_n[e.type]:"textarea"===t}function Rn(e,t,n,r){Mt?Rt?Rt.push(r):Rt=[r]:Mt=r,0<(t=Uu(t,"onChange")).length&&(n=new Jt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,On=null;function Nn(e){Nu(e,0)}function Dn(e){if(ft(He(e)))return e}function In(e,t){if("change"===e)return t}var Vn=!1;if(It){var Bn;if(It){var Fn="oninput"in document;if(!Fn){var $n=document.createElement("div");$n.setAttribute("oninput","return;"),Fn="function"===typeof $n.oninput}Bn=Fn}else Bn=!1;Vn=Bn&&(!document.documentMode||9<document.documentMode)}function Hn(){Ln&&(Ln.detachEvent("onpropertychange",Un),On=Ln=null)}function Un(e){if("value"===e.propertyName&&Dn(On)){var t=[];Rn(t,On,e,_t(e)),Nt(Nn,t)}}function Wn(e,t,n){"focusin"===e?(Hn(),On=n,(Ln=t).attachEvent("onpropertychange",Un)):"focusout"===e&&Hn()}function Kn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Dn(On)}function Yn(e,t){if("click"===e)return Dn(t)}function qn(e,t){if("input"===e||"change"===e)return Dn(t)}var Gn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Xn(e,t){if(Gn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!X.call(t,i)||!Gn(e[i],t[i]))return!1}return!0}function Qn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zn(e,t){var n,r=Qn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qn(r)}}function Jn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Jn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=It&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,ar=null,or=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==ht(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ar&&Xn(ar,r)||(ar=r,0<(r=Uu(ir,"onSelect")).length&&(t=new Jt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function fr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}It&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var hr=fr("animationend"),pr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),vr=fr("transitionstart"),yr=fr("transitioncancel"),br=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){xr.set(e,t),qe(t,[e])}wr.push("scrollEnd");var Sr=new WeakMap;function Pr(e,t){if("object"===typeof e&&null!==e){var n=Sr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},Sr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Er=[],Cr=0,Tr=0;function zr(){for(var e=Cr,t=Tr=Cr=0;t<e;){var n=Er[t];Er[t++]=null;var r=Er[t];Er[t++]=null;var i=Er[t];Er[t++]=null;var a=Er[t];if(Er[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&Mr(n,i,a)}}function jr(e,t,n,r){Er[Cr++]=e,Er[Cr++]=t,Er[Cr++]=n,Er[Cr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return jr(e,t,n,r),Rr(e)}function _r(e,t){return jr(e,null,null,t),Rr(e)}function Mr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,i&&null!==t&&(i=31-he(n),null===(r=(e=a.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),a):null}function Rr(e){if(50<Mc)throw Mc=0,Rc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Lr={};function Or(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,t,n,r){return new Or(e,t,n,r)}function Dr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ir(e,t){var n=e.alternate;return null===n?((n=Nr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Vr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Br(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)Dr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,$.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case T:return(e=Nr(31,n,t,i)).elementType=T,e.lanes=a,e;case g:return Fr(n.children,i,a,t);case v:s=8,i|=24;break;case y:return(e=Nr(12,n,t,2|i)).elementType=y,e.lanes=a,e;case S:return(e=Nr(13,n,t,i)).elementType=S,e.lanes=a,e;case P:return(e=Nr(19,n,t,i)).elementType=P,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:s=10;break e;case x:s=9;break e;case k:s=11;break e;case E:s=14;break e;case C:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Nr(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Fr(e,t,n,r){return(e=Nr(7,e,r,t)).lanes=n,e}function $r(e,t,n){return(e=Nr(6,e,null,t)).lanes=n,e}function Hr(e,t,n){return(t=Nr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ur=[],Wr=0,Kr=null,Yr=0,qr=[],Gr=0,Xr=null,Qr=1,Zr="";function Jr(e,t){Ur[Wr++]=Yr,Ur[Wr++]=Kr,Kr=e,Yr=t}function ei(e,t,n){qr[Gr++]=Qr,qr[Gr++]=Zr,qr[Gr++]=Xr,Xr=e;var r=Qr;e=Zr;var i=32-he(r)-1;r&=~(1<<i),n+=1;var a=32-he(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qr=1<<32-he(t)+i|n<<i|r,Zr=a+e}else Qr=1<<a|n<<i|r,Zr=e}function ti(e){null!==e.return&&(Jr(e,1),ei(e,1,0))}function ni(e){for(;e===Kr;)Kr=Ur[--Wr],Ur[Wr]=null,Yr=Ur[--Wr],Ur[Wr]=null;for(;e===Xr;)Xr=qr[--Gr],qr[Gr]=null,Zr=qr[--Gr],qr[Gr]=null,Qr=qr[--Gr],qr[Gr]=null}var ri=null,ii=null,ai=!1,oi=null,si=!1,li=Error(o(519));function ci(e){throw mi(Pr(Error(o(418,"")),e)),li}function ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Me]=e,t[Re]=r,n){case"dialog":Du("cancel",t),Du("close",t);break;case"iframe":case"object":case"embed":Du("load",t);break;case"video":case"audio":for(n=0;n<Lu.length;n++)Du(Lu[n],t);break;case"source":Du("error",t);break;case"img":case"image":case"link":Du("error",t),Du("load",t);break;case"details":Du("toggle",t);break;case"input":Du("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Du("invalid",t);break;case"textarea":Du("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Xu(t.textContent,n)?(null!=r.popover&&(Du("beforetoggle",t),Du("toggle",t)),null!=r.onScroll&&Du("scroll",t),null!=r.onScrollEnd&&Du("scrollend",t),null!=r.onClick&&(t.onclick=Qu),t=!0):t=!1,t||ci(e)}function di(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 13:return void(si=!1);case 27:case 3:return void(si=!0);default:ri=ri.return}}function fi(e){if(e!==ri)return!1;if(!ai)return di(e),ai=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||od(e.type,e.memoizedProps)),t=!t),t&&ii&&ci(e),di(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ii=vd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ii=null}}else 27===n?(n=ii,hd(e.type)?(e=yd,yd=null,ii=e):ii=n):ii=ri?vd(e.stateNode.nextSibling):null;return!0}function hi(){ii=ri=null,ai=!1}function pi(){var e=oi;return null!==e&&(null===bc?bc=e:bc.push.apply(bc,e),oi=null),e}function mi(e){null===oi?oi=[e]:oi.push(e)}var gi=V(null),vi=null,yi=null;function bi(e,t,n){F(gi,t._currentValue),t._currentValue=n}function xi(e){e._currentValue=gi.current,B(gi)}function wi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ki(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),wi(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),wi(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function Si(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Gn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===W.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(qd):e=[qd])}i=i.return}null!==e&&ki(t,e,n,r),t.flags|=262144}function Pi(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ei(e){vi=e,yi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ci(e){return zi(vi,e)}function Ti(e,t){return null===vi&&Ei(e),zi(e,t)}function zi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===yi){if(null===e)throw Error(o(308));yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yi=yi.next=t;return n}var ji="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ai=r.unstable_scheduleCallback,_i=r.unstable_NormalPriority,Mi={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ri(){return{controller:new ji,data:new Map,refCount:0}}function Li(e){e.refCount--,0===e.refCount&&Ai(_i,function(){e.controller.abort()})}var Oi=null,Ni=0,Di=0,Ii=null;function Vi(){if(0===--Ni&&null!==Oi){null!==Ii&&(Ii.status="fulfilled");var e=Oi;Oi=null,Di=0,Ii=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Bi=L.S;L.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Oi){var n=Oi=[];Ni=0,Di=ju(),Ii={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ni++,t.then(Vi,Vi)}(0,t),null!==Bi&&Bi(e,t)};var Fi=V(null);function $i(){var e=Fi.current;return null!==e?e:rc.pooledCache}function Hi(e,t){F(Fi,null===t?Fi.current:t.pool)}function Ui(){var e=$i();return null===e?null:{parent:Mi._currentValue,pool:e}}var Wi=Error(o(460)),Ki=Error(o(474)),Yi=Error(o(542)),qi={then:function(){}};function Gi(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Xi(){}function Qi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Xi,Xi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e;default:if("string"===typeof t.status)t.then(Xi,Xi);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e}throw Zi=t,Wi}}var Zi=null;function Ji(){if(null===Zi)throw Error(o(459));var e=Zi;return Zi=null,e}function ea(e){if(e===Wi||e===Yi)throw Error(o(483))}var ta=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Rr(e),Mr(e,null,n),t}return jr(e,r,t,n),Rr(e)}function oa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}function sa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var la=!1;function ca(){if(la){if(null!==Ii)throw Ii}}function ua(e,t,n,r){la=!1;var i=e.updateQueue;ta=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var h=-536870913&s.lane,p=h!==s.lane;if(p?(ac&h)===h:(r&h)===h){0!==h&&h===Di&&(la=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;h=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,h);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(h="function"===typeof(m=g.payload)?m.call(v,d,h):m)||void 0===h)break e;d=f({},d,h);break e;case 2:ta=!0}}null!==(h=s.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=i.callbacks)?i.callbacks=[h]:p.push(h))}else p={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=p,l=d):u=u.next=p,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===a&&(i.shared.lanes=0),hc|=o,e.lanes=o,e.memoizedState=d}}function da(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function fa(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)da(n[e],t)}var ha=V(null),pa=V(0);function ma(e,t){F(pa,e=dc),F(ha,t),dc=e|t.baseLanes}function ga(){F(pa,dc),F(ha,ha.current)}function va(){dc=pa.current,B(ha),B(pa)}var ya=0,ba=null,xa=null,wa=null,ka=!1,Sa=!1,Pa=!1,Ea=0,Ca=0,Ta=null,za=0;function ja(){throw Error(o(321))}function Aa(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function _a(e,t,n,r,i,a){return ya=a,ba=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=null===e||null===e.memoizedState?Ko:Yo,Pa=!1,a=n(r,i),Pa=!1,Sa&&(a=Ra(t,n,r,i)),Ma(e),a}function Ma(e){L.H=Wo;var t=null!==xa&&null!==xa.next;if(ya=0,wa=xa=ba=null,ka=!1,Ca=0,Ta=null,t)throw Error(o(300));null===e||Ts||null!==(e=e.dependencies)&&Pi(e)&&(Ts=!0)}function Ra(e,t,n,r){ba=e;var i=0;do{if(Sa&&(Ta=null),Ca=0,Sa=!1,25<=i)throw Error(o(301));if(i+=1,wa=xa=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}L.H=qo,a=t(n,r)}while(Sa);return a}function La(){var e=L.H,t=e.useState()[0];return t="function"===typeof t.then?Ba(t):t,e=e.useState()[0],(null!==xa?xa.memoizedState:null)!==e&&(ba.flags|=1024),t}function Oa(){var e=0!==Ea;return Ea=0,e}function Na(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Da(e){if(ka){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ka=!1}ya=0,wa=xa=ba=null,Sa=!1,Ca=Ea=0,Ta=null}function Ia(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wa?ba.memoizedState=wa=e:wa=wa.next=e,wa}function Va(){if(null===xa){var e=ba.alternate;e=null!==e?e.memoizedState:null}else e=xa.next;var t=null===wa?ba.memoizedState:wa.next;if(null!==t)wa=t,xa=e;else{if(null===e){if(null===ba.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(xa=e).memoizedState,baseState:xa.baseState,baseQueue:xa.baseQueue,queue:xa.queue,next:null},null===wa?ba.memoizedState=wa=e:wa=wa.next=e}return wa}function Ba(e){var t=Ca;return Ca+=1,null===Ta&&(Ta=[]),e=Qi(Ta,e,t),t=ba,null===(null===wa?t.memoizedState:wa.next)&&(t=t.alternate,L.H=null===t||null===t.memoizedState?Ko:Yo),e}function Fa(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Ba(e);if(e.$$typeof===w)return Ci(e)}throw Error(o(438,String(e)))}function $a(e){var t=null,n=ba.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=ba.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=z;return t.index++,n}function Ha(e,t){return"function"===typeof t?t(e):t}function Ua(e){return Wa(Va(),xa,e)}function Wa(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(ac&f)===f:(ya&f)===f){var h=u.revertLane;if(0===h)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Di&&(d=!0);else{if((ya&h)===h){u=u.next,h===Di&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,s=a):c=c.next=f,ba.lanes|=h,hc|=h}f=u.action,Pa&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else h={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,s=a):c=c.next=h,ba.lanes|=f,hc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?s=a:c.next=l,!Gn(a,e.memoizedState)&&(Ts=!0,d&&null!==(n=Ii)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ka(e){var t=Va(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Gn(a,t.memoizedState)||(Ts=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ya(e,t,n){var r=ba,i=Va(),a=ai;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Gn((xa||i).memoizedState,n);if(s&&(i.memoizedState=n,Ts=!0),i=i.queue,vo(2048,8,Xa.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==wa&&1&wa.memoizedState.tag){if(r.flags|=2048,po(9,{destroy:void 0,resource:void 0},Ga.bind(null,r,i,n,t),null),null===rc)throw Error(o(349));a||0!==(124&ya)||qa(r,t,n)}return n}function qa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ba.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ga(e,t,n,r){t.value=n,t.getSnapshot=r,Qa(t)&&Za(e)}function Xa(e,t,n){return n(function(){Qa(t)&&Za(e)})}function Qa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch(r){return!0}}function Za(e){var t=_r(e,2);null!==t&&Nc(t,e,2)}function Ja(e){var t=Ia();if("function"===typeof e){var n=e;if(e=n(),Pa){fe(!0);try{n()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:e},t}function eo(e,t,n,r){return e.baseState=n,Wa(e,xa,"function"===typeof r?r:Ha)}function to(e,t,n,r,i){if($o(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==L.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,no(t,a)):(a.next=n.next,t.pending=n.next=a)}}function no(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=L.T,o={};L.T=o;try{var s=n(i,r),l=L.S;null!==l&&l(o,s),ro(e,t,s)}catch(c){ao(e,t,c)}finally{L.T=a}}else try{ro(e,t,a=n(i,r))}catch(u){ao(e,t,u)}}function ro(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){io(e,t,n)},function(n){return ao(e,t,n)}):io(e,t,n)}function io(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function ao(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==r)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function lo(e,t){if(ai){var n=rc.formState;if(null!==n){e:{var r=ba;if(ai){if(ii){t:{for(var i=ii,a=si;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=vd(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){ii=vd(i.nextSibling),r="F!"===i.data;break e}}ci(r)}r=!1}r&&(t=n[0])}}return(n=Ia()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},n.queue=r,n=Vo.bind(null,ba,r),r.dispatch=n,r=Ja(!1),a=Fo.bind(null,ba,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Ia()).queue=i,n=to.bind(null,ba,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function co(e){return uo(Va(),xa,e)}function uo(e,t,n){if(t=Wa(e,t,so)[0],e=Ua(Ha)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Ba(t)}catch(o){if(o===Wi)throw Yi;throw o}else r=t;var i=(t=Va()).queue,a=i.dispatch;return n!==t.memoizedState&&(ba.flags|=2048,po(9,{destroy:void 0,resource:void 0},fo.bind(null,i,n),null)),[r,a,e]}function fo(e,t){e.action=t}function ho(e){var t=Va(),n=xa;if(null!==n)return uo(t,n,e);Va(),t=t.memoizedState;var r=(n=Va()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function po(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=ba.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function mo(){return Va().memoizedState}function go(e,t,n,r){var i=Ia();r=void 0===r?null:r,ba.flags|=e,i.memoizedState=po(1|t,{destroy:void 0,resource:void 0},n,r)}function vo(e,t,n,r){var i=Va();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==xa&&null!==r&&Aa(r,xa.memoizedState.deps)?i.memoizedState=po(t,a,n,r):(ba.flags|=e,i.memoizedState=po(1|t,a,n,r))}function yo(e,t){go(8390656,8,e,t)}function bo(e,t){vo(2048,8,e,t)}function xo(e,t){return vo(4,2,e,t)}function wo(e,t){return vo(4,4,e,t)}function ko(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function So(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vo(4,4,ko.bind(null,t,e),n)}function Po(){}function Eo(e,t){var n=Va();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Co(e,t){var n=Va();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Aa(t,r[1]))return r[0];if(r=e(),Pa){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r}function To(e,t,n){return void 0===n||0!==(1073741824&ya)?e.memoizedState=t:(e.memoizedState=n,e=Oc(),ba.lanes|=e,hc|=e,n)}function zo(e,t,n,r){return Gn(n,t)?n:null!==ha.current?(e=To(e,n,r),Gn(e,t)||(Ts=!0),e):0===(42&ya)?(Ts=!0,e.memoizedState=n):(e=Oc(),ba.lanes|=e,hc|=e,t)}function jo(e,t,n,r,i){var a=O.p;O.p=0!==a&&8>a?a:8;var o=L.T,s={};L.T=s,Fo(e,!1,t,n);try{var l=i(),c=L.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)Bo(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(l,r),Lc());else Bo(e,t,r,Lc())}catch(u){Bo(e,t,{then:function(){},status:"rejected",reason:u},Lc())}finally{O.p=a,L.T=o}}function Ao(){}function _o(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=Mo(e).queue;jo(e,i,t,N,null===n?Ao:function(){return Ro(e),n(r)})}function Mo(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:N},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Ro(e){Bo(e,Mo(e).next.queue,{},Lc())}function Lo(){return Ci(qd)}function Oo(){return Va().memoizedState}function No(){return Va().memoizedState}function Do(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Lc(),r=aa(t,e=ia(n),n);return null!==r&&(Nc(r,t,n),oa(r,t,n)),t={cache:Ri()},void(e.payload=t)}t=t.return}}function Io(e,t,n){var r=Lc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},$o(e)?Ho(t,n):null!==(n=Ar(e,t,n,r))&&(Nc(n,e,r),Uo(n,t,r))}function Vo(e,t,n){Bo(e,t,n,Lc())}function Bo(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if($o(e))Ho(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Gn(s,o))return jr(e,t,i,0),null===rc&&zr(),!1}catch(l){}if(null!==(n=Ar(e,t,i,r)))return Nc(n,e,r),Uo(n,t,r),!0}return!1}function Fo(e,t,n,r){if(r={lane:2,revertLane:ju(),action:r,hasEagerState:!1,eagerState:null,next:null},$o(e)){if(t)throw Error(o(479))}else null!==(t=Ar(e,n,r,2))&&Nc(t,e,2)}function $o(e){var t=e.alternate;return e===ba||null!==t&&t===ba}function Ho(e,t){Sa=ka=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uo(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}var Wo={readContext:Ci,use:Fa,useCallback:ja,useContext:ja,useEffect:ja,useImperativeHandle:ja,useLayoutEffect:ja,useInsertionEffect:ja,useMemo:ja,useReducer:ja,useRef:ja,useState:ja,useDebugValue:ja,useDeferredValue:ja,useTransition:ja,useSyncExternalStore:ja,useId:ja,useHostTransitionStatus:ja,useFormState:ja,useActionState:ja,useOptimistic:ja,useMemoCache:ja,useCacheRefresh:ja},Ko={readContext:Ci,use:Fa,useCallback:function(e,t){return Ia().memoizedState=[e,void 0===t?null:t],e},useContext:Ci,useEffect:yo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,ko.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Ia();t=void 0===t?null:t;var r=e();if(Pa){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ia();if(void 0!==n){var i=n(t);if(Pa){fe(!0);try{n(t)}finally{fe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Io.bind(null,ba,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ia().memoizedState=e},useState:function(e){var t=(e=Ja(e)).queue,n=Vo.bind(null,ba,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Po,useDeferredValue:function(e,t){return To(Ia(),e,t)},useTransition:function(){var e=Ja(!1);return e=jo.bind(null,ba,e.queue,!0,!1),Ia().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ba,i=Ia();if(ai){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===rc)throw Error(o(349));0!==(124&ac)||qa(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yo(Xa.bind(null,r,a,e),[e]),r.flags|=2048,po(9,{destroy:void 0,resource:void 0},Ga.bind(null,r,a,n,t),null),n},useId:function(){var e=Ia(),t=rc.identifierPrefix;if(ai){var n=Zr;t="\xab"+t+"R"+(n=(Qr&~(1<<32-he(Qr)-1)).toString(32)+n),0<(n=Ea++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=za++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Lo,useFormState:lo,useActionState:lo,useOptimistic:function(e){var t=Ia();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fo.bind(null,ba,!0,n),n.dispatch=t,[e,t]},useMemoCache:$a,useCacheRefresh:function(){return Ia().memoizedState=Do.bind(null,ba)}},Yo={readContext:Ci,use:Fa,useCallback:Eo,useContext:Ci,useEffect:bo,useImperativeHandle:So,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:Co,useReducer:Ua,useRef:mo,useState:function(){return Ua(Ha)},useDebugValue:Po,useDeferredValue:function(e,t){return zo(Va(),xa.memoizedState,e,t)},useTransition:function(){var e=Ua(Ha)[0],t=Va().memoizedState;return["boolean"===typeof e?e:Ba(e),t]},useSyncExternalStore:Ya,useId:Oo,useHostTransitionStatus:Lo,useFormState:co,useActionState:co,useOptimistic:function(e,t){return eo(Va(),0,e,t)},useMemoCache:$a,useCacheRefresh:No},qo={readContext:Ci,use:Fa,useCallback:Eo,useContext:Ci,useEffect:bo,useImperativeHandle:So,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:Co,useReducer:Ka,useRef:mo,useState:function(){return Ka(Ha)},useDebugValue:Po,useDeferredValue:function(e,t){var n=Va();return null===xa?To(n,e,t):zo(n,xa.memoizedState,e,t)},useTransition:function(){var e=Ka(Ha)[0],t=Va().memoizedState;return["boolean"===typeof e?e:Ba(e),t]},useSyncExternalStore:Ya,useId:Oo,useHostTransitionStatus:Lo,useFormState:ho,useActionState:ho,useOptimistic:function(e,t){var n=Va();return null!==xa?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:$a,useCacheRefresh:No},Go=null,Xo=0;function Qo(e){var t=Xo;return Xo+=1,null===Go&&(Go=[]),Qi(Go,e,t)}function Zo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Jo(e,t){if(t.$$typeof===h)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Ir(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=$r(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===C&&es(a)===t.type)?(Zo(t=i(t,n.props),n),t.return=e,t):(Zo(t=Br(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hr(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Fr(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=$r(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case p:return Zo(n=Br(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Hr(t,e.mode,n)).return=e,t;case C:return f(e,t=(0,t._init)(t._payload),n)}if(R(t)||A(t))return(t=Fr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,Qo(t),n);if(t.$$typeof===w)return f(e,Ti(e,t),n);Jo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case p:return n.key===i?c(e,t,n,r):null;case m:return n.key===i?u(e,t,n,r):null;case C:return h(e,t,n=(i=n._init)(n._payload),r)}if(R(n)||A(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return h(e,t,Qo(n),r);if(n.$$typeof===w)return h(e,t,Ti(e,n),r);Jo(e,n)}return null}function v(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case p:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case C:return v(e,t,n,r=(0,r._init)(r._payload),i)}if(R(r)||A(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return v(e,t,n,Qo(r),i);if(r.$$typeof===w)return v(e,t,n,Ti(t,r),i);Jo(t,r)}return null}function y(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case p:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===C&&es(b)===c.type){n(l,c.sibling),Zo(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Fr(u.props.children,l.mode,d,u.key)).return=l,l=d):(Zo(d=Br(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case m:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Hr(u,l.mode,d)).return=l,l=d}return s(l);case C:return y(l,c,u=(b=u._init)(u._payload),d)}if(R(u))return function(i,o,s,l){for(var c=null,u=null,d=o,p=o=0,m=null;null!==d&&p<s.length;p++){d.index>p?(m=d,d=null):m=d.sibling;var g=h(i,d,s[p],l);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(i,d),o=a(g,o,p),null===u?c=g:u.sibling=g,u=g,d=m}if(p===s.length)return n(i,d),ai&&Jr(i,p),c;if(null===d){for(;p<s.length;p++)null!==(d=f(i,s[p],l))&&(o=a(d,o,p),null===u?c=d:u.sibling=d,u=d);return ai&&Jr(i,p),c}for(d=r(d);p<s.length;p++)null!==(m=v(d,i,p,s[p],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?p:m.key),o=a(m,o,p),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach(function(e){return t(i,e)}),ai&&Jr(i,p),c}(l,c,u,d);if(A(u)){if("function"!==typeof(b=A(u)))throw Error(o(150));return function(i,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,p=s,m=s=0,g=null,y=l.next();null!==p&&!y.done;m++,y=l.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=h(i,p,y.value,c);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),s=a(b,s,m),null===d?u=b:d.sibling=b,d=b,p=g}if(y.done)return n(i,p),ai&&Jr(i,m),u;if(null===p){for(;!y.done;m++,y=l.next())null!==(y=f(i,y.value,c))&&(s=a(y,s,m),null===d?u=y:d.sibling=y,d=y);return ai&&Jr(i,m),u}for(p=r(p);!y.done;m++,y=l.next())null!==(y=v(p,i,m,y.value,c))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),s=a(y,s,m),null===d?u=y:d.sibling=y,d=y);return e&&p.forEach(function(e){return t(i,e)}),ai&&Jr(i,m),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return y(l,c,Qo(u),d);if(u.$$typeof===w)return y(l,c,Ti(l,u),d);Jo(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=$r(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{Xo=0;var i=y(e,t,n,r);return Go=null,i}catch(o){if(o===Wi||o===Yi)throw o;var a=Nr(29,o,null,e.mode);return a.lanes=r,a.return=e,a}}}var ns=ts(!0),rs=ts(!1),is=V(null),as=null;function os(e){var t=e.alternate;F(us,1&us.current),F(is,e),null===as&&(null===t||null!==ha.current||null!==t.memoizedState)&&(as=e)}function ss(e){if(22===e.tag){if(F(us,us.current),F(is,e),null===as){var t=e.alternate;null!==t&&null!==t.memoizedState&&(as=e)}}else ls()}function ls(){F(us,us.current),F(is,is.current)}function cs(e){B(is),as===e&&(as=null),B(us)}var us=V(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Lc(),i=ia(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Nc(t,e,r),oa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Lc(),i=ia(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Nc(t,e,r),oa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Lc(),r=ia(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=aa(e,r,n))&&(Nc(t,e,n),oa(t,e,n))}};function ps(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Xn(n,r)||!Xn(i,a))}function ms(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var vs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function ys(e){vs(e)}function bs(e){console.error(e)}function xs(e){vs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ks(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ss(e,t,n){return(n=ia(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Ps(e){return(e=ia(e)).tag=3,e}function Es(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ks(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){ks(t,n,r),"function"!==typeof i&&(null===Pc?Pc=new Set([this]):Pc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Cs=Error(o(461)),Ts=!1;function zs(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function js(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Ei(t),r=_a(e,t,n,o,a,i),s=Oa(),null===e||Ts?(ai&&s&&ti(t),t.flags|=1,zs(e,t,r,i),t.child):(Na(e,t,i),Gs(e,t,i))}function As(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Dr(a)||void 0!==a.defaultProps||null!==n.compare?((e=Br(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,_s(e,t,a,r,i))}if(a=e.child,!Xs(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Xn)(o,r)&&e.ref===t.ref)return Gs(e,t,i)}return t.flags|=1,(e=Ir(a,r)).ref=t.ref,e.return=t,t.child=e}function _s(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Xn(a,r)&&e.ref===t.ref){if(Ts=!1,t.pendingProps=r=a,!Xs(e,i))return t.lanes=e.lanes,Gs(e,t,i);0!==(131072&e.flags)&&(Ts=!0)}}return Os(e,t,n,r,i)}function Ms(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==a?a.baseLanes|n:n,null!==e){for(i=t.child=e.child,a=0;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return Rs(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Rs(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Hi(0,null!==a?a.cachePool:null),null!==a?ma(t,a):ga(),ss(t)}else null!==a?(Hi(0,a.cachePool),ma(t,a),ls(),t.memoizedState=null):(null!==e&&Hi(0,null),ga(),ls());return zs(e,t,i,n),t.child}function Rs(e,t,n,r){var i=$i();return i=null===i?null:{parent:Mi._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Hi(0,null),ga(),ss(t),null!==e&&Si(e,t,r,!0),null}function Ls(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Os(e,t,n,r,i){return Ei(t),n=_a(e,t,n,r,void 0,i),r=Oa(),null===e||Ts?(ai&&r&&ti(t),t.flags|=1,zs(e,t,n,i),t.child):(Na(e,t,i),Gs(e,t,i))}function Ns(e,t,n,r,i,a){return Ei(t),t.updateQueue=null,n=Ra(t,r,n,i),Ma(e),r=Oa(),null===e||Ts?(ai&&r&&ti(t),t.flags|=1,zs(e,t,n,a),t.child):(Na(e,t,a),Gs(e,t,a))}function Ds(e,t,n,r,i){if(Ei(t),null===t.stateNode){var a=Lr,o=n.contextType;"object"===typeof o&&null!==o&&(a=Ci(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=hs,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},na(t),o=n.contextType,a.context="object"===typeof o&&null!==o?Ci(o):Lr,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(fs(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&hs.enqueueReplaceState(a,a.state,null),ua(t,r,a,i),ca(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=gs(n,s);a.props=l;var c=a.context,u=n.contextType;o=Lr,"object"===typeof u&&null!==u&&(o=Ci(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&ms(t,a,r,o),ta=!1;var f=t.memoizedState;a.state=f,ua(t,r,a,i),ca(),c=t.memoizedState,s||f!==c||ta?("function"===typeof d&&(fs(t,n,d,r),c=t.memoizedState),(l=ta||ps(t,n,l,r,f,c,o))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ra(e,t),u=gs(n,o=t.memoizedProps),a.props=u,d=t.pendingProps,f=a.context,c=n.contextType,l=Lr,"object"===typeof c&&null!==c&&(l=Ci(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||f!==l)&&ms(t,a,r,l),ta=!1,f=t.memoizedState,a.state=f,ua(t,r,a,i),ca();var h=t.memoizedState;o!==d||f!==h||ta||null!==e&&null!==e.dependencies&&Pi(e.dependencies)?("function"===typeof s&&(fs(t,n,s,r),h=t.memoizedState),(u=ta||ps(t,n,u,r,f,h,l)||null!==e&&null!==e.dependencies&&Pi(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ls(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,i),t.child=ns(t,null,n,i)):zs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Gs(e,t,i),e}function Is(e,t,n,r){return hi(),t.flags|=256,zs(e,t,n,r),t.child}var Vs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bs(e){return{baseLanes:e,cachePool:Ui()}}function Fs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function $s(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(ai){if(a?os(t):ls(),ai){var l,c=ii;if(l=c){e:{for(l=c,c=si;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=vd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Xr?{id:Qr,overflow:Zr}:null,retryLane:536870912,hydrationErrors:null},(l=Nr(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ri=t,ii=null,l=!0):l=!1}l||ci(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=i.children,i=i.fallback,a?(ls(),c=Us({mode:"hidden",children:c},a=t.mode),i=Fr(i,a,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,(a=t.child).memoizedState=Bs(n),a.childLanes=Fs(e,r,n),t.memoizedState=Vs,i):(os(t),Hs(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(os(t),t.flags&=-257,t=Ws(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),a=i.fallback,c=t.mode,i=Us({mode:"visible",children:i.children},c),(a=Fr(a,c,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ns(t,e.child,null,n),(i=t.child).memoizedState=Bs(n),i.childLanes=Fs(e,r,n),t.memoizedState=Vs,t=a);else if(os(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(o(419))).stack="",i.digest=r,mi({value:i,source:null,stack:null}),t=Ws(e,t,n)}else if(Ts||Si(e,t,n,!1),r=0!==(n&e.childLanes),Ts||r){if(null!==(r=rc)&&(0!==(i=0!==((i=0!==(42&(i=n&-n))?1:ze(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,_r(e,i),Nc(r,e,i),Cs;"$?"===c.data||Yc(),t=Ws(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ii=vd(c.nextSibling),ri=t,ai=!0,oi=null,si=!1,null!==e&&(qr[Gr++]=Qr,qr[Gr++]=Zr,qr[Gr++]=Xr,Qr=e.id,Zr=e.overflow,Xr=t),(t=Hs(t,i.children)).flags|=4096);return t}return a?(ls(),a=i.fallback,c=t.mode,u=(l=e.child).sibling,(i=Ir(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?a=Ir(u,a):(a=Fr(a,c,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(c=e.child.memoizedState)?c=Bs(n):(null!==(l=c.cachePool)?(u=Mi._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Ui(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Fs(e,r,n),t.memoizedState=Vs,i):(os(t),e=(n=e.child).sibling,(n=Ir(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hs(e,t){return(t=Us({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Us(e,t){return(e=Nr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ws(e,t,n){return ns(t,e.child,null,n),(e=Hs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ks(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wi(e.return,t,n)}function Ys(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(zs(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ks(e,n,t);else if(19===e.tag)Ks(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(F(us,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ys(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ds(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ys(t,!0,n,null,a);break;case"together":Ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),hc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Si(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ir(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ir(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Pi(e))}function Qs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ts=!0;else{if(!Xs(e,n)&&0===(128&t.flags))return Ts=!1,function(e,t,n){switch(t.tag){case 3:K(t,t.stateNode.containerInfo),bi(0,Mi,e.memoizedState.cache),hi();break;case 27:case 5:q(t);break;case 4:K(t,t.stateNode.containerInfo);break;case 10:bi(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(os(t),t.flags|=128,null):0!==(n&t.child.childLanes)?$s(e,t,n):(os(t),null!==(e=Gs(e,t,n))?e.sibling:null);os(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Si(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return qs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,Ms(e,t,n);case 24:bi(0,Mi,e.memoizedState.cache)}return Gs(e,t,n)}(e,t,n);Ts=0!==(131072&e.flags)}else Ts=!1,ai&&0!==(1048576&t.flags)&&ei(t,Yr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===k){t.tag=11,t=js(null,t,r,e,n);break e}if(i===E){t.tag=14,t=As(null,t,r,e,n);break e}}throw t=M(r)||r,Error(o(306,t,""))}Dr(r)?(e=gs(r,e),t.tag=1,t=Ds(null,t,r,e,n)):(t.tag=0,t=Os(null,t,r,e,n))}return t;case 0:return Os(e,t,t.type,t.pendingProps,n);case 1:return Ds(e,t,r=t.type,i=gs(r,t.pendingProps),n);case 3:e:{if(K(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ra(e,t),ua(t,r,null,n);var s=t.memoizedState;if(r=s.cache,bi(0,Mi,r),r!==a.cache&&ki(t,[Mi],n,!0),ca(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Is(e,t,r,n);break e}if(r!==i){mi(i=Pr(Error(o(424)),t)),t=Is(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ii=vd(e.firstChild),ri=t,ai=!0,oi=null,si=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===i){t=Gs(e,t,n);break e}zs(e,t,r,n)}t=t.child}return t;case 26:return Ls(e,t),null===e?(n=zd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ai||(n=t.type,e=t.pendingProps,(r=rd(U.current).createElement(n))[Me]=t,r[Re]=e,ed(r,n,e),We(r),t.stateNode=r):t.memoizedState=zd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return q(t),null===e&&ai&&(r=t.stateNode=xd(t.type,t.pendingProps,U.current),ri=t,si=!0,i=ii,hd(t.type)?(yd=i,ii=vd(r.firstChild)):ii=i),zs(e,t,t.pendingProps.children,n),Ls(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ai&&((i=r=ii)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ve])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=vd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,si))?(t.stateNode=r,ri=t,ii=vd(r.firstChild),si=!1,i=!0):i=!1),i||ci(t)),q(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,od(i,a)?r=null:null!==s&&od(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=_a(e,t,La,null,null,n),qd._currentValue=i),Ls(e,t),zs(e,t,r,n),t.child;case 6:return null===e&&ai&&((e=n=ii)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(n,t.pendingProps,si))?(t.stateNode=n,ri=t,ii=null,e=!0):e=!1),e||ci(t)),null;case 13:return $s(e,t,n);case 4:return K(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):zs(e,t,r,n),t.child;case 11:return js(e,t,t.type,t.pendingProps,n);case 7:return zs(e,t,t.pendingProps,n),t.child;case 8:case 12:return zs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,bi(0,t.type,r.value),zs(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ei(t),r=r(i=Ci(i)),t.flags|=1,zs(e,t,r,n),t.child;case 14:return As(e,t,t.type,t.pendingProps,n);case 15:return _s(e,t,t.type,t.pendingProps,n);case 19:return qs(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Us(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Ir(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ms(e,t,n);case 24:return Ei(t),r=Ci(Mi),null===e?(null===(i=$i())&&(i=rc,a=Ri(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},na(t),bi(0,Mi,i)):(0!==(e.lanes&n)&&(ra(e,t),ua(t,null,null,n),ca()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),bi(0,Mi,r)):(r=a.cache,bi(0,Mi,r),r!==i.cache&&ki(t,[Mi],n,!0))),zs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Zs(e){e.flags|=4}function Js(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Fd(t)){if(null!==(t=is.current)&&((4194048&ac)===ac?null!==as:(62914560&ac)!==ac&&0===(536870912&ac)||t!==as))throw Zi=qi,Ki;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Se():536870912,e.lanes|=t,vc|=t)}function tl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xi(Mi),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fi(t)?Zs(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,pi())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Zs(t),null!==n?(nl(t),Js(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Zs(t),nl(t),Js(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Zs(t),nl(t),t.flags&=-16777217),null;case 27:G(t),n=U.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Zs(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}e=$.current,fi(t)?ui(t):(e=xd(i,r,n),t.stateNode=e,Zs(t))}return nl(t),null;case 5:if(G(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Zs(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}if(e=$.current,fi(t))ui(t);else{switch(i=rd(U.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Me]=t,e[Re]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Zs(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Zs(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=U.current,fi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ri))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Me]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Xu(e.nodeValue,n)))||ci(t)}else(e=rd(e).createTextNode(r))[Me]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=fi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Me]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),i=!1}else i=pi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return Y(),null===e&&Bu(t.stateNode.containerInfo),nl(t),null;case 10:return xi(t.type),nl(t),null;case 19:if(B(us),null===(i=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(a=i.rendering))if(r)tl(i,!1);else{if(0!==fc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=ds(e))){for(t.flags|=128,tl(i,!1),e=a.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Vr(n,e),n=n.sibling;return F(us,1&us.current|2),t.child}e=e.sibling}null!==i.tail&&te()>kc&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(a))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!ai)return nl(t),null}else 2*te()-i.renderingStartTime>kc&&536870912!==n&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,e=us.current,F(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),va(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&B(Fi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xi(Mi),nl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function il(e,t){switch(ni(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xi(Mi),Y(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return G(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return B(us),null;case 4:return Y(),null;case 10:return xi(t.type),null;case 22:case 23:return cs(t),va(),null!==e&&B(Fi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xi(Mi),null;default:return null}}function al(e,t){switch(ni(t),t.tag){case 3:xi(Mi),Y();break;case 26:case 27:case 5:G(t);break;case 4:Y();break;case 13:cs(t);break;case 19:B(us);break;case 10:xi(t.type);break;case 22:case 23:cs(t),va(),null!==e&&B(Fi);break;case 24:xi(Mi)}}function ol(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){uu(i,l,u)}}}r=r.next}while(r!==a)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{fa(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){uu(e,t,i)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){uu(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){uu(e,t,a)}else n.current=null}function fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){uu(e,e.return,i)}}function hl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,c=null,u=null,d=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&null!=f)switch(p){case"checked":case"value":break;case"defaultValue":c=f;default:r.hasOwnProperty(p)||Zu(e,t,p,null,r,f)}}for(var h in r){var p=r[h];if(f=n[h],r.hasOwnProperty(h)&&(null!=p||null!=f))switch(h){case"type":a=p;break;case"name":i=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:p!==f&&Zu(e,t,h,p,r,f)}}return void gt(e,s,l,c,u,d,a,i);case"select":for(a in p=s=l=h=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":p=c;default:r.hasOwnProperty(a)||Zu(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=a||null!=c))switch(i){case"value":h=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&Zu(e,t,i,a,r,c)}return t=l,n=s,r=p,void(null!=h?bt(e,!!n,h,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(l in p=h=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Zu(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":h=i;break;case"defaultValue":p=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&Zu(e,t,s,i,r,a)}return void xt(e,h,p);case"option":for(var m in n)if(h=n[m],n.hasOwnProperty(m)&&null!=h&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Zu(e,t,m,null,r,h);for(c in r)if(h=r[c],p=n[c],r.hasOwnProperty(c)&&h!==p&&(null!=h||null!=p))if("selected"===c)e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else Zu(e,t,c,h,r,p);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g)&&Zu(e,t,g,null,r,h);for(u in r)if(h=r[u],p=n[u],r.hasOwnProperty(u)&&h!==p&&(null!=h||null!=p))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:Zu(e,t,u,h,r,p)}return;default:if(Ct(t)){for(var v in n)h=n[v],n.hasOwnProperty(v)&&void 0!==h&&!r.hasOwnProperty(v)&&Ju(e,t,v,void 0,r,h);for(d in r)h=r[d],p=n[d],!r.hasOwnProperty(d)||h===p||void 0===h&&void 0===p||Ju(e,t,d,h,r,p);return}}for(var y in n)h=n[y],n.hasOwnProperty(y)&&null!=h&&!r.hasOwnProperty(y)&&Zu(e,t,y,null,r,h);for(f in r)h=r[f],p=n[f],!r.hasOwnProperty(f)||h===p||null==h&&null==p||Zu(e,t,f,h,r,p)}(r,e.type,n,t),r[Re]=t}catch(i){uu(e,e.return,i)}}function pl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&hd(e.type)||4===e.tag}function ml(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&hd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Qu));else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function yl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ed(t,r,n),t[Me]=e,t[Re]=n}catch(a){uu(e,e.return,a)}}var bl=!1,xl=!1,wl=!1,kl="function"===typeof WeakSet?WeakSet:Set,Sl=null;function Pl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Dl(e,n),4&r&&ol(5,n);break;case 1:if(Dl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){uu(n,n.return,o)}else{var i=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(Dl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{fa(e,t)}catch(o){uu(n,n.return,o)}}break;case 27:null===t&&4&r&&yl(n);case 26:case 5:Dl(e,n),null===t&&4&r&&fl(n),512&r&&ul(n,n.return);break;case 12:Dl(e,n);break;case 13:Dl(e,n),4&r&&Al(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=pu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bl)){t=null!==t&&null!==t.memoizedState||xl,i=bl;var a=xl;bl=r,(xl=t)&&!a?Vl(e,n,0!==(8772&n.subtreeFlags)):Dl(e,n),bl=i,xl=a}break;case 30:break;default:Dl(e,n)}}function El(e){var t=e.alternate;null!==t&&(e.alternate=null,El(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Be(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cl=null,Tl=!1;function zl(e,t,n){for(n=n.child;null!==n;)jl(e,t,n),n=n.sibling}function jl(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(a){}switch(n.tag){case 26:xl||dl(n,t),zl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var r=Cl,i=Tl;hd(n.type)&&(Cl=n.stateNode,Tl=!1),zl(e,t,n),wd(n.stateNode),Cl=r,Tl=i;break;case 5:xl||dl(n,t);case 6:if(r=Cl,i=Tl,Cl=null,zl(e,t,n),Tl=i,null!==(Cl=r))if(Tl)try{(9===Cl.nodeType?Cl.body:"HTML"===Cl.nodeName?Cl.ownerDocument.body:Cl).removeChild(n.stateNode)}catch(o){uu(n,t,o)}else try{Cl.removeChild(n.stateNode)}catch(o){uu(n,t,o)}break;case 18:null!==Cl&&(Tl?(pd(9===(e=Cl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),zf(e)):pd(Cl,n.stateNode));break;case 4:r=Cl,i=Tl,Cl=n.stateNode.containerInfo,Tl=!0,zl(e,t,n),Cl=r,Tl=i;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),zl(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),zl(e,t,n);break;case 21:zl(e,t,n);break;case 22:xl=(r=xl)||null!==n.memoizedState,zl(e,t,n),xl=r;break;default:zl(e,t,n)}}function Al(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{zf(e)}catch(n){uu(t,t.return,n)}}function _l(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new kl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new kl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(hd(l.type)){Cl=l.stateNode,Tl=!1;break e}break;case 5:Cl=l.stateNode,Tl=!1;break e;case 3:case 4:Cl=l.stateNode.containerInfo,Tl=!0;break e}l=l.return}if(null===Cl)throw Error(o(160));jl(a,s,i),Cl=null,Tl=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ll(t,e),t=t.sibling}var Rl=null;function Ll(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ml(t,e),Ol(e),4&r&&(sl(3,e,e.return),ol(3,e),sl(5,e,e.return));break;case 1:Ml(t,e),Ol(e),512&r&&(xl||null===n||dl(n,n.return)),64&r&&bl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Rl;if(Ml(t,e),Ol(e),512&r&&(xl||null===n||dl(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[Ve]||a[Me]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),ed(a,r,n),a[Me]=e,We(a),r=a;break e;case"link":var s=Vd("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=Vd("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Me]=e,We(a),r=a}e.stateNode=r}else Bd(i,e.type,e.stateNode);else e.stateNode=Ld(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?Bd(i,e.type,e.stateNode):Ld(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&hl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ml(t,e),Ol(e),512&r&&(xl||null===n||dl(n,n.return)),null!==n&&4&r&&hl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ml(t,e),Ol(e),512&r&&(xl||null===n||dl(n,n.return)),32&e.flags){i=e.stateNode;try{kt(i,"")}catch(p){uu(e,e.return,p)}}4&r&&null!=e.stateNode&&hl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(wl=!0);break;case 6:if(Ml(t,e),Ol(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(p){uu(e,e.return,p)}}break;case 3:if(Id=null,i=Rl,Rl=Pd(t.containerInfo),Ml(t,e),Rl=i,Ol(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{zf(t.containerInfo)}catch(p){uu(e,e.return,p)}wl&&(wl=!1,Nl(e));break;case 4:r=Rl,Rl=Pd(e.stateNode.containerInfo),Ml(t,e),Ol(e),Rl=r;break;case 12:default:Ml(t,e),Ol(e);break;case 13:Ml(t,e),Ol(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,_l(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=bl,d=xl;if(bl=u||i,xl=d||c,Ml(t,e),xl=d,bl=u,Ol(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||bl||xl||Il(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,i)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var f=c.memoizedProps.style,h=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(p){uu(c,c.return,p)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(p){uu(c,c.return,p)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,_l(e,n))));break;case 19:Ml(t,e),Ol(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,_l(e,r)));case 30:case 21:}}function Ol(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(pl(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;vl(e,ml(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(kt(a,""),n.flags&=-33),vl(e,ml(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,ml(e),s);break;default:throw Error(o(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Nl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Nl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Dl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Pl(e,t.alternate,t),t=t.sibling}function Il(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Il(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Il(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Il(t);break;case 22:null===t.memoizedState&&Il(t);break;default:Il(t)}e=e.sibling}}function Vl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Vl(i,a,n),ol(4,a);break;case 1:if(Vl(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)da(l[i],s)}catch(c){uu(r,r.return,c)}}n&&64&o&&ll(a),ul(a,a.return);break;case 27:yl(a);case 26:case 5:Vl(i,a,n),n&&null===r&&4&o&&fl(a),ul(a,a.return);break;case 12:Vl(i,a,n);break;case 13:Vl(i,a,n),n&&4&o&&Al(i,a);break;case 22:null===a.memoizedState&&Vl(i,a,n),ul(a,a.return);break;case 30:break;default:Vl(i,a,n)}t=t.sibling}}function Bl(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Li(n))}function Fl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Li(e))}function $l(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hl(e,t,n,r),t=t.sibling}function Hl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:$l(e,t,n,r),2048&i&&ol(9,t);break;case 1:case 13:default:$l(e,t,n,r);break;case 3:$l(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Li(e)));break;case 12:if(2048&i){$l(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else $l(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?$l(e,t,n,r):Wl(e,t):2&a._visibility?$l(e,t,n,r):(a._visibility|=2,Ul(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&Bl(o,t);break;case 24:$l(e,t,n,r),2048&i&&Fl(t.alternate,t)}}function Ul(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:Ul(a,o,s,l,i),ol(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?Ul(a,o,s,l,i):Wl(a,o):(u._visibility|=2,Ul(a,o,s,l,i)),i&&2048&c&&Bl(o.alternate,o);break;case 24:Ul(a,o,s,l,i),i&&2048&c&&Fl(o.alternate,o);break;default:Ul(a,o,s,l,i)}t=t.sibling}}function Wl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Wl(n,r),2048&i&&Bl(r.alternate,r);break;case 24:Wl(n,r),2048&i&&Fl(r.alternate,r);break;default:Wl(n,r)}t=t.sibling}}var Kl=8192;function Yl(e){if(e.subtreeFlags&Kl)for(e=e.child;null!==e;)ql(e),e=e.sibling}function ql(e){switch(e.tag){case 26:Yl(e),e.flags&Kl&&null!==e.memoizedState&&function(e,t,n){if(null===$d)throw Error(o(475));var r=$d;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=jd(n.href),a=e.querySelector(Ad(i));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Ud.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,void We(a);a=e.ownerDocument||e,n=_d(n),(i=kd.get(i))&&Nd(n,i),We(a=a.createElement("link"));var s=a;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ed(a,"link",n),t.instance=a}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Ud.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Rl,e.memoizedState,e.memoizedProps);break;case 5:default:Yl(e);break;case 3:case 4:var t=Rl;Rl=Pd(e.stateNode.containerInfo),Yl(e),Rl=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Kl,Kl=16777216,Yl(e),Kl=t):Yl(e))}}function Gl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Xl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Sl=r,Jl(r,e)}Gl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Ql(e),e=e.sibling}function Ql(e){switch(e.tag){case 0:case 11:case 15:Xl(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Xl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Zl(e)):Xl(e)}}function Zl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Sl=r,Jl(r,e)}Gl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Zl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Zl(t));break;default:Zl(t)}e=e.sibling}}function Jl(e,t){for(;null!==Sl;){var n=Sl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Li(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Sl=r;else e:for(n=e;null!==Sl;){var i=(r=Sl).sibling,a=r.return;if(El(r),r===n){Sl=null;break e}if(null!==i){i.return=a,Sl=i;break e}Sl=a}}}var ec={getCacheForType:function(e){var t=Ci(Mi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ic=null,ac=0,oc=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,fc=0,hc=0,pc=0,mc=0,gc=0,vc=0,yc=null,bc=null,xc=!1,wc=0,kc=1/0,Sc=null,Pc=null,Ec=0,Cc=null,Tc=null,zc=0,jc=0,Ac=null,_c=null,Mc=0,Rc=null;function Lc(){if(0!==(2&nc)&&0!==ac)return ac&-ac;if(null!==L.T){return 0!==Di?Di:ju()}return Ae()}function Oc(){0===gc&&(gc=0===(536870912&ac)||ai?ke():536870912);var e=is.current;return null!==e&&(e.flags|=32),gc}function Nc(e,t,n){(e!==rc||2!==oc&&9!==oc)&&null===e.cancelPendingCommit||(Hc(e,0),Bc(e,ac,gc,!1)),Ee(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(pc|=n),4===fc&&Bc(e,ac,gc,!1)),ku(e))}function Dc(e,t,n){if(0!==(6&nc))throw Error(o(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),i=r?function(e,t){var n=nc;nc|=2;var r=Wc(),i=Kc();rc!==e||ac!==t?(Sc=null,kc=te()+500,Hc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==oc&&null!==ic){t=ic;var a=sc;t:switch(oc){case 1:oc=0,sc=null,Jc(e,t,a,1);break;case 2:case 9:if(Gi(a)){oc=0,sc=null,Zc(t);break}t=function(){2!==oc&&9!==oc||rc!==e||(oc=7),ku(e)},a.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:Gi(a)?(oc=0,sc=null,Zc(t)):(oc=0,sc=null,Jc(e,t,a,7));break;case 5:var s=null;switch(ic.tag){case 26:s=ic.memoizedState;case 5:case 27:var l=ic;if(!s||Fd(s)){oc=0,sc=null;var c=l.sibling;if(null!==c)ic=c;else{var u=l.return;null!==u?(ic=u,eu(u)):ic=null}break t}}oc=0,sc=null,Jc(e,t,a,5);break;case 6:oc=0,sc=null,Jc(e,t,a,6);break;case 8:$c(),fc=6;break e;default:throw Error(o(462))}}Xc();break}catch(d){Uc(e,d)}return yi=vi=null,L.H=r,L.A=i,nc=n,null!==ic?0:(rc=null,ac=0,zr(),fc)}(e,t):qc(e,t,!0),a=r;;){if(0===i){cc&&!r&&Bc(e,t,0,!1);break}if(n=e.current.alternate,!a||Vc(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=yc;var c=l.current.memoizedState.isDehydrated;if(c&&(Hc(l,s).flags|=256),2!==(s=qc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=a,pc|=a,i=4;break e}a=bc,bc=i,null!==a&&(null===bc?bc=a:bc.push.apply(bc,a))}i=s}if(a=!1,2!==i)continue}}if(1===i){Hc(e,0),Bc(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Bc(r,t,gc,!lc);break e;case 2:bc=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(i=wc+300-te())){if(Bc(r,t,gc,!lc),0!==be(r,0,!0))break e;r.timeoutHandle=ld(Ic.bind(null,r,n,bc,Sc,xc,t,gc,pc,vc,lc,a,2,-0,0),i)}else Ic(r,n,bc,Sc,xc,t,gc,pc,vc,lc,a,0,-0,0)}break}i=qc(e,t,!1),a=!1}ku(e)}function Ic(e,t,n,r,i,a,s,l,c,u,d,f,h,p){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&($d={stylesheets:null,count:0,unsuspend:Hd},ql(t),null!==(f=function(){if(null===$d)throw Error(o(475));var e=$d;return e.stylesheets&&0===e.count&&Kd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Kd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=f(nu.bind(null,e,t,a,n,r,i,s,l,c,d,1,h,p)),void Bc(e,a,s,!u);nu(e,t,a,n,r,i,s,l,c)}function Vc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bc(e,t,n,r){t&=~mc,t&=~pc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-he(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&Ce(e,n,t)}function Fc(){return 0!==(6&nc)||(Su(0,!1),!1)}function $c(){if(null!==ic){if(0===oc)var e=ic.return;else yi=vi=null,Da(e=ic),Go=null,Xo=0,e=ic;for(;null!==e;)al(e.alternate,e),e=e.return;ic=null}}function Hc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),$c(),rc=e,ic=n=Ir(e.current,null),ac=t,oc=0,sc=null,lc=!1,cc=xe(e,t),uc=!1,vc=gc=mc=pc=hc=fc=0,bc=yc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-he(r),a=1<<i;t|=e[i],r&=~a}return dc=t,zr(),n}function Uc(e,t){ba=null,L.H=Wo,t===Wi||t===Yi?(t=Ji(),oc=3):t===Ki?(t=Ji(),oc=4):oc=t===Cs?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===ic&&(fc=1,ws(e,Pr(t,e.current)))}function Wc(){var e=L.H;return L.H=Wo,null===e?Wo:e}function Kc(){var e=L.A;return L.A=ec,e}function Yc(){fc=4,lc||(4194048&ac)!==ac&&null!==is.current||(cc=!0),0===(134217727&hc)&&0===(134217727&pc)||null===rc||Bc(rc,ac,gc,!1)}function qc(e,t,n){var r=nc;nc|=2;var i=Wc(),a=Kc();rc===e&&ac===t||(Sc=null,Hc(e,t)),t=!1;var o=fc;e:for(;;)try{if(0!==oc&&null!==ic){var s=ic,l=sc;switch(oc){case 8:$c(),o=6;break e;case 3:case 2:case 9:case 6:null===is.current&&(t=!0);var c=oc;if(oc=0,sc=null,Jc(e,s,l,c),n&&cc){o=0;break e}break;default:c=oc,oc=0,sc=null,Jc(e,s,l,c)}}Gc(),o=fc;break}catch(u){Uc(e,u)}return t&&e.shellSuspendCounter++,yi=vi=null,nc=r,L.H=i,L.A=a,null===ic&&(rc=null,ac=0,zr()),o}function Gc(){for(;null!==ic;)Qc(ic)}function Xc(){for(;null!==ic&&!J();)Qc(ic)}function Qc(e){var t=Qs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Zc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ns(n,t,t.pendingProps,t.type,void 0,ac);break;case 11:t=Ns(n,t,t.pendingProps,t.type.render,t.ref,ac);break;case 5:Da(t);default:al(n,t),t=Qs(n,t=ic=Vr(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Jc(e,t,n,r){yi=vi=null,Da(t),Go=null,Xo=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Si(t,n,i,!0),null!==(n=is.current)){switch(n.tag){case 13:return null===as?Yc():null===n.alternate&&0===fc&&(fc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===qi?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,i)),!1;case 22:return n.flags|=65536,r===qi?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,i)),!1}throw Error(o(435,n.tag))}return du(e,r,i),Yc(),!1}if(ai)return null!==(t=is.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==li&&mi(Pr(e=Error(o(422),{cause:r}),n))):(r!==li&&mi(Pr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Pr(r,n),sa(e,i=Ss(e.stateNode,r,i)),4!==fc&&(fc=2)),!1;var a=Error(o(520),{cause:r});if(a=Pr(a,n),null===yc?yc=[a]:yc.push(a),4!==fc&&(fc=2),null===t)return!0;r=Pr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,sa(n,e=Ss(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===Pc||!Pc.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,Es(i=Ps(i),e,n,r),sa(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,ac))return fc=1,ws(e,Pr(n,e.current)),void(ic=null)}catch(a){if(null!==i)throw ic=i,a;return fc=1,ws(e,Pr(n,e.current)),void(ic=null)}32768&t.flags?(ai||1===r?e=!0:cc||0!==(536870912&ac)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=is.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===fc&&(fc=5)}function tu(e,t){do{var n=il(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);fc=6,ic=null}function nu(e,t,n,r,i,a,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Ec);if(0!==(6&nc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-he(n),d=1<<u;s[u]=0,l[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var h=f[u];null!==h&&(h.lane&=-536870913)}n&=~d}0!==r&&Ce(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=Tr,s,l,c),e===rc&&(ic=rc=null,ac=0),Tc=t,Cc=e,zc=n,jc=a,Ac=i,_c=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,Q(ae,function(){return lu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=L.T,L.T=null,i=O.p,O.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=nf,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||0!==i&&3!==f.nodeType||(l=s+i),f!==a||0!==r&&3!==f.nodeType||(c=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=s),h===a&&++d===r&&(c=s),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nf=!1,Sl=t;null!==Sl;)if(e=(t=Sl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,Sl=e;else for(;null!==Sl;){switch(a=(t=Sl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var m=gs(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){uu(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,Sl=e;break}Sl=t.return}}(e,t)}finally{nc=s,O.p=i,L.T=r}}Ec=1,ru(),iu(),au()}}function ru(){if(1===Ec){Ec=0;var e=Cc,t=Tc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=L.T,L.T=null;var r=O.p;O.p=2;var i=nc;nc|=4;try{Ll(t,e);var a=nd,o=er(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Jn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),p=s.textContent.length,m=Math.min(l.start,p),g=void 0===l.end?m:Math.min(l.end,p);!h.extend&&m>g&&(o=g,g=m,m=o);var v=Zn(s,m),y=Zn(s,g);if(v&&y&&(1!==h.rangeCount||h.anchorNode!==v.node||h.anchorOffset!==v.offset||h.focusNode!==y.node||h.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),h.removeAllRanges(),m>g?(h.addRange(b),h.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),h.addRange(b))}}}}for(d=[],h=s;h=h.parentNode;)1===h.nodeType&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nf=!!td,nd=td=null}finally{nc=i,O.p=r,L.T=n}}e.current=t,Ec=2}}function iu(){if(2===Ec){Ec=0;var e=Cc,t=Tc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=L.T,L.T=null;var r=O.p;O.p=2;var i=nc;nc|=4;try{Pl(e,t.alternate,t)}finally{nc=i,O.p=r,L.T=n}}Ec=3}}function au(){if(4===Ec||3===Ec){Ec=0,ee();var e=Cc,t=Tc,n=zc,r=_c;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ec=5:(Ec=0,Tc=Cc=null,ou(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Pc=null),je(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=L.T,i=O.p,O.p=2,L.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{L.T=t,O.p=i}}0!==(3&zc)&&su(),ku(e),i=e.pendingLanes,0!==(4194090&n)&&0!==(42&i)?e===Rc?Mc++:(Mc=0,Rc=e):Mc=0,Su(0,!1)}}function ou(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Li(t)))}function su(e){return ru(),iu(),au(),lu()}function lu(){if(5!==Ec)return!1;var e=Cc,t=jc;jc=0;var n=je(zc),r=L.T,i=O.p;try{O.p=32>n?32:n,L.T=null,n=Ac,Ac=null;var a=Cc,s=zc;if(Ec=0,Tc=Cc=null,zc=0,0!==(6&nc))throw Error(o(331));var l=nc;if(nc|=4,Ql(a.current),Hl(a,a.current,s,n),nc=l,Su(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,a)}catch(c){}return!0}finally{O.p=i,L.T=r,ou(e,t)}}function cu(e,t,n){t=Pr(n,t),null!==(e=aa(e,t=Ss(e.stateNode,t,2),2))&&(Ee(e,2),ku(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Pc||!Pc.has(r))){e=Pr(n,e),null!==(r=aa(t,n=Ps(2),2))&&(Es(n,r,t,e),Ee(r,2),ku(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(uc=!0,i.add(n),e=fu.bind(null,e,t,n),t.then(e,e))}function fu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ac&n)===n&&(4===fc||3===fc&&(62914560&ac)===ac&&300>te()-wc?0===(2&nc)&&Hc(e,0):mc|=n,vc===ac&&(vc=0)),ku(e)}function hu(e,t){0===t&&(t=Se()),null!==(e=_r(e,t))&&(Ee(e,t),ku(e))}function pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),hu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),hu(e,n)}var gu=null,vu=null,yu=!1,bu=!1,xu=!1,wu=0;function ku(e){e!==vu&&null===e.next&&(null===vu?gu=vu=e:vu=vu.next=e),bu=!0,yu||(yu=!0,dd(function(){0!==(6&nc)?Q(re,Pu):Eu()}))}function Su(e,t){if(!xu&&bu){xu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-he(42|e)+1)-1,a=201326741&(a&=i&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,zu(r,a))}else a=ac,0===(3&(a=be(r,r===rc?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,a)||(n=!0,zu(r,a));r=r.next}}while(n);xu=!1}}function Pu(){Eu()}function Eu(){bu=yu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var i=r.next,a=Cu(r,t);0===a?(r.next=null,null===n?gu=i:n.next=i,null===i&&(vu=n)):(n=r,(0!==e||0!==(3&a))&&(bu=!0)),r=i}Su(e,!1)}function Cu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-he(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=we(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=ac,n=be(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===oc||9===oc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&Z(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&Z(r),je(n)){case 2:case 8:n=ie;break;case 32:default:n=ae;break;case 268435456:n=se}return r=Tu.bind(null,e),n=Q(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&Z(r),e.callbackPriority=2,e.callbackNode=null,2}function Tu(e,t){if(0!==Ec&&5!==Ec)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=ac;return 0===(r=be(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Dc(e,r,t),Cu(e,te()),null!=e.callbackNode&&e.callbackNode===n?Tu.bind(null,e):null)}function zu(e,t){if(su())return null;Dc(e,t,!0)}function ju(){return 0===wu&&(wu=ke()),wu}function Au(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:jt(""+e)}function _u(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Mu=0;Mu<wr.length;Mu++){var Ru=wr[Mu];kr(Ru.toLowerCase(),"on"+(Ru[0].toUpperCase()+Ru.slice(1)))}kr(hr,"onAnimationEnd"),kr(pr,"onAnimationIteration"),kr(mr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(gr,"onTransitionRun"),kr(vr,"onTransitionStart"),kr(yr,"onTransitionCancel"),kr(br,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ou=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lu));function Nu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){vs(u)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){vs(u)}i.currentTarget=null,a=l}}}}function Du(e,t){var n=t[Oe];void 0===n&&(n=t[Oe]=new Set);var r=e+"__bubble";n.has(r)||(Fu(t,e,2,!1),n.add(r))}function Iu(e,t,n){var r=0;t&&(r|=4),Fu(n,e,r,t)}var Vu="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[Vu]){e[Vu]=!0,Ke.forEach(function(t){"selectionchange"!==t&&(Ou.has(t)||Iu(t,!1,e),Iu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vu]||(t[Vu]=!0,Iu("selectionchange",!1,t))}}function Fu(e,t,n,r){switch(uf(t)){case 2:var i=rf;break;case 8:i=af;break;default:i=of}n=i.bind(null,t,n,e),i=void 0,!Vt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $u(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===i)return;o=o.return}for(;null!==s;){if(null===(o=Fe(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=a=o;continue e}s=s.parentNode}}r=r.return}Nt(function(){var r=a,i=_t(n),o=[];e:{var s=xr.get(e);if(void 0!==s){var c=Jt,u=e;switch(e){case"keypress":if(0===Wt(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vn;break;case hr:case pr:case mr:c=sn;break;case br:c=yn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=bn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),h=d?null!==s?s+"Capture":null:s;d=[];for(var p,m=r;null!==m;){var g=m;if(p=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===p||null===h||null!=(g=Dt(m,h))&&d.push(Hu(m,g,p)),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===At||!(u=n.relatedTarget||n.fromElement)||!Fe(u)&&!u[Le])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Fe(u):null)&&(f=l(u),d=u.tag,u!==f||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",h="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",h="onPointerEnter",m="pointer"),f=null==c?s:He(c),p=null==u?s:He(u),(s=new d(g,m+"leave",c,n,i)).target=f,s.relatedTarget=p,g=null,Fe(i)===r&&((d=new d(h,m+"enter",u,n,i)).target=p,d.relatedTarget=f,g=d),f=g,c&&u)e:{for(h=u,m=0,p=d=c;p;p=Wu(p))m++;for(p=0,g=h;g;g=Wu(g))p++;for(;0<m-p;)d=Wu(d),m--;for(;0<p-m;)h=Wu(h),p--;for(;m--;){if(d===h||null!==h&&d===h.alternate)break e;d=Wu(d),h=Wu(h)}d=null}else d=null;null!==c&&Ku(o,s,c,d,!1),null!==u&&null!==f&&Ku(o,f,u,d,!0)}if("select"===(c=(s=r?He(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var v=In;else if(Mn(s))if(Vn)v=qn;else{v=Kn;var y=Wn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Ct(r.elementType)&&(v=In):v=Yn;switch(v&&(v=v(e,r))?Rn(o,v,n,i):(y&&y(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),y=r?He(r):window,e){case"focusin":(Mn(y)||"true"===y.contentEditable)&&(rr=y,ir=r,ar=null);break;case"focusout":ar=ir=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,sr(o,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(o,n,i)}var b;if(kn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else An?zn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(En&&"ko"!==n.locale&&(An||"onCompositionStart"!==x?"onCompositionEnd"===x&&An&&(b=Ut()):($t="value"in(Ft=i)?Ft.value:Ft.textContent,An=!0)),0<(y=Uu(r,x)).length&&(x=new cn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:null!==(b=jn(n))&&(x.data=b))),(b=Pn?function(e,t){switch(e){case"compositionend":return jn(t);case"keypress":return 32!==t.which?null:(Tn=!0,Cn);case"textInput":return(e=t.data)===Cn&&Tn?null:e;default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!kn&&zn(e,t)?(e=Ut(),Ht=$t=Ft=null,An=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return En&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Uu(r,"onBeforeInput")).length&&(y=new cn("onBeforeInput","beforeinput",null,n,i),o.push({event:y,listeners:x}),y.data=b)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=Au((i[Re]||null).action),o=r.submitter;o&&null!==(t=(t=o[Re]||null)?Au(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Jt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=o?_u(i,o):new FormData(i);_o(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?_u(i,o):new FormData(i),_o(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Nu(o,t)})}function Hu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Dt(e,n))&&r.unshift(Hu(e,i,a)),null!=(i=Dt(e,t))&&r.push(Hu(e,i,a))),3===e.tag)return r;e=e.return}return[]}function Wu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Ku(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=Dt(n,a))&&o.unshift(Hu(n,c,l)):i||null!=(c=Dt(n,a))&&o.push(Hu(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yu=/\r\n?/g,qu=/\u0000|\uFFFD/g;function Gu(e){return("string"===typeof e?e:""+e).replace(Yu,"\n").replace(qu,"")}function Xu(e,t){return t=Gu(t),Gu(e)===t}function Qu(){}function Zu(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Et(e,r,a);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=jt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&Zu(e,t,"name",i.name,i,null),Zu(e,t,"formEncType",i.formEncType,i,null),Zu(e,t,"formMethod",i.formMethod,i,null),Zu(e,t,"formTarget",i.formTarget,i,null)):(Zu(e,t,"encType",i.encType,i,null),Zu(e,t,"method",i.method,i,null),Zu(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=jt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Qu);break;case"onScroll":null!=r&&Du("scroll",e);break;case"onScrollEnd":null!=r&&Du("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=jt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Du("beforetoggle",e),Du("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Tt.get(n)||n,r)}}function Ju(e,t,n,r,i,a){switch(n){case"style":Et(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&Du("scroll",e);break;case"onScrollEnd":null!=r&&Du("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Qu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ye.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[Re]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Du("error",e),Du("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Zu(e,t,r,s,n,null)}}return a&&Zu(e,t,"srcSet",n.srcSet,n,null),void(i&&Zu(e,t,"src",n.src,n,null));case"input":Du("invalid",e);var l=r=s=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Zu(e,t,i,d,n,null)}}return vt(e,r,l,c,u,s,a,!1),void dt(e);case"select":for(a in Du("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Zu(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?bt(e,!!i,t,!1):null!=n&&bt(e,!!i,n,!0));case"textarea":for(s in Du("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Zu(e,t,s,l,n,null)}return wt(e,i,a,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Zu(e,t,c,i,n,null);return;case"dialog":Du("beforetoggle",e),Du("toggle",e),Du("cancel",e),Du("close",e);break;case"iframe":case"object":Du("load",e);break;case"video":case"audio":for(i=0;i<Lu.length;i++)Du(Lu[i],e);break;case"image":Du("error",e),Du("load",e);break;case"details":Du("toggle",e);break;case"embed":case"source":case"link":Du("error",e),Du("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Zu(e,t,u,i,n,null)}return;default:if(Ct(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&Ju(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Zu(e,t,l,i,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function od(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(fd)}:ld;function fd(e){setTimeout(function(){throw e})}function hd(e){return"head"===e}function pd(e,t){var n=t,r=0,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(1&n&&wd(o.documentElement),2&n&&wd(o.body),4&n)for(wd(n=o.head),o=n.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Ve]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=s}}if(0===i)return e.removeChild(a),void zf(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=a}while(n);zf(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),Be(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function bd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Be(e)}var kd=new Map,Sd=new Set;function Pd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ed=O.d;O.d={f:function(){var e=Ed.f(),t=Fc();return e||t},r:function(e){var t=$e(e);null!==t&&5===t.tag&&"form"===t.type?Ro(t):Ed.r(e)},D:function(e){Ed.D(e),Td("dns-prefetch",e,null)},C:function(e,t){Ed.C(e,t),Td("preconnect",e,t)},L:function(e,t,n){Ed.L(e,t,n);var r=Cd;if(r&&e&&t){var i='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+mt(n.imageSizes)+'"]')):i+='[href="'+mt(e)+'"]';var a=i;switch(t){case"style":a=jd(e);break;case"script":a=Md(e)}kd.has(a)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),kd.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Ad(a))||"script"===t&&r.querySelector(Rd(a))||(ed(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}},m:function(e,t){Ed.m(e,t);var n=Cd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Md(e)}if(!kd.has(a)&&(e=f({rel:"modulepreload",href:e},t),kd.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Rd(a)))return}ed(r=n.createElement("link"),"link",e),We(r),n.head.appendChild(r)}}},X:function(e,t){Ed.X(e,t);var n=Cd;if(n&&e){var r=Ue(n).hoistableScripts,i=Md(e),a=r.get(i);a||((a=n.querySelector(Rd(i)))||(e=f({src:e,async:!0},t),(t=kd.get(i))&&Dd(e,t),We(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){Ed.S(e,t,n);var r=Cd;if(r&&e){var i=Ue(r).hoistableStyles,a=jd(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Ad(a)))s.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kd.get(a))&&Nd(e,n);var l=o=r.createElement("link");We(l),ed(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Od(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){Ed.M(e,t);var n=Cd;if(n&&e){var r=Ue(n).hoistableScripts,i=Md(e),a=r.get(i);a||((a=n.querySelector(Rd(i)))||(e=f({src:e,async:!0,type:"module"},t),(t=kd.get(i))&&Dd(e,t),We(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var Cd="undefined"===typeof document?null:document;function Td(e,t,n){var r=Cd;if(r&&"string"===typeof t&&t){var i=mt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),Sd.has(i)||(Sd.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(ed(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}}function zd(e,t,n,r){var i,a,s,l,c=(c=U.current)?Pd(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=jd(n.href),(r=(n=Ue(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=jd(n.href);var u=Ue(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Ad(e)))&&!u._p&&(d.instance=u,d.state.loading=5),kd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kd.set(e,n),u||(i=c,a=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),ed(a,"link",s),We(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Md(n),(r=(n=Ue(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function jd(e){return'href="'+mt(e)+'"'}function Ad(e){return'link[rel="stylesheet"]['+e+"]"}function _d(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Md(e){return'[src="'+mt(e)+'"]'}function Rd(e){return"script[async]"+e}function Ld(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,We(r),r;var i=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return We(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",i),Od(r,n.precedence,e),t.instance=r;case"stylesheet":i=jd(n.href);var a=e.querySelector(Ad(i));if(a)return t.state.loading|=4,t.instance=a,We(a),a;r=_d(n),(i=kd.get(i))&&Nd(r,i),We(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ed(a,"link",r),t.state.loading|=4,Od(a,n.precedence,e),t.instance=a;case"script":return a=Md(n.src),(i=e.querySelector(Rd(a)))?(t.instance=i,We(i),i):(r=n,(i=kd.get(a))&&Dd(r=f({},n),i),We(i=(e=e.ownerDocument||e).createElement("script")),ed(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Od(r,n.precedence,e));return t.instance}function Od(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Nd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Dd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Id=null;function Vd(e,t,n){if(null===Id){var r=new Map,i=Id=new Map;i.set(n,r)}else(r=(i=Id).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ve]||a[Me]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Bd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Fd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var $d=null;function Hd(){}function Ud(){if(this.count--,0===this.count)if(this.stylesheets)Kd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Wd=null;function Kd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Wd=new Map,t.forEach(Yd,e),Wd=null,Ud.call(e))}function Yd(e,t){if(!(4&t.state.loading)){var n=Wd.get(e);if(n)var r=n.get(null);else{n=new Map,Wd.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=Ud.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var qd={$$typeof:w,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function Gd(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Xd(e,t,n,r,i,a,o,s,l,c,u,d){return e=new Gd(e,t,n,o,s,l,c,d),t=1,!0===a&&(t|=24),a=Nr(3,null,null,t),e.current=a,a.stateNode=e,(t=Ri()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},na(a),e}function Qd(e){return e?e=Lr:Lr}function Zd(e,t,n,r,i,a){i=Qd(i),null===r.context?r.context=i:r.pendingContext=i,(r=ia(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=aa(e,r,t))&&(Nc(n,0,t),oa(n,e,t))}function Jd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ef(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function tf(e){if(13===e.tag){var t=_r(e,67108864);null!==t&&Nc(t,0,67108864),ef(e,67108864)}}var nf=!0;function rf(e,t,n,r){var i=L.T;L.T=null;var a=O.p;try{O.p=2,of(e,t,n,r)}finally{O.p=a,L.T=i}}function af(e,t,n,r){var i=L.T;L.T=null;var a=O.p;try{O.p=8,of(e,t,n,r)}finally{O.p=a,L.T=i}}function of(e,t,n,r){if(nf){var i=sf(r);if(null===i)$u(e,t,r,lf,n),bf(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return ff=xf(ff,e,t,n,r,i),!0;case"dragenter":return hf=xf(hf,e,t,n,r,i),!0;case"mouseover":return pf=xf(pf,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return mf.set(a,xf(mf.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,gf.set(a,xf(gf.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(bf(e,r),4&t&&-1<yf.indexOf(e)){for(;null!==i;){var a=$e(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=ye(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-he(o);s.entanglements[1]|=l,o&=~l}ku(a),0===(6&nc)&&(kc=te()+500,Su(0,!1))}}break;case 13:null!==(s=_r(a,2))&&Nc(s,0,2),Fc(),ef(a,2)}if(null===(a=sf(r))&&$u(e,t,r,lf,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else $u(e,t,r,null,n)}}function sf(e){return cf(e=_t(e))}var lf=null;function cf(e){if(lf=null,null!==(e=Fe(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lf=e,null}function uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ie:return 8;case ae:case oe:return 32;case se:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,hf=null,pf=null,mf=new Map,gf=new Map,vf=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":hf=null;break;case"mouseover":case"mouseout":pf=null;break;case"pointerover":case"pointerout":mf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gf.delete(t.pointerId)}}function xf(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=$e(t))&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function wf(e){var t=Fe(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}(e.priority,function(){if(13===n.tag){var e=Lc();e=ze(e);var t=_r(n,e);null!==t&&Nc(t,0,e),ef(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function kf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=sf(e.nativeEvent);if(null!==n)return null!==(t=$e(n))&&tf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function Sf(e,t,n){kf(e)&&n.delete(t)}function Pf(){df=!1,null!==ff&&kf(ff)&&(ff=null),null!==hf&&kf(hf)&&(hf=null),null!==pf&&kf(pf)&&(pf=null),mf.forEach(Sf),gf.forEach(Sf)}function Ef(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Pf)))}var Cf=null;function Tf(e){Cf!==e&&(Cf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cf===e&&(Cf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===cf(r||n))continue;break}var a=$e(n);null!==a&&(e.splice(t,3),t-=3,_o(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function zf(e){function t(t){return Ef(t,e)}null!==ff&&Ef(ff,e),null!==hf&&Ef(hf,e),null!==pf&&Ef(pf,e),mf.forEach(t),gf.forEach(t);for(var n=0;n<vf.length;n++){var r=vf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<vf.length&&null===(n=vf[0]).blockedOn;)wf(n),null===n.blockedOn&&vf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Re]||null;if("function"===typeof a)o||Tf(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[Re]||null)s=o.formAction;else if(null!==cf(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Tf(n)}}}function jf(e){this._internalRoot=e}function Af(e){this._internalRoot=e}Af.prototype.render=jf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Zd(t.current,Lc(),e,t,null,null)},Af.prototype.unmount=jf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Zd(e.current,2,null,e,null,null),Fc(),t[Le]=null}},Af.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vf.length&&0!==t&&t<vf[n].priority;n++);vf.splice(n,0,e),0===n&&wf(e)}};var _f=i.version;if("19.1.0"!==_f)throw Error(o(527,_f,"19.1.0"));O.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return u(i),e;if(a===r)return u(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Mf={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Rf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rf.isDisabled&&Rf.supportsFiber)try{ue=Rf.inject(Mf),de=Rf}catch(Of){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=ys,a=bs,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Xd(e,1,!1,null,0,n,r,i,a,l,0,null),e[Le]=t.current,Bu(e),new jf(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=ys,l=bs,c=xs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Xd(e,1,!0,t,0,r,i,a,l,c,0,u)).context=Qd(null),n=t.current,(i=ia(r=ze(r=Lc()))).callback=null,aa(n,i,r),n=r,t.current.lanes=n,Ee(t,n),ku(t),e[Le]=t.current,Bu(e),new Af(t)},t.version="19.1.0"},119:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(863)},340:(e,t,n)=>{"use strict";e.exports=n(487)},352:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(85)},403:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},414:(e,t,n)=>{"use strict";e.exports=n(916)},487:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,f=null,h=3,p=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,P||(P=!0,S());else{var t=r(u);null!==t&&M(k,t.startTime-e)}}var S,P=!1,E=-1,C=5,T=-1;function z(){return!!v||!(t.unstable_now()-T<C)}function j(){if(v=!1,P){var e=t.unstable_now();T=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(E),E=-1),p=!0;var a=h;try{t:{for(w(e),f=r(c);null!==f&&!(f.expirationTime>e&&z());){var o=f.callback;if("function"===typeof o){f.callback=null,h=f.priorityLevel;var s=o(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){f.callback=s,w(e),n=!0;break t}f===r(c)&&i(c),w(e)}else i(c);f=r(c)}if(null!==f)n=!0;else{var l=r(u);null!==l&&M(k,l.startTime-e),n=!1}}break e}finally{f=null,h=a,p=!1}n=void 0}}finally{n?S():P=!1}}}if("function"===typeof x)S=function(){x(j)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,_=A.port2;A.port1.onmessage=j,S=function(){_.postMessage(null)}}else S=function(){y(j,0)};function M(e,n){E=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(b(E),E=-1):g=!0,M(k,a-o))):(e.sortIndex=s,n(c,e),m||p||(m=!0,P||(P=!0,S()))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},863:(e,t,n)=>{"use strict";var r=n(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},916:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},950:(e,t,n)=>{"use strict";e.exports=n(983)},983:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},S=Object.prototype.hasOwnProperty;function P(e,t,r,i,a,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(){}function j(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case f:return j((u=e._init)(e._payload),t,i,a,o)}}if(u)return o=o(e),u=""===a?"."+T(e,0):a,w(o)?(i="",null!=u&&(i=u.replace(C,"$&/")+"/"),j(o,t,i,"",function(e){return e})):null!=o&&(E(o)&&(l=o,c=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+u,o=P(l.type,c,void 0,0,0,l.props)),t.push(o)),1;u=0;var d,p=""===a?".":a+":";if(w(e))for(var m=0;m<e.length;m++)u+=j(a=e[m],t,i,s=p+T(a,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(a=e.next()).done;)u+=j(a=a.value,t,i,s=p+T(a,m++),o);else if("object"===s){if("function"===typeof e.then)return j(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,n){if(null==e)return e;var r=[],i=0;return j(e,r,"","",function(e){return t.call(n,e,i++)}),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function R(){}t.Children={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!S.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return P(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return P(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:_}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),i=k.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(R,M)}catch(a){M(a)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=k.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.1.0"},988:function(e){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=(r(n(1)),n(6)),o=r(a),s=r(n(7)),l=r(n(8)),c=r(n(9)),u=r(n(10)),d=r(n(11)),f=r(n(14)),h=[],p=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},g=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return h=(0,d.default)(h,m),(0,u.default)(h,m.once),h},v=function(){h=(0,f.default)(),g()},y=function(){h.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},b=function(e){return!0===e||"mobile"===e&&c.default.mobile()||"phone"===e&&c.default.phone()||"tablet"===e&&c.default.tablet()||"function"==typeof e&&!0===e()},x=function(e){m=i(m,e),h=(0,f.default)();var t=document.all&&!window.atob;return b(m.disable)||t?y():(m.disableMutationObserver||l.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?g(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,function(){g(!0)}):document.addEventListener(m.startEvent,function(){g(!0)}),window.addEventListener("resize",(0,s.default)(g,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(g,m.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,u.default)(h,m.once)},m.throttleDelay)),m.disableMutationObserver||l.default.ready("[data-aos]",v),h)};e.exports={init:x,refresh:g,refreshHard:v}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function r(t){var n=m,r=g;return m=g=void 0,P=t,y=e.apply(r,n)}function a(e){return P=e,b=setTimeout(u,t),E?r(e):y}function o(e){var n=t-(e-x);return C?k(n,v-(e-P)):n}function l(e){var n=e-x;return void 0===x||n>=t||n<0||C&&e-P>=v}function u(){var e=S();return l(e)?d(e):void(b=setTimeout(u,o(e)))}function d(e){return b=void 0,T&&m?r(e):(m=g=void 0,y)}function f(){void 0!==b&&clearTimeout(b),P=0,m=x=g=b=void 0}function h(){return void 0===b?y:d(S())}function p(){var e=S(),n=l(e);if(m=arguments,g=this,x=e,n){if(void 0===b)return a(x);if(C)return b=setTimeout(u,t),r(x)}return void 0===b&&(b=setTimeout(u,t)),y}var m,g,v,y,b,x,P=0,E=!1,C=!1,T=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,i(n)&&(E=!!n.leading,v=(C="maxWait"in n)?w(s(n.maxWait)||0,t):v,T="trailing"in n?!!n.trailing:T),p.cancel=f,p.flush=h,p}function r(e,t,r){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return i(r)&&(a="leading"in r?!!r.leading:a,o="trailing"in r?!!r.trailing:o),n(e,t,{leading:a,maxWait:t,trailing:o})}function i(e){var t="undefined"==typeof e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":l(e))}function o(e){return"symbol"==("undefined"==typeof e?"undefined":l(e))||a(e)&&x.call(e)==d}function s(e){if("number"==typeof e)return e;if(o(e))return u;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||m.test(e)?g(e.slice(2),n?2:8):h.test(e)?u:+e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",u=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt,v="object"==("undefined"==typeof t?"undefined":l(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,b=v||y||Function("return this")(),x=Object.prototype.toString,w=Math.max,k=Math.min,S=function(){return b.Date.now()};e.exports=r}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=m,r=g;return m=g=void 0,P=t,y=e.apply(r,n)}function a(e){return P=e,b=setTimeout(u,t),E?i(e):y}function s(e){var n=t-(e-S);return C?w(n,v-(e-P)):n}function c(e){var n=e-S;return void 0===S||n>=t||n<0||C&&e-P>=v}function u(){var e=k();return c(e)?d(e):void(b=setTimeout(u,s(e)))}function d(e){return b=void 0,T&&m?i(e):(m=g=void 0,y)}function f(){void 0!==b&&clearTimeout(b),P=0,m=S=g=b=void 0}function h(){return void 0===b?y:d(k())}function p(){var e=k(),n=c(e);if(m=arguments,g=this,S=e,n){if(void 0===b)return a(S);if(C)return b=setTimeout(u,t),i(S)}return void 0===b&&(b=setTimeout(u,t)),y}var m,g,v,y,b,S,P=0,E=!1,C=!1,T=!0;if("function"!=typeof e)throw new TypeError(l);return t=o(t)||0,r(n)&&(E=!!n.leading,v=(C="maxWait"in n)?x(o(n.maxWait)||0,t):v,T="trailing"in n?!!n.trailing:T),p.cancel=f,p.flush=h,p}function r(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||i(e)&&b.call(e)==u}function o(e){if("number"==typeof e)return e;if(a(e))return c;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=h.test(e);return n||p.test(e)?m(e.slice(2),n?2:8):f.test(e)?c:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",c=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,g="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,y=g||v||Function("return this")(),b=Object.prototype.toString,x=Math.max,w=Math.min,k=function(){return y.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,r=void 0;for(t=0;t<e.length;t+=1){if((r=e[t]).dataset&&r.dataset.aos)return!0;if(r.children&&n(r.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!r()}function a(e,t){var n=window.document,i=new(r())(o);s=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(r)))return s()})}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:i,ready:a}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=r();return!(!a.test(e)&&!o.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=r();return!(!s.test(e)&&!l.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var r=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof r&&("false"===r||!n&&"true"!==r)&&e.node.classList.remove("aos-animate")},r=function(e,t){var r=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){n(e,i+r,t)})};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(12)),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(13)),a=function(e,t){var n=0,r=0,a=window.innerHeight,o={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(o.offset&&!isNaN(o.offset)&&(r=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),n=(0,i.default)(e).top,o.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return o.anchorPlacement||o.offset||isNaN(t)||(r=t),n+r};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".426d5b0a.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="dongkyu-portfolio-2025:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var f=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach(e=>e(n)),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/portfolio_2025/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((n,r)=>i=e[t]=[n,r]);r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}},"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some(t=>0!==e[t])){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkdongkyu_portfolio_2025=self.webpackChunkdongkyu_portfolio_2025||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(950),t=n(352),r=n(988),i=n.n(r);var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)};Object.create;function o(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=n(403),l=n.n(s),c="-ms-",u="-moz-",d="-webkit-",f="comm",h="rule",p="decl",m="@keyframes",g=Math.abs,v=String.fromCharCode,y=Object.assign;function b(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,n){return e.replace(t,n)}function k(e,t,n){return e.indexOf(t,n)}function S(e,t){return 0|e.charCodeAt(t)}function P(e,t,n){return e.slice(t,n)}function E(e){return e.length}function C(e){return e.length}function T(e,t){return t.push(e),e}function z(e,t){return e.filter(function(e){return!x(e,t)})}var j=1,A=1,_=0,M=0,R=0,L="";function O(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:j,column:A,length:o,return:"",siblings:s}}function N(e,t){return y(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function D(e){for(;e.root;)e=N(e.root,{children:[e]});T(e,e.siblings)}function I(){return R=M>0?S(L,--M):0,A--,10===R&&(A=1,j--),R}function V(){return R=M<_?S(L,M++):0,A++,10===R&&(A=1,j++),R}function B(){return S(L,M)}function F(){return M}function $(e,t){return P(L,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return j=A=1,_=E(L=e),M=0,[]}function W(e){return L="",e}function K(e){return b($(M-1,G(91===e?e+2:40===e?e+1:e)))}function Y(e){for(;(R=B())&&R<33;)V();return H(e)>2||H(R)>3?"":" "}function q(e,t){for(;--t&&V()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return $(e,F()+(t<6&&32==B()&&32==V()))}function G(e){for(;V();)switch(R){case e:return M;case 34:case 39:34!==e&&39!==e&&G(R);break;case 40:41===e&&G(e);break;case 92:V()}return M}function X(e,t){for(;V()&&e+R!==57&&(e+R!==84||47!==B()););return"/*"+$(t,M-1)+"*"+v(47===e?e:V())}function Q(e){for(;!H(B());)V();return $(e,M)}function Z(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function J(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case f:return"";case m:return e.return=e.value+"{"+Z(e.children,r)+"}";case h:if(!E(e.value=e.props.join(",")))return""}return E(n=Z(e.children,r))?e.return=e.value+"{"+n+"}":""}function ee(e,t,n){switch(function(e,t){return 45^S(e,0)?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+u+e+c+e+e;case 5936:switch(S(e,t+11)){case 114:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+c+e+e;case 6165:return d+e+c+"flex-"+e+e;case 5187:return d+e+w(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return d+e+c+"flex-item-"+w(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":c+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return d+e+c+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+c+w(e,"shrink","negative")+e;case 5292:return d+e+c+w(e,"basis","preferred-size")+e;case 6060:return d+"box-"+w(e,"-grow","")+d+e+c+w(e,"grow","positive")+e;case 4554:return d+w(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!x(e,/flex-|baseline/))return c+"grid-column-align"+P(e,t)+e;break;case 2592:case 3360:return c+w(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,x(e.props,/grid-\w+-end/)})?~k(e+(n=n[t].value),"span",0)?e:c+w(e,"-start","")+e+c+"grid-row-span:"+(~k(n,"span",0)?x(n,/\d+/):+x(n,/\d+/)-+x(e,/\d+/))+";":c+w(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return x(e.props,/grid-\w+-start/)})?e:c+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-t>6)switch(S(e,t+1)){case 109:if(45!==S(e,t+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+u+(108==S(e,t+3)?"$3":"$2-$3"))+e;case 115:return~k(e,"stretch",0)?ee(w(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return c+n+":"+r+s+(i?c+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===S(e,t+6))return w(e,":",":"+d)+e;break;case 6444:switch(S(e,45===S(e,14)?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===S(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+c+"$2box$3")+e;case 100:return w(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function te(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=ee(e.value,e.length,n));case m:return Z([N(e,{value:w(e.value,"@","@"+d)})],r);case h:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(x(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":D(N(e,{props:[w(t,/:(read-\w+)/,":-moz-$1")]})),D(N(e,{props:[t]})),y(e,{props:z(n,r)});break;case"::placeholder":D(N(e,{props:[w(t,/:(plac\w+)/,":"+d+"input-$1")]})),D(N(e,{props:[w(t,/:(plac\w+)/,":-moz-$1")]})),D(N(e,{props:[w(t,/:(plac\w+)/,c+"input-$1")]})),D(N(e,{props:[t]})),y(e,{props:z(n,r)})}return""})}}function ne(e){return W(re("",null,null,null,[""],e=U(e),0,[0],e))}function re(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,f=0,h=0,p=0,m=1,y=1,b=1,x=0,P="",C=i,z=a,j=r,A=P;y;)switch(p=x,x=V()){case 40:if(108!=p&&58==S(A,d-1)){-1!=k(A+=w(K(x),"&","&\f"),"&\f",g(c?s[c-1]:0))&&(b=-1);break}case 34:case 39:case 91:A+=K(x);break;case 9:case 10:case 13:case 32:A+=Y(p);break;case 92:A+=q(F()-1,7);continue;case 47:switch(B()){case 42:case 47:T(ae(X(V(),F()),t,n,l),l);break;default:A+="/"}break;case 123*m:s[c++]=E(A)*b;case 125*m:case 59:case 0:switch(x){case 0:case 125:y=0;case 59+u:-1==b&&(A=w(A,/\f/g,"")),h>0&&E(A)-d&&T(h>32?oe(A+";",r,n,d-1,l):oe(w(A," ","")+";",r,n,d-2,l),l);break;case 59:A+=";";default:if(T(j=ie(A,t,n,c,u,i,s,P,C=[],z=[],d,a),a),123===x)if(0===u)re(A,t,j,j,C,a,d,s,z);else switch(99===f&&110===S(A,3)?100:f){case 100:case 108:case 109:case 115:re(e,j,j,r&&T(ie(e,j,j,0,0,i,s,P,i,C=[],d,z),z),i,z,d,s,r?C:z);break;default:re(A,j,j,j,[""],z,0,s,z)}}c=u=h=0,m=b=1,P=A="",d=o;break;case 58:d=1+E(A),h=p;default:if(m<1)if(123==x)--m;else if(125==x&&0==m++&&125==I())continue;switch(A+=v(x),x*m){case 38:b=u>0?1:(A+="\f",-1);break;case 44:s[c++]=(E(A)-1)*b,b=1;break;case 64:45===B()&&(A+=K(V())),f=B(),u=d=E(P=A+=Q(F())),x++;break;case 45:45===p&&2==E(A)&&(m=0)}}return a}function ie(e,t,n,r,i,a,o,s,l,c,u,d){for(var f=i-1,p=0===i?a:[""],m=C(p),v=0,y=0,x=0;v<r;++v)for(var k=0,S=P(e,f+1,f=g(y=o[v])),E=e;k<m;++k)(E=b(y>0?p[k]+" "+S:w(S,/&\f/g,p[k])))&&(l[x++]=E);return O(e,t,n,0===i?h:s,l,c,u,d)}function ae(e,t,n,r){return O(e,t,n,f,v(R),P(e,2,-2),0,r)}function oe(e,t,n,r,i){return O(e,t,n,p,P(e,0,r),P(e,r+1,-1),r,i)}var se={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}&&({NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_ATTR)||"data-styled",ce="active",ue="data-styled-version",de="6.1.19",fe="/*!sc*/\n",he="undefined"!=typeof window&&"undefined"!=typeof document,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio_2025",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BLOG:"https://begin-developer.tistory.com/",REACT_APP_BUILD_TIME:"",REACT_APP_DESCRIPTION:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",REACT_APP_EMAIL:"wlsntus55@gmail.com",REACT_APP_GITHUB:"https://github.com/dongkyukim1",REACT_APP_NAME:"\uae40\ub3d9\uaddc \ud3ec\ud2b8\ud3f4\ub9ac\uc624",REACT_APP_PHONE:"010-4048-8292",REACT_APP_PORTFOLIO:"https://dongkyu.shop/",REACT_APP_VERSION:"1.0.0"}.SC_DISABLE_SPEEDY)),me={},ge=(new Set,Object.freeze([])),ve=Object.freeze({});function ye(e,t,n){return void 0===n&&(n=ve),e.theme!==n.theme&&e.theme||t||n.theme}var be=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function ke(e){return e.replace(xe,"-").replace(we,"")}var Se=/(a)(d)/gi,Pe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Pe(t%52)+n;return(Pe(t%52)+n).replace(Se,"$1-$2")}var Ce,Te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ze=function(e){return Te(5381,e)};function je(e){return Ee(ze(e)>>>0)}function Ae(e){return e.displayName||e.name||"Component"}function _e(e){return"string"==typeof e&&!0}var Me="function"==typeof Symbol&&Symbol.for,Re=Me?Symbol.for("react.memo"):60115,Le=Me?Symbol.for("react.forward_ref"):60112,Oe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ne={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},De={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ie=((Ce={})[Le]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ce[Re]=De,Ce);function Ve(e){return("type"in(t=e)&&t.type.$$typeof)===Re?De:"$$typeof"in e?Ie[e.$$typeof]:Oe;var t}var Be=Object.defineProperty,Fe=Object.getOwnPropertyNames,$e=Object.getOwnPropertySymbols,He=Object.getOwnPropertyDescriptor,Ue=Object.getPrototypeOf,We=Object.prototype;function Ke(e,t,n){if("string"!=typeof t){if(We){var r=Ue(t);r&&r!==We&&Ke(e,r,n)}var i=Fe(t);$e&&(i=i.concat($e(t)));for(var a=Ve(e),o=Ve(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Ne||n&&n[l]||o&&l in o||a&&l in a)){var c=He(t,l);try{Be(e,l,c)}catch(e){}}}}return e}function Ye(e){return"function"==typeof e}function qe(e){return"object"==typeof e&&"styledComponentId"in e}function Ge(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xe(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ze(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ze(e[r],t[r]);else if(Qe(t))for(var r in t)e[r]=Ze(e[r],t[r]);return e}function Je(e,t){Object.defineProperty(e,"toString",{value:t})}function et(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw et(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(fe);return t},e}(),nt=new Map,rt=new Map,it=1,at=function(e){if(nt.has(e))return nt.get(e);for(;rt.has(it);)it++;var t=it++;return nt.set(e,t),rt.set(t,e),t},ot=function(e,t){it=t+1,nt.set(e,t),rt.set(t,e)},st="style[".concat(le,"][").concat(ue,'="').concat(de,'"]'),lt=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ct=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},ut=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(lt);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(ot(u,c),ct(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},dt=function(e){for(var t=document.querySelectorAll(st),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(le)!==ce&&(ut(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ft(){return n.nc}var ht=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(le,ce),r.setAttribute(ue,de);var o=ft();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},pt=function(){function e(e){this.element=ht(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw et(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mt=function(){function e(e){this.element=ht(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vt=he,yt={isServer:!he,useCSSOMInjection:!pe},bt=function(){function e(e,t,n){void 0===e&&(e=ve),void 0===t&&(t={});var r=this;this.options=a(a({},yt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&he&&vt&&(vt=!1,dt(this)),Je(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return rt.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(le,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(fe)},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return at(e)},e.prototype.rehydrate=function(){!this.server&&he&&dt(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(a(a({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new gt(n):t?new pt(n):new mt(n)}(this.options),new tt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(at(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(at(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(at(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xt=/&/g,wt=/^\s*\/\/.*$/gm;function kt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=kt(e.children,t)),e})}function St(e){var t,n,r,i=void 0===e?ve:e,a=i.options,o=void 0===a?ve:a,s=i.plugins,l=void 0===s?ge:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===h&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(xt,n).replace(r,c))}),o.prefix&&u.push(te),u.push(J);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(wt,""),c=ne(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=kt(c,o.namespace));var d,f=[];return Z(c,function(e){var t=C(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce(function(e,t){return t.name||et(15),Te(e,t.name)},5381).toString():"",d}var Pt=new bt,Et=St(),Ct=e.createContext({shouldForwardProp:void 0,styleSheet:Pt,stylis:Et}),Tt=(Ct.Consumer,e.createContext(void 0));function zt(){return(0,e.useContext)(Ct)}function jt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=zt().styleSheet,o=(0,e.useMemo)(function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)(function(){return St({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})},[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)(function(){l()(r,t.stylisPlugins)||i(t.stylisPlugins)},[t.stylisPlugins]);var c=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}},[t.shouldForwardProp,o,s]);return e.createElement(Ct.Provider,{value:c},e.createElement(Tt.Provider,{value:s},t.children))}var At=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Et);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Je(this,function(){throw et(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Et),this.name+e.hash},e}(),_t=function(e){return e>="A"&&e<="Z"};function Mt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;_t(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rt=function(e){return null==e||!1===e||""===e},Lt=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Rt(a)&&(Array.isArray(a)&&a.isCss||Ye(a)?r.push("".concat(Mt(i),":"),a,";"):Qe(a)?r.push.apply(r,o(o(["".concat(i," {")],Lt(a),!1),["}"],!1)):r.push("".concat(Mt(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in se||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ot(e,t,n,r){return Rt(e)?[]:qe(e)?[".".concat(e.styledComponentId)]:Ye(e)?!Ye(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Ot(e(t),t,n,r):e instanceof At?n?(e.inject(n,r),[e.getName(r)]):[e]:Qe(e)?Lt(e):Array.isArray(e)?Array.prototype.concat.apply(ge,e.map(function(e){return Ot(e,t,n,r)})):[e.toString()];var i}function Nt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ye(n)&&!qe(n))return!1}return!0}var Dt=ze(de),It=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Nt(e),this.componentId=t,this.baseHash=Te(Dt,t),this.baseStyle=n,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ge(r,this.staticRulesId);else{var i=Xe(Ot(this.rules,e,t,n)),a=Ee(Te(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Ge(r,a),this.staticRulesId=a}else{for(var s=Te(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Xe(Ot(u,e,t,n));s=Te(s,d+c),l+=d}}if(l){var f=Ee(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=Ge(r,f)}}return r},e}(),Vt=e.createContext(void 0);Vt.Consumer;var Bt={};new Set;function Ft(t,n,r){var i=qe(t),o=t,s=!_e(t),l=n.attrs,c=void 0===l?ge:l,u=n.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":ke(e);Bt[n]=(Bt[n]||0)+1;var r="".concat(n,"-").concat(je(de+n+Bt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,f=n.displayName,h=void 0===f?function(e){return _e(e)?"styled.".concat(e):"Styled(".concat(Ae(e),")")}(t):f,p=n.displayName&&n.componentId?"".concat(ke(n.displayName),"-").concat(n.componentId):n.componentId||d,m=i&&o.attrs?o.attrs.concat(c).filter(Boolean):c,g=n.shouldForwardProp;if(i&&o.shouldForwardProp){var v=o.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var b=new It(r,p,i?o.componentStyle:void 0);function x(t,n){return function(t,n,r){var i=t.attrs,o=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Vt),f=zt(),h=t.shouldForwardProp||f.shouldForwardProp,p=ye(n,d,s)||ve,m=function(e,t,n){for(var r,i=a(a({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var s=Ye(r=e[o])?r(i):r;for(var l in s)i[l]="className"===l?Ge(i[l],s[l]):"style"===l?a(a({},i[l]),s[l]):s[l]}return t.className&&(i.className=Ge(i.className,t.className)),i}(i,n,p),g=m.as||u,v={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===p||("forwardedAs"===y?v.as=m.forwardedAs:h&&!h(y,g)||(v[y]=m[y]));var b=function(e,t){var n=zt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),x=Ge(l,c);return b&&(x+=" "+b),m.className&&(x+=" "+m.className),v[_e(g)&&!be.has(g)?"class":"className"]=x,r&&(v.ref=r),(0,e.createElement)(g,v)}(w,t,n)}x.displayName=h;var w=e.forwardRef(x);return w.attrs=m,w.componentStyle=b,w.displayName=h,w.shouldForwardProp=g,w.foldedComponentIds=i?Ge(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=p,w.target=i?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Ze(e,i[r],!0);return e}({},o.defaultProps,e):e}}),Je(w,function(){return".".concat(w.styledComponentId)}),s&&Ke(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function $t(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ht=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ye(e)||Qe(e))return Ht(Ot($t(ge,o([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ot(r):Ht(Ot($t(r,t)))}function Wt(e,t,n){if(void 0===n&&(n=ve),!t)throw et(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Ut.apply(void 0,o([r],i,!1)))};return r.attrs=function(r){return Wt(e,t,a(a({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Wt(e,t,a(a({},n),r))},r}var Kt=function(e){return Wt(Ft,e)},Yt=Kt;be.forEach(function(e){Yt[e]=Kt(e)});var qt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Nt(e),bt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Xe(Ot(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&bt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Xe(Ut.apply(void 0,o([e],t,!1))),i=je(r);return new At(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ft(),r=Xe([n&&'nonce="'.concat(n,'"'),"".concat(le,'="true"'),"".concat(ue,'="').concat(de,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw et(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw et(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[le]="",n[ue]=de,n.dangerouslySetInnerHTML={__html:r},n),o=ft();return o&&(i.nonce=o),[e.createElement("style",a({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new bt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw et(2);return e.createElement(jt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw et(3)}})(),"__sc-".concat(le,"__");var Xt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qt=e.createContext&&e.createContext(Xt),Zt=["attr","size","title"];function Jt(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function en(){return en=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},en.apply(this,arguments)}function tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function nn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tn(Object(n),!0).forEach(function(t){rn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function rn(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function an(t){return t&&t.map((t,n)=>e.createElement(t.tag,nn({key:n},t.attr),an(t.child)))}function on(t){return n=>e.createElement(sn,en({attr:nn({},t.attr)},n),an(t.child))}function sn(t){var n=n=>{var r,{attr:i,size:a,title:o}=t,s=Jt(t,Zt),l=a||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",en({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:nn(nn({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==Qt?e.createElement(Qt.Consumer,null,e=>n(e)):n(Xt)}function ln(e){return on({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"},child:[]}]})(e)}function cn(e){return on({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"},child:[]}]})(e)}function un(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"},child:[]}]})(e)}function dn(e){return on({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function fn(e){return on({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(e)}function hn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(e)}function pn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function mn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(e)}function gn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(e)}function vn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function yn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"},child:[]}]})(e)}function bn(e){return on({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(e)}function xn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function wn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"},child:[]}]})(e)}function kn(e){return on({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(e)}function Sn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function Pn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function En(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function Cn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Tn(e){return on({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function zn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}function jn(e){return on({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function An(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(e)}function _n(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function Mn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function Rn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Ln(e){return on({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}function On(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}function Nn(e){return on({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function Dn(e){return on({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function In(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Vn(e){return on({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function Bn(e){return on({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"},child:[]}]})(e)}function Fn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function $n(e){return on({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(e)}function Hn(e){return on({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function Un(e){return on({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Wn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function Kn(e){return on({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Yn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function qn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(e)}function Gn(e){return on({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Xn(e){return on({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function Qn(e){return on({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(e)}function Zn(e){return on({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Jn(e){return on({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}const er=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],tr=(()=>new Set(er))(),nr=e=>180*e/Math.PI,rr=e=>{const t=nr(Math.atan2(e[1],e[0]));return ar(t)},ir={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:rr,rotateZ:rr,skewX:e=>nr(Math.atan(e[1])),skewY:e=>nr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ar=e=>((e%=360)<0&&(e+=360),e),or=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),sr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),lr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:or,scaleY:sr,scale:e=>(or(e)+sr(e))/2,rotateX:e=>ar(nr(Math.atan2(e[6],e[5]))),rotateY:e=>ar(nr(Math.atan2(-e[2],e[0]))),rotateZ:rr,rotate:rr,skewX:e=>nr(Math.atan(e[4])),skewY:e=>nr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function cr(e){return e.includes("scale")?1:0}function ur(e,t){if(!e||"none"===e)return cr(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=lr,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=ir,i=t}if(!i)return cr(t);const a=r[t],o=i[1].split(",").map(dr);return"function"===typeof a?a(o):o[a]}function dr(e){return parseFloat(e.trim())}const fr=e=>t=>"string"===typeof t&&t.startsWith(e),hr=fr("--"),pr=fr("var(--"),mr=e=>!!pr(e)&&gr.test(e.split("/*")[0].trim()),gr=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function vr(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}const yr=(e,t,n)=>e+(t-e)*n;function br(e){return void 0===e||1===e}function xr(e){let{scale:t,scaleX:n,scaleY:r}=e;return!br(t)||!br(n)||!br(r)}function wr(e){return xr(e)||kr(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function kr(e){return Sr(e.x)||Sr(e.y)}function Sr(e){return e&&"0%"!==e}function Pr(e,t,n){return n+t*(e-n)}function Er(e,t,n,r,i){return void 0!==i&&(e=Pr(e,i,r)),Pr(e,n,r)+t}function Cr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Er(e.min,t,n,r,i),e.max=Er(e.max,t,n,r,i)}function Tr(e,t){let{x:n,y:r}=t;Cr(e.x,n.translate,n.scale,n.originPoint),Cr(e.y,r.translate,r.scale,r.originPoint)}const zr=.999999999999,jr=1.0000000000001;function Ar(e,t){e.min=e.min+t,e.max=e.max+t}function _r(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Cr(e,t,n,yr(e.min,e.max,i),r)}function Mr(e,t){_r(e.x,t.x,t.scaleX,t.scale,t.originX),_r(e.y,t.y,t.scaleY,t.scale,t.originY)}function Rr(e,t){return vr(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Lr=new Set(["width","height","top","left","right","bottom",...er]),Or=(e,t,n)=>n>t?t:n<e?e:n,Nr={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Dr={...Nr,transform:e=>Or(0,1,e)},Ir={...Nr,default:1},Vr=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Br=Vr("deg"),Fr=Vr("%"),$r=Vr("px"),Hr=Vr("vh"),Ur=Vr("vw"),Wr=(()=>({...Fr,parse:e=>Fr.parse(e)/100,transform:e=>Fr.transform(100*e)}))(),Kr=e=>t=>t.test(e),Yr=[Nr,$r,Fr,Br,Ur,Hr,{test:e=>"auto"===e,parse:e=>e}],qr=e=>Yr.find(Kr(e));const Gr=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Xr=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Qr(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,i]=function(e){const t=Xr.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return Gr(e)?parseFloat(e):e}return mr(i)?Qr(i,t,n+1):i}const Zr=e=>e===Nr||e===$r,Jr=new Set(["x","y","z"]),ei=er.filter(e=>!Jr.has(e));const ti={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return ur(n,"x")},y:(e,t)=>{let{transform:n}=t;return ur(n,"y")}};ti.translateX=ti.x,ti.translateY=ti.y;const ni=e=>e,ri={},ii=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],ai={value:null,addProjectionMetrics:null};function oi(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ii.reduce((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){o.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{s=e,i?a=!0:(i=!0,[n,r]=[r,n],n.forEach(c),t&&ai.value&&ai.value.frameloop[t].push(l),l=0,n.clear(),i=!1,a&&(a=!1,u.process(e)))}};return u}(a,t?n:void 0),e),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:h,postRender:p}=o,m=()=>{const a=ri.useManualTiming?i.timestamp:performance.now();n=!1,ri.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),h.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},g=ii.reduce((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(m)),s.schedule(t,a,o)},t},{});return{schedule:g,cancel:e=>{for(let t=0;t<ii.length;t++)o[ii[t]].cancel(e)},state:i,steps:o}}const{schedule:si,cancel:li,state:ci,steps:ui}=oi("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:ni,!0),di=new Set;let fi=!1,hi=!1,pi=!1;function mi(){if(hi){const e=Array.from(di).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{const t=function(e){const t=[];return ei.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();const t=n.get(e);t&&t.forEach(t=>{let[n,r]=t;e.getValue(n)?.set(r)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}hi=!1,fi=!1,di.forEach(e=>e.complete(pi)),di.clear()}function gi(){di.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hi=!0)})}class vi{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(di.add(this),fi||(fi=!0,si.read(gi),si.resolveKeyframes(mi))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(null===e[0]){const i=r?.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),di.delete(this)}cancel(){"scheduled"===this.state&&(di.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}const yi=e=>/^0[^.\s]+$/u.test(e);function bi(e){return"number"===typeof e?0===e:null===e||("none"===e||"0"===e||yi(e))}const xi=e=>Math.round(1e5*e)/1e5,wi=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const ki=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Si=(e,t)=>n=>Boolean("string"===typeof n&&ki.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Pi=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,a,o,s]=r.match(wi);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},Ei={...Nr,transform:e=>Math.round((e=>Or(0,255,e))(e))},Ci={test:Si("rgb","red"),parse:Pi("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+Ei.transform(t)+", "+Ei.transform(n)+", "+Ei.transform(r)+", "+xi(Dr.transform(i))+")"}};const Ti={test:Si("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Ci.transform},zi={test:Si("hsl","hue"),parse:Pi("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Fr.transform(xi(n))+", "+Fr.transform(xi(r))+", "+xi(Dr.transform(i))+")"}},ji={test:e=>Ci.test(e)||Ti.test(e)||zi.test(e),parse:e=>Ci.test(e)?Ci.parse(e):zi.test(e)?zi.parse(e):Ti.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Ci.transform(e):zi.transform(e),getAnimatableNone:e=>{const t=ji.parse(e);return t.alpha=0,ji.transform(t)}},Ai=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const _i="number",Mi="color",Ri=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Li(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(Ri,e=>(ji.test(e)?(r.color.push(a),i.push(Mi),n.push(ji.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(_i),n.push(parseFloat(e))),++a,"${}")).split("${}");return{values:n,split:o,indexes:r,types:i}}function Oi(e){return Li(e).values}function Ni(e){const{split:t,types:n}=Li(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===_i?xi(e[a]):t===Mi?ji.transform(e[a]):e[a]}return i}}const Di=e=>"number"===typeof e?0:ji.test(e)?ji.getAnimatableNone(e):e;const Ii={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(wi)?.length||0)+(e.match(Ai)?.length||0)>0},parse:Oi,createTransformer:Ni,getAnimatableNone:function(e){const t=Oi(e);return Ni(e)(t.map(Di))}},Vi=new Set(["brightness","contrast","saturate","opacity"]);function Bi(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(wi)||[];if(!r)return e;const i=n.replace(r,"");let a=Vi.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const Fi=/\b([a-z-]*)\(.*?\)/gu,$i={...Ii,getAnimatableNone:e=>{const t=e.match(Fi);return t?t.map(Bi).join(" "):e}},Hi={...Nr,transform:Math.round},Ui={borderWidth:$r,borderTopWidth:$r,borderRightWidth:$r,borderBottomWidth:$r,borderLeftWidth:$r,borderRadius:$r,radius:$r,borderTopLeftRadius:$r,borderTopRightRadius:$r,borderBottomRightRadius:$r,borderBottomLeftRadius:$r,width:$r,maxWidth:$r,height:$r,maxHeight:$r,top:$r,right:$r,bottom:$r,left:$r,padding:$r,paddingTop:$r,paddingRight:$r,paddingBottom:$r,paddingLeft:$r,margin:$r,marginTop:$r,marginRight:$r,marginBottom:$r,marginLeft:$r,backgroundPositionX:$r,backgroundPositionY:$r,...{rotate:Br,rotateX:Br,rotateY:Br,rotateZ:Br,scale:Ir,scaleX:Ir,scaleY:Ir,scaleZ:Ir,skew:Br,skewX:Br,skewY:Br,distance:$r,translateX:$r,translateY:$r,translateZ:$r,x:$r,y:$r,z:$r,perspective:$r,transformPerspective:$r,opacity:Dr,originX:Wr,originY:Wr,originZ:$r},zIndex:Hi,fillOpacity:Dr,strokeOpacity:Dr,numOctaves:Hi},Wi={...Ui,color:ji,backgroundColor:ji,outlineColor:ji,fill:ji,stroke:ji,borderColor:ji,borderTopColor:ji,borderRightColor:ji,borderBottomColor:ji,borderLeftColor:ji,filter:$i,WebkitFilter:$i},Ki=e=>Wi[e];function Yi(e,t){let n=Ki(e);return n!==$i&&(n=Ii),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const qi=new Set(["auto","none","0"]);class Gi extends vi{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),mr(n))){const r=Qr(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Lr.has(n)||2!==e.length)return;const[r,i]=e,a=qr(r),o=qr(i);if(a!==o)if(Zr(a)&&Zr(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else ti[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(null===e[r]||bi(e[r]))&&n.push(r);n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!qi.has(t)&&Li(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=Yi(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ti[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,a=n[i];n[i]=ti[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(t=>{let[n,r]=t;e.getValue(n).set(r)}),this.resolveNoneKeyframes()}}const Xi=e=>Boolean(e&&e.getVelocity);let Qi;function Zi(){Qi=void 0}const Ji={now:()=>(void 0===Qi&&Ji.set(ci.isProcessing||ri.useManualTiming?ci.timestamp:performance.now()),Qi),set:e=>{Qi=e,queueMicrotask(Zi)}};function ea(e,t){-1===e.indexOf(t)&&e.push(t)}function ta(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class na{constructor(){this.subscriptions=[]}add(e){return ea(this.subscriptions,e),()=>ta(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ra(e,t){return t?e*(1e3/t):0}const ia={current:void 0};class aa{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Ji.now();if(t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&(t.events.change?.notify(t.current),t.dependents))for(const i of t.dependents)i.dirty();n&&t.events.renderRequest?.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Ji.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new na);const n=this.events[e].add(t);return"change"===e?()=>{n(),si.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ia.current&&ia.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Ji.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return ra(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function oa(e,t){return new aa(e,t)}const sa=[...Yr,ji,Ii],{schedule:la,cancel:ca}=oi(queueMicrotask,!1),ua={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},da={};for(const n in ua)da[n]={isEnabled:e=>ua[n].some(t=>!!e[t])};const fa=()=>({x:{min:0,max:0},y:{min:0,max:0}}),ha="undefined"!==typeof window,pa={current:null},ma={current:!1};const ga=new WeakMap;function va(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function ya(e){return"string"===typeof e||Array.isArray(e)}const ba=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xa=["initial",...ba];function wa(e){return va(e.animate)||xa.some(t=>ya(e[t]))}function ka(e){return Boolean(wa(e)||e.variants)}function Sa(e){const t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Pa(e,t,n,r){if("function"===typeof t){const[i,a]=Sa(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=Sa(r);t=t(void 0!==n?n:e.custom,i,a)}return t}const Ea=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Ca{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=vi,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Ji.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,si.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=wa(n),this.isVariantNode=ka(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const e=d[f];void 0!==l[f]&&Xi(e)&&e.set(l[f],!1)}}mount(e){this.current=e,ga.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),ma.current||function(){if(ma.current=!0,ha)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>pa.current=e.matches;e.addEventListener("change",t),t()}else pa.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||pa.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),li(this.notifyUpdate),li(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=tr.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&si.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in da){const t=da[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Ea.length;n++){const t=Ea[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Xi(i))e.addValue(r,i);else if(Xi(a))e.addValue(r,oa(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,oa(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=oa(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(Gr(n)||yi(n))?n=parseFloat(n):!(e=>sa.find(Kr(e)))(n)&&Ii.test(t)&&(n=Yi(e,t)),this.setBaseTarget(e,Xi(n)?n.get():n)),Xi(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=Pa(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||Xi(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new na),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}scheduleRenderMicrotask(){la.render(this.render)}}class Ta extends Ca{constructor(){super(...arguments),this.KeyframeResolver=Gi}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Xi(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}const za=(e,t)=>t&&"number"===typeof e?t.transform(e):e,ja={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Aa=er.length;function _a(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(tr.has(l))o=!0;else if(hr(l))i[l]=e;else{const t=za(e,Ui[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<Aa;a++){const o=er[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=za(s,Ui[o]);l||(i=!1,r+=`${ja[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Ma(e,t,n,r){let{style:i,vars:a}=t;const o=e.style;let s;for(s in i)o[s]=i[s];for(s in r?.applyProjectionStyles(o,n),a)o.setProperty(s,a[s])}const Ra={};function La(e,t){let{layout:n,layoutId:r}=t;return tr.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Ra[e]||"opacity"===e)}function Oa(e,t,n){const{style:r}=e,i={};for(const a in r)(Xi(r[a])||t.style&&Xi(t.style[a])||La(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(i[a]=r[a]);return i}class Na extends Ta{constructor(){super(...arguments),this.type="html",this.renderInstance=Ma}readValueFromInstance(e,t){if(tr.has(t))return this.projection?.isProjecting?cr(t):((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return ur(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(hr(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Rr(e,n)}build(e,t,n){_a(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Oa(e,t,n)}}const Da=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Ia={offset:"stroke-dashoffset",array:"stroke-dasharray"},Va={offset:"strokeDashoffset",array:"strokeDasharray"};function Ba(e,t,n,r,i){let{attrX:a,attrY:o,attrScale:s,pathLength:l,pathSpacing:c=1,pathOffset:u=0,...d}=t;if(_a(e,d,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:f,style:h}=e;f.transform&&(h.transform=f.transform,delete f.transform),(h.transform||f.transformOrigin)&&(h.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),h.transform&&(h.transformBox=i?.transformBox??"fill-box",delete f.transformBox),void 0!==a&&(f.x=a),void 0!==o&&(f.y=o),void 0!==s&&(f.scale=s),void 0!==l&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Ia:Va;e[a.offset]=$r.transform(-r);const o=$r.transform(t),s=$r.transform(n);e[a.array]=`${o} ${s}`}(f,l,c,u,!1)}const Fa=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),$a=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Ha(e,t,n){const r=Oa(e,t,n);for(const i in e)if(Xi(e[i])||Xi(t[i])){r[-1!==er.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}class Ua extends Ta{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fa}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(tr.has(t)){const e=Ki(t);return e&&e.default||0}return t=Fa.has(t)?t:Da(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Ha(e,t,n)}build(e,t,n){Ba(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){!function(e,t,n,r){Ma(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Fa.has(i)?i:Da(i),t.attrs[i])}(e,t,0,r)}mount(e){this.isSVGTag=$a(e.tagName),super.mount(e)}}const Wa=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ka(e){return"string"===typeof e&&!e.includes("-")&&!!(Wa.indexOf(e)>-1||/[A-Z]/u.test(e))}const Ya=(t,n)=>Ka(t)?new Ua(n):new Na(n,{allowProjection:t!==e.Fragment});var qa=n(414);const Ga=(0,e.createContext)({}),Xa=(0,e.createContext)({strict:!1}),Qa=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Za=(0,e.createContext)({});function Ja(t){const{initial:n,animate:r}=function(e,t){if(wa(e)){const{initial:t,animate:n}=e;return{initial:!1===t||ya(t)?t:void 0,animate:ya(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Za));return(0,e.useMemo)(()=>({initial:n,animate:r}),[eo(n),eo(r)])}function eo(e){return Array.isArray(e)?e.join(" "):e}const to=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function no(e,t,n){for(const r in t)Xi(t[r])||La(r,n)||(e[r]=t[r])}function ro(t,n){const r={};return no(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return _a(e,n,r),Object.assign({},e.vars,e.style)},[n])}(t,n)),r}function io(e,t){const n={},r=ro(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const ao=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}});function oo(t,n,r,i){const a=(0,e.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Ba(e,n,$a(i),t.transformTemplate,t.style),{...e.attrs,style:{...e.style}}},[n]);if(t.style){const e={};no(e,t.style,t),a.style={...e,...a.style}}return a}const so=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function lo(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||so.has(e)}let co=e=>!lo(e);try{"function"===typeof(uo=require("@emotion/is-prop-valid").default)&&(co=e=>e.startsWith("on")?!lo(e):uo(e))}catch{}var uo;function fo(t,n,r,i,a){let{latestValues:o}=i,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=(Ka(t)?oo:io)(n,o,a,t),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(co(i)||!0===n&&lo(i)||!t&&!lo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"===typeof t,s),u=t!==e.Fragment?{...c,...l,ref:r}:{},{children:d}=n,f=(0,e.useMemo)(()=>Xi(d)?d.get():d,[d]);return(0,e.createElement)(t,{...u,children:f})}const ho=(0,e.createContext)(null);function po(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}function mo(e){return Xi(e)?e.get():e}function go(e,t,n,r){const i={},a=r(e,{});for(const f in a)i[f]=mo(a[f]);let{initial:o,animate:s}=e;const l=wa(e),c=ka(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!va(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=Pa(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}const vo=t=>(n,r)=>{const i=(0,e.useContext)(Za),a=(0,e.useContext)(ho),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a}=e;return{latestValues:go(t,n,r,i),renderState:a()}}(t,n,i,a);return r?o():po(o)},yo=vo({scrapeMotionValuesFromProps:Oa,createRenderState:to}),bo=vo({scrapeMotionValuesFromProps:Ha,createRenderState:ao});const xo=Symbol.for("motionComponentSymbol");function wo(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function ko(t,n,r){return(0,e.useCallback)(e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):wo(r)&&(r.current=e))},[n])}const So="data-"+Da("framerAppearId"),Po=(0,e.createContext)({}),Eo=ha?e.useLayoutEffect:e.useEffect;function Co(t,n,r,i,a){const{visualElement:o}=(0,e.useContext)(Za),s=(0,e.useContext)(Xa),l=(0,e.useContext)(ho),c=(0,e.useContext)(Qa).reducedMotion,u=(0,e.useRef)(null);i=i||s.renderer,!u.current&&i&&(u.current=i(t,{visualState:n,parent:o,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,f=(0,e.useContext)(Po);!d||d.projection||!a||"html"!==d.type&&"svg"!==d.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:To(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&wo(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,r,a,f);const h=(0,e.useRef)(!1);(0,e.useInsertionEffect)(()=>{d&&h.current&&d.update(r,l)});const p=r[So],m=(0,e.useRef)(Boolean(p)&&!window.MotionHandoffIsComplete?.(p)&&window.MotionHasOptimisedAnimation?.(p));return Eo(()=>{d&&(h.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),d.scheduleRenderMicrotask(),m.current&&d.animationState&&d.animationState.animateChanges())}),(0,e.useEffect)(()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(p)}),m.current=!1))}),d}function To(e){if(e)return!1!==e.options.allowProjection?e.projection:To(e.parent)}function zo(t){let{forwardMotionProps:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;r&&function(e){for(const t in e)da[t]={...da[t],...e[t]}}(r);const a=Ka(t)?bo:yo;function o(r,o){let s;const l={...(0,e.useContext)(Qa),...r,layoutId:jo(r)},{isStatic:c}=l,u=Ja(r),d=a(r,c);if(!c&&ha){!function(){(0,e.useContext)(Xa).strict;0}();const n=function(e){const{drag:t,layout:n}=da;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=n.MeasureLayout,u.visualElement=Co(t,d,l,i,n.ProjectionNode)}return(0,qa.jsxs)(Za.Provider,{value:u,children:[s&&u.visualElement?(0,qa.jsx)(s,{visualElement:u.visualElement,...l}):null,fo(t,r,ko(d,u.visualElement,o),d,c,n)]})}o.displayName=`motion.${"string"===typeof t?t:`create(${t.displayName??t.name??""})`}`;const s=(0,e.forwardRef)(o);return s[xo]=t,s}function jo(t){let{layoutId:n}=t;const r=(0,e.useContext)(Ga).id;return r&&void 0!==n?r+"-"+n:n}function Ao(e,t){if("undefined"===typeof Proxy)return zo;const n=new Map,r=(n,r)=>zo(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>"create"===a?r:(n.has(a)||n.set(a,zo(a,void 0,e,t)),n.get(a))})}function _o(e,t,n){const r=e.getProps();return Pa(r,t,void 0!==n?n:r.custom,e)}function Mo(e,t){return e?.[t]??e?.default??e}const Ro=e=>Array.isArray(e);function Lo(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,oa(n))}function Oo(e){return Ro(e)?e[e.length-1]||0:e}function No(e,t){const n=e.getValue("willChange");if(r=n,Boolean(Xi(r)&&r.add))return n.add(t);if(!n&&ri.WillChange){const n=new ri.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}function Do(e){return e.props[So]}const Io=(e,t)=>n=>t(e(n)),Vo=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Io)},Bo=e=>1e3*e,Fo=e=>e/1e3,$o={layout:0,mainThread:0,waapi:0};function Ho(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Uo(e,t){return n=>n>0?t:e}const Wo=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ko=[Ti,Ci,zi];function Yo(e){const t=(e=>Ko.find(t=>t.test(e)))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===zi&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=Ho(i,e,t+1/3),o=Ho(i,e,t),s=Ho(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const qo=(e,t)=>{const n=Yo(e),r=Yo(t);if(!n||!r)return Uo(e,t);const i={...n};return e=>(i.red=Wo(n.red,r.red,e),i.green=Wo(n.green,r.green,e),i.blue=Wo(n.blue,r.blue,e),i.alpha=yr(n.alpha,r.alpha,e),Ci.transform(i))},Go=new Set(["none","hidden"]);function Xo(e,t){return n=>yr(e,t,n)}function Qo(e){return"number"===typeof e?Xo:"string"===typeof e?mr(e)?Uo:ji.test(e)?qo:es:Array.isArray(e)?Zo:"object"===typeof e?ji.test(e)?qo:Jo:Uo}function Zo(e,t){const n=[...e],r=n.length,i=e.map((e,n)=>Qo(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Jo(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=Qo(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const es=(e,t)=>{const n=Ii.createTransformer(t),r=Li(e),i=Li(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Go.has(e)&&!i.values.length||Go.has(t)&&!r.values.length?function(e,t){return Go.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):Vo(Zo(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}(r,i),i.values),n):Uo(e,t)};function ts(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return yr(e,t,n);return Qo(e)(e,t)}const ns=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return si.update(t,e)},stop:()=>li(t),now:()=>ci.isProcessing?ci.timestamp:Ji.now()}},rs=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=Math.round(1e4*e(a/(i-1)))/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},is=2e4;function as(e){let t=0;let n=e.next(t);for(;!n.done&&t<is;)t+=50,n=e.next(t);return t>=is?1/0:t}function os(e,t,n){const r=Math.max(t-5,0);return ra(n-e(r),t-r)}const ss={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ls=.001;function cs(e){let t,n,{duration:r=ss.duration,bounce:i=ss.bounce,velocity:a=ss.velocity,mass:o=ss.mass}=e;Bo(ss.maxDuration);let s=1-i;s=Or(ss.minDamping,ss.maxDamping,s),r=Or(ss.minDuration,ss.maxDuration,Fo(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=ds(e,s),l=Math.exp(-n);return ls-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=ds(Math.pow(e,2),s);return(-t(e)+ls>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<us;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Bo(r),isNaN(l))return{stiffness:ss.stiffness,damping:ss.damping,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const us=12;function ds(e,t){return e*Math.sqrt(1-t*t)}const fs=["duration","bounce"],hs=["stiffness","damping","mass"];function ps(e,t){return t.some(t=>void 0!==e[t])}function ms(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ss.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ss.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=function(e){let t={velocity:ss.velocity,stiffness:ss.stiffness,damping:ss.damping,mass:ss.mass,isResolvedFromDuration:!1,...e};if(!ps(e,hs)&&ps(e,fs))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*Or(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ss.mass,stiffness:i,damping:a}}else{const n=cs(e);t={...t,...n,mass:ss.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-Fo(n.velocity||0)}),p=f||0,m=c/(2*Math.sqrt(l*u)),g=o-a,v=Fo(Math.sqrt(l/u)),y=Math.abs(g)<5;let b;if(r||(r=y?ss.restSpeed.granular:ss.restSpeed.default),i||(i=y?ss.restDelta.granular:ss.restDelta.default),m<1){const e=ds(v,m);b=t=>{const n=Math.exp(-m*v*t);return o-n*((p+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)b=e=>o-Math.exp(-v*e)*(g+(p+v*g)*e);else{const e=v*Math.sqrt(m*m-1);b=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return o-n*((p+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const x={calculatedDuration:h&&d||null,next:e=>{const t=b(e);if(h)s.done=e>=d;else{let n=0===e?p:0;m<1&&(n=0===e?Bo(p):os(b,e,t));const a=Math.abs(n)<=r,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(as(x),is),t=rs(t=>x.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return x}function gs(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const f=t[0],h={done:!1,value:f},p=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=f+m,v=void 0===s?g:s(g);v!==g&&(m=v-f);const y=e=>-m*Math.exp(-e/i),b=e=>v+y(e),x=e=>{const t=y(e),n=b(e);h.done=Math.abs(t)<=u,h.value=h.done?v:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,k=ms({keyframes:[h.value,p(h.value)],velocity:os(b,e,h.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,x(e),S(e)),void 0!==w&&e>=w?k.next(e-w):(!t&&x(e),h)}}}ms.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(as(n),is);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:Fo(r)}}(e,100,ms);return e.ease=t.ease,e.duration=Bo(t.duration),e.type="keyframes",e};const vs=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function ys(e,t,n,r){if(e===t&&n===r)return ni;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=vs(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:vs(i(e),t,r)}const bs=ys(.42,0,1,1),xs=ys(0,0,.58,1),ws=ys(.42,0,.58,1),ks=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ss=e=>t=>1-e(1-t),Ps=ys(.33,1.53,.69,.99),Es=Ss(Ps),Cs=ks(Es),Ts=e=>(e*=2)<1?.5*Es(e):.5*(2-Math.pow(2,-10*(e-1))),zs=e=>1-Math.sin(Math.acos(e)),js=Ss(zs),As=ks(zs),_s=e=>Array.isArray(e)&&"number"===typeof e[0],Ms={linear:ni,easeIn:bs,easeInOut:ws,easeOut:xs,circIn:zs,circInOut:As,circOut:js,backIn:Es,backInOut:Cs,backOut:Ps,anticipate:Ts},Rs=e=>{if(_s(e)){e.length;const[t,n,r,i]=e;return ys(t,n,r,i)}return"string"===typeof e?Ms[e]:e},Ls=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function Os(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||ri.mix||ts,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||ni:t;n=Vo(e,n)}r.push(n)}return r}(t,r,i),l=s.length,c=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=Ls(e[r],e[r+1],n);return s[r](i)};return n?t=>c(Or(e[0],e[a-1],t)):c}function Ns(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ls(0,t,r);e.push(yr(n,1,i))}}(t,e.length-1),t}function Ds(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Rs):Rs(i),o={done:!1,value:n[0]},s=function(e,t){return e.map(e=>e*t)}(r&&r.length===n.length?r:Ns(n),t),l=Os(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map(()=>u||ws).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const Is=e=>null!==e;function Vs(e,t,n){let{repeat:r,repeatType:i="loop"}=t,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const o=e.filter(Is),s=a<0||r&&"loop"!==i&&r%2===1?0:o.length-1;return s&&void 0!==n?n:o[s]}const Bs={decay:gs,inertia:gs,tween:Ds,keyframes:Ds,spring:ms};function Fs(e){"string"===typeof e.type&&(e.type=Bs[e.type])}class $s{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Hs=e=>e/100;class Us extends $s{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:e}=this.options;e&&e.updatedAt!==Ji.now()&&this.tick(Ji.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},$o.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){const{options:e}=this;Fs(e);const{type:t=Ds,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e;let{keyframes:o}=e;const s=t||Ds;s!==Ds&&"number"!==typeof o[0]&&(this.mixKeyframes=Vo(Hs,ts(o[0],o[1])),o=[0,100]);const l=s({...e,keyframes:o});"mirror"===i&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),null===l.calculatedDuration&&(l.calculatedDuration=as(l));const{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(null===this.startTime)return n.next(0);const{delay:l=0,keyframes:c,repeat:u,repeatType:d,repeatDelay:f,type:h,onUpdate:p,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const g=this.currentTime-l*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);let y=this.currentTime,b=n;if(u){const e=Math.min(this.currentTime,r)/o;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,u+1);Boolean(t%2)&&("reverse"===d?(n=1-n,f&&(n-=f/o)):"mirror"===d&&(b=a)),y=Or(0,1,n)*o}const x=v?{done:!1,value:c[0]}:b.next(y);i&&(x.value=i(x.value));let{done:w}=x;v||null===s||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const k=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return k&&h!==gs&&(x.value=Vs(c,this.options,m,this.speed)),p&&p(x.value),k&&this.finish(),x}then(e,t){return this.finished.then(e,t)}get duration(){return Fo(this.calculatedDuration)}get time(){return Fo(this.currentTime)}set time(e){e=Bo(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Ji.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Fo(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=ns,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();const n=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ji.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,$o.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function Ws(e){let t;return()=>(void 0===t&&(t=e()),t)}const Ks=Ws(()=>void 0!==window.ScrollTimeline),Ys={};function qs(e,t){const n=Ws(e);return()=>Ys[t]??n()}const Gs=qs(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0},"linearEasing"),Xs=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Qs={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xs([0,.65,.55,1]),circOut:Xs([.55,0,1,.45]),backIn:Xs([.31,.01,.66,-.59]),backOut:Xs([.33,1.53,.69,.99])};function Zs(e,t){return e?"function"===typeof e?Gs()?rs(e,t):"ease-out":_s(e)?Xs(e):Array.isArray(e)?e.map(e=>Zs(e,t)||Qs.easeOut):Qs[e]:void 0}function Js(e,t,n){let{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=Zs(s,i);Array.isArray(d)&&(u.easing=d),ai.value&&$o.waapi++;const f={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"};c&&(f.pseudoElement=c);const h=e.animate(u,f);return ai.value&&h.finished.finally(()=>{$o.waapi--}),h}function el(e){return"function"===typeof e&&"applyToOptions"in e}class tl extends $s{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=Boolean(i),this.allowFlatten=a,this.options=e,e.type;const l=function(e){let{type:t,...n}=e;return el(t)&&Gs()?t.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}(e);this.animation=Js(t,n,r,l,i),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const e=Vs(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(e){}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Fo(Number(e))}get time(){return Fo(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Bo(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline(e){let{timeline:t,observe:n}=e;return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&Ks()?(this.animation.timeline=t,ni):n(this)}}const nl={anticipate:Ts,backInOut:Cs,circInOut:As};function rl(e){"string"===typeof e.ease&&e.ease in nl&&(e.ease=nl[e.ease])}class il extends tl{constructor(e){rl(e),Fs(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);const o=new Us({...a,autoplay:!1}),s=Bo(this.finishedTime??this.time);t.setWithVelocity(o.sample(s-10).value,o.sample(s).value,10),o.stop()}}const al=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!Ii.test(e)&&"0"!==e||e.startsWith("url(")));const ol=new Set(["opacity","clipPath","filter","transform"]),sl=Ws(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class ll extends $s{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",keyframes:s,name:l,motionValue:c,element:u,...d}=e;super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ji.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,name:l,motionValue:c,element:u,...d},h=u?.KeyframeResolver||vi;this.keyframeResolver=new h(s,(e,t,n)=>this.onKeyframesResolved(e,t,f,!n),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;const{name:i,type:a,velocity:o,delay:s,isHandoff:l,onUpdate:c}=n;this.resolvedAt=Ji.now(),function(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=al(i,t),s=al(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||el(n))&&r)}(e,i,a,o)||(!ri.instantAnimations&&s||c?.(Vs(e,n,t)),e[0]=e[e.length-1],n.duration=0,n.repeat=0);const u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!l&&function(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e,s=t?.owner?.current;if(!(s instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=t.owner.getProps();return sl()&&n&&ol.has(n)&&("transform"!==n||!c)&&!l&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}(u)?new il({...u,element:u.motionValue.owner.current}):new Us(u);d.finished.then(()=>this.notifyFinished()).catch(ni),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),pi=!0,gi(),mi(),pi=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const cl=e=>null!==e;const ul={type:"spring",stiffness:500,damping:25,restSpeed:10},dl={type:"keyframes",duration:.8},fl={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hl=(e,t)=>{let{keyframes:n}=t;return n.length>2?dl:tr.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:ul:fl};const pl=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=Mo(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=Bo(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||Object.assign(u,hl(e,u)),u.duration&&(u.duration=Bo(u.duration)),u.repeatDelay&&(u.repeatDelay=Bo(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(ri.instantAnimations||ri.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=function(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const a=e.filter(cl),o=r&&"loop"!==i&&r%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}(u.keyframes,s);if(void 0!==e)return void si.update(()=>{u.onUpdate(e),u.onComplete()})}return s.isSync?new Us(u):new ll(u)}};function ml(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function gl(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),r=s[u];if(void 0===r||c&&ml(c,u))continue;const i={delay:n,...Mo(a||{},u)},o=t.get();if(void 0!==o&&!t.isAnimating&&!Array.isArray(r)&&r===o&&!i.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const t=Do(e);if(t){const e=window.MotionHandoffAnimation(t,u,si);null!==e&&(i.startTime=e,d=!0)}}No(e,u),t.start(pl(u,t,r,e.shouldReduceMotion&&Lr.has(u)?{type:!1}:i,e,d));const f=t.animation;f&&l.push(f)}return o&&Promise.all(l).then(()=>{si.update(()=>{o&&function(e,t){const n=_o(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)Lo(e,o,Oo(a[o]))}(e,o)})}),l}function vl(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=_o(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(gl(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=arguments.length>6?arguments[6]:void 0;const s=[],l=e.variantChildren.size,c=(l-1)*i,u="function"===typeof r,d=u?e=>r(e,l):1===a?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i}:function(){return c-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i};return Array.from(e.variantChildren).sort(yl).forEach((e,i)=>{e.notify("AnimationStart",t),s.push(vl(e,t,{...o,delay:n+(u?0:r)+d(i)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(s)}(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function yl(e,t){return e.sortNodePosition(t)}function bl(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const xl=xa.length;function wl(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&wl(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<xl;n++){const r=xa[n],i=e.props[r];(ya(i)||!1===i)&&(t[r]=i)}return t}const kl=[...ba].reverse(),Sl=ba.length;function Pl(e){return t=>Promise.all(t.map(t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>vl(e,t,r));n=Promise.all(i)}else if("string"===typeof t)n=vl(e,t,r);else{const i="function"===typeof t?_o(e,t,r.custom):t;n=Promise.all(gl(e,i,r))}return n.then(()=>{e.notify("AnimationComplete",t)})}(e,n,r)}))}function El(e){let t=Pl(e),n=zl(),r=!0;const i=t=>(n,r)=>{const i=_o(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=wl(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<Sl;t++){const f=kl[t],h=n[f],p=void 0!==o[f]?o[f]:s[f],m=ya(p),g=f===a?h.isActive:null;!1===g&&(d=t);let v=p===s[f]&&p!==o[f]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),h.protectedKeys={...u},!h.isActive&&null===g||!p&&!h.prevProp||va(p)||"boolean"===typeof p)continue;const y=Cl(h.prevProp,p);let b=y||f===a&&h.isActive&&!v&&m||t>d&&m,x=!1;const w=Array.isArray(p)?p:[p];let k=w.reduce(i(f),{});!1===g&&(k={});const{prevResolvedValues:S={}}=h,P={...S,...k},E=t=>{b=!0,c.has(t)&&(x=!0,c.delete(t)),h.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in P){const t=k[e],n=S[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ro(t)&&Ro(n)?!bl(t,n):t!==n,r?void 0!==t&&null!==t?E(e):c.add(e):void 0!==t&&c.has(e)?E(e):h.protectedKeys[e]=!0}h.prevProp=p,h.prevResolvedValues=k,h.isActive&&(u={...u,...k}),r&&e.blockInitialAnimation&&(b=!1);b&&(!(v&&y)||x)&&l.push(...w.map(e=>({animation:e,options:{type:f}})))}if(c.size){const t={};if("boolean"!==typeof o.initial){const n=_o(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach(n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let f=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(f=!1),r=!1,f?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;const i=a(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=zl(),r=!0}}}function Cl(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!bl(t,e)}function Tl(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zl(){return{animate:Tl(!0),whileInView:Tl(),whileHover:Tl(),whileTap:Tl(),whileDrag:Tl(),whileFocus:Tl(),exit:Tl()}}class jl{constructor(e){this.isMounted=!1,this.node=e}update(){}}let Al=0;const _l={animation:{Feature:class extends jl{constructor(e){super(e),e.animationState||(e.animationState=El(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();va(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends jl{constructor(){super(...arguments),this.id=Al++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},Ml={x:!1,y:!1};function Rl(){return Ml.x||Ml.y}function Ll(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Ol=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function Nl(e){return{point:{x:e.pageX,y:e.pageY}}}function Dl(e,t,n,r){return Ll(e,t,(e=>t=>Ol(t)&&e(t,Nl(t)))(n),r)}function Il(e){return e.max-e.min}function Vl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=yr(t.min,t.max,e.origin),e.scale=Il(n)/Il(t),e.translate=yr(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function Bl(e,t,n,r){Vl(e.x,t.x,n.x,r?r.originX:void 0),Vl(e.y,t.y,n.y,r?r.originY:void 0)}function Fl(e,t,n){e.min=n.min+t.min,e.max=e.min+Il(t)}function $l(e,t,n){e.min=t.min-n.min,e.max=e.min+Il(t)}function Hl(e,t,n){$l(e.x,t.x,n.x),$l(e.y,t.y,n.y)}function Ul(e){return[e("x"),e("y")]}const Wl=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Kl=(e,t)=>Math.abs(e-t);class Yl{constructor(e,t){let{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Xl(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Kl(e.x,t.x),r=Kl(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=ci;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ql(t,this.transformPagePoint),si.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Xl("pointercancel"===e.type?this.lastMoveEventInfo:ql(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ol(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;const o=ql(Nl(e),this.transformPagePoint),{point:s}=o,{timestamp:l}=ci;this.history=[{...s,timestamp:l}];const{onSessionStart:c}=t;c&&c(e,Xl(o,this.history)),this.removeListeners=Vo(Dl(this.contextWindow,"pointermove",this.handlePointerMove),Dl(this.contextWindow,"pointerup",this.handlePointerUp),Dl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),li(this.updatePoint)}}function ql(e,t){return t?{point:t(e.point)}:e}function Gl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Xl(e,t){let{point:n}=e;return{point:n,delta:Gl(n,Zl(t)),offset:Gl(n,Ql(t)),velocity:Jl(t,.1)}}function Ql(e){return e[0]}function Zl(e){return e[e.length-1]}function Jl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Zl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Bo(t)));)n--;if(!r)return{x:0,y:0};const a=Fo(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ec(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function tc(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const nc=.35;function rc(e,t,n){return{min:ic(e,t),max:ic(e,n)}}function ic(e,t){return"number"===typeof e?e:e[t]||0}const ac=new WeakMap;class oc{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e){let{snapToCursor:t=!1,distanceThreshold:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new Yl(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Nl(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?Ml[a]?null:(Ml[a]=!0,()=>{Ml[a]=!1}):Ml.x||Ml.y?null:(Ml.x=Ml.y=!0,()=>{Ml.x=Ml.y=!1}),!this.openDragLock))return;var a;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ul(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Fr.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Il(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&si.postRender(()=>i(e,t)),No(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},resumeAnimation:()=>Ul(e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play())},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,distanceThreshold:n,contextWindow:Wl(this.visualElement)})}stop(e,t){const n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&si.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!sc(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?yr(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?yr(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&wo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:ec(e.x,r,a),y:ec(e.y,n,i)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nc;return!1===e?e=0:!0===e&&(e=nc),{x:rc(e,"left","right"),y:rc(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Ul(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!wo(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Rr(e,n),{scroll:i}=t;return i&&(Ar(r.x,i.offset.x),Ar(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:tc(e.x,t.x),y:tc(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=vr(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=Ul(o=>{if(!sc(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)});return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return No(this.visualElement,e),n.start(pl(e,n,0,t,this.visualElement,!1))}stopAnimation(){Ul(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ul(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Ul(t=>{const{drag:n}=this.getProps();if(!sc(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-yr(n,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!wo(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ul(e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=Il(e),i=Il(t);return i>r?n=Ls(t.min,t.max-r,e.min):r>i&&(n=Ls(e.min,e.max-i,t.min)),Or(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Ul(t=>{if(!sc(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(yr(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;ac.set(this.visualElement,this);const e=Dl(this.visualElement.current,"pointerdown",e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{const{dragConstraints:e}=this.getProps();wo(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),si.read(t);const i=Ll(window,"resize",()=>this.scalePositionWithinConstraints()),a=n.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(Ul(e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=nc,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function sc(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const lc=e=>(t,n)=>{e&&si.postRender(()=>e(t,n))};function cc(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(ho);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:a}=n,o=(0,e.useId)();(0,e.useEffect)(()=>{if(t)return a(o)},[t]);const s=(0,e.useCallback)(()=>t&&i&&i(o),[o,i,t]);return!r&&i?[!1,s]:[!0]}const uc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function dc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const fc={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!$r.test(e))return e;e=parseFloat(e)}return`${dc(e,t.target.x)}% ${dc(e,t.target.y)}%`}},hc={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=Ii.parse(e);if(a.length>5)return i;const o=Ii.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=yr(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}};let pc=!1;class mc extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)Ra[t]=e[t],hr(t)&&(Ra[t].isCSSVariable=!0)}(vc),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),pc&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),uc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,pc=!0,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||si.postRender(()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),la.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function gc(t){const[n,r]=cc(),i=(0,e.useContext)(Ga);return(0,qa.jsx)(mc,{...t,layoutGroup:i,switchLayoutGroup:(0,e.useContext)(Po),isPresent:n,safeToRemove:r})}const vc={borderRadius:{...fc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fc,borderTopRightRadius:fc,borderBottomLeftRadius:fc,borderBottomRightRadius:fc,boxShadow:hc};function yc(e){return"object"===typeof e&&null!==e}function bc(e){return yc(e)&&"ownerSVGElement"in e}const xc=(e,t)=>e.depth-t.depth;class wc{constructor(){this.children=[],this.isDirty=!1}add(e){ea(this.children,e),this.isDirty=!0}remove(e){ta(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(xc),this.isDirty=!1,this.children.forEach(e)}}function kc(e,t){const n=Ji.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(li(r),e(o-t))};return si.setup(r,!0),()=>li(r)}const Sc=["TopLeft","TopRight","BottomLeft","BottomRight"],Pc=Sc.length,Ec=e=>"string"===typeof e?parseFloat(e):e,Cc=e=>"number"===typeof e||$r.test(e);function Tc(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const zc=Ac(0,.5,js),jc=Ac(.5,.95,ni);function Ac(e,t,n){return r=>r<e?0:r>t?1:n(Ls(e,t,r))}function _c(e,t){e.min=t.min,e.max=t.max}function Mc(e,t){_c(e.x,t.x),_c(e.y,t.y)}function Rc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Lc(e,t,n,r,i){return e=Pr(e-=t,1/n,r),void 0!==i&&(e=Pr(e,1/i,r)),e}function Oc(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Fr.test(t)&&(t=parseFloat(t),t=yr(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=yr(a.min,a.max,r);e===a&&(s-=t),e.min=Lc(e.min,t,n,s,i),e.max=Lc(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const Nc=["x","scaleX","originX"],Dc=["y","scaleY","originY"];function Ic(e,t,n,r){Oc(e.x,t,Nc,n?n.x:void 0,r?r.x:void 0),Oc(e.y,t,Dc,n?n.y:void 0,r?r.y:void 0)}function Vc(e){return 0===e.translate&&1===e.scale}function Bc(e){return Vc(e.x)&&Vc(e.y)}function Fc(e,t){return e.min===t.min&&e.max===t.max}function $c(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Hc(e,t){return $c(e.x,t.x)&&$c(e.y,t.y)}function Uc(e){return Il(e.x)/Il(e.y)}function Wc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Kc{constructor(){this.members=[]}add(e){ea(this.members,e),e.scheduleRender()}remove(e){if(ta(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex(t=>e===t);if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Yc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},qc=["","X","Y","Z"];let Gc=0;function Xc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Qc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Do(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",si,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Qc(r)}function Zc(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=Gc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ai.value&&(Yc.nodes=Yc.calculatedTargetDeltas=Yc.calculatedProjections=0),this.nodes.forEach(tu),this.nodes.forEach(lu),this.nodes.forEach(cu),this.nodes.forEach(nu),ai.addProjectionMetrics&&ai.addProjectionMetrics(Yc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new wc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new na),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){if(this.instance)return;var n;this.isSVG=bc(e)&&!(bc(n=e)&&"svg"===n.tagName),this.instance=e;const{layoutId:r,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||r)&&(this.isLayoutDirty=!0),t){let n,r=0;const i=()=>this.root.updateBlockedByResize=!1;si.read(()=>{r=window.innerWidth}),t(e,()=>{const e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=kc(i,250),uc.hasAnimatedSinceResize&&(uc.hasAnimatedSinceResize=!1,this.nodes.forEach(su)))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&a&&(r||i)&&this.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||mu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!Hc(this.targetLayout,i),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const e={...Mo(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e),this.setAnimationOrigin(t,u)}else n||su(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),li(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Qc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(iu);if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(au);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(ou),this.nodes.forEach(Jc),this.nodes.forEach(eu)):this.nodes.forEach(au),this.clearAllSnapshots();const e=Ji.now();ci.delta=Or(0,1e3/60,e-ci.timestamp),ci.timestamp=e,ci.isProcessing=!0,ui.update.process(ci),ui.preRender.process(ci),ui.render.process(ci),ci.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,la.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ru),this.sharedNodes.forEach(du)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,si.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){si.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||Il(this.snapshot.measuredBox.x)||Il(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Bc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||wr(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),yu((r=n).x),yu(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(xu))){const{scroll:e}=this.root;e&&(Ar(t.x,e.offset.x),Ar(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(Mc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Mc(t,e),Ar(t.x,i.offset.x),Ar(t.y,i.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Mc(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Mr(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),wr(e.latestValues)&&Mr(n,e.latestValues)}return wr(this.latestValues)&&Mr(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Mc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!wr(e.latestValues))continue;xr(e.latestValues)&&e.updateSnapshot();const r=fa();Mc(r,e.measurePageBox()),Ic(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return wr(this.latestValues)&&Ic(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ci.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(this.layout&&(r||i)){if(this.resolvedRelativeTargetAt=ci.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Hl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Mc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,o,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,o=this.relativeTarget,s=this.relativeParent.target,Fl(a.x,o.x,s.x),Fl(a.y,o.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Mc(this.target,this.layout.layoutBox),Tr(this.target,this.targetDelta)):Mc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Hl(this.relativeTargetOrigin,this.target,e.target),Mc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ai.value&&Yc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!xr(this.parent.latestValues)&&!kr(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===ci.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;Mc(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Mr(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Tr(e,o)),r&&wr(a.latestValues)&&Mr(e,a.latestValues))}t.x<jr&&t.x>zr&&(t.x=1),t.y<jr&&t.y>zr&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(Rc(this.prevProjectionDelta.x,this.projectionDelta.x),Rc(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Bl(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&Wc(this.projectionDelta.x,this.prevProjectionDelta.x)&&Wc(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),ai.value&&Yc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(pu));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;fu(a.x,e.x,n),fu(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Hl(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){hu(e.x,t.x,n.x,r),hu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return Fc(e.x,t.x)&&Fc(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Mc(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=yr(0,n.opacity??1,zc(r)),e.opacityExit=yr(t.opacity??1,0,jc(r))):a&&(e.opacity=yr(t.opacity??1,n.opacity??1,r));for(let o=0;o<Pc;o++){const i=`border${Sc[o]}Radius`;let a=Tc(t,i),s=Tc(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Cc(a)===Cc(s)?(e[i]=Math.max(yr(Ec(a),Ec(s),r),0),(Fr.test(s)||Fr.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=yr(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(li(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=si.update(()=>{uc.hasAnimatedSinceResize=!0,$o.layout++,this.motionValue||(this.motionValue=oa(0)),this.currentAnimation=function(e,t,n){const r=Xi(e)?e:oa(e);return r.start(pl("",r,t,n)),r.animation}(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{$o.layout--},onComplete:()=>{$o.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&bu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Il(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Il(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Mc(t,n),Mr(t,i),Bl(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Kc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&Xc("z",e,r,this.animationValues);for(let i=0;i<qc.length;i++)Xc(`rotate${qc[i]}`,e,r,this.animationValues),Xc(`skew${qc[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return void(e.visibility="hidden");const n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=mo(t?.pointerEvents)||"",void(e.transform=n?n(this.latestValues,""):"none");const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target)return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=mo(t?.pointerEvents)||""),void(this.hasProjected&&!wr(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1));e.visibility="";const i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;const{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${100*o.origin}% ${100*s.origin}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const l in Ra){if(void 0===i[l])continue;const{correct:t,applyTo:n,isCSSVariable:o}=Ra[l],s="none"===a?i[l]:t(i[l],r);if(n){const t=n.length;for(let r=0;r<t;r++)e[n[r]]=s}else o?this.options.visualElement.renderState.vars[l]=s:e[l]=s}this.options.layoutId&&(e.pointerEvents=r===this?mo(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(iu),this.root.sharedNodes.clear()}}}function Jc(e){e.updateLayout()}function eu(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;"size"===i?Ul(e=>{const r=a?t.measuredBox[e]:t.layoutBox[e],i=Il(r);r.min=n[e].min,r.max=r.min+i}):bu(i,t.layoutBox,n)&&Ul(r=>{const i=a?t.measuredBox[r]:t.layoutBox[r],o=Il(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Bl(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?Bl(s,e.applyTransform(r,!0),t.measuredBox):Bl(s,n,t.layoutBox);const l=!Bc(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};Hl(o,t.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Hl(s,n,a.layoutBox),Hc(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function tu(e){ai.value&&Yc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function nu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ru(e){e.clearSnapshot()}function iu(e){e.clearMeasurements()}function au(e){e.isLayoutDirty=!1}function ou(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function su(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function lu(e){e.resolveTargetDelta()}function cu(e){e.calcProjection()}function uu(e){e.resetSkewAndRotation()}function du(e){e.removeLeadSnapshot()}function fu(e,t,n){e.translate=yr(t.translate,0,n),e.scale=yr(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function hu(e,t,n,r){e.min=yr(t.min,n.min,r),e.max=yr(t.max,n.max,r)}function pu(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const mu={duration:.45,ease:[.4,0,.1,1]},gu=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),vu=gu("applewebkit/")&&!gu("chrome/")?Math.round:ni;function yu(e){e.min=vu(e.min),e.max=vu(e.max)}function bu(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Uc(t),i=Uc(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function xu(e){return e!==e.root&&e.scroll?.wasRoot}const wu=Zc({attachResizeListener:(e,t)=>Ll(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ku={current:void 0},Su=Zc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ku.current){const e=new wu({});e.mount(window),e.setOptions({layoutScroll:!0}),ku.current=e}return ku.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Pu={pan:{Feature:class extends jl{constructor(){super(...arguments),this.removePointerDownListener=ni}onPointerDown(e){this.session=new Yl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wl(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:lc(e),onStart:lc(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&si.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Dl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends jl{constructor(e){super(e),this.removeGroupControls=ni,this.removeListeners=ni,this.controls=new oc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ni}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Su,MeasureLayout:gc}};function Eu(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Cu(e){return!("touch"===e.pointerType||Rl())}function Tu(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&si.postRender(()=>i(t,Nl(t)))}function zu(e){return yc(e)&&"offsetHeight"in e}const ju=(e,t)=>!!t&&(e===t||ju(e,t.parentElement)),Au=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const _u=new WeakSet;function Mu(e){return t=>{"Enter"===t.key&&e(t)}}function Ru(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function Lu(e){return Ol(e)&&!Rl()}function Ou(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Eu(e,n),o=e=>{const r=e.currentTarget;if(!Lu(e))return;_u.add(r);const a=t(r,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),_u.has(r)&&_u.delete(r),Lu(e)&&"function"===typeof a&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||ju(r,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach(e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,i),zu(e)&&(e.addEventListener("focus",e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=Mu(()=>{if(_u.has(n))return;Ru(n,"down");const e=Mu(()=>{Ru(n,"up")});n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>Ru(n,"cancel"),t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)})(e,i)),t=e,Au.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))}),a}function Nu(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&si.postRender(()=>i(t,Nl(t)))}const Du=new WeakMap,Iu=new WeakMap,Vu=e=>{const t=Du.get(e.target);t&&t(e)},Bu=e=>{e.forEach(Vu)};function Fu(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Iu.has(r)||Iu.set(r,{});const i=Iu.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(Bu,{root:t,...n})),i[a]}(t);return Du.set(e,n),r.observe(e),()=>{Du.delete(e),r.unobserve(e)}}const $u={some:0,all:1};const Hu={inView:{Feature:class extends jl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:$u[r]};return Fu(this.node.current,a,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends jl{mount(){const{current:e}=this.node;e&&(this.unmount=Ou(e,(e,t)=>(Nu(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Nu(this.node,e,n?"End":"Cancel")}),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends jl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vo(Ll(this.node.current,"focus",()=>this.onFocus()),Ll(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends jl{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Eu(e,n),o=e=>{if(!Cu(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const a=e=>{Cu(e)&&(r(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,i)};return r.forEach(e=>{e.addEventListener("pointerenter",o,i)}),a}(e,(e,t)=>(Tu(this.node,t,"Start"),e=>Tu(this.node,e,"End"))))}unmount(){}}}},Uu=Ao({..._l,...Hu,...Pu,...{layout:{ProjectionNode:Su,MeasureLayout:gc}}},Ya),Wu=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=Ut.apply(void 0,o([t],n,!1)),s="sc-global-".concat(je(JSON.stringify(i))),l=new qt(i,s),c=function(t){var n=zt(),r=e.useContext(Vt),i=e.useRef(n.styleSheet.allocateGSInstance(s)).current;return n.styleSheet.server&&u(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect(function(){if(!n.styleSheet.server)return u(i,t,n.styleSheet,r,n.stylis),function(){return l.removeStyles(i,n.styleSheet)}},[i,t,n.styleSheet,r,n.stylis]),null};function u(e,t,n,r,i){if(l.isStatic)l.renderStyles(e,me,n,i);else{var o=a(a({},t),{theme:ye(t,r,c.defaultProps)});l.renderStyles(e,o,n,i)}}return e.memo(c)})`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }

  code {
    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-feature-settings: 'liga', 'calt';
  }

  // 개선된 폰트 스타일링
  .font-thin { font-family: 'Inter', 'Noto Sans KR'; font-weight: 100; }
  .font-extralight { font-family: 'Inter', 'Noto Sans KR'; font-weight: 200; }
  .font-light { font-family: 'Inter', 'Noto Sans KR'; font-weight: 300; }
  .font-regular { font-family: 'Inter', 'Noto Sans KR'; font-weight: 400; }
  .font-medium { font-family: 'Inter', 'Noto Sans KR'; font-weight: 500; }
  .font-semibold { font-family: 'Inter', 'Noto Sans KR'; font-weight: 600; }
  .font-bold { font-family: 'Inter', 'Noto Sans KR'; font-weight: 700; }
  .font-extrabold { font-family: 'Inter', 'Noto Sans KR'; font-weight: 800; }
  .font-black { font-family: 'Inter', 'Noto Sans KR'; font-weight: 900; }
`,Ku=Yt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`,Yu=Yt.section`
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`,qu=Yt.h2`
  font-size: 3rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`,Gu=(Yt.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  letter-spacing: -0.01em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 14px;
  }
`,Yt.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`),Xu="#667eea",Qu="#764ba2",Zu="#2c3e50",Ju="#ecf0f1",ed="#2ecc71",td="#f39c12",nd="#333333",rd="#666666",id="#f8f9fa",ad={primary:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",secondary:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",success:"linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",dark:"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"},od="480px",sd="768px",ld="1024px",cd=Yt(Uu.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${e=>e.scrolled?"rgba(255, 255, 255, 0.85)":"rgba(255, 255, 255, 0.05)"};
  backdrop-filter: blur(${e=>e.scrolled?"20px":"10px"});
  border-bottom: ${e=>e.scrolled?"1px solid rgba(255, 255, 255, 0.2)":"1px solid rgba(255, 255, 255, 0.1)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.scrolled?"linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)":"transparent"};
    border-radius: 0 0 0 0;
    z-index: -1;
  }
`,ud=Yt.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,dd=Yt(Uu.div)`
  font-size: 2rem;
  font-family: 'Pretendard-ExtraBold';
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }
`,fd=Yt.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${e=>e.isOpen?"0":"-100%"};
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(25px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 3rem;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
`,hd=Yt(Uu.li)`
  position: relative;
`,pd=Yt.a`
  text-decoration: none;
  color: ${e=>e.scrolled?Zu:"rgba(51, 51, 51, 0.9)"};
  font-family: 'Pretendard-Medium';
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  letter-spacing: -0.01em;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(102, 126, 234, 0.1);
    border-radius: 25px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0.2rem;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
  }

  &:hover {
    color: ${Xu};
    transform: translateY(-2px);
    
    &::before {
      width: 100%;
      height: 100%;
    }
    
    &::after {
      width: 60%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    color: ${Zu};
  }
`,md=Yt(Uu.button)`
  display: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.75rem;
  font-size: 1.2rem;
  color: ${Zu};
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,gd=Yt(Uu.a)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 30px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,vd=Yt.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`,yd=Yt(Uu.a)`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Zu};
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }
`,bd=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Education",href:"#education"}],xd=()=>{const[t,n]=(0,e.useState)(!1),[r,i]=(0,e.useState)(!1);(0,e.useEffect)(()=>{const e=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const a=()=>{n(!1)};return(0,qa.jsx)(cd,{scrolled:r,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,ease:[.4,0,.2,1]},children:(0,qa.jsxs)(ud,{children:[(0,qa.jsx)(dd,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{var e;null===(e=document.getElementById("home"))||void 0===e||e.scrollIntoView({behavior:"smooth"}),a()},children:"DONGKYU"}),(0,qa.jsx)(fd,{isOpen:t,children:bd.map((e,t)=>(0,qa.jsx)(hd,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*t,duration:.5,ease:[.4,0,.2,1]},children:(0,qa.jsx)(pd,{href:e.href,scrolled:r,onClick:t=>{var n;t.preventDefault(),null===(n=document.getElementById(e.href.slice(1)))||void 0===n||n.scrollIntoView({behavior:"smooth",block:"start"}),a()},children:e.name})},e.name))}),(0,qa.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,qa.jsxs)(vd,{children:[(0,qa.jsx)(yd,{href:"https://github.com/dongkyukim1",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,qa.jsx)(dn,{})}),(0,qa.jsx)(yd,{href:"https://linkedin.com/in/dongkyukim1",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,qa.jsx)(pn,{})})]}),(0,qa.jsx)(gd,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e=>{var t;e.preventDefault(),null===(t=document.getElementById("contact"))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"})},children:"\uc5f0\ub77d\ud558\uae30"})]}),(0,qa.jsx)(md,{onClick:()=>{n(!t)},whileHover:{scale:1.05},whileTap:{scale:.95},children:t?(0,qa.jsx)(Gn,{}):(0,qa.jsx)(xn,{})})]})})};class wd extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=zu(e)&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function kd(t){let{children:n,isPresent:r,anchorX:i,root:a}=t;const o=(0,e.useId)(),s=(0,e.useRef)(null),l=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=(0,e.useContext)(Qa);return(0,e.useInsertionEffect)(()=>{const{width:e,height:t,top:n,left:u,right:d}=l.current;if(r||!s.current||!e||!t)return;const f="left"===i?`left: ${u}`:`right: ${d}`;s.current.dataset.motionPopId=o;const h=document.createElement("style");c&&(h.nonce=c);const p=a??document.head;return p.appendChild(h),h.sheet&&h.sheet.insertRule(`\n          [data-motion-pop-id="${o}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${f}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{p.contains(h)&&p.removeChild(h)}},[r]),(0,qa.jsx)(wd,{isPresent:r,childRef:s,sizeRef:l,children:e.cloneElement(n,{ref:s})})}const Sd=t=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:c,root:u}=t;const d=po(Pd),f=(0,e.useId)();let h=!0,p=(0,e.useMemo)(()=>(h=!1,{id:f,initial:r,isPresent:i,custom:o,onExitComplete:e=>{d.set(e,!0);for(const t of d.values())if(!t)return;a&&a()},register:e=>(d.set(e,!1),()=>d.delete(e))}),[i,d,a]);return s&&h&&(p={...p}),(0,e.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[i]),e.useEffect(()=>{!i&&!d.size&&a&&a()},[i]),"popLayout"===l&&(n=(0,qa.jsx)(kd,{isPresent:i,anchorX:c,root:u,children:n})),(0,qa.jsx)(ho.Provider,{value:p,children:n})};function Pd(){return new Map}const Ed=e=>e.key||"";function Cd(t){const n=[];return e.Children.forEach(t,t=>{(0,e.isValidElement)(t)&&n.push(t)}),n}const Td=t=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:c="left",root:u}=t;const[d,f]=cc(l),h=(0,e.useMemo)(()=>Cd(n),[n]),p=l&&!d?[]:h.map(Ed),m=(0,e.useRef)(!0),g=(0,e.useRef)(h),v=po(()=>new Map),[y,b]=(0,e.useState)(h),[x,w]=(0,e.useState)(h);Eo(()=>{m.current=!1,g.current=h;for(let e=0;e<x.length;e++){const t=Ed(x[e]);p.includes(t)?v.delete(t):!0!==v.get(t)&&v.set(t,!1)}},[x,p.length,p.join("-")]);const k=[];if(h!==y){let e=[...h];for(let t=0;t<x.length;t++){const n=x[t],r=Ed(n);p.includes(r)||(e.splice(t,0,n),k.push(n))}return"wait"===s&&k.length&&(e=k),w(Cd(e)),b(h),null}const{forceRender:S}=(0,e.useContext)(Ga);return(0,qa.jsx)(qa.Fragment,{children:x.map(e=>{const t=Ed(e),n=!(l&&!d)&&(h===x||p.includes(t));return(0,qa.jsx)(Sd,{isPresent:n,initial:!(m.current&&!i)&&void 0,custom:r,presenceAffectsLayout:o,mode:s,root:u,onExitComplete:n?void 0:()=>{if(!v.has(t))return;v.set(t,!0);let e=!0;v.forEach(t=>{t||(e=!1)}),e&&(S?.(),w(g.current),l&&f?.(),a&&a())},anchorX:c,children:e},t)})})},zd={personal:{name:"\uae40\ub3d9\uaddc",englishName:"Dongkyu Kim",title:"\uc6f9\xb7\uc571 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",birth:"1993.01.05",address:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc591\ucc9c\uad6c",phone:"010-4048-8292",email:"wlsntus55@gmail.com",salary:"3600\ub9cc\uc6d0 (\ud611\uc758\uac00\ub2a5)",links:{portfolio:"https://dongkyu.shop/",github:"https://github.com/dongkyukim1?tab=repositories",blog:"https://begin-developer.tistory.com/",playstore:"https://play.google.com/apps/testing/com.littlebank.littlebank_prod",tripplai:"https://tripplai.vercel.app/"}},about:{introduction:"Spring Boot\uc640 Flask\ub97c \ud65c\uc6a9\ud55c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc5d0 \uc804\ubb38\uc131\uc744 \uac16\ucd98 \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4. Git\uc744 \ud1b5\ud55c \ud615\uc0c1 \uad00\ub9ac \ubc0f Docker\uc640 AWS\ub97c \uc774\uc6a9\ud55c \ubc30\ud3ec \uacbd\ud5d8\uc774 \uc788\uc73c\uba70, LLM\uc744 \ud65c\uc6a9\ud55c AI \uae30\ub2a5 \uad6c\ud604 \ub2a5\ub825\ub3c4 \ubcf4\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud300\uc758 \uc77c\uc6d0\uc73c\ub85c\uc11c \ud504\ub85c\uc81d\ud2b8 \uc131\uacf5\uc5d0 \uae30\uc5ec\ud558\uace0 \ud611\uc5c5\uc744 \ud1b5\ud574 \uc2dc\ub108\uc9c0\ub97c \ucc3d\ucd9c\ud558\uba70, \ud601\uc2e0\uc801\uc774\uace0 \ub3c4\uc804\uc801\uc778 \ud658\uacbd\uc5d0\uc11c \uc5ed\ub7c9\uc744 \ubc1c\ud718\ud558\uace0 \ud568\uaed8 \uc131\uc7a5\ud558\uae38 \ud76c\ub9dd\ud569\ub2c8\ub2e4.",motivation:"\ube44\uc804\uacf5\uc790(\uc601\uc5b4\ud559 \uc804\uacf5)\ub85c\uc11c 4\ucc28 \uc0b0\uc5c5\ud601\uba85 \uc2dc\ub300\uc758 \ucf54\ub529 \uc911\uc694\uc131\uc744 \uc778\uc9c0\ud558\uace0 \uc628\ub77c\uc778 \uac15\uc758\ub97c \ud1b5\ud574 \ucf54\ub529\uc5d0 \ud765\ubbf8\ub97c \ub290\uaf08\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 \ub3c5\ud559 \ubc0f \uad6d\ube44 \uad50\uc721, \uc624\ud508 \uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8 \ucc38\uc5ec\ub97c \ud1b5\ud574 \uc2e4\uc804 \uacbd\ud5d8\uc744 \uc313\uc558\uace0, \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \ud544\uae30 \ubc0f SQLD \uc790\uaca9\uc99d\uc744 \ucde8\ub4dd\ud558\uba70 \uc804\ubb38\uc131\uc744 \uac15\ud654\ud588\uc2b5\ub2c8\ub2e4. \ube44\uc804\uacf5\uc790\ub85c\uc11c \ub2e4\uc591\ud55c \uc2dc\uac01\uc5d0\uc11c \ubb38\uc81c\ub97c \ubc14\ub77c\ubcf4\uace0 \ucc3d\uc758\uc801\uc778 \ud574\uacb0\ucc45\uc744 \uc81c\uc2dc\ud558\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4.",growth:"\ub300\ud559 \uc2dc\uc808 \ubbf8\uad6d \uad50\ud658\ud559\uc0dd \uacbd\ud5d8\uc744 \ud1b5\ud574 \uacbd\uc601\ud559\uc744 \uc774\uc218\ud558\uba70 \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uacfc \ubd84\uc11d\uc801 \uc0ac\uace0\ub97c \ud0a4\uc6e0\uc2b5\ub2c8\ub2e4. \uc5b8\uc5b4\uc640 \ubb38\ud654 \ucc28\uc774\ub97c \uadf9\ubcf5\ud558\uace0 \ub2e4\uc591\ud55c \ubc30\uacbd\uc758 \uce5c\uad6c\ub4e4\uacfc \uad50\ub958\ud558\uba70 \uc2dc\uc57c\ub97c \ub113\ud788\uace0 \ud611\uc5c5\uc758 \uc911\uc694\uc131\uc744 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\ud5d8\uc740 \ucf54\ub529 \ud559\uc2b5\uc5d0\ub3c4 \uc601\ud5a5\uc744 \uc8fc\uc5c8\uc73c\uba70, \ub3c4\uc804 \uc815\uc2e0\uacfc \ub048\uae30\ub97c \uae38\ub800\uc2b5\ub2c8\ub2e4.",personality:{strength:"\ud611\uc5c5\uacfc \uc18c\ud1b5 \ub2a5\ub825. \ubbf8\uad6d \uad50\ud658\ud559\uc0dd \ubc0f \uad6d\ube44 \uad50\uc721 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c PL \uc5ed\ud560\uc744 \uc218\ud589\ud558\uba70 \ud300\uc6d0\ub4e4\uacfc\uc758 \uc6d0\ud65c\ud55c \uc18c\ud1b5\uacfc \uc758\uacac \uc870\uc728\uc744 \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \uc131\uacf5\uc801\uc73c\ub85c \uc774\ub048 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.",weakness:"\uc644\ubcbd\uc8fc\uc758 \uc131\ud5a5. \uc791\uc5c5 \uc18d\ub3c4\uac00 \ub290\ub824\uc9c0\ub294 \uacbd\ud5a5\uc774 \uc788\uc5b4, \uc6b0\uc120\uc21c\uc704\ub97c \uc815\ud558\uace0 \ud300\uc6d0\ub4e4\uacfc \uc0c1\uc758\ud558\uc5ec \ube60\ub974\uac8c \uc218\uc815\ud558\ub294 \uc5f0\uc2b5\uc744 \ud1b5\ud574 \ud6a8\uc728\uc801\uc73c\ub85c \uc5c5\ubb34\ub97c \uc218\ud589\ud558\uace0\uc790 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}},skills:{programming:["Java","Python","JavaScript"],frameworks:["Spring Boot","Flask","Java Swing","Thymeleaf","RESTful API","Ajax","React","Vue.js"],databases:["MySQL","Oracle","Redis","MongoDB"],cloud:["AWS","Docker"],tools:["IntelliJ IDEA","PyCharm","VSCode","Eclipse","Maven/Gradle","Notion"],servers:["Apache Tomcat","Gunicorn","Node.js"],others:["HTML","CSS","LLM","Swagger","Git"]},experience:[{company:"\ub137\ucef4\uc194\ub8e8\uc158",position:"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790",period:"2024.10.21 ~ \ud604\uc7ac",description:"LGU+ MCS \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \uc5c5\ubb34, \uc3d8\uce74\xb7\uc6d4\ub4dc\ube44\uc804\xb7PMK \uc81c\ub124\uc2dc\uc2a4\ud074\ub77c\uc6b0\ub4dc \ucf5c\uc2dc\uc2a4\ud15c \uc5c5\ubb34"},{company:"\ud0dc\ud765 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1",position:"\ud574\uc678(\ubbf8\uad6d) \ucd9c\uc7a5 \ub2f4\ub2f9\uc790",period:"2022.12 ~ 2023.06",description:"\ubbf8\uad6d \ud604\uc9c0 \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac \ubc0f \uae00\ub85c\ubc8c \ube44\uc988\ub2c8\uc2a4 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158"},{company:"\ub274\ud559\uc6d0",position:"\ucd084~\uace03 \uc601\uc5b4 \uc120\uc0dd\ub2d8",period:"2017.06 ~ 2018.03",description:"\ud559\uc0dd\ub4e4\uc758 \uc601\uc5b4 \uc2e4\ub825 \ud5a5\uc0c1\uc744 \uc704\ud55c \ub9de\ucda4\ud615 \uad50\uc721 \uc81c\uacf5"}],projects:[{title:"Devhub: \uae43\ubcf4\ub2e4 \uc27d\uac8c '\ud615\uc0c1\uad00\ub9ac'\uc640 '\ucf54\ub4dc\ub9ac\ubdf0'",period:"2024\ub144 7\uc6d4",role:"PL (\ud504\ub85c\uc81d\ud2b8 \ub9ac\ub354)",description:"\uae43(Git)\ubcf4\ub2e4 \uc27d\uace0 \ud3b8\ud558\uac8c \ud615\uc0c1\uad00\ub9ac\ub97c \ud558\ub294 \uac1c\ubc1c\uc790 \ud615\uc0c1\uad00\ub9ac \uc0ac\uc774\ud2b8",features:["AI \ucf54\ub4dc \ub9ac\ubdf0 \uc2dc\uc2a4\ud15c: LLM \ubaa8\ub378(Groq\ub97c \uc774\uc6a9\ud55c Llama API \uc0ac\uc6a9)\uc744 \ud65c\uc6a9\ud55c \ucf54\ub4dc \ud488\uc9c8, \ucd5c\uc801\ud654, \ubcf4\uc548 \ucde8\uc57d\uc810 \uc2dd\ubcc4 \ubc0f \uc0c1\uc138 \ud53c\ub4dc\ubc31 \uc81c\uacf5. \uc751\ub2f5 \uc18d\ub3c4 \uac1c\uc120 (0.45\ucd08)","\ucabd\uc9c0 \uc54c\ub9bc \uc2dc\uc2a4\ud15c: \uc900\uc2e4\uc2dc\uac04 \uc54c\ub9bc \uad6c\ud604\uc744 \uc704\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc8fc\uae30\uc801\uc73c\ub85c GET API \ud638\ucd9c\ub85c \uc0c8 \ucabd\uc9c0 \ud655\uc778","\ubc30\ud3ec: Flask\uc640 Spring Boot \ud504\ub85c\uc81d\ud2b8\ub97c Docker\uc640 AWS(EC2, RDS, ElastiCache, Route53)\ub97c \uc774\uc6a9\ud574 \ubc30\ud3ec"],tech:["HTML","CSS","JavaScript","React","Python","Flask","Java","Spring Boot","Docker","AWS"],challenges:["\uc774\uba54\uc77c API \uc804\uc1a1 \uc18d\ub3c4 \ubb38\uc81c: @Async \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud65c\uc6a9\ud55c \ube44\ub3d9\uae30 \ubc29\uc2dd\uc73c\ub85c \ud3c9\uade0 0.017\ucd08\ub85c \ub2e8\ucd95","AI \ucf54\ub4dc\ub9ac\ubdf0 \uc2dc\uc2a4\ud15c: Groq Llama API\ub85c \ubcc0\uacbd\ud558\uc5ec \uc751\ub2f5 \uc18d\ub3c4 0.45\ucd08 \ub2ec\uc131"]},{title:"\ub9ac\ud2c0\ubc45\ud06c (Little Bank)",period:"2024\ub144 ~ \ud604\uc7ac",role:"PM \ubc0f \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",description:"\ud50c\ub7ec\ud130 + \uc2a4\ud504\ub9c1\ubd80\ud2b8 \uae30\ubc18 4\uc778 \ud300 \ud504\ub85c\uc81d\ud2b8 (1\ucc28 \ud50c\ub808\uc774\ucf58\uc194 \ube44\uacf5\uac1c \ud14c\uc2a4\ud2b8 \uc9c4\ud589 \uc911)",tech:["Flutter","Spring Boot","MySQL","AWS"],status:"Google Play Store \ube44\uacf5\uac1c \ud14c\uc2a4\ud2b8 \uc911"},{title:"Tripplai",period:"2024\ub144 ~ \ud604\uc7ac",role:"PM \ubc0f \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790",description:"Next.js \uae30\ubc18 \uc5ec\ud589 \uc815\ubcf4 \uc11c\ube44\uc2a4 (1\ucc28 \uad00\uad11 API \uacf5\ubaa8\uc804 \uc9c4\ucd9c)",tech:["Next.js","React","TypeScript","Vercel"],status:"\uad00\uad11 API \uacf5\ubaa8\uc804 \uc9c4\ucd9c",link:"https://tripplai.vercel.app/"}],education:[{school:"\uac74\uad6d\ub300\ud559\uad50 (\uc11c\uc6b8)",major:"\uc601\uc5b4\ud559\uacfc, \uacbd\uc601\ud559\uacfc",period:"~ 2018\ub144 \uc878\uc5c5",type:"\ud559\uc0ac"},{school:"\ubbf8\uc2dc\uc2dc\ud53c \uc8fc\ub9bd\ub300\ud559\uad50 (\ubbf8\uc2dc\uc2dc\ud53c)",major:"\uacbd\uc601\ud559\uacfc",period:"~ 2017\ub144 \uc878\uc5c5",type:"\ud559\uc0ac"},{school:"\uc591\ucc9c\uace0\ub4f1\ud559\uad50 (\uc11c\uc6b8)",major:"\uc778\ubb38\uacc4 \uc774\uacfc",period:"2008.03 ~ 2011.02",type:"\uace0\ub4f1\ud559\uad50"}],training:[{name:"\ube45\ub370\uc774\ud130 \uae30\ubc18 \uc778\uacf5\uc9c0\ub2a5 \uc735\ud569\uc11c\ube44\uc2a4 \uac1c\ubc1c\uc790 \uc591\uc131 \uacfc\uc815",organization:"KOSMO \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc778\uc7ac\uac1c\ubc1c\uc6d0",period:"2024.03 ~ 2024.08.27",status:"\uc218\ub8cc"},{name:"\uacbd\uc601\ud559 \uacfc\uc815",organization:"\ubbf8\uc2dc\uc2dc\ud53c \uc8fc\ub9bd\ub300\ud559\uad50",period:"2017.01 ~ 2017.07",status:"\uc774\uc218"}],certificates:[{name:"SQLD \uac1c\ubc1c\uc790 \uc790\uaca9\uc99d",date:"2024\ub144",status:"\ucde8\ub4dd"},{name:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac",date:"2024\ub144 05\uc6d4 17\uc77c",status:"\ud544\uae30 \ud569\uaca9 (\uc2e4\uae30 \uc9c4\ud589 \uc911)"},{name:"TOEIC",score:"900\uc810",status:"\ub9cc\ub8cc"}],goals:["\uc9c0\uc18d\uc801\uc778 \ud559\uc2b5\uacfc \uc131\uc7a5: \ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 IT \ubd84\uc57c\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uae30\uc220\uacfc \ud2b8\ub80c\ub4dc\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \ud559\uc2b5","\ud300\uc6cc\ud06c\uc640 \ud611\uc5c5 \uac15\ud654: \uae00\ub85c\ubc8c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ubc0f \ud611\uc5c5 \uc815\uc2e0\uc744 \ubc14\ud0d5\uc73c\ub85c \ud300\uc6d0\ub4e4\uacfc\uc758 \uc6d0\ud65c\ud55c \ud611\uc5c5","\ucc3d\uc758\uc801 \ubb38\uc81c \ud574\uacb0: \uacbd\uc601\ud559\uc5d0\uc11c \ubc30\uc6b4 \ubd84\uc11d\uc801 \uc0ac\uace0\uc640 \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc744 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0 \uc801\uc6a9","\ucc45\uc784\uac10\uacfc \uc131\uc2e4\ud568: \ub9e1\uc740 \uc5c5\ubb34\uc5d0 \ucc45\uc784\uac10\uc744 \uac00\uc9c0\uace0 \uc131\uc2e4\ud558\uac8c \uc218\ud589","\uace0\uac1d \uc911\uc2ec\uc758 \uc11c\ube44\uc2a4 \uc81c\uacf5: \uace0\uac1d\uc758 \uc694\uad6c\ub97c \uc815\ud655\ud788 \uc774\ud574\ud558\uace0 \ub9cc\uc871\uc2dc\ud0a4\ub294 \uc11c\ube44\uc2a4 \uc81c\uacf5"]},jd=n.p+"static/media/devhub.42247c6b720f6c3341c7.mp4",Ad=n.p+"static/media/trippai.5d89260c58fc1557023b.mp4",_d=n.p+"static/media/littlebank.b52ecd0cdbff5b1d72ad.mp4",Md=Yt.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  padding: 120px 20px 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="%23fff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23fff" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: ${sd}) {
    padding: 100px 20px 40px;
  }

  @media (max-width: ${od}) {
    padding: 90px 20px 30px;
    min-height: calc(100vh - 60px);
  }
`,Rd=Yt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${sd}) {
    padding: 0 1rem;
  }
`,Ld=Yt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${ld}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`,Od=Yt(Uu.div)`
  color: white;
`,Nd=Yt(Uu.p)`
  font-size: 1.3rem;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  letter-spacing: -0.02em;

  @media (max-width: ${od}) {
    font-size: 1.1rem;
  }
`,Dd=Yt(Uu.h1)`
  font-size: 4.2rem;
  font-family: 'Pretendard-Bold';
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.3;
  letter-spacing: -0.03em;
  padding: 0.5rem 0;
  overflow: visible;

  @media (max-width: ${sd}) {
    font-size: 3.2rem;
    line-height: 1.25;
    margin-bottom: 1.8rem;
  }

  @media (max-width: ${od}) {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    padding: 0.3rem 0;
  }
`,Id=Yt(Uu.h2)`
  font-size: 2.2rem;
  font-family: 'Pretendard-Medium';
  font-weight: 500;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  letter-spacing: -0.02em;

  @media (max-width: ${sd}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${od}) {
    font-size: 1.5rem;
  }
`,Vd=Yt(Uu.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  letter-spacing: -0.01em;

  @media (max-width: ${sd}) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${od}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,Bd=Yt.span`
  display: inline-block;
`,Fd=Yt.span`
  display: inline-block;
  background-color: white;
  width: 3px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`,$d=Yt(Uu.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: ${ld}) {
    justify-content: center;
  }

  @media (max-width: ${od}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,Hd=Yt(Uu.a)`
  background: white;
  color: ${Xu};
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

  @media (max-width: ${od}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`,Ud=Yt(Uu.a)`
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
    color: ${Xu};
    transform: translateY(-3px);
    border-color: white;
  }

  @media (max-width: ${od}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`,Wd=Yt(Uu.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,Kd=Yt(Uu.div)`
  position: relative;
  width: 550px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${ld}) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: ${od}) {
    width: 350px;
    height: 350px;
  }
`,Yd=Yt(Uu.div)`
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

  @media (max-width: ${ld}) {
    width: 400px;
    height: 260px;
    padding: 20px;
  }

  @media (max-width: ${od}) {
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
`,qd=Yt(Uu.div)`
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

  // 홈 인디케이터 (iPhone X 스타일)
  &:before {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 134px;
    height: 5px;
    background: linear-gradient(145deg, #3a3a3a, #555);
    border-radius: 3px;
  }

  // 카메라/센서 영역
  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 25px;
    background: linear-gradient(145deg, #000, #1a1a1a);
    border-radius: 15px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: ${ld}) {
    width: 200px;
    height: 400px;
    padding: 20px 12px;
  }

  @media (max-width: ${od}) {
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
`,Gd=Yt.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.1);
`,Xd=Yt(Uu.div)`
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

  @media (max-width: ${ld}) {
    bottom: -55px;
    font-size: 1rem;
    padding: 10px 20px;
  }

  @media (max-width: ${od}) {
    bottom: -45px;
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`,Qd=Yt(Uu.div)`
  display: flex;
  gap: 1.2rem;
  margin-top: 2.5rem;

  @media (max-width: ${ld}) {
    justify-content: center;
  }
`,Zd=Yt(Uu.a)`
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
    color: ${Xu};
    transform: translateY(-3px);
  }
`,Jd=[{name:"DevHub",type:"web",video:jd,description:"\uac1c\ubc1c\uc790 \ucee4\ubba4\ub2c8\ud2f0 \ud50c\ub7ab\ud3fc"},{name:"TripplAI",type:"web",video:Ad,description:"AI \uc5ec\ud589 \ucd94\ucc9c \uc11c\ube44\uc2a4"},{name:"LittleBank",type:"app",video:_d,description:"\uc5b4\ub9b0\uc774 \uae08\uc735 \uad50\uc721 \uc571"}],ef=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const[i,a]=(0,e.useState)(""),[o,s]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{const e=setTimeout(()=>{let e=0;const r=setInterval(()=>{e<t.length?(a(t.slice(0,e+1)),e++):(clearInterval(r),s(!0))},n);return()=>clearInterval(r)},r);return()=>clearTimeout(e)},[t,n,r]),{displayText:i,isComplete:o}},tf=()=>{const{personal:t}=zd,[n,r]=(0,e.useState)(0),i=ef("\uc548\ub155\ud558\uc138\uc694! \ud83d\udc4b",80,500),a=ef(`\uc800\ub294 ${t.name}\uc785\ub2c8\ub2e4`,120,2e3),o=ef(t.title,100,4500);(0,e.useEffect)(()=>{const e=setInterval(()=>{r(e=>(e+1)%Jd.length)},4e3);return()=>clearInterval(e)},[]);const s=Jd[n],l={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}}};return(0,qa.jsx)(Md,{id:"home",children:(0,qa.jsx)(Rd,{children:(0,qa.jsxs)(Ld,{children:[(0,qa.jsxs)(Od,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.3,staggerChildren:.3}}},initial:"hidden",animate:"visible",children:[(0,qa.jsxs)(Nd,{variants:l,children:[(0,qa.jsx)(Bd,{children:i.displayText}),!i.isComplete&&(0,qa.jsx)(Fd,{children:"\xa0"})]}),(0,qa.jsx)(Dd,{variants:l,children:(0,qa.jsxs)("span",{style:{background:"linear-gradient(45deg, #ffd700, #ffed4a, #f59e0b)",backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent",WebkitTextFillColor:"transparent",display:"inline-block",filter:"drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))"},children:[(0,qa.jsx)(Bd,{children:a.displayText}),!a.isComplete&&a.displayText&&(0,qa.jsx)(Fd,{style:{color:"white",WebkitTextFillColor:"white"},children:"\xa0"})]})}),(0,qa.jsxs)(Id,{variants:l,children:[(0,qa.jsx)(Bd,{children:o.displayText}),!o.isComplete&&o.displayText&&(0,qa.jsx)(Fd,{children:"\xa0"})]}),(0,qa.jsxs)(Vd,{variants:l,children:["\uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ucd5c\uc6b0\uc120\uc73c\ub85c \uc0dd\uac01\ud558\uba70, \ucd5c\uc2e0 \uae30\uc220\uacfc \ucc3d\uc758\uc801 \uc544\uc774\ub514\uc5b4\ub97c \uc735\ud569\ud558\uc5ec",(0,qa.jsx)("br",{}),"\ud601\uc2e0\uc801\uc774\uace0 \uc758\ubbf8 \uc788\ub294 \ub514\uc9c0\ud138 \uc194\ub8e8\uc158\uc744 \ub9cc\ub4e4\uc5b4\uac11\ub2c8\ub2e4.",(0,qa.jsx)("br",{}),(0,qa.jsx)("strong",{children:"\ud568\uaed8 \uc131\uc7a5\ud558\uba70 \ub354 \ub098\uc740 \uc138\uc0c1\uc744 \ucf54\ub529\ud569\ub2c8\ub2e4. \ud83d\ude80"})]}),(0,qa.jsxs)($d,{variants:l,children:[(0,qa.jsxs)(Hd,{href:"#projects",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e=>{var t;e.preventDefault(),null===(t=document.getElementById("projects"))||void 0===t||t.scrollIntoView({behavior:"smooth"})},children:[(0,qa.jsx)(On,{}),"\ud504\ub85c\uc81d\ud2b8 \ub458\ub7ec\ubcf4\uae30"]}),(0,qa.jsxs)(Ud,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:e=>{var t;e.preventDefault(),null===(t=document.getElementById("contact"))||void 0===t||t.scrollIntoView({behavior:"smooth"})},children:[(0,qa.jsx)(Mn,{}),"\uc774\ub825\uc11c \ub2e4\uc6b4\ub85c\ub4dc"]})]}),(0,qa.jsxs)(Qd,{variants:l,children:[(0,qa.jsx)(Zd,{href:t.links.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.15,rotate:5},whileTap:{scale:.9},children:(0,qa.jsx)(dn,{})}),(0,qa.jsx)(Zd,{href:t.links.blog,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.15,rotate:-5},whileTap:{scale:.9},children:(0,qa.jsx)(wn,{})}),(0,qa.jsx)(Zd,{href:t.links.portfolio,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.15,rotate:5},whileTap:{scale:.9},children:(0,qa.jsx)(On,{})})]})]}),(0,qa.jsx)(Wd,{children:(0,qa.jsx)(Kd,{variants:{hidden:{scale:0,rotateY:-90},visible:{scale:1,rotateY:0,transition:{duration:.8,ease:"easeOut",delay:1}}},initial:"hidden",animate:"visible",children:(0,qa.jsx)(Td,{mode:"wait",children:(0,qa.jsxs)(Uu.div,{variants:{exit:{scale:.8,opacity:0,rotateY:90,transition:{duration:.5}},enter:{scale:1,opacity:1,rotateY:0,transition:{duration:.5,delay:.2}}},initial:"exit",animate:"enter",exit:"exit",style:{position:"relative"},children:["web"===s.type?(0,qa.jsx)(Yd,{children:(0,qa.jsx)(Gd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s.video})}):(0,qa.jsx)(qd,{children:(0,qa.jsx)(Gd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s.video})}),(0,qa.jsx)(Xd,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:s.name})]},n)})})})]})})})},nf=Yt(Yu)`
  background: ${id};
`,rf=Yt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: ${ld}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,af=Yt(Uu.div)``,of=Yt(Gu)`
  background: white;
  padding: 2.5rem;
  margin-bottom: 2rem;
`,sf=Yt.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${ad.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  margin: 0 auto 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    position: relative;
    z-index: 2;
    background: ${ad.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,lf=Yt.div`
  text-align: center;

  h3 {
    font-size: 1.8rem;
    font-family: 'Pretendard-Bold';
    color: ${Zu};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${rd};
    font-family: 'Pretendard-Medium';
    margin-bottom: 1rem;
  }

  .birth {
    font-size: 0.9rem;
    color: ${rd};
  }
`,cf=Yt.div`
  h4 {
    font-size: 1.4rem;
    font-family: 'Pretendard-SemiBold';
    color: ${Zu};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    line-height: 1.8;
    color: ${nd};
    font-family: 'Pretendard-Regular';
  }
`,uf=Yt(Uu.div)`
  display: grid;
  gap: 2rem;
`,df=Yt(Uu.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid ${e=>e.color||Xu};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 1.3rem;
    font-family: 'Pretendard-SemiBold';
    color: ${Zu};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    line-height: 1.7;
    color: ${nd};
    font-family: 'Pretendard-Regular';
  }
`,ff=Yt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${sd}) {
    grid-template-columns: 1fr;
  }
`,hf=Yt(df)`
  border-left-color: ${e=>"strength"===e.type?ed:td};
`,pf=Yt.div`
  margin-top: 4rem;
`,mf=Yt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,gf=Yt(Uu.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 3px solid ${Xu};

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }

  p {
    color: ${nd};
    font-family: 'Pretendard-Regular';
    line-height: 1.6;
  }
`,vf=()=>{var e;const{personal:t,about:n}=zd,r={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.1}}},i={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return(0,qa.jsx)(nf,{id:"about",children:(0,qa.jsxs)(Ku,{children:[(0,qa.jsx)(qu,{children:"About Me"}),(0,qa.jsxs)(rf,{children:[(0,qa.jsxs)(af,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,qa.jsxs)(of,{children:[(0,qa.jsx)(sf,{children:(0,qa.jsx)("span",{children:"\ud83d\udc68\u200d\ud83d\udcbb"})}),(0,qa.jsxs)(lf,{children:[(0,qa.jsx)("h3",{children:t.name}),(0,qa.jsx)("p",{children:t.title}),(0,qa.jsxs)("p",{className:"birth",children:["\uc0dd\ub144\uc6d4\uc77c: ",t.birth]})]})]}),(0,qa.jsxs)(cf,{children:[(0,qa.jsxs)("h4",{children:[(0,qa.jsx)(Zn,{color:Xu}),"\uc790\uae30\uc18c\uac1c"]}),(0,qa.jsx)("p",{children:n.introduction})]})]}),(0,qa.jsxs)(uf,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,qa.jsxs)(df,{variants:i,color:Xu,children:[(0,qa.jsxs)("h4",{children:[(0,qa.jsx)(Yn,{color:Xu}),"\uac1c\ubc1c\uc790\ub97c \ud76c\ub9dd\ud558\uac8c \ub41c \uacc4\uae30"]}),(0,qa.jsx)("p",{children:n.motivation})]}),(0,qa.jsxs)(df,{variants:i,color:Qu,children:[(0,qa.jsxs)("h4",{children:[(0,qa.jsx)($n,{color:Qu}),"\uc131\uc7a5 \uacfc\uc815"]}),(0,qa.jsx)("p",{children:n.growth})]})]})]}),(0,qa.jsxs)(ff,{children:[(0,qa.jsxs)(hf,{type:"strength",children:[(0,qa.jsxs)("h4",{children:[(0,qa.jsx)(In,{color:ed}),"\uc131\uaca9\uc758 \uc7a5\uc810"]}),(0,qa.jsx)("p",{children:n.personality.strength})]}),(0,qa.jsxs)(hf,{type:"weakness",children:[(0,qa.jsxs)("h4",{children:[(0,qa.jsx)($n,{color:td}),"\uc131\uaca9\uc758 \ub2e8\uc810 & \uac1c\uc120 \ub178\ub825"]}),(0,qa.jsx)("p",{children:n.personality.weakness})]})]}),(0,qa.jsxs)(pf,{children:[(0,qa.jsx)(qu,{style:{fontSize:"2rem",marginBottom:"2rem"},children:"\uc785\uc0ac \ud6c4 \ud3ec\ubd80"}),(0,qa.jsx)(mf,{children:(null===(e=n.goals)||void 0===e?void 0:e.map((e,t)=>(0,qa.jsx)(gf,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:(0,qa.jsx)("p",{children:e})},t)))||zd.goals.map((e,t)=>(0,qa.jsx)(gf,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:(0,qa.jsx)("p",{children:e})},t))})]})]})})};function yf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.66 3.494c-.377.637-.544 2.114-.502 3.162l-.005.004c.036.946.165 1.816.372 2.615-3.096.767-6.466 2.795-8.352 4.754-.882-1.19-1.232-2.168-1.336-2.908-.131-.936.092-1.794.646-2.482.867-1.077 2.098-1.153 3.365-.94-.025.2.001.391.081.51.335.494 2.135.668 3.21.189-.793-1.112-2.4-1.654-2.844-1.437a.762.762 0 00-.335.359c-.438-.078-.873-.137-1.19-.134-1.117.008-1.971.398-2.61 1.193-.628.78-.882 1.747-.734 2.8.14.996.633 2.055 1.46 3.154-.138.147-.27.293-.398.436C1.473 17.023 0 19.44 0 19.842v.207h2.658l-.046-.246c-.15-.793.15-1.785.763-2.526.386-.465 1.024-.996 2.027-1.241.891.87 2.027 1.794 3.291 2.685h1.976v-.208a.678.678 0 00-.327-.577c-.312-.204-.794-.232-1.237-.081-.421-.47-.658-1.098-.709-1.877 4.287.38 8.388 2.11 13.015 4.528h2.546l.033-.167c.048-.237-.082-.556-.346-.851-.456-.51-1.349-.752-2.095-.734-.514-.612-3.342-3.591-3.507-3.765a9.626 9.626 0 002.673-2.847h1.388v-.298H20.89a9.81 9.81 0 00.223-.419h.989v-.299h-.845c.628-1.359.975-2.918.942-4.625l.003.002c-.002-.468-.147-2.445-.415-2.989-.726.276-2.047 1.17-2.346 2.084a14.557 14.557 0 00-4.463.056c-.237-.984-1.423-1.736-2.318-2.16zm.164.577c.211 1.148.593 1.869 1.42 2.223.734-.21 1.58-.34 2.448-.388l.717 1.571.46-1.585c.876.029 1.736.142 2.485.349.762-.554 1.057-1.4 1.218-2.138.202.86.178 2.717.18 2.717a9.883 9.883 0 01-.158 1.988l-.824.35.726.11a9.19 9.19 0 01-.198.714l-.703.205.56.201c-.094.253-.2.5-.314.738h-1.16v.299h1.008a8.788 8.788 0 01-.238.419h-.77v.298h.583a8.634 8.634 0 01-2.921 2.748c-1.334-.664-2.341-1.634-3.079-2.748h.446v-.298h-.636a9.195 9.195 0 01-.236-.419h.872v-.299h-1.026a10.12 10.12 0 01-.46-1.094l.522-.147-.659-.263c-.066-.215-.127-.43-.18-.646l1.015-.069-1.16-.615c-.282-1.563-.225-3.08.062-4.221zm2.946 2.97c-.89 0-1.24.909-1.255.948l.252.094c.012-.033.302-.773 1.003-.773.154 0 .262.062.34.195.182.314.152.933 0 1.58h-1.227v.269h1.159a5.679 5.679 0 01-.496 1.225l-.064.112 1.537.967-.865.57.148.224.967-.637 1.043.681.143-.228-.967-.598 1.518-.986v-.001c-.318-.47-.42-.872-.286-1.329h.108l1.167-.001.002-.268h-1.175c.216-.51.52-.968 1.602-.968v-.27c-.999 0-1.596.397-1.883 1.238h-2.154c.15-.672.177-1.333-.046-1.715a.63.63 0 00-.57-.33zm.55 2.313h2.126c-.095.304-.057.763.178 1.157h-2.737c.166-.334.32-.74.433-1.157zm-3.683.321c.155.515.344.997.562 1.451h-.91v.299h1.06c.075.142.153.282.233.419H12.29v.298h1.478c.91 1.416 2.14 2.499 3.534 3.318a9.45 9.45 0 00.456-.28l.362.39-.61.938 1.04-.474.606.652-1.019.776 1.403-.363 1.905 2.05.16-.014c1.007-.086 1.58.46 1.73.63.112.124.179.237.215.326h-2.036c-4.67-2.437-8.771-4.155-13.127-4.53.01-.607.117-1.293.324-2.058l-.4-.108c-.213.786-.325 1.497-.338 2.134-.454-.03-.91-.046-1.371-.046-.391 0-.747.036-1.072.1a14.771 14.771 0 01-1.09-1.21c.546-.57 1.19-1.123 1.893-1.643l.967.668-.316-1.128c.297-.2.603-.394.914-.58l1.434.73-.673-1.162c.198-.106.398-.21.598-.31l2.007 1.346-.66-1.952a15.32 15.32 0 012.034-.667zm3.492 1.105h2.22l-1.084.715zM4.153 14.675c.273.337.577.678.91 1.021a4.104 4.104 0 00-2.007 1.316c-.629.76-.962 1.762-.886 2.622H.495c.337-.728 1.677-2.833 3.658-4.959z"},child:[]}]})(e)}function bf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0L1.605 6v12L12 24l10.395-6V6zm0 1.41l9.172 5.295v10.59L12 22.59l-9.172-5.295V6.705zM5.902 8.334c-1.306 0-1.983.956-2.574 2.41v6.262L12 22.014l8.672-5.008v-5.971c-.447-.264-.894-.412-1.336-.412-4.275 0-3.97 4.885-6.717 5.8-2.748.917-3.511-8.089-6.717-8.089zm12.364.457c-2.9 0-2.137 4.732-5.342 4.732-1.63 0-2.52-1.317-3.477-1.981.148.326.3.655.442.98.467 1.068.922 2.09 1.379 2.734.228.322.455.541.644.644a.595.595 0 0 0 .549.05c.558-.187.968-.571 1.36-1.112.39-.541.74-1.228 1.154-1.916.413-.688.894-1.385 1.59-1.918.695-.534 1.607-.881 2.77-.881.465 0 .908.136 1.337.352v-.121c-.633-.849-1.348-1.563-2.406-1.563zm-6.68.152c-.868 0-1.491.82-2.076 2.06.094.055.192.106.277.167 1.06.761 1.798 1.853 3.137 1.853.678 0 1.067-.218 1.418-.585-.722-1.546-1.432-3.492-2.756-3.495Z"},child:[]}]})(e)}function xf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"},child:[]}]})(e)}function wf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.109.024a15.58 15.58 0 00-.737.023C6.728.361 3.469 2.517 1.579 5.86A12.53 12.53 0 00.021 11.11c-.04.517-.02 1.745.035 2.208.306 2.682 1.353 5.06 3.07 6.965 1.962 2.173 4.586 3.467 7.437 3.663.42.032 1.043.04 1.02.012a2.404 2.404 0 00-.338-.074c-1.674-.33-3.388-1.13-4.777-2.232a12.344 12.344 0 01-2.45-2.636A12.387 12.387 0 011.884 12.5a12.413 12.413 0 01.56-4.274c.785-2.522 2.37-4.726 4.475-6.228A11.073 11.073 0 0111.156.122l.443-.098zm1.474.51C10.646.65 8.807 1.299 7.301 2.4 5.426 3.77 3.995 5.644 3.22 7.746c-.145.397-.282.82-.282.879 0 .012 3.828.024 10.31.024 8.463 0 10.315-.008 10.315-.036 0-.047-.153-.525-.283-.878-.153-.42-.576-1.31-.82-1.722-.4-.683-.91-1.373-1.474-1.992-1.65-1.82-3.593-2.934-5.82-3.334-.785-.141-1.8-.2-2.585-.153zM23.83 9.97c-.02 0-4.792 0-10.609.004l-10.573.008-.011.059c-.036.16-.134 1.081-.134 1.242 0 .028 1.785.032 10.746.032H24v-.075c0-.102-.07-.791-.106-1.054-.02-.16-.04-.216-.063-.216zm-10.573 2.635c-9.37-.004-10.73 0-10.742.035-.02.04.024.557.075.973.02.157.035.298.035.314 0 .027 2.137.035 10.624.035h10.624l.024-.188c.043-.326.102-.97.094-1.067l-.008-.094zm.003 2.718c-8.882 0-10.321.004-10.321.035 0 .02.054.208.12.42a11.122 11.122 0 002.072 3.741c.282.342.945 1.036 1.228 1.287 1.568 1.4 3.247 2.216 5.18 2.53.605.094.886.113 1.75.11.91 0 1.297-.032 2.023-.177 2.11-.416 3.914-1.451 5.53-3.17 1.267-1.348 2.106-2.76 2.628-4.41l.117-.366z"},child:[]}]})(e)}function kf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(e)}function Sf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"},child:[]}]})(e)}function Pf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"},child:[]}]})(e)}function Ef(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.172 20.36c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777-.446-1.355-.6-2.808-1.174-4.11-.602-.944.103-1.978 1.138-2.28.46-.087 1.272-.522.293-.211-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.66-.43 1.6-.903.463-1.544C1.5 1.08 4.34.835 3.64 2.285 3.473 3.4 5.624 2.08 5.125 3.368c.507.619 1.9.14 1.865 1.009.74.05.993.672 1.687.72.72.325 2.022.58 2.266 1.39-.713.566-2.364-1.165-2.443.398.215 2.31.16 4.689 1.004 6.888.4 1.332 1.37 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306a19.86 19.86 0 01-3.484.29c-1.912-.15-3.865-.214-5.684-.88-1.024-.297-2.023-.881-2.924-1.464zm1.615.7c1 .432 1.978.888 3.074 1.026 1.74.24 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.291-1.452-1.277-.466.66.598 1.005.685.798.453-.877-.233-1.114-.421-.668-.375-.754-.297-.066.084.139.08.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.45-.622-.196-.341-.751-.557-.36-.74-.704.244-.737-.93-1.07-.763-.744-.235-.29-1.07-1.176-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.647c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.31-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.312-.3-.484-.188 0 0zm1.127.63c.191-.282-.61-.107 0 0zM8.19 19.728c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.397.25 2.32.55 1.115.103-.2.042-2.23-.574-1.116-.103zm-3.921-3.054c-.04-.167-.616-.185 0 0zm1.15.67c.3-.21-.621-.16 0 0zm.966.593c.43-.162-.696-.163 0 0zm-2.584-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17zm3.24 1.978c.193-.33-.815-.19 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.973 1.14c1.08.01-.975-.147 0 0zm-4.644-2.96c-.042-.2-.266.018 0 0zm6.47 3.985c.028-.363-.353.27 0 0zm-4.63-2.856c-.064-.191-.336-.008 0 0zm-1.738-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zm5.407 3.435c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.528-.077 0 0zm-2.506-1.592c.46-.05-.74-.311 0 0zm4.241 2.637c.718-.285-.7-.14 0 0zM9.03 18.545c.827.106-.985-.563-.181-.06zm2.876 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.29.103.696-.467 1.726.22 2.376.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.22-2.044-.703-2.517-1.542-.192-.315.28.044-.166-.47-.57-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.688-.826-.002-.571.595-.285.176-.707-.09-.592-.386-1.21-.475-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.58-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.1.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.06.328-.905-.12-.83.64-.573-.241-.078.9.209.514.975.264.686.866.71 1.437-.158.333-.784-.783-.14-.731-.507-.827-.561-.3-.984.085-.1.028 1.079.547.34.803.65.1.668.67.8 1.03.39.407.31-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.44-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.24-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.72.155.552.58.778.88.497.224-.712-1.522.142-.526.898.81.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.975 1.34-.027.897-.348-.313-1.58-.7-.573-.104.929.43 1.665.688 2.561 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.01-.468.107.36 0 0zm-.322-.433c-.372-.72.47.204 0 0zm-3.9-2.692c.219-.06.108.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.192-1.525c-.155-.278.323.26 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.217c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.05.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.04-.603.23.413 0 0zm.45.155c.216-.455.366.634 0 0zm-1.084-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.06-.25.66.12.327 1.082-.077.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18zm3.11 1.808c-.47-.282-.123-1.984.037-.82.457-.148-.025.6.315.594-.053.473-.206.643-.35.226zm1.15.68c.048-.513.099.35 0 0zm-.2-.198c.054-.22.007.258 0 0zM4.57 9.955c-.697-.963 2.027.973.447.244-.165-.043-.364-.06-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.587c.415-.088 1.718.729.52.234-.132-.148-.416-.08-.52-.234zm3.56 1.775c.044-.83.248-.495.002.118zM4.985 9.299c.169-.248-.45-1.12.089-.313.232.185.672.31.283.387.61.539-.15.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.427c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.51c-.053-.32.18.404 0 0zm.314-.51c-.216-.38.272-1.673.326-.87-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.923c.094-.115.02.139 0 0zM7.47 17.544c-.128-.111.016.07 0 0zm1.11.56c.615.16.612-.095.055-.17-.3-.28-1.246-.575-.4-.035.057.142.235.139.344.206zM6.389 16.65c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.07-.51-.305-.06-1.52-.54-.804.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.69.46.892.6zm1.16.667c1.41.454-.691-.556 0 0zm5.94 3.598c.02-.28-.193.24 0 0zm.611.257c.325-.315.013.503.54-.077.005-.415-.017-.66-.606-.156-.162.09-.234.473.066.233zm-9.692-6.087c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.32 1.662.236.44.04-.182-.27-1.151-.204-.44-.04zm5.097 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 13.743c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.135-.734-.466-.32 0 0zm.866.34c.57-.488-.36-.102 0 0zM4.215 14.255c.163-.242-.42-.031 0 0zm11.305 7.129c.551-.355-.126-.3-.1.032zm-7.47-4.71c-.02-.24-.291.02 0 0zm.46.267c-.145-.297-.224.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.57 14.08c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.41.426-.845-.413-.474.204-.31.374-.224.052.299.196.233.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.13.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.681 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zM15.4 20.24c.216-.16-.27-.02 0 0zM3.39 12.52c.62-.24-.664-.17 0 0zm8.984 5.662c-.007-.401-.395.1 0 0zm-9.23-6.231c.399-.135-.367-.09 0 0zm1.156.56c-.007-.133-.122.05 0 0zm14.09 8.64c.512-.104 1.678.26 1.866-.136-.62-.015-2.15-.438-2.222.1l.136.023.22.013zM4.667 12.603c.009-.407-.317-.015 0 0zM1.63 10.495c-.138-.775-.525-.118 0 0zm.724.182c.009-.25-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.22-.167c-.035-.32-.19.04 0 0zm1.22.729c.518-.203-.94-.42-.104-.04zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.05 0 0zM2.573 9.38c.055-.38-.41.075 0 0zM.837 8.218c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.11 1.67-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.29-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.06zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.12zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.23 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.25-.347c-.055-1.214 1.119.432 0 0zm.64-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.067c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.602 12.89c.012-.355-.304.16 0 0zm-2.093-1.43c.06-.408-.27.037 0 0zm2.67 1.568c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 8.959c.45-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.7.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.39-.105-.343-.746-.407-1.06-.544-.176.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.824 4.215c.28-.496-1.155-.668-.188-.175.09.03.07.21.188.175z"},child:[]}]})(e)}function Cf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"},child:[]}]})(e)}function Tf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(e)}function zf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0v24h24V0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 0 1-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 0 1-1.279-1.056l1.39-1.555c.277.334.555.555.833.722.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9z"},child:[]}]})(e)}function jf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(e)}function Af(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(e)}function _f(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(e)}function Mf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"},child:[]}]})(e)}function Rf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z"},child:[]}]})(e)}function Lf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(e)}function Of(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.833 6.666v-.055c0-1-.667-1.5-1.778-1.5H4.389v3.055h1.723c1.111 0 1.721-.666 1.721-1.5zM0 0v24h24V0H0zm2.223 3.167h4c2.389 0 3.833 1.389 3.833 3.445v.055c0 2.278-1.778 3.5-4.001 3.5H4.389v2.945H2.223V3.167zM11.277 21h-9v-1.5h9V21zm4.779-7.777c-2.944.055-5.111-2.223-5.111-5.057C10.944 5.333 13.056 3 16.111 3c1.889 0 3 .611 3.944 1.556l-1.389 1.61c-.778-.722-1.556-1.111-2.556-1.111-1.658 0-2.873 1.375-2.887 3.084.014 1.709 1.174 3.083 2.887 3.083 1.111 0 1.833-.445 2.61-1.167l1.39 1.389c-.999 1.112-2.166 1.779-4.054 1.779z"},child:[]}]})(e)}function Nf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z"},child:[]}]})(e)}function Df(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z"},child:[]}]})(e)}function If(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z"},child:[]}]})(e)}function Vf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z"},child:[]}]})(e)}function Bf(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"},child:[]}]})(e)}function Ff(e){return on({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0zm0 1.144c5.995 0 10.856 4.86 10.856 10.856 0 5.995-4.86 10.856-10.856 10.856-5.996 0-10.856-4.86-10.856-10.856C1.144 6.004 6.004 1.144 12 1.144zM8.37 5.868a6.707 6.707 0 0 0-.423.005c-.983.056-1.573.517-1.735 1.472-.115.665-.096 1.348-.143 2.017-.013.35-.05.697-.115 1.038-.134.609-.397.798-1.016.83a2.65 2.65 0 0 0-.244.042v1.463c1.126.055 1.278.452 1.37 1.629.033.429-.013.858.015 1.287.018.406.073.808.156 1.2.259 1.075 1.307 1.435 2.575 1.218v-1.283c-.203 0-.383.005-.558 0-.43-.013-.591-.12-.632-.535-.056-.535-.042-1.08-.075-1.62-.064-1.001-.175-1.988-1.153-2.625.503-.37.868-.812.983-1.398.083-.41.134-.821.166-1.237.028-.415-.023-.84.014-1.25.06-.665.102-.937.9-.91.12 0 .235-.017.369-.027v-1.31c-.16 0-.31-.004-.454-.006zm7.593.009a4.247 4.247 0 0 0-.813.06v1.274c.245 0 .434 0 .623.005.328.004.577.13.61.494.032.332.031.669.064 1.006.065.669.101 1.347.217 2.007.102.544.475.95.941 1.283-.817.549-1.057 1.333-1.098 2.215-.023.604-.037 1.213-.069 1.822-.028.554-.222.734-.78.748-.157.004-.31.018-.484.028v1.305c.327 0 .627.019.927 0 .932-.055 1.495-.507 1.68-1.412.078-.498.124-1 .138-1.504.032-.461.028-.927.074-1.384.069-.715.397-1.01 1.112-1.057a.972.972 0 0 0 .199-.046v-1.463c-.12-.014-.204-.027-.291-.032-.536-.023-.804-.203-.937-.71a5.146 5.146 0 0 1-.152-.993c-.037-.618-.033-1.241-.074-1.86-.08-1.192-.794-1.753-1.887-1.786zm-6.89 5.28a.844.844 0 0 0-.083 1.684h.055a.83.83 0 0 0 .877-.78v-.046a.845.845 0 0 0-.83-.858zm2.911 0a.808.808 0 0 0-.834.78c0 .027 0 .05.004.078 0 .503.342.826.859.826.507 0 .826-.332.826-.853-.005-.503-.342-.836-.855-.831zm2.963 0a.861.861 0 0 0-.876.835c0 .47.378.849.849.849h.009c.425.074.853-.337.881-.83.023-.457-.392-.854-.863-.854z"},child:[]}]})(e)}const $f=Yt(Yu)`
  background: white;
`,Hf=Yt.div`
  display: grid;
  gap: 3rem;
`,Uf=Yt(Uu.div)`
  background: ${id};
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`,Wf=Yt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    font-family: 'Pretendard-SemiBold';
    color: ${Zu};
  }

  .icon {
    font-size: 2rem;
    color: ${Xu};
  }
`,Kf=Yt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${od}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
`,Yf=Yt(Uu.div)`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
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
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);

    &::before {
      left: 100%;
    }
  }

  .skill-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  .skill-name {
    font-family: 'Pretendard-Medium';
    color: ${Zu};
    font-size: 0.9rem;
  }

  &:hover .skill-icon {
    transform: scale(1.1);
  }

  @media (max-width: ${od}) {
    padding: 1rem;
    
    .skill-icon {
      font-size: 2rem;
    }
    
    .skill-name {
      font-size: 0.8rem;
    }
  }
`,qf=Yt.div`
  margin-top: 4rem;
`,Gf=Yt(Uu.div)`
  margin-bottom: 2rem;
`,Xf=Yt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  .skill-name {
    font-family: 'Pretendard-SemiBold';
    color: ${Zu};
    font-size: 1.1rem;
  }

  .skill-level {
    font-family: 'Pretendard-Medium';
    color: ${rd};
  }
`,Qf=Yt.div`
  width: 100%;
  height: 8px;
  background: ${Ju};
  border-radius: 4px;
  overflow: hidden;
`,Zf=Yt(Uu.div)`
  height: 100%;
  background: ${ad.primary};
  border-radius: 4px;
  width: ${e=>e.width}%;
`,Jf=Yt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`,eh=Yt(Uu.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${ad.primary};
  }

  .stat-number {
    font-size: 2.5rem;
    font-family: 'Pretendard-Bold';
    color: ${Xu};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${rd};
  }
`,th={Java:{icon:(0,qa.jsx)(fn,{}),color:"#f89820"},Python:{icon:(0,qa.jsx)(gn,{}),color:"#3776ab"},JavaScript:{icon:(0,qa.jsx)(hn,{}),color:"#f7df1e"},"Spring Boot":{icon:(0,qa.jsx)(If,{}),color:"#6db33f"},Flask:{icon:(0,qa.jsx)(Ef,{}),color:"#000000"},React:{icon:(0,qa.jsx)(vn,{}),color:"#61dafb"},"Vue.js":{icon:(0,qa.jsx)(yn,{}),color:"#4fc08d"},"RESTful API":{icon:(0,qa.jsx)(jn,{}),color:"#ff6b6b"},Ajax:{icon:(0,qa.jsx)(jn,{}),color:"#4ecdc4"},"Java Swing":{icon:(0,qa.jsx)(fn,{}),color:"#f89820"},Thymeleaf:{icon:(0,qa.jsx)(If,{}),color:"#005f0f"},MySQL:{icon:(0,qa.jsx)(Af,{}),color:"#4479a1"},Oracle:{icon:(0,qa.jsx)(Rf,{}),color:"#f80000"},Redis:{icon:(0,qa.jsx)(Nf,{}),color:"#dc382d"},MongoDB:{icon:(0,qa.jsx)(jf,{}),color:"#47a248"},AWS:{icon:(0,qa.jsx)(ln,{}),color:"#ff9900"},Docker:{icon:(0,qa.jsx)(cn,{}),color:"#2496ed"},"IntelliJ IDEA":{icon:(0,qa.jsx)(zf,{}),color:"#000000"},PyCharm:{icon:(0,qa.jsx)(Of,{}),color:"#000000"},VSCode:{icon:(0,qa.jsx)(jn,{}),color:"#007acc"},Eclipse:{icon:(0,qa.jsx)(wf,{}),color:"#2c2255"},Git:{icon:(0,qa.jsx)(un,{}),color:"#f05032"},Notion:{icon:(0,qa.jsx)(Xn,{}),color:"#000000"},"Maven/Gradle":{icon:(0,qa.jsx)(Xn,{}),color:"#c71a36"},"Apache Tomcat":{icon:(0,qa.jsx)(yf,{}),color:"#f8dc75"},Gunicorn:{icon:(0,qa.jsx)(qn,{}),color:"#499848"},"Node.js":{icon:(0,qa.jsx)(_f,{}),color:"#339933"},HTML:{icon:(0,qa.jsx)(jn,{}),color:"#e34c26"},CSS:{icon:(0,qa.jsx)(jn,{}),color:"#1572b6"},LLM:{icon:(0,qa.jsx)(jn,{}),color:"#8e44ad"},Swagger:{icon:(0,qa.jsx)(Ff,{}),color:"#85ea2d"}},nh=()=>{const{skills:e}=zd,t=[{title:"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4",icon:(0,qa.jsx)(jn,{}),skills:e.programming},{title:"\ud504\ub808\uc784\uc6cc\ud06c/\ub77c\uc774\ube0c\ub7ec\ub9ac",icon:(0,qa.jsx)(vn,{}),skills:e.frameworks},{title:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",icon:(0,qa.jsx)(_n,{}),skills:e.databases},{title:"\ud074\ub77c\uc6b0\ub4dc/\ubc30\ud3ec",icon:(0,qa.jsx)(ln,{}),skills:e.cloud},{title:"\uac1c\ubc1c \ub3c4\uad6c",icon:(0,qa.jsx)(Xn,{}),skills:e.tools},{title:"\uc11c\ubc84",icon:(0,qa.jsx)(qn,{}),skills:e.servers},{title:"\uae30\ud0c0",icon:(0,qa.jsx)(jn,{}),skills:e.others}],n={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return(0,qa.jsx)($f,{id:"skills",children:(0,qa.jsxs)(Ku,{children:[(0,qa.jsx)(qu,{children:"Skills & Technologies"}),(0,qa.jsx)(Hf,{children:t.map((e,t)=>(0,qa.jsxs)(Uf,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:[(0,qa.jsxs)(Wf,{children:[(0,qa.jsx)("span",{className:"icon",children:e.icon}),(0,qa.jsx)("h3",{children:e.title})]}),(0,qa.jsx)(Kf,{children:e.skills.map((e,r)=>{var i,a;return(0,qa.jsxs)(Yf,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t+.05*r},whileHover:{scale:1.1},whileTap:{scale:.95},children:[(0,qa.jsx)("div",{className:"skill-icon",style:{color:(null===(i=th[e])||void 0===i?void 0:i.color)||Xu},children:(null===(a=th[e])||void 0===a?void 0:a.icon)||(0,qa.jsx)(jn,{})}),(0,qa.jsx)("div",{className:"skill-name",children:e})]},e)})})]},e.title))}),(0,qa.jsxs)(qf,{children:[(0,qa.jsx)(qu,{style:{fontSize:"2rem",marginBottom:"2rem"},children:"\uc8fc\uc694 \uae30\uc220 \uc219\ub828\ub3c4"}),[{name:"JavaScript/React",level:"\uc0c1\uae09",percentage:90},{name:"Java/Spring Boot",level:"\uc911\uc0c1\uae09",percentage:85},{name:"Python/Flask",level:"\uc911\uc0c1\uae09",percentage:80},{name:"AWS/Docker",level:"\uc911\uae09",percentage:75},{name:"Database",level:"\uc911\uc0c1\uae09",percentage:82}].map((e,t)=>(0,qa.jsxs)(Gf,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:[(0,qa.jsxs)(Xf,{children:[(0,qa.jsx)("span",{className:"skill-name",children:e.name}),(0,qa.jsx)("span",{className:"skill-level",children:e.level})]}),(0,qa.jsx)(Qf,{children:(0,qa.jsx)(Zf,{width:e.percentage,initial:{width:0},whileInView:{width:e.percentage},viewport:{once:!0},transition:{duration:1,delay:.1*t}})})]},e.name))]}),(0,qa.jsx)(Jf,{children:[{number:"3+",label:"\ub144\uc758 \uac1c\ubc1c \uacbd\ud5d8"},{number:"10+",label:"\uc644\ub8cc\ud55c \ud504\ub85c\uc81d\ud2b8"},{number:"5+",label:"\uc0ac\uc6a9 \uae30\uc220 \uc2a4\ud0dd"},{number:"2+",label:"\uc790\uaca9\uc99d \ubcf4\uc720"}].map((e,t)=>(0,qa.jsxs)(eh,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},whileHover:{y:-5},children:[(0,qa.jsx)(Uu.div,{className:"stat-number",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.5,delay:.1*t},children:e.number}),(0,qa.jsx)("div",{className:"stat-label",children:e.label})]},e.label))})]})})},rh=Yt(Yu)`
  background: ${id};
`,ih=Yt.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: ${ad.primary};
    border-radius: 2px;

    @media (max-width: ${sd}) {
      left: 30px;
    }
  }
`,ah=Yt(Uu.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 100%;

  &:nth-child(even) {
    .timeline-content {
      left: 0;
      text-align: left;

      @media (max-width: ${sd}) {
        left: 70px;
      }
    }

    .timeline-arrow {
      right: auto;
      left: -15px;
      border-left: none;
      border-right: 15px solid white;

      @media (max-width: ${sd}) {
        left: -15px;
        border-right: none;
        border-left: 15px solid white;
      }
    }
  }

  &:nth-child(odd) {
    .timeline-content {
      left: 50%;
      text-align: left;

      @media (max-width: ${sd}) {
        left: 70px;
      }
    }

    .timeline-arrow {
      right: -15px;
      border-right: none;
      border-left: 15px solid white;

      @media (max-width: ${sd}) {
        left: -15px;
        border-left: 15px solid white;
        border-right: none;
      }
    }
  }
`,oh=Yt.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: white;
  border: 4px solid ${Xu};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${Xu};
  z-index: 2;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

  @media (max-width: ${sd}) {
    left: 30px;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`,sh=Yt.div`
  position: relative;
  width: 45%;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${sd}) {
    width: calc(100% - 120px);
    margin-left: 0;
  }
`,lh=Yt.div`
  position: absolute;
  top: 30px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
`,ch=Yt.h3`
  font-size: 1.4rem;
  font-family: 'Pretendard-Bold';
  color: ${Zu};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,uh=Yt.h4`
  font-size: 1.1rem;
  font-family: 'Pretendard-SemiBold';
  color: ${Xu};
  margin-bottom: 1rem;
`,dh=Yt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Pretendard-Medium';
  color: ${rd};
  font-size: 0.9rem;

  .icon {
    color: ${Xu};
  }
`,fh=Yt.p`
  line-height: 1.7;
  color: ${nd};
  font-family: 'Pretendard-Regular';
`,hh=Yt.div`
  margin-top: 1.5rem;
  
  .skills-label {
    font-family: 'Pretendard-SemiBold';
    color: ${Zu};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`,ph=Yt.span`
  background: ${id};
  color: ${Xu};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid ${Xu};
`,mh=Yt.span`
  background: ${ad.success};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: 'Pretendard-SemiBold';
  margin-left: 0.5rem;
`,gh=Yt(Uu.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  margin-top: 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`,vh=Yt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,yh=Yt.div`
  .stat-number {
    font-size: 2.5rem;
    font-family: 'Pretendard-Bold';
    color: ${Xu};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${rd};
  }
`,bh=()=>{const{experience:e}=zd,t=[{...e[0],skills:["Java","Spring Boot","MySQL","LGU+ MCS","CallSystem"]},{...e[1],skills:["Project Management","Global Communication","Business Development"]},{...e[2],skills:["Education","English Teaching","Communication","Curriculum Development"]}],n={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6}}};return(0,qa.jsx)(rh,{id:"experience",children:(0,qa.jsxs)(Ku,{children:[(0,qa.jsx)(qu,{children:"Experience"}),(0,qa.jsx)(ih,{children:(0,qa.jsx)(Uu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.3}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:t.map((e,t)=>{return(0,qa.jsxs)(ah,{variants:n,children:[(0,qa.jsx)(oh,{children:(0,qa.jsx)(Sn,{})}),(0,qa.jsxs)(sh,{className:"timeline-content",children:[(0,qa.jsx)(lh,{className:"timeline-arrow"}),(0,qa.jsxs)(ch,{children:[(0,qa.jsx)(Hn,{className:"icon"}),e.company,(r=e.period,(r.includes("\ud604\uc7ac")||r.includes("~"))&&(0,qa.jsx)(mh,{children:"\ud604\uc7ac \uc7ac\uc9c1"}))]}),(0,qa.jsx)(uh,{children:e.position}),(0,qa.jsxs)(dh,{children:[(0,qa.jsx)(Pn,{className:"icon"}),e.period]}),(0,qa.jsx)(fh,{children:e.description}),e.skills&&(0,qa.jsxs)(hh,{children:[(0,qa.jsx)("div",{className:"skills-label",children:"\uc0ac\uc6a9 \uae30\uc220/\uc5c5\ubb34:"}),(0,qa.jsx)("div",{className:"skills-list",children:e.skills.map((e,t)=>(0,qa.jsx)(ph,{children:e},t))})]})]})]},t);var r})})}),(0,qa.jsxs)(gh,{initial:{y:30,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.6},children:[(0,qa.jsx)("h3",{style:{fontSize:"1.8rem",fontFamily:"Pretendard-Bold",color:Zu,marginBottom:"1rem"},children:"\uacbd\ub825 \ud1b5\uacc4"}),(0,qa.jsxs)(vh,{children:[(0,qa.jsxs)(yh,{children:[(0,qa.jsx)(Uu.div,{className:"stat-number",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:"2+"}),(0,qa.jsx)("div",{className:"stat-label",children:"\ucd1d \uacbd\ub825 \ub144\uc218"})]}),(0,qa.jsxs)(yh,{children:[(0,qa.jsx)(Uu.div,{className:"stat-number",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.5,delay:.3},children:"3"}),(0,qa.jsx)("div",{className:"stat-label",children:"\ub2e4\uc591\ud55c \uc9c1\uc885 \uacbd\ud5d8"})]}),(0,qa.jsxs)(yh,{children:[(0,qa.jsx)(Uu.div,{className:"stat-number",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.5,delay:.4},children:"100%"}),(0,qa.jsx)("div",{className:"stat-label",children:"\uc131\uacf5\uc801\uc778 \ud504\ub85c\uc81d\ud2b8 \uc644\uc218\uc728"})]}),(0,qa.jsxs)(yh,{children:[(0,qa.jsx)(Uu.div,{className:"stat-number",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.5,delay:.5},children:"\uae00\ub85c\ubc8c"}),(0,qa.jsx)("div",{className:"stat-label",children:"\uc5c5\ubb34 \uacbd\ud5d8 (\ubbf8\uad6d \ucd9c\uc7a5)"})]})]})]})]})})},xh=Yt(Yu)`
  background: white;
`,wh=Yt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${od}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,kh=Yt(Uu.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`,Sh=Yt.div`
  height: 200px;
  background: ${ad.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  }

  .project-icon {
    position: relative;
    z-index: 2;
  }
`,Ph=Yt.div`
  padding: 1.5rem;
`,Eh=Yt.div`
  margin-bottom: 1rem;
`,Ch=Yt.h3`
  font-size: 1.3rem;
  font-family: 'Pretendard-Bold';
  color: ${Zu};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`,Th=Yt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: ${rd};

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`,zh=Yt.p`
  color: ${nd};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Pretendard-Regular';
  font-size: 0.95rem;
`,jh=Yt.div`
  margin-bottom: 1.5rem;

  .tech-label {
    font-family: 'Pretendard-SemiBold';
    color: ${Zu};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`,Ah=Yt.span`
  background: ${id};
  color: ${Xu};
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(102, 126, 234, 0.2);
`,_h=Yt.div`
  display: flex;
  gap: 0.5rem;
`,Mh=Yt.a`
  flex: 1;
  background: ${e=>e.primary?ad.primary:"transparent"};
  color: ${e=>e.primary?"white":Xu};
  border: ${e=>e.primary?"none":`1px solid ${Xu}`};
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
    background: ${e=>e.primary?ad.secondary:Xu};
    color: white;
  }
`,Rh=Yt.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${e=>{switch(e.status){case"completed":return ed;case"in-progress":return td;case"planning":return rd;default:return Xu}}};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-family: 'Pretendard-SemiBold';
  z-index: 3;
`,Lh=Yt(Uu.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: ${od}) {
    padding: 1rem;
  }
`,Oh=Yt(Uu.div)`
  background: white;
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,Nh=Yt.div`
  position: sticky;
  top: 0;
  background: white;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid ${Ju};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 20px 20px 0 0;

  h3 {
    font-size: 1.5rem;
    font-family: 'Pretendard-Bold';
    color: ${Zu};
    margin: 0;
    flex: 1;
  }
`,Dh=Yt.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${rd};
  cursor: pointer;
  padding: 0.5rem;
  margin: -0.5rem;

  &:hover {
    color: ${Zu};
  }
`,Ih=Yt.div`
  padding: 2rem;

  .section {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    font-family: 'Pretendard-SemiBold';
    color: ${Zu};
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`,Vh=Yt.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
    color: ${nd};

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: ${ed};
      font-weight: bold;
    }
  }
`,Bh=Yt.div`
  .challenge-item {
    background: ${id};
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border-left: 4px solid ${td};

    .challenge-title {
      font-family: 'Pretendard-SemiBold';
      color: ${Zu};
      margin-bottom: 0.5rem;
    }

    .challenge-solution {
      color: ${nd};
      line-height: 1.6;
    }
  }
`,Fh=()=>{const{projects:t,personal:n}=zd,[r,i]=(0,e.useState)(null),a={"Devhub: \uae43\ubcf4\ub2e4 \uc27d\uac8c '\ud615\uc0c1\uad00\ub9ac'\uc640 '\ucf54\ub4dc\ub9ac\ubdf0'":"\ud83d\udd27","\ub9ac\ud2c0\ubc45\ud06c (Little Bank)":"\ud83c\udfe6",Tripplai:"\u2708\ufe0f"},o=e=>"Google Play Store \ube44\uacf5\uac1c \ud14c\uc2a4\ud2b8 \uc911"===e.status||"\uad00\uad11 API \uacf5\ubaa8\uc804 \uc9c4\ucd9c"===e.status?"in-progress":"completed",s=e=>{switch(e){case"completed":default:return"\uc644\ub8cc";case"in-progress":return"\uc9c4\ud589\uc911";case"planning":return"\uae30\ud68d\uc911"}},l=()=>{i(null),document.body.style.overflow="unset"},c={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return(0,qa.jsx)(xh,{id:"projects",children:(0,qa.jsxs)(Ku,{children:[(0,qa.jsx)(qu,{children:"Projects"}),(0,qa.jsxs)(Uu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.1}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,qa.jsx)(wh,{children:t.map((e,t)=>(0,qa.jsxs)(kh,{variants:c,whileHover:{scale:1.02},onClick:()=>(e=>{i(e),document.body.style.overflow="hidden"})(e),children:[(0,qa.jsxs)(Sh,{children:[(0,qa.jsx)(Rh,{status:o(e),children:s(o(e))}),(0,qa.jsx)("div",{className:"project-icon",children:a[e.title]||"\ud83d\udcbb"})]}),(0,qa.jsxs)(Ph,{children:[(0,qa.jsxs)(Eh,{children:[(0,qa.jsx)(Ch,{children:e.title}),(0,qa.jsxs)(Th,{children:[(0,qa.jsxs)("div",{className:"meta-item",children:[(0,qa.jsx)(Pn,{}),e.period]}),(0,qa.jsxs)("div",{className:"meta-item",children:[(0,qa.jsx)(Jn,{}),e.role]})]})]}),(0,qa.jsx)(zh,{children:e.description}),(0,qa.jsxs)(jh,{children:[(0,qa.jsx)("div",{className:"tech-label",children:"\uae30\uc220 \uc2a4\ud0dd"}),(0,qa.jsxs)("div",{className:"tech-list",children:[e.tech.slice(0,6).map((e,t)=>(0,qa.jsx)(Ah,{children:e},t)),e.tech.length>6&&(0,qa.jsxs)(Ah,{children:["+",e.tech.length-6,"\uac1c"]})]})]}),(0,qa.jsxs)(_h,{children:[(0,qa.jsxs)(Mh,{primary:!0,children:[(0,qa.jsx)(Yn,{}),"\uc790\uc138\ud788 \ubcf4\uae30"]}),e.link&&(0,qa.jsxs)(Mh,{href:e.link,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[(0,qa.jsx)(On,{}),"\ub370\ubaa8"]})]})]})]},t))}),(0,qa.jsxs)(Uu.div,{variants:c,style:{textAlign:"center",marginTop:"3rem"},children:[(0,qa.jsx)("h3",{style:{fontSize:"1.5rem",fontFamily:"Pretendard-SemiBold",color:Zu,marginBottom:"2rem"},children:"\ub354 \ub9ce\uc740 \ud504\ub85c\uc81d\ud2b8 \ubcf4\uae30"}),(0,qa.jsxs)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[(0,qa.jsxs)(Mh,{href:n.links.github,target:"_blank",rel:"noopener noreferrer",primary:!0,children:[(0,qa.jsx)(dn,{}),"GitHub \uc800\uc7a5\uc18c"]}),(0,qa.jsxs)(Mh,{href:n.links.portfolio,target:"_blank",rel:"noopener noreferrer",children:[(0,qa.jsx)(Nn,{}),"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 2024"]}),(0,qa.jsxs)(Mh,{href:n.links.playstore,target:"_blank",rel:"noopener noreferrer",children:[(0,qa.jsx)(Un,{}),"\ub9ac\ud2c0\ubc45\ud06c \uc571"]})]})]})]}),(0,qa.jsx)(Td,{children:r&&(0,qa.jsx)(Lh,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:l,children:(0,qa.jsxs)(Oh,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,qa.jsxs)(Nh,{children:[(0,qa.jsx)("h3",{children:r.title}),(0,qa.jsx)(Dh,{onClick:l,children:(0,qa.jsx)(Gn,{})})]}),(0,qa.jsxs)(Ih,{children:[(0,qa.jsxs)("div",{className:"section",children:[(0,qa.jsx)("div",{className:"section-title",children:"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc694"}),(0,qa.jsx)("p",{style:{lineHeight:1.7,color:nd},children:r.description}),(0,qa.jsxs)("div",{style:{marginTop:"1rem",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[(0,qa.jsxs)("span",{children:[(0,qa.jsx)("strong",{children:"\uae30\uac04:"})," ",r.period]}),(0,qa.jsxs)("span",{children:[(0,qa.jsx)("strong",{children:"\uc5ed\ud560:"})," ",r.role]}),r.status&&(0,qa.jsxs)("span",{children:[(0,qa.jsx)("strong",{children:"\uc0c1\ud0dc:"})," ",r.status]})]})]}),r.features&&(0,qa.jsxs)("div",{className:"section",children:[(0,qa.jsx)("div",{className:"section-title",children:"\uc8fc\uc694 \uae30\ub2a5"}),(0,qa.jsx)(Vh,{children:r.features.map((e,t)=>(0,qa.jsx)("li",{children:e},t))})]}),(0,qa.jsxs)("div",{className:"section",children:[(0,qa.jsx)("div",{className:"section-title",children:"\uc0ac\uc6a9 \uae30\uc220"}),(0,qa.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:r.tech.map((e,t)=>(0,qa.jsx)(Ah,{children:e},t))})]}),r.challenges&&(0,qa.jsxs)("div",{className:"section",children:[(0,qa.jsx)("div",{className:"section-title",children:"\uae30\uc220\uc801 \ub3c4\uc804 & \ud574\uacb0"}),(0,qa.jsx)(Bh,{children:r.challenges.map((e,t)=>(0,qa.jsx)("div",{className:"challenge-item",children:(0,qa.jsx)("div",{className:"challenge-solution",children:e})},t))})]}),r.link&&(0,qa.jsx)("div",{className:"section",children:(0,qa.jsxs)(Mh,{href:r.link,target:"_blank",rel:"noopener noreferrer",primary:!0,style:{display:"inline-flex",width:"auto"},children:[(0,qa.jsx)(On,{}),"\ud504\ub85c\uc81d\ud2b8 \ubcf4\ub7ec\uac00\uae30"]})})]})]})})})]})})},$h=Yt(Yu)`
  background: ${id};
`,Hh=Yt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${ld}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,Uh=Yt(Uu.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  }
`,Wh=Yt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${id};

  .icon {
    font-size: 2rem;
    color: ${Xu};
  }

  h3 {
    font-size: 1.5rem;
    font-family: 'Pretendard-Bold';
    color: ${Zu};
    margin: 0;
  }
`,Kh=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Yh=Yt(Uu.div)`
  background: ${id};
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid ${Xu};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,qh=Yt.div`
  .school-name {
    font-size: 1.2rem;
    font-family: 'Pretendard-Bold';
    color: ${Zu};
    margin-bottom: 0.5rem;
  }

  .major {
    font-size: 1rem;
    font-family: 'Pretendard-SemiBold';
    color: ${Xu};
    margin-bottom: 0.5rem;
  }

  .period {
    font-size: 0.9rem;
    color: ${rd};
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .type {
    display: inline-block;
    background: ${ad.primary};
    color: white;
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    margin-top: 0.5rem;
  }
`,Gh=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Xh=Yt(Uu.div)`
  background: ${id};
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid ${Qu};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,Qh=Yt.div`
  .training-name {
    font-size: 1.1rem;
    font-family: 'Pretendard-Bold';
    color: ${Zu};
    margin-bottom: 0.5rem;
  }

  .organization {
    font-size: 0.95rem;
    font-family: 'Pretendard-SemiBold';
    color: ${Qu};
    margin-bottom: 0.5rem;
  }

  .period {
    font-size: 0.9rem;
    color: ${rd};
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    background: ${ed};
    color: white;
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
  }
`,Zh=Yt.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
`,Jh=Yt(Uu.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
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
    background: ${e=>{switch(e.status){case"\ucde8\ub4dd":return ad.success;case"\ud544\uae30 \ud569\uaca9 (\uc2e4\uae30 \uc9c4\ud589 \uc911)":return ad.warning;case"\ub9cc\ub8cc":return ad.dark;default:return ad.primary}}};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,ep=Yt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  .cert-name {
    font-size: 1.1rem;
    font-family: 'Pretendard-Bold';
    color: ${Zu};
    flex: 1;
  }

  .cert-icon {
    font-size: 1.5rem;
    color: ${Xu};
  }
`,tp=Yt.div`
  .cert-date {
    font-size: 0.9rem;
    color: ${rd};
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .cert-score {
    font-size: 0.9rem;
    color: ${nd};
    margin-bottom: 0.5rem;
  }

  .cert-status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-SemiBold';
    background: ${e=>{switch(e.status){case"\ucde8\ub4dd":return ed;case"\ud544\uae30 \ud569\uaca9 (\uc2e4\uae30 \uc9c4\ud589 \uc911)":return td;case"\ub9cc\ub8cc":return rd;default:return Xu}}};
    color: white;
  }
`,np=Yt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`,rp=Yt(Uu.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${ad.primary};
  }

  .stat-icon {
    font-size: 2.5rem;
    color: ${Xu};
    margin-bottom: 1rem;
  }

  .stat-number {
    font-size: 2rem;
    font-family: 'Pretendard-Bold';
    color: ${Zu};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${rd};
  }
`,ip=()=>{const{education:e,training:t,certificates:n}=zd,r={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}},i=[{icon:(0,qa.jsx)(Dn,{}),number:"3",label:"\ud559\ub825 \ub2e8\uacc4"},{icon:(0,qa.jsx)(kn,{}),number:"2",label:"\uad50\uc721 \uc5f0\uc218"},{icon:(0,qa.jsx)(En,{}),number:"3",label:"\ubcf4\uc720 \uc790\uaca9\uc99d"},{icon:(0,qa.jsx)(Qn,{}),number:"900",label:"TOEIC \uc810\uc218"}];return(0,qa.jsx)($h,{id:"education",children:(0,qa.jsxs)(Ku,{children:[(0,qa.jsx)(qu,{children:"Education & Certificates"}),(0,qa.jsxs)(Hh,{children:[(0,qa.jsxs)(Uh,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,qa.jsxs)(Wh,{children:[(0,qa.jsx)(Dn,{className:"icon"}),(0,qa.jsx)("h3",{children:"\ud559\ub825"})]}),(0,qa.jsx)(Kh,{children:e.map((e,t)=>(0,qa.jsx)(Yh,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:(0,qa.jsxs)(qh,{children:[(0,qa.jsx)("div",{className:"school-name",children:e.school}),(0,qa.jsx)("div",{className:"major",children:e.major}),(0,qa.jsxs)("div",{className:"period",children:[(0,qa.jsx)(Pn,{}),e.period]}),(0,qa.jsx)("div",{className:"type",children:e.type})]})},t))})]}),(0,qa.jsxs)(Uh,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,qa.jsxs)(Wh,{children:[(0,qa.jsx)(kn,{className:"icon"}),(0,qa.jsx)("h3",{children:"\uad50\uc721 \uc5f0\uc218"})]}),(0,qa.jsx)(Gh,{children:t.map((e,t)=>(0,qa.jsx)(Xh,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:(0,qa.jsxs)(Qh,{children:[(0,qa.jsx)("div",{className:"training-name",children:e.name}),(0,qa.jsx)("div",{className:"organization",children:e.organization}),(0,qa.jsxs)("div",{className:"period",children:[(0,qa.jsx)(Pn,{}),e.period]}),(0,qa.jsx)("div",{className:"status",children:e.status})]})},t))})]})]}),(0,qa.jsxs)(Uu.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.1}}},children:[(0,qa.jsx)(qu,{style:{fontSize:"2rem",marginTop:"4rem",marginBottom:"2rem"},children:"\uc790\uaca9\uc99d \ubc0f \uc778\uc99d"}),(0,qa.jsx)(Zh,{children:n.map((e,t)=>(0,qa.jsxs)(Jh,{status:e.status,variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},children:[(0,qa.jsxs)(ep,{children:[(0,qa.jsx)("div",{className:"cert-name",children:e.name}),(0,qa.jsx)(bn,{className:"cert-icon"})]}),(0,qa.jsxs)(tp,{status:e.status,children:[(0,qa.jsxs)("div",{className:"cert-date",children:[(0,qa.jsx)(Pn,{}),e.date]}),e.score&&(0,qa.jsxs)("div",{className:"cert-score",children:["\uc810\uc218: ",e.score]}),(0,qa.jsx)("div",{className:"cert-status",children:e.status})]})]},t))})]}),(0,qa.jsx)(np,{children:i.map((e,t)=>(0,qa.jsxs)(rp,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.1*t},whileHover:{y:-5},children:[(0,qa.jsx)("div",{className:"stat-icon",children:e.icon}),(0,qa.jsx)(Uu.div,{className:"stat-number",initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.5,delay:.1*t},children:e.number}),(0,qa.jsx)("div",{className:"stat-label",children:e.label})]},t))})]})})},ap=Yt.section`
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
    animation: float 20s linear infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-100px); }
  }
`,op=Yt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,sp=Yt(Uu.h2)`
  font-size: 3.5rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${sd}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${od}) {
    font-size: 2rem;
  }
`,lp=Yt(Uu.p)`
  font-size: 1.2rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 400;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${od}) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`,cp=Yt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${sd}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,up=Yt(Uu.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,dp=Yt(Uu.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }

  .icon {
    font-size: 1.8rem;
    color: #fff;
    min-width: 40px;
  }

  .content {
    flex: 1;

    .label {
      font-family: 'Inter', 'Noto Sans KR';
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #fff;
    }

    .value {
      font-family: 'Inter', 'Noto Sans KR';
      font-weight: 400;
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
      word-break: break-all;
    }
  }
`,fp=Yt(Uu.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,hp=Yt.h3`
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
`,pp=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,mp=Yt.label`
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
`,gp=Yt.input`
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #fff;
  font-family: 'Inter', 'Noto Sans KR';
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #fff;
    background: rgba(255, 255, 255, 0.2);
  }
`,vp=Yt.textarea`
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #fff;
  font-family: 'Inter', 'Noto Sans KR';
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #fff;
    background: rgba(255, 255, 255, 0.2);
  }
`,yp=Yt(Uu.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #fff 0%, #f0f8ff 100%);
  color: ${Xu};
  border: none;
  border-radius: 50px;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`,bp=Yt.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
`,xp=Yt(Uu.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: ${Xu};
    transform: translateY(-5px) scale(1.1);
    border-color: #fff;
  }
`,wp=()=>{const{personal:t}=zd,{success:n,error:r}=(0,e.useContext)(om),[i,a]=(0,e.useState)({name:"",email:"",message:""}),[o,s]=(0,e.useState)(!1),l=e=>{const{name:t,value:n}=e.target;a(e=>({...e,[t]:n}))},c=[{icon:(0,qa.jsx)(dn,{}),url:t.links.github,label:"GitHub"},{icon:(0,qa.jsx)(wn,{}),url:t.links.blog,label:"Blog"},{icon:(0,qa.jsx)(On,{}),url:t.links.portfolio,label:"Portfolio"}],u=[{icon:(0,qa.jsx)(Rn,{}),label:"\uc774\uba54\uc77c",value:t.email},{icon:(0,qa.jsx)(Wn,{}),label:"\uc5f0\ub77d\ucc98",value:t.phone},{icon:(0,qa.jsx)(Hn,{}),label:"\uc704\uce58",value:"\uc11c\uc6b8, \ub300\ud55c\ubbfc\uad6d"}];return(0,qa.jsx)(ap,{id:"contact",children:(0,qa.jsxs)(op,{children:[(0,qa.jsx)(sp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"\uc5f0\ub77d\ud558\uae30"}),(0,qa.jsx)(lp,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:"\uc0c8\ub85c\uc6b4 \uae30\ud68c\uc640 \ub3c4\uc804\uc744 \uae30\ub2e4\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc5b8\uc81c\ub4e0\uc9c0 \uc5f0\ub77d \uc8fc\uc138\uc694!"}),(0,qa.jsxs)(cp,{children:[(0,qa.jsx)(up,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.3},children:u.map((e,t)=>(0,qa.jsxs)(dp,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4+.1*t},whileHover:{scale:1.02},children:[(0,qa.jsx)("div",{className:"icon",children:e.icon}),(0,qa.jsxs)("div",{className:"content",children:[(0,qa.jsx)("div",{className:"label",children:e.label}),(0,qa.jsx)("div",{className:"value",children:e.value})]})]},t))}),(0,qa.jsxs)(fp,{onSubmit:async e=>{e.preventDefault(),s(!0);try{const e=await fetch("http://localhost:5000/api/contacts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),t=await e.json();if(t.success)n("\uba54\uc2dc\uc9c0\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \ube60\ub978 \uc2dc\uc77c \ub0b4\uc5d0 \ub2f5\ubcc0\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.",{title:"\uc804\uc1a1 \uc644\ub8cc",duration:5e3}),a({name:"",email:"",message:""});else{const e=t.errors?t.errors.map(e=>e.message).join(", "):t.message||"\uba54\uc2dc\uc9c0 \uc804\uc1a1\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.";r(e,{title:"\uc804\uc1a1 \uc2e4\ud328",duration:7e3})}}catch(t){console.error("\uc804\uc1a1 \uc624\ub958:",t),r("\uc11c\ubc84\uc640 \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uac70\ub098 \uc774\uba54\uc77c\ub85c \uc9c1\uc811 \uc5f0\ub77d\ud574\uc8fc\uc138\uc694.",{title:"\uc5f0\uacb0 \uc624\ub958",duration:1e4})}finally{s(!1)}},initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:[(0,qa.jsx)(hp,{children:"\uba54\uc2dc\uc9c0 \ubcf4\ub0b4\uae30"}),(0,qa.jsxs)(pp,{children:[(0,qa.jsx)(mp,{htmlFor:"name",children:"\uc774\ub984"}),(0,qa.jsx)(gp,{type:"text",id:"name",name:"name",value:i.name,onChange:l,placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",required:!0})]}),(0,qa.jsxs)(pp,{children:[(0,qa.jsx)(mp,{htmlFor:"email",children:"\uc774\uba54\uc77c"}),(0,qa.jsx)(gp,{type:"email",id:"email",name:"email",value:i.email,onChange:l,placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",required:!0})]}),(0,qa.jsxs)(pp,{children:[(0,qa.jsx)(mp,{htmlFor:"message",children:"\uba54\uc2dc\uc9c0"}),(0,qa.jsx)(vp,{id:"message",name:"message",value:i.message,onChange:l,placeholder:"\ubb38\uc758\uc0ac\ud56d\uc774\ub098 \uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",required:!0})]}),(0,qa.jsx)(yp,{type:"submit",disabled:o,whileHover:{scale:1.05},whileTap:{scale:.95},children:o?"\uc804\uc1a1 \uc911...":"\uba54\uc2dc\uc9c0 \uc804\uc1a1"})]})]}),(0,qa.jsx)(bp,{children:c.map((e,t)=>(0,qa.jsx)(xp,{href:e.url,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.8+.1*t},whileHover:{scale:1.1},whileTap:{scale:.95},children:e.icon},t))})]})})},kp=Yt(Uu.div)`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1002;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  padding: 1.25rem 0.75rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${ld}) {
    display: none;
  }
`,Sp=Yt(Uu.button)`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: ${Xu};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: scale(1.08) translateY(-2px);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);

    &::before {
      left: 0;
    }

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: scale(1.08);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);

    &::after {
      width: 100%;
      height: 100%;
    }
  }
`,Pp=Yt(Uu.div)`
  position: absolute;
  left: 75px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: rgba(0, 0, 0, 0.85);
  }
`,Ep=Yt(Uu.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
  margin-top: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 10px 35px rgba(102, 126, 234, 0.5);

    &::before {
      left: 100%;
    }
  }
`,Cp=()=>{const[t,n]=(0,e.useState)("home"),[r,i]=(0,e.useState)(!1),[a,o]=(0,e.useState)(null),s=[{id:"home",icon:(0,qa.jsx)(Vn,{}),label:"Home"},{id:"about",icon:(0,qa.jsx)(Zn,{}),label:"About"},{id:"skills",icon:(0,qa.jsx)(An,{}),label:"Skills"},{id:"experience",icon:(0,qa.jsx)(Sn,{}),label:"Experience"},{id:"projects",icon:(0,qa.jsx)(Kn,{}),label:"Projects"},{id:"education",icon:(0,qa.jsx)(Dn,{}),label:"Education"},{id:"contact",icon:(0,qa.jsx)(Rn,{}),label:"Contact"}];(0,e.useEffect)(()=>{const e=()=>{const e=window.scrollY;i(e>500);const t=s.map(e=>e.id);let r="home";for(const n of t){const e=document.getElementById(n);if(e){const t=e.getBoundingClientRect();if(t.top<=200&&t.bottom>=200){r=n;break}}}n(r)};return window.addEventListener("scroll",e),e(),()=>window.removeEventListener("scroll",e)},[s]);return(0,qa.jsxs)(kp,{children:[s.map((e,n)=>(0,qa.jsxs)("div",{style:{position:"relative"},children:[(0,qa.jsx)(Sp,{className:t===e.id?"active":"",onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})})(e.id),onMouseEnter:()=>o(e.id),onMouseLeave:()=>o(null),whileHover:{scale:1.08,y:-2},whileTap:{scale:.95},children:e.icon}),(0,qa.jsx)(Td,{children:a===e.id&&(0,qa.jsx)(Pp,{initial:{opacity:0,x:-15,scale:.9},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:-15,scale:.9},transition:{duration:.3,ease:[.4,0,.2,1]},children:e.label})})]},e.id)),(0,qa.jsx)(Td,{children:r&&(0,qa.jsx)(Ep,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},initial:{opacity:0,scale:0,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:0,y:20},transition:{duration:.4,ease:[.4,0,.2,1]},whileHover:{scale:1.1,y:-3},whileTap:{scale:.95},children:(0,qa.jsx)(zn,{})})})]})},Tp=n.p+"static/media/devhub.e18c8952680f7e9adf96.gif",zp=n.p+"static/media/dogfoot.a00142102f90c9c79a41.png",jp=n.p+"static/media/littlebank.ef8fc76f9576624b37a8.png",Ap=n.p+"static/media/littlebank_admin.fdb2791ec48cb0ad8605.png",_p=n.p+"static/media/pmk_admin.500fd91d78fd79d6a3e8.png",Mp=n.p+"static/media/trippleai.d826944528fbab8ef0ec.png",Rp={React:{icon:(0,qa.jsx)(vn,{}),color:"#61dafb"},"Node.js":{icon:(0,qa.jsx)(mn,{}),color:"#339933"},MongoDB:{icon:(0,qa.jsx)(jf,{}),color:"#47A248"},"Socket.io":{icon:(0,qa.jsx)(Df,{}),color:"#010101"},"Styled Components":{icon:(0,qa.jsx)(Bf,{}),color:"#DB7093"},"Framer Motion":{icon:(0,qa.jsx)(Tf,{}),color:"#0055FF"},Flutter:{icon:(0,qa.jsx)(Cf,{}),color:"#02569B"},Dart:{icon:(0,qa.jsx)(xf,{}),color:"#0175C2"},Firebase:{icon:(0,qa.jsx)(Pf,{}),color:"#FFCA28"},SQLite:{icon:(0,qa.jsx)(Vf,{}),color:"#003B57"},"Chart.js":{icon:(0,qa.jsx)(bf,{}),color:"#FF6384"},MySQL:{icon:(0,qa.jsx)(Af,{}),color:"#4479A1"},"Vue.js":{icon:(0,qa.jsx)(yn,{}),color:"#4FC08D"},Express:{icon:(0,qa.jsx)(kf,{}),color:"#000000"},PostgreSQL:{icon:(0,qa.jsx)(Lf,{}),color:"#336791"},Redis:{icon:(0,qa.jsx)(Nf,{}),color:"#DC382D"},Python:{icon:(0,qa.jsx)(gn,{}),color:"#3776AB"},FastAPI:{icon:(0,qa.jsx)(Sf,{}),color:"#009688"},OpenAI:{icon:(0,qa.jsx)(Mf,{}),color:"#412991"}},Lp=[{id:1,title:"Devhub \uac1c\ubc1c\uc790 \ucee4\ubba4\ub2c8\ud2f0",description:"\uac1c\ubc1c\uc790\ub97c \uc704\ud55c \ucee4\ubba4\ub2c8\ud2f0 \ud50c\ub7ab\ud3fc \uc6f9\uc0ac\uc774\ud2b8",tech:["React","Node.js","MongoDB","Socket.io"],image:Tp,color:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{id:2,title:"\uac1c\ubc1c\uc790 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc0ac\uc774\ud2b8",description:"\uac1c\ubc1c\uc790 \uac1c\uc778 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \ubc0f \uc774\ub825\uc11c \uc6f9\uc0ac\uc774\ud2b8",tech:["React","Styled Components","Framer Motion"],image:zp,color:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"},{id:3,title:"\ub9ac\ud2c0\ubc45\ud06c \ubaa8\ubc14\uc77c \uc571",description:"\uc544\uc774\ub4e4\uc744 \uc704\ud55c \uae08\uc735 \uad50\uc721 \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158",tech:["Flutter","Dart","Firebase","SQLite"],image:jp,color:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"},{id:4,title:"\ub9ac\ud2c0\ubc45\ud06c \uad00\ub9ac\uc790 \ub300\uc2dc\ubcf4\ub4dc",description:"\ub9ac\ud2c0\ubc45\ud06c \uc571\uc744 \uc704\ud55c \uad00\ub9ac\uc790 \uc6f9 \ub300\uc2dc\ubcf4\ub4dc",tech:["React","Chart.js","Node.js","MySQL"],image:Ap,color:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"},{id:5,title:"PMK \uad00\ub9ac \uc2dc\uc2a4\ud15c",description:"\ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac\ub97c \uc704\ud55c \uc5b4\ub4dc\ubbfc \uc2dc\uc2a4\ud15c",tech:["Vue.js","Express","PostgreSQL","Redis"],image:_p,color:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)"},{id:6,title:"Tripplai \uc5ec\ud589 \ud50c\ub798\ub108",description:"AI \uae30\ubc18 \ub9de\ucda4\ud615 \uc5ec\ud589 \uacc4\ud68d \uc6f9 \uc11c\ube44\uc2a4",tech:["React","Python","FastAPI","OpenAI"],image:Mp,color:"linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"}],Op=Yt(Uu.div)`
  position: fixed;
  right: ${e=>e.isOpen?"0":"-820px"};
  top: 0;
  width: 800px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  backdrop-filter: blur(20px);
  z-index: 999;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  padding: 1.5rem;
  visibility: ${e=>e.isOpen?"visible":"hidden"};

  @media (max-width: ${ld}) {
    display: none;
  }
`,Np=Yt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  min-height: calc(100vh - 4rem);
  position: relative;
  z-index: 1001;
`,Dp=Yt(Uu.h2)`
  grid-column: 1 / -1;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`,Ip=Yt(Uu.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }
`,Vp=Yt.div`
  height: 200px;
  background: ${e=>e.color};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-icon {
    color: white;
    font-size: 3rem;
    opacity: 0.8;
    position: absolute;
    z-index: 1;
  }

  &:hover .project-img {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(0,0,0,0.1) 0%, 
      rgba(0,0,0,0.3) 100%
    );
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,Bp=Yt.div`
  padding: 1.5rem;

  .project-title {
    font-family: 'Inter', 'Noto Sans KR';
    font-weight: 700;
    font-size: 1.3rem;
    color: ${Zu};
    margin-bottom: 0.8rem;
  }

  .project-description {
    font-family: 'Inter', 'Noto Sans KR';
    font-size: 0.9rem;
    color: ${rd};
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .tech-badge:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`,Fp=Yt(Uu.div)`
  position: fixed;
  right: ${e=>e.isOpen?"0":"-320px"};
  top: 50%;
  transform: translateY(-50%);
  width: 350px;
  height: 90vh;
  max-height: 800px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 25px 0 0 25px;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.8);
  z-index: 1001;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  @media (max-width: ${ld}) {
    display: none;
  }
`,$p=Yt(Uu.button)`
  position: fixed;
  right: ${e=>e.isOpen?"320px":"2rem"};
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border: none;
  background: linear-gradient(135deg, ${Xu}, ${Qu});
  backdrop-filter: blur(10px);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1002;

  @media (max-width: ${ld}) {
    display: none;
  }

  &:hover {
    background: linear-gradient(135deg, ${Qu}, ${Xu});
    color: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
  }
`,Hp=Yt.div`
  padding: 2rem 1.8rem;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Xu};
    border-radius: 2px;
  }
`,Up=Yt.h3`
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  font-size: 1.2rem;
  color: ${Zu};
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: ${ad.primary};
    border-radius: 1px;
  }
`,Wp=Yt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
`,Kp=Yt(Uu.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.8rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: ${Zu};
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: ${ad.primary};
    color: white;
    transform: translateY(-2px);
  }

  .icon {
    font-size: 1.3rem;
  }

  .label {
    font-family: 'Inter', 'Noto Sans KR';
    font-weight: 500;
    font-size: 0.7rem;
  }
`,Yp=Yt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`,qp=Yt(Uu.div)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 15px;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 500;
  font-size: 0.7rem;
  color: ${Zu};
  transition: all 0.3s ease;

  &:hover {
    background: ${ad.primary};
    color: white;
    transform: scale(1.05);
  }

  .icon {
    font-size: 0.9rem;
  }
`,Gp=Yt.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;
  background: rgba(46, 204, 113, 0.1);
  border-radius: 10px;
  text-align: center;

  .status-dot {
    width: 8px;
    height: 8px;
    background: ${ed};
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .status-text {
    font-family: 'Inter', 'Noto Sans KR';
    font-weight: 500;
    font-size: 0.8rem;
    color: ${ed};
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(46, 204, 113, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
    }
  }
`,Xp=Yt(Uu.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1003;
  pointer-events: auto;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`,Qp=Yt(Uu.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50%;
  color: ${Xu};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1002;

  &:hover {
    background: ${Xu};
    color: white;
    transform: scale(1.1);
  }
`,Zp=()=>{const[t,n]=(0,e.useState)(!1),[r,i]=(0,e.useState)(!1),{personal:a}=zd;console.log("\uac24\ub7ec\ub9ac \uc0c1\ud0dc:",r,"\uc0ac\uc774\ub4dc\ubc14 \uc0c1\ud0dc:",t);const o=[{icon:(0,qa.jsx)(dn,{}),label:"GitHub",url:a.links.github},{icon:(0,qa.jsx)(wn,{}),label:"Blog",url:a.links.blog},{icon:(0,qa.jsx)(On,{}),label:"Portfolio",url:a.links.portfolio},{icon:(0,qa.jsx)(Un,{}),label:"App Demo",url:a.links.playstore}],s=[{icon:(0,qa.jsx)(vn,{}),name:"React",color:"#61dafb"},{icon:(0,qa.jsx)(yn,{}),name:"Vue.js",color:"#4fc08d"},{icon:(0,qa.jsx)(fn,{}),name:"Java",color:"#f89820"},{icon:(0,qa.jsx)(gn,{}),name:"Python",color:"#3776ab"},{icon:(0,qa.jsx)(ln,{}),name:"AWS",color:"#ff9900"}];return(0,qa.jsxs)(qa.Fragment,{children:[r&&(0,qa.jsx)(Xp,{onClick:()=>{console.log("\uac24\ub7ec\ub9ac \ub2eb\uae30 \ubc84\ud2bc \ud074\ub9ad"),i(!1)},whileHover:{scale:1.1},whileTap:{scale:.9},style:{position:"fixed",top:"1rem",right:"1rem",zIndex:2e3},children:(0,qa.jsx)(Gn,{})}),(0,qa.jsx)(Op,{isOpen:r,initial:{x:800},animate:{x:r?0:800},transition:{duration:.4,ease:[.4,0,.2,1]},children:(0,qa.jsxs)(Np,{children:[(0,qa.jsx)(Dp,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"\ud83c\udfa8 Project Gallery"}),Lp.map((e,t)=>(0,qa.jsxs)(Ip,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.6+.1*t,duration:.4},whileHover:{scale:1.02,y:-5},whileTap:{scale:.98},children:[(0,qa.jsxs)(Vp,{color:e.color,children:[(0,qa.jsx)("img",{src:e.image,alt:e.title,className:"project-img"}),!e.image&&(0,qa.jsx)(Bn,{className:"project-icon"})]}),(0,qa.jsxs)(Bp,{children:[(0,qa.jsx)("div",{className:"project-title",children:e.title}),(0,qa.jsx)("div",{className:"project-description",children:e.description}),(0,qa.jsx)("div",{className:"project-tech",children:e.tech.map((e,t)=>{const n=Rp[e];return n?(0,qa.jsx)("div",{className:"tech-badge",style:{color:n.color},title:e,children:n.icon},t):(0,qa.jsx)("span",{className:"tech-badge",style:{fontSize:"0.7rem",padding:"0.4rem 0.6rem"},children:e},t)})})]})]},e.id))]})}),!t&&!r&&(0,qa.jsx)($p,{isOpen:!1,onClick:()=>{n(!0),i(!0)},initial:{x:100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6,delay:.3,ease:[.4,0,.2,1]},whileHover:{scale:1.05},whileTap:{scale:.95},style:{right:"2rem"},children:(0,qa.jsx)(Tn,{})}),!r&&t&&(0,qa.jsx)($p,{isOpen:!1,onClick:()=>i(!0),whileHover:{scale:1.05},whileTap:{scale:.95},style:{right:"370px",background:"linear-gradient(135deg, #43e97b, #38f9d7)"},children:(0,qa.jsx)(Bn,{})}),!t&&r&&(0,qa.jsx)($p,{isOpen:!1,onClick:()=>n(!0),whileHover:{scale:1.05},whileTap:{scale:.95},style:{right:"2rem",background:"linear-gradient(135deg, #667eea, #764ba2)"},children:(0,qa.jsx)(Tn,{})}),(0,qa.jsxs)(Fp,{isOpen:t,children:[(0,qa.jsx)(Qp,{onClick:()=>n(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,qa.jsx)(Gn,{})}),(0,qa.jsxs)(Hp,{children:[(0,qa.jsxs)("div",{children:[(0,qa.jsx)(Up,{children:"\ud604\uc7ac \uc0c1\ud0dc"}),(0,qa.jsxs)(Gp,{children:[(0,qa.jsx)("div",{className:"status-dot"}),(0,qa.jsx)("div",{className:"status-text",children:"\uad6c\uc9c1 \uc911 (Open to Work)"})]})]}),(0,qa.jsxs)("div",{children:[(0,qa.jsx)(Up,{children:"Links"}),(0,qa.jsx)(Wp,{children:o.map((e,t)=>(0,qa.jsxs)(Kp,{href:e.url,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,qa.jsx)("div",{className:"icon",children:e.icon}),(0,qa.jsx)("div",{className:"label",children:e.label})]},t))})]}),(0,qa.jsxs)("div",{children:[(0,qa.jsx)(Up,{children:"Main Stack"}),(0,qa.jsx)(Yp,{children:s.map((e,t)=>(0,qa.jsxs)(qp,{whileHover:{scale:1.05},style:{"--tech-color":e.color},children:[(0,qa.jsx)("div",{className:"icon",style:{color:e.color},children:e.icon}),e.name]},t))})]}),(0,qa.jsxs)("div",{children:[(0,qa.jsx)(Up,{children:"Contact"}),(0,qa.jsxs)("div",{style:{textAlign:"center"},children:[(0,qa.jsx)("div",{style:{fontFamily:"'Inter', 'Noto Sans KR'",fontSize:"0.8rem",color:rd,marginBottom:"0.5rem"},children:a.email}),(0,qa.jsx)("div",{style:{fontFamily:"'Inter', 'Noto Sans KR'",fontSize:"0.8rem",color:rd},children:a.phone})]})]})]})]})]})},Jp=Gt`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,em=Gt`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,tm=Yt(Uu.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  pointer-events: none;
`,nm=Yt(Uu.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: ${e=>{switch(e.type){case"success":return"linear-gradient(135deg, #4CAF50, #45a049)";case"error":return"linear-gradient(135deg, #f44336, #da190b)";case"warning":return"linear-gradient(135deg, #ff9800, #f57c00)";default:return"linear-gradient(135deg, #2196F3, #1976D2)"}}};
  color: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 300px;
  max-width: 400px;
  pointer-events: auto;
  animation: ${Jp} 0.3s ease-out;

  &.exit {
    animation: ${em} 0.3s ease-in;
  }

  .icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
    
    .title {
      font-family: 'Inter', 'Noto Sans KR';
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    .message {
      font-family: 'Inter', 'Noto Sans KR';
      font-weight: 400;
      font-size: 0.9rem;
      opacity: 0.9;
      line-height: 1.4;
    }
  }

  .close-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.2s ease;
    flex-shrink: 0;

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0 0 12px 12px;
    animation: progress ${e=>e.duration||5e3}ms linear;
  }

  @keyframes progress {
    from { width: 100%; }
    to { width: 0%; }
  }
`,rm=e=>{switch(e){case"success":return(0,qa.jsx)(Cn,{});case"error":case"warning":return(0,qa.jsx)(Ln,{});default:return(0,qa.jsx)(Fn,{})}},im=e=>{switch(e){case"success":return"\uc131\uacf5";case"error":return"\uc624\ub958";case"warning":return"\uacbd\uace0";default:return"\uc54c\ub9bc"}},am=e=>{let{toasts:t,removeToast:n}=e;return(0,qa.jsx)(tm,{children:(0,qa.jsx)(Td,{children:t.map(e=>(0,qa.jsxs)(nm,{type:e.type,duration:e.duration,initial:{x:100,opacity:0,scale:.8},animate:{x:0,opacity:1,scale:1},exit:{x:100,opacity:0,scale:.8},transition:{duration:.3,ease:"easeOut"},children:[(0,qa.jsx)("div",{className:"icon",children:rm(e.type)}),(0,qa.jsxs)("div",{className:"content",children:[(0,qa.jsx)("div",{className:"title",children:e.title||im(e.type)}),(0,qa.jsx)("div",{className:"message",children:e.message})]}),(0,qa.jsx)("button",{className:"close-btn",onClick:()=>n(e.id),children:(0,qa.jsx)(Gn,{})}),e.duration&&(0,qa.jsx)("div",{className:"progress-bar"})]},e.id))})})},om=e.createContext(),sm=Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #4facfe 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,lm=Yt(Uu.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.color||"rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`,cm=Yt(lm)`
  width: 300px;
  height: 300px;
  top: 10%;
  right: 10%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
`,um=Yt(lm)`
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 5%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
`,dm=Yt(lm)`
  width: 150px;
  height: 150px;
  top: 60%;
  right: 30%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
`,fm=Yt(Uu.div)`
  position: absolute;
  width: ${e=>e.size||"4px"};
  height: ${e=>e.size||"4px"};
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`,hm=Yt.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1px);
  min-height: 100vh;
`,pm=Yt.main`
  position: relative;
  z-index: 2;
`,mm=Yt.section`
  position: relative;
  z-index: 2;
  
  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.02);
  }
  
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.01);
  }
`,gm=Yt.footer`
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  color: white;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,vm=Yt.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .footer-text {
    font-family: 'Inter', 'Noto Sans KR';
    font-size: 1rem;
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .footer-tech {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.6;
  }

  .heart {
    color: #e74c3c;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;const ym=function(){const t=(()=>{const[t,n]=e.useState([]),r=e.useCallback(e=>{const t=Date.now()+Math.random(),r={id:t,type:"info",duration:5e3,...e};return n(e=>[...e,r]),r.duration&&setTimeout(()=>{i(t)},r.duration),t},[]),i=e.useCallback(e=>{n(t=>t.filter(t=>t.id!==e))},[]),a=e.useCallback(function(e){return r({type:"success",message:e,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}})},[r]),o=e.useCallback(function(e){return r({type:"error",message:e,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}})},[r]),s=e.useCallback(function(e){return r({type:"warning",message:e,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}})},[r]),l=e.useCallback(function(e){return r({type:"info",message:e,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}})},[r]);return{toasts:t,addToast:r,removeToast:i,success:a,error:o,warning:s,info:l}})(),n=(()=>{const e=[];for(let t=0;t<15;t++)e.push({id:t,x:100*Math.random(),y:100*Math.random(),size:3*Math.random()+1,delay:10*Math.random()});return e})();return(0,e.useEffect)(()=>{i().init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})},[]),(0,qa.jsx)(om.Provider,{value:t,children:(0,qa.jsxs)(qa.Fragment,{children:[(0,qa.jsx)(Wu,{}),(0,qa.jsxs)(sm,{children:[(0,qa.jsx)(cm,{animate:{y:[0,-30,0],rotate:[0,180,360],scale:[1,1.1,1]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}}),(0,qa.jsx)(um,{animate:{y:[0,25,0],x:[0,15,0],rotate:[0,-180,-360]},transition:{duration:25,repeat:1/0,ease:"easeInOut"}}),(0,qa.jsx)(dm,{animate:{y:[0,-20,0],x:[0,-10,0],scale:[1,.9,1]},transition:{duration:18,repeat:1/0,ease:"easeInOut"}}),n.map(e=>(0,qa.jsx)(fm,{size:`${e.size}px`,style:{left:`${e.x}%`,top:`${e.y}%`},animate:{y:[0,-30,0],opacity:[.3,1,.3]},transition:{duration:8+e.delay,repeat:1/0,ease:"easeInOut",delay:e.delay}},e.id))]}),(0,qa.jsx)(Cp,{}),(0,qa.jsx)(Zp,{}),(0,qa.jsxs)(hm,{children:[(0,qa.jsx)(xd,{}),(0,qa.jsxs)(pm,{children:[(0,qa.jsx)(mm,{"data-aos":"fade-up",children:(0,qa.jsx)(tf,{})}),(0,qa.jsx)(mm,{id:"about","data-aos":"fade-up",children:(0,qa.jsx)(vf,{})}),(0,qa.jsx)(mm,{id:"skills","data-aos":"fade-up",children:(0,qa.jsx)(nh,{})}),(0,qa.jsx)(mm,{id:"experience","data-aos":"fade-up",children:(0,qa.jsx)(bh,{})}),(0,qa.jsx)(mm,{id:"projects","data-aos":"fade-up",children:(0,qa.jsx)(Fh,{})}),(0,qa.jsx)(mm,{id:"education","data-aos":"fade-up",children:(0,qa.jsx)(ip,{})}),(0,qa.jsx)(mm,{id:"contact","data-aos":"fade-up",children:(0,qa.jsx)(wp,{})})]}),(0,qa.jsx)(gm,{children:(0,qa.jsxs)(vm,{children:[(0,qa.jsxs)("div",{className:"footer-text",children:["Made with ",(0,qa.jsx)(In,{className:"heart"})," by DongKyu Kim"]}),(0,qa.jsxs)("div",{className:"footer-tech",children:[(0,qa.jsx)(vn,{})," React \u2022 ",(0,qa.jsx)(jn,{})," Styled Components \u2022 Framer Motion"]})]})})]}),(0,qa.jsx)(am,{toasts:t.toasts,removeToast:t.removeToast})]})})},bm=e=>{e&&e instanceof Function&&n.e(206).then(n.bind(n,206)).then(t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)})};t.createRoot(document.getElementById("root")).render((0,qa.jsx)(e.StrictMode,{children:(0,qa.jsx)(ym,{})})),bm()})()})();
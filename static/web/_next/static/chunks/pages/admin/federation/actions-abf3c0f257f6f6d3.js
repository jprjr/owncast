(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4976,1382],{97183:function(t,e,n){"use strict";var r=n(2897),o=n(7293),i=r.ZP;i.Header=r.h4,i.Footer=r.$_,i.Content=r.VY,i.Sider=o.Z,e.Z=i},11382:function(t,e,n){"use strict";var r=n(87462),o=n(4942),i=n(97685),a=n(94184),c=n.n(a),s=n(23279),u=n.n(s),l=n(98423),f=n(67294),p=n(53124),d=n(96159),m=n(93355),v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};(0,m.b)("small","default","large");var y=null,h=function(t){var e=t.spinPrefixCls,n=t.spinning,a=void 0===n||n,s=t.delay,m=t.className,h=t.size,g=void 0===h?"default":h,x=t.tip,E=t.wrapperClassName,b=t.style,O=t.children,N=v(t,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),w=f.useState(function(){return a&&(!a||!s||!!isNaN(Number(s)))}),j=(0,i.Z)(w,2),T=j[0],_=j[1];return f.useEffect(function(){var t=u()(function(){_(a)},s);return t(),function(){var e;null===(e=null==t?void 0:t.cancel)||void 0===e||e.call(t)}},[s,a]),f.createElement(p.C,null,function(n){var i,a,s,u=n.direction,p=c()(e,(s={},(0,o.Z)(s,"".concat(e,"-sm"),"small"===g),(0,o.Z)(s,"".concat(e,"-lg"),"large"===g),(0,o.Z)(s,"".concat(e,"-spinning"),T),(0,o.Z)(s,"".concat(e,"-show-text"),!!x),(0,o.Z)(s,"".concat(e,"-rtl"),"rtl"===u),s),m),v=(0,l.Z)(N,["indicator","prefixCls"]),h=f.createElement("div",(0,r.Z)({},v,{style:b,className:p,"aria-live":"polite","aria-busy":T}),(i=t.indicator,a="".concat(e,"-dot"),null===i?null:(0,d.l$)(i)?(0,d.Tm)(i,{className:c()(i.props.className,a)}):(0,d.l$)(y)?(0,d.Tm)(y,{className:c()(y.props.className,a)}):f.createElement("span",{className:c()(a,"".concat(e,"-dot-spin"))},f.createElement("i",{className:"".concat(e,"-dot-item")}),f.createElement("i",{className:"".concat(e,"-dot-item")}),f.createElement("i",{className:"".concat(e,"-dot-item")}),f.createElement("i",{className:"".concat(e,"-dot-item")}))),x?f.createElement("div",{className:"".concat(e,"-text")},x):null);if(void 0!==O){var w=c()("".concat(e,"-container"),(0,o.Z)({},"".concat(e,"-blur"),T));return f.createElement("div",(0,r.Z)({},v,{className:c()("".concat(e,"-nested-loading"),E)}),T&&f.createElement("div",{key:"loading"},h),f.createElement("div",{className:w,key:"container"},O))}return h})},g=function(t){var e=t.prefixCls,n=(0,f.useContext(p.E_).getPrefixCls)("spin",e),o=(0,r.Z)((0,r.Z)({},t),{spinPrefixCls:n});return f.createElement(h,(0,r.Z)({},o))};g.setDefaultIndicator=function(t){y=t},e.Z=g},93645:function(t,e,n){"use strict";n.d(e,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function o(t){return t?r[t]:r.trunc}},59910:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(19013),o=n(13882);function i(t,e){return(0,o.Z)(2,arguments),(0,r.Z)(t).getTime()-(0,r.Z)(e).getTime()}},11699:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(59910),o=n(13882),i=n(93645);function a(t,e,n){(0,o.Z)(2,arguments);var a=(0,r.Z)(t,e)/1e3;return(0,i.u)(null==n?void 0:n.roundingMethod)(a)}},62705:function(t,e,n){var r=n(55639).Symbol;t.exports=r},44239:function(t,e,n){var r=n(62705),o=n(89607),i=n(2333),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},27561:function(t,e,n){var r=n(67990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},31957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},89607:function(t,e,n){var r=n(62705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[c]=n:delete t[c]),o}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},55639:function(t,e,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},67990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},23279:function(t,e,n){var r=n(13218),o=n(7771),i=n(14841),a=Math.max,c=Math.min;t.exports=function(t,e,n){var s,u,l,f,p,d,m=0,v=!1,y=!1,h=!0;if("function"!=typeof t)throw TypeError("Expected a function");function g(e){var n=s,r=u;return s=u=void 0,m=e,f=t.apply(r,n)}function x(t){var n=t-d,r=t-m;return void 0===d||n>=e||n<0||y&&r>=l}function E(){var t,n,r,i=o();if(x(i))return b(i);p=setTimeout(E,(t=i-d,n=i-m,r=e-t,y?c(r,l-n):r))}function b(t){return(p=void 0,h&&s)?g(t):(s=u=void 0,f)}function O(){var t,n=o(),r=x(n);if(s=arguments,u=this,d=n,r){if(void 0===p)return m=t=d,p=setTimeout(E,e),v?g(t):f;if(y)return clearTimeout(p),p=setTimeout(E,e),g(d)}return void 0===p&&(p=setTimeout(E,e)),f}return e=i(e)||0,r(n)&&(v=!!n.leading,l=(y="maxWait"in n)?a(i(n.maxWait)||0,e):l,h="trailing"in n?!!n.trailing:h),O.cancel=function(){void 0!==p&&clearTimeout(p),m=0,s=d=u=p=void 0},O.flush=function(){return void 0===p?f:b(o())},O}},13218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,e,n){var r=n(44239),o=n(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},7771:function(t,e,n){var r=n(55639);t.exports=function(){return r.Date.now()}},14841:function(t,e,n){var r=n(27561),o=n(13218),i=n(33448),a=0/0,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=s.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):c.test(t)?a:+t}},10203:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/actions",function(){return n(86419)}])},86419:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(85893),o=n(67294),i=n(85818),a=n(54398),c=n(58091),s=n(64777),u=n(70241),l=n(6960);let{Title:f,Paragraph:p}=i.Z;function d(){let[t,e]=(0,o.useState)([]),[n,i]=(0,o.useState)(0),[l,d]=(0,o.useState)(0),m=async()=>{try{let t="".concat(s.op,"?offset=").concat(50*l,"&limit=").concat(50),n=await (0,s.rQ)(t,{auth:!0}),{results:r,total:o}=n;i(o),(0,u.Qr)(r)?e([]):e(r)}catch(t){console.log("==== error",t)}};(0,o.useEffect)(()=>{m()},[l]);let v=[{title:"Action",dataIndex:"type",key:"type",width:50,render:(t,e)=>{let n,o;switch(e.type){case"FEDIVERSE_ENGAGEMENT_REPOST":n="/img/repost.svg",o="Share";break;case"FEDIVERSE_ENGAGEMENT_LIKE":n="/img/like.svg",o="Like";break;case"FEDIVERSE_ENGAGEMENT_FOLLOW":n="/img/follow.svg",o="Follow";break;default:n=""}return(0,r.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,r.jsx)("img",{src:n,width:"70%",alt:o,title:o}),(0,r.jsx)("div",{style:{fontSize:"0.7rem"},children:o})]})}},{title:"From",dataIndex:"actorIRI",key:"from",render:(t,e)=>(0,r.jsx)("a",{href:e.actorIRI,children:e.actorIRI})},{title:"When",dataIndex:"timestamp",key:"timestamp",render:(t,e)=>{let n=new Date(e.timestamp);return(0,c.Z)(n,"P pp")}}];return(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{level:3,children:"Fediverse Actions"}),(0,r.jsx)(p,{children:"Below is a list of actions that were taken by others in response to your posts as well as people who requested to follow you."}),(0,r.jsx)(a.Z,{dataSource:t,columns:v,size:"small",rowKey:t=>t.iri,pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:n},onChange:t=>{let e=t.current;d(e)}})]})}d.getLayout=function(t){return(0,r.jsx)(l.l,{page:t})}},9008:function(t,e,n){t.exports=n(83121)},11163:function(t,e,n){t.exports=n(80880)},92703:function(t,e,n){"use strict";var r=n(50414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(t,e,n){t.exports=n(92703)()},50414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(t){t.O(0,[173,164,2138,31,4931,5402,2231,492,5818,7524,9915,6386,3698,3013,4398,8091,710,6960,9774,2888,179],function(){return t(t.s=10203)}),_N_E=t.O()}]);
//# sourceMappingURL=actions-abf3c0f257f6f6d3.js.map
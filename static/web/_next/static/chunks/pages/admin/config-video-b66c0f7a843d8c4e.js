(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6801,9534,1382],{81643:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=function(e){return e?"function"==typeof e?e():e:null}},15746:function(e,t,n){"use strict";var a=n(21584);t.Z=a.Z},99134:function(e,t,n){"use strict";var a=(0,n(67294).createContext)({});t.Z=a},21584:function(e,t,n){"use strict";var a=n(4942),r=n(87462),o=n(71002),i=n(94184),s=n.n(i),l=n(67294),c=n(53124),d=n(99134),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},m=["xs","sm","md","lg","xl","xxl"],f=l.forwardRef(function(e,t){var n,i=l.useContext(c.E_),f=i.getPrefixCls,p=i.direction,h=l.useContext(d.Z),v=h.gutter,x=h.wrap,g=h.supportFlexGap,y=e.prefixCls,b=e.span,j=e.order,Z=e.offset,N=e.push,w=e.pull,C=e.className,k=e.children,P=e.flex,E=e.style,O=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),T=f("col",y),S={};m.forEach(function(t){var n,i={},s=e[t];"number"==typeof s?i.span=s:"object"===(0,o.Z)(s)&&(i=s||{}),delete O[t],S=(0,r.Z)((0,r.Z)({},S),(n={},(0,a.Z)(n,"".concat(T,"-").concat(t,"-").concat(i.span),void 0!==i.span),(0,a.Z)(n,"".concat(T,"-").concat(t,"-order-").concat(i.order),i.order||0===i.order),(0,a.Z)(n,"".concat(T,"-").concat(t,"-offset-").concat(i.offset),i.offset||0===i.offset),(0,a.Z)(n,"".concat(T,"-").concat(t,"-push-").concat(i.push),i.push||0===i.push),(0,a.Z)(n,"".concat(T,"-").concat(t,"-pull-").concat(i.pull),i.pull||0===i.pull),(0,a.Z)(n,"".concat(T,"-rtl"),"rtl"===p),n))});var _=s()(T,(n={},(0,a.Z)(n,"".concat(T,"-").concat(b),void 0!==b),(0,a.Z)(n,"".concat(T,"-order-").concat(j),j),(0,a.Z)(n,"".concat(T,"-offset-").concat(Z),Z),(0,a.Z)(n,"".concat(T,"-push-").concat(N),N),(0,a.Z)(n,"".concat(T,"-pull-").concat(w),w),n),C,S),I={};if(v&&v[0]>0){var V=v[0]/2;I.paddingLeft=V,I.paddingRight=V}if(v&&v[1]>0&&!g){var L=v[1]/2;I.paddingTop=L,I.paddingBottom=L}return P&&(I.flex="number"==typeof P?"".concat(P," ").concat(P," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(P)?"0 0 ".concat(P):P,!1!==x||I.minWidth||(I.minWidth=0)),l.createElement("div",(0,r.Z)({},O,{style:(0,r.Z)((0,r.Z)({},I),E),className:_,ref:t}),k)});t.Z=f},92820:function(e,t,n){"use strict";var a=n(87462),r=n(4942),o=n(71002),i=n(97685),s=n(94184),l=n.n(s),c=n(67294),d=n(53124),u=n(98082),m=n(24308),f=n(93355),p=n(99134),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function v(e,t){var n=c.useState("string"==typeof e?e:""),a=(0,i.Z)(n,2),r=a[0],s=a[1],l=function(){if("object"===(0,o.Z)(e))for(var n=0;n<m.c4.length;n++){var a=m.c4[n];if(t[a]){var r=e[a];if(void 0!==r){s(r);return}}}};return c.useEffect(function(){l()},[JSON.stringify(e),t]),r}(0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between","space-evenly");var x=c.forwardRef(function(e,t){var n,s,f=e.prefixCls,x=e.justify,g=e.align,y=e.className,b=e.style,j=e.children,Z=e.gutter,N=void 0===Z?0:Z,w=e.wrap,C=h(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),k=c.useContext(d.E_),P=k.getPrefixCls,E=k.direction,O=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,i.Z)(O,2),S=T[0],_=T[1],I=c.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),V=(0,i.Z)(I,2),L=V[0],R=V[1],U=v(g,L),A=v(x,L),D=(0,u.Z)(),B=c.useRef(N);c.useEffect(function(){var e=m.ZP.subscribe(function(e){R(e);var t=B.current||0;(!Array.isArray(t)&&"object"===(0,o.Z)(t)||Array.isArray(t)&&("object"===(0,o.Z)(t[0])||"object"===(0,o.Z)(t[1])))&&_(e)});return function(){return m.ZP.unsubscribe(e)}},[]);var F=P("row",f),z=(n=[void 0,void 0],(Array.isArray(N)?N:[N,void 0]).forEach(function(e,t){if("object"===(0,o.Z)(e))for(var a=0;a<m.c4.length;a++){var r=m.c4[a];if(S[r]&&void 0!==e[r]){n[t]=e[r];break}}else n[t]=e}),n),M=l()(F,(s={},(0,r.Z)(s,"".concat(F,"-no-wrap"),!1===w),(0,r.Z)(s,"".concat(F,"-").concat(A),A),(0,r.Z)(s,"".concat(F,"-").concat(U),U),(0,r.Z)(s,"".concat(F,"-rtl"),"rtl"===E),s),y),G={},H=null!=z[0]&&z[0]>0?-(z[0]/2):void 0,$=null!=z[1]&&z[1]>0?-(z[1]/2):void 0;if(H&&(G.marginLeft=H,G.marginRight=H),D){var W=(0,i.Z)(z,2);G.rowGap=W[1]}else $&&(G.marginTop=$,G.marginBottom=$);var q=(0,i.Z)(z,2),X=q[0],Y=q[1],J=c.useMemo(function(){return{gutter:[X,Y],wrap:w,supportFlexGap:D}},[X,Y,w,D]);return c.createElement(p.Z.Provider,{value:J},c.createElement("div",(0,a.Z)({},C,{className:M,style:(0,a.Z)((0,a.Z)({},G),b),ref:t}),j))});t.Z=x},97183:function(e,t,n){"use strict";var a=n(2897),r=n(7293),o=a.ZP;o.Header=a.h4,o.Footer=a.$_,o.Content=a.VY,o.Sider=r.Z,t.Z=o},65360:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(87462),r=n(97685),o=n(21640),i=n(94184),s=n.n(i),l=n(21770),c=n(15105),d=n(67294),u=n(53124),m=n(55241),f=n(96159),p=n(71577),h=n(6134),v=n(86743),x=n(23715),g=n(7734),y=n(81643),b=function(e){var t=e.prefixCls,n=e.okButtonProps,r=e.cancelButtonProps,o=e.title,i=e.cancelText,s=e.okText,l=e.okType,c=e.icon,m=e.showCancel,f=void 0===m||m,b=e.close,j=e.onConfirm,Z=e.onCancel,N=d.useContext(u.E_).getPrefixCls;return d.createElement(x.Z,{componentName:"Popconfirm",defaultLocale:g.Z.Popconfirm},function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,y.Z)(o))),d.createElement("div",{className:"".concat(t,"-buttons")},f&&d.createElement(p.Z,(0,a.Z)({onClick:Z,size:"small"},r),null!=i?i:e.cancelText),d.createElement(v.Z,{buttonProps:(0,a.Z)((0,a.Z)({size:"small"},(0,h.n)(l)),n),actionFn:j,close:b,prefixCls:N("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!=s?s:e.okText)))})},j=void 0,Z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},N=d.forwardRef(function(e,t){var n=d.useContext(u.E_).getPrefixCls,i=(0,l.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),p=(0,r.Z)(i,2),h=p[0],v=p[1],x=function(t,n){var a,r;v(t,!0),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n),null===(r=e.onOpenChange)||void 0===r||r.call(e,t,n)},g=function(e){e.keyCode===c.Z.ESC&&h&&x(!1,e)},y=e.prefixCls,N=e.placement,w=e.trigger,C=e.okType,k=e.icon,P=void 0===k?d.createElement(o.Z,null):k,E=e.children,O=e.overlayClassName,T=Z(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]),S=n("popover",y),_=n("popconfirm",y),I=s()(_,O);return d.createElement(m.Z,(0,a.Z)({},T,{trigger:void 0===w?"click":w,prefixCls:S,placement:void 0===N?"top":N,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||x(t)},open:h,ref:t,overlayClassName:I,_overlay:d.createElement(b,(0,a.Z)({okType:void 0===C?"primary":C,icon:P},e,{prefixCls:S,close:function(e){x(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(j,t)},onCancel:function(t){var n;x(!1,t),null===(n=e.onCancel)||void 0===n||n.call(j,t)}}))}),(0,f.Tm)(E,{onKeyDown:function(e){var t,n;d.isValidElement(E)&&(null===(n=null==E?void 0:(t=E.props).onKeyDown)||void 0===n||n.call(t,e)),g(e)}}))})},55241:function(e,t,n){"use strict";var a=n(87462),r=n(67294),o=n(53124),i=n(94199),s=n(81643),l=n(33603),c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},d=function(e){var t=e.title,n=e.content,a=e.prefixCls;return t||n?r.createElement(r.Fragment,null,t&&r.createElement("div",{className:"".concat(a,"-title")},(0,s.Z)(t)),r.createElement("div",{className:"".concat(a,"-inner-content")},(0,s.Z)(n))):null},u=r.forwardRef(function(e,t){var n=e.prefixCls,s=e.title,u=e.content,m=e._overlay,f=e.placement,p=e.trigger,h=e.mouseEnterDelay,v=e.mouseLeaveDelay,x=e.overlayStyle,g=c(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),y=r.useContext(o.E_).getPrefixCls,b=y("popover",n),j=y();return r.createElement(i.Z,(0,a.Z)({placement:void 0===f?"top":f,trigger:void 0===p?"hover":p,mouseEnterDelay:void 0===h?.1:h,mouseLeaveDelay:void 0===v?.1:v,overlayStyle:void 0===x?{}:x},g,{prefixCls:b,ref:t,overlay:m||r.createElement(d,{prefixCls:b,title:s,content:u}),transitionName:(0,l.mL)(j,"zoom-big",g.transitionName)}))});t.Z=u},71230:function(e,t,n){"use strict";var a=n(92820);t.Z=a.Z},11382:function(e,t,n){"use strict";var a=n(87462),r=n(4942),o=n(97685),i=n(94184),s=n.n(i),l=n(23279),c=n.n(l),d=n(98423),u=n(67294),m=n(53124),f=n(96159),p=n(93355),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};(0,p.b)("small","default","large");var v=null,x=function(e){var t=e.spinPrefixCls,n=e.spinning,i=void 0===n||n,l=e.delay,p=e.className,x=e.size,g=void 0===x?"default":x,y=e.tip,b=e.wrapperClassName,j=e.style,Z=e.children,N=h(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),w=u.useState(function(){return i&&(!i||!l||!!isNaN(Number(l)))}),C=(0,o.Z)(w,2),k=C[0],P=C[1];return u.useEffect(function(){var e=c()(function(){P(i)},l);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[l,i]),u.createElement(m.C,null,function(n){var o,i,l,c=n.direction,m=s()(t,(l={},(0,r.Z)(l,"".concat(t,"-sm"),"small"===g),(0,r.Z)(l,"".concat(t,"-lg"),"large"===g),(0,r.Z)(l,"".concat(t,"-spinning"),k),(0,r.Z)(l,"".concat(t,"-show-text"),!!y),(0,r.Z)(l,"".concat(t,"-rtl"),"rtl"===c),l),p),h=(0,d.Z)(N,["indicator","prefixCls"]),x=u.createElement("div",(0,a.Z)({},h,{style:j,className:m,"aria-live":"polite","aria-busy":k}),(o=e.indicator,i="".concat(t,"-dot"),null===o?null:(0,f.l$)(o)?(0,f.Tm)(o,{className:s()(o.props.className,i)}):(0,f.l$)(v)?(0,f.Tm)(v,{className:s()(v.props.className,i)}):u.createElement("span",{className:s()(i,"".concat(t,"-dot-spin"))},u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}))),y?u.createElement("div",{className:"".concat(t,"-text")},y):null);if(void 0!==Z){var w=s()("".concat(t,"-container"),(0,r.Z)({},"".concat(t,"-blur"),k));return u.createElement("div",(0,a.Z)({},h,{className:s()("".concat(t,"-nested-loading"),b)}),k&&u.createElement("div",{key:"loading"},x),u.createElement("div",{className:w,key:"container"},Z))}return x})},g=function(e){var t=e.prefixCls,n=(0,u.useContext(m.E_).getPrefixCls)("spin",t),r=(0,a.Z)((0,a.Z)({},e),{spinPrefixCls:n});return u.createElement(x,(0,a.Z)({},r))};g.setDefaultIndicator=function(e){v=e},t.Z=g},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function r(e){return e?a[e]:a.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(19013),r=n(13882);function o(e,t){return(0,r.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(59910),r=n(13882),o=n(93645);function i(e,t,n){(0,r.Z)(2,arguments);var i=(0,a.Z)(e,t)/1e3;return(0,o.u)(null==n?void 0:n.roundingMethod)(i)}},62705:function(e,t,n){var a=n(55639).Symbol;e.exports=a},44239:function(e,t,n){var a=n(62705),r=n(89607),o=n(2333),i=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?r(e):o(e)}},27561:function(e,t,n){var a=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},31957:function(e,t,n){var a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=a},89607:function(e,t,n){var a=n(62705),r=Object.prototype,o=r.hasOwnProperty,i=r.toString,s=a?a.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),n=e[s];try{e[s]=void 0;var a=!0}catch(e){}var r=i.call(e);return a&&(t?e[s]=n:delete e[s]),r}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var a=n(31957),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();e.exports=o},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var a=n(13218),r=n(7771),o=n(14841),i=Math.max,s=Math.min;e.exports=function(e,t,n){var l,c,d,u,m,f,p=0,h=!1,v=!1,x=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=l,a=c;return l=c=void 0,p=t,u=e.apply(a,n)}function y(e){var n=e-f,a=e-p;return void 0===f||n>=t||n<0||v&&a>=d}function b(){var e,n,a,o=r();if(y(o))return j(o);m=setTimeout(b,(e=o-f,n=o-p,a=t-e,v?s(a,d-n):a))}function j(e){return(m=void 0,x&&l)?g(e):(l=c=void 0,u)}function Z(){var e,n=r(),a=y(n);if(l=arguments,c=this,f=n,a){if(void 0===m)return p=e=f,m=setTimeout(b,t),h?g(e):u;if(v)return clearTimeout(m),m=setTimeout(b,t),g(f)}return void 0===m&&(m=setTimeout(b,t)),u}return t=o(t)||0,a(n)&&(h=!!n.leading,d=(v="maxWait"in n)?i(o(n.maxWait)||0,t):d,x="trailing"in n?!!n.trailing:x),Z.cancel=function(){void 0!==m&&clearTimeout(m),p=0,l=f=c=m=void 0},Z.flush=function(){return void 0===m?u:j(r())},Z}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var a=n(44239),r=n(37005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},7771:function(e,t,n){var a=n(55639);e.exports=function(){return a.Date.now()}},14841:function(e,t,n){var a=n(27561),r=n(13218),o=n(33448),i=0/0,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=l.test(e);return n||c.test(e)?d(e.slice(2),n?2:8):s.test(e)?i:+e}},6440:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-video",function(){return n(34211)}])},6979:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(85893),r=n(67294),o=n(94594),i=n(41983),s=n(73615),l=n(90745),c=n(99519);let d=e=>{let{apiPath:t,checked:n,reversed:d=!1,configPath:u="",disabled:m=!1,fieldName:f,label:p,tip:h,useSubmit:v,onChange:x}=e,[g,y]=(0,r.useState)(null),b=null,j=(0,r.useContext)(c.aC),{setFieldInConfigState:Z}=j||{},N=()=>{y(null),clearTimeout(b),b=null},w=async e=>{if(v){y((0,i.kg)(i.Jk));let n=d?!e:e;await (0,l.Si)({apiPath:t,data:{value:n},onSuccess:()=>{Z({fieldName:f,value:n,path:u}),y((0,i.kg)(i.zv))},onError:e=>{y((0,i.kg)(i.Un,"There was an error: ".concat(e)))}}),b=setTimeout(N,l.sI)}x&&x(e)},C=null!==g&&g.type===i.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:p})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(o.Z,{className:"switch field-".concat(f),loading:C,onChange:w,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:m}),(0,a.jsx)(s.E,{status:g})]}),(0,a.jsx)("p",{className:"field-tip",children:h})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},34211:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var a=n(85893),r=n(54907),o=n(85818),i=n(71230),s=n(15746),l=n(67294),c=n(34041),d=n(65360),u=n(82661),m=n(90745),f=n(41983),p=n(99519),h=n(73615);let v=()=>{let e=(0,l.useContext)(p.aC),{serverConfig:t,setFieldInConfigState:n}=e||{},{videoCodec:r,supportedCodecs:i}=t||{},{Title:s}=o.Z,{Option:v}=c.Z,[x,g]=(0,l.useState)(null),{setMessage:y}=(0,l.useContext)(u.k),[b,j]=(0,l.useState)(r),[Z,N]=(0,l.useState)(r),[w,C]=l.useState(!1);(0,l.useEffect)(()=>{j(r)},[r]);let k=()=>{g(null),clearTimeout(null)};async function P(){j(Z),N(""),C(!1),await (0,m.Si)({apiPath:m.CQ,data:{value:Z},onSuccess:()=>{n({fieldName:"videoCodec",value:Z,path:"videoSettings"}),g((0,f.kg)(f.zv,"Video codec updated.")),setTimeout(k,m.sI),e.online&&y("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:e=>{g((0,f.kg)(f.Un,e)),setTimeout(k,m.sI)}})}let E=i.map(e=>{let t=e;return"libx264"===t?t="Default (libx264)":"h264_nvenc"===t?t="NVIDIA GPU acceleration":"h264_vaapi"===t?t="VA-API hardware encoding":"h264_qsv"===t?t="Intel QuickSync":"h264_v4l2m2m"===t?t="Video4Linux hardware encoding":"h264_omx"===t?t="OpenMax (omx) for Raspberry Pi":"h264_videotoolbox"===t&&(t="Apple VideoToolbox (hardware)"),(0,a.jsx)(v,{value:e,children:t},e)}),O="";return"libx264"===b?O="libx264 is the default codec and generally the only working choice for shared VPS environments. This is likely what you should be using unless you know you have set up other options.":"h264_nvenc"===b?O="You can use your NVIDIA GPU for encoding if you have a modern NVIDIA card with encoding cores.":"h264_vaapi"===b?O="VA-API may be supported by your NVIDIA proprietary drivers, Mesa open-source drivers for AMD or Intel graphics.":"h264_qsv"===b?O="Quick Sync Video is Intel's brand for its dedicated video encoding and decoding hardware. It may be an option if you have a modern Intel CPU with integrated graphics.":"h264_v4l2m2m"===b?O="Video4Linux is an interface to multiple different hardware encoding platforms such as Intel and AMD.":"h264_omx"===b?O="OpenMax is a codec most often used with a Raspberry Pi.":"h264_videotoolbox"===b&&(O="Apple VideoToolbox is a low-level framework that provides direct access to hardware encoders and decoders."),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{level:3,className:"section-title",children:"Video Codec"}),(0,a.jsxs)("div",{className:"description",children:["If you have access to specific hardware with the drivers and software installed for them, you may be able to improve your video encoding performance.",(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/codecs?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation about this setting before changing it or you may make your stream unplayable."})})]}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(d.Z,{title:"Are you sure you want to change your video codec to ".concat(Z," and understand what this means?"),open:w,placement:"leftBottom",onConfirm:P,onCancel:()=>C(!1),okText:"Yes",cancelText:"No",children:(0,a.jsx)(c.Z,{defaultValue:b,value:b,style:{width:"100%"},onChange:function(e){N(e),C(!0)},children:E})}),(0,a.jsx)(h.E,{status:x}),(0,a.jsx)("p",{id:"selected-codec-note",className:"selected-value-note",children:O})]})]})};var x=n(22918);let{Title:g}=o.Z,y={0:"Lowest",1:"",2:"",3:"",4:"Highest"},b={0:"Lowest latency, lowest error tolerance (Not recommended, may not work for all content/configurations.)",1:"Low latency, low error tolerance",2:"Medium latency, medium error tolerance (Default)",3:"High latency, high error tolerance",4:"Highest latency, highest error tolerance"},j=()=>{let[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(null),o=(0,l.useContext)(p.aC),{setMessage:i}=(0,l.useContext)(u.k),{serverConfig:s,setFieldInConfigState:c}=o||{},{videoSettings:d}=s||{};if(!d)return null;(0,l.useEffect)(()=>{r(d.latencyLevel)},[d]);let v=()=>{t(null),clearTimeout(null)},j=async e=>{t((0,f.kg)(f.Jk)),await (0,m.Si)({apiPath:m.sv,data:{value:e},onSuccess:()=>{c({fieldName:"latencyLevel",value:e,path:"videoSettings"}),t((0,f.kg)(f.zv,"Latency buffer level updated.")),setTimeout(v,m.sI),o.online&&i("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:e=>{t((0,f.kg)(f.Un,e)),setTimeout(v,m.sI)}})},Z=e=>{j(e)};return(0,a.jsxs)("div",{className:"config-video-latency-container",children:[(0,a.jsx)(g,{level:3,className:"section-title",children:"Latency Buffer"}),(0,a.jsx)("p",{className:"description",children:"While it's natural to want to keep your latency as low as possible, you may experience reduced error tolerance and stability the lower you go. The lowest setting is not recommended."}),(0,a.jsxs)("p",{className:"description",children:["For interactive live streams you may want to experiment with a lower latency, for non-interactive broadcasts you may want to increase it."," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/encoding#latency-buffer?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read to learn more."})]}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(x.Z,{tipFormatter:e=>b[e],onChange:Z,min:0,max:4,marks:y,defaultValue:n,value:n}),(0,a.jsx)("p",{className:"selected-value-note",children:b[n]}),(0,a.jsx)(h.E,{status:e})]})]})};var Z=n(71577),N=n(14670),w=n(54398),C=n(85402),k=n(5152),P=n.n(k),E=n(94184),O=n.n(E),T=n(79139),S=n(6979);let{Panel:_}=r.Z,I=P()(()=>Promise.all([n.e(2074),n.e(2461)]).then(n.t.bind(n,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),V=e=>{let{dataState:t=m.gX,onUpdateField:n}=e,l=t.videoPassthrough,c=e=>{n({fieldName:"framerate",value:e})},u=e=>{n({fieldName:"videoBitrate",value:e})},f=e=>{n({fieldName:"cpuUsageLevel",value:e})},p=e=>{let t=Number(e.value);isNaN(t)||n({fieldName:"scaledWidth",value:t||0})},h=e=>{let t=Number(e.value);isNaN(t)||n({fieldName:"scaledHeight",value:t||0})},v=()=>{n({fieldName:"videoPassthrough",value:!0})},g=e=>{l&&n({fieldName:"videoPassthrough",value:e})},y=e=>{n({fieldName:"name",value:e.value})},b=O()({"config-variant-form":!0,"video-passthrough-enabled":l});return(0,a.jsxs)("div",{className:b,children:[(0,a.jsx)("div",{className:"video-varient-alert",children:(0,a.jsx)(N.Z,{type:"info",action:(0,a.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("div",{className:"video-varient-alert-button-container",children:(0,a.jsx)(Z.Z,{size:"small",type:"text",icon:(0,a.jsx)(I,{}),children:"Read more about how each of these settings can impact the performance of your server."})})})})}),l&&(0,a.jsxs)("p",{className:"passthrough-warning",children:["NOTE: Video Passthrough for this output stream variant is ",(0,a.jsx)("em",{children:"enabled"}),", disabling the below video encoding settings."]}),(0,a.jsxs)(i.Z,{gutter:16,children:[(0,a.jsx)(s.Z,{xs:24,lg:{span:24,pull:3},className:"video-text-field-container",children:(0,a.jsx)(T.nv,{maxLength:"10",...m.SS,value:t.name,onChange:y})}),(0,a.jsx)(s.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module cpu-usage-container",children:[(0,a.jsx)(o.Z.Title,{level:3,children:"CPU or GPU Utilization"}),(0,a.jsx)("p",{className:"description",children:"Reduce to improve server performance, or increase it to improve video quality."}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(x.Z,{tipFormatter:e=>m.I$[e],onChange:f,min:1,max:Object.keys(m.t$).length,marks:m.t$,defaultValue:t.cpuUsageLevel,value:t.cpuUsageLevel,disabled:t.videoPassthrough}),(0,a.jsx)("p",{className:"selected-value-note",children:l?"CPU usage selection is disabled when Video Passthrough is enabled.":m.I$[t.cpuUsageLevel]||""})]}),(0,a.jsxs)("p",{className:"read-more-subtext",children:["This could mean GPU or CPU usage depending on your server environment.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#cpu-usage",target:"_blank",rel:"noopener noreferrer",children:"Read more about hardware performance."})]})]})}),(0,a.jsx)(s.Z,{sm:24,md:11,offset:1,children:(0,a.jsxs)("div",{className:"form-module bitrate-container ".concat(t.videoPassthrough?"disabled":""),children:[(0,a.jsx)(o.Z.Title,{level:3,children:"Video Bitrate"}),(0,a.jsx)("p",{className:"description",children:m.yC.tip}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(x.Z,{tipFormatter:e=>"".concat(e," ").concat(m.yC.unit),disabled:t.videoPassthrough,defaultValue:t.videoBitrate,value:t.videoBitrate,onChange:u,step:m.yC.incrementBy,min:m.yC.min,max:m.yC.max,marks:m.HM}),(0,a.jsx)("p",{className:"selected-value-note",children:(()=>{if(l)return"Bitrate selection is disabled when Video Passthrough is enabled.";let e="".concat(t.videoBitrate).concat(m.yC.unit);return t.videoBitrate<2e3?"".concat(e," - Good for low bandwidth environments."):t.videoBitrate<3500?"".concat(e," - Good for most bandwidth environments."):"".concat(e," - Good for high bandwidth environments.")})()})]}),(0,a.jsx)("p",{className:"read-more-subtext",children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about bitrates."})})]})})]}),(0,a.jsx)(r.Z,{className:"advanced-settings",children:(0,a.jsxs)(_,{header:"Advanced Settings",children:[(0,a.jsxs)(i.Z,{gutter:16,children:[(0,a.jsx)(s.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module resolution-module",children:[(0,a.jsx)(o.Z.Title,{level:3,children:"Resolution"}),(0,a.jsxs)("p",{className:"description",children:["Resizing your content will take additional resources on your server. If you wish to optionally resize your content for this stream output then you should either set the width ",(0,a.jsx)("strong",{children:"or"})," the height to keep your aspect ratio. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about resolutions."})]}),(0,a.jsx)("br",{}),(0,a.jsx)(T.nv,{type:"number",...m.dL.scaledWidth,value:t.scaledWidth,onChange:p,disabled:t.videoPassthrough}),(0,a.jsx)(T.nv,{type:"number",...m.dL.scaledHeight,value:t.scaledHeight,onChange:h,disabled:t.videoPassthrough})]})}),(0,a.jsx)(s.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module video-passthrough-module",children:[(0,a.jsx)(o.Z.Title,{level:3,children:"Video Passthrough"}),(0,a.jsxs)("div",{className:"description",children:[(0,a.jsxs)("p",{children:["Enabling video passthrough may allow for less hardware utilization, but may also make your stream ",(0,a.jsx)("strong",{children:"unplayable"}),"."]}),(0,a.jsx)("p",{children:"All other settings for this stream output will be disabled if passthrough is used."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#video-passthrough",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation before enabling, as it impacts your stream."})})]}),(0,a.jsx)("div",{className:"advanced-switch-container",children:(0,a.jsxs)(d.Z,{disabled:!0===t.videoPassthrough,title:"Did you read the documentation about video passthrough and understand the risks involved with enabling it?",icon:(0,a.jsx)(I,{}),onConfirm:v,okText:"Yes",cancelText:"No",getPopupContainer:e=>e,placement:"topLeft",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsxs)("div",{className:"advanced-description-switch-container",children:[(0,a.jsx)("div",{className:"advanced-description-wrapper",children:(0,a.jsx)("p",{children:"Use Video Passthrough?"})}),(0,a.jsx)(S.Z,{label:"",fieldName:"video-passthrough",checked:t.videoPassthrough,onChange:g})]})}),(0,a.jsxs)("p",{children:["*",m.dL.videoPassthrough.tip]})]})})]})})]}),(0,a.jsxs)("div",{className:"form-module frame-rate-module",children:[(0,a.jsx)(o.Z.Title,{level:3,children:"Frame rate"}),(0,a.jsx)("p",{className:"description",children:m.nm.tip}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(x.Z,{tipFormatter:e=>"".concat(e," ").concat(m.nm.unit),defaultValue:t.framerate,value:t.framerate,onChange:c,step:m.nm.incrementBy,min:m.nm.min,max:m.nm.max,marks:m.Xq,disabled:t.videoPassthrough}),(0,a.jsx)("p",{className:"selected-value-note",children:l?"Framerate selection is disabled when Video Passthrough is enabled.":m.x8[t.framerate]||""})]}),(0,a.jsx)("p",{className:"read-more-subtext",children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#framerate",target:"_blank",rel:"noopener noreferrer",children:"Read more about framerates."})})]})]},"1")})]})},{Title:L}=o.Z,R=P()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),U=()=>{let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1),[o,i]=(0,l.useState)(0),{setMessage:s}=(0,l.useContext)(u.k),[c,d]=(0,l.useState)(m.gX),[v,x]=(0,l.useState)(null),g=(0,l.useContext)(p.aC),{serverConfig:y,setFieldInConfigState:b}=g||{},{videoSettings:j}=y||{},{videoQualityVariants:k}=j||{};if(!j)return null;let P=()=>{x(null),clearTimeout(null)},E=()=>{t(!1),i(-1),d(m.gX)},O=async e=>{x((0,f.kg)(f.Jk)),await (0,m.Si)({apiPath:m.vv,data:{value:e},onSuccess:()=>{b({fieldName:"videoQualityVariants",value:e,path:"videoSettings"}),r(!1),E(),x((0,f.kg)(f.zv,"Variants updated")),setTimeout(P,m.sI),g.online&&s("Updating your video configuration will take effect the next time you begin a new stream.")},onError:e=>{x((0,f.kg)(f.Un,e)),r(!1),setTimeout(P,m.sI)}})},T=()=>{r(!0);let e=[...k];-1===o?e.push(c):e.splice(o,1,c),O(e)},S=e=>{let t=[...k];t.splice(e,1),O(t)},_=e=>{let{fieldName:t,value:n}=e;d({...c,[t]:n})},I=k.map((e,t)=>({key:t+1,...e}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L,{level:3,className:"section-title",children:"Stream output"}),(()=>{if(1!==k.length)return!1;let[e]=k;return m.i3.VIDEO_HEIGHT<=e.scaledHeight||m.i3.VIDEO_BITRATE<=e.videoBitrate})()&&(0,a.jsx)(N.Z,{message:m.i3.HELP_TEXT,type:"info",closable:!0}),(0,a.jsx)(h.E,{status:v}),(0,a.jsx)(w.Z,{className:"variants-table",pagination:!1,size:"small",columns:[{title:"Name",dataIndex:"name",render:e=>e||"No name"},{title:"Video bitrate",dataIndex:"videoBitrate",key:"videoBitrate",render:(e,t)=>!e||t.videoPassthrough?"Same as source":"".concat(e," kbps")},{title:"CPU Usage",dataIndex:"cpuUsageLevel",key:"cpuUsageLevel",render:(e,t)=>!e||t.videoPassthrough?"n/a":m.I$[e].split(" ")[0]},{title:"",dataIndex:"",key:"edit",render:e=>{let{key:n}=e,r=n-1;return(0,a.jsxs)("span",{className:"actions",children:[(0,a.jsx)(Z.Z,{size:"small",onClick:()=>{i(r),d(k[r]),t(!0)},children:"Edit"}),(0,a.jsx)(Z.Z,{className:"delete-button",icon:(0,a.jsx)(R,{}),size:"small",disabled:1===k.length,onClick:()=>{S(r)}})]})}}],dataSource:I}),(0,a.jsxs)(C.Z,{title:"Edit Video Variant Details",open:e,onOk:T,onCancel:E,confirmLoading:n,width:900,children:[(0,a.jsx)(V,{dataState:{...c},onUpdateField:_}),(0,a.jsx)(h.E,{status:v})]}),(0,a.jsx)("br",{}),(0,a.jsx)(Z.Z,{type:"primary",onClick:()=>{i(-1),d(m.gX),t(!0)},children:"Add a new variant"})]})};var A=n(6960);let{Panel:D}=r.Z,{Title:B}=o.Z;function F(){return(0,a.jsxs)("div",{className:"config-video-variants",children:[(0,a.jsx)(B,{children:"Video configuration"}),(0,a.jsxs)("p",{className:"description",children:["Before changing your video configuration"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:"visit the video documentation"})," ","to learn how it impacts your stream performance. The general rule is to start conservatively by having one middle quality stream output variant and experiment with adding more of varied qualities."]}),(0,a.jsxs)(i.Z,{gutter:[16,16],children:[(0,a.jsx)(s.Z,{md:24,lg:12,children:(0,a.jsx)("div",{className:"form-module variants-table-module",children:(0,a.jsx)(U,{})})}),(0,a.jsxs)(s.Z,{md:24,lg:12,children:[(0,a.jsx)("div",{className:"form-module latency-module",children:(0,a.jsx)(j,{})}),(0,a.jsx)(r.Z,{className:"advanced-settings codec-module",children:(0,a.jsx)(D,{header:"Advanced Settings",children:(0,a.jsx)("div",{className:"form-module variants-table-module",children:(0,a.jsx)(v,{})})},"1")})]})]})]})}F.getLayout=function(e){return(0,a.jsx)(A.l,{page:e})}},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)},92703:function(e,t,n){"use strict";var a=n(50414);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==a){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[173,164,2138,31,4931,5402,2231,492,5818,7524,9915,6386,3698,3013,4398,9816,710,6960,9774,2888,179],function(){return e(e.s=6440)}),_N_E=e.O()}]);
//# sourceMappingURL=config-video-b66c0f7a843d8c4e.js.map
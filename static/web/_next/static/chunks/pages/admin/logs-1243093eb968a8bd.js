(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1774],{97183:function(e,t,n){"use strict";var r=n(2897),o=n(7293),i=r.ZP;i.Header=r.h4,i.Footer=r.$_,i.Content=r.VY,i.Sider=o.Z,t.Z=i},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function o(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(19013),o=n(13882);function i(e,t){return(0,o.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(59910),o=n(13882),i=n(93645);function u(e,t,n){(0,o.Z)(2,arguments);var u=(0,r.Z)(e,t)/1e3;return(0,i.u)(null==n?void 0:n.roundingMethod)(u)}},23426:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/logs",function(){return n(87905)}])},82536:function(e,t,n){"use strict";n.d(t,{o:function(){return d}});var r=n(85893);n(67294);var o=n(85818),i=n(20550),u=n(54398),a=n(53731),c=n(58091);let{Title:s}=o.Z;function l(e,t){let n="black";return"warning"===t.level?n="orange":"error"===t.level&&(n="red"),(0,r.jsx)(i.Z,{color:n,children:e})}function f(e){return(0,r.jsx)(a.Z,{children:e})}let d=e=>{let{logs:t,pageSize:n}=e;return(null==t?void 0:t.length)?(0,r.jsxs)("div",{className:"logs-section",children:[(0,r.jsx)(s,{children:"Logs"}),(0,r.jsx)(u.Z,{size:"middle",dataSource:t,columns:[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(e,t)=>0===t.level.indexOf(e),render:l},{title:"Timestamp",dataIndex:"time",key:"time",render:e=>{let t=new Date(e);return(0,c.Z)(t,"pp P")},sorter:(e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:f}],rowKey:e=>e.time,pagination:{pageSize:n||20}})]}):null}},87905:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(85893),o=n(67294),i=n(82536),u=n(64777),a=n(6960);function c(){let[e,t]=(0,o.useState)([]),n=async()=>{try{let e=await (0,u.rQ)(u.sG);t(e)}catch(e){console.log("==== error",e)}};return(0,o.useEffect)(()=>{let e=null;return setInterval(n,5e3),n(),e=setInterval(n,5e3),()=>{clearInterval(e)}},[]),(0,r.jsx)(i.o,{logs:e,pageSize:20})}c.getLayout=function(e){return(0,r.jsx)(a.l,{page:e})}},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)},92703:function(e,t,n){"use strict";var r=n(50414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[173,164,2138,31,4931,5402,2231,492,5818,7524,9915,6386,3698,3013,4398,8091,9863,710,6960,9774,2888,179],function(){return e(e.s=23426)}),_N_E=e.O()}]);
//# sourceMappingURL=logs-1243093eb968a8bd.js.map
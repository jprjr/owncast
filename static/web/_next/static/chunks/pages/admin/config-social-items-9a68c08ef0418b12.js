(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{97183:function(e,t,n){"use strict";var a=n(2897),s=n(7293),l=a.ZP;l.Header=a.h4,l.Footer=a.$_,l.Content=a.VY,l.Sider=s.Z,t.Z=l},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return s}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function s(e){return e?a[e]:a.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(19013),s=n(13882);function l(e,t){return(0,s.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(59910),s=n(13882),l=n(93645);function i(e,t,n){(0,s.Z)(2,arguments);var i=(0,a.Z)(e,t)/1e3;return(0,l.u)(null==n?void 0:n.roundingMethod)(i)}},81009:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-social-items",function(){return n(87945)}])},49817:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(85893),s=n(67294),l=n(85818),i=n(71577),o=n(79531),r=n(54398),c=n(85402),d=n(5152),u=n.n(d),p=n(34041),m=n(90745);let f=e=>{let{iconList:t,selectedOption:n,onSelected:s}=e,l=e=>{s&&s(e)},i=""===n?null:n;return(0,a.jsxs)("div",{className:"social-dropdown-container",children:[(0,a.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,a.jsxs)("div",{className:"formfield-container",children:[(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,a.jsx)("div",{className:"input-side",children:(0,a.jsxs)(p.Z,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:i,value:i,onSelect:l,children:[t.map(e=>{let{platform:t,icon:n,key:s}=e;return(0,a.jsxs)(p.Z.Option,{className:"social-option",value:s,children:[(0,a.jsx)("span",{className:"option-icon",children:(0,a.jsx)("img",{src:n,alt:"",className:"option-icon"})}),(0,a.jsx)("span",{className:"option-label",children:t})]},"platform-".concat(s))}),(0,a.jsx)(p.Z.Option,{className:"social-option",value:m.z_,children:"Other..."},"platform-".concat(m.z_))]})})]})]})};var h=n(64777),x=n(99519),j=n(37174),v=n(79139),N=n(41983),b=n(73615);let{Title:y}=l.Z,g=u()(()=>Promise.all([n.e(2074),n.e(8244)]).then(n.t.bind(n,18244,23)),{loadableGenerated:{webpack:()=>[18244]},ssr:!1}),k=u()(()=>Promise.all([n.e(2074),n.e(2802)]).then(n.t.bind(n,22802,23)),{loadableGenerated:{webpack:()=>[22802]},ssr:!1}),_=u()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1});function Z(){var e,t;let[n,l]=(0,s.useState)([]),[d,u]=(0,s.useState)([]),[p,Z]=(0,s.useState)(!1),[w,S]=(0,s.useState)(!1),[C,O]=(0,s.useState)(!1),[T,E]=(0,s.useState)(-1),[P,z]=(0,s.useState)(m.wC),[I,H]=(0,s.useState)(null),L=(0,s.useContext)(x.aC),{serverConfig:M,setFieldInConfigState:R}=L||{},{instanceDetails:U}=M,{socialHandles:A}=U,V=async()=>{try{let e=await (0,h.rQ)(h.$i,{auth:!1}),t=Object.keys(e).map(t=>({key:t,...e[t]}));l(t)}catch(e){console.log(e)}},D=e=>n.find(t=>t.key===e)||!1,G=""!==P.platform&&!n.find(e=>e.key===P.platform);(0,s.useEffect)(()=>{V()},[]),(0,s.useEffect)(()=>{U.socialHandles&&u(A)},[U]);let W=()=>{H(null),clearTimeout(null)},Y=()=>{Z(!1),E(-1),S(!1),O(!1),z({...m.wC})},B=()=>{Y()},F=(e,t)=>{z({...P,[e]:t})},K=e=>{e===m.z_?(S(!0),F("platform","")):(S(!1),F("platform",e))},X=e=>{let{value:t}=e.target;F("platform",t)},$=e=>{let{value:t}=e;F("url",t)},q=async e=>{await (0,m.Si)({apiPath:m.c9,data:{value:e},onSuccess:()=>{R({fieldName:"socialHandles",value:e,path:"instanceDetails"}),O(!1),B(),H((0,N.kg)(N.zv)),setTimeout(W,m.sI)},onError:e=>{H((0,N.kg)(N.Un,"There was an error: ".concat(e))),O(!1),setTimeout(W,m.sI)}})},Q=()=>{O(!0);let e=d.length?[...d]:[];-1===T?e.push(P):e.splice(T,1,P),q(e)},J=e=>{let t=[...d];t.splice(e,1),q(t)},ee=e=>{if(e<=0||e>=d.length)return;let t=[...d],n=t[e-1];t[e-1]=t[e],t[e]=n,q(t)},et=e=>{if(e<0||e>=d.length-1)return;let t=[...d],n=t[e+1];t[e+1]=t[e],t[e]=n,q(t)},en={disabled:(e=P.url,"xmpp"===(t=P.platform)?!(0,j.Kf)(e,"xmpp"):"matrix"===t?!(0,j.bu)(e):!(0,j.jv)(e))},ea=(0,a.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,a.jsx)("div",{className:"label-side"}),(0,a.jsx)("div",{className:"input-side",children:(0,a.jsx)(o.Z,{placeholder:"Other platform name",defaultValue:P.platform,onChange:X})})]});return(0,a.jsxs)("div",{className:"social-links-edit-container",children:[(0,a.jsx)(y,{level:3,className:"section-title",children:"Your Social Handles"}),(0,a.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,a.jsx)(b.E,{status:I}),(0,a.jsx)(r.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:[{title:"Social Link",dataIndex:"",key:"combo",render:(e,t)=>{let{platform:n,url:s}=t,l=D(n);if(!l)return(0,a.jsx)("div",{className:"social-handle-cell",children:(0,a.jsxs)("p",{className:"option-label",children:[(0,a.jsx)("strong",{children:n}),(0,a.jsx)("span",{className:"handle-url",title:s,children:s})]})});let{icon:i,platform:o}=l;return(0,a.jsxs)("div",{className:"social-handle-cell",children:[(0,a.jsx)("span",{className:"option-icon",children:(0,a.jsx)("img",{src:i,alt:"",className:"option-icon"})}),(0,a.jsxs)("p",{className:"option-label",children:[(0,a.jsx)("strong",{children:o}),(0,a.jsx)("span",{className:"handle-url",title:s,children:s})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,t,n)=>(0,a.jsxs)("div",{className:"actions",children:[(0,a.jsx)(i.Z,{size:"small",onClick:()=>{let e=d[n];E(n),z({...e}),Z(!0),D(e.platform)||S(!0)},children:"Edit"}),(0,a.jsx)(i.Z,{icon:(0,a.jsx)(k,{}),size:"small",hidden:0===n,onClick:()=>ee(n)}),(0,a.jsx)(i.Z,{icon:(0,a.jsx)(g,{}),size:"small",hidden:n===d.length-1,onClick:()=>et(n)}),(0,a.jsx)(i.Z,{className:"delete-button",icon:(0,a.jsx)(_,{}),size:"small",onClick:()=>J(n)})]})}],dataSource:d}),(0,a.jsx)(c.Z,{title:"Edit Social Handle",open:p,onOk:Q,onCancel:B,confirmLoading:C,okButtonProps:en,children:(0,a.jsxs)("div",{className:"social-handle-modal-content",children:[(0,a.jsx)(f,{iconList:n,selectedOption:G?m.z_:P.platform,onSelected:K}),w&&ea,(0,a.jsx)("br",{}),(0,a.jsx)(v.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[P.platform]||"Url to page",value:P.url,onChange:$,useTrim:!0,type:"url",pattern:j.ax}),(0,a.jsx)(b.E,{status:I})]})}),(0,a.jsx)("br",{}),(0,a.jsx)(i.Z,{type:"primary",onClick:()=>{Y(),Z(!0)},children:"Add a new social link"})]})}},87945:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(85893);n(67294);var s=n(85818),l=n(49817),i=n(6960);let{Title:o}=s.Z;function r(){return(0,a.jsxs)("div",{className:"config-social-items",children:[(0,a.jsx)(o,{children:"Social Items"}),(0,a.jsx)(l.Z,{})]})}r.getLayout=function(e){return(0,a.jsx)(i.l,{page:e})}},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)},92703:function(e,t,n){"use strict";var a=n(50414);function s(){}function l(){}l.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,l,i){if(i!==a){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:s};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[173,164,2138,31,4931,5402,2231,492,5818,7524,9915,6386,3698,3013,4398,1382,710,6960,9774,2888,179],function(){return e(e.s=81009)}),_N_E=e.O()}]);
//# sourceMappingURL=config-social-items-9a68c08ef0418b12.js.map
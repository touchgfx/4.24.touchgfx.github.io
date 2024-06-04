"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[65904],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const o=i},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},94790:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const l=a},21100:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const o=i},24038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>k,toc:()=>h});n(59496);var r=n(49613),a=n(89639),l=n(48753),i=n(21100),o=n(94790),p=n(95375),d=n(28128);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"text-area",title:"\u6587\u5b57\u5340\u57df"},s=void 0,k={unversionedId:"development/ui-development/ui-components/miscellaneous/text-area",id:"development/ui-development/ui-components/miscellaneous/text-area",title:"\u6587\u5b57\u5340\u57df",description:"\u6587\u5b57\u5340\u57df\u5728\u87a2\u5e55\u4e0a\u986f\u793a\u6587\u5b57\u3002 \u6587\u5b57\u5340\u57df\u7684\u6587\u5b57\u5728\u5927\u5c0f\u3001\u984f\u8272\u3001\u81ea\u8a02\u5b57\u9ad4\u3001\u52d5\u614b\u6587\u5b57\u7b49\u65b9\u9762\u662f\u5b8c\u5168\u53ef\u4ee5\u914d\u7f6e\u7684\u3002 \u5982\u9700\u8a73\u7d30\u77ad\u89e3\u5982\u4f55\u5728TouchGFX Designer\u4e2d\u8655\u7406\u6587\u5b57\uff0c\u8acb\u95b1\u8b80\u6587\u5b57\u8207\u5b57\u9ad4\u4e00\u6587\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/text-area.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/text-area",permalink:"/4.24/zh-TW/docs/development/ui-development/ui-components/miscellaneous/text-area",draft:!1,tags:[],version:"current",frontMatter:{id:"text-area",title:"\u6587\u5b57\u5340\u57df"},sidebar:"docs",previous:{title:"\u6ed1\u584a",permalink:"/4.24/zh-TW/docs/development/ui-development/ui-components/miscellaneous/slider"},next:{title:"\u985e\u6bd4\u6642\u9418",permalink:"/4.24/zh-TW/docs/development/ui-development/ui-components/miscellaneous/analog-clock"}},g={},h=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",level:2},{value:"\u5c6c\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u7bc4\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c3\u8003",id:"api-reference",level:2}],v={toc:h},N="wrapper";function f(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(N,m({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6587\u5b57\u5340\u57df\u5728\u87a2\u5e55\u4e0a\u986f\u793a\u6587\u5b57\u3002 \u6587\u5b57\u5340\u57df\u7684\u6587\u5b57\u5728\u5927\u5c0f\u3001\u984f\u8272\u3001\u81ea\u8a02\u5b57\u9ad4\u3001\u52d5\u614b\u6587\u5b57\u7b49\u65b9\u9762\u662f\u5b8c\u5168\u53ef\u4ee5\u914d\u7f6e\u7684\u3002 \u5982\u9700\u8a73\u7d30\u77ad\u89e3\u5982\u4f55\u5728TouchGFX Designer\u4e2d\u8655\u7406\u6587\u5b57\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",m({parentName:"p"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"\u6587\u5b57\u8207\u5b57\u9ad4"),"\u4e00\u6587\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u6587\u5b57\u5340\u57df"),(0,r.kt)("h2",m({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u6587\u5b57\u5340\u57df\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Miscellaneous\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6587\u5b57\u5340\u57df"),(0,r.kt)("h2",m({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u6587\u5b57\u5340\u57df\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5c0f\u90e8\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u7a31"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"Name\u662fTouchGFX Designer\u548c\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8b58\u5225\u78bc"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5c0d\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W"),"\u548c",(0,r.kt)("em",{parentName:"td"},"H"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u81ea\u52d5\u8abf\u6574\u5927\u5c0f"),"\u6307\u5b9a\u662f\u5426\u6839\u64da\u6587\u5b57\u8f38\u5165\u81ea\u52d5\u8a2d\u7f6e\u5c0f\u90e8\u4ef6\u7684\u5927\u5c0f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9396\u5b9a"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u61c9\u9396\u5b9a\u70ba\u5176\u7576\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9396\u5b9a\u5c0f\u90e8\u4ef6\uff0c\u9084\u6703\u7981\u6b62\u901a\u904e\u87a2\u5e55\u8207\u5c0f\u90e8\u4ef6\u9032\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u898b"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u53ef\u898b\u6027\u3002 ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u4f7f\u5c0f\u90e8\u4ef6\u4e0d\u53ef\u898b\u9084\u5c07\u7981\u7528\u8207\u5c0f\u90e8\u4ef6\u4e4b\u9593\u901a\u904e\u87a2\u5e55\u9032\u884c\u7684\u4ea4\u4e92\u3002"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"ID"),"\u6307\u5b9a\u4f7f\u7528\u7684\u6587\u5b57\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c0f\u5de5\u5177\u4f7f\u7528\u81ea\u52d5\u751f\u6210\u7684\u6587\u5b57\uff0cID\u5c07\u986f\u793a\u201c\u81ea\u52d5\u751f\u6210\u201d\u3002"),".",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"\u7ffb\u8b6f")," \u6307\u5b9a\u8981\u986f\u793a\u7684\u6587\u5b57\u5167\u5bb9\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"\u5b57\u9ad4\u6392\u5370")," \u6307\u5b9a\u6587\u5b57\u7684\u683c\u5f0f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"\u5c0d\u9f4a")," \u6307\u5b9a\u6587\u5b57\u7684\u6c34\u5e73\u5c0d\u9f4a\u65b9\u5f0f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u6700\u591a\u53ef\u4ee5\u70ba\u52d5\u614b\u6587\u5b57\u8f38\u5165\u5275\u5efa\u5169\u500b\u842c\u7528\u5b57\u5143\uff0c\u8868\u793a\u70ba\u2018","<","tag",">","\uff0c\u5176\u4e2d\u2018tag\u2019\u53ef\u4ee5\u662f\u4efb\u610f\u5b57\u4e32\u3002 ",(0,r.kt)("br",null),(0,r.kt)("br",null)," \u5982\u9700\u8a73\u7d30\u77ad\u89e3\u95dc\u65bc\u6587\u5b57\u914d\u7f6e\u7684\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1",(0,r.kt)("a",m({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"\u6587\u5b57\u8207\u5b57\u9ad4")," \u4e00\u7bc0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u984f\u8272"),"\u6307\u5b9a\u6240\u986f\u793a\u6587\u5b57\u7684\u984f\u8272\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha"),"\u6307\u5b9a\u5c0f\u90e8\u4ef6\u7684\u900f\u660e\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5c0f\u90e8\u4ef6Alpha\u503c\u7684\u7bc4\u570d\u662f0\u5230255\u3002 0\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c255\u8868\u793a\u7d14\u8272\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u884c\u8ddd"),"\u6307\u5b9a\u884c\u4e4b\u9593\u7684\u9593\u8ddd\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u6587\u5b57\u65cb\u8f49"),"\u8a2d\u7f6e\u6587\u5b57\u7684\u65cb\u8f49\u89d2\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52d5")," \u6307\u5b9a\u5728\u904b\u884c\u6642\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u62d6\u52d5\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u88ab\u9ede\u64ca\u6642\u662f\u5426\u6703\u547c\u53ebcallback\u51fd\u6578\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd\u5176 ",(0,r.kt)("em",{parentName:"td"},"Alpha")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u5c0f\u90e8\u4ef6\u662f\u5426\u53ef\u7e6a\u88fd ",(0,r.kt)("em",{parentName:"td"},"X")," \u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u8b8a\u5316\u7684\u52d5\u756b\u3002")))),(0,r.kt)("h2",m({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u6587\u5b57\u5340\u57df\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",m({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set text")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8a2d\u7f6e\u5c0f\u90e8\u4ef6\u7684\u6587\u5b57\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8abf\u6574\u5c0f\u90e8\u4ef6\u7684\u5c3a\u5bf8\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set wildcard")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8a2d\u7f6e\u5c0f\u90e8\u4ef6\u7684\u842c\u7528\u5b57\u5143\u3002 \u842c\u7528\u5b57\u5143\u5fc5\u9808\u5df2\u7d93\u6dfb\u52a0\u5230\u6587\u5b57\u5340\u57df\uff0c\u624d\u80fd\u9032\u884c\u6b64\u64cd\u4f5c\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",m({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u6587\u5b57\u5340\u57df\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",m({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u6587\u5b57\u5340\u57df\u4f9d\u8cf4\u4e8e\u6587\u5b57\u7e6a\u88fd\u3002 \u6587\u5b57\u7e6a\u88fd\u975e\u5e38\u985e\u4f3c\u4e8e\u666e\u901a\u7684\u5716\u50cf\u7e6a\u88fd\uff08\u5118\u7ba1\u7531\u65bc\u6587\u5b57\u5b57\u5143\u7684\u6027\u8cea\uff0c\u6703\u767c\u751f\u5927\u91cf\u7684alpha\u6df7\u5408\uff09\u3002 \u56e0\u6b64\uff0c\u5927\u90e8\u5206\u5e73\u81fa\u6703\u5c07\u6587\u5b57\u5340\u57df\u8996\u70ba\u975e\u5e38\u5feb\u901f\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",m({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",m({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",m({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"touchgfx::TextAreaWithOneWildcard textArea;\n\n/*\n * Wildcard Buffers\n */\nstatic const uint16_t TEXTAREA_SIZE = 20;\ntouchgfx::Unicode::UnicodeChar textAreaBuffer[TEXTAREA_SIZE];\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'textArea.setPosition(40, 111, 400, 50);\ntextArea.setColor(touchgfx::Color::getColorFromRGB(60, 180, 230));\ntextArea.setLinespacing(0);\nUnicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\ntextArea.setWildcard(textAreaBuffer);\ntextArea.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528TextArea\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidate()")," \u6216",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002",(0,r.kt)("p",null,"\u7576\u4f7f\u7528 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")),(0,r.kt)("p",null,"-\u5fc5\u9808\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidateContent()")," \u66f4\u6539\u5c0f\u5de5\u5177\u5916\u89c0\u4e4b\u524d\u548c\u4e4b\u5f8c\uff0c\u4f8b\u5982\uff1a\u66f4\u6539\u842c\u7528\u5b57\u5143\u7de9\u885d\u5340\u7684\u5167\u5bb9\u6642\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u66f4\u6539\u8a9e\u8a00\u6642\uff0c\u5fc5\u9808\u91cd\u65b0\u8a08\u7b97\u908a\u754c\u5340\u57df\uff08\u5c0f\u5de5\u5177\u5167\u5bb9\u5340\u57df\uff09\u3002 \u53ef\u4ee5\u5728\u66f4\u6539\u8a9e\u8a00\u5f8c\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.setTypedText(...)"),"\n\u4f86\u5b8c\u6210\u3002"))),(0,r.kt)("h3",m({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u7bc4\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5be6",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u51fd\u6578\uff0c\u4ee5\u4fbf\u5728\u904b\u884c\u6642\u4f7f\u7528\u842c\u7528\u5b57\u5143\u66f4\u6539\u6587\u5b57\u3002 \u904b\u884c\u9019\u6bb5\u7a0b\u5f0f\u78bc\u5c07\u5275\u5efa",(0,r.kt)("a",m({parentName:"p"},{href:"text-area"}),"\u672c\u7bc0\u958b\u982d\u6240\u793a\u7684\u61c9\u7528"),"\u3002"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void handleTickEvent();\nprotected:\n    uint8_t counter;\n    bool flag;\n};\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'Screen1View::Screen1View():\n    counter(0),\n    flag(true)\n{}\n\nvoid Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%120 == 0) // every 2s\n    {\n        if(flag)\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_STMICROID).getText());\n            flag = false;\n        }\n        else\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\n            flag = true;\n        }\n        textArea.invalidate();\n        counter = 0;\n    }\n}\n')),(0,r.kt)("h3",m({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u6587\u5b57\u5340\u57df\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217\u7bc4\u4f8b\u4e4b\u4e00\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/text-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6587\u5b57\u7bc4\u4f8b"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/arabic-text-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u963f\u62c9\u4f2f\u6587\u5b57\u7bc4\u4f8b"),(0,r.kt)("h2",m({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_area",mdxType:"Link"},"TextArea\u985e\u5225\u7684API\u53c3\u8003"))))}f.isMDXComponent=!0}}]);
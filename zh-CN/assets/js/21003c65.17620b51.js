"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[83365],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||s[u]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const l=r},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496),r=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:l,src:i})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const o=i},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const l=r},94790:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}const l=r},49018:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}const o=i},21100:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const o=i},16324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>v});n(59496);var a=n(49613),r=n(89639),l=n(48753),i=n(21100),o=n(49018),p=n(94790),m=n(95375),c=n(28128);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"scalable-image",title:"\u53ef\u7f29\u653e\u56fe\u50cf"},g=void 0,h={unversionedId:"development/ui-development/ui-components/images/scalable-image",id:"development/ui-development/ui-components/images/scalable-image",title:"\u53ef\u7f29\u653e\u56fe\u50cf",description:"\u53ef\u7f29\u653e\u56fe\u50cf\u662f\u80fd\u591f\u7ed8\u5236\u7f29\u653e\u7248\u4f4d\u56fe\u7684\u63a7\u4ef6\u3002 \u53ea\u9700\u66f4\u6539\u63a7\u4ef6\u7684\u5bbd\u5ea6/\u9ad8\u5ea6\u5373\u53ef\u8c03\u6574\u56fe\u50cf\u5927\u5c0f\u3002 \u7f29\u653e\u56fe\u50cf\u7684\u8d28\u91cf\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u6e32\u67d3\u7b97\u6cd5\u3002 \u53ef\u52a8\u6001\u66f4\u6539\u6e32\u67d3\u7b97\u6cd5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/scalable-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/scalable-image",permalink:"/4.24/zh-CN/docs/development/ui-development/ui-components/images/scalable-image",draft:!1,tags:[],version:"current",frontMatter:{id:"scalable-image",title:"\u53ef\u7f29\u653e\u56fe\u50cf"},sidebar:"docs",previous:{title:"\u56fe\u50cf",permalink:"/4.24/zh-CN/docs/development/ui-development/ui-components/images/image"},next:{title:"Tiled Image",permalink:"/4.24/zh-CN/docs/development/ui-development/ui-components/images/tiled-image"}},k={},v=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"TouchGFX Designer\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],N={toc:v},b="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(b,d({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53ef\u7f29\u653e\u56fe\u50cf\u662f\u80fd\u591f\u7ed8\u5236\u7f29\u653e\u7248\u4f4d\u56fe\u7684\u63a7\u4ef6\u3002 \u53ea\u9700\u66f4\u6539\u63a7\u4ef6\u7684\u5bbd\u5ea6/\u9ad8\u5ea6\u5373\u53ef\u8c03\u6574\u56fe\u50cf\u5927\u5c0f\u3002 \u7f29\u653e\u56fe\u50cf\u7684\u8d28\u91cf\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u6e32\u67d3\u7b97\u6cd5\u3002 \u53ef\u52a8\u6001\u66f4\u6539\u6e32\u67d3\u7b97\u6cd5\u3002"),(0,a.kt)(o.Z,{mdxType:"Note"},(0,a.kt)("li",null,"\u8be5\u63a7\u4ef6\u5bf9MCU\u8d1f\u8f7d\u6709\u5f88\u5927\u5f71\u54cd\u3002"),(0,a.kt)("li",null,"\u8be5\u63a7\u4ef6\u4e0d\u652f\u6301\u6bcf\u50cf\u7d201\u4f4d\u7684\u8272\u6df1\u3002")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/scalable-image/widget-appearance.webp",mdxType:"Figure"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u53ef\u7f29\u653e\u56fe\u50cf"),(0,a.kt)("h2",d({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,a.kt)("p",null,"\u53ef\u7f29\u653e\u56fe\u50cf\u4f4d\u4e8e TouchGFX Designer \u4e2d\u7684\u56fe\u50cf\u63a7\u4ef6\u7ec4\u4e2d\u3002\u63a7\u4ef6"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/scalable-image/widget-group-v4.21.webp",mdxType:"Figure"},"TouchGFX Designer \u4e2d\u7684\u53ef\u7f29\u653e\u56fe\u50cf"),(0,a.kt)("h2",d({},{id:"properties"}),"\u5c5e\u6027"),(0,a.kt)("p",null,"TouchGFX Designer \u4e2d\u53ef\u7f29\u653e\u56fe\u50cf\u7684\u5c5e\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX Designer\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \u548c",(0,a.kt)("em",{parentName:"td"},"Y")," \u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \u548c ",(0,a.kt)("em",{parentName:"td"},"H")," \u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u53ef\u89c1")," \u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u56fe\u50cf")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u7f29\u653e\u7b97\u6cd5"),"\u6307\u5b9a\u7f29\u653e\u6240\u9009\u56fe\u50cf\u4f7f\u7528\u7684\u7b97\u6cd5\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\u56fe\u50cf")," \u6307\u5b9a\u63a7\u4ef6\u5e94\u4f7f\u7528\u7684\u56fe\u50cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u5916\u89c2")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," \u6307\u5b9a\u63a7\u4ef6\u7684\u900f\u660e\u5ea6\u3002 ",(0,a.kt)("em",{parentName:"td"},"\u63a7\u4ef6\u7684Alpha\u503c\u4ecb\u4e8e0\u548c255\u4e4b\u95f4\u3002 0\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c255\u8868\u793a\u4e0d\u900f\u660e\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8")," \u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," \u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236\u5176 ",(0,a.kt)("em",{parentName:"td"},"Alpha")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," \u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,a.kt)("em",{parentName:"td"},"X")," \u548c ",(0,a.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,a.kt)("h2",d({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"TouchGFX Designer \u4e2d\u7684\u53ef\u7f29\u653e\u56fe\u50cf\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u3002"),(0,a.kt)("h3",d({},{id:"actions"}),"\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u8c03\u6574\u63a7\u4ef6\u7684\u5c3a\u5bf8")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u8c03\u6574\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u6e10\u9690\u63a7\u4ef6")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u968f\u65f6\u95f4\u7684\u63a8\u79fb\u6539\u53d8\u63a7\u4ef6\u7684Alpha\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3afalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u7f6e\u4e3atrue\uff09\u3002")))),(0,a.kt)("h3",d({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,a.kt)("p",null,"\u53ef\u7f29\u653e\u56fe\u50cf\u4e0d\u4f1a\u53d1\u51fa\u4efb\u4f55\u89e6\u53d1\u6761\u4ef6\u3002"),(0,a.kt)("h2",d({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"\u53ef\u7f29\u653e\u56fe\u50cf\u4e3b\u8981\u9760 MCU \u6765\u7f29\u653e\u56fe\u50cf\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u53ef\u7f29\u653e\u56fe\u50cf\u89c6\u4e3a\u9ad8\u8981\u6c42\u63a7\u4ef6\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u7ed8\u5236\u6027\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",d({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd"),"\u4e00\u8282\u3002"),(0,a.kt)("h2",d({},{id:"examples"}),"\u793a\u4f8b"),(0,a.kt)("h3",d({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,a.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770b Designer \u662f\u5982\u4f55\u521b\u5efa\u53ef\u7f29\u653e\u56fe\u50cf\u7684\u3002"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    scalableImage.setBitmap(touchgfx::Bitmap(BITMAP_IMAGE_ID));\n    scalableImage.setPosition(246, 36, 200, 200);\n    scalableImage.setScalingAlgorithm(touchgfx::ScalableImage::NEAREST_NEIGHBOR);\n\n    add(scalableImage);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(i.Z,{mdxType:"Tip"},"\u53ef\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u4ee5\u53ca ScalableImage \u7c7b\u4e2d\u63d0\u4f9b\u7684\u5176\u4ed6\u51fd\u6570\u3002 \u5982\u679c\u66f4\u6539\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u8bf7\u5fc5\u987b\u8c03\u7528 ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"scalableImage.invalidate()")," \u5f3a\u5236\u8fdb\u884c\u91cd\u65b0\u7ed8\u5236\u3002"),(0,a.kt)("h3",d({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u793a\u4f8b"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8fdb\u4e00\u6b65\u4e86\u89e3\u53ef\u7f29\u653e\u56fe\u50cf\uff0c\u8bf7\u5c1d\u8bd5\u5728 TouchGFX Designer \u4e2d\u4f7f\u7528\u4e0b\u5217 UI \u6a21\u677f\u4e4b\u4e00\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/scale-and-zoom-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer \u4e2d\u7684\u7f29\u653e\u793a\u4f8b UI \u6a21\u677f"),(0,a.kt)("h2",d({},{id:"api-reference"}),"API\u53c2\u8003"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scalable_image",mdxType:"Link"},"ScalableImage\u7c7b\u7684API\u53c2\u8003"))))}f.isMDXComponent=!0}}]);
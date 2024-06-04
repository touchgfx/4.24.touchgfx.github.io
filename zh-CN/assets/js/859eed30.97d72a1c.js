"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[91589],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,h=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const i=o},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},35249:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(7029);const l=function(e){const t=(0,a.Z)(e.url);var n;const l=null!==(n=e.width)&&void 0!==n?n:"100%";var o;const i=null!==(o=e.height)&&void 0!==o?o:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:l,height:i},r.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},49018:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}const i=o},21100:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const i=o},86680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>b,frontMatter:()=>s,metadata:()=>g,toc:()=>v});n(59496);var r=n(49613),a=n(89639),l=n(48753),o=n(21100),i=n(95375),p=n(28128),d=n(35249),m=n(49018);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"video",title:"\u89c6\u9891"},h=void 0,g={unversionedId:"development/ui-development/ui-components/miscellaneous/video",id:"development/ui-development/ui-components/miscellaneous/video",title:"\u89c6\u9891",description:"\u201cVideo\uff08\u89c6\u9891\uff09\u201d\u662f\u80fd\u591f\u4ee5AVI\u683c\u5f0f\u64ad\u653eJPEG\u89c6\u9891\u7684\u63a7\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/video.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/video",permalink:"/4.24/zh-CN/docs/development/ui-development/ui-components/miscellaneous/video",draft:!1,tags:[],version:"current",frontMatter:{id:"video",title:"\u89c6\u9891"},sidebar:"docs",previous:{title:"\u4eea\u8868",permalink:"/4.24/zh-CN/docs/development/ui-development/ui-components/miscellaneous/gauge"},next:{title:"\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd",permalink:"/4.24/zh-CN/docs/development/ui-development/ui-components/general-ui-component-performance"}},k={},v=[{value:"\u63a7\u4ef6\u7ec4",id:"widget-group",level:2},{value:"\u5c5e\u6027",id:"properties",level:2},{value:"\u4ea4\u4e92",id:"interactions",level:2},{value:"\u64cd\u4f5c",id:"actions",level:3},{value:"\u89e6\u53d1\u6761\u4ef6",id:"triggers",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generated-code",level:3},{value:"TouchGFX\u8bbe\u8ba1\u5668\u793a\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u8003",id:"api-reference",level:2}],N={toc:v},f="wrapper";function b(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(f,c({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u201cVideo\uff08\u89c6\u9891\uff09\u201d\u662f\u80fd\u591f\u4ee5AVI\u683c\u5f0f\u64ad\u653eJPEG\u89c6\u9891\u7684\u63a7\u4ef6\u3002"),(0,r.kt)(d.Z,{width:"484",height:"302",url:"/img/development/ui-development/ui-components/video/widget-appearance.mp4",mdxType:"LoopVideo"},"\u5728\u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u7684\u201cVideo\uff08\u89c6\u9891\uff09\u201d"),(0,r.kt)(m.Z,{mdxType:"Note"},"Audio is not supported."),(0,r.kt)("h2",c({},{id:"widget-group"}),"\u63a7\u4ef6\u7ec4"),(0,r.kt)("p",null,"\u89c6\u9891\u4f4d\u4e8eTouchGFX\u8bbe\u8ba1\u5668\u4e2d\u7684Miscellaneous\u63a7\u4ef6\u7ec4\u4e2d\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/video/widget-group.webp",mdxType:"Figure"},"TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u7684\u201cVideo\uff08\u89c6\u9891\uff09\u201d"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u4f7f\u7528",(0,r.kt)(i.Z,{to:"../../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",mdxType:"Link"},"TouchGFX Generator")," \u914d\u7f6e\u5177\u6709\u89c6\u9891\u89e3\u7801\u529f\u80fd\u7684HAL\uff0c\u4ee5\u4fbf\u5728\u76ee\u6807\u4e0a\u64ad\u653e\u89c6\u9891\u3002"),(0,r.kt)("h2",c({},{id:"properties"}),"\u5c5e\u6027"),(0,r.kt)("p",null,"TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u89c6\u9891\u7684\u5c5e\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u7ec4")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0"),"\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u540d\u79f0\u662fTouchGFX\u8bbe\u8ba1\u5668\u548c\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u4f4d\u7f6e")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X"),"\u548c",(0,r.kt)("em",{parentName:"td"},"Y"),"\u6307\u5b9a\u63a7\u4ef6\u5de6\u4e0a\u89d2\u76f8\u5bf9\u4e8e\u5176\u7236\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W"),"\u548c",(0,r.kt)("em",{parentName:"td"},"H"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u9501\u5b9a"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u5e94\u9501\u5b9a\u4e3a\u5176\u5f53\u524d\u7684X\u3001Y\u3001W\u548cH\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u9501\u5b9a\u63a7\u4ef6\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u53ef\u89c1"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u53ef\u89c1\u6027\u3002 ",(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u5c06\u63a7\u4ef6\u6807\u8bb0\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd8\u4f1a\u7981\u6b62\u901a\u8fc7\u5c4f\u5e55\u4e0e\u63a7\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u6837\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u2018Sample\u2019"),"\u6307\u5b9a\u63a7\u4ef6\u7684\u793a\u4f8b\u89c6\u9891\u3002",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u8fd9\u4e9b\u793a\u4f8b\u514d\u8d39\u4f7f\u7528\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u89c6\u9891")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u2018Video\u2019"),"\u6307\u5b9a\u63a7\u4ef6\u5e94\u8be5\u4f7f\u7528\u7684\u89c6\u9891\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u2018Auto Play\u2019 "),"\u6307\u5b9a\u8fdb\u5165\u5c4f\u5e55\u65f6\u662f\u5426\u81ea\u52a8\u64ad\u653e\u89c6\u9891\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\u2018Loop\u2019 "),"\u6307\u5b9a\u89c6\u9891\u662f\u5426\u5e94\u8be5\u5faa\u73af\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"\u53ef\u62d6\u52a8"),"\u6307\u5b9a\u5728\u8fd0\u884c\u65f6\u63a7\u4ef6\u662f\u5426\u53ef\u62d6\u52a8\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener"),"\u6307\u5b9a\u63a7\u4ef6\u88ab\u70b9\u51fb\u65f6\u662f\u5426\u4f1a\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator"),"\u6307\u5b9a\u63a7\u4ef6\u662f\u5426\u53ef\u7ed8\u5236 ",(0,r.kt)("em",{parentName:"td"},"X"),"\u548c ",(0,r.kt)("em",{parentName:"td"},"Y")," \u503c\u53d8\u5316\u7684\u52a8\u753b\u3002")))),(0,r.kt)("h2",c({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u7684\u89c6\u9891\u652f\u6301\u7684\u64cd\u4f5c\u548c\u89e6\u53d1\u6761\u4ef6\u3002"),(0,r.kt)("h3",c({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63a7\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u2018Play\u2019")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u64ad\u653e\u89c6\u9891")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u2018Pause\u2019")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u6682\u505c\u89c6\u9891\u64ad\u653e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u2018Stop\u2019")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u505c\u6b62\u89c6\u9891\u64ad\u653e")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6807\u51c6\u63a7\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u79fb\u52a8\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u5c06\u63a7\u4ef6\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u9690\u85cf\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u9690\u85cf\u63a7\u4ef6\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u4e3aFalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u663e\u793a\u63a7\u4ef6")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u4f7f\u9690\u85cf\u7684\u63a7\u4ef6\u53ef\u89c1\uff08\u5c06\u53ef\u89c1\u6027\u8bbe\u4e3aTrue\uff09\u3002")))),(0,r.kt)("h3",c({},{id:"triggers"}),"\u89e6\u53d1\u6761\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u89e6\u53d1\u6761\u4ef6")),(0,r.kt)("th",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\u89c6\u9891\u5df2\u7ed3\u675f")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u89c6\u9891\u63a7\u4ef6\u7ed3\u675f\u4e86\u89c6\u9891\u64ad\u653e\u3002")))),(0,r.kt)("h2",c({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u89c6\u9891\u63a7\u4ef6\u662f\u4e00\u79cd\u589e\u5f3a\u578b\u7ec4\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u53f0\u4e0a\uff0c\u4f1a\u5c06\u89c6\u9891\u89c6\u4e3a\u8981\u6c42\u9ad8\u7684\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u7ed8\u5236\u6027\u80fd\u7684\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",c({parentName:"p"},{href:"../general-ui-component-performance"}),"\u2018\u901a\u7528UI\u7ec4\u4ef6\u6027\u80fd\u2019"),"\u7ae0\u8282\u6216",(0,r.kt)("a",c({parentName:"p"},{href:"../../touchgfx-engine-features/video"}),"\u2018MJPEG\u89c6\u9891\u2019"),"\u6587\u7ae0\u3002"),(0,r.kt)("h2",c({},{id:"examples"}),"\u793a\u4f8b"),(0,r.kt)("h3",c({},{id:"generated-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u751f\u6210\u7684\u89c6\u56fe\u57fa\u7c7b\u7684\u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bDesigner\u662f\u5982\u4f55\u521b\u5efa\u89c6\u9891\u7684\u3002"),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <videos/VideoDatabase.hpp>\n\nmainViewBase::mainViewBase()\n{\n    video.setPosition(0, 0, 480, 272);\n    video.setRepeat(true);\n    video.setVideoData(video_SampleVideo1_480x272_bin_start, video_SampleVideo1_480x272_bin_length);\n    video.play();\n\n    add(video);\n}\n")),(0,r.kt)("h3",c({},{id:"touchgfx-designer-examples"}),"TouchGFX\u8bbe\u8ba1\u5668\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3\u89c6\u9891\uff0c\u8bf7\u5c1d\u8bd5\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u6a21\u677f\u4e4b\u4e00\u521b\u5efa\u65b0\u5e94\u7528\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/video-example.webp",mdxType:"Figure"},"TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u7684\u89c6\u9891\u793a\u4f8bUI\u6a21\u677f"),(0,r.kt)("h2",c({},{id:"api-reference"}),"API\u53c2\u8003"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(i.Z,{to:"../../../../api/classes/classtouchgfx_1_1_video_widget",mdxType:"Link"},"VideoWidget\u7c7b\u7684API\u53c2\u8003")),(0,r.kt)("li",null,(0,r.kt)(i.Z,{to:"../../touchgfx-engine-features/video",mdxType:"Link"},"\u89c6\u9891")),(0,r.kt)("li",null,(0,r.kt)(i.Z,{to:"../../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",mdxType:"Link"},"TouchGFX Generator\u89c6\u9891\u652f\u6301"))))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[14665],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,m=s["".concat(c,".").concat(d)]||s[d]||h[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93822:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const i=l},89639:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(7029);const o=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const i=l},96151:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},49018:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const i=l},84233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>f});r(59496);var n=r(49613),a=r(89639),o=r(48753),l=r(95375),i=r(93822),c=r(49018);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"display",title:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",sidebar_label:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"},h=void 0,d={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",title:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",description:"Display\u30b0\u30eb\u30fc\u30d7\u306b\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u95a2\u9023\u3059\u308b\u8a2d\u5b9a\uff08\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3001\u5bf8\u6cd5\u3001\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u6226\u7565\u306a\u3069\uff09\u304c\u542b\u307e\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/display",draft:!1,tags:[],version:"current",frontMatter:{id:"display",title:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",sidebar_label:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"},sidebar:"docs",previous:{title:"TouchGFX AL\u306e\u8a2d\u5b9a",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration"},next:{title:"\u30c9\u30e9\u30a4\u30d0",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver"}},m={},f=[{value:"\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u5bf8\u6cd5",id:"interface-and-dimensions",level:2},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"framebuffer-pixel-format",level:2},{value:"Framebuffer Stride",id:"framebuffer-stride",level:2},{value:"\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u6226\u7565\u3068\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3",id:"buffering-strategies",level:2}],g={toc:f},v="wrapper";function k(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)(v,p({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Display\u30b0\u30eb\u30fc\u30d7\u306b\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u95a2\u9023\u3059\u308b\u8a2d\u5b9a\uff08\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3001\u5bf8\u6cd5\u3001\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u6226\u7565\u306a\u3069\uff09\u304c\u542b\u307e\u308c\u307e\u3059\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/display-settings.png",width:"350",mdxType:"Figure"},"TouchGFX Generator\u306e\uff3bDisplay\uff3d\u8a2d\u5b9a"),(0,n.kt)("h2",p({},{id:"interface-and-dimensions"}),"\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u5bf8\u6cd5"),(0,n.kt)("p",null,"\u73fe\u5728\u3001STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u306f\u3001\u6b21\u306b\u793a\u3059\u3088\u3046\u306a\u8907\u6570\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30ec\u30ebRGB\uff08LTDC\uff09"),(0,n.kt)("li",{parentName:"ul"},"MIPI DSI"),(0,n.kt)("li",{parentName:"ul"},"FMC"),(0,n.kt)("li",{parentName:"ul"},"SPI")),(0,n.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304cLTDC\u307e\u305f\u306fFMC\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u63a5\u7d9a\u3055\u308c\u305f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u5834\u5408\u3001TouchGFX Generator\u306f\u3001\u63a5\u7d9a\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u8ee2\u9001\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002 DSI\u304a\u3088\u3073SPI\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30c9\u30e9\u30a4\u30d0\u306f\u3001\u958b\u767a\u8005\u81ea\u8eab\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"\u3055\u307e\u3056\u307e\u306a\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30b3\u30fc\u30c9\u306e\u5177\u4f53\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(l.Z,{to:"../../scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"\u30b7\u30ca\u30ea\u30aa"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",p({},{id:"framebuffer-pixel-format"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,n.kt)("p",null,"TouchGFX Generator\u306b\u3088\u3063\u3066\u3001\u4ee5\u4e0b\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u73fe\u5728\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002 Custom\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3059\u3079\u3066\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u3001\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a2d\u5b9a\u306b\u5236\u9650\u3055\u308c\u307e\u3059\uff08\u305f\u3068\u3048\u3070\u3001LTDC\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5f62\u5f0f\u3092\u300cRGB565\u300d\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001TouchGFX Generator\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u300cRGB565\u300d\u306b\u5236\u9650\u3055\u308c\u307e\u3059\uff09\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"BW\uff081bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"Grey2\uff082bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"Grey4\uff084bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"ABRG2222\uff088bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"ARGB2222\uff088bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"BGRA2222\uff088bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"RGBA2222\uff088bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"RGB565\uff0816bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"RGB888\uff0824bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"ARGB8888\uff0832bpp\uff09"),(0,n.kt)("li",{parentName:"ol"},"XRGB8888\uff0832bpp\uff09")),(0,n.kt)(c.Z,{mdxType:"Note"},"\u4e00\u90e8\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u306f\u3001ChromART\uff08DMA2D\uff09\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u306a\u3044\u304b\u3001\u4e00\u90e8\u306e\u307f\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",p({},{id:"framebuffer-stride"}),"Framebuffer Stride"),(0,n.kt)("p",null,"For some display interfaces (e.g. MIPI-DSI) having a larger framebuffer stride than the actual width of the display can increase the data transfer rate to the display if the larger stride is better aligned with the data packet size. Use of a larger framebuffer stride can be configured as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No")," - The framebuffer stride and display width are equal in size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Yes")," - Allows the user to specify a framebuffer stride length.")),(0,n.kt)("h2",p({},{id:"buffering-strategies"}),"\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u6226\u7565\u3068\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3"),(0,n.kt)("p",null,"TouchGFX Generator\u3092\u4ecb\u3057\u3066\u3001\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u6226\u7565\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Single Buffer")," - \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u30921\u3064\u3060\u3051\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u5236\u9650\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u30e1\u30e2\u30ea\u306e\u4f7f\u7528\u91cf\u306f\u5c11\u306a\u304f\u3066\u6e08\u307f\u307e\u3059\u3002 \uff3bBuffer Location\uff3d\u8a2d\u5b9a\u3067\u4f7f\u7528\u3057\u3066\u3001\u5185\u90e8RAM\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002 \u3055\u3089\u306b\u6700\u9069\u5316\u3059\u308b\u306b\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u3088\u3063\u3066\u73fe\u5728\u51e6\u7406\u3055\u308c\u3066\u3044\u308b\u30e9\u30a4\u30f3\u3092\u8fd4\u3059\u95a2\u6570\u3092\u30e6\u30fc\u30b6\u304c\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3001\u3053\u306e\u30d5\u30ec\u30fc\u30e0\u4e2d\u306b\u3059\u3067\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u6e08\u307f\u306e\u30e1\u30e2\u30ea\u3078\u306e\u66f4\u65b0\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Double Buffer")," - 2\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u901a\u5e38\u3001\u591a\u304f\u306e\u30e1\u30e2\u30ea\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u304c\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u5411\u4e0a\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Partial Buffer")," - 1\u3064\u4ee5\u4e0a\u306e\u30e6\u30fc\u30b6\u5b9a\u7fa9\u306e\u30e1\u30e2\u30ea\u9818\u57df\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002 \u3053\u306e\u6226\u7565\u306f\u5916\u90e8RAM\u306b\u983c\u3089\u306a\u3044\u304c\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5168\u4f53\u3067\u306f\u4f7f\u7528\u53ef\u80fd\u306a\u30e1\u30e2\u30ea\u91cf\u3092\u8d85\u3048\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u5834\u5408\u306e\u4f4e\u30b3\u30b9\u30c8\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u3066\u3044\u307e\u3059\u3002")),(0,n.kt)("p",null,"\u30b7\u30f3\u30b0\u30eb\uff65\u30d0\u30c3\u30d5\u30a1\u3068\u30c0\u30d6\u30eb\uff65\u30d0\u30c3\u30d5\u30a1\u306e\u5834\u5408\u3001\u30e6\u30fc\u30b6\u306f\uff3bBuffer Location\uff3d\u8a2d\u5b9a\u3067\u6b21\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u5834\u6240\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"By Allocation")," - \u30ea\u30f3\u30ab\u304c\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u5f93\u3063\u3066\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30e1\u30e2\u30ea\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u5185\u90e8RAM\u3067\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"By Address")," - \u30e6\u30fc\u30b6\u304c1\u3064\uff08\u30b7\u30f3\u30b0\u30eb\uff09\u307e\u305f\u306f2\u3064\uff08\u30c0\u30d6\u30eb\uff09\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30a2\u30c9\u30ec\u30b9\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d0\u30c3\u30d5\u30a1"),"\u6226\u7565\u3067\u306f\u3001\u30e6\u30fc\u30b6\u306f\u4ee5\u4e0b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af\u6570\uff08\u5e38\u306b\u5185\u90e8RAM\u306b\u914d\u7f6e\u3055\u308c\u308b\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af\uff65\u30b5\u30a4\u30ba\uff08\u30d0\u30a4\u30c8\uff09")),(0,n.kt)("p",null,"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d0\u30c3\u30d5\u30a1\u6226\u7565\u306b\u95a2\u3059\u308b\u4e3b\u8981\u306a\u6982\u5ff5\u3092\u7406\u89e3\u3059\u308b\u306b\u306f\u3001\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3057\u3066\u30e1\u30e2\u30ea\u8981\u4ef6\u3092\u8efd\u6e1b\u3059\u308b\u65b9\u6cd5\u306b\u95a2\u3059\u308b",(0,n.kt)("a",p({parentName:"p"},{href:"../../../scenarios/lowering-memory-usage-with-partial-framebuffer"}),"\u5c02\u9580\u306e\u8a18\u4e8b"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u8a18\u4e8b\u306f\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u5b9f\u73fe\u3059\u308b\u65b9\u6cd5\u3092\u6982\u5ff5\u7684\u306b\u793a\u3057\u305f\u3082\u306e\u306a\u306e\u3067\u3001\u3053\u306e\u8a18\u4e8b\u306b\u793a\u3059\u30b3\u30fc\u30c9\u306fTouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3068\u5c11\u3057\u7570\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u6226\u7565\u3067\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306e\u5177\u4f53\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",p({parentName:"p"},{href:"../../scenarios/scenarios-framebuffer-strategies"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u6226\u7565"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(i.Z,{mdxType:"Caution"},(0,n.kt)("b",null,"STM32F7/H7\u306e\u5834\u5408"),"\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\uff65\u30e1\u30e2\u30ea\uff08SRAM\u306a\u3069\uff09\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u308c\u3070\u3001DMA2D\uff08Generator\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\uff09\u304c\u30a2\u30af\u30bb\u30b9\u3059\u308b\u524d\u306b\u3001\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306b\u3088\u3063\u3066DCache\u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002 \u3053\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\uff65\u30e1\u30ab\u30cb\u30ba\u30e0\u3092\u6a5f\u80fd\u3055\u305b\u308b\u306b\u306f\u3001STM32CubeMX\u3067",(0,n.kt)("b",null,"\uff3bCortex M7\uff3d"),"\u306e",(0,n.kt)("b",null,"\uff3bSystem Core\uff3d"),"\u8a2d\u5b9a\u306b\u3042\u308b",(0,n.kt)("b",null,"\uff3bCPU Cache\uff3d"),"\u3092\u5fc5\u305a\u6709\u52b9\u5316\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"CPU\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(l.Z,{to:"../../../board-bring-up/how-to/02-cpu-running#cache-on-f7-and-h7",mdxType:"Link"},"F7\u304a\u3088\u3073H7\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),"\u300d\u30b5\u30d6\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[86997],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||g[h]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),o=r(7029);const i=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),o=r(96151);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const l=a},96151:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const i=o},49018:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),o=r(96151);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}const l=a},21100:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),o=r(96151);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const l=a},18838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>g,default:()=>w,frontMatter:()=>p,metadata:()=>h,toc:()=>s});r(59496);var n=r(49613),o=r(89639),i=r(48753),a=r(95375),l=r(49018),c=r(21100);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"video-decoding",title:"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",sidebar_label:"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"},g=void 0,h={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",title:"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",description:"\uff3bVideo Decoding\uff3d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u958b\u767a\u8005\u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u307e\u305f\u306f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u3044\u305a\u308c\u304b\u306e\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066TouchGFX HAL\u3092\u5f37\u5316\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",draft:!1,tags:[],version:"current",frontMatter:{id:"video-decoding",title:"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",sidebar_label:"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"},sidebar:"docs",previous:{title:"\u8ffd\u52a0\u6a5f\u80fd",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features"},next:{title:"\u30b3\u30fc\u30c9\u306e\u751f\u6210",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/generator-how-to/generating-code"}},m={},s=[{value:"Type",id:"video-decoding-type",level:2},{value:"Concurrent videos",id:"video-decoding-number",level:2},{value:"Strategy",id:"video-decoding-strategy",level:2},{value:"Decode Format",id:"decode-format",level:2},{value:"Buffer size",id:"video-decoding-buffer-size",level:2}],f={toc:s},v="wrapper";function w(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)(v,d({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\uff3bVideo Decoding\uff3d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u958b\u767a\u8005\u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u307e\u305f\u306f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u3044\u305a\u308c\u304b\u306e\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066TouchGFX HAL\u3092\u5f37\u5316\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-decoding.webp",width:"350",mdxType:"Figure"},"TouchGFX Generator\u306e\uff3bVideo Decoding\uff3d\u8a2d\u5b9a"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"TouchGFX\u3067\u306eMJPEG\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u65b9\u6cd5\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)(a.Z,{to:"../../../ui-development/touchgfx-engine-features/video",mdxType:"Link"},"MJPEG Video"),"\u306e\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"\u30d3\u30c7\u30aa\uff65\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3068\u306f\u7570\u306a\u308b\u30c7\u30b3\u30fc\u30c9\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30d3\u30c7\u30aa\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068\u540c\u3058\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30d3\u30c7\u30aa\u306eRGB\u30d0\u30c3\u30d5\u30a1\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"Note"},"\u3059\u3079\u3066\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,n.kt)("br",null),"\u30aa\u30fc\u30c7\u30a3\u30aa\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"),(0,n.kt)("h2",d({},{id:"video-decoding-type"}),"Type"),(0,n.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\uff3bVideo Decoding\uff3d\u306e\uff3bType\uff3d\u306f\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u5fc5\u8981\u306a\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u304cSTM32CubeMX\u3067\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\uff3bSoftware\uff3d\u3068\uff3bHardware\uff3d\u306e\u4e21\u65b9\u304c\u30b0\u30ec\u30fc\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002 \u30de\u30a6\u30b9\u3092\u30b0\u30ec\u30fc\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5408\u308f\u305b\u3001\u5fc5\u8981\u306a\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-dependecies-info-box.webp",width:"600",mdxType:"Figure"},"\uff3bHardware\uff3d\u306e\u30d3\u30c7\u30aa\uff65\u30bf\u30a4\u30d7\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u793a\u3059\u60c5\u5831\u30dc\u30c3\u30af\u30b9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Software")," - STM32CubeMX\u306e\uff3bMiddleware and Software Packs\uff3d\u30bb\u30af\u30b7\u30e7\u30f3\u3067",(0,n.kt)("strong",{parentName:"li"},"LIBJPEG"),"\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001\uff3bSoftware\uff3d\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30c7\u30b3\u30fc\u30c0\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u3064\u307e\u308a\u3001ToughGFX Generator\u306b\u3088\u3063\u3066\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2MJPEG\u30c7\u30b3\u30fc\u30c0\u304c\u751f\u6210\u3055\u308c\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002")),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-sw-decoding-libjpeg.webp",width:"250",mdxType:"Figure"},"STM32CubeMX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067LIBJPEG\u3092\u6709\u52b9\u5316"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Hardware")," - ",(0,n.kt)("strong",{parentName:"li"},"JPEG")," IP\u304c\uff3bMultimedia\uff3d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u6709\u52b9\u306b\u306a\u3063\u3066\u304a\u308a\u3001CMSIS\u6e96\u62e0\u306eRTOS\u304cTouchGFX Generator\u3067\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\uff3bHardware\uff3d\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-hw-decoding-jpeg-ip.webp",width:"250",mdxType:"Figure"},"STM32CubeMX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067JPEG IP\u3092\u6709\u52b9\u5316"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\u5404\u7a2e\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\uff65\u30b7\u30ca\u30ea\u30aa\u306e\u5177\u4f53\u7684\u306a\u30b3\u30fc\u30c9\uff65\u30b5\u30f3\u30d7\u30eb\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(a.Z,{to:"../../scenarios/scenarios-video-decoding",mdxType:"Link"},"\u30b7\u30ca\u30ea\u30aa"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",d({},{id:"video-decoding-number"}),"Concurrent videos"),(0,n.kt)("p",null,"\uff3bConcurrent Videos\uff3d\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u4efb\u610f\u306e\u6642\u70b9\u3067GUI\u306e\u540c\u3058\u753b\u9762\u3067\u540c\u6642\u306b\u30c7\u30b3\u30fc\u30c9\u3055\u308c\u308b\u30d3\u30c7\u30aa\u306e\u6700\u5927\u91cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u753b\u9762\u4e0a\u30671\u3064\u306e\u30d3\u30c7\u30aa\u3092\u30c7\u30b3\u30fc\u30c9\u3059\u308b\u5834\u5408\u306b\u306e\u307f\u3001\uff3bNumber of Videos\uff3d\u30921\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u6700\u5927\u30674\u3064\u306e\u30d3\u30c7\u30aa\u3092\u540c\u6642\u306b\u30c7\u30b3\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",d({},{id:"video-decoding-strategy"}),"Strategy"),(0,n.kt)("p",null,"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u65b9\u5f0f\u306b\u95a2\u3057\u3066\u3001\u958b\u767a\u8005\u306b\u306f\u6b21\u306e3\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Direct to Framebuffer")," - \u30d3\u30c7\u30aa\u306fUI\u30b9\u30ec\u30c3\u30c9\u3067\u30c7\u30b3\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u4ed6\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3088\u308a\u3082\u9045\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u30d3\u30c7\u30aa\uff65\u30d5\u30ec\u30fc\u30e0\u7528\u306e\u30d0\u30c3\u30d5\u30a1\u304c\u306a\u3044\u305f\u3081\u3001RAM\u304c\u7bc0\u7d04\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Single Buffer")," - \u30d3\u30c7\u30aa\u306f1\u3064\u306e\u5c02\u7528\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3057\u3001\uff11\u3064\u306e\u5c02\u7528\u30bf\u30b9\u30af\u3067\u30c7\u30b3\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30d0\u30c3\u30d5\u30a1\u306f\u5185\u90e8\u30e1\u30e2\u30ea\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Double Buffer")," - \u30d3\u30c7\u30aa\u306f2\u3064\u306e\u5c02\u7528\u30d0\u30c3\u30d5\u30a1\u3092\u4f7f\u7528\u3057\u3001\uff11\u3064\u306e\u5c02\u7528\u30bf\u30b9\u30af\u3067\u30c7\u30b3\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u591a\u304f\u306e\u30e1\u30e2\u30ea\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u304c\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u5411\u4e0a\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,"\u30b7\u30f3\u30b0\u30eb\u307e\u305f\u306f\u30c0\u30d6\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u65b9\u5f0f\u3092\u63a1\u7528\u3059\u308b\u5834\u5408\u3001CMSIS\u6e96\u62e0\u306eOS\u3092\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/video-rtos-requirement-info-box.webp",width:"600",mdxType:"Figure"},"CMSIS RTOS\u8981\u4ef6\u306b\u95a2\u3059\u308b\u60c5\u5831\u30dc\u30c3\u30af\u30b9"),(0,n.kt)(l.Z,{mdxType:"Note"},"\u30c0\u30d6\u30eb\uff65\u30d0\u30c3\u30d5\u30a1\u65b9\u5f0f\u3092\u63a1\u7528\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u30e1\u30e2\u30ea\u6d88\u8cbb\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306eFreeRTOS\u8a2d\u5b9a\u306e\u5177\u4f53\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(a.Z,{to:"../../scenarios/scenarios-video-decoding",mdxType:"Link"},"\u30b7\u30ca\u30ea\u30aa"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",d({},{id:"decode-format"}),"Decode Format"),(0,n.kt)("p",null,"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u5834\u5408\u3001\u958b\u767a\u8005\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u95a2\u4fc2\u306a\u304f\u3001RGB\u30d0\u30c3\u30d5\u30a1\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002 TouchGFX Generator\u306f\u3001\u3053\u308c\u3089\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u7570\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306b\u3001DMA2D\uff08ChromART\uff09\u3067\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u63db\u3092\u5b9f\u884c\u3067\u304d\u308b\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RGB565")," - \u30d3\u30c7\u30aa\u306eRGB\u30d0\u30c3\u30d5\u30a1\u306f16\u30d3\u30c3\u30c8\u3067\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RGB888")," - \u30d3\u30c7\u30aa\u306eRGB\u30d0\u30c3\u30d5\u30a1\u306f24\u30d3\u30c3\u30c8\u3067\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RGB8888")," - \u30d3\u30c7\u30aa\u306eRGB\u30d0\u30c3\u30d5\u30a1\u306f32\u30d3\u30c3\u30c8\u3067\u3059\u3002 \u30a2\u30eb\u30d5\u30a1\u5024\u306f255\u3067\u3059\u3002")),(0,n.kt)(c.Z,{mdxType:"Tip"},"RGB888\uff0824\u30d3\u30c3\u30c8\uff09\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\uff65\u30d0\u30c3\u30d5\u30a1\u3092RGB565\uff0816\u30d3\u30c3\u30c8\uff09\u306b\u3059\u308b\u3068\u3001\u958b\u767a\u8005\u306f\u30e1\u30e2\u30ea\uff65\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u3092\u5c0f\u3055\u304f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",d({},{id:"video-decoding-buffer-size"}),"Buffer size"),(0,n.kt)("p",null,"\u30d0\u30c3\u30d5\u30a1\u306e\u5e45\u3068\u9ad8\u3055\u306e\u8a2d\u5b9a\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u5927\u30d3\u30c7\u30aa\uff65\u30b5\u30a4\u30ba\u3088\u308a\u5927\u304d\u3044\u304b\u7b49\u3057\u304f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,n.kt)("strong",{parentName:"p"},"\u5e45\u306f32\u3067\u5272\u308a\u5207\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")))}w.isMDXComponent=!0}}]);
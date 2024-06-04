"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[13815],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,h=m["".concat(i,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93822:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59496),a=n(96151);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const c=l},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},49018:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59496),a=n(96151);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const c=l},34762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>T,frontMatter:()=>p,metadata:()=>m,toc:()=>s});n(59496);var r=n(49613),a=n(89639),o=n(49018),l=n(93822);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"scenarios-ltdc-parallel-rgb",title:"LTDC / \u30d1\u30e9\u30ec\u30ebRGB"},u=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",id:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",title:"LTDC / \u30d1\u30e9\u30ec\u30ebRGB",description:"TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u5099\u3048\u305f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9(STM32F429\u3001STM32F746\u3001STM32H7\u306a\u3069)\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u3088\u3046\u306bLTDC\u3092\u8a2d\u5b9a\u3059\u308bHAL\u306e\u4e00\u90e8\u5206\u3092 TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3067\u304d\u307e\u3059\u3002 LTDC\u306b\u3088\u3063\u3066VSYNC\u5272\u8fbc\u307f\u304c\u751f\u6210\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u30b3\u30fc\u30c9\u304cOSWrappers::signalVSync()\u3092\u547c\u3073\u51fa\u3057\u3001\u9069\u5207\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001\u3092\u958b\u59cb\u3059\u308b\u3068\u3068\u3082\u306b\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-ltdc-parallel-rgb",title:"LTDC / \u30d1\u30e9\u30ec\u30ebRGB"},sidebar:"docs",previous:{title:"Scenarios",permalink:"/4.24/ja/docs/category/scenarios"},next:{title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"}},d={},s=[{value:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",id:"display-interface",level:3},{value:"STM32CubeMX\u304b\u3089\u306e\u8a2d\u5b9a\u306e\u8aad\u51fa\u3057",id:"reading-settings-from-stm32cubemx",level:2},{value:"TouchGFX\u30c9\u30e9\u30a4\u30d0 / VSYNC\u4fe1\u53f7",id:"touchgfx-driver--vsync-signal",level:2},{value:"LTDC\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8a2d\u5b9a",id:"ltdc-frame-buffer-configuration",level:2},{value:"\u7d50\u8ad6",id:"conclusion",level:2}],h={toc:s},g="wrapper";function T(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(g,c({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u5099\u3048\u305f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9(STM32F429\u3001STM32F746\u3001STM32H7\u306a\u3069)\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u3088\u3046\u306bLTDC\u3092\u8a2d\u5b9a\u3059\u308bHAL\u306e\u4e00\u90e8\u5206\u3092 ",(0,r.kt)("em",{parentName:"p"},"TouchGFX Generator"),"\u306b\u3088\u3063\u3066\u751f\u6210\u3067\u304d\u307e\u3059\u3002 LTDC\u306b\u3088\u3063\u3066VSYNC\u5272\u8fbc\u307f\u304c\u751f\u6210\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u30b3\u30fc\u30c9\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u3092\u547c\u3073\u51fa\u3057\u3001\u9069\u5207\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001\u3092\u958b\u59cb\u3059\u308b\u3068\u3068\u3082\u306b\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",c({},{id:"display-interface"}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"),(0,r.kt)("p",null,"\u958b\u767a\u8005\u304c\u30c9\u30e9\u30a4\u30d0\u5168\u4f53\u3092\u624b\u52d5\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\uff3bCustom\uff3d\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u306f\u7570\u306a\u308a\u3001LTDC\u306e\u5834\u5408\u306f\u3001TouchGFX HAL\u304cLTDC\u306e\u8a2d\u5b9a\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30b3\u30fc\u30c9\u3092\u3001TouchGFX Generator\u304c\u3059\u3079\u3066\u751f\u6210\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Generator\u3067\uff3bParallel RGB (LTDC)\uff3d\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001STM32CubeMX\u30ab\u30c6\u30b4\u30ea\uff65\u30ea\u30b9\u30c8\u306eMultimedia\u30b0\u30eb\u30fc\u30d7\u3067\u3001LTDC\u3092\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"LTDC\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3001TouchGFX Generator\u306eDisplay\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001 Parallel RGB (LTDC)\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"STM32CubeMX\u3067LTDC\u3092\u6709\u52b9\u5316\u3057\u3066\u3082\u3001\u4ee5\u4e0b\u3092\u884c\u3046\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u4f5c\u696d\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u63a5\u7d9a\u3059\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u4ed5\u69d8\u306b\u5408\u308f\u305b\u305fLTDC\u306e\u8a2d\u5b9a(GPIO\u3068\u30bf\u30a4\u30df\u30f3\u30b0)"),(0,r.kt)("li",{parentName:"ol"},"\u76ee\u7684\u3068\u3059\u308bTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4ed5\u69d8\u306b\u5408\u308f\u305b\u305fLTDC\u306e\u8a2d\u5b9a")),(0,r.kt)("p",null,"TouchGFX Generator\u306f\u3001STM32CubeMX\u304b\u3089\u5404\u7a2e\u8a2d\u5b9a\u3092\u8aad\u307f\u51fa\u3057\u3001\u4f9d\u5b58\u95a2\u4fc2\u3068\u547c\u3070\u308c\u308b\u3001\u8b66\u544a\u3001\u63a8\u5968\u4e8b\u9805\u3001\u307e\u305f\u306f\u30a8\u30e9\u30fc\u306e\u30ea\u30b9\u30c8\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u4e0b\u56f3\u306f\u3001CubeMX\u3067\u3001\u4efb\u610f\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9(\u3053\u306e\u4f8b\u3067\u306fSTM32F429) \u306b\u3064\u3044\u3066\u3001LTDC\u3092\u6700\u521d\u306b\u6709\u52b9\u5316\u3057\u305f\u3068\u304d\u306b\u8868\u793a\u3055\u308c\u308b\u4f9d\u5b58\u95a2\u4fc2\u306e\u30ea\u30b9\u30c8\u3067\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.webp",mdxType:"Figure"}),(0,r.kt)(o.Z,{mdxType:"Note"},"STM32CubeMX\u3067LTDC\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3059\u3050\u306b\u3001TouchGFX Generator\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u3001LTDC\u306b\u95a2\u3059\u308b\u63a8\u5968\u4e8b\u9805\u3001\u8b66\u544a\u3001\u304a\u3088\u3073\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u4f9d\u5b58\u95a2\u4fc2"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u30ec\u30a4\u30e4\u6570"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"TouchGFX\u306b\u306f\u3001\u5358\u4e00\u30ec\u30a4\u30e4\u306e\u307f\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002 TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30012\u3064\u306e\u30ec\u30a4\u30e4\u3092\u6709\u52b9\u5316\u3057\u3066\u3082\u52d5\u4f5c\u3057\u307e\u3059\u304c\u3001\u3053\u306e\u8b66\u544a\u306fLTDC\u306e\u8a2d\u5b9a\u30df\u30b9\u306e\u53ef\u80fd\u6027\u3092\u6307\u6458\u3057\u3066\u3044\u307e\u3059\u3002 LTDC\u30d6\u30ed\u30c3\u30af\u3067\u30ec\u30a4\u30e4\u6570\u3092\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30f3\u30c9\u30a6\u4f4d\u7f6e"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001LTDC\u30ec\u30a4\u30e4\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u6c34\u5e73\u4f4d\u7f6e\u304a\u3088\u3073\u5782\u76f4\u4f4d\u7f6e\u306f0\u3067\u3059\u3002 \u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u6c34\u5e73\u505c\u6b62\u4f4d\u7f6e\u3068\u5782\u76f4\u505c\u6b62\u4f4d\u7f6e\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5bf8\u6cd5\u3068\u540c\u3058\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u30a2\u30eb\u30d5\u30a1\u5b9a\u6570\u306f0\u3067\u3059"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001LTDC\u30ec\u30a4\u30e4\u306e\u30a2\u30eb\u30d5\u30a1\u5b9a\u6570\u306f0\u3067\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30b0\u30ed\u30fc\u30d0\u30eb\uff65\u30a2\u30eb\u30d5\u30a1\u3092\u5e38\u6642\u4f7f\u7528\u3057\u306a\u3044\u304b\u304e\u308a\u3001\u3053\u306e\u5024\u306f0\u3088\u308a\u5927\u304d\u304f\u3001\u53ef\u80fd\u306a\u3089\u3070255\u3068\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,r.kt)("p",null,"\uff3bMultimedia\uff3d\u30bb\u30af\u30b7\u30e7\u30f3\u3067LTDC\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u3092\u6709\u52b9\u5316\u3057\u305f\u5f8c\u306b\u3001\u5b9f\u969b\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066\uff3bParallel RGB (LTDC)\uff3d\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6b21\u306e\u56f3\u306f\u3001\u8b66\u544a\u3092\u89e3\u6d88\u3059\u308b\u3088\u3046\u306bLTDC\u3092\u8a2d\u5b9a\u3057\u3001TouchGFX Generator\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\uff3bDependencies\uff3d\u30b0\u30eb\u30fc\u30d7\u304c\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u3063\u305f\u72b6\u614b\u3092\u793a\u3057\u3066\u3044\u307e\u3059"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.webp",mdxType:"Figure"}),(0,r.kt)("h2",c({},{id:"reading-settings-from-stm32cubemx"}),"STM32CubeMX\u304b\u3089\u306e\u8a2d\u5b9a\u306e\u8aad\u51fa\u3057"),(0,r.kt)("p",null,"TouchGFX Generator\u3067\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066",(0,r.kt)("em",{parentName:"p"},"Parallel RGB (LTDC)")," \u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e",(0,r.kt)("em",{parentName:"p"},"\u5e45"),"\u3068",(0,r.kt)("em",{parentName:"p"},"\u9ad8\u3055"),"\u304c\u3001LTDC\u8a2d\u5b9a\u306e",(0,r.kt)("em",{parentName:"p"},"\u6c34\u5e73\u958b\u59cb / \u505c\u6b62\u4f4d\u7f6e"),"\u3068",(0,r.kt)("em",{parentName:"p"},"\u5782\u76f4\u958b\u59cb / \u505c\u6b62\u4f4d\u7f6e"),"\u304b\u3089\u7d99\u627f\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5bf8\u6cd5\u306b\u5fdc\u3058\u3066\u30ec\u30a4\u30e4 ",(0,r.kt)("em",{parentName:"p"},"0"),"\u306e\u5bf8\u6cd5\u3092\u5b9a\u7fa9\u3059\u308b\u3068\u3001 ",(0,r.kt)("em",{parentName:"p"},"Dependency")," \u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u65b0\u3057\u3044\u30a8\u30f3\u30c8\u30ea\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e",(0,r.kt)("em",{parentName:"p"},"\u753b\u50cf\u306e\u5e45"),"\u3068",(0,r.kt)("em",{parentName:"p"},"\u753b\u50cf\u306e\u9ad8\u3055"),"\u304c\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30b5\u30a4\u30ba\u306b\u4e00\u81f4\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u901a\u5e38\u306f\u3001\u3053\u308c\u3089\u3092\u4e00\u81f4\u3055\u305b\u308b\u3053\u3068\u304c\u671b\u307e\u3057\u304f\u3001\u305d\u308c\u306b\u3088\u3063\u3066\u8b66\u544a\u306f\u89e3\u6d88\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.webp",mdxType:"Figure"}),(0,r.kt)(l.Z,{mdxType:"Caution"},"TouchGFX Generator\u306f\u3001LTDC\u304c\u6709\u52b9\u306a\u5834\u5408\u3001LTDC\u8a2d\u5b9a\u306e",(0,r.kt)("b",null,"\u5e45"),"\u3068",(0,r.kt)("b",null,"\u9ad8\u3055"),"\u306e\u5024\u3092\u7d99\u627f\u3057\u307e\u3059\u3002 \u305f\u3060\u3057\u3001",(0,r.kt)("b",null,"\u5e45"),"\u3068",(0,r.kt)("b",null,"\u9ad8\u3055"),"\u306f\u3001TouchGFX Generator\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304b\u3089\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u3092\u30a6\u30a3\u30f3\u30c9\u30a6\u306eLTDC\u30ec\u30a4\u30e4\u8a2d\u5b9a\u3068\u7570\u306a\u308b\u5024\u306b\u5909\u66f4\u3059\u308b\u3068\u3001\u8a2d\u5b9a\u306e\u4e0d\u4e00\u81f4\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",c({},{id:"touchgfx-driver--vsync-signal"}),"TouchGFX\u30c9\u30e9\u30a4\u30d0 / VSYNC\u4fe1\u53f7"),(0,r.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066",(0,r.kt)("em",{parentName:"p"},"Parallel RGB (LTDC)"),"\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u958b\u767a\u8005\u306f",(0,r.kt)("em",{parentName:"p"},"LTDC"),"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\uff65\u30c9\u30e9\u30a4\u30d0\u307e\u305f\u306fTouchGFX\u30c9\u30e9\u30a4\u30d0\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.webp",width:"500",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u3001LTDC\u306e\u8a2d\u5b9a\u306b\u5f93\u3063\u3066\u751f\u6210\u3055\u308c\u308bLTDC\u5272\u8fbc\u307f\u3092\u51e6\u7406\u3059\u308b\u5272\u8fbc\u307f\u30cf\u30f3\u30c9\u30e9(STM32F7) \u3067\u3059\u3002 \u751f\u6210\u3055\u308c\u308b\u30cf\u30f3\u30c9\u30e9\u306f\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u3092\u81ea\u52d5\u7684\u306b\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),'extern "C"\nirq void LTDC_IRQHandler(void)\n{\n    if (LTDC->ISR & 1)\n    {\n        LTDC->ICR = 1;\n        if (LTDC->LIPCR == (LTDC->AWCR & 0x7FF) - 1)\n        {\n            //entering active area\n            OSWrappers::signalVSync();\n        }\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Note"},"LTDC\u30c9\u30e9\u30a4\u30d0\u3092\u6a5f\u80fd\u3055\u305b\u308b\u306b\u306f\u3001LTDC NVIC\u8a2d\u5b9a\u307e\u305f\u306f\u30b0\u30ed\u30fc\u30d0\u30ebNVIC\u8a2d\u5b9a\u3067\u3001LTDC\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u5272\u8fbc\u307f\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3068\u3082\u306b\u3001\u30cf\u30f3\u30c9\u30e9\uff65\u30b3\u30fc\u30c9\u306e\u751f\u6210\u3082\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.webp",mdxType:"Figure"}),(0,r.kt)("h2",c({},{id:"ltdc-frame-buffer-configuration"}),"LTDC\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u751f\u6210\u3055\u308c\u305fTouchGFX HAL\u304c\u5b9f\u884c\u6642\u306bLTDC\u306e\u30ec\u30a4\u30e4\uff65\u30ab\u30e9\u30fc\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3092\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3059\u308b\u306e\u3067\u3001\u30e6\u30fc\u30b6\u304cLTDC\u8a2d\u5b9a\u3067\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",c({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,r.kt)("p",null,"TouchGFX Generator\u3067\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066Parallel RGB (LTDC)\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3001\u5fc5\u8981\u306aHAL\u30b3\u30fc\u30c9\u304c\u3059\u3079\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX\u306eLTDC\u8a2d\u5b9a\u306b\u5f93\u3044\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5e45\u3001\u9ad8\u3055\u3001\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 LTDC\u30ec\u30a4\u30e4\u306e",(0,r.kt)("em",{parentName:"li"},"\u5e45"),"\u3068",(0,r.kt)("em",{parentName:"li"},"\u9ad8\u3055"),"\u306f\u3001TouchGFX Designer\u306e\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30b5\u30a4\u30ba\u306b\u3001LTDC\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u5fc5\u8981\u306aTouchGFX\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30c9\u30e9\u30a4\u30d0\u304a\u3088\u3073\u751f\u6210\u3055\u308c\u308b\u30a2\u30bb\u30c3\u30c8\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\uff65\u30bd\u30fc\u30b9\u306bLTDC\u3092\u9078\u629e\u3067\u304d\u3001\u3053\u308c\u306b\u3088\u308aTouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u99c6\u52d5\u3059\u308b\u30cf\u30f3\u30c9\u30e9\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002 LTDC\u8a2d\u5b9a\u306e\u5834\u5408\u3001\u901a\u5e38\u3001\u958b\u767a\u8005\u306f\u5e38\u306b\u63d0\u4f9b\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\uff65\u30c9\u30e9\u30a4\u30d0\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")))}T.isMDXComponent=!0}}]);
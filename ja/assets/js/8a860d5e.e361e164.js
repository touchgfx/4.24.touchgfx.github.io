"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5222],{49613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},28128:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(59496);class r extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const l=r},89639:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(59496),r=a(7029);const l=function(e){const t=e.noShadow||!1,a=e.width,l=e.height,o=(0,r.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:a,height:l,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:a,height:l,src:o})),n.createElement("p",null,e.children))}},60063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});a(59496);var n=a(49613),r=a(89639),l=a(28128);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"using-serial-flash",title:"\u753b\u50cf\u3068\u30d5\u30a9\u30f3\u30c8\u7528\u306b\u30b7\u30ea\u30a2\u30ebFlash\u306e\u4f7f\u7528"},d=void 0,p={unversionedId:"development/scenarios/using-serial-flash",id:"development/scenarios/using-serial-flash",title:"\u753b\u50cf\u3068\u30d5\u30a9\u30f3\u30c8\u7528\u306b\u30b7\u30ea\u30a2\u30ebFlash\u306e\u4f7f\u7528",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30b7\u30ea\u30a2\u30ebFlash\uff08\u307e\u305f\u306f\u305d\u306e\u4ed6\u306e\u975e\u30de\u30c3\u30d7\u30c9\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\uff09\u3092\u4f7f\u7528\u3057\u3066\u753b\u50cf\u3068\u30d5\u30a9\u30f3\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u8aac\u660e\u3059\u308b\u624b\u6cd5\u306f\u3001STM32G0\u3084\u3001\u305d\u306e\u4ed6\u306eRAM\u642d\u8f09\u91cf\u304c\u6975\u3081\u3066\u5c11\u306a\u3044\u30c7\u30d0\u30a4\u30b9\u3067\u7279\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/using-serial-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-serial-flash",permalink:"/4.24/ja/docs/development/scenarios/using-serial-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-serial-flash",title:"\u753b\u50cf\u3068\u30d5\u30a9\u30f3\u30c8\u7528\u306b\u30b7\u30ea\u30a2\u30ebFlash\u306e\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u753b\u50cf\u4fdd\u5b58\u306e\u305f\u3081\u306b\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u3092\u4f7f\u7528",permalink:"/4.24/ja/docs/development/scenarios/using-non-memory-mapped-flash"},next:{title:"\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u7528\u306b\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u3092\u4f7f\u7528",permalink:"/4.24/ja/docs/development/scenarios/fonts-in-unmapped-flash"}},c={},u=[{value:"\u8a2d\u5b9a",id:"configuration",level:2},{value:"\u5b9f\u88c5",id:"implementation",level:2},{value:"\u753b\u50cf",id:"images",level:2},{value:"\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf",id:"font-data",level:2}],h={toc:u},m="wrapper";function f(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(m,o({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30b7\u30ea\u30a2\u30ebFlash\uff08\u307e\u305f\u306f\u305d\u306e\u4ed6\u306e\u975e\u30de\u30c3\u30d7\u30c9\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\uff09\u3092\u4f7f\u7528\u3057\u3066\u753b\u50cf\u3068\u30d5\u30a9\u30f3\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u8aac\u660e\u3059\u308b\u624b\u6cd5\u306f\u3001STM32G0\u3084\u3001\u305d\u306e\u4ed6\u306eRAM\u642d\u8f09\u91cf\u304c\u6975\u3081\u3066\u5c11\u306a\u3044\u30c7\u30d0\u30a4\u30b9\u3067\u7279\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30b7\u30ea\u30a2\u30ebFlash\u3068\u4e00\u7dd2\u306b\u3088\u304f\u4f7f\u7528\u3055\u308c\u308b\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u6982\u8981\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",o({parentName:"p"},{href:"lowering-memory-usage-with-partial-framebuffer"}),"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u3088\u308b\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306e\u8efd\u6e1b"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u307e\u305f\u3001\u975e\u30de\u30c3\u30d7\u30c9Flash\u304b\u3089RAM\u306b\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u65b9\u6cd5\u306e\u6982\u8981\u306b\u3064\u3044\u3066\u3001",(0,n.kt)("a",o({parentName:"p"},{href:"using-non-memory-mapped-flash"}),"\u753b\u50cf\u4fdd\u5b58\u306e\u305f\u3081\u306e\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u306e\u4f7f\u7528"),"\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",o({},{id:"configuration"}),"\u8a2d\u5b9a"),(0,n.kt)("p",null,'TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30b7\u30ea\u30a2\u30ebFlash\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001TouchGFX Generator\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u3001"Additional Features"\u306e\u4e2d\u306b\u3042\u308b"External Data Reader"\u3092\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002'),(0,n.kt)(r.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-settings.png",width:"520",noShadow:!0,mdxType:"Figure"},"Additional Features\u306eData Reader"),(0,n.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001TouchGFX Generator\u306e\u8a2d\u5b9a\u304c\u5909\u66f4\u3055\u308c\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," LCD\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u3055\u3089\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),"\u306e\u30b5\u30d6\u30af\u30e9\u30b9\u3082\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-9}","{2-2,8-9}":!0}),"static TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic ApplicationFontProvider fontProvider;\n...\nvoid touchgfx_init()\n{\n    ...\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n    ...\n}\n")),(0,n.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u306b\u3088\u3063\u3066\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u4f5c\u6210\u3055\u308c\u3001\u305d\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304cdisplay\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3001HAL\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3001ApplicationFontProvider\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u6e21\u3055\u308c\u307e\u3059\u3002 \u3053\u306e3\u3064\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001dataReader\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b7\u30ea\u30a2\u30ebFlash\u5185\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002 \u305d\u306e\u30c7\u30fc\u30bf\u306f\u753b\u50cf\u307e\u305f\u306f\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u306e\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\uff65\u30d7\u30ed\u30b0\u30e9\u30de\u306f\u3001\u5b9f\u969b\u306bFlash\u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308b\u305f\u3081\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u30af\u30e9\u30b9\u306e\u5b9f\u88c5\u3092\u5b8c\u4e86\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",o({},{id:"implementation"}),"\u5b9f\u88c5"),(0,n.kt)("p",null,"TouchGFXDataReader\u30af\u30e9\u30b9\u306f\u3001touchgfx::FlashDataReader\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002 \u3053\u306e\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u306f\u6b21\u306e4\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u304c\u3042\u308a\u3001\u305d\u308c\u305e\u308c\u3092\u7279\u5b9a\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"include/touchgfx/hal/FlashDataReader.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"    bool addressIsAddressable(const void* address)\n    void copyData(const void* src, void* dst, uint32_t bytes)\n    void startFlashLineRead(const void* src, uint32_t bytes)\n    const uint8_t* waitFlashReadComplete()\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addressIsAddressable"),"\u30e1\u30bd\u30c3\u30c9\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u30af\u30e9\u30b9\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3001\u30c7\u30fc\u30bf\u3092\u76f4\u63a5\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u304b\uff08\u3059\u306a\u308f\u3061\u3001\u5185\u90e8RAM\u307e\u305f\u306f\u5185\u90e8Flash\u5185\u306b\u3042\u308b\u306e\u304b\uff09\u3001\u3042\u308b\u3044\u306fdataReader\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u7d4c\u7531\u3067\u8aad\u307f\u53d6\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u304b\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"copyData"),"*\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30c7\u30fc\u30bf\u3092Flash\u304b\u3089RAM\u3078\u540c\u671f\u7684\u306b\u30b3\u30d4\u30fc\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u6a5f\u80fd\u306f\u4e00\u822c\u7684\u306b\u3001\u305d\u308c\u4ee5\u4e0a\u306e\u30c7\u30fc\u30bf\u51e6\u7406\u3092\u884c\u308f\u306a\u3044\u5834\u5408\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001 \u5857\u308a\u3064\u3076\u3057\u753b\u50cf\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u30b3\u30d4\u30fc\u3059\u308b\u5834\u5408\u306a\u3069\u3067\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"startFlashLineRead"),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001Flash\u304b\u3089\u8907\u6570\u884c\u306e\u30c7\u30fc\u30bf\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 ",(0,n.kt)("inlineCode",{parentName:"p"},"startFlashLineRead"),"\u30e1\u30bd\u30c3\u30c9\u306f\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u53d6\u308a\u3092\u59cb\u52d5\u3057\u307e\u3059\u3002 \u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u975e\u540c\u671f\u7684\u306a\u8aad\u307f\u53d6\u308a\u3092\u59cb\u52d5\u3057\u3001\u8aad\u307f\u53d6\u308a\u958b\u59cb\u5f8c\u306b\u3059\u3050\u306b\u623b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 waitFlashReadComplete\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u8aad\u307f\u53d6\u308a\u306e\u7d42\u4e86\u3092\u5f85\u3061\u3001\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u30d0\u30c3\u30d5\u30a1\u306b\u30dd\u30a4\u30f3\u30bf\u3092\u8fd4\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u306f\u3001\uff08\u4e00\u90e8\u306e\u72b6\u6cc1\u3067\uff09\u524d\u306b\u8aad\u307f\u53d6\u3063\u305f\u30c7\u30fc\u30bf\u306e\u51e6\u7406\u4e2d\u306b\u30011\u3064\u306eFlash\u8aad\u307f\u53d6\u308a\u547d\u4ee4\u3092\u767a\u884c\u3067\u304d\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u5b8c\u5168\u306a\u540c\u6642\u51e6\u7406\u3092\u884c\u3046\u306b\u306f\u3001dataReader\u5185\u306b\u5c11\u306a\u304f\u3068\u30822\u3064\u306e\u30d0\u30c3\u30d5\u30a1\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"TouchGFX Generator\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"FlashDataReader"),"\u3092\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u3068",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u306e2\u3064\u306e\u30af\u30e9\u30b9\u306b\u751f\u6210\u3057\u307e\u3059\u3002 2\u3064\u306e\u3046\u3061",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u306e\u65b9\u304c\u30b9\u30fc\u30d1\u30fc\u30af\u30e9\u30b9\u3067\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u5b9f\u88c5\u3055\u308c\u307e\u3059\u3002 \u305d\u306e\u5b9f\u88c5\u304c\u9069\u3055\u306a\u3044\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30d7\u30ed\u30b0\u30e9\u30de\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u30af\u30e9\u30b9\u5185\u3067\u4eee\u60f3\u95a2\u6570\u306e\u5b9f\u88c5\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u304c\u5b9f\u88c5\u3055\u308c\u308b\u3068\u3001\u305d\u308c\u304c\u52d5\u4f5c\u3059\u308b\u305f\u3081\u306bC\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30b7\u30b9\u30c6\u30e0\uff65\u30d7\u30ed\u30b0\u30e9\u30de\u304c\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),'extern "C" __weak void DataReader_WaitForReceiveDone();\nextern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\nextern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\n\nvoid TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)\n{\n    /* Start transfer using DMA */\n    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);\n}\n')),(0,n.kt)("p",null,"\u3053\u306e\u5b9f\u88c5\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"MB1642BDataReader.c"),"\u30d5\u30a1\u30a4\u30eb\u306b\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDataReader.c"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    readDataDMA(address24, buffer, length);\n}\n\nvoid readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    // Pull Flash CS pin low\n    isReceivingData = 1;\n    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;\n\n    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;\n\n    ...\n}\n")),(0,n.kt)("p",null,"\u3053\u306e\u5b9f\u88c5\u306f\u3001Flash\u3067\u4f7f\u7528\u3055\u308c\u308b\u30d7\u30ed\u30c8\u30b3\u30eb\u3068\u3001SPI\u3084CS\u7528\u306b\u4f7f\u7528\u3055\u308c\u308bGPIO\u306b\u7279\u5316\u3057\u305f\u3082\u306e\u3067\u3059\u3002 \u6a5f\u80fd\u3055\u305b\u308b\u305f\u3081\u306b\u306f\u30013\u3064\u306eC\u95a2\u6570\u306e\u3059\u3079\u3066\u3092",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u30af\u30e9\u30b9\u5411\u3051\u306b\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",o({},{id:"images"}),"\u753b\u50cf"),(0,n.kt)("p",null,"\u6982\u8981\u3067\u89e6\u308c\u305f\u3088\u3046\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u30af\u30e9\u30b9\u306f\u3001dataReader\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u7d4c\u7531\u3067\u753b\u50cf\u30d4\u30af\u30bb\u30eb\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3092\u6a5f\u80fd\u3055\u305b\u308b\u306b\u306f\u3001\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5909\u66f4\u3057\u3066\u3001\u5185\u90e8Flash\u7bc4\u56f2\u5916\u306e\u30a2\u30c9\u30ec\u30b9\u7bc4\u56f2\u306b\u753b\u50cf\u3092\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"STM32G071\u3067\u306f\u3001\u30b7\u30ea\u30a2\u30ebFlash\u306e\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3068\u3057\u3066\u30010x90000000\u3068\u3044\u3046\u30a2\u30c9\u30ec\u30b9\u3092\u9078\u629e\u6e08\u307f\u3067\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"gcc/STM32G071RBTX_FLASH.ld"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n\n/* Sections */\nSECTIONS\n{\n  ...\n\n  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n}\n")),(0,n.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"ExtFlashSection"),"\u3068",(0,n.kt)("inlineCode",{parentName:"p"},"FontFlashSection"),"\u304c\u30010x90000000\u30a2\u30c9\u30ec\u30b9\u7bc4\u56f2\u5185\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u6b8b\u3063\u3066\u3044\u308b\u30bf\u30b9\u30af\u306f\u3001\u30d5\u30e9\u30c3\u30b7\u30e3\uff65\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u5916\u90e8Flash\u306b\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u3059\u3002"),(0,n.kt)("p",null,"STM32CubeProgrammer\u7528\u306eFlash\u30ed\u30fc\u30c0\u306e\u4f5c\u6210\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001\u6b21\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30bb\u30af\u30b7\u30e7\u30f32.3.3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25"}),"UM2237 STMCubeProgrammer\u30e6\u30fc\u30b6\u30de\u30cb\u30e5\u30a2\u30eb")),(0,n.kt)("h2",o({},{id:"font-data"}),"\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf"),(0,n.kt)("p",null,"\u4e0a\u8a18\u306e\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u306f\u3001\u30d5\u30a9\u30f3\u30c8\u306e\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3068\u30d5\u30a9\u30f3\u30c8\u30fb\u30ad\u30e3\u30e9\u30af\u30bf\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\uff08\u5e45\u3068\u9ad8\u3055\uff09\u304c\u5916\u90e8Flash\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\uff08\u3069\u3061\u3089\u306e\u30bf\u30a4\u30d7\u306e\u30c7\u30fc\u30bf\u3082FontFlashSection\u5185\u306b\u3042\u308a\u307e\u3059\uff09\u3002 \u3053\u306e\u30c7\u30fc\u30bf\u3082\u3001\u753b\u9762\u4e0a\u306b\u6587\u5b57\u3092\u63cf\u753b\u3059\u308b\u3068\u304d\u306bdataReader\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u7d4c\u7531\u3067\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,'"Unmapped Storage Format"\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u3068',(0,n.kt)("inlineCode",{parentName:"p"},"include/touchgfx/hal/Config.hpp"),"\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3057\u3066\u3001\u30d5\u30a9\u30f3\u30c8\u30fb\u30ad\u30e3\u30e9\u30af\u30bf\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u5185\u90e8Flash\u306b\u79fb\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30d5\u30a9\u30f3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",o({parentName:"p"},{href:"fonts-in-unmapped-flash"}),"\u975e\u30de\u30c3\u30d7\u30c9\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u5185\u306e\u30d5\u30a9\u30f3\u30c8"),"\u306b\u95a2\u3059\u308b\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);
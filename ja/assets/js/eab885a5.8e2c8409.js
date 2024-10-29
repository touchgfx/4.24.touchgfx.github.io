"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[85081],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=a},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},90052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(59496);var r=n(49613),a=n(28128),o=n(89639);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"animation-storage",title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8"},p=void 0,u={unversionedId:"development/ui-development/touchgfx-engine-features/animation-storage",id:"development/ui-development/touchgfx-engine-features/animation-storage",title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8",description:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306fTouchGFX\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u8ffd\u52a0\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3067\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u9077\u79fb\u4e2d\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/animation-storage.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/animation-storage",permalink:"/4.24/ja/docs/development/ui-development/touchgfx-engine-features/animation-storage",draft:!1,tags:[],version:"current",frontMatter:{id:"animation-storage",title:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8"},sidebar:"docs",previous:{title:"\u753b\u50cf\u306e\u5727\u7e2e",permalink:"/4.24/ja/docs/development/ui-development/touchgfx-engine-features/image-compression"},next:{title:"UI Components",permalink:"/4.24/ja/docs/category/ui-components"}},s={},m=[{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u8a2d\u5b9a",id:"setup-the-animation-storage",level:2},{value:"\u30b9\u30e9\u30a4\u30c9\u306e\u5207\u308a\u66ff\u3048",id:"slide-transition",level:2},{value:"SnapshotWidget\u306b\u3088\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u4f7f\u7528",id:"using-animation-storage-with-snapshotwidget",level:2},{value:"\u753b\u50cf\u306b\u3088\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u4f7f\u7528",id:"using-animation-storage-with-image",level:2}],d={toc:m},g="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306fTouchGFX\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u8ffd\u52a0\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3067\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u9077\u79fb\u4e2d\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u8d77\u52d5\u6642\u306bTouchGFX\u3092\u4f7f\u7528\u3057\u3066\u624b\u52d5\u3067\u5272\u308a\u5f53\u3066\u3001\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u3001\u30b9\u30e9\u30a4\u30c9\u5207\u308a\u66ff\u3048\u3084SnapshotWidget\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u307e\u305f\u3001\u901a\u5e38\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",i({},{id:"setup-the-animation-storage"}),"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\uff65\u30d0\u30c3\u30d5\u30a1\u306e\u30b5\u30a4\u30ba\u306f\u3001\u901a\u5e38\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068\u540c\u3058\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304c16\u30d3\u30c3\u30c8\uff65\u30ab\u30e9\u30fc\u3067480 x 272\u30d4\u30af\u30bb\u30eb\u306e\u5834\u5408\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306f\u305d\u308c\u305e\u308c480 x 272 x 2 = 261,120\u30d0\u30a4\u30c8\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u3001\u914d\u5217\u307e\u305f\u306f\u660e\u793a\u7684\u306a\u30a2\u30c9\u30ec\u30b9\u3092\u4f7f\u7528\u3057\u3066\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\uff08TouchGFX Generator\u3067\u306f\u8a2d\u5b9a\u3067\u304d\u307e\u305b\u3093\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),'namespace\n{\nLOCATION_PRAGMA("TouchGFX_Framebuffer")\nuint16_t animationBuffer[480 * 272] LOCATION_ATTRIBUTE_NOLOAD("TouchGFX_Framebuffer");\n}\n')),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001130,560\u30d0\u30a4\u30c8\u306e16\u30d3\u30c3\u30c8\u6574\u6570\u306e\u914d\u5217\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b5\u30a4\u30ba\u306b\u4e00\u81f4\u3057\u300116\u30d3\u30c3\u30c8\u306e\u30a2\u30e9\u30a4\u30e1\u30f3\u30c8\u304c\u78ba\u4fdd\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"HAL\u3067\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u30d0\u30c3\u30d5\u30a1\u3092TouchGFX\u306b\u6e21\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void TouchGFXHAL::initialize()\n{\n    TouchGFXGeneratedHAL::initialize();\n    setAnimationStorage((void*)animationBuffer);    // Add animation storage\n}\n")),(0,r.kt)("p",null,"\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306b\u3088\u3063\u3066\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\uff65\u30a2\u30c9\u30ec\u30b9\u304c\u30af\u30ea\u30a2\u3055\u308c\u308b\u305f\u3081\u3001TouchGFXGeneratedHAL::initialize\u3092\u547c\u3073\u51fa\u3057\u305f\u5f8c\u306b\u3001HAL::setAnimationStorage\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",i({},{id:"slide-transition"}),"\u30b9\u30e9\u30a4\u30c9\u306e\u5207\u308a\u66ff\u3048"),(0,r.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\uff65\u30d0\u30c3\u30d5\u30a1\u3092\u5272\u308a\u5f53\u3066\u3001\u767b\u9332\u3059\u308b\u3068\u3001TouchGFX Designer\u3067\u30b9\u30e9\u30a4\u30c9\u306e\u5207\u308a\u66ff\u3048\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305d\u308c\u306b\u306f\u3001\u5207\u308a\u66ff\u3048\u3092\u958b\u59cb\u3059\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u3067\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{width:"90%",imageSource:"/img/development/ui-development/touchgfx-engine-features/animation-storage/slide-transition-interaction.png",mdxType:"Figure"},"\u30b9\u30e9\u30a4\u30c9\u306e\u5207\u308a\u66ff\u3048\u306b\u3088\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u5909\u66f4"),(0,r.kt)("p",null,"\u4e0a\u306e\u4f8b\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b2\u3064\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u3001Screen1\u3068Screen2\u304c\u3042\u308a\u307e\u3059\u3002 Screen1\u306b\u306fButtonWithLabel\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u3042\u308a\u3001\u307e\u305f\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u3068\u304d\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092Screen2\u306b\u5207\u308a\u66ff\u308f\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305d\u308c\u306b\u306f\u3001\u53f3\u4e0a\u9685\u306e\uff3bInteractions\uff3d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u753b\u50cf\u306b\u793a\u3059\u3088\u3046\u306b\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b9\u30e9\u30a4\u30c9\u306e\u5207\u308a\u66ff\u3048\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u3001TouchGFX\u3067\u306f\u73fe\u5728\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff08Screen1\u3092\u8868\u793a\uff09\u306e\u30b3\u30d4\u30fc\u3092\u4f5c\u6210\u3057\u3066\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u683c\u7d0d\u3057\u307e\u3059\u3002 TouchGFX\u306f\u3001\u6b21\u306bScreen2\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u304c\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u30d4\u30af\u30bb\u30eb\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\uff08Screen2\u304b\u3089\u306e\u30d4\u30af\u30bb\u30eb\u306f\u306a\u306b\u3082\u8868\u793a\u3055\u308c\u307e\u305b\u3093\uff09\u3002 \u5404\u30d5\u30ec\u30fc\u30e0\u3067\u5207\u308a\u66ff\u3048\u304c\u9032\u884c\u3059\u308b\u306b\u3064\u308c\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u306e\u30d4\u30af\u30bb\u30eb\u304c\u3055\u3089\u306b\u5de6\u3078\u3068\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\uff08\u30d4\u30af\u30bb\u30eb\u306e\u8868\u793a\u304c\u5c11\u306a\u304f\u306a\u308a\uff09\u3001Screen2\u304b\u3089\u306e\u30d4\u30af\u30bb\u30eb\u304c\u53f3\u304b\u3089\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/animation-storage/slide-transition-example.png",mdxType:"Figure"},"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u306e\u30d4\u30af\u30bb\u30eb\u3092\u5de6\u306b\u3001Screen2\u304b\u3089\u306e\u30d4\u30af\u30bb\u30eb\u3092\u53f3\u306b\u8868\u793a\u3059\u308b\u30b9\u30e9\u30a4\u30c9\u306e\u5207\u308a\u66ff\u3048"),(0,r.kt)("p",null,"TouchGFX Designer\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306e\u8a2d\u5b9a\u3067\u306f\u3001\u30b9\u30e9\u30a4\u30c9\u306e\u65b9\u5411\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",i({},{id:"using-animation-storage-with-snapshotwidget"}),"SnapshotWidget\u306b\u3088\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"SnapshotWidget\u3092\u4f7f\u7528\u3057\u3066\u3001\u30c7\u30fc\u30bf\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304b\u3089\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30b3\u30d4\u30fc\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\n    void copyFrameBuffer();\nprotected:\n    SnapshotWidget snapshot; ///< The SnapshotWidget that is moved when transitioning.\n};\n\nvoid Screen1View::copyFrameBuffer()\n{\n    snapshot.setPosition(0, 0, HAL::DISPLAY_WIDTH, HAL::DISPLAY_HEIGHT);\n    snapshot.makeSnapshot(); // Copy whole frame buffer to Animation Storage\n}\n")),(0,r.kt)("p",null,"copyFrameBuffer\u30e1\u30bd\u30c3\u30c9\u306f\u3001SnapshotWidget\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"SnapshotWidget\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u5f15\u304d\u7d9a\u304d\u8868\u793a\u3055\u308c\u308b\u5834\u5408\u306b\u306f\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3057\u307e\u3059\u3002 \u3053\u308c\u304c\u610f\u56f3\u3057\u305f\u3082\u306e\u3067\u306a\u3044\u5834\u5408\u306f\u3001\u975e\u8868\u793a\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"    snapshot.setVisible(false);\n")),(0,r.kt)("h2",i({},{id:"using-animation-storage-with-image"}),"\u753b\u50cf\u306b\u3088\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u3001\u901a\u5e38\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u305d\u308c\u306b\u306f\u3001BitmapId BITMAP_ANIMATION_STORAGE = 0xFFFE\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 Image\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"    image1.setBitmap(Bitmap(BITMAP_ANIMATION_STORAGE));\n")),(0,r.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u5bf8\u6cd5\u306f\u3001\u5e38\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5bf8\u6cd5\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b9\u30c8\u30ec\u30fc\u30b8\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3059\u308b\u591a\u304f\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff08\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u306a\u3069\uff09\u3067\u3053\u306e\u65b9\u6cd5\u306b\u5f93\u3063\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);
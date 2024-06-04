"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[82497],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),h=o,m=s["".concat(c,".").concat(h)]||s[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93822:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}const i=l},28128:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const a=o},89639:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(7029);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},21100:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}const i=l},99638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>_,frontMatter:()=>u,metadata:()=>d,toc:()=>m});n(59496);var r=n(49613),o=n(89639),a=n(28128),l=n(93822),i=n(21100);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"scenarios-configure-rtos",title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\uff65\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0"},s=void 0,d={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",id:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\uff65\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX Generator\u3067\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3068\u3068\u3082\u306b\u52d5\u4f5c\u3057\u3066\u3001TouchGFX OSAL\u304c\u6a5f\u80fd\u3059\u308b\u3088\u3046\u306b\u3001STM32CubeMX\u3067\u3055\u307e\u3056\u307e\u306a\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\uff65\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-configure-rtos",title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\uff65\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0"},sidebar:"docs",previous:{title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"},next:{title:"\u30d3\u30c7\u30aa\uff65\u30c7\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"}},h={},m=[{value:"No OS",id:"no-os",level:2},{value:"FreeRTOS\uff08CMSIS V1\u3068CMSIS V2\uff09",id:"freertoscmsis-v1\u3068cmsis-v2",level:2},{value:"\u30ab\u30b9\u30bf\u30e0\uff65\u30bf\u30b9\u30af",id:"\u30ab\u30b9\u30bf\u30e0\u30bf\u30b9\u30af",level:3},{value:"TouchGFX\u30bf\u30b9\u30af",id:"touchgfx\u30bf\u30b9\u30af",level:3},{value:"ThreadX",id:"threadx",level:2},{value:"\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u8a2d\u5b9a",id:"\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u8a2d\u5b9a",level:3},{value:"X-CUBE-AZRTOS\u306e\u8a2d\u5b9a",id:"x-cube-azrtos\u306e\u8a2d\u5b9a",level:3}],T={toc:m},g="wrapper";function _(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,c({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#real-time-operating-system"}),"TouchGFX Generator"),"\u3067\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3068\u3068\u3082\u306b\u52d5\u4f5c\u3057\u3066\u3001TouchGFX OSAL\u304c\u6a5f\u80fd\u3059\u308b\u3088\u3046\u306b\u3001STM32CubeMX\u3067\u3055\u307e\u3056\u307e\u306a\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\uff65\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u3001TouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u95a2\u6570\u3092\u30b3\u30fc\u30eb\u3059\u308b\u3053\u3068\u3067\u958b\u59cb\u3057\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u306e\u30b3\u30fc\u30eb\u306f\u3001\u958b\u767a\u8005\u304cTouchGFX\u3092\u5b9f\u884c\u3057\u305f\u3044\u3068\u8003\u3048\u308b\u30bf\u30b9\u30af\uff65\u30cf\u30f3\u30c9\u30e9\u5185\u3067\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",c({},{id:"no-os"}),"No OS"),(0,r.kt)("p",null,"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306a\u3057\u3067TouchGFX\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001TouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),"\u5185\u306e\u7121\u9650\u306ewhile\u30eb\u30fc\u30d7\u3067\u5b9f\u884c\u3055\u308c\u3001\u3053\u3053\u3067\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u3092\u30b3\u30fc\u30eb\u3059\u308b\u3053\u3068\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC"),"\u4fe1\u53f7\u3092\u30dd\u30fc\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{6}","{6}":!0}),"/* Infinite loop */\n/* USER CODE BEGIN WHILE */\nwhile (1)\n{\n  /* USER CODE END WHILE */\n  MX_TouchGFX_Process();\n  /* USER CODE BEGIN 3 */\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),"\u3092\u30b3\u30fc\u30eb\u3057\u307e\u3059\u3002\u3053\u3053\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC"),"\u304c\u691c\u51fa\u3055\u308c\u308b\u3068\u3001TouchGFX\u304c\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u51e6\u7406\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"void touchgfx_taskEntry()\n{\n    /*\n     * Main event loop will check for VSYNC signal, and then process next frame.\n     *\n     *\u6ce8: VSYNC\u4fe1\u53f7\u304c\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u95a2\u6570\u306f\u3059\u3050\u306b\u30ea\u30bf\u30fc\u30f3\u3057\u307e\u3059\u3002\n     */\n     if (OSWrappers::isVSyncAvailable())\n     {\n         hal.backPorchExited();\n     }\n}\n")),(0,r.kt)("h2",c({},{id:"freertoscmsis-v1\u3068cmsis-v2"}),"FreeRTOS\uff08CMSIS V1\u3068CMSIS V2\uff09"),(0,r.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001TouchGFX\u3067\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306bFreeRTOS\uff08CMSIS V2\uff09\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 CMSIS V1\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3082\u540c\u3058\u8a2d\u5b9a\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"FreeRTOS\u3092\u6709\u52b9\u5316"),"\u3057\u305f\u5f8c\u3001STM32CubeMX\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u306e\u5de6\u5074\u306b\u3042\u308b\uff3bCategories\uff3d\u30ea\u30b9\u30c8\u3067\u3001\uff3bMiddleware\uff3d\u306e\u4e0b\u306b\u3042\u308b\uff3bFREERTOS\uff3d\u30e1\u30cb\u30e5\u30fc\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"TICK_RATE_HZ"),"\u3092",(0,r.kt)("strong",{parentName:"p"},"1000"),"\u306b\u8a2d\u5b9a\u3057\u3066\u30011\u30df\u30ea\u79d2\u3054\u3068\u306b\u30c6\u30a3\u30c3\u30af\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Management scheme"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"TOTAL_HEAP_SIZE"),"\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f",(0,r.kt)("strong",{parentName:"p"},"heap_4"),"\u3092\u4f7f\u7528\u3057\u3001\u30d2\u30fc\u30d7\uff65\u30b5\u30a4\u30ba\u3092",(0,r.kt)("strong",{parentName:"p"},"70000\u30d0\u30a4\u30c8"),"\u306b\u8a2d\u5b9a\u3057\u3066\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5341\u5206\u306a\u5927\u304d\u3055\u306e\u30d2\u30fc\u30d7\u3092\u78ba\u4fdd\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-configure.webp",width:"700",mdxType:"Figure"},"FreeRTO\u7528\u306bTouchGFX\u30bf\u30b9\u30af\u3092\u4f5c\u6210"),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u7279\u5b9a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u8a66\u884c\u932f\u8aa4\u3092\u884c\u3046\u3053\u3068\u3067\u3001\u6700\u9069\u306aTOTAL_HEAP_SIZE\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3068\u3001TouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306b\u5165\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"void MX_TouchGFX_Process(void);\n")),(0,r.kt)("p",null,"\u958b\u767a\u8005\u306f\u3001TouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u5b9f\u884c\u3059\u308bSTM32CubeMX\u3067\u72ec\u81ea\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30bf\u30b9\u30af\u3092\u8a2d\u5b9a\u3059\u308b\u304b\u3001TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()"),"\u30cf\u30f3\u30c9\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",c({},{id:"\u30ab\u30b9\u30bf\u30e0\u30bf\u30b9\u30af"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30bf\u30b9\u30af"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void\xa0touchgfx_taskEntry(void)"),"\u95a2\u6570\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u306b\u3088\u3063\u3066\u30b3\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void MX_TouchGFX_Process(void)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,r.kt)("p",null,"\u958b\u767a\u8005\u306fTouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u5b9f\u884c\u3057\u305f\u3044\u30bf\u30b9\u30af\u306e\u30bf\u30b9\u30af\uff65\u30cf\u30f3\u30c9\u30e9\u5185\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u3092\u30b3\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u6b21\u306e\u4f8b\u306f\u3001\u958b\u767a\u8005\u304cSTM32CubeMX\u3067\u3001\u305f\u3068\u3048\u3070",(0,r.kt)("inlineCode",{parentName:"p"},"MyTask"),"\u3068\u3044\u3046\u540d\u524d\u306eFeeRTOS\u30bf\u30b9\u30af\u3092\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u306b\u3001TouchGFX\u3092\u958b\u59cb\u3059\u308b\u305f\u3081\u306b\u30ab\u30b9\u30bf\u30e0\uff65\u30bf\u30b9\u30af\uff65\u30cf\u30f3\u30c9\u30e9\u5185\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\u3092\u30b3\u30fc\u30eb\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void StartMyTask(void *argument)\n{\n  /* USER CODE BEGIN 5 */\n  MX_TouchGFX_Process();\n  /* USER CODE END 5 */ \n}\n")),(0,r.kt)("h3",c({},{id:"touchgfx\u30bf\u30b9\u30af"}),"TouchGFX\u30bf\u30b9\u30af"),(0,r.kt)("p",null,"TouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306fTouchGFX\u30bf\u30b9\u30af\u5185\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002 TouchGFX Generator\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"app_touchgfx.c"),"\u5185\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),"\u3092\u30b3\u30fc\u30eb\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()"),"\u3068\u3044\u3046\u540d\u524d\u306e\u30bf\u30b9\u30af\uff65\u30cf\u30f3\u30c9\u30e9\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void TouchGFX_Task(void *argument)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,r.kt)("p",null,"\u3053\u306e\u30bf\u30b9\u30af\u3092FreeRTOS\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u306b\u3088\u3063\u3066\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001STM32CubeMX\u306e\uff3bFREERTOS\uff3d\u30e1\u30cb\u30e5\u30fc\u3067\u30bf\u30b9\u30af\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \uff3bTasks and Queues\uff3d\u30bf\u30d6\u3067\u3001\uff3bEntry Function\uff3d\u3092",(0,r.kt)("strong",{parentName:"p"},"TouchGFX_Task"),"\u306b\u8a2d\u5b9a\u3057\u3066\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3057\u3001\uff3bCode Generation Option\uff3d\u3092",(0,r.kt)("strong",{parentName:"p"},"\uff3bAs external\uff3d"),"\u306b\u8a2d\u5b9a\u3057\u3066\u5341\u5206\u306a\u5927\u304d\u3055\u306e\u30b9\u30bf\u30c3\u30af\u3092\u78ba\u4fdd\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-touchgfx-task.webp",mdxType:"Figure"},"FreeRTO\u7528\u306bTouchGFX\u30bf\u30b9\u30af\u3092\u4f5c\u6210"),(0,r.kt)("p",null,"\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u3068\u3001STM32CubeMX\u306b\u3088\u3063\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),"\u306bTouchGFX\u30bf\u30b9\u30af\u304c\u4f5c\u6210\u3055\u308c\u3001\u3053\u308c\u306b\u3088\u3063\u3066TouchGFX\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"SYS\u30bf\u30a4\u30e0\u30d9\u30fc\u30b9\uff65\u30bd\u30fc\u30b9\u304c\u5e38\u306b\u30c6\u30a3\u30c3\u30af\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"HAL_Delay()"),"\u306a\u3069\u306e\u4e00\u90e8\u306e\u30b7\u30b9\u30c6\u30e0\u95a2\u6570\u3067\u4f7f\u7528\uff09\u3092\u53d7\u4fe1\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30bf\u30a4\u30de\u306eNVIC\u512a\u5148\u5ea6\u304c\u3001\u5b89\u5168\u306aFreeRTOS API\u95a2\u6570\u306e\u5272\u8fbc\u307f\u306e\u547c\u51fa\u3057\u3092\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u6700\u3082\u9ad8\u3044\u5272\u8fbc\u307f\u512a\u5148\u5ea6\u3088\u308a\u3082\u9ad8\u3044\uff08\u3064\u307e\u308a\u3001\u756a\u53f7\u304c\u5c0f\u3055\u3044\uff09\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u3001FreeRTOS\u5185\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"configMAX_SYSCALL_INTERRUPT_PRIORITY"),"\u3067\u8a2d\u5b9a\u3067\u304d\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 \u591a\u304f\u306e\u5834\u5408\u3001SYS\u30bf\u30a4\u30e0\u30d9\u30fc\u30b9\uff65\u30bd\u30fc\u30b9\u306b\u4f7f\u7528\u3055\u308c\u308b\u30bf\u30a4\u30de\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"TIM6"),"\u3067\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-nvic-conf.png",mdxType:"Figure"},"systick\u30bf\u30a4\u30de\u306eNVIC\u512a\u5148\u5ea6\u306e\u8a2d\u5b9a"),(0,r.kt)("h2",c({},{id:"threadx"}),"ThreadX"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001X-CUBE\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30af\u307e\u305f\u306f\u30cd\u30a4\u30c6\u30a3\u30d6\u306eThreadX\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3068\u3057\u3066ThreadX\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",c({},{id:"\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u8a2d\u5b9a"}),"\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001STM32U5\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u7528\u306bThreadX\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001ThreadX\u304c\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"Thread\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u6709\u52b9\u5316"),"\u3057\u305f\u5f8c\u3001STM32CubeMX\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u306e\u5de6\u5074\u306b\u3042\u308b\uff3bCategories\uff3d\u30ea\u30b9\u30c8\u3067\u3001\uff3bMiddleware\uff3d\u306e\u4e0b\u306b\u3042\u308b\uff3bTHREADX\uff3d\u30e1\u30cb\u30e5\u30fc\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002 \uff3bMode\uff3d\u30ea\u30b9\u30c8\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"Core"),"\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND"),"\u3092",(0,r.kt)("strong",{parentName:"p"},"1000"),"\u306b\u8a2d\u5b9a\u3057\u30661\u30df\u30ea\u79d2\u3054\u3068\u306b\u30c6\u30a3\u30c3\u30af\u3059\u308b\u3088\u3046\u306b\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Pool Allocation"),"\u3092",(0,r.kt)("strong",{parentName:"p"},"\uff3bUse Static Allocation\uff3d"),"\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/enable-and-configure-native-threadx-mw.webp",width:"700",mdxType:"Figure"},"\u30cd\u30a4\u30c6\u30a3\u30d6\u306eThreadX\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u6709\u52b9\u306b\u3057\u3066\u69cb\u6210\u3059\u308b"),(0,r.kt)(l.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"STM32CubeMX\u306f\u3001",(0,r.kt)("b",null,"\uff3bNative ThreadX Middleware\uff3d"),"\u3092\u4f7f\u7528\u3059\u308b\u3068\u304d\u306b",(0,r.kt)("b",null,"\uff3bMemory Pool Allocation\uff3d"),"\u3092",(0,r.kt)("b",null,"\uff3bUse Static Allocation\uff3d"),"\u306b\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u306e\u307f\u3001\u5b8c\u5168\u306aOSAL\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"\uff3bMemory Pool Allocation\uff3d"),"\u3092",(0,r.kt)("b",null,"\uff3bUse Dynamic Allocation\uff3d"),"\u306b\u8a2d\u5b9a\u3057\u305f\u5834\u5408:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u30e6\u30fc\u30b6\u306f\u3001\u751f\u6210\u3055\u308c\u305f",(0,r.kt)("b",null,"app_azure_rtos.c"),"\u30d5\u30a1\u30a4\u30eb\u306eUSER CODE BEGIN DYNAMIC_MEM_ALLOC\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u3001\u4e0d\u8db3\u3057\u305f\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("li",null,"\u3055\u3089\u306b\u30e6\u30fc\u30b6\u306f\u3001\u751f\u6210\u3055\u308c\u305f",(0,r.kt)("b",null,"app_azure_rtos.c"),"\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u30b3\u30fc\u30c9\uff65\u30b3\u30e1\u30f3\u30c8\u306b\u3088\u3063\u3066\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u63a8\u5968\u4e8b\u9805\u306b\u5f93\u3063\u3066\u3001\u30ea\u30f3\u30ab\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("li",null,"STM32CubeMX\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3088\u3063\u3066\u306f\u3001",(0,r.kt)("b",null,"Dynamic Allocation"),"\u304c\u6b63\u3057\u304f\u52d5\u4f5c\u3057\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002")))),(0,r.kt)("p",null,"STM32CubeMX\u306b\u306f\u3001ThreadX\u306e\u4f7f\u7528\u6642\u306b\u30bf\u30b9\u30af\u306e\u5272\u308a\u5f53\u3066\u3068\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3092\u884c\u3046\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u5f79\u5272\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u306e\u305f\u3081\u3001TouchGFX\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u521d\u671f\u5316\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_PreOSInit()"),"\u95a2\u6570\u3078\u306e\u30b3\u30fc\u30eb\u306f\u3001STM32CubeMX\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306e\u5f8c\u3001ThreadX\u30ab\u30fc\u30cd\u30eb\u3092\u521d\u671f\u5316\u3057\u3066\u958b\u59cb\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"MX_ThreadX_Init()"),"\u95a2\u6570\u3078\u306e\u5225\u306e\u30b3\u30fc\u30eb\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{5,7}","{5,7}":!0}),"int main(void)\n{\n...\n  /* Call PreOsInit function */\n  MX_TouchGFX_PreOSInit();\n...\n  MX_ThreadX_Init();\n...\n}\n")),(0,r.kt)("p",null,"TouchGFX Generator\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()"),"\u95a2\u6570\u3092\u751f\u6210\u3057\u3001\u3053\u306e\u95a2\u6570\u304cTouchGFX\u30b9\u30ec\u30c3\u30c9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{13-20}","{13-20}":!0}),'UINT MX_TouchGFX_Init(VOID *memory_ptr)\n{\n  UINT ret = TX_SUCCESS;\n  CHAR *pointer = 0;\n\n  /* Allocate the stack for TouchGFX Thread.  */\n  if (tx_byte_allocate((TX_BYTE_POOL*)memory_ptr, (VOID **) &pointer,\n                       TOUCHGFX_STACK_SIZE, TX_NO_WAIT) != TX_SUCCESS)\n  {\n    ret = TX_POOL_ERROR;\n  }\n\n  /* Create TouchGFX Thread */\n  else if (tx_thread_create(&TouchGFXThread, (CHAR *)"TouchGFX", TouchGFX_Task, 0,\n                       pointer, TOUCHGFX_STACK_SIZE,\n                       5, 5,\n                       TX_NO_TIME_SLICE, TX_AUTO_START) != TX_SUCCESS)\n  {\n    ret = TX_THREAD_ERROR;\n  }\n\n  return ret;\n}\n')),(0,r.kt)("p",null,"\u3055\u3089\u306bTouchGFX Generator\u306f\u3001TouchGFX\u30bf\u30b9\u30af\u306e\u30d0\u30a4\u30c8\uff65\u30d7\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()"),"\u3092\u30b3\u30fc\u30eb\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001TouchGFX\u30bf\u30b9\u30af\u306e\u30d0\u30a4\u30c8\uff65\u30d7\u30fc\u30eb\u3092\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b",(0,r.kt)("strong",{parentName:"p"},"app_azure_rtos.c"),"\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"tx_application_define()"),"\u95a2\u6570\u306e\u9069\u5207\u306a\u4f4d\u7f6e\u306b\u633f\u5165\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tx_application_define()"),"\u95a2\u6570\u306f\u3001\u521d\u671f\u5316\u6642\u306bThreadX\u30ab\u30fc\u30cd\u30eb\u306b\u3088\u3063\u3066\u30b3\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002 TouchGFX\u30b9\u30ec\u30c3\u30c9\u306f\u3001\u305d\u306e\u5f8cThreadX\u30ab\u30fc\u30cd\u30eb\u304c\u958b\u59cb\u3059\u308b\u3068\u304d\u306b\u958b\u59cb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"app_azure_rtos.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{3-4,9,22}","{3-4,9,22}":!0}),'#include "app_touchgfx.h"\n...\n__ALIGN_BEGIN static UCHAR touchgfx_byte_pool_buffer[TOUCHGFX_APP_MEM_POOL_SIZE] __ALIGN_END;\nstatic TX_BYTE_POOL touchgfx_app_byte_pool;\n...\nVOID tx_application_define(VOID *first_unused_memory)\n{\n  ...\n  if (tx_byte_pool_create(&touchgfx_app_byte_pool, "TouchGFX App memory pool", touchgfx_byte_pool_buffer, TOUCHGFX_APP_MEM_POOL_SIZE) != TX_SUCCESS)\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Error */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Error */\n  }\n  else\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Success */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Success */\n\n    memory_ptr = (VOID *)&touchgfx_app_byte_pool;\n    if (MX_TouchGFX_Init(memory_ptr) != TX_SUCCESS)\n    {\n      /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Error */\n\n      /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Error */\n    }\n    /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Success */\n\n    /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Success */\n  }\n\n  ...\n}\n')),(0,r.kt)("h3",c({},{id:"x-cube-azrtos\u306e\u8a2d\u5b9a"}),"X-CUBE-AZRTOS\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001STM32H7\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u7528\u306bThreadX\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001ThreadX\u304cX-CUBE\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30af\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"X-CUBE\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30af\u3092\u6709\u52b9\u5316"),"\u3057\u305f\u5f8c\u3001STM32CubeMX\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u306e\u5de6\u5074\u306b\u3042\u308b\uff3bCategories\uff3d\u30ea\u30b9\u30c8\u3067\u3001\uff3bSoftware Packs\uff3d\u306e\u4e0b\u306b\u3042\u308b\uff3bX-CUBE-AZRTOS-XX\uff3d\u30e1\u30cb\u30e5\u30fc\u306b\u79fb\u52d5\u3057\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Allocation"),"\u3092",(0,r.kt)("strong",{parentName:"p"},"\uff3bUse Static MemPool Allocation\uff3d"),"\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config1.webp",width:"800",mdxType:"Figure"},"ThreadX\u306e\u8a2d\u5b9a - X-CUBE-AZRTOS\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30af"),(0,r.kt)("p",null,"\uff3bThreadX\uff3d\u8a2d\u5b9a\u30bf\u30d6\u3092\u9078\u629e\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND"),"\u3092",(0,r.kt)("strong",{parentName:"p"},"1000"),"\u306b\u8a2d\u5b9a\u3057\u3066\u30011\u30df\u30ea\u79d2\u3054\u3068\u306b\u30c6\u30a3\u30c3\u30af\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config2.webp",width:"400",mdxType:"Figure"},"ThreadX\u306e\u8a2d\u5b9a - X-CUBE-AZRTOS\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30af"),(0,r.kt)("p",null,"\uff3bX-CUBE-AZRTOS-XX\uff3d\u30e1\u30cb\u30e5\u30fc\u306e\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001TouchGFX Generator\u306b\u79fb\u52d5\u3057\u3066\u3001\uff3bReal Time Operating System\uff3d\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadX"),"\u3092\u9078\u629e\u3057\u3001TouchGFX\u30bf\u30b9\u30af\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Pool Size"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Stack Size"),"\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"FreeRTO\u7528\u306bTouchGFX\u30bf\u30b9\u30af\u3092\u4f5c\u6210"),(0,r.kt)(l.Z,{mdxType:"Caution"},"\u6b8b\u5ff5\u306a\u304c\u3089\u3001TouchGFX 4.21.0\u306e\u6642\u70b9\u3067\u3001X-CUBE-AZRTOS-XX\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3067\u306f\u3001ThreadX\u30c9\u30e9\u30a4\u30d0\u3067TouchGFX\u30bf\u30b9\u30af\u304c\u4f5c\u6210\u304a\u3088\u3073\u521d\u671f\u5316\u3055\u308c\u307e\u305b\u3093\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u52d5\u4f5c\u3055\u305b\u308b\u305f\u3081\u306b\u306f\u3001\u300c\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u8a2d\u5b9a\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u793a\u3057\u305f\u30b3\u30fc\u30c9\uff65\u30b9\u30cb\u30da\u30c3\u30c8\u304b\u3089\u958b\u767a\u8005\u304c",(0,r.kt)("b",null,"\u624b\u52d5\u3067\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0"),"\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))}_.isMDXComponent=!0}}]);
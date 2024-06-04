"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[91744],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=i(r),d=o,m=g["".concat(u,".").concat(d)]||g[d]||h[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[g]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(7029);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,c=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:a,src:c})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:a,src:c})),n.createElement("p",null,e.children))}},11995:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}const a=o},61178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>h});r(59496);var n=r(49613),o=r(89639),a=r(11995);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"enabling-touchgfx-generator",title:"\u555f\u7528Touchgfx Generator",sidebar_label:"\u555f\u7528Touchgfx Generator"},i=void 0,p={unversionedId:"development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",id:"development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",title:"\u555f\u7528Touchgfx Generator",description:"\u4e00\u65e6\u5c07TouchGFX Generator\u5b89\u88dd\u5728STM32CubeMX\u4e4b\u4e2d\uff0c\u5c31\u5fc5\u9808\u5728\u60a8\u7684\u5c08\u6848\u4e2d\u555f\u7528\u3002 \u4f7f\u7528\u8005\u82e5\u9700\u8981\u5b58\u53d6X-CUBE\u5957\u4ef6\u7684\u65b0\u589e\u529f\u80fd\uff0c\u53ef\u4ee5\u6309\u4e0b\u300cSelect Components\u300d(\u9078\u64c7\u5143\u4ef6)\u6309\u9215\u6216\u4f7f\u7528\u6377\u5f91 Alt + o (\u4f4d\u5728STM32CubeMX\u7684\u5c08\u6848\u9078\u55ae)\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to",slug:"/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/enabling-touchgfx-generator",draft:!1,tags:[],version:"current",frontMatter:{id:"enabling-touchgfx-generator",title:"\u555f\u7528Touchgfx Generator",sidebar_label:"\u555f\u7528Touchgfx Generator"},sidebar:"docs",previous:{title:"Generator User Guide",permalink:"/4.24/zh-TW/docs/category/generator-user-guide"},next:{title:"TouchGFX AL\u8a2d\u5b9a",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration"}},g={},h=[],d={toc:h},m="wrapper";function f(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,c({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4e00\u65e6\u5c07",(0,n.kt)("a",c({parentName:"p"},{href:"../../../introduction/installation#using-stm32cubemx"}),"TouchGFX Generator\u5b89\u88dd\u5728STM32CubeMX\u4e4b\u4e2d"),"\uff0c\u5c31\u5fc5\u9808\u5728\u60a8\u7684\u5c08\u6848\u4e2d\u555f\u7528\u3002 \u4f7f\u7528\u8005\u82e5\u9700\u8981\u5b58\u53d6X-CUBE\u5957\u4ef6\u7684\u65b0\u589e\u529f\u80fd\uff0c\u53ef\u4ee5\u6309\u4e0b\u300cSelect Components\u300d(\u9078\u64c7\u5143\u4ef6)\u6309\u9215\u6216\u4f7f\u7528\u6377\u5f91 ",(0,n.kt)(a.Z,{mdxType:"Shortcut"},"Alt + o")," (\u4f4d\u5728STM32CubeMX\u7684\u5c08\u6848\u9078\u55ae)\u3002"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.webp",width:"700",mdxType:"Figure"},"\u5728STM32CubeMX\u9078\u64c7\u5176\u4ed6\u8edf\u9ad4"),(0,n.kt)("p",null,"\u4e0b\u5716\u5c55\u793a\u5728\u5c08\u6848\u4e2d\u5982\u4f55\u555f\u7528TouchGFX Generator\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator-v4.17.webp",width:"400",mdxType:"Figure"},"\u555f\u7528TouchGFX Generator"),(0,n.kt)("p",null,"\u5982\u679c\u70ba\u96d9\u6838MCU\u555f\u7528TouchGFX\uff0c\u8acb\u78ba\u4fdd\u91dd\u5c0d\u6b63\u78ba\u7684\u5167\u5bb9\u555f\u7528\u3002 TouchGFX\u4e00\u6b21\u53ea\u80fd\u70ba\u55ae\u4e00\u5167\u5bb9\u555f\u7528\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator-dual-core-v4.17.webp",width:"400",mdxType:"Figure"},"\u555f\u7528\u9069\u7528\u65bc\u96d9\u6838\u5fc3\u7684TouchGFX Generator"),(0,n.kt)("p",null,"\u5728\u5c08\u6848\u555f\u7528TouchGFX Generator\u4e4b\u5f8c\uff0c\u5c31\u61c9\u8a72\u6703\u51fa\u73fe\u5728",(0,n.kt)("em",{parentName:"p"},"Middleware and Software Packs"),"(\u4e2d\u4ecb\u8edf\u9ad4\u53ca\u5957\u88dd\u8edf\u9ad4)\u4e4b\u4e0b\u5c08\u6848\u9078\u55ae\u5de6\u5074\u7684\u300cCategories\u300d(\u985e\u5225)\u9078\u55ae\u4e2d\uff0c\u53ef\u5728\u5176\u4e2d\u5c07\u5176\u555f\u7528\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/generator-enabled.webp",width:"250",mdxType:"Figure"},"TouchGFX Generator\u5728STM32CubeMX\u5c08\u6848\u4e2d\u7684\u4f4d\u7f6e"),(0,n.kt)("p",null,"\u6700\u5f8c\u555f\u7528TouchGFX Generator\u7684\u65b9\u5f0f\uff0c\u5c31\u662f\u9ede\u64ca",(0,n.kt)("em",{parentName:"p"},"X-CUBE-TOUCHGFX"),"\uff0c\u4e26\u5728\u53f3\u5074\u7a97\u683c\u52fe\u9078",(0,n.kt)("em",{parentName:"p"},"Graphics Application"),"(\u5716\u5f62\u61c9\u7528\u7a0b\u5f0f)\u9078\u9805\u3002 \u9019\u6a23\u61c9\u53ef\u770b\u898bTouchGFX Generator\u7684UI\u8996\u7a97\uff1a"),(0,n.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/generator-graphics-application-enabled.webp",width:"600",mdxType:"Figure"},"TouchGFX Generator\u65bcSTM32CubeMX\u5c08\u6848\u4e2d\u555f\u7528"))}f.isMDXComponent=!0}}]);
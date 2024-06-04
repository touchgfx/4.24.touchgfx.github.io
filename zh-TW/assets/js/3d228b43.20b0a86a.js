"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[54575],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),s=a,m=d["".concat(c,".").concat(s)]||d[s]||h[s]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},93822:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const i=l},89639:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(7029);const o=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const i=l},96151:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},49018:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const i=l},21100:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const i=l},21500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>N,frontMatter:()=>h,metadata:()=>m,toc:()=>f});r(59496);var n=r(49613),a=r(89639),o=r(48753),l=r(95375),i=r(93822),c=r(49018),p=r(21100);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const h={id:"additional-features",title:"\u5176\u4ed6\u529f\u80fd",sidebar_label:"\u5176\u4ed6\u529f\u80fd"},s=void 0,m={unversionedId:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",id:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",title:"\u5176\u4ed6\u529f\u80fd",description:"\u5982\u679c\u5c08\u6848\u8a2d\u5b9a\u4e2d\u6709\u4efb\u4f55\u53ef\u7528\u7684\u5176\u4ed6\u529f\u80fd\uff0c\u5c31\u6703\u51fa\u73fe\u300cAdditional Features\u300d(\u5176\u4ed6\u529f\u80fd)\u7fa4\u7d44\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features.mdx",sourceDirName:"development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration",slug:"/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/additional-features",draft:!1,tags:[],version:"current",frontMatter:{id:"additional-features",title:"\u5176\u4ed6\u529f\u80fd",sidebar_label:"\u5176\u4ed6\u529f\u80fd"},sidebar:"docs",previous:{title:"\u9a45\u52d5\u7a0b\u5f0f",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/driver"},next:{title:"\u5f71\u7247\u89e3\u78bc",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding"}},g={},f=[{value:"\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668",id:"external-data-reader",level:2},{value:"\u5411\u91cf\u6e32\u67d3",id:"vector-rendering",level:2},{value:"\u5411\u91cf\u5b57\u578b\u6e32\u67d3",id:"vector-font-rendering",level:2},{value:"8\u4f4d\u5143LTDC\u8272\u5f69\u67e5\u95b1\u8cc7\u6599\u8868",id:"8bit-ltdc-color-look-up-table",level:2}],v={toc:f},k="wrapper";function N(e){var{components:t}=e,r=d(e,["components"]);return(0,n.kt)(k,u({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5982\u679c\u5c08\u6848\u8a2d\u5b9a\u4e2d\u6709\u4efb\u4f55\u53ef\u7528\u7684\u5176\u4ed6\u529f\u80fd\uff0c\u5c31\u6703\u51fa\u73fe\u300cAdditional Features\u300d(\u5176\u4ed6\u529f\u80fd)\u7fa4\u7d44\u3002"),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-settings.png",width:"350",mdxType:"Figure"},"TouchGFX Generator\u5176\u4ed6\u529f\u80fd\u8a2d\u5b9a"),(0,n.kt)("h2",u({},{id:"external-data-reader"}),"\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668"),(0,n.kt)("p",null,"\u5c0d\u65bcRGB565\u5f71\u50cf\u7de9\u885d\u5340\u50cf\u7d20\u683c\u5f0f\uff0cTouchGFX\u652f\u63f4",(0,n.kt)("em",{parentName:"p"},"Data Reader")," (\u8cc7\u6599\u8b80\u53d6\u5668)\u4ecb\u9762\uff0c\u8b93\u958b\u767c\u4eba\u54e1\u80fd\u5920\u76f4\u63a5\u5f9e\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u7684\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\uff0c\u7121\u9700\u9032\u884c",(0,n.kt)("a",u({parentName:"p"},{href:"../../../ui-development/touchgfx-engine-features/caching-bitmaps"}),"\u5feb\u53d6"),"\uff0c\u800c\u4ee3\u50f9\u5c31\u662f\u5728\u8a18\u61b6\u9ad4\u589e\u52a0\u984d\u5916\u7684\u7de9\u885d\u5340\u3002 \u5982\u9700\u76f8\u95dc\u7bc4\u4f8b\u77ad\u89e3\u5982\u4f55\u5be6\u4f5c\u8cc7\u6599\u8b80\u53d6\u5668\uff0c\u4ee5\u4fbf\u7531\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u7684Flash\u6676\u7247\u4e2d\u64f7\u53d6\u61c9\u7528\u7a0b\u5f0f\u8cc7\u7522\uff0c\u8acb\u53c3\u898b",(0,n.kt)("a",u({parentName:"p"},{href:"../../../scenarios/using-serial-flash"}),"\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4"),"\u4e00\u6587\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Data Reader")," (\u8cc7\u6599\u8b80\u53d6\u5668)\u9078\u9805\u901a\u5e38\u9069\u7528\u65bc\u4f4e\u6210\u672c\u89e3\u6c7a\u65b9\u6848\uff0c\u4f8b\u5982STM32G0\u9019\u985e\u6c92\u6709\u8db3\u5920\u8a18\u61b6\u9ad4\u7528\u65bc\u984d\u5916\u7de9\u885d\u5340\u7684\u89e3\u6c7a\u65b9\u6848\u3002"),(0,n.kt)("p",null,"\u958b\u767c\u4eba\u54e1\u53ef\u9032\u884c\u4ee5\u4e0b\u8a2d\u5b9a\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"External Data Reader")," (\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668)\uff1a\u555f\u7528\u6216\u505c\u7528\u529f\u80fd\u3002 \u5982\u679c\u555f\u7528\uff0cTouchGFX\u6703\u76f4\u63a5\u900f\u904e\u6240\u7522\u751f\u7684\u4ecb\u9762\u64f7\u53d6\u8cc7\u7522\u8cc7\u6599\u3002 \u5982\u679c\u505c\u7528\uff0c\u5247\u958b\u767c\u4eba\u54e1\u9700\u8981\u5c07\u5716\u50cf",(0,n.kt)("em",{parentName:"li"},"\u5feb\u53d6"),"\u5230\u8a18\u61b6\u9ad4\u7de9\u885d\u5340\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"External Data Reader: Memory base address")," (\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668\uff1a\u8a18\u61b6\u9ad4\u57fa\u5e95\u4f4d\u5740)\uff1a\u6307\u5b9a\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668\u8a18\u61b6\u9ad4\u7684\u8d77\u59cb\u4f4d\u5740\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"External Data Reader: Memory size")," (\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668\uff1a\u8a18\u61b6\u9ad4\u5927\u5c0f)\uff1a\u6307\u5b9a\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668\u8a18\u61b6\u9ad4\u7684\u5927\u5c0f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"External Data Reader: Line Buffer Size")," (\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668\uff1a\u884c\u7de9\u885d\u5340\u5927\u5c0f)\uff1a\u5efa\u7acb\u5169\u500b\u7de9\u885d\u5340\u4ee5\u4fbf\u5c07\u5716\u50cf\u6216\u6587\u5b57\u6df7\u5408\u5230\u5f71\u50cf\u7de9\u885d\u5340\u7576\u4e2d\u3002 \u9810\u8a2d\u503c\u70ba\uff1a",(0,n.kt)("em",{parentName:"li"},"\u4e00\u500b\u87a2\u5e55\u5bec\u5ea6","*"," 4\u4f4d\u5143\u7d44"),"\uff0c\u4ee5\u652f\u63f4ARGB8888\u50cf\u7d20\u683c\u5f0f\u7684\u5168\u5c3a\u5bf8\u5716\u50cf\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"External Data Reader: Minimum DMA transfer size")," (\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668\uff1a\u6700\u5c0fDMA\u50b3\u8f38\u91cf)\uff1a\u8a2d\u5b9a\u555f\u52d5DMA\u50b3\u8f38\u6240\u9700\u7684\u6700\u5c0f\u4f4d\u5143\u7d44\u3002 \u5982\u679c\u8acb\u6c42\u7684\u50b3\u8f38\u91cf\u5c11\u65bc\u6700\u5c0f\u4f4d\u5143\u7d44\u4fbf\u4e0d\u6703\u7528\u5230DMA\u3002")),(0,n.kt)("p",null,"\u5728\u555f\u7528",(0,n.kt)("em",{parentName:"p"},"\u5916\u90e8\u8cc7\u6599\u8b80\u53d6\u5668"),"\u7684\u60c5\u6cc1\u4e0b\u7522\u751f\u7a0b\u5f0f\u78bc\u4e4b\u5f8c\uff0cTouchGFX Generator\u6703\u5efa\u7acb\u5982\u4e0b\u7684\u984d\u5916\u6a94\u6848\uff0c\u4ee5\u652f\u63f4\u76f4\u63a5\u5f9e\u975e\u8a18\u61b6\u9ad4\u6620\u5c04Flash\u4e2d\u64f7\u53d6\u8cc7\u7522\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.hpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/TouchGFXDataReader.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/TouchGFXDataReader.hpp"))),(0,n.kt)("p",null,"\u50cf\u5f80\u5e38\u4e00\u6a23\uff0c\u5c0dTouchGFX Generator\u7522\u751f\u7684AL\u67b6\u69cb\u800c\u8a00\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u70ba\u552f\u8b80\uff0c\u4f7f\u7528\u8005\u61c9\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u985e\u5225\u4e2d\u9032\u884c\u4fee\u6539\u3002 ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u5c6c\u65bc",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),"\u985e\u5225\u3002"),(0,n.kt)("p",null,"TouchGFX Generator\u6703\u4fee\u6539\u4ee5\u4e0b\u6a94\u6848\u4ee5\u8a2d\u5b9aTouchGFX HAL\uff0c\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"DataReader"),"\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXConfiguration.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.hpp"))),(0,n.kt)(c.Z,{mdxType:"Note"},"\u53ea\u6709\u5728\u540c\u6642\u505c\u7528DMA2D\u8207LTDC\u7684\u60c5\u6cc1\u4e4b\u4e0b\u624d\u53ef\u4f7f\u7528\u8cc7\u6599\u8b80\u53d6\u5668\u5176\u4ed6\u529f\u80fd\u3002"),(0,n.kt)("h2",u({},{id:"vector-rendering"}),"\u5411\u91cf\u6e32\u67d3"),(0,n.kt)("p",null,"\u70ba\u4e86\u80fd\u5728TouchGFX Generator\u8a2d\u5b9a\u5411\u91cf\u6e32\u67d3\uff0c\u5f71\u50cf\u7de9\u885d\u5340\u50cf\u7d20\u683c\u5f0f\u5fc5\u9808\u70baRGB565\u3001RGB888\u6216ARGB8888\u3002 \u5c31\u5411\u91cf\u6e32\u67d3\u529f\u80fd\u800c\u8a00\uff0c\u958b\u767c\u4eba\u54e1\u6709\u4ee5\u4e0b\u4e09\u7a2e\u9078\u9805\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disabled")," (\u505c\u7528)\uff1a\u505c\u7528\u5c0d\u61c9\u7528\u7a0b\u5f0f\u7684\u5411\u91cf\u6e32\u67d3\u652f\u63f4\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Software")," (\u8edf\u9ad4)\uff1a\u555f\u7528\u5c0d\u61c9\u7528\u7a0b\u5f0f\u7684\u5411\u91cf\u6e32\u67d3\u652f\u63f4\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Hardware")," (\u786c\u9ad4)\uff1a\u555f\u7528\u5c0d\u61c9\u7528\u7a0b\u5f0f\u7684\u786c\u9ad4\u5411\u91cf\u6e32\u67d3\u652f\u63f4\u3002")),(0,n.kt)("p",null,"\u5982\u679c\u9078\u64c7",(0,n.kt)("em",{parentName:"p"},"Software")," (\u8edf\u9ad4)\uff0c\u5c31\u6703\u7531CPU\u57f7\u884c\u5411\u91cf\u6e32\u67d3\u3002 \u5982\u679c\u662f\u53ef\u4f7f\u7528GPU2D (Neochrom)\u7684MCU\uff0c\u5c31\u53ef\u4f7f\u7528",(0,n.kt)("em",{parentName:"p"},"Hardware")," (\u786c\u9ad4)\u9078\u9805\uff0c\u5728GPU2D\u57f7\u884c\u5411\u91cf\u4f5c\u696d\u4ee5\u63d0\u5347\u6548\u80fd\u3002"),(0,n.kt)(i.Z,{mdxType:"Caution"},"\u5982\u679c\u60a8\u8981\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u4f7f\u7528TouchGFX Generator\u7684SVGImage\u5c0f\u5de5\u5177\uff0c\u8acb\u5728TouchGFX Generator\u6aa2\u67e5\u662f\u5426\u5c07",(0,n.kt)("b",null,"Vector Rendering")," (\u5411\u91cf\u6e32\u67d3)\u529f\u80fd\u8a2d\u5b9a\u70ba\u555f\u7528\u3002 \u5426\u5247\u5728\u7de8\u8b6f\u671f\u9593\u5c07\u6703\u51fa\u73fe",(0,n.kt)("b",null,"\u300cno definition for touchgfx::VectorRenderer::getInstance()\u300d"),"\u7684\u932f\u8aa4\u3002"),(0,n.kt)(p.Z,{mdxType:"Tip"},"\u5982\u679c\u60a8\u7684\u88dd\u7f6e\u53ef\u4f7f\u7528GPU2D (NeoChrom)(\u4f8b\u5982STM32U599)\uff0c\u5c31\u53ef\u5c07\u5176\u555f\u7528\u4ee5\u9054\u5230\u6700\u4f73\u7684\u5411\u91cf\u6e32\u67d3\u6548\u80fd\u3002"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"\u5982\u9700\u66f4\u591a\u8cc7\u8a0a\u77ad\u89e3SVG\u5728TouchGFX\u4e2d\u5982\u4f55\u6e32\u67d3\uff0c\u8acb\u53c3\u95b1",(0,n.kt)(l.Z,{to:"../../../ui-development/touchgfx-engine-features/svg",mdxType:"Link"},"SVG"),"\u4e00\u6587\u3002"),(0,n.kt)("h2",u({},{id:"vector-font-rendering"}),"\u5411\u91cf\u5b57\u578b\u6e32\u67d3"),(0,n.kt)("p",null,"\u70ba\u4e86\u80fd\u5728TouchGFX Generator\u555f\u7528\u5411\u91cf\u5b57\u578b\u6e32\u67d3\uff0c\u5fc5\u9808\u555f\u7528",(0,n.kt)("strong",{parentName:"p"},"Vector Rendering")," (\u5411\u91cf\u6e32\u67d3) (\u9078\u64c7",(0,n.kt)("em",{parentName:"p"},"software")," (\u8edf\u9ad4)\u6216",(0,n.kt)("em",{parentName:"p"},"hardware")," (\u786c\u9ad4))\u3002 \u5c31\u5411\u91cf\u5b57\u578b\u6e32\u67d3\u529f\u80fd\u800c\u8a00\uff0c\u958b\u767c\u4eba\u54e1\u6709\u4ee5\u4e0b\u5169\u7a2e\u9078\u9805\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disabled")," (\u505c\u7528)\uff1a\u505c\u7528\u5c0d\u61c9\u7528\u7a0b\u5f0f\u7684\u5411\u91cf\u5b57\u578b\u6e32\u67d3\u652f\u63f4\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enabled")," (\u555f\u7528)\uff1a\u555f\u7528\u5c0d\u61c9\u7528\u7a0b\u5f0f\u7684\u5411\u91cf\u5b57\u578b\u6e32\u67d3\u652f\u63f4\u3002")),(0,n.kt)("p",null,"\u7e6a\u88fd\u5411\u91cf\u5b57\u578b\u7684\u6548\u80fd\u6703\u53d7\u5230",(0,n.kt)("strong",{parentName:"p"},"Vector Rendering")," (\u5411\u91cf\u6e32\u67d3)\u53c3\u6578\u7684\u9078\u9805\u5f71\u97ff(\u4ea6\u5373",(0,n.kt)("em",{parentName:"p"},"hardware")," (\u786c\u9ad4)\u7684\u901f\u5ea6\u6700\u5feb)\u3002"),(0,n.kt)("p",null,"If Vector Font Rendering is enabled, users can choose the ",(0,n.kt)("em",{parentName:"p"},"Vector")," format type for typographies in their applications. Otherwise, only the ",(0,n.kt)("em",{parentName:"p"},"Bitmap")," format type is selectable."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(l.Z,{to:"../../../ui-development/touchgfx-engine-features/vector-fonts",mdxType:"Link"},"Vector Fonts")," article for more information on how Vector Fonts work in TouchGFX."),(0,n.kt)("h2",u({},{id:"8bit-ltdc-color-look-up-table"}),"8\u4f4d\u5143LTDC\u8272\u5f69\u67e5\u95b1\u8cc7\u6599\u8868"),(0,n.kt)("p",null,"\u82e5LTDC\u8a2d\u5b9a\u4ee5L8\u683c\u5f0f\u8b80\u53d6\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u4e14TouchGFX\u65bc",(0,n.kt)("a",u({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_b_g_r2222"}),"ABRG2222"),"\u3001",(0,n.kt)("a",u({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___a_r_g_b2222"}),"ARGB222"),"\u3001",(0,n.kt)("a",u({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___b_g_r_a2222"}),"BGRA2222"),"\u6216",(0,n.kt)("a",u({parentName:"p"},{href:"../../../../api/classes/classtouchgfx_1_1_l_c_d8bpp___r_g_b_a2222"}),"RGBA2222"),"\u9032\u884c\u6e32\u67d3\uff0cTouchGFX Generator\u5c07\u63d0\u4f9bCLUT\uff0c\u4e26\u65bc",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::initialize()"),"\u671f\u9593\u8f09\u5165\u81f3LTDC\u4e4b\u4e2d\u3002 \u6709\u95dcLTDC\u548cCLUT\u7684\u7528\u6cd5\uff0c\u8a73\u898bSTM32 MCU\u53c3\u8003\u624b\u518a\u3002"))}N.isMDXComponent=!0}}]);
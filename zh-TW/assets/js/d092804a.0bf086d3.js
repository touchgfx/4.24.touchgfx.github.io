"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[44816],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),a=r(7029);const l=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const o=i},96151:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},71844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>d});r(59496);var n=r(49613),a=r(89639),l=r(48753),i=r(95375);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"framebuffer",title:"\u5f71\u50cf\u7de9\u885d\u5340"},u=void 0,m={unversionedId:"basic-concepts/framebuffer",id:"basic-concepts/framebuffer",title:"\u5f71\u50cf\u7de9\u885d\u5340",description:"\u5f71\u50cf\u7de9\u885d\u662f\u8a18\u61b6\u9ad4\u7684\u4e00\u90e8\u5206\uff0c\u5716\u5f62\u5f15\u64ce\u901a\u904e\u66f4\u65b0\u5f71\u50cf\u7de9\u885d\uff0c\u5c07\u8981\u5728\u986f\u793a\u5668\u4e0a\u986f\u793a\u7684\u4e0b\u4e00\u5e45\u5716\u50cf\u5305\u542b\u9032\u4f86\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/framebuffer",permalink:"/4.24/zh-TW/docs/basic-concepts/framebuffer",draft:!1,tags:[],version:"current",frontMatter:{id:"framebuffer",title:"\u5f71\u50cf\u7de9\u885d\u5340"},sidebar:"docs",previous:{title:"\u8272\u5f69\u683c\u5f0f",permalink:"/4.24/zh-TW/docs/basic-concepts/color-formats"},next:{title:"\u5716\u5f62\u5f15\u64ce",permalink:"/4.24/zh-TW/docs/basic-concepts/graphics-engine"}},s={},d=[{value:"\u984f\u8272",id:"colors",level:2},{value:"Display",id:"display",level:2},{value:"\u5f71\u50cf\u7de9\u885d\u7684\u4f4d\u7f6e",id:"location-of-framebuffer",level:2},{value:"\u5167\u90e8RAM",id:"internal-ram",level:3},{value:"\u5916\u90e8RAM",id:"external-ram",level:3},{value:"\u5177\u6709\u5d4c\u5165\u5f0fRAM\u7684\u986f\u793a\u5668",id:"display-with-embedded-ram",level:3},{value:"\u5f71\u50cf\u7de9\u885d\u7684\u6578\u91cf",id:"amount-of-framebuffers",level:2},{value:"\u4e00\u500b\u5f71\u50cf\u7de9\u885d",id:"one-framebuffer",level:3},{value:"\u591a\u65bc\u4e00\u500b\u7684\u5f71\u50cf\u7de9\u885d",id:"more-than-one-framebuffer",level:3},{value:"\u5c11\u65bc\u4e00\u500b\u7684\u5f71\u50cf\u7de9\u885d",id:"less-than-one-framebuffer",level:3},{value:"\u5132\u5b58\u7a7a\u9593\u6d88\u8017",id:"memory-consumption",level:2}],f={toc:d},h="wrapper";function g(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)(h,o({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u662f\u8a18\u61b6\u9ad4\u7684\u4e00\u90e8\u5206\uff0c\u5716\u5f62\u5f15\u64ce\u901a\u904e\u66f4\u65b0\u5f71\u50cf\u7de9\u885d\uff0c\u5c07\u8981\u5728\u986f\u793a\u5668\u4e0a\u986f\u793a\u7684\u4e0b\u4e00\u5e45\u5716\u50cf\u5305\u542b\u9032\u4f86\u3002"),(0,n.kt)("p",null,"\u5e40\u7de9\u885d\u662fRAM\u7684\u4e00\u500b\u9023\u7e8c\u90e8\u5206\uff0c\u5177\u6709\u6307\u5b9a\u5927\u5c0f\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-contiguous-memory.svg",noShadow:"true",mdxType:"Figure"},"\u5f71\u50cf\u7de9\u885d\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u5177\u6709\u76f8\u61c9\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002 \u56e0\u6b64\uff0c\u6211\u5011\u901a\u5e38\u5c07\u5f71\u50cf\u7de9\u885d\u8996\u70ba\u8a18\u61b6\u9ad4\u7684\u4e00\u500b\u4e8c\u7dad\u90e8\u5206\uff0c\u53ef\u901a\u904ex\u3001y\u5ea7\u6a19\u6aa2\u7d22\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-2d-memory.svg",noShadow:"true",mdxType:"Figure"},"\u4e8c\u7dad\u5f71\u50cf\u7de9\u885d\u8a18\u61b6\u9ad4"),(0,n.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u5177\u6709\u76f8\u61c9\u7684\u8272\u5f69\u683c\u5f0f\u3002 \u5f71\u50cf\u7de9\u885d\u4e2d\u7684\u6bcf\u500b\u689d\u76ee\u90fd\u662f\u8a72\u8272\u5f69\u683c\u5f0f\u4e0b\u7684\u8272\u5f69\u3002 \u6211\u5011\u5c07\u5f71\u50cf\u7de9\u885d\u4e2d\u7684\u6bcf\u4e00\u500b\u9019\u6a23\u7684\u689d\u76ee\u7a31\u70ba\u50cf\u7d20\u3002"),(0,n.kt)("p",null,"\u901a\u904e\u8a08\u7b97\u5f71\u50cf\u7de9\u885d\u4e2d\u50cf\u7d20\u7684\u5132\u5b58\u4f4d\u5740\u548c\u66f4\u65b0\u5b58\u5132\u7684\u8272\u5f69\uff0c\u53ef\u4ee5\u66f4\u65b0\u5f71\u50cf\u7de9\u885d\u4e2d\u4f4d\u7f6e x,y \u8655\u7684\u50cf\u7d20\u8272\u5f69\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = newColor;\n")),(0,n.kt)("p",null,"\u540c\u6a23\u5730\uff0c\u6211\u5011\u53ef\u4ee5\u7372\u53d6\u5f71\u50cf\u7de9\u885d\u4e2d\u50cf\u7d20\u7684\u8272\u5f69\u4e26\u7528\u5728\u8a08\u7b97\u4e2d\u3002 \u4f8b\u5982\uff0c\u6697\u5316\u5f71\u50cf\u7de9\u885d\u4e2d\u50cf\u7d20\u7684\u8272\u5f69\uff08\u5047\u8a2d\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"\u6697\u5316"),"\u51fd\u6578\u53ef\u7528\uff09\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );\n")),(0,n.kt)("p",null,"\u5c0d\u65bc\u5f71\u50cf\u7de9\u885d\u8a18\u61b6\u9ad4\uff0c\u901a\u5e38\u4e0d\u6703\u5982\u524d\u6587\u6240\u8ff0\u9010\u4e00\u8b80\u5beb\u50cf\u7d20\uff0c\u800c\u662f\u5229\u7528\u7cfb\u7d71\u7684\u5e95\u5c64\u786c\u9ad4\u529f\u80fd\uff08\u5982Chrom-ART DMA\uff09\u9032\u884c\u8b80\u5beb\u3002"),(0,n.kt)("h2",o({},{id:"colors"}),"\u984f\u8272"),(0,n.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u5f71\u50cf\u7de9\u885d\u7684\u50cf\u7d20\u8272\u5f69\u683c\u5f0f\u53ef\u4ee5\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7070\u5ea6"),"1\u30012\u62164\u4f4d\u5143\u6bcf\u50cf\u7d20\uff08bpp\uff09\u7070\u5ea6\uff0c\u6216\u8005"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u9ad8\u6216\u771f\u5f69"),"16\u300124\u621632 bpp\u8272\u5f69")),(0,n.kt)("p",null,"\u6bcf\u500b\u50cf\u7d20\u4f7f\u7528\u7684\u4f4d\u5143\u6578\u8d8a\u591a\uff0c\u5f71\u50cf\u7de9\u885d\u80fd\u5920\u5448\u73fe\u7684\u984f\u8272\u5c31\u8d8a\u6e05\u6670\uff0c\u6b64\u5916\uff0c\u6bcf\u500b\u50cf\u7d20\u4f7f\u7528\u7684\u4f4d\u5143\u6578\u8d8a\u591a\uff0c\u5f71\u50cf\u7de9\u885d\u6d88\u8017\u7684\u5132\u5b58\u7a7a\u9593\u5c31\u8d8a\u591a\u3002"),(0,n.kt)("h2",o({},{id:"display"}),"Display"),(0,n.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u7684\u5167\u5bb9\u6700\u7d42\u6703\u88ab\u50b3\u8f38\u4e26\u986f\u793a\u5728\u986f\u793a\u5668\u4e0a\u3002 \u56e0\u6b64\uff0c\u5f71\u50cf\u7de9\u885d\u8207\u986f\u793a\u5668\u7684\u50cf\u7d20\u5bec\u5ea6\u548c\u9ad8\u5ea6\u76f8\u540c\u662f\u5341\u5206\u5e38\u898b\u7684\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/display-and-framebuffer.svg",noShadow:"true",mdxType:"Figure"},"24 bpp\u5f71\u50cf\u7de9\u885d\u5167\u5bb9\u548c\u986f\u793a\u5668\u986f\u793a\u5167\u5bb9"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},"\u53c3\u898b\u95dc\u65bc",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\u986f\u793a\u5668\u6280\u8853"),"\u7684\u90e8\u5206\u77ad\u89e3\u4e0d\u540c\u986f\u793a\u5668\u985e\u578b\u3002"),(0,n.kt)("h2",o({},{id:"location-of-framebuffer"}),"\u5f71\u50cf\u7de9\u885d\u7684\u4f4d\u7f6e"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u500b\u57fa\u65bc\u5fae\u63a7\u5236\u5668\u7684\u7e6a\u5716\u7cfb\u7d71\u7684\u7c21\u5716\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/simplified-graphics-system.webp",noShadow:!0,width:"400",mdxType:"Figure"},"\u7e6a\u5716\u7cfb\u7d71\u7c21\u5716"),(0,n.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u53ef\u4ee5\u4f4d\u65bcMCU\u6216\u5916\u90e8RAM\u4e2d\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-placement.webp",noShadow:"true",width:"600",mdxType:"Figure"},"\u5f71\u50cf\u7de9\u885d\u7684\u53ef\u80fd\u4f4d\u7f6e"),(0,n.kt)("p",null,"\u6bcf\u500b\u53ef\u80fd\u4f4d\u7f6e\u90fd\u5177\u6709\u6f5b\u5728\u7684\u512a\u52e2\u548c\u4e0d\u8db3\u3002"),(0,n.kt)("h3",o({},{id:"internal-ram"}),"\u5167\u90e8RAM"),(0,n.kt)("p",null,"\u5982\u679c\u5f71\u50cf\u7de9\u885d\u4f4d\u65bcMCU\u5167\u90e8\u7684RAM\u4e2d\uff0c\u5c0d\u5f71\u50cf\u7de9\u885d\u7684\u8b80\u548c\u5beb\u5b58\u53d6\u6703\u76e1\u53ef\u80fd\u5feb\u5730\u5b8c\u6210\u3002 \u9019\u610f\u5473\u8457TouchGFX\u61c9\u7528\u7684\u904b\u884c\u6703\u76e1\u53ef\u80fd\u5e73\u7a69\u3002 \u53cd\u904e\u4f86\uff0c\u5167\u90e8RAM\u662f\u5341\u5206\u7a00\u5c11\u7684\u8cc7\u6e90\uff0c\u88ab\u7cfb\u7d71\u7684\u8a31\u591a\u5143\u4ef6\u4f7f\u7528\uff0c\u56e0\u6b64\uff0c\u5f71\u50cf\u7de9\u885d\u5927\u91cf\u4f54\u7528\u5167\u90e8RAM\u4e5f\u4e0d\u53ef\u884c\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u53ef\u884c\uff0c\u7531\u65bc\u7121\u9700\u984d\u5916\u7684RAM\uff0c\u5728\u5167\u90e8RAM\u4e2d\u63d0\u4f9b\u5f71\u50cf\u7de9\u885d\u53ef\u4ee5\u964d\u4f4e\u7cfb\u7d71\u7684\u7e3d\u9ad4\u6210\u672c\u3002"),(0,n.kt)("h3",o({},{id:"external-ram"}),"\u5916\u90e8RAM"),(0,n.kt)("p",null,"\u5982\u679c\u7cfb\u7d71\u6709\u5916\u90e8RAM\uff0c\u53ef\u4ee5\u9078\u64c7\u5728\u5916\u90e8RAM\u800c\u4e0d\u662f\u5167\u90e8RAM\u4e2d\u63d0\u4f9b\u5f71\u50cf\u7de9\u885d\u3002 \u5c0d\u5916\u90e8RAM\u7684\u8b80\u548c\u5beb\u5b58\u53d6\u901a\u5e38\u6703\u6bd4\u5167\u90e8RAM\u6162\uff0c\u4f46\u5916\u90e8RAM\u7684\u7a7a\u9593\u91cf\u901a\u5e38\u5927\u5f97\u591a\u3002 \u56e0\u6b64\uff0c\u6709\u6642\u5019\u9019\u662f\u552f\u4e00\u53ef\u884c\u7684\u89e3\u6c7a\u65b9\u6848\u3002"),(0,n.kt)("p",null,"MCU\u53ef\u80fd\u5177\u6709\u4e00\u4e9b\u529f\u80fd\uff08\u5982\u5feb\u53d6\u8a18\u61b6\u9ad4\uff09\uff0c\u53ef\u52a0\u5feb\u5916\u90e8RAM\u7684\u5b58\u53d6\u901f\u5ea6\u3002 \u53c3\u898b\u95dc\u65bc",(0,n.kt)("a",o({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU"),"\u7684\u90e8\u5206\u77ad\u89e3\u8a73\u7d30\u8cc7\u8a0a\u3002"),(0,n.kt)("h3",o({},{id:"display-with-embedded-ram"}),"\u5177\u6709\u5d4c\u5165\u5f0fRAM\u7684\u986f\u793a\u5668"),(0,n.kt)("p",null,"\u986f\u793a\u5668\u4e0a\u53ef\u80fd\u5d4c\u5165\u4e86\u8a18\u61b6\u9ad4\uff0c\u5177\u9ad4\u53d6\u6c7a\u65bc\u7cfb\u7d71\u4e2d\u986f\u793a\u5668\u7684\u985e\u578b\u3002 \u6b64\u8a18\u61b6\u9ad4\u5132\u5b58\u986f\u793a\u5668\u201c\u5be6\u969b\u201d\u50cf\u7d20\u7684\u5167\u5bb9\u3002 \u986f\u793a\u5668\u4e2d\u6709\u6b64\u50cf\u7d20\u8a18\u61b6\u9ad4\uff0c\u610f\u5473\u8457\u5728\u986f\u793a\u5668\u4ecd\u6d3b\u52d5\u6642\uff0cMCU\u53ef\u80fd\u8655\u65bc\u7a7a\u9592\u72c0\u614b\u3002"),(0,n.kt)("p",null,"\u7531\u65bc\u986f\u793a\u5668\u8a18\u61b6\u9ad4\u4e26\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\uff0c\u65e2\u4e0d\u6253\u7b97\u4e5f\u4e0d\u9069\u5408\u7528\u65bc\u50cf\u7d20\u7684\u96a8\u6a5f\u8b80\u53d6\u6216\u5beb\u5165\uff0c\u56e0\u6b64\u4e0d\u53ef\u80fd\u5728\u986f\u793a\u5668RAM\u4e2d\u63d0\u4f9bTouchGFX\u5f71\u50cf\u7de9\u885d\u3002 \u76f8\u53cd\uff0cTouchGFX\u5c07\u5f71\u50cf\u7de9\u885d\u7f6e\u65bc\u5167\u90e8\u6216\u5916\u90e8RAM\u4e2d\uff0c\u4e26\u5728\u9069\u7576\u7684\u6642\u5019\u5c07\u5176\u50b3\u8f38\u5230\u986f\u793a\u5668RAM\u3002"),(0,n.kt)("h2",o({},{id:"amount-of-framebuffers"}),"\u5f71\u50cf\u7de9\u885d\u7684\u6578\u91cf"),(0,n.kt)("p",null,"TouchGFX\u53ef\u5728\u61c9\u7528\u4e2d\u4f7f\u7528\u4e00\u500b\u3001\u591a\u500b\u6216\u5c11\u65bc\u4e00\u500b\u7684\u5f71\u50cf\u7de9\u885d\u3002 \u5f71\u50cf\u7de9\u885d\u7684\u6578\u91cf\u6703\u5f71\u97ff\u61c9\u7528\u7684\u8996\u89ba\u4e0a\u7684\u8868\u73fe\u3001\u6027\u80fd\u548c\u5132\u5b58\u7a7a\u9593\u6d88\u8017\u3002"),(0,n.kt)("h3",o({},{id:"one-framebuffer"}),"\u4e00\u500b\u5f71\u50cf\u7de9\u885d"),(0,n.kt)("p",null,"\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u8db3\u4ee5\u5b8c\u5168\u5bb9\u7d0d\u8981\u50b3\u8f38\u5230\u986f\u793a\u5668\u7684\u6240\u6709\u50cf\u7d20\u3002 \u7576\u958b\u767c\u677f\u4e0a\u6c92\u6709\u986f\u793a\u5668RAM\u6642\uff0c\u9700\u8981\uff08\u81f3\u5c11\uff09\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u6240\u986f\u793a\u5716\u5f62\u7684\u8907\u96dc\u5ea6\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u8996\u89ba\u5931\u771f\uff0c\u5247\u53ea\u9700\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u3002"),(0,n.kt)("h3",o({},{id:"more-than-one-framebuffer"}),"\u591a\u65bc\u4e00\u500b\u7684\u5f71\u50cf\u7de9\u885d"),(0,n.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u5177\u6709\u591a\u500b\u5f71\u50cf\u7de9\u885d\u8868\u793a\u6709\u5169\u500b\u5f71\u50cf\u7de9\u885d\u3002 \u4e00\u500b\u5f71\u50cf\u7de9\u885d\u7528\u65bc\u5beb\u5165\u4e0b\u4e00\u5e45\u5716\u50cf\uff0c\u53e6\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u7528\u65bc\u5c07\u5716\u50cf\u50b3\u8f38\u5230\u986f\u793a\u5668\u3002 \u9019\u610f\u5473\u8457\u4e0d\u6703\u767c\u751f\u5931\u771f\uff08\u5982\u6495\u88c2\uff09\u3002"),(0,n.kt)("h3",o({},{id:"less-than-one-framebuffer"}),"\u5c11\u65bc\u4e00\u500b\u7684\u5f71\u50cf\u7de9\u885d"),(0,n.kt)("p",null,"\u5c11\u65bc\u4e00\u500b\u7684\u5f71\u50cf\u7de9\u885d\u901a\u5e38\u610f\u5473\u8457"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8017\u7684\u5132\u5b58\u7a7a\u9593\u8f03\u5c11"),(0,n.kt)("li",{parentName:"ul"},"\u5c07\u57f7\u884c\u66f4\u591a\u7e6a\u88fd\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u5411\u986f\u793a\u5668\u50b3\u8f38\u66f4\u591a\u5167\u5bb9")),(0,n.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u4e0d\u8db3\u4e00\u500b\u7684\u5f71\u50cf\u7de9\u885d\u8868\u793a\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u3002 \u90e8\u5206\u5f71\u50cf\u7de9\u885d\u65b9\u6848\u53ea\u9069\u7528\u65bc\u5177\u6709\u986f\u793a\u5668RAM\u7684\u986f\u793a\u5668\u3002"),(0,n.kt)("h2",o({},{id:"memory-consumption"}),"\u5132\u5b58\u7a7a\u9593\u6d88\u8017"),(0,n.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u4e2d\u7684\u8272\u5f69\u6578\u91cf\u548c\u50cf\u7d20\u6578\u91cf\u6c7a\u5b9a\u4e86\u5f71\u50cf\u7de9\u885d\u6d88\u8017\u7684\u5132\u5b58\u7a7a\u9593\u3002"),(0,n.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u4f7f\u7528\u7684\u5132\u5b58\u7a7a\u9593\u901a\u5e38\u70ba \u5bec ",(0,n.kt)("em",{parentName:"p"}," \u9ad8 ")," \u4ee5\u4f4d\u5143\u6578\u8a08\u7684\u8272\u6df1 / 8 \u4f4d\u5143\u7d44\u6578\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"right"}),"\u89e3\u6790\u5ea6\uff08\u50cf\u7d20\uff09"),(0,n.kt)("th",o({parentName:"tr"},{align:"right"}),"\u8272\u5f69\uff08bpp\uff09"),(0,n.kt)("th",o({parentName:"tr"},{align:"right"}),"\u8a08\u7b97"),(0,n.kt)("th",o({parentName:"tr"},{align:"right"}),"\u6d88\u8017\u7684\u5132\u5b58\u7a7a\u9593\uff08\u4f4d\u5143\u7d44\uff09"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"800x480"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"16 bpp"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"800 ",(0,n.kt)("em",{parentName:"td"}," 480 ")," 16 / 8"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"768,000 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"480x272"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"24 bpp"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"480 ",(0,n.kt)("em",{parentName:"td"}," 272 ")," 24 / 8"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"391,680 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"100x100"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"8 bpp"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"100 ",(0,n.kt)("em",{parentName:"td"}," 100 "),"  8 / 8"),(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"10,000 B")))),(0,n.kt)("p",null,"\u7576\u5177\u6709\u4e00\u500b\u4ee5\u4e0a\u7684\u5f71\u50cf\u7de9\u885d\u6642\uff0c\u6d88\u8017\u7684\u5b58\u5132\u7a7a\u9593\u76f8\u5c0d\u5730\u8f03\u5927\u3002 \u4f8b\u5982\uff0c\u7576\u4f7f\u7528\u96d9\u91cd\u5f71\u50cf\u7de9\u885d\u65b9\u6848\u6642\uff0c\u4f7f\u7528\u5169\u500b\u5f71\u50cf\u7de9\u885d\u6703\u6d88\u8017\u5169\u500d\u7684\u5132\u5b58\u7a7a\u9593\u3002"),(0,n.kt)("p",null,"\u7576\u5f71\u50cf\u7de9\u885d\u4e0d\u8db3\u4e00\u500b\u6642\uff0c\u7531\u61c9\u7528\u660e\u78ba\u5730\u5206\u914d\u548c\u63a7\u5236\u5b58\u5132\u7a7a\u9593\u7684\u91cf\u3002 \u56e0\u6b64\uff0c\u5b58\u5132\u7a7a\u9593\u7684\u6d88\u8017\u91cf\u662f\u5b8c\u5168\u53ef\u5b9a\u5236\u7684\uff0c\u4f46\u61c9\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u91cf\u904e\u5c11\u6703\u5f71\u97ff\u6574\u9ad4\u5716\u5f62\u6027\u80fd\u3002"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"STM32 ",(0,n.kt)(i.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",mdxType:"Link"},"LTDC"),"\u986f\u793a\u5668\u63a7\u5236\u5668\u6587\u4ef6\u63d0\u4f9b\u4e86\u95dc\u65bc\u5f71\u50cf\u7de9\u885d\u7684\u66f4\u591a\u8cc7\u8a0a")))}g.isMDXComponent=!0}}]);
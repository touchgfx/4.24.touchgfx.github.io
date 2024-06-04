"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[85275],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28128:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),a=r(7029);const l=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:l,src:o})),n.createElement("p",null,e.children))}},96151:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},49018:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),a=r(96151);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}const i=o},96741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>m});r(59496);var n=r(49613),a=r(89639),l=r(49018),o=r(28128);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"05-display-external",title:"5. \u986f\u793a\u5916\u90e8RAM\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340",sidebar_label:"5. \u986f\u793a\u5916\u90e8RAM\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340"},d=void 0,u={unversionedId:"development/board-bring-up/how-to/05-display-external",id:"development/board-bring-up/how-to/05-display-external",title:"5. \u986f\u793a\u5916\u90e8RAM\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340",description:"\u52d5\u6a5f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/05-display-external.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/05-display-external",permalink:"/4.24/zh-TW/docs/development/board-bring-up/how-to/05-display-external",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-display-external",title:"5. \u986f\u793a\u5916\u90e8RAM\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340",sidebar_label:"5. \u986f\u793a\u5916\u90e8RAM\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340"},sidebar:"docs",previous:{title:"4. \u5916\u90e8RAM",permalink:"/4.24/zh-TW/docs/development/board-bring-up/how-to/04-enable-external-ram"},next:{title:"6. \u5916\u90e8\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4",permalink:"/4.24/zh-TW/docs/development/board-bring-up/how-to/06-flash-external-addressable"}},s={},m=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u9a57\u8b49",id:"verification",level:3},{value:"\u5148\u6c7a\u689d\u4ef6",id:"prerequisites",level:2},{value:"\u57f7\u884c",id:"do",level:2},{value:"LTDC\u5404\u5716\u5c64\u8a2d\u5b9a",id:"ltdc-layer-configuration",level:3}],h={toc:m},g="wrapper";function f(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(g,i({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"motivation"}),"\u52d5\u6a5f"),(0,n.kt)("p",null,"\u5728\u9019\u4e00\u6b65\uff0c\u6211\u5011\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u5f9e\u5167\u90e8RAM\u79fb\u81f3\u5916\u90e8RAM\uff0c\u4e26\u78ba\u4fdd\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5167\u5bb9\u4ecd\u53ef\u4ee5\u50b3\u8f38\u5230\u986f\u793a\u5668\u3002"),(0,n.kt)(l.Z,{mdxType:"Note"},"\u5982\u679c\u6240\u7528\u7684\u958b\u767c\u677f\u4e0d\u5c0d\u5916\u64f4\u5145RAM\uff0c\u8acb\u8df3\u904e\u6b64\u6b65\u3002"),(0,n.kt)("p",null,"\u7531\u65bc\u986f\u793a\u63a7\u5236\u5668\u5c0d\u50b3\u9001\u901f\u7387\u6709\u4e00\u5b9a\u8981\u6c42\uff0c\u56e0\u6b64\u6b64\u6b65\u9a5f\u5c07\u5c0d\u5916\u90e8RAM\u9032\u884c\u58d3\u529b\u6e2c\u8a66\u3002 \u8a72\u904e\u7a0b\u4e2d\u53ef\u80fd\u767c\u751f\u932f\u8aa4\u3002 \u5e38\u898b\u932f\u8aa4\u70ba\u5916\u90e8RAM\u7684\u983b\u5bec\u4e0d\u5920\u9ad8\u6240\u9020\u6210\u7684LTDC\u6b20\u8f09\u904b\u884c\uff0c\u6216RAM\u914d\u7f6e\u4e0d\u6b63\u78ba\u548c\u4e0d\u7b26\u5408\u898f\u683c\u7684\u904b\u884c\u800c\u5c0e\u81f4\u7684\u5716\u50cf\u932f\u8aa4\u3002"),(0,n.kt)("h2",i({},{id:"goal"}),"\u76ee\u6a19"),(0,n.kt)("p",null,"\u6b64\u6b65\u9a5f\u7684\u76ee\u7684\u70ba\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u5f9e\u5167\u90e8RAM\u6539\u70ba\u4f7f\u7528\u5916\u90e8RAM\u3002"),(0,n.kt)("h3",i({},{id:"verification"}),"\u9a57\u8b49"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u9019\u90e8\u5206\u7684\u9a57\u8b49\u9ede\u3002 \u9019\u4e9b\u9a57\u8b49\u9ede\u8207\u4f4d\u65bc\u5167\u90e8RAM\u7684\u5f71\u50cf\u7de9\u885d\u5340\u76f8\u4f3c\uff0c\u4f46\u61c9\u518d\u6b21\u6aa2\u67e5\uff0c\u56e0\u70ba\u5916\u90e8\u8a18\u61b6\u9ad4\u7684\u8a2a\u554f\u901f\u5ea6\u53ef\u80fd\u6703\u5f71\u97ff\u5f9e\u5f71\u50cf\u7de9\u885d\u5340\u5411\u986f\u793a\u5668\u7684\u50b3\u8f38\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u9a57\u8b49\u9ede"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u986f\u793a\u5f71\u50cf\u7de9\u885d\u5340"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u986f\u793a\u63a7\u5236\u5668\u6216SPI\u5df2\u8a2d\u5b9a\u4e26\u57f7\u884c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u986f\u793a\u5df2\u66f4\u65b0\u7684\u5f71\u50cf\u7de9\u885d\u5340"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6211\u5011\u77e5\u9053\u5982\u4f55\u91cd\u8907\u9001\u51fa\u5f71\u50cf\u7de9\u885d\u5340\u8cc7\u6599")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u66f4\u65b0\u983b\u7387\u6b63\u78ba"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8a2d\u5b9a\u66f4\u65b0\u983b\u7387\u548c\u524d\u5f8c\u5eca\uff0c\u4ee5\u53d6\u5f97\u6240\u9700\u7684\u756b\u9762")))),(0,n.kt)("h2",i({},{id:"prerequisites"}),"\u5148\u6c7a\u689d\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9a5f\u7684\u5148\u6c7a\u689d\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8RAM\u4e2d\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u5740")),(0,n.kt)("h2",i({},{id:"do"}),"\u57f7\u884c"),(0,n.kt)("p",null,"\u6211\u5011\u6709\u5169\u500b\u5de5\u4f5c\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u653e\u5728\u5916\u90e8RAM"),(0,n.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u986f\u793a\u63a7\u5236\u5668\uff0c\u4ee5\u5f9e\u5916\u90e8RAM\u8b80\u53d6\u8cc7\u6599")),(0,n.kt)("p",null,"\u7576\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u65bc\u5916\u90e8RAM\u4e2d\u6642\uff0c\u901a\u5e38\u4e0d\u70ba\u5176\u5206\u914d\u7de9\u885d\u5340\u9663\u5217\u3002 \u53ea\u9700\u5ba3\u544a\u4e00\u500b\u6307\u5411\u6b63\u78ba\u4f4d\u5740\u7684\u6307\u6a19\u5373\u53ef\u3002 \u7136\u5f8c\u624b\u52d5\u9078\u64c7\u5916\u90e8RAM\u4f4d\u5740\u3002 \u6b64\u4f4d\u5740\u53ef\u4f4d\u65bc\u5916\u90e8RAM\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u4f46\u901a\u5e38\u4f4d\u65bcRAM\u7684\u958b\u982d\uff1a"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"uint16_t* framebuffer = (uint16_t*)0xC0000000;  //16 bpp framebuffer\n")),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u91cd\u8907\u4f7f\u7528",(0,n.kt)("a",i({parentName:"p"},{href:"03-display-internal"}),"\u57fa\u65bc\u5167\u90e8RAM\u986f\u793a"),"\u6b65\u9a5f\u4e2d\u5efa\u7acb\u7684\u5c0f\u578b\u6e2c\u8a66\u7a0b\u5f0f\u3002"),(0,n.kt)("h3",i({},{id:"ltdc-layer-configuration"}),"LTDC\u5404\u5716\u5c64\u8a2d\u5b9a"),(0,n.kt)("p",null,"\u8acb\u8a18\u4f4f\u66f4\u6539LTDC\u5716\u5c64\u7684\u914d\u7f6e\u3002 \u7531\u65bc\u6211\u5011\u73fe\u5728\u6709\u4e86\u5f71\u50cf\u7de9\u885d\u5340\u7684\u7279\u5b9a\u4f4d\u5740\uff0c\u6211\u5011\u53ef\u4ee5\u901a\u904eCubeMx\u5c07\u8a72\u4f4d\u5740\u9032\u884c\u8a2d\u5b9a\uff08\u5373\u5e40\u7de9\u5b58\u8d77\u59cb\u4f4d\u5740\uff09\uff1a"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9aLTDC\u5c64\u53c3\u6578"),(0,n.kt)("p",null,"\u8acb\u8a18\u4f4f\u5f9e\u4f60\u7684\u7a0b\u5f0f\u4e2d\u79fb\u9664\u6b64\u884c\u8207\u5f71\u50cf\u7de9\u885d\u5340\u9663\u5217\uff1a"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,n.kt)("p",null,"\u5982\u679c\u5728",(0,n.kt)("a",i({parentName:"p"},{href:"03-display-internal"}),"\u6b65\u9a5f03"),"\u5c07LTDC\u5716\u5c64\u5927\u5c0f\u8a2d\u7f6e\u70ba\u50c5\u66f4\u65b0\u90e8\u5206\u986f\u793a\uff08\u7531\u65bc\u5167\u90e8RAM\u7684\u6578\u91cf\uff09\uff0c\u5247\u73fe\u5728\u9700\u8981\u91cd\u505a\u3002 \u91cd\u65b0\u8a2d\u5b9aLTDC\u5716\u5c64\u53c3\u6578\uff0c\u4ee5\u4fbf\u652f\u63f4\u6574\u500b\u986f\u793a\u5668\u3002"))}f.isMDXComponent=!0}}]);
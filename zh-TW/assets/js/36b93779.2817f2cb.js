"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[61099],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96151:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const o=l},49018:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(59496),l=r(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const i=a},58233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});r(59496);var n=r(49613),l=r(49018),o=r(95375);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const p={id:"11-flash-loader",title:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",sidebar_label:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09"},c=void 0,u={unversionedId:"development/board-bring-up/how-to/11-flash-loader",id:"development/board-bring-up/how-to/11-flash-loader",title:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",description:"\u52d5\u6a5f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/11-flash-loader.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/11-flash-loader",permalink:"/4.24/zh-TW/docs/development/board-bring-up/how-to/11-flash-loader",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"11-flash-loader",title:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",sidebar_label:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09"},sidebar:"docs",previous:{title:"10. \u6309\u9215",permalink:"/4.24/zh-TW/docs/development/board-bring-up/how-to/10-physical-buttons"},next:{title:"TouchGFX AL \u958b\u767c\u7c21\u4ecb",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"}},s={},d=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u9a57\u8b49",id:"verification",level:3},{value:"\u5148\u6c7a\u689d\u4ef6",id:"prerequisites",level:2},{value:"\u57f7\u884c",id:"do",level:2},{value:"STM32CubeProgrammer\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4",id:"flash-loader-for-stm32cubeprogrammer",level:3},{value:"\u57fa\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u5c08\u6709\u89e3\u6c7a\u65b9\u6848",id:"proprietary-application-based-solution",level:3},{value:"\u6e2c\u8a66",id:"testing",level:3}],m={toc:d},h="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(h,a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"motivation"}),"\u52d5\u6a5f"),(0,n.kt)("p",null,"\u5728\u8a72\u6b65\u9a5f\u4e2d\uff0c\u6211\u5011\u5c07\u8a0e\u8ad6\u5982\u4f55\u628a\u6578\u64da\u8f09\u5165\u5230\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002  \u7de8\u8b6f\u5668\u5c07\u7de8\u8b6f\u5c08\u6848\u4e2d\u7684\u6587\u5b57\u3001\u5b57\u9ad4\u548c\u5716\u50cf\uff0c\u4e26\u5c07\u9019\u4e9b\u6578\u64da\u751f\u6210\u4e8c\u9032\u4f4d\u6216\u5341\u516d\u9032\u4f4d\u6a94\u3002 \u6b64\u6578\u64da\u901a\u5e38\u88ab\u653e\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u88ab\u4fdd\u7559\u7528\u65bc\u7a0b\u5f0f\u7a0b\u5f0f\u78bc\u3002"),(0,n.kt)("p",null,"\u5728\u958b\u767c\u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u9700\u8981\u4e00\u7a2e\u65b9\u6cd5\u5c07\u8cc7\u6599\u5beb\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u4f46\u5f9e\u57f7\u884c\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\u7684\u7a0b\u5f0f\u6642\u5c31\u6c92\u5fc5\u8981\u505a\u5beb\u5165\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u5728\u958b\u767c\u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u9700\u8981\u4e00\u7a2e\u65b9\u6cd5\u5c07\u8cc7\u6599\u5beb\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u4f46\u5f9e\u57f7\u884c\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\u7684\u7a0b\u5f0f\u6642\u5c31\u6c92\u5fc5\u8981\u505a\u5beb\u5165\u64cd\u4f5c\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70baSTM32CubeProgrammer\u64b0\u5beb\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u57fa\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u5c08\u6709\u89e3\u6c7a\u65b9\u6848")),(0,n.kt)(l.Z,{mdxType:"Note"},"\u5982\u679c\u60a8\u7684\u958b\u767c\u677f\u6c92\u6709\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u8acb\u8df3\u904e\u6b64\u6b65\u9a5f"),(0,n.kt)("h2",a({},{id:"goal"}),"\u76ee\u6a19"),(0,n.kt)("p",null,"\u5169\u7a2e\u5c07\u8cc7\u6599\u5beb\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u5e38\u898b\u65b9\u6cd5\uff1a"),(0,n.kt)("h3",a({},{id:"verification"}),"\u9a57\u8b49"),(0,n.kt)("p",null,"\u672c\u7bc0\u7684\u76ee\u7684\u70ba\u9078\u64c7\u4e26\u958b\u767c\u4e00\u7a2e\u5c07\u6578\u64da\u8f09\u5165\u5230\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u6a5f\u5236\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u9a57\u8b49\u9ede"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u6578\u64da\u53ef\u4ee5\u5237\u5165"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u53ef\u7528\u65bc\u5f71\u50cf\u5b58\u5132")))),(0,n.kt)("h2",a({},{id:"prerequisites"}),"\u5148\u6c7a\u689d\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u7bc0\u7684\u9a57\u8b49\u9ede\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6709\u95dc\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u8cc7\u8a0a\uff0c\u67e5\u95b1\u8cc7\u6599\u624b\u518a"),(0,n.kt)("li",{parentName:"ul"},"\u95dc\u65bcMCU\u8207\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e4b\u9593\u7684\u9023\u63a5\u7684\u8cc7\u8a0a")),(0,n.kt)("h2",a({},{id:"do"}),"\u57f7\u884c"),(0,n.kt)("h3",a({},{id:"flash-loader-for-stm32cubeprogrammer"}),"STM32CubeProgrammer\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer"),"\u5e36\u6709\u7528\u65bc\u5404\u7a2eSTM32\u8a55\u4f30\u5957\u4ef6\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u7a0b\u5f0f\u3002 \u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4\u662f\u53ef\u88dd\u8f09\u5230MCU\u7684RAM\u4e2d\u7684\u5c0f\u7a0b\u5f0f\uff0c\u4ee5\u4fbf\u5c0d\u5feb\u9583\u8a18\u61b6\u9ad4\u9032\u884c\u7a0b\u5f0f\u8a2d\u8a08\u3002"),(0,n.kt)("p",null,"\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4\u5305\u62ec\u5169\u90e8\u5206\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u8207\u5feb\u9583\u8a18\u61b6\u9ad4\u901a\u4fe1\u6240\u9700\u7684GPIO\u548c\u5feb\u9583\u8a18\u61b6\u9ad4\u4ecb\u9762"),(0,n.kt)("li",{parentName:"ul"},"\u91d0\u6e05\u5feb\u9583\u8a18\u61b6\u9ad4\u7a0b\u5f0f\u8a2d\u8a08\u6240\u9700\u7684\u6307\u4ee4\u5e8f\u5217\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u6f14\u7b97\u6cd5")),(0,n.kt)("p",null,"\u9019\u4e9b\u901a\u5e38\u57fa\u65bc\u73fe\u6709\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u88dd\u8f09\u7a0b\u5f0f\u3002 \u5982\u679c\u60a8\u53ef\u4ee5\u70ba\u6b63\u5728\u4f7f\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u627e\u5230\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4\uff0c\u6700\u597d\u4ee5\u8a72\u8edf\u9ad4\u4f5c\u70ba\u57fa\u790e\u4e26\u4fee\u6539GPIO\u90e8\u5206\u3002 \u5982\u679c\u60a8\u901a\u904e\u8907\u88fd\u8a55\u4f30\u5957\u4ef6\u4e2d\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u96fb\u8def\u4f86\u8a2d\u8a08\u786c\u9ad4\uff0c\u5247\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8a72\u5957\u4ef6\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u88dd\u8f09\u8edf\u9ad4\u3002 \u9019\u5c31\u662f\u4f7f\u7528\u65b9\u6cd5\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"STM32CubeProgrammer"),"\u96a8\u9644\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4\u5c08\u6848\u4f4d\u65bc\u5b89\u88dd\u8cc7\u6599\u593e\u4e2d\uff0c\u5176\u8def\u5f91\u901a\u5e38\u70ba\uff1a",(0,n.kt)("em",{parentName:"p"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer\\bin\\ExternalLoader")),(0,n.kt)("p",null,"\u4e5f\u53ef\u5728GitHub\u627e\u5230\u5feb\u9583\u8a18\u61b6\u9ad4\u71d2\u9304\u8edf\u9ad4\u5c08\u6848\uff1a"),(0,n.kt)(o.Z,{to:"https://github.com/STMicroelectronics/stm32-external-loader",mdxType:"Link"},"GitHub\u4e0a\u7684STM32\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668"),(0,n.kt)("h3",a({},{id:"proprietary-application-based-solution"}),"\u57fa\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u5c08\u6709\u89e3\u6c7a\u65b9\u6848"),(0,n.kt)("p",null,"\u53e6\u4e00\u7a2e\u89e3\u6c7a\u65b9\u6848\u662f\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u7a0b\u5f0f\u78bc\u5305\u542b\u5230\u61c9\u7528\u7a0b\u5f0f\u672c\u8eab\u3002 \u8a72\u7406\u5ff5\u662f\uff0c\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u4e2d\u5df2\u5b58\u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u914d\u7f6e\uff08\u4ee5\u4fbf\u53ef\u4ee5\u5f9e\u5176\u8f09\u5165\uff09\uff0c\u4e5f\u8a31\u60a8\u901a\u904e\u4e4b\u524d\u7684\u6e2c\u8a66\u5df2\u7d93\u77e5\u9053\u5982\u4f55\u5beb\u4e00\u584a\u7a0b\u5f0f\u78bc\u5230\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002 \u7136\u5f8c\uff0c\u60a8\u53ea\u9700\u4e00\u7a2e\u5c07\u65b0\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u6578\u64da\u50b3\u8f38\u5230\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u65b9\u6cd5\u3002 \u4e00\u7a2e\u65b9\u6cd5\u662f\u900f\u904eUART\u3002 \u61c9\u7528\u7a0b\u5f0f\u63a5\u6536\u6578\u64da\u6d41\uff0c\u4e26\u5c07\u6578\u64da\u9010\u584a\u5beb\u5165\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,n.kt)("p",null,"\u5728\u8a72\u64cd\u4f5c\u57f7\u884c\u671f\u9593\uff0c\u5feb\u9583\u8a18\u61b6\u9ad4\u7121\u6cd5\u8655\u65bc\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\uff0c\u56e0\u6b64\u901a\u5e38\u5fc5\u9808\u5c07\u61c9\u7528\u7a0b\u5f0f\u7f6e\u65bc\u7279\u6b8a\u6a21\u5f0f\u3002"),(0,n.kt)("p",null,"\u53ef\u5728\u7db2\u8def\u627e\u5230\u7528\u65bc\u4f4d\u5143\u7d44\u50b3\u8f38\u7684\u958b\u6e90\u89e3\u6c7a\u65b9\u6848\u3002 \u4f8b\u5982\uff0cY-modem\u5354\u5b9a\u5728\u8cc7\u6599\u4e0a\u63d0\u4f9b16\u4f4d\u5143 CRC\u3002"),(0,n.kt)("h3",a({},{id:"testing"}),"\u6e2c\u8a66"),(0,n.kt)("p",null,"\u53ef\u5728\u7db2\u8def\u627e\u5230\u7528\u65bc\u4f4d\u5143\u7d44\u50b3\u8f38\u7684\u958b\u6e90\u89e3\u6c7a\u65b9\u6848\u3002 \u4f8b\u5982\uff0cY-modem\u5354\u5b9a\u5728\u8cc7\u6599\u4e0a\u63d0\u4f9b16\u4f4d\u5143 CRC\u3002"),(0,n.kt)("p",null,"\u5efa\u8b70\u7acb\u5373\u5fb9\u5e95\u6e2c\u8a66\u6574\u500b\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u4ee5\u5118\u65e9\u767c\u73fe\u53ef\u80fd\u5b58\u5728\u7684\u554f\u984c\u3002"))}f.isMDXComponent=!0}}]);
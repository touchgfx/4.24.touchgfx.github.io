"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[66938],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),h=l,d=s["".concat(o,".").concat(h)]||s[h]||m[h]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:l,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),l=r(7029);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,l.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(59496),l=r(96151);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const c=i},96151:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=l},84617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>h});r(59496);var n=r(49613),l=r(95375),a=r(48753),i=r(89639);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const u={id:"engine-architecture",title:"\u5f15\u64ce\u67b6\u6784"},p=void 0,s={unversionedId:"basic-concepts/engine-architecture",id:"basic-concepts/engine-architecture",title:"\u5f15\u64ce\u67b6\u6784",description:"\u5f52\u6839\u7ed3\u5e95\uff0c\u7ed8\u56fe\u7cfb\u7edf\u6700\u7ec8\u5c06\u67d0\u4e9b\u5185\u5bb9\u663e\u793a\u5728\u7269\u7406\u663e\u793a\u5c4f\u4e0a\u3002 \u5feb\u901f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/engine-architecture.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/engine-architecture",permalink:"/4.24/zh-CN/docs/basic-concepts/engine-architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"engine-architecture",title:"\u5f15\u64ce\u67b6\u6784"}},m={},h=[{value:"\u56db\u4e2a\u7ec4\u6210\u90e8\u5206",id:"the-four-parts",level:2},{value:"MCU",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"Flash",id:"flash",level:3},{value:"\u663e\u793a",id:"display",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u57fa\u672c\u7b56\u7565",id:"general-strategy",level:3},{value:"\u8bbe\u7f6e\u7279\u5b9a\u7b56\u7565",id:"setup-specific-strategy",level:3}],d={toc:h},k="wrapper";function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(k,c({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u5f52\u6839\u7ed3\u5e95\uff0c\u7ed8\u56fe\u7cfb\u7edf\u6700\u7ec8\u5c06\u67d0\u4e9b\u5185\u5bb9\u663e\u793a\u5728\u7269\u7406\u663e\u793a\u5c4f\u4e0a\u3002 \u5feb\u901f\u3002")),(0,n.kt)("p",null,"\u201c\u5d4c\u5165\u5f0f\u7ed8\u56fe\u7cfb\u7edf\u201d\u4e00\u8bcd\u6709\u8bb8\u591a\u79cd\u542b\u4e49\u3002"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u4e0d\u540c\u7684\u4eba\u5bf9\u201c\u5d4c\u5165\u5f0f\u7cfb\u7edf\u201d\u4e00\u8bcd\u6709\u4e0d\u540c\u7684\u7406\u89e3\u3002 \u5bf9\u67d0\u4e9b\u4eba\u6765\u8bf4\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7edf\u610f\u5473\u7740\u5341\u5206\u4f20\u7edf\u76848\u4f4d\u5fae\u63a7\u5236\u5668\uff0c\u65e0\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5b9e\u9645\u4e0a\u4e5f\u65e0RAM\u3001ROM\u6216GPIO\u3002 \u5bf9\u5176\u4ed6\u4eba\u6765\u8bf4\uff0c\u5b83\u53ef\u80fd\u610f\u5473\u7740\u529f\u80fd\u5f3a\u5927\u7684\u73b0\u4ee3\u667a\u80fd\u624b\u673a\u3002"),(0,n.kt)("p",null,"\u5176\u6b21\uff0c\u201c\u7ed8\u56fe\u7cfb\u7edf\u201d\u4e00\u8bcd\u6709\u8bb8\u591a\u79cd\u89e3\u91ca\u3002 \u5bf9\u67d0\u4e9b\u4eba\u6765\u8bf4\uff0c\u5b83\u8868\u793a\u5728\u559c\u6b22\u7684\u7ed8\u753b\u7a0b\u5e8f\u4e2d\u7ed8\u5236\u50cf\u7d20\u3002 \u5bf9\u5176\u4ed6\u4eba\u6765\u8bf4\uff0c\u5b83\u8868\u793a\u6e38\u620f\u673a\u4e0a\u8fd0\u884c\u76843D\u6e32\u67d3\u8f6f\u4ef6\u3002"),(0,n.kt)("p",null,"\u5bf9TouchGFX\u800c\u8a00\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7edf\u8868\u793aSTM32\u5fae\u63a7\u5236\u5668\u4e0a\u7684\u4efb\u610f\u7cfb\u7edf\u3002 \u7ed8\u56fe\u7cfb\u7edf\u8868\u793a\u8fd0\u884c\u9891\u7387\u4e3a60\u5e27\u6bcf\u79d2\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u3002"),(0,n.kt)("h2",c({},{id:"the-four-parts"}),"\u56db\u4e2a\u7ec4\u6210\u90e8\u5206"),(0,n.kt)("p",null,"\u4e3a\u4e86\u5728\u6b64\u7c7b\u5e73\u53f0\u4e0a\u5b9e\u73b0\u7ed8\u56fe\u5e94\u7528\uff0c\u6211\u4eec\u8003\u8651\u56db\u4e2a\u76f4\u63a5\u76f8\u5173\u7684\u4e3b\u8981\u7ec4\u4ef6\u3002 \u5f53\u7136\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7edf\u53ef\u80fd\u5305\u542b\u8bb8\u591a\u5176\u4ed6\u7ec4\u4ef6\uff0c\u4f46\u5176\u4ed6\u7ec4\u4ef6\u4e0e\u56fe\u5f62\u663e\u793a\u7684\u76f8\u5173\u6027\u8f83\u5c0f\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/four-parts.svg",noShadow:"true",width:480,mdxType:"Figure"},"MCU\u3001RAM\u3001Flash\u548c\u663e\u793a\u5c4f"),(0,n.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0cTouchGFX\u4f7f\u7528MCU\uff0c\u901a\u8fc7\u5bf9flash\u4e2d\u7684\u5404\u4e2a\u90e8\u5206\u8fdb\u884c\u7ec4\u5408\uff0c\u521b\u5efa\u548c\u66f4\u65b0RAM\u4e2d\u7684\u56fe\u50cf\u3002 \u5904\u7406\u597d\u7684\u56fe\u50cf\u4f1a\u88ab\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u3002 \u7cfb\u7edf\u4f1a\u89c6\u9700\u8981\u5c3d\u53ef\u80fd\u591a\u5730\u91cd\u590d\u6b64\u8fc7\u7a0b\u3002"),(0,n.kt)("h3",c({},{id:"mcu"}),"MCU"),(0,n.kt)("p",null,"\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0cMCU\u627f\u62c5\u4e86\u6240\u6709\u91cd\u8981\u4efb\u52a1\u3002 \u5b83\u8bfb\u53d6\u95ea\u5b58\u4e2d\u7684\u56fe\u50cf\uff0c\u5e76\u5c06\u5b83\u4eec\u5199\u5165RAM\u3002 \u5728\u5c06\u534a\u900f\u660e\u7ea2\u8272\u6587\u672c\u878d\u5408\u5230\u56fe\u50cf\u4e0a\u65f6\uff0c\u5b83\u8ba1\u7b97\u5f97\u5230\u7684\u8272\u5f69\u5e76\u5c06\u5176\u5b58\u50a8\u5230RAM\u3002 \u5b83\u5bf9\u5706\u7684\u6240\u6709\u50cf\u7d20\u8fdb\u884c\u6e32\u67d3\u5e76\u5b58\u50a8\u5230RAM\u3002 \u7b49\u7b49\u3002"),(0,n.kt)("p",null,"STM32 MCU\u5177\u6709\u7279\u5b9a\u529f\u80fd\uff0c\u80fd\u591f\u4e3a\u7ed8\u56fe\u7cfb\u7edf\u7684\u5b9e\u73b0\u63d0\u4f9b\u5e2e\u52a9\u3002 \u53c2\u89c1",(0,n.kt)("a",c({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU"),"\u90e8\u5206\u4e86\u89e3\u4e0d\u540cMCU\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,n.kt)("h3",c({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"\u8ba1\u7b97\u540e\u7684\u56fe\u50cf\u5b58\u50a8\u5728RAM\u4e2d\u3002 MCU\u5bf9RAM\u6267\u884c\u8bfb\u548c\u5199\u64cd\u4f5c\u3002 \u5728\u5c06\u6240\u5f97\u56fe\u50cf\u4f20\u8f93\u7ed9\u663e\u793a\u5c4f\u65f6\uff0c\u518d\u6b21\u6267\u884c\u8bfb\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"RAM\u901a\u5e38\u4f4d\u4e8eMCU\u5185\u90e8\u3002 \u5982\u679c\u5c06\u6240\u5f97\u56fe\u50cf\u5b58\u50a8\u5728\u5185\u90e8RAM\u4e2d\u7684\u65b9\u6cd5\u4e0d\u53ef\u884c\uff0c\u53ef\u4ee5\u6dfb\u52a0\u5916\u90e8RAM\u3002"),(0,n.kt)("h3",c({},{id:"flash"}),"Flash"),(0,n.kt)("p",null,"\u6240\u6709\u9759\u6001\u6570\u636e\u5747\u5b58\u50a8\u5728\u95ea\u5b58\u4e2d\u3002 \u56fe\u50cf\u3001\u5b57\u4f53\u548c\u6587\u672c\u3002 \u95ea\u5b58\u7531MCU\u8bfb\u53d6\uff0c\u5176\u5185\u5bb9\u88ab\u5199\u5165RAM\u6216\u4e0eRAM\u5185\u5bb9\u8fdb\u884c\u7ec4\u5408\u3002"),(0,n.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u5185\u90e8\u95ea\u5b58\u5f88\u5c11\u80fd\u591f\u5bb9\u7eb3\u4e0b\u6240\u6709\u56fe\u5f62\u8d44\u4ea7\uff0c\u56e0\u6b64\u5e94\u7528\u4e2d\u4f1a\u589e\u52a0\u5916\u90e8\u95ea\u5b58\u3002"),(0,n.kt)("p",null,"\u7406\u60f3\u7684\u505a\u6cd5\u662f\u5bf9\u95ea\u5b58\u8fdb\u884c\u5b58\u50a8\u5668\u6620\u5c04\uff0c\u4ee5\u4fbf\u4ece\u95ea\u5b58\u76f4\u63a5\u8bfb\u53d6\u50cf\u7d20\u5e76\u5199\u5165RAM\u3002 \u6216\u8005\uff0c\u53ef\u5c06\u95ea\u5b58\u5185\u5bb9\u7f13\u5b58\u5728RAM\u4e2d\uff0c\u7136\u540e\u518d\u4eceRAM\u8bfb\u53d6\u3002"),(0,n.kt)("h3",c({},{id:"display"}),"\u663e\u793a"),(0,n.kt)("p",null,"\u663e\u793a\u5c4f\u5c06\u56fe\u50cf\u5b9e\u9645\u663e\u793a\u7ed9\u4eba\u773c\u3002"),(0,n.kt)("p",null,"RAM\u4e2d\u5b58\u50a8\u7684\u56fe\u50cf\u7531MCU\u6309\u56fa\u5b9a\u65f6\u95f4\u95f4\u9694\u53d1\u9001\u5230\u663e\u793a\u5c4f\u3002"),(0,n.kt)("h2",c({},{id:"performance"}),"\u6027\u80fd"),(0,n.kt)("p",null,"\u4e3a\u4e86\u5728\u8fd9\u79cd\u8bbe\u7f6e\u548c\u6700\u7ec8\u7684\u663e\u793a\u5c4f\u4e0a\u83b7\u5f97\u6d41\u7545\u7684\u52a8\u753b\u6548\u679c\uff0c\u5728\u5b9e\u73b0\u5d4c\u5165\u5f0f\u7ed8\u56fe\u7cfb\u7edf\u65f6\u5fc5\u987b\u6ce8\u610f\u4e00\u4e9b\u4e8b\u9879\u3002"),(0,n.kt)("h3",c({},{id:"general-strategy"}),"\u57fa\u672c\u7b56\u7565"),(0,n.kt)("p",null,"\u901a\u5e38\u52a1\u5fc5\u8003\u8651\u7684\u51e0\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5728\u65e0\u53d8\u5316\u7684\u90e8\u5206\u82b1\u8d39\u65f6\u95f4"),(0,n.kt)("li",{parentName:"ul"},"\u4ece\u95ea\u5b58\u4f20\u8f93\u5230RAM\u7684\u6570\u636e\u5e94\u5c3d\u53ef\u80fd\u5c11"),(0,n.kt)("li",{parentName:"ul"},"\u4eceRAM\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u7684\u6570\u636e\u5e94\u5c3d\u53ef\u80fd\u5c11"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u56fe\u50cf\u8d28\u91cf\u4e0e\u52a8\u753b\u901f\u5ea6\u4e4b\u95f4\u5bfb\u6c42\u9002\u5f53\u5e73\u8861"),(0,n.kt)("li",{parentName:"ul"},"\u5229\u7528\u786c\u4ef6\u529f\u80fd")),(0,n.kt)("p",null,"TouchGFX Engine\u6709\u52a9\u4e8e\u89e3\u51b3\u6240\u6709\u8fd9\u4e9b\u95ee\u9898\uff0c\u4f46\u5f00\u53d1\u4eba\u5458\u4e5f\u5fc5\u987b\u6ce8\u610f\u3002"),(0,n.kt)("h3",c({},{id:"setup-specific-strategy"}),"\u8bbe\u7f6e\u7279\u5b9a\u7b56\u7565"),(0,n.kt)("p",null,"\u5927\u91cf\u53ef\u80fd\u7684\u5d4c\u5165\u5f0f\u8bbe\u7f6e\u610f\u5473\u7740\u57fa\u4e8e\u7279\u5b9a\u8bbe\u7f6e\u4e0e\u57fa\u4e8e\u5176\u4ed6\u8bbe\u7f6e\u80fd\u591f\u5b9e\u73b0\u7684\u6548\u679c\u4e4b\u95f4\u53ef\u80fd\u5b58\u5728\u5de8\u5927\u5dee\u5f02\u3002"),(0,n.kt)("p",null,"\u53ef\u80fd\u7684\u8bbe\u7f6e\u6982\u89c8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"STM32 MCU",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"50\u81f3500 MHz\u65f6\u949f\u9891\u7387"),(0,n.kt)("li",{parentName:"ul"},"\u56fe\u5f62\u76f8\u5173IP\uff1aChrom-ART, Chrom-GRC, JPEG codec, ..."))),(0,n.kt)("li",{parentName:"ul"},"RAM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0\u81f31 MB\uff08\u5185\u90e8\uff09"),(0,n.kt)("li",{parentName:"ul"},"0\u81f3100 MB\uff08\u5916\u90e8\uff09"))),(0,n.kt)("li",{parentName:"ul"},"Flash",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0\u81f31 MB\uff08\u5185\u90e8\uff09"),(0,n.kt)("li",{parentName:"ul"},"0\u81f31 GB\uff08\u5916\u90e8\uff09"))),(0,n.kt)("li",{parentName:"ul"},"\u663e\u793a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1\u81f324\u4f4d\u8272\u5f69"),(0,n.kt)("li",{parentName:"ul"},"100x100\u81f31000x1000\u50cf\u7d20")))),(0,n.kt)("p",null,"\u663e\u7136\uff0c\u5728\u4e00\u79cd\u53ef\u80fd\u8bbe\u7f6e\u4e0a\u53ef\u5b9e\u73b0\u7684UI\u5e94\u7528\uff0c\u5728\u53e6\u4e00\u79cd\u8bbe\u7f6e\u4e0a\u53ef\u80fd\u6839\u672c\u65e0\u6cd5\u5b9e\u73b0\u3002 \u56e0\u6b64\uff0c\u5fc5\u987b\u6ce8\u610f\u8ba9\u9700\u8981\u7684UI\u5e94\u7528\u4e0e\u5b9e\u9645\u8bbe\u7f6e\u4fdd\u6301\u4e00\u81f4\u3002"),(0,n.kt)("p",null,"TouchGFX\u662f\u4e3a\u8fd9\u4e9b\u8bbe\u7f6e\u81f3\u5e95\u5c42\u5f00\u59cb\u8bbe\u8ba1\u7684\uff0c\u4fa7\u91cd\u4e8e\u6700\u5927\u7a0b\u5ea6\u5229\u7528STM32 MCU\u7684\u80fd\u529b\u5e76\u5c3d\u53ef\u80fd\u51cf\u5c11\u5bf9RAM\u548c\u95ea\u5b58\u7684\u9700\u6c42\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u8bf7\u53c2\u8003",(0,n.kt)(l.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32\u4f4dArm Cortex MCU"),"\u4e86\u89e3\u53ef\u7528\u7684STM32\u5fae\u63a7\u5236\u5668\u3002"),(0,n.kt)("li",null,"\u53c2\u89c1",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\u786c\u4ef6\u9009\u578b"),"\u6307\u5357\u4e86\u89e3\u5173\u4e8e\u53ef\u80fd\u7684\u786c\u4ef6\u9009\u62e9\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,n.kt)("li",null,"\u53c2\u89c1",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU"),"\u90e8\u5206\u4e86\u89e3\u4e0d\u540cMCU\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,n.kt)("li",null,"\u53c2\u89c1",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"\u786c\u4ef6\u9009\u578b"),"\u6307\u5357\u4e86\u89e3\u5173\u4e8e\u53ef\u80fd\u7684\u786c\u4ef6\u9009\u62e9\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")))}f.isMDXComponent=!0}}]);
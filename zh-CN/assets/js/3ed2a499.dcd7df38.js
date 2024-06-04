"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[55135],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),o=r(7029);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(59496),o=r(96151);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const l=i},96151:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=o},22392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>m});r(59496);var n=r(49613),o=r(95375),a=r(48753),i=r(89639);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"embedded-graphics",title:"\u5d4c\u5165\u5f0f\u7ed8\u56fe\u7cfb\u7edf"},d=void 0,s={unversionedId:"basic-concepts/embedded-graphics",id:"basic-concepts/embedded-graphics",title:"\u5d4c\u5165\u5f0f\u7ed8\u56fe\u7cfb\u7edf",description:"\u201c\u5d4c\u5165\u5f0f\u7ed8\u56fe\u7cfb\u7edf\u201d\u4e00\u8bcd\u6709\u8bb8\u591a\u79cd\u542b\u4e49\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/embedded-graphics.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/embedded-graphics",permalink:"/4.24/zh-CN/docs/basic-concepts/embedded-graphics",draft:!1,tags:[],version:"current",frontMatter:{id:"embedded-graphics",title:"\u5d4c\u5165\u5f0f\u7ed8\u56fe\u7cfb\u7edf"},sidebar:"docs",previous:{title:"Basic Concepts",permalink:"/4.24/zh-CN/docs/category/basic-concepts"},next:{title:"\u8272\u5f69\u683c\u5f0f",permalink:"/4.24/zh-CN/docs/basic-concepts/color-formats"}},u={},m=[{value:"\u56db\u4e2a\u4e3b\u8981\u7ec4\u6210\u90e8\u5206",id:"the-four-main-parts",level:2},{value:"MCU",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"Flash",id:"flash",level:3},{value:"\u663e\u793a",id:"display",level:3}],h={toc:m},g="wrapper";function f(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(g,l({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u201c\u5d4c\u5165\u5f0f\u7ed8\u56fe\u7cfb\u7edf\u201d\u4e00\u8bcd\u6709\u8bb8\u591a\u79cd\u542b\u4e49\u3002"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u4e0d\u540c\u7684\u4eba\u5bf9\u201c\u5d4c\u5165\u5f0f\u7cfb\u7edf\u201d\u4e00\u8bcd\u6709\u4e0d\u540c\u7684\u7406\u89e3\u3002 \u5bf9\u67d0\u4e9b\u4eba\u6765\u8bf4\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7edf\u610f\u5473\u7740\u5341\u5206\u53ef\u9760\u7684\u4f20\u7edf8\u4f4d\u5fae\u63a7\u5236\u5668\uff0c\u65e0\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5b9e\u9645\u4e0a\u4e5f\u65e0RAM\u3001ROM\u6216GPIO\u3002 \u5bf9\u5176\u4ed6\u4eba\u6765\u8bf4\uff0c\u5b83\u53ef\u80fd\u610f\u5473\u7740\u529f\u80fd\u5f3a\u5927\u7684\u73b0\u4ee3\u667a\u80fd\u624b\u673a\u3002"),(0,n.kt)("p",null,"\u5176\u6b21\uff0c\u201c\u7ed8\u56fe\u7cfb\u7edf\u201d\u4e00\u8bcd\u6709\u8bb8\u591a\u79cd\u89e3\u91ca\u3002 \u5bf9\u67d0\u4e9b\u4eba\u6765\u8bf4\uff0c\u5b83\u8868\u793a\u5728\u559c\u6b22\u7684\u7ed8\u753b\u7a0b\u5e8f\u4e2d\u7ed8\u5236\u50cf\u7d20\u3002 \u5bf9\u5176\u4ed6\u4eba\u6765\u8bf4\uff0c\u5b83\u8868\u793a\u6e38\u620f\u673a\u4e0a\u8fd0\u884c\u76843D\u6e32\u67d3\u8f6f\u4ef6\u3002"),(0,n.kt)("p",null,"\u5bf9TouchGFX\u800c\u8a00\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7edf\u8868\u793aSTM32\u5fae\u63a7\u5236\u5668\u4e0a\u7684\u4efb\u610f\u7cfb\u7edf\u3002 \u7ed8\u56fe\u7cfb\u7edf\u8868\u793a\u6709\u7528\u6237\u754c\u9762\u7684\u8fd0\u884c\u9891\u7387\u4e3a60\u5e27\u6bcf\u79d2\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u3002"),(0,n.kt)("h2",l({},{id:"the-four-main-parts"}),"\u56db\u4e2a\u4e3b\u8981\u7ec4\u6210\u90e8\u5206"),(0,n.kt)("p",null,"\u4e3a\u4e86\u5728\u6b64\u7c7b\u5e73\u53f0\u4e0a\u5b9e\u73b0\u7ed8\u56fe\u5e94\u7528\uff0c\u6211\u4eec\u8003\u8651\u56db\u4e2a\u76f4\u63a5\u76f8\u5173\u7684\u4e3b\u8981\u7ec4\u4ef6\u3002 \u5f53\u7136\uff0c\u5d4c\u5165\u5f0f\u7cfb\u7edf\u53ef\u80fd\u5305\u542b\u8bb8\u591a\u5176\u4ed6\u7ec4\u4ef6\uff0c\u4f46\u5176\u4ed6\u7ec4\u4ef6\u4e0e\u56fe\u5f62\u663e\u793a\u7684\u76f8\u5173\u6027\u8f83\u5c0f\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/embedded-graphics-primer/4-main-parts.webp",noShadow:"true",mdxType:"Figure"},"MCU\u3001RAM\u3001\u95ea\u5b58\u548c\u663e\u793a\u5c4f"),(0,n.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0cTouchGFX\u4f7f\u7528MCU\uff0c\u901a\u8fc7\u5bf9\u95ea\u5b58\u4e2d\u7684\u5404\u4e2a\u90e8\u5206\u8fdb\u884c\u7ec4\u5408\uff0c\u521b\u5efa\u548c\u66f4\u65b0RAM\u4e2d\u7684\u56fe\u50cf\u3002 \u7ec4\u5408\u56fe\u50cf\u4f1a\u88ab\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u3002 \u7cfb\u7edf\u4f1a\u89c6\u9700\u8981\u5c3d\u53ef\u80fd\u591a\u5730\u91cd\u590d\u6b64\u8fc7\u7a0b\u3002"),(0,n.kt)("h3",l({},{id:"mcu"}),"MCU"),(0,n.kt)("p",null,"\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0cMCU\u627f\u62c5\u4e86\u6240\u6709\u91cd\u8981\u4efb\u52a1\u3002 \u5b83\u8bfb\u53d6\u95ea\u5b58\u4e2d\u7684\u56fe\u50cf\uff0c\u5e76\u5c06\u5b83\u4eec\u5199\u5165RAM\u3002 \u5728\u5c06\u534a\u900f\u660e\u7ea2\u8272\u6587\u672c\u878d\u5408\u5230\u56fe\u50cf\u4e0a\u65f6\uff0c\u5b83\u8ba1\u7b97\u5f97\u5230\u7684\u8272\u5f69\u5e76\u5c06\u5176\u5b58\u50a8\u5230RAM\u3002 \u5b83\u5bf9\u5706\u7684\u6240\u6709\u50cf\u7d20\u8fdb\u884c\u6e32\u67d3\u5e76\u5b58\u50a8\u5230RAM\u3002 \u5b83\u5c06\u56fe\u50cf\u4eceRAM\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/mcu-internal.svg",noShadow:"true",width:240,mdxType:"Figure"},"MCU\u63d0\u4f9bCPU\u3001\u5185\u90e8\u95ea\u5b58\u548c\u5185\u90e8RAM\u7b49"),(0,n.kt)("p",null,"STM32 MCU\u5177\u6709\u7279\u5b9a\u529f\u80fd\uff0c\u5982LTDC\u3001Chrom-ART\u3001Chrom-GRC\u7b49\uff0c\u4e3a\u7ed8\u56fe\u7cfb\u7edf\u7684\u5b9e\u73b0\u63d0\u4f9b\u5e2e\u52a9\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u53c2\u89c1\u5173\u4e8e",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"\u5982\u4f55\u9009\u62e9\u5408\u9002MCU"),"\u7684\u6307\u5357\uff0c\u4ee5\u53ca",(0,n.kt)(o.Z,{to:"../development/board-bring-up/how-to/02-cpu-running",mdxType:"Link"},"\u677f\u542f\u52a8\u642d\u5efa\u6307\u5357\u4e2d\u5173\u4e8e\u8bbe\u7f6eMCU"),"\u7684\u5185\u5bb9\u3002"),(0,n.kt)("h3",l({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"\u6240\u5f97\u8ba1\u7b97\u56fe\u50cf\uff08\u5e27\u7f13\u51b2\uff09\u5b58\u50a8\u5728RAM\u4e2d\u3002 \u5728\u66f4\u65b0\u56fe\u5f62\u65f6\uff0cMCU\u5bf9RAM\u6267\u884c\u8bfb\u548c\u5199\u64cd\u4f5c\u3002 \u5728\u5c06\u6240\u5f97\u56fe\u50cf\u4f20\u8f93\u7ed9\u663e\u793a\u5c4f\u65f6\uff0c\u518d\u6b21\u6267\u884c\u8bfb\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u6240\u5f97\u56fe\u50cf\u88ab\u5b58\u50a8\u5728MCU\u5185\u90e8\u7684RAM\u4e2d\u3002 \u5982\u679c\u5c06\u6240\u5f97\u56fe\u50cf\u5b58\u50a8\u5728\u5185\u90e8RAM\u4e2d\u7684\u65b9\u6cd5\u4e0d\u53ef\u884c\uff0c\u53ef\u4ee5\u6dfb\u52a0\u5916\u90e8RAM\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u53c2\u89c1\u5173\u4e8e",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"\u5982\u4f55\u9009\u62e9\u5408\u9002RAM"),"\u7684\u6307\u5357\uff0c\u4ee5\u53ca",(0,n.kt)(o.Z,{to:"../development/board-bring-up/how-to/04-enable-external-ram",mdxType:"Link"},"\u677f\u542f\u52a8\u642d\u5efa\u6307\u5357\u4e2d\u5173\u4e8e\u8bbe\u7f6eRAM\u7684\u5185\u5bb9"),"\u3002"),(0,n.kt)("h3",l({},{id:"flash"}),"Flash"),(0,n.kt)("p",null,"\u6240\u6709\u9759\u6001\u6570\u636e\u5747\u5b58\u50a8\u5728\u95ea\u5b58\u4e2d\u3002 \u56fe\u50cf\u3001\u5b57\u4f53\u548c\u6587\u672c\u3002 \u95ea\u5b58\u7531MCU\u8bfb\u53d6\uff0c\u5176\u5185\u5bb9\u88ab\u5199\u5165RAM\u6216\u4e0eRAM\u5185\u5bb9\u8fdb\u884c\u7ec4\u5408\u3002"),(0,n.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u5185\u90e8\u95ea\u5b58\u5f88\u5c11\u80fd\u591f\u5bb9\u7eb3\u4e0b\u6240\u6709\u56fe\u50cf\u8d44\u6e90\uff0c\u56e0\u6b64\u8bbe\u7f6e\u4e2d\u4f1a\u589e\u52a0\u5916\u90e8\u95ea\u5b58\u3002 \u5bf9\u4e8e\u5341\u5206\u7b80\u5355\u7684\u5e94\u7528\uff0c\u6709\u5185\u90e8\u95ea\u5b58\u5373\u5df2\u8db3\u591f\u3002"),(0,n.kt)("p",null,"\u7406\u60f3\u7684\u505a\u6cd5\u662f\u5bf9\u95ea\u5b58\u8fdb\u884c\u5b58\u50a8\u5668\u6620\u5c04\uff0c\u4ee5\u4fbf\u4ece\u95ea\u5b58\u76f4\u63a5\u8bfb\u53d6\u50cf\u7d20\u5e76\u5199\u5165RAM\u3002 \u6216\u8005\uff0c\u5982\u679c\u4e0d\u5bf9\u95ea\u5b58\u8fdb\u884c\u5b58\u50a8\u5668\u6620\u5c04\uff0c\u53ef\u5c06\u95ea\u5b58\u5185\u5bb9\u4f20\u8f93\u5230RAM\uff0c\u7136\u540e\u518d\u4eceRAM\u8bfb\u53d6\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u53c2\u89c1\u5173\u4e8e",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"\u5982\u4f55\u9009\u62e9\u5408\u9002\u95ea\u5b58"),"\u7684\u6307\u5357\uff0c\u4ee5\u53ca",(0,n.kt)(o.Z,{to:"../development/board-bring-up/how-to/06-flash-external-addressable",mdxType:"Link"},"\u677f\u542f\u52a8\u642d\u5efa\u6307\u5357\u4e2d\u5173\u4e8e\u8bbe\u7f6e\u95ea\u5b58"),"\u7684\u5185\u5bb9\u3002"),(0,n.kt)("h3",l({},{id:"display"}),"\u663e\u793a"),(0,n.kt)("p",null,"\u663e\u793a\u5c4f\u5c06\u56fe\u50cf\u5b9e\u9645\u663e\u793a\u7ed9\u4eba\u773c\u3002"),(0,n.kt)("p",null,"RAM\u4e2d\u5b58\u50a8\u7684\u8ba1\u7b97\u540e\u7684\u56fe\u50cf\uff08\u5e27\u7f13\u51b2\uff09\u7531MCU\u6309\u56fa\u5b9a\u65f6\u95f4\u95f4\u9694\u53d1\u9001\u5230\u663e\u793a\u5c4f\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u53c2\u89c1\u5173\u4e8e",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\u5982\u4f55\u9009\u62e9\u5408\u9002\u663e\u793a\u5c4f\u7684\u6307\u5357"),"\uff0c\u4ee5\u53ca",(0,n.kt)(o.Z,{to:"../development/board-bring-up/how-to/03-display-internal",mdxType:"Link"},"\u677f\u542f\u52a8\u642d\u5efa\u6307\u5357\u4e2d\u5173\u4e8e\u8bbe\u7f6e\u663e\u793a\u5c4f\u7684\u5185\u5bb9"),"\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u53c2\u89c1",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-selection-introduction",mdxType:"Link"},"\u786c\u4ef6\u9009\u578b"),"\u6307\u5357\u4e86\u89e3\u5173\u4e8e\u53ef\u80fd\u7684\u786c\u4ef6\u9009\u62e9\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,n.kt)("li",null,"\u53c2\u89c1",(0,n.kt)(o.Z,{to:"../development/board-bring-up/board-introduction",mdxType:"Link"},"\u677f\u542f\u52a8\u642d\u5efa\u6307\u5357\u4e86\u89e3\u5173\u4e8e\u8bbe\u7f6e\u677f\u548c\u7ec4\u4ef6"),"\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")))}f.isMDXComponent=!0}}]);
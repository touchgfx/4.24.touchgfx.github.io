"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[25573],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),l=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),l=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const o=a},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=l},12833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(59496);var r=n(49613),l=n(89639),i=n(48753),a=n(95375);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const c={id:"preliminary-considerations",title:"\u9810\u5148\u61c9\u8003\u91cf\u4e8b\u9805"},s=void 0,u={unversionedId:"development/hardware-selection/preliminary-considerations",id:"development/hardware-selection/preliminary-considerations",title:"\u9810\u5148\u61c9\u8003\u91cf\u4e8b\u9805",description:"\u672c\u7bc0\u7684\u76ee\u7684\u662f\u5728\u6c7a\u5b9a\u786c\u9ad4\u4e4b\u524d\u7d66\u51fa\u4e00\u4e9b\u5efa\u8b70\uff0c\u8aaa\u660e\u61c9\u8003\u616e\u54ea\u4e9b\u56e0\u7d20\u3002 \u6bcf\u500b\u7522\u54c1\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u56e0\u6b64\u6709\u4e0d\u540c\u7684\u6a19\u6e96\u548c\u8981\u6c42\uff0c\u56e0\u6b64\uff0c\u8acb\u53c3\u8003\u4ee5\u4e0b\u5167\u5bb9\uff0c\u4ee5\u4fbf\u60a8\u5728\u505a\u6c7a\u5b9a\u4e4b\u524d\u4e86\u89e3\u61c9\u8a72\u8003\u616e\u7684\u56e0\u7d20\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/hardware-selection/preliminary-considerations.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/preliminary-considerations",permalink:"/4.24/zh-TW/docs/development/hardware-selection/preliminary-considerations",draft:!1,tags:[],version:"current",frontMatter:{id:"preliminary-considerations",title:"\u9810\u5148\u61c9\u8003\u91cf\u4e8b\u9805"},sidebar:"docs",previous:{title:"\u786c\u9ad4\u9078\u64c7\u4ecb\u7d39",permalink:"/4.24/zh-TW/docs/development/hardware-selection/hardware-selection-introduction"},next:{title:"Hardware Components",permalink:"/4.24/zh-TW/docs/category/hardware-components"}},d={},m=[{value:"\u986f\u793a\u89e3\u6790\u5ea6",id:"display-resolution",level:2},{value:"\u984f\u8272\u6df1\u5ea6",id:"color-depth",level:2},{value:"\u5f71\u50cf\u7de9\u885d\u5340\u5927\u5c0f\u8a08\u7b97",id:"framebuffer-size-calculation",level:2},{value:"\u986f\u793a",id:"display",level:2},{value:"\u4ecb\u9762",id:"interface",level:3},{value:"\u5c3a\u5bf8",id:"size",level:3},{value:"\u89f8\u63a7",id:"touch",level:3},{value:"\u96fb\u5bb9\u578b",id:"capacitive",level:4},{value:"\u96fb\u963b\u578b",id:"resistive",level:4},{value:"\u52d5\u756b",id:"animations",level:2},{value:"\u6a5f\u68b0\u8a2d\u8a08\u8981\u6c42",id:"mechanical-design-requirements",level:2},{value:"\u6bcf\u79d2\u5e40\u6578",id:"frames-per-second",level:2}],h={toc:m},k="wrapper";function g(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(k,o({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc0\u7684\u76ee\u7684\u662f\u5728\u6c7a\u5b9a\u786c\u9ad4\u4e4b\u524d\u7d66\u51fa\u4e00\u4e9b\u5efa\u8b70\uff0c\u8aaa\u660e\u61c9\u8003\u616e\u54ea\u4e9b\u56e0\u7d20\u3002 \u6bcf\u500b\u7522\u54c1\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u56e0\u6b64\u6709\u4e0d\u540c\u7684\u6a19\u6e96\u548c\u8981\u6c42\uff0c\u56e0\u6b64\uff0c\u8acb\u53c3\u8003\u4ee5\u4e0b\u5167\u5bb9\uff0c\u4ee5\u4fbf\u60a8\u5728\u505a\u6c7a\u5b9a\u4e4b\u524d\u4e86\u89e3\u61c9\u8a72\u8003\u616e\u7684\u56e0\u7d20\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/hardware-selection.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3b\u984c\u6d89\u53ca\u986f\u793a\u5e55\u7684\u5916\u89c0\u3001\u7cfb\u7d71\u4e2d\u8a18\u61b6\u9ad4\u7684\u9700\u6c42\u3001UI \u7684\u9810\u671f\u6548\u80fd\u4ee5\u53ca\u7522\u54c1\u7684\u7269\u7406\u8a2d\u8a08\u3002"),(0,r.kt)("h2",o({},{id:"display-resolution"}),"\u986f\u793a\u89e3\u6790\u5ea6"),(0,r.kt)("p",null,"\u986f\u793a\u5668\u6709\u591a\u7a2e\u4e0d\u540c\u7684\u89e3\u6790\u5ea6\u548c\u9577\u5bec\u6bd4\u3002 \u4e00\u822c\u4f86\u8aaa\uff0cTouchGFX \u4e0d\u4f9d\u8cf4\u65bc\u9019\u4e9b\u53c3\u6578\u4e2d\u7684\u4efb\u4f55\u4e00\u500b\u3002 \u5728\u9078\u64c7\u5408\u9069\u7684\u786c\u9ad4\u6642\uff0c\u986f\u793a\u89e3\u6790\u5ea6\u662f\u4e3b\u8981\u56e0\u7d20\u4e4b\u4e00\uff0c\u8f03\u9ad8\u7684\u89e3\u6790\u5ea6\u901a\u5e38\u7b49\u65bc\u66f4\u591a\u50cf\u7d20\uff0c\u56e0\u6b64\u9700\u8981\u6e32\u67d3\u548c\u50b3\u8f38\u7684\u8cc7\u6599\u66f4\u591a\u3002"),(0,r.kt)("p",null,"\u5728 16/24 bpp \u4e0b\uff0cSTM32 \u5fae\u63a7\u5236\u5668\u901a\u5e38\u652f\u63f4 XGA \u89e3\u6790\u5ea6 \uff081024*768\uff09\uff0c \u4e5f\u652f\u63f4\u975e\u6a19\u6e96\u89e3\u6790\u5ea6\uff0c\u5982\u5bec\u6216\u5713\u986f\u793a\u3002 \u5c0d\u65bc XGA \u4ee5\u4e0a\u7684\u89e3\u6790\u5ea6\uff0c\u901a\u5e38\u5fc5\u9808\u5728\u984f\u8272\u6df1\u5ea6\u3001\u6bcf\u79d2\u5e40\u6578... \u7b49\u505a\u51fa\u59a5\u5354\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6a19\u6e96\u89e3\u6790\u5ea6\u7684 3 \u500b\u7bc4\u4f8b\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/display-resolution.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u986f\u793a\u89e3\u6790\u5ea6\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u9084\u61c9\u8003\u616e\u50cf\u7d20\u5bc6\u5ea6\uff0c\u56e0\u70ba\u8f03\u5927\u7684\u986f\u793a\u5668\u5c3a\u5bf8\u9700\u8981\u66f4\u9ad8\u7684\u89e3\u6790\u5ea6\u624d\u80fd\u770b\u8d77\u4f86\u6bd4\u8f03\u92b3\u5229\uff0c\u4f46\u8f03\u9ad8\u7684\u50cf\u7d20\u5bc6\u5ea6\u901a\u5e38\u9700\u8981\u66f4\u9ad8\u7684\u6210\u672c\u3002"),(0,r.kt)("p",null,"\u5728\u70ba\u61c9\u7528\u7a0b\u5f0f\u9078\u64c7\u89e3\u6c7a\u65b9\u6848\u6642\uff0c\u60a8\u61c9\u8a72\u554f\u81ea\u5df1\u7684\u4e00\u4e9b\u554f\u984c\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ec0\u9ebc\u662f\u7d42\u7aef\u4f7f\u7528\u8005\u7684\u76ee\u6a19\u5340\u9593\uff1f"),"\u6d88\u8cbb\u8005\u901a\u5e38\u9700\u8981\u66f4\u9ad8\u7684\u50cf\u7d20\u5bc6\u5ea6\uff0c\u800c\u4e00\u4e9b\u5de5\u696d\u61c9\u7528\u53ef\u80fd\u6703\u7232\u4e86\u964d\u4f4e\u6210\u672c\u6216\u66f4\u5bb9\u6613\u6574\u5408\u800c\u5728\u9019\u4e00\u65b9\u9762\u59a5\u5354\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u6253\u7b97\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u4f7f\u7528\u5927\u91cf\u7684\u5c0f\u6587\u5b57\u55ce\uff1f"),"\u7531\u65bc\u50cf\u7d20\u5bc6\u5ea6\u66f4\u9ad8\uff0c\u5927\u584a\u7684\u5c0f\u6587\u5b57\u901a\u5e38\u5728\u89e3\u6790\u5ea6\u8f03\u9ad8\u7684\u986f\u793a\u5e55\u4e0a\u66f4\u6613\u8b80\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u901a\u5e38\u6703\u540c\u6642\u5728\u87a2\u5e55\u4e0a\u986f\u793a\u8a31\u591a\u4e0d\u540c\u7684\u5143\u7d20\u55ce\uff1f"),"\u8f03\u5927\u7684\u986f\u793a\u5668\u5141\u8a31\u986f\u793a\u66f4\u591a\u5143\u7d20\uff0c\u6216\u4f7f\u67d0\u4e9b\u5143\u7d20\u66f4\u6e05\u6670\uff0c\u56e0\u70ba\u6709\u66f4\u591a\u7684\u87a2\u5e55\u5c3a\u5bf8\u53ef\u7528\u3002")),(0,r.kt)("h2",o({},{id:"color-depth"}),"\u984f\u8272\u6df1\u5ea6"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u500b\u4e3b\u8981\u56e0\u7d20\u662f\u984f\u8272\u6df1\u5ea6\uff08\u5404\u50cf\u7d20\u4f4d\u5143\u6578\uff09\uff0c\u5b83\u6c7a\u5b9a\u4e86\u5f71\u50cf\u4e2d\u6bcf\u500b\u50cf\u7d20\u53ef\u4ee5\u5132\u5b58\u7684\u8cc7\u8a0a\u91cf\uff0c\u9019\u610f\u5473\u8457\u60a8\u80fd\u5920\u5c07\u591a\u5c11\u7a2e\u4e0d\u540c\u7684\u984f\u8272\u8ce6\u503c\u7d66\u4e00\u500b\u50cf\u7d20\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/1bpp24bpp.webp",noShadow:!0,mdxType:"Figure"},"\u6bcf\u50cf\u7d20 1 \u4f4d\u5143\u548c\u6bcf\u50cf\u7d20\u61c9\u7528 24 \u4f4d\u5143"),(0,r.kt)("p",null,"\u986f\u793a\u5668\u652f\u63f4\u4e0d\u540c\u7684\u984f\u8272\u6df1\u5ea6\uff0c\u5728 24bpp \u986f\u793a\u5e55\u4e0a\u57f7\u884c 16bpp GUI \u61c9\u7528\u7a0b\u5f0f\u662f\u53ef\u80fd\u7684\uff0c\u4f46\u5728\u50c5\u80fd\u5920\u986f\u793a 16 \u4f4d\u984f\u8272\u7684\u986f\u793a\u5668\u4e0a\u57f7\u884c 24bpp \u61c9\u7528\u7a0b\u5f0f\u5c07\u7522\u751f\u53cd\u6548\u679c\u3002"),(0,r.kt)("p",null,"\u986f\u793a\u8272\u5f69\u4e0a\u6709\u5f88\u591a\u7d30\u5fae\u5dee\u5225\u7684\u8907\u96dc\u5f71\u50cf\u9700\u8981\u66f4\u9ad8\u7684\u8272\u5f69\u6df1\u5ea6\u624d\u80fd\u76e1\u53ef\u80fd\u63a5\u8fd1\u6e90\u5f71\u50cf\u3002 \u6240\u9078\u7684\u984f\u8272\u6df1\u5ea6\u5c0d\u6240\u9700\u7684\u8a18\u61b6\u9ad4\u91cf\u6709\u5f71\u97ff\u3002"),(0,r.kt)("p",null,"\u4e0d\u8981\u4f4e\u4f30\u5728\u4f4e\u8272\u5f69\u6df1\u5ea6\u4e0a\u53ef\u4ee5\u5be6\u73fe\u7684\u76ee\u6a19\uff0c\u56e0\u70ba\u8a31\u591a\u73fe\u4ee3 UI \u8a2d\u8a08\u7406\u5ff5\u90fd\u570d\u7e5e\u8457\u6241\u5e73\u5316\u548c\u8272\u5f69\u5bc6\u96c6\u5ea6\u8f03\u4f4e\u7684\u61c9\u7528\uff08\u4f8b\u5982 Google \u7684\u6750\u6599\u8a2d\u8a08\uff09\u3002 TouchGFX \u53ef\u4ee5\u900f\u904e\u61c9\u7528\u4e00\u7a2e\u6296\u52d5\u6f14\u7b97\u6cd5\uff0c\u5e6b\u52a9\u8907\u96dc\u5f71\u50cf\u5728\u4f4e\u984f\u8272\u6df1\u5ea6\u4e0a\u8b8a\u5f97\u6709\u7528\u3002 \u4f60\u53ef\u4ee5\u5728\u8f03\u4f4e\u7684\u984f\u8272\u6df1\u5ea6\u4e0a\u5be6\u73fe\uff0c\u4e0b\u9762\u662f\u4e00\u4e9b\u7bc4\u4f8b\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/low-color.webp",noShadow:!0,width:"300",mdxType:"Figure"},"\u4f4e\u8272\u6df1\u5ea6\u61c9\u7528\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5728\u70ba\u61c9\u7528\u7a0b\u5f0f\u9078\u64c7\u984f\u8272\u6df1\u5ea6\u6642\uff0c\u60a8\u61c9\u8a72\u554f\u81ea\u5df1\u7684\u4e00\u4e9b\u554f\u984c\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u662f\u5426\u9700\u8981\u986f\u793a\u771f\u5be6\u751f\u6d3b\u4e2d\u7684\u5f71\u50cf\uff1f"),"\u5982\u679c\u4f7f\u7528\u771f\u5be6\u5f71\u50cf\u6216\u591a\u5c64\u7d44\u5408\u5f71\u50cf\uff0c\u5efa\u8b70\u5728\u61c9\u7528\u7a0b\u5f0f\u548c\u986f\u793a\u5668\u4f7f\u7528 24 bpp \u50cf\u7d20\uff0c\u56e0\u70ba\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c16bpp \u4e0d\u8db3\u4ee5\u986f\u793a\u6240\u6709\u6240\u9700\u7684\u984f\u8272\u3002 16bpp \u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\u5df2\u7d93\u8db3\u5920\u4e86\uff0c\u4e26\u4e14\u4ecd\u7136\u662f\u696d\u754c\u6a19\u6e96\u4e4b\u4e00\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7070\u5ea6\u984f\u8272\u6216\u7c21\u55ae\u7684 6/8 bpp \u662f\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u6240\u9700\u50b3\u9054\u7684\u5168\u90e8\u5167\u5bb9\u55ce\uff1f"),"\u4e5f\u8a31\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u4e0d\u9700\u8981\u5206\u6563\u7684\u984f\u8272\u4f86\u6b63\u78ba\u50b3\u9054\u5176\u529f\u80fd\uff0c\u56e0\u6b64\u53ef\u4ee5\u9078\u64c7\u8f03\u4f4e\u7684\u984f\u8272\u6df1\u5ea6\u3002 \u9019\u4e5f\u6e1b\u5c11\u4e86\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5927\u5c0f\uff0c\u5f9e\u800c\u6e1b\u5c11\u4e86RAM\u7684\u9700\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u662f\u5426\u5c0d\u8a18\u61b6\u9ad4\u548c/\u6216\u5feb\u9583\u8a18\u61b6\u9ad4\u6709\u9650\u5236\uff1f"),"\u9650\u5236\u984f\u8272\u6df1\u5ea6\u5c07\u6e1b\u5c11\u9ede\u9663\u5716\u548c\u5f71\u50cf\u7de9\u885d\u5340 \uff08RAM\uff09 \u9700\u6c42\u7684\u5927\u5c0f\u3002")),(0,r.kt)("h2",o({},{id:"framebuffer-size-calculation"}),"\u5f71\u50cf\u7de9\u885d\u5340\u5927\u5c0f\u8a08\u7b97"),(0,r.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u5340\u662f\u5b58\u5132\u3001\u6e32\u67d3\u548c\u50b3\u8f38\u5e40\u50cf\u7d20\u8cc7\u6599\u5230\u986f\u793a\u5668\u7684\u4f4d\u7f6e\u3002 \u5f71\u50cf\u7de9\u885d\u5340\u7684\u5927\u5c0f\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u70ba\u66f4\u9ad8\u7684\u50cf\u7d20\u91cf\u548c\u66f4\u9ad8\u7684\u984f\u8272\u6df1\u5ea6\u8981\u6c42\u5728 RAM \u548c\u986f\u793a\u4ecb\u9762\u4e0a\u7372\u5f97\u66f4\u9ad8\u7684\u50b3\u8f38\u91cf\u3002"),(0,r.kt)("p",null,"\u5f71\u50cf\u7de9\u885d\u5340\u7684\u4f4d\u5143\u5927\u5c0f\u70ba\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u986f\u793a\u5668\u5bec\u5ea6*\u986f\u793a\u5668\u9ad8\u5ea6*\uff08\u6bcf\u50cf\u7d20\u4f4d/8\uff09")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u984f\u8272\u6df1\u5ea6\u70ba 16bpp \u7684 800x480 \u61c9\u7528\u7a0b\u5f0f\u548c\u55ae\u500b\u5f71\u50cf\u7de9\u885d\u5340\u9700\u8981\u5206\u914d\u4e00\u500b\u5927\u5c0f\u70ba\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"800 * 480 * (16 / 8) = 768,000 bytes (768,000/1024 = 750Kbytes)")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u7576\u60a8\u6c7a\u5b9a\u89e3\u6790\u5ea6\u548c\u984f\u8272\u6df1\u5ea6\u6642\uff0c\u8acb\u78ba\u4fdd\u60a8\u6709\u8db3\u5920\u7684 RAM \u4f86\u652f\u63f4\u5b83\u3002 \u6709\u4e9b\u61c9\u7528\u7a0b\u5f0f\u9700\u8981 2 \u500b\u6846\u67b6\u7de9\u885d\u5340\uff0c\u56e0\u6b64\u5728\u4e0a\u8ff0\u7bc4\u4f8b\u4e2d\uff0c\u6240\u9700\u7684 RAM \u70ba 750 \u5343\u5146\u4f4d\u5143\u7d44 * 2 = 1500 \u5343\u5146\u4f4d\u5143\u7d44\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/framebuffer-calculations.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u5f71\u50cf\u7de9\u885d\u5340\u8a08\u7b97"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u8acb\u6ce8\u610f\uff0c\u652f\u63f4\u5f71\u50cf\u7de9\u885d\u5340\u6240\u9700\u7684\u8a18\u61b6\u9ad4\u4e5f\u56b4\u91cd\u4f9d\u8cf4\u65bc\u6240\u9078\u7684\u5f71\u50cf\u7de9\u885d\u5340\u7b56\u7565\uff08\u55ae\u3001\u96d9\u3001\u90e8\u5206\uff09\uff0c\u60a8\u53ef\u4ee5\u5728",(0,r.kt)(a.Z,{to:"../../basic-concepts/framebuffer",mdxType:"Link"},"\u5f71\u50cf\u7de9\u885d"),"\u7b56\u7565\u6587\u7ae0\u5f71\u50cf\u7de9\u885d\u4e2d\u95b1\u8b80\u66f4\u591a\u5167\u5bb9\u3002 \u4e00\u4e9b STM32 \u5fae\u63a7\u5236\u5668\u7684\u5167\u90e8 RAM\u6700\u591a\u53ea\u80fd\u652f\u63f4HVGA \u89e3\u6790\u5ea6 \uff0c\u4ee5\u7372\u5f97\u975e\u5e38\u7d93\u6fdf\u9ad8\u6548\u7684\u89e3\u6c7a\u65b9\u6848\u3002"),(0,r.kt)("h2",o({},{id:"display"}),"\u986f\u793a"),(0,r.kt)("h3",o({},{id:"interface"}),"\u4ecb\u9762"),(0,r.kt)("p",null,"\u53ef\u4ee5\u9078\u64c7\u5177\u6709\u4e0d\u540c\u986f\u793a\u4ecb\u9762\uff08\u5982 SPI\u3001LTDC\u3001MIPI-DSI\uff09\u7684\u986f\u793a\u5668\uff0c\u9019\u4e9b\u986f\u793a\u5668\u5c0d\u6240\u9700\u7684\u5f15\u8173\u6578\u91cf\u3001\u983b\u5bec\u3001\u652f\u63f4\u89e3\u6790\u5ea6\u4ee5\u53ca\u53ef\u80fd\u9700\u8981\u7684\u5916\u90e8 RAM \u6578\u91cf\u90fd\u6709\u4e0d\u540c\u7684\u5f71\u97ff\u3002 \u95b1\u8b80\u66f4\u591a\u8207\u6b64\u6709\u95dc\u7684\u5167\u5bb9\u4ee5\u53ca",(0,r.kt)(a.Z,{to:"hardware-components/hardware-selection-display",mdxType:"Link"},"\u986f\u793a\u5e55"),"\u7ae0\u7bc0\u4e2d\u6bcf\u500b\u512a\u9ede\u548c\u7f3a\u9ede\u3002"),(0,r.kt)("h3",o({},{id:"size"}),"\u5c3a\u5bf8"),(0,r.kt)("p",null,"\u986f\u793a\u5668\u7684\u7269\u7406\u5c3a\u5bf8\u4e5f\u5f88\u91cd\u8981\u3002 \u8f03\u5927\u7684\u986f\u793a\u5e55\u901a\u5e38\u64cd\u4f5c\u66f4\u65b9\u4fbf\uff0c\u63d0\u4f9b\u7cbe\u78ba\u7684\u89f8\u6478\u6307\u4ee4\u4e5f\u66f4\u5bb9\u6613\uff0c\u4f46\u4e5f\u9700\u8981\u66f4\u5927\u7684\u89e3\u6790\u5ea6\u624d\u80fd\u8f15\u9b06\u89c0\u770b\uff0c\u5f9e\u800c\u5f71\u97ff\u5c0d\u66f4\u591a\u8a18\u61b6\u9ad4\u548c\u50b3\u8f38\u91cf\u7684\u9700\u6c42\u3002 \u5982\u679c\u986f\u793a\u5668\u4e0a\u7684\u8cc7\u8a0a\u986f\u793a\u5728 1-2 \u7c73\u4e4b\u5916\uff0c\u5247\u6587\u5b57\u3001\u5716\u793a\u7b49\u9700\u8981\u8db3\u5920\u5927\u3002"),(0,r.kt)("h3",o({},{id:"touch"}),"\u89f8\u63a7"),(0,r.kt)("p",null,"\u89f8\u63a7\u986f\u793a\u5668\u6709\u5169\u7a2e\u4e3b\u8981\u985e\u578b\uff1a"),(0,r.kt)("h4",o({},{id:"capacitive"}),"\u96fb\u5bb9\u578b"),(0,r.kt)("p",null,"\u96fb\u5bb9\u5f0f\u89f8\u63a7\u986f\u793a\u5668\u5177\u6709\u66f4\u9ad8\u7684\u89f8\u63a7\u9748\u654f\u5ea6\uff0c\u9019\u5728\u9700\u8981\u66f4\u5148\u9032\u7684\u89f8\u63a7\u64cd\u4f5c\uff08\u5982\u62d6\u62c9\u3001\u8f15\u6383\u7b49\uff09\u4e2d\u662f\u5f88\u91cd\u8981\u7684\u5b83\u4e5f\u662f\u73fe\u4ee3\u88dd\u7f6e\u4e2d\u4f7f\u7528\u6700\u591a\u7684\u3002"),(0,r.kt)("p",null,"\u7136\u800c\u5b83\u5011\u4e5f\u66f4\u6602\u8cb4\uff0c\u4e14\u5f80\u5f80\u4e0d\u80fd\u6234\u624b\u5957\u64cd\u4f5c\uff0c\u6240\u4ee5\u5982\u679c\u9019\u4e00\u9ede\u5f88\u91cd\u8981\uff0c\u4e5f\u8a31\u96fb\u963b\u5f0f\u662f\u89e3\u6c7a\u65b9\u6848\u3002"),(0,r.kt)("h4",o({},{id:"resistive"}),"\u96fb\u963b\u578b"),(0,r.kt)("p",null,"\u9019\u7a2e\u66f4\u4fbf\u5b9c\u7684\u66ff\u4ee3\u54c1\u4e0d\u592a\u654f\u611f\uff0c\u5728\u967d\u5149\u4e0b\u80fd\u898b\u5ea6\u4f4e\uff0c\u4f46\u53ef\u4ee5\u6234\u624b\u5957\u64cd\u4f5c\uff0c\u800c\u4e14\u5b83\u5c0d\u610f\u5916\u7684\u63a5\u89f8\u4e0d\u592a\u654f\u611f\uff0c\u901a\u5e38\u4e5f\u66f4\u8010\u7528\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u6240\u6709\u7684\u89f8\u63a7\u64cd\u4f5c\u90fd\u7531\u7c21\u55ae\u7684\u9ede\u6309\u6309\u9215\u7d44\u6210\uff0c\u5247\u96fb\u963b\u986f\u793a\u5668\u53ef\u80fd\u5c31\u8db3\u5920\u4e86\u3002 STM32F429-DISCO \u677f\u4f7f\u7528\u96fb\u963b\u5f0f\u89f8\u63a7\u986f\u793a\u5668\u3002"),(0,r.kt)("h2",o({},{id:"animations"}),"\u52d5\u756b"),(0,r.kt)("p",null,"\u5982\u679c\u786c\u9ad4\u7684\u50b3\u8f38\u91cf\u548c\u8a08\u7b97\u80fd\u529b\u4e0d\u8db3\uff0c\u57f7\u884c\u8907\u96dc\u7684\u52d5\u756b\uff08\u5982\u5168\u5c4f\u8f49\u63db\u3001\u65cb\u8f49\u548c\u7e2e\u653e\uff09\u53ef\u80fd\u6703\u5c0d\u6548\u80fd\u7522\u751f\u91cd\u5927\u5f71\u97ff\u3002"),(0,r.kt)("p",null,"\u5728\u6c7a\u5b9a\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u52d5\u756b\u7b49\u7d1a\u6642\uff0c\u60a8\u9700\u8981\u554f\u81ea\u5df1\u7684\u4e00\u4e9b\u554f\u984c\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u662f\u5426\u9700\u8981\u9ad8\u901f\u5168\u5c4f\u8f49\u63db\uff1f"),"\u5168\u87a2\u5e55\u8f49\u63db\u9700\u8981\u6e32\u67d3\u5b8c\u6574\u7684\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u56e0\u6b64\u4f9d\u8cf4\u65bc\u8db3\u5920\u7684 MCU \u6642\u8108\uff0c\u4ee5\u53ca\u8db3\u5920\u5feb\u7684\u5b58\u53d6\u548c\u50b3\u8f38\u50cf\u7d20\u8cc7\u6599 \u6240\u9700\u7684\u7cfb\u7d71\u6548\u80fd\u9084\u53d6\u6c7a\u65bc\u89e3\u6790\u5ea6\u548c\u984f\u8272\u6df1\u5ea6\u3002 \u5efa\u8b70\u5728STM32\u9ad8\u6548\u80fd\u7522\u54c1\u4e0a\u4f7f\u7528\u9ad8\u89e3\u6790\u5ea6\u5168\u5c4f\u8f49\u63db\u3002 \u67d0\u4e9b\u8f49\u63db\u9700\u8981\u984d\u5916\u7684\u5132\u5b58\u7a7a\u9593\uff0c\u56e0\u6b64\u53ef\u80fd\u5c0e\u81f4\u9700\u8981\u66f4\u5927\u7684\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u662f\u5426\u9700\u8981\u8907\u96dc\u7684\u7d0b\u7406\u8cbc\u5716\u52d5\u756b\uff0c\u5982\u65cb\u8f49\u548c\u7e2e\u653e\uff1f"),"\u5728\u8a08\u7b97\u548c\u50b3\u8f38\u9ede\u9663\u5716\u6642\uff0c\u9a45\u52d5\u7d0b\u7406\u8cbc\u5716\u9032\u884c\u52d5\u756b\u7e6a\u88fd\u5728\u7cfb\u7d71\u4e0a\u53ef\u80fd\u76f8\u7576\u5bc6\u96c6\uff0c\u56e0\u6b64\u901a\u5e38\u9700\u8981\u66f4\u9ad8\u7684 MHz \u548c\u8f03\u9ad8\u7684\u8a18\u61b6\u9ad4\u8f38\u9001\u91cf\u3002")),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/animations.webp",width:"480",mdxType:"Figure"},"\u52d5\u756b"),(0,r.kt)("h2",o({},{id:"mechanical-design-requirements"}),"\u6a5f\u68b0\u8a2d\u8a08\u8981\u6c42"),(0,r.kt)("p",null,"\u7522\u54c1\u7684\u7269\u7406\u5916\u6bbc\u8981\u6c42\u6703\u6709\u5f88\u5927\u7684\u5dee\u7570\uff0c\u4e26\u53ef\u80fd\u5c0d\u9078\u64c7\u7684\u786c\u9ad4\u7522\u751f\u5f71\u97ff\u3002 \u5bb6\u7528\u96fb\u5668\u8207\u5de5\u696d\u7528\u9014\u6709\u4e0d\u540c\u7684\u8981\u6c42\uff0c\u56e0\u6b64\uff0c\u5728\u4e86\u89e3\u7269\u7406\u9650\u5236\u4e4b\u5f8c\uff0c\u60a8\u61c9\u8a72\u8003\u616e\u7684\u4e00\u4e9b\u554f\u984c\u53ef\u80fd\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u7684\u7522\u54c1\u9700\u6c42\u662f\u5426\u975e\u5e38\u5c0f\uff1f"),"\u4f8b\u5982\u667a\u6167\u578b\u624b\u9336\uff0c\u5176\u5916\u6bbc\u5c3a\u5bf8\u6709\u9650\uff0c\u9650\u5236\u4e86\u96fb\u8def\u677f\u7684\u5927\u5c0f\uff0c\u56e0\u6b64\u9078\u64c7\u6b63\u78ba\u7684\u5143\u4ef6\u975e\u5e38\u91cd\u8981\u3002 STM32 \u63d0\u4f9b\u5404\u7a2e\u5404\u6a23\u7684 MCU \u5957\u4ef6\uff0c\u5982 WLCSP \u5957\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u7684\u7522\u54c1\u662f\u5426\u6703\u53d7\u5230\u6975\u7aef\u6eab\u5ea6\u7684\u50b7\u5bb3\uff1f"),"\u96fb\u5bb9\u986f\u793a\u5668\u5728\u7570\u5e38\u9ad8\u6eab\u6216\u7570\u5e38\u5bd2\u51b7\u6642\u53ef\u80fd\u6703\u6548\u80fd\u4e0d\u4f73\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u5728\u51b7\u51cd\u5eab\u4e2d\u5b89\u88dd\u7522\u54c1\uff0c\u96fb\u963b\u986f\u793a\u5668\u53ef\u80fd\u6703\u7372\u5f97\u66f4\u597d\u7684\u4f7f\u7528\u8005\u9ad4\u9a57\u3002 STM32 \u7522\u54c1\u7d44\u5408\u63d0\u4f9b\u74b0\u5883\u6eab\u5ea6\u7bc4\u570d\u9ad8\u905485\u3001105\u548c125\u5ea6\u7684\u5fae\u63a7\u5236\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u7684\u7522\u54c1\u662f\u5426\u9700\u8981\u5c0d\u5ba4\u5916\u74b0\u5883\u56e0\u7d20\uff08\u5982\u6c34\u6216\u7070\u5875\uff09\u5177\u6709\u5f88\u5f37\u7684\u62b5\u6297\u529b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f37\u967d\u5149\u4e0b\u7684\u53ef\u8996\u6027\u91cd\u8981\u55ce\uff1f"),"\u986f\u793a\u5668\u5728\u71ed\u5149\u548c\u6d41\u660e\u4e2d\u5404\u4e0d\u76f8\u540c\uff0c\u986f\u793a\u5668\u7684\u6d41\u660e\u548c\u71ed\u5149\u8d8a\u9ad8\uff0c\u986f\u793a\u5668\u7684\u53ef\u8b80\u6027\u8d8a\u9ad8\u3002 \u6dfb\u52a0\u7279\u6b8a\u7684\u4fdd\u8b77\u677f\u4e5f\u53ef\u4ee5\u6539\u5584\u9019\u4e00\u9ede\u3002 \u6216\u8005\u4f7f\u7528\u53e6\u4e00\u7a2e\u53ef\u80fd\u63d0\u4f9b\u53cd\u5149\u529f\u80fd\u7684\u986f\u793a\u6280\u8853\u3002")),(0,r.kt)("h2",o({},{id:"frames-per-second"}),"\u6bcf\u79d2\u5e40\u6578"),(0,r.kt)("p",null,"\u6bcf\u79d2\u66f4\u9ad8\u7a69\u5b9a\u7684\u756b\u9762\u5e40\u6578 \uff08FPS\uff09\u901a\u5e38\u66f4\u597d\uff0c\u56e0\u70ba\u9019\u6a23\u53ef\u4ee5\u4f7f\u61c9\u7528\u7a0b\u5f0f\u770b\u8d77\u4f86\u66f4\u6d41\u66a2\u3002"),(0,r.kt)("p",null,"\u4f46\u6709\u6642 FPS \u4e0d\u592a\u91cd\u8981\u3002 \u4f8b\u5982\uff0c\u5728\u975c\u614bGUI\u4e2d\uff0c\u5177\u6709\u6700\u5c0f\u986f\u793a\u52d5\u756b\u66f4\u65b0\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u4f4e\u6210\u672c\u786c\u9ad4\u53ef\u80fd\u66f4\u52a0\u5408\u9069\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u64c1\u6709\u4e00\u500b\u6f02\u4eae\u6d41\u66a2\u4e26\u5e36\u6709\u8a31\u591a\u83ef\u9e97\u52d5\u756b\u7684\u61c9\u7528\u7a0b\u5f0f\u4e5f\u53ef\u4ee5\u662f\u4e00\u500b\u5de8\u5927\u7684\u8ce3\u9ede\uff0c\u9019\u53d6\u6c7a\u65bc\u76ee\u6a19\u4f7f\u7528\u8005\u6240\u5728\u7684\u884c\u696d\uff0c\u56e0\u6b64\u8207\u786c\u9ad4\u9078\u64c7\u76f8\u95dc\u7684\u4efb\u4f55\u4e8b\u60c5\u90fd\u662f\u70ba\u4e86\u6eff\u8db3\u6700\u7d42\u4f7f\u7528\u8005\u7684\u671f\u671b\uff0c\u4e26\u63d0\u4f9b\u826f\u597d\u7684\u4f7f\u7528\u8005\u9ad4\u9a57\u3002"),(0,r.kt)("p",null,"\u5716\u5f62\u4f7f\u7528\u8005\u4ecb\u9762\u7684\u6574\u9ad4\u6548\u80fd\u6b78\u7d50\u70ba\u7cfb\u7d71\u5c64\u9762\u7684\u6548\u80fd\uff0c\u5305\u62ec MCU\u3001RAM\u3001Flash\u3001\u986f\u793a\u3001\u4ecb\u9762\u50b3\u8f38\u91cf\u7b49\u5143\u4ef6\uff0c\u4ee5\u53ca STM32 Chrom -ART \u7b49\u786c\u9ad4\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u5716\u793a\u6982\u62ec\u7684\u63cf\u7e6a\u4e86\u4e00\u4e9b\u4e0d\u540c\u53c3\u6578\u7684\u5f71\u97ff\u3002 \u8981\u9078\u64c7\u6b63\u78ba\u7684\u786c\u9ad4\uff0c\u9700\u8981\u8003\u616e\u9019\u4e9b\u53c3\u6578\u3002 \u540c\u6642\u8003\u616e\u5230STM32 Chrom -ART\u6b63\u5728\u6e1b\u8f15MCU\u7684\u5de5\u4f5c\u91cf\uff0c\u56e0\u6b64\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u964d\u4f4e\u4e86\u9ad8MCU\u983b\u7387\u7684\u91cd\u8981\u6027\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/fps-figures.webp",noShadow:!0,mdxType:"Figure"},"\u4e0d\u540c\u53c3\u6578\u5c0d FPS \u7684\u5f71\u97ff"))}g.isMDXComponent=!0}}]);
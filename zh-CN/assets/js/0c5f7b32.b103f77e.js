"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[68547],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),l=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),l=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const o=a},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=l},40865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(59496);var r=n(49613),l=n(89639),i=n(48753),a=n(95375);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const c={id:"preliminary-considerations",title:"\u521d\u6b65\u8003\u8651"},s=void 0,u={unversionedId:"development/hardware-selection/preliminary-considerations",id:"development/hardware-selection/preliminary-considerations",title:"\u521d\u6b65\u8003\u8651",description:"\u672c\u90e8\u5206\u7684\u76ee\u7684\u662f\u9488\u5bf9\u786c\u4ef6\u51b3\u7b56\u524d\u5e94\u8003\u8651\u7684\u4e8b\u9879\u63d0\u4f9b\u4e00\u4e9b\u6307\u5bfc\u3002 \u6bcf\u4e2a\u4ea7\u54c1\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u56e0\u6b64\u6709\u4e0d\u540c\u7684\u6807\u51c6\u548c\u8981\u6c42\u3002\u4e0b\u9762\u7684\u5185\u5bb9\u5c06\u9488\u5bf9\u5728\u51b3\u7b56\u524d\u5e94\u8be5\u8003\u8651\u4e9b\u4ec0\u4e48\u4e3a\u60a8\u63d0\u4f9b\u7075\u611f\u6765\u6e90\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/preliminary-considerations.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/preliminary-considerations",permalink:"/4.24/zh-CN/docs/development/hardware-selection/preliminary-considerations",draft:!1,tags:[],version:"current",frontMatter:{id:"preliminary-considerations",title:"\u521d\u6b65\u8003\u8651"},sidebar:"docs",previous:{title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd",permalink:"/4.24/zh-CN/docs/development/hardware-selection/hardware-selection-introduction"},next:{title:"Hardware Components",permalink:"/4.24/zh-CN/docs/category/hardware-components"}},d={},m=[{value:"\u663e\u793a\u5206\u8fa8\u7387",id:"display-resolution",level:2},{value:"\u8272\u6df1",id:"color-depth",level:2},{value:"\u5e27\u7f13\u51b2\u533a\u5927\u5c0f\u7684\u8ba1\u7b97",id:"framebuffer-size-calculation",level:2},{value:"\u663e\u793a",id:"display",level:2},{value:"\u63a5\u53e3",id:"interface",level:3},{value:"\u5c3a\u5bf8",id:"size",level:3},{value:"\u89e6\u63a7",id:"touch",level:3},{value:"\u7535\u5bb9\u5f0f",id:"capacitive",level:4},{value:"\u7535\u963b\u5f0f",id:"resistive",level:4},{value:"\u52a8\u753b",id:"animations",level:2},{value:"\u673a\u68b0\u8bbe\u8ba1\u8981\u6c42",id:"mechanical-design-requirements",level:2},{value:"\u6bcf\u79d2\u5e27\u6570",id:"frames-per-second",level:2}],h={toc:m},k="wrapper";function g(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(k,o({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u90e8\u5206\u7684\u76ee\u7684\u662f\u9488\u5bf9\u786c\u4ef6\u51b3\u7b56\u524d\u5e94\u8003\u8651\u7684\u4e8b\u9879\u63d0\u4f9b\u4e00\u4e9b\u6307\u5bfc\u3002 \u6bcf\u4e2a\u4ea7\u54c1\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u56e0\u6b64\u6709\u4e0d\u540c\u7684\u6807\u51c6\u548c\u8981\u6c42\u3002\u4e0b\u9762\u7684\u5185\u5bb9\u5c06\u9488\u5bf9\u5728\u51b3\u7b56\u524d\u5e94\u8be5\u8003\u8651\u4e9b\u4ec0\u4e48\u4e3a\u60a8\u63d0\u4f9b\u7075\u611f\u6765\u6e90\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/hardware-selection.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3b\u9898\u6db5\u76d6\u663e\u793a\u5c4f\u5916\u89c2\u3001\u7cfb\u7edf\u5185\u5b58\u9700\u6c42\u3001\u6240\u9700\u7684UI\u6027\u80fd\u548c\u4ea7\u54c1\u7269\u7406\u8bbe\u8ba1\u3002"),(0,r.kt)("h2",o({},{id:"display-resolution"}),"\u663e\u793a\u5206\u8fa8\u7387"),(0,r.kt)("p",null,"\u663e\u793a\u5c4f\u6709\u591a\u79cd\u4e0d\u540c\u7684\u5206\u8fa8\u7387\u548c\u957f\u5bbd\u6bd4\u3002 \u901a\u5e38\uff0cTouchGFX\u4e0d\u4f9d\u8d56\u4e8e\u8fd9\u4e9b\u53c2\u6570\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u3002 \u663e\u793a\u5206\u8fa8\u7387\u662f\u9009\u62e9\u5408\u9002\u786c\u4ef6\u7684\u4e3b\u8981\u8003\u8651\u56e0\u7d20\u4e4b\u4e00\uff0c\u4e00\u822c\u6765\u8bb2\uff0c\u5206\u8fa8\u7387\u8d8a\u9ad8\uff0c\u50cf\u7d20\u8d8a\u591a\uff0c\u56e0\u6b64\u8981\u6e32\u67d3\u548c\u4f20\u8f93\u7684\u6570\u636e\u5c31\u8d8a\u591a\u3002"),(0,r.kt)("p",null,"STM32\u5fae\u63a7\u5236\u5668\u901a\u5e38\u652f\u6301\u9ad8\u8fbe16/24 bpp\u7684XGA\u5206\u8fa8\u7387\uff081024*768\uff09\uff0c\u4e5f\u652f\u6301\u975e\u6807\u51c6\u5206\u8fa8\u7387\uff0c\u5982\u5bbd\u663e\u793a\u5c4f\u6216\u5706\u5f62\u663e\u793a\u5c4f\u3002 \u5bf9\u4e8e\u9ad8\u4e8eXGA\u7684\u5206\u8fa8\u7387\uff0c\u901a\u5e38\u9700\u8981\u5728\u8272\u6df1\u3001\u6bcf\u79d2\u5e27\u6570\u7b49\u65b9\u9762\u505a\u6298\u8877\u2026\u2026"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f3\u4e2a\u6807\u51c6\u5206\u8fa8\u7387\u7684\u793a\u4f8b\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/display-resolution.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u663e\u793a\u5206\u8fa8\u7387\u793a\u4f8b"),(0,r.kt)("p",null,"\u8fd8\u5e94\u8003\u8651\u50cf\u7d20\u5bc6\u5ea6\uff0c\u867d\u7136\u663e\u793a\u5c4f\u5c3a\u5bf8\u8d8a\u5927\uff0c\u5206\u8fa8\u7387\u8d8a\u9ad8\uff0c\u663e\u793a\u8d8a\u6e05\u6670\uff0c\u4f46\u50cf\u7d20\u5bc6\u5ea6\u8d8a\u9ad8\uff0c\u6210\u672c\u4e5f\u8d8a\u9ad8\u3002"),(0,r.kt)("p",null,"\u5728\u4e3a\u60a8\u7684\u5e94\u7528\u9009\u62e9\u5206\u8fa8\u7387\u65f6\uff0c\u5e94\u8be5\u95ee\u81ea\u5df1\u7684\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6700\u7ec8\u76ee\u6807\u7528\u6237\u7fa4\u4f53\u662f\u4ec0\u4e48\uff1f")," \u4f5c\u4e3a\u6d88\u8d39\u8005\u81ea\u7136\u671f\u671b\u66f4\u9ad8\u7684\u50cf\u7d20\u5bc6\u5ea6\uff0c\u800c\u5b9e\u9645\u5de5\u4e1a\u5e94\u7528\u5f80\u5f80\u4f1a\u7efc\u5408\u8003\u8651\u4ea7\u54c1\u6210\u672c\u548c\u96c6\u6210\u5ea6\u590d\u6742\u6027\u6765\u6700\u7ec8\u9009\u62e9\u5408\u9002\u7684\u50cf\u7d20\u5bc6\u5ea6\u53c2\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u5728\u5e94\u7528\u4e2d\u4f1a\u4f7f\u7528\u5230\u5927\u91cf\u7684\u6587\u672c\u663e\u793a\u5417\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u5e38\u5e38\u4f1a\u5728\u5c4f\u5e55\u4e0a\u4e00\u6b21\u6027\u663e\u793a\u5927\u91cf\u4e0d\u540c\u5143\u7d20\u5417\uff1f"),"\u56e0\u4e3a\u66f4\u5927\u7684\u663e\u793a\u7a7a\u95f4\u53ef\u4ee5\u663e\u793a\u66f4\u591a\u5143\u7d20\uff0c\u6216\u4f7f\u88ab\u90e8\u5206\u5143\u7d20\u663e\u793a\u66f4\u4e3a\u6e05\u6670\u3002")),(0,r.kt)("h2",o({},{id:"color-depth"}),"\u8272\u6df1"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u4e3b\u8981\u8003\u8651\u56e0\u7d20\u662f\u8272\u6df1(\u6bcf\u4e2a\u50cf\u7d20\u6240\u5bf9\u5e94\u7684\u5b58\u50a8\u4f4d\u6570)\uff0c\u5b83\u51b3\u5b9a\u4e86\u56fe\u50cf\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u53ef\u4ee5\u5b58\u50a8\u7684\u4fe1\u606f\u91cf\uff0c\u4e5f\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u4e3a\u5355\u4e2a\u50cf\u7d20\u5206\u914d\u7684\u989c\u8272\u6570\u91cf\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/1bpp24bpp.webp",noShadow:!0,mdxType:"Figure"},"\u6bcf\u50cf\u7d201\u4f4d\u548c\u6bcf\u50cf\u7d2024\u4f4d\u7684\u5e94\u7528"),(0,r.kt)("p",null,"\u663e\u793a\u5c4f\u53ef\u4ee5\u652f\u6301\u4e0d\u540c\u7684\u8272\u6df1\uff0c16bpp GUI\u5e94\u7528\u53ef\u4ee5\u572824bpp\u663e\u793a\u5c4f\u4e0a\u8fd0\u884c\uff0c\u4f46\u65e0\u6cd5\u5728\u53ea\u80fd\u663e\u793a16\u4f4d\u8272\u6df1\u7684\u663e\u793a\u5c4f\u4e0a\u8fd0\u884c24bpp\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u663e\u793a\u5e26\u6709\u5f88\u591a\u7ec6\u5fae\u989c\u8272\u5dee\u522b\u7684\u590d\u6742\u56fe\u50cf\u5f80\u5f80\u9700\u8981\u66f4\u9ad8\u7684\u8272\u6df1\uff0c\u4ee5\u5c3d\u53ef\u80fd\u63a5\u8fd1\u6e90\u56fe\u50cf\u3002 \u8272\u6df1\u7684\u9009\u62e9\u4e0e\u663e\u793a\u6240\u9700\u5185\u5b58\u91cf\u5f80\u5f80\u5b58\u5728\u51b2\u7a81\u3002"),(0,r.kt)("p",null,"\u4e0d\u8981\u4f4e\u4f30\u5728\u8f83\u4f4e\u8272\u6df1\u4e0a\u53ef\u4ee5\u5b9e\u73b0\u7684\u6548\u679c\uff0c\u56e0\u4e3a\u8bb8\u591a\u73b0\u4ee3UI\u8bbe\u8ba1\u7406\u5ff5\u90fd\u56f4\u7ed5\u6241\u5e73\u5316\u548c\u989c\u8272\u5bc6\u96c6\u7a0b\u5ea6\u8f83\u4f4e\u7684\u5e94\u7528\uff08\u4f8b\u5982Google\u7684\u8d28\u611f\u8bbe\u8ba1\uff09\u3002 \u901a\u8fc7\u5e94\u7528\u67d0\u79cd\u6296\u52a8\u7b97\u6cd5\uff0cTouchGFX\u53ef\u4ee5\u6709\u6548\u5730\u5728\u8f83\u4f4e\u8272\u6df1\u6761\u4ef6\u4e0b\u5b9e\u73b0\u590d\u6742\u56fe\u50cf\u3002 \u4e0b\u9762\u7684\u793a\u4f8b\u5c55\u793a\u4e86\u53ef\u5728\u8f83\u4f4e\u8272\u6df1\u57fa\u7840\u4e0a\u5b9e\u73b0\u7684\u6548\u679c\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/low-color.webp",noShadow:!0,width:"300",mdxType:"Figure"},"\u4f4e\u8272\u6df1\u5e94\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728\u4e3a\u60a8\u7684\u5e94\u7528\u9009\u62e9\u8272\u6df1\u65f6\uff0c\u60a8\u5e94\u8be5\u95ee\u81ea\u5df1\u7684\u4e00\u4e9b\u5982\u4e0b\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u9700\u8981\u663e\u793a\u771f\u5b9e\u751f\u6d3b\u56fe\u50cf\u5417\uff1f"),"\u5982\u679c\u8981\u4f7f\u7528\u771f\u5b9e\u751f\u6d3b\u56fe\u50cf\u6216\u591a\u5c42\u5408\u6210\u56fe\u50cf\uff0c\u5efa\u8bae\u5728\u5e94\u7528\u548c\u663e\u793a\u5c4f\u4e2d\u90fd\u4f7f\u752824 bpp\u50cf\u7d20\uff0c\u56e0\u4e3a\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c16bpp\u4e0d\u8db3\u4ee5\u663e\u793a\u6240\u6709\u9700\u8981\u7684\u989c\u8272\u3002 16bpp\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\u662f\u8db3\u591f\u7684\uff0c\u5e76\u4e14\u4ecd\u7136\u662f\u884c\u4e1a\u6807\u51c6\u4e4b\u4e00\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9009\u7528\u7070\u5ea6\u989c\u8272\u8fd8\u662f\u7b80\u5355\u76846/8 bpp?\u60a8\u771f\u6b63\u9700\u8981\u5b9e\u73b0\u7684\u5e94\u7528\u9700\u6c42\u662f\u4ec0\u4e48\uff1f"),"\u4e5f\u8bb8\u60a8\u7684\u5e94\u7528\u4e0d\u9700\u8981\u5927\u91cf\u989c\u8272\u6765\u6b63\u786e\u4f20\u8fbe\u5176\u529f\u80fd\uff0c\u56e0\u6b64\u53ef\u4ee5\u9009\u62e9\u8f83\u4f4e\u8272\u6df1\u3002 \u8fd9\u4e5f\u51cf\u5c11\u4e86\u5e27\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u4ece\u800c\u51cf\u5c11RAM\u9700\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u5bf9RAM\u548c/\u6216\u95ea\u5b58\u5bb9\u91cf\u6709\u9650\u5236\u5417\uff1f"),"\u9650\u5236\u8272\u6df1\u5c06\u540c\u65f6\u51cf\u5c11\u4f4d\u56fe\u548c\u5e27\u7f13\u51b2\u533a(RAM) \u7684\u9700\u6c42\u3002")),(0,r.kt)("h2",o({},{id:"framebuffer-size-calculation"}),"\u5e27\u7f13\u51b2\u533a\u5927\u5c0f\u7684\u8ba1\u7b97"),(0,r.kt)("p",null,"\u5e27\u7f13\u51b2\u533a\u662f\u7528\u6765\u5b58\u50a8\u50cf\u7d20\u6570\u636e\u7684\u5730\u65b9\uff0c\u50cf\u7d20\u6570\u636e\u7ecf\u8fc7\u6e32\u67d3\u540e\u4f20\u8f93\u5230\u663e\u793a\u5c4f\u3002 \u5e27\u7f13\u51b2\u533a\u5927\u5c0f\u5f88\u91cd\u8981\uff0c\u56e0\u4e3a\u66f4\u9ad8\u7684\u50cf\u7d20\u6570\u91cf\u548c\u66f4\u9ad8\u7684\u8272\u6df1\u9700\u8981\u66f4\u9ad8\u7684RAM\u548c\u663e\u793a\u63a5\u53e3\u7684\u6570\u636e\u541e\u5410\u7387\u3002"),(0,r.kt)("p",null,"\u5e27\u7f13\u51b2\u533a\u5927\u5c0f\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8ba1\u7b97\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u663e\u793a\u5bbd\u5ea6*\u663e\u793a\u9ad8\u5ea6*\uff08\u6bcf\u50cf\u7d20\u4f4d\u6570/8\uff09")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4e00\u4e2a\u5206\u8fa8\u7387\u4e3a800x480\u5177\u670916bpp\u8272\u6df1\u7684\u5355\u5e27\u663e\u793a\u5e27\u7f13\u51b2\u533a\u5927\u5c0f\u4e3a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"800 * 480 * (16 / 8) = 768,000 bytes (768,000/1024 = 750Kbytes)")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5f53\u60a8\u51b3\u5b9a\u5206\u8fa8\u7387\u548c\u8272\u6df1\u65f6\uff0c\u8bf7\u786e\u4fdd\u60a8\u6709\u8db3\u591f\u7684RAM\u63d0\u4f9b\u652f\u6301\u3002 \u67d0\u4e9b\u5e94\u7528\u9700\u89812\u4e2a\u5e27\u7f13\u51b2\u533a\uff0c\u56e0\u6b64\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6240\u9700\u7684RAM\u4e3a750 KB * 2 = 1500 KB\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/framebuffer-calculations.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u5e27\u7f13\u51b2\u533a\u8ba1\u7b97"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u8bf7\u6ce8\u610f\uff0c\u652f\u6301\u5e27\u7f13\u51b2\u533a\u6240\u9700\u7684\u5185\u5b58\u8fd8\u9ad8\u5ea6\u4f9d\u8d56\u4e8e\u6240\u9009\u7684\u5e27\u7f13\u51b2\u533a\u7b56\u7565\uff08\u5355\u3001\u53cc\u3001\u90e8\u5206\uff09\uff0c\u60a8\u53ef\u4ee5\u5728\u5e27\u7f13\u51b2\u533a\u7b56\u7565\u6587\u7ae0",(0,r.kt)(a.Z,{to:"../../basic-concepts/framebuffer",mdxType:"Link"},"\u201c\u5e27\u7f13\u51b2\u533a\u201d"),"\u4e2d\u9605\u8bfb\u66f4\u591a\u76f8\u5173\u4fe1\u606f\u3002 \u4e00\u4e9bSTM32\u5fae\u63a7\u5236\u5668\u6700\u9ad8\u652f\u6301\u53ea\u8fd0\u884c\u5185\u90e8RAM\u7684HVGA\u5206\u8fa8\u7387\uff0c\u8fd9\u662f\u4e00\u79cd\u975e\u5e38\u7ecf\u6d4e\u9ad8\u6548\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h2",o({},{id:"display"}),"\u663e\u793a"),(0,r.kt)("h3",o({},{id:"interface"}),"\u63a5\u53e3"),(0,r.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u5177\u6709\u4e0d\u540c\u663e\u793a\u63a5\u53e3\uff08\u4f8b\u5982SPI\u3001LTDC\u3001MIPI-DSI\uff09\u7684\u663e\u793a\u5c4f\uff0c\u8fd9\u4e9b\u63a5\u53e3\u5bf9\u6240\u9700\u7684\u9488\u6570\u3001\u5e26\u5bbd\u3001\u652f\u6301\u7684\u5206\u8fa8\u7387\u4ee5\u53ca\u53ef\u80fd\u9700\u8981\u7684\u5916\u90e8RAM\u5bb9\u91cf\u90fd\u6709\u4e0d\u540c\u7684\u5f71\u54cd\u3002 \u6709\u5173\u8be6\u60c5\u4ee5\u53ca\u5404\u81ea\u7684\u4f18\u7f3a\u70b9\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)(a.Z,{to:"hardware-components/hardware-selection-display",mdxType:"Link"},"\u201c\u663e\u793a\u201d"),"\u90e8\u5206\u3002"),(0,r.kt)("h3",o({},{id:"size"}),"\u5c3a\u5bf8"),(0,r.kt)("p",null,"\u663e\u793a\u5c4f\u7684\u7269\u7406\u5c3a\u5bf8\u4e5f\u662f\u91cd\u8981\u7684\u8003\u8651\u56e0\u7d20\u4e4b\u4e00\u3002 \u66f4\u5927\u7684\u663e\u793a\u5c4f\u901a\u5e38\u66f4\u5bb9\u6613\u64cd\u4f5c\uff0c\u66f4\u5bb9\u6613\u7ed9\u51fa\u7cbe\u786e\u7684\u89e6\u6478\u547d\u4ee4\uff0c\u4f46\u4e5f\u9700\u8981\u66f4\u5927\u7684\u5206\u8fa8\u7387\u624d\u80fd\u8ba9\u773c\u775b\u66f4\u8212\u9002\uff0c\u4ece\u800c\u5f71\u54cd\u5bf9\u66f4\u591a\u5185\u5b58\u548c\u541e\u5410\u7387\u7684\u9700\u6c42\u3002 \u5982\u679c\u663e\u793a\u5c4f\u4e0a\u7684\u4fe1\u606f\u57281-2\u7c73\u5916\u663e\u793a\uff0c\u5219\u6587\u672c\u3001\u56fe\u6807\u7b49\u9700\u8981\u8db3\u591f\u5927\u3002"),(0,r.kt)("h3",o({},{id:"touch"}),"\u89e6\u63a7"),(0,r.kt)("p",null,"\u89e6\u63a7\u663e\u793a\u5c4f\u4e3b\u8981\u6709\u4e24\u79cd\u7c7b\u578b\uff1a"),(0,r.kt)("h4",o({},{id:"capacitive"}),"\u7535\u5bb9\u5f0f"),(0,r.kt)("p",null,"\u7535\u5bb9\u5f0f\u89e6\u63a7\u663e\u793a\u5c4f\u5177\u6709\u66f4\u9ad8\u7684\u89e6\u63a7\u7075\u654f\u5ea6\uff0c\u5982\u679c\u5e94\u7528\u9700\u8981\u66f4\u9ad8\u7ea7\u7684\u89e6\u63a7\u64cd\u4f5c\uff08\u5982\u62d6\u52a8\u3001\u6ed1\u52a8\u7b49\uff09\uff0c\u8fd9\u4e00\u70b9\u5f88\u91cd\u8981\uff0c\u8fd9\u79cd\u7c7b\u578b\u4e5f\u662f\u73b0\u4ee3\u8bbe\u5907\u4e2d\u4f7f\u7528\u6700\u591a\u7684\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u5b83\u4eec\u4e5f\u66f4\u8d35\uff0c\u800c\u4e14\u901a\u5e38\u4e0d\u80fd\u6234\u624b\u5957\u64cd\u4f5c\uff0c\u6240\u4ee5\u5982\u679c\u8fd9\u5f88\u91cd\u8981\uff0c\u4e5f\u8bb8\u7535\u963b\u5f0f\u662f\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h4",o({},{id:"resistive"}),"\u7535\u963b\u5f0f"),(0,r.kt)("p",null,"\u8fd9\u79cd\u66f4\u4fbf\u5b9c\u7684\u66ff\u4ee3\u54c1\u7075\u654f\u5ea6\u8981\u4f4e\u5f97\u591a\uff0c\u5728\u9633\u5149\u4e0b\u7684\u53ef\u89c1\u6027\u4e5f\u5f88\u5dee\uff0c\u4f46\u53ef\u4ee5\u6234\u624b\u5957\u64cd\u4f5c\uff0c\u56e0\u4e3a\u5b83\u5bf9\u610f\u5916\u4ea4\u4e92\u7684\u654f\u611f\u6027\u8f83\u4f4e\uff0c\u800c\u4e14\u901a\u5e38\u6297\u6027\u66f4\u597d\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u6240\u6709\u7684\u89e6\u63a7\u64cd\u4f5c\u90fd\u7531\u7b80\u5355\u7684\u6309\u6309\u94ae\u7ec4\u6210\uff0c\u90a3\u4e48\u4e5f\u8bb8\u7535\u963b\u5f0f\u663e\u793a\u5c4f\u5c31\u8db3\u591f\u4e86\u3002 STM32F429-DISCO\u677f\u4f7f\u7528\u7535\u963b\u5f0f\u89e6\u63a7\u663e\u793a\u5c4f\u3002"),(0,r.kt)("h2",o({},{id:"animations"}),"\u52a8\u753b"),(0,r.kt)("p",null,"\u5982\u679c\u786c\u4ef6\u7684\u541e\u5410\u7387\u548c\u8ba1\u7b97\u80fd\u529b\u4e0d\u8db3\uff0c\u8fd0\u884c\u590d\u6742\u7684\u52a8\u753b\uff08\u5982\u5168\u5c4f\u8f6c\u6362\u3001\u65cb\u8f6c\u548c\u7f29\u653e\uff09\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u91cd\u5927\u5f71\u54cd\u3002"),(0,r.kt)("p",null,"\u5728\u51b3\u5b9a\u5e94\u7528\u4e2d\u7684\u52a8\u753b\u7ea7\u522b\u65f6\uff0c\u60a8\u9700\u8981\u95ee\u81ea\u5df1\u7684\u4e00\u4e9b\u95ee\u9898\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u9700\u8981\u9ad8\u901f\u5168\u5c4f\u8f6c\u6362\u5417\uff1f"),"\u5168\u5c4f\u8f6c\u6362\u9700\u8981\u6e32\u67d3\u5b8c\u6574\u7684\u5e27\u7f13\u51b2\u533a\uff0c\u56e0\u6b64\u4f9d\u8d56\u4e8e\u8db3\u591f\u7684MCU\u5468\u671f\uff0c\u4ee5\u53ca\u8db3\u591f\u5feb\u7684\u50cf\u7d20\u6570\u636e\u8bbf\u95ee\u548c\u4f20\u8f93\u3002 \u6240\u9700\u7684\u7cfb\u7edf\u6027\u80fd\u8fd8\u53d6\u51b3\u4e8e\u5206\u8fa8\u7387\u548c\u8272\u6df1\u3002 \u9ad8\u5206\u8fa8\u7387\u5168\u5c4f\u8f6c\u6362\u901a\u5e38\u63a8\u8350\u7528\u4e8eSTM32\u9ad8\u6027\u80fd\u4ea7\u54c1\u3002 \u67d0\u4e9b\u8f6c\u6362\u9700\u8981\u989d\u5916\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u56e0\u6b64\u53ef\u80fd\u9700\u8981\u66f4\u5927\u5185\u5b58\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u662f\u5426\u9700\u8981\u590d\u6742\u7684\u7eb9\u7406\u6620\u5c04\u5668\u52a8\u753b\uff0c\u5982\u65cb\u8f6c\u548c\u7f29\u653e\uff1f"),"\u5f53\u6d89\u53ca\u5230\u8ba1\u7b97\u548c\u4f20\u8f93\u4f4d\u56fe\u65f6\uff0c\u52a8\u753b\u7eb9\u7406\u6620\u5c04\u5668\u5728\u7cfb\u7edf\u4e0a\u53ef\u80fd\u975e\u5e38\u5bc6\u96c6\uff0c\u56e0\u6b64\u901a\u5e38\u9700\u8981\u66f4\u9ad8\u7684MHz\u548c\u9ad8\u5185\u5b58\u541e\u5410\u7387\u3002")),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/animations.webp",width:"480",mdxType:"Figure"},"\u52a8\u753b"),(0,r.kt)("h2",o({},{id:"mechanical-design-requirements"}),"\u673a\u68b0\u8bbe\u8ba1\u8981\u6c42"),(0,r.kt)("p",null,"\u4ea7\u54c1\u7684\u7269\u7406\u5916\u58f3\u8981\u6c42\u4f1a\u6709\u5f88\u5927\u5dee\u5f02\uff0c\u5e76\u4e14\u4f1a\u5bf9\u6240\u9009\u786c\u4ef6\u4ea7\u751f\u5f71\u54cd\u3002 \u5bb6\u7528\u7535\u5668\u5bf9\u5371\u9669\u5de5\u4e1a\u7528\u9014\u6709\u5176\u4ed6\u8981\u6c42\uff0c\u56e0\u6b64\uff0c\u5728\u63ed\u793a\u7269\u7406\u9650\u5236\u65f6\uff0c\u60a8\u5e94\u8be5\u95ee\u81ea\u5df1\u7684\u4e00\u4e9b\u95ee\u9898\u53ef\u80fd\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u7684\u4ea7\u54c1\u9700\u8981\u975e\u5e38\u5c0f\u5417\uff1f"),"\u4f8b\u5982\uff0c\u667a\u80fd\u624b\u8868\uff0c\u5b83\u7684\u5916\u58f3\u5927\u5c0f\u6709\u9650\uff0c\u8fd9\u9650\u5236\u4e86PCB\u7684\u5927\u5c0f\uff0c\u56e0\u6b64\u9009\u62e9\u6b63\u786e\u7684\u7ec4\u4ef6\u5f88\u91cd\u8981\u3002 STM32\u63d0\u4f9b\u591a\u79cdMCU\u5c01\u88c5\uff0c\u4f8b\u5982WLCSP\u5c01\u88c5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u7684\u4ea7\u54c1\u4f1a\u66b4\u9732\u4e8e\u6781\u7aef\u6e29\u5ea6\u5417\uff1f"),"\u7535\u5bb9\u5f0f\u663e\u793a\u5c4f\u5728\u6781\u70ed\u6216\u6781\u51b7\u65f6\u6027\u80fd\u4e0d\u4f73\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u5c06\u4ea7\u54c1\u5b89\u88c5\u5728\u5982\u51b7\u5e93\u7b49\u4f4d\u7f6e\uff0c\u5219\u7535\u963b\u5f0f\u663e\u793a\u5c4f\u53ef\u80fd\u4f1a\u63d0\u4f9b\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002 STM32\u4ea7\u54c1\u7ec4\u5408\u63d0\u4f9b\u73af\u5883\u6e29\u5ea6\u8303\u56f4\u9ad8\u8fbe85\u3001105\u548c125\u5ea6\u7684\u5fae\u63a7\u5236\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60a8\u7684\u4ea7\u54c1\u662f\u5426\u9700\u8981\u5bf9\u5ba4\u5916\u73af\u5883\u56e0\u7d20\uff08\u4f8b\u5982\uff0c\u6c34\u6216\u7070\u5c18\uff09\u5177\u6709\u5f88\u5f3a\u6297\u6027\uff1f"),"\u4e0d\u540c\u7684\u6280\u672f\u63d0\u4f9b\u4e0d\u540c\u7684\u8d28\u91cf\u548c\u529f\u80fd\uff0c\u6dfb\u52a0\u4fdd\u62a4\u76d6\u677f\u53ef\u80fd\u662f\u4e00\u79cd\u9009\u62e9\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5149\u4e0b\u53ef\u89c1\u6027\u91cd\u8981\u5417\uff1f"),"\u663e\u793a\u5c4f\u7684\u53d1\u5149\u5f3a\u5ea6\u548c\u5149\u901a\u91cf\u5404\u4e0d\u76f8\u540c\uff0c\u663e\u793a\u5c4f\u7684\u5149\u901a\u91cf\u548c\u53d1\u5149\u5f3a\u5ea6\u8d8a\u9ad8\uff0c\u663e\u793a\u5c4f\u7684\u53ef\u8bfb\u6027\u5c31\u8d8a\u9ad8\u3002 \u6dfb\u52a0\u4e00\u4e2a\u7279\u6b8a\u76d6\u677f\u4e5f\u53ef\u4ee5\u6539\u5584\u8fd9\u4e00\u70b9\u3002 \u6216\u8005\u4f7f\u7528\u53e6\u4e00\u79cd\u4e5f\u53ef\u4ee5\u63d0\u4f9b\u53cd\u5c04\u529f\u80fd\u7684\u663e\u793a\u6280\u672f\u3002")),(0,r.kt)("h2",o({},{id:"frames-per-second"}),"\u6bcf\u79d2\u5e27\u6570"),(0,r.kt)("p",null,"\u66f4\u9ad8\u4e14\u7a33\u5b9a\u7684\u6bcf\u79d2\u5e27\u6570\uff08FPS\uff09\u8ba1\u6570\u901a\u5e38\u66f4\u597d\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u4f7f\u5e94\u7528\u770b\u8d77\u6765\u66f4\u6d41\u7545\u3002"),(0,r.kt)("p",null,"\u6709\u65f6FPS\u4e0d\u90a3\u4e48\u91cd\u8981\u3002 \u4f8b\u5982\uff0c\u5728\u663e\u793a\u52a8\u753b\u66f4\u65b0\u6700\u5c11\u7684\u9759\u6001GUI\u4e2d\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f4e\u6210\u672c\u786c\u4ef6\u53ef\u80fd\u66f4\u5408\u9002\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u6839\u636e\u76ee\u6807\u7528\u6237\u7fa4\uff0c\u62e5\u6709\u6f02\u4eae\u6d41\u7545\u7684\u5e94\u7528\u548c\u5927\u91cf\u534e\u4e3d\u7684\u52a8\u753b\u4e5f\u53ef\u4ee5\u6210\u4e3a\u4e00\u4e2a\u5de8\u5927\u7684\u5356\u70b9\uff0c\u56e0\u6b64\u4e0e\u786c\u4ef6\u9009\u62e9\u76f8\u5173\u7684\u4efb\u4f55\u65b9\u9762\u90fd\u662f\u4e00\u6837\uff0c\u90fd\u662f\u4e3a\u4e86\u6ee1\u8db3\u6700\u7ec8\u7528\u6237\u671f\u671b\uff0c\u5e76\u63d0\u4f9b\u826f\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002"),(0,r.kt)("p",null,"\u56fe\u5f62\u7528\u6237\u754c\u9762\u7684\u6574\u4f53\u6027\u80fd\u5f52\u7ed3\u4e3a\u7cfb\u7edf\u7ea7\u6027\u80fd\uff0c\u5305\u62ec\u5982MCU\u3001RAM\u3001\u95ea\u5b58\u3001\u663e\u793a\u5c4f\u3001\u63a5\u53e3\u541e\u5410\u7387\u7b49\u7ec4\u4ef6\uff0c\u4ee5\u53ca\u5982STM32 Chrom-ART\u7b49\u786c\u4ef6\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u63cf\u7ed8\u4e86\u4e00\u4e9b\u4e0d\u540c\u53c2\u6570\u5f71\u54cd\u7684\u6982\u62ec\u56fe\u3002 \u8981\u9009\u62e9\u6b63\u786e\u7684\u786c\u4ef6\uff0c\u9700\u8981\u8003\u8651\u8fd9\u4e9b\u53c2\u6570\u3002 \u8fd8\u8003\u8651\u5230STM32 Chrom-ART\u53ef\u964d\u4f4eMCU\u8d1f\u8377\uff0c\u56e0\u6b64\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u964d\u4f4e\u4e86\u9ad8MCU\u9891\u7387\u7684\u91cd\u8981\u6027\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/hardware-selection/preliminary-considerations/fps-figures.webp",noShadow:!0,mdxType:"Figure"},"\u4e0d\u540c\u53c2\u6570\u5bf9FPS\u7684\u5f71\u54cd"))}g.isMDXComponent=!0}}]);
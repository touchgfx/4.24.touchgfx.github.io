"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[78814],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496);class a extends o.Component{render(){return o.createElement("div",{className:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}const i=a},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496),a=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,r=(0,a.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:n,height:i,src:r})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:n,height:i,src:r})),o.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(59496),a=n(96151);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const l=r},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496);class a extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}const i=a},2333:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496);class a extends o.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/;if(t.test(e))return t.exec(e)[1];const n=/^https:\/\/youtu\.be\/(.+)$/;if(n.test(e))return n.exec(e)[1];return e}(this.props.url)}`;return o.createElement("div",{className:"videoWrapper"},o.createElement("iframe",{src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}const i=a},35487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>g});n(59496);var o=n(49613),a=n(2333),i=n(28128),r=n(48753),l=n(89639),c=n(95375);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"custom-containers",title:"\u81ea\u8a02\u5bb9\u5668"},m=void 0,d={unversionedId:"development/ui-development/touchgfx-engine-features/custom-containers",id:"development/ui-development/touchgfx-engine-features/custom-containers",title:"\u81ea\u8a02\u5bb9\u5668",description:"\u5728\u5275\u5efa\u61c9\u7528\u6642\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4e00\u500b\u5728TouchGFX\u7684\u6a19\u6e96\u5c0f\u90e8\u4ef6\u96c6\u5408\u4e2d\u6c92\u6709\u7684\u5c0f\u90e8\u4ef6\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-containers.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-containers",permalink:"/4.24/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-containers",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-containers",title:"\u81ea\u8a02\u5bb9\u5668"},sidebar:"docs",previous:{title:"\u4f4d\u7f6e\u548c\u5927\u5c0f",permalink:"/4.24/zh-TW/docs/development/ui-development/touchgfx-engine-features/position-size"},next:{title:"\u5feb\u53d6\u9ede\u9663\u5716",permalink:"/4.24/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}},h={},g=[{value:"TouchGFX Designer\u4e2d",id:"in-touchgfx-designer",level:2},{value:"\u8907\u5408\u81ea\u8a02\u5bb9\u5668",id:"composite-custom-containers",level:3},{value:"\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c",id:"custom-triggers-and-actions",level:3},{value:"\u7a0b\u5f0f\u78bc\u4e2d",id:"in-code",level:2},{value:"\u5275\u5efa\u64f4\u5c55touchgfx::Container\u985e\u7684\u985e",id:"create-a-class-that-extends-the-touchgfxcontainer-class",level:3},{value:"\u5c07\u5bb9\u5668\u7684\u6240\u6709\u5b50\u5bb9\u5668\u5ba3\u544a\u70ba\u6210\u54e1\u8b8a\u6578",id:"declaring-all-children-of-the-container-as-member-variables",level:3},{value:"\u8a2d\u7f6e\u5bb9\u5668\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6",id:"setting-the-width-and-height-of-the-container",level:3},{value:"\u8a2d\u7f6e\u6bcf\u500b\u5b50\u5bb9\u5668",id:"setting-up-each-of-the-children",level:3},{value:"\u6309\u6b63\u78ba\u9806\u5e8f\u5c07\u6bcf\u500b\u5b50\u5bb9\u5668\u6dfb\u52a0\u5230\u5c64\u6b21\u7d50\u69cb\u4e2d",id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order",level:3},{value:"\u901a\u904emethods\u548ccallbacks\u5be6\u73fe\u9700\u8981\u7684\u884c\u70ba",id:"implementing-the-desired-behaviour-via-methods-and-callbacks",level:3}],C={toc:g},f="wrapper";function y(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(f,p({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5275\u5efa\u61c9\u7528\u6642\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4e00\u500b\u5728TouchGFX\u7684\u6a19\u6e96\u5c0f\u90e8\u4ef6\u96c6\u5408\u4e2d\u6c92\u6709\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,o.kt)("p",null,"\u4e00\u7a2e\u5275\u5efa\u81ea\u5df1\u7684\u5c0f\u90e8\u4ef6\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u81ea\u8a02\u5bb9\u5668\u3002 \u81ea\u8a02\u5bb9\u5668\u662f\u4e00\u500b\u5305\u542b\u5176\u4ed6\u73fe\u6709\u5c0f\u90e8\u4ef6\u7684\u7269\u4ef6\uff0c\u5b83\u7d44\u5408\u4e86\u9019\u4e9b\u5c0f\u90e8\u4ef6\u7684\u8996\u89ba\u8868\u73fe\u548c\u884c\u70ba\u3002 \u5b83\u8207\u50b3\u7d71\u7684\u8907\u5408\u8a2d\u8a08\u6a21\u5f0f\u4e26\u7121\u4e0d\u540c\uff0c\u6211\u5011\u4e5f\u5c07\u5305\u542b\u7684\u5c0f\u90e8\u4ef6\u7a31\u70ba\u5bb9\u5668\u7684\u5b50\u5bb9\u5668\u3002"),(0,o.kt)("p",null,"\u81ea\u8a02\u5bb9\u5668\u7684\u7e6a\u88fd\u6027\u80fd\u901a\u5e38\u6703\u5f88\u9ad8\u3002 \u5b83\u6703\u5229\u7528TouchGFX\u7684\u5e95\u5c64\u7e6a\u5716\u6a5f\u5236\uff0c\u4e26\u78ba\u5b9a\u5bb9\u5668\u7684\u54ea\u4e9b\u90e8\u5206\u548c\u5b50\u5bb9\u5668\u9700\u8981\u81ea\u52d5\u91cd\u65b0\u7e6a\u88fd\u3002 \u9019\u610f\u5473\u8457\u5728\u4f7f\u7528\u5bb9\u5668\u6642\u7121\u9700\u64d4\u5fc3\u7e6a\u5716\u6027\u80fd\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u6709\u6642\u5019\u53ef\u80fd\u9700\u8981\u6e1b\u5c11\u5c0f\u90e8\u4ef6\u7684\u7a7a\u9593\u5360\u7528\u91cf\uff0c\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u66f4\u9ad8\u7d1a\u7684",(0,o.kt)("a",p({parentName:"p"},{href:"custom-widgets"}),"\u81ea\u8a02\u5c0f\u90e8\u4ef6"),"\u65b9\u6cd5\u53ef\u80fd\u66f4\u5408\u9069\u3002"),(0,o.kt)("h2",p({},{id:"in-touchgfx-designer"}),"TouchGFX Designer\u4e2d"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u5728TouchGFX Designer\u4e2d\u5275\u5efa\u548c\u4f7f\u7528\u81ea\u8a02\u5bb9\u5668\uff0c\u6211\u5011\u5728\u4e0b\u9762\u7684\u5f71\u7247\u4e2d\u63d0\u4f9b\u4e86\u5982\u4f55\u5728\u5c08\u6848\u4e2d\u4f7f\u7528\u5b83\u5011\u7684\u7d9c\u5408\u4ecb\u7d39\uff1a"),(0,o.kt)(a.Z,{url:"https://youtu.be/nX1nCAA4pyA",mdxType:"YouTube"}),(0,o.kt)("h3",p({},{id:"composite-custom-containers"}),"\u8907\u5408\u81ea\u8a02\u5bb9\u5668"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5275\u5efa\u7531\u5176\u4ed6\u81ea\u8a02\u5bb9\u5668\u7d44\u6210\u7684\u81ea\u8a02\u5bb9\u5668\u3002 \u9019\u53ef\u80fd\u662f\u4e00\u7a2e\u7528\u66f4\u5c0f\u7684\u5143\u4ef6\u5275\u5efa\u5143\u4ef6\u7684\u6709\u6548\u65b9\u5f0f\u3002 \u70ba\u6b64\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u5728\u201cWidgets \u201d\u529f\u80fd\u8868\u4e2d\u627e\u5230\u7684\u5df2\u5b9a\u7fa9\u81ea\u8a02\u5bb9\u5668\u7684\u5be6\u4f8b\uff1a"),(0,o.kt)(l.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/composite-custom-containers-4.17.webp",mdxType:"Figure"},"\u63d2\u5165\u81ea\u8a02\u5bb9\u5668\u7684\u5be6\u4f8b"),(0,o.kt)("p",null,"\u8acb\u6ce8\u610f\uff0cTouchGFX Designer\u5c07\u5e6b\u52a9\u60a8\u907f\u514d\u63d2\u5165\u6703\u5c0e\u81f4\u8ff4\u5708\u5f15\u7528\u7684\u5be6\u4f8b\uff0c\u5982\u5411\u81ea\u8eab\u5b9a\u7fa9\u6dfb\u52a0\u81ea\u8a02\u5bb9\u5668\u5be6\u4f8b\uff1a"),(0,o.kt)(l.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/circular-reference-4.17.webp",mdxType:"Figure"},"\u6f5b\u5728\u8ff4\u5708\u5f15\u7528\u5c0e\u81f4\u7121\u6cd5\u63d2\u5165\u5be6\u4f8b"),(0,o.kt)("h3",p({},{id:"custom-triggers-and-actions"}),"\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c"),(0,o.kt)("p",null,"\u81ea\u8a02\u5bb9\u5668\u7684\u4e00\u500b\u5f37\u5927\u4e4b\u8655\u662f\u80fd\u5920\u6307\u5b9a\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\uff08callbacks\uff09\u548c\u81ea\u8a02\u64cd\u4f5c\uff08methods\uff09\u3002 \u9019\u610f\u5473\u8457\u60a8\u53ef\u4ee5\u70ba\u81ea\u8a02\u5bb9\u5668\u5b9a\u7fa9\u6574\u9ad4\u884c\u70ba\uff0c\u4f7f\u4e4b\u4e0d\u518d\u53ea\u662f\u5c0f\u90e8\u4ef6\u7684\u53ef\u91cd\u8907\u4f7f\u7528\u96c6\u5408\uff0c\u9084\u53ef\u4ee5\u8207\u61c9\u7528\u7a0b\u5f0f\u7684\u5176\u9918\u90e8\u5206\u901a\u4fe1\u3002"),(0,o.kt)(r.Z,{mdxType:"FurtherReading"},"\u8acb\u95b1\u8b80",(0,o.kt)(c.Z,{to:"custom-triggers-and-actions",mdxType:"Link"},"\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c"),"\u4e00\u7bc0\u4e2d\u95dc\u65bc\u6b64\u529f\u80fd\u7684\u66f4\u591a\u5167\u5bb9\u3002"),(0,o.kt)("h2",p({},{id:"in-code"}),"\u7a0b\u5f0f\u78bc\u4e2d"),(0,o.kt)("p",null,"\u81ea\u8a02\u5bb9\u5668\u7684\u4e00\u500b\u5f37\u5927\u4e4b\u8655\u662f\u80fd\u5920\u6307\u5b9a\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\uff08callbacks\uff09\u548c\u81ea\u8a02\u64cd\u4f5c\uff08methods\uff09\u3002 \u9019\u610f\u5473\u8457\u60a8\u53ef\u4ee5\u70ba\u81ea\u8a02\u5bb9\u5668\u5b9a\u7fa9\u6574\u9ad4\u884c\u70ba\uff0c\u4f7f\u4e4b\u4e0d\u518d\u53ea\u662f\u5c0f\u90e8\u4ef6\u7684\u53ef\u91cd\u8907\u4f7f\u7528\u96c6\u5408\uff0c\u9084\u53ef\u4ee5\u8207\u61c9\u7528\u7a0b\u5f0f\u7684\u5176\u9918\u90e8\u5206\u901a\u4fe1\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5275\u5efa\u64f4\u5c55touchgfx::Container\u985e\u7684\u985e"),(0,o.kt)("li",{parentName:"ul"},"\u5c07\u5bb9\u5668\u7684\u6240\u6709\u5b50\u5bb9\u5668\u5ba3\u544a\u70ba\u6210\u54e1\u8b8a\u6578"),(0,o.kt)("li",{parentName:"ul"},"\u8a2d\u7f6e\u5bb9\u5668\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6"),(0,o.kt)("li",{parentName:"ul"},"\u8a2d\u7f6e\u6bcf\u500b\u5b50\u5bb9\u5668"),(0,o.kt)("li",{parentName:"ul"},"\u6309\u6b63\u78ba\u9806\u5e8f\u5c07\u6bcf\u500b\u5b50\u5bb9\u5668\u6dfb\u52a0\u5230\u5c64\u6b21\u7d50\u69cb\u4e2d"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u904emethods\u548ccallbacks\u5be6\u73fe\u9700\u8981\u7684\u884c\u70ba")),(0,o.kt)("p",null,"\u6211\u5011\u5c07\u5f9e\u982d\u958b\u59cb\uff0c\u57fa\u65bc\u7a0b\u5f0f\u78bc\u9032\u884c\u69cb\u5efa\uff0c\u76f4\u81f3\u5f97\u5230\u4e00\u500b\u7c21\u55ae\u7684\u5168\u529f\u80fd\u81ea\u8a02\u5bb9\u5668\u3002"),(0,o.kt)("h3",p({},{id:"create-a-class-that-extends-the-touchgfxcontainer-class"}),"\u5275\u5efa\u64f4\u5c55touchgfx::Container\u985e\u7684\u985e"),(0,o.kt)("p",null,"\u5148\u7528\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u5275\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),"\u6a19\u982d\u6a94\u3002 \u4f7f\u7528C++\u7e7c\u627f\u4f86\u8a2a\u554f",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::Container"),"\u7684\u65b9\u6cd5\u548c\u6210\u54e1\uff08\u8acb\u8a18\u5f97\u5305\u542b\u6a19\u982d\u6a94",(0,o.kt)("inlineCode",{parentName:"p"},"Container.hpp"),"\uff09\uff1a"),(0,o.kt)(i.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{2,4}","{2,4}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),(0,o.kt)("h3",p({},{id:"declaring-all-children-of-the-container-as-member-variables"}),"\u5c07\u5bb9\u5668\u7684\u6240\u6709\u5b50\u5bb9\u5668\u5ba3\u544a\u70ba\u6210\u54e1\u8b8a\u6578"),(0,o.kt)("p",null,"\u5728\u6a19\u982d\u6a94\u4e2d\u5ba3\u544a\u81ea\u8a02\u5bb9\u5668\u5c07\u8981\u5305\u542b\u7684\u5c0f\u90e8\u4ef6\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u5011\u5c07\u53ea\u6dfb\u52a0\u4e00\u500b\u65b9\u6846",(0,o.kt)("inlineCode",{parentName:"p"},"myBox"),"\u548c\u4e00\u500b\u6309\u9215",(0,o.kt)("inlineCode",{parentName:"p"},"myButton"),"\u3002"),(0,o.kt)(i.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{19-20}","{19-20}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n};\n")),(0,o.kt)("h3",p({},{id:"setting-the-width-and-height-of-the-container"}),"\u8a2d\u7f6e\u5bb9\u5668\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6"),(0,o.kt)("p",null,"\u5275\u5efacpp\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp"),"\uff0c\u5176\u4e2d\u5305\u542b\u6211\u5011\u525b\u525b\u5275\u5efa\u7684\u6a19\u982d\u6a94\u3002 \u4f7f\u7528\u69cb\u9020\u51fd\u6578\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"setWidth()"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"setHeight()"),"\u65b9\u6cd5\uff0c\u70ba\u81ea\u8a02\u5bb9\u5668\u8a2d\u7f6e\u4efb\u4f55\u5927\u5c0f\uff1a"),(0,o.kt)(i.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{1,5-6}","{1,5-6}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",p({},{id:"setting-up-each-of-the-children"}),"\u8a2d\u7f6e\u6bcf\u500b\u5b50\u5bb9\u5668"),(0,o.kt)("p",null,"\u73fe\u5728\uff0c\u9700\u8981\u5728\u69cb\u9020\u51fd\u6578\u4e2d\u8a2d\u7f6e\u6bcf\u500b\u5c0f\u90e8\u4ef6\u7684\u5c6c\u6027\uff1a"),(0,o.kt)(i.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{8-12}","{8-12}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",p({},{id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order"}),"\u6309\u6b63\u78ba\u9806\u5e8f\u5c07\u6bcf\u500b\u5b50\u5bb9\u5668\u6dfb\u52a0\u5230\u5c64\u6b21\u7d50\u69cb\u4e2d"),(0,o.kt)("p",null,"\u4f7f\u7528\u69cb\u9020\u51fd\u6578\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"add()"),"\u65b9\u6cd5\uff0c\u5c07\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u70ba\u81ea\u8a02\u5bb9\u5668\u7684\u5b50\u5bb9\u5668\uff1a"),(0,o.kt)(i.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{14-15}","{14-15}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",p({},{id:"implementing-the-desired-behaviour-via-methods-and-callbacks"}),"\u901a\u904emethods\u548ccallbacks\u5be6\u73fe\u9700\u8981\u7684\u884c\u70ba"),(0,o.kt)("p",null,"\u70ba\u4e86\u5411\u81ea\u8a02\u5bb9\u5668\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u884c\u70ba\uff0c\u6211\u5011\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),"\u4e2d\u5b9a\u7fa9\u4e00\u4e9bmethods\u548ccallbacks\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u5011\u5b9a\u7fa9\u4e86\u65b9\u6cd5",(0,o.kt)("inlineCode",{parentName:"p"},"doSomething()"),"\uff0c\u5176\u552f\u4e00\u76ee\u7684\u662f\u767c\u9001callback ",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened"),"\uff1a"),(0,o.kt)(i.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{14-17,22,32-38,51}","{14-17,22,32-38,51}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainerBase();\n    virtual ~MyCustomContainerBase() {}\n    virtual void initialize();\n\n    /*\n     * Callback Setters\n     */\n    void setSomethingHappenedCallback(touchgfx::GenericCallback<>& callback)\n    {\n        somethingHappenedCallback = &callback;\n    }\n\n    /*\n     * Methods\n     */\n    virtual void doSomething();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Callback Emitters\n     */\n    virtual void emitSomethingHappenedCallback()\n    {\n        if (somethingHappenedCallback && somethingHappenedCallback->isValid())\n        {\n            somethingHappenedCallback->execute();\n        }\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::GenericCallback<>* somethingHappenedCallback;\n\n};\n")),(0,o.kt)("p",null,"\u7136\u5f8c\uff0c\u70ba\u4e86\u5411method \u548ccallback\u6dfb\u52a0\u884c\u70ba\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp"),"\u6a94\u4e2d\u5be6\u73fe\u5b83\u5011\u3002 \u5c0d\u65bc\u9019\u500b\u7c21\u55ae\u7684\u8868\u9762\u7d1a\u7bc4\u4f8b\uff0c\u6211\u5011\u5c07\u53ea\u767c\u9001",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened"),"callback\uff0c\u4f46\u60a8\u53ef\u4ee5\u8996\u9700\u8981\u9032\u884c\u81ea\u8a02\uff1a"),(0,o.kt)(i.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n\nvoid MyCustomContainer::doSomething()\n{\n    MyCustomContainer::emitSomethingHappenedCallback();\n}\n")),(0,o.kt)(r.Z,{mdxType:"FurtherReading"},"\u95dc\u65bc\u5982\u4f55\u5275\u5efa\u548c\u4f7f\u7528\u81ea\u8a02\u5bb9\u5668\u7684\u66f4\u591a\u5177\u9ad4\u7bc4\u4f8b\uff0c\u8acb\u53c3\u8003",(0,o.kt)(c.Z,{to:"../../../tutorials/tutorial-04",mdxType:"Link"},"\u6559\u7a0b4\uff1a\u5275\u5efa\u5177\u6709\u81ea\u8a02\u884c\u70ba\u7684\u6efe\u8f2a"),"\u3002"))}y.isMDXComponent=!0}}]);
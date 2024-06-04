"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[27302],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,h=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=a},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},21100:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(96151);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const l=i},30726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>c,metadata:()=>s,toc:()=>d});n(59496);var r=n(49613),a=n(89639),o=n(21100),i=n(28128);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"scenarios-create-at",title:"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u914d\u7f6e"},m=void 0,s={unversionedId:"development/scenarios/scenarios-create-at",id:"development/scenarios/scenarios-create-at",title:"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u914d\u7f6e",description:'TouchGFX\u958b\u767c\u7248\u914d\u7f6e \uff08TBS\uff09\u662f .tpa \u6587\u4ef6\uff0c\u5b9a\u7fa9\u4e86\u904b\u884cTouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5e73\u81fa\u3002 \u6b64\u65b9\u6cd5\u9069\u7528\u65bc\u5e0c\u671b\u80fd\u5920\u5c07\u6613\u65bc\u4f7f\u7528\u7684 TBS \u8207\u904b\u884c\u5728\u5b83\u5011\u4e4b\u4e0a\u7684 UI \u7a0b\u5f0f\u78bc\u7684\u958b\u767c\u4eba\u54e1\u3002  \u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528\u5167\u5efa\u5de5\u5177tgfx.exe\uff0c\u4e26\u5c07\u73fe\u6709\u7684TouchGFX\u5c08\u6848\u5c01\u88dd\u5230\u53ef\u518d\u5206\u914d\u7684TBS\u4e2d\u3002 \u672c\u6587\u4e2d\u7684\u7bc4\u4f8b\u57fa\u65bc\u540d\u70ba"MyApplication"\u7684\u61c9\u7528\u3002',source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-create-at.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-create-at",permalink:"/4.24/zh-TW/docs/development/scenarios/scenarios-create-at",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-create-at",title:"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u914d\u7f6e"},sidebar:"docs",previous:{title:"\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f",permalink:"/4.24/zh-TW/docs/development/scenarios/scenarios-change-pixelformat-bpp"},next:{title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u70ba\u89f8\u767c\u5668",permalink:"/4.24/zh-TW/docs/development/scenarios/example-gpio"}},u={},d=[{value:"\u63cf\u8ff0TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e",id:"describe-application-template",level:2},{value:"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e",id:"create-touchgfx-board-setup",level:2},{value:"\u6e2c\u8a66&amp; \u9a57\u8b49",id:"test-verify",level:2},{value:"\u6700\u7d42\u8aaa\u660e",id:"final-notes",level:2},{value:"\u4e00\u822c\u63d0\u9192",id:"general-tips",level:3},{value:"\u7248\u672c\u63a7\u5236",id:"version-control",level:3}],h={toc:d},g="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,l({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TouchGFX\u958b\u767c\u7248\u914d\u7f6e")," \uff08TBS\uff09\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \u6587\u4ef6\uff0c\u5b9a\u7fa9\u4e86\u904b\u884cTouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684",(0,r.kt)("em",{parentName:"p"},"\u5e73\u81fa"),"\u3002 \u6b64\u65b9\u6cd5\u9069\u7528\u65bc\u5e0c\u671b\u80fd\u5920\u5c07\u6613\u65bc\u4f7f\u7528\u7684 TBS \u8207\u904b\u884c\u5728\u5b83\u5011\u4e4b\u4e0a\u7684 UI \u7a0b\u5f0f\u78bc\u7684\u958b\u767c\u4eba\u54e1\u3002  \u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528\u5167\u5efa\u5de5\u5177",(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),"\uff0c\u4e26\u5c07\u73fe\u6709\u7684TouchGFX\u5c08\u6848\u5c01\u88dd\u5230\u53ef\u518d\u5206\u914d\u7684TBS\u4e2d\u3002 \u672c\u6587\u4e2d\u7684\u7bc4\u4f8b\u57fa\u65bc\u540d\u70ba",(0,r.kt)("em",{parentName:"p"},'"MyApplication"'),"\u7684\u61c9\u7528\u3002"),(0,r.kt)("p",null,"\u5728\u64c1\u6709\u4e86\u529f\u80fd\u5b8c\u6574\u7684TouchGFX\u5c08\u6848\u5f8c\uff0c\u9700\u57f7\u884c\u4e0b\u5217\u6b65\u9a5f\u4f86\u5275\u5efaTBS\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63cf\u8ff0TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e"),"\u547c\u53eb ",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe")," \u4e26\u7de8\u8f2fjson\u6a94(inherits from .touchgfx)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e"),"\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe")," \u4ee5\u5b8c\u6210",(0,r.kt)("inlineCode",{parentName:"li"},".tpa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6e2c\u8a2d& \u9a57\u8b49")," \u5c0e\u5165\u8a2d\u8a08\u7a0b\u5f0f\uff0c\u5275\u5efa\u4e26\u9a57\u8b49\u61c9\u7528")),(0,r.kt)("h2",l({},{id:"describe-application-template"}),"\u63cf\u8ff0TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),"\u5de5\u5177\u751f\u6210\u8a2d\u5b9a\u6a94\uff08.json\uff09\uff0c\u8a72\u6587\u4ef6\u63cf\u8ff0TBS\u7684\u5167\u90e8\u69cb\u4ef6\u3002 TouchGFX Designer\u8b80\u53d6\u6b64\u8cc7\u8a0a\u4e26\u5c07\u5176\u5448\u73fe\u7d66\u7528\u6236\u3002 \u6253\u958b",(0,r.kt)("em",{parentName:"p"},"TouchGFX Environment")," \u63a7\u5236\u53f0\uff0c\u4e26\u5728\u61c9\u7528\u7684 ",(0,r.kt)("em",{parentName:"p"},"parent"),"\u76ee\u9304\u4e2d\u57f7\u884c\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication\n")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.webp",width:"550px",mdxType:"Figure"},"\u70ba.tpa\u6e96\u5099\u6587\u4ef6"),(0,r.kt)("p",null,"\u5728\u904b\u884c\u6307\u4ee4\u7684\u76ee\u9304\u4e2d\u5275\u5efa\u4e0b\u5217\u6a94\u6848\uff1a"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.webp",width:"240px",mdxType:"Figure"},"\u751f\u6210\u7684\u6a94\u5217\u8868"),(0,r.kt)("p",null,"\u5728\u5275\u5efa\u6700\u7d42\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6a94\u4e4b\u524d\uff0c\u5728TouchGFX Designer\u4e2d\u7de8\u8f2f",(0,r.kt)("inlineCode",{parentName:"p"},"MyApplication.json")," \uff0c\u4ee5\u4fbf\u63a7\u5236\u5411\u4f7f\u7528\u8005\u986f\u793aTBS\u7684\u65b9\u5f0f\u3002 \u4f7f\u7528\u8005\u61c9\u7de8\u8f2f\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f5c\u8005")," \u4f7f\u7528 ",(0,r.kt)("em",{parentName:"li"},"\u4f5c\u8005")," \u90e8\u5206\u4e2d\u7684\u6b04\u4f4d\u6307\u5b9a\u4f5c\u8005\u59d3\u540d\u3001\u96fb\u5b50\u4fe1\u7bb1\u548cURL\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8cc7\u6599")," \u4f7f\u7528 ",(0,r.kt)("em",{parentName:"li"},"\u8cc7\u6599"),"\u90e8\u5206\u4e2d\u7684\u6b04\u4f4d\u6307\u5b9aTBS\u7248\u672c\u3001\u5716\u7247\u3001\u958b\u767c\u677f\u540d\u7a31\u3001\u4f9b\u61c9\u5546\u3001\u63cf\u8ff0\u548c\u8a73\u7d30\u8cc7\u8a0a\u9023\u7d50\u3002")),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"MyApplication.json"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-json"}),'   ...\n    "Author": [\n      {\n        "Name": "Chad Brody",\n        "Contact": "chad.brody@mycompany.com",\n        "URL": "http://mycompany.com/"\n      }\n    ],\n  ...\n  "Data": {\n    "Version": {\n      "Major": 1,\n      "Minor": 0,\n      "Build": 0\n    },\n    "Name": "MyApplication",\n    "HumanFriendlyName": "MyApplication",\n    "BoardName": "Custom STM32 Board",\n    "Type": "TGAT",\n    "Vendor": "MyCompany",\n    "Description": "This is a working project on which to base your UI on top of.",\n    "DocumentationLink": "",\n    "Category": "",\n    "Images": [\n      "http://mysite.com/MyCustomBoard-front.png",\n      "http://mysite.com/MyCustomBoard-back.png"\n    ],\n    ...\n  }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u52d9\u5fc5\u5c07\u201c\u985e\u578b\u201d\u5c6c\u6027\u8a2d\u7f6e\u70ba",(0,r.kt)("b",null,"TGAT"),"\u3002 \u5426\u5247\uff0c\u8a72TBS\u5c07\u4e0d\u6703\u986f\u793a\u5728TouchGFX Designer\u4e2d\uff01"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u7576\u5275\u5efaUI\u7bc4\u672c\u6216\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\u6642\uff0c\u201c\u985e\u578b\u201d\u5c6c\u6027\u5206\u5225\u662f",(0,r.kt)("b",null,"TGUI"),"\u548c",(0,r.kt)("b",null,"TGAPP"),"\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5728\u986f\u793aTBS\u7684\u64f4\u5c55\u8cc7\u8a0a\u5361\u6642\uff0cTouchGFX Designer\u6700\u591a\u80fd\u5920\u986f\u793a\u8a72\u6e05\u55ae\u4e2d\u7684\u4e09\u5e45\u5716\u7247\uff08\u5716\u7247\u5f15\u7528\u5fc5\u9808\u662fURL\uff09\u3002 \u5716\u7247\u7684\u6700\u4f73\u89e3\u6790\u5ea6\u70ba400x280\u50cf\u7d20\u3002 "),(0,r.kt)("h2",l({},{id:"create-touchgfx-board-setup"}),"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e"),(0,r.kt)("p",null,"\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u5275\u5efa\u6700\u7d42\u7684\u201c.tpa\u201d\u6a94\uff0c\u4e26\u78ba\u5b9aTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication\n")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.webp",width:"570px",mdxType:"Figure"},"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e"),(0,r.kt)("h2",l({},{id:"test-verify"}),"\u6e2c\u8a66& \u9a57\u8b49"),(0,r.kt)("p",null,"\u70ba\u4e86\u9a57\u8b49",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," \u6a94\u80fd\u5920\u4f5c\u70baTBS\u88abTouchGFX Designer\u8b80\u53d6\u4e26\u7528\u65bc\u5275\u5efa\u65b0\u7684\u61c9\u7528\uff0c\u8acb\u57f7\u884c\u4e0b\u5217\u6b65\u9a5f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u64da\u81ea\u5df1\u7684\u8981\u6c42\u91cd\u547d\u540d ",(0,r.kt)("inlineCode",{parentName:"li"},".tpa")," \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c07 ",(0,r.kt)("inlineCode",{parentName:"li"},".tpa"),"\u6a94\u8907\u88fd\u6216\u79fb\u52d5\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\TouchGFX\\4.13.0\\app\\packages"),"\u3002 \u7136\u5f8c\uff0c\u7528\u6236\u53ef\u4ee5\u5c07TBS\u5f9e\u672c\u5730\u8cc7\u6599\u593e\u5c0e\u5165TouchGFX Designer\u3002")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.webp",width:"550",mdxType:"Figure"},"\u5c07TBS\u5b89\u88dd\u5230\u672c\u5730\u8cc7\u6599\u593e"),(0,r.kt)("ol",l({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"\u6253\u958bTouchGFX Designer\uff0c\u5728",(0,r.kt)("em",{parentName:"li"},"By Partners")," \u9078\u9805\u5361\u4e0b\u9078\u64c7\u8a72TBS\u3002")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info-4-17.webp",width:"550",mdxType:"Figure"},"TBS\u7684\u76f8\u95dc\u8cc7\u8a0a"),(0,r.kt)("h2",l({},{id:"final-notes"}),"\u6700\u7d42\u8aaa\u660e"),(0,r.kt)("p",null,"\u4e0b\u9762\u4e00\u7bc0\u5305\u542b\u5728\u70baTBS\u958b\u767c\u7a0b\u5f0f\u78bc\u6216\u5206\u767cTBS\u6642\u8981\u8003\u616e\u7684\u4e8b\u9805\u7684\u63d0\u793a\u3002"),(0,r.kt)("h3",l({},{id:"general-tips"}),"\u4e00\u822c\u63d0\u9192"),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u6cc1\u4e0b\uff0c\u5728\u5206\u767c",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u4e4b\u524d\u61c9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u78ba\u4fdd\u63d0\u4f9b\u7684\u6240\u6709IDE\u5c08\u6848\u6309\u9810\u671f\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u522a\u9664",(0,r.kt)("em",{parentName:"li"},"build"),"-\u548c",(0,r.kt)("em",{parentName:"li"},"generated"),"\u8cc7\u6599\u593e\uff0c\u4ee5\u4fbf\u6e1b\u5c11TBS\u7684\u8cc7\u6599\u91cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u78ba\u4fdd\u5728TouchGFX\u5c08\u6848\u6a94\u6848",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx"),"\u4e2d\u5b9a\u7fa9\u7684\u81ea\u8a02\u6307\u4ee4\uff08",(0,r.kt)("em",{parentName:"li"},"PostGenerate"),"-\u7b49\uff09\u6309\u9810\u671f\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u78ba\u4fddTBS\u53ef\u4ee5\u88abTouchGFX Designer\u8b80\u53d6\u4e26\u7528\u65bc\u5275\u5efa\u65b0\u7684\u61c9\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6c92\u6709\u4e00\u7a2e\u76f4\u63a5\u7684\u65b9\u5f0f\u4f86\u6307\u5b9aTBS\u7248\u672c\u4e4b\u9593\u7684\u5347\u7d1a\u6d41\u7a0b\u3002")),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5728\u4fee\u6539TouchGFX\u5c08\u6848\u6216\u201c.json\u201d\u6a94\u7684\u5167\u5bb9\u5f8c\uff0c\u52d9\u5fc5\u91cd\u65b0\u5c01\u5305\u61c9\u7528\u7bc4\u672c\u3002"),(0,r.kt)("p",null,"\u5728\u5206\u767c",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u5f8c\uff0c\u61c9\u6307\u793a\u7528\u6236\u5c07",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6a94\u8907\u88fd\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\TouchGFX\\4.13.0\\app\\packages"),"\u4e2d\uff0c\u4e26\u91cd\u555fTouchGFX Designer\uff08\u82e5\u5df2\u6253\u958b\uff09\u3002"),(0,r.kt)("h3",l({},{id:"version-control"}),"\u7248\u672c\u63a7\u5236"),(0,r.kt)("p",null,"\u958b\u767c\u8005\u901a\u5e38\u6703\u5c07\u6574\u500b\u958b\u767c\u5c08\u6848\uff08\u958b\u767c\u677f\u555f\u52d5\u642d\u5efa\u3001TouchGFX AL\u548cTouchGFX UI\uff09\u4fdd\u5b58\u5728\u540c\u4e00\u500b\u5b58\u5132\u5eab\u4e2d\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u53ef\u5206\u767c",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\u3002 \u4f46\u662f\uff0c\u70ba\u4e86\u8b93\u5718\u968a\u6210\u54e1\u80fd\u5920\u555f\u52d5\u65b0\u7684TouchGFX\u61c9\u7528\uff0c\u5728\u9032\u884c\u6e2c\u8a66\u548c\u9a57\u8b49\u6642\uff0c\u7d71\u4e00\u7684\u5e73\u81fa\u7a0b\u5f0f\u78bc\u6703\u5f88\u6709\u5e6b\u52a9\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u901a\u904e\u5206\u767c",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6a94\u548c/\u6216\u4f7f\u7528\u5de5\u5177\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"repo"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"git\u5b50\u6a21"),"\uff09\u4f86\u6a21\u7d44\u5316\u7a0b\u5f0f\u78bc\u5eab\uff0c\u6700\u597d\u6309\u7167\u524d\u6587\u6240\u8ff0",(0,r.kt)("inlineCode",{parentName:"p"},".json"),"\u63cf\u8ff0\u6a94\u4e2d\u6307\u5b9a\u7684\u7248\u672c\u4f86\u547d\u540dTBS\u7d44\u4ef6\u7248\u672c\u3002 \u5982\u679c\u4f7f\u7528\u6a21\u7d44\u5316\u65b9\u6cd5\uff0c\u5247",(0,r.kt)("em",{parentName:"p"},"platform"),"\u7a0b\u5f0f\u78bc\u5728\u88ab\u7528\u4f5c\u4e3b\u5c08\u6848\u7d50\u69cb\u4e2d\u7684\u6a21\u7d44\u7684\u540c\u6642\uff0c\u4ecd\u53ef\u7528\u65bc\u5275\u5efa\u53ef\u5206\u767c",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-json"}),'  "Data": {\n    "Version": {\n      "Major": 3,\n      "Minor": 0,\n      "Build": 0\n    },\n')),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"$ git tag\nv1.1.0\nv2.0.0\nv2.1.0\nv3.0.0\n")))}k.isMDXComponent=!0}}]);
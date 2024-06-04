"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[88663],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},28128:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=a},89639:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(59496),a=t(7029);const o=function(e){const n=e.noShadow||!1,t=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return n?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:t,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:t,height:o,src:i})),r.createElement("p",null,e.children))}},18718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>d});t(59496);var r=t(49613),a=t(89639),o=t(28128);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const p={id:"using-binary-fonts",title:"\u4e8c\u8fdb\u5236\u5b57\u4f53"},u=void 0,c={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-fonts",id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",title:"\u4e8c\u8fdb\u5236\u5b57\u4f53",description:"\u672c\u8282\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX\u4e2d\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002 \u7b2c\u4e00\u90e8\u5206\u5305\u542bTouchGFX\u4e2d\u5173\u4e8e\u5b57\u4f53\u548c\u6587\u672c\u7cfb\u7edf\u7684\u4e00\u4e9b\u6df1\u5ea6\u4fe1\u606f\uff0c\u5728\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u65f6\u6709\u52a9\u4e8e\u52a0\u6df1\u7406\u89e3\u3002 \u7b2c\u4e8c\u90e8\u5206\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-fonts",permalink:"/4.24/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"using-binary-fonts",title:"\u4e8c\u8fdb\u5236\u5b57\u4f53"},sidebar:"docs",previous:{title:"\u52a8\u6001\u4f4d\u56fe",permalink:"/4.24/zh-CN/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"\u5b57\u4f53\u7f13\u5b58",permalink:"/4.24/zh-CN/docs/development/ui-development/touchgfx-engine-features/font-cache"}},s={},d=[{value:"\u5b57\u4f53\u548c\u6587\u672c\u7cfb\u7edf\u7c7b",id:"the-font-and-text-system-classes",level:2},{value:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53",id:"using-binary-fonts",level:2},{value:"\u914d\u7f6e\u5b57\u4f53\u8f6c\u6362\u5668\u4ee5\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53",id:"configuring-the-font-converter-to-generate-binary-fonts",level:3},{value:"\u624b\u52a8\u914d\u7f6e",id:"manual-configuration",level:3},{value:"\u5b89\u88c5\u4e8c\u8fdb\u5236\u5b57\u4f53",id:"installing-the-binary-font",level:3},{value:"\u91cd\u7f6e\u5b57\u4f53",id:"resetting-a-font",level:3},{value:"\u5728\u53e6\u4e00\u4e2a\u9879\u76ee\u4e2d\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53",id:"generating-binary-fonts-in-another-project",level:2}],f={toc:d},m="wrapper";function g(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)(m,i({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u5982\u4f55\u5728TouchGFX\u4e2d\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002 \u7b2c\u4e00\u90e8\u5206\u5305\u542bTouchGFX\u4e2d\u5173\u4e8e\u5b57\u4f53\u548c\u6587\u672c\u7cfb\u7edf\u7684\u4e00\u4e9b\u6df1\u5ea6\u4fe1\u606f\uff0c\u5728\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u65f6\u6709\u52a9\u4e8e\u52a0\u6df1\u7406\u89e3\u3002 \u7b2c\u4e8c\u90e8\u5206\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u4e8c\u8fdb\u5236\u5b57\u4f53\u53ef\u7528\u4f5c\u5c06\u5b57\u4f53\u4fe1\u606f\u7f16\u8bd1\u5e76\u94fe\u63a5\u5230\u5e94\u7528\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src"),"\u4e2d\u7684.cpp\u6587\u4ef6\uff09\u7684\u4f20\u7edf\u65b9\u5f0f\u7684\u66ff\u4ee3\u65b9\u6848\u3002 \u6b64\u65b9\u6cd5\u7684\u4e3b\u8981\u4f18\u52bf\u662f\u5e94\u7528\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u91cf\u66f4\u5c11\uff0c\u5728\u4e3a\u8bbe\u5907\u63d0\u4f9b\u4e0d\u540c\u5b57\u4f53\u96c6\u5408\u65b9\u9762\u5177\u6709\u7075\u6d3b\u6027\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u4e3a\u8981\u9500\u5f80\u4e2d\u56fd\u7684\u8bbe\u5907\u63d0\u4f9b\u4e2d\u6587\u5b57\u4f53\uff0c\u5e76\u4e3a\u8981\u9500\u5f80\u65e5\u672c\u7684\u8bbe\u5907\u63d0\u4f9b\u65e5\u6587\u5b57\u4f53\u3002  \u6b64\u65b9\u6cd5\u7684\u7f3a\u70b9\u662f\u9700\u8981\u5c06\u6574\u4e2a\u4e8c\u8fdb\u5236\u5b57\u4f53\u52a0\u8f7d\u5230RAM\uff08\u6216\u5b58\u50a8\u5668\u6620\u5c04\u95ea\u5b58\uff09\uff0c\u5728\u5b57\u4f53\u8f83\u5927\u65f6\u4f1a\u9762\u4e34\u56f0\u96be\u3002"),(0,r.kt)("p",null,"\u5c06\u5b57\u4f53\u94fe\u63a5\u5230\u5e94\u7528\u7684\u57fa\u672c\u539f\u5219\u7684\u4e3b\u8981\u4f18\u52bf\u662f\u5e94\u7528\u59cb\u7ec8\u4f1a\u81ea\u52a8\u5305\u542b\u5e94\u7528\u4e2d\u4f7f\u7528\u7684\u66f4\u65b0\u6587\u672c\u548c\u5b57\u4f53\u6392\u5370\u3002 \u56e0\u6b64\uff0c\u4f7f\u7528\u8d77\u6765\u5341\u5206\u5bb9\u6613\u548c\u5b89\u5168\u3002 \u5176\u7f3a\u70b9\u5728\u4e8e\u5b57\u4f53\u4f1a\u4f7f\u5e94\u7528\u7684\u4f53\u79ef\u53d8\u5927\u3002"),(0,r.kt)("h2",i({},{id:"the-font-and-text-system-classes"}),"\u5b57\u4f53\u548c\u6587\u672c\u7cfb\u7edf\u7c7b"),(0,r.kt)("p",null,"\u5728\u9ed8\u8ba4\u914d\u7f6e\u4e2d\uff0cTouchGFX\u4e3a\u5e94\u7528\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u6587\u672c\u548c\u5b57\u4f53\u751f\u6210.cpp\u6587\u4ef6\u3002 \u8fd9\u4e9b\u6587\u4ef6\u8fde\u540c\u751f\u6210\u7684UI\u548c\u5e94\u7528\u4ee3\u7801\u4e00\u8d77\u88ab\u7f16\u8bd1\u548c\u94fe\u63a5\u5230\u5e94\u7528\u4e2d\u3002"),(0,r.kt)("p",null,"\u5728UI\u7684TextArea\u7b49\u533a\u57df\u663e\u793a\u6587\u672c\u65f6\uff0c\u7528TypedTextId\u5f15\u7528\u6587\u672c\u3002 \u63a7\u4ef6\u4f7f\u7528\u6b64TypedTextId\u67e5\u627e\u6587\u672c\u4e2d\u7684\u5b9e\u9645\u5b57\u6bcd\u3002 \u63a7\u4ef6\u5c06\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"framework/include/touchgfx/Texts.hpp"),"\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"touchgfx::Texts"),"\u7c7b\u8bbf\u95ee\u6587\u672c\u3002"),(0,r.kt)("p",null,"Text\u7c7b\u5305\u542b\u6307\u9488\u9635\u5217\uff0c\u6307\u9488\u6307\u5411\u5e94\u7528\u4e2d\u6bcf\u79cd\u8bed\u8a00\u7684\u7ffb\u8bd1\u8868\u3002 \u7ffb\u8bd1\u8868\u57fa\u672c\u4e0a\u662f\u8bed\u8a00\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u5b57\u7b26\u4e32\u7684\u96c6\u5408\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.webp",noShadow:"true",width:"420",mdxType:"Figure"},"\u5c06\u6587\u672c\u6620\u5c04\u5230\u7279\u5b9a\u8bed\u8a00"),(0,r.kt)("p",null,"\u6b64\u8868\u4f7fTouchGFX\u80fd\u591f\u5728\u9009\u4e2d\u8bed\u8a00\u4e2d\u627e\u5230\u7ed9\u5b9a\u6587\u672c\u3002"),(0,r.kt)("p",null,"\u6bcf\u5f53\u60a8\u5728TouchGFX \u8bbe\u8ba1\u5668\u4e2d\u66f4\u6539\u6587\u672c\u6216\u76f4\u63a5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"texts.xml"),"\u6587\u4ef6\u4e2d\u66f4\u6539\u6587\u672c\u5e76\u751f\u6210\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u90fd\u4f1a\u91cd\u65b0\u751f\u6210\u8868\u683c\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5148\u77e5\u9053\u6587\u672c\u8981\u4f7f\u7528\u7684\u5b57\u4f53\uff0c\u7136\u540e\u624d\u80fd\u5728\u5c4f\u5e55\u4e0a\u7ed8\u5236\u3002 \u6587\u672c\u4e0e\u5b57\u4f53\u4e4b\u95f4\u7684\u6620\u5c04\u7531TypedTextDatabase\u7c7b\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),"\uff09\u63a7\u5236\u3002"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u7684\u6587\u672c\u9009\u9879\u5361\u4e0a\uff0c\u53ef\u4ee5\u6307\u5b9a\u6bcf\u79cd\u6587\u672c\u7684\u5b57\u4f53\u6392\u5370\u3001\u4e66\u5199\u987a\u5e8f\uff08\u4ece\u5de6\u5411\u53f3\u6216\u4ece\u53f3\u5411\u5de6\uff09\u548c\u5bf9\u9f50\u65b9\u5f0f\uff08\u5de6\u3001\u53f3\u548c\u4e2d\u5fc3\uff09\u3002 \u6587\u672c\u7684\u6bcf\u79cd\u7ffb\u8bd1\u6587\u4ef6\u7684\u5b57\u4f53\u6392\u5370\u3001\u4e66\u5199\u987a\u5e8f\u548c\u5bf9\u9f50\u65b9\u5f0f\u53ef\u80fd\u4e0d\u540c\u3002 \u6b64\u4fe1\u606f\u88ab\u7f16\u8bd1\u5230\u6bcf\u79cd\u8bed\u8a00\u7279\u5b9a\u7684\u8868\u683c\u4e2d\u3002 \u56e0\u6b64\uff0cTouchGFX\u5f88\u5bb9\u6613\u627e\u51fa\u8981\u5bf9\u7ed9\u5b9a\u6587\u672c\u4f7f\u7528\u7684\u5b57\u4f53\u3001\u5bf9\u9f50\u65b9\u5f0f\u548c\u4e66\u5199\u65b9\u5f0f\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.webp",noShadow:"true",width:"600",mdxType:"Figure"},"\u5b57\u4f53\u6392\u5370\u4fe1\u606f\u7279\u5b9a\u4e8e\u8bed\u8a00"),(0,r.kt)("p",null,"\u5728\u4e0a\u56fe\u4e2d\uff0cTypedTextData\u8868\u6709\u6307\u5411\u4e09\u4e2a\u9635\u5217\u7684\u6307\u9488\uff0c \u6bcf\u4e2a\u5bf9\u5e94\u4e8e\u5e94\u7528\u4e2d\u7684\u4e00\u79cd\u8bed\u8a00\u3002 \u6bcf\u4e2a\u9635\u5217\u67093\u4e2a\u5143\u7d20\uff0c\u6bcf\u4e2a\u5143\u7d20\u5bf9\u5e94\u4e8e\u7cfb\u7edf\u4e2d\u7684\u4e00\u79cd\u6587\u672c\u3002 \u6bcf\u4e2a\u5143\u7d20\u90fd\u63cf\u8ff0\u4e86\u5b57\u4f53\u3001\u9605\u8bfb\u987a\u5e8f\u548c\u5bf9\u9f50\u65b9\u5f0f\u3002 \u6211\u4eec\u770b\u5230\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e09\u79cd\u8bed\u8a00\u7684\u6587\u672c\u4f7f\u7528\u76f8\u540c\u7684\u5b57\u4f53\uff0c\u4f46\u6587\u672c\u4f7f\u7528\u4e0d\u540c\u7684\u5b57\u4f53\uff08F1\u6216F2\uff09\u3002 \u5e94\u7528\u4e2d\u6709\u4e24\u79cd\u5b57\u4f53\uff0c\u56e0\u6b64\u5b57\u4f53\u8868\u6709\u4e24\u4e2a\u6307\u9488\u3002"),(0,r.kt)("p",null,"\u5f53TouchGFX\u8981\u5728\u5c4f\u5e55\u4e0a\u7ed8\u5236\u6587\u672c\u65f6\uff0c\u4f1a\u67e5\u627eTypedTextData\u83b7\u53d6\u7ed9\u5b9a\u6587\u672c\u3002 \u6b64\u6570\u636e\u5305\u542bTouchGFX \u8bbe\u8ba1\u5668\u6216xml\u4e2d\u89c4\u5b9a\u7684\u6587\u672c\u5b57\u4f53\u7d22\u5f15\u3001\u5b57\u6bcd\u987a\u5e8f\uff08LTR/RTL\uff09\u548c\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f\uff08\u5de6\u3001\u53f3\u548c\u4e2d\u5fc3\uff09\u3002 TouchGFX\u4f7f\u7528TypedTextData\uff08F1\u6216F2\uff09\u4e2d\u7684\u5b57\u4f53\u7d22\u5f15\u67e5\u627e\u6587\u672c\u7684\u6b63\u786e\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u5728\u5c06\u5b57\u4f53\u7f16\u8bd1\u5230\u5e94\u7528\u4e2d\u65f6\uff0c\u6240\u6709\u8fd9\u4e9b\u64cd\u4f5c\u90fd\u4f1a\u81ea\u52a8\u53d1\u751f\u3002"),(0,r.kt)("h2",i({},{id:"using-binary-fonts"}),"\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53"),(0,r.kt)("p",null,"\u5f53\u5e94\u7528\u4f7f\u7528\u8bb8\u591a\u4e0d\u540c\u5b57\u4f53\u7684\u8bb8\u591a\u5b57\u6bcd\u65f6\uff0c\u5e94\u7528\u7684\u5927\u5c0f\u4f1a\u5927\u5927\u589e\u52a0\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u7f13\u89e3\u8fd9\u4e2a\u95ee\u9898\uff0cTouchGFX\u5141\u8bb8\u5e94\u7528\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002 \u8fd9\u4e9b\u5b57\u4f53\u4e0d\u94fe\u63a5\u5230\u5e94\u7528\uff0c\u800c\u662f\u72ec\u7acb\u4e8e\u5e94\u7528\u4fdd\u5b58\u4e3a\u5355\u72ec\u7684\u6587\u4ef6\u3002 \u5e94\u7528\u5728\u8fd0\u884c\u65f6\u95f4\u5c06\u8fd9\u4e9b\u6587\u4ef6\u52a0\u8f7d\u5e76\u63d0\u4f9b\u7ed9TouchGFX\u3002 \u4e3e\u4f8b\u6765\u8bf4\uff0c\u5e94\u7528\u53ef\u4ee5\u4ece\u5916\u90e8\u5b58\u50a8\u5668\uff08\u5982SD\u5361\uff09\u52a0\u8f7d\u5b57\u4f53\uff0c\u4e5f\u53ef\u4ee5\u4ece\u4e92\u8054\u7f51\u4e0b\u8f7d\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u5728\u52a0\u8f7d\u5b57\u4f53\u540e\uff0c\u5e94\u7528\u53ef\u4ee5\u8981\u6c42TouchGFX\u5b89\u88c5\u5b57\u4f53\u7cfb\u7edf\u4e2d\u7684\u4e8c\u8fdb\u5236\u5b57\u4f53\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.webp",noShadow:"true",width:"600",mdxType:"Figure"},"\u5728\u5b57\u4f53\u8868\u4e2d\u5b89\u88c5\u4e8c\u8fdb\u5236\u5b57\u4f53"),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684\u81ea\u5e26Font2\u88ab\u5e94\u7528\u52a0\u8f7d\u7684Binaryfont\u66ff\u4ee3\u3002 \u6b64\u540e\uff0cTouchGFX\u5c06\u4e0d\u4f7f\u7528\u5185\u8054Font2\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6587\u672c\u8868\u4e2d\u6ca1\u6709\u4efb\u4f55\u66f4\u6539\u3002 \u4ecd\u7136\u901a\u8fc7\u7d22\u5f15\u6765\u5f15\u7528\u76f8\u540c\u7684\u5b57\u4f53\uff08F1\u548cF2\uff09\u3002"),(0,r.kt)("h3",i({},{id:"configuring-the-font-converter-to-generate-binary-fonts"}),"\u914d\u7f6e\u5b57\u4f53\u8f6c\u6362\u5668\u4ee5\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53"),(0,r.kt)("p",null,"\u4e3a\u4e86\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53\uff0c\u5fc5\u987b\u914d\u7f6e\u5b57\u4f53\u8f6c\u6362\u5668\u3002 \u8fd9\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u5f88\u5bb9\u6613\u505a\u5230\u3002 \u8f6c\u81f3\u201c\u914d\u7f6e\u201d\u9009\u9879\u5361\uff0c\u9009\u62e9\u201c\u6587\u672c\u914d\u7f6e\u201d\uff0c\u7136\u540e\u70b9\u51fb\u201c\u4e8c\u8fdb\u5236\u5b57\u4f53\u6587\u4ef6\u201d\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.webp",mdxType:"Figure"},"\u9009\u62e9\u4e8c\u8fdb\u5236\u5b57\u4f53"),(0,r.kt)("p",null,"\u5728\u91cd\u65b0\u751f\u6210\u4ee3\u7801\u65f6\uff0cTouchGFX\u5c06\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin/"),"\u6587\u4ef6\u5939\u4e2d\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53\uff0c\u5e76\u6e05\u7a7a",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/"),"\u6587\u4ef6\u5939\u4e2d\u666e\u901a\u6587\u4ef6\u4e2d\u7684\u5b57\u4f53."),(0,r.kt)("p",null,"\u751f\u6210\u7684\u4ee3\u7801\u5c06TouchGFX\u914d\u7f6e\u4e3a\u4f7f\u7528\u7a7a\u5b57\u4f53\u3002 \u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u5728\u8fd0\u884c\u65f6\u5b89\u88c5\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002"),(0,r.kt)("h3",i({},{id:"manual-configuration"}),"\u624b\u52a8\u914d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528TouchGFX Designer\uff0c\u4ecd\u7136\u53ef\u4ee5\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002 \u5728\u9879\u76ee\u7684",(0,r.kt)("em",{parentName:"p"},"application.config"),"\u6587\u4ef6\u7684text_configuration\u90e8\u5206\u5c06\u9009\u9879\u201cbinary_fonts\u201d\u66f4\u6539\u4e3a\u201cyes\u201d\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"application.config"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),(0,r.kt)("p",null,"\u5728\u4e0b\u4e00\u6b21\u751f\u6210assets\u65f6\uff0c\u4e8c\u8fdb\u5236\u5b57\u4f53\u5c06\u4f1a\u51fa\u73b0\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin"),"\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("h3",i({},{id:"installing-the-binary-font"}),"\u5b89\u88c5\u4e8c\u8fdb\u5236\u5b57\u4f53"),(0,r.kt)("p",null,"\u5728TouchGFX\u53ef\u4ee5\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u4e4b\u524d\uff0c\u5b57\u4f53\u6570\u636e\u5fc5\u987b\u5728RAM\u6216QSPI\u95ea\u5b58\u7b49\u53ef\u5bfb\u5740\u5185\u5b58\u4e2d\u53ef\u7528\uff08\u53ef\u901a\u8fc7\u6307\u9488\u76f4\u63a5\u8bbf\u95ee\uff09\u3002 \u901a\u5e38\u4f1a\u6d89\u53ca\u4ece\u6587\u4ef6\u6216\u5757\u5b58\u50a8\uff08\u5982\uff1aemmc flash\uff09\u590d\u5236\u6570\u636e\u3002 \u4e5f\u53ef\u80fd\u53d1\u751f\u5728\u751f\u4ea7\u8fc7\u7a0b\u4e2d\uff0c\u4e8c\u8fdb\u5236\u5b57\u4f53\u95ea\u5b58\u5230\u5b58\u50a8\u6620\u5c04\u95ea\u5b58\u4e2d\u7684\u9884\u5b9a\u4e49\u5730\u5740\u3002"),(0,r.kt)("p",null,"\u5f53\u5e94\u7528\u7a0b\u5e8f\u5c06\u4e8c\u8fdb\u5236\u5b57\u4f53\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u65f6(\u5982\u679c\u8fd8\u4e0d\u53ef\u7528)\uff0c\u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u521b\u5efa\u5e76\u5b89\u88c5\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"BinaryFont")," \u5bf9\u8c61\uff0c\u5f15\u7528TouchGFX\u4e2d\u7684\u6570\u636e\u3002 \u7136\u540e\uff0cTouchGFX\u5c06\u4f7f\u7528\u8be5\u5b57\u4f53\u800c\u4e0d\u662f\u7f16\u8bd1\u7684\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u4e8c\u8fdb\u5236\u5b57\u4f53\u9700\u8981\u5728\u7528\u4e8e\u7ed8\u5236\u5f15\u7528\u5b57\u4f53\u7684\u6587\u672c\u4e4b\u524d\u5b89\u88c5\uff0c\u4f46\u4e0d\u9700\u8981\u5728\u542f\u52a8\u540e\u7acb\u5373\u5b89\u88c5\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"FrontApplication.cpp"),"\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication\uff08Model&m\uff0cFrontendHeap&heap\uff09"),"\u6784\u9020\u51fd\u6570\u53ef\u7528\u4e8e\u5b89\u88c5\u5b57\u4f53\u3002 \u5c06\u5728\u7ed8\u5236\u4efb\u4f55\u5185\u5bb9\u4e4b\u524d\u6267\u884c\u6b64\u6784\u9020\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u5b57\u4f53\u4e5f\u53ef\u4ee5\u5b89\u88c5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"setupScreen()"),"\u6cd5\u4e2d\u3002 \u5982\u679c\u60a8\u7684\u5b57\u4f53\u4ec5\u5728\u7279\u5b9a\u5c4f\u5e55\u4e2d\u4f7f\u7528\uff0c\u8fd9\u4f1a\u975e\u5e38\u6709\u7528\u3002 \u7136\u540e\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"tearDownScreen()"),"\u4e2d\u5378\u8f7d\u5b57\u4f53"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5c06\u4e8c\u8fdb\u5236\u5b57\u4f53\u4ece\u6587\u4ef6\u7cfb\u7edf\u52a0\u8f7d\u5230\u5185\u90e8RAM\u7684\u793a\u4f8b\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),(0,r.kt)("p",null,"\u6253\u5f00\u6587\u4ef6\u548c\u8bfb\u53d6\u6570\u636e\u7684\u5177\u4f53\u4ee3\u7801\u5c06\u53d6\u51b3\u4e8e\u6587\u4ef6\u7cfb\u7edf\u548c\u64cd\u4f5c\u7cfb\u7edf\u3002 \u57fa\u672c\u6b65\u9aa4\u662f\u5728\u5b58\u50a8\u5668\u4e2d\u63d0\u4f9b\u5b57\u4f53\u6570\u636e\uff0c\u521d\u59cb\u5316\u5177\u6709\u6307\u5411\u6570\u636e\u7684\u6307\u9488\u7684BinaryFont\u5bf9\u8c61\uff0c\u5e76\u6700\u7ec8\u5c06BinaryFont\u5bf9\u8c61\u4f20\u9012\u5230TouchGFX\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TypedTextDatabase"),"\u3002"),(0,r.kt)("p",null,"\u8c03\u7528",(0,r.kt)("em",{parentName:"p"},"setFont"),"\u540e\uff0cTouchGFX\u5c06\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u800c\u4e0d\u662f\u7f16\u8bd1\u5b57\u4f53\uff08DEFAULT\uff09\u5728\u5c4f\u5e55\u4e0a\u7ed8\u5236\u6587\u672c\u3002"),(0,r.kt)("h3",i({},{id:"resetting-a-font"}),"\u91cd\u7f6e\u5b57\u4f53"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u540e\uff0c\u6709\u65f6\u4f1a\u60f3\u8981\u6062\u590d\u7f16\u8bd1\u5230\u5e94\u7528\u4e2d\u7684\u539f\u59cb\u5b57\u4f53\u3002 \u4f8b\u5982\uff0c\u5728\u66f4\u6539\u8bed\u8a00\u65f6\uff0c\u60f3\u8981\u4f7f\u7528\u9ed8\u8ba4\u5b57\u4f53\u3002 TypedTextDatabase\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"resetFont()"),"\u51fd\u6570\u5c06\u91cd\u7f6e\u6307\u5411\u81ea\u5e26\u5b57\u4f53\u7684\u5b57\u4f53\u6307\u9488\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),(0,r.kt)("p",null,"\u5728\u8c03\u7528\u540e\uff0c\u5e94\u7528\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u88ab\u4e8c\u8fdb\u5236\u5b57\u4f53\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u4ee5\u4fbf\u5206\u914d\u65b0\u5b57\u4f53\u6216\u7528\u4e8e\u5176\u4ed6\u7528\u9014\u3002"),(0,r.kt)("h2",i({},{id:"generating-binary-fonts-in-another-project"}),"\u5728\u53e6\u4e00\u4e2a\u9879\u76ee\u4e2d\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53"),(0,r.kt)("p",null,"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u5e0c\u671b\u5728\u9879\u76ee\u4e2d\u540c\u65f6\u4f7f\u7528\u666e\u901a\u5b57\u4f53\u548c\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002 \u4f8b\u5982\uff0c\u60a8\u5e0c\u671b\u5728\u8bbe\u5907\u4e2d\u4f7f\u7528\u666e\u901a\u7f16\u8bd1\u5b57\u4f53\u7684\u82f1\u6587\u5b57\u6bcd\uff0c\u4f46\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u4e8c\u8fdb\u5236\u5b57\u4f53\u7684\u4e2d\u6587\u548c\u65e5\u8bed\u5b57\u7b26\u3002 \u6b64\u8bbe\u7f6e\u5728TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u4e0d\u53ef\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u5efa\u8bae\u521b\u5efa\u4e24\u4e2aTouchGFX\u9879\u76ee\u3002 \u5728\u7b2c\u4e00\u4e2a\u9879\u76ee\uff08\u60a8\u7684\u666e\u901a\u5e94\u7528\u7a0b\u5e8f\uff09\u4e2d\uff0c\u60a8\u62e5\u6709\u6240\u6709\u4f7f\u7528\u666e\u901a\u5b57\u4f53\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u548cUI\u3002 \u5728\u7b2c\u4e8c\u4e2a\u9879\u76ee\u4e2d\uff0c\u60a8\u53ea\u6709\u8db3\u591f\u7684\u6587\u672c\uff08\u6216\u901a\u914d\u7b26\uff09\u6765\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u5728\u7b2c\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0c\u53d6\u6d88\u9009\u62e9\u201c\u4e8c\u8fdb\u5236\u5b57\u4f53\u6587\u4ef6\u201d\u3002 \u5728\u7b2c\u4e8c\u4e2a\u9879\u76ee\u4e2d\uff0c\u9009\u62e9\u201c\u4e8c\u8fdb\u5236\u5b57\u4f53\u6587\u4ef6\u201d\u3002"),(0,r.kt)("p",null,"\u5f53\u60a8\u5728\u7b2c\u4e8c\u4e2aTouchGFX\u9879\u76ee\u4e2d\u751f\u6210\u4ee3\u7801\u65f6\uff0c\u5c06\u751f\u6210\u4e8c\u8fdb\u5236\u5b57\u4f53\u3002 \u7136\u540e\uff0c\u53ef\u4ee5\u5c06\u4e8c\u8fdb\u5236\u5b57\u4f53\u590d\u5236\u5230\u7b2c\u4e00\u4e2a\u9879\u76ee\uff08\u5728\u60a8\u65b9\u4fbf\u7684\u6587\u4ef6\u5939\u4e2d\uff09\uff0c\u5e76\u5728\u5982\u4e0a\u6240\u793a\u7684\u4ee3\u7801\u4e2d\u4f7f\u7528\u3002"))}g.isMDXComponent=!0}}]);
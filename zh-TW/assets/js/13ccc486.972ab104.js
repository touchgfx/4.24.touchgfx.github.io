"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[19456],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(7029);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},37349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>s});n(59496);var r=n(49613),o=n(89639);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"running-without-rtos",title:"\u5728STM32G071 Nucleo\u4e0a\u904b\u884c\u7684\u7bc4\u4f8b\u61c9\u7528"},c=void 0,p={unversionedId:"development/scenarios/running-without-rtos",id:"development/scenarios/running-without-rtos",title:"\u5728STM32G071 Nucleo\u4e0a\u904b\u884c\u7684\u7bc4\u4f8b\u61c9\u7528",description:"\u5728\u672c\u7bc0\uff0c\u6211\u5011\u5c07\u8a0e\u8ad6\u5982\u4f55\u57fa\u65bcTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\uff08TouchGFX Designer\u4e2d\u63d0\u4f9b\u7684ST\u958b\u767c\u5957\u4ef6\u4e4b\u4e00\uff09\uff0c\u5728\u6c92\u6709\u4f5c\u696d\u7cfb\u7d71\u7684\u60c5\u6cc1\u4e0b\u904b\u884cTouchGFX\u5c08\u6848\u3002 \u672c\u6587\u4e0d\u91dd\u5c0d\u5f9eSTM32CubeMX\u6216STM32CubeIDE\u958b\u59cb\u7684\u5ba2\u88fd\u5c08\u6848\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/running-without-rtos",permalink:"/4.24/zh-TW/docs/development/scenarios/running-without-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"running-without-rtos",title:"\u5728STM32G071 Nucleo\u4e0a\u904b\u884c\u7684\u7bc4\u4f8b\u61c9\u7528"},sidebar:"docs",previous:{title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u70ba\u89f8\u767c\u5668",permalink:"/4.24/zh-TW/docs/development/scenarios/example-gpio"},next:{title:"\u5728STM32CubeMX\u5c08\u6848\u4e2d\u6dfb\u52a0\u6a94",permalink:"/4.24/zh-TW/docs/development/scenarios/adding-files-to-stm32cubemx-projet"}},u={},s=[{value:"\u5f9eTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u958b\u555f\u4e00\u500b\u5c08\u6848",id:"starting-a-project-from-a-touchgfx-board-setup",level:2},{value:"\u6253\u958b\u80cc\u5149",id:"turning-on-the-backlight",level:3},{value:"\u6e05\u9664\u7a0b\u5f0f\u78bc",id:"cleaning-the-code",level:3}],m={toc:s},d="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u672c\u7bc0\uff0c\u6211\u5011\u5c07\u8a0e\u8ad6\u5982\u4f55\u57fa\u65bcTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\uff08TouchGFX Designer\u4e2d\u63d0\u4f9b\u7684ST\u958b\u767c\u5957\u4ef6\u4e4b\u4e00\uff09\uff0c\u5728\u6c92\u6709\u4f5c\u696d\u7cfb\u7d71\u7684\u60c5\u6cc1\u4e0b\u904b\u884cTouchGFX\u5c08\u6848\u3002 \u672c\u6587\u4e0d\u91dd\u5c0d\u5f9eSTM32CubeMX\u6216STM32CubeIDE\u958b\u59cb\u7684\u5ba2\u88fd\u5c08\u6848\u3002"),(0,r.kt)("h2",a({},{id:"starting-a-project-from-a-touchgfx-board-setup"}),"\u5f9eTouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u958b\u555f\u4e00\u500b\u5c08\u6848"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u63d0\u4f9b\u7684\u5927\u591a\u6578TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u4e2d\uff0cOS FreeRTOS\u9ed8\u8a8d\u662f\u555f\u7528\u7684\u3002 \u5982\u9700\u5728\u6c92\u6709\u4f5c\u696d\u7cfb\u7d71\u7684\u60c5\u6cc1\u4e0b\u904b\u884c\uff0c\u5fc5\u9808\u9075\u5faa\u5e7e\u500b\u6b65\u9a5f\u3002 \u9019\u88e1\u6211\u5011\u5c07\u4ee5STM32H7B3-DK\u677f\u7684TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u70ba\u4f8b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f9eTouchGFX Designer\u5275\u5efa\u4e00\u500b\u5c08\u6848\uff08\u63a1\u7528STM32H7B3-DK\u677f\u7684TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\uff09\u4e26\u751f\u6210\u7a0b\u5f0f\u78bc\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528STM32CubeMX\u6253\u958b\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".ioc"),"\u6587\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728STM32CubeMX\u4ecb\u9762\uff0c\u5c0e\u822a\u5230\u201c",(0,r.kt)("em",{parentName:"p"},"Middleware\uff08\u4e2d\u4ecb\u8edf\u9ad4\uff09"),"\u201d ->",(0,r.kt)("em",{parentName:"p"},"FreeRTOS"),"\u8a2d\u7f6e\uff0c\u4e26\u7981\u7528FreeRTOS"))),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.webp",mdxType:"Figure"},"STM32CubeMX\u4e2dSTM32H7B3-DK\u7684FreeRTOS\u8a2d\u7f6e"),(0,r.kt)("h3",a({},{id:"turning-on-the-backlight"}),"\u6253\u958b\u80cc\u5149"),(0,r.kt)("p",null,"\u5728\u5927\u591a\u6578TouchGFX\u958b\u767c\u677f\u8a2d\u7f6e\u4e2d\uff0c\u986f\u793a\u5668\u7684\u80cc\u5149\u6700\u521d\u662f\u95dc\u9589\u7684\u3002 \u9019\u6a23\u505a\u662f\u70ba\u4e86\u9632\u6b62\u5728\u7b2c\u4e00\u500btick\u671f\u9593\u555f\u52d5\u958b\u767c\u677f\u6642\u51fa\u73fe\u6545\u969c\u986f\u793a\u3002 \u7576\u7b2c\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u5340\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL.cpp"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()"),"\u51fd\u6578\uff08\u4f4d\u65bc",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target"),"\u8cc7\u6599\u593e\u4e0b\uff09\u4e2d\u5c31\u7dd2\u6642\uff0c\u80cc\u5149\u6253\u958b\u3002 \u7576\u5728\u6c92\u6709\u4f5c\u696d\u7cfb\u7d71\u7684\u60c5\u6cc1\u4e0b\u904b\u884c\u6642\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()"),"\u51fd\u6578\u6c38\u9060\u4e0d\u6703\u88ab\u547c\u53eb\uff0c\u610f\u5473\u8457\u5728\u5f71\u50cf\u7de9\u885d\u5340\u4ecd\u7136\u6b63\u78ba\u66f4\u65b0\u6642\uff0c\u986f\u793a\u5668\u6c38\u9060\u4e0d\u6703\u6253\u958b\u3002 \u89e3\u6c7a\u65b9\u6848\u662f\u5728\u555f\u52d5\u6642\u6253\u958b\u80cc\u5149\uff0c\u65b9\u6cd5\u662f\u5c07LTDC_HSYNC\u548cVSYNC\u5f15\u8173\u8a2d\u7f6e\u70ba",(0,r.kt)("em",{parentName:"p"},"HIGH"),"\u3002"),(0,r.kt)("ol",a({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"\u5c0e\u822a\u5230",(0,r.kt)("em",{parentName:"li"},"System Core"),"\u4e2d\u7684GPIO\u8a2d\u7f6e ->",(0,r.kt)("em",{parentName:"li"},"GPIO"),"\u90e8\u5206\u3002 \u67e5\u627e\u9023\u63a5\u5230\u986f\u793a\u5668\u80cc\u5149\u7684\u5f15\u8173\uff0c\u4e26\u5c07GPIO\u8f38\u51fa\u96fb\u5e73\u8a2d\u7f6e\u70ba",(0,r.kt)("em",{parentName:"li"},"HIGH"),"\u3002 \u8207STM32H7B3-DK\u958b\u767c\u677f\u5c0d\u61c9\u7684\u5f15\u8173\u662f",(0,r.kt)("em",{parentName:"li"},"PA1"),"\uff08\u7528\u6236\u6a19\u7c64\uff1aLCD_BL_CTRL\uff09\u548c",(0,r.kt)("em",{parentName:"li"},"PA2"),"\uff08\u7528\u6236\u6a19\u7c64\uff1aLCD_ON/OFF\uff09\u3002")),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/set-pins-high-417.webp",mdxType:"Figure"},"\u70baSTM32H7B3-DK\u800c\u6253\u958b\u80cc\u5149"),(0,r.kt)("ol",a({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"\u5f9eSTM32CubeMX\u751f\u6210\u7a0b\u5f0f\u78bc\uff0c\u7136\u5f8c\u5f9eTouchGFX Designer\u751f\u6210\u7a0b\u5f0f\u78bc\u3002")),(0,r.kt)("h3",a({},{id:"cleaning-the-code"}),"\u6e05\u9664\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"STM32CubeMX\u548cTouchGFX Generator\u4e0d\u80fd\u6e05\u9664\u4f4d\u65bc\u201cUSER CODE\u201d\u4e4b\u4e0b\u5c0dRTOS\u51fd\u6578\u7684\u6f5b\u5728\u547c\u53eb\u3002 \u56e0\u6b64\u6709\u5fc5\u8981\u624b\u52d5\u6e05\u9664\u7a0b\u5f0f\u78bc\u3002 \u5c0d\u65bcSTM32H7B3-DK TBS\uff0c\u53ea\u9700\u8981\u4fee\u6539\u89f8\u63a7\u63a7\u5236\u5668\u3002"),(0,r.kt)("ol",a({},{start:6}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6253\u958b\u5728\u5c08\u6848\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target"),"\u8cc7\u6599\u593e\u4e0b\u627e\u5230\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"STM32TouchController.cpp"),"\u6587\u4ef6\u3002 \u624b\u52d5\u522a\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"#include <cmsis_os.h>"),"\u548cif-\u8a9e\u53e5\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"configASSERT(0)"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u522a\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"Core/src"),"\u8cc7\u6599\u593e\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Freertos.c"),"\u6587\u4ef6\u3002"))),(0,r.kt)("p",null,"\u8981\u5f9eTouchGFX\u8a2d\u8a08\u5668\u5c07\u5c08\u6848\u71d2\u9304\u5230\u60a8\u7684\u958b\u767c\u677f\u4e0a\uff0c\u9700\u8981\u901a\u904e\u522a\u9664\u6216\u8a3b\u89e3\u8207\u4f5c\u696d\u7cfb\u7d71\u76f8\u95dc\u7684\u8cc7\u6e90\u548c\u8def\u5f91\u4f86\u6e05\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile"),"\uff08\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"gcc"),"\u8cc7\u6599\u593e\u4e0b\uff09\u3002 \u9084\u9700\u8981\u70ba\u4f7f\u7528\u7684\u5de5\u5177\u93c8/IDE\u6e05\u9664\u4e0d\u540c\u5c08\u6848\u4e2d\u6240\u6709\u8207\u4f5c\u696d\u7cfb\u7d71\u76f8\u95dc\u7684\u8cc7\u6e90\u548c\u8def\u5f91\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\u53ef\u4ee5\u5728\u6c92\u6709\u4f5c\u696d\u7cfb\u7d71\u7684\u60c5\u6cc1\u4e0b\u904b\u884cTouchGFX\u958b\u767c\u677f\u7684\u5c08\u6848\u3002"))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[59424],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93822:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(96151);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const l=i},28128:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=a},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},21100:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(96151);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const l=i},16154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>h});n(59496);var r=n(49613),a=n(89639),o=n(28128),i=n(93822),l=n(21100);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"scenarios-configure-rtos",title:"Real Time Operating System"},s=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",id:"development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",title:"Real Time Operating System",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uae30\ub2a5\ud558\ub294 TouchGFX OSAL\uc744 \uac16\ub3c4\ub85d TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\uc640 \ud568\uaed8 \uc791\ub3d9\ud558\ub3c4\ub85d STM32CubeMX\uc5d0\uc11c \ub2e4\uc591\ud55c \uc2e4\uc2dc\uac04 \uc6b4\uc601 \uccb4\uc81c\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",permalink:"/4.24/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-configure-rtos",title:"Real Time Operating System"},sidebar:"docs",previous:{title:"Framebuffer Strategies",permalink:"/4.24/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"},next:{title:"\ube44\ub514\uc624 \ub514\ucf54\ub529",permalink:"/4.24/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"}},d={},h=[{value:"No OS",id:"no-os",level:2},{value:"FreeRTOS(CMSIS V1 &amp; CMSIS V2)",id:"freertoscmsis-v1--cmsis-v2",level:2},{value:"Custom task",id:"custom-task",level:3},{value:"TouchGFX \uc791\uc5c5",id:"touchgfx-\uc791\uc5c5",level:3},{value:"ThreadX",id:"threadx",level:2},{value:"Native Middleware \uad6c\uc131",id:"native-middleware-\uad6c\uc131",level:3},{value:"X-CUBE-AZRTOS \uad6c\uc131",id:"x-cube-azrtos-\uad6c\uc131",level:3}],T={toc:h},g="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,c({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uae30\ub2a5\ud558\ub294 TouchGFX OSAL\uc744 \uac16\ub3c4\ub85d ",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#real-time-operating-system"}),"TouchGFX Generator"),"\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\uc640 \ud568\uaed8 \uc791\ub3d9\ud558\ub3c4\ub85d STM32CubeMX\uc5d0\uc11c \ub2e4\uc591\ud55c \uc2e4\uc2dc\uac04 \uc6b4\uc601 \uccb4\uc81c\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c TouchGFX \uba54\uc778 \ub8e8\ud504\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc73c\ub85c \uc2dc\uc791\ub429\ub2c8\ub2e4. \uc774 \ud568\uc218\uc5d0 \ub300\ud55c \ud638\ucd9c\uc740 \uac1c\ubc1c\uc790\uac00 TouchGFX\ub97c \uc2e4\ud589\ud558\ub824\uace0 \ud558\ub294 \uc791\uc5c5 \ud578\ub4e4\ub7ec \ub0b4\ubd80\uc5d0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",c({},{id:"no-os"}),"No OS"),(0,r.kt)("p",null,"TouchGFX\uac00 \uc6b4\uc601 \uccb4\uc81c \uc5c6\uc774 \uc2e4\ud589\ub420 \ub54c TouchGFX \uba54\uc778 \ub8e8\ud504\ub294 MCU\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\ub97c \ud638\ucd9c\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC")," \uc2e0\ud638\ub97c \ud480\ub9c1\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),"\uc758 \ubb34\ud55c while \ub8e8\ud504\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{6}","{6}":!0}),"/* Infinite loop */\n/* USER CODE BEGIN WHILE */\nwhile (1)\n{\n  /* USER CODE END WHILE */\n  MX_TouchGFX_Process();\n  /* USER CODE BEGIN 3 */\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),"\ub85c \ucc29\uc2e0 \uc804\ud658\uc744 \ud558\uace0, \uc5ec\uae30\uc5d0\uc11c TouchGFX\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"VSYNC"),"\uac00 \uac10\uc9c0\ub418\uba74 \ub2e4\uc74c \ud504\ub808\uc784\uc744 \ucc98\ub9ac\ud558\uae30 \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"void touchgfx_taskEntry()\n{\n    /*\n     * Main event loop will check for VSYNC signal, and then process next frame.\n     *\n     * Note This function returns immediately if there is no VSYNC signal.\n     */\n     if (OSWrappers::isVSyncAvailable())\n     {\n         hal.backPorchExited();\n     }\n}\n")),(0,r.kt)("h2",c({},{id:"freertoscmsis-v1--cmsis-v2"}),"FreeRTOS(CMSIS V1 & CMSIS V2)"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub294 FreeRTOS(CMSIS V2)\uac00 TouchGFX\uc5d0\uc11c \uc791\ub3d9\ud558\ub3c4\ub85d \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. CMSIS V1\uc744 \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0 \ub3d9\uc77c\ud55c \uad6c\uc131\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"FreeRTOS \ud65c\uc131\ud654"),'\ub97c \uc218\ud589\ud558\uba74 STM32CubeMX\uc758 \ud504\ub85c\uc81d\ud2b8 \uba54\ub274 \uc67c\ucabd\uc5d0 \uc788\ub294 "Categories" \ubaa9\ub85d\uc758 ',(0,r.kt)("em",{parentName:"p"},"Middleware")," \uc544\ub798\uc5d0 \uc788\ub294 ",(0,r.kt)("em",{parentName:"p"},"THREADX")," \uba54\ub274\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \ubc00\ub9ac \ucd08\ub9c8\ub2e4 \ud55c \ubc88\uc529 \ud2f1\uc774 \ubc1c\uc0dd\ud558\ub3c4\ub85d ",(0,r.kt)("inlineCode",{parentName:"p"},"TICK_RATE_HZ"),"\ub97c ",(0,r.kt)("strong",{parentName:"p"},"1000"),"\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Management scheme")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"TOTAL_HEAP_SIZE"),"\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 touchgfx \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ucda9\ubd84\ud788 \ud070 \ud799\uc744 \uac16\ub3c4\ub85d ",(0,r.kt)("strong",{parentName:"p"},"heap_4"),"\uc640 \ud799 \ud06c\uae30 ",(0,r.kt)("strong",{parentName:"p"},"70000\ubc14\uc774\ud2b8"),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-configure.webp",width:"700",mdxType:"Figure"},"FreeRTOS\uc6a9 TouchGFX \uc791\uc5c5 \uc0dd\uc131"),(0,r.kt)(l.Z,{mdxType:"Tip"},"\ud2b9\uc815 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \uc2dc\ud589 \ucc29\uc624\ub97c \ud1b5\ud574 \ubcf4\ub2e4 \ucd5c\uc801\uc758 ",(0,r.kt)("i",null,"TOTAL_HEAP_SIZE"),"\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c \ud568\uc218\ub97c \ud638\ucd9c\ud560 \ub54c TouchGFX \uba54\uc778 \ub8e8\ud504\uc5d0 \ub4e4\uc5b4\uac11\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"void MX_TouchGFX_Process(void);\n")),(0,r.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 TouchGFX \uba54\uc778 \ub8e8\ud504\uac00 \uc2e4\ud589\ub418\uc5b4\uc57c \ud558\ub294 STM32CubeMX\uc5d0\uc11c \uc790\uccb4 \ucee4\uc2a4\ud140 \ud14c\uc2a4\ud06c\ub97c \uad6c\uc131\ud558\uac70\ub098, TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()")," \ud578\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",c({},{id:"custom-task"}),"Custom task"),(0,r.kt)("p",null,"\ud568\uc218 ",(0,r.kt)("inlineCode",{parentName:"p"},"void\xa0touchgfx_taskEntry(void)"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void MX_TouchGFX_Process(void)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,r.kt)("p",null,"\uac1c\ubc1c\uc790\ub294 TouchGFX \uba54\uc778 \ub8e8\ud504\ub97c \uc2e4\ud589\ud558\ub824\ub294 \uc791\uc5c5\uc5d0 \ub300\ud55c \ud14c\uc2a4\ud06c \ud578\ub4e4\ub7ec\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\ub97c \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uac1c\ubc1c\uc790\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"MyTask"),"\ub77c\ub294 STM32CubeMX\uc5d0\uc11c FeeRTOS \ud14c\uc2a4\ud06c\ub97c \uad6c\uc131\ud55c \uacbd\uc6b0, \ub2e4\uc74c \uc608\uc81c\ub294 TouchGFX\ub97c \uc2dc\uc791\ud558\uae30 \uc704\ud574 \ucee4\uc2a4\ud140 \ud14c\uc2a4\ud06c \ud578\ub4e4\ub7ec\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Process()"),"\ub97c \ud638\ucd9c\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void StartMyTask(void *argument)\n{\n  /* USER CODE BEGIN 5 */\n  MX_TouchGFX_Process();\n  /* USER CODE END 5 */ \n}\n")),(0,r.kt)("h3",c({},{id:"touchgfx-\uc791\uc5c5"}),"TouchGFX \uc791\uc5c5"),(0,r.kt)("p",null,"TouchGFX \uba54\uc778 \ub8e8\ud504\ub294 ",(0,r.kt)("em",{parentName:"p"},"TouchGFX Task"),"\uc5d0\uc11c \uc2e4\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX Generator\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"app_touchgfx.c")," \ub0b4\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX_Task()"),"\ub77c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),"\ub97c \ud638\ucd9c\ud558\ub294 \uc791\uc5c5 \ud578\ub4e4\ub7ec\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void TouchGFX_Task(void *argument)\n{\n  // Calling forward to touchgfx_taskEntry in C++ domain\n  touchgfx_taskEntry();\n}\n")),(0,r.kt)("p",null,"FreeRTOS \uc2a4\ucf00\uc904\ub7ec\uc5d0\uc11c \uc774 \uc791\uc5c5\uc744 \uc608\uc57d\ud558\ub824\uba74 ",(0,r.kt)("em",{parentName:"p"},"FREERTOS")," \uba54\ub274\uc758 STM32CubeMX\uc5d0\uc11c \uc791\uc5c5\uc744 \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"Tasks and Queues")," \ud0ed\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},'"TouchGFX_Task"'),"\uac00 ",(0,r.kt)("em",{parentName:"p"},"Entry Function"),"\uc774\uace0, ",(0,r.kt)("em",{parentName:"p"},"Code Generation Option"),"\uc774  ",(0,r.kt)("strong",{parentName:"p"},"As external"),"\uc778 \ud14c\uc2a4\ud06c\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/freertos-touchgfx-task.webp",mdxType:"Figure"},"FreeRTOS\uc6a9 TouchGFX \uc791\uc5c5 \uc0dd\uc131"),(0,r.kt)("p",null,"STM32CubeMX\ub294 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),"\uc5d0 TouchGFX Task\ub97c \uc0dd\uc131\ud558\uc5ec TouchGFX \uba54\uc778 \ub8e8\ud504\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HAL_Delay()"),"\ub97c \ud3ec\ud568\ud558\ub294 \uc77c\ubd80 \uc2dc\uc2a4\ud15c \ud568\uc218\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 SYS Timebase Source\uac00 \ud56d\uc0c1 tick\uc744 \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\ub824\uba74 \ud560\ub2f9\ub41c \ud0c0\uc774\uba38\uc758 NVIC \uc6b0\uc120\uc21c\uc704\uac00 \uc548\uc804\ud55c FreeRTOS API \ud568\uc218\ub97c \uc778\ud130\ub7fd\ud2b8\ud558\ub294 \ud638\ucd9c\uc744 \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ucd5c\uace0 \uc778\ud130\ub7fd\ud2b8 \uc6b0\uc120\uc21c\uc704\ubcf4\ub2e4 \ub192\uc544\uc57c \ud569\ub2c8\ub2e4(\uc608: \ub354 \ub0ae\uc740 \uc22b\uc790 ). \uc774\ub294 FreeRTOS\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"configMAX_SYSCALL_INTERRUPT_PRIORITY"),"\ub85c \uad6c\uc131\ud560 \uc218 \uc788\uc73c\uba70 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 SYS Timebase Source\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ud0c0\uc774\uba38\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TIM6"),"\uc785\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-nvic-conf.png",mdxType:"Figure"},"sysTick \ud0c0\uc774\uba38\uc758 NVIC \uc6b0\uc120\uc21c\uc704 \uc124\uc815"),(0,r.kt)("h2",c({},{id:"threadx"}),"ThreadX"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 ThreadX\ub97c ",(0,r.kt)("em",{parentName:"p"},"X-CUBE")," Software Pack\uc774\ub098 Native ThreadX Middleware\ub97c \uc0ac\uc6a9\ud574\uc11c TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("h3",c({},{id:"native-middleware-\uad6c\uc131"}),"Native Middleware \uad6c\uc131"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub294 ThreadX\ub97c \ub124\uc774\ud2f0\ube0c \ubbf8\ub4e4\uc6e8\uc5b4\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d STM32U5 MCU\uc5d0 \ub300\ud574 ThreadX\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),"Thread \ub124\uc774\ud2f0\ube0c \ubbf8\ub4e4\uc6e8\uc5b4 \ud65c\uc131\ud654"),'\ub97c \uc218\ud589\ud558\uba74 STM32CubeMX\uc758 \ud504\ub85c\uc81d\ud2b8 \uba54\ub274 \uc67c\ucabd\uc5d0 \uc788\ub294 "Categories" \ubaa9\ub85d\uc758 ',(0,r.kt)("em",{parentName:"p"},"Middleware")," \uc544\ub798\uc5d0 \uc788\ub294 ",(0,r.kt)("em",{parentName:"p"},"THREADX")," \uba54\ub274\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"Mode")," \ubaa9\ub85d\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Core"),"\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND")," \ub97c ",(0,r.kt)("strong",{parentName:"p"},"1000"),"\uc73c\ub85c \uc124\uc815\ud574\uc11c \ubc00\ub9ac \ucd08\ub9c8\ub2e4 \ud55c \ubc88\uc529 \ud2f1\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Pool Allocation"),"\uc744 ",(0,r.kt)("strong",{parentName:"p"},"Use Static Allocation"),"\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/enable-and-configure-native-threadx-mw.webp",width:"700",mdxType:"Figure"},"Native ThreadX Middleware \ud65c\uc131\ud654 \ubc0f \uad6c\uc131"),(0,r.kt)(i.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"STM32CubeMX\ub294",(0,r.kt)("b",null,"Native ThreadX Middleware"),"\ub97c \uc0ac\uc6a9\ud560 \ub54c ",(0,r.kt)("b",null,"Memory Pool Allocation"),"\uc774 ",(0,r.kt)("b",null,"Use Static Allocation"),"\uc73c\ub85c \uc124\uc815\ub418\uc5c8\uc744 \ub54c\ub9cc \uc804\uccb4 OSAL\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"Memory Pool Allocation"),"\uc774 ",(0,r.kt)("b",null,"Use Dynamic Allocation"),"\uc73c\ub85c \uc124\uc815\ub41c \uacbd\uc6b0\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\uc0ac\uc6a9\uc790\ub294 \uc0dd\uc131\ub41c ",(0,r.kt)("b",null,(0,r.kt)("i",null,"app_azure_rtos.c"))," \ud30c\uc77c\uc758 ",(0,r.kt)("i",null,"USER CODE BEGIN DYNAMIC_MEM_ALLOC")," \uc139\uc158\uc5d0 \ub204\ub77d\ub41c \ucf54\ub4dc\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",null,"\ub610\ud55c, \uc0dd\uc131\ub41c ",(0,r.kt)("b",null,(0,r.kt)("i",null,"app_azure_rtos.c"))," \ud30c\uc77c\uc758 \ucf54\ub4dc \uc8fc\uc11d\uc5d0 \uc124\uba85\ub418\uc5b4 \uc788\ub294 \uad8c\uc7a5 \uc0ac\ud56d\uc5d0 \ub530\ub77c \ub9c1\ucee4 \ud30c\uc77c\uc744 \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",null,"STM32CubeMX \ubc84\uc804\uc5d0 \ub530\ub77c ",(0,r.kt)("b",null,"Dynamic Allocation"),"\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"STM32CubeMX\ub294 ThreadX\ub97c \uc0ac\uc6a9\ud560 \ub54c \ud14c\uc2a4\ud06c\ub97c \ud560\ub2f9 \ubc0f \uc2a4\ucf00\uc974\ub9c1\ud558\ub294 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \ucc45\uc784\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\uc720\ub85c TouchGFX \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ucd08\uae30\ud654\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_PreOSInit()")," \ud568\uc218\uc5d0 \ub300\ud55c \ud638\ucd9c\uc774 STM32CubeMX\uc5d0\uc11c \uc0dd\uc131\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c, ThreadX \ucee4\ub110\uc744 \ucd08\uae30\ud654\ud558\uace0 \uc2dc\uc791\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_ThreadX_Init()")," \ud568\uc218\uc5d0 \ub300\ud55c \ub610 \ub2e4\ub978 \ud638\ucd9c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{5,7}","{5,7}":!0}),"int main(void)\n{\n...\n  /* Call PreOsInit function */\n  MX_TouchGFX_PreOSInit();\n...\n  MX_ThreadX_Init();\n...\n}\n")),(0,r.kt)("p",null,"TouchGFX Generator\ub294 TouchGFX \uc2a4\ub808\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()")," \ud568\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"app_touchgfx.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{13-20}","{13-20}":!0}),'UINT MX_TouchGFX_Init(VOID *memory_ptr)\n{\n  UINT ret = TX_SUCCESS;\n  CHAR *pointer = 0;\n\n  /* Allocate the stack for TouchGFX Thread.  */\n  if (tx_byte_allocate((TX_BYTE_POOL*)memory_ptr, (VOID **) &pointer,\n                       TOUCHGFX_STACK_SIZE, TX_NO_WAIT) != TX_SUCCESS)\n  {\n    ret = TX_POOL_ERROR;\n  }\n\n  /* Create TouchGFX Thread */\n  else if (tx_thread_create(&TouchGFXThread, (CHAR *)"TouchGFX", TouchGFX_Task, 0,\n                       pointer, TOUCHGFX_STACK_SIZE,\n                       5, 5,\n                       TX_NO_TIME_SLICE, TX_AUTO_START) != TX_SUCCESS)\n  {\n    ret = TX_THREAD_ERROR;\n  }\n\n  return ret;\n}\n')),(0,r.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c, TouchGFX Generator\ub294  TouchGFX \uc791\uc5c5 \ubc14\uc774\ud2b8 \ud480\uc744 \uc0dd\uc131\ud558\ub294 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uace0  ",(0,r.kt)("inlineCode",{parentName:"p"},"MX_TouchGFX_Init()"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uc774 \ucf54\ub4dc\ub294 TouchGFX Task \ubc14\uc774\ud2b8 \ud480\uc774 \uc815\uc758\ub41c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"app_azure_rtos.c"))," \ud30c\uc77c\uc5d0\uc11c \ud568\uc218 ",(0,r.kt)("inlineCode",{parentName:"p"},"tx_application_define()"),"\uc758 \ud574\ub2f9 \uc704\uce58\uc5d0 \uc0bd\uc785\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tx_application_define()")," \ud568\uc218\ub294 \ucd08\uae30\ud654\ub97c \ud560 \ub54c ThreadX \ucee4\ub110\uc5d0 \uc758\ud574 \ud638\ucd9c\ub429\ub2c8\ub2e4. \ub098\uc911\uc5d0 ThreadX \ucee4\ub110\uc774 \uc2dc\uc791\ub420 \ub54c TouchGFX \uc2a4\ub808\ub4dc\uac00 \uc2dc\uc791\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"app_azure_rtos.c"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{3-4,9,22}","{3-4,9,22}":!0}),'#include "app_touchgfx.h"\n...\n__ALIGN_BEGIN static UCHAR touchgfx_byte_pool_buffer[TOUCHGFX_APP_MEM_POOL_SIZE] __ALIGN_END;\nstatic TX_BYTE_POOL touchgfx_app_byte_pool;\n...\nVOID tx_application_define(VOID *first_unused_memory)\n{\n  ...\n  if (tx_byte_pool_create(&touchgfx_app_byte_pool, "TouchGFX App memory pool", touchgfx_byte_pool_buffer, TOUCHGFX_APP_MEM_POOL_SIZE) != TX_SUCCESS)\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Error */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Error */\n  }\n  else\n  {\n    /* USER CODE BEGIN TouchGFX_Byte_Pool_Success */\n\n    /* USER CODE END TouchGFX_Byte_Pool_Success */\n\n    memory_ptr = (VOID *)&touchgfx_app_byte_pool;\n    if (MX_TouchGFX_Init(memory_ptr) != TX_SUCCESS)\n    {\n      /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Error */\n\n      /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Error */\n    }\n    /* USER CODE BEGIN  MX_X-CUBE-TOUCHGFX_Init_Success */\n\n    /* USER CODE END  MX_X-CUBE-TOUCHGFX_Init_Success */\n  }\n\n  ...\n}\n')),(0,r.kt)("h3",c({},{id:"x-cube-azrtos-\uad6c\uc131"}),"X-CUBE-AZRTOS \uad6c\uc131"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub294 ThreadX\ub97c ",(0,r.kt)("em",{parentName:"p"},"X-CUBE")," Software Pack\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d STM32H7 MCU\uc5d0 \ub300\ud574 ThreadX\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c",(0,r.kt)("a",c({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/driver#threadx"}),(0,r.kt)("em",{parentName:"a"},"X-CUBE")," Software Pack\uc73c\ub85c\uc11c Thread \ud65c\uc131\ud654"),'\ub97c \uc218\ud589\ud558\uba74 STM32CubeMX\uc758 \ud504\ub85c\uc81d\ud2b8 \uba54\ub274 \uc67c\ucabd\uc5d0 \uc788\ub294 "Categories" \ubaa9\ub85d\uc758 ',(0,r.kt)("em",{parentName:"p"},"Software Packs")," \uc544\ub798\uc5d0 \ubcf4\uc774\ub294 ",(0,r.kt)("em",{parentName:"p"},"X-CUBE-AZRTOS-XX")," \uba54\ub274\ub85c \uc774\ub3d9\ud574\uc11c ",(0,r.kt)("strong",{parentName:"p"},"Use Static MemPool Allocation"),"\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Allocation"),"\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config1.webp",width:"800",mdxType:"Figure"},"ThreadX \uad6c\uc131 - X-CUBE-AZRTOS \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ThreadX")," \uc124\uc815 \ud0ed\uc744 \uc120\ud0dd\ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"TX_TIMER_TICKS_PER_SECOND"),"\ub97c ",(0,r.kt)("strong",{parentName:"p"},"1000"),"\uc73c\ub85c \uc124\uc815\ud574\uc11c \ubc00\ub9ac \ucd08\ub9c8\ub2e4 \ud55c \ubc88\uc529 \ud2f1\uc744 \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/x-cube-azurertos-config2.webp",width:"400",mdxType:"Figure"},"ThreadX \uad6c\uc131 - X-CUBE-AZRTOS \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud329"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"X-CUBE-AZRTOS-XX")," \uba54\ub274\uc5d0\uc11c \uad6c\uc131\uc774 \uc644\ub8cc\ub418\uba74, TouchGFX Generator\ub85c \uc774\ub3d9\ud574\uc11c ",(0,r.kt)("em",{parentName:"p"},"\uc2e4\uc2dc\uac04 \uc6b4\uc601 \uccb4\uc81c"),"\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadX"),"\ub97c \uc120\ud0dd\ud558\uace0 TouchGFX \uc791\uc5c5\uc5d0 \ub300\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Pool Size")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Stack Size"),"\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/threadx-config-in-generator.webp",width:"400",mdxType:"Figure"},"FreeRTOS\uc6a9 TouchGFX \uc791\uc5c5 \uc0dd\uc131"),(0,r.kt)(i.Z,{mdxType:"Caution"},"TouchGFX 4.21.0\uc5d0\uc11c\ub294 \ucd5c\uc2e0 \ubc84\uc804\uc758 ",(0,r.kt)("i",null,"X-CUBE-AZRTOS-XX"),"\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\uac00 \uc548\ud0c0\uae5d\uac8c\ub3c4 ThreadX \ub4dc\ub77c\uc774\ubc84\uc5d0\uc11c TouchGFX Task\ub97c \uc0dd\uc131 \ubc0f \ucd08\uae30\ud654\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c, \uc791\ub3d9 \uc911\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac00\uc9c0\ub824\uba74 \uac1c\ubc1c\uc790\uac00 ",(0,r.kt)("i",null,"Native Middleware \uad6c\uc131")," \uc139\uc158\uc5d0 \ub098\uc640 \uc788\ub294 \ucf54\ub4dc \uc2a4\ub2c8\ud3ab\uc5d0\uc11c ",(0,r.kt)("b",null,"\uc218\ub3d9\uc73c\ub85c \ucf54\ub4dc \ucd94\uac00"),"\ub97c \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);
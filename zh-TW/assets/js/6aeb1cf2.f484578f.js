"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[73390],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,h=d["".concat(m,".").concat(u)]||d[u]||s[u]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89639:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(59496),r=t(7029);const i=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return n?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:t,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:t,height:i,src:l})),a.createElement("p",null,e.children))}},5337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});t(59496);var a=t(49613),r=t(89639);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={id:"scenarios-dsi-command-mode",title:"MIPI-DSI\u6307\u4ee4\u6a21\u5f0f"},m=void 0,p={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",title:"MIPI-DSI\u6307\u4ee4\u6a21\u5f0f",description:"\u672c\u7bc0\u4ecb\u7d39\u5982\u4f55\u70ba\u6307\u4ee4\u6a21\u5f0f\u8a2d\u5b9aMIPI DSI\u4ecb\u9762\uff0c\u4ee5\u53ca\u5982\u4f55\u5728TouchGFX Generator\u4e2d\u4f7f\u7528\u6b64\u8a2d\u5b9a\u3002 \u672c\u6587\u4f7f\u7528\u7684\u7bc4\u4f8b\u5c07\u7528\u65bc16\u4f4d\u5143RGB565\u5f71\u50cf\u7de9\u885d\u5340\u683c\u5f0f\uff0c\u901a\u5e38\u5728STM32CubeMX\u53ca\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u4e2d\u9032\u884c\u4e0b\u5217\u8a2d\u5b9a\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-dsi-command-mode",title:"MIPI-DSI\u6307\u4ee4\u6a21\u5f0f"},sidebar:"docs",previous:{title:"MIPI-DS\u5f71\u7247\u6a21\u5f0f",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"},next:{title:"\u6548\u80fd\u6e2c\u91cf",permalink:"/4.24/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance"}},c={},d=[{value:"STM32CubeMX - \u786c\u9ad4\u8a2d\u5b9a",id:"stm32cubemx-hardware-configuration",level:2},{value:"LTDC",id:"ltdc",level:3},{value:"DSIHOST\u8a2d\u5b9a",id:"dsihost\u8a2d\u5b9a",level:3},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",level:2},{value:"DSIHOST / LTDC\u521d\u59cb\u5316\u9806\u5e8f",id:"dsihost-ltdc-initialization-sequence",level:2},{value:"\u5df2\u66f4\u65b0DSI\u6307\u4ee4\u6a21\u5f0f\u7684TouchGFXHAL\u985e\u5225",id:"touchgfxhal-class-for-dsi-command-mode",level:2}],s={toc:d},u="wrapper";function h(e){var{components:n}=e,t=l(e,["components"]);return(0,a.kt)(u,i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7bc0\u4ecb\u7d39\u5982\u4f55\u70ba\u6307\u4ee4\u6a21\u5f0f\u8a2d\u5b9aMIPI DSI\u4ecb\u9762\uff0c\u4ee5\u53ca\u5982\u4f55\u5728TouchGFX Generator\u4e2d\u4f7f\u7528\u6b64\u8a2d\u5b9a\u3002 \u672c\u6587\u4f7f\u7528\u7684\u7bc4\u4f8b\u5c07\u7528\u65bc16\u4f4d\u5143RGB565\u5f71\u50cf\u7de9\u885d\u5340\u683c\u5f0f\uff0c\u901a\u5e38\u5728STM32CubeMX\u53ca\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u4e2d\u9032\u884c\u4e0b\u5217\u8a2d\u5b9a\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LTDC IP"),(0,a.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,a.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,a.kt)("h2",i({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - \u786c\u9ad4\u8a2d\u5b9a"),(0,a.kt)("h3",i({},{id:"ltdc"}),"LTDC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"Display Type")," (\u986f\u793a\u985e\u578b)\u8a2d\u5b9a\u70ba",(0,a.kt)("em",{parentName:"li"},"RGB565 (16 bits) - DSI Mode")," (RGB565 (16\u4f4d\u5143) - DSI\u6a21\u5f0f)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c64\u8a2d\u5b9a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"Number of layers")," (\u5c64\u6578)\u8a2d\u5b9a\u70ba",(0,a.kt)("em",{parentName:"li"},"1 layer")," (1\u5c64)"),(0,a.kt)("li",{parentName:"ul"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"Windows Position")," (\u8996\u7a97\u4f4d\u7f6e)\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Frame Buffer Line Length")," (\u5f71\u50cf\u7de9\u885d\u5340\u884c\u9577\u5ea6)\u53ca",(0,a.kt)("inlineCode",{parentName:"li"},"Frame Buffer Number of Lines")," (\u5f71\u50cf\u7de9\u885d\u5340\u884c\u6578)\u8a2d\u5b9a\u87a2\u5e55\u89e3\u6790\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"Layer 0 - Pixel Format")," (\u7b2c0\u5c64 - \u50cf\u7d20\u683c\u5f0f)\u8a2d\u5b9a\u70ba",(0,a.kt)("em",{parentName:"li"},"RGB565")),(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"Layer 0 - Alpha constant for blending")," (\u7b2c0\u5c64 - \u7528\u65bc\u6df7\u5408\u7684Alpha\u5e38\u6578)\u8a2d\u5b9a\u70ba",(0,a.kt)("em",{parentName:"li"},"255")," ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/ltdc-config1.png",mdxType:"Figure"},"LTDC\u8a2d\u5b9a")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NVIC\u8a2d\u5b9a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LTDC global interrupt")," (LTDC\u5168\u57df\u4e2d\u65b7)\u53ca",(0,a.kt)("inlineCode",{parentName:"li"},"LTDC global error interrupt")," (LTDC\u5168\u57df\u932f\u8aa4\u4e2d\u65b7)\u90fd\u4e0d\u9700\u8981\u4e14\u61c9\u505c\u7528\u3002 ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/ltdc-config2.png",mdxType:"Figure"},"LTDC NVIC\u8a2d\u5b9a"))))),(0,a.kt)("h3",i({},{id:"dsihost\u8a2d\u5b9a"}),"DSIHOST\u8a2d\u5b9a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"DSIHost"),"\u8a2d\u5b9a\u70ba_*Adapted Command Mode with TE Pin**(\u9069\u6027\u6307\u4ee4\u6a21\u5f0f\u642d\u914dTE\u8173\u4f4d)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u986f\u793a\u4ecb\u9762"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"Color Coding")," (\u8272\u5f69\u7de8\u78bc)\u8a2d\u5b9a\u70ba",(0,a.kt)("em",{parentName:"li"},"RGB565 (16 bits) - DSI mode")," (RGB565 (16\u4f4d\u5143) - DSI\u6a21\u5f0f)"),(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"Maximum Command Size")," (\u6700\u5927\u6307\u4ee4\u5927\u5c0f)\u8a2d\u5b9a\u70ba\u986f\u793a\u5bec\u5ea6\u9806\u5e8f\u7684\u6578\u5b57"),(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"The Refresh of the Display Frame Buffer is Triggered")," (\u89f8\u767c\u986f\u793a\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5237\u65b0\u983b\u7387)\u8a2d\u5b9a\u70ba",(0,a.kt)("em",{parentName:"li"},"manually by Enabling the LTDC")," (\u555f\u7528LTDC\u624b\u52d5\u9032\u884c)"),(0,a.kt)("li",{parentName:"ul"},"\u5269\u9918\u8a2d\u5b9a\u9700\u8996\u9078\u53d6\u7684LCD\u786c\u9ad4\u800c\u5b9a ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/dsihost-config1.png",mdxType:"Figure"},"DSIHOST\u8a2d\u5b9a")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NVIC\u8a2d\u5b9a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u555f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"DSI global interrupt")," (DSI\u5168\u57df\u4e2d\u65b7) ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/dsihost-config2.png",mdxType:"Figure"},"DSIHOST NVIC\u8a2d\u5b9a"))))),(0,a.kt)("h2",i({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u555f\u7528",(0,a.kt)("em",{parentName:"li"},"Graphics Application")," (\u5716\u5f62\u61c9\u7528\u7a0b\u5f0f)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"Display / Interface")," (\u986f\u793a/\u4ecb\u9762)\u8a2d\u5b9a\u70ba",(0,a.kt)("em",{parentName:"li"},"Parallel RGB (LTDC)"),"(\u5e73\u884cRGB (LTDC))\uff0c\u56e0\u70ba\u9019\u4ecd\u662f\u61c9\u7528\u7a0b\u5f0f\u9700\u8981\u901a\u8a0a\u7684\u63a7\u5236\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c07",(0,a.kt)("inlineCode",{parentName:"li"},"Application Tick Source")," (\u61c9\u7528\u6642\u6a19\u6e90)\u8a2d\u5b9a\u70ba",(0,a.kt)("em",{parentName:"li"},"Custom")," (\u5ba2\u88fd) ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/touchgfx-generator-config.png",mdxType:"Figure"},"TouchGFX Generator\u8a2d\u5b9a"))))),(0,a.kt)("h2",i({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC\u521d\u59cb\u5316\u9806\u5e8f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c0d",(0,a.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),"\u7684\u547c\u53eb\u5fc5\u9808\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\u4e4b\u524d\u5b8c\u6210\uff0c \u4e26\u61c9\u7531CubeMX\u8655\u7406\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8005\u5fc5\u9808\u5c07\u6307\u5b9a\u7684\u5fc5\u8981\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u65b0\u589e\u81f3\u4f7f\u7528\u7684LCD\u63a7\u5236\u5668\uff0c\u4f4d\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\u51fd\u6578\u672b\u7aef\uff1b\u9019\u4e00\u822c\u5c07\u4f9d\u64daDSI HAL API ",(0,a.kt)("inlineCode",{parentName:"p"},"HAL_DSI_ShortWrite()"),"\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"HAL_DSI_LongWrite()")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n    ...\n\n    /* USER CODE BEGIN LTDC_Init 2 */\n\n    __HAL_LTDC_DISABLE(&hltdc);\n    HAL_DSI_Start(&hdsi);\n\n    // Specific LCD controller's initialization code\n    ...\n\n    // Turn display off until first frame\n    HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_OFF, 0x00);\n\n    __HAL_LTDC_ENABLE(&hltdc);\n\n    /* USER CODE END LTDC_Init 2 */\n\n    ...\n}\n")))),(0,a.kt)("h2",i({},{id:"touchgfxhal-class-for-dsi-command-mode"}),"\u5df2\u66f4\u65b0DSI\u6307\u4ee4\u6a21\u5f0f\u7684TouchGFXHAL\u985e\u5225"),(0,a.kt)("p",null,"\u9632\u6b62MIPI DSI\u986f\u793a\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u6e32\u67d3\u7b2c\u4e00\u5e40\u4e4b\u524d\u958b\u555f\u7684\u4e00\u7a2e\u65b9\u6cd5\u662f\u4fdd\u8b77",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame"),"\u51fd\u6578\uff0c\u4ee5\u4fbf\u5728TouchGFX\u6e32\u67d3\u7b2c\u4e00\u5e40\u4e4b\u524d\u95dc\u9589\u986f\u793a\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()"),"\u53ef\u50cf\u4e0b\u9762\u9019\u6a23\u66f4\u65b0\uff0c\u900f\u904e\u8a2d\u5b9a\u70baPWM\u8f38\u51fa\u7684HW\u8a08\u6642\u5668\u555f\u7528LCD\u53ca\u5176\u80cc\u5149\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")),(0,a.kt)("p",null,"\u5728DSI\u6307\u4ee4\u6a21\u5f0f\u4e2d\uff0c\u82e5\u8981\u66f4\u65b0\u986f\u793a\u7684\u5167\u90e8GRAM\uff0c\u5c31\u8981\u4f7f\u7528LTDC\u5c07\u8996\u7a97\u5beb\u5165\u81f3\u5176\u4e2d\u3002 \u8996\u7a97\u5c3a\u5bf8\u53ef\u8a2d\u5b9a\u70ba\u6574\u500b\u87a2\u5e55\u5340\u57df\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"void LCD_SetUpdateRegion()\n{\n    uint8_t pCols[4] = {0x00, 0x00, 0x01, 0xDF}; /*   0 -> 480 */\n    uint8_t pRows[4] = {0x00, 0x00, 0x03, 0x3F}; /*   0 -> 800 */\n\n    HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, OTM8009A_CMD_CASET, pCols);\n    HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, OTM8009A_CMD_PASET, pRows);\n}\n")),(0,a.kt)("p",null,"\u986f\u793a\u6703\u4f9d\u64daGRAM\u4e2d\u7684\u50cf\u7d20\u503c\u8a2d\u5b9a\u50cf\u7d20\u4ee5\u9010\u884c\u66f4\u65b0\u87a2\u5e55\u3002 \u70ba\u4e86\u907f\u514d\u87a2\u5e55\u51fa\u73fe\u6495\u88c2\u6548\u61c9\uff0cGRAM\u7684\u6bcf\u500b\u50cf\u7d20\u503c\u90fd\u5fc5\u9808\u5728\u986f\u793a\u5668\u5c07\u5176\u7e6a\u88fd\u81f3\u87a2\u5e55\u524d\u9032\u884c\u66f4\u65b0\u3002 \u986f\u793a\u5668\u66f4\u65b0\u671f\u9593\u53ef\u5c07\u503c\u5beb\u5165GRAM\uff0c\u53ea\u8981\u66f4\u65b0\u901f\u5ea6\u80fd\u5920\u8ddf\u4e0a\u6383\u63cf\u5373\u53ef\u3002 \u986f\u793a\u5668\u53ef\u5b89\u5168\u66f4\u65b0GRAM\u6642\u6703\u767c\u51fa\u6495\u88c2\u6548\u61c9\u8a0a\u865f\uff0c \u4ee5\u4e0b\u662f\u5728\u9ad8\u5ea6\u70ba800\u50cf\u7d20\u7684\u87a2\u5e55\u60c5\u6cc1\u4e0b\uff0c\u555f\u7528TE\u8a0a\u865f\u4e14\u5c07\u5176\u8a2d\u5b9a\u5728\u986f\u793a\u6700\u5f8c\u4e00\u884c\u7684\u7a0b\u5f0f\u78bc\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"/**\n * Request TE at scanline 800.\n */\nvoid LCD_ReqTear(void)\n{\n    static uint8_t ScanLineParams[2];\n\n    uint16_t scanline = 800;\n    ScanLineParams[0] = scanline >> 8;\n    ScanLineParams[1] = scanline & 0x00FF;\n\n    HAL_DSI_LongWrite(&hdsi, LCD_OTM8009A_ID, DSI_DCS_LONG_PKT_WRITE, 2, 0x44, ScanLineParams);\n    // set_tear_on\n    HAL_DSI_ShortWrite(&hdsi, LCD_OTM8009A_ID, DSI_DCS_SHORT_PKT_WRITE_P1, 0x35, 0x00);\n}\n")),(0,a.kt)("p",null,"TE\u8a0a\u865f\u89f8\u767c\u4e2d\u65b7\uff0c\u53ef\u7528\u65bc\u900f\u904eLTDC\u555f\u52d5\u50b3\u8f38\u3002 \u50b3\u8f38\u5b8c\u6210\u5f8c\uff0c\u5c31\u6703\u89f8\u767c\u53e6\u4e00\u6b21\u4e2d\u65b7\u3002 \u6b64\u7bc4\u4f8b\u4f7f\u7528\u5169\u500b\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u4ee5\u4fbf\u555f\u7528\u7e6a\u88fd\u81f3\u5176\u4e2d\u4e00\u500b\u7de9\u885d\u5340\uff0c\u53e6\u4e00\u500b\u7de9\u885d\u5340\u5247\u50b3\u8f38\u81f3GRAM\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"void HAL_DSI_TearingEffectCallback(DSI_HandleTypeDef* hdsi)\n{\n    GPIO::set(GPIO::VSYNC_FREQ);\n    HAL::getInstance()->vSync();\n    OSWrappers::signalVSync();\n\n    if (HAL::getInstance())\n    {\n        // Swap frame buffers immediately instead of waiting for the task to be scheduled in.\n        // Note: task will also swap when it wakes up, but that operation is guarded and will not have\n        // any effect if already swapped.\n        HAL::getInstance()->swapFrameBuffers();\n    }\n\n    // Transfer frame buffer data\n    HAL_DSI_Refresh(hdsi);\n}\n\nvoid HAL_DSI_EndOfRefreshCallback(DSI_HandleTypeDef* hdsi)\n{\n    //Point LTDC base address to the new frame buffer:\n    __HAL_DSI_WRAPPER_DISABLE(hdsi);\n    LTDC_LAYER(&hltdc, 0)->CFBAR = ((uint32_t)currFbBase);\n    __HAL_LTDC_RELOAD_IMMEDIATE_CONFIG(&hltdc);\n    __HAL_DSI_WRAPPER_ENABLE(hdsi);\n\n    GPIO::clear(GPIO::VSYNC_FREQ);            \n}\n")))}h.isMDXComponent=!0}}]);
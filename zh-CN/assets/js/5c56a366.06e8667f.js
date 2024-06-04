"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[84643],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,h=d["".concat(p,".").concat(s)]||d[s]||u[s]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},60830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>d});n(59496);var r=n(49613),a=n(89639);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"scenarios-dsi-video-mode",title:"MIPI-DSI\u89c6\u9891\u6a21\u5f0f"},p=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",title:"MIPI-DSI\u89c6\u9891\u6a21\u5f0f",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6eMIPI DSI\u63a5\u53e3\u5de5\u4f5c\u5728\u89c6\u9891\u6a21\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u5728TouchGFX Generator\u4e2d\u4f7f\u7528\u6b64\u914d\u7f6e\u3002 \u672c\u6587\u4f7f\u7528\u7684\u793a\u4f8b\u5c06\u7528\u4e8e24\u4f4d\u3001RGB888\u7684\u5e27\u7f13\u5b58\u683c\u5f0f\uff0c\u901a\u5e38\u5728STM32CubeMX\u4e2d\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\uff0c\u5e76\u4f7f\u7528\u751f\u6210\u7684\u4ee3\u7801\u4e3e\u4f8b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",permalink:"/4.24/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-dsi-video-mode",title:"MIPI-DSI\u89c6\u9891\u6a21\u5f0f"},sidebar:"docs",previous:{title:"\u89c6\u9891\u89e3\u7801",permalink:"/4.24/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"MIPI-DSI\u547d\u4ee4\u6a21\u5f0f",permalink:"/4.24/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode"}},c={},d=[{value:"STM32CubeMX - \u786c\u4ef6\u914d\u7f6e",id:"stm32cubemx-hardware-configuration",level:2},{value:"LTDC",id:"ltdc",level:3},{value:"DSIHOST \u914d\u7f6e",id:"dsihost-\u914d\u7f6e",level:3},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",level:2},{value:"DSIHOST / LTDC\u521d\u59cb\u5316\u987a\u5e8f",id:"dsihost-ltdc-initialization-sequence",level:2},{value:"\u66f4\u65b0\u4e86DSI\u89c6\u9891\u6a21\u5f0f\u7684TouchGFXHAL\u7c7b",id:"touchgfxhal-class-for-dsi-video-mode",level:2}],u={toc:d},s="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(s,i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6eMIPI DSI\u63a5\u53e3\u5de5\u4f5c\u5728\u89c6\u9891\u6a21\u5f0f\uff0c\u4ee5\u53ca\u5982\u4f55\u5728TouchGFX Generator\u4e2d\u4f7f\u7528\u6b64\u914d\u7f6e\u3002 \u672c\u6587\u4f7f\u7528\u7684\u793a\u4f8b\u5c06\u7528\u4e8e24\u4f4d\u3001RGB888\u7684\u5e27\u7f13\u5b58\u683c\u5f0f\uff0c\u901a\u5e38\u5728STM32CubeMX\u4e2d\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\uff0c\u5e76\u4f7f\u7528\u751f\u6210\u7684\u4ee3\u7801\u4e3e\u4f8b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LTDC IP"),(0,r.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,r.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,r.kt)("h2",i({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - \u786c\u4ef6\u914d\u7f6e"),(0,r.kt)("h3",i({},{id:"ltdc"}),"LTDC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"\u663e\u793a\u7c7b\u578b"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"li"},"RGB888\uff0824\u4f4d\uff09-DSI\u6a21\u5f0f")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5c42\u8bbe\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c42\u6570"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"li"},"1\u5c42")),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"0\u5c42-\u50cf\u7d20\u683c\u5f0f"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"li"},"RGB888")),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"0\u5c42- Alpha\u6df7\u5408\u5e38\u6570"),"\u4e3a",(0,r.kt)("em",{parentName:"li"},"255")," ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config1.webp",width:"800",mdxType:"Figure"},"LTDC \u914d\u7f6e")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NVIC \u8bbe\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u542f\u7528LCD-TFT\u5168\u5c40\u4e2d\u65ad ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/ltdc-config2.webp",width:"800",mdxType:"Figure"},"LTDC NVIC \u8bbe\u7f6e"))))),(0,r.kt)("h3",i({},{id:"dsihost-\u914d\u7f6e"}),"DSIHOST \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"DSIHost"),"\u8bbe\u7f6e\u4e3a_*\u89c6\u9891\u6a21\u5f0f**"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u663e\u793a\u63a5\u53e3"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"\u8272\u5f69\u683c\u5f0f"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"li"},"\u201cRGB888(24\u4f4d)- DSI\u6a21\u5f0f\u201d")),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4f59\u914d\u7f6e\u53d6\u51b3\u4e8e\u6240\u9009\u7684LCD HW ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config1.webp",width:"800",mdxType:"Figure"},"DSIHOST \u914d\u7f6e")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NVIC \u8bbe\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DSIHOST\u65e0\u9700\u5168\u5c40\u4e2d\u65ad\uff0c\u5e94\u7981\u7528\u3002 ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/dsihost-config2.webp",width:"800",mdxType:"Figure"},"DSIHOST NVIC \u8bbe\u7f6e"))))),(0,r.kt)("h2",i({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u542f\u7528",(0,r.kt)("em",{parentName:"li"},"\u56fe\u5f62\u5e94\u7528\u7a0b\u5e8f")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"\u663e\u793a/\u63a5\u53e3"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"li"},"\u5e76\u884cRGB\uff08LTDC\uff09"),"\uff0c\u56e0\u4e3a\u8fd9\u4ecd\u662f\u5e94\u7528\u7a0b\u5e8f\u4e0e\u4e4b\u901a\u4fe1\u7684\u63a7\u5236\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528\u8ba1\u65f6\u6e90"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"li"},"LTDC")," ",(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-video-mode/touchgfx-generator-config.webp",width:"800",mdxType:"Figure"},"TouchGFX Generator\u914d\u7f6e"))))),(0,r.kt)("h2",i({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC\u521d\u59cb\u5316\u987a\u5e8f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),"\u7684\u8c03\u7528\u5fc5\u987b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\u4e4b\u524d\u5b8c\u6210\u3002 \u5e94\u7531CubeMX\u6765\u5904\u7406\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("em",{parentName:"p"},"\u7528\u6237\u4ee3\u7801"),"\u90e8\u5206\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),"\u672b\u5c3e\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"HAL_DSI_Start()"),"\u4e4b\u540e\uff0c\u5c06DSIHOST\u65f6\u949f\u5207\u6362\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"DSIPHY"),"\u6e90\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{12,20}","{12,20}":!0}),"/**\n  * @brief DSIHOST Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_DSIHOST_DSI_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN DSIHOST_Init 2 */\n  // Start DSI\n  if (HAL_DSI_Start(&hdsi) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  /* Switch to DSI PHY PLL clock */\n  RCC_PeriphCLKInitTypeDef PeriphClkInit;\n  PeriphClkInit.PeriphClockSelection = RCC_PERIPHCLK_DSI;\n  PeriphClkInit.DsiClockSelection    = RCC_DSICLKSOURCE_DSIPHY;\n  HAL_RCCEx_PeriphCLKConfig(&PeriphClkInit);\n  /* USER CODE END DSIHOST_Init 2 */\n\n  ...\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u5fc5\u987b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\u51fd\u6570\u7684\u672b\u5c3e\u6dfb\u52a0\u7279\u5b9a\u4e8e\u6240\u7528LCD\u63a7\u5236\u5668\u7684\u5fc5\u8981\u521d\u59cb\u5316\u4ee3\u7801\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8be5\u4ee3\u7801\u5c06\u57fa\u4e8eDSI HAL API ",(0,r.kt)("inlineCode",{parentName:"li"},"HAL_DSI_ShortWrite()"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"HAL_DSI_LongWrite"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n  ...\n\n  /* USER CODE BEGIN LTDC_Init 2 */\n  // Specific LCD controller's initialization code\n  ...\n\n  // Exit Sleep Mode\n  if (HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P0, DSI_EXIT_SLEEP_MODE, 0x00) != HAL_OK)\n  {\n    Error_Handler();\n  }\n\n  HAL_Delay(120);\n  /* USER CODE END LTDC_Init 2 */\n\n  ...\n}\n")))),(0,r.kt)("h2",i({},{id:"touchgfxhal-class-for-dsi-video-mode"}),"\u66f4\u65b0\u4e86DSI\u89c6\u9891\u6a21\u5f0f\u7684TouchGFXHAL\u7c7b"),(0,r.kt)("p",null,"LTDC\u4e2d\u65ad\u7684\u4ee3\u7801\u4e0e\u4f7f\u7528\u5e76\u884cRGB\u663e\u793a\u63a5\u53e3\u65f6\u751f\u6210\u7684\u4ee3\u7801\u76f8\u540c\u3002"),(0,r.kt)("p",null,"\u9632\u6b62MIPI DSI\u663e\u793a\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6e32\u67d3\u7b2c\u4e00\u5e27\u4e4b\u524d\u6253\u5f00\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u4fdd\u62a4",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame"),"\u51fd\u6570\uff0c\u5728TouchGFX\u6e32\u67d3\u7b2c\u4e00\u5e27\u4e4b\u524d\u5173\u95ed\u663e\u793a\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()"),"\u53ef\u50cf\u4e0b\u9762\u8fd9\u6837\u66f4\u65b0\uff0c\u901a\u8fc7\u914d\u7f6e\u4e3aPWM\u8f93\u51fa\u7684HW\u5b9a\u65f6\u5668\u542f\u7528LCD\u53ca\u5176\u80cc\u5149\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")))}h.isMDXComponent=!0}}]);
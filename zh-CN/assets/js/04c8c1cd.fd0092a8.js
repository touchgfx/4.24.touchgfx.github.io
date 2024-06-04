"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[63395],{49613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,h=d["".concat(m,".").concat(u)]||d[u]||s[u]||i;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89639:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(59496),r=t(7029);const i=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return n?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:t,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:t,height:i,src:l})),a.createElement("p",null,e.children))}},58627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});t(59496);var a=t(49613),r=t(89639);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={id:"scenarios-dsi-command-mode",title:"MIPI-DSI\u547d\u4ee4\u6a21\u5f0f"},m=void 0,c={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",id:"development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",title:"MIPI-DSI\u547d\u4ee4\u6a21\u5f0f",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4e3a\u547d\u4ee4\u6a21\u5f0f\u914d\u7f6eMIPI DSI\u63a5\u53e3\uff0c\u4ee5\u53ca\u5982\u4f55\u5728TouchGFX\u751f\u6210\u5668\u4e2d\u4f7f\u7528\u6b64\u914d\u7f6e\u3002 \u672c\u6587\u4f7f\u7528\u7684\u793a\u4f8b\u5c06\u7528\u4e8e16\u4f4dRGB565\u5e27\u7f13\u51b2\u533a\u683c\u5f0f\uff0c\u901a\u5e38\u4f1a\u5728STM32CubeMX\u548c\u4ee3\u7801\u793a\u4f8b\u4e2d\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",permalink:"/4.24/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-command-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-dsi-command-mode",title:"MIPI-DSI\u547d\u4ee4\u6a21\u5f0f"},sidebar:"docs",previous:{title:"MIPI-DSI\u89c6\u9891\u6a21\u5f0f",permalink:"/4.24/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"},next:{title:"\u6027\u80fd\u6d4b\u91cf",permalink:"/4.24/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-measure-performance"}},p={},d=[{value:"STM32CubeMX - \u786c\u4ef6\u914d\u7f6e",id:"stm32cubemx-hardware-configuration",level:2},{value:"LTDC",id:"ltdc",level:3},{value:"DSIHOST \u914d\u7f6e",id:"dsihost-\u914d\u7f6e",level:3},{value:"STM32CubeMX - TouchGFX Generator",id:"stm32cubemx-touchgfx-generator",level:2},{value:"DSIHOST / LTDC\u521d\u59cb\u5316\u987a\u5e8f",id:"dsihost-ltdc-initialization-sequence",level:2},{value:"\u66f4\u65b0\u4e86DSI\u547d\u4ee4\u6a21\u5f0f\u7684TouchGFXHAL\u7c7b",id:"touchgfxhal-class-for-dsi-command-mode",level:2}],s={toc:d},u="wrapper";function h(e){var{components:n}=e,t=l(e,["components"]);return(0,a.kt)(u,i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4e3a\u547d\u4ee4\u6a21\u5f0f\u914d\u7f6eMIPI DSI\u63a5\u53e3\uff0c\u4ee5\u53ca\u5982\u4f55\u5728TouchGFX\u751f\u6210\u5668\u4e2d\u4f7f\u7528\u6b64\u914d\u7f6e\u3002 \u672c\u6587\u4f7f\u7528\u7684\u793a\u4f8b\u5c06\u7528\u4e8e16\u4f4dRGB565\u5e27\u7f13\u51b2\u533a\u683c\u5f0f\uff0c\u901a\u5e38\u4f1a\u5728STM32CubeMX\u548c\u4ee3\u7801\u793a\u4f8b\u4e2d\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LTDC IP"),(0,a.kt)("li",{parentName:"ul"},"DSI-HOST IP"),(0,a.kt)("li",{parentName:"ul"},"TouchGFX Generator")),(0,a.kt)("h2",i({},{id:"stm32cubemx-hardware-configuration"}),"STM32CubeMX - \u786c\u4ef6\u914d\u7f6e"),(0,a.kt)("h3",i({},{id:"ltdc"}),"LTDC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"\u663e\u793a\u7c7b\u578b"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("em",{parentName:"li"},"RGB565\uff0816\u4f4d\uff09-DSI\u6a21\u5f0f")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c42\u8bbe\u7f6e"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"\u5c42\u6570"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("em",{parentName:"li"},"1\u5c42")),(0,a.kt)("li",{parentName:"ul"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"\u7a97\u53e3\u4f4d\u7f6e"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"\u5e27\u7f13\u51b2\u533a\u884c\u957f\u5ea6"),"\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"li"},"\u5e27\u7f13\u51b2\u533a\u884c\u6570"),"\u4e2d\u8bbe\u7f6e\u5c4f\u5e55\u5206\u8fa8\u7387"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"0\u5c42-\u50cf\u7d20\u683c\u5f0f"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("em",{parentName:"li"},"RGB565")),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"0\u5c42- Alpha\u6df7\u5408\u5e38\u6570"),"\u4e3a",(0,a.kt)("em",{parentName:"li"},"255")," ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/ltdc-config1.png",mdxType:"Figure"},"LTDC \u914d\u7f6e")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NVIC \u8bbe\u7f6e"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LTDC\u5168\u5c40\u4e2d\u65ad"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"LTDC\u5168\u5c40\u9519\u8bef\u4e2d\u65ad"),"\u5747\u4e0d\u9700\u8981\uff0c\u5e94\u7981\u7528\u3002 ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/ltdc-config2.png",mdxType:"Figure"},"LTDC NVIC \u8bbe\u7f6e"))))),(0,a.kt)("h3",i({},{id:"dsihost-\u914d\u7f6e"}),"DSIHOST \u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528TE Pin\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"DSIHost"),"\u8bbe\u7f6e\u4e3a_*\u81ea\u9002\u5e94\u547d\u4ee4\u6a21\u5f0f**"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u663e\u793a\u63a5\u53e3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"\u8272\u5f69\u683c\u5f0f"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("em",{parentName:"li"},"\u201cRGB888(16\u4f4d)- DSI\u6a21\u5f0f\u201d")),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u663e\u793a\u5bbd\u5ea6\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"Maximum Command Size")),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u542f\u7528",(0,a.kt)("em",{parentName:"li"},"LTDC"),"\u5c06\u663e\u793a\u5e27\u7f13\u51b2\u533a\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u5237\u65b0\u8bbe\u7f6e\u4e3a\u624b\u52a8\u89e6\u53d1")),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4f59\u914d\u7f6e\u53d6\u51b3\u4e8e\u6240\u9009\u7684LCD HW ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/dsihost-config1.png",mdxType:"Figure"},"DSIHOST \u914d\u7f6e")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NVIC \u8bbe\u7f6e"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u542f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"DSI\u5168\u5c40\u4e2d\u65ad")," ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/dsihost-config2.png",mdxType:"Figure"},"DSIHOST NVIC \u8bbe\u7f6e"))))),(0,a.kt)("h2",i({},{id:"stm32cubemx-touchgfx-generator"}),"STM32CubeMX - TouchGFX Generator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5f0f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u542f\u7528",(0,a.kt)("em",{parentName:"li"},"\u56fe\u5f62\u5e94\u7528\u7a0b\u5e8f")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TouchGFX Generator"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"\u663e\u793a/\u63a5\u53e3"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("em",{parentName:"li"},"\u5e76\u884cRGB\uff08LTDC\uff09"),"\uff0c\u56e0\u4e3a\u8fd9\u4ecd\u662f\u5e94\u7528\u7a0b\u5e8f\u4e0e\u4e4b\u901a\u4fe1\u7684\u63a7\u5236\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528\u8ba1\u65f6\u6e90"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("em",{parentName:"li"},"\u81ea\u5b9a\u4e49")," ",(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/dsi-command-mode/touchgfx-generator-config.png",mdxType:"Figure"},"TouchGFX Generator\u914d\u7f6e"))))),(0,a.kt)("h2",i({},{id:"dsihost-ltdc-initialization-sequence"}),"DSIHOST / LTDC\u521d\u59cb\u5316\u987a\u5e8f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"MX_DSIHOST_DSI_Init()"),"\u7684\u8c03\u7528\u5fc5\u987b\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\u4e4b\u524d\u5b8c\u6210\u3002 \u5e94\u7531CubeMX\u6765\u5904\u7406\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u5fc5\u987b\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"MX_LTDC_Init()"),"\u51fd\u6570\u7684\u672b\u5c3e\u6dfb\u52a0\u7279\u5b9a\u4e8e\u6240\u7528LCD\u63a7\u5236\u5668\u6240\u9700\u7684\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u8be5\u4ee3\u7801\u901a\u5e38\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"DSI HAL APIs HAL_DSI_ShortWrite()"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"HAL_DSI_LongWrite()")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"/**\n  * @brief LTDC Initialization Function\n  * @param None\n  * @retval None\n  */\nstatic void MX_LTDC_Init(void)\n{\n    ...\n\n    /* USER CODE BEGIN LTDC_Init 2 */\n\n    __HAL_LTDC_DISABLE(&hltdc);\n    HAL_DSI_Start(&hdsi);\n\n    // Specific LCD controller's initialization code\n    ...\n\n    // Turn display off until first frame\n    HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_OFF, 0x00);\n\n    __HAL_LTDC_ENABLE(&hltdc);\n\n    /* USER CODE END LTDC_Init 2 */\n\n    ...\n}\n")))),(0,a.kt)("h2",i({},{id:"touchgfxhal-class-for-dsi-command-mode"}),"\u66f4\u65b0\u4e86DSI\u547d\u4ee4\u6a21\u5f0f\u7684TouchGFXHAL\u7c7b"),(0,a.kt)("p",null,"\u9632\u6b62MIPI DSI\u663e\u793a\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7b2c\u4e00\u5e27\u88ab\u6e32\u67d3\u4e4b\u524d\u6253\u5f00\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u4fdd\u62a4",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame"),"\u529f\u80fd\uff0c\u4fdd\u6301\u663e\u793a\u5173\u95ed\uff0c\u76f4\u81f3TouchGFX\u6e32\u67d3\u7b2c\u4e00\u5e27\u4e3a\u6b62\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::endFrame()"),"\u53ef\u50cf\u4e0b\u9762\u8fd9\u6837\u66f4\u65b0\uff0c\u901a\u8fc7\u914d\u7f6e\u4e3aPWM\u8f93\u51fa\u7684HW\u5b9a\u65f6\u5668\u542f\u7528LCD\u53ca\u5176\u80cc\u5149\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp",metastring:"{7,9,11}","{7,9,11}":!0}),"void TouchGFXHAL::endFrame()\n{\n    if (!display_on)\n    {\n        display_on = true;\n        /* Enable the LCD, Send Display on DCS command to display */\n        HAL_DSI_ShortWrite(&hdsi, 0, DSI_DCS_SHORT_PKT_WRITE_P1, DSI_SET_DISPLAY_ON, 0x00);\n        /* Start PWM Timer channel */\n        (void)HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_2);\n        /* Enable Backlight by setting Brightness to 100% */\n        __HAL_TIM_SET_COMPARE(&htim8, TIM_CHANNEL_2, 2U * 100);\n    }\n\n    TouchGFXGeneratedHAL::endFrame();\n}\n")),(0,a.kt)("p",null,"\u5728DSI Command\u6a21\u5f0f\u4e0b\uff0c\u901a\u8fc7LTDC\u5411\u663e\u793a\u4e2d\u5199\u5165\u4e00\u4e2a\u7a97\u53e3\u6765\u66f4\u65b0\u663e\u793a\u4e2d\u7684\u5185\u90e8GRAM\u3002 \u7a97\u53e3\u7684\u5927\u5c0f\u53ef\u8bbe\u7f6e\u4e3a\u6574\u4e2a\u5c4f\u5e55\u533a\u57df\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"void LCD_SetUpdateRegion()\n{\n    uint8_t pCols[4] = {0x00, 0x00, 0x01, 0xDF}; /*   0 -> 480 */\n    uint8_t pRows[4] = {0x00, 0x00, 0x03, 0x3F}; /*   0 -> 800 */\n\n    HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, OTM8009A_CMD_CASET, pCols);\n    HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, OTM8009A_CMD_PASET, pRows);\n}\n")),(0,a.kt)("p",null,"\u8be5\u663e\u793a\u6839\u636eGRAM\u4e2d\u8bbe\u7f6e\u7684\u50cf\u7d20\u503c\u6765\u9010\u884c\u66f4\u65b0\u5c4f\u5e55\u3002 \u4e3a\u4e86\u907f\u514d\u5c4f\u5e55\u6495\u88c2\uff0cGRAM\u4e2d\u7684\u6bcf\u4e2a\u50cf\u7d20\u503c\u5fc5\u987b\u5728\u8be5\u663e\u793a\u5c06\u5176\u7ed8\u5236\u5230\u5c4f\u5e55\u4e4b\u524d\u66f4\u65b0\u3002 \u53ea\u8981\u66f4\u65b0\u80fd\u8ddf\u4e0a\u626b\u63cf\u7ebf\uff0c\u4fbf\u53ef\u5728\u66f4\u65b0\u663e\u793a\u7684\u540c\u65f6\u5c06\u503c\u5199\u5165GRAM\u3002 \u5f53\u53ef\u4ee5\u5b89\u5168\u5730\u5f00\u59cb\u66f4\u65b0GRAM\u65f6\uff0c\u8be5\u663e\u793a\u4f1a\u53d1\u51faTearing Effect\u4fe1\u53f7\u3002 \u5bf9\u4e8e\u9ad8\u5ea6\u4e3a800\u50cf\u7d20\u7684\u5c4f\u5e55\uff0c\u542f\u7528TE\u4fe1\u53f7\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u663e\u793a\u6700\u540e\u4e00\u884c\u7684\u4ee3\u7801\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"/**\n * Request TE at scanline 800.\n */\nvoid LCD_ReqTear(void)\n{\n    static uint8_t ScanLineParams[2];\n\n    uint16_t scanline = 800;\n    ScanLineParams[0] = scanline >> 8;\n    ScanLineParams[1] = scanline & 0x00FF;\n\n    HAL_DSI_LongWrite(&hdsi, LCD_OTM8009A_ID, DSI_DCS_LONG_PKT_WRITE, 2, 0x44, ScanLineParams);\n    // set_tear_on\n    HAL_DSI_ShortWrite(&hdsi, LCD_OTM8009A_ID, DSI_DCS_SHORT_PKT_WRITE_P1, 0x35, 0x00);\n}\n")),(0,a.kt)("p",null,"TE\u4fe1\u53f7\u89e6\u53d1\u4e2d\u65ad\uff0c\u8be5\u4e2d\u65ad\u53ef\u7528\u4e8e\u542f\u52a8\u901a\u8fc7LTDC\u6267\u884c\u7684\u4f20\u8f93\u3002 \u4e00\u65e6\u4f20\u8f93\u5b8c\u6210\uff0c\u4f1a\u89e6\u53d1\u53e6\u4e00\u4e2a\u4e2d\u65ad\u3002 \u6b64\u793a\u4f8b\u4f7f\u7528\u53cc\u5e27\u7f13\u51b2\u533a\u542f\u7528\u5bf9\u4e00\u4e2a\u7f13\u51b2\u533a\u7684\u7ed8\u5236\uff0c\u800c\u53e6\u4e00\u4e2a\u5219\u4f20\u8f93\u5230GRAM\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cpp"}),"void HAL_DSI_TearingEffectCallback(DSI_HandleTypeDef* hdsi)\n{\n    GPIO::set(GPIO::VSYNC_FREQ);\n    HAL::getInstance()->vSync();\n    OSWrappers::signalVSync();\n\n    if (HAL::getInstance())\n    {\n        // Swap frame buffers immediately instead of waiting for the task to be scheduled in.\n        // Note: task will also swap when it wakes up, but that operation is guarded and will not have\n        // any effect if already swapped.\n        HAL::getInstance()->swapFrameBuffers();\n    }\n\n    // Transfer frame buffer data\n    HAL_DSI_Refresh(hdsi);\n}\n\nvoid HAL_DSI_EndOfRefreshCallback(DSI_HandleTypeDef* hdsi)\n{\n    //Point LTDC base address to the new frame buffer:\n    __HAL_DSI_WRAPPER_DISABLE(hdsi);\n    LTDC_LAYER(&hltdc, 0)->CFBAR = ((uint32_t)currFbBase);\n    __HAL_LTDC_RELOAD_IMMEDIATE_CONFIG(&hltdc);\n    __HAL_DSI_WRAPPER_ENABLE(hdsi);\n\n    GPIO::clear(GPIO::VSYNC_FREQ);            \n}\n")))}h.isMDXComponent=!0}}]);
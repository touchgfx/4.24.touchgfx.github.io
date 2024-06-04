"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[88685],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93822:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(59496),a=n(96151);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)}}const s=i},28128:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496);class a extends o.Component{render(){return o.createElement("div",{className:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}const r=a},89639:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496),a=n(7029);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,i=(0,a.Z)(e.imageSource);return t?o.createElement("div",{className:"figure noshadow"},o.createElement("a",{href:i,target:"_blank"},o.createElement("img",{width:n,height:r,src:i})),o.createElement("p",null,e.children)):o.createElement("div",{className:"figure"},o.createElement("a",{href:i,target:"_blank"},o.createElement("img",{width:n,height:r,src:i})),o.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(59496),a=n(96151);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const s=i},96151:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(59496);class a extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{className:e},o.createElement("div",{className:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{className:"highlight-content"},this.props.children))}}const r=a},49018:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(59496),a=n(96151);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}const s=i},21100:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(59496),a=n(96151);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}const s=i},60663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>v,frontMatter:()=>h,metadata:()=>f,toc:()=>_});n(59496);var o=n(49613),a=n(89639),r=n(48753),i=n(49018),s=n(21100),l=n(28128),d=n(95375),c=n(93822);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const h={id:"scenarios-video-decoding",title:"Video Decoding"},m=void 0,f={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-video-decoding",id:"development/touchgfx-hal-development/scenarios/scenarios-video-decoding",title:"Video Decoding",description:"This section shows how to configure the TouchGFX Generator to generate a TouchGFX HAL that has video decoding capabilities.",source:"@site/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",permalink:"/4.24/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-video-decoding",title:"Video Decoding"},sidebar:"docs",previous:{title:"Real Time Operating System",permalink:"/4.24/docs/development/touchgfx-hal-development/scenarios/scenarios-configure-rtos"},next:{title:"MIPI-DSI Video Mode",permalink:"/4.24/docs/development/touchgfx-hal-development/scenarios/scenarios-dsi-video-mode"}},g={},_=[{value:"RTOS Support",id:"video-rtos-support",level:2},{value:"Software Decoding",id:"software-decoding",level:2},{value:"Video Data",id:"video-data",level:3},{value:"Hardware Decoding",id:"hardware-decoding",level:2},{value:"STM32F769-DISCO",id:"stm32f769-disco",level:3},{value:"STM32H750-DK",id:"stm32h750-dk",level:3},{value:"<code>FileReader</code> interface",id:"filereader-interface",level:2},{value:"Migrating TBS to support video decoding",id:"migrating-tbs-to-support-video-decoding",level:2},{value:"General changes",id:"general-changes",level:3},{value:"Software changes",id:"software-changes",level:3},{value:"Hardware changes",id:"hardware-changes",level:3},{value:"Placing Video Buffer in External Memory",id:"placing-video-buffer-in-external-memory",level:2},{value:"EWARM (IAR)",id:"ewarm-iar",level:3},{value:"STM32CubeIDE",id:"stm32cubeide",level:3},{value:"MDK-ARM (Keil)",id:"mdk-arm-keil",level:3}],b={toc:_},k="wrapper";function v(e){var{components:t}=e,n=u(e,["components"]);return(0,o.kt)(k,p({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section shows how to configure the ",(0,o.kt)("a",p({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/video-decoding"}),"TouchGFX Generator")," to generate a TouchGFX HAL that has video decoding capabilities."),(0,o.kt)("p",null,"Before reading this scenario, please read the documentation on using ",(0,o.kt)("a",p({parentName:"p"},{href:"../../ui-development/touchgfx-engine-features/video"}),"MJPEG Video")," in TouchGFX and the documentation on the\n",(0,o.kt)("a",p({parentName:"p"},{href:"../../ui-development/ui-components/miscellaneous/video"}),"Video widget")," itself."),(0,o.kt)("p",null,"The following scenario details how to enable TouchGFX HAL to support video decoding through either software (LibJPEG) or hardware (JPEG). It covers both STM32F7 and STM32H7 because the STM32CubeMX configuration to support Hardware (JPEG) decoding is slightly different from the STM32F7."),(0,o.kt)("p",null,"Be sure to ",(0,o.kt)("strong",{parentName:"p"},"read all sections")," in this article before configuring the MCU for your specific project."),(0,o.kt)("p",null,"Generally, the LibJPEG and JPEG configurations can be found in STM32CubeMX in the ",(0,o.kt)("em",{parentName:"p"},"Middleware")," and ",(0,o.kt)("em",{parentName:"p"},"Multimedia")," catagories:"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/cubemx-jpeg-configuration.webp",width:"250",mdxType:"Figure"},"JPEG and LibJPEG setting in STM32CubeMX"),(0,o.kt)(s.Z,{mdxType:"Tip"},(0,o.kt)("li",null,"The latest version of the STM32H750-DK, STM32F769-DISCO and STM32F746G-DISCO TouchGFX Board Setups (TBS) support both Software and JPEG hardware decoding through their STM32CubeMX configurations."),(0,o.kt)("li",null,"Use the STM32CubeMX configurations found in these example projects as inspiration to get your specific MCU to support MJPEG Video Decoding.")),(0,o.kt)("h2",p({},{id:"video-rtos-support"}),"RTOS Support"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",p({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/video-decoding"}),"Generator User Guide")," mentions that ",(0,o.kt)("em",{parentName:"p"},"Single-")," and\n",(0,o.kt)("em",{parentName:"p"},"Double buffer")," decoding strategies require a CMSIS compliant RTOS, such as FreeRTOS. TouchGFX Generator generates an entry\npoint function ",(0,o.kt)("inlineCode",{parentName:"p"},"videoTaskFunc()"),", that must be associated with a Video decoding task. STM32CubeMX can generate this configuration\nby defining the task and entry point function in the ",(0,o.kt)("em",{parentName:"p"},"Tasks and queues")," tab of the ",(0,o.kt)("em",{parentName:"p"},"FreeRTOS")," Middleware configuration."),(0,o.kt)("p",null,"The video task stack size (defined in words for CMSIS V2) and RTOS heap size are two important factors. "),(0,o.kt)("p",null,"For software decoding the stack size must be carefully set because LibJPEG uses dynamic memory allocation.\nFor hardware decoding the stack size can be substantially lower because there is no software stack which\ndynamically allocates memory. "),(0,o.kt)("p",null,"The FreeRTOS Heap should be large enough for your general application + ",(0,o.kt)("inlineCode",{parentName:"p"},"0xA000"),"."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-video-task.webp",width:"600",mdxType:"Figure"},"FreeRTOS Task Configuration"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-video-decoding-heap-size.webp",width:"600",mdxType:"Figure"},"FreeRTOS Heap Size Configuration"),(0,o.kt)("p",null,"Based on the above configuration, STM32CubeMX generates the following code for the video task:"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{2-7,13}","{2-7,13}":!0}),'/* Definitions for VideoTask */\nosThreadId_t VideoTaskHandle;\nconst osThreadAttr_t VideoTask_attributes = {\n  .name = "VideoTask",\n  .stack_size = 1000 * 4,\n  .priority = (osPriority_t) osPriorityLow,\n};\n...\nvoid main()\n{\n    ...\n    /* creation of VideoTask */\n    VideoTaskHandle = osThreadNew(videoTaskFunc, NULL, &VideoTask_attributes);\n    ...\n}\n')),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"FreeRTOSConfig.h"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"#define configTOTAL_HEAP_SIZE                    ((size_t)75000)\n")),(0,o.kt)("h2",p({},{id:"software-decoding"}),"Software Decoding"),(0,o.kt)("p",null,"The software decoding solution requires that the ",(0,o.kt)("strong",{parentName:"p"},"LibJPEG")," middleware is enabled from STM32CubeMX, as specified in ",(0,o.kt)("a",p({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/video-decoding#video-decoding-type"}),"Generator User Guide"),".\nSoftware decoding setup is identical for all LibJPEG capable MCUs (e.g. STM32F4, STM32F7, STM32H7)."),(0,o.kt)("p",null,"The TouchGFX Software Decoder expects the data decoded by LibJPEG to have BGR pixel ordering. If this setting is left as RGB, R and B color components will be swapped in your application. "),(0,o.kt)("p",null,"Furthermore, the size of each pixel should be 3 bytes if using a 16-bit or 24-bit video RGB buffer or 4 if using a 32-bit video RGB buffer."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/libjpeg-configuration.webp",width:"500",mdxType:"Figure"},"LibJPEG Configuration for a 16-bit or 24-bit video RGB buffer"),(0,o.kt)(c.Z,{mdxType:"Caution"},(0,o.kt)("li",null,"The RGB_ORDERING setting must be configured as BGR, and the pixel size must be set according to which video RGB buffer format is used."),(0,o.kt)("li",null,"If your application uses ",(0,o.kt)("b",null,"Direct to Framebuffer")," strategy in a ",(0,o.kt)("b",null,"ARGB8888")," (32-bit) application the ",(0,o.kt)("b",null,"pixel size")," must be set to 4")),(0,o.kt)("h3",p({},{id:"video-data"}),"Video Data"),(0,o.kt)(c.Z,{mdxType:"Caution"},"The current decoding solution using STM32CubeMX, TouchGFX Generator and the Video widget from TouchGFX Designer will currently only work for ST boards because the video data is linked into the application at a specific address in memory mapped flash that is already known."),(0,o.kt)("p",null,"The below snippet from an EWARM project shows the extra options that are created by TouchGFX Designer and how it places the data in ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtFlashSection")," which is defined inside the linker script for all TouchGFX Board Packages. This will not work for non-memory-mapped flash or projects that don't define this section."),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"ewarm_project.ewp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"        <option>\n          <name>IlinkExtraOptions</name>\n          <state>--image_input $PROJ_DIR$\\..\\TouchGFX\\generated\\videos\\bin\\washerdryer.bin,video_washerdryer_bin_start,ExtFlashSection,4</state>\n          <state>--keep video_washerdryer_bin_start</state>\n        </option>\n")),(0,o.kt)("p",null,"For projects with video data in non-memory mapped memory, please read the section ",(0,o.kt)("inlineCode",{parentName:"p"},"FileReader")," in this article."),(0,o.kt)("h2",p({},{id:"hardware-decoding"}),"Hardware Decoding"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",p({parentName:"p"},{href:"../generator-how-to/touchgfx-al-configuration/video-decoding"}),"Generator User Guide")," mentions that the ",(0,o.kt)("strong",{parentName:"p"},"JPEG IP")," must be enabled in STM32CubeMX to enable Hardware decoding."),(0,o.kt)("h3",p({},{id:"stm32f769-disco"}),"STM32F769-DISCO"),(0,o.kt)("p",null,"The JPEG configuration for JPEG capable STM32F7 series, e.g. STM32F769, differs slightly from the STM32H7 line. The ",(0,o.kt)("inlineCode",{parentName:"p"},"RGB_FORMAT")," setting found in the ",(0,o.kt)("em",{parentName:"p"},"JPEG")," configurations must respect the pixel format of the TouchGFX Framebuffer, ",(0,o.kt)("inlineCode",{parentName:"p"},"JPEG_RGB565")," in the example below."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/jpeg-hw-configuration.webp",width:"450",mdxType:"Figure"},"JPEG Parameter Settings"),(0,o.kt)("p",null,"Use DMA to transfer data to (memory-to-peripheral) and from (peripheral-to-memory) the JPEG peripheral through the ",(0,o.kt)("em",{parentName:"p"},"DMA Settings")," tab found in ",(0,o.kt)("em",{parentName:"p"},"JPEG")," configurations. ",(0,o.kt)("em",{parentName:"p"},"Adding")," a DMA request for ",(0,o.kt)("inlineCode",{parentName:"p"},"IN")," and one for ",(0,o.kt)("inlineCode",{parentName:"p"},"OUT")," will set up the direction parameters automatically."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration.webp",width:"450",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)("p",null,"This concludes the TouchGFX HAL configuration for Hardware Decoding on the JPEG capable STM32F7s (e.g. STM32F769). After Generating code from STM32CubeMX the application will be able to decode videos using the JPEG peripheral when using the Video widget from the designer."),(0,o.kt)(c.Z,{mdxType:"Caution"},"The RGB_FORMAT of the JPEG peripheral configuration must respect the format of the TouchGFX Framebuffer"),(0,o.kt)("h3",p({},{id:"stm32h750-dk"}),"STM32H750-DK"),(0,o.kt)("p",null,"The only thing that seperates Hardware decoding (JPEG capable) on e.g. an STM32H750 from an STM32F769 is the way DMA transfers are configured in STM32CubeMX. Not only is the UI different, but the DMA concepts are as well."),(0,o.kt)("p",null,"For the STM32H750, the JPEG peripheral can only be configured to use the MDMA peripheral rather than the regular DMA peripherals. Add an MDMA configuration for both input- and output FIFO Threshold signals as shown in the images below."),(0,o.kt)(i.Z,{mdxType:"Note"},"MDMA is a much higher performance DMA engine compared to DMA1/DMA2"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/mdma-input-fifo-threshold.webp",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/mdma-output-fifo-threshold.webp",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)("h2",p({},{id:"filereader-interface"}),(0,o.kt)("inlineCode",{parentName:"h2"},"FileReader")," interface"),(0,o.kt)("p",null,"When storing MJPEG videos on non-memory-mapped memories developers can specify an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::VideoDataReader")," that the TouchGFX Video Controllers can use to hand data for decoding to the configured decoder (Software/Hardware). The below is a simple example of such an interface that copies video data from one buffer to another."),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"VideoView.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"class MyReader : public touchgfx::VideoDataReader\n{\npublic:\n    MyReader() : position(0) { }\n    virtual uint32_t getDataLength() { return video_len; }\n    virtual void seek(uint32_t pos) { position = pos; }\n    virtual bool readData(void* dst, uint32_t bytes)\n    {\n        memcpy(dst, &video_data[position], bytes);\n        position += bytes;\n        return true;\n    }\n    private:\n        uint32_t position;\n} myReader;\n")),(0,o.kt)("p",null,"Instead of pointing a ",(0,o.kt)("inlineCode",{parentName:"p"},"Video")," widget to the start of the video in mapped memory, developers can configure the widget to use the data reader instead:"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"VideoView.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"video.setVideoData(myReader);\n")),(0,o.kt)("h2",p({},{id:"migrating-tbs-to-support-video-decoding"}),"Migrating TBS to support video decoding"),(0,o.kt)("p",null,"If you want to migrate a project created from a TouchGFX Board Setups (TBS) - with a MCU that supports video decoding - from a\nversion of TouchGFX Designer before video decoding was supported and you want to be able to use 'Run Target' in TouchGFX Designer\nwith that project, some manual changes to the GCC Makefile are required."),(0,o.kt)("p",null,"A run-down of the required changes and why they are needed will be listed in the following sections. There are some general changes\nthat must always be applied and some LibJPEG (software decoding) and JPEG (hardware decoding) specific changes depending on what the\ndevelopers application uses. The changes are an extension to the already existing GCC Makefile from the older TBS."),(0,o.kt)("p",null,"Other than updating the Makefile you will also have to setup video decoding in STM32CubeMX as described in the above scenarios."),(0,o.kt)("h3",p({},{id:"general-changes"}),"General changes"),(0,o.kt)("p",null,"Define the LIBJPEG path in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{2}","{2}":!0}),"# LibJPEG path\nlibjpeg_path := $(cubemx_middlewares_path)/Third_Party/LibJPEG\n")),(0,o.kt)("p",null,"The video assets input path must then be defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{3}","{3}":!0}),"asset_texts_input  := TouchGFX/assets/texts\n\nasset_videos_input := TouchGFX/assets/videos\n")),(0,o.kt)("p",null,"The video assets output path must also be defined bellow the already existing assets output paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{4}","{4}":!0}),"asset_images_output := $(asset_root_path)/images\nasset_fonts_output := $(asset_root_path)/fonts\nasset_texts_output := $(asset_root_path)/texts\nasset_videos_output := $(asset_root_path)/videos\n")),(0,o.kt)("p",null,"Add the video output assets to the components list:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{6}","{6}":!0}),"all_components := $(components) \\\n    $(asset_fonts_output) \\\n    $(asset_images_output) \\\n    $(asset_texts_output)\n    $(asset_texts_output) \\\n    $(asset_videos_output)\n")),(0,o.kt)("p",null,"Video object files must be defined. The video object files are separated from the already existing object:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{4}","{4}":!0}),"c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)\nsource_files += $(board_cpp_files)\n\nvideo_object_files := $(call find, $(asset_videos_output),*.o)\n")),(0,o.kt)("p",null,"A path to the video converter script must be defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{3}","{3}":!0}),"textconvert_script_path := $(touchgfx_path)/framework/tools/textconvert\ntextconvert_executable := $(call find, $(textconvert_script_path), *.rb)\nvideoconvert_script_path := $(touchgfx_path)/framework/tools/videoconvert\n")),(0,o.kt)("p",null,"An optional ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")," can be added to see all video objects files. The video object files must be added to the linking stage. This line has the $(video_object_files) added together with the other object files:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{2,6}","{2,6}":!0}),"$(binary_output_path)/$(target_executable): $(object_files) $(object_asm_files)\n    @echo Video Objects: $(video_object_files)\n    @echo Linking $(@)\n    @mkdir -p $(@D)\n    @mkdir -p $(object_output_path)\n    @$(file >$(build_root_path)/objects.tmp) $(foreach F,$(object_files) $(video_object_files),$(file >>$(build_root_path)/objects.tmp,$F))\n")),(0,o.kt)("p",null,"Add the video rule to the existing ",(0,o.kt)("em",{parentName:"p"},"assets")," and .PHONY:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{1,3}","{1,3}":!0}),"_assets_: BitmapDatabase TextKeysAndLanguages Videos\n\n.PHONY: BitmapDatabase TextKeysAndLanguages Videos\n")),(0,o.kt)("p",null,"The video rule is added with the video conversion added:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make"}),"Videos:\n    @ruby $(videoconvert_script_path)/videoconvert.rb $(asset_videos_input) $(asset_videos_output)\n")),(0,o.kt)("p",null,"Lastly update the clean rule to also remove video related output."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{8}","{8}":!0}),"_clean_:\n    @echo Cleaning: $(board_name)\n    @rm -rf $(build_root_path)\n    # Do not remove gui_generated\n    @rm -rf $(asset_images_output)\n    @rm -rf $(asset_fonts_output)\n    @rm -rf $(asset_texts_output)\n    @rm -rf $(asset_videos_output)\n    # Create directory to avoid error if it does not exist\n    @mkdir -p $(asset_root_path)\n    # Remove assets folder if it is empty (i.e. no gui_generated folder)\n    @rmdir --ignore-fail-on-non-empty $(asset_root_path)\n    # Clean bootloader project\n    @$(MAKE) -r -f ExtMem_Boot/gcc/Makefile -s $(MFLAGS) clean\n")),(0,o.kt)("h3",p({},{id:"software-changes"}),"Software changes"),(0,o.kt)("p",null,"Add all the LIBJPEG paths to the include paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{9-11}","{9-11}":!0}),"include_paths := $(library_includes) \\\n    $(foreach comp, $(all_components), $(comp)/include) \\\n    $(foreach comp, $(cubemx_components), $(comp)/Inc) \\\n    $(foreach comp, $(touchgfx_generator_components), $(comp)/generated) \\\n    $(framework_includes) \\\n    $(cubemx_middlewares_path) \\\n    $(touchgfx_middlewares_path) \\\n    $(touchgfx_generator_components) \\\n    LIBJPEG/Target \\\n    $(libjpeg_path)/include \\\n    LIBJPEG/App\n")),(0,o.kt)("p",null,"LIBJPEG source paths must be defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{4-5}","{4-5}":!0}),"c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)\nsource_files += $(board_cpp_files)\n\nlibjpeg_source_path = Middlewares/Third_Party/LibJPEG/source\n")),(0,o.kt)("p",null,"Next all the LIBJPEG source files must be added to board_c_files:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{10-37}","{10-37}":!0}),"board_c_files := \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_bus.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_qspi.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_sdram.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_ts.c \\\n    $(Drivers_path)/BSP/Components/ft5336/ft5336.c \\\n    $(Drivers_path)/BSP/Components/ft5336/ft5336_reg.c \\\n    $(Drivers_path)/BSP/Components/mt25tl01g/mt25tl01g.c \\\n    $(Drivers_path)/BSP/Components/mt48lc4m32b2/mt48lc4m32b2.c \\\n    $(libjpeg_source_path)/jaricom.c \\\n    $(libjpeg_source_path)/jcomapi.c \\\n    $(libjpeg_source_path)/jdapimin.c \\\n    $(libjpeg_source_path)/jdapistd.c \\\n    $(libjpeg_source_path)/jdarith.c \\\n    $(libjpeg_source_path)/jdatasrc.c \\\n    $(libjpeg_source_path)/jdcoefct.c \\\n    $(libjpeg_source_path)/jdcolor.c \\\n    $(libjpeg_source_path)/jddctmgr.c \\\n    $(libjpeg_source_path)/jdhuff.c \\\n    $(libjpeg_source_path)/jdinput.c \\\n    $(libjpeg_source_path)/jdmainct.c \\\n    $(libjpeg_source_path)/jdmarker.c \\\n    $(libjpeg_source_path)/jdmaster.c \\\n    $(libjpeg_source_path)/jdmerge.c \\\n    $(libjpeg_source_path)/jdpostct.c \\\n    $(libjpeg_source_path)/jdsample.c \\\n    $(libjpeg_source_path)/jdtrans.c \\\n    $(libjpeg_source_path)/jerror.c \\\n    $(libjpeg_source_path)/jidctflt.c \\\n    $(libjpeg_source_path)/jidctfst.c \\\n    $(libjpeg_source_path)/jidctint.c \\\n    $(libjpeg_source_path)/jmemmgr.c \\\n    $(libjpeg_source_path)/jmemnobs.c \\\n    $(libjpeg_source_path)/jquant1.c \\\n    $(libjpeg_source_path)/jquant2.c \\\n    $(libjpeg_source_path)/jutils.c \\\n    LIBJPEG/App/libjpeg.c\n")),(0,o.kt)("p",null,"The LIBJPEG source files are then added to the existing object files the same way it is done with the rest of the middleware source files:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{6}","{6}":!0}),"# Start converting paths\nobject_files := $(object_files:$(touchgfx_path)/%.cpp=$(object_output_path)/touchgfx/%.o)\nobject_files := $(object_files:%.cpp=$(object_output_path)/%.o)\nobject_files := $(object_files:$(touchgfx_middlewares_path)/%.c=$(object_output_path)/$(touchgfx_middlewares_path)/%.o)\nobject_files := $(object_files:$(cubemx_middlewares_path)/%.c=$(object_output_path)/$(cubemx_middlewares_path)/%.o)\nobject_files := $(object_files:$(libjpeg_source_path)/%.c=$(object_output_path)/$(libjpeg_source_path)/%.o)\nobject_files := $(object_files:$(Drivers_path)/%.c=$(object_output_path)/Drivers/%.o)\nobject_files := $(object_files:%.c=$(object_output_path)/%.o)\n")),(0,o.kt)("h3",p({},{id:"hardware-changes"}),"Hardware changes"),(0,o.kt)("p",null,"Add all the JPEG paths to the include paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{9}","{9}":!0}),"include_paths := $(library_includes) \\\n    $(foreach comp, $(all_components), $(comp)/include) \\\n    $(foreach comp, $(cubemx_components), $(comp)/Inc) \\\n    $(foreach comp, $(touchgfx_generator_components), $(comp)/generated) \\\n    $(framework_includes) \\\n    $(cubemx_middlewares_path) \\\n    $(touchgfx_middlewares_path) \\\n    $(touchgfx_generator_components) \\\n    Utilities/JPEG\n")),(0,o.kt)("p",null,"Next all the JPEG source files must be added to board_c_files:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-make",metastring:"{10}","{10}":!0}),"board_c_files := \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_bus.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_qspi.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_sdram.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_ts.c \\\n    $(Drivers_path)/BSP/Components/ft5336/ft5336.c \\\n    $(Drivers_path)/BSP/Components/ft5336/ft5336_reg.c \\\n    $(Drivers_path)/BSP/Components/mt25tl01g/mt25tl01g.c \\\n    $(Drivers_path)/BSP/Components/mt48lc4m32b2/mt48lc4m32b2.c \\\n    Utilities/JPEG/jpeg_utils.c\n")),(0,o.kt)("h2",p({},{id:"placing-video-buffer-in-external-memory"}),"Placing Video Buffer in External Memory"),(0,o.kt)("p",null,"When developers create new projects with STM32CubeMX, the linker scripts associated with the generated projects do not contain any of the possible regions used by TouchGFX. Because of this, the specific buffer used to decode MJPEG videos is placed in internal flash by the linker until developers modify their linker scripts to place the buffer elsewhere. Without such modifications developers will experience large internal memory usage and perhaps inability to fit a large video buffer, like for full screen video decoding."),(0,o.kt)(s.Z,{mdxType:"Tip"},"The following TBSs are preconfigured and ready to decode videos from external memory:",(0,o.kt)("ol",null,(0,o.kt)("li",null,"STM32F746-DISCO"),(0,o.kt)("li",null,"STM32F769-DISCO"),(0,o.kt)("li",null,"STM32H750-DK"))),(0,o.kt)("p",null,"The definition for the RGB buffer dedicated to JPEG decoding is generated by TouchGFX Generator when video decoding is enabled. The definition is instrumented with a location pragma that tells the linker which section the buffer should be placed in. If the linker cannot find this memory region in the linker script the buffer will be placed in internal memory."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),'LOCATION_PRAGMA_NOLOAD("Video_RGB_Buffer")\nuint32_t videoRGBBuffer[57600] LOCATION_ATTRIBUTE_NOLOAD("Video_RGB_Buffer");\n')),(0,o.kt)("p",null,"The following compiler-specific subsections describe the modifications that developers can make to achieve placing the buffer in SDRAM. ",(0,o.kt)("inlineCode",{parentName:"p"},"Video_RGB_Buffer")," represents the buffer used for video decoding. The linker script examples reserve some space in SDRAM (starting at ",(0,o.kt)("inlineCode",{parentName:"p"},"0xC0000000"),") for TouchGFX framebuffer(s)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"EWARM"),(0,o.kt)("li",{parentName:"ol"},"STM32CubeIDE"),(0,o.kt)("li",{parentName:"ol"},"MDK-ARM")),(0,o.kt)(r.Z,{mdxType:"FurtherReading"},"Please read the section in the ",(0,o.kt)(d.Z,{to:"../../touchgfx-hal-development/generator-how-to/touchgfx-al-configuration/video-decoding",mdxType:"Link"},"Generator User Guide"),"  on configuring a project for Video Decoding."),(0,o.kt)("p",null,"The following examples all reserves some space at the start of SDRAM on an STM32F746G-DISCO board (",(0,o.kt)("inlineCode",{parentName:"p"},"0xC0000000"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"0xC00FF000"),"), allowing the application to reference framebuffers by address (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"0xC0000000"),") without the risk of the linker overwriting framebuffer data. Each example will allow the linker to place ",(0,o.kt)("inlineCode",{parentName:"p"},"Video_RGB_Buffer")," into the defined SDRAM region."),(0,o.kt)(s.Z,{mdxType:"Tip"},"If you're allocating the Touchgfx framebuffers rather than using directly addressing then your linker script should also place ",(0,o.kt)("b",null,"TouchGFX_Framebuffer")," into SDRAM."),(0,o.kt)("h3",p({},{id:"ewarm-iar"}),"EWARM (IAR)"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"stm32f746xx_flash.icf"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"define symbol __ICFEDIT_region_SDRAM_start__   = 0xC00FF000;\ndefine symbol __ICFEDIT_region_SDRAM_end__     = 0xC0700FFF;\n\ndefine region SDRAM_region    = mem:[from __ICFEDIT_region_SDRAM_start__ to __ICFEDIT_region_SDRAM_end__];\n\nplace in SDRAM_region    { first section Video_RGB_Buffer };\n")),(0,o.kt)("p",null,"After linking, ",(0,o.kt)("inlineCode",{parentName:"p"},"EWARM\\STM32F746G_DISCO\\List\\STM32F746G_DISCO.map")," contains the following placement information for ",(0,o.kt)("inlineCode",{parentName:"p"},"Video_RGB_Buffer"),":"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"STM32F746G_DISCO.map"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"Video_RGB_Buffer        zero     0xc00f'f000   0x3'8400  TouchGFXGeneratedHAL.o [2]\n                               - 0xc013'7400   0x3'8400\n")),(0,o.kt)("h3",p({},{id:"stm32cubeide"}),"STM32CubeIDE"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"STM32F746NGHX_FLASH.ld"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"MEMORY\n{\n  ...\n  SDRAM      (xrw)    : ORIGIN = 0xC00FF000,   LENGTH = 8M\n}\n\nBufferSection (NOLOAD) :\n{\n  *(Video_RGB_Buffer Video_RGB_Buffer.*)\n  *(.gnu.linkonce.r.*)\n  . = ALIGN(0x4);\n} >SDRAM\n\n")),(0,o.kt)("p",null,"After compilation, ",(0,o.kt)("inlineCode",{parentName:"p"},"STM32CubeIDE\\Debug\\STM32F746G_DISCO.map")," contains the following placement information for ",(0,o.kt)("inlineCode",{parentName:"p"},"Video_RGB_Buffer"),":"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"STM32F746G_DISCO.map"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"BufferSection   0x00000000c00ff000    0x1c200\n *(Video_RGB_Buffer Video_RGB_Buffer.*)\n Video_RGB_Buffer\n                0x00000000c00ff000    0x1c200 Application/User/TouchGFX/target/generated/TouchGFXGeneratedHAL.o\n                0x00000000c00ff000                videoRGBBuffer\n")),(0,o.kt)("h3",p({},{id:"mdk-arm-keil"}),"MDK-ARM (Keil)"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"STM32F746G_DISCO.sct"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"LR_IROM1 0x08000000 0x00200000  {    ; load region size_region\n  ER_IROM1 0x08000000 0x00200000  {  ; load address = execution address\n    *.o (RESET, +First)\n    *(InRoot$$Sections)\n    .ANY (+RO)\n  }\n  RW_IRAM1 0x20000000 0x00050000  {  ; RW data\n    .ANY (+RW +ZI)\n  }\n  RW_SDRAM 0xC00FF000 UNINIT 0xC0700FFF  {\n    *.o (Video_RGB_Buffer)\n  }\n}\n")),(0,o.kt)("p",null,"Make sure to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"UNINIT")," attribute in the section that holds the Video Buffer. This ensures leaving the memory region as uninitialized data. After linking, ",(0,o.kt)("inlineCode",{parentName:"p"},"MDK-ARM\\STM32F746G_DISCO\\STM32F746G_DISCO.map")," contains the following placement information for ",(0,o.kt)("inlineCode",{parentName:"p"},"Video_RGB_Buffer"),":"),(0,o.kt)(l.Z,{mdxType:"CodeHeader"},"STM32F746G_DISCO.map"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),"Video_RGB_Buffer                         0xc00ff000   Section    115200  touchgfxgeneratedhal.o(Video_RGB_Buffer)\n")))}v.isMDXComponent=!0}}]);
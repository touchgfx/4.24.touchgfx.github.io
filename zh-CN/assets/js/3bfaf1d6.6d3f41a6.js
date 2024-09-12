"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[14987],{49613:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(o),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return o?n.createElement(m,a(a({ref:t},d),{},{components:o})):n.createElement(m,a({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},28128:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(59496);class r extends n.Component{render(){return n.createElement("div",{className:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}const i=r},89639:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(59496),r=o(7029);const i=function(e){const t=e.noShadow||!1,o=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:o,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:o,height:i,src:a})),n.createElement("p",null,e.children))}},13279:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>u});o(59496);var n=o(49613),r=o(89639),i=o(28128);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const c={id:"converting-keil5-project-to-keil6",title:"Converting a Keil compiler 5 project to Keil compiler 6"},s=void 0,d={unversionedId:"development/scenarios/converting-keil5-project-to-keil6",id:"development/scenarios/converting-keil5-project-to-keil6",title:"Converting a Keil compiler 5 project to Keil compiler 6",description:"Introduction",source:"@site/docs/development/scenarios/converting-keil5-project-to-keil6.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/converting-keil5-project-to-keil6",permalink:"/4.24/zh-CN/docs/development/scenarios/converting-keil5-project-to-keil6",draft:!1,tags:[],version:"current",frontMatter:{id:"converting-keil5-project-to-keil6",title:"Converting a Keil compiler 5 project to Keil compiler 6"},sidebar:"docs",previous:{title:"\u5411STM32CubeMX\u5de5\u7a0b\u4e2d\u6dfb\u52a0\u6587\u4ef6",permalink:"/4.24/zh-CN/docs/development/scenarios/adding-files-to-stm32cubemx-projet"},next:{title:"Miscellaneous",permalink:"/4.24/zh-CN/docs/category/miscellaneous-1"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Change toolchain in STM32CubeMX",id:"change-toolchain",level:2},{value:"Generate code in TouchGFX designer",id:"generate-code",level:2},{value:"Modify the Keil Scatter file",id:"modify-scatter",level:2},{value:"Modify the Keil project options",id:"modify-project-options",level:2},{value:"Modify the Keil project included files",id:"modify-project-included-files",level:2}],h={toc:u},m="wrapper";function f(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)(m,a({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"introduction"}),"Introduction"),(0,n.kt)("p",null,"STM32CubeMX does not support generation of Keil compiler 6 / armclang projects for all MCU's. In order to use Keil compiler 6 with TouchGFX in these scenarios, the following steps should be taken to convert the project."),(0,n.kt)("p",null,"It is recommended to back up your project before following the guide, in case you'll have to undo your changes."),(0,n.kt)("h2",a({},{id:"change-toolchain"}),"Change toolchain in STM32CubeMX"),(0,n.kt)("p",null,'First, change the toolchain in the "Project Manager" tab in STM32CubeMX to MDK-ARM, so a Keil project is created. Then, generate code.'),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/cubemx-toolchain.webp",mdxType:"Figure"},"MDK-ARM toolchain selected"),(0,n.kt)("h2",a({},{id:"generate-code"}),"Generate code in TouchGFX designer"),(0,n.kt)("p",null,"Generate code from the TouchGFX designer by pressing the button or the F4 key on your keyboard, to add the TouchGFX specific code to the project."),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/designer-generate.webp",mdxType:"Figure"},"Generate code"),(0,n.kt)("h2",a({},{id:"modify-scatter"}),"Modify the Keil Scatter file"),(0,n.kt)("p",null,"The scatter file that Keil uses to link the project needs some tweaks to ensure that buffers created by TouchGFX are not initialized, since they are usually placed in external ram, which is not accessible at boot.",(0,n.kt)("br",{parentName:"p"}),"\n","Look through the .sct file in the MDK-ARM subfolder of the project to identify which buffers are used for the project, and add .bss. before the object name.",(0,n.kt)("br",{parentName:"p"}),"\n","The objects are called TouchGFX_Framebuffer, Video_RGB_Buffer, Nemagfx_Memory_Pool_Buffer and Nemagfx_Stencil_Buffer, but they are not necessarily all used in the project."),(0,n.kt)(i.Z,{mdxType:"CodeHeader"},"Example of updated scatter file"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"; *************************************************************\n; *** Scatter-Loading Description File generated by uVision ***\n; *************************************************************\n\nLR_IROM1 0x08000000 0x00100000  {    ; load region size_region\n  ER_IROM1 0x08000000 0x00100000  {  ; load address = execution address\n   *.o (RESET, +First)\n   *(InRoot$$Sections)\n   .ANY (+RO)\n  }\n  RW_IRAM1 0x24000000 0x00080000  {  ; RW data\n   .ANY (+RW +ZI)\n  }\n  RW_HYPERRAM 0x70000000 UNINIT 0x00FFFFFF {\n    *.o (.bss.TouchGFX_Framebuffer)\n    *.o (.bss.Video_RGB_Buffer)\n  }\n}\n\nLR_EROM1 0x90000000 0x2000000  {    ; load region size_region\n  ER_EROM1 0x90000000 0x2000000  {  ; load address = execution address\n   *.o (ExtFlashSection)\n;  *.o (TextFlashSection)\n;  *.o (FontFlashSection)\n  }\n}\n")),(0,n.kt)("h2",a({},{id:"modify-project-options"}),"Modify the Keil project options"),(0,n.kt)("p",null,'Open the project in Keil uVision, then go to the project settings, either by right-clicking the second item in the list on the right and selecting "Options for Target ',(0,n.kt)("em",{parentName:"p"},"xxx"),'", or by clicking the "Project" menu at the top and selecting "Options for Target ',(0,n.kt)("em",{parentName:"p"},"xxx"),'".',(0,n.kt)("br",{parentName:"p"}),"\n",'In the "target" tab, select the following settings:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Set compiler to "Use default compiler 6"  '),(0,n.kt)("li",{parentName:"ul"},"Disable Use MicroLIB  ")),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/keil-target-options.webp",mdxType:"Figure"},"Target options"),(0,n.kt)("p",null,"In the C/C++ tab, select the following settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"set language c to c11 and c++ to c++11"),(0,n.kt)("li",{parentName:"ul"},"Disable short enums/wchar"),(0,n.kt)("li",{parentName:"ul"},"Recommended Optimization is -Oz for smaller code size")),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/keil-c-cpp-options.webp",mdxType:"Figure"},"C/C++ options"),(0,n.kt)("p",null,"If FreeRTOS is being used, the port needs to be changed to gcc, which is compatible with Keil compiler 6. The gcc port is used by TouchGFX, so it is available in the project, although it is not generated by STM32CubeMX when Keil project generation is selected.",(0,n.kt)("br",{parentName:"p"}),"\n",'To make the change, the first step is to change the include search path for the port. Click on "..." next to the ',(0,n.kt)("em",{parentName:"p"},"Include paths")," text field.",(0,n.kt)("br",{parentName:"p"}),"\n",'Locate the line that starts with "../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS". Then add "/gcc" after "..", and change "RVDS" to "GCC".'),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/keil-include-path-modified.webp",mdxType:"Figure"},"Modify include search path"),(0,n.kt)("p",null,"Note that for some revisions of Cortex M7, FreeRTOS recommends using the Cortex M4f port. This applies to STM32H7 series chips, and the original search path should reflect that."),(0,n.kt)("h2",a({},{id:"modify-project-included-files"}),"Modify the Keil project included files"),(0,n.kt)("p",null,"To be able to link the TouchGFX library, it is needed to change the one that is included in the project to a Keil compiler 6 compatible version.\nTo do this, locate the touchgfx_core.lib file in the file tree (it should be located under the ",(0,n.kt)("em",{parentName:"p"},'"Lib"'),' category), right click the parent folder and click "Add Existing File to Group ',(0,n.kt)("em",{parentName:"p"},"xxx"),'".'),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/keil-add-item.webp",mdxType:"Figure"},"Click add"),(0,n.kt)("p",null,'Navigate to "',"[Project folder]","/Middlewares/ST/touchgfx/lib/core/","[Architecture]",'/Keil6.x" and add "touchgfx_core_wchar32.lib".',(0,n.kt)("br",{parentName:"p"}),"\n","[Architecture]"," in this case refers to the actual architecture of the MCU. If in doubt, check the location of the existing library."),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/keil-add-tgfxlib.webp",mdxType:"Figure"},"Add touchgfx_core_wchar32.lib"),(0,n.kt)("p",null,'Then find the old libary reference in the file tree, right click it and click "Remove File ',(0,n.kt)("em",{parentName:"p"},"xxx"),'".'),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/keil-remove-tgfxlib.webp",mdxType:"Figure"},"Delete reference"),(0,n.kt)("p",null,'If using FreeRTOS, it is also needed to replace the port.c file. Locate it under "Middlewares/FreeRTOS", and delete the file as described above. Then, import the new port.c file located in "',"[Project folder]","/gcc/Middlewares/Third_Party/FreeRTOS/Source/portable/GCC/","[FreeRTOS architecture]",'".'),(0,n.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/scenarios/convert-keil5-to-keil6/keil-add-portc.webp",mdxType:"Figure"},"Add port.c"),(0,n.kt)("p",null,"The project should be able to compile succesfully at this point.",(0,n.kt)("br",{parentName:"p"}),"\n","It is advised to create a copy of the project folder at this state as a reference, since regeneration in both STM32CubeMX and TouchGFX may undo some of the changes."))}f.isMDXComponent=!0}}]);
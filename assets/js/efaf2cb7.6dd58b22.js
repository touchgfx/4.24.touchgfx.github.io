"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[34233],{49613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>c});var n=i(59496);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(i),m=a,c=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return i?n.createElement(c,r(r({ref:t},u),{},{components:i})):n.createElement(c,r({ref:t},u))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},89639:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(59496),a=i(7029);const o=function(e){const t=e.noShadow||!1,i=e.width,o=e.height,r=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:r,target:"_blank"},n.createElement("img",{width:i,height:o,src:r})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:r,target:"_blank"},n.createElement("img",{width:i,height:o,src:r})),n.createElement("p",null,e.children))}},48753:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(59496),a=i(96151);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const l=r},96151:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(59496);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},11995:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(59496);class a extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}const o=a},6871:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>c});i(59496);var n=i(49613),a=i(89639),o=i(11995),r=i(48753),l=i(95375);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}const u={id:"config-view",title:"Config View"},p=void 0,h={unversionedId:"development/ui-development/designer-user-guide/config-view",id:"development/ui-development/designer-user-guide/config-view",title:"Config View",description:"In the Config View various settings affecting the project can be configured in the following sections: General, Display, Default Image Configuration, Text Configuration, Simulator, Build and Framework Features.",source:"@site/docs/development/ui-development/designer-user-guide/config-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/config-view",permalink:"/4.24/docs/development/ui-development/designer-user-guide/config-view",draft:!1,tags:[],version:"current",frontMatter:{id:"config-view",title:"Config View"},sidebar:"docs",previous:{title:"Texts View",permalink:"/4.24/docs/development/ui-development/designer-user-guide/texts-view"},next:{title:"Interactions",permalink:"/4.24/docs/development/ui-development/designer-user-guide/interactions-view"}},m={},c=[{value:"General",id:"general",level:2},{value:"Application Name",id:"application-name",level:4},{value:"TouchGFX Board Setup",id:"touchgfx-board-setup",level:4},{value:"Selected Language",id:"selected-language",level:4},{value:"Startup Screen",id:"startup-screen",level:4},{value:"Display",id:"display",level:2},{value:"Dimensions",id:"dimensions",level:4},{value:"Display Orientation",id:"display-orientation",level:4},{value:"Color Depth",id:"color-depth",level:4},{value:"Default Image Configuration",id:"default-image-configuration",level:2},{value:"Opaque Image Format",id:"opaque-image-format",level:4},{value:"Non Opaque Image Format",id:"non-opaque-image-format",level:4},{value:"Section",id:"section",level:4},{value:"Extra Section",id:"extra-section",level:4},{value:"Dither Algorithm",id:"dither-algorith",level:4},{value:"Alpha Dither",id:"alpha-dither",level:4},{value:"Layout Rotation",id:"layout-rotation",level:4},{value:"Text Configuration",id:"text-configuration",level:2},{value:"Remap texts",id:"remap-texts",level:4},{value:"A4",id:"a4",level:4},{value:"Binary translation files",id:"binary-translation-files",level:4},{value:"Binary font files",id:"binary-font-files",level:4},{value:"Mapped storage format",id:"mapped-storage-format",level:4},{value:"Unmapped storage format",id:"unmapped-storage-format",level:4},{value:"Simulator",id:"simulator",level:2},{value:"Build",id:"build",level:2},{value:"Generate Assets Command",id:"generate-assets-command",level:4},{value:"Post Generate Command",id:"post-generate-command",level:4},{value:"Compile Simulator Command",id:"compile-simulator-command",level:4},{value:"Run Simulator Command",id:"run-simulator-command",level:4},{value:"Post Generate Target Command",id:"post-generate-command",level:4},{value:"Compile Target Command",id:"compile-target-command",level:4},{value:"Flash Target Command",id:"flash-target-command",level:4},{value:"Flash Target Internal Command",id:"flash-target-internal-command",level:4},{value:"Framework Features",id:"framework-features",level:2}],g={toc:c},f="wrapper";function v(e){var{components:t}=e,i=d(e,["components"]);return(0,n.kt)(f,s({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the Config View various settings affecting the project can be configured in the following sections: ",(0,n.kt)("a",s({parentName:"p"},{href:"#general"}),"General"),", ",(0,n.kt)("a",s({parentName:"p"},{href:"#display"}),"Display"),", ",(0,n.kt)("a",s({parentName:"p"},{href:"#default-image-configuration"}),"Default Image Configuration"),", ",(0,n.kt)("a",s({parentName:"p"},{href:"#text-configuration"}),"Text Configuration"),", ",(0,n.kt)("a",s({parentName:"p"},{href:"#simulator"}),"Simulator"),", ",(0,n.kt)("a",s({parentName:"p"},{href:"#simulator"}),"Build")," and ",(0,n.kt)("a",s({parentName:"p"},{href:"#framework-features"}),"Framework Features"),"."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.webp",mdxType:"Figure"},"General settings in Config View"),(0,n.kt)("h2",s({},{id:"general"}),"General"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general.webp",mdxType:"Figure"},"General settings in Config View"),(0,n.kt)("h4",s({},{id:"application-name"}),"Application Name"),(0,n.kt)("p",null,"Application name is a readonly field, displaying the name that was chosen for the application when it was created."),(0,n.kt)("h4",s({},{id:"touchgfx-board-setup"}),"TouchGFX Board Setup"),(0,n.kt)("p",null,"This field shows the TouchGFX Board Setup the application was created with, if this information is not available 'N/A' will be displayed.",(0,n.kt)("br",null),"\nIf this information is available, the name of the TouchGFX Board Setup will be displayed along with the version."),(0,n.kt)("h4",s({},{id:"selected-language"}),"Selected Language"),(0,n.kt)("p",null,"This dropdown contains the languages configured in the ",(0,n.kt)("a",s({parentName:"p"},{href:"texts-view"}),"Texts")," View, and selects which language should be displayed at startup of the project."),(0,n.kt)("h4",s({},{id:"startup-screen"}),"Startup Screen"),(0,n.kt)("p",null,"This dropdown contains all the screens that have been added to the project, and selects which screen to display at startup of the project."),(0,n.kt)("h2",s({},{id:"display"}),"Display"),(0,n.kt)("p",null,"In this section the settings for the Display can be configured."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.webp",mdxType:"Figure"},"Display settings in Config View"),(0,n.kt)("h4",s({},{id:"dimensions"}),"Dimensions"),(0,n.kt)("p",null,"The size of the display can be set through the ",(0,n.kt)("em",{parentName:"p"},"W(width)")," and ",(0,n.kt)("em",{parentName:"p"},"H(height)")," properties. However if the size has been configured by the TouchGFX Board Setup, configuration of the size will be disabled."),(0,n.kt)("h4",s({},{id:"display-orientation"}),"Display Orientation"),(0,n.kt)("p",null,"The orientation of the display can be toggled between Landscape and Portrait orientations. This will also affect how images used in a project are converted to cpp files."),(0,n.kt)("h4",s({},{id:"color-depth"}),"Color Depth"),(0,n.kt)("p",null,"This dropdown contains the color depths that are available to a project. These are determined by the TouchGFX Board Setup used to create a project."),(0,n.kt)("h2",s({},{id:"default-image-configuration"}),"Default Image Configuration"),(0,n.kt)("p",null,"In this section the default configuration used for images in a project can be set. These settings will affect all images in the project, unless they are overwriten in the ",(0,n.kt)("a",s({parentName:"p"},{href:"images-view"}),"Images")," View"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration.webp",mdxType:"Figure"},"Default Image Configuration settings in Config View"),(0,n.kt)("h4",s({},{id:"opaque-image-format"}),"Opaque Image Format"),(0,n.kt)("p",null,"This dropdown sets which format images that have only opaque pixel data should be generated with. The available image formats in this dropdown depend on the selected color depth of the project."),(0,n.kt)("h4",s({},{id:"non-opaque-image-format"}),"Non Opaque Image Format"),(0,n.kt)("p",null,"This dropdown sets which format images that have non-opaque pixel data should be generated with. The available image formats in this dropdown depend on the selected color depth of the project."),(0,n.kt)("h4",s({},{id:"section"}),"Section"),(0,n.kt)("p",null,"This dropdown sets the location where image data should be stored on the target hardware. The available sections in this dropdown depend on the TouchGFX Board Setup that the project was created with."),(0,n.kt)("h4",s({},{id:"extra-section"}),"Extra Section"),(0,n.kt)("p",null,"When using L8 image formats you can choose to store the color table in a different section using this dropdown. The available sections in this dropdown depend on the TouchGFX Board Setup that the project was created with."),(0,n.kt)("h4",s({},{id:"dither-algorith"}),"Dither Algorithm"),(0,n.kt)("p",null,"This dropdown sets the dithering algorithm used for images."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No dither: ",(0,n.kt)("em",{parentName:"li"},"no dithering is applied to the image. This is the setting with the highest performance since no alteration is made. However, depending on the image, the quality of the image may also degrade visually at lower color depths.")),(0,n.kt)("li",{parentName:"ul"},"Floyd-Steinberg: ",(0,n.kt)("em",{parentName:"li"},"diffuses the error to neighboring pixels, resulting in fine-grained dithering but sacrificing sharpness.")),(0,n.kt)("li",{parentName:"ul"},"Jarvis, Judice and Ninke: ",(0,n.kt)("em",{parentName:"li"},"diffuses the error to pixels one step further away compared to Floyd-Steinberg, resulting in coarser dithering but a sharper image. The slowest of the 3 error-diffusion dithering algorithms.")),(0,n.kt)("li",{parentName:"ul"},"Stucki: ",(0,n.kt)("em",{parentName:"li"},"based on minimized average error dithering but faster and cleaner."))),(0,n.kt)("h4",s({},{id:"alpha-dither"}),"Alpha Dither"),(0,n.kt)("p",null,"This dropdown sets whether or not to use the dither algorithm through the alpha channel."),(0,n.kt)("h4",s({},{id:"layout-rotation"}),"Layout Rotation"),(0,n.kt)("p",null,"This dropdown specifies the rotation of the image data when generated. If the screen orientation is changed, use this to correctly render images in the new orientation."),(0,n.kt)("h2",s({},{id:"text-configuration"}),"Text Configuration"),(0,n.kt)("p",null,"In this section options for text rendering and storage can be configured by checking the boxes that fit your project's needs."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.webp",mdxType:"Figure"},"Text Configuration settings in Config View"),(0,n.kt)("h4",s({},{id:"remap-texts"}),"Remap texts"),(0,n.kt)("p",null,"This option defines whether or not translations that are identical should be remapped.\nRemapping texts will combine identical translations and suffixes across all languages, typographies and alignments, resulting in a reduced footprint.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Binary translation files'")),(0,n.kt)("h4",s({},{id:"a4"}),"A4"),(0,n.kt)("p",null,"This option defines whether or not the horizontal pixel data of glyphs byte are aligned into an A4 format.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"},"This only affects typographies that are configured as 4bpp")),(0,n.kt)("h4",s({},{id:"binary-translation-files"}),"Binary translation files"),(0,n.kt)("p",null,"This option defines whether or not the translations in a project should be moved into binary files that can be loaded at runtime.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Remap texts'")),(0,n.kt)("h4",s({},{id:"binary-font-files"}),"Binary font files"),(0,n.kt)("p",null,"This option defines whether or not the font files in a project should be moved into binary files that can be loaded at runtime."),(0,n.kt)("h4",s({},{id:"mapped-storage-format"}),"Mapped storage format"),(0,n.kt)("p",null,"This option defines if the font files in a project should be output in mapped storage format."),(0,n.kt)("h4",s({},{id:"unmapped-storage-format"}),"Unmapped storage format"),(0,n.kt)("p",null,"This option defines if the font files in a project should be output in unmapped storage format."),(0,n.kt)(r.Z,{mdxType:"FurtherReading"},(0,n.kt)(l.Z,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"Text and Fonts")),(0,n.kt)("h2",s({},{id:"simulator"}),"Simulator"),(0,n.kt)("p",null,"In this section, a skin can be added to the Simulator when running it. A skin can be added for both Landscape and Portrait orientated projects.\nThe ",(0,n.kt)("em",{parentName:"p"},"X")," and ",(0,n.kt)("em",{parentName:"p"},"Y")," properties determine the position of the simulator on the skin."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.webp",mdxType:"Figure"},"Simulator settings in Config View"),(0,n.kt)("p",null,"Below is a demonstration of a simulator running with a skin.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"},"When a simulator runs with a skin, the standard window controls are hidden. To close the simulator press")," ",(0,n.kt)(o.Z,{mdxType:"Shortcut"},"Esc")),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.webp",mdxType:"Figure"},"Simulator running with a skin"),(0,n.kt)("h2",s({},{id:"build"}),"Build"),(0,n.kt)("p",null,"In this section the commands that are executed when pressing ",(0,n.kt)("a",s({parentName:"p"},{href:"main-window#run-simulator"}),"'Run Simulator'"),", ",(0,n.kt)("a",s({parentName:"p"},{href:"main-window#run-target"}),"'Run Target'")," and ",(0,n.kt)("a",s({parentName:"p"},{href:"main-window#generate-code"}),"'Generate Code'"),", can be overwritten."),(0,n.kt)("p",null,"To overwrite a command, simply write any command in the text boxes. To reset a command, if it has been overwritten, press the 'Reset' label next to the name of the Command."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.webp",mdxType:"Figure"},"Build settings in Config View"),(0,n.kt)("h4",s({},{id:"generate-assets-command"}),"Generate Assets Command"),(0,n.kt)("p",null,"This command is usually set up to generate text and image assets, and is executed after the TouchGFX Designer has generated the code."),(0,n.kt)("h4",s({},{id:"post-generate-command"}),"Post Generate Command"),(0,n.kt)("p",null,"This command is usually used to update various project files. The built-in ",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx update_project")," commandline tool supports updating the following project files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visual Studio (.vcxproj)"),(0,n.kt)("li",{parentName:"ul"},"Keil (.uvprojx)"),(0,n.kt)("li",{parentName:"ul"},"IAR (.ewp & .ipcf)"),(0,n.kt)("li",{parentName:"ul"},"STM32CubeIDE (.project & .cproject)"),(0,n.kt)("li",{parentName:"ul"},"STM32CubeMX (.ioc)")),(0,n.kt)("p",null,"However, any command that needs to be executed after code generation can be written here."),(0,n.kt)("h4",s({},{id:"compile-simulator-command"}),"Compile Simulator Command"),(0,n.kt)("p",null,"This command executes the compilation of a project for the simulator, usually by executing the Makefile generated by the TouchGFX Designer."),(0,n.kt)("h4",s({},{id:"run-simulator-command"}),"Run Simulator Command"),(0,n.kt)("p",null,"This command executes the startup of the simulator.exe."),(0,n.kt)("h4",s({},{id:"post-generate-command"}),"Post Generate Target Command"),(0,n.kt)("p",null,"This command is usually used to update various project files, mostly STM32CubeMX (.ioc) project files."),(0,n.kt)("p",null,"However, any command that needs to be executed after code generation can be written here."),(0,n.kt)("h4",s({},{id:"compile-target-command"}),"Compile Target Command"),(0,n.kt)("p",null,"This command executes the compilation of a project for the target hardware."),(0,n.kt)("h4",s({},{id:"flash-target-command"}),"Flash Target Command"),(0,n.kt)("p",null,"This command executes the flashing of a project to the target hardware."),(0,n.kt)("h4",s({},{id:"flash-target-internal-command"}),"Flash Target Internal Command"),(0,n.kt)("p",null,"This command executes the flashing of a project to the target hardware when the ",(0,n.kt)("a",s({parentName:"p"},{href:"main-window#run-target-internal"}),"Flash Internal")," option is enabled."),(0,n.kt)("h2",s({},{id:"framework-features"}),"Framework Features"),(0,n.kt)("p",null,"In this section features in the framework, specifically which image formats the Texture Mapper widget supports, can be enabled/disabled. This can be used for optimizing the code size a project takes up on the target hardware."),(0,n.kt)("p",null,"The available options displayed in this section depend upon which color depth has been chosen for the project. In the image below the image formats for a 24 bit color depth Texture Mapper is shown."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.webp",mdxType:"Figure"},"Framework Features settings for 24bpp in Config View"))}v.isMDXComponent=!0}}]);
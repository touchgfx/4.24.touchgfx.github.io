"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[56506],{49613:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},89639:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(59496),r=o(7029);const a=function(e){const t=e.noShadow||!1,o=e.width,a=e.height,i=(0,r.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:o,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:o,height:a,src:i})),n.createElement("p",null,e.children))}},35249:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(59496),r=o(7029);const a=function(e){const t=(0,r.Z)(e.url);var o;const a=null!==(o=e.width)&&void 0!==o?o:"100%";var i;const c=null!==(i=e.height)&&void 0!==i?i:"100%";return n.createElement("div",{className:"loop-video"},n.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:c},n.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),n.createElement("p",null,e.children))}},22755:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});o(59496);var n=o(49613),r=o(89639),a=o(35249);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const l={id:"getting-started",title:"Getting Started"},s=void 0,u={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"A prerequisite to get started using TouchGFX is to install the newest version of TouchGFX, which is described in the Installation section.",source:"@site/docs/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/4.24/docs/introduction/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",previous:{title:"Installation",permalink:"/4.24/docs/introduction/installation"},next:{title:"Basic Concepts",permalink:"/4.24/docs/category/basic-concepts"}},d={},p=[{value:"TouchGFX Quick Start",id:"touchgfx-quick-start",level:2},{value:"TouchGFX Board Setups + Examples and Demos",id:"application-template--ui-template",level:3},{value:"Board Specific Demos",id:"online-applications",level:3},{value:"What&#39;s Next",id:"whats-next",level:2}],h={toc:p},m="wrapper";function f(e){var{components:t}=e,o=c(e,["components"]);return(0,n.kt)(m,i({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A prerequisite to get started using TouchGFX is to install the newest version of TouchGFX, which is described in the ",(0,n.kt)("a",i({parentName:"p"},{href:"installation"}),"Installation")," section."),(0,n.kt)(r.Z,{imageSource:"/img/introduction/getting-started/computer-2-screens.webp",noShadow:!0,mdxType:"Figure"}," "),(0,n.kt)("p",null,"After this is done you are ready to begin your very first TouchGFX project. It is highly recommended that you read some key sections of this documentation to get familiar with the very basic of TouchGFX concepts.\nThe most essential section is the ",(0,n.kt)("a",i({parentName:"p"},{href:"../development/development-introduction"}),"Development Introduction")," which will give you an introduction to the software and hardware components needed for a complete TouchGFX project and the activities and tools involved in creating them. It also describes how to get started doing a fast prototype using premade components."),(0,n.kt)("h2",i({},{id:"touchgfx-quick-start"}),"TouchGFX Quick Start"),(0,n.kt)("p",null,"If you are eager to start experimenting with TouchGFX, trying out an example UI project and maybe running it on an STM32 Evaluation Kit, a wide range of TouchGFX Board Setups together with GUI Examples and Demos exists in TouchGFX Designer."),(0,n.kt)("h3",i({},{id:"application-template--ui-template"}),"TouchGFX Board Setups + Examples and Demos"),(0,n.kt)("p",null,"To create a TouchGFX project based on a TouchGFX Board Setup go ahead and start the TouchGFX Designer."),(0,n.kt)(a.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"Creating an application with a TouchGFX Board Setup and an Example"),(0,n.kt)("p",null,"On the lobby in TouchGFX Designer you can select from a wide range of examples and demos to start from. You can even combine this with board specific code for a range of STM32 Evaluation Kits, so you can have an UI running on the embedded hardware right away."),(0,n.kt)("p",null,"If you do not have an STM32 Evaluation Kit, you can simply run the TouchGFX application on your PC. If you want to be guided through the first steps, you can have a look at the ",(0,n.kt)("a",i({parentName:"p"},{href:"../../academy/tutorials/tutorial-01"}),"Tutorials")," and ",(0,n.kt)("a",i({parentName:"p"},{href:"../../academy/how-to/how-to-introduction"}),"''How to TouchGFX'' videos")," in ",(0,n.kt)("a",i({parentName:"p"},{href:"../../academy/academy-introduction"}),"TouchGFX Academy"),". Here you will be shown how to get a project up and running, ending with doing a rather complex UI application."),(0,n.kt)("h3",i({},{id:"online-applications"}),"Board Specific Demos"),(0,n.kt)("p",null,"Aside from being able to combine a TouchGFX Board Setup with an Example or a Demo, TouchGFX Designer also includes some out of the box demos for specific STM32 Evaluation Kits. These are located in the Demos section under Board Specific Demo."),(0,n.kt)(a.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Creating an application with a Board Specific Demo"),(0,n.kt)("h2",i({},{id:"whats-next"}),"What's Next"),(0,n.kt)("p",null,"At this point it is recommended that you browse through the documentation and read the chapters that look relevant to you. This will give you an overview of the documentation, so you know where to look for more information, and it will introduce you to key TouchGFX concepts."),(0,n.kt)("p",null,"The main chapters are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),"Basic Concepts"),": This chapter serves as background knowledge for the rest of the documentation. It introduces all the key graphics concepts that will be referenced later on. Depending on your current knowledge and which TouchGFX development activities you will do, you might want to skip some sections and consult them later if some details are unclear."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"../development/development-introduction"}),"Development"),": This chapter is the main chapter of the documentation. It explains the structure of a TouchGFX Project, the workflow and the tools involved in the entire project development cycle. Each step in the workflow has it own section and is described in details. Here you will find all you need to know on how to make your application run on your hardware and how you will do UI development, including descriptions of all features and components in the TouchGFX Framework.")))}f.isMDXComponent=!0}}]);
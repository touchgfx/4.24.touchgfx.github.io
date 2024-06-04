"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[22561],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(o,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[h]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),r=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(59496),r=n(96151);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const s=l},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const i=r},75439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>u});n(59496);var a=n(49613),r=n(95375),i=n(48753),l=n(89639);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"engine-architecture",title:"Engine Architecture"},p=void 0,h={unversionedId:"basic-concepts/engine-architecture",id:"basic-concepts/engine-architecture",title:"Engine Architecture",description:"Graphics is ultimately about getting something to show up on a physical display. Fast.",source:"@site/docs/basic-concepts/engine-architecture.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/engine-architecture",permalink:"/4.24/docs/basic-concepts/engine-architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"engine-architecture",title:"Engine Architecture"}},d={},u=[{value:"The four parts",id:"the-four-parts",level:2},{value:"MCU",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"Flash",id:"flash",level:3},{value:"Display",id:"display",level:3},{value:"Performance",id:"performance",level:2},{value:"General strategy",id:"general-strategy",level:3},{value:"Setup specific strategy",id:"setup-specific-strategy",level:3}],m={toc:u},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,s({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Graphics is ultimately about getting something to show up on a physical display. Fast.")),(0,a.kt)("p",null,"The term embedded graphics means many things."),(0,a.kt)("p",null,"First of, the word embedded means different things to different people.\nTo some an embedded system means a very dependable old 8 bit microcontroller, with no operating system, and virtually no RAM, ROM or GPIO.\nTo others it might mean a modern day smart phone with gigabytes of everything."),(0,a.kt)("p",null,"Secondly, the word graphics has many interpretations.\nTo some it means drawing your own pixels in your favourite painting program.\nTo others again it means the 3D rendering software running on your gaming console."),(0,a.kt)("p",null,"To TouchGFX embedded systems mean any system based on an STM32 microcontroller.\nAnd graphics means interactive applications running at 60 frames per second."),(0,a.kt)("h2",s({},{id:"the-four-parts"}),"The four parts"),(0,a.kt)("p",null,"In order to do graphics applications on such platforms, we consider four main components directly involved.\nNaturally many more components might be present in an embedded system, but these are less related to the display of graphics."),(0,a.kt)(l.Z,{imageSource:"/img/basic-concepts/four-parts.svg",noShadow:"true",width:480,mdxType:"Figure"},"MCU, RAM, Flash and display"),(0,a.kt)("p",null,"In short, TouchGFX, using the MCU, creates and updates an image in RAM, by assembling parts from flash. The assembled image is transferred to the display. This process is repeated as often as possible and needed."),(0,a.kt)("h3",s({},{id:"mcu"}),"MCU"),(0,a.kt)("p",null,"The MCU is doing all the heavy lifting in this process.\nIt reads images in flash and writes them to RAM.\nIt calculates the resulting colors when merging a semi-transparent red text onto an image and saves these to RAM.\nIt renders and stores all the pixels of a circle to RAM.\nAnd so on."),(0,a.kt)("p",null,"STM32 MCUs have specific capabilities that help in the realization of graphics.\nSee ",(0,a.kt)("a",s({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU")," for details on different MCUs."),(0,a.kt)("h3",s({},{id:"ram"}),"RAM"),(0,a.kt)("p",null,"RAM is where the calculated image is stored.\nThe RAM is being read and written by the MCU.\nAnd read again when the resulting image is transferred to the display."),(0,a.kt)("p",null,"In many cases the RAM is internal to the MCU.\nIn cases where it is not feasible to have the resulting image in internal RAM, external RAM can be added to the setup."),(0,a.kt)("h3",s({},{id:"flash"}),"Flash"),(0,a.kt)("p",null,"Flash is where all static data is placed. Images, fonts and texts.\nThe flash is read by the MCU and the contents written to or combined with the RAM."),(0,a.kt)("p",null,"Most often an external flash is added to the setup, as the internal flash is seldomly large enough to hold all graphics assets."),(0,a.kt)("p",null,"Ideally the flash is memory mapped, such that pixels can be read directly from the flash and written to RAM. Otherwise, the contents of the flash can be buffered in RAM and then read from there instead."),(0,a.kt)("h3",s({},{id:"display"}),"Display"),(0,a.kt)("p",null,"The display is where the image is actually displayed to the eyes of a person."),(0,a.kt)("p",null,"The image stored in RAM is sent by the MCU to the display at regular intervals."),(0,a.kt)("h2",s({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"In order to achieve smooth animations on this setup and ultimately on the display, some care must be taken when doing embedded graphics."),(0,a.kt)("h3",s({},{id:"general-strategy"}),"General strategy"),(0,a.kt)("p",null,"A few general points to always consider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Do not spend time drawing things that do not change"),(0,a.kt)("li",{parentName:"ul"},"Transfer as little as possible from flash to RAM"),(0,a.kt)("li",{parentName:"ul"},"Transfer as little as possible from RAM to display"),(0,a.kt)("li",{parentName:"ul"},"Find the right balance between quality of graphics and speed of animations"),(0,a.kt)("li",{parentName:"ul"},"Utilize hardware capabilities")),(0,a.kt)("p",null,"The TouchGFX Engine helps address all of these points, but care must be taken by the developer as well."),(0,a.kt)("h3",s({},{id:"setup-specific-strategy"}),"Setup specific strategy"),(0,a.kt)("p",null,"The vast amount of possible embedded setups means that what can be realized on a specific setup is very different to what is possible on another setup."),(0,a.kt)("p",null,"A ballpark'ish overview of possible setups are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"STM32 MCU",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"50 to 500 MHz clock rate"),(0,a.kt)("li",{parentName:"ul"},"A possible range of graphics related IP's: Chrom-ART, Chrom-GRC, JPEG codec, ..."))),(0,a.kt)("li",{parentName:"ul"},"RAM",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"0 to 1 MB internal"),(0,a.kt)("li",{parentName:"ul"},"0 to 100 MB external"))),(0,a.kt)("li",{parentName:"ul"},"Flash",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"0 to 1 MB internal"),(0,a.kt)("li",{parentName:"ul"},"0 to 1 GB external"))),(0,a.kt)("li",{parentName:"ul"},"Display",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1 to 24 bit colors"),(0,a.kt)("li",{parentName:"ul"},"100x100 to 1000x1000 pixels")))),(0,a.kt)("p",null,"It is evident that the UI applications that are realizable on one possible setup, might not be nowhere near realizable on another. Therefore great care must be taken to align the desired UI application with the actual setup."),(0,a.kt)("p",null,"TouchGFX is designed from the ground up for these setups, focusing on making the most of the STM32 MCU capabilities and minimizing the amount of RAM and flash needed."),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,"See ",(0,a.kt)(r.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs")," for available STM32 microcontrollers."),(0,a.kt)("li",null,"See ",(0,a.kt)(r.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"Display")," for details on the possible display choices."),(0,a.kt)("li",null,"See ",(0,a.kt)(r.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU")," for details on the possible MCU choices."),(0,a.kt)("li",null,"See ",(0,a.kt)(r.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"External Memories")," for details on the possible choices for memory.")))}f.isMDXComponent=!0}}]);
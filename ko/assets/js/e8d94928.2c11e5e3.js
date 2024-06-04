"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[13265],{49613:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),i=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),u=i(a),g=n,k=u["".concat(p,".").concat(g)]||u[g]||d[g]||l;return a?r.createElement(k,o(o({ref:e},s),{},{components:a})):r.createElement(k,o({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=g;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[u]="string"==typeof t?t:n,o[1]=m;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},93822:(t,e,a)=>{a.d(e,{Z:()=>m});var r=a(59496),n=a(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(n.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:l},this.props.children)}}const m=o},48753:(t,e,a)=>{a.d(e,{Z:()=>m});var r=a(59496),n=a(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(n.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const m=o},96151:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(59496);class n extends r.Component{render(){const t=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:t},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=n},1:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>i,metadata:()=>u,toc:()=>g});a(59496);var r=a(49613),n=a(93822),l=a(48753),o=a(95375);function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},m.apply(this,arguments)}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const i={id:"image-formats",title:"Image Formats"},s=void 0,u={unversionedId:"development/ui-development/touchgfx-engine-features/image-formats",id:"development/ui-development/touchgfx-engine-features/image-formats",title:"Image Formats",description:"TouchGFX supports multiple image formats. The image formats are supported only with the framebuffer formats where they make sense. The tables below the supported image- and framebuffer formats.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/image-formats.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/image-formats",permalink:"/4.24/ko/docs/development/ui-development/touchgfx-engine-features/image-formats",draft:!1,tags:[],version:"current",frontMatter:{id:"image-formats",title:"Image Formats"},sidebar:"docs",previous:{title:"TouchGFX Engine Features",permalink:"/4.24/ko/docs/category/touchgfx-engine-features"},next:{title:"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158",permalink:"/4.24/ko/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"}},d={},g=[{value:"Image Formats",id:"image-formats",level:2},{value:"Compressed Image formats",id:"compressed-image-formats",level:3},{value:"Framebuffer formats",id:"framebuffer-formats",level:2},{value:"Supported image formats on framebuffer formats",id:"supported-image-formats-on-framebuffer-formats",level:2}],k={toc:g},c="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,r.kt)(c,m({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX supports multiple image formats. The image formats are supported only with the framebuffer formats where they make sense. The tables below the supported image- and framebuffer formats."),(0,r.kt)("p",null,"The first two table explains the image formats. The next tables list the framebuffer formats. The last table shows the supported image formats on the different framebuffer formats."),(0,r.kt)("h2",m({},{id:"image-formats"}),"Image Formats"),(0,r.kt)("p",null,"These are the image formats supported by TouchGFX:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Image format"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Supports Transparency"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Image size (W x H)"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H x 4"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"32 bits, 8 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H + Colors x 4"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, ARGB8888 palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H x 3"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"24 bits, 8 bits per component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"L8_RGB888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H + Colors x 3"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, RGB888 palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H x 2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"16 bits, 5 bits red, 6 bits green, 5 bits blue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"L8_RGB565"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H + Colors x 2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, RGB565 palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"W x H"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"~ (W / 2) x H"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"4 bits grayscale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"~ (W / 4) x H"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"2 bits grayscale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"~ (W / 8) x H"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"1 bit grayscale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BW_RLE"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"< (W / 8) x H"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"1 bit grayscale run-length encoded")))),(0,r.kt)("p",null,"The image formats that supports transparency are bigger because the must encode the transparency information (the alpha values). They are also slower to draw into the framebuffer. They are typically used for icons, shades, elements with round corners etc."),(0,r.kt)("p",null,"The image formats that does not support transparency are always rectangular. They are almost always faster because they fully cover the background behind, which is then not drawn."),(0,r.kt)("h3",m({},{id:"compressed-image-formats"}),"Compressed Image formats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Image format"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed L8_ARGB8888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, ARGB8888 palette. The pixels are compressed. The palette is not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed L8_RGB888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, ARGB8888 palette. The pixels are compressed. The palette is not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed L8_RGB565"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, ARGB8888 palette. The pixels are compressed. The palette is not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed RGB565"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed RGB565 pixels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed RGB888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed RGB888 pixels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed ARGB8888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Compressed ARGB8888 pixels")))),(0,r.kt)("p",null,"Compressed images uses less space, but are generally slower to draw and can not be used everywhere."),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},"Read more about compressed images here: ",(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/image-compression",mdxType:"Link"},"Image Compression")),(0,r.kt)(n.Z,{mdxType:"Caution"},"Compressed images can not be used with all Widgets. See the ",(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/image-compression#limitations",mdxType:"Link"},"list"),"."),(0,r.kt)("h2",m({},{id:"framebuffer-formats"}),"Framebuffer formats"),(0,r.kt)("p",null,"TouchGFX has built-in support for the following framebuffer formats:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Framebuffer Format"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Bits pr. pixel"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Number of colors"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"32 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"16777216 colors and corresponding opacity values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"24 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"16777216 colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"16 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"65536 colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"6/8 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"64 colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"6/8 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"64 colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"6/8 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"64 colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"6/8 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"64 colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"4 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"16 grayscale colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"2 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"4 grayscale colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"1 bpp"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"2, black and white")))),(0,r.kt)("p",null,"There are limitations on the use of the framebuffer formats with some display connections:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Framebuffer Format"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Display connection type supported directly"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LTDC, DSI, Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LTDC, DSI, Partial framebuffer, Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LTDC, DSI, FMC, Partial framebuffer, Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LTDC, DSI, Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LTDC, DSI, Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LTDC, DSI, Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LTDC, DSI, Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Custom")))),(0,r.kt)("p",null,'The "Custom" display connection means that the TouchGFX Generator does not generate all the code needed to the display the framebuffer. TouchGFX will draw all frames into the framebuffer, but the user must handwrite all code required to transmit the framebuffer to the display and to synchronize the TouchGFX Engine with the display refresh.'),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},"Read more about custom display interfaces here: ",(0,r.kt)(o.Z,{to:"../../touchgfx-hal-development/scenarios/scenarios-fmc",mdxType:"Link"},"FMC and SPI Display Interface"),"."),(0,r.kt)("h2",m({},{id:"supported-image-formats-on-framebuffer-formats"}),"Supported image formats on framebuffer formats"),(0,r.kt)("p",null,"The table below shows which image formats that are supported for a given framebuffer format."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Framebuffer Format"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Supported Image formats"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB565",(0,r.kt)("br",null),"RGB888",(0,r.kt)("br",null),"ARGB8888",(0,r.kt)("br",null),"L8_RGB565",(0,r.kt)("br",null),"L8_RGB888",(0,r.kt)("br",null),"L8_ARGB8888",(0,r.kt)("br",null),"Compressed RGB565",(0,r.kt)("br",null),"Compressed RGB888",(0,r.kt)("br",null),"Compressed ARGB8888,",(0,r.kt)("br",null),"Compressed L8_RGB565",(0,r.kt)("br",null),"Compressed L8_RGB888",(0,r.kt)("br",null),"Compressed L8_ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB888",(0,r.kt)("br",null),"ARGB8888,",(0,r.kt)("br",null),"L8_RGB888",(0,r.kt)("br",null),"L8_ARGB8888",(0,r.kt)("br",null),"Compressed RGB888",(0,r.kt)("br",null),"Compressed ARGB8888",(0,r.kt)("br",null),"Compressed L8_RGB888",(0,r.kt)("br",null),"Compressed L8_ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGB565",(0,r.kt)("br",null),"ARGB8888",(0,r.kt)("br",null),"L8_RGB565",(0,r.kt)("br",null),"L8_RGB888",(0,r.kt)("br",null),"L8_ARGB8888",(0,r.kt)("br",null),"Compressed RGB565",(0,r.kt)("br",null),"Compressed ARGB8888,",(0,r.kt)("br",null),"Compressed L8_RGB565",(0,r.kt)("br",null),"Compressed L8_RGB888",(0,r.kt)("br",null),"Compressed L8_ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888",(0,r.kt)("br",null),"ARGB2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888",(0,r.kt)("br",null),"RGBA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888",(0,r.kt)("br",null),"BGRA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888",(0,r.kt)("br",null),"ABGR2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"BW",(0,r.kt)("br",null),"BW_RLE")))),(0,r.kt)("p",null,"Platforms with the GPU2D accelerator does not support the L8_RGB565 and Compressed L8_RGB565 image formats."))}N.isMDXComponent=!0}}]);
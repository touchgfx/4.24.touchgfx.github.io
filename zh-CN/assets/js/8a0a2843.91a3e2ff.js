"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[13380],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93822:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}const l=o},28128:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const i=a},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=a},49018:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}const l=o},21100:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const l=o},3260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>N,frontMatter:()=>u,metadata:()=>h,toc:()=>f});n(59496);var r=n(49613),a=n(21100),i=n(93822),o=n(49018),l=n(95375),d=n(28128),c=n(89639);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"qr-code",title:"QR Code"},m=void 0,h={unversionedId:"development/ui-development/ui-components/images/qr-code",id:"development/ui-development/ui-components/images/qr-code",title:"QR Code",description:"A QR Code is a widget capable of drawing a QR code with supplied content to encode, and specified colors for foreground and background respectively.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/qr-code.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/qr-code",permalink:"/4.24/zh-CN/docs/development/ui-development/ui-components/images/qr-code",draft:!1,tags:[],version:"current",frontMatter:{id:"qr-code",title:"QR Code"},sidebar:"docs",previous:{title:"SVG\u56fe\u50cf",permalink:"/4.24/zh-CN/docs/development/ui-development/ui-components/images/svg-image"},next:{title:"Containers",permalink:"/4.24/zh-CN/docs/category/containers"}},g={},f=[{value:"Widget Group",id:"widget-group",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"API Reference",id:"api-reference",level:2}],k=(v="FurtherReading",function(e){return console.warn("Component "+v+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",s({},e))});var v;const w={toc:f},b="wrapper";function N(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(b,s({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A QR Code is a widget capable of drawing a QR code with supplied content to encode, and specified colors for foreground and background respectively."),(0,r.kt)(o.Z,{mdxType:"Note"},"The preview QR Code shown on canvas in TouchGFX Designer is a static example, which always links to the documentation for the widget.",(0,r.kt)("p",null,"Run the application in simulator or on target to see the real generated QR Code with the text provided by the user.")),(0,r.kt)(c.Z,{imageSource:"/img/development/ui-development/ui-components/qr-code/widget-appearance.webp",mdxType:"Figure"},"QR Code running in the simulator"),(0,r.kt)("h2",s({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The QR Code can be found in the Images widget group in TouchGFX Designer."),(0,r.kt)(c.Z,{imageSource:"/img/development/ui-development/ui-components/qr-code/widget-group.webp",mdxType:"Figure"},"QR Code in TouchGFX Designer"),(0,r.kt)("p",null,"The properties for a QR Code in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The size of the widget is determined by the QR Code version.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X and Y.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Configuration")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"QR Version")," specifies the QR Code range from version 1 to version 2.",(0,r.kt)("br",null),'Version 1 has 21x21 "bits". Version 40 has 177x177 "bits".',(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Scale")," specifies the scale in which to draw the QR Code. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Text")," specifies which content to endode into the QR Code.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Error Correction Code")," specifies the level of tolerance for erroneous codewords.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget. ",(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Foreground")," specifies the color used for the foreground. Default is black.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Background")," specifies the color used for the background. Default is white.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",s({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by a QR Code in TouchGFX Designer."),(0,r.kt)("h3",s({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,r.kt)("th",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",s({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A QR Code does not emit any triggers."),(0,r.kt)("h2",s({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"The performance of a QR Code widget is slower than an image since the pixels are computed, but it is fast enough to be moved around the screen or faded in as part of simple animations."),(0,r.kt)("p",null,"For more details on drawing performance, read the ",(0,r.kt)("a",s({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",s({},{id:"examples"}),"Examples"),(0,r.kt)("h3",s({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a QR Code. Buffers are set up in in the header file (see highlighted lines). These are used for computation and storage of the QR code bit-values."),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{26-27}","{26-27}":!0}),"#ifndef SCREEN1VIEWBASE_HPP\n#define SCREEN1VIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n#include <touchgfx/widgets/QRCode.hpp>\n\nclass Screen1ViewBase : public touchgfx::View<Screen1Presenter>\n{\npublic:\n    Screen1ViewBase();\n    virtual ~Screen1ViewBase();\n    virtual void setupScreen();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box __background;\n    uint8_t qrBuffer_qrCode1[QRCODE_BUFFER_SIZE(1)];\n    uint8_t qrScratchBuffer_qrCode1[QRCODE_BUFFER_SIZE(1)];\n    touchgfx::QRCode qrCode1;\n\nprivate:\n\n};\n\n#endif // SCREEN1VIEWBASE_HPP\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{6-11}","{6-11}":!0}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    qrCode1.setXY(0, 0);\n    qrCode1.setBuffers(qrBuffer_qrCode1, qrScratchBuffer_qrCode1);\n    qrCode1.setQRCodeVersion(1);\n    qrCode1.setScale(5);\n    qrCode1.convertStringToQRCode("SUPPORT.TOUCHGFX.COM");\n    add(qrCode1);\n}\n\nScreen1ViewBase::~Screen1ViewBase()\n{\n\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(i.Z,{mdxType:"Caution"},"The function ",(0,r.kt)("code",null,"convertStringToQRCode")," may fail, if the string is longer than what can fit into the QRCode (depending of the level).",(0,r.kt)("p",null,"The user should check the return value of the function.")),(0,r.kt)(a.Z,{mdxType:"Tip"},"You can use these functions and the others available in the QRCode class in user code. Remember to force a redraw by calling ",(0,r.kt)("code",null,"qrCode1.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h2",s({},{id:"api-reference"}),"API Reference"),(0,r.kt)(k,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"../../../../api/classes/classtouchgfx_1_1_qr_code",mdxType:"Link"},"API reference for the QR Code class"))))}N.isMDXComponent=!0}}]);
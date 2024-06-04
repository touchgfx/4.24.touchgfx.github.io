"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[73655],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,h=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),o=n(7029);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},98966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>s});n(59496);var r=n(49613),o=n(89639);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"scenarios-spi",title:"SPI"},l=void 0,u={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-spi",id:"development/touchgfx-hal-development/scenarios/scenarios-spi",title:"SPI",description:"\u3053\u306e\u30b7\u30ca\u30ea\u30aa\u306f\u3001SPI\u3092\u4f7f\u7528\u3057\u3001TouchGFX Generator\u3067Custom\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u306e\u3001\u4e00\u822c\u7684\u306aTouchGFX\u30c9\u30e9\u30a4\u30d0\u4f5c\u6210\u624b\u9806\u3092\u8aac\u660e\u3059\u308b\u3082\u306e\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u624b\u9806\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u306a\u3044\u3001\u4ed6\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u5bfe\u3059\u308b\u624b\u9806\u3068\u540c\u3058\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-spi.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-spi",permalink:"/4.24/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-spi",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-spi",title:"SPI"}},p={},s=[{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001",id:"transfering-the-framebuffer",level:2},{value:"flushFrameBuffer\u304b\u3089\u623b\u308b",id:"returning-from-flushframebuffer",level:2}],m={toc:s},f="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30b7\u30ca\u30ea\u30aa\u306f\u3001SPI\u3092\u4f7f\u7528\u3057\u3001TouchGFX Generator\u3067Custom\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u306e\u3001\u4e00\u822c\u7684\u306aTouchGFX\u30c9\u30e9\u30a4\u30d0\u4f5c\u6210\u624b\u9806\u3092\u8aac\u660e\u3059\u308b\u3082\u306e\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u624b\u9806\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u306a\u3044\u3001\u4ed6\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306b\u5bfe\u3059\u308b\u624b\u9806\u3068\u540c\u3058\u3067\u3059\u3002"),(0,r.kt)("p",null,"STM32CubeMX\u3067SPI\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u306e\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3059\u308c\u3070\u3001TouchGFX Generator\u3092\u4f7f\u7528\u3057\u3001Custom\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001HAL\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u958b\u767a\u8005\u306f\u3001\u958b\u767a\u8005\u81ea\u8eab\u304c\u4f5c\u6210\u3057\u305f\u9069\u5207\u306a\u30c9\u30e9\u30a4\u30d0\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u66f4\u65b0\u90e8\u5206\u3092\u63a5\u7d9a\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u56f3X\u306b\u793a\u3059TouchGFX Generator\u306e\u8a2d\u5b9a\u3067\u306f\u3001Custom\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u3001\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u304c\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u66f4\u65b0\u90e8\u5206\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u8ee2\u9001\u3092\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.webp",noShadow:!0,mdxType:"Figure"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u696d"),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u306b\u30018080\u3084SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306a\u3069\u306eGRAM\u3092\u5185\u8535\u3057\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5834\u5408\u3001\u30c9\u30e9\u30a4\u30d0\u306f\u6b21\u306e\u3088\u3046\u306b\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u518d\u63cf\u753b\u3055\u308c\u308b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u306b\u57fa\u3065\u3044\u3066\u3001\u3053\u308c\u306b\u5bfe\u5fdc\u3059\u308bGRAM\u5185\u306e\u5834\u6240\u306b\u300c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ab\u30fc\u30bd\u30eb\u300d\u3092\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9001\u3089\u308c\u3066\u304f\u308b\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092GRAM\u306b\u66f8\u304d\u8fbc\u3080\u6e96\u5099\u3092\u6574\u3048\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",a({},{id:"transfering-the-framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u304c\u66f4\u65b0\u3055\u308c\u308b\u3068\u3001TouchGFX Engine\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer"),"\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Engine\u304b\u3089\u306e\u4fe1\u53f7\uff08S?\uff09\u306b\u53cd\u5fdc\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    __ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"__ST7789H2_SetDisplayWindow")," \u306f\u3001GRAM\u5185\u306e\u4eee\u60f3\u300c\u30ab\u30fc\u30bd\u30eb\u300d\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u304a\u3088\u3073",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u5ea7\u6a19\u3092\u3001\u7279\u5b9a\u306e\u30ec\u30b8\u30b9\u30bf\u306b\u66f8\u304d\u8fbc\u3093\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306fGRAM\u3092\u4f7f\u7528\u3059\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3067\u306f\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid __ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,r.kt)("p",null,"\u6b21\u306b\u793a\u3059\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD"),"\u306f\u3001\u66f4\u65b0\u3055\u308c\u305f\u9818\u57df\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\uff09\u3092\u4e00\u5ea6\u306b1\u30e9\u30a4\u30f3\u305a\u3064\u9001\u4fe1\u3057\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30dd\u30a4\u30f3\u30bf\u304c\u9032\u3093\u3067\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u95a2\u6570\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // Use default implementation (CPU copy!).\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y)  * BSP_LCD_GetXSize();\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,r.kt)("h2",a({},{id:"returning-from-flushframebuffer"}),"flushFrameBuffer\u304b\u3089\u623b\u308b"),(0,r.kt)("p",null,"\u95a2\u6570\u304c\u8fd4\u3055\u308c\u308b\u3068\u3001TouchGFX Engine\u306b\u623b\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u8ee2\u9001\u306e\u5b9f\u884c\u306bDMA\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u958b\u767a\u8005\u306fDMA\u5b8c\u4e86\u5272\u8fbc\u307f\u4fe1\u53f7\u306b\u3088\u308b\u30bb\u30de\u30d5\u30a9\u3092\u5f85\u6a5f\u3059\u308b\u3053\u3068\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)"),"\u304c\u623b\u3089\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))}h.isMDXComponent=!0}}]);
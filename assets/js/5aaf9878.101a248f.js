"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[17451],{49613:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(r),k=a,g=d["".concat(p,".").concat(k)]||d[k]||s[k]||i;return r?n.createElement(g,l(l({ref:e},u),{},{components:r})):n.createElement(g,l({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},75303:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(59496);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=a},92368:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>s});r(59496);var n=r(49613),a=r(95375),i=r(75303);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const p={title:"PixelRGB565"},c=void 0,u={unversionedId:"api/classes/uniontouchgfx_1_1_pixel_r_g_b565",id:"api/classes/uniontouchgfx_1_1_pixel_r_g_b565",title:"PixelRGB565",description:"touchgfx/hal/Types.hpp",source:"@site/docs/api/classes/uniontouchgfx_1_1_pixel_r_g_b565.mdx",sourceDirName:"api/classes",slug:"/api/classes/uniontouchgfx_1_1_pixel_r_g_b565",permalink:"/4.24/docs/api/classes/uniontouchgfx_1_1_pixel_r_g_b565",draft:!1,tags:[],version:"current",frontMatter:{title:"PixelRGB565"},sidebar:"api",previous:{title:"PixelDataWidget",permalink:"/4.24/docs/api/classes/classtouchgfx_1_1_pixel_data_widget"},next:{title:"Point",permalink:"/4.24/docs/api/classes/structtouchgfx_1_1_point"}},d={},s=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"b",id:"b",level:3},{value:"bgr",id:"bgr",level:3},{value:"color",id:"color",level:3},{value:"g",id:"g",level:3},{value:"r",id:"r",level:3}],k={toc:s},g="wrapper";function m(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(g,l({},k,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Types.hpp")),(0,n.kt)("p",null,"Union used in QOI decompression Note! We use little endian and BGR order. "),(0,n.kt)("h2",l({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"right"})),(0,n.kt)("th",l({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"uniontouchgfx_1_1_pixel_r_g_b565#variable-b",mdxType:"Link"},"b")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"}),"struct touchgfx::PixelRGB565::@1"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"uniontouchgfx_1_1_pixel_r_g_b565#variable-bgr",mdxType:"Link"},"bgr")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Each color channel in the pixel.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"uniontouchgfx_1_1_pixel_r_g_b565#variable-color",mdxType:"Link"},"color")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"The pixel color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"uniontouchgfx_1_1_pixel_r_g_b565#variable-g",mdxType:"Link"},"g")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"uniontouchgfx_1_1_pixel_r_g_b565#variable-r",mdxType:"Link"},"r")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"right"})),(0,n.kt)("td",l({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",l({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"uniontouchgfx_1_1_pixel_r_g_b565#variable-b",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",l({},{id:"b"}),"b"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint16_t b ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"})),(0,n.kt)(i.Z,{url:"uniontouchgfx_1_1_pixel_r_g_b565#variable-bgr",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",l({},{id:"bgr"}),"bgr"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"struct touchgfx::PixelRGB565::@1 bgr ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Each color channel in the pixel. "))),(0,n.kt)(i.Z,{url:"uniontouchgfx_1_1_pixel_r_g_b565#variable-color",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",l({},{id:"color"}),"color"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint16_t color ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The pixel color. "))),(0,n.kt)(i.Z,{url:"uniontouchgfx_1_1_pixel_r_g_b565#variable-g",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",l({},{id:"g"}),"g"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint16_t g ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"})),(0,n.kt)(i.Z,{url:"uniontouchgfx_1_1_pixel_r_g_b565#variable-r",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",l({},{id:"r"}),"r"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint16_t r ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"})))}m.isMDXComponent=!0}}]);
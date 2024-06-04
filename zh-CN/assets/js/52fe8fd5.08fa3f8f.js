"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[72948],{49613:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),u=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(r),h=n,k=s["".concat(c,".").concat(h)]||s[h]||p[h]||i;return r?a.createElement(k,l(l({ref:e},d),{},{components:r})):a.createElement(k,l({ref:e},d))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[s]="string"==typeof t?t:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},75303:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(59496);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const i=n},42874:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});r(59496);var a=r(49613),n=r(95375),i=r(75303);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},l.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const c={title:"TextureSurface"},u=void 0,d={unversionedId:"api/classes/structtouchgfx_1_1_texture_surface",id:"api/classes/structtouchgfx_1_1_texture_surface",title:"TextureSurface",description:"touchgfx/hal/Types.hpp",source:"@site/docs/api/classes/structtouchgfx_1_1_texture_surface.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_texture_surface",permalink:"/4.24/zh-CN/docs/api/classes/structtouchgfx_1_1_texture_surface",draft:!1,tags:[],version:"current",frontMatter:{title:"TextureSurface"},sidebar:"api",previous:{title:"TextureMapper",permalink:"/4.24/zh-CN/docs/api/classes/classtouchgfx_1_1_texture_mapper"},next:{title:"TiledImage",permalink:"/4.24/zh-CN/docs/api/classes/classtouchgfx_1_1_tiled_image"}},s={},p=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"data",id:"data",level:3},{value:"extraData",id:"extradata",level:3},{value:"height",id:"height",level:3},{value:"stride",id:"stride",level:3},{value:"width",id:"width",level:3}],h={toc:p},k="wrapper";function m(t){var{components:e}=t,r=o(t,["components"]);return(0,a.kt)(k,l({},h,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/Types.hpp")),(0,a.kt)("p",null," A texture source.\nContains a pointer to the data and the width and height of the texture. The alpha channel is used in 565 rendering with alpha. The stride is the width used when moving to the next line of the texture. "),(0,a.kt)("h2",l({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"right"})),(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"}),"const uint16_t *"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-data",mdxType:"Link"},"data")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The pixel bits or indexes for color in CLUT entries.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"}),"const uint8_t *"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-extradata",mdxType:"Link"},"extraData")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The alpha channel or clut data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"}),"int32_t"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-height",mdxType:"Link"},"height")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The height.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"}),"int32_t"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-stride",mdxType:"Link"},"stride")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The stride.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"}),"int32_t"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_texture_surface#variable-width",mdxType:"Link"},"width")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"The width.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"right"})),(0,a.kt)("td",l({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",l({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-data",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",l({},{id:"data"}),"data"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint16_t * data ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The pixel bits or indexes for color in CLUT entries. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-extradata",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",l({},{id:"extradata"}),"extraData"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint8_t * extraData ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The alpha channel or clut data. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-height",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",l({},{id:"height"}),"height"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int32_t height ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The height. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-stride",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",l({},{id:"stride"}),"stride"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int32_t stride ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The stride. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-width",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",l({},{id:"width"}),"width"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int32_t width ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The width. "))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9412],{49613:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,s=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(s,o(o({ref:e},c),{},{components:n})):a.createElement(s,o({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},75303:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},36202:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(59496);var a=n(49613),r=n(95375),l=n(75303);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"VectorFontRenderer"},d=void 0,c={unversionedId:"api/classes/classtouchgfx_1_1_vector_font_renderer",id:"api/classes/classtouchgfx_1_1_vector_font_renderer",title:"VectorFontRenderer",description:"touchgfx/hal/VectorFontRenderer.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_vector_font_renderer.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_vector_font_renderer",permalink:"/4.24/ko/docs/api/classes/classtouchgfx_1_1_vector_font_renderer",draft:!1,tags:[],version:"current",frontMatter:{title:"VectorFontRenderer"},sidebar:"api",previous:{title:"Vector4",permalink:"/4.24/ko/docs/api/classes/classtouchgfx_1_1_vector4"},next:{title:"VectorFontRendererImpl",permalink:"/4.24/ko/docs/api/classes/classtouchgfx_1_1_vector_font_renderer_impl"}},u={},m=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"drawGlyph",id:"drawglyph",level:3},{value:"~VectorFontRenderer",id:"vectorfontrenderer",level:3}],k={toc:m},s="wrapper";function g(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(s,o({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/VectorFontRenderer.hpp")),(0,a.kt)("p",null,"Abstract interface for classes implementing vector font rendering. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_vector_font_renderer_impl",mdxType:"Link"},"VectorFontRendererImpl")),(0,a.kt)("h2",o({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"right"})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_vector_font_renderer#function-drawglyph",mdxType:"Link"},"drawGlyph")),"(const ",(0,a.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & canvasAreaAbs, const ",(0,a.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & invalidatedAreaRel, const uint16_t ",(0,a.kt)("em",{parentName:"td"}," data, const ",(0,a.kt)("a",o({parentName:"em"},{href:"classtouchgfx_1_1_font"}),"Font")," ")," font, ",(0,a.kt)("a",o({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," color, uint8_t alpha, ",(0,a.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#enum-textrotation"}),"TextRotation")," rotation, int x, int y) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Draws one glyph from the provided data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_vector_font_renderer#function-~vectorfontrenderer",mdxType:"Link"},"~VectorFontRenderer")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Virtual destructor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",o({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_vector_font_renderer#function-drawglyph",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"drawglyph"}),"drawGlyph"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_vector_font_renderer#function-drawglyph",mdxType:"Link"},"drawGlyph")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"canvasAreaAbs ,"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"invalidatedAreaRel ,"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"const uint16_t *"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"data ,"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," *"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"font ,"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("a",o({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"color ,"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"alpha ,"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("a",o({parentName:"td"},{href:"../namespacetouchgfx#enum-textrotation"}),"TextRotation")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"rotation ,"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"int"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"x ,"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"int"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0"),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Draws one glyph from the provided data. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"canvasAreaAbs"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The canvas dimensions in absolute coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"invalidatedAreaRel"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The area which should be updated in relative coordinates to the canvas area.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"data"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Data containing tags and points for all contours of the glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"font"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The font to use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The color of the glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"alpha"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"The transparency of the glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"rotation"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Rotation to do before drawing the glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Distance to advance horizontally.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Distance to move down."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_vector_font_renderer_impl#function-drawglyph",mdxType:"Link"},"touchgfx::VectorFontRendererImpl::drawGlyph")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_vector_font_renderer#function-~vectorfontrenderer",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"vectorfontrenderer"}),"~VectorFontRenderer"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_vector_font_renderer#function-~vectorfontrenderer",mdxType:"Link"},"~VectorFontRenderer")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Virtual destructor. "))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[68166],{49613:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>s});var n=e(59496);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var k=n.createContext({}),c=function(t){var a=n.useContext(k),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},d=function(t){var a=c(t.components);return n.createElement(k.Provider,{value:a},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=c(e),m=r,s=p["".concat(k,".").concat(m)]||p[m]||u[m]||l;return e?n.createElement(s,o(o({ref:a},d),{},{components:e})):n.createElement(s,o({ref:a},d))}));function s(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=m;var i={};for(var k in a)hasOwnProperty.call(a,k)&&(i[k]=a[k]);i.originalType=t,i[p]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=e[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},75303:(t,a,e)=>{e.d(a,{Z:()=>l});var n=e(59496);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},91677:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>k,metadata:()=>d,toc:()=>u});e(59496);var n=e(49613),r=e(95375),l=e(75303);function o(){return o=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},o.apply(this,arguments)}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}const k={title:"FrameBufferAllocator"},c=void 0,d={unversionedId:"api/classes/classtouchgfx_1_1_frame_buffer_allocator",id:"api/classes/classtouchgfx_1_1_frame_buffer_allocator",title:"FrameBufferAllocator",description:"touchgfx/hal/FrameBufferAllocator.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_frame_buffer_allocator",permalink:"/4.24/zh-CN/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator",draft:!1,tags:[],version:"current",frontMatter:{title:"FrameBufferAllocator"},sidebar:"api",previous:{title:"FontProvider",permalink:"/4.24/zh-CN/docs/api/classes/classtouchgfx_1_1_font_provider"},next:{title:"FullSolidRect",permalink:"/4.24/zh-CN/docs/api/classes/classtouchgfx_1_1_transition_1_1_full_solid_rect"}},p={},u=[{value:"Protected Types",id:"protected-types",level:2},{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Types Documentation",id:"protected-types-documentation",level:2},{value:"BlockState",id:"blockstate",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"allocateBlock",id:"allocateblock",level:3},{value:"freeBlockAfterTransfer",id:"freeblockaftertransfer",level:3},{value:"getBlockForTransfer",id:"getblockfortransfer",level:3},{value:"hasBlockReadyForTransfer",id:"hasblockreadyfortransfer",level:3},{value:"hasEmptyBlock",id:"hasemptyblock",level:3},{value:"markBlockReadyForTransfer",id:"markblockreadyfortransfer",level:3},{value:"peekBlockForTransfer",id:"peekblockfortransfer",level:3},{value:"~FrameBufferAllocator",id:"framebufferallocator",level:3}],m={toc:u},s="wrapper";function f(t){var{components:a}=t,e=i(t,["components"]);return(0,n.kt)(s,o({},m,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/FrameBufferAllocator.hpp")),(0,n.kt)("p",null," This class is an abstract interface for a class allocating partial framebuffer blocks.\nThe interface must be implemented by a subclass."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_many_block_allocator"}),"ManyBlockAllocator")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator",mdxType:"Link"},"ManyBlockAllocator","<"," block_size, blocks, bytes_pr_pixel ",">")),(0,n.kt)("h2",o({},{id:"protected-types"}),"Protected Types"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"enum"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#enum-blockstate",mdxType:"Link"},"BlockState"))," { EMPTY, ALLOCATED, DRAWN, SENDING }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"BlockState is used for internal state of each block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",o({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"right"})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),"(const uint16_t x, const uint16_t y, const uint16_t width, const uint16_t height, uint8_t ** block) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Allocates a framebuffer block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Free a block after transfer to the LCD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),"(",(0,n.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Get the block ready for transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Check if a block is ready for transfer to the LCD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasemptyblock",mdxType:"Link"},"hasEmptyBlock")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Check if a block is ready for drawing (the block is empty).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Marks a previously allocated block as ready to be transferred to the LCD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","const ",(0,n.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-peekblockfortransfer",mdxType:"Link"},"peekBlockForTransfer")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Get the Rect of the next block to transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"right"})),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",o({},{id:"protected-types-documentation"}),"Protected Types Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enum-blockstate",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"blockstate"}),"BlockState"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header",markdown:"1"},(0,n.kt)("p",null,"enum ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#enum-blockstate",mdxType:"Link"},"BlockState"))),(0,n.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,n.kt)("p",null,"BlockState is used for internal state of each block. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enumvalue-empty",mdxType:"DoxybookHeaderLink"})," EMPTY"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Block is empty, can be allocated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enumvalue-allocated",mdxType:"DoxybookHeaderLink"})," ALLOCATED"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Block is allocated for drawing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enumvalue-drawn",mdxType:"DoxybookHeaderLink"})," DRAWN"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Block has been drawn to, can be send.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enumvalue-sending",mdxType:"DoxybookHeaderLink"})," SENDING"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Block is being transmitted to the display.")))))),(0,n.kt)("h2",o({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"allocateblock"}),"allocateBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"y ,"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"width ,"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"height ,"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"uint8_t **"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"block"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Allocates a framebuffer block. "),(0,n.kt)("p",null,"The block will have at least the width requested. The height of the allocated block can be lower than requested if not enough memory is available."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The absolute x coordinate of the block on the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The absolute y coordinate of the block on the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"width"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The width of the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The height of the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"block"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Pointer to pointer to return the block address in."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The height of the allocated block. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::ManyBlockAllocator::allocateBlock")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"freeblockaftertransfer"}),"freeBlockAfterTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Free a block after transfer to the LCD. "),(0,n.kt)("p",null,"Marks a previously allocated block as transferred and ready to reuse. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::freeBlockAfterTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"getblockfortransfer"}),"getBlockForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the block ready for transfer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Reference to rect to write block x, y, width, and height."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"Returns the address of the block ready for transfer. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::getBlockForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Check if a block is ready for transfer to the LCD. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if a block is ready for transfer. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::hasBlockReadyForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-hasemptyblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"hasemptyblock"}),"hasEmptyBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasemptyblock",mdxType:"Link"},"hasEmptyBlock")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Check if a block is ready for drawing (the block is empty). "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if a block is empty. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasemptyblock",mdxType:"Link"},"touchgfx::ManyBlockAllocator::hasEmptyBlock")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"markblockreadyfortransfer"}),"markBlockReadyForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Marks a previously allocated block as ready to be transferred to the LCD. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::markBlockReadyForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-peekblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"peekblockfortransfer"}),"peekBlockForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","const Rect &","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-peekblockfortransfer",mdxType:"Link"},"peekBlockForTransfer")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the Rect of the next block to transfer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," ready for transfer.")),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"This function should only be called when the allocator has a block ready for transfer. ")),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-peekblockfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::peekBlockForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",o({},{id:"framebufferallocator"}),"~FrameBufferAllocator"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class. "))))}f.isMDXComponent=!0}}]);
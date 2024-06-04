"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[47022],{49613:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},75303:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},38935:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>s});n(59496);var a=n(49613),r=n(95375),l=n(75303);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"ButtonController"},p=void 0,c={unversionedId:"api/classes/classtouchgfx_1_1_button_controller",id:"api/classes/classtouchgfx_1_1_button_controller",title:"ButtonController",description:"platform/driver/button/ButtonController.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_button_controller.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_button_controller",permalink:"/4.24/ko/docs/api/classes/classtouchgfx_1_1_button_controller",draft:!1,tags:[],version:"current",frontMatter:{title:"ButtonController"},sidebar:"api",previous:{title:"Button",permalink:"/4.24/ko/docs/api/classes/classtouchgfx_1_1_button"},next:{title:"Buttons",permalink:"/4.24/ko/docs/api/classes/classtouchgfx_1_1_buttons"}},d={},s=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"init",id:"init",level:3},{value:"reset",id:"reset",level:3},{value:"sample",id:"sample",level:3},{value:"~ButtonController",id:"buttoncontroller",level:3}],k={toc:s},m="wrapper";function g(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(m,o({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"platform/driver/button/ButtonController.hpp")),(0,a.kt)("p",null,"Interface for sampling external key events. "),(0,a.kt)("h2",o({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"right"})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_button_controller#function-init",mdxType:"Link"},"init")),"() =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Initializes button controller.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_button_controller#function-reset",mdxType:"Link"},"reset")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Resets button controller.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_button_controller#function-sample",mdxType:"Link"},"sample")),"(uint8_t & key) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Sample external key events.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_button_controller#function-~buttoncontroller",mdxType:"Link"},"~ButtonController")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",o({parentName:"td"},{href:"classtouchgfx_1_1_button_controller"}),"ButtonController")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"right"})),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",o({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_button_controller#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_button_controller#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"=0"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes button controller. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_button_controller#function-reset",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"reset"}),"reset"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_button_controller#function-reset",mdxType:"Link"},"reset")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Resets button controller. "),(0,a.kt)("p",null,"Does nothing in the default implementation. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_button_controller#function-sample",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"sample"}),"sample"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_button_controller#function-sample",mdxType:"Link"},"sample")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"uint8_t &"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"key"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sample external key events. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"key"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Output parameter that will be set to the key value if a keypress was detected."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,'True if a keypress was detected and the "key" parameter is set to a value. ')))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_button_controller#function-~buttoncontroller",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",o({},{id:"buttoncontroller"}),"~ButtonController"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})),(0,a.kt)("th",o({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_button_controller#function-~buttoncontroller",mdxType:"Link"},"~ButtonController")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",o({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",o({parentName:"p"},{href:"classtouchgfx_1_1_button_controller"}),"ButtonController")," class. "))))}g.isMDXComponent=!0}}]);
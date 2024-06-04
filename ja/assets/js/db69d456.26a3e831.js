"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[77326],{49613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=r,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,i(i({ref:e},s),{},{components:n})):a.createElement(m,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},75303:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}const l=r},39192:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});n(59496);var a=n(49613),r=n(95375),l=n(75303);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const c={title:"Presenter"},p=void 0,s={unversionedId:"api/classes/classtouchgfx_1_1_presenter",id:"api/classes/classtouchgfx_1_1_presenter",title:"Presenter",description:"mvp/Presenter.hpp",source:"@site/docs/api/classes/classtouchgfx_1_1_presenter.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_presenter",permalink:"/4.24/ja/docs/api/classes/classtouchgfx_1_1_presenter",draft:!1,tags:[],version:"current",frontMatter:{title:"Presenter"},sidebar:"api",previous:{title:"Point4",permalink:"/4.24/ja/docs/api/classes/classtouchgfx_1_1_point4"},next:{title:"Q10",permalink:"/4.24/ja/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10"}},u={},d=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Functions",id:"protected-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"activate",id:"activate",level:3},{value:"deactivate",id:"deactivate",level:3},{value:"~Presenter",id:"presenter",level:3},{value:"Protected Functions Documentation",id:"protected-functions-documentation",level:2},{value:"Presenter",id:"presenter-1",level:3}],k={toc:d},m="wrapper";function h(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)(m,i({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mvp/Presenter.hpp")),(0,a.kt)("p",null," The Presenter base class that all application-specific presenters should derive from.\nOnly contains activate and deactivate virtual functions which are called automatically during screen transition. "),(0,a.kt)("h2",i({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"right"})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_presenter#function-activate",mdxType:"Link"},"activate")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Place initialization code for the ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_presenter#function-deactivate",mdxType:"Link"},"deactivate")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Place cleanup code for the ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_presenter#function-~presenter",mdxType:"Link"},"~Presenter")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"protected-functions"}),"Protected Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"right"})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_presenter#function-presenter",mdxType:"Link"},"Presenter")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",i({parentName:"td"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"right"})),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",i({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_presenter#function-activate",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"activate"}),"activate"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_presenter#function-activate",mdxType:"Link"},"activate")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Place initialization code for the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," here. "),(0,a.kt)("p",null,"The activate function is called automatically when a screen transition causes this ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," to become active. Place initialization code for the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," here. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_presenter#function-deactivate",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"deactivate"}),"deactivate"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_presenter#function-deactivate",mdxType:"Link"},"deactivate")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Place cleanup code for the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," here. "),(0,a.kt)("p",null,"The deactivate function is called automatically when a screen transition causes this ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," to become inactive. Place cleanup code for the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," here. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_presenter#function-~presenter",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"presenter"}),"~Presenter"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_presenter#function-~presenter",mdxType:"Link"},"~Presenter")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," class. "))),(0,a.kt)("h2",i({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_presenter#function-presenter",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",i({},{id:"presenter-1"}),"Presenter"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})),(0,a.kt)("th",i({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_presenter#function-presenter",mdxType:"Link"},"Presenter")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null})),(0,a.kt)("td",i({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",i({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",i({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," class. "))))}h.isMDXComponent=!0}}]);
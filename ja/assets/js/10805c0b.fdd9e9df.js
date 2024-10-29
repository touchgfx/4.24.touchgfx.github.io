"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[55535],{49613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>N});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),o=u(n),g=r,N=o["".concat(i,".").concat(g)]||o[g]||k[g]||l;return n?a.createElement(N,p(p({ref:e},d),{},{components:n})):a.createElement(N,p({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=g;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m[o]="string"==typeof t?t:r,p[1]=m;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93822:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class p extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:l},this.props.children)}}const m=p},48753:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(59496),r=n(96151);const l=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class p extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const m=p},96151:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(59496);class r extends a.Component{render(){const t=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:t},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const l=r},57187:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>s,frontMatter:()=>u,metadata:()=>o,toc:()=>g});n(59496);var a=n(49613),r=n(93822),l=n(48753),p=n(95375);function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},m.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={id:"image-formats",title:"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"},d=void 0,o={unversionedId:"development/ui-development/touchgfx-engine-features/image-formats",id:"development/ui-development/touchgfx-engine-features/image-formats",title:"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",description:"TouchGFX\u306f\u8907\u6570\u306e\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002 \u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u305d\u308c\u306b\u5408\u3063\u305f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u8868\u306b\u3001\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/image-formats.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/image-formats",permalink:"/4.24/ja/docs/development/ui-development/touchgfx-engine-features/image-formats",draft:!1,tags:[],version:"current",frontMatter:{id:"image-formats",title:"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"},sidebar:"docs",previous:{title:"TouchGFX Engine Features",permalink:"/4.24/ja/docs/category/touchgfx-engine-features"},next:{title:"\u30ab\u30b9\u30bf\u30e0\uff65\u30c8\u30ea\u30ac\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/4.24/ja/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"}},k={},g=[{value:"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"image-formats",level:2},{value:"\u5727\u7e2e\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"compressed-image-formats",level:3},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"framebuffer-formats",level:2},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"supported-image-formats-on-framebuffer-formats",level:2}],N={toc:g},c="wrapper";function s(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(c,m({},N,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TouchGFX\u306f\u8907\u6570\u306e\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002 \u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u305d\u308c\u306b\u5408\u3063\u305f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u8868\u306b\u3001\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u6700\u521d\u306e2\u3064\u306e\u8868\u306f\u3001\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002 \u305d\u308c\u306b\u7d9a\u304f\u8868\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4e00\u89a7\u3067\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u6700\u5f8c\u306e\u8868\u306f\u3001\u5404\u7a2e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",m({},{id:"image-formats"}),"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("p",null,"TouchGFX\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u900f\u660e\u306e\u30b5\u30dd\u30fc\u30c8"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u753b\u50cf\u30b5\u30a4\u30ba\uff08W x H\uff09"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u3042\u308a"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H x 4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"32\u30d3\u30c3\u30c8\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3054\u3068\u306b8\u30d3\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u3042\u308a"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H + \u8272 x 4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001ARGB8888\u30d1\u30ec\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u306a\u3057"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H x 3"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"24\u30d3\u30c3\u30c8\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3054\u3068\u306b8\u30d3\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u306a\u3057"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H + \u8272 x 3"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001RGB888\u30d1\u30ec\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u306a\u3057"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H x 2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"16\u30d3\u30c3\u30c8\uff08\u8d64\uff1a5\u30d3\u30c3\u30c8\u3001\u7dd1\uff1a6\u30d3\u30c3\u30c8\u3001\u9752\uff1a5\u30d3\u30c3\u30c8\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u306a\u3057"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H + \u8272 x 2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001RGB565\u30d1\u30ec\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u3042\u308a"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3054\u3068\u306b2\u30d3\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u3042\u308a"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3054\u3068\u306b2\u30d3\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u3042\u308a"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3054\u3068\u306b2\u30d3\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u3042\u308a"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"W x H"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3054\u3068\u306b2\u30d3\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u306a\u3057"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uff5e\uff08W / 2\uff09 x H"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4\u30d3\u30c3\u30c8\u306e\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u306a\u3057"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uff5e\uff08W / 4\uff09x H"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2\u30d3\u30c3\u30c8\u306e\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u306a\u3057"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\uff5e\uff08W / 8\uff09x H"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1\u30d3\u30c3\u30c8\u306e\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BW_RLE"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u306a\u3057"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"<\uff08W / 8\uff09 x H"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1\u30d3\u30c3\u30c8\u306e\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb\u3067\u30e9\u30f3\u30ec\u30f3\u30b0\u30b9\u7b26\u53f7\u5316")))),(0,a.kt)("p",null,"\u900f\u660e\u306b\u95a2\u3059\u308b\u60c5\u5831\uff08\u30a2\u30eb\u30d5\u30a1\u5024\uff09\u306e\u30a8\u30f3\u30b3\u30fc\u30c9\u304c\u5fc5\u8981\u306a\u305f\u3081\u3001\u900f\u660e\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u5927\u304d\u304f\u306a\u308a\u307e\u3059\u3002 \u307e\u305f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u63cf\u753b\u306f\u9045\u304f\u306a\u308a\u307e\u3059\u3002 \u901a\u5e38\u306f\u3001\u30a2\u30a4\u30b3\u30f3\u3001\u30b7\u30a7\u30fc\u30c9\u3001\u89d2\u304c\u4e38\u3044\u30a8\u30ec\u30e1\u30f3\u30c8\u306a\u3069\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u900f\u660e\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u5e38\u306b\u9577\u65b9\u5f62\u306b\u306a\u308a\u307e\u3059\u3002 \u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3092\u5b8c\u5168\u306b\u30ab\u30d0\u30fc\u3059\u308b\u3053\u3068\u3067\u3001\u63cf\u753b\u3055\u308c\u308b\u3053\u3068\u304c\u306a\u304f\u306a\u308b\u305f\u3081\u3001\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3088\u308a\u9ad8\u901f\u5316\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",m({},{id:"compressed-image-formats"}),"\u5727\u7e2e\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eL8_ARGB8888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001ARGB8888\u30d1\u30ec\u30c3\u30c8\u3002 \u30d4\u30af\u30bb\u30eb\u306f\u5727\u7e2e\u3055\u308c\u307e\u3059\u3002 \u30d1\u30ec\u30c3\u30c8\u306f\u5727\u7e2e\u3055\u308c\u307e\u305b\u3093\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eL8_RGB888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001ARGB8888\u30d1\u30ec\u30c3\u30c8\u3002 \u30d4\u30af\u30bb\u30eb\u306f\u5727\u7e2e\u3055\u308c\u307e\u3059\u3002 \u30d1\u30ec\u30c3\u30c8\u306f\u5727\u7e2e\u3055\u308c\u307e\u305b\u3093\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eL8_RGB565"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8\u30d3\u30c3\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001ARGB8888\u30d1\u30ec\u30c3\u30c8\u3002 \u30d4\u30af\u30bb\u30eb\u306f\u5727\u7e2e\u3055\u308c\u307e\u3059\u3002 \u30d1\u30ec\u30c3\u30c8\u306f\u5727\u7e2e\u3055\u308c\u307e\u305b\u3093\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eRGB565"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eRGB565\u30d4\u30af\u30bb\u30eb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eRGB888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eRGB888\u30d4\u30af\u30bb\u30eb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eARGB8888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5727\u7e2eAGB888\u30d4\u30af\u30bb\u30eb")))),(0,a.kt)("p",null,"\u5727\u7e2e\u753b\u50cf\u3067\u306f\u3001\u4f7f\u7528\u3059\u308b\u30b9\u30da\u30fc\u30b9\u306f\u5c11\u306a\u304f\u306a\u308a\u307e\u3059\u304c\u3001\u901a\u5e38\u306f\u63cf\u753b\u901f\u5ea6\u304c\u9045\u304f\u306a\u308b\u305f\u3081\u3001\u3069\u3053\u306b\u3067\u3082\u4f7f\u7528\u3067\u304d\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},"\u5727\u7e2e\u753b\u50cf\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,a.kt)(p.Z,{to:"../touchgfx-engine-features/image-compression",mdxType:"Link"},"\u753b\u50cf\u306e\u5727\u7e2e\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)(r.Z,{mdxType:"Caution"},"\u5727\u7e2e\u753b\u50cf\u306f\u3059\u3079\u3066\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u4f7f\u7528\u3067\u304d\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 ",(0,a.kt)(p.Z,{to:"../touchgfx-engine-features/image-compression#limitations",mdxType:"Link"},"\u30ea\u30b9\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",m({},{id:"framebuffer-formats"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("p",null,"TouchGFX\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u7d44\u8fbc\u307f\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Bits/pixel"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u8272\u306e\u6570"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"32 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"16777216\u8272\u3068\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b\u4e0d\u900f\u660e\u5ea6\u306e\u5024")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"24 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"16777216\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"16 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"65536\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"6/8 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"64\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"6/8 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"64\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"6/8 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"64\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"6/8 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"64\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"16\u306e\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4\u3064\u306e\u30b0\u30ec\u30fc\u30b9\u30b1\u30fc\u30eb\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1 bpp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2\u8272\u3001\u9ed2\u3068\u767d")))),(0,a.kt)("p",null,"\u4e00\u90e8\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u63a5\u7d9a\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u4f7f\u7528\u306b\u5236\u9650\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u76f4\u63a5\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u63a5\u7d9a\u30bf\u30a4\u30d7"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"LTDC\u3001DSI\u3001\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"LTDC\u3001DSI\u3001\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3001\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"LTDC\u3001DSI\u3001FMC\u3001\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3001\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"LTDC\u3001DSI\u3001\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"LTDC\u3001DSI\u3001\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"LTDC\u3001DSI\u3001\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"LTDC\u3001DSI\u3001\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u30ab\u30b9\u30bf\u30e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u30ab\u30b9\u30bf\u30e0")))),(0,a.kt)("p",null,'"\u30ab\u30b9\u30bf\u30e0"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u63a5\u7d9a\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8868\u793a\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30b3\u30fc\u30c9\u304cTouchGFX Generator\u304b\u3089\u751f\u6210\u3055\u308c\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 TouchGFX\u306f\u3059\u3079\u3066\u306e\u30d5\u30ec\u30fc\u30e0\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u63cf\u753b\u3057\u307e\u3059\u304c\u3001\u30e6\u30fc\u30b6\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30b3\u30fc\u30c9\u3092\u624b\u3067\u8a18\u8ff0\u3057\u3001TouchGFX Engine\u3068\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3092\u540c\u671f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002'),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,a.kt)(p.Z,{to:"../../touchgfx-hal-development/scenarios/scenarios-fmc",mdxType:"Link"},"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",m({},{id:"supported-image-formats-on-framebuffer-formats"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("p",null,"\u6b21\u306e\u8868\u306b\u3001\u7279\u5b9a\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB565",(0,a.kt)("br",null),"RGB888",(0,a.kt)("br",null),"ARGB8888",(0,a.kt)("br",null),"L8_RGB565",(0,a.kt)("br",null),"L8_RGB888",(0,a.kt)("br",null),"L8_ARGB8888",(0,a.kt)("br",null),"\u5727\u7e2eRGB565",(0,a.kt)("br",null),"\u5727\u7e2eRGB888",(0,a.kt)("br",null),"\u5727\u7e2eARGB8888",(0,a.kt)("br",null),"\u5727\u7e2eL8_RGB565",(0,a.kt)("br",null),"\u5727\u7e2eL8_RGB888",(0,a.kt)("br",null),"\u5727\u7e2eL8_ARGB8888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB888",(0,a.kt)("br",null),"ARGB8888,",(0,a.kt)("br",null),"L8_RGB888",(0,a.kt)("br",null),"L8_ARGB8888",(0,a.kt)("br",null),"Compressed RGB888",(0,a.kt)("br",null),"Compressed ARGB8888",(0,a.kt)("br",null),"Compressed L8_RGB888",(0,a.kt)("br",null),"Compressed L8_ARGB8888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGB565",(0,a.kt)("br",null),"ARGB8888",(0,a.kt)("br",null),"L8_RGB565",(0,a.kt)("br",null),"L8_RGB888",(0,a.kt)("br",null),"L8_ARGB8888",(0,a.kt)("br",null),"\u5727\u7e2eRGB565",(0,a.kt)("br",null),"\u5727\u7e2eARGB8888",(0,a.kt)("br",null),"\u5727\u7e2eL8_RGB565",(0,a.kt)("br",null),"\u5727\u7e2eL8_RGB888",(0,a.kt)("br",null),"\u5727\u7e2eL8_ARGB8888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888",(0,a.kt)("br",null),"ARGB2222")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888",(0,a.kt)("br",null),"RGBA2222")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888",(0,a.kt)("br",null),"BGRA2222")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888",(0,a.kt)("br",null),"ABGR2222")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"BW",(0,a.kt)("br",null),"BW_RLE")))),(0,a.kt)("p",null,"GPU2D\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\u3092\u642d\u8f09\u3057\u305f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u306f\u3001L8_RGB565\u3068\u5727\u7e2eL8_RGB565\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"))}s.isMDXComponent=!0}}]);
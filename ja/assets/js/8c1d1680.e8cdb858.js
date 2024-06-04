"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[33609],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(59496),o=r(7029);const c=function(e){const t=e.noShadow||!1,r=e.width,c=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:c,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:c,src:i})),n.createElement("p",null,e.children))}},87008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>f,toc:()=>m});var n=r(59496),o=r(49613),c=r(95375),i=r(89639);const a=function(e){let t;e.noShadow;const[r,o]=(0,n.useState)(0);let c=()=>{const e=t.children[0];let n=-20*r;for(let o of t.children)o.style.transform=`translateX(${-e.offsetWidth*r+n}px)`,n+=20};return(0,n.useEffect)((()=>{c()})),n.createElement("div",{className:"slide-figure"},n.createElement("div",{className:"slide-figure-container",ref:e=>t=e},e.children),n.createElement("div",{className:"slide-previous",onClick:()=>{r-1<0?r=o(t.children.length-1):o(r-1),c()}}),n.createElement("div",{className:"slide-next",onClick:()=>{r+1>=t.children.length?o(0):o(r+1),c()}}),n.createElement("div",{className:"slide-dots"},e.children.map(((e,t)=>n.createElement("div",{className:"slide-dot",dotSelected:r==t?"":null})))))};function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"offline-documentation",title:"\u30aa\u30d5\u30e9\u30a4\u30f3\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},p=void 0,f={unversionedId:"resources/offline-documentation",id:"resources/offline-documentation",title:"\u30aa\u30d5\u30e9\u30a4\u30f3\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",description:"PWA\uff08Progressive Web App\uff09",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resources/offline-documentation.mdx",sourceDirName:"resources",slug:"/resources/offline-documentation",permalink:"/4.24/ja/docs/resources/offline-documentation",draft:!1,tags:[],version:"current",frontMatter:{id:"offline-documentation",title:"\u30aa\u30d5\u30e9\u30a4\u30f3\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},sidebar:"docs",previous:{title:"\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",permalink:"/4.24/ja/docs/resources/presentations"}},d={},m=[{value:"PWA\uff08Progressive Web App\uff09",id:"pwaprogressive-web-app",level:2},{value:"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306ePWA\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5",id:"touchgfx\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306epwa\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5",level:3},{value:"\u30aa\u30d5\u30e9\u30a4\u30f3PDF",id:"\u30aa\u30d5\u30e9\u30a4\u30f3pdf",level:2}],g={toc:m},h="wrapper";function v(e){var{components:t}=e,r=s(e,["components"]);return(0,o.kt)(h,l({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",l({},{id:"pwaprogressive-web-app"}),"PWA\uff08Progressive Web App\uff09"),(0,o.kt)("p",null,"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306fProgressive Web App\u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002 \u3064\u307e\u308a\u3001Google Chrome\u3084Microsoft Edge\u306a\u3069\u306ePC\u30d6\u30e9\u30a6\u30b6\u3067\u3001\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u3082\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u3082\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u30ed\u30fc\u30ab\u30eb\uff65\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h3",l({},{id:"touchgfx\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306epwa\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5"}),"TouchGFX\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306ePWA\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5"),(0,o.kt)("p",null,"\u6b21\u306e\u753b\u50cf\u306f\u3001Google Chrome\u3068Microsoft Edge\u3067PWA\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff65\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u308b\u5834\u6240\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)(a,{mdxType:"SlideFigure"},(0,o.kt)(i.Z,{imageSource:"/img/resources/offline-documentation/chrome-pwa.png",mdxType:"Figure"},"Google Chrome\u3067\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff65\u30dc\u30bf\u30f3\u306fURL\u30d0\u30fc\u306e\u53f3\u5074\u306b\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)(i.Z,{imageSource:"/img/resources/offline-documentation/edge-pwa.png",mdxType:"Figure"},"Microsoft Edge\u3067\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff65\u30dc\u30bf\u30f3\u306fURL\u30d0\u30fc\u306e\u53f3\u5074\u306b\u3042\u308a\u307e\u3059\u3002")),(0,o.kt)("p",null,"PWA\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3089\u3001\u3053\u308c\u3092\u958b\u304d\u3001\u5de6\u5074\u306e\u30d0\u30fc\u3067\u5225\u306e\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u307e\u3059\uff08\u300cTouchGFX\u3068\u306f\u300d\u306a\u3069\uff09\u3002 \u30aa\u30d5\u30e9\u30a4\u30f3\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30c8\u30ea\u30ac\u3059\u308b\u3053\u3068\u306f\u91cd\u8981\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u30d0\u30b0\u306b\u3088\u3063\u3066\u30a4\u30f3\u30bf\u30cd\u30c3\u30c8\u63a5\u7d9a\u304c\u5207\u65ad\u3055\u308c\u305f\u5834\u5408\u3067\u3082\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",l({},{id:"\u30aa\u30d5\u30e9\u30a4\u30f3pdf"}),"\u30aa\u30d5\u30e9\u30a4\u30f3PDF"),(0,o.kt)("p",null,"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306fPDF\u3068\u3057\u3066\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u306ePDF\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u30d6\u30e9\u30a6\u30b6\u3068\u540c\u3058\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u5b8c\u5168\u306b\u518d\u73fe\u3057\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30aa\u30d5\u30e9\u30a4\u30f3PDF\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001",(0,o.kt)(c.Z,{to:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/doc/4.23/touchgfx-documentation-4.23.pdf",target:"_blank",mdxType:"Link"},"\u3053\u3061\u3089\u3067\u5165\u624b\u3067\u304d\u307e\u3059"),"\u3002"))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[75683],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,g=m["".concat(c,".").concat(s)]||m[s]||u[s]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93822:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:l},this.props.children)}}const i=o},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},49018:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}const i=o},21100:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const i=o},20689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>h});n(59496);var r=n(49613),a=n(21100),l=n(93822),o=n(49018),i=n(95375),c=n(28128),d=n(89639);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"qr-code",title:"QR \ucf54\ub4dc"},s=void 0,g={unversionedId:"development/ui-development/ui-components/images/qr-code",id:"development/ui-development/ui-components/images/qr-code",title:"QR \ucf54\ub4dc",description:"QR Code\ub294 \uc778\ucf54\ub529\ud560 \ucf58\ud150\uce20\uac00 \uc81c\uacf5\ub418\uace0 \uc804\uacbd\uacfc \ubc30\uacbd\uc5d0 \uac01\uac01 \uc9c0\uc815\ub41c \uc0c9\uc0c1\uc774 \uc788\ub294 QR \ucf54\ub4dc\ub97c \uadf8\ub9b4 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/qr-code.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/qr-code",permalink:"/4.24/ko/docs/development/ui-development/ui-components/images/qr-code",draft:!1,tags:[],version:"current",frontMatter:{id:"qr-code",title:"QR \ucf54\ub4dc"},sidebar:"docs",previous:{title:"SVG Image",permalink:"/4.24/ko/docs/development/ui-development/ui-components/images/svg-image"},next:{title:"Containers",permalink:"/4.24/ko/docs/category/containers"}},k={},h=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131\ub41c \ucf54\ub4dc",id:"generated-code",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],v=(f="FurtherReading",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",p({},e))});var f;const N={toc:h},b="wrapper";function y(e){var{components:t}=e,n=m(e,["components"]);return(0,r.kt)(b,p({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"QR Code\ub294 \uc778\ucf54\ub529\ud560 \ucf58\ud150\uce20\uac00 \uc81c\uacf5\ub418\uace0 \uc804\uacbd\uacfc \ubc30\uacbd\uc5d0 \uac01\uac01 \uc9c0\uc815\ub41c \uc0c9\uc0c1\uc774 \uc788\ub294 QR \ucf54\ub4dc\ub97c \uadf8\ub9b4 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Note"},"TouchGFX Designer\uc758 \uce94\ubc84\uc2a4\uc5d0 \ud45c\uc2dc\ub418\ub294 \ubbf8\ub9ac \ubcf4\uae30 QR \ucf54\ub4dc\ub294 \uc815\uc801 \uc608\uc81c\uc774\uba70 \ud56d\uc0c1 \uc704\uc82f\uc5d0 \ub300\ud55c \ubb38\uc11c\ub85c \uc5f0\uacb0\ub429\ub2c8\ub2e4.",(0,r.kt)("p",null,"\uc2dc\ubbac\ub808\uc774\ud130\ub098 \ud0c0\uac9f\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\uc5ec \uc2e4\uc81c\ub85c \uc0dd\uc131\ub41c QR \ucf54\ub4dc\uc640 \uc0ac\uc6a9\uc790\uac00 \uc81c\uacf5\ud55c \ud14d\uc2a4\ud2b8\ub97c \ud655\uc778\ud574 \ubcf4\uc2ed\uc2dc\uc624.")),(0,r.kt)(d.Z,{imageSource:"/img/development/ui-development/ui-components/qr-code/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 QR \ucf54\ub4dc"),(0,r.kt)("h2",p({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"QR Code\ub294 TouchGFX Designer\uc758 Images \uc704\uc82f \uadf8\ub8f9\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(d.Z,{imageSource:"/img/development/ui-development/ui-components/qr-code/widget-group.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 QR Code"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c QR Code\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\uc774\ub984")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984\uc740 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4."),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\uc704\uce58")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X"),"\uc640 ",(0,r.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ud56d\ubaa9\uc744 \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\uc704\uc82f\uc758 \ud06c\uae30\ub294 QR \ucf54\ub4dc \ubc84\uc804\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X \ubc0f Y \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \uace0\uc815\ud558\uba74 \ud654\uba74\uc744 \ud1b5\ud574 \uc704\uc82f\uacfc \uc778\ud130\ub799\uc158\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \uc124\uc815\ud574\ub3c4 \ud654\uba74\uc744 \ud1b5\ud574 \uc704\uc82f\uacfc \uc778\ud130\ub799\uc158\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\uad6c\uc131")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"QR Version"),"\uc740 \ubc84\uc804 1\ubd80\ud130 \ubc84\uc804 40\uae4c\uc9c0\uc758 QR \ucf54\ub4dc \ubc94\uc704\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),'\ubc84\uc804 1\uc740 21x21 "\ube44\ud2b8"\uc785\ub2c8\ub2e4. \ubc84\uc804 40\uc740 177x177 "\ube44\ud2b8"\uc785\ub2c8\ub2e4. ',(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Scale"),"\uc740 QR \ucf54\ub4dc\ub97c \uadf8\ub9ac\ub294 \ubc30\uc728\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Text"),"\ub294 QR \ucf54\ub4dc\uc5d0 \uc778\ucf54\ub529\ud560 \ub0b4\uc6a9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Error Correction Code"),"\ub294 \uc798\ubabb\ub41c \ucf54\ub4dc\uc6cc\ub4dc\uc5d0 \ub300\ud55c \ud5c8\uc6a9 \uc624\ucc28 \uc218\uc900\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"\ubaa8\uc591")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0~255\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804\ud55c \ud22c\uba85\uc774\uba70 255\ub294 \ubd88\ud22c\uba85\uc785\ub2c8\ub2e4"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Foreground"),"\ub294 \uc804\uacbd\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc0c9\uc0c1\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 \uac80\uc740\uc0c9\uc785\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Background"),"\ub294 \ubc30\uacbd\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc0c9\uc0c1\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 \ud770\uc0c9\uc785\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc744 \ub4dc\ub798\uadf8\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \uc704\uc82f\uc774 \ud074\ub9ad \uc2dc \ub54c \ucf5c\ubc31\uc744 \ubc1c\uc0dd\uc2dc\ud0ac\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc774 ",(0,r.kt)("em",{parentName:"td"},"\uc54c\ud30c")," \uac12\uc5d0 \ub300\ud55c \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc560\ub2c8\uba54\uc774\uc158\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc774 ",(0,r.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12\uc5d0 \ub300\ud55c \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc560\ub2c8\uba54\uc774\uc158\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4")))),(0,r.kt)("h2",p({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,r.kt)("p",null,"TouchGFX Designer\uc758 QR Code\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",p({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub0a8\uc5d0 \ub530\ub77c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub0a8\uc5d0 \ub530\ub77c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\uc228\uaca8\uc9c4 \uc704\uc82f\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",p({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("p",null,"QR Code\ub294 \ud2b8\ub9ac\uac70\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",p({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"QR Code \uc704\uc82f\uc758 \uc131\ub2a5\uc740 \ud53d\uc140 \uacc4\uc0b0\uc73c\ub85c \uc778\ud574 \uc774\ubbf8\uc9c0\ubcf4\ub2e4 \ub290\ub9ac\uc9c0\ub9cc \ud654\uba74\uc5d0\uc11c \uc774\ub3d9\ud558\uac70\ub098 \uac04\ub2e8\ud55c \uc560\ub2c8\uba54\uc774\uc158\uc758 \uc77c\ubd80\ub85c \ud398\uc774\ub4dc\uc778\ud560 \uc218 \uc788\uc744 \ub9cc\ud07c \ube60\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",p({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",p({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("h3",p({},{id:"generated-code"}),"\uc0dd\uc131\ub41c \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc5d0 \ub300\ud574 \uc0dd\uc131\ub41c \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c QR Code\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc84\ud37c\ub294 \ud5e4\ub354 \ud30c\uc77c\uc5d0\uc11c \uc124\uc815\ub418\uba70(\uac15\uc870 \ud45c\uc2dc\ub41c \uc904 \ucc38\uc870), QR \ucf54\ub4dc \ube44\ud2b8 \uac12\uc744 \uacc4\uc0b0\ud558\uace0 \uc800\uc7a5\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{26-27}","{26-27}":!0}),"#ifndef SCREEN1VIEWBASE_HPP\n#define SCREEN1VIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n#include <touchgfx/widgets/QRCode.hpp>\n\nclass Screen1ViewBase : public touchgfx::View<Screen1Presenter>\n{\npublic:\n    Screen1ViewBase();\n    virtual ~Screen1ViewBase();\n    virtual void setupScreen();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box __background;\n    uint8_t qrBuffer_qrCode1[QRCODE_BUFFER_SIZE(1)];\n    uint8_t qrScratchBuffer_qrCode1[QRCODE_BUFFER_SIZE(1)];\n    touchgfx::QRCode qrCode1;\n\nprivate:\n\n};\n\n#endif // SCREEN1VIEWBASE_HPP\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{6-11}","{6-11}":!0}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    qrCode1.setXY(0, 0);\n    qrCode1.setBuffers(qrBuffer_qrCode1, qrScratchBuffer_qrCode1);\n    qrCode1.setQRCodeVersion(1);\n    qrCode1.setScale(5);\n    qrCode1.convertStringToQRCode("SUPPORT.TOUCHGFX.COM");\n    add(qrCode1);\n}\n\nScreen1ViewBase::~Screen1ViewBase()\n{\n\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Caution"},"\ubb38\uc790\uc5f4\uc774 QR Code\uc5d0 \ub4e4\uc5b4\uac08 \uc218 \uc788\ub294 \uae38\uc774\ubcf4\ub2e4 \uae34 \uacbd\uc6b0(\uc218\uc900\uc5d0 \ub530\ub77c \ub2e4\ub984) ",(0,r.kt)("code",null,"convertStringToQRCode")," \ud568\uc218\uac00 \uc2e4\ud328\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\ub294 \ud568\uc218\uc758 \ubc18\ud658 \uac12\uc744 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)(a.Z,{mdxType:"Tip"},"\uc774\ub7ec\ud55c \ud568\uc218\uc640 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 QR Code \ud074\ub798\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub2e4\ub978 \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubcc0\uacbd\ud558\ub294 \uacbd\uc6b0 ",(0,r.kt)("code",null,"qrCode1.invalidate()"),"\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub824\uc57c \ud55c\ub2e4\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9c8\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",p({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(v,{mdxType:"FurtherReading"},(0,r.kt)("li",null,"QR Code \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c ",(0,r.kt)(i.Z,{to:"../../../../api/classes/classtouchgfx_1_1_qr_code",mdxType:"Link"},"API \ucc38\uc870"))))}y.isMDXComponent=!0}}]);
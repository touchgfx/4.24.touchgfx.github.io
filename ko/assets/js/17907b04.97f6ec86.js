"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[35290],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const i=a},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const o=l},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=a},94790:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const i=a},21100:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),a=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}const o=l},94170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>g,toc:()=>k});n(59496);var r=n(49613),a=n(89639),i=n(48753),l=n(21100),o=n(94790),p=n(95375),u=n(28128);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"list-layout",title:"List Layout"},m=void 0,g={unversionedId:"development/ui-development/ui-components/containers/list-layout",id:"development/ui-development/ui-components/containers/list-layout",title:"List Layout",description:"List Layout \uc704\uc82f\uc740 \ubaa9\ub85d\uc5d0 \ud3ec\ud568\ub41c \ud558\uc704 \ub178\ub4dc\ub97c \uc77c\uc815\ud55c \ubc29\ud5a5\uc73c\ub85c \uc790\ub3d9 \ubc30\uc5f4\ud558\ub294 Container\uc785\ub2c8\ub2e4. \ub9ac\uc2a4\ud2b8 \ub808\uc774\uc544\uc6c3\uc5d0\uc11c \uc704\uc82f\uc744 \ucd94\uac00\ud558\uac70\ub098 \uc0ad\uc81c\ud558\uba74 \ud558\uc704 \ud56d\ubaa9\uc774 \ub2e4\uc2dc \ubc30\uc5f4\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/list-layout.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/list-layout",permalink:"/4.24/ko/docs/development/ui-development/ui-components/containers/list-layout",draft:!1,tags:[],version:"current",frontMatter:{id:"list-layout",title:"List Layout"},sidebar:"docs",previous:{title:"Swipe Container",permalink:"/4.24/ko/docs/development/ui-development/ui-components/containers/swipe-container"},next:{title:"Modal Window",permalink:"/4.24/ko/docs/development/ui-development/ui-components/containers/modal-window"}},h={},k=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc0c1\ud638\uc791\uc6a9",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"List Layout\uc758 \ud06c\uae30",id:"size-of-listlayout",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],y={toc:k},v="wrapper";function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(v,s({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"List Layout \uc704\uc82f\uc740 \ubaa9\ub85d\uc5d0 \ud3ec\ud568\ub41c \ud558\uc704 \ub178\ub4dc\ub97c \uc77c\uc815\ud55c \ubc29\ud5a5\uc73c\ub85c \uc790\ub3d9 \ubc30\uc5f4\ud558\ub294 ",(0,r.kt)("a",s({parentName:"p"},{href:"container"}),"Container"),"\uc785\ub2c8\ub2e4. \ub9ac\uc2a4\ud2b8 \ub808\uc774\uc544\uc6c3\uc5d0\uc11c \uc704\uc82f\uc744 \ucd94\uac00\ud558\uac70\ub098 \uc0ad\uc81c\ud558\uba74 \ud558\uc704 \ud56d\ubaa9\uc774 \ub2e4\uc2dc \ubc30\uc5f4\ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 List Layout"),(0,r.kt)("h2",s({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"List Layout\uc740 TouchGFX Designer\uc758 Containers \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 List Layout"),(0,r.kt)("h2",s({},{id:"properties"}),"\uc18d\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c List Layout\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc544\uc774\ucf58\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"H"),"\ub294 \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc5d0 \ub530\ub77c \uc544\uc774\ucf58\uc758 \uac00\ub85c \uae38\uc774\uc640 \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. List Layout\uc758 \ud06c\uae30\uc5d0 \ub530\ub77c \ud558\uc704 \ud56d\ubaa9\uc758 \uc804\uccb4 \ud06c\uae30\uac00 \uacb0\uc815\ub429\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock\uc740")," \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible\uc740")," \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc0c1\ud638\uc791\uc6a9\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Direction")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Direction\uc740")," \ub808\uc774\uc544\uc6c3\uc758 \ubc30\uc5f4 \ubc29\ud5a5\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \ub3d9\ucabd(\uc624\ub978\ucabd) \uac00\ub85c \ubc29\ud5a5 \ub808\uc774\uc544\uc6c3\uacfc \ub0a8\ucabd(\uc544\ub798) \uc138\ub85c \ubc29\ud5a5 \ub808\uc774\uc544\uc6c3 \uc911\uc5d0\uc11c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable\uc740")," \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener\ub294 ")," \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator\ub294 "),"\uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",s({},{id:"interactions"}),"\uc0c1\ud638\uc791\uc6a9"),(0,r.kt)("p",null,"TouchGFX Designer\uc758 List Layout\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",s({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",s({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("p",null,"List Layout\uc740 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",s({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"List Layout \uc790\uccb4\ub85c\ub294 \uc131\ub2a5\uc5d0 \ud070 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uc73c\uba70, \uac70\uc758 \uc804\uc801\uc73c\ub85c \ud558\uc704 \ub178\ub4dc\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \ub530\ub77c\uc11c List Layout\uc740 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc18d\ub3c4\uac00 \ub9e4\uc6b0 \ube60\ub978 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",s({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",s({},{id:"size-of-listlayout"}),"List Layout\uc758 \ud06c\uae30"),(0,r.kt)("p",null,"List Layout\uc774 TouchGFX Designer\uc5d0 \uc0bd\uc785\ub420 \ub54c \ud06c\uae30\uac00 250 x 250\ud53d\uc140\ub85c \uc124\uc815\ub429\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","Designer\uc5d0 \uc788\ub294 List Layout\uc5d0 \uc704\uc82f\uc744 \ucd94\uac00\ud558\ub294 \uacbd\uc6b0 List Layout \ud06c\uae30\uac00 \ud558\uc704 \uc704\uc82f\uc758 \ud3ed\uacfc \ub192\uc774\uc5d0 \ub9de\ub3c4\ub85d \uc870\uc815\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc704 \uc704\uc82f\uc744 Designer\uc5d0 \ucd94\uac00\ud558\uc9c0 \uc54a\uace0 \ucf54\ub4dc\uc5d0\ub9cc \ucd94\uac00\ud558\ub294 \uacbd\uc6b0 List Layout\uc774 Designer\uc5d0\uc11c \uc0dd\uc131\ud55c \ucd08\uae30 \uacf5\uac04\uc744 \uc81c\uac70\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 TouchGFX Designer\uc5d0 List Layout\uc744 \ucd94\uac00\ud55c \uc608\uc2dc\uc785\ub2c8\ub2e4. \ubc30\uacbd\uc5d0\ub294 \ub178\ub780\uc0c9 \uc0c1\uc790\uac00 \uc788\uace0 List Layout \ubc14\ub85c \ub4a4\uc5d0 \uc788\ub294 \ud770\uc0c9 \uc0c1\uc790\uac00 \uadf8 \uc601\uc5ed\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/designer-example.png",mdxType:"Figure"},"Designer\uc5d0 \uc788\ub294 List Layout."),(0,r.kt)("p",null,"List Layout\uc5d0 \uc5b4\ub5a0\ud55c \ud558\uc704 \uc704\uc82f\ub3c4 \ucd94\uac00\ud558\uc9c0 \uc54a\uc558\uc73c\ubbc0\ub85c \ud06c\uae30\ub294 \uae30\ubcf8\uc778 250 x 250\ud53d\uc140\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0 \uc138 \uac1c\uc758 TextArea\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{8-8}","{8-8}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    //listLayout1.setWidthHeight(0, 0); // List Layout\uc5d0\uc11c \uc5ec\ubd84\uc758 \uacf5\uac04 \uc81c\uac70\n    for (int i=0; i < 3; i++)\n    {\n        TextArea *textArea = new TextArea();\n        textArea->setWidthHeight(100, 25);\n        textArea->setTypedText(touchgfx::TypedText(T_RESOURCEID1));\n        listLayout1.add(*textArea);\n    }\n    listBackground.setWidthHeight(listLayout1);\n}\n")),(0,r.kt)("p",null,"\ub9c8\uc9c0\ub9c9 \uc904\uc740 \ud770\uc0c9 \uc0c1\uc790\uc758 \ud06c\uae30\uac00 List Layout\uc758 \ud06c\uae30\uc640 \uac19\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4 (\uc0c8\ub85c\uc6b4 \ud558\uc704 \uc704\uc82f\uc744 \ucd94\uac00\ud55c \ud6c4). \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub2e4\uc74c\uacfc \uac19\uc774 \uc644\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/demo-1.png",mdxType:"Figure"},"List Layout\uc758 \uc608\uc81c."),(0,r.kt)("p",null,"List Layout\uc774 \uc138 \uac1c\uc758 \ud558\uc704 \uc704\uc82f\ubcf4\ub2e4 \ub192\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub192\uc774\ub294 \uc815\ud655\ud788 375\ud53d\uc140\uc774\uba70 \ub108\ube44\ub294 250\ud53d\uc140\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"setupScreen() \ud568\uc218\uc5d0\uc11c 8\ubc88\uc9f8 \uc904\uc758 \uc8fc\uc11d \ucc98\ub9ac\ub97c \uc81c\uac70\ud558\uba74 \uc544\ub798\uc640 \uac19\uc740 \uc774\ubbf8\uc9c0\ub97c \uc5bb\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/demo-2.png",mdxType:"Figure"},"List Layout\uc758 \uc608\uc81c."),(0,r.kt)("h2",s({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("h3",s({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74TouchGFX Designer\uc5d0\uc11c List Layout\uc774 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    listLayout1.setDirection(touchgfx::SOUTH);\n    listLayout1.setXY(90, 111);\n\n    box1.setWidth(50);\n    box1.setHeight(50);\n    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n    listLayout1.add(box1);\n\n    add(listLayout1);\n}\n")),(0,r.kt)(l.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 ListLayout \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"listLayout1.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",s({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,r.kt)("p",null,"List Layout\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/list-layout-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 List Layout Example UI \ud15c\ud50c\ub9bf"),(0,r.kt)("h2",s({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_list_layout",mdxType:"Link"},"ListLayout \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}f.isMDXComponent=!0}}]);
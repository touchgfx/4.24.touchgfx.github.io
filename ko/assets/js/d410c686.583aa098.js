"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[11204],{49613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28128:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(59496);class r extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const o=r},89639:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(59496),r=n(7029);const o=function(t){const e=t.noShadow||!1,n=t.width,o=t.height,l=(0,r.Z)(t.imageSource);return e?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,t.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,t.children))}},48753:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(59496),r=n(96151);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const i=l},96151:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(59496);class r extends a.Component{render(){const t=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:t},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const o=r},94790:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(59496);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}const o=r},21100:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(59496),r=n(96151);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const i=l},71151:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>k,toc:()=>h});n(59496);var a=n(49613),r=n(89639),o=n(48753),l=n(21100),i=n(94790),d=n(95375),p=n(28128);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},u.apply(this,arguments)}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const c={id:"radio-button",title:"Radio Button"},s=void 0,k={unversionedId:"development/ui-development/ui-components/buttons/radio-button",id:"development/ui-development/ui-components/buttons/radio-button",title:"Radio Button",description:"TouchGFX\uc5d0\uc11c Radio Button\uc740 Radio Button\uc744 \ud074\ub9ad\ud560 \ub54c \ud130\uce58 \uc774\ubca4\ud2b8\ub97c \uc778\uc9c0\ud558\uc5ec \ucf5c\ubc31\uc744 \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \ub77c\ub514\uc624 \ubc84\ud2bc\uc740 4\uac00\uc9c0 \uc774\ubbf8\uc9c0\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70, \ub20c\ub800\uc744 \ub54c\uc640 \ub5d0\uc744 \ub54c\uc758 \uc0c1\ud0dc\uc5d0\uc11c \uc120\ud0dd\ud588\uac70\ub098 \uc120\ud0dd\ud558\uc9c0 \uc54a\uc740 \ubc84\ud2bc\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. Radio Button\uc740 Radio Button Group\uc5d0 \ucd94\uac00\ub418\uc5b4 \uc0c8\ub85c\uc6b4 \uc635\uc158\uc744 \uc120\ud0dd\ud588\uc744 \ub54c \ub77c\ub514\uc624 \ubc84\ud2bc\uc758 \uc120\ud0dd \ud574\uc81c\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/buttons/radio-button.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/radio-button",permalink:"/4.24/ko/docs/development/ui-development/ui-components/buttons/radio-button",draft:!1,tags:[],version:"current",frontMatter:{id:"radio-button",title:"Radio Button"},sidebar:"docs",previous:{title:"Toggle Button",permalink:"/4.24/ko/docs/development/ui-development/ui-components/buttons/toggle-button"},next:{title:"Repeat Button",permalink:"/4.24/ko/docs/development/ui-development/ui-components/buttons/repeat-button"}},g={},h=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:2},{value:"API \ucc38\uc870",id:"api-reference",level:2}],N={toc:h},b="wrapper";function v(t){var{components:e}=t,n=m(t,["components"]);return(0,a.kt)(b,u({},N,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TouchGFX\uc5d0\uc11c Radio Button\uc740 Radio Button\uc744 \ud074\ub9ad\ud560 \ub54c \ud130\uce58 \uc774\ubca4\ud2b8\ub97c \uc778\uc9c0\ud558\uc5ec \ucf5c\ubc31\uc744 \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \ub77c\ub514\uc624 \ubc84\ud2bc\uc740 4\uac00\uc9c0 \uc774\ubbf8\uc9c0\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70, \ub20c\ub800\uc744 \ub54c\uc640 \ub5d0\uc744 \ub54c\uc758 \uc0c1\ud0dc\uc5d0\uc11c \uc120\ud0dd\ud588\uac70\ub098 \uc120\ud0dd\ud558\uc9c0 \uc54a\uc740 \ubc84\ud2bc\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. Radio Button\uc740 Radio Button Group\uc5d0 \ucd94\uac00\ub418\uc5b4 \uc0c8\ub85c\uc6b4 \uc635\uc158\uc744 \uc120\ud0dd\ud588\uc744 \ub54c \ub77c\ub514\uc624 \ubc84\ud2bc\uc758 \uc120\ud0dd \ud574\uc81c\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"flex-button"}),"Flex Button"),"\uc744 \uc0ac\uc6a9\ud558\uba74 Radio Button\uc744 \ubcf5\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Flex Button\uc774\ub780 \uc720\uc5f0\uc131\uc774 \ub192\uc544 \ub354\uc6b1 \ub2e4\uc591\ud558\uac8c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ub300\uc2e0 RAM \uc6a9\ub7c9\uc744 \ub354 \ub9ce\uc774 \ucc28\uc9c0\ud558\ub294 \ubc84\ud2bc\uc744 \ub9d0\ud569\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Radio Button"),(0,a.kt)("h2",u({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,a.kt)("p",null,"Radio Button\uc740 TouchGFX Designer\uc758 Buttons \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/radio-button/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Radio Button"),(0,a.kt)("h2",u({},{id:"properties"}),"\uc18d\uc131"),(0,a.kt)("p",null,"Radio Button\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\ubc84\ud2bc\uc758 \ud06c\uae30\ub294 \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Selection")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Selected"),"\ub294 \ucd08\uae30 \ubc84\ud2bc \uc0c1\ud0dc\ub97c \uc120\ud0dd\uc73c\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"Deselectable"),"\uc740 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c \ubc84\ud2bc\uc744 \ub20c\ub800\uc744 \ub54c \uc120\ud0dd\uc744 \ud574\uc81c\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Group")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Group"),"\uc740 \ubc84\ud2bc\uc774 \ud560\ub2f9\ub418\ub294 \uadf8\ub8f9\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc774 Radio Button Group\uc5d0 \uc120\ud0dd \ubc0f \uc120\ud0dd \ud574\uc81c \ub3d9\uc791\ub3c4 \ud3ec\ud568\ub429\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Style\uc740")," \uc704\uc82f\uc758 \uc0ac\uc804 \uc124\uc815\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc740 \uc0ac\uc804 \uc124\uc815 \uac12\uc73c\ub85c \uc9c0\uc815\ub429\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc774 \uc2a4\ud0c0\uc77c\uc5d0\ub294 \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\ubbf8\uc9c0\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Image")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Released Image")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"Pressed Image"),"\ub294 Designer \uc2a4\ud0a8 \ub77c\uc774\ube0c\ub7ec\ub9ac \ub610\ub294 Project \ud3f4\ub354\uc5d0\uc11c \ubc84\ud2bc\uc744 \ub20c\ub800\uc744 \ub54c\uc640 \ub5d0\uc744 \ub54c\uc758 \uc0c1\ud0dc\uc5d0 \ud560\ub2f9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,a.kt)("em",{parentName:"td"},"\uc54c\ud30c")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator\ub294")," \uc704\uc82f\uc758 ",(0,a.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,a.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h2",u({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,a.kt)("p",null,"Radio Button\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",u({},{id:"actions"}),"\uc561\uc158"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,a.kt)("h3",u({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud2b8\ub9ac\uac70")),(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Radio Button is selected")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Radio Button\uc774 \uc120\ud0dd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Radio Button is deselected")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Radio Button\uc774 \uc120\ud0dd \ud574\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")))),(0,a.kt)("h2",u({},{id:"performance"}),"\uc131\ub2a5"),(0,a.kt)("p",null,"Radio Button\uc740 4\uac00\uc9c0 \uc774\ubbf8\uc9c0\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70, \uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc18d\ub3c4\uac00 \ube60\ub978 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",u({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",u({},{id:"examples"}),"\uc608\uc81c"),(0,a.kt)("h3",u({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,a.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c \ub77c\ub514\uc624 \ubc84\ud2bc\uc774 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\ncreen1ViewBase::Screen1ViewBase() :\n    radioButtonSelectedCallback(this, &Screen1ViewBase::radioButtonSelectedCallbackHandler)\n{\n    radioButtonName.setXY(136, 114);\n    radioButtonName.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_INACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_PRESSED_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_ACTIVE_ID), touchgfx::Bitmap(BITMAP_BLUE_CHECK_BUTTONS_CHECK_MARK_NORMAL_ID));\n    radioButtonName.setSelected(false);\n    radioButtonName.setDeselectionEnabled(true);\n\n    add(radioButtonName);\n    radioButtonGroupName.add(radioButtonName);\n\n    radioButtonGroupName.setRadioButtonSelectedHandler(radioButtonSelectedCallback);\n}\n\nvoid Screen1ViewBase::radioButtonSelectedCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &radioButtonName)\n    {\n        //InteractionName\n        //When buttonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,a.kt)(l.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 RadioButton \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)(i.Z,{mdxType:"InlineCode"},"radioButtonName.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",u({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,a.kt)("p",null,"Radio Button\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/radio-button-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Radio Button Example UI \ud15c\ud50c\ub9bf"),(0,a.kt)("h2",u({},{id:"api-reference"}),"API \ucc38\uc870"),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_radio_button",mdxType:"Link"},"RadioButton \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870 "))))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[11624],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=l,k=u["".concat(m,".").concat(s)]||u[s]||d[s]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496);class l extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const r=l},89639:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496),l=n(7029);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,l.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),l=n(96151);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const i=o},96151:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496);class l extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{className:e},a.createElement("div",{className:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{className:"highlight-content"},this.props.children))}}const r=l},94790:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496);class l extends a.Component{render(){return a.createElement("code",null,this.props.children)}}const r=l},21100:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),l=n(96151);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(l.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}const i=o},84792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>k,toc:()=>h});n(59496);var a=n(49613),l=n(89639),r=n(48753),o=n(21100),i=n(94790),m=n(95375),p=n(28128);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const d={id:"analog-clock",title:"Analog Clock"},s=void 0,k={unversionedId:"development/ui-development/ui-components/miscellaneous/analog-clock",id:"development/ui-development/ui-components/miscellaneous/analog-clock",title:"Analog Clock",description:"Analog Clock\uc740 \ud14d\uc2a4\ud2b8\ub85c \uc2dc\uac04\uc744 \ud45c\uc2dc\ud558\ub294 DigitalClock\uc640 \ub2ec\ub9ac \uc804\ud1b5\uc801\uc778 \ud615\ud0dc\uc758 \uc544\ub0a0\ub85c\uadf8 \uc2dc\uacc4\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \uc774 \uc2dc\uacc4\ub294 \ubb38\uc790\ud310\uc744 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc2dc\uac04, \ubd84 \ubc0f \ucd08\ub97c \ub098\ud0c0\ub0b4\ub294 \ubc14\ub298\uc774 \uac01\uac01 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud558\uba70, \uad6c\uc131 \uac00\ub2a5\ud55c \uc911\uc2ec\uc744 \ucd95\uc73c\ub85c \ud68c\uc804\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/analog-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/analog-clock",permalink:"/4.24/ko/docs/development/ui-development/ui-components/miscellaneous/analog-clock",draft:!1,tags:[],version:"current",frontMatter:{id:"analog-clock",title:"Analog Clock"},sidebar:"docs",previous:{title:"Text Area",permalink:"/4.24/ko/docs/development/ui-development/ui-components/miscellaneous/text-area"},next:{title:"Digital Clock",permalink:"/4.24/ko/docs/development/ui-development/ui-components/miscellaneous/digital-clock"}},g={},h=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"Time",id:"time",level:3},{value:"Clock Hands",id:"clock-hands",level:3},{value:"\uc2dc\uac04, \ubd84, \ucd08 \ubc14\ub298",id:"hour-minute-and-second-hands",level:4},{value:"\uc560\ub2c8\uba54\uc774\uc158",id:"animation",level:3},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],v={toc:h},N="wrapper";function b(e){var{components:t}=e,n=u(e,["components"]);return(0,a.kt)(N,c({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Analog Clock\uc740 \ud14d\uc2a4\ud2b8\ub85c \uc2dc\uac04\uc744 \ud45c\uc2dc\ud558\ub294 ",(0,a.kt)("a",c({parentName:"p"},{href:"digital-clock"}),"DigitalClock"),"\uc640 \ub2ec\ub9ac \uc804\ud1b5\uc801\uc778 \ud615\ud0dc\uc758 \uc544\ub0a0\ub85c\uadf8 \uc2dc\uacc4\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \uc774 \uc2dc\uacc4\ub294 \ubb38\uc790\ud310\uc744 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc2dc\uac04, \ubd84 \ubc0f \ucd08\ub97c \ub098\ud0c0\ub0b4\ub294 \ubc14\ub298\uc774 \uac01\uac01 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud558\uba70, \uad6c\uc131 \uac00\ub2a5\ud55c \uc911\uc2ec\uc744 \ucd95\uc73c\ub85c \ud68c\uc804\ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Analog Clock(\uac00\uc18d \uc601\uc0c1)"),(0,a.kt)("h2",c({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,a.kt)("p",null,"Analog Clock\uc740 TouchGFX Designer\uc758 Miscellaneous \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Analog Clock"),(0,a.kt)("h2",c({},{id:"properties"}),"\uc18d\uc131"),(0,a.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Analog Clock\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"}," \ubc84\ud2bc\uc758 \ud06c\uae30\ub294 \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4.")," ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Style"),"\uc740 \uc704\uc82f\uc758 \uc0ac\uc804 \uc124\uc815\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc120\ud0dd\ud558\ub294 \uc18d\uc131\uc740 \uc0ac\uc804 \uc124\uc815 \uac12\uc73c\ub85c \uc9c0\uc815\ub429\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"\uc774 \uc2a4\ud0c0\uc77c\uc5d0\ub294 \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\ubbf8\uc9c0\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Image"),"\ub294 \ubc30\uacbd\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Rotation Center X"),"\uc640 ",(0,a.kt)("em",{parentName:"td"},"Rotation Center Y"),"\ub294 \uc2dc\uacc4 \ubc14\ub298\uc774 \ud68c\uc804\ud558\ub294 \uc911\uc2ec \uc810\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Time")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Use Am/Pm"),"\uc740 \uc2dc\uac04\uc5d0 \ub300\ud55c 12h \ub610\ub294 24h \ud615\uc2dd \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Initial Time"),"\uc740 \uc2dc\uacc4\uc5d0 \ud45c\uc2dc\ub418\ub294 \ucd08\uae30 \uc2dc\uac04\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Clock Hands")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Clock Hands"),"\ub294  Analog Clock\uc5d0 \ud45c\uc2dc\ud560 \uc2dc\uacc4 \ubc14\ub298",(0,a.kt)("em",{parentName:"td"},"(\ucd08, \ubd84, \uc2dc\uac04 \ubc14\ub298)")," \uacfc \uac01 \ubc14\ub298\uc758 \uc21c\uc11c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),"\uac01 \uc2dc\uacc4 \ubc14\ub298\ub9c8\ub2e4 ",(0,a.kt)("em",{parentName:"td"},"\ubc14\ub298 \uc774\ubbf8\uc9c0"),"\ub97c \ube44\ub86f\ud574 ",(0,a.kt)("em",{parentName:"td"},"Rotation Position X")," \uc640 ",(0,a.kt)("em",{parentName:"td"},"Rotation Position Y"),"\ub97c \uc124\uc815\ud558\uc5ec \ud68c\uc804 \uc9c0\uc810\uae4c\uc9c0 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null)," \ubd84 \ubc14\ub298\uacfc \uc2dc\uac04 \ubc14\ub298\uc5d0\ub294 ",(0,a.kt)("em",{parentName:"td"},"Sweeping Movement\ub97c \uc124\uc815\ud558\uc5ec \ub3cc\uc544\uac00\ub294 \ubc14\ub298\uc758 \uc6c0\uc9c1\uc784\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animations")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Animate Clock Hand Movement"),"\ub294 \uc2dc\uacc4 \ubc14\ub298 \uc560\ub2c8\uba54\uc774\uc158\uc758 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Duration"),"\uc740 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc2dc\uac04\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Easing")," \ubc0f ",(0,a.kt)("em",{parentName:"td"},"Easing Option"),"\uc740 \uc0ac\uc6a9\ud560 \uc644\ud654 \ubc29\uc815\uc2dd\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,a.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,a.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,a.kt)("h3",c({},{id:"time"}),"Time"),(0,a.kt)("p",null,"Time \uc18d\uc131 \uadf8\ub8f9\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \uc2dc\uacc4 \uc704\uc82f\uc758 \ucd08\uae30 \uc2dc\uac04\uacfc Am/Pm \ud45c\uc900 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"Am/Pm\uc744 \uc120\ud0dd\ud558\uba74 \ucf54\ub4dc \uc0dd\uc131\ub3c4 \uc57d\uac04 \ubc14\ub00c\uac8c \ub429\ub2c8\ub2e4. Analog Clock\uc5d0\uc11c \uc2dc\uac04\uc744 \ucd08\uae30\ud654\ud560 \ub54c \ub2e4\uc74c \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,a.kt)("p",null,"12\uc2dc\uac04 \ud45c\uae30\ubc95\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \ub2e4\uc74c \ud568\uc218\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("p",null,"\uc2dc\uacc4\uc5d0 \ud45c\uc2dc\ub418\ub294 \uc2dc\uac04\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \ub2e4\uc74c \ud568\uc218 \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("h3",c({},{id:"clock-hands"}),"Clock Hands"),(0,a.kt)("p",null,"Clock Hands \uc18d\uc131 \uadf8\ub8f9\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \uc0ac\uc6a9\ud560 \ubc14\ub298\uacfc \ubc14\ub298\uc758 \uc21c\uc11c\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uccab \ubc88\uc9f8\ub85c \uc815\uc758\ud558\ub294 \ubc14\ub298\uc774 \ub098\uba38\uc9c0 \ubc14\ub298 \uc704\ub85c \ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4."),(0,a.kt)("h4",c({},{id:"hour-minute-and-second-hands"}),"\uc2dc\uac04, \ubd84, \ucd08 \ubc14\ub298"),(0,a.kt)("p",null,"\uac01 \ubc14\ub298\ub9c8\ub2e4 \uc774\ubbf8\uc9c0\uc640 \ud68c\uc804 \uc9c0\uc810\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ud68c\uc804 \uc9c0\uc810\uc5d0 \ub530\ub77c \uc815\uc758\ud55c \ubc14\ub298 \uc774\ubbf8\uc9c0\uac00 \ud68c\uc804\ud558\ub294 \uc911\uc2ec \uc9c0\uc810\uc774 \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-hands-props-v4.17.webp",mdxType:"Figure"},"\uc2dc\uacc4 \ubc14\ub298 \uc18d\uc131"),(0,a.kt)("p",null,"\uc2dc\uac04 \ubc14\ub298\uacfc \ubd84 \ubc14\ub298\uc5d0\uc11c\ub294 ",(0,a.kt)("em",{parentName:"p"},"Sweeping Movement")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc635\uc158\uc744 \ud65c\uc131\ud654\ud558\uba74 \ubc14\ub298\uc774 \ud55c \uc704\uce58\uc5d0\uc11c \ub2e4\ub978 \uc704\uce58\ub85c \uc21c\uc2dd\uac04\uc5d0 \uc774\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-no-sweeping-movement.webp",mdxType:"Figure"},"Sweeping Movement\uac00 \ube44\ud65c\uc131\ud654\ub41c \ubaa8\uc2b5"),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-with-sweeping-movement.webp",mdxType:"Figure"},"Sweeping Movement\uac00 \ud65c\uc131\ud654\ub41c \ubaa8\uc2b5"),(0,a.kt)("h3",c({},{id:"animation"}),"\uc560\ub2c8\uba54\uc774\uc158"),(0,a.kt)("p",null,"Animation \uc139\uc158\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \ubc14\ub298 \uc6c0\uc9c1\uc784\uc744 \ub354\uc6b1 \uace0\uae09\uc2a4\ub7fd\uac8c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc2dc\uac04 \ubc0f \ubd84 \ubc14\ub298\uc5d0\uc11c ",(0,a.kt)("em",{parentName:"p"},"Sweeping Movement")," \uc635\uc158\uc744 \ud65c\uc131\ud654\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 \uc560\ub2c8\uba54\uc774\uc158 Duration\uc744 '30'\uc73c\ub85c, Easing\uc744 'Bounce'\ub85c, Easing Option\uc744 'Out'\uc73c\ub85c \uc124\uc815\ud55c \uc608\uc785\ub2c8\ub2e4."),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-animation.webp",mdxType:"Figure"},"\uc2dc\uacc4 \uc560\ub2c8\uba54\uc774\uc158 \uc608"),(0,a.kt)("h2",c({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,a.kt)("p",null,"Analog Clock\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",c({},{id:"actions"}),"\uc561\uc158"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,a.kt)("th",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,a.kt)("h3",c({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,a.kt)("p",null,"Analog Clock\uc740 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",c({},{id:"performance"}),"\uc131\ub2a5"),(0,a.kt)("p",null,"Analog Clock\uc740 ",(0,a.kt)("a",c({parentName:"p"},{href:"../images/image"}),"\uc774\ubbf8\uc9c0")," 1\uac1c\uc640 ",(0,a.kt)("a",c({parentName:"p"},{href:"../images/texture-mapper"}),"\ud14d\uc2a4\ucc98 \ub9e4\ud37c")," 3\uac1c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70, \uc5ec\uae30\uc11c \ud14d\uc2a4\ucc98 \ub9e4\ud37c\ub294 MCU \ub9ac\uc18c\uc2a4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \uad6c\uc131\uc694\uc18c\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c Analog clock\uc740 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uae4c\ub2e4\ub85c\uc6b4 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",c({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",c({},{id:"examples"}),"\uc608\uc81c"),(0,a.kt)("h3",c({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,a.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74TouchGFX Designer\uc5d0\uc11c Analog Clock\uc774 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    analogClock.setXY(124, 15);\n    analogClock.setBackground(BITMAP_BLUE_CLOCKS_BACKGROUNDS_CLOCK_STANDARD_BACKGROUND_ID, 116, 116);\n    analogClock.setupMinuteHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_MINUTE_HAND_ID, 7, 67);\n    analogClock.setMinuteHandSecondCorrection(false);\n    analogClock.setupHourHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_HOUR_HAND_ID, 7, 52);\n    analogClock.setHourHandMinuteCorrection(false);\n    analogClock.setupSecondHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_SECOND_HAND_ID, 3, 66);\n    analogClock.initializeTime24Hour(10, 10, 0);\n\n    add(analogClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 AnalogClock \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,a.kt)(i.Z,{mdxType:"InlineCode"},"analogClock.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",c({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,a.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub294 \uc2dc\uacc4 \uc6c0\uc9c1\uc784\uc744 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc744 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int analogHours;\n    int analogMinutes;\n    int analogSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    analogHours = analogClock.getCurrentHour();\n    analogMinutes = analogClock.getCurrentMinute();\n    analogSeconds = analogClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++analogSeconds >= 60)\n        {\n            analogSeconds = 0;\n            if (++analogMinutes >= 60)\n            {\n                analogMinutes = 0;\n                if (++analogHours >= 24)\n                {\n                    analogHours = 0;\n                }\n            }\n        }\n\n        // Update the clocks\n        analogClock.setTime24Hour(analogHours, analogMinutes, analogSeconds);\n    }\n}\n")),(0,a.kt)("h3",c({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,a.kt)("p",null,"Analog Clock\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c Example\uc744 \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)(l.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Clock Example"),(0,a.kt)("h2",c({},{id:"api-reference"}),"API \ucc38\uc870"),(0,a.kt)(r.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_analog_clock",mdxType:"Link"},"AnalogClock \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}b.isMDXComponent=!0}}]);
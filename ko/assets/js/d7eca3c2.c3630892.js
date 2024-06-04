"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[87629],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,g=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const i=o},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a},94790:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}const l=a},21100:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),a=n(96151);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}const i=o},94517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>h});n(59496);var r=n(49613),a=n(89639),l=n(48753),o=n(21100),i=n(94790),p=n(95375),m=n(28128);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"flex-button",title:"Flex Button"},s=void 0,g={unversionedId:"development/ui-development/ui-components/buttons/flex-button",id:"development/ui-development/ui-components/buttons/flex-button",title:"Flex Button",description:"TouchGFX\uc5d0\uc11c Flex Button\uc740 Flex Button\uc774 \ud2b8\ub9ac\uac70\ub418\uc5c8\uc744 \ub54c \ud130\uce58 \uc774\ubca4\ud2b8\ub97c \uc778\uc9c0\ud558\uc5ec \ucf5c\ubc31\uc744 \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \ud50c\ub809\uc2a4 \ubc84\ud2bc\uc740 \uc0ac\uc6a9\uc790\uc758 \ud544\uc694\uc5d0 \ub530\ub77c \uc870\uc815\ub429\ub2c8\ub2e4. \ub2e4\ub978 \ubc84\ud2bc \uc720\ud615\uc758 \ub3d9\uc791\uacfc \ubaa8\uc2b5\uc744 \uc870\ud569\ud560 \uc218 \uc788\uc9c0\ub9cc, \ub300\uc2e0 RAM \uc0ac\uc6a9\ub7c9\uc774 \uc880 \ub354 \ub298\uc5b4\ub0a9\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub298\uc5b4\ub098\ub294 \uc6a9\ub7c9\uc740 \ub300\uccb4\ub85c \ud06c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Flex Button\uc740 \ucd5c\ub300 4\uac00\uc9c0 \uc2dc\uac01\uc801 \uc694\uc18c, \uc989 BoxWithBorder, Icon, Text, Image\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/buttons/flex-button.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/flex-button",permalink:"/4.24/ko/docs/development/ui-development/ui-components/buttons/flex-button",draft:!1,tags:[],version:"current",frontMatter:{id:"flex-button",title:"Flex Button"},sidebar:"docs",previous:{title:"Repeat Button",permalink:"/4.24/ko/docs/development/ui-development/ui-components/buttons/repeat-button"},next:{title:"Images",permalink:"/4.24/ko/docs/category/images"}},k={},h=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:4},{value:"API \ucc38\uc870",id:"api-reference",level:2}],N={toc:h},f="wrapper";function b(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(f,u({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX\uc5d0\uc11c Flex Button\uc740 Flex Button\uc774 \ud2b8\ub9ac\uac70\ub418\uc5c8\uc744 \ub54c \ud130\uce58 \uc774\ubca4\ud2b8\ub97c \uc778\uc9c0\ud558\uc5ec \ucf5c\ubc31\uc744 \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \ud50c\ub809\uc2a4 \ubc84\ud2bc\uc740 \uc0ac\uc6a9\uc790\uc758 \ud544\uc694\uc5d0 \ub530\ub77c \uc870\uc815\ub429\ub2c8\ub2e4. \ub2e4\ub978 \ubc84\ud2bc \uc720\ud615\uc758 \ub3d9\uc791\uacfc \ubaa8\uc2b5\uc744 \uc870\ud569\ud560 \uc218 \uc788\uc9c0\ub9cc, \ub300\uc2e0 RAM \uc0ac\uc6a9\ub7c9\uc774 \uc880 \ub354 \ub298\uc5b4\ub0a9\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub298\uc5b4\ub098\ub294 \uc6a9\ub7c9\uc740 \ub300\uccb4\ub85c \ud06c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Flex Button\uc740 \ucd5c\ub300 4\uac00\uc9c0 \uc2dc\uac01\uc801 \uc694\uc18c, \uc989 BoxWithBorder, Icon, Text, Image\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/flex-button/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Flex Button(BoxWithBorder, Icon \uadf8\ub9ac\uace0 Text \uc694\uc18c \uc870\ud569)"),(0,r.kt)("h2",u({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"Flex Button\uc740 TouchGFX Designer\uc758 Buttons \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/flex-button/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Flex Button"),(0,r.kt)("h2",u({},{id:"properties"}),"\uc18d\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Flex Button\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Trigger")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Click")," , ",(0,r.kt)("em",{parentName:"td"},"Touch")," , ",(0,r.kt)("em",{parentName:"td"},"Toggle")," \uacfc ",(0,r.kt)("em",{parentName:"td"},"Repeat\ub294")," \ubc84\ud2bc \ucf5c\ubc31\uc744 \ud2b8\ub9ac\uac70\ud558\ub294 \uc561\uc158\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Visual Elements")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Image"),", ",(0,r.kt)("em",{parentName:"td"},"Box With Border"),", ",(0,r.kt)("em",{parentName:"td"},"Text")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Icon\uc740")," \uc704\uc82f\uc758 \uc2dc\uac01\uc801 \ud615\ud0dc\ub97c \uad6c\uc131\ud558\ub294 \uc694\uc18c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable\uc740")," \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener\ub294 "),"\ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator\ub294 ")," \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"\uc54c\ud30c")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator\ub294")," \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"X ")," \ubc0f",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",u({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,r.kt)("p",null,"Flex Button\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",u({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",u({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Trigger")),(0,r.kt)("th",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Button is clicked")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\ubc84\ud2bc\uc774 \ud074\ub9ad\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h2",u({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"Flex Button\uc740 Box 2\uac1c, Image 4\uac1c, Text 1\uac1c\uae4c\uc9c0 \uad6c\uc131\ud560 \uc218 \uc788\uc73c\uba70, \uc774\ubbf8\uc9c0 \ubc0f \ud14d\uc2a4\ud2b8 \uadf8\ub9ac\uae30\uc758 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc2b5\ub2c8\ub2e4. \ud14d\uc2a4\ud2b8 \uadf8\ub9ac\uae30\ub294 \ud14d\uc2a4\ud2b8 \ubb38\uc790\uc758 \ud2b9\uc131\uc73c\ub85c \uc778\ud574 \uc54c\ud30c \ube14\ub80c\ub529 \ucc98\ub9ac\uac00 \ub9ce\ub2e4\ub294 \uc810\uc744 \uc81c\uc678\ud558\uba74 \uc77c\ubc18\uc801\uc778 \uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30\uc640 \ub9e4\uc6b0 \uc720\uc0ac\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c Flex Button\uc740 \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \ube60\ub978 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",u({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",u({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("h3",u({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c Flex Button\uc774 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \ucf54\ub4dc\ub294 ",(0,r.kt)("a",u({parentName:"p"},{href:"flex-button"}),"\uc774 \uc139\uc158\uc758 \ucd08\ubc18"),"\uc5d0 \uc81c\uc2dc\ub41c \ud50c\ub809\uc2a4 \ubc84\ud2bc\uc5d0 \ud574\ub2f9\ud558\uba70, BoxWithBorder, Icon \ubc0f Text \uc694\uc18c\uc758 \ub3d9\uc791\uacfc \ud615\ud0dc\ub97c \uacb0\ud569\ud55c \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)(m.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    buttonCallback(this, &Screen1ViewBase::buttonCallbackHandler)\n{\n                            // Box with Border behavior and appearance\n    flexButtonName.setBoxWithBorderPosition(0, 0, 176, 74);\n    flexButtonName.setBorderSize(5);\n    flexButtonName.setBoxWithBorderColors(touchgfx::Color::getColorFromRGB(0, 102, 153), touchgfx::Color::getColorFromRGB(0, 153, 204), touchgfx::Color::getColorFromRGB(0, 51, 102), touchgfx::Color::getColorFromRGB(51, 102, 153));\n                            // Text behavior and appearance\n    flexButtonName.setText(TypedText(T_SINGLEUSEID1));\n    flexButtonName.setTextPosition(30, 12, 176, 74);\n    flexButtonName.setTextColors(touchgfx::Color::getColorFromRGB(10, 10, 10), touchgfx::Color::getColorFromRGB(10, 10, 10));\n                            // Icon behavior and appearance\n    flexButtonName.setIconBitmaps(Bitmap(BITMAP_BLUE_ICONS_ALERT_32_ID), Bitmap(BITMAP_BLUE_ICONS_ALERT_32_ID));\n    flexButtonName.setIconXY(20, 17);\n                            // Widget\n    flexButtonName.setPosition(152, 99, 176, 74);\n    flexButtonName.setAction(flexButtonCallback);\n\n    add(flexButtonName);\n}\n\nvoid Screen1ViewBase::flexButtonCallbackHandler(const touchgfx::AbstractButtonContainer& src)\n{\n    if (&src == &flexButtonName)\n    {\n        //InteractionName\n        //When flexButtonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 FlexButton \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"flexButtonName.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h4",u({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,r.kt)("p",null,"Flex Button\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/flex-button-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Flex Button Example UI \ud15c\ud50c\ub9bf"),(0,r.kt)("h2",u({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_abstract_button",mdxType:"Link"},"AbstractButton \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}b.isMDXComponent=!0}}]);
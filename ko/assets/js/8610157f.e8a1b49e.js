"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[31980],{49613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),h=l,d=s["".concat(o,".").concat(h)]||s[h]||m[h]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:l,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},89639:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496),l=r(7029);const a=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,l.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},48753:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(59496),l=r(96151);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const c=i},96151:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(59496);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{className:e},n.createElement("div",{className:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{className:"highlight-content"},this.props.children))}}const a=l},49482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>h});r(59496);var n=r(49613),l=r(95375),a=r(48753),i=r(89639);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const u={id:"engine-architecture",title:"\uc5d4\uc9c4 \uc544\ud0a4\ud14d\ucc98"},p=void 0,s={unversionedId:"basic-concepts/engine-architecture",id:"basic-concepts/engine-architecture",title:"\uc5d4\uc9c4 \uc544\ud0a4\ud14d\ucc98",description:"\uadf8\ub798\ud53d\uc774\ub780 \ucd5c\uc885\uc801\uc73c\ub85c \ubb3c\ub9ac\uc801 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ubb34\uc5b8\uac00\ub97c \ud45c\uc2dc\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ubb3c\ub860 \uc18d\ub3c4\ub3c4 \ube68\ub77c\uc57c \ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/engine-architecture.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/engine-architecture",permalink:"/4.24/ko/docs/basic-concepts/engine-architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"engine-architecture",title:"\uc5d4\uc9c4 \uc544\ud0a4\ud14d\ucc98"}},m={},h=[{value:"4\uac00\uc9c0 \uc694\uc18c",id:"the-four-parts",level:2},{value:"MCU",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"\ud50c\ub798\uc2dc",id:"flash",level:3},{value:"\ub514\uc2a4\ud50c\ub808\uc774",id:"display",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc77c\ubc18 \uc804\ub7b5",id:"general-strategy",level:3},{value:"\uad6c\uc131\ubcc4 \uc804\ub7b5",id:"setup-specific-strategy",level:3}],d={toc:h},k="wrapper";function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(k,c({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\uadf8\ub798\ud53d\uc774\ub780 \ucd5c\uc885\uc801\uc73c\ub85c \ubb3c\ub9ac\uc801 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ubb34\uc5b8\uac00\ub97c \ud45c\uc2dc\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ubb3c\ub860 \uc18d\ub3c4\ub3c4 \ube68\ub77c\uc57c \ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d\uc774\ub780 \ub9ce\uc740 \uc758\ubbf8\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uba3c\uc800 \uc784\ubca0\ub514\ub4dc\uc5d0 \ub300\ud55c \ud574\uc11d\uc740 \uc0ac\ub78c\ub9c8\ub2e4 \ub2e4\ub985\ub2c8\ub2e4. \uc5b4\ub5a4 \uc0ac\ub78c\ub4e4\uc740 \uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c\uc744 \uc6b4\uc601 \uccb4\uc81c\uac00 \uc5c6\uace0, RAM, ROM \ub610\ub294 GPIO\ub3c4 \uac70\uc758 \uc5c6\uc774 \uc815\ub9d0\ub85c \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \uad6c\ud615\uc758 8\ube44\ud2b8 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\ub77c\uace0 \uc0dd\uac01\ud558\ub294\uac00 \ud558\uba74, \ub610 \uc5b4\ub5a4 \uc0ac\ub78c\ub4e4\uc740 \ubaa8\ub4e0 \uac83\uc744 \uae30\uac00\ubc14\uc774\ud2b8 \uc218\uc900\uc73c\ub85c \ub192\uc778 \ucd5c\uc2e0 \uc2a4\ub9c8\ud2b8\ud3f0\uc73c\ub85c \uc5ec\uae41\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub450 \ubc88\uc9f8, \uadf8\ub798\ud53d\uc774\ub77c\ub294 \ud45c\ud604\uc5d0 \ub300\ud574\uc11c\ub3c4 \ud574\uc11d\uc774 \uc5c7\uac08\ub9bd\ub2c8\ub2e4. \uc990\uaca8 \uc0ac\uc6a9\ud558\ub294 \ud398\uc778\ud305 \ud504\ub85c\uadf8\ub7a8\uc5d0 \uc6d0\ud558\ub294 \ud53d\uc140\uc744 \uadf8\ub9ac\ub294 \uac83\uc774\ub77c\uace0 \ud574\uc11d\ud558\ub294 \uc0ac\ub78c\uc774 \uc788\ub294\uac00 \ud558\uba74, \uac8c\uc774\ubc0d \ucf58\uc194\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 3D \ub80c\ub354\ub9c1 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub77c\uace0 \ud574\uc11d\ud558\ub294 \uc0ac\ub78c\ub4e4\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"TouchGFX\uc5d0\uac8c \uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c\uc774\ub780 STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec \uae30\ubc18\uc758 \uc2dc\uc2a4\ud15c\uc744 \ucd1d\uce6d\ud569\ub2c8\ub2e4. \ub610\ud55c \uadf8\ub798\ud53d\uc774\ub780 \ucd08\ub2f9 60\ud504\ub808\uc784\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \ub300\ud654\ud615 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9d0\ud569\ub2c8\ub2e4."),(0,n.kt)("h2",c({},{id:"the-four-parts"}),"4\uac00\uc9c0 \uc694\uc18c"),(0,n.kt)("p",null,"\uc774\ub7ec\ud55c \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uadf8\ub798\ud53d \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub824\uba74 \uba3c\uc800 \uc9c1\uc811 \uad00\ub828\ub41c 4\uac00\uc9c0 \uc8fc\uc694 \uad6c\uc131\uc694\uc18c\ub97c \uace0\ub824\ud569\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0\ub3c4 \uc5ec\ub7ec \uac00\uc9c0 \uad6c\uc131\uc694\uc18c\uac00 \uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c\uc5d0 \ud3ec\ud568\ub420 \uc218 \uc788\uc9c0\ub9cc \uadf8\ub798\ud53d \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud55c \uad00\ub828\uc131\uc740 \ube44\uad50\uc801 \ub0ae\uc2b5\ub2c8\ub2e4."),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/four-parts.svg",noShadow:"true",width:480,mdxType:"Figure"},"MCU, RAM, \ud50c\ub798\uc2dc \ubc0f \ub514\uc2a4\ud50c\ub808\uc774"),(0,n.kt)("p",null,"\uc694\uc57d \ud558\uc790\uba74, TouchGFX\ub294 MCU\ub97c \uc0ac\uc6a9\ud574 \ud50c\ub798\uc2dc\uc5d0\uc11c \uc694\uc18c\ub4e4\uc744 \uc870\ud569\ud558\uc5ec \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud55c \ud6c4 RAM\uc5d0 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \uc870\ud569\ub41c \uc774\ubbf8\uc9c0\ub294 \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud504\ub85c\uc138\uc2a4\uac00 \ud544\uc694\ud55c \ub9cc\ud07c \ucd5c\ub300\ud55c \ub9ce\uc774 \ubc18\ubcf5\ub429\ub2c8\ub2e4."),(0,n.kt)("h3",c({},{id:"mcu"}),"MCU"),(0,n.kt)("p",null,"MCU\ub294 \uc774 \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud558\ub294\ub370, \ud50c\ub798\uc2dc\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \uc77d\uc5b4\uc640\uc11c RAM\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ubc18\ud22c\uba85\uc758 \ube68\uac04\uc0c9 \ud14d\uc2a4\ud2b8\ub97c \ubcd1\ud569\ud560 \uacbd\uc6b0 \ud574\ub2f9\ud558\ub294 \uc0c9\uc0c1\uc744 \uacc4\uc0b0\ud558\uc5ec \uc774\ub97c RAM\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0\ub3c4 \uc6d0\uc758 \ud53d\uc140\uc744 \ubaa8\ub450 \ub80c\ub354\ub9c1\ud558\uc5ec RAM\uc5d0 \uc800\uc7a5\ud558\ub294 \ub4f1 \ub2e4\uc591\ud55c \uc791\uc5c5\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"STM32 MCU\ub294 \uadf8\ub798\ud53d\uc744 \uad6c\ud604\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \uc804\uc6a9 \uae30\ub2a5\ub4e4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc5ec\ub7ec \uac00\uc9c0 MCU\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",c({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h3",c({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"RAM\uc740 \uacc4\uc0b0\ub41c \uc774\ubbf8\uc9c0\uac00 \uc800\uc7a5\ub418\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c RAM\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\ub97c \uc77d\uace0 \uc4f0\ub294 \uac83\uc740 MCU\uc785\ub2c8\ub2e4. \uc774\ud6c4 \ucd5c\uc885 \uc774\ubbf8\uc9c0\ub97c \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ud560 \ub54c \ud55c \ubc88 \ub354 \uc77d\uc5b4\uc635\ub2c8\ub2e4."),(0,n.kt)("p",null,"RAM\uc740 MCU\uc5d0 \ub0b4\uc7a5\ub418\ub294 \uacbd\uc6b0\uac00 \ub300\ubd80\ubd84\uc785\ub2c8\ub2e4. \ub2e4\ub9cc \ucd5c\uc885 \uc774\ubbf8\uc9c0\ub97c \ub0b4\ubd80 RAM\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc678\ubd80 RAM\uc744 \uad6c\uc131\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",c({},{id:"flash"}),"\ud50c\ub798\uc2dc"),(0,n.kt)("p",null,"\ud50c\ub798\uc2dc\ub294 \ubaa8\ub4e0 \uc815\uc801 \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub418\ub294 \uacf5\uac04\uc73c\ub85c, \uc774\ubbf8\uc9c0, \uae00\uaf34, \ud14d\uc2a4\ud2b8\uac00 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub41c \ub0b4\uc6a9\uc740 MCU\uc5d0\uc11c \uc77d\uc5b4\uc640\uc11c RAM\uc5d0 \uc791\uc131\ub418\uac70\ub098 RAM\uacfc \uc870\ud569\ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub0b4\ubd80 \ud50c\ub798\uc2dc\ub294 \ubcf4\ud1b5 \uadf8\ub798\ud53d \uc560\uc14b\uc744 \ubaa8\ub450 \uc800\uc7a5\ud560 \ub9cc\ud07c \uc6a9\ub7c9\uc774 \ud06c\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc678\uc7a5 \ud50c\ub798\uc2dc\ub97c \uad6c\uc131\uc5d0 \ucd94\uac00\ud558\ub294 \uacbd\uc6b0\uac00 \ub300\ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud50c\ub798\uc2dc\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551\uc744 \uc9c0\uc6d0\ud558\ub294 \uac83\uc774 \uc88b\uc740\ub370, \uc774\ub294 \ud50c\ub798\uc2dc\uc5d0\uc11c \ud53d\uc140\uc744 \ubc14\ub85c \uc77d\uc5b4\uc640\uc11c RAM\uc5d0 \uc791\uc131\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uba54\ubaa8\ub9ac \ub9e4\ud551\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \ud50c\ub798\uc2dc\uc758 \ub0b4\uc6a9\uc744 RAM\uc5d0\uc11c \ubc84\ud37c\ub9c1\ud558\uc5ec \ud574\ub2f9 \uc704\uce58\uc5d0\uc11c \ubc14\ub85c \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",c({},{id:"display"}),"\ub514\uc2a4\ud50c\ub808\uc774"),(0,n.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\ub294 \uc774\ubbf8\uc9c0\ub97c \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc2e4\uc81c\ub85c \ubcf4\uc5ec\uc8fc\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"RAM\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\uac00 MCU\ub97c \ud1b5\ud574 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc8fc\uae30\uc801\uc73c\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4."),(0,n.kt)("h2",c({},{id:"performance"}),"\uc131\ub2a5"),(0,n.kt)("p",null,"\uc774\ub7ec\ud55c \uad6c\uc131\uc5d0\uc11c, \uadf8\ub9ac\uace0 \ucd5c\uc885\uc801\uc73c\ub85c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc2e4\ud589\ud558\ub824\uba74 \uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d\uc744 \ucc98\ub9ac\ud560 \ub54c \uc8fc\uc758\ub97c \uae30\uc6b8\uc5ec\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("h3",c({},{id:"general-strategy"}),"\uc77c\ubc18 \uc804\ub7b5"),(0,n.kt)("p",null,"\ud56d\uc0c1 \uace0\ub824\ud574\uc57c \ud560 \uc0ac\ud56d\uc774 \uba87 \uac00\uc9c0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubcc0\ud654\uac00 \uc5c6\ub294 \uc694\uc18c\ub97c \uadf8\ub9ac\ub294 \ub370 \uc2dc\uac04\uc744 \ud5c8\ube44\ud558\uc9c0 \ub9c8\uc2ed\uc2dc\uc624."),(0,n.kt)("li",{parentName:"ul"},"\ud50c\ub798\uc2dc\uc5d0\uc11c RAM\uc73c\ub85c \uc804\uc1a1\ub418\ub294 \ub370\uc774\ud130\ub97c \ucd5c\uc18c\ud654\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("li",{parentName:"ul"},"RAM\uc5d0\uc11c \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ub418\ub294 \ub370\uc774\ud130\ub97c \ucd5c\uc18c\ud654\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("li",{parentName:"ul"},"\uadf8\ub798\ud53d \ud488\uc9c8\uacfc \uc560\ub2c8\uba54\uc774\uc158 \uc18d\ub3c4 \uc0ac\uc774\uc5d0\uc11c \uc801\uc808\ud55c \uade0\ud615\uc810\uc744 \ucc3e\uc73c\uc2ed\uc2dc\uc624."),(0,n.kt)("li",{parentName:"ul"},"\ud558\ub4dc\uc6e8\uc5b4 \uae30\ub2a5\uc744 \uc774\uc6a9\ud560 \uac83")),(0,n.kt)("p",null,"TouchGFX \uc5d4\uc9c4\uc740 \uc774\ub7ec\ud55c \uc0ac\ud56d\uc744 \ubaa8\ub450 \ud574\uacb0\ud558\ub294 \ub370 \uc720\uc6a9\ud558\uc9c0\ub9cc \uac1c\ubc1c\uc790 \uc5ed\uc2dc \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("h3",c({},{id:"setup-specific-strategy"}),"\uad6c\uc131\ubcc4 \uc804\ub7b5"),(0,n.kt)("p",null,"\uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c\uc744 \uad11\ubc94\uc704\ud558\uac8c \uad6c\uc131\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uad6c\uc131\uc5d0 \ub530\ub77c \uad6c\ud604\ud560 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc5d0\ub3c4 \ud070 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uac00\ub2a5\ud55c \uad6c\uc131\uc744 \uac04\ub7b5\ud558\uac8c \ub098\ud0c0\ub0b4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"STM32 MCU",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud074\ub7ed \uc18d\ub3c4 50~500MHz"),(0,n.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud55c \uadf8\ub798\ud53d \uad00\ub828 IP \ubc94\uc704: Chrom-ART, Chrom-GRC, JPEG \ucf54\ub371, ..."))),(0,n.kt)("li",{parentName:"ul"},"RAM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 0~1MB"),(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80 0~100MB"))),(0,n.kt)("li",{parentName:"ul"},"\ud50c\ub798\uc2dc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 0~1MB"),(0,n.kt)("li",{parentName:"ul"},"\uc678\uc7a5 0~1GB"))),(0,n.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ud50c\ub808\uc774",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc0c9\uc0c1 1~24\ube44\ud2b8"),(0,n.kt)("li",{parentName:"ul"},"\ud53d\uc140 100x100~1000x1000")))),(0,n.kt)("p",null,"\ud55c \uac00\uc9c0 \uad6c\uc131\uc5d0\uc11c \uad6c\ud604 \uac00\ub2a5\ud55c UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub77c\uace0 \ud574\ub3c4 \ub2e4\ub978 \uad6c\uc131\uc5d0\uc11c\ub294 \uad6c\ud604\uc870\ucc28 \ubabb\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc2e4\uc81c \uad6c\uc131\uc5d0 \ub530\ub77c \uc6d0\ud558\ub294 UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc870\uc815\ud560 \ub54c\ub294 \uac01\ubcc4\ud55c \uc8fc\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"TouchGFX\ub294 \ucca0\uc800\ud558\uac8c \uc704\uc640 \uac19\uc740 \uad6c\uc131\uc744 \uace0\ub824\ud558\uc5ec \uc124\uacc4\ub418\uc5b4 STM32 MCU \uae30\ub2a5\uc744 \ucd5c\ub300\ud55c \ud65c\uc6a9\ud558\ub294 \ub3d9\uc2dc\uc5d0 \ud544\uc694\ud55c RAM\uacfc \ud50c\ub798\uc2dc\uc758 \ud06c\uae30\ub97c \ucd5c\uc18c\ud654\ud558\ub294 \ub370 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\uad6c\ub9e4 \uac00\ub2a5\ud55c STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\ub294 ",(0,n.kt)(l.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32\ube44\ud2b8 Arm Cortex MCU"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("li",null,"\uac00\ub2a5\ud55c \ub514\uc2a4\ud50c\ub808\uc774 \uc120\ud0dd \uc635\uc158\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\ub514\uc2a4\ud50c\ub808\uc774"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("li",null,"\uac00\ub2a5\ud55c MCU \uc120\ud0dd \uc635\uc158\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("li",null,"\uac00\ub2a5\ud55c \uba54\ubaa8\ub9ac \uc120\ud0dd \uc635\uc158\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\uc678\ubd80 \uba54\ubaa8\ub9ac"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624.")))}f.isMDXComponent=!0}}]);
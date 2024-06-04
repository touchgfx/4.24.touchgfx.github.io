"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[71326],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,h=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59496),o=n(96151);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}const c=a},96151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const i=o},55598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>m});n(59496);var r=n(49613),o=n(89639),i=n(48753),a=n(95375);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"widgets-and-containers",title:"\uc704\uc82f \ubc0f \ucee8\ud14c\uc774\ub108"},p=void 0,s={unversionedId:"development/ui-development/working-with-touchgfx/widgets-and-containers",id:"development/ui-development/working-with-touchgfx/widgets-and-containers",title:"\uc704\uc82f \ubc0f \ucee8\ud14c\uc774\ub108",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ube4c\ub4dc\ud560 \ub54c \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \ub450 \uac00\uc9c0 \uac1c\ub150\uc778 \uc704\uc82f\uacfc \ucee8\ud14c\uc774\ub108\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc704\uc82f\uacfc \ucee8\ud14c\uc774\ub108\ub294 UI\ub97c \uac1c\ubc1c\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ub450 \uac00\uc9c0 \ube4c\ub529 \ube14\ub85d\uc785\ub2c8\ub2e4. \ub458 \ub2e4 TouchGFX\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc0ac\uc804 \uad6c\uc131\uc694\uc18c\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0\ub9cc \ub3d9\uc2dc\uc5d0 \uac1c\ubc29\uc131\ub3c4 \uc788\uae30 \ub54c\ubb38\uc5d0 \ucee4\uc2a4\ud140 \uad6c\ud604\uccb4\ub97c \uc791\uc131\ud558\ub294 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/widgets-and-containers",permalink:"/4.24/ko/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",draft:!1,tags:[],version:"current",frontMatter:{id:"widgets-and-containers",title:"\uc704\uc82f \ubc0f \ucee8\ud14c\uc774\ub108"},sidebar:"docs",previous:{title:"Multiple developers on a project",permalink:"/4.24/ko/docs/development/ui-development/working-with-touchgfx/multiple-developers"},next:{title:"\uc2dc\ubbac\ub808\uc774\ud130",permalink:"/4.24/ko/docs/development/ui-development/working-with-touchgfx/simulator"}},d={},m=[{value:"\uc704\uc82f",id:"widgets",level:2},{value:"\ucee8\ud14c\uc774\ub108",id:"containers",level:2}],h={toc:m},g="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,c({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ube4c\ub4dc\ud560 \ub54c \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \ub450 \uac00\uc9c0 \uac1c\ub150\uc778 \uc704\uc82f\uacfc \ucee8\ud14c\uc774\ub108\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc704\uc82f\uacfc \ucee8\ud14c\uc774\ub108\ub294 UI\ub97c \uac1c\ubc1c\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ub450 \uac00\uc9c0 \ube4c\ub529 \ube14\ub85d\uc785\ub2c8\ub2e4. \ub458 \ub2e4 TouchGFX\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc0ac\uc804 \uad6c\uc131\uc694\uc18c\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0\ub9cc \ub3d9\uc2dc\uc5d0 \uac1c\ubc29\uc131\ub3c4 \uc788\uae30 \ub54c\ubb38\uc5d0 \ucee4\uc2a4\ud140 \uad6c\ud604\uccb4\ub97c \uc791\uc131\ud558\ub294 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",c({},{id:"widgets"}),"\uc704\uc82f"),(0,r.kt)("p",null,"TouchGFX\uc640 TouchGFX Designer \ub3c4\uad6c\ub294 ",(0,r.kt)("a",c({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"\ud14d\uc2a4\ud2b8 \uc601\uc5ed"),", ",(0,r.kt)("a",c({parentName:"p"},{href:"../ui-components/buttons/button"}),"\ubc84\ud2bc"),", ",(0,r.kt)("a",c({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"\ud14d\uc2a4\ucc98 \ub9e4\ud37c")," \ub4f1 \uc0ac\uc6a9\uc790\uac00 UI\ub97c \ube4c\ub4dc\ud560 \ub54c \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc218\ub9ce\uc740 \ud45c\uc900 \uc704\uc82f\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uae30\ubcf8\uc801\uc73c\ub85c TouchGFX\uc758 \uc704\uc82f\uc740 \uc2a4\ud06c\ub9b0\uc5d0 \uadf8\ub9ac\uac70\ub098 \uc778\ud130\ub799\uc158\uc774 \uac00\ub2a5\ud55c \uac83\uc5d0 \ub300\ud55c \ucd94\uc0c1\uc801 \uc815\uc758\uc77c \ubfd0\uc785\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.webp",mdxType:"Figure"},"\uc774\ubbf8\uc9c0 \uc704\uc82f\uc744 \ubc30\uacbd\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 Button \uc704\uc82f"),(0,r.kt)("p",null,"TouchGFX Designer \uc0ac\uc6a9\uc790\ub294 \uc6d0\ud558\ub294 \uc704\uc82f\uc744 \uc2a4\ud06c\ub9b0\uc5d0 \ucd94\uac00\ud55c \ud6c4 \uac01 \uc704\uc82f\ubcc4 \uc18d\uc131\uc744 \ud1b5\ud574 \uc704\uc82f\uc744 \uc6d0\ud558\ub294 \ub300\ub85c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX\uc5d0\uc11c\ub3c4 \uc81c\uacf5\ud558\ub294 \uac01\uc885 \ucee8\ud14c\uc774\ub108\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc704\uc82f\uc744 \uadf8\ub8f9\uc73c\ub85c \uc9c0\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c \uc6d0\ud55c\ub2e4\uba74 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"add(widget_instance_name);")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uac70\ub098, \ud639\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),"\uc640 \uac19\uc740 \ucee8\ud14c\uc774\ub108 add \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud14c\uc774\ub108\uc5d0 \uc704\uc82f\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc704\uc82f\uc744 \ucd94\uac00\ud558\ub294 \uc21c\uc11c\uc5d0 \ub530\ub77c z-\uc21c\uc11c\uac00 \uacb0\uc815\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub9c8\uc9c0\ub9c9\uc5d0 \ucd94\uac00\ub418\ub294 \uc704\uc82f\uc774 \uc2a4\ud06c\ub9b0 \ub9e8 \uc55e\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc82f\uc758 \uc88c\ud45c\ub294 \ud56d\uc0c1 \ub8e8\ud2b8 \ucee8\ud14c\uc774\ub108(\uc2a4\ud06c\ub9b0)\ub4e0 \ucee8\ud14c\uc774\ub108\ub4e0 \uc0c1\uad00\uc5c6\uc774 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\uc790\uc2e0\uc758 \ud2b9\uc815 \uc694\uac74\uc5d0 \ub530\ub77c \uc704\uc82f\uc744 \uc9c1\uc811 \uc0dd\uc131\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"\ucee4\uc2a4\ud140 \uc704\uc82f \uc139\uc158"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",c({},{id:"containers"}),"\ucee8\ud14c\uc774\ub108"),(0,r.kt)("p",null,"\ucee8\ud14c\uc774\ub108\ub294 TouchGFX\uc5d0\uc11c \uc704\uc82f\uc774\ub098 \uae30\ud0c0 \ucee8\ud14c\uc774\ub108 \uac19\uc740 \ud558\uc704 \ub178\ub4dc\ub97c \ud3ec\ud568\ud560 \uc218 \uc788\ub294 \uad6c\uc131\uc694\uc18c\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \ucee8\ud14c\uc774\ub108\ub294 Widgets \ud0ed\uc758 Containers \uce74\ud14c\uace0\ub9ac\uc5d0 \uc788\uc73c\uba70, \uc704\uc82f\uc744 \ud2b8\ub9ac \ubdf0\uc5d0 \uc788\ub294 \ucee8\ud14c\uc774\ub108\ub85c \ub4dc\ub798\uadf8\ud558\uba74 \ucd94\uac00\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc704 \ub178\ub4dc\uc758 z-\uc21c\uc11c\ub294 \ud558\uc704 \ub178\ub4dc\uac00 \ucee8\ud14c\uc774\ub108\uc5d0 \ucd94\uac00\ub418\ub294 \uc21c\uc11c\uc5d0 \ub530\ub77c \uacb0\uc815\ub418\ubbc0\ub85c, \ub9c8\uc9c0\ub9c9\uc5d0 \ucd94\uac00\ub41c \ud558\uc704 \ub178\ub4dc\uac00 \uc2a4\ud06c\ub9b0\uc5d0\uc11c \ub9e8 \uc55e\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX\uc5d0\uc11c \uc704\uc82f\uc758 \uc704\uce58\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc815\uc758\ub418\uae30 \ub54c\ubb38\uc5d0 \uc0c1\uc704 \ucee8\ud14c\uc774\ub108\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud558\uba74 \ud558\uc704 \ub178\ub4dc\uc758 \uc704\uce58\ub3c4 \ubc14\ub00c\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee8\ud14c\uc774\ub108\ub294 \ubdf0\ud3ec\ud2b8\uc640 \uac19\uc740 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \ub2e4\uc2dc \ub9d0\ud574\uc11c \ud558\uc704 \ub178\ub4dc\uc5d0\uc11c \ucee8\ud14c\uc774\ub108\uc758 \uae30\ud558 \ud615\uc0c1\uacfc \uad50\ucc28\ud558\ub294 \ubd80\ubd84\ub9cc \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798 \uc560\ub2c8\uba54\uc774\uc158\uc5d0\uc11c\ub294 \ucee8\ud14c\uc774\ub108\uc758 \ubdf0\ud3ec\ud2b8 \uc885\ud6a1\ube44\uac00 \uc5b4\ub5bb\uac8c \uc791\uc6a9\ud558\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \ubc84\ud2bc\uc774 \ud558\uc704 \ub178\ub4dc\uc778 \ucee8\ud14c\uc774\ub108\uc758 \uc724\uacfd\uc120\uc774 \ubcf4\uc785\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.webp",mdxType:"Figure"},"\ubdf0\ud3ec\ud2b8 \uc5ed\ud560\uc744 \ud558\ub294 \ucee8\ud14c\uc774\ub108"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\uc790\uc2e0\uc758 \ud2b9\uc815 \uc694\uac74\uc5d0 \ub530\ub77c \uc790\uc2e0\ub9cc\uc758 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uc139\uc158"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}f.isMDXComponent=!0}}]);
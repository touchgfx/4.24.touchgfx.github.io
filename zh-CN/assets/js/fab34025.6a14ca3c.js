"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[66679],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,g=p["".concat(d,".").concat(c)]||p[c]||s[c]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(7029);const a=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},12963:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(7029);const a=function(e){const t=e.width,n=e.height,a=e.points||[],o=(0,i.Z)(e.imageSource);return r.createElement("div",{style:{position:"relative"}},r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:n,src:o})),a.map((function(e,t){return r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},r.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},r.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),r.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),r.createElement("p",null,e.children)))}},48753:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),i=n(96151);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}const l=o},96151:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{className:e},r.createElement("div",{className:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{className:"highlight-content"},this.props.children))}}const a=i},35249:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496),i=n(7029);const a=function(e){const t=(0,i.Z)(e.url);var n;const a=null!==(n=e.width)&&void 0!==n?n:"100%";var o;const l=null!==(o=e.height)&&void 0!==o?o:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:l},r.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},11995:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59496);class i extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const a=i},76295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>g,toc:()=>v});n(59496);var r=n(49613),i=n(89639),a=n(11995),o=n(35249),l=n(12963),d=n(48753),u=n(95375);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"main-window",title:"\u4e3b\u7a97\u53e3"},c=void 0,g={unversionedId:"development/ui-development/designer-user-guide/main-window",id:"development/ui-development/designer-user-guide/main-window",title:"\u4e3b\u7a97\u53e3",description:"TouchGFX Designer\u7684\u4e3b\u7a97\u53e3\u7531\u5bfc\u822a\u680f\u3001\u6307\u4ee4\u6309\u94ae\u3001\u901a\u77e5\u680f\u548c\u8be6\u7ec6\u65e5\u5fd7\u7ec4\u6210\u3002 \u56f4\u7ed5\u2018\u89c6\u56fe\u2019\uff08\u201c\u89c6\u56fe\u201d\u533a\u57df\uff0c\u5373\u4e0b\u56fe\u4e2d\u6a21\u7cca\u5316\u7684\u90e8\u5206\uff09\uff0c\u4e3b\u7a97\u53e3\u652f\u6491\u8d77\u4e86\u4e00\u4e2a\u6846\u67b6\u7ed3\u6784\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/main-window.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/main-window",permalink:"/4.24/zh-CN/docs/development/ui-development/designer-user-guide/main-window",draft:!1,tags:[],version:"current",frontMatter:{id:"main-window",title:"\u4e3b\u7a97\u53e3"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u83dc\u5355",permalink:"/4.24/zh-CN/docs/development/ui-development/designer-user-guide/file-menu"},next:{title:"\u753b\u5e03\u89c6\u56fe",permalink:"/4.24/zh-CN/docs/development/ui-development/designer-user-guide/canvas-view"}},h={},v=[{value:"\u5bfc\u822a\u680f",id:"navigation-bar",level:2},{value:"\u547d\u4ee4",id:"commands",level:2},{value:"\u751f\u6210\u4ee3\u7801",id:"generate-code",level:3},{value:"\u8fd0\u884c\u4eff\u771f",id:"run-simulator",level:3},{value:"Program and Run Target",id:"run-target",level:3},{value:"Program Internal Flash and Run Target",id:"run-target-internal",level:4},{value:"\u901a\u77e5\u680f",id:"notification-bar",level:2},{value:"\u8be6\u7ec6\u65e5\u5fd7",id:"detailed-log",level:2},{value:"\u66f4\u65b0\u6a2a\u5e45",id:"update-banner",level:2},{value:"\u8272\u8c03\u4e3b\u9898",id:"theme",level:2}],f={toc:v},w="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(w,m({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX Designer\u7684\u4e3b\u7a97\u53e3\u7531",(0,r.kt)("a",m({parentName:"p"},{href:"#navigation-bar"}),"\u5bfc\u822a\u680f"),"\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"#commands"}),"\u6307\u4ee4\u6309\u94ae"),"\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"#notification-bar"}),"\u901a\u77e5\u680f"),"\u548c",(0,r.kt)("a",m({parentName:"p"},{href:"#detailed-log"}),"\u8be6\u7ec6\u65e5\u5fd7"),"\u7ec4\u6210\u3002 \u56f4\u7ed5\u2018\u89c6\u56fe\u2019",(0,r.kt)("em",{parentName:"p"},"\uff08\u201c\u89c6\u56fe\u201d\u533a\u57df\uff0c\u5373\u4e0b\u56fe\u4e2d\u6a21\u7cca\u5316\u7684\u90e8\u5206\uff09"),"\uff0c\u4e3b\u7a97\u53e3\u652f\u6491\u8d77\u4e86\u4e00\u4e2a\u6846\u67b6\u7ed3\u6784\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window.webp",mdxType:"Figure"},"TouchGFX Designer\u7684\u4e3b\u7a97\u53e3"),(0,r.kt)("h2",m({},{id:"navigation-bar"}),"\u5bfc\u822a\u680f"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u901a\u8fc7\u5bfc\u822a\u680f\uff08\u53c2\u89c1\u4e0b\u56fe\uff09\u53ef\u4ee5\u8fdb\u884c\u5bfc\u822a\uff0c\u89c6\u56fe\u53ef\u66f4\u6539\u4e3a\u4e0b\u5217\u89c6\u56fe\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"canvas-view"}),"\u753b\u5e03"),"\uff0c\u7528\u4ee5\u62d6\u653e\u5f0f\u6784\u5efa\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"images-view"}),"\u56fe\u50cf"),"\uff0c\u7528\u4ee5\u7ba1\u7406\u5de5\u7a0b\u4e2d\u7528\u5230\u7684\u56fe\u50cf\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"texts-view"}),"\u6587\u672c"),"\uff0c\u7528\u4e8e\u7ba1\u7406\u5de5\u7a0b\u4e2d\u7528\u5230\u7684\u6587\u672c\u548c\u5b57\u4f53\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"config-view"}),"\u914d\u7f6e"),"\uff0c\u7528\u4e8e\u914d\u7f6e\u5de5\u7a0b\u4e2d\u7684\u5404\u79cd\u8bbe\u7f6e\u9879\u3002")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u6587\u4ef6"),"\u83dc\u5355\uff0c\u53ef\u4ee5\u5728\u76f8\u5e94\u7684\u6587\u4ef6\u7ba1\u7406\u5668\u7a97\u53e3\u4e2d\u6253\u5f00\u5de5\u7a0b\u76ee\u5f55\uff0c\u4ece\u800c\u8f7b\u677e\u6d4f\u89c8\u4ee3\u7801\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-navigation-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5bfc\u822a\u680f"),(0,r.kt)("h2",m({},{id:"commands"}),"\u547d\u4ee4"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u7684\u6307\u4ee4\u90e8\u5206\uff0c\u53ef\u4ee5\u627e\u5230\u4e09\u4e2a\u6309\u94ae\uff1a\u201c\u751f\u6210\u4ee3\u7801\u201d\u3001\u201c\u8fd0\u884c\u4eff\u771f\u201d\u548c\u201c\u8fd0\u884c\u76ee\u6807\u201d\u3002 ",(0,r.kt)("em",{parentName:"p"},"\uff08\u53c2\u89c1\u4e0b\u56fe\uff09\u3002")),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-actions-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5de5\u7a0b\u547d\u4ee4\u6309\u94ae"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6309\u94ae\u6267\u884c\u7684\u547d\u4ee4\u53ef\u4ee5\u5728\u201c\u914d\u7f6e\u201d\u89c6\u56fe\u4e2d\u7684",(0,r.kt)("a",m({parentName:"p"},{href:"config-view#build"}),"\u521b\u5efa"),"\u9875\u8fdb\u884c\u91cd\u7f6e\u3002"),(0,r.kt)("h3",m({},{id:"generate-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u201c\u751f\u6210\u4ee3\u7801\u201d\u547d\u4ee4\u89e6\u53d1\u5b8c\u6574\u7684\u4ee3\u7801\u751f\u6210\u64cd\u4f5c\uff0c\u5176\u540e\u5c06\u6267\u884c\u4e0b\u5217\u547d\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u7684\u540e\u7eed\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u76ee\u6807\u7a0b\u5e8f\u7684\u540e\u7eed\u547d\u4ee4")),(0,r.kt)("h3",m({},{id:"run-simulator"}),"\u8fd0\u884c\u4eff\u771f"),(0,r.kt)("p",null,"\u201c\u8fd0\u884c\u4eff\u771f\u5668\u201d\u547d\u4ee4\u4f1a\u89e6\u53d1\u5b8c\u6574\u7684\u4ee3\u7801\u751f\u6210\uff0c\u5176\u540e\u4f1a\u6267\u884c\u4e0b\u5217\u547d\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u7684\u540e\u7eed\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u4eff\u771f\u7a0b\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u4eff\u771f")),(0,r.kt)("p",null,"\u201c\u8fd0\u884c\u4eff\u771f\u201d\u547d\u4ee4\u7684\u5feb\u6377\u952e\u65b9\u5f0f\uff1a ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F5")),(0,r.kt)("h3",m({},{id:"run-target"}),"Program and Run Target"),(0,r.kt)("p",null,"The Program and Run Target command triggers a complete code generation, then executes following commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u7684\u540e\u7eed\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u76ee\u6807\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u76ee\u6807\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"Flash Target Command")),(0,r.kt)("p",null,"The Program and Run Target command can also be triggered by pressing ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F6")),(0,r.kt)("p",null,"\u201c\u751f\u6210\u4ee3\u7801\u201d\u547d\u4ee4\u7684\u5feb\u6377\u952e\u65b9\u5f0f\uff1a ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("h4",m({},{id:"run-target-internal"}),"Program Internal Flash and Run Target"),(0,r.kt)("p",null,"If the ",(0,r.kt)("a",m({parentName:"p"},{href:"config-view#flash-target-internal-command"}),"Flash Target Internal Command")," is enabled, the 'Program and Run Target' button will change appearance:"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-target-options.png",mdxType:"Figure"}),(0,r.kt)("p",null,"This will give the option to run the target in 'Program Internal Flash mode':"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-target-options-opened.png",mdxType:"Figure"}),(0,r.kt)("p",null,"If the 'Program Internal Flash' option is selected, the 'Program and Run Target' button will now execute the command specified in ",(0,r.kt)("a",m({parentName:"p"},{href:"config-view#flash-target-internal-command"}),"Flash Target Internal Command")," which is used to optimize flash times."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-run-internal-flash.png",mdxType:"Figure"}),(0,r.kt)(d.Z,{mdxType:"FurtherReading"},"Read more about how to use Internal Flashing to improve flash times ",(0,r.kt)(u.Z,{to:"../working-with-touchgfx/compiling-and-flashing",mdxType:"Link"},"here"),"."),(0,r.kt)("h2",m({},{id:"notification-bar"}),"\u901a\u77e5\u680f"),(0,r.kt)("p",null,"\u901a\u77e5\u680f\u4f4d\u4e8e\u4e3b\u7a97\u53e3\u5e95\u90e8\uff0c\u663e\u793a\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u547d\u4ee4\u7684\u72b6\u6001\u3002 \u5982\u679c\u547d\u4ee4\u8fd0\u884c\u5931\u8d25\uff0c\u901a\u77e5\u680f\u4e2d\u7684\u6587\u672c\u5c06\u53d8\u4e3a\u7ea2\u8272\uff0c\u5e76\u5c06\u663e\u793a\u5931\u8d25\u7684\u6307\u4ee4\u53ca\u9519\u8bef\u56fe\u6807\u3002 \u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\u5c06\u5148\u53d8\u4e3a\u7eff\u8272\uff0c\u5176\u540e\u4f1a\u4ece\u901a\u77e5\u680f\u4e2d\u6e05\u9664\uff0c\u800c\u6267\u884c\u5931\u8d25\u7684\u547d\u4ee4\u4f1a\u7ee7\u7eed\u663e\u793a\uff0c\u76f4\u81f3\u53e6\u4e00\u547d\u4ee4\u5f00\u59cb\u6267\u884c\u3002"),(0,r.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-success.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u7684\u6267\u884c\u6210\u529f\u7684\u901a\u77e5\u680f"),(0,r.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-fail.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u7684\u6267\u884c\u5931\u8d25\u7684\u901a\u77e5\u680f"),(0,r.kt)("h2",m({},{id:"detailed-log"}),"\u8be6\u7ec6\u65e5\u5fd7"),(0,r.kt)("p",null,"\u70b9\u51fb\u901a\u77e5\u680f\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\u90fd\u5c06\u6253\u5f00\u4e00\u4e2a\u7a97\u53e3\uff0c\u5176\u5185\u663e\u793aTouchGFX Designer\u8fd0\u884c\u4e0a\u4e00\u6761\u547d\u4ee4\u7684\u5b8c\u6574\u65e5\u5fd7\u3002 \u547d\u4ee4\u6267\u884c\u7684\u8f93\u51fa\u5c06\u6d41\u5165\u8be5\u7a97\u53e3",(0,r.kt)("em",{parentName:"p"},"\uff08\u89c1\u4e0b\u9762GIF\u52a8\u753b\uff09"),"\uff0c\u70b9\u51fb\u8be6\u7ec6\u65e5\u5fd7\u7a97\u53e3\u53f3\u4e0a\u89d2\u7684\u6d6e\u7a97/\u53bb\u6d6e\u7a97\u6309\u94ae\uff0c\u65e5\u5fd7\u7a97\u53e3\u53ef\u4ee5\u662f\u6d6e\u7a97\u5316\uff0c\u6216\u6062\u590d\u9ed8\u8ba4\u3002"),(0,r.kt)("p",null,"\u6253\u5f00\u201c\u8be6\u7ec6\u65e5\u5fd7\u201d\u7a97\u53e3\u7684\u5feb\u6377\u952e\u65b9\u5f0f\uff1a ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + L")),(0,r.kt)(o.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/designer-main-window-log.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u4e2d\u7684\u8be6\u7ec6\u65e5\u5fd7"),(0,r.kt)("h2",m({},{id:"update-banner"}),"\u66f4\u65b0\u6a2a\u5e45"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-update-banner.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6b64\u6a2a\u5e45\u7528\u4e8e\u901a\u77e5\u7528\u6237\u91cd\u8981\u7684\u66f4\u65b0\uff0c\u4f8b\u5982\uff1a\u5168\u65b0\u7684TouchGFX\u7248\u672c\u3002 \u82e5\u8981\u53d6\u6d88\uff0c\u8bf7\u6309\u6a2a\u5e45\u53f3\u4fa7\u7684X\u6309\u94ae\u3002 \u6a2a\u5e45\u5c06\u4e0d\u4f1a\u518d\u6b21\u663e\u793a\u5df2\u53d6\u6d88\u7684\u66f4\u65b0\u3002"),(0,r.kt)("h2",m({},{id:"theme"}),"\u8272\u8c03\u4e3b\u9898"),(0,r.kt)("p",null,"TouchGFX Designer\u652f\u6301\u6d45\u8272\u548c\u6df1\u8272\u4e3b\u9898\uff08\u53c2\u89c1\u4e0b\u56fe\uff09\u3002 \u60a8\u53ef\u4ee5\u5728",(0,r.kt)("a",m({parentName:"p"},{href:"file-menu#project-file-menu-file"}),"\u6587\u4ef6\u83dc\u5355"),"\u4e2d\u6839\u636e\u81ea\u5df1\u7684\u559c\u597d\u5207\u6362\u4e3b\u9898\u3002"),(0,r.kt)(l.Z,{points:[[40,25]],imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-light.png",mdxType:"FigureWithPoints"},"TouchGFX Designer\u6d45\u8272\u8c03\u6a21\u5f0f"),(0,r.kt)(l.Z,{points:[[40,25]],imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-dark.png",mdxType:"FigureWithPoints"},"TouchGFX Designer\u6df1\u8272\u8c03\u6a21\u5f0f"))}k.isMDXComponent=!0}}]);
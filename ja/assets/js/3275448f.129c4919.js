"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[55487],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=l,s=d["".concat(u,".").concat(f)]||d[f]||m[f]||i;return n?r.createElement(s,o(o({ref:t},p),{},{components:n})):r.createElement(s,o({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),l=n(7029);const i=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,l.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},35249:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),l=n(7029);const i=function(e){const t=(0,l.Z)(e.url);var n;const i=null!==(n=e.width)&&void 0!==n?n:"100%";var o;const a=null!==(o=e.height)&&void 0!==o?o:"100%";return r.createElement("div",{className:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:i,height:a},r.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},11995:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496);class l extends r.Component{render(){return r.createElement("code",{className:"shortcut"},this.props.children)}}const i=l},45545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>f});n(59496);var r=n(49613),l=n(89639),i=n(11995),o=n(35249);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const c={id:"simulator",title:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf"},p=void 0,d={unversionedId:"development/ui-development/working-with-touchgfx/simulator",id:"development/ui-development/working-with-touchgfx/simulator",title:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf",description:"TouchGFX UI\u306e\u4f5c\u6210\u3067\u306f\u3001UI\u306e\u4ed5\u69d8\u306b\u5408\u81f4\u3055\u305b\u308b\u305f\u3081\u306b\u3001\u591a\u304f\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8a73\u7d30\u90e8\u306e\u5fae\u8abf\u6574\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/simulator.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/simulator",permalink:"/4.24/ja/docs/development/ui-development/working-with-touchgfx/simulator",draft:!1,tags:[],version:"current",frontMatter:{id:"simulator",title:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf"},sidebar:"docs",previous:{title:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca",permalink:"/4.24/ja/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"},next:{title:"Compiling-and-Flashing\uff08\u30b3\u30f3\u30d1\u30a4\u30eb\u3068\u66f8\u304d\u8fbc\u307f\uff09",permalink:"/4.24/ja/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"}},m={},f=[{value:"\u5b9f\u884c\u65b9\u6cd5",id:"how-to-run",level:2},{value:"TouchGFX Designer\u306e\u4f7f\u7528",id:"using-touchgfx-designer",level:3},{value:"TouchGFX\u74b0\u5883\u306e\u4f7f\u7528",id:"using-touchgfx-environment",level:3},{value:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u6a5f\u80fd",id:"simulator-features",level:2},{value:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u307f\u306e\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"simulator-only-user-code",level:2},{value:"Printing from the simulator",id:"Printing-from-the-simulator",level:2},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u3068\u30ed\u30c3\u30af\u89e3\u9664",id:"locking-and-unlocking-the-framebuffer",level:2},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af",id:"locking-the-framebuffer",level:3},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u89e3\u9664",id:"unlocking-the-framebuffer",level:3},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u89e3\u9664\u3092\u5fd8\u308c\u305f\u5834\u5408",id:"forgetting-to-unlock-the-framebuffer",level:3},{value:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3068\u7570\u306a\u308b\u30b5\u30a4\u30ba\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3",id:"simulating-hardware-framebuffer-with-a-different-size-than-the-display",level:3},{value:"Simulating hardware with a different framerate",id:"simulating-hardware-with-a-different-framerate",level:3}],s={toc:f},h="wrapper";function g(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(h,a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX UI\u306e\u4f5c\u6210\u3067\u306f\u3001UI\u306e\u4ed5\u69d8\u306b\u5408\u81f4\u3055\u305b\u308b\u305f\u3081\u306b\u3001\u591a\u304f\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u8a73\u7d30\u90e8\u306e\u5fae\u8abf\u6574\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u3092\u30b9\u30d4\u30fc\u30c9\u30a2\u30c3\u30d7\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30b9\u30c8\u3068\u30c7\u30d0\u30c3\u30b0\u306e\u30bf\u30fc\u30f3\u30a2\u30e9\u30a6\u30f3\u30c9\uff65\u30bf\u30a4\u30e0\u3092\u77ed\u7e2e\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002 \u30dc\u30fc\u30c9\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u66f8\u304d\u63db\u3048\u306b\u306f\u9577\u3044\u6642\u9593\u304c\u304b\u304b\u308b\u3053\u3068\u304c\u591a\u3044\u306e\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u308f\u305a\u304b\u306a\u5909\u66f4\u306e\u305f\u3073\u306b\u3053\u308c\u3092\u884c\u3046\u3068\u3001\u958b\u767a\u901f\u5ea6\u304c\u78ba\u5b9f\u306b\u4f4e\u4e0b\u3057\u307e\u3059\u3002 \u3053\u308c\u3092\u7de9\u548c\u3059\u308b\u305f\u3081\u306b\u3001TouchGFX PC\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306f\u304a\u4f7f\u3044\u306e\u958b\u767a\u30c4\u30fc\u30eb\u3078\u306e\u512a\u308c\u305f\u8ffd\u52a0\u6a5f\u80fd\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u306f\u4f7f\u7528\u3059\u308bPC\u5411\u3051\u306b\u5358\u7d14\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3001\u305d\u3053\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u30dc\u30fc\u30c9\u3067\u306f\u306a\u304fPC\u7528\u306b\u4f5c\u6210\u3055\u308c\u305f\u8a55\u4fa1\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u30b3\u30fc\u30c9\u304a\u3088\u3073\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u3092\u9664\u3044\u3066\u3001\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3068\u307e\u3063\u305f\u304f\u540c\u3058\u3067\u3059\u3002 \u3064\u307e\u308a\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u914d\u7f6e\u3001\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3001\u30b9\u30c6\u30fc\u30c8\uff65\u30de\u30b7\u30f3\u306a\u3069\u3092\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3068\u307e\u3063\u305f\u304f\u540c\u3058\u304f\u3089\u3044\u6b63\u78ba\u306b\u30c6\u30b9\u30c8\u3067\u304d\u308b\u306e\u3067\u3059\u3002 \u5fc5\u8981\u306a\u5834\u5408\u306f\u3001Visual Studio\u306a\u3069\u306eIDE\u3092\u4f7f\u7528\u3057\u3066\u30b3\u30fc\u30c9\u3092",(0,r.kt)("a",a({parentName:"p"},{href:"debugging"}),"\u30c7\u30d0\u30c3\u30b0"),"\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u5f53\u7136\u306a\u304c\u3089\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u89e3\u6790\u3084\u5b9f\u969b\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff65\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306a\u3069\u306f\u3001\u30e6\u30fc\u30b6\u306e\u30dc\u30fc\u30c9\u4e0a\u3067\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{url:"/videos/development/ui-development/working-with-touchgfx/simulator/simulator-example.mp4",mdxType:"LoopVideo"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u4f8b"),(0,r.kt)("h2",a({},{id:"how-to-run"}),"\u5b9f\u884c\u65b9\u6cd5"),(0,r.kt)("h3",a({},{id:"using-touchgfx-designer"}),"TouchGFX Designer\u306e\u4f7f\u7528"),(0,r.kt)("p",null,'TouchGFX Designer\u304b\u3089\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u8d77\u52d5\u3059\u308b\u306b\u306f\u3001\u5358\u7d14\u306b\u53f3\u4e0a\u9685\u306e"Run Simulator"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u304b\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\u4e0a\u306e ',(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F5")," \u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u304b\u3089\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u8d77\u52d5"),(0,r.kt)("h3",a({},{id:"using-touchgfx-environment"}),"TouchGFX\u74b0\u5883\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"TouchGFX\u74b0\u5883\u3092\u4f7f\u7528\u3057\u3066\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u8d77\u52d5\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TouchGFX\u74b0\u5883\u3092\u958b\u304f\u3002"),(0,r.kt)("li",{parentName:"ol"},"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5834\u6240\u306b\u79fb\u52d5\u3002",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u307f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"li"},"C:/TouchGFXProjects/MyApplication_1")),(0,r.kt)("li",{parentName:"ol"},"\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"li"},"C:/TouchGFXProjects/MyApplication_1/TouchGFX/")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"make -f simulator/gcc/Makefile -j6"),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"./build/bin/simulator.exe"),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u8d77\u52d5\u3002")),(0,r.kt)("p",null,"\u624b\u9806\u306e3\u30684\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5909\u66f4\u3057\u305f\u3089\u5fc5\u305a\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",a({},{id:"simulator-features"}),"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u6a5f\u80fd"),(0,r.kt)("p",null,"\u30de\u30a6\u30b9\u5165\u529b\u306e\u30ad\u30e3\u30d7\u30c1\u30e3\u306e\u4ed6\u306b\u3082\u3001TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306b\u306f\u4ee5\u4e0b\u306b\u793a\u3059\u3088\u3046\u306a\u4fbf\u5229\u306a\u6a5f\u80fd\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("table",{"spaces-before":"0"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8"),(0,r.kt)("th",null,"\u6a5f\u80fd")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F1")),(0,r.kt)("td",null,"\u30dd\u30a4\u30f3\u30bf\u5ea7\u6a19\u3068\u305d\u306e\u5ea7\u6a19\u306e\u30d4\u30af\u30bb\u30eb\u306eRGB\u30ab\u30e9\u30fc\u306e\u8868\u793a\uff0816\u9032\u6570\uff09\u3092\u6709\u52b9\u5316 / \u7121\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F2")),(0,r.kt)("td",null,"\u7121\u52b9\u5316\u9818\u57df\u306e\u30cf\u30a4\u30e9\u30a4\u30c8\u3092\u6709\u52b9\u5316 / \u7121\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F3")),(0,r.kt)("td",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308a\u3001",(0,r.kt)("code",null,"screenshots"),"\u30d5\u30a9\u30eb\u30c0\u306b\u305d\u306e\u753b\u50cf\u3092\u7f6e\u304d\u307e\u3059\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"Ctrl + F3")),(0,r.kt)("td",null,"\u6b21\u306e50\u30d5\u30ec\u30fc\u30e0\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308a\u3001",(0,r.kt)("code",null,"screenshots"),"\u30d5\u30a9\u30eb\u30c0\u306b\u305d\u306e\u753b\u50cf\u3092\u7f6e\u304d\u307e\u3059\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"Shift + F3")),(0,r.kt)("td",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308a\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u305d\u306e\u753b\u50cf\u3092\u7f6e\u304d\u307e\u3059\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("td",null,"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\uff65\u30b9\u30ad\u30f3\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\uff65\u30b9\u30ad\u30f3\u3092\u6709\u52b9\u5316 / \u7121\u52b9\u5316\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\uff65\u30b9\u30ad\u30f3\u304c\u4f7f\u7528\u3055\u308c\u3066",(0,r.kt)("i",null,"\u3044\u306a\u3044"),"\u5834\u5408\u306f\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u5883\u754c\u3092\u6709\u52b9\u5316 / \u7121\u52b9\u5316\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F5")),(0,r.kt)("td",null,"FrontendApplication::changeToStartScreen()\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u753b\u9762\u306b\u76f4\u63a5\u623b\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F9")),(0,r.kt)("td",null,"\u30c6\u30a3\u30c3\u30af\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9001\u4fe1\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4e00\u6642\u505c\u6b62\u3057\u307e\u3059\u3002 F9\u30ad\u30fc\u3092\u3082\u3046\u4e00\u5ea6\u62bc\u3059\u3068\u3001\u901a\u5e38\u306e\u5b9f\u884c\u304c\u518d\u958b\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F10")),(0,r.kt)("td",null,'\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u4e00\u6642\u505c\u6b62\u4e2d\uff08F9\u30ad\u30fc\u306e\u62bc\u4e0b\u5f8c\uff09\u3001F10\u30ad\u30fc\u3092\u62bc\u3059\u3053\u3068\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b1\u30c6\u30a3\u30c3\u30af\u3060\u3051\u9001\u4fe1\u3057\u3001\u305d\u308c\u306b\u3088\u3063\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092"1\u30b9\u30c6\u30c3\u30d7"\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002')),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(i.Z,{mdxType:"Shortcut"},"ESC")),(0,r.kt)("td",null,"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u9589\u3058\u307e\u3059\u3002"))),(0,r.kt)("h2",a({},{id:"simulator-only-user-code"}),"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u307f\u306e\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u4f7f\u7528\u6642\u306b\u306e\u307f\u5b9f\u884c\u304c\u5fc5\u8981\u306a\u30b3\u30fc\u30c9\u304c\u3042\u308b\u5834\u5408\u306f\u3001C++\u30b3\u30fc\u30c9\u5185\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef SIMULATOR"),"\u3092\u6b21\u306e\u3088\u3046\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n  // Your simulator specific user code here\n#endif\n")),(0,r.kt)("h2",a({},{id:"Printing-from-the-simulator"}),"Printing from the simulator"),(0,r.kt)("p",null,"If you want to output a debug text to the console when running the simulator, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_printf")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),'#include <touchgfx/Utils.hpp>\n\nint i = 0;\ntouchgfx_printf("Application is running through simulator! \\n");\ntouchgfx_printf("Print our value for integer i = %i \\n", i);\n')),(0,r.kt)("p",null,"Remember to include the Utils.hpp file to get the function declaration."),(0,r.kt)("p",null,"In real applications (for Cortex-M) ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_printf")," is defined as an empty macro. It will therefore generate no code and can be used in target code if you want. No need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef")," SIMULATOR here."),(0,r.kt)("h2",a({},{id:"locking-and-unlocking-the-framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u3068\u30ed\u30c3\u30af\u89e3\u9664"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u76f4\u63a5\u64cd\u4f5c\u3059\u308b\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u306b\u30d4\u30af\u30bb\u30eb\u3092\u66f8\u304d\u8fbc\u3080\u524d\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u304c\u5fc5\u8981\u3067\u3059\u3002\u3055\u3089\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u66f8\u8fbc\u307f\u5b8c\u4e86\u5f8c\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u89e3\u9664\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",a({},{id:"locking-the-framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u30ed\u30c3\u30af\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30b3\u30fc\u30c9\uff65\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"uint16_t* RESTRICT buf = HAL::getInstance()->lockFrameBuffer();\n")),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u306b\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u623b\u308a\u5024\u306f16\u30d3\u30c3\u30c8\u306e\u30dd\u30a4\u30f3\u30bf\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u9069\u5207\u306a\u30dd\u30a4\u30f3\u30bf\uff65\u30bf\u30a4\u30d7\u306b\u30ad\u30e3\u30b9\u30c8\u3057\u3066\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3084\u3059\u304f\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",a({},{id:"unlocking-the-framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u89e3\u9664"),(0,r.kt)("p",null,"\u4f7f\u7528\u5f8c\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u30ed\u30c3\u30af\u89e3\u9664\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"HAL::getInstance()->unlockFrameBuffer();\n")),(0,r.kt)("h3",a({},{id:"forgetting-to-unlock-the-framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u89e3\u9664\u3092\u5fd8\u308c\u305f\u5834\u5408"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30ed\u30c3\u30af\u89e3\u9664\u3092\u5fd8\u308c\u308b\u3068\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304c\u30d5\u30ea\u30fc\u30ba\u3057\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u4f7f\u7528\u53ef\u80fd\u306b\u306a\u308b\u307e\u3067\u6c38\u9060\u306b\u5f85\u3061\u7d9a\u3051\u307e\u3059\u3002 \u3053\u306e\u72b6\u6cc1\u3092\u691c\u51fa\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u3001\u30d5\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304cTouchGFX\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306b\u3088\u3063\u3066\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u9593\u306b\u30ed\u30c3\u30af\u3055\u308c\u308b\u3088\u3046\u306b\u8981\u6c42\u3055\u308c\u305f\u5834\u5408\u3001\u8b66\u544a\u306e\u901a\u77e5\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 Microsoft Visual Studio\u304b\u3089\u8868\u793a\u3055\u308c\u308b\u30a8\u30e9\u30fc\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/windows-unlock-framebuffer.webp",mdxType:"Figure"},"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u30ed\u30c3\u30af\u89e3\u9664\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306eWindows\u30c0\u30a4\u30a2\u30ed\u30b0"),(0,r.kt)("p",null,"\u30b3\u30f3\u30bd\u30fc\u30eb\uff65\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/console-unlock-framebuffer.webp",mdxType:"Figure"},"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u30ed\u30c3\u30af\u89e3\u9664\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u51fa\u529b"),(0,r.kt)("h3",a({},{id:"simulating-hardware-framebuffer-with-a-different-size-than-the-display"}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3068\u7570\u306a\u308b\u30b5\u30a4\u30ba\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u8a2d\u5b9a\u306b\u3088\u3063\u3066\u306f\u3001\u5b9f\u969b\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3088\u308a\u3082\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b5\u30a4\u30ba\u304c\u5c0f\u3055\u304f\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3067\u3082\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306b\u3088\u308b\u51e6\u7406\u304c\u53ef\u80fd\u3067\u3001\u3053\u308c\u306f\u3001simulator/main.cpp\u30d5\u30a1\u30a4\u30eb\u5185\u3067touchgfx_generic_init()\u306e\u547c\u3073\u51fa\u3057\u306e\u76f4\u5f8c\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"The width and height passed to touchgfx_generic_init() defines the size of the display and the framebuffer, but if the hardware framebuffer has a different size, simply call setFrameBufferSize() after calling touchgfx_generic_init() to specify the size of the actual framebuffer, e.g. as follows where SIM_WIDTH=800 and SIM_HEIGHT=480:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"touchgfx::HAL& hal = touchgfx::touchgfx_generic_init<touchgfx::HALSDL2>(dma, lcd, tc, SIM_WIDTH, SIM_HEIGHT, 0, 0);\nhal.setFrameBufferSize(832, 480); // Hardware framebuffer is wider\n")),(0,r.kt)("h3",a({},{id:"simulating-hardware-with-a-different-framerate"}),"Simulating hardware with a different framerate"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"int CALLBACK WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)\n{\n    ...\n    setupSimulator(argc, argv, hal);\n    ((touchgfx::HALSDL2*)&hal)->setVsyncInterval(25);\n\n    ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setVsyncInterval( interval )")," will change the interval between 2 frames, to find the right value  we do 1000/YOUR_FRAME_RATE=interval"),(0,r.kt)("p",null,"For 40fps=1000/40)=25ms"),(0,r.kt)("p",null,"By default it's 60fps = (1000/60) ~16,66 ms"))}g.isMDXComponent=!0}}]);
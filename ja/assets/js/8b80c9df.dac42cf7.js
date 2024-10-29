"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[12852],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496);class i extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const o=i},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),i=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},37754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>s});n(59496);var r=n(49613),i=n(28128),o=n(89639);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={id:"position-size",title:"\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba"},c=void 0,u={unversionedId:"development/ui-development/touchgfx-engine-features/position-size",id:"development/ui-development/touchgfx-engine-features/position-size",title:"\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba",description:"\u4e00\u822c\u7684\u306aTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eUI\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306e\u5927\u90e8\u5206\u306f\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u4f5c\u6210\u3067\u304d\u307e\u3059\u304c\u3001\u901a\u5e38\u306f\u30e6\u30fc\u30b6\u304c\u624b\u52d5\u3067\u5c11\u3057\u8a18\u8ff0\u3059\u308b\u5fc5\u8981\u3082\u3042\u308a\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u3092\u5897\u3084\u3057\u305f\u308a\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30d9\u30f3\u30c8\u3084\u8a2d\u5b9a\u30c7\u30fc\u30bf\u306b\u5fdc\u3058\u3066\u7570\u306a\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3088\u3046\u306a\u5834\u5408\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/position-size.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/position-size",permalink:"/4.24/ja/docs/development/ui-development/touchgfx-engine-features/position-size",draft:!1,tags:[],version:"current",frontMatter:{id:"position-size",title:"\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba"},sidebar:"docs",previous:{title:"\u30b9\u30af\u30ea\u30fc\u30f3\u9077\u79fb",permalink:"/4.24/ja/docs/development/ui-development/touchgfx-engine-features/screen-transitions"},next:{title:"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca",permalink:"/4.24/ja/docs/development/ui-development/touchgfx-engine-features/custom-containers"}},d={},s=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u8ffd\u52a0",id:"adding-widgets",level:2},{value:"\u30b5\u30a4\u30ba\u3068\u4f4d\u7f6e\u306e\u8a2d\u5b9a",id:"setting-size-position",level:2},{value:"\u30d8\u30eb\u30d1\uff65\u30e1\u30bd\u30c3\u30c9",id:"helper-methods",level:2},{value:"\u62e1\u5f35",id:"expanding",level:3},{value:"\u4e2d\u592e\u63c3\u3048",id:"centering",level:3},{value:"\u7121\u52b9\u5316",id:"invalidation",level:3},{value:"\u79fb\u52d5",id:"moving",level:3}],m={toc:s},g="wrapper";function v(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(g,a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u306aTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eUI\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306e\u5927\u90e8\u5206\u306f\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u4f5c\u6210\u3067\u304d\u307e\u3059\u304c\u3001\u901a\u5e38\u306f\u30e6\u30fc\u30b6\u304c\u624b\u52d5\u3067\u5c11\u3057\u8a18\u8ff0\u3059\u308b\u5fc5\u8981\u3082\u3042\u308a\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u3092\u5897\u3084\u3057\u305f\u308a\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30d9\u30f3\u30c8\u3084\u8a2d\u5b9a\u30c7\u30fc\u30bf\u306b\u5fdc\u3058\u3066\u7570\u306a\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3088\u3046\u306a\u5834\u5408\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30bf\u30b9\u30af\u3092\u958b\u59cb\u3059\u308b\u3068\u304d\u306b\u306f\u3001\u5f79\u306b\u7acb\u3064\u30af\u30e9\u30b9\u5185\u306e\u3044\u304f\u3064\u304b\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u77e5\u3063\u3066\u304a\u304f\u3068\u6709\u5229\u3067\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u3059\u3079\u3066\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001Drawable\u30af\u30e9\u30b9\u306e\u30b5\u30d6\u30af\u30e9\u30b9\u3067\u3059\u3002 \u3053\u306e\u30af\u30e9\u30b9\u306b\u306f\u3001\u30b5\u30a4\u30ba\u3068\u4f4d\u7f6e\u3092\u5236\u5fa1\u3059\u308b\u305f\u3081\u306e\u4e00\u822c\u7684\u306a\u30e1\u30bd\u30c3\u30c9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/widgets1.webp",noShadow:"true",mdxType:"Figure"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u968e\u5c64\uff08\u90e8\u5206\uff09"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u591a\u304f\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001View\u30b5\u30d6\u30af\u30e9\u30b9\u306b\u30e1\u30f3\u30d0\u30fc\u3068\u3057\u3066\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002 View\u30af\u30e9\u30b9\u306fScreen\u30af\u30e9\u30b9\u306e\u30b5\u30d6\u30af\u30e9\u30b9\u3067\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/position-size/screen1.webp",noShadow:"true",mdxType:"Figure"},"\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u968e\u5c64"),(0,r.kt)("p",null,"Screen\u30af\u30e9\u30b9\u306b\u306f\u30b3\u30f3\u30c6\u30ca\uff65\u30e1\u30f3\u30d0\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u30eb\u30fc\u30c8\uff65\u30b3\u30f3\u30c6\u30ca\u3068\u547c\u3070\u308c\u307e\u3059\u3002 \u30eb\u30fc\u30c8\uff65\u30b3\u30f3\u30c6\u30ca\u306f\u3001(0,0)\u3067\u958b\u59cb\u3055\u308c\u3001\u8868\u793a\u30a8\u30ea\u30a2\u5168\u4f53\uff08\u5e45= HAL::DISPLAY_WIDTH\u3001\u9ad8\u3055= HAL::DISPLAY_HEIGHT\uff09\u3092\u57cb\u3081\u308b\u3088\u3046\u306b\u521d\u671f\u5316\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",a({},{id:"adding-widgets"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u8ffd\u52a0"),(0,r.kt)("p",null,"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001View\u30af\u30e9\u30b9\u5185\u306b\u30e1\u30f3\u30d0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067View\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001myBox\u3068\u3044\u3046\u540d\u524d\u306e\u30dc\u30c3\u30af\u30b9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{3-3,13-13}","{3-3,13-13}":!0}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    Box myBox;\n};\n")),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u306e\u30b3\u30fc\u30c9\u5185\u3067Box\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001Box.hpp\u3092\u542b\u3081\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff08\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u306b\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u5834\u5408\uff09\u3002"),(0,r.kt)("p",null,"Box\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u63cf\u753b\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u30b7\u30fc\u30f3\uff65\u30b0\u30e9\u30d5\uff08Screen\u5185\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30c4\u30ea\u30fc\uff09\u306b\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30c4\u30ea\u30fc"),(0,r.kt)("p",null,"\u3053\u308c\u306fadd\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002 \u901a\u5e38\u306fsetupScreen\u5185\u3067\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp",metastring:"{10-10}","{10-10}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    add(myBox);\n}\n")),(0,r.kt)("p",null,"Screen\u4e0a\u306eadd\u30e1\u30bd\u30c3\u30c9\u304c\u3001\u30eb\u30fc\u30c8\uff65\u30b3\u30f3\u30c6\u30ca\u3067add\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-cpp"}),"void add(Drawable& d)\n{\n    container.add(d);\n}\n")),(0,r.kt)("p",null,"Screen\u306b\u5225\u306e\u30b3\u30f3\u30c6\u30ca\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u305d\u306e\u30b3\u30f3\u30c6\u30ca\u3067add\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u305d\u3053\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"void Screen1View::setupScreen()\n{\n    ...\n    myContainer.add(myBox);\n}\n")),(0,r.kt)("h2",a({},{id:"setting-size-position"}),"\u30b5\u30a4\u30ba\u3068\u4f4d\u7f6e\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u4f4d\u7f6e(0,0)\u304c\u3042\u308a\u3001\u5e45\u3068\u9ad8\u3055\u306f\u30bc\u30ed\u3067\u3059\u3002 \u3064\u307e\u308a\u3001\u307b\u3068\u3093\u3069\u3044\u3064\u3082\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\u3068\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u57fa\u672c\u30e1\u30bd\u30c3\u30c9\u306f\u3001setXY\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setXY(10, 10); // Put myBox in x=10, y=10\n")),(0,r.kt)("p",null,"\u5e45\u3068\u9ad8\u3055\u306f\u3001setWidthHeight\u30e1\u30bd\u30c3\u30c9\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u3042\u308b\u3044\u306f\u3001setWidth\u304a\u3088\u3073setHeight\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setWidthHeight(200, 100); // Give myBox a width of 200, height 100\n")),(0,r.kt)("p",null,"\u3053\u306e2\u3064\u306f\u3001setPosition\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u3063\u3066\u7d50\u5408\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.setPosition(10, 10, 200, 100); // Put myBox in x=10, y=10, with a width of 200, height 100\n")),(0,r.kt)("h2",a({},{id:"helper-methods"}),"\u30d8\u30eb\u30d1\uff65\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("p",null,"Drawable\u30af\u30e9\u30b9\u306b\u306f\u3001Drawable\u306e\u8a2d\u5b9a\u3092\u652f\u63f4\u3059\u308b\u30d8\u30eb\u30d1\uff65\u30e1\u30bd\u30c3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_drawable"}),"Drawable\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167")),(0,r.kt)("h3",a({},{id:"expanding"}),"\u62e1\u5f35"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::expand()"),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff08Drawable\uff09\u3092\u89aa\u3068\u540c\u3058\u30b5\u30a4\u30ba\u306b\u3057\u307e\u3059\u3002 \u4f59\u767d\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u5de6\u4e0a\u9685\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\uff08\u4f59\u767d\u3092\u542b\u3080\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.expand(10); // Put myBox in x=10, y=10, same size as parent except for margin of 10 pix\n")),(0,r.kt)("h3",a({},{id:"centering"}),"\u4e2d\u592e\u63c3\u3048"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::centerX())"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::centerY())"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::center()"),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u89aa\u5185\u90e8\u306e\u4e2d\u592e\u306b\u914d\u7f6e\u3057\u307e\u3059\uff08\u6a2a\u65b9\u5411\u3001\u7e26\u65b9\u5411\u3001\u4e21\u65b9\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   myBox.centerX(); // Center myBox horizontally in its parent\n")),(0,r.kt)("h3",a({},{id:"invalidation"}),"\u7121\u52b9\u5316"),(0,r.kt)("p",null,"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u3001\u518d\u63cf\u753b\u306e\u5fc5\u8981\u304c\u3042\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30d1\u30fc\u30c4\u3092\u7121\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u5927\u304d\u304f\u3059\u308b\u5834\u5408\u306f\u3001\u65b0\u3057\u3044\u30b5\u30a4\u30ba\u3092\u7121\u52b9\u5316\u3059\u308b\u3060\u3051\u3067\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u5c0f\u3055\u304f\u3059\u308b\u5834\u5408\u306f\u3001\u30b5\u30a4\u30ba\u306e\u5909\u66f4\u524d\u306b\u7121\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"   // Expand the Box, invalidate after to get the new size redrawn\n   myBox.expand(10);\n   myBox.invalidate();\n   ...\n   // Reduce the Box to small size, invalidate before, to get background redrawn\n   myBox.invalidate();\n   myBox.myBox.setPosition(10, 10, 200, 100);\n")),(0,r.kt)("p",null,"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u7121\u52b9\u5316\u3059\u308b\u3068\u3001\uff08\u305d\u306e\u6642\u70b9\u3067\uff09\u305d\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u5360\u6709\u3057\u3066\u3044\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u9818\u57df\u304c\u3001\u6b21\u306e\u63cf\u753b\u30d5\u30a7\u30fc\u30ba\u3067\u518d\u63cf\u753b\u3055\u308c\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002 \u3064\u307e\u308a\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u7121\u52b9\u5316\u3057\u3066\u305d\u308c\u3092\u5c0f\u3055\u304f\u3059\u308b\u5834\u5408\u3001\u7121\u52b9\u5316\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3060\u3051\u3067\u306a\u304f\u3001\u8868\u793a\u3055\u308c\u3066\u3044\u308b\uff08\u80cc\u5f8c\u306e\uff09\u4ed6\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30d1\u30fc\u30c4\u3082\u518d\u63cf\u753b\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",a({},{id:"moving"}),"\u79fb\u52d5"),(0,r.kt)("p",null,"Drawable\u30af\u30e9\u30b9\u306b\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u3067\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4f4d\u7f6e\u3092\u79fb\u52d5\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)"),"\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u74b0\u3068\u3057\u3066\u4f7f\u7528\u3057\u305f\u308a\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30d1\u30fc\u30c4\u3092\u5358\u7d14\u306b\u518d\u6574\u5217\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveRelative(int16_t x, int16_t y)"),"\u306finvalidate\u3092\u547c\u3073\u51fa\u3059\u306e\u3067\u3001\u7121\u52b9\u5316\u306e\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"    myBox.moveRelative(1, 0); // Move 1 pixel to the right\n")),(0,r.kt)("p",null,"\u3082\u30461\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"Drawable::moveTo(int16_t x, int16_t y)"),"\u3067\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"    myBox.moveTo(100, 100); // Move to 100, 100 from current position\n")),(0,r.kt)("p",null,"\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3082\u3001invalidate\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"))}v.isMDXComponent=!0}}]);
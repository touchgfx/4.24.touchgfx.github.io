"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[43437],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496);class a extends r.Component{render(){return r.createElement("div",{className:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59496),a=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{className:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{className:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},87154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(59496);var r=n(49613),a=n(89639),l=n(28128);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"graphics-engine",title:"\u56fe\u5f62\u5f15\u64ce"},p=void 0,u={unversionedId:"basic-concepts/graphics-engine",id:"basic-concepts/graphics-engine",title:"\u56fe\u5f62\u5f15\u64ce",description:"TouchGFX\u56fe\u5f62\u5f15\u64ce\u7684\u4e3b\u8981\u7528\u9014\u662f\u5728\u5d4c\u5165\u5f0f\u8bbe\u5907\u7684\u663e\u793a\u5c4f\u4e0a\u7ed8\u5236\u56fe\u5f62\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/graphics-engine.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/graphics-engine",permalink:"/4.24/zh-CN/docs/basic-concepts/graphics-engine",draft:!1,tags:[],version:"current",frontMatter:{id:"graphics-engine",title:"\u56fe\u5f62\u5f15\u64ce"},sidebar:"docs",previous:{title:"\u5e27\u7f13\u51b2\u533a",permalink:"/4.24/zh-CN/docs/basic-concepts/framebuffer"},next:{title:"\u4e3b\u5faa\u73af",permalink:"/4.24/zh-CN/docs/basic-concepts/rendering"}},s={},m=[{value:"\u573a\u666f\u6a21\u578b",id:"scene-model",level:2},{value:"\u64cd\u7eb5\u6a21\u578b",id:"manipulate-the-model",level:2},{value:"\u53d1\u5e03\u7ed8\u5236\u6307\u4ee4",id:"issue-drawing-commands",level:2},{value:"\u4e3b\u5faa\u73af",id:"main-loop",level:2},{value:"\u5e73\u53f0\u529f\u80fd",id:"platform-adaptibility",level:2}],d={toc:m},h="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(h,o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TouchGFX\u56fe\u5f62\u5f15\u64ce\u7684\u4e3b\u8981\u7528\u9014\u662f\u5728\u5d4c\u5165\u5f0f\u8bbe\u5907\u7684\u663e\u793a\u5c4f\u4e0a\u7ed8\u5236\u56fe\u5f62\u3002"),(0,r.kt)("p",null,"\u672c\u8282\u5c06\u63d0\u4f9bTouchGFX\u56fe\u5f62\u5f15\u64ce\u7c7b\u578b\u7684\u6982\u8ff0\u53ca\u5176\u5de5\u4f5c\u539f\u7406\u7684\u4e00\u4e9b\u80cc\u666f\u77e5\u8bc6\u3002"),(0,r.kt)("h2",o({},{id:"scene-model"}),"\u573a\u666f\u6a21\u578b"),(0,r.kt)("p",null,"\u56fe\u5f62\u5f15\u64ce\u4e3b\u8981\u53ef\u5206\u4e3a\u4e24\u7c7b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5373\u65f6\u6a21\u5f0f\u56fe\u5f62\u5f15\u64ce"),"\u63d0\u4f9b\u4e00\u4e2aAPI\uff0c\u4f7f\u5e94\u7528\u80fd\u591f\u76f4\u63a5\u4e3a\u663e\u793a\u5c4f\u7ed8\u5236\u56fe\u50cf\u3002 \u5e94\u7528\u8d1f\u8d23\u786e\u4fdd\u5728\u6b63\u786e\u7684\u65f6\u95f4\u6fc0\u6d3b\u6b63\u786e\u7684\u7ed8\u5236\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u6a21\u5f0f\u56fe\u5f62\u5f15\u64ce"),"\u4f7f\u7528\u6237\u80fd\u591f\u64cd\u7eb5\u6240\u663e\u793a\u7ec4\u4ef6\u7684\u62bd\u8c61\u6a21\u578b\u3002 \u5f15\u64ce\u8d1f\u8d23\u5728\u5408\u9002\u7684\u65f6\u95f4\u5c06\u6b64\u7ec4\u4ef6\u6a21\u578b\u8f6c\u5316\u4e3a\u6b63\u786e\u7684\u56fe\u5f62\u7ed8\u5236\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"TouchGFX\u9075\u5faa\u4fdd\u7559\u6a21\u5f0f\u7ed8\u56fe\u539f\u5219\u3002 \u7b80\u800c\u8a00\u4e4b\uff0cTouchGFX\u63d0\u4f9b\u7528\u6237\u53ef\u64cd\u7eb5\u7684\u6a21\u578b\uff0c\u7136\u540eTouchGFX\u8d1f\u8d23\u5c06\u6b64\u6a21\u578b\u8f6c\u5316\u4e3a\u6e32\u67d3\u65b9\u6cd5\u8c03\u7528\u7684\u4f18\u5316\u96c6\u5408\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/retained-mode-graphics2.svg",noShadow:"true",width:480,mdxType:"Figure"},"\u4fdd\u7559\u6a21\u5f0f\u56fe\u5f62\u5f15\u64ce"),(0,r.kt)("p",null,"TouchGFX\u7684retain mode\u6709\u8bb8\u591a\u4f18\u52bf\u3002 \u4e3b\u8981\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6613\u7528\u6027\uff1a")," \u4fdd\u7559\u56fe\u5f62\u5f15\u64ce\u6613\u4e8e\u4f7f\u7528\u3002 \u7528\u6237\u901a\u8fc7\u8c03\u7528\u5185\u90e8\u6a21\u578b\u4e0a\u7684\u65b9\u6cd5\u76f4\u63a5\u5728\u5c4f\u5e55\u4e0a\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u914d\u7f6e\uff0c\u800c\u4e0d\u8003\u8651\u5b9e\u9645\u7684\u7ed8\u5236\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6027\u80fd\uff1a"),"TouchGFX\u5206\u6790\u573a\u666f\u6a21\u578b\uff0c\u5e76\u4f18\u5316\u5728\u5c4f\u5e55\u4e0a\u5b9e\u73b0\u6a21\u578b\u6240\u9700\u7684\u7ed8\u5236\u8c03\u7528\u3002 \u8fd9\u5305\u62ec\u7279\u610f\u4e0d\u7ed8\u5236\u9690\u85cf\u7ec4\u4ef6\uff0c\u53ea\u7ed8\u5236\u548c\u4f20\u8f93\u7ec4\u4ef6\u6709\u53d8\u5316\u7684\u90e8\u5206\uff0c\u4ee5\u53ca\u7ba1\u7406\u5e27\u7f13\u5b58\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u72b6\u6001\u7ba1\u7406\uff1a"),"TouchGFX\u6301\u7eed\u8ddf\u8e2a\u573a\u666f\u6a21\u578b\u4e2d\u7684\u6d3b\u8dc3\u90e8\u5206\u3002 \u8fd9\u53cd\u8fc7\u6765\u4e3a\u7528\u6237\u4f18\u5316\u573a\u666f\u6a21\u578b\u5185\u5bb9\u63d0\u4f9b\u4e86\u4fbf\u5229\u3002")),(0,r.kt)("p",null,"TouchGFX\u4fdd\u7559\u6a21\u5f0f\u56fe\u5f62\u65b9\u6848\u7684\u4e3b\u8981\u4e0d\u8db3\u5728\u4e8e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017\uff1a"),"\u5448\u73b0\u573a\u666f\u6a21\u578b\u4f1a\u5360\u7528\u4e00\u4e9b\u5b58\u50a8\u7a7a\u95f4\u3002 TouchGFX\u901a\u8fc7\u5206\u6790\u573a\u666f\u6a21\u578b\u548c\u4f18\u5316\u76f8\u5e94\u6e32\u67d3\u6210\u679c\u8fbe\u5230\u5176\u6027\u80fd\u6c34\u5e73\uff0c\u901a\u5e38\u6bcf\u79d2\u6e32\u67d360\u5e27\u3002 \u4e3a\u4e86\u51cf\u5c11TouchGFX\u573a\u666f\u6a21\u578b\u4f7f\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u8bbe\u8ba1\u8005\u505a\u4e86\u5927\u91cf\u5de5\u4f5c\u3002 \u5728\u5178\u578b\u5e94\u7528\u4e2d\uff0c\u8be5\u6a21\u578b\u6240\u9700\u7684\u5b58\u50a8\u7a7a\u95f4\u8fdc\u4f4e\u4e8e1\u5343\u5b57\u8282\u3002")),(0,r.kt)("h2",o({},{id:"manipulate-the-model"}),"\u64cd\u7eb5\u6a21\u578b"),(0,r.kt)("p",null,"\u573a\u666f\u6a21\u578b\u7531\u7ec4\u4ef6\u7ec4\u6210\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"\u63a7\u4ef6\u6811"),(0,r.kt)("p",null,"\u6a21\u578b\u4e2d\u7684\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u53ea\u6709\u4e00\u4e2a\u5173\u8054\u7684\u7236\u7ec4\u4ef6\u3002 \u7236\u7ec4\u4ef6\u672c\u8eab\u4e5f\u662f\u573a\u666f\u6a21\u578b\u7684\u4e00\u90e8\u5206\u3002 \u8fd9\u6837\u7684\u4e00\u4e2a\u6a21\u578b\u7edf\u79f0\u4e3a\u4e00\u68f5",(0,r.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"}),"tree"),"."),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u5e38\u4f1a\u5c06\u6b64\u6811\u4e2d\u7684\u7ec4\u4ef6\u79f0\u4e3aUI\u7ec4\u4ef6\u6216\u63a7\u4ef6\u3002"),(0,r.kt)("p",null,"\u4ece\u5e94\u7528\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u5c06\u901a\u8fc7\u8bbe\u7f6e\u548c\u64cd\u7eb5\u573a\u666f\u6a21\u578b\u4e2d\u7684\u63a7\u4ef6\u6765\u66f4\u65b0\u663e\u793a\u7684\u56fe\u5f62\u3002 \u4e0b\u9762\u662f\u4e00\u4e2a\u4e3a\u6309\u94ae\u8bbe\u7f6e\u4f4d\u7f6e\u548c\u56fe\u50cf\uff0c\u5e76\u5c06\u6309\u94ae\u6dfb\u52a0\u5230\u573a\u666f\u6a21\u578b\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"myButton.setXY(100,50);\nmyButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));\nadd(myButton);\n")),(0,r.kt)("h2",o({},{id:"issue-drawing-commands"}),"\u53d1\u5e03\u7ed8\u5236\u6307\u4ee4"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6e32\u67d3\u573a\u666f\u6a21\u578b\u65f6\uff0cTouchGFX\u4f1a\u4f7f\u7528\u5b83\u7684\u7ed8\u5236API\u3002 \u6b64\u7ed8\u5236API\u5305\u542b\u7ed8\u5236\u56fe\u5f62\u57fa\u5143\uff08\u5982\u65b9\u5757\u3001\u56fe\u50cf\u3001\u6587\u672c\u3001\u7ebf\u6761\u3001\u591a\u8fb9\u5f62\u3001\u6709\u7eb9\u7406\u7684\u4e09\u89d2\u5f62\u7b49\uff09\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982TouchGFX\u4e2d\u7684",(0,r.kt)("a",o({parentName:"p"},{href:"../development/ui-development/ui-components/buttons/button"}),"Button"),"\u63a7\u4ef6\uff0c\u5728\u6e32\u67d3\u65f6\uff0c\u4f7f\u7528",(0,r.kt)("a",o({parentName:"p"},{href:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"}),"drawPartialBitmap"),"\u65b9\u6cd5\u7ed8\u5236\u56fe\u50cf\u3002 \u5728TouchGFX\u4e2d\u7ed8\u5236\u6309\u94ae\u5c0f\u5de5\u5177\u7684\u6e90\u4ee3\u7801\u5927\u81f4\u5982\u4e0b\uff1a"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"touchgfx/widgets/button.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"void Button::draw(const Rect& invalidatedArea) const\n{\n    // calculate the part of the bitmap to draw\n    api.drawPartialBitmap(bitmap, x, y, part, alpha);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u8be6\u60c5\u8bf7\u67e5\u770b",(0,r.kt)("inlineCode",{parentName:"em"},"touchgfx/widgets/button.cpp"),"\u4e2d\u7684\u5b9e\u9645\u6e90\u4ee3\u7801\u3002")),(0,r.kt)("p",null,"TouchGFX\u5305\u542b\u7ed8\u5236API\u7684\u4f18\u5316\u5b9e\u73b0\u3002 \u4f8b\u5982\uff0c  ",(0,r.kt)("a",o({parentName:"p"},{href:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap"}),"drawPartialBitmap")," \u65b9\u6cd5\u4f7f\u7528\u5e95\u5c42\u786c\u4ef6\uff08\u5982\u679c\u6709Chrom-ART\u56fe\u50cf\u52a0\u901f\u5668\uff09\u7ed8\u5236\u4f4d\u56fe\u3002"),(0,r.kt)("p",null,"\u5728\u7528\u65b0\u7684\u63a7\u4ef6\u7c7b\u578b\u6269\u5c55\u573a\u666f\u6a21\u578b\u65f6\uff0c\u53ef\u4f7f\u7528\u8fd9\u4e9bAPI\u7ed8\u5236\u65b9\u6cd5\u3002 \u53c2\u89c1\u5173\u4e8e\u521b\u5efa ",(0,r.kt)("a",o({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/custom-widgets"}),"custom widget"),"\u7684\u7ae0\u8282\u3002"),(0,r.kt)("p",null,"\u7ed8\u5236API\u65b9\u6cd5\u7684\u5b9e\u73b0\u662f\u5e73\u53f0\u7279\u5b9a\u7684\uff0c\u5e76\u9488\u5bf9\u6bcf\u79cd\u7279\u5b9aMCU\u8fdb\u884c\u4e86\u9ad8\u5ea6\u4f18\u5316\u3002"),(0,r.kt)("h2",o({},{id:"main-loop"}),"\u4e3b\u5faa\u73af"),(0,r.kt)("p",null,"\u8bb8\u591a\u6e38\u620f\u5f15\u64ce\u548c\u56fe\u5f62\u5f15\u64ce\u7684\u5de5\u4f5c\u65b9\u5f0f\uff08\u7279\u522b\u662fTouchGFX\uff09\u90fd\u53ef\u4ee5\u770b\u4f5c\u662f\u65e0\u9650\u5faa\u73af\u3002"),(0,r.kt)("p",null,"TouchGFX\u7684\u4e3b\u5faa\u73af\u4e2d\u6709\u4e09\u79cd\u4e3b\u8981\u6d3b\u52a8\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u91c7\u96c6\u4e8b\u4ef6\uff1a"),"\u91c7\u96c6\u89e6\u6478\u5c4f\u4e8b\u4ef6\u3001\u7269\u7406\u6309\u94ae\u6309\u4e0b\u4e8b\u4ef6\u548c\u6765\u81ea\u540e\u53f0\u7cfb\u7edf\u7684\u6d88\u606f\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u66f4\u65b0\u573a\u666f\u6a21\u578b\uff1a"),"\u5bf9\u91c7\u96c6\u7684\u4e8b\u4ef6\u505a\u51fa\u54cd\u5e94\uff0c\u66f4\u65b0\u6a21\u578b\u7684\u4f4d\u7f6e\u3001\u52a8\u753b\u3001\u8272\u5f69\u548c\u56fe\u50cf\u7b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u573a\u666f\u6a21\u578b\uff1a"),"\u91cd\u7ed8\u6a21\u578b\u4e2d\u5df2\u66f4\u65b0\u7684\u90e8\u5206\uff0c\u5e76\u4f7f\u4e4b\u663e\u793a\u5728\u663e\u793a\u5c4f\u4e0a")),(0,r.kt)("p",null,"\u4e3b\u5faa\u73af\u7684\u56fe\u89e3\u7248\u672c\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/basic-concepts/engine-cycle.webp",noShadow:"true",width:320,mdxType:"Figure"},"\u4e3b\u5faa\u73af"),(0,r.kt)("p",null,"\u4e3b\u5faa\u73af\u7684\u6bcf\u6b21\u6267\u884c\u90fd\u8868\u793a\u5e94\u7528\u7684\u4e00\u4e2atick\u3002"),(0,r.kt)("h2",o({},{id:"platform-adaptibility"}),"\u5e73\u53f0\u529f\u80fd"),(0,r.kt)("p",null,"\u7531\u4e8eTouchGFX\u65e8\u5728\u8fd0\u884c\u4e8e\u6240\u6709STM32\u5d4c\u5165\u5f0f\u8bbe\u7f6e\u4e0a\uff0c\u56e0\u6b64\u4e0a\u8ff0\u6d3b\u52a8\u53ef\u4ee5\u5b9a\u5236\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4e13\u7528\u62bd\u8c61\u5c42\u5904\u7406\u4e8b\u4ef6\u91c7\u96c6\u3002 \u6b64\u62bd\u8c61\u5c42\u7684\u5b9a\u5236\u662f",(0,r.kt)("a",o({parentName:"li"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"\u201cTouchGFX AL\u5f00\u53d1"),"\u201d\u90e8\u5206\u7684\u4e3b\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u578b\u66f4\u65b0\u5b8c\u5168\u53d6\u51b3\u4e8e\u5e94\u7528\u3002 ",(0,r.kt)("a",o({parentName:"li"},{href:"../development/ui-development/ui-development-introduction"}),"UI\u5f00\u53d1"),"\u4e2d\u5305\u542b\u5173\u4e8e\u5982\u4f55\u6267\u884c\u6b64\u66f4\u65b0\u7684\u4e3b\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5e27\u7f13\u51b2\u7684\u56fe\u5f62\u6e32\u67d3\u7531TouchGFX\u8d1f\u8d23\uff0c\u901a\u5e38\u65e0\u9700\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002 \u50cf\u7d20\u4ece\u5e27\u7f13\u51b2\u5230\u663e\u793a\u5c4f\u7684\u4f20\u8f93\u662f\u5e73\u53f0\u6307\u5b9a\u7684\uff0c\u53c2\u89c1",(0,r.kt)("a",o({parentName:"li"},{href:"../development/board-bring-up/board-introduction"}),"\u201c\u677f\u542f\u52a8\u642d\u5efa\u201d"),"\u548c\u201cTouchGFX AL\u5f00\u53d1\u201d",(0,r.kt)("a",o({parentName:"li"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"\u4e86\u89e3\u5982\u4f55\u9488\u5bf9\u7279\u5b9a\u5e73\u53f0\u8fdb\u884c\u81ea\u5b9a\u4e49"),"\u3002")),(0,r.kt)("p",null,"\u8bf7\u7ee7\u7eed\u9605\u8bfb\u4ee5\u83b7\u53d6\u5173\u4e8eTouchGFX\u4e3b\u5faa\u73af\u7684\u66f4\u591a\u4fe1\u606f\u3002"))}g.isMDXComponent=!0}}]);
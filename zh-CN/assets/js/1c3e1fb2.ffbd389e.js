"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[77350],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=r,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return t?i.createElement(m,a(a({ref:n},u),{},{components:t})):i.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[h]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89639:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(59496),r=t(7029);const o=function(e){const n=e.noShadow||!1,t=e.width,o=e.height,a=(0,r.Z)(e.imageSource);return n?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:t,height:o,src:a})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:t,height:o,src:a})),i.createElement("p",null,e.children))}},67269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>h});t(59496);var i=t(49613),r=t(89639);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"screen-transitions",title:"Screen Transitions"},c=void 0,l={unversionedId:"development/ui-development/touchgfx-engine-features/screen-transitions",id:"development/ui-development/touchgfx-engine-features/screen-transitions",title:"Screen Transitions",description:"TouchGFX supports various transitions between Screens. This allows the application programmer to use different visual effects when changing between Screens in his application.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/screen-transitions.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/screen-transitions",permalink:"/4.24/zh-CN/docs/development/ui-development/touchgfx-engine-features/screen-transitions",draft:!1,tags:[],version:"current",frontMatter:{id:"screen-transitions",title:"Screen Transitions"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49\u89e6\u53d1\u6761\u4ef6\u548c\u64cd\u4f5c",permalink:"/4.24/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"},next:{title:"\u4f4d\u7f6e\u548c\u5927\u5c0f",permalink:"/4.24/zh-CN/docs/development/ui-development/touchgfx-engine-features/position-size"}},u={},h=[{value:"Setting up a Screen Transition in the TouchGFX Designer",id:"setup-in-designer",level:2},{value:"Screen Transitions",id:"screen-transitions",level:2},{value:"None Transition",id:"none-transition",level:3},{value:"Slide Transition",id:"slide-transition",level:3},{value:"Cover Transition",id:"cover-transition",level:3},{value:"Wipe Transition",id:"wipe-transition",level:3},{value:"Block Transition",id:"block-transition",level:3},{value:"Starting Transitions from code",id:"starting-transition-from-code",level:2}],p={toc:h},d="wrapper";function m(e){var{components:n}=e,t=a(e,["components"]);return(0,i.kt)(d,o({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TouchGFX supports various transitions between Screens. This allows the application programmer to use different visual effects when changing between Screens in his application."),(0,i.kt)("p",null,"In many cases, having an application with no screen transitions will be adequate and will give the user the fastest interactions with the application. In other cases, an animation can improve the experience of using the application, for example during application startup."),(0,i.kt)("h2",o({},{id:"setup-in-designer"}),"Setting up a Screen Transition in the TouchGFX Designer"),(0,i.kt)("p",null,"This is done by creating an interaction on the Screen where the transition begins:"),(0,i.kt)(r.Z,{width:"90%",imageSource:"/img/development/ui-development/touchgfx-engine-features/screen-transitions/designer-create-transition.png",mdxType:"Figure"},"Setting up a Screen Transition"),(0,i.kt)("p",null,"In the above example we have an application with two Screens; Screen1 and Screen2. On Screen1 we have a ButtonWithLabel Widget, buttonNext, and we want the application to change to Screen2 when the Button is pressed.",(0,i.kt)("br",{parentName:"p"}),"\n",'This is done by clicking "Interactions" in the upper-right corner when Screen1 is active and configuring the interaction as shown on the image.',(0,i.kt)("br",{parentName:"p"}),"\n","In the example Screen1 has the numbers 0 .. 9 in top. Screen2 has the numbers in the bottom. The numbers make it easy to identify which parts of a Screen is visible."),(0,i.kt)("h2",o({},{id:"screen-transitions"}),"Screen Transitions"),(0,i.kt)("p",null,"A number of different transitions are available in TouchGFX. They look different and have different performance characteristics.",(0,i.kt)("br",{parentName:"p"}),"\n",'You can select which transition you want to use in the "Transition" combo-box in the interaction configuration (shown above).'),(0,i.kt)("h3",o({},{id:"none-transition"}),"None Transition"),(0,i.kt)("p",null,"The None transition just changes directly from Screen1 to Screen2 without any animation. The new Screen is drawn in the frame buffer as fast as possible, completely overwriting the previous screen.",(0,i.kt)("br",{parentName:"p"}),"\n","This is the fastest possible transition."),(0,i.kt)(r.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/screen-transitions/no-transition.png",mdxType:"Figure"},"None Transition"),(0,i.kt)("h3",o({},{id:"slide-transition"}),"Slide Transition"),(0,i.kt)("p",null,"The Slide transition moves the original Screen to a side and moves the new Screen in from the opposite side."),(0,i.kt)(r.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/screen-transitions/slide-transition.png",mdxType:"Figure"},"Slide Transition. Start screen on the left, Screens transitioning in the middle. End Screen on the right."),(0,i.kt)("p",null,"Since the Screen1 is moved out to the left, the numbers 0,1,2,3 is not visible in the middle image. The red arrow indicates the incoming edge of Screen2."),(0,i.kt)("p",null,"The Slide Transition updates every pixel in the frame buffer in every tick. This can result in performance problems. The visible part of the new Screen is drawn in every tick. This can be a problem if the new Screen contains elements, like Texture Mapper, that are expensive to draw (if this is the case the expensive elements can in some cases be hidden until the transition completes)."),(0,i.kt)("p",null,"The Slide Transition requires the availability of the ",(0,i.kt)("a",o({parentName:"p"},{href:"/4.24/zh-CN/docs/development/ui-development/touchgfx-engine-features/animation-storage"}),"Animation Storage"),"."),(0,i.kt)("h3",o({},{id:"cover-transition"}),"Cover Transition"),(0,i.kt)("p",null,"The Cover Transition moves the new Screen in from the side as the Slide Transition, but it leaves the start Screen in place (0,1,2,3 of Screen1 is visible in the middle image)."),(0,i.kt)("p",null,"The visible part of the new Screen is drawn in every tick. This can again be a problem if the new Screen contains expensive elements. Performance is a bit better than with SlideTransition."),(0,i.kt)(r.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/screen-transitions/cover-transition.png",mdxType:"Figure"},"Cover Transition. Start screen on the left, Screens transitioning in the middle. End Screen on the right."),(0,i.kt)("p",null,"The Cover Transition does not require Animation Storage."),(0,i.kt)("h3",o({},{id:"wipe-transition"}),"Wipe Transition"),(0,i.kt)("p",null,"The Wipe Transition partially replaces the original Screen with the new Screen starting from the side, showing more and more of the new Screen in every tick. No pixels are moved, so it is only necessary to draw the pixels that changes from Screen1 to Screen2."),(0,i.kt)("p",null,"Performance is often very good and also suitable for use with ",(0,i.kt)("a",o({parentName:"p"},{href:"../../scenarios/lowering-memory-usage-with-partial-framebuffer"}),"Partial Frame Buffer"),"."),(0,i.kt)(r.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/screen-transitions/wipe-transition.png",mdxType:"Figure"},"Wipe Transition. Start screen on the left, Screens transitioning in the middle. End Screen on the right."),(0,i.kt)("h3",o({},{id:"block-transition"}),"Block Transition"),(0,i.kt)("p",null,"The Block Transition divides the screen into a grid of 8 x 4 rectangles. The pixels in the rectangles are then replaced with pixels from the new Screen in a random order. It updated two rectangles in every frame for a total transition time of 24 ticks."),(0,i.kt)(r.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/screen-transitions/block-transition.png",mdxType:"Figure"},"Block Transition. Start screen on the left, Screens transitioning in the middle. End Screen on the right."),(0,i.kt)("p",null,"In the above application, the background of Screen2 has been replaced with a green image to make the individual rectangles more visible."),(0,i.kt)("p",null,"The performance of the Block Transition is often very good and suitable for use with Partial Frame Buffer."),(0,i.kt)("h2",o({},{id:"starting-transition-from-code"}),"Starting Transitions from code"),(0,i.kt)("p",null,"In the above example we saw how to start a Screen transition from the UI. Sometimes it is also required to start a transition from code."),(0,i.kt)("p",null,'This is also possible by creating an "Action" on Screen1:'),(0,i.kt)(r.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/screen-transitions/create-action.png",mdxType:"Figure"},"Creating an Action on Screen1."),(0,i.kt)("p",null,'Click on the Screen1 element in the tree view on the left side of the TouchGFX Designer window. Then click on the "+" next to "Actions" on the right side to create a Custom Action.',(0,i.kt)("br",{parentName:"p"}),"\n",'Type in the name "changeToScreen2".'),(0,i.kt)("p",null,"Now you can create an interaction that is triggered when the new Custom Action is called:"),(0,i.kt)(r.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/screen-transitions/use-action-in-interaction.png",mdxType:"Figure"},"Use Custom Action as trigger in an interaction."),(0,i.kt)("p",null,'Select the trigger "changeToScreen2 is called". Otherwise setup the interaction as before.'),(0,i.kt)("p",null,"Now we just need to call the Custom Action from code. As an example, the below code calls the action from the handleTickEvent eventhandler of Screen1:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-cpp",metastring:"{9-9}","{9-9}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\n    virtual void handleTickEvent()\n    {\n        if (++count == 30)\n        {\n            changeToScreen2();\n        }\n    }\nprivate:\n   int count = 0;\n")),(0,i.kt)("p",null,"The code counts the frames until the 30th frame where it calls the Custom Action."))}m.isMDXComponent=!0}}]);
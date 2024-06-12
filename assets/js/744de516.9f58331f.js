"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[78260],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,g=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28128:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496);class i extends a.Component{render(){return a.createElement("div",{className:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}const r=i},89639:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59496),i=n(7029);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,i.Z)(e.imageSource);return t?a.createElement("div",{className:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{className:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children))}},26035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(59496);var a=n(49613),i=n(28128),r=n(89639);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"animation-storage",title:"Animation Storage"},c=void 0,p={unversionedId:"development/ui-development/touchgfx-engine-features/animation-storage",id:"development/ui-development/touchgfx-engine-features/animation-storage",title:"Animation Storage",description:"The Animation Storage is an optional extra frame buffer supported by",source:"@site/docs/development/ui-development/touchgfx-engine-features/animation-storage.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/animation-storage",permalink:"/4.24/docs/development/ui-development/touchgfx-engine-features/animation-storage",draft:!1,tags:[],version:"current",frontMatter:{id:"animation-storage",title:"Animation Storage"},sidebar:"docs",previous:{title:"Image Compression",permalink:"/4.24/docs/development/ui-development/touchgfx-engine-features/image-compression"},next:{title:"UI Components",permalink:"/4.24/docs/category/ui-components"}},u={},m=[{value:"Setup the Animation Storage",id:"setup-the-animation-storage",level:2},{value:"Slide Transition",id:"slide-transition",level:2},{value:"Using Animation Storage with SnapshotWidget",id:"using-animation-storage-with-snapshotwidget",level:2},{value:"Using Animation Storage with Image",id:"using-animation-storage-with-image",level:2}],h={toc:m},g="wrapper";function d(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,o({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Animation Storage is an optional extra frame buffer supported by\nTouchGFX that can be used to create animations during screen\ntransitions.",(0,a.kt)("br",{parentName:"p"}),"\n","The Animation Storage must be allocated manually and registered with\nTouchGFX during startup.",(0,a.kt)("br",{parentName:"p"}),"\n","The Animation Storage is used by the Slide transition and with the\nSnapshotWidget. It can also be used as a general Bitmap."),(0,a.kt)("h2",o({},{id:"setup-the-animation-storage"}),"Setup the Animation Storage"),(0,a.kt)("p",null,"The size of the Animation Storage buffer is the same as the ordinary\nframe buffers. For example, if your display is 480 x 272 pixels in 16\nbit colors, your frame buffers are 480 x 272 x 2 = 261,120 bytes each."),(0,a.kt)("p",null,"The Animation Storage is either allocated with an array or by an\nexplicit address (it can not be configured in the TouchGFX Generator):"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),'namespace\n{\nLOCATION_PRAGMA("TouchGFX_Framebuffer")\nuint16_t animationBuffer[480 * 272] LOCATION_ATTRIBUTE_NOLOAD("TouchGFX_Framebuffer");\n}\n')),(0,a.kt)("p",null,"In this example we create an array of 130,560 16-bit integers. This\nmatches the size of the frame buffer in this example and ensures 16-bit\nalignment."),(0,a.kt)("p",null,"We pass the buffer to TouchGFX by calling a method on HAL:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void TouchGFXHAL::initialize()\n{\n    TouchGFXGeneratedHAL::initialize();\n    setAnimationStorage((void*)animationBuffer);    // Add animation storage\n}\n")),(0,a.kt)("p",null,"It is recommended to call HAL::setAnimationStorage after the call to\nTouchGFXGeneratedHAL::initialize, as the generated code clears the\nanimation storage address."),(0,a.kt)("h2",o({},{id:"slide-transition"}),"Slide Transition"),(0,a.kt)("p",null,"After allocating and registering an Animation Storage buffer we can\nnow use the Slide Transition in the TouchGFX Designer.",(0,a.kt)("br",{parentName:"p"}),"\n","This is done by creating an interaction on the Screen where the\ntransition begins:"),(0,a.kt)(r.Z,{width:"90%",imageSource:"/img/development/ui-development/touchgfx-engine-features/animation-storage/slide-transition-interaction.png",mdxType:"Figure"},"Changing Screens with a Slide Transition"),(0,a.kt)("p",null,"In the above example we have an application with two Screens; Screen1\nand Screen2. On Screen1 we have a ButtonWithLabel Widget and we want\nthe application to change to Screen2 when the Button is pressed.",(0,a.kt)("br",{parentName:"p"}),"\n",'This is done by clicking "Interactions" in the upper-right corner and\nconfiguring the interaction as shown on the image.'),(0,a.kt)("p",null,"When the Slide Transition is started, TouchGFX makes a copy of the\ncurrent frame buffer (showing Screen1) to the Animation\nStorage. TouchGFX then changes to Screen2, but copies the pixels from\nthe Animation Storage to the frame buffer (not showing any of the\npixels from Screen2). In each frame as the transition progresses, the\npixels from the Animation Storage are shown further and further to the\nleft (showing less and less pixels), and the pixels from Screen2 are\ncoming in from the right:"),(0,a.kt)(r.Z,{width:"70%",imageSource:"/img/development/ui-development/touchgfx-engine-features/animation-storage/slide-transition-example.png",mdxType:"Figure"},"Slide Transition showing pixels from the Animation Storage on the left and Screen2 on the right"),(0,a.kt)("p",null,"In the configuration of the interaction in the TouchGFX Designer it is\npossible to select the direction of the slide."),(0,a.kt)("h2",o({},{id:"using-animation-storage-with-snapshotwidget"}),"Using Animation Storage with SnapshotWidget"),(0,a.kt)("p",null,"The SnapshotWidget can be used to copy data from the frame buffer to the\nAnimation Storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    ...\n    void copyFrameBuffer();\nprotected:\n    SnapshotWidget snapshot; ///< The SnapshotWidget that is moved when transitioning.\n};\n\nvoid Screen1View::copyFrameBuffer()\n{\n    snapshot.setPosition(0, 0, HAL::DISPLAY_WIDTH, HAL::DISPLAY_HEIGHT);\n    snapshot.makeSnapshot(); // Copy whole frame buffer to Animation Storage\n}\n")),(0,a.kt)("p",null,"The method copyFrameBuffer uses the SnapshotWidget to copy the\nframe buffer to the Animation Storage."),(0,a.kt)("p",null,"The SnapshotWidget will display the contents of the Animation Storage\nif the widget is kept visible in the Screen. If this is not the\nintention, set it invisible:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"    snapshot.setVisible(false);\n")),(0,a.kt)("h2",o({},{id:"using-animation-storage-with-image"}),"Using Animation Storage with Image"),(0,a.kt)("p",null,"The Animation Storage can be used as any normal Bitmap. It has the BitmapId\nBITMAP_ANIMATION_STORAGE = 0xFFFE. To use it with an Image Widget you\ncan do:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-cpp"}),"    image1.setBitmap(Bitmap(BITMAP_ANIMATION_STORAGE));\n")),(0,a.kt)("p",null,"The dimension of the Animation Storage Bitmap is always the dimension\nof the frame buffer."),(0,a.kt)("p",null,"The Animation Storage can be used in this way with a lot of Widgets\nthat uses Bitmaps, for example the Texture Mapper."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[10674],{49613:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var i=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,p=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?i.createElement(p,o(o({ref:t},h),{},{components:n})):i.createElement(p,o({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:a,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16382:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/touchgfx-tutorial-04-fea43cce73bad37b8df3f2deaa9f7bd1.zip"},63029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>g});n(59496);var i=n(49613),a=n(95375),l=n(89639),o=n(12963),r=n(48753),s=n(28128);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"tutorial-04",title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior"},u=void 0,m={unversionedId:"tutorials/tutorial-04",id:"tutorials/tutorial-04",title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior",description:"In this tutorial, you will learn how to create and configure the two widgets - Custom Container and Scroll Wheel. A Custom Container is a widget that enables you to create a new widget by combining multiple other widgets and add specific behavior for the widgets in the Custom Container. The Scroll Wheel is a widget used for creating a scrollable menu, consisting of multiple selectable items. The tutorial will also teach how user code can be created to change the behavior of a widget.",source:"@site/academy/tutorials/tutorial-04.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-04",permalink:"/4.24/zh-TW/academy/tutorials/tutorial-04",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-04",title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior"},sidebar:"academy",previous:{title:"Tutorial 3: Applications with Multiple Screens",permalink:"/4.24/zh-TW/academy/tutorials/tutorial-03"},next:{title:"Tutorial 5: Creating Custom Triggers and Actions",permalink:"/4.24/zh-TW/academy/tutorials/tutorial-05"}},p={},g=[{value:"Step 1: Creating a Custom Container",id:"step-1-creating-a-custom-container",level:2},{value:"Adding Widgets to the Custom Container",id:"adding-widgets-to-the-custom-container",level:3},{value:"Adding the Custom Container to a Screen",id:"adding-the-custom-container-to-a-screen",level:3},{value:"Step 2: Creating a Scroll Wheel",id:"step-2-creating-a-scroll-wheel",level:2},{value:"Creating the Scroll Wheel",id:"creating-the-scroll-wheel",level:3},{value:"Adding Items to the Scroll Wheel",id:"adding-items-to-the-scroll-wheel",level:3},{value:"Step 3: Adding User Code to Scroll Wheel",id:"step-3-adding-user-code-to-scroll-wheel",level:2},{value:"Change Image and Text in MenuElement",id:"change-image-and-text-in-menuelement",level:3},{value:"Update the Items in the Scroll Wheel",id:"update-the-items-in-the-scroll-wheel",level:3},{value:"Step 4: Adding Custom Behavior to Scroll Wheel",id:"step-4-adding-custom-behavior-to-scroll-wheel",level:2},{value:"Add Custom Behavior to MenuElement",id:"add-custom-behavior-to-menuelement",level:3}],f={toc:g},w="wrapper";function b(e){var{components:t}=e,d=h(e,["components"]);return(0,i.kt)(w,c({},f,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, you will learn how to create and configure the two widgets - Custom Container and Scroll Wheel. A Custom Container is a widget that enables you to create a new widget by combining multiple other widgets and add specific behavior for the widgets in the Custom Container. The Scroll Wheel is a widget used for creating a scrollable menu, consisting of multiple selectable items. The tutorial will also teach how user code can be created to change the behavior of a widget."),(0,i.kt)("p",null,"This time we will use a bigger screen, so start a new project for a board with a resolution of 800 x 480 pixels (e.g. STM32F469 Discovery) or the just use the simulator."),(0,i.kt)("p",null,"More information about the Custom Container and Scroll Wheel can be found on the two pages, ",(0,i.kt)("a",c({parentName:"p"},{href:"../../docs/development/ui-development/touchgfx-engine-features/custom-containers"}),"Custom Containers")," and ",(0,i.kt)("a",c({parentName:"p"},{href:"../../docs/development/ui-development/ui-components/containers/scroll-wheel"}),"Scroll Wheel"),"."),(0,i.kt)("p",null,"The graphics for the tutorial can be downloaded from this ",(0,i.kt)("a",{target:"_blank",href:n(16382).Z},"link"),". Unzip the file in the images folder under assets, which for the project used in this tutorial is MyApplication2\\assets\\images."),(0,i.kt)("h2",c({},{id:"step-1-creating-a-custom-container"}),"Step 1: Creating a Custom Container"),(0,i.kt)("p",null,"Similar to step 1 in tutorial 2, start by creating a new project with the TouchGFX Designer. This time when the new project is ready, change from the screens tab in the TouchGFX Designer to the Container tab (1)."),(0,i.kt)(o.Z,{points:[[46,3]],imageSource:"/img/academy/tutorials/tutorial-04/selecting-cc-4-17.webp",mdxType:"FigureWithPoints"},"Selecting the Custom Container menu"),(0,i.kt)("p",null,"The tab for creating a Custom Container is similar to the Screens tab and creating a new Custom Container is done in the same way as creating a new screen. After a Custom Container is created, widgets can be added to it, and the size and name of the Custom Container can be changed."),(0,i.kt)("p",null,'In the Custom Container tab, use the "+" button (1) to create a new Custom Container and rename it "MenuElement" (2), change the width to 390 and height to 70 (3).'),(0,i.kt)(o.Z,{points:[[46,3],[475,8],[464,30]],imageSource:"/img/academy/tutorials/tutorial-04/creating-cc-4-17.webp",mdxType:"FigureWithPoints"},"Creating a Custom Container and setting it properties"),(0,i.kt)("h3",c({},{id:"adding-widgets-to-the-custom-container"}),"Adding Widgets to the Custom Container"),(0,i.kt)("p",null,"With the Custom Container created and its properties set, widgets can be added to the Custom Container. The Custom Container in this tutorial is going to consist of an image and a text area with a wildcard:"),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},"To read more about how to use text with wildcards, read the wildcards section on the ",(0,i.kt)(a.Z,{to:"../../docs/development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards",mdxType:"Link"},"Texts and Fonts page"),"."),(0,i.kt)("p",null,"The two widgets are inserted in the following way:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",c({parentName:"tr"},{align:null}),"Widget"),(0,i.kt)("th",c({parentName:"tr"},{align:null}),"Properties"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),"Image"),(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Name: icon"),(0,i.kt)("li",null,"Image: icon00.png"),(0,i.kt)("li",null,"Location:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"X: 34"),(0,i.kt)("li",null,"Y: 17")))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",c({parentName:"tr"},{align:null}),"TextArea"),(0,i.kt)("td",c({parentName:"tr"},{align:null}),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Name: text"),(0,i.kt)("li",null,"Location:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"X: 93, Y: 23"))),(0,i.kt)("li",null,"Text:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Text: Menu Element ","<","value",">"),(0,i.kt)("li",null,"Wildcard 1:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Initial Value: 00"),(0,i.kt)("li",null,"Buffer size: 3"),(0,i.kt)("li",null,"Use wildcard buffer: Yes"))),(0,i.kt)("li",null,"Typography: 20px"),(0,i.kt)("li",null,"Alignment: Left"))),(0,i.kt)("li",null,"Appearance:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Color: #FFFFFFFF")))))))),(0,i.kt)(l.Z,{imageSource:"/img/academy/tutorials/tutorial-04/adding-content-cc.webp",mdxType:"Figure"},"Adding content to the Custom Container (TextArea selected)"),(0,i.kt)("h3",c({},{id:"adding-the-custom-container-to-a-screen"}),"Adding the Custom Container to a Screen"),(0,i.kt)("p",null,'Going back to the Screens tab, it is now possible to select the "MenuElement" in the widget menu under Custom Container (1).\nPlace a black box as background and add a couple of the created Custom Container on the canvas. Note that you can move the inserted Containers freely on the Screen.\nThe Custom Containers will appear as one element in the Widget list on the left (2).'),(0,i.kt)(o.Z,{points:[[290,0],[40,20]],imageSource:"/img/academy/tutorials/tutorial-04/inserting-cc-4-17.webp",mdxType:"FigureWithPoints"},"Inserting the Custom Container as a widgets on a screen"),(0,i.kt)("h2",c({},{id:"step-2-creating-a-scroll-wheel"}),"Step 2: Creating a Scroll Wheel"),(0,i.kt)("p",null,'In this step of tutorial 4, we will create a Scroll Wheel by using the Custom Container, "MenuElement", created in step 1. As described in step 1, the Scroll Wheel is used to create a scrollable menu containing multiple selectable items. The items in the wheel are dynamically updated when scrolling and when selecting an item, it is moved into focus.'),(0,i.kt)("p",null,'Adding items to the Scroll Wheel is done by selecting a Custom Container to use as the "Item Template". The concept of "Item Template" works by using the widgets in the Custom Container as the foundation for the items in the Scroll Wheel and use user code to update the widgets in the items at runtime.'),(0,i.kt)("h3",c({},{id:"creating-the-scroll-wheel"}),"Creating the Scroll Wheel"),(0,i.kt)("p",null,'Before creating the Scroll Wheel, remove the Custom Containers already inserted on the screen, leaving only the black box as the background. Select the Scroll Wheel located in the widgets menu under section Containers (1). Create a Scroll Wheel and set the location properties to X = 208, Y = 45 and H = 390 and change the name to "scrollWheel".'),(0,i.kt)(o.Z,{points:[[265,65]],imageSource:"/img/academy/tutorials/tutorial-04/insert-sw-4-17.webp",mdxType:"FigureWithPoints"},"Inserting the Scroll Wheel and setting the name and location properties"),(0,i.kt)("h3",c({},{id:"adding-items-to-the-scroll-wheel"}),"Adding Items to the Scroll Wheel"),(0,i.kt)("p",null,'Select "MenuElement" created in step 1 as the "Item Template", which is done with the drop-down list under the Scroll Wheel property "Item Template" (1). The number of items in the Scroll Wheel is also set under "Item Template". Set this to 20 items.\nSince the Scroll Wheel works by having a selected item in focus, setting where the selected item is positioned in the UI, is done by setting "Selected Item Offset" under the property "List Apperance" (2). We want the selected item to be in the middle of the Scroll Wheel and are therefore setting "Selected Item Offset" to (390-70)/2 = 160.'),(0,i.kt)(o.Z,{points:[[470,75],[470,125]],imageSource:"/img/academy/tutorials/tutorial-04/add-cc-to-sw-4-17.webp",mdxType:"FigureWithPoints"},"Adding the Custom Container to the Scroll Wheel and adjusting its properties"),(0,i.kt)("p",null,'To highlight the area of the "scrollWheel", the two pictures background.png, and overlay.png from the .zip file downloaded in step 1 are used and is added to the application as Image widgets. The two images is a background that highlights the area of "scrollWheel" and an overlay which hides the items in "scrollWheel" when the are moved to the edge of "scrollWheel".'),(0,i.kt)("p",null,'The image background.png are placed in X = 205 and Y = 45 and is placed behind "scrollWheel" so the items in "scrollWheel" is drawn op top of the background. The overlay.png is placed in X = 0 and Y = 0 on top of "scrollWheel" meaning that the items are drawn beneath overlay.png thereby hiding the items where overlay.png is not transparent.'),(0,i.kt)("p",null,"Widgets can be moved back and forward in the Widget list by pressing CTRL-B and CTRL-F."),(0,i.kt)(l.Z,{imageSource:"/img/academy/tutorials/tutorial-04/graphics-added-4-17.webp",mdxType:"Figure"},"Graphics added to the screen with the Scroll Wheel"),(0,i.kt)("p",null,'Since we only have adjusted the static properties for "scrollWheel", logic has not been added to it. Running the application will, therefore, result in a scrollable menu consisting of 20 items that all show the same. In the next step, we will add the logic to the "scrollWheel" with user code which updates the items in the wheel at runtime.'),(0,i.kt)("h2",c({},{id:"step-3-adding-user-code-to-scroll-wheel"}),"Step 3: Adding User Code to Scroll Wheel"),(0,i.kt)("p",null,'With the Scroll Wheel, "scrollWheel", created and configured in the TouchGFX Designer, this step will create the logic, via user code, that updates the items in "scrollWheel", so they display different graphics based on the position of the item in the wheel. This step will, therefore, work with integrating designer generated code with user code. A more detailed description of integrating designer code with user code can be found on the ',(0,i.kt)("a",c({parentName:"p"},{href:"../../docs/development/ui-development/software-architecture/code-structure"}),"Code Structure page"),"."),(0,i.kt)("h3",c({},{id:"change-image-and-text-in-menuelement"}),"Change Image and Text in MenuElement"),(0,i.kt)("p",null,'Since the items in the Scroll Wheel are based on the Custom Container "MenuElement", created in step 1, user code for changing the icon and updating the wildcard needs to be added to "MenuElement".\nWhen a Custom Container is created in the TouchGFX Designer it generates a .hpp and .cpp file with the same name as the Custom Container. The user code should be integrated in these files. The location of the files generated for "MenuElement" in the example application are:'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyApplication2\\gui\\include\\gui\\containers\\MenuElement.hpp")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyApplication2\\gui\\src\\containers\\MenuElement.cpp")),(0,i.kt)("p",null,'Enabling the items in "scrollWheel" to change their text and icon is done by adding the function ',(0,i.kt)("inlineCode",{parentName:"p"},"setNumber(int no)"),' to "MenuElement". The function uses the variable ',(0,i.kt)("inlineCode",{parentName:"p"},"no")," to decide which icon the Image widget should show and change the Wildcard in the Text Area widget to the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"no"),"."),(0,i.kt)("p",null,'As we are using the numbers 0 - 9 in the TextArea, we also need to add the range "0-9" to "Wildcard Ranges" for the Default typography.'),(0,i.kt)("p",null,"Press F4 to have the files generated by the TouchGFX Designer."),(0,i.kt)("p",null,"The declaration and implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"setNumber(int no)")," is done in the ",(0,i.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp")," which is shown below."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/include/gui/containers/MenuElement.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{5,15-42}","{5,15-42}":!0}),"#ifndef MENUELEMENT_HPP\n#define MENUELEMENT_HPP\n\n#include <gui_generated/containers/MenuElementBase.hpp>\n#include <images/BitmapDatabase.hpp>\n\nclass MenuElement : public MenuElementBase\n{\npublic:\n    MenuElement();\n    virtual ~MenuElement() {}\n\n    virtual void initialize();\n\n    void setNumber(int no)\n    {\n        Unicode::itoa(no, textBuffer, TEXT_SIZE, 10);\n        switch (no % 7)\n        {\n        case 0:\n        icon.setBitmap(Bitmap(BITMAP_ICON00_ID));\n            break;\n        case 1:\n        icon.setBitmap(Bitmap(BITMAP_ICON01_ID));\n            break;\n        case 2:\n        icon.setBitmap(Bitmap(BITMAP_ICON02_ID));\n            break;\n        case 3:\n        icon.setBitmap(Bitmap(BITMAP_ICON03_ID));\n            break;\n        case 4:\n        icon.setBitmap(Bitmap(BITMAP_ICON04_ID));\n            break;\n        case 5:\n        icon.setBitmap(Bitmap(BITMAP_ICON05_ID));\n            break;\n        case 6:\n        icon.setBitmap(Bitmap(BITMAP_ICON06_ID));\n            break;\n        }\n    }\nprotected:\n};\n\n#endif // MENUELEMENT_HPP\n\n")),(0,i.kt)("p",null,'The code is using the BITMAP definitions to reference the images in the project. To get these available it is necessary to include the file "images/BitmapDatabase.hpp" as done above.'),(0,i.kt)("p",null,"With the code added to update the content of the MenuElement, the next thing to do is to add code which updates the items in the Scroll Wheel."),(0,i.kt)("h3",c({},{id:"update-the-items-in-the-scroll-wheel"}),"Update the Items in the Scroll Wheel"),(0,i.kt)("p",null,"When creating a Scroll Wheel, the TouchGFX Designer generates a virtual function in the Screen base class which is called each time a new item in the Scroll Wheel becomes visible. Overriding this function in the user code enables the code to interact with the items in the Scroll Wheel."),(0,i.kt)("p",null,"The name of the function is the name of the Scroll Wheel appended with UpdatedItem. For this tutorial, the function is called ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)"),"."),(0,i.kt)("p",null,"The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"itemIndex")," is an index value informing which item is currently being updated and ",(0,i.kt)("inlineCode",{parentName:"p"},"item")," is a reference to an instance of MenuElement which is currently visible in the Scroll Wheel. With ",(0,i.kt)("inlineCode",{parentName:"p"},"itemIndex")," informing which item is being updated, ",(0,i.kt)("inlineCode",{parentName:"p"},"setNumber()")," is called for item which will change the content of the item being updated based on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"itemIndex"),". The code used for updating the Scroll Wheel items is shown below."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{14-17}","{14-17}":!0}),"#ifndef SCREEN1VIEW_HPP\n#define SCREEN1VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)\n    {\n        item.setNumber(itemIndex);\n    }\nprotected:\n};\n\n#endif // SCREEN1VIEW_HPP\n")),(0,i.kt)("p",null,"Running the simulator for the application now shows that the text for the items contains the value of their index and the icons change based on which item is showing. The images below shows an example of the simulator running with the code implemented."),(0,i.kt)(l.Z,{imageSource:"/img/academy/tutorials/tutorial-04/running-sim.webp",mdxType:"Figure"},"Running the simulator"),(0,i.kt)("h2",c({},{id:"step-4-adding-custom-behavior-to-scroll-wheel"}),"Step 4: Adding Custom Behavior to Scroll Wheel"),(0,i.kt)("p",null,"In the last step of tutorial 4, we will add custom behavior for the Scroll Wheel, by making it move in a circular pattern when scrolling through the items, thereby moving in a pattern similar to a dial."),(0,i.kt)("h3",c({},{id:"add-custom-behavior-to-menuelement"}),"Add Custom Behavior to MenuElement"),(0,i.kt)("p",null,"Getting the Scroll Wheel to move in a dial pattern, is done by shifting the horizontal position of the Image and Text widget for each item that is visible in the Scroll Wheel. To do this the function ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()"),' for "MenuElement" is overridden in ',(0,i.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()")," function is called for a Custom Container each time it is moved in the vertical direction and is used for redrawing the Custom Container in its new position. By overriding ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()"),", we are able to also move the Image and Text widget horizontally insize the Container each time the Scroll Wheel is scrolled. The image below describes how to implement the new ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()")," function and shift the the two widgets in ",(0,i.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),". Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"math.h")," needs to be included."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"MenuElement.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp",metastring:"{6,16-39}","{6,16-39}":!0}),"#ifndef MENUELEMENT_HPP\n#define MENUELEMENT_HPP\n\n#include <gui_generated/containers/MenuElementBase.hpp>\n#include <images/BitmapDatabase.hpp>\n#include <math.h>\n\nclass MenuElement : public MenuElementBase\n{\npublic:\n    MenuElement();\n    virtual ~MenuElement() {}\n\n    virtual void initialize();\n\n    //Adjusts the position of the text and the icon, based in the calculated offset(x)\n    void offset(int16_t x)\n    {\n        icon.setX(30 + x);\n        text.setX(80 + x);\n    }\n\n    //The new declaration and implementation of the setY() function\n    virtual void setY(int16_t y)\n    {\n        //set Y as normal\n        MenuElementBase::setY(y);\n\n        const int circleRadius = 250;\n\n        //center around middle of background\n        y = y + getHeight() / 2 - 390 /2;\n\n        //calculate x\n        float x_f = circleRadius - sqrtf((float)((circleRadius * circleRadius) - (y * y)));\n        int16_t x = (int16_t)(x_f + 0.5f);\n\n        offset(x);\n    }\n\n    ...\n")),(0,i.kt)("p",null,"With the new ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()")," function implemented, running the simulator shows that the Scroll Wheel is now moving in a dial pattern aligning with the curve from the overlay."),(0,i.kt)(l.Z,{imageSource:"/img/academy/tutorials/tutorial-04/running-sim-02.webp",mdxType:"Figure"},"Running the simulator"),(0,i.kt)("p",null,"This concludes tutorial 4."),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},"To learn more about the concepts that have been used throughout the tutorial the chapters below discuss some concepts that you have worked with:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"../../docs/development/ui-development/ui-components/containers/scroll-wheel"}),"The Scroll Wheel page")," describes how to create and configure the Scroll Wheel in TouchGFX Designer and how to create the logic in user code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"../../docs/development/ui-development/touchgfx-engine-features/custom-containers"}),"The Custom Containers page")," discusses the Custom Container concept and usage."))))}b.isMDXComponent=!0},28128:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496);class a extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}const l=a},89639:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496),a=n(7029);const l=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:l,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:l,src:o})),i.createElement("p",null,e.children))}},12963:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496),a=n(7029);const l=function(e){const t=e.width,n=e.height,l=e.points||[],o=(0,a.Z)(e.imageSource);return i.createElement("div",{style:{position:"relative"}},i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:t,height:n,src:o})),l.map((function(e,t){return i.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},i.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},i.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),i.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),i.createElement("p",null,e.children)))}},48753:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(59496),a=n(96151);const l=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}const r=o},96151:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}const l=a}}]);
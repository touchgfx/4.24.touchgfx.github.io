"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[99205],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,g=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22837:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/touchgfx-tutorial-02-fdc5f18c6ee29e0a96fa608460f4d03a.zip"},2220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>g,default:()=>y,frontMatter:()=>h,metadata:()=>m,toc:()=>k});n(59496);var i=n(49613),a=n(95375),o=n(89639),r=n(12963),l=n(21100),u=n(49018),s=n(48753),c=n(28128);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const h={id:"tutorial-02",title:"Tutorial 2: Creating Your Own Application"},g=void 0,m={unversionedId:"tutorials/tutorial-02",id:"tutorials/tutorial-02",title:"Tutorial 2: Creating Your Own Application",description:"Follow this tutorial to learn more about the basics of TouchGFX. You will learn how to add images to your application and use buttons. You will also see how to use texts and calculated numbers. In the last steps you will write code to enhance the look of the UI you have created with TouchGFX Designer. This tutorial assumes no knowledge of TouchGFX, but we assume a little experience with programming.",source:"@site/academy/tutorials/tutorial-02.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-02",permalink:"/4.24/zh-TW/academy/tutorials/tutorial-02",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-02",title:"Tutorial 2: Creating Your Own Application"},sidebar:"academy",previous:{title:"Tutorial 1: Trying Out the Examples",permalink:"/4.24/zh-TW/academy/tutorials/tutorial-01"},next:{title:"Tutorial 3: Applications with Multiple Screens",permalink:"/4.24/zh-TW/academy/tutorials/tutorial-03"}},w={},k=[{value:"Step 1: Setting a Background Image",id:"step-1-setting-a-background-image",level:2},{value:"Starting a New Project",id:"starting-a-new-project",level:3},{value:"Inserting a Background",id:"inserting-a-background",level:3},{value:"Step 2: Adding Buttons",id:"step-2-adding-buttons",level:2},{value:"Adding the Buttons",id:"adding-the-buttons",level:3},{value:"Changing the Look",id:"changing-the-look",level:3},{value:"Step 3: Adding Text",id:"step-3-adding-text",level:2},{value:"Text Background",id:"text-background",level:3},{value:"Adding the Text",id:"adding-the-text",level:3},{value:"Changing the Text Typography",id:"changing-the-text-typography",level:3},{value:"Using a Wildcard Text",id:"using-a-wildcard-text",level:3},{value:"Step 4: Adding Code",id:"step-4-adding-code",level:2},{value:"Implementing the Virtual Methods",id:"implementing-the-virtual-methods",level:3},{value:"Updating the Counter Value",id:"updating-the-counter-value",level:3}],f={toc:k},b="wrapper";function y(e){var{components:t}=e,h=d(e,["components"]);return(0,i.kt)(b,p({},f,h,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Follow this tutorial to learn more about the basics of TouchGFX. You will learn how to add images to your application and use buttons. You will also see how to use texts and calculated numbers. In the last steps you will write code to enhance the look of the UI you have created with TouchGFX Designer. This tutorial assumes no knowledge of TouchGFX, but we assume a little experience with programming."),(0,i.kt)("h2",p({},{id:"step-1-setting-a-background-image"}),"Step 1: Setting a Background Image"),(0,i.kt)("p",null,"In this first step you will see how to insert a PNG image as a background. But first we will create a new project."),(0,i.kt)("h3",p({},{id:"starting-a-new-project"}),"Starting a New Project"),(0,i.kt)("p",null,'Start a new project in TouchGFX Designer. We will call the project "MyApplication1". The project is based on the "STM32F746G Discovery Kit".'),(0,i.kt)("p",null,'If you have a different STM32 Evaluation Kit, go ahead and look in the list presented in TouchGFX Designer to see if it is supported. If you do not have a supported board you can select the "Simulator" and just run the application on your Windows computer.'),(0,i.kt)("p",null,"Please be aware that this tutorial runs on a display with a resolution of 480x272. If you select an Application Template with a different resolution, the graphics will not fit the screen, but you should be able to complete the tutorial anyway."),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/new-proj-4-17.webp",mdxType:"Figure"},"Creating the new project using the STM32F746"),(0,i.kt)("p",null,"Now that you have a newly created blank project let us start modifying it."),(0,i.kt)("p",null,"A TouchGFX application consists of a number of screens. The screens contain a number of widgets that make up the user interface. A Screen covers the whole display, so only one Screen is shown to the user at a time."),(0,i.kt)("p",null,'The first thing to do is to change the name of the initial Screen to\n"Main" as illustrated below. Select the Screen in the list on the left\n(1), and change the name in the name field on the right (2). It is\nalso possible to rename the Screen by double-clicking or\nright-clicking the Screen in the list (1).'),(0,i.kt)(r.Z,{points:[[30,11],[470,7]],imageSource:"/img/academy/tutorials/tutorial-02/change-name-4-17.webp",mdxType:"FigureWithPoints"},"Changing the name of the Screen"),(0,i.kt)("h3",p({},{id:"inserting-a-background"}),"Inserting a Background"),(0,i.kt)("p",null,"It is normally a good thing to cover the complete background of a Screen with one or more widgets. For example, this can be a Box or an Image. The background will show as black if you do not cover it. In this application we will use an Image."),(0,i.kt)("p",null,"Before we can use an image in TouchGFX Designer, we need to import the file. TouchGFX supports BMP and PNG images (though TouchGFX Designer only supports importing PNG images). PNG files are preferred over BMP files as they are smaller and supports transparent pixels."),(0,i.kt)("p",null,"The images we will use in this tutorial can be downloaded from this ",(0,i.kt)("a",{target:"_blank",href:n(22837).Z},"link"),". Unzip the file to a directory on your disk."),(0,i.kt)("p",null,'We want to use the file named "background.png" as our background. To import that file:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Select the Images tab and click the "+" button.'),(0,i.kt)("li",{parentName:"ul"},'Navigate to the unzipped folder and select the "background.png" file.'),(0,i.kt)("li",{parentName:"ul"},"Press open to import it.")),(0,i.kt)("p",null,'You can also "drag & drop" images from File Explorer onto the image tab, or even directly on the canvas, to import them to your project.'),(0,i.kt)("p",null,'Be aware that images imported to your project will be converted and\ncompiled into your project and thus take up flash space. So only\nimport the images that you need.  Click the "Images" button on the\nleft (1), then click the "+" button on the right (2), to add an\nimage. The TouchGFX Designer opens a normal file-browser where you can\nnavigate to the downloaded images and select the "background.png"\nfile.'),(0,i.kt)(r.Z,{points:[[-4,14],[471,1]],imageSource:"/img/academy/tutorials/tutorial-02/image-import.webp",mdxType:"FigureWithPoints"},"The image background.png is imported"),(0,i.kt)("p",null,"We are now ready to use the image in our application. To do that we need an Image widget."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the Canvas button on the left (1)"),(0,i.kt)("li",{parentName:"ul"},"Find the Image widget in the list of widgets (2)"),(0,i.kt)("li",{parentName:"ul"},"Click it to insert an Image Widget on the Screen.")),(0,i.kt)("p",null,'It is a good principle to change the name of widgets to something meaningful. In our case, something like "backgroundImage" (3).'),(0,i.kt)(r.Z,{points:[[-4,0],[250,18],[477,8]],imageSource:"/img/academy/tutorials/tutorial-02/insert-widget.webp",mdxType:"FigureWithPoints"},"Inserting an Image widget"),(0,i.kt)("p",null,"After inserting a widget we normally need to configure some of its properties like ",(0,i.kt)("em",{parentName:"p"},"Position")," or ",(0,i.kt)("em",{parentName:"p"},"Color"),'. The properties of the selected Widget are shown to the right in the TouchGFX Designer. The widgets in the Screen are shown in the tree-view on the left (1). In this case we are satisfied with the position in the point 0,0, but we want to change the Image property to select the "background.png" file previously imported. Click the Image property (2) and select the "background.png".'),(0,i.kt)(r.Z,{points:[[40,18],[474,72]],imageSource:"/img/academy/tutorials/tutorial-02/selecting-image-as-background-4-17.webp",mdxType:"FigureWithPoints"},"Selecting the imported image file as background"),(0,i.kt)("p",null,"We have now created a simple application with one Screen consisting of only a background image covering the whole user interface."),(0,i.kt)("p",null,'Before moving on try to press the "Run Simulator" button to check that the project compiles and runs. You can still not interact with the application since we have not yet added any active widgets.'),(0,i.kt)("h2",p({},{id:"step-2-adding-buttons"}),"Step 2: Adding Buttons"),(0,i.kt)("p",null,"In this step we will add two buttons to the application and use different PNG files to give them a customized look."),(0,i.kt)("h3",p({},{id:"adding-the-buttons"}),"Adding the Buttons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a button to the Screen by clicking the Button widget in the Widgets tab (1)."),(0,i.kt)("li",{parentName:"ul"},"Move the new widget by dragging it with the mouse."),(0,i.kt)("li",{parentName:"ul"},"Position the button at x=40, y=60. Check the position in the properties on the right (2)."),(0,i.kt)("li",{parentName:"ul"},'Name the new Widget "buttonUp".'),(0,i.kt)("li",{parentName:"ul"},'Add another Button at position x=40, y=150. Name this widget "buttonDown".')),(0,i.kt)("p",null,"The project now looks like this:"),(0,i.kt)(r.Z,{points:[[235,18],[465,25]],imageSource:"/img/academy/tutorials/tutorial-02/adding-buttons.webp",mdxType:"FigureWithPoints"},"Adding two buttons"),(0,i.kt)("p",null,"You can use the small up/down button on the X and Y properties to fine-tune the position of the widgets. You can also select the button widget (by clicking it on the canvas) and adjust the position using the arrow keys on your keyboard."),(0,i.kt)("h3",p({},{id:"changing-the-look"}),"Changing the Look"),(0,i.kt)("p",null,"We will now change the look of the buttons. A Button is made up of two images. One image is shown when the button is pressed, and another image is shown when the button is not pressed (released). Most widgets come with a set of predefined styles, which is basically a set of values for certain properties of the widget describing a particular look. These styles are good for fast prototyping, but most often you will replace them when creating a real application."),(0,i.kt)("p",null,'Go to the Images tab as in previous step and click the "plus" icon in the upper right corner to import some images. This time import the four images: "button_down_pressed.png", "button_down_released.png", "button_up_pressed.png", and "button_up_released.png".'),(0,i.kt)(r.Z,{imageSource:"/img/academy/tutorials/tutorial-02/image-import-2-4-17.webp",mdxType:"FigureWithPoints"},"Adding four Button images"),(0,i.kt)("p",null,"We see that we have in total seven images in our project, even though\nwe only imported 5 images. The extra two images are the blue images\nused on the buttons by default. These will be removed automatically\nwhen they are not used anymore."),(0,i.kt)("p",null,'Go back to the canvas and select the "buttonUp" button. Click "Released Image" property (1), then click "Project to show your images (2), then finally select the correct image (3).\nFor "buttonUp", select "button_up_released.png" for the Released Image property. Select "button_up_pressed.png" for Pressed Image.'),(0,i.kt)(r.Z,{points:[[470,80],[337,80],[367,150]],imageSource:"/img/academy/tutorials/tutorial-02/button-selecting-up-image.webp",mdxType:"FigureWithPoints"},"Setting the Button images"),(0,i.kt)("p",null,"You can immediately see the look of the button on the canvas in TouchGFX Designer."),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/bitmap-for-button.webp",mdxType:"Figure"},"Setting bitmaps for buttons"),(0,i.kt)("p",null,'For "buttonDown", select "button_down_released.png" for Released Image, "button_down_pressed.png" for Pressed Image.'),(0,i.kt)("p",null,'You have now finished setting up the buttons. Click "Run Simulator" to try your application.'),(0,i.kt)("p",null,"Try both buttons to verify that the buttons are configured correct."),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/running-the-simulator-4-17.webp",mdxType:"Figure"},"Running the Simulator"),(0,i.kt)(l.Z,{mdxType:"Tip"},"Most widgets in TouchGFX uses images to define their size, meaning that they cannot directly be resized. This is done for performance reasons (see ",(0,i.kt)(a.Z,{to:"../../docs/development/ui-development/ui-components/general-ui-component-performance",mdxType:"Link"},"General UI Component Performance"),"). If you want to change the size of such widgets, like for example the buttons in this tutorial, you will do this by creating a new set of images for the buttons and use them as Released and Pressed images instead."),(0,i.kt)("h2",p({},{id:"step-3-adding-text"}),"Step 3: Adding Text"),(0,i.kt)("p",null,"In this step we will add a large TextArea widget to the application."),(0,i.kt)("p",null,"All text is shown using a TextArea widget, but before we add a TextArea to the application, we will add another Image to give the text a better background."),(0,i.kt)("h3",p({},{id:"text-background"}),"Text Background"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Import another image file, "counter_box.png".'),(0,i.kt)("li",{parentName:"ul"},"Insert a new Image widget"),(0,i.kt)("li",{parentName:"ul"},'Name it "textBackground"'),(0,i.kt)("li",{parentName:"ul"},"Position it at x=250, y=59."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("em",{parentName:"li"},"Image"),' property to "counter_box".')),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/add-background-for-text-4-17.webp",mdxType:"Figure"},"Added background for text"),(0,i.kt)("h3",p({},{id:"adding-the-text"}),"Adding the Text"),(0,i.kt)("p",null,'We are now ready to add a TextArea widget. Click the TextArea icon in the Widgets / Miscellaneous drop-down menu. Rename the widget to "textCounter" and move the widget to position x=250, y=90.\nWe want the widget to show a large text, so un-check the ',(0,i.kt)("em",{parentName:"p"},"Auto-size")," property, and set the size to a fixed width=152, and height=90."),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/add-textarea.webp",mdxType:"Figure"},"Added a TextArea"),(0,i.kt)("p",null,"The default color of a TextArea widget is black, which is rather dark on our background. Select the ",(0,i.kt)("em",{parentName:"p"},"Color"),' property of "textCounter", and change the color to white.'),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/text-color.webp",mdxType:"Figure"},"Changing text color"),(0,i.kt)("h3",p({},{id:"changing-the-text-typography"}),"Changing the Text Typography"),(0,i.kt)("p",null,"We want the text to be bigger. The way to do that is to change the ",(0,i.kt)("em",{parentName:"p"},"Typography")," used for the text. A typography defines the ",(0,i.kt)("em",{parentName:"p"},"Font")," (e.g. Verdana), the ",(0,i.kt)("em",{parentName:"p"},"Size"),", and the ",(0,i.kt)("em",{parentName:"p"},"Alignment")," (left, right, or center) for a text."),(0,i.kt)("p",null,'Select the Texts tab in the top left of TouchGFX Designer (1), click Typographies (2), and update the size of the "Default" typography to 80 (3).'),(0,i.kt)(r.Z,{points:[[-4,28],[39,-2],[70,60]],imageSource:"/img/academy/tutorials/tutorial-02/typography-size.webp",mdxType:"FigureWithPoints"},"Changing text size"),(0,i.kt)("p",null,'Going back to the Screen (by clicking the "Canvas" tab in the top left), we see that the text is much bigger now. In fact we cannot read the complete text "New Text". Click the centered icon under the ',(0,i.kt)("em",{parentName:"p"},"Alignment")," property to get the text centered (1)."),(0,i.kt)(r.Z,{points:[[454,101]],imageSource:"/img/academy/tutorials/tutorial-02/text-alignment-4-17.webp",mdxType:"FigureWithPoints"},"Changing text alignment"),(0,i.kt)("h3",p({},{id:"using-a-wildcard-text"}),"Using a Wildcard Text"),(0,i.kt)("p",null,'We want the TextArea to show a number that we can change with the buttons. To do that, we must change the text to include a "wildcard". A wildcard is a marker ("',"<","d",">",'") in the text that can be substituted with something else like a number at runtime. We just want to show a number, so we will change the text to just "',"<","d",">",'". In other projects you can combine the dynamic parts with a fixed text, e.g. "Temperature: ',"<","temp",">",' \xb0C".'),(0,i.kt)(u.Z,{mdxType:"Note"},"The text inside the <...> wildcard brackets are optional. You can use them to communicate to implementers or translators what kind of information will be inserted in the wildcard or you can leave it empty."),(0,i.kt)("p",null,'Change the text to  "',"<","d",">",'" (1), click "Wildcard 1" (2), and set the default value to "0", and check "Use wildcard buffer".'),(0,i.kt)(r.Z,{points:[[449,76],[459,85]],imageSource:"/img/academy/tutorials/tutorial-02/wildcard-text.webp",mdxType:"FigureWithPoints"},"Configure the wildcard text"),(0,i.kt)("p",null,'Click "Run Simulator" to try your application.'),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/running-the-simulator-2.webp",mdxType:"Figure"},"Running the Simulator"),(0,i.kt)(s.Z,{mdxType:"FurtherReading"},"To learn more about using texts and fonts, read the ",(0,i.kt)(a.Z,{to:"../../development/ui-development/touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"Texts and Fonts")," page."),(0,i.kt)("h2",p({},{id:"step-4-adding-code"}),"Step 4: Adding Code"),(0,i.kt)("p",null,"With TouchGFX Designer it is easy to link actions to a Button through an Interaction. An Interaction links a Trigger (e.g. a button press) to an Action (e.g. running code or moving an element)."),(0,i.kt)("p",null,'Select the Interactions tab in the upper right corner (1) and click the "+" button to create a new Interaction'),(0,i.kt)(r.Z,{points:[[481,3]],imageSource:"/img/academy/tutorials/tutorial-02/add-interactions-4-17.webp",mdxType:"FigureWithPoints"},"Adding interactions"),(0,i.kt)("p",null,"We will create two interactions, one for each of the buttons. We will setup both interactions to call a C++ method on the current Screen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change the ",(0,i.kt)("em",{parentName:"li"},"Trigger"),' property to "Button is clicked".'),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("em",{parentName:"li"},"Choose clicked source"),' property to "buttonUp".'),(0,i.kt)("li",{parentName:"ul"},"Change the ",(0,i.kt)("em",{parentName:"li"},"Action"),' property to "Call new virtual function".'),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("em",{parentName:"li"},"Function Name"),', type "buttonUpClicked".'),(0,i.kt)("li",{parentName:"ul"},"You should also give the Interaction an informative name, so that you can recognize it later on.")),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/configure-interaction-4-17.webp",mdxType:"Figure"},"Configure the Button interaction"),(0,i.kt)("p",null,'Create a similar Interaction with "buttonDown" as "clicked source":'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click "+" to start a new Interaction.'),(0,i.kt)("li",{parentName:"ul"},"Change the ",(0,i.kt)("em",{parentName:"li"},"Trigger"),' property to "Button is clicked".'),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("em",{parentName:"li"},"Choose clicked source"),' property to "buttonDown".'),(0,i.kt)("li",{parentName:"ul"},"Change the ",(0,i.kt)("em",{parentName:"li"},"Action"),' property to "Call new virtual function".'),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("em",{parentName:"li"},"Function Name"),', type "buttonDownClicked".'),(0,i.kt)("li",{parentName:"ul"},"You should also give the Interaction an informative name, so that you can recognize it later on.")),(0,i.kt)("p",null,'If you either click the "Generate Code" button or "Run Simulator" button, TouchGFX Designer will update the generated code with the information you entered in the interactions just created. This means that it will create two new virtual functions in the view base class for this screen.'),(0,i.kt)("p",null,'Let us investigate this more and see how we can have our own code executed. Click "Generate Code" in lower right, then click the "Files" button in the lower left. This will give you a File Explorer placed in your application folder. Navigate to the folder:'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyApplication1/TouchGFX/generated/gui_generated/include/gui_generated/main_screen/")),(0,i.kt)("p",null,"and open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"MainViewBase.hpp"),". If you like you can also open one of the project files and find the file in your IDE:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",p({parentName:"tr"},{align:null}),"IDE"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Path to project file"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"STM32CubeIDE"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"MyApplication1/STM32CubeIDE/.project"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Visual Studio"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"MyApplication1/TouchGFX/simulator/msvs/Application.sln"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"IAR Embedded Workbench 8"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"MyApplication1/EWARM/Project.eww"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"KEIL ","\u03bc","Vision v5"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"MyApplication1/MDK-ARM/STM32F746G_DISCO.uvprojx"))))),(0,i.kt)(u.Z,{mdxType:"Note"},"Not all project files are present as default. To change toolchain for the project, you need to use the STM32CubeMX tool. Read more on this on the ",(0,i.kt)(a.Z,{to:"../../development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",mdxType:"Link"},"Using IDEs with TouchGFX")," page."),(0,i.kt)("p",null,"The new virtual methods are found in the public part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainViewBase")," class. The generated methods have empty implementations. The intention is that the programmer implements these methods in the subclass ",(0,i.kt)("inlineCode",{parentName:"p"},"MainView"),"."),(0,i.kt)(c.Z,{mdxType:"CodeHeader"},"MainViewBase.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{24-27,29-32}","{24-27,29-32}":!0}),"/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#ifndef MAINVIEWBASE_HPP\n#define MAINVIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/main_screen/MainPresenter.hpp>\n#include <touchgfx/widgets/Image.hpp>\n#include <touchgfx/widgets/Button.hpp>\n#include <touchgfx/widgets/TextAreaWithWildcard.hpp>\n\nclass MainViewBase : public touchgfx::View<MainPresenter>\n{\npublic:\n  MainViewBase();\n  virtual ~MainViewBase() {}\n  virtual void setupScreen();\n\n   /*\n    * Custom Action Handlers\n    */\n  virtual void buttonUpClicked()\n  {\n    // Override and implement this function in MainView\n  }\n\n  virtual void buttonDownClicked()\n  {\n    // Override and implement this function in MainView\n  }\n...\n\n")),(0,i.kt)("h3",p({},{id:"implementing-the-virtual-methods"}),"Implementing the Virtual Methods"),(0,i.kt)("p",null,"The remaining task is now to implement these two methods to change the counter value when the user presses the buttons. To do that, declare the methods again in the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainView")," class. This class can be found in:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyApplication1/TouchGFX/gui/include/gui/main_screen/MainView.hpp")),(0,i.kt)("p",null,"Open this file and insert the two function declarations in the class:"),(0,i.kt)(c.Z,{mdxType:"CodeHeader"},"MainView.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{14,15}","{14,15}":!0}),"#ifndef MAIN_VIEW_HPP\n#define MAIN_VIEW_HPP\n\n#include <gui_generated/main_screen/MainViewBase.hpp>\n#include <gui/main_screen/MainPresenter.hpp>\n\nclass MainView : public MainViewBase\n{\npublic:\n  MainView();\n  virtual ~MainView() {}\n  virtual void setupScreen();\n  virtual void tearDownScreen();\n  virtual void buttonUpClicked();\n  virtual void buttonDownClicked();\n}\n")),(0,i.kt)("p",null,"The next task is to implement the two methods by adding the implementation in the .cpp file. This file is located in:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyApplication1/gui/src/main_screen/MainView.cpp")),(0,i.kt)("p",null,"In the implementation below we have added calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"touchgfx_printf"),". This function is useful to print out lines of text when running the simulator. To use this function you need to include utils.hpp. When running on target, the lines have no effect."),(0,i.kt)(c.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,19-22,24-27}","{2-2,19-22,24-27}":!0}),'#include <gui/main_screen/MainView.hpp>\n#include <touchgfx/utils.hpp>\n\nMainView::MainView()\n{\n\n}\n\nvoid MainView::setupScreen()\n{\n  MainViewBase::setupScreen();\n}\n\nvoid MainView::tearDownScreen()\n{\n  MainViewBase::tearDownScreen();\n}\n\nvoid MainView::buttonUpClicked()\n{\n  touchgfx_printf("buttonUpClicked\\n");\n}\n\nvoid MainView::buttonDownClicked()\n{\n  touchgfx_printf("buttonDownClicked\\n");\n}\n\n')),(0,i.kt)("p",null,'Click "Run Simulator" in TouchGFX Designer again to run the new code. Click the buttons a couple of times to see that the interactions and methods are working as expected:'),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/running-the-simulator-3-4-17.webp",mdxType:"Figure"},"Running the Simulator with printout"),(0,i.kt)("h3",p({},{id:"updating-the-counter-value"}),"Updating the Counter Value"),(0,i.kt)("p",null,"The last task is to write C++ code in the new methods to update the counter value when the user presses the button. To do that we first add a new integer variable, ",(0,i.kt)("inlineCode",{parentName:"p"},"counter"),", in the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainView")," class:"),(0,i.kt)(c.Z,{mdxType:"CodeHeader"},"MainView.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{17}","{17}":!0}),"#ifndef MAIN_VIEW_HPP\n#define MAIN_VIEW_HPP\n\n#include <gui_generated/main_screen/MainViewBase.hpp>\n#include <gui/main_screen/MainPresenter.hpp>\n\nclass MainView : public MainViewBase\n{\npublic:\n  MainView();\n  virtual ~MainView() {}\n  virtual void setupScreen();\n  virtual void tearDownScreen();\n  virtual void buttonUpClicked();\n  virtual void buttonDownClicked();\nprotected:\n  int counter;\n}\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonUpClicked")," method we increment the counter value. The new value is then converted to a string and copied to the wildcard buffer we configured for the TextArea in a previous step:"),(0,i.kt)(c.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{22-25,32-35}","{22-25,32-35}":!0}),'#include <gui/main_screen/MainView.hpp>\n\nMainView::MainView()\n{\n\n}\n\nvoid MainView::setupScreen()\n{\n  MainViewBase::setupScreen();\n}\n\nvoid MainView::tearDownScreen()\n{\n  MainViewBase::tearDownScreen();\n}\n\nvoid MainView::buttonUpClicked()\n{\n  touchgfx_printf("buttonUpClicked\\n");\n\n  counter++;\n  Unicode::snprintf(textCounterBuffer, TEXTCOUNTER_SIZE, "%d", counter);\n  // Invalidate text area, which will result in it being redrawn in next tick.\n  textCounter.invalidate();\n}\n\nvoid MainView::buttonDownClicked()\n{\n  touchgfx_printf("buttonDownClicked\\n");\n\n  counter--;\n  Unicode::snprintf(textCounterBuffer, TEXTCOUNTER_SIZE, "%d", counter);\n  // Invalidate text area, which will result in it being redrawn in next tick.\n  textCounter.invalidate();\n}\n\n')),(0,i.kt)("p",null,"The TextArea Widgets uses Unicode, so we have to use a special snprintf function that supports writing to Unicode buffers."),(0,i.kt)("p",null,"Note that we call ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidate()")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"textCounter")," widget after updating it. This ensures that the TextArea is redrawn after the counter value has been updated."),(0,i.kt)("p",null,'We need one more thing before the application is finished. TouchGFX only includes the characters needed, so we need to tell TouchGFX Designer to include the characters 0-9 in the "Default" typography. To do that, go back to TouchGFX Designer and click the "Texts" tab, then the "Typographies" tab. In the "Wildcard Ranges" column for the Default typography, add the range "0-9" (1).'),(0,i.kt)(r.Z,{points:[[190,40]],imageSource:"/img/academy/tutorials/tutorial-02/set-wildcard-range-4-17.webp",mdxType:"FigureWithPoints"},"Setting the Wildcard Range for the Default typography"),(0,i.kt)("p",null,'Now click "Run Simulator" again and click the up button a few times:'),(0,i.kt)(o.Z,{imageSource:"/img/academy/tutorials/tutorial-02/running-the-simulator-4-4-17.webp",mdxType:"Figure"},"Running the Simulator"),(0,i.kt)("p",null,"As the program is now, it will not handle negative numbers correctly. This can be fixed, either by inserting a guard in the ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonDownClicked()"),' function to ensure the counter does not go below 0 or by adding the character "-" to the used typography. This can be accomplished simply by adding a minus ("-") in the Wildcard Characters cell for the Default typography.'),(0,i.kt)("p",null,"This step concludes tutorial 2."),(0,i.kt)(s.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,"Read more about texts on the ",(0,i.kt)(a.Z,{to:"../../docs/development/ui-development/touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"Texts and Fonts")," page.")))}y.isMDXComponent=!0},28128:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(59496);class a extends i.Component{render(){return i.createElement("div",{className:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}const o=a},89639:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(59496),a=n(7029);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,r=(0,a.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:n,height:o,src:r})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:n,height:o,src:r})),i.createElement("p",null,e.children))}},12963:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(59496),a=n(7029);const o=function(e){const t=e.width,n=e.height,o=e.points||[],r=(0,a.Z)(e.imageSource);return i.createElement("div",{style:{position:"relative"}},i.createElement("div",{className:"figure"},i.createElement("a",{href:r,target:"_blank"},i.createElement("img",{width:t,height:n,src:r})),o.map((function(e,t){return i.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},i.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},i.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),i.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),i.createElement("p",null,e.children)))}},48753:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496),a=n(96151);const o=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}const l=r},96151:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(59496);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}const o=a},49018:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496),a=n(96151);const o=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class r extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}const l=r},21100:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496),a=n(96151);const o=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class r extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}const l=r}}]);
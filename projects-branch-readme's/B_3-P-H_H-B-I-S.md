## Projects third branch 
### pages-home-header-banner-info-sections

My first port of call was to generate a new page by creating a new file in the page's folder,

For the banner component I started by creating banner.js file , for the banner component I used a RFC, a functional based component, I then applied the relevant imports,

I then passed throught the feature which utilses the title, subtitle & children, the children feature will be used for the button,


### The banner component styling
The styling for this comopnent are being pulled in from the utils folder,

I then applied stying to the banner function,

The reason this stying is working is because if you study the styles.css in the utils folder & examine the letter spacing function which is being parsed into banner.js, the function contains object's which are controlling the styles of the banner, this is also true of the text slanted elemnets which are using varibles,

These feature's are being carried thruogh to the rest of the page's,

The banner button is a react based component.

### The Quick Info Section
This is a profound section of the project as it will be these components that will be reusable, for this feature I created a new component, this component reside's in the components folder,

I used a class based component which I created from the VS-Code exstention through the shorthand rcc -> TAB, which assigns the QuickInfo variable,

I then imported once again into index.js, I then declared the section,

The utils/Section.js is suppliying the style's which I am importing, this is reusable with the use of index,js in the utils folder,

### The Section Title Component

I carried out the relevant imports & placed the wrapper, button & the components based styles,
I can reuse this component while keeping the padding & margin,
This code flow also applie's to the title & button,

The title is a RFC, a react functional component, it is also utlising the index.js inside of the utils folder,

The Media Querys for this section were hard coded into QuickInfo.js,

I tested this feature in the chorme browser & it was succesfull in rendering,








## Tasks carried out in this branch

### The Footer Section

The footer will be visible across all page's, to achieve this I will create the footer component I the Global folder,

The component will be a classed based component, the reason for choosing a classed based over a functional is because I will need to use React State for the socail media Icon's,

I once again used rfc -> Tab

I imported into layout.js for sitewide visibitly, then I declared the import in the const layout function,

The final task was to code up the footer.js with firstly importing the styles, Icons &React,

### Gatsby Plugin

In this section Gatsby's image plugin was utlised, it was installed with the command
npm install --save gatsby image, our of it is already in package.json there is no need, the configerastion for this fearure needs to be in config.js

### GraphQL
With the specificity of the data Querying power of GraphQL, the first query I will use will be page query & thwe second will be static querys,

The page query is the more dynamic of the two, meaning it can accept varaibles,

The gatsby Image.js will be directly accessed for the querying of data,

To achieve this I created a component inside the HomePageComponent, htis component was Gallery.js,

I used the rfc shorthand again to create a functional React component,

I then went to index.js in the pages folder & declared the Gallery & placed the relevant imports in place,

I then tested the gallery feature in the browser & was successfull,

The biggest difference with this Gallery component & all the rest of my Components is the importation of graphQL staic query for specific querying of the Component,


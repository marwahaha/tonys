## Projects second branch "B_2-netifly-deploy"

I am choosing to deploy the projet to netfily's service for the reason of continoues intergration & development, this means that each new branch that I will version control to Git-Hub will be automatically deployed to Netifly, in turn if & when there is bugs in my project I will be able to debug branch by branch.

## Confrimed account on Netifly & attached hooks

Dont merge with the command line, push the branch to git hub & then merge on the git hub's clou consiole to see the relevent branche'snetifly

Connected netifly to github tonys & deployed project , look to log's for error's & debugging

Success, project is deployed to netifly's server's on the second branch, thus in turn enabling continueous intergration & development

## CSS in Gatsby
Using styled components to incorprate the idea of being able to write all my css in my layout.css, this is in crontradiction to creating a seprate css file for each component, we will implement the latter option if our project grow's beyond managabuilty.

## Var's
Created css variables

## Bootstrap
Retrieved css bootstrap.min
Tested Bootstrap in the browser & was successfull

## using SASS in our project
npm install --save node-sass gatsby-plugin-sass
went to gatsby config & paced plugin code of gatsby-plugin-sass

## styled components
My reason for using styled components instaed of the 3 other option are whenever I am creating components I can reuse the css component
used the npm command of
npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components
Then went to config.js & placed plugin code of
{
  resolve: `gatsby-plugin-styled-components`
  options: {
    // Add options here
  },
}

Then went to layout.js & implemneted the styled component option,

Tested button component in the browser & was successfull

Tested independent varible & was successfull

## Global styles
To implement global styles into the project I first imported the Global style in layout.js

With the syntax of import {createGlobalStyle} from 'styled-components'

I then implemented the correct syntax in layout.js & index.js

I then tested the global styles in the browser & thest was succesfull

## React Icons

To implement React Icons I used npm install to retreive the package & place them into my project with the command
npm install react-icons --save
I then needed to go to index.js to import the Icons
The beauty of these Icons is that they are svg
Icons tested in the browser & successful

## Navbar Component

I will create a Global folder inside of the components folder, in turn giving site wide access to the Navbar,
I will create another folder inside of the global folder in which the Nvagbr will reside, I will then create the navbar.js file which will produce the navbar syntax code,

I will also create a package.json file inside of the navbar folder for the reason of not importing directly from the nav bar, the package.json will declare the mian file as the navabar file, this will detyermine the import as a index.js, the oppiste to the default,

I will then move to the layout.js & import the navbar file

Created the navbar declaration

## Navbar Header
Created NavbarHeader.js file for content

## NavbarLinks
Created NavbarLinks.js for the navugation menu

## Imported new components into navbar.js

Placed the three navbar components for rendering 

Renderd to the browser for testing, testing in the browser was succesfull

Now I can work on each component

## The toggle button & styling

I will need to incorprate the new features in the navbar component

Firstly I need to setup the state & the navbar component Methods

Apply media query for responsiveness with flexbox

Tested in the browser with success 

## Header component

 Insert logo into project

 Logo placed successsfully

 Incorprate Link

 ## Styled Components with css var's setup

Setup mainYellow css var from utils

Menu toggle tested in the browser

Success for the toggle button on the media query

## Navbar Links

Imported the relevent imports into Navbarlink

Once again I will create the state

Created state array for the menu links & passed the method in to the value's

After logic for the menu links are set it is time to style the menu

## Navbar Link css

I will now style our menu with the use of the js utils folder

Menu tested in the browser & it is succesfull

## Navbar Link media Query's & Transtions

Needed to apply media query's for the toggle menu

Src of code in generated from the styles.js file which is loaded with the preconfigerd transObject

Added auto value to css

# Navbar Link Icons & Transtions

Src of code in generated from the styles.js file which is loaded with the preconfigerd transFunction

Imported styled components once again

Imported Icons from gatsby

Created state array & within the array will be the Object & the object will be repersenting whatever Icon is chosen

Added css for icon color tranasition by targeting className in Navbaricon.js

Rendered the Icon with IconWrapper component & applied the styled component & tested in the browser which was successfull













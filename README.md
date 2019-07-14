# Tony's Bistro

To the Full-Stack Software Development Team,
We have recieved a request to confirm a contract from a business man & a friend,
Mr Romano has requested a complete revamp of his existing static website, Mr Romano has been operating his trade & his business for over 15 years, his business status has maintained its precense in the bustling town in which it resides, this town is now the biggest in the county of Cork, to maintain his presence in the forth coming future for himself & his family, he has wisley chosen to establish himslef with an online presence, Mr Roamano is an asute business man, so he has a very good idea of what features he excpects in his website.

This is great news ofr our company & even better opertunity to increase our online business presence & portfolio, this will no doubht generate future business.

I purpose we first utlise our most recent bootcamop venture into Gatsby.js & all of its amazing features, we can also show off our front-end - development skills, this however might not be the final project, as Mr Romano is an old freind I will be offering him the best of development from our company Rock Steady Software, so the seconadry option will be to build another full stack resturant site using the teams yeras of expirence in the High Level Frame Work Django.

Why do this the team will most definitly ask ?
We will do this because of the the present change & upgardes to headless CMS's, this new & amazing technology needs to be tested & comopared to our currents tech stacks, but first we will build with gatsby.

Our customer Mr Romano has already stated a few aspects of the technonlogy in which we are using, such as,
The speed of the website,
He will need off-line access for his punters,
SEO is a must for Goolge,
Image optimisation will be a key selling point for his amazing meals,
Mr Romano has requested a user friendly blog that he can receive training for himslef & his staff for up to date blog posts,
A menu filter system that can be accessed by the customers,
A reservation system,
Mr Romano is also very interested to see the difference in his new mobile website comapred to his prevoius one since it has 0 responsivenes,
A user subscribtion service for new & exsiting customers,
Migration of current domain name,

## Version Control Workflow

git branch = will list all of the branch's
git branch name-of-new-branch - will create a new branch
git checkout  name-of-new-branch = give's us the ability to use the new branch
git add -A= Add's everthing to the staging area
git commit -m "message" = this bring's the version beyond the staging area

### TO merge branch's
The branch that you are working on must be a clean branch
Checkout to master branch then with the master branch being active
run 
git merge name-of-branch-to-be-merged = merge's branchs
git push origin master = To pull the master branch

OR->

After to push an individul branch up to git hub we use
git push origin name-of-branch-to-be-merged 
then we must return to github & make the manual merge to keep the brnach's on the github cloud console

## UX

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

### Existing Features

#### The Home-Page
- Main menu naviagation for the entire site
- Main logo for navigation & Aesthtics
- Call to action on front main banner
- Mian Menu to navigate to the menu page
- Gallery section to induce the customers into looking into the menu
- A taster of the menu to futher induce the customer into looking into the menu 
- Footer with socail media links
#### The About-Page
- Information about the website & a Gallery of dish's
- 
#### The Menu-Page
- Information about the websites restaurant menu
- 
#### The Contact-Page
- Information about the websites contactable number's
-
#### The Blog-Page
-
-
#### The E-commerce-Shop
-
-
#### The E-commerce-Cart
-
-
#### The Back-End _VS_ The Front-End
-
-
### Reasons for using gatsby

The project uses **Gatsby** for the intial static site bioler plate setup, it's own CMS, webpack,react.js & modern JavaScript,

The advantages of using Gatsby are plentyfull, such as the use of NPM, the generation of the application with the Gatsby CLI, Gatsby also uses a package.json file in conjuntin with Node.js,

Gatsby also ships with its own internal server & build production commands for deployment,

A highly simplified folder structure

Hot reloading

The use of the short hand RCC, RFC & TAB which genearates function based & class based components

Styled components & Component based styling

Highly fast pages's ceation & no routing of static pages

The use of importing & exporting of projects gatsby libaries

Inline CSS, Global CSS, & Component CSS



### Contentfull

For the data infrastructure of this project I will need a frontend data Content platform provider Contentfull, this give's our dev team & in the future our customer the abailty to create data & use it on the forntend on any platform,

Contentfull is a headless CMS , this provides data over a CDN , at the same time we can use this amazing GUI for CRUD operation if & when choose too,

### Data & Contentfull

#### This actions were carried out on the master branch

Afetr the creation of the account on contentfull & deleting the example's I proceeded to make a new space & chose the free option , this supplied me with the space for 5000 records,

I used Contentfulls GUI to assist on the craetion of my records,

The content model & the content were accessed in the Contentfull's GUI,

The content model will contian the data,

The Content Model & the Content become the Content Model,

#### The Content Model

First I needed to create the name fields,
Next I created the number fields of an interger with the tag of Price
I then crearted a text field for the description of the main menu Item with the tag of ingradeints,

The next field to be created was the image field

I used the the pizza image from the github project for uploading, with the tag of Image,

This process creates a json format of the data which I will pull in from our project,

The next was to work on the content,

I created the pancake content in the GUI with the relevant info & this uploaded the relevant image's,

The next task was to install a gatsby image plugin for the reason of using Contentfulls API's service,

I selected this in the settings tab in Contentfull's GUI , I then created a menu name & copy & pasted the API key,

The API's Access Token & the Space ID  will be the main feature's of the implementaion of the retrievel of Data,

#### Getting the data

After I installed the plugin with the code in the command line bash terminal with 
npm install -- save gatsby-source-contentful

Next I used the formatted example Code from www.gatsby.org for the pligin configeration,

In order to retrieve the data I then went to gatsby-config.js & placed the gatsby code for the contentful service,this is where the SpaceID & the access token came into play,







## Tech Stack Web Stack used in this data Driven Developement

- [Gatsby.js](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [GraphQL](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [Contentfull](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [Netifly](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [GitHub](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [Node&NPM](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [React.js](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [HTML-5-&-CSS-3](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

The steps I took for deployment were as follows,

Step:1
First was to to check if my project was executing from its master branch, the reason for this is because all branch's will eventually become the master branch,

After confirming the creation of a netlify account & a live repo for the version control of my project on github it was time to carry out the commands
git init == to reintilaise my project
git add -A == to add all the contents of project to the staging area
git commit -m "message" == to commit all the content to the staging area
git push origin master == to push the entire project to github

Step:2
Netlify
To syncroinyse Netlify with my git repo, I searched for the repo & granted access for the PKI infrastructre to initiliase,

After choosing the correct repo I seleted the option of Deploy Project

Next I changed the temp domain name & tested my project on the live internet server

This was the beginning of my continous develpoment & intergration workflow

Step:3
Hook's
In order to simplify the uplaoding of feature's that we will be be creating I configured hook's on Netlify's GUI,

This give's us the ability to make chang'es to out database on contntfuill & have th change's occur in more or less real time,

### env-var's
In order to crate my env.var's, the value's needed to be in string format,

This task conssits of two specifics, the first being the local configeration of the token & the space ID & the second atsk was to retrieve the env.var's formatted code from www.gatsby.js & plaed them in my Config.js file

The natx task was to create a .env file in the overall project after that was the task of inclduing the .env file in the project's .gitignore file, this action configuerd the project to access the feature of !not pushing the api Key's to github server's

I next enterd the API value's inot the .env file but not in a string, with pre made chosen varibale name's which will be accessed alter in the config.js file


Next was to set up our var's on Netifly for security reasons's,I acheived this by entering the value's in the build & deploy option on Netifly's GUI,

I next double checked everything for secuirty,

I then once agian went through the step's of deployment & monitored the deploment on Netifly


## Credits

### Content
- The text for section Y was 

### Media
- The photos used in this site were obtained from Pixels

### Acknowledgements

- Gatsby Doc's
- Flipcart Doc's
- Contentfull Doc's
- Formspree Doc's
- Netifly Doc's
- GraphQL Doc's
- Freecode Camp
- Meduim
- Traversity Media
- Stack Overflow
- React Doc's


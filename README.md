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

When on Master Branch,
Create a new branch,
How to Switch branche's'
How to Merge Branche's,

1 How to to create a new branch,

Run = git branch == to list all branche's,
Run = git status == to check that I am on a working clean branch,
Run = git reset == to unstage a file in the staging area [example = git reset app/index.html]

2 How to to switch between branch's,

Run = git branch == Run = git checkout == local-environ-project-spec-setup to s-asenviron-project-spec-setup = to create a new branch,
Run = git checkout == switch between local branche's
Run = git checkout master wh-teenviron-project-spec-setup = to switch to the feature branch,
Run = git checkout "name of branch without qoute's" to switch between branch's,

3 how to merge a new branch

Run = git checkout == branch to MERGE BRANCHE'S
-environ-project-spec-setup = to switch between local branche's
Run = git checkout master r = when on master branch to MERGE BRANCHE'S
Run = git merge {NAME OF BRANCH} at this stage the master branch is still checked out,

4 how to push all branch's

Run = git push origin master == to merge the change on github

## UX

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

### Existing Features

#### The Home-Page
- Main menu naviagation for the entire site
- Mian logo for navigation & Aesthtics
- Call to action on front main banner
- Mian Menu to navigate to the menu page
- Footer with a aafcebook socail link
#### The About-Page
- Information about the website & a Gallery of dish's
- 
#### The SEO-Page
-
-
#### The Contact-Page
-
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

The project uses **Gatsby** for the intial static site bioler plate setup, it's own CMS, webpack,     react.js & modern JavaScript,

The advantages of using Gatsby are plentyfull, such as the use of NPM, the generation of the application with the Gatsby CLI, Gatsby also uses a package.json file in conjuntin with Node.js,

Gatsby also ships with its own internal server & build production commands for deployment,

A highly simplified folder structure

Hot reloading

The use of the short hand RCC, RFC & TAB which genearates function based & class based components

Styled components & Component based styling

Highly fast pages's ceation & no routing of static pages

The use of importing & exporting of projects gatsby libaries

Inline CSS, Global CSS, & Component CS

### Reasons for using graphQL & graphQLY Data Aspects





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

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was 

### Media
- The photos used in this site were obtained from ...

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


# Danone Hackathon 2023

## Project background 
There may always be a need of having an interface to interact with the cyber-world. This project is a demo
of how some features would be displayed for a web-app promoving health and ecological products.

Being a rapidly changing world, where people have to think about their meals, their physical health, and
the caring of the environment, the app is but a piece of what could be a great utility for the contemporary person.

## Stack used
The app is using AngularJS version 15.0.1, enhanced with TypeScript. As well, the CSS Library of Bootstrap was used. The app is calling a GraphQL with Contentful to obtain the data necessary for the app. 

## Usage
To use the app, you may need to get all the installations before running the app (See below).

## Installation

**With Angular CLI**
1. If you do not have the Angular CLI installed, you have to run the command

        npm install -g @angular/cli

2. After installing the global Angular CLI. Clone this project.

3. After cloning the project in your computer, keep in mind to install the node modules with the command

        npm install

    when being with an open terminal at the directory where you cloned this project.

4. After all node_modules are installed, you can run the command

        npm start

    with an open terminal at the directory where you cloned this project.

5. You can check the app running at [http://localhost:4200](http://localhost:4200/).

**With Docker**
1. If you have Docker installed ([or want to install it](https://docs.docker.com/engine/install/) ), create a directory and clone this repository.

2. Open a terminal where the directory containing the root of this repository is located (the src directory of the app has to be seen), and run the command
        
        docker compose up

3. Have sip of coffee, talk to the people around you! Docker will be building the app dist and mount it in an NGINX so that you can access to it. But first, wait...

4. After the application was built, you can access to it at [localhost](http://localhost)

**Checking the app deployed**

1. The app is already deployed at [Vercel App by jatg-eca](https://danone-hackathon-2023-two.vercel.app/#/) .

***NOTE: Keep in mind that you may need internet connection to check some of the images on the app, as they are downloaded via GraphQL API calls online***

## Decision making during the hackathon

### Responsive or not?
In order to complete the different tasks and objectives for this hackathon, I made the decision to be focusing
on just the PC version of the app, as the Figma had already most of the features that would be used there.

### Techonology to be used
During the hackathon, more than once, I had to make a new decision. At the beginning, I was thinking about
implementing with VueJS, but chose Angular instead as it was clearly written in the Hackathon Readme. Then,
I was trying to prioritize which features and elements were more important than others, so that I can look the way
of making them appear in the layout as the Figma, or with a different variation. By the end of the project, I was trying to use a Live Database in Firebase, but given that solving some unexpected CORS problems were taking so long, I make my choice of giving a chance to Contentful.

### As simple as it can be
Most of the time I tried to keep logic separated and to break into different components when possible, to avoid boilerplate code.

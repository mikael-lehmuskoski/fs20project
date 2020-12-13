##### author: Mikael Lehmuskoski <br />
#### hosted here: https://pure-eyrie-29712.herokuapp.com/


# Bulletin ⁠— a Full Stack Open 2020 project<br />

### Links:
&emsp;&emsp;Hours used on this project: [./docs/hours.md](./docs/hours.md)<br />
&emsp;&emsp;Backend JSdoc: [./docs/jsdoc/backend/index.html](./docs/jsdoc/backend/index.html)<br /> 
&emsp;&emsp;Frontend JSdoc: [./docs/jsdoc/frontend/index.html](./docs/jsdoc/frontend/index.html)<br />
&emsp;&emsp;User manual: [./docs/manual.md](./docs/manual.md)<br />

## Description

  This project is my entry for the Full Stack Open 2020 -course hosted by the University of Helsinki. The project is called 'Bulletin'. Bulletin is a dynamic and user-configurable cloud-based browser Start Page. The service allows users to access their personal configured Bulletin and stored notes from multiple devices. Bulletin consists of a NodeJS backend and a user interface crafted with React.

### Features:
  * Clock
    * Real-time analog clock that gets its time from the user's system
  * Built-in Notes applet
    * synchronizes with the backend for keeping notes on the go
  * RSS reader
    * fetches news from various sources 
  * Settings for configuring the interface
    * themes
    * syncs with backend
  * Notes are stored in plaintext in the database
    * quick and efficient, but not very secure

#### Features not yet implemented
  * some settings do not work
    * session is always persistent, no matter what your settings say
    * clock formats and timezones not yet functional
    * notes are not autodeleted even if you enable it in the settings
  * Weather app
  * mobile interface
    * the UI is functional on relatively large screens

- - - 

## System architecture

### Back-end: 
##### Found in FS20PROJECT/, main server program in FS20PROJECT/src/index.js 

  * Express  
    * ExpressJS framework is used to handle HTTP traffic on the server
    * POST requests to the /graphql -endpoint are routed to the Apollo server
    * GET requests to any endpoint return the frontend static files
  * Apollo (GraphQL)  
    * The content of the HTTP POST requests are handled by the Apollo server 
  * Mongoose (MongoDB)  
    * Database manipulation (ie. models and queries) is handled by the Mongoose-library
  * JOI
    * JOI is used for validating the incoming data 
  
### Front-end: 
##### Found in FS20PROJECT/client/

* React
  * The frontend uses the React-framework for rendering UI elements
* Axios
  * Axios is used to execute 
  * GQL is used to define the desired content 
* React Redux  
  * Redux is used for internal routing
  * Though limited in width, the app is a single-page application
* Semantic UI
  * Semantic UI is used for quick and easy interface styling
* rss-parser
  * rss-parser executes and parses RSS feed fetches

- - - 
## Lessons learned: 

* implement continuous testing  
  * manages regression and keeps you sane(r)
* implement continuous integration 
  * keeps deadlines in order and the Big Picture in mind
* branching for robust version control
  * enables having a working version at all times
  * enables rolling back changes or switching tasks on the fly 

- - - 

## TODO: 

### I will be studying the folloring topics in my coming projects:
* TDD-method
* scrum 
* CI/CD 
* typescript 
* UI design (mobile first approach) 
* native clients (electron, react native)
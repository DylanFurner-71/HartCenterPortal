# HartCenterPortal

Hart Leadership Survey Portal
Requirements to run product:
Sudo access
Cocoapods
Yarn 
ESLint
MySQL
Jest Test Suite:
We will be using the jest testing suite to unit test our code
Frontend:
When using Jest with React, we run a type of testing called snapshot testing. For this project, you must have 95% coverage to submit code. 

Console commands to run jest test suite: 
Npm run –jest 
Backend:
Node.js Testing with Jest - RWieruch (robinwieruch.de)
Here is the guide that I will follow. 
Jest install install Jest using yarn: yarn add --dev jest Or npm: npm install --save-dev jest
What is Jest? Jest is a testing framework maintained by Facebook Inc. that serves to provide a logical, easy to use way to cover as many lines as possible in tests. While this may feel annoying at first it makes react and node development significantly easier to test. There is no base debugger in either of these languages so we have no way to verify our code is working the way we intended it to without it. 

ES Lint This script checks our syntax and makes sure it is within the acceptable quality of the JavaScript Standard that we chose. This project will be using Google’s Javascript Node Eslint standard. Again, this feels very annoying but it will come in very handy.
$ npm install eslint --save-dev $ ./node_modules/.bin/eslint --init
ROUTES:
app.route('/notes')
    .get(notebook.getAllNotes)
    .post(notebook.createNote);

app.route('/notes/:noteId')
    .get(notebook.getNote)
    .put(notebook.updateNote)
    .delete(notebook.deleteNote);
    
    
    standard syntax for a call would be
    app.get('/notes') gets notebook.getAllNotes
    app.post('/notes') would post a new note. not exactly sure on how we call it with parameters wiht mongo db but we will learn
Backend File Layout with explanations notes-app/
├── controllers/
│ └── notebookController.js //this is the file that contains anything to do with notebooks. REST operations that pertain to notebooks are called here
├── models/
| └── notebookModel.js //models store example schema. There will be many of these files
├── routes/
│ └── index.js
├── app.js //app.js is actually not currently included. Could change in future but unlikely.
├── server.js
└── package.json
Running the Backend: Npm install app Npm run start
Running the Front End: cd client && npm install npm start


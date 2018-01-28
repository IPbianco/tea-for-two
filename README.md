# Tea for Two (Also known as Static Content challenge)

## Description

A node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages comes from a combination of a template HTML file and a markdown file containing the content.

## How it works

The file `helpers/folderInspector.js` provides the `app.js` a list with the names of every folder inside the `content` directory. When a request URL matches a name in the list, the app displays the `public/views/template.html`. This template includes a script that can be found in `public/js/index.js`. This script gets the content from the corresponding markdown file, converts this to HTML format and appends it to the content placeholder.

The names of the folders inside the `content` directory are not hardcoded so that new folders with markdown files can be added at any time without changing any code (the new valid URLs are created automatically).

## Tech Stack

The application was built using the following technologies:

- Express.js
- Readdirp, to get the list of folder names inside the `content` directory
- jQuery
- Showdown, as the Markdown to HTML converter
- Cypress, as the testing framework

## Getting started
```
$ git clone https://github.com/IPbianco/tea-for-two.git
$ npm install
```
## Usage
```
$ node app.js
```
Navigate to http://localhost:8000/SomeFolderName
## Running tests
With the server running:
```
$ node_modules/.bin/cypress open
```
![Tests](/images/testsImage.png)

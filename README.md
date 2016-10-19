## Synopsis

Simple rest api example using nodejs, express and basic auth.

## Code Example

No code examples are included, but to run the API refer to installation.

## Motivation

Fun

## Installation

git clone https://github.com/ermaxw/SimpleNodeJSExpressAPI.git

npm install

node server.js

## API Reference

'GET' /bookmarks returns a json array of bookmarks in the form of [{description: "Some Description", url: "Some URL"}]
'POST' /bookmarks expects a json representation of a bookmark {description: "Some Description", url: "Some URL"}, the content-type must be
'application/json' and basic authentication is required, the hardcoded user name is user1 and password is password1.
 The response to the 'POST' is a json array of bookmarks with the new bookmark added in the form of [{description: "Some Description", url: "Some URL"}]
## Tests

To execute the tests included the server must be running, I did not have time to add mocks or a fake server, but they can be 
executed once the server is running using node server.js.   Then execute npm test.

1) Run node server.js in one terminal
2) Run npm test in a different terminal.
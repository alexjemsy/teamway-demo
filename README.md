# teamway-demo

# Server
The server application uses apollo server to handle GraphQL queries for the list of questions.

## Run server
- `nvm use 14.16.1`
- `Yarn workspace server install`
- `Yarn workspace server start`

# Client
The client application is a single page application that requests the list of questions<br>
from the server application using apollo client and displays the questions.<br>
The personality traits are calculated on the frontend using the responses provided by the user.<br>

## Run client
- `nvm use 14.16.1`
- `Yarn workspace client install`
- `Yarn workspace client start`

## Run tests
- `nvm use 14.16.1`
- `Yarn workspace client install`
- `Yarn workspace client test`

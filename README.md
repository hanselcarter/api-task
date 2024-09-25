## Description

TASKS API, I was able to complete all features also I tested every method on the app service created, Api is deployed here: https://web-production-6e0dd.up.railway.app/

## Endpoints available

- GET: https://web-production-6e0dd.up.railway.app/tasks get all tasks
- Post: https://web-production-6e0dd.up.railway.app/task this endpoint creates a task and receives a body which has a task dto form which is this one (status can be pending or completed following the typescript enum model I created) {
  "description": "WARSOW from railway 2",
  "title": "another 22",
  "status": "pending"
  }
- Put https://web-production-6e0dd.up.railway.app/task/:id endpoint updates a task by id, id should be on db if not we will get custom not found error id to test:U8YeHrRJ1jzOA8pkU5hj the same for of the body above should be used for the task dto to update you are able to update the three properties of the task dto
- Delete https://web-production-6e0dd.up.railway.app/task/:id id should be on db if not we will get custom not found error

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

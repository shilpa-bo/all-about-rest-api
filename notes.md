# ExpressJS and RestAPIs
- Express.js is a powerful web framework for Node.js that simplifies building web servers and APIs

### RESTful services
**REST** stands for **Re**presentational **S**tate **T**ransfer
- The app itself is the client/frontend pard
- Under the hood, it needs to talk to the server/backend to get/save the data
- This communication happens by using the HTTP protocol, the same protocol that powers our web
- We use simple HTTP protocol principles to Create, Read, Use, Delete (CRUD) data

## Real World Example
- endpoint: url
- https is secure 
- http://domain/api/endpoint
    - anything having to do with this endpoint is done by sending an HTTP request to this endpoint
- There are different types of HTTP methods
1. Get: getting data
2. Post: creating data
3. Put: updating data
4. Delete: deleting data

Assume our endpoint is customers: https://domain/api/customers
- Get Customers: GET /api/customers Response: all the customers in database
- Get 1 customer: GET /api/customers/1 Response: the specified customer by index
- Update a customer: PUT /api/customers/1 {customer object} Response: server updates customer according to these values
- Delete a customer: DELETE /api/customers/1 
- Create a customer: POST /api/customers {customer object} Response: get's this object and creates customer for us 

## Tutorial Starts Here:
In this tutorial we will focus on building HTTP servers. We will use a simple array as a database.
We will use the express framwork to build a RestFul Service for managing a list of customers
Popuplar way to build applications on top of node is with express

### Express
- The **req** object represents the HTTP request and has properties 
- Express gives our app a structure- we can move all requests to courses in one file
Setup commands:
``npm init --yes``
`npm i express`

### NodeMon (NodeMonitor)
```npm i -g nodemon```
`nodemon index.js`

set environment variable: `$export PORT=5000`

Outline: 
1. First web server, nodemon, env var
2. Route parameters- for essential/required values vs Query parameters-for anything that is optional
Question: what is the point of route parameters?
3. HTTP Get Requests
4. HTTP Post Requests
5. Calling APIs using postman 
Can use `curl` to test the endpoint. We can make GET and POST requests
- GET request to http://localhost:3000/api/endpoint
```bash
curl http://localhost:3000/api/courses
```
- POST request to endpoint URL
```bash
curl -X POST http://localhost:3000/api/courses \ 
    -H "Content-Type" : application / json" \
    -d '{body of information}'
```
6. Input Validation
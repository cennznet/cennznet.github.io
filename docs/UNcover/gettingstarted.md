### Getting Started

  Currently we support one network (chain): 

1. `Rimu` - testing

We started with version 1 to leave some space for future improvements. 

#### Versions

| Version     | Date | Changes            |
| ----------- | ---- | ------------------ |
| `version 1` | TBD  | Initial deployment |



#### Networks (chains)

| Network        | Class            | Base URL                                |
| -------------- | ---------------- | --------------------------------------- |
| `Rimu`         | Testing          | https://api-rimu.uncoverexplorer.com/v1 |
<br/>    

#### Authentication

To authenticate, please use our **UNfrastructure** portal to generate your own unique `API keys`.

##### How to use UNfratructure portal? 

  1. Go to http://unfrastructure.io. 
  2. Click on **Sign up** at the top of the page. 
  3. Once you Sign up with valid credentials, a confirmation email will be sent to the email address used while signing up. Please go to your email to verify.
  4. After verification, you will be able to create a new project. In the dashboard, click on `Create project`. 
  5. Enter the name of your project, choose UNcover from the type and click `Create`
  6. You can see all the projects created on your dashboard. Clicking on the particular project will allow you to copy the API and allow you to access our UNcover API.
 
##### Example HTTP request

```
GET /v1/blocks HTTP/1.1
Host: api-rimu.uncoverexplorer.com
apikey: <your_API_key>
Content-Type: application/json
```

Note: Please replace `<your_API_key>` with the uniquely generated APIkey from UNfrastructure.

##### Example cURL request

```
curl -X GET 
  https://api-rimu.uncoverexplorer.com/v1/blocks 
  -H 'Content-Type: application/json' 
  -H 'apikey: <your_API_key>' 
```

Note: Please replace `<your_API_key>` with the uniquely generated APIkey from UNfrastructure.

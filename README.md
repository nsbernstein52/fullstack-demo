# SPRINT OBJECTIVES
Before you go any further, make sure you've done the following:
> npm install

You can spin up the front-end by using:
> npm start

You can spin up the back-end by using:
> npm run server

### FRONT-END
- Filter bugs by the threat level set by the user.

- Create a modal that will allow users to submit new bugs. A bug report **must** contain:

>> 1. Assigned Team Member
>> 2. Threat Level
>> 3. Description
>> 4. Reporter

- Populate the client with bug reports sent back from the server.

### BACK-END
- Create a route to send back **ALL** bug reports in the DB.

- Create a route to handle new bug reports sent from the client.

### DATABASE
- Populate a MongoDB (w/ Mongoose) with exampleData.

- Create a method to send back all bug reports in the DB.

- Create a method to add a new bug report to the DB.
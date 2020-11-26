# Session User API

an amazing user API with session authentication made using Node, Express, MongoDB/Mongoose, and Passport.js.

## Installation

Rename `.env.example` file to just `.env` then replace the environment variable values with your own values. Here's what's inside `.env.example` file:

```env
# Rename this ".env.example" file to just ".env"
DB_URI=REPLACE_THIS_WITH_YOUR_MONGODB_URI
PORT=REPLACE_THIS_WITH_YOUR_DESIRED_PORT
SESSION_SECRET=REPLACE_THIS_WITH_YOUR_DESIRED_SESSION_SECRETS_SEPARATED_WITH_COMMA
SESSION_NAME=REPLACE_THIS_WITH_YOUR_DESIRED_SESSION_NAME

# Sample values for each variables above
# DB_URI=mongodb://127.0.0.1:27017/sample-mongo-uri
# PORT=3001
# SESSION_SECRET=firstSecret,secondSecret,etc
# SESSION_NAME=sampleName
```

Install app dependencies

```bash
# Install app dependencies
npm install

# Run application
npm run dev
```

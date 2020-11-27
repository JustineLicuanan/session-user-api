# Session User API

an amazing user API with session authentication made using Node, Express, MongoDB/Mongoose, and Passport.js.

## Installation

Rename `.env.example` file to just `.env` then replace the environment variable values with your own values. Here's what's inside `.env.example` file:

```sh
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

Install the dependencies

```bash
npm install
```

## Usage

Run the server

```bash
npm run dev
```

### `/users` Endpoints

```http
# Register endpoint
POST /users/register
body: { name, email, username, password }

# Login endpoint
POST /users/login
body: { username, password }

# Logout endpoint
GET /users/logout

# View current logged in user profile endpoint
GET /users/profile

# View specific user profile endpoint
GET /users/profile/:username

# View all user profiles endpoint
GET /users

# Update current logged in user profile endpoint
PATCH /users/profile/update
body: { name, email, username }

# Change current logged in user password endpoint
PATCH /users/profile/update/password
body: { password }

# Delete current logged in user endpoint
DELETE /users/profile/delete
```

### `/admin` Endpoints

To access `/admin` endpoints, first you have to create an admin user. To create an admin user, do a `POST` request to `/users/register` with your desired `{ name, email, username, password }` attached in the body, then change the role of that user from `4` to `1` in your MongoDB database.

```http
# Create user endpoint
POST /admin/create
body: { role, name, email, username, password }

# View specific user profile endpoint
GET /admin/view/:username

# View all user profiles endpoint
GET /admin/view

# Update specific user profile endpoint
PATCH /admin/update/:username
body: { role, name, email, username }

# Change specific user password endpoint
PATCH /admin/update/password/:username
body: { password }

# Delete specific user endpoint
DELETE /admin/delete/:username
```

## Built With

- JavaScript - the programming language used.
- [Node](https://nodejs.org) - the runtime environment used to run JavaScript on the backend.
- [Express](https://expressjs.com) - the web framework used for Node.
- [MongoDB](https://www.mongodb.com) - the database used.
- [Mongoose](https://mongoosejs.com) - used for MongoDB object data modeling (ODM).
- [Passport.js](http://www.passportjs.org) - used for authentication.
- [Dotenv](https://github.com/motdotla/dotenv) - used to store environment variables.
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) - used to hash passwords.
- [validator.js](https://github.com/validatorjs/validator.js) - used for validation.

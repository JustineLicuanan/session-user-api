const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

// Initializations
require('dotenv').config();
require('./middlewares/passport');
const { DB_URI, PORT, SESSION_SECRET, SESSION_NAME } = process.env;
const app = express();

// Connect to database
mongoose
	.connect(DB_URI, {
		// Remove deprecation warnings in the console
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log('Connected to database successfully');

		// Start the server
		app.listen(PORT, (err) => {
			if (err) throw err;
			console.log(`Server is listening on port ${PORT}`);
		});
	})
	.catch((err) => console.log(err));

// Middlewares
app.use(express.json());
app.use(
	session({
		secret: SESSION_SECRET.split(','),
		name: SESSION_NAME,
		cookie: {
			maxAge: 3600000,
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production' ? true : false,
		},
		resave: false,
		saveUninitialized: false,
		// store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/users', require('./routes/userRoutes'));
app.use('/admin', require('./routes/adminRoutes'));

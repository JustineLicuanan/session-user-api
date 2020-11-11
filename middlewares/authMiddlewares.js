// Verify if user is authenticated
const verifyAuth = (req, res, next) => {
	if (!req.isAuthenticated())
		return res.status(400).json({
			err: true,
			message: 'Please login to view this resource',
		});
	next();
};

// Don't let user in if already authenticated
const verifyUnauth = (req, res, next) => {
	if (req.isAuthenticated())
		return res.status(400).json({
			err: true,
			message: "You're already logged in",
		});
	next();
};

module.exports = {
	verifyAuth,
	verifyUnauth,
};

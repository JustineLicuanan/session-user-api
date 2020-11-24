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

// Verify if user is admin
const verifyAdmin = (req, res, next) => {
	if (req.user.role !== 1)
		return res.status(401).json({
			err: true,
			message: "You don't have permission to view this resource",
		});
	next();
};

module.exports = {
	verifyAuth,
	verifyUnauth,
	verifyAdmin,
};

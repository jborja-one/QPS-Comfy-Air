module.exports = (err, req, res, next) => {
	err.code = err.code || 500;

	if (process.env.NODE_ENV === 'development') {
		res.status(err.code).json({
			success: false,
			error: err,
			message: err.message,
			stack: err.stack,
		});
	} else if (process.env.NODE_ENV === 'production') {
		let error = { ...err };
		error.message = err.message;

		// Wrong Mongoose Object ID Error
		if (err.name === 'CastError') {
			const message = `Resource not found. Invalid: ${err.path}`;
			error = new HttpError(message, 404);
		}

		// Handling Mongoose Validation Error
		if (err.name === 'ValidationError') {
			const message = Object.values(err.errors).map(
				(value) => value.message
			);
			error = new HttpError(message, 400);
		}

		// Handling Mongoose duplicate key errors
		if (err.code === 11000) {
			const message = 'Duplicate field value entered';
			error = new HttpError(message, 400);
		}

		res.status(error.code || 500).json({
			success: false,
			message: error.message || 'Internal Server Error',
		});
	}
};

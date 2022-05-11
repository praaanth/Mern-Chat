const notFound = (req, res, next) => {
    const error= new Error(`Not found - ${req.originalUrl}`);
    error.status=404;
    next(error);
    
    }
    const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({
        success: false,
        error: err.message
    });
    }
    module.exports = {
    notFound,
    errorHandler
    }
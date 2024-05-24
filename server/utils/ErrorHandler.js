const ErrorHandler = (statusCode, messsage) => {
    const error = new Error();

    error.message = messsage;
    error.statusCode = statusCode;

    return error;
}

export default ErrorHandler;
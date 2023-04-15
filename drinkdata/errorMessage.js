//customize the status and error messages

export const errorMessage = (status, message, err) => {
    const error = new Error();
    const originalError = err?.message;
    const Message = message; //in case not only error variable
    error.status = status;
    error.message = Message;
    error.detail = originalError;
    return error;
}

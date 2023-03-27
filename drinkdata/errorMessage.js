//customize the status and error messages

export const errorMessage = (status, message, err) => {
    const error = new Error();
    const originalError = err?.message;
    error.status = status;
    error.message = message + "\nThe error detail: " + originalError;
    return error;
}
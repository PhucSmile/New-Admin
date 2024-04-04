export const handleError = (error: any) => {
  if (error.response) {
    const { code, message, status, errors = {} } = error.response.data;

    return {
      code,
      message,
      errors,
      status: status ?? error.response.status,
    };
  } else {
    const { code, message, errors = {} } = error;

    return { code, message, errors };
  }
};

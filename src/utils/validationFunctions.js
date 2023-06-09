export const verifyEmail = (email) => {
    const emailRegex = /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
};

export const verifyName = (name) => {
  const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  return nameRegex.test(name);
};
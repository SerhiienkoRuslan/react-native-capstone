export const validateEmail = email => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const validateName = name => {
  if (name.length > 0) {
    return name.match(/[^a-zA-Z]/);
  } else {
    return true;
  }
};

export const validateNumber = (number) => {
  if (isNaN(number)) {
    return false;
  } else if (number.length == 10) {
    return true;
  }
};

const checkEmail = (email) => {
  let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
  let result;
  if (regex.test(email)) {
    result = `password ${email} VALID`;
  } else {
    result = `password ${email} INVALID`;
  }
  return result;
};

console.log(checkEmail("123456789"));

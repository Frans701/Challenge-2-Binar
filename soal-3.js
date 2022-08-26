const checkEmail = (email) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let result;
  if (regex.test(email)) {
    result = `Alamat ${email} VALID`;
  } else {
    result = `Alamat ${email} INVALID`;
  }
  return result;
};

console.log(checkEmail("frans@gmail.co.id"));

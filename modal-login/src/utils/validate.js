export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

// validate a password that includes between 8 and 15 characters, at least one uppercase letter, one lowercase, one Number and one special character
export const validatePassword = (password) => {
  // validad que incluye minusculas
  if (/[a-z]/.test(password)) {
    console.log("LowerCase");
  }
  if (/[A-Z]/.test(password)) {
    console.log("UpperCase");
  }
  if (/[0-9]/.test(password)) {
    console.log("Number");
  }
  if (/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) {
    console.log("Specials");
  }

  if (
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)
  ) {
    console.log("password is valid");

    return true;
  }
  console.log("password is not valid");

  return false
};


export const validatePasswordLength=(password)=>{
    if (password.length < 8 || password.length > 15) {
        return false
    }
    return true
}
function checkPassword(password) {
  let hasUpperCase = false;
  let hasNumber = false;
  let reason = [];
  let hasSpace = password.includes(" ");
  if (password.length < 8) {
    return "Password At least 8 Characters Required";
  }
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      hasNumber = true;
    }

    if (password[i] >= "A" && password[i] <= "Z") {
      hasUpperCase = true;
    }
  }
  if (!hasNumber) {
    reason.push("X Numbers (0-9)");
  }
  if (!hasUpperCase) {
    reason.push("X Upper case letters (A-Z)");
  }
  if (hasSpace) {
    reason.push("Space Found");
  }
  let isValid = reason.length == 0;
  return {
    isValid,
    hasNumber,
    hasUpperCase,
    reason,
    hasSpace,
  };
}
const pass = checkPassword("Hell6o");
console.log(pass);

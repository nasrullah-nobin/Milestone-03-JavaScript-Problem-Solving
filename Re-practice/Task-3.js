function checkPassword(passwords) {
  let hasNumber = false;
  let capitalLetter = false;
  let hasSpace = passwords.includes(" ");
  let reason = [];
  if (passwords.length < 8) {
    reason.push("At least 8 Character required");
  }
  for (const char of passwords) {
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    if (char >= "A" && char <= "Z") {
      capitalLetter = true;
    }
  }
  if (!hasNumber) {
    reason.push("Must contain at least 1 number");
  }
  if (!capitalLetter) {
    reason.push("Must contain at least 1 uppercase letter");
  }
  if (hasSpace) {
    reason.push("Must not contain spaces");
  }

  return {
    valid: reason.length === 0,
    hasNumber,
    capitalLetter,
    reason,
  };
}
// console.log(checkPassword("H"));
// console.log(checkPassword("Hello123"));

// same method usnig for loop
function checkPassword1(passwords) {
  let hasNumber = false;
  let hasUpperCase = false;
  let hasSpace = passwords.includes(" ");
  let reason = [];
  if (passwords.length < 8) {
    reason.push("Length must be at least 8");
  }
  for (let i = 0; i < passwords.length; i++) {
    if (passwords[i] >= "0" && passwords[i] <= '9') {
      hasNumber = true;
    }
    if (passwords[i] >= "A" && passwords[i] <= "Z") {
      hasUpperCase = true;
    }
  }
  if (!hasNumber) {
    reason.push("Must contain at least 1 number");
  }
  if (!hasUpperCase) {
    reason.push("Must contain at least 1 uppercase letter");
  }
  if (hasSpace) {
    reason.push("Must not contain spaces");
  }
  return {
    valid: reason.length === 0,
    hasNumber,
    hasUpperCase,
    reason,
  };
}
console.log(checkPassword1("H"));
console.log(checkPassword1("Hello123"));

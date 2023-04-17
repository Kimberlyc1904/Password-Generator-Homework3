// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  let criteria = prompt("Enter a Password Length");
  if(criteria < 8 || criteria > 128){
    prompt("Please enter number between 8 and 128!");
  } else {
      showConfirmBox();
  }
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function showConfirmBox() {
  document.getElementById("confirm-box").hidden = false;
}
function confirm(data) {
  if (data === "yes") {
    document.getElementById("confirm-box").hidden = true;
    document.getElementById("confirm-box2").hidden = false;
  } else {
    console.log("user clicked No");
  }
}
function confirmUpperCase(data) {
  if (data === "yes") {
    document.getElementById("confirm-box2").hidden = true;
    document.getElementById("confirm-box3").hidden = false;
  } else {
    console.log("user clicked No");
  }
}
function confirmNumber(data) {
  if (data === "yes") {
    document.getElementById("confirm-box3").hidden = true;
    document.getElementById("confirm-box4").hidden = false;
  } else {
    console.log("user clicked No");
  }
}
function confirmCharacter(data) {
  if (data === "yes") {
    document.getElementById("confirm-box4").hidden = true;
  } else {
    console.log("user clicked No");
  }
}
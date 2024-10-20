console.log("script works");
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result")

console.log(checkBtn, 'check button');
console.log('input', textInput);

const cleanInput = (input) => {
  const regex = /[^a-zA-Z0-9]/g;
  const cleaned = input.toLowerCase().replace(regex, "").trim()
  console.log(cleaned);
  return cleaned;
}

const checkPalindrome = (cleanedStr) => {
  if (cleanedStr.length == 1){
    return true;
  }
  let idx = 0;
  while (idx < cleanedStr.length / 2){
    if (cleanedStr[idx] !== cleanedStr[cleanedStr.length - 1 - idx]){
      return false;
    }
    idx++;
  }
  return true;
}

const processInput = () => {
  const input = textInput.value;
  console.log('input text', input);

  if (!input){
    alert("Please input a value");
    return;
  };
  //clean input
  const cleanedStr = cleanInput(input);
  //edge case: if cleanedStr is empty
  if (input && cleanedStr.length == 0){
    alert("Invalid input");
    return;
  }
  //determine if input is a palindrome
  let resultText = input;
  if (checkPalindrome(cleanedStr)){
    resultText += " is a palindrome";
  }
  else {
    resultText += " is not a palindrome";
  }
  console.log(resultText);
  result.innerText = resultText;
}
checkBtn.addEventListener("click", processInput);

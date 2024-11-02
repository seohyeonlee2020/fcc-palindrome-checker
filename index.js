console.log("script works");
console.log("가나다라");
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result")
const lightDark = document.getElementById("light-dark");

const checkHangul = (input) => {
  const isHangul = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
  console.log('checkHangul result:', isHangul.test(input));
  return isHangul.test(input);
}

const cleanInput = (input) => {
  const InvalidChar = /[^a-zA-Z0-9가-힣]/g;
  const cleaned = input.toLowerCase().replace(InvalidChar, "").trim()
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
  //clean both hangul and alphabet
  //for hangul, leave only complete characters
  //ignore anything outside of complete hangul and alphanumeric

  if (input && cleanedStr.length == 0){
    alert("Invalid input");
    return;
  }
  //determine if input is a palindrome
  //if any amount of hangul is included, output comes in korean
  let resultText = "";
  const hasHangul = checkHangul(input);
  if (checkPalindrome(cleanedStr)){

    if (hasHangul){
      resultText += `회문입니다`;
    }
    else {
      resultText += " is a palindrome";
    }
  }
  else {
    if (hasHangul){
      resultText += `회문이 아닙니다`;
    }
    else {
      resultText += " is not a palindrome";
    }
  }
  console.log(resultText);
  result.innerText = resultText;
}

checkBtn.addEventListener("click", processInput)
lightDark.addEventListener("click", () => {
	  document.body.classList.toggle("dark-theme");
	  document.body.classList.toggle("light-theme");
  	console.log("light-dark clicked");
})


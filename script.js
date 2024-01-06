let isTextPalindrome;
let enteredText;

const resultButton = document.getElementById("check-btn");
let enteredTextElement = document.getElementById("text-input");
const resultText = document.getElementById("result")

resultButton.addEventListener("click", isInputTextThere);


function isInputTextThere() {

  enteredText = enteredTextElement.value;
  
  if (enteredText === "") {
    resultText.innerText = "enter a value";
    alert("Please input a value");
  } else {
    checkPalindrome();
  }
}


function checkPalindrome() {
  let enteredText = enteredTextElement.value.replace(/[^a-zA-Z0-9]/g, '');

  const palindrome = enteredText.toLowerCase();

  const reversePalindrome = enteredText.split("").reverse().join("").toLowerCase();

  console.log(palindrome);
  console.log(reversePalindrome);

  if (palindrome === reversePalindrome) {
    isTextPalindrome = true;
  } else {
    isTextPalindrome = false;
  }
  console.log(isTextPalindrome);
  displayResult();
}


function displayResult() {
  if (isTextPalindrome) {
     resultText.innerText = `${enteredText} is a palindrome`;
  } else {
     resultText.innerText = `${enteredText} is not a palindrome`
  }
}

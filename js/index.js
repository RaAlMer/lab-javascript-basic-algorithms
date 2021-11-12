// Iteration 1: Names and Input
let hacker1 = "Raúl";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Elisa";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
// 3.1
let newStr = "";
for (let i = 0; i < hacker1.length; i++){
  newStr += hacker1[i].toUpperCase() + " ";
}
console.log(newStr.trimEnd());

// 3.2
let newStr2 = "";
for (let j = (hacker2.length - 1); j >= 0; j--){
  newStr2 += hacker2[j];
}
console.log(newStr2);

// 3.3
// Getting the longest name from the driver or navigator
let arr = [hacker1, hacker2];
let maxLen = 0;
for (let k = 0; k < arr.length; k++) {
  if (arr[k].length > maxLen) {
    maxLen = arr[k].length;
  }
}
if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
  } else { 
      for (let l = 0; l < maxLen; l++){
        if (hacker1[l] < hacker2[l]){ 
            console.log("The driver's name goes first.");
            break;
          } else if (hacker1[l] > hacker2[l]){
            console.log("Yo, the navigator goes first definitely.");
            break;
          } else {
            // Nothing
          }
      }
  } 

  // Bonus 1
  let loreIpsumPar = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nisi arcu. Suspendisse sit amet sem aliquam, congue quam sed, dignissim mi. Nam dapibus ornare elit, quis venenatis massa ultricies quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vehicula velit non est malesuada maximus. Suspendisse luctus dapibus sem ac egestas. Integer commodo nisl massa, at facilisis dui laoreet at. Pellentesque hendrerit lorem non sollicitudin volutpat. \nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac mollis nisl. Integer iaculis mi non mi sodales euismod. Sed tempor purus eu lectus bibendum laoreet. Donec volutpat tortor ac metus hendrerit, eu sodales arcu aliquam. Aliquam pharetra aliquet erat at tempor. Cras suscipit vulputate dolor, quis imperdiet tellus porta a. Aenean tincidunt nulla et urna porttitor, eget imperdiet ex dictum. Sed a purus eu magna eleifend condimentum. \nVivamus egestas, ex ac maximus pharetra, arcu velit sodales augue, vitae hendrerit sem nibh ac velit. Nulla fermentum viverra justo, luctus posuere metus aliquam vel. Cras at turpis efficitur, blandit ipsum vel, mattis lorem. Nunc semper fermentum tellus, at sollicitudin quam. Integer varius nunc ut pulvinar scelerisque. Phasellus id tortor in tellus cursus varius sed quis lacus. Proin hendrerit elementum suscipit. Maecenas a dui ut diam interdum commodo. Integer condimentum maximus sodales. Nulla condimentum odio enim, id efficitur lectus vestibulum in. In odio turpis, pretium in ipsum at, pellentesque facilisis augue. Suspendisse suscipit velit pulvinar, feugiat arcu eu, accumsan odio. Pellentesque vitae erat convallis, gravida magna non, varius est. Curabitur varius nisl ac ante porta mattis. Aenean est leo, efficitur sit amet rutrum et, vehicula quis odio. Etiam sollicitudin ligula non enim sodales imperdiet.';
  
  let countWords = 0;
  for (let i = 0; i < loreIpsumPar.length; i++){
    if (loreIpsumPar[i] === " "){
      countWords += 1; // But 1 space = 2 words
    }
  }
  // In order to get the correct number of words we need to add 1 because 1 space = 2 words.
  console.log(countWords + 1);
  // Count et
  let countEt = 0;
  for (let i = 0; i < loreIpsumPar.length; i++){
    if (loreIpsumPar[i] === "e"){
      if(loreIpsumPar[i + 1] === "t"){
        if (loreIpsumPar[i + 2] === " "){
          if (loreIpsumPar[i - 1] === " "){
            countEt += 1;
          }
        }
      }
    }
  }
  console.log(countEt);

  // Bonus 2
  let phraseToCheck = "A man, a plan, a canal, Panama!";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // Lower every letter from the phrase
  let phraseToCheckLowerCase = phraseToCheck.toLowerCase();
  // Removing not alphabet chars from word
  let phraseToCheckLowerCaseOnlyAlp = "";
  for (let i = 0; i < phraseToCheckLowerCase.length; i++){
    for (let j = 0; j < alphabet.length; j++){
       if (phraseToCheckLowerCase[i] === alphabet[j]){
         phraseToCheckLowerCaseOnlyAlp += phraseToCheckLowerCase[i];
       }
    }
  }
  // Getting the phrase backwards
  let phraseToCheckBackwards = "";
  for (let i = (phraseToCheckLowerCaseOnlyAlp.length - 1); i >= 0; i--){
    phraseToCheckBackwards += phraseToCheckLowerCaseOnlyAlp[i];
  }
  // Checking if it's a Palindrome
  if (phraseToCheckBackwards === phraseToCheckLowerCaseOnlyAlp) {
    console.log("Hooray, it's a palindrome!");
  } else {
    console.log("D'oh, it's not a palindrome");
  }
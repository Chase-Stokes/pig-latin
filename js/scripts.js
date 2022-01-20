function vowel(word) {
  const vowelArr = ["a", "e", "i", "o", "u"];
  let wordArr = word.split("");
  for (let i=0; i < vowelArr.length; i++) {
    if (wordArr[0].toLowerCase() === vowelArr[i]) {
      return true;
    }
  };
  return false;
}

function consonant(word) {
  let array = word.split("");
  for (let i = 0; i < array.length; i++) {
    if (!vowel(array.join(""))) {
      array.push(array[0]);
      array.shift();
    }
  }
  if (array[array.length -1] === "q" && array[0] === "u") {
    array.push(array[0]);
    array.shift();
  }
  return array.join("")
}

function pigLatin(input) {
  let wordArr = input.split(" ");
  let output = [];
  wordArr.forEach(function(word){
    if (vowel(word)) {
      output.push(word+"way")
    } else {
      output.push(consonant(word) + "ay")
    }
  })
  return output.join(" ")
}
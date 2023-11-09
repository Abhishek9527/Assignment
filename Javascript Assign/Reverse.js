function reverseWords(sentence) {
    let reversedSentence = '';
    let currentWord = '';
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      if (char !== ' ') {
        currentWord += char;
      } else {
        reversedSentence += reverseWord(currentWord) + ' ';
        currentWord = '';
      }
  
      if (i === sentence.length - 1) {
        reversedSentence += reverseWord(currentWord);
      }
    }
  
    return reversedSentence;
  }
  
  function reverseWord(word) {
    let reversedWord = '';
  
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
  
    return reversedWord;
  }
  
  const inputSentence = "Have a Good Day";
  const reversedSentence = reverseWords(inputSentence);
  console.log("Reversed sentence:", reversedSentence);
  
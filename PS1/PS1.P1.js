//https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
//https://stackoverflow.com/questions/9309278/javascript-regex-replace-all-characters-other-than-numbers
//replace all numbers and punctations
const sortAlphabet = str => [...str].sort().join('').replace(/\d+/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
console.log(`The right order should be: ${sortAlphabet("supercalifragilisticexpialidocious")}`);
//console.log(`The right order should be: ${sortAlphabet("supercalifragilisticexpialidocious.123")}`);
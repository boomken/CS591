const helper = (str, function1) => {
    return function1(str);
}

//https://stackoverflow.com/questions/12001953/javascript-and-regex-split-string-and-keep-the-separator
console.log(helper(`supercalifragilisticexpialidocious`, str => str.split(/(?=c)/g))); // (?=c)


//https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
console.log(helper(`supercalifragilisticexpialidocious`, str=> {
    var result = {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: (str.match(/a/g)||[]).length,
        length: str.length
    };
    return result;
}))


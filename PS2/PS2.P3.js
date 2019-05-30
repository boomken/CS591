

const cube = n => n**3
const cubeMap = num => num.map(x => cube(x));

var input_list = [1,2,3,4,5,6,7];
console.log(`The input is 1,2,3,4,5,6,7 and the output should be ${cubeMap(input_list)}`)

function* split_string(str){
    yield* str.split(' ');
}

var input_string = 'All I know is something like a bird within her sang'
let output_string = split_string(input_string);
let index = output_string.next(); // { value: "all", done: false }


while(index.done === false){
    console.log(index.value);
    index = output_string.next();
}





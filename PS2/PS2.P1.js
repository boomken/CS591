function* fib(){
        let [val1, val2] = [0, 1]; // F(0) = 0; F(1) = 1
        while(true){
            yield val1;
            [val1, val2] = [val2, val1+val2];
        }
}

myFib = fib()
function* fibs (){
    while(true){
        let even_num = myFib.next();
        if (even_num.value%2 == 0 || even_num.value == 0){
            yield even_num.value
        }
    }
}

myFibs = fibs();
let count = 5;
while (count --> 0){
    console.log(myFibs.next().value);
}

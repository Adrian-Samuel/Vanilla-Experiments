//Answering the fizz-buzz question using recursion && internal state threading instead of loops and array iterators

const countdown = (number, store = new Map()) => {
    if (number !== 0) {
        if (number % 2 == 0 && number % 5 == 0) {
            store.set(number, "fizz-buzz")
        } else if (number % 5 == 0) {
            store.set(number, "fizz")
        } else if (number % 2 == 0) {
            store.set(number, "buzz")
            
        }
    }
    if (number > 0) return countdown((number - 1), store) 
    else {
        return store;
    }
};

console.log(countdown(10))

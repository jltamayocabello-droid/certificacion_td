function sumar(a, b){
    a = number(a);
    b = number(b);
    return a + b
};

console.log(sumar(5, 6));

// testing 1 -> sumar(5, 6) = 11; -> 1;
// testing 2 -> sumar("5", 6) = 11; -> 1;
// testing 3 -> sumar("a", 6) = NaN;
function codeGeneration(min = 0, max = 999999) {
    let code;
    min = Math.ceil(min);
    max = Math.floor(max);

    do {
        code = Math.floor(Math.random() * (max - min + 1)) + min;
    } while ((Math.log(code) * Math.LOG10E + 1 | 0) !== 6);
    return code
}

console.log(codeGeneration())

let res;
const coba = 999999

do {
    res = codeGeneration()
    console.log(res)
} while (res == coba);

console.log(res)
const str = 'UnauthorizedError: jwt malformed<br>'
var myRe = new RegExp(/jwt malformed/gi);
var myArray = myRe.test(str);

console.log(myArray)

const re = new RegExp(/^(?=.*\bjack\b)(?=.*\bjames\b).*$/gi)
console.log(re.test('here is'))
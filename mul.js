/*  JavaScript Coding: Write a multiplication function in javascript to use like this.
    console.log(mul(2)(4)(5));

    Name: Ivan Yu
    Email: yu.ivanw@gmail.com
*/


/*
  Initially, the mul function returns another function
  which remembers the first factor in the multiplication.
  The firstFactor is passed in the a helper function which
  either returns a function or the result of multiplying 3 numbers.
*/
function mul(firstNumber){
  return helperMul(firstNumber);
}


function helperMul(first){

  // factors will be remembered and accessed on subsequent functions created
  // due to javascript's function closure.
  var factors = [ first ];


  return function multiplier(nextNumber){
    factors.push(nextNumber);

    // once the number of factors gets to 3,
    // multiply all 3 numbers and return the result.
    if( factors.length >= 3 ){
      return factors.reduce((total, curr) => total * curr);

    // otherwise, return another function which has another number as its arguments.
    // and in this function, return the result of multiplier, which checks whether
    // the result should be returned or another function.
    }else{
      return function(anotherNumber){
        return multiplier.call(null, anotherNumber);
      }
    }
  }

}

console.log(mul(2)(3)(4)); // 24
console.log(mul(3)(2)(7)); // 42
console.log(mul(2)(4)(5)); // 40

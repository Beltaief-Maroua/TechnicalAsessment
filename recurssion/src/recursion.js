// 1. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    var somme = 0
    if (array.length === 0){
        return 0
    } else if (array.length === 1){
    return array [0]

  }else {
    return somme = array[0] + sum (array.slice(1))
  }

};

// 2. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var somme = 0
    if (array.length === 1){
      return array [0]
  
    } else {
        var som = 0
        for (i=0 ; i<array.length ; i++){
            if (Array.isArray(array[i]) === true){
              som = som + array[i]
            } else {
                somme = array[0] + arraySum (array.slice(1))
            }

        } return somme
    }

};

// 3. Check if a number is even.
var isEven = function(n) {
    if (n === 0){
        return true
    } else if (n === 1){
        return false
    } else if (n>0){
       return isEven(n-2)
    } else if (n<0){
        return isEven(n+2)
    }

};

// 4. Write a function that reverses a string.
var reverse = function(string) {

};


// 5. Reverse the order of an array
var reverseArr = function(array) {
};


// 6. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 7. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};



// 8. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(object) {
    var sum = 0
    for (var key in object){
        if (typeof object.value != object ){
            if (object.value%2 === 0){
              sum = sum + obj.value
            }
        } else if (typeof object.value == object){
               obj1 = object.value
               if (obj1.value%2 === 0){
                sum = sum + obj1.value
              }
        }
    } return sum
};


// 9. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 10. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};



const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


// function transform(arr) {

//   if (!Array.isArray(arr)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }

//   let transformArr = [];
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     (arr[i] === arr[i + 1]) ? (arr1.push(arr[i])&&(i++)) : (arr1.push(arr[i]))
//   }



//   for (let i = 0; i < arr1.length; i++) {
//     (arr1[i] == '--double-prev' || arr1[i + 1] == '--discard-prev' || arr1[i] == '--discard-prev') ? ("") : (arr1[i + 1] == '--double-prev') ? (transformArr.push(arr1[i]) && transformArr.push(arr1[i]) && i++) : (arr1[i + 1] == '--discard-next') ? (transformArr.push(arr1[i]) && (i = i + 2)) : (arr1[i + 1] == '--double-next' && (arr1[i + 2])) ? (transformArr.push(arr1[i]) && transformArr.push(arr1[i + 2]) && i++) : (arr1[i] != '--double-next') ? (transformArr.push(arr1[i])) : ("")
//   }

//   return transformArr
// }

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

    let transformArr = [];

    for (let i = 0; i < arr.length; i++) {
        (arr[i] == '--double-prev'|| arr[i + 1] == '--discard-prev'||arr[i] == '--discard-prev') ? ("") :(arr[i + 1] == '--double-prev') ? (transformArr.push(arr[i]) && transformArr.push(arr[i]) && i++) : (arr[i + 1] == '--discard-next') ? (transformArr.push(arr[i]) && (i = i + 2)) : (arr[i + 1] == '--double-next' && (arr[i + 2])) ? (transformArr.push(arr[i]) && transformArr.push(arr[i + 2]) && i++) : (arr[i] != '--double-next') ? (transformArr.push(arr[i])) : ("")
    }

    return transformArr
}


module.exports = {
  transform
};

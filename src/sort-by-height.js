const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  
  let arr2 = []
  let arr3 = []
  let tempIndex=0;
  arr.forEach(element=> {
    (element!=-1)?(arr2.push(element)):('')
  });
  arr2.sort((a,b)=> a-b)

  arr.forEach((element,index)=>{
    ((element==-1)?(arr3.push(element)):(arr3.push(arr2[tempIndex])&&(tempIndex++)))
  })
  return arr3
}

module.exports = {
  sortByHeight
};

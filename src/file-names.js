const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */



function renameFiles(names) {
  let newArr = [];

  if (names.length === 0) { return [] }

  let countItem = (arr, item, index) => {
      let count = 0
      for (let j = 0; j < index; j++) {
          if (item == arr[j]) { count++ }
      }
      return count
  }

  names.forEach((item, index) => {

      if (!newArr.includes(item)) { newArr.push(item) }
      else {
          let suffix = countItem(names, item, index);
          (suffix == 0) ? (suffix = 1) : ('')
          newArr.push(item + `(${suffix})`)
      }
  });
  return newArr

}


module.exports = {
  renameFiles
};

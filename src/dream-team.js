const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false}
  let reuslt = [];
  let name = ''
  members.forEach(item => {
    if (typeof item === 'string') {
      console.log(item)
      let temp = item.trim();
   
      reuslt.push(temp[0].toUpperCase())
    }
    else return false
  });
  reuslt.sort().forEach(item => {
    name += item[0]
  })

  return name;
}




module.exports = {
  createDreamTeam
};

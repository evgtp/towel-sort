
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
   return [];
 }
  let result = []
  matrix.forEach((val, i) => {
    if (i % 2 !==0) {
      result.push(...val.reverse())
    }
    else {
      result.push(...val)
    }
  }
);

  return result;
}

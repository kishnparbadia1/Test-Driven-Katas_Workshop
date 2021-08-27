const twoSum = (arr, target) => {

  const retarr = []

  for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i]+arr[j] === target){
        retarr.push(arr[i])
        retarr.push(arr[j])
        return retarr;
      }
    }
  }

  return retarr;
}

module.exports = twoSum
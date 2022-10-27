// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

var findSpecies = function (obj,array){
    var arr = []
  for (i=0 ; i<array.length ; i++){
      arr.push(obj.species)
  } return arr
}



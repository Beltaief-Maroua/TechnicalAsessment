// Create a function called makeNoise that takes in an object and returns
// the response from calling the noise method.

var animal = { colorNose : black,
                nose : function(){
                  return `his nose is ${this.colorNose}`
    }
}
var makeNoise = function (obj){
    return obj.nose()
}



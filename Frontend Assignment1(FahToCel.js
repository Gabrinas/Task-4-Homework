function convertFahrToCelsius(f){
  if (typeof f == "number" || typeof f == "string"){
    var C = f - 32;
    var Cnew = (5/9) *(C);
    var Cnews = Cnew.toFixed(4); /* To round off the result to 4 decimal places. */
    console.log(Cnews);
  }
  else if (typeof f == 'object' && f.constructor === Array){
    console.log(f," is not a valid number but a/an array.");
  }
  else if (typeof f == 'object'){
    console.log(f, "is not a valid number but a/an object.");
    }
  }
convertFahrToCelsius("212");



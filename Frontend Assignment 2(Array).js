function checkYuGiOh(n){
  if (typeof n == "string" && isNaN(n)){
    console.log("invalid parameter:", n);
    }
  else if (typeof n == "number"){
    }
  let arr =[];
  for(let k=1; k<=n; k++){
    arr.push(k);
    }
  for (var el of arr){
    if (el % 2 == 0 && el % 3 != 0 && el % 5 != 0){
      var el = "yu";
      }
    if (el % 3 == 0){
      var el = "gi";
      }
    if (el % 5 == 0){
      var el = "oh";
      }
    console.log(el);   
    }
  }
val = prompt("enter your value:");
checkYuGiOh(val);










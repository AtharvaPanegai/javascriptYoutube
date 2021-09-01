// fill and filter

var numbers = [1,2,3,4,5,90,180];

// fill
// console.log(numbers.fill("Atharva",0,3));


// filter
var result = numbers.filter((num) => num == 180 );
// console.log(result);




var names = ["Atharva","Mayur","Shardul","Abhi","DJ","yash","harsh"];
             //  0          1       2       3     4                     

// slice and splice

var sliceResult = names.slice(0,4);
// console.log(sliceResult);

// splice method
names.splice(0,3,"Hii");

console.log(names);






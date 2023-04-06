var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;
var {a,b} = obj;



var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
[arr[1],arr[0]] = [arr[0],arr[1]];



const raceResults = ([first,second,third,...rest]) => ({first, second, third, rest});
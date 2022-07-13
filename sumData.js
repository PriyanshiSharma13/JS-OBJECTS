// Find the  sum of Object Members

// You are given a function Check which takes an object obj as a parameter.
// Your taks is to find out the sum of the three data members of the object. The data members are named as p1, p2, p3.

// Note: You have to complete Check function. No need to take any input.


function Check(Obj) {
    let sum = 0;
    for(let num in Obj) {
            sum += num.length;
    }
    return sum;
}
console.log(Check(1,2,3));

// function Check (Obj) {
//     let sum = 0; 
//     for(let i=0; i<Obj.length; i++)
//     {
//         sum += Obj[i];
//     }
//     return sum;
// }
// console.log(Check(Obj(1,2,3)));


// const obj = {
//     one: p1,
//     two: p2,
//     three: p3,
// };
  
//   let sum = 0;
  
// for (const value of Object.values(obj)) {
//     sum += value;
// }
// console.log(sum);
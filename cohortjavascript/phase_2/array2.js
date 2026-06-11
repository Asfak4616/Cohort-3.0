// ForEach in Array:-

// var arr=[10,20,30,40]
// arr.forEach(function(e,inx){
//     console.log(e,inx)
// })

// var arr=[10,20,23,40]
// var sum=0;
// arr.forEach(function(elem){
// sum=sum+elem;
// })
// console.log(sum)

// Map in Array:-

// var arr=[10,20,23,40]
// var arr2=arr.map(function(elem){

// return elem*2;
// })
// console.log(arr2)

// var arr=["asfak","sayan","prahallad"]
// var newArr=arr.map(function(elem){
//  return elem +" Ahamed"
// })
// console.log(newArr)

// Filter in Array:-

// var arr=[12,11,23,45,52,10]
// var b=arr.filter(function(e){
//  return e>23
// })
// console.log(b)

// ForEach helps for Iteration
// var arr=[10,12,25,23,54,20,6]
// arr.forEach(function(e){
//     console.log(e)
// })

// Map uses for transform
// var d=arr.map(function(e){
// return e*2
// })
// console.log(d)

// filter uses for filteration
// var f=arr.filter(function(e){
// return e>20
// })
// console.log(f)

var arr = [10, 20, 30, 40];
var brr = arr.reduce(function (acc, ret) {
  return acc + ret;
});
console.log(brr);

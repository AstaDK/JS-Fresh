const person = [
    {text: "Hello", from: "John", age: 32},
    {text: "How goes?", from: "John", age: 21},
    {text: "See you soon", from: "Alice", age: 11},
    {text: "Im good", from: "Ben", age: 72}
  ];
var age = person.filter(function(value) {
    return value.age > 21
})  
console.log(age)
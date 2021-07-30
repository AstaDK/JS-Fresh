const arrayA = ["dog", "cat", "fish", 3, "tree", 5, 1];
const arrayB = ["cat", "tree", 79, 12, "rock", 1];
var sameProperty = arrayA.concat(arrayB);
console.log("sameProperty", sameProperty);

var same = sameProperty.filter(function(a,b) {
console.log("a", a);
console.log("b", b);
console.log("sameProperty,indexOf(a)", sameProperty.indexOf(a));
return sameProperty.indexOf(a) !== b;
});
console.log("phan tu trung: ",same)
const intersection = (...arrays) => {
// Напишите здесь своё решение
const result = arrays[0].filter((element) => {
const indexOfElement = arrays[1].indexOf(element);

if (indexOfElement >= 0) {
return element;
}
});

if (arrays.length > 2) {
intersection(result, ...arrays.slice(2, arrays.length));
}
return Array.from(new Set(result));
};

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
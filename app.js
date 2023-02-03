// let arr = [1, 2, { name: 'Ilhom' }, function () { }]

// console.log(arr[0]);
// console.log(arr[arr.length-1]);
// console.log(arr.at(1));

// let ar = new Array(5,1);
// let ar = [1,2,3];

// ar[1] = 1
// console.log(ar);
// console.log(ar.length);

// let ar1 = [1, 2, 3, 4];
// let ar2 = [4, 5, 6]
// console.log(ar1.toString());
// console.log(ar1.join(' '));
// console.log(ar1.concat(ar2));

// console.log(typeof []);
// console.log(Array.isArray([]));

// let ar = []
// console.log(ar == 0);

// let user = ['Ilhom', 'Islom', 'Rustam', 'Sulton', 'Mirkomil'];

// for (let i = 0; i < user.length; i++) {
//     console.log(i);
// }

// for (const value of user) {
//     console.log(value);
// }
// for (const index in user) {
//     console.log(index);
// } --> index chiqarib beradi


// let ar = [1, 2, 3];
// ar.push(4)
// ar.pop()
// ar.unshift(0,2)
// ar.shift()
// console.log(ar);


// let ar = [1,2,4,5];
// ar.splice(1,2,'wba',3,7)
// ar.splice(2,0,3)
// ar.slice(0,2)
// console.log(ar);


// let ar = [1,2,4,5,4];
// console.log(ar.indexOf(4));
// console.log(ar.lastIndexOf(4));
// ar.reverse();
// console.log(ar.includes(5));


// Homework
// 1
// let arr = [2, 3, 45, 5, 78, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     console.log(sum);
// }

// 2
// let arr1 = [2, 3, 45, 5, 78, 3];
// let arr2 = [2, 3, 45, 5, 78, 3];
// let arr3 = arr1
// console.log(arr3 == arr1);

// 3
// function camelize(str) {
//     let myStr = str.split('-')
//     let a = myStr.map((value, index) => index !== 0 ? value[0].toUpperCase() + value.slice(1) : value)
//     console.log(a.join(''));
// }
// camelize('background-color')

// 4
let students = [
    { id: 1, engine: 1.2, name: 'Ilhom', year: 2003 },
    { id: 2, engine: 1.4, name: 'Islom', year: 1998 },
    { id: 3, engine: 1.6, name: 'Rustam', year: 2002 },
    { id: 4, engine: 1.8, name: 'Mirkomil', year: 2007 },
    { id: 5, engine: 1.1, name: 'Sulton', year: 2001 },
    { id: 6, engine: 2.2, name: 'Shahzod', year: 2012 },
    { id: 7, engine: 5.2, name: 'Hojiakbar', year: 2010 },
    { id: 8, engine: 3.2, name: 'Davron', year: 2005 },
    { id: 9, engine: 1.9, name: 'Ilhom', year: 2003 },
]

// let res = students.filter((value) => value.year > 2000);
let res = students.sort((a, b) => b.engine - a.engine)
console.log(res);
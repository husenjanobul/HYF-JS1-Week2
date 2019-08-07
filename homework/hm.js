// String 1. Consider the following string:
const myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
const newStr = myString.split(",");
console.log(newStr);
const strStr = newStr.join(' ');
console.log(strStr);
// or 
// myStr = myString.replace(/,/g, ' ');
// console.log(myStr);

// Sring 2.reverse
const str = 'dlroW olleH';
const arr = str.split('');
console.log(arr);
arr.reverse();
console.log(arr);
console.log(arr.join(''));

// Arrays  Consider the following array:
const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
 // new arry wil be ["blowfish", "capricorn", "giraffe","turtle"]
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"cat");
// new arry wil be ["blowfish","cat", "capricorn", "giraffe","turtle"]
console.log(favoriteAnimals);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);


// Operators 1.Consider the following snippet:
0 == '0'; // true
0 == [];  // true
"0" == [];  // false
// 0 == '0'; // both values are number  0 . ---true
// 0 == []; // 0 is number ,  if you coerce an empty array to a number, you get it's length - which is 0 --- true
//  "0" ==  []; //JavaScript cannot coerce them to the same type - and one is falsy the other is not.

// Operators 2
const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
// i think all is true--- 1 === 1 , 2 === 2 , 3 === 3 
// x == y --- true
// x === y --- true 
// z === y --- true
// z == x --- true
console.log(x == y); // false --why?
console.log(x === y);// false
console.log(z === y);// true 
console.log(z == x); // false


// Operators 3 
const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;
console.log(o3);
// i think o2 changes o3 --( o3 = o2 )  left side(o3) declare by right side(o2)
// o1 changes o3 
//but  i think the order is important--( o2 = o3 )  left side(o2) already declared 


// HYF-JS1-wee2-hm ( 8~10)
//8.1 & 8.2
let q= 3;
console.log("The value of my varaible q is: " + q);
let w = 'point';
console.log("The value of my varaible w is: " + w);
let e = ['car','computer'];
console.log("The value of my varaible e is: " + e);
let r = false;
console.log("The value of my varaible r is: " + r);

//8.3 the type of  variables 
console.log("the type of  q is: number " );
console.log("the type of  w is: string " );
console.log("the type of  e is: object " );
console.log("the type of  r is: boolean " );

//8.4  the type of  variables
console.log("the type of  q is: " + typeof(q));
console.log("the type of  w is: " + typeof(w));
console.log("the type of  e is: " + typeof(e));
console.log("the type of  r is: " + typeof(r));

//8.5 & 8.6
if( typeof(q) == typeof(w)){
    console.log("Same Type");
}else {
    console.log("Not the same type");
}

// 9 & 9.1
let p = 7;
p = p % 3; // the value p is 1;
console.log(p = p % 3);
let aa = 45;
console.log(aa = aa % 9);
var ss = 862;
console.log(ss = ss % 25);

// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
// yes. we can store multiple types in an array.
let yes = [32, 'letter'];
console.log(yes);
// 10.2 & 10.3
if(6/0 === 10/0){
    console.log(true);
}else{
    console.log(false);
}

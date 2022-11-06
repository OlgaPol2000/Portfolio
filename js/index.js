//  типи данних
//  1- string   "sting"
//  2- number  3463463
//  3- boolean - true / false
//  4- undefined
//  5- null
//  6- bigInt
//  7-sumbol
//

// var name = "Roman";
let name = "Roman";
const age = 12;
console.log(name, age);

name = "Olga";
console.log(name, age);

let color = "red";

// function hello(name) {
//   console.log("Hello ", name);
// }
// hello(name);

const hello = function (name) {
  // alert("Привіт:", name);
};

hello("Roman");

// Основна задача: при натисканні на кнопку меню,
//   у нас має відображатись меню, при повторному натисканні, має пропадати.
//
// 1-знайти кнопку, і записати її в константу
const menuBtn = document.querySelector(".menu");
// 2- оптрібно відловити взаємодію з кнопкою.

// menuBtn.addEventListener("click", () => {
//   console.log("Ми натиснули на кнопку!");
// });

// 3-знайти елемент з яким ми будем взаємодіяти
const navList = document.querySelector(".nav__list");
//
//
menuBtn.addEventListener("click", () => {
  // navList.classList.add("active"); classList.add - тільки додає клас
  // navList.classList.remove("active"); classList.remove - тільки забирає клас
  navList.classList.toggle("active");
});
//
//
console.log(navList);
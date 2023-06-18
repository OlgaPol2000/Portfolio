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
// let name = "Roman";
// const age = 12;
// console.log(name, age);

// name = "Olga";
// console.log(name, age);

// let color = "red";

// // function hello(name) {
// //   console.log("Hello ", name);
// // }
// // hello(name);

// const hello = function (name) {
//   // alert("Привіт:", name);
// };

// hello("Roman");

// // Основна задача: при натисканні на кнопку меню,
// //   у нас має відображатись меню, при повторному натисканні, має пропадати.
// //
// // 1-знайти кнопку, і записати її в константу
// const menuBtn = document.querySelector(".menu");
// // 2- оптрібно відловити взаємодію з кнопкою.

// // menuBtn.addEventListener("click", () => {
// //   console.log("Ми натиснули на кнопку!");
// // });

// // 3-знайти елемент з яким ми будем взаємодіяти
// const navList = document.querySelector(".nav__list");
// //
// //
// menuBtn.addEventListener("click", () => {
//   // navList.classList.add("active"); classList.add - тільки додає клас
//   // navList.classList.remove("active"); classList.remove - тільки забирає клас
//   navList.classList.toggle("active");
// });
// //
// //
// console.log(navList);

// const modalBtn = console.querySelector(".modal__btn")
// const modal = document.querySelector(".modal")
// const closeModal = document.querySelector(".close")

// modalBtn.addEventListener("click", () => {
//   modal.classList.add("modal__active")
// })

// modalBtn.addEventListener("click", () => {
//   modal.classList.remove("modal__active")
// })

fetch('').then(res => res.json)).then(posts)).catch(e => alert(e))
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = form.elements.name.value
  const phone = form.elements.phone.value
  const text = form.elements.text.value

  console.log'(
    'name', name,
    'phone', phone,
    'text', text
  )

  const TOKEN = ''
  constURI_API = ''
  const ID = ''
  axions.post(URI_API, {
    chat_id:ID
    pars_mode:'html',
    text: message
  }) .then(res => {
      console.log(res);
  })
  .catch(e => {
    console.log(e);
  })

  
  
  
//     const obj = {
//         name: "Vasia",
//         age: 14,
//         addres: "Shevchenka str",
//     };
//     console.log(obj.name); //Vasia
//     const strData = JSON.stringify(obj);
//     console.log(strData);
//     const parceData = JSON.parse(strData);
//     console.log(parceData);

// try{
//     const data = JSON.parse("well ");
// } catch (error) {
//     console.log(error);
// }

//localStorage.setItem(key, value); створює новий, або оновлює існуючий запис у сховищі
// localStorage.setItem(key) повертає зі сховища значення key
//localStorage.removeItem(key) видаляє дані зі сховища з ключем key
//localStorage.clear() очищую сховище
//localStorage.lenght - повертає цільність записів в сховищії.

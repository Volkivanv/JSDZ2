console.log('Этот текст из JS');
// const num = 123;
// console.log(`num = ${num}`);
// let a = 5;
// a = 7;
// console.log(`a = ${a}`);
// let b = 1 + 2 + 3;
// console.log(`b = ${b}`);
// //один вид комментариев
// /*Второй вид комментариев*/

// const c = 10;
// const d = 2;
// let sum = c + d;
// let sub = c - d;
// let prod = c*d;
// let quotient = c/d;
// console.log(`c = ${c}, d = ${d}, sum = ${sum}, sub = ${sub}, prod = ${quotient}`);
// console.log(`sum + sub + prod + quotient = ${sum + sub + prod + quotient}`);
// let a = 1.5;
// let b = 0.75;
// console.log(a+b);
// let a1 = 9;
// console.log(-a1);

// let java = 'java';
// let script = 'Script';
// console.log(java + script);

// const hello = 'Hello';
// const world = 'World';
// console.log(hello +' '+world);
// alert('Hello');
// prompt('input value', '30');
//confirm('Are you ready?');
// let userAnswer = prompt('Зимой и летом одним цветом');
// if(userAnswer === ''){
//     console.log('пустое значение');
// } else if(userAnswer == 'ель'){
//     alert('Молодец')
//  } else {
//     alert('Не угадал')
// }
// (userAnswer === 'ель') ? alert('молодец'): alert('не угадал'); 

// alert((userAnswer === 'ель') ? 'молодец': 'не угадал'); 

//1 - задание

// let myAge = prompt('Ваш возраст?');
// alert(`Возраст пользователя ${myAge} лет`);

// let myName = prompt('Имя пользователя');
// alert(`Имя пользователя ${myName}`);

//2 - задание
//2.1
// let a = 13;
// let b = 5;
// console.log(a % 5);

//2.2
// let a;
// alert(a); //undefined

//2.3
// alert('abc'*3); //NaN

//2.4
// alert(1/0); //infinity
// alert(-1/0); //-infinity
// alert('2'*'3'); //6

//3
//3.1
// let a = 13;
// let b = 5;
// console.log(a % 5);

//3.2
// let a = '2';
// let b = '3';
// alert(a+b);

//3.3
// let a = Number(prompt('Введите a'));
// let b = Number(prompt('Введите b'));
// console.log(`${a} + ${b} = ${a+b}`);
// console.log(`${a} - ${b} = ${a-b}`);
// console.log(`${a} * ${b} = ${a*b}`);
// console.log(`${a} / ${b} = ${a/b}`);
// console.log(`${a} % ${b} = ${a%b}`);

//4
// console.log(String(true)); //true
// console.log('a'+true); //atrue
// console.log(Number(true)); //1
// console.log(true + 1); //2
// console.log(true + true); //2
// console.log(true - true); //0
// console.log(String(true)+Number(true)); //true1

//5
//5.1
// let num = Number(prompt('Введите число'));
// if(num > 5){
//     alert("число больше 5");
// } else if (num < 5){
//     alert("число меньше 5");
// } else {
//     alert("Число = 5");
// }

//5.2
// let test1 = 6;
// let test2 = 6;
// alert((test1 === test2)? 'test1 = test2': 'test1 != test2');

//5.3
// let a = Number(prompt("введите первое число"));
// let b = Number(prompt("введите второе число"));
// alert((a > b)? b:a);

//5.4
// let a = Number(prompt("введите число"));
// if ((a > 0) && (a < 15)){
//     alert('Число в диапазоне от 0 до 15');
// } else {
//     alert('число не в диапазоне от 0 до 15');
// }

//Домашка
//Задание 1
// let num1 = Number(prompt('введите значение num1'));
// let num2 = Number(prompt('введите значение num2'));
// if((num1 <= 1)&&(num2 >= 3)){
//     alert("Условия выполнены");
// }else{
//     alert("условия не выполенены")
// }

//Задание 2
let test = true;
console.log(test ? '+++':'---');
//Задание 3
let day = 0;
if ((day >= 1)&&(day <= 10)){
    console.log('первая декада');
} else if ((day > 10)&&( day <=20)){
    console.log('вторая декада');
} else if ((day > 20)&&( day <=31)){
    console.log('третья декада');
} else {
    console.log('некорректное число');
}
let num = Number(prompt('Введите число'));
let units = num % 10;
let tens = Math.floor(num/10) % 10;
let hundreds = Math.floor(num/100);
console.log(`hundreds: ${hundreds}, tens: ${tens}, units: ${units}`);
// // Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
// const numbers = [3, 1, 13];
// numbers[1] = 10;
// console.log(numbers);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

// const strings = ["Hi", "Hello", "Good morning"];
// strings[3] = "Good night";
// console.log(strings);

// Створити скрипт який поверне суму всіх чисел в масиві.

// const prices = [15, 62, 49, 14, 23]
// let sum = 0;
// for (const plural of prices) {
//     sum += plural
// }
// console.log(sum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

// const numbers = [16, 32, 64, 128, 256];
// let number = 0;
// for (const number of numbers) {
//     console.log(number);
// }

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

// const strings = ["March", "April", "May", "June", "July"];
// for (const symbols of strings) {
//     if (symbols.length >= 5) {
//         console.log(symbols);
//     }
// }

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.


const numbers = [16,165,72,91,5,19,1,9,163,63];
let max=numbers[0];
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
        
        
    }
    
}
console.log(max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

// const numbers = [16, 165, 72, 91, 5, 19, 1, 9, 163, 63]
// for (const number of numbers) {
//     if (number % 2 === 0 ) {
//         console.log(number);
//     }
// }

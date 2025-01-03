// Написати функцію extractAfterSubstring,
// яка приймає два аргументи: рядок str і підрядок substr.
// Функція повинна повертати частину рядка, що йде після першого входження підрядка.
// Якщо підрядок не знайдено, функція повинна повертати порожній рядок.

// Приклади використання:
function extractAfterSubstring (str, substr) {
    const index = str.indexOf(substr)
    if (index===-1) {
        return "";       
    } else {
        return str.slice(index+substr.length)}
    
}
console.log(extractAfterSubstring('Hello, world!', 'world')) // "!"
console.log(extractAfterSubstring('Hello, world!', 'JavaScript')) // ""
console.log(extractAfterSubstring('Hello, world!', 'Hello')) // ", world!"

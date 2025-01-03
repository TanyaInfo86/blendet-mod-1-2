// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while

function removeCharacter(str, char) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== char) {
      newStr += str[i];
    }
  }
  return newStr;
}

// Приклади використання:
console.log(removeCharacter("Hello, world!", "o")); // "Hell, wrld!"
console.log(removeCharacter("JavaScript", "a")); // "JvScript"
console.log(removeCharacter("12345", "3")); // "1245"

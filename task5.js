// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

// Приклади використання:
function extractBetween(str, start, end) {
  const indexStart = str.indexOf(start);
  if (indexStart === -1) {
    return "";
  }
  const indexEnd = str.indexOf(end);
  if (indexEnd === -1) {
    return "";
  }
  return str.slice(indexStart + start.length, indexEnd);
}
console.log(extractBetween("Hello, [world]!", "[", "]")); // "world"
console.log(extractBetween("Hello, [world]!", "{", "}")); // ""
console.log(extractBetween("Hello, {world}!", "{", "}")); // "world"

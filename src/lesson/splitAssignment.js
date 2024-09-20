// ここにコードを書きながら確認しましょう！

// const array = ['one', 'two', 'three'];
// const [ hoge, fuga, piyo ] = array;

// console.log(hoge); // one
// console.log(fuga); // two
// console.log(piyo); // three

// function testFn() {
//   return ['Hello', 2022];
// }

// const [text, year] = testFn();
// console.log(text); // Hello
// console.log(year); // 2022

// const gizumo = {
//   name: 'Gizumo',
//   established: '2015年5月15日',
//   place: 'Shibuya',
// };

// // 分割代入
// const { name, established, place } = gizumo;

// console.log(name); // Gizumo
// console.log(established); // 2015年5月15日
// console.log(place); // Shibuya






// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [one, two, three] = arrayFn('JS');

console.log(three);

// 問題 2

function objectFn({ name }) {
  console.log(name);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);

// ここにコードを書きながら確認しましょう！

// const arrayA = [1, 2, 3, 4, 5];

// arrayA.forEach(val => console.log(val));

// arrayA.forEach((val, index, array) => {
  // console.log(val, index, array);
// });

// const arrayB = [2, 4, 6, 8, 10];

// const newArrayB = arrayB.map(val => val * 2);

// console.log(newArrayB);





// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

const newArray = array.map(array => {
  return {
    ...array,
    className: 'c-' + array.className
  };
});

console.log(newArray);
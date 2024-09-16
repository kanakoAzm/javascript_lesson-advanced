// ここにコードを書きながら確認しましょう！
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// console.log(...numbers);

// const numbers = [1, 2, 3, 4, 5];

// const copyNumbers = [...numbers];

// console.log(copyNumbers);

// const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers);


// const animal = ['cat', 'dog'];

// const mergeArray = [...numbers, ...animal];

// console.log(mergeArray);

const company = {
  name: 'Gizumo',
  place: 'Shibuya',
  established: '2015年5月15日',
};

// console.log(...company);

// const copy = {...company};

// console.log(copy);

// const newCompany = {...company, established: '2015年5月15日'};

// console.log(newCompany);

// const updateProperty = {
//   name: 'Front End',
// };

// const updateCompany = {...company, ...updateProperty};

// console.log(updateCompany);





// 練習問題
// 問題 1
const packageManager = ['npm', 'yarn', 'pnpm'];

function arrayFn(array) {
  const framework = ['Vue', 'React', 'Svelte'];
  return  [...array, ...framework];
}

console.log(arrayFn(packageManager));

// 問題 2
const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};

const objectB = {
  version: 3,
};

const updateObject = {...objectA, ...objectB, routingLibrary: 'Vue Router'};

console.log(updateObject);
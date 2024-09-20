// ここにコードを書きながら確認しましょう！

// console.log('1番目の処理');
// console.log('2番目の処理');
// console.log('3番目の処理');

// const promise = new Promise((resolve, reject) => {
//   // 非同期処理を書く
//   resolve('非同期が成功しました'); //PromiseStateをFulfilledに変更
// });

// promise.then(val => {
//   console.log(val);
// });

// console.log(promise);

// const promise = new Promise((resolve, reject) => {
//   reject('非同期が失敗しました');
// });

// promise.catch(err => {
//   console.log(err);
// });

// console.log(promise);






// 練習問題
// 問題 1

//関数returnPromiseを実行し、非同期処理の結果である「エラーが発生しました」をconsoleに出力してください。ただし、関数returnPromiseは編集しないこと。

const returnPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise()
  .catch(err => console.log(err))
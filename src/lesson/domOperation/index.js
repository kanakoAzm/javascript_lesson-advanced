import 'animate.css';

// ここにコードを書きながら確認しましょう！

// const title = document.getElementById('title');

// console.log(title);

// const button = document.querySelector('.button');

// console.log(button);

// const list = document.querySelectorAll('.card-type--mocha .menu li');

// console.log(list);


// animationボタンがクリックされたら、タイトルの「DOM Operation」が落下する

const title = document.getElementById('title');
const button = document.getElementById('button');

const cardA = document.querySelector('.card-type--mocha');
const cardB = document.querySelector('.card-type--yellow');

button.addEventListener('click', () => {
  // title要素にclassを追加(class名指定)
  title.classList.add('animate__hinge');
  // 2秒後に
  setTimeout(() => {
    // title要素のclassを削除(class名指定)
    title.classList.remove('animate__hinge');

    cardA.classList.add('card-animation');
    cardB.style.display = "block";
    cardB.classList.add('animate__fadeInUp');

  }, 2000);

    cardA.classList.remove('card-animation');
    cardB.classList.remove('animate__fadeInUp');
    
});



// const cardA = document.querySelector('card-type--mocha');
// const cardB = document.querySelector('card-type--yellow');

// cardA.addEventListener('', () => {
// title.classList.add('card-animation');
// });

// cardB.addEventListener('', () => {
//   title.classList.add('animate__fadeInUp');
// });



// const title = document.getElementById('title');
// const button = document.getElementById('button');
// const cardTypeMocha = document.getElementById('card-type--mocha');
// const cardTypeYellow = document.getElementById('card-type--yellow');
// button.addEventListener('click', () => {
//    // title要素に.animate__hingeクラスを付与
//    title.classList.add('animate__hinge');
//    // 2秒後にtitle要素から.animate__hingeクラスを削除
//    setTimeout(() => {
//      title.classList.remove('animate__hinge');
//    }, 2000);
//    cardTypeMocha.classList.add('card-animation');
//    cardTypeYellow.classList.add('animate__fadeInUp');
// });




// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑

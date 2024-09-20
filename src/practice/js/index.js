// 必要な関数をモジュールからインポートする
import axios from 'axios';

import { createErrorElement, createElements } from './createElement.js';
import { $axios } from './axiosHelper.js';

window.addEventListener('DOMContentLoaded', () => {
  // ここに処理を書いていく

  //list要素を取得
  const listElement = document.getElementById('list');

  $axios(`https://pokeapi.co/api/v2/pokemon/?limit=151`).then(response => {
    console.log(response);
    // API通信が成功した時の処理

    response.data.results.forEach(element => {
      console.log(element.url);

      const infoUrl = element.url;
    
      //ポケモンの詳細情報を取得
      $axios(infoUrl).then(response => {
        console.log(response);

      
        //ポケモンの画像URL
        const imgPath = response.data.sprites.other['official-artwork'].front_default;

          //ポケモン名の日本語訳を取得
          $axios(response.data.species.url).then(response => {
            console.log(response);
            // ポケモン名の日本語訳
            const characterName = response.data.names[0].name;

            //取得したポケモンの情報をもとに表示するHTML要素を作成
            const imgElement = `<div class="character"><img src="${imgPath}" width="475" height="475" alt="" class="character__img"></div>`;
            const nameElement = `<p class="character__name">${characterName}</p>`;

            console.log(imgElement);
            console.log(nameElement);

            
            const fragment = document.createElement('li');

            fragment.className = 'list-item';

            fragment.innerHTML = imgElement + nameElement;
            
            // 作成したHTML要素をDOMに反映
            listElement.appendChild(fragment);
          });
        }).catch(error => {
          // リクエストに失敗した場合はエラーメッセージを表示
          listElement.after(createErrorElement(error));
      });

    });

  }).catch(error => {
      listElement.after(createErrorElement(error));
      console.log(error);
  });

});
"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "https://media.gq-magazine.co.uk/photos/620a6a32610ac8bff62bef0f/1:1/w_809,h_809,c_limit/140222_DrS_02.jpg";
// avatar que eligió el usuario al registrarse
let userAvatar = '';

const imgElement = document.querySelector('img');

imgElement.src = userAvatar || DEFAULT_AVATAR;

console.log(!!userAvatar);
console.log(!!DEFAULT_AVATAR);
console.log(userAvatar || DEFAULT_AVATAR);




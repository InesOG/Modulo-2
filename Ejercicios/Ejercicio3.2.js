"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "https://media.gq-magazine.co.uk/photos/620a6a32610ac8bff62bef0f/1:1/w_809,h_809,c_limit/140222_DrS_02.jpg";
// avatar que eligió el usuario al registrarse
let userAvatar = 'https://imgtoolkit.culturebase.org/?color=FFFFFF&quality=8&ar_ratio=1.3&format=jpg&file=http%3A%2F%2Fdata.heimat.de%2Fpics%2F1%2F3%2F3%2Fe%2F1%2Fpic_1499785434_133e1466eb821d8434a3ab8c45599b77.jpeg&do=cropOut&width=1200&height=780';

const imgElement = document.querySelector('img');

imgElement.src = userAvatar || DEFAULT_AVATAR;





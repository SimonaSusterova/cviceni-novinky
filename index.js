const bodyElement = document.querySelector ("body");
bodyElement.style.backgroundColor = "#e9e9e9";

const newsElm = document.querySelector (".news");
newsElm.style.maxWidth = "60 rem";
newsElm.style.backgroundColor = "white";

const headingElm = document.querySelector ("h1");
headingElm.classList.add("news__title");
headingElm.textContent = "Aktuální novinky";


const firstPostElm = document.getElementById('zprava1');
firstPostElm.classList.add('post--main');


const lastPostImgElm = document.querySelector('#zprava3 img');
lastPostImgElm.src = 'images/zprava3-novy.jpg';
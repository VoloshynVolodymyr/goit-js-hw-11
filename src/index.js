import './css/styles.css';
import axios from 'axios';
import smoothScroll from './JS/smoothScroll';
import getMarkupfromRequest from './JS/getMarkupfromRequest'
import createLightBox from './JS/createLigthBox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
let lightBox;

let query = '';

const searchFormElem = document.querySelector('#search-form');
const btnLoadMore = document.querySelector('.load-more');
const btnSubmit = document.querySelector('.submit');
const boxGallery = document.querySelector('.gallery')
let currentPage = 1;
let success = true;

searchFormElem.addEventListener('submit', onFormSubmit);
function onFormSubmit(event){
    event.preventDefault();
    currentPage = 1;
    success = true;
    query = event.target.elements.searchQuery.value;
    boxGallery.innerHTML = '';
    getMarkupfromRequest(query, currentPage, success)
    .then((markup)=>{boxGallery.insertAdjacentHTML('beforeend', markup);
    if(markup!==""){
      btnLoadMore.classList.remove('load-more');
    btnSubmit.disabled = true;
    }
  else btnLoadMore.classList.add('load-more');
  lightBox = createLightBox();
  smoothScroll();
  success = false;
  })
  .catch(()=>{console.log("Mistake");}); 
}
 
searchFormElem.addEventListener('input', onFormInput);
function onFormInput(e){
  btnSubmit.disabled = false;
}
  
btnLoadMore.addEventListener('click', onbtnLoadMoreClick)
function onbtnLoadMoreClick(){
  currentPage = currentPage + 1;
  getMarkupfromRequest(query, currentPage, success).
  then((markup)=>{boxGallery.insertAdjacentHTML('beforeend', markup);
  lightBox.refresh();
  smoothScroll();
});

 }
 
 
 




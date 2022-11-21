import './css/styles.css';
import axios from 'axios';
import getMarkup from './JS/getMarkup';
import createLightBox from './JS/createLigthBox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


let query = '';

const searchFormElem = document.querySelector('#search-form');
const btnLoadMore = document.querySelector('.load-more');
const btnSubmit = document.querySelector('.submit');
const boxGallery = document.querySelector('.gallery')
let currentPage = 1;

searchFormElem.addEventListener('submit', onFormSubmit);
function onFormSubmit(event){
    event.preventDefault();
    currentPage = 1;
    query = event.target.elements.searchQuery.value;
    boxGallery.innerHTML = '';
    getMarkup(query, currentPage).
    then((markup)=>{boxGallery.insertAdjacentHTML('beforeend', markup);
    if(markup!==""){
      btnLoadMore.classList.remove('load-more');
    btnSubmit.disabled = true;
    }
  else btnLoadMore.classList.add('load-more');
  createLightBox();
  })
    
}
 
searchFormElem.addEventListener('input', onFormInput);
function onFormInput(e){
  btnSubmit.disabled = false;
}
  
btnLoadMore.addEventListener('click', onbtnLoadMoreClick)
function onbtnLoadMoreClick(){
  currentPage = currentPage + 1;
  getMarkup(query, currentPage).
  then((markup)=>{boxGallery.insertAdjacentHTML('beforeend', markup);
  createLightBox().refresh();
  createLightBox();});
 }
 
 
 




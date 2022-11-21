import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30807172-c123f2518b79ce33b2191dfa5';



export default function getMarkup(query, currentPage){
    let markup = '';
           const searchParams = new URLSearchParams({
            key: API_KEY,
            q:query,
            page:currentPage,
            per_page:12,
            image_type:"photo",
            orientation:"horizontal",
            safesearch: "true",
        })
        return axios.get(`${BASE_URL}?${searchParams}`).then(({data:{hits}}) =>{
            if (hits.length===0) {
                Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            return ""}
                hits.map(({webformatURL, largeImageURL, likes, views, comments, downloads, tags}) => 
        markup = markup + `<div class="photo-card">
        <a class="photo-link" href=${largeImageURL}>
        <img 
        class="photo-card-img" 
        src=${webformatURL} 
        alt=${tags} 
        loading="lazy" 
        />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes: ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${downloads}</b>
          </p>
        </div>
      </div>`)
     return markup;
    });
    
}
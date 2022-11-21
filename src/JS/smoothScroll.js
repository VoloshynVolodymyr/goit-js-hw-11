const boxGallery = document.querySelector('.gallery')
export default function smoothScroll() {
    const { height: cardHeight } = boxGallery.firstElementChild.getBoundingClientRect();
  console.log(boxGallery.firstElementChild.getBoundingClientRect());
    window.scrollBy({
      top: cardHeight*10,
      behavior: 'smooth',
    });
  }
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default function createLightBox(){
    let gallery = new SimpleLightbox(".gallery a", {
      navText: ["☚", "☛"],
      captions: true,
      captionsData: "alt",
      captionDelay: 250,
      widthRatio: 0.72,
    });
    return gallery;
   }
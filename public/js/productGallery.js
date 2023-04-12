const galleryItems = document.querySelectorAll('.carrousel-item');
const leftArrow = document.querySelector('#left-Arr');
const rightArrow = document.querySelector('#right-Arr');
const itemElement = document.querySelector('.mainImage');
const galleryElement = document.querySelector('.image-gallery');

console.log(galleryItems)

let currentIndex = 0;

leftArrow.addEventListener('click', () => {

    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    displayImage();
});

rightArrow.addEventListener('click', () => {

    currentIndex = (currentIndex + 1) % galleryItems.length;
    displayImage();
});


for (let element of galleryItems) {
    element.addEventListener('click', (onGalleryItemClick))

}

function displayImage() {
    
    for (let i = 0; i < galleryItems.length; i++) {
        if(i == currentIndex){
            itemElement.appendChild(galleryItems[i])
        } else{
            galleryElement.appendChild(galleryItems[i])
        }
    }
}

function onGalleryItemClick(evt){
    let itemCliked = evt.target
    for (let i = 0; i < galleryItems.length; i++){
        if(itemCliked == galleryItems[i]){
            currentIndex = i
        }
    }

    displayImage()
    console.log(evt.target)

}

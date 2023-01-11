
const carouselImages = document.querySelector(".carousel-images");
const carouselButtons =document.querySelectorAll(".carousel-btn");
const numberOfImages = document.querySelectorAll(" .carousel-images img").length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.id ==='prev') {
            if(imageIndex!==1){
                imageIndex--;
                translateX += 640;
            }
        }
        else{
            if(imageIndex !== numberOfImages-1){
                imageIndex++;
                translateX -= 640
            }
        }

        carouselImages.style.transform= `translateX(${translateX}px)`;
    })
})

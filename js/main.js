const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",    
];
let slideCount = 7;
if (slideCount > images.length) {
    slideCount = parseInt(images.length/2) + 1;
}

let slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');

let slideWidth = parseInt( (sliderWrapper.offsetWidth - 200) / (slideCount -1) ) + "px";
let slideWay = parseInt( sliderWrapper.offsetWidth / slideCount );


for (let i = 0; i < images.length; i++) {
    let slide = document.createElement('li');
    slide.classList.add('slide');
    slide.style.width = slideWidth;
    slide.style.height = slideWidth;  
    slide.innerHTML = '<div></div>'
    slide.firstElementChild.style.backgroundImage = `url('${images[i]}')`;
    slider.appendChild(slide);    
}

function moveRight(){
    let cloneSlide = slider.firstElementChild.cloneNode(true);
    // let pos = 0;
    // let move = () => {
    //     if (pos != slideWay ){
    //         slider.firstElementChild.style.marginLeft = "-" + pos + "px";
    //         pos++;
    //     } else clearInterval(timer);
        
    // }
    // let timer = setInterval( move, 3 );   
    
    slider.firstElementChild.style.marginLeft = "-" + slideWidth;
    slider.firstElementChild.remove();
    slider.appendChild(cloneSlide);
};

function moveLeft(){
    let cloneSlide = slider.lastElementChild.cloneNode(true);
    slider.lastElementChild.style.marginRight = slideWidth;
    slider.lastElementChild.remove();
    slider.insertAdjacentElement('afterBegin', cloneSlide);    
};

const nextButton = document.querySelector('#next');
// const nextButton = document.createElement('button');
// nextButton.textContent = "Next";
// sliderWrapper.insertAdjacentElement('afterEnd', nextButton);
nextButton.addEventListener('click', moveLeft);

const previousButton = document.querySelector('#previous');
// const previousButton = document.createElement('button');
// previousButton.textContent = "Previous";
// sliderWrapper.insertAdjacentElement('afterEnd', previousButton);
previousButton.addEventListener('click', moveRight);

slider.addEventListener('click', function() {
    console.log(event.target);
    console.log(this);
    console.log(event); 
    console.log(event.toElement);    
       
});
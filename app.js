let upBtn = document.querySelector('.up-button');
let downBtn =document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
let activeSliderIndex = 0;

sidebar.style.top = `-${(slidesCount-1)*100}vh`;
upBtn.addEventListener('click', function(){
changeSlide('up');
});
downBtn.addEventListener('click', function(){
changeSlide('down');
});
function changeSlide(direction){
if(direction==='up'){
    activeSliderIndex++;
    if(activeSliderIndex===slidesCount){
        activeSliderIndex = 0;
    }
}else if(direction==='down'){
    activeSliderIndex--;
    if(activeSliderIndex<0){
        activeSliderIndex = slidesCount-1;
    }
}

const height = container.clientHeight;

mainSlide.style.transform = `translateY(-${activeSliderIndex*height}px)`;
sidebar.style.transform = `translateY(${activeSliderIndex*height}px)`;
}
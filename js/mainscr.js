// Slider
const sliderImgs = document.querySelectorAll('.slider-list'),
      sliderWrp = document.querySelector('.section-slider__slider--img'),
      dots = document.querySelectorAll('.dot');

      let index = 0;
const activeSlide = (n) =>{
    for(slide of sliderImgs){
        slide.classList.remove('slider-list--active', 'fade', 'list-row-img' )
    }
    sliderImgs[n].classList.add('slider-list--active', 'fade', 'list-row-img');
}   
const activeDots = (n) =>{
    for(dot of dots){
        dot.classList.remove('active_dot')
    }
    dots[n].classList.add('active_dot');
}   
const nextSlide = () =>{
    if(index == sliderImgs.length - 1){
        index = 0;
        activeSlide(index);
        activeDots(index)
    }else{
        index++;
        activeSlide(index);
        activeDots(index);
    }
}
sliderWrp.addEventListener('click', nextSlide);
dots.forEach((item, indexDot) => {
    item.addEventListener('click', ()=>{
        clearInterval(sliderInterval);
        setInterval(nextSlide, 5000);
        index = indexDot;
        console.log(indexDot);
        for(dot of dots){
            dot.classList.remove('active_dot');
        }
        item.classList.add('active_dot');
        activeSlide(index);
    })
})
let sliderInterval = setInterval(nextSlide, 2500);
//Timer
const deadLine = '2022-01-28';

function getTimeRemaning(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}
function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`;
    } else 
    return num;
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds');
          timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock(){
        const t = getTimeRemaning(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0 ){
            clearInterval(timeInterval);
        }
    }
}
setClock('.timer-boxes', deadLine);
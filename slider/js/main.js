/*let slidesItem = document.querySelectorAll('.slide-item');//collection
let indContainer = document.querySelector('.indicators');
let btnPausePlay = document.querySelector('#pause-play');
let btnPrev = document.querySelector('#prev');
let btnNext = document.querySelector('#next');
let currentSlide = 0;
let playStatus = true;
let timeId = null;
let timerInterval = 1000;

const FA_PAUSE = '<i class="fas fa-pause"></i>';
const FA_PLAY = '<i class="fas fa-play"></i>';
const SPACE = ' ';
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';

let goToNextSlide = () => {
	goToSlide(currentSlide + 1);
}
let goToPrevSlide = () => {
	goToSlide(currentSlide - 1);
}

let goToSlide = (n) => {
	slidesItem[currentSlide].classList.toggle('active');
	currentSlide = (n + slidesItem.length) % slidesItem.length;
	slidesItem[currentSlide].classList.toggle('active');
};

let startSlider = () => timerId = setInterval(goToNextSlide, 3000);

let pauseSildeShow = () => {
	btnPausePlay.innerHTML = FA_PLAY;
	playStatus = !playStatus;
	clearInterval(timerId);
}

let playSlideShow = () => {
	btnPausePlay.innerHTML = FA_PAUSE;
	playStatus = !playStatus;
	startSlider();
}

let pausePlaySlideShow = () => playStatus ? pauseSildeShow() : playSlideShow();

let clickPrevBtn = () => {
	pauseSildeShow();
	goToPrevSlide();
}

let clickNextBtn = () => {
	pauseSildeShow();
	goToNextSlide();
}	

btnPausePlay.addEventListener('click', pausePlaySlideShow);
btnPrev.addEventListener('click', clickPrevBtn);
btnNext.addEventListener('click', clickNextBtn);

startSlider();

let clickIndicatorItem = () => {
	playSlideShow();
	goToSlide(+this.getAttribute('data-slide-to'));
}
let clickIndicatorItem = (e) => {
	let target = e.target;
	if(target.classList.contains('indicator-item')){
		pauseSildeShow();
		goToSlide(+target.getAttribute('data-slide-to'));
	}
}

indContainer.addEventListener('click', clickIndicatorItem);

/*for (let i = indicatorsItem.length; i--;) {
	indicatorsItem[i].addEventListener('click', clickIndicatorItem);
};

let keyControlsBtn = (e) => {
	if (e.key === SPACE) pausePlaySlideShow();
	if (e.key === LEFT_ARROW) clickPrevBtn();
	if (e.key === RIGHT_ARROW) clickNextBtn();
}

document.addEventListener('keydown', keyControlsBtn);*/


let slidesItem = document.querySelectorAll('.slide-item');
let indContainer = document.querySelector('.indicators');
let btnPausePlay = document.querySelector('#pause-play');
let btnPrev = document.querySelector('#prev');
let btnNext = document.querySelector('#next');
let currentSlide = 0;
let playStatus = true;
let timerId = null;
let timerInterval = 1000;

const FA_PAUSE = '<i class="fas fa-pause"></i>';
const FA_PLAY = '<i class="fas fa-play"></i>';
const SPACE = ' ';
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';

let goToSlide = (n) => {
    slidesItem[currentSlide].classList.toggle('active');
    currentSlide = (n + slidesItem.length) % slidesItem.length;
    slidesItem[currentSlide].classList.toggle('active');
};

let goToNextSlide = () => {
    goToSlide(currentSlide + 1);
};

let goToPrevSlide = () => {
    goToSlide(currentSlide - 1);
};

let startSlider = () => { timerId = setInterval(goToNextSlide, timerInterval); };

let pauseSlideShow = () => {
    btnPausePlay.innerHTML = FA_PLAY;
    playStatus = !playStatus;
    clearInterval(timerId);
};

let playSlideShow = () => {
    btnPausePlay.innerHTML = FA_PAUSE;
    playStatus = !playStatus;
    startSlider();
};

let pausePlaySlideShow = () => playStatus ? pauseSlideShow() : playSlideShow();

let clickPrevBtn = () => {
    pauseSlideShow();
    goToPrevSlide();
};

let clickNextBtn = () => {
    pauseSlideShow();
    goToNextSlide();
};

btnPausePlay.addEventListener('click', pausePlaySlideShow);
btnPrev.addEventListener('click', clickPrevBtn);
btnNext.addEventListener('click', clickNextBtn);

startSlider();

let clickIndicatorItem = (e) => {
    let target = e.target;

    if (target.classList.contains('indicator-item')) {
        pauseSlideShow();
        goToSlide(+target.getAttribute('data-slide-to'));
    }
};

indContainer.addEventListener('click', clickIndicatorItem);

let keyControlsBtn = (e) => {
    if (e.key === SPACE) pausePlaySlideShow();
    if (e.key === LEFT_ARROW) clickPrevBtn();
    if (e.key === RIGHT_ARROW) clickNextBtn();
};

document.addEventListener('keydown', keyControlsBtn);
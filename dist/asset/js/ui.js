gsap.registerPlugin(ScrollTrigger);
document.body.classList.add('noScroll');
document.querySelector('.main').classList.add('hidden');

// loading
function startLoader() {
    const counter = document.querySelector('.loaderContent__counter');
    let counterVal = 0;

    function updateCounter() {
        if(counterVal < 100) {
            const incre = Math.floor(Math.random() * 10) + 1;
            counterVal = Math.min(counterVal + incre, 100);
            counter.textContent = counterVal;

            const delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
        } else {
            finishLoader(); 
        }
    }
    updateCounter();
}

function finishLoader() {
    gsap.to('.loaderContent__counter', { opacity: 0, delay: 2.5, duration: 0.5 });
    gsap.to('.preLoader', { scale: 0.5, ease: 'power.inOut', duration: 0.5, delay: 1.5 });
    gsap.to('.preLoader__videoBox', { height: 0, ease: 'power.inOut', duration: 0.5, delay: 2, onComplete: showContent });
}

function showContent() {
    document.body.classList.remove('noScroll');
    document.querySelector('.main').classList.remove('hidden');
}

startLoader();

let textWrapper = document.querySelector('.loaderContent__portfolioTxt');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<p class='loaderContent__portfolioLetter'>$&</p>");

anime.timeline({ loop: false })
    .add({
        targets: '.loaderContent__portfolioLetter',
        translateY: [-100, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (el, i) => 30 * i
    })
    .add({
        targets: '.loaderContent__portfolioLetter',
        translateY: [0, 100],
        easing: 'easeOutExpo',
        duration: 3000,
        delay: (el, i) => 2000 + 30 * i
    });

gsap.to('.preLoader', {
    scale: 0.5,
    ease: 'power.inOut',
    duration: .5,
    delay: 4.5
})

gsap.to('.preLoader__videoBox', {
    height: 0,
    ease: 'power.inOut',
    duration: .5,
    delay: 4.75
})
// loading end
 
// nav scroll 이동
function fnMove(seq) {
    var elementId;
    if (typeof seq === 'string') {
        elementId = seq;
    } else if (seq instanceof HTMLElement) {
        elementId = seq.id;
    } else {
        console.error('Invalid argument: seq must be a string or an HTMLElement');
        return;
    }
    
    var offset = $("#" + elementId).offset().top;
    var pinOffSet = $('.pin-spacer').offset().top;
    if(seq == work) {
        $("html, body").animate({ scrollTop: pinOffSet }, 400);
    }else {
        $("html, body").animate({ scrollTop: offset }, 400);
    }
}


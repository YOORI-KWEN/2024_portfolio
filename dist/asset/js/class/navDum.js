// ================================================
// navDum
// ================================================

class NavScroll {
    constructor() {
      this.headerNavDum = document.querySelector('.header__navDum .header__navDumList');
      this.headerNavDumLinks = document.querySelectorAll('.header__navDum .header__navDumLink');
      this.pinSpacer = document.querySelector('.pin-spacer');
  
      this.initScrollTriggers();
    }
  
    initScrollTriggers() {
      ScrollTrigger.create({
        trigger: ".main",
        start: "top top",
        onEnter: () => {
          gsap.to(this.headerNavDum, {
            duration: 0.3,
            opacity: 1,
            y: '0',
          });
        },
        onLeaveBack: () => {
          gsap.to(this.headerNavDum, {
            duration: 0.3,
            opacity: 0,
            y: '120%',
          });
        }
      });
  
      ScrollTrigger.create({
        trigger: '.skill',
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(this.headerNavDum, {
            duration: 0.3,
            backgroundColor: 'white',
            color: 'black'
          });
          gsap.to(this.headerNavDumLinks, {
            duration: 0.3,
            color: 'black'
          });
        },
        onLeave: () => {
          gsap.to(this.headerNavDum, {
            duration: 0.3,
            backgroundColor: '',
            color: ''
          });
          gsap.to(this.headerNavDumLinks, {
            duration: 0.3,
            color: ''
          });
        },
        onEnterBack: () => {
          gsap.to(this.headerNavDum, {
            duration: 0.3,
            backgroundColor: 'white',
            color: 'black'
          });
          gsap.to(this.headerNavDumLinks, {
            duration: 0.3,
            color: 'black'
          });
        },
        onLeaveBack: () => {
          gsap.to(this.headerNavDum, {
            duration: 0.3,
            backgroundColor: '',
            color: ''
          });
          gsap.to(this.headerNavDumLinks, {
            duration: 0.3,
            color: ''
          });
        }
      });
    }
  
    fnMove(seq) {
      let elementId;
  
      if (typeof seq === 'string') {
        elementId = seq;
      } else if (seq instanceof HTMLElement) {
        elementId = seq.id;
      } else {
        console.error('Invalid argument: seq must be a string or an HTMLElement');
        return;
      }
  
      const offset = $("#" + elementId).offset().top;
      const pinOffset = this.pinSpacer.offsetTop;
  
      if (elementId === 'work') {
        this.scrollTo(pinOffset);
      } else {
        this.scrollTo(offset);
      }
    }
  
    scrollTo(offset) {
      $("html, body").animate({ scrollTop: offset }, 400);
    }
  }
  
  // PageController 클래스 인스턴스 생성
  const pageController = new PageController();
  
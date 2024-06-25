// ================================================
// index
// ================================================

class IndexTextAni {
    constructor() {
      this.tl = gsap.timeline();
      
      this.navLinks = document.querySelectorAll('.header__navLink');
      this.introTxts = document.querySelectorAll('.index__introTxt');
      this.introTit = document.querySelector('.index__introTit');
      this.aboutTxt = document.querySelector('.index__aboutTxt');
      this.aboutImg = document.querySelector('.index__aboutImg');
  
      this.init();
    }
  
    init() {
      this.setupNavLinksAni();
      this.setupIntroTxtsAni();
      this.setupIntroAni();
    }
  
    setupNavLinksAni() {
      gsap.to(this.navLinks, {
        duration: 0.5,
        y: "0%",
        opacity: 1,
        delay: 5,
        stagger: 0.2
      });
    }
  
    setupIntroTxtsAni() {
      gsap.to(this.introTxts, {
        duration: 1,
        css: { transform: 'translateY(0%)', opacity: 1 },
        delay: 4.5,
        stagger: 0.2
      });
    }
  
    setupIntroAni() {
      this.tl.to(this.introTit, {
        opacity: 0.05,
        duration: 1.5,
        delay: 5,
        ease: "power2.out"
      })
      .to(this.aboutTxt, {
        opacity: 1,
        duration: 1,
        delay: 0.001,
        y: 0,
        ease: "power2.out"
      })
      .to(this.aboutImg, {
        opacity: 1,
        duration: 1,
        delay: 0,
        y: 0,
        ease: "power2.out"
      });
    }
  }
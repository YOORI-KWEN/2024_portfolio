// ================================================
// Work
// ================================================

class WorkPinAni {
    constructor() {
        this.pinWrap = document.querySelector('.work__pinContent--reverse');
        this.work = document.querySelector('.work');
        this.workItems = document.querySelectorAll('.work__slideItem');
        
        //로딩이 끝난 후에 실행
        window.addEventListener('load', () => {
            this.init();
      })
    }
    init() {
        const pinWrapHeight = this.pinWrap.offsetHeight;
        const workWrapHeight = this.work.offsetHeight;
        const verticalScrollLength = pinWrapHeight - workWrapHeight;
    
      // ScrollTrigger 생성
        this.createBackgroundAni();
        this.createItemAni();

      // GSAP 애니메이션 설정
      gsap.to(".work__pinContent--forward", {
        scrollTrigger: {
          scrub: true,
          trigger: work,
          pin: true,
          start: "top top",
          end: () => `+=${verticalScrollLength}`,
      },
        y: -verticalScrollLength,
        ease: "none"
    });
  
      gsap.to(".work__pinContent--reverse", {
        scrollTrigger: {
          scrub: true,
          trigger: work,
          pin: true,
          start: "bottom bottom",
          end: () => `+=${verticalScrollLength}`,
      },
        y: verticalScrollLength,
        ease: "none"
    });
  }
    createBackgroundAni() {
        ScrollTrigger.create({
          trigger: work,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            gsap.to(this.work, {
            duration: 0.5,
            background: '#165BDC',
            ease: "power4.inOut"
        });
      },
    });
  }
  createItemAni() {
        ScrollTrigger.create({
          trigger: work,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            gsap.to(this.workItems, {
            duration: 0.7,
            delay: 0.35,
            opacity: '1',
            ease: "power4.inOut"
        });
      },
    });
  }
}
// ================================================
// skill
// ================================================

class SkillEffect {
    constructor() {
      this.skill = document.querySelector('.skill');
      this.skillTit = document.querySelector('.skill__stickyitem');
      this.stickyBar = document.querySelector('.skill__stickyBar');
      this.clients = document.querySelector('.skill__clients');
      this.rows = document.querySelectorAll('.skill__clientsRow');
  
      this.init();
    }
  
    init() {
      this.setupSkillSection();
      this.setupWorkSection();
      this.setupClientsAni();
    }
  
    setupSkillSection() {
      this.skillTit.style.opacity = '0';
  
      ScrollTrigger.create({
        trigger: this.skill,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(this.skill, {
            duration: 0.3,
            backgroundColor: 'black',
          });
        },
        onEnterBack: () => {
          gsap.to(this.skill, {
            duration: 0.3,
            backgroundColor: 'black',
          });
        },
      });
  
      ScrollTrigger.create({
        trigger: this.skill,
        start: "top 50%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(this.skillTit, {
            duration: 0.1,
            opacity: 1,
            autoAlpha: 1
          });
          this.stickyBar.classList.remove('off');
        },
        onEnterBack: () => {
          gsap.to(this.skillTit, {
            duration: 0.1,
            opacity: 1,
            autoAlpha: 1
          });
          this.stickyBar.classList.remove('off');
        },
        onLeaveBack: () => {
          gsap.to(this.skillTit, {
            duration: 0.1,
            opacity: 0,
            autoAlpha: 0
          });
        }
      });
  
      ScrollTrigger.create({
        trigger: this.skill,
        start: "top top",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(this.clients, {
            duration: 0.3,
            opacity: 1,
            autoAlpha: 1
          });
        },
      });
    }
  
    setupWorkSection() {
      ScrollTrigger.create({
        trigger: ".work",
        start: "top top",
        end: "bottom bottom",
        onEnter: () => {
          this.stickyBar.classList.add('off');
        },
        onEnterBack: () => {
          this.stickyBar.classList.remove('off');
        },
      });
    }
  
    setupClientsAni() {
      this.rows.forEach(row => {
        ScrollTrigger.create({
          trigger: row,
          start: () => `top+=${this.getStickyBarCenter() - 400} center`,
          end: () => `top+=${this.getStickyBarCenter() - 450} center`,
          scrub: true,
          duration: 1.5,
          onUpdate: (self) => {
            const progress = self.progress;
            const maxGap = window.innerWidth < 900 ? 7 : 15;
            const minGap = window.innerWidth < 900 ? 0.5 : 1;
            const currentGap = minGap + (maxGap - minGap) * progress;
            row.style.gap = `${currentGap}em`;
          }
        });
      });
    }
  
    getStickyBarCenter() {
      return this.stickyBar.offsetHeight + this.stickyBar.offsetHeight / 2;
    }
  }
  

  
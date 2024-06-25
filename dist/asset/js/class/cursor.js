// ================================================
// cursor
// ================================================

class Cursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.cursorScale = document.querySelectorAll('.cursor-scale');
        this.links = document.querySelectorAll('.header__navLink');
        this.allAnchors = document.querySelectorAll('a');
        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
    }
    init() {
        this.setupCursorMovement();
        this.setupLinkAnimations();
    }
    
    setupCursorMovement() {
        gsap.to({}, 0.016, {
          repeat: -1,
          onRepeat: () => {
            gsap.set(this.cursor, {
              css: {
                left: this.mouseX,
                top: this.mouseY,
              }
            });
          }
        });
    
        gsap.set(this.cursor, {
          xPercent: -50,
          yPercent: -50
        });
    
        window.addEventListener("mousemove", (e) => {
          gsap.to(this.cursor, {
            duration: 0.00001,
            x: e.clientX,
            y: e.clientY
          });
        });
      }
    
      setupLinkAnimations() {
        const linkAnimIn = () => {
          gsap.to(this.cursor, {
            duration: 0.3,
            scale: 1.8,
            css: { background: 'rgba(22, 91, 220, .9)', width: '100px', height: '100px' },
          });
          this.cursor.classList.add('on');
        };
    
        const linkAnimOut = () => {
          gsap.to(this.cursor, {
            duration: 0.3,
            scale: 1,
            css: { background: '#165BDC', width: '20px', height: '20px' },
          });
          this.cursor.classList.remove('on');
        };
    
        this.links.forEach(link => {
          link.addEventListener('mouseover', () => {
            linkAnimIn();
          });
          link.addEventListener('mouseout', () => {
            linkAnimOut();
          });
        });
    
        this.allAnchors.forEach(anchor => {
          anchor.addEventListener('mouseover', () => {
            linkAnimIn();
          });
          anchor.addEventListener('mouseout', () => {
            linkAnimOut();
          });
        });
      }
}
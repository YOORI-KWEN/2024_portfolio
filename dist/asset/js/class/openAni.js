//로딩애니메이션

class StartLoader {
    constructor(id) {
        this.loaderBox = $('#' + id);
        this.counter = $('.loading__counter');
        this.counterVal = 0;
        this.bindEvent();
    }
    bindEvent() {
        const $self = this;

        $self.updateCounter();
        $self.closeLoad()
    }
    updateCounter() {
        if (this.counterVal >= 100) {
            this.counterVal = 100;
            this.counter.text(this.counterVal);
            return;
        }
        this.counterVal += Math.floor(Math.random() * 10) + 1;

        if (this.counterVal > 100) {
            this.counterVal = 100;
        }
        this.counter.text(this.counterVal);
        const delay = Math.floor(Math.random() * 100) + 50;
        setTimeout(() => {
            this.updateCounter(); // updateCounter 함수 재귀 호출
            this.closeLoad(); // closeLoad 함수 호출
        }, delay);
    }
    closeLoad() {
        console.log(this.counterVal);
        if (this.counterVal >= 100) {
            this.loaderBox.css('display', 'none'); 
        }
    }
}

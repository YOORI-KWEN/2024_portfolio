// ================================================
// Modal
// ================================================

class Modal {
    constructor(id, option, swiperSelector, draggable) {
        this.openBtn = $("#" + id);
        this.$body = $("body");
        this.swiperSelector = swiperSelector;
        this.option = option;
        this.$draggable = draggable;
        this.$idx = this.openBtn.attr("data-list");
        this.$modal = $("#" + this.$idx);
        this.$cont = this.$modal.find("[data-js=popup__cont]");
        this.$dimm = this.$modal.find("[data-js=popup__dimmed]");
        this.$closeBtn = this.$modal.find("[data-js=popup__closeBtn]");
        this.$draggBtn = this.$modal.find("[data-js=popup__draggBtn]");

        this.swiper = this.$modal.find(".modalSwiper");

        if (this.swiper) {
            const modalSwiper = new ModalSwiper(this.swiperSelector);
            this.modalSwiper = modalSwiper;
        }

        this.bindEvent();
    }
    bindEvent() {
        const self = this;

        this.openBtn.off("click.Modal").on("click.Modal", function () {
            self.modalOpen();
            self.scrollDisable();
        });

        this.$dimm.off("click.Modal").on("click.Modal", function () {
            self.modalClose();
            self.scrollAble();
        });

        this.$closeBtn.off("click.Modal").on("click.Modal", function () {
            self.modalClose();
            self.scrollAble();
        });

        this.$draggBtn.off("touchend.Modal").on("touchend.Modal", function () {
            const conH = self.$cont.height();
            if (conH <= 380) {
                self.draggableUp();
            } else {
                self.draggableDown();
            }
        });
    }
    modalOpen() {
        this.$modal.addClass("popup__active");
        if (this.option == "ani") {
            setTimeout(() => this.$cont.addClass("active"), 300);
        }
        if (this.swiperSelector !== undefined) {
            this.swiperInit();
        }
    }
    modalClose() {
        if (this.option == "ani") {
            setTimeout(() => this.$cont.removeClass("active"), 300);
        }
        if (this.option == "ani") {
            setTimeout(() => this.$modal.removeClass("popup__active"), 600);
        } else {
            this.$modal.removeClass("popup__active");
        }
        if (this.swiperSelector !== undefined) {
            setTimeout(() => this.swiperDestory(), 700);
        }
    }
    scrollDisable() {
        this.$body.css("overflow", "hidden");
    }
    scrollAble() {
        this.$body.css("overflow", "");
    }
    // dragg modal
    draggableUp() {
        this.$cont.addClass("popup__cont--draggUp");
    }
    draggableDown() {
        this.$cont.removeClass("popup__cont--draggUp");
        this.modalClose();
    }
    //modal 열린 후 swiper init 실행
    swiperInit() {
        this.modalSwiper.init();
    }
    //modal 닫힐 때 swiper destory 실행
    swiperDestory() {
        this.modalSwiper.destroy();
        this.swiperInit();
    }
}

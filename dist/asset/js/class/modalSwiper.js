// ================================================
// ModalSwiper
// ================================================

class ModalSwiper {
    constructor(selecetor) {
        this.selecetor = $("." + selecetor);
        this.swiper = null;
    }
    init() {
        this.swiper = new Swiper(this.selecetor, {
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return (
                        '<span class="' +
                        className +
                        '">' +
                        '<img src="../../images/common/slide_pager_' +
                        (index + 1) +
                        '.png">' +
                        "</span>"
                    );
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            observer: true,
            observeParents: true,
        });
    }
    destroy() {
        if (this.swiper) {
            this.swiper.destroy(true, true);
            this.swiper = null;
        }
    }
}

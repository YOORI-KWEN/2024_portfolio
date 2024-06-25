// ================================================
// TabSwiper
// ================================================

function getTabSwiperOptions() {
    var options = {
        slidesPerView: "auto",
        paginationClickable: true,
        freeMode: true,
        loop: false,
    };

    return options;
}

const tabSwiperOptions = getTabSwiperOptions();

class TabSwiper {
    constructor(id) {
        this.$swiper = $("#" + id);
        this.$swiperItems = this.$swiper.find("[data-js=swiper__slideItem]");
        this.seleted();
    }
    seleted() {
        const self = this;

        this.$swiperItems.on("click", function (e) {
            const $target = $(e.target);
            self.$swiperItems.removeClass("selected");
            $target.addClass("selected");
        });
    }
}

// ================================================
// Tab
// ================================================
class Tab {
    constructor(id, option) {
        this.$tab = $("#" + id);
        this.$tabNav = this.$tab.children("[data-js=tab__nav]");
        this.$tabBtns = this.$tabNav.find("[data-js=tab__btn]");
        this.$tabCont = this.$tab.children("[data-js=tab__cont]");
        this.$tabPannals = this.$tabCont.find("[data-js=tab__pannal]");
        this.bindEvent();
    }

    bindEvent() {
        const self = this;

        this.$tabBtns.off("click.Tab").on("click.Tab", function (e) {
            const $target = $(e.target);
            const $listNum = $target.attr("data-list");
            self.tabClose();
            self.tabOpen({ $target, $listNum });
        });
    }
    tabOpen({ $target, $listNum }) {
        $target.addClass("active");
        this.$tabCont.find("#" + $listNum).addClass("active");
    }
    tabClose() {
        this.$tabBtns.removeClass("active");
        this.$tabPannals.removeClass("active");
    }
}

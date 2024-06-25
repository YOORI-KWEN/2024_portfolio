// ================================================
// accordion
// ================================================

class Accordion {
    constructor(id, option) {
        this.$accordion = $("#" + id);
        this.$accordionItem = this.$accordion.find("[data-js=accordionWrap__item]");
        this.$toggleBtns = this.$accordionItem.find("[data-js=accordionWrap__toggleBtn]");
        this.$pannals = this.$accordionItem.find("[data-js=accordionWrap__pannal]");
        this.$accordionArrows = this.$accordionItem.find("[data-js=accordionWrap__icoArrow]");

        this.bindEvent();
    }
    bindEvent() {
        const $self = this;

        this.$toggleBtns.off("click.Accordion").on("click.Accordion", function (e) {
            const $target = $(e.target);
            const $toggleBtn = $target.parents("[data-js=accordionWrap__toggleBtn]");
            const $parent = $target.parents("[data-js=accordionWrap__item]");
            const $pannal = $parent.find("[data-js=accordionWrap__pannal]");
            const $accordionArrow = $parent.find("[data-js=accordionWrap__icoArrow]");
            $self.toggle({ $toggleBtn, $pannal, $accordionArrow });
        });
    }
    toggle({ $toggleBtn, $pannal, $accordionArrow }) {
        if ($pannal.hasClass("active")) {
            $toggleBtn.attr("aria-expanded", "false");
            $pannal.removeClass("active");
            $accordionArrow.removeClass("active");
        } else {
            this.$toggleBtns.attr("aria-expanded", "false");
            this.$pannals.removeClass("active");
            this.$accordionArrows.removeClass("active");
            $toggleBtn.attr("aria-expanded", "true");
            $pannal.addClass("active");
            $accordionArrow.addClass("active");
        }
    }
}

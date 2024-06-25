// ================================================
// Tooltip
// ================================================

class Tooltip {
    constructor(id, option) {
        this.$openBtn = $("#" + id);
        this.$parent = this.$openBtn.parents("[data-list=tooltipWrap]");
        this.$listNum = this.$openBtn.attr("data-list");
        this.$tooltip = this.$parent.find("#" + this.$listNum);
        this.$tooltips = $("[data-js=tooltipWrap__popup]");
        this.$closeBtn = this.$tooltip.children().children("[data-js=tooltipWrap__closeBtn]");
        this.$positionTop = this.$openBtn.position().top + option;
        this.$body = this.$openBtn.parents("body");

        this.bindEvent();
    }
    bindEvent() {
        const $self = this;

        this.$openBtn.off("click.Tooltip").on("click.Tooltip", function () {
            $self.open();
        });
        this.$closeBtn.off("click.Tooltip").on("click.Tooltip", function () {
            $self.close();
        });

        this.$body.off("click.Tooltip").on("click.Tooltip", function (e) {
            const $target = $(e.target);
            const $parent = $target.parents("[data-js=tooltipWrap__popup]");
            $self.closeB({ $target, $parent });
        });
    }
    open() {
        this.$tooltip.addClass("active");
        this.$tooltip.css("top", this.$positionTop);
    }
    close() {
        this.$tooltip.removeClass("active");
    }
    closeB({ $target, $parent }) {
        if ($parent.length > 0) {
            return;
        } else if (
            $target.hasClass("tooltipWrap__openBtn") ||
            $target.hasClass("snsTooltipWrap__openBtn")
        ) {
            return;
        } else {
            this.$tooltips.removeClass("active");
        }
    }
}

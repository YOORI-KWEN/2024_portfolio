// ================================================
// checkbox
// ================================================

class Checkbox {
    constructor(id) {
        this.checkbox = $("#" + id);
        this.label = this.checkbox.find("[data-js=inputWrap__checkboxLabel--box]");
        this.input = this.checkbox.find("[data-js=inputWrap__checkboxInput--box]");
        this.bindEvent();
        
    }
    bindEvent() {
        const $self = this;
        this.label.off("click.Checkbox").on("click.Checkbox", function (e) {
            $self.toggle();
        });
    }
    toggle() {
        if (this.checkbox.hasClass("checked")) {
            this.checkbox.removeClass("checked");
        } else {
            this.checkbox.addClass("checked");
        }
    }
}

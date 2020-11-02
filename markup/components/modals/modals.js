(function() {
    class MenuAndCallbackForm {
        constructor(args) {
            //  state   0   -   hidden
            //  state   1   -   open
            //  state   2   -   open hover sand bg
            //  state   3   -   open form, hidden footer and menu
            //  state   4   -   open tnx, after 3000 ms hidden menu and form
            this.state = 0;
            this.timeout = false;
            this.modal = document.querySelector(".modal.callback");
            this.formModal = document.querySelector(".modal.send-form");
            this.button = document.querySelector(".header__menu-button");
            this.sandBg = document.querySelector(".callback__bot");
            this.sendRequesButton = document.querySelector(".callback__bot__callback-button");

            // menu button
            this.button.addEventListener("click", e => {
                this.routing("menuButton");
            });
            // sand bg
            // this.sandBg.addEventListener("mouseover", e => {
            //     this.routing("sandBgHover");
            // });
            // this.sandBg.addEventListener("mouseleave", e => {
            //     this.routing("sandBgHover");
            // });
            this.sendRequesButton.addEventListener("mouseover", e => {
                this.routing("sandBgHover");
            });
            this.sendRequesButton.addEventListener("mouseleave", e => {
                this.routing("sandBgHover");
            });
            this.sendRequesButton.addEventListener("click", e => {
                this.routing("sandBgClick");
            });

            this.form();
        }
        routing(target) {
            if (target === "menuButton") {
                if (document.querySelector(".modal.send-form").classList.contains("is-open")) {
                    this.formModal.classList.remove("is-tnx");
                    this.formModal.classList.remove("is-open");
                    this.button.classList.remove("is-open");
                    this.button.classList.remove("is-form-open");
                    document.querySelector(".is-header-fixed").classList.remove("is-header-fixed");
                    return;
                }
                if (this.state === 0) {
                    this.actions("open menu");
                    return;
                }
                if (this.state === 1) {
                    this.actions("hide menu");
                    return;
                }
                if (this.state === 3) {
                    this.actions("hide form");
                    return;
                }
            }
            if (target === "sandBgHover") {
                if (this.state === 1) {
                    this.actions("hover sand bg");
                    return;
                }
                if (this.state === 2) {
                    this.actions("leave sand bg");
                    return;
                }
            }
            if (target === "sandBgClick") {
                if (this.state == 1 || this.state == 2) {
                    this.actions("show form");
                    return;
                }
            }
        }
        actions(action) {
            if (action == "hide menu" || action == "hide form") {
                if (this.timeout != false) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.modal.style.visibility = "hidden";
                }, 2000);
                this.modal.classList.remove("is-disable-delay");
                this.modal.classList.remove("is-open");
                this.button.classList.remove("is-open");
                document.querySelector(".page__wrapper").classList.remove("is-header-fixed");
                this.state = 0;
            }
            if (action == "open menu") {
                if (this.timeout != false) clearTimeout(this.timeout);
                this.modal.style.visibility = "visible";
                this.modal.classList.add("is-open");
                this.button.classList.add("is-open");
                document.querySelector(".page__wrapper").classList.add("is-header-fixed");
                this.state = 1;
                this.timeout = setTimeout(() => {
                    this.modal.classList.add("is-disable-delay");
                }, 500);
            }
            if (action == "hover sand bg") {
                if (this.state != 1) return;
                if (window.innerWidth < 769) return;
                if (!this.modal.classList.contains("is-bot-hover")) this.modal.classList.add("is-bot-hover");
                this.state = 2;
            }
            if (action == "leave sand bg") {
                if (this.state != 2) return;
                if (this.modal.classList.contains("is-bot-hover")) this.modal.classList.remove("is-bot-hover");
                this.state = 1;
            }
            if (action == "show form") {
                this.formModal.classList.add("is-open");
                this.button.classList.add("is-form-open");
                this.state = 3;
            }
            if (action == "hide form") {
                this.formModal.classList.remove("is-tnx");
                this.formModal.classList.remove("is-open");
                this.button.classList.remove("is-form-open");
                this.state = 1;
            }
        }
        form() {
            // iPhone - {i} input tag mean 😙
            var iPhone = document.querySelector('.send-form input[name="phone"]');
            var iName = document.querySelector('.send-form input[name="name"]');
            var iRules = document.querySelector('.send-form input[name="rules"]');
            var iSubmit = document.querySelector(".send-form button.send-form__button");

            new IMask(iPhone, { mask: "+{7}(000)000-00-00" });

            iPhone.addEventListener("keyup", e => {
                checkValid();
                if (e.target.value.length == 16) e.target.classList.remove("is-error");
            });
            iName.addEventListener("keyup", e => {
                checkValid();
                if (e.target.value.length > 0) e.target.classList.remove("is-error");
            });
            iRules.addEventListener("change", e => {
                checkValid();
            });
            iSubmit.addEventListener("click", e => {
                e.preventDefault();
                checkValid();
                if (iPhone.value.length != 16) {
                    iPhone.classList.add("is-error");
                    return;
                }
                if (iName.value.length < 1) {
                    iName.classList.add("is-error");
                    return;
                }
                this.formModal.classList.add("is-tnx");
                setTimeout(() => {
                    this.actions("hide form");
                }, 3000);
            });

            function checkValid() {
                if (iPhone.value.length > 0 && iName.value.length > 0 && iRules.checked === true) {
                    iSubmit.disabled = false;
                } else {
                    iSubmit.disabled = true;
                }
            }
        }
    }
    window.instanceMenuCallback = new MenuAndCallbackForm();

    // hover bottom sand color footer in open menu
    // var bot = document.querySelector(".callback__bot");
    // var modal = document.querySelector(".modal.callback");
    // bot.addEventListener("mouseover", e => {
    //     if (!modal.classList.contains("is-bot-hover")) modal.classList.add("is-bot-hover");
    // });
    // bot.addEventListener("mouseout", e => {
    //     if (modal.classList.contains("is-bot-hover")) modal.classList.remove("is-bot-hover");
    // });
    // // event click open form for send request
    // var formOpenButton = document.querySelector(".callback__bot__callback-button");
    // formOpenButton.addEventListener("click", function() {
    //     modal.classList.remove("is-bot-hover");
    //     modal.classList.toggle("is-form-open");
    // });

    // // menu click events
    // var button = document.querySelector(".header__menu-button");
    // var modal = document.querySelector(".modal.callback");
    // var timeout;
    // button.addEventListener("click", function() {
    //     if (!modal.classList.contains("is-open")) {
    //         modal.style.visibility = "visible";
    //         clearTimeout(timeout);

    //     } else {
    //         timeout = setTimeout(function() {
    //             modal.style.visibility = "hidden";
    //         }, 2000);
    //     }
    //     button.classList.toggle("is-open");
    //     modal.classList.toggle("is-open");
    //     modal.classList.remove('is-form-open')
    // });
    // // input mask
    // var element = document.querySelector("[name='phone']");
    // var maskOptions = {
    //     mask: "+{7}(000)000-00-00"
    // };
    // var mask = new IMask(element, maskOptions);

    // input mask
})();
var flkty = new Flickity(".slider__top", {
    // groupCells: true,
    // groupCells: 3
    // pageDots: false,
    wrapAround: true,
    cellAlign: "left"
});
var flkty2 = new Flickity(".slider__bot", {
    // groupCells: true,
    // groupCells: 3
    // contain: true,
    asNavFor: ".slider__top",
    pageDots: false,
    wrapAround: true,
    cellAlign: "left"
});

var dots_wrapper = document.querySelector(".flickity-page-dots");

function updateStatus() {
    var cellNumber = flkty.selectedIndex + 1;
    dots_wrapper.innerHTML = "<span class='current'>" + (cellNumber < 10 ? "0" + cellNumber : cellNumber) + "</span><span class='length'>/" + flkty.slides.length + "</span>";
}
updateStatus();
flkty.on("select", updateStatus);

document.querySelector(".slider__close").addEventListener("click", function() {
    this.closest(".modal").classList.remove("is-open");
});

(function() {
    document.querySelector(".is-send-request .footer__contact-us__refs__item__link").addEventListener("click", function() {
        document.querySelector(".modal.send-form").classList.add("is-open");
        document.querySelector(".header__menu-button").classList.add("is-open");
        document.querySelector(".header__menu-button").classList.add("is-form-open");
        document.querySelector(".page__wrapper").classList.add("is-header-fixed");
    });
})();

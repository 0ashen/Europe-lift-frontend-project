if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
var links = document.querySelectorAll("[data-ajax-link]");
links.forEach(element => {
    element.addEventListener("click", function(e) {
        e.preventDefault();

        var linkActiveTag = document.querySelectorAll(".header__nav__list__item__link.is-active");
        if (linkActiveTag.length > 0) linkActiveTag[0].classList.remove("is-active");
        if (this.classList.contains("header__nav__list__item__link")) this.classList.add("is-active");

        loadSpinner.show();

        sendRequest(this.getAttribute("href"));
        setTimeout(function() {
            loadSpinner.hide();
            bgImages();
            startCaret();
        }, 2000);
        setTimeout(function() {
            document.querySelector("main").classList.add("is-show");
        }, 4000);
    });
});
function sendRequest(target) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", target, false);

    xhr.send();
    // window.location.pathname = target;
    // if (xhr.status != 200) {
    //     // console.log(xhr.status + ": " + xhr.statusText);
    // } else {
    //     // console.log(xhr);
    // }
    if (xhr.readyState == 4) {
        setTimeout(function() {
            var container = document.implementation.createHTMLDocument().documentElement;
            var wrapper = document.querySelector(".page__wrapper");
            container.innerHTML = xhr.responseText;
            document.title = xhr.pageTitle;
            window.history.pushState({ html: xhr.html, pageTitle: xhr.pageTitle }, "", target);
            document.querySelector("main").remove();
            var nodeList = container.querySelector("main");
            wrapper.insertBefore(nodeList, wrapper.querySelector(".header"));
            runCurrentScriptsPage();
        }, 1000);
    } else {
        alert("Что-то пошло не так!");
    }
}


//// FIRST ONLOAD EVENT
//////////////////////////
//////////////////////////
//////////////////////////
window.onload = function() {
    setCurrentLinkInHeaderMenuActiveClass();
    runCurrentScriptsPage();
    loadSpinner.hide();
    setTimeout(function() {
        document.querySelector("main").classList.add("is-show");
    }, 2000);
};

//// HELPERS
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// If in header menu have link which have link like current page link, thas link set class "is-active"
function setCurrentLinkInHeaderMenuActiveClass() {
    var linkTag = document.querySelectorAll('.header__nav__list__item__link[href="' + window.location.pathname + '"]');
    if (linkTag.length > 0) linkTag[0].classList.add("is-active");
}
// run java script which belongs to current page
function runCurrentScriptsPage() {
    for (let index = 0; index < pagesScripts.length; index++) {
        if (pagesScripts[index].urlTitle == getPageUrl()) {
            destroyOtherPagesScirpts();
            eval(pagesScripts[index].launchingCode);
            return;
        }
    }
}
// loadSpinner
class LoadSpinnerClass {
    constructor(args) {
        this.node = document.querySelector(".loadSpinner");
        this.iconAnimation = document.querySelector(".loadSpinner__icon");
        this.iconAnimation2 = document.querySelector(".loadSpinner__icon__el2");
        this.iconAnimation3 = document.querySelector(".loadSpinner__icon__el3");
        this.timeout = false;
    }
    hide() {
        this.node.classList.remove("is-show");
        if (this.timeout != false) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.node.style.visibility = "hidden";
            this.iconAnimation.style.animation = "none";
            this.iconAnimation2.style.animation = "none";
            this.iconAnimation3.style.animation = "none";
        }, 1500);
    }
    show() {
        if (this.timeout != false) clearTimeout(this.timeout);
        this.node.style.visibility = "visible";
        this.iconAnimation.style.animation = "loader 3s infinite ease-in-out";
        this.iconAnimation2.style.animation = "loader1 3s infinite ease-in-out";
        this.iconAnimation3.style.animation = "loader2 3s infinite ease-in-out";
        this.node.classList.add("is-show");
    }
}
var loadSpinner = new LoadSpinnerClass();

// destory others page scripts
function destroyOtherPagesScirpts() {
    window.instanceMenuCallback.actions("hide menu")
    window.instanceHome = null;
}
// get clear page url adress
var getPageUrl = function() {
    return window.location.pathname.slice(window.location.pathname.lastIndexOf("/"));
};

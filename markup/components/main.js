//////////////////////////////////////////////////
//************добавляем всем блокам с атрибутом data-background-image фоновое изображение ********//
//////////////////////////////////////////////////
function bgImages() {
    for (var elements = document.querySelectorAll("[data-background-image]"), i = 0; i < elements.length; i++) {
        elements[i].style.backgroundImage = "url(" + elements[i].getAttribute("data-background-image") + ")";
    }
    if (window.innerWidth > 768) {
        for (var elements = document.querySelectorAll("[data-background-image-without-mobille-768]"), i = 0; i < elements.length; i++) {
            elements[i].style.backgroundImage = "url(" + elements[i].getAttribute("data-background-image-without-mobille-768") + ")";
        }
    }
}
bgImages();
/////////////////////////////////////////////////////////////
function rotateImageObrabotchik(nameClass, wrapperNameClass) {
    var count = 30;
    var array = document.querySelectorAll(nameClass + "__wrapper");

    array.forEach(element => {
        element.addEventListener("mousemove", function(e) {
            var parent = e.target.closest(nameClass + "__wrapper");
            var offsetX = e.offsetX;
            var offsetY = e.offsetY;
            var parent_W = parent.clientWidth;
            var parent_H = parent.clientHeight;

            var light = e.target.closest(nameClass + "__wrapper").querySelector(nameClass + "__wrapper__canvas__img__light");
            var light_x = offsetX - parent_W / 2;
            var light_y = offsetY - parent_H / 2;
            light.style.transform = "translate(" + light_x + "px," + light_y + "px) scale(2)";
            light.style.opacity = "1";
            light.style.willChange = "transform";

            var img = e.target.closest(nameClass + "__wrapper").querySelector(nameClass + "__wrapper__canvas__img");
            var multiplier = 3;
            var img_x = (offsetX / (parent_W / 100) - 50).toFixed(3) / multiplier;
            var img_y = (offsetY / (parent_H / 100) - 50).toFixed(3) / multiplier;

            if (count > 0) count -= 3;

            if (count > 1) {
                img.style.transition = "transform 0." + count + "0s";
            } else {
                img.style.transition = "transform 0.0s";
            }

            img.style.transform = "perspective(1400px) rotateX(" + img_y + "deg) rotateY(" + -img_x + "deg) translate(-50%, -50%)";
            img.style.willChange = "transform";
        });
        element.addEventListener("mouseout", function(e) {
            count = 30;
            var img = e.target.closest(nameClass + "__wrapper").querySelector(nameClass + "__wrapper__canvas__img");
            img.style.transition = "transform 1s";
            img.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) translate(-50%, -50%)";

            var light = e.target.closest(nameClass + "__wrapper").querySelector(nameClass + "__wrapper__canvas__img__light");
            light.style.opacity = "0";
        });
    });
    var itemsArray = document.querySelectorAll(nameClass);
    var timeout = false;

    document.addEventListener(
        "scroll",
        function(e) {
            var wrapper = document.querySelector(wrapperNameClass).classList;
            if (timeout != false) clearTimeout(timeout);

            if (!wrapper.contains("is-scrolled")) wrapper.add("is-scrolled");
            timeout = setTimeout(() => {
                document.querySelector(wrapperNameClass).classList.remove("is-scrolled");
            }, 100);
        },
        false
    );
}
///////////////////////////////////////////////////////////////////////////////////////////////
function startCaret() {
    document.addEventListener("scroll", function() {
        customCaretScroll();
    });
    customCaretScroll();
}

function customCaretScroll() {
    if (document.querySelectorAll(".scroll-indicator__caret").length < 1) return;
    var currentScrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollDistance = document.body.clientHeight - window.innerHeight;
    var percentScroll = currentScrollPos / (scrollDistance / 100);
    document.querySelector(".scroll-indicator__caret").style.top = percentScroll + "%";
}

/////////////////////////////////////////////////////////////

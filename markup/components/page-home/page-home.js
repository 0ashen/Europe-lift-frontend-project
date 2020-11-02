class Home {
    constructor(args) {
        this.LENGTH = document.querySelectorAll(".home__back-slider .home__back-slider__item").length;
        this.CURRENT = 1;

        this.TIME = {
            clickTime: 0,
            REPEAT_TIME: 1300
        };

        document.querySelector(".home__arrows__top").addEventListener("click", () => this.router("next"));
        document.querySelector(".home__arrows__bot").addEventListener("click", () => this.router("prev"));
        document.querySelectorAll(".home__counter__item").forEach(element => {
            element.addEventListener("click", e => {
                if (e.target.getAttribute("data-num") == this.CURRENT) return;
                if (e.target.classList.contains("is-bot")) this.router("prev");
                if (e.target.classList.contains("is-top")) this.router("next");
            });
        });
        document.body.addEventListener("wheel", e => {
            if (e.deltaY < 0) this.router("next");
            if (e.deltaY > 0) this.router("prev");
        });
        document.onkeydown = e => {
            e = e || window.event;

            if (e.keyCode == "37" || e.keyCode == "38") {
                //left
                this.router("next");
                return;
            }
            if (e.keyCode == "39" || e.keyCode == "40") {
                //right
                this.router("prev");
                return;
            }
        };
        this.touchSwipe();
    }
    router(direction) {
        if (getPageUrl() != "/page-home.html") return;

        if (new Date().getTime() - this.TIME.clickTime < this.TIME.REPEAT_TIME) return;
        this.TIME.clickTime = new Date().getTime();

        if (direction == "next") this.CURRENT--;
        if (direction == "prev") this.CURRENT++;
        if (this.CURRENT > this.LENGTH) this.CURRENT = 1;
        if (this.CURRENT < 1) this.CURRENT = this.LENGTH;

        this.update();
    }
    backgroundSlider(number = this.CURRENT) {
        var backgroundSlider = document.querySelector(".home__back-slider");
        var currentSlide = backgroundSlider.querySelectorAll(".home__back-slider__item")[number - 1].classList;
        if (backgroundSlider.querySelectorAll(".is-current").length > 0) {
            var hiddenItem = backgroundSlider.querySelector(".is-current").classList;
            hiddenItem.add("is-hidding");
            hiddenItem.remove("is-current");
        }
        if (currentSlide.contains("is-hidding")) currentSlide.remove("is-hidding");
        setTimeout(function() {
            currentSlide.add("is-current");
        }, 10);
    }
    frontSlider(number = this.CURRENT) {
        var frontSlider = document.querySelector(".home__front-slider");
        var currentSlide = frontSlider.querySelectorAll(".home__front-slider__item")[number - 1];

        if (frontSlider.querySelectorAll(".home__front-slider__item.is-hidding").length > 0) {
            frontSlider.querySelectorAll(".home__front-slider__item.is-hidding").forEach(element => {
                element.classList.remove("is-hidding");
            });
        }
        if (frontSlider.querySelectorAll(".is-current").length > 0) {
            var hiddenItem = frontSlider.querySelector(".is-current").classList;
            hiddenItem.add("is-hidding");
            hiddenItem.remove("is-current");
        }
        setTimeout(function() {
            currentSlide.classList.add("is-current");
        }, 16);
    }
    descritpionSlider(number = this.CURRENT) {
        var textWrappers = document.querySelectorAll(".home__caption__thin, .home__caption__bold, .home__caption__description");
        textWrappers.forEach(element => {
            var currentSlide = element.querySelectorAll("div")[number - 1].classList;
            if (element.querySelectorAll(".is-current").length > 0) {
                var hiddenItem = element.querySelectorAll(".is-current")[0].classList;
                hiddenItem.add("is-hidding");
                hiddenItem.remove("is-current");
            }

            if (currentSlide.contains("is-hidding")) currentSlide.remove("is-hidding");
            setTimeout(function() {
                currentSlide.add("is-current");
            }, 10);
        });
    }
    carouselSlider(number = this.CURRENT) {
        var wrapper = document.querySelector(".home__counter");
        var items = wrapper.querySelectorAll(".home__counter__item");
        var curMid = wrapper.querySelector(".home__counter__item.is-mid");
        var curBot = wrapper.querySelector(".home__counter__item.is-bot");
        var curTop = wrapper.querySelector(".home__counter__item.is-top");
        var curNum = curMid.getAttribute("data-num");

        if (number == curNum) return;

        if (number == 1 && curNum == this.LENGTH) {
            curMid.classList.add("is-top");
            curMid.classList.remove("is-mid");

            curBot.classList.add("is-mid");
            curBot.classList.remove("is-bot");

            curTop.classList.remove("is-top");
            curTop.setAttribute("style", "transform: translateY(80px) scale(0.5); opacity: 0.5; transition:none");
            setTimeout(() => {
                curTop.removeAttribute("style");
                curTop.classList.add("is-bot");
            }, 16);
            return;
        }
        if (number == this.LENGTH && curNum == 1) {
            curTop.classList.add("is-mid");
            curTop.classList.remove("is-top");

            curMid.classList.add("is-bot");
            curMid.classList.remove("is-mid");

            curBot.classList.remove("is-bot");
            curBot.setAttribute("style", "transform: translateY(-160px) scale(0.5); opacity: 0.5; transition:none");
            setTimeout(() => {
                curBot.removeAttribute("style");
                curBot.classList.add("is-top");
            }, 16);
            return;
        }
        if (number > curNum) {
            curBot.classList.add("is-mid");
            curBot.classList.remove("is-bot");

            curMid.classList.add("is-top");
            curMid.classList.remove("is-mid");

            curTop.classList.remove("is-top");
            curTop.setAttribute("style", "transform: translateY(80px) scale(0.5); opacity: 0.5; transition:none");
            setTimeout(() => {
                curTop.removeAttribute("style");
                curTop.classList.add("is-bot");
            }, 16);
        } else {
            curTop.classList.add("is-mid");
            curTop.classList.remove("is-top");

            curMid.classList.add("is-bot");
            curMid.classList.remove("is-mid");

            curBot.classList.remove("is-bot");
            curBot.setAttribute("style", "transform: translateY(-160px) scale(0.5); opacity: 0.5; transition:none");
            setTimeout(() => {
                curBot.removeAttribute("style");
                curBot.classList.add("is-top");
            }, 16);
        }
    }
    replaceLink() {
        var link = document.querySelector(".home__caption__link");
        if (this.CURRENT == 1) link.setAttribute("href", "/page-basic-line.html");
        if (this.CURRENT == 2) link.setAttribute("href", "/page-g-line.html");
        if (this.CURRENT == 3) link.setAttribute("href", "/page-d-line.html");
    }
    update() {
        if (window.innerWidth > 768) this.backgroundSlider();

        this.descritpionSlider();
        this.frontSlider();
        this.carouselSlider();
        this.replaceLink();
    }
    touchSwipe() {
        // credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
        function swipedetect(el, callback) {
            var touchsurface = el,
                swipedir,
                startX,
                startY,
                distX,
                distY,
                threshold = 150, //required min distance traveled to be considered swipe
                restraint = 100, // maximum distance allowed at the same time in perpendicular direction
                allowedTime = 300, // maximum time allowed to travel that distance
                elapsedTime,
                startTime,
                dist,
                handleswipe = callback || function(swipedir) {};

            touchsurface.addEventListener(
                "touchstart",
                function(e) {
                    if (e.target == document.querySelector(".home__caption__link.guid__btn--t1")) {
                        return;
                    } else {
                        var touchobj = e.changedTouches[0];
                        swipedir = "none";
                        dist = 0;
                        startX = touchobj.pageX;
                        startY = touchobj.pageY;
                        startTime = new Date().getTime(); // record time when finger first makes contact with surface
                        e.preventDefault();
                    }
                },
                false
            );

            touchsurface.addEventListener(
                "touchmove",
                function(e) {

                    e.preventDefault(); // prevent scrolling when inside DIV
                },
                false
            );

            touchsurface.addEventListener(
                "touchend",
                function(e) {
                    if (e.target == document.querySelector(".home__caption__link.guid__btn--t1")) {
                        return;
                    } else {
                        var touchobj = e.changedTouches[0];
                        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
                        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
                        elapsedTime = new Date().getTime() - startTime; // get time elapsed

                        if (elapsedTime <= allowedTime) {
                            // first condition for awipe met
                            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                                // 2nd condition for horizontal swipe met
                                swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
                            } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                                // 2nd condition for vertical swipe met
                                swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
                            }
                        }
                        handleswipe(swipedir);
                        e.preventDefault();
                    }
                },
                false
            );
        }

        //USAGE:

        if (document.querySelectorAll(".home").length > 0) {
            var el = document.querySelector(".home");
            swipedetect(el, function(swipedir) {
                if (swipedir == "left") {
                    instanceHome.router("prev");
                    return;
                }

                instanceHome.router("next");
            });
        }
    }
}

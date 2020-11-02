var pagesScripts = [];
pagesScripts.push(
    {
        urlTitle: "/page-contacts.html",
        launchingCode: `
            var script_tag = document.createElement('script');
            script_tag.setAttribute("type","text/javascript");
            script_tag.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=&callback=initContactsPageGoogleMap");
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
        if (document.querySelectorAll(".contacts__body__send-request").length > 0) {
            document.querySelector(".contacts__body__send-request").addEventListener("click", function() {
                document.querySelector(".modal.send-form").classList.add('is-open');
                document.querySelector(".header__menu-button").classList.add("is-open");
                document.querySelector(".header__menu-button").classList.add("is-form-open");
                document.querySelector(".page__wrapper").classList.add("is-header-fixed");
            });
        }`
    },
    {
        urlTitle: "/page-ideas.html",
        launchingCode: 'rotateImageObrabotchik(".ideas__item", ".ideas"); startCaret();'
    },
    {
        urlTitle: "/page-works.html",
        launchingCode: ` rotateImageObrabotchik(".works__item", ".works"); startCaret();`
    },
    {
        urlTitle: "/page-about.html",
        launchingCode: `var screensArray = document.querySelectorAll(".about__s1, .about__s2, .about__s3,.about__s4");
                    document.addEventListener("scroll", function(e) {
                        checkPosition();
                    });
                    checkPosition()
                    function checkPosition() {
                        for (let index = 0; index < screensArray.length; index++) {
                            if (screensArray[index].getBoundingClientRect().top < (window.innerHeight / 100) * 80 && !screensArray[index].classList.contains("is-show")) screensArray[index].classList.add("is-show");
                        }
                    }`
    },
    {
        urlTitle: "/page-home.html",
        launchingCode: `window.instanceHome = new Home();`
    },
    {
        urlTitle: "/page-g-line.html",
        launchingCode: `
        (function() {
            //if (window.innerWidth < 769) {
               // return;
            //}
            var controller = new ScrollMagic.Controller({ vertical: true });
            // build tween
            var wW = window.innerWidth;

            var tween = new TimelineMax().add([
                TweenMax.fromTo(".g-line__s2__wrapper", 1, { y: wW < 1366 ? 35:75 }, { y: wW < 1366 ? -35:-75 }),
                TweenMax.fromTo(".g-line__s3__bg1", 1, { y: wW < 1366 ? 100:200  }, { y: wW < 1366 ? -100:-200 }),
                TweenMax.fromTo(".g-line__s3__bg2", 1, { y:  wW < 1366 ? 300:600}, { y: wW < 1366 ? -100:-200 }),
                TweenMax.fromTo(".g-line__s4__wrapper", 1, { y:  wW < 1366 ? 250:500 }, { y: 0 })
            ]);
            // build scene
            var scene = new ScrollMagic.Scene({ triggerElement: ".g-line__s2", duration: window.innerHeight }).setTween(tween).addTo(controller);

            var screensArray = document.querySelectorAll(".g-line__s1, .g-line__s2, .g-line__s3, .g-line__s4, .arg_1, .arg_2, .arg_3");
            document.addEventListener("scroll", function(e) {
                checkPosition();
            });
            checkPosition();
            function checkPosition() {
                for (let index = 0; index < screensArray.length; index++) {
                    if (screensArray[index].getBoundingClientRect().top < (window.innerHeight / 100) * 70 && !screensArray[index].classList.contains("is-show")) screensArray[index].classList.add("is-show");
                }
            }
        })();
        `
    },
    {
        urlTitle: "/page-basic-line.html",
        launchingCode: `
        (function() {
            //if (window.innerWidth < 769) {
               // return;
           // }
            var controller = new ScrollMagic.Controller({ vertical: true });
            // build tween
            var wW = window.innerWidth;

            var tween = new TimelineMax().add([
                TweenMax.fromTo(".basic-line__s2__wrapper", 1, { y: wW < 1366 ? 50:100 }, { y: wW < 1366 ? -50:-100 })
            ]);
            var twee2 = new TimelineMax().add([
                TweenMax.fromTo(".basic-line__s3__wrapper", 1, { y: wW < 1366 ? 50:100 }, { y: wW < 1366 ? -50:-100 })
            ]);
            // build scene
            var scene = new ScrollMagic.Scene({ triggerElement: ".basic-line__s2", duration: window.innerHeight }).setTween(tween).addTo(controller);
            var scene2 = new ScrollMagic.Scene({ triggerElement: ".basic-line__s3", duration: window.innerHeight }).setTween(twee2).addTo(controller);

            var screensArray = document.querySelectorAll(".basic-line__s1, .basic-line__s2, .basic-line__s3, .basic-line__s4");
            document.addEventListener("scroll", function(e) {
                checkPosition();
            });
            checkPosition();
            function checkPosition() {
                for (let index = 0; index < screensArray.length; index++) {
                    if (screensArray[index].getBoundingClientRect().top < (window.innerHeight / 100) * 70 && !screensArray[index].classList.contains("is-show")) screensArray[index].classList.add("is-show");
                }
            }
        })();

        `
    },
    {
        urlTitle: "/page-d-line.html",
        launchingCode: `
        (function() {
            //if (window.innerWidth < 769) {
             //   return;
            //}
            var controller = new ScrollMagic.Controller({ vertical: true });
            // build tween
            var wW = window.innerWidth;

            var tween = new TimelineMax().add([
                TweenMax.fromTo(".d-line__s2__wrapper", 1, { y: wW < 1366 ? 50:100 }, { y: wW < 1366 ? -50:-100 }),
            ]);
            var tween2 = new TimelineMax().add([
                TweenMax.fromTo(".d-line__s3__bg1", 1, { y: wW < 1366 ? 50:100 }, { y: wW < 1366 ? -50:-100 }),
                TweenMax.fromTo(".d-line__s3__bg2", 1, { y: wW < 1366 ? 50:100 }, { y: wW < 1366 ? -50:-100 })
            ]);
            var tween3 = new TimelineMax().add([
                TweenMax.fromTo(".d-line__s4__wrapper", 1, { y: wW < 1366 ? 50:100 }, { y: wW < 1366 ? -50:-100 }),
            ]);
            // build scene
            var scene = new ScrollMagic.Scene({ triggerElement: ".d-line__s2", duration: window.innerHeight }).setTween(tween).addTo(controller);
            var scene2 = new ScrollMagic.Scene({ triggerElement: ".d-line__s3", duration: window.innerHeight }).setTween(tween2).addTo(controller);
            var scene3 = new ScrollMagic.Scene({ triggerElement: ".d-line__s4", duration: window.innerHeight }).setTween(tween3).addTo(controller);

            var screensArray = document.querySelectorAll(".d-line__s1, .d-line__s2, .d-line__s3, .d-line__s4");
            document.addEventListener("scroll", function(e) {
                checkPosition();
            });
            checkPosition();
            function checkPosition() {
                for (let index = 0; index < screensArray.length; index++) {
                    if (screensArray[index].getBoundingClientRect().top < (window.innerHeight / 100) * 70 && !screensArray[index].classList.contains("is-show")) screensArray[index].classList.add("is-show");
                }
            }
        })();

        `
    },
    {
        urlTitle: "/page-tech-doc.html",
        launchingCode: `
        (function() {
            // (window.innerWidth < 769) {
            //    return;
           // }
            var controller = new ScrollMagic.Controller({ vertical: true });
            // build tween
            var wW = window.innerWidth;

            var tween = new TimelineMax().add([
                TweenMax.fromTo(".tech-doc__bg", 1, { y: wW < 1366 ? 500:1000 }, { y: wW < 1366 ? -150:50 }),
            ]);
            // // build scene
            var scene = new ScrollMagic.Scene({ triggerElement: ".tech-doc", duration: window.innerHeight }).setTween(tween).addTo(controller);

            var screensArray = document.querySelectorAll(".d-line__s1, .d-line__s2, .d-line__s3, .d-line__s4");
            function checkPosition() {
                for (let index = 0; index < screensArray.length; index++) {
                    if (screensArray[index].getBoundingClientRect().top < (window.innerHeight / 100) * 70 && !screensArray[index].classList.contains("is-show")) screensArray[index].classList.add("is-show");
                }
            }
            checkPosition();
        })();

        `
    }
);

/* =========================================================
   GOKAP TECHNOLOGIES
   PREMIUM INTERACTIVE WEBSITE
========================================================= */


/* =========================================================
   01 — WAIT FOR PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    initCursor();

    initMobileMenu();

    initHeroAnimation();

    initHeroMouseEffect();

    initScrollAnimations();

    initProjectHover();

    initServiceHover();

    initTechnologyAnimation();

    initSmoothLinks();

});



/* =========================================================
   02 — PAGE LOADER
========================================================= */

function initLoader() {

    const loader = document.querySelector(".page-loader");

    const loaderLine =
        document.querySelector(".loader-line span");


    if (!loader) return;


    /*
        Loader progress
    */

    if (loaderLine) {

        gsap.to(loaderLine, {

            width: "100%",

            duration: 1.6,

            ease: "power2.inOut"

        });

    }


    /*
        Hide loader
    */

    gsap.to(loader, {

        delay: 1.8,

        yPercent: -100,

        duration: 1.2,

        ease: "power4.inOut",

        onComplete: () => {

            loader.style.display = "none";

        }

    });

}



/* =========================================================
   03 — CUSTOM CURSOR
========================================================= */

function initCursor() {

    /*
        Don't use custom cursor on mobile.
    */

    if (window.innerWidth <= 700) return;


    const cursor =
        document.querySelector(".cursor");

    const follower =
        document.querySelector(".cursor-follower");


    if (!cursor || !follower) return;


    let mouseX = window.innerWidth / 2;

    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;

    let followerY = mouseY;


    /*
        Mouse position
    */

    window.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;

        mouseY = event.clientY;


        gsap.to(cursor, {

            x: mouseX,

            y: mouseY,

            duration: 0.05,

            ease: "none"

        });

    });


    /*
        Smooth follower
    */

    function animateFollower() {

        followerX +=
            (mouseX - followerX) * 0.12;

        followerY +=
            (mouseY - followerY) * 0.12;


        gsap.set(follower, {

            x: followerX,

            y: followerY

        });


        requestAnimationFrame(animateFollower);

    }


    animateFollower();



    /*
        Cursor hover effect
    */

    const hoverElements =
        document.querySelectorAll(
            "[data-cursor='view']"
        );


    hoverElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            document.body.classList.add(
                "cursor-view"
            );

        });


        element.addEventListener("mouseleave", () => {

            document.body.classList.remove(
                "cursor-view"
            );

        });

    });

}



/* =========================================================
   04 — MOBILE MENU
========================================================= */

function initMobileMenu() {

    const button =
        document.querySelector(".menu-toggle");

    const mobileNavigation =
        document.querySelector(".mobile-navigation");


    if (!button || !mobileNavigation) return;


    let menuOpen = false;


    button.addEventListener("click", () => {

        menuOpen = !menuOpen;


        mobileNavigation.classList.toggle(
            "active",
            menuOpen
        );


        /*
            Animate hamburger
        */

        const lines =
            button.querySelectorAll("span");


        if (menuOpen) {

            gsap.to(lines[0], {

                rotation: 45,

                y: 3,

                duration: .3

            });


            gsap.to(lines[1], {

                rotation: -45,

                y: -3,

                duration: .3

            });


        } else {

            gsap.to(lines[0], {

                rotation: 0,

                y: 0,

                duration: .3

            });


            gsap.to(lines[1], {

                rotation: 0,

                y: 0,

                duration: .3

            });

        }

    });



    /*
        Close menu after clicking a link
    */

    const links =
        mobileNavigation.querySelectorAll("a");


    links.forEach((link) => {

        link.addEventListener("click", () => {

            menuOpen = false;

            mobileNavigation.classList.remove(
                "active"
            );


            gsap.to(button.querySelectorAll("span")[0], {

                rotation: 0,

                y: 0,

                duration: .3

            });


            gsap.to(button.querySelectorAll("span")[1], {

                rotation: 0,

                y: 0,

                duration: .3

            });

        });

    });

}



/* =========================================================
   05 — HERO INTRO ANIMATION
========================================================= */

function initHeroAnimation() {

    if (typeof gsap === "undefined") return;


    const timeline = gsap.timeline({

        delay: 2.0

    });


    /*
        Hero label
    */

    timeline.from(

        ".hero-label",

        {

            opacity: 0,

            y: 20,

            duration: .7,

            ease: "power3.out"

        }

    );


    /*
        Main title
    */

    timeline.from(

        ".hero-title",

        {

            opacity: 0,

            y: 80,

            duration: 1.2,

            ease: "power4.out"

        },

        "-=.35"

    );


    /*
        Description
    */

    timeline.from(

        ".hero-description",

        {

            opacity: 0,

            y: 30,

            duration: .8,

            ease: "power3.out"

        },

        "-=.65"

    );


    /*
        Buttons
    */

    timeline.from(

        ".hero-actions",

        {

            opacity: 0,

            y: 25,

            duration: .7,

            ease: "power3.out"

        },

        "-=.5"

    );


    /*
        Stats
    */

    timeline.from(

        ".hero-meta",

        {

            opacity: 0,

            y: 25,

            duration: .7

        },

        "-=.45"

    );


    /*
        Digital object
    */

    timeline.from(

        ".hero-object",

        {

            opacity: 0,

            scale: .75,

            rotation: -5,

            duration: 1.5,

            ease: "power4.out"

        },

        "-=1"

    );

}



/* =========================================================
   06 — HERO MOUSE PARALLAX
========================================================= */

function initHeroMouseEffect() {

    if (window.innerWidth <= 700) return;

    if (typeof gsap === "undefined") return;


    const hero =
        document.querySelector(".hero");


    const object =
        document.querySelector(".hero-object");


    const core =
        document.querySelector(".digital-core");


    const panels =
        document.querySelectorAll(
            ".floating-panel"
        );


    if (!hero || !object) return;


    hero.addEventListener("mousemove", (event) => {

        const rect =
            hero.getBoundingClientRect();


        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;


        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;


        /*
            Main object
        */

        gsap.to(object, {

            x: x * 25,

            y: y * 25,

            duration: 1,

            ease: "power3.out"

        });


        /*
            Core
        */

        if (core) {

            gsap.to(core, {

                x: x * 40,

                y: y * 40,

                duration: 1.2,

                ease: "power3.out"

            });

        }


        /*
            Floating panels
        */

        panels.forEach((panel, index) => {

            const strength =
                15 + index * 7;


            gsap.to(panel, {

                x: x * strength,

                y: y * strength,

                duration: 1,

                ease: "power3.out"

            });

        });

    });


    /*
        Return to normal
    */

    hero.addEventListener("mouseleave", () => {

        gsap.to(object, {

            x: 0,

            y: 0,

            duration: 1.5,

            ease: "power3.out"

        });


        panels.forEach((panel) => {

            gsap.to(panel, {

                x: 0,

                y: 0,

                duration: 1.5,

                ease: "power3.out"

            });

        });

    });

}



/* =========================================================
   07 — SCROLL ANIMATIONS
========================================================= */

function initScrollAnimations() {

    if (typeof gsap === "undefined") return;

    if (typeof ScrollTrigger === "undefined") return;


    gsap.registerPlugin(ScrollTrigger);


    /*
        Statement
    */

    gsap.from(".statement h2", {

        scrollTrigger: {

            trigger: ".statement",

            start: "top 75%",

        },

        opacity: 0,

        y: 80,

        duration: 1.2,

        ease: "power4.out"

    });


    /*
        Section headings
    */

    gsap.utils.toArray(
        ".section-heading"
    ).forEach((heading) => {

        gsap.from(heading, {

            scrollTrigger: {

                trigger: heading,

                start: "top 80%"

            },

            opacity: 0,

            y: 50,

            duration: 1,

            ease: "power3.out"

        });

    });



    /*
        Projects
    */

    gsap.utils.toArray(
        ".project"
    ).forEach((project) => {

        const visual =
            project.querySelector(
                ".project-visual"
            );


        gsap.from(visual, {

            scrollTrigger: {

                trigger: project,

                start: "top 75%"

            },

            opacity: 0,

            y: 70,

            scale: .96,

            duration: 1.2,

            ease: "power4.out"

        });


        gsap.from(
            project.querySelector(".project-info"),
            {

                scrollTrigger: {

                    trigger: project,

                    start: "top 65%"

                },

                opacity: 0,

                y: 30,

                duration: .8,

                delay: .15,

                ease: "power3.out"

            }
        );

    });



    /*
        Services
    */

    gsap.utils.toArray(
        ".service-item"
    ).forEach((service, index) => {

        gsap.from(service, {

            scrollTrigger: {

                trigger: service,

                start: "top 85%"

            },

            opacity: 0,

            x: -50,

            duration: .8,

            delay: index * .05,

            ease: "power3.out"

        });

    });



    /*
        About values
    */

    gsap.utils.toArray(
        ".about-values > div"
    ).forEach((value, index) => {

        gsap.from(value, {

            scrollTrigger: {

                trigger: ".about-values",

                start: "top 80%"

            },

            opacity: 0,

            y: 40,

            duration: .8,

            delay: index * .12,

            ease: "power3.out"

        });

    });



    /*
        Contact section
    */

    gsap.from(
        ".contact-container > *",
        {

            scrollTrigger: {

                trigger: ".contact-section",

                start: "top 70%"

            },

            opacity: 0,

            y: 50,

            duration: 1,

            stagger: .12,

            ease: "power3.out"

        }
    );

}



/* =========================================================
   08 — PROJECT HOVER
========================================================= */

function initProjectHover() {

    if (window.innerWidth <= 700) return;

    if (typeof gsap === "undefined") return;


    const projects =
        document.querySelectorAll(
            ".project"
        );


    projects.forEach((project) => {

        const visual =
            project.querySelector(
                ".project-visual"
            );


        if (!visual) return;


        project.addEventListener(
            "mouseenter",
            () => {

                gsap.to(visual, {

                    scale: 1.015,

                    duration: .8,

                    ease: "power3.out"

                });

            }
        );


        project.addEventListener(
            "mouseleave",
            () => {

                gsap.to(visual, {

                    scale: 1,

                    duration: .8,

                    ease: "power3.out"

                });

            }
        );



        /*
            Image follows mouse slightly
        */

        project.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    visual.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    .5;


                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    .5;


                gsap.to(visual, {

                    rotateY: x * 2,

                    rotateX: y * -2,

                    duration: .6,

                    ease: "power2.out"

                });

            }
        );


        project.addEventListener(
            "mouseleave",
            () => {

                gsap.to(visual, {

                    rotateY: 0,

                    rotateX: 0,

                    duration: .8,

                    ease: "power3.out"

                });

            }
        );

    });

}



/* =========================================================
   09 — SERVICE HOVER
========================================================= */

function initServiceHover() {

    if (window.innerWidth <= 700) return;


    const services =
        document.querySelectorAll(
            ".service-item"
        );


    services.forEach((service) => {

        service.addEventListener(
            "mouseenter",
            () => {

                services.forEach((item) => {

                    if (item !== service) {

                        item.style.opacity = "0.35";

                    }

                });

            }
        );


        service.addEventListener(
            "mouseleave",
            () => {

                services.forEach((item) => {

                    item.style.opacity = "1";

                });

            }
        );

    });

}



/* =========================================================
   10 — TECHNOLOGY ANIMATION
========================================================= */

function initTechnologyAnimation() {

    if (typeof gsap === "undefined") return;


    const nodes =
        document.querySelectorAll(
            ".tech-node"
        );


    nodes.forEach((node, index) => {

        gsap.to(node, {

            y: index % 2 === 0 ? -12 : 12,

            duration:
                2.5 + index * .25,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut",

            delay: index * .15

        });

    });


    /*
        Core pulse
    */

    const core =
        document.querySelector(".tech-core");


    if (core) {

        gsap.to(core, {

            boxShadow:
                "0 0 100px rgba(117,92,255,.7)",

            duration: 2,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    }

}



/* =========================================================
   11 — SMOOTH ANCHOR LINKS
========================================================= */

function initSmoothLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });

}



/* =========================================================
   12 — MAGNETIC BUTTON EFFECT
========================================================= */

if (
    window.innerWidth > 700 &&
    typeof gsap !== "undefined"
) {

    const buttons =
        document.querySelectorAll(
            ".primary-button, .contact-button, .header-contact"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                gsap.to(button, {

                    x: x * .15,

                    y: y * .15,

                    duration: .4,

                    ease: "power3.out"

                });

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                gsap.to(button, {

                    x: 0,

                    y: 0,

                    duration: .6,

                    ease: "elastic.out(1,.4)"

                });

            }
        );

    });

}



/* =========================================================
   13 — CONSOLE BRAND MESSAGE
========================================================= */

console.log(
    "%c GOKAP TECHNOLOGIES ",
    "background:#755cff;color:white;font-size:16px;font-weight:bold;padding:8px 14px;border-radius:6px;"
);

console.log(
    "Digital products engineered for growth."
);
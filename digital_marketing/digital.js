// NAVBAR 

const nav_drop_item = document.querySelectorAll(".drop-down-header-ul li");
const nav_sevice_img = document.querySelector(".drop-down-header-image img")
nav_drop_item[0].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/web-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[1].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/app-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[2].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/ui-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[3].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/game-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[4].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/digital-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[5].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/ai-ml-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[6].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/programming-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[7].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/dataa-nav.jpg");    
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[8].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/datas-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
nav_drop_item[9].addEventListener("mouseover", function () {
    nav_sevice_img.setAttribute("src", "../public/images/basic-nav.jpg");
    nav_sevice_img.setAttribute("style", "transition:.3s");
}
)
















// we believe 

var acc = document.getElementsByClassName("digital-marketing-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

















// what services 

let digiCon = document.querySelector(".digital-services-container");
let digiBtns = document.querySelectorAll(".digital-services-both-btns");
let digiWidth = 600;


digiBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        digiCon.scrollLeft += btn.id === "digital-services-right-btn" ? digiWidth : - digiWidth;
    })
})






















// footer 

gsap.to("#foot-span1", {
    scrollTrigger: {
        trigger: "#foot-span1",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop1"

})
gsap.to("#foot-span2", {
    scrollTrigger: {
        trigger: "#foot-span2",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop2"

})
gsap.to("#foot-span3", {
    scrollTrigger: {
        trigger: "#foot-span3",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop3"

})
gsap.to("#foot-span4", {
    scrollTrigger: {
        trigger: "#foot-span4",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop4"

})
gsap.to("#foot-span5", {
    scrollTrigger: {
        trigger: "#foot-span5",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop5"

})
gsap.to("#foot-span6", {
    scrollTrigger: {
        trigger: "#foot-span6",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop6"

})
gsap.to("#foot-span7", {
    scrollTrigger: {
        trigger: "#foot-span7",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop7"

})
gsap.to("#foot-span8", {
    scrollTrigger: {
        trigger: "#foot-span8",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop8"

})
gsap.to("#foot-span9", {
    scrollTrigger: {
        trigger: "#foot-span9",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop9"

})
gsap.to("#foot-span10", {
    scrollTrigger: {
        trigger: "#foot-span10",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "drop10"

})
gsap.to("#idot", {
    scrollTrigger: {
        trigger: "#idot",
        scroller: "body",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,

    },
    animationName: "idot",

})
// NAVBAR 

const navbar_bar = document.querySelector(".navbar-bars");
const navbar_cross = document.querySelector(".navbar-cross");
const list_items_navbar = document.querySelector(".nav-links-ul");

let flagvalue = 0;
function show_menu() {
    if (flagvalue == 0) {
        list_items_navbar.setAttribute("style", "right:0%");
        navbar_bar.setAttribute("style", "display:none");
        navbar_cross.setAttribute("style", "display:block");
        flagvalue = 1;
    }
    else {
        list_items_navbar.setAttribute("style", "right:-100%");
        navbar_cross.setAttribute("style", "display:none");
        navbar_bar.setAttribute("style", "display:block");
        flagvalue = 0;
    }

}


// after for tab click event 

const navbar_media_910 = window.matchMedia('(max-width: 910px)');
const navbar_media_700 = window.matchMedia('(max-width: 700px)');
const course_change = document.querySelector(".navbar-course-section");
const navbar_dropdown_items = document.querySelector(".drop-down-header");
const small_width_dropdown = document.querySelector(".small-width-dropdown ");
let flagvaluecourse = 0;
if (navbar_media_700.matches) {
    flagvaluecourse = 0;
    navbar_dropdown_items.setAttribute("style", "display:none");
    course_change.addEventListener("click", () => {
        if (flagvaluecourse == 0) {
            small_width_dropdown.setAttribute("style", "display:flex");
            flagvaluecourse = 1;

        }
        else {
            small_width_dropdown.setAttribute("style", "display:none");
            flagvaluecourse = 0;


        }
    })


}
else if (navbar_media_910.matches) {
    flagvaluecourse = 0;
    course_change.addEventListener("click", () => {
        if (flagvaluecourse == 0) {
            navbar_dropdown_items.setAttribute("style", "display:flex");
            flagvaluecourse = 1;
        }
        else {
            navbar_dropdown_items.setAttribute("style", "display:none");
            flagvaluecourse = 0;
        }
    })

}


// image section navbar 


const nav_drop_item = document.querySelectorAll(".drop-down-header-ul li");
const nav_sevice_img = document.querySelector(".drop-down-header-image img");
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











// showcase 


// const showBtn= document.querySelector(".show-btn button");
// const uiuxHidden=document.querySelectorAll(".uiux-hidden-box")

// showBtn.addEventListener("click",()=>{
//     showBtn.style.display="none";
//     for(let x of uiuxHidden){
//         x.style.display="block";
//     }
// })




















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

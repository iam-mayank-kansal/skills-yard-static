// NAVBAR 

// drop items fot small screens 


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







































// frequently asked questions

let webOpenIndex = -1; // Initialize with a value that won't match any index

const webquestions = document.querySelectorAll(".webdev-question");
const webanswers = document.querySelectorAll(".webdev-answer");
const webdownarrow = document.querySelectorAll(".webdev-down-arrow");

webquestions.forEach((question, index) => {
    question.addEventListener("click", () => {
        if (webOpenIndex !== -1) {
            // Close the previously opened question
            webanswers[webOpenIndex].style.height = "0";
            webanswers[webOpenIndex].style.paddingBlock = "0px";
            webdownarrow[webOpenIndex].style.transform = "rotate(0deg)";
            webdownarrow[webOpenIndex].style.top = "15px";
        }

        if (webOpenIndex !== index) {
            // Open the clicked question
            webanswers[index].style.height = "fit-content";
            webanswers[index].style.paddingBlock = "20px";
            webdownarrow[index].style.transform = "rotate(180deg)";
            webdownarrow[index].style.top = "10px";
            webOpenIndex = index;
        } else {
            // Toggle close if clicking on the open question
            webOpenIndex = -1;
        }
    });
});

























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
































// our web stack 

const pop_up_select_btn = document.querySelectorAll(".our-pop-up-btns-in");
const pop_up_btn = document.querySelector(".our-pop-up-btns");
const show_lang_btns = document.querySelectorAll(".our-pop-up-sec-show-divs img");
const show_lang_images_media = document.querySelector(".our-pop-up-img-11");
const just_for_500_media = document.querySelector(".our-pop-up-sec-show");
const just_for_500_media2 = document.querySelector(".our-pop-up-sec-show2");
const pop_up_none_block_img = document.querySelectorAll(".our-pop-up-img-11");
const main_pop_up = document.querySelector(".our-pop-up-section-main");
just_for_500_media2.style.display = "none";


// initially 
pop_up_select_btn[0].setAttribute("style", "background-color:#0fe97cfb");
show_lang_btns[0].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");
show_lang_btns[2].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");
show_lang_btns[3].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");
show_lang_btns[5].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");
show_lang_btns[6].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");
show_lang_btns[8].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");
show_lang_btns[9].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");
show_lang_btns[11].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");

const pop_up_mediaQuery = window.matchMedia('(max-width: 520px)');
if (pop_up_mediaQuery.matches) {
    // media querry 
    main_pop_up.setAttribute("style", "height:fit-content ; padding:10px 0px");
    pop_up_btn.setAttribute("style", "padding:10px 0px")
    just_for_500_media.style.display = "none";
    just_for_500_media2.style.display = "flex";
    for (let x = 0; x < pop_up_none_block_img.length; x++) {
        pop_up_none_block_img[x].style.display = "none";
    }
    pop_up_none_block_img[0].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[1].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[2].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[3].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[4].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[5].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[6].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[7].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_select_btn[0].addEventListener("click", function () {
        for (let x = 0; x < pop_up_select_btn.length; x++) {
            pop_up_select_btn[x].setAttribute("style", "background-color:#0ccc6c")
        }
        pop_up_select_btn[0].setAttribute("style", "background-color:#0fe97cfb");

        for (let x = 0; x < pop_up_none_block_img.length; x++) {
            pop_up_none_block_img[x].setAttribute("style", "display:none ");
        }
        pop_up_none_block_img[1].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[2].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[3].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[4].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[5].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[6].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[7].setAttribute("style", "display:block ; transition:.3s");
    });
    pop_up_select_btn[1].addEventListener("click", function () {
        for (let x = 0; x < pop_up_select_btn.length; x++) {
            pop_up_select_btn[x].setAttribute("style", "background-color:#0ccc6c")
        }
        pop_up_select_btn[1].setAttribute("style", "background-color:#0fe97cfb");

        for (let x = 0; x < pop_up_none_block_img.length; x++) {
            pop_up_none_block_img[x].setAttribute("style", "display:none");
        }
        pop_up_none_block_img[8].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[9].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[10].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[11].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[12].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[13].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[14].setAttribute("style", "display:block ; transition:.3s");
    });
    pop_up_select_btn[2].addEventListener("click", function () {
        for (let x = 0; x < pop_up_select_btn.length; x++) {
            pop_up_select_btn[x].setAttribute("style", "background-color:#0ccc6c")
        }
        pop_up_select_btn[2].setAttribute("style", "background-color:#0fe97cfb");
        for (let x = 0; x < pop_up_none_block_img.length; x++) {
            pop_up_none_block_img[x].setAttribute("style", "display:block ; transition:.3s ; ; filter:grayscale(0)");
        }
    });
}




// normal 
else {
    just_for_500_media.style.display = "grid";
    just_for_500_media2.style.display = "none";

    pop_up_select_btn[0].addEventListener("click", function () {
        for (let x = 0; x < pop_up_select_btn.length; x++) {
            pop_up_select_btn[x].setAttribute("style", "background-color:#0ccc6c")
        }
        pop_up_select_btn[0].setAttribute("style", "background-color:#0fe97cfb");
        for (let x = 0; x < show_lang_btns.length; x++) {
            show_lang_btns[x].setAttribute("style", "transform:scale(1) ; opacity:.3 ; filter:grayscale(1)");
        }
        show_lang_btns[0].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
        show_lang_btns[2].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
        show_lang_btns[3].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
        show_lang_btns[5].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
        show_lang_btns[6].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
        show_lang_btns[8].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
        show_lang_btns[9].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
        show_lang_btns[11].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
    })
    pop_up_select_btn[1].addEventListener("click", function () {
        for (let x = 0; x < pop_up_select_btn.length; x++) {
            pop_up_select_btn[x].setAttribute("style", "background-color:#0ccc6c")
        }
        pop_up_select_btn[1].setAttribute("style", "background-color:#0fe97cfb");
        for (let x = 0; x < show_lang_btns.length; x++) {
            show_lang_btns[x].setAttribute("style", "transform:scale(1) ; opacity:.3 ; filter : grayscale(1)");
        }
        show_lang_btns[1].setAttribute("style", "transform:scale(1.3) ; opacity:1 ;; filter:grayscale(0)");
        show_lang_btns[4].setAttribute("style", "transform:scale(1.3) ; opacity:1 ;; filter:grayscale(0)");
        show_lang_btns[7].setAttribute("style", "transform:scale(1.3) ; opacity:1 ;; filter:grayscale(0)");
        show_lang_btns[10].setAttribute("style", "transform:scale(1.3) ; opacity:1 ;; filter:grayscale(0)");
        show_lang_btns[12].setAttribute("style", "transform:scale(1.3) ; opacity:1 ;; filter:grayscale(0)");
        show_lang_btns[13].setAttribute("style", "transform:scale(1.3) ; opacity:1 ;; filter:grayscale(0)");
        show_lang_btns[14].setAttribute("style", "transform:scale(1.3) ; opacity:1 ;; filter:grayscale(0)");
    })
    pop_up_select_btn[2].addEventListener("click", function () {
        for (let x = 0; x < pop_up_select_btn.length; x++) {
            pop_up_select_btn[x].setAttribute("style", "background-color:#0ccc6c")
        }
        pop_up_select_btn[2].setAttribute("style", "background-color:#0fe97cfb");
        for (let x = 0; x < show_lang_btns.length; x++) {
            show_lang_btns[x].setAttribute("style", "transform:scale(1.2) ; opacity:1 ; filter:grayscale(0)");
        }
    })

}

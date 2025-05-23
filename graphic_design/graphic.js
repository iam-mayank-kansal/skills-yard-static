






















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
// show_lang_btns[6].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0)");
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
    pop_up_none_block_img[2].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[3].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[5].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[6].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[8].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[9].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_none_block_img[11].setAttribute("style", "display:block ; transition:.3s ; filter:grayscale(0)");
    pop_up_select_btn[0].addEventListener("click", function () {
        for (let x = 0; x < pop_up_select_btn.length; x++) {
            pop_up_select_btn[x].setAttribute("style", "background-color:#0ccc6c")
        }
        pop_up_select_btn[0].setAttribute("style", "background-color:#0fe97cfb");

        for (let x = 0; x < pop_up_none_block_img.length; x++) {
            pop_up_none_block_img[x].setAttribute("style", "display:none ");
        }
        pop_up_none_block_img[0].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[2].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[3].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[5].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[6].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[8].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[9].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[11].setAttribute("style", "display:block ; transition:.3s");
    });
    pop_up_select_btn[1].addEventListener("click", function () {
        for (let x = 0; x < pop_up_select_btn.length; x++) {
            pop_up_select_btn[x].setAttribute("style", "background-color:#0ccc6c")
        }
        pop_up_select_btn[1].setAttribute("style", "background-color:#0fe97cfb");

        for (let x = 0; x < pop_up_none_block_img.length; x++) {
            pop_up_none_block_img[x].setAttribute("style", "display:none");
        }
        pop_up_none_block_img[1].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[4].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[7].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[10].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[12].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[13].setAttribute("style", "display:block ; transition:.3s");
        pop_up_none_block_img[14].setAttribute("style", "display:block ; transition:.3s");
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
        // show_lang_btns[6].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
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
      
        show_lang_btns[6].setAttribute("style", "transform:scale(1.3) ; opacity:1 ; filter:grayscale(0) ");
        show_lang_btns[14].setAttribute("style", "transform:scale(1.3) ; opacity:1 ;; filter:grayscale(0)");
    })
}



























// graphic section 

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);











































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



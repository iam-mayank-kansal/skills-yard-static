// starter
setTimeout(() => {
  document.body.setAttribute("style", "overflow:initial ; height:auto ;");
}, 2800);

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
  } else {
    list_items_navbar.setAttribute("style", "right:-100%");
    navbar_cross.setAttribute("style", "display:none");
    navbar_bar.setAttribute("style", "display:block");
    flagvalue = 0;
  }
}

// after for tab click event

const navbar_media_910 = window.matchMedia("(max-width: 910px)");
const navbar_media_700 = window.matchMedia("(max-width: 700px)");
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
    } else {
      small_width_dropdown.setAttribute("style", "display:none");
      flagvaluecourse = 0;
    }
  });
} else if (navbar_media_910.matches) {
  flagvaluecourse = 0;
  course_change.addEventListener("click", () => {
    if (flagvaluecourse == 0) {
      navbar_dropdown_items.setAttribute("style", "display:flex");
      flagvaluecourse = 1;
    } else {
      navbar_dropdown_items.setAttribute("style", "display:none");
      flagvaluecourse = 0;
    }
  });
}

// image section navbar

const nav_drop_item = document.querySelectorAll(".drop-down-header-ul li");
const nav_sevice_img = document.querySelector(".drop-down-header-image img");
nav_drop_item[0].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/web-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[1].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/app-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[2].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/ui-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[3].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/game-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[4].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/digital-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[5].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/ai-ml-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[6].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/programming-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[7].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/dataa-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[8].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/datas-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});
nav_drop_item[9].addEventListener("mouseover", function () {
  nav_sevice_img.setAttribute("src", "./public/images/basic-nav.jpg");
  nav_sevice_img.setAttribute("style", "transition:.3s");
});

// course we provide

const coursebox = document.querySelectorAll(".home-up-down-course-section-div");
const coursebox1 = document.querySelectorAll(
  ".home-up-down-course-section-div1"
);

const heading = document.querySelectorAll(
  ".home-up-down-course-section-div h3"
);
const heading1 = document.querySelectorAll(
  ".home-up-down-course-section-div1 h3"
);

const coursepara = document.querySelectorAll(
  ".home-up-down-course-section-div p"
);
const coursepara1 = document.querySelectorAll(
  ".home-up-down-course-section-div1 p"
);

const courseoverlay = document.querySelectorAll(
  ".home-up-down-course-section-div-overlay"
);
const courseoverlay1 = document.querySelectorAll(
  ".home-up-down-course-section-div1-overlay"
);

const courseicon = document.querySelectorAll(
  ".home-up-down-course-section-div-icons"
);
const courseicons = document.querySelectorAll(
  ".home-up-down-course-section-div1-icons"
);

const courseicon1 = document.querySelectorAll(
  ".home-up-down-course-section-div-icons-1 a"
);
const courseicons1 = document.querySelectorAll(
  ".home-up-down-course-section-div1-icons-1 a"
);

const courseicon2 = document.querySelectorAll(
  ".home-up-down-course-section-div-icons-2 a"
);
const courseicons2 = document.querySelectorAll(
  ".home-up-down-course-section-div1-icons-2 a"
);

const courseicon3 = document.querySelectorAll(
  ".home-up-down-course-section-div-icons-3 a"
);
const courseicons3 = document.querySelectorAll(
  ".home-up-down-course-section-div1-icons-3 a"
);

const courseicon4 = document.querySelectorAll(
  ".home-up-down-course-section-div-icons-4 a"
);
const courseicons4 = document.querySelectorAll(
  ".home-up-down-course-section-div1-icons-4 a"
);

const courseicon5 = document.querySelectorAll(
  ".home-up-down-course-section-div-icons-5 a"
);
const courseicons5 = document.querySelectorAll(
  ".home-up-down-course-section-div1-icons-5 a"
);

const navbar_media_1300 = window.matchMedia("(min-width: 1300px)");
const navbar_media_1300_max = window.matchMedia("(max-width:1300px)");
const navbar_media_1100_min = window.matchMedia("(min-width:1100px)");

if (navbar_media_1300.matches) {
  coursebox.forEach((value) => {
    value.addEventListener("mouseover", function () {
      coursebox.forEach((box) => {
        box.setAttribute("style", "width:200px ");
      });
      value.style.width = "350px";
    });
  });
  coursebox[0].style.width = "350px";
  coursebox1.forEach((value) => {
    value.addEventListener("mouseover", function () {
      coursebox1.forEach((box) => {
        box.setAttribute("style", "width:200px ");
      });
      value.style.width = "350px";
    });
  });
  coursebox1[2].style.width = "350px";

  heading.forEach((value, x) => {
    coursebox[x].addEventListener("mouseover", function () {
      heading.forEach((box) => {
        box.setAttribute(
          "style",
          "transform:rotate(270deg) ; right:105px; bottom:205px "
        );
      });
      value.setAttribute(
        "style",
        "transform:rotate(360deg)  ; right:90px ;bottom:65% "
      );
    });
  });
  heading[0].setAttribute(
    "style",
    "transform:rotate(360deg)  ; right:90px ;bottom:65% "
  );
  heading1.forEach((value, x) => {
    coursebox1[x].addEventListener("mouseover", function () {
      heading1.forEach((box) => {
        box.setAttribute(
          "style",
          "transform:rotate(270deg) ; right:105px; bottom:205px "
        );
      });
      value.setAttribute(
        "style",
        "transform:rotate(360deg)  ; right:90px ;bottom:65% "
      );
    });
  });
  heading1[2].setAttribute(
    "style",
    "transform:rotate(360deg)  ; right:90px ;bottom:65% "
  );

  coursepara.forEach((value, x) => {
    coursebox[x].addEventListener("mouseover", function () {
      coursepara.forEach((box) => {
        box.setAttribute("style", "left:-100%; opacity:0");
      });
      value.setAttribute("style", "left:25px; opacity:1");
    });
  });
  coursepara[0].setAttribute("style", "left:25px; opacity:1");

  coursepara1.forEach((value, x) => {
    coursebox1[x].addEventListener("mouseover", function () {
      coursepara1.forEach((box) => {
        box.setAttribute("style", "left:-100%; opacity:0");
      });
      value.setAttribute("style", "left:25px; opacity:1");
    });
  });
  coursepara1[2].setAttribute("style", "left:25px; opacity:1");

  courseicon1.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });
  courseicons3.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  coursebox[0].addEventListener("mouseover", function () {
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox[1].addEventListener("mouseover", function () {
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox[2].addEventListener("mouseover", function () {
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox[3].addEventListener("mouseover", function () {
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox[4].addEventListener("mouseover", function () {
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });

  coursebox1[0].addEventListener("mouseover", function () {
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox1[1].addEventListener("mouseover", function () {
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox1[2].addEventListener("mouseover", function () {
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox1[3].addEventListener("mouseover", function () {
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox1[4].addEventListener("mouseover", function () {
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
} else if (navbar_media_1300_max.matches && navbar_media_1100_min.matches) {
  coursebox.forEach((value) => {
    value.addEventListener("mouseover", function () {
      coursebox.forEach((box) => {
        box.setAttribute("style", "width:175px ");
      });
      value.style.width = "325px";
    });
  });
  coursebox[0].style.width = "325px";
  coursebox1.forEach((value) => {
    value.addEventListener("mouseover", function () {
      coursebox1.forEach((box) => {
        box.setAttribute("style", "width:175px ");
      });
      value.style.width = "325px";
    });
  });
  coursebox1[2].style.width = "325px";

  heading.forEach((value, x) => {
    coursebox[x].addEventListener("mouseover", function () {
      heading.forEach((box) => {
        box.setAttribute(
          "style",
          "transform:rotate(270deg) ; right:105px; bottom:205px "
        );
      });
      value.setAttribute(
        "style",
        "transform:rotate(360deg)  ; right:63px ;bottom:65% "
      );
    });
  });
  heading[0].setAttribute(
    "style",
    "transform:rotate(360deg)  ; right:63px ;bottom:65% "
  );
  heading1.forEach((value, x) => {
    coursebox1[x].addEventListener("mouseover", function () {
      heading1.forEach((box) => {
        box.setAttribute(
          "style",
          "transform:rotate(270deg) ; right:105px; bottom:205px "
        );
      });
      value.setAttribute(
        "style",
        "transform:rotate(360deg)  ; right:63px ;bottom:65% "
      );
    });
  });
  heading1[2].setAttribute(
    "style",
    "transform:rotate(360deg)  ; right:63px ;bottom:65% "
  );

  coursepara.forEach((value, x) => {
    coursebox[x].addEventListener("mouseover", function () {
      coursepara.forEach((box) => {
        box.setAttribute("style", "left:-100%; opacity:0");
      });
      value.setAttribute("style", "left:25px; opacity:1");
    });
  });
  coursepara[0].setAttribute("style", "left:25px; opacity:1");

  coursepara1.forEach((value, x) => {
    coursebox1[x].addEventListener("mouseover", function () {
      coursepara1.forEach((box) => {
        box.setAttribute("style", "left:-100%; opacity:0");
      });
      value.setAttribute("style", "left:25px; opacity:1");
    });
  });
  coursepara1[2].setAttribute("style", "left:25px; opacity:1");

  courseicon1.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });
  courseicons3.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  coursebox[0].addEventListener("mouseover", function () {
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox[1].addEventListener("mouseover", function () {
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox[2].addEventListener("mouseover", function () {
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox[3].addEventListener("mouseover", function () {
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox[4].addEventListener("mouseover", function () {
    courseicon5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicon2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicon1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });

  coursebox1[0].addEventListener("mouseover", function () {
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox1[1].addEventListener("mouseover", function () {
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox1[2].addEventListener("mouseover", function () {
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox1[3].addEventListener("mouseover", function () {
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
  coursebox1[4].addEventListener("mouseover", function () {
    courseicons5.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(1) ; transition:.5s");
    });
    courseicons2.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons3.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons4.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
    courseicons1.forEach((value, x) => {
      value.setAttribute("style", "transform:scale(0) ; transition:.3s");
    });
  });
} else {
  coursebox.forEach((value) => {
    value.style.width = "325px";
  });
  coursebox1.forEach((value) => {
    value.style.width = "325px";
  });
  heading.forEach((value, x) => {
    value.setAttribute(
      "style",
      "transform:rotate(360deg)  ; right:63px ;bottom:65% "
    );
  });
  heading1.forEach((value, x) => {
    value.setAttribute(
      "style",
      "transform:rotate(360deg)  ; right:63px ;bottom:65% "
    );
  });

  courseicon1.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicon2.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicon3.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicon4.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicon5.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicons1.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicons2.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicons3.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicons4.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });

  courseicons5.forEach((value, x) => {
    value.setAttribute("style", "transform:scale(1) ; transition:.5s");
  });
}

// counter

const numbers1 = document.querySelectorAll(".home-counter-section-sec-div p");
const numcounter = document.querySelectorAll(".home-counter-section-sec");
const counter_home = document.querySelector(".main-counter-sec");
let variable = 0;
let var1;

window.addEventListener("scroll", () => {
  if (
    scrollY > counter_home.offsetTop - counter_home.offsetHeight - 100 &&
    variable == 0
  ) {
    variable++;
    show();
  }
});

function show() {
  setTimeout(() => {
    let values = 0;
    setInterval(() => {
      if (values < 1000) {
        values = values + 10;
        numbers1[0].innerHTML = values;
      } else {
        clearInterval();
      }
    }, 10);
  }, 10);

  setTimeout(() => {
    let values = 0;

    setInterval(() => {
      if (values < 100) {
        values = values + 5;
        numbers1[1].innerHTML = values;
      } else {
        clearInterval();
      }
    }, 50);
  }, 10);

  setTimeout(() => {
    let values = 0;

    setInterval(() => {
      if (values < 20) {
        values = values + 1;
        numbers1[2].innerHTML = values;
      } else {
        clearInterval();
      }
    }, 50);
  }, 10);

  setTimeout(() => {
    let values = 0;

    setInterval(() => {
      if (values < 10) {
        values++;
        numbers1[3].innerHTML = values;
      } else {
        clearInterval();
      }
    }, 100);
  }, 10);
}

// our team member

let studentBtn = document.querySelectorAll(".studentBtn");
let backBtn = document.querySelectorAll(".studentBackBtn");
let card = document.querySelectorAll(".student-Card-1");

card.forEach(function (e, i) {
  studentBtn[i].addEventListener("click", function () {
    for (let x = 0; x < card.length; x++) {
      card[x].setAttribute("style", "transform:rotateY(0deg)");
    }
    e.setAttribute("style", "transform:rotateY(180deg)");
  });
});

for (let x = 0; x < card.length; x++) {
  backBtn[x].addEventListener("click", function () {
    card[x].setAttribute("style", "transform: rotateY(0deg)");
  });
}

// let next_prev = document.querySelectorAll(".both-arrow");
// let testmonails = Array.from(document.querySelectorAll(".testmonail-content-main"));
// next_prev.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         testmonails.forEach((testi) => {
//             testi.classList.add("testmonail-others");
//         })
//         btn.closest(".right-arrow") ? testmonails.push(testmonails.shift()) : testmonails.unshift(testmonails.pop());
//         testmonails[0].classList.remove("testmonail-others");
//     })
// })

// document.querySelector("WidgetTitle__Header-sc-ruy1gu-2 huflDf").style.display="none";

// footer

gsap.to("#foot-span1", {
  scrollTrigger: {
    trigger: "#foot-span1",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop1",
});
gsap.to("#foot-span2", {
  scrollTrigger: {
    trigger: "#foot-span2",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop2",
});
gsap.to("#foot-span3", {
  scrollTrigger: {
    trigger: "#foot-span3",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop3",
});
gsap.to("#foot-span4", {
  scrollTrigger: {
    trigger: "#foot-span4",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop4",
});
gsap.to("#foot-span5", {
  scrollTrigger: {
    trigger: "#foot-span5",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop5",
});
gsap.to("#foot-span6", {
  scrollTrigger: {
    trigger: "#foot-span6",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop6",
});
gsap.to("#foot-span7", {
  scrollTrigger: {
    trigger: "#foot-span7",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop7",
});
gsap.to("#foot-span8", {
  scrollTrigger: {
    trigger: "#foot-span8",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop8",
});
gsap.to("#foot-span9", {
  scrollTrigger: {
    trigger: "#foot-span9",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop9",
});
gsap.to("#foot-span10", {
  scrollTrigger: {
    trigger: "#foot-span10",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "drop10",
});
gsap.to("#idot", {
  scrollTrigger: {
    trigger: "#idot",
    scroller: "body",
    start: "100% 100%",
    end: "100% 100%",
    scrub: true,
  },
  animationName: "idot",
});

gsap.registerPlugin(ScrollTrigger );

function handleClick(event) {
  event.preventDefault(); // 기본 동작 방지
  const target = event.currentTarget.getAttribute("href");
  const element = document.querySelector(target);

  if (element) {
    const elementOffsetTop = element.getBoundingClientRect().top;
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    // 목표 스크롤 위치 값 계산
    let targetScrollPosition = currentScrollPosition + elementOffsetTop;
    // 스크롤 이동 애니메이션
    gsap.to(window, {
      duration: 1,
      scrollTo: targetScrollPosition,
      overwrite: "auto",
    });
  }
}
/* nav links */
let links = gsap.utils.toArray(".link_nav a");
// const linksT = [];
links.forEach((a) => {
  // let element = document.querySelector(a.getAttribute("href"));
  // let linkST = ScrollTrigger.create({
  //   trigger: element,
  //   start: "top top",
  // });
  // ScrollTrigger.create({
  //   trigger: element,
  //   start: "top center",
  //   end: "bottom center",
  // });
  // console.log(a.getAttribute("href"));
  // a.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   gsap.to(window, {
  //     duration: 1,
  //     scrollTo: { y: linkST.start },
  //     overwrite: "auto",
  //   });
  // });
  a.addEventListener("click", handleClick);
});
function setActive(sectionId) {
  const activeLink = document.querySelector(
    `.link_nav a[href="#${sectionId}"]`
  );
  links.forEach((el) => {
    if (el.classList.contains("active")) {
      const targetElement = document.querySelector(".progress_wrap");
      const spanElements = targetElement.querySelectorAll("span");
      console.log(targetElement);
      el.classList.remove("active");
      spanElements.forEach((span) => {
        span.parentNode.removeChild(span);
      });
    }
  });

  if (activeLink) {
    activeLink.classList.add("active");
  }
}

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

/* nav links bars anim */
const observer = new MutationObserver(function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const linkElements = document.querySelectorAll(".link_nav a");

      Array.from(linkElements).forEach((element) => {
        if (element.classList.contains("active")) {
          const currentSection = document.querySelector(
            `${element.attributes[0].value}`
          );
          const containPage = currentSection.querySelectorAll(".panel");
          // const targetElement = document.querySelector(".progress_wrap");

          // for (let i = 0; i < containPage.length; i++) {
          //   const spanElement = document.createElement("span");
          //   targetElement.appendChild(spanElement);
          // }
        }
      });
      break;
    }
  }
});

observer.observe(document.querySelector(".link_nav"), {
  attributes: true,
  subtree: true,
});

let oneContainer = document.querySelector(".About.container");
let tl = gsap.timeline();
tl.set(".text_box", { x: 545 });
tl.set(".hand", { x: -750, y: 110, delay: 0, opacity: 1 });
tl.to(".hand", { x: 50, y: -15, delay: 0 });
tl.to(".line2", { duration: 3, width: 700 });
tl.to(".hand", { x: 770, y: 10, duration: 3 }, "<");
tl.set(".ball", { x: -200, y: 36 });
tl.to(".ball", { opacity: 1, duration: 1 });
tl.set(".ball2", { x: -210, y: 36 });
tl.to(".hand", { x: 1350, y: -45, ease: { ease: Power1.easeInOut } });
tl.to(".text_box", { x: -545 },">");
tl.to(".hand", { x: 1250, y: -35, delay: 0 });
tl.to(".hand", { x: 1170, y: -70, delay: 0 });
tl.to(".hand", { x: 1500, y: 30, delay: 0 });
tl.to(".hand", { x: 2100, y: 30, delay: 0 });
tl.to(".hand", { display: "none" });
tl.to(".line2", { opacity: 0 });
tl.to("body", { overflow: "hidden" });
tl.to("#About .marquee", { opacity: 0 },"<");
tl.to(".ball2", { scale: 400, duration: 1 });
tl.to("#About .marquee", { display: "none" },">");
tl.to(".logo img", { attr: { src: "./assets/images/logo_jt_eng_white.png" } });
tl.to("body", { backgroundColor: "#000" });
tl.add(() => {
    document.querySelector("header").classList.toggle("fixed");
  },">");
tl.to(".ball", { display: "none" });
tl.to(".ball", { display: "none" });
tl.to("body", { overflow: "auto" });
tl.to(".text_box2 .text_icon", { opacity: 1 });
tl.to(".text_box2 .text_icon", { display: "block" });
tl.fromTo(".text_box2 .title p", { x: 40, opacity: 0 }, { x: 0, opacity: 1 });
tl.fromTo(".sub_tit", { x: 40, opacity: 0 }, { x: 0, opacity: 1 });
tl.to(".text_box2 .dot_icon", { display: "block" });
tl.to(".text_box2 .arrow_icon", { display: "block" });

const serviceSection = document.querySelector("#Service");
let svtl = gsap.timeline({
  scrollTrigger: {
    trigger: serviceSection,
    start: "top top",
    end: "bottom -1000%",
    pin: true,
    scrub: 1,
  },
});

const servicePanel = document.querySelector("#Service .panel");
const ruleNum1 = document.querySelector("#Service .text_box1 img");
const ruleNum2 = document.querySelector("#Service .text_box2 img");
const ruleNum3 = document.querySelector("#Service .text_box3 img");
const ruleNum4 = document.querySelector("#Service .text_box4 img");

svtl.set("#Service .text_box1", { y: -550 });
svtl.set("#Service .text_box2", { y: -550 });
svtl.set("#Service .text_box3", { y: -550 });
svtl.set("#Service .text_box4", { y: -550 });
svtl.to("#Service .text_box1", { opacity: 1 });
svtl.to("#Service .text_box1", { y: 0 });
svtl.to(".svg_ux", { display: "block" });
svtl.to(ruleNum1,{opacity: 1},"<+=1")
svtl.fromTo(
  "#Service .text_box1 .sub_title",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.fromTo(
  "#Service .text_box1 .sub_text",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.to("#Service .text_box1", { y: 700 }, ">4");
svtl.to("#Service .text_box1", { opacity: 0 });
svtl.to("#Service .text_box1", { display: "none" });
svtl.to("#Service .text_box2", { opacity: 1 });
svtl.to("#Service .text_box2", { y: 0 });
svtl.to(".svg_platform", { display: "block" });
svtl.to(ruleNum2,{opacity: 1},"<+=1")
svtl.fromTo(
  "#Service .text_box2 .sub_title",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.fromTo(
  "#Service .text_box2 .sub_text",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.to("#Service .text_box2", { y: 700 }, ">4");
svtl.to("#Service .text_box2", { opacity: 0 });
svtl.to("#Service .text_box2", { display: "none" });
svtl.to("#Service .text_box2", { opacity: 1 });
svtl.to("#Service .text_box2", { y: 0 });
svtl.to(".svg_platform", { display: "block" });
svtl.to(ruleNum3,{opacity: 1},"<+=1")
svtl.fromTo(
  "#Service .text_box2 .sub_title",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.fromTo(
  "#Service .text_box2 .sub_text",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.to("#Service .text_box2", { y: 700 }, ">4");
svtl.to("#Service .text_box2", { opacity: 0 });
svtl.to("#Service .text_box2", { display: "none" });
svtl.to("#Service .text_box3", { opacity: 1 });
svtl.to("#Service .text_box3", { y: 0 });
svtl.to(".svg_mobile", { display: "block" });
svtl.to(ruleNum4,{opacity: 1},"<+=1")
svtl.fromTo(
  "#Service .text_box3 .sub_title",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.fromTo(
  "#Service .text_box3 .sub_text",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.to("#Service .text_box3", { y: 700 }, ">4");
svtl.to("#Service .text_box3", { opacity: 0 });
svtl.to("#Service .text_box3", { display: "none" });
svtl.to("#Service .text_box4", { opacity: 1 });
svtl.to("#Service .text_box4", { y: 0 });
svtl.to(".svg_service", { display: "block" });
svtl.fromTo(
  "#Service .text_box4 .sub_title",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.fromTo(
  "#Service .text_box4 .sub_text",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 }
);
svtl.to("#Service .text_box4", { y: 700 }, ">4");
svtl.to("body", { overflow: "hidden" });

let rocket = gsap.timeline({
  scrollTrigger: {
    trigger: servicePanel,
    start: "top top",
    end: "bottom -1000%",
    pin: true,
    scrub: true,
    markers:true,
  },
});
rocket.set(".rocket", { display: "block", x: 800, y: 0 });
rocket.set(".cloud1", { x: 1000, y: -1000 });
rocket.set(".cloud2", { x: 1000, y: -1000 });
rocket.to(".rocket", { x: 800, y: 100, scale: 1.1 });
rocket.to(".cloud1", { display: "block", x: 1000, y: 1000 });
rocket.to(".cloud2", { display: "block", x: 300, y: 1000 });
rocket.set(".cloud1", { x: 1900, y: -1000 });
rocket.set(".cloud2", { x: 2400, y: -1000 });
rocket.to(".rocket", { x: 600, y: 100, scale: 1.0, rotation: -40 });
rocket.to(".rocket", { rotation: -20 });
rocket.to(".rocket", { rotation: 0 });
rocket.to(".rocket", { rotation: 20 });
rocket.to(".rocket", { x: 600, y: 100, scale: 1, rotation: 40, duration: 3 });
rocket.to(".cloud1", { display: "block", x: -1000, y: 1000 });
rocket.to(".cloud2", { display: "block", x: 1200, y: 1000 });
rocket.to(".rocket", { x: 900, y: 100, scale: 1.1, duration: 1 });
rocket.to(".rocket", { rotation: 0 });
rocket.fromTo(".ball2_green", { opacity: 0, y: 0 }, { opacity: 1, y: -200 });
rocket.to(".ball2_green", { scale: 400, duration: 1 });

// const masterTimeline = gsap.timeline();
// masterTimeline.add(svtl).add(rocket, 0);
// masterTimeline.play();

let sections = gsap.utils.toArray("section[data-target]");

sections.forEach((section) => {
  let target = section.getAttribute("data-target");
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onToggle: (self) => {
      if (self.isActive) {
        setActive(target);
      }
    },
  });
});

const cardLink = document.querySelector(".card a");

cardLink.addEventListener("mousemove", (e) => {
  const x = e.clientX - cardLink.offsetLeft;
  const y = e.clientY - cardLink.offsetTop;

  cardLink.style.setProperty("--mask-position", `${x}px ${y}px`);
});

var custom_cursor = document.getElementById("custom_cursor");
var body = document.querySelector("body");

function custom_show_cursor() {
  if (custom_cursor.classList.contains("custom_cursor_hidden")) {
    custom_cursor.classList.remove("custom_cursor_hidden");
  }
  custom_cursor.classList.add("custom_cursor_visible");
}

function custom_hide_cursor() {
  if (custom_cursor.classList.contains("custom_cursor_visible")) {
    custom_cursor.classList.remove("custom_cursor_visible");
  }
  custom_cursor.classList.add("custom_cursor_hidden");
}

function custom_mousemove(e) {
  custom_show_cursor();
  var custom_cursor_width = custom_cursor.offsetWidth * 0.5;
  var custom_cursor_height = custom_cursor.offsetHeight * 0.5;
  var custom_cursor_x = e.clientX - custom_cursor_width;
  var custom_cursor_y = e.clientY - custom_cursor_height;
  var custom_cursor_pos = `translate(${custom_cursor_x}px, ${custom_cursor_y}px)`;
  custom_cursor.style.transform = custom_cursor_pos;
}
window.addEventListener("mousemove", custom_mousemove);
body.addEventListener("mouseleave", custom_hide_cursor);

function custom_hover_cursor() {
  custom_cursor.classList.add("custom_cursor_hover");
}

function custom_unhover_cursor() {
  custom_cursor.classList.remove("custom_cursor_hover");
}
document.querySelectorAll("a").forEach((item) => {
  item.addEventListener("mouseover", custom_hover_cursor);
  item.addEventListener("mouseleave", custom_unhover_cursor);
});
document.querySelectorAll("input").forEach((item) => {
  item.addEventListener("mouseover", custom_hover_cursor);
  item.addEventListener("mouseleave", custom_unhover_cursor);
});
document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("mouseover", custom_hover_cursor);
  item.addEventListener("mouseleave", custom_unhover_cursor);
});
document.querySelectorAll(".mycustomclass").forEach((item) => {
  item.addEventListener("mouseover", custom_hover_cursor);
  item.addEventListener("mouseleave", custom_unhover_cursor);
});

var accordionBtn = document.querySelectorAll(".accordionTitle");
var allTexts = document.querySelectorAll(".text");
var accIcon = document.querySelectorAll(".accIcon");

// event listener
accordionBtn.forEach(function (el) {
  el.addEventListener("click", toggleAccordion);
});

// function
function toggleAccordion(el) {
  var targetText = el.currentTarget.nextElementSibling.classList;
  var targetAccIcon = el.currentTarget.children[0];
  var target = el.currentTarget;

  if (targetText.contains("show")) {
    targetText.remove("show");
    targetAccIcon.classList.remove("anime");
    target.classList.remove("accordionTitleActive");
  } else {
    accordionBtn.forEach(function (el) {
      el.classList.remove("accordionTitleActive");

      allTexts.forEach(function (el) {
        el.classList.remove("show");
      });

      accIcon.forEach(function (el) {
        el.classList.remove("anime");
      });
    });

    targetText.add("show");
    target.classList.add("accordionTitleActive");
    targetAccIcon.classList.add("anime");
  }
}

/*07-12 추가 intro marquee*/
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap
  .to(".marquee__part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".marquee__inner", { xPercent: -50 });

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = window.pageYOffset;
});
/*07-12 추가*/

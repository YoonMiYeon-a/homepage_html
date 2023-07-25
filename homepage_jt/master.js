gsap.registerPlugin(ScrollTrigger );

const triggerCheckbox = document.getElementById('trigger');
const pColors = [];

// nav 안에 있는 모든 p 태그들의 color 값을 배열에 저장하는 함수를 정의합니다.
function storePColors() {
  const pTags = document.querySelectorAll('header.fixed a');
  pTags.forEach(pTag => {
    pColors.push(window.getComputedStyle(pTag).color);
  });
}

// 체크박스 상태 변경 시 이벤트 핸들러를 등록합니다.
triggerCheckbox.addEventListener('change', function () {
  if (triggerCheckbox.checked) {
    // 체크박스가 체크되었을 때, header의 color 속성을 "#fff"로 변경합니다.
    gsap.to('header.fixed a', { color: '#fff' });
    gsap.to('header.fixed .logo a', { color: '#fff' });
  } else {
    // 체크박스가 체크 해제되었을 때, 저장된 color 값을 가져와서 header의 color 속성을 복원합니다.
    const headerNavPTags = document.querySelectorAll('header.fixed a');
    headerNavPTags.forEach((pTag, index) => {
      gsap.to(pTag, { color: pColors[index] });
    });
  }
});

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

let aboutSection = document.querySelector(".About");
let tl = gsap.timeline();
tl.set("html",{overflow:"hidden"})
tl.set(".text_box", { x: 545 });
tl.set(".hand", { x: -750, y: 110, delay: 0, opacity: 1 });
tl.to(".hand", { x: 50, y: -15, delay: 0 });
tl.to(".line2", { duration: 3, width: 700 });
tl.to(".hand", { x: 770, y: 10, duration: 3 }, "<");
tl.set(".ball", { x: -230, y: 30, scale : 2});
tl.to(".ball", { opacity: 1, duration: 1 });
tl.set(".ball2", { x: -236, y: 36 });
tl.to(".hand", { x: 1350, y: -45, ease: "Power1.easeInOut"  });
tl.to(".text_box", { x: -545 },">-1");
tl.to(".hand", { x: 1250, y: -35, delay: 0 });
tl.to(".hand", { x: 1130, y: -70, delay: 0 });
tl.to(".hand", { x: 1500, y: 30, delay: 0 });
tl.to(".hand", { x: 2100, y: 30, delay: 0 });
tl.to(".hand", { display: "none" });
tl.to(".line2", { opacity: 0 });
tl.to("body", { overflow: "hidden" });
tl.to("#About .marquee", { opacity: 0 },"<");
tl.to(".ball2", { scale: 410, duration: 1 });
tl.to("#About .marquee", { display: "none" },">");
tl.to(".logo img", { attr: { src: "./assets/images/logo_jt_eng_white.png" } });
tl.to("body", { backgroundColor: "#000" });
tl.to("header", { borderColor: "transparent" },">")
tl.to("header a", { color: "#fff" },">")
tl.to("header label span", { backgroundColor:"#fff" },">")
tl.to(".top_btn a", { color:"#fff" },">")
tl.to(".ball", { display: "none" });
tl.to(".ball", { display: "none" });
tl.to("body", { overflow: "auto" });
tl.to(".text_box2 .text_icon", { opacity: 1 });
tl.to(".text_box2 .text_icon", { display: "block" });
tl.fromTo(".text_box2 .title p", { x: 40, opacity: 0 }, { x: 0, opacity: 1 });
tl.fromTo(".sub_tit", { x: 40, opacity: 0 }, { x: 0, opacity: 1 });
tl.to(".text_box2 .dot_icon", { display: "block" });
tl.to(".text_box2 .arrow_icon", { display: "block" });
tl.set("html",{overflow:"auto"})
tl.set("html",{overflowX:"hidden"})

tl.duration(10);


const serviceSection = document.querySelector("#Service");
let svtl = gsap.timeline({
  scrollTrigger: {
    trigger: serviceSection,
    start: "top top",
    end: "bottom -850%",
    pin: true,
    scrub: 1,
  },
});

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
svtl.fromTo(".ball2_green", { opacity: 0, y: 0 }, { opacity: 1, x: 600, y: -190 });
svtl.to("body", {overflow:"hidden"});
svtl.to(".ball2_green", { scale: 450, duration: 7 });
svtl.to("#Service", {backgroundColor:"#50b048"});
svtl.to(".ball2_green", {display:"none"});

const servicePanel = document.querySelector("#Service .panel");


const roc = document.querySelector(".rocket")
let rocket = gsap.timeline({
  repeat: -1,
  scrollTrigger: {
    trigger: servicePanel,
    start: "top top",
    end: "bottom -1100%",
    pin: true,
    onLeave: () => {
      rocket.to(roc ,{opacity: 0})
      rocket.to(".cloud" ,{opacity: 0})
    },
    onLeaveBack: () => {
      rocket.to(roc,{opacity: 1}) 
      rocket.to(".cloud" ,{opacity: 1})
    },    
  },
});
rocket.set(roc, { x: 40, y: 20 });
rocket.to(roc, {
  x: "+=2",
  yoyo: true,
  repeat: 40,
  duration: 0.05,
  ease: "power1.easeInOut"
})
.to(roc,{y: -300, duration:1 ,ease: "Power2.easeInOut"})
.to(roc,{x: 600, y: -50, scale: 1.5, duration:2, ease: "Power2.easeInOut"})
.to(roc, {
  x: "+=4",
  yoyo: true,
  repeat: 40,
  duration: 0.05,
  ease: "power1.easeOut"
})

.to(roc,{x: 650, scale: 2, duration:2,ease: "Power2.easeInOut"})
.to(roc,{rotate: -10, x: -600, scale: 1, duration: 3,ease: "Power2.easeInOut"})
.to(roc,{rotate: 0, ease: "Power1.easeOut"},">-0.5")
rocket.to(roc, {
  x: "+=2",
  yoyo: true,
  repeat: 20,
  duration: 0.05,
  ease: "power1.easeOut"
})
.to(roc,{x: 0, rotate: 10,duration:1.5, ease: "Power2.easeInOut"})
.to(roc,{rotate: 0, ease: "Power1.easeOut"},">-0.5")
.to(roc, { x: 40, y: 20 , ease: "Power2.easeInOut"});



let cloud = gsap.timeline({ repeat: -1 });

cloud.set(".cloud1", { x: 300, y: -1300 });
cloud.set(".cloud2", { x: 400, y: -1300 });
cloud.set(".cloud3", { x: 600, y: -1300 });
cloud.set(".cloud4", { x: 900, y: -1300 });
cloud.set(".cloud5", { x: 1400, y: -1300 });
cloud.set(".cloud6", { x: 1600, y: -1300 });
cloud.to(".cloud1", { display: "block", y: 1000, duration: 1 });
cloud.to(".cloud6", { display: "block", y: 1000, duration: 4 });
cloud.to(".cloud2", { display: "block", y: 1000, duration: 2 });
cloud.to(".cloud4", { display: "block", y: 1000, duration: 3 });
cloud.to(".cloud5", { display: "block", y: 1000, duration: 1 });
cloud.to(".cloud3", { display: "block", y: 1000, duration: 2 });
cloud.set(".cloud1", { x: 300, y: -1300, scale: 1.2 });
cloud.set(".cloud2", { x: 400, y: -1300, scale: 1.4 });
cloud.set(".cloud3", { x: 600, y: -1300, scale: 1.5 });
cloud.set(".cloud4", { x: 900, y: -1300, scale: 1.8 });
cloud.set(".cloud5", { x: 1400, y: -1300, scale: 0.7 });
cloud.set(".cloud6", { x: 1600, y: -1300, scale: 0.5 });
cloud.to(".cloud5", { display: "block", y: 1300 });
cloud.to(".cloud2", { display: "block", y: 1300 });
cloud.to(".cloud1", { display: "block", y: 1300 });
cloud.to(".cloud3", { display: "block", y: 1300 });
cloud.to(".cloud6", { display: "block", y: 1300 });
cloud.to(".cloud4", { display: "block", y: 1300 });

ScrollTrigger.create({
  trigger: "#Service",
  endTrigger: "#Experience",
  animation: cloud,
});
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
/*07-25 modal 추가*/ 
const modal = document.querySelector(".modal-layer");
const html = document.querySelector("html");

// Modal Open Button
const showBtns = document.querySelectorAll(".modal-show");
showBtns.forEach((showBtn) => {
  showBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // const modalId = showBtn.getAttribute("data-id");
    // const modal = document.querySelector(`[data-modal-id="${modalId}"]`);

    // if (modal) {
    modal.style.display = "block";
    html.style.overflow = "hidden";
    // }
  });
});
// Modal Close Button
const hideBtns = document.querySelectorAll(".modal-hide");

hideBtns.forEach((hideBtn) => {
  hideBtn.addEventListener("click", (e) => {
    // const modal = hideBtn.closest(".modal");
    // if (modal) {
    modal.style.display = "none";
    html.style.overflow = "auto";
    //   }
  });
});

// Modal Focus Trap
const focusableEls = modal.querySelectorAll(
  "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"
);
const firstFocusableEl = focusableEls[0];
const lastFocusableEl = focusableEls[focusableEls.length - 1];

const modalTrapFocus = (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
  if (event.key === "Tab") {
    if (document.activeElement === lastFocusableEl && !event.shiftKey) {
      firstFocusableEl.focus();
      event.preventDefault();
    } else if (document.activeElement === firstFocusableEl && event.shiftKey) {
      lastFocusableEl.focus();
      event.preventDefault();
    }
  }
};

document.addEventListener("keydown", modalTrapFocus);

/*07-25 modal 추가*/ 
gsap.registerPlugin(ScrollTrigger);

gsap.set(".wrapper", { xPercent: -40, yPercent: -30 });
// gsap.set("#no01", { y: 244 });
// gsap.set("#no02", { y: 728 });
gsap.set("#no03", { y: 160 });
gsap.set("#no04", { y: 679 });

const springAnim = gsap.timeline();

springAnim.to(
  ".system_mark_wrap span:nth-child(1)",
  { y: -10, yoyo: true, repeat: -1, ease: "Power1.easeInOut", duration: 1 },
  "+=0.6"
);
springAnim.to(
  ".system_mark_wrap span:nth-child(2)",
  { y: -5, yoyo: true, repeat: -1, ease: "Power1.easeInOut", duration: 1 },
  "+0.6"
);
springAnim.to(
  ".system_mark_wrap span:nth-child(3)",
  { y: 5, yoyo: true, repeat: -1, ease: "Power1.easeInOut", duration: 1 },
  "+0.6"
);
springAnim.to(
  ".system_mark_wrap span:nth-child(4)",
  { y: 10, yoyo: true, repeat: -1, ease: "Power1.easeInOut", duration: 1 },
  "+0.6"
);

var boxWidth = 1626,
  totalWidth = boxWidth * 3, //  * n of boxes
  // no01 = document.querySelectorAll("#no01 .box"),
  // no02 = document.querySelectorAll("#no02 .box"),
  no03 = document.querySelector("#no03 .box"),
  no04 = document.querySelector("#no04 .box"),
  dirFromLeft = "+=" + totalWidth,
  dirFromRight = "-=" + totalWidth;

var mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction, repeat) {
  gsap.set(which, {
    x: function (i) {
      return i * boxWidth;
    },
  });
  var action = gsap.timeline().to(which, {
    x: direction,
    modifiers: {
      x: (x) => mod(parseFloat(x)) + "px",
    },
    duration: time,
    ease: "none",
    repeat: repeat,
  });
  return action;
}

// function introIsol() {
//   var introIsol = gsap.timeline();
//   var lineSpans = []; // lineSpans 변수를 배열로 선언

//   document.addEventListener("DOMContentLoaded", function () {
//     var text = document.querySelector(".title_wrap");

//     var lines = [
//       "Online Financial Total",
//       "Service Realization",
//       "Specialist Group",
//     ];

//     var lineContainerWrap = document.createElement("div");
//     lineContainerWrap.classList.add("line-container-wrap");

//     lines.forEach(function (line) {
//       var lineContainer = document.createElement("div");
//       lineContainer.classList.add("line-container");

//       var letters = Array.from(line);
//       var lineSpansTemp = [];
//       letters.forEach(function (letter) {
//         var span = document.createElement("span");
//         span.textContent = letter;
//         if (letter !== " ") {
//           span.classList.add("letter");
//         } else {
//           span.classList.add("letter");
//           span.classList.add("space");
//         }
//         lineContainer.appendChild(span);
//         lineSpansTemp.push(span);
//       });

//       var lineBreak = document.createElement("br");
//       lineContainer.appendChild(lineBreak);

//       lineContainerWrap.appendChild(lineContainer);

//       lineSpans = lineSpans.concat(lineSpansTemp); // lineSpans 배열에 임시 배열 요소 추가
//     });

//     const subText = document.querySelectorAll(".sub_title_wrap p");
//     introIsol.to("body", { overflow: "hidden" });
//     introIsol.fromTo(
//       lineSpans,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, stagger: 0.05 }
//     );
//     introIsol.fromTo(
//       subText,
//       { opacity: 0, x: 30 },
//       { opacity: 1, x: 0, stagger: 0.05 }
//     );
//     introIsol.to(lineSpans, {
//       opacity: 0,
//       x: -30,
//       delay: 1,
//       stagger: 0.01,
//     });
//     introIsol.to(subText, { opacity: 0, x: -30, stagger: 0.01 }, "-=0.5");
//     introIsol.to("body", { overflowY: "auto" });
//     text.appendChild(lineContainerWrap);
//   });

//   return introIsol;
// }

function introScene() {
  const about = document.querySelector(".about");
  const scaleTxt = document.querySelector(".intro_crossboard p");
  const crossboardWrap = document.querySelector(".crossboard_wrap");

  var introScene = gsap.timeline();
  // eslint-disable-next-line no-unused-vars
  let marquee3;
  // eslint-disable-next-line no-unused-vars
  let marquee4;
  introScene
    .to(scaleTxt, { opacity: 1 })
    .to(scaleTxt, { scale: 200, duration: 5 })
    .to(scaleTxt, { scale: 25 })
    .to(scaleTxt, { opacity: 0 });
  introScene.fromTo(
    ".crossboard_title p",
    { x: 300, opacity: 0 },
    { x: 0, opacity: 1 }
  );
  introScene.add(() => {
    marquee3 = marquee(no03, 7, dirFromLeft, -1);
    marquee4 = marquee(no04, 7, dirFromRight, -1);
  });
  introScene.fromTo(
    ".img_txt_wrap",
    { x: 300, opacity: 0 },
    { x: 0, opacity: 1 }
  );
  introScene.fromTo(
    ".group_txt_wrap",
    { x: 300, opacity: 0 },
    { x: 0, opacity: 1 }
  );
  introScene.fromTo(
    ".system_mark_wrap",
    { opacity: 0 },
    { opacity: 1 },
    "+=0.1"
  );
  introScene.fromTo(
    ".system_mark_wrap span",
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, stagger: 0.2 },
    "start"
  );
  introScene.add(() => {
    springAnim.play(); // springAnim 실행
  });

  introScene.to(".cross_link a:first-child", { display: "block" });
  introScene.fromTo(
    ".cross_link a:first-child",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1 }
  );
  introScene.to(".arrow_svg1", { display: "block", duration: 6 });
  introScene.to(".arrow_svg1", { opacity: 0 }, "-=0.6");
  introScene.to(".arrow_svg1", { display: "none" });
  introScene.to(".crossboard_main", { opacity: 0 });
  introScene.to(".system_mark_wrap", { opacity: 0 });
  introScene.to(".system_mark_wrap span", { opacity: 0 });
  introScene.to(".cross_link a:first-child", { opacity: 0 });
  introScene.to(".cross_link a:first-child", { display: "none" });

  introScene.fromTo(".system_mark_wrap", { opacity: 0 }, { opacity: 1 });
  introScene
    .fromTo(".jt_mark_wrap", { opacity: 0 }, { opacity: 1 })
    // introScene.add(() => {
    //   crossboardWrap.classList.toggle("system-on");
    //   crossboardWrap.classList.toggle("jt-on");
    //   no03.classList.toggle("system-on");
    //   no03.classList.toggle("jt-on");
    //   no04.classList.toggle("system-on");
    //   no04.classList.toggle("jt-on");
    // });
    // introScene.to(".crossboard_main", { opacity: 1 });
    // introScene.to(no03, { opacity: 0, duration: 2 });
    // introScene.to(no03, { display: "none" });

    // introScene
    //   .to(".jt_mark_svg", { display: "block" })
    //   .to(".cross_link a:last-child", { opacity: 1, duration: 1 })
    //   .to(".arrow_svg2", { display: "block", duration: 3 })
    .to(".crossboard_wrap", { opacity: 0, duration: 3 })
    .to(".crossboard_wrap", { display: "none" })
    .to("header", { color: "#000" })
    .to("body", { backgroundColor: "#fff", duration: 1 })
    .to("#no03", { opacity: 0 })
    .to("#no04", { opacity: 0 })
    .to("#no03", { display: "none" })
    .to("#no04", { display: "none" });

  ScrollTrigger.create({
    trigger: about,
    pin: true,
    start: "top top",
    end: "bottom -1000%",
    scrub: true,
    animation: introScene,
  });
  return introScene;
}

var master = gsap.timeline();
master.play();
master
  // .add(introIsol())
  .add(function () {
    // introIsol 애니메이션이 끝난 후에 실행되는 함수
    var marquee1 = marquee(no01, 4, dirFromRight, 0);
    var marquee2 = marquee(no02, 4, dirFromLeft, 0);
    // introIsol, marquee1, marquee2가 동시에 시작되도록 설정
    master.add([
      marquee1.delay(introIsol().endTime()),
      marquee2.delay(introIsol().endTime()),
    ]);
  })
  .add(introScene());

// marquee,
// // introIsol,
// introScene,
// master,

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
          const targetElement = document.querySelector(".progress_wrap");

          for (let i = 0; i < containPage.length; i++) {
            const spanElement = document.createElement("span");
            targetElement.appendChild(spanElement);
          }
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
gsap.to("#About .panel", {
  x: () => -(oneContainer.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: oneContainer,
    pin: true,
    scrub: 1,
    end: () => "+=" + (oneContainer.offsetWidth - innerWidth),
  },
});

let aboutPanelone = document.querySelector("#About .panel:first-child");
gsap.to("#About .panel:first-child", {
  scrollTrigger: {
    trigger: aboutPanelone,
    scrub: 1,
    start: "top center",
    end: "bottom -300%",
    toggleClass: "active",
  },
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
// var pos = document.documentElement;
// pos.addEventListener("mousemove", (e) => {
//   pos.style.setProperty("--x", e.clientX + "px");
//   pos.style.setProperty("--y", e.clientY + "px");
// });

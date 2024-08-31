document.querySelectorAll("header.nav ion-icon").forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    document.querySelector("header.nav").classList.toggle("nav-open");
    document.querySelector('body').classList.toggle("overflow");
  });
});
document.querySelectorAll(".hn-li").forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    document.querySelector("header.nav").classList.remove("nav-open");
    document.querySelector('body').classList.remove("overflow");
  });
});
document.querySelector(".year").textContent = new Date().getFullYear();
new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      document.querySelector("header.nav").classList.add("sticky");
      document.querySelector("section.hero").style = "margin-top:9.6rem;";
    } else {
      document.querySelector("header.nav").classList.remove("sticky");
      document.querySelector("section.hero").style = "margin-top:0;";
    }
  },
  { root: null, threshold: 0, rootMargin: "-80px"}
).observe(document.querySelector("section.hero"));

```javascript
/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});


/* Fermer le menu après avoir cliqué */

document.querySelectorAll(".navigation a").forEach(link => {

  link.addEventListener("click", () => {

    navigation.classList.remove("active");

  });

});


/* =========================
   HEADER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background = "rgba(20, 17, 13, 0.96)";

  } else {

    header.style.background = "rgba(20, 17, 13, 0.88)";

  }

});
```

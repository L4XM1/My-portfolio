// **** footer current year

const footerYear = document.getElementById("footer-year");
footerYear.innerHTML = new Date().getFullYear();

// *** active page nav link background

// Get all links
const links = document.querySelectorAll(".navbar-desktop__navbar-list-item");

// Add event listener to each link
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    links.forEach((l) => l.classList.remove("active"));
    // Add active class to (this) clicked link
    this.classList.add("active");
  });
});

// *** toggle hamburger/x button and navbar__list (the list disappears when one link is activated)

// Get the open and close buttons
const openBtn = document.querySelector(".navbar-main-btn-open");
const closeBtn = document.querySelector(".navbar-main-btn-close");

// Get the links container
const navbarMob = document.querySelector(".navbar-mobile");

let navbarMobOpen = false; // navbar je zatvoren
openBtn.addEventListener("click", function () {
  // kada kliknem openBtn
  if (navbarMobOpen) {
    // ako je nav zatvoren, tj. ako je true da je false, ulazi u ovaj blok
    navbarMob.style.display = "block"; // prikazi nav
    openBtn.style.display = "none"; // ukloni openBtn dugme
    closeBtn.style.display = "block"; // prikazi X dugme
    navbarMobOpen = true;
  } else {
    //  ako je navbar otvoren
    navbarMob.style.display = "block"; // prikazan je nav
    openBtn.style.display = "none"; // ukloni openBtn
    closeBtn.style.display = "block"; // prikazi closeBtn(X)
    navbarMobOpen = true; // i dalje ostaje open nav
  }
});

closeBtn.addEventListener("click", function () {
  //kada kliknem na X

  if (navbarMobOpen) {
    navbarMob.style.display = "none"; //ne prikazuj navbar
    closeBtn.style.display = "none"; // ukloni X dugme
    openBtn.style.display = "block"; //prikazi hamburger dugme
    navbarMobOpen = false;
  }
});

//***da nestane nav meni nakon klika na link
const navLinksMobile = document.querySelectorAll(
  ".navbar-mobile__navbar-list .navbar-mobile__navbar-list-item"
);

for (let i = 0; i < navLinksMobile.length; i++) {
  navLinksMobile[i].addEventListener("click", function () {
    navbarMob.style.display = "none";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    navbarMobOpen = false;
  });
}

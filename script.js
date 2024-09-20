var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        start:"50% 50%",
        end:"150% 50%",
        scrub:5,
        pin: true
    }
})
tl.to("#lineone",{
    marginTop: "-120vh",
    duration:"3",

} , 'a')
tl.to("#linetwo",{
    marginTop: "20vh",
    duration:"3",

} , 'a')

const swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
});

// Add a Google Map to the #map element
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 21.1234, lng: 71.1234 },
      zoom: 15,
    });
    const marker = new google.maps.Marker({
      position: { lat: 21.1234, lng: 71.1234 },
      map: map,
      title: "Royal Platinum",
    });
  }
  
  // Add an event listener to the #get-directions button
  document.getElementById("get-directions").addEventListener("click", function() {
    const url = `https://www.google.com/maps/dir/?api=1&destination=Royal+Platinum,+Palanpur+Canal+Road,+Opp+Shri+Pad+Residency,+Palanpur,+Surat,+Gujarat,+India`;
    window.open(url, "_blank");
  });
  //  var map = L.map('map').setView([21.1234, 71.1234], 15);
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  //   subdomains: ['a', 'b', 'c']
  // }).addTo(map);
  // L.marker([21.1234, 71.1234]).addTo(map);
// Responsive
// const navToggleBtn = document.getElementById('nav-toggle-btn');
// const navLinks = document.getElementById('nav-links');

// navToggleBtn.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
// });
const navToggleBtn = document.getElementById('nav-toggle-btn');
const navLinks = document.getElementById('nav-links');

navToggleBtn.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
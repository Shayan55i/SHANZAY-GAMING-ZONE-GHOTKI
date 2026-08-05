/* ===========================
   TOURNAMENT COUNTDOWN
=========================== */

const targetDate = new Date("September 1, 2026 14:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dayEl = document.getElementById("days");
    const hourEl = document.getElementById("hours");
    const minuteEl = document.getElementById("minutes");
    const secondEl = document.getElementById("seconds");

    if (dayEl && hourEl && minuteEl && secondEl) {

        dayEl.innerHTML = days;
        hourEl.innerHTML = hours;
        minuteEl.innerHTML = minutes;
        secondEl.innerHTML = seconds;

    }

}, 1000);


/* ===========================
   MOBILE MENU
=========================== */

const menu = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menu && navbar) {

    menu.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}


/* ===========================
   DARK / LIGHT MODE
=========================== */

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.innerHTML = "☀️";

        } else {

            themeBtn.innerHTML = "🌙";

        }

    });

}


/* ===========================
   GALLERY LIGHTBOX
=========================== */

const galleryImages = document.querySelectorAll(".gallery-card img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

if (lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(function (img) {

        img.addEventListener("click", function () {

            lightbox.style.display = "flex";
            lightboxImg.src = this.src;

        });

    });

    closeBtn.addEventListener("click", function () {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {

            lightbox.style.display = "none  ";

        }

    });

}
/* ===========================
   WHATSAPP BOOKING
=========================== */

function sendBooking() {

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const consoleName = document.getElementById("console");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const hours = document.getElementById("hours");
    const players = document.getElementById("players");

    if (!name || !phone || !consoleName || !date || !time || !hours || !players) {
        return;
    }

    if (
        name.value === "" ||
        phone.value === "" ||
        consoleName.value === "" ||
        date.value === "" ||
        time.value === "" ||
        hours.value === "" ||
        players.value === ""
    ) {

        alert("Please fill in all booking details.");
        return;

    }

    const message =
`🎮 *SHANZAY GAMING ZONE BOOKING*

👤 Name: ${name.value}

📱 WhatsApp: ${phone.value}

🎮 Console: ${consoleName.value}

📅 Booking Date: ${date.value}

🕒 Time Slot: ${time.value}

⏳ Hours: ${hours.value}

👥 Players: ${players.value}

Please confirm my booking.`;

    const url =
        "https://wa.me/923041989567?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}
// banner
let slideIndex = 0;
const slides = document.querySelectorAll(".banner-slide");
const totalSlides = slides.length;

document.querySelector(".prev").addEventListener("click", showPrevSlide);
document.querySelector(".next").addEventListener("click", showNextSlide);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-index * 100}%)`;
  });
  slideIndex = index;
}

function showPrevSlide() {
  slideIndex = slideIndex === 0 ? totalSlides - 1 : slideIndex - 1;
  showSlide(slideIndex);
}

function showNextSlide() {
  slideIndex = slideIndex === totalSlides - 1 ? 0 : slideIndex + 1;
  showSlide(slideIndex);
}

setInterval(showNextSlide, 5000);

showSlide(slideIndex);

// Ticker Berita
let tickerInterval;

function startTicker() {
  const ticker = document.querySelector(".berita-wrapper");
  ticker.style.animationPlayState = "running";
}

function stopTicker() {
  const ticker = document.querySelector(".berita-wrapper");
  ticker.style.animationPlayState = "paused";
}

document.addEventListener("DOMContentLoaded", startTicker);

document.addEventListener("DOMContentLoaded", function () {
  // Tampilkan atau sembunyikan menu aksesibilitas
  const accessibilityMenu = document.querySelector(".accessibility-menu");
  const accessibilityToggle = document.querySelector(".accessibility-toggle");

  accessibilityToggle.addEventListener("click", () => {
    accessibilityMenu.style.display = accessibilityMenu.style.display === "block" ? "none" : "block";
  });

  // Mengubah ukuran teks
  const body = document.body;
  let fontSize = 16;

  document.getElementById("increase-font").addEventListener("click", () => {
    fontSize += 2;
    body.style.fontSize = fontSize + "px";
  });

  document.getElementById("decrease-font").addEventListener("click", () => {
    if (fontSize > 10) {
      fontSize -= 2;
      body.style.fontSize = fontSize + "px";
    }
  });

  // Reset semua pengaturan
  document.getElementById("reset").addEventListener("click", () => {
    body.style.fontSize = "";
    fontSize = 16;
  });

  // Tombol Kembali ke Atas
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Format nomor
document.addEventListener("DOMContentLoaded", function () {
  const formatNumber = (number) => {
    if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "K";
    } else {
      return number;
    }
  };

  document.getElementById("online").textContent = formatNumber(7);
  document.getElementById("today").textContent = formatNumber(1234);
  document.getElementById("yesterday").textContent = formatNumber(1098);
  document.getElementById("thisMonth").textContent = formatNumber(24567);
  document.getElementById("thisYear").textContent = formatNumber(245789);
  document.getElementById("total").textContent = formatNumber(1245789);
});

// Berita Full
function toggleBerita(articleId) {
  const ringkasan = document.getElementById("ringkasan-berita-" + articleId);
  const isi = document.getElementById("isi-berita-" + articleId);
  const button = ringkasan.nextElementSibling.nextElementSibling;

  if (isi.classList.contains("d-none")) {
    isi.classList.remove("d-none");
    ringkasan.classList.add("d-none");
    button.innerText = "Tutup";
  } else {
    isi.classList.add("d-none");
    ringkasan.classList.remove("d-none");
    button.innerText = "Baca Selengkapnya";
  }
}

// Video Profil
document.querySelectorAll(".video-container").forEach(function (container) {
  container.addEventListener("click", function () {
    let iframe = container.querySelector("iframe");
    let overlay = container.querySelector(".video-overlay");
    iframe.src += "?autoplay=1";
    overlay.style.display = "none";
  });
});

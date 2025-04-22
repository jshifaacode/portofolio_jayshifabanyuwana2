document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    sec.style.opacity = 0;
    sec.style.transition = "opacity 1s ease-out";
  });

  window.addEventListener("scroll", () => {
    sections.forEach((sec) => {
      const pos = sec.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        sec.style.opacity = 1;
      }
    });
  });
});

// Toggle Navbar for mobile
const toggleButton = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

(function () {
  emailjs.init("VmzFPugUCXqw5TkMI"); // public key dari EmailJS aku
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form dari reload halaman

    emailjs.sendForm("service_d1q5llw", "template_s4vqmwm", this).then(
      function (response) {
        console.log("Success:", response);
        alert("Pesan telah terkirim!");
        // Reset form setelah pesan berhasil dikirim
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("Error:", error);
        alert("Pesan gagal dikirim.");
      }
    );
  });

// SCROLL SUAVE PARA LINKS DO MENU
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// BOTÃO "CONHEÇA NOSSAS SOLUÇÕES"
function scrollToSection() {
  document.getElementById("solucoes").scrollIntoView({
    behavior: "smooth"
  });
}


// BOTÃO FALE CONOSCO (WHATSAPP)
function faleConosco() {
  const numero = "5511999999999"; // troca pelo número real
  const mensagem = "Olá, gostaria de saber mais sobre a EcoHydro!";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}


// BOTÃO VER PRODUTO (SCROLL)
function verProduto() {
  document.querySelector(".product").scrollIntoView({
    behavior: "smooth"
  });
}


// ANIMAÇÃO AO SCROLL (fade-in)
const elements = document.querySelectorAll(".card, .product, .hero-text");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));


// MENU FIXO AO ROLAR
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});
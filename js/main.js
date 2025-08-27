document.querySelector('.menu-toggle')?.addEventListener('click', ()=>{
  document.getElementById('main-nav')?.classList.toggle('show');
});
// Contact Form - dummy submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Terima kasih! Pesan Anda sudah terkirim (dummy).");
      form.reset();
    });
  }
});
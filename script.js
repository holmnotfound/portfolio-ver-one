window.addEventListener('scroll', function(){
    let scrollRef = document.querySelector('.header__scroll');
    if(this.window.scrollY > 150){
        scrollRef.classList.add('fade-out');
    } else {
        scrollRef.classList.remove('fade-out');
    }
});



  const scrollBtn = document.querySelector(".scroll-to-top");

  // Visa/dölj knappen beroende på scroll-position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Lägg till klickhändelse
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });




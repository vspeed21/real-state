const images = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () =>{
  const scroll = this.scrollY / -20;

  images.forEach( (imagen) =>{
    imagen.style.backgroundPositionY = `${scroll}px`;
  })
});
document.addEventListener('DOMContentLoaded', () => {
    const alreadyAnimated = localStorage.getItem('aos-animated');
  
    if (!alreadyAnimated) {
      // Inicializa o AOS
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
  
      // Marca como "já animado"
      localStorage.setItem('aos-animated', 'true');
    } else {
      // Remove as animações (ou mantém o estado final)
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(el => {
        el.removeAttribute('data-aos'); // Remove o atributo para evitar animação
        el.style.opacity = 1; // Garante que os elementos fiquem visíveis
      });
    }
});
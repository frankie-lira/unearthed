document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
  
    // Create a sample gift display (you'll later fetch actual data)
    const giftSection = document.createElement('section');
    giftSection.innerHTML = `
      <h2>Featured Gifts</h2>
      <p>Check out our latest gift offerings!</p>
    `;
  
    // Append the section to the main
    main.appendChild(giftSection);
  });
  
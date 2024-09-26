document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
  
    // Create a logo image element
    const logoImg = document.createElement('img');
    logoImg.src = '/public/logo.png';
    logoImg.alt = 'Unearthed Logo';
    logoImg.style.width = '100px';
  
    // Append the logo to the header
    header.appendChild(logoImg);
  });
  
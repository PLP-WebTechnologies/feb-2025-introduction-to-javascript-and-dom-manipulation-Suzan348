document.addEventListener('DOMContentLoaded', () => {
  
  const heading = document.getElementById('heading');
  const message = document.getElementById('message');
  const boxContainer = document.getElementById('boxContainer');

  const changeTextBtn = document.getElementById('changeTextBtn');
  const changeStyleBtn = document.getElementById('changeStyleBtn');
  const toggleBoxBtn = document.getElementById('toggleBoxBtn');

  
  changeTextBtn.addEventListener('click', () => {
    heading.textContent = "You're awesome!";
    message.textContent = "Thanks for clicking the button!";
  });


  changeStyleBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#ffe082'; // light yellow
    heading.style.color = '#6a1b9a'; // purple
  });

  // Add or remove a box element
  toggleBoxBtn.addEventListener('click', () => {
    const existingBox = document.getElementById('dynamicBox');

    if (existingBox) {
      // If the box exists, remove it
      boxContainer.removeChild(existingBox);
    } else {
      // If the box doesn't exist, create it
      const newBox = document.createElement('div');
      newBox.id = 'dynamicBox';
      newBox.textContent = "👋 Hello! I'm a dynamic box.";
      boxContainer.appendChild(newBox);
    }
  });
});
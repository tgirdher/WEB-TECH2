// script.js
document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('gridContainer');
    const slideshowContainer = document.getElementById('slideshowContainer');
  
    
    const musicData = [
      { id: 1, title: 'Party', imageURL: 'music2.jpg' },
      { id: 2, title: 'Focus', imageURL: 'music1.jpg' },
      { id: 3, title: 'Relax', imageURL: 'music3.jpg' },
      { id: 4, title: 'Devotional', imageURL: 'music4.jpg' },
      { id: 5, title: 'Workout', imageURL: 'music5.jpg' },
      { id: 6, title: 'Energies', imageURL: 'music6.jpg' },

    
    ];
  
  
    function createGridItems() {
      for (const item of musicData) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerHTML = `
          <img src="${item.imageURL}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        `;
        gridItem.addEventListener('click', () => switchToSlideshow(item));
        gridContainer.appendChild(gridItem);
      }
    }
  
    
    function switchToSlideshow(item) {
      gridContainer.style.display = 'none';
      slideshowContainer.style.display = 'block';
      createSlideshow(item);
    }
  
    
    function createSlideshow(item) {
      const slideshowItem = document.createElement('div');
      slideshowItem.classList.add('slideshow-item');
      slideshowItem.innerHTML = `
        <img src="${item.imageURL}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      `;
      slideshowContainer.innerHTML = ''; 
      slideshowContainer.appendChild(slideshowItem);
  
      anime({
        targets: '.slideshow-item',
        translateX: ['100%', '0%'],
        easing: 'easeOutExpo',
        duration: 1000,
      });
    }
  
    
    createGridItems();
  });
  
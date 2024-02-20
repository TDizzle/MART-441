// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Function to handle click on a blank image
  function revealImage(index) {
    const blankImage = document.getElementById(`blank${index}`);
    blankImage.src = actualImages[index];
  }
  
  // Array of blank images
  const blankImages = Array(12).fill('blank-image.png'); // Replace 'blank-image.png' with the path to your blank image
  
  // Array of actual images
  const actualImages = [
    'animal.jpeg',
    'baby bear.jpeg',
    'eagle.jpeg',
    'elk.jpeg',
    'flamingo.jpeg',
    'fox.jpeg',
    'giraffe.jpeg',
    'lion.jpeg',
    'meercat.jpeg',
    'peacock.jpeg',
    'sloth.jpeg',
    'tiger.jpeg',
  ];
  
  // Shuffle the actual images array
  shuffleArray(actualImages);
  
  // Display the images on the screen
  const imageContainer = document.getElementById('imageContainer');
  for (let i = 0; i < 12; i++) {
    const blankImage = document.createElement('img');
    blankImage.src = blankImages[i];
    blankImage.alt = 'Blank Image';
    blankImage.id = `blank${i}`;
    blankImage.addEventListener('click', () => revealImage(i));
  
    imageContainer.appendChild(blankImage);
  }
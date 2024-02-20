function greetCreator(name) {
  if (name === "Tristan Lilly") {
    return "Hello, creator!";
  } else {
    return "Hello, " + name + "!";
  }
}

let mainStory = 1;

function makeChoice(choice) {
  const storyElement = document.getElementById('story');
  const bodyElement = document.body;

  if (mainStory === 1) {
    if (choice === 1) {
      storyElement.innerText = "You chose to go left. You stumble upon a hidden cave.";
      mainStory = 2;
    } else if (choice === 2) {
      storyElement.innerText = "You chose to go towards the valley below. A mysterious figure appears and guides you down the mountain.";
      mainStory = 3;
    } else if (choice === 3) {
      storyElement.innerText = "You choose to sit and watch the sunrise before continuing.";
      mainStory = 4;
    }
  } 
  

  else if (mainStory === 2) {
    if (choice === 1) {
      storyElement.innerText = "You enter the cave and find a treasure chest. Congratulations, you've found the hidden treasure!";
      mainStory = 6;
    } else if (choice === 2) {
      storyElement.innerText = "You decide to leave the cave. The path splits again. Which way do you want to go?";
      mainStory = 1;
    } else if (choice === 3) {
      storyElement.innerText = "You climb out of the cave and spot a waterfall in the distance. What will you do?";
    }
} 


  else if (mainStory === 3) {
    if (choice === 1) {
      storyElement.innerText = "You follow the mysterious figure and discover a hidden village. The villagers welcome you.";
      mainStory = 0;
    } else if (choice === 2) {
      storyElement.innerText = "You decide to part ways with the mysterious figure. The mountain is unforgiving.";
      mainStory = 0;
    } else if (choice === 3) {
      storyElement.innerText = "You climb a tree to get a better view. You spot a river nearby. What will you do?";
    }
  } 


  else if (mainStory === 4) {
    if (choice === 1) {
      storyElement.innerText = "You decide to head down the path. The journey is long but rewarding.";
    } else if (choice === 2) {
      storyElement.innerText = "You change your mind and decide to explore the forest below. The path splits again.";
    } else if (choice === 3) {
      storyElement.innerText = "You rappel down the cliff. You encounter a mysterious creature. What will you do?";
      mainStory = 5;
    }
  } 
  
  else if (mainStory === 5 ) {
    // Handle choices for the mysterious creature scenario
    // ...

    // After handling the scenario, you can give the option to restart
    const restart = confirm("Do you want to restart the story?");
    if (restart) {
      mainStory = 0; // Reset the story to the beginning
      storyElement.innerText = "You wakeup ontop of a mountain... What do you do?";
      changeBackgroundImage(); // Update the background image
    } else {
      // Handle what to do if the user doesn't want to restart
      storyElement.innerText = "Thanks for playing!";
    }
  }

  else if (mainStory === 6 ) {
    
    const restart = confirm("Do you want to restart the story?");

    if (restart) {

      mainStory = 0; 

      storyElement.innerText = "You wakeup ontop of a mountain... What do you do?";
      changeBackgroundImage(); 

    } else {
      
      storyElement.innerText = "Thanks for playing!";
    }
  }

  changeBackgroundImage();

}


function changeBackgroundImage() {
  const bodyElement = document.body;

  switch (mainStory) {
    case 1:
      bodyElement.style.backgroundImage = "url('mountaintop.jpeg')";
      break;
    case 2:
      bodyElement.style.backgroundImage = "url('glacialCave.jpeg')";
      break;
    case 3:
      bodyElement.style.backgroundImage = "url('mountainValley.jpeg')";
      break;
    case 4:
      bodyElement.style.backgroundImage = "url('mountainSunrise.jpeg')";
      break;
    case 5:
      bodyElement.style.backgroundImage = "url('mysteriousCreature.jpeg')" ;
      break;
    case 6:
      bodyElement.style.backgroundImage = "url('glacialCave.jpeg')";
      break;

    

    default:
      bodyElement.style.backgroundImage = "url('mountaintop.jpeg')"; 
  }
}


function getUserInput() {
  const userName = document.getElementById('userName').value;

  alert('Sup, ' + userName + '!');
}
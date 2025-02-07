// Your Unsplash API Access Key
const accessKey = 'G6DSIax2RCnB84vAHn1CGsCW8aNmrKtE0wNPWuEWHn8';

// Function to get a random fitness image from Unsplash
async function getFitnessImage() {
  const url = `https://api.unsplash.com/photos/random?query=fitness&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Select the first image in the response
    const imageUrl = data[0].urls.regular;
    const imageAlt = data[0].alt_description;

    // Add the image to your webpage
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = imageAlt;
    imageElement.style.width = '100%'; // Example: full-width image

    // Append the image to the body or a specific container
    document.body.appendChild(imageElement);

  } catch (error) {
    console.error("Error fetching the image: ", error);
  }
}

// Call the function
getFitnessImage();

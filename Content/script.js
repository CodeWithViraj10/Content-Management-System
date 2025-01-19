// Get references to the DOM elements
const contentList = document.getElementById('content-list');
const form = document.getElementById('cms-form');

// Function to display a post
function displayPost(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <small>${post.date}</small>
    <p>${post.content}</p>
  `;
  contentList.appendChild(postElement);
}

// Load posts from the JSON file
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load JSON file');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(post => {
      displayPost(post); // Display each post from the JSON file
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

// Handle form submissions
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form input values
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const date = document.getElementById('date').value;

  // Create a new post object
  const newPost = {
    title,
    content,
    date
  };

  // Display the new post
  displayPost(newPost);

  // Clear the form inputs
  form.reset();
});

//Function to display posts
function displayPosts(posts) {
  const ul = document.getElementById('post-list');
  ul.innerHTML = ''; 

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
};

// Async await function to fetch and display posts
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
    return posts;
  } catch (error) {
    console.error('Error fetching posts data:', error);
  }
};

fetchPosts();
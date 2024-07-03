//creates variables for the html elements that we will need to work with
const blogSection = document.querySelector('#blog-post');
const newPost = document.createElement('article');
const newTitle = document.createElement('h4');
const newUser = document.createElement('h5');
const newContent = document.createElement('p');

//checks to see if there is anything in localStorage for a blog post yet.
let blogs = JSON.parse(localStorage.getItem('blogPost'));

console.log(blogs);

//triggeres function to make blog posts
blogPosts();

//function for mkae a post
function blogPosts () {

  blogs.forEach(blog => {
    newTitle.textContent = blog.title;
    newContent.textContent = blog.content;
    newUser.textContent = blog.userName;
  
    blogSection.appendChild(newPost);
    newPost.appendChild(newTitle);
    newPost.appendChild(newContent);
    newPost.appendChild(newUser);

  });

}
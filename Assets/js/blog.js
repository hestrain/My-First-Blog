//creates variables for the html elements that we will need to work with
const switcher = document.querySelector("#switch");
const back = document.querySelector("#back");
const page = document.querySelector(".container");
const blogs = document.querySelector('#blog-post');

//starts us off in dark mode
let mode = "dark";

//checks to see if there is anything in localStorage for a blog post yet.
let newBlogPost = JSON.parse(localStorage.getItem('blogPost'));

console.log(blogs);
console.log(newBlogPost);


//function to switch between dark and light modes.
switcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    //switches our variable to light for tracking reasons
    mode = "light";
    //applies the class light to the page, making things change to light mode
    page.setAttribute("class", "light");
    //things that aren't automatically switched by the container class light are switched here!
    //this is light/dark button and the back button
    switcher.textContent = "🌚";
    switcher.setAttribute("style", "background-color: #F8CA97");
    back.setAttribute("style", "background-color: #F8CA97; color: black");
  }
  // If mode is light, apply dark background
  else if (mode === "light") {
    //switches our variable to dark for tracking reasons
    mode = "dark";
    //applies the class light to the page, making things change to light mode
    switcher.textContent = "🌞";
    //things that aren't automatically switched by the container class dark are switched here!
    //this is light/dark button and the back button
    page.setAttribute("class", "dark");
    switcher.setAttribute("style", "background-color:  rgb(53, 59, 133)");
    back.setAttribute("style", "background-color:  rgb(53, 59, 133)");
  }
});

//function for mkae a post

function blogPosts () {
  blogs.
}
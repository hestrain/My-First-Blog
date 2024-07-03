//create the variables of the elements from the form page that i need for the code
const switcher = document.querySelector("#switch");
const page = document.querySelector(".container");
const userNameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitEl = document.querySelector("#submit");

//starts us in dark more
let mode = "dark";

//log to console to make sure im looking at the right elements
console.log(switcher);
console.log(page);

//checks to see if there is anything in localStorage for a blog post yet.
let blogPost = localStorage.getItem("blogPost");

//function to switch between dark and light modes.
switcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    //switches our variable to light for tracking reasons
    mode = "light";
    //applies the class light to the page, making things change to light mode
    page.setAttribute("class", "light");

    //things that aren't automatically switched by the container class light are switched here!
    //this is mostly the text boxes, and the light/dark button
    switcher.textContent = "🌚";
    userNameInput.setAttribute(
      "style",
      "background-color: white; color: black;"
    );
    contentInput.setAttribute(
      "style",
      "background-color: white; color: black;"
    );
    titleInput.setAttribute("style", "background-color: white; color: black;");
    submitEl.setAttribute("style", "background-color: white; color: black;");
    switcher.setAttribute("style", "background-color: #F8CA97");
  }
  // If mode is light, apply dark background
  else if (mode === "light") {
    //switches our variable to dark for tracking reasons
    mode = "dark";
    //applies the class light to the page, making things change to light mode
    page.setAttribute("class", "dark");
    //things that aren't automatically switched by the container class dark are switched here!
    //this is mostly the text boxes, and the light/dark button
    switcher.textContent = "🌞";
    userNameInput.setAttribute(
      "style",
      "background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);"
    );
    contentInput.setAttribute(
      "style",
      "background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);"
    );
    titleInput.setAttribute(
      "style",
      "background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);"
    );
    submitEl.setAttribute(
      "style",
      "background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);"
    );
    switcher.setAttribute("style", "background-color:  rgb(53, 59, 133)");
  }
});

//event listener to trigger when the submit button is pressed at the end of the form.
submitEl.addEventListener("click", recordResponse);

//working on pupup error message if anything is blank.
// if (!userNameInput || !titleInput || !contentInput) {
//   window.alert("Please enter a username, title, AND blog post on the form");
// } else {

//function to record the form response as an object, and then into local storage
function recordResponse(event) {
  //prevents default action upon submission(refresing the page)
  event.preventDefault();

  //creating the object
  const blogPost = {
    userName: userNameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  //chekcing for blank values!
  if (blogPost.userName === "") {
    window.alert("Username cannot be blank");
  } else if (blogPost.title === "") {
    window.alert("Title cannot be blank");
  } else if (blogPost.content === "") {
    window.alert("Content cannot be blank");
  } else {
    window.alert("success", "Registered successfully");

    //logging to the console to double check
    console.log(`
    Username: ${blogPost.userName}
    Title: ${blogPost.title}
    Content: ${blogPost.content}`);

    //triggering storing the object to localStorage
    localStorage.setItem("blogPost", JSON.stringify(blogPost));
  }
}

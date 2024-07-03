//create the variables of the elements from the form page that i need for the code
const submitEl = document.querySelector("#submit");

//log to console to make sure im looking at the right elements
console.log(page);

//checks to see if there is anything in localStorage for a blog post yet.
let blogPost = localStorage.getItem("blogPost");



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

  //creates array with existing object or empty
  const blogs = localStorage.getItem("blogPost") || [];

  //creating the object
  const blogPost = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
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

    //adds newest blogpost to blogs array
    blogs.push(blogPost);
   
    //triggering storing the object to localStorage
    localStorage.setItem("blogPost", JSON.stringify(blogs));
  }
}

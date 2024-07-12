//create the variables of the elements from the form page that i need for the code
const submitEl = document.querySelector("#submit");

//log to console to make sure im looking at the right elements
console.log(page);

//event listener to trigger when the submit button is pressed at the end of the form.
submitEl.addEventListener("click", recordResponse);

//working on pupup error message if anything is blank.
// if (!userNameInput || !titleInput || !contentInput) {
//   window.alert("Please enter a username, title, AND blog post on the form");
// } else {

let blogs = JSON.parse(localStorage.getItem("blogPost")) || [];

console.log(blogs);

//function to record the form response as an object, and then into local storage
function recordResponse(event) {
  //prevents default action upon submission(refreshing the page)
  event.preventDefault();
  
  //checking for blank values!
  if (userNameInput.value === "") {
    window.alert("Username cannot be blank");
  } else if (titleInput.value=== "") {
    window.alert("Title cannot be blank");
  } else if (contentInput.value === "") {
    window.alert("Content cannot be blank");
  } else {
    //adds newest blogpost to blogs array
    let blogPost = {
      userName: userNameInput.value.trim(),
      title: titleInput.value.trim(),
      content: contentInput.value.trim(),
    };

    //logging to the console to double check
    console.log(`
    Username: ${blogPost.userName}
    Title: ${blogPost.title}
    Content: ${blogPost.content}`);

    console.log(blogPost);

    //add to array
      blogs.push(blogPost);
      //set array to localstorage
      localStorage.setItem("blogPost", JSON.stringify(blogs))
      
      // change window
      window.location.href = "./blog.html";
    }
    
  }

//creates variables for the html elements that we will need to work with
const switcher = document.querySelector("#switch");
const back = document.querySelector("#back");
const page = document.querySelector(".container");
const userNameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitBu = document.querySelector("#submit");

//starts us in dark more
let mode = "dark";

//function to switch between dark and light modes.
switcher.addEventListener("click", function () {
    // If mode is dark, apply light background
    if (mode === "dark") {
      //switches our variable to light for tracking reasons
      mode = "light";
      //applies the class light to the page, making things change to light mode
      page.setAttribute("class", "light");
  
      //things that aren't automatically switched by the container class light are switched here!
      //this is mostly the text boxes, and the light/dark button, the back button
      userNameInput.setAttribute(
        "style",
        "background-color: white; color: black;"
      );
      contentInput.setAttribute(
        "style",
        "background-color: white; color: black;"
      );
      titleInput.setAttribute("style", "background-color: white; color: black;");
      submitBu.setAttribute("style", "background-color: white; color: black;");
      switcher.textContent = "🌚";
      switcher.setAttribute("style", "background-color: #F8CA97");
      back.setAttribute("style", "background-color: #F8CA97; color: black");
    }
    // If mode is light, apply dark background
    else if (mode === "light") {
      //switches our variable to dark for tracking reasons
      mode = "dark";
      //applies the class light to the page, making things change to light mode
      page.setAttribute("class", "dark");
      //things that aren't automatically switched by the container class dark are switched here!
      //this is mostly the text boxes, and the light/dark button, the back button
      
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
      submitBu.setAttribute(
        "style",
        "background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);"
      );
      switcher.textContent = "🌞";
      switcher.setAttribute("style", "background-color:  rgb(53, 59, 133)");
      back.setAttribute("style", "background-color:  rgb(53, 59, 133)");
    }
  });


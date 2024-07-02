const switcher = document.querySelector('#switch');
const page = document.querySelector('.container');
const userNameInput =document.querySelector('#username');
const titleInput =document.querySelector('#title');
const contentInput =document.querySelector('#content');
const submitEl = document.querySelector('#submit');


let mode = 'dark';

console.log(switcher);
console.log(page);

switcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      page.setAttribute('class', 'light');
      switcher.textContent = "🌚";
      userNameInput.setAttribute('style', 'background-color: white; color: black;');
      contentInput.setAttribute('style', 'background-color: white; color: black;');
      titleInput.setAttribute('style', 'background-color: white; color: black;');
      submitEl.setAttribute('style', 'background-color: white; color: black;');
    }
    // If mode is light, apply dark background
    else if (mode==='light'){
      mode = 'dark';
      switcher.textContent = "🌞";
      page.setAttribute('class', 'dark');
      userNameInput.setAttribute('style', 'background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);');
      contentInput.setAttribute('style', 'background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);');
      titleInput.setAttribute('style', 'background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);');
      submitEl.setAttribute('style', 'background-color: rgb(54, 45, 45); color: rgb(185, 255, 255);');
    }
  });

  function recordResponse(event) {
    event.preventDefault();
    const userName = userNameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    console.log(`
        Username: ${userName}
        Title: ${title}
        Content: ${content}`);
  };


  submitEl.addEventListener('click', recordResponse);

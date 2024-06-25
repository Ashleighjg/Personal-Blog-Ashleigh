

// Access post page elements
const blogList = document.querySelector('#blog-list');
const goBackbtn = document.querySelector('#go-back');
// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});



//converts stored data to an array
const blogdata = JSON.parse(localStorage.getItem('blogs'));
let blogs;
if (blogdata){
    blogs=blogdata
} else {
    blogs=[];
}


function renderBlog () {
  const div =document.createElement('div')
  div.setAttribute('class' , 'list-group')
  
  
// Render a new ul for each blog
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const ul = document.createElement('ul');
    const liContent = document.createElement('li');
    const liUsername =document.createElement(`li`);
    ul.innerHTML = (`Title : ${blog.title} `);
    liContent.innerHTML = (`Content : ${blog.content}`);
    liUsername.innerHTML = (`UserName : ${blog.username}`);
    ul.setAttribute('data-index', i);
    ul.setAttribute('class' , 'postscontainer')
    div.appendChild(ul);
    ul.appendChild(liContent);
    ul.appendChild(liUsername);
  } console.log(div)
    blogList.appendChild(div);

}



//runs when the page loads
  function init () {
    let storedBlogs = window.localStorage.getItem("blogs") || [];
    console.log(JSON.parse(storedBlogs));
    //Or >> const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (storedBlogs !== null) {
    storedBlogs = blogs;
    }
    renderBlog();
  
  };

   

//go back button functionality that take the user back to the form
 
      function goBack(event) {
      window.history.back();
};

     
//Call init to retreieve data and render it to the page
  init();
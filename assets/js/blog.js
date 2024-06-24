

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




const blogdata = JSON.parse(localStorage.getItem('blogs'));
let blogs;
if (blogdata){
    blogs=blogdata
} else {
    blogs=[];
}


function renderBlog () {
  const ul =document.createElement('ul')
  ul.setAttribute('class' , 'list-group')
// Render a new li for each blog
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const li = document.createElement('li');
    // li.innerHTML = blog;
    li.innerHTML = `UserName :- ${blog.username}, Title :- ${blog.title}, Content :- ${blog.content}`;
    li.setAttribute('data-index', i);
    ul.appendChild(li);
  } console.log(ul)
   blogList.appendChild(ul);

}

     /*
     document.getElementById('saved-username').innerHTML=blogs.username;
     document.getElementById('saved-title').innerHTML=blogs.title;
     document.getElementById('saved-content').innerHTML=blogs.content;
     */

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

   

/*  window.addEventListener('beforeunload', () => {
    const blogObjtoSave = { blogs: 'blogs' };
    localStorage.setItem('blogs', JSON.stringify(blogObjtoSave));
});
*/



    
   /* function goBack () {
      goBackbtn.addEventListener('click', function(event) {
      // Handle the click event here
      window.history.back(); // This will go back to the previous page in the browser history
});
};  */
    
    
 
      function goBack(event) {
      window.history.back();
};

      /*const inputValue = [
          document.getElementById('username-input').value,
          document.getElementById('title-input').value,
          document.getElementById('content-input').value,
      ]
*/
//Call init to retreieve data and render it to the page
  init();
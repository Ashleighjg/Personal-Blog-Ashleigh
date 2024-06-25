const userNameInput = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.getElementById('content-input');
const submitBtn = document.getElementById('submit-btn')
const blogForm = document.getElementById('input-form-wrapper');
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



//funtion to store array in local storage
function storeBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
   
  };



  
    blogForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
        const username = userNameInput.value;
        const title= titleInput.value;
        const content= contentInput.value.trim();
  
        const blogsObj = {
            username: username,
            title: title,
            content: content,
        };
     
        //checks if data is missing and alerts to enter value if any input is missing  
        if (blogsObj.username =='' || blogsObj.title =='' || blogsObj.content ==''){
        alert('Please enter a value before submitting.');
        return;
    }
  
        //if there is no missing input, Add the new blog post to the existing posts array
        blogs.push(blogsObj);
        userNameInput.value = '';
        titleInput.value = '';
        contentInput.value = '';
  
        storeBlogs();
    
  
        window.location.href = './blog.html';
  
        function init () {
            storeBlogs();
        }  
        
       
      });
        
      
      

  //Call init to store the blog data
  
    init();
  
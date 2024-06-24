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
 /* const blogsObj = {
        username: [],
        title: [],
        content: [],
    };


function loadFromLocalStorage() {

    const blogData = JSON.parse(localStorage.getItem('userinfo'));
    if (blogData !== null) {
       document.getElementById('saved-username').innerHTML=blogData.username;
       document.getElementById('saved-title').innerHTML=blogData.title;
       document.getElementById('saved-content').innerHTML=blogData.content;
   
};
};


/*submitBtn.addEventListener('click', function (event) {
   event.preventDefault();
    if (formObj.trim() === '') {
        alert ("Please complete the form");
    }
    else (formObj.trim() !=='')
    updateLocalStorage();
    window.location.href = ".\blog.html";
    
    });
*/

const blogdata = JSON.parse(localStorage.getItem('blogs'));
let blogs;
if (blogdata){
    blogs=blogdata
} else {
    blogs=[];
}




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
    
  
        window.location.href = 'file:///C:/Users/ashle/bootcamp/Personal-Blog-Ashleigh/blog.html';
  
        function init () {
            storeBlogs();
        }  
        
       /* window.addEventListener('beforeunload', () => {
            const blogObjtoSave = { blogs: 'blogs' };
            localStorage.setItem('blogs', JSON.stringify(blogObjtoSave));
        });
        */
      });
        
      
      
   
     /* function goBack(event) {
        window.history.back();
  };
  
        /*const inputValue = [
            document.getElementById('username-input').value,
            document.getElementById('title-input').value,
            document.getElementById('content-input').value,
        ]
  */
  //Call init to retreieve data and render it to the page
  
  init ();
  
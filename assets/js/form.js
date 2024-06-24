const userNameInput = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.getElementById('content-input');
const submitBtn = document.getElementById('submit-btn')
const formWrapper = document.getElementById('input-form-wrapper');

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
const blogs = [];
    
function storeBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
};


document.getElementById('input-form-wrapper').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const blogsObj = {
            username: userNameInput.value,
            title: titleInput.value,
            content: contentInput.value.trim(),
        };
     
        //checks if data is missing and alerts to enter value if any input is missing  
        if (blogsObj.username =='' || blogsObj.title =='' || blogsObj.content ==''){
        alert('Please enter a value before submitting.');
        return;
    }
        //if there is no missing input, store data in local storage
        blogs.push(blogsObj);
        userNameInput.value = '';
        titleInput.value = '';
        contentInput.value = '';

        storeBlogs();  

        //window.location.href = "file:///C:/Users/ashle/bootcamp/Personal-Blog-Ashleigh/blog.html";
        
       /* window.addEventListener('beforeunload', () => {
            const blogObjtoSave = { blogs: 'blogs' };
            localStorage.setItem('blogs', JSON.stringify(blogObjtoSave));
        });
        */
        });

   function init () {
    storeBlogs();
   }
        
      
        init ();


        /*const inputValue = [
            document.getElementById('username-input').value,
            document.getElementById('title-input').value,
            document.getElementById('content-input').value,
        ]
*/

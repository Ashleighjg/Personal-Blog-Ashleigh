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
    document.getElementById('input-form-wrapper').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const formObj = {
            username: userNameInput.value,
            title: titleInput.value,
            content: contentInput.value.trim(),
        };
        //if (formObj.username !=='' || formObj.title !=='' || formObj.content !=='') {



        //checks if data is missing and alerts to enter value if any input is missing  
        if (formObj.username =='' || formObj.title =='' || formObj.content ==''){
        alert('Please enter a value before submitting.');
    }
        //if there is no missing input, store data in local storage
        else {
        console.log (formObj);
        localStorage.setItem('userinfo', JSON.stringify(formObj));
        //window.location.href = ".\blog.html";
        };
});

        /*const inputValue = [
            document.getElementById('username-input').value,
            document.getElementById('title-input').value,
            document.getElementById('content-input').value,
        ]
*/

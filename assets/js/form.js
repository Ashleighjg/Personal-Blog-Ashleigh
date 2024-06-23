const userNameInput = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('content-inpu');
const submitBtn = document.getElementById('submit-btn')

const formStorageObj = {
    username: [],
    title: [],
    content: [],
};


const formObj = {
    username: userNameInput.value,
    title: titleInput.value,
    content: contentInput,
};

console.log (formObj);

function updateLocalStorage() {
    localStorage.setItem('userinfo', JSON.stringify(formObj));
};

function loadFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem('userinfo'));
    if (storedData) {
        formStorageObject = storedData;
};
}
submitBtn.addEventListener('click', function (event) {
   event.preventDefault();

    if (formObj) {
        const userJsonString = JSON.stringify(formObj);
        localStorage.setItem(`userinfo`, userJsonString);
    }

    window.location.href = ".\blog.html";
        
    if (!formObj) {
        alert ("Please complete the form");
        return false;
    }
   
  });
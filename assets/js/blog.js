
const blogCard = document.querySelector('#card');

const blogs = [];

function renderBlog () {

    const blogData = JSON.parse(localStorage.getItem('userinfo'));
    if (blogData !== null) {
 
    document.getElementById('saved-username').innerHTML=blogData.username;
    document.getElementById('saved-title').innerHTML=blogData.title;
    document.getElementById('saved-content').innerHTML=blogData.content;
    

    blogData = {
    username : blogData.username,
    title : blogData.title,
    content : blogData.content,
    };

   

    // Render a new li for each blog
    for (let i = 0; i < blog.length; i++) {
      const blog = blogs[i];

      const li = document.createElement('li');
      li.textContent = blog;
      li.setAttribute('data-index', i);

      blogCard.appendChild(li);
    }
}
}


function init () {
    
       renderBlog();

};


init();
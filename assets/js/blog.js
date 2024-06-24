
const blogList = document.querySelector('#blog-list');
const goBackbtn = document.querySelector('#go-back');

//const blogs = [];

function renderBlog () {

   // const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    let storedBlogs = window.localStorage.getItem("blogs") || [];
    console.log(JSON.parse(storedBlogs));
    
    if (storedBlogs !== null) {
     blogs = storedBlogs;

     /*
     document.getElementById('saved-username').innerHTML=blogs.username;
     document.getElementById('saved-title').innerHTML=blogs.title;
     document.getElementById('saved-content').innerHTML=blogs.content;
     */
 }


    // Render a new li for each blog
    for (let i = 0; i < blogs.length; i++) {
      const blog = blogs[i];

      const li = document.createElement('li');
      li.innerHTML = blog;
      li.setAttribute('data-index', i);

      blogList.appendChild(li);
    }
}



function init () {
        renderBlog();
}


    function goBack(event) {
        window.history.back();
  };

/*  window.addEventListener('beforeunload', () => {
    const blogObjtoSave = { blogs: 'blogs' };
    localStorage.setItem('blogs', JSON.stringify(blogObjtoSave));
});
*/

init();
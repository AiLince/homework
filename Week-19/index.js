//Практическое задание 1

const postContainer = document.querySelector('#post-container');

function getPostHTML(post) {
    return `<div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>`;
}

function addPostToHTML(postHTML) {
    postContainer.innerHTML += postHTML;
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
    posts.forEach(post => {
        const postHTML = getPostHTML(post);
        addPostToHTML(postHTML);
    });
});

//Практическое задание 2

const form = document.querySelector('#post-form');


form.addEventListener('submit', (event) => {
    event.preventDefault();

const title = form.elements[0].value;
const body = form.elements[1].value;

createPost(title, body)
    .then(post => {
        const postHTML = getPostHTML(post);
        addPostToPage(postHTML, postContainer);
        form.reset();
    })
    .catch(error => {
        console.error(error);
    })
});

function createPost(title, body) {
    const data = { title, body, userId: 1 };

return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .catch(error => {
        console.error(error);
    })
}

function getPostHTML(post) {
    return `<div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>`;
}

function addPostToPage(postHTML, postContainer) {
    postContainer.innerHTML += postHTML;
    postContainer.scrollTop = postContainer.scrollHeight;
}
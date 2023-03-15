const submit = document.querySelector('#submit');
const chatComment = document.querySelector('#chatComment');
const checkboxYes = document.querySelector("#yes");

document.querySelector('#FIO').addEventListener('input', function() {
FIO.value = this.value.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
FIO.value = this.value.replace('  ', ' ');
});

document.querySelector('#comment').addEventListener
('input', function() {
comment.value = this.value.replace(/viagra/i, '***');
comment.value = this.value.replace(/XXX/i, '***');
}); 


submit.addEventListener('click', () => {
let avatar = document.querySelector('#avatar-link').value;
const defaultAvatar = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png", "images/10.png"]; 
if (document.querySelector('#avatar-link').value != "") {
avatar = avatar;
} else {   
let any = defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];
avatar = any;
};

let date = new Date();
chatComment.value;
if (FIO.value != "" && checkboxYes.checked) {
chatComment.innerHTML += `<img src=${avatar} width="70">` + '<br>' + FIO.value + ':' + '<br>' + comment.value + '<br>' + date + '<br>'+ '<br>';
} else {
chatComment.innerHTML += `<img src=${avatar} width="70">` + '<br>' + 'Username' + ':' + '<br>' + comment.value + '<br>' + date + '<br>'+ '<br>';
}
});


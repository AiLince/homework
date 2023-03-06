const submit = document.querySelector('#submit');
const chatComment = document.querySelector('#chatComment');

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
let avatar = document.querySelector('#avatar').value;
document.querySelector('#avatar-link').src = avatar;

chatComment.value;
chatComment.innerHTML = (FIO.value + ': ' + comment.value);
});
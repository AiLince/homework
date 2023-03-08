const submit = document.querySelector('#submit');
const chatComment = document.querySelector('#chatComment');
let avatar = document.querySelector('#avatar');

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
document.querySelector('#avatar').src = avatar;
chatComment.value;
chatComment.innerHTML = (FIO.value + ':' + '<br>' + comment.value );
});
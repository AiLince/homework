const submit = document.querySelector('#submit');
const chatComment = document.querySelector('#chatComment');

document.querySelector('#FIO').addEventListener('input', function() {
FIO.value = this.value.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
FIO.value = this.value.replace('  ', ' ');
});

document.querySelector('#message').addEventListener
('input', function() {
message.value = this.value.replace(/viagra/i, '***');
message.value = this.value.replace(/XXX/i, '***');
});

submit.addEventListener('click', () => {           
document.querySelector('.avatar').src = avatarLink.value;
document.querySelector("#avatarLink") = avatarLink;

chatComment.value;
chatComment.innerHTML = (avatarLink + FIO.value + ': ' + message.value);
});
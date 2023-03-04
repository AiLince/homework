let str = '<div id="advertising"><a href="link">Здесь</a>могла бы быть ваша реклама.</div>'

function deleteTags(str) {
// ваш код
let tags = /( |<([^>]+)>)/ig,
result = str.replace(tags, " ");
return result;
};

console.log(deleteTags(str));
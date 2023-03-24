let date = new Date();

function formatDate(date) {
let diff = new Date() - date; // разница в миллисекундах

if (diff < 1000) { // меньше 1 секунды
return 'прямо сейчас';
}

let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

if (sec < 60) {
return sec + ' сек. назад';
}

let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
if (min < 60) {
return min + ' мин. назад';
}

// отформатировать дату
// добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
let d = date;
d = [
'0' + d.getDate(),
'0' + (d.getMonth() + 1),
'' + d.getFullYear(),
'0' + d.getHours(),
'0' + d.getMinutes()
].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

// соединить компоненты в дату
return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

if (formatDate(new Date(new Date - 1))) {
console.log('прямо сейчас'); 
} else if (formatDate(new Date(new Date - 30 * 1000))) {
console.log('30 сек. назад');     
} else if (formatDate(new Date(new Date - 5 * 60 * 1000))) {
console.log('5 мин. назад');    
} else
// вчерашняя дата вроде 31.11.2022, 20:00
console.log(formatDate(new Date(new Date - 86400 * 4 * 1000)));


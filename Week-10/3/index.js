let year = 2023;
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log('Да, ' + year + ' год является високосным');
} else {
    console.log('Нет, ' + year +' год не является високосным');
}
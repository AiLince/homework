function calculation(){
    let number = document.getElementById('number');
    let value = number.value;
    if(!isNaN(value)){
        var result = document.getElementById('result');
        result.value =  value*value;
    }
}
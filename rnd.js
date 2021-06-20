var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()-_=+";

function randomFromString(array){
    var random_number = Math.floor(Math.random() * array.length);
    return array[random_number];
}

function upperOrLower(letter){
    var random_number = Math.floor(Math.random() * 2);
    if(random_number == 0){
        return letter.toUpperCase();
    }else{
        return letter.toLowerCase();
    }
}

function randomString(size){
    var pass = "";
    for(var i = 0; i<= size;i++){
        var random_number = Math.floor(Math.random() * 3);
        switch(random_number){
            case 0:
                pass+=upperOrLower(randomFromString(letters))
            break;
            case 1:
                pass+=randomFromString(numbers);
            break;
            case 2:
                pass+=randomFromString(symbols);
            break;
        }
        
    }
    return pass;
}
console.log(Math.random());

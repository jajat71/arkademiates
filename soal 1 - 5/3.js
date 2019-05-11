// https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript


// function untuk generate random string
function randomString() {
    var length = 32;
    var result = "";
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = length; i > 0; --i) 
       result += chars[Math.floor(Math.random() * chars.length)];
    
    return result;
}

function cek(jumlah){

  var arrValue= [];

  for(var i = 0; i < jumlah;  i++){
    var rString = randomString();
    arrValue.push(rString);
  }
  
  var findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
  if(findDuplicates(arrValue).length === 0){
    console.log(arrValue)
  }else{
    console.log('maaf ada duplikat nilai')
  }
  
}

cek(2);


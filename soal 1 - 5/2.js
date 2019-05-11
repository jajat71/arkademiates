function is_username_valid(username){      
  return /^([a-z.]{8,})$/.test(username);
}

console.log(is_username_valid('jajatsudrajat'));

function is_email_valid(email){      
  var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var myEmail = emailReg.test(email);
  
  var nameEmail = email.split('@')[0];
  
  var uppercase = /[A-Z.]/.test(nameEmail);
  var lowercase = /[a-z.]/.test(nameEmail);
  var number = /[0-9.]/.test(nameEmail);
  var panjang = nameEmail.length;
  
  //cek format email sudah benar atau belum
  if(myEmail === true){
    //cek apakah nama akun mengandung huruf besar,huruf kecil dan angka
   if(uppercase && lowercase && number && panjang >=4){
      return true
    }else{
      return false;
    }
    
  }else{
    return false;
  }
}

console.log(is_email_valid('myEmail@ku.com'))
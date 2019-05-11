var datax = [
    ['g','h','x','j'],
    ['a','c','b','e','d'],
    ['q','w','a']
  ];
  
sort_array(datax);

function sort_array(data){
 
 var arrTemp = [];
  
  for(var i = 0; i < data.length; i++){
    
    data[i].sort();
    var getData = data[i][data[i].length - 1];
    arrTemp.push(getData);
    
  }
  
  return console.log(arrTemp)
  
}


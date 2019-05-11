function myBiodata(){

	var data = {
		name : "Jajat",
		address : "Bandung",
		hobbies : ['hobi 1','hobi 2','hobi 3'],
		is_Maried : false,
		school:{
		  highschool : 'SMK N 1 Cipeundeuy - (TKJ)',
		  university : 'none'
		},
		skills:[
  		{
  		  name : 'network',
  		  score: 8
  		},
  		{
  		  name : 'network',
  		  score: 8
  		}
		]
	}

	var arrToString =  JSON.stringify(data);
	return JSON.parse(arrToString);

}

console.log(myBiodata());
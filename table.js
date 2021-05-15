var count=1;
function validate(){
    var table = document.getElementById('tab');
	var row = table.insertRow(count);
    var firstName = document.getElementById('fname');
    var lastName = document.getElementById('lname').value;
	var address = document.getElementById('address').value;
	var pincode =  document.getElementById('pincode').value;
	
	var food ="";
	var state = document.getElementById('state').value;
	var country = document.getElementById('country').value;

console.log('===',firstName);
   
   if( document.getElementById('male').checked== true){
	    var gender = document.getElementById('male').value;
   }
   if( document.getElementById('female').checked== true){
	    var gender = document.getElementById('female').value;
   }
   if( document.getElementById('others').checked== true){
	    var gender = document.getElementById('others').value;
   }
    
	var foodcheck =0;
   if( document.getElementById('fooditem1').checked== true){
	    var food =  food + " " +document.getElementById('fooditem1').value;
		foodcheck++;
   }
   if( document.getElementById('fooditem2').checked== true){
	    var food  =  food + " "+ document.getElementById('fooditem2').value;
		foodcheck++;
   }
   if( document.getElementById('fooditem3').checked== true){
	    var food  =  food + " " + document.getElementById('fooditem3').value;
		foodcheck++;
   }
   if( document.getElementById('fooditem4').checked== true){
	    var food  =  food + " " +document.getElementById('fooditem4').value;
		foodcheck++;
   }
   if( document.getElementById('fooditem5').checked== true){
	    var food  =  food + " " +document.getElementById('fooditem5').value;
		foodcheck++;
   }
  
  

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	
	if(firstName && lastName && address && pincode && state && country && food && (foodcheck ==2) && gender ){
	alert("Please check the data in the table after click OK");
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
	cell3.innerHTML = address;
	cell4.innerHTML = pincode;
	cell5.innerHTML = gender;
	cell6.innerHTML = food;
	cell7.innerHTML = state;
	cell8.innerHTML = country;
	count++;
	}else if(foodcheck !=2){
	  alert('please choose two food items');
  }else{
		alert("Fill all the details ");
	}
    
	var form= document.getElementById('form');
	form.reset();
}
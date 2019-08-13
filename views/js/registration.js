// window.onload = function(){
// 	let form = document.main_form;
// 	let info = document.getElementById("info");
// 	let name = form.name;
// 	let Userhandle = form.Userhandle;
// 	let surname = form.surname;
// 	let gender = form.gender;
// 	let date = form.birthday;
// 	let email = form.email;
// 	let password = form.password;
// 	let confirmPassword = form.password_hash;	
// 	form.addEventListener("submit", formValidation);

	function formValidation(){

		var Name = $('#username').val();
		var user_handle = $('#Userhandle').val();
		var email = $('#useremail').val();
		var password = $('#userPass').val();
		var password_hash =$('#userConfirmPass').val();
        var count = 0,flag = 0,p_len = password.length,ph_len=password_hash.length ;
		var reg_data={
			Name,
			user_handle,
			email,
			password,
			password_hash
		}

		if(Name == ""){
			flag++;
			document.getElementById("usernamecheck").innerHTML = "please enter your name";
		}else {
			var letters = /^[A-Za-z]+$/;
			if (!Name.match(letters)) { //alert('hello');
			  document.getElementById("usernamecheck").innerHTML = " alphabets only";
			}
			else {
			  document.getElementById("usernamecheck").innerHTML = "";
			}
		  }

		if(user_handle === ""){
            document.getElementById("userhandlecheck").innerHTML = "Please enter userhandle";
			flag++;
		}
		else{
            document.getElementById("userhandlecheck").innerHTML = "";

		}

		if(email == ""){
			flag++;
			document.getElementById("useremailcheck").innerHTML = "Please enter email";
		}else{
			let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!email.match(mailformat)) {
				document.getElementById("useremailcheck").innerHTML = "Please enter a valid email";
			  }else{
				document.getElementById("useremailcheck").innerHTML = "";
			  }
		}

		

		
		if(password === ""){
			flag++;
	
			$('#userpasswordcheck').html("Please enter password");
		}
		else
		{
			if( password.length < 6 || password.length >20)
			{
			  document.getElementById("userpasswordcheck").innerHTML = " 6 to 20 characters";
  
			}
			else{
			  document.getElementById("userpasswordcheck").innerHTML ="";
			}
		}

		if(password_hash === ""){
			flag++;
			document.getElementById("userconfpasswordcheck").innerHTML = "Please re-enter password";
		}
		else
		{

		if( password != password_hash)
		  {
			document.getElementById("userconfpasswordcheck").innerHTML = "passwords do not match";

		  }
		  else{
			document.getElementById("userconfpasswordcheck").innerHTML ="";
		  }
	  }

		
		if(flag==0 && (password === password_hash ) && (p_len>=6 && p_len <=20 ) ){
			console.log('Can enter ajax');

		$.ajax({
			type: "POST",
	
			url: window.location + "/auth2",
			data: reg_data,
			datatype: 'json'
	
		})
			.done(function (data) {
				if(data == '')
				{
				//console.log(data);
			   console.log("data is follow"+data);
			   $('#userhandlecheck').html("user handle aready exists");
				}

				else {

					$('#userhandlecheck').html("");
					clear_data();

				}

	
			})
			.fail(function (jqxhr, textStatus, err) {
			   console.log('Ajax error',textStatus);
			});

		}
		else{
			console.log('cannot enter ajax');
		}
	
	
	}
function clear_data(){
	alert("registered");
	var Name = $('#username').val("");
		var user_handle = $('#Userhandle').val("");
		var email = $('#useremail').val("");
		var password = $('#userPass').val("");
		var password_hash =$('#userConfirmPass').val("");

   window.location.href=`http://localhost:8000/`;


}
function edit_profile(){
    formdata={
       user_handle : $("#Userhandle").val(),
       password:$("#userPass").val()
   }
   
  // console.log(formdata.user_handle);
   $.ajax({
       type:"POST",
       
       url:window.location +"ajaxLogin",
       data : formdata,
       datatype:'json'

   })
   .done(function(data){
      // var datanew = data;
      
        name= data[0].Name;
    


  // console.log(datanew[0].Name);
       $('#getResponse').html(name);
      // window.location.href = `http://localhost:3000/home/${name}`;
       window.location.href = `http://localhost:3000/home`;

       
       

     
   })
   .fail(function(jqxhr,textStatus,err){
       console.log('Ajax error',textStatus);
   });
}
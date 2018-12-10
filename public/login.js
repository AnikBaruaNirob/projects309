$(document).ready(function(){
  
   
    $("#loginBtn").click(function(){
        $.ajax({
          type : 'GET',
          url : '/login',
          success: function(data){
            $("#loginDiv").html(data);
          }
        });
    });
    //=====Login Form Request=============================================
    $("#loginForm").click(function(){
      var uname  = $("#uname").val();
      var upass = $("#upass").val();
      localStorage.setItem('username', uname);
      $('#nav').css("display","none");
      $('#logout').css("display","block");
      var loginData ={'name': uname,'pass':upass};
      $.ajax({
          type : 'POST',
          url : '/demo',
          data : loginData,
          success: function(data){
          $("#mainDiv").html(data);
          }
        });
    });
 
 //Save profile Data================================================
 $('#saveBtn').click(function(e){
   e.preventDefault();
   var email = $("#email").val();
   
   
   var gender = $("#gender").val();

   var position = $("#position").val();
   //console.log(gender);
   var name = $("#name").val();
   var pass = $("#pass").val();
   localStorage.setItem('username', name);
      $('#nav').css("display","none");
      $('#logout').css("display","block");
   var profileData = {'email':email,'name' : name,'pass' : pass,'gender':gender,'position':position};
   $.ajax({
     type : 'POST',
     url : '/completeprofile',
     data : profileData,
     success : function(data){
      
        $("#mainDiv").html(data);
     }
   });
 });
 
 
 if(localStorage.getItem('username')){
 
  
  $('#logout').click(function(){
    localStorage.clear();

    $('#nav').css("display","block");
  $('#logout').css("display","none");
  window.location.href='/';
  });
 
}
 });
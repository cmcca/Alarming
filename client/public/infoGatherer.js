//Log in Page functions

//Click to sign in
$("#Submit").on("click", function(){

 var name = $("#Username").val();
   var pass = $("#Password").val();

   //Logging in
$.getJSON("http://localhost:3001/user/login/" + name + "/" + pass)
.then(function(data){
alert("Button clicked")
console.log(data)
if (data.length > 0){
   $("#nameOfPerson").val(data[0].Name);
   window.location.replace("http://localhost:3000/alarm");
}
else{
   $("#wronguser").css("display", "block");
}
})

})

//Click to go to Sign Up Page
$("#signUp").on("click", function(){

   window.location.replace("http://localhost:3000/signup");
   
})

//Sign Up Page Functions

//Click to make account

$("#SubmitSign").on("click", function(){

    var name = $("#UsernameSign").val();
    var pass = $("#PasswordSign").val();
   
      //Signing Up
   $.getJSON("http://localhost:3001/user/signup/" + name + "/" + pass)
   .then(function(data){
   alert("Button clicked")
   console.log(data)
   
   window.location.replace("http://localhost:3000/login")

   })
})

$("#Login_Page").on("click", function(){
    window.location.replace("https://localhost:3000/login")
})

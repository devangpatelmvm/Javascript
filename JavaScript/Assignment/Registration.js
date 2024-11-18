// function register(){
//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;
//    var phone = document.getElementById("phone").value;
//    var password = document.getElementById("password").value;
//    var confirmpassword = document.getElementById("confirmpassword").value;

//    var nameArr = [];
//    nameArr.push(name);

//    localStorage.setItem("name1", JSON.stringify (nameArr))
//    localStorage.setItem("email1", JSON.stringify (email))
//    localStorage.setItem("phone1", JSON.stringify (phone))
//    localStorage.setItem("password1", JSON.stringify (password))
//    localStorage.setItem("confirmpassword", JSON.stringify(confirmpassword))

// }

function register(){
   let formData = JSON.parse(localStorage.getItem('formData')) || [];
   let exist = formData.length && 
   JSON.parse(localStorage.getItem('formData')).some(data => data.name.toLowerCase() == document.getElementById('name').value.toLowerCase());
   if(!exist){
       formData.push({
           name: document.getElementById('name').value,
           email: document.getElementById('email').value,
           phone: document.getElementById('phone').value,
           password: document.getElementById('password').value,
           confirmpassword: document.getElementById('confirmpassword').value
       });
       localStorage.setItem('formData', JSON.stringify(formData));
       // console.log(localStorage.getItem('formData'));
       document.querySelector('form').reset();
       document.getElementById('name').focus();
   }
   else{
       alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
   }
}




// function alertFunction() {
//    alert("Account Has Been Created");
//  }

 function form_validation(){
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var password = document.getElementById("password").value;
   var confirmpassword = document.getElementById("confirmpassword").value;
   var check_phone = isFinite(phone);
   var error = document.getElementsByClassName("error")[0];
   
   if(name =='' || name.length < 1){
      error.classList.add("danger");
      error.innerHTML = "Please Enter Valid Name";
   }else if(email =='' || email.length < 1){
      error.classList.add("danger");
      error.innerHTML = "Please Enter Valid Email";
   }else if(phone =='' || phone.length < 10 || phone.length >10){
      error.classList.add("danger");
      error.innerHTML = "Please Enter Valid Phone No";
   }else if(check_phone == false){
      error.classList.add("danger");
      error.innerHTML = "Please Enter Valid Phone No";
   }else if(password =='' || password.length < 6 || password.length > 16){
      error.classList.add("danger");
      error.innerHTML = "Please Enter Valid Password";
   }else if(confirmpassword =='' || confirmpassword.length < 6 || confirmpassword.length > 16){
      error.classList.add("success");
      error.innerHTML = "Please Enter Valid Password";
   }
   else
   {
      error.classList.remove("danger");
      error.classList.add("success");
      error.innerHTML = "Thank You For Registration";
   }

}
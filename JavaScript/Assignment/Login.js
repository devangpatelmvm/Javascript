
// function loginFunction(){
//      var name = document.getElementById('name').value;
//      var password = document.getElementById('password').value;

//      var name1 = localStorage.getItem("name1");
//      var password1 = localStorage.getItem("password1");
    
//      if(name==name1 && password==password1){
//         // window.location.href = "Home.html";
//         window.location.href = "SideMenu-Page.html";

//      }else{
//          alert("UserName And Password Is Incorrect");
//      }
// }


// function loginFunction() {
//     // let abc = false;
//     let name = document.getElementById('name').value, password = document.getElementById('password').value;
//     let formData = JSON.parse(localStorage.getItem('formData')) || [];
//     let exist = formData.length && 
//     JSON.parse(localStorage.getItem('formData')).some(data => data.name.toLowerCase() == name &&
//      data.password.toLowerCase() == password && JSON.stringify(localStorage.setItem('UserName', data.name))) ;
//     if(!exist){
//         alert("Incorrect login credentials");
//         // console.log(abc)
//         // window.location.href = "SideMenu-Page.html";
//     }
//     else{
//         alert("A");
//         window.location.href = "SideMenu-Page.html";
//     }
  
//  } 



 function loginFunction() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    // var formData = JSON.parse(localStorage.getItem('formData')) || [];
    // let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => 
        {
        if(data.name.toLowerCase() == name && data.password.toLowerCase() == password)
        {
            JSON.stringify(localStorage.setItem('name', data.name))
             window.location.href = "SideMenu-Page.html";
        }
        }
     )
       if(JSON.parse(localStorage.getItem('formData')).some(data =>
         data.name.toLowerCase() == name && data.password.toLowerCase() == password))
       {
           alert("Login Successfully");
        // alert("Incorrect login credentials");
       }else{
        alert("Incorrect login credentials");
       }
     
     ;

    //  if(formData.name != name && formData.password != password)
    //  {
    //   alert("Incorrect login credentials");
    //  }
 } 



// function validateForm(){
//     var name = document.myForm.name.value;
//     var password = document.myForm.password.value;

//     if(name==null || name=="" || name.length<3){
//           alert("Name Ban't Be Blank.");
//     }else if(password.length<6){
//         alert("Password Must Be At Least 6 Characters Long.");
//   }
// }

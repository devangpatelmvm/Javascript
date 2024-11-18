// function dispData(){
//     console.log(localStorage.getItem('formData'));
//     if(localStorage.getItem('formData')){
//         var output = document.querySelector('tbody');
//         output.innerHTML = "";
//         JSON.parse(localStorage.getItem('formData')).forEach(data => {
//             output.innerHTML += `
//                     <tr>
//                         <td>${data.fname}</td>
//                         <td>${data.lname}</td>
//                         <td>${data.email}</td>
//                         <td>${data.pwd}</td>
//                     </tr>
//             `;
//         });                
//     }
// }
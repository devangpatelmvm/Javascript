let formData = JSON.parse(localStorage.getItem('formData')) || [];
let exist = formData.length && 
JSON.parse(localStorage.getItem('formData')).some(data => data.fname.toLowerCase() == document.getElementById('fname').value.toLowerCase() && data.lname.toLowerCase() == document.getElementById('lname').value.toLowerCase());
if(!exist){
    formData.push({
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        pwd: document.getElementById('pwd').value
    });
    localStorage.setItem('formData', JSON.stringify(formData));
    // console.log(localStorage.getItem('formData'));
    dispData();
    document.querySelector('form').reset();
    document.getElementById('fname').focus();
}
else{
    alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
}
e.preventDefault();
}
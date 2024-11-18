//   For Local Storage 
localStorage.setItem('Name1','Devang');
localStorage.setItem('Name2','Ram');
localStorage.setItem('Name3','Lakshman');

// For Clear Local Storage
//localStorage.clear();

//    For Remove particular Item
// localStorage.removeItem('Name3');

// let Name = localStorage.getItem('Name1');
// let Name1  = localStorage.getItem('Array1');   // Error
// console.log(Name1);   // Error

// Session Storage
                                                                        
let Array1 = ['Hi','Hello','Hey'];
let Array2 = ['1','2','3'];

sessionStorage.setItem('sessionName', 'Aaa');
sessionStorage.setItem('sessionName1', 'Bbb');
sessionStorage.setItem('sessionName2', JSON.stringify(Array1));
sessionStorage.setItem('sessionName4', JSON.stringify(Array2));

//console.log("HII in JS ");

const name    = document.getElementById('userName');
const email   = document.getElementById('userEmail');
const numb    = document.getElementById('userNumb');
const submit  = document.getElementById('formSubmit');
const form    = document.getElementById("formInput");
const message = document.getElementById("message");

let validName  = false;
let validEmail = false;
let validNumb  = false;

//console.log(name,email,numb);

 name.addEventListener("blur",()=>{

    let val = name.value;
    let regex = /^[a-zA-z]([a-zA-z0-9]){1,20}$/;

    let f = regex.test(val);
    if(f){
        validName = true;
        name.classList.remove('is-invalid');

    }
    else{
        validName = false;
        name.classList.add('is-invalid');
    }


 });
 email.addEventListener("blur",()=>{


    let val = email.value;
    let regex = /^([_\-\.0-9a-zA-z]+)@([a-zA-z]+)\.([a-zA-z]){1,7}$/;
    //console.log(regex);

    let f = regex.test(val);
    if(f){
        validEmail = true;
        email.classList.remove('is-invalid');

    }
    else{
        validEmail = false;
        email.classList.add('is-invalid');
    }

 });


numb.addEventListener('blur',()=>{
    //console.log("In blur");
    let val = numb.value;
    let regex = /^([0-9]){10}$/;
    let f = regex.test(val);
    if(f){
        validNumb = true;
        numb.classList.remove('is-invalid');
    }
    else{
        validNumb = false;
        numb.classList.add('is-invalid');
    }

});

submit.addEventListener('click',(e)=>{
  //console.log("In submit");
  
  if(validEmail && validName && validNumb){

    message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">HOLA!! FORM SUBMITTED SUCCESSFULLY!!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

     validName  = false;
     validEmail = false;
     validNumb  = false;
    form.reset();

}
  else{
    message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">!!PLEASE PROVIDE ACCURATE INPUT!!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
    
  }
   e.preventDefault();
//   console.log(
//     validName ,
//     validEmail,
//     validNumb);

});




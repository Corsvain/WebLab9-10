let formBtn = document.querySelector('.btn')
let forma = document.querySelector('#form')
let street = document.querySelector('#street')
let infa = document.querySelector('#infa')
let email = document.querySelector('#email')
let codeCity = document.querySelector('#code_city')
let phone = document.querySelector('#phone')
let phoneCode = document.querySelector('#phone_code')



let allInputElements = document.querySelectorAll('.checkout')



form.addEventListener('submit', function (event) {
    event.preventDefault()
    let inputs = document.querySelectorAll('.checkout');
    let valid = true;
    removeValidation()

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            valid = false;
            let errorMessage = document.createElement('p');
            errorMessage.className = 'error'
            errorMessage.textContent = 'Поле не должно быть пустым';
            errorMessage.style.margin = 0;
            errorMessage.style.marginLeft = "10px";
            errorMessage.style.color = 'red';
            inputs[i].parentNode.appendChild(errorMessage);
        }
    }

    if (validateEmail() === false || validatePhone() === false || validatePhoneCode() === false) {
      valid = false
    }


    if (valid) {
        document.getElementById('form').submit();
    }
  })

    
  let removeValidation = function () {
    let errors = form.querySelectorAll('.error')
  
    for (var i = 0; i < errors.length; i++) {
      errors[i].remove()
    }
  }

  function validateEmail() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = email.value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return valid=false;
    }
 }

 function validatePhone() {
    let reg = /^\d{10}$/;
    let phoneNumber = phone.value;
    if(reg.test(phoneNumber) == false) {
       alert('Введите корректный номер телефона');
       return valid=false;
    }
 }

 function validatePhoneCode() {
  let reg = /^[1-9]$/;
  let phoneNumberCode = phoneCode.value;
  if(reg.test(phoneNumberCode) == false) {
     alert('Введите корректный код номер телефона');
     return valid=false;
  }
}
import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
}
const formData = {};
// const getFormData = key => JSON.parse(localStorage.getItem(key));

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

const key = localStorage.getItem(STORAGE_KEY);
console.log(key);

const keyParse = JSON.parse(key)
console.log(keyParse);

const getInputEmail = document.querySelector('input[name="email"]'); 

const getInpuMessage = document.querySelector('textarea[name="message"]');

if(keyParse !== null) {
    getInputEmail.value = keyParse.email;
    getInpuMessage.value = keyParse.message;    
}


refs.form.addEventListener('input', e => {
    // console.log(e.target);
    formData[e.target.name] = e.target.value;
   //  щоб зберегти в localStorage треба формдаті зробити stringify
//    const formDataString = JSON.stringify(formData);
//  console.log(formDataString);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 console.log(formData);

// коли при перезавантаженні читати з localStorage 
// якщо там щось є треба зробити JSON.parse  

 //  localStorage.getItem(STORAGE_KEY,JSON.parse(formData));
}); 

// populateTextarea ()

function onFormSubmit (e) {
e.preventDefault();

e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);

}

// function onTextareaInput (e) {
// const message = e.target.value;
// localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea () {
// const savedMessage = localStorage.getItem(STORAGE_KEY);

// if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;   
// }
// }

import throttle from "lodash.throttle";
const ref = {
    form: document.querySelector('.feedback-form'),
    // input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

// const formData = {};
ref.form.addEventListener('submit', onFormSubmit);
ref.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit (e) {
e.preventDefault();

e.currentTarget.reset();

}

function onTextareaInput (e) {
const message = e.target.value;
localStorage.setItem('feedback-form-state', message);
}


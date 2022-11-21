import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormLocalStorage, 500));

function getData() {
  const dataJSON = localStorage.getItem(STORAGE_KEY);
  console.log(dataJSON);
  if (!dataJSON) return;

  data = JSON.parse(dataJSON);
  const keys = Object.keys(data);
  for (let key of keys) {
    refs.form.elements[key].value = data[key];
  }
}
getData();

function onFormLocalStorage(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(e.target.value);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

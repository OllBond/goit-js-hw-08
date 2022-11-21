import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormLocalStorage, 500));

// функція oтримати дані з полів форми
function getData() {
  //за допомогою getItem отримуємо дані з localStorage
  const dataJSON = localStorage.getItem(STORAGE_KEY);
  // перевірка: якщо даних нема приходить null робимо інверсію
  // null приводиться до false якщо не null true виходимо з функції
  if (!dataJSON) return;
  // якщо дані є парсимо dataJSON і записуємо в об'єкт formData
  const formData = JSON.parse(dataJSON);
  // отримуємо масив ключів formData email та message
  const keys = Object.keys(formData);
  // через цикл отримуємо доступ до кожного ключа
  for (let key of keys) {
    // у форми є elements: звертаємося до форми поля elements
    //  у elements шукаємо елемент з name[key] (тобто email та message)
    //знаходимо, звертаємося до value і присвоюємо значення яке лежить
    // в ключі [key] об'єкту formData
    refs.form.elements[key].value = formData[key];
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
  console.log(e.currentTarget.value);
  // oчистка форми
  e.currentTarget.reset();
  // очистка localStorage
  localStorage.removeItem(STORAGE_KEY);
}

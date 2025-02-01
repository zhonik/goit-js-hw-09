const refs = {
  form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  refs.form.reset();
});

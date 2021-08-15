const form = document.forms.emailForm;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const regex = /^[A-Za-z]{1}[A-Za-z0-9\_\-]+@[A-Za-z0-9\-]{1,20}\.([a-z]{2,3})$/
  const value = form.elements.email.value;
  if (!regex.test(value)) {
    alert('Invalid email');
  }
});

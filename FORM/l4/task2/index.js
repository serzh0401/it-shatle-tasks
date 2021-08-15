function addUsers() {
  const showFormBtn = document.querySelector('#show-form');
  const container = document.querySelector('#form-container');
  const form = container.querySelector('#user-form');
  // Создаём метод показа формы
  const showForm = () => {
    const overlay = document.querySelector('#overlay');
    overlay.classList.add('shown');
    container.style.display = 'block';
    form.elements.name.focus();
    // Находим ошибку
    const error = document.querySelector('.errorAge');

    if (error) {
      // Если есть ошибка, то удаляем её
      error.remove();
    }
    // Навешиваем слушателя на документ
    document.addEventListener('keydown', keyHandler);
  };
// Создаём метод закрытия формы
  const hideForm = () => {
    const overlay = document.querySelector('#overlay');
    overlay.classList.remove('shown');
    form.elements.name.value = '';
    form.elements.age.value = '';
    container.style.display = 'none';
    // Удаляем слушатель с документа
    document.removeEventListener('keydown', keyHandler);
  };
  // Обработчик закрытия формы на escape
  function keyHandler(event) {
    if (event.key == 'Escape') {
      hideForm();
    }
  }
  // Метод добавления юзера в лист
  const addUserToList = (name, age) => {
    if (age > 18) {
      let ulEl = document.querySelector('ul');
      // Если лист ещё не создан, то создаём его
      if (!ulEl) {
        ulEl = document.createElement('ul');
        showFormBtn.after(ulEl);
      }

      const liEl = document.createElement('li');
      liEl.innerHTML = `${name} - ${age} `;
      ulEl.append(liEl);
    } else {
      const redMsg = document.createElement('div');
      redMsg.innerHTML = 'Your age is under 18!!!';
      redMsg.classList.add('errorAge');
      showFormBtn.after(redMsg);
    }
    hideForm();
  };

  showFormBtn.addEventListener('click', showForm);

  form.addEventListener('submit', (event) => {
    // Отменяем стандартное действия сабмита
    event.preventDefault();
    let userName = form.name.value;
    let userAge = form.age.value;
    if (userAge == '' || userName == '') {
      return;
    }
    addUserToList(userName, userAge);
  });

  form.cancel.addEventListener('click', () => {
    hideForm();
  });
}

addUsers();

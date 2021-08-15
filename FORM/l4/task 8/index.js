const form = document.querySelector('.form-div');
const addBtnForm = document.getElementById('form-btn');
const addBtn = document.getElementById('main-btn');

function createNote(params) {
  const [petName, owner, date, time, text] = params;
  const noteList = document.getElementById('noteList');
  const newNote = document.createElement('div');
  newNote.setAttribute('class', 'col-md-12 note');

  const includedDiv1 = document.createElement('div');
  includedDiv1.setAttribute('class', 'col-xs-1');
  newNote.append(includedDiv1);

  const delImg = document.createElement('img');
  delImg.setAttribute('src', 'img/010_x-3-512.png');
  delImg.setAttribute('class', 'removeIcon');
  includedDiv1.appendChild(delImg);
  delImg.onclick = function () {
    newNote.remove();
  };

  const includedDiv2 = document.createElement('div');
  includedDiv2.setAttribute('class', 'col-xs-8');
  newNote.append(includedDiv2);
  includedDiv2.innerHTML = `<h3>${petName}</h3>
                    <p><strong>Owner:</strong> ${owner} <br>
                        ${text}
                        </p>`;

  const includedDiv3 = document.createElement('div');
  includedDiv3.setAttribute('class', 'col-xs-3');
  newNote.appendChild(includedDiv3);
  includedDiv3.innerHTML = `<i>${date} ${time}</i>`;

  noteList.append(newNote);
}

function getDataFromForm(event) {
  event.preventDefault();
  const inputsData = [];
  const inputs = form.querySelectorAll('input');
  const textarea = document.querySelector('#inputNote');
  const isEmpty = false;

  for (let i = 0; i < inputs.length; i++) {
    inputsData.push(inputs[i].value);
    if (!inputs[i].value) {
      isEmpty = true;
    }
  }

  if (textarea.value) {
    inputsData.push(textarea.value);
  } else {
    isEmpty = true;
  }

  if (!isEmpty) {
    createNote(inputsData);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
    textarea.value = '';
    form.classList.toggle('toggle');
    addBtn.classList.toggle('main-btn-open');
  }
}

form.addEventListener('submit', getDataFromForm)

addBtn.addEventListener('click', () => {
  form.classList.toggle('toggle');
  addBtn.classList.toggle('main-btn-open');

  if (!form.classList.contains('toggle')) {
    form.querySelector('form').elements[0].focus();
  }
});

const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();

    const name = form.querySelector('[name="name"]'),
        surname = form.querySelector('[name="surname"]'),
        phone = form.querySelector('[name="phone"]'),
        message = form.querySelector('[name="message"]');

    const values = {
        name: name.value,
        surname: surname.value,
        phone: phone.value,
        message: message.value
    };

    console.log(values);
}

form.addEventListener('submit', retrieveFormValue);


    
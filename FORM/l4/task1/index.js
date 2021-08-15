const form = document.forms.calculator;
form.addEventListener('submit', calculate);

function calculate(event) {
  // Отменяем стандартное действие сабмит
  event.preventDefault();

  // Берём модули наших значений, чтобы наша логика не сломалась при вводе отриццательных значений
  const initial = Math.abs(this.openingBalance.value);
  const money = Math.abs(this.money.value);

  // Если одно из полей не заполнено, то просто выходим из функции
  if (!initial || !money) {
    return;
  }

  const radioBtn = this.radioBtn;

  if (radioBtn[0].checked) {
    const result = initial + money;
    // Берём высоту используя модуль результата
    const height = `${(Math.abs(result) / initial) * 100}px`;
    document.getElementById('heightIncome').style.height = height;
    document.getElementById('currentMoney').innerHTML = result;
  }
  else {
    const result = initial - money;
    const height = `${(Math.abs(result) / initial) * 100}px`;
    document.getElementById('heightExpense').style.height = height;
    document.getElementById('currentMoney').innerHTML = result;
  }
}

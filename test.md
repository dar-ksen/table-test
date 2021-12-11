Вопрос 1.
var xxx = 4;
function test1() {
return(xxx === 4 && 'Cool');
}
function test2() {
return(xxx === 4 || 'Cool');
}
Что вернут функции test1 и test2 при их выполнении?

Ответ:
test1 вернет строку 'Cool'
test2 вернет false

Вопрос 2.
Для чего используется метод preventDefault объекта события при работе с DOM (event.preventDefault())?
Приведите пример использования.
Ответ:
Для того чтобы предотвратить стандартное поведение элемента по умолчанию. Например отправка формы или переход по ссылке.
Пример кода https://github.com/dar-ksen/kodix-test/blob/main/src/components/form/form.js
const onSubmit = (e) => {
e.preventDefault();
const uniqId = new Date().getTime();
formChange({ id: uniqId });

    addCar(form);

};


//ERRORS
const eCardNumber = document.querySelector('#errorCardNumber'); //constantes y variables creadas en javascript a partir de id, class, etc deben tener nombre diferente a dicho identificador de html
const eCardName = document.querySelector('#errorCardName'); // eCard_name la "e" es de error
const eCardMonth = document.querySelector('#errorCardMonth');
const eCardYear = document.querySelector('#errorCardYear');
const eCardCvc = document.querySelector('#errorCardCvc');

//NAME
const iCard_name = document.querySelector('#card_name');
let card_name_value = document.querySelector('#card-front__name');


iCard_name.oninput = function nameFrontCardChange(event) { //iCard_name la "i" es de input
    card_name_value.innerHTML = event.target.value;
}

//CARD NUMBER
const iCard_number = document.querySelector('#card_number'); //'#card_number' del form html
let card_number_value = document.querySelector('#card-front__number'); //'#card-front__number' de la tarjeta frontal en html

iCard_number.oninput = function numberFrontCardChange(event) { //funcion que cambia el numero que se muestra en tarjeta segun el introducido en el input
    card_number_value.innerHTML = event.target.value;
}


//MONTH
const iCard_month = document.querySelector('#card_month');
let card_month_value = document.querySelector('#card-front__month');


iCard_month.oninput = function monthFrontCardChange(event) {
    card_month_value.innerHTML = event.target.value;
}

//YEAR
const iCard_year = document.querySelector('#card_year');
let card_year_value = document.querySelector('#card-front__year');


iCard_year.oninput = function yearFrontCardChange(event) {
    card_year_value.innerHTML = event.target.value;
}

//CVC
const iCard_cvc = document.querySelector('#card_cvc');
let card_cvc_value = document.querySelector('#cvc');


iCard_cvc.oninput = function cvcFrontCardChange(event) {
    card_cvc_value.innerHTML = event.target.value;
}

//BUTTONS
const bConfirm = document.querySelector('#form__btn-confirm');
const bContinue = document.querySelector('#form__btn-continue');

//SECTIONS
const cardForm = document.querySelector('#form');       //formulario 
const formThankYou = document.querySelector('#form__thankYou');    //mensaje de gracias

//BUTTONS FUNCTIONS
bConfirm.onclick = function (event) { //funcion que comprueba los datos introducidos al dar click al boton Confirm en el form
    event.preventDefault();
    const errorCardName = []; //array vacio creado para guardar los posibles errores
    const errorCardNumber = [];
    const errorCardMonth = [];
    const errorCardYear = [];
    const errorCardCvc = [];


    eCardName.innerHTML = "";
    eCardNumber.innerHTML = "";
    eCardMonth.innerHTML = "";
    eCardYear.innerHTML = "";
    eCardCvc.innerHTML = "";


    //NAME
    if (iCard_name.value.length == 0) {
        errorCardName.push("Can't be blank.");
    }

    for (let i = 0; i < errorCardName.length; i++) {
        eCardName.innerHTML += `<p>${errorCardName[i]}</p>`;
    }

    //NUMBER
    if (iCard_number.value.length == 0) {
        errorCardNumber.push("Can't be blank.");
    }
    if (iCard_number.value.length != 16) {
        errorCardNumber.push("Must be 16 digits.");
    }

    if (isNaN(iCard_number.value)) { //funcion is-Not-a-Number toma valores tipo string y los convierte a number?
        errorCardNumber.push("Wrong format, numbers only.");

    }
    for (let i = 0; i < errorCardNumber.length; i++) {
        eCardNumber.innerHTML += `<p>${errorCardNumber[i]}</p>`;
    }


    //MONTH
    if (iCard_month.value.length == 0) {
        errorCardMonth.push("Can't be blank.");
    }
    if (isNaN(iCard_month.value)) {
        errorCardMonth.push("Wrong format, numbers only.");
    }
    for (let i = 0; i < errorCardMonth.length; i++) {
        eCardMonth.innerHTML += `<p>${errorCardMonth[i]}</p>`;
    }

    //YEAR
    if (iCard_year.value.length == 0) {
        errorCardYear.push("Can't be blank.");
    }
    if (isNaN(iCard_year.value)) {
        errorCardYear.push("Wrong format, numbers only.");
    }
    for (let i = 0; i < errorCardYear.length; i++) {
        eCardYear.innerHTML += `<p>${errorCardYear[i]}</p>`;
    }

    //CVC
    if (iCard_cvc.value.length == 0) {
        errorCardCvc.push("Can't be blank.");
    }
    if (isNaN(iCard_cvc.value)) { 
        errorCardCvc.push("Wrong format, numbers only.");
    }
    for (let i = 0; i < errorCardCvc.length; i++) {
        eCardCvc.innerHTML += `<p>${errorCardCvc[i]}</p>`;
    }

    //VALIDATION
    if (errorCardName.length == 0 && errorCardNumber.length == 0 && errorCardMonth.length == 0 && errorCardYear.length == 0 && errorCardCvc.length == 0) { //validacion de arrays, si estan vacíos se muestra el mensaje de gracias, sino sigue oculto
        cardForm.classList.add('hidden');
        formThankYou.classList.remove('hidden');
    }
}

bContinue.onclick = function () {
    formThankYou.classList.add('hidden'); //oculta mensaje de gracias
    cardForm.classList.remove('hidden');  //vuelve a mostrar el formulario cuando se usa el boton continue del mensaje de gracias

    /* iCard_name.value = ""; //limpia el input
    card_name_value.innerHTML = "Jane Appleseed"; //cambia el valor del nombre de la tarjeta (en imagen) al inicial
    iCard_number.value = "";
    card_number_value.innerHTML = "0000 0000 0000 0000";
    iCard_month.value = "";
    card_month_value.innerHTML = "00";
    iCard_year.value = "";
    card_year_value.innerHTML = "00";
    iCard_cvc.value = "";
    card_cvc_value.innerHTML = "000"; */
    cleanPage();
}

function cleanPage() {
    location.reload();
    cardForm.reset();
}

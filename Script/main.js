const miniNav = document.querySelector(`.navMini`);

document.querySelector(`.hamburger`).addEventListener(`click`, () => {
    miniNav.style.display = `block`;
});
document.getElementById(`exitNav`).addEventListener(`click`, () => {
    miniNav.style.display = `none`;
});

const theEmail = document.getElementById(`contactEmail`);
const thePhone = document.getElementById(`contactPhone`);
const regEx = /^(05|08)[0-9]{8}$/;
const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

thePhone.addEventListener(`input`, () => {
    if (!regEx.test(thePhone.value)) {
        thePhone.setCustomValidity(`Invalid phone number`);
    } else {
        thePhone.setCustomValidity(``);
    }
});

theEmail.addEventListener(`input`, () => {
    if (!regExEmail.test(theEmail.value)) {
        theEmail.setCustomValidity(`Invalid email`);
    } else {
        theEmail.setCustomValidity(``);
    }
});
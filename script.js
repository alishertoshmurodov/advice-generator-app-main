const adviceIdEl = document.querySelector('.advice-id');
const adviceEl = document.querySelector('.advice');
const diceBtnEl = document.querySelector('.dice-btn');

const url = 'https://api.adviceslip.com/advice';


function getAdvice(e) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            adviceIdEl.innerHTML = data.slip.id;
            adviceEl.innerHTML = `"${data.slip.advice}"`;
        })
}

getAdvice();
diceBtnEl.addEventListener('click', getAdvice);
diceBtnEl.addEventListener('click', function(e) {
    diceBtnEl.classList.add('rotate')
    setTimeout(() => {
        diceBtnEl.classList.remove('rotate');
    }, 1000);
});
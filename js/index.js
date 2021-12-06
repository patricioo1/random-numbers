const generateButton = document.querySelector('button')
const evenNumbers = document.querySelector('.even-numbers');
const oddNumbers = document.querySelector('.odd-numbers');


const randomNumbers = () => {
    const randomArray = [];
    for (let i = 1; i <= 20; i++) {
        const randomNumber = Math.round(Math.random() * 100);
        randomArray.push(randomNumber);
    }
    checkAndInnerNumbers(randomArray);
}

const whatsTheNumber = (number) => {
    if (number % 2 === 0) {
        evenNumbers.innerHTML += `<p>${number}</p>`;
    } else {
        oddNumbers.innerHTML += `<p>${number}</p>`
    }
}

const sortArray = (arr) => {
    arr.sort(function (a, b) {
        return a - b
    });
}

const checkAndInnerNumbers = (arr) => {
    sortArray(arr);
    arr.filter(whatsTheNumber);
}

const clearColumns = () => {
        evenNumbers.innerHTML = ' ';
        oddNumbers.innerHTML = ' ';
}

generateButton.addEventListener('click', () => {
    clearColumns();
    randomNumbers();
});
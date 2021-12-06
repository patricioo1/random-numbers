const generateButton = document.querySelector('button');
const evenNumbers = document.querySelector('.even-numbers');
const oddNumbers = document.querySelector('.odd-numbers');


const randomNumbers = () => {
    const randomArray = [];
    for (let i = 1; i <= 20; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (randomArray.indexOf(randomNumber) !== -1) {
            console.log('This number already exist', randomNumber);
        } else {
            randomArray.push(randomNumber);
        }
    }
    sortAndFilterNumbers(randomArray);
}

const whatsTheNumber = (number) => {
    if (number % 2 === 0) {
        evenNumbers.innerHTML += `<p>${number}</p>`;
    } else {
        oddNumbers.innerHTML += `<p>${number}</p>`;
    }
}

const sortArray = (arr) => {
    arr.sort((a, b) => {
        return a - b;
    });
}

const sortAndFilterNumbers = (arr) => {
    sortArray(arr);
    arr.filter(whatsTheNumber);
}

const clearColumns = () => {
    evenNumbers.innerHTML = '';
    oddNumbers.innerHTML = '';
}

generateButton.addEventListener('click', () => {
    clearColumns();
    randomNumbers();
});
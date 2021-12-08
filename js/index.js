const generateButton = document.querySelector('button');
const evenNumbers = document.querySelector('.even-numbers');
const oddNumbers = document.querySelector('.odd-numbers');

const renderEvenNumbers = (numbers) => {
    numbers.forEach(num=>{
        evenNumbers.innerHTML += `<p>${num}</p>`;
    })
}

const renderOddNumbers = (numbers) => {
    numbers.forEach(num=>{
        oddNumbers.innerHTML += `<p>${num}</p>`;
    })
}


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

// const whatsTheNumber = (number) => {
//     if (number % 2 === 0) {
//         evenNumbers.innerHTML += `<p>${number}</p>`;
//     } else {
//         oddNumbers.innerHTML += `<p>${number}</p>`;
//     }
// }

const isEven = (number) => number % 2 === 0;

const seperateEvenAndOddNumbers = (numbers) => {
    return {
        even: numbers.filter(n=> isEven(n)),
        odd: numbers.filter(n=> !isEven(n))
    }
}

const sortInAscendingOrder = (arr) => {
    return arr.sort((a, b) => {
        return a - b;
    });
}

const sortAndFilterNumbers = (arr) => {
    const sortedArray = sortInAscendingOrder(arr);
    const {even, odd} = seperateEvenAndOddNumbers(sortedArray);
    renderOddNumbers(odd);
    renderEvenNumbers(even);
}

const clearColumns = () => {
    evenNumbers.innerHTML = '';
    oddNumbers.innerHTML = '';
}

generateButton.addEventListener('click', () => {
    clearColumns();
    randomNumbers();
});
const totalZombiesElement = document.querySelector('.total-zombies');
const deadZombiesElement = document.querySelector('.dead-zombies');
const smallZombiesElement = document.querySelector('.small-zombies');
const madZombiesElement = document.querySelector('.mad-zombies');
const strongZombiesElement = document.querySelector('.strong-zombies');

let countTotalZombies = 0;
let countDeadZombies = 0;
let countSmallZombies = 0;
let countMadZombies = 0;
let countStrongZombies = 0;

zombiesData.forEach((item) => {
    item = Number(item);

    if (item < 1 || isNaN(item)) {
        countDeadZombies++;
    } else if ( 0 < item && item < 11) {
        countSmallZombies++;
    } else if (10 < item && item < 21) {
        countMadZombies++;
    } else if (20 < item) {
        countStrongZombies++;
    }

    countTotalZombies++;
});

totalZombiesElement.textContent += countTotalZombies;
deadZombiesElement.textContent += countDeadZombies;
smallZombiesElement.textContent += countSmallZombies;
madZombiesElement.textContent += countMadZombies;
strongZombiesElement.textContent += countStrongZombies;

console.log(totalZombiesElement.innerText);
console.log(deadZombiesElement.innerText);
console.log(smallZombiesElement.innerText);
console.log(madZombiesElement.innerText);
console.log(strongZombiesElement.innerText);

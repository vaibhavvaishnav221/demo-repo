const randomNumbers = [];

for (i = 0; i < 25; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1)
}

randomNumbers.forEach(el => console.log(el));

randomNumbers.map(el => el * 2);

randomNumbers.reduce((sum, el) => sum + el);

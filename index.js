// Higher Order Array Methods

const nums = [];

for (i = 0; i < 30; i++) {
    nums.push(Math.floor(Math.random() * 100) + 1);
}

// Filter Method

console.log(nums.filter(el => el % 2 == 0));

// Map Method

console.log(nums.map(el => el * 2));

// Reduce Method

console.log(nums.reduce(sum, el) => sum + el);

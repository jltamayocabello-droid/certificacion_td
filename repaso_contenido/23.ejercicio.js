
const arr = [20, 25, 22, 18, 30];

const stast = {
    max: Math.max(...arr),
    min: Math.min(...arr),
    avg: arr.reduce((a, b) => a+b) / arr.length
};

console.log(stast)
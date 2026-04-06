var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";


function getTotalPrice(obj) {
    let sum = 0;

    for (let key in obj) {
        let value = parseInt(obj[key]);
        sum += value;
    }

    return sum;
}


function getMinPrice(obj) {
    let min = Infinity;

    for (let key in obj) {
        let value = parseInt(obj[key]);
        if (value < min) {
            min = value;
        }
    }

    return min;
}


function getMaxPrice(obj) {
    let max = 0;

    for (let key in obj) {
        let value = parseInt(obj[key]);
        if (value > max) {
            max = value;
        }
    }

    return max;
}


console.log("Сумма:", getTotalPrice(services));
console.log("Мин:", getMinPrice(services));
console.log("Макс:", getMaxPrice(services));
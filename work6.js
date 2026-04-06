function checkProbabilityTheory(count) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    let evenPercent = (even / count) * 100;
    let oddPercent = (odd / count) * 100;

    console.log("Количество сгенерированных чисел:", count);
    console.log("Парных чисел:", even);
    console.log("Не четных чисел:", odd);
    console.log("Процент четных:", evenPercent.toFixed(2) + "%");
    console.log("Процент нечетных:", oddPercent.toFixed(2) + "%");
}

checkProbabilityTheory(1000);
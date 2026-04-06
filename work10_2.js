var text = "Wonderful Joyful Happiness Time Task Apple";

var regex = /\b[^aA\s]{6,}\b/g;

var result = text.match(regex);

console.log(result);

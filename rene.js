function removeDuplicates(stringWords) {
    const arrayWords = stringWords.split(",");
    const uniques = [...new Set(arrayWords)];
    const returnByLength = {};
    uniques.map((obj, index) => {
        if (returnByLength[obj.length]) {
            returnByLength[obj.length].push(obj);
        } else {
            returnByLength[obj.length] = [];
            returnByLength[obj.length].push(obj);
        }
    })
    return returnByLength;
}
function money(amount) {
    const denominaciones = { "quarter": 25, "dime": 10, "nickel": 5, "cent": 1 };
    let remaining = amount;
    const returnMoney = { "quarter": 0, "dime": 0, "nickel": 0, "cent": 0 };

    Object.keys(denominaciones).map((index) => {
        num = denominaciones[index];
        while (remaining >= num) {
            returnMoney[index]++;
            remaining -= num;
        }
    })
    return returnMoney;
}
console.log(money(111));
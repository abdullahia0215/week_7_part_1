let namelooper = (name, numbers) => {
    console.log(name);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

namelooper('Abdi', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

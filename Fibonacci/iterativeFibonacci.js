const fibs = (num) => {
    let sequence = [0,1];
    if(num <= 2) return 1;

    for(let i = 2; i <= num; i++){
        sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
    }
    return sequence;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
const fibsRecursive = (n , sequence = [0,1]) => { 

    if(sequence.length >= n) return sequence;

    return fibsRecursive(n, [...sequence, sequence[sequence.length -2 ] + sequence[sequence.length - 1]]);
}

fibsRecursive(8)

console.log(fibsRecursive(8));
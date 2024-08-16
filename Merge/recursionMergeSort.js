const recursiveMergeSort = (arr) => {
    if (arr.length === 0) return "Please provide a non empty array!"
    if(arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(-mid);

    return merge(recursiveMergeSort(left) , recursiveMergeSort(right));
}

const merge = (left , right) => {
    let result = [];

    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }else {
            result.push(right[j]);
            j++
        }
    }

    while(i < left.length){
        result.push(left[i]);
        i++
    }

    while( j < right.length){
        result.push(right[j]);
        j++;
    }

    return result;

}


console.log(recursiveMergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

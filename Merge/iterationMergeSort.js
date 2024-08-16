function iterationMergeSort(arr){
    if(arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(-mid);
    
    let m = left.length;
    let n = right.length;
    
    iterationMergeSort(left);
    iterationMergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;

    while(i <= m - 1 && j <= n - 1){
        if(left[i] < right[j]){
            arr[k++] = left[i++]
        }else{
            arr[k++] = right[j++]
        }
    }

    for(; i <= m - 1; i++){
        arr[k++] = left[i];
    }

    for(; j <= n - 1; j++){
        arr[k++] = right[j];
    }

    return arr;
}
//iterationMergeSort([3, 2, 1, 13, 8, 5, 0, 1]);

console.log(iterationMergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let smallest = i;

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        
        if(smallest !== i) {
            swap(arr, i, smallest);
        }
    }
    return arr;
}

//let result = selectionSort([5,3,2,1,4]);
let result = selectionSort([10, 20, 80, 30, 60, 50, 110, 100, 130, 170]);
console.log(result);
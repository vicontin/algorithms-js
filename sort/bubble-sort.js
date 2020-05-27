function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function swapIfLargerThanNextElement(arr, i) {
  if (arr[i] > arr[i + 1]) {
    swap(arr, i, i + 1);
    return true;  //signal that a swap happened, but don't return false if it did not happen.
  }
}

function bubbleSort(arr) {
  var swapHappened;
  for (var i = arr.length; i > 0; i--) {
    swapHappened = false;

    for (var j = 0; j < i - 1; j++) {
      swapHappened = swapIfLargerThanNextElement(arr, j);
    }
    
    if (!swapHappened) break;
  }
  return arr;
}

//const result = bubbleSort([100, 2345, 3, 101, 103, 2, 102, 1]);
const result = bubbleSort([10, 20, 80, 30, 60, 50, 110, 100, 130, 170]);
console.log(result);
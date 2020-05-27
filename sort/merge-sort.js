
function addResidualElementsIfAny(sorted, arr1, arr2, index1, index2) {
    while (index1 < arr1.length) {
        sorted.push(arr1[index1++]);
    }

    while (index2 < arr2.length) {
        sorted.push(arr2[index2++]);
    }
}

function merge(arr1, arr2) {
    var sorted = [];
    var index1 = 0;
    var index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            sorted.push(arr1[index1++]);
        }
        else {
            sorted.push(arr2[index2++]);
        }
    }

    addResidualElementsIfAny(sorted, arr1, arr2, index1, index2);

    return sorted;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let boundary = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, boundary));
    let right = mergeSort(arr.slice(boundary));

    return merge(left, right);
}


const temp = mergeSort([100, 2345, 3, 101, 103, 2, 102, 1]);
console.log(temp);


let result = merge([1, 10, 50], [2, 14, 99, 100]);
console.log(result);

result = merge([50], [2, 14, 99, 100]);
console.log(result);
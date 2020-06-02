class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length -1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if(element <= parent) { break; }

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    // extractMax() {
    //     const maxVal = this.values[0];
    //     let tempVal = this.values.pop();
    //     if(this.values.length > 0) {
    //         this.values[0] = tempVal;
    //         this.sinkDown();
    //     }
        
    //     return maxVal;
    // }

    // sinkDown() {
    //     let idx = 0;
    //     const length = this.values.length;
    //     const element = this.values[0];

    //     while(true) {
    //         let leftChildIdx = (idx * 2) + 1;
    //         let rightChildIdx = (idx * 2) + 2;
    //         let leftChild, rightChild;
    //         let swap = null;

    //         if(leftChildIdx < length) {
    //             leftChild = this.values[leftChildIdx];
    //             if(leftChild > element) {
    //                 swap = leftChildIdx;
    //             }
    //         }
    //         if(rightChildIdx < length) {
    //             rightChild = this.values[rightChildIdx];
    //             if((swap === null && rightChild > element) ||
    //                 (swap !== null && rightChild > leftChild)) {
    //                 swap = rightChildIdx;
    //             }
                
    //         }
    //         if(swap === null) break;

    //         this.values[idx] = this.values[swap];
    //         this.values[swap] = element;
    //         idx = swap;
    //     } 
    // }

    swap(arr, idx1, idx2) {
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    extractMax() {
        const result = this.values[0]
        const last = this.values.pop();
        this.values[0] = last;
 
        const sinkDown = (index) => {
            const leftIndex = (2 * index) + 1;
            const rightIndex = (2 * index) + 2;
            const maxValIndex = this.values[leftIndex] >= this.values[rightIndex] ? leftIndex : rightIndex;
            if(this.values[index] < this.values[maxValIndex]) {
                this.swap(this.values, index, maxValIndex)
                sinkDown(maxValIndex);
            }
        }
        sinkDown(0);
 
        return result;
    }

}

let heap = new MaxBinaryHeap();


heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);

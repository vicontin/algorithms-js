class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    //The lower the number the higher the priority
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length -1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if(element.priority >= parent.priority) { break; }

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    swap(arr, idx1, idx2) {
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    dequeue() {
        const result = this.values[0]
        const last = this.values.pop();
        this.values[0] = last;
 
        const sinkDown = (index) => {
            const leftIndex = (2 * index) + 1;
            const rightIndex = (2 * index) + 2;
            const maxValIndex = this.values[leftIndex].priority >= this.values[rightIndex].priority || 0 ? leftIndex : rightIndex;
            if(this.values[index] < this.values[maxValIndex]) {
                this.swap(this.values, index, maxValIndex)
                sinkDown(maxValIndex);
            }
        }
        sinkDown(0);
 
        return result;
    }

}

let queue = new PriorityQueue();

queue.enqueue("common cold", 1);
queue.enqueue("gun shot", 5);
queue.enqueue("hight fever", 2);

console.log(queue.values);
queue.dequeue();

console.log(queue.values);


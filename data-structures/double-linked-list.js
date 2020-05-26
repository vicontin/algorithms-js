/*
 * Insertion -> O(1) 
 * Removal -> O(1)
 * Searching -> O(N)
 * Access -> O(N)
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Adds a new node to the end of the list.
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }

    // Removes the last item in the list
    pop() {
        if(!this.tail) {
            return undefined;
        }

        const popped = this.tail;
        if(this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        
        this.length--;
        return popped;
    }

    //Removes a node from the head
    shift() {
        if(!this.head) {
            return undefined;
        }

        const oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        
        this.length--;
        return oldHead;
    }

    //Adds a node to the beginning of the list
    unshift(val) {
        const newHead = new Node(val);
        if(!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    //Retrieves the node at the specified position, if it exists
    get(position) {
        if(position < 0 || position > this.length -1) {
            return undefined;
        }
        const midPoint = Math.floor(this.length / 2);
        let current;
        if(position < midPoint) {
            let index = 0;
            current = this.head
            while(index < position) {
                current = current.next;
                index++;
            }
        } else {
            let index = this.length -1;
            current = this.tail;
            while(index > position) {
                current = current.prev;
                index--;
            }
        }
        return  current;
    }

    //Replaces the value at the specified position, if it exists
    set(position, val) {
        const node = get(position);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }

    //Inserts a new node at the specified position if appropriate
    insert(position, val) {
        if(position < 0 || position > this.length) {
            return false;
        }
        if(position == 0) {
            return !!this.unshift(val);
            
        }
        if(position == this.length) {
            return !!this.push(val);
        }

        const newNode = new Node(val);
        const previousNode = this.get(position -1);
        
        if(previousNode) {
            const nextNode = previousNode.next;
            newNode.prev = previousNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            previousNode.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }

    //Removes the item at the specified position, if found
    remove(position) {
        if(position < 0 || position >= this.length) {
            return undefined;
        }
        if(position === 0) {
            return this.shift();
            
        }
        if(position === this.length - 1) {
            return this.pop();
        }

        const removed = this.get(position);

        if(this.removed) {
            const nextNode = removed.next;
            const prevNode = removed.prev;

            nextNode.prev = prevNode;
            prevNode.next = nextNode;
            removed.next = null;
            removed.prev = null;
            this.length--;
        }
        return removed;
    }
}

const dl = new DoubleLinkedList();
dl.push(1);
dl.push(2);
dl.push(50);
dl.push(100);
dl.push(500);
console.log(dl);
console.log(dl.remove(1))
console.log(dl);
// console.log(dl);
// console.log(dl.get(1));
// console.log(dl.get(4));
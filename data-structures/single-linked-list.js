/*
 * Insertion -> O(1) 
 * Removal -> O(1) or O(N) - depends or where we remove from.
 * Searching -> O(N)
 * Access -> O(N)
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Adds a value to the end of the list
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //Removes the item at the end of the list
    pop() {
        if(!this.head) {
            return undefined;
        }

        var newTail;
        var current = this.head;
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if(!this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //Removes the head item
    shift() {
        if(!this.head) {
            return undefined;
        }
        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    //Adds a new node at the head position
    unshift(val) {
        if(!this.head) {
            return this.push(val);
        }
        let newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this;
    }

    //Gets an item based on given position
    get(position) {
        if(position < 0 || position >= this.length) {
            return null;
        }
        let ctr = 0;
        let current = this.head;
        while(ctr < position) {
            current = current.next;
            ctr++;
        }
        return current;
    }

    //Updates the value of the item at the specified position, if found.
    set(position, val) {
        var item = this.get(position);
        if(item) {
            item.val = val;
            return true;
        }
        return false;
    }

    //Adds a new node at the specified position, if appropriate
    insert(position, val) {
        if(position < 0 || position > this.length) {
            return false;
        }
        if(position == this.length) {
            return !!this.push(val);
        }
        if(position == 0) {
            return !!this.unshift(val);
        }
        
        let newNode = new Node(val);
        let previousNode = this.get(position -1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;
        return true;
    }

    //Removes the node at the specified position if it exists.
    remove(position) {
        if(position < 0 || position > this.length) {
            return undefined;
        }
        if(position === this.length -1) {
            return this.pop();
        }
        if(position === 0) {
            return this.shift();
        }

        let previous = this.get(position -1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }

    //Reverses the linked list
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        let previous = null;
        let next = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }

    printToArray() {
        var arr = [];
        var current = this.head;
        while(current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SingleLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.printToArray();
list.reverse();
list.printToArray();


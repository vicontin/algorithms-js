class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } 

        let current = this.root;
        while(true) {
            if(val === current.value) {
                return undefined;
            }
            if(val < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } 
                current = current.left
            } else if(val > current.value) {
                if (current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BreathSearchFirst() {
        const data = []
        const queue = []
        let node = this.root;
        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        return data;
    }

    //Self -> Left -> Right
    DFSPreOrder() { 
        const result = [];

        function traversePreOrder(node) {
            result.push(node.value)

            if(node.left) { traversePreOrder(node.left) }
            if(node.right) { traversePreOrder(node.right) }
        }

        traversePreOrder(this.root);

        return result;
    }

    // Left -> Right -> Self
    DFSPostOrder() {
        const result = [];

        function traversePostOrder(node) {
            if(node.left) { traversePostOrder(node.left) }
            if(node.right) { traversePostOrder(node.right) }

            result.push(node.value);
        }

        traversePostOrder(this.root);

        return result;
    }

    // Left -> Self -> Right
    DFSInOrder() {
        const result = [];

        function traverseInOrder(node) {
            if(node.left) { traverseInOrder(node.left) }
            
            result.push(node.value);

            if(node.right) { traverseInOrder(node.right) }
        }

        traverseInOrder(this.root);

        return result;
    }

    
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.BreathSearchFirst())

console.log(tree.DFSPreOrder())

console.log(tree.DFSPostOrder())

console.log(tree.DFSInOrder())


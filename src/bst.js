/* eslint-disable no-param-reassign */
import Node from "./nodeClass";

export default class Tree{
    constructor(array) {
        const sortedUniqueArray = Tree.sortAndRemoveDuplicates(array);
        this.root = this.buildTree(sortedUniqueArray);
    }

    static sortAndRemoveDuplicates(array) {
        return Array.from(new Set(array)).sort((a, b) => a - b);
    }

    buildTree(array, start = 0, end = array.length - 1) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }

    insert(value, node = this.root) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insert(value, node.left);
        } else {
            node.right = this.insert(value, node.right);
        }

        return node;
    }

    delete(value, node = this.root) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.delete(value, node.left);
        } else if (value > node.value) {
            node.right = this.delete(value, node.right);
        } else {
            if (node.left === null) {
                return node.right;
            } 
            if (node.right === null) {
                return node.left;
            }

            node.value = this.minValue(node.right);
            node.right = this.delete(node.value, node.right);
        }

        return node;
    }

    static minValue(node) {
        let minValue = node.value;
        while (node.left !== null) {
            minValue = node.left.value;
            node = node.left;
        }

        return minValue;
    }

    find(value, node = this.root) {
        if (node === null || node.value === value) {
            return node;
        }
        if (value < node.value) return this.find(value, node.left);

        return this.find(value, node.right);
    }

    // left node, root node, right node
    inOrder(callback = null, currentNode = this.root) {
        const result = [];
        const traverse = (node) => {
            if (node) {
                traverse(node.left);
                if (!callback) {
                    result.push(node.value);
                } else {
                    callback(node.value);
                }
                traverse(node.right);
            }
        };

        traverse(currentNode);
        return result;
    }

    // root node, left node, right node
    preOrder(callback = null, currentNode = this.root) {
        const result = [];
        const traverse = (node) => {
            if (node) {
                if (!callback) {
                    result.push(node.value);
                } else {
                    callback(node.value);
                }
                traverse(node.left);
                traverse(node.right)
            }
        }

        traverse(currentNode);
        return result;
    }

    // left node, right node, root node;
    postOrder(callback = null, currentNode = this.root) {
        const result = [];
        const traverse = (node) => {
            if (node) {
                traverse(node.left);
                traverse(node.right);
                if (!callback) {
                    result.push(node.value);
                } else {
                    callback(node.value);
                }
            }
        };

        traverse(currentNode);
        return result;
    }
    
    levelOrder(callback = null, currentNode = this.root) {
        const result = [];
        const queue = [];
        if (currentNode) {
            queue.push(currentNode);
        }
        while (queue.length > 0) {
            const node = queue.shift();
            if (!callback) {
                result.push(node.value);
            } else {
                callback(node.value);
            }
            if (node.left) {
                queue.push(node.left);
            } 
            if (node.right) {
                queue.push(node.right);
            }  
        }

        return result;
    }
    
    height(node) {
        if (node === null) {
            return -1;
        } 
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node, currentNode = this.root, currentDepth = 0) {
        if (currentNode === null) {
            return -1;
        }
        if (node === currentNode.value) {
            return currentDepth;
        }
    
        const leftDepth = this.depth(node, currentNode.left, currentDepth + 1);
        const rightDepth = this.depth(node, currentNode.right, currentDepth + 1);
    
        if (leftDepth !== -1 || rightDepth !== -1) {
            return Math.max(leftDepth, rightDepth);
        }
    
        return -1;
    }
    
}
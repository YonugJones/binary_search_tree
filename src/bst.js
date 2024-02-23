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
}
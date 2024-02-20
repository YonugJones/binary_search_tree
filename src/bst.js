import Node from "./nodeClass"

export default class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }


    buildTree(array, start = 0, end = array.length - 1) {
        const sortedUniqueArray = Array.from(new Set(array)).sort((a, b) => a - b);

        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const node = new Node(sortedUniqueArray[mid]);
        node.left = this.buildTree(sortedUniqueArray, start, mid - 1);
        node.right = this.buildTree(sortedUniqueArray, mid + 1, end);

        return node;
    }

}
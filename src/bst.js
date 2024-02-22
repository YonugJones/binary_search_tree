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
}
import Tree from "./bst";

export default function runTests() {

    // 1:
    function generateRandomArray(length) {
        const randomArray = [];
        for (let i = 0; i < length; i++) {
            const randomNumber = Math.floor(Math.random() * 100 + 1);
            randomArray.push(randomNumber);
        }
        return randomArray;
    }

    const tree = new Tree(generateRandomArray(16));

    // 2:
    tree.isBalanced();

    // 3:
    console.log(tree.levelOrder());
    console.log(tree.preOrder());
    console.log(tree.postOrder());
    console.log(tree.inOrder());

    // 4:
    tree.insert(Math.random() * 100 + 1);
    tree.insert(Math.random() * 100 + 1);
    tree.insert(Math.random() * 100 + 1);
    tree.insert(Math.random() * 100 + 1);

    // 5:
    console.log(tree.isBalanced());

    // 6:
    tree.rebalance();

    // 7:
    console.log(tree.isBalanced());

    // 8:
    console.log(tree.levelOrder());
    console.log(tree.preOrder());
    console.log(tree.postOrder());
    console.log(tree.inOrder());

};
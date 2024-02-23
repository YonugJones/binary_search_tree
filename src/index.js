import Tree from "./bst";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const tree = new Tree(array);


// tree.insert(100);
// tree.insert(1000);
// tree.insert(2);
// tree.insert(10);
// tree.insert(10000);
// tree.insert(325);
prettyPrint(tree.root);

// tree.delete(10000);
// prettyPrint(tree.root);



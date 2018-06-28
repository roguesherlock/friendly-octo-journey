/**
 * Binary Tree Traversals
 * @author akash
 * @description Binary Tree Traversals Methods
 */

/**
 *
 *
 * @class BinaryTreeNode
 */
class BinaryTreeNode {
    /**
     *
     * @param {*} value value
     * @param {BinaryTreeNode} left left node
     * @param {BinaryTreeNode} right right node
     */
    constructor(value, left, right) {
        this.value = value || undefined;
        this.left = left || null;
        this.right = right || null;
    }
}

/**
 *
 * inOrderTraversal
 * @param {BinaryTreeNode} root
 * @description In Order Traversal for a binary tree.
 * visits left nodes, root and then right nodes
 * most common of other traversal methods
 */
function inOrderTraversal(root) {
    if (root != null) {
        inOrderTraversal(root.left);
        visit(root);
        inOrderTraversal(root.right);
    }
}

/**
 *
 * preOrderTraversal
 * @param {BinaryTreeNode} root
 * @description Post Order Traversal for a binary tree.
 * visits root, left nodes and then right nodes
 */
function preOrderTraversal(root) {
    if (root != null) {
        visit(root);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
}

/**
 *
 * postOrderTraversal
 * @param {BinaryTreeNode} root
 * @description Post Order Traversal for a binary tree.
 * visits left nodes, right nodes and then root
 */
function postOrderTraversal(root) {
    if (root != null) {
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        visit(root);
    }
}

/**
 *
 *
 * @param {BinaryTreeNode} node
 * @description visits the given node
 */
function visit(node) {
    console.log(node.value);
}

/* Binary Tree */
let binaryTree = `
----------------------------------
            (D)
          /     \\
        (B)     (F)
       /   \\    /  \\
     (A)  (C) (E)  (G)
`;

/* level 2 */
let A = new BinaryTreeNode('A');
let C = new BinaryTreeNode('C');
let E = new BinaryTreeNode('E');
let G = new BinaryTreeNode('G');

/* level 1 */
let B = new BinaryTreeNode('B', A, C);
let F = new BinaryTreeNode('F', E, G);

/* level 0 */
let D = new BinaryTreeNode('D', B, F);

console.log(binaryTree);
console.log('In order traversal');
inOrderTraversal(D);
console.log('\n');

console.log(binaryTree);
console.log('Pre order traversal');

preOrderTraversal(D);
console.log('\n');

console.log(binaryTree);
console.log('Post order traversal');
postOrderTraversal(D);
console.log('\n');

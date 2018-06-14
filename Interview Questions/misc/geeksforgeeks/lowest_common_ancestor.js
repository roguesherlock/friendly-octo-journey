/**
 * Given a Binary Tree and 2 nodes value n1 and n2, your task is to
 * find the lowest common ancestor of the two nodes. You are required
 * to complete the function LCA. You should not read any input from
 * stdin/console.There are multiple test cases. For each test case,
 * this method will be called individually.
 *
 * Input:
 * The task is to complete the method LCA which takes 3 arguments,
 * root of the Tree and two nodes value  n1 and n2. The struct node
 * has a data part which stores the data, pointer to left child and
 * pointer to right child.
 * There are multiple test cases. For each test case, this method
 * will be called individually.
 *
 * Output:
 * The function should return the node which is the least common
 * ancestor of the two nodes n1 and n2 .
 *
 * Constraints:
 * 1 <=T<= 30
 * 1 <=Number of nodes<= 100
 * 1 <=Data of a node<= 1000
 *
 * Example:
 *
 * Input
 * 1
 * 2
 * 1 2 L 1 3 R
 * 2 3
 *
 * Output
 * 1
 *
 * In above example there is one  test case which represent a tree
 * with 3 nodes and 2 edges where root is 1, left child of 1 is 2
 * and right child of 1 is 3.
 */

let Node = function(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
};


let lca = function(root, n1, n2) {
    if (root == null || n1 == null || n2 == null) {
        return;
    }

    
};

let A = new Node(1);
let B = new Node(2);
let C = new Node(4);
let D = new Node(5);
let E = new Node(3);
let F = new Node(6);
let G = new Node(7);

A.left = B;
A.right = E;

B.left = C;
B.right = D;

E.left = F;
E.right = G;

console.log(lca(A, D, F));


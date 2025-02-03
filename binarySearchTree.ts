class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

const rightTwo = new TreeNode(4, null, null);
const leftOne = new TreeNode(1, null, null);
const rightOne = new TreeNode(3, null, rightTwo);
const root = new TreeNode(2, leftOne, rightOne);

function binarySearchTree(root: TreeNode | null, target: number) {
  if (root === null) {
    return false;
  }

  if (target > root.value) {
    return binarySearchTree(root.right, target);
  } else if (target < root.value) {
    return binarySearchTree(root.left, target);
  } else return true;
}

console.log(binarySearchTree(root, 3));
console.log(binarySearchTree(root, 190));

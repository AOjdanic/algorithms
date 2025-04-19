// class TreeNode {
//   value: number;
//   left: TreeNode | undefined;
//   right: TreeNode | undefined;
//   constructor(
//     val: number,
//     left: TreeNode | undefined,
//     right: TreeNode | undefined,
//   ) {
//     this.value = val;
//     this.left = left;
//     this.right = right;
//   }
// }

const sixNode = new TreeNode(6, undefined, undefined);
const fourNode2 = new TreeNode(4, undefined, sixNode);

function insert(root: TreeNode | undefined, val: number) {
  if (!root) return new TreeNode(val, undefined, undefined);

  if (val > root.value) {
    root.right = insert(root.right, val);
  } else if (val < root.value) {
    root.left = insert(root.left, val);
  }

  return root;
}

console.log(insert(fourNode2, 5));

function findMinValueNode(root: TreeNode | undefined) {
  let currentMinimumNode = root;

  while (currentMinimumNode?.left) {
    currentMinimumNode = currentMinimumNode.left;
  }

  return currentMinimumNode;
}

console.log(findMinValueNode(fourNode2));

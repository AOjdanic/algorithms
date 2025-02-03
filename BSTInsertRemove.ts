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

const sixNode = new TreeNode(6, null, null);
const fourNode = new TreeNode(4, null, sixNode);

function insert(root, val) {
  if (!root) return new TreeNode(val, null, null);

  if (val > root.value) {
    root.right = insert(root.right, val);
  } else if (val < root.value) {
    root.left = insert(root.left, val);
  }

  return root;
}

console.log(insert(fourNode, 5));

function findMinValueNode(root: TreeNode | null) {
  let currentMinimumNode = root;

  while (currentMinimumNode?.left) {
    currentMinimumNode = currentMinimumNode.left;
  }

  return currentMinimumNode;
}

console.log(findMinValueNode(fourNode));

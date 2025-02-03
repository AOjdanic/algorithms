class TreeNode {
  value: number;
  left: TreeNode | undefined;
  right: TreeNode | undefined;
  constructor(
    val: number,
    left: TreeNode | undefined,
    right: TreeNode | undefined,
  ) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  root: TreeNode;

  constructor(rootValue: number) {
    this.root = new TreeNode(rootValue, undefined, undefined);
  }

  insert(val: number) {
    return this.insertNode(val, this.root);
  }

  remove(val: number) {
    return this.removeNode(val, this.root);
  }

  minimum() {
    return this.findMinNode(this.root);
  }

  print() {
    return this.printNodes(this.root);
  }

  bst() {
    return this.bstImp(this.root);
  }

  bstImp(root: TreeNode) {
    const queue: TreeNode[] = [];

    queue.push(root);

    let level = 0;
    while (queue.length) {
      console.log("level", level);
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const node: TreeNode = queue.shift();
        console.log(node.value);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      level++;
    }
  }

  private insertNode(val: number, root: TreeNode | undefined) {
    if (!root) return new TreeNode(val, undefined, undefined);

    if (val > root.value) {
      root.right = this.insertNode(val, root.right);
    } else if (val < root.value) {
      root.left = this.insertNode(val, root.left);
    }

    return root;
  }

  private removeNode(val: number, root: TreeNode | undefined) {
    if (!root) return undefined;

    if (val > root.value) {
      root.right = this.removeNode(val, root.right);
    } else if (val < root?.value) {
      root.left = this.removeNode(val, root.left);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        const minNode = this.findMinNode(root.right);
        root.value = minNode.value;
        root.right = this.removeNode(minNode.value, root.right);
      }
    }

    return root;
  }

  private findMinNode(root: TreeNode) {
    let currentMinimumNode = root;

    while (currentMinimumNode.left) {
      currentMinimumNode = currentMinimumNode.left;
    }

    return currentMinimumNode;
  }

  private printNodes(root: TreeNode | undefined) {
    if (!root) return;

    this.printNodes(root.left);
    console.log(root.value);
    this.printNodes(root.right);
  }
}

const tree = new BST(4);

tree.insert(0);
tree.insert(1);
tree.insert(7);
tree.insert(2);
tree.insert(0);

tree.bst();

console.dir(tree, { depth: Infinity });

const sevenNode = new TreeNode(7, undefined, undefined);
const zeroNode = new TreeNode(0, undefined, sevenNode);
const twoNode = new TreeNode(2, undefined, undefined);
const secondZeroNode = new TreeNode(0, undefined, undefined);
const oneNode = new TreeNode(1, twoNode, secondZeroNode);
const fourNode = new TreeNode(4, zeroNode, oneNode);

function canReachLeaf(root) {
  if (!root || root.value === 0) return false;

  if (!root.left || !root.right) return true;
  if (canReachLeaf(root.left)) return true;
  if (canReachLeaf(root.right)) return true;

  return false;
}

console.log("canReachLeaf", canReachLeaf(fourNode));

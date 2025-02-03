type ListNode = {
  val: number;
  next: ListNode | null;
};

function reverseList(head: ListNode | null): ListNode | null {
  let previousNode: ListNode | null = null;
  let currentNode = head;

  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}

function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let newHead: ListNode | null = head;

  if (head.next) {
    newHead = reverseListRecursive(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
}

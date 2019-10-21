//create a bst
function BST(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

//search for the left most node
//two pointers:
//the "fast" pointer for bst.left.left
//the "slow" pointer for bst
//Logic: When the fast pointer has reached a place where its left ===null, the slow pointer should be pointing t0 the second smalledst node
BST.prototype.secondMinNode = bst => {
  let fast = bst.left.left;
  let slow = bst;
  //iterate until we've reached the left most node determined by the fast pointer
  while (fast !== null) {
    //return the slow pointer's left val when the fast pointer has reached it's base case
    if (fast.left === null) return slow.left.val;
    //while not equal to null incremeent the pointer by node
    fast = fast.left;
    slow = slow.left;
  }
  return -1;
};

//bst test case
const bst = new BST(5);
bst.left = new BST(3);
bst.left.left = new BST(2);
bst.left.left.left = new BST(1);

bst.left.right = new BST(4);

bst.right = new BST(7);
bst.right.right = new BST(9);

console.log(bst.secondMinNode(bst));

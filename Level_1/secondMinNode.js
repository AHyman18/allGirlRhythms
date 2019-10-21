//Create a bst
function BST(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

//Strategy: 
//Recusrively search for the left most node
//Initialize two pointers: a "fast" pointer for bst.left.left and a  "slow" pointer for the current iteration of the bst tree

//Logic: 
//When the fast pointer has reached a place where its left property === null, the slow pointer should be pointing to the second smallest node

BST.prototype.secondMinNode = bst => {
  let fast = bst.left.left;
  let slow = bst;
  //Iterate until the left most node, determined by the fast pointer, is null
  while (fast !== null) {
    //Return the slow pointer's left.val when the fast pointer has reached it's base case
    if (fast.left === null) return slow.left.val;
    //While the fast pointer is not equal to null, incremeent each pointer by a single node to the left
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

console.log(bst.secondMinNode(bst)); //3

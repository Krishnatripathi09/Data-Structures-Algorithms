function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};


// Creating a new Node and Adding it as head;
let newNode = new Node(val)

newNode.next = this.head;
this.head = newNode;
this.size++;

// To add a Node at the Tail:

function addToTail(val){
    let newNode = new Node(val)
    if(this.head==null){
        this.head = newNode;
    } else{
    let curr = this.head;
while(curr.next!=null){
    curr =curr.next;
}

}
}
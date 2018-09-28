// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null

    }

    insert(data){
        
        //which node will it go to, left or right
        if(data<this.data){
        //is left node empty?   
            if(!this.left){
                this.left= new Node(data);
            }else{
                this.left.insert(data);
            }
       }else if(data>this.data){
           if(!this.right){
               this.right= new Node(data);
           }else(this.right.insert(data))
       }
    }

    contains(data){
        if(this.data ===data){
            return this;
        }
        
        if(data<this.data){
            if(!this.left){
                return null;
            }

            if(data === this.left.data){
                return this.left;
            }else{
                return this.left.contains(data);
            }
        }else if(data>this.data){
            if(!this.right){
                return null;
            }

            if(data === this.right.data){
                return this.right;
            }else{
                return this.right.contains(data);
            }
        }
    }
}

module.exports = Node;

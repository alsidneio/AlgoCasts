// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data=data;
        this.children=[];
    }
    add(data){
        let node = new Node(data);
        this.children.push(node);
    }

    remove(data){
         this.children = this.children.filter((node)=>{
            return  node.data!==data;
         })
    }

}

class Tree {
    constructor(){
        this.root=null;
    }

    traverseBF(fn){
        const holder = [this.root];
        while(holder.length){
            const node =holder.shift(); //store deleted element in the node element 
            
            holder.push(...node.children);// then add all of those elements to the holder array, this is key becuase it keeps us in the while loop
            fn(node) //lastly peform the fn on the node value
        }

    }

    traverseDF(fn){
        const holder = [this.root];
        while(holder.length){
            const node =holder.shift(); //store deleted element in the node element 
            
            holder.unshift(...node.children);// then add all of those elements to the holder array, this is key becuase it keeps us in the while loop
            fn(node) //lastly peform the fn on the node value
        }
    }
}

module.exports = { Tree, Node };

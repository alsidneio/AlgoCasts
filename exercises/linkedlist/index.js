// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null){
        this.data=data
        this.next=next
    }


}

class LinkedList {
    constructor(){
        this.head= null
    }

    insertFirst(data){
            let newHead = new Node(data,this.head)
            this.head=newHead
    }
    
    size(){
        let count=1
        let current=this.head
        if(current==null){
            return 0
        }else{
            while(current.next!=null){
                current=current.next
                count++
            }
        }
        return count  
    }

    getFirst(){
        return this.head
    }

    getLast(){
        let current = this.head 
        while(current.next!=null){
            current=current.next
        }
        return current 
    }

    clear(){
        this.head=null
    }

    removeFirst(){
        this.head=this.head.next
    }

    removeLast(){
       if(!this.head){
           return
       }

       if (!this.head.next){
           this.head = null
           return
       }

       let previous = this.head 
       let node =this.head.next
       while(node.next){
           previous= node 
           node = node.next
       }
       previous.next = null
        
    }

    insertLast(data){
        let node = new Node(data)
        let current = this.head
        if(!this.head){
           this.head = node 
        }else{

            while(current.next){
                current= current.next 
            }

            current.next= node
        }
    }

    getAt(idx){
        let currIdx = 0
        let currNode=this.head
        if(currNode==null){
            return null
        }
         while(currIdx<idx){
             currNode=currNode.next
             currIdx++
         }
        return currNode
    }

    removeAt(idx){
        if(!this.head){
            return null
        }
        if(idx===0){
            this.head=this.head.next
            return
        }

        const previousNode = this.getAt(idx-1)
        if(!previousNode || !previousNode.next){
            return 
        }
        previousNode.next= previousNode.next.next
    }

    insertAt(data,idx){
        // Checking the condition  for when there are no nodes present 
        if(!this.head){
            this.head= new Node(data)
            return;
        }

        if(idx===0){
            this.head=new Node(data,this.head)
            return
        }

        const previous = this.getAt(idx-1) || this.getLast() 
        const node = new Node(data, previous.next)
        previous.next=node


    }
}

module.exports = { Node, LinkedList };

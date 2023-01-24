class node {
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
class binarySearchTree {
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            console.log("value is not present");
        }else{
            if(root.value === value){
               console.log("value is present");
            }else if (value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)

        }
    }
    inOrder(root){
        
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
       
    }
    postOrder(root){
        
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
        }
       
    }
    min(root){
        if(!root.left){
            console.log(root.value);
        }else{
            this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            console.log(root.value);
        }else{
            this.min(root.right)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value ){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }if(!root.left){
                return root.right
            }else if (!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return rooT
        
    }
}
const bst = new binarySearchTree 
    console.log("tree empty?"+bst.isEmpty());
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)

    // bst.search(bst.root,7)
    // // bst.preOrder(bst.root)
    // // bst.inOrder(bst.root)
    // bst.postOrder(bst.root)
    // bst.min(bst.root)
    // bst.max(bst.root)
    bst.preOrder(bst.root)
    console.log("hey");
    bst.delete(10)
    bst.preOrder(bst.root)


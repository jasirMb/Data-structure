class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null 
    }
}
class binarytree {
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root.value === null){
            this.root = newNode
        }else{
            this.insertNewNode(this.root,value)
        }
    }
    insertNewNode(root,value){
        if(value < root.value){
            if(root.left === null){
                root.left = value
            }else{
                this.insertNewNode(root.left,value)
            }
        }
        if(value > root.value){
            if(root.right === null){
                root.left === value
            }else{
                this.insertNewNode(root.right,value)
            }
        }
    }
}
const bt = new binarytree

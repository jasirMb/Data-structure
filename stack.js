class Stack {
    constructor ()  {
        this.Item = [];
        this.Count = 0;

    }
    push(items) {
        this.Item[this.Count] = items;
        this.Count +=1 ;
        return items
    }
    display(){
        console.log(this.Item[1]);
       let str = " "
        for ( let i=0 ; i<this.Count;i++){
            str += this.Item[i]+" "
            console.log(i); 
        }
        return str
    }
    pop(){
        this.Count -= 1
        stack.display();
    }
}


const stack = new Stack()

console.log(stack.push(12));
console.log(stack.push(34));
console.log(stack.push(884));
console.log(stack.display());
console.log(stack.pop());


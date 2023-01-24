// class hash {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
        
//     }

//     hash(key){
//         let total = 0 
//         for (let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//          return total % this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         // this.table[index] = value
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//          }else {
//             let sameKey = bucket.find(item => item[0]===key)
//             if(sameKey){
//                 sameKey[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//          }
//         console.log(value+" is added at index "+index);
//     }
     
//     get(key){
//         const index = this.hash(key)
//             console.log(this.table[index]);
         
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table.splice(index,1)
//     }
//     show(){
//         for (let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }
//     const table = new hash(50) 
//     table.set("name","jasi")
//     table.show()
//     table.set("mane","ram")
    
//     // table.get("age")
//     // table.remove("age")
//     table.show()
//     // table.get("name")




















    //////////////////////////////////////////////////new workout///////////////////////////////////////////
    class hash {
        constructor(size){
            this.table = new Array(size)
        }
        hash(key){
            let total = 0 
            for(let i = 0; i<key.length; i++){
                total = key.charCodeAt(i)
            }
            return total%this.size
        }
        set(key,value){ 
            const index = this.hash(key)
            this.table[index] = value
        } 
        get(key){
            const index = this.hash(key)
            return this.table[index]
        }
    }

    const table = new hash(50)
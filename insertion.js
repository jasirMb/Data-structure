// class sort { 

//     bubble(arr){
//         for( let i =0 ;i<arr.length;i++){
          
//             for(let j = 0 ;j<arr.length-i-1;j++){
                
//                 if(arr[j]>arr[j+1]){
//                    let temp = arr[j]
//                    arr[j] = arr[j+1]
//                    arr[j+1] = temp
//                 }
//             }
//         }
//         console.log(arr);
//     }
// }


// const Sort = new sort
//  let arr = [2,4,1,5]
// Sort.bubble(arr);
// Bubble sort Implementation using Javascript


// Creating the bblSort function
// function bblSort(arr){
	
//     for(var i = 0; i < arr.length; i++){
        
//     // Last i elements are already in place
//     for(var j = 0; j < ( arr.length - i -1 ); j++){
        
//         // Checking if the item at present iteration
//         // is greater than the next iteration
//         if(arr[j] > arr[j+1]){
            
//         // If the condition is true then swap them
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j+1] = temp
//         }
//     }
//     }
//     // Print the sorted array
//     console.log(arr);
//     }
    
    
//     // This is our unsorted array
//     var arr = [234, 43, 55, 63, 5, 6, 235, 547];
    
    
//     // Now pass this array to the bblSort() function
//    bblSort(arr);



   function bublee(arr) {
        for( let i =0 ;i<arr.length;i++){
            for(let j = 0 ;j<arr.length-i-1;j++){
                if(arr[j]>arr[j+1]){
                   
                                           let temp = arr[j]
                                           arr[j] = arr[j+1]
                                           arr[j+1] = temp
                                        
                }
            }
        }
        console.log(arr);
    }
    function selection(arr){
         for( let i = 0;i < arr.length-1 ; i++){
            let min = i 
            for ( let j = i+1;j<arr.length;j++){
                if(arr[j]<arr[min]){
                    [arr[j],arr[min]] = [arr[min],arr[j]]
                    // let temp = arr[j]
                    // arr[j] = arr[min]
                    // arr[min]  = temp
                }
            }
         }
         console.log(arr);
    }
    function insert(arr){
        for(i=1 ; i<=arr.length-1;i++){
            let crrnt = arr[i];
            let j =i-1;
            while(j>=0 && arr[j]> crrnt){
                arr[j+1] = arr[j]
                j--;
            }
          arr[j+1] = crrnt;
                
              
            
        }
        console.log(arr);
    }
     let arr = [2,1,32,67,23,5]
    //  bublee(arr);
    // selection(arr);
    insert(arr);
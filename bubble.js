function bubble(arr){
    for (let i = 0; i <arr.length ;i++){
        for( let j = 0;j <arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr);
}
function insertion (arr){
    for (let i = 1 ;i < arr.length;i++){
       let crrnt = arr[i]
       let j = i-1 
       while (j>=0 && arr[j]> crrnt ){
        arr[j+1] = arr[j]
        j--;
       }
       arr[j+1]  = crrnt;
    }
    console.log(arr);
}
function selection(arr){
    for(i=0;i<arr.length-1;i++){
        min = i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                [arr[j],arr[min]] =  [arr[min],arr[j]]
            }
        }
    }
    console.log(arr);
}
let arr =[4,54,2,65,23,1,4]
// bubble(arr)
// insertion(arr)
selection(arr)
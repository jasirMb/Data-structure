function bubble (arr){
    for( let i = 0; i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    console.log(arr);
}
const arr = [3,5,8,45,1]
bubble(arr);
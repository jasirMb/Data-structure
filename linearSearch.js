class binary{



     search(arr ,key,beg,end){
        let mid;
        mid = (beg+end)/2
        if(arr[mid]==key){
            return mid
        }else{
            if(mid<key){
                return search(arr,key,mid,end)
            }else{
                return search(arr,key,beg,mid)
            }
        }
    }
}
const Binary  = new binary
let arr = [3,6,31,111,566,763,]
let key = 57;
let n = arr.length
let result =Binary.search(arr,key,0,n-1);
console.log(result);
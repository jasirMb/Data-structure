// str1 = "jasir mb"
// str2 = "cat"
// console.log(str1);
// console.log(str1.length);
// console.log(str1.slice(1,4));
// console.log(str1.substring(1,3));
// console.log(str1.substr(1,3));
// console.log(str1.replace("mb","Mb"));
// console.log(str1.toUpperCase());
// console.log(str1.concat(" ",str2));
// console.log(str1.charAt(1));
// console.log(str1.split(""));
// let string ="kokko"
// let hell="lplplp"
// hi=true
// for (let i = 0; i < hell.length; i++) {
//     if(hi){
//         string= string+" "
//     }else{
//         string= string+i
//     }
//     hi=false
// }
// console.log(string);
// let string ="kokko"
// let string1=""
// console.log(string);
// for (let i = 0; i < string.length; i++) {
//     if(i===2){
//         string1+= "r"
//     }else{

//         string1+= string[i]
//     }}
// console.log(string1);

// let string="hamras"
// let str1=""
// for (let i = string.length-1; i >=0 ; i--) {
//     str1+= string[i]
// }
// console.log(str1);
// let str1 = "jasir"
// let str = ""
// for (let i = str1.length-1;i >=0 ; i--){
//     str += str1[i]
// }


// console.log(str);


// let string="hamras"
// a =string.charCodeAt(0)
// console.log(a);
// console.log(String.fromCharCode(a));



// let string="malayalamo"
// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const value = checkPalindrome(string);
// console.log(value);


//  let str = "malayalame"
//  function check(str){
//     let len = str.length
//     for(let i = 0;i<len/2;i++){
//         if(str[i] !== str[len-1-i]){
//             return "not"
//         }
       
//     }
//     return "yes"
//  }
//  console.log(check(str));
 


//  let str = "ammas"
//  function check(str,key){
//     // let revstr = ""
    
//     console.log(key);
//    let str1=str.split("")
//     console.log(str1);
//     for(let i = 0; i < str1.length ; i++){
//         console.log(str1[i]);
//         if(str1[i]==key){
//             for(let j = i ;j<str1.length;j++){
//                 str1[j] = str1[j+1]
//             }
//         }
//     }
//     console.log(str1);
// }

    
//  console.log(check(str,"a"));
 



let str = "ammas"
function check(str,key){
   // let revstr = ""
   
   console.log(key);
  let str1=str.split("")
   console.log(str1);
   for(let i = 0; i < str1.length ; i++){
       console.log(str1[i]);
       if(str1[i]==key){
           for(let j = i ;j<str1.length;j++){
               str1[j] = str1[j+1]
           }
       }
   }
   console.log(str1);
}

   
console.log(check(str,"a"));
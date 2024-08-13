const arr= ["Shivam","Future","ganga"];
let index=0;


function changeContent(){
 
   index = (index + 1) % arr.length;  
   let a=arr[index];
      document.querySelector("span").innerHTML=`${a}`;
}
setInterval(changeContent, 2000);

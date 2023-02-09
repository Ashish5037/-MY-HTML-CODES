// IIFE

//   let a=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(433)
//         },4000)
//     })
//   }
//   (async ()=>{
//     let b=await a()
//     console.log(b);
//     let c=await a()
//     console.log(c);
//     let d=await a();
//     console.log(d);
//   })()

// Destructuring


//let arr=[3,4,2,5,4,9,0]
//let arr=num[]

// let {a,b, }={a:1,b:33}
// console.log(a,b);


// Spread Operator 

// const arr=[1,3,4]
// const obj=[...arr]
// console.log(obj);

// function sum (v1,v2,v3){
//     return v1+v2+v3;
// }
// console.log(sum(...arr));


// let obj1={
//     name:"ashish",
//     company:"akbpvtlt",
//     address:"xyz"o 

// }
// console.log({...obj1,name:"akash",company:"ndjed"});


// Arrow function revisited


//  const sayHello=(name,greeting) => console.log( greeting + name)
//  sayHello("harry"," Good Eveneing ")

// PASSWORD GENERATOR 

// class Password{
//     constructor(){
//         console.log(" Welcome to paasword generator ");
//         this.pass=""
//     }
//     generatePassword(len){
//         let chars="abcdegfghijklmnopqrstuvwxyz"
//         let numbers="1234567890"
//         let special="!@$%^&*()"
//         if(len<3){ 
//             console.log(" your password should be 3 characters long ");
//         }
//         else{
//             let i=0
//             while(i<len){
//                 this.pass+=chars[Math.floor( Math.random() * chars.length)]
//                 this.pass+=numbers[Math.floor(Math.random() * numbers.length)]
//                 this.pass+=special[Math.floor(Math.random() * special.length)]
//               i += 3
//             }
//            //    this.pass= this.pass.substr(0,len)
//             return this.pass
//         }
//     }
// }
// let p=new Password()
// console.log(p.generatePassword(7));
 

var password = document.getElementById("password");
const generatepass = () => {
  let char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordlength = 12;
  let password = ""
  for (let i = 0; i <= passwordlength; i++) {
    let randompassword = Math.floor(Math.random() * char.length)
    password += char.substring(randompassword, randompassword + 1)
  }
  document.getElementById("password").value = password
}

const copy = () => {
var copyText=document.getElementById("password")
  copyText.select()
  navigator.clipboard.writeText(copyText.value);
}
import { multi } from "./calc";

console.log(multi(5,5))

import  "./index.css"


import pic from "./logo.png"
let pic1=document.createElement("img")
pic1.src=pic
pic1.id="pic"

// import mylogo from "./logo.png"

let div=document.querySelector("#div")
let div1= document.querySelector("#div1")
let div2=document.querySelector("#div2")

let btn=document.createElement("button")
btn.textContent="submit"
let text=document.createElement("textarea")
text.placeholder="write a note"
 
div1.append(btn)
div2.append(text)
div.append(pic1)

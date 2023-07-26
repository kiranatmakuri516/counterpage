
let count=0
let initial=document.getElementById("counter")
function increment(){
count+=1
initial.innerHTML=count

}
let saveEl=document.getElementById("save")
function save(){
    saveEl.innerHTML+=count+"-"
    initial.textContent=0
    count=0




}
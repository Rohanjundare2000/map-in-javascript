let Rohan =new Map([
    [1, "rohan"],
    [2,"revati"],
    [3,"jundare"]
])
console.log(Rohan)
//get
let q4 = Rohan.get(3)
console.log(q4)
//set
let q3 = Rohan.set(4,"customer")
console.log(q3)
//has ===element is their are not
let q1 = Rohan.has(4)
console.log(q1)
// foreach
Rohan.forEach(function(v,k){
   console.log(k,v)
})
Rohan.forEach(function(v,k){
    console.log(k,v)
})
//for ====key 
for(let k of Rohan.keys()){
    console.log(k)
}
//values
for(let v of Rohan.values())
{
    console.log(v)
}
for(let[k,v] of Rohan.entries())
{
    console.log(k,v)
}
let e=Rohan.delete(4)
Rohan.delete(2)
Rohan.clear()
console.log(Rohan)
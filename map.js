/// array 
let firstName = "rohan"
let RJ= ["rohan", "revati", "jundare"]
//object
// object is used when u store a keys is in string 
let names = {
    firstName : "rohan",
    lastName :"jundare",
    rollno:"2"
}
let names2 ={
    1: "eoha", 
    2: "jabva"
}
console.log(names2)
// map
// map is used when u stored the key in the form of the number
let mapA = new Map()
let mapB = new Map([
    [1,"rohan"],
    [2,"revati"],
    [3,"jundare"]
])
console.log(mapB)

let Rohan= new Map([
    [1, "rohan"],
    [2,"Jundare"],
    [3,"pulser"]
])
console.log(Rohan)
//map is store a any type of data 
// method used on the map
//size
let q1 = Rohan.size
console.log(q1)
//set()
let q2= Rohan.set(4,"customer")
console.log(Rohan)
//get()= first value 
let q3 = Rohan.get(1)
console.log(q3)
//has() it return the value in the boolean
let q4 = Rohan.has(3)
console.log(q4)
let q5= Rohan.has(33)
console.log(q5)
// clear()
let q6= Rohan.delete(2)
console.log(q6)
console.log(Rohan)
// whenu print all the map element then used the for loop ya foreach loop
Rohan.forEach(function(v,k){
    console.log(k,v)
})
// key only print
for (let key of Rohan.keys())
{
    console.log(key)
}
for(let val of Rohan.values()){
    console.log(val)
}
for(let[k,v] of Rohan.entries ()){
    console.log(k,v)
}
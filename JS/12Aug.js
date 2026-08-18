let nums=[1,2,3,4]
let result=nums.filter((ele)=>{
    return ele%2===0
})
console.log(result)

let result2=nums.reduce((acc,curVal)=>{
    return acc+curVal
})
console.log(result2)

let result3=nums.reduce((acc,curVal)=>{
    return acc*curVal
})
console.log(result3)

let movies=["OG","Toxic","Odessy","Ramayan","titanic","pushpa","KGF","Vaazha"]
const [movie1,movie2,movie3,...movie]=movies
console.log(movie)
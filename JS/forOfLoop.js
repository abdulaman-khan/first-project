let movie=["Pushpa","KGF","Titanic","OG","DDLJ","Vaazha"]
for (let i = 0; i < movie.length; i++) {
    //console.log(movie[i])
}

// for-of

for(let i of movie){
   //console.log(i)
}

let personalDetails={
    stdName : "Aman",
    age : 22,
    Mobile_No : 9691364557,
    addres : "Gwalior Madhya Pradesh",
    isActive : true,
    status : "Single",
    gender : "Male",
    dob : "12-08-2004",
    Qualification : "B.tech",
}



// for in

for(let i in personalDetails){
    console.log(i," : ",personalDetails[i])
}
const promise  = new Promise( (resolve, reject ) =>{
    setTimeout(()=>{
    // resolve({
    //     name:Aditya,
    //     age:24
    // })
    reject('Something went wrong')
    },1500)
    
});

console.log('before')


promise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

console.log('after')

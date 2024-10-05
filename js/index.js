function asynFunction()
{
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            console.log('UserName Matched nice');
            resolve('pass');
        },4000)
    });
}

let promise = asynFunction();

// promise.then( (resolve)=>{
//     console.log(resolve)
// })



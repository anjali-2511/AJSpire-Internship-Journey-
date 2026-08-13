let mypromise = new Promise(function (resolve,reject) {
   let success = true;
    if (success) {
        resolve("operation successful")
    } else {
        reject("Operation failed");
    }
});

// 3. Using .then() and .catch()

mypromise
.then(function(result){
     console.log(result);
}).catch(function(error) {
    console.log(error);
});
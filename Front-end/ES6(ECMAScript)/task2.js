let mypromise = new Promise(function (resolve,reject) {
   let success = true;
    if (success) {
        resolve("operation successful")
    } else {
        reject("Operation failed");
    }
});

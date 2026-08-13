let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Data loaded");
    }, 2000);
});
promise.then(function(data){
    console.log(data);
});

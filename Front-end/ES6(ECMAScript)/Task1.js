const JSpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise is working")
    }, 2000)
});

JSpromise.then(value => {console.log(value)});
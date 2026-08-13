// Symbols:

const gfg = {
    name: "istepup",
    desc: "it training institute"
}
let short_name = Symbol("short_name");
gfg.short_name = "ISP";
console.log(`${gfg.name}, \n${gfg.desc}`);
console.log(`Company short name using gfg.short_name: ${gfg.short_name}`)
console.log(`Company short name using gfg[short_name]: ${gfg[short_name]}`)

// Promises: 
// It has three states.
// 1. pending - initial state
// 2. resolved(fulfilled) - operation successful
// 3. rejected - operation failed


// async - makes a function return a promise 
// await - waits for the promise to resolve 

// Why Used?
// 1. clean and readable code.
// 2. used in API calls, fetch , database ,etc.


 
        function Sum(...input){
            let sum = 0;
            for (let i of input){
                sum += i;
            }
            return sum;
                
            }
        

        console.log("Sum is : ", Sum(1,2,3,4,5));

        let arr = [1,2,3,-1,5];
        console.log(...arr);
        console.log(Math.max(...arr));


        const Arr = [5,55,33,2,1,8];
        for (let element of Arr){
            console.log(element);
        }

        const college = {
            name: "Krish",
            Age: "23",
            isPvt: false
        };
        let {name,Age ,isPvt} = college;
        console.log(name,Age,isPvt);

        const array = ["lion1", "lion2", "lion3"];
        let[arr0 , arr1,arr2] = array;
        console.log(arr0,arr1,arr2);


        const mymap = new Map([["Krish",23],["age","23"]]);
        mymap.set(false, 0);
        mymap.set(1, true);
        console.log(mymap.get("Krish"),mymap.get('age'),"isPvt" ,myMap.has(false), "isPvt", mymap.size, typeof (true)
        )
            
        
 
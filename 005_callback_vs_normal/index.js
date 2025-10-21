let name ="Abhinay"

const obj = {
    name:"Sujeet",
    arrowGreet: () =>{
        console.log(`Arrow: Hello, ${name}`);
    },
    normalGreet: function (){
        console.log(`Normal: Hello, ${this.name}`);
    }
}

obj.arrowGreet();
obj.normalGreet();

// O/P - 
// Arrow: Hello, Abhinay
// Normal: Hello, Sujeet
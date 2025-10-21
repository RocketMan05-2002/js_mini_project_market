class User{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name(newName){
        if(newName){
            return this._name = newName.trim();
        }
    }
}

const user = new User("Abhi");
console.log(user.name); //getter
user.name = "    Abhinay Shambharkar" // setter
console.log(user.name);
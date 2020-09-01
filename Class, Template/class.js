class Vehicle{

    constructor(){
        console.log("Vehicle registeration process initiated...."); 
    }

    register(name){
        console.log("Vehicle registered with name "+ name);
    }
}

class Car extends Vehicle{
    type="Car";
    constructor(){
        super();
    }

    getType(){
        console.log("This is a " + this.type);
    }
}

let veh = new Car();
veh.register("Yash");
veh.getType();
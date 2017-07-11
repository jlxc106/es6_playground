class Greet{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        return `Hello ${this.name}`;
    }

    sayGoodbye(){
        return `I'll never let go ${this.name}`;
    }
}

class BetterGreeting extends Greet{
    constructor(name, lastname){
        super(name);
        this.lastname = lastname;
    }

    alertHello(){
        alert(`What up, ${this.name} ${this.lastname}`);
    }

    sayhello(){
        return super.sayHello() + ` ${this.lastname}`
    }
}





const heather = new Greet('Heather');
const bob = new BetterGreeting('Bob', 'Bobby');


console.log(heather.sayHello());
console.log(heather.sayGoodbye());


bob.alertHello();
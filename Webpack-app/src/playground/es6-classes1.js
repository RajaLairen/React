class Person{
    constructor(name='anonymous',age=0){
       this.name=name;
       this.age=age;
    }
    gretting(){
        return `Hi I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
};

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }

    hasmajor(){
        return !!this.major;
    }

    getDescription(){
        let description=super.getDescription();

        if(this.hasmajor()){
            description+=` Their major is ${this.major}.`;
        }
        return description;
    }
};

class Traveller extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation=homelocation;
    }

    hasHomeLocation(){
        return !!this.homelocation;
    }

    gretting(){
        let gretting=super.gretting();
        if(this.hasHomeLocation()){
            gretting+=` I'm visiting from ${this.homelocation}`;
        }
        return gretting;
    }
};

const me=new Traveller("Raja Lairenmayum",20,"Manipur");
console.log(me.gretting());
const you=new Traveller();
console.log(you.gretting());
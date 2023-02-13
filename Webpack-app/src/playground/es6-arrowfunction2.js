// const Add=(a,b)=> {
//     return a+b;
// }

// console.log(Add(5,15));

// const user={
//     name:"Raja Lairenmayum",
//     place:["Manipur","India","New York"],
//     getPlace: function(){
//         return this.place.map((item)=>this.name+" live in "+item);
//     }
// }
// const newarray=user.getPlace();
// console.log(newarray);

const multiplier={
    number:[1,2,3,4,5,6],
    multiplyby:2,
    multiply(){
        return this.number.map((number)=>number*this.multiplyby);
    }
}

console.log(multiplier.multiply());
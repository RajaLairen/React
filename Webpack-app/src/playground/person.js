const isAdult=(age)=>age>=18;
//export const isAdult=(age)=>age>=18;But it did not work with default  export default inlin is work on class

const canDrink=(age)=>age>=21;

//const subtact=(x,y)=>x-y;

//There is two type of export one in default and other is name export

export {isAdult,canDrink};//Name export
export default (x,y)=>x-y;
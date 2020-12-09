// function Old(name,yearOfBirth){
//   this.name = name;
//   this.YOB = yearOfBirth
//   this.details = () => {
//     return `Name: ${this.name} and Age: ${2020 - this.YOB} `
//   }
// }
// class New {
//   constructor(name,yearOfBirth){
//     this.name = name;
//     this.YOB = yearOfBirth
//   }
//   details = () => {
//     return `Name: ${this.name} and Age: ${2020 - this.YOB} `
//   }
// }

// let me = new New("haseeb",2003);
// let me2 = new Old("muneeb",2002)
// console.log(me)
// console.log(me.details())
// console.log(me2)
// console.log(me2.details())

// class NewClass {
//   constructor(name, price, space, transfer, pages, discountMonths) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;
//   }
// }
// NewClass.prototype.currenMonthDisc =  function () {
//   let total = this.price * 12
//   // console.log(this.price);
//   let current = new Date
//   let month = current.getMonth()
//   // console.log(month);
//   for (let i in this.discountMonths) {
//     console.log(this.discountMonths[i]);
//     if (this.discountMonths[i] === month) {
//       total = `Your total is $${total}/year but due to this month you get 20% off so your total is $${total * .8}`
//       return total
//     }
//   }
//   return `Your total is $${total}/year`
// }
// const p1 = new NewClass("Basic",3.99,100,1000,10,[8,9,11])
// console.log(p1.currenMonthDisc());
// console.log(p1);
// class Pilot {
//   constructor(type,experience,license){
//     this.type = type,
//     this.experience = experience,
//     this.license = license
//   }
//   getData = () => {
//     return `Name: ${this.name} and Age: ${2020 - this.YOB} Type: ${this.type} , Experience: ${this.experience} and License: ${this.license}`
//   }
// }
// class Person extends Pilot {
//   constructor(type,exp,lice,name,yearOfBirth){
//     super(type,exp,lice);
//     this.name = name;
//     this.YOB = yearOfBirth;
//   }
//   details = () => {
//     return `Name: ${this.name} and Age: ${2020 - this.YOB} `
//   }
// }
// let me = new Person("private jets",5,"PK2003","Haseeb",1989);
// console.log(me);
// console.log(me.getData());
// let myFriend = new Person("commercial",15,"PK1989","Saleem",1970)
// console.log(myFriend.getData());
// let me2 = new Person("Public airplane",10,"PI9878")


class Car {
  constructor(model,engine,color,year) {
    this.model = model 
    this.engine = engine 
    this.color = color 
    this.year = () => {
      return (2021 - 1 )
    }
  }
  // change(){
  //   this.color = "blue"
  // }
  // myYear = year;
  carColor() {
    this.color = "blue"
    return `Owner of car: ${this.name}, Name of car: ${this.model} and Color of car: ${this.color}`
  }
  static value = "this is static value"
  static staticfunc = () => {
    return "This is static Func"
  }
}

class Person extends Car {
  constructor(name,yearOfBirth,model,engine,color,year){
    super(model,engine,color,year);
    this.name = name;
    this.YOB = yearOfBirth;

  }
  details = () => {
    return `Name: ${this.name} and Age: ${2020 - this.YOB},`
  }

}
const firstOwner = new Person ("haseeb",2003,"Civic","Manual","black",2019)
console.log(firstOwner);
// console.log(firstOwner.carColor());
// console.log(Car.value);
// console.log(Car.staticfunc());
console.log(firstOwner.carColor());
console.log(firstOwner.year());

class Last extends Person{
  constructor(name,yearOfBirth,model,engine,color,year,checking){
    super(name,yearOfBirth,model,engine,color,year);
    this.checking = checking;
}
}

let trying = new Last ("haseeb",2003,"Civic","Manual","black",2019,"passed")
console.log("trying ", trying );


// firstOwner.change()

// how props works in class component

// class practice{
//   constructor(props) {
//     this.props = {
//       Name: props.name,
//       friend1: props.friend1,
//       friend2: props.friend2
//      } 
//   }
//   access() {
//     console.log(this.props.friend2);
//   }
// }
// let makingObj = new practice({name: 'haseeeb', friend1: 'subhan',friend2:'moiz'})
// makingObj.access()

// {destructuring array's}

// let [loggingName,name] = [function name(name='John Cena'){console.log(name); return name},'haseeb']
// console.log(loggingName());

// console.log(arr21[1]('haseeb'));

let timer = () => console.log('hello')

// console.log(timer);
let names = ["mango","haseeb","banana","mango","pineapple","lion","haseeb","foooooooooooooooooooooood"]
console.log(typeof(names));

let setting = new Set(names)
console.log(typeof setting, setting);

// setting.delete("haseeb")
// console.log(setting);

setting.add("haseeb")
console.log(setting);


let myObj = {
  name: "haseeb",
  age: 17,
  qualification: "matric"
}

let set2 = new Set("fooooooooooooooooooooooooooooooooooooooooood")
console.log(set2);
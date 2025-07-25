/*
class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`My name is  ${this.name}`);
    }
}

class Model extends Person{
    constructor(name,model){
        super(name);
        this.model = model;
    }

    show(){
        return this.greet() + 'it is a ' + this.model
    }
}
*/

class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
      console.log(this.present() + ', it is a ' + this.model)
    }
  }
  
  const mycar = new Model("Ford", "Mustang");
  mycar.show();

/*
const john = new Person('Anusha')
john.greet()
*/

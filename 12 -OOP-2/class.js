class ClassicGuitar {
    #id;
    constructor(manufactureYear, brand, price, numberOfString = 6, used = false, id){
        this._manufactureYear = manufactureYear;
        this._brand = brand;
        this._price = price;
        this._numberOfString = numberOfString;
        this._used = used;
        this.#id = id;
    }
    play() {
        this._used = true;
        this._price *= (9/10);
        return "🎶🎶🎶";
    }
    getPrice(){
        return this._price;
    }
    setPrice(newPrice){
        this._price = newPrice;
    }
    getManufactureYear(){
        return this._manufactureYear;
    }
    getBrand(){
        return this._brand;
    } 
    static detectSound(sound) {
        switch(sound) {
            case "🎸":
                return "ElectricGuitar";
            case "🔊":
                return "BassGuitar";
        }
    }
}

class ElectricGuitar extends ClassicGuitar {
    constructor(manufactureYear, brand, price, numberOfString = 6, used = false, id, longNeck) {
      super(manufactureYear, brand, price, numberOfString, used = false, id);
        this._longNeck = longNeck;
    }
    play() {
        return "🎸🎸🎸";
    }
  }

class BassGuitar extends ClassicGuitar {
    constructor(manufactureYear, brand, price, numberOfString = 4, used = false, id) {
        super(manufactureYear, brand, price, numberOfString, used = false, id)
    }
    playSolo(){
        let arr = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
        let start = Math.floor((Math.random() * 6));
        let result = "";
        for(let i = start; i< arr.length; i++){
            result += arr[i] + " ";
        }
        return result;
    }
    play(){
        return "🔊🔊🔊";
    }
}

class Person {
    #id;
    constructor(firstName, sureName, salary, age, id) {
        this._firstName = firstName;
        this._sureName = sureName;
        this._salary = salary;
        this._age = age;
        this.#id = id;
    }
    get getFullName() {
        return `${this._firstName} ${this._sureName}`;
    }
    get getSalary() {
        return this._salary;
    }
    get getAge() {
        return this._age;
    }

    set setSalary(newSalary) {
        this._salary = newSalary;
    }
    set setAge(newAge) {
        this._age = newAge;
    }
}

class Player extends Person {
    constructor(firstName, sureName, salary, age, id, strongLeg, position, celebrationSentence) {
        super(firstName, sureName, salary, age, id);
        this._strongLeg = strongLeg;
        this._position = position;
        this._celebrationSentence = celebrationSentence;
    }
    goalCelebration(){
        console.log(this._celebrationSentence);
        this._salary *= 1.025;
    }
    get getStrongLeg(){
        return this._strongLeg;
    }
    get getPositon() {
        return this._position;
    }
    set setPosition(newPosition) {
        this._position = newPosition;
    }
    set setCelebrationSentence(newSent) {
        this._celebrationSentence = newSent;
    }
}   

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
class GoalKeeper extends Person {
    constructor(firstName, sureName, salary, age, id, isLeftHanded,
         lastGoalConceded = String(new Date().getDate()).padStart(2, '0') + "//" + String(new Date.getMonth() + 1).padStart(2, '0') + "//" + new Date().getFullYear()) {
        super(firstName, sureName, salary, age, id)
        this._isLeftHanded = isLeftHanded;
        this._lastGoalConceded = lastGoalConceded;
    }
    concededAGoal(){
        this._lastGoalConceded = String(new Date().getDate()).padStart(2, '0') + "//" + String(new Date.getMonth() + 1).padStart(2, '0') + "//" + new Date().getFullYear();
        this._salary *= 0.975;
    }
    get getLastGoalConceded() {
        return this._lastGoalConceded
    }
    get getIsLeftHanded() {
        return this._isLeftHanded;
    }
}

const ere = new Player("fs", "fsss", 4, 3, 1, "right", "wow", "yey");
console.log(ere.getStrongLeg);
// let isDone: boolean = false;
// let float: number = 3.14;
// let color: string = 'blue';
// let empty: null = null;
// let noParam: undefined = undefined;

// let num = 10;
// let str = 'some string';
// let bool = true;
// let empty = null;
// let noParams = undefined;

// type User = {
//     name: string,
//     age: number,
// };

// const userJohn: User = {
// name: 'John',
// age: 30,
// };

// const userTom: User = {
//     name: 'Tom',
//     age: 35,
// };

// console.log(userJohn, userTom)

// let arrString: string[] = ['1', '2', 3]

// interface User {
//     name: string,
//     age: number,
// };

// const userJohn: User = {
//     name: 'Tom',
//     age: 30,
// };

// let arrNumber: number[] = [1,2,2,4,'3']

// let matrix:number[][] = [[1,2], [1,2]]
// console.log(matrix);

// let arrMixed: (number | string) [];
// arrMixed = [1,2,3,'4','5'];

// let arrNumber: Array<number>;
// arrNumber = [1,2,3,'4']

// type User = {
//     name: string,
//     age: number,
// };

// let users: User[] = [
//     {name: 'Alice', age: 18},
//     {name: 'Tom', age: 28},
//     {name: 'Matt', age: 38},
// ]

// let arrAny: any[] = [1, '1', null, undefined]

// let notSure: any = 10;
// notSure = '10';
// console.log(notSure);
// notSure = true;
// console.log(notSure);
// notSure = null;
// console.log(notSure);
// notSure = undefined;
// console.log(notSure);

// const num: number = 25;
// console.log(num);
// // num = notSure;
// console.log(num)

// function fetchUserData() {
//   return "Tom";
// };

// let userData: unknown = fetchUserData();
// if (typeof userData === "string") {
//   console.log(userData.toUpperCase());
// };

// let tuple: [string, boolean] = ['12', true]

// let date: [number, number, number] = [12, 23, 223432423]

// let fixed: [number, string] = [12, '12'];
// console.log(fixed);
// fixed.push('fignia');
// console.log(fixed)

// let tuple: [string, ...number[]];
// tuple = ['12', 1,12,1212,121212,12212121,12121212]

// enum Role {
//     ADMIN,
//     USER,
// };

// let person: {role: Role, name: string} = {role: Role.ADMIN, name: 'Yura'};

// if(person.role === Role.ADMIN) {
//   console.log('Role:', Role.ADMIN)
// }

// enum UserStatus {
//     Active =  'ACTIVE',
//     Inactive  = 'INACTIVE',
//     Banned = 'BANNED',
// };

// let statuse: UserStatus = UserStatus.Active;
// console.log(statuse)

// enum HttpCodes {
//     Ok = 200,
//     BadRequest = 400,
//     Unauthorized = 401,
// };

// function respond(status:HttpCodes) {
//     console.log(status);
// };
// respond(HttpCodes.Ok);
// const statuse = HttpCodes.Ok

//  enum Test {
//     A = 1,
//     B = 2,
// };

// for( let item in  Test) {
//     console.log(item)
// }

// let mixedType: number | string | boolean;
// mixedType = 10;
// mixedType = '10';
// mixedType = true;

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   }
//   return param1.toString() + param2.toString();
// };

// const result = combine("hello", 5)
// console.log(result)

// type Dog = {
//     legs: 4;
//     bark: () => void;
//   };

//   type Fish = {
//     fins: 2;
//     swim: () => void;
//   };

//   let pet: Dog | Fish;

//   function isDog(pet: Dog | Fish): pet is Dog {
//     return 'bark' in pet;
//   }

//   if (isDog(pet)) {
//     pet.bark();
//   } else {
//     pet.swim();
//   };

//   export {};

// type Employee = {
//   name: string;
//   id: number;
// };

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

// let ceo: CEO = {
//   name: "Alice",
//   id: 1,
//   employees: [{ name: "Bob", id: 2 }],
// };

// console.log(ceo)

// type OneorTwo = 1 | 2;
// type YesOrNo = 'yes' | 'no';
// let three: OneorTwo = 1

// type ButtonSize = "small" | "medium" | "large";
// function getButtonStyle(size: ButtonSize) {
//   switch (size) {
//     case "small":
//       return { fontSize: 10, padding: 5 };
//     case "medium":
//       return { fontSize: 14, padding: 10 };
//     case "large":
//       return { fontSize: 18, padding: 15 };

//     default:
//       return { fontSize: 14, padding: 10 };
//   }
// }
// const greet = (message: string): string => {
//   return message;
// }

// let result = greet('Hello');

// type User = {
//     id: number,
//     name: string,
// };

// const users: User[] = [
//     {id: 1, name: 'Alice'},
//     {id: 2, name: 'Bob'},
//     {id: 3, name: 'Charlie'},
// ];

// const getUserName = (users: User[]):string[] => {
//     return users.map(item=>item.name)
// };
// console.log(getUserName(users))

// const greet = () => 'hello world';
// let result:string = greet();
// console.log(typeof result);

// const logMessage = (message: string): void => {
//   console.log(message);
// };
// logMessage('hello World');

// const doSomething = (callback:()=>void):void => {
//     callback();
// };
// doSomething(():void =>console.log('Callback Function'));

// const throwError = (message: string): never => {
//   throw new Error(message);
// };
// throwError('I am an error');

// const infiniteLoop = ():never => {
//     while(true) {console.log("object")}
// };

// infiniteLoop()

// let neverVar: never = 10

// let myfunc: (firstArg: string, secondArg: number) => void;
// myfunc = (firstArg: string, secondArg: number) => {
//   console.log(firstArg, secondArg);
// };

// // myfunc("hello", 34);

// type CallbackType = (...nums: number[]) => number;

// function calc(num1: number, num2: number, callback: CallbackType): void {
//   return console.log(callback(num1, num2));
// }

//  calc(5, 5, (a, b)=> a + b);
//  calc(10, 5, (a, b)=> a - b);
//  calc(10, 5, (a, b)=> a * b);

// type User = {
//   id: number;
//   name: string;
// };
// const user: User = {
//   id: 1,
//   name: "Alice",
// };

// type Coordinate = [number, number];
// type UserWithCoords = {
//   id: number;
//   name: string;
//   coords: Coordinate;
// };
// const userAlice: UserWithCoords = {
//   id: 1,
//   name: "Alice",
//   coords: [10, 20],
// };

// enum AnimalIds {
//   cat = "cat",
//   dog = "dog",
//   fish = "fish",
// }

// type Animals = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     barck: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   };
// };

// let cat: Animals[AnimalIds.cat] = {
//     meow: ()=>'I am a cat'
// };

// let dog: Animals[AnimalIds.dog] = {
//     barck: ()=> 'I am a dog'
// };

// let fish: Animals[AnimalIds.fish] = {
//     swim: ()=> undefined
// };

// console.log(cat.meow());
// console.log(dog.barck());
// console.log(fish.swim());

// function greet(name?: string): void {
//   if (name) console.log(`Hello! ${name}`);
//   else {console.log("Hello")};
// };

// greet();
// greet("Yura")

// type Person = {
//   name: string;
//   age?: number;
// };

// const bob: Person = {
//   name: "Bob",
//   age: 25,
// };

// const alice: Person = {
//   name: "Alice",
// };

// console.log(bob, alice);

// type Animal = {
//     name: string
// };

// type AnimalName =  {
//   name: string;
// }

// type Animal =  {
//   age: number;
// }

// type Dog =  Animal & AnimalName;

// type Cat = {
//   meow: string;
// };

// type Dog = {
//   barck: string;
// }

// type CatOrDog = Cat | Dog;
// type CatAndDog = Cat & Dog;

// interface Animal {
// name: string,
// };

// interface Dog extends Animal {
//     barck: string,
// };

// class MyDog implements  Dog {
// name = "Eva";
// barck = "Woof"
// };

// type Walkable = {
//   walk(): void;
// };

// type Eatable = {
//   eat(): void;
// };

// class Animal implements Walkable, Eatable {
//   walk() {
//     console.log("Animal walks");
//   }
//   eat() {
//     console.log("Animal eats");
//   }
// }

// const animal = new Animal;
// console.log(animal);

// interface myFunc {
//     (num1: number, num2: number):number;
// };

// const addFunc:myFunc = (a, b) => {
//     return a+b
// }

// enum WeekDay {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Satterday,
//     Sunday,
//   };

//   function isWeekend(day:WeekDay):boolean {
//     return WeekDay[day].startsWith('S');
//   };

//   isWeekend(WeekDay.Friday);

// function getPromise (): Promise<(number | string)[]> {
//     return new Promise((resolve) => {
//       resolve(['Text', 50, 100,111]);
//     });
//   }

//   getPromise()
//   .then((data) => {
//     console.log(data);
//   });

// function merge<T extends object, U extends object> (objA: T, objB: U) {
//     return Object.assign(objA, objB);
//   }

// class Student {
//     constructor(public name: string, public age: number, public grade: string) {
//       this.name = name;
//       this.age = age;
//       this.grade = grade;
//     }
//   }

// const student = new Student("yura", 40, "jun");
// console.log(student)

// class Employee {
//   // Заповніть модифікатори доступу
//   public name: string;
//   private department: string;
//   protected salary: number;

//   constructor(name: string, department: string, salary: number) {
//     this.name = name;
//     this.department = department;
//     this.salary = salary;
//   }

//   getEmployeeDetails() {
//     return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
//   }
// }

// class Manager extends Employee {
//   // Реалізуйте конструктор та збільшіть salary на 10000
//   constructor(name: string, department: string, salary: number) {
//     super(name, department, salary);
//     this.salary = salary + 10000;
//   }
// }
// const manager = new Manager("yura", "front", 400);

// console.log(manager.getEmployeeDetails());

// class Key {
//   private signature: number = Math.random();

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(private key: Key) {}
//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House {
//   public door: boolean = false;
//   public tenants: Person[] = [];
//   constructor(public key: Key) {
//   }

//   comeIn(person: Person): void {
//     if (this.door) this.tenants.push(person);
//     console.log("person is in");
//   }
//   abstract openDoor(key: Key): void;
// }

// class MyHouse extends House {
//   openDoor(key: Key): void {
//     if (key.getSignature() === this.key.getSignature()) this.door = true;
//     console.log("door is open");
//   }
// }

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);
// house.openDoor(person.getKey());
// house.comeIn(person);

/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

// class Employee {
//   // Заповніть модифікатори доступу

//   constructor(
//     public name: string,
//     private department: string,
//     protected salary: number
//   ) {}

//   getEmployeeDetails() {
//     return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
//   }
// }

// class Manager extends Employee {
//   // Реалізуйте конструктор та збільшіть salary на 10000
//   constructor(name: string, department: string, salary: number) {
//     super(name, department, salary + 10000);
//   }
// }

// const manager = new Manager("yura", "sales", 1000);
// console.log(manager.getEmployeeDetails());

// export {};

// class Student {
//   constructor(public name: string, public age: number, public grade: string) {}
// };

// console.log(new Student('yura', 39, 'master' ))

// type ComplexType = number | string;

// function combine(a: ComplexType, b: ComplexType): ComplexType {
//   if (typeof a === "string" || typeof b === "string") return a.toString() + b.toString();
//   return a + b;
// }

// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }

// type AdminOrEmployee = Admin | Employee;

// function printDetails(data: AdminOrEmployee): void {
//   if ("privileges" in data) console.log(`Privileges: ${data.privileges}`);
//   if ("startDate" in data) console.log(`StartDate: ${data.startDate}`);
// };

// const yura: Employee = {
//   name: 'yura',
//   startDate: new Date,
// };
// printDetails(yura);

// class Car {
//   drive(): void {
//     console.log("Driving a CAR ...");
//   }
// }

// class Truck {
//   drive(): void {
//     console.log("Driving a TRUCK ...");
//   }
//   loadCargo(value: number): void {
//     console.log(`Loading cargo ${value}`);
//   }
// }

// type Vehicle = Car | Truck;

// const carInstance = new Car();
// const truckInstance = new Truck();

// function useVehicle(vehicle: Vehicle): void {
//   vehicle.drive();
//   if (vehicle instanceof Truck) vehicle.loadCargo(1000);
// }

// useVehicle(carInstance);
// useVehicle(truckInstance);

// ----------------------------------

// type Dog = {
//   bark: () => void;
// };

// type Cat = {
//   meaw: () => void;
// };

// function isDog(animal: Cat | Dog): animal is Dog {
//   return "bark" in animal;
// }
// function letAnimalTalk(animal: Cat | Dog) {
//   if (isDog(animal)) {
//     animal.bark();
//   } else {
//     animal.meaw();
//   }
// }

// const dog: Dog = {
//   bark: () => console.log("I am a big cross Dog!"),
// };

// const cat: Cat = {
//   meaw: () => console.log("I am a foxy CAT"),
// };

// letAnimalTalk(dog);

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Staff = Admin | Employee;

// function isEmployee(staff: Staff): staff is Employee {
//   return (staff as Employee).startDate !== undefined;
// }

// const staffMember : Staff = {name: 'Bob', startDate: new Date};

// if (isEmployee(staffMember)) console.log(`Welcome on board ${staffMember.name}! Your time is ${staffMember.startDate}`)

// -------------------------------------------------

// let someValue: unknown = 'this is a string';
// let strLength1: string = someValue as string;
// let strLength2: number = (<string>someValue).length;

// -------------------------------------------------
// const input = document.getElementById('inputEmail');
// if(input) {(input as HTMLInputElement).value = 'test@gmail.com'}

// ------------------------------------------------------------------

// type IndexType = {
//   [prop: string]: string;
// };

// type Person = {
//   name: string;
//   [keyName: string]: string;
// };

// const User: Person = {
//   name: "Bob",
//   gender: "man",
//   country: "Ukraine",
// };

// -------------------------------------------------------------------

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// type Users = {
//   [id: string]: User;
// };

// const users: Users = {};

// const user: User = {
//   id: "1",
//   name: "yura",
//   email: "yura@test",
// };

// users[user.id] = user;
// console.log(users["1"]);

// ----------------------------------------------------

// function combine(a: number, b: number): number;
// function combine(a: string, b: number): string;
// function combine(a: number, b: string): string;
// function combine(a: string, b: string): string;
// function combine(a: any, b: any) {
//   if (typeof a === "number" && typeof b === "number") return a + b;
//   else if (typeof a === "string" && typeof b === "number")
//     return a + b.toString();
//   else if (typeof a === "number" && typeof b === "string")
//     return a.toString() + b;
//   else {
//     typeof a === "string" && typeof b === "string";
//   }
//   return a + b;
// };

// console.log(combine(1,2));
// console.log(combine("1", "2"));
// console.log(combine('1', 2));

// ------------------------------------------------------------

// function concatinate(strs: string[]): string;
// function concatinate(strs: string[], separator: string): string;
// function concatinate(strs: any, separator?: any): any {
//   if (separator) return strs.join(separator);
//   return strs.join("");
// }

// const names = ["Alice", "Bob", "Taylor"];
// console.log(concatinate(names, '&&&&&&&&'));

// ------------------------------------------------------------

// type AdminType = {
//   type: "admin";
//   name: string;
//   privileges: string[];
// };

// type UserType = {
//   type: "user";
//   name: string;
//   registrationDate: Date;
// };

// function checkUser(user: AdminType | UserType): AdminType | UserType {
//   return user.type === "admin" ? (user as AdminType) : (user as UserType);
// }

// const me: UserType = {
//   type: "user",
//   name: "yura",
//   registrationDate: new Date(),
// };

// console.log(checkUser(me));

// -----------------------------------------------------------------

// type User = {
//   name: string,
//   age: number
// };

// const user: User = {name: 'Bob', age: 12};

// type size =  'small' | 'medium' | 'large';

// const bigButtonSize: size = 'large';

// function makeStringFromNumbers (num1: number, num2: number):void {
//   console.log(num1, num2)
// };

// type User = {
//   name: string;
//   age: number;
//   gender: string;
// };

// function greet(user: User): void {
//   console.log("Hello ", user.name);
// }

// greet({ name: "yurs", age: 12, gender: "male" });

// -------------------------------------------------------------------------

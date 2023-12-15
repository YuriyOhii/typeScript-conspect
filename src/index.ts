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

// type User = {
//   name: string,
//   age: number,
//   hobbies: string[],
// };

// function userConstructor(name: string, age: number, hobbies: string[]): User {
//   return {name: name, age: age, hobbies: hobbies}
// };

// const newUser: User = userConstructor ('yura',39,['codding']);
// console.log(newUser);

// ---------------------------------------------------------------------------

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => void;
// };

// const car: Car = {
//   color: "red",
//   price: 1000,
//   currency: "uah",
//   start: (color) => console.log(color),
// };
// car.start("white");

// type Shop = {
//   [key: string]:number;
// }

// const fruits: Shop = {
//   apples: 10,
//   bananas: 20,
//   pears: 15,
// };

// const goods: Shop = {
//   hammers: 3,
//   nails: 30,
// };

// console.log(goods);
// --------------------------------------------------------------------------------------

// type MixedT = {
//   [key: string]: number | string;
// };

// const lift: MixedT = {
//   speed: 1,
//   address: "haskjhakh",
//   type: 'passenger',
// };

// console.log(lift);
// -------------------------------------------------------------------
// const identity = <T>(arg1: T): T =>{
//   return arg1;
// };
// console.log(identity(10))
// -------------------------------------------------------------------
// const reverse = <T>(arr: T[]): T[] => {
//   return arr.reverse();
// };

// console.log(reverse([1,2,3,4,5]));
// console.log(reverse(['a', 'b', 'c']));
// -------------------------------------------------------------------
// const lengthOfSmthing = <T extends ({length: any})> (arg: T):number => {
//   return arg.length
// };

// console.log(lengthOfSmthing({adf: 123, length: 10}))
// -------------------------------------------------------------------
// const getProperty = <T, K extends keyof T>(
//   obj: T,
//   key: K
// ): T[K] => {
//   return obj[key];
// };

// const user : {
//   name: string,
//   age: number,
// } = {
//   name: 'yura',
//   age: 10,
// };

// console.log(getProperty(25, 'toString'))
// --------------------------------------------------------------------
// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };

// const updateTodo = (task: Todo, update: Partial<Todo>): Todo => {
//   return { ...task, ...update };
// };

// const anyTask: Todo = {
//   title: "some Title",
//   description: "some description",
//   completed: false,
// };

// const updating: Partial<Todo>  = {completed: true} ;
// console.log(anyTask);
// console.log(updateTodo(anyTask, updating))
// ---------------------------------------------------------------------

// type User = {
//   name: string,
//   age: number,
//   changeName: Function,
// };

// const john: User = {
//   name: "John",
//   age: 20,
//   changeName(newName: string) {
//     this.name = newName
//   }
// };

// console.log(john);
// john.changeName('Bill');
// console.log(john);
// ---------------------------------------------------------------------
// type Person = {
//   name: string,
//   age: number,
//   address: string,
// };

// type PersonSummary = Pick<Person, 'name'| 'age'>;

// type WithoutAddress = Omit<Person, 'address'>
// const john: PersonSummary = {
//   name: "John",
//   age: 10,
// };

// const bill: WithoutAddress = {
//   name:"Bill",
//   age: 20,
// }
// -----------------------------------------------------------------------
// type CityDataBase = Record<string,number>;

// const dataBase: CityDataBase = {
//   Kyev: 2884,
//   Kharkiv: 1440,
//   Odessa: 1015,
// };
// --------------------------------------------------------------------
// function getPromise(): Promise<(string | number)[]> {
//   return new Promise<(string | number)[]>((resolve) => {
//     resolve(["hello", 55]);
//   });
// };

// getPromise().then(console.log);
// --------------------------------------------------------------------
// type User = {
//   name: string;
//   age: number;
//   country: string;
// };

// type UpdatedInfo = Partial<User>;

// const updateUser = (user: User, data: UpdatedInfo): User => {
//   return { ...user, ...data };
// };

// const yura: User = {
//   name: "Yura",
//   age: 10,
//   country: "Ua",
// };

// console.log(yura);

// const update: UpdatedInfo = {
//   country: "fin",
// };

// console.log(updateUser(yura, update));
// -----------------------------------------------------
// interface Configuration {
//   theme: "light" | "dark";
//   lang: "en" | "ua";
//   size: [number, number];
// }

// const defaultConfig: Configuration = {
//   theme: "light",
//   lang: "ua",
//   size: [700, 300],
// };

// const changeConfig = (config: Partial<Configuration>): Configuration => {
//   return { ...defaultConfig, ...config };
// };

// console.log(changeConfig({lang: 'en', size: [1000, 1000000000]}))
// ----------------------------------------------------------------------
// function noChange(numbers: ReadonlyArray<number>): number[] {
//   return Array.from(numbers);
// }
// -------------------------------------------------------
// type Config = {
//   port: number,
//   name: string,
//   thema: "dark" | 'light',
// }

// const config: Readonly<Config>= {
//   port: 8000,
//   name: "thema",
//   thema: "dark",
// };

// config.port = 1000
// --------------------------------------------------------------
// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// function getNameAndEmail(user: User): Pick<User, "email" | "name"> {
//   return {
//     name: user.name,
//     email: user.email,
//   };
// }

// interface APIresponse {
//   id: string;
//   title: string;
//   content: string;
//   createdAt: Date;
// }

// function getWhatIsNeeded({
//   title,
//   content,
// }: APIresponse): Pick<APIresponse, "content" | "title"> {
//   return { title, content };
// }
// --------------------------------------------------------------------
// const namesWithAge: Record<string, number> = {
//   John: 12,
//   Bill: 34,
//   Sam: 32,
// };

// const monthDaysCount: Record<string, number> = {
//   Jan: 31,
//   Feb: 29,
//   Mar: 31,
//   Apr: 30,
//   May: 31,
//   Jun: 30,
//   Jul: 31,
//   Aug: 31,
//   Sep: 30,
//   Oct: 31,
//   Nov: 30,
//   Dec: 31,
// };
// ---------------------------------------------------------------------
// interface User {
//   name: string;
//   password: string;
//   email: string;
// }

// type UserWithoutPassword = Omit<User, "password">;

// const user: UserWithoutPassword = {
//   name: "John",
//   email: "john@gmail.com",
// };

// interface APIresponse {
//   id: string;
//   title: string;
//   content: string;
//   createdAt: Date;
// }

// type ResponseWithOut = Omit<APIresponse, 'createdAt'>
// -----------------------------------------------------------------------
// interface Menu {
//   title: string,
//   price: number,
//   category: 'snack' | 'main' | 'desert',
// };

// function filterByCategories (menu: Menu[], category: Pick<Menu, 'category'>): Menu[] {
//   return menu.filter(el=>{
//     console.log(el.category);
//     console.log(category.category)
//     return el.category === category.category})
// };

// const frickMenu: Menu[] = [
//   {title: 'asdf',
//   price: 240,
//   category: 'desert',
//   },
//   {title: 'qwe',
//   price: 240,
//   category: 'main',
//   },{title: 'aqz',
//   price: 240,
//   category: 'desert',
//   },{title: 'zxc',
//   price: 240,
//   category: 'main',
//   },{title: 'cvb',
//   price: 240,
//   category: 'main',
//   },{title: 'dgdfg',
//   price: 240,
//   category: 'main',
//   },{title: 'reterte',
//   price: 240,
//   category: 'main',
//   },{title: 'gfhghf',
//   price: 240,
//   category: 'main',
//   },
// ];

// console.log(filterByCategories(frickMenu, {category: 'main'}))
// -------------------------------------------------------------
// interface User {
//   name: string;
//   email: string;
//   birthDate: string;
// }

// function isUserAdult(user: User): boolean {
//   const date = Date.now();
//   const birthDate = new Date(user.birthDate);
//   const adultDate: number = birthDate.setFullYear(birthDate.getFullYear() + 18);
//   return date > adultDate;
// }
// const user: User = {
//   name: "Yura",
//   email: "as",
//   birthDate: "2005 12 15",
// };

// console.log(isUserAdult(user));
// --------------------------------------------------------------------
// interface CarProperty {
//   brand: string;
//   year: number;
//   fuelType: string;
// }

// class Car implements CarProperty {
//   constructor(
//     public brand: string,
//     public year: number,
//     public fuelType: string
//   ) {}
//   getDetails(): void {
//     console.log(`${this.brand} ${this.year} ${this.fuelType}`);
//   }
// };
// const car: Car = new Car('dacia', 2015, 'disel');
// car.getDetails()
// --------------------------------------------------------------
// interface StudentData {
//   name: string;
//   studentId: string;
//   major: boolean;
// }

// class Student implements StudentData {
//   constructor(
//     public name: string,
//     public studentId: string,
//     public major: boolean
//   ) {}
//   introduce():void {
//     console.log(`My name is ${this.name}, my studentId is ${this.studentId} and major is ${this.major}`)
//   }
// };

// const student : Student = new Student('yura', "dssfaiuu3246", true);
// student.introduce();

// type MixedType = Array<number | string>;

// const arr: MixedType = [1,2,3,'3',3,'hjfskjfkjsh']
// -----------------------------------------------------------------------
// const promise: Promise<string> = new Promise((res, rej) => {
//   setInterval(() => {
//     res('i am a string');
//   }, 3000);
// });

// promise.then(response=> console.log(response)).catch(error => console.log(error));
// ----------------------------------------------------------
// function identity<T>(arg: T): T {
//   return arg;
// };

// let output = identity(5);
// console.log(output);
// let output1 = identity("string");
// console.log(output1)
// -----------------------------------------------------
// function getTheFirstEl<T>(arrIn: T[]): T {
//   return arrIn[0];
// }

// const firstNumber = getTheFirstEl([1, 2, 3, 4, 5]);
// const firstLetter = getTheFirstEl(["a", "b", "c", "d"]);
// console.log("firstNumber   ", firstNumber, "; ", "first letter  ", firstLetter);
// ----------------------------------------------------------------
// function merge<T extends {}>(arg1: T, arg2: T): T {
//   return Object.assign(arg1, arg2);
// };

// type Person = {
//   name: "yura",
// };

// const yura: Person = {
//   name: "yura",
// }

// type AdditionalVal = {
//   age: number,
// };

// const addVal = {age: 25}
// -----------------------------------------------------------------
// type Length = {
//   length: number,
// };

// const getLength =<T extends Length>(arr: T):number => {
// return arr.length;
// };

// console.log(getLength({length: 23}))
// -----------------------------------------------------------------

// let revenue: number = 1000;
// let bonus: number = 500;
// let c: string = "sdf";
// let d: boolean = true;
// let res: number = revenue + bonus
// console.log(res)

// function getFullName(userEntity: {
//   firstName: string;
//   surName: string;
// }): string {
//   return `${userEntity.firstName} ${userEntity.surName}`;
// }
// const user = {
//   firstName: "Alex",
//   surName: "Ger",
//   city: "Kras",
//   age: 27,
//   skills: {
//     dev: true,
//     devops: true,
//   },
// };
// console.log(getFullName(user));

//* Array ========
// const skills: string[] = ["Dev", "Devops", "Testing"];
// for (const skill of skills) {
//   console.log(skill);
// }
// const res = skills
//   .filter((s: string) => s !== "Devops")
//   .map((s) => s + "! ")
//   .reduce((a, b) => a + b);
// console.log(res);

//* Tuples ========
// const skill: [number, string] = [1, "Dev"];
// const id = skill[0];
// const skillName = skill[1];
// skill.push("sdghs")
// const sdf = skill[2];
// skill.pop()
// const [id, skillName] = skill;
// const arr: [number, string, ...boolean[]] = [1, "dfff", true, true, false];
// const skill: [number, string] = [1, "Dev"];
// const skill: readonly [number, string] = [1, "Dev"];
// skill[0] = 2;
// const skills: Array<string> = ["CSS", "Dev"];
// const skills: ReadonlyArray<string> = ["CSS", "Dev"];
// skills.push("ddd")

//* Enums =======
// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS = "proc",
//   FAILED = 10,
// }
// const res = {
//   message: "Done",
//   statusCode: StatusCode.SUCCESS,
// };
// 1 - успех
// "proc" - в процессе
// 10 - отклонен
// if (res.statusCode === StatusCode.SUCCESS) {
// }

// function action(status: StatusCode) {}
// action(StatusCode.SUCCESS);
// action(1);
// action("proc");

// function compute() {
//   return 3;
// }
// enum Roles {
//   ADMIN = 1,
//   USER = compute(),
// }

// const enum Roles {
//   ADMIN = 1,
//   USER = 2,
// }
// const res2 = Roles.ADMIN;

//* Union ===============
// function logId(id: string | number | boolean) {
//   console.log(id);
// }
// logId(1);
// logId("fsdfs");
// logId(true);

// function logId(id: string | number | boolean) {
//   if (typeof id === "string") {
//     console.log(id.toLowerCase());
//   } else if (typeof id === "number") {
//     console.log(id.toFixed(2));
//   } else {
//     console.log(id);
//   }
// }
// function logError(err: string | string[]) {
//   if (Array.isArray(err)) {
//     console.log(err);
//   } else {
//     console.log(err);
//   }
// }
// function logObj(obj: { a: number } | { b: number }) {
//   if ("a" in obj) {
//     console.log(obj.a);
//   } else {
//     console.log(obj.b);
//   }
// }
// function logMultipleIds(a: string | number, b: string | boolean) {
//   if(a === b) {

//   } else {
//     console.log(a,b)
//   }
// }

//* Literal Types ===============
// function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
//   return 1;
// }
// fetchWithAuth("ss", "get");
// // fetchWithAuth("ss","ffd")
// let method = "post";
// // let method = "3"
// fetchWithAuth("ss", method as "post");

//* Types Aliases  ===============
// type httpMethod = "post" | "get"
// type coolString = string
// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
//   return 1;
// }

// type User = {
//   name: string,
//   age: number,
//   skills: string[]
// }
// type Role = {
//  id: number
// }
// type UserWithRole = User & Role;
// let user: UserWithRole = {
//  name: "asd",
//  age: 33,
//  skills: ["1", "2"],
//  id : 1
// }

//* Interfaces  ===============
// interface User  {
//   name: string;
//   age: number;
//   skills: string[];
//   log: (id:number) => string
// };
// interface Role {
//   roleId: number
// }
// interface UserWithRole extends User,Role  {
//   createdAt: Date;
// }
// // interface UserWithRole extends User  {
// //   roleId: number;
// // }
// type User2 = {
//   name: string;
//   age: number;
//   skills: string[];
//   log: (id:number) => string
// };
// let user: UserWithRole = {
//   name: "asd",
//   age: 33,
//   skills: ["1", "2"],
//   roleId: 1,
//   createdAt: new Date(),

//   log(id) {
//     return ""
//   }
// };
// interface UserDic{
//   [index: number] : User
// }

// type UserDic2 = {
//   [index: number] : User
// }

// type User = {
//   name: string;
// };
// type User ={
//   age: number
// }
// const user: User = {
//   name: "sss",
//   age: 22,
// }

// type ID = string | number;
// interface IDI {
//   ID: string,
// }

//* Optional  ===============
// interface User {
//   login: string;
//   password?: string;
// }
// type User2 = {
//   login: string;
//   password?: string;
// }

// const user: User = {
//   login: "ss@ss.ru",
// };

// function multiply(first: number, second?: number ): number {
//   if(!second) {
//     return first * first
//   }
//   return first * second;
// }
// interface UserPro {
//   login: string;
//   password?: {
//     type: "primary" | "secondary"
//   };
// }
// function testPass(user: UserPro) {
//   const t = user.password?.type
// }
// function test(param?: string) {
//   const t = param ?? multiply(5)
// }

//* Void  ===============
// type voidFunc = () => void;
// const f1: voidFunc = () => {};
// const f2: voidFunc = () => {
//   return true;
// };
// const b = f2();
// const skills = ["Dev", "DevOps"];
// const user = {
//   s: ["s"],
// };
// skills.forEach((skill) => user.s.push(skill));

//* Unknown  ===============
// let input: unknown;
// input = 3;
// input = ["dsd", "sdsd"];

// // let res: string = input;
// function run(i: unknown) {
//   if (typeof i === "number") {
//     i++;
//   } else {
//     i;
//   }
// }
// run(input);

// async function getData() {
//   try {
//     await fetch("");
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   }
// }

// async function getDataForce() {
//   try {
//     await fetch("");
//   } catch (error) {
//     const e = error as Error;
//     console.log(e.message);
//   }
// }

// type U1 = unknown | null;
// type I1 = unknown & string

//* Never  ===============
// function genereateError(message: string): never {
//   throw new Error(message);
// }

// function dumpError(): never {
//   // while (true) {}
// }

// function rec(): never {
//   return rec();
// }

// const a: never = 1;

// type paymentAction = "refund" | "checkout" | "reject";
// function processAction(action: paymentAction) {
//   switch (action) {
//     case "refund":
//       // ...
//       break;
//     case "checkout":
//       //...
//       break;
//     // case "reject":
//     //   //...
//     //   break;
//     default:
//       const _: never = action;
//       throw new Error("Нет такого action");
//   }
// }

// function isString(x: string | number): boolean {
//   if (typeof x === "string") {
//     return true;
//   } else if (typeof x === "number") {
//     return false;
//   }
//   genereateError("sdsdsd");
// }

// function isString2(x: string | number): boolean {
//   if (typeof x === "string") {
//     return true;
//   } else {
//     return false;
//   }
//   genereateError("sdsdsd");
// }

//* Null  ===============
// const n: null = null;
// const n1: any = null;

// const n2: number = null;
// const n3: undefined = null;
// const n4: string = null;
// const n5: boolean = null;

// interface User {
//   name: string
// }

// function getUser() {
//   if(Math.random() > 0.5) {
//     return null;
//   } else {
//     return {
//       name: "Вася"
//     }as User
//   }
// }

// const user = getUser();
// if(user) {
//   const n55 = user.name
// }

//* Type conversion  ===============
// let a = 5;
// let b: string = a.toString();
// let c = "sdsfss";
// // let d: number = +c;
// let d: number = parseInt(c);

// let e = new String(a)
// let f:string = new String(a).valueOf()
// let g:boolean = new Boolean(a).valueOf()

// interface User {
//   name: string,
//   email: string,
//   login: string,

// }

// const user: User = {
//   name: "Vasya",
//   email: "vasiliy@yandex.ru",
//   login: "vasya322"
// }

// interface Admin {
//   name: string,
//   role: number,
// }

// const admin: Admin = {
//   ...user,
//   role: 1
// }

// function userToAdmin(user:User): Admin {
//   return {
//     name: user.name,
//     role:1
//   }
// }

// //* Type Guard  ===============
// interface User {
//   name: string;
//   email: string;
//   login: string;
// }

// const user: User = {
//   name: "Vasya",
//   email: "vasiliy@yandex.ru",
//   login: "vasya322",
// };

// interface Admin {
//   name: string;
//   role: number;
// }

// // function logId(id: string | number) {
// //   if (typeof id === "string") {
// //     console.log(id);
// //   } else {
// //     console.log(id);
// //   }
// // }

// function logId(id: string | number) {
//   if (isString(id)) {
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }

// function isString(x: string | number): x is string {
//   return typeof x === "string";
// }

// function isAdmin(user: User | Admin): user is Admin {
//   return "role" in user;
// }

// function isAdminAlternative(user: User | Admin): user is Admin {
//   return (user as Admin).role !== undefined;
// }

// function setRoleZero(user: User | Admin) {
//   if (isAdmin(user)) {
//     user.role = 0;
//   } else {
//     throw new Error("Пользователь не Админ");
//   }
// }

// Asserts ===============
interface User {
  name: string;
}

const a = {};

assertsUser(a);
a.name = "Alex";

function assertsUser(obj: unknown): asserts obj is User {
  if (typeof obj === "object" && !!obj && "name" in obj) {
    return;
  }
  throw new Error("Не пользователь");
}

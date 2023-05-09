"use strict";
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
function fetchWithAuth(url, method) {
    return 1;
}

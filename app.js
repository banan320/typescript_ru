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

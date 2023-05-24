// let info: {
//   officeId: number;
//   isOpened: boolean;
//   contacts: {
//     phone: string;
//     email: string;
//     address: {
//       city: string;
//     };
//   };
// };

// enum QuestionStatus {
//   Published = "published",
//   Draft = "draft",
//   Deleted = "deleted",
// }

// async function getFaqs(req: {
//   topicId: number;
//   status?: QuestionStatus;
// }): Promise<
//   {
//     question: string;
//     answer: string;
//     tags: string[];
//     likes: number;
//     status: QuestionStatus;
//   }[]
// > {
//   const res = await fetch("/faqs", {
//     method: "POST",
//     body: JSON.stringify(req),
//   });
//   const data = await res.json();
//   return data;
// }

// interface IPayment {
//   sum: number;
//   from: number;
//   to: number;
// }

// enum PaymentStatus {
//   Success = "success",
//   Failed = "failed",
// }

// interface IPaymentRequest extends IPayment {}

// interface IDataSuccess extends IPayment {
//   databaseId: number;
// }
// interface IDataFailed {
//   errorMessage: string;
//   errorCode: number;
// }

// interface IResponseSuccess {
//   status: PaymentStatus.Success;
//   data: IDataSuccess;
// }

// interface IResponseSFailed {
//   status: PaymentStatus.Failed;
//   data: IDataFailed;
// }
// // function get(): IResponseSuccess | IResponseSFailed {}

// type f = (res: IResponseSuccess | IResponseSFailed) => number;

// type Res = IResponseSuccess | IResponseSFailed;

// function isSuccess(res:Res):res is IResponseSuccess {
//   if(res.status === PaymentStatus.Success) {
//     return true
//   }
//   return false
// }

// function getIdFromData(res:Res):number {
//   if(isSuccess(res)) {
//     return res.data.databaseId;
//   } else {
//     throw new Error(res.data.errorMessage)
//   }
// }

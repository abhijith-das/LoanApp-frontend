import { Customer } from "./customer";
import { Officer } from "./officer";

export class Loan {

    loanId:number = 0;
    customerid: number = 0;
    officerid: number = 0;
    loanStatus: string = '';
    loanCategory: string = '';
    dateOfRequest: Date = new Date();
    bgVerification: string = 'Pending';
    loanAmt: number = 0;
    active: boolean = true;

    officer:Officer = new Officer();
    customer:Customer = new Customer();

}

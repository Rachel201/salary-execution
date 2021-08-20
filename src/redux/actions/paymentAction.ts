import { AppDispatch } from "../store";
import { CANCEL_EXECUTED_PAYMENTS, CHOOSE_EMPLYEES, EXECUTE_PAYMENT, PAYMENT_STATUS} from "./actionTypes";
import jsonEmployees from '../../data/MOCK_DATA.json'

export const ExecutePayments=(idEmployee:any,changeStatus:string)=>(dispatch: AppDispatch)=>{
    let objectEmployee=jsonEmployees[idEmployee];
    //@ts-ignore
    objectEmployee['status']=changeStatus
    console.log('idEmployee',idEmployee)
    console.log('objectEmployee',objectEmployee)
    
    dispatch({
        type:EXECUTE_PAYMENT,
        addEmploye:objectEmployee
    })
    // dispatch({type:PAYMENT_STATUS,idEmployee, changeStatus})
}

export const StatusPayment=(idEmployee:any,status:string)=>(dispatch: AppDispatch)=>{
    let objectEmployee=jsonEmployees[idEmployee];
    console.log("objectEmployee:",objectEmployee)
    //@ts-ignore
    objectEmployee['status']=status
    dispatch({type:PAYMENT_STATUS,idEmployee: idEmployee,changeStatus:status,objectEmployee})
}

export const Cancelexecuted=(idEmployee:any)=>(dispatch: AppDispatch)=>{
    dispatch({
       type: CANCEL_EXECUTED_PAYMENTS,
       idEmployee
    })
}

export const chooseEmployee = (employeeMap:any) =>(dispatch:AppDispatch)=>{
    dispatch({type:CHOOSE_EMPLYEES,employeeMap})
}

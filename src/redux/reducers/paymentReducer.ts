import { CANCEL_EXECUTED_PAYMENTS, CHOOSE_EMPLYEES, EXECUTE_PAYMENT, PAYMENT_STATUS } from "../actions/actionTypes"


const initialState={
    executePayments :false,
    paymentStatus:'',
    cancelexecuted:false,
    paymentForEmployeeMap:[],
    countPaymentsSalary:0,
    chooseEmployeeMap:[]
}
 
export default (state =initialState , action:any)=>{
   switch(action.type){
        case EXECUTE_PAYMENT:
          return{
            ...state,
            paymentForEmployeeMap:[...state.paymentForEmployeeMap,action.addEmploye]
          }
        case CANCEL_EXECUTED_PAYMENTS: 
          return{
            ...state,
            paymentForEmployeeMap:state.paymentForEmployeeMap.splice(action.idEmployee)
          }
        case CHOOSE_EMPLYEES:
          return{ 
            ...state,
            chooseEmployeeMap:action.employeeMap
          }
        case PAYMENT_STATUS: 
          
            return{
              ...state,
              paymentForEmployeeMap:
               //@ts-ignore
                {...state.paymentForEmployeeMap[action.idEmployee].status=action.changeStatus}  
            }
        default:
          return{ ...state}  
   }
}


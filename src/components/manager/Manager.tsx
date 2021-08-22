import { Button, Card } from '@material-ui/core';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import DataTable from 'react-data-table-component';
import SortIcon from "@material-ui/icons/ArrowDownward";
import { StatusPayment} from '../../redux/actions/paymentAction';
import { Link } from 'react-router-dom';
import { createFalse } from 'typescript';
import ListEmployees from '../listEmployees/ListEmployees';

const columns = [
    {
      name: "First Name",
      selector: "first_name",
      sortable: true
    },
    {
      name: "Last Name",
      selector: "last_name",
      sortable: true
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      right: true
    },
    {
      name: "Gender",
      selector: "gender",
      sortable: true,
      right: true
    },
    {
      name: "Birthdate",
      selector: "birthdate",
      sortable: true,
      right: true
    },{
      name: "Salary",
      selector: "salary",
      sortable: true,
      right: true
    }
  
  ];
  

const Manager = () =>{
  const dispatch=useDispatch()
   const {paymentForEmployeeMap} = useSelector(({paymentReducer}:any)=>paymentReducer)
   const[toListEmployees,settoListEmployees] = useState(false)
   const handleChange = (employeeSelected:any) => {
      const index = paymentForEmployeeMap.findIndex((paymentForEmployee: { [x: string]: any; })=>paymentForEmployee['id']===employeeSelected.selectedRows[0].id)
      paymentForEmployeeMap[index]['status']='Payment approved'
      console.log("employeeSelected.selectedRows+1 : ",index)
      dispatch(StatusPayment(index,'Payment approved',paymentForEmployeeMap));
   };
    


    const handleListEmployee=()=>{
      settoListEmployees(true)
    }
    return toListEmployees?<ListEmployees/>:(
        <div className="container">
        <Card>
          <DataTable
            title="Salary"
            columns={columns}
            data={paymentForEmployeeMap}
            defaultSortField="title"
            sortIcon={<SortIcon />}
            pagination
            selectableRows
            onSelectedRowsChange={handleChange}
          />
        </Card>
        <Button variant="contained" color="primary" onClick={handleListEmployee}>
           List employees
        </Button>
       </div>
    )
}

export default Manager;



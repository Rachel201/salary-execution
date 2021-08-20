import { Card } from '@material-ui/core';
import React, { useReducer } from 'react';
import { useDispatch, useSelector } from "react-redux"
import DataTable from 'react-data-table-component';
import SortIcon from "@material-ui/icons/ArrowDownward";
import dataEmployes from '../../data/MOCK_DATA.json';
import { StatusPayment} from '../../redux/actions/paymentAction';

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
    
    const handleChange = (employeeSelected:any) => {
            //@ts-ignore
      const index = paymentForEmployeeMap.findIndex(paymentForEmployee=>paymentForEmployee['id']===employeeSelected.selectedRows[0].id)
      console.log("employeeSelected.selectedRows+1 : ",index)
      //@ts-ignore
      dispatch(StatusPayment(index,'Payment approved'));
      console.log('Selected Rows: ',employeeSelected.selectedRows );
    };
    
    return(
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
      </div>
    )
}

export default Manager;
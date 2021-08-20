import React, { useState } from 'react';
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import dataEmployes from "../../data/MOCK_DATA.json"
import './ListEmployees.css'
import CustomizedDialogs from '../../shared/Dialog/Dialog';
import { useDispatch } from 'react-redux';
import { Cancelexecuted, chooseEmployee } from '../../redux/actions/paymentAction';
import { Button } from '@material-ui/core';
import Manager from '../manager/Manager';
import InteractiveList from '../../shared/List';

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


export interface IpaymentEmployee{
    [x: string]: any;
    id: number;
    first_name: string;
    last_name:string;
    salary: string;
}

const  ListEmployees = ()=> {
   const dispatch=useDispatch()
  const [choosEmployee,setChoosEmployee] = useState()
  const [selectEmployee,setSelectEmployee] = useState(false)

  const handleChange = (employeeSelected:any) => {
    setChoosEmployee(employeeSelected.selectedRows) 
    dispatch(chooseEmployee(choosEmployee))
  };

  const handleManagar=()=>{
    setSelectEmployee(true)
  }


  return selectEmployee?
    (
      <Manager/>
    ):
  ( 
    <div className="container">
      <Card>
        <DataTable
          title="Employee"
          columns={columns}
          data={dataEmployes}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
          onSelectedRowsChange={handleChange}
        />
      </Card>
      <CustomizedDialogs deleteDispach={Cancelexecuted} objEmplyees={choosEmployee} />
      <InteractiveList/>
      <Button variant="contained" color="primary" onClick={handleManagar}>
        Manager
      </Button>
    </div>
  );
}

export default ListEmployees;
import React, { useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { IpaymentEmployee } from '../../components/listEmployees/ListEmployees';
import { ExecutePayments } from '../../redux/actions/paymentAction';
import { ListItem } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
interface Iprop{
    objEmplyees:any,
    deleteDispach:any
}



export default function CustomizedDialogs(prop:Iprop) {
  const {objEmplyees,deleteDispach}=prop
  const [open, setOpen] = useState(false);
  const {chooseEmployeeMap} = useSelector(({paymentReducer}:any)=>paymentReducer)
  const [currentEmloyee,setCurrentEmloyee]=useState()
  const dispatch=useDispatch()
  
  console.log("objEmplyees: ",objEmplyees)
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const addPayment  = () => {
    setOpen(false);
    dispatch(ExecutePayments(currentEmloyee,'awaiting approval'))
  };
  const deleteItem=()=>{
    setOpen(false);  
    dispatch(deleteDispach(7))
    //Todo: the dispatch to listpayment

}
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog onClose={addPayment } aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={addPayment }>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
         {chooseEmployeeMap? 
           
           chooseEmployeeMap.map((employeeMap:any)=>{
            return(
              <p>===============
              
              {(employeeMap as any)['id']}
              <br> </br>
              {employeeMap['first_name']}
               <br></br>
              {employeeMap['last_name']}
              </p>
            )
            })
             :<></>}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={addPayment } color="primary">
            add execute payment
          </Button>
          <Button autoFocus onClick={deleteItem} color="primary">
            <DeleteIcon/>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { Cancelexecuted, ExecutePayments } from '../redux/actions/paymentAction';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function CheckboxList() {

const classes = useStyles();
const [checked, setChecked] = React.useState([0]);
// const [delete, setDelete] = React.useState([0]);

const dispatch=useDispatch()
const {chooseEmployeeMap} = useSelector(({paymentReducer}:any)=>paymentReducer)
const {paymentForEmployeeMap} = useSelector(({paymentReducer}:any)=>paymentReducer)


const handleDelete = (index:number)=>{
  const currentIndex = checked.indexOf(index);
  console.log("currentIndex",currentIndex)
  const newChecked = [...checked];
  if (currentIndex === -1) {
    newChecked.push(index);
  } else {
    newChecked.splice(currentIndex, 1);
  }
   dispatch(Cancelexecuted(index))
}
const handleToggle = (index: number,employeeId:number) => () => {
  console.log('value: ',index)
  const currentIndex = checked.indexOf(index);
  console.log("currentIndex",currentIndex)
  const newChecked = [...checked];
  if (currentIndex === -1) {
    newChecked.push(index);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  console.log("employeeId: ",employeeId)
  if(!paymentForEmployeeMap.find(({id}:any)=>id===employeeId)){
    console.log("paymentForEmployeeMap.find(({id}:any)=>id===employeeId: ",paymentForEmployeeMap.find(({id}:any)=>id===employeeId))
    dispatch(ExecutePayments(employeeId,'Awaiting approval'))
  
  }
  else{
    console.log("paymentForEmployeeMap.find(({id}:any)=>id===employeeId: ",paymentForEmployeeMap.find(({id}:any)=>id===employeeId))

   }
  setChecked(newChecked);
};
// const handleDelete=()=>{
//    dispatch(Cancelexecuted())
// }
return (
  <List className={classes.root}>
     {chooseEmployeeMap?chooseEmployeeMap.map((value: any,index:number) => {
      let status;
       value['status']? status= value['status']:status=null
      const labelId=value["id"]
      return (
        <ListItem key={value} role={undefined} dense button onClick={handleToggle(index,value['id'])}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(index) !==-1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          {status?<ListItemText id={labelId}   primary={`num employee ${value["id"]+'  '+value["first_name"]+'  '+value["last_name"]+'  '+value["status"]}`}/>:
            <ListItemText id={labelId}   primary={`num employee ${value["id"]+'  '+value["first_name"]+' '+value["last_name"]}Unchecked`}/>
         }
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments" onClick={(index:any)=>handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        )
      })
    :null}
  
  </List>
 );
  } 

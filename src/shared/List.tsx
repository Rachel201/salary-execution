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
import { ExecutePayments } from '../redux/actions/paymentAction';
import { LensTwoTone } from '@material-ui/icons';

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
const dispatch=useDispatch()
const {chooseEmployeeMap} = useSelector(({paymentReducer}:any)=>paymentReducer)
const handleToggle = (value: number,employeeId:number) => () => {
  const currentIndex = checked.indexOf(value);
  const newChecked = [...checked];
  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  dispatch(ExecutePayments(employeeId,'awaiting approval'))
  setChecked(newChecked);
};

return (
  <List className={classes.root}>
    {chooseEmployeeMap?
    chooseEmployeeMap.map((value: any,index:number) => {
      // const labelId = `checkbox-list-label-${value}`;
      //@ts-ignore
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
            <ListItemText id={labelId}   primary={`num employee ${value["id"]+'  '+value["first_name"]+'  '+value["last_name"]} `}/>
         }
          
         

          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    }):null}
  </List>
);
}
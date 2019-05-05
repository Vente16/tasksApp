import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Delete } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
    
  },
  item:{
   borderLeft: '3px solid #2196f3',
   margingTop: '5px',
   marginTop: theme.spacing.unit
  },  
  delete: {
    color: 'red'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class Listactions extends Component{

  constructor(){
    super();
    this.state = {
      tasks: [],
      title: '',
      task: '',
      taskTmp: [],
      dense: false,
      secondary: false,
    }
    this.addTask = this.addTask.bind(this);
    this.taskData = this.taskData.bind(this);
  }

  addTask(){

    if (this.state.task) {
      this.state.taskTmp.push(this.state.task);
      this.setState({
        tasks: this.state.taskTmp
     })
    }

  }

  taskData(e){
    this.setState({
      task: e.target.value
    });
  
  }

  
  deleteTodo(index){
     
    this.setState({
        tasks: this.state.tasks.filter((e, i) => {
            return i !== index
         }),
        taskTmp: this.state.taskTmp.filter((e, i) => {
            return i !== index
         })

   })
   
  }

  render(){
    const { classes } = this.props;
    const { title, dense, secondary } = this.state;

    return (
    <main className={classes.main}>
      <CssBaseline />
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={(e) => {e.preventDefault();}}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Task</InputLabel>
              <Input id="email" name="email" autoComplete="email" onChange={this.taskData} autoFocus />
            </FormControl>
         
            <Button
             type="button"
             onClick={this.addTask}
             variant="contained"
             color="primary"
             className={classes.submit}
            >
              Add task
            </Button>
          </form>

      <div className={classes.demo}>
        <List dense={dense}>
          { 
            this.state.tasks.map((task, i) => { 
                    
            return (<ListItem key={i} className={classes.item}>
                    <ListItemText
                        primary={task}
                        secondary={secondary ? 'Secondary text' : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" className={classes.delete} 
                          onClick={() => this.deleteTodo(i)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>)
            })
   
           }
                         
        </List>
       </div>
     </Paper>
    </main>
    );
   } 
  
}

Listactions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Listactions);
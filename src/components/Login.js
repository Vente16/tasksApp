import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Auth from './Auth';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  invalid: {
    marginTop: theme.spacing.unit * 2,
    color: 'red',
    textAlign: 'center',
    display:'none'
  },
  required: {
    marginTop: theme.spacing.unit,
    color: 'red',
    textAlign: 'left',
    display:'none'
  },

});

class Login extends Component{

  constructor(){
    super();
    this.state = {
      'email': '',
      'pass': ''
    };
   
    this.login = this.login.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentWillMount() {

    if (Auth.validateSesion()) {
      this.props.history.push('/tasks'); 
    }
  
  }

  showRequired(id){
    document.getElementById(id).style.display = 'block';
  }

  hideRequired(id){
    document.getElementById(id).style.display = 'none';
  }

  validLogin(){
    document.getElementById('errorLog').style.display = 'none';
  }

  invalidLogin(){
    document.getElementById('errorLog').style.display = 'block';
  }

  login(e){
    e.preventDefault();
    let email = this.state.email;
    let pass = this.state.pass;

    if (!email) {
      this.showRequired('emailRequired');
    }else{
      this.hideRequired('emailRequired');
    }

    if (!pass) {
      this.showRequired('passRequired');
    }else{
      this.hideRequired('passRequired');
    }

    if (email && pass) {
      let auth = Auth.login(email, pass);

      if(auth){
        this.validLogin();
        localStorage.setItem('Logged', true);
        this.props.history.push('/tasks');
      }else{
        this.invalidLogin();
      }
 
    }

  }

  setValue(e){
   
    this.setState({
      [e.target.name]: e.target.value
    });

    if (!e.target.value) {
      this.showRequired(e.target.name+'Required');
    }else{
      this.hideRequired(e.target.name+'Required');
    }

    this.validLogin();

  }

  render(){
    const { classes } = this.props;

    return (
    <main className={classes.main}>
      <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth onSubmit={this.login}>
            <InputLabel htmlFor="email">Correo</InputLabel>
            <Input id="email" name="email" autoComplete="email" onChange={ this.setValue} autoFocus />
            <span className={classes.required} id="emailRequired">Campo requerido.</span>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <Input name="pass" type="password" id="password" autoComplete="current-password" 
            onChange={ this.setValue} />
            <span className={classes.required} id="passRequired">Campo requerido.</span>
          </FormControl>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.login}
          >
            Iniciar sesión
          </Button>
             
        </form>
        <span className={classes.invalid} id="errorLog">Correo o contraseña inválido.</span>
      </Paper>
    </main>);

  } 
  
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
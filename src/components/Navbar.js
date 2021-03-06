import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sesionLink: {
    color: '#fff',
    textDecoration: 'none',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    
  },

};

class Navbar extends Component{


  constructor(){
    super();
    this.logout = this.logout.bind(this);

  }

  logout(){
    
    localStorage.removeItem("Logged");
  }

  render(){

  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Tasks App
          </Typography>
          <Button color="inherit" onClick={this.logout}>
             <Link to="/" className={classes.sesionLink}>Cerrar sesión</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>

   );

  }

}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
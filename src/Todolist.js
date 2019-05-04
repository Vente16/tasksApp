import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Listactions from './Listactions';
import Navbar from './Navbar';
import Auth from './Auth';

class Todolist extends Component{

  constructor(props){
    super(props);
    this.state = {
      tes: []
    };
 
  }


  componentWillMount() {

    if (!Auth.validateSesion()) {
      //setTimeout( () =>{
      this.props.history.push('/');
       // }, 500);
    }
  
  }

   render(){
      return (
        <div>
        <Navbar history={this.state.tes}/>
        <Listactions/>
        </div>
      );
   }
}

export default Todolist;




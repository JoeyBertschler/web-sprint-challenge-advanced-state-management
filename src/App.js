import React, { Component } from "react";
import {connect} from 'react-redux'
//connects components to store aka. that big object 
// that acts like some sort of giant global prob?
import {fetchSmurfs} from "./actions/index"
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
  }
  //CDM == fetchSmurf render 1x, saw it somewhere,
  //not sure how it works here but not enough time to investigate

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSmurfs: ()=> dispatch(fetchSmurfs())
  } //this part is written off of a review, not sure how it works
    //it seemed better to just go with "aight, fetch => dispatch(fetch) or short fetchpatchfetch"
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
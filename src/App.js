import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput'; 
import UserOutput  from './UserOutput/UserOutput';

//3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
//4. Add state to the App component (=> the username) and pass the username to the UserOutput component

class App extends Component {

	state = {
		username: 'superpat'
	}

// 5.Add a method to manipulate the state (=> an event-handler method)

	usernameChangeHandler = (event) => {
		this.setState({username: event.target.value});
	}


  render() {
     return (
		<div className="App">
			{/*	Pass the event-handler method reference to the UserInput component and bind it to the input-change event*/}
			<UserInput changed = {this.usernameChangeHandler}
			currentName={this.state.username}/>

			<UserOutput userName={this.state.username}/>
			<UserOutput userName={this.state.username}/>
			<UserOutput userName={this.state.username}/>
			<UserOutput userName="Pat"/>

		</div>


    	);
  }
}

export default App;

import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import Verification from "react-native-verification";

class App extends Component {
	constructor(props) {
		super(props);
		this.verificationCode = "";
	}
	_handlerGetVerficationCode = (value) => {
		this.verificationCode = value;
		console.log("Verification code = " + this.verificationCode);
	}
	render() {
		return (
			<View style={styles.container}>
				<Verification
					type={"number"}
					getValue={this._handlerGetVerficationCode}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
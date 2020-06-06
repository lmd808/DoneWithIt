import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

import AppButton from '../../app/components/AppButton';

function WelcomeScreen(props) {
	return (
		<ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
			<View style={styles.logoContainer}>
				<Image source={require('../assets/logo-red.png')} style={styles.logo} />
				<Text style={styles.tagLine}>Sell what you don't need</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title={'Login'} onPress={() => console.log('tapped')} />
				<AppButton title={'Register'} color={'secondary'} onPress={() => console.log('pressed')} />
			</View>
		</ImageBackground>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	buttonContainer: {
		padding: 20,
		width: '100%'
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center'
	},
	logo: {
		width: 100,
		height: 70
	},
	tagLine: {
		fontSize: 25,
		fontWeight: '600',
		paddingVertical: 20
	}
});

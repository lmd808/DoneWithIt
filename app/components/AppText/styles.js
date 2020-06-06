import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	textArea: {
		color: 'tomato',
		fontSize: 40,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
	}
});

export default styles;

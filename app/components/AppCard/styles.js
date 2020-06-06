import { StyleSheet } from 'react-native';

import Colors from '../../config/colors';

const Styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: Colors.white,
		marginBottom: 20,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: 200
	},
	detailsContainer: {
		padding: 10
	},
	title: {
		marginBottom: 7,
		fontSize: 25,
		color: Colors.black
	},
	subTitle: {
		color: Colors.secondary,
		fontWeight: 'bold',
		fontSize: 25
	}
});

export default Styles;

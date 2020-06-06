import { StyleSheet } from 'react-native';
import Colors from '../../config/colors';

const Styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10
	},
	title: {
		fontWeight: '500',
		fontSize: 18,
		color: Colors.black
	},
	subtitle: {
		color: Colors.grey,
		fontSize: 15
	}
});

export default Styles;

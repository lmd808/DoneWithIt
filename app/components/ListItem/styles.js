import { StyleSheet } from 'react-native';
import Colors from '../../config/colors';

const Styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: Colors.white
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	title: {
		fontWeight: '500',
		fontSize: 18,
		color: Colors.black
	},
	textContainer:{
		marginLeft: 10,
		justifyContent: 'center'
	},
	subtitle: {
		color: Colors.grey,
		fontSize: 15
	}
});

export default Styles;

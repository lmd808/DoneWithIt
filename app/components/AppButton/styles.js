import { StyleSheet } from 'react-native';

import Colors from '../../config/colors';
import colors from '../../config/colors';

const Styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		width: '100%',
		borderRadius: 25,
		marginVertical: 10
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
});

export default Styles;

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../../config/colors';

import Styles from './styles';

function AppButton({ title, onPress, color = 'primary' }) {
	return (
		<TouchableOpacity style={[ Styles.button, { backgroundColor: Colors[color] } ]} onPress={onPress}>
			<Text style={Styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}
export default AppButton;

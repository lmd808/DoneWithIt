import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Styles from './styles';
import Colors from '../../config/colors';
function ListItemDeleteComponent({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={Styles.container}>
				<MaterialCommunityIcons name={'trash-can'} size={35} color={Colors.white} />
			</View>
		</TouchableWithoutFeedback>
	);
}

export default ListItemDeleteComponent;

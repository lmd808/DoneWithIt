import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/colors';

function ViewImageScreen(props) {
	return (
		<View style={styles.imageContainer}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name="close" color={Colors.white} size={35} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons name="trash-can-outline" color={Colors.white} size={35} />
			</View>
			<Image source={require('../assets/chair.jpg')} resizeMode={'contain'} style={styles.image} />
		</View>
	);
}

export default ViewImageScreen;

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: Colors.black,
		flex: 1
	},
	closeIcon: {
		position: 'absolute',
		top: 40,
		left: 30
	},
	deleteIcon: {
		position: 'absolute',
		top: 40,
		right: 30
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

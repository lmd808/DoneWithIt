import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import AppText from '../AppText';
import Styles from './styles';
import Colors from '../../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ image, title, subtitle, onPress, ImageComponent, renderRightActions }) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={Colors.lightGrey} onPress={onPress}>
				<View style={Styles.container}>
					{ImageComponent}
					{image && <Image style={Styles.image} source={image} />}
					<View style={Styles.textContainer}>
						<AppText style={Styles.title}>{title}</AppText>
						{subtitle && <AppText style={Styles.subtitle}>{subtitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

export default ListItem;

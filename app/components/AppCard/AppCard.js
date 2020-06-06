import React from 'react';
import { View, Image } from 'react-native';

import AppText from '../AppText';
import Styles from './styles';
import styles from '../AppText/styles';

function AppCard({ title, subTitle, image }) {
	return (
		<View style={Styles.card}>
			{/* you cannot pass require with the prop. Require must be used with the actual call for the image */}
			{/*  all your images sources need to be loaded before compiling your bundle. */}
			<Image style={Styles.image} source={image} />
			<View style={Styles.detailsContainer}>
				<AppText style={Styles.title}>{title}</AppText>
				<AppText style={Styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
}

export default AppCard;

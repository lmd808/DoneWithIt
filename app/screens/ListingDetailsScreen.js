import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppText from '../components/AppText';
import Colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen({ title, price }) {
	return (
		<View>
			<Image style={styles.image} source={require('../assets/jacket.jpg')} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.price}>{price}</AppText>
				<View style={styles.userContainer}>
					<ListItem image={require('../assets/face.jpg')} title={'Laura DiTommaso'} subtitle={'6 listings'} />
				</View>
			</View>
		</View>
	);
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20
	},
	image: {
		width: '100%',
		height: 300
	},
	title: {
		fontSize: 24,
		fontWeight: '500'
	},
	price: {
		color: Colors.secondary,
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 10
	},
	userContainer: {
		marginVertical: 40
	}
});

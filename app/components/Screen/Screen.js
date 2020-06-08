import React from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import Styles from './styles';

function Screen({ children, style }) {
	return (
		// safe area view does not support vertical padding as of 6/7/2019
		// wrap children in view and send style props to View to force change
		<SafeAreaView style={[Styles.screen, style]}>
			<View style={style}>
				{children}
			</View>
		</SafeAreaView>
	);
}
export default Screen;

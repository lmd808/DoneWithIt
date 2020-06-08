import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

import Styles from './styles';

function Screen({ children, style }) {
	return <SafeAreaView style={[Styles.screen, style]}>{children}</SafeAreaView>;
}
export default Screen;

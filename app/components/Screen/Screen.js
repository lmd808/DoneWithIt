import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

import Styles from './styles';

function Screen({ children }) {
	return <SafeAreaView style={Styles.screen}>{children}</SafeAreaView>;
}
export default Screen;

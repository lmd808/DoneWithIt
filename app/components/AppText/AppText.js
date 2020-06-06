import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function AppText({ children, style }) {
	return <Text style={[ styles.textArea, style ]}>{children} </Text>;
}

export default AppText;

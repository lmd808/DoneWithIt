import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator/ListItemSeparator';
import Colors from '../config/colors';
import ListItemDeleteComponent from '../components/ListItemDeleteComponent/ListItemDeleteComponent';

const initialMessages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/face.jpg')
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/face.jpg')
	}
];

function MessagesScreen(props) {
	const [ messageState, setMessageState ] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false)

	const handleDelete = (item) => {
		// state is updated in message state but no rerender 
		setMessageState(messageState.filter(m=> m.id !== item.id))
		console.log(messageState)
	};
		

	return (
		<Screen>
			<FlatList
			refreshing={refreshing}
			onRefresh={()=>				
				{setMessageState([{
				id: 2,
				title: 'T2',
				description: 'D2',
				image: require('../assets/face.jpg')
			}])}
		}
				data={initialMessages}
				keyExtractor={(initialMessages) => initialMessages.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subtitle={item.description}
						image={item.image}
						onPress={() => {
							console.log('pressed');
						}}
						renderRightActions={() => {
							return <ListItemDeleteComponent onPress={() => handleDelete(item)} />;
						}}
					/>
				)}
				ItemSeparatorComponent={() => {
					return <ListItemSeparator />;
				}}
			/>
		</Screen>
	);
}

export default MessagesScreen;

const styles = StyleSheet.create({});

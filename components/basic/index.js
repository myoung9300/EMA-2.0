import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

import styles from './styles';

const BasicHomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ScrollView>
				<TouchableOpacity onPress={() => navigation.navigate('Testing')}>
					<Text style={styles.area}>Belt Testing</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Intent-To-Promote')}
				>
					<Text style={styles.area}>Intent-To-Promote</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Basic Player')}>
					<Text style={styles.area}>Curriculum Videos</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default BasicHomeScreen;

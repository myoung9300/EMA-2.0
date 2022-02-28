import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../basic/styles';

const Level1 = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate('Level 1 Curriculum')}
				>
					<Text style={styles.area}>Curriculum Videos</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Level 1 Manual')}>
					<Text style={styles.area}>Level 1 Manual</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Level 1 Standards')}
				>
					<Text style={styles.area}>Level 1 Standards</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Level 1 Checklist')}
				>
					<Text style={styles.area}>Level 1 Checklist</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Level 1 Sparring Gear')}
				>
					<Text style={styles.area}>Level 1 Sparring Gear</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Testing')}>
					<Text style={styles.area}>Belt Testing</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Intent-To-Promote')}
				>
					<Text style={styles.area}>Intent-To-Promote</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Karate Homework Card')}
				>
					<Text style={styles.area}>Karate Homework Card</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default Level1;

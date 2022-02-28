import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../basic/styles';

const BlackBelt = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate('Black Belt Curriculum')}
				>
					<Text style={styles.area}>Black Belt Curriculum</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('2nd Degree Curriculum')}
				>
					<Text style={styles.area}>2nd Degree Black Belt Curriculum</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('SWAT 1')}>
					<Text style={styles.area}>SWAT 1 Tasks</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Black Belt Testing')}
				>
					<Text style={styles.area}>Belt Testing</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('Intent-To-Promote')}
				>
					<Text style={styles.area}>Intent-To-Promote</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default BlackBelt;

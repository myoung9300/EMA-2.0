import React from 'react';
import {
	Image,
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	Linking,
} from 'react-native';
import styles from '../../stack/homePage/styles';

const VirtualClass = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../../../../assets/images/EMABlue.png')}
				style={styles.image}
			/>
			<View style={styles.break} />
			<Text style={styles.text}>Need to do karate from home today?</Text>
			<Text style={styles.text}>
				Click on one of the links below to join your class...
			</Text>
			<TouchableOpacity
				onPress={() => {
					Linking.openURL(
						'https://zoom.us/j/3039720114?pwd=WmZWUUpFSjRITnB6VmM1UCtRS0ZtQT09'
					);
				}}
			>
				<Text style={styles.area}>Floor 1</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					Linking.openURL(
						'https://zoom.us/j/3039720109?pwd=RHJMSkJRZndzSVB6ZTJiYi9tdnlIUT09'
					);
				}}
			>
				<Text style={styles.area}>Floor 2</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default VirtualClass;

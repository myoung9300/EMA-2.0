import React from 'react';
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from '../../stack/homePage/styles';

const ScheduleScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../../../../assets/images/EMABlue.png')}
				style={styles.image}
			/>
			<View style={styles.break} />
			<Text style={styles.text}>
				Here is the updated schedule and current calander to view for your
				houshold...
			</Text>
			<TouchableOpacity onPress={() => navigation.navigate('Weekly Schedule')}>
				<Text style={styles.area}>Weekly Schedule</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Calander')}>
				<Text style={styles.area}>Monthly Calander</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default ScheduleScreen;

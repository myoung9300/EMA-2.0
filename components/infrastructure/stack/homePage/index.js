import React from 'react';
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
} from 'react-native';
import { Auth } from 'aws-amplify';
import styles from './styles';

const HomePage = ({ navigation }) => {
	const signOut = () => {
		Auth.signOut();
	};
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../../../../assets/images/EMABlue.png')}
				style={styles.image}
			/>
			<TouchableOpacity onPress={signOut}>
				<Text style={styles.signOut}>Sign Out</Text>
			</TouchableOpacity>
			<Text style={styles.text}>
				Scroll and click on your level below to view:
			</Text>
			<Text style={styles.text}>1. Video Curriculum</Text>
			<Text style={styles.text}>2. Belt Testing Registration</Text>
			<ScrollView>
				<TouchableOpacity onPress={() => navigation.navigate('EMA Pass')}>
					<Text style={styles.area}>EMA Pass</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Basic')}>
					<Text style={styles.area}>Lil' Dragons & Basic</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Level 1')}>
					<Text style={styles.area}>Level 1</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Level 2')}>
					<Text style={styles.area}>Level 2</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Level 3')}>
					<Text style={styles.area}>Level 3</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Black Belt')}>
					<Text style={styles.area}>Black Belt</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Exclusive')}>
					<Text style={styles.area}>Exclusive</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};
export default HomePage;

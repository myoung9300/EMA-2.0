import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const EmaPass = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity>
				<Text style={styles.Button}>Level 1 Breakdowns</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.Button}>Level 2 Breakdowns</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.Button}>Level 3 Breakdowns</Text>
			</TouchableOpacity>
			<View style={{ marginTop: 30, padding: 20 }}>
				<TouchableOpacity>
					<Text style={styles.Button}>Month 2 Breakdowns</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default EmaPass;

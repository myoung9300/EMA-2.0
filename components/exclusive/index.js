import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from '../infrastructure/stack/homePage/styles';

const Exclusive = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.bigText}>Coming soon!</Text>
		</SafeAreaView>
	);
};

export default Exclusive;

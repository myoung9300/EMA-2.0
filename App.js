import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Amplify from 'aws-amplify';

import awsconfig from './src/aws-exports';
import TabNavigation from './components/infrastructure/tab/Tab';

Amplify.configure(awsconfig);
export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<TabNavigation />
				<StatusBar style='auto' />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

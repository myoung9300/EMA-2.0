import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScheduleScreen from './scheduleScreen';
import WeeklySchedule from './weeklySchedule';
import CalanderScreen from './calander';

const Stack = createNativeStackNavigator();

const ScheduleScreenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#006eff',
				},
			}}
		>
			<Stack.Screen
				options={{ headerShown: false }}
				name='ScheduleScreen'
				component={ScheduleScreen}
			/>
			<Stack.Screen name='Weekly Schedule' component={WeeklySchedule} />
			<Stack.Screen name='Calander' component={CalanderScreen} />
		</Stack.Navigator>
	);
};

export default ScheduleScreenNavigator;

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClassSignUp from './classSignUpScreen';
import Classes from './classes';
import InstructorPVT from './instructor';
import SemiPVT from './semiPVT';

const Stack = createNativeStackNavigator();

const ClassScreenNavigator = () => {
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
				name='Class Screen'
				component={ClassSignUp}
			/>
			<Stack.Screen name='Weekly Schedule' component={Classes} />
			<Stack.Screen name='Private Lessons' component={InstructorPVT} />
			<Stack.Screen name='Semi pvt Lessons' component={SemiPVT} />
		</Stack.Navigator>
	);
};

export default ClassScreenNavigator;

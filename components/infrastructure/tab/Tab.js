import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScheduleScreenNavigator from './schedule/';
import ClassScreenNavigator from './classSignUp';
import StackNavigation from '../stack/Stack';
import StudentPortal from './studentPortal/';
import VirtualClass from './virtualKarate/';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Tab.Navigator
			sceneContainerStyle={{ backgroundColor: '#006eff' }}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = 'folder-home-outline';
					} else if (route.name === 'Class Sign Up') {
						iconName = 'google-classroom';
					} else if (route.name === 'Student Portal') {
						iconName = 'account-details';
					} else if (route.name === 'Schedule') {
						iconName = 'clock';
					} else if (route.name === 'Virtual Karate') {
						iconName = 'video';
					}

					return (
						(<Icon name={iconName} size={size} color={color} />),
						(
							<MaterialCommunityIcons
								name={iconName}
								size={size}
								color={color}
							/>
						)
					);
				},
				tabBarStyle: { backgroundColor: '#006eff' },
				tabBarActiveBackgroundColor: 'white',
				tabBarInactiveTintColor: 'white',
			})}
		>
			<Tab.Screen
				name='Home'
				component={StackNavigation}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name='Class Sign Up'
				component={ClassScreenNavigator}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name='Student Portal'
				component={StudentPortal}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name='Schedule'
				component={ScheduleScreenNavigator}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name='Virtual Karate'
				component={VirtualClass}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};
export default TabNavigation;

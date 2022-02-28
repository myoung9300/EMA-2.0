import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, Hub } from 'aws-amplify';

import HomePage from './homePage';
import EmaPass from '../../emaPass';
import BasicHomeScreen from '../../basic';
import BasicPlayer from '../../basic/Basic.Player';
import Level1 from '../../level1';
import Level1Player from '../../level1/Lv1.Player';
import Level2Player from '../../level2/Lv2.Player';
import Level2 from '../../level2';
import Level3 from '../../level3';
import Level3Player from '../../level3/Lv3.Player';
import BlackBelt from '../../blackBelt';
import BBPlayer from '../../blackBelt/BB.Player';
import SecondBBPlayer from '../../blackBelt/SecondBB.Player';
import Exclusive from '../../exclusive';
import BeltTesting from '../../allStudents/BeltTesting';
import Itp from '../../allStudents/IntentToPromote';
import KarateHomeWork from '../../allStudents/KarateHomeworkCard';
import BBTesting from '../../allStudents/BBTesting';
import Level1Standards from '../../level1/standards';
import Level1Checklist from '../../level1/checklist';
import Level1Spar from '../../level1/sparringGear';
import Level1Manual from '../../level1/manual';
import Level2Manual from '../../level2/manual';
import Level2Standards from '../../level2/standards';
import Level2Checklist from '../../level2/checklist';
import Level2Spar from '../../level2/sparringGear';
import Level3Manual from '../../level3/manual';
import Level3Standards from '../../level3/standards';
import Level3Checklist from '../../level3/checklist';
import Swat1 from '../../blackBelt/swat1';
import SignInScreen from '../SigninScreen/SigninScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../NewPasswordScreen/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
	const [user, setUser] = useState(undefined);
	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}
	};

	useEffect(() => {
		checkUser();
	}, []);
	useEffect(() => {
		const listener = (data) => {
			if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
				checkUser();
			}
		};
		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	if (user === undefined) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator />
			</View>
		);
	}
	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#006eff',
				},
			}}
		>
			{user ? (
				<>
					<Stack.Screen
						name='HomeStack'
						options={{ headerShown: false }}
						component={HomePage}
					/>
					<Stack.Screen name='EMA Pass' component={EmaPass} />
					<Stack.Screen name='Exclusive' component={Exclusive} />

					<Stack.Screen name='Basic' component={BasicHomeScreen} />
					<Stack.Screen name='Basic Player' component={BasicPlayer} />

					<Stack.Screen name='Level 1' component={Level1} />
					<Stack.Screen name='Level 1 Curriculum' component={Level1Player} />
					<Stack.Screen name='Level 1 Standards' component={Level1Standards} />
					<Stack.Screen name='Level 1 Checklist' component={Level1Checklist} />
					<Stack.Screen name='Level 1 Sparring Gear' component={Level1Spar} />
					<Stack.Screen name='Level 1 Manual' component={Level1Manual} />

					<Stack.Screen name='Level 2' component={Level2} />
					<Stack.Screen name='Level 2 Curriculum' component={Level2Player} />
					<Stack.Screen name='Level 2 Manual' component={Level2Manual} />
					<Stack.Screen name='Level 2 Standards' component={Level2Standards} />
					<Stack.Screen name='Level 2 Checklist' component={Level2Checklist} />
					<Stack.Screen name='Level 2 Sparring Gear' component={Level2Spar} />

					<Stack.Screen name='Level 3' component={Level3} />
					<Stack.Screen name='Level 3 Curriculum' component={Level3Player} />
					<Stack.Screen name='Level 3 Manual' component={Level3Manual} />
					<Stack.Screen name='Level 3 Standards' component={Level3Standards} />
					<Stack.Screen name='Level 3 Checklist' component={Level3Checklist} />

					<Stack.Screen name='Black Belt' component={BlackBelt} />
					<Stack.Screen name='Black Belt Curriculum' component={BBPlayer} />
					<Stack.Screen
						name='2nd Degree Curriculum'
						component={SecondBBPlayer}
					/>
					<Stack.Screen name='Black Belt Testing' component={BBTesting} />
					<Stack.Screen name='SWAT 1' component={Swat1} />

					<Stack.Screen name='Testing' component={BeltTesting} />
					<Stack.Screen name='Intent-To-Promote' component={Itp} />
					<Stack.Screen
						name='Karate Homework Card'
						component={KarateHomeWork}
					/>
				</>
			) : (
				<>
					<Stack.Screen
						name='Sign In'
						options={{ headerShown: false }}
						component={SignInScreen}
					/>
					<Stack.Screen
						name='Sign Up'
						options={{ headerShown: false }}
						component={SignUpScreen}
					/>
					<Stack.Screen
						name='Confirm Email'
						options={{ headerShown: false }}
						component={ConfirmEmailScreen}
					/>
					<Stack.Screen
						name='Forgot Password'
						options={{ headerShown: false }}
						component={ForgotPasswordScreen}
					/>
					<Stack.Screen
						name='New Password'
						options={{ headerShown: false }}
						component={NewPasswordScreen}
					/>
				</>
			)}
		</Stack.Navigator>
	);
};
export default StackNavigation;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	View,
	Alert,
	Image,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	useWindowDimensions,
} from 'react-native';

import { Auth } from 'aws-amplify';

import EMABlue from '../../../assets/images/EMABlue.png';
import CustomInput from '../SigninScreen/Custominput';
import CustomButton from '../SigninScreen/CustomButton';

const SignInScreen = ({ navigation }) => {
	const { height } = useWindowDimensions();
	const [loading, setLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSignInPress = async (data) => {
		if (loading) {
			return;
		}
		setLoading(true);
		try {
			const response = await Auth.signIn(data.username, data.password);
			navigation.navigate('HomeStack');
		} catch (e) {
			Alert.alert('Oops', e.message);
		}
		setLoading(false);
	};
	const onForgotPasswordPress = () => {
		navigation.navigate('Forgot Password');
	};
	const onSignUp = () => {
		navigation.navigate('Sign Up');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView style={styles.container}>
				<Image
					style={[styles.logo, { height: height * 0.15 }]}
					source={EMABlue}
					resizeMode='center'
				/>
				<View style={styles.break} />
				<CustomInput
					name='username'
					placeholder='Username'
					control={control}
					rules={{ required: 'Username is required' }}
				/>
				<CustomInput
					name='password'
					placeholder='Password'
					control={control}
					secureTextEntry
					type='PRIMARY'
					rules={{
						required: 'Password is required',
						minLength: {
							value: 4,
							message: 'Password should be minumium 4 characters long',
						},
					}}
				/>

				<CustomButton
					text={loading ? 'Loading...' : 'Sign In'}
					onPress={handleSubmit(onSignInPress)}
				/>
				<CustomButton
					text='Forgot password?'
					onPress={onForgotPasswordPress}
					type='TERTIARY'
				/>
				<View style={styles.break} />
				<View style={styles.break} />
				<CustomButton
					text="Don't have an account? Create one"
					onPress={onSignUp}
					type='TERTIARY'
				/>
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginHorizontal: 10,
	},
	logo: {
		alignSelf: 'center',
		borderRadius: 10,
		width: '90%',
		height: 120,
	},
	break: {
		padding: 16,
	},
});
export default SignInScreen;

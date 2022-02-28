import React from 'react';
import { useForm } from 'react-hook-form';

import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	ScrollView,
	Alert,
} from 'react-native';

import { Auth } from 'aws-amplify';

import CustomInput from '../SigninScreen/Custominput';
import CustomButton from '../SigninScreen/CustomButton';

const EMAIL_REGEX =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({ navigation }) => {
	const { control, handleSubmit, watch } = useForm();
	const pwd = watch('password');

	const onRegisterPress = async (data) => {
		const { name, username, email, password } = data;
		try {
			await Auth.signUp({
				username,
				password,
				attributes: { email, name, preferred_username: username },
			});
			navigation.navigate('Confirm Email', { username });
		} catch (e) {
			Alert.alert('Oops', e.message);
		}
	};
	const onSignInPress = () => {
		navigation.navigate('Sign In');
	};
	const onTermsOfUsePressed = () => {
		console.warn('Terms Of Use');
	};
	const onPrivacyPolicyPressed = () => {
		console.warn('Privacy Policy');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView style={styles.root}>
				<Text style={styles.title}>Create Account</Text>
				<View style={styles.break} />
				<CustomInput
					name='name'
					placeholder='Name'
					control={control}
					rules={{
						required: 'Name is required',
						minLength: {
							value: 5,
							message: 'Name should be at least 5 characters long',
						},
						maxLength: {
							value: 24,
							message: 'Name should be max 24 characters long',
						},
					}}
				/>
				<CustomInput
					name='username'
					placeholder='Username'
					control={control}
					rules={{
						required: 'Username is required',
						minLength: {
							value: 5,
							message: 'Username should be at least 5 characters long',
						},
						maxLength: {
							value: 24,
							message: 'Username should be max 24 characters long',
						},
					}}
				/>
				<CustomInput
					name='email'
					placeholder='Email'
					control={control}
					rules={{
						required: 'Username is required',
						pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
					}}
				/>
				<CustomInput
					name='password'
					placeholder='Password'
					control={control}
					secureTextEntry
					rules={{
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password should be at least 6 characters long',
						},
					}}
				/>
				<CustomInput
					name='password-repeat'
					placeholder='Re-enter Password'
					control={control}
					secureTextEntry
					rules={{
						validate: (value) => value === pwd || 'Passwords do not match',
					}}
				/>

				<CustomButton text='Register' onPress={handleSubmit(onRegisterPress)} />
				<Text style={styles.text}>
					By registering, you confirm that you accept our{' '}
					<Text style={styles.link} onPress={onTermsOfUsePressed}>
						Terms of use
					</Text>{' '}
					and{' '}
					<Text style={styles.link} onPress={onPrivacyPolicyPressed}>
						Privacy Policy
					</Text>
				</Text>
				<View style={styles.break} />
				<CustomButton
					text='Have an account? Sign in'
					onPress={onSignInPress}
					type='TERTIARY'
				/>
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		marginHorizontal: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#051c60',
		margin: 10,
	},
	text: {
		color: 'gray',
		margin: 10,
	},
	link: {
		color: '#fdb875',
	},
	break: {
		padding: 20,
	},
});
export default SignUpScreen;

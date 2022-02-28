import React, { useState } from 'react';
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

const NewPasswordScreen = ({ navigation }) => {
	const { control, handleSubmit } = useForm();

	const onSubmitPressed = async (data) => {
		try {
			await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
			Alert.alert('Success', 'your new password has been accepted!');
			navigation.navigate('Sign In');
		} catch (e) {
			Alert.alert('Oops', e.message);
		}
	};
	const onSignInPressed = () => {
		navigation.navigate('Sign In');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView style={styles.root}>
				<Text style={styles.title}>Reset your Password</Text>
				<View style={styles.break} />
				<CustomInput
					name='username'
					placeholder='Username'
					control={control}
					rules={{ required: 'Username is required' }}
				/>
				<CustomInput
					name='code'
					placeholder='Code'
					control={control}
					rules={{ required: 'Code is required' }}
				/>
				<CustomInput
					name='password'
					placeholder='Enter new password'
					secureTextEntry
					control={control}
					rules={{
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password should be at least 6 characters long',
						},
					}}
				/>
				<View style={styles.break} />
				<CustomButton text='Submit' onPress={handleSubmit(onSubmitPressed)} />
				<View style={styles.break} />
				<CustomButton
					text='Back to Sign In'
					onPress={onSignInPressed}
					type='TERTIARY'
				/>
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
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
export default NewPasswordScreen;

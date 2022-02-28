import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	Alert,
} from 'react-native';
import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';

import CustomInput from '../SigninScreen/Custominput';
import CustomButton from '../SigninScreen/CustomButton';

const ForgotPasswordScreen = ({ navigation }) => {
	const onSendPressed = async (data) => {
		try {
			await Auth.forgotPassword(data.username);
			Alert.alert('Success', 'Code was sent to your email');
			navigation.navigate('New Password');
		} catch (e) {
			Alert.alert('Oops', e.message);
		}
	};
	const onSignInPressed = () => {
		navigation.navigate('Sign In');
	};

	const { control, handleSubmit } = useForm();
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView style={styles.container}>
				<View style={styles.break} />
				<Text style={styles.title}>Reset your Password</Text>
				<View style={styles.break} />
				<CustomInput
					name='username'
					placeholder='Username'
					control={control}
					rules={{ required: 'Username is required' }}
				/>
				<View style={styles.break} />
				<CustomButton text='Send' onPress={handleSubmit(onSendPressed)} />
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
	container: {
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
	break: {
		padding: 16,
	},
});
export default ForgotPasswordScreen;

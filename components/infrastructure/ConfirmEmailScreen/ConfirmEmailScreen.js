import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

import CustomInput from '../SigninScreen/Custominput';
import CustomButton from '../SigninScreen/CustomButton';

const ConfirmEmailScreen = ({ navigation }) => {
	const route = useRoute();
	const { control, handleSubmit, watch } = useForm({
		defaultValues: { username: route?.params?.username },
	});

	const username = watch('username');

	const onConfirmPressed = async (data) => {
		try {
			await Auth.confirmSignUp(data.username, data.code);
			navigation.navigate('Sign In');
		} catch (e) {
			Alert.alert('Oops', e.message);
		}
	};
	const onSignInPressed = () => {
		navigation.navigate('Sign In');
	};
	const onResendPressed = async () => {
		try {
			await Auth.resendSignUp(username);
			Alert.alert('Success', 'Code was sent to your email');
		} catch (e) {
			Alert.alert('Oops', e.message);
		}
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Confirm Email</Text>
				<View style={styles.break} />
				<CustomInput
					name='username'
					placeholder='Username'
					control={control}
					rules={{ required: 'Username is required' }}
				/>
				<CustomInput
					name='code'
					placeholder='Enter your confirmation code'
					control={control}
					rules={{ required: 'Confirmation code is required' }}
				/>
				<View style={styles.break} />
				<CustomButton text='Confirm' onPress={handleSubmit(onConfirmPressed)} />

				<CustomButton
					text='Resend code'
					onPress={onResendPressed}
					type='SECONDARY'
				/>
				<View style={styles.break} />
				<CustomButton
					text='Back to Sign In'
					onPress={onSignInPressed}
					type='TERTIARY'
				/>
			</View>
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
export default ConfirmEmailScreen;

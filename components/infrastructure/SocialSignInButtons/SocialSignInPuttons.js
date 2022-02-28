import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../SigninScreen/CustomButton';

const SocialSignInButtons = () => {
	const onSignInFacebook = () => {
		console.warn('Facebook sign in');
	};
	const onSignInGoogle = () => {
		console.warn('Google sign in');
	};
	const onSignInApple = () => {
		console.warn('Apple Sign in!');
	};
	return (
		<>
			<CustomButton
				text='Sign In with Facebook'
				onPress={onSignInFacebook}
				bgColor='#e7eaf4'
				fgColor='#4765a9'
			/>
			<CustomButton
				text='Sign In with Google'
				onPress={onSignInGoogle}
				bgColor='#fae9ea'
				fgColor='#dd4d44'
			/>
			<CustomButton
				text='Sign In with Apple'
				onPress={onSignInApple}
				bgColor='#e3e3e3'
				fgColor='#363636'
			/>
		</>
	);
};
export default SocialSignInButtons;

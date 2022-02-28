import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';

const BBTesting = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<WebView
				source={{
					uri: 'https://ema-planner.herokuapp.com/testing_signup_blackbelt',
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='black' size='large' />}
			/>
		</View>
	);
};

export default BBTesting;

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';

const BeltTesting = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<WebView
				source={{
					uri: 'https://ema-planner.herokuapp.com/student_tests',
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='black' size='large' />}
			/>
		</View>
	);
};

export default BeltTesting;

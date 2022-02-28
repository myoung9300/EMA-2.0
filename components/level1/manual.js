import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';

const Level1Manual = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<WebView
				source={{
					uri: 'https://emafiles.herokuapp.com/store/Level_1_Manual.pdf',
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='black' size='large' />}
			/>
		</View>
	);
};

export default Level1Manual;

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';

const Level2Checklist = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<WebView
				source={{
					uri: 'https://emafiles.herokuapp.com/store/Level2Curriculum.pdf',
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='black' size='large' />}
			/>
		</View>
	);
};

export default Level2Checklist;

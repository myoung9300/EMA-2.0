import React from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const WeeklySchedule = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<WebView
				source={{ uri: 'https://emafiles.herokuapp.com/store/schedule.pdf' }}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='blue' size='large' />}
			/>
		</SafeAreaView>
	);
};

export default WeeklySchedule;

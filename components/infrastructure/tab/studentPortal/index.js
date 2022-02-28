import React, { useState, useRef } from 'react';
import {
	SafeAreaView,
	ActivityIndicator,
	View,
	TouchableOpacity,
	Text,
} from 'react-native';
import WebView from 'react-native-webview';
import styles from './styles';

const StudentPortal = () => {
	const [canGoBack, setCanGoBack] = useState(false);
	const [canGoForward, setCanGoForward] = useState(false);
	const [currentUrl, setCurrentUrl] = useState('');

	const webviewRef = useRef(null);

	backButtonHandler = () => {
		if (webviewRef.current) webviewRef.current.goBack();
	};

	frontButtonHandler = () => {
		if (webviewRef.current) webviewRef.current.goForward();
	};
	return (
		<SafeAreaView style={styles.flexContainer}>
			<View style={styles.tabBarContainer}>
				<TouchableOpacity onPress={backButtonHandler}>
					<Text style={styles.button}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={frontButtonHandler}>
					<Text style={styles.button}>Forward</Text>
				</TouchableOpacity>
			</View>
			<WebView
				source={{
					uri: 'https://ema-planner.herokuapp.com/student_portal_login',
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='black' size='large' />}
				ref={webviewRef}
				onNavigationStateChange={(navState) => {
					setCanGoBack(navState.canGoBack);
					setCanGoForward(navState.canGoForward);
					setCurrentUrl(navState.url);
				}}
			/>
		</SafeAreaView>
	);
};

export default StudentPortal;

import React, { useRef, useState } from 'react';

import {
	SafeAreaView,
	View,
	TouchableOpacity,
	Text,
	ActivityIndicator,
} from 'react-native';
import WebView from 'react-native-webview';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../stack/homePage/styles';

const Classes = () => {
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
		<SafeAreaView style={styles.container}>
			<WebView
				source={{ uri: 'https://ema-planner.herokuapp.com/student_classes' }}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='black' size='large' />}
				ref={webviewRef}
				onNavigationStateChange={(navState) => {
					setCanGoBack(navState.url);
					setCanGoForward(navState.canGoForward);
					setCurrentUrl(navState.url);
				}}
			/>
			<View style={styles.tabBarContainer}>
				<View style={styles.tabBarContainer2}>
					<TouchableOpacity onPress={backButtonHandler}>
						<View style={{ alignItems: 'center' }}>
							<MaterialCommunityIcons name='alpha-b-circle' size={30} />
							<Text style={styles.button}>Back</Text>
						</View>
					</TouchableOpacity>
				</View>
				<Text style={styles.smallText}>
					Use these to navigate in this screen
				</Text>
				<View style={styles.tabBarContainer2}>
					<TouchableOpacity onPress={frontButtonHandler}>
						<View style={{ alignItems: 'center' }}>
							<MaterialCommunityIcons name='alpha-f-circle' size={30} />
							<Text style={styles.button}>Forward</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Classes;

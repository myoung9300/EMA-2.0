import React, { useState } from 'react';
import {
	Text,
	View,
	Image,
	Dimensions,
	Modal,
	Pressable,
	TouchableOpacity,
} from 'react-native';
import WebView from 'react-native-webview';
import styles from './styles';

const MiniCard = (props) => {
	const [modal, setModal] = useState(false);
	return (
		<View style={styles.centeredView}>
			<TouchableOpacity
				onPress={() => {
					setModal(true);
				}}
			>
				<View style={{ flexDirection: 'row', margin: 10, marginBottom: 0 }}>
					<Image
						source={{
							uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
						}}
						style={{
							borderRadius: 20,
							width: '45%',
							height: 100,
						}}
					/>
					<View style={{ paddingLeft: 10 }}>
						<Text
							style={{
								marginTop: 30,
								color: 'black',
								fontSize: 20,
								width: Dimensions.get('screen').width / 2,
							}}
							ellipsizeMode='tail'
							numberOfLines={1}
						>
							{props.title}
						</Text>
						<Text
							style={{
								fontSize: 12,
								color: 'black',
								width: Dimensions.get('screen').width / 2,
							}}
							ellipsizeMode='tail'
							numberOfLines={2}
						>
							{props.description}
						</Text>
					</View>
				</View>
				<Modal
					animationType={'fade'}
					transparent={true}
					visible={modal}
					onTouchCancel={() => {
						setModal(false);
					}}
					onRequestClose={() => {
						setModal(false);
					}}
				>
					<View style={styles.outerModalView}>
						<WebView
							style={{
								borderRadius: 20,
								marginTop: 100,
								width: Dimensions.get('window').width - 20,
								Height: Dimensions.get('screen').height / 4,
							}}
							javaScriptEnabled={true}
							domStorageEnabled={true}
							source={{ uri: `https://www.youtube.com/embed/${props.videoId}` }}
						/>
						<View style={styles.innerModalView}>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModal(false)}
							>
								<Text style={styles.modalText}>CLOSE</Text>
							</Pressable>
						</View>
					</View>
				</Modal>
			</TouchableOpacity>
		</View>
	);
};

export default MiniCard;

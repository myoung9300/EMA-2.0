import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MiniCard from '../Youtube/miniCard';
import { API_KEY } from '../basic/Basic.Player';

const PlaylistKey = 'PLTCcbu_9GgTgfz3cjeqyBWTDu5L0GqHOg';

const Level3Player = () => {
	const [miniCardData, setMiniCard] = useState('');
	const [loading, setLoading] = useState(true);
	const fetchData = () => {
		fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PlaylistKey}&maxResults=50&key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setMiniCard(data.items);
				setLoading(false);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<View style={styles.container}>
			<FlatList
				onRefresh={() => fetchData()}
				refreshing={loading}
				data={miniCardData}
				renderItem={({ item }) => {
					return (
						<MiniCard
							id={item.id}
							channel={item.snippet.channelTitle}
							videoId={item.snippet.resourceId.videoId}
							title={item.snippet.title}
							description={item.snippet.description}
						/>
					);
				}}
				keyExtractor={(item) => item.snippet.resourceId.videoId}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#006eff',
	},
});

export default Level3Player;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#006eff',
	},
	text: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		paddingTop: 5,
	},
	area: {
		padding: 40,
		margin: 10,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: 'white',
		fontSize: 30,
		fontFamily: 'Marker Felt',
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},
	signOut: {
		textAlign: 'center',
		color: '#ff00bb',
		fontSize: 24,
		fontWeight: 'bold',
	},
	image: {
		alignSelf: 'center',
		borderRadius: 10,
		width: '90%',
		height: 120,
	},
	break: {
		padding: 16,
	},
	smallText: {
		fontSize: 10,
		alignSelf: 'center',
		color: 'white',
	},
	bigText: {
		paddingTop: 200,
		color: 'white',
		fontSize: 28,
		textAlign: 'center',
	},
	tabBarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	tabBarContainer2: {
		borderRadius: 5,
		backgroundColor: 'white',
	},
	button: {
		color: 'black',
		marginLeft: 20,
		marginRight: 20,
		fontSize: 12,
		fontWeight: 'bold',
	},
});

export default styles;

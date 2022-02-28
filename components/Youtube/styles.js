import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
	},
	outerModalView: {
		height: Dimensions.get('screen').height / 2,
		marginTop: 100,

		backgroundColor: '#000000aa',
		borderRadius: 20,
		alignItems: 'center',
	},
	innerModalView: {
		margin: 10,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: '#006eff',
	},
	modalText: {
		margin: 2,
		fontSize: 24,
		color: 'white',
		fontFamily: 'Marker Felt',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default styles;

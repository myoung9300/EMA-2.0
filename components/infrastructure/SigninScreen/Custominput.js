import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const CustomInput = ({
	control,
	name,
	rules = {},
	placeholder,
	secureTextEntry,
}) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error },
			}) => (
				<>
					<SafeAreaView
						style={[
							styles.container,
							{ borderColor: error ? 'red' : '#f9fbfc' },
						]}
					>
						<TextInput
							style={styles.input}
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholder={placeholder}
							secureTextEntry={secureTextEntry}
							enablesReturnKeyAutomatically={true}
							autoCapitalize={'none'}
						/>
					</SafeAreaView>
					{error && (
						<Text style={{ color: 'red', alignSelf: 'stretch' }}>
							{error.message || 'ERROR'}
						</Text>
					)}
				</>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: '100%',
		height: 35,
		borderColor: '#e8e8e8',
		borderWidth: 2,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 5,
	},
	input: {
		textAlign: 'center',
		fontSize: 18,
	},
	error: {
		color: 'red',
		alignSelf: 'stretch',
	},
});
export default CustomInput;

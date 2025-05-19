import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
import { useNavigation } from '@react-navigation/native';
export default () => {
	const [textInput1, onChangeTextInput1] = useState('');
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.row}>
						<View style={styles.view}>
						</View>
						<View style={styles.box}>
						</View>
					</View>
					<View style={styles.column2}>
						<Image
							source={require('../assets/icon1.png')}
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
						<Image
							source={require('../assets/hoaqua2.png')} 
							resizeMode = {"stretch"}
							style={styles.image5}
						/>
					</View>
					<View style={styles.column3}>
						<View >
							<Image
						    source={require('../assets/Ellipse.png')}  
								resizeMode = {"stretch"}
								style={styles.absoluteImage}
							/>
						</View>
					</View>
				</View>
				<View style={styles.column4}>
					<View style={styles.column5}>
						<Text style={styles.text2}>
							{"What is your firstname?"}
						</Text>
						<TextInput
							placeholder={"Tony"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Trangchu')}>
						<Text style={styles.text3}>
							{"Start Ordering"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteImage: {
		position: "absolute",
		bottom:-10,
		left: 19,
		borderRadius: 32,
		width: 290,
		height: 15,
	},
	absoluteImage2: {
		position: "absolute",
		bottom: -3,
		right: 41,
		borderRadius: 32,
		width: 23,
		height: 9,
	},
	absoluteImage3: {
		position: "absolute",
		top: 0,
		right: 9,
		borderRadius: 32,
		width: 23,
		height: 9,
	},
	box: {
		flex: 1,
		alignSelf: "stretch",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#FFA451",
		borderRadius: 10,
		paddingVertical: 18,
	},
	column: {
		alignItems: "flex-start",
		backgroundColor: "#FFA451",
		paddingBottom: 34,
		marginBottom: 56,
	},
	column2: {
		alignItems: "flex-end",
		marginBottom: 5,
		marginLeft: 31,
	},
	column3: {
		paddingTop: 3,
		marginHorizontal: 37,
	},
	column4: {
		marginBottom: 88,
		marginHorizontal: 24,
	},
	column5: {
		marginBottom: 42,
	},
	image: {
		width: 16,
		height: 10,
		marginRight: 6,
	},
	image2: {
		width: 15,
		height: 10,
		marginRight: 5,
	},
	image3: {
		width: 24,
		height: 11,
	},
	image4: {
		borderRadius: 32,
		width: 50,
		height: 37,
	},
	image5: {
		borderRadius: 35,
		width: 335,
		height: 281,
	},
	image6: {
		borderRadius: 32,
		height: 12,
	},
	input: {
		color: "#C2BCBC",
		fontSize: 20,
		backgroundColor: "#F3F1F1",
		borderRadius: 10,
		paddingVertical: 13,
		paddingLeft: 24,
		paddingRight: 48,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 21,
		marginBottom: 88,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderRadius: 32,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 15,
		fontWeight: "bold",
	},
	text2: {
		color: "#27214D",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 17,
		marginLeft: 1,
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	view: {
		backgroundColor: "#FF3B30",
		borderRadius: 32,
		paddingVertical: 2,
	},
});
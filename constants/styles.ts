import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		marginTop: 50,
		alignItems: "center",
	},
	keyboardAvoidContainer: {
		flex: 1,
		width: "100%",
	},
	h1: {
		fontSize: 34,
		color: colors.text,
	},
	cardGroup: {
		flexDirection: "row",
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		gap: 20,
	},
	cardContainer: {
		width: "100%",
		backgroundColor: colors.primary,
		borderRadius: 10,
		padding: 20,
		marginTop: 20,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
	},
	cardHeader: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cardHeaderText: {
		fontSize: 20,
		color: colors.white,
		textAlign: "center",
		fontWeight: "bold",
	},
	screenHeader: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		marginBottom: 20,
	},
	backButton: {
		padding: 10,
		marginRight: 10,
	},
	formContainer: {
		width: "90%",
		justifyContent: "flex-start",
		alignSelf: "center",
	},
	inputGroup: {
		marginTop: 20,
		marginHorizontal: 10,
	},
	inputSplit: {
		flexDirection: "row",
		gap: 20,
		justifyContent: "space-between",
		paddingHorizontal: 10,
	},
	inputSplitContainer: {
		flex: 1,
		paddingTop: 20,
		width: "100%",
	},
	input: {
		width: "100%",
		paddingHorizontal: 10,
		borderWidth: 2,
		borderColor: colors.border,
		borderRadius: 8,
	},
	inputLabel: {
		fontSize: 10,
		paddingLeft: 5,
		paddingTop: 5,
		fontWeight: "bold",
	},
	buttonContainer: {
		width: "85%",
		alignSelf: "center",
		marginBottom: 55,
		marginTop: 25,
	},

	dropdown: {
		height: 45,
		width: "100%",
		borderWidth: 2,
		borderColor: colors.border,
		borderRadius: 8,
		paddingHorizontal: 10,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
	switchContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
		paddingTop: 20,
	},
	switchLabel: {
		fontSize: 10,
		paddingLeft: 5,
		paddingTop: 5,
		fontWeight: "bold",
	},
	inputError: {
		borderColor: colors.error,
	},
	errorText: {
		color: colors.error,
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		backgroundColor: colors.background,
		borderRadius: 10,
		padding: 20,
		width: "80%",
		maxWidth: 400,
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 15,
		color: colors.text,
	},
	modalHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
	},
	modalText: {
		fontSize: 16,
		marginBottom: 20,
		color: colors.text,
		textAlign: "center",
	},
	modalButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		gap: 20,
	},
	modalButton: {
		padding: 10,
		borderRadius: 5,
		minWidth: 120,
		height: 45,
		alignItems: "center",
		justifyContent: "center",
	},
	editButton: {
		backgroundColor: colors.secondary,
		padding: 8,

		borderRadius: 8,
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	cancelButton: {
		padding: 8,
		backgroundColor: colors.error,
		borderRadius: 8,
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	modalButtonText: {
		color: colors.text,
		fontSize: 16,
		fontWeight: "500",
	},
	disabledButton: {
		opacity: 0.5,
	},
	disabledButtonText: {
		color: colors.text,
	},
	messageContainer: {
		padding: 15,
		borderRadius: 8,
		marginHorizontal: 20,
		marginTop: 10,
		width: "90%",
	},
	successMessage: {
		backgroundColor: "#d4edda",
		borderColor: "#c3e6cb",
	},
	errorMessage: {
		backgroundColor: "#f8d7da",
		borderColor: "#f5c6cb",
	},
	messageText: {
		color: "#721c24",
		fontSize: 16,
		textAlign: "center",
	},
	customerList: {
		width: "100%",
		padding: 20,
		alignItems: "flex-start",
	},
	customerName: {
		fontSize: 18,
		color: colors.text,
		paddingVertical: 10,
		textAlign: "left",
		paddingLeft: 10,
	},
	customerItemContainer: {
		width: "100%",
	},
	customerItemContent: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 0,
	},
	customerItemBorder: {
		width: "100%",
		height: 1,
		backgroundColor: colors.border,
	},
	deleteButton: {
		padding: 8,
		backgroundColor: colors.error,
		borderRadius: 8,
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	deleteConfirmContainer: {
		padding: 20,
		alignItems: "center",
	},
});

import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Avatar,
	Box,
	Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { IconButton, Tooltip } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";

// Custom styles
const useStyles = makeStyles({
	card: {
		width: "100%",
		height: "100%",
		borderRadius: "12px", // Rounded corners
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
		overflow: "hidden", // Ensures rounded corners are applied
		position: "relative", // Ensure proper absolute positioning for avatar
	},
	header: {
		background: "linear-gradient(135deg, #43a047, #00796b)", // Gradient background
		padding: "16px",
		color: "white",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		position: "relative",
		height:"30"
	},
	avatar: {
		backgroundColor: "#A1887F",
		color: "white",
		width: 55, // Increased size for visibility
		height: 55, // Increased size for visibility
		position: "absolute",
		top: "1%", // Center it between header and content
		left: "85%",
		transform: "translate(-50%, -50%)", // Center horizontally and vertically
		zIndex: 1, // Ensure it stays above both sections
		border: "3px solid white", // To make the avatar stand out
	},
	content: {
		padding: "20px 16px", // Increase padding to extend the white part
		position: "relative",
		height: "150px", // Adjust the height to make the middle white part longer
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end", // Pushes the content to the bottom
		zIndex: 0, // Content stays below the avatar
	},
	divider: {
		marginBottom: "8px", // Decrease space below the divider
	},
	iconBox: {
		display: "flex",
		gap: "8px",
		justifyContent: "flex-end",
	},
});

const ClassroomCard = ({ courseName, instructor, avatarLetter }) => {
	const classes = useStyles();

	return (
		<Card
			className={classes.card}
			sx={{
				transition: "all 0.2s ease-in-out", // Smooth transition for all properties
				"&:hover": {
					transform: "scale(1.05)",
					boxShadow:
						"AQrgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", // Custom box shadow on hover
				},
			}}
		>
			<Box className={classes.header}>
				<Typography variant="h6">{courseName}</Typography>
			</Box>

			{/* Central Avatar */}
			<Avatar className={classes.avatar}>{avatarLetter}</Avatar>

			<CardContent className={classes.content}>
				<Typography variant="body1" style={{ marginBottom: "auto" }}>
					{instructor}
				</Typography>

				{/* Divider line closer to icons */}
				<Divider className={classes.divider} />

				{/* Icon Box */}
				<Box className={classes.iconBox}>
					<Tooltip title="Contacts" arrow placement="top">
						<IconButton aria-label="fingerprint" color="info">
							<ContactsIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="View Folder" arrow placement="top">
						<IconButton aria-label="fingerprint" color="info">
							<FolderOpenOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ClassroomCard;

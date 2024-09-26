import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectSemester() {
  return (
		<Box sx={{ minWidth: 120, bgcolor: "white", borderRadius: 1 }}>
			<FormControl fullWidth>
				<InputLabel variant="standard" htmlFor="uncontrolled-native">
					Semester
				</InputLabel>
				<NativeSelect
					defaultValue={5}
					inputProps={{
						number: "semester",
						id: "uncontrolled-native",
					}}
					sx={{
						"& .MuiNativeSelect-select": {
							// paddingLeft: 10, // Adjust this value to move the options to the right
							paddingLeft: 1, // Adjust this value to move the options to the right
						},
					}}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
					<option value={7}>7</option>
					<option value={8}>8</option>
				</NativeSelect>
			</FormControl>
		</Box>
	);
}
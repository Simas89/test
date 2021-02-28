import React from 'react';
import styled from 'styled-components';
import { flexCenter } from 'common/utils';
import { ProgressBar } from 'common/components';
import { Fab, Typography } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Form = styled.form`
	margin-bottom: 20px;
	${flexCenter('column')}
	input {
		display: none;
	}

	.MuiSvgIcon-root {
		color: white;
	}

	.output {
		width: 100%;
	}
`;

const UploadForm = () => {
	const [file, setFile] = React.useState(null);
	const inputRef = React.useRef(null);

	const handleChange = (e) => {
		const selected = e.target.files[0];

		if (selected) {
			setFile(selected);
		}
	};

	const clickHandler = () => {
		console.log(inputRef.current.click());
	};

	return (
		<Form>
			<Fab color="primary" onClick={clickHandler}>
				<AddAPhotoIcon />
			</Fab>
			<input
				ref={inputRef}
				type="file"
				accept="image/x-png,image/gif,image/jpeg"
				onChange={handleChange}
			/>
			<div className="output">
				{file && (
					<>
						<Typography variant="h6" color="secondary" align="center">
							{file.name}
						</Typography>
						<ProgressBar file={file} setFile={setFile} />
					</>
				)}
			</div>
		</Form>
	);
};

export default UploadForm;

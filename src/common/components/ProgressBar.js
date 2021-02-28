import React from 'react';
import styled from 'styled-components';
import useStorage from 'common/hooks/useStorage';
import { motion } from 'framer-motion';

const Div = styled.div`
	align-self: flex-start;
	height: 5px;
	background-color: ${(p) => p.theme.palette.primary.main};
`;

const MotionDiv = motion(Div);

export const ProgressBar = ({ file, setFile }) => {
	const { url, progress } = useStorage(file);

	React.useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);
	return (
		<MotionDiv
			initial={{ width: 0 }}
			animate={{ width: `${progress}%` }}
		></MotionDiv>
	);
};

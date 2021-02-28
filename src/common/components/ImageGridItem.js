import React from 'react';
import styled from 'styled-components';
import { flexCenter } from 'common/utils';
import { Box, Grid } from '@material-ui/core';
import { motion } from 'framer-motion';

const StyledGrid = styled(Grid)`
	max-height: 300px;
	min-height: 200px;
	opacity: 0.9;

	&:hover {
		cursor: pointer;
	}

	.MuiBox-root {
		flex: 1;
		overflow: hidden;
		${flexCenter()}

		img {
			min-width: 100%;
			min-height: 100%;
			object-fit: cover;
		}
	}
`;

const MotonGrid = motion(StyledGrid);

export const ImageGridItem = ({ src, onClick }) => {
	return (
		<MotonGrid
			whileHover={{ opacity: 1 }}
			layout={1}
			item
			xs={12}
			sm={6}
			md={4}
			onClick={onClick}
		>
			<Box height="100%">
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					src={src}
					alt="uploaded"
				/>
			</Box>
		</MotonGrid>
	);
};

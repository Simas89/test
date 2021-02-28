import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import useFirestore from 'common/hooks/useFirestore';
import { ImageGridItem } from 'common/components';

const StyledGrid = styled(Grid)``;

const ImageGrid = ({ setSelectedImage }) => {
	const { docs } = useFirestore('images');

	const handleClick = (url) => {
		setSelectedImage(url);
	};

	return (
		<StyledGrid container spacing={4}>
			{docs &&
				docs.map((el) => (
					<ImageGridItem
						onClick={() => handleClick(el.url)}
						key={el.id}
						src={el.url}
					/>
				))}
		</StyledGrid>
	);
};

export default ImageGrid;

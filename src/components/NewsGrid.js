import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import useFlameLinkArticles from 'common/hooks/useFlameLinkArticles';
import { NewsGridItem } from 'common/components';

const StyledGrid = styled(Grid)`
	margin-top: 20px;
`;

const NewsGrid = () => {
	const history = useHistory();
	const { docs } = useFlameLinkArticles();

	const handleClick = (id) => {
		console.log(id);
		history.push(`/article/${id}`);
	};

	return (
		<StyledGrid container spacing={4}>
			{docs &&
				docs.map((el) => (
					<NewsGridItem
						onClick={() => handleClick(el.id)}
						key={el.id}
						doc={el}
					/>
				))}
		</StyledGrid>
	);
};

export default NewsGrid;

import React from 'react';
import styled from 'styled-components';
import useFlameLinkArticle from 'common/hooks/useFlameLinkArticle';
import { Typography } from '@material-ui/core';
import Carousel from 'components/Carousel';
import { motion } from 'framer-motion';
import pageVariants from 'config/pageVariants';

const Div = styled.div`
	margin-top: 50px;
`;

const MotionDiv = motion(Div);

const ArticleScreen = ({ match }) => {
	const { doc } = useFlameLinkArticle(match.params.id);
	console.log(doc);
	return (
		<MotionDiv
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
		>
			<Typography variant="h3">{doc.header}</Typography>
			<Typography variant="h5" color="primary">
				<i>{doc.subHeader}</i>
			</Typography>

			<div dangerouslySetInnerHTML={{ __html: doc.body }} />
			{doc.galeryImages && <Carousel images={doc.galeryImages} />}
		</MotionDiv>
	);
};

export default ArticleScreen;

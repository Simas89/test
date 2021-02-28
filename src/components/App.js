import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';
import HomeScreen from 'screens/HomeScreen';
import ArticleScreen from 'screens/ArticleScreen';
import { AnimatePresence } from 'framer-motion';

const StyledContainer = styled(Container)`
	.link {
		text-decoration: none;
		color: ${(p) => p.theme.palette.text.secondary};
	}
`;

const App = () => {
	return (
		<StyledContainer maxWidth="lg">
			<Link className="link" to="/">
				<Typography variant="h4">Firebase x Flamelink</Typography>
			</Link>
			<AnimatePresence>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route path="/article/:id" component={ArticleScreen} />
				</Switch>
			</AnimatePresence>
		</StyledContainer>
	);
};

export default App;

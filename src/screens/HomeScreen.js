import React from 'react';
import { Tabs, Tab, Box } from '@material-ui/core';
import UploadForm from 'components/UploadForm';
import ImageGrid from 'components/ImageGrid';
import NewsGrid from 'components/NewsGrid';
import ImageModal from 'components/ImageModal';
import { motion } from 'framer-motion';

import pageVariants from 'config/pageVariants';

const HomeScreen = () => {
	const [selectedImage, setSelectedImage] = React.useState(null);

	const [tab, setTab] = React.useState(0);

	const handleChange = (event, newValue) => {
		setTab(newValue);
	};

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
		>
			<Tabs value={tab} indicatorColor="primary" onChange={handleChange}>
				<Tab label="News" disableRipple />
				<Tab label="Images" disableRipple />
			</Tabs>
			<Box height={10} />
			{tab ? (
				<>
					<UploadForm />
					<ImageGrid setSelectedImage={setSelectedImage} />
					<ImageModal
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
				</>
			) : (
				<>
					<NewsGrid />
				</>
			)}
		</motion.div>
	);
};

export default HomeScreen;

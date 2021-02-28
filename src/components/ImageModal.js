import React from 'react';
import styled from 'styled-components';
import { flexCenter } from 'common/utils';
import { motion } from 'framer-motion';

const Div = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	${flexCenter()}

	img {
		border: 3px solid white;
		box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.6);
		max-height: 90%;
		max-width: 90%;
	}
`;

const MotionDiv = motion.custom(Div);

const ImageModal = ({ selectedImage, setSelectedImage }) => {
	const handleClick = (e) => {
		if (e.target.getAttribute('id') === 'backdrop') {
			setSelectedImage(null);
		}
	};
	return selectedImage ? (
		<MotionDiv
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			onClick={handleClick}
			id="backdrop"
		>
			<motion.img
				initial={{ y: '-100vh', scale: 0 }}
				animate={{ y: 0, scale: 1 }}
				transition={{
					type: 'spring',
					damping: 15,
					restSpeed: 0.001,
					restDelta: 0.001,
				}}
				src={selectedImage}
				alt="large"
			/>
		</MotionDiv>
	) : null;
};

export default ImageModal;

import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Div = styled(Paper)`
	overflow: hidden;
	max-width: 800px;

	margin: 40px auto;

	display: flex;
	flex-direction: column;
	img {
		height: 500px;
		width: 100%;
		object-fit: cover;
	}
`;

export default function TextMobileStepper({ images }) {
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Div>
			<img src={images[activeStep]} alt={images[activeStep]} />
			<MobileStepper
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button
						size="small"
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
					>
						Next
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button
						size="small"
						onClick={handleBack}
						disabled={activeStep === 0}
					>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
		</Div>
	);
}

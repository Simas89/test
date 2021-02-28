import { css } from 'styled-components';

export const flexCenterBetween = () => {
	return css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`;
};
export const flexCenter = (direction = 'row') => {
	return css`
		display: flex;
		flex-direction: ${direction};
		justify-content: center;
		align-items: center;
	`;
};
export const gradientText = (color1 = 'white', color2 = '#2e4057') => {
	return css`
		background: -webkit-linear-gradient(${color1}, ${color2});
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	`;
};

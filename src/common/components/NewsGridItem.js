import React from 'react';
import styled from 'styled-components';
import { flexCenter, flexCenterBetween } from 'common/utils';
import { Paper, Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const StyledGrid = styled(Grid)`
	&:hover {
		cursor: pointer;
	}
	.wrapper {
		height: 400px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.image {
			position: relative;
			overflow: hidden;
			width: 100%;
			flex: 1;
			${flexCenter()}
			img {
				width: 100%;
				object-fit: cover;
			}
			.galery-count {
				position: absolute;
				color: white;
				left: 0;
				bottom: 0;
				height: 40px;
				width: 80px;
				${flexCenter()}

				background-color: ${(p) => p.theme.palette.primary.main};
				.MuiTypography-root {
					margin-left: 10px;
				}
			}
		}
		.sub-area {
			color: ${(p) => p.theme.palette.text.secondary};
			position: relative;
			width: 100%;
			padding: 20px;
			.secondary {
				${flexCenterBetween()}
				height: 30px;
				width: 100%;
				.read-min-count {
					${flexCenterBetween()}
				}
			}
		}
	}
`;

const MotonGrid = motion(StyledGrid);

const formatDate = (date) => {
	const dateString = Date(date);
	const dateArr = dateString.split(' ');
	let selectedDateArr = [];
	for (let i = 1; i < 4; i++) {
		selectedDateArr.push(dateArr[i]);
	}
	selectedDateArr = selectedDateArr.join(' ');

	return selectedDateArr;
};

export const NewsGridItem = ({ doc, onClick }) => {
	return (
		<MotonGrid
			layout={1}
			item
			xs={12}
			sm={6}
			md={4}
			onClick={onClick}
			whileHover={{ y: -10 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<Paper className="wrapper">
				<div className="image">
					<img src={doc.coverImage} alt="uploaded" />
					{doc.galeryImages && (
						<div className="galery-count">
							<PhotoCameraOutlinedIcon />
							<Typography variant="body1">
								<b>{doc.galeryImages}</b>
							</Typography>
						</div>
					)}
				</div>
				<div className="sub-area">
					<Typography variant="h6" noWrap color="textPrimary">
						<b>{doc.header}</b>
					</Typography>
					<Typography variant="body1" noWrap color="primary">
						<i>{doc.subHeader}</i>
					</Typography>
					<div className="secondary">
						<div className="read-min-count">
							<HourglassEmptyIcon />

							<Typography variant="subtitle2">
								{Number(doc.minRead).toFixed()}min. read
							</Typography>
						</div>

						<Typography variant="subtitle2">
							{formatDate(doc.createdAt)}
						</Typography>
					</div>
				</div>
			</Paper>
		</MotonGrid>
	);
};

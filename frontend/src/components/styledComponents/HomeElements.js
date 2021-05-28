import styled from 'styled-components';
import media from 'css-in-js-media';

export const ImageStyle = styled.img`
	width: 100%;
	display: block;
	object-fit: cover;
	${media('<tablet')} {
		display: none;
	}
`;

export const HeaderStyle = styled.h2`
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
	line-height: 1.3;
	margin-bottom: 40px;
	color: ${({ color }) => (color ? color : '#2b044d')};
	max-width: 100%;
	font-size: 3em;

	${media('>=desktop', '>=tablet')} {
		text-align: ${({ align }) => (align ? align : 'left')};
		font-size: ${({ font }) => (font ? font : '3em')};
	}
	${media('<tablet')} {
		text-align: center;
	}
`;

export const TextStyle = styled.div`
	color: #031e45;
	font-size: ${({ font }) => (font ? font : '1.5em')};
	line-height: 30px;
	margin-bottom: 2em;
	font-weight: 400;
	/* max-width: 300px; */
	text-align: center;

	${media('>=desktop', '>=tablet')} {
		text-align: ${({ align }) => (align ? align : 'center')};
	}
`;

export const FeatureCard = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	text-align: center;
	height: 100%;
	margin-left: 1rem;
	margin-right: 1rem;
	padding: 2rem 0.5rem;

	${media('<=tablet')} {
		flex-direction: column;
		text-align: left;
	}
`;

export const FeatureImage = styled.span`
	border: 1px solid #e5e7eb;
	text-align: center;
	border-radius: 50%;
	padding: 1.5rem;
	flex-shrink: 0;
	position: relative;
	margin-bottom: 1em;

	& > img {
		width: 2.5rem;
		height: 2.5rem;
	}
`;

export const CartLayout = styled.div`
	${media('<=tablet')} {
		flex-direction: row;
		align-items: flex-start;
		text-align: left;
	}
	flex-direction: row;
	align-items: flex-start;
	text-align: left;
`;

export const FeatureTitle = styled.span`
	margin: 1rem 0;
	font-weight: 700;
	font-size: ${({ font }) => (font ? font : '1.5rem')};
	line-height: 1;
	color: black;
`;

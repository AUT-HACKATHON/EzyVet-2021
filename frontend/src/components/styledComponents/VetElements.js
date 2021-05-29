import styled from 'styled-components';
import media from 'css-in-js-media';

export const VetCardContainer = styled.div`
	height: 100%;
	flex-direction: column;
	/* max-width: 20rem; */
	position: relative;
	display: flex;
	/* width: 250px  */
	${media('>=tablet')} {
		border-width: 1px;
		border-top-left-radius: 2.5rem;
	}

	& > .imgCard {
		width: 100%;
		display: block;
		object-fit: cover;
	}
`;

export const VetCard = styled.div`
	min-height: 430px;
	/* height: 100%; */
	flex-direction: column;
	max-width: 25rem;
	width: 15em;
	position: relative;
	border: 1px solid #a1a1a1;
	display: flex;
	color: '#f8f8f8';
	${media('>=tablet')} {
		min-height: 480px;

		border-width: 1px;
		border-top-left-radius: 2.5rem;
		border-bottom-right-radius: 3rem;
	}

	& > .imgCard {
		width: 100%;
		display: block;
		object-fit: cover;
	}
`;
export const VetCardBody = styled.div`
	${media('>=tablet')} {
		padding: 1.2rem 2rem;
	}

	padding: 0.4rem 0.8rem;

	&:after,
	:before {
		box-sizing: border-box;
		border: 0 solid #e5e7eb;
	}
`;

export const VetCardTitle = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 0.9em;
	${media('>=tablet')} {
		flex-direction: row;
		-webkit-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		align-items: center;
	}
`;

export const VetCardContent = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 0.7em;
	color: #565656;
	${media('>=tablet')} {
		flex-direction: row;
		-webkit-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		align-items: center;
	}
`;

export const VetCardImg = styled.div`
	background-image: ${({ img }) => (img ? `url(${img})` : 'unavailable')};
	width: 100%;
	height: 14rem;
	/* display: ${({ img }) => (img ? 'inline' : 'none')}; */
	background-size: cover;
	background-position: center center;
	border-radius: 0.25rem;

	${media('>tablet')} {
		height: 16rem;
		border-radius: 2.5rem 0px 0px;
	}
`;

export const VetCardButton = styled.button`
	padding: 0.75rem 2rem;
	font-weight: 700;
	border-radius: 0.25rem;
	background-color: rgba(100, 21, 255);
	color: rgba(247, 250, 252);
	/* transition: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
	transition-duration: 300ms; */
	transition: all 0.4s linear;
	${media('>=tablet')} {
		border-radius: 0px 0px 2.5rem;
	}
	&:hover {
		background-color: #8c0085;
		font-size: 1.05em;
	}
`;

// export const VetCardInfo =

export const ProfileImage = styled.img`
	width: 100%;
	max-width: 150px;
	border-radius: 50%;
	display: block;
	object-fit: cover;
`;

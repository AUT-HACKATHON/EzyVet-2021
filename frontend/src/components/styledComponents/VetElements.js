import styled from 'styled-components';
import media from 'css-in-js-media';

export const VetCard = styled.div`
	height: 100%;
	flex-direction: column;
	max-width: 24rem;
	position: relative;
	display: flex;

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

export const VetCardTitle = styled.div`
	display: flex;
	flex-direction: column;

	${media('>=tablet')} {
		flex-direction: row;
		-webkit-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		align-items: center;
	}
`;

export const VetCardImg = styled.div`
	background-image: ${({ img }) => (img ? img : 'unavailable')};
	width: 100%;
	height: 14rem;
	background-size: cover;
	background-position: center center;
	border-radius: 0.25rem;

	${media('>tablet')} {
		height: 16rem;
		border-radius: 2.5rem 0px 0px;
	}
`;

export const ProfileImage = styled.img`
	width: 100%;
	display: block;
	object-fit: cover;
`;

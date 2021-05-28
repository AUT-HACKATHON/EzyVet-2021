import styled from 'styled-components';
import media from 'css-in-js-media';

export const VetCard = styled.img`
	width: 100%;
	display: block;
	object-fit: cover;
	${media('<tablet')} {
		display: none;
	}
`;

import styled from 'styled-components';
import media from 'css-in-js-media';

export const VetCard = styled.div`
	width: 100%;
	display: block;
	object-fit: cover;

	${media('>=tablet')} {
		border-width: 1px;
		border-top-left-radius: 2.5rem;
	}

	${media('<tablet')} {
		display: none;
	}

	& > div {
	}
`;

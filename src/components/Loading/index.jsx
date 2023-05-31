import { css } from '@emotion/core';
import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

const override = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

function Loading(props) {
	return (
		<div>
			<SyncLoader css={override} size={25} color='#0DAB42' />
		</div>
	);
}

export default Loading;

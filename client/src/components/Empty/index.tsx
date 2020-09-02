import React, { FC } from 'react';
import Card from '../../elements/Card';
import Icon from '../../elements/Icon';

const Empty: FC = () => {
	return (
		<Card>
			<Icon type={'Preview'} />
		</Card>
	);
};

export default Empty;

import { render } from '@testing-library/react';
import React from 'react';
import { Description } from '@src/components/UI/Description/Description';

describe('Description', () => {
	it('should render Description with correct text', () => {
		const text = 'Test Description';
		const { getByText } = render(<Description>{text}</Description>);
		const description = getByText(text);
		expect(description).toBeInTheDocument();
	});
	it('should render Description with correct style', () => {
		const text = 'Test Description';
		const component = (
			<Description
				margin="5px 10px"
				fz="15px"
				color="#ff000"
				height='20px'
				align='center'
			>
				{text}
			</Description>
		);
		const { getByText } = render(component);
		const description = getByText(text);
		expect(description).toHaveStyle('margin: 5px 10px; font-size: 15px; color: #ff000; height: 20px; text-align: center');
	});
});

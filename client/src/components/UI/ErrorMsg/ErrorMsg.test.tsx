import { render } from '@testing-library/react';
import React from 'react';
import { ErrorMsg } from '@src/components/UI/ErrorMsg/ErrorMsg';

describe('Error Message', () => {
	it('should render with correct text', () => {
		const text = 'Test Error';
		const { getByText } = render(<ErrorMsg show>{text}</ErrorMsg>);
		const errorMsg = getByText(text);
		expect(errorMsg).toBeInTheDocument();
	});
	it('should render with correct styles', () => {
		const text = 'Test Error';
		const { getByTestId } = render(<ErrorMsg show={false} margin='5px 10px'>{text}</ErrorMsg>);
		const errorMsg = getByTestId('errorMsg');
		expect(errorMsg).toHaveStyle('margin: 5px 10px');
	});
	it('Shouldn"t be rendered with text', () => {
		const text = 'Test Error';
		const { getByTestId } = render(<ErrorMsg show={false}>{text}</ErrorMsg>);
		const errorMsg = getByTestId('errorMsg');
		expect(errorMsg.childNodes.length as number).toBe(0);
	});
});

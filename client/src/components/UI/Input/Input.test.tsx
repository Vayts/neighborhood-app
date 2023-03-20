import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Input } from './Input';

describe('Button', () => {
	it('should render input with the correct value', () => {
		const text = 'test';
		const { getByRole } = render(<Input
			onChange={() => null}
			value={text}
			id='testId'
			name='testName'
		/>);
		const input = getByRole('textbox');
		expect(input).toHaveValue(text);
	});
	it('onChange func should been called correct', () => {
		const data = {
			value: '1',
		};
		const onChange = jest.fn();
		const { getByRole } = render(<Input
			onChange={(value: string) => onChange(value)}
			value={data.value}
			id='testId'
			name='testName'
		/>);
		const input = getByRole('textbox');
		fireEvent.change(input, { target: { value: '2' } });
		expect(onChange).toHaveBeenCalled();
	});
	it('input should render with correct style', () => {
		const data = {
			value: '1',
		};
		const onChange = jest.fn();
		const { getByRole } = render(<Input
			onChange={(value: string) => onChange(value)}
			value={data.value}
			id='testId'
			name='testName'
			padding='20px 40px'
		/>);
		const input = getByRole('textbox');
		expect(input).toHaveStyle('padding: 20px 40px');
	});
	it('input wrapper should render with correct style', () => {
		const data = {
			value: '1',
		};
		const onChange = jest.fn();
		const { getByRole } = render(<Input
			onChange={(value: string) => onChange(value)}
			value={data.value}
			id='testId'
			name='testName'
			margin='10px 30px'
			padding='20px 40px'
		/>);
		const input = getByRole('textbox');
		expect(input.parentNode.parentNode).toHaveStyle('margin: 10px 30px');
	});
});

import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {Input} from './index';

test('renders for component', () => {
    render(<Input placholder="test" />);
    const input = screen.getByPlaceholderText('test');

    expect(input).toBeInTheDocument();
})

test('change event for input component', () => {

        const handleChange = jest.fn();

        render(<Input placholder="test"/>);
        const input = screen.getByPlaceholderText('test');

        fireEvent.change(input, {target: {value: 'test'}});
        expect(handleChange).toHaveValue('test');
})
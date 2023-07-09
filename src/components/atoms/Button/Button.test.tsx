import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// @ts-ignore
import { Button } from './Button';

test('render button component', () => {
    render(<Button />);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
})

test('button click', () => {

    const handleClick = jest.fn();

    render(<Button />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toBeCalled();
})
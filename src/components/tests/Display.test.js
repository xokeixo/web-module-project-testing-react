import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

import fetchShow from './../../api/fetchShow'
jest.mock('./../../api/fetchShow')


test('renders without errors with no props', ()=>{
    render(<Display/>)
});

test('renders Show component when the button is clicked ', ()=>{
    fetchShow.mockResolvedValueOnce(testShow)
    render(<Display/>)

    const button = screen.getByRole('button')
    userEvent.click(button)

    const show = await screen.findByTestId('show-container')
    expect(show).toBeInTheDocument()
});

test('renders show season options matching your data when the button is clicked', ()=>{
    fetchShow.mockResolvedValueOnce(testShow);
    render(<Display/>)

    const button = screen.getByRole('button')
    userEvent.click(button)

    const seasonOption = await screen.findByTestId('season-option')
    expect(seasonOption).toHaveLength(2)
});

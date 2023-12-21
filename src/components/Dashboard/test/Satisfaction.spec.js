import React from 'react'
import { screen } from '@testing-library/dom'
import Satisfaction from '../Satisfaction'
import { renderWithProviders } from '../../../test/test-utils'

const mockChildComponent = jest.fn();
jest.mock("../Satisfaction", () => (props) => {
    mockChildComponent(props);
    return <mock-childComponent />;
});

describe('Satisfaction Component', () => {
    it('renders Statisfaction Component', async () => {
        renderWithProviders(<Satisfaction />)
    })

    it('MainSection is passed consultant id, SatisfactionComponent is called with prop id', () => {
        renderWithProviders(<Satisfaction consultant="1" />);
        expect(mockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                consultant: "1",
            })
        );
    });

    it('Statisfaction Component DOM Testing', () => {
        const text = screen.queryAllByText(/satisfaction/i)
        expect(text).toBeDefined()
        const percent = screen.queryAllByText(/\b([1-9]|[1-9][0-9]|100)\b/)
        expect(percent).not.toBeNull()
        expect(percent).toBeDefined()
    })
})
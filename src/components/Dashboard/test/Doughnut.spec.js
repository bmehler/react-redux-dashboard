import React from 'react'
import { screen } from '@testing-library/react'
import Doughnut from '../Doughnut'
import { renderWithProviders } from '../../../test/test-utils'

const MockChildComponent = jest.fn();
jest.mock("../Doughnut", () => (props) => {
    MockChildComponent(props);
    return <mock-childComponent />;
});

describe('Doughnut Component', () => {
    it('renders Doughnut Component', async () => {
        renderWithProviders(<Doughnut />)
    })

    it('MainSection is passed consultant id, TargetComponent is called with prop id', () => {
        renderWithProviders(<Doughnut consultant="1" />);
        expect(MockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                consultant: "1",
            })
        );
    })

    it('Doughunt Component DOM Testing', () => {
        const text = screen.queryAllByText(/sales euro/i)
        expect(text).toBeDefined()
    })
})
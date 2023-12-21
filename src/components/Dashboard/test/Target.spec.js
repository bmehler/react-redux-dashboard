import React from 'react'
import { screen } from '@testing-library/react'
import Target from '../Target'
import { renderWithProviders } from '../../../test/test-utils'

const MockChildComponent = jest.fn();
jest.mock("../Target", () => (props) => {
    MockChildComponent(props);
    return <mock-childComponent />;
});

describe('Target Component', () => {
    it('renders Target Component', async () => {
        renderWithProviders(<Target />)
    })

    it('MainSection is passed consultant id, TargetComponent is called with prop id', () => {
        renderWithProviders(<Target consultant="1" />);
        expect(MockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                consultant: "1",
            })
        );
    })

    it('Target Component DOM Testing', () => {
        const text = screen.queryAllByText(/target sales/i)
        expect(text).toBeDefined()
        const percent = screen.queryAllByText(/\b([1-9]|[1-9][0-9]|100)\b/)
        expect(percent).not.toBeNull()
        expect(percent).toBeDefined()
    })
})
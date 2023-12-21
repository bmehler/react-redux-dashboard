import React from 'react'
import Circle from '../../Utilities/Icons/Circle'
import { renderWithProviders } from '../../../test/test-utils'

const mockChildComponent = jest.fn();
jest.mock("../../Utilities/Icons/Circle", () => (props) => {
    mockChildComponent(props);
    return <mock-childComponent />;
});

describe('Circle Component', () => {
    it('renders Circle Component', async () => {
        renderWithProviders(<Circle />)
    })

    it('MainSection is passed smiley value, CircleComponent is called with prop value', () => {
        renderWithProviders(<Circle circle="80" />);
        expect(mockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                circle: "80",
            })
        );
    });
})
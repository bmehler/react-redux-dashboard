import React from 'react'
import Stars from '../../Utilities/Icons/Stars'
import { renderWithProviders } from '../../../test/test-utils'

const mockChildComponent = jest.fn();
jest.mock("../../Utilities/Icons/Stars", () => (props) => {
    mockChildComponent(props);
    return <mock-childComponent />;
});

describe('Stars Component', () => {
    it('renders Simley Component', async () => {
        renderWithProviders(<Stars />)
    })

    it('MainSection is passed stars value, StarsComponent is called with prop value', () => {
        renderWithProviders(<Stars stars="100" />);
        expect(mockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                stars: "100",
            })
        );
    });
})
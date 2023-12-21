import React from 'react'
import Smiley from '../../Utilities/Icons/Smiley'
import { renderWithProviders } from '../../../test/test-utils'

const mockChildComponent = jest.fn();
jest.mock("../../Utilities/Icons/Smiley", () => (props) => {
    mockChildComponent(props);
    return <mock-childComponent />;
});

describe('Smiley Component', () => {
    it('renders Simley Component', async () => {
        renderWithProviders(<Smiley />)
    })

    it('MainSection is passed smiley value, SmileyComponent is called with prop value', () => {
        renderWithProviders(<Smiley smiley="100" />);
        expect(mockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                smiley: "100",
            })
        );
    });
})
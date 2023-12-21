import React from 'react'
import Bar from '../Bar'
import { renderWithProviders } from '../../../test/test-utils'

const MockChildComponent = jest.fn();
jest.mock("../Bar", () => (props) => {
    MockChildComponent(props);
    return <mock-childComponent />;
});

describe('Bar Component', () => {
    it('renders Bar Component', async () => {
        renderWithProviders(<Bar />)
    })

    it('MainSection is passed consultant id, BarComponent is called with prop id', () => {
        renderWithProviders(<Bar consultant="1" />);
        expect(MockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                consultant: "1",
            })
        );
    })
})
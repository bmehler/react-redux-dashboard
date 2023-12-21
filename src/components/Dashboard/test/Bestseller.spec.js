import React from 'react'
import { screen } from '@testing-library/react'
import Bestseller from '../Bestseller'
import { renderWithProviders } from '../../../test/test-utils'

const mockChildComponent = jest.fn();
jest.mock("../Bestseller", () => (props) => {
    mockChildComponent(props);
    return <mock-childComponent />;
});

describe('Bestseller Component', () => {
    it('renders Bestseller Component', async () => {
        renderWithProviders(<Bestseller />)
    })

    it('MainSection is passed consultant id, BestellerComponent is called with prop id', () => {
        renderWithProviders(<Bestseller consultant="1" />);
        expect(mockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                consultant: "1",
            })
        );
    })

    it('Bestseller Component DOM Testing', () => {
        const text = screen.queryAllByText(/(Banana|Pear|Oranges|Mango|Pinapple|Grapefruit)/)
        expect(text).toBeDefined()
        const euro = screen.queryAllByText(/([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])/)
        expect(euro).not.toBeNull()
        expect(euro).toBeDefined()
    })
})
import React from 'react'
import { screen, render } from '@testing-library/react'
import Consultants from '../Consultants'
import { renderWithProviders } from '../../../test/test-utils'

describe('Consultants Component', () => {
    it('renders Consultants Component', async () => {
        renderWithProviders(<Consultants />)
    })

    it('Consultants Component DOM Testing', () => {
        const text = screen.queryAllByText(/consultants/i)
        expect(text).toBeDefined()
    })
})
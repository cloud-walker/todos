import React from 'react'
import {render} from '@testing-library/react'

import {TodosList} from '.'

test('it should work properly', () => {
  const {getByText} = render(<TodosList />)

  expect(getByText('Comprare la nutella')).toBeVisible()
})

import React from 'react'

import { Statistic } from 'semantic-ui-react'

function DisplayBalance(props) {
  const {
    color,
    size='tiny',
    label,
    value,
  } = props

  return (
    <Statistic size={size} color={color}>
      <Statistic.Label styled={{ texAlign: 'left' }}>
        {label}
      </Statistic.Label>
      <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
    </Statistic>
  )
}

export default DisplayBalance

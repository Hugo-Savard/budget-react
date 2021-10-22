import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Form, Segment, Checkbox } from 'semantic-ui-react'

function EntryForm({ description, setDescription, value, setValue, isExpense, setIsExpense }) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          placeholder='New shinny thing'
          icon='tags'
          width={12}
          label='Description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label='Value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label='is expense'
          checked={isExpense}
          onChange={() => { setIsExpense(oldState => !oldState) }}
        />
      </Segment>
    </Fragment>
  )
}

export default EntryForm

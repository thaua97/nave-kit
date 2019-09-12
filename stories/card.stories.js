import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from 'src'

storiesOf('Card', module)
  .add('default', () => {
    return (
      <>
        <Card title='Type something' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
      </>
    )
  })
  .add('small', () => {
    return (
      <>
        <Card size='small' title='Type something' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
      </>
    )
  })
  .add('card + image', () => {
    return (
      <>
        <Card
          image='https://images.pexels.com/photos/994883/pexels-photo-994883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Type something'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </>
    )
  })
  .add('card small + image', () => {
    return (
      <>
        <Card
          size='small'
          image='https://images.pexels.com/photos/994883/pexels-photo-994883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Type something'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </>
    )
  })

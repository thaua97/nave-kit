import React from 'react'
import { storiesOf } from '@storybook/react'

import { Avatar } from 'src'

storiesOf('Avatar', module)
  .add('Without Image', () => {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '0 40px' }} />
        <Avatar size='small' text='AA' />
        <div style={{ padding: '0 20px' }} />
        <Avatar size='medium' text='AA' />
        <div style={{ padding: '0 20px' }} />
        <Avatar size='large' text='AA' />
        <div style={{ padding: '0 20px' }} />
        <Avatar size='xlarge' text='AA' />
      </div>
    )
  })
  .add('With Image', () => {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '0 40px' }} />
        <Avatar size='small' image='https://api.adorable.io/avatars/285/small@adorable.png' />
        <div style={{ padding: '0 20px' }} />
        <Avatar size='medium' image='https://api.adorable.io/avatars/285/crazy@adorable.png' />
        <div style={{ padding: '0 20px' }} />
        <Avatar size='large' image='https://api.adorable.io/avatars/285/abott@adorable.png' />
        <div style={{ padding: '0 20px' }} />
        <Avatar size='xlarge' image='https://api.adorable.io/avatars/285/bird@adorable.png' />
      </div>
    )
  })

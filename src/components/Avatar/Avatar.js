import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Typography } from 'src'
const Avatar = props => {
  const { size, image, text, color, ...rest } = props
  return (
    <Wrapper {...rest}>
      {image && <AvatarImage size={size} src={image} />}
      {text && (
        <AvatarText size={size} color={color}>
          {text}
        </AvatarText>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AvatarImage = styled.img`
  ${props =>
    props.size === 'small' &&
    css`
      width: 32px;
      height: 32px;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 56px;
      height: 56px;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      width: 72px;
      height: 72px;
    `}
  ${props =>
    props.size === 'xlarge' &&
    css`
      width: 128px;
      height: 128px;
    `}

  border-radius: 50%;
`

const AvatarText = styled(Typography)`
  ${props =>
    props.size === 'small' &&
    css`
      width: 32px;
      height: 32px;
      color: #fff;
      font-size: 0.875rem;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 56px;
      height: 56px;
      color: #fff;
      font-size: 1.25rem;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      width: 72px;
      height: 72px;
      color: #fff;
      font-size: 2rem;
    `}
  ${props =>
    props.size === 'xlarge' &&
    css`
      width: 128px;
      height: 128px;
      color: #fff;
      font-size: 3.25rem;
    `}

  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background: ${props => (props.color ? `${props.color}` : '#007DFE')};
`

Avatar.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Avatar

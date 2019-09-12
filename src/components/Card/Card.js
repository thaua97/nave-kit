import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import modifiers from 'src/helpers/modifiers'

import { Typography } from 'src'

const Card = props => {
  const { title, text, image, ...rest } = props

  return (
    <Wrapper {...rest}>
      {image && <CardImage src={image} alt='image' />}
      <CardContainer>
        <CardContent>
          {title && <CardTitle>{title}</CardTitle>}
          {text && <CardText>{text}</CardText>}
        </CardContent>
      </CardContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${props => modifiers(props)}

  width: 100%;
  height: 100%;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);

  ${props =>
    props.size === 'small' &&
    css`
      max-width: 304px;
      max-height: 385px;
    `}

  display: flex;
  flex-direction: column;
`
const CardImage = styled.img`
  height: 5%;
  width: 100%;
`

const CardContainer = styled.div`
  padding: 10%;
  display: flex;
`

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const CardTitle = styled(Typography)`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 23px;
`
const CardText = styled(Typography)`
  font-size: 1rem;
  line-height: 19px;
`

export default Card

import React from 'react'
import styled from 'styled-components'

function Card(props) {
	return (
		<CardStyled>
			<CardInner color={props.color}>{props.children}</CardInner>
		</CardStyled>
	)
}

const CardStyled = styled.div`
	display: inline-block;
	height: 95px;
	width: 100px;
	background: #fff;
	border-radius: 15px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
	padding: 8px;
`

const CardInner = styled.div`
	height: inherit;
	border-radius: 10px;
	position: relative;
	cursor: pointer;
	background: ${props => props.color === 'blue' && '#5dace2'};
`

export default Card

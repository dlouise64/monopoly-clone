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
	h1 {
		margin: 0;
		color: #fff;
		text-align: center;
		text-transform: uppercase;
		font-size: 16px;
		padding-top: 10px;
		letter-spacing: 1px;
	}
	p {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 15px;
		text-align: center;
		color: rgba(244, 244, 244, 0.8);
		margin: 0;
		letter-spacing: 1px;
	}
`

export default Card

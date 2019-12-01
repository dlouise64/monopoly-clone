import React from 'react'
import styled from 'styled-components'

function ExitButton() {
	return (
		<Exit>
			<Bottom></Bottom>
			<Top></Top>
			<X>X</X>
		</Exit>
	)
}

const Exit = styled.div`
	position: absolute;
	z-index: 1;
	right: 43px;
	top: 30px;
	cursor: pointer;
`
const Bottom = styled.div`
	position: absolute;
	top: 4px;
	height: 35px;
	width: 35px;
	border-radius: 50%;
	background: #9a2021;
	box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.26);
`

const Top = styled.div`
	position: absolute;
	height: 35px;
	width: 35px;
	border-radius: 50%;
	background-image: linear-gradient(-180deg, #f75c61 0%, #e0383b 100%);
	border: 3px solid #e97e83;
	box-sizing: border-box;
`
const X = styled.span`
	color: #fff;
	position: absolute;
	font-size: 20px;
	top: 6px;
	left: 0px;
	width: 35px;
	height: 35px;
	text-align: center;
	font-family: 'Lilita One';
	text-shadow: 0 2px 2px rgba(0, 0, 0, 0.31);
`

export default ExitButton

import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Flash } from '../images/flash.svg'
import { ReactComponent as Tap } from '../images/tap.svg'
import { ReactComponent as Airline } from '../images/airliner.svg'
import { ReactComponent as Train } from '../images/train.svg'

function Card(props) {
	function Icon(icon) {
		switch (icon) {
			case 'Electricity':
				return <Flash />
			case 'Water works':
				return <Tap />
			case 'Airlines':
				return <Airline />
			case 'Railway':
				return <Train />
			default:
				return null
		}
	}
	return (
		<>
			{props.type === 'empty' ? (
				<div></div>
			) : (
				<CardStyled>
					<CardInner color={props.type === 'place' ? props.color : '#fff'}>
						{props.type === 'place' && <Place>{props.children}</Place>}
						{props.type === 'utility' && (
							<Utility>
								<>
									{props.children}
									<div>
										{Icon(props.children[0].props.children)}
										{console.log(props.children[0].props.children)}
									</div>
								</>
							</Utility>
						)}
						{props.type === 'chance' && <Chance>{props.children}</Chance>}
						{props.type === 'community' && (
							<Community>{props.children}</Community>
						)}
						{props.type === 'text' && <Text>{props.children}</Text>}
					</CardInner>
				</CardStyled>
			)}
		</>
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
	background: ${props => (props.color !== undefined ? props.color : '#fff')};
`

const Place = styled.div`
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

const Utility = styled.div`
	text-align: center;
	> div {
		margin-top: 15px;
	}
	h1 {
		margin-top: 5px;
		font-size: 12px;
		color: #db9e9a;
		text-align: center;
		text-transform: uppercase;
	}
`

const Chance = styled.div`
	h1 {
		margin: 0;
		text-align: center;
		color: #9d8db5;
		padding-top: 15px;
		font-size: 48px;
	}
`

const Community = styled.div`
	h1 {
		margin: 0;
		text-align: center;
		color: #9d8db5;
		padding-top: 15px;
		font-size: 48px;
	}
`

const Text = styled.div`
	h1 {
		font-size: 24px;
		padding-top: 30px;
		color: #9d8db5;
		margin: 0;
		text-align: center;
		text-transform: uppercase;
	}
`

export default Card

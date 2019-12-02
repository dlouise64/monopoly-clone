import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Flash } from '../images/flash.svg'
import { ReactComponent as Tap } from '../images/tap.svg'
import { ReactComponent as Airline } from '../images/airliner.svg'
import { ReactComponent as Train } from '../images/train.svg'
import { ReactComponent as Jail } from '../images/jail.svg'

function Card(props) {
	const { type, color, children } = props
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
			{type === 'empty' ? (
				<div></div>
			) : (
				<CardStyled>
					<CardInner color={type === 'place' ? color : '#fff'}>
						{type === 'place' && <Place>{children}</Place>}
						{type === 'utility' && (
							<Utility>
								<>
									{children}
									<div>{Icon(children[0].props.children)}</div>
								</>
							</Utility>
						)}
						{type === 'chance' && <Chance>{children}</Chance>}
						{type === 'community' && <Community>{children}</Community>}
						{type === 'text' && (
							<Text>
								{children[0].props.children === 'Jail' ? (
									<JailWrapper>
										<Jail />
									</JailWrapper>
								) : (
									children
								)}
							</Text>
						)}
					</CardInner>
				</CardStyled>
			)}
		</>
	)
}

const JailWrapper = styled.div`
	position: relative;
	left: 16px;
	top: 13px;
	background: #9c89b8;
	height: 70px;
	width: 70px;
	text-align: center;
	border-radius: 50%;

	svg {
		position: absolute;
		top: 13px;
		left: 13px;
		height: 45px;
	}
`

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
	p {
		display: none;
	}
`

const Chance = styled.div`
	h1 {
		margin: 0;
		text-align: center;
		color: #9d8db5;
		padding-top: 15px;
		font-size: 50px;
	}
`

const Community = styled.div`
	h1 {
		margin: 0;
		text-align: center;
		color: #9d8db5;
		padding-top: 15px;
		font-size: 50px;
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

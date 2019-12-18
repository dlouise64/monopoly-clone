import React from 'react'
import styled from 'styled-components'
import ExitButton from './ExitButton'
import { ReactComponent as Star } from '../images/star.svg'
import { chanceCards, communityCards } from '../data/chanceCards'

function PreviewCard(props) {
	return (
		<PreviewCardWrapper color={props.card.color}>
			<div
				onClick={() =>
					props.handleExit({
						show: false,
						card: props.card
					})
				}>
				{props.card.name !== 'Jail' && <ExitButton />}
			</div>
			<header>
				<h1>
					{props.card.type === 'chance'
						? 'Chance'
						: props.card.type === 'community'
						? 'Community'
						: props.card.name}
				</h1>
			</header>

			{props.card.name === 'Jail' && (
				<>
					<Description type="jail">
						You have been imprisoned. Pay $70 to get out now or spend 2 turns in
						prison
					</Description>
					<Button color="#26af17">Pay $70</Button>
					<Button font="small">skip 2 turns</Button>
				</>
			)}

			{props.card.type === 'chance' && (
				<Description>
					{
						chanceCards[Math.floor(Math.random() * chanceCards.length)]
							.description
					}
				</Description>
			)}

			{props.card.type === 'community' && (
				<Description>
					{
						communityCards[Math.floor(Math.random() * communityCards.length)]
							.description
					}
				</Description>
			)}
			{props.card.description &&
				props.card.type !== 'chance' &&
				props.card.type !== 'community' && (
					<Description>{props.card.description}</Description>
				)}
			{props.card.property_details && (
				<>
					{props.card.type === 'utility' && (
						<StarWrapper>
							<Star />
							<Star />
							<Star />
						</StarWrapper>
					)}
					<PreviewCardTableWrapper>
						<PreviewCardTable
							price={props.card.property_details.price}
							rent={props.card.property_details.rent}
							mortgage={props.card.property_details.mortgage}
						/>
					</PreviewCardTableWrapper>
					<PreviewCardHotelsWrapper>
						<PreviewCardHotels
							rents={props.card.property_details.hotel_rents}
						/>
					</PreviewCardHotelsWrapper>
					{props.buy && props.buy && (
						<BuyButtons handleBuy={props.handleBuy} card={props.card} />
					)}
					{props.card.type === 'place' && (
						<p>
							Each hotel upgrade costs: $ {props.card.property_details.upgrade}
						</p>
					)}
					{props.card.type === 'utility' && (
						<p>
							Each upgrade costs $ {props.card.property_details.upgrade} and
							property can be upgraded till 3 stars
						</p>
					)}
				</>
			)}
		</PreviewCardWrapper>
	)
}

function Description(props) {
	return (
		<DescriptionInner type={props.type}>
			<p>{props.children}</p>
		</DescriptionInner>
	)
}
function PreviewCardHotels(props) {
	return (
		<table>
			<tbody>
				<tr>
					{props.rents &&
						props.rents.map((rent, i) => {
							return (
								<td key={i}>
									<PreviewCardHotelsInner>
										<Hotel count={i + 1} />
										<h2>Rent</h2>
										<p>$ {rent}</p>
									</PreviewCardHotelsInner>
								</td>
							)
						})}
				</tr>
			</tbody>
		</table>
	)
}

function BuyButtons(props) {
	return (
		<BuyButtonsWrapper>
			<Button color="#26af17" onClick={() => props.handleBuy(props.card)}>
				Buy
			</Button>
			<Button color="#2982c5">Pass</Button>
		</BuyButtonsWrapper>
	)
}
function Hotel(props) {
	return (
		<HotelWrapper>
			{Array.from(Array(props.count)).map((item, i) => (
				<span key={i} role="img" aria-label="hotel">
					🏠
				</span>
			))}
		</HotelWrapper>
	)
}

function PreviewCardTable(props) {
	return (
		<table>
			<tbody>
				<tr>
					<td>Price</td>
					<td>$ {props.price}</td>
				</tr>
				<tr>
					<td>Rent</td>
					<td>$ {props.rent}</td>
				</tr>
				<tr>
					<td>Mortgage</td>
					<td>$ {props.mortgage}</td>
				</tr>
			</tbody>
		</table>
	)
}

const Button = styled.button`
	padding: 3px 0 9px;
	width: ${props => (props.font === 'small' ? '200px' : '130px')};
	background: ${props => props.color};
	background-image: linear-gradient(
		-180deg,
		${props => (props.color === '#26af17' ? '#51de24' : '#3a84ec')} 0%,
		${props => (props.color === '#26af17' ? '#008521' : '#227ec7')} 100%
	);
	margin-right: 10px;
	color: rgba(244, 244, 244, 0.5);
	font-size: ${props => (props.font === 'small' ? '20px' : '22px')};

	border-radius: 13px;
	letter-spacing: 2px;
	text-shadow: 1px 1px white, -1px -1px #555;
	box-shadow: 0 6px 0px
		${props => (props.color === '#26af17' ? '#074f07' : '#2065a2')};
	border: 1px solid
		${props => (props.color === '#26af17' ? '#51c254' : '#299ddd')};
	text-transform: uppercase;
`

const BuyButtonsWrapper = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
`
const PreviewCardHotelsInner = styled.div`
	> h2 {
		margin: 0 0 5px;
		font-size: 16px;
	}
	> p {
		margin: 0;
		font-size: 20px;
	}
`

const StarWrapper = styled.div`
	background: #b4b2b2;
	padding: 5px;
	display: inline-block;
	margin-top: -15px;
	margin-left: 140px;
	margin-right: 140px;
	width: 103px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;

	svg:first-child {
		margin-right: 2px;
		padding-left: 2px;
	}

	svg:last-child {
		margin-left: 2px;
	}
`

const HotelWrapper = styled.div`
	position: absolute;
	width: 100%;
	text-align: center;
	top: -15px;
	span {
		font-size: 28px;
	}
`
const PreviewCardHotelsWrapper = styled.div`
	table {
		table-layout: fixed;
		width: 100%;
		margin-top: 13px;
		margin-bottom: 5px;
		border-collapse: separate;
		border-spacing: 10px 10px;
		td {
			background: #d7d7d7;
			color: #2c292a;
			height: 75px;
			text-align: center;
			border-radius: 15px;
			position: relative;
		}
	}
`

const PreviewCardTableWrapper = styled.div`
	table {
		color: #6a6a6a;
		margin-top: 15px;
		width: 100%;
		font-size: 20px;
		border-collapse: separate;
		border-spacing: 0;
		letter-spacing: 1px;
	}

	tr:nth-child(even) {
		background: #eef0f0;
		color: #282727;
	}

	td:nth-child(1) {
		padding: 6px 0 6px 20px;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		text-align: left;
	}

	td:nth-child(2) {
		text-align: right;
		padding-right: 20px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`

const PreviewCardWrapper = styled.div`
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	animation: bounce-in 200ms cubic-bezier(0, 0, 0, 1.3) forwards;
	padding: 0 20px;
	background: white;
	width: 390px;
	height: 410px;
	position: absolute;
	border-radius: 20px;
	top: 140px;
	left: 144px;
	box-shadow: 0px 2px 4px rgba(#666, 0.6);
	> p {
		text-align: center;
		color: #a1a1a1;
		position: absolute;
		left: 0;
		bottom: 5px;
		width: 100%;
	}

	header {
		height: 60px;
		border-radius: 10px;
		margin: 15px 0 15px;
		background: ${props => props.color};

		h1 {
			color: #fff;
			text-transform: uppercase;
			text-align: center;
			padding-top: 12px;
			font-size: 30px;
			letter-spacing: 5px;
			font-family: 'Lilita One';
			text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
				2px 2px #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
				0 4px 2px rgba(0, 0, 0, 0.31);
		}
	}
`

const DescriptionInner = styled.div`
	margin: ${props =>
		props.type && props.type === 'jail' ? '25px 50px 50px' : '80px 50px 20px'}
	font-size: 24px;
	p {
		text-align: center;
		color: #585858;
		line-height: 1.5;
	}
`

export default PreviewCard

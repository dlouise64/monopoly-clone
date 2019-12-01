import React from 'react'
import styled from 'styled-components'
import ExitButton from './ExitButton'

function PreviewCard() {
	return (
		<PreviewCardWrapper color="#5dace2">
			<ExitButton />
			<header>
				<h1>Paris</h1>
			</header>
			<PreviewCardTableWrapper>
				<PreviewCardTable />
			</PreviewCardTableWrapper>
			<PreviewCardHotelsWrapper>
				<PreviewCardHotels />
			</PreviewCardHotelsWrapper>
			<p>Each hotel upgrade costs: $ 120</p>
		</PreviewCardWrapper>
	)
}

function PreviewCardHotels() {
	return (
		<table>
			<tbody>
				<tr>
					<td>
						<PreviewCardHotelsInner>
							<Hotel count={1} />
							<h2>Rent</h2>
							<p>$ 90</p>
						</PreviewCardHotelsInner>
					</td>
					<td>
						<PreviewCardHotelsInner>
							<Hotel count={2} />
							<h2>Rent</h2>
							<p>$ 225</p>
						</PreviewCardHotelsInner>
					</td>
					<td>
						<PreviewCardHotelsInner>
							<Hotel count={3} />
							<h2>Rent</h2>
							<p>$ 350</p>
						</PreviewCardHotelsInner>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

function Hotel(props) {
	return (
		<HotelWrapper>
			{Array.from(Array(props.count)).map((item, i) => (
				<span key={i}>🏠</span>
			))}
		</HotelWrapper>
	)
}

function PreviewCardTable() {
	return (
		<table>
			<tbody>
				<tr>
					<td>Price</td>
					<td>$ 180</td>
				</tr>
				<tr>
					<td>Rent</td>
					<td>$ 22</td>
				</tr>
				<tr>
					<td>Mortgage</td>
					<td>$ 100</td>
				</tr>
			</tbody>
		</table>
	)
}

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
		margin-top: 20px;
		border-collapse: separate;
		border-spacing: 10px 10px;
		td {
			background: #d7d7d7;
			color: #2c292a;
			height: 105px;
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
		padding: 7px 0 7px 20px;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	td:nth-child(2) {
		text-align: right;
		padding-right: 20px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`

const PreviewCardWrapper = styled.div`
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
		bottom: 20px;
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

export default PreviewCard

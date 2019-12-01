import React from 'react'
import styled from 'styled-components'

function Board(props) {
	return <BoardWrapper>{props.children}</BoardWrapper>
}

const BoardWrapper = styled.div`
	margin: 0 auto;
	width: 715px;
	padding: 10px;
	border-radius: 25px;
	background: #f19e75;
	box-shadow: 0px 0px 8px #444;
`
export default Board

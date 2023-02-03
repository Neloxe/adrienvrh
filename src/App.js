/* eslint-disable no-tabs */
import './App.css'
import React from 'react'
import { COLORS } from './exports/Colors'
import { SIZE } from './exports/Size'

function App () {
	return (
		<div style={styles.global}>
			<div>
				<div style={{ flexDirection: 'row' }}>
					<div style={styles.box1}>
					</div>
					<div style={{ height: 25, width: '100vw', backgroundColor: COLORS.green }}></div>
					<div style={styles.box1}>
					</div>
				</div>
			</div>
		</div>
	)
}

const styles = {
	global: {
		fontFamily: 'JackR',
		fontSize: SIZE.xl * 2,
		width: '100vw',
		height: '100vh',
		backgroundColor: COLORS.black,
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		padding: 0,
		margin: 0
	},
	box1: {
		borderRadius: 25,
		width: '70vw',
		height: '30vh',
		backgroundColor: COLORS.white,
		padding: 10
	},
	text: {
		color: COLORS.white
	}
}

export default App

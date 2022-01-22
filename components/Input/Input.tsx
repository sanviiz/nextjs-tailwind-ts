import React from 'react'
import styles from './Input.module.css'

function Input() {
	return (
		<>
			<input
				type="text"
				className={`${styles.customInput} p-4 outline-none block`}
			/>
		</>
	)
}

export default Input

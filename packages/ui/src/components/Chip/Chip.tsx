import { styled } from 'styled-components'
import type { Props } from './types'

const StyledDiv = styled.div`
	background-color: red;
`

export function Chip(props: Props) {
	const { ...restProps } = props

	return (
		<StyledDiv {...restProps}/>
	)
}
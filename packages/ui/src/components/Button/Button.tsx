import { styled } from 'styled-components'
import type { Props } from './types'

const StyledButton = styled.button`
	background-color: red;
`

export function Button(props: Props) {
	const { ...restProps } = props
	
	return (
		<StyledButton {...restProps}/>
	)
}
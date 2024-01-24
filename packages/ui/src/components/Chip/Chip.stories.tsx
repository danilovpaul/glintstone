import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'

export default {
	component: Chip,
	title: 'Chip',
} as Meta<typeof Chip>

type Story = StoryObj<typeof Chip>

export const Default: Story = {
	args: {
		children: [
			'Chip'
		]
	}
}
import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  }
}

const defaultProps = {
  children: 'Example'
}

export const Primary: StoryObj<typeof Button> = {
  args: {
    ...defaultProps,
    disabled: false,
    variant: 'primary'
  }
}

export const Secondary: StoryObj<typeof Button> = {
  args: {
    ...defaultProps,
    disabled: false,
    variant: 'secondary'
  }
}

export default meta

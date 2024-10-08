import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'

const meta: Meta<typeof Alert> = {
  component: Alert,
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

export const Primary: StoryObj<typeof Alert> = {
  args: {
    ...defaultProps,
    variant: 'primary'
  }
}

export const Danger: StoryObj<typeof Alert> = {
  args: {
    ...defaultProps,
    variant: 'danger'
  }
}

export default meta

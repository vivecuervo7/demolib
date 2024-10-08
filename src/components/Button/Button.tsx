import { ComponentProps } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary'
}

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.root, styles[variant])} {...props}>
      {props.children}
    </button>
  )
}

export default Button

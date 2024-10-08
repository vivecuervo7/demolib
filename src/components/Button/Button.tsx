import { ComponentProps } from 'react'
import styles from './styles.module.css'

const Button = (props: ComponentProps<'button'>) => {
  return (
    <button className={styles.root} {...props}>
      {props.children}
    </button>
  )
}

export default Button

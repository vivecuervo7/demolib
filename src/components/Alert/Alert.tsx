import { ComponentProps } from 'react'
import styles from './styles.module.css'

const Alert = (props: ComponentProps<'span'>) => {
  return (
    <div className={styles.root}>
      <Exclamation />
      <span {...props}>{props.children}</span>
    </div>
  )
}

const Exclamation = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z" />
    </svg>
  )
}

export default Alert

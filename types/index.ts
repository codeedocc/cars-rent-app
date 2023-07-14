import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  text: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
}

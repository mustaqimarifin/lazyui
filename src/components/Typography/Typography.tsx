import type { CSSProperties, ReactNode } from 'react'
import Title from './Title.js'
import Text from './Text.js'
import Link from './Link.js'

export interface TypographyProps {
  children: ReactNode
  className?: string
  tag?: 'div'
  style?: CSSProperties
}

function Typography({
  children,
  className,
  tag = 'div',
  style,
}: TypographyProps) {
  const classes = ['text-base text-gray-4']
  if (className) {
    classes.push(className)
  }
  const CustomTag: any = `${tag}`
  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  )
}

Typography.Title = Title
Typography.Text = Text
Typography.Link = Link

export default Typography

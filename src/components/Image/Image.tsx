import { cx } from 'class-variance-authority'

interface Props {
  source?: string
  style?: React.CSSProperties
  className?: string
  type?: 'rounded' | 'circle'
  alt?: string
  responsive?: boolean
}

export default function Image({
  source,
  style,
  className,
  type,
  alt,
  responsive,
}: Props) {
  const classes = []
  classes.push(cx(type === 'rounded' && 'rounded'))
  classes.push(cx(type === 'circle' && 'rounded-full'))
  if (responsive)
    classes.push('w-full h-auto')
  if (className)
    classes.push(className)
  return (
    <img className={classes.join(' ')} src={source} style={style} alt={alt} />
  )
}

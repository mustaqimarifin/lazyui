import SpaceStyles from './Space.module.css'

function Space({
  direction,
  size = 2,
  className,
  style,
  minus,
  children,
}: any) {
  const classes = []
  classes.push(direction === 'vertical' ? 'scx-space-col' : 'scx-space-row')
  classes.push(
    // @ts-ignore
    SpaceStyles[
      `scx-${minus ? 'minus-' : ''}space-${
        direction === 'vertical' ? 'y' : 'x'
      }-${size}`
    ],
  )
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} style={style}>
      {children}
    </div>
  )
}

export default Space

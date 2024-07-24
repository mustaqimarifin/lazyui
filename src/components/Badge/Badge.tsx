import BadgeStyles from './Badge.module.css'

interface Props {
  color?:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
  children: string
  size?: 'large' | 'small'
  dot?: boolean
}

function Badge({ color, children, size, dot }: Props) {
  const classes = [BadgeStyles['scx-badge']]

  if (color) {
    classes.push(BadgeStyles[`scx-badge--${color}`])
  }
  if (size === 'large') {
    classes.push(BadgeStyles['scx-badge--large'])
  }

  return (
    <span className={classes.join(' ')}>
      {dot && (
        <svg
          className={`${BadgeStyles[`scx-badge-dot`]} ${color}`}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      )}

      {children}
    </span>
  )
}
export default Badge

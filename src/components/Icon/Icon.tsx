import { IconContext } from './IconContext.js'

import IconStyles from './Icon.module.css'

interface Props {
  className?: string
  size?:
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | number
  type?: string
  color?: string
  strokeWidth?: number
  fill?: string
  stroke?: string
  background?:
    | 'brand'
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
  src?: React.ReactNode
}

interface StringMap {
  [key: string]: number
}

function Icon({
  className,
  size,
  color,
  fill = undefined,
  stroke = undefined,
  background,
  src,
}: Props) {
  return (
    <IconContext.Consumer>
      {({ contextSize, className: contextClassName }) => {
        const defaultSizes: StringMap = {
          tiny: 14,
          small: 18,
          medium: 20,
          large: 20,
          xlarge: 24,
          xxlarge: 30,
          xxxlarge: 42,
        }

        const defaultSize = defaultSizes.large

        // const LucideIcon = icon

        // const iconSize = typeof size === 'string' ? defaultSizes[contextSize] : 21
        let iconSize: any = 21

        // use contextSize of parent (via context hook) if one exists
        if (contextSize) {
          iconSize = contextSize
            ? typeof contextSize === 'string'
              ? defaultSizes[contextSize]
              : contextSize
            : defaultSize
        }

        // use size prop of this component if one exists
        if (size) {
          iconSize = size
            ? typeof size === 'string'
              ? defaultSizes[size]
              : size
            : defaultSize
        }

        // confitional used for Icons with no color settings
        // default these icons to use 'currentColor' ie, the text color
        const noColor = !color && !fill && !stroke
        const classes = ['scx-icon', className]
        if (contextClassName) {
          classes.push(contextClassName)
        }

        const Icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color={!noColor ? color : 'currentColor'}
            fill={!noColor ? fill || 'none' : 'none'}
            stroke={!noColor ? stroke : 'currentColor'}
            className={classes.join(' ')}
            width={iconSize}
            height={iconSize}
          >
            {src}
          </svg>
        )

        return background
          ? (
              <div
                className={`${IconStyles['scx-icon-container']} ${
              IconStyles[`scx-icon-container--${background}`]
            }`}
              >
                {Icon}
              </div>
            )
          : (
              Icon
            )
      }}
    </IconContext.Consumer>
  )
}

export default Icon

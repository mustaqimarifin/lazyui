import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

import { IconContext } from '../Icon/IconContext.js'
import { Loader } from '../Auth/Icons.js'
import ButtonStyles from './Button.module.css'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  block?: boolean
  className?: any
  children?: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  loading?: boolean
  loadingCentered?: boolean
  shadow?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  style?: React.CSSProperties
  type?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'outline'
    | 'dashed'
    | 'link'
    | 'text'
  danger?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  ref?: any
  ariaSelected?: boolean
  ariaControls?: string
  tabIndex?: 0 | -1
  role?: string
  textAlign?: 'left' | 'center' | 'right'
  as?: keyof JSX.IntrinsicElements
}

interface CustomButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export interface RefHandle {
  container: () => HTMLElement | null
  button: () => HTMLButtonElement | null
}

const Button = forwardRef<RefHandle, ButtonProps>(
  (
    {
      block,
      className,
      children,
      danger,
      disabled = false,
      onClick,
      icon,
      iconRight,
      loading = false,
      loadingCentered = false,
      shadow = true,
      size,
      style,
      type = 'primary',
      htmlType,
      ariaSelected,
      ariaControls,
      tabIndex,
      role,
      as,
      textAlign = 'center',
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const containerRef = useRef<HTMLElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const value = useMemo(
      () => ({
        contextSize: size,
        icon,
        iconRight,
      }),
      [size, icon, iconRight],
    )

    useImperativeHandle(ref, () => ({
      container: () => {
        return containerRef.current
      },
      button: () => {
        return buttonRef.current
      },
    }))

    // styles
    const showIcon = loading || icon

    const classes = [ButtonStyles['scx-btn']]
    const containerClasses = [ButtonStyles['scx-btn-container']]

    classes.push(ButtonStyles[`scx-btn-${type}`])

    if (block) {
      containerClasses.push(ButtonStyles['scx-btn--w-full'])
      classes.push(ButtonStyles['scx-btn--w-full'])
    }

    if (danger) {
      classes.push(ButtonStyles['scx-btn--danger'])
    }

    if (shadow && type !== 'link' && type !== 'text') {
      classes.push(ButtonStyles['scx-btn-container--shadow'])
    }

    if (size) {
      classes.push(ButtonStyles[`scx-btn--${size}`])
    }

    if (className) {
      classes.push(className)
    }

    const iconLoaderClasses = [ButtonStyles['scx-btn--anim--spin']]

    if (loadingCentered) {
      iconLoaderClasses.push(ButtonStyles[`scx-btn-loader--center`])
    }
    if (loading && loadingCentered) {
      classes.push(ButtonStyles[`scx-btn--text-fade-out`])
    }

    classes.push(ButtonStyles[`scx-btn--text-align-${textAlign}`])

    // custom button tag
    const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
      const Tag = as as keyof JSX.IntrinsicElements
      return <Tag {...props} />
    }

    const RenderedButton = ({ children }: any) =>
      as
        ? (
            <CustomButton
              className={classes.join(' ')}
              onClick={onClick}
              style={style}
            >
              {children}
            </CustomButton>
          )
        : (
            <button
              {...props}
              ref={buttonRef}
              className={classes.join(' ')}
              disabled={loading || (disabled && true)}
              onClick={onClick}
              style={style}
              type={htmlType}
              aria-selected={ariaSelected}
              aria-controls={ariaControls}
              tabIndex={tabIndex}
              role={role}
            >
              {children}
            </button>
          )

    return (
      <span ref={containerRef} className={containerClasses.join(' ')}>
        <RenderedButton>
          {showIcon
          && (loading
            ? (
                <Loader size={14} className={iconLoaderClasses.join(' ')} />
              )
            : icon
              ? (
                  <IconContext.Provider value={value}>{icon}</IconContext.Provider>
                )
              : null)}
          {children && <span>{children}</span>}
          {iconRight && !loading && (
            <IconContext.Provider value={value}>
              {iconRight}
            </IconContext.Provider>
          )}
        </RenderedButton>
      </span>
    )
  },
)

export default Button

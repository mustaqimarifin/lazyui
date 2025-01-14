import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva, cx } from 'class-variance-authority'
import $ from './AltButton.module.css'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: $['scx-btn-default'],
        danger: $['scx-btn--danger'],
        outline: $['scx-btn-outline'],
        secondary: $['scx-btn-secondary'],
        ghost: $['scx-btn-text'],
        link: $['scx-btn-link'],
      },
      size: {
        default: 'h-9 px-4 py-2',
        tiny: $['scx-btn--tiny'],
        small: $['scx-btn--small'],
        medium: $['scx-btn--medium'],
        large: $['scx-btn--large'],
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  tabIndex?: 0 | -1
  block?: boolean
  role?: string
  shadow?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>

}

const AltButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
AltButton.displayName = 'Button'

export default AltButton

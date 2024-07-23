import { useState } from 'react'
import { AlertTriangle, Check, CircleX, Info, X } from 'lucide-react'

import AlertStyles from './Alert.module.css'

interface Props {
  variant?: 'success' | 'danger' | 'warning' | 'info'
  className?: string
  title: string
  withIcon?: boolean
  closable?: boolean
  children?: React.ReactNode
}

const icons: Record<
  'success' | 'danger' | 'warning' | 'info',
  React.ReactElement
> = {
  danger: <CircleX size={20} />,
  success: <Check size={20} />,
  warning: <AlertTriangle size={20} />,
  info: <Info size={20} />,
}

function Alert({
  variant = 'success',
  className,
  title,
  withIcon,
  closable,
  children,
}: Props) {
  const [visible, setVisible] = useState(true)
  const containerClasses = [AlertStyles['sbui-alert-container']]
  containerClasses.push(AlertStyles[`sbui-alert-container--${variant}`])
  if (className)
    containerClasses.push(className)
  const descriptionClasses = [AlertStyles['sbui-alert-description']]
  descriptionClasses.push(AlertStyles[`sbui-alert-description--${variant}`])
  const closeButtonClasses = [AlertStyles['sbui-close-button']]
  closeButtonClasses.push(AlertStyles[`sbui-close-button--${variant}`])

  return (
    <>
      {visible && (
        <div className={containerClasses.join(' ')}>
          <div className="flex">
            <div className="shrink-0">{withIcon && icons[variant]}</div>
            <div className="ml-3">
              <h3 className="sbui-alert-title">{title}</h3>
              <div className={descriptionClasses.join(' ')}>{children}</div>
            </div>
            {closable && (
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    type="button"
                    aria-label="Close alert"
                    onClick={() => setVisible(false)}
                    className={closeButtonClasses.join(' ')}
                  >
                    <X size={24} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Alert

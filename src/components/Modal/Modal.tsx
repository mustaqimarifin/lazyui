import React, { useEffect } from 'react'
import { Transition, TransitionChild } from '@headlessui/react'
import { X } from 'lucide-react'
import Typography from '../Typography/index.js'
import { Space } from '../Space/index.js'
import { Button } from '../Button/index.js'
import ModalStyles from './Modal.module.css'

import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from './Dialog.js'

export interface Props {
  children?: React.ReactNode
  customFooter?: React.ReactNode
  closable?: boolean
  description?: string
  hideFooter?: boolean
  alignFooter?: 'right' | 'left'
  layout?: 'horizontal' | 'vertical'
  icon?: React.ReactNode
  loading?: boolean
  onCancel: () => void
  cancelText?: string
  onConfirm?: any
  confirmText?: string
  showIcon?: boolean
  footerBackground?: boolean
  title?: string
  variant?: 'danger' | 'warning' | 'success'
  visible: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  style?: React.CSSProperties
  overlayStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  className?: string
  overlayClassName?: string
  // transition?: AnimationTailwindClasses
  // transitionOverlay?: AnimationTailwindClasses
  triggerElement?: React.ReactNode
}

/**
 * A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * @public
 */
function Modal({
  children,
  customFooter = undefined,
  closable,
  description,
  hideFooter = false,
  alignFooter = 'left',
  layout = 'horizontal',
  loading = false,
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  title,
  footerBackground,
  icon,
  variant = 'success',
  visible = false,
  size = 'large',
  style,
  overlayStyle,
  contentStyle,
  className = '',
  overlayClassName,
  triggerElement,
}: Props) {
  const [open, setOpen] = React.useState(visible || false)

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  const footerClasses = [ModalStyles['scx-modal-footer']]
  if (footerBackground) {
    footerClasses.push(ModalStyles['scx-modal-footer--with-bg'])
  }

  const modalClasses = [
    ModalStyles[`scx-modal`],
    ModalStyles[`scx-modal--${size}`],
  ]
  if (className)
    modalClasses.push(className)

  const overlayClasses = [ModalStyles['scx-modal-overlay']]
  if (overlayClassName)
    overlayClasses.push(overlayClassName)

  const footerContent = customFooter || (
    <Space
      style={{
        width: '100%',
        justifyContent:
          layout === 'vertical'
            ? 'center'
            : alignFooter === 'right'
              ? 'flex-end'
              : 'flex-start',
      }}
    >
      <Button type="outline" onClick={onCancel} disabled={loading}>
        {cancelText}
      </Button>
      <Button
        onClick={onConfirm}
        loading={loading}
        danger={variant === 'danger'}
      >
        {confirmText}
      </Button>
    </Space>
  )

  function handleOpenChange(open: boolean) {
    if (visible !== undefined && !open) {
      onCancel()
    }
    else {
      setOpen(open)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {triggerElement && <DialogTrigger>{triggerElement}</DialogTrigger>}
      <Transition show={open}>
        <DialogOverlay>
          <TransitionChild
            enter={ModalStyles[`scx-modal-overlay--enter`]}
            enterFrom={ModalStyles[`scx-modal-overlay--enterFrom`]}
            enterTo={ModalStyles[`scx-modal-overlay--enterTo`]}
            leave={ModalStyles[`scx-modal-overlay--leave`]}
            leaveFrom={ModalStyles[`scx-modal-overlay--leaveFrom`]}
            leaveTo={ModalStyles[`scx-modal-overlay--leaveTo`]}
          >
            <div className={ModalStyles['scx-modal-overlay-container']}>
              <div
                className={overlayClasses.join(' ')}
                style={overlayStyle}
              >
              </div>
            </div>
          </TransitionChild>
        </DialogOverlay>
        <DialogContent forceMount style={{ width: '100vw' }}>
          <div
            className={`${ModalStyles['scx-modal-container']} ${className}`}
            onClick={() => (onCancel ? onCancel() : null)}
          >
            <div className={ModalStyles['scx-modal-flex-container']}>
              <div className="fixed inset-0 overflow-y-auto">
                <TransitionChild
                  enter={ModalStyles[`scx-modal--enter`]}
                  enterFrom={ModalStyles[`scx-modal--enterFrom`]}
                  enterTo={ModalStyles[`scx-modal--enterTo`]}
                  leave={ModalStyles[`scx-modal--leave`]}
                  leaveFrom={ModalStyles[`scx-modal--leaveFrom`]}
                  leaveTo={ModalStyles[`scx-modal--leaveTo`]}
                >
                  <div
                    className={modalClasses.join(' ')}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                    onClick={stopPropagation}
                    style={style}
                  >
                    <div
                      className={ModalStyles['scx-modal-content']}
                      style={contentStyle}
                    >
                      <Space
                        size={5}
                        style={{
                          alignItems:
                            layout === 'vertical' ? 'center' : 'flex-start',
                        }}
                        direction={layout}
                      >
                        {icon || null}
                        <Space
                          size={4}
                          direction="vertical"
                          style={{
                            alignItems: 'flex-start',
                            textAlign: layout === 'vertical' ? 'center' : null,
                            width: '100%',
                          }}
                        >
                          <span style={{ width: 'inherit' }}>
                            {title && (
                              <Typography.Title
                                style={{
                                  marginBottom: '.1rem',
                                  marginTop: '0',
                                }}
                                level={4}
                              >
                                {title}
                              </Typography.Title>
                            )}
                            {description && (
                              <Typography.Text>{description}</Typography.Text>
                            )}
                          </span>

                          {children}
                          {!footerBackground && !hideFooter && footerContent}
                        </Space>
                      </Space>
                    </div>
                    {!hideFooter && footerBackground && (
                      <div className={footerClasses.join(' ')}>
                        {footerContent}
                      </div>
                    )}
                    {closable && (
                      <div className={ModalStyles['scx-modal-close-container']}>
                        <Button
                          onClick={onCancel}
                          type="text"
                          shadow={false}
                          icon={<X size={20} />}
                        />
                      </div>
                    )}
                  </div>
                </TransitionChild>
              </div>
            </div>
          </div>
        </DialogContent>
      </Transition>
    </Dialog>
  )
}

export default Modal

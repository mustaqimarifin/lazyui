import React, { useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import ModalStyles from './Modal.module.css'

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
  description,
  onCancel,
  title,
  footerBackground,
  visible = false,
  size = 'large',
  style,
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

  function handleOpenChange(open: boolean) {
    if (visible !== undefined && !open) {
      onCancel()
    }
    else {
      setOpen(open)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      {triggerElement && <Dialog.Trigger>{triggerElement}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-6/90 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div
            className={`${ModalStyles['scx-modal-container']} ${className}`}
            onClick={() => (onCancel ? onCancel() : null)}
          >
            <div className={ModalStyles['scx-modal-flex-container']}>
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
                  <Dialog.Title className="text-gray-10 text-[17px] mb-4 font-semibold text-center">
                    {title}
                  </Dialog.Title>
                  <Dialog.Description className="text-gray-9 mt-[10px] mb-5 text-[15px] leading-normal">
                    {description}
                  </Dialog.Description>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal

import { useEffect, useMemo, useRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import { DropdownContext } from './OverlayContext'
import OverlayStyles from './Overlay.module.css'
import useOnClickOutside from './useOnClickOutside'

interface AnimationTailwindClasses {
  enter?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
}

interface Props {
  visible?: boolean
  overlay?: React.ReactNode
  children?: React.ReactNode
  placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
  onVisibleChange?: any
  disabled?: boolean
  triggerElement?: any
  overlayStyle?: React.CSSProperties
  overlayClassName?: string
  transition?: AnimationTailwindClasses
}

function Overlay({
  visible,
  children,
  placement = 'topCenter',
  onVisibleChange,
  triggerElement,
  overlayStyle,
  overlayClassName,
}: Props) {
  const ref = useRef(null)
  const [visibleState, setVisibleState] = useState(!!visible)
  const value = useMemo(
    () => ({ onClick: onToggle }),
    [onToggle],
  )

  const classes = [
    OverlayStyles['scx-overlay-container'],
    OverlayStyles[`scx-overlay-container--${placement}`],
  ]
  if (overlayClassName)
    classes.push(overlayClassName)

  function onToggle() {
    setVisibleState(!visibleState)
    if (onVisibleChange)
      onVisibleChange(visibleState)
  }

  // allow ovveride of Dropdown
  useEffect(() => {
    setVisibleState(!!visible)
  }, [visible])

  // detect clicks from outside
  useOnClickOutside(ref, () => {
    if (visibleState) {
      setVisibleState(!visibleState)
    }
  })

  const TriggerElement = () => {
    return <div onClick={onToggle}>{triggerElement}</div>
  }

  return (
    <div ref={ref} className={OverlayStyles['scx-overlay']}>
      {placement === 'bottomRight'
      || placement === 'bottomLeft'
      || placement === 'bottomCenter'
        ? (
            <TriggerElement />
          )
        : null}
      <Transition
        show={visibleState}
        enter={OverlayStyles[`scx-overlay--enter`]}
        enterFrom={OverlayStyles[`scx-overlay--enterFrom`]}
        enterTo={OverlayStyles[`scx-overlay--enterTo`]}
        leave={OverlayStyles[`scx-overlay--leave`]}
        leaveFrom={OverlayStyles[`scx-overlay--leaveFrom`]}
        leaveTo={OverlayStyles[`scx-overlay--leaveTo`]}
      >
        <div className={classes.join(' ')} style={overlayStyle}>
          <DropdownContext.Provider value={value}>
            {children}
          </DropdownContext.Provider>
        </div>
      </Transition>
      {placement === 'topRight'
      || placement === 'topLeft'
      || placement === 'topCenter'
        ? (
            <TriggerElement />
          )
        : null}
    </div>
  )
}

export default Overlay

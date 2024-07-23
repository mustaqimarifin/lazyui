import type { CSSProperties } from 'react'
import { AlertCircle } from 'lucide-react'
import InputErrorIconStyles from './InputErrorIcon.module.css'

interface Props {
  style?: CSSProperties
  size?: number | 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

export default function InputErrorIcon({ style, size }: Props) {
  return (
    <div
      className={InputErrorIconStyles['scx-input-error-icon']}
      style={style}
    >
      <AlertCircle size={size} strokeWidth={2} stroke="#f56565" />
    </div>
  )
}

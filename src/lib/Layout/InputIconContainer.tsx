import InputIconContainerStyles from './styles.module.css'

export default function InputIconContainer({ icon }: any) {
  return (
    <div className={InputIconContainerStyles['scx-input-icon-container']}>
      {icon}
    </div>
  )
}

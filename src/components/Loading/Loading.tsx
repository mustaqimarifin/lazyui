
import { Loader } from '../Auth/Icons.js'
import LoadingStyles from './Loading.module.css'

interface Props {
  children: React.ReactNode
  active: boolean
}
export default function Loading({ children, active }: Props) {
  const classNames = [LoadingStyles['scx-loading']]
  if (active) {
    classNames.push(LoadingStyles['scx-loading--active'])
  }

  return (
    <div className={classNames.join(' ')}>
      <div className={LoadingStyles['scx-loading-content']}>{children}</div>
      {active && (
        <Loader size={24} className={LoadingStyles['scx-loading-spinner']} />
      )}
    </div>
  )
}

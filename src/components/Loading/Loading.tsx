
import { Loader } from '../Auth/Icons.js'
import LoadingStyles from './Loading.module.css'

interface Props {
  children: React.ReactNode
  active: boolean
}
export default function Loading({ children, active }: Props) {
  const classNames = [LoadingStyles['sbui-loading']]
  if (active) {
    classNames.push(LoadingStyles['sbui-loading--active'])
  }

  return (
    <div className={classNames.join(' ')}>
      <div className={LoadingStyles['sbui-loading-content']}>{children}</div>
      {active && (
        <Loader size={24} className={LoadingStyles['sbui-loading-spinner']} />
      )}
    </div>
  )
}

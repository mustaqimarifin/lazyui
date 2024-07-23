import Space from '../../../components/Space/Space.js'
import FormLayoutStyles from './FormLayout.module.css'

interface Props {
  align?: string
  children?: any
  className?: string
  descriptionText?: string
  error?: string
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  flex?: boolean
  responsive?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  beforeLabel?: string
  afterLabel?: string
}

export function FormLayout({
  align,
  children,
  className,
  descriptionText,
  error,
  id,
  label,
  labelOptional,
  layout = 'vertical',
  style,
  flex,
  responsive = true,
  size = 'medium',
  beforeLabel,
  afterLabel,
}: Props) {
  const containerClasses = [FormLayoutStyles['scx-formlayout']]

  if (size) {
    containerClasses.push(FormLayoutStyles[`scx-formlayout--${size}`])
  }

  if (flex) {
    containerClasses.push(FormLayoutStyles['scx-formlayout--flex'])
    if (align === 'left') {
      containerClasses.push(FormLayoutStyles['scx-formlayout--flex-left'])
    }
    if (align === 'right') {
      containerClasses.push(FormLayoutStyles['scx-formlayout--flex-right'])
    }
  }
  else {
    containerClasses.push(
      responsive
        ? FormLayoutStyles['scx-formlayout--responsive']
        : FormLayoutStyles['scx-formlayout--non-responsive'],
    )
  }

  if (className) {
    containerClasses.push(className)
  }

  const labelled = Boolean(label || beforeLabel || afterLabel)

  return (
    <div className={containerClasses.join(' ')}>
      {labelled || labelOptional || layout === 'horizontal'
        ? (
            <Space
              direction={
                (layout && layout === 'horizontal')
                || (flex && layout && layout === 'vertical')
                  ? 'vertical'
                  : 'horizontal'
              }
              className={`${
            layout !== 'horizontal' && !flex
              ? FormLayoutStyles['scx-formlayout__label-container-horizontal']
              : FormLayoutStyles['scx-formlayout__label-container-vertical']
          }`}
            >
              {labelled && (
                <label
                  className={FormLayoutStyles['scx-formlayout__label']}
                  htmlFor={id}
                >
                  {beforeLabel && (
                    <span
                      className={FormLayoutStyles['scx-formlayout__label-before']}
                      id={`${id}-before`}
                    >
                      {beforeLabel}
                    </span>
                  )}
                  {label}
                  {afterLabel && (
                    <span
                      className={FormLayoutStyles['scx-formlayout__label-after']}
                      id={`${id}-after`}
                    >
                      {afterLabel}
                    </span>
                  )}
                </label>
              )}
              {labelOptional && (
                <span
                  className={FormLayoutStyles['scx-formlayout__label-opt']}
                  id={`${id}-optional`}
                >
                  {labelOptional}
                </span>
              )}
            </Space>
          )
        : null}
      <div
        className={
          layout !== 'horizontal'
            ? FormLayoutStyles['scx-formlayout__content-container-horizontal']
            : FormLayoutStyles['scx-formlayout__content-container-vertical']
            + (align === 'right'
              ? ` ${FormLayoutStyles['scx-formlayout__content-container-vertical--align-right']}`
              : '')
        }
        style={style}
      >
        {children}
        {error && (
          <p className={FormLayoutStyles['scx-formlayout__error']}>{error}</p>
        )}
        {descriptionText && (
          <p
            className={FormLayoutStyles['scx-formlayout__description']}
            id={`${id}-description`}
          >
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  )
}

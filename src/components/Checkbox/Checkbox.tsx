import React, { useMemo } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout/index.js'
import { CheckboxContext } from './CheckboxContext.js'
import CheckboxStyles from './Checkbox.module.css'

interface InputProps {
  label: string
  afterLabel?: string
  beforeLabel?: string
  value?: string
  description?: string
  disabled?: boolean
  id?: string
  name?: string
  checked?: boolean
  className?: string
  onChange?: (x: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (x: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (x: React.FocusEvent<HTMLInputElement>) => void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

interface GroupProps {
  id?: any
  layout?: 'horizontal' | 'vertical'
  error?: any
  descriptionText?: any
  label?: any
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: any
  name?: any
  value?: any
  className?: string
  children?: React.ReactNode
  options: Array<InputProps>
  defaultValue?: string
  onChange?: (x: React.ChangeEvent<HTMLInputElement>) => void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

function Group({
  id,
  layout = 'vertical',
  error,
  descriptionText,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  children,
  className,
  name,
  options,
  onChange,
  size = 'medium',
}: GroupProps) {
  const parentCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange)
      onChange(e)
  }
  const value = useMemo(
    () => ({ parentCallback, name, parentSize: size }),
    [parentCallback, name, size],
  )

  return (
    <FormLayout
      label={label}
      afterLabel={afterLabel}
      beforeLabel={beforeLabel}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      className={className}
      size={size}
    >
      <CheckboxContext.Provider
        value={value}
      >
        {options
          ? options.map((option: InputProps) => {
            return (
              <Checkbox
                key={option.id}
                id={option.id}
                value={option.value}
                label={option.label}
                beforeLabel={option.beforeLabel}
                afterLabel={option.afterLabel}
                checked={option.checked}
                name={option.name}
                description={option.description}
              />
            )
          })
          : children}
      </CheckboxContext.Provider>
    </FormLayout>
  )
}

export function Checkbox({
  className,
  id,
  label,
  afterLabel,
  beforeLabel,
  description,
  name,
  checked,
  value,
  onChange,
  onFocus,
  onBlur,
  size = 'medium',
  disabled = false,
  ...props
}: InputProps) {
  const inputName = name

  return (
    <CheckboxContext.Consumer>
      {({ parentCallback, name, parentSize }) => {
        // if id does not exist, use label
        const markupId = id || label
          .toLowerCase()
          .replace(/^[^A-Z0-9]+/gi, '')
          .replace(/ /g, '-')

        const sizing = parentSize || size

        // if name does not exist on Radio then use Context Name from Radio.Group
        // if that fails, use the id
        const markupName = inputName || (name || markupId)

        // check if checkbox checked is true or false
        // if neither true or false the checkbox will rely on native control
        const active = checked ?? undefined

        const containerClasses = [
          CheckboxStyles['scx-checkbox-container'],

        ]
        if (sizing) {
          containerClasses.push(CheckboxStyles[`scx-checkbox-container--${sizing}`])
        }
        if (className)
          containerClasses.push(className)

        function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
          // '`onChange` callback for parent component
          if (parentCallback)
            parentCallback(e)
          // '`onChange` callback for this component
          if (onChange)
            onChange(e)
        }

        return (
          <div className={containerClasses.join(' ')}>
            <input
              id={markupId}
              name={markupName}
              type="checkbox"
              className={CheckboxStyles['scx-checkbox']}
              onChange={onInputChange}
              onFocus={onFocus ? event => onFocus(event) : undefined}
              onBlur={onBlur ? event => onBlur(event) : undefined}
              checked={active}
              value={value || markupId}
              disabled={disabled}
              {...props}
            />
            <div className={CheckboxStyles['scx-checkbox__label-container']}>
              <label
                className={
                  CheckboxStyles['scx-checkbox__label-container__label']
                }
                htmlFor={markupId}
              >
                <span
                  className={
                    CheckboxStyles[
                      'scx-checkbox__label-container__label__span'
                    ]
                  }
                >
                  {beforeLabel && (
                    <span
                      className={
                        CheckboxStyles['scx-checkbox__label-text-before']
                      }
                    >
                      {beforeLabel}
                    </span>
                  )}
                  {label}
                  {afterLabel && (
                    <span
                      className={
                        CheckboxStyles['scx-checkbox__label-text-after']
                      }
                    >
                      {afterLabel}
                    </span>
                  )}
                </span>

                {description && (
                  <p
                    className={
                      CheckboxStyles['scx-checkbox__label-container__label__p']
                    }
                  >
                    {description}
                  </p>
                )}
              </label>
            </div>
          </div>
        )
      }}
    </CheckboxContext.Consumer>
  )
}

Checkbox.Group = Group
export default Checkbox

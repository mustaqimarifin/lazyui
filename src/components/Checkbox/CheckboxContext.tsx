import { createContext } from 'react'

interface C {
  parentCallback: (e: any) => void
  name: string
  parentSize: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

export const CheckboxContext = createContext<C>({
  parentCallback: (_e: any) => {},
  name: '',
  parentSize: 'medium',
})

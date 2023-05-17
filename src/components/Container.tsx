import { ReactNode } from 'react'

type Prop = {
  children: ReactNode
  className: string
}

export default function Container({ children, className }: Prop) {
  return <div className={`px-4 md:px-8 ${className}`}>{children}</div>
}

import { ReactNode } from 'react'

type Prop = {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: Prop) {
  return <div className={`container ${className}`}>{children}</div>
}

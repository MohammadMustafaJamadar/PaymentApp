import React from 'react'

export const metadata = {
  title: 'Sign in',
  description: 'Mj creactions',
}


export default function LoginLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}

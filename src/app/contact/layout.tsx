import React from 'react'

export const metadata = {
  title: 'Contact',
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

import React from "react"

export const metadata = {
  title: 'Products',
  description: 'Mj creactions',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

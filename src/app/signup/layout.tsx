import React from "react";


export const metadata = {
  title: 'Signup',
  description: 'Mj creactions',
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

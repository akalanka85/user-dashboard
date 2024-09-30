import React from 'react'

interface CardProps {
  children: any
  header: string
}

export default function Card({ header, children }: CardProps) {
  return (
    <div className='card shadow p-3 mb-5 bg-white rounded'>
      <div className='card-header'>{header}</div>
      <div className='card-body'>{children}</div>
    </div>
  )
}
